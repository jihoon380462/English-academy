// core/words-views.js — 📖 단어장 페이지(courses/words/) 전용: 레벨 목록 · 레벨 단어 보기 · Anki 단어 복습 · 10문제 퀴즈.
// 카드 id: 'w:<낱말id>:F'(영어 → 뜻) · 'w:<낱말id>:R'(뜻·예문 빈칸 → 영어 철자). 스케줄러는 core/anki.js (문장 덱과 같음), 하루 새 단어 수는 따로(Cards.wordsLeft).
const POS_KO = { n: '명사', v: '동사', adj: '형용사', adv: '부사', prep: '전치사', pron: '대명사', conj: '접속사', det: '관사·한정사', num: '수', int: '감탄사', phr: '구' };
const Words = {
  levels() { return (typeof WORD_LEVELS !== 'undefined' ? WORD_LEVELS : []).slice().sort((a, b) => (a.order || 0) - (b.order || 0)); },
  level(id) { return this.levels().find(l => l.id === id); },
  all(L) { return L.groups.flatMap(g => g.words.map(w => Object.assign({ level: L.id, group: g.title }, w))); },
  map() { if (!this._map) { this._map = {}; for (const L of this.levels()) for (const w of this.all(L)) this._map[w.id] = w; } return this._map; },
  on() { return Store.data.settings.wordLevels || {}; },
  kinds() { const k = Store.data.settings.wordCards || 'both'; return k === 'both' ? ['F', 'R'] : [k]; },
  cid(id, k) { return `w:${id}:${k}`; },
  learned(w) { return this.kinds().some(k => { const c = Store.cards[this.cid(w.id, k)]; return c && c.q === 'review'; }); },
  progress(L) { const ws = this.all(L); const n = ws.filter(w => this.learned(w)).length; const seen = ws.filter(w => this.kinds().some(k => Store.cards[this.cid(w.id, k)])).length; return { total: ws.length, learned: n, seen }; },
  // 오늘의 대기열: 학습 중 → 복습 → 새 단어(켜 둔 레벨, 레벨 순서·단어 순서대로). onlyLevel 이면 그 레벨만(켜기와 무관)
  queue(onlyLevel, now = Date.now()) {
    const kinds = this.kinds(); const lv = onlyLevel ? [this.level(onlyLevel)].filter(Boolean) : this.levels().filter(L => this.on()[L.id]);
    const ws = lv.flatMap(L => this.all(L)); const learn = [], review = [], fresh = []; const buried = new Set();
    for (const w of ws) for (const k of kinds) { const id = this.cid(w.id, k); const c = Store.cards[id]; if (!c || c.q === 'new' || c.susp) continue; if (!Anki.isDue(c, now)) continue; (c.q === 'review' ? review : learn).push(id); }
    const rev = review.filter(id => { const n = id.split(':')[1]; if (buried.has(n)) return false; buried.add(n); return true; });
    let left = Cards.wordsLeft(now);
    for (const w of ws) { if (left <= 0) break; if (buried.has(w.id)) continue; const k = kinds[0]; const id = this.cid(w.id, k); const c = Store.cards[id]; if (c && (c.q !== 'new' || c.susp)) { if (kinds[1] && c.q === 'review' && !Store.cards[this.cid(w.id, kinds[1])] && !c.susp) { const id2 = this.cid(w.id, kinds[1]); if (Anki.dayKey(c.last || 0) !== Anki.dayKey(now)) { fresh.push(id2); buried.add(w.id); left--; } } continue; } fresh.push(id); buried.add(w.id); left--; }
    learn.sort((a, b) => Store.cards[a].due - Store.cards[b].due); return { learn, review: shuffle(rev), fresh };
  },
  // 예문에서 낱말(또는 변화형)을 찾아 강조 / 빈칸으로
  find(w) { const forms = [w.w].concat(w.forms || []).map(f => f.toLowerCase()); const parts = String(w.en).split(/(\s+)/); for (let i = 0; i < parts.length; i++) { const raw = parts[i]; const t = raw.toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g, ''); if (!t) continue; if (forms.includes(t) || forms.some(f => !f.includes(' ') && t.startsWith(f) && t.length - f.length <= 3)) return { parts, i, raw, t }; } const lower = String(w.en).toLowerCase(); for (const f of forms.slice().sort((x, y) => y.length - x.length)) { const at = lower.indexOf(f); if (at >= 0 && f.includes(' ')) { let len = f.length; while (/[a-z]/.test(lower[at + len] || '')) len++; return { phrase: true, at, len }; } } return null; }, // 구는 낱말 끝까지(fossil fuel → fossil fuels)
  mark(w, blank = false) {
    const f = this.find(w); if (!f) return esc(w.en);
    if (f.phrase) { const a = w.en.slice(0, f.at), m = w.en.slice(f.at, f.at + f.len), b = w.en.slice(f.at + f.len); return esc(a) + (blank ? `<span class="blank-w">${'＿'.repeat(Math.min(8, m.length))}</span>` : `<b class="hl">${esc(m)}</b>`) + esc(b); }
    return f.parts.map((p, i) => { if (i !== f.i) return esc(p); const m = p.match(/^([^A-Za-z']*)(.*?)([^A-Za-z']*)$/); return esc(m[1]) + (blank ? `<span class="blank-w">${'＿'.repeat(Math.min(8, m[2].length))}</span>` : `<b class="hl">${esc(m[2])}</b>`) + esc(m[3]); }).join('');
  },
  answerForm(w) { const f = this.find(w); return f && !f.phrase ? f.t : w.w; }, // 빈칸에 실제로 들어간 모양(ran, apples …)
};

