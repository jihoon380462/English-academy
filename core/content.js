// core/content.js — 코스 콘텐츠 인덱스. 코스 페이지의 content.js 가 COURSE·CHAPTERS·LESSONS·PROBLEMS 를 정의한 뒤 Content.init().
// DOM 을 쓰지 않아 Node 검증 도구에서도 쓴다.
const Content = {
  lessonMap: {}, problemMap: {}, byLesson: {},
  init() {
    this.lessonMap = {}; this.problemMap = {}; this.byLesson = {};
    for (const l of LESSONS) this.lessonMap[l.id] = l;
    for (const p of PROBLEMS) { this.problemMap[p.id] = p; (this.byLesson[p.lesson] = this.byLesson[p.lesson] || []).push(p); }
  },
  lesson(id) { return this.lessonMap[id]; },
  problem(id) { return this.problemMap[id]; },
  problemsOf(lid) { return this.byLesson[lid] || []; },
  lessonsOf(ch) { return LESSONS.filter(l => l.ch === ch); },
  chapter(n) { return CHAPTERS.find(c => c.n === n); },
  bossOf(ch) { return LESSONS.find(l => l.ch === ch && l.boss); },
  // 문제의 대표 답 문장 (듣기·해설용)
  answerText(p) {
    if (p.answer) return Array.isArray(p.answer) ? p.answer[0] : p.answer;
    if (p.type === 'fill') { let i = 0; return p.text.replace(/___/g, () => (p.blanks[i++] || { a: [''] }).a[0]); }
    if (p.say) return p.say;
    return '';
  },
  answers(p) { if (p.answer) return Array.isArray(p.answer) ? p.answer : [p.answer]; if (p.say) return [p.say]; return [this.answerText(p)]; },
  // 「|」 로 나눈 덩어리와 성분 글자(roles 'S V O M')를 짝지어 돌려준다
  chunks(en, roles) { const parts = String(en).includes('|') ? String(en).split('|').map(s => s.trim()) : String(en).split(/\s+/); const rs = roles ? String(roles).trim().split(/\s+/) : []; return parts.map((t, i) => ({ t, r: rs[i] || null })); },
  plain(en) { return String(en ?? '').replace(/\s*\|\s*/g, ' ').trim(); },
};
if (typeof module !== 'undefined') module.exports = { Content };
