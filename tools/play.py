#!/usr/bin/env python3
"""tools/play.py — 「직접 플레이」 QA 봇. regress.py 가 「정답 보기」로 지나가는 것과 달리, 사람처럼 화면을 조작해 푼다.
   - 문제마다: 먼저 일부러 틀려 보고(오답 화면·낱말 비교·초기화 확인) → 실제 카드 클릭·입력·보기 선택·짝 맞추기로 정답 → 다음
   - 말하기: 가짜 음성 인식(정답 문장을 들은 것처럼)으로 점수 경로까지 확인
   - 레슨 쪽: 모든 쪽 넘기기, 🔊·🐢·낱말 누르기가 실제로 음성 함수에 맞는 글을 넘기는지(가짜 speechSynthesis 로 기록)
   - 화면: 폰 폭 가로 넘침, 고정 버튼 바가 내용을 가리는지, 글자 크기 「아주 크게」에서도 깨지지 않는지
   - 덱: Anki 공부(Space·1~4·Z 되돌리기·그만 보기), 타임어택, 허브(오늘의 문장·학습 기록·코스 문제 수), 실력 확인, 새로고침 후 저장 유지
   실행: python3 tools/play.py [--course basic] [--shots 폴더] [--sample N(레슨마다 앞 N문제만)] [--font 3]
   결과: 맨 끝 「FAILS n」, 문제별 실패는 ✗ 줄. --json 파일로 요약 저장 가능."""
import sys, os, json, time, threading, http.server, socketserver, functools, tempfile, shutil, argparse
from playwright.sync_api import sync_playwright

ap = argparse.ArgumentParser(); ap.add_argument('--course', action='append'); ap.add_argument('--shots'); ap.add_argument('--sample', type=int, default=0)
ap.add_argument('--font', type=int, default=1); ap.add_argument('--theme', default='dark'); ap.add_argument('--width', type=int, default=390); ap.add_argument('--json'); ap.add_argument('--extras', action='store_true', help='덱·허브·실력 확인·저장 유지 시나리오도'); ap.add_argument('--combo', action='store_true', help='조합 말하기(표 보고 스스로 문장) 시나리오'); ap.add_argument('--words', action='store_true', help='단어장(레벨 목록·레벨 화면·Anki 단어 공부·퀴즈) 시나리오')
A = ap.parse_args()
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fails = []; stats = {'problems': 0, 'by_type': {}, 'wrong_checked': 0, 'lessons': 0, 'pages': 0, 'audio_checks': 0, 'shots': 0}
def check(cond, msg):
    if not cond: print('  ✗ ' + msg, flush=True); fails.append(msg)
    return cond

tmp = tempfile.mkdtemp(); os.symlink(ROOT, os.path.join(tmp, 'English-academy'))
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = socketserver.ThreadingTCPServer(('127.0.0.1', 0), functools.partial(Quiet, directory=tmp)); port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{port}/English-academy/'

STUBS = """
(() => {
  window.__said = [];
  const fakeSynth = { speaking: false, pending: false, paused: false, getVoices: () => [], cancel(){}, pause(){}, resume(){},
    speak(u) { window.__said.push(u.text); setTimeout(() => { try { u.onend && u.onend(); u.dispatchEvent && u.dispatchEvent(new Event('end')); } catch (e) {} }, 5); } };
  try { Object.defineProperty(window, 'speechSynthesis', { value: fakeSynth, configurable: true }); } catch (e) {}
  window.SpeechSynthesisUtterance = window.SpeechSynthesisUtterance || function (t) { this.text = t; };
  window.__fakeHeard = '';
  window.webkitSpeechRecognition = window.SpeechRecognition = function () { const r = this; r.start = () => setTimeout(() => { r.onstart && r.onstart(); const t = window.__fakeHeard; if (!t) { r.onerror && r.onerror({ error: 'no-speech' }); return; } const alt = [{ transcript: t }]; r.onresult && r.onresult({ results: [alt] }); r.onend && r.onend(); }, 20); r.stop = () => {}; };
})();
"""

