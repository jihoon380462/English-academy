// core/cards.js — 문제 유형별 화면(위젯). 파이썬 ui-editors.js 자리 (SPEC 4-1절)
// W[type].mount(p, el, api) → { check(): {ok, typo?, best?, diff?, msg?} | null(아직 답 없음), reveal(), auto?: bool }
//   api.submit() : 위젯이 스스로 제출할 때(객관식 클릭·짝 맞추기 완료). 결과 표시는 views.js 의 Play 가 한다.
const TYPE_LABEL = { free: '자유 쓰기', choice: '고르기', listen: '듣고 고르기', match: '짝 맞추기', build: '카드 조립', order: '카드 배열', fill: '빈칸 채우기', fix: '틀린 곳 고치기', type: '직접 쓰기', dictation: '받아쓰기', speak: '말하기' };
const W = {};

// ---------- 고르기 / 듣고 고르기 ----------
W.choice = {
  mount(p, el, api) {
    let picked = null; const opts = p.opts.map((o, i) => ({ o, i })); const order = p.keepOrder ? opts : shuffle(opts);
    const isEn = (s) => /^[\x00-\x7F’‘“”]+$/.test(s);
    el.innerHTML = `${p.type === 'listen' ? `<div class="listen-big">${UI.sayBtn(p.say, '듣기', 'big')} ${UI.slowBtn(p.say)}</div>` : (p.q ? `<div class="q-sent">${UI.chunks(p.q, p.qroles, { say: isEn(Content.plain(p.q)) })}</div>` : '')}
      <div class="opts">${order.map(({ o, i }) => `<button class="opt" data-i="${i}"><span class="opt-t">${esc(o)}</span>${p.sayOpts ? UI.sayBtn(o, '', 'mini') : ''}</button>`).join('')}</div>`;
    if (p.type === 'listen' && Store.data.settings.autoplay) setTimeout(() => Speech.say(p.say), 350);
    el.querySelectorAll('.opt').forEach(b => b.onclick = (e) => { if (e.target.closest('.say')) return; if (el.classList.contains('locked')) return; picked = +b.dataset.i; el.querySelectorAll('.opt').forEach(x => x.classList.toggle('sel', x === b)); api.submit(); });
    return {
      check() { if (picked == null) return null; const ok = picked === p.ans; el.querySelectorAll('.opt').forEach(x => { const i = +x.dataset.i; x.classList.toggle('good', ok && i === p.ans); x.classList.toggle('bad', !ok && i === picked); }); return { ok, best: p.type === 'listen' ? p.say : null, msg: p.why }; },
      reveal() { picked = p.ans; el.querySelectorAll('.opt').forEach(x => x.classList.toggle('good', +x.dataset.i === p.ans)); },
      reset() { picked = null; el.querySelectorAll('.opt').forEach(x => x.classList.remove('sel', 'bad')); },
    };
  },
};
W.listen = W.choice;

// ---------- 짝 맞추기 ----------
W.match = {
  mount(p, el, api) {
    const L = shuffle(p.pairs.map((x, i) => ({ t: x[0], i }))), R = shuffle(p.pairs.map((x, i) => ({ t: x[1], i })));
    let sel = null, done = 0, miss = 0;
    el.innerHTML = `<div class="match"><div class="mcol">${L.map(x => `<button class="mitem en" data-i="${x.i}" data-side="L">${esc(x.t)}</button>`).join('')}</div><div class="mcol">${R.map(x => `<button class="mitem" data-i="${x.i}" data-side="R">${esc(x.t)}</button>`).join('')}</div></div>`;
    el.querySelectorAll('.mitem').forEach(b => b.onclick = () => {
      if (b.classList.contains('done')) return; if (b.dataset.side === 'L') Speech.say(b.textContent, { rate: 1 });
      if (!sel || sel.dataset.side === b.dataset.side) { el.querySelectorAll('.mitem.sel').forEach(x => x.classList.remove('sel')); sel = b; b.classList.add('sel'); return; }
      if (sel.dataset.i === b.dataset.i) { [sel, b].forEach(x => { x.classList.remove('sel'); x.classList.add('done'); }); Sfx.pass(); done++; sel = null; if (done === p.pairs.length) api.submit(); }
      else { miss++; Sfx.wrong(); Haptic.tap(40); [sel, b].forEach(x => { x.classList.add('shake'); setTimeout(() => x.classList.remove('shake', 'sel'), 450); }); sel = null; }
    });
    return { check() { if (done < p.pairs.length) return null; return { ok: true, mistakes: miss, msg: p.why }; }, reveal() { el.querySelectorAll('.mitem').forEach(x => x.classList.add('done')); done = p.pairs.length; } };
  },
};