// ---------- 화면: 단어장 홈 (레벨 목록) ----------
Views.home = () => {
  const s = Store.data.settings; const on = Words.on(); const q = Words.queue(); const due = q.learn.length + q.review.length; const nw = q.fresh.length; const lv = Words.levels();
  const total = lv.reduce((a, L) => a + Words.all(L).length, 0); const learned = lv.reduce((a, L) => a + Words.progress(L).learned, 0);
  $('#view').innerHTML = `<div class="page words-home">
    <div class="card hero-card"><div class="hc-row"><div>${myMascot({ size: 60, mood: 'happy' })}</div><div class="grow"><div class="muted small">📖 단어장 · 미국 나이·학년별 필수 단어</div><div class="hero-title">외운 단어 ${learned} / ${total}</div>
      <div class="anki-counts"><span class="cn-n" title="새 단어">${nw}</span> <span class="cn-l" title="학습 중">${q.learn.length}</span> <span class="cn-r" title="복습">${q.review.length}</span></div></div></div>
      ${Object.values(on).some(Boolean) ? (due + nw ? `<a class="btn primary big wide" href="#study">▶ 오늘의 단어 <small>(켜 둔 레벨 · Space · 1~4)</small></a>` : `<div class="center muted">🎉 오늘 볼 단어를 다 봤어요.</div><button class="btn wide" id="moreW">➕ 새 단어 10개 더</button>`) : `<div class="center muted small">아래에서 레벨을 골라 <b>「매일 복습에 넣기」</b>를 켜면 매일 새 단어 ${s.wordsPerDay ?? 15}개와 복습 단어가 나와요.</div>`}
      <div class="small muted center">모든 단어는 그 나이 아이가 읽는 글 느낌의 예문과 함께 — 🔊로 듣고, 낱말을 누르면 그 낱말만 들려요</div></div>
    <div class="levels">${lv.map(L => { const p = Words.progress(L); const pct = p.total ? Math.round(100 * p.learned / p.total) : 0; return `<a class="card lvcard" href="#level/${L.id}"><div class="lv-icon">${L.icon}</div><div class="grow"><div class="lv-t"><b>${esc(L.title)}</b> <span class="chip">${esc(L.age)}</span> <span class="chip">${esc(L.grade)}</span>${on[L.id] ? ' <span class="chip cn-r">매일 복습</span>' : ''}</div><div class="small muted">${esc(L.desc)}</div>
      <div class="lv-bar"><div style="width:${pct}%"></div></div><div class="small muted">${p.learned}/${p.total} 외움${p.seen > p.learned ? ` · 익히는 중 ${p.seen - p.learned}` : ''}</div></div></a>`; }).join('') || '<p class="muted">단어를 준비하고 있어요.</p>'}</div>
    <div class="card"><div class="card-h">⚙ 단어장 설정</div>
      <div class="set-row"><span>하루 새 단어</span><div class="seg" id="wpd">${[5, 10, 15, 20, 30].map(n => `<button class="${(s.wordsPerDay ?? 15) === n ? 'on' : ''}" data-v="${n}">${n}</button>`).join('')}</div></div>
      <div class="set-row"><span>카드 종류</span><div class="seg" id="wk">${[['both', '둘 다'], ['F', '🔤 단어 → 뜻'], ['R', '✍️ 뜻 → 철자']].map(([v, t]) => `<button class="${(s.wordCards || 'both') === v ? 'on' : ''}" data-v="${v}">${t}</button>`).join('')}</div></div>
      <p class="small muted">「둘 다」면 먼저 단어 → 뜻 카드로 익히고, 외운 뒤 다음 날부터 뜻 → 철자 카드가 나와요. 복습 간격은 Anki 방식(문장 덱과 같음).<br>미취학~3학년은 Dolch 목록(미국 아동 도서에 많이 나오는 기능어 220 + 명사 95)을 뼈대로, 4학년부터는 학년별 교과·독서에 자주 나오는 어휘를 골라 정리했어요(공식 지정 목록은 아니에요).</p></div>
    <div class="foot muted small center"><a href="${CONFIG.HUB_PATH}">🏠 허브</a> · ${esc(T.appName)} v${CONFIG.APP_VERSION}</div></div>`;
  $$('#wpd button').forEach(b => b.onclick = () => { s.wordsPerDay = +b.dataset.v; Store.save(); Views.home(); });
  $$('#wk button').forEach(b => b.onclick = () => { s.wordCards = b.dataset.v; Store.save(); Views.home(); });
  const mw = $('#moreW'); if (mw) mw.onclick = () => { Cards.moreWords(10); UI.go('study'); };
};

