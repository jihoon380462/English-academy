// tools/check_combo.mjs — 🧩 조합 말하기 엔진 검사: 표·문장 만들기·칸 알아보기·채점
// node tools/check_combo.mjs  → FAILS 0 이어야 배포
import fs from 'node:fs'; import path from 'node:path'; import vm from 'node:vm';
import { ROOT } from './load_content.mjs';
const ctx = vm.createContext({ console, Math, JSON, Object, Array, String, Number, RegExp, Set, Map });
for (const f of ['core/config.js', 'core/util.js', 'shared/contractions.js', 'shared/mistakes.js', 'core/grader.js', 'core/combo.js', 'core/combo-patterns.js', 'courses/combo/content.js']) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
const { Combo, Inflect, COMBO_LEX, Grader, STATIVE } = vm.runInContext('({ Combo, Inflect, COMBO_LEX, Grader, STATIVE })', ctx);
let fails = 0, n = 0; const F = (m) => { fails++; if (fails <= 40) console.log('  ✗ ' + m); };
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// 1) 낱말 데이터
const cats = new Set(COMBO_LEX.obj.map(o => o.cat));
for (const v of COMBO_LEX.vt) { if (!v.obj || !v.obj.length) F(`vt ${v.v}: obj 없음`); for (const c of v.obj || []) if (!cats.has(c)) F(`vt ${v.v}: 목적어 종류 ${c} 가 obj 에 없음`); }
for (const s of COMBO_LEX.subj) if (!['s1', 's2', 's3', 'pl'].includes(s.p)) F(`subj ${s.w}: p`);
for (const [k, L] of Object.entries(COMBO_LEX)) { const seen = new Set(); for (const x of L) { const w = x.w || x.v; if (!x.ko) F(`${k} ${w}: ko 없음`); if (seen.has(w)) F(`${k} ${w}: 중복`); seen.add(w); } }
// 2) 활용
const ex = { s3: { watch: 'watches', go: 'goes', cry: 'cries', play: 'plays', have: 'has', fix: 'fixes', study: 'studies', wash: 'washes', relax: 'relaxes' },
  past: { play: 'played', like: 'liked', study: 'studied', cry: 'cried', carry: 'carried', shop: 'shopped', travel: 'traveled', finish: 'finished', dance: 'danced' },
  ing: { make: 'making', run: 'running', see: 'seeing', dance: 'dancing', get: 'getting', play: 'playing', swim: 'swimming', write: 'writing', take: 'taking', lose: 'losing', shop: 'shopping', exercise: 'exercising' } };
const all = [...COMBO_LEX.vt, ...COMBO_LEX.vi]; const byV = (v) => all.find(x => x.v === v) || { v };
for (const [v, w] of Object.entries(ex.s3)) { n++; if (Inflect.s3(v) !== w) F(`s3 ${v} → ${Inflect.s3(v)} (기대 ${w})`); }
for (const [v, w] of Object.entries(ex.past)) { n++; if (Inflect.past(byV(v)) !== w) F(`past ${v} → ${Inflect.past(byV(v))} (기대 ${w})`); }
for (const [v, w] of Object.entries(ex.ing)) { n++; if (Inflect.ing(byV(v)) !== w) F(`ing ${v} → ${Inflect.ing(byV(v))} (기대 ${w})`); }
// 과거분사(p.p.): 불규칙 동사는 pp 가 있거나 과거형과 같아야 함 — 아래 표에 없는 불규칙 동사가 낱말에 있으면 실패(과거분사 확인 필요)
const PPX = { eat: 'eaten', drink: 'drunk', write: 'written', take: 'taken', see: 'seen', forget: 'forgotten', swim: 'swum', sing: 'sung', run: 'run', make: 'made', buy: 'bought', read: 'read', meet: 'met', send: 'sent', find: 'found', lose: 'lost', bring: 'brought', sleep: 'slept', play: 'played', like: 'liked', study: 'studied', cry: 'cried', carry: 'carried', shop: 'shopped', travel: 'traveled', finish: 'finished', dance: 'danced', get: 'got' };
for (const x of all) { if (x.past && !(x.v in PPX)) F(`${x.v}: 불규칙 동사의 과거분사를 PPX 표에 적어 주세요`); }
for (const [v, w] of Object.entries(PPX)) { const x = all.find(y => y.v === v); if (!x || v === 'get') continue; n++; if (Inflect.pp(x) !== w) F(`pp ${v} → ${Inflect.pp(x)} (기대 ${w})`); }
for (const o of COMBO_LEX.obj) if (!['sg', 'pl'].includes(o.n)) F(`obj ${o.w}: 수(n) 없음`);
// 짧은 모음 + 자음 하나로 끝나는 1음절 동사는 ing·past 를 직접 적어야 함(자음 겹침)
for (const x of all) if (/^[^aeiou]*[aeiou][^aeiouwxy]$/.test(x.v) && !x.ing) F(`${x.v}: 자음 겹침 동사 같은데 ing 가 없음`);

