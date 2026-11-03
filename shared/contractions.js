// shared/contractions.js — 축약형 ↔ 풀어 쓴 형태 (채점 정규화용, core/grader.js 가 사용). 소문자, 굽은 따옴표는 grader 가 ' 로 바꾼 뒤 비교
const CONTRACTIONS = {
  "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are', "he's": 'he is|has', "she's": 'she is|has', "it's": 'it is|has', "that's": 'that is|has', "there's": 'there is|has', "here's": 'here is', "what's": 'what is|has', "where's": 'where is|has', "who's": 'who is|has', "how's": 'how is|has', "when's": 'when is',
  "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have',
  "i'll": 'i will', "you'll": 'you will', "he'll": 'he will', "she'll": 'she will', "it'll": 'it will', "we'll": 'we will', "they'll": 'they will', "that'll": 'that will',
  "i'd": 'i would|had', "you'd": 'you would|had', "he'd": 'he would|had', "she'd": 'she would|had', "we'd": 'we would|had', "they'd": 'they would|had', "it'd": 'it would|had', "that'd": 'that would',
  "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not', "don't": 'do not', "doesn't": 'does not', "didn't": 'did not',
  "haven't": 'have not', "hasn't": 'has not', "hadn't": 'had not', "won't": 'will not', "wouldn't": 'would not', "can't": 'can not', "cannot": 'can not', "couldn't": 'could not',
  "shouldn't": 'should not', "mustn't": 'must not', "should've": 'should have', "could've": 'could have', "would've": 'would have', "must've": 'must have', "might've": 'might have', "needn't": 'need not', "mightn't": 'might not', "let's": 'let us', "y'all": 'you all', "gonna": 'going to', "wanna": 'want to', "gotta": 'got to',
  // 휴대폰 입력에서 흔한 아포스트로피 없는 축약형 (다른 낱말과 헷갈리지 않는 것만 — its·were·well·ill·id·hell·shell·wed·lets·wont 는 뺌)
  "dont": 'do not', "doesnt": 'does not', "didnt": 'did not', "cant": 'can not', "isnt": 'is not', "arent": 'are not', "wasnt": 'was not', "werent": 'were not',
  "havent": 'have not', "hasnt": 'has not', "hadnt": 'had not', "couldnt": 'could not', "shouldnt": 'should not', "wouldnt": 'would not', "mustnt": 'must not',
  "im": 'i am', "ive": 'i have', "youre": 'you are', "youve": 'you have', "youll": 'you will', "theyre": 'they are', "theyve": 'they have', "weve": 'we have',
  "thats": 'that is|has', "whats": 'what is|has', "theres": 'there is|has', "hes": 'he is|has', "shes": 'she is|has', "itll": 'it will',
};
if (typeof module !== 'undefined') module.exports = { CONTRACTIONS };
