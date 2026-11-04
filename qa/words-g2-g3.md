# 단어장 검수 — ✏️ 2학년(g2) · 📘 3학년(g3)

- 범위: `courses/words/parts/w3-g2.js` (154낱말), `courses/words/parts/w4-g3.js` (150낱말) 전체. 특히 g2 「읽기책」에서 새로 바꾼 낱말 30개 정도와 g3 giggle.
- 기준: `specs/words-brief.md`, `courses/words/content.js` 스키마 주석. 퀴즈 빈칸·하이라이트 로직(`core/words-views.js` 의 `Words.find`)으로 빈칸에 들어갈 변화형까지 확인함.
- Dolch 목록 대조: Grade 2 46개 = g2-001~046, Grade 3 41개 = g3-001~041, Dolch 명사 나머지 50개 = g2-047~096. 빠지거나 더 들어간 것 없음.
- 아래 레벨(prek·k1)과 겹치는 낱말 없음.
- 검사: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs` → **FAILS 0 · 경고 0 / 확인 4209건 · FAILS 0**

## 고친 것

| id | 문제 | 고친 내용 |
| --- | --- | --- |
| g2-003 does | 예문은 의문문을 만드는 does인데 ko가 「하다」부터 시작함. exko의 「당신 강아지」가 번역투 | ko 순서 바꿈 「질문·부정을 만드는 do; 하다」, exko 「강아지가 수영하는 걸 좋아해요?」 |
| g2-015 use | 「You can use my blue crayon.」이 g2-126 borrow 예문(크레용 빌리기)과 너무 비슷해서 빈칸에 use도 borrow도 들어감 | 예문 → 「We use a spoon to eat soup.」 |
| g2-017 wish | exko에 원문에 없는 「저도」가 들어감 | 「강아지가 있으면 좋겠어요.」 |
| g2-023 around | exko 「뛰어 돌았어요」가 어색함 | 「나무 둘레를 빙빙 돌며 뛰었어요」 |
| g2-041 its | 예문이 g2-110 wing과 거의 같음(The bird flapped its wings) | 예문 → 「The cat licked its paw.」 |
| g2-055 home | 「Our home is next to the park.」에는 house가 더 자연스럽고, 빈칸에 house도 똑같이 들어감. ko 「집, 가정」이 house 「집 (건물)」과 거의 같음 | 예문 → 「A nest is a home for baby birds.」, ko 「보금자리, (사는) 집; 가정」 |
| g2-062 money | exko 「모아요」가 keep(넣어 두다)과 어긋남 | 「돈을 돼지 저금통에 넣어 둬요」 |
| g2-064 shoe | my other shoe(나머지 한 짝)의 뜻이 exko에 안 드러남 | 「신발 나머지 한 짝을…」 |
| g2-087 wood | ko가 「나무」로 시작해서 tree 「나무」와 퀴즈 보기가 겹침 | 「목재, 나무 (재료); (woods) 숲」 |
| g2-109 worm | 예문은 지렁이 뜻인데 ko가 「벌레」부터 시작함(insect 곤충과도 헷갈림) | 「지렁이; (꿈틀거리는) 벌레」 |
| g2-126 borrow | exko가 반말(「빌려도 돼?」)이라 해요체 기준에 안 맞음 | 「빨간 크레용 좀 빌려도 돼요?」 |
| g2-139 noisy | exko 「점심 식당」이 어색함(lunchroom) | 「학교 식당은 점심때 늘 시끌벅적해요.」 |
| g3-006 draw | exko 「길의 지도」가 어색함 | 「여러분이 사는 거리를 지도로 그려 보세요.」 |
| g3-012 hurt | 예문은 「무릎을 다쳤다」인데 ko가 「다치게 하다」뿐임 | 「다치다, 다치게 하다; 아프다」 |
| g3-015 pick | ko 「고르다…」와 예문(책 고르기)이 g3-091 choose(고르다, 선택하다)와 같아서 퀴즈 보기가 헷갈림 | 예문 → 「We picked apples at the farm.」, ko 「(꽃·열매를) 따다; 고르다」, forms picked |
| g3-020 better | 「better than last time」은 구어체이고 주어와 비교 대상이 어긋남 | 「This drawing is better than my last one.」 |
| g3-030 warm | 「on the cold night」은 관사가 어색함 | 「on that cold night」 + exko 맞춤 |
| g3-059 / 061 / 062 / 068 | 예문 속 과거형 discovered·escaped·whispered·decided가 forms에 없음 | forms 추가 |
| g3-062 whisper | exko 「그녀가」가 번역투 | 「그 아이가 속삭였어요」 |
| g3-064 sneak | 과거형(sneaked/snuck) 안내가 없음 | note 추가 |
| g3-072 plan | 「이야기 속 동사」 묶음에 명사(pos n)로 들어 있음 | 동사로 바꿈: 「We planned a surprise party for Mom.」, ko 「계획하다」, forms planned, note에 명사 뜻(make a plan) |
| g3-122 friendly | ko 「다정한, 상냥한」이 g3-024 kind 「친절한, 다정한」과 겹침 | 「친근한, 상냥한」 |
| g3-134 minute | 예문(Wait a minute)은 「잠깐」 뜻인데 ko가 「분」부터 시작함 | 「잠깐, 잠시; (시간의) 분」 |

## 그대로 둔 것(판단)

- **Dolch 명사 50개가 g2에 있음**: 원래 Dolch 명사는 K–1 수준이지만, 브리프에 「k1 절반 + g2 나머지」로 정해져 있어서 그대로 둠.
- **does·don't·been·would의 pos가 v임**: 조동사 품사가 스키마에 없어서 v로 둠. ko·note에 쓰임을 적어 둠.
- **g2-051 men을 따로 둠**: Dolch 목록에 man·men이 둘 다 있어서 그대로 둠.
- **g2-092 Santa Claus**: 실존 인물·브랜드가 아니고 Dolch 명사라서 그대로 둠. 낱말 하나가 아니라 구(phrase)지만 빈칸 로직으로 정상 처리됨.
- **빈칸에 다른 낱말도 들어가지만 exko로 구별되는 것**: tomorrow/today, spill/drop(Oops! I ___ my juice.), river/stream, milk/water, upset/angry. exko를 보면 답이 하나로 정해져서 그대로 둠.
- **g3-139 autumn**: 미국 3학년 글에서는 fall이 더 흔함. 다만 fall(g3-008 동사)과 겹치지 않게 autumn을 쓰고, note에 「미국에서는 fall도 많이 써요」를 적어 두었으니 그대로 둠.
- **g3-083 subtract**: 1~2학년에도 나오지만 3학년 교실 수학 지시문에 자주 나와서 그대로 둠.
- **g2-006 sister의 exko 「언니」**: 성별·나이가 원문에 없어서 하나로 고를 수밖에 없음. sister 항목 note에 우리말 대응을 설명해 두었음.
