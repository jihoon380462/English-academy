# 작업 분담 규칙 — Fable / Opus (파이썬 아카데미 `specs/workflow.md` 차용)

개발 세션은 시작할 때 이 파일을 HANDOFF.md·SPEC.md 다음으로 읽어요.

## 1. 모델별 권한 (고정 — 묻지 않는다)

| | Opus | Fable |
| --- | --- | --- |
| 콘텐츠: `courses/*/content.js` 레슨·문제·힌트, 단어 데이터, `shared/` 문구, `IMAGES.md` | ✅ | ✅ |
| 문서: `SPEC.md`·`specs/`·HANDOFF·CHANGELOG | ✅ | ✅ |
| 피드백 패치(스크린샷) | ✅ | ✅ |
| `core/` 수정 — 지시서(SPEC.md·specs/)에 **파일과 단계가 적힌 것** | ✅ 커밋에 `[core]` | ✅ |
| `core/` 새 설계(새 문제 type·음성 엔진·저장 스키마 변경·Phase 0 뼈대) | ❌ 멈추고 "Fable 작업"이라고 알림 | ✅ |
| **배포(main 푸시·PR 병합·버전 올림·HANDOFF 상태판)** | ❌ 브랜치에 올리고 PR까지 | ✅ Fable 또는 사용자 |

예외: 저장소 첫 커밋(v0.0.1, 문서·준비 중 페이지만)은 빈 저장소를 여는 작업이라 Opus 가 main 에 직접 올렸어요. Phase 0 부터는 위 표대로.

## 2. 브랜치·PR

1. 브랜치 이름: `content/<과제>`, `fix/<주제>`, `core/<주제>`, `art/<차수>`. 시작: `git fetch origin && git switch -c <브랜치> origin/main`.
2. `APP_VERSION`·HTML `?v=`·HANDOFF 상태판은 손대지 않아요. CHANGELOG 는 `## 미배포` 아래에 항목만.
3. `git push -u origin <브랜치>` → `gh pr create --base main --fill`. 본문에 바뀐 것·확인한 화면·검증 결과.
4. 병합·릴리스(Fable/사용자): PR 병합 → main 에서 릴리스 커밋 한 번(버전 올림 → CHANGELOG 머리글 → 상태판) → 푸시 → 배포 확인.

## 3. 검증 게이트 (Phase 0 에서 추가)

`node tools/validate_content.mjs && node tools/check_answers.mjs` — Actions 의 `verify` 잡이 같은 명령을 돌리고, 통과해야 배포돼요.

## 4. 브랜치 보호 (사용자가 GitHub 에서 한 번 — Phase 0 배포 뒤 권장)

저장소 페이지 → **Settings** 탭 → 왼쪽 **Branches** → **Add classic branch protection rule** → Branch name pattern 칸에 `main` → **Require a pull request before merging** 체크(승인 수 0 이어도 됨) → **Require status checks to pass before merging** 체크 → 검색창에 `verify` 입력해 선택 → **Create**.
