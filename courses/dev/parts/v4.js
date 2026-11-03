// courses/dev/parts/v4.js — 챕터 4 「질문하고 배우기」 (레슨 D15~D18 + 보스 DB4). 스키마는 ../../basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 4, title: '질문하고 배우기', icon: '🔍', desc: '포럼에 좋은 질문 쓰기 · 면접에서 프로젝트 설명 · 코드를 말로 설명 · AI 도구에 분명하게 요청하기' },
);
LESSONS.push(
  { id: 'D15', ch: 4, n: 1, title: "좋은 질문 쓰기 (I'm trying to… · I expected… but…)", minutes: 8,
    terms: { '포럼': '개발자들이 질문하고 답하는 온라인 게시판.', '재현 가능한 예시': '다른 사람이 그대로 실행해서 같은 문제를 볼 수 있는 짧은 코드. 영어로 minimal reproducible example.' },
    pages: [
      { title: "목표부터: I'm trying to …", html: `<p>좋은 질문의 첫 줄은 <b>무엇을 하려는지</b>예요: <b>I'm trying to + 동사 원형</b>(~하려고 하는데요).</p><p>제목은 구체적으로 써요. <b>Help!</b> 보다 <b>How can I remove duplicates from a list?</b> 가 답을 훨씬 빨리 받아요.</p>`,
        ex: [
          { en: "I'm trying to read a CSV file in Python.", ko: '파이썬에서 CSV 파일을 읽으려고 하는데요.' },
          { en: "I'm trying to sort a list of dictionaries by age.", ko: '딕셔너리 리스트를 나이순으로 정렬하려고 해요.' },
          { en: 'How can I remove duplicates from a list?', ko: '리스트에서 중복을 어떻게 없애요?' },
        ],
        tip: '제목: Help! ✗ → <b>TypeError when adding a number to a string</b> ✓' },
      { title: '기대 vs 실제: I expected … but …', html: `<p>무엇이 이상한지는 <b>I expected A, but I got B.</b>(A 가 나올 줄 알았는데 B 가 나왔어요)로 써요.</p><p>이슈의 Expected / Actual 과 같은 생각이에요. <b>Instead, it …</b>(대신 ~해요)도 자주 써요.</p>`,
        ex: [
          { en: 'I expected 5, but I got 6.', ko: '5가 나올 줄 알았는데 6이 나왔어요.' },
          { en: 'I expected the list to be sorted, but nothing changed.', ko: '리스트가 정렬될 줄 알았는데 아무것도 안 바뀌었어요.' },
          { en: 'Instead,|it|returns|None.', roles: 'M S V O', ko: '대신 None 을 반환해요.' },
        ] },
      { title: "What I've tried = 해 본 것", html: `<p>답하는 사람이 같은 말을 반복하지 않게 <b>이미 해 본 것</b>을 적어요: <b>I've tried + -ing</b>(~해 봤어요), <b>I also checked …</b>(~도 확인했어요).</p><p>마지막에 환경을 적어요: <b>I'm using Python 3.12 on Windows.</b></p>`,
        ex: [
          { en: "I've tried restarting the server, but it didn't help.", ko: '서버를 재시작해 봤는데 소용없었어요.' },
          { en: 'I|also checked|the file path.', roles: 'S V O', ko: '파일 경로도 확인했어요.' },
          { en: "I'm using Python 3.12 on Windows.", ko: '윈도우에서 파이썬 3.12 를 쓰고 있어요.' },
        ] },
    ],
    summary: ["목표: <b>I'm trying to + 동사 원형</b>. 제목은 구체적으로.", '문제: <b>I expected A, but I got B.</b> / Instead, it …', "해 본 것: <b>I've tried -ing</b> · I also checked … + 환경(I'm using …)."] },

  { id: 'D16', ch: 4, n: 2, title: '기술 면접 자기소개 · 프로젝트 설명', minutes: 8,
    terms: { '기술 면접': '개발자를 뽑을 때 경험과 기술을 묻는 면접.', 'backend(백엔드)': '사용자 눈에 안 보이는 서버·데이터베이스 쪽 개발.' },
    pages: [
      { title: '자기소개: 하는 일 + 경력 + 요즘', html: `<p>짧게 세 줄이면 돼요: <b>I'm a … developer with … years of experience.</b>(~년 경력의 … 개발자예요) → <b>I mainly work with …</b>(주로 ~로 일해요) → <b>Recently, I have been learning …</b>(요즘은 ~를 배우고 있어요).</p>`,
        ex: [
          { en: "I'm a backend developer with three years of experience.", ko: '3년 경력의 백엔드 개발자예요.' },
          { en: 'I|mainly work|with Python and SQL.', roles: 'S V M', ko: '주로 파이썬과 SQL 로 일해요.' },
          { en: 'Recently,|I|have been learning|React.', roles: 'M S V O', ko: '요즘은 리액트를 배우고 있어요.' },
        ] },
      { title: '프로젝트: 무엇 → 내 역할 → 결과', html: `<p>프로젝트는 세 단계로: <b>I built …</b>(~를 만들었어요) → <b>I was responsible for …</b>(~를 맡았어요) → <b>As a result, …</b>(그 결과 ~).</p><p>결과는 숫자가 있으면 훨씬 강해요: twice as fast(두 배 빠르게), by half(절반으로).</p>`,
        ex: [
          { en: 'I|built|a web app that helps people track their spending.', roles: 'S V O', ko: '사람들이 지출을 기록하도록 돕는 웹 앱을 만들었어요.' },
          { en: 'I|was responsible for|the backend and the database.', roles: 'S V O', ko: '백엔드와 데이터베이스를 맡았어요.' },
          { en: 'As a result,|the page|loads|twice as fast.', roles: 'M S V M', ko: '그 결과 페이지가 두 배 빨리 떠요.' },
        ] },
      { title: '어려웠던 점 · 배운 점', html: `<p>면접관이 자주 묻는 것: 가장 어려웠던 점과 배운 점. <b>The biggest challenge was + -ing/명사</b>, <b>I learned how to …</b>(~하는 법을 배웠어요).</p><p>바로 답이 안 떠오르면 <b>That's a good question. Let me think.</b> 로 시간을 벌어요.</p>`,
        ex: [
          { en: 'The biggest challenge|was|handling a lot of traffic.', roles: 'S V C', ko: '가장 큰 어려움은 많은 트래픽을 처리하는 거였어요.' },
          { en: 'I|learned|how to write clean tests.', roles: 'S V O', ko: '깔끔한 테스트 쓰는 법을 배웠어요.' },
          { en: "That's a good question. Let me think.", ko: '좋은 질문이네요. 잠깐 생각해 볼게요.' },
        ] },
    ],
    summary: ["자기소개: <b>I'm a … developer with … years of experience.</b>", '프로젝트: <b>I built … → I was responsible for … → As a result, …</b>', '<b>The biggest challenge was …</b> · <b>I learned how to …</b>'] },

  { id: 'D17', ch: 4, n: 3, title: '코드를 말로 설명하기 (This function takes … and returns …)', minutes: 8,
    terms: { '인자(argument)': '함수에 넣어 주는 값.', '반환(return)': '함수가 일을 마치고 돌려주는 값.' },
    pages: [
      { title: 'takes … and returns …', html: `<p>함수 설명의 기본 문장: <b>This function takes A and returns B.</b> = 이 함수는 A 를 받아서 B 를 돌려줘요.</p><p>주어가 하나(This function, It)라서 동사에 <b>-s</b>: take<b>s</b>, return<b>s</b>, check<b>s</b>.</p>`,
        ex: [
          { en: 'This function|takes|a list of numbers|and|returns|the average.', roles: 'S V O J V O', ko: '이 함수는 숫자 리스트를 받아서 평균을 반환해요.' },
          { en: 'It|returns|True|if the user is logged in.', roles: 'S V O M', ko: '사용자가 로그인돼 있으면 True 를 반환해요.' },
        ] },
      { title: '순서대로: First · Then · If …', html: `<p>안에서 하는 일은 순서대로: <b>First, it …</b> → <b>Then, it …</b>. 자주 쓰는 동사: <b>checks</b>(확인하다), <b>loops through</b>(하나씩 돌다), <b>skips</b>(건너뛰다), <b>adds</b>(더하다).</p>`,
        ex: [
          { en: 'First,|it|checks|the input.', roles: 'M S V O', ko: '먼저 입력을 확인해요.' },
          { en: 'Then,|it|loops through|each item in the list.', roles: 'M S V O', ko: '그다음 리스트의 항목을 하나씩 돌아요.' },
          { en: 'If the value is negative,|it|skips|it.', roles: 'M S V O', ko: '값이 음수면 건너뛰어요.' },
        ],
        tip: '🐍 <a href="https://jihoon380462.github.io/python-academy/" target="_blank" rel="noopener">파이썬 아카데미</a>에서 쓴 함수를 하나 골라 이 모양으로 소리 내어 설명해 보세요.' },
      { title: '왜 그렇게 짰는지: so that · because · Otherwise', html: `<p>면접·리뷰에서는 <b>왜</b>가 중요해요. <b>so that …</b>(~하도록), <b>because …</b>(~라서), <b>Otherwise, …</b>(그렇지 않으면 ~).</p>`,
        ex: [
          { en: 'I|used|a dictionary|so that lookups are fast.', roles: 'S V O M', ko: '조회가 빠르도록 딕셔너리를 썼어요.' },
          { en: 'We|cache|the result|because the API is slow.', roles: 'S V O M', ko: 'API 가 느려서 결과를 캐시해 둬요.' },
          { en: 'Otherwise,|the loop|never ends.', roles: 'M S V', ko: '그렇지 않으면 반복이 끝나지 않아요.' },
        ] },
    ],
    summary: ['<b>This function takes A and returns B.</b> (동사 -s)', '순서: <b>First, it … → Then, it …</b> (checks · loops through · skips)', '이유: <b>so that … · because … · Otherwise, …</b>'] },

  { id: 'D18', ch: 4, n: 4, title: 'AI 도구에 요청 쓰기 (분명한 지시 · 조건)', minutes: 7,
    terms: { '프롬프트(prompt)': 'AI 에게 보내는 요청 글.', '제약 조건(constraint)': '「이건 꼭 지켜 주세요」 하는 조건. 버전, 라이브러리, 길이 같은 것.' },
    pages: [
      { title: '할 일: Write · Explain · Fix + 대상', html: `<p>AI 에게도 <b>명령문</b>이 가장 분명해요. 동사 원형으로 시작하고, 무엇을 할지 구체적으로: <b>Write</b>(써 주세요), <b>Explain</b>(설명해 주세요), <b>Fix</b>(고쳐 주세요).</p><p>Please 를 붙이면 부드러워지지만 없어도 실례가 아니에요.</p>`,
        ex: [
          { en: 'Write|a Python function that checks if a number is prime.', roles: 'V O', ko: '숫자가 소수인지 확인하는 파이썬 함수를 써 주세요.' },
          { en: 'Explain|this error|in simple terms.', roles: 'V O M', ko: '이 에러를 쉬운 말로 설명해 주세요.' },
          { en: 'Please fix|the bug|in this code.', roles: 'V O M', ko: '이 코드의 버그를 고쳐 주세요.' },
        ] },
      { title: "조건: Use only … · Don't … · Keep it under …", html: `<p>원하지 않는 답을 막으려면 <b>조건</b>을 걸어요: <b>Use only …</b>(~만 써 주세요), <b>Don't …</b>(~하지 마세요), <b>Keep … under …</b>(~이내로 해 주세요).</p>`,
        ex: [
          { en: 'Use only|the standard library.', roles: 'V O', ko: '표준 라이브러리만 써 주세요.' },
          { en: "Don't change|the function name.", roles: 'V O', ko: '함수 이름은 바꾸지 마세요.' },
          { en: 'Keep|the answer|under 20 lines.', roles: 'V O M', ko: '답은 20줄 이내로 해 주세요.' },
        ] },
      { title: "맥락과 형식: I'm using … · Show … as …", html: `<p>내 환경(<b>I'm using …</b>)과 원하는 모양(<b>Show … as a table</b>, <b>Add comments</b>)까지 쓰면 한 번에 쓸 만한 답이 와요.</p><p>좋은 요청 = <b>할 일 + 맥락 + 조건 + 형식</b>.</p>`,
        ex: [
          { en: "I'm using Python 3.12 and pandas.", ko: '파이썬 3.12 와 pandas 를 쓰고 있어요.' },
          { en: 'Add|comments|to each step.', roles: 'V O M', ko: '각 단계에 주석을 달아 주세요.' },
          { en: 'Show|the result|as a table.', roles: 'V O M', ko: '결과를 표로 보여 주세요.' },
        ] },
    ],
    summary: ['할 일은 <b>명령문</b>: Write · Explain · Fix + 대상.', "조건: <b>Use only … · Don't … · Keep … under …</b>", "맥락·형식: <b>I'm using … · Show … as … · Add comments</b>"] },

  { id: 'DB4', ch: 4, boss: true, title: '기술 면접에서 프로젝트 설명하기', minutes: 9,
    pages: [
      { title: '상황: 화상 기술 면접', html: `<p>Mina 는 해외 스타트업의 화상 기술 면접을 보고 있어요. 면접관 Tom 이 차례로 물어요.</p><p>① 자기소개 → ② 프로젝트 → ③ 코드 설명 → ④ 막혔던 경험 → ⑤ AI 도구 쓰는 법 → ⑥ 궁금한 점.</p>`,
        ex: [
          { en: 'I|built|a booking system|for a small clinic.', roles: 'S V O M', ko: '작은 병원을 위한 예약 시스템을 만들었어요.' },
          { en: 'This function|checks|whether the time slot is free.', roles: 'S V O', ko: '이 함수는 그 시간대가 비어 있는지 확인해요.' },
        ] },
      { title: '쓸 표현 미리보기', html: `<p>막혔던 경험은 질문 쓰기(D15)처럼 <b>기대 vs 실제 → 해 본 것</b> 순서로 말하면 깔끔해요.</p>`,
        ex: [
          { en: 'I|always review|the code that AI tools write.', roles: 'S V O', ko: 'AI 도구가 쓴 코드는 항상 직접 검토해요.' },
          { en: 'Could|you|tell|me|more about the team?', roles: 'Q S V O M', ko: '팀에 대해 좀 더 말씀해 주실 수 있어요?' },
        ] },
    ],
    summary: ['프로젝트: <b>I built … → I was responsible for … → As a result, …</b>', '코드: <b>This function takes … and returns …</b>', '막힌 경험: <b>I expected …, but … · I tried -ing</b> / 마지막 질문: <b>Could you tell me more about …?</b>'] },
);
PROBLEMS.push(
  // D15 좋은 질문
  { id: 'D15P1', lesson: 'D15', type: 'choice', prompt: '포럼 질문의 첫 줄로 가장 좋은 것을 고르세요.', opts: ["I'm trying to read a CSV file in Python.", 'Help me please!!!', 'My code is bad.'], ans: 0, sayOpts: true, tags: ['질문 쓰기'], hints: ['무엇을 하려는지가 보여야 해요', "I'm trying to + 동사 원형", "I'm trying to read a CSV file in Python."], why: "첫 줄은 무엇을 하려는지 구체적으로: I'm trying to …. 막연한 도움 요청은 답을 받기 어려워요." },
  { id: 'D15P2', lesson: 'D15', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'I expected 5, ___ I got 6.', opts: ['but', 'so', 'because'], ans: 0, tags: ['질문 쓰기'], hints: ['기대와 실제가 달라요', '반대되는 걸 잇는 말', 'I expected 5, but I got 6.'], why: '기대(5)와 실제(6)가 다르니 「~인데」 but 으로 이어요.' },
  { id: 'D15P3', lesson: 'D15', type: 'match', prompt: '질문 문장과 뜻을 짝지으세요.', pairs: [["I'm trying to sort a list.", '리스트를 정렬하려고 해요.'], ['I expected 5, but I got 6.', '5가 나올 줄 알았는데 6이 나왔어요.'], ["I've tried restarting the server.", '서버를 재시작해 봤어요.'], ['Instead, it returns None.', '대신 None 을 반환해요.']], tags: ['질문 쓰기'], hints: ["I'm trying to = ~하려고 해요", 'expected = 기대했다', "I've tried -ing = ~해 봤어요"] },
  { id: 'D15P4', lesson: 'D15', type: 'build', prompt: '「해 본 것」 칸을 만드세요.', ko: '파일 경로도 확인했어요.', answer: ['I also checked the file path.', 'I checked the file path too.', 'I checked the file path as well.'], cards: ['I', 'also checked', 'the file path.'], roles: 'S V O', tags: ['질문 쓰기'], hints: ['한 일은 과거형', '~도 = also (동사 앞)', 'I also checked the file path.'] },
  { id: 'D15P5', lesson: 'D15', type: 'order', prompt: '질문 첫 줄을 만드세요. 필요 없는 카드도 있어요.', ko: '파이썬에서 CSV 파일을 읽으려고 하는데요.', answer: ["I'm trying to read a CSV file in Python."], cards: ["I'm", 'trying', 'to read', 'a CSV file', 'in Python.'], distractors: ['reading'], tags: ['질문 쓰기'], hints: ["I'm trying to …", 'trying 뒤 to + 동사 원형', "I'm trying to read a CSV file in Python."] },
  { id: 'D15P6', lesson: 'D15', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '서버를 재시작해 봤는데 소용없었어요.', wrong: "I've tried restart the server, but it didn't help.", answer: ["I've tried restarting the server, but it didn't help.", "I tried restarting the server, but it didn't help.", "I've tried restarting the server, but it didn't work."], tags: ['질문 쓰기', '오개념'], hints: ['tried 뒤 동사 모양', '시험 삼아 해 봤다 = tried + -ing', "I've tried restarting the server, but it didn't help."], why: '「~해 봤다」는 try + -ing 예요 (restart → restarting).' },
  { id: 'D15P7', lesson: 'D15', type: 'type', prompt: '질문에 쓸 문장을 영어로 써 보세요.', ko: '5가 나올 줄 알았는데 6이 나왔어요.', answer: ['I expected 5, but I got 6.', 'I expected 5 but got 6.', 'I expected five, but I got six.', 'I expected 5, but it returned 6.', 'I expected 5, but the result was 6.', 'I expected the result to be 5, but I got 6.'], tags: ['질문 쓰기'], hints: ['I expected A, but …', '나왔다(얻었다) = got', 'I expected 5, but I got 6.'] },
  { id: 'D15P8', lesson: 'D15', type: 'type', prompt: '질문 제목을 영어로 써 보세요.', ko: '리스트에서 중복을 어떻게 없애요?', answer: ['How can I remove duplicates from a list?', 'How do I remove duplicates from a list?', 'How can I remove duplicates in a list?', 'How do I remove duplicates in a list?', 'How can I remove duplicate items from a list?', 'How do you remove duplicates from a list?'], tags: ['질문 쓰기'], hints: ['How can I + 동사 원형?', '중복 = duplicates, 없애다 = remove', 'How can I remove duplicates from a list?'] },
  { id: 'D15P9', lesson: 'D15', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "I'm trying to read a CSV file, but I get an error.", ko: 'CSV 파일을 읽으려는데 에러가 나요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'CSV 는 「씨에스브이」', "I'm trying to read a CSV file, but I get an error."] },

  // D16 면접 자기소개·프로젝트
  { id: 'D16P1', lesson: 'D16', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: "I'm a backend developer ___ three years of experience.", opts: ['with', 'for', 'in'], ans: 0, tags: ['면접'], hints: ['경력을 「가진」 개발자', '~을 가진 = with', "I'm a backend developer with three years of experience."], why: '「~년 경력을 가진」은 with … years of experience 예요.' },
  { id: 'D16P2', lesson: 'D16', type: 'listen', prompt: '면접관의 질문을 듣고 뜻을 고르세요.', say: 'Can you tell me about a project you worked on?', opts: ['작업했던 프로젝트에 대해 말해 줄래요?', '지금 어떤 프로젝트를 하고 싶어요?', '프로젝트를 언제 끝낼 수 있어요?'], ans: 0, tags: ['듣기', '면접'], hints: ['tell me about = ~에 대해 말해 주세요', 'you worked on = 당신이 작업했던', '작업했던 프로젝트에 대해 말해 줄래요?'] },
  { id: 'D16P3', lesson: 'D16', type: 'match', prompt: '면접 표현과 뜻을 짝지으세요.', pairs: [['I was responsible for the backend.', '백엔드를 맡았어요.'], ['As a result, the page loads faster.', '그 결과 페이지가 더 빨리 떠요.'], ['The biggest challenge was testing.', '가장 큰 어려움은 테스트였어요.'], ['Let me think.', '잠깐 생각해 볼게요.']], tags: ['면접'], hints: ['responsible for = ~를 맡은', 'As a result = 그 결과', 'challenge = 어려운 과제'] },
  { id: 'D16P4', lesson: 'D16', type: 'build', prompt: '색 슬롯에 맞게 내 역할을 말해 보세요.', ko: '백엔드와 데이터베이스를 맡았어요.', answer: ['I was responsible for the backend and the database.', 'I was responsible for the backend and database.', 'I was in charge of the backend and the database.', 'I handled the backend and the database.'], cards: ['I', 'was responsible for', 'the backend and the database.'], roles: 'S V O', tags: ['면접'], hints: ['맡았다 = was responsible for', '무엇을 = the backend and the database', 'I was responsible for the backend and the database.'] },
  { id: 'D16P5', lesson: 'D16', type: 'order', prompt: '프로젝트를 소개하세요. 필요 없는 카드도 있어요.', ko: '사람들이 지출을 기록하도록 돕는 웹 앱을 만들었어요.', answer: ['I built a web app that helps people track their spending.', 'I made a web app that helps people track their spending.'], cards: ['I', 'built', 'a web app', 'that', 'helps', 'people', 'track their spending.'], distractors: ['help'], tags: ['면접'], hints: ['I built + 무엇', 'a web app that helps … (앱 하나라 -s)', 'I built a web app that helps people track their spending.'] },
  { id: 'D16P6', lesson: 'D16', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '요즘은 리액트를 배우고 있어요.', wrong: 'Recently, I have been learn React.', answer: ['Recently, I have been learning React.', 'I have been learning React recently.', 'Lately, I have been learning React.', 'Recently, I have been studying React.'], tags: ['면접', '오개념'], hints: ['have been 뒤 동사 모양', 'have been + -ing', 'Recently, I have been learning React.'], why: '「~해 오고 있다」는 have been + -ing 예요 (learn → learning).' },
  { id: 'D16P7', lesson: 'D16', type: 'type', prompt: '자기소개를 영어로 써 보세요.', ko: '3년 경력의 백엔드 개발자예요.', answer: ["I'm a backend developer with three years of experience.", "I'm a backend developer with 3 years of experience.", "I'm a back-end developer with three years of experience.", "I'm a backend developer with three years' experience.", "I've been a backend developer for three years.", "I've worked as a backend developer for three years."], tags: ['면접'], hints: ["I'm a … developer", 'with three years of experience', "I'm a backend developer with three years of experience."] },
  { id: 'D16P8', lesson: 'D16', type: 'type', prompt: '배운 점을 영어로 써 보세요.', ko: '깔끔한 테스트 쓰는 법을 배웠어요.', answer: ['I learned how to write clean tests.', 'I learnt how to write clean tests.', 'I learned to write clean tests.', 'I learned how to write good tests.', 'I learned how to write clean test code.'], tags: ['면접'], hints: ['배웠다 = learned', '~하는 법 = how to + 동사 원형', 'I learned how to write clean tests.'] },
  { id: 'D16P9', lesson: 'D16', type: 'speak', prompt: '🔊 자기소개를 따라 말해 보세요.', say: "I'm a backend developer. I mainly work with Python and SQL.", ko: '백엔드 개발자예요. 주로 파이썬과 SQL 로 일해요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'SQL 은 「에스큐엘」 또는 「시퀄」', "I'm a backend developer. I mainly work with Python and SQL."] },

  // D17 코드를 말로 설명
  { id: 'D17P1', lesson: 'D17', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: 'This function ___ a list of numbers and returns the average.', opts: ['takes', 'take', 'taking'], ans: 0, tags: ['코드 설명'], hints: ['주어 This function 은 하나', '현재형 -s', 'This function takes a list of numbers …'], why: '주어가 하나(This function)라서 takes. 뒤의 returns 와 모양을 맞춰요.' },
  { id: 'D17P2', lesson: 'D17', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'It returns True if the user is logged in.', opts: ['사용자가 로그인돼 있으면 True 를 반환해요.', '사용자가 로그인하면 True 를 입력해요.', 'True 를 반환하면 사용자가 로그인돼요.'], ans: 0, tags: ['듣기', '코드 설명'], hints: ['returns = 반환해요', 'if 뒤가 조건', '로그인돼 있으면 True 를 반환해요.'] },
  { id: 'D17P3', lesson: 'D17', type: 'match', prompt: '코드 설명과 뜻을 짝지으세요.', pairs: [['It loops through each item.', '항목을 하나씩 돌아요.'], ['It skips negative values.', '음수 값은 건너뛰어요.'], ['It checks the input first.', '먼저 입력을 확인해요.'], ['Otherwise, the loop never ends.', '그렇지 않으면 반복이 안 끝나요.']], tags: ['코드 설명'], hints: ['loops through = 하나씩 돌다', 'skips = 건너뛰다', 'Otherwise = 그렇지 않으면'] },
  { id: 'D17P4', lesson: 'D17', type: 'build', prompt: '색 슬롯에 맞게 함수 설명을 만드세요.', ko: '이 함수는 숫자 리스트를 받아서 평균을 반환해요.', answer: ['This function takes a list of numbers and returns the average.', 'This function takes a list of numbers and returns their average.', 'The function takes a list of numbers and returns the average.'], cards: ['This function', 'takes', 'a list of numbers', 'and', 'returns', 'the average.'], roles: 'S V O J V O', tags: ['코드 설명'], hints: ['takes A and returns B', '동사 둘 다 -s', 'This function takes a list of numbers and returns the average.'] },
  { id: 'D17P5', lesson: 'D17', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '그다음 리스트의 항목을 하나씩 돌아요.', answer: ['Then, it loops through each item in the list.'], cards: ['Then,', 'it', 'loops', 'through', 'each item', 'in the list.'], distractors: ['loop'], tags: ['코드 설명'], hints: ['Then, it …', 'it 은 하나라서 loops', 'Then, it loops through each item in the list.'] },
  { id: 'D17P6', lesson: 'D17', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '값이 음수면 건너뛰어요.', wrong: 'If the value is negative, it skip it.', answer: ['If the value is negative, it skips it.', 'If the value is negative, it skips the value.', 'It skips the value if it is negative.', 'It skips it if the value is negative.'], tags: ['코드 설명', '3인칭 단수'], hints: ['주어 it 의 동사', 'it 은 하나라서 -s', 'If the value is negative, it skips it.'], why: '주어 it 은 하나라서 현재형 동사에 -s: skips.' },
  { id: 'D17P7', lesson: 'D17', type: 'type', prompt: '왜 그렇게 짰는지 영어로 써 보세요.', ko: '조회가 빠르도록 딕셔너리를 썼어요.', answer: ['I used a dictionary so that lookups are fast.', 'I used a dictionary so lookups are fast.', 'I used a dictionary to make lookups fast.', 'I used a dictionary for fast lookups.', 'I used a dictionary so that lookups are faster.', 'I used a dict so that lookups are fast.', 'I used a dictionary to make lookups faster.'], tags: ['코드 설명'], hints: ['I used a dictionary + 이유', '~하도록 = so that …', 'I used a dictionary so that lookups are fast.'] },
  { id: 'D17P8', lesson: 'D17', type: 'type', prompt: '영어로 써 보세요.', ko: 'API 가 느려서 결과를 캐시해 둬요.', answer: ['We cache the result because the API is slow.', 'We cache the results because the API is slow.', 'I cache the result because the API is slow.', 'Because the API is slow, we cache the result.', 'We cache the result since the API is slow.', 'The result is cached because the API is slow.'], tags: ['코드 설명'], hints: ['We cache the result + 이유', '~라서 = because', 'We cache the result because the API is slow.'] },
  { id: 'D17P9', lesson: 'D17', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'This function takes a list of numbers and returns the average.', ko: '이 함수는 숫자 리스트를 받아서 평균을 반환해요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'takes 와 returns 의 -s 소리를 살려서', 'This function takes a list of numbers and returns the average.'] },

  // D18 AI 도구에 요청
  { id: 'D18P1', lesson: 'D18', type: 'choice', prompt: 'AI 도구에 보내는 요청으로 가장 분명한 것을 고르세요.', opts: ['Write a Python function that checks if a number is prime.', 'Can you do something with numbers?', 'Python prime?'], ans: 0, sayOpts: true, tags: ['AI 요청'], hints: ['할 일과 대상이 분명해야 해요', '명령문 + 구체적인 대상', 'Write a Python function that checks …'], why: '동사(Write)로 시작해 무엇을 만들지 구체적으로 쓴 요청이 가장 분명해요.' },
  { id: 'D18P2', lesson: 'D18', type: 'choice', prompt: '조건을 걸어요. 빈칸에 맞는 말을 고르세요.', q: '___ change the function name.', opts: ["Don't", "Doesn't", 'Not'], ans: 0, tags: ['AI 요청'], hints: ['「~하지 마세요」 명령문', "명령문 부정 = Don't + 동사 원형", "Don't change the function name."], why: "「~하지 마세요」는 Don't + 동사 원형이에요." },
  { id: 'D18P3', lesson: 'D18', type: 'match', prompt: '요청 문장과 뜻을 짝지으세요.', pairs: [['Use only the standard library.', '표준 라이브러리만 써 주세요.'], ['Keep the answer under 20 lines.', '답은 20줄 이내로 해 주세요.'], ['Explain this error in simple terms.', '이 에러를 쉬운 말로 설명해 주세요.'], ['Show the result as a table.', '결과를 표로 보여 주세요.']], tags: ['AI 요청'], hints: ['Use only = ~만 쓰다', 'under 20 lines = 20줄 이내', 'as a table = 표로'] },
  { id: 'D18P4', lesson: 'D18', type: 'build', prompt: '색 슬롯에 맞게 요청을 만드세요.', ko: '각 단계에 주석을 달아 주세요.', answer: ['Add comments to each step.', 'Please add comments to each step.', 'Add a comment to each step.', 'Add comments for each step.'], cards: ['Add', 'comments', 'to each step.'], roles: 'V O M', tags: ['AI 요청'], hints: ['동사 원형 Add 로 시작', '주석 = comments', 'Add comments to each step.'] },
  { id: 'D18P5', lesson: 'D18', type: 'order', prompt: '할 일 + 조건을 만드세요. 필요 없는 카드도 있어요.', ko: '이 코드의 버그를 고쳐 주세요. 함수 이름은 바꾸지 마세요.', answer: ["Fix the bug in this code. Don't change the function name.", "Please fix the bug in this code. Don't change the function name."], cards: ['Fix', 'the bug', 'in this code.', "Don't", 'change', 'the function name.'], distractors: ['changing'], tags: ['AI 요청'], hints: ['할 일 → 조건 순서', "Don't + 동사 원형", "Fix the bug in this code. Don't change the function name."] },
  { id: 'D18P6', lesson: 'D18', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '답은 20줄 이내로 해 주세요.', wrong: 'Keep the answer under 20 line.', answer: ['Keep the answer under 20 lines.', 'Keep the answer under twenty lines.', 'Keep it under 20 lines.', 'Keep the answer within 20 lines.', 'Keep your answer under 20 lines.'], tags: ['AI 요청', '오개념'], hints: ['20 은 여럿이에요', '여럿이면 명사에 -s', 'Keep the answer under 20 lines.'], why: '둘 이상이면 명사에 -s: 20 lines.' },
  { id: 'D18P7', lesson: 'D18', type: 'type', prompt: 'AI 에게 요청을 영어로 써 보세요.', ko: '이 에러를 쉬운 말로 설명해 주세요.', answer: ['Explain this error in simple terms.', 'Please explain this error in simple terms.', 'Explain this error in simple words.', 'Explain this error in plain English.', 'Explain this error simply.', 'Please explain this error in simple words.'], tags: ['AI 요청'], hints: ['동사 원형 Explain 으로 시작', '쉬운 말로 = in simple terms', 'Explain this error in simple terms.'] },
  { id: 'D18P8', lesson: 'D18', type: 'type', prompt: '맥락 + 조건을 영어로 써 보세요.', ko: '파이썬 3.12 를 쓰고 있어요. 표준 라이브러리만 써 주세요.', answer: ["I'm using Python 3.12. Use only the standard library.", "I'm using Python 3.12. Only use the standard library.", "I'm using Python 3.12. Please use only the standard library.", "I'm using Python 3.12. Please only use the standard library.", 'I use Python 3.12. Use only the standard library.'], tags: ['AI 요청'], hints: ["맥락: I'm using …", '조건: Use only …', "I'm using Python 3.12. Use only the standard library."] },
  { id: 'D18P9', lesson: 'D18', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Write a Python function that checks if a number is prime.', ko: '숫자가 소수인지 확인하는 파이썬 함수를 써 주세요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'prime 은 「프라임」', 'Write a Python function that checks if a number is prime.'] },

  // DB4 보스: 기술 면접
  { id: 'DB4P1', lesson: 'DB4', boss: true, type: 'listen', prompt: '① 면접관 Tom 이 첫 질문을 해요. 듣고 뜻을 고르세요.', say: 'Could you briefly introduce yourself?', opts: ['간단히 자기소개해 주시겠어요?', '자기소개서를 보내 주시겠어요?', '간단한 질문 하나 해도 될까요?'], ans: 0, tags: ['듣기', '면접'], hints: ['introduce yourself = 자기소개하다', 'briefly = 간단히', '간단히 자기소개해 주시겠어요?'] },
  { id: 'DB4P2', lesson: 'DB4', boss: true, type: 'build', prompt: '② 프로젝트를 소개하세요.', ko: '작은 병원을 위한 예약 시스템을 만들었어요.', answer: ['I built a booking system for a small clinic.', 'I made a booking system for a small clinic.', 'I built a reservation system for a small clinic.', 'I developed a booking system for a small clinic.'], cards: ['I', 'built', 'a booking system', 'for a small clinic.'], roles: 'S V O M', tags: ['면접'], hints: ['I built + 무엇', '+ 누구를 위한 (for …)', 'I built a booking system for a small clinic.'] },
  { id: 'DB4P3', lesson: 'DB4', boss: true, type: 'order', prompt: '② 결과도 말해요. 필요 없는 카드도 있어요.', ko: '그 결과 예약 실수가 절반으로 줄었어요.', answer: ['As a result, booking errors dropped by half.', 'As a result, booking mistakes dropped by half.'], cards: ['As a result,', 'booking errors', 'dropped', 'by half.'], distractors: ['drop'], tags: ['면접'], hints: ['As a result, 로 시작', '지난 일 = dropped', 'As a result, booking errors dropped by half.'] },
  { id: 'DB4P4', lesson: 'DB4', boss: true, type: 'choice', prompt: '③ Tom: 「이 함수는 뭘 해요?」 빈칸에 맞는 말을 고르세요.', q: 'This function ___ a date and returns a list of free time slots.', opts: ['takes', 'took', 'taking'], ans: 0, tags: ['코드 설명'], hints: ['지금도 하는 일 = 현재형', '주어가 하나라서 -s', 'This function takes a date and returns …'], why: '코드가 하는 일은 현재형으로, 주어가 하나라서 takes 예요.' },
  { id: 'DB4P5', lesson: 'DB4', boss: true, type: 'fill', prompt: '④ 「막혔던 적 있어요?」 빈칸을 채우세요.', text: "I expected 9 AM, ___ the app showed 6 PM. So I ___ checking the server's time zone.", blanks: [{ a: ['but'], opt: ['but', 'so', 'and'] }, { a: ['tried'], opt: ['tried', 'expected', 'returned'] }], tags: ['질문 쓰기', '면접'], hints: ['기대와 실제가 달라요', '시험 삼아 해 봤다 = tried + -ing', 'but / tried'], why: '기대와 다른 결과는 but 으로 잇고, 해 본 방법은 tried + -ing 로 말해요.' },
  { id: 'DB4P6', lesson: 'DB4', boss: true, type: 'type', prompt: '⑤ Tom: 「AI 도구 써요?」 영어로 답해 보세요.', ko: 'AI 도구가 쓴 코드는 항상 직접 검토해요.', answer: ['I always review the code that AI tools write.', 'I always review code that AI tools write.', 'I always review the code AI tools write.', 'I always check the code that AI tools write.', 'I always review code written by AI tools.', 'I always review the code written by AI tools.', 'I always review code written by AI.'], tags: ['면접', 'AI 요청'], hints: ['I always review + 무엇', 'AI 도구가 쓴 코드 = the code that AI tools write', 'I always review the code that AI tools write.'] },
  { id: 'DB4P7', lesson: 'DB4', boss: true, type: 'type', prompt: '⑥ Tom: 「궁금한 거 있어요?」 영어로 물어보세요.', ko: '팀에 대해 좀 더 말씀해 주실 수 있어요?', answer: ['Could you tell me more about the team?', 'Can you tell me more about the team?', 'Could you tell me a little more about the team?', 'Could you tell me more about your team?', 'Can you tell me more about your team?'], tags: ['면접'], hints: ['정중한 부탁 = Could you …?', 'tell me more about …', 'Could you tell me more about the team?'] },
  { id: 'DB4P8', lesson: 'DB4', boss: true, type: 'speak', prompt: '🔊 프로젝트 소개를 한 번에 말해 보세요.', say: 'I built a booking system for a small clinic, and I was responsible for the backend.', ko: '작은 병원 예약 시스템을 만들었고, 백엔드를 맡았어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'clinic 뒤에서 살짝 쉬고', 'I built a booking system for a small clinic, and I was responsible for the backend.'] },
);
