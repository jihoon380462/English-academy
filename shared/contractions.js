// shared/contractions.js — 축약형 ↔ 풀어 쓴 형태 (채점 정규화용, core/grader.js 가 사용). 소문자, 굽은 따옴표는 grader 가 ' 로 바꾼 뒤 비교
const CONTRACTIONS = {
  "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are', "he's": 'he is', "she's": 'she is', "it's": 'it is', "that's": 'that is', "there's": 'there is', "here's": 'here is', "what's": 'what is', "where's": 'where is', "who's": 'who is', "how's": 'how is', "when's": 'when is',
  "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have',
  "i'll": 'i will', "you'll": 'you will', "he'll": 'he will', "she'll": 'she will', "it'll": 'it will', "we'll": 'we will', "they'll": 'they will', "that'll": 'that will',
  "i'd": 'i would', "you'd": 'you would', "he'd": 'he would', "she'd": 'she would', "we'd": 'we would', "they'd": 'they would',
  "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not', "don't": 'do not', "doesn't": 'does not', "didn't": 'did not',
  "haven't": 'have not', "hasn't": 'has not', "hadn't": 'had not', "won't": 'will not', "wouldn't": 'would not', "can't": 'can not', "cannot": 'can not', "couldn't": 'could not',
  "shouldn't": 'should not', "mustn't": 'must not', "let's": 'let us', "y'all": 'you all', "gonna": 'going to', "wanna": 'want to', "gotta": 'got to',
};
if (typeof module !== 'undefined') module.exports = { CONTRACTIONS };
