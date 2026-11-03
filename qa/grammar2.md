# QA — 문법 더 깊게 (grammar) · g5 (G19~G23, GB5)

검수 범위: courses/grammar/parts/g5.js — 레슨 6개(보스 1 포함), 문제 53개 전부.
규칙 정확성 확인: to부정사 목적(for buy ✗), want·decide·plan·hope + to / enjoy·finish·mind·keep + -ing, 전치사 뒤 -ing, stop·remember·forget·try 의 뜻 차이, boring/bored 류, 명사 앞·뒤 분사 — 설명·정답 모두 사실과 맞아요.
검사: `stamp → validate_content → check_answers` grammar FAILS 0 · 경고 0. 학습자 답 시험 21건(정답 변형 + 틀린 답이 떨어지는지: stop to use / remember to meet / Try to turn … / interested in learn) 전부 기대대로.

## 고친 것

| id | 문제 | 고친 내용 |
|---|---|---|
| G21 2쪽 | remember·forget 설명 「forget 도 똑같아요」 | forget + -ing 는 실제로 거의 `I'll never forget -ing`(never 와 함께)로만 써서 보충 설명 추가 |
| G22P3 | match: The trip was exciting. ↔ 「여행이 신났어요.」 | 「신나다」는 사람이 느끼는 말이라 어색한 한국어 → 「신나는 여행이었어요.」 |
| G19P7 | type: 할 일이 많아요 | I have got a lot of work to do / I have so much to do 추가 |
| G19P8 | type: 이번 주말에 부모님 댁에 갈 계획 | I am planning to see / I am going to see / I plan to go see … 추가 |
| G20P7 | type: 수영은 건강에 좋아요 | Swimming is great for your health 추가 |
| G20P8 | type: 주말에 요리하는 걸 즐겨요 | I like to cook on weekends(like 는 to·-ing 둘 다 됨), at weekends(영국식) 추가 |
| G21P6 | fix: 전화를 받으려고 멈췄어요 | He stopped to pick up the phone 추가 |
| G21P7 | type: 엄마한테 전화하는 걸 깜빡 | my mum(영국식) 추가 |
| G21P8 | type: 껐다가 다시 켜 보세요 | Try switching it off and on again / … and then back on 추가 (Try to turn … 은 레슨 핵심이라 계속 오답) |
| G22P6 | fix: 오늘 너무 피곤해요 | I feel really tired today 추가 |
| G23P7 | type: Tom 이랑 이야기하는 여자 | the woman that is talking to Tom 추가 |
| GB5P6 | type: 강릉에서 찍은 사진 | This picture was taken / I took this picture in Gangneung 추가 |

## 질문

- **shared/mistakes.js 규칙이 너무 넓어요**: `there is … a lot of` 를 무조건 「여럿이면 There are」로 잡아요. 그런데 `There is a lot of work to do.`(셀 수 없는 명사)는 맞는 문장이라 G19P7(할 일이 많아요)의 정답으로 넣을 수 없었어요. 학습자가 이 문장을 쓰면 오답 + 잘못된 안내가 나와요. 규칙을 `a lot of` 뒤 복수명사(-s)일 때만 걸리게 좁힐지 결정 필요해요(규칙 파일은 제 담당이 아니라 손대지 않음).
- G23 1쪽 `There|is|a broken window|in the kitchen.` 의 roles `M V S M` — There 를 M(꾸밈말)으로 칠지, 다른 코스와 표기 통일 기준이 있는지 확인 필요(틀렸다고 보긴 어려워 그대로 둠).
- GB5 2쪽 예문 `I tried painting, but it was boring for me.` — `boring for me` 도 구어로 쓰지만 `I found it boring` / `it was boring to me` 가 더 무난해요. 덱에 들어가는 문장이라 바꿀지 판단 부탁해요(그대로 둠).
