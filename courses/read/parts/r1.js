// courses/read/parts/r1.js — 읽기 챕터 1 「끊어 읽기」 (레슨 R1~R4 + 보스 RB1). 스키마는 courses/basic/content.js 맨 위 주석
{
const POOL = `<div class="tip">🏊 <b>Welcome to Green Hill Pool!</b><br>
1. Please take a shower before you enter the pool.<br>
2. Everyone in the pool must wear a swim cap.<br>
3. Children under 10 must swim with an adult.<br>
4. Do not run on the wet floor around the pool.<br>
5. Food and drinks are not allowed in the pool area.<br>
6. Lockers are free, but you need to bring your own lock.<br>
<i>The pool is closed for cleaning every Monday from 12 to 2 p.m.</i></div>`;

CHAPTERS.push(
  { n: 1, title: '끊어 읽기', icon: '✂️', desc: '의미 덩어리로 끊고, 앞에서부터 바로 이해해요' },
);
LESSONS.push(
  { id: 'R1', ch: 1, n: 1, title: '의미 덩어리로 끊기', minutes: 6,
    terms: { '의미 덩어리': '함께 붙어서 하나의 뜻을 만드는 낱말 묶음. 예: in the park(공원에서)', '전치사구': 'in·at·on·with 같은 말 + 명사. 「어디서·언제·누구와」를 나타내는 한 덩어리예요.' },
    pages: [
      { title: '낱말 말고 덩어리로 읽어요', html: '<p>영어를 낱말 하나씩 읽으면 느리고 뜻도 잘 안 잡혀요. 대신 <b>뜻이 붙어 다니는 묶음(의미 덩어리)</b>으로 끊어 읽어요.</p><p>이 코스에서는 덩어리 사이를 띄우고 색으로 보여 줘요. 가장 기본 덩어리는 <b>누가 / 한다 / 무엇을 / 어디서·언제</b>예요.</p>',
        ex: [{ en: 'My sister|works|at a bank.', roles: 'S V M', ko: '우리 언니는 은행에서 일해요.' }, { en: 'We|had|lunch|in the park.', roles: 'S V O M', ko: '우리는 공원에서 점심을 먹었어요.' }, { en: 'The kids|are playing|in the yard.', roles: 'S V M', ko: '아이들이 마당에서 놀고 있어요.' }] },
      { title: '동사 덩어리: 조동사·not 까지 한 묶음', html: '<p><b>can\'t find</b>, <b>will call</b>, <b>have lived</b> 처럼 동사 앞에 붙는 말(조동사·not·have)은 동사와 <b>한 덩어리</b>예요. 중간에서 끊지 않아요.</p>',
        ex: [{ en: "I|can't find|my keys.", roles: 'S V O', ko: '열쇠를 못 찾겠어요.' }, { en: 'She|will call|you|tomorrow.', roles: 'S V O M', ko: '그녀가 내일 전화할 거예요.' }, { en: 'They|have lived|here|for ten years.', roles: 'S V M M', ko: '그들은 여기서 10년째 살고 있어요.' }] },
      { title: '전치사구는 통째로 하나', html: '<p><b>at the station</b>(역에서), <b>after work</b>(퇴근 후에), <b>with his brother</b>(남동생과) 처럼 <b>전치사 + 명사</b>는 한 덩어리예요. 문장 끝에 여러 개가 줄줄이 붙어도 하나씩 끊으면 쉬워요.</p>',
        ex: [{ en: 'I|met|Jisoo|at the station|after work.', roles: 'S V O M M', ko: '퇴근 후에 역에서 지수를 만났어요.' }, { en: 'The cups|are|on the top shelf.', roles: 'S V M', ko: '컵은 맨 위 선반에 있어요.' }, { en: 'He|goes|to the gym|with his brother.', roles: 'S V M M', ko: '그는 남동생과 함께 헬스장에 가요.' }],
        tip: '처음엔 연필로 / 를 그으며 읽어 보세요. 익숙해지면 머릿속에서 저절로 끊겨요.' },
    ],
    summary: ['낱말 하나씩이 아니라 <b>의미 덩어리</b>로 끊어 읽어요.', '조동사·not 은 동사와 <b>한 덩어리</b>: can\'t find, will call.', '<b>전치사 + 명사</b>(at the station)는 통째로 하나.'] },
  { id: 'R2', ch: 1, n: 2, title: '긴 주어 한 번에 잡기', minutes: 6,
    terms: { '주어 덩어리': '문장의 「누가·무엇이」에 해당하는 묶음. 길어도 동사 앞까지가 전부 주어예요.' },
    pages: [
      { title: '동사를 먼저 찾으면 주어가 보여요', html: '<p>주어가 길면 어디까지가 주어인지 헷갈려요. 이럴 땐 <b>동사(빨강)를 먼저</b> 찾아요. 동사 <b>앞까지 전부</b>가 주어 덩어리예요.</p>',
        ex: [{ en: 'The woman in the blue coat|is|my teacher.', roles: 'S V C', ko: '파란 코트를 입은 여자분이 우리 선생님이에요.' }, { en: 'The coffee shop near my office|opens|at seven.', roles: 'S V M', ko: '사무실 근처 커피숍은 7시에 문을 열어요.' }, { en: 'All the windows on the second floor|were|open.', roles: 'S V C', ko: '2층 창문이 전부 열려 있었어요.' }] },
      { title: '-ing 로 시작하는 주어', html: '<p><b>Walking ...</b>, <b>Learning ...</b> 처럼 동사에 -ing 를 붙여 시작하면 「~하는 것은」이라는 주어예요. 역시 진짜 동사(is, takes)가 나올 때까지 한 덩어리로 읽어요.</p>',
        ex: [{ en: 'Walking in the morning|is|good|for your health.', roles: 'S V C M', ko: '아침에 걷는 것은 건강에 좋아요.' }, { en: 'Learning a new language|takes|time.', roles: 'S V O', ko: '새 언어를 배우는 데는 시간이 걸려요.' }, { en: 'Finding a parking space here|is|hard.', roles: 'S V C', ko: '여기서 주차할 곳을 찾기는 어려워요.' }] },
      { title: '주어의 중심 낱말을 보세요', html: '<p>긴 주어 안에서 <b>맨 앞 명사</b>가 중심이에요. <b>One</b> of my friends 는 「하나」라서 동사가 lives, The <b>books</b> on my desk 는 「여럿」이라서 are 예요.</p>',
        ex: [{ en: 'One of my friends|lives|in Canada.', roles: 'S V M', ko: '내 친구 중 한 명은 캐나다에 살아요.' }, { en: 'The books on my desk|are|from the library.', roles: 'S V M', ko: '내 책상 위 책들은 도서관에서 빌린 거예요.' }, { en: 'The price of these shoes|is|too high.', roles: 'S V C', ko: '이 신발 가격은 너무 비싸요.' }] },
    ],
    summary: ['긴 주어는 <b>동사를 먼저 찾고</b> 그 앞까지 한 덩어리로.', '<b>-ing</b> 로 시작하는 주어 = 「~하는 것은」.', '동사 모양은 주어의 <b>중심 낱말</b>(맨 앞 명사)에 맞춰요.'] },
  { id: 'R3', ch: 1, n: 3, title: '관계사·접속사 앞에서 끊기', minutes: 7,
    terms: { '관계사': 'who·that·which 처럼 앞에 나온 명사를 뒤에서 설명해 주는 연결어', '접속사': 'and·but·because·when·if 처럼 문장과 문장을 잇는 말' },
    pages: [
      { title: 'who·that·which 앞에서 한 번 끊기', html: '<p>명사 뒤에 <b>who / that / which</b> 가 나오면 거기서 끊어요. 뒤는 앞 명사에 대한 <b>설명</b>이에요. 「친구가 있어요 / (그 친구는) 제주에 살아요」처럼 앞에서부터 차례로 이해해요.</p>',
        ex: [{ en: 'I|have|a friend|who|lives|in Jeju.', roles: 'S V O J V M', ko: '제주에 사는 친구가 있어요.' }, { en: 'This|is|the bag|that|I|bought|online.', roles: 'S V C J S V M', ko: '이게 내가 온라인으로 산 가방이에요.' }, { en: 'The movie|that we watched|was|too long.', roles: 'S M V C', ko: '우리가 본 영화는 너무 길었어요.', note: '설명 덩어리(that we watched)가 주어 안에 끼어 있어요. 동사 was 까지 가야 문장이 이어져요.' }] },
      { title: '접속사 앞에서 끊기', html: '<p><b>because</b>(왜냐하면), <b>when</b>(~할 때), <b>but</b>(그런데), <b>if</b>(~하면) 앞에서 끊으면 문장이 두 토막으로 깔끔하게 나뉘어요. 각 토막에 다시 누가/한다가 있어요.</p>',
        ex: [{ en: 'I|stayed|home|because|it|was raining.', roles: 'S V M J S V', ko: '비가 와서 집에 있었어요.' }, { en: 'Call|me|when|you|get|home.', roles: 'V O J S V M', ko: '집에 도착하면 전화해.' }, { en: 'The shop|was|small|but|the food|was|great.', roles: 'S V C J S V C', ko: '가게는 작았지만 음식은 훌륭했어요.' }, { en: 'If|you|are|tired,|take|a break.', roles: 'J S V C V O', ko: '피곤하면 좀 쉬어요.' }],
        tip: '노란색(연결어)이 보이면 「여기서 숨 한 번」이라고 생각하세요.' },
    ],
    summary: ['<b>who / that / which</b> 앞에서 끊고, 뒤는 앞 명사의 설명으로 읽어요.', '<b>because · when · but · if</b> 앞에서 끊으면 두 토막이 돼요.', '토막마다 다시 <b>누가 / 한다</b>를 찾아요.'] },
  { id: 'R4', ch: 1, n: 4, title: '앞에서부터 바로 이해하기 (직독직해)', minutes: 7,
    terms: { '직독직해': '영어 순서 그대로, 앞에서부터 덩어리마다 바로 뜻을 붙이며 읽는 방법' },
    pages: [
      { title: '거꾸로 해석하지 않기', html: '<p>학교에서는 문장 끝에서 거꾸로 올라오며 해석하곤 했죠. 읽기가 빨라지려면 <b>덩어리가 나오는 순서대로</b> 뜻을 붙여요.</p><table><tr><td>I</td><td>went</td><td>to the market</td><td>to buy some apples.</td></tr><tr><td>나는</td><td>갔다</td><td>시장에</td><td>사과를 좀 사려고</td></tr></table><p>한국어로는 조금 어색해도 괜찮아요. 뜻이 잡히면 성공이에요.</p>',
        ex: [{ en: 'I|went|to the market|to buy some apples.', roles: 'S V M M', ko: '사과를 좀 사려고 시장에 갔어요.' }, { en: 'She|left|the office|early|to catch the last train.', roles: 'S V O M M', ko: '그녀는 막차를 타려고 일찍 퇴근했어요.', note: '<b>to + 동사</b>가 뒤에 붙으면 「~하려고」(목적)인 경우가 많아요.' }] },
      { title: '길어져도 덩어리마다 한 번씩', html: '<p>문장이 길어도 방법은 같아요. <b>끊고 → 뜻 붙이고 → 다음 덩어리</b>. 앞 덩어리를 다시 보러 돌아가지 않는 게 핵심이에요.</p>',
        ex: [{ en: 'The man|at the front desk|gave|me|a map|of the city.', roles: 'S M V O O M', ko: '안내 데스크의 남자가 나에게 도시 지도를 줬어요.' }, { en: 'When|I|opened|the door,|the cat|ran|outside.', roles: 'J S V O S V M', ko: '내가 문을 열자 고양이가 밖으로 뛰어나갔어요.' }, { en: 'Please send|me|the file|by Friday.', roles: 'V O O M', ko: '금요일까지 그 파일을 보내 주세요.' }],
        tip: '🔊 를 눌러 원어민 속도로 들으면서 덩어리마다 뜻을 떠올려 보세요. 소리를 따라가면 거꾸로 해석할 틈이 없어요.' },
    ],
    summary: ['덩어리가 나오는 <b>순서대로</b> 뜻을 붙여요.', '<b>to + 동사</b>는 「~하려고」로 이어 읽어요.', '끊고 → 뜻 붙이고 → <b>돌아가지 않고</b> 다음으로.'] },
  { id: 'RB1', ch: 1, boss: true, title: '수영장 안내문 읽고 행동하기', minutes: 7,
    pages: [
      { title: '상황: 처음 가는 수영장', html: '<p>여행 중에 동네 수영장에 갔어요. 입구에 영어 안내문이 붙어 있어요. <b>덩어리로 끊어 읽으며</b> 무엇을 해야 하는지 알아내 봐요.</p>' + POOL },
      { title: '미리 끊어 보기', html: '<p>안내문 문장을 덩어리로 나눠 봤어요. 주어가 길거나(Everyone in the pool), 연결어(before, but)가 있는 곳을 눈여겨보세요.</p>',
        ex: [{ en: 'Please take|a shower|before|you|enter|the pool.', roles: 'V O J S V O', ko: '수영장에 들어가기 전에 샤워해 주세요.' }, { en: 'Everyone in the pool|must wear|a swim cap.', roles: 'S V O', ko: '수영장 안의 모든 사람은 수모를 써야 해요.' }, { en: 'Children under 10|must swim|with an adult.', roles: 'S V M', ko: '10살 미만 어린이는 어른과 함께 수영해야 해요.' }, { en: 'Lockers|are|free,|but|you|need to bring|your own lock.', roles: 'S V C J S V O', ko: '사물함은 무료지만 자물쇠는 직접 가져와야 해요.' }] },
    ],
    summary: ['안내문도 <b>덩어리로 끊으면</b> 할 일이 보여요.', '<b>must</b> = 꼭 해야 해요, <b>Do not</b> = 하지 마세요, <b>not allowed</b> = 허용 안 돼요.', '연결어(<b>before, but</b>) 앞에서 끊어 읽어요.'] },
);
PROBLEMS.push(
  // R1 의미 덩어리
  { id: 'R1P1', lesson: 'R1', type: 'choice', prompt: '의미 덩어리로 바르게 끊은 것을 고르세요.', opts: ['My sister / works / at a bank.', 'My / sister works at / a bank.', 'My sister works / at / a / bank.'], ans: 0, tags: ['끊어 읽기'], hints: ['누가 / 한다 / 어디서 로 나눠 보세요', 'at a bank 는 한 덩어리예요', 'My sister / works / at a bank.'], why: '누가(My sister) / 한다(works) / 어디서(at a bank) — 전치사 + 명사는 한 덩어리예요.' },
  { id: 'R1P2', lesson: 'R1', type: 'choice', prompt: '「어디서」에 해당하는 덩어리를 고르세요.', q: 'The kids|are playing|in the yard.', qroles: 'S V M', opts: ['in the yard', 'are playing', 'The kids'], ans: 0, tags: ['끊어 읽기', '전치사구'], hints: ['회색 덩어리를 보세요', 'in + 장소', 'in the yard'], why: 'in the yard(마당에서)가 장소를 말하는 덩어리예요.' },
  { id: 'R1P3', lesson: 'R1', type: 'match', prompt: '덩어리와 뜻을 짝 지으세요.', pairs: [['at the station', '역에서'], ['after work', '퇴근 후에'], ['on the top shelf', '맨 위 선반에'], ['with his brother', '남동생과 함께']], tags: ['전치사구'], hints: ['at = 그 지점에서', 'after = ~ 후에, with = ~와 함께', 'on the top shelf = 맨 위 선반에'] },
  { id: 'R1P4', lesson: 'R1', type: 'build', prompt: '색 슬롯에 맞게 덩어리 카드를 놓으세요.', ko: '열쇠를 못 찾겠어요.', answer: ["I can't find my keys.", 'I cannot find my keys.'], cards: ['I', "can't find", 'my keys.'], roles: 'S V O', tags: ['동사 덩어리'], hints: ['파랑(누가) = I', "빨강(한다) = can't find 한 덩어리", "I can't find my keys."] },
  { id: 'R1P5', lesson: 'R1', type: 'order', prompt: '덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '우리는 공원에서 점심을 먹었어요.', answer: ['We had lunch in the park.'], cards: ['We', 'had', 'lunch', 'in the park.'], distractors: ['have'], tags: ['끊어 읽기'], hints: ['누가 → 한다 → 무엇을 → 어디서', '지난 일이라 had', 'We had lunch in the park.'] },
  { id: 'R1P6', lesson: 'R1', type: 'order', prompt: '덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '퇴근 후에 역에서 지수를 만났어요.', answer: ['I met Jisoo at the station after work.', 'After work I met Jisoo at the station.', 'I met Jisoo after work at the station.'], cards: ['I', 'met', 'Jisoo', 'at the station', 'after work.'], distractors: ['meet'], tags: ['전치사구'], hints: ['어디서 → 언제 순서가 자연스러워요', 'I met Jisoo 다음에 at the station', 'I met Jisoo at the station after work.'] },
  { id: 'R1P7', lesson: 'R1', type: 'fill', prompt: '동사 덩어리를 완성하세요.', text: 'She ___ call you tomorrow.', blanks: [{ a: ['will'], opt: ['will', 'is', 'does'] }], tags: ['동사 덩어리'], hints: ['tomorrow = 내일', '앞으로의 일은 will + 동사', 'will'], why: 'will call 이 한 동사 덩어리예요. 「전화할 거예요」.' },
  { id: 'R1P8', lesson: 'R1', type: 'type', prompt: '영어로 써 보세요. 덩어리 순서(누가 → 한다 → 어디로 → 누구와)를 떠올려요.', ko: '그는 남동생과 함께 헬스장에 가요.', answer: ['He goes to the gym with his brother.', 'He goes to the gym with his younger brother.', 'He goes to the gym with his little brother.', 'He goes to the gym with his brother every day.'], tags: ['전치사구'], hints: ['He goes 로 시작해요', 'to the gym / with his brother', 'He goes to the gym with his brother.'] },
  { id: 'R1P9', lesson: 'R1', type: 'speak', prompt: '🔊 덩어리마다 살짝 쉬면서 따라 말해 보세요.', say: 'The kids are playing in the yard.', ko: '아이들이 마당에서 놀고 있어요.', tags: ['말하기'], hints: ['The kids / are playing / in the yard', '덩어리 사이에서 짧게 쉬어요', 'The kids are playing in the yard.'] },

  // R2 긴 주어
  { id: 'R2P1', lesson: 'R2', type: 'choice', prompt: '이 문장의 주어 덩어리는 어디까지일까요?', q: 'The coffee shop near my office opens at seven.', opts: ['The coffee shop near my office', 'The coffee shop', 'my office opens'], ans: 0, tags: ['긴 주어'], hints: ['동사를 먼저 찾아요', '동사는 opens', '동사 앞까지 = The coffee shop near my office'], why: '동사 opens 앞까지 전부가 주어예요. near my office 는 coffee shop 을 꾸며요.' },
  { id: 'R2P2', lesson: 'R2', type: 'choice', prompt: '빈칸에 맞는 동사를 고르세요.', q: 'One of my friends ___ in Canada.', opts: ['lives', 'live'], ans: 0, tags: ['긴 주어', '주어-동사 맞추기'], hints: ['주어의 중심 낱말은?', 'One(하나)이 중심이에요', 'lives'], why: '중심 낱말이 One(한 명)이라 단수 → lives.' },
  { id: 'R2P3', lesson: 'R2', type: 'choice', prompt: '이 문장의 진짜 동사를 고르세요.', q: 'Walking in the morning is good for your health.', opts: ['is', 'Walking', 'good'], ans: 0, tags: ['긴 주어', '-ing 주어'], hints: ['Walking 은 「걷는 것」이라는 주어예요', '주어 다음에 오는 「이다」', 'is'], why: 'Walking in the morning(아침에 걷는 것)이 주어, is 가 동사예요.' },
  { id: 'R2P4', lesson: 'R2', type: 'build', prompt: '색 슬롯에 맞게 덩어리 카드를 놓으세요.', ko: '사무실 근처 커피숍은 7시에 문을 열어요.', answer: ['The coffee shop near my office opens at seven.', 'The coffee shop near my office opens at 7.'], cards: ['The coffee shop near my office', 'opens', 'at seven.'], roles: 'S V M', tags: ['긴 주어'], hints: ['긴 주어가 파랑 한 칸이에요', '빨강 = opens', 'The coffee shop near my office opens at seven.'] },
  { id: 'R2P5', lesson: 'R2', type: 'order', prompt: '덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이 신발 가격은 너무 비싸요.', answer: ['The price of these shoes is too high.'], cards: ['The price', 'of these shoes', 'is', 'too high.'], distractors: ['are'], tags: ['긴 주어', '주어-동사 맞추기'], hints: ['중심 낱말은 price(가격 하나)', '그래서 동사는 is', 'The price of these shoes is too high.'] },
  { id: 'R2P6', lesson: 'R2', type: 'order', prompt: '덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '아침에 걷는 것은 건강에 좋아요.', answer: ['Walking in the morning is good for your health.'], cards: ['Walking', 'in the morning', 'is', 'good', 'for your health.'], distractors: ['Walk'], tags: ['-ing 주어'], hints: ['「걷는 것은」 = Walking', 'Walking in the morning / is / good', 'Walking in the morning is good for your health.'] },
  { id: 'R2P7', lesson: 'R2', type: 'fill', prompt: '빈칸에 알맞은 말을 고르세요.', text: 'The books on my desk ___ from the library.', blanks: [{ a: ['are'], opt: ['are', 'is'] }], tags: ['주어-동사 맞추기'], hints: ['desk 바로 앞에 속지 마세요', '중심 낱말은 books(여럿)', 'are'], why: '주어의 중심은 books(여럿)라서 are. on my desk 는 꾸밈말이에요.' },
  { id: 'R2P8', lesson: 'R2', type: 'type', prompt: '영어로 써 보세요. -ing 주어로 시작해요.', ko: '새 언어를 배우는 데는 시간이 걸려요.', answer: ['Learning a new language takes time.', 'Learning a new language takes a lot of time.', 'It takes time to learn a new language.', 'Learning a new language takes a long time.'], tags: ['-ing 주어'], hints: ['배우는 것 = Learning', 'Learning a new language / takes / time', 'Learning a new language takes time.'] },
  { id: 'R2P9', lesson: 'R2', type: 'speak', prompt: '🔊 주어 덩어리를 한 숨에 말해 보세요.', say: 'One of my friends lives in Canada.', ko: '내 친구 중 한 명은 캐나다에 살아요.', tags: ['말하기'], hints: ['One of my friends / lives / in Canada', 'lives 의 s 소리를 살려요', 'One of my friends lives in Canada.'] },

  // R3 관계사·접속사
  { id: 'R3P1', lesson: 'R3', type: 'choice', prompt: '가장 자연스럽게 끊은 것을 고르세요.', opts: ['I have a friend / who lives in Jeju.', 'I have / a friend who / lives in Jeju.', 'I have a / friend who lives / in Jeju.'], ans: 0, tags: ['관계사'], hints: ['who 가 어디에 있나요?', 'who 앞에서 끊어요', 'I have a friend / who lives in Jeju.'], why: 'who 앞에서 끊으면 「친구가 있어요 / 제주에 사는」으로 바로 이해돼요.' },
  { id: 'R3P2', lesson: 'R3', type: 'choice', prompt: 'because 뒤 덩어리는 무엇을 말해 줄까요?', q: 'I stayed home|because it was raining.', opts: ['이유 (왜)', '시간 (언제)', '장소 (어디서)'], ans: 0, tags: ['접속사'], hints: ['because = 왜냐하면', '비가 와서 → 집에 있었다', '이유 (왜)'], why: 'because 는 이유를 이어 줘요. 「비가 와서」.' },
  { id: 'R3P3', lesson: 'R3', type: 'match', prompt: '연결어로 시작하는 덩어리와 뜻을 짝 지으세요.', pairs: [['when you get home', '집에 도착하면'], ['because it was raining', '비가 와서'], ['who lives in Jeju', '제주에 사는'], ['that I bought online', '내가 온라인으로 산']], tags: ['관계사', '접속사'], hints: ['when = ~할 때', 'who / that 은 앞 명사를 설명', 'that I bought online = 내가 온라인으로 산'] },
  { id: 'R3P4', lesson: 'R3', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓으세요.', ko: '집에 도착하면 전화해.', answer: ['Call me when you get home.', 'When you get home, call me.'], cards: ['Call', 'me', 'when', 'you', 'get', 'home.'], roles: 'V O J S V M', tags: ['접속사'], hints: ['명령문이라 동사 Call 로 시작', '노랑(연결어) = when', 'Call me when you get home.'] },
  { id: 'R3P5', lesson: 'R3', type: 'order', prompt: '덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '우리가 본 영화는 너무 길었어요.', answer: ['The movie that we watched was too long.', 'The movie we watched was too long.', 'The movie which we watched was too long.'], cards: ['The movie', 'that we watched', 'was', 'too long.'], distractors: ['were'], tags: ['관계사', '긴 주어'], hints: ['주어 = The movie that we watched', '중심 낱말 movie 는 하나 → was', 'The movie that we watched was too long.'] },
  { id: 'R3P6', lesson: 'R3', type: 'order', prompt: '덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '가게는 작았지만 음식은 훌륭했어요.', answer: ['The shop was small but the food was great.'], cards: ['The shop was small', 'but', 'the food', 'was great.'], distractors: ['because'], tags: ['접속사'], hints: ['「~지만」 = but', '앞 토막 / but / 뒤 토막', 'The shop was small but the food was great.'] },
  { id: 'R3P7', lesson: 'R3', type: 'fill', prompt: '빈칸에 알맞은 연결어를 고르세요.', text: 'I have a friend ___ lives in Jeju.', blanks: [{ a: ['who', 'that'], opt: ['who', 'which', 'where'] }], tags: ['관계사'], hints: ['앞 명사는 사람(friend)', '사람을 설명할 때는 who', 'who'], why: '앞 명사가 사람이면 who(또는 that). which 는 사물, where 는 장소예요.' },
  { id: 'R3P8', lesson: 'R3', type: 'type', prompt: '영어로 써 보세요.', ko: '피곤하면 좀 쉬어요.', answer: ['If you are tired, take a break.', 'Take a break if you are tired.', 'If you are tired, take a rest.', 'Take a rest if you are tired.', 'If you are tired, get some rest.'], tags: ['접속사'], hints: ['「~하면」 = If', 'If you are tired, / take a break', 'If you are tired, take a break.'] },
  { id: 'R3P9', lesson: 'R3', type: 'dictation', prompt: '🔊 듣고 그대로 쓰세요. that 앞에서 끊어 들어 보세요.', say: 'This is the bag that I bought online.', tags: ['받아쓰기', '관계사'], hints: ['This is the bag / that I bought online', 'bought = buy 의 과거', 'This is the bag that I bought online.'] },

  // R4 직독직해
  { id: 'R4P1', lesson: 'R4', type: 'choice', prompt: '앞에서부터 바로 이해한 것으로 가장 알맞은 것을 고르세요.', q: 'I|went|to the market|to buy some apples.', qroles: 'S V M M', opts: ['나는 / 갔다 / 시장에 / 사과를 좀 사려고', '사과를 사려고 시장에 가는 나', '시장에 사과가 있어서 나는 갔다'], ans: 0, tags: ['직독직해'], hints: ['덩어리 순서 그대로 뜻을 붙여요', 'to buy = 사려고', '나는 / 갔다 / 시장에 / 사과를 좀 사려고'], why: '영어 순서 그대로: 나는 → 갔다 → 시장에 → 사과를 좀 사려고.' },
  { id: 'R4P2', lesson: 'R4', type: 'choice', prompt: '마지막 덩어리는 어떤 뜻으로 이어질까요?', q: 'She|left|the office|early|to catch the last train.', qroles: 'S V O M M', opts: ['막차를 타려고', '막차를 타서', '막차를 탄 뒤에'], ans: 0, tags: ['직독직해', 'to + 동사'], hints: ['to + 동사', '목적(~하려고)', '막차를 타려고'], why: 'to catch 는 「잡으려고」(목적). 일찍 나온 이유예요.' },
  { id: 'R4P3', lesson: 'R4', type: 'match', prompt: '한 문장을 덩어리로 끊었어요. 덩어리와 뜻을 짝 지으세요.', pairs: [['The man at the front desk', '안내 데스크의 남자가'], ['gave me', '나에게 줬다'], ['a map of the city', '도시 지도를'], ['with a smile', '웃으며']], tags: ['직독직해'], hints: ['앞에서부터 순서대로', 'gave me = 나에게 줬다', 'a map of the city = 도시 지도를'] },
  { id: 'R4P4', lesson: 'R4', type: 'order', prompt: '덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '내가 문을 열자 고양이가 밖으로 뛰어나갔어요.', answer: ['When I opened the door, the cat ran outside.', 'The cat ran outside when I opened the door.'], cards: ['When I opened the door,', 'the cat', 'ran', 'outside.'], distractors: ['run'], tags: ['직독직해', '접속사'], hints: ['When 토막이 먼저', '지난 일이라 ran', 'When I opened the door, the cat ran outside.'] },
  { id: 'R4P5', lesson: 'R4', type: 'order', prompt: '덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '금요일까지 그 파일을 저에게 보내 주세요.', answer: ['Please send me the file by Friday.', 'Please send the file to me by Friday.'], cards: ['Please send', 'me', 'the file', 'by Friday.'], distractors: ['until Friday.'], tags: ['직독직해'], hints: ['「~까지 (마감)」은 by', 'Please send / me / the file', 'Please send me the file by Friday.'] },
  { id: 'R4P6', lesson: 'R4', type: 'fill', prompt: '빈칸에 알맞은 말을 고르세요.', text: 'She left the office early ___ catch the last train.', blanks: [{ a: ['to'], opt: ['to', 'for', 'and'] }], tags: ['to + 동사'], hints: ['「~하려고」', 'to + 동사원형', 'to'], why: '목적 「~하려고」는 to + 동사원형: to catch.' },
  { id: 'R4P7', lesson: 'R4', type: 'type', prompt: '영어로 써 보세요. 영어 순서(나는 → 갔다 → 시장에 → 사려고)로 생각해요.', ko: '사과를 좀 사려고 시장에 갔어요.', answer: ['I went to the market to buy some apples.', 'I went to the market to buy apples.', 'I went to the market to get some apples.', 'I went to the market to get apples.'], tags: ['직독직해', 'to + 동사'], hints: ['I went to the market', '+ to buy some apples', 'I went to the market to buy some apples.'] },
  { id: 'R4P8', lesson: 'R4', type: 'dictation', prompt: '🔊 듣고 그대로 쓰세요. 덩어리마다 뜻을 떠올리며 들어요.', say: 'The man at the front desk gave me a map of the city.', tags: ['받아쓰기', '직독직해'], hints: ['The man at the front desk / gave me', 'a map / of the city', 'The man at the front desk gave me a map of the city.'] },
  { id: 'R4P9', lesson: 'R4', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Please send me the file by Friday.', ko: '금요일까지 그 파일을 보내 주세요.', tags: ['말하기'], hints: ['Please send me / the file / by Friday', 'Friday 의 F 는 윗니로 아랫입술을 살짝', 'Please send me the file by Friday.'] },

  // RB1 보스: 수영장 안내문
  { id: 'RB1P1', lesson: 'RB1', type: 'choice', boss: true, prompt: '안내문을 읽고 답하세요.' + POOL, q: '수영장에 들어가기 전에 먼저 해야 할 일은?', opts: ['샤워하기', '수모 사기', '사물함 잠그기'], ans: 0, tags: ['안내문'], hints: ['1번 줄을 보세요', 'before you enter the pool = 들어가기 전에', '샤워하기'], why: '1번: Please take a shower / before you enter the pool.' },
  { id: 'RB1P2', lesson: 'RB1', type: 'choice', boss: true, prompt: '8살 조카를 데리고 왔어요. 안내문을 보고 답하세요.' + POOL, q: '조카는 어떻게 해야 하나요?', opts: ['어른과 함께 수영해야 해요', '혼자 수영해도 돼요', '수영장에 들어갈 수 없어요'], ans: 0, tags: ['안내문'], hints: ['3번 줄', 'Children under 10 = 10살 미만 어린이', '어른과 함께 수영해야 해요'], why: '3번: Children under 10 / must swim / with an adult.' },
  { id: 'RB1P3', lesson: 'RB1', type: 'choice', boss: true, prompt: '월요일 오후 1시에 가려고 해요.' + POOL, q: '어떻게 될까요?', opts: ['청소 중이라 닫혀 있어요', '평소처럼 열려 있어요', '어린이만 들어갈 수 있어요'], ans: 0, tags: ['안내문'], hints: ['맨 아래 줄', 'closed for cleaning every Monday from 12 to 2 p.m.', '청소 중이라 닫혀 있어요'], why: '매주 월요일 12시~2시는 청소로 닫아요.' },
  { id: 'RB1P4', lesson: 'RB1', type: 'choice', boss: true, prompt: '친구가 「수영장 가에서 음료수 마셔도 돼?」 하고 물어요. 알맞은 대답을 고르세요.', opts: ['No. Food and drinks are not allowed in the pool area.', 'Yes. You can drink anything by the pool.', 'Only on Mondays.'], ans: 0, sayOpts: true, tags: ['안내문'], hints: ['5번 줄', 'not allowed = 허용 안 됨', 'No. Food and drinks are not allowed in the pool area.'], why: '5번: Food and drinks / are not allowed / in the pool area.' },
  { id: 'RB1P5', lesson: 'RB1', type: 'order', boss: true, prompt: '친구에게 규칙을 알려 줘요. 덩어리 카드를 순서대로 놓으세요.', ko: '수영장 안의 모든 사람은 수모를 써야 해요.', answer: ['Everyone in the pool must wear a swim cap.'], cards: ['Everyone in the pool', 'must wear', 'a swim cap.'], distractors: ['must wears'], tags: ['긴 주어', '동사 덩어리'], hints: ['긴 주어 = Everyone in the pool', 'must 다음엔 동사 원래 모양', 'Everyone in the pool must wear a swim cap.'] },
  { id: 'RB1P6', lesson: 'RB1', type: 'fill', boss: true, prompt: '사물함 앞에서 6번을 다시 읽어요. 빈칸을 채우세요.', text: 'Lockers are free, ___ you need to bring your own lock.', blanks: [{ a: ['but'], opt: ['but', 'because', 'so'] }], tags: ['접속사'], hints: ['무료 ↔ 자물쇠는 가져와야', '반대 내용을 잇는 말', 'but'], why: '「무료지만」 → 반대로 이어지니 but.' },
  { id: 'RB1P7', lesson: 'RB1', type: 'type', boss: true, prompt: '뛰어다니는 아이에게 안내문 4번을 읽어 줘요. 영어로 쓰세요.', ko: '수영장 주변 젖은 바닥에서 뛰지 마세요.', answer: ['Do not run on the wet floor around the pool.', 'Please do not run on the wet floor around the pool.', 'Do not run on the wet floor near the pool.', 'Please do not run on the wet floor near the pool.'], tags: ['안내문'], hints: ["「~하지 마세요」 = Do not (Don't)", 'Do not run / on the wet floor / around the pool', 'Do not run on the wet floor around the pool.'] },
  { id: 'RB1P8', lesson: 'RB1', type: 'dictation', boss: true, prompt: '🔊 안내 방송이 나와요. 듣고 그대로 쓰세요.', say: 'Please take a shower before you enter the pool.', tags: ['받아쓰기'], hints: ['Please take a shower / before / you enter the pool', 'before 앞에서 끊어 들어요', 'Please take a shower before you enter the pool.'] },
);
}
