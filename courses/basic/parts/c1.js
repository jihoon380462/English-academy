// courses/basic/parts/c1.js — 챕터 1 (샘플: 레슨 E1). 스키마는 ../content.js 맨 위 주석
CHAPTERS.push(
  { n: 1, title: '문장 뼈대', icon: '🦴', desc: '누가 + 이다/한다 — be동사로 나를 소개해요' },
);
LESSONS.push(
  { id: 'E1', ch: 1, n: 1, title: '나는 ~예요 (I am)', minutes: 6, terms: { 'be동사': '「~이다, ~에 있다」를 뜻하는 동사. am / is / are 셋이에요.', '주어': '문장의 주인공. 「누가」에 해당해요.' },
    pages: [
      { title: '영어 문장은 「누가 + 이다/한다」로 시작해요', html: '<p>한국어는 「나는 학생<b>이에요</b>」처럼 끝에 동사가 오지만, 영어는 <b>주어 바로 다음</b>에 동사가 와요.</p><p>「~이에요」는 영어로 <b>be동사</b>. 주어가 I(나)면 <b>am</b>을 써요.</p>',
        ex: [{ en: 'I|am|a student.', roles: 'S V C', ko: '나는 학생이에요.' }, { en: 'I|am|hungry.', roles: 'S V C', ko: '나는 배고파요.' }, { en: "I'm Jihoon.", ko: '나는 지훈이에요.', note: "I am 은 줄여서 <b>I'm</b> 이라고 많이 말해요." }] },
      { title: '파랑 = 누가, 빨강 = 이다', html: '<p>이 사이트에서는 문장 성분을 색으로 보여 줘요. <span class="chunk r-S">파랑</span>은 주어, <span class="chunk r-V">빨강</span>은 동사, <span class="chunk r-C">초록</span>은 「무엇·어떤」이에요.</p>',
        ex: [{ en: 'I|am|tired.', roles: 'S V C', ko: '나는 피곤해요.' }, { en: 'I|am|from Korea.', roles: 'S V M', ko: '나는 한국에서 왔어요.' }], tip: '🔊 를 눌러 듣고 따라 말해 보세요. 듣고 → 따라 말하기가 가장 빨리 느는 방법이에요.' },
    ],
    summary: ['영어는 <b>주어 → 동사</b> 순서로 시작해요.', 'I(나) 다음 be동사는 <b>am</b> (줄여서 I\'m).', 'I am + 명사/형용사/어디서 = 나는 ~예요.'] },
);
PROBLEMS.push(
  { id: 'E1P1', lesson: 'E1', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ a student.', opts: ['am', 'is', 'are'], ans: 0, tags: ['be동사'], hints: ['주어가 I 예요', 'I 다음에는 am', 'I am a student.'], why: 'I 다음 be동사는 언제나 am 이에요.' },
  { id: 'E1P2', lesson: 'E1', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I am hungry.', opts: ['나는 배고파요.', '나는 피곤해요.', '나는 학생이에요.'], ans: 0, tags: ['듣기'], hints: ['마지막 낱말을 들어 보세요', 'hungry = 배고픈', '나는 배고파요.'] },
  { id: 'E1P3', lesson: 'E1', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '나는 피곤해요.', answer: ['I am tired.', "I'm tired."], cards: ['I', 'am', 'tired.'], roles: 'S V C', tags: ['문장 뼈대'], hints: ['파랑(주어)은 I', '빨강(동사)은 am', 'I am tired.'] },
  { id: 'E1P4', lesson: 'E1', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 한국에서 왔어요.', answer: ['I am from Korea.', "I'm from Korea."], cards: ['I', 'am', 'from', 'Korea.'], distractors: ['is'], tags: ['문장 뼈대'], hints: ['주어 → 동사 → 어디서', 'I am 다음에 from Korea', 'I am from Korea.'] },
  { id: 'E1P5', lesson: 'E1', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 학생이에요.', wrong: 'I is a student.', answer: ['I am a student.', "I'm a student."], tags: ['be동사', '오개념'], hints: ['동사를 보세요', 'I 다음은 am', 'I am a student.'] },
  { id: 'E1P6', lesson: 'E1', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 배고파요.', answer: ['I am hungry.', "I'm hungry."], tags: ['문장 뼈대'], hints: ['나는 = I, 이다 = am', '배고픈 = hungry', 'I am hungry.'] },
  { id: 'E1P7', lesson: 'E1', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I'm from Korea.", ko: '나는 한국에서 왔어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', "I'm 은 「아임」", "I'm from Korea."] },
);
