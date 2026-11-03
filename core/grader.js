// core/grader.js — 영어 문장 채점 (SPEC 4-3절). DOM 을 쓰지 않아 Node(tools/check_answers.mjs)에서도 그대로 돈다.
// 필요: CONTRACTIONS(shared/contractions.js), MISTAKES(shared/mistakes.js, 없어도 됨)
// v0.3.0 보강(QA 제보): 아포스트로피 없는 축약형(dont·im), 's = is/has · 'd = would/had 둘 다, 숫자 낱말 ↔ 숫자(fifteen = 15, seven thirty = 7:30), ok = okay,
//   문법 낱말(what↔that, never↔ever …)과 같은 말의 다른 어미(closed↔closes)는 오타로 봐주지 않음
const NUM_WORDS = { zero: 0, oh: null, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const NO_TYPO = new Set('what that than then this these those there their they them when were where with will would could should have has had from form your you our here hear does done did went want wants need needs never ever every very any many much more most some same make made take took come came know now not nor new few for four far fat fit sit set get got gets bought brought though through thought tough where were wear way why who how out our its it is in on at an and are as be by do go he me my no of or so to up us we she her his him has had was were one won too two less lest last lost live love leave left right write night might light life lie lay play pray said says sad bad bed bet better bitter'.split(' '));
const Grader = {
  // 비교용 낱말 배열: 소문자, 따옴표 통일, 문장부호 제거(아포스트로피는 남김), 축약형 풀기, '|' (덩어리 표시) 제거, 숫자 낱말 → 숫자
  tokens(s) {
    let t = String(s ?? '').replace(/\|/g, ' ').replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').toLowerCase();
    t = t.replace(/(\d),(\d{3})/g, '$1$2').replace(/[^a-z0-9'\s-]/g, ' ').replace(/(^|\s)'+|'+(\s|$)/g, ' ').replace(/\s-\s/g, ' ');
    const out = [];
    for (let w of t.split(/\s+/).filter(Boolean)) {
      if (w === 'ok') w = 'okay';
      const full = (typeof CONTRACTIONS !== 'undefined' && CONTRACTIONS[w]);
      if (full) { out.push(...full.split(' ')); continue; }
      const m = w.match(/^([a-z]+)-([a-z]+)$/); if (m && NUM_WORDS[m[1]] >= 20 && NUM_WORDS[m[2]] > 0 && NUM_WORDS[m[2]] < 10) { out.push(String(NUM_WORDS[m[1]] + NUM_WORDS[m[2]])); continue; } // twenty-five
      if (w.includes('-') && !/\d/.test(w)) { out.push(...w.split('-').filter(Boolean)); continue; } // round-trip = round trip, e-mail 은 email 로 따로
      if (NUM_WORDS[w] != null) { out.push(String(NUM_WORDS[w])); continue; }
      out.push(w);
    }
    // twenty five(띄어 씀) → 25
    for (let i = 0; i < out.length - 1; i++) { const a = +out[i], b = +out[i + 1]; if (/^\d+$/.test(out[i]) && /^\d$/.test(out[i + 1]) && a >= 20 && a % 10 === 0 && a < 100 && b > 0) out.splice(i, 2, String(a + b)); }
    return out;
  },
  // 같은 낱말인가: 'is|has' 처럼 둘 중 하나인 토큰(축약형 's·'d)도 맞음
  eq(a, b) { if (a === b) return true; if (a.includes('|')) return a.split('|').includes(b) || (b.includes('|') && a.split('|').some(x => b.split('|').includes(x))); if (b.includes('|')) return b.split('|').includes(a); return false; },
  // 화면 표시용 원래 낱말(문장부호는 붙인 채)
  words(s) { return String(s ?? '').replace(/\|/g, ' ').trim().split(/\s+/).filter(Boolean); },
  dist(a, b) { // 편집 거리 (짧은 낱말용)
    if (a === b) return 0; const m = a.length, n = b.length; if (Math.abs(m - n) > 2) return 3;
    const dp = Array.from({ length: m + 1 }, (_, i) => [i]); for (let j = 1; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) { dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1); }
    return dp[m][n];
  },
  same(a, b) { return a.length === b.length && a.every((w, i) => this.eq(w, b[i])); },
  // 문법 차이(같은 말의 다른 어미 -s/-es/-d/-ed/-ing)는 오타로 봐주지 않는다: drive ↔ drives, closed ↔ closes
  stems(w) { const out = new Set([w]); for (const e of ['ing', 'ed', 'es', 'd', 's']) if (w.endsWith(e) && w.length > e.length + 1) { const s = w.slice(0, -e.length); out.add(s); out.add(s + 'e'); } return out; },
  inflect(x, y) { const [s, l] = x.length < y.length ? [x, y] : [y, x]; if (['s', 'es', 'd', 'ed'].some(e => l === s + e)) return true; const A = this.stems(x), B = this.stems(y); for (const v of A) if (B.has(v)) return true; return false; },
  // 오타로 봐줄 수 있는 차이인가: 4글자 이상, 편집 거리 1, 어미 차이 아님, 문법 낱말·숫자 아님
  typoOk(g, w) { return !g.includes('|') && !w.includes('|') && w.length >= 4 && !/\d/.test(g + w) && !NO_TYPO.has(g) && !NO_TYPO.has(w) && this.dist(g, w) === 1 && !this.inflect(g, w); },
  // 오타 하나만 다르면 near
  near(a, b) { if (a.length !== b.length) return null; let typo = null; for (let i = 0; i < a.length; i++) { if (this.eq(a[i], b[i])) continue; if (typo || !this.typoOk(a[i], b[i])) return null; typo = { got: a[i], want: b[i] }; } return typo; },
  // 낱말 단위 비교: LCS 로 맞은 낱말 표시. 돌려주는 값 got[i] = {w, ok}, missing = 답에만 있는 낱말
  diff(got, want) {
    const m = got.length, n = want.length; const L = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) L[i][j] = this.eq(got[i], want[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const okG = new Array(m).fill(false), okW = new Array(n).fill(false); let i = 0, j = 0;
    while (i < m && j < n) { if (this.eq(got[i], want[j])) { okG[i] = okW[j] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    const show = (w) => w.includes('|') ? w.split('|')[0] : w;
    return { got: got.map((w, k) => ({ w: show(w), ok: okG[k] })), missing: want.filter((w, k) => !okW[k]).map(show), score: n ? L[0][0] / Math.max(n, m) : 0 };
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
  word(input, answers) { const G = this.tokens(input); for (const a of answers) { const W = this.tokens(a); if (this.same(G, W)) return { ok: true }; const g = G.join(' '), w = W.join(' '); if (G.length === 1 && W.length === 1 && this.typoOk(g, w)) return { ok: true, typo: { got: g, want: w } }; } return { ok: false }; },
  // 자유 쓰기(free): 정답이 정해지지 않은 쓰기. 조건 = 낱말 수 + 꼭 넣을 표현 묶음(need: [[A 또는 B], [C]]) — 각 묶음에서 하나 이상
  has(tokens, phrase) { const p = this.tokens(phrase); if (!p.length) return true; for (let i = 0; i + p.length <= tokens.length; i++) if (p.every((w, k) => this.eq(tokens[i + k], w))) return true; return false; },
  free(input, need = [], minWords = 4) {
    const t = this.tokens(input); const missing = (need || []).filter(g => !(Array.isArray(g) ? g : [g]).some(ph => this.has(t, ph)));
    const short = t.length < minWords; return { ok: !short && !missing.length, short, missing, words: t.length, explain: this.explain(input) };
  },
  // 말하기: 인식된 문장과 목표 문장의 낱말 일치율
  speak(heard, target) { const d = this.diff(this.tokens(heard), this.tokens(target)); const want = this.tokens(target); const hit = want.length - d.missing.length; return { rate: want.length ? hit / want.length : 0, diff: d }; },
  // 흔한 실수 설명 (shared/mistakes.js)
  explain(input) { if (typeof MISTAKES === 'undefined') return []; const s = ' ' + String(input ?? '').toLowerCase().replace(/[’‘]/g, "'") + ' '; return MISTAKES.filter(m => new RegExp(m.re, 'i').test(s)).map(m => m.msg).slice(0, 2); },
};
if (typeof module !== 'undefined') module.exports = { Grader };
