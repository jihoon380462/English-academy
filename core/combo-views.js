// core/combo-views.js — 🧩 조합 말하기 페이지(courses/combo/) 전용: 문법 목록 · 표 보고 스스로 문장 만들기
// 사용자 결정(11/6): 표(열 = 성분, 행 = 무작위)와 그 문법 설명만 보여 주고, 학습자가 「스스로」 조합해 문장을 만든다. 정답 문장·한국어 문제 없음. 음성은 우선 뺌(입력만).
// 틀리면 벌점 없이 「고칠 곳」만. 맞힌 문장을 세거나 모아 두지 않음(사용자 결정 11/8: 「내가 만든 문장」 시스템 불필요).
const COL_ROLE = { S: 'S', V: 'V', BE: 'V', NOT: 'V', DO: 'V', WILL: 'V', GO: 'V', CAN: 'V', HAVE: 'V', TH: 'V', O: 'O', N: 'O', C: 'O', M: 'M' };
const colRole = (c) => c.role || COL_ROLE[c.k] || 'M';
const COMBO_SETS = [{ id: 'basic', label: '🧩 기본 문장' }, { id: 'pattern', label: '🔁 핵심 패턴' }, { id: 'grammar', label: '📘 문법' }];
const CV = {
  st() { const d = Store.data; d.combo = d.combo || {}; return d.combo; },
  rec(id) { const s = this.st(); s[id] = s[id] || {}; return s[id]; },
  groups(set) { const g = []; for (const p of Combo.patterns) { if (!Combo.inSet(p, set)) continue; const nm = (p.grp && p.grp[set]) || p.group; let x = g.find(y => y.name === nm); if (!x) g.push(x = { name: nm, list: [] }); x.list.push(p); } const ord = (Combo.groupOrder || {})[set]; if (ord) g.sort((a, b) => ord.indexOf(a.name) - ord.indexOf(b.name)); return g; },
  hint(n) { return n.replace(/ → <b>[^<]*<\/b>/, ' → <b>?</b>').replace(/ 그대로 /, ' → <b>?</b> ').replace(/원형 <b>[^<]*<\/b>/, '<b>원형</b>'); },
  // 마지막 학습 날짜(사용자 요청 11/6: 어디까지 했는지 보이게). rec.last = 'YYYY-MM-DD', rec.lastAt = 시각
  when(key) { if (!key) return ''; const n = daysBetween(key, todayKey()); const [, m, d] = key.split('-').map(Number); return `${n <= 0 ? '오늘' : n === 1 ? '어제' : n + '일 전'} (${m}월 ${d}일)`; },
  latest() { let best = null; for (const p of Combo.patterns) { const r = this.st()[p.id]; if (r && r.lastAt && (!best || r.lastAt > best.r.lastAt)) best = { p, r }; } return best; },
  touch(id) { const r = this.rec(id); r.last = todayKey(); r.lastAt = Date.now(); },
  formula(p) { return p.cols.map(c => `<span class="cf r-${colRole(c)}">${esc(c.label)}</span>`).join('<span class="cf-plus">+</span>'); },
};

