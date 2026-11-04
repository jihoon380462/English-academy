#!/usr/bin/env node
// tools/validate_content.mjs — 콘텐츠 스키마 검사 (courses/basic/content.js 맨 위 주석이 기준). 실패가 하나라도 있으면 exit 1
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, courses, load } from './load_content.mjs';
let fails = 0, warns = 0; const F = (m) => { fails++; console.log('  ✗ ' + m); }; const Wn = (m) => { warns++; console.log('  ⚠ ' + m); };
const TYPES = ['free', 'choice', 'listen', 'match', 'build', 'order', 'fill', 'fix', 'type', 'dictation', 'speak'];
const ROLE = /^[SVOCMJQ]$/;
const ver = (fs.readFileSync(path.join(ROOT, 'core/config.js'), 'utf8').match(/APP_VERSION:\s*'([^']+)'/) || [])[1];
const ids = new Set();
for (const c of courses()) {
  console.log(`[${c}]`); let C; try { C = load(c); } catch (e) { F(`content.js 로드 실패: ${e.message}`); continue; }
  const { COURSE, CHAPTERS, LESSONS, PROBLEMS, SENTENCE_DECKS, WORD_LEVELS, Content, Grader } = C;
  if (!COURSE || COURSE.id !== c) F(`COURSE.id 가 폴더 이름(${c})과 달라요`);
  const lids = new Set(LESSONS.map(l => l.id)); const chs = new Set(CHAPTERS.map(x => x.n));
  const checkEx = (e, where) => { if (!e.en) F(`${where}: en 없음`); if (e.roles) { const n = Content.chunks(e.en, e.roles).length; const r = e.roles.trim().split(/\s+/); if (r.length !== n) F(`${where}: roles ${r.length}개 ≠ 덩어리 ${n}개 (${e.en})`); r.forEach(x => ROLE.test(x) || F(`${where}: 성분 글자 ${x} 모름`)); } };
  for (const l of LESSONS) {
    const w = `레슨 ${l.id}`; if (!chs.has(l.ch)) F(`${w}: 챕터 ${l.ch} 없음`); if (!l.title) F(`${w}: title 없음`);
    if (!Array.isArray(l.pages) || !l.pages.length) F(`${w}: pages 없음`); else l.pages.forEach((p, i) => { if (!p.title) F(`${w} 쪽${i}: title 없음`); (p.ex || []).forEach((e, k) => { checkEx(e, `${w} 쪽${i} 예문${k}`); if (e.deck !== false && !e.ko) Wn(`${w} 쪽${i} 예문${k}: ko 없음(덱에 안 들어감)`); }); });
    if (!Array.isArray(l.summary) || l.summary.length < 2) F(`${w}: summary 2줄 이상 필요`);
    if (!PROBLEMS.some(p => p.lesson === l.id)) F(`${w}: 문제가 없어요`);
  }
  for (const ch of CHAPTERS) if (!ch.practice && LESSONS.some(l => l.ch === ch.n) && !LESSONS.some(l => l.ch === ch.n && l.boss)) Wn(`챕터 ${ch.n}: 보스(상황 미션) 없음 (실전 챕터면 practice:true)`);
  if (new Set(CHAPTERS.map(c => c.n)).size !== CHAPTERS.length) F('챕터 번호 중복');
  for (const l of LESSONS) if (LESSONS.filter(x => x.id === l.id).length > 1) F(`레슨 id ${l.id} 중복`);
  for (const p of PROBLEMS) {
    const w = `문제 ${p.id}`; if (ids.has(p.id)) F(`${w}: id 중복`); ids.add(p.id);
    if (!lids.has(p.lesson)) F(`${w}: 레슨 ${p.lesson} 없음`); if (!TYPES.includes(p.type)) F(`${w}: type ${p.type} 모름`);
    if (!p.prompt) F(`${w}: prompt 없음`); if (!Array.isArray(p.tags) || !p.tags.length) F(`${w}: tags 없음`);
    if (!Array.isArray(p.hints) || p.hints.length !== 3) F(`${w}: hints 3개 필요`);
    const arr = (k) => Array.isArray(p[k]) && p[k].length;
    switch (p.type) {
      case 'choice': case 'listen': if (!arr('opts') || p.opts.length < 2 || p.opts.length > 4) F(`${w}: opts 2~4개`); if (!(p.ans >= 0 && p.ans < (p.opts || []).length)) F(`${w}: ans 범위 밖`); if (new Set(p.opts).size !== (p.opts || []).length) F(`${w}: 보기 중복`); if (p.type === 'listen' && !p.say) F(`${w}: say 없음`); if (p.q && p.qroles) checkEx({ en: p.q, roles: p.qroles }, w); break;
      case 'match': if (!arr('pairs') || p.pairs.length < 3 || p.pairs.length > 6) F(`${w}: pairs 3~6쌍`); else { if (new Set(p.pairs.map(x => x[0])).size !== p.pairs.length || new Set(p.pairs.map(x => x[1])).size !== p.pairs.length) F(`${w}: 짝 글자 중복`); } break;
      case 'build': case 'order': if (!arr('answer')) F(`${w}: answer 없음`); if (!arr('cards')) F(`${w}: cards 없음`); if (p.type === 'build') { if (!p.roles) F(`${w}: roles 없음`); else if (p.roles.trim().split(/\s+/).length !== (p.cards || []).length) F(`${w}: roles 수 ≠ cards 수`); else p.roles.trim().split(/\s+/).forEach(x => ROLE.test(x) || F(`${w}: 성분 ${x}`)); if (p.distractors) F(`${w}: build 에는 함정 카드를 쓰지 않아요`); } if ((p.distractors || []).some(d => (p.cards || []).includes(d))) F(`${w}: 함정 카드가 정답 카드와 같아요`); break;
      case 'fill': if (!p.text || !arr('blanks')) F(`${w}: text·blanks 필요`); else { const n = p.text.split('___').length - 1; if (n !== p.blanks.length) F(`${w}: 빈칸 ${n}개 ≠ blanks ${p.blanks.length}개`); p.blanks.forEach((b, i) => { if (!Array.isArray(b.a) || !b.a.length) F(`${w}: blanks[${i}].a 없음`); if (b.opt && !b.opt.some(o => b.a.includes(o))) F(`${w}: blanks[${i}] 보기에 정답 없음`); }); } break;
      case 'fix': if (!p.wrong || !arr('answer')) F(`${w}: wrong·answer 필요`); break;
      case 'type': if (!p.ko) F(`${w}: ko 필요`); if (!arr('answer')) F(`${w}: answer 없음`); break;
      case 'free': if (!arr('answer')) F(`${w}: 모범 문장(answer) 없음`); if (p.need && !Array.isArray(p.need)) F(`${w}: need 는 배열`); break;
      case 'dictation': case 'speak': if (!p.say) F(`${w}: say 없음`); if (p.type === 'speak' && p.roles) checkEx({ en: p.say, roles: p.roles }, w + ' 말하기 색'); break;
    }
  }
  if (SENTENCE_DECKS) { const sids = new Set(); for (const d of SENTENCE_DECKS) { if (!/^[\w-]+$/.test(d.id)) F(`덱 ${d.id}: id 문자`); for (const it of d.items) { const w = `덱 ${d.id} ${it.id}`; if (!/^[\w-]+$/.test(it.id)) F(`${w}: id 에 쓸 수 없는 글자`); if (sids.has(it.id)) F(`${w}: id 중복`); sids.add(it.id); if (!it.en || !it.ko) F(`${w}: en·ko 필요`); checkEx(it, w); } } console.log(`  덱 ${SENTENCE_DECKS.length}개 · 문장 ${sids.size}개`); }
  if (WORD_LEVELS) { const wid = new Set(), lid = new Set(); const POS = /^(n|v|adj|adv|prep|pron|conj|det|num|int|phr)$/; let total = 0;
    for (const L of WORD_LEVELS) { const w0 = `단어장 ${L.id}`; if (!/^[\w-]+$/.test(L.id || '')) F(`${w0}: id`); if (lid.has(L.id)) F(`${w0}: 레벨 id 중복`); lid.add(L.id); for (const k of ['title', 'age', 'grade', 'icon', 'desc']) if (!L[k]) F(`${w0}: ${k} 없음`); if (!Array.isArray(L.groups) || !L.groups.length) F(`${w0}: groups 없음`);
      const seenW = new Set();
      for (const g of L.groups || []) { if (!g.title) F(`${w0}: 묶음 title 없음`); for (const x of g.words || []) { total++; const w = `${w0} ${x.id}(${x.w})`;
        if (!/^[\w-]+$/.test(x.id || '')) F(`${w}: id`); if (wid.has(x.id)) F(`${w}: id 중복`); wid.add(x.id);
        for (const k of ['w', 'pos', 'ko', 'en', 'exko']) if (!x[k]) F(`${w}: ${k} 없음`); if (x.pos && !POS.test(x.pos)) F(`${w}: pos ${x.pos} 모름`);
        const key = (x.w || '').toLowerCase() + '|' + x.pos; if (seenW.has(key)) Wn(`${w}: 같은 레벨에 같은 낱말·품사 두 번`); seenW.add(key);
        if (x.en && x.w) { const T = Grader.tokens(x.en).join(' '); const forms = [x.w].concat(x.forms || []); const hit = forms.some(f => { const ft = Grader.tokens(f).join(' '); return (' ' + T + ' ').includes(' ' + ft + ' ') || T.split(' ').some(t => t === ft || Grader.stems(t).has(ft) || Grader.stems(ft).has(t) || t.startsWith(ft) && t.length - ft.length <= 3); }); if (!hit) F(`${w}: 예문에 낱말(또는 forms)이 없어요 — 「${x.en}」`); } for (const f of x.forms || []) if (!/^[A-Za-z][A-Za-z' -]*$/.test(f)) F(`${w}: forms 에 이상한 글자 「${f}」`); } } }
    { const seen = {}; for (const L of WORD_LEVELS.slice().sort((a, b) => (a.order || 0) - (b.order || 0))) for (const g of L.groups || []) for (const x of g.words || []) { const k = String(x.w).toLowerCase(); if (seen[k] && !/새 뜻/.test(x.note || '')) F(`단어장 ${x.id}: 「${x.w}」 가 아래 레벨(${seen[k]})에 이미 있어요 (다의어면 note 에 「새 뜻」)`); else if (!seen[k]) seen[k] = L.id; } }
    { const ko = {}; for (const L of WORD_LEVELS) for (const g of L.groups || []) for (const x of g.words || []) { const k = L.id + '|' + x.ko; if (ko[k]) W(`단어장 ${x.id}: 같은 레벨 ${ko[k]} 와 뜻이 똑같아요 「${x.ko}」 (퀴즈 보기 겹침)`); else ko[k] = x.id; } }
    console.log(`  단어장 레벨 ${WORD_LEVELS.length}개 · 낱말 ${total}개`); }
  console.log(`  챕터 ${CHAPTERS.length} · 레슨 ${LESSONS.length} · 문제 ${PROBLEMS.length}`);
}
// HTML ?v= 일치
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.name.startsWith('.') || e.name === 'node_modules' ? [] : e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []);
for (const f of walk(ROOT)) { const vs = [...fs.readFileSync(f, 'utf8').matchAll(/\?v=([0-9.]+)/g)].map(m => m[1]); if (vs.some(v => v !== ver)) F(`${path.relative(ROOT, f)}: ?v= 가 APP_VERSION(${ver})과 달라요 → node tools/stamp.mjs`); }
console.log(`\nFAILS ${fails} · 경고 ${warns}`); process.exit(fails ? 1 : 0);
