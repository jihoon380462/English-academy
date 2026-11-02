// courses/deck/content.js — 문장 덱 기본 덱 (Anki 방식 복습용 문장 모음). 코스 레슨이 없는 「공간」이라 LESSONS·PROBLEMS 는 비어 있다.
/*
파일 구성: content.js(이 파일) + parts/*.js(덱 조각: SENTENCE_DECKS.push({...}))
SENTENCE_DECKS = [{ id, title, icon, desc, defaultOn?:true, items:[{ id, en, ko, key?, keyko?, note?, alt?:[다른 정답 표현] }] }]
  - id 는 덱 안팎 통틀어 고유, 영문·숫자·-·_ 만 (':' '.' 금지 — 카드 id 's:<문장id>:L' 에 들어감)
  - en 은 실제로 자주 쓰는 완전한 문장. key = 이 문장에서 익힐 핵심 표현, keyko = 그 뜻
  - 예문은 전부 직접 지은 문장 (교재·드라마·기사 문장 복사 금지)
*/
const COURSE = { id: 'deck', name: '문장 덱' };
const CHAPTERS = [];
const LESSONS = [];
const PROBLEMS = [];
const SENTENCE_DECKS = [];
