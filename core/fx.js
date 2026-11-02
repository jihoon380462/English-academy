// core/fx.js — 효과음(Sfx, Web Audio 합성)·진동·색종이·마스코트. 파이썬 아카데미 fx.js 차용 (Audio → Sfx: 브라우저 내장 Audio 와 이름이 겹치지 않게)
// ---------- 효과음 (Web Audio 합성) ----------
const Sfx = {
  ctx: null, get on() { return Store.data.settings.sound; },
  wave() { return 'sine'; },
  _ctx() { if (!this.ctx) { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } } if (this.ctx.state === 'suspended') this.ctx.resume(); return this.ctx; },
  tone(freq, dur = 0.12, type = null, vol = 0.18, delay = 0, slide = 0) { if (!this.on) return; const c = this._ctx(); if (!c) return; const o = c.createOscillator(), g = c.createGain(); o.type = type || this.wave(); const t = c.currentTime + delay; o.frequency.setValueAtTime(freq, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur + 0.02); },
  click() { this.tone(900, 0.05, 'square', 0.06); },
  pass() { this.tone(660, 0.08); this.tone(880, 0.1, null, 0.18, 0.08); },
  clear() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.15, null, 0.2, i * 0.09)); this.tone(1319, 0.35, null, 0.2, 0.36); },
  combo(n) { this.tone(440 + Math.min(n, 15) * 60, 0.1, 'triangle', 0.15); },
  levelUp() { [392, 523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, 0.18, null, 0.2, i * 0.1)); this.tone(1568, 0.5, null, 0.2, 0.62); },
  badge() { this.tone(1200, 0.08, 'triangle', 0.15); this.tone(1800, 0.14, 'triangle', 0.15, 0.07); },
  boss() { [262, 330, 392, 523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.2, null, 0.22, i * 0.11)); this.tone(1319, 0.7, null, 0.22, 0.8); },
  wrong() { this.tone(180, 0.18, 'sawtooth', 0.12, 0, -60); },
  hit() { this.tone(120, 0.12, 'square', 0.15, 0, -50); },
  type() { this.tone(1500, 0.02, 'square', 0.02); },
};
const Haptic = { tap(ms = 20) { if (Store.data.settings.vibrate && navigator.vibrate) try { navigator.vibrate(ms); } catch (e) {} } };

// ---------- 색종이 ----------
const Confetti = {
  canvas: null, ctx: null, parts: [], raf: null,
  init() { this.canvas = $('#confetti'); if (!this.canvas) { this.canvas = document.createElement('canvas'); this.canvas.id = 'confetti'; document.body.appendChild(this.canvas); } this.ctx = this.canvas.getContext('2d'); const rs = () => { this.canvas.width = innerWidth; this.canvas.height = innerHeight; }; addEventListener('resize', rs); rs(); },
  colors() { return ['#3d8bfd', '#ef4444', '#22a55a', '#f5a623', '#a855f7', '#14b8a6']; },
  burst(n = 120, x = null, y = null) { const anim = Store.data.settings.anim; if (anim === 0) return; n = Math.round(n * (anim === 1 ? 0.4 : 1)); const cols = this.colors(); const cx = x ?? innerWidth / 2, cy = y ?? innerHeight * 0.4; for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, sp = 4 + Math.random() * 9; this.parts.push({ x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 4, g: 0.18, w: 6 + Math.random() * 6, h: 4 + Math.random() * 6, r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3, c: cols[i % cols.length], life: 90 + Math.random() * 60 }); } if (!this.raf) this.loop(); },
  rain(n = 200) { const anim = Store.data.settings.anim; if (anim === 0) return; const cols = this.colors(); for (let i = 0; i < n; i++) this.parts.push({ x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * 0.5, vx: (Math.random() - 0.5) * 2, vy: 2 + Math.random() * 3, g: 0.03, w: 6 + Math.random() * 6, h: 4 + Math.random() * 6, r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.2, c: cols[i % cols.length], life: 200 + Math.random() * 100 }); if (!this.raf) this.loop(); },
  loop() { const c = this.ctx; const step = () => { c.clearRect(0, 0, this.canvas.width, this.canvas.height); this.parts = this.parts.filter(p => p.life > 0 && p.y < innerHeight + 30); for (const p of this.parts) { p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.r += p.vr; p.life--; c.save(); c.translate(p.x, p.y); c.rotate(p.r); c.fillStyle = p.c; c.globalAlpha = Math.min(1, p.life / 30); c.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); c.restore(); } if (this.parts.length) this.raf = requestAnimationFrame(step); else { this.raf = null; c.clearRect(0, 0, this.canvas.width, this.canvas.height); } }; this.raf = requestAnimationFrame(step); },
};