// ---------- 카드 조립(build: 성분 색 슬롯) / 카드 배열(order: 섞인 카드 + 함정) ----------
function cardBoard(p, el, api, colored) {
  const roles = p.roles ? p.roles.split(/\s+/) : []; const cards = p.cards.map((t, i) => ({ t, r: roles[i] || null, id: 'c' + i }));
  const pool = shuffle(cards.concat((p.distractors || []).map((t, i) => ({ t, r: null, id: 'd' + i })))); let line = colored ? new Array(cards.length).fill(null) : [];
  const chip = (c, where) => `<button class="card-w ${colored && c.r ? 'r-' + c.r : ''}" data-id="${c.id}" data-where="${where}">${esc(c.t)}</button>`;
  const draw = () => {
    const used = new Set(line.filter(Boolean).map(c => c.id));
    const lineHtml = colored ? line.map((c, i) => c ? chip(c, 'line') : `<span class="slot r-${roles[i] || 'x'}" title="${roles[i] ? CONFIG.ROLES[roles[i]].name : ''}">${roles[i] ? CONFIG.ROLES[roles[i]].name : '?'}</span>`).join('') : (line.length ? line.map(c => chip(c, 'line')).join('') : '<span class="muted small">아래 카드를 눌러 순서대로 놓으세요</span>');
    el.innerHTML = `<div class="line ${colored ? 'slots' : ''}">${lineHtml}</div><div class="pool">${pool.map(c => used.has(c.id) ? `<span class="card-w ghost">${esc(c.t)}</span>` : chip(c, 'pool')).join('')}</div>${colored ? UI.roleLegend(p.roles) : ''}<div class="board-tools"><button class="btn xs" data-act="clear">↺ 다시 놓기</button></div>`;
    el.querySelectorAll('.card-w[data-id]').forEach(b => b.onclick = () => {
      if (el.classList.contains('locked')) return; Sfx.click(); const c = cards.concat(pool).find(x => x.id === b.dataset.id);
      if (b.dataset.where === 'pool') { Speech.say(c.t, { rate: 1 }); if (colored) { const i = line.findIndex(x => !x); if (i >= 0) line[i] = c; } else line.push(c); }
      else { if (colored) line[line.indexOf(c)] = null; else line.splice(line.indexOf(c), 1); }
      draw();
    });
    el.querySelector('[data-act=clear]').onclick = () => { line = colored ? new Array(cards.length).fill(null) : []; draw(); };
  };
  draw();
  return {
    check() { if (!line.filter(Boolean).length) return null; if (colored && line.some(x => !x)) return { ok: false, msg: '빈 칸이 남았어요. 카드를 모두 놓아 주세요.', soft: true }; const s = line.filter(Boolean).map(c => c.t).join(' '); const r = Grader.text(s, Content.answers(p)); r.input = s; return r; },
    reveal() { line = colored ? cards.slice() : cards.slice(); draw(); },
  };
}
W.build = { mount: (p, el, api) => cardBoard(p, el, api, true) };
W.order = { mount: (p, el, api) => cardBoard(p, el, api, false) };

