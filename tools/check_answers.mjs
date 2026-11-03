#!/usr/bin/env node
// tools/check_answers.mjs — 모든 문제의 정답이 실제 채점기(core/grader.js)를 통과하는지 확인 (파이썬 run_solutions.py 자리)
//   + 틀린 문장(fix.wrong)과 함정 조합이 정답으로 통과하지 않는지, 흔한 실수 규칙이 정답 문장에 걸리지 않는지, Anki 스케줄러 단위 테스트
import { courses, load } from './load_content.mjs';
let fails = 0, n = 0; const F = (m) => { fails++; console.log('  ✗ ' + m); };
for (const c of courses()) {
  const { PROBLEMS, SENTENCE_DECKS, Grader, Content, MISTAKES } = load(c); console.log(`[${c}]`);
  const mist = (s, w) => { const hit = Grader.explain(s); if (hit.length) F(`${w}: 정답 문장 「${s}」에 흔한 실수 규칙이 걸려요 → ${hit[0]}`); };
  for (const p of PROBLEMS) {
    const w = `${p.id}(${p.type})`; n++; const ans = Content.answers(p);
    for (const a of ans) { const r = Grader.text(a, ans); if (!r.ok) F(`${w}: 허용 답 「${a}」가 통과 못 해요`); if (['type', 'fix', 'order', 'build', 'dictation'].includes(p.type)) mist(a, w); }
    if (p.type === 'free') { for (const a of ans) { const r = Grader.free(a, p.need, p.minWords || 4); if (!r.ok) F(`${w}: 모범 문장 「${a}」이 자유 쓰기 조건을 못 채워요 ${JSON.stringify(r.missing)}`); } continue; }
    if (p.type === 'build' || p.type === 'order') { const s = p.cards.join(' '); if (!Grader.text(s, ans).ok) F(`${w}: 카드를 순서대로 놓은 「${s}」가 정답이 아니에요`); }
    if (p.type === 'fix') { if (Grader.text(p.wrong, ans).ok) F(`${w}: 틀린 문장이 이미 정답으로 통과해요`); }
    if (p.type === 'fill') { const filled = Content.answerText(p); if (/___/.test(filled)) F(`${w}: 빈칸이 남아요`); p.blanks.forEach((b, i) => b.a.forEach(a => { if (!Grader.word(a, b.a).ok) F(`${w}: 빈칸${i} 답 ${a} 통과 못 함`); })); if (/[a-z]/i.test(filled)) mist(filled, w); }
    if (p.type === 'speak' || p.type === 'dictation') { const r = Grader.speak(p.say, p.say); if (r.rate < 1) F(`${w}: say 자기 자신 일치율 ${r.rate}`); }
    if (p.type === 'choice' && p.q && /___/.test(p.q) && p.opts.every(o => /^[\w' -]+$/.test(o))) { const s = p.q.replace(/\|/g, ' ').replace('___', p.opts[p.ans]); mist(s, w); }
  }
  if (SENTENCE_DECKS) for (const d of SENTENCE_DECKS) for (const it of d.items) { n++; const all = [it.en].concat(it.alt || []); for (const a of all) if (!Grader.text(a, all).ok) F(`덱 ${it.id}: 「${a}」 통과 못 함`); mist(Content.plain(it.en), `덱 ${it.id}`); }
}
// 채점기 자체 테스트
{ const { Grader, Anki, ANKI } = load(courses()[0]); const T = (cond, m) => { n++; if (!cond) F('단위: ' + m); };
  T(Grader.text("i'm a student", ['I am a student.']).ok, '축약형'); T(Grader.text('I am a studnet.', ['I am a student.']).typo, '오타 1개'); T(!Grader.text('I is a student.', ['I am a student.']).ok, '틀린 be동사');
  T(Grader.text('I cannot swim', ["I can't swim."]).ok, "cannot = can't"); T(Grader.text('“I’m fine,” she said.', ['"I\'m fine," she said.']).ok, '굽은 따옴표');
  T(!Grader.text('I am student.', ['I am a student.']).ok, '관사 빠짐은 오답'); T(!Grader.text('He can drives.', ['He can drive.']).ok, '어미 -s 는 오타로 안 봐줌'); T(!Grader.word('like', ['liked']).ok, '빈칸 -d 차이 오답');
  T(Grader.text('Im fine, thanks', ["I'm fine, thanks."]).ok, '아포스트로피 없는 축약형 im'); T(Grader.text("He's got a car.", ['He has got a car.']).ok, "'s = has"); T(Grader.text('He is tall.', ["He's tall."]).ok, "'s = is");
  T(Grader.text('I will be there in 15 minutes.', ['I will be there in fifteen minutes.']).ok, '숫자 = 숫자 낱말'); T(Grader.text('at 7:30', ['at seven thirty']).ok, '7:30 = seven thirty'); T(Grader.text('twenty five dollars', ['25 dollars']).ok, 'twenty five = 25');
  T(!Grader.text('the thing what I want', ['the thing that I want']).ok, 'what↔that 오타 아님'); T(!Grader.text("I haven't never been there.", ["I haven't ever been there."]).ok, 'never↔ever 오타 아님');
  T(!Grader.text('The museum closed on Mondays.', ['The museum closes on Mondays.']).ok, 'closed↔closes 오타 아님'); T(Grader.text('I go to the libary.', ['I go to the library.']).typo, '일반 낱말 오타는 봐줌');
  T(Grader.text("My dad's used to it.", ['My dad is used to it.']).ok, "명사's = is"); T(Grader.text("Tom's car is red.", ["Tom's car is red."]).ok, '소유격 그대로'); T(!Grader.text('Tom car is red.', ["Tom's car is red."]).ok, '소유격 빠짐 오답');
  T(Grader.text('ok, see you', ['Okay, see you.']).ok, 'ok = okay'); T(Grader.text('a round trip ticket', ['a round-trip ticket']).ok, '하이픈'); T(Grader.speak("that's 15 dollars not 50", "That's fifteen dollars, not fifty.").rate === 1, '말하기 숫자'); T(Grader.speak('i am from korea', "I'm from Korea.").rate === 1, '말하기 일치');
  const now = Date.UTC(2026, 10, 3, 3, 0); let c = Anki.newCard(); c = Anki.next(c, 3, now); T(c.q === 'learn' && Math.round((c.due - now) / 60000) === 10, 'Anki 새 카드 좋음 → 10분');
  c = Anki.next(c, 3, c.due); T(c.q === 'review' && c.ivl === 1, 'Anki 졸업 1일'); let e = Anki.next(Anki.newCard(), 4, now); T(e.q === 'review' && e.ivl === 4, 'Anki 쉬움 4일');
  let r = Object.assign(Anki.newCard(), { q: 'review', ivl: 10, ease: 2.5, due: now }); const g = Anki.next(r, 3, now); T(g.ivl >= 21 && g.ivl <= 29, `Anki 좋음 10일×2.5 ≈ 25±퍼지 (${g.ivl})`);
  const a = Anki.next(r, 1, now); T(a.q === 'relearn' && a.lapses === 1 && Math.abs(a.ease - 2.3) < 1e-9, 'Anki 다시 → 재학습·ease −0.2');
  T(Anki.label(Anki.newCard(), 1, now) === '1분' && Anki.label(Anki.newCard(), 4, now) === '4일', 'Anki 버튼 글자'); }
console.log(`\n확인 ${n}건 · FAILS ${fails}`); process.exit(fails ? 1 : 0);
