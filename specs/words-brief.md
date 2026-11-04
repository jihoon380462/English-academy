# 단어장 작업 안내 (먼저 읽기)

저장소 /home/claude/english-academy — 한국인 성인을 위한 무료 영어 사이트. 새 공간 「📖 단어장」: **미국 아이가 그 나이·학년에 읽는 글에 꼭 나오는 단어**를 레벨별로. 사용자 요청: 「미국 기준 나이별 필수 단어로 나눠서. 예를 들어 미취학 아동은 동화책을 읽을 때 필요한 단어 같은 느낌」.

1. 스키마: `courses/words/content.js` 맨 위 주석 (반드시 따름). 레벨 하나 = parts 파일 하나 `WORD_LEVELS.push({...})`.
2. 공통 함정·검사: `specs/agent-brief.md` 의 「채점기」「함정」「파일 규칙」 절도 읽기.

## 품질 기준
- **예문이 핵심**(사용자 결정: 문장 위주). 낱말마다 그 나이 아이가 읽는 글 느낌의 짧고 자연스러운 예문 1개:
  - 미취학: 그림책·동화책 한 줄 (The little bear is big. / "Come here!" said Mom.) — 3~7낱말, 아주 쉬운 낱말만
  - K–1: 쉬운 읽기책·교실 (We go to school in the morning.)
  - 2~3학년: 읽기책·챕터북 첫걸음, 교실·자연·가족
  - 4~5학년: 챕터북·과학·사회 교과 (Plants need sunlight to grow.)
  - 6~8학년: 교과서·설명문·논설 (The evidence supports her conclusion.)
  - 9~12학년: 문학·논설·시사 (His argument was persuasive but flawed.)
- 예문은 전부 **직접 지은 문장**(책·교재 문장 복사 금지, 실존 인물·브랜드 금지). 예문 안에 낱말(또는 `forms` 에 적은 변화형)이 꼭 들어가야 해요(검사함).
- `ko` = 이 예문에서 쓰인 뜻 먼저, 정확하게(학습자 한국어 수준: 성인). `exko` = 예문 한국어 뜻(해요체, 동화 예문도 자연스러운 한국어).
- 기능어(the, of, to, a, and …)는 뜻을 억지로 한 낱말로 쓰지 말고 쓰임을 짧게: `the` → 「그 (정해진 것 앞에)」, `to` → 「~(으)로; ~하려고」. 필요하면 note 에 한 줄.
- 같은 레벨 안에서 같은 낱말·품사 두 번 금지. **아래 레벨에 이미 나온 단어는 위 레벨에 다시 넣지 않기**(다의어로 새 뜻을 가르칠 때만, note 에 「새 뜻」).
- 묶음(groups)은 학습하기 좋게: Dolch 단계·주제(동물·가족·학교·자연·감정·시간·과학·사회…)·품사.

## 레벨과 분량 (id 접두사)
| 레벨 id | 파일 | icon | title | age | grade | 분량 | 뼈대 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| prek | parts/w1-prek.js | 🧸 | 미취학 | 만 3~5세 | Pre-K | 약 150 | Dolch pre-primer 40 + primer 52 + 그림책 명사(동물·가족·몸·색·음식·집·숫자) |
| k1 | parts/w2-k1.js | 🎒 | 유치원·1학년 | 만 5~7세 | K–1 | 약 150 | Dolch 1학년 41 + Dolch 명사 절반 + 기초 동사·형용사 |
| g2 | parts/w3-g2.js | ✏️ | 2학년 | 만 7~8세 | Grade 2 | 약 150 | Dolch 2학년 46 + Dolch 명사 나머지 + 읽기책 단어 |
| g3 | parts/w4-g3.js | 📘 | 3학년 | 만 8~9세 | Grade 3 | 약 150 | Dolch 3학년 41 + 챕터북·교실·감정·시간 |
| g45 | parts/w5-g45.js | 🔬 | 4~5학년 | 만 9~11세 | Grades 4–5 | 약 180 | 과학·사회·문학(인물 성격·감정)·교실 지시어 |
| g68 | parts/w6-g68.js | 🧭 | 중학생 | 만 11~14세 | Grades 6–8 | 약 200 | 교과 공통 학술 어휘(analyze, evidence…)·과학·역사·문학 |
| g912 | parts/w7-g912.js | 🎓 | 고등학생 | 만 14~18세 | Grades 9–12 | 약 200 | 고급 학술·문학·논설·시사 어휘 |

`order` 는 1~7. desc 예: 「그림책·동화책을 읽을 때 꼭 나오는 단어」.

## 검사 (FAILS 0 까지)
```
cd /home/claude/english-academy && node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs
```
(흔한 실수 규칙이 예문에 걸리면 예문을 바꿔요.) 맡은 parts 파일만 만들고 고쳐요. git 금지. 최종 보고는 한국어로 짧게(레벨별 낱말 수, 해결 못 한 것).
