// shared/mistakes.js — 흔한 실수 사전 (파이썬 shared/errors.js 자리). 틀린 답에서 re 가 맞으면 msg 를 한 줄로 보여 준다.
// re 는 소문자 문장 앞뒤에 공백을 붙인 문자열에 대해 검사(대소문자 무시). 너무 넓은 규칙은 정답에서도 걸리니 tools/check_answers 가 정답 문장에 걸리는 규칙을 경고한다.
const MISTAKES = [
  { re: "\\b(he|she|it|tom|my (mom|dad|friend|sister|brother))\\s+(go|do|have|like|want|play|eat|drink|work|live|study|watch|need|make|read|run)\\b(?!\\s+(to|ing))", msg: '3인칭 단수(He/She/It, 한 사람) 뒤 현재형 동사엔 -s 가 붙어요: he goes, she likes, it has.' },
  { re: "\\b(he|she|it)\\s+(don't|do not)\\b", msg: 'He/She/It 의 부정은 doesn\'t (does not) 예요.' },
  { re: "\\b(i|you|we|they)\\s+(doesn't|does not)\\b", msg: 'I/You/We/They 의 부정은 don\'t (do not) 예요.' },
  { re: "\\b(doesn't|does not|didn't|did not)\\s+\\w+(s|ed)\\s", msg: 'doesn\'t / didn\'t 뒤에는 동사 원래 모양(원형)이 와요: doesn\'t like, didn\'t go.' },
  { re: "\\bi\\s+(is|are)\\b", msg: 'I 다음 be동사는 am 이에요: I am (I\'m).' },
  { re: "\\b(he|she|it)\\s+(am|are)\\b", msg: 'He/She/It 다음 be동사는 is 예요.' },
  { re: "\\b(you|we|they)\\s+(is|am)\\b", msg: 'You/We/They 다음 be동사는 are 예요.' },
  { re: "\\ba\\s+[aeiou]\\w+", msg: '모음 소리(아·에·이·오·어)로 시작하는 낱말 앞에는 a 대신 an: an apple, an hour.' },
  { re: "\\ban\\s+[bcdfgjklmnpqrstvwxyz]\\w+", msg: '자음 소리로 시작하는 낱말 앞에는 a: a book, a university(유-로 시작).' },
  { re: "\\b(yesterday|last (night|week|year|month))\\b.*\\b(go|eat|see|buy|have|do|come|make)\\b", msg: '지난 일(yesterday, last ...)은 과거형으로: went, ate, saw, bought, had, did.' },
  { re: "\\b(can|will|should|must|could|would)\\s+\\w+s\\s", msg: 'can / will / should 같은 조동사 뒤에는 동사 원형: can swim, will go.' },
  { re: "\\b(can|will|should|must)\\s+to\\b", msg: 'can / will / should / must 뒤에는 to 없이 바로 동사: can go (can to go ✗).' },
  { re: "\\bin\\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\\b", msg: '요일 앞에는 on: on Monday.' },
  { re: "\\bon\\s+(january|february|march|april|may|june|july|august|september|october|november|december|20\\d\\d|19\\d\\d)\\b(?!\\s+\\d)", msg: '달·연도 앞에는 in: in May, in 2026. (날짜는 on May 5)' },
  { re: "\\b(in|on)\\s+\\d{1,2}(:\\d\\d)?\\s*(am|pm|o'clock)?\\s", msg: '시각 앞에는 at: at 7, at 3:30.' },
  { re: "\\bmore\\s+(bigger|smaller|faster|taller|older|better|worse)\\b", msg: '-er 비교급에 more 를 또 붙이지 않아요: bigger (more bigger ✗).' },
  { re: "\\b(is|are|am)\\s+(go|eat|play|study|work|watch|read|run|sleep|cook)\\b", msg: '진행형은 be동사 + 동사-ing: I am eating. 그냥 현재라면 be동사 없이 I eat.' },
  { re: "\\bthere\\s+is\\s+(two|three|many|some|a lot of)\\b", msg: '여럿이면 There are: There are two cats.' },
  { re: "\\bdo\\s+(he|she|it)\\b", msg: 'He/She/It 의 질문은 Does: Does she like coffee?' },
  { re: "\\bdoes\\s+(i|you|we|they)\\b", msg: 'I/You/We/They 의 질문은 Do: Do you like coffee?' },
  { re: "\\bpeoples\\b", msg: 'people 은 이미 여럿이라는 뜻이라 s 를 붙이지 않아요.' },
  { re: "\\b(informations|advices|furnitures|homeworks)\\b", msg: 'information · advice · furniture · homework 는 셀 수 없는 명사라 s 가 붙지 않아요.' },
];
if (typeof module !== 'undefined') module.exports = { MISTAKES };
