// courses/grammar/parts/g4.js — 챕터 4 「가정·조동사 심화」 (G14~G18 + 보스 GB4). 스키마는 ../../basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 4, title: '가정·조동사 심화', icon: '🌈', desc: '만약 ~라면 · ~했으면 좋을 텐데 · ~했어야 했는데 · ~임에 틀림없어 · 예전엔 ~했어' },
);
LESSONS.push(
  { id: 'G14', ch: 4, n: 14, title: '만약 ~라면 (If 현재 / 가정법 과거)', minutes: 8,
    terms: { '조건문': '「만약 ~하면 …할 거예요」. 실제로 일어날 수 있는 일을 말해요.', '가정법 과거': '「만약 ~라면 …할 텐데」. 지금 사실이 아니거나 거의 일어나지 않을 일을 상상할 때 써요. 모양은 과거형이지만 뜻은 지금이에요.' },
    pages: [
      { title: '일어날 수 있는 일: If + 현재, will', html: '<p>「내일 비가 오면 집에 있을 거예요」처럼 <b>정말 그럴 수 있는 일</b>은 If + <b>현재형</b>, 뒤는 <b>will</b> 이에요.</p><p>If 쪽에는 미래 일이라도 will 을 쓰지 않아요.</p>',
        ex: [{ en: 'If it rains tomorrow,|I|will stay|home.', roles: 'M S V M', ko: '내일 비가 오면 집에 있을 거예요.' }, { en: 'If you are free,|we|can have|lunch together.', roles: 'M S V O', ko: '시간 되면 같이 점심 먹어요.' }, { en: 'I|will call|you|if I need help.', roles: 'S V O M', ko: '도움이 필요하면 전화할게요.' }],
        tip: 'If it will rain ✗ → If it <b>rains</b> ✓' },
      { title: '상상: If + 과거형, would', html: '<p>「내가 부자<b>라면</b> 세계 여행을 할 <b>텐데</b>」처럼 <b>지금 사실이 아닌</b> 일을 상상할 때는 If + <b>과거형</b>, 뒤는 <b>would</b> + 동사원형이에요.</p><p>과거형이지만 <b>지금</b> 이야기예요.</p>',
        ex: [{ en: 'If I had more time,|I|would learn|the piano.', roles: 'M S V O', ko: '시간이 더 있다면 피아노를 배울 텐데.' }, { en: 'If I lived near the sea,|I|would swim|every day.', roles: 'M S V M', ko: '바닷가 근처에 산다면 매일 수영할 텐데.' }, { en: 'If I knew the answer,|I|would tell|you.', roles: 'M S V O', ko: '답을 안다면 너한테 말해 줄 텐데.' }] },
      { title: 'If I were you = 내가 너라면', html: '<p>가정법에서 be동사는 주어와 상관없이 <b>were</b> 를 많이 써요. <b>If I were you</b> 는 조언할 때 아주 자주 쓰는 표현이에요.</p>',
        ex: [{ en: 'If I were you,|I|would take|the job.', roles: 'M S V O', ko: '내가 너라면 그 일자리를 잡겠어.' }, { en: 'If I were rich,|I|would travel|around the world.', roles: 'M S V M', ko: '내가 부자라면 세계 여행을 할 텐데.' }] },
    ],
    summary: ['일어날 수 있는 일: <b>If + 현재, will</b> (If 쪽에 will ✗).', '상상: <b>If + 과거, would + 원형</b> — 뜻은 지금.', '조언: <b>If I were you, I would</b> …'] },

  { id: 'G15', ch: 4, n: 15, title: '~라면 좋을 텐데 (I wish)', minutes: 7,
    pages: [
      { title: 'I wish + 과거형 = 지금 아쉬워요', html: '<p>「차가 <b>있으면</b> 좋을 텐데」는 지금 차가 없어서 아쉬운 거예요. 이럴 때 <b>I wish + 과거형</b>을 써요. 가정법이라 모양은 과거, 뜻은 지금이에요.</p>',
        ex: [{ en: 'I|wish|I had a car.', roles: 'S V O', ko: '차가 있으면 좋을 텐데.' }, { en: 'I|wish|I could speak English well.', roles: 'S V O', ko: '영어를 잘하면 좋을 텐데.' }, { en: 'I|wish|I lived closer to work.', roles: 'S V O', ko: '회사 가까이 살면 좋을 텐데.' }] },
      { title: 'I wish I were …', html: '<p>be동사는 여기서도 <b>were</b>: I wish I <b>were</b> taller. 대화에서는 was 도 쓰지만 were 가 기본이에요.</p>',
        ex: [{ en: 'I|wish|I were taller.', roles: 'S V O', ko: '키가 더 크면 좋을 텐데.' }, { en: 'I|wish|it were the weekend.', roles: 'S V O', ko: '주말이면 좋을 텐데.' }, { en: 'I|wish|you were here.', roles: 'S V O', ko: '네가 여기 있으면 좋을 텐데.' }] },
      { title: 'wish vs hope', html: '<p><b>hope</b> = 실제로 일어날 수 있는 일을 바라요(현재·미래형). <b>wish</b> = 지금 사실이 아니라 아쉬워요(과거형).</p><table><tr><td>I hope you <b>get</b> the job.</td><td>네가 그 일자리를 얻길 바라.</td></tr><tr><td>I wish I <b>had</b> a job.</td><td>나도 일자리가 있으면 좋을 텐데.</td></tr></table>',
        ex: [{ en: 'I|hope|you get the job.', roles: 'S V O', ko: '네가 그 일자리를 얻길 바라.' }, { en: "I|wish|I didn't have to work today.", roles: 'S V O', ko: '오늘 일 안 해도 되면 좋을 텐데.' }],
        tip: 'I wish I have ✗ → I wish I <b>had</b> ✓' },
    ],
    summary: ['지금 아쉬움 = <b>I wish + 과거형</b> (I wish I had …).', 'be동사는 <b>were</b>: I wish I were …', '일어날 수 있는 일은 <b>hope</b>, 아쉬운 일은 <b>wish</b>.'] },

  { id: 'G16', ch: 4, n: 16, title: '~했어야 했는데 (should have p.p.)', minutes: 7,
    pages: [
      { title: '지난 일 후회: should have + p.p.', html: '<p>「더 일찍 <b>잤어야 했는데</b>」처럼 지난 일을 후회할 때는 <b>should have + p.p.</b> 예요. 실제로는 그렇게 하지 않았다는 뜻이에요.</p>',
        ex: [{ en: 'I|should have gone|to bed earlier.', roles: 'S V M', ko: '더 일찍 잤어야 했는데.' }, { en: 'I|should have listened|to you.', roles: 'S V M', ko: '네 말을 들었어야 했는데.' }, { en: 'You|should have told|me.', roles: 'S V O', ko: '나한테 말했어야지.' }] },
      { title: '하지 말았어야 했는데: shouldn\'t have', html: '<p>반대로 「~하지 말았어야 했는데」는 <b>shouldn\'t have + p.p.</b> 예요.</p>',
        ex: [{ en: "I|shouldn't have eaten|so much.", roles: 'S V O', ko: '그렇게 많이 먹지 말았어야 했는데.' }, { en: "We|shouldn't have taken|a taxi.", roles: 'S V O', ko: '택시를 타지 말았어야 했어요.' }],
        tip: "should have 는 빨리 말하면 「슈드브」, 줄이면 <b>should've</b> 예요." },
      { title: '~할 수도 있었는데: could have p.p.', html: '<p>비슷한 모양으로 <b>could have + p.p.</b> 는 「~할 수도 있었는데 (안 했어요)」예요.</p>',
        ex: [{ en: 'You|could have called|me.', roles: 'S V O', ko: '나한테 전화할 수도 있었잖아.' }, { en: 'I|could have won|the game.', roles: 'S V O', ko: '그 경기 이길 수도 있었는데.' }] },
    ],
    summary: ['지난 일 후회 = <b>should have + p.p.</b>', '하지 말았어야 = <b>shouldn\'t have + p.p.</b>', '할 수도 있었는데 = <b>could have + p.p.</b>'] },

  { id: 'G17', ch: 4, n: 17, title: '~일지도 · ~임에 틀림없어 (might / must be)', minutes: 7,
    terms: { '추측': '확실하지 않은 일을 짐작해서 말하는 것. 확신 정도에 따라 조동사를 골라요.' },
    pages: [
      { title: '확신 정도로 고르기', html: '<table><tr><th>확신</th><th>표현</th><th>뜻</th></tr><tr><td>거의 확실</td><td><b>must be</b></td><td>~임에 틀림없어</td></tr><tr><td>반반</td><td><b>might / may be</b></td><td>~일지도 몰라</td></tr><tr><td>절대 아님</td><td><b>can\'t be</b></td><td>~일 리가 없어</td></tr></table>',
        ex: [{ en: 'She|must be|tired.', roles: 'S V C', ko: '그녀는 피곤한 게 틀림없어요.' }, { en: 'He|might be|at home.', roles: 'S V M', ko: '그는 집에 있을지도 몰라요.' }, { en: "That|can't be|true.", roles: 'S V C', ko: '그게 사실일 리가 없어요.' }] },
      { title: '근거가 있으면 must', html: '<p>must 는 「~해야 한다」라는 뜻도 있지만, 근거를 보고 <b>강하게 짐작</b>할 때도 써요. 「하루 종일 일했으니 <b>피곤하겠다</b>」.</p>',
        ex: [{ en: 'You|worked|all day.|You|must be|exhausted.', roles: 'S V M S V C', ko: '하루 종일 일했잖아요. 엄청 피곤하겠어요.' }, { en: 'The lights|are|off.|They|must be|out.', roles: 'S V C S V M', ko: '불이 꺼져 있어요. 다들 나간 게 틀림없어요.' }] },
      { title: 'might + 동사', html: '<p>might 뒤에는 be 말고 다른 동사도 와요: 「~할지도 몰라요」. 뒤에는 항상 <b>동사원형</b>.</p>',
        ex: [{ en: 'It|might rain|this afternoon.', roles: 'S V M', ko: '오늘 오후에 비가 올지도 몰라요.' }, { en: 'I|might be|a little late.', roles: 'S V C', ko: '조금 늦을지도 몰라요.' }] },
    ],
    summary: ['거의 확실 = <b>must be</b> (~임에 틀림없어).', '반반 = <b>might be</b> (~일지도 몰라), 아님 = <b>can\'t be</b>.', '뒤에는 항상 동사원형: might rain, must be.'] },

  { id: 'G18', ch: 4, n: 18, title: '예전엔 ~했어요 (used to)', minutes: 7,
    pages: [
      { title: '예전 습관·상태 (지금은 아님)', html: '<p>「예전엔 담배를 <b>피웠어요</b> (지금은 안 피워요)」처럼 과거엔 그랬지만 <b>지금은 아닌</b> 일은 <b>used to + 동사원형</b>이에요.</p>',
        ex: [{ en: 'I|used to smoke.', roles: 'S V', ko: '예전엔 담배를 피웠어요.' }, { en: 'She|used to live|in Busan.', roles: 'S V M', ko: '그녀는 예전에 부산에 살았어요.' }, { en: 'There|used to be|a bookstore|here.', roles: 'M V S M', ko: '예전엔 여기 서점이 있었어요.' }] },
      { title: '부정과 질문', html: '<p>부정: <b>didn\'t use to</b> (d 없음). 질문: <b>Did you use to …?</b> did 가 나오면 used 의 d 가 빠져요.</p>',
        ex: [{ en: "I|didn't use to like|coffee.", roles: 'S V O', ko: '예전엔 커피를 안 좋아했어요.' }, { en: 'Did|you|use to play|sports?', roles: 'Q S V O', ko: '예전에 운동했어요?' }] },
      { title: 'used to vs be used to', html: '<p>헷갈리는 짝: <b>be used to + -ing</b> 는 「~에 익숙하다」예요.</p><table><tr><td>I <b>used to</b> get up early.</td><td>예전엔 일찍 일어났어요.</td></tr><tr><td>I <b>am used to</b> getting up early.</td><td>일찍 일어나는 데 익숙해요.</td></tr></table>',
        ex: [{ en: 'I|used to get up|early.', roles: 'S V M', ko: '예전엔 일찍 일어났어요.' }, { en: 'I|am used to|getting up early.', roles: 'S V O', ko: '일찍 일어나는 데 익숙해요.' }] },
    ],
    summary: ['예전엔 ~했다(지금은 아님) = <b>used to + 원형</b>.', '부정·질문: <b>didn\'t use to / Did you use to</b>', '「~에 익숙하다」는 <b>be used to + -ing</b>.'] },

  { id: 'GB4', ch: 4, boss: true, title: '상황 미션: 친구 고민 상담하기', minutes: 8,
    pages: [
      { title: '상황: 고민 많은 친구', html: '<p>친구 Tom 이 카페에서 고민을 털어놔요. 회사 일이 너무 힘들고, 옛날이 그립고, 이직할지 고민 중이래요.</p><p>짐작(<b>must be</b>), 예전(<b>used to</b>), 후회(<b>should have</b>), 아쉬움(<b>I wish</b>), 조언(<b>If I were you</b>)을 써서 들어 주고 조언해 보세요.</p>',
        ex: [{ en: 'You|must be|so stressed.', roles: 'S V C', ko: '스트레스 엄청 받겠다.' }, { en: 'I|used to love|my job.', roles: 'S V O', ko: '예전엔 내 일을 정말 좋아했는데.' }] },
      { title: '쓸 표현 미리보기', html: '<p>공감 → 아쉬움 → 조언 순서로 이어 가요.</p>',
        ex: [{ en: 'I|should have quit|last year.', roles: 'S V M', ko: '작년에 그만뒀어야 했는데.' }, { en: 'I|wish|I had more free time.', roles: 'S V O', ko: '자유 시간이 더 있으면 좋을 텐데.' }, { en: 'If I were you,|I|would talk|to your boss.', roles: 'M S V M', ko: '내가 너라면 상사랑 얘기해 볼 거야.' }] },
    ],
    summary: ['공감: <b>You must be …</b>', '예전·후회·아쉬움: <b>used to / should have p.p. / I wish + 과거</b>', '조언: <b>If I were you, I would …</b>'] },
);
PROBLEMS.push(
  // G14 If
  { id: 'G14P1', lesson: 'G14', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'If it ___ tomorrow, I will stay home.', opts: ['rains', 'will rain', 'rained'], ans: 0, tags: ['조건문'], hints: ['일어날 수 있는 일이에요', 'If 쪽엔 will 대신 현재형', 'If it rains tomorrow, I will stay home.'], why: '일어날 수 있는 일은 If + 현재형. 미래라도 If 쪽엔 will 을 쓰지 않아요.' },
  { id: 'G14P2', lesson: 'G14', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'If I had more time, I ___ learn the piano.', opts: ['would', 'will', 'am'], ans: 0, tags: ['가정법 과거'], hints: ['If 쪽이 과거형(had) — 상상이에요', '상상이면 would', 'If I had more time, I would learn the piano.'], why: 'If + 과거형으로 상상할 땐 뒤에 would + 동사원형이 와요.' },
  { id: 'G14P3', lesson: 'G14', type: 'match', prompt: '문장과 뜻을 짝지으세요.', pairs: [['If it rains, I will stay home.', '비가 오면 집에 있을 거예요.'], ['If I were rich, I would travel.', '내가 부자라면 여행할 텐데.'], ['If I were you, I would wait.', '내가 너라면 기다리겠어.'], ['If you are free, call me.', '시간 되면 전화해.']], tags: ['조건문', '가정법 과거'], hints: ['현재형 + will = 실제로 그럴 수 있는 일', '과거형 + would = 상상', 'If I were you = 내가 너라면'] },
  { id: 'G14P4', lesson: 'G14', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '내가 너라면 그 일자리를 잡겠어.', answer: ['If I were you, I would take the job.', "If I were you, I'd take the job.", 'If I was you, I would take the job.'], cards: ['If I were you,', 'I', 'would take', 'the job.'], roles: 'M S V O', tags: ['가정법 과거', '조언'], hints: ['If I were you 로 시작', 'I would + 동사원형', 'If I were you, I would take the job.'] },
  { id: 'G14P5', lesson: 'G14', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '답을 안다면 너한테 말해 줄 텐데.', answer: ['If I knew the answer, I would tell you.', "If I knew the answer, I'd tell you."], cards: ['If', 'I', 'knew', 'the answer,', 'I', 'would tell', 'you.'], distractors: ['know'], tags: ['가정법 과거'], hints: ['상상이라 If 쪽은 과거형', 'know → knew', 'If I knew the answer, I would tell you.'] },
  { id: 'G14P6', lesson: 'G14', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '도움이 필요하면 전화할게요.', wrong: 'I will call you if I will need help.', answer: ['I will call you if I need help.', "I'll call you if I need help."], tags: ['조건문', '오개념'], hints: ['If 쪽에 will 이 있어요', 'if + 현재형', 'I will call you if I need help.'], why: 'if 뒤에는 미래 일이라도 현재형(need)을 써요.' },
  { id: 'G14P7', lesson: 'G14', type: 'type', prompt: '영어로 써 보세요.', ko: '내가 부자라면 세계 여행을 할 텐데.', answer: ['If I were rich, I would travel around the world.', "If I were rich, I'd travel around the world.", 'If I was rich, I would travel around the world.', 'If I were rich, I would travel the world.', "If I were rich, I'd travel the world.", 'I would travel around the world if I were rich.'], tags: ['가정법 과거'], hints: ['If I were + 형용사, I would + 원형', '세계 여행하다 = travel around the world', 'If I were rich, I would travel around the world.'] },
  { id: 'G14P8', lesson: 'G14', type: 'type', prompt: '영어로 써 보세요.', ko: '내일 비가 오면 집에 있을 거예요.', answer: ['If it rains tomorrow, I will stay home.', "If it rains tomorrow, I'll stay home.", 'If it rains tomorrow, I will stay at home.', "If it rains tomorrow, I'll stay at home.", 'I will stay home if it rains tomorrow.', "I'll stay home if it rains tomorrow."], tags: ['조건문'], hints: ['If + 현재형, I will …', '비가 오다 = it rains', 'If it rains tomorrow, I will stay home.'] },
  { id: 'G14P9', lesson: 'G14', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'If I were you, I would take the job.', ko: '내가 너라면 그 일자리를 잡겠어.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'If I were you 다음에 살짝 쉬고', 'If I were you, I would take the job.'] },

  // G15 I wish
  { id: 'G15P1', lesson: 'G15', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I wish I ___ a car.', opts: ['had', 'have', 'will have'], ans: 0, tags: ['I wish'], hints: ['지금 차가 없어서 아쉬워요', 'I wish + 과거형', 'I wish I had a car.'], why: 'I wish 뒤는 지금 이야기라도 과거형(had)이에요.' },
  { id: 'G15P2', lesson: 'G15', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ you get the job.', opts: ['hope', 'wish', 'would'], ans: 0, tags: ['hope', 'wish'], hints: ['실제로 일어날 수 있는 일', 'get 이 현재형이에요', 'I hope you get the job.'], why: '일어날 수 있는 일을 바랄 땐 hope + 현재형. wish 는 과거형과 짝이에요.' },
  { id: 'G15P3', lesson: 'G15', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I wish you were here.', opts: ['네가 여기 있으면 좋을 텐데.', '네가 여기 있어서 좋아.', '네가 여기 있었어.'], ans: 0, tags: ['듣기', 'I wish'], hints: ['I wish 가 들렸나요?', 'wish = ~라면 좋을 텐데 (지금은 아님)', '네가 여기 있으면 좋을 텐데.'] },
  { id: 'G15P4', lesson: 'G15', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '회사 가까이 살면 좋을 텐데.', answer: ['I wish I lived closer to work.', 'I wish I lived near work.'], cards: ['I', 'wish', 'I lived closer to work.'], roles: 'S V O', tags: ['I wish'], hints: ['I wish + 바라는 내용', '내용은 과거형 lived', 'I wish I lived closer to work.'] },
  { id: 'G15P5', lesson: 'G15', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '영어를 잘하면 좋을 텐데.', answer: ['I wish I could speak English well.'], cards: ['I', 'wish', 'I', 'could', 'speak', 'English well.'], distractors: ['can'], tags: ['I wish'], hints: ['I wish 뒤는 과거형', 'can → could', 'I wish I could speak English well.'] },
  { id: 'G15P6', lesson: 'G15', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '키가 더 크면 좋을 텐데.', wrong: 'I wish I am taller.', answer: ['I wish I were taller.', 'I wish I was taller.'], tags: ['I wish', '오개념'], hints: ['I wish 뒤 be동사', '가정이라 were', 'I wish I were taller.'], why: 'I wish 뒤는 과거형. be동사는 보통 were 를 써요.' },
  { id: 'G15P7', lesson: 'G15', type: 'type', prompt: '영어로 써 보세요.', ko: '주말이면 좋을 텐데.', answer: ['I wish it were the weekend.', 'I wish it was the weekend.', 'I wish it were weekend.', 'I wish it was weekend.', 'I wish it were Saturday.'], tags: ['I wish'], hints: ['I wish + it + were', '주말 = the weekend', 'I wish it were the weekend.'] },
  { id: 'G15P8', lesson: 'G15', type: 'type', prompt: '영어로 써 보세요.', ko: '오늘 일 안 해도 되면 좋을 텐데.', answer: ["I wish I didn't have to work today.", 'I wish I did not have to work today.', "I wish I didn't have work today."], tags: ['I wish'], hints: ["I wish + I didn't have to …", '~해야 한다 = have to', "I wish I didn't have to work today."] },
  { id: 'G15P9', lesson: 'G15', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I wish I had more free time.', ko: '자유 시간이 더 있으면 좋을 텐데.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'wish 에 힘을 줘서', 'I wish I had more free time.'] },

  // G16 should have p.p.
  { id: 'G16P1', lesson: 'G16', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I should have ___ to bed earlier.', opts: ['gone', 'went', 'go'], ans: 0, tags: ['should have'], hints: ['should have 다음엔 p.p.', 'go – went – gone', 'I should have gone to bed earlier.'], why: 'should have 다음에는 과거분사(gone)가 와요.' },
  { id: 'G16P2', lesson: 'G16', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'You should have told me.', opts: ['나한테 말했어야지.', '나한테 말해야 해.', '나한테 말했구나.'], ans: 0, tags: ['듣기', 'should have'], hints: ['should have 가 들렸나요?', 'should have + p.p. = ~했어야 했다', '나한테 말했어야지.'] },
  { id: 'G16P3', lesson: 'G16', type: 'match', prompt: '문장과 뜻을 짝지으세요.', pairs: [['I should have listened to you.', '네 말을 들었어야 했는데.'], ["I shouldn't have eaten so much.", '그렇게 많이 먹지 말았어야 했는데.'], ['You could have called me.', '나한테 전화할 수도 있었잖아.'], ['You should call me.', '나한테 전화해.']], tags: ['should have', 'could have'], hints: ['have + p.p. 가 붙으면 지난 일', "shouldn't have = 하지 말았어야", 'could have = 할 수도 있었는데'] },
  { id: 'G16P4', lesson: 'G16', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '택시를 타지 말았어야 했어요.', answer: ["We shouldn't have taken a taxi.", 'We should not have taken a taxi.'], cards: ['We', "shouldn't have taken", 'a taxi.'], roles: 'S V O', tags: ['should have'], hints: ["주어 → shouldn't have + p.p. → 무엇을", 'take – took – taken', "We shouldn't have taken a taxi."] },
  { id: 'G16P5', lesson: 'G16', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '네 말을 들었어야 했는데.', answer: ['I should have listened to you.', "I should've listened to you."], cards: ['I', 'should', 'have', 'listened', 'to you.'], distractors: ['listen'], tags: ['should have'], hints: ['should + have + p.p.', 'listen → listened', 'I should have listened to you.'] },
  { id: 'G16P6', lesson: 'G16', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그 경기 이길 수도 있었는데.', wrong: 'I could have win the game.', answer: ['I could have won the game.', "I could've won the game."], tags: ['could have', '오개념'], hints: ['have 다음 동사 모양', 'win – won – won', 'I could have won the game.'], why: 'could have 다음에도 p.p.(won)가 와요.' },
  { id: 'G16P7', lesson: 'G16', type: 'type', prompt: '영어로 써 보세요.', ko: '더 일찍 출발했어야 했는데.', answer: ['I should have left earlier.', "I should've left earlier.", 'We should have left earlier.', "We should've left earlier.", 'I should have started earlier.', 'I should have left home earlier.'], tags: ['should have'], hints: ['should have + p.p.', '출발하다 leave → left', 'I should have left earlier.'] },
  { id: 'G16P8', lesson: 'G16', type: 'type', prompt: '영어로 써 보세요.', ko: '그렇게 많이 먹지 말았어야 했는데.', answer: ["I shouldn't have eaten so much.", 'I should not have eaten so much.', "I shouldn't have eaten that much.", 'I should not have eaten that much.', "I shouldn't have eaten too much."], tags: ['should have'], hints: ["shouldn't have + p.p.", 'eat – ate – eaten', "I shouldn't have eaten so much."] },
  { id: 'G16P9', lesson: 'G16', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I should have listened to you.', ko: '네 말을 들었어야 했는데.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'should have 는 「슈드브」처럼', 'I should have listened to you.'] },

  // G17 might / must be
  { id: 'G17P1', lesson: 'G17', type: 'choice', prompt: '하루 종일 일한 친구에게. 빈칸에 맞는 말을 고르세요.', q: 'You worked all day. You ___ be tired.', opts: ['must', 'might not', "can't"], ans: 0, tags: ['추측', 'must'], hints: ['근거가 확실해요', '거의 확실한 짐작 = must be', 'You must be tired.'], why: '근거가 있어 거의 확실할 땐 must be 예요.' },
  { id: 'G17P2', lesson: 'G17', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: "I saw him in Seoul an hour ago. He ___ be in Busan now.", opts: ["can't", 'must', 'might'], ans: 0, tags: ['추측', "can't"], hints: ['한 시간 전에 서울에 있었어요', '그럴 리가 없다 = can\'t be', "He can't be in Busan now."], why: '한 시간 만에 부산에 있을 리 없으니 「~일 리가 없다」 can\'t be 예요.' },
  { id: 'G17P3', lesson: 'G17', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'It might rain this afternoon.', opts: ['오늘 오후에 비가 올지도 몰라요.', '오늘 오후에 꼭 비가 와요.', '오늘 오후에 비가 왔어요.'], ans: 0, tags: ['듣기', 'might'], hints: ['might 가 들렸나요?', 'might = ~일지도', '오늘 오후에 비가 올지도 몰라요.'] },
  { id: 'G17P4', lesson: 'G17', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그는 집에 있을지도 몰라요.', answer: ['He might be at home.', 'He may be at home.', 'He might be home.'], cards: ['He', 'might be', 'at home.'], roles: 'S V M', tags: ['might'], hints: ['반반 짐작 = might be', 'He + might be + 어디', 'He might be at home.'] },
  { id: 'G17P5', lesson: 'G17', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '그게 사실일 리가 없어요.', answer: ["That can't be true.", 'That cannot be true.'], cards: ['That', "can't", 'be', 'true.'], distractors: ['is'], tags: ["can't"], hints: ["그럴 리 없다 = can't be", "can't 다음엔 원형 be", "That can't be true."] },
  { id: 'G17P6', lesson: 'G17', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '조금 늦을지도 몰라요.', wrong: 'I might am a little late.', answer: ['I might be a little late.', 'I may be a little late.'], tags: ['might', '오개념'], hints: ['might 다음 동사 모양', '조동사 뒤는 원형 be', 'I might be a little late.'], why: 'might 같은 조동사 뒤에는 원형 be 가 와요 (am ✗).' },
  { id: 'G17P7', lesson: 'G17', type: 'type', prompt: '영어로 써 보세요.', ko: '배고프겠다. (근거가 있어 거의 확실)', answer: ['You must be hungry.', 'You must be starving.'], tags: ['must'], hints: ['거의 확실한 짐작', 'You must be + 형용사', 'You must be hungry.'] },
  { id: 'G17P8', lesson: 'G17', type: 'type', prompt: '영어로 써 보세요.', ko: '불이 꺼져 있어요. 다들 나간 게 틀림없어요.', answer: ['The lights are off. They must be out.', 'The lights are off. They must have gone out.', 'The lights are off. They must be away.', 'The lights are off. Everyone must be out.'], tags: ['must'], hints: ['The lights are off. + They must be …', '나가 있다 = be out', 'The lights are off. They must be out.'] },
  { id: 'G17P9', lesson: 'G17', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'You must be exhausted.', ko: '엄청 피곤하겠어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'must 에 힘을 줘서', 'You must be exhausted.'] },

  // G18 used to
  { id: 'G18P1', lesson: 'G18', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'She ___ live in Busan.', opts: ['used to', 'is used to', 'use to'], ans: 0, tags: ['used to'], hints: ['예전에 살았고 지금은 아니에요', 'used to + 원형', 'She used to live in Busan.'], why: '예전엔 그랬지만 지금은 아닌 일 = used to + 동사원형.' },
  { id: 'G18P2', lesson: 'G18', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'There used to be a bookstore here.', opts: ['예전엔 여기 서점이 있었어요.', '여기 서점이 생길 거예요.', '여기 서점이 있어요.'], ans: 0, tags: ['듣기', 'used to'], hints: ['used to be', 'used to = 예전엔 ~했다', '예전엔 여기 서점이 있었어요.'] },
  { id: 'G18P3', lesson: 'G18', type: 'match', prompt: '문장과 뜻을 짝지으세요.', pairs: [['I used to get up early.', '예전엔 일찍 일어났어요.'], ['I am used to getting up early.', '일찍 일어나는 데 익숙해요.'], ["I didn't use to like coffee.", '예전엔 커피를 안 좋아했어요.'], ['Did you use to play sports?', '예전에 운동했어요?']], tags: ['used to'], hints: ['used to + 원형 = 예전엔', 'be used to + -ing = 익숙하다', "didn't use to = 예전엔 안 했다"] },
  { id: 'G18P4', lesson: 'G18', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '예전엔 커피를 안 좋아했어요.', answer: ["I didn't use to like coffee.", 'I did not use to like coffee.'], cards: ['I', "didn't use to like", 'coffee.'], roles: 'S V O', tags: ['used to', '부정'], hints: ["부정은 didn't use to", 'did 가 있으면 used → use', "I didn't use to like coffee."] },
  { id: 'G18P5', lesson: 'G18', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '예전에 운동했어요?', answer: ['Did you use to play sports?'], cards: ['Did', 'you', 'use to', 'play', 'sports?'], distractors: ['used to'], tags: ['used to', '질문'], hints: ['Did 가 맨 앞', 'Did 가 있으면 use to (d 없음)', 'Did you use to play sports?'] },
  { id: 'G18P6', lesson: 'G18', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '예전엔 담배를 피웠어요.', wrong: 'I used to smoking.', answer: ['I used to smoke.'], tags: ['used to', '오개념'], hints: ['used to 다음 동사 모양', 'used to + 원형', 'I used to smoke.'], why: '「예전엔 ~했다」는 used to + 동사원형 (smoke) 이에요.' },
  { id: 'G18P7', lesson: 'G18', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 예전에 서울에 살았어요.', answer: ['I used to live in Seoul.'], tags: ['used to'], hints: ['used to + 원형', '살다 = live', 'I used to live in Seoul.'] },
  { id: 'G18P8', lesson: 'G18', type: 'type', prompt: '영어로 써 보세요.', ko: '예전엔 매일 운동했어요.', answer: ['I used to exercise every day.', 'I used to work out every day.', 'I used to exercise everyday.', 'I used to work out everyday.'], tags: ['used to'], hints: ['used to + 원형 + every day', '운동하다 = exercise', 'I used to exercise every day.'] },
  { id: 'G18P9', lesson: 'G18', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'There used to be a bookstore here.', ko: '예전엔 여기 서점이 있었어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'used to 는 「유스투」', 'There used to be a bookstore here.'] },

  // GB4 친구 고민 상담
  { id: 'GB4P1', lesson: 'GB4', boss: true, type: 'listen', prompt: 'Tom 이 한숨을 쉬며 말해요. 듣고 뜻을 고르세요.', say: 'I work until ten every night.', opts: ['매일 밤 10시까지 일해.', '매일 밤 10시에 퇴근해.', '10일 동안 밤에 일했어.'], ans: 0, tags: ['듣기'], hints: ['until = ~까지', 'every night = 매일 밤', '매일 밤 10시까지 일해.'] },
  { id: 'GB4P2', lesson: 'GB4', boss: true, type: 'choice', prompt: '공감해 주세요. 빈칸에 맞는 말을 고르세요.', q: 'You ___ be so stressed.', opts: ['must', "can't", 'used to'], ans: 0, tags: ['must', '공감'], hints: ['매일 밤 10시까지 일한대요', '거의 확실한 짐작', 'You must be so stressed.'], why: '근거가 분명하니 「~하겠다」는 must be 예요.' },
  { id: 'GB4P3', lesson: 'GB4', boss: true, type: 'order', prompt: 'Tom 이 옛날 이야기를 해요. 카드를 순서대로 놓으세요.', ko: '예전엔 내 일을 정말 좋아했는데.', answer: ['I used to really love my job.', 'I really used to love my job.'], cards: ['I', 'used to', 'really', 'love', 'my job.'], distractors: ['loving'], tags: ['used to'], hints: ['used to + 원형', 'really 는 love 앞', 'I used to really love my job.'] },
  { id: 'GB4P4', lesson: 'GB4', boss: true, type: 'fix', prompt: 'Tom 이 후회해요. 틀린 곳을 고쳐 다시 쓰세요.', ko: '작년에 그만뒀어야 했는데.', wrong: 'I should have quitted last year.', answer: ['I should have quit last year.', "I should've quit last year."], tags: ['should have', '오개념'], hints: ['quit 의 p.p.', 'quit – quit – quit', 'I should have quit last year.'], why: 'quit 은 과거·과거분사도 quit 이에요.' },
  { id: 'GB4P5', lesson: 'GB4', boss: true, type: 'type', prompt: 'Tom 의 아쉬움을 영어로 써 보세요.', ko: '자유 시간이 더 있으면 좋을 텐데.', answer: ['I wish I had more free time.', 'I wish I had more time.', 'I wish I had more time for myself.', 'I wish I had more spare time.'], tags: ['I wish'], hints: ['I wish + 과거형', '있다 have → had', 'I wish I had more free time.'] },
  { id: 'GB4P6', lesson: 'GB4', boss: true, type: 'build', prompt: '조언해 주세요.', ko: '내가 너라면 상사랑 얘기해 볼 거야.', answer: ['If I were you, I would talk to your boss.', "If I were you, I'd talk to your boss.", 'If I was you, I would talk to your boss.'], cards: ['If I were you,', 'I', 'would talk', 'to your boss.'], roles: 'M S V M', tags: ['가정법 과거', '조언'], hints: ['If I were you 로 시작', 'I would + 원형', 'If I were you, I would talk to your boss.'] },
  { id: 'GB4P7', lesson: 'GB4', boss: true, type: 'type', prompt: '한 가지 더 조언하세요. 영어로 써 보세요.', ko: '상사가 이해해 줄지도 몰라.', answer: ['Your boss might understand.', 'Your boss may understand.', 'Your boss might understand you.', 'Your boss may understand you.'], tags: ['might'], hints: ['반반 짐작 = might + 원형', '이해하다 = understand', 'Your boss might understand.'] },
  { id: 'GB4P8', lesson: 'GB4', boss: true, type: 'speak', prompt: '🔊 마지막으로 응원해 주세요.', say: 'If it gets worse, you can always call me.', ko: '더 힘들어지면 언제든 나한테 전화해.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'If 쪽은 현재형 gets', 'If it gets worse, you can always call me.'] },
);
