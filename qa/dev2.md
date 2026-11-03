# QA — 개발자 영어(dev) 코스 · v4.js

검수 범위: 챕터 4 (D15~D18, DB4) 레슨 5개 · 문제 44개 전부.
포럼 질문(I'm trying to … / I expected … but … / I've tried -ing / 환경), 면접 자기소개·프로젝트 설명, 코드 설명(takes … and returns …, so that lookups are fast = dict 조회가 평균 O(1)이라 기술적으로 맞음, cache because the API is slow), AI 요청(명령문 + 조건 + 형식) — 영어 자연스러움·기술 사실 모두 확인. DB4P5 의 9 AM → 6 PM(9시간 차 = KST/UTC 혼동)도 그럴듯한 시나리오예요.
검사: `stamp → validate_content → check_answers` dev FAILS 0 · 경고 0. 학습자 답 시험 20건(변형 + 틀린 답 `under 20 line`, `it skip it` 이 떨어지는지) 전부 기대대로.

| id | 문제 | 고친 내용 |
|---|---|---|
| D15P5 | order 함정 카드 `reading` → 「I'm trying reading a CSV file」(try -ing 는 문법상 가능, G21 에서도 맞다고 가르침) | 함정을 한국인 흔한 실수 `try`(I'm try to read ✗)로, 둘째 힌트도 맞춤 |
| D15P6 | fix: I've tried restart … — `I've tried to restart the server, but it didn't help.` 는 원어민도 쓰는 맞는 문장인데 오답 처리 | tried to restart 2개 허용 + why 에 「try -ing 가 가장 딱 맞고 tried to 도 문법은 맞아요」 |
| D15P7 | type: 5가 나올 줄 알았는데 6 | … I got 6 instead / it gave me 6 추가 |
| D15P8 | type: 질문 제목 | 포럼 제목에 아주 흔한 `How to remove duplicates from a list?`, delete 추가 |
| D16P6 | fix: 요즘 리액트를 배우고 있어요 | These days, … / Lately, … studying 추가 |
| D16P7 | type: 3년 경력 백엔드 개발자 | with three years of work experience / I have three years of experience as … 추가 |
| D16P8 | type: 깔끔한 테스트 쓰는 법 | cleaner tests 추가 |
| D17P7 | type: 조회가 빠르도록 딕셔너리 | for faster lookups / I used a dict so lookups are fast 추가 |
| D17P8 | type: API 가 느려서 캐시 | We cache the results since … 추가 |
| D18P7 | type: 쉬운 말로 설명 | in plain language / in simple language 추가 |
| D18P8 | type: 파이썬 3.12 + 표준 라이브러리만 | I'm on Python 3.12. … 추가 |
| DB4P6 | type: AI 도구가 쓴 코드 검토 | I always review AI-generated code(가장 자연스러운 말), check code written by AI tools 추가 |
| DB4P7 | type: 팀에 대해 좀 더 | a bit more 추가 |
| DB4 1쪽 · 2쪽 ex | `Could|you|tell|me|more about the team?` roles `Q S V O M` — more 는 tell 의 직접목적어라 M(꾸밈말)이 아님 | `Q S V O O` |

## 질문

- 레슨 `n` 이 챕터마다 1부터 다시 시작해요(D15 n:1 … D18 n:4). v1~v3 도 같은 방식이고 검사도 통과해서 손대지 않았지만, 문법 코스(G19 n:19)는 코스 전체 번호라 두 코스 기준이 달라요. 의도인지 확인 필요해요.
- D18 1쪽 「Please 를 붙이면 부드러워지지만 없어도 실례가 아니에요」 — AI 도구엔 맞는 말이지만 사람(동료)에게 그대로 쓰면 딱딱할 수 있다는 한 줄을 더할지 판단 부탁해요(그대로 둠).
