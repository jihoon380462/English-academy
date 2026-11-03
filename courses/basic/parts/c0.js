// courses/basic/parts/c0.js — 챕터 0 「소리와 글자」 (레슨 E1~E4 + 보스 B0). 스키마는 ../content.js 맨 위 주석
CHAPTERS.push(
  { n: 0, title: '소리와 글자', icon: '🔊', desc: '알파벳 이름과 실제 소리, 헷갈리는 소리를 문장 속에서 들어요' },
);
LESSONS.push(
  // ── E1 알파벳 이름 vs 소리 ──
  { id: 'E1', ch: 0, n: 1, title: '알파벳 이름 vs 소리', minutes: 6,
    terms: { '알파벳 이름': '글자를 하나씩 부를 때 쓰는 이름. A는 「에이」, B는 「비」.', '철자': '낱말을 이루는 글자들의 순서. 영어로 spelling.' },
    pages: [
      { title: '글자에는 「이름」과 「소리」가 있어요', html: '<p>A의 <b>이름</b>은 「에이」지만, <b>cat</b> 안에서는 「애」 소리가 나요. 글자의 이름과 문장 속 소리는 달라요.</p><p>이름은 <b>철자를 하나씩 불러 줄 때</b> 써요. 카페·호텔·전화에서 자주 필요해요.</p>',
        ex: [
          { en: 'My name|is|Mina.', roles: 'S V C', ko: '제 이름은 미나예요.' },
          { en: 'How|do|you|spell|that?', roles: 'Q Q S V O', ko: '철자가 어떻게 돼요?', note: '이름을 들은 사람이 자주 되묻는 말이에요.' },
          { en: "It's M-I-N-A.", ko: '엠, 아이, 엔, 에이예요.', note: '철자는 알파벳 <b>이름</b>으로 하나씩 또박또박 말해요.', deck: false },
        ] },
      { title: '한국인이 헷갈리는 이름: G와 J, E와 I', html: '<table><tr><th>글자</th><th>이름</th></tr><tr><td>G</td><td>쥐</td></tr><tr><td>J</td><td>제이</td></tr><tr><td>E</td><td>이</td></tr><tr><td>I</td><td>아이</td></tr><tr><td>R</td><td>아-ㄹ (영국식은 「아-」)</td></tr><tr><td>Y</td><td>와이</td></tr></table><p>특히 <b>G(쥐)</b>와 <b>J(제이)</b>, <b>E(이)</b>와 <b>I(아이)</b>를 바꿔 말하는 실수가 많아요.</p><p>G 의 「쥐」는 「지」를 입술을 살짝 내밀며 말한다는 뜻이에요. 끝은 「위」가 아니라 길게 「이-」로 끝나요.</p>',
        ex: [
          { en: 'Is|that|G or J?', roles: 'Q S C', ko: '그거 G예요, J예요?' },
          { en: "It's J-I-S-O-O.", ko: '제이, 아이, 에스, 오, 오예요.', deck: false },
        ], tip: '같은 글자가 두 번이면 「double O」처럼 말해도 돼요: J-I-S-double O.' },
      { title: '문장 속에서는 「소리」로 읽어요', html: '<p>낱말 안에서 a는 「애」, e는 「에」, i는 「이」, u는 「어」에 가까운 <b>짧은 소리</b>가 기본이에요. cat 「캣」, bed 「베드」, sit 「싯」, cup 「컵」처럼요. 한국어보다 짧게, 힘을 빼고 내요(sit 의 i 는 「이」와 「에」 사이쯤). 길게 끄는 소리는 다음 레슨에서 배워요.</p><p><b>o는 조금 특별해요.</b> 학교에서는 「오」로 배웠지만, 이 사이트가 들려주는 <b>미국식 발음</b>에서는 hot, stop, box 의 짧은 o 가 입을 크게 벌린 <b>「아」</b>에 가까워요(hot 「핫」, stop 「스탑」). 영국식은 「오」에 더 가까워요(hot 「홋」). 둘 다 맞는 발음이니 🔊로 들으며 익숙한 쪽으로 따라 하면 돼요.</p><p>단, go 「고우」, home 「호움」처럼 <b>긴 o</b>는 「오」 한 소리가 아니라 「오우」로 읽어요(영국식은 「어우」에 가까워요: go 「거우」).</p>',
        ex: [
          { en: 'The cat|is|on the bed.', roles: 'S V M', ko: '고양이가 침대 위에 있어요.' },
          { en: 'I|have|a red cup.', roles: 'S V O', ko: '나는 빨간 컵이 있어요.' },
          { en: 'The hot dog|is|in the box.', roles: 'S V M', ko: '핫도그가 상자 안에 있어요.', note: 'hot 「핫」, box 「박스」 — 미국식 짧은 o 는 「아」에 가까워요.' },
        ] },
    ],
    summary: ['철자를 부를 때는 알파벳 <b>이름</b>(에이·비·씨), 읽을 때는 <b>소리</b>(애·브·크).', 'G(쥐)·J(제이), E(이)·I(아이)를 헷갈리지 않게!', '철자를 물을 때: <b>How do you spell that?</b>'] },

  // ── E2 모음 소리와 강세 ──
  { id: 'E2', ch: 0, n: 2, title: '모음 소리와 강세', minutes: 7,
    terms: { '모음': '한국어의 ㅏ·ㅓ·ㅣ 처럼 목이 울리며 막힘 없이 나는 소리. 영어에서는 a, e, i, o, u 다섯 글자가 이 소리를 맡아요(글자마다 소리가 여러 가지예요).', '강세': '낱말이나 문장에서 더 크고 길게 말하는 부분.' },
    pages: [
      { title: '끝의 e는 앞 모음을 「이름」으로 바꿔요', html: '<p>hat은 「햇」인데 <b>hate</b>는 「헤잇」이에요. 끝의 e는 소리가 나지 않고, 앞 모음을 <b>알파벳 이름 소리</b>로 바꿔요.</p><table><tr><td>hat 햇</td><td>→ hate 헤잇</td></tr><tr><td>kit 킷</td><td>→ kite 카잇</td></tr><tr><td>rid 리드</td><td>→ ride 라이드</td></tr></table>',
        ex: [
          { en: 'I|hate|this hat.', roles: 'S V O', ko: '나는 이 모자가 싫어요.', note: 'hate 「헤잇」 vs hat 「햇」 — 한 문장에 둘 다 있어요.' },
          { en: 'I|ride|a bike|to work.', roles: 'S V O M', ko: '나는 자전거로 출근해요.' },
          { en: 'The kids|fly|a kite|in the park.', roles: 'S V O M', ko: '아이들이 공원에서 연을 날려요.' },
        ], tip: '예외도 있어요: have 「해브」, give 「기브」, love 「러브」, come 「컴」은 끝에 e 가 있어도 이름 소리가 아니에요. 자주 쓰는 낱말이라 통째로 익혀요.' },
      { title: '낱말 강세: 한 곳만 크게', html: '<p>영어 낱말은 <b>한 부분만</b> 크고 길게 말해요. 한국어처럼 모든 글자를 똑같이 말하면 잘 못 알아들어요.</p><p><b>CO</b>ffee · ho<b>TEL</b> · ba<b>NA</b>na · com<b>PU</b>ter</p>',
        ex: [
          { en: 'I|need|a coffee.', roles: 'S V O', ko: '커피가 필요해요.', note: '「커피」가 아니라 <b>CO</b>ffee — 앞을 세게.' },
          { en: 'The hotel|is|near the station.', roles: 'S V M', ko: '호텔은 역 근처에 있어요.', note: 'ho<b>TEL</b> — 뒤를 세게.' },
        ] },
      { title: '문장 강세: 중요한 낱말을 세게', html: '<p>문장에서는 <b>뜻을 전하는 낱말</b>(명사·동사·형용사)을 세게, a·the·is 같은 작은 낱말은 약하고 빠르게 말해요.</p><p>이 리듬만 지켜도 훨씬 자연스럽게 들려요.</p>',
        ex: [
          { en: 'I|want|a big pizza.', roles: 'S V O', ko: '나는 큰 피자를 원해요.', note: '<b>WANT · BIG · PIZ</b>za 를 세게, a 는 약하게.' },
          { en: 'She|is|my best friend.', roles: 'S V C', ko: '그녀는 내 가장 친한 친구예요.' },
        ], tip: '🐢 느린 재생으로 들으면 세게 말하는 곳이 더 잘 들려요.' },
    ],
    summary: ['끝의 e는 소리 없이 앞 모음을 이름 소리로: hat → <b>hate</b>.', '낱말마다 강세는 한 곳: <b>CO</b>ffee, ho<b>TEL</b>.', '문장에서는 뜻 있는 낱말을 세게, a·the·is 는 약하게.'] },

  // ── E3 자주 틀리는 소리 ──
  { id: 'E3', ch: 0, n: 3, title: '헷갈리는 소리 (f/p, r/l, th, v/b)', minutes: 8,
    terms: { '최소 대립쌍': '소리 하나만 다른 낱말 짝. fan / pan 처럼 한 소리 차이로 뜻이 바뀌어요.' },
    pages: [
      { title: 'f 와 p: 윗니를 아랫입술에', html: '<p>한국어에는 f 소리가 없어서 「ㅍ」로 말하기 쉬워요. 그러면 <b>fan</b>(선풍기)이 <b>pan</b>(프라이팬)이 돼요.</p><p>f 는 <b>윗니를 아랫입술에 살짝 대고</b> 바람을 내보내요. p 는 두 입술을 붙였다 터뜨려요.</p>',
        ex: [
          { en: 'I|have|a fan.', roles: 'S V O', ko: '나는 선풍기가 있어요.' },
          { en: 'I|have|a pan.', roles: 'S V O', ko: '나는 프라이팬이 있어요.' },
          { en: 'Coffee|is|my favorite.', roles: 'S V C', ko: '커피를 제일 좋아해요.' },
        ] },
      { title: 'r 과 l: 혀가 닿나 안 닿나', html: '<p><b>l</b> 은 혀끝을 윗니 뒤 잇몸에 <b>붙이고</b>, <b>r</b> 은 혀를 어디에도 <b>안 붙이고</b> 뒤로 살짝 말아요.</p><p>right(오른쪽)와 light(불빛)는 이 차이 하나로 뜻이 달라져요.</p>',
        ex: [
          { en: 'Turn|right.', roles: 'V M', ko: '오른쪽으로 도세요.' },
          { en: 'Turn on|the light.', roles: 'V O', ko: '불을 켜세요.' },
          { en: 'I|eat|rice|every day.', roles: 'S V O M', ko: '나는 매일 밥을 먹어요.' },
        ] },
      { title: 'th 와 v/b: 혀끝은 이 사이로, v 는 윗니로', html: '<p><b>th</b> 는 혀끝을 윗니와 아랫니 사이에 살짝 내밀고 바람을 내요. 「ㅆ」로 말하면 think 가 sink(가라앉다)처럼 들려요. this, the 의 th 는 같은 자리에서 <b>목을 울려</b> 내요(「ㄷ」로 말하지 않기).</p><p><b>v</b> 는 f 처럼 윗니를 아랫입술에 대고 목을 울려요. b 는 두 입술을 붙여요. very 와 berry 를 구별해 보세요.</p>',
        ex: [
          { en: 'I|think|so.', roles: 'S V O', ko: '그런 것 같아요.' },
          { en: 'This berry|is|very sweet.', roles: 'S V C', ko: '이 베리는 아주 달아요.', note: '<b>v</b>ery 는 윗니로, <b>b</b>erry 는 입술로.' },
        ], tip: '거울을 보며 말해 보세요. f·v·th 는 이가 보여야 해요.' },
    ],
    summary: ['f·v 는 윗니를 아랫입술에, p·b 는 두 입술을 붙여요.', 'l 은 혀를 붙이고, r 은 혀를 안 붙여요.', 'th 는 혀끝을 이 사이로 — 「ㅆ」가 아니에요.'] },

  // ── E4 연음·리듬 ──
  { id: 'E4', ch: 0, n: 4, title: "줄여 말하기와 리듬 (I'm, can't)", minutes: 7,
    terms: { '축약형': "두 낱말을 줄여 하나로 쓴 것. I am → I'm. 빠진 글자 자리에 ' 를 찍어요.", '연음': '앞 낱말 끝소리와 뒷 낱말 첫소리가 이어져 한 덩어리처럼 들리는 것.' },
    pages: [
      { title: "말할 때는 거의 줄여요: I'm, what's, it's", html: "<p>대화에서는 <b>I am → I'm</b>, <b>What is → What's</b>, <b>It is → It's</b> 처럼 줄여서 말해요.</p><p>줄인 말은 한 낱말처럼 빠르게 한 번에 소리 내요. I'm 은 「아임」.</p>",
        ex: [
          { en: "I'm tired.", ko: '나는 피곤해요.' },
          { en: "What's your name?", ko: '이름이 뭐예요?' },
          { en: "It's cold today.", ko: '오늘 추워요.' },
        ] },
      { title: '낱말끼리 이어져요', html: '<p>자음으로 끝나는 낱말 뒤에 모음으로 시작하는 낱말이 오면 <b>이어서</b> 소리가 나요.</p><p>come in → 「커민」, an apple → 「어내플」, pick it up → 「피키럽」.</p><p>pick it up 의 「럽」은 <b>미국식</b>이에요. 미국식은 모음 사이의 t 를 「ㄹ」처럼 약하게 굴려요. 영국식은 t 를 살려 「피키텁」에 가까워요.</p>',
        ex: [
          { en: 'Come|in.', roles: 'V M', ko: '들어오세요.' },
          { en: 'I|have|an apple.', roles: 'S V O', ko: '나는 사과가 하나 있어요.' },
          { en: 'Pick|it|up.', roles: 'V O M', ko: '그거 주워요.' },
        ] },
      { title: "can 과 can't: 힘과 길이로 구별", html: "<p>긍정 <b>can</b> 은 약하고 짧게 「큰」, 뒤의 동사를 세게: I can <b>SWIM</b>.</p><p>부정 <b>can't</b> 는 세고 길게 「캐-앤(ㅌ)」. 끝의 t 는 거의 안 들려서, <b>힘이 들어갔는지</b>로 구별해요.</p><p>이건 <b>미국식</b> 기준이에요. 영국식은 can't 를 「카-안(ㅌ)」처럼 모음부터 다르게 말해서 구별이 더 쉬워요.</p>",
        ex: [
          { en: 'I|can swim.', roles: 'S V', ko: '나는 수영할 수 있어요.' },
          { en: "I|can't swim.", roles: 'S V', ko: '나는 수영 못 해요.' },
          { en: 'She|can speak|English.', roles: 'S V O', ko: '그녀는 영어를 할 수 있어요.' },
        ] },
    ],
    summary: ["말할 때는 줄여요: I'm, what's, it's.", '자음 + 모음은 이어서: come in 「커민」.', "can 은 약하게, can't 는 세고 길게."] },

  // ── B0 보스: 카페에서 이름 철자 불러주기 ──
  { id: 'B0', ch: 0, boss: true, title: '카페에서 내 이름 불러주기', minutes: 7,
    pages: [
      { title: '미션: 주문하고 이름 철자 알려 주기', html: '<p>해외 카페에서 아이스 라테를 주문해요. 직원이 컵에 쓸 <b>이름</b>을 묻고, 철자도 물어봐요.</p><p>이름을 말하고 → 알파벳 <b>이름</b>으로 철자를 불러 주고 → 헷갈리는 글자는 「J as in juice」처럼 낱말로 설명해요.</p>',
        ex: [
          { en: "I'd like an iced latte, please.", ko: '아이스 라테 한 잔 주세요.', note: "I'd like = I would like, 「~ 주세요」의 공손한 말." },
          { en: 'Can I get a name for the order?', ko: '주문하실 분 이름을 알려 주시겠어요?' },
          { en: "It's Jihoon.", ko: '지훈이에요.' },
        ] },
      { title: '헷갈리는 글자는 낱말로 짚어 줘요', html: '<p>G와 J, B와 V처럼 헷갈리는 글자는 <b>「글자 + as in + 그 글자로 시작하는 낱말」</b>로 말해요.</p>',
        ex: [
          { en: 'J as in juice.', ko: '주스(juice)의 J예요.', deck: false },
          { en: 'One iced latte for Jihoon!', ko: '지훈 씨, 아이스 라테 나왔어요!' },
        ] },
    ],
    summary: ['주문: <b>I\'d like ~, please.</b>', '이름 철자는 알파벳 이름으로 하나씩: J, I, H, O, O, N.', '헷갈리는 글자는 <b>J as in juice</b> 처럼.'] },
);
PROBLEMS.push(
  // ── E1 ──
  { id: 'E1P1', lesson: 'E1', type: 'listen', prompt: '듣고 이 사람 이름의 철자를 고르세요.', say: 'My name is Jina. J, I, N, A.', opts: ['JINA', 'GINA', 'JENA'], ans: 0, tags: ['알파벳 이름', '듣기'], hints: ['첫 글자가 「제이」인지 「쥐」인지 들어 보세요', '「제이」는 J, 두 번째 「아이」는 I', 'J-I-N-A'], why: '「제이」는 J, 「아이」는 I 예요. G는 「쥐」, E는 「이」.' },
  { id: 'E1P2', lesson: 'E1', type: 'choice', prompt: '이 문장의 뜻을 고르세요.', q: 'How|do|you|spell|that?', qroles: 'Q Q S V O', opts: ['철자가 어떻게 돼요?', '그거 어떻게 발음해요?', '이름이 뭐예요?'], ans: 0, tags: ['철자'], hints: ['spell 이 핵심 낱말이에요', 'spell = 철자를 말하다', '철자가 어떻게 돼요?'], why: 'spell 은 「철자를 하나씩 말하다」예요. 발음을 물을 때는 How do you say that?' },
  { id: 'E1P3', lesson: 'E1', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I have a red cup.', opts: ['나는 빨간 컵이 있어요.', '나는 빨간 모자가 있어요.', '나는 빨간 가방이 있어요.'], ans: 0, tags: ['모음 소리', '듣기'], hints: ['마지막 낱말의 모음을 들어 보세요', '「컵」 — u 가 「어」 소리', 'cup = 컵'], why: 'cup 은 「컵」, cap(모자)은 「캡」, bag(가방)은 「백」이에요.' },
  { id: 'E1P4', lesson: 'E1', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['My name is Mina.', '제 이름은 미나예요.'], ['How do you spell that?', '철자가 어떻게 돼요?'], ['Is that G or J?', '그거 G예요, J예요?'], ['The cat is on the bed.', '고양이가 침대 위에 있어요.']], tags: ['철자'], hints: ['아는 낱말부터 찾아보세요', 'spell = 철자, cat = 고양이', 'name → 이름, spell → 철자, G or J → G예요 J예요'] },
  { id: 'E1P5', lesson: 'E1', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '제 이름은 미나예요.', answer: ['My name is Mina.'], cards: ['My name', 'is', 'Mina.'], roles: 'S V C', tags: ['문장 뼈대'], hints: ['파랑(주어)은 「제 이름」', 'My name → is → Mina', 'My name is Mina.'] },
  { id: 'E1P6', lesson: 'E1', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '철자가 어떻게 돼요?', answer: ['How do you spell that?', 'How do you spell it?'], cards: ['How', 'do', 'you', 'spell', 'that?'], distractors: ['does'], tags: ['철자', '질문'], hints: ['질문은 How 로 시작해요', 'How do you … 다음에 spell that', 'How do you spell that?'] },
  { id: 'E1P7', lesson: 'E1', type: 'type', prompt: '영어로 써 보세요.', ko: '제 이름은 민호예요.', answer: ['My name is Minho.', "My name's Minho.", "I'm Minho.", 'I am Minho.', 'Minho is my name.'], tags: ['자기소개'], hints: ['「제 이름」 = My name', 'My name + is + 이름', 'My name is Minho.'] },
  { id: 'E1P8', lesson: 'E1', type: 'dictation', prompt: '🔊 듣고 들리는 문장을 그대로 쓰세요.', say: 'The cat is on the bed.', tags: ['받아쓰기'], hints: ['낱말은 6개예요', '고양이가 … 침대 위에', 'The cat is on the bed.'] },
  { id: 'E1P9', lesson: 'E1', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'How do you spell that?', ko: '철자가 어떻게 돼요?', roles: 'Q Q S V O', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'SPELL 을 가장 세게', 'How do you spell that?'] },

  // ── E2 ──
  { id: 'E2P1', lesson: 'E2', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'The kids fly a kite in the park.', opts: ['아이들이 공원에서 연을 날려요.', '아이들이 공원에서 공을 차요.', '아이들이 공원에서 자전거를 타요.'], ans: 0, tags: ['모음 소리', '듣기'], hints: ['fly 다음 낱말을 들어 보세요', 'kite 는 끝 e 때문에 i 가 「아이」 — 「카잇」', 'kite = 연'], why: 'kite 「카잇」은 연이에요. 끝의 e 가 i 를 「아이」로 바꿔요.' },
  { id: 'E2P2', lesson: 'E2', type: 'choice', prompt: '이 문장에서 hotel 은 어디를 세게 말할까요?', q: 'The hotel|is|near the station.', qroles: 'S V M', opts: ['hoTEL (뒤를 세게)', 'HOtel (앞을 세게)'], ans: 0, tags: ['강세'], hints: ['한국어 「호텔」과 강세가 같지 않아요', '뒤쪽 TEL 이 커요', 'hoTEL'], why: 'hotel 은 뒤 TEL 에 강세가 있어요: ho-TEL.' },
  { id: 'E2P3', lesson: 'E2', type: 'choice', prompt: '이 문장에서 가장 약하고 빠르게 말하는 낱말은?', q: 'I|want|a big pizza.', qroles: 'S V O', opts: ['a', 'want', 'big', 'pizza'], ans: 0, tags: ['문장 강세'], hints: ['뜻을 전하는 낱말은 세게 말해요', '작은 낱말(a, the, is)은 약하게', 'a'], why: 'a 같은 작은 낱말은 약하게, want·big·pizza 처럼 뜻 있는 낱말은 세게 말해요.' },
  { id: 'E2P4', lesson: 'E2', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['I hate this hat.', '나는 이 모자가 싫어요.'], ['I ride a bike to work.', '나는 자전거로 출근해요.'], ['I need a coffee.', '커피가 필요해요.'], ['The hotel is near the station.', '호텔은 역 근처에 있어요.']], tags: ['모음 소리'], hints: ['hat = 모자, bike = 자전거', 'need = 필요하다, near = 근처에', 'hate → 싫어요, ride → 출근, need → 필요, hotel → 호텔'] },
  { id: 'E2P5', lesson: 'E2', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '나는 커피가 필요해요.', answer: ['I need a coffee.', 'I need coffee.'], cards: ['I', 'need', 'a coffee.'], roles: 'S V O', tags: ['문장 뼈대'], hints: ['파랑(주어)은 I', '빨강(동사)은 need', 'I need a coffee.'] },
  { id: 'E2P6', lesson: 'E2', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '호텔은 역 근처에 있어요.', answer: ['The hotel is near the station.'], cards: ['The hotel', 'is', 'near', 'the station.'], distractors: ['are'], tags: ['문장 뼈대'], hints: ['주어(호텔) → 동사 → 어디', '호텔 하나니까 is', 'The hotel is near the station.'] },
  { id: 'E2P7', lesson: 'E2', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 이 모자가 싫어요.', answer: ['I hate this hat.', "I don't like this hat.", 'I do not like this hat.', 'I really hate this hat.'], tags: ['모음 소리'], hints: ['싫어하다 = hate (헤잇)', '모자 = hat (햇)', 'I hate this hat.'] },
  { id: 'E2P8', lesson: 'E2', type: 'dictation', prompt: '🔊 듣고 들리는 문장을 그대로 쓰세요.', say: 'I ride a bike to work.', tags: ['받아쓰기'], hints: ['낱말은 6개예요', 'ride 「라이드」, bike 「바익」', 'I ride a bike to work.'] },
  { id: 'E2P9', lesson: 'E2', type: 'speak', prompt: '🔊 리듬을 살려 따라 말해 보세요. 굵은 낱말을 세게!', say: 'I|want|a big pizza.', ko: '나는 큰 피자를 원해요.', roles: 'S V O', tags: ['말하기', '문장 강세'], hints: ['WANT · BIG · PIZza 를 세게', 'a 는 「어」로 짧게', 'I want a big pizza.'] },

  // ── E3 ──
  { id: 'E3P1', lesson: 'E3', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'I have a fan.', opts: ['나는 선풍기가 있어요.', '나는 프라이팬이 있어요.'], ans: 0, tags: ['f/p', '듣기'], hints: ['마지막 낱말 첫소리를 들어 보세요', '바람 새는 소리면 f', 'fan = 선풍기'], why: 'f 는 윗니를 입술에 대고 바람을 내는 소리 — fan(선풍기). p 는 터지는 소리 — pan(프라이팬).' },
  { id: 'E3P2', lesson: 'E3', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Turn on the light.', opts: ['불을 켜세요.', '오른쪽으로 도세요.', '라디오를 켜세요.'], ans: 0, tags: ['r/l', '듣기'], hints: ['turn on 은 「켜다」', 'light 는 혀를 붙이는 l', '불을 켜세요.'], why: 'Turn on the light = 불을 켜세요. 오른쪽으로 돌라면 Turn right 예요.' },
  { id: 'E3P3', lesson: 'E3', type: 'choice', prompt: '「은행에서 오른쪽으로 도세요」라는 뜻이 되게 고르세요.', q: 'Please turn ___ at the bank.', opts: ['right', 'light'], ans: 0, tags: ['r/l'], hints: ['오른쪽은 r 로 시작해요', 'light 는 「불빛」', 'right'], why: 'right(오른쪽)는 혀를 안 붙이는 r, light(불빛)는 혀를 붙이는 l 이에요.' },
  { id: 'E3P4', lesson: 'E3', type: 'match', prompt: '소리 하나만 다른 문장들이에요. 뜻을 짝지으세요.', pairs: [['I have a fan.', '나는 선풍기가 있어요.'], ['I have a pan.', '나는 프라이팬이 있어요.'], ['Turn right.', '오른쪽으로 도세요.'], ['Turn on the light.', '불을 켜세요.'], ['I think so.', '그런 것 같아요.']], tags: ['헷갈리는 소리'], hints: ['fan 과 pan, right 와 light 를 구별해요', 'fan = 선풍기, light = 불빛', 'fan → 선풍기, pan → 프라이팬, right → 오른쪽, light → 불'] },
  { id: 'E3P5', lesson: 'E3', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '나는 매일 밥을 먹어요.', answer: ['I eat rice every day.'], cards: ['I', 'eat', 'rice', 'every day.'], roles: 'S V O M', tags: ['r/l', '문장 뼈대'], hints: ['회색(꾸밈말)은 맨 뒤 「매일」', 'I → eat → rice → every day', 'I eat rice every day.'] },
  { id: 'E3P6', lesson: 'E3', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '이 베리는 아주 달아요.', answer: ['This berry is very sweet.'], cards: ['This', 'berry', 'is', 'very', 'sweet.'], distractors: ['are'], tags: ['v/b', '문장 뼈대'], hints: ['주어는 This berry', '베리 하나니까 is, 그다음 very sweet', 'This berry is very sweet.'] },
  { id: 'E3P7', lesson: 'E3', type: 'fill', prompt: '「그런 것 같아요」가 되게 빈칸을 채우세요.', text: 'I ___ so.', blanks: [{ a: ['think'], opt: ['think', 'sink'] }], tags: ['th'], hints: ['「생각하다」예요', 'th 는 혀끝을 이 사이로', 'think'], why: 'think(생각하다)는 th 소리. 「ㅆ」로 말하면 sink(가라앉다)가 돼요.' },
  { id: 'E3P8', lesson: 'E3', type: 'type', prompt: '영어로 써 보세요.', ko: '오른쪽으로 도세요.', answer: ['Turn right.', 'Please turn right.', 'Turn right, please.', 'Turn to the right.', 'Go right.', 'Make a right.'], tags: ['r/l'], hints: ['돌다 = turn', '오른쪽 = right (r)', 'Turn right.'] },
  { id: 'E3P9', lesson: 'E3', type: 'speak', prompt: '🔊 v 와 b 를 구별해 따라 말해 보세요.', say: 'This berry is very sweet.', ko: '이 베리는 아주 달아요.', tags: ['말하기', 'v/b'], hints: ['berry 는 입술을 붙였다 떼요', 'very 는 윗니를 아랫입술에', 'This berry is very sweet.'] },

  // ── E4 ──
  { id: 'E4P1', lesson: 'E4', type: 'listen', prompt: "듣고 알맞은 뜻을 고르세요. can 일까요, can't 일까요?", say: "I can't swim.", opts: ['나는 수영 못 해요.', '나는 수영할 수 있어요.'], ans: 0, tags: ["can/can't", '듣기'], hints: ['can 부분에 힘이 들어갔는지 들어 보세요', '세고 길게 「캐-앤」이면 부정', '나는 수영 못 해요.'], why: "can't 는 세고 길게, can 은 약하고 짧게 말해요." },
  { id: 'E4P2', lesson: 'E4', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: '___ your name?', opts: ["What's", 'What', 'Who'], ans: 0, tags: ['축약형'], hints: ['「~은 뭐예요?」에는 is 가 필요해요', 'What is 를 줄이면?', "What's your name?"], why: "What is 를 줄인 What's 가 맞아요. What your name? 은 동사가 빠졌어요." },
  { id: 'E4P3', lesson: 'E4', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [["I'm tired.", '나는 피곤해요.'], ["What's your name?", '이름이 뭐예요?'], ["It's cold today.", '오늘 추워요.'], ['Come in.', '들어오세요.']], tags: ['축약형'], hints: ["I'm = I am", 'cold = 추운, come in = 들어오다', 'tired → 피곤, name → 이름, cold → 추워요, come in → 들어오세요'] },
  { id: 'E4P4', lesson: 'E4', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그녀는 영어를 할 수 있어요.', answer: ['She can speak English.'], cards: ['She', 'can speak', 'English.'], roles: 'S V O', tags: ["can/can't"], hints: ['빨강(동사)은 「can speak」 한 덩어리', 'She → can speak → English', 'She can speak English.'] },
  { id: 'E4P5', lesson: 'E4', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 수영을 잘 못 해요.', answer: ["I can't swim very well.", 'I cannot swim very well.'], cards: ['I', "can't", 'swim', 'very well.'], distractors: ['can'], tags: ["can/can't"], hints: ['「못」 하니까 부정', "I can't swim 다음에 very well", "I can't swim very well."] },
  { id: 'E4P6', lesson: 'E4', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 수영할 수 있어요.', wrong: "I'm can swim.", answer: ['I can swim.'], tags: ['축약형', '오개념'], hints: ["I'm 은 I am 이에요", 'can 앞에 am 은 필요 없어요', 'I can swim.'], why: "I'm = I am. can 이 이미 동사 역할을 하니까 am 을 빼요." },
  { id: 'E4P7', lesson: 'E4', type: 'type', prompt: '영어로 써 보세요.', ko: '이름이 뭐예요?', answer: ["What's your name?", 'What is your name?', 'May I have your name?', 'Can I have your name?', 'Can I get your name?'], tags: ['축약형'], hints: ['무엇 = What', "What's your …", "What's your name?"] },
  { id: 'E4P8', lesson: 'E4', type: 'dictation', prompt: '🔊 듣고 들리는 문장을 그대로 쓰세요.', say: "It's cold today.", tags: ['받아쓰기', '축약형'], hints: ["첫 낱말은 줄인 말 It's", '추운 = cold, 오늘 = today', "It's cold today."] },
  { id: 'E4P9', lesson: 'E4', type: 'speak', prompt: "🔊 can 과 can't 의 리듬을 살려 따라 말해 보세요.", say: "I can't swim, but I can run.", ko: '나는 수영은 못 하지만 달리기는 할 수 있어요.', tags: ['말하기', "can/can't"], hints: ["can't 는 세고 길게", 'can 은 약하게, RUN 을 세게', "I can't swim, but I can run."] },

  // ── B0 보스 ──
  { id: 'B0P1', lesson: 'B0', boss: true, type: 'listen', prompt: '카페에 들어갔어요. 직원이 뭐라고 했을까요?', say: 'Hi! What can I get for you?', opts: ['안녕하세요! 뭘 드릴까요?', '안녕하세요! 이름이 뭐예요?', '안녕하세요! 여기서 드시겠어요?'], ans: 0, tags: ['카페', '듣기'], hints: ['What 으로 시작하는 질문이에요', 'get for you = 당신에게 가져다주다', '뭘 드릴까요?'], why: 'What can I get for you? 는 「뭘 드릴까요?」라는 주문 받는 말이에요.' },
  { id: 'B0P2', lesson: 'B0', boss: true, type: 'order', prompt: '아이스 라테를 주문해요. 카드를 순서대로 놓으세요.', ko: '아이스 라테 한 잔 주세요.', answer: ["I'd like an iced latte, please.", 'I would like an iced latte, please.', 'Can I have an iced latte, please?', 'Can I get an iced latte, please?', 'An iced latte, please.'], cards: ["I'd like", 'an', 'iced latte,', 'please.'], distractors: ['a'], tags: ['카페', '주문'], hints: ["「주세요」는 I'd like … please", 'iced 는 모음 소리로 시작해서 an', "I'd like an iced latte, please."] },
  { id: 'B0P3', lesson: 'B0', boss: true, type: 'listen', prompt: '직원이 컵을 들고 물어요. 무슨 말일까요?', say: 'Can I get a name for the order?', opts: ['주문하실 분 이름을 알려 주시겠어요?', '주문을 바꾸시겠어요?', '어디서 드시겠어요?'], ans: 0, tags: ['카페', '듣기'], hints: ['name 이 들렸나요?', 'a name for the order = 주문에 쓸 이름', '이름을 알려 주시겠어요?'] },
  { id: 'B0P4', lesson: 'B0', boss: true, type: 'type', prompt: '이름을 알려 주세요.', ko: '지훈이에요.', answer: ["It's Jihoon.", 'It is Jihoon.', 'Jihoon.', "I'm Jihoon.", 'My name is Jihoon.', "My name's Jihoon.", "It's Jihoon, please."], tags: ['카페', '이름'], hints: ['짧게 It\'s + 이름', '지훈 = Jihoon', "It's Jihoon."] },
  { id: 'B0P5', lesson: 'B0', boss: true, type: 'choice', prompt: '직원이 「How do you spell that?」이라고 물어요. 알맞은 대답은?', q: 'How|do|you|spell|that?', qroles: 'Q Q S V O', opts: ['J, I, H, O, O, N.', 'Yes, I do.', 'Jihoon is fine.'], ans: 0, sayOpts: true, tags: ['철자'], hints: ['spell = 철자를 말하다', '알파벳 이름으로 하나씩', 'J, I, H, O, O, N.'], why: '철자를 물으면 알파벳 이름으로 한 글자씩 말해요.' },
  { id: 'B0P6', lesson: 'B0', boss: true, type: 'choice', prompt: '직원이 「Is that G or J?」라고 되물어요. 내 이름은 J 로 시작해요. 뭐라고 할까요?', q: 'Is|that|G or J?', qroles: 'Q S C', opts: ['J as in juice.', 'G as in juice.', 'J as in game.'], ans: 0, sayOpts: true, tags: ['철자', '알파벳 이름'], hints: ['「글자 + as in + 그 글자로 시작하는 낱말」', 'juice 는 J 로 시작해요', 'J as in juice.'], why: 'juice 가 J 로 시작하니까 「J as in juice」. game 은 G 로 시작해요.' },
  { id: 'B0P7', lesson: 'B0', boss: true, type: 'listen', prompt: '잠시 뒤 직원이 외쳐요. 무슨 말일까요?', say: 'One iced latte for Jihoon!', opts: ['지훈 씨, 아이스 라테 나왔어요!', '지훈 씨, 아이스 라테 하나 더 드릴까요?', '지훈 씨, 따뜻한 라테 나왔어요!'], ans: 0, tags: ['카페', '듣기'], hints: ['for Jihoon = 지훈 씨 것', 'iced = 차가운', '아이스 라테 나왔어요!'] },
  { id: 'B0P8', lesson: 'B0', boss: true, type: 'speak', prompt: '🔊 음료를 받고 인사해요. 따라 말해 보세요.', say: 'Thank you! Have a nice day.', ko: '고마워요! 좋은 하루 보내세요.', tags: ['말하기', '카페'], hints: ['th 는 혀끝을 이 사이로', 'Thank you → Have a nice day', 'Thank you! Have a nice day.'] },
);
