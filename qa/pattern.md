# QA — 핵심 패턴 회화 (pattern) · p1~p4 (K1~K20, KB1~KB4)

검수 범위: courses/pattern/parts/p1.js · p2.js · p3.js · p4.js — 레슨 24개(보스 4 포함), 문제 212개 전부.
검사: `stamp → validate_content → check_answers` pattern FAILS 0 · 경고 0.
학습자 답 시험 220건(정답 변형 + 틀린 답이 떨어지는지): 틀린 답(-) 전부 오답 처리 확인. 정답 변형 중 자연스럽고 흔한 것은 answer 에 추가했고, 남은 29건은 일부러 넣지 않음(아래 「그대로 둔 것」).

## 고친 것

| id | 문제 | 고친 내용 |
|---|---|---|
| K1P7 | type: 새 노트북을 사고 싶어요 | `a new notebook` 은 영어에서 「공책」이라 정답에서 뺌(힌트에 이미 노트북 = laptop). `I'd like to buy a new laptop.` 추가 |
| K2P8 | type: 물 한 잔 주세요 | Could I have a glass of water? / Can I have · Could I get · Could I have some water, please? 추가 |
| K3P6 | fix | I have to finish the report by Friday. 추가 |
| K3P8 | type: 내일 일찍 일어나야 해요 | have to … tomorrow morning, need to wake up … tomorrow morning, I must get up early tomorrow 추가 |
| K4P6 | fix: 생일 파티에 올래? | Would you like to come to my birthday party? 추가 |
| K5P6 | fix | Could I borrow your charger, please? 추가 |
| K5P8 | type: 물 좀 더 주실 수 있어요? | ko 직역형 Could/Can you give me / bring me some more water?, Could I have more water? 추가 |
| KB1P4 | type: 오후에 영화 볼래? | go to the movies 변형, (Then) how about watching a movie in the afternoon? 추가 |
| KB1P8 | speak | 보스 이야기 순서가 깨짐(P7 토요일 영화관 매점 → P8 다시 「토요일 2시에 만날래?」 약속 잡기) → 영화가 끝난 뒤 「이제 피자집 갈래?」(Do you want to go to the pizza place now?)로 바꿔 P6(영화 끝나고 피자집)와 이어지게 |
| K6P6 | fix | I'm going to call Mom tonight. 추가 |
| K7P4 | order: 올해 결혼할 계획이에요 | 함정 `getting` 으로 「We're getting married this year.」(맞는 문장, 뜻도 거의 같음)가 만들어짐 → 함정을 `plan` 으로 |
| K7P6, K7P8 | fix/type | travel to Jeju, Are you planning to travel this summer?, Do you have any plans to go anywhere this summer? 추가 |
| K9P6 | fix: 막 퇴근하려던 참 | I'm about to get off work. (퇴근하다의 가장 흔한 표현) 추가 |
| K9P8 | type | just about to leave / head out + call you back later 조합 추가 |
| K10P8 | type | I was going to go, but something happened. 추가 |
| KB2P2 | order: 일주일 휴가 낼 거예요 | 함정 `taking` 으로 「I'm taking a week off next month.」(맞는 문장, 뜻도 같음)가 만들어짐 → 함정을 `took` 으로 |
| KB2P3 | type | go on a trip to / I'm planning a trip to Vietnam … 추가 |
| K11 1쪽 팁 | been to | 「가 본 적은 gone 이 아니라 been to」라고만 해서 K11P4 정답 `gone camping` 과 충돌 → 「(어떤 곳에) 가 본 적은 보통 been to (gone to 는 주로 가 버리고 거기 있다), ~하러 가 본 적은 been camping · gone camping 둘 다」로 정확히 |
| K11P4 | order: 캠핑 가 본 적 | 힌트 2에 「been camping 도 맞아요」 보충 |
| K11P6 | fix | Have you seen a ghost? / … before? 추가 |
| K11P7, K11P8 | type | been to / traveled to a foreign country, gone overseas, Have you been abroad?, watched the movie 변형 추가 |
| K12P7 | fix: I haven't never been to Japan. | **채점기 v0.3.0 반영**: 빼 두었던 `I haven't ever been to Japan.` 다시 추가(틀린 문장 never↔ever 는 여전히 오답 확인). why 도 「I've never … 또는 I haven't ever …」로 |
| K12P8 | type: 비행기 타 본 적 없어요 | been on an airplane, flown in a plane, taken an airplane 추가 |
| K13 3쪽 팁 | used to | 「~하곤 했다는 **언제나** used to」가 같은 쪽 본문(didn't use to)과 모순 → 「긍정문에서는 언제나 used, d 가 빠지는 건 did/didn't 뒤에서만」 |
| K14P6 | fix | I'm used to working at home. 추가 |
| K15P6 | fix | at 11 o'clock / eleven o'clock 추가 |
| K15P8 | type | but today I'm going to eat out, tonight I'm going out for dinner 추가 |
| KB3P2 | type | lived in a foreign country 추가 |
| KB3P5 | fix: 젓가락 칭찬 | Tom 과 1:1 대화 중인데 「Tom is used to …」(3인칭)로 칭찬해 어색 → `You are used to eat with chopsticks!` → `You are used to eating with chopsticks!`, ko 「젓가락으로 먹는 데 익숙하시네요!」, 힌트 3 수정. using chopsticks 변형 추가 |
| KB3P7 | type | I'll stay / I'm going to stay a little longer, leave early, Usually I … 어순 추가 |
| K16 2쪽 | Why don't you try this one? | ko 「입어 보는 게 어때요」와 맞추려면 try **on** → `Why don't you try this one on?` (덱 카드로 들어가는 문장) |
| K16P6 | fix | How about going to the park? 추가(why 에서 -ing 는 How about 뒤라고 설명하므로) |
| K16P7, K16P8 | type | take a little break, have a rest, rest for a while, try asking Mina 추가 |
| K17P5 | fix | going on a hike, How about hiking this weekend? 추가 |
| K17P6 | fill: How about ___ the cheaper one? | 직접 쓸 때 getting · buying 도 정답으로 |
| K17P8 | type | What about meeting this Saturday?, How about meeting Saturday? 추가 |
| K18P6 | fix | Would you mind if I took a photo/picture? 추가 |
| K18P8 | type | Would you mind if I ask you a question?(대화체), May I ask a question? 추가 |
| K19P8 | type | book / make a reservation ahead of time 추가 |
| K20P7 | type | Is it worth watching? 추가 |
| KB4P2 | type | How about holding the event on Friday instead?, How about Friday instead of Saturday? 추가 |
| KB4P7 | type | Shall we meet again next week? 추가 |

