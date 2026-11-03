# QA 기록 — basic (챕터 0~3: c0.js · c1.js · c2.js · c3.js)

검수 범위: 레슨 E1~E19 + 보스 B0~B3의 설명 쪽·예문·문제·힌트·해설 전부.
검사: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs` → basic FAILS 0 · 경고 0.
(전체 실행에서 나온 FAILS 3건(G11P5, GB3P6, K12P7)은 다른 코스(grammar·pattern) 파일이라 건드리지 않았어요.)

## 고친 것

| id | 문제 | 고친 내용 |
|---|---|---|
| E1 (2쪽) | R 이름 「아-ㄹ」이 미국식뿐임 | 「아-ㄹ (영국식은 「아-」)」로 미국/영국 차이 보충 |
| E1 (2쪽) | G 「쥐」 표기가 「위」 소리로 오해될 수 있음 | 「지」를 입술을 내밀며 말하는 소리이고 끝은 「이-」라고 한 줄 설명 추가 |
| E1 (3쪽) | 짧은 모음 「애·에·이·어」가 한국어 소리와 같다고 오해할 수 있음 | 한국어보다 짧고 힘을 뺀 소리(sit 의 i 는 「이」와 「에」 사이), 긴 소리는 다음 레슨에서 배운다고 보충 |
| E1 (3쪽) | 긴 o 「오우」가 미국식만 설명됨 | 영국식은 「어우」(go 「거우」)에 가깝다고 보충 |
| E2 terms | 「모음: a,e,i,o,u — 아·에·이·오·우」가 a=아 처럼 글자↔소리 1:1로 오해됨(같은 챕터에서 a=「애」라고 가르침) | 모음 소리의 뜻 + 글자마다 소리가 여러 가지라는 설명으로 바꿈 |
| E2 (1쪽) | 끝의 e 규칙에 예외 안내 없음 — 이후 계속 나오는 have 를 「헤이브」로 읽을 위험 | tip 추가: have·give·love·come 은 예외 |
| E3 (3쪽) | th 를 think(무성음)만 설명, 예문 This berry·the light 의 유성 th 설명 없음 | this·the 의 th 는 같은 자리에서 목을 울린다(「ㄷ」 아님) 추가 |
| E4 (2쪽) | pick it up 「피키럽」은 미국식 t 굴림인데 설명 없음 | 미국식 t 굴림 설명 + 영국식 「피키텁」 보충 |
| E4 (3쪽) | can't 「캐-앤(ㅌ)」·힘으로 구별은 미국식만 해당 | 미국식 기준임을 밝히고 영국식 「카-안(ㅌ)」(모음이 달라 구별 쉬움) 보충 |
| E3P3 | prompt 「은행에서 「오른쪽으로 도세요」…」가 「(지금) 은행에서 고르라」로 읽힘 | 「「은행에서 오른쪽으로 도세요」라는 뜻이 되게…」로 따옴표 위치 수정 |
| E1P7 | My name's Minho. 오답 처리 | answer 에 추가 |
| E3P8 | Turn to the right. 오답 처리 | answer 에 추가 |
| B0P4 | My name's Jihoon. 오답 처리 | answer 에 추가 |
| E9P7 | 틀린 곳이 두 군데(is·book)인데 prompt 에 안 밝힘 | prompt 「틀린 곳 **두 군데**를 고쳐…」 |
| E6P8 | They're in the office now. 오답 처리 | now 붙은 답 2개 추가 |
| B1P3 | I come from Busan. 오답 처리 | answer 에 I come from Busan. / I'm originally from Busan. 추가 |
| B1P5 | I feel a little nervous today. / I'm a little bit nervous today. 오답 처리 | answer 에 3개 추가 |
| E11 (2쪽) | -es 규칙에 -s·-x 빠짐(fixes 등) | 「-s·-x·-ch·-sh·-o → -es (fix → fixes)」 |
| E11 (3쪽) tip | 「동사 끝을 「스」로」 — goes·has 는 「즈」, watches 는 「이즈」라 틀린 발음 안내 | -s 끝소리 세 가지(스/즈/이즈)로 고침 |
| E12P9 | 힌트 「더즌트」라 해 놓고 t 는 안 들린다고 함(모순) | 「더즌(ㅌ)」으로 통일(c0 표기 방식과 같게) |
| E13 (3쪽) | 「Yes, I like. 처럼 동사를 반복하지 않아요」 — Yes, I like it. 은 맞는 말이라 이유가 부정확 | like 뒤 목적어가 필요해서 틀리고, 짧게는 Yes, I do. 로 받는다고 고침 |
| E14 (1쪽) 예문 · E14P8 | ko 「자매가 둘 있어요」 — 한국어로 어색(남자 주어에도 씀) | 「여자 형제가 둘 있어요」 |
| E14P8 | He's got two sisters. 오답 처리 | answer 추가 |
| E14P9 | want to 발음 힌트에 실제 구어 wanna 안내 없음 | 「미국식 구어에서는 「워너」(wanna)」 보충 |
| B2 (1쪽) 예문 | `'What|do you do|on weekends?'` + `'Q V M'` — 주어 you 가 동사(V) 덩어리에 섞임 | `'What|do|you|do|on weekends?'` + `'Q Q S V M'` |
| B2P4 · B2P6 | 같은 보스(동료와 대화)에서 예문은 해요체, 문제 ko 는 반말 혼재 | 해요체로 통일(B2P6 「너희 언니」→「지수 씨 언니」) |
| B2P4 | No, I don't like to hike. 오답 처리 | to hike 형 2개 추가 |
| B2P6 | Does your sister like to swim too? 오답 처리 | to swim 형 2개 추가 |
| E10P8 | I work for a bank. 오답 처리 | answer 추가 |
| E12P8 | 정답이 1개뿐 | I don't drink any coffee. 추가 |
| E13P8 | Have you got a dog?(영국식) 오답 처리 | answer 추가 |
| E14P7 | I need a little water. 오답 처리 | answer 추가 |
| E15 (3쪽) 예문 | `Were|you|…` roles 'V S C M' — 코스 나머지(c0·c1·다른 챕터)는 앞에 나온 be동사를 Q 로 표시 | 'Q S C M' 으로 통일 |
| E19 (3쪽) 예문 | `Are|you|listening?` roles 'V S V' — 위와 같은 불일치 | 'Q S V' (다른 챕터 'Was|the meeting|canceled?' 'Q S V' 와 같게) |
| E18 (2쪽) · E19 (3쪽) · B3 예문 4개 | I'm 이 들어간 축약형 문장에 roles(I'm=S) — 함정 목록 위반(am 이 주어 색에 들어감) | 덩어리·roles 제거(I'm going to visit…, I'm working from home today., I'm going to rest tomorrow., I'm cooking dinner now.) |
| E16 (2쪽) | -ed 소리 「wanted [티드]」 — [이드]가 붙는 규칙이 안 보이고 「티드」가 붙는 것처럼 읽힘 | worked 「웍트」[트] · played 「플레이드」[드] · t·d 로 끝나면 [이드](wanted 「원티드」, needed 「니디드」)로 다시 씀 |
| E16 (2쪽) · E19 (2쪽) | 「짧은 모음 + 자음 하나 → 자음 두 번」 — visit → visited 처럼 안 겹치는 긴 낱말도 있음 | 「(짧은 낱말)」 조건 추가 |
| E16P5 | 보기 stops 도 문법적으로 맞는 문장(The bus stops in front of the school.)이 돼 정답이 둘 | 문장을 Yesterday the bus ___ … 로 바꿔 과거만 정답, why 에 「어제 일이라 과거형」 추가 |
| E17 (3쪽) | said 를 「세이드」로 읽는 흔한 실수인데 발음 안내 없음 | 「said(소리는 「세드」)」 추가 |
| E18P3 | 함정 카드 visiting 으로 I'm visiting my parents this weekend.(맞는 문장)를 만들 수 있는데 오답 처리 | 함정을 visits 로 바꿈 |
| B3P4 | 정답 I slept early. 는 원어민이 잘 안 쓰는 표현(보통 went to bed early) | ko·문장을 「10시간 잤어」(I slept for ten hours.)로 바꾸고 숫자형(10 hours) 답 추가 |
| E15P7 | I stayed (at) home yesterday. 오답 처리 | answer 2개 추가 |
| E16P8 | I called Mom yesterday. 오답 처리 | answer 추가 |
| E18P7 | We're moving next month.(진행형 미래, 아주 자연스러움) 오답 처리 | answer 2개 추가 |
| B3P3 | We ate gimbap in the mountains. 오답 처리 | answer 2개 추가 |
| B3P6 | Tomorrow I will rest at home. 등 오답 처리 | answer 3개 추가 |

## 질문 (사용자 결정 필요)

1. **G 이름 표기 「쥐」**: 한국 영어 교재에서 흔히 쓰는 표기라 유지하고 설명만 붙였어요. 표준 표기 「지」로 바꿀까요? (「지」로 하면 Z(미국식 「지-」)와 구별이 안 되는 단점이 있어요.)
2. **발음 기준 = 미국식**: 챕터 0 설명은 「이 사이트가 들려주는 미국식 발음」이라고 해요. 그런데 `core/speech.js` 는 en-US 목소리를 우선으로 고르고, 기기에 없으면 다른 영어 목소리(영국식 등)로 바꿔요. 이런 기기에서는 설명과 소리가 다를 수 있어요. 설명 문구를 「대부분 미국식」으로 낮출지, 코드에서 목소리를 정할지 결정이 필요해요.
3. **앞에 나온 be동사의 성분 색**: Is/Are/Was/Were 로 시작하는 질문은 코스 대부분이 Q(질문어)로 칠해서 c3 의 2곳(V)을 Q 로 맞췄어요. 스키마 설명(Q = 의문사·Do/Does 앞머리)에는 be동사가 안 적혀 있어요. 「be동사가 앞으로 가면 Q」를 스키마 주석에 적어 둘까요? (스키마 파일은 제 담당이 아니라 고치지 않았어요.)
4. **보스 대화의 존댓말 수준**: B2(회사 동료 지수)는 해요체로 맞추고, B3(친구 Tom)는 원래대로 반말로 뒀어요. 이 기준(동료 = 해요체, 친구 = 반말)으로 괜찮을까요?
5. **everyday 붙여 쓰기**: E10P7 에서 I study English everyday. 는 오답이에요(꾸밈말은 every day, everyday 는 「일상적인」이라는 형용사). 일부러 그대로 뒀어요. 학습자가 억울해할 수 있으니 오답 해설에 이 차이를 보여 주는 기능이 있으면 좋겠어요.
6. **B0P4 답 「It's Jihoon, please.」**: 자연스럽지 않지만 정답으로 받아도 해가 없어서 그대로 뒀어요. 빼기를 원하면 말해 주세요.
