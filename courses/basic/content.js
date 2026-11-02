// courses/basic/content.js — 「영어 다시 시작」 코스 콘텐츠 (데이터만, 로직 없음)
/*
=== 스키마 (모든 코스 공통 — tools/validate_content.mjs 가 검사, tools/check_answers.mjs 가 정답이 채점기를 통과하는지 확인) ===
원칙: **문장 위주**(사용자 결정 11/3). 낱말 하나만 묻는 문제는 피하고, 항상 문장 안에서 묻는다. 예문은 전부 직접 지은 문장(교재·기사 복사 금지).

파일 구성: content.js(이 파일 — COURSE·빈 배열) + parts/*.js(챕터 조각: CHAPTERS.push(...), LESSONS.push(...), PROBLEMS.push(...)). 조각은 이름 순서로 로드(c0.js, c1.js …). 새 조각을 만들면 node tools/stamp.mjs 가 index.html 에 태그를 넣어요.
COURSE   = { id, name }
CHAPTERS = [{ n, title, icon, desc }]
LESSONS  = [{ id:'E1'(레슨)|'B1'(챕터 보스), ch, n(레슨 번호, 보스는 생략), title, minutes, boss?:true, terms?:{용어:'쉬운 설명'},
              pages:[{ title, html, ex:[{ en, ko, roles?, note?, deck?:false }], tip? }], summary:[3줄] }]
   en 안의 '|' 는 의미 덩어리 경계 (roles 와 짝). roles = 덩어리마다 성분 글자 S(주어) V(동사) O(목적어) C(보어) M(꾸밈말) J(연결어) Q(질문어)
   예: { en:'She|drinks|coffee|every morning', roles:'S V O M', ko:'그녀는 매일 아침 커피를 마셔요' }
   ex 는 레슨을 끝내면 「문장 덱」의 내 문장으로 자동으로 들어간다(Anki 복습). 넣고 싶지 않은 예문은 deck:false.
PROBLEMS = [{ id:'E1P1', lesson:'E1', type, title?, prompt(HTML), ko?, tags:[1~3], hints:[3단계], why?, boss?:true, + 유형별 필드 }]
   choice    : q?(문장, '|'·qroles 가능), opts:[2~4], ans:정답 번호(0부터), sayOpts?:true(보기가 영어 문장이면 🔊)
   listen    : say(들려줄 문장), opts, ans
   match     : pairs:[[영어 문장/구, 한국어], ...] 3~5쌍
   build     : answer:[허용 답...], cards:[대표 답을 순서대로 나눈 카드], roles:'카드마다 성분 글자'  (성분 색 슬롯 = 사다리 1단)
   order     : answer:[허용 답...], cards:[대표 답 순서대로], distractors?:[함정 카드 1~2]  (사다리 2단)
   fill      : text:'I ___ a student.'(빈칸 ___), blanks:[{ a:[허용 답], opt?:[고르기 보기] }]
   fix       : wrong:'틀린 문장', answer:[고친 문장 허용 답]
   type      : ko(필수), answer:[허용 답 — 자연스러운 다른 표현도 넣기], cards?:[쓸 낱말 힌트]  (사다리 3단)
   dictation : say(들려줄 문장), answer?(생략하면 say)
   speak     : say(말할 문장), ko?, roles?  (사다리 4단)
   answer 비교: 대소문자·끝 문장부호·축약형(I'm=I am)·오타 1개는 봐준다. 쉼표·마침표는 무시. 다른 어순·다른 낱말은 answer 에 따로 넣어야 정답.
   id 규칙: 레슨 E<번호>, 보스 B<챕터>, 문제 <레슨id>P<번호>. 같은 레슨 안 문제는 쉬운 것 → 어려운 것(사다리 순서: choice/listen/match → build → order → fill/fix → type/dictation → speak).
*/
const COURSE = { id: 'basic', name: '영어 다시 시작' };
const CHAPTERS = [];
const LESSONS = [];
const PROBLEMS = [];
