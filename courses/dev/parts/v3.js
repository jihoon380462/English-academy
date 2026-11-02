// courses/dev/parts/v3.js — 챕터 3 「쓰기와 협업」 (레슨 D10~D14 + 보스 DB3). 스키마는 ../../basic/content.js 맨 위 주석
CHAPTERS.push(
  { n: 3, title: '쓰기와 협업', icon: '🤝', desc: '커밋 메시지·이슈·PR·코드 리뷰·스탠드업을 영어로 써요' },
);
LESSONS.push(
  { id: 'D10', ch: 3, n: 1, title: '커밋 메시지 (Fix · Add · Update)', minutes: 7,
    terms: { '커밋(commit)': 'Git 에 「여기까지 바꿨어요」 하고 기록을 남기는 것.', '명령형': '동사 원래 모양으로 시작하는 문장. Fix, Add, Update …' },
    pages: [
      { title: '커밋 제목은 명령형 동사로 시작', html: `<p>커밋 메시지 첫 줄은 <b>동사 원형</b>으로 시작해요: <b>Fix</b>(고치다), <b>Add</b>(추가하다), <b>Update</b>(갱신하다), <b>Remove</b>(지우다).</p><p>「이 커밋을 적용하면 ~한다」라고 생각하면 쉬워요. 그래서 Fixed, Adds 가 아니라 <b>Fix</b>, <b>Add</b>.</p>`,
        ex: [
          { en: 'Fix|login bug|on mobile', roles: 'V O M', ko: '모바일 로그인 버그 수정' },
          { en: 'Add|a search bar|to the home page', roles: 'V O M', ko: '홈 화면에 검색창 추가' },
          { en: 'Update|the README', roles: 'V O', ko: 'README 갱신' },
        ],
        tip: '🐍 <a href="https://jihoon380462.github.io/python-academy/" target="_blank" rel="noopener">파이썬 아카데미</a>에서 만든 코드를 GitHub 에 올릴 때 바로 이 모양으로 커밋해 보세요.' },
      { title: '짧게, 마침표 없이', html: `<p>제목은 <b>50자 안팎</b>으로 짧게, 끝에 <b>마침표를 찍지 않아요</b>. 관사(a, the)도 자주 빼요.</p><p>자주 쓰는 동사 더: <b>Remove</b>(지우다), <b>Rename</b>(이름 바꾸다), <b>Refactor</b>(동작은 그대로 두고 코드 정리), <b>Improve</b>(개선하다).</p>`,
        ex: [
          { en: 'Remove|unused imports', roles: 'V O', ko: '안 쓰는 import 삭제' },
          { en: 'Rename|the user variable|to username', roles: 'V O M', ko: 'user 변수 이름을 username 으로 변경' },
          { en: 'Refactor|the payment module', roles: 'V O', ko: '결제 모듈 코드 정리' },
        ] },
      { title: '무엇을 고쳤는지 + 왜', html: `<p>본문이 필요하면 한 줄 비우고 <b>왜</b> 바꿨는지 써요. 버그를 고친 커밋은 <b>Fix crash when …</b>(~할 때 멈추는 문제 수정)처럼 상황까지 쓰면 좋아요.</p>`,
        ex: [
          { en: 'Fix|crash|when the list is empty', roles: 'V O M', ko: '리스트가 비었을 때 멈추는 문제 수정' },
          { en: 'Improve|error messages|for invalid input', roles: 'V O M', ko: '잘못된 입력에 대한 에러 메시지 개선' },
        ] },
    ],
    summary: ['커밋 제목 = <b>동사 원형</b>으로 시작 (Fix · Add · Update · Remove).', '짧게, <b>마침표 없이</b>, 관사는 자주 생략.', '버그 수정은 <b>Fix … when …</b> 처럼 상황까지.'] },

  { id: 'D11', ch: 3, n: 2, title: '이슈 쓰기 (Steps to reproduce · Expected · Actual)', minutes: 8,
    terms: { '이슈(issue)': 'GitHub 에 버그나 요청을 적어 올리는 글.', 'reproduce': '(버그를) 다시 일으키다, 재현하다.' },
    pages: [
      { title: '제목: 무엇이 언제 안 되는지', html: `<p>버그 이슈 제목은 <b>무엇이 + 언제</b> 안 되는지 한 줄로: <b>App crashes when I click Save</b>(저장을 누르면 앱이 멈춰요).</p><p>현재형(crashes, does not work)으로 써요. 지금도 그렇게 되니까요.</p>`,
        ex: [
          { en: 'The app|crashes|when I click Save.', roles: 'S V M', ko: '저장을 누르면 앱이 멈춰요.' },
          { en: 'The login button|does not work|on mobile.', roles: 'S V M', ko: '모바일에서 로그인 버튼이 안 돼요.' },
        ] },
      { title: 'Steps to reproduce = 재현 순서', html: `<p>본문 첫 칸은 <b>Steps to reproduce</b> — 버그를 다시 일으키는 순서예요. 번호를 붙이고 <b>명령문</b>으로 써요: 1. Go to … 2. Click … 3. Enter …</p>`,
        ex: [
          { en: 'Go to|the settings page.', roles: 'V M', ko: '설정 페이지로 가세요.' },
          { en: 'Click|the Save button.', roles: 'V O', ko: '저장 버튼을 누르세요.' },
          { en: 'Enter|an empty name.', roles: 'V O', ko: '이름을 비워서 입력하세요.' },
        ] },
      { title: 'Expected vs Actual = 기대한 것 vs 실제', html: `<p><b>Expected behavior</b>(기대한 동작): 원래 이렇게 돼야 해요 — <b>should</b> 를 많이 써요.</p><p><b>Actual behavior</b>(실제 동작): 실제로는 이렇게 돼요 — 현재형으로.</p>`,
        ex: [
          { en: 'The file|should be saved.', roles: 'S V', ko: '파일이 저장돼야 해요.' },
          { en: 'The app|freezes|and nothing happens.', roles: 'S V M', ko: '앱이 멈추고 아무 일도 일어나지 않아요.' },
          { en: 'It|happens|every time.', roles: 'S V M', ko: '매번 그래요.' },
        ] },
    ],
    summary: ['제목: <b>무엇이 + 언제</b> (App crashes when …) — 현재형.', '<b>Steps to reproduce</b>: 번호 + 명령문 (Go to · Click · Enter).', '<b>Expected</b>: should … / <b>Actual</b>: 실제로 일어나는 일.'] },

  { id: 'D12', ch: 3, n: 3, title: 'PR 설명 (This PR adds …)', minutes: 7,
    terms: { 'PR (pull request)': '「내가 바꾼 코드를 합쳐 주세요」 하고 요청하는 글.', 'merge': '바뀐 코드를 원래 코드에 합치다.' },
    pages: [
      { title: 'This PR + 동사-s', html: `<p>PR 설명 첫 줄은 <b>This PR + 동사-s</b>: <b>This PR adds dark mode.</b> = 이 PR 은 다크 모드를 추가해요.</p><p>이슈를 함께 닫을 땐 <b>Fixes #12</b>, <b>Closes #12</b> 라고 써요. 합쳐지면 12번 이슈가 자동으로 닫혀요.</p>`,
        ex: [
          { en: 'This PR|adds|dark mode|to the settings page.', roles: 'S V O M', ko: '이 PR 은 설정 화면에 다크 모드를 추가해요.' },
          { en: 'This change|fixes|the login bug.', roles: 'S V O', ko: '이 변경은 로그인 버그를 고쳐요.' },
          { en: 'Fixes #12', ko: '12번 이슈를 해결해요', note: 'PR 이 합쳐지면 12번 이슈가 자동으로 닫혀요.', deck: false },
        ] },
      { title: '무엇을 했는지 · 어떻게 확인했는지', html: `<p>바꾼 점은 <b>I + 과거형</b>: I added …, I moved …. 확인 방법은 <b>I tested it on …</b>(~에서 테스트했어요).</p>`,
        ex: [
          { en: 'I|moved|the helper functions|to utils.py.', roles: 'S V O M', ko: '보조 함수들을 utils.py 로 옮겼어요.' },
          { en: 'I|tested|it|on Chrome and Firefox.', roles: 'S V O M', ko: '크롬과 파이어폭스에서 테스트했어요.' },
        ] },
      { title: '리뷰 부탁하기', html: `<p>마지막엔 정중하게 부탁해요: <b>Could you review this PR?</b>(이 PR 리뷰해 주실 수 있어요?) <b>Please let me know if …</b>(~이면 알려 주세요).</p>`,
        ex: [
          { en: 'Could|you|review|this PR?', roles: 'Q S V O', ko: '이 PR 리뷰해 주실 수 있어요?' },
          { en: 'Please let me know|if anything is unclear.', roles: 'V M', ko: '불분명한 게 있으면 알려 주세요.' },
        ] },
    ],
    summary: ['PR 첫 줄: <b>This PR adds / fixes …</b> (동사-s).', '한 일은 <b>I + 과거형</b>, 확인은 <b>I tested it on …</b>.', '<b>Fixes #12</b> 로 이슈 연결 · <b>Could you review …?</b> 로 부탁.'] },

  { id: 'D13', ch: 3, n: 4, title: '코드 리뷰 코멘트 (Could you…? · nit · LGTM)', minutes: 8,
    terms: { '코드 리뷰': '다른 사람이 바꾼 코드를 읽고 의견을 남기는 일.', 'nit': '아주 사소한 지적(nitpick). 고치지 않아도 합칠 수 있어요.', 'LGTM': 'Looks good to me 의 줄임 = 좋아 보여요, 합쳐도 돼요.' },
    pages: [
      { title: '부드럽게 부탁하기: Could you …?', html: `<p>리뷰에서는 명령보다 <b>Could you + 동사?</b>(~해 주실 수 있어요?)가 훨씬 부드러워요. <b>What do you think about …?</b>(~는 어때요?)로 제안도 해요.</p>`,
        ex: [
          { en: 'Could|you|add|a test|for this case?', roles: 'Q S V O M', ko: '이 경우에 대한 테스트를 추가해 주실 수 있어요?' },
          { en: 'What do you think about|using a dictionary here?', roles: 'Q O', ko: '여기에 딕셔너리를 쓰는 건 어때요?' },
          { en: 'This name|is|a bit confusing.', roles: 'S V C', ko: '이 이름은 조금 헷갈려요.' },
        ] },
      { title: 'nit: 와 LGTM', html: `<p><b>nit:</b> 으로 시작하면 「아주 사소한 거예요」라는 신호예요: <b>nit: extra blank line here.</b></p><p><b>LGTM</b> = Looks good to me. 「좋아 보여요, 합쳐도 돼요」라는 승인이에요.</p>`,
        ex: [
          { en: 'nit: extra blank line here.', ko: '사소한 거: 여기 빈 줄이 하나 더 있어요.', deck: false },
          { en: 'Looks good to me.', ko: '좋아 보여요.' },
          { en: 'LGTM! Thanks for the fix.', ko: '좋아요! 고쳐 줘서 고마워요.' },
        ] },
      { title: '리뷰에 답하기', html: `<p>받은 코멘트에는 짧게 답해요: <b>Good catch!</b>(잘 찾았네요!) <b>Done.</b>(고쳤어요) <b>Fixed in the latest commit.</b>(최신 커밋에서 고쳤어요)</p><p>다르게 생각하면 이유와 함께: <b>I kept it because …</b>(…라서 그대로 뒀어요).</p>`,
        ex: [
          { en: 'Good catch!', ko: '잘 찾았네요!' },
          { en: 'I|fixed|it|in the latest commit.', roles: 'S V O M', ko: '최신 커밋에서 고쳤어요.' },
          { en: 'I|kept|it|because other files use the same name.', roles: 'S V O M', ko: '다른 파일들이 같은 이름을 써서 그대로 뒀어요.' },
        ] },
    ],
    summary: ['부탁은 <b>Could you …?</b>, 제안은 <b>What do you think about …?</b>', '<b>nit:</b> = 사소한 지적 · <b>LGTM</b> = 좋아 보여요(승인).', '답할 땐 <b>Good catch!</b> · <b>Fixed in the latest commit.</b>'] },

  { id: 'D14', ch: 3, n: 5, title: '스탠드업 (Yesterday I… · Today I\'ll… · I\'m blocked by…)', minutes: 7,
    terms: { '스탠드업': '매일 아침 짧게 「어제 한 일 · 오늘 할 일 · 막힌 것」을 나누는 회의.', 'blocked': '다른 일 때문에 막혀서 진행을 못 하는.' },
    pages: [
      { title: 'Yesterday I + 과거형', html: `<p>어제 한 일은 <b>Yesterday, I + 과거형</b>: worked on(~작업을 했다), fixed, finished.</p><p><b>work on</b> = 「~을 작업하다」. 개발자가 가장 많이 쓰는 동사예요.</p>`,
        ex: [
          { en: 'Yesterday,|I|worked on|the login page.', roles: 'M S V O', ko: '어제는 로그인 페이지 작업을 했어요.' },
          { en: 'I|finished|the search feature.', roles: 'S V O', ko: '검색 기능을 끝냈어요.' },
        ] },
      { title: "Today I'll + 동사 원형", html: `<p>오늘 할 일은 <b>Today, I'll + 동사 원형</b> 또는 <b>I'm going to + 동사 원형</b>.</p><p>will 다음에는 꼭 <b>원형</b>: I'll fix (I'll fixes ✗).</p>`,
        ex: [
          { en: "Today,|I'll|write|tests|for the API.", roles: 'M S V O M', ko: '오늘은 API 테스트를 쓸 거예요.' },
          { en: "I'm going to review|Mina's PR.", roles: 'V O', ko: '미나의 PR 을 리뷰할 거예요.' },
        ] },
      { title: "I'm blocked by … = …때문에 막혔어요", html: `<p>막힌 게 있으면 <b>I'm blocked by + 명사</b>(~때문에 막혔어요) 또는 <b>I'm waiting for + 명사</b>(~를 기다리고 있어요).</p><p>없으면 <b>No blockers.</b>(막힌 거 없어요) 한마디면 돼요.</p>`,
        ex: [
          { en: "I'm blocked by|the server issue.", roles: 'V M', ko: '서버 문제 때문에 막혔어요.' },
          { en: "I'm waiting for|access to the database.", roles: 'V O', ko: '데이터베이스 접근 권한을 기다리고 있어요.' },
          { en: 'No blockers.', ko: '막힌 거 없어요.' },
        ] },
    ],
    summary: ['<b>Yesterday, I + 과거형</b> (worked on · fixed · finished).', "<b>Today, I'll + 동사 원형</b> / I'm going to …", "<b>I'm blocked by …</b> · <b>I'm waiting for …</b> · No blockers."] },

  { id: 'DB3', ch: 3, boss: true, title: '버그 이슈 쓰고 리뷰 답하기', minutes: 8,
    pages: [
      { title: '상황: 버그를 찾아서 고치기까지', html: `<p>Jisoo 는 팀 할 일 앱에서 버그를 찾았어요. <b>할 일 제목을 비워 두고 저장하면 앱이 멈춰요.</b></p><p>① 이슈를 쓰고 → ② 고쳐서 커밋하고 → ③ PR 을 올리고 → ④ 리뷰에 답하고 → ⑤ 다음 날 스탠드업에서 말해요.</p>`,
        ex: [
          { en: 'The app|crashes|when the title is empty.', roles: 'S V M', ko: '제목이 비어 있으면 앱이 멈춰요.' },
          { en: 'The task|should not be saved.', roles: 'S V', ko: '그 할 일은 저장되면 안 돼요.' },
          { en: 'Thanks for the review!', ko: '리뷰 고마워요!' },
        ] },
    ],
    summary: ['이슈: 제목(무엇이 언제) → Steps to reproduce → Expected / Actual.', '커밋은 <b>Fix …</b>, PR 은 <b>This PR fixes …</b> + <b>Fixes #번호</b>.', "리뷰엔 <b>Good catch!</b>, 스탠드업은 <b>Yesterday I … / Today I'll …</b>"] },
);
PROBLEMS.push(
  // D10
  { id: 'D10P1', lesson: 'D10', type: 'choice', prompt: '커밋 메시지 규칙에 가장 잘 맞는 것을 고르세요.', opts: ['Fix typo in README', 'Fixed typo in README.', 'I fixed a typo.'], ans: 0, sayOpts: true, tags: ['커밋 메시지'], hints: ['동사 원형으로 시작해요', '끝에 마침표를 찍지 않아요', 'Fix typo in README'], why: '커밋 제목은 동사 원형으로 시작하고, 짧게, 마침표 없이 써요.' },
  { id: 'D10P2', lesson: 'D10', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: '___ unused imports', opts: ['Remove', 'Removed', 'Removes'], ans: 0, tags: ['커밋 메시지'], hints: ['명령형으로 시작', '동사 원형', 'Remove'], why: '커밋 제목은 명령형(동사 원형)이에요: Remove.' },
  { id: 'D10P3', lesson: 'D10', type: 'match', prompt: '커밋 메시지와 뜻을 짝지으세요.', pairs: [['Fix login bug on mobile', '모바일 로그인 버그 수정'], ['Add a search bar', '검색창 추가'], ['Update the README', 'README 갱신'], ['Refactor the payment module', '결제 모듈 코드 정리']], tags: ['커밋 메시지'], hints: ['Fix 고치다 · Add 추가하다', 'Update 갱신하다', 'Refactor = 동작은 그대로, 코드 정리'] },
  { id: 'D10P4', lesson: 'D10', type: 'build', prompt: '색 슬롯에 맞게 커밋 메시지를 만드세요.', ko: '홈 화면에 검색창 추가', answer: ['Add a search bar to the home page', 'Add search bar to home page', 'Add a search bar to the homepage'], cards: ['Add', 'a search bar', 'to the home page'], roles: 'V O M', tags: ['커밋 메시지'], hints: ['동사 Add 로 시작', '무엇을 = a search bar', 'Add a search bar to the home page'] },
  { id: 'D10P5', lesson: 'D10', type: 'order', prompt: '커밋 메시지를 만드세요. 필요 없는 카드도 있어요.', ko: '리스트가 비었을 때 멈추는 문제 수정', answer: ['Fix crash when the list is empty', 'Fix crash when list is empty'], cards: ['Fix', 'crash', 'when', 'the list', 'is empty'], distractors: ['Fixed'], tags: ['커밋 메시지'], hints: ['동사 원형 Fix', 'when + 상황', 'Fix crash when the list is empty'] },
  { id: 'D10P6', lesson: 'D10', type: 'fix', prompt: '커밋 규칙에 맞게 고쳐 쓰세요. (동사 원형으로 시작)', ko: 'README 갱신', wrong: 'Updated the README', answer: ['Update the README', 'Update README'], tags: ['커밋 메시지', '오개념'], hints: ['과거형 말고', '동사 원형', 'Update the README'], why: '커밋 제목은 「이 커밋을 적용하면 ~한다」라는 명령형이라 Updated 가 아니라 Update 예요.' },
  { id: 'D10P7', lesson: 'D10', type: 'type', prompt: '커밋 메시지를 영어로 써 보세요.', ko: '모바일 로그인 버그 수정', answer: ['Fix login bug on mobile', 'Fix the login bug on mobile', 'Fix mobile login bug', 'Fix login bug on mobile devices'], tags: ['커밋 메시지'], hints: ['동사 Fix 로 시작', '로그인 버그 = login bug', 'Fix login bug on mobile'] },
  { id: 'D10P8', lesson: 'D10', type: 'type', prompt: '커밋 메시지를 영어로 써 보세요.', ko: '안 쓰는 import 삭제', answer: ['Remove unused imports', 'Remove the unused imports', 'Delete unused imports'], tags: ['커밋 메시지'], hints: ['지우다 = Remove', '안 쓰는 = unused', 'Remove unused imports'] },
  { id: 'D10P9', lesson: 'D10', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Fix crash when the list is empty', ko: '리스트가 비었을 때 멈추는 문제 수정', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'crash 는 「크래시」', 'Fix crash when the list is empty'] },

  // D11
  { id: 'D11P1', lesson: 'D11', type: 'choice', prompt: '이슈의 「Steps to reproduce」 칸에 들어갈 문장을 고르세요.', opts: ['Click the Save button.', 'The file should be saved.', 'The app freezes.'], ans: 0, sayOpts: true, tags: ['이슈 쓰기'], hints: ['재현 순서 = 따라 할 행동', '명령문이에요', 'Click the Save button.'], why: '재현 순서는 따라 할 행동을 명령문으로 써요. should 는 Expected, 실제 증상은 Actual 칸이에요.' },
  { id: 'D11P2', lesson: 'D11', type: 'choice', prompt: '「Expected behavior」 칸에 맞는 문장을 고르세요.', opts: ['The file should be saved.', 'Go to the settings page.', 'The app freezes and nothing happens.'], ans: 0, sayOpts: true, tags: ['이슈 쓰기'], hints: ['기대한 동작 = 원래 그래야 하는 것', 'should 를 써요', 'The file should be saved.'], why: 'Expected(기대한 동작)는 「원래 ~돼야 한다」라 should 를 써요.' },
  { id: 'D11P3', lesson: 'D11', type: 'match', prompt: '이슈 칸 이름과 뜻을 짝지으세요.', pairs: [['Steps to reproduce', '재현 순서'], ['Expected behavior', '기대한 동작'], ['Actual behavior', '실제 동작'], ['It happens every time.', '매번 그래요.']], tags: ['이슈 쓰기'], hints: ['reproduce = 다시 일으키다', 'expected = 기대한', 'actual = 실제의'] },
  { id: 'D11P4', lesson: 'D11', type: 'build', prompt: '색 슬롯에 맞게 이슈 제목을 만드세요.', ko: '저장을 누르면 앱이 멈춰요.', answer: ['The app crashes when I click Save.', 'App crashes when I click Save.', 'The app crashes when I click save.'], cards: ['The app', 'crashes', 'when I click Save.'], roles: 'S V M', tags: ['이슈 쓰기'], hints: ['주어 The app', '지금도 그러니 현재형 crashes', 'The app crashes when I click Save.'] },
  { id: 'D11P5', lesson: 'D11', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '모바일에서 로그인 버튼이 안 돼요.', answer: ['The login button does not work on mobile.', "The login button doesn't work on mobile."], cards: ['The login button', 'does not', 'work', 'on mobile.'], distractors: ['works'], tags: ['이슈 쓰기'], hints: ['does not + 동사 원형', 'works 가 아니라 work', 'The login button does not work on mobile.'] },
  { id: 'D11P6', lesson: 'D11', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '파일이 저장돼야 해요.', wrong: 'The file should saved.', answer: ['The file should be saved.'], tags: ['수동태', '오개념'], hints: ['「저장되다」는 수동', 'should + be + 과거분사', 'The file should be saved.'], why: '「~돼야 한다」는 should be + 과거분사예요.' },
  { id: 'D11P7', lesson: 'D11', type: 'type', prompt: '「Actual behavior」 칸을 영어로 써 보세요.', ko: '앱이 멈추고 아무 일도 일어나지 않아요.', answer: ['The app freezes and nothing happens.', 'The app freezes, and nothing happens.', 'App freezes and nothing happens.', 'The app hangs and nothing happens.'], tags: ['이슈 쓰기'], hints: ['멈추다(얼다) = freezes', '아무 일도 = nothing happens', 'The app freezes and nothing happens.'] },
  { id: 'D11P8', lesson: 'D11', type: 'type', prompt: '재현 순서 1번을 영어로 써 보세요.', ko: '설정 페이지로 가세요.', answer: ['Go to the settings page.', 'Go to the Settings page.', 'Open the settings page.', 'Go to settings.'], tags: ['이슈 쓰기'], hints: ['명령문: Go to …', '설정 페이지 = the settings page', 'Go to the settings page.'] },
  { id: 'D11P9', lesson: 'D11', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'The app crashes when I click Save. It happens every time.', ko: '저장을 누르면 앱이 멈춰요. 매번 그래요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'crashes 는 「크래시즈」', 'The app crashes when I click Save. It happens every time.'] },

  // D12
  { id: 'D12P1', lesson: 'D12', type: 'choice', prompt: 'PR 설명 첫 줄에 알맞은 말을 고르세요.', q: 'This PR ___ dark mode to the settings page.', opts: ['adds', 'add', 'adding'], ans: 0, tags: ['PR 설명'], hints: ['주어 This PR 은 하나', '현재형 -s', 'adds'], why: '주어가 하나(This PR)라서 현재형에 -s: adds.' },
  { id: 'D12P2', lesson: 'D12', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: 'Could you review this PR?', opts: ['이 PR 리뷰해 주실 수 있어요?', '이 PR 을 닫아도 될까요?', '이 PR 을 누가 만들었어요?'], ans: 0, tags: ['듣기', 'PR 설명'], hints: ['Could you …? = ~해 주실 수 있어요?', 'review = 검토하다', '리뷰해 주실 수 있어요?'] },
  { id: 'D12P3', lesson: 'D12', type: 'match', prompt: 'PR 표현과 뜻을 짝지으세요.', pairs: [['This PR adds dark mode.', '이 PR 은 다크 모드를 추가해요.'], ['Fixes #12', '12번 이슈를 해결해요'], ['I tested it on Chrome.', '크롬에서 테스트했어요.'], ['Please let me know if anything is unclear.', '불분명한 게 있으면 알려 주세요.']], tags: ['PR 설명'], hints: ['#12 = 이슈 번호', 'tested = 테스트했다', 'let me know = 알려 주세요'] },
  { id: 'D12P4', lesson: 'D12', type: 'build', prompt: '색 슬롯에 맞게 문장을 만드세요.', ko: '이 변경은 로그인 버그를 고쳐요.', answer: ['This change fixes the login bug.'], cards: ['This change', 'fixes', 'the login bug.'], roles: 'S V O', tags: ['PR 설명'], hints: ['주어 This change', '하나니까 fixes', 'This change fixes the login bug.'] },
  { id: 'D12P5', lesson: 'D12', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '보조 함수들을 utils.py 로 옮겼어요.', answer: ['I moved the helper functions to utils.py.'], cards: ['I', 'moved', 'the helper functions', 'to utils.py.'], distractors: ['move'], tags: ['과거형'], hints: ['한 일은 과거형', 'move → moved', 'I moved the helper functions to utils.py.'] },
  { id: 'D12P6', lesson: 'D12', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '이 PR 은 다크 모드를 추가해요.', wrong: 'This PR add dark mode.', answer: ['This PR adds dark mode.'], tags: ['3인칭 단수', '오개념'], hints: ['주어가 하나예요', '현재형에 -s', 'This PR adds dark mode.'], why: 'This PR 은 하나라서 현재형 동사에 -s: adds.' },
  { id: 'D12P7', lesson: 'D12', type: 'type', prompt: '영어로 써 보세요.', ko: '크롬과 파이어폭스에서 테스트했어요.', answer: ['I tested it on Chrome and Firefox.', 'I tested it in Chrome and Firefox.', 'I tested this on Chrome and Firefox.', 'Tested on Chrome and Firefox.'], tags: ['PR 설명'], hints: ['한 일은 과거형 tested', '~에서 = on', 'I tested it on Chrome and Firefox.'] },
  { id: 'D12P8', lesson: 'D12', type: 'type', prompt: '영어로 부탁해 보세요.', ko: '이 PR 리뷰해 주실 수 있어요?', answer: ['Could you review this PR?', 'Could you please review this PR?', 'Can you review this PR?', 'Could you review this pull request?', 'Would you review this PR?'], tags: ['PR 설명'], hints: ['정중한 부탁 = Could you …?', 'review = 리뷰하다', 'Could you review this PR?'] },
  { id: 'D12P9', lesson: 'D12', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'This PR adds dark mode to the settings page.', ko: '이 PR 은 설정 화면에 다크 모드를 추가해요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'PR 은 「피알」', 'This PR adds dark mode to the settings page.'] },

  // D13
  { id: 'D13P1', lesson: 'D13', type: 'choice', prompt: '리뷰 코멘트 「LGTM」 의 뜻을 고르세요.', q: 'LGTM! Thanks for the fix.', opts: ['좋아 보여요, 합쳐도 돼요.', '고칠 게 많아요.', '아직 보지 않았어요.'], ans: 0, tags: ['코드 리뷰'], hints: ['Looks Good To Me 의 줄임', '좋아 보인다', '승인이에요'], why: 'LGTM = Looks good to me. 좋아 보이니 합쳐도 된다는 승인이에요.' },
  { id: 'D13P2', lesson: 'D13', type: 'choice', prompt: '「nit:」 으로 시작하는 코멘트는 어떤 뜻일까요?', q: 'nit: extra blank line here.', opts: ['아주 사소한 지적이에요.', '꼭 고쳐야 하는 큰 문제예요.', '칭찬이에요.'], ans: 0, tags: ['코드 리뷰'], hints: ['nitpick 의 줄임', '작은 흠을 집는 것', '사소한 지적'], why: 'nit 은 nitpick(사소한 흠 잡기). 고치지 않아도 합칠 수 있을 만큼 작은 지적이에요.' },
  { id: 'D13P3', lesson: 'D13', type: 'match', prompt: '리뷰 표현과 뜻을 짝지으세요.', pairs: [['Could you add a test?', '테스트를 추가해 주실 수 있어요?'], ['Good catch!', '잘 찾았네요!'], ['Looks good to me.', '좋아 보여요.'], ['This name is a bit confusing.', '이 이름은 조금 헷갈려요.']], tags: ['코드 리뷰'], hints: ['Could you = ~해 주실 수 있어요?', 'catch = 잡다 → 잘 찾았다', 'confusing = 헷갈리는'] },
  { id: 'D13P4', lesson: 'D13', type: 'build', prompt: '색 슬롯에 맞게 리뷰 답글을 만드세요.', ko: '최신 커밋에서 고쳤어요.', answer: ['I fixed it in the latest commit.', 'I fixed this in the latest commit.'], cards: ['I', 'fixed', 'it', 'in the latest commit.'], roles: 'S V O M', tags: ['코드 리뷰'], hints: ['한 일은 과거형 fixed', '무엇을 = it', 'I fixed it in the latest commit.'] },
  { id: 'D13P5', lesson: 'D13', type: 'order', prompt: '리뷰 코멘트를 만드세요. 필요 없는 카드도 있어요.', ko: '이 경우에 대한 테스트를 추가해 주실 수 있어요?', answer: ['Could you add a test for this case?'], cards: ['Could', 'you', 'add', 'a test', 'for this case?'], distractors: ['adds'], tags: ['코드 리뷰'], hints: ['Could you + 동사 원형', 'adds 가 아니라 add', 'Could you add a test for this case?'] },
  { id: 'D13P6', lesson: 'D13', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '이 경우에 대한 테스트를 추가해 주실 수 있어요?', wrong: 'Could you adding a test for this case?', answer: ['Could you add a test for this case?', 'Could you please add a test for this case?'], tags: ['코드 리뷰', '오개념'], hints: ['Could 다음 동사 모양', 'Could you + 동사 원형', 'Could you add a test for this case?'], why: 'could 같은 조동사 다음에는 동사 원형: Could you add …?' },
  { id: 'D13P7', lesson: 'D13', type: 'type', prompt: '리뷰 제안을 영어로 써 보세요.', ko: '여기에 딕셔너리를 쓰는 건 어때요?', answer: ['What do you think about using a dictionary here?', 'How about using a dictionary here?', 'What about using a dictionary here?', 'Could we use a dictionary here?', 'Why not use a dictionary here?'], tags: ['코드 리뷰'], hints: ['What do you think about + 동사-ing?', '딕셔너리를 쓰는 것 = using a dictionary', 'What do you think about using a dictionary here?'] },
  { id: 'D13P8', lesson: 'D13', type: 'type', prompt: '리뷰 답글을 영어로 써 보세요.', ko: '잘 찾았네요! 최신 커밋에서 고쳤어요.', answer: ['Good catch! I fixed it in the latest commit.', 'Good catch! Fixed in the latest commit.', 'Good catch! I fixed this in the latest commit.', 'Nice catch! I fixed it in the latest commit.'], tags: ['코드 리뷰'], hints: ['잘 찾았네요 = Good catch!', '고쳤다 = fixed', 'Good catch! I fixed it in the latest commit.'] },
  { id: 'D13P9', lesson: 'D13', type: 'speak', prompt: '🔊 듣고 따라 말해 보세요.', say: 'Looks good to me. Thanks for the fix.', ko: '좋아 보여요. 고쳐 줘서 고마워요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', 'Looks good to me 는 한 덩어리', 'Looks good to me. Thanks for the fix.'] },

  // D14
  { id: 'D14P1', lesson: 'D14', type: 'choice', prompt: '빈칸에 맞는 말을 고르세요.', q: "Today, I'll ___ tests for the API.", opts: ['write', 'wrote', 'writes'], ans: 0, tags: ['스탠드업'], hints: ["I'll = I will", 'will 다음은 동사 원형', 'write'], why: "I'll(= I will) 다음에는 동사 원형: write." },
  { id: 'D14P2', lesson: 'D14', type: 'listen', prompt: '듣고 알맞은 뜻을 고르세요.', say: "I'm blocked by the server issue.", opts: ['서버 문제 때문에 막혔어요.', '서버 문제를 고쳤어요.', '서버 문제를 막았어요.'], ans: 0, tags: ['듣기', '스탠드업'], hints: ['blocked by = ~때문에 막힌', 'issue = 문제', '서버 문제 때문에 막혔어요.'] },
  { id: 'D14P3', lesson: 'D14', type: 'match', prompt: '스탠드업 표현과 뜻을 짝지으세요.', pairs: [['I worked on the login page.', '로그인 페이지 작업을 했어요.'], ["I'm going to review Mina's PR.", '미나의 PR 을 리뷰할 거예요.'], ["I'm waiting for access.", '접근 권한을 기다리고 있어요.'], ['No blockers.', '막힌 거 없어요.']], tags: ['스탠드업'], hints: ['worked on = 작업했다', 'going to = 할 거예요', 'blocker = 막는 것'] },
  { id: 'D14P4', lesson: 'D14', type: 'build', prompt: '색 슬롯에 맞게 문장을 만드세요.', ko: '어제는 로그인 페이지 작업을 했어요.', answer: ['Yesterday, I worked on the login page.', 'Yesterday I worked on the login page.', 'I worked on the login page yesterday.'], cards: ['Yesterday,', 'I', 'worked on', 'the login page.'], roles: 'M S V O', tags: ['스탠드업'], hints: ['때(Yesterday)를 앞에', '과거형 worked on', 'Yesterday, I worked on the login page.'] },
  { id: 'D14P5', lesson: 'D14', type: 'order', prompt: '카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '오늘은 API 테스트를 쓸 거예요.', answer: ["Today, I'll write tests for the API.", 'Today, I will write tests for the API.', "I'll write tests for the API today."], cards: ['Today,', "I'll", 'write', 'tests', 'for the API.'], distractors: ['wrote'], tags: ['스탠드업'], hints: ["Today, I'll …", 'will 다음은 원형 write', "Today, I'll write tests for the API."] },
  { id: 'D14P6', lesson: 'D14', type: 'fix', prompt: '틀린 곳을 고쳐 문장을 다시 쓰세요.', ko: '어제는 검색 기능을 끝냈어요.', wrong: 'Yesterday, I finish the search feature.', answer: ['Yesterday, I finished the search feature.', 'I finished the search feature yesterday.'], tags: ['과거형', '오개념'], hints: ['Yesterday = 지난 일', '과거형 -ed', 'Yesterday, I finished the search feature.'], why: '어제 일은 과거형이에요: finish → finished.' },
  { id: 'D14P7', lesson: 'D14', type: 'type', prompt: '스탠드업에서 말하듯 영어로 써 보세요.', ko: '서버 문제 때문에 막혔어요.', answer: ["I'm blocked by the server issue.", "I'm blocked by the server problem.", "I'm blocked by a server issue.", 'The server issue is blocking me.'], tags: ['스탠드업'], hints: ["I'm blocked by + 명사", '서버 문제 = the server issue', "I'm blocked by the server issue."] },
  { id: 'D14P8', lesson: 'D14', type: 'type', prompt: '영어로 써 보세요.', ko: '데이터베이스 접근 권한을 기다리고 있어요.', answer: ["I'm waiting for access to the database.", "I'm waiting for database access.", "I'm still waiting for access to the database.", "I'm waiting for permission to access the database."], tags: ['스탠드업'], hints: ["I'm waiting for + 명사", '접근 권한 = access', "I'm waiting for access to the database."] },
  { id: 'D14P9', lesson: 'D14', type: 'speak', prompt: '🔊 스탠드업처럼 따라 말해 보세요.', say: "Yesterday, I worked on the login page. Today, I'll write tests. No blockers.", ko: '어제는 로그인 페이지 작업을 했어요. 오늘은 테스트를 쓸 거예요. 막힌 거 없어요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', '어제 → 오늘 → 막힌 것 순서', "Yesterday, I worked on the login page. Today, I'll write tests. No blockers."] },

  // DB3 보스
  { id: 'DB3P1', lesson: 'DB3', boss: true, type: 'build', prompt: '① 이슈 제목을 만드세요.', ko: '제목이 비어 있으면 앱이 멈춰요.', answer: ['The app crashes when the title is empty.', 'App crashes when the title is empty.', 'The app crashes when the title is blank.'], cards: ['The app', 'crashes', 'when the title is empty.'], roles: 'S V M', tags: ['이슈 쓰기'], hints: ['무엇이 + 언제', '현재형 crashes', 'The app crashes when the title is empty.'] },
  { id: 'DB3P2', lesson: 'DB3', boss: true, type: 'choice', prompt: '① 이슈의 「Expected behavior」 칸에 들어갈 문장을 고르세요.', opts: ['The task should not be saved.', 'The app crashes.', 'Leave the title empty.'], ans: 0, sayOpts: true, tags: ['이슈 쓰기'], hints: ['기대한 동작 = 원래 그래야 하는 것', 'should 를 써요', 'The task should not be saved.'], why: 'Expected 는 원래 그래야 하는 동작(should …). The app crashes 는 Actual, Leave … 는 재현 순서예요.' },
  { id: 'DB3P3', lesson: 'DB3', boss: true, type: 'order', prompt: '② 고친 뒤 커밋 메시지를 만드세요. 필요 없는 카드도 있어요.', ko: '제목이 비었을 때 멈추는 문제 수정', answer: ['Fix crash when the title is empty', 'Fix crash when title is empty'], cards: ['Fix', 'crash', 'when', 'the title', 'is empty'], distractors: ['Fixed'], tags: ['커밋 메시지'], hints: ['커밋은 동사 원형으로', 'Fix + 무엇 + when 상황', 'Fix crash when the title is empty'] },
  { id: 'DB3P4', lesson: 'DB3', boss: true, type: 'type', prompt: '③ PR 설명 첫 줄을 영어로 써 보세요.', ko: '이 PR 은 빈 제목 버그를 고쳐요.', answer: ['This PR fixes the empty title bug.', 'This PR fixes the empty-title bug.', 'This PR fixes the bug with empty titles.', 'This pull request fixes the empty title bug.'], tags: ['PR 설명'], hints: ['This PR + 동사-s', '고친다 = fixes', 'This PR fixes the empty title bug.'] },
  { id: 'DB3P5', lesson: 'DB3', boss: true, type: 'listen', prompt: '④ 리뷰어 Tom 의 코멘트를 듣고 뜻을 고르세요.', say: 'Could you add a test for this case?', opts: ['이 경우에 대한 테스트를 추가해 주실 수 있어요?', '이 경우는 테스트하지 않아도 돼요.', '테스트가 이미 있어요.'], ans: 0, tags: ['듣기', '코드 리뷰'], hints: ['Could you …? = 부탁', 'add a test = 테스트를 추가하다', '테스트를 추가해 주실 수 있어요?'] },
  { id: 'DB3P6', lesson: 'DB3', boss: true, type: 'type', prompt: '④ 테스트를 추가했어요. Tom 에게 답글을 써 보세요.', ko: '좋은 지적이에요! 최신 커밋에서 테스트를 추가했어요.', answer: ['Good catch! I added a test in the latest commit.', 'Good point! I added a test in the latest commit.', 'Good catch! I added the test in the latest commit.', 'Good catch! Added a test in the latest commit.'], tags: ['코드 리뷰'], hints: ['Good catch! / Good point!', '추가했다 = added', 'Good catch! I added a test in the latest commit.'] },
  { id: 'DB3P7', lesson: 'DB3', boss: true, type: 'fill', prompt: '⑤ 다음 날 스탠드업이에요. 빈칸을 채우세요.', text: "Yesterday, I ___ the empty title bug. Today, I'll ___ Mina's PR.", blanks: [{ a: ['fixed'], opt: ['fixed', 'fix', 'fixes'] }, { a: ['review'], opt: ['review', 'reviewed', 'reviews'] }], tags: ['스탠드업'], hints: ['어제 = 과거형', "I'll 다음 = 원형", 'fixed / review'], why: "Yesterday 는 과거형 fixed, I'll 다음에는 동사 원형 review 예요." },
  { id: 'DB3P8', lesson: 'DB3', boss: true, type: 'speak', prompt: '🔊 스탠드업처럼 따라 말해 보세요.', say: "Yesterday, I fixed the empty title bug. Today, I'll review Mina's PR.", ko: '어제는 빈 제목 버그를 고쳤어요. 오늘은 미나의 PR 을 리뷰할 거예요.', tags: ['말하기'], hints: ['🐢 로 천천히 들어 보세요', '과거 → 미래 순서', "Yesterday, I fixed the empty title bug. Today, I'll review Mina's PR."] },
);
