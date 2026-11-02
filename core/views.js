// core/views.js — 코스 페이지 화면: 홈(지도)·레슨·문제 풀기·복습·뱃지·설정. 파이썬 ui-views-main/more 구조 차용
const Views = {};

// ---------- 홈: 챕터 지도 ----------
Views.home = () => {
  const cur = Game.currentLesson(); const due = Review.due().length;
  const lessonRow = (l) => {
    const ps = Content.problemsOf(l.id); const done = Game.lessonDone(l); const st = Game.lessonStars(l); const isCur = cur && cur.id === l.id;
    return `<a class="lrow ${done ? 'done' : ''} ${isCur ? 'cur' : ''} ${l.boss ? 'boss' : ''}" href="#lesson/${l.id}">
      <span class="lnum">${l.boss ? UI.img(`boss-${COURSE.id}-${l.ch}.png`, '👑', 'lboss') : done ? '✓' : (l.n ?? '')}</span>
      <span class="ltitle">${esc(l.title)}${l.boss ? ' <small class="chip">상황 미션</small>' : ''}<small class="muted">${ps.length}문제 · 약 ${l.minutes || 5}분</small></span>
      <span class="lstar">${ps.length ? UI.stars(Math.round(st / ps.length)) : ''}</span></a>`;
  };
  $('#view').innerHTML = `<div class="page home">
    <div class="card hero-card"><div class="hc-row"><div>${myMascot({ size: 64, mood: 'happy' })}</div><div class="grow"><div class="muted small">${esc(COURSE.name)}</div>
      <div class="hero-title">${cur ? `다음: ${esc(cur.title)}` : '코스 완주! 🎉'}</div></div></div>
      ${cur ? `<a class="btn primary big wide" href="#lesson/${cur.id}">▶ ${Store.cdata.lessons[cur.id] ? '이어서 하기' : '시작하기'}</a>` : ''}
      ${due ? `<a class="btn wide" href="#review">🔁 오늘의 복습 ${due}개</a>` : ''}
      ${CHAPTERS.length > 2 && !Object.values(Store.cdata.problems).some(r => r.status === 'clear') && !(Store.data.placement) ? `<a class="btn wide" href="#placement">🧭 실력 확인 (약 3분) — 어디서 시작할지 추천받기</a>` : ''}</div>
    ${CHAPTERS.map(c => { const open = Game.chapterOpen(c.n); const ls = Content.lessonsOf(c.n); const nd = ls.filter(l => Game.lessonDone(l)).length;
      return `<section class="chap ${open ? '' : 'locked'}"><div class="chap-h"><span class="chap-icon">${UI.img(`chapter-${COURSE.id}-${c.n}.png`, c.icon || '📘')}</span><div class="grow"><div class="chap-t">챕터 ${c.n}. ${esc(c.title)}</div><div class="muted small">${esc(c.desc || '')}</div></div><span class="chip">${nd}/${ls.length}</span></div>
        ${open ? `<div class="lrows">${ls.map(lessonRow).join('')}</div>` : `<div class="muted small lockmsg">🔒 앞 챕터의 상황 미션을 깨면 열려요 <small>(설정 → 「모든 챕터 열기」로 풀 수 있어요)</small></div>`}</section>`; }).join('')}
    <div class="foot muted small center">${esc(T.appName)} v${CONFIG.APP_VERSION} · <a href="#badges">🏅 뱃지</a> · <a href="#settings">⚙ 설정</a></div>
  </div>`;
};

