// core/grader.js — 영어 문장 채점 (SPEC 4-3절). DOM 을 쓰지 않아 Node(tools/check_answers.mjs)에서도 그대로 돈다.
// 필요: CONTRACTIONS(shared/contractions.js), MISTAKES(shared/mistakes.js, 없어도 됨)
const Grader = {
  // 비교용 낱말 배열: 소문자, 따옴표 통일, 문장부호 제거(아포스트로피는 남김), 축약형 풀기, '|' (덩어리 표시) 제거
  tokens(s) {
    let t = String(s ?? '').replace(/\|/g, ' ').replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').toLowerCase();
    t = t.replace(/[^a-z0-9'\s-]/g, ' ').replace(/(^|\s)'+|'+(\s|$)/g, ' ').replace(/\s-\s/g, ' ');
    const out = [];
    for (const w of t.split(/\s+/).filter(Boolean)) {
      const full = (typeof CONTRACTIONS !== 'undefined' && CONTRACTIONS[w]);
      if (full) out.push(...full.split(' '));
      else if (/^[a-z]+'s$/.test(w)) out.push(w); // 소유격 Tom's 는 그대로
      else out.push(w);
    }
    return out;
  },
  // 화면 표시용 원래 낱말(문장부호는 붙인 채)
  words(s) { return String(s ?? '').replace(/\|/g, ' ').trim().split(/\s+/).filter(Boolean); },
  dist(a, b) { // 편집 거리 (짧은 낱말용)
    if (a === b) return 0; const m = a.length, n = b.length; if (Math.abs(m - n) > 2) return 3;
    const dp = Array.from({ length: m + 1 }, (_, i) => [i]); for (let j = 1; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) { dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1); }
    return dp[m][n];
  },
  same(a, b) { return a.length === b.length && a.every((w, i) => w === b[i]); },
  // 오타 하나(4글자 이상 낱말에서 편집 거리 1)만 다르면 near
  near(a, b) { if (a.length !== b.length) return null; let typo = null; for (let i = 0; i < a.length; i++) { if (a[i] === b[i]) continue; if (typo || b[i].length < 4 || this.dist(a[i], b[i]) !== 1) return null; typo = { got: a[i], want: b[i] }; } return typo; },
  // 낱말 단위 비교: LCS 로 맞은 낱말 표시. 돌려주는 값 got[i] = {w, ok}, missing = 답에만 있는 낱말
  diff(got, want) {
    const m = got.length, n = want.length; const L = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) L[i][j] = got[i] === want[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const okG = new Array(m).fill(false), okW = new Array(n).fill(false); let i = 0, j = 0;
    while (i < m && j < n) { if (got[i] === want[j]) { okG[i] = okW[j] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    return { got: got.map((w, k) => ({ w, ok: okG[k] })), missing: want.filter((w, k) => !okW[k]), score: n ? L[0][0] / Math.max(n, m) : 0 };
  },
  // 문장 채점. answers: 허용 답 목록(첫째가 대표). 돌려주는 값 {ok, typo?, best, diff}
  text(input, answers) {
    const got = this.tokens(input); const list = (Array.isArray(answers) ? answers : [answers]).filter(a => a != null);
    let best = list[0], bestDiff = null;
    for (const a of list) {
      const want = this.tokens(a);
      if (this.same(got, want)) return { ok: true, best: a };
      const typo = this.near(got, want); if (typo) return { ok: true, typo, best: a };
      const d = this.diff(got, want); if (!bestDiff || d.score > bestDiff.score) { bestDiff = d; best = a; }
    }
    return { ok: false, best, diff: bestDiff || this.diff(got, this.tokens(best)) };
  },
  // 한 낱말(빈칸) 채점
  word(input, answers) { const g = this.tokens(input).join(' '); for (const a of answers) { const w = this.tokens(a).join(' '); if (g === w) return { ok: true }; if (w.length >= 4 && !w.includes(' ') && this.dist(g, w) === 1) return { ok: true, typo: { got: g, want: w } }; } return { ok: false }; },
  // 말하기: 인식된 문장과 목표 문장의 낱말 일치율
  speak(heard, target) { const d = this.diff(this.tokens(heard), this.tokens(target)); const want = this.tokens(target); const hit = want.length - d.missing.length; return { rate: want.length ? hit / want.length : 0, diff: d }; },
  // 흔한 실수 설명 (shared/mistakes.js)
  explain(input) { if (typeof MISTAKES === 'undefined') return []; const s = ' ' + String(input ?? '').toLowerCase().replace(/[’‘]/g, "'") + ' '; return MISTAKES.filter(m => new RegExp(m.re, 'i').test(s)).map(m => m.msg).slice(0, 2); },
};
if (typeof module !== 'undefined') module.exports = { Grader };
