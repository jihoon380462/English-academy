// courses/basic/parts/c3.js — 챕터 3 「시간」 (레슨 E15~E19 + 보스 B3). 스키마는 ../content.js 맨 위 주석
CHAPTERS.push(
  { n: 3, title: '시간', icon: '⏰', desc: '어제 한 일·내일 할 일·지금 하는 일 — 동사 모양으로 때를 말해요' },
);
LESSONS.push(
  { id: 'E15', ch: 3, n: 15, title: '~였어요 (was / were)', minutes: 6,
    terms: { '과거형': '이미 지나간 일을 말하는 동사 모양. 한국어의 「~했어요, ~였어요」예요.' },
    pages: [
      { title: 'am · is → was, are → were', html: '<p>be동사도 과거 모양이 있어요. 짝만 기억하면 돼요.</p><table><tr><td>I am / He·She·It is</td><td>→ <b>was</b></td></tr><tr><td>You·We·They are</td><td>→ <b>were</b></td></tr></table><p>yesterday(어제), last night(어젯밤) 같은 지난 때를 나타내는 말과 함께 자주 써요.</p>',
        ex: [{ en: 'I|was|tired|yesterday.', roles: 'S V C M', ko: '나는 어제 피곤했어요.' }, { en: 'They|were|at home|last night.', roles: 'S V M M', ko: '그들은 어젯밤에 집에 있었어요.' }, { en: 'The movie|was|really fun.', roles: 'S V C', ko: '그 영화 정말 재밌었어요.' }] },
      { title: '부정은 wasn\'t / weren\'t', html: '<p>지금처럼 be동사 뒤에 <b>not</b>을 붙여요. 줄여서 <b>wasn\'t</b>(was not), <b>weren\'t</b>(were not).</p>',
        ex: [{ en: "It|wasn't|cold|yesterday.", roles: 'S V C M', ko: '어제는 춥지 않았어요.' }, { en: "We|weren't|late.", roles: 'S V C', ko: '우리는 늦지 않았어요.' }, { en: "The test|wasn't|easy.", roles: 'S V C', ko: '시험이 쉽지 않았어요.' }] },
      { title: '질문은 Was / Were 를 맨 앞으로', html: '<p>be동사를 주어 앞으로 옮기면 질문이 돼요. 대답도 was·were 로 받아요.</p><table><tr><td>Were you busy?</td><td>Yes, I <b>was</b>. / No, I <b>wasn\'t</b>.</td></tr><tr><td>Was it good?</td><td>Yes, it <b>was</b>. / No, it <b>wasn\'t</b>.</td></tr></table>',
        ex: [{ en: 'Were|you|busy|last week?', roles: 'Q S C M', ko: '지난주에 바빴어요?' }, { en: 'Was it good? — Yes, it was.', ko: '좋았어요? — 네, 좋았어요.' }],
        tip: 'you 는 한 사람이어도 언제나 <b>were</b> 예요. You was ✗ → You were ✓' },
    ],
    summary: ['I · he · she · it → <b>was</b>, you · we · they → <b>were</b>.', '부정은 wasn\'t / weren\'t.', '질문은 Was / Were + 주어 …? 대답은 Yes, I was. / No, it wasn\'t.'] },

  { id: 'E16', ch: 3, n: 16, title: '~했어요 (-ed 과거)', minutes: 7,
    terms: { '규칙 동사': '과거형을 만들 때 끝에 -ed 만 붙이면 되는 동사 (work → worked).' },
    pages: [
      { title: '동사 끝에 -ed', html: '<p>대부분의 동사는 끝에 <b>-ed</b>를 붙이면 과거형이 돼요. 좋은 소식: 과거형은 <b>주어가 누구든 모양이 같아요</b>. -s 걱정이 없어요.</p>',
        ex: [{ en: 'I|worked|until nine|last night.', roles: 'S V M M', ko: '나는 어젯밤 9시까지 일했어요.' }, { en: 'We|watched|a movie|on Saturday.', roles: 'S V O M', ko: '우리는 토요일에 영화를 봤어요.' }, { en: 'She|called|me|this morning.', roles: 'S V O M', ko: '그녀가 오늘 아침에 나한테 전화했어요.' }] },
      { title: '-ed 붙이는 작은 규칙', html: '<table><tr><td>e 로 끝나면 <b>-d</b> 만</td><td>like → liked, live → lived</td></tr><tr><td>자음 + y → <b>-ied</b></td><td>study → studied, try → tried</td></tr><tr><td>(짧은 낱말) 짧은 모음 + 자음 하나 → <b>자음 두 번</b></td><td>stop → stopped, plan → planned</td></tr></table><p>-ed 소리는 세 가지예요. worked 「웍트」처럼 [트], played 「플레이드」처럼 [드], 그리고 t·d 로 끝나는 동사는 [이드]가 붙어 한 음절이 늘어요: wanted 「원티드」, needed 「니디드」.</p>',
        ex: [{ en: 'She|studied|English|in Canada.', roles: 'S V O M', ko: '그녀는 캐나다에서 영어를 공부했어요.' }, { en: 'We|lived|in Daegu|for five years.', roles: 'S V M M', ko: '우리는 5년 동안 대구에 살았어요.' }, { en: 'The bus|stopped|suddenly.', roles: 'S V M', ko: '버스가 갑자기 멈췄어요.' }] },
      { title: '부정·질문은 did — 동사는 원형', html: '<p>과거의 부정은 <b>didn\'t</b> + 원형, 질문은 <b>Did</b> + 주어 + 원형 …? 이에요. -ed 는 did 가 가져가요.</p><table><tr><td>I called him.</td><td>→ I didn\'t <b>call</b> him.</td></tr><tr><td>You enjoyed it.</td><td>→ Did you <b>enjoy</b> it?</td></tr></table>',
        ex: [{ en: "I|didn't call|my mom|yesterday.", roles: 'S V O M', ko: '나는 어제 엄마한테 전화 안 했어요.' }, { en: 'Did|you|enjoy|the trip?', roles: 'Q S V O', ko: '여행 즐거웠어요?' }],
        tip: 'didn\'t called, Did you watched 처럼 과거를 두 번 표시하지 않아요. 과거 표시는 did 한 번이면 충분해요.' },
    ],
    summary: ['대부분 동사 + <b>-ed</b> = 과거 (주어 상관없이 같은 모양).', 'liked · studied · stopped 처럼 끝 모양을 조금 바꾸는 동사도 있어요.', '부정 didn\'t + 원형, 질문 Did + 주어 + 원형 …?'] },

  { id: 'E17', ch: 3, n: 17, title: '불규칙 과거 20개 (went, ate, saw …)', minutes: 8,
    terms: { '불규칙 동사': '과거형이 -ed 가 아니라 아예 다른 모양인 동사 (go → went). 자주 쓰는 동사일수록 불규칙이 많아요.' },
    pages: [
      { title: '가장 자주 쓰는 다섯 개', html: '<table><tr><td>go → <b>went</b></td><td>eat → <b>ate</b></td><td>see → <b>saw</b></td></tr><tr><td>have → <b>had</b></td><td>do → <b>did</b></td><td></td></tr></table><p>이 동사들은 -ed 를 붙이지 않아요(goed ✗, eated ✗). 문장째로 외우는 게 가장 빨라요.</p>',
        ex: [{ en: 'I|went|to the beach|last summer.', roles: 'S V M M', ko: '나는 지난여름에 바닷가에 갔어요.' }, { en: 'We|ate|pizza|for lunch.', roles: 'S V O M', ko: '우리는 점심으로 피자를 먹었어요.' }, { en: 'I|saw|Mina|at the station.', roles: 'S V O M', ko: '나는 역에서 미나를 봤어요.' }, { en: 'I|had|a headache|this morning.', roles: 'S V O M', ko: '나는 오늘 아침에 머리가 아팠어요.' }] },
      { title: '다음 일곱 개', html: '<table><tr><td>get → <b>got</b></td><td>make → <b>made</b></td><td>take → <b>took</b></td></tr><tr><td>come → <b>came</b></td><td>buy → <b>bought</b></td><td>drink → <b>drank</b></td></tr><tr><td>meet → <b>met</b></td><td></td><td></td></tr></table>',
        ex: [{ en: 'He|made|breakfast|for us.', roles: 'S V O M', ko: '그가 우리에게 아침을 만들어 줬어요.' }, { en: 'I|took|a taxi|home.', roles: 'S V O M', ko: '나는 택시를 타고 집에 왔어요.' }, { en: 'I|bought|a new bag.', roles: 'S V O', ko: '나는 새 가방을 샀어요.' }, { en: 'We|met|at a cafe.', roles: 'S V M', ko: '우리는 카페에서 만났어요.' }] },
      { title: '마지막 여덟 개', html: '<table><tr><td>sleep → <b>slept</b></td><td>give → <b>gave</b></td><td>leave → <b>left</b></td><td>write → <b>wrote</b></td></tr><tr><td>read → <b>read</b>(소리는 「레드」)</td><td>say → <b>said</b>(소리는 「세드」)</td><td>send → <b>sent</b></td><td>find → <b>found</b></td></tr></table>',
        ex: [{ en: 'I|slept|ten hours.', roles: 'S V M', ko: '나는 10시간 잤어요.' }, { en: 'I|found|my keys|under the bed.', roles: 'S V O M', ko: '침대 밑에서 열쇠를 찾았어요.' }, { en: 'She|left|early.', roles: 'S V M', ko: '그녀는 일찍 떠났어요.' }] },
      { title: 'didn\'t · Did 뒤에서는 원형으로 돌아가요', html: '<p>불규칙 동사도 부정·질문에서는 원형이에요. I didn\'t <b>go</b> (didn\'t went ✗), Did you <b>see</b> …? (Did you saw ✗)</p>',
        ex: [{ en: "I|didn't go|out.", roles: 'S V M', ko: '나는 밖에 안 나갔어요.' }, { en: 'Did|you|see|the news?', roles: 'Q S V O', ko: '뉴스 봤어요?' }],
        tip: '「어제 ~했다」를 말할 때 현재형(I go)이 튀어나오기 쉬워요. yesterday 가 들어가면 동사를 한 번 더 확인하세요.' },
    ],
    summary: ['went · ate · saw · had · did · got · made · took · came · bought …', '불규칙 과거도 주어가 누구든 모양이 같아요.', 'didn\'t / Did 뒤에서는 원형: didn\'t go, Did you see …?'] },

  { id: 'E18', ch: 3, n: 18, title: '~할 거예요 (will / be going to)', minutes: 7,
    terms: { '조동사': 'will, can 처럼 동사 앞에 붙어 뜻을 더해 주는 말. 뒤에는 언제나 동사 원형이 와요.' },
    pages: [
      { title: 'will + 원형', html: '<p><b>will</b>은 「~할게요, ~할 거예요」. 뒤에 <b>원형</b>을 써요. 주어가 누구든 will 모양은 그대로예요.</p><p>말하는 순간 정한 일, 약속, 예상에 잘 어울려요. 줄여서 <b>I\'ll</b>, 부정은 <b>won\'t</b>(will not).</p>',
        ex: [{ en: 'I|will call|you|later.', roles: 'S V O M', ko: '나중에 전화할게요.' }, { en: 'It|will rain|tomorrow.', roles: 'S V M', ko: '내일 비가 올 거예요.' }, { en: "I|won't be|late.", roles: 'S V C', ko: '늦지 않을게요.' }] },
      { title: 'be going to + 원형', html: '<p><b>am/is/are going to</b> + 원형도 「~할 거예요」. 이미 <b>미리 정해 둔 계획</b>을 말할 때 자주 써요.</p><table><tr><td>I <b>am</b> going to …</td><td>She <b>is</b> going to …</td><td>They <b>are</b> going to …</td></tr></table>',
        ex: [{ en: "I'm going to visit my parents this weekend.", ko: '이번 주말에 부모님 댁에 갈 거예요.' }, { en: 'We|are going to move|next month.', roles: 'S V M', ko: '우리는 다음 달에 이사할 거예요.' }, { en: 'She|is going to start|a new job.', roles: 'S V O', ko: '그녀는 새 일을 시작할 거예요.' }] },
      { title: '질문하기', html: '<p>will 은 맨 앞으로: <b>Will</b> you …? be going to 는 be동사를 앞으로: <b>Are</b> you going to …?</p>',
        ex: [{ en: 'Will|you|come|to the party?', roles: 'Q S V M', ko: '파티에 올 거예요?' }, { en: 'What are you going to do tonight?', ko: '오늘 밤에 뭐 할 거예요?' }],
        tip: 'will 뒤에 to 를 넣거나(will to go ✗), 동사에 -s 를 붙이지(will goes ✗) 않아요.' },
    ],
    summary: ['<b>will</b> + 원형 = ~할게요·~할 거예요 (I\'ll, won\'t).', '<b>am/is/are going to</b> + 원형 = 미리 정한 계획.', 'will 뒤에는 to 도 -s 도 없이 원형만.'] },

  { id: 'E19', ch: 3, n: 19, title: '~하고 있어요 (be + -ing)', minutes: 7,
    terms: { '현재진행형': '「지금 ~하고 있어요」를 말하는 모양. am/is/are + 동사-ing 예요.' },
    pages: [
      { title: 'am/is/are + 동사-ing', html: '<p>지금 이 순간 하고 있는 일은 <b>be동사 + 동사-ing</b>로 말해요. be동사도, -ing 도 둘 다 필요해요.</p>',
        ex: [{ en: 'I|am eating|lunch|now.', roles: 'S V O M', ko: '나는 지금 점심을 먹고 있어요.' }, { en: 'She|is talking|on the phone.', roles: 'S V M', ko: '그녀는 통화하고 있어요.' }, { en: 'They|are playing|soccer|outside.', roles: 'S V O M', ko: '그들은 밖에서 축구를 하고 있어요.' }] },
      { title: '-ing 만드는 법', html: '<table><tr><td>대부분 <b>+ing</b></td><td>read → reading, play → playing</td></tr><tr><td>e 로 끝나면 e 빼고 <b>+ing</b></td><td>make → making, write → writing</td></tr><tr><td>(짧은 낱말) 짧은 모음 + 자음 하나 → <b>자음 두 번</b></td><td>run → running, sit → sitting</td></tr></table>',
        ex: [{ en: 'He|is writing|an email.', roles: 'S V O', ko: '그는 이메일을 쓰고 있어요.' }, { en: 'We|are sitting|in a cafe.', roles: 'S V M', ko: '우리는 카페에 앉아 있어요.' }] },
      { title: '평소 vs 지금', html: '<table><tr><td>I <b>work</b> at a bank.</td><td>평소에 (현재형)</td></tr><tr><td>I<b>\'m working</b> from home today.</td><td>오늘·지금 (진행형)</td></tr></table><p>부정은 be동사 뒤에 not, 질문은 be동사를 앞으로: <b>Are</b> you listening? — Yes, I am.</p>',
        ex: [{ en: "I'm working from home today.", ko: '나는 오늘 재택근무를 하고 있어요.' }, { en: "It|isn't raining|now.", roles: 'S V M', ko: '지금은 비가 안 와요.' }, { en: 'Are|you|listening?', roles: 'Q S V', ko: '듣고 있어요?' }],
        tip: 'I am study ✗, I studying ✗ — be동사와 -ing 는 언제나 짝으로 다녀요.' },
    ],
    summary: ['지금 하는 중 = <b>am/is/are + 동사-ing</b>.', 'making(e 빼기) · running(자음 두 번) 모양에 주의.', '평소 일은 현재형, 지금·오늘의 일은 진행형.'] },

  { id: 'B3', ch: 3, boss: true, title: '어제 한 일, 내일 할 일', minutes: 7,
    pages: [
      { title: '상황: 월요일 저녁, 친구 Tom 과 영상 통화', html: '<p>캐나다에 사는 친구 <b>Tom</b>이 영상 통화를 걸어 왔어요. 주말에 뭐 했는지, 내일은 뭐 할 건지, 지금은 뭐 하는지 물어봐요.</p><p>챕터 3에서 배운 <b>was/were · 과거형 · will/be going to · -ing</b>를 섞어서 대답해 보세요.</p>',
        ex: [{ en: 'How|was|your weekend?', roles: 'Q V S', ko: '주말 어땠어?' }, { en: 'Yesterday|I|went|hiking.', roles: 'M S V M', ko: '어제 등산 갔어.' }, { en: "I'm going to rest tomorrow.", ko: '내일은 쉴 거야.' }, { en: "I'm cooking dinner now.", ko: '지금 저녁 만들고 있어.' }] },
    ],
    summary: ['지난 일 = was/were · -ed · 불규칙 과거 (went, ate, slept).', '앞으로 할 일 = will / be going to + 원형.', '지금 하는 일 = am/is/are + -ing.'] },
);
PROBLEMS.push(
  // ── E15 was / were
  { id: 'E15P1', lesson: 'E15', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ tired yesterday.', opts: ['was', 'were', 'am'], ans: 0, tags: ['be동사 과거'], hints: ['yesterday = 지난 일', 'am 의 과거는?', 'I was tired yesterday.'], why: 'I 의 be동사 과거는 was 예요. am 은 지금 일이에요.' },
  { id: 'E15P2', lesson: 'E15', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'They ___ at home last night.', opts: ['was', 'were', 'are'], ans: 1, tags: ['be동사 과거'], hints: ['주어가 they 예요', 'are 의 과거는 were', 'They were at home last night.'], why: 'you · we · they 의 be동사 과거는 were 예요.' },
  { id: 'E15P3', lesson: 'E15', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그 영화 정말 재밌었어요.', answer: ['The movie was really fun.'], cards: ['The movie', 'was', 'really fun.'], roles: 'S V C', tags: ['be동사 과거'], hints: ['파랑(주어)은 The movie', '빨강(동사)은 was', 'The movie was really fun.'] },
  { id: 'E15P4', lesson: 'E15', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '우리는 어제 공원에 있었어요.', answer: ['We were at the park yesterday.', 'Yesterday we were at the park.'], cards: ['We', 'were', 'at', 'the', 'park', 'yesterday.'], distractors: ['was'], tags: ['be동사 과거', '어순'], hints: ['주어가 we 예요', 'we 의 과거 be동사는 were', 'We were at the park yesterday.'] },
  { id: 'E15P5', lesson: 'E15', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '너 오늘 아침에 늦었어.', wrong: 'You was late this morning.', answer: ['You were late this morning.', 'This morning you were late.'], tags: ['be동사 과거', '오개념'], hints: ['주어가 you 예요', 'you 는 한 사람이어도 were', 'You were late this morning.'], why: 'you 의 be동사 과거는 언제나 were 예요 (You was ✗).' },
  { id: 'E15P6', lesson: 'E15', type: 'fill', prompt: '빈칸에 맞는 말을 고르거나 쓰세요.', text: "It ___ cold yesterday, but it's cold today.", blanks: [{ a: ["wasn't", 'was not'], opt: ["wasn't", "weren't", "isn't"] }], tags: ['be동사 과거', '부정'], hints: ['어제 이야기 + 「안 추웠다」', 'it 의 과거 부정은?', "It wasn't cold yesterday, but it's cold today."], why: "it 의 be동사 과거는 was, 부정은 wasn't 예요." },
  { id: 'E15P7', lesson: 'E15', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 어제 집에 있었어요.', answer: ['I was at home yesterday.', 'I was home yesterday.', 'Yesterday I was at home.', 'Yesterday I was home.', 'I stayed home yesterday.', 'I stayed at home yesterday.'], tags: ['be동사 과거'], hints: ['나는 + 있었다 + 집에 + 어제', '있었다 = was, 집에 = at home', 'I was at home yesterday.'] },
  { id: 'E15P8', lesson: 'E15', type: 'type', prompt: '영어로 써 보세요.', ko: '너 지난주에 바빴어?', answer: ['Were you busy last week?'], tags: ['be동사 과거', '질문'], hints: ['be동사를 맨 앞으로', 'you 는 were', 'Were you busy last week?'] },
  { id: 'E15P9', lesson: 'E15', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I was really tired last night.', ko: '나는 어젯밤에 정말 피곤했어요.', tags: ['말하기'], hints: ['was 는 약하게 「워즈」', '🐢 로 천천히 들어 보세요', 'I was really tired last night.'] },

  // ── E16 규칙 과거 -ed
  { id: 'E16P1', lesson: 'E16', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'Last night I ___ until nine.', opts: ['work', 'worked', 'working'], ans: 1, tags: ['과거 -ed'], hints: ['last night = 지난 일', 'work + -ed', 'Last night I worked until nine.'], why: '지난 일은 과거형. work 에 -ed 를 붙여 worked.' },
  { id: 'E16P2', lesson: 'E16', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'We played tennis last Sunday.', opts: ['우리는 지난 일요일에 테니스를 쳤어요.', '우리는 일요일마다 테니스를 쳐요.', '우리는 이번 일요일에 테니스를 칠 거예요.'], ans: 0, tags: ['듣기', '과거 -ed'], hints: ['played 의 끝소리 [드]를 들어 보세요', 'last Sunday = 지난 일요일', '우리는 지난 일요일에 테니스를 쳤어요.'] },
  { id: 'E16P3', lesson: 'E16', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그녀는 캐나다에서 영어를 공부했어요.', answer: ['She studied English in Canada.'], cards: ['She', 'studied', 'English', 'in Canada.'], roles: 'S V O M', tags: ['과거 -ed'], hints: ['study 의 과거는 y → ied', '주어 → 동사 → 무엇을 → 어디서', 'She studied English in Canada.'] },
  { id: 'E16P4', lesson: 'E16', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 어젯밤에 영화를 봤어요.', answer: ['I watched a movie last night.', 'Last night I watched a movie.'], cards: ['I', 'watched', 'a', 'movie', 'last', 'night.'], distractors: ['watch'], tags: ['과거 -ed', '어순'], hints: ['last night = 지난 일', '동사는 -ed 가 붙은 watched', 'I watched a movie last night.'] },
  { id: 'E16P5', lesson: 'E16', type: 'fill', prompt: '빈칸에 맞는 말을 고르거나 쓰세요.', text: 'Yesterday the bus ___ in front of the school.', blanks: [{ a: ['stopped'], opt: ['stoped', 'stopped', 'stops'] }], tags: ['과거 -ed', '철자'], hints: ['stop 의 과거', '짧은 모음 + 자음 하나 → 자음 두 번', 'Yesterday the bus stopped in front of the school.'], why: '어제 일이라 과거형이에요. stop 은 짧은 모음 + 자음 하나라서 p 를 두 번 써요: stopped.' },
  { id: 'E16P6', lesson: 'E16', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 어제 축구를 했어요.', wrong: 'Yesterday I play soccer.', answer: ['Yesterday I played soccer.', 'I played soccer yesterday.'], tags: ['과거 -ed', '오개념'], hints: ['yesterday = 지난 일', '동사를 과거형으로', 'Yesterday I played soccer.'], why: '지난 일은 동사를 과거형으로 바꿔요: play → played.' },
  { id: 'E16P7', lesson: 'E16', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 너한테 전화 안 했어.', wrong: "I didn't called you.", answer: ["I didn't call you."], tags: ['과거 부정', '오개념'], hints: ["didn't 뒤의 동사를 보세요", "과거 표시는 didn't 가 이미 했어요", "I didn't call you."], why: "didn't 뒤에는 원형: didn't call (didn't called ✗)." },
  { id: 'E16P8', lesson: 'E16', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 어제 엄마한테 전화했어요.', answer: ['I called my mom yesterday.', 'Yesterday I called my mom.', 'I called my mother yesterday.', 'Yesterday I called my mother.', 'I called Mom yesterday.'], tags: ['과거 -ed'], hints: ['전화하다 = call', 'call + -ed', 'I called my mom yesterday.'] },
  { id: 'E16P9', lesson: 'E16', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Did|you|enjoy|the trip?', ko: '여행 즐거웠어요?', roles: 'Q S V O', tags: ['말하기'], hints: ['Did you 는 붙여서 「디쥬」', '끝을 올려요 ↗', 'Did you enjoy the trip?'] },

  // ── E17 불규칙 과거
  { id: 'E17P1', lesson: 'E17', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'Last weekend I ___ to Busan.', opts: ['go', 'went', 'goed'], ans: 1, tags: ['불규칙 과거'], hints: ['지난 주말 = 지난 일', 'go 의 과거는 불규칙', 'Last weekend I went to Busan.'], why: 'go 의 과거는 went 예요. goed 라는 말은 없어요.' },
  { id: 'E17P2', lesson: 'E17', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['I ate too much.', '너무 많이 먹었어요.'], ['I got an email.', '이메일을 받았어요.'], ['She took a photo.', '그녀가 사진을 찍었어요.'], ['We met at a cafe.', '우리는 카페에서 만났어요.'], ['He left early.', '그는 일찍 떠났어요.']], tags: ['불규칙 과거'], hints: ['ate ← eat, got ← get, took ← take', 'met ← meet, left ← leave', '먹었어요-ate, 받았어요-got, 찍었어요-took, 만났어요-met, 떠났어요-left'] },
  { id: 'E17P3', lesson: 'E17', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '나는 새 가방을 샀어요.', answer: ['I bought a new bag.'], cards: ['I', 'bought', 'a new bag.'], roles: 'S V O', tags: ['불규칙 과거'], hints: ['buy 의 과거는 bought', 'I → bought → a new bag', 'I bought a new bag.'] },
  { id: 'E17P4', lesson: 'E17', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '우리는 어제 점심으로 피자를 먹었어요.', answer: ['We ate pizza for lunch yesterday.', 'Yesterday we ate pizza for lunch.'], cards: ['We', 'ate', 'pizza', 'for', 'lunch', 'yesterday.'], distractors: ['eat', 'eated'], tags: ['불규칙 과거', '어순'], hints: ['eat 의 과거는 불규칙', 'eat → ate', 'We ate pizza for lunch yesterday.'] },
  { id: 'E17P5', lesson: 'E17', type: 'fill', prompt: '빈칸에 맞는 말을 고르거나 쓰세요.', text: 'Last week I ___ a letter to my grandma.', blanks: [{ a: ['wrote'], opt: ['writed', 'wrote', 'write'] }], tags: ['불규칙 과거'], hints: ['write 의 과거', '-ed 가 아니라 모양이 바뀌어요', 'Last week I wrote a letter to my grandma.'], why: 'write 의 과거는 wrote 예요 (writed ✗).' },
  { id: 'E17P6', lesson: 'E17', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '어제 나는 헬스장에 갔어요.', wrong: 'Yesterday I go to the gym.', answer: ['Yesterday I went to the gym.', 'I went to the gym yesterday.'], tags: ['불규칙 과거', '오개념'], hints: ['yesterday 가 있어요', 'go 의 과거는 went', 'Yesterday I went to the gym.'], why: '지난 일이니 go → went 로 바꿔요.' },
  { id: 'E17P7', lesson: 'E17', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 출근 안 했어요.', wrong: "I didn't went to work.", answer: ["I didn't go to work."], tags: ['과거 부정', '오개념'], hints: ["didn't 뒤의 동사를 보세요", "didn't 뒤에는 원형", "I didn't go to work."], why: "didn't 가 과거를 맡으니 동사는 원형 go (didn't went ✗)." },
  { id: 'E17P8', lesson: 'E17', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 역에서 미나를 봤어요.', answer: ['I saw Mina at the station.', 'At the station I saw Mina.'], tags: ['불규칙 과거'], hints: ['see 의 과거는?', 'see → saw, 역에서 = at the station', 'I saw Mina at the station.'] },
  { id: 'E17P9', lesson: 'E17', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I went to bed late last night.', ko: '나는 어젯밤 늦게 잤어요.', tags: ['말하기'], hints: ['went to bed = 잠자리에 들었다', '🐢 로 천천히 들어 보세요', 'I went to bed late last night.'] },

  // ── E18 will / be going to
  { id: 'E18P1', lesson: 'E18', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ call you later.', opts: ['will', 'will to', 'am'], ans: 0, tags: ['미래'], hints: ['「~할게요」', 'will 뒤에는 to 없이 바로 동사', 'I will call you later.'], why: 'will 뒤에는 바로 동사 원형이 와요. will to ✗' },
  { id: 'E18P2', lesson: 'E18', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '내일 비가 올 거예요.', answer: ['It will rain tomorrow.', "It'll rain tomorrow."], cards: ['It', 'will rain', 'tomorrow.'], roles: 'S V M', tags: ['미래'], hints: ['날씨의 주어는 It', '빨강(동사)은 will rain', 'It will rain tomorrow.'] },
  { id: 'E18P3', lesson: 'E18', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이번 주말에 부모님 댁에 갈 거예요.', answer: ["I'm going to visit my parents this weekend.", 'I am going to visit my parents this weekend.', "This weekend I'm going to visit my parents."], cards: ["I'm", 'going to', 'visit', 'my parents', 'this weekend.'], distractors: ['visits'], tags: ['미래', 'be going to'], hints: ['미리 정한 계획 = be going to', 'going to 뒤에는 원형 visit', "I'm going to visit my parents this weekend."] },
  { id: 'E18P4', lesson: 'E18', type: 'fill', prompt: '빈칸에 맞는 말을 고르거나 쓰세요.', text: "Don't worry. I ___ be late.", blanks: [{ a: ["won't", 'will not'], opt: ["won't", "don't", 'am not'] }], tags: ['미래', '부정'], hints: ['「늦지 않을게요」 = 앞으로의 약속', 'will not 을 줄이면?', "Don't worry. I won't be late."], why: "앞으로의 약속을 부정할 때는 won't (will not) + 원형이에요." },
  { id: 'E18P5', lesson: 'E18', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '내일 전화할게요.', wrong: 'I will to call you tomorrow.', answer: ['I will call you tomorrow.', "I'll call you tomorrow.", 'Tomorrow I will call you.', "Tomorrow I'll call you."], tags: ['미래', '오개념'], hints: ['will 다음을 보세요', 'will 뒤에는 to 가 없어요', 'I will call you tomorrow.'], why: 'will 뒤에는 to 없이 바로 원형이에요.' },
  { id: 'E18P6', lesson: 'E18', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그는 차를 살 거예요.', wrong: 'He is going to buys a car.', answer: ['He is going to buy a car.', "He's going to buy a car."], tags: ['be going to', '오개념'], hints: ['going to 뒤의 동사를 보세요', 'to 뒤에는 원형', 'He is going to buy a car.'], why: 'going to 뒤에는 원형이 와요. -s 를 붙이지 않아요.' },
  { id: 'E18P7', lesson: 'E18', type: 'type', prompt: '영어로 써 보세요.', ko: '우리는 다음 달에 이사할 거예요.', answer: ['We are going to move next month.', "We're going to move next month.", 'We will move next month.', "We'll move next month.", "Next month we're going to move.", 'Next month we will move.', "We're moving next month.", 'We are moving next month.'], tags: ['미래'], hints: ['미리 정한 계획이면 be going to', '이사하다 = move, 다음 달 = next month', 'We are going to move next month.'] },
  { id: 'E18P8', lesson: 'E18', type: 'type', prompt: '영어로 써 보세요.', ko: '너 오늘 밤에 뭐 할 거야?', answer: ['What are you going to do tonight?', 'What will you do tonight?', 'What are you doing tonight?'], tags: ['미래', '질문'], hints: ['What 으로 시작해요', 'What + are you going to + do + tonight?', 'What are you going to do tonight?'] },
  { id: 'E18P9', lesson: 'E18', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I'll call you later.", ko: '나중에 전화할게요.', tags: ['말하기'], hints: ["I'll 은 「아일」", '🐢 로 천천히 들어 보세요', "I'll call you later."] },

  // ── E19 현재진행형
  { id: 'E19P1', lesson: 'E19', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'She ___ talking on the phone.', opts: ['is', 'are', 'does'], ans: 0, tags: ['진행형'], hints: ['동사가 talking(-ing) 이에요', '-ing 앞에는 be동사, she 는 is', 'She is talking on the phone.'], why: '진행형은 be동사 + -ing. she 의 be동사는 is 예요.' },
  { id: 'E19P2', lesson: 'E19', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'They are playing soccer outside.', opts: ['그들은 밖에서 축구를 하고 있어요.', '그들은 밖에서 축구를 했어요.', '그들은 밖에서 축구를 할 거예요.'], ans: 0, tags: ['듣기', '진행형'], hints: ['are playing 이 들리나요?', 'be + -ing = 하고 있다', '그들은 밖에서 축구를 하고 있어요.'] },
  { id: 'E19P3', lesson: 'E19', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '나는 저녁을 만들고 있어요.', answer: ['I am cooking dinner.', "I'm cooking dinner.", 'I am making dinner.', "I'm making dinner."], cards: ['I', 'am cooking', 'dinner.'], roles: 'S V O', tags: ['진행형'], hints: ['빨강(동사)은 be동사 + -ing 한 덩어리', 'I → am cooking → dinner', 'I am cooking dinner.'] },
  { id: 'E19P4', lesson: 'E19', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '그는 자기 방에서 TV를 보고 있어요.', answer: ['He is watching TV in his room.', "He's watching TV in his room."], cards: ['He', 'is', 'watching', 'TV', 'in', 'his', 'room.'], distractors: ['watch'], tags: ['진행형', '어순'], hints: ['be동사 + -ing', 'is 다음에 watching', 'He is watching TV in his room.'] },
  { id: 'E19P5', lesson: 'E19', type: 'fill', prompt: '빈칸에 맞는 말을 고르거나 쓰세요.', text: 'Shh! The baby ___.', blanks: [{ a: ['is sleeping'], opt: ['sleeps', 'is sleeping', 'is sleep'] }], tags: ['진행형'], hints: ['지금 이 순간의 일', 'be동사 + -ing 둘 다 필요', 'Shh! The baby is sleeping.'], why: '지금 하고 있는 일은 is + sleeping 처럼 be동사와 -ing 를 같이 써요.' },
  { id: 'E19P6', lesson: 'E19', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 지금 영어를 공부하고 있어요.', wrong: 'I am study English now.', answer: ['I am studying English now.', "I'm studying English now.", "I'm studying English right now.", 'I am studying English right now.'], tags: ['진행형', '오개념'], hints: ['am 다음 동사 모양을 보세요', 'be동사 뒤에는 -ing', 'I am studying English now.'], why: '진행형은 be동사 + 동사-ing 예요. am study ✗ → am studying ✓' },
  { id: 'E19P7', lesson: 'E19', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 지금 점심을 먹고 있어요.', answer: ["I'm eating lunch now.", 'I am eating lunch now.', "I'm having lunch now.", 'I am having lunch now.', "I'm eating lunch right now.", "I'm having lunch right now."], tags: ['진행형'], hints: ['am + -ing', '먹다 = eat → eating', "I'm eating lunch now."] },
  { id: 'E19P8', lesson: 'E19', type: 'type', prompt: '영어로 써 보세요.', ko: '너 지금 뭐 하고 있어?', answer: ['What are you doing now?', 'What are you doing right now?', 'What are you doing?'], tags: ['진행형', '질문'], hints: ['What 으로 시작해요', 'What + are + you + doing', 'What are you doing now?'] },
  { id: 'E19P9', lesson: 'E19', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I'm working from home today.", ko: '나는 오늘 재택근무를 하고 있어요.', tags: ['말하기'], hints: ['working 의 -ing 를 또렷하게', '🐢 로 천천히 들어 보세요', "I'm working from home today."] },

  // ── B3 보스: 어제 한 일, 내일 할 일
  { id: 'B3P1', lesson: 'B3', boss: true, type: 'listen', prompt: 'Tom 이 첫인사를 해요. 무슨 뜻일까요?', say: 'Hi! How was your weekend?', opts: ['안녕! 주말 어땠어?', '안녕! 주말에 뭐 할 거야?', '안녕! 주말 좋아해?'], ans: 0, tags: ['듣기', 'be동사 과거'], hints: ['was = 과거', 'How was …? = ~ 어땠어?', '안녕! 주말 어땠어?'] },
  { id: 'B3P2', lesson: 'B3', boss: true, type: 'order', prompt: '대답해요: 「어제 언니랑 등산 갔어.」 카드를 순서대로 놓으세요.', ko: '어제 언니랑 등산 갔어.', answer: ['Yesterday I went hiking with my sister.', 'I went hiking with my sister yesterday.'], cards: ['Yesterday', 'I', 'went', 'hiking', 'with', 'my', 'sister.'], distractors: ['go'], tags: ['불규칙 과거'], hints: ['yesterday = 지난 일', 'go 의 과거는 went', 'Yesterday I went hiking with my sister.'] },
  { id: 'B3P3', lesson: 'B3', boss: true, type: 'type', prompt: '이어서 말해요. 영어로 써 보세요.', ko: '우리는 산에서 김밥을 먹었어.', answer: ['We ate gimbap on the mountain.', 'We ate kimbap on the mountain.', 'We had gimbap on the mountain.', 'We had kimbap on the mountain.', 'We ate gimbap in the mountains.', 'We ate kimbap in the mountains.'], tags: ['불규칙 과거'], hints: ['eat 의 과거는?', 'eat → ate, 산에서 = on the mountain', 'We ate gimbap on the mountain.'] },
  { id: 'B3P4', lesson: 'B3', boss: true, type: 'fix', prompt: '피곤했던 이야기를 하다가 실수했어요. 고쳐 보세요.', ko: '나는 피곤해서 10시간 잤어.', wrong: 'I was tired, so I sleeped for ten hours.', answer: ['I was tired, so I slept for ten hours.', 'I was tired, so I slept ten hours.', 'I was tired, so I slept for 10 hours.', 'I was tired, so I slept 10 hours.'], tags: ['불규칙 과거', '오개념'], hints: ['sleep 의 과거는 불규칙', 'sleep → slept', 'I was tired, so I slept for ten hours.'], why: 'sleep 의 과거는 slept 예요 (sleeped ✗).' },
  { id: 'B3P5', lesson: 'B3', boss: true, type: 'listen', prompt: 'Tom 이 다음 질문을 해요. 무슨 뜻일까요?', say: 'What are you going to do tomorrow?', opts: ['내일 뭐 할 거야?', '어제 뭐 했어?', '지금 뭐 하고 있어?'], ans: 0, tags: ['듣기', '미래'], hints: ['going to = 앞으로 할 일', 'tomorrow = 내일', '내일 뭐 할 거야?'] },
  { id: 'B3P6', lesson: 'B3', boss: true, type: 'type', prompt: '내일 계획을 말해요. 영어로 써 보세요.', ko: '내일은 집에서 쉴 거야.', answer: ["I'm going to rest at home tomorrow.", 'I am going to rest at home tomorrow.', 'I will rest at home tomorrow.', "I'll rest at home tomorrow.", "Tomorrow I'm going to rest at home.", "I'm going to stay home tomorrow.", 'Tomorrow I will rest at home.', 'I will stay home tomorrow.', "I'm going to stay at home tomorrow."], tags: ['미래'], hints: ['계획 = be going to (will 도 OK)', '쉬다 = rest, 집에서 = at home', "I'm going to rest at home tomorrow."] },
  { id: 'B3P7', lesson: 'B3', boss: true, type: 'fill', prompt: 'Tom 이 「지금은 뭐 해?」라고 물어요. 대답을 완성하세요.', text: 'Right now I ___ dinner for my family.', blanks: [{ a: ['am cooking', 'am making'], opt: ['cook', 'am cooking', 'cooked'] }], tags: ['진행형'], hints: ['지금 하고 있는 일', 'am + -ing', 'Right now I am cooking dinner for my family.'], why: '지금 하고 있는 일은 am + cooking 처럼 진행형으로 말해요.' },
  { id: 'B3P8', lesson: 'B3', boss: true, type: 'speak', prompt: '통화를 마무리해요. 🔊 듣고 따라 말해 보세요.', say: "It was great to talk to you. I'll call you next week.", ko: '얘기해서 좋았어. 다음 주에 전화할게.', tags: ['말하기'], hints: ['두 문장을 끊어서 말해 보세요', "It was great … / I'll call you …", "It was great to talk to you. I'll call you next week."] },
);
