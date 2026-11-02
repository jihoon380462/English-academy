// courses/talk/parts/t3.js — 챕터 3 「상황 회화 미션」: 레슨 T9~T12 + 보스 TB3. 스키마는 courses/basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 3, title: '상황 회화 미션', icon: '🎬', desc: '전화·병원·가게·회의 — 실제 상황에서 상대 말을 듣고 내 차례에 말해요' },
);
LESSONS.push(
  { id: 'T9', ch: 3, n: 9, title: '전화로 예약하기', minutes: 7,
    pages: [
      { title: '전화 예약은 세 덩어리', html: "<p>전화는 얼굴이 안 보여서 더 어렵게 느껴져요. 하지만 예약은 <b>무엇을 → 몇 명·몇 시 → 이름</b> 순서로 거의 똑같이 흘러가요.</p><p>첫 마디는 <b>I'd like to make a reservation.</b>(예약하고 싶어요) 하나면 충분해요.</p>",
        ex: [{ en: "Hi, I'd like to make a reservation.", ko: '안녕하세요, 예약하고 싶어요.' }, { en: "I'd like to book a table for four at seven.", ko: '7시에 네 명 자리 예약하고 싶어요.' }, { en: 'Under the name Kim, please.', ko: '김 이름으로 해 주세요.' }] },
      { title: '못 알아들었을 땐 다시 부탁해요', html: '<p>전화에서 다시 묻는 건 전혀 실례가 아니에요. <b>Could you …, please?</b> 로 공손하게 부탁해요.</p>',
        ex: [{ en: 'Could you say that again, please?', ko: '다시 한번 말씀해 주시겠어요?' }, { en: 'Could you speak more slowly, please?', ko: '조금 천천히 말씀해 주시겠어요?' }, { en: 'Can I change my reservation to Friday?', ko: '예약을 금요일로 바꿀 수 있을까요?' }] },
    ],
    summary: ["시작: I'd like to make a reservation.", '몇 명·몇 시: a table for four at seven.', '못 들으면: Could you say that again, please?'] },

  { id: 'T10', ch: 3, n: 10, title: '병원에서 증상 말하기', minutes: 7,
    pages: [
      { title: '어디가 아픈지 말하기', html: '<p>증상은 두 가지 틀이면 거의 다 말할 수 있어요. <b>I have a + 증상</b>(headache, fever, cough), <b>My + 몸 부위 + hurts</b>(아파요).</p><p>어지럽거나 피곤한 느낌은 <b>I feel + 상태</b>로 말해요.</p>',
        ex: [{ en: 'I have a headache.', ko: '머리가 아파요.' }, { en: 'My throat hurts.', ko: '목이 아파요.' }, { en: 'I have a fever.', ko: '열이 있어요.' }, { en: 'I feel dizzy.', ko: '어지러워요.' }] },
      { title: '언제부터, 언제 아픈지', html: '<p>의사는 꼭 <b>How long …?</b>(얼마나 됐어요?)을 물어요. <b>… ago</b>(~전에) 또는 <b>since …</b>(~부터)로 답해요.</p>',
        ex: [{ en: 'It started two days ago.', ko: '이틀 전에 시작됐어요.' }, { en: 'It hurts when I swallow.', ko: '삼킬 때 아파요.' }, { en: "I've had a cough since Monday.", ko: '월요일부터 기침을 해요.' }] },
    ],
    summary: ['I have a + 증상 / My + 부위 + hurts.', '언제부터: … ago, since ….', '의사의 첫 질문: What seems to be the problem?'] },

  { id: 'T11', ch: 3, n: 11, title: '쇼핑: 교환·환불', minutes: 7,
    pages: [
      { title: '문제를 먼저 말해요', html: "<p>가게에 가면 먼저 <b>I'd like to return this.</b>(이거 반품하고 싶어요)라고 말하고, 이유를 한 문장 붙여요.</p><p>이유는 <b>It doesn't fit.</b>(안 맞아요), <b>It's too small.</b>, <b>There's a stain on it.</b>(얼룩이 있어요)처럼 짧게.</p>",
        ex: [{ en: "I'd like to return this.", ko: '이거 반품하고 싶어요.' }, { en: "It doesn't fit.", ko: '사이즈가 안 맞아요.' }, { en: "There's a stain on the sleeve.", ko: '소매에 얼룩이 있어요.' }] },
      { title: '교환할까, 환불할까', html: '<p>직원은 보통 <b>refund</b>(환불)인지 <b>exchange</b>(교환)인지, 그리고 <b>receipt</b>(영수증)가 있는지 물어요.</p>',
        ex: [{ en: 'Can I exchange it for a smaller size?', ko: '더 작은 사이즈로 교환할 수 있어요?' }, { en: 'Can I get a refund?', ko: '환불받을 수 있어요?' }, { en: "Here's my receipt.", ko: '여기 영수증이요.' }] },
    ],
    summary: ["시작: I'd like to return this.", "이유: It doesn't fit. / There's a stain on it.", '원하는 것: exchange(교환) 또는 refund(환불).'] },

  { id: 'T12', ch: 3, n: 12, title: '회의에서 의견 말하기', minutes: 8,
    pages: [
      { title: '의견을 꺼내는 말', html: '<p>회의에서는 의견 앞에 <b>I think …</b> 나 <b>In my opinion, …</b> 를 붙이면 부드러워요. 끼어들 땐 <b>Can I add something?</b> 으로 먼저 허락을 구해요.</p>',
        ex: [{ en: 'I think we should wait one more week.', ko: '일주일 더 기다리는 게 좋을 것 같아요.' }, { en: 'In my opinion, the price is too high.', ko: '제 생각엔 가격이 너무 높아요.' }, { en: 'Can I add something here?', ko: '여기에 한 가지 덧붙여도 될까요?' }] },
      { title: '동의하고, 부드럽게 반대하기', html: '<p>동의는 <b>I agree with you.</b> 반대할 땐 먼저 인정하고(<b>That\'s a good point</b>, <b>I see what you mean</b>) <b>but</b> 뒤에 내 생각을 말해요.</p>',
        ex: [{ en: 'I agree with you.', ko: '동의해요.' }, { en: "That's a good point, but I'm not sure.", ko: '좋은 지적인데, 저는 잘 모르겠어요.' }, { en: 'I see what you mean, but the cost is too high.', ko: '무슨 말씀인지 알겠지만 비용이 너무 커요.' }] },
    ],
    summary: ['의견: I think … / In my opinion, ….', '끼어들기: Can I add something?', '반대: 먼저 인정하고(That\'s a good point) but 으로.'] },

  { id: 'TB3', ch: 3, boss: true, title: '상황 미션: 호텔 방 바꾸기', minutes: 8,
    pages: [
      { title: '프런트에 전화해요', html: '<p>출장 첫날 밤, 호텔 방 에어컨이 고장 났어요. 프런트에 전화해서 <b>내 방 번호 → 문제 → 원하는 것</b> 순서로 말하고, 직원의 안내를 들어요.</p>',
        ex: [{ en: "Hi, I'm in Room 512.", ko: '안녕하세요, 512호인데요.' }, { en: "The air conditioner isn't working.", ko: '에어컨이 작동을 안 해요.' }, { en: 'Could I change rooms, please?', ko: '방을 바꿀 수 있을까요?' }, { en: 'Is there a quieter room available?', ko: '더 조용한 방 있어요?' }] },
    ],
    summary: ["방 번호 → 문제 → 부탁: I'm in Room …, … isn't working, Could I change rooms?", '직원의 층·시간 안내를 받아써요.', '끝은 고맙다는 말로: Thank you for your help.'] },
);
PROBLEMS.push(
  // T9 전화 예약
  { id: 'T9P1', lesson: 'T9', type: 'listen', prompt: '식당 직원의 질문을 듣고 뜻을 고르세요.', say: 'How many people will there be?', opts: ['몇 분이세요?', '몇 시에 오세요?', '성함이 어떻게 되세요?'], ans: 0, tags: ['듣기', '예약'], hints: ['How many = 몇 명/몇 개', 'people = 사람들', '몇 분이세요?'] },
  { id: 'T9P2', lesson: 'T9', type: 'listen', prompt: '듣고 뜻을 고르세요.', say: 'What name is the reservation under?', opts: ['어느 분 이름으로 예약할까요?', '예약을 취소할까요?', '예약이 몇 시였죠?'], ans: 0, tags: ['듣기', '예약'], hints: ['What name 으로 시작해요', 'under + 이름 = ~의 이름으로', '어느 분 이름으로 예약할까요?'] },
  { id: 'T9P3', lesson: 'T9', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: "I'd like to ___ a reservation.", opts: ['make', 'do', 'take'], ans: 0, tags: ['예약'], hints: ['예약을 「만든다」고 해요', 'make a reservation', 'make'], why: '예약하다는 make a reservation 이에요. book a table 도 같은 뜻이에요.' },
  { id: 'T9P4', lesson: 'T9', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '7시에 네 명 자리 예약하고 싶어요.', answer: ["I'd like to book a table for four at seven.", 'I would like to book a table for four at seven.', "I'd like to book a table for four at 7."], cards: ["I'd like", 'to book', 'a table', 'for four', 'at seven.'], distractors: ['in seven.'], tags: ['예약'], hints: ["I'd like to book …", '몇 명(for) → 몇 시(at)', "I'd like to book a table for four at seven."] },
  { id: 'T9P5', lesson: 'T9', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'Could you say that again, please?', tags: ['받아쓰기', '전화'], hints: ['Could you 로 시작 (「쿠쥬」)', 'say that again = 다시 말하다', 'Could you say that again, please?'] },
  { id: 'T9P6', lesson: 'T9', type: 'dictation', prompt: '직원이 대안을 말해요. 받아쓰세요.', say: 'We have a table at eight. Is that okay?', answer: ['We have a table at eight. Is that okay?', 'We have a table at 8. Is that okay?', 'We have a table at eight. Is that OK?', 'We have a table at 8. Is that OK?'], tags: ['받아쓰기', '예약'], hints: ['두 문장이에요', 'at eight = 8시에', 'We have a table at eight. Is that okay?'] },
  { id: 'T9P7', lesson: 'T9', type: 'type', prompt: '영어로 말해 보세요(써 보세요).', ko: '김 이름으로 해 주세요.', answer: ['Under the name Kim, please.', 'Under Kim, please.', "It's under Kim.", 'The name is Kim.', 'Under the name Kim.', "It's under the name Kim."], tags: ['예약'], hints: ['under + 이름', 'Under the name …', 'Under the name Kim, please.'] },
  { id: 'T9P8', lesson: 'T9', type: 'speak', prompt: '🔊 전화 첫 마디를 따라 말해 보세요.', say: "Hi, I'd like to make a reservation for tonight.", ko: '안녕하세요, 오늘 저녁 예약하고 싶어요.', tags: ['말하기', '전화'], hints: ["I'd like to 를 한 덩어리로", 'reservation 을 세게', "Hi, I'd like to make a reservation for tonight."] },
  { id: 'T9P9', lesson: 'T9', type: 'speak', prompt: '🔊 천천히 말해 달라고 부탁해 보세요.', say: 'Could you speak more slowly, please?', ko: '조금 천천히 말씀해 주시겠어요?', tags: ['말하기', '전화'], hints: ['Could you → 「쿠쥬」', 'more slowly = 더 천천히', 'Could you speak more slowly, please?'] },

  // T10 병원
  { id: 'T10P1', lesson: 'T10', type: 'listen', prompt: '의사의 첫 질문이에요. 뜻을 고르세요.', say: 'What seems to be the problem?', opts: ['어디가 불편하세요?', '문제가 뭐였어요?', '무슨 일 하세요?'], ans: 0, tags: ['듣기', '병원'], hints: ['병원에서 처음 듣는 말', 'problem = 문제(불편한 점)', '어디가 불편하세요?'] },
  { id: 'T10P2', lesson: 'T10', type: 'listen', prompt: '듣고 뜻을 고르세요.', say: 'How long have you had this cough?', opts: ['기침한 지 얼마나 됐어요?', '기침이 얼마나 심해요?', '기침약 먹었어요?'], ans: 0, tags: ['듣기', '병원'], hints: ['How long = 얼마나 오래', 'cough = 기침', '기침한 지 얼마나 됐어요?'] },
  { id: 'T10P3', lesson: 'T10', type: 'match', prompt: '증상 문장과 뜻을 짝 지으세요.', pairs: [['I have a headache.', '머리가 아파요.'], ['My throat hurts.', '목이 아파요.'], ['I feel dizzy.', '어지러워요.'], ['I have a runny nose.', '콧물이 나요.']], tags: ['병원'], hints: ['headache = 두통', 'throat = 목구멍, dizzy = 어지러운', 'runny nose = 콧물'] },
  { id: 'T10P4', lesson: 'T10', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이틀 전에 시작됐어요.', answer: ['It started two days ago.'], cards: ['It', 'started', 'two', 'days', 'ago.'], distractors: ['starts'], tags: ['병원'], hints: ['지난 일 → 과거형', '기간 + ago', 'It started two days ago.'] },
  { id: 'T10P5', lesson: 'T10', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '머리가 아파요.', wrong: 'My head is hurt.', answer: ['My head hurts.', 'I have a headache.'], tags: ['병원', '오개념'], hints: ['hurt 는 그 자체로 동사예요', 'is 를 빼고 동사에 -s', 'My head hurts.'], why: '「아프다」는 hurt 가 동사예요. 주어가 My head 라 hurts. is hurt 는 「다쳤다」에 가까워요.' },
  { id: 'T10P6', lesson: 'T10', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'It hurts when I swallow.', tags: ['받아쓰기', '병원'], hints: ['It hurts = 아파요', 'when I swallow = 삼킬 때', 'It hurts when I swallow.'] },
  { id: 'T10P7', lesson: 'T10', type: 'type', prompt: '영어로 써 보세요.', ko: '월요일부터 기침을 해요.', answer: ["I've had a cough since Monday.", "I've been coughing since Monday.", 'I have had a cough since Monday.', 'I have been coughing since Monday.'], tags: ['병원'], hints: ['지금까지 이어지는 일 → have had', 'since + 시작한 때', "I've had a cough since Monday."] },
  { id: 'T10P8', lesson: 'T10', type: 'speak', prompt: '🔊 증상을 따라 말해 보세요.', say: 'I have a fever and my throat hurts.', ko: '열이 있고 목이 아파요.', tags: ['말하기', '병원'], hints: ['and 는 약하게 「은」', 'fever, throat 를 세게', 'I have a fever and my throat hurts.'] },
  { id: 'T10P9', lesson: 'T10', type: 'speak', prompt: '🔊 언제 시작됐는지 말해 보세요.', say: 'It started two days ago.', ko: '이틀 전에 시작됐어요.', tags: ['말하기', '병원'], hints: ['started 끝 「티드」', 'two days ago 를 한 덩어리로', 'It started two days ago.'] },

  // T11 쇼핑 교환·환불
  { id: 'T11P1', lesson: 'T11', type: 'listen', prompt: '직원의 질문을 듣고 뜻을 고르세요.', say: 'Do you have the receipt?', opts: ['영수증 있으세요?', '영수증 드릴까요?', '영수증은 필요 없어요?'], ans: 0, tags: ['듣기', '쇼핑'], hints: ['Do you have …? = 갖고 있어요?', 'receipt(리씻) = 영수증', '영수증 있으세요?'] },
  { id: 'T11P2', lesson: 'T11', type: 'listen', prompt: '듣고 뜻을 고르세요.', say: 'Would you like a refund or an exchange?', opts: ['환불할까요, 교환할까요?', '환불은 안 돼요.', '교환하셨나요?'], ans: 0, tags: ['듣기', '쇼핑'], hints: ['or 로 둘 중 하나를 물어요', 'refund = 환불, exchange = 교환', '환불할까요, 교환할까요?'] },
  { id: 'T11P3', lesson: 'T11', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: "It doesn't ___ me. It's too small.", opts: ['fit', 'fits', 'fitted'], ans: 0, tags: ['쇼핑'], hints: ["doesn't 뒤에는 동사 원래 모양", '-s 를 붙이지 않아요', 'fit'], why: "doesn't 뒤에는 동사 원형이 와요: doesn't fit." },
  { id: 'T11P4', lesson: 'T11', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '더 작은 사이즈로 교환할 수 있어요?', answer: ['Can I exchange it for a smaller size?', 'Could I exchange it for a smaller size?'], cards: ['Can I', 'exchange', 'it', 'for', 'a', 'smaller', 'size?'], distractors: ['small'], tags: ['쇼핑'], hints: ['Can I exchange it …?', 'for + 바꿀 것', 'Can I exchange it for a smaller size?'] },
  { id: 'T11P5', lesson: 'T11', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'I bought this here last week.', tags: ['받아쓰기', '쇼핑'], hints: ['bought = 샀다', 'here 와 last week', 'I bought this here last week.'] },
  { id: 'T11P6', lesson: 'T11', type: 'dictation', prompt: '듣고 받아쓰세요.', say: "There's a stain on the sleeve.", tags: ['받아쓰기', '쇼핑'], hints: ["There's = There is", 'stain = 얼룩, sleeve = 소매', "There's a stain on the sleeve."] },
  { id: 'T11P7', lesson: 'T11', type: 'type', prompt: '영어로 써 보세요.', ko: '이거 환불받고 싶어요.', answer: ["I'd like a refund for this.", "I'd like to get a refund for this.", 'Can I get a refund for this?', "I'd like to return this for a refund.", 'I want a refund for this.', 'I would like a refund for this.'], tags: ['쇼핑'], hints: ["I'd like a … 로 공손하게", 'refund = 환불', "I'd like a refund for this."] },
  { id: 'T11P8', lesson: 'T11', type: 'speak', prompt: '🔊 가게에서 첫 마디를 따라 말해 보세요.', say: "I'd like to return this, please.", ko: '이거 반품하고 싶어요.', tags: ['말하기', '쇼핑'], hints: ["I'd like to 는 「아이드라익투」", 'return 을 세게', "I'd like to return this, please."] },
  { id: 'T11P9', lesson: 'T11', type: 'speak', prompt: '🔊 이유와 부탁을 이어서 말해 보세요.', say: "It doesn't fit. Can I get a refund?", ko: '사이즈가 안 맞아요. 환불받을 수 있어요?', tags: ['말하기', '쇼핑'], hints: ["doesn't fit 을 한 덩어리로", 'get a 는 「게러」', "It doesn't fit. Can I get a refund?"] },

  // T12 회의
  { id: 'T12P1', lesson: 'T12', type: 'listen', prompt: '회의 중 들은 말이에요. 뜻을 고르세요.', say: 'What do you think, Jisoo?', opts: ['지수 씨 생각은 어때요?', '지수 씨 뭐 하고 있어요?', '지수 씨 어디 있어요?'], ans: 0, tags: ['듣기', '회의'], hints: ['What do you 「와러유」', 'think = 생각하다', '지수 씨 생각은 어때요?'] },
  { id: 'T12P2', lesson: 'T12', type: 'listen', prompt: '듣고 뜻을 고르세요.', say: "That's a good point, but I'm not sure.", opts: ['좋은 지적인데, 저는 잘 모르겠어요.', '좋은 지적이에요. 확실해요.', '그건 좋은 생각이 아니에요.'], ans: 0, tags: ['듣기', '회의'], hints: ['but 뒤가 진짜 의견', "not sure = 확신이 없다", '좋은 지적인데, 저는 잘 모르겠어요.'] },
  { id: 'T12P3', lesson: 'T12', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ with you.', opts: ['agree', 'am agree', 'agreeing'], ans: 0, tags: ['회의', '오개념'], hints: ['agree 는 그 자체로 동사예요', 'be동사가 필요 없어요', 'agree'], why: 'agree(동의하다)는 동사라 I agree 예요. I am agree 는 흔한 실수예요.' },
  { id: 'T12P4', lesson: 'T12', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '일주일 더 기다리는 게 좋을 것 같아요.', answer: ['I think we should wait one more week.', 'I think we should wait another week.'], cards: ['I think', 'we', 'should', 'wait', 'one more', 'week.'], distractors: ['waits'], tags: ['회의'], hints: ['I think 로 부드럽게', 'should 뒤엔 동사 원형', 'I think we should wait one more week.'] },
  { id: 'T12P5', lesson: 'T12', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'Can I add something here?', tags: ['받아쓰기', '회의'], hints: ['Can I 로 시작', 'add something = 덧붙이다', 'Can I add something here?'] },
  { id: 'T12P6', lesson: 'T12', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'I see what you mean, but the cost is too high.', tags: ['받아쓰기', '회의'], hints: ['I see what you mean = 무슨 말인지 알아요', 'but 뒤에 반대 의견', 'I see what you mean, but the cost is too high.'] },
  { id: 'T12P7', lesson: 'T12', type: 'type', prompt: '영어로 써 보세요.', ko: '저도 같은 생각이에요.', answer: ['I agree.', 'I agree with you.', 'I think so too.', 'I feel the same way.', "I'm with you.", 'Same here.'], tags: ['회의'], hints: ['동의하다 = agree', 'I agree (with you).', 'I agree with you.'] },
  { id: 'T12P8', lesson: 'T12', type: 'speak', prompt: '🔊 의견을 따라 말해 보세요.', say: 'In my opinion, we need more time.', ko: '제 생각엔 시간이 더 필요해요.', tags: ['말하기', '회의'], hints: ['In my opinion 뒤에 살짝 쉬어요', 'more time 을 세게', 'In my opinion, we need more time.'] },
  { id: 'T12P9', lesson: 'T12', type: 'speak', prompt: '🔊 부드럽게 반대해 보세요.', say: "I see what you mean, but I'm not sure.", ko: '무슨 말씀인지 알겠는데, 저는 잘 모르겠어요.', tags: ['말하기', '회의'], hints: ['what you → 「왓츄」', 'but 뒤를 또렷하게', "I see what you mean, but I'm not sure."] },

  // TB3 호텔
  { id: 'TB3P1', lesson: 'TB3', type: 'listen', boss: true, prompt: '프런트가 전화를 받아요. 무슨 뜻일까요?', say: 'Front desk. How can I help you?', opts: ['프런트입니다. 무엇을 도와드릴까요?', '프런트로 오세요.', '저 좀 도와주실래요?'], ans: 0, tags: ['듣기', '호텔'], hints: ['Front desk = 프런트', 'How can I help you? = 도와드릴까요?', '프런트입니다. 무엇을 도와드릴까요?'] },
  { id: 'TB3P2', lesson: 'TB3', type: 'speak', boss: true, prompt: '🔊 내 방 번호를 말해요.', say: "Hi, I'm in Room 512.", ko: '안녕하세요, 512호인데요.', tags: ['말하기', '호텔'], hints: ["I'm in Room + 번호", '512 = five twelve', "Hi, I'm in Room 512."] },
  { id: 'TB3P3', lesson: 'TB3', type: 'order', boss: true, prompt: '문제를 말해요. 카드를 순서대로 놓으세요.', ko: '에어컨이 작동을 안 해요.', answer: ["The air conditioner isn't working.", 'The air conditioner is not working.', "The air conditioner doesn't work."], cards: ['The', 'air conditioner', "isn't", 'working.'], distractors: ["aren't"], tags: ['호텔'], hints: ['주어: The air conditioner', "지금 안 되는 상태 → isn't working", "The air conditioner isn't working."] },
  { id: 'TB3P4', lesson: 'TB3', type: 'listen', boss: true, prompt: '직원의 대답이에요. 무슨 뜻일까요?', say: "I'm sorry about that. I can send someone up right away.", opts: ['죄송합니다. 바로 사람을 올려 보낼게요.', '죄송합니다. 지금은 사람이 없어요.', '죄송합니다. 내일 고쳐 드릴게요.'], ans: 0, tags: ['듣기', '호텔'], hints: ['send someone up = 사람을 올려 보내다', 'right away = 바로', '죄송합니다. 바로 사람을 올려 보낼게요.'] },
  { id: 'TB3P5', lesson: 'TB3', type: 'type', boss: true, prompt: '고쳐도 시끄러워요. 방을 바꿔 달라고 써 보세요.', ko: '방을 바꿀 수 있을까요?', answer: ['Could I change rooms?', 'Can I change rooms?', 'Could I change my room?', 'Can I change my room?', 'Could I move to another room?', 'Can I move to a different room?'], tags: ['호텔'], hints: ['Could I …? 로 공손하게', 'change rooms (rooms 복수)', 'Could I change rooms?'] },
  { id: 'TB3P6', lesson: 'TB3', type: 'dictation', boss: true, prompt: '직원의 안내를 받아쓰세요.', say: 'We have a room on the tenth floor. Is that okay?', answer: ['We have a room on the tenth floor. Is that okay?', 'We have a room on the 10th floor. Is that okay?', 'We have a room on the tenth floor. Is that OK?', 'We have a room on the 10th floor. Is that OK?'], tags: ['받아쓰기', '호텔'], hints: ['on the … floor = …층', 'TENth 는 서수(10번째)', 'We have a room on the tenth floor. Is that okay?'] },
  { id: 'TB3P7', lesson: 'TB3', type: 'dictation', boss: true, prompt: '새 방 열쇠를 받아요. 받아쓰세요.', say: "Here's your new key card.", tags: ['받아쓰기', '호텔'], hints: ["Here's = Here is", 'new key card = 새 카드 열쇠', "Here's your new key card."] },
  { id: 'TB3P8', lesson: 'TB3', type: 'speak', boss: true, prompt: '🔊 고맙다고 말하며 마무리해요.', say: "That's perfect. Thank you for your help.", ko: '딱 좋아요. 도와주셔서 고마워요.', tags: ['말하기', '호텔'], hints: ["That's perfect = 딱 좋아요", 'Thank you for + 고마운 것', "That's perfect. Thank you for your help."] },
);