// ---------- 레슨 (설명 쪽 → 문제) ----------
Views.lesson = (arg) => {
  const [lid, pg] = arg.split('/'); const l = Content.lesson(lid); if (!l) return UI.go('');
  const pages = l.pages || []; const i = clamp(+pg || 0, 0, pages.length); const ps = Content.problemsOf(l.id);
  Store.cdata.lessons[l.id] = Store.cdata.lessons[l.id] || 1; Store.save();
  const last = i >= pages.length;
  const body = last
    ? `<h3>📌 정리</h3><ul class="summary">${(l.summary || []).map(s => `<li>${s}</li>`).join('')}</ul>
       <a class="btn primary big wide" href="#play/${l.id}/0">${l.boss ? '👑 상황 미션 시작' : `✏️ 문제 풀기 (${ps.length}문제)`}</a>`
    : (() => { const pgx = pages[i]; return `<h3>${esc(pgx.title)}</h3><div class="lhtml">${pgx.html || ''}</div>
        ${(pgx.ex || []).length ? `<div class="examples">${pgx.ex.map(e => `<div class="ex"><div class="ex-en">${UI.chunks(e.en, e.roles)} ${UI.slowBtn(e.en)}</div><div class="ex-ko muted">${esc(e.ko || '')}</div>${e.note ? `<div class="ex-note small">${e.note}</div>` : ''}</div>`).join('')}</div>${UI.roleLegend(pgx.ex.map(e => e.roles || '').join(' '))}` : ''}
        ${pgx.tip ? `<div class="tip">💡 ${pgx.tip}</div>` : ''}`; })();
  $('#view').innerHTML = `<div class="page lesson">
    <div class="crumb"><a href="#">← 지도</a> <span class="muted">· 챕터 ${l.ch} · ${l.boss ? '상황 미션' : '레슨 ' + (l.n ?? '')}</span></div>
    <h2>${esc(l.title)}</h2>
    ${l.terms ? `<div class="terms">${Object.entries(l.terms).map(([k, v]) => `<span class="term" title="${esc(v)}">📎 ${esc(k)}</span>`).join('')}</div>` : ''}
    <div class="dots">${pages.map((_, k) => `<a class="dot ${k === i ? 'on' : ''}" href="#lesson/${l.id}/${k}"></a>`).join('')}<a class="dot ${last ? 'on' : ''}" href="#lesson/${l.id}/${pages.length}"></a></div>
    <div class="card lcard">${body}</div>
    <div class="pager">${i > 0 ? `<a class="btn" href="#lesson/${l.id}/${i - 1}">← 이전</a>` : '<span></span>'}${!last ? `<a class="btn primary" href="#lesson/${l.id}/${i + 1}">다음 →</a>` : `<a class="btn" href="#play/${l.id}/0">건너뛰고 문제로 →</a>`.replace(/.*/, '<span></span>')}</div>
  </div>`;
  $$('.term').forEach(t => t.onclick = () => UI.toast(`<b>${esc(t.textContent.replace('📎 ', ''))}</b> — ${esc(t.title)}`, 4500));
  if (!last && Store.data.settings.autoplay && i === 0) {} // 자동 재생은 문제에서만
};

