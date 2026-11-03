// courses/grammar/parts/g3.js — 챕터 3 「관계사·명사절」 (G9~G13 + 보스 GB3). 스키마는 ../../basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 3, title: '관계사·명사절', icon: '🔗', desc: '~하는 사람 · ~한 곳 · ~하는 것 · 어디인지 — 문장 안에 문장을 넣어 길게 말해요' },
);
LESSONS.push(
  { id: 'G9', ch: 3, n: 9, title: '~하는 사람 · ~한 물건 (who / which / that)', minutes: 8,
    terms: { '관계대명사': '앞에 나온 명사를 뒤에서 꾸며 주는 연결어. 사람이면 who, 물건이면 which, 둘 다 that.', '선행사': '관계대명사가 꾸며 주는 앞의 명사. 「옆집에 사는 남자」에서 「남자」.' },
    pages: [
      { title: '꾸밈말이 명사 뒤로 가요', html: '<p>한국어는 「<b>옆집에 사는</b> 남자」처럼 꾸밈말이 앞에 오지만, 영어는 「the man <b>who lives next door</b>」처럼 명사 <b>뒤</b>에 와요.</p><p>사람 뒤에는 <b>who</b>, 물건·동물 뒤에는 <b>which</b>, 둘 다 <b>that</b> 도 돼요.</p>',
        ex: [{ en: 'The man|who lives next door|is|a doctor.', roles: 'S M V C', ko: '옆집에 사는 남자는 의사예요.' }, { en: 'I|have|a friend|who speaks three languages.', roles: 'S V O M', ko: '나는 3개 국어를 하는 친구가 있어요.' }, { en: 'This|is|the bus|that goes to the airport.', roles: 'S V C M', ko: '이게 공항 가는 버스예요.' }],
        tip: '쉼표(,) 뒤에 덧붙이는 설명에는 that 을 못 써요: My sister<b>, who</b> lives in Busan, is a nurse. (, that ✗) 쉼표가 있을 땐 who/which 를 뺄 수도 없어요.' },
      { title: '「내가 ~한」 물건 (that 생략)', html: '<p>「<b>내가 어제 산</b> 책」처럼 꾸밈말 안에 주어가 따로 있으면 that/which(사람이면 who)를 <b>빼도</b> 돼요. 대화에서는 빼는 경우가 많아요. (쉼표 없이 바로 꾸밀 때만)</p><p>이미 앞 명사를 가리키니 뒤에 it 을 또 쓰지 않아요.</p>',
        ex: [{ en: 'This|is|the book|that I bought yesterday.', roles: 'S V C M', ko: '이게 내가 어제 산 책이에요.' }, { en: 'The cake|you made|was|delicious.', roles: 'S M V C', ko: '네가 만든 케이크 맛있었어.' }, { en: 'The movie|we watched last night|was|boring.', roles: 'S M V C', ko: '어젯밤에 우리가 본 영화는 지루했어요.' }],
        tip: 'the book that I bought <s>it</s> ✗ — it 을 또 쓰지 않아요.' },
      { title: 'who / which 뒤의 동사', html: '<p>who·which·that 이 꾸밈말의 <b>주어</b> 역할이면 바로 동사가 와요. 동사 모양은 <b>앞 명사</b>에 맞춰요.</p><p>a friend who <b>lives</b> … (한 명) / friends who <b>live</b> … (여럿)</p>',
        ex: [{ en: 'I|like|people|who smile a lot.', roles: 'S V O M', ko: '나는 잘 웃는 사람들이 좋아요.' }, { en: 'She|bought|a phone|which has a big screen.', roles: 'S V O M', ko: '그녀는 화면이 큰 휴대폰을 샀어요.' }] },
    ],
    summary: ['꾸밈말은 명사 <b>뒤</b>: the man <b>who</b> lives next door.', '사람 = who, 물건 = which, 둘 다 = that.', '「내가 ~한」이면 that 생략 가능: the cake (that) you made.'] },

  { id: 'G10', ch: 3, n: 10, title: '~한 곳 · ~한 때 (where / when)', minutes: 7,
    pages: [
      { title: '장소 + where', html: '<p>「<b>우리가 처음 만난</b> 카페」처럼 장소를 꾸밀 때는 <b>where</b> 를 써요. where 뒤에는 주어 + 동사가 다 갖춰진 문장이 와요.</p>',
        ex: [{ en: 'This|is|the cafe|where we first met.', roles: 'S V C M', ko: '여기가 우리가 처음 만난 카페예요.' }, { en: 'I|know|a place|where we can park.', roles: 'S V O M', ko: '주차할 수 있는 곳을 알아요.' }, { en: 'That|is|the hospital|where I was born.', roles: 'S V C M', ko: '저기가 내가 태어난 병원이에요.' }] },
      { title: '때 + when', html: '<p>「<b>우리가 만난</b> 날」처럼 때를 꾸밀 때는 <b>when</b> 이에요. the day when, the year when …</p>',
        ex: [{ en: 'I|remember|the day|when we met.', roles: 'S V O M', ko: '우리가 만난 날을 기억해요.' }, { en: 'Summer|is|the season|when I feel happiest.', roles: 'S V C M', ko: '여름은 내가 가장 행복한 계절이에요.' }],
        tip: 'when 은 빼고 말해도 자연스러워요: the day we met.' },
      { title: 'where vs which', html: '<p>where 뒤는 <b>빠진 게 없는 문장</b>(we met), which 뒤는 <b>목적어나 주어가 빠진 문장</b>(I visited ___)이에요.</p><table><tr><td>the town <b>where</b> I grew up</td><td>내가 자란 마을</td></tr><tr><td>the town <b>which</b> I visited</td><td>내가 방문한 마을</td></tr></table>',
        ex: [{ en: 'This|is|the town|where I grew up.', roles: 'S V C M', ko: '여기가 내가 자란 마을이에요.' }, { en: 'Seoul|is|the city|which I visited first.', roles: 'S V C M', ko: '서울은 내가 처음 방문한 도시예요.' }] },
    ],
    summary: ['장소 + <b>where</b> + 문장: the cafe where we met.', '때 + <b>when</b> + 문장: the day when we met.', 'where 뒤는 빠진 게 없는 문장, which 뒤는 빠진 게 있는 문장.'] },

  { id: 'G11', ch: 3, n: 11, title: '~하는 것 (what)', minutes: 7,
    terms: { '명사절': '문장 전체가 하나의 명사처럼 주어·목적어 자리에 들어간 것.' },
    pages: [
      { title: 'what = the thing that', html: '<p>「<b>내가 원하는 것</b>」처럼 「~하는 것」은 <b>what</b> 하나로 말해요. what 은 「the thing that」과 같은 뜻이라 앞에 명사를 또 쓰지 않아요.</p>',
        ex: [{ en: 'This|is|what I wanted.', roles: 'S V C', ko: '이게 내가 원했던 거예요.' }, { en: "I|don't understand|what you mean.", roles: 'S V O', ko: '무슨 말인지 모르겠어요.' }, { en: 'Tell|me|what you need.', roles: 'V O O', ko: '필요한 걸 말해 줘요.' }] },
      { title: 'what 덩어리가 주어로', html: '<p>what 덩어리는 문장 맨 앞 주어 자리에도 와요. 「What I need is …」 = 「내게 필요한 건 …이에요」.</p>',
        ex: [{ en: 'What I need|is|a long vacation.', roles: 'S V C', ko: '내게 필요한 건 긴 휴가예요.' }, { en: 'What he said|was|true.', roles: 'S V C', ko: '그가 한 말은 사실이었어요.' }, { en: 'What I like about her|is|her honesty.', roles: 'S V C', ko: '내가 그녀에게서 좋아하는 점은 솔직함이에요.' }] },
      { title: 'what vs that', html: '<p>앞에 명사가 있으면 that, 없으면 what.</p><table><tr><td>the thing <b>that</b> I want</td><td>내가 원하는 것</td></tr><tr><td><b>what</b> I want</td><td>내가 원하는 것</td></tr></table>',
        ex: [{ en: 'That|is|exactly|what I was thinking.', roles: 'S V M C', ko: '그게 바로 내가 생각하던 거예요.' }, { en: 'I|believe|what you told me.', roles: 'S V O', ko: '네가 한 말을 믿어.' }],
        tip: 'the thing what ✗ / the thing that ✓ / what ✓' },
    ],
    summary: ['「~하는 것」 = <b>what</b> + 주어 + 동사.', 'what 덩어리는 주어로도: <b>What I need is</b> …', '앞에 명사가 있으면 that, 없으면 what.'] },

  { id: 'G12', ch: 3, n: 12, title: '~라고 생각해요 (I think that …)', minutes: 7,
    pages: [
      { title: '생각·말한 내용을 통째로', html: '<p>「<b>그게 좋은 생각이라고</b> 생각해요」처럼 생각·말·앎의 <b>내용</b>은 that + 문장으로 붙여요. 대화에서는 that 을 자주 빼요.</p>',
        ex: [{ en: 'I|think|that it is a good idea.', roles: 'S V O', ko: '그거 좋은 생각인 것 같아요.' }, { en: 'I|hope|you feel better soon.', roles: 'S V O', ko: '빨리 낫길 바라요.' }, { en: 'She|said|that she was busy.', roles: 'S V O', ko: '그녀는 바쁘다고 했어요.' }] },
      { title: '자주 쓰는 동사들', html: '<p><b>think · know · believe · hope · said · heard · sure</b> 뒤에 that 절이 자주 와요.</p><p>I\'m sure (that) … = 「분명 ~해요」, I heard (that) … = 「~라고 들었어요」.</p>',
        ex: [{ en: 'I am sure that you will pass.', ko: '넌 분명 합격할 거야.' }, { en: 'I|heard|that Mina got a new job.', roles: 'S V O', ko: '미나가 새 직장을 구했다고 들었어요.' }, { en: 'Did|you|know|that the store closed?', roles: 'Q S V O', ko: '그 가게 문 닫은 거 알았어요?' }] },
      { title: '「~가 아닌 것 같아요」는 don\'t think', html: '<p>한국어로 「~가 아닌 것 같아요」를 영어로는 보통 <b>I don\'t think</b> + 긍정문으로 말해요. 더 부드럽게 들려요.</p>',
        ex: [{ en: "I|don't think|he is coming.", roles: 'S V O', ko: '그는 안 올 것 같아요.' }, { en: "I|don't think|it will rain.", roles: 'S V O', ko: '비는 안 올 것 같아요.' }],
        tip: "I think he isn't coming. 도 틀리진 않지만, I don't think he is coming. 이 훨씬 자연스러워요." },
    ],
    summary: ['생각·말의 내용 = <b>(that) + 주어 + 동사</b>.', 'think · hope · said · heard · I\'m sure 뒤에 자주 와요.', '「~가 아닌 것 같아요」는 <b>I don\'t think</b> + 긍정문.'] },

  { id: 'G13', ch: 3, n: 13, title: '어디인지 아세요? (간접 의문문)', minutes: 8,
    terms: { '간접 의문문': '질문이 다른 문장 안에 들어간 것. 「역이 어디예요?」→「역이 어디인지 아세요?」' },
    pages: [
      { title: '질문이 문장 안에 들어가면 순서가 바뀌어요', html: '<p>Where <b>is the station</b>? 이 Do you know … 뒤로 들어가면 <b>의문사 + 주어 + 동사</b> 순서가 돼요.</p><table><tr><td>Where <b>is</b> the station?</td><td>역이 어디예요?</td></tr><tr><td>Do you know where the station <b>is</b>?</td><td>역이 어디인지 아세요?</td></tr></table>',
        ex: [{ en: 'Do|you|know|where the station is?', roles: 'Q S V O', ko: '역이 어디인지 아세요?' }, { en: 'Can|you|tell|me|what time it is?', roles: 'Q S V O O', ko: '지금 몇 시인지 알려 줄래요?' }, { en: "I|don't know|where he lives.", roles: 'S V O', ko: '그가 어디 사는지 몰라요.' }] },
      { title: 'do / does / did 는 사라져요', html: '<p>What <b>does</b> she want? → I don\'t know what she <b>wants</b>. do/does/did 가 빠지고 동사가 제 모양을 찾아요.</p>',
        ex: [{ en: "I|don't know|what she wants.", roles: 'S V O', ko: '그녀가 뭘 원하는지 모르겠어요.' }, { en: 'Do|you|know|when the movie starts?', roles: 'Q S V O', ko: '영화가 언제 시작하는지 알아요?' }, { en: 'I|wonder|why he left early.', roles: 'S V O', ko: '그가 왜 일찍 갔는지 궁금해요.' }] },
      { title: '예/아니오 질문은 if', html: '<p>의문사가 없는 질문(Is it open?)이 들어갈 땐 <b>if</b> 를 써요. 「~인지 (아닌지)」라는 뜻이에요.</p>',
        ex: [{ en: 'Do|you|know|if the bank is open?', roles: 'Q S V O', ko: '은행이 열었는지 아세요?' }, { en: "I'm not sure if I can come.", ko: '내가 갈 수 있을지 모르겠어요.' }],
        tip: '길을 물을 때 Where is …? 보다 Do you know where … is? 가 더 공손하게 들려요.' },
    ],
    summary: ['문장 안의 질문 = <b>의문사 + 주어 + 동사</b> (Do you know where it is?)', 'do/does/did 는 빠지고 동사가 제 모양: what she wants.', '의문사가 없으면 <b>if</b>: Do you know if it is open?'] },

  { id: 'GB3', ch: 3, boss: true, title: '상황 미션: 물건 잃어버려서 설명하기', minutes: 8,
    pages: [
      { title: '상황: 역 분실물 센터', html: '<p>지하철에 가방을 두고 내렸어요! 먼저 지나가는 사람에게 분실물 센터가 어디인지 묻고, 직원 Mina 에게 가방을 자세히 설명하세요.</p><p>물건을 꾸밀 땐 <b>which/that</b>, 탄 곳은 <b>where</b>, 생각은 <b>I think (that)</b>, 묻기는 <b>간접 의문문</b>.</p>',
        ex: [{ en: 'Do|you|know|where the lost and found is?', roles: 'Q S V O', ko: '분실물 센터가 어디인지 아세요?' }, { en: 'I|left|my bag|on the train.', roles: 'S V O M', ko: '기차(지하철)에 가방을 두고 내렸어요.' }] },
      { title: '쓸 표현 미리보기', html: '<p>가방이 어떤 건지, 어디서 잃어버린 것 같은지, 안에 뭐가 들었는지 말해요.</p>',
        ex: [{ en: 'It|is|a black backpack|that has a red tag.', roles: 'S V C M', ko: '빨간 꼬리표가 달린 검은 배낭이에요.' }, { en: 'I|think|I left it on the seat.', roles: 'S V O', ko: '좌석에 두고 온 것 같아요.' }, { en: 'What I really need|is|my laptop.', roles: 'S V C', ko: '내가 정말 필요한 건 노트북이에요.' }] },
    ],
    summary: ['길 묻기: <b>Do you know where … is?</b>', '물건 설명: <b>a backpack that has …</b>', '생각·필요: <b>I think … / What I need is …</b>'] },
);
PROBLEMS.push(
  // G9 who / which / that
  { id: 'G9P1', lesson: 'G9', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I have a friend ___ speaks three languages.', opts: ['who', 'which', 'where'], ans: 0, tags: ['관계대명사', 'who'], hints: ['a friend 는 사람', '사람 뒤에는 who', 'I have a friend who speaks three languages.'], why: '앞의 명사가 사람(a friend)이라 who(또는 that)를 써요.' },
  { id: 'G9P2', lesson: 'G9', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'She bought a phone ___ has a big screen.', opts: ['which', 'who', 'what'], ans: 0, tags: ['관계대명사', 'which'], hints: ['a phone 은 물건', '물건 뒤에는 which (또는 that)', 'She bought a phone which has a big screen.'], why: '물건(a phone)을 꾸밀 땐 which 나 that 이에요.' },
  { id: 'G9P3', lesson: 'G9', type: 'match', prompt: '구와 뜻을 짝지으세요.', pairs: [['the man who lives next door', '옆집에 사는 남자'], ['the bus that goes to the airport', '공항 가는 버스'], ['the cake you made', '네가 만든 케이크'], ['people who smile a lot', '잘 웃는 사람들']], tags: ['관계대명사'], hints: ['꾸밈말은 명사 뒤', 'you made = 네가 만든', 'who smile a lot = 잘 웃는'] },
  { id: 'G9P4', lesson: 'G9', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '옆집에 사는 남자는 의사예요.', answer: ['The man who lives next door is a doctor.', 'The man that lives next door is a doctor.'], cards: ['The man', 'who lives next door', 'is', 'a doctor.'], roles: 'S M V C', tags: ['관계대명사', 'who'], hints: ['주어 → 꾸밈말 → 동사 → 보어', 'The man 바로 뒤에 who …', 'The man who lives next door is a doctor.'] },
  { id: 'G9P5', lesson: 'G9', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이게 내가 어제 산 책이에요.', answer: ['This is the book that I bought yesterday.', 'This is the book which I bought yesterday.', 'This is the book I bought yesterday.'], cards: ['This is', 'the book', 'that', 'I bought', 'yesterday.'], distractors: ['it'], tags: ['관계대명사', 'that'], hints: ['the book 뒤에 that + I bought', 'it 은 또 쓰지 않아요', 'This is the book that I bought yesterday.'] },
  { id: 'G9P6', lesson: 'G9', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '네가 추천한 영화 봤어.', wrong: 'I watched the movie that you recommended it.', answer: ['I watched the movie that you recommended.', 'I watched the movie you recommended.', 'I watched the movie which you recommended.'], tags: ['관계대명사', '오개념'], hints: ['that 이 이미 the movie 를 가리켜요', '끝의 it 을 빼요', 'I watched the movie that you recommended.'], why: 'that 이 the movie 를 대신하니까 뒤에 it 을 또 쓰면 안 돼요.' },
  { id: 'G9P7', lesson: 'G9', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 노래를 잘하는 친구가 있어요.', wrong: 'I have a friend which sings well.', answer: ['I have a friend who sings well.', 'I have a friend that sings well.'], tags: ['who', '오개념'], hints: ['a friend 는 사람', '사람이면 who', 'I have a friend who sings well.'], why: '사람 뒤에는 which 가 아니라 who (또는 that) 예요.' },
  { id: 'G9P8', lesson: 'G9', type: 'type', prompt: '영어로 써 보세요.', ko: '네가 만든 케이크 정말 맛있었어.', answer: ['The cake you made was really delicious.', 'The cake that you made was really delicious.', 'The cake which you made was really delicious.', 'The cake you made was so delicious.', 'The cake that you made was so delicious.', 'The cake you made was very delicious.', 'The cake you made was delicious.', 'The cake that you made was delicious.', 'The cake you made was really good.'], tags: ['관계대명사'], hints: ['The cake + (that) you made + was …', '정말 맛있는 = really delicious', 'The cake you made was really delicious.'] },
  { id: 'G9P9', lesson: 'G9', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'This is the bus that goes to the airport.', ko: '이게 공항 가는 버스예요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'that goes 를 이어서', 'This is the bus that goes to the airport.'] },

  // G10 where / when
  { id: 'G10P1', lesson: 'G10', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'This is the cafe ___ we first met.', opts: ['where', 'which', 'when'], ans: 0, tags: ['where'], hints: ['cafe 는 장소', '뒤에 빠진 게 없는 문장(we met)', 'This is the cafe where we first met.'], why: '장소 뒤에 완전한 문장이 오면 where 예요.' },
  { id: 'G10P2', lesson: 'G10', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I remember the day ___ we met.', opts: ['when', 'where', 'who'], ans: 0, tags: ['when'], hints: ['the day 는 때', '때 뒤에는 when', 'I remember the day when we met.'], why: '때(the day)를 꾸밀 땐 when 이에요.' },
  { id: 'G10P3', lesson: 'G10', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'Seoul is the city ___ I visited first.', opts: ['which', 'where', 'when'], ans: 0, tags: ['where', 'which'], hints: ['visited 다음에 목적어가 빠져 있어요', '빠진 게 있으면 which', 'Seoul is the city which I visited first.'], why: 'visit 은 목적어가 필요한데 빠져 있어요 → which. (where 는 빠진 게 없는 문장 앞)' },
  { id: 'G10P4', lesson: 'G10', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '여기가 내가 자란 마을이에요.', answer: ['This is the town where I grew up.'], cards: ['This', 'is', 'the town', 'where I grew up.'], roles: 'S V C M', tags: ['where'], hints: ['This is + 장소 + where …', '자라다 grow up → grew up', 'This is the town where I grew up.'] },
  { id: 'G10P5', lesson: 'G10', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '주차할 수 있는 곳을 알아요.', answer: ['I know a place where we can park.'], cards: ['I', 'know', 'a place', 'where', 'we can park.'], distractors: ['which'], tags: ['where'], hints: ['a place 뒤에 where + 문장', 'we can park 는 빠진 게 없어요', 'I know a place where we can park.'] },
  { id: 'G10P6', lesson: 'G10', type: 'fill', prompt: '빈칸을 채우세요.', ko: '저기가 내가 태어난 병원이에요.', text: 'That is the hospital ___ I was born.', blanks: [{ a: ['where'], opt: ['where', 'which', 'when'] }], tags: ['where'], hints: ['hospital 은 장소', 'I was born 은 빠진 게 없는 문장', 'where'], why: '장소 + 완전한 문장이라 where.' },
  { id: 'G10P7', lesson: 'G10', type: 'type', prompt: '영어로 써 보세요.', ko: '여기가 우리가 처음 만난 카페예요.', answer: ['This is the cafe where we first met.', 'This is the cafe where we met first.', 'This is the cafe where we met for the first time.', 'This is the café where we first met.', 'This is the coffee shop where we first met.'], tags: ['where'], hints: ['This is the cafe + where + 문장', '처음 만났다 = first met', 'This is the cafe where we first met.'] },
  { id: 'G10P8', lesson: 'G10', type: 'type', prompt: '영어로 써 보세요.', ko: '그때가 내가 가장 행복했던 해였어요.', answer: ['That was the year when I was happiest.', 'That was the year I was happiest.', 'That was the year when I was the happiest.', 'That was the year I was the happiest.', 'That was the year when I was most happy.'], tags: ['when'], hints: ['That was the year + when + 문장', '가장 행복한 = happiest', 'That was the year when I was happiest.'] },
  { id: 'G10P9', lesson: 'G10', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I remember the day when we met.', ko: '우리가 만난 날을 기억해요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'when we met 을 이어서', 'I remember the day when we met.'] },

  // G11 what
  { id: 'G11P1', lesson: 'G11', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'This is ___ I wanted.', opts: ['what', 'that', 'which'], ans: 0, tags: ['what'], hints: ['앞에 명사가 없어요', '「~하는 것」 = what', 'This is what I wanted.'], why: '앞에 꾸밀 명사가 없으니 「~하는 것」을 혼자 뜻하는 what 이에요.' },
  { id: 'G11P2', lesson: 'G11', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'What I need is a long vacation.', opts: ['내게 필요한 건 긴 휴가예요.', '긴 휴가가 언제예요?', '긴 휴가에 뭐가 필요해요?'], ans: 0, tags: ['듣기', 'what'], hints: ['What I need 가 주어', 'What I need = 내게 필요한 것', '내게 필요한 건 긴 휴가예요.'] },
  { id: 'G11P3', lesson: 'G11', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그가 한 말은 사실이었어요.', answer: ['What he said was true.'], cards: ['What he said', 'was', 'true.'], roles: 'S V C', tags: ['what'], hints: ['what 덩어리가 주어', 'What he said + was + true', 'What he said was true.'] },
  { id: 'G11P4', lesson: 'G11', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '무슨 말인지 모르겠어요.', answer: ["I don't understand what you mean.", 'I do not understand what you mean.'], cards: ['I', "don't understand", 'what', 'you mean.'], distractors: ['that'], tags: ['what'], hints: ['what + you mean = 네가 의미하는 것', 'that 은 앞에 명사가 있을 때', "I don't understand what you mean."] },
  { id: 'G11P5', lesson: 'G11', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그게 내가 원하는 거예요.', wrong: 'That is the thing what I want.', answer: ['That is what I want.', "That's what I want.", 'That is the thing I want.', 'That is the thing that I want.'], tags: ['what', '오개념'], hints: ['the thing 과 what 이 겹쳐요', 'the thing 을 빼요', 'That is what I want.'], why: 'what 은 이미 「the thing that」이라는 뜻이라 the thing 과 같이 쓰지 않아요.' },
  { id: 'G11P6', lesson: 'G11', type: 'fill', prompt: '빈칸을 채우세요.', ko: '그게 바로 내가 생각하던 거예요.', text: "That's exactly ___ I was thinking.", blanks: [{ a: ['what'], opt: ['what', 'that', 'which'] }], tags: ['what'], hints: ['앞에 명사가 없어요', '「~하는 것」', 'what'], why: '앞에 명사 없이 「~하는 것」이니 what.' },
  { id: 'G11P7', lesson: 'G11', type: 'type', prompt: '영어로 써 보세요.', ko: '필요한 걸 말해 줘요.', answer: ['Tell me what you need.', 'Please tell me what you need.', 'Tell me what you need, please.', 'Let me know what you need.'], tags: ['what'], hints: ['Tell me + what + 주어 + 동사', '필요하다 = need', 'Tell me what you need.'] },
  { id: 'G11P8', lesson: 'G11', type: 'type', prompt: '영어로 써 보세요.', ko: '내게 필요한 건 휴식이에요.', answer: ['What I need is a break.', 'What I need is some rest.', 'What I need is rest.', 'What I need is a rest.'], tags: ['what'], hints: ['What I need 로 시작', 'What I need + is + 휴식(a break)', 'What I need is a break.'] },
  { id: 'G11P9', lesson: 'G11', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "That's exactly what I was thinking.", ko: '그게 바로 내가 생각하던 거예요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'exactly 에 힘을 줘서', "That's exactly what I was thinking."] },

  // G12 that 절
  { id: 'G12P1', lesson: 'G12', type: 'choice', prompt: '자연스러운 문장을 고르세요.', opts: ["I don't think he is coming.", "I think he don't come.", "I don't think he coming."], ans: 0, sayOpts: true, tags: ['that절', 'think'], hints: ['「~가 아닌 것 같아요」', "I don't think + 긍정문", "I don't think he is coming."], why: '「안 ~할 것 같아요」는 I don\'t think + 긍정문이 자연스러워요.' },
  { id: 'G12P2', lesson: 'G12', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I heard that Mina got a new job.', opts: ['미나가 새 직장을 구했다고 들었어요.', '미나에게 새 직장을 알려 줬어요.', '미나가 새 직장을 구하고 있어요.'], ans: 0, tags: ['듣기', 'that절'], hints: ['I heard that …', 'heard = 들었다', '미나가 새 직장을 구했다고 들었어요.'] },
  { id: 'G12P3', lesson: 'G12', type: 'match', prompt: '문장과 뜻을 짝지으세요.', pairs: [['I think it is a good idea.', '그거 좋은 생각인 것 같아요.'], ["I don't think it will rain.", '비는 안 올 것 같아요.'], ['I hope you feel better soon.', '빨리 낫길 바라요.'], ["I'm sure you will pass.", '넌 분명 합격할 거야.']], tags: ['that절'], hints: ['think = 생각하다, hope = 바라다', "I'm sure = 분명", "don't think = 아닌 것 같다"] },
  { id: 'G12P4', lesson: 'G12', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그녀는 바쁘다고 했어요.', answer: ['She said that she was busy.', 'She said she was busy.'], cards: ['She', 'said', 'that she was busy.'], roles: 'S V O', tags: ['that절'], hints: ['주어 → said → 말한 내용', '말한 내용 = that + 문장', 'She said that she was busy.'] },
  { id: 'G12P5', lesson: 'G12', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '비는 안 올 것 같아요.', answer: ["I don't think it will rain.", 'I do not think it will rain.'], cards: ['I', "don't think", 'it', 'will rain.'], distractors: ["won't"], tags: ['that절', 'think'], hints: ["부정은 don't think 쪽에", '뒤 문장은 긍정 it will rain', "I don't think it will rain."] },
  { id: 'G12P6', lesson: 'G12', type: 'fill', prompt: '빈칸을 채우세요.', ko: '그 가게 문 닫은 거 알았어요?', text: 'Did you know ___ the store closed?', blanks: [{ a: ['that'], opt: ['that', 'what', 'which'] }], tags: ['that절'], hints: ['아는 「내용」을 통째로', '내용 앞에는 that', 'that'], why: '알고 있는 내용(그 가게가 닫았다)을 붙일 땐 that + 문장이에요.' },
  { id: 'G12P7', lesson: 'G12', type: 'type', prompt: '영어로 써 보세요.', ko: '그거 좋은 생각인 것 같아요.', answer: ['I think that is a good idea.', 'I think it is a good idea.', 'I think this is a good idea.', "I think it's a good idea.", "I think that's a good idea.", 'I think that it is a good idea.', "I think that it's a good idea."], tags: ['that절', 'think'], hints: ['I think + (that) + 문장', '좋은 생각 = a good idea', 'I think it is a good idea.'] },
  { id: 'G12P8', lesson: 'G12', type: 'type', prompt: '영어로 써 보세요.', ko: '그는 안 올 것 같아요.', answer: ["I don't think he is coming.", "I don't think he's coming.", "I don't think he will come.", "I don't think he'll come.", 'I do not think he is coming.', "I don't think that he is coming.", "I don't think that he will come."], tags: ['that절', 'think'], hints: ["I don't think + 긍정문", '온다 = is coming / will come', "I don't think he is coming."] },
  { id: 'G12P9', lesson: 'G12', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I hope you feel better soon.', ko: '빨리 낫길 바라요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'feel better 를 이어서', 'I hope you feel better soon.'] },

  // G13 간접 의문문
  { id: 'G13P1', lesson: 'G13', type: 'choice', prompt: '자연스러운 문장을 고르세요.', opts: ['Do you know where the station is?', 'Do you know where is the station?', 'Do you know where does the station?'], ans: 0, sayOpts: true, tags: ['간접 의문문'], hints: ['문장 안의 질문은 순서가 바뀌어요', '의문사 + 주어 + 동사', 'Do you know where the station is?'], why: 'Do you know 뒤에선 where + 주어(the station) + 동사(is) 순서예요.' },
  { id: 'G13P2', lesson: 'G13', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Can you tell me what time it is?', opts: ['지금 몇 시인지 알려 줄래요?', '몇 시에 만날래요?', '시간 있어요?'], ans: 0, tags: ['듣기', '간접 의문문'], hints: ['what time it is', 'what time = 몇 시', '지금 몇 시인지 알려 줄래요?'] },
  { id: 'G13P3', lesson: 'G13', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그녀가 뭘 원하는지 모르겠어요.', answer: ["I don't know what she wants.", 'I do not know what she wants.'], cards: ['I', "don't know", 'what she wants.'], roles: 'S V O', tags: ['간접 의문문'], hints: ["I don't know + 질문 덩어리", 'what + she + wants (does 없음)', "I don't know what she wants."] },
  { id: 'G13P4', lesson: 'G13', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '영화가 언제 시작하는지 알아요?', answer: ['Do you know when the movie starts?'], cards: ['Do', 'you', 'know', 'when', 'the movie', 'starts?'], distractors: ['does'], tags: ['간접 의문문'], hints: ['Do you know + when + 주어 + 동사', 'does 는 빠지고 starts', 'Do you know when the movie starts?'] },
  { id: 'G13P5', lesson: 'G13', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그가 어디 사는지 몰라요.', wrong: "I don't know where does he live.", answer: ["I don't know where he lives.", 'I do not know where he lives.'], tags: ['간접 의문문', '오개념'], hints: ['문장 안의 질문엔 does 가 없어요', 'where + he + lives', "I don't know where he lives."], why: '간접 의문문에서는 does 가 빠지고 동사가 lives 로 제 모양을 찾아요.' },
  { id: 'G13P6', lesson: 'G13', type: 'fill', prompt: '빈칸을 채우세요.', ko: '은행이 열었는지 아세요?', text: 'Do you know ___ the bank is open?', blanks: [{ a: ['if', 'whether'], opt: ['if', 'what', 'that'] }], tags: ['간접 의문문', 'if'], hints: ['의문사가 없는 질문(Is it open?)', '「~인지」 = if', 'if'], why: '예/아니오 질문이 문장 안에 들어가면 if (또는 whether) 를 써요.' },
  { id: 'G13P7', lesson: 'G13', type: 'type', prompt: '영어로 써 보세요.', ko: '화장실이 어디인지 아세요?', answer: ['Do you know where the restroom is?', 'Do you know where the bathroom is?', 'Do you know where the toilet is?', 'Do you know where the washroom is?', 'Do you know where the restrooms are?', 'Do you know where the toilets are?'], tags: ['간접 의문문'], hints: ['Do you know + where + 주어 + is', '화장실 = the restroom', 'Do you know where the restroom is?'] },
  { id: 'G13P8', lesson: 'G13', type: 'type', prompt: '영어로 써 보세요.', ko: '그가 왜 일찍 갔는지 궁금해요.', answer: ['I wonder why he left early.', 'I wonder why he went home early.', 'I am wondering why he left early.', "I'm wondering why he left early.", 'I wonder why he left so early.'], tags: ['간접 의문문'], hints: ['I wonder + why + 주어 + 동사', 'did 는 빠지고 left', 'I wonder why he left early.'] },
  { id: 'G13P9', lesson: 'G13', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Do you know where the station is?', ko: '역이 어디인지 아세요?', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'where the station is 를 이어서', 'Do you know where the station is?'] },

  // GB3 분실물
  { id: 'GB3P1', lesson: 'GB3', boss: true, type: 'order', prompt: '지나가는 사람에게 물어보세요. 카드를 순서대로 놓으세요.', ko: '분실물 센터가 어디인지 아세요?', answer: ['Do you know where the lost and found is?'], cards: ['Do', 'you', 'know', 'where', 'the lost and found', 'is?'], distractors: ['is the'], tags: ['간접 의문문'], hints: ['Do you know + where + 주어 + 동사', 'is 는 맨 끝', 'Do you know where the lost and found is?'] },
  { id: 'GB3P2', lesson: 'GB3', boss: true, type: 'listen', prompt: '분실물 센터 직원 Mina 가 물어요. 듣고 뜻을 고르세요.', say: 'Can you describe the bag that you lost?', opts: ['잃어버린 가방을 설명해 주실래요?', '가방을 어디서 잃어버렸어요?', '가방을 언제 샀어요?'], ans: 0, tags: ['듣기', '관계대명사'], hints: ['describe = 설명하다', 'the bag that you lost = 잃어버린 가방', '잃어버린 가방을 설명해 주실래요?'] },
  { id: 'GB3P3', lesson: 'GB3', boss: true, type: 'build', prompt: '가방을 설명하세요.', ko: '빨간 꼬리표가 달린 검은 배낭이에요.', answer: ['It is a black backpack that has a red tag.', "It's a black backpack that has a red tag.", "It's a black backpack which has a red tag.", "It's a black backpack with a red tag."], cards: ['It', 'is', 'a black backpack', 'that has a red tag.'], roles: 'S V C M', tags: ['관계대명사'], hints: ['It is + 물건 + that + 꾸밈말', '달려 있다 = has', 'It is a black backpack that has a red tag.'] },
  { id: 'GB3P4', lesson: 'GB3', boss: true, type: 'type', prompt: '어디 두었는지 생각을 말하세요. 영어로 써 보세요.', ko: '좌석에 두고 온 것 같아요.', answer: ['I think I left it on the seat.', 'I think that I left it on the seat.', 'I think I left it on my seat.', 'I think I left my bag on the seat.', 'I think I left it on the seat on the train.'], tags: ['that절'], hints: ['I think + (that) + 문장', '두고 오다 = leave → left', 'I think I left it on the seat.'] },
  { id: 'GB3P5', lesson: 'GB3', boss: true, type: 'choice', prompt: 'Mina 가 어느 열차인지 물어요. 빈칸에 맞는 말을 고르세요.', q: 'It was the train ___ goes to City Hall.', opts: ['that', 'where', 'what'], ans: 0, tags: ['관계대명사'], hints: ['goes 의 주어가 필요해요', '물건(train) + that + 동사', 'It was the train that goes to City Hall.'], why: 'goes 앞에 주어 역할이 필요하니 that(which). where 는 빠진 게 없는 문장 앞에 와요.' },
  { id: 'GB3P6', lesson: 'GB3', boss: true, type: 'fix', prompt: '가장 중요한 걸 말하세요. 틀린 곳을 고쳐 다시 쓰세요.', ko: '내가 정말 필요한 건 노트북이에요.', wrong: 'The thing what I really need is my laptop.', answer: ['What I really need is my laptop.', 'The thing I really need is my laptop.', 'The thing that I really need is my laptop.'], tags: ['what', '오개념'], hints: ['the thing 과 what 은 같이 못 써요', 'What I really need 로 시작', 'What I really need is my laptop.'], why: 'what 자체가 「~하는 것」이라 the thing what 은 틀려요.' },
  { id: 'GB3P7', lesson: 'GB3', boss: true, type: 'type', prompt: '마지막으로 물어보세요. 영어로 써 보세요.', ko: '언제 찾을 수 있을지 아세요?', answer: ['Do you know when I can get it back?', 'Do you know when I can get it?', 'Do you know when I can pick it up?', 'Do you know when I can get my bag back?', 'Do you know when I can have it back?'], tags: ['간접 의문문'], hints: ['Do you know + when + 주어 + 동사', '되찾다 = get it back', 'Do you know when I can get it back?'] },
  { id: 'GB3P8', lesson: 'GB3', boss: true, type: 'speak', prompt: '🔊 Mina 에게 고맙다고 말해요.', say: 'Thank you. That is exactly what I needed.', ko: '고마워요. 그게 바로 제가 필요했던 거예요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'what I needed 를 이어서', 'Thank you. That is exactly what I needed.'] },
);