Views.home = () => {
  const s = Store.data.settings; const L = CV.latest(); const tab = COMBO_SETS.some(t => t.id === s.comboTab) ? s.comboTab : (L ? ((L.p.sets || ['basic'])[0]) : 'basic');
  $('#view').innerHTML = `<div class="page combo-home">
    <div class="card hero-card"><div class="hc-row"><div>${myMascot({ size: 60, mood: 'happy' })}</div><div class="grow"><div class="muted small">🧩 조합 말하기 · 표를 보고 스스로 문장 만들기</div><div class="hero-title">${L ? '마지막으로 한 문법' : '처음이에요'}</div>${L ? `<div class="combo-f">${CV.formula(L.p)}</div><div class="small muted">${CV.when(L.r.last)}</div>` : ''}</div></div>
      ${L ? `<a class="btn primary wide" href="#p/${L.p.id}">▶ 이어서 하기</a>` : ''}
      <p class="small muted">문법을 고르면 그 문법의 칸만 있는 단어 표가 나와요. 낱말은 <b>원형</b>으로만 있어요 — 문법에 맞게 바꿔서(like → likes) <b>스스로</b> 문장을 만들어 쓰세요. 정답은 보여 주지 않아요.</p></div>
    <div class="seg combo-tabs" id="ctabs">${COMBO_SETS.map(t => `<button class="${t.id === tab ? 'on' : ''}" data-v="${t.id}">${t.label}</button>`).join('')}</div>
    ${CV.groups(tab).map(g => `<div class="card"><div class="card-h">${esc(g.name)}</div><div class="combo-list">${g.list.map(p => { const r = CV.st()[p.id] || {}; const isL = L && L.p.id === p.id; return `<a class="combo-row${isL ? ' latest' : ''}" href="#p/${p.id}"><div class="combo-f">${CV.formula(p)}</div><div class="small ${r.last ? '' : 'muted'}">${r.last ? `${isL ? '📍 ' : ''}마지막 학습 ${CV.when(r.last)}` : '아직 안 함'}</div></a>`; }).join('')}</div></div>`).join('')}
    <div class="card"><div class="card-h">⚙ 설정</div>
      <div class="set-row"><span>표에 뜻 보이기</span><div class="seg" id="cko">${[[true, '보이기'], [false, '숨기기']].map(([v, t]) => `<button class="${(s.comboKo ?? true) === v ? 'on' : ''}" data-v="${v}">${t}</button>`).join('')}</div></div>
      <div class="set-row"><span>표 줄 수</span><div class="seg" id="crows">${[4, 6, 8].map(n => `<button class="${(s.comboRows ?? 6) === n ? 'on' : ''}" data-v="${n}">${n}</button>`).join('')}</div></div>
      <p class="small muted">뜻을 숨기면 낱말 칸을 눌렀을 때만 뜻이 보여요.</p></div>
    <div class="foot muted small center"><a href="${CONFIG.HUB_PATH}">🏠 허브</a> · ${esc(T.appName)} v${CONFIG.APP_VERSION}</div></div>`;
  $$('#ctabs button').forEach(b => b.onclick = () => { s.comboTab = b.dataset.v; Store.save(); Views.home(); });
  $$('#cko button').forEach(b => b.onclick = () => { s.comboKo = b.dataset.v === 'true'; Store.save(); Views.home(); });
  $$('#crows button').forEach(b => b.onclick = () => { s.comboRows = +b.dataset.v; Store.save(); Views.home(); });
};

function comboFb(r, chain) {
  if (!r) return `<div class="small muted">마침표·대문자는 안 따져요. 줄임말(doesn't, I'm)도 돼요.</div>`;
  if (r.empty) return '';
  if (r.missing) return `<div class="fb fix"><b>표에 있는 낱말로 만들어요.</b><div class="small">못 찾은 칸: ${r.missing.map(c => `<span class="cf r-${colRole(c)}">${esc(c.label)}</span>`).join(' ')}</div></div>`;
  const notes = `<ul class="combo-notes">${r.notes.map(n => `<li>${n}</li>`).join('')}</ul>`;
  if (r.ok) return `<div class="fb good"><b>✓ 맞아요</b><div class="combo-sent">${esc(r.expect)}</div>${r.typo ? `<div class="small">오타: ${esc(r.typo.got)} → <b>${esc(r.typo.want)}</b></div>` : ''}${notes}${r.chainOk ? `<div class="chain-go"><button class="btn sm" id="cchain">🔗 이 문장 바꿔 말하기 <span class="muted">(부정·질문·과거·미래…)</span></button></div>` : ''}</div>`;
  // 고칠 곳: 어느 낱말이 틀렸는지(줄 긋기) + 이유만. 바른 모양은 「맞는 문장 보기」를 눌러야 보임(스스로 고치기)
  const diff = r.diff ? `<div class="diffline">${r.diff.got.map(w => `<span class="${w.ok ? 'w-ok' : 'w-bad'}">${esc(w.w)}</span>`).join(' ')}</div>${r.reveal && r.diff.missing.length ? `<div class="small">빠졌거나 모양이 다른 낱말: ${r.diff.missing.map(w => `<b>${esc(w)}</b>`).join(', ')}</div>` : ''}` : '';
  const hints = `<ul class="combo-notes">${r.notes.map(n => `<li>${r.reveal ? n : CV.hint(n)}</li>`).join('')}</ul>`;
  return `<div class="fb fix"><b>✏️ 고칠 곳이 있어요</b>${diff}${hints}${(r.explain || []).map(e => `<div class="small">💡 ${e}</div>`).join('')}
    ${r.reveal ? `<div class="combo-sent">${esc(r.expect)}</div><div class="small muted">${chain ? '보고 따라 쓰면 점수에 안 들어가요 — 다음 단계로 넘어가요.' : '보고 따라 쓰면 안 세요 — 다른 조합으로 하나 더 만들어 봐요.'}</div>` : `<div class="small muted">${chain ? '다시 써서 맞혀 봐요.' : '같은 칸으로 다시 써서 맞히면 이 표 개수에 들어가요.'} <button class="btn xs" id="cshow">맞는 문장 보기</button></div>`}</div>`;
}

