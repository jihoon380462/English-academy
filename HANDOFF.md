# HANDOFF — 다음 작업 세션 인수인계

> 새 채팅에서 이 파일을 먼저 읽고, 다음으로 `SPEC.md`(기획서) → `specs/workflow.md`(권한·브랜치 규칙)를 읽어요.
> 사용자(jihoon380462)는 한국어로 대화하고, 화면 스크린샷으로 "이거 고쳐" 식 피드백을 줘요.

## 0. 상태판 (배포할 때마다 갱신 — 작업 규칙)

| 항목 | 내용 |
| --- | --- |
| **현재 버전** | v0.0.1 (2026-11-03) |
| **마지막 작업** | (Opus) 저장소 첫 커밋 — 기획서 `SPEC.md` v0.1, 운영 문서(HANDOFF·CHANGELOG·specs/workflow.md), 준비 중 페이지 `index.html`, Pages 배포 워크플로. 파이썬 아카데미 허브의 "영어 아카데미로 가기" 버튼은 **보류**(사용자 11/3 — 추가하지 않음, SPEC 10절). |
| **다음 후보** | ① 사용자: SPEC.md 9절 「결정 필요」 D1~D8 확인(추천안이 기본값) ② **Phase 0 뼈대**(Fable 권장 — 파이썬 core 복사·접두사 교체·speech.js·카드 UI·Grader, SPEC 8절) ③ 기초 코스 챕터 0~1 콘텐츠 초안(Opus 콘텐츠, Phase 0 뒤) |

## 1. 이게 뭔가
- 기획서 `SPEC.md` 1~3절 참고. 가장 중요한 가치: **무료 교육**(레슨·문제를 돈 받지 않고 제공).
- 라이브 주소: https://jihoon380462.github.io/English-academy/
- 저장소: `github.com/jihoon380462/English-academy` (public)

## 2. 작업 방법
1. `git fetch origin && git reset --hard origin/main` 으로 최신화.
2. 권한은 `specs/workflow.md` 1절 표대로(모델 이름을 보고 바로 판단, 사용자에게 묻지 않음).
3. 배포하는 커밋에는 이 파일 0절 상태판 + `CHANGELOG.md` 새 항목을 같은 커밋에.
4. 버전은 `index.html` 푸터(Phase 0 부터는 `core/config.js` 의 `APP_VERSION`)로 사용자가 반영 여부를 확인해요. 배포 후 "vX.Y.Z 배포 완료, Ctrl+F5" 안내.

## 3. 주의 — 파이썬 아카데미와 같은 출처
- 두 사이트 모두 `jihoon380462.github.io` 라서 **localStorage 와 캐시 저장소가 공유돼요.** 저장 키는 `eng.*`, 서비스 워커 캐시는 `english-shell-*` 로(SPEC 6절). `academy.*` 키와 `academy-shell-*` 캐시는 파이썬 아카데미 것이니 절대 건드리지 않아요.

## 4. 사용자의 작업 선호 (지켜야 함)
- 한 단계 끝나면 **"다음으로 할 수 있는 선택지 목록"**을 번호로 제시(열린 질문 금지).
- 설정을 바꾸라고 할 때는 **어느 화면 → 어느 섹션 → 어느 칸**까지.
- 오래 걸리는 작업은 진행률 % 표시.
- 반복되는 수동 절차를 싫어함 → 자동화해서 링크 하나로.
- 답변은 짧게, 결과 먼저.
