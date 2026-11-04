# 단어장 검수 — 🎓 고등학생 (g912)

- 범위: `courses/words/parts/w7-g912.js` 낱말 212개 전부 (뜻·품사·예문·예문 뜻·note·forms·퀴즈 보기 겹침·레벨 적합성·아래 레벨 중복)
- 기준: `specs/words-brief.md`, `courses/words/content.js` 스키마 주석, 퀴즈 코드 `core/words-views.js`(빈칸 = `find()`, 보기 = 같은 레벨 같은 품사)
- 검사: `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs` → **FAILS 0 · 경고 0**, 확인 4209건 FAILS 0
- 추가 점검(스크립트): 낱말마다 빈칸에 실제로 잡히는 낱말 확인, 같은 레벨 안 뜻(ko) 핵심어 겹침 확인, 아래 레벨(prek~g68)과 같은 어근 낱말 확인

## 고친 것

| id | 문제 | 고친 내용 |
| --- | --- | --- |
| 001·002·004·006·013·015·017·019·020·025·034·035·075·076·080·082·083·084·085·088·090·091·099·101·102·104·110·129·132·133·156·179·185 (33개) | 예문 속 변화형(advocates, corroborated, sanctions …)이 forms 에 없음 | forms 에 해당 변화형 추가 |
| 002 assert / 003 contend / 017 allege | 셋 다 ko 핵심이 「주장하다」 — k2w·빈칸 퀴즈에서 구별 불가 | assert「단언하다, (자신 있게) 강하게 주장하다」, contend「(반대에 맞서) 주장하다; 다투다」+ exko「~며 맞서요」, allege「혐의를 제기하다, (입증 안 된 잘못을) 주장하다」+ exko「혐의를 제기해요」 (allege 의 「증거 없이」는 부정확해서 바꿈) |
| 004 refute / 016 dispute | 둘 다 「반박하다」 | dispute →「이의를 제기하다, (사실인지) 문제 삼다」 |
| 010 compelling / 011 cogent | 둘 다 「설득력 있는」, 빈칸에 서로 들어감 | cogent →「(논리가) 탄탄해 수긍이 가는」, exko「논리가 탄탄한 설명」 |
| 013 corroborate / 015 bolster / 089 intensify | 「뒷받침하다」「강화하다」 겹침 | corroborate「(다른 증언·증거로) 확증하다, 사실임을 확인해 주다」(exko 맞춤), bolster「(주장·사기를) 강화하다, 받쳐 주다」, intensify「(더) 심해지다, 거세지다; 더 강하게 하다」 |
| 014 undermine / 099 erode | 둘 다 「약화시키다」 | undermine「(기반·신뢰를) 훼손하다, 약화시키다」, erode「(서서히) 갉아먹다, 무너뜨리다; 침식하다」 |
| 018 fallacy / 143 misconception | 둘 다 「잘못된 생각」 | fallacy「(논리적) 오류, 잘못된 추론」, misconception「오해, 잘못 알려진 사실」 |
| 019 presume / 129 deem / 131 gauge | 「여기다」「판단하다」 겹침 | presume「추정하다, (당연하게) 전제하다」, deem「(공식적으로) ~라고 여기다, 판정하다」, gauge「가늠하다, 어림잡아 판단하다」 |
| 020 implication / 090 ramification / 091 repercussion | 세 낱말 예문 빈칸에 서로 다 들어감, ko「영향」 겹침 | implication 예문을 「implications for ~(시사점)」로 교체·ko「시사점, (앞으로 미칠) 영향; 함축된 뜻」, ramification「(예상 못 한) 파장, 뒤따르는 결과」, repercussion「(나쁜) 반향, 후폭풍」+ exko「후폭풍」 |
| 041 cynical / 063 sardonic | 둘 다 「냉소적인」 | sardonic →「비꼬듯 비웃는, 빈정대는」 |
| 044 aloof / 047 callous | 둘 다 「냉담한」 | aloof「쌀쌀맞은, 거리를 두는」, callous「무정한, (남의 고통에) 무감각한」 |
| 064 disdain / 065 contempt | 둘 다 「경멸」, 빈칸에 서로 들어감 | disdain「업신여김, 하찮게 봄」+ note(contempt 와 차이), contempt「경멸 (가치 없다고 깔보는 강한 감정)」 |
| 077 alleviate / 078 mitigate | 둘 다 「완화하다」 | alleviate「(고통·불편을) 덜어 주다」+ 예문 traffic → traffic congestion(자연스러운 연어), mitigate「(피해·위험의 정도를) 줄이다, 경감하다」 |
| 083 diminish | 예문 「Her fear ___」에 subsided 도 똑같이 들어감 | 예문을 섬 인구 감소 문장으로 교체(subside 불가) |
| 102 facilitate / 103 foster | 둘 다 「촉진하다」 | facilitate「(일을) 쉽게 하다, 원활하게 하다」, foster「(감정·능력을) 기르다, 북돋우다」 |
| 120 viable / 121 feasible | 「실행 가능한 / 실현 가능한」 사실상 같음, 빈칸 상호 대체 | viable「(현실적으로) 쓸 만한, 존속·성공할 수 있는」, feasible「(해낼 수 있는지 따져 봐서) 실현 가능한」 |
| 005 counterargument | 「addresses the counterargument」 — 정관사만으로는 어색 | 「the most obvious counterargument」, exko 맞춤 |
| 056 gregarious | 「preferred a quiet book」 어색한 영어 | 「preferred to stay home with a book」, exko 맞춤 |
| 127 anecdotal | 「Anecdotal stories」 중복 표현(일화=이야기) | 「Anecdotal evidence」, exko 맞춤 |
| 185 constituent | 「town meeting」보다 미국 시사 글은 「town hall meeting」 | 예문 수정, exko「주민 간담회」 |
| 137 obsolete | exko「사라졌어요」가 「구식이 된」 뜻을 못 살림 | 「시대에 뒤떨어져 사라졌어요」 |
| 146 irony | exko「씁쓸한 아이러니하게도」 비문 | 「참으로 씁쓸한 아이러니지만」 |
| 167 unreliable narrator | exko「하나도 빠짐없이 빼먹어요」 어색 | 「모조리 빼 버려요」 |
| 176 didactic | exko 어순이 영어 직역이라 어색 | 「지나치게 교훈적으로 흘러서, 마치 작가가 … 설교하는 것 같아요」 |
| 177 legislation | exko가 would(가정)를 반영 못 함 | 「새 법이 생기면 … 금지될 거예요」 |
| 186 incumbent | ko가 시사 맥락(선거)을 안 보여 줌 | 「현직자 (특히 재선에 나선 현직 공직자)」 |
| 202 misinformation | ko「허위 정보」는 일부러 퍼뜨린 disinformation 과 섞임 | ko「잘못된 정보 (사실이 아닌 정보)」+ note(disinformation) |
| 008 rhetoric · 049 tenacious · 054 naive · 062 zealous · 068 audacity | 뉘앙스·쓰임 설명 없음 | note 추가(empty rhetoric 의 부정적 뜻 / 긍정 vs obstinate / 영어 naive 의 부정적 뉘앙스 / 지나침 뉘앙스 / have the audacity to ~) |

