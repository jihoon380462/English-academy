# QA — 직장 영어(work) 코스 · o1.js / o2.js / o3.js / o4.js

검수 범위: 챕터 1~4 (O1~O16, OB1~OB4) 레슨 20개 · 문제 176개 전부.
중점: 말투(정중함) 설명이 실제 영미권 업무 관행과 맞는지, 「무례한」 오답 보기가 상황에 따라 맞을 수 있는지, 이메일 관행(Hi/Dear, Best regards), fix 문제의 틀린 문장이 정말 틀린 영어인지(discuss about, I am agree, remind me the deadline, feedbacks, Thank you for your listening, have a promise, call back to you 등 모두 실제로 틀린 영어임을 확인).
채점기로 학습자 예상 답 약 230개를 시험했고, 떨어진 것 중 맞는 영어는 answer 에 추가했어요(아래 표). 검사: stamp · validate · check_answers 모두 FAILS 0.

| id | 문제 | 고친 내용 |
|---|---|---|
| O2P5 (fill) | 「I ___ hiking … on Saturday」에 시제 단서가 없어 보기 go 도 말이 될 수 있음(I go hiking on Saturday = 이번 토요일 예정) | prompt 에 「지난 주말에 한 일을 말해요」를 넣어 정답 went 하나로 |
| O2P6 (fix) | My weekend was very fun / so much fun 이 떨어짐 | 추가. very fun 은 말로 흔히 쓰므로 정답 처리하고 why 에 「a lot of fun 이 더 무난」 보충 |
| O1P8, O2P7, O3P7, O3P8, O4P6, O4P7, O4P8, OB1P4, OB1P6 | manage / foreign customers, stayed home and rested, How've you been, a little hectic, other plans / an appointment, grab coffee(관사 없음) / get a coffee / Want to …, six-thirty(하이픈), mostly·foreign, quite·fairly·rather cold 등이 떨어짐 | 맞는 영어 30여 개 추가(꽤 ≠ really 라 really cold 는 일부러 안 넣음) |
| OB1P3 (order) | 함정 카드 on 을 from 자리에 넣으면 「I'm Jisoo on the marketing team in the Seoul office.」 — 레슨에서 배운 on the team 이라 맞는 문장이 돼 억울함(at 도 정답 목록에 있어 못 씀) | 함정을 is 로 교체(I'm is ✗) |
| OB1 (쪽 html) | 요약·OB1P7 에 나오는 It was great talking to you / Let's keep in touch 가 보스 미리보기에 없음 | html 에 끝인사 두 표현 소개 추가 |
| O5 (1쪽 표) | Send me the file 을 「업무 메일엔 ✗」라고 함 — 같은 챕터에서 Please find attached / Please check … 를 가르쳐 모순, 실제로 please 붙인 명령문은 메일에서 흔함 | 「부탁으로는 퉁명스러워요」로 고치고, please 붙인 짧은 안내 문장은 흔하지만 일을 맡기는 부탁은 Could you 가 안전하다고 보충 |
| O5 (3쪽 html) | 메일 「처음과 끝」 쪽에 정작 Hi/Dear 와 맺음말 설명이 없음 | Hi Emma,(대부분) / Dear Ms. Smith,(처음·격식), Mr./Ms. 뒤엔 성(Dear Mr. Tom ✗), 맺음말 Best regards, / Best, + 다음 줄 이름 추가 |
| O6 (3쪽 html) | Noted, thank you. 만 소개 — Noted 단독은 윗사람·고객에게 퉁명스럽게 들릴 수 있음 | 괄호로 주의 보충 |
| O7P9 hints | 「can't 의 t 는 거의 안 들려요」 — 미국식에만 해당 | (미국식) 표시 + 「대신 a 를 길게」 |
| OB2P1 | 「메일의 첫 줄」— 실제 첫 줄은 Hi Emma, 인데 보기는 인사말 뒤 첫 문장 | prompt 를 「Hi Emma, 다음 첫 문장」으로 |
| O5P5, O5P7, O5P8, O6P5, O6P6, O6P7, O7P6, O7P7, O7P8, O8P6, O8P7, O8P8, OB2P4, OB2P7 | please 위치, Would you mind reviewing(레슨에서 배운 표현인데 떨어짐), go over / look over, when you get a chance, remind me when the deadline is, the email I sent you on Monday, give me any feedback, Can I have access, Here you are, late response, heads-up on, get back to you, push (back) the deadline, Could the deadline be extended, Thank you so much for … 등이 떨어짐 | 맞는 영어 50여 개 추가 |
| O11 (3쪽 html·tip), O11P3 why | 「mute 앞에 꼭 on」— You're muted 도 똑같이 맞는 표현인데 빠짐(학습자가 틀린 걸로 오해) | 「on mute 또는 muted」로 보충(O11P3 보기엔 muted 가 없어 정답은 여전히 하나) |
| O11P5 (fix) | Sorry, can you speak slower? 가 떨어짐 — slower 는 말로 흔히 쓰는 맞는 영어 | slower / a little slower / please 넣은 답 6개 추가, why 에 「more slow 는 틀리지만 speak slower 는 정답 처리」 보충 |
| O12 (1쪽 html) | 「전화에서는 I am 이 아니라 This is」— I am 이 틀린 건 아님 | 「I am … 보다 This is …(또는 Jisoo speaking)가 자연스러워요」로 |
| O12P5 (fill) | 맥락이 없으면 보기 write(Could you write your last name for me?)도 맞는 문장 | prompt 에 「전화로 성의 철자를 확인해요」를 넣어 spell 하나로 |
| OB3 (쪽 html) | OB3P5 에서 쓰는 One issue is that … 이 미리보기에 없음 | html 에 소개 추가 |
| O9P6, O9P7, O10P7, O10P8, O11P7, O12P7, OB3P4, OB3P5, OB3P7 | Let's first discuss, take a look at / check / go through, I can't agree / disagree with that, have to start with, remains the same / Just to double-check, Can I get your name and number, complete it / wrap up, came late / arrived late / came out late, a couple of icons 등이 떨어짐 | 맞는 영어 40여 개 추가 |
| O14 (1쪽 html) | 「매출은 was increased 로 쓰지 않아요」— 행위자가 있으면 수동태도 맞음 | 「그래프 설명에서는」으로 한정 + 누가 올렸을 때만 수동태 예(Prices were increased by the supplier.) |
| O14 (3쪽 tip), O14P2 hints | 15/50 을 「강세 자리로」만 구별 — fifteen percent 처럼 뒤에 말이 붙으면 강세가 앞으로 옮겨 오히려 헷갈림 | 끝소리 길이(-teen 「틴-」 길게 / -ty 「티」 짧게, 미국식 「리」)를 주 단서로 보충, 힌트도 맞춤 |
| O16P4 (order) | 함정 카드 for 를 on 자리에 넣은 Great job for the presentation 은 원어민도 가끔 쓰는 말이라 애매 | 함정을 to 로 교체 |
| O16P5 (fill) | 보기 at — work at something(~을 잘하려고 애쓰다)도 맞는 영어라 정답이 둘 | 보기를 on / to / for 로 |
| OB4 (쪽 html) | OB4P4·요약의 We expect to sell … 이 미리보기에 없음 | html 에 소개 추가 |
| O13P6, O13P7, O13P8, O14P6, O14P7, O15P6, O15P7, O15P8, O16P6, O16P7, O16P8, OB4P4, OB4P7 | Thank you so much for listening, In summary / In conclusion / main points, I'd be glad to take, I'm happy to answer any questions you have, went up / grew (by) 20%, represents online sales, we could give you a discount, it's not possible at that price / we can't accept that price, Alright / it's a deal, keep this in mind, would you send …, Could you please give me an example, We're expecting to sell / in year one, exact figures / at the moment 등이 떨어짐 | 맞는 영어 55개쯤 추가 |

