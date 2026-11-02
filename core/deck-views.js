// core/deck-views.js — 문장 덱 페이지(courses/deck/) 전용 화면: 덱 홈·공부(Anki 리뷰어)·둘러보기. core/views.js 다음에 로드해 Views.home 을 덮어쓴다
// ---------- 화면: 덱 홈 ----------
Views.home = () => {
  const cn = Deck.counts(); const st = Deck.stats(); const fc = Deck.forecast(7); const s = Store.data.settings; const on = s.decksOn || {};
  const mine = Object.keys(Store.mydeck).length; const max = Math.max(1, ...fc);
  const decks = typeof SENTENCE_DECKS !== 'undefined' ? SENTENCE_DECKS : [];
  const deckOn = (d) => on[d.id] !== undefined ? on[d.id] : !!d.defaultOn;
  $('#view').innerHTML = `<div class="page deck-home">
    <div class="card hero-card"><div class="hc-row"><div>${myMascot({ size: 60, mood: 'happy' })}</div><div class="grow"><div class="muted small">🃏 문장 덱 · Anki 방식</div><div class="hero-title">오늘 볼 카드</div>
      <div class="anki-counts"><span class="cn-n" title="새 카드">${cn.n}</span> <span class="cn-l" title="학습 중">${cn.l}</span> <span class="cn-r" title="복습">${cn.r}</span></div></div></div>
      ${cn.n + cn.l + cn.r ? `<a class="btn primary big wide" href="#study">▶ 공부 시작 <small>(Space = 답 보기 · 1~4 = 평가)</small></a>` : `<div class="center muted">🎉 오늘 볼 카드를 다 봤어요. ${Deck.notes().length ? '내일 또 만나요!' : '레슨을 끝내거나 아래에서 덱을 켜면 카드가 생겨요.'}</div>`}
      <div class="small muted center">새 카드 = 파랑 · 학습 중 = 빨강 · 복습 = 초록</div></div>
    <div class="card"><div class="card-h">📦 덱</div>
      <div class="deck-row"><div class="grow"><b>📝 내 문장</b><div class="small muted">레슨을 끝내면 그 레슨 예문이 자동으로 들어와요 · ${mine}문장</div></div><span class="chip">항상 켜짐</span></div>
      ${decks.map(d => `<label class="deck-row"><div class="grow"><b>${d.icon || '📘'} ${esc(d.title)}</b><div class="small muted">${esc(d.desc || '')} · ${d.items.length}문장</div></div><input type="checkbox" class="deck-on" data-id="${d.id}" ${deckOn(d) ? 'checked' : ''}></label>`).join('')}
    </div>
    <div class="card"><div class="card-h">📊 현황</div>
      <div class="statgrid"><div><b>${st.notes}</b><small>문장</small></div><div><b>${st.fresh}</b><small>새 카드</small></div><div><b>${st.young}</b><small>익히는 중</small></div><div><b>${st.mature}</b><small>성숙(21일+)</small></div></div>
      <div class="small muted" style="margin-top:10px">앞으로 7일 복습 예보</div><div class="fc">${fc.map((n, i) => `<div class="fc-col"><div class="fc-bar" style="height:${Math.round(60 * n / max)}px"></div><small>${n}</small><small class="muted">${i === 0 ? '오늘' : i === 1 ? '내일' : `+${i}`}</small></div>`).join('')}</div>
      <div class="row-btns"><a class="btn sm" href="#browse">🔎 카드 둘러보기</a></div></div>
    <div class="card"><div class="card-h">⚙ 덱 설정</div>
      <div class="set-row"><span>하루 새 카드</span><div class="seg" id="npd">${[10, 20, 30, 50].map(n => `<button class="${(s.newPerDay ?? 20) === n ? 'on' : ''}" data-v="${n}">${n}</button>`).join('')}</div></div>
      <div class="set-row"><span>카드 종류</span><div class="seg" id="kinds">${[['both', '둘 다'], ['L', '🎧 듣고 뜻'], ['P', '🗣 뜻 보고 영어']].map(([v, t]) => `<button class="${(s.deckCards || 'both') === v ? 'on' : ''}" data-v="${v}">${t}</button>`).join('')}</div></div>
      <p class="small muted">Anki 기본값을 따라요: 학습 단계 1분 → 10분 → 졸업 1일, 「쉬움」 4일, 틀리면 10분 뒤 다시(간격 리셋·난이도 계수 −20%), 하루는 새벽 4시에 바뀌어요.</p></div>
    <div class="foot muted small center"><a href="${CONFIG.HUB_PATH}">🏠 허브</a> · ${esc(T.appName)} v${CONFIG.APP_VERSION}</div></div>`;
  $$('.deck-on').forEach(cb => cb.onchange = () => { s.decksOn = Object.assign({}, s.decksOn, { [cb.dataset.id]: cb.checked }); Store.save(); Views.home(); });
  $$('#npd button').forEach(b => b.onclick = () => { s.newPerDay = +b.dataset.v; Store.save(); Views.home(); });
  $$('#kinds button').forEach(b => b.onclick = () => { s.deckCards = b.dataset.v; Store.save(); Views.home(); });
};

