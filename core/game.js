// core/game.js — XP·레벨·콤보·스트릭·뱃지(Game), 복습 카드(Cards·Review — Anki 스케줄러는 core/anki.js). 파이썬 아카데미 game.js 구조 차용
const Game = {
  combo: 0,
  levelFromXp(xp) { let L = 1, need = CONFIG.xpForLevel(1), acc = 0; while (L < CONFIG.MAX_LEVEL && xp >= acc + need) { acc += need; L++; need = CONFIG.xpForLevel(L); } return { level: L, into: xp - acc, need: L >= CONFIG.MAX_LEVEL ? 0 : need }; },
  level() { return this.levelFromXp(Store.data.xp); },
  title(level) { return CONFIG.TITLES[Math.min(CONFIG.TITLES.length - 1, Math.floor((level - 1) / 5))]; },
  mascotStage(level) { let s = 0; CONFIG.MASCOT_STAGES.forEach((L, i) => { if (level >= L) s = i; }); return s; },
  stat(k, d = 1) { const s = Store.data.stats; s[k] = (s[k] || 0) + d; return s[k]; },
  statMax(k, v) { const s = Store.data.stats; if ((s[k] || 0) < v) s[k] = v; },
  comboMult() { for (const [n, m] of CONFIG.COMBO_MULT) if (this.combo >= n) return m; return 1; },
  // 오늘 학습 1회 기록 + 스트릭
  tick() {
    const d = Store.data; const today = todayKey(); d.days[today] = (d.days[today] || 0) + 1;
    const s = d.streak; if (s.last !== today) { s.cur = s.last && daysBetween(s.last, today) === 1 ? s.cur + 1 : 1; s.last = today; s.best = Math.max(s.best, s.cur); }
    if (d.days[today] === d.dailyGoal) { this.stat('goalDays'); return true; } return false;
  },
  currentStreak() { const s = Store.data.streak; if (!s.last) return 0; const gap = daysBetween(s.last, todayKey()); return gap <= 1 ? s.cur : 0; },
  addXp(amount) { amount = Math.round(amount); if (amount <= 0) return { amount: 0, ups: [] }; const before = this.level().level; Store.data.xp += amount; const after = this.level().level; const ups = []; for (let L = before + 1; L <= after; L++) ups.push({ level: L, title: this.title(L) }); return { amount, ups }; },
  // 문제 클리어 → 결과(별·XP·레벨업·뱃지·목표)
  clear(p, { hints = 0, revealed = false, firstTry = false, inReview = false, fails = 0 }) {
    const rec = Store.prob(p.id); const was = rec.status === 'clear';
    const stars = revealed ? 0 : 3 - Math.min(3, hints);
    let xp = p.boss ? CONFIG.BOSS_XP : (CONFIG.XP[p.type] || 10);
    xp *= CONFIG.HINT_XP_MULT[revealed ? 3 : Math.min(3, hints)];
    if (firstTry && !was) xp *= 1 + CONFIG.FIRST_TRY_BONUS;
    if (!revealed && hints === 0) this.combo++; else this.combo = 0;
    this.statMax('maxCombo', this.combo); xp *= this.comboMult();
    if (was && !inReview) xp = stars > rec.stars ? xp * 0.3 : 0;
    if (inReview) xp = CONFIG.REVIEW_XP;
    if (!was) { this.stat('clears'); this.stat('clears_' + p.type); if (firstTry) this.stat('firstTry'); if (p.boss) this.stat('bossProblems'); }
    rec.status = 'clear'; rec.stars = Math.max(rec.stars, stars); rec.at = Date.now();
    const grade = Anki.autoGrade({ revealed, hints, fails }); Cards.rate(Review.pid(p.id), grade);
    const l = Content.lesson(p.lesson);
    if (l && l.boss && this.lessonDone(l) && !Store.data.stats['boss_' + l.id]) { Store.data.stats['boss_' + l.id] = 1; this.stat('bosses'); }
    const goal = this.tick(); const x = this.addXp(xp);
    Store.save(); const badges = Badges.check();
    return { stars, xp: x.amount, ups: x.ups, goal, badges, combo: this.combo, grade };
  },
  fail(p) { const rec = Store.prob(p.id); rec.tries++; if (rec.status === 'none') rec.status = 'try'; this.combo = 0; Store.save(); },
  lessonDone(l) { const ps = Content.problemsOf(l.id); return ps.length ? ps.every(q => Store.prob(q.id).status === 'clear') : !!Store.cdata.lessons[l.id]; },
  lessonStars(l) { return Content.problemsOf(l.id).reduce((s, q) => s + ((Store.cdata.problems[q.id] || {}).stars || 0), 0); },
  chapterOpen(n) {
    if (Store.data.settings.unlockAll) return true; const first = CHAPTERS[0].n; if (n <= first + 1) return true;
    const prevBoss = Content.bossOf(n - 1); return !prevBoss || !!Store.data.stats['boss_' + prevBoss.id];
  },
  currentLesson() { for (const c of CHAPTERS) { if (!this.chapterOpen(c.n)) break; for (const l of Content.lessonsOf(c.n)) if (!this.lessonDone(l)) return l; } return null; },
  courseProgress(id) { const cd = id === Store.course ? Store.cdata : Store.courseData(id); const vals = Object.values(cd.problems || {}); return { cleared: vals.filter(r => r.status === 'clear').length, stars: vals.reduce((s, r) => s + (r.stars || 0), 0) }; },
};

