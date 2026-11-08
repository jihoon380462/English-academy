# HANDOFF — 다음 작업 세션 인수인계

> 새 채팅에서 이 파일을 먼저 읽고, 다음으로 `SPEC.md`(기획서) → `specs/workflow.md`(권한·브랜치 규칙)를 읽어요.
> 사용자(jihoon380462)는 한국어로 대화하고, 화면 스크린샷으로 "이거 고쳐" 식 피드백을 줘요.

## 0. 상태판 (배포할 때마다 갱신 — 작업 규칙)

| 항목 | 내용 |
| --- | --- |
| **현재 버전** | v0.6.0 (2026-11-08) |
| **마지막 작업** | (Opus) **v0.6.0 🔗 바꿔 말하기 사슬** — 조합 말하기에서 문장을 맞게 만들면 「🔗 이 문장 바꿔 말하기」: 내가 만든 문장을 부정→질문→과거→과거 부정→과거 질문→미래→진행으로 하나씩 스스로 바꿔 씀(정답 숨김·문법 설명 접어 둠·맞는 문장 보기/건너뛰기는 점수 제외·전부 맞히면 사슬 완성, 뱃지 2개). 진행형 표에서 상태 동사 제외. 그 전 **v0.5.1** 조합 말하기 — 「내가 만든 문장」 개수 표시 삭제, 문법마다 **마지막 학습 날짜**(오늘·어제·N일 전) + 홈 「마지막으로 한 문법 ▶ 이어서 하기」·📍. 그 전 **v0.5.0 🧩 조합 말하기**: 문법 17개, 그 문법 칸만 있는 **원형 낱말 표**(열 = 성분, 행 = 무작위) + 문법 설명만 → 학습자가 스스로 칸을 골라 활용해 문장을 씀. 채점 = 쓴 문장에서 고른 칸을 알아내 그 조합의 맞는 문장과 비교, 틀리면 「✏️ 고칠 곳」(이유만, 바른 모양은 「맞는 문장 보기」), 음성은 뺌. 그 전 v0.4.0 📖 단어장(7레벨 1,204단어), v0.3.0 새 코스 5개 등. 전체 **13개 코스·공간**(코스 10 + 덱·단어장·조합 말하기). 자세히는 CHANGELOG. |
| **방향(사용자 결정)** | **「스스로 만들기(create) > 보고 따라 하기(repeat)」** — `specs/create-first.md`. 지금 문제의 58%가 보고 고르기라서, 새 기능은 만들기 위주로. 「나만 쓸 거라 과감하게」(11/6). |
| **다음 후보** (11/7 제시, ①은 v0.6.0 에서 완료) | 조합 말하기 확장: ~~① 바꿔 말하기 사슬~~ ✅ ② **시제 섞인 표**(「언제」 칸 시간 말을 보고 시제를 스스로 판단) ③ **내 약점 노트**(자주 틀리는 규칙 모음) ④ 내 낱말 넣기 ⑤ 문장 잇기(and·but·because) ⑥ 문법 늘리기(현재완료·비교급·Wh 질문) ⑦ 오늘 할 문법(간격 복습) ⑧ 기존 코스에 거꾸로 사다리 ⑨ 표 낱말을 단어장 레벨과 연결 — **추천 순서 2 → 3**. 그 밖: `QUESTIONS.md` 17개 답변 대기(지금은 ★ 기본값), 실기기 확인, 그림(IMAGES.md). |

## 1. 이게 뭔가
- 기획서 `SPEC.md` 1~3절 참고. 가장 중요한 가치: **무료 교육**(레슨·문제를 돈 받지 않고 제공).
- 라이브 주소: https://jihoon380462.github.io/English-academy/
- 저장소: `github.com/jihoon380462/English-academy` (public)

