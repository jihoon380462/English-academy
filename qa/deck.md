# 문장 덱 QA 기록 (d00-starter ~ d08-dev)

검수 범위: `courses/deck/parts/d00-starter.js` ~ `d08-dev.js` (9개 파일, 403문장). d09 이후 파일은 다른 에이전트 담당이라 손대지 않았어요.

검수 방법
- 문장마다 원어민 자연스러움, ko 뜻·말투, key/keyko, alt(🗣 카드에 입력했을 때 정답 처리되는 다른 표현)를 확인했어요.
- 덱 사이 비슷한 문장은 낱말 일치율(LCS) 0.6 이상 쌍을 모두 뽑아 직접 보고, 거의 같은 문장이면 **뒤쪽 덱** 문장을 바꿨어요.
- 학습자가 쓸 법한 답을 `C.Grader.text(입력, [it.en, ...it.alt])` 로 실제로 채점해 보고 떨어지는 것을 alt 에 넣었어요.
- 채점기 특성 때문에 떨어지던 것: `It's been` 을 `It has been` 으로 쓰면 오답(채점기가 's 를 is 로만 풂), `okay` ↔ `OK`, 숫자 `30` ↔ `thirty`, `round trip` ↔ `round-trip`. → 해당 문장 alt 에 추가했어요.

## 고친 것

| id | 문장 | 고친 내용 |
|---|---|---|
| phone-048 | Let's keep in touch. | daily-045 와 완전히 같은 문장 → **Give me a call when you get a chance.** (시간 날 때 전화 한번 줘요 / key: when you get a chance) 로 교체 |
| phone-025 | Sorry, I can't make it tonight. | daily-046(I'm afraid I can't make it tonight.)과 거의 같음 → **Sorry, I can't come tonight after all.** (key: after all 「결국」) 로 교체, can't make it 형태는 alt 로 |
| phone-003 | Can you hear me? | work-033(Can everyone hear me okay?)과 겹침 → **I can't hear you very well.** (잘 안 들려요) 로 교체 |
| phone-022 | Are you free this weekend? | work-020(Are you free on Thursday afternoon?)과 같은 틀 → **Do you want to hang out this weekend?** (key: hang out). 처음엔 「Do you have any plans this weekend?」로 바꿨다가 d09 smalltalk-009(Any plans for the weekend?)와 겹쳐 다시 바꿈 |
| phone-030 | I need to cancel our appointment. | 친구 약속을 appointment 로 쓰는 건 한국인이 자주 하는 실수(appointment 는 병원·업무 예약) → **I need to cancel our plans for tomorrow.** + note 로 plans/appointment 구분 설명 |
| phone-018 | Sorry, wrong number. | 이 말은 보통 **잘못 건 쪽**이 하는 말인데 ko 는 「잘못 거셨어요」(받는 쪽) → **Sorry, you have the wrong number.** 로 바꾸고 원래 문장은 alt 로 |
| phone-031 | Thanks for letting me know. | key 를 let me know → **thanks for letting me know** (daily-047·work-025 와 key 중복 정리) |
| phone-039 | The signal is really bad here. | key 「bad signal」이 문장에 없음 → **the signal is bad** / 신호가 안 좋다 |
| phone-006·013·017·036·043 | (숫자·OK) | 숫자형 alt 추가(10 minutes, 7 o'clock, 6:30), Is it OK if… 추가 |
| life-025 | I left my phone in the taxi. | travel-049 와 완전히 같은 문장 → **I left my umbrella on the bus.** (뒤의 life-043 검은 우산 분실물 문장과도 이어짐) |
| life-018 | I'm allergic to peanuts. | cafe-022 와 완전히 같은 문장 → 병원 맥락인 **I'm allergic to penicillin.** 으로 교체 |
| life-006 | Where is the nearest pharmacy? | alt(Is there a pharmacy near here?)가 travel-043 문장과 똑같음 → **Where is the nearest hospital?** 로 교체 (key: the nearest) |
| life-029 | The heating isn't working. | travel-013(The air conditioner isn't working.)과 같은 틀·같은 key → **There's no hot water.** (뜨거운 물이 안 나와요) 로 교체 |
| life-009 | My nose is running. | key(runny nose)가 문장에 없음 → 더 흔한 **I have a runny nose.** 를 대표로, 원래 문장은 alt 로 |
| life-012 | How often should I take this? | key 「take medicine」이 문장에 없음 → **take (medicine)** / (약을) 먹다 |
| life-050 | …by the end of the week. | keyko 「이번 주 말까지」가 「주말(weekend)까지」로 읽힐 수 있음 → **이번 주가 끝나기 전까지** |
| life-017 | It started two days ago. | alt 에 숫자형(2 days) 추가 |
| work-015 | Could you help me with this? | daily-019(Can you help me?)와 겹치고 같은 덱 work-039(Could you give me a hand with these boxes? — alt 가 help me with)와도 겹침 → **Who should I talk to about this?** 로 교체 |
| work-040 | I'm afraid I won't finish it by today. | 「by today」는 어색함 → **I'm afraid I won't be able to finish it today.** |
| work-012 | Sorry I'm late. The traffic was terrible. | key 가 daily-009 와 같음(sorry I'm late) → key 를 **the traffic was terrible** 로, alt(The traffic was really bad 등) 추가 |
| work-025 | Let me know if you have any questions. | key 중복(let me know, daily-047) → **if you have any questions** / 궁금한 점이 있으면 |
| work-045 | I'm looking forward to working with you. | feelings-037 과 key 같음 → **look forward to -ing** 로 (to 뒤 -ing 강조) |
| work-004·005·014·033 | (숫자·OK) | 숫자형 alt(5 minutes, at 10, at 3), hear me OK 추가 |
| daily-017 | What are you up to? | ko 「뭐 하고 지내요?」는 What have you been up to?(요즘) 쪽 뜻. 다음 문장(Not much, just relaxing)과 맞게 **뭐 하고 있어요?** 로 |
| daily-023 | Excuse me, is this seat taken? | keyko 「이 자리 비었나요?」는 뜻이 반대(taken = 누가 앉음) → **이 자리 주인 있나요? (누가 앉는 자리인가요?)**, alt 추가 |
| daily-030 | That makes sense. | ko 「이제 이해가 되네요」의 「이제」는 원문에 없음 → **그러면 이해가 되네요.**, alt Makes sense. |
| daily-004·040 | It's been … | 채점기가 It's 를 It is 로만 풀어서 **It has been …** 이 오답 처리됨 → alt 추가 |
| daily-010 | That's okay. | That's OK. / It's OK. 가 오답 처리됨 → alt 추가 |
| daily 기타 | 001·002·005·009·011·012·013·019·034·037·038·043·046 | 흔한 다른 표현 alt 추가 (Hey, how are you? / I'm doing well, thanks. / Sorry for being late. / Can you close the window? 등) |
| cafe-040 | We've been waiting for thirty minutes. | alt 「We have waited for thirty minutes.」는 덜 자연스러워 빼고 30 minutes / half an hour 추가 |
| cafe 기타 | 002·008·011·023·027·029·034·047 | alt 추가 (Can I have the menu? / Check, please. / This one's on me. / wifi 철자 등) |
| travel-025 | A round-trip ticket… | round trip(하이픈 없이)이 오답 처리됨 → alt 추가 |
| travel 기타 | 001·003·004·009·015·018·030 | alt 추가 (toilet, on holiday, 5 days, booking, hold my bags, 10 minutes, Stop here, please.) |
| feelings-027 | Because it's cheaper and faster. | alt 가 없었음 → faster and cheaper 추가 |
| feelings 기타 | 019·032·035·049 | alt 추가 (favourite, I'm so proud of you, staying at home, The reason … is because …) |
| st001~003 | 첫걸음 3문장 | alt 추가 (It's nice to meet you. / Could you repeat that? / I don't get it.) |
| devtalk-042 | Expected the total to update, but nothing happened. | 주어 생략형(버그 리포트 말투)이라 학습용으론 **I expected …** 를 대표로, 원래 형태는 alt |
| devtalk-037 | I'll leave a few comments on your PR. | ko 「당신 PR에」의 「당신」이 직장 한국어로 어색 → **PR에 코멘트 몇 개 남길게요.** |

비슷하지만 그대로 둔 것(틀만 같고 내용·상황이 달라 학습 가치가 있음): Can I get a refill?/receipt?/discount?, Can I change my order?/seat?, I have a fever./I have a cold., I'm allergic to peanuts.(카페)/penicillin.(병원), daily-010 That's okay. 과 daily-027 Don't worry about it. (alt No worries. 를 같이 씀).

## 질문

1. **채점기: 아포스트로피 없이 쓴 축약형**(`Im good`, `thats ok`, `dont`)은 오답이에요. 휴대폰 키보드로 입력하면 흔한 일이라 `shared/contractions.js` 에 `im`, `thats`, `dont`, `cant` 같은 형태를 넣을지 정해 주세요. (`its`·`were`·`ill`·`id`·`well` 은 다른 낱말과 겹쳐서 넣으면 안 돼요.)
2. **채점기: `It's been` ↔ `It has been`**: 채점기가 `'s` 를 늘 `is` 로 풀어서 `has` 로 쓰면 오답이에요. 이번엔 alt 로 막았지만, 다른 덱·코스 문장에도 같은 문제가 생길 수 있어요(`He's got`, `She's gone` 등). 채점기에서 `'s + been/got/gone` 이면 has 도 허용할지 결정이 필요해요.
3. **채점기: `okay` ↔ `OK`, 숫자 ↔ 글자(30 ↔ thirty)**: 이번엔 해당 문장 alt 로 넣었지만 채점기 쪽 동치 규칙으로 처리하면 모든 코스가 한 번에 해결돼요.
4. alt 중에 축약형만 푼 것(`I will …` ↔ `I'll …`)이 work·phone·life·devtalk 덱에 많아요. 채점기가 알아서 같게 보므로 쓸모는 없지만 해도 없어서 그대로 뒀어요. 정리할까요?
5. feelings-032 「I'm proud of you.」의 ko 는 반말(네가 자랑스러워)이에요. 상황상 자연스러워 그대로 뒀는데, 덱 ko 를 전부 해요체로 맞출지 정해 주세요.
