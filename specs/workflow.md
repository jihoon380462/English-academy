# 작업 규칙 (파이썬 아카데미 `specs/workflow.md` 차용, 영어 아카데미용으로 고침)

개발 세션은 시작할 때 이 파일을 HANDOFF.md·SPEC.md 다음으로 읽어요.

## 1. 권한 — 영어 아카데미는 Opus 가 전부 맡아요 (사용자 결정 2026-11-03)

파이썬 아카데미와 달리, 영어 아카데미는 **Opus 세션이 설계·`core/`·콘텐츠·배포(main 푸시·버전 올림·HANDOFF 상태판)까지 전부** 해요. Fable 검토 대기 없음.
- 배포 전 검증 게이트(3절)는 반드시 통과시켜요. 화면을 바꿨으면 `python3 tools/regress.py`(헤드리스 크롬)도.
- 여러 채팅이 동시에 일할 때만 2절 브랜치·PR 규칙을 써요(같은 파일 충돌 방지). 혼자 일하는 세션은 main 에 바로 올려도 돼요.

## 2. 브랜치·PR

1. 브랜치 이름: `content/<과제>`, `fix/<주제>`, `core/<주제>`, `art/<차수>`. 시작: `git fetch origin && git switch -c <브랜치> origin/main`.
2. `APP_VERSION`·HTML `?v=`·HANDOFF 상태판은 손대지 않아요. CHANGELOG 는 `## 미배포` 아래에 항목만.
3. `git push -u origin <브랜치>` → `gh pr create --base main --fill`. 본문에 바뀐 것·확인한 화면·검증 결과.
4. 병합·릴리스(Opus 메인 세션): PR 병합 → main 에서 릴리스 커밋 한 번(버전 올림 → CHANGELOG 머리글 → 상태판) → 푸시 → 배포 확인.

## 3. 검증 게이트 (Phase 0 에서 추가)

`node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs && python3 tools/regress.py` — Actions 의 `verify` 잡이 가운데 두 검사를 돌리고, 통과해야 배포돼요.

## 4. 브랜치 보호

켜지 않아요 — Opus 가 main 에 바로 배포하는 방식이라 PR 필수 규칙을 켜면 배포가 막혀요. 대신 Actions 의 `verify` 잡이 실패하면 배포되지 않아요.