// ---------- 문제 풀기 ----------
const Play = {
  state: null,
  start(list, idx, mode, lid) { this.state = { list, idx, mode, lid, hpMax: list.length, res: [] }; this.render(); },
  render() {
    const s = this.state; const p = Content.problem(s.list[s.idx]); if (!p) return UI.go('');
    const l = Content.lesson(p.lesson); const rec = Store.prob(p.id);
    const st = { hints: 0, revealed: false, fails: 0, done: false };
    const boss = l && l.boss && s.mode === 'lesson';
    const cleared = s.list.slice(0, s.idx).length;
    $('#view').innerHTML = `<div class="page play">
      <div class="play-top"><a class="btn xs" href="${s.mode === 'review' || s.mode === 'placement' ? '#' : '#lesson/' + s.lid}" title="그만하기">✕</a><div class="pbar"><div style="width:${Math.round(100 * s.idx / s.list.length)}%"></div></div><span class="small muted">${s.idx + 1}/${s.list.length}</span></div>
      ${boss ? `<div class="boss-hp"><span>${UI.img(`boss-${COURSE.id}-${l.ch}.png`, '👑', 'boss-img')}</span><div class="hp"><div style="width:${Math.round(100 * (s.hpMax - cleared) / s.hpMax)}%"></div></div><span class="small">${s.hpMax - cleared}/${s.hpMax}</span></div>` : ''}
      <div class="card prob ${p.boss ? 'is-boss' : ''}">
        <div class="phead"><span class="chip ptype">${TYPE_LABEL[p.type] || p.type}</span>${s.mode === 'review' ? '<span class="chip">복습</span>' : s.mode === 'placement' ? '<span class="chip">실력 확인</span>' : ''}${rec.status === 'clear' ? `<span class="chip">${UI.stars(rec.stars)}</span>` : ''}</div>
        ${p.title ? `<h3>${esc(p.title)}</h3>` : ''}<div class="prompt">${p.prompt || ''}</div>
        ${p.ko ? `<div class="ko">뜻: <b>${esc(p.ko)}</b></div>` : ''}
        <div class="widget"></div><div class="feedback"></div><div class="hintbox"></div>
      </div>
      <div class="actions"><button class="btn sm" data-a="hint">💡 힌트 <span class="hn">0/${(p.hints || []).length}</span></button><button class="btn sm" data-a="reveal">정답 보기</button><button class="btn primary big" data-a="check">확인</button></div>
    </div>`;
    const wEl = $('.widget'), fb = $('.feedback'), hb = $('.hintbox'), btn = $('[data-a=check]');
    const api = { submit: () => doCheck() };
    if (s.mode === 'placement') { $('.actions').innerHTML = `<button class="btn sm" data-a="idk">모르겠어요</button><button class="btn primary big" data-a="check">확인</button>`; }
    const w = (W[p.type] || W.choice).mount(p, wEl, api);
    if (w.skippable) $('.actions').insertAdjacentHTML('afterbegin', `<button class="btn sm" data-a="skip" title="마이크를 쓸 수 없을 때">건너뛰기</button>`);
    const next = () => { s.idx++; if (s.idx >= s.list.length) this.finish(); else this.render(); };
    const doCheck = () => {
      if (st.done) return next();
      if (s.mode === 'placement') { const r = w.check(); if (!r) return UI.toast('답을 먼저 골라·입력해 주세요'); if (r.soft) return UI.toast(r.msg); s.res.push({ ch: l.ch, ok: !!r.ok }); r.ok ? Sfx.pass() : Sfx.click(); st.done = true; return next(); }
      const r = w.check(); if (!r) { UI.toast(p.type === 'speak' ? '🎤 버튼을 눌러 말해 주세요' : '답을 먼저 골라·입력해 주세요'); return; }
      if (r.soft) { UI.toast(r.msg); return; }
      if (r.ok) {
        st.done = true; wEl.classList.add('locked'); Sfx.pass(); Haptic.tap();
        const res = Game.clear(p, { hints: st.hints + (r.mistakes > 2 ? 1 : 0) + (r.self ? 1 : 0), revealed: st.revealed, firstTry: st.fails === 0, inReview: s.mode === 'review', fails: st.fails });
        if (s.mode === 'review') { Game.stat('reviews'); Store.save(); }
        const best = r.best || Content.answerText(p);
        fb.innerHTML = `<div class="fb good"><div class="fb-h">✅ ${st.revealed ? '정답을 확인했어요' : pick(T.correct)} ${UI.stars(res.stars)}</div>
          ${r.typo ? `<div class="small">✏️ 철자 확인: <s>${esc(r.typo.got)}</s> → <b>${esc(r.typo.want)}</b></div>` : ''}
          ${best && p.type !== 'match' ? `<div class="fb-best">${UI.chunks(best, p.roles && p.type === 'build' ? p.roles : null)}${p.ko ? `<div class="muted small">${esc(p.ko)}</div>` : ''}</div>` : ''}
          ${r.msg || p.why ? `<div class="why">💬 ${r.msg || p.why}</div>` : ''}</div>`;
        if (best && Store.data.settings.autoplay && !['listen', 'dictation', 'speak', 'match'].includes(p.type)) setTimeout(() => Speech.say(best), 250);
        btn.textContent = s.idx + 1 >= s.list.length ? '완료 🎉' : '다음 →'; btn.classList.add('pulse');
        $('[data-a=hint]').disabled = $('[data-a=reveal]').disabled = true; const sk = $('[data-a=skip]'); if (sk) sk.remove();
        UI.reward(res); this.topbarRefresh();
      } else {
        st.fails++; Game.fail(p); Sfx.wrong(); Haptic.tap(60); $('.prob').classList.add('shake'); setTimeout(() => $('.prob') && $('.prob').classList.remove('shake'), 450);
        const d = r.diff; const ex = (r.explain || []);
        fb.innerHTML = `<div class="fb bad"><div class="fb-h">❌ ${pick(T.wrong)}</div>
          ${d && r.input ? `<div class="diffline">${d.got.map(x => `<span class="${x.ok ? 'w-ok' : 'w-bad'}">${esc(x.w)}</span>`).join(' ')}</div>${d.missing.length ? `<div class="small">빠졌거나 다른 말: ${d.missing.map(x => `<span class="w-miss">${esc(x)}</span>`).join(' ')}</div>` : ''}` : ''}
          ${ex.map(m => `<div class="why">💬 ${esc(m)}</div>`).join('')}${r.msg && !r.speak ? '' : r.msg ? `<div class="why">${esc(r.msg)}</div>` : ''}
          ${st.fails >= 2 && st.hints < (p.hints || []).length ? '<div class="small">💡 힌트를 열어 볼까요?</div>' : ''}</div>`;
        if (st.fails >= 2) $('[data-a=hint]').classList.add('pulse');
        if (w.reset) setTimeout(() => { w.reset(); }, 900);
      }
    };
    btn.onclick = doCheck;
    if (s.mode === 'placement') { $('[data-a=idk]').onclick = () => { s.res.push({ ch: l.ch, ok: false }); next(); }; return; }
    $('[data-a=hint]').onclick = () => { const H = p.hints || []; if (st.hints >= H.length) return UI.toast('힌트를 모두 봤어요. 「정답 보기」를 눌러도 돼요'); st.hints++; $('.hn').textContent = `${st.hints}/${H.length}`; hb.innerHTML = H.slice(0, st.hints).map((h, k) => `<div class="hint">💡 ${k + 1}. ${h}</div>`).join(''); };
    $('[data-a=reveal]').onclick = () => { st.revealed = true; w.reveal(); hb.innerHTML += `<div class="hint">👀 정답을 채워 뒀어요. 한 번 읽어 보고 「확인」을 누르세요. (별 0개)</div>`; if (['choice', 'listen', 'match'].includes(p.type)) doCheck(); };
    const sk = $('[data-a=skip]'); if (sk) sk.onclick = () => { Store.prob(p.id).skipped = 1; Store.save(); next(); };
  },
  topbarRefresh() { UI.topbar(); },
  finish() {
    const s = this.state;
    if (s.mode === 'placement') return Placement.result(s.res);
    if (s.mode === 'review') { $('#view').innerHTML = `<div class="page"><div class="card center"><div class="big-mascot">${myMascot({ size: 110, mood: 'happy' })}</div><h2>복습 끝!</h2><p class="muted">${s.list.length}문제를 다시 풀었어요. 풀이 결과(힌트·실수)로 다음 복습 날짜가 정해졌어요.</p><a class="btn primary big" href="#">지도로</a></div></div>`; Sfx.clear(); Confetti.burst(100); return; }
    const l = Content.lesson(s.lid); const ps = Content.problemsOf(l.id); const st = Game.lessonStars(l); const nextL = LESSONS[LESSONS.indexOf(l) + 1];
    const added = Deck.collect(l);
    if (l.boss) { Sfx.boss(); Confetti.rain(260); } else { Sfx.clear(); Confetti.burst(140); }
    const openNext = nextL && Game.chapterOpen(nextL.ch);
    $('#view').innerHTML = `<div class="page"><div class="card center done-card"><div class="big-mascot">${myMascot({ size: 120, mood: 'happy' })}</div>
      <h2>${l.boss ? '👑 미션 클리어!' : '레슨 완료!'}</h2><div class="big-stars">${UI.stars(Math.round(st / Math.max(1, ps.length)))}</div><p class="muted">${esc(l.title)} · ${ps.length}문제 · 별 ${st}/${ps.length * 3}</p>
      ${added ? `<p class="small">🃏 이 레슨 문장 <b>${added}개</b>가 <a href="../deck/">문장 덱</a>에 들어갔어요 — Anki 방식으로 복습해요.</p>` : ''}
      ${l.boss && nextL && nextL.ch !== l.ch ? `<p>🔓 <b>챕터 ${nextL.ch}</b>가 열렸어요!</p>` : ''}
      <div class="row-btns">${openNext ? `<a class="btn primary big" href="#lesson/${nextL.id}">다음: ${esc(nextL.title)} →</a>` : ''}<a class="btn" href="#">지도로</a><a class="btn" href="#play/${l.id}/0">다시 풀기</a></div></div></div>`;
  },
};
Views.play = (arg) => { const [lid, i] = arg.split('/'); const l = Content.lesson(lid); if (!l) return UI.go(''); const ids = Content.problemsOf(lid).map(p => p.id); if (!ids.length) return UI.go('lesson/' + lid); Play.start(ids, clamp(+i || 0, 0, ids.length - 1), 'lesson', lid); };
Views.p = (pid) => { const p = Content.problem(pid); if (!p) return UI.go(''); Play.start([pid], 0, 'single', p.lesson); };
Views.review = () => {
  const ids = shuffle(Review.due()).slice(0, 12);
  if (!ids.length) { $('#view').innerHTML = `<div class="page"><div class="card center"><h2>🔁 오늘 복습할 문제가 없어요</h2><p class="muted">푼 문제는 Anki 방식으로 잊을 때쯤 다시 나와요(처음 1일 → 맞힐수록 간격이 늘어나요). 문장 카드 복습은 <a href="../deck/">🃏 문장 덱</a>에서.</p><a class="btn primary" href="#">지도로</a></div></div>`; return; }
  Play.start(ids, 0, 'review', null);
};