const OLD = new Set(['be-adj', 'be-place', 'sv', 'svo', 'svom', 'neg', 'q', 'past', 'past-neg', 'past-q', 'was', 'will', 'going', 'prog', 'can', 'have-to', 'there']); const VL = ['vt', 'vi', 'vTo', 'vIng', 'adjEmo']; const cap = (x) => x.charAt(0).toUpperCase() + x.slice(1);
// 2c) 패턴 정의: 탭·묶음·열 이름, 걸러내기(only·cats) 낱말이 실제 있는지
{ const ids = new Set(); for (const p of Combo.patterns) { n++; if (ids.has(p.id)) F(`패턴 id 중복 ${p.id}`); ids.add(p.id); if (!p.group || !p.title || !p.ex || !p.rule) F(`${p.id}: group·title·ex·rule 중 빈 것`); for (const st of p.sets || ['basic']) if (!['basic', 'pattern', 'grammar'].includes(st)) F(`${p.id}: 알 수 없는 탭 ${st}`);
    const ks = p.cols.map(c => c.k); if (new Set(ks).size !== ks.length) F(`${p.id}: 열 키 중복 ${ks}`); if (p.cols.every(c => c.hide || c.fixed)) F(`${p.id}: 고를 열이 없음`);
    for (const c of p.cols) { if (c.hide && !c.fixed) F(`${p.id}: hide 는 고정 열만`); if (c.only) for (const w of c.only) if (!(COMBO_LEX[c.from] || []).some(x => x.w === w)) F(`${p.id}: only 낱말 ${w} 가 ${c.from} 에 없음`); if (c.from && !COMBO_LEX[c.from]) F(`${p.id}: 낱말 목록 ${c.from} 없음`); } } }
