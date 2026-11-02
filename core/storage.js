// core/storage.js — localStorage 저장. 키는 전부 eng.* (파이썬 아카데미 academy.* 와 같은 출처라 절대 겹치면 안 됨)
//   eng.profile        닉네임·XP·뱃지·스트릭·일일 목표·통계·설정 (전 코스 공통)
//   eng.course.<id>    문제 기록(상태·별·복습)·레슨 진행 (코스별)
//   eng.cards          복습 카드 상태 (Anki 스케줄러, core/anki.js) — 문제 카드 p:* · 문장 카드 s:*
//   eng.anki           오늘 새 카드 수 · 최근 평가 기록(통계용)
//   eng.mydeck         레슨에서 모은 「내 문장」 (문장 덱 페이지가 문장 내용을 알 수 있게 복사해 둠)
const Store = {
  data: null, course: null, cdata: null, cards: null, ankiData: null, mydeck: null,
  key(k) { return CONFIG.KEY_PREFIX + k; },
  _get(k) { try { const r = localStorage.getItem(this.key(k)); return r ? JSON.parse(r) : null; } catch (e) { console.warn('읽기 실패', k, e); return null; } },
  _set(k, v) { try { localStorage.setItem(this.key(k), JSON.stringify(v)); } catch (e) { console.warn('저장 실패', k, e); } },
  blank() {
    return { v: CONFIG.SCHEMA_VERSION, nick: '', onboarded: false, level0: null, xp: 0, badges: [], badgeDates: {}, stats: {}, streak: { cur: 0, best: 0, last: null }, days: {}, dailyGoal: CONFIG.DAILY_GOAL_DEFAULT,
      settings: { theme: 'auto', font: 1, sound: true, vibrate: true, anim: 2, voice: '', rate: 1.0, autoplay: true, unlockAll: false, newPerDay: 20, deckCards: 'both', slowRate: 0.55 }, last: null };
  },
  blankCourse() { return { problems: {}, lessons: {} }; },
  load(course) {
    this.course = course || null;
    const p = this._get('profile'); this.data = Object.assign(this.blank(), p || {}); this.data.settings = Object.assign(this.blank().settings, (p || {}).settings || {});
    this.cdata = course ? Object.assign(this.blankCourse(), this._get('course.' + course) || {}) : this.blankCourse();
    this.cards = this._get('cards') || {}; this.ankiData = Object.assign({ newDay: '', newToday: 0, log: [] }, this._get('anki') || {}); this.mydeck = this._get('mydeck') || {};
  },
  save(opt = {}) { if (!opt.silent) { this.data.updatedAt = Date.now(); if (typeof Sync !== 'undefined') Sync.schedule(); } this._set('profile', this.data); if (this.course) this._set('course.' + this.course, this.cdata); this._set('cards', this.cards); this._set('anki', this.ankiData); this._set('mydeck', this.mydeck); },
  anki() { return this.ankiData; },
  ankiLog(id, g, before, after) { const L = this.ankiData.log; L.push([Date.now(), id, g, before.q, Math.round(after.ivl || 0)]); if (L.length > 3000) L.splice(0, L.length - 3000); },
  courseData(id) { return Object.assign(this.blankCourse(), this._get('course.' + id) || {}); },
  prob(id) { const P = this.cdata.problems; if (!P[id]) P[id] = { status: 'none', stars: 0, tries: 0, review: null }; return P[id]; },
  allKeys() { const out = []; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(CONFIG.KEY_PREFIX)) out.push(k); } return out; },
  exportBundle() { const keys = {}; for (const k of this.allKeys()) { try { keys[k] = JSON.parse(localStorage.getItem(k)); } catch (e) {} } return JSON.stringify({ format: 'english-academy-bundle', v: CONFIG.SCHEMA_VERSION, app: CONFIG.APP_VERSION, at: Date.now(), keys }, null, 1); },
  importBundle(text) { const b = JSON.parse(text); if (!b || b.format !== 'english-academy-bundle' || !b.keys) throw new Error('영어 아카데미 백업 파일이 아니에요'); for (const [k, v] of Object.entries(b.keys)) if (k.startsWith(CONFIG.KEY_PREFIX)) localStorage.setItem(k, JSON.stringify(v)); this.load(this.course); },
  resetAll() { for (const k of this.allKeys()) localStorage.removeItem(k); this.load(this.course); },
};
