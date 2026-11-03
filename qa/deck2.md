# 문장 덱 QA 기록 2 (d09-smalltalk ~ d16-questions)

검수 범위: `courses/deck/parts/d09-smalltalk.js` ~ `d16-questions.js` (8개 파일, 400문장). d00~d08 은 `qa/deck.md`.

검수 방법
- 400문장 전부 원어민 자연스러움, ko 뜻·말투(해요체, 아이에게 하는 말처럼 반말이 분명한 곳만 반말), key/keyko, alt 를 확인했어요.
- 덱 사이 비슷한 문장: d00~d16 전체에서 낱말 일치율(LCS) 0.6 이상 쌍과 **같은 key** 쌍을 뽑아 직접 보고, 거의 같은 문장은 **뒤쪽 덱** 문장을 바꿨어요. 다른 코스 레슨 예문(자동으로 「내 문장」에 들어감)과 **똑같은 문장**도 찾아서 바꿨어요.
- 채점기 v0.3.0 기준으로 alt 를 정리했어요: 채점기가 이미 같게 보는 alt(숫자 낱말↔숫자, 7:30↔seven thirty, 축약형, gonna, 하이픈, en 과 글자까지 같은 것) **105개를 뺐어요**. 채점기가 같게 보지 **않는** $40↔forty dollars, 20%↔twenty percent, 3rd↔third, 1988↔nineteen eighty-eight, 100↔a hundred, 302↔three oh two, 2.5 는 alt 에 남겼어요.
- 학습자가 쓸 법한 답 약 190개를 `C.Grader.text(입력, [it.en, ...it.alt])` 로 채점해 보고, 뜻이 같은데 떨어지는 것 35개를 alt 에 넣었어요. 일부러 안 넣은 것: `Its up to you`(its 는 다른 낱말), `I can't login`(log in 이 맞는 형태), `I'm looking for … for my mother`(ko 가 「엄마」), 문장이 아닌 조각 답(`About two and a half hours.`).

## 고친 것