// 3) 패턴마다 표 300개 × 무작위 조합: 기대 문장은 통과, 칸을 정확히 알아봄, 흔한 실수는 오답
const contract = (s) => s.replace(/\bdo not\b/i, "don't").replace(/\bdoes not\b/i, "doesn't").replace(/\bdid not\b/i, "didn't").replace(/\bI am\b/, "I'm").replace(/\b(She|He) is\b/, "$1's").replace(/\bcannot\b/, "can't").replace(/\b(I|You|He|She|We|They) will\b/, "$1'll");
for (const p of Combo.patterns) {
  let okN = 0;
  for (let t = 0; t < 300; t++) {
    const tb = Combo.table(p, COMBO_LEX, 6, rnd);
    for (const c of p.cols) { if (!tb[c.k] || !tb[c.k].length) F(`${p.id}: 열 ${c.k} 비었음`); if (!c.fixed && new Set(tb[c.k].map(x => x.w || x.v)).size !== tb[c.k].length) F(`${p.id}: 열 ${c.k} 같은 낱말 두 번`); }
    if (tb.V && tb.O) for (const v of tb.V) if (!tb.O.some(o => v.obj.includes(o.cat))) F(`${p.id}: 동사 ${v.v} 와 어울리는 목적어가 표에 없음`);
    const pick = {}; for (const c of p.cols) pick[c.k] = tb[c.k][Math.floor(rnd() * tb[c.k].length)];
    const want = Combo.sentence(p.make(pick)); n++;
    const r = Combo.judge(p, tb, want);
    if (!r.ok) { F(`${p.id}: 기대 문장 「${want}」 이 통과 못 함 → ${r.expect || '칸 못 찾음 ' + (r.missing || []).map(c => c.k)}`); continue; }
    for (const c of p.cols) if (r.pick[c.k] !== pick[c.k]) F(`${p.id}: 「${want}」 의 ${c.k} 를 ${(r.pick[c.k] || {}).w || (r.pick[c.k] || {}).v} 로 잘못 알아봄`);
    const low = want.toLowerCase().replace(/[.?]$/, ''); n++; if (!Combo.judge(p, tb, low).ok) F(`${p.id}: 소문자·마침표 없이 「${low}」 실패`);
    const ct = contract(want); if (ct !== want) { n++; const rc = Combo.judge(p, tb, ct); if (!rc.ok) F(`${p.id}: 줄임말 「${ct}」 실패 (기대 ${rc.expect})`); }
    // 흔한 실수: 원형 그대로(3인칭 -s 빠짐), 과거인데 원형, 진행인데 원형, be 잘못
    const S = pick.S, V = pick.V;
    const wrongs = [];
    if (V && ['sv', 'svo', 'svom'].includes(p.id) && S.p === 's3') wrongs.push(want.replace(new RegExp('\\b' + Inflect.s3(V.v) + '\\b'), V.v));
    if (V && ['sv', 'svo', 'svom'].includes(p.id) && S.p !== 's3') wrongs.push(want.replace(new RegExp('\\b' + V.v + '\\b'), Inflect.s3(V.v)));
    if (pick.O && p.id === 'svo') wrongs.push(Combo.sentence({ parts: [pick.S.w, pick.O.w, Inflect.verb(pick.S, pick.V)] })); // 한국어 순서(주어 목적어 동사)
    if (V && p.id === 'past' && Inflect.past(V) !== V.v) wrongs.push(want.replace(new RegExp('\\b' + Inflect.past(V) + '\\b'), V.v));
    if (V && ['neg', 'q', 'past-neg', 'past-q', 'will', 'can', 'have-to', 'going'].includes(p.id) && Inflect.s3(V.v) !== V.v) wrongs.push(want.replace(new RegExp('\\b' + V.v + '\\b'), Inflect.s3(V.v)));
    if (V && p.id === 'prog') wrongs.push(want.replace(new RegExp('\\b' + Inflect.ing(V) + '\\b'), V.v));
    if (S && ['be-adj', 'be-place', 'prog'].includes(p.id)) { const be = Inflect.be(S); wrongs.push(want.replace(new RegExp('\\b' + be + '\\b'), be === 'is' ? 'are' : 'is')); }
    if (p.id === 'was') { const be = Inflect.be(S, true); wrongs.push(want.replace(new RegExp('\\b' + be + '\\b'), be === 'was' ? 'were' : 'was')); }
    if (S && ['neg', 'q'].includes(p.id)) { const d = Inflect.do(S); wrongs.push(want.replace(new RegExp('\\b' + d + '\\b', 'i'), m => (d === 'does' ? 'do' : 'does').replace(/^d/, m[0]))); }
    if (p.id === 'there') wrongs.push(want.replace(/\b(is|are)\b/, m => m === 'is' ? 'are' : 'is'));
    // 새 패턴: 동사 모양 바꾸기(원형·-s·과거·-ing·p.p.) + 패턴별 흔한 실수
    if (!OLD.has(p.id)) {
      for (const c of p.cols) { if (!VL.includes(c.from) || !pick[c.k]) continue; const forms = Combo.forms(c, pick[c.k]); const hit = forms.find(f => new RegExp('\\b' + f + '\\b').test(want)); if (!hit) continue; for (const alt of forms) { if (alt === hit || new RegExp('\\b' + alt + '\\b').test(want)) continue; wrongs.push(want.replace(new RegExp('\\b' + hit + '\\b'), alt)); } }
      const sw = (re, a, b) => want.replace(re, m => (m.toLowerCase() === a ? (m[0] === m[0].toUpperCase() ? cap(b) : b) : (m[0] === m[0].toUpperCase() ? cap(a) : a)));
      if (['planning', 'thinking', 'about-to', 'used-ing'].includes(p.id)) { const be = Inflect.be(S); wrongs.push(want.replace(new RegExp('\\b' + be + '\\b'), be === 'is' ? 'are' : 'is')); }
      if (p.id === 'was-going') wrongs.push(sw(/\b(was|were)\b/, 'was', 'were'));
      if (['ever-q', 'never'].includes(p.id)) wrongs.push(sw(/\b(has|have)\b/i, 'has', 'have'));
      if (['want-to', 'need-to'].includes(p.id)) { const w0 = p.id === 'want-to' ? 'want' : 'need'; const good = S.p === 's3' ? w0 + 's' : w0, bad = S.p === 's3' ? w0 : w0 + 's'; wrongs.push(want.replace(new RegExp('\\b' + good + '\\b'), bad)); }
      if (p.id === 'want-q') wrongs.push(sw(/\b(does|do)\b/i, 'does', 'do'));
      if (p.id === 'used-to') wrongs.push(want.replace(/\bused to\b/, 'use to'));
      // 문법 코스(G) 패턴: be·have 맞춤, 시제 섞기, 어순, 다른 맞는 말(that · that 생략)
      if (['pass', 'pass-by'].includes(p.id)) wrongs.push(sw(/\b(is|are)\b/, 'is', 'are'));
      if (p.id === 'pass-past') wrongs.push(sw(/\b(was|were)\b/, 'was', 'were'));
      if (['just-already', 'yet-neg', 'pp-cont'].includes(p.id)) wrongs.push(sw(/\b(has|have)\b/i, 'has', 'have'));
      if (/^(stop|remember|try)-/.test(p.id)) { const w0 = p.id.split('-')[0]; const good = Inflect.verb(S, { v: w0 }), bad = S.p === 's3' ? w0 : Inflect.s3(w0); wrongs.push(want.replace(new RegExp('\\b' + good + '\\b'), bad)); }
      if (p.id === 'know-wh') { const d = Inflect.do(S); wrongs.push(`Do you know ${pick.WH.w} ${d} ${S.w} ${pick.V.v}?`); }
      if (p.id === 'pp-vs') { const M = pick.M, h = Inflect.have(S); wrongs.push(M.t === 'pf' ? Combo.sentence({ parts: [S.w, Inflect.past(pick.V), pick.O.w, M.w] }) : Combo.sentence({ parts: [S.w, h, Inflect.pp(pick.V), pick.O.w, M.w] })); }
      if (p.id === 'rel-who') { n++; const t2 = want.replace(' who ', ' that '); if (!Combo.judge(p, tb, t2).ok) F(`${p.id}: who 대신 that 「${t2}」 실패`); }
      if (p.id === 'rel-which') { n++; const t2 = want.replace(' which ', ' that '); if (!Combo.judge(p, tb, t2).ok) F(`${p.id}: which 대신 that 「${t2}」 실패`); n++; if (Combo.judge(p, tb, want.replace(' which ', ' who ')).ok) F(`${p.id}: 물건인데 who 가 통과`); }
      if (p.id === 'rel-who') { n++; if (Combo.judge(p, tb, want.replace(' who ', ' which ')).ok) F(`${p.id}: 사람인데 which 가 통과`); }
      if (p.id === 'think-that') { n++; const t2 = want.replace(' that ', ' '); if (!Combo.judge(p, tb, t2).ok) F(`${p.id}: that 생략 「${t2}」 실패`); }
    }
    for (const w of wrongs) { if (w === want) continue; n++; const rw = Combo.judge(p, tb, w); if (rw.ok) F(`${p.id}: 틀린 문장 「${w}」 이 정답 처리됨 (기대 ${want})`); else if (!rw.expect) F(`${p.id}: 틀린 문장 「${w}」 의 칸을 못 알아봄`); else if (rw.expect !== want) F(`${p.id}: 틀린 문장 「${w}」 → 기대 문장을 「${rw.expect}」 로 잘못 잡음 (맞는 건 ${want})`); }
    okN++;
  }
  console.log(`  ${p.id.padEnd(9)} 표 300 · 통과 ${okN}`);
}
// 4) 표 밖 낱말·빈 입력
{ const p = Combo.pattern('svo'); const tb = Combo.table(p, COMBO_LEX, 6, rnd); n++; const r = Combo.judge(p, tb, 'hello world'); if (r.ok || !r.missing) F('표에 없는 낱말인데 칸을 찾았다고 함'); n++; if (!Combo.judge(p, tb, '  ').empty) F('빈 입력'); }
// 5) 🔗 바꿔 말하기 사슬: 문법마다 표 200개 × 무작위 조합 → 단계마다 기대 문장 통과 · 줄임말 · 틀린 모양 오답
{
  const srcs = Combo.patterns.filter(p => Combo.chainable(p)); let steps = 0; console.log('\n  사슬 시작 문법: ' + srcs.map(p => p.id).join(' '));
  for (const p of srcs) {
    for (let t = 0; t < 200; t++) {
      const tb = Combo.table(p, COMBO_LEX, 6, rnd); const pick = {}; for (const c of p.cols) pick[c.k] = tb[c.k][Math.floor(rnd() * tb[c.k].length)];
      const ch = Combo.chain(p, pick, COMBO_LEX); if (!ch) { F(`${p.id}: 사슬이 안 만들어짐`); continue; }
      const ids = ch.steps.map(s => s.id); n++;
      if (new Set(ids).size !== ids.length) F(`${p.id}: 사슬 단계 중복 ${ids}`);
      if (ids.length < 6) F(`${p.id}: 사슬 단계가 ${ids.length}개뿐 (${ids})`);
      if (ch.steps.some(s => s.id === (({ svo: 'pres', svom: 'pres' })[p.id] || p.id) && p.id !== 'going')) F(`${p.id}: 자기 자신으로 바꾸는 단계가 있음 ${ids}`);
      if (STATIVE.includes(pick.V.v) && ids.includes('prog')) F(`${p.id}: 상태 동사 ${pick.V.v} 로 진행형 단계가 생김`);
      for (const s of ch.steps) {
        steps++; const want = s.expect; n++;
        const r = Combo.gradeStep(s, want); if (!r.ok) F(`${p.id}→${s.id}: 기대 문장 「${want}」 이 통과 못 함`);
        const low = want.toLowerCase().replace(/[.?]$/, ''); n++; if (!Combo.gradeStep(s, low).ok) F(`${p.id}→${s.id}: 소문자·마침표 없이 「${low}」 실패`);
        const ct = contract(want); if (ct !== want) { n++; if (!Combo.gradeStep(s, ct).ok) F(`${p.id}→${s.id}: 줄임말 「${ct}」 실패`); }
        if (s.give.length && !s.give.every(x => want.includes(x.w))) F(`${p.id}→${s.id}: 알려 준 낱말이 문장에 없음 ${s.give.map(x => x.w)} / ${want}`);
        if (s.from !== 'base' && !ids.includes(s.from)) F(`${p.id}→${s.id}: 이어 바꿀 단계 ${s.from} 가 사슬에 없음`);
        if (s.fromSentence === want) F(`${p.id}→${s.id}: 바꿀 문장과 정답이 같음`);
        if (s.id === 'q' || s.id === 'past-q') { if (!want.endsWith('?')) F(`${p.id}→${s.id}: 질문인데 물음표 없음 ${want}`); if (pick.S.w === 'I' && !/\byou\b/i.test(want)) F(`${p.id}→${s.id}: I 인데 you 로 안 바뀜 ${want}`); }
        // 흔한 실수: 동사 모양 (원형 ↔ -s ↔ 과거 ↔ -ing)
        const V = pick.V; const forms = [V.v, Inflect.s3(V.v), Inflect.past(V), Inflect.ing(V)];
        const hit = forms.find(f => new RegExp('\\b' + f + '\\b').test(want));
        for (const alt of forms) { if (!hit || alt === hit || new RegExp('\\b' + alt + '\\b').test(want)) continue; const bad = want.replace(new RegExp('\\b' + hit + '\\b'), alt); n++; if (Combo.gradeStep(s, bad).ok) F(`${p.id}→${s.id}: 틀린 문장 「${bad}」 이 정답 처리됨 (기대 ${want})`); }
        // 안 바꾸고 그대로 베끼기는 오답 (바꿀 문장 ≠ 정답일 때)
        n++; if (Combo.gradeStep(s, s.fromSentence).ok) F(`${p.id}→${s.id}: 바꿀 문장 그대로 베껴도 정답 처리 「${s.fromSentence}」`);
      }
    }
  }
  console.log(`  사슬 단계 ${steps}개 검사`);
  // 진행형 표에는 상태 동사가 없어야 함
  for (let t = 0; t < 100; t++) { const tb = Combo.table(Combo.pattern('prog'), COMBO_LEX, 8, rnd); n++; if (tb.V.some(v => STATIVE.includes(v.v))) F('진행형 표에 상태 동사가 있음'); }
  // 눈으로 확인: 예시 사슬
  const p0 = Combo.pattern('svo'); const pk = { S: COMBO_LEX.subj.find(x => x.w === 'I'), V: COMBO_LEX.vt.find(x => x.v === 'eat'), O: COMBO_LEX.obj.find(x => x.w === 'pizza') };
  const ex = Combo.chain(p0, pk, COMBO_LEX); console.log('\n  예) ' + ex.base); for (const s of ex.steps) console.log(`     ${s.label.padEnd(6)} ← ${s.from === 'base' ? '기준' : s.from}  ${s.expect}${s.subjNote ? '   (' + s.subjNote.replace(/<[^>]+>/g, '') + ')' : ''}`);
}
console.log(`\n확인 ${n}건 · FAILS ${fails}`); process.exit(fails ? 1 : 0);
