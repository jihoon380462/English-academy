// courses/grammar/parts/g2.js — 챕터 2 「수동태·사역」 (G5~G8 + 보스 GB2). 스키마는 ../../basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 2, title: '수동태·사역', icon: '🔄', desc: '~돼요 · ~됐어요 · 맡겨서 ~했어요 — 행동을 「받는 쪽」에서 말해요' },
);
LESSONS.push(
  { id: 'G5', ch: 2, n: 5, title: '~돼요, ~되어 있어요 (be + p.p.)', minutes: 7,
    terms: { '수동태': '「~되다, ~받다」. 행동을 하는 쪽이 아니라 <b>받는 쪽</b>을 주어로 세운 문장이에요. 모양은 be + 과거분사(p.p.).', '능동태': '「~하다」. 행동을 하는 쪽이 주어인 보통 문장이에요.' },
    pages: [
      { title: '받는 쪽을 주어로', html: '<p>「사람들이 이 방을 매일 청소해요」 대신 「이 방은 매일 <b>청소돼요</b>」라고 말하고 싶을 때가 있어요. 그럴 땐 <b>be + p.p.</b>를 써요.</p><p>be동사는 주어에 맞춰 am / is / are 로 바꿔요.</p>',
        ex: [{ en: 'This room|is cleaned|every day.', roles: 'S V M', ko: '이 방은 매일 청소돼요.' }, { en: 'English|is spoken|in many countries.', roles: 'S V M', ko: '영어는 많은 나라에서 쓰여요.' }, { en: 'These shoes|are made|in Italy.', roles: 'S V M', ko: '이 신발은 이탈리아에서 만들어져요.' }] },
      { title: '능동 → 수동 바꾸기', html: '<table><tr><th>능동 (~하다)</th><th>수동 (~되다)</th></tr><tr><td>People <b>speak</b> English here.</td><td>English <b>is spoken</b> here.</td></tr><tr><td>They <b>sell</b> tickets online.</td><td>Tickets <b>are sold</b> online.</td></tr></table><p>목적어였던 말이 주어 자리로 오고, 동사는 be + p.p. 가 돼요.</p>',
        ex: [{ en: 'Tickets|are sold|online.', roles: 'S V M', ko: '표는 온라인으로 팔아요.' }, { en: 'The store|is closed|on Sundays.', roles: 'S V M', ko: '그 가게는 일요일마다 문을 닫아요.' }] },
      { title: '질문과 부정', html: '<p>질문은 be동사를 앞으로: <b>Is</b> breakfast <b>included</b>? 부정은 be동사 뒤에 not: It <b>isn\'t included</b>.</p>',
        ex: [{ en: 'Is|breakfast|included?', roles: 'Q S V', ko: '아침 식사가 포함돼 있어요?' }, { en: 'Smoking|is not allowed|here.', roles: 'S V M', ko: '여기서는 흡연이 허용되지 않아요.' }, { en: 'Where|are|these bags|made?', roles: 'Q Q S V', ko: '이 가방들은 어디서 만들어져요?' }],
        tip: 'Breakfast includes ✗ — 아침 식사가 무엇을 「포함하는」 게 아니라 「포함되는」 거라서 is included 예요.' },
    ],
    summary: ['수동태 = <b>be + p.p.</b> (~돼요, ~받아요).', 'be동사는 주어에 맞춰 am / is / are.', '질문은 <b>Is it + p.p.?</b>, 부정은 <b>is not + p.p.</b>'] },

  { id: 'G6', ch: 2, n: 6, title: '누가 했는지: by 쓰기와 빼기', minutes: 7,
    pages: [
      { title: 'by + 행동한 사람', html: '<p>누가 했는지 꼭 말하고 싶으면 문장 끝에 <b>by + 사람</b>을 붙여요. 「~에 의해」라는 뜻이에요.</p>',
        ex: [{ en: 'This song|was written|by my brother.', roles: 'S V M', ko: '이 노래는 우리 형이 썼어요.' }, { en: 'The cake|was made|by Jisoo.', roles: 'S V M', ko: '그 케이크는 지수가 만들었어요.' }, { en: 'The picture|was taken|by a tourist.', roles: 'S V M', ko: '그 사진은 어떤 관광객이 찍었어요.' }] },
      { title: '대부분은 by 를 빼요', html: '<p>수동태를 쓰는 진짜 이유는 <b>누가 했는지 모르거나 중요하지 않아서</b>예요. 그래서 실제 대화에서는 by 를 빼는 경우가 훨씬 많아요.</p><p>「by someone」, 「by people」처럼 뻔한 말은 붙이지 않아요.</p>',
        ex: [{ en: 'My bike|was stolen.', roles: 'S V', ko: '내 자전거를 도둑맞았어요.' }, { en: 'The road|is being repaired.', roles: 'S V', ko: '그 도로는 수리 중이에요.', note: '<b>is being + p.p.</b> = 지금 ~되고 있는 중' }, { en: 'Rice|is grown|in this area.', roles: 'S V M', ko: '이 지역에서는 쌀을 재배해요.' }] },
      { title: '느낌을 나타내는 p.p.', html: '<p>interested, surprised, worried 처럼 감정을 「받는」 말도 be + p.p. 모양이에요. 이때는 by 대신 <b>in / at / about</b> 이 자주 와요.</p>',
        ex: [{ en: 'I|am interested|in history.', roles: 'S V M', ko: '나는 역사에 관심이 있어요.' }, { en: 'She|was surprised|at the news.', roles: 'S V M', ko: '그녀는 그 소식에 놀랐어요.' }],
        tip: 'I am interesting ✗ (내가 흥미로운 사람) → I am <b>interested</b> ✓ (내가 흥미를 느껴요)' },
    ],
    summary: ['행동한 사람을 말하려면 <b>by + 사람</b>.', '누가 했는지 모르거나 중요하지 않으면 <b>by 를 빼요</b>.', '감정은 <b>be + p.p.</b>: interested in, surprised at.'] },

  { id: 'G7', ch: 2, n: 7, title: '~됐어요 · ~될 거예요 (수동태 과거·미래)', minutes: 7,
    pages: [
      { title: '과거: was / were + p.p.', html: '<p>이미 「~됐어요」는 be동사만 과거로: <b>was / were + p.p.</b></p>',
        ex: [{ en: 'The package|was delivered|this morning.', roles: 'S V M', ko: '택배는 오늘 아침에 배달됐어요.' }, { en: 'We|were invited|to the wedding.', roles: 'S V M', ko: '우리는 그 결혼식에 초대받았어요.' }, { en: 'This bridge|was built|in 1990.', roles: 'S V M', ko: '이 다리는 1990년에 지어졌어요.' }] },
      { title: '미래: will be + p.p.', html: '<p>「~될 거예요」는 <b>will be + p.p.</b> 예요. will 다음엔 항상 원형 be.</p><p>「~까지」 기한은 <b>by + 때</b>: by Friday(금요일까지).</p>',
        ex: [{ en: 'Your order|will be shipped|tomorrow.', roles: 'S V M', ko: '주문하신 상품은 내일 발송될 거예요.' }, { en: 'The results|will be announced|next week.', roles: 'S V M', ko: '결과는 다음 주에 발표될 거예요.' }, { en: 'It|will be fixed|by Friday.', roles: 'S V M', ko: '금요일까지 고쳐질 거예요.' }] },
      { title: '질문과 부정', html: '<p>과거 질문은 <b>Was it + p.p.?</b>, 미래 질문은 <b>Will it be + p.p.?</b> 부정은 wasn\'t / won\'t be.</p>',
        ex: [{ en: 'When|will|it|be delivered?', roles: 'Q Q S V', ko: '그거 언제 배달돼요?' }, { en: 'Was|the meeting|canceled?', roles: 'Q S V', ko: '회의가 취소됐어요?' }, { en: "I|wasn't invited|to the party.", roles: 'S V M', ko: '나는 그 파티에 초대받지 못했어요.' }] },
    ],
    summary: ['과거 수동: <b>was / were + p.p.</b>', '미래 수동: <b>will be + p.p.</b> (will 다음은 원형 be).', '언제 돼요? = <b>When will it be + p.p.?</b>'] },

  { id: 'G8', ch: 2, n: 8, title: '맡겨서 ~했어요 (have / get something done)', minutes: 8,
    terms: { '사역': '「~하게 하다, ~시키다」. 내가 직접 하지 않고 남에게 맡겨서 하는 걸 말해요.' },
    pages: [
      { title: '머리를 「잘랐어요」 = had my hair cut', html: '<p>한국어로 「머리 잘랐어요」라고 해도 보통 미용실에서 <b>남이</b> 잘라 준 거죠. 영어는 이걸 구분해요.</p><p><b>have + 물건 + p.p.</b> = (남에게 맡겨서) 물건이 ~되게 하다.</p>',
        ex: [{ en: 'I|had|my hair|cut|yesterday.', roles: 'S V O C M', ko: '어제 머리를 잘랐어요. (미용실에서)' }, { en: 'I|had|my car|washed.', roles: 'S V O C', ko: '세차를 맡겼어요.' }, { en: 'She|has|her nails|done|every month.', roles: 'S V O C M', ko: '그녀는 매달 네일을 받아요.' }] },
      { title: 'get + 물건 + p.p.', html: '<p>대화에서는 have 대신 <b>get</b> 도 많이 써요. 뜻은 거의 같고 조금 더 편한 말투예요.</p>',
        ex: [{ en: 'I|need to get|my phone|repaired.', roles: 'S V O C', ko: '휴대폰을 수리 맡겨야 해요.' }, { en: 'Where|can|I|get|this jacket|cleaned?', roles: 'Q Q S V O C', ko: '이 재킷은 어디서 세탁 맡길 수 있어요?' }, { en: 'We|got|the kitchen|painted|last month.', roles: 'S V O C M', ko: '지난달에 부엌 페인트칠을 맡겼어요.' }] },
      { title: '내가 했다 vs 맡겼다', html: '<table><tr><th>내가 직접</th><th>남에게 맡겨서</th></tr><tr><td>I cut my hair.</td><td>I had my hair cut.</td></tr><tr><td>I fixed my bike.</td><td>I got my bike fixed.</td></tr></table><p>순서가 중요해요: have/get → <b>물건</b> → p.p. 「have cut my hair」는 현재완료라서 뜻이 달라져요.</p>',
        ex: [{ en: 'I|fixed|my bike|myself.', roles: 'S V O M', ko: '자전거를 내가 직접 고쳤어요.' }, { en: 'I|got|my bike|fixed|at the shop.', roles: 'S V O C M', ko: '자전거를 가게에서 고쳤어요. (맡겨서)' }] },
    ],
    summary: ['맡겨서 했다 = <b>have / get + 물건 + p.p.</b>', '순서: have/get → <b>물건</b> → p.p.', 'I had my hair cut. / I need to get my phone repaired.'] },

  { id: 'GB2', ch: 2, boss: true, title: '상황 미션: 택배·수리 문의', minutes: 8,
    pages: [
      { title: '상황: 고객센터에 전화해요', html: '<p>온라인으로 산 노트북이 아직 안 왔어요. 겨우 받고 보니 화면도 깨져 있어요! 고객센터 직원 Tom 에게 전화해서 배달과 수리를 물어보세요.</p><p>물건이 주어인 문장이 많아요 → <b>수동태</b>로, 수리를 맡길 땐 <b>get it + p.p.</b> 로.</p>',
        ex: [{ en: 'My order|was shipped|last Monday.', roles: 'S V M', ko: '제 주문은 지난 월요일에 발송됐어요.' }, { en: "It|hasn't been delivered|yet.", roles: 'S V M', ko: '아직 배달이 안 됐어요.' }] },
      { title: '쓸 표현 미리보기', html: '<p>깨진 상태(is broken), 언제 될지(will be + p.p.), 맡기기(get it fixed)를 써요.</p>',
        ex: [{ en: 'The screen|is broken.', roles: 'S V', ko: '화면이 깨져 있어요.' }, { en: 'Can|I|get|it|fixed?', roles: 'Q S V O C', ko: '그거 고칠 수 있을까요? (수리 맡길 수 있어요?)' }, { en: 'It|will be repaired|within a week.', roles: 'S V M', ko: '일주일 안에 수리될 거예요.' }] },
    ],
    summary: ['배달 상태: <b>was shipped / hasn\'t been delivered</b>', '고장 상태: <b>is broken</b>, 앞으로: <b>will be repaired</b>', '수리 맡기기: <b>Can I get it fixed?</b>'] },
);
PROBLEMS.push(
  // G5 be + p.p.
  { id: 'G5P1', lesson: 'G5', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'This room ___ every day.', opts: ['is cleaned', 'cleans', 'is cleaning'], ans: 0, tags: ['수동태'], hints: ['방이 스스로 청소하나요?', '청소「되는」 쪽 → be + p.p.', 'This room is cleaned every day.'], why: '방은 청소를 받는 쪽이라 is cleaned (be + p.p.) 예요.' },
  { id: 'G5P2', lesson: 'G5', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Is breakfast included?', opts: ['아침 식사가 포함돼 있어요?', '아침 식사를 먹었어요?', '아침 식사가 맛있어요?'], ans: 0, tags: ['듣기', '수동태'], hints: ['included 가 들렸나요?', 'include = 포함하다', '아침 식사가 포함돼 있어요?'] },
  { id: 'G5P3', lesson: 'G5', type: 'match', prompt: '문장과 뜻을 짝지으세요.', pairs: [['Tickets are sold online.', '표는 온라인으로 팔아요.'], ['Smoking is not allowed here.', '여기서는 흡연이 안 돼요.'], ['The store is closed on Sundays.', '그 가게는 일요일마다 닫아요.'], ['English is spoken here.', '여기서는 영어를 써요.']], tags: ['수동태'], hints: ['be + p.p. = ~되다', 'allowed = 허용된', 'is closed = 닫혀 있다'] },
  { id: 'G5P4', lesson: 'G5', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '이 신발은 이탈리아에서 만들어져요.', answer: ['These shoes are made in Italy.'], cards: ['These shoes', 'are made', 'in Italy.'], roles: 'S V M', tags: ['수동태'], hints: ['주어 → be + p.p. → 어디서', '여럿이니 are made', 'These shoes are made in Italy.'] },
  { id: 'G5P5', lesson: 'G5', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '영어는 많은 나라에서 쓰여요.', answer: ['English is spoken in many countries.'], cards: ['English', 'is', 'spoken', 'in many countries.'], distractors: ['speaks'], tags: ['수동태'], hints: ['영어는 쓰이는 쪽', 'is + p.p. spoken', 'English is spoken in many countries.'] },
  { id: 'G5P6', lesson: 'G5', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '아침 식사가 포함돼 있어요.', wrong: 'Breakfast includes.', answer: ['Breakfast is included.'], tags: ['수동태', '오개념'], hints: ['아침 식사는 포함「되는」 쪽', 'be + p.p.', 'Breakfast is included.'], why: '아침 식사는 포함되는 쪽이라 is included 로 써야 해요.' },
  { id: 'G5P7', lesson: 'G5', type: 'fill', prompt: '빈칸을 채우세요.', ko: '이 가방들은 어디서 만들어져요?', text: 'Where ___ these bags made?', blanks: [{ a: ['are'], opt: ['are', 'is', 'do'] }], tags: ['수동태', '질문'], hints: ['수동태 질문은 be동사를 앞으로', 'these bags 는 여럿', 'are'], why: '수동태 질문은 be동사가 앞으로 와요. 주어가 여럿(these bags)이라 are.' },
  { id: 'G5P8', lesson: 'G5', type: 'type', prompt: '영어로 써 보세요.', ko: '여기서는 주차가 허용되지 않아요.', answer: ['Parking is not allowed here.', "Parking isn't allowed here.", 'Parking is not permitted here.', "Parking isn't permitted here.", 'Parking is prohibited here.', 'Parking is not allowed in here.'], tags: ['수동태', '부정'], hints: ['주차 = parking, 허용하다 = allow', 'is not + p.p.', 'Parking is not allowed here.'] },
  { id: 'G5P9', lesson: 'G5', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Is breakfast included?', ko: '아침 식사가 포함돼 있어요?', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'included 는 「인클루디드」', 'Is breakfast included?'] },

  // G6 by
  { id: 'G6P1', lesson: 'G6', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'This song was written ___ my brother.', opts: ['by', 'from', 'with'], ans: 0, tags: ['by'], hints: ['누가 썼는지 말하는 자리', '수동태에서 행동한 사람 앞은 by', 'This song was written by my brother.'], why: '수동태에서 행동한 사람은 by + 사람으로 붙여요.' },
  { id: 'G6P2', lesson: 'G6', type: 'choice', prompt: '누가 훔쳤는지 몰라요. 가장 자연스러운 문장을 고르세요.', opts: ['My bike was stolen.', 'My bike was stolen by someone.', 'My bike stole.'], ans: 0, sayOpts: true, tags: ['by 생략'], hints: ['누가 훔쳤는지 아나요?', '모르면 by 를 빼요', 'My bike was stolen.'], why: '누가 훔쳤는지 모를 땐 by someone 을 붙이지 않고 그냥 끝내요(문법상 틀린 건 아니지만 군더더기예요). My bike stole 은 「자전거가 훔쳤다」라서 틀려요.' },
  { id: 'G6P3', lesson: 'G6', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그 케이크는 지수가 만들었어요.', answer: ['The cake was made by Jisoo.'], cards: ['The cake', 'was made', 'by Jisoo.'], roles: 'S V M', tags: ['수동태', 'by'], hints: ['주어 → was + p.p. → by 누구', '만들어졌다 = was made', 'The cake was made by Jisoo.'] },
  { id: 'G6P4', lesson: 'G6', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 역사에 관심이 있어요.', answer: ['I am interested in history.', "I'm interested in history."], cards: ['I', 'am', 'interested', 'in history.'], distractors: ['interesting'], tags: ['감정 p.p.'], hints: ['내가 흥미를 「느끼는」 쪽', 'interested + in', 'I am interested in history.'] },
  { id: 'G6P5', lesson: 'G6', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그녀는 그 소식에 놀랐어요.', wrong: 'She was surprising at the news.', answer: ['She was surprised at the news.', 'She was surprised by the news.'], tags: ['감정 p.p.', '오개념'], hints: ['그녀가 놀람을 「받은」 쪽', 'surprising 대신 p.p.', 'She was surprised at the news.'], why: '감정을 느끼는 사람은 -ed(surprised), 감정을 주는 것은 -ing(surprising) 예요.' },
  { id: 'G6P6', lesson: 'G6', type: 'fill', prompt: '빈칸을 채우세요.', ko: '그 사진은 어떤 관광객이 찍었어요.', text: 'The picture was ___ by a tourist.', blanks: [{ a: ['taken'], opt: ['taken', 'took', 'take'] }], tags: ['수동태', 'p.p.'], hints: ['was 다음엔 p.p.', 'take – took – taken', 'taken'], why: 'be + p.p. 이므로 take 의 p.p. taken 이에요.' },
  { id: 'G6P7', lesson: 'G6', type: 'type', prompt: '영어로 써 보세요.', ko: '내 지갑을 도둑맞았어요.', answer: ['My wallet was stolen.', 'My wallet has been stolen.', 'Someone stole my wallet.', 'My wallet got stolen.', 'Someone has stolen my wallet.'], tags: ['수동태', 'by 생략'], hints: ['지갑이 주어, 누가 했는지는 몰라요', 'steal – stole – stolen', 'My wallet was stolen.'] },
  { id: 'G6P8', lesson: 'G6', type: 'type', prompt: '영어로 써 보세요.', ko: '이 그림은 우리 할머니가 그렸어요.', answer: ['This picture was painted by my grandmother.', 'This painting was painted by my grandmother.', 'This picture was drawn by my grandmother.', 'This picture was painted by my grandma.', 'This picture was drawn by my grandma.', 'My grandmother painted this picture.', 'My grandmother drew this picture.'], tags: ['수동태', 'by'], hints: ['그림이 주어 → was + p.p. + by', '그리다 paint → painted', 'This picture was painted by my grandmother.'] },
  { id: 'G6P9', lesson: 'G6', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'My bike was stolen.', ko: '내 자전거를 도둑맞았어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'stolen 은 「스톨른」', 'My bike was stolen.'] },

  // G7 과거·미래
  { id: 'G7P1', lesson: 'G7', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'The package ___ this morning.', opts: ['was delivered', 'delivered', 'is deliver'], ans: 0, tags: ['수동태 과거'], hints: ['택배가 배달「된」 거예요', '과거 수동 = was + p.p.', 'The package was delivered this morning.'], why: '택배는 배달되는 쪽이고 이미 일어난 일이라 was delivered.' },
  { id: 'G7P2', lesson: 'G7', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'Your order will ___ tomorrow.', opts: ['be shipped', 'shipped', 'is shipped'], ans: 0, tags: ['수동태 미래'], hints: ['will 다음엔 원형', 'will be + p.p.', 'Your order will be shipped tomorrow.'], why: 'will 다음엔 원형 be, 그리고 p.p. 가 와요.' },
  { id: 'G7P3', lesson: 'G7', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'The meeting was canceled.', opts: ['회의가 취소됐어요.', '회의가 연기될 거예요.', '회의를 취소할게요.'], ans: 0, tags: ['듣기', '수동태 과거'], hints: ['was 가 들렸나요?', 'was canceled = 취소됐다', '회의가 취소됐어요.'] },
  { id: 'G7P4', lesson: 'G7', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '우리는 그 결혼식에 초대받았어요.', answer: ['We were invited to the wedding.'], cards: ['We', 'were invited', 'to the wedding.'], roles: 'S V M', tags: ['수동태 과거'], hints: ['주어 → were + p.p. → 어디에', 'We 의 과거 be동사는 were', 'We were invited to the wedding.'] },
  { id: 'G7P5', lesson: 'G7', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '그거 언제 배달돼요?', answer: ['When will it be delivered?'], cards: ['When', 'will', 'it', 'be', 'delivered?'], distractors: ['deliver'], tags: ['수동태 미래', '질문'], hints: ['When + will + 주어', 'will it be + p.p. (deliver 가 아니라 delivered)', 'When will it be delivered?'] },
  { id: 'G7P6', lesson: 'G7', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '결과는 다음 주에 발표될 거예요.', wrong: 'The results will announced next week.', answer: ['The results will be announced next week.'], tags: ['수동태 미래', '오개념'], hints: ['will 과 p.p. 사이에 빠진 말', 'will be + p.p.', 'The results will be announced next week.'], why: '미래 수동태는 will 다음에 be 가 꼭 있어야 해요: will be announced.' },
  { id: 'G7P7', lesson: 'G7', type: 'type', prompt: '영어로 써 보세요.', ko: '이 다리는 1990년에 지어졌어요.', answer: ['This bridge was built in 1990.', 'The bridge was built in 1990.', 'This bridge was constructed in 1990.', 'The bridge was constructed in 1990.'], tags: ['수동태 과거'], hints: ['다리가 주어 → was + p.p.', 'build – built – built', 'This bridge was built in 1990.'] },
  { id: 'G7P8', lesson: 'G7', type: 'type', prompt: '영어로 써 보세요.', ko: '금요일까지 고쳐질 거예요.', answer: ['It will be fixed by Friday.', "It'll be fixed by Friday.", 'It will be repaired by Friday.', "It'll be repaired by Friday."], tags: ['수동태 미래'], hints: ['It will be + p.p.', '~까지 = by', 'It will be fixed by Friday.'] },
  { id: 'G7P9', lesson: 'G7', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'When will it be delivered?', ko: '그거 언제 배달돼요?', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'will it be 를 이어서', 'When will it be delivered?'] },

  // G8 have / get something done
  { id: 'G8P1', lesson: 'G8', type: 'choice', prompt: '미용실에서 머리를 잘랐어요. 알맞은 문장을 고르세요.', opts: ['I had my hair cut.', 'I cut my hair myself.', 'I had cut my hair.'], ans: 0, sayOpts: true, tags: ['사역'], hints: ['남이 잘라 줬어요', 'have + 물건 + p.p.', 'I had my hair cut.'], why: '남에게 맡겨서 했으면 have + 물건 + p.p. 예요. I had cut my hair 는 「(그 전에) 내가 직접 잘랐었다」는 과거완료라 뜻이 달라요.' },
  { id: 'G8P2', lesson: 'G8', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I need to get my phone repaired.', opts: ['휴대폰을 수리 맡겨야 해요.', '휴대폰을 직접 고쳐야 해요.', '새 휴대폰을 사야 해요.'], ans: 0, tags: ['듣기', '사역'], hints: ['get my phone repaired', 'get + 물건 + p.p. = 맡겨서 ~되게 하다', '휴대폰을 수리 맡겨야 해요.'] },
  { id: 'G8P3', lesson: 'G8', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '세차를 맡겼어요.', answer: ['I had my car washed.', 'I got my car washed.'], cards: ['I', 'had', 'my car', 'washed.'], roles: 'S V O C', tags: ['사역'], hints: ['have → 물건 → p.p.', '물건 = my car', 'I had my car washed.'] },
  { id: 'G8P4', lesson: 'G8', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이 재킷은 어디서 세탁 맡길 수 있어요?', answer: ['Where can I get this jacket cleaned?'], cards: ['Where', 'can', 'I', 'get', 'this jacket', 'cleaned?'], distractors: ['cleaning'], tags: ['사역', '질문'], hints: ['Where + can + I + get', 'get + 물건 + p.p.', 'Where can I get this jacket cleaned?'] },
  { id: 'G8P5', lesson: 'G8', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '어제 머리를 잘랐어요. (미용실에서)', wrong: 'I had cut my hair yesterday.', answer: ['I had my hair cut yesterday.', 'I got my hair cut yesterday.'], tags: ['사역', '어순'], hints: ['순서를 보세요', 'have → 물건 → p.p.', 'I had my hair cut yesterday.'], why: '맡겨서 했다는 have + 물건 + p.p. 순서예요. had cut my hair 는 「내가 직접 잘랐었다」(과거완료)라서 뜻이 달라져요.' },
  { id: 'G8P6', lesson: 'G8', type: 'fill', prompt: '빈칸을 채우세요.', ko: '지난달에 부엌 페인트칠을 맡겼어요.', text: 'We got the kitchen ___ last month.', blanks: [{ a: ['painted'], opt: ['painted', 'paint', 'painting'] }], tags: ['사역'], hints: ['get + 물건 + ?', '물건 다음은 p.p.', 'painted'], why: 'get + 물건 + p.p. 이므로 painted 예요.' },
  { id: 'G8P7', lesson: 'G8', type: 'type', prompt: '영어로 써 보세요.', ko: '자전거를 가게에서 고쳤어요. (맡겨서)', answer: ['I got my bike fixed at the shop.', 'I had my bike fixed at the shop.', 'I got my bike repaired at the shop.', 'I had my bike repaired at the shop.', 'I got my bicycle fixed at the shop.', 'I had my bicycle fixed at the shop.', 'I got my bike fixed at the store.'], tags: ['사역'], hints: ['got/had + 물건 + p.p.', '고치다 fix → fixed', 'I got my bike fixed at the shop.'] },
  { id: 'G8P8', lesson: 'G8', type: 'type', prompt: '영어로 써 보세요.', ko: '이번 주말에 머리를 자를 거예요. (미용실에서)', answer: ["I'm going to get my hair cut this weekend.", "I'm getting my hair cut this weekend.", "I'm going to have my hair cut this weekend.", "I'll get my hair cut this weekend.", "I'll have my hair cut this weekend.", "I'm having my hair cut this weekend.", "I'm going to get a haircut this weekend.", "I'm getting a haircut this weekend.", "I'll get a haircut this weekend."], tags: ['사역', '미래'], hints: ["I'm going to + get + 물건 + p.p.", 'get my hair cut', "I'm going to get my hair cut this weekend."] },
  { id: 'G8P9', lesson: 'G8', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I had my hair cut yesterday.', ko: '어제 머리를 잘랐어요. (미용실에서)', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'hair cut 을 이어서', 'I had my hair cut yesterday.'] },

  // GB2 택배·수리 문의
  { id: 'GB2P1', lesson: 'GB2', boss: true, type: 'listen', prompt: '직원 Tom 이 전화를 받았어요. 듣고 뜻을 고르세요.', say: 'How can I help you today?', opts: ['오늘 무엇을 도와드릴까요?', '오늘 주문하셨어요?', '오늘 어디 계세요?'], ans: 0, tags: ['듣기'], hints: ['How can I help', 'help = 돕다', '오늘 무엇을 도와드릴까요?'] },
  { id: 'GB2P2', lesson: 'GB2', boss: true, type: 'order', prompt: '주문 상황을 설명하세요. 카드를 순서대로 놓으세요.', ko: '제 주문은 지난 월요일에 발송됐어요.', answer: ['My order was shipped last Monday.'], cards: ['My order', 'was', 'shipped', 'last Monday.'], distractors: ['ship'], tags: ['수동태 과거'], hints: ['주문이 발송「된」 것', 'was + p.p.', 'My order was shipped last Monday.'] },
  { id: 'GB2P3', lesson: 'GB2', boss: true, type: 'type', prompt: '문제를 말하세요. 영어로 써 보세요.', ko: '아직 배달이 안 됐어요.', answer: ["It hasn't been delivered yet.", 'It has not been delivered yet.', "It still hasn't been delivered.", "My order hasn't been delivered yet.", "It hasn't arrived yet.", "My order hasn't arrived yet.", "It still hasn't arrived."], tags: ['수동태', 'yet'], hints: ["hasn't been + p.p. + yet", '배달되다 = be delivered', "It hasn't been delivered yet."] },
  { id: 'GB2P4', lesson: 'GB2', boss: true, type: 'choice', prompt: 'Tom 이 언제 받을 수 있는지 알려 줘요. 빈칸에 맞는 말을 고르세요.', q: 'It will ___ to you tomorrow.', opts: ['be delivered', 'deliver', 'delivered'], ans: 0, tags: ['수동태 미래'], hints: ['물건이 배달「되는」 것', 'will be + p.p.', 'It will be delivered to you tomorrow.'], why: '물건이 주어라 수동태, 미래라서 will be delivered.' },
  { id: 'GB2P5', lesson: 'GB2', boss: true, type: 'fix', prompt: '다음 날 받은 노트북 화면이 깨져 있어요. 틀린 곳을 고쳐 말하세요.', ko: '화면이 깨져 있어요.', wrong: 'The screen is break.', answer: ['The screen is broken.', 'The screen is cracked.'], tags: ['수동태', '오개념'], hints: ['be동사 다음 동사 모양', 'break – broke – broken', 'The screen is broken.'], why: '깨진 상태는 be + p.p. → is broken 이에요.' },
  { id: 'GB2P6', lesson: 'GB2', boss: true, type: 'type', prompt: '수리를 부탁하세요. 영어로 써 보세요.', ko: '그거 수리 맡길 수 있을까요?', answer: ['Can I get it fixed?', 'Can I get it repaired?', 'Could I get it fixed?', 'Could I get it repaired?', 'Can I have it fixed?', 'Can I have it repaired?', 'Could I have it fixed?', 'Could I have it repaired?'], tags: ['사역', '질문'], hints: ['Can I + get + 물건 + p.p.?', '물건 = it, 고치다 fix → fixed', 'Can I get it fixed?'] },
  { id: 'GB2P7', lesson: 'GB2', boss: true, type: 'fill', prompt: 'Tom 의 대답을 완성하세요.', ko: '일주일 안에 수리될 거예요.', text: 'It will ___ repaired within a week.', blanks: [{ a: ['be'], opt: ['be', 'is', 'been'] }], tags: ['수동태 미래'], hints: ['will 다음엔 원형', 'will be + p.p.', 'be'], why: 'will 다음엔 언제나 원형 be 가 와요.' },
  { id: 'GB2P8', lesson: 'GB2', boss: true, type: 'speak', prompt: '🔊 통화를 마무리하며 말해 보세요.', say: 'When will it be repaired?', ko: '언제 수리될까요?', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'will it be 를 이어서', 'When will it be repaired?'] },
);
