# 콘텐츠 작업 에이전트 공통 안내 (먼저 읽기)

저장소: /home/claude/english-academy — 한국인 성인(영어 손 놓은 왕초보~중급)을 위한 무료 영어 학습 사이트. 화면·설명은 한국어 ~해요체, 예문은 영어.

## 먼저 읽을 것
1. `specs/content-guide.md` — 품질 기준(반드시 지킴)
2. `courses/basic/content.js` 맨 위 주석 — 레슨·문제 스키마 / `courses/deck/content.js` 주석 — 문장 덱 스키마
3. 형식 예시: `courses/basic/parts/c2.js`(일반 레슨+보스), `courses/deck/parts/d01-daily.js`(덱)

## 사용자 결정 (절대)
- **문장 위주**: 낱말 하나만 묻지 않기. 문제·예문·카드는 완전한 문장(또는 의미 있는 덩어리).
- 복습은 Anki 방식: 레슨 예문(ex, ko 있음)이 자동으로 문장 덱에 들어감 → 예문은 외울 가치 있는 자연스러운 문장.
- 예문·지문은 전부 직접 지은 것(교재·드라마·노래·기사 복사 금지). 실존 인물·브랜드 대신 평범한 이름(Mina, Tom, Jisoo…).

## 채점기 (v0.3.0 에서 바뀜 — 이제 이렇게 동작해요)
- 같게 봐요: 대소문자·쉼표·마침표, 축약형(I'm=I am, 아포스트로피 없는 im·dont·cant·thats 도), **'s = is 또는 has**, **'d = would 또는 had**, **숫자 낱말 = 숫자**(fifteen=15, seven thirty=7:30, twenty-five=25), ok=okay, 하이픈(round-trip=round trip).
- 오타 1개 봐주기(4글자 이상)는 그대로지만 **문법 낱말(what/that, never/ever, than/then, were/where …)과 같은 말의 다른 어미(closed/closes, woke/wake 는 아님)는 오타로 안 봐줘요.** 그래서 예전에 이 때문에 빼 둔 정답(예: G11P5·GB3P6 「the thing that I want」, K12P7 「I haven't ever been…」)은 이제 다시 넣어도 돼요.
- 흔한 실수 규칙을 좁혔어요: in 10 minutes·an hour·a user·will discuss·Yesterday I wanted to go 는 이제 안 걸려요.
- 새 문제 유형 **`free`(자유 쓰기)**: 정답이 하나가 아닌 「내 이야기 쓰기」. `{ type:'free', ko:'과제 설명', need:[['went','visited'], ['yesterday']], minWords:6, answer:['모범 문장…'] }` — need 의 묶음마다 하나 이상 들어 있고 minWords 이상이면 통과, 모범 문장을 보여 줘요. 학습자가 자기 하루·의견을 쓰는 문제(일기·자기소개·리뷰)는 type 대신 free 가 맞아요.

## 지난 작업에서 배운 함정 (꼭 피하기)
- **roles 는 덩어리마다 한 글자**(S V O C M J Q). `'Do you|like…'` + `'Q·S'` 같은 합성 금지 → `'Do|you|like|coffee?'` + `'Q S V O'`. **축약형 문장(I'm, It's, I'd like)은 roles 를 빼요**(주어+동사가 한 낱말이라 색을 못 나눔).
- **채점기는 4글자 이상 낱말의 오타 1개를 봐줘요**(단, -s/-es/-d/-ed 어미 차이는 안 봐줌). 그래서 `fix` 의 틀린 문장이 정답과 **한 글자 차이**면 틀린 문장이 정답으로 통과해 버려요(check_answers 가 잡음) — 틀린 곳이 낱말 하나의 한 글자면 다른 실수로 바꾸세요. 또 what↔that 처럼 한 글자 차이 낱말이 허용 답에 같이 있으면 안 돼요.
- `shared/mistakes.js` 의 흔한 실수 규칙이 **정답 문장**에 걸리면 check_answers 가 실패해요 → 문장을 바꿔요(규칙 파일은 고치지 말고 최종 보고에 적기).
- `type` 문제의 answer 에는 **학습자가 쓸 법한 자연스러운 다른 정답을 3~6개** 넣어요(어순·동의어·생략·축약 차이). 대소문자·쉼표·마침표·축약형(I'm=I am)은 채점기가 알아서 같게 봐요.
- `dictation` 에 숫자가 있으면 answer 에 숫자형과 글자형 둘 다(`at 7:30` / `at seven thirty`).
- `choice` 는 **정답이 정확히 하나**인지 확인(다른 보기도 맞을 수 있으면 바꾸기).
- id: 레슨 id 는 **코스 전체에서 이어서** 번호(챕터마다 1부터 다시 시작 금지), 문제 id = `<레슨id>P<번호>`. 모든 코스를 통틀어 겹치면 안 됨.
- 보스(상황 미션) 레슨은 `boss:true`, 그 문제도 전부 `boss:true`. 보스 없는 실전 챕터는 `CHAPTERS.push({ n, practice: true, ... })`.
- JS 문자열 안 따옴표: 작은따옴표 문자열 안의 `'` 는 `\'` 로, 또는 큰따옴표 문자열 사용.

## 파일 규칙
- 맡은 **조각 파일(parts/*.js)만** 새로 만들거나 고쳐요. 다른 파일(core/, shared/, 다른 코스, 다른 에이전트 파일) 수정 금지. git commit/push 금지.
- 조각 파일 형식: 첫 줄 주석, 그다음 `CHAPTERS.push({...});` `LESSONS.push(...);` `PROBLEMS.push(...);` (배열은 이미 있음). 덱은 `SENTENCE_DECKS.push({...});`
- 다른 에이전트가 동시에 다른 파일을 쓰고 있어요. 검사에서 **남의 파일 실패는 무시**하고 내 파일만 FAILS 0 으로.

## 검사 (끝내기 전에 반드시, FAILS 0 까지)
```
cd /home/claude/english-academy && node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs
```
학습자 답 시험(권장): 내가 쓴 type/fix 문제마다 학습자가 쓸 법한 다른 정답 2~3개를 아래처럼 채점해 보고, 떨어지면 answer 에 추가:
```
node -e "import('./tools/load_content.mjs').then(({load})=>{const C=load('코스id');const p=C.Content.problem('문제id');console.log(C.Grader.text('학습자 답', C.Content.answers(p)))})"
```

## 최종 보고
레슨·문제 수, 만든 파일, 해결 못 한 것(특히 shared 규칙이 너무 넓은 경우). 한국어로 짧게.
