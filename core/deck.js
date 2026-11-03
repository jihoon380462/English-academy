// core/deck.js — 문장 덱 (Anki 벤치마킹). 문장 1개(노트) = 카드 2장: L(듣고 뜻 떠올리기) · P(뜻 보고 영어로 말하기·쓰기)
//   Deck.collect(lesson) 은 모든 코스 페이지에서 쓴다(레슨 예문 → 「내 문장」). 화면(Views.deck*)은 courses/deck/ 에서만.
const Deck = {
  // ---- 노트 목록: 「내 문장」(eng.mydeck) + 기본 덱(SENTENCE_DECKS, courses/deck/content.js) ----
  notes() {
    const out = []; const on = Store.data.settings.decksOn || {};
    for (const [id, n] of Object.entries(Store.mydeck)) out.push(Object.assign({ id, deck: 'mine' }, n));
    if (typeof SENTENCE_DECKS !== 'undefined') for (const d of SENTENCE_DECKS) { if (on[d.id] === false) continue; if (on[d.id] === undefined && !d.defaultOn) continue; for (const it of d.items) out.push(Object.assign({ deck: d.id }, it)); }
    return out;
  },
  noteMap() { const m = {}; for (const n of this.notes()) m[n.id] = n; return m; },
  kinds() { const k = Store.data.settings.deckCards || 'both'; return k === 'both' ? ['L', 'P'] : [k]; },
  cid(nid, k) { return `s:${nid}:${k}`; },
  // 레슨을 끝내면 그 레슨의 예문을 내 문장에 넣는다. 돌려주는 값: 새로 들어간 수
  collect(l) {
    let n = 0; (l.pages || []).forEach((pg, pi) => (pg.ex || []).forEach((e, ei) => {
      if (e.deck === false || !e.ko) return; const id = `lx.${Store.course}.${l.id}.${pi}.${ei}`; if (Store.mydeck[id]) return;
      Store.mydeck[id] = { en: e.en, ko: e.ko, roles: e.roles || null, src: `${COURSE.name} · ${l.title}`, at: Date.now() }; n++;
    }));
    if (n) Store.save(); return n;
  },
  // ---- 오늘의 대기열 (Anki: 학습 중 → 복습 → 새 카드) ----
  queue(now = Date.now()) {
    const notes = this.notes(); const kinds = this.kinds(); const ids = new Set(notes.flatMap(n => kinds.map(k => this.cid(n.id, k))));
    const learn = [], review = [], fresh = []; const today = Anki.dayKey(now); const seenToday = new Set();
    for (const [id, c] of Object.entries(Store.cards)) if (id.startsWith('s:') && c.last && Anki.dayKey(c.last) === today) seenToday.add(id.split(':')[1]);
    for (const id of ids) { const c = Store.cards[id]; if (!c || c.q === 'new' || c.susp) continue; if ((c.q === 'learn' || c.q === 'relearn') && Anki.isDue(c, now)) learn.push(id); else if (c.q === 'review' && Anki.isDue(c, now)) review.push(id); }
    const buried = new Set(); // 형제 숨기기: 같은 문장의 다른 카드는 오늘 하나만
    const rev = review.filter(id => { const nid = id.split(':')[1]; if (buried.has(nid)) return false; buried.add(nid); return true; });
    let left = Cards.newLeft(now);
    for (const n of notes) { if (left <= 0) break; if (seenToday.has(n.id) || buried.has(n.id)) continue; for (const k of kinds) { const id = this.cid(n.id, k); const c = Store.cards[id]; if (c && (c.q !== 'new' || c.susp)) continue; fresh.push(id); buried.add(n.id); left--; break; } }
    learn.sort((a, b) => Store.cards[a].due - Store.cards[b].due);
    return { learn, review: shuffle(rev), fresh };
  },
  counts(now = Date.now()) { const q = this.queue(now); return { n: q.fresh.length, l: q.learn.length, r: q.review.length }; },
  stats() {
    const notes = this.notes(); const kinds = this.kinds(); let total = 0, fresh = 0, young = 0, mature = 0;
    let susp = 0; for (const n of notes) for (const k of kinds) { total++; const c = Store.cards[this.cid(n.id, k)]; if (c && c.susp) { susp++; continue; } if (!c || c.q === 'new') fresh++; else if (c.q === 'review' && c.ivl >= 21) mature++; else young++; }
    return { notes: notes.length, total, fresh, young, mature, susp };
  },
  forecast(days = 7) { const out = new Array(days).fill(0); const base = Anki.dayStart(); for (const [id, c] of Object.entries(Store.cards)) { if (!id.startsWith('s:') || c.q !== 'review') continue; const d = Math.max(0, Math.floor((c.due - base) / Anki.DAY)); if (d < days) out[d]++; } return out; },
};

