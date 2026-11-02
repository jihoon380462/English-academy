// courses/dev/parts/v2.js — 챕터 2 「문서 읽기」 (레슨 D6~D9 + 보스 DB2). 스키마는 ../../basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 2, title: '문서 읽기', icon: '📘', desc: 'README·설치 안내·API 문서·튜토리얼 문장을 읽고 그대로 따라 해요' },
);
LESSONS.push(
  { id: 'D6', ch: 2, n: 1, title: 'README·설치 안내 (Run the following command)', minutes: 7,
    terms: { 'README': '프로젝트를 처음 열면 보이는 안내 문서. 무엇인지, 어떻게 설치·실행하는지 적혀 있어요.', '명령문': '「~하세요」 문장. 주어 없이 동사로 바로 시작해요.', '저장소(repository)': '프로젝트 파일과 변경 기록을 모아 둔 곳. 줄여서 repo.' },
    pages: [
      { title: '설치 안내는 「동사로 시작」하는 명령문', html: `<p>문서의 설치 안내는 대부분 <b>동사로 시작하는 명령문</b>이에요: Run, Install, Clone, Open …</p><p><b>Run the following command</b> = 「다음 명령을 실행하세요」. the following = 「아래에 나오는」이라서 바로 밑에 코드 상자가 와요.</p>`,
        ex: [
          { en: 'Run|the following command.', roles: 'V O', ko: '다음 명령을 실행하세요.' },
          { en: 'Install|the package|with pip.', roles: 'V O M', ko: 'pip 로 패키지를 설치하세요.' },
          { en: 'pip install requests', ko: 'requests 설치 명령', note: '설치 안내 바로 밑에 이런 코드 상자가 와요. 그대로 터미널에 붙여 넣어요.', deck: false },
        ] },
      { title: 'to + 동사 = ~하려면', html: `<p>명령문 뒤에 <b>to + 동사</b>가 붙으면 「~하려면, ~하기 위해」: <b>Run the following command to install the package.</b> = 패키지를 설치하려면 다음 명령을 실행하세요.</p><p>목적이 앞에 나올 수도 있어요: <b>To start the server, run …</b></p>`,
        ex: [
          { en: 'Run|the following command|to install the package.', roles: 'V O M', ko: '패키지를 설치하려면 다음 명령을 실행하세요.' },
          { en: 'To start the server,|run|this command.', roles: 'M V O', ko: '서버를 시작하려면 이 명령을 실행하세요.' },
          { en: 'Clone|the repository|to your computer.', roles: 'V O M', ko: '저장소를 내 컴퓨터로 복제하세요.' },
        ] },
      { title: 'Make sure … = 꼭 ~인지 확인하세요', html: `<p><b>Make sure (that) + 문장</b> = 「꼭 ~하도록 하세요, ~인지 확인하세요」. 설치 전에 준비할 것을 알려 줄 때 써요.</p><p><b>or later</b> = 「또는 그보다 새 버전」. Python 3.10 or later = 3.10 이상.</p>`,
        ex: [
          { en: 'Make sure|you have Python 3.10 or later.', roles: 'V O', ko: '파이썬 3.10 이상이 있는지 꼭 확인하세요.' },
          { en: 'This project|requires|Python 3.10 or later.', roles: 'S V O', ko: '이 프로젝트는 파이썬 3.10 이상이 필요해요.' },
          { en: 'See|the documentation|for more details.', roles: 'V O M', ko: '더 자세한 내용은 문서를 보세요.' },
        ],
        tip: '🐍 <a href="https://jihoon380462.github.io/python-academy/" target="_blank" rel="noopener">파이썬 아카데미</a>의 Git 이야기와 함께 보면, GitHub 저장소 첫 화면(README)이 훨씬 쉽게 읽혀요.' },
    ],
    summary: ['설치 안내는 <b>동사로 시작</b>하는 명령문: Run, Install, Clone.', '<b>Run the following command to …</b> = ~하려면 다음 명령을 실행하세요.', '<b>Make sure …</b> = 꼭 확인하세요 · <b>or later</b> = 그 버전 이상.'] },

  { id: 'D7', ch: 2, n: 2, title: 'API 문서 (Returns · Raises · Defaults to)', minutes: 8,
    terms: { 'API 문서': '함수가 무엇을 받고 무엇을 돌려주는지 적은 설명서.', '매개변수(parameter)': '함수가 받는 값의 이름. 부를 때 넣는 실제 값은 인자(argument).', '반환값': '함수가 일을 마치고 돌려주는 값.' },
    pages: [
      { title: 'Returns … = …를 돌려줘요', html: `<p>API 문서는 주어(This function)를 빼고 <b>동사 -s 로 바로 시작</b>해요. <b>Returns the length of the list.</b> = (이 함수는) 리스트의 길이를 돌려줘요.</p><p>설명 첫 줄은 대개 함수가 하는 일: <b>Converts …</b>(바꿔요), <b>Creates …</b>(만들어요), <b>Checks …</b>(확인해요).</p>`,
        ex: [
          { en: 'Returns|the number of items|in the list.', roles: 'V O M', ko: '리스트 안 항목의 개수를 돌려줘요.' },
          { en: 'This function|returns|a new list.', roles: 'S V O', ko: '이 함수는 새 리스트를 돌려줘요.' },
          { en: 'Converts|a string|to lowercase.', roles: 'V O M', ko: '문자열을 소문자로 바꿔요.' },
        ] },
      { title: 'Raises … if … = ~이면 에러를 내요', html: `<p><b>Raises ValueError if the list is empty.</b> = 리스트가 비어 있으면 ValueError 를 일으켜요. raise = 에러를 「일으키다」.</p><p><b>if</b> 뒤는 조건, <b>if not found</b> 처럼 짧게 줄이기도 해요. <b>Returns None if …</b> 도 자주 나와요.</p>`,
        ex: [
          { en: 'Raises|ValueError|if the list is empty.', roles: 'V O M', ko: '리스트가 비어 있으면 ValueError 를 일으켜요.' },
          { en: 'Returns|None|if the key is not found.', roles: 'V O M', ko: '키를 찾지 못하면 None 을 돌려줘요.' },
        ] },
      { title: 'Defaults to … = 기본값은 …', html: `<p>매개변수 설명에는 <b>Defaults to 10.</b> = 「기본값은 10이에요」(안 넣으면 10)가 붙어요.</p><p><b>Optional</b> = 넣어도 되고 안 넣어도 되는 값, <b>Required</b> = 꼭 넣어야 하는 값이에요.</p>`,
        ex: [
          { en: 'The timeout|defaults to|30 seconds.', roles: 'S V O', ko: 'timeout 의 기본값은 30초예요.' },
          { en: 'This parameter|is|optional.', roles: 'S V C', ko: '이 매개변수는 넣지 않아도 돼요.' },
          { en: 'If not provided,|the default value|is used.', roles: 'M S V', ko: '값을 넣지 않으면 기본값이 쓰여요.' },
        ],
        tip: 'Returns(돌려준다) · Raises(에러를 낸다) · Defaults to(기본값은) — 이 셋만 알아도 함수 설명 대부분이 읽혀요.' },
    ],
    summary: ['<b>Returns …</b> = …를 돌려준다 (주어 없이 동사 -s 로 시작).', '<b>Raises X if …</b> = ~이면 X 에러를 일으킨다.', '<b>Defaults to …</b> = 기본값은 … · Optional / Required.'] },

  { id: 'D8', ch: 2, n: 3, title: '주의 문구 (Note · Warning)', minutes: 7,
    terms: { 'Note': '알아 두면 좋은 덧붙임.', 'Warning': '안 지키면 문제가 생기는 경고.', 'back up': '혹시 몰라 복사본을 만들어 두다.' },
    pages: [
      { title: 'Note: 와 Warning: 의 차이', html: `<p><b>Note:</b> 는 「참고로」, <b>Warning:</b> 은 「경고! 조심하세요」. Warning 쪽이 훨씬 세요. <b>Important:</b>, <b>Caution:</b> 도 경고에 가까워요.</p><p>Note 문장에는 <b>requires</b>(필요하다), <b>only works</b>(~에서만 된다) 같은 조건이 자주 나와요.</p>`,
        ex: [
          { en: 'Note:|this feature|requires|Python 3.10 or later.', roles: 'M S V O', ko: '참고: 이 기능은 파이썬 3.10 이상이 필요해요.' },
          { en: 'This option|only works|on Windows.', roles: 'S V M', ko: '이 옵션은 윈도우에서만 돼요.' },
          { en: 'Warning:|this command|will delete|all your data.', roles: 'M S V O', ko: '경고: 이 명령은 데이터를 전부 지워요.' },
        ] },
      { title: 'Do not … / Never … = 하지 마세요', html: `<p>금지는 <b>Do not + 동사</b> 또는 <b>Never + 동사</b>. Never 가 더 강해요.</p><p>API 키·비밀번호 이야기에서 꼭 나와요: <b>Never share your API key.</b></p>`,
        ex: [
          { en: 'Do not share|your API key.', roles: 'V O', ko: 'API 키를 공유하지 마세요.' },
          { en: 'Never commit|passwords|to the repository.', roles: 'V O M', ko: '비밀번호를 절대 저장소에 커밋하지 마세요.' },
        ] },
      { title: 'Be careful · back up — 조심하는 말', html: `<p><b>Be careful when + 동사-ing</b> = 「~할 때 조심하세요」. <b>Back up your files first.</b> = 먼저 파일을 백업하세요.</p><p><b>This cannot be undone.</b> = 되돌릴 수 없어요. 삭제 버튼 옆에 자주 붙어 있어요.</p>`,
        ex: [
          { en: 'Be careful|when deleting files.', roles: 'V M', ko: '파일을 지울 때 조심하세요.' },
          { en: 'Back up|your files|first.', roles: 'V O M', ko: '먼저 파일을 백업하세요.' },
          { en: 'This action|cannot be undone.', roles: 'S V', ko: '이 작업은 되돌릴 수 없어요.' },
        ] },
    ],
    summary: ['<b>Note</b> = 참고, <b>Warning</b> = 경고 (더 셈).', '<b>Do not … / Never …</b> = ~하지 마세요 (Never 가 더 강함).', '<b>This cannot be undone.</b> = 되돌릴 수 없다 → 먼저 Back up.'] },

  { id: 'D9', ch: 2, n: 4, title: '튜토리얼 지시문 (First · Next · You should see)', minutes: 7,
    terms: { '튜토리얼': '처음부터 하나씩 따라 하며 배우는 안내서.', '출력(output)': '프로그램이 화면에 보여 주는 결과.' },
    pages: [
      { title: 'First → Next → Then → Finally', html: `<p>튜토리얼은 순서 말로 단계를 이어요: <b>First</b>(먼저) → <b>Next</b>(다음) → <b>Then</b>(그다음) → <b>Finally</b>(마지막으로).</p><p><b>a new file called app.py</b> = app.py 라는 새 파일. called = 「~라고 불리는」.</p>`,
        ex: [
          { en: 'First,|create|a new file called app.py.', roles: 'M V O', ko: '먼저 app.py 라는 새 파일을 만드세요.' },
          { en: 'Next,|open|the terminal.', roles: 'M V O', ko: '다음으로 터미널을 여세요.' },
          { en: 'Then|run|the script.', roles: 'M V O', ko: '그다음 스크립트를 실행하세요.' },
        ] },
      { title: 'You should see … = …가 보일 거예요', html: `<p><b>You should see the following output.</b> = 「다음 출력이 보일 거예요」. 여기서 should 는 「~해야 한다」가 아니라 <b>「(제대로 했다면) ~일 거예요」</b>예요.</p><p>안 보이면 앞 단계를 다시 확인하라는 뜻이기도 해요.</p>`,
        ex: [
          { en: 'You|should see|the following output.', roles: 'S V O', ko: '다음 출력이 보일 거예요.' },
          { en: 'The page|should load|in a few seconds.', roles: 'S V M', ko: '몇 초 안에 페이지가 열릴 거예요.' },
        ] },
      { title: 'Replace … with … / Once … = ~하고 나면', html: `<p><b>Replace A with B</b> = A 를 B 로 바꾸세요. 예시 값(YOUR_NAME)을 내 값으로 바꾸라는 뜻이에요.</p><p><b>Once + 문장</b> = 「일단 ~하고 나면」. <b>Let's start by + 동사-ing</b> = 「~하는 것부터 시작해요」.</p>`,
        ex: [
          { en: 'Replace|YOUR_NAME|with your own name.', roles: 'V O M', ko: 'YOUR_NAME 을 내 이름으로 바꾸세요.' },
          { en: 'Once the installation is complete,|restart|the terminal.', roles: 'M V O', ko: '설치가 끝나면 터미널을 다시 시작하세요.' },
          { en: "Let's start|by importing the module.", roles: 'V M', ko: '모듈을 가져오는 것부터 시작해요.' },
        ] },
    ],
    summary: ['순서 말: <b>First → Next → Then → Finally</b>.', '<b>You should see …</b> = (제대로 했다면) …가 보일 거예요.', '<b>Replace A with B</b> = A 를 B 로 · <b>Once …</b> = ~하고 나면.'] },

  { id: 'DB2', ch: 2, boss: true, title: '라이브러리 설치 가이드 따라가기', minutes: 8,
    pages: [
      { title: '상황: 처음 보는 라이브러리 설치하기', html: `<p>Mina 는 그래프를 그려 주는 라이브러리 <b>quickplot</b> 을 써 보려고 해요. 영어 설치 가이드를 한 줄씩 읽으며 그대로 따라 해 봐요.</p>
<pre>## Installation
Note: quickplot requires Python 3.9 or later.
1. Run the following command to install quickplot:
   pip install quickplot
2. Once the installation is complete, open a new terminal.
3. Run: python -m quickplot --version
   You should see the version number.
Warning: Do not install it with sudo.</pre>`,
        ex: [
          { en: 'I|followed|the installation guide.', roles: 'S V O', ko: '설치 가이드를 따라 했어요.' },
          { en: 'It|works|now.', roles: 'S V M', ko: '이제 돼요.' },
        ] },
    ],
    summary: ['Note 의 <b>requires … or later</b> = 그 버전 이상이 필요.', '번호 순서대로: 설치 → <b>Once</b> 끝나면 새 터미널 → 확인.', '<b>You should see …</b> 가 보이면 성공, Warning 의 <b>Do not</b> 은 꼭 지켜요.'] },
);
PROBLEMS.push(
  // D6
  { id: 'D6P1', lesson: 'D6', type: 'choice', prompt: '문서 문장의 뜻을 고르세요.', q: 'Run the following command to install the package.', opts: ['패키지를 설치하려면 다음 명령을 실행하세요.', '패키지를 설치한 다음 명령을 지우세요.', '다음 패키지는 설치할 수 없어요.'], ans: 0, tags: ['문서 읽기'], hints: ['Run = 실행하세요', 'the following = 아래에 나오는', 'to install = 설치하려면'], why: 'Run(실행하세요) + the following command(다음 명령) + to install(설치하려면).' },
  { id: 'D6P2', lesson: 'D6', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'See the documentation for more details.', opts: ['더 자세한 내용은 문서를 보세요.', '문서를 더 자세히 쓰세요.', '문서에는 자세한 내용이 없어요.'], ans: 0, tags: ['듣기'], hints: ['See = 보세요', 'for more details = 더 자세한 내용은', '더 자세한 내용은 문서를 보세요.'] },
  { id: 'D6P3', lesson: 'D6', type: 'match', prompt: '문서 표현과 뜻을 짝지으세요.', pairs: [['Run the following command', '다음 명령을 실행하세요'], ['Clone the repository', '저장소를 복제하세요'], ['Make sure …', '꼭 ~인지 확인하세요'], ['Python 3.10 or later', '파이썬 3.10 이상']], tags: ['문서 읽기'], hints: ['the following = 아래에 나오는', 'or later = 그보다 새 것도', 'Make sure = 꼭 확인'] },
  { id: 'D6P4', lesson: 'D6', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: 'pip 로 패키지를 설치하세요.', answer: ['Install the package with pip.', 'Install the package using pip.'], cards: ['Install', 'the package', 'with pip.'], roles: 'V O M', tags: ['명령문'], hints: ['명령문은 동사로 시작', '무엇을 = the package', 'Install the package with pip.'] },
  { id: 'D6P5', lesson: 'D6', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '서버를 시작하려면 이 명령을 실행하세요.', answer: ['To start the server, run this command.', 'Run this command to start the server.'], cards: ['To start', 'the server,', 'run', 'this command.'], distractors: ['starts'], tags: ['명령문'], hints: ['목적(To start …)을 앞에', '그다음 명령문 run …', 'To start the server, run this command.'] },
  { id: 'D6P6', lesson: 'D6', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '이 프로젝트는 파이썬 3.10 이상이 필요해요.', wrong: 'This project require Python 3.10 or later.', answer: ['This project requires Python 3.10 or later.'], tags: ['3인칭 단수', '오개념'], hints: ['주어가 This project (하나)', '현재형 동사에 -s', 'This project requires Python 3.10 or later.'], why: '주어가 하나(This project)면 현재형 동사에 -s: requires.' },
  { id: 'D6P7', lesson: 'D6', type: 'type', prompt: '영어로 써 보세요.', ko: '다음 명령을 실행하세요.', answer: ['Run the following command.', 'Run this command.', 'Run the command below.', 'Run the command below this.'], tags: ['명령문'], hints: ['실행하세요 = Run', '다음(아래에 나오는) = the following', 'Run the following command.'] },
  { id: 'D6P8', lesson: 'D6', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Make sure you have Python 3.10 or later.', ko: '파이썬 3.10 이상이 있는지 꼭 확인하세요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', '3.10 은 「three point ten」', 'Make sure you have Python 3.10 or later.'] },

  // D7
  { id: 'D7P1', lesson: 'D7', type: 'choice', prompt: '함수 설명의 뜻을 고르세요.', q: 'Returns None if the key is not found.', opts: ['키를 찾지 못하면 None 을 돌려줘요.', '키를 찾으면 None 을 지워요.', '키가 None 이면 에러를 내요.'], ans: 0, tags: ['API 문서'], hints: ['Returns = 돌려준다', 'if … not found = 찾지 못하면', '찾지 못하면 None 을 돌려준다'], why: 'Returns None(None 을 돌려준다) + if the key is not found(키를 찾지 못하면).' },
  { id: 'D7P2', lesson: 'D7', type: 'choice', prompt: '설명을 보고 맞는 것을 고르세요.', q: 'limit (int, optional): Maximum number of results. Defaults to 10.', opts: ['limit 을 안 넣으면 10이 쓰여요.', 'limit 은 꼭 넣어야 해요.', 'limit 은 10보다 클 수 없어요.'], ans: 0, tags: ['API 문서'], hints: ['optional = 안 넣어도 됨', 'Defaults to 10 = 기본값 10', '안 넣으면 10'], why: 'optional 이라 안 넣어도 되고, 그러면 기본값(Defaults to) 10이 쓰여요.' },
  { id: 'D7P3', lesson: 'D7', type: 'match', prompt: 'API 문서 표현과 뜻을 짝지으세요.', pairs: [['Returns a new list.', '새 리스트를 돌려줘요.'], ['Raises ValueError', 'ValueError 를 일으켜요'], ['Defaults to 30.', '기본값은 30이에요.'], ['This parameter is optional.', '이 매개변수는 안 넣어도 돼요.']], tags: ['API 문서'], hints: ['return = 돌려주다', 'raise = 일으키다', 'default = 기본값'] },
  { id: 'D7P4', lesson: 'D7', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '이 함수는 새 리스트를 돌려줘요.', answer: ['This function returns a new list.'], cards: ['This function', 'returns', 'a new list.'], roles: 'S V O', tags: ['API 문서'], hints: ['주어 This function', '하나니까 returns', 'This function returns a new list.'] },
  { id: 'D7P5', lesson: 'D7', type: 'order', prompt: '함수 설명 줄을 만드세요. 필요 없는 카드도 있어요.', ko: '리스트가 비어 있으면 ValueError 를 일으켜요.', answer: ['Raises ValueError if the list is empty.'], cards: ['Raises', 'ValueError', 'if', 'the list', 'is empty.'], distractors: ['Raise'], tags: ['API 문서'], hints: ['API 문서는 동사 -s 로 시작', 'Raises + 에러 이름 + if 조건', 'Raises ValueError if the list is empty.'] },
  { id: 'D7P6', lesson: 'D7', type: 'fill', prompt: '빈칸을 채워 설명을 완성하세요.', text: 'The timeout ___ to 30 seconds.', blanks: [{ a: ['defaults'], opt: ['defaults', 'default', 'defaulted'] }], tags: ['API 문서'], hints: ['주어 The timeout 은 하나', '현재형 -s', 'defaults'], why: '주어가 하나(The timeout)라서 defaults. 「기본값은 30초예요」.' },
  { id: 'D7P7', lesson: 'D7', type: 'type', prompt: '함수 설명을 영어로 써 보세요.', ko: '문자열을 소문자로 바꿔요.', answer: ['Converts a string to lowercase.', 'Converts the string to lowercase.', 'Converts a string to lower case.', 'Converts the string to lower case.', 'This function converts a string to lowercase.'], tags: ['API 문서'], hints: ['동사 -s 로 시작: Converts', 'A to B = A 를 B 로', 'Converts a string to lowercase.'] },
  { id: 'D7P8', lesson: 'D7', type: 'type', prompt: '영어로 써 보세요.', ko: '이 매개변수는 넣지 않아도 돼요. (선택이에요)', answer: ['This parameter is optional.', 'The parameter is optional.', 'This parameter is not required.', "This parameter isn't required."], tags: ['API 문서'], hints: ['이 매개변수 = This parameter', '선택의 = optional', 'This parameter is optional.'] },
  { id: 'D7P9', lesson: 'D7', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Returns the number of items in the list.', ko: '리스트 안 항목의 개수를 돌려줘요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'the number of = ~의 개수', 'Returns the number of items in the list.'] },

  // D8
  { id: 'D8P1', lesson: 'D8', type: 'choice', prompt: '더 강하게 조심하라는 문구를 고르세요.', opts: ['Warning: this command will delete all your data.', 'Note: this page has more examples.'], ans: 0, sayOpts: true, tags: ['주의 문구'], hints: ['Note 와 Warning 중 무엇이 셀까요?', 'delete all your data = 데이터를 전부 지운다', 'Warning 쪽'], why: 'Warning 은 경고, Note 는 참고예요. 데이터를 지운다는 말까지 있으니 Warning 이 강해요.' },
  { id: 'D8P2', lesson: 'D8', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'This action cannot be undone.', opts: ['이 작업은 되돌릴 수 없어요.', '이 작업은 아직 끝나지 않았어요.', '이 작업은 할 수 없어요.'], ans: 0, tags: ['듣기', '주의 문구'], hints: ['cannot be undone 을 들어 보세요', 'undo = 되돌리다', '되돌릴 수 없어요.'] },
  { id: 'D8P3', lesson: 'D8', type: 'match', prompt: '주의 문구와 뜻을 짝지으세요.', pairs: [['Do not share your API key.', 'API 키를 공유하지 마세요.'], ['Back up your files first.', '먼저 파일을 백업하세요.'], ['This option only works on Windows.', '이 옵션은 윈도우에서만 돼요.'], ['Be careful when deleting files.', '파일을 지울 때 조심하세요.']], tags: ['주의 문구'], hints: ['Do not = 하지 마세요', 'only works = ~에서만 된다', 'Be careful = 조심하세요'] },
  { id: 'D8P4', lesson: 'D8', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: 'API 키를 공유하지 마세요.', answer: ['Do not share your API key.', "Don't share your API key.", 'Never share your API key.'], cards: ['Do not share', 'your API key.'], roles: 'V O', tags: ['명령문'], hints: ['금지는 Do not + 동사', '무엇을 = your API key', 'Do not share your API key.'] },
  { id: 'D8P5', lesson: 'D8', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '참고: 이 기능은 파이썬 3.10 이상이 필요해요.', answer: ['Note: this feature requires Python 3.10 or later.', 'Note: This feature needs Python 3.10 or later.'], cards: ['Note:', 'this feature', 'requires', 'Python 3.10', 'or later.'], distractors: ['require'], tags: ['주의 문구'], hints: ['Note: 로 시작', '주어가 하나라 requires', 'Note: this feature requires Python 3.10 or later.'] },
  { id: 'D8P6', lesson: 'D8', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '파일을 지울 때 조심하세요.', wrong: 'Be care when deleting files.', answer: ['Be careful when deleting files.', 'Be careful when you delete files.'], tags: ['오개념'], hints: ['Be 다음에는 형용사', 'care(명사·동사) → careful(형용사)', 'Be careful when deleting files.'], why: 'Be 다음에는 「조심하는」이라는 형용사 careful 이 와요.' },
  { id: 'D8P7', lesson: 'D8', type: 'type', prompt: '영어로 써 보세요.', ko: '먼저 파일을 백업하세요.', answer: ['Back up your files first.', 'Back up the files first.', 'First, back up your files.', 'Back your files up first.', 'Backup your files first.'], tags: ['명령문'], hints: ['백업하다 = back up', '내 파일 = your files', 'Back up your files first.'] },
  { id: 'D8P8', lesson: 'D8', type: 'type', prompt: '영어로 써 보세요.', ko: '비밀번호를 절대 저장소에 커밋하지 마세요.', answer: ['Never commit passwords to the repository.', 'Never commit passwords to the repo.', 'Never commit your passwords to the repository.', 'Do not commit passwords to the repository.', "Don't commit passwords to the repository."], tags: ['명령문'], hints: ['절대 ~하지 마세요 = Never + 동사', '저장소에 = to the repository', 'Never commit passwords to the repository.'] },
  { id: 'D8P9', lesson: 'D8', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Warning: this command will delete all your data.', ko: '경고: 이 명령은 데이터를 전부 지워요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'Warning 은 「워닝」', 'Warning: this command will delete all your data.'] },

  // D9
  { id: 'D9P1', lesson: 'D9', type: 'choice', prompt: '튜토리얼 문장에서 should 의 뜻을 고르세요.', q: 'You should see the following output.', opts: ['(제대로 했다면) 다음 출력이 보일 거예요.', '다음 출력을 꼭 봐야만 해요.', '다음 출력을 보면 안 돼요.'], ans: 0, tags: ['튜토리얼'], hints: ['should 는 「~해야 한다」만 있는 게 아니에요', '예상·기대의 should', '보일 거예요'], why: '튜토리얼의 You should see 는 「(잘 따라 했다면) 보일 거예요」라는 예상이에요.' },
  { id: 'D9P2', lesson: 'D9', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Next, open the terminal.', opts: ['다음으로 터미널을 여세요.', '터미널을 닫고 다음으로 가세요.', '다음 터미널을 고르세요.'], ans: 0, tags: ['듣기'], hints: ['Next = 다음으로', 'open = 열다', '다음으로 터미널을 여세요.'] },
  { id: 'D9P3', lesson: 'D9', type: 'match', prompt: '튜토리얼 표현과 뜻을 짝지으세요.', pairs: [['First, create a new file.', '먼저 새 파일을 만드세요.'], ['Then run the script.', '그다음 스크립트를 실행하세요.'], ['Replace YOUR_NAME with your name.', 'YOUR_NAME 을 내 이름으로 바꾸세요.'], ['Once it is complete, restart.', '끝나면 다시 시작하세요.']], tags: ['튜토리얼'], hints: ['First → Then', 'Replace A with B = A 를 B 로', 'Once = ~하고 나면'] },
  { id: 'D9P4', lesson: 'D9', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '먼저 app.py 라는 새 파일을 만드세요.', answer: ['First, create a new file called app.py.', 'First, create a new file named app.py.'], cards: ['First,', 'create', 'a new file called app.py.'], roles: 'M V O', tags: ['튜토리얼'], hints: ['순서 말 First 로 시작', '동사 create', 'First, create a new file called app.py.'] },
  { id: 'D9P5', lesson: 'D9', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: 'YOUR_NAME 을 내 이름으로 바꾸세요.', answer: ['Replace YOUR_NAME with your own name.', 'Replace YOUR_NAME with your name.'], cards: ['Replace', 'YOUR_NAME', 'with', 'your own name.'], distractors: ['to'], tags: ['튜토리얼'], hints: ['Replace A with B', 'A = YOUR_NAME', 'Replace YOUR_NAME with your own name.'] },
  { id: 'D9P6', lesson: 'D9', type: 'fill', prompt: '빈칸을 채워 튜토리얼 문장을 완성하세요.', text: "Let's start by ___ the module.", blanks: [{ a: ['importing'], opt: ['importing', 'import', 'imports'] }], tags: ['튜토리얼'], hints: ['by 다음 동사 모양', 'by + 동사-ing', 'importing'], why: 'by(~함으로써) 다음에는 동사-ing 가 와요: by importing.' },
  { id: 'D9P7', lesson: 'D9', type: 'type', prompt: '영어로 써 보세요.', ko: '설치가 끝나면 터미널을 다시 시작하세요.', answer: ['Once the installation is complete, restart the terminal.', 'Once the installation is finished, restart the terminal.', 'After the installation is complete, restart the terminal.', 'When the installation is complete, restart the terminal.', 'Restart the terminal once the installation is complete.'], tags: ['튜토리얼'], hints: ['~하고 나면 = Once …', '다시 시작하다 = restart', 'Once the installation is complete, restart the terminal.'] },
  { id: 'D9P8', lesson: 'D9', type: 'dictation', prompt: '🔊 듣고 그대로 써 보세요.', say: 'You should see the following output.', tags: ['받아쓰기'], hints: ['낱말 여섯 개예요', 'the following = 다음의', 'You should see the following output.'] },
  { id: 'D9P9', lesson: 'D9', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: "Let's start by importing the module.", ko: '모듈을 가져오는 것부터 시작해요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', "Let's 는 「렛츠」", "Let's start by importing the module."] },

  // DB2 보스
  { id: 'DB2P1', lesson: 'DB2', boss: true, type: 'choice', prompt: "가이드 첫 줄(Note)을 읽어요. Mina 의 파이썬은 3.8 이에요. 어떻게 해야 할까요?", q: 'Note: quickplot requires Python 3.9 or later.', opts: ['파이썬을 3.9 이상으로 올려요.', '그대로 설치해도 돼요.', 'quickplot 3.9 버전을 설치해요.'], ans: 0, tags: ['주의 문구'], hints: ['requires = 필요하다', 'or later = 그 버전 이상', '3.8 은 3.9 보다 낮아요'], why: 'requires Python 3.9 or later = 3.9 이상이 필요. 3.8 이면 먼저 파이썬을 올려야 해요.' },
  { id: 'DB2P2', lesson: 'DB2', boss: true, type: 'order', prompt: '1단계 문장을 다시 만들어 보세요. 필요 없는 카드도 있어요.', ko: 'quickplot 을 설치하려면 다음 명령을 실행하세요.', answer: ['Run the following command to install quickplot.'], cards: ['Run', 'the following command', 'to install', 'quickplot.'], distractors: ['Runs'], tags: ['명령문'], hints: ['명령문은 동사 원형으로 시작', 'to install = 설치하려면', 'Run the following command to install quickplot.'] },
  { id: 'DB2P3', lesson: 'DB2', boss: true, type: 'choice', prompt: '설치가 끝났어요. 2단계는 무엇을 하라는 걸까요?', q: 'Once the installation is complete, open a new terminal.', opts: ['설치가 끝나면 새 터미널을 열어요.', '설치하는 동안 터미널을 하나 더 열어요.', '터미널을 한 번만 열어요.'], ans: 0, tags: ['튜토리얼'], hints: ['Once = ~하고 나면', 'complete = 끝난', '끝나면 새 터미널'], why: 'Once + 문장 = ~하고 나면. 설치가 끝난 뒤 새 터미널을 열라는 뜻이에요.' },
  { id: 'DB2P4', lesson: 'DB2', boss: true, type: 'choice', prompt: '3단계를 실행했더니 버전 번호 0.4.2 가 나왔어요. 어떤 뜻일까요?', q: 'You should see the version number.', opts: ['잘 설치됐어요.', '설치에 실패했어요.', '버전을 바꿔야 해요.'], ans: 0, tags: ['튜토리얼'], hints: ['You should see = 보일 거예요', '보여야 할 것이 보였어요', '성공'], why: '「버전 번호가 보일 거예요」라고 했는데 보였으니 설치가 잘 된 거예요.' },
  { id: 'DB2P5', lesson: 'DB2', boss: true, type: 'fill', prompt: '마지막 경고를 완성하세요.', text: '___ not install it with sudo.', blanks: [{ a: ['Do'], opt: ['Do', 'Does', 'Are'] }], tags: ['주의 문구'], hints: ['금지 명령문', 'Do not + 동사', 'Do'], why: '「~하지 마세요」는 Do not + 동사 원형이에요.' },
  { id: 'DB2P6', lesson: 'DB2', boss: true, type: 'type', prompt: '팀 채팅에 결과를 영어로 알려 주세요.', ko: '설치 가이드를 따라 했어요. 이제 돼요.', answer: ['I followed the installation guide. It works now.', 'I followed the install guide. It works now.', 'I followed the installation guide, and it works now.', 'I followed the installation guide. Now it works.'], tags: ['보고하기'], hints: ['따라 했다 = followed', '이제 돼요 = It works now', 'I followed the installation guide. It works now.'] },
  { id: 'DB2P7', lesson: 'DB2', boss: true, type: 'speak', prompt: '🔊 가이드 한 줄을 소리 내어 읽어 보세요.', say: 'Run the following command to install quickplot.', ko: 'quickplot 을 설치하려면 다음 명령을 실행하세요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'following 은 「팔로잉」', 'Run the following command to install quickplot.'] },
);