// ---------- 마스코트: 부엉이 「부기」 (단계: 알 → 아기 → 안경 → 목도리 → 왕관 → 황금) ----------
function mascotSVG({ stage = 0, mood = 'normal', size = 64 } = {}) {
  const c = stage >= 5 ? '#e6b800' : '#7c5cff', belly = '#efe9ff', dark = '#2a2140';
  if (stage === 0) return `<svg class="mascot" viewBox="0 0 68 68" width="${size}" height="${size}"><ellipse cx="34" cy="38" rx="18" ry="22" fill="#f4f1de" stroke="#cbbf9a" stroke-width="2"/><path d="M22 36 l6 6 l5 -8 l6 7 l5 -6" stroke="#cbbf9a" stroke-width="2" fill="none"/><circle cx="28" cy="30" r="2" fill="${dark}"/><circle cx="40" cy="30" r="2" fill="${dark}"/></svg>`;
  const eyes = mood === 'happy' ? `<path d="M20 30 q6 -7 12 0 M36 30 q6 -7 12 0" stroke="${dark}" stroke-width="3" fill="none" stroke-linecap="round"/>`
    : mood === 'confused' ? `<circle cx="26" cy="30" r="7" fill="#fff"/><circle cx="42" cy="30" r="5" fill="#fff"/><circle cx="27" cy="31" r="3" fill="${dark}"/><circle cx="42" cy="31" r="2.2" fill="${dark}"/>`
    : `<circle cx="26" cy="30" r="7" fill="#fff"/><circle cx="42" cy="30" r="7" fill="#fff"/><circle cx="27" cy="31" r="3.4" fill="${dark}"/><circle cx="43" cy="31" r="3.4" fill="${dark}"/><circle cx="28" cy="30" r="1.1" fill="#fff"/><circle cx="44" cy="30" r="1.1" fill="#fff"/>`;
  let acc = '';
  if (stage >= 2) acc += `<circle cx="26" cy="30" r="8.5" stroke="#333" stroke-width="2" fill="none"/><circle cx="42" cy="30" r="8.5" stroke="#333" stroke-width="2" fill="none"/><path d="M34.5 30 h-1" stroke="#333" stroke-width="2"/>`;
  if (stage >= 3) acc += `<path d="M18 50 q16 7 32 0 l0 5 q-16 7 -32 0 z" fill="#ef4444"/><path d="M42 54 l5 9" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>`;
  if (stage >= 4) acc += `<path d="M24 12 l4 -9 l6 7 l6 -7 l4 9 z" fill="#ffd700" stroke="#b8860b" stroke-width="1.2"/>`;
  return `<svg class="mascot" viewBox="0 0 68 68" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18 l6 8 M52 18 l-6 8" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="34" cy="38" rx="20" ry="22" fill="${c}"/><ellipse cx="34" cy="46" rx="12" ry="12" fill="${belly}"/>
    <path d="M36 50 q2 3 0 6 M32 50 q-2 3 0 6" stroke="${c}" stroke-width="1.3" fill="none" opacity=".5"/>
    ${eyes}<path d="M31 37 l3 4 l3 -4 z" fill="#f5a623"/>
    <path d="M14 40 q-4 8 4 14 M54 40 q4 8 -4 14" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M27 60 v4 M41 60 v4" stroke="#f5a623" stroke-width="3" stroke-linecap="round"/>${acc}</svg>`;
}
function myMascot(opts = {}) { return mascotSVG({ stage: Game.mascotStage(Game.level().level), ...opts }); }
