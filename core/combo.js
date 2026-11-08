// core/combo.js — 🧩 조합 말하기 엔진 (DOM 없음, Node 검사 가능)
// 문법(패턴)마다 열(성분)이 있고, 표에는 낱말을 **원형**으로만 보여 줘요. 학습자가 칸을 골라 스스로 문장을 만들면
// Combo.judge() 가 ① 어느 칸을 골랐는지 알아내고 ② 그 조합의 맞는 문장을 만들어 ③ Grader 로 비교해요.
// 낱말 데이터 = courses/combo/content.js 의 COMBO_LEX. 사용자 결정(11/6): 「스스로」 조합해서 말하기가 가장 중요.

const Inflect = {
  s3(v) { if (v === 'have') return 'has'; if (v === 'be') return 'is'; if (/(s|x|z|ch|sh|o)$/.test(v)) return v + 'es'; if (/[^aeiou]y$/.test(v)) return v.slice(0, -1) + 'ies'; return v + 's'; },
  past(x) { if (x.past) return x.past; const v = x.v; if (/e$/.test(v)) return v + 'd'; if (/[^aeiou]y$/.test(v)) return v.slice(0, -1) + 'ied'; return v + 'ed'; },
  ing(x) { if (x.ing) return x.ing; const v = x.v; if (/ie$/.test(v)) return v.slice(0, -2) + 'ying'; if (/[^aeiou]e$/.test(v) && !['be', 'see'].includes(v)) return v.slice(0, -1) + 'ing'; return v + 'ing'; },
  pp(x) { return x.pp || this.past(x); }, // 과거분사: 불규칙은 x.pp, 없으면 과거형과 같음(규칙·made·bought 류)
  beN(n, past) { return past ? (n === 'pl' ? 'were' : 'was') : (n === 'pl' ? 'are' : 'is'); }, // 명사 수(sg·u·pl)에 맞는 be
  // 주어 종류: s1 = I, s2 = you, s3 = 3인칭 단수, pl = 복수(we·they·명사 복수)
  be(s, past) { return past ? (s.p === 's1' || s.p === 's3' ? 'was' : 'were') : (s.p === 's1' ? 'am' : s.p === 's3' ? 'is' : 'are'); },
  do(s) { return s.p === 's3' ? 'does' : 'do'; },
  have(s) { return s.p === 's3' ? 'has' : 'have'; },
  verb(s, x) { return s.p === 's3' ? this.s3(x.v) : x.v; },
};
const P_KO = { s1: '나(I)', s2: '너(you)', s3: '3인칭 단수', pl: '복수' };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// 열: { k: 열 이름, label, from: COMBO_LEX 목록 | fixed: [표에 보일 글자] }
// make(c) → { parts: [낱말들], q?: 질문, notes: [바뀐 곳 설명] } (c = 열 이름 → 고른 칸)
const COMBO_PATTERNS = [
  { id: 'be-adj', group: 'be동사', title: '주어 + be동사 + 형용사', ex: 'She is happy.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'BE', label: 'be동사', fixed: ['be'] }, { k: 'C', label: '형용사', from: 'adj' }],
    rule: '<p><b>be동사</b>는 「~이다·~하다(상태)」예요. 주어에 따라 모양이 바뀌어요.</p><table><tr><th>주어</th><th>be</th></tr><tr><td>I</td><td><b>am</b></td></tr><tr><td>he · she · it · 단수 명사(my brother)</td><td><b>is</b></td></tr><tr><td>you · we · they · 복수 명사(my parents)</td><td><b>are</b></td></tr></table><p>줄여 말하기: I\'m · she\'s · they\'re</p>',
    make: ({ S, C }) => { const be = Inflect.be(S); return { parts: [S.w, be, C.w], notes: [`be → <b>${be}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`] }; } },
  { id: 'be-place', group: 'be동사', title: '주어 + be동사 + 장소', ex: 'We are at home.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'BE', label: 'be동사', fixed: ['be'] }, { k: 'M', label: '어디에', from: 'place' }],
    rule: '<p>be동사 + 장소 = 「~에 있다」. 장소 말은 at·in·on 같은 낱말과 한 덩어리예요(표의 한 칸 그대로).</p><p>be 모양: I → <b>am</b> / 3인칭 단수 → <b>is</b> / you·복수 → <b>are</b></p>',
    make: ({ S, M }) => { const be = Inflect.be(S); return { parts: [S.w, be, M.w], notes: [`be → <b>${be}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`] }; } },
  { id: 'sv', group: '현재형', title: '주어 + 동사', ex: 'He sleeps.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'V', label: '동사', from: 'vi' }],
    rule: '<p><b>현재형</b>은 습관·늘 그런 일을 말해요(「~한다」).</p><p>주어가 <b>3인칭 단수</b>(he · she · it · my brother · Mina …)면 동사 끝에 <b>-s</b>를 붙여요.</p><ul><li>보통 +s: run → run<b>s</b></li><li>s·x·ch·sh·o 로 끝나면 +es: watch → watch<b>es</b>, go → go<b>es</b></li><li>자음 + y 는 y → ies: cry → cr<b>ies</b></li></ul><p>I · you · we · they · 복수 주어는 그대로(원형).</p>',
    make: ({ S, V }) => { const v = Inflect.verb(S, V); return { parts: [S.w, v], notes: [v !== V.v ? `${V.v} → <b>${v}</b> (주어가 3인칭 단수)` : `${V.v} 그대로 (주어 ${esc2(S.w)} = ${P_KO[S.p]})`] }; } },
  { id: 'svo', group: '현재형', title: '주어 + 동사 + 목적어', ex: 'She likes pizza.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }],
    rule: '<p>목적어(「~을/를」)는 동사 <b>바로 뒤</b>에 와요. 한국어처럼 「나는 피자를 좋아한다」 순서가 아니라 <b>주어 → 동사 → 목적어</b>.</p><p>현재형: 주어가 <b>3인칭 단수</b>면 동사 + <b>-s/-es</b> (like → likes, watch → watches, have → <b>has</b>).</p>',
    make: ({ S, V, O }) => { const v = Inflect.verb(S, V); return { parts: [S.w, v, O.w], notes: [v !== V.v ? `${V.v} → <b>${v}</b> (주어가 3인칭 단수)` : `${V.v} 그대로 (주어 ${esc2(S.w)} = ${P_KO[S.p]})`] }; } },
  { id: 'svom', group: '현재형', title: '주어 + 동사 + 목적어 + 언제', ex: 'My brother plays soccer on weekends.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }, { k: 'M', label: '언제', from: 'tNow' }],
    rule: '<p>「언제」 말은 보통 <b>문장 맨 끝</b>에 붙여요: 주어 → 동사 → 목적어 → 언제.</p><p>every day · on weekends 처럼 습관을 말할 땐 현재형 — 3인칭 단수 주어면 동사 + <b>-s</b>.</p>',
    make: ({ S, V, O, M }) => { const v = Inflect.verb(S, V); return { parts: [S.w, v, O.w, M.w], notes: [v !== V.v ? `${V.v} → <b>${v}</b> (주어가 3인칭 단수)` : `${V.v} 그대로 (주어 ${esc2(S.w)} = ${P_KO[S.p]})`] }; } },
  { id: 'neg', group: '현재형', title: '주어 + don\'t + 동사 + 목적어', ex: 'He doesn\'t eat fish.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'NOT', label: '부정', fixed: ['do not'] }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }],
    rule: '<p>현재형 부정 = <b>do not (don\'t)</b> + 동사 <b>원형</b>.</p><p>주어가 3인칭 단수면 <b>does not (doesn\'t)</b>. 이때 -s 는 does 가 가져가서 동사는 <b>원형</b> 그대로예요.</p><p>✗ She doesn\'t likes … → ✓ She doesn\'t <b>like</b> …</p>',
    make: ({ S, V, O }) => { const d = Inflect.do(S); return { parts: [S.w, d, 'not', V.v, O.w], notes: [`do not → <b>${d} not (${d}n't)</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, `동사는 원형 <b>${V.v}</b>`] }; } },
  { id: 'q', group: '현재형', title: 'Do + 주어 + 동사 + 목적어?', ex: 'Does your sister like coffee?',
    cols: [{ k: 'DO', label: '질문', fixed: ['Do'] }, { k: 'S', label: '주어', from: 'subj', noI: true }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }],
    rule: '<p>현재형 질문 = <b>Do</b> + 주어 + 동사 <b>원형</b> …?</p><p>주어가 3인칭 단수면 <b>Does</b>. 동사는 그대로 <b>원형</b>.</p><p>✗ Does he plays … ? → ✓ Does he <b>play</b> … ?</p>',
    make: ({ S, V, O }) => { const d = Inflect.do(S); return { parts: [d, S.w, V.v, O.w], q: true, notes: [`Do → <b>${cap(d)}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, `동사는 원형 <b>${V.v}</b>`] }; } },
  { id: 'past', group: '과거형', title: '주어 + 동사(과거) + 목적어 + 언제', ex: 'I watched a movie last night.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }, { k: 'M', label: '언제(과거)', from: 'tPast' }],
    rule: '<p><b>과거형</b>은 주어와 상관없이 모양이 하나예요(3인칭 -s 없음).</p><ul><li>보통 +ed: play → play<b>ed</b>, watch → watch<b>ed</b></li><li>e 로 끝나면 +d: like → like<b>d</b></li><li>자음 + y → ied: study → stud<b>ied</b></li><li><b>불규칙</b>은 따로 외워요: eat → <b>ate</b>, buy → <b>bought</b>, make → <b>made</b>, see → <b>saw</b> …</li></ul>',
    make: ({ S, V, O, M }) => { const v = Inflect.past(V); return { parts: [S.w, v, O.w, M.w], notes: [`${V.v} → <b>${v}</b> (과거${V.past ? ' · 불규칙' : ''})`] }; } },
  { id: 'past-neg', group: '과거형', title: '주어 + didn\'t + 동사 + 목적어 + 언제', ex: 'She didn\'t call me yesterday.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'NOT', label: '부정', fixed: ['did not'] }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }, { k: 'M', label: '언제(과거)', from: 'tPast' }],
    rule: '<p>과거 부정 = <b>did not (didn\'t)</b> + 동사 <b>원형</b>. 주어가 누구든 did.</p><p>과거 표시는 did 가 가져가요. ✗ I didn\'t <s>went</s> → ✓ I didn\'t <b>go</b></p>',
    make: ({ S, V, O, M }) => ({ parts: [S.w, 'did', 'not', V.v, O.w, M.w], notes: [`동사는 원형 <b>${V.v}</b> (과거는 did 가 표시)`] }) },
  { id: 'past-q', group: '과거형', title: 'Did + 주어 + 동사 + 목적어 + 언제?', ex: 'Did you finish your homework yesterday?',
    cols: [{ k: 'DO', label: '질문', fixed: ['Did'] }, { k: 'S', label: '주어', from: 'subj', noI: true }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }, { k: 'M', label: '언제(과거)', from: 'tPast' }],
    rule: '<p>과거 질문 = <b>Did</b> + 주어 + 동사 <b>원형</b> …?</p><p>✗ Did you <s>bought</s> … ? → ✓ Did you <b>buy</b> … ?</p>',
    make: ({ S, V, O, M }) => ({ parts: ['did', S.w, V.v, O.w, M.w], q: true, notes: [`동사는 원형 <b>${V.v}</b> (과거는 Did 가 표시)`] }) },
  { id: 'was', group: '과거형', title: '주어 + was/were + 형용사 + 언제', ex: 'They were tired last night.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'BE', label: 'be동사', fixed: ['be'] }, { k: 'C', label: '형용사', from: 'adj' }, { k: 'M', label: '언제(과거)', from: 'tPast' }],
    rule: '<p>be동사 과거: I · 3인칭 단수 → <b>was</b> / you · we · they · 복수 → <b>were</b></p>',
    make: ({ S, C, M }) => { const be = Inflect.be(S, true); return { parts: [S.w, be, C.w, M.w], notes: [`be → <b>${be}</b> (과거 · 주어 ${esc2(S.w)} = ${P_KO[S.p]})`] }; } },
  { id: 'will', group: '미래', title: '주어 + will + 동사 + 목적어 + 언제', ex: 'We will visit Grandma tomorrow.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'WILL', label: '미래', fixed: ['will'] }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }, { k: 'M', label: '언제(미래)', from: 'tFut' }],
    rule: '<p><b>will</b> + 동사 <b>원형</b> = 「~할 거예요」. 주어가 누구든 will 그대로, 동사도 원형(-s 없음).</p><p>줄여 말하기: I\'ll · she\'ll · they\'ll</p>',
    make: ({ S, V, O, M }) => ({ parts: [S.w, 'will', V.v, O.w, M.w], notes: [`will + 원형 <b>${V.v}</b>`] }) },
  { id: 'going', group: '미래', title: '주어 + be going to + 동사 + 목적어 + 언제', ex: 'He is going to buy a new phone next week.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'GO', label: '예정', fixed: ['be going to'] }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }, { k: 'M', label: '언제(미래)', from: 'tFut' }],
    rule: '<p><b>be going to</b> + 동사 원형 = 「~할 예정이에요」(이미 정해 둔 계획).</p><p>be 는 주어에 맞춰요: I <b>am</b> / 3인칭 단수 <b>is</b> / you·복수 <b>are</b> going to …</p>',
    make: ({ S, V, O, M }) => { const be = Inflect.be(S); return { parts: [S.w, be, 'going', 'to', V.v, O.w, M.w], notes: [`be → <b>${be}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, `going to + 원형 <b>${V.v}</b>`] }; } },
  { id: 'prog', group: '진행형', title: '주어 + be + 동사-ing + 목적어 + 지금', ex: 'The kids are playing a game right now.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'BE', label: 'be동사', fixed: ['be'] }, { k: 'V', label: '동사', from: 'vt', noStative: true }, { k: 'O', label: '목적어', from: 'obj' }, { k: 'M', label: '지금', from: 'tProg' }],
    rule: '<p><b>현재진행형</b> = be + 동사<b>-ing</b> = 「지금 ~하는 중이에요」.</p><ul><li>보통 +ing: play → play<b>ing</b></li><li>e 로 끝나면 e 빼고 +ing: make → mak<b>ing</b></li><li>짧은 모음 + 자음 하나면 자음 한 번 더: run → run<b>ning</b>, sit → sit<b>ting</b></li></ul><p>be: I <b>am</b> / 3인칭 단수 <b>is</b> / you·복수 <b>are</b></p>',
    make: ({ S, V, O, M }) => { const be = Inflect.be(S), v = Inflect.ing(V); return { parts: [S.w, be, v, O.w, M.w], notes: [`be → <b>${be}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, `${V.v} → <b>${v}</b>`] }; } },
  { id: 'can', group: '조동사', title: '주어 + can/can\'t + 동사 + 목적어', ex: 'My dad can\'t cook pasta.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'CAN', label: '할 수 있다', fixed: ['can', 'cannot'] }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }],
    rule: '<p><b>can</b> + 동사 <b>원형</b> = 「~할 수 있어요」, <b>can\'t (cannot)</b> + 원형 = 「~못 해요」.</p><p>주어가 누구든 can 그대로, 동사도 원형. ✗ She can <s>swims</s> → ✓ She can <b>swim</b></p>',
    make: ({ S, CAN, V, O }) => ({ parts: [S.w, CAN.w, V.v, O.w], notes: [`${CAN.w} + 원형 <b>${V.v}</b> (-s 안 붙음)`] }) },
  { id: 'have-to', group: '조동사', title: '주어 + have to + 동사 + 목적어', ex: 'She has to finish the report.',
    cols: [{ k: 'S', label: '주어', from: 'subj' }, { k: 'HAVE', label: '해야 한다', fixed: ['have to'] }, { k: 'V', label: '동사', from: 'vt' }, { k: 'O', label: '목적어', from: 'obj' }],
    rule: '<p><b>have to</b> + 동사 원형 = 「~해야 해요」.</p><p>주어가 3인칭 단수면 <b>has to</b>. 뒤 동사는 원형 그대로.</p>',
    make: ({ S, V, O }) => { const h = Inflect.have(S); return { parts: [S.w, h, 'to', V.v, O.w], notes: [`have → <b>${h}</b> to (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, `동사는 원형 <b>${V.v}</b>`] }; } },
  { id: 'there', group: 'There is', title: 'There + be + 명사 + 장소', ex: 'There are two dogs in the park.',
    cols: [{ k: 'TH', label: '있다', fixed: ['There be'] }, { k: 'N', label: '무엇이', from: 'thing' }, { k: 'M', label: '어디에', from: 'place' }],
    rule: '<p><b>There is / There are</b> + 명사 + 장소 = 「~에 …이 있어요」.</p><p>be 는 <b>뒤에 오는 명사</b>에 맞춰요: 하나(a cat)·셀 수 없는 것(some water) → <b>is</b> / 여럿(two dogs) → <b>are</b></p>',
    make: ({ N, M }) => { const be = N.n === 'pl' ? 'are' : 'is'; return { parts: ['there', be, N.w, M.w], notes: [`be → <b>${be}</b> (${esc2(N.w)} = ${N.n === 'pl' ? '여럿' : N.n === 'u' ? '셀 수 없는 것' : '하나'})`] }; } },
];
function esc2(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]); }

// 현재진행형을 안 쓰는 상태 동사 (She is liking … ✗) — 진행형 표와 사슬에서 뺌
const VERB_LISTS = ['vt', 'vi', 'vTo', 'vIng']; // 동사 목록(활용하는 열)
const STATIVE = ['like', 'love', 'want', 'need'];
// 🔗 바꿔 말하기 사슬: 학습자가 만든 문장(주어·동사·목적어)을 다른 모양으로 스스로 바꿔 쓰기
// to = 바뀌는 문법(COMBO_PATTERNS id) · time = 그 문법의 「언제」 열 · after = 이 단계의 문장을 이어서 바꿈
const CHAIN_FORMS = [
  { id: 'pres', to: 'svo', label: '현재형', ask: '<b>현재형</b> 평서문으로' },
  { id: 'neg', to: 'neg', label: '부정', ask: '<b>부정문</b>으로' },
  { id: 'q', to: 'q', label: '질문', ask: '<b>질문</b>(Yes/No)으로' },
  { id: 'past', to: 'past', label: '과거', ask: '<b>과거</b> 문장으로', time: 'tPast' },
  { id: 'past-neg', to: 'past-neg', label: '과거 부정', ask: '<b>과거 부정문</b>으로', time: 'tPast', after: 'past' },
  { id: 'past-q', to: 'past-q', label: '과거 질문', ask: '<b>과거 질문</b>으로', time: 'tPast', after: 'past' },
  { id: 'will', to: 'will', label: '미래', ask: '<b>미래</b>(will) 문장으로', time: 'tFut' },
  { id: 'prog', to: 'prog', label: '진행', ask: '<b>지금 하는 중</b>(현재진행형)인 일로', time: 'tProg', noStative: true },
];
// 사슬을 시작할 수 있는 문법 → 그 문법과 같은 단계는 건너뜀
const CHAIN_SKIP = { svo: 'pres', svom: 'pres', neg: 'neg', q: 'q', past: 'past', 'past-neg': 'past-neg', 'past-q': 'past-q', will: 'will', going: '', prog: 'prog', can: '', 'have-to': '' };
const CHAIN_TIME = { tPast: 'yesterday', tFut: 'tomorrow', tProg: 'right now' };

const Combo = {
  patterns: COMBO_PATTERNS,
  pattern(id) { return COMBO_PATTERNS.find(p => p.id === id); },
  // 문장 완성: 첫 글자 대문자, I 는 늘 대문자, 끝에 . 또는 ?
  sentence(r) { const s = r.parts.join(' ').replace(/\bi\b/g, 'I'); return cap(s) + (r.q ? '?' : '.'); },
  // 열 하나의 낱말 목록(걸러서): noI 주어에서 I 빼기 · only 낱말만 · cats 목적어 종류 · notN 수(pl 빼기) · noStative 상태 동사 빼기 · pp 과거분사 못 쓰는 동사 빼기
  poolOf(c, lex) {
    let pool = lex[c.from] || [];
    if (c.noI) pool = pool.filter(x => x.w !== 'I');
    if (c.only) pool = pool.filter(x => c.only.includes(x.w));
    if (c.cats) pool = pool.filter(x => c.cats.includes(x.cat));
    if (c.notN) pool = pool.filter(x => !c.notN.includes(x.n));
    if (c.noStative) pool = pool.filter(x => !STATIVE.includes(x.v));
    if (c.pp) pool = pool.filter(x => !x.noPP);
    return pool;
  },
  // 표 만들기: 열마다 따로 섞어 rows 줄. 동사 열(V)이 있으면 목적어 열(O)에 그 동사와 어울리는 목적어를 하나씩 넣음 (V2·O2 도 같은 방식)
  table(p, lex, rows = 6, rnd = Math.random) {
    const sh = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const t = {}; const pairs = [['V', 'O'], ['V2', 'O2']].filter(([v, o]) => p.cols.some(c => c.k === v) && p.cols.some(c => c.k === o));
    for (const c of p.cols) {
      if (c.fixed) { t[c.k] = c.fixed.map(w => ({ w, fixed: true })); continue; }
      let pool = this.poolOf(c, lex);
      for (const [vk, ok] of pairs) if (c.k === vk) { // 동사는 이 표의 목적어 열에 어울리는 목적어 종류가 있는 것만
        const oc = p.cols.find(x => x.k === ok); const cats = new Set(this.poolOf(oc, lex).map(o => o.cat)); pool = pool.filter(v => (v.obj || []).some(x => cats.has(x)));
      }
      t[c.k] = sh(pool).slice(0, rows);
    }
    for (const [vk, ok] of pairs) { // 동사마다 어울리는 목적어가 표 어딘가에 있게
      const oc = p.cols.find(x => x.k === ok), opool = this.poolOf(oc, lex); const objs = []; const used = new Set();
      for (const v of t[vk]) { const fit = sh(opool.filter(o => !used.has(o.w) && (v.obj || []).includes(o.cat))); if (fit[0]) { objs.push(fit[0]); used.add(fit[0].w); } }
      for (const o of sh(opool)) { if (objs.length >= rows) break; if (!used.has(o.w)) { objs.push(o); used.add(o.w); } }
      t[ok] = sh(objs.slice(0, rows));
    }
    return t;
  },
  // 낱말 하나가 쓸 수 있는 모양들 (칸 알아보기용)
  forms(c, x) { if (c.from === 'adjEmo') return [x.ed, x.ing]; if (VERB_LISTS.includes(c.from)) return [x.v, Inflect.s3(x.v), Inflect.past(x), Inflect.ing(x), Inflect.pp(x)]; return [x.w]; },
  // 학습자 문장 → { pick: 열별 칸, missing: [못 찾은 열], expect, ok, diff, notes }
  judge(p, table, input) {
    const T = Grader.tokens(input); if (!T.length) return { empty: true };
    const STOP = new Set(['a', 'an', 'the', 'my', 'your', 'our', 'his', 'her', 'their', 'to', 'in', 'on', 'at', 'of', 'some', 'and', 'a lot']);
    const wt = (t) => (STOP.has(t) ? 0.3 : 1);
    const isNeg = T.some(t => t === 'not' || /^can'?t$|^cannot$/.test(t));
    // 한 칸이 T 의 from 위치부터(순서대로) 얼마나 맞나: 낱말이 이어서 나와야 점수. 못 찾으면 null
    const seqAt = (ft, from) => { for (let i = from; i < T.length; i++) { let k = 0; while (k < ft.length && i + k < T.length && Grader.eq(T[i + k], ft[k])) k++; if (k === ft.length) return { at: i, end: i + k, sc: ft.reduce((a, t) => a + wt(t), 0) }; } return null; };
    const bag = (ft) => { const w = ft.reduce((a, t) => a + (T.some(x => Grader.eq(x, t)) ? wt(t) : 0), 0); return w; };
    const pick = {}; const missing = []; let ptr = 0;
    for (const c of p.cols) {
      const cells = table[c.k];
      if (c.fixed) {
        if (c.fixed.includes('cannot')) { pick[c.k] = cells.find(x => (x.w === 'cannot') === isNeg) || cells[0]; continue; } // can / cannot
        // 고정 낱말: 쓴 문장에서 그 자리를 찾아 지나감(다음 칸이 그 안의 낱말을 잘못 고르지 않게). 모양이 바뀌는 말은 fx(쓸 수 있는 모양들)로
        let hit = null; for (const x of (c.fx ? c.fx.map(w => ({ w })) : cells)) { const m = seqAt(Grader.tokens(x.w), ptr); if (m && (!hit || m.at < hit.at || (m.at === hit.at && m.end > hit.end))) hit = { at: m.at, end: m.end, x }; }
        if (cells.length === 1) { pick[c.k] = cells[0]; if (hit) ptr = hit.end; continue; }
        if (hit) { pick[c.k] = hit.x; ptr = hit.end; continue; } // 여러 칸 중 하나(might / must …)
        missing.push(c); continue;
      }
      let best = null;
      for (const x of cells) for (const f of this.forms(c, x)) { // ① 순서대로 이어서 나오는 칸(가장 긴 것)
        const ft = Grader.tokens(f); const m = seqAt(ft, ptr); if (!m) continue;
        const key = -m.at * 1000 + m.sc; if (m.sc >= 0.9 && (!best || key > best.key)) best = { x, key, end: m.end };
      }
      if (best) { pick[c.k] = best.x; ptr = best.end; continue; }
      let bb = null; // ② 순서가 틀렸어도 낱말이 들어 있으면 그 칸으로 (틀린 순서는 채점에서 걸림)
      for (const x of cells) for (const f of this.forms(c, x)) { const ft = Grader.tokens(f); const w = bag(ft), tot = ft.reduce((a, t) => a + wt(t), 0); const key = w * 100 + (tot ? w / tot : 0); if (w >= 0.9 && (!bb || key > bb.key)) bb = { x, key }; }
      if (bb) pick[c.k] = bb.x; else missing.push(c);
    }
    if (missing.length) return { missing, pick };
    const g = this.grade(p, pick, input);
    g.key = p.cols.filter(c => !c.fixed || table[c.k].length > 1).map(c => pick[c.k].w || pick[c.k].v).join('|');
    return g;
  },
  // 고른 칸(pick)이 정해졌을 때: 맞는 문장을 만들어 학습자 문장과 비교
  grade(p, pick, input) {
    const r = p.make(pick); const expect = this.sentence(r);
    // 동사·be·do 의 다른 모양은 오타로 봐주지 않음 (drank ↔ drink, sent ↔ send)
    const avoid = ['am is are was were be been being do does did has have had'];
    for (const c of p.cols) if (VERB_LISTS.includes(c.from) && pick[c.k]) avoid.push(this.forms(c, pick[c.k]).join(' '));
    const answers = [expect].concat((r.alts || []).map(a => this.sentence({ parts: a, q: r.q }))); // 다른 맞는 문장(that 생략·who/that …)
    const g = Grader.text(input, answers, { avoid: avoid.join(' ') });
    return { pick, expect, ok: g.ok, typo: g.typo, diff: g.diff, notes: r.notes, explain: g.ok ? [] : Grader.explain(input) };
  },
  // 🔗 사슬: 이 문법의 문장이면 바꿔 말하기를 할 수 있어요
  inSet(p, set) { return (p.sets || ['basic']).includes(set); },
  chainable(p) { return Object.prototype.hasOwnProperty.call(CHAIN_SKIP, p.id) && ['S', 'V', 'O'].every(k => p.cols.some(c => c.k === k)); },
  // 학습자가 만든 pick → { base: 기준 문장, steps: [{ id, label, ask, from, fromSentence, give, subjNote, pick, expect, notes }] }
  chain(p, pick, lex) {
    if (!this.chainable(p) || !pick.S || !pick.V || !pick.O) return null;
    const find = (list, w) => (lex[list] || []).find(x => x.w === w) || (lex[list] || [])[0];
    const base = this.sentence(p.make(pick)); const stative = STATIVE.includes(pick.V.v); const steps = [];
    for (const f of CHAIN_FORMS) {
      if (f.id === CHAIN_SKIP[p.id] || (f.noStative && stative)) continue;
      const tp = this.pattern(f.to); const prev = f.after && steps.find(s => s.id === f.after);
      let S = pick.S, subjNote = '';
      if ((f.to === 'q' || f.to === 'past-q') && S.w === 'I') { S = find('subj', 'you'); subjNote = '주어 I 는 <b>you</b> 로 바꿔요 (상대에게 묻는 질문)'; }
      const tp2 = {}; const give = [];
      for (const c of tp.cols) {
        if (c.k === 'S') tp2.S = S; else if (c.k === 'V') tp2.V = pick.V; else if (c.k === 'O') tp2.O = pick.O;
        else if (c.k === 'M') { const sm = p.cols.find(x => x.k === 'M'); const x = prev ? prev.pick.M : (sm && sm.from === c.from && pick.M) ? pick.M : find(c.from, CHAIN_TIME[c.from]); tp2.M = x; give.push(x); }
        else if (c.fixed) tp2[c.k] = { w: c.fixed[0], fixed: true };
      }
      const r = tp.make(tp2);
      steps.push({ id: f.id, label: f.label, ask: f.ask, to: tp.id, from: prev ? prev.id : 'base', fromSentence: prev ? prev.expect : base, give, subjNote, pick: tp2, expect: this.sentence(r), notes: r.notes });
    }
    return { base, steps };
  },
  gradeStep(step, input) { if (!Grader.tokens(input).length) return { empty: true }; return this.grade(this.pattern(step.to), step.pick, input); },
};
if (typeof module !== 'undefined') module.exports = { Combo, Inflect, COMBO_PATTERNS };
