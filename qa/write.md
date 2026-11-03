# QA 기록 — write (쓰기: w1.js · w2.js · w3.js · w4.js)

검수 범위: 레슨 W1~W16 + 보스 WB1~WB4의 설명 쪽·예문·문제·힌트·해설 전부 (레슨 20개 · 문제 176개).
검사: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs` → FAILS 0 · 경고 0.
학습자 답 시험: type·fix·order 문제와 새 free 문제에 학습자가 쓸 법한 답 약 390개를 실제 채점기(Grader.text / Grader.free)로 돌려 보고, 떨어진 맞는 답을 answer 에 넣었어요. 일부러 틀린 답(관사 빠짐·시제 틀림·because+so 같이 쓰기 등)은 계속 오답인지도 확인했어요.
화면 시험: `python3 tools/play.py --course write` (글자 기본·「아주 크게」 둘 다) → FAILS 0. 자유 쓰기 화면은 스크린샷으로 직접 봤어요.
`mix()` 도우미는 그대로 두고 더 많이 썼어요(허용 답 조합).

## 1. 자유 쓰기(free)로 바꾼 문제 — 17개 (레슨마다 1개, W14 는 2개)

모든 free 문제는 이렇게 만들었어요.
- `prompt`: 무엇을 쓸지·꼭 넣을 표현을 구체적으로(「내 계획으로」, 「실제로 고마웠던 일」처럼 내 이야기임을 밝힘)
- `ko`: ○○ 빈칸이 있는 한국어 틀. 화면이 ko 를 「뜻: …」으로, 정답 화면에서는 모범 문장 아래에 또 보여 주기 때문에 과제 설명 대신 틀 문장으로 했어요(두 곳 모두 자연스럽게 읽혀요).
- `need`: 레슨의 **목표 문법·표현**만 검사(개인 사실은 검사 안 함). 「I'm really into」, 「Thank you so much for」처럼 사이에 꾸밈말이 들어가도 통과하도록 짧게 잡았어요.
- `minWords`: 채점기가 축약형을 풀어서 세요(I'm = 2낱말). 그래서 낱말 수는 풀어 센 기준으로 정했어요.
- 모범 문장 3개: 전부 need·minWords 를 통과하고, 흔한 실수 규칙에 안 걸리는지 확인했어요.

| id | 전 (type, 정해진 문장) | 후 (free) — need / minWords |
|---|---|---|
| W1P9 | 미안, 금요일엔 못 가. 일요일은 어때? | 이번 주 만나고 싶은 친구에게 내 계획으로 약속 문자 — [Are you free] + [want to / Would you like to / How about] / 8 |
| W2P9 | 먼저 주문해. 금방 갈게. | 늦는다는 문자: 늦음 + 이유(과거형) + 도착 시각 — [late] + [I'll be there / I'll get there] / 13 |
| W3P9 | 면접 잘 봐! 넌 할 수 있어! | 요즘 친구·가족에게 생긴 일에 축하·응원·위로 — [Congratulations / Congrats / Good luck / feel better] / 6 |
| W4P8 | 시간 있을 때 사진 좀 보내 줄래? | 정말 부탁하고 싶은 것 — [Can you / Could you / borrow / Would you mind] / 5 |
| W5P8 | 잘 지내시길 바랍니다. | 실제로 보낼 법한 이메일 첫 부분 — [Dear / Hi / Hello] + [I'm writing to] / 9 |
| W6P9 | 5월 3일에 빈방이 있나요? | 관심 있는 수업·숙소 문의 두 문장 — [I'm writing to / I'd like to know] + [Could you / Can you / Is there / Do you have] / 12 (빈방 문장은 모범 문장으로 남김) |
| W7P7 | 빠른 답장 감사합니다. (W7P5 fix 의 정답과 **똑같은 문장**이라 중복이었음) | 실제로 고마웠던 일로 감사 메일 두 문장 — [Thank you / Thanks] + [appreciate / appreciated] / 10 |
| W8P9 | 저는 수요일 오후에 시간이 돼요. | 내 일정으로 약속 미루기 + 가능한 시간 — [reschedule / Would it be possible to / move] + [I'm free / I'm available / work for you] / 10 |
| W9P9 | 11시에 잠자리에 들었다. 긴 하루였다. | 오늘 내 하루 일기(과거형 2가지 + 마무리) — [It was / Today was] / 12 |
| W10P9 | 친구가 전화해 줘서 기분이 좋았다. | 내 기분 + 이유 — [I was / I felt] + [because] / 7 |
| W11P9 | 날씨가 좋아서 공원까지 걸어갔다. | 최근 내 일을 이유·결과로 — [because / so I / so we] / 7 |
| W12P9 | 마지막으로 일기를 쓰고 잤다. | 내가 한 일 세 가지를 순서대로 — [First] + [Then / Next] + [After that / Finally] / 12 |
| W13P9 | 꼭 다시 올 거예요. 강력 추천해요! | 최근 가 본 곳 리뷰: 좋은 점 but 아쉬운 점 + 재방문·추천 — [but] + [come back / go back / be back / recommend] / 12 |
| W14P8 | 요즘 달리기에 빠져 있어요. | 내 취미·관심사 두 문장 — [like / love / enjoy] + [into / interested in] / 10 |
| W14P9 | 혼자 여행하고 싶어서 영어를 배우고 있어요. | 내가 영어를 배우는 진짜 이유 — [English] + [because / so I] / 9 |
| W15P9 | 여름이 너무 기다려져! | 요즘 내가 기다리는 것으로 SNS 한 줄 — [Can't wait] / 5 |
| W16P9 | 등산 좋아하면 이 산 정말 좋아할 거야. | 내가 좋아하는 것 추천 — [If you like / If you love / If you enjoy] + [should / have to / recommend] / 12 |

보스(WB1~WB4)는 정해진 이야기(미나 생일·호텔·부산 여행·메이플 코너 카페)라서 free 로 바꾸지 않았어요. 바꾼 문제는 각 레슨 문제 사다리의 끝(또는 끝에서 둘째)에 있어요.

## 2. 설명·뜻 정확성

| id | 문제 | 고친 내용 |
|---|---|---|
| W13 (2쪽) · W13P5 힌트·해설 | 「가성비는 콩글리시예요」 — 가성비는 한국어 낱말이고, 콩글리시는 그걸 그대로 옮긴 cost performance | 「가성비를 그대로 옮긴 cost performance 는 영어권에서 거의 안 써요」로 고침(힌트 1·why 도) |
| W10P6 | 뜻은 「오늘 정말 행복했다」(과거)인데 허용 답에 I am so happy today. (현재)가 있었음 | 그 답을 빼고 과거형 변형(I felt very happy today. / Today I was so happy. 등)을 넣음 |
| W10P7 | prompt 「오늘 기분을 일기에 써 보세요」인데 답은 「너무 피곤했다」로 정해져 있어 자유 쓰기로 오해 | prompt 를 「이 기분을 일기 한 줄로 써 보세요.」로 (자유 쓰기는 W10P9 에서) |
| W3P9 (free) | 과제 예시에 「생일」이 있는데 need 가 축하·응원·위로 표현만 받음 | 예시를 「합격·승진·결혼·시험·면접·감기」로 |

## 3. 다른 정답 추가 (학습자 답 시험에서 떨어진 맞는 답)

| id | 문제 | 고친 내용 |
|---|---|---|
| W1P3 | 토요일 6시에 역에서 만나자 (order) | 카드로 만들 수 있는 맞는 어순 전부(6가지 + On Saturday, let's … 2가지) |
| W1P5 | 몇 시가 괜찮아? (fix) | works best · fine · convenient for you |
| W1P6 | 7시에 만나도 괜찮아? (fix) | mix 로: okay/alright/all right/fine × 7 / 7 o'clock / 7 p.m. (16개) |
| W1P7 | 내일 점심 같이 먹을래? | mix 로: Do you want to / Want to / Would you like to / wanna × have/eat/get/grab lunch × tomorrow / together / with me + How about lunch tomorrow? · Are you free for lunch tomorrow? 등 (66개) |
| W1P8 | 토요일 괜찮아. 그때 봐! | Saturday sounds good · is fine for me · is okay for me · See you Saturday! |
| W2P6 | 미안, 버스를 놓쳤어 (fix) | I've (just) missed the bus 2개 |
| W2P7 | 미안, 좀 늦을 것 같아 | mix 로: Sorry / I'm sorry / 없음 × running · I'll be · going to be · I think … · might be × a little / a bit / 없음 (54개) |
| W2P8 | 7시 반까지 갈게 | mix 로: be/get there · arrive · can be there × 7:30 · half past seven · 7:30 p.m./pm (20개) |
| W3P5 | 결혼 축하해! (fix) | on your marriage 2개 |
| W3P6 | 시험 잘 봐! (fix) | mix 로: on/with/in × your/the × exam/test (12개) |
| W3P7 | 생일 축하해! 좋은 하루 보내! | Have a great one · (I) hope you have a great/good day 4개 |
| W3P8 | 얼른 나았으면 좋겠다. 필요한 거 있으면 말해. | Hope you get well/better · I hope you'll … · If you need anything, let me know · Just let me know … |
| W4P5 | 충전기 좀 빌려줄 수 있어? (fix) | Can/Could you lend your charger to me? |
| W4P6 | 어제 사진 좀 보내 줄 수 있어? (fix) | Could you … pictures 변형 (mix 8개) |
| W4P7 | 부탁 하나 해도 돼? | Would you do me a favor? · Can/Could you do a favor for me? |
| W4P9 | 정말 고마워! 신세 졌다 | Thank you very much! |
| WB1P2 | 금요일 저녁에 다들 시간 돼? | Is everyone available · this Friday evening/night |
| WB1P7 | 생일 축하해, 미나! 오늘 즐거운 시간 보내! | Enjoy your day today · (I) hope you have a great time today 등 4개 |
| WB1P8 | 다들 와 줘서 고마워! 진짜 재밌었어 | We had so much fun! · It was a blast! |
| W5P9 | 시간 내 주셔서 감사합니다. 답장 기다리겠습니다 | hearing from you soon · hearing back from you · your answer · I'm looking forward to your response |
| W6P5 | 사무실이 어디 있는지 알려 주실 수 있나요? (fix) | Could you please tell me · Could you let me know |
| W6P7 | 요리 수업 문의 첫 문장 | I'm emailing you to ask about · your cooking course |
| W6P8 | 수업이 언제 시작하는지 알려 주실 수 있나요? | Could/Can you please tell me · what time the class starts · when the classes start |
| W7P8 | 실수 사과 + 금요일까지 다시 보내기 | send it (to you) again · by this Friday |
| W7P9 | 질문 있으시면 알려 주세요 | any other questions · feel free to let me know · Please don't hesitate to contact me … 4개 |
| W8P8 | 회의 일정을 다시 잡을 수 있을까요? | Could we please reschedule … |
| WB2P2 | 예약을 변경하려고 메일 드립니다 | make a change to my reservation · because I want to change … |
| WB2P4 | 날짜를 5월 11일~13일로 바꿀 수 있을까요? | Could I please · change the date · May 11th to 13th |
| WB2P7 | 도와주셔서 미리 감사드립니다 | for your assistance |
| W9P5 | 오늘 치과에 갔다 (fix) | the dentist's (office) 변형 3개 |
| W10P5 | 여행 때문에 정말 신났다 (fix) | excited for the trip 3개 |
| W10P7 | 오늘 너무 피곤했다 | extremely tired |
| W10P8 | 영화가 지루해서 잠들었다 | Because the movie was boring, … · very/so boring 변형 4개 |
| W11P5 | 아파서 학교에 안 갔다 (fix) | ill 변형 3개 |
| W11P6 | 피곤해서 일찍 잤다 (fix) | Because I was tired, I went to bed early. |
| W11P7 | 배가 고파서 라면을 끓여 먹었다 | Because I was hungry, I made/cooked (some) ramen. 4개 |
| W11P8 | 버스를 놓쳐서 지각했다 | my bus · late for class · late to work 변형 (20개로) |
| W12P5 | 점심 먹은 후에 산책했다 (fix) | went for a walk 변형 (mix 12개) |
| W12P7 | 먼저 장을 봤다. 그다음 저녁을 만들었다 | went to the market · bought some groceries |
| W12P8 | 그 후에 친구와 커피를 마셨다 | had a coffee · went for coffee with a/my friend |
| WB3P2 | 아침 일찍 일어나서 바다에 갔다 | early in the morning 변형 |
| WB3P6 | 여행이 끝나서 조금 슬펐다 | because my trip ended |
| WB3P7 | 정말 좋은 여행이었다. 꼭 다시 오고 싶다 | such a good trip · definitely want to come back · come (here) again 변형 |
| W13P5 | 가성비가 좋아요 (fix) | It's a good/great value (미국식) · worth the price |
| W13P6 | 동네 최고의 피자 (fix) | in this town |
| W13P7 | 음식은 맛있었지만 서비스가 느렸어요 | very/really/too slow |
| W13P8 | 배터리가 오래 가지 않아요 | a long time · long enough |
| W14P7 | 저는 마케팅 일을 해요 | I'm working in marketing · in the marketing field |
| W15P6 | 친구들이랑 셀카 찍었다 (fix) | (I) took selfies with my friends |
| W15P8 | 드디어 바다에 왔다! #summer | (I) finally came to the beach! |
| W16P5 | 봄에 가 보시는 걸 추천해요 (fix) | I would recommend visiting · recommend going in (the) spring |
| W16P6 | 이 앱은 영어 공부하기에 아주 유용해요 (fix) | helpful · learning 변형 (mix 10개) |
| W16P7 | 이 카페 꼭 가 봐! 케이크가 정말 맛있어 | should definitely try · check out · really tasty · Their cake(s) 변형 |
| W16P8 | 사람이 많아지니까 일찍 가는 걸 추천해요 | going there early · I recommend you go · very busy · can get crowded · since … |
| WB4P2 | 지난 토요일에 친구와 이 카페에 갔어요 | my friend and I / a friend and I … 4개 |
| WB4P5 | 의자가 조금 불편했어요 (fix) | slightly uncomfortable |
| WB4P6 | 가격도 적당했어요 | Prices were also reasonable. |
| WB4P7 | 조용히 공부할 곳을 찾는다면 이 카페를 추천해요 | for studying · I recommend this place · this cafe is great |

일부러 넣지 않은 답(계속 오답): I had a toast · I bought new umbrella · I'm so tired today(과거여야 함) · The movie was so boring, so … · My hobby is to watch movies(-ing 연습 문제) · I'm late by ten minutes(어순 연습 문제) · the best pizza in the town.

## 4. 확인했지만 그대로 둔 것
- 모든 choice 의 정답이 하나뿐인지, fix 의 틀린 문장이 정말 틀렸는지, order 함정 카드를 끼워도 맞는 문장이 안 되는지 하나씩 확인 — 문제 없음.
- 보스 WB2 의 Could I change the dates to May 11 to 13? (to 가 두 번) — 조금 투박하지만 실제로 쓰는 말이라 그대로 두고, 11th~13th·through 형태도 정답으로 받음.

## 질문

1. **자유 쓰기 「꼭 넣을 표현」 칩이 줄바꿈되지 않아요(core/cards.js·ui.css — 제 파일 밖).** need 의 한 묶음이 칩 하나로 나와서 대안을 길게 넣으면 폰 폭(390px)을 넘어가요(play.py 가 W3P9·W4P8·W6P9 에서 「가로 넘침」으로 잡음). 그래서 지금은 묶음마다 45~55글자 안으로 줄였고, 그 대가로 「Are there …?」(W6P9), 「If you're into …」(W16P9), 「Get well soon / Happy birthday」(W3P9) 로 쓴 답은 조건 미달이 돼요. 칩이 줄바꿈되거나(white-space) 대안마다 칩을 나눠 주면 need 를 다시 넓힐게요.
2. **free 문제의 ko 가 「뜻: …」으로, 정답 화면에서도 모범 문장 아래에 나와요(core/views.js).** 그래서 ko 를 과제 설명이 아니라 ○○ 빈칸이 있는 한국어 틀(「○요일에 시간 돼? 같이 ○○ 할래?」)로 썼어요. free 일 때 라벨을 「과제:」로 바꾸고 정답 화면에서 ko 를 빼는 게 낫다면, 그때 ko 를 과제 설명 문장으로 바꿀게요.
3. **free 로 바꾸면서 정해진 문장 번역 연습이 레슨마다 하나씩 줄었어요.** (예: W1P9 「못 가. 일요일은 어때?」, W8P9 「수요일 오후에 시간 돼요」, W13P9 「꼭 다시 올 거예요. 강력 추천해요!」) 핵심 표현은 같은 레슨의 다른 문제·예문·free 의 need 에 남아 있어요. 레슨당 문제 수(7~9개) 기준 때문에 덧붙이지 않고 바꿨는데, 번역 연습을 되살리고 free 를 10번째로 더하는 쪽이 좋으면 알려 주세요.
4. (참고) play.py 를 연달아 돌리면 가끔 「🔊 가 버튼과 다른 글을 읽음」이 나와요 — 바로 전 문제의 정답 자동 읽기(0.25초 뒤)가 다음 쪽 🔊 확인과 겹치는 타이밍 문제로 보여요. 다시 돌리면 FAILS 0 이에요.
