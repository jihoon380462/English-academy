// courses/basic/parts/c1.js — 챕터 1 「문장 뼈대」 (레슨 E5~E9 + 보스 B1). 스키마는 ../content.js 맨 위 주석
CHAPTERS.push(
  { n: 1, title: '문장 뼈대', icon: '🦴', desc: '누가 + 이다 — be동사로 나와 주변을 소개해요' },
);
LESSONS.push(
  // ── E5 I am ──
  { id: 'E5', ch: 1, n: 5, title: '나는 ~예요 (I am)', minutes: 6,
    terms: { 'be동사': '「~이다, ~에 있다」를 뜻하는 동사. am / is / are 셋이에요.', '주어': '문장의 주인공. 「누가」에 해당해요.' },
    pages: [
      { title: '영어 문장은 「누가 + 이다/한다」로 시작해요', html: '<p>한국어는 「나는 학생<b>이에요</b>」처럼 끝에 동사가 오지만, 영어는 <b>주어 바로 다음</b>에 동사가 와요.</p><p>「~이에요」는 영어로 <b>be동사</b>. 주어가 I(나)면 <b>am</b>을 써요.</p>',
        ex: [
          { en: 'I|am|a student.', roles: 'S V C', ko: '나는 학생이에요.' },
          { en: 'I|am|hungry.', roles: 'S V C', ko: '나는 배고파요.' },
          { en: "I'm Jihoon.", ko: '나는 지훈이에요.', note: "I am 은 줄여서 <b>I'm</b> 이라고 많이 말해요." },
        ] },
      { title: '파랑 = 누가, 빨강 = 이다', html: '<p>이 사이트에서는 문장 성분을 색으로 보여 줘요. <span class="chunk r-S">파랑</span>은 주어, <span class="chunk r-V">빨강</span>은 동사, <span class="chunk r-C">초록</span>은 「무엇·어떤」, <span class="chunk r-M">회색</span>은 「어디·언제」예요.</p><p>I am 뒤에는 <b>명사(학생)</b>, <b>형용사(피곤한)</b>, <b>어디서(from Korea)</b>가 올 수 있어요.</p>',
        ex: [
          { en: 'I|am|tired.', roles: 'S V C', ko: '나는 피곤해요.' },
          { en: 'I|am|from Korea.', roles: 'S V M', ko: '나는 한국에서 왔어요.' },
          { en: 'I|am|at home.', roles: 'S V M', ko: '나는 집에 있어요.' },
        ], tip: '🔊 를 눌러 듣고 따라 말해 보세요. 듣고 → 따라 말하기가 가장 빨리 느는 방법이에요.' },
    ],
    summary: ['영어는 <b>주어 → 동사</b> 순서로 시작해요.', "I(나) 다음 be동사는 <b>am</b> (줄여서 I'm).", 'I am + 명사/형용사/어디 = 나는 ~예요, ~에 있어요.'] },

  // ── E6 you / we / they are ──
  { id: 'E6', ch: 1, n: 6, title: '너·우리·그들은 ~예요 (are)', minutes: 6,
    terms: { '복수': '둘 이상. we(우리), they(그들)는 여럿이에요.' },
    pages: [
      { title: 'you, we, they 다음은 are', html: '<p>주어가 <b>you</b>(너, 너희), <b>we</b>(우리), <b>they</b>(그들, 그것들)면 be동사는 <b>are</b>예요.</p><table><tr><td>You are</td><td>You\'re</td></tr><tr><td>We are</td><td>We\'re</td></tr><tr><td>They are</td><td>They\'re</td></tr></table>',
        ex: [
          { en: 'You|are|kind.', roles: 'S V C', ko: '당신은 친절해요.' },
          { en: 'We|are|friends.', roles: 'S V C', ko: '우리는 친구예요.' },
          { en: 'They|are|in the office.', roles: 'S V M', ko: '그들은 사무실에 있어요.' },
        ] },
      { title: '이름 두 개 = they, 나 + 누구 = we', html: '<p>「Mina and Tom」처럼 <b>둘 이상</b>이 주어면 they 와 같아서 <b>are</b>를 써요.</p><p>「Mina and I」(미나와 나)는 we 와 같아요 → 역시 <b>are</b>.</p>',
        ex: [
          { en: 'Mina and Tom|are|coworkers.', roles: 'S V C', ko: '미나와 톰은 직장 동료예요.' },
          { en: 'Mina and I|are|on the same team.', roles: 'S V M', ko: '미나와 나는 같은 팀이에요.' },
        ], tip: "you 는 한 사람이어도 are 예요: You are late. (You is ✗)" },
    ],
    summary: ['you / we / they 다음 be동사는 <b>are</b>.', "줄이면 you're, we're, they're.", '사람이 둘 이상이면(Mina and Tom) are.'] },

  // ── E7 he / she / it is ──
  { id: 'E7', ch: 1, n: 7, title: '그·그녀·그것은 ~예요 (is)', minutes: 6,
    terms: { '3인칭 단수': '나(I)도 너(you)도 아닌 「한 사람·한 개」. he, she, it, Mina, my phone 같은 것.' },
    pages: [
      { title: 'he, she, it 다음은 is', html: '<p>주어가 <b>he</b>(그), <b>she</b>(그녀), <b>it</b>(그것)처럼 <b>나·너가 아닌 하나</b>면 be동사는 <b>is</b>예요.</p><table><tr><td>He is</td><td>He\'s</td></tr><tr><td>She is</td><td>She\'s</td></tr><tr><td>It is</td><td>It\'s</td></tr></table>',
        ex: [
          { en: 'He|is|a nurse.', roles: 'S V C', ko: '그는 간호사예요.' },
          { en: 'She|is|my sister.', roles: 'S V C', ko: '그녀는 내 여동생이에요.' },
          { en: 'It|is|very hot|today.', roles: 'S V C M', ko: '오늘 아주 더워요.', note: "날씨·시간을 말할 때 주어로 <b>it</b>을 써요. 뜻은 따로 없어요. 말할 때는 It's very hot today." },
        ] },
      { title: '이름 하나, 물건 하나도 is', html: '<p>「Tom」, 「my phone」, 「the coffee」처럼 <b>한 사람·한 개</b>면 모두 is 예요.</p><p>정리: <b>I → am</b> · <b>you/we/they → are</b> · <b>나머지 하나 → is</b>.</p>',
        ex: [
          { en: 'Tom|is|in the meeting room.', roles: 'S V M', ko: '톰은 회의실에 있어요.' },
          { en: 'My phone|is|on the desk.', roles: 'S V M', ko: '내 휴대폰은 책상 위에 있어요.' },
          { en: 'The coffee|is|too sweet.', roles: 'S V C', ko: '커피가 너무 달아요.' },
        ] },
    ],
    summary: ['he / she / it 다음 be동사는 <b>is</b>.', '이름 하나·물건 하나도 is: Tom is, my phone is.', 'I am · you/we/they are · 하나 is.'] },

  // ── E8 부정·질문 ──
  { id: 'E8', ch: 1, n: 8, title: '아니에요 / ~예요? (not, Are you…?)', minutes: 7,
    terms: { '부정문': '「~이 아니에요」처럼 아니라고 말하는 문장.', '의문문': '묻는 문장. 끝에 ? 가 붙어요.' },
    pages: [
      { title: '아니에요 = be동사 뒤에 not', html: '<p>be동사 <b>바로 뒤에 not</b>을 넣으면 「~이 아니에요」가 돼요.</p><p>줄임말: <b>I\'m not</b> · <b>isn\'t</b> (is not) · <b>aren\'t</b> (are not). am not 은 줄이지 않고 I\'m not 으로 말해요.</p>',
        ex: [
          { en: 'I|am not|busy.', roles: 'S V C', ko: '나는 바쁘지 않아요.', note: "not 은 동사 덩어리(빨강)에 들어가요. 말할 때는 I'm not busy." },
          { en: "He|isn't|here.", roles: 'S V M', ko: '그는 여기 없어요.' },
          { en: "They|aren't|ready.", roles: 'S V C', ko: '그들은 준비가 안 됐어요.' },
        ] },
      { title: '물을 때 = be동사를 맨 앞으로', html: '<p>「You are ready.」에서 <b>are 를 맨 앞으로</b> 옮기면 「Are you ready?」(준비됐어요?)가 돼요.</p><p>대답은 짧게: <b>Yes, I am.</b> / <b>No, I\'m not.</b> (Yes, I\'m. 처럼 끝에서 줄이지 않아요.)</p>',
        ex: [
          { en: 'Are|you|ready?', roles: 'Q S C', ko: '준비됐어요?' },
          { en: 'Is|she|your manager?', roles: 'Q S C', ko: '그녀가 당신 팀장이에요?' },
          { en: 'Yes,|I|am.', roles: 'M S V', ko: '네, 그래요.', deck: false },
        ], tip: '질문은 끝을 올려 말해요 ↗. Are you ready? ↗' },
    ],
    summary: ['아니에요: be동사 + <b>not</b> (isn\'t, aren\'t, I\'m not).', '질문: be동사를 <b>맨 앞</b>으로 → Are you …?', "짧은 대답: Yes, I am. / No, I'm not."] },

  // ── E9 this/that/these/those + a/an ──
  { id: 'E9', ch: 1, n: 9, title: '이것·저것, 하나·여럿 (this/these, a/an)', minutes: 8,
    terms: { '명사': '사람·물건·장소의 이름. book, friend, Seoul.', '관사': '명사 앞의 작은 말. 하나일 때 a / an.' },
    pages: [
      { title: '가까우면 this, 멀면 that', html: '<p>하나일 때: 가까운 건 <b>this</b>(이것), 먼 건 <b>that</b>(저것) + <b>is</b>.</p><p>여럿일 때: 가까운 건 <b>these</b>(이것들), 먼 건 <b>those</b>(저것들) + <b>are</b>.</p><table><tr><th></th><th>하나</th><th>여럿</th></tr><tr><td>가까이</td><td>this is</td><td>these are</td></tr><tr><td>멀리</td><td>that is</td><td>those are</td></tr></table>',
        ex: [
          { en: 'This|is|my bag.', roles: 'S V C', ko: '이건 내 가방이에요.' },
          { en: 'That|is|our office.', roles: 'S V C', ko: '저게 우리 사무실이에요.' },
          { en: 'These|are|my friends.', roles: 'S V C', ko: '이쪽은 내 친구들이에요.', note: '사람을 소개할 때도 this / these 를 써요.' },
        ] },
      { title: '하나면 a, 여럿이면 -s', html: '<p>셀 수 있는 명사가 <b>하나</b>면 앞에 <b>a</b>, <b>여럿</b>이면 끝에 <b>-s</b>를 붙여요.</p><p>a book → two books · a cup → three cups. 여럿일 때는 a 를 빼요.</p>',
        ex: [
          { en: 'I|have|a question.', roles: 'S V O', ko: '질문이 하나 있어요.' },
          { en: 'Those|are|my books.', roles: 'S V C', ko: '저것들은 내 책이에요.' },
          { en: 'We|have|two cats.', roles: 'S V O', ko: '우리는 고양이 두 마리를 키워요.' },
        ] },
      { title: 'a 일까 an 일까? 소리로 정해요', html: '<p>다음 낱말이 <b>모음 소리</b>(아·에·이·오·어)로 시작하면 <b>an</b>: an apple, an egg, an idea.</p><p>철자가 아니라 <b>소리</b>가 기준이에요. hour 는 h 가 소리 나지 않아 <b>an hour</b>, university 는 「유」로 시작해 <b>a university</b>.</p>',
        ex: [
          { en: 'This|is|an easy question.', roles: 'S V C', ko: '이건 쉬운 질문이에요.' },
          { en: 'I|have|an idea.', roles: 'S V O', ko: '나한테 생각이 하나 있어요.' },
          { en: 'The meeting|is|in an hour.', roles: 'S V M', ko: '회의는 한 시간 뒤예요.' },
        ] },
    ],
    summary: ['하나: this / that + is, 여럿: these / those + are.', '하나면 <b>a</b>, 여럿이면 끝에 <b>-s</b> (a 는 빼요).', '모음 <b>소리</b> 앞에는 an: an apple, an hour.'] },

  // ── B1 보스: 자기소개 ──
  { id: 'B1', ch: 1, boss: true, title: '회사 첫날 자기소개', minutes: 8,
    pages: [
      { title: '미션: 새 팀에서 나를 소개해요', html: '<p>오늘은 새 회사 첫날이에요. 팀장 Sarah 가 팀원들 앞에서 인사를 부탁해요.</p><p>이름 → 어디서 왔는지 → 무슨 일 → 지금 기분 → 질문에 대답, 순서로 3~5문장이면 충분해요. 챕터 1의 <b>am / is / are</b>, <b>not</b>, <b>this</b>, <b>a / an</b> 을 다 써요.</p>',
        ex: [
          { en: 'Hi, everyone.', ko: '안녕하세요, 여러분.', deck: false },
          { en: "I'm Jihoon.", ko: '저는 지훈이에요.' },
          { en: 'I|am|a new designer.', roles: 'S V C', ko: '저는 새로 온 디자이너예요.' },
          { en: 'I|am|a little nervous|today.', roles: 'S V C M', ko: '오늘은 조금 긴장돼요.' },
        ] },
      { title: '다른 사람이 나를 소개할 때', html: '<p>팀장이 나를 소개할 때는 <b>This is</b> + 이름을 써요. 「이쪽은 ~예요」라는 뜻이에요.</p>',
        ex: [
          { en: 'This|is|Jihoon.', roles: 'S V C', ko: '이쪽은 지훈 씨예요.' },
          { en: 'He|is|our new designer.', roles: 'S V C', ko: '우리 새 디자이너예요.' },
        ] },
    ],
    summary: ["이름: I'm ~. / 직업: I am a(n) ~.", '사람 소개: This is ~. He / She is ~.', '질문에는 짧게: Yes, I am. / No, I\'m not.'] },
);
PROBLEMS.push(
  // ── E5 I am ──
  { id: 'E5P1', lesson: 'E5', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ a student.', opts: ['am', 'is', 'are'], ans: 0, tags: ['be동사'], hints: ['주어가 I 예요', 'I 다음에는 am', 'I am a student.'], why: 'I 다음 be동사는 언제나 am 이에요.' },
  { id: 'E5P2', lesson: 'E5', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I am hungry.', opts: ['나는 배고파요.', '나는 피곤해요.', '나는 학생이에요.'], ans: 0, tags: ['듣기'], hints: ['마지막 낱말을 들어 보세요', 'hungry = 배고픈', '나는 배고파요.'], why: 'hungry 는 「배고픈」, tired 는 「피곤한」이에요.' },
  { id: 'E5P3', lesson: 'E5', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['I am tired.', '나는 피곤해요.'], ['I am from Korea.', '나는 한국에서 왔어요.'], ['I am at home.', '나는 집에 있어요.'], ['I am a student.', '나는 학생이에요.']], tags: ['be동사'], hints: ['마지막 덩어리가 뜻을 정해요', 'tired = 피곤한, at home = 집에', 'tired → 피곤, from Korea → 한국, at home → 집, student → 학생'] },
  { id: 'E5P4', lesson: 'E5', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '나는 피곤해요.', answer: ['I am tired.', "I'm tired."], cards: ['I', 'am', 'tired.'], roles: 'S V C', tags: ['문장 뼈대'], hints: ['파랑(주어)은 I', '빨강(동사)은 am', 'I am tired.'] },
  { id: 'E5P5', lesson: 'E5', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 한국에서 왔어요.', answer: ['I am from Korea.', "I'm from Korea."], cards: ['I', 'am', 'from', 'Korea.'], distractors: ['is'], tags: ['문장 뼈대'], hints: ['주어 → 동사 → 어디서', 'I am 다음에 from Korea', 'I am from Korea.'] },
  { id: 'E5P6', lesson: 'E5', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 학생이에요.', wrong: 'I is a student.', answer: ['I am a student.', "I'm a student."], tags: ['be동사', '오개념'], hints: ['동사를 보세요', 'I 다음은 am', 'I am a student.'], why: 'I 다음에는 is 가 아니라 am 이에요.' },
  { id: 'E5P7', lesson: 'E5', type: 'fix', prompt: '빠진 낱말을 넣어 문장을 다시 쓰세요.', ko: '나는 배고파요.', wrong: 'I hungry.', answer: ['I am hungry.', "I'm hungry."], tags: ['be동사', '오개념'], hints: ['동사(빨강)가 비었어요', '「~이에요」= am', 'I am hungry.'], why: '한국어 「배고파요」에는 동사가 숨어 있지만, 영어는 am 을 꼭 써야 해요.' },
  { id: 'E5P8', lesson: 'E5', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 집에 있어요.', answer: ['I am at home.', "I'm at home.", 'I am home.', "I'm home."], tags: ['문장 뼈대'], hints: ['나는 = I, 있다 = am', '집에 = at home', 'I am at home.'] },
  { id: 'E5P9', lesson: 'E5', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I'm from Korea.", ko: '나는 한국에서 왔어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', "I'm 은 「아임」", "I'm from Korea."] },

  // ── E6 are ──
  { id: 'E6P1', lesson: 'E6', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'We ___ friends.', opts: ['are', 'am', 'is'], ans: 0, tags: ['be동사'], hints: ['We 는 여럿이에요', 'we 다음은 are', 'We are friends.'], why: 'we(우리) 다음 be동사는 are 예요.' },
  { id: 'E6P2', lesson: 'E6', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'Mina and Tom ___ coworkers.', opts: ['are', 'is', 'am'], ans: 0, tags: ['be동사', '복수'], hints: ['사람이 몇 명이에요?', '둘이면 they 와 같아요', 'Mina and Tom are coworkers.'], why: '두 사람(Mina and Tom)은 they 와 같아서 are 예요.' },
  { id: 'E6P3', lesson: 'E6', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'They are in the office.', opts: ['그들은 사무실에 있어요.', '우리는 사무실에 있어요.', '그들은 집에 있어요.'], ans: 0, tags: ['듣기'], hints: ['첫 낱말이 They 인지 We 인지', 'office = 사무실', '그들은 사무실에 있어요.'] },
  { id: 'E6P4', lesson: 'E6', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '당신은 친절해요.', answer: ['You are kind.', "You're kind."], cards: ['You', 'are', 'kind.'], roles: 'S V C', tags: ['문장 뼈대'], hints: ['파랑(주어)은 You', '빨강(동사)은 are', 'You are kind.'] },
  { id: 'E6P5', lesson: 'E6', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '미나와 톰은 같은 팀이에요.', answer: ['Mina and Tom are on the same team.', 'Mina and Tom are in the same team.'], cards: ['Mina and Tom', 'are', 'on', 'the same team.'], distractors: ['is'], tags: ['문장 뼈대', '복수'], hints: ['주어는 「Mina and Tom」 한 덩어리', '두 사람 = they → are', 'Mina and Tom are on the same team.'] },
  { id: 'E6P6', lesson: 'E6', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '당신은 늦었어요.', wrong: 'You is late.', answer: ['You are late.', "You're late."], tags: ['be동사', '오개념'], hints: ['you 는 한 사람이어도 …', 'you 다음은 are', 'You are late.'], why: 'you 는 한 사람이어도 are 를 써요.' },
  { id: 'E6P7', lesson: 'E6', type: 'type', prompt: '영어로 써 보세요.', ko: '우리는 친구예요.', answer: ['We are friends.', "We're friends.", 'We are good friends.'], tags: ['문장 뼈대'], hints: ['우리 = We', 'We + are + friends', 'We are friends.'] },
  { id: 'E6P8', lesson: 'E6', type: 'type', prompt: '영어로 써 보세요.', ko: '그들은 사무실에 있어요.', answer: ['They are in the office.', "They're in the office.", 'They are at the office.', "They're at the office.", 'They are in the office now.', 'They are at the office now.'], tags: ['문장 뼈대'], hints: ['그들 = They', '사무실에 = in the office', 'They are in the office.'] },
  { id: 'E6P9', lesson: 'E6', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "We're on the same team.", ko: '우리는 같은 팀이에요.', tags: ['말하기'], hints: ["We're 는 「위어」 한 번에", 'SAME TEAM 을 세게', "We're on the same team."] },

  // ── E7 is ──
  { id: 'E7P1', lesson: 'E7', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'She ___ my sister.', opts: ['is', 'are', 'am'], ans: 0, tags: ['be동사'], hints: ['She 는 한 사람이에요', 'he / she / it 다음은 is', 'She is my sister.'], why: 'she(그녀) 다음 be동사는 is 예요.' },
  { id: 'E7P2', lesson: 'E7', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'My phone ___ on the desk.', opts: ['is', 'are', 'am'], ans: 0, tags: ['be동사'], hints: ['휴대폰은 몇 개예요?', '물건 하나 = it 과 같아요', 'My phone is on the desk.'], why: '물건 하나(my phone)는 it 과 같아서 is 예요.' },
  { id: 'E7P3', lesson: 'E7', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "It's very hot today.", opts: ['오늘 아주 더워요.', '오늘 아주 추워요.', '이건 아주 뜨거워요.'], ans: 0, tags: ['듣기'], hints: ['today 가 들렸나요?', 'hot = 더운', '오늘 아주 더워요.'], why: '날씨를 말할 때 It 은 「그것」이 아니라 그냥 자리를 채우는 주어예요.' },
  { id: 'E7P4', lesson: 'E7', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['He is a nurse.', '그는 간호사예요.'], ['She is my sister.', '그녀는 내 여동생이에요.'], ['Tom is in the meeting room.', '톰은 회의실에 있어요.'], ['The coffee is too sweet.', '커피가 너무 달아요.']], tags: ['be동사'], hints: ['주어부터 보세요', 'nurse = 간호사, sweet = 단', 'He → 간호사, She → 여동생, Tom → 회의실, coffee → 달아요'] },
  { id: 'E7P5', lesson: 'E7', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그는 간호사예요.', answer: ['He is a nurse.', "He's a nurse."], cards: ['He', 'is', 'a nurse.'], roles: 'S V C', tags: ['문장 뼈대'], hints: ['파랑(주어)은 He', '빨강(동사)은 is', 'He is a nurse.'] },
  { id: 'E7P6', lesson: 'E7', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '톰은 회의실에 있어요.', answer: ['Tom is in the meeting room.'], cards: ['Tom', 'is', 'in', 'the meeting room.'], distractors: ['are'], tags: ['문장 뼈대'], hints: ['Tom 은 한 사람', 'Tom is 다음에 in the meeting room', 'Tom is in the meeting room.'] },
  { id: 'E7P7', lesson: 'E7', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '커피가 너무 달아요.', wrong: 'The coffee are too sweet.', answer: ['The coffee is too sweet.', "The coffee's too sweet."], tags: ['be동사', '오개념'], hints: ['커피는 하나(it)예요', 'it 다음은 is', 'The coffee is too sweet.'], why: 'the coffee 는 it 과 같아서 is 예요.' },
  { id: 'E7P8', lesson: 'E7', type: 'type', prompt: '영어로 써 보세요.', ko: '그녀는 내 여동생이에요.', answer: ['She is my sister.', "She's my sister.", 'She is my little sister.', "She's my little sister.", 'She is my younger sister.', "She's my younger sister."], tags: ['문장 뼈대'], hints: ['그녀 = She', '내 여동생 = my sister', 'She is my sister.'] },
  { id: 'E7P9', lesson: 'E7', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'My phone|is|on the desk.', ko: '내 휴대폰은 책상 위에 있어요.', roles: 'S V M', tags: ['말하기'], hints: ['PHONE 과 DESK 를 세게', 'is on 은 「이존」처럼 이어서', 'My phone is on the desk.'] },

  // ── E8 부정·질문 ──
  { id: 'E8P1', lesson: 'E8', type: 'choice', prompt: '「그는 여기 없어요」가 되게 고르세요.', q: 'He ___ here.', opts: ["isn't", "aren't", "don't"], ans: 0, tags: ['부정문'], hints: ['He 다음 be동사는 is', 'is + not = ?', "He isn't here."], why: "he 다음은 is → 부정은 is not(isn't)." },
  { id: 'E8P2', lesson: 'E8', type: 'choice', prompt: '「준비됐어요?」라고 물을 때 맞는 문장은?', opts: ['Are you ready?', 'You are ready?', 'Do you ready?'], ans: 0, sayOpts: true, tags: ['의문문'], hints: ['be동사가 맨 앞으로 가요', 'are 를 you 앞으로', 'Are you ready?'], why: 'be동사 문장의 질문은 be동사를 맨 앞으로 옮겨요. Do 는 필요 없어요.' },
  { id: 'E8P3', lesson: 'E8', type: 'listen', prompt: '질문을 듣고 알맞은 대답을 고르세요.', say: 'Are you busy now?', opts: ["No, I'm not.", 'No, I am.', "Yes, I'm."], ans: 0, sayOpts: true, tags: ['의문문', '듣기'], hints: ['Are you …? → I am 으로 대답', '「아니요」는 No, I\'m not.', "No, I'm not."], why: "Are you …? 에는 Yes, I am. / No, I'm not. 으로 대답해요. Yes, I'm. 처럼 끝에서 줄이지 않아요." },
  { id: 'E8P4', lesson: 'E8', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 질문을 만드세요.', ko: '그녀가 당신 팀장이에요?', answer: ['Is she your manager?'], cards: ['Is', 'she', 'your manager?'], roles: 'Q S C', tags: ['의문문'], hints: ['질문은 be동사가 먼저', 'Is → she → your manager', 'Is she your manager?'] },
  { id: 'E8P5', lesson: 'E8', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '그들은 준비가 안 됐어요.', answer: ["They aren't ready.", 'They are not ready.', "They're not ready."], cards: ['They', 'are', 'not', 'ready.'], distractors: ["don't"], tags: ['부정문'], hints: ['be동사 문장의 부정은 not', 'They are 뒤에 not', 'They are not ready.'] },
  { id: 'E8P6', lesson: 'E8', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 바쁘지 않아요.', wrong: "I don't busy.", answer: ["I'm not busy.", 'I am not busy.'], tags: ['부정문', '오개념'], hints: ['busy 는 형용사 — be동사 문장이에요', 'I am + not', "I'm not busy."], why: "형용사(busy) 앞에는 be동사가 필요해요. 부정은 don't 가 아니라 am not." },
  { id: 'E8P7', lesson: 'E8', type: 'type', prompt: '영어로 써 보세요.', ko: '준비됐어요?', answer: ['Are you ready?', 'Are you ready now?', 'Are you all ready?'], tags: ['의문문'], hints: ['be동사를 맨 앞으로', 'Are + you + ready', 'Are you ready?'] },
  { id: 'E8P8', lesson: 'E8', type: 'type', prompt: '영어로 써 보세요.', ko: '그는 여기 없어요.', answer: ["He isn't here.", 'He is not here.', "He's not here.", "He isn't here now.", "He's not here now."], tags: ['부정문'], hints: ['그 = He, be동사 = is', 'is 뒤에 not', "He isn't here."] },
  { id: 'E8P9', lesson: 'E8', type: 'speak', prompt: '🔊 끝을 올려 ↗ 따라 말해 보세요.', say: 'Are you ready?', ko: '준비됐어요?', roles: 'Q S C', tags: ['말하기', '의문문'], hints: ['READY 를 세게', '끝을 올려요 ↗', 'Are you ready?'] },

  // ── E9 this/these, a/an ──
  { id: 'E9P1', lesson: 'E9', type: 'choice', prompt: '손에 든 가방 하나를 보여 줘요. 빈칸에 맞는 말은?', q: '___ is my bag.', opts: ['This', 'These', 'Those'], ans: 0, tags: ['this/these'], hints: ['가까이, 하나', '가까운 하나 = this', 'This is my bag.'], why: '가까이 있는 하나는 this. these·those 는 여럿이에요.' },
  { id: 'E9P2', lesson: 'E9', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I have ___ idea.', opts: ['an', 'a'], ans: 0, tags: ['a/an'], hints: ['idea 의 첫소리는?', '「아이」 — 모음 소리', 'I have an idea.'], why: 'idea 는 모음 소리 「아이」로 시작해서 an 이에요.' },
  { id: 'E9P3', lesson: 'E9', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['This is my bag.', '이건 내 가방이에요.'], ['That is our office.', '저게 우리 사무실이에요.'], ['These are my friends.', '이쪽은 내 친구들이에요.'], ['Those are my books.', '저것들은 내 책이에요.']], tags: ['this/these'], hints: ['this·these 는 가까이, that·those 는 멀리', 'these·those 는 여럿', 'This → 이건, That → 저게, These → 이쪽(여럿), Those → 저것들'] },
  { id: 'E9P4', lesson: 'E9', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '이쪽은 내 친구들이에요.', answer: ['These are my friends.'], cards: ['These', 'are', 'my friends.'], roles: 'S V C', tags: ['this/these'], hints: ['친구가 여럿 → These', '여럿이니까 are', 'These are my friends.'] },
  { id: 'E9P5', lesson: 'E9', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이건 쉬운 질문이에요.', answer: ['This is an easy question.'], cards: ['This', 'is', 'an', 'easy', 'question.'], distractors: ['a'], tags: ['a/an'], hints: ['This is 다음에 관사', 'easy 는 모음 소리 「이」로 시작 → an', 'This is an easy question.'] },
  { id: 'E9P6', lesson: 'E9', type: 'fill', prompt: '빈칸을 채우세요. (우리는 고양이 두 마리를 키워요.)', text: 'We have two ___.', blanks: [{ a: ['cats'], opt: ['cats', 'cat', 'a cat'] }], tags: ['명사 여럿'], hints: ['두 마리 = 여럿', '여럿이면 끝에 -s', 'cats'], why: '둘 이상이면 명사 끝에 -s: two cats.' },
  { id: 'E9P7', lesson: 'E9', type: 'fix', prompt: '틀린 곳 <b>두 군데</b>를 고쳐 문장을 다시 쓰세요.', ko: '저것들은 내 책이에요.', wrong: 'Those is my book.', answer: ['Those are my books.'], tags: ['this/these', '오개념'], hints: ['those 는 여럿이에요', '여럿 → are, books', 'Those are my books.'], why: 'those(저것들)는 여럿이라 are, 명사도 books 로 써요.' },
  { id: 'E9P8', lesson: 'E9', type: 'type', prompt: '영어로 써 보세요.', ko: '회의는 한 시간 뒤예요.', answer: ['The meeting is in an hour.', "The meeting's in an hour.", 'The meeting is in one hour.', 'The meeting starts in an hour.'], tags: ['a/an'], hints: ['회의 = the meeting', '한 시간 뒤 = in an hour (h 는 소리 안 나요)', 'The meeting is in an hour.'] },
  { id: 'E9P9', lesson: 'E9', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'This|is|an easy question.', ko: '이건 쉬운 질문이에요.', roles: 'S V C', tags: ['말하기'], hints: ['an easy 는 「어니지」처럼 이어서', 'EA-sy, QUES-tion 을 세게', 'This is an easy question.'] },

  // ── B1 보스 ──
  { id: 'B1P1', lesson: 'B1', boss: true, type: 'listen', prompt: '첫날 아침, 팀장 Sarah 가 팀원들에게 말해요. 무슨 말일까요?', say: 'Everyone, this is Jihoon. He is our new designer.', opts: ['여러분, 이쪽은 지훈 씨예요. 우리 새 디자이너예요.', '여러분, 지훈 씨는 오늘 안 와요.', '여러분, 이건 지훈 씨의 디자인이에요.'], ans: 0, tags: ['자기소개', '듣기'], hints: ['this is + 이름 = 이쪽은 ~예요', 'new designer = 새 디자이너', '이쪽은 지훈 씨예요.'] },
  { id: 'B1P2', lesson: 'B1', boss: true, type: 'order', prompt: '이제 내 차례! 이름을 말해요. 필요 없는 카드도 있어요.', ko: '안녕하세요, 저는 지훈이에요.', answer: ["Hi, I'm Jihoon.", 'Hi, I am Jihoon.', "Hello, I'm Jihoon.", 'Hello, I am Jihoon.', 'Hi, my name is Jihoon.'], cards: ['Hi,', 'I', 'am', 'Jihoon.'], distractors: ['is'], tags: ['자기소개', 'be동사'], hints: ['인사 → 주어 → 동사 → 이름', 'I 다음은 am', 'Hi, I am Jihoon.'] },
  { id: 'B1P3', lesson: 'B1', boss: true, type: 'type', prompt: '어디서 왔는지 말해요.', ko: '저는 부산에서 왔어요.', answer: ['I am from Busan.', "I'm from Busan.", 'I come from Busan.', "I'm originally from Busan."], tags: ['자기소개'], hints: ['~에서 왔다 = am from', 'I am from + 도시', 'I am from Busan.'] },
  { id: 'B1P4', lesson: 'B1', boss: true, type: 'fill', prompt: '무슨 일을 하는지 말해요. 빈칸을 채우세요.', text: "I'm ___ interior designer.", blanks: [{ a: ['an'], opt: ['a', 'an'] }], tags: ['a/an', '자기소개'], hints: ['interior 의 첫소리는?', '「인」 — 모음 소리예요', "I'm an interior designer."], why: 'interior 는 모음 소리 「인」으로 시작해서 an 이에요.' },
  { id: 'B1P5', lesson: 'B1', boss: true, type: 'type', prompt: '지금 기분을 솔직하게 말해요.', ko: '오늘은 조금 긴장돼요.', answer: ['I am a little nervous today.', "I'm a little nervous today.", "I'm a bit nervous today.", 'I am a bit nervous today.', "Today I'm a little nervous.", "I'm a little nervous.", "I'm a little bit nervous today.", 'I feel a little nervous today.', 'I feel a bit nervous today.'], tags: ['자기소개', '형용사'], hints: ['긴장한 = nervous', 'I am + a little + nervous + today', 'I am a little nervous today.'] },
  { id: 'B1P6', lesson: 'B1', boss: true, type: 'listen', prompt: '동료 Tom 이 웃으며 물어요. 알맞은 대답을 고르세요.', say: 'Are you new to Seoul?', opts: ["Yes, I am. I'm from Busan.", "No, I'm. I'm from Busan.", "Yes, I'm not."], ans: 0, sayOpts: true, tags: ['의문문', '듣기'], hints: ['서울이 처음이냐고 물어요', '부산에서 왔으니 「네」', "Yes, I am. I'm from Busan."], why: "Are you …? 에 「네」는 Yes, I am. 끝에서 I'm 으로 줄이지 않아요." },
  { id: 'B1P7', lesson: 'B1', boss: true, type: 'fix', prompt: 'Tom 이 팀원들을 소개해요. 틀린 곳을 고쳐 주세요.', ko: '이쪽은 미나와 수진 씨예요. 우리 팀 개발자들이에요.', wrong: 'This is Mina and Sujin. They is our developers.', answer: ['These are Mina and Sujin. They are our developers.', "These are Mina and Sujin. They're our developers.", 'This is Mina and Sujin. They are our developers.', "This is Mina and Sujin. They're our developers."], tags: ['be동사', 'this/these'], hints: ['두 번째 문장의 주어 They 를 보세요', 'They 다음은 are', 'They are our developers.'], why: 'They(그들) 다음은 are. 두 사람을 한꺼번에 가리킬 때는 These are 가 더 자연스러워요(This is 도 말에서는 써요).' },
  { id: 'B1P8', lesson: 'B1', boss: true, type: 'speak', prompt: '🔊 마지막 인사! 따라 말해 보세요.', say: "I'm happy to be here. Nice to meet you all.", ko: '여기 오게 돼서 기뻐요. 모두 만나서 반가워요.', tags: ['말하기', '자기소개'], hints: ['HAPpy, HERE 를 세게', 'meet you 는 「미츄」처럼 이어서', "I'm happy to be here. Nice to meet you all."] },
);