// ---------- 뱃지 ----------
Views.badges = () => {
  const d = Store.data; const got = BADGES.filter(b => d.badges.includes(b.id)).length;
  $('#view').innerHTML = `<div class="page"><div class="crumb"><a href="#">← 지도</a></div><h2>🏅 뱃지 <small class="muted">${got}/${BADGES.length}</small></h2>
    <div class="badges">${BADGES.map(b => { const on = d.badges.includes(b.id); return `<div class="badge ${on ? 'on' : 'no'}">${UI.img(`badge-${b.id}.png`, b.icon, 'b-icon')}<b>${esc(b.name)}</b><small class="muted">${esc(b.desc)}</small>${on ? `<small class="muted">${d.badgeDates[b.id] || ''}</small>` : ''}</div>`; }).join('')}</div></div>`;
};

// ---------- 설정 ----------
Views.settings = () => {
  const s = Store.data.settings; const d = Store.data;
  const seg = (key, opts) => `<div class="seg" data-key="${key}">${opts.map(([v, t]) => `<button class="${String(s[key]) === String(v) ? 'on' : ''}" data-v="${v}">${t}</button>`).join('')}</div>`;
  const tog = (key, label) => `<label class="tog"><input type="checkbox" data-key="${key}" ${s[key] ? 'checked' : ''}> ${label}</label>`;
  const voices = Speech.voices;
  $('#view').innerHTML = `<div class="page settings"><div class="crumb"><a href="#">← 돌아가기</a></div><h2>⚙ 설정</h2>
    <div class="card"><div class="card-h">🔊 소리·음성</div>
      <div class="set-row"><span>영어 목소리</span>${voices.length ? `<select id="voiceSel"><option value="">자동 (미국 영어)</option>${voices.map(v => `<option value="${esc(v.name)}" ${s.voice === v.name ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select>` : `<span class="muted small">${Speech.synthOk ? '목소리 목록을 불러오는 중… (잠시 뒤 다시 열어 주세요)' : '이 브라우저는 음성 읽기를 지원하지 않아요'}</span>`}</div>
      <div class="set-row"><span>읽기 속도</span>${seg('rate', [[0.7, '느리게'], [0.85, '조금 느리게'], [1, '보통'], [1.2, '빠르게']])}</div>
      <div class="set-row"><span></span><button class="btn sm" id="voiceTest">🔊 들어 보기</button></div>
      ${tog('autoplay', '정답을 맞히면 문장 자동 재생 · 듣기 문제는 자동 재생')}
      ${tog('sound', '효과음')}${tog('vibrate', '진동(폰)')}
      <div class="set-row"><span>말하기 채점</span><span class="small muted">${Speech.recogOk ? '✅ 음성 인식 사용 가능' : '⚠️ 이 브라우저는 음성 인식이 없어요 → 녹음해서 스스로 채점 (크롬·엣지 권장)'}</span></div></div>
    <div class="card"><div class="card-h">🎨 화면</div>
      <div class="set-row"><span>테마</span>${seg('theme', [['auto', '기기 설정'], ['dark', '어둡게'], ['light', '밝게']])}</div>
      <div class="set-row"><span>글자 크기</span>${seg('font', [[1, '보통'], [2, '크게'], [3, '아주 크게']])}</div>
      <div class="set-row"><span>효과</span>${seg('anim', [[0, '끔'], [1, '적게'], [2, '많이']])}</div></div>
    <div class="card"><div class="card-h">🎯 학습</div>
      <div class="set-row"><span>하루 목표(문제 수)</span><div class="seg" id="goalSeg">${[3, 5, 10, 20].map(n => `<button class="${d.dailyGoal === n ? 'on' : ''}" data-v="${n}">${n}</button>`).join('')}</div></div>
      ${tog('unlockAll', '모든 챕터 열기 (순서 무시)')}</div>
    ${Sync.card()}
    <div class="card"><div class="card-h">💾 내 기록</div>
      <p class="small muted">진행은 이 기기의 브라우저에만 저장돼요(계정 없음). 다른 기기로 옮길 땐 백업 파일을 쓰세요.</p>
      <div class="row-btns"><button class="btn sm" id="exp">📤 백업 파일 받기</button><label class="btn sm">📥 백업 불러오기<input type="file" id="imp" accept=".json" hidden></label><button class="btn sm danger-out" id="rst">전체 초기화</button></div></div>
    <div class="foot muted small center">${esc(T.appName)} v${CONFIG.APP_VERSION} · 완전 무료 · 계정 없음</div></div>`;
  $$('.seg[data-key]').forEach(g => g.querySelectorAll('button').forEach(b => b.onclick = () => { const k = g.dataset.key; let v = b.dataset.v; if (k !== 'theme') v = +v; s[k] = v; Store.save(); UI.applyTheme(); Views.settings(); }));
  $$('.tog input').forEach(i => i.onchange = () => { s[i.dataset.key] = i.checked; Store.save(); });
  $$('#goalSeg button').forEach(b => b.onclick = () => { d.dailyGoal = +b.dataset.v; Store.save(); UI.topbar(); Views.settings(); });
  const vs = $('#voiceSel'); if (vs) vs.onchange = () => { s.voice = vs.value; Store.save(); Speech.say('Hello! Nice to meet you.'); };
  $('#voiceTest').onclick = () => Speech.say('Hello! This is how I sound. Nice to meet you.');
  $('#exp').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([Store.exportBundle()], { type: 'application/json' })); a.download = `english-academy-backup-${todayKey()}.json`; a.click(); };
  $('#imp').onchange = (e) => { const f = e.target.files[0]; if (!f) return; f.text().then(t => { try { Store.importBundle(t); UI.toast('불러왔어요'); UI.route(); } catch (err) { UI.toast('불러오기 실패: ' + esc(err.message)); } }); };
  $('#rst').onclick = () => { if (confirm('영어 아카데미의 모든 기록을 지울까요? (파이썬 아카데미 기록은 그대로예요)')) { Store.resetAll(); UI.toast('초기화했어요'); UI.go(''); } };
  Sync.bind(() => Views.settings());
  if (!voices.length && Speech.synthOk) setTimeout(() => { if (UI.cur === 'settings' && Speech.voices.length) Views.settings(); }, 1200);
};

// ---------- 실력 확인(배치 테스트): 챕터마다 2문제 → 시작 챕터 추천 ----------
const Placement = {
  pick() { const out = []; for (const c of CHAPTERS) { const ps = PROBLEMS.filter(p => { const l = Content.lesson(p.lesson); return l && l.ch === c.n && !l.boss && ['choice', 'fill', 'order', 'fix', 'type'].includes(p.type); }); const by = (t) => ps.filter(p => p.type === t); const a = pick(by('choice').concat(by('fill')).length ? by('choice').concat(by('fill')) : ps); const b = pick(ps.filter(p => p !== a && ['order', 'fix', 'type'].includes(p.type))) || pick(ps.filter(p => p !== a)); [a, b].filter(Boolean).forEach(p => out.push(p.id)); } return out; },
  result(res) {
    const by = {}; res.forEach(r => { (by[r.ch] = by[r.ch] || []).push(r.ok); });
    let rec = CHAPTERS[0].n; for (const c of CHAPTERS) { const r = by[c.n] || []; if (r.length && r.every(Boolean)) rec = c.n + 1; else break; }
    rec = Math.min(rec, CHAPTERS[CHAPTERS.length - 1].n); const recC = Content.chapter(rec);
    Store.data.placement = { at: todayKey(), rec }; Store.save();
    $('#view').innerHTML = `<div class="page"><div class="card center"><div class="big-mascot">${myMascot({ size: 100, mood: 'happy' })}</div><h2>실력 확인 결과</h2>
      <div class="pl-res">${CHAPTERS.map(c => { const r = by[c.n] || []; const n = r.filter(Boolean).length; return `<div class="pl-row ${c.n === rec ? 'rec' : ''}"><span>${c.icon || ''} 챕터 ${c.n}. ${esc(c.title)}</span><b>${r.length ? '●'.repeat(n) + '○'.repeat(r.length - n) : '-'}</b></div>`; }).join('')}</div>
      <p>추천 시작: <b>챕터 ${rec}. ${esc(recC ? recC.title : '')}</b></p>
      <div class="row-btns"><button class="btn primary big" id="plGo">챕터 ${rec}부터 시작 (앞 챕터 열어 두기)</button><a class="btn" href="#">처음부터 할래요</a></div>
      <p class="small muted">앞 챕터는 잠금만 풀어 두는 거라 언제든 돌아가서 풀 수 있어요.</p></div></div>`;
    $('#plGo').onclick = () => { for (const c of CHAPTERS) if (c.n < rec) { const b = Content.bossOf(c.n); if (b) Store.data.stats['boss_' + b.id] = Store.data.stats['boss_' + b.id] || 1; } Store.save(); const first = Content.lessonsOf(rec)[0]; UI.go(first ? 'lesson/' + first.id : ''); };
  },
};
Views.placement = () => { const ids = Placement.pick(); if (!ids.length) return UI.go(''); Play.start(ids, 0, 'placement', null); };