// ---------- 복습 카드 (Anki 스케줄러, core/anki.js) ----------
// 카드 id: 'p:<course>:<문제id>' = 문제 복습(평가는 풀이 결과로 자동), 's:<문장id>:L' = 듣고 뜻 떠올리기, 's:<문장id>:P' = 뜻 보고 영어로 말하기
const Cards = {
  get(id) { return Store.cards[id] || null; },
  rate(id, g, now = Date.now()) {
    const before = Store.cards[id] || Anki.newCard(); const wasNew = before.q === 'new';
    let c = Anki.next(before, g, now);
    if (id.startsWith('p:') && wasNew && g >= 3) c = Anki.next(c, 3, now); // 문제는 처음 맞히면 바로 졸업(1일 뒤)
    Store.cards[id] = c; if (wasNew && id.startsWith('s:')) { /* 하루 새 카드 한도는 문장 카드만 (문제 카드는 풀면 생김) */ const t = Store.anki(); t.newToday = t.newDay === Anki.dayKey(now) ? t.newToday + 1 : 1; t.newDay = Anki.dayKey(now); }
    if (wasNew && id.startsWith('w:')) { const t = Store.anki(); t.wNewToday = t.wNewDay === Anki.dayKey(now) ? (t.wNewToday || 0) + 1 : 1; t.wNewDay = Anki.dayKey(now); } // 단어 카드는 따로 셈
    Store.ankiLog(id, g, before, c); return c;
  },
  due(prefix, now = Date.now()) { return Object.entries(Store.cards).filter(([id, c]) => id.startsWith(prefix) && Anki.isDue(c, now)).sort((a, b) => a[1].due - b[1].due).map(([id]) => id); },
  newLeft(now = Date.now()) { const t = Store.anki(); const day = Anki.dayKey(now); const extra = t.extraDay === day ? (t.extraNew || 0) : 0; return Math.max(0, (Store.data.settings.newPerDay ?? ANKI.newPerDay) + extra - (t.newDay === day ? t.newToday : 0)); },
  wordsLeft(now = Date.now()) { const t = Store.anki(); const day = Anki.dayKey(now); const extra = t.wExtraDay === day ? (t.wExtraNew || 0) : 0; return Math.max(0, (Store.data.settings.wordsPerDay ?? 15) + extra - (t.wNewDay === day ? (t.wNewToday || 0) : 0)); },
  moreWords(n = 10, now = Date.now()) { const t = Store.anki(); const day = Anki.dayKey(now); if (t.wExtraDay !== day) { t.wExtraDay = day; t.wExtraNew = 0; } t.wExtraNew += n; Store.save(); },
  moreNew(n = 10, now = Date.now()) { const t = Store.anki(); const day = Anki.dayKey(now); if (t.extraDay !== day) { t.extraDay = day; t.extraNew = 0; } t.extraNew += n; Store.save(); }, // Anki 「맞춤 학습: 새 카드 더」
  suspend(id, on = true) { const c = Store.cards[id] || Anki.newCard(); c.susp = on || undefined; if (!on) delete c.susp; Store.cards[id] = c; Store.save(); },
  count(prefix, pred = () => true) { return Object.entries(Store.cards).filter(([id, c]) => id.startsWith(prefix) && pred(c)).length; },
};
const Review = {
  pid(id) { return `p:${Store.course}:${id}`; },
  due() { return Cards.due(`p:${Store.course}:`).map(id => id.split(':')[2]).filter(id => Content.problem(id)); },
  dueCount(course) { return Cards.due(`p:${course}:`).length; },
  allDue() { return Cards.due('p:').length + Cards.due('s:').length + Cards.due('w:').length; },
};

// ---------- 뱃지 ----------
const Badges = {
  check() { const d = Store.data; const got = []; for (const b of BADGES) { if (d.badges.includes(b.id)) continue; let ok = false; try { ok = b.cond(d.stats, d); } catch (e) {} if (ok) { d.badges.push(b.id); d.badgeDates[b.id] = todayKey(); got.push(b); } } if (got.length) Store.save(); return got; },
};
