#!/usr/bin/env python3
"""tools/regress.py — 헤드리스 크롬 회귀: 허브·코스 지도·레슨·모든 문제 유형(정답 보기→확인)·복습·문장 덱(Anki)·설정, 폰 폭 390px, 다크/라이트.
   파이썬 아카데미 저장 키(academy.*)를 미리 넣어 두고 끝까지 그대로인지 확인한다(같은 출처 충돌 방지).
   실행: python3 tools/regress.py [--shots 폴더]   (playwright + 크롬 필요)"""
import sys, os, json, threading, http.server, socketserver, functools, tempfile, shutil
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOTS = sys.argv[sys.argv.index('--shots') + 1] if '--shots' in sys.argv else None
fails = []
def check(cond, msg):
    print(('  ✓ ' if cond else '  ✗ ') + msg)
    if not cond: fails.append(msg)

# /English-academy/ 아래에 사이트를 둔 것처럼 서빙
tmp = tempfile.mkdtemp(); os.symlink(ROOT, os.path.join(tmp, 'English-academy'))
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
Handler = functools.partial(Quiet, directory=tmp)
srv = socketserver.TCPServer(('127.0.0.1', 0), Handler); port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{port}/English-academy/'
COURSES = ['basic', 'talk', 'grammar', 'read', 'dev', 'pattern', 'write', 'travel', 'work', 'phrasal']
PY_KEYS = {'academy.profile': '{"xp":1234}', 'academy.course.python': '{"problems":{"L1P1":{"status":"clear"}}}'}

