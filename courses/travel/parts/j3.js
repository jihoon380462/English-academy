// courses/travel/parts/j3.js — 챕터 3 「식당·카페·쇼핑」: 레슨 J9~J12 + 보스 JB3. 스키마는 courses/basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 3, title: '식당·카페·쇼핑', icon: '🍽️', desc: '자리 잡기, 주문과 알레르기, 계산과 팁, 옷 사이즈·교환·환불까지 — 먹고 사는 영어' },
);
LESSONS.push(
  { id: 'J9', ch: 3, n: 9, title: '예약·자리 잡기', minutes: 7,
    pages: [
      { title: '전화로 예약하기', html: '<p>예약은 <b>I\'d like to book a table for + 인원 + at + 시각</b> 하나로 끝나요. 직원은 인원과 이름을 다시 물어요.</p>',
        ex: [{ en: "I'd like to book a table for two at seven.", ko: '7시에 두 명 자리 예약하고 싶어요.' }, { en: 'How many in your party?', ko: '일행이 몇 분이세요?', note: 'party 는 여기서 「파티」가 아니라 <b>일행</b>이에요.' }, { en: 'Can I get a name for the reservation?', ko: '예약자 성함 알려 주시겠어요?' }] },
      { title: '예약 없이 갔을 때', html: '<p>입구에서 <b>a table for two</b>(두 명 자리)처럼 인원만 말해도 돼요. 자리가 없으면 기다리는 시간(<b>wait</b>)을 알려 줘요.</p>',
        ex: [{ en: 'Do you have a reservation?', ko: '예약하셨어요?' }, { en: "We don't have a reservation. How long is the wait?", ko: '예약은 안 했어요. 얼마나 기다려야 해요?' }, { en: "It'll be about a twenty-minute wait.", ko: '20분쯤 기다리셔야 해요.' }] },
      { title: '원하는 자리 말하기', html: '<p>원하는 자리는 <b>Could we sit …?</b> 또는 <b>Could we get a table …?</b> 으로 부탁해요. 창가는 <b>by the window</b>, 바깥은 <b>outside</b>.</p>',
        ex: [{ en: 'Could we sit by the window?', ko: '창가에 앉을 수 있을까요?' }, { en: 'Could we get a table outside?', ko: '바깥 자리에 앉을 수 있을까요?' }, { en: 'Your table is ready. Please follow me.', ko: '자리 준비됐어요. 따라오세요.' }] },
    ],
    summary: ['예약: <b>I\'d like to book a table for two at seven.</b>', '그냥 갔을 때: <b>A table for two, please.</b> / 대기: <b>How long is the wait?</b>', '자리 부탁: <b>Could we sit by the window?</b>'] },

  { id: 'J10', ch: 3, n: 10, title: '주문·알레르기', minutes: 8, terms: { '알레르기': '어떤 음식을 먹으면 몸이 탈 나는 것. 영어로 말할 땐 allergic(형용사)을 써요' },
    pages: [
      { title: '주문 받는 말 듣기', html: '<p>직원은 주문할 준비가 됐는지, 고기를 어떻게 구울지(<b>How would you like …?</b>) 물어요. 고민 중이면 <b>We need a few more minutes</b> 라고 하면 돼요.</p>',
        ex: [{ en: 'Are you ready to order, or do you need a few more minutes?', ko: '주문하시겠어요, 아니면 좀 더 보시겠어요?' }, { en: 'How would you like your steak?', ko: '스테이크 굽기는 어떻게 해 드릴까요?' }, { en: 'Medium, please.', ko: '미디엄으로 주세요.' }] },
      { title: '주문하기', html: '<p>주문은 <b>I\'ll have …</b>(…로 할게요)가 가장 편해요. 바꾸고 싶으면 <b>instead of</b>(… 대신에)를 써요.</p>',
        ex: [{ en: "I'll have the chicken salad, please.", ko: '치킨 샐러드로 할게요.' }, { en: 'What do you recommend?', ko: '뭘 추천하세요?' }, { en: 'Could I get a salad instead of fries?', ko: '감자튀김 대신 샐러드로 받을 수 있을까요?' }] },
      { title: '알레르기·빼 달라기', html: '<p>알레르기는 <b>I\'m allergic to + 음식</b>. 들어가는지 물을 땐 <b>Does this have … in it?</b>, 빼 달라고 할 땐 <b>without</b> 이에요.</p>',
        ex: [{ en: "I'm allergic to peanuts.", ko: '땅콩 알레르기가 있어요.' }, { en: 'Does this dish have any nuts in it?', ko: '이 요리에 견과류 들어가요?' }, { en: 'Could you make it without onions?', ko: '양파 빼고 해 주실 수 있어요?' }], tip: '알레르기가 심하면 미리 영어로 적은 메모를 보여 주는 것도 좋아요.' },
    ],
    summary: ['주문: <b>I\'ll have …</b> / 추천: <b>What do you recommend?</b>', '바꾸기: <b>… instead of …</b> · 빼기: <b>without …</b>', '알레르기: <b>I\'m allergic to …</b>'] },

  { id: 'J11', ch: 3, n: 11, title: '계산·팁', minutes: 7, terms: { '팁': '서비스에 고마움을 표시하려고 음식값과 따로 주는 돈(tip). 미국에서는 보통 15~20%' },
    pages: [
      { title: '계산서 부르기', html: '<p>미국식은 <b>check</b>, 영국식은 <b>bill</b> 이에요. 자리에서 직원에게 <b>Could we get the check?</b> 라고 하면 테이블로 가져다줘요.</p>',
        ex: [{ en: 'Could we get the check, please?', ko: '계산서 좀 주시겠어요?' }, { en: 'Can we pay separately?', ko: '따로 계산해도 될까요?' }, { en: 'Is the tip included?', ko: '팁이 포함돼 있어요?' }] },
      { title: '직원이 묻는 말', html: '<p>계산할 때는 결제 방법, 더 필요한 것, 영수증을 물어요. 가격은 숫자를 이어서 말해요: forty-two eighty = $42.80.</p>',
        ex: [{ en: 'Will that be cash or card?', ko: '현금이세요, 카드세요?' }, { en: 'Can I get you anything else?', ko: '더 필요한 거 있으세요?' }, { en: 'Would you like a receipt?', ko: '영수증 드릴까요?' }] },
      { title: '팁 주기', html: '<p>현금으로 내고 거스름돈을 팁으로 주려면 <b>Keep the change</b>. 카드로 낼 땐 팁을 카드 금액에 더해 달라고 할 수 있어요.</p>',
        ex: [{ en: 'Keep the change.', ko: '잔돈은 가지세요.' }, { en: 'Can I put the tip on my card?', ko: '팁도 카드로 같이 낼 수 있어요?' }] },
    ],
    summary: ['계산서: <b>Could we get the check, please?</b>', '따로 계산: <b>Can we pay separately?</b>', '팁: <b>Keep the change. / Is the tip included?</b>'] },

  { id: 'J12', ch: 3, n: 12, title: '쇼핑: 사이즈·교환·환불', minutes: 8,
    pages: [
      { title: '매장에서', html: '<p>직원이 다가오면 <b>I\'m just looking</b>(그냥 구경 중이에요)이라고 해도 괜찮아요. 사이즈는 <b>in + 사이즈</b>, 입어 보는 건 <b>try on</b> 이에요.</p>',
        ex: [{ en: "I'm just looking, thanks.", ko: '그냥 둘러보는 중이에요, 고마워요.' }, { en: 'Do you have this in a medium?', ko: '이거 미디엄 사이즈 있어요?' }, { en: 'Can I try this on?', ko: '이거 입어 봐도 돼요?' }] },
      { title: '계산할 때', html: '<p>세일인지, 세금 환급(<b>tax refund</b>)이 되는지 물어볼 수 있어요. 여권이 필요한 경우가 많아요.</p>',
        ex: [{ en: 'Is this on sale?', ko: '이거 세일 중이에요?' }, { en: 'Can I get a tax refund?', ko: '세금 환급 받을 수 있어요?' }] },
      { title: '교환·환불', html: '<p>반품은 <b>return</b>, 교환은 <b>exchange A for B</b>(A 를 B 로 바꾸다)예요. 직원은 거의 항상 영수증(<b>receipt</b>)을 물어요.</p>',
        ex: [{ en: "I'd like to return this, please.", ko: '이거 반품하고 싶어요.' }, { en: 'Could I exchange this for a larger size?', ko: '이거 더 큰 사이즈로 교환할 수 있을까요?' }, { en: 'Do you have the receipt?', ko: '영수증 있으세요?' }] },
    ],
    summary: ['구경 중: <b>I\'m just looking, thanks.</b>', '사이즈: <b>Do you have this in a medium?</b> / 입어 보기: <b>try on</b>', '반품 <b>return</b>, 교환 <b>exchange … for …</b>, 영수증 <b>receipt</b>.'] },

  { id: 'JB3', ch: 3, boss: true, title: '상황 미션: 레스토랑에서 주문부터 계산까지', minutes: 8,
    pages: [
      { title: '지수와 저녁 식사', html: '<p>친구 지수와 예약 없이 레스토랑에 왔어요. 자리를 잡고, 치즈를 빼고 주문하고, 잘못 나온 음식을 바로잡고, 마지막에 따로 계산하며 팁까지 내요.</p>',
        ex: [{ en: 'Hi, do you have a table for two?', ko: '안녕하세요, 두 명 자리 있어요?' }, { en: "I'll have the pasta, but no cheese, please.", ko: '파스타로 할게요, 치즈는 빼 주세요.' }, { en: "Excuse me, I think this isn't what I ordered.", ko: '실례지만 이건 제가 주문한 게 아닌 것 같아요.' }] },
    ],
    summary: ['입구: <b>A table for two? / We don\'t have a reservation.</b>', '주문 + 빼기: <b>I\'ll have …, but no …</b>', '잘못 나왔을 때: <b>I think this isn\'t what I ordered.</b>'] },
);
PROBLEMS.push(
  // J9 예약·자리
  { id: 'J9P1', lesson: 'J9', type: 'listen', prompt: '식당 입구에서 직원이 물어요. 무슨 뜻일까요?', say: 'How many in your party?', opts: ['일행이 몇 분이세요?', '파티는 몇 시예요?', '몇 시에 오셨어요?'], ans: 0, tags: ['듣기', '식당'], hints: ['How many = 몇', 'party = 일행', '일행이 몇 분이세요?'] },
  { id: 'J9P2', lesson: 'J9', type: 'listen', prompt: '자리가 다 찼대요. 직원이 말해요.', say: "It'll be about a twenty-minute wait.", opts: ['20분쯤 기다리셔야 해요.', '20분 뒤에 문 닫아요.', '2분만 기다리세요.'], ans: 0, tags: ['듣기', '식당'], hints: ['wait = 기다림', 'twenty-minute = 20분짜리', '20분쯤 기다리셔야 해요.'] },
  { id: 'J9P3', lesson: 'J9', type: 'choice', prompt: '둘이서 예약 없이 왔어요. 입구에서 뭐라고 할까요?', opts: ["Hi, a table for two, please. We don't have a reservation.", 'Hi, two tables, please. We have a reservation.', "Hi, a reservation for two, please. We don't have a table."], ans: 0, sayOpts: true, tags: ['식당', '자리'], hints: ['두 명 자리 = a table for two', '예약은 없어요', "A table for two … We don't have a reservation."], why: '자리 하나에 두 명이니 a table for two. two tables 는 테이블 두 개예요.' },
  { id: 'J9P4', lesson: 'J9', type: 'listen', prompt: '전화로 예약하는데 직원이 물어요.', say: 'Can I get a name for the reservation?', opts: ['예약자 성함 알려 주시겠어요?', '예약을 취소하시겠어요?', '예약 번호가 어떻게 되세요?'], ans: 0, tags: ['듣기', '예약'], hints: ['a name = 이름', 'for the reservation = 예약용', '예약자 성함 알려 주시겠어요?'] },
  { id: 'J9P5', lesson: 'J9', type: 'order', prompt: '전화로 예약해요. 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '7시에 두 명 자리 예약하고 싶어요.', answer: ["I'd like to book a table for two at seven.", "I'd like to book a table for two at 7.", 'I would like to book a table for two at seven.', "I'd like to reserve a table for two at seven."], cards: ["I'd like", 'to book', 'a table', 'for two', 'at seven.'], distractors: ['in seven.'], tags: ['예약'], hints: ["I'd like to book …", '인원은 for, 시각은 at', "I'd like to book a table for two at seven."] },
  { id: 'J9P6', lesson: 'J9', type: 'fill', prompt: '창가 자리가 좋아요. 빈칸에 알맞은 말을 고르세요.', text: 'Could we sit ___ the window?', blanks: [{ a: ['by', 'near'], opt: ['by', 'in', 'on'] }], tags: ['자리', '부탁'], hints: ['창문 「옆에」', 'by = 바로 옆에', 'by'], why: 'by the window 는 「창가에」. in the window 는 창문 「안」, on the window 는 창문 「위」라서 어색해요.' },
  { id: 'J9P7', lesson: 'J9', type: 'type', prompt: '영어로 써 보세요.', ko: '얼마나 기다려야 해요?', answer: ['How long is the wait?', 'How long do we have to wait?', 'How long do I have to wait?', 'How long will we have to wait?', 'How long will it be?', 'How long is the wait now?', 'How long do we need to wait?', 'How long should we wait?', 'How long will the wait be?'], tags: ['식당', '질문'], hints: ['How long 으로 시작', 'the wait = 기다리는 시간', 'How long is the wait?'] },
  { id: 'J9P8', lesson: 'J9', type: 'dictation', prompt: '진동벨이 울렸어요. 직원의 말을 받아쓰세요.', say: 'Your table is ready. Please follow me.', tags: ['받아쓰기', '식당'], hints: ['Your table is ready 로 시작', 'follow me = 따라오세요', 'Your table is ready. Please follow me.'] },
  { id: 'J9P9', lesson: 'J9', type: 'speak', prompt: '🔊 날씨가 좋아요. 바깥 자리를 부탁해 보세요.', say: 'Could we get a table outside?', ko: '바깥 자리에 앉을 수 있을까요?', tags: ['말하기', '자리'], hints: ['Could we get …?', 'a table outside = 바깥 자리', 'Could we get a table outside?'] },

  // J10 주문·알레르기
  { id: 'J10P1', lesson: 'J10', type: 'listen', prompt: '직원이 테이블에 와서 물어요.', say: 'Are you ready to order, or do you need a few more minutes?', opts: ['주문하시겠어요, 아니면 좀 더 보시겠어요?', '주문하신 음식은 몇 분 뒤에 나와요.', '몇 분이서 주문하시겠어요?'], ans: 0, tags: ['듣기', '주문'], hints: ['ready to order = 주문할 준비가 된', 'a few more minutes = 몇 분 더', '주문하시겠어요, 아니면 좀 더 보시겠어요?'] },
  { id: 'J10P2', lesson: 'J10', type: 'listen', prompt: '스테이크를 시켰더니 직원이 물어요.', say: 'How would you like your steak?', opts: ['스테이크 굽기는 어떻게 해 드릴까요?', '스테이크 맛이 어떠세요?', '스테이크를 몇 개 드릴까요?'], ans: 0, tags: ['듣기', '주문'], hints: ['How would you like … = 어떻게 해 드릴까요', '굽기를 묻는 말', '스테이크 굽기는 어떻게 해 드릴까요?'] },
  { id: 'J10P3', lesson: 'J10', type: 'choice', prompt: '메뉴가 너무 많아 고르기 어려워요. 직원에게 뭐라고 물을까요?', opts: ['What do you recommend?', 'What did you order?', 'What do you want to eat?'], ans: 0, sayOpts: true, tags: ['주문', '질문'], hints: ['추천하다 = recommend', 'What do you …?', 'What do you recommend?'], why: '직원에게 추천을 부탁하는 말은 What do you recommend? 예요. 나머지는 상대가 뭘 시켰는지, 뭘 먹고 싶은지 묻는 말이에요.' },
  { id: 'J10P4', lesson: 'J10', type: 'match', prompt: '주문할 때 쓰는 문장과 뜻을 짝 지으세요.', pairs: [["I'm allergic to peanuts.", '땅콩 알레르기가 있어요.'], ['Is this spicy?', '이거 매워요?'], ['Could you make it without onions?', '양파 빼고 해 주실 수 있어요?'], ["I'll have the chicken salad.", '치킨 샐러드로 할게요.']], tags: ['주문', '알레르기'], hints: ['allergic to = …에 알레르기가 있는', 'without = …없이', "I'll have = …로 할게요"] },
  { id: 'J10P5', lesson: 'J10', type: 'order', prompt: '견과류가 들어가는지 확인해요. 필요 없는 카드도 있어요.', ko: '이 요리에 견과류 들어가요?', answer: ['Does this dish have any nuts in it?', 'Does this dish have nuts in it?', 'Does this have any nuts in it?', 'Are there any nuts in this dish?'], cards: ['Does', 'this dish', 'have', 'any nuts', 'in it?'], distractors: ['Do'], tags: ['알레르기', '질문'], hints: ['this dish 는 하나 → Does', 'Does … have … in it?', 'Does this dish have any nuts in it?'] },
  { id: 'J10P6', lesson: 'J10', type: 'fix', prompt: '틀린 곳을 고쳐 다시 쓰세요.', wrong: "I'm allergy to peanuts.", answer: ["I'm allergic to peanuts.", 'I have a peanut allergy.', 'I am allergic to peanuts.'], ko: '땅콩 알레르기가 있어요.', tags: ['알레르기'], hints: ["I'm 뒤에는 「상태」를 말하는 낱말", 'allergy(명사) → allergic(형용사)', "I'm allergic to peanuts."], why: "I'm 뒤에는 형용사 allergic 이 와요. allergy 를 쓰려면 I have a peanut allergy." },
  { id: 'J10P7', lesson: 'J10', type: 'type', prompt: '영어로 써 보세요.', ko: '감자튀김 대신 샐러드로 받을 수 있을까요?', answer: ['Could I get a salad instead of fries?', 'Can I get a salad instead of fries?', 'Could I have a salad instead of fries?', 'Can I have a salad instead of fries?', 'Could I get salad instead of fries?', 'Could I get a salad instead of French fries?', 'Could I get a salad instead of the fries?', 'Can I get salad instead of fries?', 'Could I have salad instead of fries?', 'Can I get a salad instead of French fries?'], tags: ['주문', '부탁'], hints: ['Could I get …?', 'instead of = … 대신에', 'Could I get a salad instead of fries?'] },
  { id: 'J10P8', lesson: 'J10', type: 'dictation', prompt: '옆 테이블 손님의 주문을 받아쓰세요.', say: "I'll have the chicken salad, please.", tags: ['받아쓰기', '주문'], hints: ["I'll have 로 시작", 'the chicken salad', "I'll have the chicken salad, please."] },
  { id: 'J10P9', lesson: 'J10', type: 'speak', prompt: '🔊 알레르기를 말하고 확인해 보세요.', say: "I'm allergic to peanuts. Does this have any nuts in it?", ko: '땅콩 알레르기가 있어요. 이거 견과류 들어가요?', tags: ['말하기', '알레르기'], hints: ["I'm allergic to + 음식", 'Does this have … in it?', "I'm allergic to peanuts. Does this have any nuts in it?"] },

  // J11 계산·팁
  { id: 'J11P1', lesson: 'J11', type: 'listen', prompt: '식사가 끝날 즈음 직원이 물어요.', say: 'Can I get you anything else?', opts: ['더 필요한 거 있으세요?', '다른 곳으로 옮기시겠어요?', '다른 걸로 바꿔 드릴까요?'], ans: 0, tags: ['듣기', '식당'], hints: ['get you = 가져다드리다', 'anything else = 다른 것', '더 필요한 거 있으세요?'] },
  { id: 'J11P2', lesson: 'J11', type: 'listen', prompt: '계산할 때 직원이 물어요.', say: 'Will that be cash or card?', opts: ['현금이세요, 카드세요?', '현금만 받아요.', '카드가 안 돼요.'], ans: 0, tags: ['듣기', '계산'], hints: ['cash or card = 둘 중 하나', '결제 방법을 묻는 말', '현금이세요, 카드세요?'] },
  { id: 'J11P3', lesson: 'J11', type: 'choice', prompt: '친구와 각자 먹은 만큼 내고 싶어요. 뭐라고 할까요?', opts: ['Can we pay separately?', 'Can we pay together?', 'Can we pay later?'], ans: 0, sayOpts: true, tags: ['계산'], hints: ['따로 = separately', 'Can we pay …?', 'Can we pay separately?'], why: 'separately 는 「따로따로」. together 는 같이, later 는 나중에예요.' },
  { id: 'J11P4', lesson: 'J11', type: 'listen', prompt: '직원이 금액을 말해요. 얼마일까요?', say: 'Your total comes to forty-two eighty.', opts: ['$42.80', '$24.80', '$42.18'], ans: 0, tags: ['숫자 듣기', '계산'], hints: ['comes to = 다 해서', 'forty-two / eighty 두 덩어리', '$42.80'] },
  { id: 'J11P5', lesson: 'J11', type: 'order', prompt: '계산서를 부탁해요. 필요 없는 카드도 있어요.', ko: '계산서 좀 주시겠어요?', answer: ['Could we get the check, please?', 'Could we get the bill, please?', 'Could I get the check, please?', 'Could we have the check, please?', 'Can we get the check, please?'], cards: ['Could', 'we', 'get', 'the check,', 'please?'], distractors: ['gets'], tags: ['계산', '부탁'], hints: ['Could we get …?', 'check = 계산서', 'Could we get the check, please?'] },
  { id: 'J11P6', lesson: 'J11', type: 'choice', prompt: '팁이 이미 금액에 들어갔는지 물어요. 빈칸에 맞는 말은?', q: 'Is the tip ___?', opts: ['included', 'including', 'include'], ans: 0, tags: ['팁', '질문'], hints: ['「포함된」 상태를 물어요', 'Is … + -ed 모양', 'included'], why: '「포함된」은 included. Is the tip included? = 팁이 포함돼 있어요?' },
  { id: 'J11P7', lesson: 'J11', type: 'type', prompt: '현금으로 냈어요. 거스름돈은 팁으로 주고 싶어요. 영어로 써 보세요.', ko: '잔돈은 가지세요.', answer: ['Keep the change.', 'You can keep the change.', 'Please keep the change.', 'Keep the change, please.', 'You can keep the rest.'], tags: ['팁'], hints: ['keep = 가지다', 'the change = 거스름돈', 'Keep the change.'] },
  { id: 'J11P8', lesson: 'J11', type: 'dictation', prompt: '직원의 질문을 받아쓰세요.', say: 'Would you like a receipt?', tags: ['받아쓰기', '계산'], hints: ['Would you like 로 시작', 'receipt 의 p 는 읽지 않아요', 'Would you like a receipt?'] },
  { id: 'J11P9', lesson: 'J11', type: 'speak', prompt: '🔊 칭찬하며 계산서를 부탁해 보세요.', say: 'Everything was delicious. Could we get the check, please?', ko: '다 맛있었어요. 계산서 좀 주시겠어요?', tags: ['말하기', '계산'], hints: ['Everything was delicious = 다 맛있었어요', 'Could we get the check?', 'Everything was delicious. Could we get the check, please?'] },

  // J12 쇼핑
  { id: 'J12P1', lesson: 'J12', type: 'listen', prompt: '옷 가게에 들어갔더니 직원이 말을 걸어요.', say: 'Can I help you find anything?', opts: ['찾으시는 거 있으면 도와드릴까요?', '뭘 잃어버리셨어요?', '이거 찾으셨어요?'], ans: 0, tags: ['듣기', '쇼핑'], hints: ['help you find = 찾는 걸 돕다', 'anything = 무엇이든', '찾으시는 거 있으면 도와드릴까요?'] },
  { id: 'J12P2', lesson: 'J12', type: 'choice', prompt: '아직 살 건 없고 그냥 구경 중이에요. 뭐라고 할까요?', opts: ["I'm just looking, thanks.", "I'm just watching, thanks.", "I'm just seeing, thanks."], ans: 0, sayOpts: true, tags: ['쇼핑'], hints: ['둘러보다 = look', "I'm just …ing", "I'm just looking, thanks."], why: '가게에서 「구경 중이에요」는 I\'m just looking 으로 굳은 표현이에요. watching 은 움직이는 걸 지켜볼 때 써요.' },
  { id: 'J12P3', lesson: 'J12', type: 'listen', prompt: '탈의실을 물었어요. 직원의 대답은?', say: 'The fitting rooms are in the back, on your left.', opts: ['탈의실은 안쪽 왼편에 있어요.', '탈의실은 입구 오른편에 있어요.', '탈의실은 지금 다 찼어요.'], ans: 0, tags: ['듣기', '쇼핑'], hints: ['fitting room = 탈의실', 'in the back = 안쪽에, on your left = 왼편에', '탈의실은 안쪽 왼편에 있어요.'] },
  { id: 'J12P4', lesson: 'J12', type: 'listen', prompt: '환불하러 갔더니 직원이 물어요.', say: 'Do you have the receipt?', opts: ['영수증 있으세요?', '영수증 드릴까요?', '영수증을 버리셨어요?'], ans: 0, tags: ['듣기', '환불'], hints: ['Do you have …? = 갖고 있어요?', 'receipt = 영수증', '영수증 있으세요?'] },
  { id: 'J12P5', lesson: 'J12', type: 'order', prompt: '마음에 드는 셔츠가 커요. 필요 없는 카드도 있어요.', ko: '이거 미디엄 사이즈 있어요?', answer: ['Do you have this in a medium?', 'Do you have this in medium?', 'Do you have this in a size medium?', 'Do you have a medium in this?'], cards: ['Do', 'you', 'have', 'this', 'in', 'a medium?'], distractors: ['Does'], tags: ['쇼핑', '사이즈'], hints: ['Do you have this …?', '사이즈 앞에는 in', 'Do you have this in a medium?'] },
  { id: 'J12P6', lesson: 'J12', type: 'fill', prompt: '옷을 입어 봐도 되는지 물어요. 빈칸에 알맞은 말을 고르세요.', text: 'Can I try this ___?', blanks: [{ a: ['on'], opt: ['on', 'up', 'at'] }], tags: ['쇼핑'], hints: ['옷을 「입어 보다」', 'try + on', 'on'], why: 'try on 은 「(옷·신발을) 입어 보다, 신어 보다」예요.' },
  { id: 'J12P7', lesson: 'J12', type: 'type', prompt: '산 물건을 되돌려주려고 해요. 영어로 써 보세요.', ko: '이거 반품하고 싶어요.', answer: ["I'd like to return this.", "I'd like to return this, please.", 'I want to return this.', 'Can I return this?', 'Could I return this?', "I'd like to return this item.", 'I want to return this, please.'], tags: ['환불'], hints: ["I'd like to …", 'return = 반품하다', "I'd like to return this."] },
  { id: 'J12P8', lesson: 'J12', type: 'dictation', prompt: '다른 손님이 직원에게 말해요. 받아쓰세요.', say: 'Could I exchange this for a larger size?', tags: ['받아쓰기', '교환'], hints: ['Could I exchange 로 시작', 'exchange A for B = A 를 B 로 바꾸다', 'Could I exchange this for a larger size?'] },
  { id: 'J12P9', lesson: 'J12', type: 'speak', prompt: '🔊 교환을 부탁해 보세요.', say: 'This is too small. Could I exchange it for a bigger size?', ko: '이거 너무 작아요. 더 큰 사이즈로 바꿀 수 있을까요?', tags: ['말하기', '교환'], hints: ['too small = 너무 작은', 'exchange it for … = …로 바꾸다', 'This is too small. Could I exchange it for a bigger size?'] },

  // JB3 레스토랑
  { id: 'JB3P1', lesson: 'JB3', type: 'listen', boss: true, prompt: '레스토랑에 들어서자 직원이 반겨요.', say: 'Hi there! Just the two of you tonight?', opts: ['안녕하세요! 오늘 두 분이세요?', '안녕하세요! 오늘 밤 2시예요?', '안녕하세요! 두 분 중 누가 예약하셨어요?'], ans: 0, tags: ['듣기', '식당'], hints: ['the two of you = 두 분', 'Just …? = …만이세요?', '안녕하세요! 오늘 두 분이세요?'] },
  { id: 'JB3P2', lesson: 'JB3', type: 'order', boss: true, prompt: '맞다고 하면서 예약은 없다고 말해요. 필요 없는 카드도 있어요.', ko: '네, 그런데 예약은 안 했어요.', answer: ["Yes, but we don't have a reservation.", "Yes, but we didn't make a reservation.", "Yes, but we don't have a booking."], cards: ['Yes,', 'but', 'we', "don't have", 'a reservation.'], distractors: ["doesn't have"], tags: ['식당', '예약'], hints: ['Yes, but …', "we 의 부정은 don't", "Yes, but we don't have a reservation."] },
  { id: 'JB3P3', lesson: 'JB3', type: 'listen', boss: true, prompt: '자리에 앉자 직원이 말해요.', say: 'Here are your menus. Can I start you off with something to drink?', opts: ['메뉴 여기 있어요. 음료부터 드릴까요?', '메뉴 여기 있어요. 음식부터 시작할까요?', '메뉴는 아직 준비가 안 됐어요.'], ans: 0, tags: ['듣기', '주문'], hints: ['start you off = 먼저 시작하다', 'something to drink = 마실 것', '메뉴 여기 있어요. 음료부터 드릴까요?'] },
  { id: 'JB3P4', lesson: 'JB3', type: 'type', boss: true, prompt: '치즈를 못 먹어요. 주문해 보세요.', ko: '파스타로 할게요. 치즈는 빼 주세요.', answer: ["I'll have the pasta, but no cheese, please.", "I'll have the pasta. No cheese, please.", "I'll have the pasta with no cheese, please.", "I'll have the pasta without cheese, please.", 'Could I get the pasta without cheese?', 'Can I have the pasta without cheese?', "I'd like the pasta without cheese, please.", "I'll have the pasta without cheese.", "I'll have the pasta with no cheese.", 'Pasta without cheese, please.', "I'll have pasta without cheese, please.", "I'll have the pasta, no cheese."], tags: ['주문'], hints: ["I'll have the pasta", '빼 달라는 건 no cheese 또는 without cheese', "I'll have the pasta, but no cheese, please."] },
  { id: 'JB3P5', lesson: 'JB3', type: 'choice', boss: true, prompt: '음식이 나왔는데 내가 시킨 파스타가 아니라 피자예요. 뭐라고 할까요?', opts: ["Excuse me, I think this isn't what I ordered.", 'Excuse me, I think this is what I ordered.', "Excuse me, I didn't order anything."], ans: 0, sayOpts: true, tags: ['식당', '문제 말하기'], hints: ['what I ordered = 내가 주문한 것', "isn't = 아니에요", "I think this isn't what I ordered."], why: '「제가 주문한 게 아니에요」는 this isn\'t what I ordered. 아무것도 안 시켰다고 하면 거짓말이 돼요.' },
  { id: 'JB3P6', lesson: 'JB3', type: 'listen', boss: true, prompt: '직원이 사과해요. 무슨 뜻일까요?', say: "I'm so sorry about that. I'll bring your pasta right out.", opts: ['정말 죄송해요. 파스타 바로 가져다 드릴게요.', '죄송하지만 파스타는 다 떨어졌어요.', '죄송해요. 파스타는 밖에서 드셔야 해요.'], ans: 0, tags: ['듣기', '식당'], hints: ['bring … out = 가져다주다', 'right = 바로', '정말 죄송해요. 파스타 바로 가져다 드릴게요.'] },
  { id: 'JB3P7', lesson: 'JB3', type: 'dictation', boss: true, prompt: '계산서를 부탁했더니 직원이 물어요. 받아쓰세요.', say: 'Would you like one check or separate checks?', tags: ['받아쓰기', '계산'], hints: ['Would you like 로 시작', 'one check or separate checks = 한 장 또는 따로', 'Would you like one check or separate checks?'] },
  { id: 'JB3P8', lesson: 'JB3', type: 'speak', boss: true, prompt: '🔊 따로 계산하고 팁도 카드로 낸다고 말해 보세요.', say: 'Separate checks, please. Can I put the tip on my card?', ko: '따로 계산해 주세요. 팁도 카드로 낼 수 있어요?', tags: ['말하기', '계산'], hints: ['Separate checks = 따로 계산', 'put the tip on my card', 'Separate checks, please. Can I put the tip on my card?'] },
);
