// core/config.js — 버전·코스 목록·수치·문구 (수정할 때 APP_VERSION 을 올리고 node tools/stamp.mjs)
// 저장 키는 eng.* / 캐시는 english-shell-* — 같은 출처의 파이썬 아카데미(academy.*, academy-shell-*)와 절대 겹치면 안 된다 (SPEC 6절)
const CONFIG = {
  APP_VERSION: '0.2.3',
  SCHEMA_VERSION: 1,
  KEY_PREFIX: 'eng.',
  HUB_PATH: '../../index.html',
  SISTER: { name: '파이썬 아카데미', url: 'https://jihoon380462.github.io/python-academy/' },

  // 허브 카드 순서. ready=false 는 「준비 중」. space=true 는 「공간」 구역(코스 순서와 무관)
  COURSES: [
    { id: 'basic', name: '영어 다시 시작', icon: '🔤', desc: '문장 뼈대부터 시제·꾸밈말까지, 카드로 조립하며', path: 'courses/basic/', color: '#3d8bfd', ready: true },
    { id: 'deck', name: '문장 덱', icon: '🃏', desc: 'Anki 방식 복습 — 듣고 뜻 떠올리기 · 뜻 보고 영어로 말하기. 레슨에서 배운 문장이 자동으로 쌓여요', path: 'courses/deck/', color: '#f5a623', ready: true, space: true },
    { id: 'talk', name: '듣기·말하기', icon: '🎧', desc: '따라 말하기·받아쓰기·상황 회화 미션', path: 'courses/talk/', color: '#2bb673', ready: true },
    { id: 'grammar', name: '문법 더 깊게', icon: '🧩', desc: '완료·수동태·관계사·가정법', path: 'courses/grammar/', color: '#9b59b6', ready: true, requires: { course: 'basic', boss: 'B4', label: '기초 코스 챕터 4까지 끝내면 열려요' } },
    { id: 'read', name: '읽기', icon: '📖', desc: '의미 덩어리로 끊어 읽기 → 짧은 글 → 긴 글', path: 'courses/read/', color: '#e67e22', ready: true },
    { id: 'dev', name: '개발자 영어', icon: '💻', desc: '에러 메시지·공식 문서 읽기, 커밋·이슈·PR 쓰기', path: 'courses/dev/', color: '#14b8a6', ready: true },
  ],

  // 성분 색 (SPEC 3-2절) — 모든 코스 공통
  ROLES: {
    S: { name: '주어', ko: '누가', color: '#3d8bfd' },
    V: { name: '동사', ko: '한다/이다', color: '#ef4444' },
    O: { name: '목적어', ko: '무엇을', color: '#22a55a' },
    C: { name: '보어', ko: '어떤/무엇', color: '#22a55a' },
    M: { name: '꾸밈말', ko: '언제·어디서·어떻게', color: '#8b93a6' },
    J: { name: '연결어', ko: '잇는 말', color: '#e0a800' },
    Q: { name: '질문어', ko: '묻는 말', color: '#a855f7' },
  },

  // 음성
  SPEECH: { lang: 'en-US', rates: [0.7, 1.0, 1.2], speakPass: 0.8 },

  // 게임 수치
  XP: { choice: 8, listen: 8, match: 10, build: 10, order: 12, fill: 10, fix: 14, type: 16, dictation: 14, speak: 16 },
  BOSS_XP: 40,
  HINT_XP_MULT: [1, 0.8, 0.6, 0.4],
  FIRST_TRY_BONUS: 0.2,
  COMBO_MULT: [[10, 1.5], [5, 1.3], [3, 1.15]],
  REVIEW_XP: 5,
  CARD_XP: 2,
  MAX_LEVEL: 60,
  xpForLevel: (L) => 60 + L * 25,
  TITLES: ['첫걸음', '알파벳 탐험가', '문장 조립공', '단어 수집가', '대화 견습생', '여행 회화러', '문장 장인', '영어 모험가', '자신감 스피커', '영어 달인', '마스터', '전설'],
  MASCOT_STAGES: [1, 5, 12, 22, 35, 50],
  DAILY_GOAL_DEFAULT: 5,
  TIME_ATTACK_SEC: 60,
};

// 화면 문구
const T = {
  appName: '영어 아카데미',
  streak: '연속 학습일',
  settings: '설정',
  correct: ['좋아요!', '정확해요!', '완벽해요!', '바로 그거예요!', 'Nice!', 'Great job!'],
  wrong: ['아깝다!', '한 번 더!', '거의 다 왔어요', '다시 볼까요?'],
};
if (typeof module !== 'undefined') module.exports = { CONFIG, T };