with sync_playwright() as pw:
    br = pw.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
    for theme, vp in [('dark', {'width': 390, 'height': 844}), ('light', {'width': 1100, 'height': 900})]:
        print(f'[{theme} {vp["width"]}px]')
        ctx = br.new_context(viewport=vp, color_scheme=theme, service_workers='block')
        ctx.add_init_script("""(() => { if (!sessionStorage.getItem('seeded')) { sessionStorage.setItem('seeded','1'); %s } })();""" % ''.join(f"localStorage.setItem({json.dumps(k)}, {json.dumps(v)});" for k, v in PY_KEYS.items()))
        page = ctx.new_page(); errs = []
        page.on('pageerror', lambda e: errs.append(str(e)))
        page.on('console', lambda m: errs.append(m.text) if m.type == 'error' and 'favicon' not in m.text and 'assets/img' not in m.text and '404' not in m.text else None)
        def shot(name):
            if SHOTS: os.makedirs(SHOTS, exist_ok=True); page.screenshot(path=os.path.join(SHOTS, f'{theme}-{name}.png'), full_page=False)
        def no_hscroll(where):
            w = page.evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth'); check(w <= 1, f'{where}: 가로 넘침 없음 ({w}px)')
        # 허브
        page.goto(BASE); page.wait_for_selector('.hub-courses'); shot('hub'); no_hscroll('허브')
        check(page.locator('.hc.ready').count() >= 2, '허브: 열린 코스 카드 2개 이상')
        # 코스 지도
        page.goto(BASE + 'courses/basic/'); page.wait_for_selector('.lrow'); shot('map'); no_hscroll('지도')
        lessons = page.evaluate('LESSONS.map(l => l.id)')
        # 레슨 쪽 넘기기
        page.goto(BASE + f'courses/basic/#lesson/{lessons[0]}'); page.wait_for_selector('.lcard'); shot('lesson'); no_hscroll('레슨')
        check(page.locator('.say').count() > 0, '레슨: 🔊 버튼 있음')
        # 모든 코스의 모든 문제: 정답 보기 → 확인 → 통과 (라이트 테마는 코스마다 첫 레슨만)
        for course in COURSES:
            page.goto(BASE + f'courses/{course}/'); page.wait_for_selector('#view .page')
            lessons = page.evaluate('LESSONS.map(l => l.id)'); total = page.evaluate('PROBLEMS.length')
            if not lessons: continue
            if theme == 'light': lessons = lessons[:1]
            cleared = 0; need = 0
            for lid in lessons:
                page.goto(BASE + f'courses/{course}/#play/{lid}/0'); page.wait_for_selector('.prob')
                n = page.evaluate(f'Content.problemsOf({json.dumps(lid)}).length')
                for i in range(n):
                    page.wait_for_selector('.prob'); pid = page.evaluate('Play.state.list[Play.state.idx]'); typ = page.evaluate(f'Content.problem({json.dumps(pid)}).type')
                    if course == 'basic' and i == 0 and lid == lessons[0]: shot('problem')
                    if typ == 'speak':
                        page.click('[data-a=skip]'); continue
                    need += 1
                    page.evaluate('UI.closeModal()'); page.click('[data-a=reveal]')
                    if not page.locator('.fb.good').count(): page.click('[data-a=check]')
                    if page.locator('.fb.good').count(): cleared += 1
                    else: check(False, f'{course} {pid}({typ}) 정답 보기 후 통과 못 함: ' + page.inner_text('.feedback')[:120])
                    if typ in ('build', 'order', 'match', 'fill', 'fix') and theme == 'dark' and not os.environ.get('SHOT_' + typ):
                        os.environ['SHOT_' + typ] = '1'; shot('problem-' + typ); no_hscroll(f'문제 {typ}')
                    page.evaluate('UI.closeModal()'); page.click('[data-a=check]')  # 다음 (레벨업 모달은 닫고)
                page.wait_for_selector('.done-card', timeout=5000)
            check(cleared == need, f'{course}: 레슨 {len(lessons)}개 · 문제 {cleared}/{need} 정답 보기로 통과 (전체 {total}, 말하기 건너뜀)')
            no_hscroll(f'{course} 완료 화면')
        page.goto(BASE + 'courses/basic/'); page.wait_for_selector('.lrow'); total = page.evaluate('PROBLEMS.length'); speaks = page.evaluate("PROBLEMS.filter(p => p.type === 'speak').length")
        shot('done')
        # 오답 처리: 첫 문장 문제에 엉뚱한 답
        tp = page.evaluate("(PROBLEMS.find(p => p.type === 'type') || {}).id")
        if tp:
            page.goto(BASE + f'courses/basic/#p/{tp}'); page.wait_for_selector('.sent-in'); page.fill('.sent-in', 'He go school'); page.click('[data-a=check]')
            check(page.locator('.fb.bad').count() == 1, '오답: 틀림 표시'); check(page.locator('.w-bad, .w-miss').count() > 0, '오답: 낱말 비교 표시'); shot('wrong')
        # 복습 카드 (문제 카드가 생겼는지) → 내일로 당겨서 복습 화면
        nCards = page.evaluate("Object.keys(Store.cards).filter(k => k.startsWith('p:basic:')).length"); check(nCards > 0, f'문제 복습 카드 {nCards}장 생김')
        page.evaluate("Object.values(Store.cards).forEach(c => c.due = 0); Store.save()")
        page.goto(BASE + 'courses/basic/#review'); page.wait_for_selector('.prob'); check(True, '복습 화면 열림')
        # 문장 덱: 레슨 문장 수집 + Anki 리뷰어
        mine = page.evaluate('Object.keys(Store.mydeck).length'); check(mine > 0, f'레슨 문장이 내 문장 덱에 {mine}개 들어감')
        page.goto(BASE + 'courses/deck/'); page.wait_for_selector('.deck-home'); shot('deck'); no_hscroll('덱 홈')
        page.goto(BASE + 'courses/deck/#study'); page.wait_for_selector('.scard'); shot('study-front')
        page.keyboard.press('Space'); page.wait_for_selector('.grades'); shot('study-back'); no_hscroll('Anki 뒷면')
        labels = page.locator('.grade small').all_inner_texts(); check(labels[:1] == ['1분'] and labels[-1] == '4일', f'Anki 버튼 간격 표시 {labels}')
        page.keyboard.press('3'); page.wait_for_timeout(200)
        nr = page.evaluate("Object.entries(Store.cards).filter(([k,c]) => k.startsWith('s:') && c.q !== 'new').length"); check(nr == 1, '카드 평가 저장(좋음 → 학습 중)')
        # 실력 확인: 전부 「모르겠어요」 → 결과 화면 → 챕터 0 추천
        page.evaluate("localStorage.removeItem('eng.course.basic'); delete Store.data.placement; Store.save()")
        page.goto(BASE + 'courses/basic/#placement'); page.wait_for_selector('.prob')
        for _ in range(60):
            if page.locator('.pl-res').count(): break
            page.click('[data-a=idk]'); page.wait_for_timeout(30)
        check(page.locator('.pl-res').count() == 1, '실력 확인: 결과 화면'); shot('placement')
        # 설정
        page.goto(BASE + 'courses/basic/#settings'); page.wait_for_selector('.settings'); shot('settings'); no_hscroll('설정')
        # 파이썬 아카데미 키 보존
        py = page.evaluate("JSON.stringify(Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith('academy.')).map(k => [k, localStorage.getItem(k)])))")
        check(json.loads(py) == PY_KEYS, '파이썬 아카데미 저장(academy.*) 그대로')
        check(all(k.startswith('eng.') or k.startswith('academy.') for k in page.evaluate('Object.keys(localStorage)')), '영어 아카데미는 eng.* 키만 씀')
        check(not errs, '콘솔 오류 없음' + (': ' + ' | '.join(errs[:3]) if errs else ''))
        ctx.close()
    br.close()
srv.shutdown(); shutil.rmtree(tmp, ignore_errors=True)
print(f'\nFAILS {len(fails)}'); sys.exit(1 if fails else 0)