// ---------- 화면: 레벨 (묶음별 단어 목록) ----------
Views.level = (arg) => {
  const [id, gi] = arg.split('/'); const L = Words.level(id); if (!L) return UI.go(''); const s = Store.data.settings; const on = !!Words.on()[L.id]; const p = Words.progress(L);
  const st = (w) => { const cs = Words.kinds().map(k => Store.cards[Words.cid(w.id, k)]).filter(Boolean); if (!cs.length) return ''; if (cs.some(c => c.q === 'review')) return '<span class="chip cn-r">외움</span>'; return '<span class="chip cn-l">익히는 중</span>'; };
  const g = gi != null && L.groups[+gi] ? [L.groups[+gi]] : L.groups;
  $('#view').innerHTML = `<div class="page level"><div class="crumb"><a href="#">← 단어장</a></div>
    <h2>${L.icon} ${esc(L.title)} <small class="muted">${esc(L.age)} · ${esc(L.grade)}</small></h2><p class="muted">${esc(L.desc)} · ${p.total}단어 · 외움 ${p.learned}</p>
    <div class="row-btns" style="justify-content:flex-start"><a class="btn primary" href="#study/${L.id}">▶ 이 레벨 공부</a><a class="btn" href="#quiz/${L.id}">🎯 퀴즈 10문제</a><button class="btn" id="lvOn">${on ? '✓ 매일 복습에 들어 있음' : '➕ 매일 복습에 넣기'}</button></div>
    <div class="grp-tabs">${L.groups.map((x, i) => `<a class="chip ${gi == i ? 'on' : ''}" href="#level/${L.id}/${i}">${esc(x.title)} ${x.words.length}</a>`).join('')}${gi != null ? `<a class="chip" href="#level/${L.id}">전체</a>` : ''}</div>
    ${g.map(x => `<h3 class="grp-h">${esc(x.title)}</h3><div class="wlist">${x.words.map(w => `<div class="wrow"><div class="wr-top"><b class="wr-w">${esc(w.w)}</b> ${UI.sayBtn(w.w, '', 'mini')}<span class="small muted">${POS_KO[w.pos] || w.pos}</span> <span class="wr-ko">${esc(w.ko)}</span> ${st(w)}</div>
      <div class="wr-ex"><span class="sent">${Words.mark(w)}</span> ${UI.sayBtn(w.en, '', 'mini')} ${UI.slowBtn(w.en)}</div><div class="small muted">${esc(w.exko)}${w.note ? ` · 💬 ${esc(w.note)}` : ''}</div></div>`).join('')}</div>`).join('')}
  </div>`;
  $('#lvOn').onclick = () => { s.wordLevels = Object.assign({}, s.wordLevels, { [L.id]: !on }); Store.save(); UI.toast(on ? '매일 복습에서 뺐어요' : `📖 ${esc(L.title)} 단어를 매일 복습에 넣었어요`); Views.level(arg); };
  // 예문 낱말 누르기: .sent 안의 낱말은 bindSay 가 처리하도록 data-w 를 붙임
  $$('.wr-ex .sent').forEach(el => { el.innerHTML = el.innerHTML.replace(/(^|>)([^<]+)(?=<|$)/g, (m, a, txt) => a + txt.split(/(\s+)/).map(t => /[A-Za-z]/.test(t) ? `<span class="w" data-w="${esc(t)}">${t}</span>` : t).join('')); });
};

