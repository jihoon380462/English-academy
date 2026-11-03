// courses/dev/parts/v1.js — 챕터 1 「에러 메시지 읽기」 (레슨 D1~D5 + 보스 DB1). 스키마는 ../../basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 1, title: '에러 메시지 읽기', icon: '🐛', desc: '파이썬 에러·경고·로그 한 줄을 영어 문장으로 읽고 원인을 말해요' },
);
LESSONS.push(
  { id: 'D1', ch: 1, n: 1, title: 'NameError — is not defined', minutes: 6,
    terms: { '에러 메시지': '프로그램이 멈추며 남기는 설명. 맨 아래 줄의 콜론(:) 앞은 에러 종류, 뒤는 이유예요.', '수동태': '「~되다」 모양. be동사 + 과거분사(defined, found, allowed …).' },
    pages: [
      { title: '에러 한 줄 = 종류 : 이유', html: `<p>파이썬 에러는 <b>맨 아래 한 줄</b>이 핵심이에요. <b>콜론(:) 앞</b>은 에러 종류, <b>뒤</b>는 이유를 말하는 영어 문장이에요.</p><p>NameError 는 「이름 에러」. 그 이름이 <b>정의되지 않았다(is not defined)</b>는 뜻이에요.</p>`,
        ex: [
          { en: "NameError: name 'total' is not defined", ko: "NameError: 'total' 이라는 이름이 정의되지 않았어요.", note: '변수를 만들기 전에 썼거나 철자가 틀렸을 때 나와요.' },
          { en: "Name 'pritn'|is not defined.", roles: 'S V', ko: "'pritn' 이라는 이름은 정의되지 않았어요.", note: 'print 를 pritn 으로 잘못 치면 이렇게 나와요.' },
          { en: 'The variable|is not defined|yet.', roles: 'S V M', ko: '그 변수는 아직 정의되지 않았어요.' },
        ] },
      { title: 'is not + 과거분사 = ~되지 않았어요', html: `<p><b>is + 과거분사</b>(defined, found, allowed …)는 「~되다」라는 뜻이에요. not 이 붙으면 「~되지 않았다」.</p><p>에러·로그는 짧게 쓰려고 주어와 be동사를 자주 빼요: <b>File not found</b> = The file was not found.</p>`,
        ex: [
          { en: 'The file|was not found.', roles: 'S V', ko: '파일을 찾지 못했어요.' },
          { en: 'This operation|is not allowed.', roles: 'S V', ko: '이 작업은 허용되지 않아요.' },
          { en: 'File not found', ko: '파일을 찾을 수 없음', note: '주어·be동사를 뺀 짧은 꼴. 로그와 화면 글자에 자주 나와요.', deck: false },
        ],
        tip: '🐍 <a href="https://jihoon380462.github.io/python-academy/" target="_blank" rel="noopener">파이썬 아카데미</a>에서 일부러 에러를 내 보고, 맨 아래 줄을 여기서 배운 대로 읽어 보세요.' },
      { title: 'Did you mean …? = 혹시 이거예요?', html: `<p>요즘 파이썬은 에러 끝에 <b>Did you mean: 'print'?</b> 처럼 짐작한 답을 알려 줘요. 「혹시 ~를 말한 거예요?」라는 뜻이에요.</p>`,
        ex: [
          { en: "Did you mean 'total'?", ko: "혹시 'total' 을 말한 거예요?", note: "실제 에러 줄에서는 콜론이 붙어요: NameError: name 'totl' is not defined. Did you mean: 'total'?" },
          { en: 'You|forgot to define|the variable.', roles: 'S V O', ko: '변수를 정의하는 걸 잊었어요.' },
          { en: 'Check|the spelling|of the name.', roles: 'V O M', ko: '이름의 철자를 확인하세요.' },
        ] },
    ],
    summary: ['에러 맨 아래 줄은 <b>종류: 이유</b>.', '<b>is not defined</b> = 정의되지 않았다 (만들기 전에 썼거나 철자 틀림).', '<b>not found</b>, <b>not allowed</b> — is not + 과거분사 = ~되지 않았다.'] },

  { id: 'D2', ch: 1, n: 2, title: 'TypeError — 타입이 안 맞아요', minutes: 7,
    terms: { '타입': '값의 종류. 글자(str), 정수(int), 리스트(list) 같은 것.', 'concatenate': '이어 붙이다. 글자와 글자를 + 로 붙이는 것.', '인자(argument)': '함수를 부를 때 괄호 안에 넣는 값.' },
    pages: [
      { title: 'can only ~ = ~만 할 수 있어요', html: `<p>글자(str)에 숫자를 + 로 붙이면 이런 에러가 나요: <b>can only concatenate str (not "int") to str</b>.</p><p><b>can only + 동사</b> = 「~만 할 수 있다」. 괄호 속 <b>not "int"</b> 는 「int 는 안 돼요」라는 덧붙임이에요.</p>`,
        ex: [
          { en: 'TypeError: can only concatenate str (not "int") to str', ko: 'TypeError: str 에는 str 만 이어 붙일 수 있어요 (int 는 안 돼요).' },
          { en: 'You|can only add|strings|to strings.', roles: 'S V O M', ko: '문자열에는 문자열만 더할 수 있어요.' },
          { en: 'Convert|the number|to a string|first.', roles: 'V O M M', ko: '먼저 숫자를 문자열로 바꾸세요.' },
        ] },
      { title: 'unsupported = 지원되지 않는', html: `<p><b>unsupported operand type(s) for +: 'int' and 'str'</b> — 「+ 에 int 와 str 은 지원되지 않는 타입이에요」. operand 는 + 나 - 양쪽에 들어가는 값이에요.</p><p>낱말 앞에 <b>un-</b> 이 붙으면 「안 ~되는」: unsupported, unknown, unexpected.</p>`,
        ex: [
          { en: "TypeError: unsupported operand type(s) for +: 'int' and 'str'", ko: "TypeError: + 에는 'int' 와 'str' 을 함께 쓸 수 없어요." },
          { en: 'This feature|is unsupported|in older versions.', roles: 'S V M', ko: '이 기능은 옛 버전에서 지원되지 않아요.' },
        ] },
      { title: 'takes 1 … but 2 were given', html: `<p>함수에 값을 너무 많이 넣으면: <b>greet() takes 1 positional argument but 2 were given</b> — 「greet() 는 인자를 1개 받는데 2개가 주어졌어요」.</p><p><b>but</b> 앞은 원래 그래야 하는 것, 뒤는 실제로 들어온 것. <b>were given</b> = 주어졌다(수동태).</p>`,
        ex: [
          { en: 'greet() takes 1 positional argument but 2 were given', ko: 'greet() 는 위치 인자 1개를 받는데 2개가 주어졌어요.' },
          { en: 'The function|expects|one argument.', roles: 'S V O', ko: '그 함수는 인자 하나를 기대해요.' },
          { en: "greet() missing 1 required positional argument: 'name'", ko: "greet() 에 꼭 필요한 인자 'name' 1개가 빠졌어요." },
        ],
        tip: 'takes(받는다)·expects(기대한다) 뒤는 「원래 그래야 하는 것」, but·got 뒤는 「실제로 들어온 것」이에요.' },
    ],
    summary: ['<b>can only A to B</b> = B 에는 A 만 ~할 수 있다.', '<b>unsupported</b> = 지원되지 않는 (un- = 안).', '<b>takes 1 … but 2 were given</b> = 1개 받는데 2개가 주어졌다.'] },

  { id: 'D3', ch: 1, n: 3, title: '범위·키·값 에러 (out of range)', minutes: 7,
    terms: { '인덱스': '리스트에서 몇 번째인지 나타내는 번호. 0부터 세요.', 'literal': "값을 글자로 적은 모양. '42' 는 정수 42 를 적은 글자예요. invalid literal = 그 값으로 읽을 수 없는 글자." },
    pages: [
      { title: 'out of range = 범위를 벗어났어요', html: `<p><b>IndexError: list index out of range</b> — 「리스트 인덱스가 범위를 벗어났어요」. 3칸짜리 리스트에서 [3] 을 찾으면 나요 (0, 1, 2 까지만 있으니까요).</p><p><b>out of ~</b> = 「~의 밖으로, ~이 다 떨어진」: out of range, out of memory.</p>`,
        ex: [
          { en: 'IndexError: list index out of range', ko: 'IndexError: 리스트 인덱스가 범위를 벗어났어요.' },
          { en: 'The index|is|out of range.', roles: 'S V C', ko: '인덱스가 범위를 벗어났어요.' },
          { en: 'The server|ran out of|memory.', roles: 'S V O', ko: '서버의 메모리가 다 떨어졌어요.' },
        ] },
      { title: 'KeyError — 그런 키가 없어요', html: `<p>딕셔너리에 없는 키를 찾으면 <b>KeyError: 'age'</b> 처럼 키 이름만 나와요. 「'age' 라는 키가 없어요」라고 읽어요.</p><p>말로 설명할 때는 <b>does not exist</b>(존재하지 않는다)나 <b>is missing</b>(빠져 있다)을 써요.</p>`,
        ex: [
          { en: "The key 'age'|does not exist|in the dictionary.", roles: 'S V M', ko: "딕셔너리에 'age' 라는 키가 없어요." },
          { en: "The 'email' field|is missing.", roles: 'S V', ko: "'email' 칸이 빠져 있어요." },
        ] },
      { title: 'ValueError — invalid = 올바르지 않은', html: `<p><b>ValueError: invalid literal for int() with base 10: 'abc'</b> — 「int() 에 넣은 'abc' 는 10진수로 맞지 않는 값이에요」. 타입(글자)은 맞는데 <b>내용</b>이 틀렸을 때 나요.</p><p><b>invalid</b> = 올바르지 않은 (in- = 안). invalid input, invalid value 처럼 자주 써요.</p>`,
        ex: [
          { en: "ValueError: invalid literal for int() with base 10: 'abc'", ko: "ValueError: 'abc' 는 int() 가 10진수 정수로 읽을 수 없는 값이에요." },
          { en: 'The input|is|invalid.', roles: 'S V C', ko: '입력이 올바르지 않아요.' },
          { en: 'Please enter|a valid number.', roles: 'V O', ko: '올바른 숫자를 입력해 주세요.' },
        ] },
    ],
    summary: ['<b>out of range</b> = 범위를 벗어났다 (인덱스는 0부터).', "<b>KeyError: 'age'</b> = 그 키가 없다 (does not exist).", '<b>invalid</b> = 올바르지 않은 — 타입은 맞는데 내용이 틀림.'] },

  { id: 'D4', ch: 1, n: 4, title: '문법·모듈 에러 (invalid syntax, No module named)', minutes: 7,
    terms: { '문법(syntax)': '코드를 쓰는 규칙. 괄호·콜론·따옴표·들여쓰기 같은 것.', '모듈': '가져다 쓰는 코드 묶음. import 로 불러와요.' },
    pages: [
      { title: 'SyntaxError: invalid syntax', html: `<p><b>SyntaxError: invalid syntax</b> — 「문법이 올바르지 않아요」. 파이썬이 코드를 읽다가 규칙에 맞지 않는 곳을 만나면 나요.</p><p>요즘은 더 친절하게 <b>expected ':'</b>(콜론이 와야 해요), <b>'(' was never closed</b>(괄호가 끝까지 안 닫혔어요)처럼 알려 줘요.</p>`,
        ex: [
          { en: 'SyntaxError: invalid syntax', ko: 'SyntaxError: 문법이 올바르지 않아요.' },
          { en: "SyntaxError: expected ':'", ko: 'SyntaxError: 콜론(:)이 와야 해요.' },
          { en: "'('|was never closed.", roles: 'S V', ko: "'(' 가 끝까지 닫히지 않았어요." },
        ] },
      { title: 'expected = ~가 와야 했어요', html: `<p><b>expected</b> 는 「기대했다, (원래) ~가 와야 했다」. 에러에서 <b>expected X</b> = 「X 가 있어야 하는데 없어요」예요.</p><p>짝꿍 표현: <b>expected X, got Y</b> = X 를 기대했는데 Y 를 받았어요.</p>`,
        ex: [
          { en: "IndentationError: expected an indented block after 'if' statement on line 3", ko: "IndentationError: 3번 줄 'if' 문 뒤에 들여쓴 블록이 와야 해요." },
          { en: 'Expected 2 values, got 3.', ko: '값 2개를 기대했는데 3개를 받았어요.', note: '여러 도구에서 흔히 보는 모양이에요. 파이썬 3.12 는 같은 상황(a, b = [1, 2, 3])에서 ValueError: too many values to unpack (expected 2) 라고 써요.' },
          { en: 'The function|expected|a list.', roles: 'S V O', ko: '그 함수는 리스트를 기대했어요.' },
        ] },
      { title: 'No module named … = 그런 모듈이 없어요', html: `<p><b>ModuleNotFoundError: No module named 'requests'</b> — 「'requests' 라는 이름의 모듈이 없어요」. 대부분 <b>설치를 안 했을 때</b> 나요.</p><p><b>No + 명사 + named X</b> = 「X 라는 이름의 ~가 없다」.</p>`,
        ex: [
          { en: "ModuleNotFoundError: No module named 'requests'", ko: "ModuleNotFoundError: 'requests' 라는 모듈이 없어요." },
          { en: 'You|need to install|the package|first.', roles: 'S V O M', ko: '먼저 그 패키지를 설치해야 해요.' },
          { en: 'The module|is not installed|on this computer.', roles: 'S V M', ko: '그 모듈은 이 컴퓨터에 설치되어 있지 않아요.' },
        ] },
    ],
    summary: ['<b>invalid syntax</b> = 문법이 올바르지 않다.', "<b>expected ':'</b> = 콜론이 와야 했다 · <b>expected X, got Y</b>.", "<b>No module named 'x'</b> = 그런 모듈이 없다 → 대개 설치를 안 함."] },

  { id: 'D5', ch: 1, n: 5, title: '경고·로그 읽기 (failed, missing, deprecated)', minutes: 7,
    terms: { '로그': '프로그램이 하는 일을 한 줄씩 적어 둔 기록.', 'deprecated': '곧 없어질 예정이라 쓰지 말라고 권하는. 지금은 되지만 나중에 사라져요.' },
    pages: [
      { title: 'Failed to ~ = ~하지 못했어요', html: `<p>로그 줄은 <b>ERROR</b>, <b>WARNING</b>, <b>INFO</b> 같은 머리표로 시작해요. ERROR 는 실패, WARNING 은 주의, INFO 는 그냥 알림이에요.</p><p><b>Failed to + 동사</b> = 「~하지 못했다」. 로그에서 가장 많이 보는 표현이에요.</p>`,
        ex: [
          { en: 'ERROR: Failed to connect to the database.', ko: '에러: 데이터베이스에 연결하지 못했어요.' },
          { en: 'The build|failed.', roles: 'S V', ko: '빌드가 실패했어요.' },
          { en: 'Failed to download|the file.', roles: 'V O', ko: '파일을 내려받지 못했어요.' },
        ] },
      { title: 'missing · not found — 없어요', html: `<p><b>missing</b> = 「빠진, 없는」. <b>Missing required field: name</b> 은 「꼭 필요한 칸 name 이 빠졌어요」.</p><p><b>not found</b> 도 비슷해요. <b>command not found</b> = 그런 명령을 찾을 수 없어요.</p>`,
        ex: [
          { en: 'Missing required field: name', ko: '꼭 필요한 칸이 빠졌어요: name', deck: false },
          { en: 'pip: command not found', ko: 'pip: 그런 명령을 찾을 수 없어요.', note: '터미널(bash)에서는 앞에 셸 이름이 붙어 bash: pip: command not found 처럼 나와요.', deck: false },
          { en: 'A config file|is missing.', roles: 'S V', ko: '설정 파일이 하나 빠져 있어요.' },
        ] },
      { title: 'deprecated — 곧 없어질 기능', html: `<p><b>DeprecationWarning</b> 은 에러가 아니라 경고예요. 「지금은 되지만 <b>곧 없어지니</b> 다른 걸 쓰세요」라는 뜻이에요.</p><p>보통 <b>is deprecated and will be removed in …</b> + <b>Use … instead</b>(대신 …를 쓰세요) 모양으로 나와요.</p>`,
        ex: [
          { en: 'This function|is deprecated.', roles: 'S V', ko: '이 함수는 곧 없어질 예정이에요.' },
          { en: 'It|will be removed|in the next version.', roles: 'S V M', ko: '다음 버전에서 없어질 거예요.' },
          { en: 'Use|the new function|instead.', roles: 'V O M', ko: '대신 새 함수를 쓰세요.' },
        ],
        tip: '경고(WARNING)는 프로그램을 멈추지 않아요. 그래도 deprecated 는 다음 업데이트 때 에러가 될 수 있으니 미리 고쳐 두세요.' },
    ],
    summary: ['<b>Failed to + 동사</b> = ~하지 못했다.', '<b>missing</b> · <b>not found</b> = 빠졌다 · 찾을 수 없다.', '<b>deprecated</b> = 곧 없어질 기능 → <b>Use … instead</b>.'] },

  { id: 'DB1', ch: 1, boss: true, title: '빌드 실패 로그 읽기', minutes: 8,
    pages: [
      { title: '상황: 밤사이 빌드가 실패했어요', html: `<p>팀 프로젝트의 자동 빌드가 밤사이 실패했어요. 동료 <b>Tom</b> 이 채팅으로 물어요: <b>Why did the build fail?</b></p><p>로그를 위에서부터 읽고, 원인을 <b>영어 한두 문장</b>으로 말해 주세요.</p>`,
        ex: [
          { en: 'Why did the build fail?', ko: '빌드가 왜 실패했어요?' },
          { en: 'The build|failed|because of a missing module.', roles: 'S V M', ko: '모듈이 빠져서 빌드가 실패했어요.' },
          { en: "I'll fix it right away.", ko: '바로 고칠게요.' },
        ] },
      { title: '빌드 로그 (일부)', html: `<pre>INFO: Installing dependencies...
WARNING: setup.py install is deprecated.
ERROR: Failed to run tests.
ModuleNotFoundError: No module named 'yaml'
Build failed.</pre><p>WARNING 줄과 ERROR 줄을 구별해서 읽어요. 진짜 원인은 보통 ERROR 바로 아래에 있어요.</p>`,
        ex: [
          { en: 'The tests|did not run.', roles: 'S V', ko: '테스트가 실행되지 않았어요.' },
        ] },
    ],
    summary: ['WARNING(경고)과 ERROR(실패)를 구별해요.', '원인은 ERROR 아래 줄: <b>No module named …</b> = 모듈이 설치 안 됨.', '보고는 <b>The build failed because …</b> 한 문장으로.'] },
);
PROBLEMS.push(
  // D1
  { id: 'D1P1', lesson: 'D1', type: 'choice', prompt: '에러 메시지의 뜻을 고르세요.', q: "NameError: name 'score' is not defined", opts: ["'score' 라는 이름이 정의되지 않았어요.", "'score' 의 값이 너무 커요.", "'score' 는 지울 수 없어요."], ans: 0, tags: ['에러 읽기'], hints: ['is not defined 를 보세요', 'define = 정의하다', "'score' 라는 이름이 정의되지 않았다는 뜻"], why: 'is not defined = 정의되지 않았다. score 를 만들기 전에 썼다는 뜻이에요.' },
  { id: 'D1P2', lesson: 'D1', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'The file was not found.', opts: ['파일을 찾지 못했어요.', '파일이 이미 있어요.', '파일이 너무 커요.'], ans: 0, tags: ['듣기', '에러 읽기'], hints: ['was not found 를 들어 보세요', 'found = 찾아진 (find 의 과거분사)', '파일을 찾지 못했어요.'] },
  { id: 'D1P3', lesson: 'D1', type: 'match', prompt: '영어 표현과 뜻을 짝지으세요.', pairs: [['is not defined', '정의되지 않았다'], ['was not found', '찾지 못했다'], ['is not allowed', '허용되지 않는다'], ['Did you mean …?', '혹시 ~를 말한 거예요?']], tags: ['에러 읽기'], hints: ['not 뒤의 낱말 뜻을 떠올려 보세요', 'define 정의 · find 찾다 · allow 허용', 'Did you mean = 혹시 ~를 말한 거예요?'] },
  { id: 'D1P4', lesson: 'D1', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '변수 total 은 아직 정의되지 않았어요.', answer: ['The variable total is not defined yet.', "The variable total isn't defined yet."], cards: ['The variable total', 'is not defined', 'yet.'], roles: 'S V M', tags: ['수동태'], hints: ['파랑(주어)은 The variable total', '빨강(동사)은 is not defined', 'The variable total is not defined yet.'] },
  { id: 'D1P5', lesson: 'D1', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '파일을 찾지 못했어요.', answer: ['The file was not found.', "The file wasn't found."], cards: ['The file', 'was', 'not', 'found.'], distractors: ['find'], tags: ['수동태'], hints: ['주어 → was not → 과거분사', 'find 의 과거분사는 found', 'The file was not found.'] },
  { id: 'D1P6', lesson: 'D1', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '이 작업은 허용되지 않아요.', wrong: 'This operation is not allow.', answer: ['This operation is not allowed.', "This operation isn't allowed."], tags: ['수동태', '오개념'], hints: ['「허용되다」는 be + 과거분사', 'allow → allowed', 'This operation is not allowed.'], why: 'is not 다음에 과거분사(allowed)가 와야 「허용되지 않는다」예요.' },
  { id: 'D1P7', lesson: 'D1', type: 'type', prompt: '영어로 써 보세요.', ko: '그 변수는 아직 정의되지 않았어요.', answer: ['The variable is not defined yet.', 'The variable is not yet defined.', 'The variable has not been defined yet.', "The variable hasn't been defined yet."], tags: ['수동태'], hints: ['그 변수 = The variable', '정의되지 않았다 = is not defined', 'The variable is not defined yet.'] },
  { id: 'D1P8', lesson: 'D1', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Check the spelling of the name.', ko: '이름의 철자를 확인하세요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'spelling = 철자', 'Check the spelling of the name.'] },

  // D2
  { id: 'D2P1', lesson: 'D2', type: 'choice', prompt: '이 에러가 말하는 원인을 고르세요.', q: 'TypeError: can only concatenate str (not "int") to str', opts: ['글자에 숫자를 + 로 이어 붙였어요.', '변수 이름이 틀렸어요.', '리스트가 비어 있어요.'], ans: 0, tags: ['에러 읽기'], hints: ['concatenate = 이어 붙이다', 'str 에 int 를 붙이려 했어요', '글자에 숫자를 + 로 이어 붙였다'], why: 'str 에는 str 만 이어 붙일 수 있는데 int 를 붙이려 해서 났어요.' },
  { id: 'D2P2', lesson: 'D2', type: 'choice', prompt: '이 에러가 말하는 원인을 고르세요.', q: 'greet() takes 1 positional argument but 2 were given', opts: ['인자를 너무 많이 넣었어요.', '인자를 너무 적게 넣었어요.', '함수 이름이 틀렸어요.'], ans: 0, tags: ['에러 읽기'], hints: ['takes 1 = 1개 받는다', '2 were given = 2개가 주어졌다', '하나를 더 넣었어요'], why: '1개 받는데(takes 1) 2개가 주어졌으니(2 were given) 하나가 많아요.' },
  { id: 'D2P3', lesson: 'D2', type: 'match', prompt: '영어 표현과 뜻을 짝지으세요.', pairs: [['can only concatenate str', 'str 만 이어 붙일 수 있다'], ['unsupported operand type', '지원되지 않는 타입'], ['2 were given', '2개가 주어졌다'], ['missing 1 required argument', '필요한 인자 1개가 빠졌다']], tags: ['에러 읽기'], hints: ['un- = 안', 'given = 주어진, missing = 빠진', 'can only = ~만 할 수 있다'] },
  { id: 'D2P4', lesson: 'D2', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그 함수는 인자 하나를 기대해요.', answer: ['The function expects one argument.', 'The function expects 1 argument.'], cards: ['The function', 'expects', 'one argument.'], roles: 'S V O', tags: ['문장 뼈대'], hints: ['주어는 The function', '동사는 expects (함수 하나라 -s)', 'The function expects one argument.'] },
  { id: 'D2P5', lesson: 'D2', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '먼저 숫자를 문자열로 바꾸세요.', answer: ['Convert the number to a string first.', 'First, convert the number to a string.'], cards: ['Convert', 'the number', 'to', 'a string', 'first.'], distractors: ['an'], tags: ['명령문'], hints: ['동사 Convert 로 시작해요', 'A to B = A 를 B 로', 'Convert the number to a string first.'] },
  { id: 'D2P6', lesson: 'D2', type: 'fill', prompt: '빈칸을 채워 에러 문장을 완성하세요.', text: 'greet() takes 1 positional argument but 2 ___ given', blanks: [{ a: ['were'], opt: ['were', 'was', 'are'] }], tags: ['수동태'], hints: ['2개는 여럿이에요', '이미 일어난 일이라 과거', 'were given'], why: '2개(여럿)가 이미 주어졌으니 were given 이에요.' },
  { id: 'D2P7', lesson: 'D2', type: 'type', prompt: '영어로 써 보세요.', ko: '문자열에는 문자열만 더할 수 있어요.', answer: ['You can only add strings to strings.', 'You can add only strings to strings.', 'You can only add a string to a string.', 'Only strings can be added to strings.'], tags: ['에러 읽기'], hints: ['You can only add …', '문자열 = strings, ~에 = to', 'You can only add strings to strings.'] },
  { id: 'D2P8', lesson: 'D2', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'This feature is unsupported in older versions.', ko: '이 기능은 옛 버전에서 지원되지 않아요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'unsupported 는 「언서포티드」', 'This feature is unsupported in older versions.'] },

  // D3
  { id: 'D3P1', lesson: 'D3', type: 'choice', prompt: '에러 메시지의 뜻을 고르세요.', q: 'IndexError: list index out of range', opts: ['리스트 인덱스가 범위를 벗어났어요.', '리스트가 너무 길어요.', '리스트를 찾을 수 없어요.'], ans: 0, tags: ['에러 읽기'], hints: ['out of range 를 보세요', 'range = 범위', '인덱스가 범위를 벗어났다'], why: 'out of range = 범위 밖. 없는 칸 번호로 리스트를 찾았다는 뜻이에요.' },
  { id: 'D3P2', lesson: 'D3', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'The input is invalid.', opts: ['입력이 올바르지 않아요.', '입력이 비어 있어요.', '입력이 너무 길어요.'], ans: 0, tags: ['듣기'], hints: ['마지막 낱말을 들어 보세요', 'invalid = 올바르지 않은', '입력이 올바르지 않아요.'] },
  { id: 'D3P3', lesson: 'D3', type: 'match', prompt: '영어 표현과 뜻을 짝지으세요.', pairs: [['out of range', '범위를 벗어난'], ['does not exist', '존재하지 않는다'], ['is missing', '빠져 있다'], ['invalid literal', '올바르지 않은 값']], tags: ['에러 읽기'], hints: ['in- = 안', 'exist = 존재하다, missing = 빠진', 'out of = ~의 밖'] },
  { id: 'D3P4', lesson: 'D3', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '인덱스가 범위를 벗어났어요.', answer: ['The index is out of range.'], cards: ['The index', 'is', 'out of range.'], roles: 'S V C', tags: ['문장 뼈대'], hints: ['주어는 The index', '동사는 is', 'The index is out of range.'] },
  { id: 'D3P5', lesson: 'D3', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: "딕셔너리에 'age' 라는 키가 없어요.", answer: ["The key 'age' does not exist in the dictionary.", "The key 'age' doesn't exist in the dictionary."], cards: ["The key 'age'", 'does not', 'exist', 'in the dictionary.'], distractors: ['exists'], tags: ['부정문'], hints: ['does not 다음은 동사 원형', 'exists 가 아니라 exist', "The key 'age' does not exist in the dictionary."] },
  { id: 'D3P6', lesson: 'D3', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '올바른 숫자를 입력해 주세요.', wrong: 'Please enter an valid number.', answer: ['Please enter a valid number.'], tags: ['관사', '오개념'], hints: ['valid 의 첫소리를 들어 보세요', 'v 는 자음 소리 → a', 'Please enter a valid number.'], why: 'valid 는 자음 소리로 시작하니까 an 이 아니라 a valid 예요.' },
  { id: 'D3P7', lesson: 'D3', type: 'type', prompt: '영어로 써 보세요.', ko: '입력이 올바르지 않아요.', answer: ['The input is invalid.', 'The input is not valid.', "The input isn't valid.", 'Invalid input.'], tags: ['에러 읽기'], hints: ['입력 = The input', '올바르지 않은 = invalid', 'The input is invalid.'] },
  { id: 'D3P8', lesson: 'D3', type: 'type', prompt: '영어로 써 보세요.', ko: '서버의 메모리가 다 떨어졌어요.', answer: ['The server ran out of memory.', 'The server is out of memory.', 'The server has run out of memory.'], tags: ['에러 읽기'], hints: ['run out of = ~이 다 떨어지다', '이미 일어난 일이라 ran', 'The server ran out of memory.'] },
  { id: 'D3P9', lesson: 'D3', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Please enter a valid number.', ko: '올바른 숫자를 입력해 주세요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'valid 는 「밸리드」', 'Please enter a valid number.'] },

  // D4
  { id: 'D4P1', lesson: 'D4', type: 'choice', prompt: '에러 메시지가 알려 주는 문제를 고르세요.', q: "SyntaxError: expected ':'", opts: ['콜론(:)이 빠졌어요.', '콜론(:)이 너무 많아요.', '콜론(:)을 쓰면 안 돼요.'], ans: 0, tags: ['에러 읽기'], hints: ['expected = 와야 했다', '콜론이 와야 하는데 없어요', '콜론이 빠졌다'], why: "expected ':' = 콜론이 와야 했다. if·for·def 줄 끝에 콜론을 빼먹었을 때 나요." },
  { id: 'D4P2', lesson: 'D4', type: 'choice', prompt: '이 에러를 보고 가장 먼저 해 볼 일을 고르세요.', q: "ModuleNotFoundError: No module named 'requests'", opts: ['requests 패키지를 설치해요.', '변수 이름을 바꿔요.', '리스트 길이를 확인해요.'], ans: 0, tags: ['에러 읽기'], hints: ['No module named = 그런 모듈이 없다', '대부분 설치를 안 해서 나요', 'requests 를 설치해요'], why: '「그런 이름의 모듈이 없다」는 대부분 아직 설치하지 않았다는 뜻이에요.' },
  { id: 'D4P3', lesson: 'D4', type: 'match', prompt: '영어 표현과 뜻을 짝지으세요.', pairs: [['invalid syntax', '문법이 올바르지 않다'], ["expected ':'", '콜론이 와야 한다'], ['was never closed', '끝까지 닫히지 않았다'], ['No module named', '~라는 모듈이 없다']], tags: ['에러 읽기'], hints: ['syntax = 문법', 'never closed = 한 번도 안 닫힌', 'No … named = ~라는 이름의 …가 없다'] },
  { id: 'D4P4', lesson: 'D4', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '그 모듈은 이 컴퓨터에 설치되어 있지 않아요.', answer: ['The module is not installed on this computer.', "The module isn't installed on this computer."], cards: ['The module', 'is not installed', 'on this computer.'], roles: 'S V M', tags: ['수동태'], hints: ['주어는 The module', '설치되어 있지 않다 = is not installed', 'The module is not installed on this computer.'] },
  { id: 'D4P5', lesson: 'D4', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '값 2개를 기대했는데 3개를 받았어요.', answer: ['Expected 2 values, got 3.', 'Expected two values, got three.'], cards: ['Expected', '2 values,', 'got', '3.'], distractors: ['expect'], tags: ['에러 읽기'], hints: ['expected X, got Y 모양', '이미 일어난 일이라 Expected', 'Expected 2 values, got 3.'] },
  { id: 'D4P6', lesson: 'D4', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '먼저 그 패키지를 설치해야 해요.', wrong: 'You need install the package first.', answer: ['You need to install the package first.', 'First, you need to install the package.'], tags: ['오개념'], hints: ['need 다음에 동사가 올 때', 'need to + 동사', 'You need to install the package first.'], why: 'need 다음에 동사가 오면 need to + 동사예요.' },
  { id: 'D4P7', lesson: 'D4', type: 'type', prompt: '영어로 써 보세요.', ko: '문법이 올바르지 않아요.', answer: ['The syntax is invalid.', 'The syntax is not valid.', "The syntax isn't valid.", 'Invalid syntax.'], tags: ['에러 읽기'], hints: ['문법 = syntax', '올바르지 않은 = invalid', 'The syntax is invalid.'] },
  { id: 'D4P8', lesson: 'D4', type: 'dictation', prompt: '🔊 듣고 그대로 써 보세요.', say: 'The function expected a list.', tags: ['받아쓰기'], hints: ['낱말 다섯 개예요', 'expected 끝의 -ed 를 놓치지 마세요', 'The function expected a list.'] },
  { id: 'D4P9', lesson: 'D4', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'You need to install the package first.', ko: '먼저 그 패키지를 설치해야 해요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'need to 는 붙여서 「니투」', 'You need to install the package first.'] },

  // D5
  { id: 'D5P1', lesson: 'D5', type: 'choice', prompt: '이 로그 줄의 뜻으로 맞는 것을 고르세요.', q: 'WARNING: This function is deprecated and will be removed in version 3.0.', opts: ['지금은 되지만 3.0 버전에서 없어질 거예요.', '이 함수 때문에 프로그램이 지금 멈췄어요.', '3.0 버전에 새로 생긴 함수예요.'], ans: 0, tags: ['로그 읽기'], hints: ['WARNING 은 멈춤이 아니라 주의', 'deprecated = 곧 없어질 예정', 'will be removed = 없어질 것이다'], why: 'deprecated + will be removed = 지금은 되지만 3.0 에서 없어진다는 경고예요.' },
  { id: 'D5P2', lesson: 'D5', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'The build failed.', opts: ['빌드가 실패했어요.', '빌드가 끝났어요.', '빌드가 시작됐어요.'], ans: 0, tags: ['듣기'], hints: ['마지막 낱말을 들어 보세요', 'failed = 실패했다', '빌드가 실패했어요.'] },
  { id: 'D5P3', lesson: 'D5', type: 'match', prompt: '로그 표현과 뜻을 짝지으세요.', pairs: [['Failed to connect', '연결하지 못했다'], ['Missing required field', '필요한 칸이 빠졌다'], ['command not found', '그런 명령을 찾을 수 없다'], ['is deprecated', '곧 없어질 예정이다']], tags: ['로그 읽기'], hints: ['fail = 실패하다', 'missing = 빠진', 'deprecated = 곧 없어질'] },
  { id: 'D5P4', lesson: 'D5', type: 'build', prompt: '색 슬롯에 맞게 카드를 놓아 문장을 만드세요.', ko: '대신 새 함수를 쓰세요.', answer: ['Use the new function instead.', 'Instead, use the new function.'], cards: ['Use', 'the new function', 'instead.'], roles: 'V O M', tags: ['명령문'], hints: ['명령문은 동사로 시작', 'Use + 무엇을', 'Use the new function instead.'] },
  { id: 'D5P5', lesson: 'D5', type: 'order', prompt: '로그 줄을 만드세요. 필요 없는 카드도 있어요.', ko: '파일을 내려받지 못했어요.', answer: ['Failed to download the file.'], cards: ['Failed', 'to', 'download', 'the file.'], distractors: ['downloading'], tags: ['로그 읽기'], hints: ['Failed to + 동사', 'to 다음은 동사 원형', 'Failed to download the file.'] },
  { id: 'D5P6', lesson: 'D5', type: 'fill', prompt: '빈칸을 채워 경고 문장을 완성하세요.', text: 'This function is deprecated and will be ___ in the next version.', blanks: [{ a: ['removed'], opt: ['removed', 'remove', 'removing'] }], tags: ['수동태'], hints: ['「없어지다」= 수동', 'will be + 과거분사', 'removed'], why: 'will be + 과거분사 = ~될 것이다. 그래서 will be removed 예요.' },
  { id: 'D5P7', lesson: 'D5', type: 'fix', prompt: '틀린 곳을 고쳐 로그 줄을 다시 쓰세요.', ko: '데이터베이스에 연결하지 못했어요.', wrong: 'Failed to connected to the database.', answer: ['Failed to connect to the database.'], tags: ['오개념'], hints: ['to 다음 동사 모양을 보세요', 'to + 동사 원형', 'Failed to connect to the database.'], why: 'to 다음에는 동사 원형이에요: failed to connect.' },
  { id: 'D5P8', lesson: 'D5', type: 'type', prompt: '영어로 써 보세요.', ko: '빌드가 실패했어요.', answer: ['The build failed.', 'The build has failed.', 'Build failed.', 'Build has failed.'], tags: ['로그 읽기'], hints: ['빌드 = The build', '실패했다 = failed', 'The build failed.'] },
  { id: 'D5P9', lesson: 'D5', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'This function is deprecated. Use the new function instead.', ko: '이 함수는 곧 없어져요. 대신 새 함수를 쓰세요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'deprecated 는 「데프리케이티드」', 'This function is deprecated. Use the new function instead.'] },

  // DB1 보스
  { id: 'DB1P1', lesson: 'DB1', boss: true, type: 'listen', prompt: 'Tom 의 메시지를 듣고 뜻을 고르세요.', say: 'Why did the build fail?', opts: ['빌드가 왜 실패했어요?', '빌드가 언제 끝나요?', '빌드를 누가 했어요?'], ans: 0, tags: ['듣기'], hints: ['Why 로 시작해요', 'fail = 실패하다', '빌드가 왜 실패했어요?'] },
  { id: 'DB1P2', lesson: 'DB1', boss: true, type: 'choice', prompt: '로그 둘째 줄이에요. 이 줄이 빌드를 멈춘 원인일까요?', q: 'WARNING: setup.py install is deprecated.', opts: ['아니요, 곧 없어진다는 경고일 뿐이에요.', '네, 이 줄 때문에 빌드가 멈췄어요.'], ans: 0, tags: ['로그 읽기'], hints: ['머리표가 WARNING 이에요', 'deprecated = 곧 없어질 예정', '경고일 뿐, 멈춤은 아니에요'], why: 'WARNING 의 deprecated 는 「곧 없어질 예정」이라는 주의예요. 빌드를 멈춘 건 ERROR 줄이에요.' },
  { id: 'DB1P3', lesson: 'DB1', boss: true, type: 'choice', prompt: 'ERROR 아래 줄이에요. 진짜 원인은 무엇일까요?', q: "ModuleNotFoundError: No module named 'yaml'", opts: ["'yaml' 모듈이 설치되어 있지 않아요.", "'yaml' 파일의 문법이 틀렸어요.", "'yaml' 변수가 정의되지 않았어요."], ans: 0, tags: ['에러 읽기'], hints: ['ModuleNotFoundError 예요', 'No module named = 그런 모듈이 없다', '설치가 안 됐어요'], why: "No module named 'yaml' = 'yaml' 모듈이 없다 → 설치가 안 됐다는 뜻이에요." },
  { id: 'DB1P4', lesson: 'DB1', boss: true, type: 'order', prompt: 'Tom 에게 원인을 설명하세요. 필요 없는 카드도 있어요.', ko: "'yaml' 모듈이 빠져서 빌드가 실패했어요.", answer: ["The build failed because the 'yaml' module is missing.", 'The build failed because the yaml module is missing.'], cards: ['The build', 'failed', 'because', "the 'yaml' module", 'is missing.'], distractors: ['fail'], tags: ['원인 말하기'], hints: ['결과 → because → 원인', '이미 일어난 일이라 failed', "The build failed because the 'yaml' module is missing."] },
  { id: 'DB1P5', lesson: 'DB1', boss: true, type: 'type', prompt: '로그 셋째 줄(Failed to run tests)을 쉬운 문장으로 써 보세요.', ko: '테스트가 실행되지 않았어요.', answer: ['The tests did not run.', "The tests didn't run.", 'The tests were not run.', "The tests weren't run.", 'Tests did not run.'], tags: ['로그 읽기'], hints: ['테스트 = The tests', '과거 부정 = did not + 동사 원형', 'The tests did not run.'] },
  { id: 'DB1P6', lesson: 'DB1', boss: true, type: 'type', prompt: '해결 방법을 영어로 써 보세요.', ko: '먼저 그 모듈을 설치해야 해요.', answer: ['We need to install the module first.', 'We have to install the module first.', 'First, we need to install the module.', 'You need to install the module first.', 'We need to install the yaml module first.', 'We have to install the yaml module first.', 'We should install the module first.'], tags: ['원인 말하기'], hints: ['need to + 동사', '설치하다 = install', 'We need to install the module first.'] },
  { id: 'DB1P7', lesson: 'DB1', boss: true, type: 'speak', prompt: '🔊 Tom 에게 말하듯 따라 말해 보세요.', say: "The build failed because of a missing module. I'll fix it right away.", ko: '모듈이 빠져서 빌드가 실패했어요. 바로 고칠게요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'because of + 명사 = ~때문에', "The build failed because of a missing module. I'll fix it right away."] },
);
