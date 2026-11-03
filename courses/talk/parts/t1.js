// courses/talk/parts/t1.js — 챕터 1 「따라 말하기(쉐도잉)」: 레슨 T1~T4 + 보스 TB1. 스키마는 courses/basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 1, title: '따라 말하기(쉐도잉)', icon: '🎧', desc: '듣고 바로 따라 말하며 영어의 리듬·억양·숫자·연음에 귀를 열어요' },
);
LESSONS.push(
  { id: 'T1', ch: 1, n: 1, title: '인사·자기소개 리듬', minutes: 6, terms: { '강세': '낱말이나 문장에서 더 세고 길게 말하는 부분', '쉐도잉': '들리는 문장을 그림자처럼 바로 뒤따라 소리 내어 말하는 연습' },
    pages: [
      { title: '중요한 낱말은 세게, 나머지는 약하게', html: '<p>영어는 모든 낱말을 똑같이 말하지 않아요. 뜻을 담은 낱말(<b>이름·동사·장소</b>)은 세고 길게, <b>to · a · the · am</b> 같은 작은 낱말은 짧고 약하게 말해요.</p><p>그래서 「Nice to <b>MEET</b> you」에서 to 는 「투」가 아니라 「터」 정도로 짧게 들려요. 이 쿵-짝 리듬을 따라 하면 훨씬 자연스러워져요.</p>',
        ex: [{ en: 'Nice to meet you.', ko: '만나서 반가워요.', note: '<b>NICE</b> to <b>MEET</b> you — 큰 글자를 세게.' }, { en: "I'm Mina. I work at a bank.", ko: '저는 미나예요. 은행에서 일해요.' }, { en: "I'm from Busan.", ko: '저는 부산 출신이에요.' }], tip: '🔊 를 듣고 0.5초 뒤에 겹쳐서 따라 말해 보세요. 뜻보다 리듬을 먼저 흉내 내요.' },
      { title: '묻고 답하는 자기소개', html: '<p>자기소개 대화는 거의 정해진 질문으로 이어져요. 질문의 <b>마지막 중요한 낱말</b>(from, do)을 세게 말하면 상대가 잘 알아들어요.</p><p>대답은 짧게 시작하고, <b>but · and</b> 로 한 가지를 더 붙이면 대화가 이어져요.</p>',
        ex: [{ en: 'Where are you from?', ko: '어디 출신이에요?' }, { en: "I'm from Seoul, but I live in Busan now.", ko: '서울 출신인데 지금은 부산에 살아요.' }, { en: 'What do you do?', ko: '무슨 일 하세요?' }, { en: "I'm a nurse. I work at a hospital.", ko: '저는 간호사예요. 병원에서 일해요.' }] },
    ],
    summary: ['뜻을 담은 낱말은 <b>세고 길게</b>, 작은 낱말(to, a, the)은 <b>약하게</b>.', '자기소개 질문: Where are you from? / What do you do?', '대답에 <b>but · and</b> 로 한 마디 더 붙이면 대화가 이어져요.'] },

  { id: 'T2', ch: 1, n: 2, title: '질문 억양 올리기/내리기', minutes: 6, terms: { '억양': '말의 높낮이. 문장 끝이 올라가는지(↗) 내려가는지(↘)' },
    pages: [
      { title: '예/아니오 질문은 끝을 올려요 ↗', html: '<p><b>Are / Do / Is / Can</b> 으로 시작해서 「예, 아니오」로 답하는 질문은 끝을 <b>올려요</b> ↗.</p><p>한국어 「준비됐어요?↗」와 비슷해서 어렵지 않아요.</p>',
        ex: [{ en: 'Are you ready?', ko: '준비됐어요?', note: '끝 ready 를 올려요 ↗' }, { en: 'Do you have a minute?', ko: '잠깐 시간 있어요?' }, { en: 'Is this seat taken?', ko: '이 자리 주인 있어요?' }] },
      { title: '의문사 질문은 끝을 내려요 ↘', html: '<p><b>What · Where · When · How</b> 같은 의문사(무엇·어디 등을 묻는 말)로 시작하는 질문은 끝을 <b>내려요</b> ↘.</p><p>한국인은 질문이면 무조건 올리는 버릇이 있어요. 의문사 질문을 올리면 「뭐라고요? 다시 말해 줘요」처럼 들릴 수 있어요.</p>',
        ex: [{ en: 'Where is the station?', ko: '역이 어디예요?', note: 'station 에서 내려요 ↘' }, { en: 'What time does the store close?', ko: '가게는 몇 시에 닫아요?' }, { en: 'How was your weekend?', ko: '주말 어땠어요?' }] },
      { title: '한 낱말도 올리면 질문이 돼요', html: '<p>낱말 하나나 평서문 모양이라도 끝을 올리면 질문이나 놀람이 돼요. 「Coffee?↗」는 「커피 드실래요?」, 「You\'re leaving already?↗」는 「벌써 가요?」예요.</p>',
        ex: [{ en: 'Coffee?', ko: '커피 드실래요?', deck: false }, { en: "You're leaving already?", ko: '벌써 가요?' }] },
    ],
    summary: ['예/아니오 질문(Are, Do, Is, Can …)은 끝을 <b>올려요 ↗</b>.', '의문사 질문(What, Where, How …)은 끝을 <b>내려요 ↘</b>.', '평서문도 끝을 올리면 질문·놀람이 돼요.'] },

  { id: 'T3', ch: 1, n: 3, title: '숫자·시간·가격 듣기', minutes: 7,
    pages: [
      { title: '15 와 50 은 강세로 구별해요', html: '<p><b>-teen</b>(13~19)은 뒤를 세게: fif<b>TEEN</b>. <b>-ty</b>(20, 30 … 90)는 앞을 세게: <b>FIF</b>ty.</p><p>끝소리 「n」이 잘 안 들려도 <b>어디가 센지</b>를 들으면 구별돼요. 다만 뒤에 낱말이 붙으면(fifteen dollars) -teen 의 강세가 앞으로 옮겨 가기도 해요. 그럴 땐 <b>끝소리 길이</b>로 들어요: -teen 은 「티-인」 길게, -ty 는 「티」 짧게 끝나요(미국식은 thirty 「써리」, forty 「포리」처럼 t 가 ㄹ에 가깝게 굴러요).</p>',
        ex: [{ en: "That's fifteen dollars.", ko: '15달러입니다.' }, { en: "That's fifty dollars.", ko: '50달러입니다.' }, { en: 'My office is on the thirteenth floor.', ko: '제 사무실은 13층이에요.' }] },
      { title: '시간은 숫자 두 개를 이어서', html: '<p>7:30 은 보통 <b>seven thirty</b> 처럼 숫자를 이어 말해요. 15분은 <b>a quarter</b>(4분의 1)라고도 해요: <b>a quarter past ten</b> = 10시 15분, <b>a quarter to ten</b> = 9시 45분. 미국에서는 past 대신 <b>after</b>(a quarter after ten)도 써요.</p>',
        ex: [{ en: "It's seven thirty.", ko: '7시 30분이에요.' }, { en: 'The meeting starts at a quarter past ten.', ko: '회의는 10시 15분에 시작해요.' }, { en: 'The store closes at nine.', ko: '가게는 9시에 닫아요.' }] },
      { title: '가격은 dollars 를 자주 빼요', html: '<p>$4.50 은 <b>four fifty</b> 처럼 달러와 센트를 이어 말하고 dollars 는 자주 생략해요. 계산대에서는 <b>That comes to …</b>(다 해서 …예요)를 많이 들어요.</p>',
        ex: [{ en: 'That comes to twelve fifty.', ko: '다 해서 12달러 50센트예요.' }, { en: 'The ticket is twenty-five dollars.', ko: '표는 25달러예요.' }] },
    ],
    summary: ['-teen 은 뒤가 세고(fifTEEN), -ty 는 앞이 세요(FIFty).', '시간은 숫자를 이어서: seven thirty, a quarter past ten.', '가격도 이어서: four fifty = $4.50.'] },

  { id: 'T4', ch: 1, n: 4, title: '연음 덩어리 듣기 (wanna·gonna)', minutes: 7, terms: { '연음': '앞 낱말 끝소리와 뒤 낱말 첫소리가 이어져 한 덩어리로 들리는 것' },
    pages: [
      { title: 'want to → wanna, going to → gonna', html: '<p>빨리 말하면 <b>want to</b> 는 「워너」(wanna), <b>going to</b> 는 「거너」(gonna), <b>have got to</b> 는 「가러」(gotta, 미국식. 영국식은 「고타」에 가까워요)로 들려요.</p><p>gonna 는 <b>going to + 동사</b>일 때만 써요. 「I\'m going to the bank(은행에 가는 중)」처럼 to 뒤에 장소가 오면 gonna 로 줄이지 않아요. 말할 때는 줄여도 되지만, 글로 쓸 때는 원래대로 쓰는 게 좋아요.</p>',
        ex: [{ en: 'I want to try that.', ko: '저거 해 보고 싶어요.', note: '빨리 말하면 <b>I wanna try that.</b>' }, { en: "I'm going to be late.", ko: '저 늦을 것 같아요.', note: "<b>I'm gonna be late.</b> 처럼 들려요." }, { en: "I've got to go.", ko: '저 가 봐야 해요.', note: "<b>I've gotta go.</b>" }] },
      { title: '끝소리 + 모음은 붙어서 들려요', html: '<p>앞 낱말이 자음으로 끝나고 뒤 낱말이 모음으로 시작하면 이어져요. <b>pick it up</b> → 「피끼럽」(미국식은 it 의 t 가 ㄹ처럼 굴러요), <b>hold on a</b> → 「홀도너」.</p>',
        ex: [{ en: 'Can I pick it up later?', ko: '나중에 가지러 와도 돼요?' }, { en: 'Hold on a second.', ko: '잠깐만요.' }, { en: 'Let me check it out.', ko: '제가 한번 볼게요.' }] },
      { title: 'Did you · Would you · What do you', html: '<p><b>d + you</b> 는 「쥬」로 합쳐져요: Did you → 「디쥬」, Would you → 「우쥬」. <b>What do you</b> 는 (미국식으로 빨리 말하면) 「와러유」처럼 뭉개져요.</p>',
        ex: [{ en: 'Did you eat lunch?', ko: '점심 먹었어요?' }, { en: 'Would you like some water?', ko: '물 좀 드릴까요?' }, { en: 'What do you want to do?', ko: '뭐 하고 싶어요?' }] },
    ],
    summary: ['want to → wanna, going to → gonna, got to → gotta.', '자음 끝 + 모음 시작은 이어져요: pick it up → 피끼럽.', 'Did you → 디쥬, Would you → 우쥬.'] },

  { id: 'TB1', ch: 1, boss: true, title: '상황 미션: 카페 주문 끝까지', minutes: 7,
    pages: [
      { title: '카페 카운터에서', html: '<p>아침 출근길, 카페 카운터 앞이에요. 직원의 질문을 <b>듣고</b>, 내 차례에 <b>말해서</b> 주문을 끝까지 마쳐요.</p><p>순서: 인사·주문 → 사이즈 → 매장/포장 → 가격 → 계산.</p>',
        ex: [{ en: 'Hi, what can I get for you?', ko: '안녕하세요, 뭐 드릴까요?' }, { en: 'Can I get an iced latte, please?', ko: '아이스 라테 한 잔 주세요.' }, { en: 'For here or to go?', ko: '드시고 가세요, 가져가세요?' }, { en: 'To go, please.', ko: '가져갈게요.' }] },
    ],
    summary: ['주문: Can I get …, please?', '매장/포장: For here or to go? → To go, please.', '가격은 숫자를 이어 들어요: five seventy-five = $5.75.'] },
);
PROBLEMS.push(
  // T1 인사·자기소개 리듬
  { id: 'T1P1', lesson: 'T1', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Nice to meet you, too.', opts: ['저도 만나서 반가워요.', '만나서 반가워요, 또 봐요.', '다시 만나서 반가워요.'], ans: 0, tags: ['듣기', '인사'], hints: ['마지막 낱말을 들어 보세요', 'too = ~도', '저도 만나서 반가워요.'] },
  { id: 'T1P2', lesson: 'T1', type: 'choice', prompt: '이 문장에서 가장 <b>약하게</b> 들리는 낱말을 고르세요.', q: 'Nice to meet you.', opts: ['to', 'meet', 'Nice'], ans: 0, tags: ['리듬'], hints: ['뜻을 담은 낱말은 세게 말해요', '작은 낱말이 약해져요', 'to'], why: 'to 같은 작은 낱말은 「터」 정도로 짧고 약하게 지나가요. Nice 와 meet 이 세게 들려요.' },
  { id: 'T1P3', lesson: 'T1', type: 'listen', prompt: '듣고 이 사람에 대해 맞는 것을 고르세요.', say: "I'm Tom. I'm a teacher.", opts: ['톰은 선생님이에요.', '톰은 학생이에요.', '톰은 의사예요.'], ans: 0, tags: ['듣기', '자기소개'], hints: ['두 번째 문장의 끝을 들어 보세요', 'teacher = 선생님', '톰은 선생님이에요.'] },
  { id: 'T1P4', lesson: 'T1', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '서울 출신인데 지금은 부산에 살아요.', answer: ["I'm from Seoul, but I live in Busan now.", 'I am from Seoul, but I live in Busan now.'], cards: ["I'm", 'from', 'Seoul,', 'but', 'I', 'live', 'in', 'Busan now.'], distractors: ['lives'], tags: ['자기소개'], hints: ["I'm from + 출신", 'but 뒤에 지금 사는 곳', "I'm from Seoul, but I live in Busan now."] },
  { id: 'T1P5', lesson: 'T1', type: 'dictation', prompt: '듣고 그대로 받아쓰세요.', say: 'Nice to meet you.', tags: ['받아쓰기', '인사'], hints: ['네 낱말이에요', 'to 가 약하게 들려요', 'Nice to meet you.'] },
  { id: 'T1P6', lesson: 'T1', type: 'type', prompt: '영어로 써 보세요.', ko: '무슨 일 하세요?', answer: ['What do you do?', 'What do you do for a living?', "What's your job?", 'What is your job?', 'What kind of work do you do?', 'What do you do for work?', 'What kind of job do you have?', 'What is your occupation?'], tags: ['자기소개'], hints: ['의문사 What 으로 시작해요', 'What do you … ?', 'What do you do?'] },
  { id: 'T1P7', lesson: 'T1', type: 'speak', prompt: '🔊 듣고 리듬을 살려 따라 말해 보세요.', say: "Hi, I'm Mina. Nice to meet you.", ko: '안녕하세요, 저는 미나예요. 만나서 반가워요.', tags: ['말하기', '인사'], hints: ['🐢 로 천천히 먼저 들어 보세요', 'Mina 와 meet 을 세게', "Hi, I'm Mina. Nice to meet you."] },
  { id: 'T1P8', lesson: 'T1', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I'm from Seoul, but I live in Busan now.", ko: '서울 출신인데 지금은 부산에 살아요.', tags: ['말하기', '자기소개'], hints: ['두 덩어리로 나눠서 따라 해요', 'Seoul 과 Busan 을 세게', "I'm from Seoul, but I live in Busan now."] },

  // T2 질문 억양
  { id: 'T2P1', lesson: 'T2', type: 'choice', prompt: '이 질문의 끝 억양을 고르세요.', q: 'Where do you live?', opts: ['내려요 ↘', '올려요 ↗'], ans: 0, tags: ['억양'], hints: ['첫 낱말을 보세요', 'Where 는 의문사예요', '내려요 ↘'], why: 'Where · What · How 같은 의문사 질문은 끝을 내려요.' },
  { id: 'T2P2', lesson: 'T2', type: 'choice', prompt: '이 질문의 끝 억양을 고르세요.', q: 'Do you like spicy food?', opts: ['올려요 ↗', '내려요 ↘'], ans: 0, tags: ['억양'], hints: ['예/아니오로 답할 수 있나요?', 'Do 로 시작하는 질문이에요', '올려요 ↗'], why: 'Do / Are / Can 으로 시작해 예·아니오로 답하는 질문은 끝을 올려요.' },
  { id: 'T2P3', lesson: 'T2', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Is this seat taken?', opts: ['이 자리 주인 있어요?', '이 좌석은 몇 번이에요?', '이 자리가 마음에 들어요?'], ans: 0, tags: ['듣기', '억양'], hints: ['taken = 이미 차지된', '누가 앉았는지 묻는 말이에요', '이 자리 주인 있어요?'] },
  { id: 'T2P4', lesson: 'T2', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'How was your weekend?', opts: ['주말 어땠어요?', '주말에 뭐 해요?', '주말이 언제예요?'], ans: 0, tags: ['듣기', '억양'], hints: ['was 는 지난 일', 'How was … ? = … 어땠어요?', '주말 어땠어요?'] },
  { id: 'T2P5', lesson: 'T2', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '잠깐 시간 있어요?', answer: ['Do you have a minute?'], cards: ['Do', 'you', 'have', 'a', 'minute?'], distractors: ['Does'], tags: ['질문'], hints: ['you 질문은 Do 로 시작', 'Do you have …?', 'Do you have a minute?'] },
  { id: 'T2P6', lesson: 'T2', type: 'type', prompt: '영어로 써 보세요. (끝을 내려 말하는 질문이에요)', ko: '역이 어디예요?', answer: ['Where is the station?', 'Where is the train station?', 'Where is the subway station?', 'Where can I find the station?', 'Where is the station located?'], tags: ['질문'], hints: ['Where 로 시작해요', 'Where is the …?', 'Where is the station?'] },
  { id: 'T2P7', lesson: 'T2', type: 'dictation', prompt: '듣고 그대로 받아쓰세요.', say: 'Are you ready to order?', tags: ['받아쓰기', '억양'], hints: ['Are you 로 시작해요', 'ready to order = 주문할 준비가 된', 'Are you ready to order?'] },
  { id: 'T2P8', lesson: 'T2', type: 'speak', prompt: '🔊 끝을 <b>올리며</b> 따라 말해 보세요 ↗', say: 'Do you have a minute?', ko: '잠깐 시간 있어요?', tags: ['말하기', '억양'], hints: ['예/아니오 질문이에요', 'minute 에서 올려요', 'Do you have a minute? ↗'] },
  { id: 'T2P9', lesson: 'T2', type: 'speak', prompt: '🔊 끝을 <b>내리며</b> 따라 말해 보세요 ↘', say: 'What time does the store close?', ko: '가게는 몇 시에 닫아요?', tags: ['말하기', '억양'], hints: ['의문사 질문이에요', 'close 에서 내려요', 'What time does the store close? ↘'] },

  // T3 숫자·시간·가격
  { id: 'T3P1', lesson: 'T3', type: 'listen', prompt: '듣고 가격을 고르세요.', say: "That's fifteen dollars.", opts: ['$15', '$50', '$5'], ans: 0, tags: ['숫자 듣기'], hints: ['어디가 세게 들렸나요?', '뒤가 세면 -teen', '$15 (fifTEEN)'] },
  { id: 'T3P2', lesson: 'T3', type: 'listen', prompt: '듣고 출발 시각을 고르세요.', say: 'The train leaves at seven forty.', opts: ['7시 40분', '7시 14분', '4시 17분'], ans: 0, tags: ['시간 듣기'], hints: ['숫자 두 개가 이어져요', 'seven 다음 FORty(앞이 셈)', '7시 40분'] },
  { id: 'T3P3', lesson: 'T3', type: 'listen', prompt: '듣고 회의 시각을 고르세요.', say: 'The meeting starts at a quarter to ten.', opts: ['9시 45분', '10시 15분', '10시 45분'], ans: 0, tags: ['시간 듣기'], hints: ['a quarter = 15분', 'to ten = 10시가 되기 전', '9시 45분'] },
  { id: 'T3P4', lesson: 'T3', type: 'choice', prompt: '「<b>FIF</b>-ty」처럼 앞이 세게 들렸어요. 빈칸에 맞는 말은?', q: 'The bus comes in ___ minutes.', opts: ['fifty', 'fifteen'], ans: 0, tags: ['숫자 듣기'], hints: ['강세 위치를 떠올려요', '앞이 세면 -ty', 'fifty'], why: '-ty(20·30…)는 앞이 세고, -teen(13~19)은 뒤가 세요.' },
  { id: 'T3P5', lesson: 'T3', type: 'dictation', prompt: '듣고 받아쓰세요. 숫자는 글자나 숫자 어느 쪽으로 써도 돼요.', say: "It's seven thirty.", answer: ["It's seven thirty.", "It's 7:30.", "It's 7 30.", "It's seven-thirty."], tags: ['받아쓰기', '시간 듣기'], hints: ["It's 로 시작해요", 'seven 다음 THIRty', "It's seven thirty."] },
  { id: 'T3P6', lesson: 'T3', type: 'dictation', prompt: '듣고 받아쓰세요. 가격은 글자나 숫자 어느 쪽으로 써도 돼요.', say: 'That comes to twelve fifty.', answer: ['That comes to twelve fifty.', 'That comes to $12.50.', 'That comes to 12.50.', 'That comes to 12 50.', 'That comes to twelve-fifty.'], tags: ['받아쓰기', '가격 듣기'], hints: ['That comes to = 다 해서', '12달러 50센트', 'That comes to twelve fifty.'] },
  { id: 'T3P7', lesson: 'T3', type: 'type', prompt: '영어로 써 보세요.', ko: '가게는 9시에 닫아요.', answer: ['The store closes at nine.', 'The store closes at 9.', "The store closes at nine o'clock.", 'The shop closes at nine.', 'The shop closes at 9.', 'The store closes at 9 pm.', 'The store closes at 9:00.', "The shop closes at nine o'clock.", 'The store closes at 9 p.m.', 'The store closes at 9pm.', 'The shop closes at 9 pm.'], tags: ['시간'], hints: ['The store 가 주어', 'closes at + 시각', 'The store closes at nine.'] },
  { id: 'T3P8', lesson: 'T3', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'The meeting starts at a quarter past ten.', ko: '회의는 10시 15분에 시작해요.', tags: ['말하기', '시간'], hints: ['a quarter 를 한 덩어리로', 'past ten = 10시 지나서', 'The meeting starts at a quarter past ten.'] },
  { id: 'T3P9', lesson: 'T3', type: 'speak', prompt: '🔊 fifTEEN 의 강세와 긴 끝소리를 살려 따라 말해 보세요.', say: "I'll be there in fifteen minutes.", ko: '15분 뒤에 도착할게요.', tags: ['말하기', '숫자'], hints: ['fifTEEN 은 뒤를 세고 길게', '「피프티-인」처럼 끝을 끌어요', "I'll be there in fifteen minutes."] },

  // T4 연음 덩어리
  { id: 'T4P1', lesson: 'T4', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "I'm gonna be late.", opts: ['저 늦을 것 같아요.', '저 늦지 않을 거예요.', '저 늦게 일어났어요.'], ans: 0, tags: ['듣기', '연음'], hints: ['gonna = going to', '앞으로 일어날 일이에요', '저 늦을 것 같아요.'] },
  { id: 'T4P2', lesson: 'T4', type: 'choice', prompt: '이 문장의 <b>wanna</b> 를 원래대로 풀면?', q: 'I wanna go home.', opts: ['want to', 'want a', 'wants'], ans: 0, tags: ['연음'], hints: ['「~하고 싶다」예요', 'want + to + 동사', 'want to'], why: 'wanna 는 want to 를 빨리 말한 소리예요. I want to go home. (뒤에 명사가 오면 want a 일 때도 있지만, 여기는 동사 go 가 와서 want to 예요.)' },
  { id: 'T4P3', lesson: 'T4', type: 'match', prompt: '문장과 뜻을 짝 지으세요.', pairs: [['I wanna rest.', '쉬고 싶어요.'], ["I'm gonna call her.", '그녀에게 전화할 거예요.'], ["I've gotta go.", '가 봐야 해요.'], ['Hold on a second.', '잠깐만요.']], tags: ['연음'], hints: ['wanna = 하고 싶다', 'gonna = 할 거다, gotta = 해야 한다', 'Hold on = 기다려요'] },
  { id: 'T4P4', lesson: 'T4', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Did you eat lunch?', opts: ['점심 먹었어요?', '점심 먹을래요?', '점심 어디서 먹어요?'], ans: 0, tags: ['듣기', '연음'], hints: ['Did you → 「디쥬」', 'Did 는 지난 일을 물어요', '점심 먹었어요?'] },
  { id: 'T4P5', lesson: 'T4', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '저거 해 보고 싶어요.', answer: ['I want to try that.', 'I wanna try that.'], cards: ['I', 'want', 'to', 'try', 'that.'], distractors: ['wants'], tags: ['연음'], hints: ['wanna 를 풀어 써요', 'I want to + 동사', 'I want to try that.'] },
  { id: 'T4P6', lesson: 'T4', type: 'dictation', prompt: '듣고 받아쓰세요. wanna 는 want to 로 써도 돼요.', say: 'What do you wanna do?', answer: ['What do you want to do?', 'What do you wanna do?'], tags: ['받아쓰기', '연음'], hints: ['What do you 가 뭉개져요', 'wanna = want to', 'What do you want to do?'] },
  { id: 'T4P7', lesson: 'T4', type: 'dictation', prompt: '듣고 받아쓰세요.', say: 'Would you like some water?', tags: ['받아쓰기', '연음'], hints: ['Would you → 「우쥬」', 'like some + 마실 것', 'Would you like some water?'] },
  { id: 'T4P8', lesson: 'T4', type: 'speak', prompt: '🔊 gonna 를 살려 따라 말해 보세요.', say: "I'm gonna grab a coffee.", ko: '커피 한 잔 사 올게요.', tags: ['말하기', '연음'], hints: ['gonna 는 「거너」', 'grab a 는 「그래버」로 이어져요', "I'm gonna grab a coffee."] },
  { id: 'T4P9', lesson: 'T4', type: 'speak', prompt: '🔊 이어지는 소리를 살려 따라 말해 보세요.', say: 'Can I pick it up later?', ko: '나중에 가지러 와도 돼요?', tags: ['말하기', '연음'], hints: ['pick it up → 「피끼럽」', 'Can I 는 「캐나이」', 'Can I pick it up later?'] },

  // TB1 카페 주문
  { id: 'TB1P1', lesson: 'TB1', type: 'listen', boss: true, prompt: '직원이 말을 걸어요. 무슨 뜻일까요?', say: 'Hi, what can I get for you?', opts: ['뭐 드릴까요?', '어디 가세요?', '뭘 찾으세요?'], ans: 0, tags: ['듣기', '카페'], hints: ['get for you = 당신에게 가져다주다', '주문을 받는 말이에요', '뭐 드릴까요?'] },
  { id: 'TB1P2', lesson: 'TB1', type: 'order', boss: true, prompt: '주문해요. 카드를 순서대로 놓으세요.', ko: '아이스 라테 한 잔 주세요.', answer: ['Can I get an iced latte, please?', "I'd like an iced latte, please."], cards: ['Can', 'I', 'get', 'an', 'iced', 'latte,', 'please?'], distractors: ['a'], tags: ['카페', '주문'], hints: ['Can I get … please?', 'iced 는 모음 소리로 시작 → an', 'Can I get an iced latte, please?'] },
  { id: 'TB1P3', lesson: 'TB1', type: 'listen', boss: true, prompt: '직원이 다시 물어요. 무슨 뜻일까요?', say: 'What size would you like?', opts: ['어떤 사이즈로 드릴까요?', '어떤 맛으로 드릴까요?', '몇 잔 드릴까요?'], ans: 0, tags: ['듣기', '카페'], hints: ['첫 덩어리 What size 를 들어요', 'size = 크기', '어떤 사이즈로 드릴까요?'] },
  { id: 'TB1P4', lesson: 'TB1', type: 'type', boss: true, prompt: '영어로 대답해 보세요.', ko: '큰 걸로 주세요.', answer: ['A large, please.', 'Large, please.', 'A large one, please.', "I'll have a large, please.", "I'd like a large, please.", 'Large one, please.', 'Can I get a large, please?', 'Can I have a large, please?', 'Can I get a large?', 'Large size, please.', 'A large size, please.'], tags: ['카페', '주문'], hints: ['크기 = large', '짧게 large 에 please 만 붙여도 돼요', 'A large, please.'] },
  { id: 'TB1P5', lesson: 'TB1', type: 'dictation', boss: true, prompt: '직원의 질문을 받아쓰세요.', say: 'For here or to go?', tags: ['받아쓰기', '카페'], hints: ['다섯 낱말이에요', 'here 와 to go 중 고르는 질문', 'For here or to go?'] },
  { id: 'TB1P6', lesson: 'TB1', type: 'speak', boss: true, prompt: '🔊 가져간다고 말해 보세요.', say: "I'd like it to go, please.", ko: '가져갈게요.', tags: ['말하기', '카페'], hints: ["I'd like it + to go", 'go 를 세게', "I'd like it to go, please."] },
  { id: 'TB1P7', lesson: 'TB1', type: 'listen', boss: true, prompt: '가격을 들어요. 얼마일까요?', say: "That'll be five seventy-five.", opts: ['$5.75', '$7.55', '$5.17'], ans: 0, tags: ['가격 듣기'], hints: ['숫자 두 덩어리', 'five / seventy-five', '$5.75'] },
  { id: 'TB1P8', lesson: 'TB1', type: 'speak', boss: true, prompt: '🔊 카드로 계산해도 되는지 물어보세요.', say: 'Can I pay by card?', ko: '카드로 계산해도 돼요?', tags: ['말하기', '카페'], hints: ['Can I …? 질문이에요', 'pay by card = 카드로 내다', 'Can I pay by card? ↗'] },
);
