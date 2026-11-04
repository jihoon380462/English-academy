# 단어장 QA — 🔬 4~5학년 (g45)

- 검수 범위: `courses/words/parts/w5-g45.js` 낱말 187개(g45-001~187) 전체. 뜻(ko)·품사·예문(en)·예문 뜻(exko)·note·forms, 같은 레벨 안 뜻 겹침·빈칸 문제 혼동, 레벨 적합성, 아래 레벨 중복.
- note/forms 복구 확인: 원본 `g45.txt`(생성 스크립트 입력)와 낱말별로 맞대어 비교 — 복구본이 원본과 187개 모두 같고(잘린 note·엉뚱한 낱말에 붙은 note 없음), note 21개 내용도 각 낱말에 맞음.
- 빈칸 위치 확인: 화면 코드(`Words.find`)와 같은 방식으로 187개 예문에서 낱말을 찾아봄 — 모두 올바른 낱말에 빈칸이 생김(앞 낱말에 잘못 걸리는 경우 없음).
- 검사: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs` → **FAILS 0 · 경고 0**, 확인 4209건 FAILS 0.

## 고친 것

| id | 문제 | 고친 내용 |
| --- | --- | --- |
| g45-043 extinct | exko 「수백만 년 전」은 실제(약 6,600만 년 전)와 자릿수가 틀림 | en 「…about 66 million years ago.」, exko 「약 6,600만 년 전에 멸종했어요.」 |
| g45-040 hibernate | 「Bears hibernate in caves」 — 모든 곰이 겨울잠을 자는 것도, 꼭 동굴에서 자는 것도 아님 | 「Many bears hibernate in dens…」 / 「많은 곰이 … 굴에서 겨울잠을 자요.」 |
| g45-070 gas | 「Steam is water in the form of a gas」 — 눈에 보이는 김(steam)은 엄밀히는 물방울; exko 는 이미 「수증기」 | en 「Water vapor is water in the form of a gas.」 |
| g45-082 result | 「어두운 곳의 식물은 자라지 않았다」는 사실과 다름(웃자라며 약하게 자람) | 「did not grow well」 / 「잘 자라지 못했어요」 |
| g45-107 law | 헬멧 법이 어디에나 있는 것처럼 일반화 | 「In our town, there is a law…」 / 「우리 마을에는 …」 |
| g45-144 patient | 「Be patient, because…」 어색함, 빈칸 「Be ___.」에 cautious·bold 등도 들어감 | 「You have to be patient while you wait for the seeds to sprout.」 / 「씨앗이 싹 틀 때까지 참을성 있게 기다려야 해요.」 |
| g45-083 material | ko 「재료; 물질」이 matter(물질, g45-067)와 겹쳐 퀴즈 보기 혼동 | ko 「재료; 소재」 |
| g45-164 uneasy | ko 첫 뜻 「불안한」이 anxious(불안한; 걱정하는, g45-161)와 같음 | ko 「(왠지) 마음이 불편한; 꺼림칙한」, exko 「…왠지 마음이 불편했어요.」 |
| g45-058 temperature | 예문 뜻(기온)이 둘째 뜻 | ko 「기온; 온도」 |
| g45-087 border | 예문은 주 경계인데 「국경」이 먼저 | ko 「경계; 국경」 |
| g45-094 capital | 예문은 주도인데 「수도」가 먼저 | ko 「(미국 주의) 주도; (나라의) 수도」 |
| g45-096 century | 예문·exko 는 「100년」 | ko 「100년; 세기」 |
| g45-129 fiction | 예문·exko 는 「지어낸 이야기」 | ko 「지어낸 이야기; 소설」 |
| g45-141 generous | 예문은 나눠 주는 뜻 | ko 「아낌없이 주는; 너그러운」 |
| g45-150 gentle | 「gentle with」(살살·부드럽게 대하는) 뜻이 빠짐 | ko 「다정한; 부드러운; 온순한」 |
| g45-139 trustworthy | exko 「친구들이 그녀에게」 번역투 | 「케이트는 믿을 만한 아이라서 친구들이 비밀을 털어놓아요.」 |
| g45-127 solution | 같은 레벨에 과학 낱말이 많은데 「용액」 뜻 안내 없음 | note 「과학에서는 「용액」이라는 뜻도 있어요.」 |
| 묶음 제목 | 「문학 — 이야기의 요소」에 heading·caption·glossary·nonfiction·biography(책·논픽션 요소)도 들어 있음 | 「읽기 — 이야기와 책의 요소」 |
| forms 27개 | 예문 속 변화형이 forms 에 없음 (g45-012 measured, 030 adapted, 038 herbivores, 047 nutrients, 050 muscles, 053 orbits, 060 evaporated, 061 condenses, 078 dissolves, 079 absorbs, 080 reflects, 082 results, 083 materials, 091 landforms, 095 ancestors, 101 settlers, 103 immigrants, 108 citizens, 116 traded, 118 services, 136 rhymes, 178 gasped, 179 glanced, 180 wandered, 181 trembled, 182 muttered, 183 realized) | 각 낱말 forms 에 추가 |

## 그대로 둔 것(판단)

- **빈칸 문제에서 다른 낱말도 들어갈 수 있는 쌍** — compare/contrast, century/decade, fable/legend/myth, selfish/greedy, confused/puzzled, eventually/gradually, describe/summarize, settler/pioneer: 모두 exko 가 「비교해서/대조해」「10년/100년」「우화」「이기적인」「어리둥절한」「결국」처럼 정답을 가려 주므로 그대로 둠.
- **쉬운 편인 낱말**(fact, law, planet, magnet, volcano, earthquake, clever, wise, greedy, gentle 등): 아래 레벨(prek~g3)에는 없고, 4~5학년 과학·사회·문학 단원에서 교과 용어로 다시 다뤄지는 낱말이라 유지.
- g45-090 equator 「Countries near the equator are warm all year.」 — 고산 지대 예외가 있지만 4~5학년 교과서 수준의 일반화라 유지.
- g45-132 fable(느린 거북이 이기는 우화)·g45-155 cruel(새엄마·Ella) — 옛이야기 소재를 빌린 직접 지은 문장이며 실존 인물·책 문장 복사가 아님.
- g45-131 biography·g45-167 delighted exko 의 「나는」 — 아이 화자 문장이라 해요체와 함께 써도 자연스러워 유지. g45-181 tremble 「그녀의 손」도 책 번역 문체로 허용.
- g45-042 larva forms 「larvae」, g45-015 classify forms, g45-100 colony forms — 예문에는 없지만 참고용 변화형이라 유지.
- 분량 187개(기준 약 180) 유지. 아래 레벨 중복 없음(검사기 통과), shared/ 문제 없음.
