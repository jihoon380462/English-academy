// courses/talk/parts/t2.js — 챕터 2 「받아쓰기」: 레슨 T5~T8 + 보스 TB2. 스키마는 courses/basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 2, title: '받아쓰기', icon: '✍️', desc: '들은 문장을 그대로 적으며 축약형·약한 소리·빠른 질문을 잡아내요' },
);
LESSONS.push(
  { id: 'T5', ch: 2, n: 5, title: '짧은 문장 받아쓰기', minutes: 6,
    pages: [
      { title: '세 번 들으면 세 단계로', html: '<p>처음엔 <b>전체 뜻</b>만, 두 번째엔 <b>누가 + 무엇을 한다</b>(주어·동사)만, 세 번째엔 남은 빈칸을 채워요.</p><p>한 번에 다 못 들어도 괜찮아요. 들린 낱말부터 적고 빈칸을 메워 가요.</p>',
        ex: [{ en: 'I usually get up at seven.', ko: '저는 보통 7시에 일어나요.' }, { en: 'She works near here.', ko: '그녀는 이 근처에서 일해요.' }, { en: 'We need more time.', ko: '우리는 시간이 더 필요해요.' }], tip: '다시 듣기는 무제한이에요. 대신 🐢 느린 속도로 먼저 들어 보세요.' },
      { title: '끝소리 -s, -ed 를 놓치지 마세요', html: '<p>He·She 뒤 동사의 <b>-s</b>(「스·즈」)와 지난 일의 <b>-ed</b>(「트·드」)는 아주 짧게 들려요. 뜻을 생각하면 빠진 끝소리를 채울 수 있어요.</p>',
        ex: [{ en: 'He lives in Daegu.', ko: '그는 대구에 살아요.' }, { en: 'I watched a movie last night.', ko: '어젯밤에 영화를 봤어요.' }, { en: 'She called me this morning.', ko: '그녀가 오늘 아침에 전화했어요.' }] },
    ],
    summary: ['1번: 전체 뜻 → 2번: 주어·동사 → 3번: 빈칸 채우기.', '들린 낱말부터 적고 나머지를 메워요.', '끝소리 -s, -ed 는 짧으니 뜻으로 확인해요.'] },

  { id: 'T6', ch: 2, n: 6, title: '축약형 듣기', minutes: 7, terms: { '축약형': "두 낱말을 줄여 하나로 쓴 것. I will → I'll, I would → I'd" },
    pages: [
      { title: "'ll · 'd · 've 는 거의 안 들려요", html: "<p><b>I'll</b>(I will)은 「아일」, <b>I'd</b>(I would)는 「아이드」, <b>I've</b>(I have)는 「아이브」처럼 짧게 붙어요.</p><p>앞 낱말에 작은 소리가 붙으면 축약형인지 생각해 보세요.</p>",
        ex: [{ en: "I'll call you later.", ko: '나중에 전화할게요.' }, { en: "I'd like a window seat.", ko: '창가 자리로 주세요.' }, { en: "I've lost my key.", ko: '열쇠를 잃어버렸어요.' }] },
      { title: "can 과 can't, won't 와 want", html: "<p>긍정 <b>can</b> 은 약하게 「큰」, 부정 <b>can't</b> 는 세고 길게 「캐앤(트)」. 끝 t 가 안 들려도 <b>세기</b>로 구별해요.</p><p><b>won't</b>(will not)는 「워운트」, <b>want</b> 는 「원트」예요. 뒤에 to 가 오면 want 일 가능성이 커요.</p>",
        ex: [{ en: 'I can swim.', ko: '저는 수영할 수 있어요.' }, { en: "I can't swim.", ko: '저는 수영 못 해요.' }, { en: "I won't be late.", ko: '늦지 않을게요.' }] },
    ],
    summary: ["'ll = will, 'd = would/had, 've = have — 짧게 붙어요.", "can 은 약하게, can't 는 세게.", "won't(안 할게요)와 want(원해요)는 소리와 뒤에 오는 말로 구별해요."] },

  { id: 'T7', ch: 2, n: 7, title: '약하게 발음되는 말 (a·the·to·and)', minutes: 7, terms: { '기능어': 'a, the, to, and, of 처럼 뜻보다 문장을 잇는 역할을 하는 작은 낱말. 약하게 발음돼요' },
    pages: [
      { title: 'a · the · to 는 「어 · 더 · 트」', html: '<p>작은 낱말은 「어」 소리로 약해져요. <b>to the</b> 는 「터더」, <b>a glass of</b> 는 「어글래서브」처럼 한 덩어리로 들려요.</p><p>받아쓸 때 안 들렸다고 빼먹기 쉬워요. <b>문법상 있어야 할 자리</b>에 넣어 주세요.</p>',
        ex: [{ en: 'I need to go to the bank.', ko: '은행에 가야 해요.' }, { en: 'Can I have a glass of water?', ko: '물 한 잔 주실래요?' }, { en: "I'll be there in a minute.", ko: '금방 갈게요.' }] },
      { title: 'and 는 「은」, or 는 「어」', html: '<p><b>and</b> 는 「앤드」가 아니라 「은」, <b>or</b> 는 「어」 정도로 들려요. <b>of</b> 도 「어」로 줄어요.</p>',
        ex: [{ en: 'Do you want tea or coffee?', ko: '차 드릴까요, 커피 드릴까요?' }, { en: 'I need to buy some bread and eggs.', ko: '빵이랑 계란 좀 사야 해요.' }, { en: 'A cup of tea, please.', ko: '차 한 잔 주세요.' }] },
    ],
    summary: ['a · the · to · of 는 「어」 소리로 약해져요.', 'and 는 「은」, or 는 「어」.', '안 들려도 문법상 필요한 자리엔 꼭 넣어요.'] },

  { id: 'T8', ch: 2, n: 8, title: '빠른 질문 받아쓰기', minutes: 7,
    pages: [
      { title: '질문 앞머리는 뭉개져요', html: '<p><b>What are you</b> → 「와라유」, <b>Where are you</b> → 「웨어라유」, <b>What do you</b> → 「와러유」. 앞머리는 뭉개지고 <b>뒤의 동사</b>가 세게 들려요.</p><p>동사를 먼저 잡고, 앞머리는 문법으로 채워요.</p>',
        ex: [{ en: 'What are you doing this weekend?', ko: '이번 주말에 뭐 해요?' }, { en: 'Where are you going?', ko: '어디 가요?' }, { en: 'What do you think?', ko: '어떻게 생각해요?' }] },
      { title: '앞머리를 아예 빼는 질문', html: '<p>친한 사이에서는 <b>Do you · Have you</b> 를 통째로 빼요. 「Want some?」 = Do you want some?, 「Got a minute?」 = Have you got a minute?</p>',
        ex: [{ en: 'Want some coffee?', ko: '커피 좀 줄래요?' }, { en: 'Got a minute?', ko: '잠깐 시간 돼요?' }, { en: 'Need any help?', ko: '도움 필요해요?' }] },
    ],
    summary: ['질문 앞머리는 뭉개지고 동사가 세게 들려요.', '동사를 먼저 잡고 앞머리는 문법으로 채워요.', 'Want some? = Do you want some?'] },

  { id: 'TB2', ch: 2, boss: true, title: '상황 미션: 공항에서 받아쓰기', minutes: 8,
    pages: [
      { title: '체크인 카운터와 탑승구', html: '<p>해외 출장 가는 날, 공항이에요. 체크인 직원의 <b>질문</b>과 탑승구의 <b>안내 방송</b>을 받아쓰고, 필요한 말은 직접 해요.</p><p>방송은 편명·게이트 번호·시간 같은 <b>숫자</b>가 핵심이에요.</p>',
        ex: [{ en: 'Can I see your passport, please?', ko: '여권 좀 보여 주시겠어요?' }, { en: 'Would you like a window or an aisle seat?', ko: '창가석과 통로석 중 어디로 드릴까요?' }, { en: 'Flight 207 is now boarding at Gate 12.', ko: '207편이 지금 12번 게이트에서 탑승 중입니다.' }] },
    ],
    summary: ['직원 질문: passport, window or aisle, how many bags.', '방송은 편명·게이트·시간 숫자를 먼저 잡아요.', 'delayed = 지연된, boarding = 탑승 중.'] },
);
PROBLEMS.push(
  // T5 짧은 문장
  { id: 'T5P1', lesson: 'T5', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I usually get up at seven.', opts: ['보통 7시에 일어나요.', '보통 7시에 자요.', '보통 11시에 일어나요.'], ans: 0, tags: ['듣기'], hints: ['get up = 일어나다', '마지막 숫자를 들어요', '보통 7시에 일어나요.'] },
  { id: 'T5P2', lesson: 'T5', type: 'choice', prompt: '끝소리 「즈」를 떠올리며 빈칸에 맞는 말을 고르세요.', q: 'He ___ in Daegu.', opts: ['lives', 'live', 'living'], ans: 0, tags: ['끝소리'], hints: ['주어가 He 예요', 'He 뒤 현재 동사엔 -s', 'lives'], why: 'He·She 뒤 현재 동사엔 -s 가 붙어요. 짧게 「리브즈」로 들려요.' },
  { id: 'T5P3', lesson: 'T5', type: 'dictation', prompt: '듣고 그대로 받아쓰세요.', say: 'She works near here.', tags: ['받아쓰기'], hints: ['주어는 She', 'works 끝 -s 를 잊지 마세요', 'She works near here.'] },
  { id: 'T5P4', lesson: 'T5', type: 'dictation', prompt: '듣고 그대로 받아쓰세요.', say: 'We need more time.', tags: ['받아쓰기'], hints: ['네 낱말이에요', 'need more time = 시간이 더 필요하다', 'We need more time.'] },
  { id: 'T5P5', lesson: 'T5', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '저는 보통 7시에 일어나요.', answer: ['I usually get up at seven.', 'I usually get up at 7.'], cards: ['I', 'usually', 'get up', 'at', 'seven.'], distractors: ['gets up'], tags: ['짧은 문장'], hints: ['usually 는 동사 앞', 'I usually get up …', 'I usually get up at seven.'] },
  { id: 'T5P6', lesson: 'T5', type: 'dictation', prompt: '듣고 받아쓰세요. -ed 소리에 주의하세요.', say: 'I watched a movie last night.', tags: ['받아쓰기', '끝소리'], hints: ['지난 일이에요', 'watched 끝 「트」 소리', 'I watched a movie last night.'] },
  { id: 'T5P7', lesson: 'T5', type: 'type', prompt: '영어로 써 보세요.', ko: '어젯밤에 영화를 봤어요.', answer: ['I watched a movie last night.', 'I saw a movie last night.', 'Last night I watched a movie.', 'Last night I saw a movie.', 'I watched a film last night.'], tags: ['짧은 문장'], hints: ['지난 일 → 과거형', 'watched / saw + a movie', 'I watched a movie last night.'] },
  { id: 'T5P8', lesson: 'T5', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'She works near here.', ko: '그녀는 이 근처에서 일해요.', tags: ['말하기'], hints: ['works 의 -s 를 살려요', 'near here 를 한 덩어리로', 'She works near here.'] },
  { id: 'T5P9', lesson: 'T5', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I usually get up at seven.', ko: '저는 보통 7시에 일어나요.', tags: ['말하기'], hints: ['get up at 이 이어져요', '「게러뺏」처럼', 'I usually get up at seven.'] },

  // T6 축약형
  { id: 'T6P1', lesson: 'T6', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "I can't come tomorrow.", opts: ['내일 못 와요.', '내일 올 수 있어요.', '내일 와야 해요.'], ans: 0, tags: ['듣기', '축약형'], hints: ["can't 는 세고 길게 들려요", "can't = 할 수 없다", '내일 못 와요.'] },
  { id: 'T6P2', lesson: 'T6', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "I'll call you later.", opts: ['나중에 전화할게요.', '나중에 전화했어요.', '지금 전화하고 있어요.'], ans: 0, tags: ['듣기', '축약형'], hints: ["I'll = I will", '앞으로 할 일이에요', '나중에 전화할게요.'] },
  { id: 'T6P3', lesson: 'T6', type: 'choice', prompt: "이 문장의 <b>I'd</b> 는 무엇을 줄인 말일까요?", q: "I'd like a window seat.", opts: ['I would', 'I had', 'I did'], ans: 0, tags: ['축약형'], hints: ['뒤에 like 가 와요', "I'd like = I would like", 'I would'], why: "I'd 뒤에 동사 원형(like)이 오면 I would 예요. would like = ~를 원해요(공손)." },
  { id: 'T6P4', lesson: 'T6', type: 'match', prompt: '문장과 뜻을 짝 지으세요.', pairs: [["I've lost my key.", '열쇠를 잃어버렸어요.'], ["I won't be late.", '늦지 않을게요.'], ["She's already here.", '그녀는 벌써 와 있어요.'], ["We'd better hurry.", '서두르는 게 좋겠어요.']], tags: ['축약형'], hints: ["'ve = have, won't = will not", "She's = She is", "We'd better = 하는 게 좋겠다"] },
  { id: 'T6P5', lesson: 'T6', type: 'dictation', prompt: '듣고 받아쓰세요. 축약형으로 써도, 풀어 써도 돼요.', say: "I'd like a window seat.", tags: ['받아쓰기', '축약형'], hints: ["I'd like 로 시작해요", 'window seat = 창가 자리', "I'd like a window seat."] },
  { id: 'T6P6', lesson: 'T6', type: 'dictation', prompt: '듣고 받아쓰세요.', say: "They're not coming today.", tags: ['받아쓰기', '축약형'], hints: ["They're = They are", 'not coming = 안 와요', "They're not coming today."] },
  { id: 'T6P7', lesson: 'T6', type: 'fix', prompt: '잘못 받아쓴 문장이에요. 뜻에 맞게 고치세요.', ko: '늦지 않을게요.', wrong: 'I want be late.', answer: ["I won't be late.", 'I will not be late.'], tags: ['축약형', '오개념'], hints: ['want 와 소리가 비슷한 말', 'will not 의 줄임', "I won't be late."], why: "won't(will not)는 「워운트」, want 는 「원트」. 뒤에 to 없이 동사가 오면 won't 예요." },
  { id: 'T6P8', lesson: 'T6', type: 'speak', prompt: "🔊 can't 를 세게 살려 따라 말해 보세요.", say: "I can't make it tonight.", ko: '오늘 밤엔 못 가요.', tags: ['말하기', '축약형'], hints: ["can't 를 길고 세게", 'make it = 시간 맞춰 가다', "I can't make it tonight."] },
  { id: 'T6P9', lesson: 'T6', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I've already eaten.", ko: '벌써 먹었어요.', tags: ['말하기', '축약형'], hints: ["I've 는 「아이브」", 'already 를 세게', "I've already eaten."] },

  // T7 약하게 발음되는 말
  { id: 'T7P1', lesson: 'T7', type: 'choice', prompt: '「트」처럼 약하게 들린 빈칸에 맞는 말을 고르세요.', q: 'I need ___ go to the bank.', opts: ['to', 'a', 'the'], ans: 0, tags: ['약한 소리'], hints: ['need 뒤에 동사 go 가 와요', 'need + to + 동사', 'to'], why: 'need to + 동사 = ~해야 해요. to 는 「트」로 약하게 들려요.' },
  { id: 'T7P2', lesson: 'T7', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Do you want tea or coffee?', opts: ['차 드릴까요, 커피 드릴까요?', '차랑 커피 둘 다 드릴까요?', '차에 커피를 넣을까요?'], ans: 0, tags: ['듣기', '약한 소리'], hints: ['tea 와 coffee 사이 작은 소리', '「어」로 들린 건 or', '차 드릴까요, 커피 드릴까요?'] },
  { id: 'T7P3', lesson: 'T7', type: 'fill', prompt: '약하게 들린 두 낱말을 채우세요.', text: 'Can I have ___ glass ___ water?', blanks: [{ a: ['a'], opt: ['a', 'an', 'the'] }, { a: ['of'], opt: ['of', 'for', 'on'] }], tags: ['약한 소리'], hints: ['한 잔 = 하나', 'a glass of + 마실 것', 'a / of'], why: '「어글래서브」로 뭉개지지만 a glass of water 예요. glass 는 자음 소리라 a.' },
  { id: 'T7P4', lesson: 'T7', type: 'dictation', prompt: '듣고 받아쓰세요. 약한 낱말을 빼먹지 마세요.', say: 'I need to go to the bank.', tags: ['받아쓰기', '약한 소리'], hints: ['to 가 두 번 나와요', 'to the 는 「터더」', 'I need to go to the bank.'] },
  { id: 'T7P5', lesson: 'T7', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'Can I have a glass of water?', tags: ['받아쓰기', '약한 소리'], hints: ['Can I have 로 시작', 'a glass of 가 한 덩어리', 'Can I have a glass of water?'] },
  { id: 'T7P6', lesson: 'T7', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '빵이랑 계란 좀 사야 해요.', answer: ['I need to buy some bread and eggs.', 'I have to buy some bread and eggs.'], cards: ['I', 'need', 'to', 'buy', 'some', 'bread', 'and', 'eggs.'], distractors: ['a'], tags: ['약한 소리'], hints: ['need to + 동사', 'some bread and eggs', 'I need to buy some bread and eggs.'] },
  { id: 'T7P7', lesson: 'T7', type: 'dictation', prompt: '듣고 받아쓰세요.', say: "I'll be there in a minute.", tags: ['받아쓰기', '약한 소리'], hints: ["I'll be there = 갈게요", 'in a minute 이 「이너미닛」', "I'll be there in a minute."] },
  { id: 'T7P8', lesson: 'T7', type: 'speak', prompt: '🔊 작은 낱말은 약하게 따라 말해 보세요.', say: 'I need to go to the bank.', ko: '은행에 가야 해요.', tags: ['말하기', '약한 소리'], hints: ['need, go, bank 를 세게', 'to the 는 짧게', 'I need to go to the bank.'] },
  { id: 'T7P9', lesson: 'T7', type: 'speak', prompt: '🔊 or 를 약하게 따라 말해 보세요.', say: 'Do you want tea or coffee?', ko: '차 드릴까요, 커피 드릴까요?', tags: ['말하기', '약한 소리'], hints: ['tea 에서 살짝 올리고', 'coffee 에서 내려요', 'Do you want tea or coffee?'] },

  // T8 빠른 질문
  { id: 'T8P1', lesson: 'T8', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'What are you doing this weekend?', opts: ['이번 주말에 뭐 해요?', '지난 주말에 뭐 했어요?', '이번 주말에 어디 가요?'], ans: 0, tags: ['듣기', '빠른 질문'], hints: ['동사 doing 을 잡아요', 'this weekend = 이번 주말', '이번 주말에 뭐 해요?'] },
  { id: 'T8P2', lesson: 'T8', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Got a minute?', opts: ['잠깐 시간 돼요?', '1분 지났어요?', '지금 몇 시예요?'], ans: 0, tags: ['듣기', '빠른 질문'], hints: ['Have you 가 빠졌어요', 'a minute = 잠깐', '잠깐 시간 돼요?'] },
  { id: 'T8P3', lesson: 'T8', type: 'choice', prompt: '이 질문 앞에 빠진 말은?', q: 'Want some coffee?', opts: ['Do you', 'Are you', 'Did you'], ans: 0, tags: ['빠른 질문'], hints: ['동사가 want 예요', '현재 일반동사 질문', 'Do you'], why: '일반동사 want 의 현재 질문이라 Do you want some coffee? 에서 Do you 를 뺀 거예요.' },
  { id: 'T8P4', lesson: 'T8', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'Where are you going?', tags: ['받아쓰기', '빠른 질문'], hints: ['Where are you 가 뭉개져요', '동사는 going', 'Where are you going?'] },
  { id: 'T8P5', lesson: 'T8', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'What do you think?', tags: ['받아쓰기', '빠른 질문'], hints: ['「와러유」 = What do you', '동사는 think', 'What do you think?'] },
  { id: 'T8P6', lesson: 'T8', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'Have you been here before?', tags: ['받아쓰기', '빠른 질문'], hints: ['Have you 로 시작', 'been here before = 여기 와 본 적', 'Have you been here before?'] },
  { id: 'T8P7', lesson: 'T8', type: 'type', prompt: '영어로 써 보세요. 짧은 질문도 좋아요.', ko: '도움 필요해요?', answer: ['Do you need any help?', 'Need any help?', 'Do you need help?', 'Need help?', 'Do you need some help?', 'Can I help you?'], tags: ['빠른 질문'], hints: ['동사 need', 'Do you need … ?', 'Do you need any help?'] },
  { id: 'T8P8', lesson: 'T8', type: 'speak', prompt: '🔊 빠르게 따라 말해 보세요.', say: 'What are you doing this weekend?', ko: '이번 주말에 뭐 해요?', tags: ['말하기', '빠른 질문'], hints: ['What are you 를 「와라유」로', 'doing 과 weekend 를 세게', 'What are you doing this weekend?'] },
  { id: 'T8P9', lesson: 'T8', type: 'speak', prompt: '🔊 짧은 질문을 따라 말해 보세요.', say: 'Want some coffee?', ko: '커피 좀 줄래요?', tags: ['말하기', '빠른 질문'], hints: ['Do you 없이 바로', '끝을 올려요 ↗', 'Want some coffee?'] },

  // TB2 공항
  { id: 'TB2P1', lesson: 'TB2', type: 'dictation', boss: true, prompt: '체크인 직원이 말해요. 받아쓰세요.', say: 'Can I see your passport, please?', tags: ['받아쓰기', '공항'], hints: ['Can I see 로 시작', 'passport = 여권', 'Can I see your passport, please?'] },
  { id: 'TB2P2', lesson: 'TB2', type: 'listen', boss: true, prompt: '직원의 질문을 듣고 뜻을 고르세요.', say: 'Would you like a window or an aisle seat?', opts: ['창가석과 통로석 중 어디로 드릴까요?', '창문을 열어 드릴까요?', '좌석을 바꾸시겠어요?'], ans: 0, tags: ['듣기', '공항'], hints: ['or 로 둘 중 하나를 물어요', 'aisle = 통로', '창가석과 통로석 중 어디로 드릴까요?'] },
  { id: 'TB2P3', lesson: 'TB2', type: 'speak', boss: true, prompt: '🔊 통로석으로 달라고 말해 보세요.', say: 'An aisle seat, please.', ko: '통로석으로 주세요.', tags: ['말하기', '공항'], hints: ['aisle 은 「아일」(s 소리 없음)', 'An aisle 이 「어나일」로 이어져요', 'An aisle seat, please.'] },
  { id: 'TB2P4', lesson: 'TB2', type: 'dictation', boss: true, prompt: '직원이 또 물어요. 받아쓰세요.', say: 'How many bags are you checking today?', tags: ['받아쓰기', '공항'], hints: ['How many bags 로 시작', 'checking = 부치는', 'How many bags are you checking today?'] },
  { id: 'TB2P5', lesson: 'TB2', type: 'type', boss: true, prompt: '영어로 대답해 보세요.', ko: '가방 하나 부칠게요.', answer: ['I have one bag to check.', 'Just one bag.', "I'm checking one bag.", 'One bag, please.', "I'll check one bag.", 'I have one bag.'], tags: ['공항'], hints: ['하나 = one bag', '짧게 Just one bag 도 좋아요', 'I have one bag to check.'] },
  { id: 'TB2P6', lesson: 'TB2', type: 'dictation', boss: true, prompt: '탑승구 안내 방송이에요. 받아쓰세요. 숫자는 숫자로 써도 돼요.', say: 'Flight 207 is now boarding at Gate 12.', answer: ['Flight 207 is now boarding at Gate 12.', 'Flight 207 is now boarding at Gate twelve.', 'Flight two oh seven is now boarding at Gate 12.', 'Flight two oh seven is now boarding at Gate twelve.'], tags: ['받아쓰기', '방송'], hints: ['편명과 게이트 숫자가 핵심', 'now boarding = 지금 탑승 중', 'Flight 207 is now boarding at Gate 12.'] },
  { id: 'TB2P7', lesson: 'TB2', type: 'listen', boss: true, prompt: '이어지는 방송이에요. 무슨 뜻일까요?', say: 'The flight has been delayed by thirty minutes.', opts: ['비행기가 30분 늦어져요.', '비행기가 13분 늦어져요.', '비행기가 30분 일찍 떠나요.'], ans: 0, tags: ['듣기', '방송'], hints: ['delayed = 늦어진', 'THIRty 는 앞이 세요', '비행기가 30분 늦어져요.'] },
  { id: 'TB2P8', lesson: 'TB2', type: 'speak', boss: true, prompt: '🔊 게이트를 찾아 물어보세요.', say: 'Excuse me, where is Gate 12?', ko: '실례합니다, 12번 게이트가 어디예요?', tags: ['말하기', '공항'], hints: ['Excuse me 로 말을 걸어요', '의문사 질문은 끝을 내려요 ↘', 'Excuse me, where is Gate 12?'] },
);
