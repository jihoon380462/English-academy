# 단어장 검수 — 🧭 중학생 (g68)

- 범위: `courses/words/parts/w6-g68.js` 낱말 200개 전부 (ko·pos·en·exko·note·forms, 같은 레벨 퀴즈 보기 겹침, 레벨 적합성, 아래 레벨 중복, w7-g912 와의 경계)
- 기준: `specs/words-brief.md`, `courses/words/content.js` 스키마 주석, 퀴즈·빈칸 동작(`core/words-views.js` Words.find / WQuiz)
- 검사: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs` → **FAILS 0 · 경고 0**, 확인 4209건 FAILS 0 (고치기 전·후 모두)
- 추가 확인: 예문 빈칸이 200개 모두 낱말 또는 forms 의 정확한 형태에 걸림, 같은 레벨에서 첫 뜻이 같은 낱말 0쌍
- note·forms 복구 상태: 잘리거나 엉뚱한 낱말에 붙은 note·forms 없음(전부 해당 낱말 내용과 맞음). 다만 「새 뜻」 표시가 잘못 붙은 2건은 아래에서 고침.

## 고친 것

| id | 문제 | 고친 내용 |
| --- | --- | --- |
| g68-002 / 013 | evaluate·assess 뜻이 둘 다 「평가하다」로 시작 — 퀴즈 보기·빈칸에서 구별 불가 | evaluate「(가치·타당성을) 따져 평가하다」, assess「(수준·상태를) 평가하다; 가늠하다」; assess exko 를 「얼마나 아는지 평가」로 |
| g68-022 / 023 | affect「영향을 미치다」·influence「영향을 주다」 거의 같음 | affect「(~에) 영향을 미치다; 작용하다」, influence「(생각·선택에) 영향을 주다」 |
| g68-026 / 031 | acquire·obtain 둘 다 「얻다」 첫 뜻 | acquire「습득하다; (지식·능력을) 얻다」(예문 뜻 먼저), obtain「(노력해서) 구하다; 얻다」 |
| g68-043 / 044 | claim·argument 둘 다 「주장」 — 예문 빈칸에 서로 들어감 | claim「주장 (사실이라고 내세우는 말)」, argument「논증; 논거 (근거를 갖춘 주장)」 |
| g68-050 | function「기능; 역할」이 role「역할」과 겹침(빈칸에 role 도 들어감) | 「기능 (하는 일)」 |
| g68-062 / 066 / 117 | feature·characteristic·trait 이 「특징·특성」으로 뒤섞임 | feature「특징; 특색 (눈에 띄는 점)」, characteristic「(고유한) 특성」, trait「(유전되는) 형질; (사람의) 특성」 |
| g68-070 / 077 / 078 | significant「중요한」·primary「주된」·major「주요한」 거의 같음 | significant「(의미가) 중요한; 상당한」, primary「가장 주된; 으뜸가는」, major「(여럿 가운데) 주요한; 큰」 |
| g68-090 / 093 | therefore「따라서」·thus「따라서」 겹침, therefore exko 는 「그래서」 | therefore「그러므로; 따라서 (앞 내용에서 끌어낸 결론)」·exko「따라서」, thus「그리하여; 이렇게 해서」 + note「, thus + -ing」 |
| g68-046 / 178 | perspective「관점」·point of view「관점」 겹침 | perspective「관점; 시각 (보는 입장)」, point of view「(서술) 시점 (1인칭·3인칭 등); 관점」 |
| g68-010 | indicate「나타내다」가 represent「나타내다」와 첫 뜻 같음 | 「(~임을) 가리키다; 알려 주다」 |
| g68-006 | ko 「들다」 단독은 뜻이 안 통함 | 「(근거로) 인용하다; (예·근거를) 들다」 |
| g68-007 | 예문 뜻(근거를 대다)이 뒤에 있음 | 「(타당한) 근거를 대다; 정당화하다」 |
| g68-120 | 예문은 「물 절약」인데 ko 첫 뜻은 「보호」 | 「(자원) 절약; (자연) 보호·보존」 |
| g68-149 | 1차 「사료」 / 150 은 2차 「자료」 — 용어 불일치 | 「1차 자료 (…)」, exko 도 「1차 자료예요」 |
| g68-066 | 사실 오류: 모든 포유류가 fur(모피)를 가진 건 아님(고래 등) | en「Having hair or fur is a characteristic of all mammals.」 exko 맞춤 |
| g68-070 | 「백신이 순간(moment)이었다」 — 의미가 어긋난 문장 | en「…was a significant step in the history of medicine.」 exko「중요한 한 걸음」 |
| g68-098 | 상어 역사 「수백만 년」은 실제(4억 년 이상)보다 크게 과소 | en「…have lived on Earth for hundreds of millions of years.」 exko「수억 년」 |
| g68-113 | 「햇빛을 양분으로 바꾼다」는 부정확한 설명 | en「…plants use energy from sunlight to make food.」 exko 맞춤 |
| g68-121 | 「우주의 모든 물질은 원자」 — 암흑 물질 때문에 과장 | en「All the matter around us is made of tiny atoms.」 exko 맞춤 |
| g68-138 | 예문 fossil fuels 에서 빈칸이 「fossil fuel」만 가려 뒤에 s 가 남음, 석유=고대 식물 설명도 느슨 | en「Coal is a fossil fuel that formed from plants that lived millions of years ago.」 forms 삭제, exko 맞춤 |
| g68-169 | branch note 「새 뜻:」 — 아래 레벨에 branch 없음(표시 오류) | note「기본 뜻은 「나뭇가지」예요.」 |
| g68-185 | mood note 「새 뜻:」 — 아래 레벨에 mood 없음(표시 오류) | note「일상에서는 「기분」 뜻으로 더 많이 써요.」 |
| g68-035 | note 「늘 consist of」 — consist in 도 있음 | 「주로 consist of ~ 꼴로 써요.」 |
| g68-004 | exko 「긴장했다고」 — 원문은 현재(is nervous) | 「긴장하고 있다고」 |
| g68-008 | exko 「나이를 알아냈어요」 — 원문은 목적(to determine) | 「흙의 나이를 알아내려고 흙을 검사했어요」 |
| g68-063 | exko 「식량을 기르는 데」 어색 | 「식량 생산에」 |
| g68-067 | exko 「차를 타는 것 대신 할 수 있는 건강한 대안」 어색 | 「차를 타고 가는 것을 대신할 건강한 대안」 |
| g68-186 | exko 「어조가 성나 있어요」 — becomes(바뀜) 빠짐 | 「작가의 어조는 화난 투로 바뀌어요」 |
| g68-187 | exko 「내가 … 예요」 반말·존댓말 섞임 | 「제가 가장 좋아하는」 |
| forms 30건 (005·009·015·018·020·021·023·024·025·029·031·033·034·035·037·038·039·040·058·106·109·115·116·121·139·145·146·147·148·159) | 예문 속 변화형(concluded, demonstrates, genes …)이 forms 에 없음(앞부분 일치로만 통과) | 예문에 쓰인 형태를 forms 에 추가 |

종류별: 퀴즈 뜻 겹침 정리 13건(낱말 23개) · ko 정확도·순서 4건 · 사실/의미 오류 예문 6건 · note 표시 오류 3건 · exko 6건 · forms 추가 30건.

## 그대로 둔 것(판단)

- **"Sally sells seashells"(g68-198)**: 전래 말놀이(tongue twister) 변형이라 특정 책 문장 복사가 아니고 실존 인물도 아님 → 유지.
- **tax·novel·virus·pollution·data·role·debate 등 비교적 쉬운 낱말**: 4~5학년에도 나오지만 6~8학년 사회·과학·국어 교과서에서 학술 용어로 자주 쓰여 유지. 아래 레벨(w1~w5)에는 없음.
- **onomatopoeia·simile·metaphor**: 4~5학년에서 처음 배우기도 하지만 중학교 국어(ELA) 표준 용어라 유지(아래 레벨에 없음).
- **conclude ↔ infer, demonstrate ↔ reveal, accurate ↔ reliable, effective ↔ efficient 등**: 빈칸에 문법상 둘 다 들어갈 수 있으나 ko·exko(결론 내렸어요/추론할 수 있어요, 효과적인/효율이 높아요 …)로 구별 가능 → 유지.
- **right(g68-165)**: 아래 레벨 g2 에 right(adv) 있음 → 「새 뜻」 note 정당, 유지.
- **w7-g912 경계**: reliable↔credible, relevant↔pertinent, assess↔gauge, involve↔entail, decline↔diminish, legislature↔legislation 처럼 쉬운 쪽이 중학생, 어려운 쪽이 고등학생으로 자연스럽게 나뉘어 있음 → 문제없음.
- **g68-004 infer forms 「inferred」, g68-144 dynasty 「dynasties」 등 예문에 안 쓰인 forms**: 불규칙 철자 안내용으로 해롭지 않아 유지.
- **g68-172 「promised reform of the school system」**: reforms to 가 더 흔하지만 문법·의미상 맞아 유지.
