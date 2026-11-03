# QA — 개발자 영어(dev) 코스 · v1.js / v2.js / v3.js

검수 범위: 챕터 1~3 (D1~D14, DB1~DB3) 레슨 17개 · 문제 145개 전부.
**파이썬 에러 문구는 실제 Python 3.12(`/usr/bin/python3.12`)로 하나씩 일으켜서 대조했어요.** 아래는 전부 글자 그대로 일치:
`NameError: name 'total' is not defined` · `… Did you mean: 'print'?`(콜론 포함) · `TypeError: can only concatenate str (not "int") to str` · `TypeError: unsupported operand type(s) for +: 'int' and 'str'` · `TypeError: greet() takes 1 positional argument but 2 were given` · `TypeError: greet() missing 1 required positional argument: 'name'` · `IndexError: list index out of range` · `KeyError: 'age'` · `ValueError: invalid literal for int() with base 10: 'abc'` · `SyntaxError: expected ':'` · `SyntaxError: '(' was never closed` · `IndentationError: expected an indented block after 'if' statement on line 3` · `ModuleNotFoundError: No module named 'requests'`.
커밋 규칙(명령형·50자 안팎·마침표 없음·빈 줄 뒤 본문에 「왜」), `Fixes #12`/`Closes #12` 자동 닫힘, nit/LGTM 뜻도 사실과 맞아요.

| id | 문제 | 고친 내용 |
|---|---|---|
| D1 (3쪽 ex) | `Did you mean 'total'?` — 실제 파이썬은 `Did you mean: 'total'?`(콜론) | 예문은 자연스러운 영어 문장으로 두고, note 로 실제 줄 `NameError: name 'totl' is not defined. Did you mean: 'total'?` 을 보여 줌 (3.12로 확인한 문구) |
| D3 terms | literal = 「코드에 그대로 적은 값」 — int(input()) 처럼 코드에 없는 글자에서도 나는 에러라 오해 소지 | 「값을 글자로 적은 모양. '42' 는 정수 42 를 적은 글자. invalid literal = 그 값으로 읽을 수 없는 글자」로 고침 |
| D3 (3쪽 ex) | ValueError 의 ko 「'abc' 는 int() 에 넣을 수 없는 10진수 값」 — abc 가 10진수 값이라는 뜻으로 읽힘 | 「'abc' 는 int() 가 10진수 정수로 읽을 수 없는 값이에요」 |
| D4 (2쪽 ex) | `Expected 2 values, got 3.` 가 파이썬 메시지처럼 보이지만 3.12 실제 문구는 다름 | note 추가: 3.12 는 `ValueError: too many values to unpack (expected 2)` |
| D5 (2쪽 ex) | `pip: command not found` — bash 실제 출력은 앞에 `bash:` 가 붙음 | note 추가: `bash: pip: command not found` |
| D7 (1쪽 html) | 「API 문서는 동사 -s 로 시작해요」 — 파이썬 공식 문서·PEP 257 은 명령형 `Return …` 을 써서 단정이 틀림 | 「…하는 경우가 많아요」 + PEP 257 명령형(Return …)도 같은 뜻이라고 보충 |
| D7P5 | 함정 카드 `Raise` 를 넣으면 `Raise ValueError if the list is empty.` — PEP 257 식으로 맞는 문장 | 함정을 `Raised` 로, 첫 힌트를 「이 문서는 동사 -s 로 시작하는 스타일」로 |
| D7P6 | 보기 `defaulted` — 「The timeout defaulted to 30 seconds.」도 문법적으로 맞음 | `defaulting` 으로 교체 |
| D7P7 | 명령형 docstring `Convert a string to lowercase.` 가 떨어짐 | 2개 추가 |
| D7P8 | not mandatory 가 떨어짐 | 추가 |
| D6P7 | 허용 답 `Run the command below this.` 가 어색한 영어 | 삭제, `Run the next command.` 추가 |
| D8P7 | 허용 답 `Backup your files first.` — backup 은 명사, 동사는 back up(레슨 terms 와 충돌) | 삭제, `First, back up the files.` 추가 |
| D9 (3쪽 ex) | `Let's start\|by importing the module.` 에 roles `V M` — 축약형(Let's = let us)은 roles 빼는 규칙 | roles 삭제 |
| D9P7 | 관사 없는 `Once installation is complete, …` 가 떨어짐 | 추가 |
| D5P8 | `Build has failed.` 가 떨어짐 | 추가 |
| DB1P6 | We have to install the yaml … / We should … 가 떨어짐 | 2개 추가 |
| DB2P6 | `I followed the install guide, and it works now.` 가 떨어짐 | 추가 |
| D11 (2쪽) | 재현 순서 예문 `Enter an empty name.` 이 어색하고, 순서가 Click Save → Enter 로 뒤바뀜 | `Leave the name field empty.`(V O C, 「이름 칸을 비워 두세요」)로 바꾸고 Go to → Leave → Click 순서로, html 의 번호 예시도 맞춤 |
| D11 (3쪽 ex) | `The app\|freezes\|and nothing happens.` 의 and nothing happens 를 M 한 덩어리로 | `The app\|freezes\|and\|nothing\|happens.` + `S V J S V` |
| D13 (1쪽 ex) | `What do you think about\|…` 에 Q 한 글자 — 덩어리 안에 Q·S·V 가 섞인 합성 | roles 삭제 |
| D13P8 | `Good catch! Fixed it in the latest commit.` 이 떨어짐 | 추가 |
| D12P8 | `Could you please review this pull request?` 가 떨어짐 | 추가 |
| D10P8 | `Delete the unused imports` 가 떨어짐 | 추가 |
| D14 (1쪽 html) | work on 이 「개발자가 가장 많이 쓰는 동사」 — 근거 없는 단정 | 「아주 자주 쓰는 표현」 |
| D14 (2·3쪽 ex) | `I'll`, `I'm going to…`, `I'm blocked by…`, `I'm waiting for…` 에 roles — 축약형 규칙 위반 | 4개 모두 roles 삭제 (덩어리 경계는 유지) |

## 질문
1. D4 `Expected 2 values, got 3.` 은 파이썬 3.12 문구가 아니라 여러 도구에서 보는 일반형이에요. note 로 실제 문구를 알려 두었는데, 아예 실제 문구 `ValueError: too many values to unpack (expected 2)` 를 예문으로 바꾸고 D4P5(order) 문제도 그걸로 바꿀지 정해 주세요.
2. D8P7 에서 `Backup your files first.` 를 정답에서 뺐어요. 실무에서 흔히 쓰이긴 해서, 「틀렸다」 대신 정답으로 받아 주는 편이 낫다고 보시면 되돌릴게요.
