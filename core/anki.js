// core/anki.js — Anki 방식 간격 반복 스케줄러 (SM-2 계열, Anki 기본값 벤치마킹). DOM 없음 → Node 테스트 가능.
// 카드 상태 c = { q:'new'|'learn'|'review'|'relearn', step, due(ms), ivl(일), ease(2.5), reps, lapses, last(ms) }
// 평가 1=다시(Again) 2=어려움(Hard) 3=좋음(Good) 4=쉬움(Easy)
const ANKI = {
  learnSteps: [1, 10],        // 분
  relearnSteps: [10],         // 분
  gradIvl: 1, easyIvl: 4,     // 일
  startEase: 2.5, minEase: 1.3,
  easyBonus: 1.3, hardMult: 1.2, lapseMult: 0,  // lapse 후 새 간격 = 이전 간격 × lapseMult (최소 1일)
  maxIvl: 3650, newPerDay: 20, learnAheadMin: 20, fuzz: true,
};
const Anki = {
  MIN: 60000, DAY: 86400000,
  // 하루 경계: 새벽 4시 (Anki 기본)
  dayStart(now = Date.now()) { const d = new Date(now - 4 * 3600000); d.setHours(0, 0, 0, 0); return d.getTime() + 4 * 3600000; },
  dayKey(now = Date.now()) { return todayKey(new Date(now - 4 * 3600000)); },
  newCard() { return { q: 'new', step: 0, due: 0, ivl: 0, ease: ANKI.startEase, reps: 0, lapses: 0, last: 0 }; },
  _fuzz(ivl, seed) { if (!ANKI.fuzz || ivl < 3) return ivl; const r = ivl < 7 ? 1 : ivl < 30 ? Math.max(2, Math.round(ivl * 0.15)) : Math.max(4, Math.round(ivl * 0.05)); const x = Math.abs(Math.sin(seed || 1)) ; return ivl - r + Math.round(x * 2 * r); },
  _reviewDue(ivl, now) { return this.dayStart(now) + ivl * this.DAY; },
  // 평가 결과 새 카드 상태 (원본은 바꾸지 않음)
  next(card, g, now = Date.now()) {
    const c = Object.assign(this.newCard(), card); c.reps++; const prevLast = c.last; c.last = now;
    const steps = c.q === 'relearn' ? ANKI.relearnSteps : ANKI.learnSteps;
    if (c.q === 'new') c.q = 'learn';
    if (c.q === 'learn' || c.q === 'relearn') {
      if (g === 1) { c.step = 0; c.due = now + steps[0] * this.MIN; }
      else if (g === 2) { const m = c.step === 0 && steps.length > 1 ? (steps[0] + steps[1]) / 2 : steps[Math.min(c.step, steps.length - 1)] * (c.step === 0 && steps.length === 1 ? 1.5 : 1); c.due = now + m * this.MIN; }
      else if (g === 3) { c.step++; if (c.step >= steps.length) { const ivl = c.q === 'relearn' ? Math.max(1, Math.round(c.ivl)) : ANKI.gradIvl; c.q = 'review'; c.ivl = ivl; c.step = 0; c.due = this._reviewDue(ivl, now); } else c.due = now + steps[c.step] * this.MIN; }
      else { const ivl = c.q === 'relearn' ? Math.max(1, Math.round(c.ivl)) + 1 : ANKI.easyIvl; c.q = 'review'; c.ivl = ivl; c.step = 0; c.due = this._reviewDue(ivl, now); }
      return c;
    }
    // review
    const late = Math.max(0, Math.floor((this.dayStart(now) - c.due) / this.DAY));
    if (g === 1) { c.lapses++; c.ease = Math.max(ANKI.minEase, c.ease - 0.2); c.ivl = Math.max(1, Math.round(c.ivl * ANKI.lapseMult)); c.q = 'relearn'; c.step = 0; c.due = now + ANKI.relearnSteps[0] * this.MIN; return c; }
    let ivl;
    if (g === 2) { ivl = Math.max(c.ivl + 1, c.ivl * ANKI.hardMult); c.ease = Math.max(ANKI.minEase, c.ease - 0.15); }
    else if (g === 3) { ivl = Math.max(c.ivl + 1, (c.ivl + late / 2) * c.ease); }
    else { ivl = Math.max(c.ivl + 2, (c.ivl + late) * c.ease * ANKI.easyBonus); c.ease += 0.15; }
    ivl = Math.min(ANKI.maxIvl, Math.round(this._fuzz(Math.round(ivl), (c.reps * 7.3) + (prevLast % 97))));
    c.ivl = Math.max(1, ivl); c.due = this._reviewDue(c.ivl, now); return c;
  },
  // 버튼에 붙는 다음 간격 글자 (Anki 처럼)
  label(card, g, now = Date.now()) { const n = this.next(card, g, now); const ms = n.due - now; if (n.q === 'review') { const d = n.ivl; return d < 31 ? `${d}일` : d < 365 ? `${(d / 30).toFixed(1).replace('.0', '')}개월` : `${(d / 365).toFixed(1).replace('.0', '')}년`; } const m = Math.round(ms / this.MIN); return m < 1 ? '<1분' : m < 60 ? `${m}분` : `${Math.round(m / 60)}시간`; },
  isDue(c, now = Date.now()) { if (!c || c.q === 'new' || c.susp) return false; // susp = 「그만 보기」(Anki 의 suspend)
    if (c.q === 'review') return c.due < this.dayStart(now) + this.DAY; return c.due <= now + ANKI.learnAheadMin * this.MIN; },
  // 문제 풀이 결과 → 자동 평가 (문제 복습용)
  autoGrade({ revealed, hints, fails }) { if (revealed || fails >= 2) return 1; if (hints >= 1 || fails === 1) return 2; return 3; },
};
if (typeof module !== 'undefined') module.exports = { Anki, ANKI };
