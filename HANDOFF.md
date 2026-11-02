# HANDOFF — 다음 작업 세션 인수인계

> 새 채팅에서 이 파일을 먼저 읽고, 다음으로 `SPEC.md`(기획서) → `specs/workflow.md`(권한·브랜치 규칙)를 읽어요.
> 사용자(jihoon380462)는 한국어로 대화하고, 화면 스크린샷으로 "이거 고쳐" 식 피드백을 줘요.

## 0. 상태판 (배포할 때마다 갱신 — 작업 규칙)

| 항목 | 내용 |
| --- | --- |
| **현재 버전** | v0.1.0 (2026-11-03) |
| **마지막 작업** | (Opus) **Phase 0 뼈대** — 허브, 코스 페이지(지도·레슨·문제·복습·뱃지·설정), 문제 유형 10종(choice·listen·match·build·order·fill·fix·type·dictation·speak), 채점기(축약형·오타 1개·낱말 비교·흔한 실수 22규칙), 음성(브라우저 TTS·음성 인식·녹음 폴백), **Anki 스케줄러 + 🃏 문장 덱**(레슨 예문 자동 수집, 4버튼, 학습 단계·ease·lapse·하루 새 카드·형제 숨기기·단축키), 오프라인 캐시, 검증 3종(validate·check_answers·regress) + 배포 게이트. 샘플 레슨 E1 1개. 사용자 결정 11/3: **문장 위주 · 복습은 Anki · 영어 사이트는 Opus 가 전부**. |
| **다음 후보** | ① Phase 1: 기초 코스 챕터 1~6 전체 + 보스, 기본 문장 덱 ② Phase 2: 듣기·말하기 코스 ③ Phase 3·4: 문법·읽기·개발자 영어 ④ 아트 요청서(IMAGES.md) |

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
