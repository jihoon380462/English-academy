# 단어장 검수 기록: 🧸 미취학(prek) · 🎒 유치원·1학년(k1)

검수 범위: `courses/words/parts/w1-prek.js` (150낱말), `courses/words/parts/w2-k1.js` (150낱말). 기준은 `specs/words-brief.md`, `courses/words/content.js` 스키마 주석.

검사 결과(고친 뒤): `node tools/stamp.mjs && node tools/validate_content.mjs && node tools/check_answers.mjs` → **FAILS 0 · 경고 0**, check_answers **FAILS 0**.

검수 방법
- 300낱말 모두 ko·pos·en·exko·note·forms 를 하나씩 확인했어요.
- Dolch 대조: pre-primer 40·primer 52 는 prek 에, Grade 1 41 은 k1 에 빠짐없이 들어 있어요. Dolch 명사 95개 중 앞쪽 절반(apple~ground, 45개)이 k1 에 있어요. Dolch 2·3학년 낱말이 prek·k1 에 들어온 것은 없어요.
- 퀴즈 시뮬레이션: `core/words-views.js` 의 `Words.find()` 를 그대로 돌려서 ① 빈칸이 엉뚱한 낱말에 걸리지 않는지(예: `a` 가 `and` 에 걸리기) ② **빈칸으로 가린 낱말이 같은 예문에 또 나와 답이 보이지 않는지** ③ 같은 레벨에서 ko 의 조각(; , 로 나눈 뜻)이 겹치는 쌍을 뽑아 직접 봤어요.
- 빈칸 문제는 Dolch 기능어처럼 다른 낱말도 문법상 들어가는 경우가 많아서, exko 로 정답이 하나로 정해지는지 낱말마다 봤어요.

## 고친 것

| id | 문제 | 고친 내용 |
| --- | --- | --- |
| prek-018 it | 「What is it? It is a bug!」: 빈칸 문제에서 첫 it 을 가려도 뒤의 It 이 답을 보여 줌. ko 「그것, 이것」이 this(이것)와 겹침 | **Where is my ball? Can you find it?** / 「내 공이 어디 있지요? 그거 찾을 수 있어요?」. ko → 「그것 (앞에 말한 것·가리키는 것)」 |
| prek-019 jump | 「Jump, frog, jump!」: 빈칸이 답을 보여 줌. ko 「뛰다」가 run(달리다, 뛰다)과 겹침 | **The frog can jump so high!** / 「개구리는 정말 높이 뛰어오를 수 있어요!」. ko → 「(폴짝) 뛰다, 뛰어오르다」 |
| prek-029 run | 「Run, little mouse, run!」: 빈칸이 답을 보여 줌. ko 「뛰다」가 jump 와 겹침 | **Run, little mouse! The cat is coming!** / 「달려라, 생쥐야! 고양이가 오고 있어요!」. ko → 「달리다, 달려가다」 |
| prek-036 up | 「Up, up, up went the balloon!」: 빈칸이 답을 보여 줌 | **The balloon went up into the sky.** / 「풍선이 하늘 위로 올라갔어요.」 |
| prek-063 no | 「"No, no, no!"」: 빈칸이 답을 보여 줌 | **"No!" said the baby bear.** / 「"싫어!" 아기 곰이 말했어요.」 |
| prek-031 see | exko 「"찾았다!"」라서 빈칸 문제에서 find(찾다)를 고르게 됨. ko 「보다」가 look 과 같음 | **"What do you see?" asked Mom.** / 「"뭐가 보이니?" 엄마가 물었어요.」. ko → 「보이다, (눈에 들어와) 보다」. 숨바꼭질 "I see you!"(찾았다!)는 note 로 |
| prek-021 look | ko 「보다」가 see 와 같음 | ko → 「(눈을 돌려) 보다, 쳐다보다 (look at ~ = ~을 보다)」 |
| prek-032 the | 「The dog ran to the door.」: 빈칸 자리에 a·my·our·that 도 들어가고 exko 로 구별 안 됨 | 하나뿐인 것 앞의 the: **The sun is so hot today.** / 「오늘은 해가 정말 뜨거워요.」 |
| prek-058 he | 「This is Sam. He is five.」: Sam 은 여자 이름일 수도 있고 exko 「다섯 살이에요」로는 he/she 구별 안 됨 | **This is my dad. He is funny.** / 「이분은 우리 아빠예요. 아빠는 재미있어요.」 |
| prek-074 she | 같은 문제(이름만으로 성별 판단) | **This is Grandma. She likes cats.** / 「이분은 우리 할머니예요. 할머니는 고양이를 좋아하세요.」 |
| prek-067 out | 「The sun came out.」: 빈칸에 up(해가 뜨다)도 자연스럽게 들어감 | **Let's go out and play!** / 「우리 밖에 나가서 놀아요!」 |
| prek-020 little | 예문은 이름 「Little Duck」(아기 오리)인데 ko 는 「작은」이 먼저 | **The little duck looked for Mom.** / 「작은 오리가 엄마를 찾았어요.」 |
| prek-095 frog | 「A green frog sat on a log.」: 널리 알려진 개구리 숫자 동요 가사와 너무 비슷함 | **A green frog hopped into the pond.** / 「초록 개구리가 연못으로 폴짝 뛰어들었어요.」 |
| prek-017 is | ko 「~이다; (~에) 있다」가 are 와 거의 같아 퀴즈 보기가 헷갈림 | ko 끝에 「(he·she·it·하나 뒤)」 |
| prek-057 have | ko 「가지고 있다; 먹다」: 「먹다」가 eat 와 겹치고 예문 뜻도 아님 | ko → 「가지고 있다, (~이) 있다」, note 「have lunch(점심을 먹다)처럼 「먹다」로도 써요」 |
| prek-080 this | ko 「이것」이 it 과 겹침 | ko → 「이것, 이 사람 (가까이 있는 것); 여기」 |
| prek-077 that | ko 「저, 그」의 「그」가 the(그)와 겹침 | ko → 「저 (멀리 있는 것을 가리켜)」 |
| prek-050 came | exko 「비가 내리기 시작했어요」는 뜻을 덧붙임 | 「그때 비가 왔어요.」 |
| prek-115·118·120·133·146 | 예문 속 복수형이 forms 에 없음 | forms 추가: ears, arms, toes, pancakes, stars |
| k1-004 any | 「Is there any milk left?」: 빈칸에 some 도 들어가고 exko 「좀」이 some 의 뜻(조금)과 같음 | **We don't have any milk!** / 「우유가 하나도 없어요!」. ko → 「(부정문에서) 하나도, 조금도; (질문에서) 좀이라도」, note 에 some 과 차이 |
| k1-005 as | 「as cold as ice」: 첫 as 를 가려도 둘째 as 가 답을 보여 줌 | **I dressed up as a lion.** / 「나는 사자로 분장했어요.」, pos conj → prep, ko 「~(으)로 (분장·역할); ~처럼」. as … as 는 note 로 |
| k1-016 her | 「Mina found her lost shoe.」: 빈칸에 his 도 들어가고 exko 로 구별 안 됨(이름 성별에 기댐) | **Grandma can't find her glasses.** / 「할머니가 안경을 못 찾으세요.」 |
| k1-003 an | exko 「부엉이를 봤어요」: 빈칸에 her·his·some 도 들어감 | exko → 「나무에서 부엉이 한 마리를 봤어요.」 |
| k1-066 floor / k1-080 ground | ko 「바닥」/「땅, 땅바닥」이 거의 같음 | floor → 「(방·건물 안의) 바닥, 마루」, ground → 「(바깥의) 땅, 땅바닥」 |
| k1-033 stop | ko 「멈추다, 서다」의 「서다」가 stand(서다, 서 있다)와 겹침 | ko → 「멈추다; 그만하다」 |
| k1-049·058·072·148 | 예문 속 복수형이 forms 에 없음 | forms 추가: eyes, ducks, apples, blocks |