// ---------- 화면: 공부 (Anki 리뷰어) ----------
const Study = {
  q: null, cur: null, shown: false, done: 0, map: null, typed: null,
  start() { const q = Deck.queue(); this.q = q; this.map = Deck.noteMap(); this.done = 0; this.next(); },
  pickNext(now = Date.now()) {
    const q = this.q; const lr = q.learn.filter(id => Store.cards[id].due <= now);
    if (lr.length) { q.learn.splice(q.learn.indexOf(lr[0]), 1); return lr[0]; }
    if (q.review.length) return q.review.shift();
    if (q.fresh.length) return q.fresh.shift();
    if (q.learn.length) { const id = q.learn.sort((a, b) => Store.cards[a].due - Store.cards[b].due).shift(); return id; } // 학습 중 카드만 남으면 미리 보기 (Anki learn ahead)
    return null;
  },
  next() { this.cur = this.pickNext(); this.shown = false; this.typed = null; if (!this.cur) return this.finish(); this.render(); },
  render() {
    const [, nid, kind] = this.cur.split(':'); const n = this.map[nid]; if (!n) return this.next();
    const c = Store.cards[this.cur] || Anki.newCard(); const q = this.q;
    const cnt = { n: q.fresh.length + (c.q === 'new' ? 1 : 0), l: q.learn.length + (c.q === 'learn' || c.q === 'relearn' ? 1 : 0), r: q.review.length + (c.q === 'review' ? 1 : 0) };
    const front = kind === 'L'
      ? `<div class="sc-kind">🎧 듣고 뜻을 떠올려 보세요</div><div class="listen-big">${UI.sayBtn(n.en, '듣기', 'big')} ${UI.slowBtn(n.en)}</div>${this.shown ? '' : `<button class="btn xs" id="peek">영어 글자 보기</button><div class="peek" hidden>${UI.chunks(n.en, n.roles, { say: false })}</div>`}`
      : `<div class="sc-kind">🗣 영어로 말해 보세요 <small class="muted">(입력해도 돼요)</small></div><div class="sc-ko">${esc(n.ko)}</div>${this.shown ? '' : `<textarea class="sent-in" id="typeIn" rows="2" placeholder="생각한 영어 문장을 입력 (선택)" autocapitalize="sentences" spellcheck="false"></textarea>`}`;
    const back = this.shown ? `<hr><div class="sc-back"><div class="sc-en">${UI.chunks(n.en, n.roles)} ${UI.slowBtn(n.en)}</div><div class="sc-ko2">${esc(n.ko)}</div>
      ${n.key ? `<div class="small">🔑 <b>${esc(n.key)}</b>${n.keyko ? ` — ${esc(n.keyko)}` : ''}</div>` : ''}${n.note ? `<div class="why">💬 ${n.note}</div>` : ''}
      ${this.typed ? (() => { const r = Grader.text(this.typed, [n.en].concat(n.alt || [])); return r.ok ? `<div class="fb good small">✅ 입력한 문장이 맞아요${r.typo ? ` (철자: ${esc(r.typo.got)} → ${esc(r.typo.want)})` : ''}</div>` : `<div class="fb bad small"><div class="diffline">${r.diff.got.map(x => `<span class="${x.ok ? 'w-ok' : 'w-bad'}">${esc(x.w)}</span>`).join(' ')}</div>${r.diff.missing.length ? `<div>빠진 말: ${r.diff.missing.map(x => `<span class="w-miss">${esc(x)}</span>`).join(' ')}</div>` : ''}</div>`; })() : ''}
      <div class="small muted">${esc(n.src || (typeof SENTENCE_DECKS !== 'undefined' ? ((SENTENCE_DECKS.find(d => d.id === n.deck) || {}).title || '') : ''))}</div></div>` : '';
    const labels = [1, 2, 3, 4].map(g => Anki.label(c, g));
    $('#view').innerHTML = `<div class="page study">
      <div class="play-top"><a class="btn xs" href="#" title="그만하기">✕</a><div class="anki-counts sm"><span class="cn-n ${c.q === 'new' ? 'u' : ''}">${cnt.n}</span> <span class="cn-l ${c.q === 'learn' || c.q === 'relearn' ? 'u' : ''}">${cnt.l}</span> <span class="cn-r ${c.q === 'review' ? 'u' : ''}">${cnt.r}</span></div><span class="small muted">오늘 ${this.done}장</span></div>
      <div class="card scard">${front}${back}</div>
      <div class="actions">${this.shown
        ? `<div class="grades">${[['다시', 'again'], ['어려움', 'hard'], ['좋음', 'good'], ['쉬움', 'easy']].map(([t, cls], i) => `<button class="btn grade ${cls}" data-g="${i + 1}"><small>${labels[i]}</small>${t}</button>`).join('')}</div>`
        : `<button class="btn primary big wide" id="show">답 보기 <small>(Space)</small></button>`}</div></div>`;
    if (!this.shown && kind === 'L' && Store.data.settings.autoplay !== false) setTimeout(() => Speech.say(n.en), 300);
    if (this.shown && kind === 'P' && Store.data.settings.autoplay !== false) setTimeout(() => Speech.say(n.en), 200);
    const pk = $('#peek'); if (pk) pk.onclick = () => { pk.remove(); $('.peek').hidden = false; };
    const sh = $('#show'); if (sh) sh.onclick = () => this.flip();
    const ti = $('#typeIn'); if (ti) { ti.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.flip(); } }); }
    $$('.grade').forEach(b => b.onclick = () => this.rate(+b.dataset.g));
  },
  flip() { if (this.shown) return; const ti = $('#typeIn'); this.typed = ti && ti.value.trim() ? ti.value.trim() : null; this.shown = true; Sfx.click(); this.render(); },
  rate(g) {
    const id = this.cur; const before = Store.cards[id]; const c = Cards.rate(id, g); this.done++;
    Game.stat('cardReviews'); if (c.q === 'review' && (!before || before.q !== 'review')) Game.stat('cardsGraduated');
    Store.data.stats.matureCards = Object.entries(Store.cards).filter(([k, x]) => k.startsWith('s:') && x.q === 'review' && x.ivl >= 21).length;
    if ((c.q === 'learn' || c.q === 'relearn')) this.q.learn.push(id);
    g === 1 ? Sfx.wrong() : Sfx.pass();
    const goal = Game.tick(); const x = Game.addXp(g === 1 ? 1 : CONFIG.CARD_XP); Store.save(); const badges = Badges.check();
    if (goal || x.ups.length || badges.length) UI.reward({ goal, ups: x.ups, badges }); UI.topbar();
    this.next();
  },
  finish() {
    Sfx.clear(); if (this.done) Confetti.burst(100);
    $('#view').innerHTML = `<div class="page"><div class="card center"><div class="big-mascot">${myMascot({ size: 110, mood: 'happy' })}</div><h2>${this.done ? '오늘 카드 끝!' : '지금 볼 카드가 없어요'}</h2>
      <p class="muted">${this.done ? `${this.done}장을 봤어요. ` : ''}학습 중인 카드는 몇 분 뒤에, 복습 카드는 정해진 날에 다시 나와요.</p><a class="btn primary" href="#">덱 홈으로</a></div></div>`;
  },
};
Views.study = () => Study.start();
document.addEventListener('keydown', (e) => {
  if (UI.cur !== 'study' || !Study.cur) return; const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'textarea' || tag === 'input') return;
  if (!Study.shown && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); Study.flip(); }
  else if (Study.shown && /^[1-4]$/.test(e.key)) { e.preventDefault(); Study.rate(+e.key); }
  else if (Study.shown && e.key === ' ') { e.preventDefault(); Study.rate(3); }
  else if (e.key === 'r' || e.key === 'R') { const n = Study.map[Study.cur.split(':')[1]]; if (n) Speech.say(n.en); }
});

