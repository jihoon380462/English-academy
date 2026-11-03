// courses/travel/parts/j1.js — 챕터 1 「공항·기내」: 레슨 J1~J4 + 보스 JB1. 스키마는 courses/basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 1, title: '공항·기내', icon: '🛫', desc: '체크인 카운터부터 보안검색, 기내 부탁, 입국심사까지 — 직원 말은 알아듣고 내 말은 짧고 분명하게' },
);
LESSONS.push(
  { id: 'J1', ch: 1, n: 1, title: '체크인·수하물', minutes: 7, terms: { '수하물': '비행기 짐칸에 부치는 큰 짐(checked bag)', '기내 반입': '부치지 않고 들고 타는 짐(carry-on)' },
    pages: [
      { title: '카운터에서 꼭 듣는 말', html: '<p>항공사 카운터 직원은 거의 같은 순서로 말해요. <b>여권 → 목적지 → 좌석 → 짐</b>.</p><p>좌석은 <b>Window or aisle?</b>(창가요, 통로요?)처럼 아주 짧게 물어요. aisle 은 s 를 읽지 않고 「아일」이라고 해요.</p>',
        ex: [{ en: 'Could I see your passport, please?', ko: '여권 좀 보여 주시겠어요?' }, { en: 'Would you like a window or an aisle seat?', ko: '창가 자리와 통로 자리 중 어디로 드릴까요?' }, { en: 'An aisle seat, please.', ko: '통로 자리로 주세요.', note: 'aisle 「아일」 — 모음 소리로 시작해서 <b>an</b> aisle.' }] },
      { title: '짐 부치기', html: '<p>부칠 짐은 <b>check</b>, 들고 타는 짐은 <b>carry-on</b> 이에요. 직원이 저울(<b>scale</b>)에 짐을 올리라고 하고, 무게가 넘으면 <b>over the limit</b> 이라고 해요.</p>',
        ex: [{ en: 'How many bags are you checking today?', ko: '오늘 부치실 짐이 몇 개예요?' }, { en: "I'm checking one bag.", ko: '짐 하나 부칠게요.' }, { en: 'Can I take this bag on the plane?', ko: '이 가방은 기내에 들고 타도 돼요?' }] },
      { title: '탑승권 받기', html: '<p>마지막으로 탑승권(<b>boarding pass</b>)을 주면서 <b>게이트 번호</b>와 <b>탑승 시작 시각</b>을 알려 줘요. 숫자는 이어서 말해요: 10:40 = ten forty.</p>',
        ex: [{ en: "Here's your boarding pass.", ko: '탑승권 여기 있어요.' }, { en: 'Boarding starts at 10:40 at Gate 23.', ko: '탑승은 23번 게이트에서 10시 40분에 시작해요.' }], tip: '탑승권을 받으면 게이트 번호와 시각을 소리 내어 한 번 확인해 보세요: Gate 23, ten forty?' },
    ],
    summary: ['카운터 순서: 여권(<b>passport</b>) → 좌석(<b>Window or aisle?</b>) → 짐(<b>checking</b>).', '부치는 짐은 <b>check</b>, 들고 타는 짐은 <b>carry-on</b>.', '탑승권(<b>boarding pass</b>)에서 게이트·시각을 꼭 확인해요.'] },

  { id: 'J2', ch: 1, n: 2, title: '보안검색·탑승', minutes: 7,
    pages: [
      { title: '보안검색대 지시 알아듣기', html: '<p>보안검색대(<b>security</b>)에서는 짧은 명령문을 빠르게 들어요. <b>take out</b>(꺼내다), <b>take off</b>(벗다), <b>step through</b>(통과하다)만 알아들어도 충분해요.</p>',
        ex: [{ en: 'Please take your laptop out of the bag.', ko: '노트북은 가방에서 꺼내 주세요.' }, { en: 'Do you have any liquids in your bag?', ko: '가방에 액체류 있으세요?' }, { en: 'Please take off your shoes and step through.', ko: '신발을 벗고 통과해 주세요.' }] },
      { title: '게이트 안내 방송', html: '<p>방송은 <b>지연(delayed)</b>, <b>게이트 변경(changed)</b>, <b>탑승 그룹(Group)</b> 세 가지만 잡아도 돼요. 마지막 탑승 안내는 <b>final boarding call</b> 이에요.</p>',
        ex: [{ en: 'We are now boarding Group 3.', ko: '지금 3그룹 탑승을 시작합니다.' }, { en: 'Flight 702 to Seoul has been delayed by one hour.', ko: '서울행 702편이 1시간 지연됐습니다.' }, { en: 'The gate has changed to Gate 32.', ko: '게이트가 32번으로 바뀌었습니다.' }] },
      { title: '헷갈리면 물어보기', html: '<p>방송을 놓쳤으면 직원이나 옆 사람에게 짧게 물어요. <b>Has boarding started?</b>(탑승 시작했어요?), <b>Is this the line for …?</b>(여기가 … 줄이에요?)</p>',
        ex: [{ en: 'Has boarding started yet?', ko: '탑승 시작했나요?' }, { en: 'Is this the line for Group 3?', ko: '여기가 3그룹 줄인가요?' }] },
    ],
    summary: ['보안검색: <b>take out</b>(꺼내요) · <b>take off</b>(벗어요) · <b>step through</b>(통과해요).', '방송은 <b>delayed · changed · Group</b> 만 잡아도 돼요.', '놓쳤으면: <b>Has boarding started? / Is this the line for …?</b>'] },

  { id: 'J3', ch: 1, n: 3, title: '기내에서 부탁하기', minutes: 7,
    pages: [
      { title: '승무원이 묻는 말', html: '<p>기내식 때는 <b>Chicken or beef?</b>처럼 둘 중 하나를 고르게 해요. 대답은 <b>고른 것 + please</b> 면 충분해요.</p>',
        ex: [{ en: 'Would you like chicken or beef?', ko: '치킨과 소고기 중 뭘로 드릴까요?' }, { en: 'What would you like to drink?', ko: '음료는 뭘로 드릴까요?' }, { en: 'Please fasten your seat belt.', ko: '안전벨트를 매 주세요.' }] },
      { title: '부탁은 Could I …? / Could you …?', html: '<p>물건을 달라고 할 때는 <b>Could I have/get …?</b>, 뭘 해 달라고 할 때는 <b>Could you …?</b> 예요. 끝에 <b>please</b> 를 붙이면 더 부드러워요.</p>',
        ex: [{ en: 'Could I have some water, please?', ko: '물 좀 주시겠어요?' }, { en: 'Could I get an extra blanket?', ko: '담요 하나 더 받을 수 있을까요?' }, { en: 'Could you help me with my bag?', ko: '가방 좀 도와주시겠어요?' }] },
      { title: '옆자리 사람에게', html: '<p>지나갈 때는 <b>Excuse me</b> 로 시작해요. 내 자리에 누가 앉아 있으면 <b>I think</b>(~인 것 같아요)를 붙여서 부드럽게 말해요.</p>',
        ex: [{ en: 'Excuse me, could I get past?', ko: '실례지만 좀 지나가도 될까요?' }, { en: "I think you're in my seat.", ko: '제 자리에 앉으신 것 같아요.' }, { en: 'Do you mind if I put my seat back?', ko: '의자 좀 뒤로 젖혀도 될까요?' }] },
    ],
    summary: ['물건 달라기: <b>Could I have / get …?</b>', '해 달라기: <b>Could you …?</b> + please.', '옆 사람에게는 <b>Excuse me</b> 와 <b>I think</b> 로 부드럽게.'] },

  { id: 'J4', ch: 1, n: 4, title: '입국심사 질문 답하기', minutes: 7, terms: { '입국심사': '도착한 나라 공항에서 여권과 방문 목적을 확인받는 곳(immigration)' },
    pages: [
      { title: '심사관이 꼭 묻는 세 가지', html: '<p>질문은 거의 정해져 있어요. <b>목적(purpose)</b>, <b>기간(how long)</b>, <b>숙소(where)</b>. 긴 문장보다 짧고 분명한 대답이 좋아요.</p>',
        ex: [{ en: "What's the purpose of your visit?", ko: '방문 목적이 뭐예요?' }, { en: "I'm here on vacation.", ko: '휴가로 왔어요.' }, { en: "I'm here on business.", ko: '출장으로 왔어요.' }] },
      { title: '기간과 숙소', html: '<p>기간은 <b>for + 기간</b>, 숙소는 <b>at + 호텔</b>, 사람 집이면 <b>with + 사람</b> 이에요.</p>',
        ex: [{ en: 'How long are you staying?', ko: '얼마나 머무세요?' }, { en: "I'm staying for five days.", ko: '5일 동안 있을 거예요.' }, { en: "I'm staying at a hotel downtown.", ko: '시내 호텔에 묵어요.' }, { en: "I'm staying with a friend.", ko: '친구 집에서 지내요.' }] },
      { title: '그 밖의 질문', html: '<p>처음 왔는지, 돌아가는 표가 있는지, 신고할 물건(<b>declare</b>)이 있는지도 물을 수 있어요.</p>',
        ex: [{ en: 'Is this your first visit?', ko: '이번이 첫 방문이에요?' }, { en: 'Do you have a return ticket?', ko: '돌아가는 표 있으세요?' }, { en: 'Do you have anything to declare?', ko: '신고할 물건 있으세요?' }], tip: '못 알아들었으면 당황하지 말고 Sorry? 또는 Could you say that again? 이라고 해요.' },
    ],
    summary: ['목적: <b>I\'m here on vacation / on business.</b>', '기간: <b>for five days</b> · 숙소: <b>at a hotel / with a friend</b>.', '짧고 분명하게 대답하고, 못 들었으면 <b>Sorry?</b>'] },

  { id: 'JB1', ch: 1, boss: true, title: '상황 미션: 입국심사대 통과하기', minutes: 7,
    pages: [
      { title: '긴 줄 끝, 내 차례', html: '<p>열 시간 비행 끝에 도착했어요. 입국심사대 앞에서 심사관이 부르면 여권을 내고, 목적·기간·숙소·돌아가는 표 질문에 차례대로 답해요.</p><p>목표: 짧고 분명하게 답하고 <b>Enjoy your stay.</b>(즐거운 여행 되세요)를 듣기!</p>',
        ex: [{ en: 'Next, please.', ko: '다음 분 오세요.' }, { en: 'Look at the camera, please.', ko: '카메라를 봐 주세요.' }, { en: 'Enjoy your stay.', ko: '즐거운 여행 되세요.' }] },
    ],
    summary: ['목적·기간·숙소는 짧게: <b>On vacation. / For ten days. / With a friend.</b>', '돌아가는 표: <b>I\'m flying back next Sunday.</b>', '마지막 인사 <b>Enjoy your stay.</b> 가 들리면 통과!'] },
);
PROBLEMS.push(
  // J1 체크인·수하물
  { id: 'J1P1', lesson: 'J1', type: 'listen', prompt: '카운터 직원이 말해요. 무슨 뜻일까요?', say: 'Could I see your passport, please?', opts: ['여권 좀 보여 주시겠어요?', '여권을 잃어버리셨어요?', '여권 사진이 필요해요.'], ans: 0, tags: ['듣기', '체크인'], hints: ['see = 보다', 'Could I see …? = 보여 주시겠어요?', '여권 좀 보여 주시겠어요?'] },
  { id: 'J1P2', lesson: 'J1', type: 'listen', prompt: '직원이 좌석을 물어요. 무슨 뜻일까요?', say: 'Would you like a window or an aisle seat?', opts: ['창가 자리와 통로 자리 중 어디로 드릴까요?', '창문을 열어 드릴까요?', '자리를 바꾸고 싶으세요?'], ans: 0, tags: ['듣기', '좌석'], hints: ['window or aisle — 둘 중 하나', 'aisle = 통로', '창가 자리와 통로 자리 중 어디로 드릴까요?'] },
  { id: 'J1P3', lesson: 'J1', type: 'choice', prompt: '직원이 「Window or aisle?」라고 물어요. 화장실 가기 편한 <b>통로</b> 자리를 원해요. 뭐라고 할까요?', opts: ['An aisle seat, please.', 'A window seat, please.', 'I have one bag.'], ans: 0, sayOpts: true, tags: ['좌석', '말하기'], hints: ['통로 = aisle', '고른 것 + please', 'An aisle seat, please.'], why: '통로는 aisle(아일)이에요. window 는 창가, 짐 이야기는 아직 아니에요.' },
  { id: 'J1P4', lesson: 'J1', type: 'listen', prompt: '짐을 저울에 올렸더니 직원이 말해요. 무슨 뜻일까요?', say: 'Your bag is three kilos over the limit.', opts: ['가방이 제한보다 3킬로 무거워요.', '가방이 딱 3킬로예요.', '가방은 3개까지 부칠 수 있어요.'], ans: 0, tags: ['듣기', '수하물'], hints: ['over the limit = 제한을 넘은', 'three kilos 가 얼마나 넘었는지예요', '가방이 제한보다 3킬로 무거워요.'] },
  { id: 'J1P5', lesson: 'J1', type: 'listen', prompt: '탑승권을 주며 말해요. 맞는 정보를 고르세요.', say: 'Boarding starts at ten forty at Gate twenty-three.', opts: ['23번 게이트, 10시 40분 탑승 시작', '32번 게이트, 10시 14분 탑승 시작', '23번 게이트, 10시 14분 탑승 시작'], ans: 0, tags: ['숫자 듣기', '탑승'], hints: ['시각과 게이트 번호 두 가지를 들어요', 'FORty 는 앞이 세요(40)', '23번 게이트, 10시 40분'] },
  { id: 'J1P6', lesson: 'J1', type: 'order', prompt: '작은 가방을 들고 타도 되는지 물어요. 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이 가방은 기내에 들고 타도 돼요?', answer: ['Can I take this bag on the plane?', 'Can I bring this bag on the plane?', 'Can I take this bag on board?', 'Could I take this bag on the plane?', 'Can I bring this bag on board?', 'Can I carry this bag on the plane?'], cards: ['Can', 'I', 'take', 'this', 'bag', 'on', 'the plane?'], distractors: ['to'], tags: ['수하물', '질문'], hints: ['Can I …? 로 허락을 물어요', 'take this bag + on the plane', 'Can I take this bag on the plane?'] },
  { id: 'J1P7', lesson: 'J1', type: 'dictation', prompt: '직원의 말을 듣고 받아쓰세요.', say: 'Please put your bag on the scale.', tags: ['받아쓰기', '수하물'], hints: ['Please 로 시작하는 부탁이에요', 'scale = 저울', 'Please put your bag on the scale.'] },
  { id: 'J1P8', lesson: 'J1', type: 'type', prompt: '영어로 써 보세요.', ko: '창가 자리로 주세요.', answer: ['A window seat, please.', 'Window seat, please.', 'Window, please.', 'Can I have a window seat?', 'Could I have a window seat, please?', "I'd like a window seat, please.", "I'd like a window seat.", 'A window seat.', 'Can I get a window seat?', 'Could I get a window seat?', 'I want a window seat.'], tags: ['좌석'], hints: ['창가 = window', '고른 것 + please', 'A window seat, please.'] },
  { id: 'J1P9', lesson: 'J1', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Could I have an aisle seat, please?', ko: '통로 자리로 주시겠어요?', tags: ['말하기', '좌석'], hints: ['an aisle → 「어나일」로 이어져요', 'Could I have …? 부탁', 'Could I have an aisle seat, please?'] },

  // J2 보안검색·탑승
  { id: 'J2P1', lesson: 'J2', type: 'listen', prompt: '보안검색대 직원이 말해요. 무슨 뜻일까요?', say: 'Please take your laptop out of the bag.', opts: ['노트북은 가방에서 꺼내 주세요.', '노트북은 가방에 넣어 주세요.', '노트북을 켜 주세요.'], ans: 0, tags: ['듣기', '보안검색'], hints: ['take … out = 꺼내다', 'out of the bag = 가방 밖으로', '노트북은 가방에서 꺼내 주세요.'] },
  { id: 'J2P2', lesson: 'J2', type: 'listen', prompt: '직원이 물어요. 무슨 뜻일까요?', say: 'Do you have any liquids in your bag?', opts: ['가방에 액체류 있으세요?', '가방에 음식 있으세요?', '가방이 몇 개예요?'], ans: 0, tags: ['듣기', '보안검색'], hints: ['liquids = 액체', '물·화장품 같은 것', '가방에 액체류 있으세요?'] },
  { id: 'J2P3', lesson: 'J2', type: 'choice', prompt: '직원이 가방 하나를 들고 「Is this your bag?」이라고 물어요. 내 가방이 맞아요. 뭐라고 할까요?', opts: ["Yes, it's mine.", "Yes, it's yours.", "No, I'm fine."], ans: 0, sayOpts: true, tags: ['보안검색', '대답'], hints: ['내 것 = mine', 'yours 는 「당신 것」', "Yes, it's mine."], why: '「제 거예요」는 it\'s mine. it\'s yours 는 「당신 거예요」라서 반대예요.' },
  { id: 'J2P4', lesson: 'J2', type: 'listen', prompt: '게이트 앞에서 방송이 나와요. 무슨 내용일까요?', say: 'Flight 702 to Seoul has been delayed by one hour.', opts: ['서울행 702편이 1시간 지연됐어요.', '서울행 702편이 1시간 뒤에 도착해요.', '서울행 702편이 취소됐어요.'], ans: 0, tags: ['듣기', '안내 방송'], hints: ['delayed = 늦어진', 'by one hour = 1시간만큼', '서울행 702편이 1시간 지연됐어요.'] },
  { id: 'J2P5', lesson: 'J2', type: 'listen', prompt: '방송이 또 나와요. 무슨 내용일까요?', say: 'The gate has changed to Gate 32.', opts: ['게이트가 32번으로 바뀌었어요.', '32번 게이트가 닫혔어요.', '게이트가 23번으로 바뀌었어요.'], ans: 0, tags: ['듣기', '안내 방송'], hints: ['changed = 바뀌었다', 'thirty-two 를 잘 들어요', '게이트가 32번으로 바뀌었어요.'] },
  { id: 'J2P6', lesson: 'J2', type: 'order', prompt: '줄이 움직이기 시작했어요. 직원에게 물어요. 필요 없는 카드도 있어요.', ko: '탑승 시작했나요?', answer: ['Has boarding started yet?', 'Has boarding started?', 'Did boarding start yet?', 'Did boarding start?'], cards: ['Has', 'boarding', 'started', 'yet?'], distractors: ['start'], tags: ['탑승', '질문'], hints: ['Has 로 시작해요', 'Has + boarding + started', 'Has boarding started yet?'] },
  { id: 'J2P7', lesson: 'J2', type: 'dictation', prompt: '마지막 방송이에요. 듣고 받아쓰세요.', say: 'This is the final boarding call.', tags: ['받아쓰기', '안내 방송'], hints: ['This is 로 시작해요', 'final = 마지막', 'This is the final boarding call.'] },
  { id: 'J2P8', lesson: 'J2', type: 'type', prompt: '영어로 써 보세요.', ko: '여기가 3그룹 줄인가요?', answer: ['Is this the line for Group 3?', 'Is this the line for group three?', 'Is this the Group 3 line?', 'Is this the group three line?', 'Is this line for Group 3?', 'Is this the queue for Group 3?'], tags: ['탑승', '질문'], hints: ['Is this …? 로 물어요', 'the line for + 그룹', 'Is this the line for Group 3?'] },
  { id: 'J2P9', lesson: 'J2', type: 'speak', prompt: '🔊 가방에 물병이 있다고 말해 보세요.', say: 'Sorry, I have a bottle of water in my bag.', ko: '죄송해요, 가방에 물 한 병이 있어요.', tags: ['말하기', '보안검색'], hints: ['a bottle of water = 물 한 병', 'in my bag 을 끝에', 'Sorry, I have a bottle of water in my bag.'] },

  // J3 기내에서 부탁하기
  { id: 'J3P1', lesson: 'J3', type: 'listen', prompt: '기내식 시간이에요. 승무원이 물어요.', say: 'Would you like chicken or beef?', opts: ['치킨과 소고기 중 뭘로 드릴까요?', '치킨과 소고기 둘 다 드릴까요?', '치킨은 다 떨어졌어요.'], ans: 0, tags: ['듣기', '기내'], hints: ['or = 또는', '둘 중 하나를 고르게 해요', '치킨과 소고기 중 뭘로 드릴까요?'] },
  { id: 'J3P2', lesson: 'J3', type: 'listen', prompt: '기내 방송이에요. 무슨 뜻일까요?', say: 'Please fasten your seat belt.', opts: ['안전벨트를 매 주세요.', '안전벨트를 풀어 주세요.', '좌석을 바로 세워 주세요.'], ans: 0, tags: ['듣기', '기내'], hints: ['fasten = 매다, 채우다', 'seat belt = 안전벨트', '안전벨트를 매 주세요.'] },
  { id: 'J3P3', lesson: 'J3', type: 'choice', prompt: '승무원이 「What would you like to drink?」라고 물어요. 오렌지 주스를 마시고 싶어요.', opts: ['Orange juice, please.', 'Chicken, please.', 'Yes, I would.'], ans: 0, sayOpts: true, tags: ['기내', '대답'], hints: ['마실 것을 물었어요', '고른 것 + please', 'Orange juice, please.'], why: '음료를 물었으니 음료 이름 + please. Yes, I would 는 「네」만 해서 무엇을 원하는지 몰라요.' },
  { id: 'J3P4', lesson: 'J3', type: 'choice', prompt: '내 자리에 다른 사람이 앉아 있어요. <b>공손하게</b> 말하려면?', opts: ["Excuse me, I think you're in my seat.", 'Move. This is my seat.', 'Excuse me, can I sit with you?'], ans: 0, sayOpts: true, tags: ['기내', '공손하게'], hints: ['Excuse me 로 시작', 'I think 로 부드럽게', "Excuse me, I think you're in my seat."], why: 'I think(~인 것 같아요)를 붙이면 상대가 실수했다는 말을 부드럽게 전할 수 있어요. Move 는 명령이라 무례해요.' },
  { id: 'J3P5', lesson: 'J3', type: 'order', prompt: '추워요. 담요를 하나 더 부탁해요. 필요 없는 카드도 있어요.', ko: '담요 하나 더 받을 수 있을까요?', answer: ['Could I get an extra blanket?', 'Could I have an extra blanket?', 'Could I get another blanket?', 'Could I have another blanket?', 'Can I get an extra blanket?', 'Can I have an extra blanket?'], cards: ['Could', 'I', 'get', 'an', 'extra', 'blanket?'], distractors: ['a'], tags: ['기내', '부탁'], hints: ['Could I get …?', 'extra 는 모음 소리로 시작 → an', 'Could I get an extra blanket?'] },
  { id: 'J3P6', lesson: 'J3', type: 'fill', prompt: '선반에 가방을 올리기 힘들어요. 빈칸에 알맞은 말을 고르세요.', text: 'Could you ___ me with my bag?', blanks: [{ a: ['help'], opt: ['help', 'helps', 'helping'] }], tags: ['기내', '부탁'], hints: ['Could you 뒤에는 동사 원래 모양', '-s, -ing 는 붙이지 않아요', 'help'], why: 'Could you 다음에는 동사 원형이 와요: Could you help me …?' },
  { id: 'J3P7', lesson: 'J3', type: 'dictation', prompt: '옆자리 승객이 승무원에게 말해요. 받아쓰세요.', say: 'Could I have some water, please?', tags: ['받아쓰기', '부탁'], hints: ['Could I have 로 시작', 'some water = 물 좀', 'Could I have some water, please?'] },
  { id: 'J3P8', lesson: 'J3', type: 'type', prompt: '창가 자리라 화장실에 가려면 옆 사람을 지나가야 해요. 영어로 써 보세요.', ko: '실례지만 좀 지나가도 될까요?', answer: ['Excuse me, could I get past?', 'Excuse me, can I get past?', 'Excuse me, could I get by?', 'Excuse me, can I get by?', 'Excuse me, could I get through?', 'Excuse me, can I get through?', 'Excuse me, may I get past?', 'Excuse me, can I pass?', 'Excuse me, could I pass?'], tags: ['기내', '부탁'], hints: ['Excuse me 로 시작', 'get past = 지나가다', 'Excuse me, could I get past?'] },
  { id: 'J3P9', lesson: 'J3', type: 'speak', prompt: '🔊 뒷사람에게 묻는다고 생각하고 따라 말해 보세요.', say: 'Do you mind if I put my seat back?', ko: '의자 좀 뒤로 젖혀도 될까요?', tags: ['말하기', '기내'], hints: ['Do you mind if …? = …해도 괜찮을까요?', 'put my seat back = 의자를 젖히다', 'Do you mind if I put my seat back?'] },

  // J4 입국심사
  { id: 'J4P1', lesson: 'J4', type: 'listen', prompt: '입국심사관이 물어요. 무슨 뜻일까요?', say: "What's the purpose of your visit?", opts: ['방문 목적이 뭐예요?', '몇 번째 방문이에요?', '어디를 방문하세요?'], ans: 0, tags: ['듣기', '입국심사'], hints: ['purpose = 목적', 'visit = 방문', '방문 목적이 뭐예요?'] },
  { id: 'J4P2', lesson: 'J4', type: 'listen', prompt: '다음 질문이에요. 무슨 뜻일까요?', say: 'How long are you staying?', opts: ['얼마나 머무세요?', '어디에 머무세요?', '언제 도착하셨어요?'], ans: 0, tags: ['듣기', '입국심사'], hints: ['How long = 얼마나 오래', 'staying = 머무는', '얼마나 머무세요?'] },
  { id: 'J4P3', lesson: 'J4', type: 'choice', prompt: '심사관이 「Where are you staying?」이라고 물어요. 알맞은 대답은?', opts: ['At a hotel downtown.', 'For two weeks.', "I'm here on vacation."], ans: 0, sayOpts: true, tags: ['입국심사', '대답'], hints: ['Where = 어디', '숙소를 말해요', 'At a hotel downtown.'], why: 'Where 는 장소를 물어요. For two weeks 는 기간, on vacation 은 목적에 대한 대답이에요.' },
  { id: 'J4P4', lesson: 'J4', type: 'match', prompt: '대답과 뜻을 짝 지으세요.', pairs: [["I'm here on vacation.", '휴가로 왔어요.'], ["I'm here on business.", '출장으로 왔어요.'], ["I'm visiting a friend.", '친구 만나러 왔어요.'], ['For about a week.', '일주일쯤이요.']], tags: ['입국심사'], hints: ['vacation = 휴가', 'business = 일, 출장', 'For + 기간'] },
  { id: 'J4P5', lesson: 'J4', type: 'order', prompt: '숙소를 말해요. 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '시내 호텔에 묵어요.', answer: ["I'm staying at a hotel downtown.", 'I am staying at a hotel downtown.', "I'm staying at a downtown hotel."], cards: ["I'm", 'staying', 'at', 'a', 'hotel', 'downtown.'], distractors: ['stay'], tags: ['입국심사', '숙소'], hints: ["I'm staying = 묵고 있어요", 'at a hotel + downtown', "I'm staying at a hotel downtown."] },
  { id: 'J4P6', lesson: 'J4', type: 'listen', prompt: '세관 직원이 물어요. 무슨 뜻일까요?', say: 'Do you have anything to declare?', opts: ['신고할 물건 있으세요?', '마실 것 있으세요?', '하실 말씀 있으세요?'], ans: 0, tags: ['듣기', '세관'], hints: ['declare = 신고하다', 'anything to … = …할 것', '신고할 물건 있으세요?'] },
  { id: 'J4P7', lesson: 'J4', type: 'dictation', prompt: '심사관의 질문을 받아쓰세요.', say: 'Is this your first visit?', tags: ['받아쓰기', '입국심사'], hints: ['Is this 로 시작', 'first visit = 첫 방문', 'Is this your first visit?'] },
  { id: 'J4P8', lesson: 'J4', type: 'type', prompt: '기간을 영어로 대답해 보세요.', ko: '5일 동안 있을 거예요.', answer: ["I'm staying for five days.", "I'm staying for 5 days.", 'For five days.', 'For 5 days.', 'Five days.', "I'll be here for five days.", "I'll stay for five days.", "I'm staying five days.", "I'm going to stay for five days."], tags: ['입국심사', '기간'], hints: ['for + 기간', "I'm staying for …", "I'm staying for five days."] },
  { id: 'J4P9', lesson: 'J4', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I'm here on vacation for a week.", ko: '일주일 동안 휴가로 왔어요.', tags: ['말하기', '입국심사'], hints: ['on vacation = 휴가로', 'for a week = 일주일 동안', "I'm here on vacation for a week."] },

  // JB1 입국심사대 통과하기
  { id: 'JB1P1', lesson: 'JB1', type: 'listen', boss: true, prompt: '내 차례예요. 심사관이 말해요.', say: 'Good morning. Passport, please.', opts: ['안녕하세요. 여권 주세요.', '안녕하세요. 표 주세요.', '안녕하세요. 줄을 서 주세요.'], ans: 0, tags: ['듣기', '입국심사'], hints: ['Passport = 여권', '명사 + please = 주세요', '안녕하세요. 여권 주세요.'] },
  { id: 'JB1P2', lesson: 'JB1', type: 'listen', boss: true, prompt: '심사관이 물어요. 무슨 뜻일까요?', say: "What's the purpose of your trip?", opts: ['여행 목적이 뭐예요?', '여행은 어땠어요?', '여행은 며칠이에요?'], ans: 0, tags: ['듣기', '입국심사'], hints: ['purpose = 목적', 'trip = 여행', '여행 목적이 뭐예요?'] },
  { id: 'JB1P3', lesson: 'JB1', type: 'type', boss: true, prompt: '목적을 영어로 대답해 보세요.', ko: '휴가로 왔어요.', answer: ["I'm here on vacation.", "I'm on vacation.", "I'm here on holiday.", "I'm here for vacation.", 'On vacation.', 'Vacation.', "I'm here for sightseeing.", 'For vacation.', "I'm here for a vacation.", 'I came here on vacation.', "I'm on holiday."], tags: ['입국심사', '목적'], hints: ['vacation = 휴가', "I'm here on …", "I'm here on vacation."] },
  { id: 'JB1P4', lesson: 'JB1', type: 'listen', boss: true, prompt: '다음 질문이에요. 무슨 뜻일까요?', say: 'How long will you be in the country?', opts: ['이 나라에 얼마나 계실 거예요?', '이 나라에 몇 번 와 보셨어요?', '이 나라에서 돈을 얼마나 쓰실 거예요?'], ans: 0, tags: ['듣기', '입국심사'], hints: ['How long = 얼마나 오래', 'in the country = 이 나라에', '이 나라에 얼마나 계실 거예요?'] },
  { id: 'JB1P5', lesson: 'JB1', type: 'order', boss: true, prompt: '기간을 말해요. 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '열흘 동안 있을 거예요.', answer: ["I'll be here for ten days.", 'I will be here for ten days.', "I'll be here for 10 days.", "I'm staying for ten days."], cards: ["I'll", 'be', 'here', 'for', 'ten', 'days.'], distractors: ['day.'], tags: ['입국심사', '기간'], hints: ["I'll be here = 여기 있을 거예요", 'for + 기간, ten 다음은 여럿(days)', "I'll be here for ten days."] },
  { id: 'JB1P6', lesson: 'JB1', type: 'choice', boss: true, prompt: '「Where are you staying?」 — 이번엔 친구 집에서 지내요. 알맞은 대답은?', opts: ["I'm staying with a friend.", "I'm staying for a friend.", "I'm a friend."], ans: 0, sayOpts: true, tags: ['입국심사', '숙소'], hints: ['사람 집에 머물 때는 with', 'staying with + 사람', "I'm staying with a friend."], why: '사람과 함께 지내면 with a friend. for a friend 는 「친구를 위해」라는 뜻이 돼요.' },
  { id: 'JB1P7', lesson: 'JB1', type: 'dictation', boss: true, prompt: '심사관이 하나 더 물어요. 받아쓰세요.', say: 'Do you have a return ticket?', tags: ['받아쓰기', '입국심사'], hints: ['Do you have 로 시작', 'return ticket = 돌아가는 표', 'Do you have a return ticket?'] },
  { id: 'JB1P8', lesson: 'JB1', type: 'speak', boss: true, prompt: '🔊 돌아가는 날을 말해요. 이 말을 하면 「Enjoy your stay.」를 들을 수 있어요!', say: "Yes, I'm flying back next Sunday.", ko: '네, 다음 주 일요일에 돌아가요.', tags: ['말하기', '입국심사'], hints: ['fly back = 비행기로 돌아가다', 'next Sunday = 다음 일요일', "Yes, I'm flying back next Sunday."] },
);
