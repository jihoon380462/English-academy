// courses/read/content.js — 「읽기」 코스. 스키마는 courses/basic/content.js 맨 위 주석과 같아요(문장 위주).
// id 규칙(코스끼리 겹치지 않게): 레슨 R<번호>, 챕터 보스 RB<챕터>, 문제 <레슨id>P<번호>. 챕터 조각은 parts/*.js.
const COURSE = { id: 'read', name: '읽기' };
const CHAPTERS = [];
const LESSONS = [];
const PROBLEMS = [];
