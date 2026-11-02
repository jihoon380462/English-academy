// core/boot.js — 코스 페이지 시작 (courses/<id>/index.html 맨 끝에서 로드)
window.addEventListener('DOMContentLoaded', () => {
  Store.load(COURSE.id); Content.init();
  if (PROBLEMS.length && Store.cdata.total !== PROBLEMS.length) { Store.cdata.total = PROBLEMS.length; Store.save(); } // 허브 진행률용
  document.title = `${COURSE.name} — ${T.appName}`;
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('../../sw.js').catch(() => {});
  UI.start(Views);
});
