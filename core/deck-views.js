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
      ${cn.n + cn.l + cn.r ? `<a class="btn primary big wide" href="#study">▶ 공부 시작 <small>(Space = 답 보기 · 1~4 = 평가)</small></a>` : `<div class="center muted">🎉 오늘 볼 카드를 다 봤어요. ${Deck.notes().length ? '내일 또 만나요!' : '레슨을 끝내거나 아래에서 덱을 켜면 카드가 생겨요.'}</div>${st.fresh ? `<button class="btn wide" id="moreNew">➕ 새 카드 10장 더 보기 <small>(Anki 맞춤 학습)</small></button>` : ''}`}
      <a class="btn wide" href="#attack">⚡ 60초 문장 타임어택 <small>최고 ${Store.data.stats.attackBest || 0}</small></a>
      <div class="small muted center">새 카드 = 파랑 · 학습 중 = 빨강 · 복습 = 초록</div></div>
    <div class="card"><div class="card-h">📦 덱</div>
      <div class="deck-row"><div class="grow"><b>📝 내 문장</b><div class="small muted">레슨을 끝내면 그 레슨 예문이 자동으로 들어와요 · ${mine}문장</div></div><span class="chip">항상 켜짐</span></div>
      ${decks.map(d => `<label class="deck-row"><div class="grow"><b>${d.icon || '📘'} ${esc(d.title)}</b><div class="small muted">${esc(d.desc || '')} · ${d.items.length}문장</div></div><input type="checkbox" class="deck-on" data-id="${d.id}" ${deckOn(d) ? 'checked' : ''}></label>`).join('')}
    </div>
    <div class="card"><div class="card-h">📊 현황</div>
      <div class="statgrid"><div><b>${st.notes}</b><small>문장</small></div><div><b>${st.fresh}</b><small>새 카드</small></div><div><b>${st.young}</b><small>익히는 중</small></div><div><b>${st.mature}</b><small>성숙(21일+)</small></div></div>${st.susp ? `<div class="small muted" style="margin-top:6px">🚫 그만 보기 ${st.susp}장 (둘러보기에서 다시 켤 수 있어요)</div>` : ''}
      <div class="small muted" style="margin-top:10px">앞으로 7일 복습 예보</div><div class="fc">${fc.map((n, i) => `<div class="fc-col"><div class="fc-bar" style="height:${Math.round(60 * n / max)}px"></div><small>${n}</small><small class="muted">${i === 0 ? '오늘' : i === 1 ? '내일' : `+${i}`}</small></div>`).join('')}</div>
      <div class="row-btns"><a class="btn sm" href="#browse">🔎 카드 둘러보기</a></div></div>
    <div class="card"><div class="card-h">⚙ 덱 설정</div>
      <div class="set-row"><span>하루 새 카드</span><div class="seg" id="npd">${[10, 20, 30, 50].map(n => `<button class="${(s.newPerDay ?? 20) === n ? 'on' : ''}" data-v="${n}">${n}</button>`).join('')}</div></div>
      <div class="set-row"><span>카드 종류</span><div class="seg" id="kinds">${[['both', '둘 다'], ['L', '🎧 듣고 뜻'], ['P', '🗣 뜻 보고 영어']].map(([v, t]) => `<button class="${(s.deckCards || 'both') === v ? 'on' : ''}" data-v="${v}">${t}</button>`).join('')}</div></div>
      <p class="small muted">Anki 기본값을 따라요: 학습 단계 1분 → 10분 → 졸업 1일, 「쉬움」 4일, 틀리면 10분 뒤 다시(간격 리셋·난이도 계수 −20%), 하루는 새벽 4시에 바뀌어요.</p></div>
    <div class="foot muted small center"><a href="${CONFIG.HUB_PATH}">🏠 허브</a> · ${esc(T.appName)} v${CONFIG.APP_VERSION}</div></div>`;
  const mn = $('#moreNew'); if (mn) mn.onclick = () => { Cards.moreNew(10); UI.go('study'); };
  $$('.deck-on').forEach(cb => cb.onchange = () => { s.decksOn = Object.assign({}, s.decksOn, { [cb.dataset.id]: cb.checked }); Store.save(); Views.home(); });
  $$('#npd button').forEach(b => b.onclick = () => { s.newPerDay = +b.dataset.v; Store.save(); Views.home(); });
  $$('#kinds button').forEach(b => b.onclick = () => { s.deckCards = b.dataset.v; Store.save(); Views.home(); });
};

// ---------- 화면: 공부 (Anki 리뷰어) ----------
const Study = {
  q: null, cur: null, shown: false, done: 0, map: null, typed: null, hist: [],
  start() { const q = Deck.queue(); this.q = q; this.map = Deck.noteMap(); this.done = 0; this.hist = []; this.next(); },
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
      ${this.hist.length && !this.shown ? `<div class="undo-row"><button class="btn xs" id="undo" title="방금 평가 되돌리기 (Z)">↶ 되돌리기</button></div>` : ''}
      <div class="card scard">${front}${back}${this.shown ? `<div class="row-btns"><button class="btn xs" id="susp" title="이 카드를 더 이상 보지 않기 (둘러보기에서 다시 켬)">🚫 그만 보기</button></div>` : ''}</div>
      <div class="actions">${this.shown
        ? `<div class="grades">${[['다시', 'again'], ['어려움', 'hard'], ['좋음', 'good'], ['쉬움', 'easy']].map(([t, cls], i) => `<button class="btn grade ${cls}" data-g="${i + 1}"><small>${labels[i]}</small>${t}</button>`).join('')}</div>`
        : `<button class="btn primary big wide" id="show">답 보기 <small>(Space)</small></button>`}</div></div>`;
    if (!this.shown && kind === 'L' && Store.data.settings.autoplay !== false) setTimeout(() => Speech.say(n.en), 300);
    if (this.shown && kind === 'P' && Store.data.settings.autoplay !== false) setTimeout(() => Speech.say(n.en), 200);
    const pk = $('#peek'); if (pk) pk.onclick = () => { pk.remove(); $('.peek').hidden = false; };
    const sh = $('#show'); if (sh) sh.onclick = () => this.flip();
    const ti = $('#typeIn'); if (ti) { ti.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.flip(); } }); }
    $$('.grade').forEach(b => b.onclick = () => this.rate(+b.dataset.g));
    const ud = $('#undo'); if (ud) ud.onclick = () => this.undo();
    const sp = $('#susp'); if (sp) sp.onclick = () => { Cards.suspend(this.cur, true); this.q.learn = this.q.learn.filter(x => x !== this.cur); UI.toast('🚫 이 카드는 이제 안 나와요 (둘러보기에서 다시 켤 수 있어요)'); this.next(); };
  },
  // Anki 의 되돌리기: 마지막 평가 전 상태로
  undo() {
    const h = this.hist.pop(); if (!h) return;
    if (h.before) Store.cards[h.id] = h.before; else delete Store.cards[h.id];
    const t = Store.anki(); if (h.wasNew && t.newToday > 0) t.newToday--; if (Store.data.stats.cardReviews) Store.data.stats.cardReviews--;
    this.q.learn = this.q.learn.filter(x => x !== h.id); if (this.cur && this.cur !== h.id) { const c = Store.cards[this.cur]; if (!c || c.q === 'new') this.q.fresh.unshift(this.cur); else if (c.q === 'review') this.q.review.unshift(this.cur); else this.q.learn.push(this.cur); }
    this.done = Math.max(0, this.done - 1); Store.save(); this.cur = h.id; this.shown = false; this.typed = null; UI.toast('↶ 되돌렸어요'); this.render();
  },
  flip() { if (this.shown) return; const ti = $('#typeIn'); this.typed = ti && ti.value.trim() ? ti.value.trim() : null; this.shown = true; Sfx.click(); this.render(); },
  rate(g) {
    const id = this.cur; const before = Store.cards[id]; this.hist.push({ id, before: before ? JSON.parse(JSON.stringify(before)) : null, wasNew: !before || before.q === 'new' }); if (this.hist.length > 20) this.hist.shift();
    const c = Cards.rate(id, g); this.done++;
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
      <p class="muted">${this.done ? `${this.done}장을 봤어요. ` : ''}학습 중인 카드는 몇 분 뒤에, 복습 카드는 정해진 날에 다시 나와요.</p><div class="row-btns"><a class="btn primary" href="#">덱 홈으로</a>${this.hist.length ? '<button class="btn" id="undoEnd">↶ 마지막 평가 되돌리기</button>' : ''}<a class="btn" href="#attack">⚡ 타임어택</a></div></div></div>`;
    const ue = $('#undoEnd'); if (ue) ue.onclick = () => this.undo();
  },
};
Views.study = () => Study.start();
document.addEventListener('keydown', (e) => {
  if (UI.cur !== 'study' || !Study.cur) return; const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'textarea' || tag === 'input') return;
  if (!Study.shown && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); Study.flip(); }
  else if (Study.shown && /^[1-4]$/.test(e.key)) { e.preventDefault(); Study.rate(+e.key); }
  else if (Study.shown && e.key === ' ') { e.preventDefault(); Study.rate(3); }
  else if (e.key === 'r' || e.key === 'R') { const n = Study.map[Study.cur.split(':')[1]]; if (n) Speech.say(n.en); }
  else if ((e.key === 'z' || e.key === 'Z') && !Study.shown) { e.preventDefault(); Study.undo(); }
});

// ---------- 화면: 둘러보기 ----------
Views.browse = (qs) => {
  const notes = Deck.notes(); const f = (qs || '').toLowerCase(); const kinds = Deck.kinds();
  const st = (c) => c && c.susp ? '<span class="chip">🚫</span>' : !c || c.q === 'new' ? '<span class="chip cn-n">새</span>' : c.q === 'review' ? `<span class="chip cn-r">${c.ivl}일</span>` : '<span class="chip cn-l">학습 중</span>';
  const rows = notes.filter(n => !f || n.en.toLowerCase().includes(f) || (n.ko || '').includes(f)).slice(0, 300);
  $('#view').innerHTML = `<div class="page"><div class="crumb"><a href="#">← 덱 홈</a></div><h2>🔎 카드 둘러보기 <small class="muted">${notes.length}문장</small></h2>
    <input class="search" id="bq" placeholder="영어·한국어로 찾기" value="${esc(qs || '')}">
    <div class="brows">${rows.map(n => `<div class="brow"><div class="grow"><div>${esc(Content.plain(n.en))} ${UI.sayBtn(n.en, '', 'mini')}</div><div class="small muted">${esc(n.ko || '')}</div></div><div class="bst">${kinds.map(k => `<span class="small muted">${k === 'L' ? '🎧' : '🗣'}</span>${st(Store.cards[Deck.cid(n.id, k)])}`).join(' ')}<button class="btn xs susp-t" data-n="${esc(n.id)}" title="그만 보기 켜기/끄기">${kinds.some(k => (Store.cards[Deck.cid(n.id, k)] || {}).susp) ? '다시 보기' : '🚫'}</button></div></div>`).join('') || '<p class="muted">카드가 없어요.</p>'}</div></div>`;
  const bq = $('#bq'); bq.onchange = () => UI.go('browse/' + bq.value);
  $$('.susp-t').forEach(b => b.onclick = () => { const on = !kinds.some(k => (Store.cards[Deck.cid(b.dataset.n, k)] || {}).susp); kinds.forEach(k => Cards.suspend(Deck.cid(b.dataset.n, k), on)); Views.browse(qs); });
};

// ---------- 화면: 60초 문장 타임어택 (켜 둔 덱의 문장으로) ----------
const Attack = {
  run: null,
  start() {
    const pool = Deck.notes().filter(n => n.ko && n.en); if (pool.length < 4) { $('#view').innerHTML = `<div class="page"><div class="card center"><h2>⚡ 타임어택</h2><p class="muted">문장이 4개 이상 있어야 해요. 덱 홈에서 덱을 켜 주세요.</p><a class="btn primary" href="#">덱 홈</a></div></div>`; return; }
    this.run = { pool, score: 0, miss: 0, combo: 0, left: CONFIG.TIME_ATTACK_SEC, end: Date.now() + CONFIG.TIME_ATTACK_SEC * 1000, seen: new Set() };
    this.tick = setInterval(() => { if (UI.cur !== 'attack') return this.stop(); const r = this.run; r.left = Math.max(0, Math.ceil((r.end - Date.now()) / 1000)); const t = $('.attack-time'); if (t) t.textContent = r.left + '초'; const bar = $('.attack-bar div'); if (bar) bar.style.width = (100 * r.left / CONFIG.TIME_ATTACK_SEC) + '%'; if (r.left <= 0) this.finish(); }, 250);
    this.next();
  },
  stop() { clearInterval(this.tick); this.tick = null; },
  next() {
    const r = this.run; let n = pick(r.pool); for (let i = 0; i < 6 && r.seen.has(n.id); i++) n = pick(r.pool); r.seen.add(n.id);
    const mode = Math.random() < 0.5 ? 'ko2en' : 'en2ko'; const others = shuffle(r.pool.filter(x => x.id !== n.id && x.en !== n.en && x.ko !== n.ko)).slice(0, 3);
    const opts = shuffle([n, ...others]); r.cur = { n, mode, opts };
    $('#view').innerHTML = `<div class="page attack"><div class="attack-top"><a class="btn xs" href="#">✕</a><span class="attack-time">${r.left}초</span><div class="attack-bar"><div style="width:${100 * r.left / CONFIG.TIME_ATTACK_SEC}%"></div></div><span class="attack-score">⚡${r.score}</span></div>
      <div class="card"><div class="attack-q">${mode === 'ko2en' ? `<div class="muted small">이 뜻의 영어 문장은?</div><b>${esc(n.ko)}</b>` : `<div class="muted small">듣고 뜻을 고르세요</div>${UI.sayBtn(n.en, '듣기', 'big')}<div class="small muted attack-en" ${Speech.synthOk && Speech.voices.length ? 'hidden' : ''}>${esc(Content.plain(n.en))}</div>`}</div>
      <div class="opts">${opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="opt-t">${esc(mode === 'ko2en' ? Content.plain(o.en) : o.ko)}</span></button>`).join('')}</div>${r.combo >= 3 ? `<div class="center small">🔥 콤보 ${r.combo}</div>` : ''}</div></div>`;
    if (mode === 'en2ko') Speech.say(n.en);
    $$('.opt').forEach(b => b.onclick = () => this.answer(+b.dataset.i, b));
  },
  answer(i, b) {
    const r = this.run; if (!r || r.lock) return; const ok = r.cur.opts[i] === r.cur.n; r.lock = true;
    const en = $('.attack-en'); if (en) en.hidden = false;
    if (ok) { r.score++; r.combo++; Sfx.combo(r.combo); b.classList.add('good'); } else { r.miss++; r.combo = 0; Sfx.wrong(); b.classList.add('bad'); $$('.opt')[r.cur.opts.indexOf(r.cur.n)].classList.add('good'); r.end -= 2000; }
    setTimeout(() => { r.lock = false; if (UI.cur === 'attack' && this.tick) this.next(); }, ok ? 280 : 900);
  },
  finish() {
    this.stop(); const r = this.run; if (!r) return; const best = Store.data.stats.attackBest || 0; Game.statMax('attackBest', r.score); Game.stat('attacks');
    const x = Game.addXp(r.score); if (r.score) Game.tick(); Store.save(); const badges = Badges.check(); UI.reward({ ups: x.ups, badges }); UI.topbar();
    if (r.score > best) { Sfx.clear(); Confetti.burst(140); } else Sfx.pass();
    $('#view').innerHTML = `<div class="page"><div class="card center"><h2>⚡ 끝!</h2><div class="big-score">${r.score}</div><p class="muted">맞힘 ${r.score} · 틀림 ${r.miss} (틀리면 2초 감점)${r.score > best ? ' · <b>🏆 최고 기록!</b>' : ` · 최고 ${best}`}</p><p class="small muted">+${x.amount} XP</p>
      <div class="row-btns"><a class="btn primary big" href="#attack" onclick="setTimeout(()=>UI.route(),0)">다시 하기</a><a class="btn" href="#">덱 홈</a></div></div></div>`;
    this.run = null;
  },
};
Views.attack = () => { Attack.stop(); Attack.start(); };