const CPlay = {
  start(id) {
    const p = Combo.pattern(id); if (!p) { UI.go(''); return; }
    this.p = p; this.prevDay = (CV.st()[id] || {}).last || null; this.last = null; this.newTable(); this.render();
  },
  newTable() { this.table = Combo.table(this.p, COMBO_LEX, Store.data.settings.comboRows ?? 6); this.last = null; },
  cell(c, x) { const w = x.w || x.v; const ko = Store.data.settings.comboKo ?? true; return `<button class="cc${x.fixed ? ' fixed' : ''}" data-ko="${esc(x.ko || '')}"><span class="cc-w">${esc(w)}</span>${x.ko && ko ? `<span class="cc-ko">${esc(x.ko)}</span>` : ''}</button>`; },
  render() {
    const p = this.p, t = this.table; const cols = p.cols.filter(c => !c.hide); const rows = Math.max(...cols.map(c => c.fixed ? 0 : t[c.k].length));
    const body = []; for (let i = 0; i < rows; i++) body.push(`<tr>${cols.map(c => { if (c.fixed) { if (i > 0) return ''; if (t[c.k].length === 1) return `<td rowspan="${rows}" class="fixed-td">${this.cell(c, t[c.k][0])}</td>`; return `<td rowspan="${rows}" class="fixed-td">${t[c.k].map(x => this.cell(c, x)).join('')}</td>`; } const x = t[c.k][i]; return `<td>${x ? this.cell(c, x) : ''}</td>`; }).join('')}</tr>`);
    $('#view').innerHTML = `<div class="page combo-play">
      <div class="combo-top"><a class="btn xs" href="#">← 문법 목록</a></div>
      <div class="small muted combo-last">${this.prevDay ? `마지막 학습 ${CV.when(this.prevDay)}` : '이 문법은 처음이에요'}</div>
      <div class="card"><div class="combo-f big">${CV.formula(p)}</div>
        <div class="ctab-wrap"><table class="ctab${cols.length >= 5 ? ' wide' : ''}"><colgroup>${cols.map(c => `<col${c.fixed ? ' class="fixed-col"' : ''}>`).join('')}</colgroup><thead><tr>${cols.map(c => `<th class="r-${colRole(c)}">${esc(c.label)}</th>`).join('')}</tr></thead><tbody>${body.join('')}</tbody></table></div>
        <div class="combo-tools"><button class="btn sm" id="shuffle">🔀 새 표</button></div></div>
      <div class="card combo-rule"><div class="card-h">📏 문법</div>${p.rule}</div>
      <div class="card"><div class="combo-in"><input id="cin" type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="표의 낱말로 문장을 직접 쓰세요" enterkeyhint="done"><button class="btn primary" id="cgo">확인</button></div>
        <div id="cfb">${this.fb()}</div></div>
    </div>`;
    const inp = $('#cin'); if (this.keep) { inp.value = this.keep; this.keep = null; }
    $('#cgo').onclick = () => this.check(); inp.onkeydown = (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); this.check(); } };
    $('#shuffle').onclick = () => { this.newTable(); this.render(); UI.toast('🔀 새 표'); };
    $$('.cc').forEach(b => b.onclick = () => { if (!b.dataset.ko) return; if (!(Store.data.settings.comboKo ?? true)) { const k = b.querySelector('.cc-ko'); if (k) k.remove(); else b.insertAdjacentHTML('beforeend', `<span class="cc-ko">${esc(b.dataset.ko)}</span>`); } });
    const sh = $('#cshow'); if (sh) sh.onclick = () => { this.last.reveal = true; this.render(); };
    const cc = $('#cchain'); if (cc) cc.onclick = () => CChain.start(this.p, this.last.pick);
    if (!matchMedia('(pointer: coarse)').matches) inp.focus({ preventScroll: true });
    if (this.last && this.scrollFb) { this.scrollFb = false; const f = $('#cfb'); if (f) f.scrollIntoView({ block: 'nearest' }); }
  },
  fb() { return comboFb(this.last); },
  check() {
    const v = $('#cin').value.trim(); if (!v) return;
    const prev = this.last; const r = Combo.judge(this.p, this.table, v); this.last = r; if (r.ok) r.chainOk = Combo.chainable(this.p); this.scrollFb = true; if (!r.empty) CV.touch(this.p.id);
    if (r.ok) {
      const peeked = prev && prev.reveal && prev.key === r.key; // 맞는 문장을 보고 쓴 건 점수 없음
      if (peeked) { Sfx.click(); this.render(); return; }
      Sfx.pass(); const goal = Game.tick(); const x = Game.addXp(CONFIG.COMBO_XP || 6);
      Store.save(); const badges = Badges.check(); if (goal || x.ups.length || badges.length) UI.reward({ goal, ups: x.ups, badges }); UI.topbar();
    } else { if (!r.missing && !r.empty) Game.stat('comboFix'); Sfx.wrong(); this.keep = v; Store.save(); }
    this.render();
  },
};
// 🔗 바꿔 말하기 사슬: 방금 스스로 만든 문장을 부정 → 질문 → 과거 → 미래 … 로 직접 바꿔 써요. 바꾼 정답은 보여 주지 않고, 그 문법 설명만 접어 두어요.
const CChain = {
  start(p, pick) {
    const c = Combo.chain(p, pick, COMBO_LEX); if (!c) return;
    this.p = p; this.c = c; this.i = 0; this.done = []; this.last = null; this.skipped = 0; this.render(); window.scrollTo(0, 0);
  },
  step() { return this.c.steps[this.i]; },
  dots() {
    return this.c.steps.map((s, k) => `<span class="chip-step ${k < this.i ? (this.done[k] === 'ok' ? 'done' : 'skip') : k === this.i ? 'on' : ''}">${k < this.i && this.done[k] === 'ok' ? '✓ ' : ''}${esc(s.label)}</span>`).join('<span class="cf-plus">›</span>');
  },
  render() {
    const c = this.c; if (this.i >= c.steps.length) { this.finish(); return; }
    const s = this.step(), tp = Combo.pattern(s.to), r = this.last, ok = r && r.ok;
    $('#view').innerHTML = `<div class="page combo-play combo-chain">
      <div class="combo-top"><button class="btn xs" id="chback">← 표로 돌아가기</button><span class="combo-count">🔗 바꿔 말하기 <b>${this.i + 1}</b> / ${c.steps.length}</span></div>
      <div class="card"><div class="chain-steps">${this.dots()}</div>
        <div class="small muted">${s.from === 'base' ? '처음 문장' : `방금 바꾼 ${esc(c.steps.find(x => x.id === s.from).label)} 문장`}</div>
        <div class="combo-sent">${esc(s.fromSentence)}</div>
        <div class="chain-ask">➡ ${s.ask} 바꿔 써 보세요</div>
        ${s.give.length ? `<div class="small">이 낱말을 넣어요: ${s.give.map(x => `<b>${esc(x.w)}</b> (${esc(x.ko)})`).join(', ')}</div>` : ''}
        ${s.subjNote ? `<div class="small">${s.subjNote}</div>` : ''}
        <details class="chain-rule"><summary>📏 막히면: ${esc(tp.title)} 문법 보기</summary><div class="combo-rule">${tp.rule}</div></details></div>
      <div class="card"><div class="combo-in"><input id="chin" type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="바꾼 문장을 직접 쓰세요" enterkeyhint="done"${ok ? ' disabled' : ''}><button class="btn primary" id="chgo"${ok ? ' disabled' : ''}>확인</button></div>
        <div id="chfb">${comboFb(r, true)}</div>
        ${ok ? `<button class="btn primary wide" id="chnext">${this.i + 1 === c.steps.length ? '🎉 마무리' : '다음 ▶'}</button>` : `<div class="chain-skip"><button class="btn xs" id="chskip">건너뛰기</button></div>`}</div>
    </div>`;
    const inp = $('#chin'); if (this.keep) { inp.value = this.keep; this.keep = null; }
    $('#chback').onclick = () => CPlay.render();
    if (!ok) { $('#chgo').onclick = () => this.check(); inp.onkeydown = (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); this.check(); } }; $('#chskip').onclick = () => this.next('skip'); }
    else $('#chnext').onclick = () => this.next(this.peeked ? 'peek' : 'ok');
    const sh = $('#cshow'); if (sh) sh.onclick = () => { this.last.reveal = true; this.peeked = true; this.render(); };
    if (!ok && !matchMedia('(pointer: coarse)').matches) inp.focus({ preventScroll: true });
    if (this.last && this.scrollFb) { this.scrollFb = false; const f = $('#chfb'); if (f) f.scrollIntoView({ block: 'nearest' }); }
  },
  check() {
    const v = $('#chin').value.trim(); if (!v) return;
    const s = this.step(); const r = Combo.gradeStep(s, v); if (r.empty) return;
    const was = this.last; this.last = r; this.scrollFb = true; CV.touch(this.p.id);
    if (r.ok) {
      this.peeked = !!(was && was.reveal); Sfx.pass();
      if (!this.peeked) { const goal = Game.tick(); const x = Game.addXp(CONFIG.COMBO_XP || 6); Store.save(); const badges = Badges.check(); if (goal || x.ups.length || badges.length) UI.reward({ goal, ups: x.ups, badges }); UI.topbar(); }
      
    } else { if (!r.empty) Game.stat('comboFix'); Sfx.wrong(); this.keep = v; this.peeked = false; Store.save(); }
    this.render();
  },
  next(how) { this.done[this.i] = how; this.i++; this.last = null; this.peeked = false; this.render(); window.scrollTo(0, 0); },
  finish() {
    const c = this.c, okN = this.done.filter(x => x === 'ok').length;
    if (okN === c.steps.length) { Game.stat('comboChains'); Sfx.clear(); Confetti.burst(100); Store.save(); const badges = Badges.check(); if (badges.length) UI.reward({ badges }); }
    const all = okN === c.steps.length;
    $('#view').innerHTML = `<div class="page combo-play combo-chain">
      <div class="card"><div class="card-h">${all ? '🎉 사슬 완성!' : '🔗 사슬 끝'}</div>
        <p class="small muted">${all ? `${c.steps.length}단계를 전부 스스로 바꿔 썼어요.` : '건너뛰거나 정답을 본 단계가 있어요. 같은 문장으로 다시 해 봐요.'}</p></div>
      <div class="card"><button class="btn primary wide" id="chagain">🔁 같은 문장 다시 바꿔 보기</button><button class="btn wide" id="chback">← 표로 돌아가기</button></div></div>`;
    $('#chagain').onclick = () => { this.i = 0; this.done = []; this.last = null; this.peeked = false; this.render(); window.scrollTo(0, 0); };
    $('#chback').onclick = () => { CPlay.render(); window.scrollTo(0, 0); };
  },
};
Views.p = (id) => CPlay.start(id);
