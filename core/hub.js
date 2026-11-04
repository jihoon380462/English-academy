// core/hub.js — 허브(index.html): 오늘 할 일 · 코스 카드 · 공간. 코스 콘텐츠는 읽지 않고 저장 조각만 본다 (파이썬 hub.js 차용)
const Hub = {
  ring(pct, color) { const r = 26, C = 2 * Math.PI * r; return `<svg class="ring" viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="${r}" fill="none" stroke="var(--surface2)" stroke-width="7"/><circle cx="32" cy="32" r="${r}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct / 100)}" transform="rotate(-90 32 32)"/><text x="32" y="36" text-anchor="middle" font-size="14" font-weight="800" fill="var(--text)">${pct}%</text></svg>`; },
  locked(c) { return c.requires && !Store.data.settings.unlockAll && !Store.data.stats['boss_' + c.requires.boss]; },
  card(c) {
    const ready = !!c.ready; const locked = ready && this.locked(c);
    let body;
    if (!ready) body = `<div class="hc-soon">🚧 준비 중 <small>(Phase ${c.phase})</small></div>${c.requires ? `<div class="hc-sub muted">🔒 ${esc(c.requires.label)}</div>` : ''}`;
    else if (c.id === 'words') { const due = Cards.due('w:').length; const learned = Object.entries(Store.cards).filter(([k, x]) => k.startsWith('w:') && x.q === 'review').length; const total = typeof COURSE_META !== 'undefined' && COURSE_META.words ? COURSE_META.words.words : 0; body = `<div class="hc-body"><div class="deck-big">📖</div><div class="hc-txt"><div class="hc-sub">복습 대기 <b>${due}</b> · 외운 카드 ${learned}</div><div class="hc-sub muted">레벨 7개 · ${total}단어</div></div></div>`; }
    else if (c.id === 'deck') { const due = Cards.due('s:').length; const st = Object.keys(Store.cards).filter(k => k.startsWith('s:')).length; body = `<div class="hc-body"><div class="deck-big">🃏</div><div class="hc-txt"><div class="hc-sub">복습 대기 <b>${due}</b>장 · 지금까지 ${st}장</div><div class="hc-sub muted">내 문장 ${Object.keys(Store.mydeck).length}개</div></div></div>`; }
    else { const cd = Store.courseData(c.id); const total = (typeof COURSE_META !== 'undefined' && COURSE_META[c.id] ? COURSE_META[c.id].problems : 0) || cd.total || 0; const p = Game.courseProgress(c.id); const pct = total ? Math.round(100 * p.cleared / total) : 0; body = `<div class="hc-body">${this.ring(pct, c.color)}<div class="hc-txt"><div class="hc-sub">${p.cleared}/${total || '?'} 문제 · ★ ${p.stars}</div><div class="hc-sub muted">복습 ${Review.dueCount(c.id)}개</div></div></div>`; }
    const inner = `<div class="hc-head">${UI.img(`course-${c.id}.png`, c.icon, 'hc-icon')}<span class="hc-name">${esc(c.name)}</span>${c.space ? '<span class="chip">공간</span>' : ''}${locked ? '<span class="chip">🔒</span>' : ''}</div><div class="hc-desc muted small">${esc(c.desc)}</div>${body}`;
    return ready && !locked ? `<a class="card hc ready" href="${c.path}" style="--hc:${c.color}">${inner}</a>` : `<div class="card hc soon">${inner}</div>`;
  },
  // 오늘의 문장: 날짜로 정해지는 덱 문장 하나 (core/meta.js 의 DAILY_SENTENCES)
  daily() {
    if (typeof DAILY_SENTENCES === 'undefined' || !DAILY_SENTENCES.length) return '';
    const day = Math.floor((new Date(todayKey() + 'T00:00:00') - new Date('2026-01-01T00:00:00')) / 86400000); const idx = ((day * 7919) % DAILY_SENTENCES.length + DAILY_SENTENCES.length) % DAILY_SENTENCES.length;
    const [en, ko, key, keyko] = DAILY_SENTENCES[idx]; const id = 'dy.' + todayKey(); const have = !!Store.mydeck[id];
    return `<div class="card daily"><div class="card-h">☀️ 오늘의 문장 <small class="muted">${todayKey()}</small></div><div class="d-en">${UI.chunks(en, null)} ${UI.slowBtn(en)}</div><div class="d-ko muted">${esc(ko)}</div>${key ? `<div class="small">🔑 <b>${esc(key)}</b>${keyko ? ` — ${esc(keyko)}` : ''}</div>` : ''}
      <div class="row-btns" style="justify-content:flex-start"><button class="btn sm" id="dyAdd" ${have ? 'disabled' : ''}>${have ? '✓ 내 문장에 넣었어요' : '🃏 내 문장 덱에 넣기'}</button></div></div>`;
  },
  stats() {
    const d = Store.data, s = d.stats; const total = Object.values(d.days).reduce((a, b) => a + b, 0); const studyDays = Object.keys(d.days).filter(k => d.days[k] > 0).length;
    return `<div class="card"><div class="card-h">📊 학습 기록</div>${UI.heatmap(d.days)}
      <div class="statgrid" style="margin-top:10px"><div><b>${studyDays}</b><small>공부한 날</small></div><div><b>${d.streak.best || 0}</b><small>최고 연속</small></div><div><b>${s.clears || 0}</b><small>푼 문제</small></div><div><b>${s.cardReviews || 0}</b><small>카드 평가</small></div></div>
      <div class="small muted" style="margin-top:6px">학습 활동 ${total}회 · 내 문장 ${Object.keys(Store.mydeck).length}개 · 뱃지 ${d.badges.length}/${BADGES.length} · 타임어택 최고 ${s.attackBest || 0}</div></div>`;
  },
  render() {
    const d = Store.data; const last = d.last && d.last.course ? d.last : null; const lc = last && CONFIG.COURSES.find(c => c.id === last.course);
    const due = CONFIG.COURSES.filter(c => c.ready && c.id !== 'deck').map(c => ({ c, n: Review.dueCount(c.id) })).filter(x => x.n); const cardDue = Cards.due('s:').length;
    const today = d.days[todayKey()] || 0;
    UI.topbar();
    $('#view').innerHTML = `<div class="page hub">
      <div class="hub-hero"><img class="aimg hero-img" src="${assetUrl('hero-hub.png')}" alt="" onerror="this.parentNode.remove()"></div>
      ${!d.onboarded && !d.xp ? `<div class="card welcome"><div class="hc-row"><div>${myMascot({ size: 72, mood: 'happy' })}</div><div class="grow"><h2>반가워요! 저는 부엉이 「부기」예요.</h2><p class="muted">문장을 <b>카드로 조립 → 배열 → 직접 쓰기 → 말하기</b> 순서로 익히고, 배운 문장은 <b>Anki 방식</b>으로 잊을 때쯤 다시 보여 드려요. 모든 예문은 🔊로 들을 수 있어요.</p></div></div>
        <a class="btn primary big wide" href="courses/basic/" onclick="Store.data.onboarded=true;Store.save()">▶ 첫 레슨 시작하기</a></div>` : ''}
      <div class="card hub-today"><div class="card-h">📌 오늘의 할 일 <small class="muted">🎯 ${Math.min(today, d.dailyGoal)}/${d.dailyGoal}</small></div>
        ${lc ? `<a class="btn primary big wide" href="${lc.path}#${esc(last.hash || '')}">▶ ${esc(lc.name)} 이어서 하기</a>` : `<a class="btn primary big wide" href="courses/basic/">▶ 영어 다시 시작</a>`}
        <div class="hub-stats">${Cards.due('w:').length ? `<a href="courses/words/#study">📖 단어 복습 <b>${Cards.due('w:').length}</b></a>` : ''}${cardDue ? `<a href="courses/deck/#study">🃏 문장 카드 <b>${cardDue}</b>장</a>` : '<span>🃏 문장 카드 복습 없음</span>'}${due.map(x => `<a href="${x.c.path}#review">🔁 ${esc(x.c.name)} 문제 복습 <b>${x.n}</b></a>`).join('')}<span>🔥 연속 ${Game.currentStreak()}일</span></div></div>
      ${this.daily()}
      <h2 class="hub-h">코스</h2><div class="hub-courses">${CONFIG.COURSES.filter(c => !c.space).map(c => this.card(c)).join('')}</div>
      <h2 class="hub-h">공간 <small class="muted">코스 순서와 무관 — 언제든</small></h2><div class="hub-courses">${CONFIG.COURSES.filter(c => c.space).map(c => this.card(c)).join('')}</div>
      ${this.stats()}
      <div class="muted small center hub-foot">${esc(T.appName)} v${CONFIG.APP_VERSION} · <b>완전 무료</b> · 계정 없음 · 진행은 이 기기에만 저장 · <a href="${CONFIG.SISTER.url}">🐍 ${esc(CONFIG.SISTER.name)}</a></div>
    </div>`;
  },
};
window.addEventListener('DOMContentLoaded', () => {
  Store.load(null); UI.applyTheme(); Speech.init(); Confetti.init();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  UI.bindSay(); Hub.render(); Sync.init();
  document.addEventListener('click', (e) => { if (e.target.id === 'dyAdd') { const [en, ko, key, keyko] = DAILY_SENTENCES[((Math.floor((new Date(todayKey() + 'T00:00:00') - new Date('2026-01-01T00:00:00')) / 86400000) * 7919) % DAILY_SENTENCES.length + DAILY_SENTENCES.length) % DAILY_SENTENCES.length]; Store.mydeck['dy.' + todayKey()] = { en, ko, key, keyko, src: '오늘의 문장 ' + todayKey(), at: Date.now() }; Store.save(); UI.toast('🃏 내 문장 덱에 넣었어요 — 문장 덱에서 Anki 방식으로 복습해요'); Hub.render(); } });
});
