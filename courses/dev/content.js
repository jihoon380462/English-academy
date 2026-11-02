// courses/dev/content.js — 「개발자 영어」 코스. 스키마는 courses/basic/content.js 맨 위 주석과 같아요(문장 위주).
// id 규칙(코스끼리 겹치지 않게): 레슨 D<번호>, 챕터 보스 DB<챕터>, 문제 <레슨id>P<번호>. 챕터 조각은 parts/*.js.
const COURSE = { id: 'dev', name: '개발자 영어' };
const CHAPTERS = [];
const LESSONS = [];
const PROBLEMS = [];