확인했지만 고치지 않은 것
- choice 의 「무례한」 오답 보기(Send me the sales report. / Your order is late. Sorry. / I go home now. / Okay. Be quiet, please. 등)는 모두 질문이 「가장 알맞은 / 가장 정중한」이고 정답 보기가 분명히 더 나아서 정답은 하나예요.
- fix 의 틀린 문장(discuss about, I am agree, I have a promise, remind me the deadline, give me feedbacks, Sorry for the late, call back to you, came lately, Thank you for your listening, keep it in my mind, If you will order, Sales was increased, more slow, I am working here since)은 전부 실제로 틀린 영어이고 한국인이 흔히 하는 실수예요.
- fill 은 보기를 고르는 드롭다운이라(opt 있음) 보기 밖 답(예: O15P5 signed, O8P5 am sorry)은 넣지 않았어요.
- roles 를 쓴 예문·문제는 없어요.

## 질문
1. O12 2쪽 예문 「I'm sorry, Mr. Kim is in a meeting right now.」의 뜻을 「김 부장님은 …」으로 옮겼어요. 영어엔 직급이 없지만 한국 회사 말투로는 자연스러워서 그대로 뒀어요. 직급 없이 「김 ○○ 님」처럼 직역하는 게 좋을까요?
2. O2P6 의 「My weekend was very fun.」과 O11P5 의 「speak slower」를 정답으로 받았어요. 둘 다 원어민이 말로 흔히 쓰지만 문법 교재에서는 a lot of fun / more slowly 를 권해요. 「교재식만 정답」을 원하시면 빼고 why 로만 설명할게요.
3. O1P4 는 영국식 「I work in the sales team.」도 정답으로 받고 있어요(레슨은 미국식 on the team 기준). 그대로 둬도 될까요?