## 그대로 둔 것(판단)

- **green·five 가 prek 에 없음**: Dolch 에서는 green·five 가 2학년 목록이라 g2 에 두는 설계(브리프의 Dolch 뼈대)를 따랐어요. 미취학 아이가 가장 먼저 배우는 색·숫자라 어색할 수는 있어요. prek 로 옮기려면 g2 파일 담당과 같이 정해야 해요.
- **pig·horse·sun·tree·rabbit 같은 그림책 명사가 prek 에 없음**: Dolch 명사 뒤쪽 절반이라 g2 로 보내는 설계예요. prek 예문에는 이미 나와요.
- **be동사(is·am·are·be·was)**: ko 앞부분 「~이다」는 같지만, 괄호 안에서 주어나 시제가 달라서 퀴즈에서 구별할 수 있어요.
- **look·see**: 둘 다 「보다」가 들어가지만 see 를 「보이다」로 시작해 구별했어요. 영어에서도 원래 겹치는 낱말이라 더 떼지 않았어요.
- **four(넷, 네)·yes(응, 네)**: 「네」 글자만 우연히 같아요. 품사·뜻이 아주 달라서 그대로 뒀어요.
- **and(~와/과; 그리고)·with(~와 함께)**: 비슷하지만 and 는 「그리고」가 있어 구별돼요.
- **기능어 빈칸 문제**(in/on/under, can/will/must, is/was 등): 다른 낱말도 문법상 들어가지만 exko 의 뜻(안에·위에, 할 수 있어·할게, 현재·과거)으로 답이 하나로 정해지는 것을 확인했어요.
- **can·must·will·could·may 의 pos 가 v**: 스키마에 조동사 품사가 없어서 v 로 두고 note 로 「조동사」라고 알려 주는 방식을 그대로 썼어요.
- **goodbye(int)**: 예문 「Say goodbye to your friends.」에서는 명사처럼 쓰였지만 Dolch·사전 분류(감탄사)를 따랐어요.
- **I see a little star.**: 「little star」는 흔한 낱말 조합이고 동요 가사를 옮긴 것은 아니라서 그대로 뒀어요.
- 아래 레벨과 겹치는 낱말: 검사기 기준 0건이에요.
- shared/ 파일과 퀴즈 코드에서 고칠 것은 없었어요. 참고로 `Words.find()` 는 빈칸 낱말이 예문에 두 번 나와도 첫 번째만 가려요. 그래서 다른 레벨도 「Run, run!」처럼 같은 낱말을 되풀이하는 예문은 피하는 게 좋아요.
