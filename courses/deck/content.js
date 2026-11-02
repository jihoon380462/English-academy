// courses/deck/content.js — 문장 덱 기본 덱 (Anki 방식 복습용 문장 모음). 코스 레슨이 없는 「공간」이라 LESSONS·PROBLEMS 는 비어 있다.
/*
SENTENCE_DECKS = [{ id, title, icon, desc, defaultOn?:true, items:[{ id, en, ko, key?, keyko?, note?, alt?:[다른 정답 표현] }] }]
  - id 는 덱 안팎 통틀어 고유, 영문·숫자·-·_ 만 (':' '.' 금지 — 카드 id 's:<문장id>:L' 에 들어감)
  - en 은 실제로 자주 쓰는 완전한 문장. key = 이 문장에서 익힐 핵심 표현, keyko = 그 뜻
  - 예문은 전부 직접 지은 문장 (교재·드라마·기사 문장 복사 금지)
*/
const COURSE = { id: 'deck', name: '문장 덱' };
const CHAPTERS = [];
const LESSONS = [];
const PROBLEMS = [];
const SENTENCE_DECKS = [
  { id: 'starter', title: '첫걸음 생존 문장', icon: '🌱', desc: '처음 만나면 바로 쓰는 문장', defaultOn: true, items: [
    { id: 'st001', en: 'Nice to meet you.', ko: '만나서 반가워요.', key: 'nice to meet you', keyko: '처음 만났을 때 인사' },
    { id: 'st002', en: 'Could you say that again?', ko: '다시 한번 말해 주시겠어요?', key: 'say that again', keyko: '다시 말하다', alt: ['Can you say that again?'] },
    { id: 'st003', en: 'I don\'t understand.', ko: '이해가 안 돼요.', key: 'understand', keyko: '이해하다' },
  ] },
];