// ---------- 화면: 단어 공부 (Anki 리뷰어) ----------
const WStudy = {
  q: null, cur: null, shown: false, done: 0, typed: null, hist: [], only: null,
  start(only) { this.only = only || null; this.q = Words.queue(this.only); this.done = 0; this.hist = []; this.next(); },
  pickNext(now = Date.now()) { const q = this.q; const lr = q.learn.filter(id => Store.cards[id].due <= now); if (lr.length) { q.learn.splice(q.learn.indexOf(lr[0]), 1); return lr[0]; } if (q.review.length) return q.review.shift(); if (q.fresh.length) return q.fresh.shift(); if (q.learn.length) return q.learn.sort((a, b) => Store.cards[a].due - Store.cards[b].due).shift(); return null; },
  next() { this.cur = this.pickNext(); this.shown = false; this.typed = null; if (!this.cur) return this.finish(); this.render(); },
  render() {
    const [, wid, kind] = this.cur.split(':'); const w = Words.map()[wid]; if (!w) return this.next(); const c = Store.cards[this.cur] || Anki.newCard(); const q = this.q; const L = Words.level(w.level);
    const cnt = { n: q.fresh.length + (c.q === 'new' ? 1 : 0), l: q.learn.length + (c.q === 'learn' || c.q === 'relearn' ? 1 : 0), r: q.review.length + (c.q === 'review' ? 1 : 0) };
    const front = kind === 'F'
      ? `<div class="sc-kind">🔤 이 단어의 뜻은? <small class="muted">${L ? L.icon + ' ' + esc(L.title) : ''}</small></div><div class="wc-word">${esc(w.w)}</div><div class="muted small">${POS_KO[w.pos] || ''}</div><div class="listen-big">${UI.sayBtn(w.w, '', '')}</div>${this.shown ? '' : `<button class="btn xs" id="peek">예문 보기 (힌트)</button><div class="peek" hidden><span class="sent">${Words.mark(w)}</span></div>`}`
      : `<div class="sc-kind">✍️ 빈칸에 들어갈 영어 단어는? <small class="muted">${POS_KO[w.pos] || ''}</small></div><div class="sc-ko">${esc(w.ko)}</div><div class="wc-ex">${Words.mark(w, !this.shown)}</div><div class="small muted">${esc(w.exko)}</div>${this.shown ? '' : `<input class="search" id="typeIn" placeholder="영어 단어 입력 (선택)" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="btn xs" id="hearIt">🔊 예문 듣기 (힌트)</button>`}`;
    const back = this.shown ? `<hr><div class="sc-back">${kind === 'F' ? `<div class="sc-ko">${esc(w.ko)}</div>` : `<div class="wc-word">${esc(w.w)} ${UI.sayBtn(w.w, '', 'mini')}</div>`}
      <div class="sc-en"><span class="sent">${Words.mark(w)}</span> ${UI.sayBtn(w.en)} ${UI.slowBtn(w.en)}</div><div class="sc-ko2">${esc(w.exko)}</div>${w.note ? `<div class="why">💬 ${esc(w.note)}</div>` : ''}
      ${this.typed != null ? (() => { const ans = [Words.answerForm(w), w.w].concat(w.forms || []); const r = Grader.word(this.typed, ans); return r.ok ? `<div class="fb good small">✅ 맞아요${r.typo ? ` (철자: ${esc(r.typo.got)} → ${esc(r.typo.want)})` : ''}</div>` : `<div class="fb bad small">❌ 입력: <s>${esc(this.typed)}</s> → <b>${esc(Words.answerForm(w))}</b></div>`; })() : ''}</div>` : '';
    const labels = [1, 2, 3, 4].map(g => Anki.label(c, g));
    $('#view').innerHTML = `<div class="page study"><div class="play-top"><a class="btn xs" href="${this.only ? '#level/' + this.only : '#'}">✕</a><div class="anki-counts sm"><span class="cn-n ${c.q === 'new' ? 'u' : ''}">${cnt.n}</span> <span class="cn-l ${c.q === 'learn' || c.q === 'relearn' ? 'u' : ''}">${cnt.l}</span> <span class="cn-r ${c.q === 'review' ? 'u' : ''}">${cnt.r}</span></div><span class="small muted">오늘 ${this.done}개</span></div>
      ${this.hist.length && !this.shown ? `<div class="undo-row"><button class="btn xs" id="undo">↶ 되돌리기</button></div>` : ''}
      <div class="card scard">${front}${back}${this.shown ? `<div class="row-btns"><button class="btn xs" id="susp">🚫 그만 보기 (이미 아는 단어)</button></div>` : ''}</div>
      <div class="actions">${this.shown ? `<div class="grades">${[['다시', 'again'], ['어려움', 'hard'], ['좋음', 'good'], ['쉬움', 'easy']].map(([t, cls], i) => `<button class="btn grade ${cls}" data-g="${i + 1}"><small>${labels[i]}</small>${t}</button>`).join('')}</div>` : `<button class="btn primary big wide" id="show">답 보기 <small>(Space)</small></button>`}</div></div>`;
    if (!this.shown && kind === 'F' && Store.data.settings.autoplay !== false) setTimeout(() => Speech.say(w.w, { rate: 0.9 }), 250);
    if (this.shown && Store.data.settings.autoplay !== false) setTimeout(() => Speech.say(w.en), 200);
    const pk = $('#peek'); if (pk) pk.onclick = () => { pk.remove(); $('.peek').hidden = false; };
    const hi = $('#hearIt'); if (hi) hi.onclick = () => Speech.say(w.en);
    const sh = $('#show'); if (sh) sh.onclick = () => this.flip();
    const ti = $('#typeIn'); if (ti) { ti.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); this.flip(); } }); setTimeout(() => ti.focus(), 60); }
    $$('.grade').forEach(b => b.onclick = () => this.rate(+b.dataset.g));
    const ud = $('#undo'); if (ud) ud.onclick = () => this.undo();
    const sp = $('#susp'); if (sp) sp.onclick = () => { Cards.suspend(this.cur, true); this.q.learn = this.q.learn.filter(x => x !== this.cur); UI.toast('🚫 이 단어는 이제 안 나와요'); this.next(); };
  },
  flip() { if (this.shown) return; const ti = $('#typeIn'); this.typed = ti && ti.value.trim() ? ti.value.trim() : null; this.shown = true; Sfx.click(); this.render(); },
  rate(g) {
    const id = this.cur; const before = Store.cards[id]; this.hist.push({ id, before: before ? JSON.parse(JSON.stringify(before)) : null, wasNew: !before || before.q === 'new' }); if (this.hist.length > 20) this.hist.shift();
    const c = Cards.rate(id, g); this.done++; Game.stat('wordReviews'); if (c.q === 'review' && (!before || before.q !== 'review')) Game.stat('wordsLearned');
    if (c.q === 'learn' || c.q === 'relearn') this.q.learn.push(id); g === 1 ? Sfx.wrong() : Sfx.pass();
    const goal = Game.tick(); const x = Game.addXp(g === 1 ? 1 : CONFIG.CARD_XP); Store.save(); const badges = Badges.check(); if (goal || x.ups.length || badges.length) UI.reward({ goal, ups: x.ups, badges }); UI.topbar(); this.next();
  },
  undo() { const h = this.hist.pop(); if (!h) return; if (h.before) Store.cards[h.id] = h.before; else delete Store.cards[h.id]; const t = Store.anki(); if (h.wasNew && t.wNewToday > 0) t.wNewToday--; this.q.learn = this.q.learn.filter(x => x !== h.id); if (this.cur && this.cur !== h.id) { const c = Store.cards[this.cur]; if (!c || c.q === 'new') this.q.fresh.unshift(this.cur); else if (c.q === 'review') this.q.review.unshift(this.cur); else this.q.learn.push(this.cur); } this.done = Math.max(0, this.done - 1); Store.save(); this.cur = h.id; this.shown = false; this.typed = null; UI.toast('↶ 되돌렸어요'); this.render(); },
  finish() { Sfx.clear(); if (this.done) Confetti.burst(100); $('#view').innerHTML = `<div class="page"><div class="card center"><div class="big-mascot">${myMascot({ size: 110, mood: 'happy' })}</div><h2>${this.done ? '오늘 단어 끝!' : '지금 볼 단어가 없어요'}</h2><p class="muted">${this.done ? `${this.done}개를 봤어요. ` : ''}익히는 중인 단어는 몇 분 뒤에, 외운 단어는 잊을 때쯤 다시 나와요.</p>
    <div class="row-btns"><a class="btn primary" href="${this.only ? '#level/' + this.only : '#'}">돌아가기</a>${this.hist.length ? '<button class="btn" id="undoEnd">↶ 마지막 평가 되돌리기</button>' : ''}${this.only ? `<a class="btn" href="#quiz/${this.only}">🎯 퀴즈</a>` : ''}<button class="btn" id="moreW2">➕ 새 단어 10개 더</button></div></div></div>`;
    const ue = $('#undoEnd'); if (ue) ue.onclick = () => this.undo(); $('#moreW2').onclick = () => { Cards.moreWords(10); this.start(this.only); }; },
};
Views.study = (only) => WStudy.start(only || null);
document.addEventListener('keydown', (e) => {
  if (UI.cur !== 'study' || !WStudy.cur || typeof WStudy === 'undefined') return; const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'textarea' || tag === 'input') return;
  if (!WStudy.shown && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); WStudy.flip(); }
  else if (WStudy.shown && /^[1-4]$/.test(e.key)) { e.preventDefault(); WStudy.rate(+e.key); }
  else if (WStudy.shown && e.key === ' ') { e.preventDefault(); WStudy.rate(3); }
  else if ((e.key === 'z' || e.key === 'Z') && !WStudy.shown) { e.preventDefault(); WStudy.undo(); }
});

