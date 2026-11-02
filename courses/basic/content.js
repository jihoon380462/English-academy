// courses/basic/content.js — 「영어 다시 시작」 코스 콘텐츠 (데이터만, 로직 없음)
/*
=== 스키마 (모든 코스 공통 — tools/validate_content.mjs 가 검사, tools/check_answers.mjs 가 정답이 채점기를 통과하는지 확인) ===
원칙: **문장 위주**(사용자 결정 11/3). 낱말 하나만 묻는 문제는 피하고, 항상 문장 안에서 묻는다. 예문은 전부 직접 지은 문장(교재·기사 복사 금지).

COURSE   = { id, name }
CHAPTERS = [{ n, title, icon, desc }]
LESSONS  = [{ id:'E1'(레슨)|'B1'(챕터 보스), ch, n(레슨 번호, 보스는 생략), title, minutes, boss?:true, terms?:{용어:'쉬운 설명'},
              pages:[{ title, html, ex:[{ en, ko, roles?, note?, deck?:false }], tip? }], summary:[3줄] }]
   en 안의 '|' 는 의미 덩어리 경계 (roles 와 짝). roles = 덩어리마다 성분 글자 S(주어) V(동사) O(목적어) C(보어) M(꾸밈말) J(연결어) Q(질문어)
   예: { en:'She|drinks|coffee|every morning', roles:'S V O M', ko:'그녀는 매일 아침 커피를 마셔요' }
   ex 는 레슨을 끝내면 「문장 덱」의 내 문장으로 자동으로 들어간다(Anki 복습). 넣고 싶지 않은 예문은 deck:false.
PROBLEMS = [{ id:'E1P1', lesson:'E1', type, title?, prompt(HTML), ko?, tags:[1~3], hints:[3단계], why?, boss?:true, + 유형별 필드 }]
   choice    : q?(문장, '|'·qroles 가능), opts:[2~4], ans:정답 번호(0부터), sayOpts?:true(보기가 영어 문장이면 🔊)
   listen    : say(들려줄 문장), opts, ans
   match     : pairs:[[영어 문장/구, 한국어], ...] 3~5쌍
   build     : answer:[허용 답...], cards:[대표 답을 순서대로 나눈 카드], roles:'카드마다 성분 글자'  (성분 색 슬롯 = 사다리 1단)
   order     : answer:[허용 답...], cards:[대표 답 순서대로], distractors?:[함정 카드 1~2]  (사다리 2단)
   fill      : text:'I ___ a student.'(빈칸 ___), blanks:[{ a:[허용 답], opt?:[고르기 보기] }]
   fix       : wrong:'틀린 문장', answer:[고친 문장 허용 답]
   type      : ko(필수), answer:[허용 답 — 자연스러운 다른 표현도 넣기], cards?:[쓸 낱말 힌트]  (사다리 3단)
   dictation : say(들려줄 문장), answer?(생략하면 say)
   speak     : say(말할 문장), ko?, roles?  (사다리 4단)
   answer 비교: 대소문자·끝 문장부호·축약형(I'm=I am)·오타 1개는 봐준다. 쉼표·마침표는 무시. 다른 어순·다른 낱말은 answer 에 따로 넣어야 정답.
   id 규칙: 레슨 E<번호>, 보스 B<챕터>, 문제 <레슨id>P<번호>. 같은 레슨 안 문제는 쉬운 것 → 어려운 것(사다리 순서: choice/listen/match → build → order → fill/fix → type/dictation → speak).
*/
const COURSE = { id: 'basic', name: '영어 다시 시작' };
const CHAPTERS = [
  { n: 1, title: '문장 뼈대', icon: '🦴', desc: '누가 + 이다/한다 — be동사로 나를 소개해요' },
];
const LESSONS = [
  { id: 'E1', ch: 1, n: 1, title: '나는 ~예요 (I am)', minutes: 6, terms: { 'be동사': '「~이다, ~에 있다」를 뜻하는 동사. am / is / are 셋이에요.', '주어': '문장의 주인공. 「누가」에 해당해요.' },
    pages: [
      { title: '영어 문장은 「누가 + 이다/한다」로 시작해요', html: '<p>한국어는 「나는 학생<b>이에요</b>」처럼 끝에 동사가 오지만, 영어는 <b>주어 바로 다음</b>에 동사가 와요.</p><p>「~이에요」는 영어로 <b>be동사</b>. 주어가 I(나)면 <b>am</b>을 써요.</p>',
        ex: [{ en: 'I|am|a student.', roles: 'S V C', ko: '나는 학생이에요.' }, { en: 'I|am|hungry.', roles: 'S V C', ko: '나는 배고파요.' }, { en: "I'm Jihoon.", ko: '나는 지훈이에요.', note: "I am 은 줄여서 <b>I'm</b> 이라고 많이 말해요." }] },
      { title: '파랑 = 누가, 빨강 = 이다', html: '<p>이 사이트에서는 문장 성분을 색으로 보여 줘요. <span class="chunk r-S">파랑</span>은 주어, <span class="chunk r-V">빨강</span>은 동사, <span class="chunk r-C">초록</span>은 「무엇·어떤」이에요.</p>',
        ex: [{ en: 'I|am|tired.', roles: 'S V C', ko: '나는 피곤해요.' }, { en: 'I|am|from Korea.', roles: 'S V M', ko: '나는 한국에서 왔어요.' }], tip: '🔊 를 눌러 듣고 따라 말해 보세요. 듣고 → 따라 말하기가 가장 빨리 느는 방법이에요.' },
    ],
    summary: ['영어는 <b>주어 → 동사</b> 순서로 시작해요.', 'I(나) 다음 be동사는 <b>am</b> (줄여서 I\'m).', 'I am + 명사/형용사/어디서 = 나는 ~예요.'] },
];
const PROBLEMS = [
  { id: 'E1P1', lesson: 'E1', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ a student.', opts: ['am', 'is', 'are'], ans: 0, tags: ['be동사'], hints: ['주어가 I 예요', 'I 다음에는 am', 'I am a student.'], why: 'I 다음 be동사는 언제나 am 이에요.' },
  { id: 'E1P2', lesson: 'E1', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I am hungry.', opts: ['나는 배고파요.', '나는 피곤해요.', '나는 학생이에요.'], ans: 0, tags: ['듣기'], hints: ['마지막 낱말을 들어 보세요', 'hungry = 배고픈', '나는 배고파요.'] },
  { id: 'E1P3', lesson: 'E1', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '나는 피곤해요.', answer: ['I am tired.', "I'm tired."], cards: ['I', 'am', 'tired.'], roles: 'S V C', tags: ['문장 뼈대'], hints: ['파랑(주어)은 I', '빨강(동사)은 am', 'I am tired.'] },
  { id: 'E1P4', lesson: 'E1', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 한국에서 왔어요.', answer: ['I am from Korea.', "I'm from Korea."], cards: ['I', 'am', 'from', 'Korea.'], distractors: ['is'], tags: ['문장 뼈대'], hints: ['주어 → 동사 → 어디서', 'I am 다음에 from Korea', 'I am from Korea.'] },
  { id: 'E1P5', lesson: 'E1', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 학생이에요.', wrong: 'I is a student.', answer: ['I am a student.', "I'm a student."], tags: ['be동사', '오개념'], hints: ['동사를 보세요', 'I 다음은 am', 'I am a student.'] },
  { id: 'E1P6', lesson: 'E1', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 배고파요.', answer: ['I am hungry.', "I'm hungry."], tags: ['문장 뼈대'], hints: ['나는 = I, 이다 = am', '배고픈 = hungry', 'I am hungry.'] },
  { id: 'E1P7', lesson: 'E1', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I'm from Korea.", ko: '나는 한국에서 왔어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', "I'm 은 「아임」", "I'm from Korea."] },
];
