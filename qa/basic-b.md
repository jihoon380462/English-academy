# QA 기록 — basic (챕터 4~7: c4.js · c5.js · c6.js · c7.js)

검수 범위: 레슨 E20~E37 + 보스 B4~B6의 설명 쪽·예문·문제·힌트·해설 전부 (레슨 18개 · 문제 184개).
검사: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs` → FAILS 0 · 경고 0.
학습자 답 시험: type·fix·order·build·dictation 문제 77개에 학습자가 쓸 법한 답 약 500개를 실제 채점기로 돌려 보고, 떨어진 맞는 답을 answer 에 넣었어요. (order·build 는 카드로만 만들 수 있어서 카드에 없는 낱말을 쓴 답은 넣지 않았어요.)

## 고친 것

### 1. 설명·뜻 정확성

| id | 문제 | 고친 내용 |
|---|---|---|
| E20 (1쪽) | 「a 다음에 모음 소리 형용사가 오면 an」 — 순서가 거꾸로 읽혀 헷갈림 | a/an 은 바로 뒤 낱말의 첫소리를 보고 고른다고 다시 씀 |
| E20 (3쪽 예문)·E20P9 | It's a beautiful day. = 「정말 좋은 날이에요」 — beautiful day 는 날씨 이야기인데 뜻이 빠짐 | 「날씨가 정말 좋은 날이에요.」 |
| E22 (1쪽)·summary | on = 「붙어서 위」라고 하면서 벽에 걸린 것도 on 이라 서로 맞지 않음 | on = 표면에 **닿아** 있을 때(탁자 위에 놓인 것도, 벽에 걸린 것도)로 고침 |
| E27 (3쪽 tip) | 「Yes/No 질문만 끝을 올려요」 — 단정이 너무 셈 | 「Yes/No 질문은 보통 끝을 올려요」 |
| E29P6 | 대표 답 I plan to learn **swimming** 은 원어민이 덜 쓰는 말 | 대표 답·카드를 I plan to learn **to swim** this summer. 로(swimming·how to swim 답도 허용), 힌트 보충 |
| E30 (1쪽 예문) | Tom can cook pasta very well. 의 뜻에 can(~할 줄 안다)이 빠짐 | 「톰은 파스타를 아주 잘 만들 줄 알아요.」 |
| E30 (2쪽) | can't 발음을 미국식 「캔(트)」만 설명 | 「영국식 can't 는 「칸트」」 보충 |
| E31 (1쪽 예문) | We shouldn't be late. = 「늦으면 안 돼요」 — 바로 다음 쪽에서 가르치는 금지(mustn't) 뜻과 섞임 | 「우리 늦지 않는 게 좋겠어요.」(조언) |
| E31 (2쪽) | must 와 have to 의 느낌 차이 설명이 없음 | must = 규칙·안내문·말하는 사람이 강하게 정할 때, have to = 일정·사정 때문에 / 대화에선 have to 가 훨씬 많다고 보충 |
| E31 (3쪽) | 미국 영어에선 mustn't 를 잘 안 쓴다는 점이 없음(E31P8 은 can't 도 정답) | 「미국 대화에서는 can't 로 금지를 더 많이 말해요: You can't smoke here.」 보충 |
| E33 (1쪽) | bigger·easier 철자 규칙 설명 없이 E33P7 힌트(「g 를 하나 더」)가 나옴 | 모음 하나+자음 하나로 끝나면 자음 한 번 더(bigger, hotter), -y → i(easier) 한 줄 추가 |
| E33 (2쪽) | 「긴 형용사」가 무엇인지 기준이 없음 | 「대개 소리 마디가 셋 이상: ex·pen·sive」 보충 |
| B6P6 | 힌트 「물(water)은 하나로 셈해요」 — 셀 수 없는 명사 설명과 어긋남 | 「물(water)은 셀 수 없어서 is 로 받아요」 |
| B6P8 | 힌트 발음 「언엑스트라」 — an extra 는 n 이 이어져 「어넥스트라」 | 「어넥스트라」로 고침 |

### 2. 성분 색(roles)

| id | 문제 | 고친 내용 |
|---|---|---|
| E20 (1쪽 예문) | 'We\|live in\|a big house.' S V O — in a big house 는 장소(꾸밈말) | 'We\|live\|in a big house.' S V M |
| E32 (1쪽 예문 2개) | I'd like … 예문에 roles — 함정 목록의 「축약형 문장은 roles 빼기」 위반 | roles·덩어리 표시 뺌 |
| B6 (1쪽 예문) | I'd like to check in, please. 에 roles (같은 이유) | roles·덩어리 표시 뺌 |
| E32P4 | build 카드 "I'd" 를 주어(파랑)로 칠함 — would 가 주어에 묻힘 | 대표 답·카드를 I / would like to book / a table / for two. 로 바꿈(I'd 답도 계속 정답) |
| B5 (1쪽 예문) | 'For\|how many people?' M Q — 조각 문장이라 색이 의미 없음 | roles 뺌 |
| E33P9 | speak 의 say 에 「\|」가 없어 roles 4개가 낱말 4개(This/is/the/best)에 잘못 칠해짐 | say 를 'This\|is\|the best restaurant\|in town.' 으로 |
| E34P9 | 같은 문제(Are=Q, there=S, any=M 으로 칠해짐) | 'Are there\|any good restaurants\|around here?' |
| E36P6 | 같은 문제(at 만 회색, 나머지 색 없음) | 'I\|work\|at a design company.' |
| E36P8 | 같은 문제(In=M, my=S, free=V, time=O 로 칠해짐) | 'In my free time,\|I\|like to watch\|movies.' |

### 3. 공정한 채점 (정답이 하나인지·틀린 문장이 정말 틀렸는지)

| id | 문제 | 고친 내용 |
|---|---|---|
| E25P1 | 'The bag is nice, ___ it is expensive.' — and 도 문법상 맞음 | prompt 에 「그 가방은 예쁜데 비싸요」가 되도록 — 뜻을 넣어 정답을 하나로 |
| E25P2 | 'It was cold, ___ I stayed home.' — and 도 문법상 맞음 | prompt 에 「추워서 집에 있었어요」가 되도록 — 뜻을 넣음 |
| E25P6 | 둘째 빈칸 'It was spicy, ___ it was good.' — and 도 자연스러움(매운 걸 좋아하면 반대가 아님) | 'It was too spicy, ___ I ate it all.'(너무 매웠다 ↔ 다 먹었다)로 바꾸고 힌트 고침 |
| E26P5 | order 함정 카드 If 를 When 자리에 넣으면 If I am tired, I drink coffee. — 맞는 문장 | 함정을 drinks 로 |
| E29P7 | fix 의 틀린 문장 I want rest. 는 사실 맞는 문장(rest = 휴식, 명사) | wrong 'I want go home.' → 'I want to go home.' (ko·힌트도 바꿈) |
| E31P2 | 보기 has — She has work this Saturday.(일이 있다)도 맞는 문장 | 보기를 must to 로 |
| B5P7 | dictation 에 숫자(four, 8)가 있는데 answer 가 없어 at eight·4 people 로 쓰면 오답 | 숫자형·글자형 4가지 answer 추가 |

### 4. 다른 정답 추가 (학습자 답 시험에서 떨어진 맞는 답)

| id | 문제 | 고친 내용 |
|---|---|---|
| E20P8 | 방이 아주 깨끗해요 | tidy·neat·really 변형 5개 |
| E21P8 | 천천히 말해 주세요 | more slowly·Could/Can you please … 8개 |
| E22P7 | 그 약국은 은행 옆에 | That pharmacy/drugstore, right next to 3개 |
| E23P8 | 아침에 커피를 마셔요 | in the mornings 2개 |
| E24P8 | 주말에 보통 늦게 일어나요 | on the weekend(s)·at weekends·sleep in 어순 9개 |
| B4P5 | 두 블록 쭉 가세요 | 2 blocks(숫자형)·straight ahead·keep going 6개 |
| B4P7 | 카페는 서점 옆에 | right next to·bookshop 3개 |
| E25P7 | 비가 와서 집에 있었어요 | Because … 앞에 오는 어순·stayed at home·It was rainy 7개 |
| E26P7 | 배가 아파서 늦었어요 | Because … 어순·stomach ache·was hurting 5개 |
| E26P8 | 배고프면 이거 먹어요 | Have this if … 1개 |
| E27P8 | 주말에 보통 뭐 해요? | on the weekends·at weekends·On weekends, what … 3개 |
| E29P8 | 내 취미는 사진 찍기 | photographs·Taking pictures/photos is my hobby 4개 |
| B5P3 | 네 명이요. 토요일 7시요 | Saturday at seven·4 people·A table for four·o'clock·pm/p.m. 12개 |
| B5P6 | 생일 케이크를 가져가고 싶어요 | We want to·Could I/we bring 3개 |
| E30P7 | 창문 좀 열어 줄 수 있어요? | Could you …, please? 1개 |
| E30P8 | 영어를 조금 할 수 있어요 | a little bit (of)·a bit of 3개 |
| E31P7 | 안전벨트를 꼭 매야 해요 | seatbelt(붙여 쓰기) 2개 |
| E31P8 | 여기서 담배 피우면 안 돼요 | Smoking is not allowed here·can't smoke in here 2개 |
| E32P7 | 아이스 커피 한 잔 주세요 | Can I have/get·One iced coffee·Iced coffee, please 8개 |
| E32P8 | 계산서 좀 주시겠어요? | 미국식 the check 변형·Could I get the bill 등 11개 |
| E33P6 | 이 폰이 내 것보다 더 커요 | larger 1개 |
| E33P8 | 이 책이 저 책보다 더 재미있어요 | than that 1개 |
| E34P7 | 이 근처에 약국 있어요? | drugstore around here·close by 2개 |
| E34P8 | 제 방에 문제가 있어요 | with the room 1개 |
| B6P4 | 더 싼 방으로 할게요 | The cheaper one, please·…, please·I'll go with 6개 |
| B6P7 | 누구 좀 올려 보내 주시겠어요? | Can you … please·up to my room 4개 |
| E35P5 | 일기 ① 오늘은 바쁜 하루였어요 | very/really busy·Today was busy·I was (very) busy today 등 16개 |
| E35P6 | 일기 ② 7시에 일어났어요 | woke up·o'clock·this morning·7 a.m./7 am/7am 16개 |
| E35P7 | 일기 ③ 점심은 미나랑 먹었어요 | Mina and I had/ate lunch (together) 등 7개 |
| E35P8 | 일기 ④ 퇴근하고 헬스장에 갔어요 | After I finished/got off work·headed to 등 9개 |
| E35P9 | 일기 ⑤ 피곤했지만 기분은 좋았어요 | Although/Even though·in a good mood·felt fine/really good 등 14개 |
| E37P6 | 2시까지 일해야 돼 | 2 o'clock·2 pm·need to·I've got to 10개 |
| E37P7 | 극장 앞에서 만나자 | outside the cinema/movie theater·Meet me … 4개 |
| E37P9 | 괜찮아, 이따 봐! | No problem/That's okay/It's OK/Okay/No worries/That's fine/alright/all right/Don't worry × See you soon/later/! 조합 38개 (총 45개) |

## 질문

1. **E36(자기소개 1분)에 직접 쓰기(type) 문제가 하나도 없어요.** 문제 9개가 듣기 1 · 카드 배열 4 · 따라 말하기 4예요. 「말하기」 레슨이라 일부러 그런 거라면 그대로 두고, 아니라면 「여행하고 싶어서 영어를 배우고 있어요」 같은 type 문제 1~2개(허용 답 많이)를 말하기 앞에 넣을까요?
2. **챕터 7의 type 문제는 「자유 쓰기」가 아니라 「정해진 한국어 문장 번역」이에요.** 「내 하루 일기」 레슨인데 E35P5~P9 는 모범 일기(7시 기상, 미나와 점심, 헬스장)를 그대로 옮겨야 정답이에요. 허용 답은 크게 늘렸지만, 학습자가 진짜 자기 하루(8시 기상, 도서관…)를 쓰면 오답이 돼요. 엔진에 「채점 없이 스스로 확인하는 자유 쓰기」 같은 문제 유형을 만들지, 지금처럼 「모범 문장 따라 쓰기」로 둘지 정해 주세요. (지금 prompt 는 「써 보세요」라 자유 쓰기로 오해할 수 있어요.)
3. (다른 파일 — 참고) c0~c3 의 speak 문제 중 say 에 「|」 없이 roles 를 단 것(예: E2P9 'I want a big pizza.' + 'S V O' → a 에 목적어 색이 칠해지고 big pizza 는 색이 없음)은 같은 버그예요. speak 화면은 say 를 낱말마다 잘라 roles 를 칠하므로, say 에 「|」를 넣거나 roles 를 빼야 해요. 제 파일(c4~c7)은 고쳤고, c0~c3 은 맡은 범위가 아니라 손대지 않았어요.
