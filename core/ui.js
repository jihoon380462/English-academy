// core/ui.js — 공통 UI: 테마·모달·토스트·상단바·라우터(#해시)·🔊 버튼·성분 색 칩. 파이썬 아카데미 ui-core.js 차용
const UI = {
  views: {}, cur: null,
  applyTheme() {
    const s = Store.data.settings; const dark = s.theme === 'dark' || (s.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'; document.documentElement.dataset.font = s.font;
  },
  toast(msg, ms = 2600) { let box = $('#toasts'); if (!box) { box = document.createElement('div'); box.id = 'toasts'; document.body.appendChild(box); } const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = msg; box.appendChild(t); setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, ms); },
  modal(html, { onClose, wide } = {}) {
    UI.closeModal(); const m = document.createElement('div'); m.id = 'modal'; m.innerHTML = `<div class="modal-bg"></div><div class="modal-box ${wide ? 'wide' : ''}"><button class="modal-x" aria-label="닫기">✕</button>${html}</div>`;
    document.body.appendChild(m); const close = () => { m.remove(); onClose && onClose(); }; m.querySelector('.modal-bg').onclick = close; m.querySelector('.modal-x').onclick = close; this._modalClose = close; return m;
  },
  closeModal() { const m = $('#modal'); if (m) m.remove(); },
  img(name, fallback, cls = '') { return `<span class="aimg-wrap ${cls}"><img class="aimg" src="${assetUrl(name)}" alt="" onerror="this.replaceWith(document.createTextNode('${fallback}'))"></span>`; },
  // 🔊 버튼 (data-say 에 문장). 문서 전체에 위임 핸들러 하나
  sayBtn(text, label = '', cls = '') { return `<button class="say ${cls}" data-say="${esc(Content.plain(text))}" title="듣기" aria-label="듣기">🔊${label ? ' ' + label : ''}</button>`; },
  // 🐢 = 덩어리(| 표시, 없으면 2~3낱말)마다 끊어서 아주 천천히 (속도만 낮추면 기기에 따라 차이가 거의 없어서, v0.2.2)
  slowBtn(text) { return `<button class="say slow" data-slow="${esc(String(text ?? ''))}" title="끊어서 천천히 듣기" aria-label="끊어서 천천히 듣기">🐢</button>`; },
  // 성분 색 덩어리 문장
  chunks(en, roles, { say = true } = {}) {
    const cs = Content.chunks(en, roles); const body = cs.map(c => `<span class="chunk ${c.r ? 'r-' + c.r : ''}" ${c.r ? `title="${esc(CONFIG.ROLES[c.r].name)}"` : ''}>${esc(c.t)}</span>`).join(' ');
    return `<span class="sent">${body}</span>${say ? this.sayBtn(en) : ''}`;
  },
  roleLegend(roles) { const used = [...new Set(String(roles || '').split(/\s+/).filter(Boolean))]; return used.length ? `<div class="legend">${used.map(r => `<span class="chunk r-${r}">${CONFIG.ROLES[r].name}</span><small class="muted">${CONFIG.ROLES[r].ko}</small>`).join(' ')}</div>` : ''; },
  topbar(extra = '') {
    const d = Store.data; const lv = Game.level(); const streak = Game.currentStreak(); const today = d.days[todayKey()] || 0;
    $('#topbar').innerHTML = `<a class="tb-btn tb-home" href="${Store.course ? CONFIG.HUB_PATH : '#'}" title="허브">🏠</a><div class="tb-mascot">${myMascot({ size: 34 })}</div>
      <div class="tb-xp" title="Lv.${lv.level} ${esc(Game.title(lv.level))}"><span class="tb-lv">Lv.${lv.level}</span><div class="xpbar"><div class="xpfill" style="width:${lv.need ? Math.round(100 * lv.into / lv.need) : 100}%"></div></div></div>
      <div class="tb-goal" title="오늘 목표">🎯${Math.min(today, d.dailyGoal)}/${d.dailyGoal}</div><div class="tb-streak ${streak ? 'on' : ''}" title="${T.streak}">🔥${streak}</div>${extra}
      ${Store.course ? `<a class="tb-btn" href="#settings" title="설정">⚙</a>` : `<a class="tb-btn" href="courses/basic/#settings" title="설정">⚙</a>`}`;
  },
  route() {
    const h = decodeURIComponent(location.hash.slice(1)); const [name, ...rest] = h.split('/'); const v = this.views[name] ? name : 'home';
    Speech.stop(); this.cur = v; this.topbar(); window.scrollTo(0, 0);
    try { this.views[v](rest.join('/')); } catch (e) { console.error(e); $('#view').innerHTML = `<div class="page"><div class="card">화면을 그리다 문제가 생겼어요: ${esc(e.message)}<br><a class="btn" href="#">홈으로</a></div></div>`; }
    Store.data.last = { course: Store.course, hash: h }; Store.save({ silent: true });
  },
  go(hash) { if (location.hash === '#' + hash) this.route(); else location.hash = hash; },
  start(views) {
    this.views = views; this.applyTheme(); Speech.init(); Confetti.init();
    addEventListener('hashchange', () => this.route());
    matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => this.applyTheme());
    document.addEventListener('click', (e) => { const sl = e.target.closest('[data-slow]'); if (sl) { e.preventDefault(); Speech.slow(sl.dataset.slow, { btn: sl }); return; } const b = e.target.closest('[data-say]'); if (b) { e.preventDefault(); Speech.say(b.dataset.say, { btn: b, rate: b.dataset.rate ? +b.dataset.rate : undefined }); } });
    this.route();
  },
  // 보상 연출: XP 날아오기·레벨업·뱃지
  reward(r) {
    if (!r) return; if (r.xp) UI.toast(`+${r.xp} XP${r.combo >= 3 ? ` · 🔥콤보 ${r.combo}` : ''}`);
    if (r.goal) { Sfx.clear(); Confetti.rain(150); UI.toast('🎯 오늘 목표 달성!', 3500); }
    for (const u of r.ups || []) { Sfx.levelUp(); Confetti.burst(160); UI.modal(`<div class="center"><div class="big-mascot">${myMascot({ size: 120, mood: 'happy' })}</div><h2>레벨 ${u.level}!</h2><p class="muted">칭호: <b>${esc(u.title)}</b></p><button class="btn primary" onclick="UI.closeModal()">계속하기</button></div>`); }
    for (const b of r.badges || []) { Sfx.badge(); UI.toast(`${b.icon} 뱃지 획득: <b>${esc(b.name)}</b>`, 4000); }
  },
  stars(n, max = 3) { return `<span class="stars">${'★'.repeat(n)}<span class="off">${'★'.repeat(Math.max(0, max - n))}</span></span>`; },
};