## 추가 작업 (다른 코스) — 채점기 v0.3.0 반영
| id | 파일 | 고친 내용 |
|---|---|---|
| G11P5 | courses/grammar/parts/g3.js | `That is the thing that I want.` 다시 추가. 틀린 문장 `That is the thing what I want.`(와 That's …)은 여전히 오답 확인 |
| GB3P6 | courses/grammar/parts/g3.js | `The thing that I really need is my laptop.` 다시 추가. 틀린 문장 `The thing what I really need …` 은 여전히 오답 확인 |

※ qa/grammar.md 의 「확인했지만 그대로 둔 것」·「질문 1」(what↔that) 은 이제 해결됐어요(그 파일은 문법 코스 담당이라 손대지 않음).

## 확인했지만 그대로 둔 것
- build/order 는 카드로만 만드니 카드에 없는 변형(K3P3 bags, K5P3 Could I have, K11P3 had, K14P4 waking, K19P4 cab, K20P4)은 넣지 않음.
- 패턴을 벗어나거나 뜻이 달라지는 답은 오답 유지: K6P8 `I will clean …`(계획은 going to 를 익히는 문제), K9P8 `I was about to leave`(ko 는 「참이야」 현재), K13P7 `used to hate`, K15P8 `but today I eat out`(진행형을 익히는 문제), K19P8 `it's better to …`, K12P8 `ridden a plane`(부자연스러움), K20P8 `the waiting`, K15P6 `I usually sleep at eleven`(「잠자리에 들다」는 go to bed).
- fix 문제는 틀린 곳만 고친 답이 기본이라 문장을 크게 바꾼 답(K1P5 after I finish work, K10P6 cellphone, K12P7 gone to, K13P5 … before)은 넣지 않음.
- 함정 카드로 만들 수 있는 다른 맞는 문장 중 ko 와 뜻이 다른 것(K9P5 `I was calling you!`, K18P5 `Do you mind using your phone?`, K13P4 `We go camping every summer.`)은 오답 처리가 공정해서 유지.
- K5P7 · K7P7 · K10P7 의 listen 이 레슨 중간(fix 뒤)에 있어요. 사다리상 앞쪽 유형이지만 문장이 길고 내용 이해를 묻는 문제라 난이도로는 그 자리가 맞아 유지.

## 질문
1. **K1P7 「노트북 = notebook」**: 영어에서 notebook 은 보통 공책이라 정답에서 뺐어요(힌트에 laptop 이 나와요). 한국식 표현을 너그럽게 받아 줄지, 지금처럼 오답으로 laptop 을 익히게 할지 정해 주세요.
2. **K6P6 will 허용**: 「오늘 밤에 엄마한테 전화할 거예요」 fix 에서 `I'll call my mom tonight.` 를 정답으로 받는데, 같은 레슨 K6P8 은 will 을 안 받아요(레슨이 going to = 미리 정한 계획, will = 그 자리에서 정한 일로 구별). 둘 다 받을지 / 둘 다 안 받을지 통일이 필요해요. 지금은 원작 그대로 둠.
3. **채점기(공용) — 명사 + 's 축약**: `My dad's used to …`, `This museum's worth visiting.` 처럼 명사 뒤 's(= is)는 축약형으로 안 풀려서 오답이 돼요(I'm·He's 같은 대명사만 풀림). 소유격과 구별이 어려워 core/grader.js · shared/contractions.js 쪽 판단이 필요해요. 공용 파일이라 손대지 않았어요.
4. **KB2 시간 흐름**: 「다음 달에 휴가 낼 거예요」 + 「7월에 가려 했는데 비행기 표가 비쌌어요」 — 지금이 7월이면 자연스럽지만 6월이면 모순으로 읽힐 수 있어요. 상황 설명에 「7월 초」 같은 날짜를 넣을지 정해 주세요.