// ---------- 빈칸 ----------
W.fill = {
  mount(p, el, api) {
    let k = 0; const parts = p.text.split('___');
    el.innerHTML = `<div class="fill-sent">${parts.map((s, i) => esc(s) + (i < parts.length - 1 ? (p.blanks[i].opt ? `<select class="blank" data-k="${i}"><option value="">고르기</option>${p.blanks[i].opt.map(o => `<option>${esc(o)}</option>`).join('')}</select>` : `<input class="blank" data-k="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" size="${Math.max(4, p.blanks[i].a[0].length + 1)}">`) : '')).join('')}</div>`;
    const inputs = el.querySelectorAll('.blank'); inputs.forEach(x => x.addEventListener('keydown', e => { if (e.key === 'Enter') api.submit(); }));
    if (inputs[0] && inputs[0].tagName === 'INPUT') setTimeout(() => inputs[0].focus(), 50);
    return {
      check() { const vals = Array.from(inputs).map(x => x.value.trim()); if (vals.every(v => !v)) return null; let ok = true, typo = null; inputs.forEach((x, i) => { const r = Grader.word(vals[i], p.blanks[i].a, { exact: !!p.blanks[i].opt || (p.tags || []).includes('철자') }); x.classList.toggle('good', r.ok); x.classList.toggle('bad', !r.ok); if (!r.ok) ok = false; if (r.typo) typo = r.typo; }); return { ok, typo, best: Content.answerText(p), msg: p.why }; },
      reveal() { inputs.forEach((x, i) => { x.value = p.blanks[i].a[0]; x.classList.add('good'); }); },
    };
  },
};

// ---------- 고치기 / 직접 쓰기 / 받아쓰기 (문장 입력) ----------
function sentenceInput(p, el, api, { pre = '', top = '' } = {}) {
  el.innerHTML = `${top}<textarea class="sent-in" rows="2" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="영어로 입력하세요">${esc(pre)}</textarea><div class="muted small">Enter = 확인 · 대소문자·마침표는 신경 쓰지 않아도 돼요</div>`;
  const ta = el.querySelector('textarea'); ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); api.submit(); } }); setTimeout(() => { ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); }, 50);
  return {
    check() { const v = ta.value.trim(); if (!v) return null; if (p.type === 'fix' && Grader.same(Grader.tokens(v), Grader.tokens(p.wrong))) return { ok: false, msg: '아직 그대로예요. 틀린 낱말을 찾아 고쳐 보세요.', soft: true }; const r = Grader.text(v, Content.answers(p), { exact: (p.tags || []).includes('철자'), avoid: p.type === 'fix' ? p.wrong : null }); r.input = v; if (!r.ok) r.explain = Grader.explain(v); return r; },
    reveal() { ta.value = Content.answerText(p); },
  };
}
W.fix = { mount: (p, el, api) => sentenceInput(p, el, api, { pre: p.wrong, top: `<div class="q-sent wrong-sent">❌ ${UI.chunks(p.wrong, null, { say: false })}</div>` }) };
W.type = { mount: (p, el, api) => sentenceInput(p, el, api, { top: p.cards ? `<div class="muted small">쓸 낱말: ${p.cards.map(c => `<code>${esc(c)}</code>`).join(' ')}</div>` : '' }) };
W.dictation = {
  mount(p, el, api) { const r = sentenceInput(p, el, api, { top: `<div class="listen-big">${UI.sayBtn(p.say, '듣기', 'big')} ${UI.slowBtn(p.say)}</div>` }); if (Store.data.settings.autoplay) setTimeout(() => Speech.say(p.say), 350); return r; },
};