| id | 문장 | 고친 내용 |
|---|---|---|
| smalltalk-002 | Pretty good, thanks. | daily-002(I'm good, thanks.)와 같은 대답 → **Pretty busy, but I can't complain.** (좀 바쁘지만 그럭저럭 괜찮아요 / key: I can't complain) |
| smalltalk-028 | The traffic was crazy this morning. | work-012(…The traffic was terrible.)과 같은 내용·같은 뜻 key → **How was your commute this morning?** (key: commute 출퇴근길) |
| smalltalk-008 | Have you eaten yet? | note 추가: 영어권에선 한국처럼 인사로 안 쓰고 정말 밥 먹었는지 물을 때 써요 |
| smalltalk-014 | Do you come here often? | note 추가: 처음 보는 사람에게(특히 술집) 하면 뻔한 작업 멘트로 들릴 수 있음 |
| smalltalk-022 | So far, so good. | alt 「So far it's good.」은 어색해서 빼고 Good so far. 로 |
| smalltalk-025·034 | (key) | key 가 devtalk-025(have you tried)·feelings-017(be into)와 겹침 → **have you tried + 가게·음식**, **I didn't know you were ~** 로 |
| smalltalk 기타 | 008·009·010·011·012·016·021·024·037·043 | alt 추가 (Did you eat? / Any plans this weekend? / What do you do in your free time? / What brings you to this city? 등) |
| phrasal-004 | Don't forget to turn off the stove. | 구동사 코스 H3 예문과 완전히 같음 → **Don't forget to turn off the heater before bed.** |
| phrasal-007 | Please take off your shoes here. | 구동사 코스 H2 예문과 완전히 같음 → **Do I need to take off my shoes?** (신발 벗어야 해요?) |
| phrasal-044 | He brought up a good point. | work-049(bring up 꺼내다)와 key·뜻 겹침, feelings-045(That's a good point)와도 비슷 → bring up 의 다른 뜻 **She brought up three kids on her own.** (아이를 키우다). turn down·take off 처럼 한 구동사의 두 뜻을 익히게 |
| phrasal-010 | …a birthday gift for my mom. | ko 「엄마 생신」은 말 높이가 섞임 → **엄마 생일 선물** |
| phrasal 기타 | 001·008·011·020·024·036·039·046·050 | alt 추가 (show up at the party / get up early tomorrow / a gym membership / shopping mall 등) |
| idioms-022 | I'm on my way to pick you up. | phone-016(I'm on my way.)과 거의 같고 관용 표현도 아님 → **I'm swamped with work this week.** (이번 주는 일이 산더미예요 / key: be swamped) |
| idioms-026 | I'm under the weather today. | 「I'm under the weather today」는 조금 딱딱하고, 「…feeling a bit under the weather today」는 구동사 코스 H14 예문과 같음 → **I've been feeling under the weather all week.** (일주일 내내 몸이 좀 안 좋았어요) |
| idioms-001 | It's up to you. | ko 「당신이 정하세요」의 「당신」이 어색 → **편하신 대로 정하세요.** |
| idioms-004 | Make yourself at home. | ko 「편하게 계세요」가 phrasal-002(Please sit down and relax: 앉아서 편하게 계세요)와 헷갈림 → **내 집처럼 편하게 계세요.** |
| idioms-007 | Good luck! You've got this. | ko 「당신은 할 수 있어요」 → **잘할 수 있을 거예요.** |
| idioms-033 | …slipped my mind. | alt 추가 (Sorry, I totally forgot.) |
| numbers-015 | The movie starts at 7:15. | work-005(The meeting starts at ten.)과 같은 틀·같은 key → **I get off work at 6:30.** (key: get off work 퇴근하다) |
| numbers-001 | What time is it? | note 추가: Do you have the time?(몇 시예요?) ↔ Do you have time?(시간 있어요?) 구분 |
| numbers-025 | …on the second floor. | note 추가: 미국 second floor = 2층, 영국은 first floor 가 2층 |
| numbers-028 | That'll be $12.50. | ko 「~입니다」 → 해요체 **12달러 50센트예요.** |
| numbers-034·039 | (key) | key 「how long」이 questions 와, 「in + 연도」가 038 과 겹침 → **how long is ~**, **move here** |
| numbers 전체 | (alt) | 채점기가 같게 보는 숫자형·글자형 alt 90여 개 정리, 파일 첫 줄 주석도 새 채점기 기준으로 고침. alt 추가: quarter to/past(관사 없이), the fifth of May, forty bucks, two times a week, each month, Prices went up… |
| home-038 | Could you keep an eye on the soup? | idioms-046(Could you keep an eye on my bag…)과 틀·key 같음 → **Can you stir the soup while I chop the garlic?** (key: stir 젓다) |
| home 기타 | 014·029 | alt 추가 (take out the garbage / I'll come home late tonight.) |
| online-022 | The size doesn't fit me. | 원어민은 size 를 주어로 안 씀(콩글리시 느낌) → **It doesn't fit me.** + note |
| online-013 | When will it be delivered? | 문법 코스 G7 예문과 완전히 같음 → **When will my order be delivered?** |
| online 기타 | 008·014 | alt 추가 (posted a new picture / two to three days) |
| reactions-002·009·010·014·017·020·029·031·041 | (ko) | 덱 안에서 반말·해요체가 섞여 있었음(진짜 멋지다! / 좋겠다! / 정말 다행이다! / 나도 막…) → 전부 해요체로 맞춤 (진짜 멋지네요! / 좋겠어요! / 정말 다행이에요! / 저도 막…) |
| reactions-016 | I can't believe it! | key 가 smalltalk-029 와 같음 → **I can't believe it!** (놀람 감탄 통째로) |
| reactions-005 | Aw, that's a pity… | alt 추가 (Aw, that's a shame. Maybe next time.) |
| questions-008 | Is it okay if I sit here? | phone-043(Is it okay if I bring a friend?)과 틀·key 같고 같은 덱 023(alt)·049 와도 겹침 → **Does that work for you?** (그렇게 해도 괜찮으세요? / key: work for you) + note |
| questions-009 | Could you give me an example? | 직장 코스 O16 예문과 완전히 같음 → **Could you give me an example of how to use it?** |
| questions-010 | What do you think of this color? | feelings-043(What do you think about my idea?)과 틀·key 같음 → **Do you think I should take the job?** (조언 구하기 / key: Do you think I should) |
| questions-012 | What time does it start? | numbers-019·work-005·questions-044 와 겹침(「몇 시에 ~」만 세 번) → **Why do you ask?** (왜 물어보세요?) + 말투 note |
| questions-013 | How long will it take? | travel-028 alt(How long will it take to get there?)·numbers-034 와 겹침 → **Can you show me how?** (어떻게 하는지 보여 줄래요?) |
| questions-033 | What would you do if you were me? | ko 「당신이 나라면」 → **제 입장이라면 어떻게 하겠어요?** |
| questions-038 | …go over that part again? | key 가 work-034(go over 검토하다)와 같음 → **go over ~ again** / 다시 한번 짚어 주다 |
| questions 기타 | 014·023·033 | alt 추가 (Have you been to Busan? / take a picture / in my position) |
| 8개 파일 공통 | (alt) | 채점기가 이미 같게 보는 alt 정리: How's your family?, I'm gonna…, Good luck, you've got this., I would just…, could've/must've, Dinner's ready., Really? Why's that? 등 |

비슷하지만 그대로 둔 것(뜻·상황이 달라 학습 가치 있음): phrasal-029/030(turn down 줄이다/거절하다), phrasal-007/023(take off 벗다/이륙하다), smalltalk-045/reactions-044(work out 운동하다/잘 풀리다), phrasal-011(write down)·phrasal-048(look into)·phrasal-013(hang out) — 구동사 덱이라 다른 덱과 key 가 같아도 문장이 달라서 둠, questions-005/042(What do you mean by that? → What exactly do you mean by soon? 심화), numbers-034(How long is the flight?)와 cafe-032(How long is the wait?), smalltalk-016(favorite)·feelings-019.

## 질문

1. **레슨 예문과 기본 덱의 같은 문장**: `core/deck.js` 의 `Deck.notes()` 는 「내 문장」(레슨 예문)과 기본 덱을 그냥 합쳐서, 같은 영어 문장이 두 장으로 나와요. 이번엔 제 파일 쪽을 바꿨지만(phrasal-004·007, idioms-026, online-013, questions-009), **reactions-018 「I'm so happy for you.」는 쓰기 코스 W3 예문(…for you!)과 같은데** 이 덱의 핵심 표현이라 그대로 뒀어요. 다른 코스가 예문을 늘리면 또 생길 수 있으니, `notes()` 에서 **en 을 정규화해 같은 문장이면 하나만** 넣을지 정해 주세요.
2. **채점기: 아포스트로피 없는 `its`**: `Its up to you` 는 오답이에요(its 는 다른 낱말이라 일부러 뺀 것으로 알아요). 그대로 둬도 될지 확인 부탁해요.
3. **`login` / `log in`**: `I can't login.` 은 오답이에요. 동사는 log in 이 맞아서 alt 에 안 넣었는데, 실제로 아주 흔하게 쓰는 형태라 허용할지 정해 주세요.
4. **ko 말투**: 덱 안에서는 해요체로 맞췄고, 부모가 아이에게 하는 말(home-027 「오늘 학교 어땠어?」, home-028 「숙제 다 했어?」)만 반말로 뒀어요. 덱 전체 기준을 「상황상 반말이 분명하면 반말」로 계속 갈지 확인 부탁해요.
5. **채점 중에 채점기가 바뀐 것 같아요**: 처음 정리할 땐 같다고 안 보던 `Dinner's ready` ↔ `Dinner is ready`, `Why's that` ↔ `Why is that` 이 작업 끝 무렵엔 같게 처리됐어요(다른 에이전트가 `'s` 규칙을 넓힌 듯). 지금 기준으로 정리했어요.
