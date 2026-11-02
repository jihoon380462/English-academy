// core/sync.js — 기기 연동(PC ↔ 폰). 파이썬 아카데미 sync.js 차용: GitHub 비공개 gist 에 eng.* 묶음을 올리고 내려받아 합친다.
//   ★ 파이썬 아카데미를 이미 연동해 둔 기기라면(같은 출처라 academy.sync 가 보임) 그 토큰·gist 를 그대로 이어받아 **설정 없이 자동 연동**.
//     같은 gist 안에 파일만 따로(english_academy_save.json) 쓰므로 파이썬 진행 데이터(python_academy_save.json)는 건드리지 않는다.
const Sync = {
  KEY: 'eng.sync', PY_KEY: 'academy.sync', FILE: 'english_academy_save.json', DESC: '아카데미 진행 데이터 (자동 동기화 · 지우지 마세요)', FORMAT: 'english-sync-1',
  API: 'https://api.github.com', TOKEN_URL: 'https://github.com/settings/tokens/new?scopes=gist&description=academy-sync', CODE_PREFIX: 'EA-SYNC:', DEBOUNCE_MS: 3000,
  cfg: null, timer: null, state: 'off', msg: '', busy: false,
  get on() { return !!(this.cfg && this.cfg.token && this.cfg.gistId); },
  load() {
    try { this.cfg = JSON.parse(localStorage.getItem(this.KEY) || 'null'); } catch (e) { this.cfg = null; }
    if (!this.cfg) { try { const py = JSON.parse(localStorage.getItem(this.PY_KEY) || 'null'); if (py && py.token && py.gistId) { this.cfg = { token: py.token, gistId: py.gistId, fromPython: true, lastSyncAt: 0, lastRemote: 0, lastLocal: 0 }; this.saveCfg(); this.adopted = true; } } catch (e) {} }
    this.state = this.on ? 'idle' : 'off';
  },
  saveCfg() { try { if (this.cfg) localStorage.setItem(this.KEY, JSON.stringify(this.cfg)); else localStorage.removeItem(this.KEY); } catch (e) {} },
  async api(method, path, body, token) {
    let res; try { res = await fetch(this.API + path, { method, headers: { Authorization: 'Bearer ' + (token || this.cfg.token), Accept: 'application/vnd.github+json', ...(body ? { 'Content-Type': 'application/json' } : {}) }, body: body ? JSON.stringify(body) : undefined }); } catch (e) { throw new Error('인터넷 연결을 확인해 주세요'); }
    if (res.status === 401) throw new Error('토큰이 틀렸거나 만료됐어요'); if (res.status === 404) throw new Error('저장소(gist)를 찾지 못했어요 — 연동을 해제하고 다시 연결해 주세요'); if (res.status === 403 || res.status === 429) throw new Error('GitHub 요청 한도예요. 잠시 뒤 다시 해 주세요');
    if (!res.ok) throw new Error('GitHub 오류 ' + res.status); return res.status === 204 ? null : res.json();
  },
  // ----- 데이터 묶음 -----
  bundle() { Store.save(); const keys = {}; for (const k of Store.allKeys()) { if (k === this.KEY) continue; try { keys[k] = JSON.parse(localStorage.getItem(k)); } catch (e) {} } return { format: this.FORMAT, updatedAt: (Store.data.updatedAt || 0), device: this.device(), keys }; },
  device() { const u = navigator.userAgent; return /Android/i.test(u) ? '안드로이드' : /iPhone|iPad/i.test(u) ? '아이폰' : /Windows/i.test(u) ? 'Windows PC' : /Mac/i.test(u) ? 'Mac' : '기기'; },
  // 깊은 합치기: 숫자는 큰 쪽(진행), 설정·시각은 최근 쪽, 배열은 합집합
  mv(a, b, newerB, path = []) {
    if (a == null) return b; if (b == null) return a; const key = path[path.length - 1];
    if (Array.isArray(a) && Array.isArray(b)) { const seen = new Set(), out = []; for (const x of [...a, ...b]) { const k = JSON.stringify(x); if (!seen.has(k)) { seen.add(k); out.push(x); } } return key === 'log' ? out.sort((x, y) => x[0] - y[0]).slice(-3000) : out; }
    if (typeof a === 'object' && typeof b === 'object') { const o = {}; for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) o[k] = this.mv(a[k], b[k], newerB, [...path, k]); return o; }
    if (path.includes('settings') || ['last', 'cur', 'dailyGoal', 'updatedAt', 'newDay', 'nick'].includes(key)) return newerB ? b : a;
    if (typeof a === 'number' && typeof b === 'number') return Math.max(a, b);
    if (key === 'status') { const R = { none: 0, try: 1, clear: 2 }; return (R[b] || 0) > (R[a] || 0) ? b : a; }
    if (typeof a === 'boolean') return a || b; return newerB ? b : a;
  },
  merge(L, R) {
    const newerR = (R.updatedAt || 0) >= (L.updatedAt || 0); const out = {};
    for (const k of new Set([...Object.keys(L.keys), ...Object.keys(R.keys || {})])) {
      const a = L.keys[k], b = (R.keys || {})[k];
      if (k === 'eng.cards' && a && b) { const o = Object.assign({}, a); for (const [id, c] of Object.entries(b)) if (!o[id] || (c.last || 0) > (o[id].last || 0)) o[id] = c; out[k] = o; } // 카드: 마지막으로 평가한 기기 것
      else out[k] = this.mv(a, b, newerR);
    }
    return out;
  },
  apply(remote) {
    if (!remote || remote.format !== this.FORMAT) return false; const L = this.bundle(); const before = JSON.stringify(L.keys);
    const merged = this.merge(L, remote); for (const [k, v] of Object.entries(merged)) if (k.startsWith(CONFIG.KEY_PREFIX) && k !== this.KEY && v != null) localStorage.setItem(k, JSON.stringify(v));
    Store.load(Store.course); return JSON.stringify(merged) !== before;
  },
  // ----- 연결 -----
  parse(text) { text = (text || '').trim(); for (const pre of [this.CODE_PREFIX, 'PA-SYNC:']) if (text.startsWith(pre)) { try { const o = JSON.parse(decodeURIComponent(escape(atob(text.slice(pre.length))))); if (o.t && o.g) return { token: o.t, gistId: o.g }; } catch (e) {} throw new Error('연동 코드 형식이 맞지 않아요'); } if (/^(ghp_|gho_)/.test(text) || text.length >= 30) return { token: text }; throw new Error('토큰 또는 연동 코드를 붙여넣어 주세요'); },
  code() { return this.CODE_PREFIX + btoa(unescape(encodeURIComponent(JSON.stringify({ t: this.cfg.token, g: this.cfg.gistId })))); },
  async connect(text) {
    const { token, gistId } = this.parse(text); let id = gistId;
    if (!id) { const list = await this.api('GET', '/gists?per_page=100', null, token); const g = list.find(x => x.files && (x.files[this.FILE] || x.files['python_academy_save.json'])); id = g ? g.id : (await this.api('POST', '/gists', { description: this.DESC, public: false, files: { [this.FILE]: { content: JSON.stringify(this.bundle()) } } }, token)).id; }
    else await this.api('GET', '/gists/' + id, null, token);
    this.cfg = { token, gistId: id, lastSyncAt: 0, lastRemote: 0, lastLocal: 0 }; this.saveCfg(); await this.syncNow(true);
  },
  disconnect() { clearTimeout(this.timer); this.cfg = { off: true }; this.saveCfg(); this.state = 'off'; }, // off 표시를 남겨 파이썬 연동을 다시 자동으로 이어받지 않게
  async syncNow(force = false) {
    if (!this.on || this.busy) return false; this.busy = true; clearTimeout(this.timer); this.state = 'syncing'; let changed = false;
    try {
      const g = await this.api('GET', '/gists/' + this.cfg.gistId); const f = g.files && g.files[this.FILE];
      if (f) { let t = f.content; if (f.truncated) t = await (await fetch(f.raw_url)).text(); let r = null; try { r = JSON.parse(t); } catch (e) {} if (r && (r.updatedAt || 0) !== this.cfg.lastRemote) { changed = this.apply(r); this.cfg.lastRemote = r.updatedAt || 0; } }
      if (force || changed || !f || (Store.data.updatedAt || 0) > (this.cfg.lastLocal || 0)) { const b = this.bundle(); await this.api('PATCH', '/gists/' + this.cfg.gistId, { files: { [this.FILE]: { content: JSON.stringify(b) } } }); this.cfg.lastRemote = this.cfg.lastLocal = b.updatedAt || 0; }
      this.cfg.lastSyncAt = Date.now(); this.saveCfg(); this.state = 'ok'; this.msg = '';
      if (changed) { if (typeof Hub !== 'undefined') { UI.toast('☁ 다른 기기의 진행을 가져왔어요'); Hub.render(); } else if (UI.cur && !['play', 'study', 'p', 'review'].includes(UI.cur)) { UI.toast('☁ 다른 기기의 진행을 가져왔어요'); UI.route(); } else UI.topbar(); }
    } catch (e) { this.state = 'err'; this.msg = e.message; console.warn('sync', e); } finally { this.busy = false; }
    return changed;
  },
  schedule() { if (!this.on) return; clearTimeout(this.timer); this.state = 'dirty'; this.timer = setTimeout(() => this.syncNow(), this.DEBOUNCE_MS); },
  flush() { if (this.on && this.state === 'dirty') this.syncNow(); },
  ago() { const t = this.cfg && this.cfg.lastSyncAt; if (!t) return '아직 안 함'; const s = (Date.now() - t) / 1000; return s < 60 ? '방금' : s < 3600 ? Math.round(s / 60) + '분 전' : s < 86400 ? Math.round(s / 3600) + '시간 전' : Math.round(s / 86400) + '일 전'; },
  init() {
    this.load(); if (!this.on) return; this.syncNow().then(() => { if (this.adopted) UI.toast('☁ 파이썬 아카데미의 기기 연동을 이어받았어요 — 영어 진행도 자동으로 맞춰져요', 4500); });
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') this.syncNow(); else this.flush(); });
    addEventListener('pagehide', () => this.flush()); addEventListener('online', () => this.syncNow());
  },
  card() {
    if (this.on) return `<div class="card"><div class="card-h">📱 기기 연동 (PC ↔ 폰)</div><div class="small">${{ syncing: '🔄 동기화 중…', err: '⚠ ' + esc(this.msg), dirty: '✏ 곧 올려요' }[this.state] || `✅ 연동됨 · 마지막 동기화 ${this.ago()}`}</div>
      <p class="small muted">진행·XP·뱃지·Anki 카드·내 문장이 자동으로 맞춰져요.${this.cfg.fromPython ? ' (파이썬 아카데미 연동을 그대로 쓰고 있어요 — 같은 gist 의 다른 파일)' : ''}</p>
      <div class="row-btns"><button class="btn sm primary" id="syNow">🔄 지금 동기화</button><button class="btn sm" id="syCode">📋 연동 코드 복사</button><button class="btn sm" id="syOff">연동 해제</button></div>
      <p class="small muted">다른 기기: 이 사이트 → ⚙ 설정 → 📱 기기 연동 칸에 연동 코드 붙여넣기 → 연동하기. (그 기기에서 파이썬 아카데미를 이미 연동했다면 아무것도 안 해도 돼요)</p></div>`;
    return `<div class="card"><div class="card-h">📱 기기 연동 (PC ↔ 폰)</div>
      <p class="small muted">PC에서 하던 걸 폰에서 이어서 할 수 있어요. 내 GitHub 계정의 <b>비공개 gist</b>에 저장돼요.<br><b>파이썬 아카데미를 이미 연동한 기기라면 자동으로 연결돼요.</b> 아니라면: <a href="${this.TOKEN_URL}" target="_blank" rel="noopener">이 링크</a>로 GitHub 토큰 만들기(Expiration → No expiration, 맨 아래 Generate token) → 나온 <code>ghp_…</code> 붙여넣기. 다른 기기는 연동 코드(EA-SYNC:… 또는 파이썬의 PA-SYNC:…)를 붙여넣으면 돼요.</p>
      <div class="row-btns"><input class="search" type="password" id="syIn" placeholder="ghp_… 토큰 또는 연동 코드" style="flex:1;min-width:200px;margin:0"><button class="btn sm primary" id="syGo">연동하기</button></div><div class="small" id="sySt"></div></div>`;
  },
  bind(rerender) {
    const go = $('#syGo'); if (go) go.onclick = async () => { go.disabled = true; $('#sySt').textContent = '🔄 연결 중…'; try { await this.connect($('#syIn').value); UI.toast('☁ 연동 완료!'); rerender(); } catch (e) { $('#sySt').textContent = '❌ ' + e.message; go.disabled = false; this.cfg = { off: true }; this.saveCfg(); } };
    const now = $('#syNow'); if (now) now.onclick = async () => { await this.syncNow(true); rerender(); };
    const cd = $('#syCode'); if (cd) cd.onclick = async () => { const c = this.code(); try { await navigator.clipboard.writeText(c); UI.toast('연동 코드를 복사했어요. 폰의 ⚙ 설정 → 기기 연동 칸에 붙여넣으세요'); } catch (e) { prompt('이 코드를 복사하세요', c); } };
    const off = $('#syOff'); if (off) off.onclick = () => { if (confirm('이 기기의 연동을 해제할까요? (진행 데이터와 gist 는 그대로예요)')) { this.disconnect(); rerender(); } };
  },
};
