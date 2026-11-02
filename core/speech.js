// core/speech.js — 듣기(브라우저 음성 합성)·말하기(음성 인식)·녹음 폴백 (SPEC 5절). 키·계정 없음.
const Speech = {
  voices: [], ready: false,
  get synthOk() { return 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined'; },
  get recogOk() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
  get recordOk() { return !!(navigator.mediaDevices && window.MediaRecorder); },
  init() {
    if (!this.synthOk) return; const load = () => { this.voices = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang)); this.ready = true; };
    load(); speechSynthesis.onvoiceschanged = load;
  },
  // 목소리 고르기. 설정 voice: '' 자동(미국) · '@random' 랜덤(모든 영어) · '@random-us' 랜덤(미국만) · 그 밖엔 목소리 이름
  //   랜덤은 문장마다 바꾸되, 같은 문장을 다시 들으면(🔊 다시·🐢) 같은 목소리 — 받아쓰기 중에 목소리가 바뀌면 헷갈려서
  pool(usOnly) { const ok = this.voices.filter(v => !/espeak|mbrola/i.test(v.name)); const p = usOnly ? ok.filter(v => /en[-_]US/i.test(v.lang)) : ok; return p.length ? p : this.voices; },
  _memo: new Map(),
  voice(text = '') {
    const want = Store.data.settings.voice;
    if (want === '@random' || want === '@random-us') {
      const key = want + '|' + Content.plain(text).toLowerCase(); const hit = this._memo.get(key); if (hit && this.voices.includes(hit)) return hit;
      const pool = this.pool(want === '@random-us'); if (!pool.length) return null; const prev = this._last; let v = pick(pool); if (pool.length > 1 && v === prev) v = pick(pool.filter(x => x !== prev));
      this._memo.set(key, v); if (this._memo.size > 500) this._memo.delete(this._memo.keys().next().value); this._last = v; return v;
    }
    let v = want && this.voices.find(x => x.name === want);
    if (!v) v = this.voices.find(x => /en[-_]US/i.test(x.lang) && /google|natural|samantha|aria|jenny|zira/i.test(x.name)) || this.voices.find(x => /en[-_]US/i.test(x.lang)) || this.voices[0];
    return v || null;
  },
  // 문장 읽기. 돌려주는 Promise 는 다 읽거나 멈추면 끝남
  say(text, opt = {}) {
    text = Content.plain(text); if (!text) return Promise.resolve();
    if (!this.synthOk) { UI.toast('이 기기·브라우저는 음성 읽기를 지원하지 않아요'); return Promise.resolve(); }
    return new Promise(res => {
      this._seq = (this._seq || 0) + 1; try { speechSynthesis.cancel(); } catch (e) {}
      const u = new SpeechSynthesisUtterance(text); const v = opt.voice || this.voice(text); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = CONFIG.SPEECH.lang;
      u.rate = opt.rate || Store.data.settings.rate || 1; u.onend = u.onerror = () => res();
      if (opt.btn) { opt.btn.classList.add('speaking'); const done = () => opt.btn.classList.remove('speaking'); u.addEventListener('end', done); u.addEventListener('error', done); }
      speechSynthesis.speak(u);
      setTimeout(res, 2000 + text.length * 120); // 일부 브라우저가 onend 를 안 부름
    });
  },
  stop() { this._seq = (this._seq || 0) + 1; try { speechSynthesis.cancel(); } catch (e) {} },
  // 끊어서 천천히: '|' 덩어리가 있으면 덩어리마다, 없으면 2~3낱말씩 → 아주 느린 속도로 하나씩 읽고 사이에 쉼. 다시 누르면 멈춤
  slowParts(raw) {
    raw = String(raw ?? '').trim(); if (raw.includes('|')) return raw.split('|').map(s => s.trim()).filter(Boolean);
    const out = []; for (const clause of raw.split(/(?<=[,.?!;:])\s+/)) { const w = clause.split(/\s+/).filter(Boolean); if (w.length <= 3) { out.push(...w); continue; } for (let i = 0; i < w.length;) { const n = w.length - i === 4 ? 2 : Math.min(3, w.length - i); out.push(w.slice(i, i + n).join(' ')); i += n; } } return out; // 쉼표·마침표 경계는 넘지 않음
  },
  async slow(raw, { btn } = {}) {
    if (btn && btn.classList.contains('speaking')) { this.stop(); btn.classList.remove('speaking'); return; }
    this.stop(); const my = ++this._seq; const parts = this.slowParts(raw); if (btn) btn.classList.add('speaking');
    const rate = Store.data.settings.slowRate || 0.55; const voice = this.voice(raw); // 끊어 읽어도 문장 전체와 같은 목소리
    for (let i = 0; i < parts.length; i++) { if (my !== this._seq) break; if (btn) btn.dataset.part = `${i + 1}/${parts.length}`; await this._one(parts[i], rate, voice); if (my !== this._seq) break; await sleep(380); }
    if (my === this._seq) await sleep(250);
    if (btn) { btn.classList.remove('speaking'); delete btn.dataset.part; }
  },
  _one(text, rate, v) { return new Promise(res => { if (!this.synthOk) return res(); const u = new SpeechSynthesisUtterance(Content.plain(text)); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = CONFIG.SPEECH.lang; u.rate = rate; let done = false; const fin = () => { if (!done) { done = true; res(); } }; u.onend = u.onerror = fin; speechSynthesis.speak(u); setTimeout(fin, 1500 + text.length * 220); }); },
  // 음성 인식 한 번. 돌려주는 값 {text, alts[]} — 실패 시 reject(Error(사람이 읽을 이유))
  listen({ onStart } = {}) {
    return new Promise((res, rej) => {
      const R = window.SpeechRecognition || window.webkitSpeechRecognition; if (!R) return rej(new Error('이 브라우저는 음성 인식을 지원하지 않아요'));
      const r = new R(); r.lang = CONFIG.SPEECH.lang; r.interimResults = false; r.maxAlternatives = 5; let done = false;
      r.onstart = () => onStart && onStart();
      r.onresult = (e) => { done = true; const alts = Array.from(e.results[0] || []).map(a => a.transcript); res({ text: alts[0] || '', alts }); };
      r.onerror = (e) => { done = true; rej(new Error({ 'not-allowed': '마이크 권한이 꺼져 있어요 (주소창 왼쪽 자물쇠 → 마이크 → 허용)', 'no-speech': '소리가 들리지 않았어요. 다시 말해 볼까요?', network: '음성 인식 서버에 연결하지 못했어요 (인터넷 필요)', 'audio-capture': '마이크를 찾지 못했어요' }[e.error] || ('음성 인식 오류: ' + e.error))); };
      r.onend = () => { if (!done) rej(new Error('소리가 들리지 않았어요. 다시 말해 볼까요?')); };
      try { r.start(); } catch (e) { rej(e); }
      this._rec = r;
    });
  },
  stopListen() { try { this._rec && this._rec.stop(); } catch (e) {} },
  // 녹음 폴백: 최대 sec 초 녹음 → Blob URL
  async record(sec = 6, onStart) {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); const mr = new MediaRecorder(stream); const chunks = [];
    mr.ondataavailable = e => chunks.push(e.data);
    const stopped = new Promise(r => mr.onstop = r); mr.start(); onStart && onStart(mr);
    setTimeout(() => { if (mr.state !== 'inactive') mr.stop(); }, sec * 1000); await stopped; stream.getTracks().forEach(t => t.stop());
    return URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || 'audio/webm' }));
  },
};
