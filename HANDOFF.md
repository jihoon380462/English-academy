# HANDOFF — 다음 작업 세션 인수인계

> 새 채팅에서 이 파일을 먼저 읽고, 다음으로 `SPEC.md`(기획서) → `specs/workflow.md`(권한·브랜치 규칙)를 읽어요.
> 사용자(jihoon380462)는 한국어로 대화하고, 화면 스크린샷으로 "이거 고쳐" 식 피드백을 줘요.

## 0. 상태판 (배포할 때마다 갱신 — 작업 규칙)

| 항목 | 내용 |
| --- | --- |
| **현재 버전** | v0.2.0 (2026-11-03) |
| **마지막 작업** | (Opus) **전 코스 1차 완성** — 기초(8챕터·44레슨·387문제), 듣기·말하기(3챕터·15레슨·131), 문법 더 깊게(4챕터·22레슨·194), 읽기(3챕터·15레슨·124), 개발자 영어(3챕터·17레슨·145) = **981문제·113레슨**, 🃏 문장 덱 9개 403문장(Anki). 기기 연동(파이썬 연동 자동 이어받기), 실력 확인(배치 테스트), 채점 보강(어미 -s/-ed 는 오타로 안 봐줌, 흔한 실수 규칙 오탐 수정), IMAGES.md 1차 요청서. 검증: validate·check_answers 1399건·regress(전 문제 자동 풀이, 폰/PC·다크/라이트) FAILS 0. 이 사이트는 **Opus 가 main 에 바로 배포**. |
| **다음 후보** | ① 사용자 실사용 피드백(스크린샷) 반영 ② 말하기·발음: 실제 기기(크롬 안드로이드·아이폰 사파리) 확인 ③ 아트 1차(IMAGES.md) ④ 문장 덱 확장(주제 추가, 레벨별) ⑤ 쓰기 코스(SPEC 3-1 write) ⑥ 선생님(Claude 첨삭) 켜기 검토(SPEC D7) |

## 1. 이게 뭔가
- 기획서 `SPEC.md` 1~3절 참고. 가장 중요한 가치: **무료 교육**(레슨·문제를 돈 받지 않고 제공).
- 라이브 주소: https://jihoon380462.github.io/English-academy/
- 저장소: `github.com/jihoon380462/English-academy` (public)

## 2. 작업 방법
1. `git fetch origin && git reset --hard origin/main` 으로 최신화.
2. 권한: 영어 아카데미는 **Opus 가 전부**(설계·core·콘텐츠·배포) — `specs/workflow.md` 1절.
3. 배포하는 커밋에는 이 파일 0절 상태판 + `CHANGELOG.md` 새 항목을 같은 커밋에.
4. 버전은 `core/config.js` 의 `APP_VERSION`(허브·설정 맨 아래 표시)로 사용자가 반영 여부를 확인해요. 올린 뒤 `node tools/stamp.mjs`. 배포 후 "vX.Y.Z 배포 완료, Ctrl+F5" 안내.
5. 파일 지도: `core/config.js`(버전·코스 목록·성분 색·수치) · `util.js` · `grader.js`(채점, Node 겸용) · `content.js`(인덱스) · `storage.js`(eng.*) · `anki.js`(스케줄러) · `game.js`(XP·뱃지·Cards·Review) · `fx.js`(효과음·색종이·부엉이 마스코트) · `speech.js` · `ui.js`(라우터·모달·🔊) · `cards.js`(문제 유형 10종 화면) · `views.js`(지도·레슨·문제·복습·뱃지·설정) · `deck.js`(문장 수집·대기열) · `deck-views.js`(덱 페이지 전용) · `hub.js` · `boot.js` · `ui.css`. 공유 데이터 `shared/`(contractions·mistakes·badges). 코스 `courses/<id>/{index.html,content.js}` — **스키마는 `courses/basic/content.js` 맨 위 주석**, 덱은 `courses/deck/content.js` 주석.
6. 검증: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs && python3 tools/regress.py` (regress = 헤드리스 크롬, `--shots 폴더` 로 스크린샷).

## 3. 주의 — 파이썬 아카데미와 같은 출처
- 두 사이트 모두 `jihoon380462.github.io` 라서 **localStorage 와 캐시 저장소가 공유돼요.** 저장 키는 `eng.*`, 서비스 워커 캐시는 `english-shell-*` 로(SPEC 6절). `academy.*` 키와 `academy-shell-*` 캐시는 파이썬 아카데미 것이니 절대 건드리지 않아요.

## 4. 사용자의 작업 선호 (지켜야 함)
- 한 단계 끝나면 **"다음으로 할 수 있는 선택지 목록"**을 번호로 제시(열린 질문 금지).
- 설정을 바꾸라고 할 때는 **어느 화면 → 어느 섹션 → 어느 칸**까지.
- 오래 걸리는 작업은 진행률 % 표시.
- 반복되는 수동 절차를 싫어함 → 자동화해서 링크 하나로.
- 답변은 짧게, 결과 먼저.
