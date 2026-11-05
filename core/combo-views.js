// core/combo-views.js — 🧩 조합 말하기 페이지(courses/combo/) 전용: 문법 목록 · 표 보고 스스로 문장 만들기
// 사용자 결정(11/6): 표(열 = 성분, 행 = 무작위)와 그 문법 설명만 보여 주고, 학습자가 「스스로」 조합해 문장을 만든다. 정답 문장·한국어 문제 없음. 음성은 우선 뺌(입력만).
// 틀리면 벌점 없이 「고칠 곳」만 — 같은 조합을 다시 맞혀야 「만든 문장」으로 셈.
const COL_ROLE = { S: 'S', V: 'V', BE: 'V', NOT: 'V', DO: 'V', WILL: 'V', GO: 'V', CAN: 'V', HAVE: 'V', TH: 'V', O: 'O', N: 'O', C: 'O', M: 'M' };
const COMBO_GOAL = 5;
const CV = {
  st() { const d = Store.data; d.combo = d.combo || {}; return d.combo; },
  rec(id) { const s = this.st(); s[id] = s[id] || { made: 0, best: 0 }; return s[id]; },
  groups() { const g = []; for (const p of Combo.patterns) { let x = g.find(y => y.name === p.group); if (!x) g.push(x = { name: p.group, list: [] }); x.list.push(p); } return g; },
  hint(n) { return n.replace(/ → <b>[^<]*<\/b>/, ' → <b>?</b>').replace(/ 그대로 /, ' → <b>?</b> ').replace(/원형 <b>[^<]*<\/b>/, '<b>원형</b>'); },
  // 마지막 학습 날짜(사용자 요청 11/6: 어디까지 했는지 보이게). rec.last = 'YYYY-MM-DD', rec.lastAt = 시각
  when(key) { if (!key) return ''; const n = daysBetween(key, todayKey()); const [, m, d] = key.split('-').map(Number); return `${n <= 0 ? '오늘' : n === 1 ? '어제' : n + '일 전'} (${m}월 ${d}일)`; },
  latest() { let best = null; for (const p of Combo.patterns) { const r = this.st()[p.id]; if (r && r.lastAt && (!best || r.lastAt > best.r.lastAt)) best = { p, r }; } return best; },
  touch(id) { const r = this.rec(id); r.last = todayKey(); r.lastAt = Date.now(); },
  formula(p) { return p.cols.map(c => `<span class="cf r-${COL_ROLE[c.k] || 'M'}">${esc(c.label)}</span>`).join('<span class="cf-plus">+</span>'); },
};

Views.home = () => {
  const s = Store.data.settings; const L = CV.latest();
  $('#view').innerHTML = `<div class="page combo-home">
    <div class="card hero-card"><div class="hc-row"><div>${myMascot({ size: 60, mood: 'happy' })}</div><div class="grow"><div class="muted small">🧩 조합 말하기 · 표를 보고 스스로 문장 만들기</div><div class="hero-title">${L ? '마지막으로 한 문법' : '처음이에요'}</div>${L ? `<div class="combo-f">${CV.formula(L.p)}</div><div class="small muted">${CV.when(L.r.last)}</div>` : ''}</div></div>
      ${L ? `<a class="btn primary wide" href="#p/${L.p.id}">▶ 이어서 하기</a>` : ''}
      <p class="small muted">문법을 고르면 그 문법의 칸만 있는 단어 표가 나와요. 낱말은 <b>원형</b>으로만 있어요 — 문법에 맞게 바꿔서(like → likes) <b>스스로</b> 문장을 만들어 쓰세요. 정답은 보여 주지 않아요.</p></div>
    ${CV.groups().map(g => `<div class="card"><div class="card-h">${esc(g.name)}</div><div class="combo-list">${g.list.map(p => { const r = CV.st()[p.id] || {}; const isL = L && L.p.id === p.id; return `<a class="combo-row${isL ? ' latest' : ''}" href="#p/${p.id}"><div class="combo-f">${CV.formula(p)}</div><div class="small ${r.last ? '' : 'muted'}">${r.last ? `${isL ? '📍 ' : ''}마지막 학습 ${CV.when(r.last)}` : '아직 안 함'}</div></a>`; }).join('')}</div></div>`).join('')}
    <div class="card"><div class="card-h">⚙ 설정</div>
      <div class="set-row"><span>표에 뜻 보이기</span><div class="seg" id="cko">${[[true, '보이기'], [false, '숨기기']].map(([v, t]) => `<button class="${(s.comboKo ?? true) === v ? 'on' : ''}" data-v="${v}">${t}</button>`).join('')}</div></div>
      <div class="set-row"><span>표 줄 수</span><div class="seg" id="crows">${[4, 6, 8].map(n => `<button class="${(s.comboRows ?? 6) === n ? 'on' : ''}" data-v="${n}">${n}</button>`).join('')}</div></div>
      <p class="small muted">뜻을 숨기면 낱말 칸을 눌렀을 때만 뜻이 보여요.</p></div>
    <div class="foot muted small center"><a href="${CONFIG.HUB_PATH}">🏠 허브</a> · ${esc(T.appName)} v${CONFIG.APP_VERSION}</div></div>`;
  $$('#cko button').forEach(b => b.onclick = () => { s.comboKo = b.dataset.v === 'true'; Store.save(); Views.home(); });
  $$('#crows button').forEach(b => b.onclick = () => { s.comboRows = +b.dataset.v; Store.save(); Views.home(); });
};

