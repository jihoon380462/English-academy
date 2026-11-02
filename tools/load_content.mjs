// tools/load_content.mjs — 코스 content.js 를 Node vm 에서 읽어 { COURSE, CHAPTERS, LESSONS, PROBLEMS, SENTENCE_DECKS, Grader, Content } 를 돌려준다
import fs from 'node:fs'; import path from 'node:path'; import vm from 'node:vm'; import { fileURLToPath } from 'node:url';
export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SHARED = ['core/config.js', 'core/util.js', 'shared/contractions.js', 'shared/mistakes.js', 'core/grader.js', 'core/content.js', 'core/anki.js'];
export function courses() { return fs.readdirSync(path.join(ROOT, 'courses')).filter(d => fs.existsSync(path.join(ROOT, 'courses', d, 'content.js'))); }
// courses/<id>/parts/*.js — 챕터·덱 조각(LESSONS.push(...) 등). 이름 순서대로 content.js 다음에 로드
export function parts(course) { const d = path.join(ROOT, 'courses', course, 'parts'); return fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith('.js')).sort().map(f => `courses/${course}/parts/${f}`) : []; }
export function load(course) {
  const ctx = vm.createContext({ console, module: undefined, Date, Math, JSON, Object, Array, String, Number, RegExp, Set, Map, TextEncoder });
  for (const f of SHARED) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  const file = `courses/${course}/content.js`; vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), ctx, { filename: file });
  for (const f of parts(course)) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  return vm.runInContext(`({ CONFIG, COURSE, CHAPTERS, LESSONS, PROBLEMS, SENTENCE_DECKS: typeof SENTENCE_DECKS === 'undefined' ? null : SENTENCE_DECKS, Grader, Content, MISTAKES, Anki, ANKI })`, ctx);
}