// ---------- 말하기 ----------
W.speak = {
  mount(p, el, api) {
    let result = null;
    const canRec = Speech.recogOk;
    el.innerHTML = `<div class="q-sent">${UI.chunks(p.say, p.roles)} ${UI.slowBtn(p.say)}</div>
      <div class="mic-row"><button class="btn primary big mic">🎤 ${canRec ? '눌러서 말하기' : '녹음하기 (6초)'}</button></div>
      <div class="heard"></div>${canRec ? '' : '<div class="muted small">이 브라우저는 음성 인식이 안 돼서, 녹음한 내 목소리와 원문을 번갈아 들으며 스스로 채점해요(별 최대 2개).</div>'}`;
    const mic = el.querySelector('.mic'), heard = el.querySelector('.heard');
    mic.onclick = async () => {
      if (mic.disabled) return; mic.disabled = true; Speech.stop();
      try {
        if (canRec) {
          mic.textContent = '🎙 듣는 중… 말하세요'; mic.classList.add('rec');
          const r = await Speech.listen(); let best = null;
          for (const t of r.alts) { const s = Grader.speak(t, p.say); if (!best || s.rate > best.s.rate) best = { t, s }; }
          result = { heard: best.t, rate: best.s.rate };
          heard.innerHTML = `<div class="small muted">들린 문장</div><div class="diffline">${best.s.diff.got.map(w => `<span class="${w.ok ? 'w-ok' : 'w-bad'}">${esc(w.w)}</span>`).join(' ') || '(없음)'}</div>${best.s.diff.missing.length ? `<div class="small">빠진 말: ${best.s.diff.missing.map(w => `<span class="w-miss">${esc(w)}</span>`).join(' ')}</div>` : ''}<div class="meter"><div style="width:${Math.round(best.s.rate * 100)}%"></div></div><div class="small">${Math.round(best.s.rate * 100)}점</div>`;
          api.submit();
        } else {
          mic.textContent = '⏺ 녹음 중…'; mic.classList.add('rec');
          const url = await Speech.record(6);
          heard.innerHTML = `<div class="rec-play"><audio src="${url}" controls></audio> ${UI.sayBtn(p.say, '원문')}</div><div class="self"><button class="btn sm good-btn" data-v="1">비슷하게 말했어요</button> <button class="btn sm" data-v="0">다시 해 볼게요</button></div>`;
          heard.querySelectorAll('.self .btn').forEach(b => b.onclick = () => { if (b.dataset.v === '1') { result = { self: true, rate: 1 }; api.submit(); } else heard.innerHTML = ''; });
        }
      } catch (e) { heard.innerHTML = `<div class="warn">${esc(e.message)}</div>`; }
      mic.disabled = false; mic.classList.remove('rec'); mic.textContent = canRec ? '🎤 다시 말하기' : '🎤 다시 녹음하기';
    };
    return {
      check() { if (!result) return null; const ok = result.rate >= CONFIG.SPEECH.speakPass; return { ok, self: result.self, best: p.say, msg: ok ? null : `목표 ${Math.round(CONFIG.SPEECH.speakPass * 100)}점 — 🐢 천천히 듣고 다시 해 봐요.`, speak: true }; },
      reveal() { Speech.say(p.say, { rate: 0.8 }); },
      skippable: true,
    };
  },
};

// ---------- 자유 쓰기 (free): 내 문장으로 쓰기 — 조건(낱말 수·꼭 넣을 표현)만 맞으면 통과, 모범 문장과 흔한 실수 안내 ----------
W.free = {
  mount(p, el, api) {
    const need = p.need || []; const min = p.minWords || 4;
    el.innerHTML = `<div class="free-need small">${need.length ? `꼭 넣을 표현: ${need.map(g => `<span class="chip">${(Array.isArray(g) ? g : [g]).map(esc).join(' / ')}</span>`).join(' ')}` : ''} <span class="muted">· ${min}낱말 이상</span></div>
      <textarea class="sent-in" rows="3" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="내 이야기로 자유롭게 써 보세요 (영어)"></textarea><div class="muted small">정답이 하나가 아니에요. 조건만 맞으면 통과하고, 모범 문장을 보여 드려요.</div>`;
    const ta = el.querySelector('textarea'); ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); api.submit(); } }); setTimeout(() => ta.focus(), 50);
    return {
      check() {
        const v = ta.value.trim(); if (!v) return null; const r = Grader.free(v, need, min); const model = Content.answers(p);
        if (r.ok) return { ok: true, best: model[0], msg: (r.explain.length ? `💡 한 번 더 확인: ${esc(r.explain[0])}<br>` : '') + `모범 문장 예시예요. 내 문장과 비교해 보세요.` };
        return { ok: false, soft: false, input: v, msg: r.short ? `조금 더 길게 써 봐요 (${min}낱말 이상, 지금 ${r.words}낱말).` : `꼭 넣을 표현이 빠졌어요: ${r.missing.map(g => (Array.isArray(g) ? g : [g]).join(' / ')).join(', ')}`, speak: true, explain: r.explain };
      },
      reveal() { ta.value = Content.answerText(p); },
    };
  },
};