## 2. 작업 방법
1. `git fetch origin && git reset --hard origin/main` 으로 최신화.
2. 권한: 영어 아카데미는 **Opus 가 전부**(설계·core·콘텐츠·배포) — `specs/workflow.md` 1절.
3. 배포하는 커밋에는 이 파일 0절 상태판 + `CHANGELOG.md` 새 항목을 같은 커밋에.
4. 버전은 `core/config.js` 의 `APP_VERSION`(허브·설정 맨 아래 표시)로 사용자가 반영 여부를 확인해요. 올린 뒤 `node tools/stamp.mjs`. 배포 후 "vX.Y.Z 배포 완료, Ctrl+F5" 안내.
5. 파일 지도: `core/config.js`(버전·코스 목록·성분 색·수치) · `util.js` · `grader.js`(채점, Node 겸용) · `content.js`(인덱스) · `storage.js`(eng.*) · `anki.js`(스케줄러) · `game.js`(XP·뱃지·Cards·Review) · `fx.js`(효과음·색종이·부엉이 마스코트) · `speech.js` · `ui.js`(라우터·모달·🔊) · `cards.js`(문제 유형 10종 화면) · `views.js`(지도·레슨·문제·복습·뱃지·설정) · `deck.js`(문장 수집·대기열) · `deck-views.js`(덱 페이지 전용) · `words-views.js`(단어장 페이지 전용: 레벨·Anki 단어 카드·퀴즈) · `combo.js`(조합 말하기 엔진: 문법 패턴·활용·칸 알아보기·채점·바꿔 말하기 사슬 `Combo.chain`, DOM 없음) · `combo-views.js`(조합 말하기 페이지) · `hub.js` · `boot.js` · `ui.css`. 공유 데이터 `shared/`(contractions·mistakes·badges). 코스 `courses/<id>/{index.html,content.js}` — **스키마는 `courses/basic/content.js` 맨 위 주석**, 덱은 `courses/deck/content.js` 주석, 단어장은 `courses/words/content.js` 주석 + `specs/words-brief.md`, 조합 말하기 낱말은 `courses/combo/content.js`(COMBO_LEX, 주석에 목록 설명) · 문법 패턴은 `core/combo.js` 의 `COMBO_PATTERNS`(열·문법 설명·make()). 문법을 더하면 `tools/check_combo.mjs` 의 흔한 실수 목록도 같이.
6. 검증: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs && node tools/check_combo.mjs && python3 tools/regress.py` (CI `pages.yml` 도 validate·check_answers·check_combo 를 통과해야 배포) (regress = 헤드리스 크롬, 정답 보기로 전 문제 통과, `--shots 폴더` 로 스크린샷).
7. **직접 플레이 QA**: `python3 tools/play.py [--course id] [--extras] [--shots 폴더] [--font 3] [--theme light] [--width 390] [--words]` — 사람처럼 카드 클릭·입력·보기 선택으로 풀고, 일부러 틀려 보고, 🔊·🐢·낱말 소리, 가로 넘침·고정 바 가림, Anki 공부·되돌리기·그만 보기, 타임어택, 허브, 실력 확인, 새로고침 저장까지 확인. `--words` = 단어장(7레벨 화면·퀴즈·철자 카드·되돌리기·그만 보기). `--combo` = 조합 말하기(17문법 표·채점 흐름·바꿔 말하기 사슬). **배포 전에 반드시**(사용자 선호: QA 먼저, 다방면으로).
8. 배포 전 작업 저장: Stop 훅이 커밋·푸시를 요구하면 **배포 안 되는 브랜치 `backup/vX.Y-wip`** 에 올리고, QA 통과 뒤 main 에 푸시(빨리 감기). 원격에 남은 `backup/v0.3~0.5-wip`·`wip/phase1-content` 는 지워도 되는 옛 브랜치(여기 프록시에서는 브랜치 삭제가 막혀 있음).
9. 콘텐츠를 에이전트에게 맡길 때: `specs/agent-brief.md`(공통 안내·함정) + `specs/content-guide.md`(품질) + 검수는 `specs/qa-checklist.md`. 검수 기록은 `qa/<코스>.md`(질문 절 포함). `core/meta.js` 는 stamp 가 만드는 파일(허브의 코스별 문제 수·오늘의 문장).

## 3. 주의 — 파이썬 아카데미와 같은 출처
- 두 사이트 모두 `jihoon380462.github.io` 라서 **localStorage 와 캐시 저장소가 공유돼요.** 저장 키는 `eng.*`, 서비스 워커 캐시는 `english-shell-*` 로(SPEC 6절). `academy.*` 키와 `academy-shell-*` 캐시는 파이썬 아카데미 것이니 절대 건드리지 않아요.

## 4. 사용자의 작업 선호 (지켜야 함)
- 한 단계 끝나면 **"다음으로 할 수 있는 선택지 목록"**을 번호로 제시(열린 질문 금지).
- 설정을 바꾸라고 할 때는 **어느 화면 → 어느 섹션 → 어느 칸**까지.
- 오래 걸리는 작업은 진행률 % 표시.
- 반복되는 수동 절차를 싫어함 → 자동화해서 링크 하나로.
- 답변은 짧게, 결과 먼저. **항상 한국어로**(영어로 답했다가 크게 화낸 적 있음).
- **배포 전에 QA**(검사기 + 직접 플레이 봇, 폰 390·320px·밝은 넓은 화면) — 문제를 일일이 설명하게 하지 않기.
- 학습 설계 원칙: **스스로 만들기**가 가장 중요. 정답을 먼저 보여 주거나 고르게 하는 방식보다, 빈칸에서 직접 만들고 틀리면 이유만 알려 주기. 문장 위주(단어만 따로 외우기보다), 복습은 Anki 방식.