// ---------- 화면: 퀴즈 10문제 (단어 → 뜻 / 뜻 → 단어 / 듣고 단어 / 예문 빈칸) ----------
const WQuiz = {
  run: null,
  start(id) {
    const L = Words.level(id); if (!L) return UI.go(''); const pool = Words.all(L); if (pool.length < 4) return UI.go('level/' + id);
    const pick10 = shuffle(pool).slice(0, 10); this.run = { L, pool, items: pick10.map(w => ({ w, mode: pick(['w2k', 'k2w', 'ear', 'gap']) })), i: 0, score: 0, wrong: [] }; this.render();
  },
  render() {
    const r = this.run; const it = r.items[r.i]; if (!it) return this.finish(); const w = it.w;
    const others = shuffle(r.pool.filter(x => x.id !== w.id && x.ko !== w.ko && x.w !== w.w)); const same = others.filter(x => x.pos === w.pos); const dis = same.concat(others.filter(x => x.pos !== w.pos)).slice(0, 3); const opts = shuffle([w, ...dis]); it.opts = opts;
    const q = { w2k: `<div class="muted small">이 단어의 뜻은?</div><div class="wc-word">${esc(w.w)}</div>${UI.sayBtn(w.w)}`, k2w: `<div class="muted small">이 뜻의 영어 단어는?</div><div class="sc-ko">${esc(w.ko)}</div><div class="small muted">${POS_KO[w.pos] || ''}</div>`, ear: `<div class="muted small">듣고 고르세요</div>${UI.sayBtn(w.w, '듣기', 'big')}`, gap: `<div class="muted small">빈칸에 들어갈 단어는?</div><div class="wc-ex">${Words.mark(w, true)}</div><div class="small muted">${esc(w.exko)}</div>` }[it.mode];
    const lab = (o) => it.mode === 'w2k' ? esc(o.ko) : esc(o.w);
    $('#view').innerHTML = `<div class="page quiz"><div class="play-top"><a class="btn xs" href="#level/${r.L.id}">✕</a><div class="pbar"><div style="width:${r.i * 10}%"></div></div><span class="small muted">${r.i + 1}/10</span></div>
      <div class="card"><div class="attack-q">${q}</div><div class="opts">${opts.map((o, k) => `<button class="opt" data-i="${k}"><span class="opt-t">${lab(o)}</span></button>`).join('')}</div><div class="feedback"></div></div></div>`;
    if (it.mode === 'ear') setTimeout(() => Speech.say(w.w, { rate: 0.9 }), 250);
    $$('.opt').forEach(b => b.onclick = () => this.answer(+b.dataset.i, b));
  },
  answer(k, b) {
    const r = this.run; const it = r.items[r.i]; if (it.done) return; it.done = true; const ok = it.opts[k] === it.w; const w = it.w;
    if (ok) { r.score++; Sfx.pass(); b.classList.add('good'); } else { r.wrong.push(w); Sfx.wrong(); b.classList.add('bad'); $$('.opt')[it.opts.indexOf(w)].classList.add('good'); }
    $('.feedback').innerHTML = `<div class="fb ${ok ? 'good' : 'bad'}"><b>${esc(w.w)}</b> ${UI.sayBtn(w.w, '', 'mini')} — ${esc(w.ko)}<div class="small"><span class="sent">${Words.mark(w)}</span> ${UI.sayBtn(w.en, '', 'mini')}</div><div class="small muted">${esc(w.exko)}</div></div><button class="btn primary wide" id="qNext">${r.i + 1 >= 10 ? '결과 보기' : '다음 →'}</button>`;
    $('#qNext').onclick = () => { r.i++; this.render(); };
  },
  finish() {
    const r = this.run; Game.stat('wordQuizzes'); Game.statMax('wordQuizBest', r.score); const x = Game.addXp(r.score * 2); if (r.score) Game.tick(); Store.save(); const badges = Badges.check(); UI.reward({ ups: x.ups, badges }); UI.topbar();
    if (r.score >= 8) { Sfx.clear(); Confetti.burst(120); } else Sfx.pass();
    $('#view').innerHTML = `<div class="page"><div class="card center"><h2>🎯 ${r.score} / 10</h2><p class="muted">${r.L.icon} ${esc(r.L.title)} · +${x.amount} XP</p>
      ${r.wrong.length ? `<div class="wlist" style="text-align:left">${r.wrong.map(w => `<div class="wrow"><b>${esc(w.w)}</b> ${UI.sayBtn(w.w, '', 'mini')} ${esc(w.ko)}<div class="small muted">${esc(w.en)}</div></div>`).join('')}</div><button class="btn" id="addWrong">🃏 틀린 단어 바로 복습 카드로</button>` : '<p>🎉 다 맞혔어요!</p>'}
      <div class="row-btns"><a class="btn primary big" href="#quiz/${r.L.id}" onclick="setTimeout(()=>UI.route(),0)">다시 하기</a><a class="btn" href="#level/${r.L.id}">레벨로</a></div></div></div>`;
    const aw = $('#addWrong'); if (aw) aw.onclick = () => { for (const w of r.wrong) { const id = Words.cid(w.id, Words.kinds()[0]); if (!Store.cards[id]) Store.cards[id] = Object.assign(Anki.newCard(), { q: 'learn', due: Date.now(), step: 0 }); } Store.save(); UI.toast(`🃏 ${r.wrong.length}개를 복습 카드에 넣었어요`); aw.disabled = true; };
  },
};
Views.quiz = (id) => WQuiz.start(id);
