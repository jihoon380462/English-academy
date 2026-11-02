// courses/basic/parts/c6.js — 챕터 6 「한 걸음 더」 (레슨 E30~E34 + 보스 B6). 스키마는 ../content.js 맨 위 주석
CHAPTERS.push(
  { n: 6, title: '한 걸음 더', icon: '🚀', desc: '할 수 있다·해야 한다, 공손한 부탁, 비교, 「~이 있어요」' },
);
LESSONS.push(
  // ── E30 can / can't ──
  { id: 'E30', ch: 6, n: 30, title: '할 수 있어요 (can / can\'t)', minutes: 6,
    terms: { '조동사': '동사 앞에 붙어 「할 수 있다·해야 한다」 같은 뜻을 더해 주는 말. can, should, must 같은 것들이에요.', '동사 원형': '-s 나 -ed 가 붙지 않은 동사의 기본 모양 (go, swim, speak).' },
    pages: [
      { title: 'can + 동사 = ~할 수 있어요', html: '<p><b>can</b> 은 동사 앞에 붙어서 「~할 수 있어요」라는 뜻을 더해요. 이렇게 동사를 도와주는 말을 <b>조동사</b>라고 해요.</p><p>can 뒤에는 언제나 <b>동사 원형</b>이 와요. 주어가 She·He 여도 <b>can speaks ✗</b>, <b>can speak ✓</b> 예요.</p>',
        ex: [{ en: 'I|can swim.', roles: 'S V', ko: '나는 수영할 수 있어요.' }, { en: 'She|can speak|Japanese.', roles: 'S V O', ko: '그녀는 일본어를 할 수 있어요.' }, { en: 'Tom|can cook|pasta|very well.', roles: 'S V O M', ko: '톰은 파스타를 아주 잘 만들어요.' }] },
      { title: 'can\'t = ~할 수 없어요', html: '<p>못 한다고 할 때는 <b>can\'t</b> (= cannot) 를 써요. 뒤에는 역시 동사 원형이에요.</p><p>소리가 헷갈리기 쉬워요. 말할 때 can 은 약하게 「큰」, can\'t 는 세게 「캔(트)」처럼 들려요.</p>',
        ex: [{ en: "I|can't drive.", roles: 'S V', ko: '나는 운전을 못 해요.' }, { en: "He|can't come|today.", roles: 'S V M', ko: '그는 오늘 못 와요.' }], tip: '🔊 로 can 과 can\'t 를 번갈아 들어 보세요. 끝의 t 보다 <b>앞 소리의 세기</b>로 구별하는 게 쉬워요.' },
      { title: 'Can you …? = ~해 줄 수 있어요?', html: '<p>질문은 <b>Can 을 맨 앞</b>으로 보내요. 「할 줄 알아요?」를 물을 때도, 「~해 줄래요?」 하고 <b>부탁</b>할 때도 써요.</p><p><b>Can I …?</b> 는 「제가 ~해도 돼요?」 하고 허락을 구하는 말이에요.</p>',
        ex: [{ en: 'Can|you|help|me?', roles: 'Q S V O', ko: '도와줄 수 있어요?' }, { en: 'Can|you|speak|English?', roles: 'Q S V O', ko: '영어 할 줄 알아요?' }, { en: 'Can|I|sit|here?', roles: 'Q S V M', ko: '여기 앉아도 돼요?' }] },
    ],
    summary: ['<b>can + 동사 원형</b> = ~할 수 있어요. 주어가 He/She 여도 동사에 -s 없음.', '<b>can\'t</b> (cannot) + 동사 원형 = ~할 수 없어요.', '<b>Can you …?</b> 는 부탁, <b>Can I …?</b> 는 허락 구하기.'] },

  // ── E31 should / must / have to ──
  { id: 'E31', ch: 6, n: 31, title: '~하는 게 좋아요·해야 해요 (should / must / have to)', minutes: 7,
    terms: { 'have to': '「~해야 해요」. must 와 뜻이 비슷한데 말할 때 더 자주 써요. 주어가 He/She 면 has to.' },
    pages: [
      { title: 'should = ~하는 게 좋겠어요 (조언)', html: '<p><b>should</b> 는 「~하는 게 좋겠어요」 하고 부드럽게 권할 때 써요. can 처럼 뒤에 <b>동사 원형</b>이 와요.</p><p>하지 않는 게 좋다면 <b>shouldn\'t</b>.</p>',
        ex: [{ en: 'You|should rest.', roles: 'S V', ko: '좀 쉬는 게 좋겠어요.' }, { en: 'You|should see|a doctor.', roles: 'S V O', ko: '병원에 가 보는 게 좋겠어요.' }, { en: "We|shouldn't be|late.", roles: 'S V C', ko: '우리 늦으면 안 돼요.' }] },
      { title: 'must / have to = 꼭 ~해야 해요', html: '<p>꼭 해야 하는 일은 <b>must</b> 나 <b>have to</b>. 뜻은 거의 같지만 일상 대화에선 <b>have to</b> 를 더 많이 써요.</p><table><tr><th>주어</th><th>해야 해요</th></tr><tr><td>I / You / We / They</td><td>have to</td></tr><tr><td>He / She / It</td><td><b>has to</b></td></tr></table><p>must 뒤에는 to 가 없어요: <b>must wear ✓</b>, must to wear ✗.</p>',
        ex: [{ en: 'I|have to work|tomorrow.', roles: 'S V M', ko: '나는 내일 일해야 해요.' }, { en: 'She|has to leave|now.', roles: 'S V M', ko: '그녀는 지금 가야 해요.' }, { en: 'You|must wear|a seat belt.', roles: 'S V O', ko: '안전벨트를 꼭 매야 해요.' }] },
      { title: '안 해도 돼요 vs 하면 안 돼요', html: '<p>부정이 되면 뜻이 크게 갈라져요.</p><p><b>don\'t have to</b> = 안 해도 돼요 (필요 없음)<br><b>mustn\'t</b> = 하면 안 돼요 (금지)</p>',
        ex: [{ en: "You|don't have to pay.", roles: 'S V', ko: '돈 안 내셔도 돼요.' }, { en: "You|mustn't smoke|here.", roles: 'S V M', ko: '여기서 담배 피우면 안 돼요.' }], tip: '헷갈리면 이렇게 기억해요: don\'t have to 는 「해도 되고 안 해도 되고」, mustn\'t 는 「절대 안 돼」.' },
    ],
    summary: ['<b>should</b> + 동사 원형 = ~하는 게 좋겠어요 (조언).', '<b>must / have to</b> = 꼭 ~해야 해요. He/She 는 <b>has to</b>, must 뒤엔 to 없음.', '<b>don\'t have to</b> = 안 해도 돼요, <b>mustn\'t</b> = 하면 안 돼요.'] },

  // ── E32 would like / Could you …? ──
  { id: 'E32', ch: 6, n: 32, title: '공손하게 부탁하기 (I\'d like / Could you …?)', minutes: 7,
    terms: { 'would like': '「~을 원해요」의 공손한 말. want 보다 부드러워요. 줄여서 I\'d like.' },
    pages: [
      { title: 'I\'d like … = ~ 주세요 / ~하고 싶어요', html: '<p>가게·식당·호텔에서 <b>I want …</b> 는 조금 직설적으로 들릴 수 있어요. 대신 <b>I\'d like</b> (= I would like) 를 써요.</p><p>뒤에 <b>물건</b>이 오면 「~ 주세요」, <b>to + 동사</b>가 오면 「~하고 싶어요」예요.</p>',
        ex: [{ en: "I'd|like|a glass of water.", roles: 'S V O', ko: '물 한 잔 주세요.' }, { en: "I'd|like to book|a table|for two.", roles: 'S V O M', ko: '두 명 자리를 예약하고 싶어요.' }] },
      { title: 'Would you like …? = ~ 드릴까요? / ~하실래요?', html: '<p>상대에게 권할 때는 <b>Would you like …?</b> 예요. 점원이 자주 하는 말이라 꼭 알아들어야 해요.</p><p>대답은 <b>Yes, please.</b> (네, 주세요) / <b>No, thank you.</b> (괜찮아요)</p>',
        ex: [{ en: 'Would|you|like|some tea?', roles: 'Q S V O', ko: '차 좀 드실래요?' }, { en: 'Would|you|like to join|us?', roles: 'Q S V O', ko: '우리랑 같이 하실래요?' }] },
      { title: 'Could you …? = ~해 주시겠어요?', html: '<p><b>Could you …?</b> 는 Can you …? 보다 한 단계 더 <b>공손한 부탁</b>이에요. 처음 보는 사람에게는 Could 가 안전해요.</p><p><b>Could I …?</b> 는 「제가 ~해도 될까요?」, 「~ 주시겠어요?」예요.</p>',
        ex: [{ en: 'Could|you|say|that|again?', roles: 'Q S V O M', ko: '다시 한번 말씀해 주시겠어요?' }, { en: 'Could|you|speak|more slowly?', roles: 'Q S V M', ko: '좀 더 천천히 말씀해 주시겠어요?' }, { en: 'Could|I|have|the bill,|please?', roles: 'Q S V O M', ko: '계산서 좀 주시겠어요?' }] },
    ],
    summary: ['<b>I\'d like</b> + 물건 = ~ 주세요, <b>I\'d like to</b> + 동사 = ~하고 싶어요.', '<b>Would you like …?</b> = ~ 드릴까요? → Yes, please. / No, thank you.', '<b>Could you …?</b> = ~해 주시겠어요? (Can you 보다 공손)'] },

  // ── E33 비교급·최상급 ──
  { id: 'E33', ch: 6, n: 33, title: '더 ~해요, 가장 ~해요 (비교급·최상급)', minutes: 7,
    terms: { '비교급': '「더 ~한」. 짧은 말엔 -er, 긴 말엔 앞에 more.', '최상급': '「가장 ~한」. the + -est, 긴 말엔 the most.' },
    pages: [
      { title: '더 ~해요 = -er + than', html: '<p>두 개를 비교할 때는 형용사 끝에 <b>-er</b>, 비교 대상 앞에 <b>than</b>(~보다)을 써요.</p><table><tr><td>tall → taller</td><td>cheap → cheaper</td></tr><tr><td>big → <b>bigger</b></td><td>easy → <b>easier</b></td></tr><tr><td>good → <b>better</b></td><td>bad → <b>worse</b></td></tr></table>',
        ex: [{ en: 'Tom|is|taller|than me.', roles: 'S V C M', ko: '톰은 나보다 키가 커요.' }, { en: 'This bag|is|cheaper.', roles: 'S V C', ko: '이 가방이 더 싸요.' }, { en: 'Today|is|colder|than yesterday.', roles: 'S V C M', ko: '오늘이 어제보다 추워요.' }] },
      { title: '긴 말은 more ~', html: '<p>interesting, expensive 처럼 <b>긴 형용사</b>는 -er 을 붙이지 않고 앞에 <b>more</b> 를 써요.</p><p>-er 과 more 는 둘 중 하나만! <b>more bigger ✗</b></p>',
        ex: [{ en: 'This book|is|more interesting.', roles: 'S V C', ko: '이 책이 더 재미있어요.' }, { en: 'The subway|is|more convenient|than the bus.', roles: 'S V C M', ko: '지하철이 버스보다 더 편해요.' }] },
      { title: '가장 ~해요 = the -est / the most', html: '<p>셋 이상 중에서 1등은 <b>the + -est</b>, 긴 말은 <b>the most</b> 를 써요. good 은 <b>the best</b>.</p><p>「~ 중에서」는 뒤에 <b>in</b> + 장소·모임을 붙여요.</p>',
        ex: [{ en: 'Mina|is|the youngest|in my family.', roles: 'S V C M', ko: '미나가 우리 가족 중에서 가장 어려요.' }, { en: 'This|is|the best restaurant|in town.', roles: 'S V C M', ko: '여기가 동네에서 제일 좋은 식당이에요.' }, { en: 'This|is|the most expensive room.', roles: 'S V C', ko: '이게 가장 비싼 방이에요.' }] },
    ],
    summary: ['짧은 말 + <b>-er than</b> = ~보다 더 ~해요 (bigger, better).', '긴 말은 <b>more</b> ~ (more interesting). more bigger ✗.', '가장 ~한 = <b>the -est</b> / <b>the most</b> ~ (the best).'] },

  // ── E34 There is / There are ──
  { id: 'E34', ch: 6, n: 34, title: '~이 있어요 (There is / There are)', minutes: 6,
    terms: { 'There is/are': '「~이 있어요」. 무엇이 어디에 있다고 처음 알려 줄 때 써요. 여기서 there 는 「거기」라는 뜻이 아니에요.' },
    pages: [
      { title: 'There is + 하나 = ~이 있어요', html: '<p>「근처에 카페가 있어요」처럼 <b>무엇이 있다</b>고 알려 줄 때는 <b>There is</b> 로 시작해요.</p><p>진짜 주인공(<span class="chunk r-S">파랑</span>)은 There is 뒤에 와요. 줄여서 <b>There\'s</b>.</p>',
        ex: [{ en: 'There is|a cafe|near my house.', roles: 'V S M', ko: '우리 집 근처에 카페가 있어요.' }, { en: "There's|a problem|with my room.", roles: 'V S M', ko: '제 방에 문제가 있어요.' }] },
      { title: 'There are + 여럿', html: '<p>있는 것이 <b>둘 이상</b>이면 <b>There are</b>. 뒤에 오는 말이 하나인지 여럿인지 보고 is / are 를 골라요.</p>',
        ex: [{ en: 'There are|two beds|in the room.', roles: 'V S M', ko: '방에 침대가 두 개 있어요.' }, { en: 'There are|many people|here|today.', roles: 'V S M M', ko: '오늘 여기 사람이 많아요.' }], tip: 'There is two ✗ — 숫자·many 가 보이면 바로 are!' },
      { title: '없어요 · 있어요?', html: '<p>없다고 할 때는 <b>There isn\'t / There aren\'t</b>. 물을 때는 순서를 바꿔 <b>Is there …? / Are there …?</b></p><p>여행 가서 가장 많이 쓰는 질문이에요.</p>',
        ex: [{ en: "There isn't|any hot water.", roles: 'V S', ko: '뜨거운 물이 안 나와요.' }, { en: 'Is there|a pharmacy|near here?', roles: 'Q S M', ko: '이 근처에 약국 있어요?' }, { en: 'Are there|any good restaurants|around here?', roles: 'Q S M', ko: '이 근처에 괜찮은 식당 있어요?' }] },
    ],
    summary: ['하나면 <b>There is</b> (There\'s), 여럿이면 <b>There are</b> = ~이 있어요.', '없어요 = <b>There isn\'t / aren\'t</b>.', '있어요? = <b>Is there …? / Are there …?</b>'] },

  // ── B6 보스: 숙소 체크인 ──
  { id: 'B6', ch: 6, boss: true, title: '상황 미션: 여행지 숙소 체크인', minutes: 8,
    pages: [
      { title: '상황: 호텔 프런트에서', html: '<p>여행지에 도착해서 오늘 밤 묵을 호텔 프런트에 왔어요. 직원과 <b>체크인</b>하고, 방에 들어가 생긴 문제도 해결해 봐요.</p><p>이번 챕터에서 배운 <b>I\'d like · Could you · can · have to · 비교 · There is</b> 를 전부 섞어 써요.</p>',
        ex: [{ en: "I'd|like to check in,|please.", roles: 'S V M', ko: '체크인하려고요.' }, { en: 'I|have|a reservation|under Kim.', roles: 'S V O M', ko: '김 이름으로 예약했어요.' }, { en: 'What time do I have to check out?', ko: '몇 시에 체크아웃해야 해요?' }] },
      { title: '방에 문제가 있을 때', html: '<p>방에 문제가 있으면 프런트에 전화해서 <b>There is / There isn\'t</b> 로 상황을 말하고, <b>Could you …?</b> 로 부탁해요.</p>',
        ex: [{ en: "There isn't|any hot water|in the bathroom.", roles: 'V S M', ko: '욕실에 뜨거운 물이 안 나와요.' }, { en: 'Could|you|send|someone|up?', roles: 'Q S V O M', ko: '누구 좀 올려 보내 주시겠어요?' }] },
    ],
    summary: ['체크인: <b>I\'d like to check in.</b> + 예약자 이름.', '문제 알리기: <b>There isn\'t any hot water.</b>', '부탁: <b>Could you …? / Could I have …?</b>'] },
);
PROBLEMS.push(
  // E30
  { id: 'E30P1', lesson: 'E30', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'She ___ Chinese.', opts: ['can speak', 'can speaks', 'can to speak'], ans: 0, tags: ['can'], hints: ['can 뒤 동사 모양을 보세요', 'can 뒤에는 동사 원형, to 도 없어요', 'She can speak Chinese.'], why: 'can 뒤에는 -s 도 to 도 없이 동사 원형이 와요.' },
  { id: 'E30P2', lesson: 'E30', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "I can't drive.", opts: ['나는 운전을 못 해요.', '나는 운전할 수 있어요.', '나는 운전을 좋아해요.'], ans: 0, tags: ['듣기', 'can'], hints: ['can 인지 can\'t 인지 들어 보세요', '세게 「캔(트)」 = can\'t', '나는 운전을 못 해요.'], why: 'can\'t 는 세고 길게 들려요. 「못 해요」라는 뜻이에요.' },
  { id: 'E30P3', lesson: 'E30', type: 'match', prompt: '문장과 뜻을 짝 지으세요.', pairs: [['Can you help me?', '도와줄 수 있어요?'], ['Can I sit here?', '여기 앉아도 돼요?'], ['I can swim.', '나는 수영할 수 있어요.'], ["He can't come today.", '그는 오늘 못 와요.']], tags: ['can'], hints: ['Can 이 앞에 오면 질문이에요', 'Can I …? 는 허락 구하기', "can't 는 「못 해요」"] },
  { id: 'E30P4', lesson: 'E30', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그녀는 피아노를 칠 수 있어요.', answer: ['She can play the piano.', 'She can play piano.'], cards: ['She', 'can play', 'the piano.'], roles: 'S V O', tags: ['can', '문장 뼈대'], hints: ['파랑(주어)은 She', '빨강(동사)은 can play', 'She can play the piano.'] },
  { id: 'E30P5', lesson: 'E30', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '그는 매운 음식을 못 먹어요.', answer: ["He can't eat spicy food.", 'He cannot eat spicy food.'], cards: ['He', "can't", 'eat', 'spicy', 'food.'], distractors: ['eats'], tags: ['can'], hints: ['주어 → can\'t → 동사', "can't 뒤에는 동사 원형 eat", "He can't eat spicy food."] },
  { id: 'E30P6', lesson: 'E30', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그는 아주 빨리 달릴 수 있어요.', wrong: 'He can runs very fast.', answer: ['He can run very fast.', 'He can run really fast.'], tags: ['can', '오개념'], hints: ['동사 끝을 보세요', 'can 뒤에는 -s 가 붙지 않아요', 'He can run very fast.'], why: 'He 가 주어여도 can 뒤의 동사는 원형이에요: can run.' },
  { id: 'E30P7', lesson: 'E30', type: 'type', prompt: '부탁하는 말을 영어로 써 보세요.', ko: '창문 좀 열어 줄 수 있어요?', answer: ['Can you open the window?', 'Can you open the window, please?', 'Can you please open the window?', 'Could you open the window?', 'Could you please open the window?'], tags: ['can', '부탁'], hints: ['Can 으로 시작해요', 'Can you + open + the window?', 'Can you open the window?'] },
  { id: 'E30P8', lesson: 'E30', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 영어를 조금 할 수 있어요.', answer: ['I can speak English a little.', 'I can speak a little English.', 'I can speak some English.', 'I speak a little English.', 'I can speak English a bit.'], tags: ['can'], hints: ['I can + 동사', '말하다 = speak, 조금 = a little', 'I can speak English a little.'] },
  { id: 'E30P9', lesson: 'E30', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Can you help me?', ko: '도와줄 수 있어요?', roles: 'Q S V O', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'Can 은 약하게 「큰」', 'Can you help me?'] },

  // E31
  { id: 'E31P1', lesson: 'E31', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'You look tired. You ___ go to bed early.', opts: ['should', 'should to', 'shoulds'], ans: 0, tags: ['should'], hints: ['조언하는 말이에요', 'should 뒤에는 to 없이 동사 원형', 'You should go to bed early.'], why: 'should 는 to 없이, -s 없이 그대로 써요.' },
  { id: 'E31P2', lesson: 'E31', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'She ___ work this Saturday.', opts: ['has to', 'have to', 'has'], ans: 0, tags: ['have to'], hints: ['주어가 She 예요', 'He/She 는 have 가 아니라 has', 'She has to work this Saturday.'], why: '주어가 He/She 처럼 한 사람이면 have to 가 has to 로 바뀌어요.' },
  { id: 'E31P3', lesson: 'E31', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "You don't have to pay.", opts: ['돈 안 내셔도 돼요.', '돈을 꼭 내야 해요.', '돈을 내면 안 돼요.'], ans: 0, tags: ['듣기', 'have to'], hints: ["don't 가 들렸나요?", "don't have to = 안 해도 돼요", '돈 안 내셔도 돼요.'], why: 'don\'t have to 는 금지가 아니라 「필요 없어요」예요.' },
  { id: 'E31P4', lesson: 'E31', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '병원에 가 보는 게 좋겠어요.', answer: ['You should see a doctor.', 'You should go to the doctor.'], cards: ['You', 'should see', 'a doctor.'], roles: 'S V O', tags: ['should'], hints: ['파랑(주어)은 You', '빨강(동사)은 should see', 'You should see a doctor.'] },
  { id: 'E31P5', lesson: 'E31', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 내일 일찍 일어나야 해요.', answer: ['I have to get up early tomorrow.', 'I must get up early tomorrow.', 'I have to wake up early tomorrow.', 'Tomorrow I have to get up early.'], cards: ['I', 'have to', 'get up', 'early', 'tomorrow.'], distractors: ['has to'], tags: ['have to'], hints: ['I 다음은 have to', 'have to + get up + early', 'I have to get up early tomorrow.'] },
  { id: 'E31P6', lesson: 'E31', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그는 지금 가야 해요.', wrong: 'He have to go now.', answer: ['He has to go now.', 'He must go now.'], tags: ['have to', '오개념'], hints: ['주어가 He 예요', 'He 다음엔 has to', 'He has to go now.'], why: 'He/She 다음에는 have to 가 아니라 has to 예요.' },
  { id: 'E31P7', lesson: 'E31', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '안전벨트를 꼭 매야 해요.', wrong: 'You must to wear a seat belt.', answer: ['You must wear a seat belt.', 'You have to wear a seat belt.'], tags: ['must', '오개념'], hints: ['must 바로 뒤를 보세요', 'must 뒤에는 to 가 없어요', 'You must wear a seat belt.'], why: 'must 뒤에는 to 없이 바로 동사가 와요. (have to 는 to 가 있어요)' },
  { id: 'E31P8', lesson: 'E31', type: 'type', prompt: '금지하는 말을 영어로 써 보세요.', ko: '여기서 담배 피우면 안 돼요.', answer: ["You mustn't smoke here.", "You can't smoke here.", "Don't smoke here.", "You're not allowed to smoke here.", 'No smoking here.'], tags: ['must'], hints: ['금지는 mustn\'t', "You mustn't + smoke + here", "You mustn't smoke here."] },
  { id: 'E31P9', lesson: 'E31', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'You should get some rest.', ko: '좀 쉬는 게 좋겠어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'should 의 l 은 소리 나지 않아요 「슈드」', 'You should get some rest.'] },

  // E32
  { id: 'E32P1', lesson: 'E32', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: "I'd ___ a cup of tea, please.", opts: ['like', 'likes', 'liking'], ans: 0, tags: ['would like'], hints: ["I'd = I would", 'would 뒤에는 동사 원형', "I'd like a cup of tea, please."], why: "I'd 는 I would 의 줄임말이라 뒤에 동사 원형 like 가 와요." },
  { id: 'E32P2', lesson: 'E32', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Could you speak more slowly?', opts: ['좀 더 천천히 말씀해 주시겠어요?', '좀 더 크게 말씀해 주시겠어요?', '다시 전화해 주시겠어요?'], ans: 0, tags: ['듣기', '공손한 부탁'], hints: ['마지막 낱말을 들어 보세요', 'slowly = 천천히', '좀 더 천천히 말씀해 주시겠어요?'] },
  { id: 'E32P3', lesson: 'E32', type: 'match', prompt: '문장과 뜻을 짝 지으세요.', pairs: [["I'd like a glass of water.", '물 한 잔 주세요.'], ['Would you like some tea?', '차 좀 드실래요?'], ['Could you say that again?', '다시 한번 말씀해 주시겠어요?'], ['Could I have the bill, please?', '계산서 좀 주시겠어요?']], tags: ['공손한 부탁'], hints: ["I'd like = ~ 주세요", 'Would you like …? = 권하기', 'Could you …? = 부탁하기'] },
  { id: 'E32P4', lesson: 'E32', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '두 명 자리를 예약하고 싶어요.', answer: ["I'd like to book a table for two.", 'I would like to book a table for two.', "I'd like to reserve a table for two.", 'I would like to reserve a table for two.'], cards: ["I'd", 'like to book', 'a table', 'for two.'], roles: 'S V O M', tags: ['would like'], hints: ["파랑(주어)은 I'd", '빨강(동사)은 like to book', "I'd like to book a table for two."] },
  { id: 'E32P5', lesson: 'E32', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '창문 좀 닫아 주시겠어요?', answer: ['Could you close the window?', 'Could you please close the window?', 'Can you close the window?'], cards: ['Could', 'you', 'close', 'the', 'window?'], distractors: ['closes'], tags: ['공손한 부탁'], hints: ['Could 로 시작해요', 'Could you + 동사 원형', 'Could you close the window?'] },
  { id: 'E32P6', lesson: 'E32', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '피자를 주문하고 싶어요.', wrong: 'I would like order a pizza.', answer: ['I would like to order a pizza.', "I'd like to order a pizza."], tags: ['would like', '오개념'], hints: ['like 와 order 사이를 보세요', '「~하고 싶어요」는 would like to + 동사', 'I would like to order a pizza.'], why: 'would like 뒤에 동사가 오면 to 를 꼭 붙여요: would like to order.' },
  { id: 'E32P7', lesson: 'E32', type: 'type', prompt: '카페에서 주문해 보세요.', ko: '아이스 커피 한 잔 주세요.', answer: ["I'd like an iced coffee, please.", "I'd like an iced coffee.", 'Could I have an iced coffee, please?', 'Could I get an iced coffee, please?', 'Can I get an iced coffee, please?', 'An iced coffee, please.'], tags: ['would like'], hints: ["I'd like 로 시작해요", "I'd like + an iced coffee + please", "I'd like an iced coffee, please."] },
  { id: 'E32P8', lesson: 'E32', type: 'type', prompt: '식당에서 공손하게 부탁해 보세요.', ko: '계산서 좀 주시겠어요?', answer: ['Could I have the bill, please?', 'Could I have the bill?', 'Could I get the bill, please?', 'Could we have the bill, please?', 'Can I have the bill, please?', 'Could you bring the bill, please?'], tags: ['공손한 부탁'], hints: ['Could I …? 로 시작해요', 'Could I have + the bill + please', 'Could I have the bill, please?'] },
  { id: 'E32P9', lesson: 'E32', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Could you say that again?', ko: '다시 한번 말씀해 주시겠어요?', roles: 'Q S V O M', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'Could you 는 이어서 「쿠쥬」', 'Could you say that again?'] },

  // E33
  { id: 'E33P1', lesson: 'E33', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'My brother is ___ than me.', opts: ['taller', 'more tall', 'tallest'], ans: 0, tags: ['비교급'], hints: ['than(~보다)이 있어요', 'tall 은 짧은 말 → -er', 'My brother is taller than me.'], why: 'tall 같은 짧은 말은 -er 을 붙여 비교해요: taller than.' },
  { id: 'E33P2', lesson: 'E33', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'This is ___ restaurant in town.', opts: ['the best', 'the goodest', 'better'], ans: 0, tags: ['최상급'], hints: ['「동네에서 제일」이에요', 'good 의 최상급은 모양이 달라요', 'This is the best restaurant in town.'], why: 'good → better → the best. goodest 라는 말은 없어요.' },
  { id: 'E33P3', lesson: 'E33', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'The subway is faster than the bus.', opts: ['지하철이 버스보다 빨라요.', '버스가 지하철보다 빨라요.', '지하철이 가장 빨라요.'], ans: 0, tags: ['듣기', '비교급'], hints: ['무엇이 먼저 나왔나요?', 'A is faster than B = A 가 B 보다 빨라요', '지하철이 버스보다 빨라요.'] },
  { id: 'E33P4', lesson: 'E33', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '오늘이 어제보다 추워요.', answer: ['Today is colder than yesterday.', "It's colder today than yesterday."], cards: ['Today', 'is', 'colder', 'than yesterday.'], roles: 'S V C M', tags: ['비교급'], hints: ['파랑(주어)은 Today', '초록은 colder, 회색은 than yesterday', 'Today is colder than yesterday.'] },
  { id: 'E33P5', lesson: 'E33', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이 가방이 저것보다 더 싸요.', answer: ['This bag is cheaper than that one.', 'This bag is cheaper than that bag.'], cards: ['This bag', 'is', 'cheaper', 'than', 'that one.'], distractors: ['more'], tags: ['비교급'], hints: ['This bag is 로 시작해요', 'cheap 은 짧은 말 → cheaper', 'This bag is cheaper than that one.'] },
  { id: 'E33P6', lesson: 'E33', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '이 폰이 내 것보다 더 커요.', wrong: 'This phone is more bigger than mine.', answer: ['This phone is bigger than mine.'], tags: ['비교급', '오개념'], hints: ['비교하는 말이 두 번 들어갔어요', 'bigger 에 이미 「더」가 들어 있어요', 'This phone is bigger than mine.'], why: '-er 과 more 는 함께 쓰지 않아요: bigger (more bigger ✗).' },
  { id: 'E33P7', lesson: 'E33', type: 'fill', prompt: '빈칸에 알맞은 말을 고르거나 쓰세요.', text: 'Seoul is ___ city in Korea.', blanks: [{ a: ['the biggest', 'the largest'], opt: ['the biggest', 'the most big', 'bigger'] }], tags: ['최상급'], hints: ['「한국에서 가장 큰」이에요', 'big 의 최상급은 g 를 하나 더 → biggest', 'Seoul is the biggest city in Korea.'], why: 'big 같은 짧은 말의 최상급은 the + -est: the biggest.' },
  { id: 'E33P8', lesson: 'E33', type: 'type', prompt: '영어로 써 보세요.', ko: '이 책이 저 책보다 더 재미있어요.', answer: ['This book is more interesting than that one.', 'This book is more interesting than that book.', 'This book is more fun than that one.', 'This book is more fun than that book.'], tags: ['비교급'], hints: ['interesting 은 긴 말이에요', 'more interesting than', 'This book is more interesting than that one.'] },
  { id: 'E33P9', lesson: 'E33', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'This is the best restaurant in town.', ko: '여기가 동네에서 제일 좋은 식당이에요.', roles: 'S V C M', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'the best 에 힘을 줘요', 'This is the best restaurant in town.'] },

  // E34
  { id: 'E34P1', lesson: 'E34', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'There ___ two beds in the room.', opts: ['are', 'is', 'am'], ans: 0, tags: ['There is/are'], hints: ['침대가 몇 개예요?', '둘 이상이면 are', 'There are two beds in the room.'], why: '있는 것이 여럿(two beds)이면 There are 예요.' },
  { id: 'E34P2', lesson: 'E34', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: '___ a bank near here?', opts: ['Is there', 'Are there', 'There is'], ans: 0, tags: ['There is/are', '질문'], hints: ['물음표가 있어요 → 질문', '은행은 하나(a bank) → is', 'Is there a bank near here?'], why: '「~ 있어요?」는 Is there …? 하나면 is, 여럿이면 are.' },
  { id: 'E34P3', lesson: 'E34', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "There isn't any hot water.", opts: ['뜨거운 물이 안 나와요.', '뜨거운 물이 너무 뜨거워요.', '찬물이 안 나와요.'], ans: 0, tags: ['듣기', 'There is/are'], hints: ["isn't 가 들렸나요?", 'hot water = 뜨거운 물', '뜨거운 물이 안 나와요.'] },
  { id: 'E34P4', lesson: 'E34', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '우리 집 근처에 카페가 있어요.', answer: ['There is a cafe near my house.', "There's a cafe near my house."], cards: ['There is', 'a cafe', 'near my house.'], roles: 'V S M', tags: ['There is/are'], hints: ['빨강(있어요)은 There is', '파랑(무엇이)은 a cafe', 'There is a cafe near my house.'] },
  { id: 'E34P5', lesson: 'E34', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '우리 반에는 학생이 열 명 있어요.', answer: ['There are ten students in my class.', 'There are ten students in our class.'], cards: ['There', 'are', 'ten', 'students', 'in my class.'], distractors: ['is'], tags: ['There is/are'], hints: ['학생이 여럿이에요', 'There are + ten students', 'There are ten students in my class.'] },
  { id: 'E34P6', lesson: 'E34', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '차에 세 사람이 있어요.', wrong: 'There is three people in the car.', answer: ['There are three people in the car.'], tags: ['There is/are', '오개념'], hints: ['사람이 몇 명이에요?', '여럿이면 is 가 아니라 are', 'There are three people in the car.'], why: 'three people 은 여럿이라 There are 를 써요.' },
  { id: 'E34P7', lesson: 'E34', type: 'type', prompt: '길에서 물어보세요.', ko: '이 근처에 약국 있어요?', answer: ['Is there a pharmacy near here?', 'Is there a pharmacy nearby?', 'Is there a pharmacy around here?', 'Is there a drugstore near here?', 'Is there a drugstore nearby?'], tags: ['There is/are', '질문'], hints: ['Is there 로 시작해요', '약국 = a pharmacy, 이 근처 = near here', 'Is there a pharmacy near here?'] },
  { id: 'E34P8', lesson: 'E34', type: 'type', prompt: '호텔 프런트에 말해 보세요.', ko: '제 방에 문제가 있어요.', answer: ['There is a problem with my room.', "There's a problem with my room.", 'There is a problem in my room.', 'I have a problem with my room.'], tags: ['There is/are'], hints: ['There is 로 시작해요', 'a problem + with my room', 'There is a problem with my room.'] },
  { id: 'E34P9', lesson: 'E34', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Are there any good restaurants around here?', ko: '이 근처에 괜찮은 식당 있어요?', roles: 'Q S M', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'Are there 를 이어서 「아데어」', 'Are there any good restaurants around here?'] },

  // B6 보스 — 숙소 체크인
  { id: 'B6P1', lesson: 'B6', boss: true, type: 'listen', prompt: '호텔 프런트에 왔어요. 직원이 말해요. 무슨 뜻일까요?', say: 'Hello. How can I help you?', opts: ['안녕하세요. 무엇을 도와드릴까요?', '안녕하세요. 어디로 가세요?', '안녕하세요. 몇 분이세요?'], ans: 0, tags: ['듣기', '호텔'], hints: ['help 가 들렸나요?', 'How can I help you? = 도와드릴까요?', '안녕하세요. 무엇을 도와드릴까요?'] },
  { id: 'B6P2', lesson: 'B6', boss: true, type: 'order', prompt: '체크인하겠다고 말하세요. 필요 없는 카드도 있어요.', ko: '체크인하려고요.', answer: ["I'd like to check in, please.", "I'd like to check in.", 'I would like to check in, please.'], cards: ["I'd", 'like', 'to', 'check in,', 'please.'], distractors: ['likes'], tags: ['would like', '호텔'], hints: ["I'd like 로 시작해요", "I'd like to + check in", "I'd like to check in, please."] },
  { id: 'B6P3', lesson: 'B6', boss: true, type: 'listen', prompt: '직원이 방을 추천해요. 무슨 뜻일까요?', say: "The room with a view is bigger, but it's more expensive.", opts: ['전망 좋은 방이 더 크지만, 더 비싸요.', '전망 좋은 방이 더 작지만, 더 싸요.', '전망 좋은 방이 가장 크고 가장 싸요.'], ans: 0, tags: ['듣기', '비교급'], hints: ['bigger 와 more expensive 를 들어 보세요', 'bigger = 더 큰, more expensive = 더 비싼', '전망 좋은 방이 더 크지만, 더 비싸요.'] },
  { id: 'B6P4', lesson: 'B6', boss: true, type: 'type', prompt: '더 싼 방을 고르세요.', ko: '더 싼 방으로 할게요.', answer: ["I'll take the cheaper room.", "I'd like the cheaper room.", 'The cheaper room, please.', "I'll take the cheaper one.", "I'd like the cheaper one."], tags: ['비교급', '호텔'], hints: ['고를 때는 I\'ll take …', 'cheap → cheaper, 앞에 the', "I'll take the cheaper room."] },
  { id: 'B6P5', lesson: 'B6', boss: true, type: 'choice', prompt: '체크아웃 시간을 물어보세요. 빈칸에 맞는 말은?', q: 'What time ___ check out?', opts: ['do I have to', 'I have to', 'does I have to'], ans: 0, tags: ['have to', '질문'], hints: ['질문이에요', 'have to 질문은 do 가 앞으로', 'What time do I have to check out?'], why: 'have to 를 물을 때는 Do I have to …? 처럼 do 를 앞에 써요. I 에는 does 가 아니라 do.' },
  { id: 'B6P6', lesson: 'B6', boss: true, type: 'fill', prompt: '방에 들어가 보니 문제가 있어요. 프런트에 전화해요. 빈칸을 채우세요.', text: "Hi, this is room 512. ___ no hot water in the bathroom.", blanks: [{ a: ["There's", 'There is'], opt: ["There's", 'There are', "It's"] }], tags: ['There is/are', '호텔'], hints: ['무엇이 「없다/있다」고 알려 줘요', '물(water)은 하나로 셈해요 → is', "There's no hot water in the bathroom."], why: '「~이 있어요/없어요」는 There is. water 는 셀 수 없어서 is 를 써요.' },
  { id: 'B6P7', lesson: 'B6', boss: true, type: 'type', prompt: '사람을 보내 달라고 공손하게 부탁하세요.', ko: '누구 좀 올려 보내 주시겠어요?', answer: ['Could you send someone up?', 'Could you send someone up, please?', 'Could you please send someone up?', 'Can you send someone up?', 'Could you send somebody up?', 'Could you send someone to my room?'], tags: ['공손한 부탁', '호텔'], hints: ['Could you 로 시작해요', 'send someone up = 사람을 올려 보내다', 'Could you send someone up?'] },
  { id: 'B6P8', lesson: 'B6', boss: true, type: 'speak', prompt: '마지막 부탁! 🔊 듣고 따라 말해 보세요.', say: 'Could I have an extra towel, please?', ko: '수건 하나 더 주시겠어요?', tags: ['말하기', '호텔'], hints: ['🐢 로 천천히 들어 보세요', 'an extra 를 이어서 「언엑스트라」', 'Could I have an extra towel, please?'] },
);