// ---------- 화면: 둘러보기 ----------
Views.browse = (qs) => {
  const notes = Deck.notes(); const f = (qs || '').toLowerCase(); const kinds = Deck.kinds();
  const st = (c) => !c || c.q === 'new' ? '<span class="chip cn-n">새</span>' : c.q === 'review' ? `<span class="chip cn-r">${c.ivl}일</span>` : '<span class="chip cn-l">학습 중</span>';
  const rows = notes.filter(n => !f || n.en.toLowerCase().includes(f) || (n.ko || '').includes(f)).slice(0, 300);
  $('#view').innerHTML = `<div class="page"><div class="crumb"><a href="#">← 덱 홈</a></div><h2>🔎 카드 둘러보기 <small class="muted">${notes.length}문장</small></h2>
    <input class="search" id="bq" placeholder="영어·한국어로 찾기" value="${esc(qs || '')}">
    <div class="brows">${rows.map(n => `<div class="brow"><div class="grow"><div>${esc(Content.plain(n.en))} ${UI.sayBtn(n.en, '', 'mini')}</div><div class="small muted">${esc(n.ko || '')}</div></div><div class="bst">${kinds.map(k => `<span class="small muted">${k === 'L' ? '🎧' : '🗣'}</span>${st(Store.cards[Deck.cid(n.id, k)])}`).join(' ')}</div></div>`).join('') || '<p class="muted">카드가 없어요.</p>'}</div></div>`;
  const bq = $('#bq'); bq.onchange = () => UI.go('browse/' + bq.value);
};
