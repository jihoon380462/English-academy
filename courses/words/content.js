// courses/words/content.js — 📖 단어장 (미국 나이·학년별 필수 단어). 공간(space) — 레슨·문제 없음, 단어 레벨만.
/*
원칙: 단어장이지만 **단어는 늘 예문과 함께** (사용자 결정: 문장 위주). 예문은 그 나이 아이가 실제로 읽는 글 느낌으로:
  미취학 = 그림책·동화책 한 줄, 1~3학년 = 쉬운 읽기책·교실, 4~5학년 = 챕터북·과학/사회 교과, 6~8학년 = 교과서·논설, 9~12학년 = 고전 문학·논설·시사.
기준: 미취학~3학년은 Dolch 목록(아동 도서에서 많이 나오는 기능어 220 + 명사 95)을 뼈대로 그림책 필수 명사·동사를 보탬. 4학년 이상은 미국 학년별 교과·독서에 자주 나오는 어휘를 직접 골라 정리(공식 지정 목록이 아님).

파일 구성: content.js(이 파일) + parts/*.js — 레벨 하나 = 파일 하나: WORD_LEVELS.push({ ... })
WORD_LEVELS = [{
  id: 'prek',                       // 영문·숫자·-·_ (카드 id 에 들어감)
  order: 1,                         // 화면 순서
  icon: '🧸', title: '미취학', age: '만 3~5세', grade: 'Pre-K', 
  desc: '그림책·동화책을 읽을 때 필요한 단어',
  groups: [{ title: 'Dolch 기본 1 (pre-primer)', words: [ WORD, ... ] }, ...],   // 레벨 안 묶음(주제·품사·Dolch 단계)
}]
WORD = { id: 'prek-001', w: 'run', pos: 'v', ko: '달리다', en: 'The little dog can run fast.', exko: '작은 강아지는 빨리 달릴 수 있어요.', note?: '…', forms?: ['ran','running'] }
  - pos: n(명사) v(동사) adj(형용사) adv(부사) prep(전치사) pron(대명사) conj(접속사) det(관사·한정사) num(수) int(감탄사) phr(구)
  - en(예문)에는 반드시 w(또는 forms 의 한 형태)가 들어가야 해요(검사함). 예문은 직접 지은 문장(교재·책 문장 복사 금지).
  - ko 는 이 예문에서 쓰인 뜻을 맨 앞에(뜻이 여럿이면 「달리다; 운영하다」처럼 ; 로)
  - id 는 레벨 안에서 이어서 번호: prek-001, k1-001, g2-001, g3-001, g45-001, g68-001, g912-001
*/
const COURSE = { id: 'words', name: '단어장' };
const CHAPTERS = [];
const LESSONS = [];
const PROBLEMS = [];
const WORD_LEVELS = [];
