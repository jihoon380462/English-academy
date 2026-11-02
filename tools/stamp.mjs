#!/usr/bin/env node
// tools/stamp.mjs — HTML 의 ?v= 와 sw.js 의 VERSION·미리 캐시 목록을 core/config.js 의 APP_VERSION 에 맞춘다 (배포 전 실행)
import fs from 'node:fs'; import path from 'node:path'; import { ROOT, courses, parts } from './load_content.mjs';
const ver = (fs.readFileSync(path.join(ROOT, 'core/config.js'), 'utf8').match(/APP_VERSION:\s*'([^']+)'/) || [])[1];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.name.startsWith('.') || e.name === 'node_modules' ? [] : e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
// 코스 페이지의 조각(parts/*.js) 스크립트 태그를 <!--PARTS--> … <!--/PARTS--> 사이에 다시 만든다
for (const c of courses()) { const f = path.join(ROOT, 'courses', c, 'index.html'); if (!fs.existsSync(f)) continue; const s = fs.readFileSync(f, 'utf8'); const tags = parts(c).map(x => `<script src="parts/${path.basename(x)}?v=${ver}"></script>`).join('\n'); const t = s.replace(/<!--PARTS-->[\s\S]*?<!--\/PARTS-->/, `<!--PARTS-->\n${tags}${tags ? '\n' : ''}<!--/PARTS-->`); if (t !== s) fs.writeFileSync(f, t); }
let n = 0; for (const f of walk(ROOT).filter(f => f.endsWith('.html'))) { const s = fs.readFileSync(f, 'utf8'); const t = s.replace(/\?v=[0-9.]+/g, '?v=' + ver); if (t !== s) { fs.writeFileSync(f, t); n++; } }
const assets = ['index.html']; const rel = (f) => path.relative(ROOT, f).replace(/\\/g, '/');
for (const f of walk(path.join(ROOT, 'core')).concat(walk(path.join(ROOT, 'shared')))) if (/\.(js|css)$/.test(f)) assets.push(rel(f) + '?v=' + ver);
for (const d of fs.readdirSync(path.join(ROOT, 'courses'))) { for (const f of ['index.html', 'content.js']) if (fs.existsSync(path.join(ROOT, 'courses', d, f))) assets.push(`courses/${d}/${f}` + (f.endsWith('.js') ? '?v=' + ver : '')); for (const x of parts(d)) assets.push(x + '?v=' + ver); }
if (fs.existsSync(path.join(ROOT, 'assets/img'))) for (const f of fs.readdirSync(path.join(ROOT, 'assets/img'))) if (/\.(png|webp|svg)$/.test(f)) assets.push('assets/img/' + f);
const swp = path.join(ROOT, 'sw.js'); let sw = fs.readFileSync(swp, 'utf8');
sw = sw.replace(/const VERSION = '[^']*';/, `const VERSION = '${ver}';`).replace(/const ASSETS = \[[\s\S]*?\];/, 'const ASSETS = ' + JSON.stringify(assets) + ';'); fs.writeFileSync(swp, sw);
console.log(`stamp v${ver}: HTML ${n}개 갱신, sw.js 미리 캐시 ${assets.length}개`);