const CPlay = {
  start(id) {
    const p = Combo.pattern(id); if (!p) { UI.go(''); return; }
    this.p = p; this.prevDay = (CV.st()[id] || {}).last || null; this.made = []; this.last = null; this.newTable(); this.render();
  },
  newTable() { this.table = Combo.table(this.p, COMBO_LEX, Store.data.settings.comboRows ?? 6); this.made = []; this.last = null; },
  cell(c, x) { const w = x.w || x.v; const ko = Store.data.settings.comboKo ?? true; return `<button class="cc${x.fixed ? ' fixed' : ''}" data-ko="${esc(x.ko || '')}"><span class="cc-w">${esc(w)}</span>${x.ko && ko ? `<span class="cc-ko">${esc(x.ko)}</span>` : ''}</button>`; },
  render() {
    const p = this.p, t = this.table; const rows = Math.max(...p.cols.map(c => c.fixed ? 0 : t[c.k].length));
    const body = []; for (let i = 0; i < rows; i++) body.push(`<tr>${p.cols.map(c => { if (c.fixed) { if (i > 0) return ''; if (t[c.k].length === 1) return `<td rowspan="${rows}" class="fixed-td">${this.cell(c, t[c.k][0])}</td>`; return `<td rowspan="${rows}" class="fixed-td">${t[c.k].map(x => this.cell(c, x)).join('')}</td>`; } const x = t[c.k][i]; return `<td>${x ? this.cell(c, x) : ''}</td>`; }).join('')}</tr>`);
    const n = this.made.length;
    $('#view').innerHTML = `<div class="page combo-play">
      <div class="combo-top"><a class="btn xs" href="#">← 문법 목록</a><span class="combo-count">이 표로 만든 문장 <b>${n}</b> / ${COMBO_GOAL}</span></div>
      <div class="small muted combo-last">${this.prevDay ? `마지막 학습 ${CV.when(this.prevDay)}` : '이 문법은 처음이에요'}</div>
      <div class="card"><div class="combo-f big">${CV.formula(p)}</div>
        <div class="ctab-wrap"><table class="ctab${p.cols.length >= 5 ? ' wide' : ''}"><colgroup>${p.cols.map(c => `<col${c.fixed ? ' class="fixed-col"' : ''}>`).join('')}</colgroup><thead><tr>${p.cols.map(c => `<th class="r-${COL_ROLE[c.k] || 'M'}">${esc(c.label)}</th>`).join('')}</tr></thead><tbody>${body.join('')}</tbody></table></div>
        <div class="combo-tools"><button class="btn sm" id="shuffle">🔀 새 표</button></div></div>
      <div class="card combo-rule"><div class="card-h">📏 문법</div>${p.rule}</div>
      <div class="card"><div class="combo-in"><input id="cin" type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="표의 낱말로 문장을 직접 쓰세요" enterkeyhint="done"><button class="btn primary" id="cgo">확인</button></div>
        <div id="cfb">${this.fb()}</div></div>
      ${n ? `<div class="card"><div class="card-h">✅ 만든 문장</div><ol class="made">${this.made.map(m => `<li>${esc(m)}</li>`).join('')}</ol></div>` : ''}
    </div>`;
    const inp = $('#cin'); if (this.keep) { inp.value = this.keep; this.keep = null; }
    $('#cgo').onclick = () => this.check(); inp.onkeydown = (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); this.check(); } };
    $('#shuffle').onclick = () => { this.newTable(); this.render(); UI.toast('🔀 새 표'); };
    $$('.cc').forEach(b => b.onclick = () => { if (!b.dataset.ko) return; if (!(Store.data.settings.comboKo ?? true)) { const k = b.querySelector('.cc-ko'); if (k) k.remove(); else b.insertAdjacentHTML('beforeend', `<span class="cc-ko">${esc(b.dataset.ko)}</span>`); } });
    const sh = $('#cshow'); if (sh) sh.onclick = () => { this.last.reveal = true; this.render(); };
    if (!matchMedia('(pointer: coarse)').matches) inp.focus({ preventScroll: true });
    if (this.last && this.scrollFb) { this.scrollFb = false; const f = $('#cfb'); if (f) f.scrollIntoView({ block: 'nearest' }); }
  },
  fb() {
    const r = this.last; if (!r) return `<div class="small muted">마침표·대문자는 안 따져요. 줄임말(doesn't, I'm)도 돼요.</div>`;
    if (r.empty) return '';
    if (r.missing) return `<div class="fb fix"><b>표에 있는 낱말로 만들어요.</b><div class="small">못 찾은 칸: ${r.missing.map(c => `<span class="cf r-${COL_ROLE[c.k] || 'M'}">${esc(c.label)}</span>`).join(' ')}</div></div>`;
    const notes = `<ul class="combo-notes">${r.notes.map(n => `<li>${n}</li>`).join('')}</ul>`;
    if (r.ok) return `<div class="fb good"><b>✓ 맞아요${r.dup ? ' — 이미 만든 조합이에요. 다른 칸을 골라 봐요' : ''}</b><div class="combo-sent">${esc(r.expect)}</div>${r.typo ? `<div class="small">오타: ${esc(r.typo.got)} → <b>${esc(r.typo.want)}</b></div>` : ''}${notes}</div>`;
    // 고칠 곳: 어느 낱말이 틀렸는지(줄 긋기) + 이유만. 바른 모양은 「맞는 문장 보기」를 눌러야 보임(스스로 고치기)
    const diff = r.diff ? `<div class="diffline">${r.diff.got.map(w => `<span class="${w.ok ? 'w-ok' : 'w-bad'}">${esc(w.w)}</span>`).join(' ')}</div>${r.reveal && r.diff.missing.length ? `<div class="small">빠졌거나 모양이 다른 낱말: ${r.diff.missing.map(w => `<b>${esc(w)}</b>`).join(', ')}</div>` : ''}` : '';
    const hints = `<ul class="combo-notes">${r.notes.map(n => `<li>${r.reveal ? n : CV.hint(n)}</li>`).join('')}</ul>`;
    return `<div class="fb fix"><b>✏️ 고칠 곳이 있어요</b>${diff}${hints}${(r.explain || []).map(e => `<div class="small">💡 ${e}</div>`).join('')}
      ${r.reveal ? `<div class="combo-sent">${esc(r.expect)}</div><div class="small muted">보고 따라 쓰면 안 세요 — 다른 조합으로 하나 더 만들어 봐요.</div>` : `<div class="small muted">같은 칸으로 다시 써서 맞히면 이 표 개수에 들어가요. <button class="btn xs" id="cshow">맞는 문장 보기</button></div>`}</div>`;
  },
  check() {
    const v = $('#cin').value.trim(); if (!v) return;
    const prev = this.last; const r = Combo.judge(this.p, this.table, v); this.last = r; this.scrollFb = true; if (!r.empty) CV.touch(this.p.id);
    if (r.ok) {
      const seen = this.made.some(m => Combo.judge(this.p, this.table, m).key === r.key);
      const peeked = prev && prev.reveal && prev.key === r.key; // 정답을 보고 같은 조합을 쓴 건 안 셈
      if (seen || peeked) { r.dup = seen; if (peeked) r.notes = r.notes.concat(['정답을 본 조합이라 개수에는 안 들어가요']); Sfx.click(); this.render(); return; }
      this.made.push(r.expect); const rec = CV.rec(this.p.id); rec.made++; Game.stat('comboMade'); Sfx.pass();
      const goal = Game.tick(); const x = Game.addXp(CONFIG.COMBO_XP || 6);
      if (this.made.length === COMBO_GOAL) { rec.best = Math.max(rec.best || 0, COMBO_GOAL); Game.stat('comboTables'); Sfx.clear(); Confetti.burst(100); UI.toast(`🎉 이 표로 ${COMBO_GOAL}문장 완성! 🔀 새 표로 계속해요`); }
      Store.save(); const badges = Badges.check(); if (goal || x.ups.length || badges.length) UI.reward({ goal, ups: x.ups, badges }); UI.topbar();
    } else { if (!r.missing && !r.empty) Game.stat('comboFix'); Sfx.wrong(); this.keep = v; Store.save(); }
    this.render();
  },
};
Views.p = (id) => CPlay.start(id);
