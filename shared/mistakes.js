// shared/mistakes.js — 흔한 실수 사전 (파이썬 shared/errors.js 자리). 틀린 답에서 re 가 맞으면 msg 를 한 줄로 보여 준다.
// re 는 소문자 문장 앞뒤에 공백을 붙인 문자열에 대해 검사(대소문자 무시). 너무 넓은 규칙은 정답에서도 걸리니 tools/check_answers 가 정답 문장에 걸리는 규칙을 경고한다.
const MISTAKES = [
  { re: "(?<!\\b(does|did|do|can|will|would|should|could|must|may|might|to|let|make|makes|made|help|watch|see|saw|hear|heard)\\s)\\b(he|she|it|tom|my (mom|dad|friend|sister|brother))\\s+(go|do|have|like|want|play|eat|drink|work|live|study|watch|need|make|run)\\b", msg: '3인칭 단수(He/She/It, 한 사람) 뒤 현재형 동사엔 -s 가 붙어요: he goes, she likes, it has.' },
  { re: "\\b(he|she|it)\\s+(don't|do not)\\b", msg: 'He/She/It 의 부정은 doesn\'t (does not) 예요.' },
  { re: "\\b(i|you|we|they)\\s+(doesn't|does not)\\b", msg: 'I/You/We/They 의 부정은 don\'t (do not) 예요.' },
  { re: "\\b(doesn't|does not|didn't|did not)\\s+(?!(need|feed|seed|speed|bleed|breed|exceed|succeed|proceed)\\b)(\\w+ed|went|ate|saw|had|got|made|took|came|bought|likes|goes|has|wants|works|plays|watches|eats|drinks|lives|needs|knows|does|says)\\b", msg: "doesn't / didn't 뒤에는 동사 원래 모양(원형)이 와요: doesn't like, didn't go." },
  { re: "\\bi\\s+(is|are)\\b", msg: 'I 다음 be동사는 am 이에요: I am (I\'m).' },
  { re: "\\b(he|she|it)\\s+(am|are)\\b", msg: 'He/She/It 다음 be동사는 is 예요.' },
  { re: "\\b(you|we|they)\\s+(is|am)\\b", msg: 'You/We/They 다음 be동사는 are 예요.' },
  { re: "\\ba\\s+(?!(uni|use|usu|uti|eu|one|once|ur)\\w*)[aeiou]\\w+", msg: '모음 소리(아·에·이·오·어)로 시작하는 낱말 앞에는 a 대신 an: an apple, an idea. (university·user 처럼 「유」 소리는 a)' },
  { re: "\\ban\\s+(?!(hour|honest|honou?r|heir|herb|mba|fbi|sns|x-?ray|mp3|f1|nba|hr)\\b)[bcdfgjklmnpqrstvwxyz]\\w+", msg: '자음 소리로 시작하는 낱말 앞에는 a: a book, a university(유-로 시작). (hour·honest 처럼 h 가 소리 안 나면 an)' },
  { re: "\\b(yesterday|last (night|week|year|month|weekend))\\b[^.?!]*\\b(i|you|he|she|we|they)\\s+(go|eat|see|buy|come|make|meet|take|get|drink|sleep)\\b", msg: '지난 일(yesterday, last ...)은 과거형으로: went, ate, saw, bought, made, met, took.' },
  { re: "\\b(can|will|should|must|could|would|may|might)\\s+(goes|likes|has|wants|works|plays|eats|drinks|lives|needs|knows|does|says|comes|makes|takes|gets|runs|swims|speaks|writes|watches|studies|tries|drives|sings|cooks|helps|calls|sends|buys)\\b", msg: 'can / will / should 같은 조동사 뒤에는 동사 원형: can swim, will go.' },
  { re: "\\b(can|will|should|must)\\s+to\\b", msg: 'can / will / should / must 뒤에는 to 없이 바로 동사: can go (can to go ✗).' },
  { re: "\\bin\\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\\b", msg: '요일 앞에는 on: on Monday.' },
  { re: "\\bon\\s+(january|february|march|april|may|june|july|august|september|october|november|december|20\\d\\d|19\\d\\d)\\b(?!\\s+(\\d|[a-z-]+(st|nd|rd|th)\\b))", msg: '달·연도 앞에는 in: in May, in 2026. (날짜는 on May 5)' },
  { re: "\\b(in|on)\\s+\\d{1,2}(:\\d\\d|\\s*(am|pm|a\\.m\\.|p\\.m\\.|o'clock))", msg: '시각 앞에는 at: at 7, at 3:30. (in 10 minutes 처럼 「~ 뒤에」는 in)' },
  { re: "\\bmore\\s+(bigger|smaller|faster|taller|older|better|worse)\\b", msg: '-er 비교급에 more 를 또 붙이지 않아요: bigger (more bigger ✗).' },
  { re: "\\b(i am|you are|we are|they are|he is|she is|i'm|you're|we're|they're|he's|she's)\\s+(go|eat|play|watch|read|run|sleep|cook|drink|swim|write)\\b", msg: '진행형은 be동사 + 동사-ing: I am eating. 그냥 현재라면 be동사 없이 I eat.' },
  { re: "\\bthere\\s+is\\s+(two|three|four|five|many|several|(a lot of|lots of|some) (?!news\\b)(\\w+s|people|children))\\b", msg: '여럿이면 There are: There are two cats.' },
  { re: "^ do\\s+(he|she)\\b|^ do\\s+it\\s+(have|work|look|take|need|cost|matter|hurt|mean|come|go)\\b", msg: 'He/She/It 의 질문은 Does: Does she like coffee?' },
  { re: "\\bdoes\\s+(i|you|we|they)\\b", msg: 'I/You/We/They 의 질문은 Do: Do you like coffee?' },
  { re: "\\bpeoples\\b", msg: 'people 은 이미 여럿이라는 뜻이라 s 를 붙이지 않아요.' },
  { re: "\\b(informations|advices|furnitures|homeworks)\\b", msg: 'information · advice · furniture · homework 는 셀 수 없는 명사라 s 가 붙지 않아요.' },
];
if (typeof module !== 'undefined') module.exports = { MISTAKES };
