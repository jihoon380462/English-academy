// courses/basic/parts/c2.js — 챕터 2 「일반 동사」 (레슨 E10~E14 + 보스 B2). 스키마는 ../content.js 맨 위 주석
CHAPTERS.push(
  { n: 2, title: '일반 동사', icon: '🏃', desc: '좋아하다·일하다·가다 — 하는 일을 말하고, 부정하고, 물어봐요' },
);
LESSONS.push(
  { id: 'E10', ch: 2, n: 10, title: '나는 ~해요 (I like / I work)', minutes: 6,
    terms: { '일반동사': '「먹다·좋아하다·일하다」처럼 하는 일이나 마음을 나타내는 동사. be동사(am/is/are)가 아닌 동사는 전부 일반동사예요.', '현재형': '평소에 늘 하는 일, 늘 그런 사실을 말하는 동사 모양이에요.', '목적어': '「무엇을」에 해당하는 말. 동사 바로 뒤에 와요.' },
    pages: [
      { title: '「이다」 말고 「한다」 동사', html: '<p>챕터 1의 be동사는 「~이에요」였어요. 이번엔 <b>좋아하다(like)·일하다(work)·살다(live)</b>처럼 무언가를 <b>하는</b> 동사예요. 이런 동사를 <b>일반동사</b>라고 해요.</p><p>순서는 똑같아요. <b>주어 → 동사</b>. 일반동사가 있으면 be동사는 쓰지 않아요.</p>',
        ex: [{ en: 'I|like|coffee.', roles: 'S V O', ko: '나는 커피를 좋아해요.' }, { en: 'I|work|at a bank.', roles: 'S V M', ko: '나는 은행에서 일해요.' }, { en: 'We|live|in Seoul.', roles: 'S V M', ko: '우리는 서울에 살아요.' }],
        tip: '「나는 커피를 좋아해요」를 I am like coffee 라고 하기 쉬워요. 「~해요」를 am 으로 옮기지 마세요. 동사는 like 하나면 돼요.' },
      { title: '「무엇을」은 동사 바로 뒤에', html: '<p>한국어는 「커피를 <b>좋아해요</b>」처럼 동사가 맨 끝이지만, 영어는 「<b>좋아해요</b> 커피를」 순서예요. <span class="chunk r-O">무엇을</span>은 동사 바로 뒤에 와요.</p><p>언제·어디서 같은 꾸밈말은 보통 문장 맨 뒤에 붙여요.</p>',
        ex: [{ en: 'I|drink|water|every morning.', roles: 'S V O M', ko: '나는 매일 아침 물을 마셔요.' }, { en: 'They|play|soccer|on Sundays.', roles: 'S V O M', ko: '그들은 일요일마다 축구를 해요.' }, { en: 'You|speak|English|very well.', roles: 'S V O M', ko: '당신은 영어를 아주 잘해요.' }] },
      { title: '현재형 = 평소에 늘 하는 일', html: '<p>like, work 같은 현재형은 「지금 이 순간」보다 <b>평소에, 늘</b> 하는 일을 말해요. 그래서 every day(매일), on Sundays(일요일마다) 같은 말과 잘 어울려요.</p>',
        ex: [{ en: 'I|study|English|every day.', roles: 'S V O M', ko: '나는 매일 영어를 공부해요.' }, { en: 'We|eat|dinner|at seven.', roles: 'S V O M', ko: '우리는 7시에 저녁을 먹어요.' }] },
    ],
    summary: ['일반동사 = 좋아하다·일하다처럼 <b>하는</b> 동사.', '순서는 <b>주어 → 동사 → 무엇을 → 언제·어디서</b>.', '일반동사가 있으면 be동사(am)는 쓰지 않아요: I like (I am like ✗).'] },

  { id: 'E11', ch: 2, n: 11, title: '그녀는 ~해요 (she likes, he goes)', minutes: 7,
    terms: { '3인칭 단수': '나(I)·너(you)가 아닌 「한 사람·한 개」. he, she, it, Mina, my mom 같은 주어예요.' },
    pages: [
      { title: 'He · She · It 이면 동사에 -s', html: '<p>주어가 <b>한 사람·한 개</b>(he, she, it, Mina, my dad …)이면 현재형 동사 끝에 <b>-s</b>를 붙여요.</p><p>I·you·we·they 는 그대로예요. 한국어엔 없는 규칙이라 가장 자주 빠뜨려요.</p>',
        ex: [{ en: 'She|likes|cats.', roles: 'S V O', ko: '그녀는 고양이를 좋아해요.' }, { en: 'Mina|works|at a hospital.', roles: 'S V M', ko: '미나는 병원에서 일해요.' }, { en: 'My dad|drinks|coffee|every morning.', roles: 'S V O M', ko: '우리 아빠는 매일 아침 커피를 마셔요.' }] },
      { title: '-es 가 붙거나 모양이 바뀌는 동사', html: '<p>몇몇 동사는 -s 대신 다른 모양이 돼요.</p><table><tr><td>go → <b>goes</b></td><td>do → <b>does</b></td></tr><tr><td>watch → <b>watches</b></td><td>wash → <b>washes</b></td></tr><tr><td>study → <b>studies</b></td><td>have → <b>has</b></td></tr></table><p>-ch·-sh·-o 로 끝나면 <b>-es</b>, 자음+y 는 <b>-ies</b>, have 는 <b>has</b>.</p>',
        ex: [{ en: 'He|goes|to school|by bus.', roles: 'S V M M', ko: '그는 버스로 학교에 가요.' }, { en: 'Jisoo|studies|English|at night.', roles: 'S V O M', ko: '지수는 밤에 영어를 공부해요.' }, { en: 'Our house|has|a big garden.', roles: 'S V O', ko: '우리 집에는 큰 정원이 있어요.' }] },
      { title: '나란히 놓고 비교해요', html: '<table><tr><td>I <b>have</b> a dog.</td><td>She <b>has</b> a dog.</td></tr><tr><td>We <b>go</b> to work.</td><td>He <b>goes</b> to work.</td></tr><tr><td>They <b>watch</b> TV.</td><td>Mina <b>watches</b> TV.</td></tr></table>',
        ex: [{ en: 'I|have|a dog,|and|my sister|has|a cat.', roles: 'S V O J S V O', ko: '나는 개가 있고, 언니는 고양이가 있어요.' }, { en: 'He|watches|TV|after dinner.', roles: 'S V O M', ko: '그는 저녁을 먹고 TV를 봐요.' }],
        tip: '-s 하나 빠져도 뜻은 통하지만, 원어민 귀에는 바로 걸려요. 말할 때 주어가 한 사람이면 동사 끝을 「스」로 끝내는 연습을 해 보세요.' },
    ],
    summary: ['주어가 <b>한 사람·한 개</b>(he/she/it/이름)면 동사 + <b>-s</b>.', 'goes · does · watches · studies · <b>has</b> 는 모양을 따로 기억해요.', 'I · you · we · they 는 동사 그대로.'] },

  { id: 'E12', ch: 2, n: 12, title: '안 ~해요 (don\'t / doesn\'t)', minutes: 7,
    terms: { '부정문': '「안 ~해요, ~하지 않아요」라고 말하는 문장이에요.', '원형': '-s·-ed 가 붙지 않은 동사의 원래 모양 (like, go, have).' },
    pages: [
      { title: '동사 앞에 don\'t', html: '<p>일반동사를 부정할 때는 동사 앞에 <b>don\'t</b>(do not)를 넣어요. I·you·we·they 에 써요.</p><p>be동사처럼 not 만 붙이면 안 돼요: I not like ✗ → I <b>don\'t</b> like ✓</p>',
        ex: [{ en: "I|don't eat|meat.", roles: 'S V O', ko: '나는 고기를 안 먹어요.' }, { en: "We|don't have|a car.", roles: 'S V O', ko: '우리는 차가 없어요.' }, { en: "They|don't live|here.", roles: 'S V M', ko: '그들은 여기 안 살아요.' }] },
      { title: 'He · She · It 은 doesn\'t — 동사는 원형으로', html: '<p>주어가 한 사람·한 개면 <b>doesn\'t</b>(does not)를 써요. 이때 <b>-s 는 doesn\'t 가 가져가요</b>. 그래서 뒤의 동사는 원래 모양(원형)이에요.</p><table><tr><td>She likes</td><td>→ She doesn\'t <b>like</b></td></tr><tr><td>He has</td><td>→ He doesn\'t <b>have</b></td></tr><tr><td>Mina goes</td><td>→ Mina doesn\'t <b>go</b></td></tr></table>',
        ex: [{ en: "She|doesn't like|spicy food.", roles: 'S V O', ko: '그녀는 매운 음식을 안 좋아해요.' }, { en: "He|doesn't drink|coffee.", roles: 'S V O', ko: '그는 커피를 안 마셔요.' }, { en: "Mina|doesn't work|on Mondays.", roles: 'S V M', ko: '미나는 월요일에는 일하지 않아요.' }],
        tip: 'doesn\'t likes, doesn\'t has 처럼 -s 를 두 번 붙이는 실수가 정말 많아요. -s 는 한 문장에 한 번만!' },
      { title: 'be동사 부정과 헷갈리지 않기', html: '<p>be동사(am/is/are) 문장은 <b>not</b>, 일반동사 문장은 <b>don\'t/doesn\'t</b>.</p><table><tr><td>I am <b>not</b> hungry.</td><td>be동사</td></tr><tr><td>I <b>don\'t</b> want lunch.</td><td>일반동사</td></tr></table>',
        ex: [{ en: 'I|am not|hungry.', roles: 'S V C', ko: '나는 배고프지 않아요.' }, { en: "I|don't want|lunch.", roles: 'S V O', ko: '나는 점심 안 먹을래요.' }] },
    ],
    summary: ['I · you · we · they + <b>don\'t</b> + 동사.', 'he · she · it · 이름 + <b>doesn\'t</b> + <b>원형</b> (doesn\'t likes ✗).', 'be동사 문장은 not, 일반동사 문장은 don\'t/doesn\'t.'] },

  { id: 'E13', ch: 2, n: 13, title: '~해요? (Do you…? / Does she…?)', minutes: 7,
    terms: { '의문문': '묻는 문장. 끝에 물음표(?)를 붙이고 끝을 올려 말해요.', '짧은 대답': 'Yes, I do. 처럼 질문의 동사를 받아서 짧게 하는 대답이에요.' },
    pages: [
      { title: 'Do 를 맨 앞에', html: '<p>일반동사로 물을 때는 문장 맨 앞에 <b>Do</b>를 놓아요. <b>Do + 주어 + 동사 …?</b></p><p>한국어처럼 끝만 올려서 You like coffee? 라고 해도 통하긴 하지만, 바른 모양은 Do 로 시작해요.</p>',
        ex: [{ en: 'Do|you|like|coffee?', roles: 'Q S V O', ko: '커피 좋아해요?' }, { en: 'Do|they|live|near here?', roles: 'Q S V M', ko: '그들은 이 근처에 살아요?' }, { en: 'Do|you|have|a pen?', roles: 'Q S V O', ko: '펜 있어요?' }] },
      { title: 'He · She · It 은 Does — 동사는 원형', html: '<p>주어가 한 사람·한 개면 <b>Does</b>로 시작해요. 부정의 doesn\'t 처럼, -s 는 Does 가 가져가서 동사는 <b>원형</b>이에요.</p><table><tr><td>She likes cats.</td><td>→ <b>Does</b> she <b>like</b> cats?</td></tr><tr><td>Minsu works on weekends.</td><td>→ <b>Does</b> Minsu <b>work</b> on weekends?</td></tr></table>',
        ex: [{ en: 'Does|she|like|cats?', roles: 'Q S V O', ko: '그녀는 고양이를 좋아해요?' }, { en: 'Does|Minsu|work|on weekends?', roles: 'Q S V M', ko: '민수는 주말에 일해요?' }] },
      { title: '짧은 대답: Yes, I do. / No, I don\'t.', html: '<p>대답은 질문의 Do/Does 를 그대로 받아요.</p><table><tr><td>Do you …?</td><td>Yes, I <b>do</b>. / No, I <b>don\'t</b>.</td></tr><tr><td>Does she …?</td><td>Yes, she <b>does</b>. / No, she <b>doesn\'t</b>.</td></tr></table><p>Yes, I like. 처럼 동사를 반복하지 않아요.</p>',
        ex: [{ en: 'Do you have a pen? — Yes, I do.', ko: '펜 있어요? — 네, 있어요.' }, { en: "Does he eat meat? — No, he doesn't.", ko: '그는 고기 먹어요? — 아니요, 안 먹어요.' }],
        tip: 'Yes, I do. 다음에 한 문장을 더 붙이면 대화가 훨씬 자연스러워요: Yes, I do. I drink it every day.' },
    ],
    summary: ['I · you · we · they → <b>Do</b> + 주어 + 동사 …?', 'he · she · it · 이름 → <b>Does</b> + 주어 + <b>원형</b> …?', '대답은 Yes, I do. / No, she doesn\'t. 처럼 do·does 로 받아요.'] },

  { id: 'E14', ch: 2, n: 14, title: '매일 쓰는 동사 have · want · need · go · get', minutes: 7,
    terms: { 'to + 동사': 'want to go 처럼 want·need 뒤에 「~하는 것」을 붙일 때 쓰는 모양이에요.' },
    pages: [
      { title: 'have — 가지고 있다, 먹다', html: '<p><b>have</b>는 「가지고 있다」가 기본이지만 가족·병·식사에도 써요. 한 사람 주어면 <b>has</b>.</p>',
        ex: [{ en: 'I|have|two sisters.', roles: 'S V O', ko: '나는 자매가 둘 있어요.' }, { en: 'We|have|lunch|at noon.', roles: 'S V O M', ko: '우리는 정오에 점심을 먹어요.' }, { en: 'She|has|a cold.', roles: 'S V O', ko: '그녀는 감기에 걸렸어요.' }] },
      { title: 'want · need — 원해요, 필요해요', html: '<p><b>want</b>(원하다)·<b>need</b>(필요하다) 뒤에는 물건이 오거나, <b>to + 동사</b>가 와요.</p><table><tr><td>I want <b>a new phone</b>.</td><td>새 폰을 원해요</td></tr><tr><td>I want <b>to go</b> home.</td><td>집에 가고 싶어요</td></tr></table>',
        ex: [{ en: 'I|want|a new phone.', roles: 'S V O', ko: '나는 새 휴대폰을 갖고 싶어요.' }, { en: 'I|need|some help.', roles: 'S V O', ko: '나는 도움이 좀 필요해요.' }, { en: 'I|want to go|home.', roles: 'S V M', ko: '나는 집에 가고 싶어요.' }] },
      { title: 'go · get — 가다, 받다·되다·도착하다', html: '<p><b>go</b>는 「가다」. home 앞에는 to 를 쓰지 않아요: go <b>home</b> (go to home ✗).</p><p><b>get</b>은 뜻이 많은 동사예요. get up(일어나다), get home(집에 오다), get an email(이메일을 받다).</p>',
        ex: [{ en: 'I|go|to work|by subway.', roles: 'S V M M', ko: '나는 지하철로 출근해요.' }, { en: 'I|get up|at seven.', roles: 'S V M', ko: '나는 7시에 일어나요.' }, { en: 'She|gets|home|at six.', roles: 'S V M M', ko: '그녀는 6시에 집에 와요.' }],
        tip: '이 다섯 동사만 잘 써도 일상 문장의 절반은 만들 수 있어요. 한 사람 주어면 has · wants · needs · goes · gets!' },
    ],
    summary: ['have = 가지다·먹다 (한 사람 주어면 <b>has</b>).', 'want / need + 물건, 또는 + <b>to 동사</b>.', 'go home (to 없이), get up · get home.'] },

  { id: 'B2', ch: 2, boss: true, title: '주말에 뭐 해?', minutes: 7,
    pages: [
      { title: '상황: 금요일 오후, 동료 지수와 커피 한 잔', html: '<p>회사 동료 <b>지수(Jisoo)</b>와 카페에 앉았어요. 지수가 「주말에 뭐 해요?」라고 물어봐요.</p><p>내 취향을 말하고, 지수에게도 묻고, 서로의 가족 이야기도 해 보세요. 챕터 2에서 배운 <b>현재형·-s·don\'t/doesn\'t·Do/Does</b>를 모두 써요.</p>',
        ex: [{ en: 'What|do you do|on weekends?', roles: 'Q V M', ko: '주말에 뭐 해요?' }, { en: 'I|watch|movies|at home.', roles: 'S V O M', ko: '나는 집에서 영화를 봐요.' }, { en: 'Do|you|like|hiking?', roles: 'Q S V O', ko: '등산 좋아해요?' }, { en: "My brother|doesn't like|sports.", roles: 'S V O', ko: '우리 형은 운동을 안 좋아해요.' }] },
    ],
    summary: ['What do you do on weekends? 로 취향을 물어요.', 'Do you like …? / Does your sister …? 로 묻고 Yes, I do. / No, she doesn\'t. 로 답해요.', '한 사람 이야기는 동사에 -s: My brother goes swimming.'] },
);
PROBLEMS.push(
  // ── E10 일반동사 현재
  { id: 'E10P1', lesson: 'E10', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ coffee.', opts: ['like', 'am like', 'am'], ans: 0, tags: ['일반동사'], hints: ['「좋아해요」는 하는 동사예요', '일반동사가 있으면 am 은 필요 없어요', 'I like coffee.'], why: '「좋아하다」는 일반동사 like 하나면 돼요. am 을 같이 쓰지 않아요.' },
  { id: 'E10P2', lesson: 'E10', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['I like music.', '나는 음악을 좋아해요.'], ['I work at home.', '나는 집에서 일해요.'], ['I live in Busan.', '나는 부산에 살아요.'], ['I speak English.', '나는 영어를 해요.']], tags: ['일반동사'], hints: ['동사를 먼저 보세요', 'like 좋아하다 · work 일하다 · live 살다 · speak 말하다', 'like-음악, work-집에서 일, live-부산, speak-영어'] },
  { id: 'E10P3', lesson: 'E10', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '우리는 서울에 살아요.', answer: ['We live in Seoul.'], cards: ['We', 'live', 'in Seoul.'], roles: 'S V M', tags: ['문장 뼈대'], hints: ['파랑(주어)은 We', '빨강(동사)은 live', 'We live in Seoul.'] },
  { id: 'E10P4', lesson: 'E10', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 매일 아침 물을 마셔요.', answer: ['I drink water every morning.', 'Every morning I drink water.'], cards: ['I', 'drink', 'water', 'every', 'morning.'], distractors: ['am'], tags: ['어순'], hints: ['주어 → 동사 → 무엇을 → 언제', '동사는 drink 하나면 돼요', 'I drink water every morning.'] },
  { id: 'E10P5', lesson: 'E10', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 피자를 좋아해요.', wrong: 'I am like pizza.', answer: ['I like pizza.'], tags: ['일반동사', '오개념'], hints: ['동사가 두 개 있어요', '일반동사 like 가 있으면 am 은 빼요', 'I like pizza.'], why: '「~해요」를 am 으로 옮기면 안 돼요. 일반동사 like 하나로 충분해요.' },
  { id: 'E10P6', lesson: 'E10', type: 'fill', prompt: '빈칸에 맞는 말을 고르거나 쓰세요.', text: 'They ___ soccer on Sundays.', blanks: [{ a: ['play'], opt: ['play', 'are play', 'are'] }], tags: ['일반동사'], hints: ['「축구를 해요」의 동사', '하다(경기) = play, be동사는 필요 없어요', 'They play soccer on Sundays.'], why: '일반동사 play 만 쓰면 돼요. are play 처럼 be동사를 겹쳐 쓰지 않아요.' },
  { id: 'E10P7', lesson: 'E10', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 매일 영어를 공부해요.', answer: ['I study English every day.', 'Every day I study English.'], tags: ['일반동사', '어순'], hints: ['주어 → 동사 → 무엇을 → 언제', '공부하다 = study, 매일 = every day', 'I study English every day.'] },
  { id: 'E10P8', lesson: 'E10', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 은행에서 일해요.', answer: ['I work at a bank.', 'I work in a bank.'], tags: ['일반동사'], hints: ['일하다 = work', '어디서 = at a bank', 'I work at a bank.'] },
  { id: 'E10P9', lesson: 'E10', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I drink coffee every morning.', ko: '나는 매일 아침 커피를 마셔요.', roles: 'S V O M', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'every morning 을 한 덩어리로', 'I drink coffee every morning.'] },

  // ── E11 3인칭 단수 -s
  { id: 'E11P1', lesson: 'E11', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'She ___ cats.', opts: ['like', 'likes', 'is like'], ans: 1, tags: ['3인칭 -s'], hints: ['주어가 she 예요', '한 사람 주어면 동사에 -s', 'She likes cats.'], why: 'She 같은 한 사람 주어 뒤 현재형 동사에는 -s 가 붙어요.' },
  { id: 'E11P2', lesson: 'E11', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'He ___ to school by bus.', opts: ['go', 'goes', 'gos'], ans: 1, tags: ['3인칭 -s'], hints: ['주어가 he 예요', 'go 는 -es 가 붙어요', 'He goes to school by bus.'], why: 'go 는 -o 로 끝나서 -es 를 붙여 goes 가 돼요.' },
  { id: 'E11P3', lesson: 'E11', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['He has a car.', '그는 차가 있어요.'], ['She studies at night.', '그녀는 밤에 공부해요.'], ['Mina watches TV.', '미나는 TV를 봐요.'], ['My house has a garden.', '우리 집에는 정원이 있어요.']], tags: ['3인칭 -s'], hints: ['has 는 have 의 -s 모양', 'studies = 공부해요, watches = 봐요', 'has 차 · studies 밤 · watches TV · has 정원'] },
  { id: 'E11P4', lesson: 'E11', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '미나는 병원에서 일해요.', answer: ['Mina works at a hospital.', 'Mina works in a hospital.'], cards: ['Mina', 'works', 'at a hospital.'], roles: 'S V M', tags: ['3인칭 -s'], hints: ['파랑(주어)은 Mina', '빨강(동사)은 -s 가 붙은 works', 'Mina works at a hospital.'] },
  { id: 'E11P5', lesson: 'E11', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '그는 버스로 학교에 가요.', answer: ['He goes to school by bus.'], cards: ['He', 'goes', 'to', 'school', 'by', 'bus.'], distractors: ['go'], tags: ['3인칭 -s', '어순'], hints: ['주어가 he 니까 동사 모양을 보세요', 'go 가 아니라 goes', 'He goes to school by bus.'] },
  { id: 'E11P6', lesson: 'E11', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그는 큰 개가 있어요.', wrong: 'He have a big dog.', answer: ['He has a big dog.'], tags: ['3인칭 -s', '오개념'], hints: ['주어가 he 예요', 'have 의 -s 모양은 haves 가 아니에요', 'He has a big dog.'], why: '한 사람 주어면 have 는 has 로 바뀌어요.' },
  { id: 'E11P7', lesson: 'E11', type: 'fill', prompt: '빈칸에 맞는 말을 고르거나 쓰세요.', text: 'My sister ___ the dishes after dinner.', blanks: [{ a: ['washes'], opt: ['wash', 'washs', 'washes'] }], tags: ['3인칭 -s'], hints: ['주어 my sister 는 한 사람', '-sh 로 끝나면 -es', 'My sister washes the dishes after dinner.'], why: 'wash 처럼 -sh 로 끝나는 동사는 -es 를 붙여요: washes.' },
  { id: 'E11P8', lesson: 'E11', type: 'type', prompt: '영어로 써 보세요.', ko: '지수는 밤에 영어를 공부해요.', answer: ['Jisoo studies English at night.', 'At night Jisoo studies English.'], tags: ['3인칭 -s'], hints: ['study 의 -s 모양을 생각해요', '자음+y → -ies: studies', 'Jisoo studies English at night.'] },
  { id: 'E11P9', lesson: 'E11', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'My dad drinks coffee every morning.', ko: '우리 아빠는 매일 아침 커피를 마셔요.', roles: 'S V O M', tags: ['말하기'], hints: ['drinks 끝의 「스」를 살려요', '🐢 로 천천히 들어 보세요', 'My dad drinks coffee every morning.'] },

  // ── E12 부정 don't / doesn't
  { id: 'E12P1', lesson: 'E12', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ eat meat.', opts: ["don't", "doesn't", 'am not'], ans: 0, tags: ['부정'], hints: ['주어가 I 예요', 'eat 은 일반동사', "I don't eat meat."], why: "I 와 일반동사의 부정은 don't 예요. am not 은 be동사 문장에서 써요." },
  { id: 'E12P2', lesson: 'E12', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'She ___ like spicy food.', opts: ["don't", "doesn't", "isn't"], ans: 1, tags: ['부정', '3인칭 -s'], hints: ['주어가 she 예요', "한 사람 주어면 doesn't", "She doesn't like spicy food."], why: "He/She/It 의 일반동사 부정은 doesn't 예요." },
  { id: 'E12P3', lesson: 'E12', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "He doesn't drink coffee.", opts: ['그는 커피를 안 마셔요.', '그는 커피를 마셔요.', '나는 커피를 안 마셔요.'], ans: 0, tags: ['듣기', '부정'], hints: ['주어가 누구인지 들어 보세요', "doesn't 가 들리나요?", '그는 커피를 안 마셔요.'] },
  { id: 'E12P4', lesson: 'E12', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '우리는 차가 없어요.', answer: ["We don't have a car."], cards: ['We', "don't have", 'a car.'], roles: 'S V O', tags: ['부정'], hints: ['파랑(주어)은 We', "빨강(동사)은 don't have", "We don't have a car."] },
  { id: 'E12P5', lesson: 'E12', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '미나는 월요일에는 일하지 않아요.', answer: ["Mina doesn't work on Mondays."], cards: ['Mina', "doesn't", 'work', 'on', 'Mondays.'], distractors: ['works'], tags: ['부정', '3인칭 -s'], hints: ["doesn't 다음 동사 모양은?", "doesn't 뒤에는 원형 work", "Mina doesn't work on Mondays."] },
  { id: 'E12P6', lesson: 'E12', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그녀는 차가 없어요.', wrong: "She doesn't has a car.", answer: ["She doesn't have a car."], tags: ['부정', '오개념'], hints: ["doesn't 뒤의 동사를 보세요", "-s 는 doesn't 가 이미 가져갔어요", "She doesn't have a car."], why: "doesn't 뒤에는 원형이 와요: doesn't have (doesn't has ✗)." },
  { id: 'E12P7', lesson: 'E12', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '그는 아침을 안 먹어요.', wrong: "He don't eat breakfast.", answer: ["He doesn't eat breakfast."], tags: ['부정', '오개념'], hints: ['주어가 he 예요', "한 사람 주어의 부정은 doesn't", "He doesn't eat breakfast."], why: "He/She/It 의 부정은 don't 가 아니라 doesn't 예요." },
  { id: 'E12P8', lesson: 'E12', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 커피를 안 마셔요.', answer: ["I don't drink coffee."], tags: ['부정'], hints: ["I + don't + 동사", '마시다 = drink', "I don't drink coffee."] },
  { id: 'E12P9', lesson: 'E12', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "She doesn't like spicy food.", ko: '그녀는 매운 음식을 안 좋아해요.', roles: 'S V O', tags: ['말하기'], hints: ["doesn't 는 「더즌트」, t 는 거의 안 들려요", '🐢 로 천천히 들어 보세요', "She doesn't like spicy food."] },

  // ── E13 질문 Do/Does + 짧은 대답
  { id: 'E13P1', lesson: 'E13', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: '___ you like coffee?', opts: ['Do', 'Does', 'Are'], ans: 0, tags: ['질문'], hints: ['like 는 일반동사', '주어가 you 예요', 'Do you like coffee?'], why: '일반동사 질문은 Do 로 시작해요. you 에는 Do.' },
  { id: 'E13P2', lesson: 'E13', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: '___ Mina work on weekends?', opts: ['Do', 'Does', 'Is'], ans: 1, tags: ['질문', '3인칭 -s'], hints: ['주어 Mina 는 한 사람', '한 사람 주어 질문은 Does', 'Does Mina work on weekends?'], why: '한 사람 주어(he/she/이름)의 일반동사 질문은 Does 로 시작해요.' },
  { id: 'E13P3', lesson: 'E13', type: 'match', prompt: '영어와 뜻을 짝지으세요.', pairs: [['Do you like it?', '그거 좋아해요?'], ['Yes, I do.', '네, 좋아해요.'], ["No, I don't.", '아니요, 안 좋아해요.'], ['Does he cook?', '그는 요리해요?']], tags: ['질문', '짧은 대답'], hints: ['Do/Does 로 시작하면 질문', '대답은 do / don\'t 로 받아요', 'Do you…-좋아해요?, Yes-네, No-아니요, Does he-그는?'] },
  { id: 'E13P4', lesson: 'E13', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그들은 이 근처에 살아요?', answer: ['Do they live near here?'], cards: ['Do', 'they', 'live', 'near here?'], roles: 'Q S V M', tags: ['질문'], hints: ['맨 앞(질문어)은 Do', 'Do → 주어 → 동사 → 어디', 'Do they live near here?'] },
  { id: 'E13P5', lesson: 'E13', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '너희 형은 고기 먹어?', answer: ['Does your brother eat meat?'], cards: ['Does', 'your', 'brother', 'eat', 'meat?'], distractors: ['eats', 'Do'], tags: ['질문', '3인칭 -s'], hints: ['your brother 는 한 사람', 'Does 로 시작하면 동사는 원형', 'Does your brother eat meat?'] },
  { id: 'E13P6', lesson: 'E13', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '지수는 피아노를 쳐요?', wrong: 'Do Jisoo play the piano?', answer: ['Does Jisoo play the piano?'], tags: ['질문', '오개념'], hints: ['주어 Jisoo 는 한 사람', 'Do 를 바꿔야 해요', 'Does Jisoo play the piano?'], why: '한 사람 주어 질문은 Do 가 아니라 Does 로 시작해요.' },
  { id: 'E13P7', lesson: 'E13', type: 'fill', prompt: '빈칸에 맞는 짧은 대답을 고르거나 쓰세요.', text: 'A: Do you speak Chinese? B: Yes, I ___.', blanks: [{ a: ['do'], opt: ['do', 'am', 'speak'] }], tags: ['짧은 대답'], hints: ['질문이 Do 로 시작했어요', 'Do 질문은 do 로 받아요', 'Yes, I do.'], why: 'Do you …? 질문에는 Yes, I do. / No, I don\'t. 로 짧게 대답해요.' },
  { id: 'E13P8', lesson: 'E13', type: 'type', prompt: '영어로 써 보세요.', ko: '너 개 키워? (개 있어?)', answer: ['Do you have a dog?', 'Do you have any dogs?', 'Do you have a pet dog?'], tags: ['질문'], hints: ['Do + you + 동사 …?', '가지고 있다 = have', 'Do you have a dog?'] },
  { id: 'E13P9', lesson: 'E13', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Do you live near here?', ko: '이 근처에 사세요?', tags: ['말하기'], hints: ['질문이니 끝을 올려요 ↗', '🐢 로 천천히 들어 보세요', 'Do you live near here?'] },

  // ── E14 have · want · need · go · get
  { id: 'E14P1', lesson: 'E14', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I ___ a new phone.', opts: ['want', 'wants', 'am want'], ans: 0, tags: ['자주 쓰는 동사'], hints: ['주어가 I 예요', 'I 뒤에는 -s 없이', 'I want a new phone.'], why: 'I 뒤 현재형은 동사 그대로예요. -s 는 한 사람 주어에만 붙어요.' },
  { id: 'E14P2', lesson: 'E14', type: 'match', prompt: '영어 문장과 뜻을 짝지으세요.', pairs: [['I have a cold.', '나는 감기에 걸렸어요.'], ['I need some help.', '나는 도움이 좀 필요해요.'], ['I want to go home.', '나는 집에 가고 싶어요.'], ['I get up at seven.', '나는 7시에 일어나요.'], ['She gets home at six.', '그녀는 6시에 집에 와요.']], tags: ['자주 쓰는 동사'], hints: ['have a cold = 감기', 'get up = 일어나다, get home = 집에 오다', 'cold-감기, need-도움, want to go-가고 싶어요, get up-일어나요, gets home-집에 와요'] },
  { id: 'E14P3', lesson: 'E14', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '우리는 정오에 점심을 먹어요.', answer: ['We have lunch at noon.', 'We eat lunch at noon.'], cards: ['We', 'have', 'lunch', 'at noon.'], roles: 'S V O M', tags: ['자주 쓰는 동사'], hints: ['식사를 「먹다」는 have 로도 말해요', 'We → have → lunch → at noon', 'We have lunch at noon.'] },
  { id: 'E14P4', lesson: 'E14', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '나는 퇴근 후에 집에 가고 싶어요.', answer: ['I want to go home after work.', 'After work I want to go home.'], cards: ['I', 'want', 'to', 'go', 'home', 'after', 'work.'], distractors: ['goes'], tags: ['자주 쓰는 동사', 'to + 동사'], hints: ['want 뒤에 to + 동사', 'to 뒤는 원형 go', 'I want to go home after work.'] },
  { id: 'E14P5', lesson: 'E14', type: 'fill', prompt: '빈칸에 맞는 말을 고르거나 쓰세요.', text: 'Mina ___ a new laptop.', blanks: [{ a: ['needs'], opt: ['need', 'needs', 'is need'] }], tags: ['자주 쓰는 동사', '3인칭 -s'], hints: ['주어 Mina 는 한 사람', 'need + -s', 'Mina needs a new laptop.'], why: '한 사람 주어 뒤에는 need 에 -s 를 붙여 needs.' },
  { id: 'E14P6', lesson: 'E14', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '나는 퇴근 후에 집에 가요.', wrong: 'I go to home after work.', answer: ['I go home after work.', 'After work I go home.'], tags: ['자주 쓰는 동사', '오개념'], hints: ['go 와 home 사이를 보세요', 'home 앞에는 to 를 쓰지 않아요', 'I go home after work.'], why: 'home 은 「집으로」라는 뜻까지 들어 있어서 go home 이라고 해요 (go to home ✗).' },
  { id: 'E14P7', lesson: 'E14', type: 'type', prompt: '영어로 써 보세요.', ko: '나는 물이 좀 필요해요.', answer: ['I need some water.', 'I need water.'], tags: ['자주 쓰는 동사'], hints: ['필요하다 = need', '물 좀 = some water', 'I need some water.'] },
  { id: 'E14P8', lesson: 'E14', type: 'type', prompt: '영어로 써 보세요.', ko: '그는 자매가 둘 있어요.', answer: ['He has two sisters.'], tags: ['자주 쓰는 동사', '3인칭 -s'], hints: ['주어가 he 니까 have 의 모양은?', 'have → has', 'He has two sisters.'] },
  { id: 'E14P9', lesson: 'E14', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'I want to go home.', ko: '나는 집에 가고 싶어요.', roles: 'S V M', tags: ['말하기'], hints: ['want to 는 빠르게 「원투」처럼 들려요', '🐢 로 천천히 들어 보세요', 'I want to go home.'] },

  // ── B2 보스: 주말에 뭐 해?
  { id: 'B2P1', lesson: 'B2', boss: true, type: 'listen', prompt: '지수가 물어봐요. 무슨 뜻일까요?', say: 'What do you do on weekends?', opts: ['주말에 뭐 해요?', '주말에 어디 가요?', '주말 좋아해요?'], ans: 0, tags: ['듣기', '질문'], hints: ['What 은 「무엇」', 'do you do = 당신은 (무엇을) 해요', '주말에 뭐 해요?'] },
  { id: 'B2P2', lesson: 'B2', boss: true, type: 'order', prompt: '대답해요: 「나는 집에서 영화를 봐요.」 카드를 순서대로 놓으세요.', ko: '나는 집에서 영화를 봐요.', answer: ['I watch movies at home.'], cards: ['I', 'watch', 'movies', 'at', 'home.'], distractors: ['watches'], tags: ['일반동사'], hints: ['주어 → 동사 → 무엇을 → 어디서', 'I 뒤에는 watch 그대로', 'I watch movies at home.'] },
  { id: 'B2P3', lesson: 'B2', boss: true, type: 'listen', prompt: '지수가 자기 이야기를 해요. 맞는 내용을 고르세요.', say: 'I go hiking every Sunday. Do you like hiking?', opts: ['지수는 일요일마다 등산을 가요.', '지수는 등산을 안 좋아해요.', '지수는 토요일마다 수영을 해요.'], ans: 0, tags: ['듣기'], hints: ['every Sunday 가 들리나요?', 'go hiking = 등산하러 가다', '지수는 일요일마다 등산을 가요.'] },
  { id: 'B2P4', lesson: 'B2', boss: true, type: 'type', prompt: '등산은 별로예요. 영어로 대답해 보세요.', ko: '아니, 안 좋아해. 나는 등산을 안 좋아해.', answer: ["No, I don't. I don't like hiking.", "No, I don't like hiking.", "I don't like hiking.", "No, I don't. I don't really like hiking.", "No, I don't really like hiking."], tags: ['부정', '짧은 대답'], hints: ["짧은 대답 No, I don't. 로 시작", "I + don't + like + hiking", "No, I don't. I don't like hiking."] },
  { id: 'B2P5', lesson: 'B2', boss: true, type: 'fix', prompt: '우리 형 이야기를 하다가 실수했어요. 고쳐 보세요.', ko: '우리 형은 토요일마다 수영하러 가요.', wrong: 'My brother go swimming on Saturdays.', answer: ['My brother goes swimming on Saturdays.', 'On Saturdays my brother goes swimming.'], tags: ['3인칭 -s', '오개념'], hints: ['주어 my brother 는 한 사람', 'go 에 -es', 'My brother goes swimming on Saturdays.'], why: '한 사람 주어 뒤 현재형 동사에는 -s/-es: goes.' },
  { id: 'B2P6', lesson: 'B2', boss: true, type: 'order', prompt: '지수에게 언니 이야기를 물어봐요. 카드를 순서대로 놓으세요.', ko: '너희 언니도 수영 좋아해?', answer: ['Does your sister like swimming too?', 'Does your sister also like swimming?'], cards: ['Does', 'your', 'sister', 'like', 'swimming', 'too?'], distractors: ['likes', 'Do'], tags: ['질문', '3인칭 -s'], hints: ['your sister 는 한 사람 → Does', 'Does 뒤 동사는 원형 like', 'Does your sister like swimming too?'] },
  { id: 'B2P7', lesson: 'B2', boss: true, type: 'fill', prompt: '지수의 대답을 완성하세요.', text: 'No, she ___. She ___ to the gym.', blanks: [{ a: ["doesn't", 'does not'], opt: ["don't", "doesn't"] }, { a: ['goes'], opt: ['go', 'goes'] }], tags: ['짧은 대답', '3인칭 -s'], hints: ['주어가 she 예요', "부정 짧은 대답은 doesn't, 동사는 -es", "No, she doesn't. She goes to the gym."], why: "she 의 짧은 대답은 doesn't, 현재형 동사는 goes 예요." },
  { id: 'B2P8', lesson: 'B2', boss: true, type: 'speak', prompt: '마지막으로 지수에게 제안해 보세요. 🔊 듣고 따라 말해요.', say: 'Do you want to see a movie on Saturday?', ko: '토요일에 영화 볼래요?', tags: ['말하기'], hints: ['Do you want to …? = ~할래요?', '끝을 올려요 ↗', 'Do you want to see a movie on Saturday?'] },
);
