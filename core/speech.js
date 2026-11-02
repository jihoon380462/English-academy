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
  voice() {
    const want = Store.data.settings.voice; let v = want && this.voices.find(x => x.name === want);
    if (!v) v = this.voices.find(x => /en[-_]US/i.test(x.lang) && /google|natural|samantha|aria|jenny|zira/i.test(x.name)) || this.voices.find(x => /en[-_]US/i.test(x.lang)) || this.voices[0];
    return v || null;
  },
  // 문장 읽기. 돌려주는 Promise 는 다 읽거나 멈추면 끝남
  say(text, opt = {}) {
    text = Content.plain(text); if (!text) return Promise.resolve();
    if (!this.synthOk) { UI.toast('이 기기·브라우저는 음성 읽기를 지원하지 않아요'); return Promise.resolve(); }
    return new Promise(res => {
      try { speechSynthesis.cancel(); } catch (e) {}
      const u = new SpeechSynthesisUtterance(text); const v = this.voice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = CONFIG.SPEECH.lang;
      u.rate = opt.rate || Store.data.settings.rate || 1; u.onend = u.onerror = () => res();
      if (opt.btn) { opt.btn.classList.add('speaking'); const done = () => opt.btn.classList.remove('speaking'); u.addEventListener('end', done); u.addEventListener('error', done); }
      speechSynthesis.speak(u);
      setTimeout(res, 2000 + text.length * 120); // 일부 브라우저가 onend 를 안 부름
    });
  },
  stop() { try { speechSynthesis.cancel(); } catch (e) {} },
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
