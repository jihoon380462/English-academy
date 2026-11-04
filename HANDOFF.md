# HANDOFF — 다음 작업 세션 인수인계

> 새 채팅에서 이 파일을 먼저 읽고, 다음으로 `SPEC.md`(기획서) → `specs/workflow.md`(권한·브랜치 규칙)를 읽어요.
> 사용자(jihoon380462)는 한국어로 대화하고, 화면 스크린샷으로 "이거 고쳐" 식 피드백을 줘요.

## 0. 상태판 (배포할 때마다 갱신 — 작업 규칙)

| 항목 | 내용 |
| --- | --- |
| **현재 버전** | v0.4.0 (2026-11-04) |
| **마지막 작업** | (Opus) **v0.4.0 📖 단어장** — 미국 나이·학년별 필수 단어 7레벨 1,203단어(미취학 그림책 단어 ~ 고등학생 어휘, Dolch 뼈대), 단어마다 예문, Anki 단어 카드(뜻·철자), 레벨 퀴즈. QA: 레벨별 독립 검수 + 검사기 단어장 검사 + `play.py --words`. 그 전(v0.3.0): 새 코스 5개·덱 803문장·자유 쓰기 등. 전체 12개 코스·공간. 자세히는 CHANGELOG. |
| **다음 후보** | ① **사용자 답변 대기: `QUESTIONS.md` 14개**(발음 기준·교재식 vs 구어·번역 말투 등 — 지금은 추천 기본값) ② 실기기 음성(크롬 안드로이드·아이폰 사파리) 확인 ③ 그림(IMAGES.md) ④ 콘텐츠 2회차 QA(플레이 봇 결과·사용자 피드백 기반) ⑤ 다른 코스에도 자유 쓰기 늘리기 ⑥ 단어장: 레벨 단어로 문장 덱 만들기·단어 그림 |

## 1. 이게 뭔가
- 기획서 `SPEC.md` 1~3절 참고. 가장 중요한 가치: **무료 교육**(레슨·문제를 돈 받지 않고 제공).
- 라이브 주소: https://jihoon380462.github.io/English-academy/
- 저장소: `github.com/jihoon380462/English-academy` (public)

## 2. 작업 방법
1. `git fetch origin && git reset --hard origin/main` 으로 최신화.
2. 권한: 영어 아카데미는 **Opus 가 전부**(설계·core·콘텐츠·배포) — `specs/workflow.md` 1절.
3. 배포하는 커밋에는 이 파일 0절 상태판 + `CHANGELOG.md` 새 항목을 같은 커밋에.
4. 버전은 `core/config.js` 의 `APP_VERSION`(허브·설정 맨 아래 표시)로 사용자가 반영 여부를 확인해요. 올린 뒤 `node tools/stamp.mjs`. 배포 후 "vX.Y.Z 배포 완료, Ctrl+F5" 안내.
5. 파일 지도: `core/config.js`(버전·코스 목록·성분 색·수치) · `util.js` · `grader.js`(채점, Node 겸용) · `content.js`(인덱스) · `storage.js`(eng.*) · `anki.js`(스케줄러) · `game.js`(XP·뱃지·Cards·Review) · `fx.js`(효과음·색종이·부엉이 마스코트) · `speech.js` · `ui.js`(라우터·모달·🔊) · `cards.js`(문제 유형 10종 화면) · `views.js`(지도·레슨·문제·복습·뱃지·설정) · `deck.js`(문장 수집·대기열) · `deck-views.js`(덱 페이지 전용) · `words-views.js`(단어장 페이지 전용: 레벨·Anki 단어 카드·퀴즈) · `hub.js` · `boot.js` · `ui.css`. 공유 데이터 `shared/`(contractions·mistakes·badges). 코스 `courses/<id>/{index.html,content.js}` — **스키마는 `courses/basic/content.js` 맨 위 주석**, 덱은 `courses/deck/content.js` 주석, 단어장은 `courses/words/content.js` 주석 + `specs/words-brief.md`.
6. 검증: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs && python3 tools/regress.py` (regress = 헤드리스 크롬, 정답 보기로 전 문제 통과, `--shots 폴더` 로 스크린샷).
7. **직접 플레이 QA**: `python3 tools/play.py [--course id] [--extras] [--shots 폴더] [--font 3] [--theme light] [--width 390] [--words]` — 사람처럼 카드 클릭·입력·보기 선택으로 풀고, 일부러 틀려 보고, 🔊·🐢·낱말 소리, 가로 넘침·고정 바 가림, Anki 공부·되돌리기·그만 보기, 타임어택, 허브, 실력 확인, 새로고침 저장까지 확인. `--words` = 단어장(7레벨 화면·퀴즈·철자 카드·되돌리기·그만 보기). **배포 전에 반드시**(사용자 선호: QA 먼저, 다방면으로).
8. 콘텐츠를 에이전트에게 맡길 때: `specs/agent-brief.md`(공통 안내·함정) + `specs/content-guide.md`(품질) + 검수는 `specs/qa-checklist.md`. 검수 기록은 `qa/<코스>.md`(질문 절 포함). `core/meta.js` 는 stamp 가 만드는 파일(허브의 코스별 문제 수·오늘의 문장).

## 3. 주의 — 파이썬 아카데미와 같은 출처
- 두 사이트 모두 `jihoon380462.github.io` 라서 **localStorage 와 캐시 저장소가 공유돼요.** 저장 키는 `eng.*`, 서비스 워커 캐시는 `english-shell-*` 로(SPEC 6절). `academy.*` 키와 `academy-shell-*` 캐시는 파이썬 아카데미 것이니 절대 건드리지 않아요.

## 4. 사용자의 작업 선호 (지켜야 함)
- 한 단계 끝나면 **"다음으로 할 수 있는 선택지 목록"**을 번호로 제시(열린 질문 금지).
- 설정을 바꾸라고 할 때는 **어느 화면 → 어느 섹션 → 어느 칸**까지.
- 오래 걸리는 작업은 진행률 % 표시.
- 반복되는 수동 절차를 싫어함 → 자동화해서 링크 하나로.
- 답변은 짧게, 결과 먼저.