def run():
    with sync_playwright() as pw:
        br = pw.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        ctx = br.new_context(viewport={'width': A.width, 'height': 844}, color_scheme=A.theme, service_workers='block', has_touch=A.width < 768)
        ctx.add_init_script(STUBS)
        ctx.add_init_script(f"if (!localStorage.getItem('eng.profile')) localStorage.setItem('eng.profile', JSON.stringify({{ settings: {{ font: {A.font}, theme: '{A.theme}', anim: 0, sound: false }} }}));")
        page = ctx.new_page(); errs = []
        page.on('pageerror', lambda e: errs.append(str(e)))
        page.on('console', lambda m: errs.append(m.text) if m.type == 'error' and '404' not in m.text and 'assets/img' not in m.text and 'favicon' not in m.text else None)
        shot_done = set()
        def shot(name):
            if not A.shots or name in shot_done: return
            shot_done.add(name); os.makedirs(A.shots, exist_ok=True); page.screenshot(path=os.path.join(A.shots, f'{A.theme}-f{A.font}-{A.width}-{name}.png')); stats['shots'] += 1
        def layout(where):
            r = page.evaluate("""() => { const de = document.documentElement; const over = de.scrollWidth - de.clientWidth; const bad = [];
              for (const el of document.querySelectorAll('.card-w, .opt, .btn, .mitem, .slot, .chip, .say')) { const b = el.getBoundingClientRect(); if (b.width && (b.right > de.clientWidth + 1 || b.left < -1)) bad.push((el.className || '') + ':' + (el.textContent || '').trim().slice(0, 20)); if (el.scrollWidth > el.clientWidth + 2 && !el.classList.contains('say')) bad.push('잘림 ' + (el.className || '') + ':' + (el.textContent || '').trim().slice(0, 20)); }
              return { over, bad: bad.slice(0, 5) }; }""")
            check(r['over'] <= 1, f'{where}: 가로 넘침 {r["over"]}px'); check(not r['bad'], f'{where}: 화면 밖/잘린 요소 {r["bad"]}')
        def covered(where):
            # 페이지 맨 아래로 내렸을 때 마지막 내용(피드백·위젯)이 고정 버튼 바에 가리지 않는지
            r = page.evaluate("""() => { window.scrollTo(0, document.body.scrollHeight); const bar = document.querySelector('.actions'); if (!bar) return 0; const top = bar.getBoundingClientRect().top; const els = [...document.querySelectorAll('.prob > *, .scard > *')].filter(e => e.getBoundingClientRect().height); const last = els[els.length - 1]; return last ? Math.round(last.getBoundingClientRect().bottom - top) : 0; }""")
            check(r <= 2, f'{where}: 고정 버튼 바가 내용을 {r}px 가림')
        def closem(): page.evaluate('typeof UI !== "undefined" && UI.closeModal()')
        def nav(url):
            # 같은 페이지 안의 #해시 이동은 page.goto 가 새로 그리기 전에 끝나 버려서(옛 화면을 읽는 경쟁) 직접 기다린다
            cur = page.url.split('#')[0]; tgt, _, h = url.partition('#')
            if cur == tgt and page.evaluate('typeof UI !== "undefined" && !!UI.views'):
                page.evaluate("h => new Promise(r => { if (location.hash === '#' + h || (!h && !location.hash)) { UI.route(); return r(); } addEventListener('hashchange', () => setTimeout(r, 30), { once: true }); location.hash = h; })", h)
            else: page.goto(url)
        def fb(): return page.evaluate("(() => { const g = document.querySelector('.fb.good'), b = document.querySelector('.fb.bad'); return g ? 'good' : b ? 'bad' : ''; })()")

        def solve(p, where):
            t = p['type']
            if t in ('choice', 'listen'):
                page.click(f'.opt[data-i="{p["ans"]}"]')
            elif t == 'match':
                for i in range(len(p['pairs'])):
                    page.click(f'.mitem[data-side="L"][data-i="{i}"]'); page.click(f'.mitem[data-side="R"][data-i="{i}"]')
            elif t in ('build', 'order'):
                if page.locator('.line .card-w').count(): page.click('[data-act=clear]')
                for i in range(len(p['cards'])): page.click(f'.pool .card-w[data-id="c{i}"]')
                page.click('[data-a=check]')
            elif t == 'fill':
                for i, b in enumerate(p['blanks']):
                    el = page.locator(f'.blank[data-k="{i}"]')
                    if el.evaluate('e => e.tagName') == 'SELECT': el.select_option(b['a'][0] if b['a'][0] in (b.get('opt') or []) else [o for o in b['opt'] if o in b['a']][0])
                    else: el.fill(b['a'][0])
                page.click('[data-a=check]')
            elif t in ('fix', 'type', 'dictation', 'free'):
                ans = (p.get('answer') or [p.get('say')]); ans = ans if isinstance(ans, list) else [ans]
                page.wait_for_timeout(90); page.fill('.sent-in', ans[0].replace('|', ' ')); page.click('[data-a=check]')  # 입력칸 자동 포커스(50ms)가 끝난 뒤에 채움
            elif t == 'speak':
                page.evaluate(f"window.__fakeHeard = {json.dumps(p['say'].replace('|', ' '))}"); page.click('.mic'); page.wait_for_timeout(120)
            page.wait_for_timeout(40)

        def try_wrong(p, where):
            t = p['type']; ok = True
            if t in ('choice', 'listen') and len(p['opts']) > 1:
                wi = (p['ans'] + 1) % len(p['opts']); page.click(f'.opt[data-i="{wi}"]'); ok = check(fb() == 'bad', f'{where}: 틀린 보기를 골랐는데 오답 표시가 없음'); page.wait_for_timeout(950)
            elif t in ('fix', 'type', 'dictation'):
                page.wait_for_timeout(90); page.fill('.sent-in', 'Zebra purple quickly window'); page.click('[data-a=check]')
                ok = check(fb() == 'bad', f'{where}: 엉뚱한 답이 오답 처리 안 됨') and check(page.locator('.w-bad, .w-miss').count() > 0, f'{where}: 오답 낱말 비교 표시 없음')
            elif t == 'order' and len(p['cards']) > 2:
                for i in reversed(range(len(p['cards']))): page.click(f'.pool .card-w[data-id="c{i}"]')
                page.click('[data-a=check]'); rev = ' '.join(reversed(p['cards']))
                ok = check(fb() == 'bad', f'{where}: 카드를 거꾸로 놓았는데 정답 처리 ({rev[:40]})')
                page.wait_for_timeout(950)
            elif t == 'fill':
                for i, b in enumerate(p['blanks']):
                    el = page.locator(f'.blank[data-k="{i}"]')
                    if el.evaluate('e => e.tagName') == 'SELECT':
                        wrong = [o for o in b['opt'] if o not in b['a']]
                        if not wrong: return
                        el.select_option(wrong[0])
                    else: el.fill('qqq')
                page.click('[data-a=check]'); ok = check(fb() == 'bad', f'{where}: 빈칸 오답이 정답 처리'); page.wait_for_timeout(950)
            else: return
            stats['wrong_checked'] += 1
            # 힌트 버튼
            if p.get('hints') and page.locator('[data-a=hint]:not([disabled])').count(): page.click('[data-a=hint]'); check(page.locator('.hint').count() >= 1, f'{where}: 힌트가 안 보임')

        def play_course(course):
            page.goto(BASE + f'courses/{course}/'); page.wait_for_selector('#view .page')
            lessons = page.evaluate('LESSONS.map(l => l.id)')
            if not lessons: return
            page.evaluate("Store.data.settings.unlockAll = true; Store.save()")
            for li, lid in enumerate(lessons):
                L = page.evaluate(f'(() => {{ const l = Content.lesson({json.dumps(lid)}); return {{ pages: (l.pages||[]).length, ex: (l.pages||[]).map(p => (p.ex||[]).map(e => e.en)), boss: !!l.boss }}; }})()')
                # 레슨 쪽 넘기기 + 소리 확인
                nav(BASE + f'courses/{course}/#lesson/{lid}'); page.wait_for_selector('.lcard')
                for pi in range(L['pages']):
                    page.wait_for_selector('.lcard'); stats['pages'] += 1
                    if pi == 0 and li == 0: shot(f'{course}-lesson'); layout(f'{course} {lid} 쪽{pi}')
                    exs = L['ex'][pi]
                    if exs:
                        page.wait_for_timeout(300); page.evaluate('Speech.stop(); window.__said = []'); page.wait_for_timeout(30); btn = page.locator('.examples .say:not(.slow)').first; want = btn.get_attribute('data-say'); btn.click(); said = page.evaluate('window.__said')
                        check(said and said[-1] == want, f'{course} {lid} 쪽{pi}: 🔊 가 버튼과 다른 글을 읽음 {said[-1:]} ≠ {want!r}')
                        check(want == ' '.join(exs[0].replace('|', ' ').split()), f'{course} {lid} 쪽{pi}: 첫 🔊 버튼 글({want!r})이 첫 예문({exs[0]!r})과 다름')
                        if li % 5 == 0:
                            page.evaluate('window.__said = []'); page.locator('.examples .say.slow').first.click(); page.wait_for_timeout(60 * (exs[0].count(' ') + 2)); said = page.evaluate('window.__said')
                            check(len(said) >= 1, f'{course} {lid}: 🐢 끊어 듣기가 소리를 안 냄')
                            page.evaluate('Speech.stop()'); page.wait_for_timeout(450)
                            w = page.locator('.examples .w').first
                            if w.count():
                                page.evaluate('window.__said = []'); w.click(); said = page.evaluate('window.__said'); check(len(said) == 1 and ' ' not in said[0], f'{course} {lid}: 낱말 누르기 결과 {said}')
                            stats['audio_checks'] += 1
                    page.locator('.pager .btn.primary').click(); page.wait_for_function(f"location.hash.endsWith('/{pi + 1}')"); page.wait_for_timeout(20)
                page.wait_for_selector('.summary'); stats['lessons'] += 1
                # 문제
                nav(BASE + f'courses/{course}/#play/{lid}/0'); page.wait_for_selector('.prob')
                n = page.evaluate(f'Content.problemsOf({json.dumps(lid)}).length'); lim = min(n, A.sample) if A.sample else n
                if L['boss']: check(page.locator('.boss-hp').count() == 1, f'{course} {lid}: 보스 HP 바 없음')
                for i in range(lim):
                    page.wait_for_selector('.prob'); closem()
                    pid = page.evaluate('Play.state.list[Play.state.idx]'); p = page.evaluate(f'Content.problem({json.dumps(pid)})'); where = f'{course} {pid}({p["type"]})'
                    stats['problems'] += 1; stats['by_type'][p['type']] = stats['by_type'].get(p['type'], 0) + 1
                    check(page.evaluate("document.querySelector('.widget').getBoundingClientRect().height") > 20, f'{where}: 문제 화면(위젯)이 비어 있음')
                    if p['type'] not in shot_done: shot(p['type']); layout(where)
                    try:
                        if i % 2 == 0: try_wrong(p, where)
                        closem(); solve(p, where); closem()
                        if p['type'] == 'speak' and fb() != 'good': page.wait_for_timeout(200)
                        if not check(fb() == 'good', f'{where}: 정답을 직접 입력했는데 통과 못 함 — ' + (page.inner_text('.feedback')[:100] if page.locator('.feedback').count() else '')):
                            page.click('[data-a=reveal]'); closem()
                            if fb() != 'good': page.click('[data-a=check]')
                        if p['type'] + '-done' not in shot_done: shot(p['type'] + '-done'); covered(where)
                        closem(); page.click('[data-a=check]')  # 다음
                    except Exception as e:
                        check(False, f'{where}: 조작 중 예외 {str(e)[:160]}'); nav(BASE + f'courses/{course}/#play/{lid}/{min(i + 1, n - 1)}'); page.wait_for_timeout(300)
                if lim == n:
                    page.wait_for_selector('.done-card', timeout=5000)
                    if li == 0: shot(f'{course}-done')
            # 새로고침해도 저장 유지
            page.goto(BASE + f'courses/{course}/'); page.reload(); page.wait_for_selector('#view .page')
            cleared = page.evaluate("Object.values(Store.cdata.problems).filter(r => r.status === 'clear').length")
            check(cleared > 0, f'{course}: 새로고침 뒤 진행 기록이 사라짐')
            print(f'  [{course}] 레슨 {len(lessons)} · 푼 문제 누적 {stats["problems"]} · 새로고침 뒤 클리어 {cleared}', flush=True)

        def extras():
            # 허브
            page.goto(BASE); page.wait_for_selector('.hub-courses'); shot('hub'); layout('허브')
            check(page.locator('.daily').count() == 1, '허브: 오늘의 문장 없음'); check(page.locator('.heat .hm').count() > 50, '허브: 학습 달력 없음')
            check('?' not in page.inner_text('.hub-courses'), '허브: 코스 카드에 문제 수가 ? 로 나옴')
            page.evaluate('window.__said = []'); page.locator('.daily .say').first.click(); check(len(page.evaluate('window.__said')) == 1, '허브: 오늘의 문장 🔊 소리 없음')
            page.click('#dyAdd'); page.wait_for_timeout(100); check(page.evaluate("Object.keys(Store.mydeck).some(k => k.startsWith('dy.'))"), '허브: 오늘의 문장을 덱에 넣기 실패')
            # 덱 공부
            page.goto(BASE + 'courses/deck/'); page.wait_for_selector('.deck-home'); shot('deck-home'); layout('덱 홈')
            page.evaluate("Store.data.settings.decksOn = Object.fromEntries(SENTENCE_DECKS.map(d => [d.id, true])); Store.save()")
            page.goto(BASE + 'courses/deck/#study'); page.wait_for_selector('.scard')
            for k in range(25):
                if not page.locator('.scard').count(): break
                page.keyboard.press('Space'); page.wait_for_selector('.grades');
                if k == 0: shot('study-back'); covered('Anki 뒷면'); layout('Anki 뒷면')
                if k == 3:
                    before = page.evaluate("Object.keys(Store.cards).filter(k => k.startsWith('s:')).length"); page.keyboard.press('3'); page.wait_for_timeout(50)
                    page.keyboard.press('z'); page.wait_for_timeout(50); after = page.evaluate("Object.keys(Store.cards).filter(k => k.startsWith('s:')).length")
                    check(after == before, f'Anki 되돌리기: 카드 수 {before} → {after}'); page.keyboard.press('Space'); page.wait_for_selector('.grades')
                if k == 5: page.click('#susp'); page.wait_for_timeout(50); continue
                page.keyboard.press(str([3, 1, 3, 4, 2][k % 5])); page.wait_for_timeout(30)
            check(page.evaluate("Object.values(Store.cards).some(c => c.susp)"), 'Anki 그만 보기가 저장 안 됨')
            page.goto(BASE + 'courses/deck/#browse'); page.wait_for_selector('.brows'); layout('둘러보기')
            # 타임어택 (빠르게: 남은 시간 5초로)
            page.goto(BASE + 'courses/deck/#attack'); page.wait_for_selector('.attack-q'); shot('attack'); layout('타임어택'); page.evaluate('Attack.run.end = Date.now() + 4000')
            hits = 0
            for _ in range(40):
                if not page.locator('.attack-q').count(): break
                # 정답 위치 읽기와 누르기를 한 번에(따로 하면 그 사이 다음 문제로 바뀌어 엉뚱한 보기를 누름 — 봇 경쟁)
                if page.evaluate("(() => { const r = Attack.run; if (!r || r.lock) return false; const b = document.querySelector('.opt[data-i=\"' + r.cur.opts.indexOf(r.cur.n) + '\"]'); if (!b) return false; b.click(); return true; })()"): hits += 1
                page.wait_for_timeout(320)
            page.wait_for_selector('.big-score', timeout=8000); check(page.evaluate('Store.data.stats.attackBest') >= 1, f'타임어택 기록 저장 안 됨 (맞힘 {hits})'); shot('attack-end')
            # 실력 확인 (전부 맞히기 → 마지막 챕터 추천)
            page.goto(BASE + 'courses/basic/'); page.evaluate("localStorage.removeItem('eng.course.basic'); Store.load('basic')"); nav(BASE + 'courses/basic/#placement'); page.wait_for_selector('.prob')
            for _ in range(80):
                if page.locator('.pl-res').count(): break
                pid = page.evaluate('Play.state.list[Play.state.idx]'); p = page.evaluate(f'Content.problem({json.dumps(pid)})')
                try: solve(p, 'placement')
                except Exception as e: print('    실력 확인 조작 예외', pid, str(e)[:120]); page.click('[data-a=idk]')
                page.wait_for_timeout(60)
            if not page.locator('.pl-res').count(): print('    실력 확인 상태', page.evaluate("JSON.stringify({s: Play.state && {idx: Play.state.idx, n: Play.state.list.length, mode: Play.state.mode}, cur: UI.cur, h: location.hash})"))
            check(page.locator('.pl-res').count() == 1, '실력 확인: 결과 화면 안 나옴'); shot('placement')
            rec = page.evaluate('Store.data.placement && Store.data.placement.rec'); check(rec is not None and rec >= 6, f'실력 확인: 다 맞혔는데 추천 챕터가 {rec}')
            # 용어 모음·뱃지·설정
            for v in ('terms', 'badges', 'settings'):
                page.goto(BASE + f'courses/basic/#{v}'); page.wait_for_selector('#view .page'); layout(v); shot(v)


        def waitd(sel, where):
            try: page.wait_for_selector(sel, timeout=8000); return True
            except Exception: check(False, f'{where}: {sel} 안 나옴 — 화면 「{page.inner_text("#view")[:160]}」 hash={page.evaluate("location.hash")}'); return False
        def words():
            page.goto(BASE + 'courses/words/'); page.wait_for_selector('.words-home'); shot('words-home'); layout('단어장 홈')
            lv = page.evaluate('Words.levels().map(L => L.id)'); check(len(lv) == 7, f'단어장: 레벨 {len(lv)}개 (7개여야 함)')
            bad = page.evaluate("Words.levels().flatMap(L => Words.all(L).filter(w => !Words.find(w)).map(w => w.id))"); check(not bad, f'단어장: 예문에서 낱말을 못 찾음 {bad[:8]}')
            dup = page.evaluate("(() => { const seen = {}; const out = []; for (const L of Words.levels()) for (const w of Words.all(L)) { const k = w.w.toLowerCase() + '/' + w.pos; if (seen[k] && !/새 뜻/.test(w.note || '')) out.push(k + ' ' + seen[k] + '→' + L.id); else seen[k] = seen[k] || L.id; } return out; })()")
            check(not dup, f'단어장: 다른 레벨에 같은 낱말·품사 {len(dup)}개 {dup[:8]}')
            leak = page.evaluate("""Words.levels().flatMap(L => Words.all(L)).filter(w => { const d = document.createElement('div'); d.innerHTML = Words.mark(w, true); const ans = Words.answerForm(w).toLowerCase(); const txt = ' ' + d.textContent.toLowerCase().replace(/[^a-z' ]+/g, ' ') + ' '; return !d.querySelector('.blank-w') || (!ans.includes(' ') && txt.includes(' ' + ans + ' ')) || (ans.includes(' ') && txt.includes(ans)); }).map(w => w.id + ' ' + w.en)""")
            check(not leak, f'단어장: 빈칸 문제에서 답이 보이거나 빈칸이 없음 {len(leak)}개 {leak[:6]}')
            for L in lv:
                nav(BASE + f'courses/words/#level/{L}'); page.wait_for_selector('.wlist'); layout(f'단어장 {L} 레벨'); shot(f'words-{L}')
                n = page.locator('.wrow').count(); total = page.evaluate(f'Words.all(Words.level("{L}")).length'); check(n == total, f'{L}: 화면 단어 {n} ≠ {total}')
                check(page.locator('.wr-ex .hl').count() == total, f'{L}: 예문 강조 {page.locator(".wr-ex .hl").count()}/{total}')
                page.evaluate('window.__said = []'); page.locator('.wr-ex .w').first.click(); page.wait_for_timeout(30); check(len(page.evaluate('window.__said')) >= 1, f'{L}: 예문 낱말 누르기 소리 없음')
                nav(BASE + f'courses/words/#level/{L}/1'); page.wait_for_selector('.wlist'); check(page.locator('.grp-h').count() == 1, f'{L}: 묶음 탭 동작 안 함')
                # 퀴즈 10문제: 처음 2개는 일부러 틀리고 나머지는 맞힘
                nav(BASE + f'courses/words/#quiz/{L}'); page.wait_for_selector('.attack-q')
                for i in range(10):
                    if i == 0: layout(f'{L} 퀴즈')
                    k = page.evaluate('WQuiz.run.items[WQuiz.run.i].opts.indexOf(WQuiz.run.items[WQuiz.run.i].w)')
                    opts = page.evaluate('WQuiz.run.items[WQuiz.run.i].opts.map(o => o.id)'); check(len(set(opts)) == 4, f'{L} 퀴즈: 보기 {len(set(opts))}개')
                    labels = page.evaluate("[...document.querySelectorAll('.opt-t')].map(e => e.textContent)"); check(len(set(labels)) == 4, f'{L} 퀴즈: 같은 글자 보기 {labels}')
                    page.click(f'.opt[data-i="{(k + 1) % 4 if i < 2 else k}"]'); check(fb() == ('bad' if i < 2 else 'good'), f'{L} 퀴즈 {i}: 피드백 {fb()}')
                    closem(); page.click('#qNext')
                page.wait_for_selector('#addWrong'); check('8 / 10' in page.inner_text('#view'), f'{L} 퀴즈: 점수 표시 이상'); layout(f'{L} 퀴즈 결과')
                closem(); page.click('#addWrong'); check(page.evaluate("Object.keys(Store.cards).filter(k => k.startsWith('w:')).length") >= 2, f'{L} 퀴즈: 틀린 단어 카드 안 생김')
            # 매일 복습 켜기 → Anki 공부 (뜻 카드)
            page.evaluate("Object.keys(Store.cards).forEach(k => delete Store.cards[k]); Store.data.settings.wordCards = 'F'; Store.save()")
            nav(BASE + f'courses/words/#level/{lv[0]}'); page.wait_for_selector('#lvOn'); page.click('#lvOn'); page.wait_for_timeout(60); check(page.evaluate(f'!!Store.data.settings.wordLevels["{lv[0]}"]'), '단어장: 매일 복습 켜기 저장 안 됨')
            nav(BASE + 'courses/words/'); page.wait_for_selector('.words-home'); check(page.locator('a[href="#study"]').count() == 1, '단어장 홈: 오늘의 단어 버튼 없음')
            nav(BASE + 'courses/words/#study'); waitd('.scard', '오늘의 단어'); shot('words-study'); layout('단어 공부 앞면')
            for k in range(20):
                if not page.locator('.scard').count(): break
                page.keyboard.press('Space'); page.wait_for_selector('.grades')
                if k == 0: layout('단어 공부 뒷면'); covered('단어 공부 뒷면'); shot('words-study-back')
                if k == 2:
                    b = page.evaluate("Object.keys(Store.cards).filter(k => k.startsWith('w:')).length"); page.keyboard.press('3'); page.wait_for_timeout(40); page.keyboard.press('z'); page.wait_for_timeout(40)
                    a = page.evaluate("Object.keys(Store.cards).filter(k => k.startsWith('w:')).length"); check(a == b, f'단어 되돌리기: 카드 {b} → {a}'); page.keyboard.press('Space'); page.wait_for_selector('.grades')
                closem()
                if k == 4: page.click('#susp'); page.wait_for_timeout(40); continue
                page.keyboard.press(str([3, 4, 3, 1, 3, 4][k % 6])); page.wait_for_timeout(30)
            check(page.evaluate("Object.entries(Store.cards).some(([k, c]) => k.startsWith('w:') && c.susp)"), '단어 그만 보기 저장 안 됨')
            check(page.evaluate('(Store.data.stats.wordReviews || 0) >= 10'), '단어 복습 횟수 기록 안 됨')
            # 철자 카드: 맞게·틀리게 입력
            page.evaluate("Store.data.settings.wordCards = 'R'; Store.data.settings.wordsPerDay = 30; Store.save()")
            for L in lv:
                page.evaluate('Store.anki().wNewToday = 0; Store.save()'); nav(BASE + f'courses/words/#study/{L}')
                if not waitd('.scard', f'{L} 철자 카드'): continue; page.wait_for_timeout(80)
                for k in range(12):
                    if not page.locator('#typeIn').count(): break
                    w = page.evaluate("(() => { const w = Words.map()[WStudy.cur.split(':')[1]]; return { ans: Words.answerForm(w), id: w.id }; })()")
                    page.fill('#typeIn', w['ans'] if k % 4 else 'zzzz'); page.keyboard.press('Enter'); page.wait_for_selector('.grades')
                    check(fb() == ('good' if k % 4 else 'bad'), f'{L} 철자 카드 {w["id"]}: 입력 {"zzzz" if k % 4 == 0 else w["ans"]} → {fb()}')
                    if k == 1: layout(f'{L} 철자 카드 뒷면')
                    closem(); page.click('.grade.good'); page.wait_for_timeout(30)
            # 허브 카드
            page.goto(BASE); page.wait_for_selector('.hub-courses'); check(page.locator('.hub-courses a[href*="courses/words/"]').count() >= 1, '허브: 단어장 카드 없음'); layout('허브(단어장 포함)')

        def combo():
            page.goto(BASE + 'courses/combo/'); page.wait_for_selector('.combo-home'); layout('조합 홈'); shot('combo-home')
            ids = page.evaluate('Combo.patterns.map(p => p.id)'); check(page.locator('.combo-row').count() == len(ids) >= 15, f'조합: 문법 목록 {page.locator(".combo-row").count()}개')
            for pid in ids:
                nav(BASE + f'courses/combo/#p/{pid}'); page.wait_for_selector('.ctab'); page.wait_for_timeout(40)
                if pid in ('be-adj', 'svom', 'past-q', 'there'): shot(f'combo-{pid}')
                layout(f'조합 {pid} 표')
                tw = page.evaluate("(() => { const w = document.querySelector('.ctab-wrap'); return w.scrollWidth - w.clientWidth; })()"); check(tw <= 2, f'조합 {pid}: 표가 옆으로 {tw}px 넘침')
                cols = page.evaluate(f'Combo.pattern("{pid}").cols.length'); check(page.locator('.ctab th').count() == cols, f'{pid}: 열 수')
                txt = page.inner_text('#view')
                ex = page.evaluate(f'Combo.pattern("{pid}").ex'); check(ex not in txt, f'{pid}: 예문(정답 같은 문장) 「{ex}」 이 화면에 보임')
                made = 0
                for k in range(9):
                    # 사람처럼: 표에서 칸을 고르고 → 맞는 문장 / 흔한 실수 / 같은 조합 반복 을 섞어서 씀
                    case = page.evaluate(r"""(() => { const p = CPlay.p, t = CPlay.table; const pick = {}; for (const c of p.cols) { const a = t[c.k]; pick[c.k] = a[Math.floor(Math.random() * a.length)]; } const r = p.make(pick); const good = Combo.sentence(r);
                      let bad = good; const V = pick.V, S = pick.S;
                      if (V) { const forms = [V.v, Inflect.s3(V.v), Inflect.past(V), Inflect.ing(V)]; const hit = forms.find(f => new RegExp('\\b' + f + '\\b').test(good)); const alt = forms.find(f => f !== hit && !new RegExp('\\b' + f + '\\b').test(good)); if (hit && alt) bad = good.replace(new RegExp('\\b' + hit + '\\b'), alt); }
                      if (bad === good) bad = good.replace(/\b(am|is|are|was|were)\b/, m => ({ am: 'is', is: 'are', are: 'is', was: 'were', were: 'was' })[m]);
                      return { good, bad, key: Object.values(pick).map(x => x.w || x.v).join('|') }; })()""")
                    if k == 2 and case['bad'] != case['good']:
                        page.fill('#cin', case['bad']); page.keyboard.press('Enter'); page.wait_for_timeout(40)
                        check(page.locator('#cfb .fb.fix').count() == 1, f'{pid}: 틀린 「{case["bad"]}」 인데 고칠 곳이 안 나옴 ({page.inner_text("#cfb")[:80]})')
                        check(page.input_value('#cin') == case['bad'], f'{pid}: 틀린 뒤 입력이 지워짐')
                        check(case['good'] not in page.inner_text('#cfb'), f'{pid}: 틀렸을 때 정답 문장을 바로 보여 줌')
                        if pid == 'svo': layout('조합 고칠 곳'); shot('combo-fix')
                        page.click('#cshow'); page.wait_for_timeout(30); check(case['good'] in page.inner_text('#cfb'), f'{pid}: 맞는 문장 보기 안 됨')
                        page.fill('#cin', case['good']); page.keyboard.press('Enter'); page.wait_for_timeout(40); closem()
                        check(page.evaluate('CPlay.made.length') == made, f'{pid}: 정답 보고 쓴 조합이 개수에 들어감'); continue
                    page.fill('#cin', case['good'].lower().rstrip('.?')); page.keyboard.press('Enter'); page.wait_for_timeout(40); closem()
                    fbt = page.inner_text('#cfb'); check(page.locator('#cfb .fb.good').count() == 1, f'{pid}: 맞는 문장 「{case["good"]}」 이 안 맞다고 함 — {fbt[:120]}')
                    n2 = page.evaluate('CPlay.made.length'); check(n2 in (made, made + 1), f'{pid}: 개수 이상 {made}→{n2}'); made = n2
                    if k == 4:
                        page.fill('#cin', case['good']); page.keyboard.press('Enter'); page.wait_for_timeout(40); check('이미 만든 조합' in page.inner_text('#cfb'), f'{pid}: 같은 조합 두 번인데 안내 없음'); check(page.evaluate('CPlay.made.length') == made, f'{pid}: 같은 조합이 두 번 셈')
                page.fill('#cin', 'hello my good world'); page.keyboard.press('Enter'); page.wait_for_timeout(30); check('표에 있는 낱말로' in page.inner_text('#cfb'), f'{pid}: 표 밖 낱말 안내 없음')
                page.click('#shuffle'); page.wait_for_timeout(40); check(page.evaluate('CPlay.made.length') == 0, f'{pid}: 새 표인데 개수 그대로')
            check(page.evaluate('(Store.data.stats.comboMade || 0) >= 50'), f'조합: 만든 문장 통계 {page.evaluate("Store.data.stats.comboMade")}')
            page.reload(); page.wait_for_timeout(200); nav(BASE + 'courses/combo/'); page.wait_for_selector('.combo-home'); check('내가 만든 문장 0개' not in page.inner_text('.hero-card'), '조합: 새로고침 뒤 기록 사라짐')
            page.goto(BASE); page.wait_for_selector('.hub-courses'); check(page.locator('.hub-courses a[href*="courses/combo/"]').count() >= 1, '허브: 조합 말하기 카드 없음')

        courses = A.course or ['basic', 'talk', 'grammar', 'read', 'dev', 'pattern', 'write', 'travel', 'work', 'phrasal']
        t0 = time.time()
        for c in ([] if (A.words or A.combo) and not A.course else courses):
            if os.path.exists(os.path.join(ROOT, 'courses', c, 'content.js')): play_course(c)
        if A.extras: extras()
        if A.words: words()
        if A.combo: combo()
        check(not errs, '콘솔 오류: ' + ' | '.join(errs[:4]))
        stats['seconds'] = round(time.time() - t0)
        ctx.close(); br.close()

try: run()
finally: srv.shutdown(); shutil.rmtree(tmp, ignore_errors=True)
print(json.dumps(stats, ensure_ascii=False)); print(f'FAILS {len(fails)}')
if A.json: json.dump({'stats': stats, 'fails': fails}, open(A.json, 'w'), ensure_ascii=False, indent=1)
sys.exit(1 if fails else 0)