종류별: forms 추가 33 · 뜻(ko) 구별·정확도 31 · 예문(en) 교체·수정 7 · 예문 뜻(exko) 수정 16(예문 교체에 딸린 것 포함) · note 추가 7

## 그대로 둔 것(판단)

- **contend / allege 의 ko 에 「주장하다」가 남음**: 앞머리(「(반대에 맞서)」「혐의를 제기하다」)와 exko 가 달라 구별 가능하다고 봄. 둘 다 이 뜻을 빼면 오히려 부정확해짐.
- **빈칸에 비슷한 낱말이 문법상 들어갈 수 있는 나머지 쌍**(prevalent/ubiquitous, apprehensive/wary, disparity/inequity, upheaval/unrest, precipitate/provoke, cynical/sardonic 「smile」): 예문 뜻(exko)이 각 낱말의 ko 와 맞물려 구별돼서 둠. 퀴즈 보기는 같은 품사 중 무작위 3개라 실제로 함께 나올 확률도 낮음.
- **레벨 적합성**: naive, trivial, provoke, integrity, defiant, indifferent, wary 등은 중학교 어휘 목록에도 나오지만, 미국 고교 문학·논설·SAT 류 지문에 자주 나오고 아래 레벨(prek~g68)에 없어서 유지.
- **아래 레벨과의 관계**: legislature(g68)↔legislation, global(g68)↔globalization, inherit(g68)↔inherent 는 다른 낱말(파생·별개 어휘)이라 중복 아님. 같은 낱말 재등장은 0건(검사기 통과). 152 foil 의 note 「새 뜻」은 아래 레벨에 foil 이 없어 검사상 필요는 없지만 「포일」과의 구별 설명으로 유효해서 둠.
- **실존 인물·작품**: 148 allusion(이카로스 신화를 이름 없이 묘사), 074 catalyst(익명의 체포 사건)는 특정 인물·작품 문장을 쓰지 않아 둠. 실존 브랜드 없음.
- **pos**: coming-of-age·grassroots(adj, 명사 앞 수식 용법), tragic flaw·unreliable narrator(phr, 명사구)는 사전 관례대로 둠.
- shared/ 규칙 파일 관련 문제는 없었음.
