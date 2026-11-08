// core/combo-patterns.js — 🧩 조합 말하기 문법 패턴 추가분: 🔁 핵심 패턴 회화(K1~K20) · 🧩 문법 더 깊게(G1~G23). 엔진·기본 17개 = core/combo.js
// sets: 어느 탭에 보이나('basic' 기본 17개 · 'pattern' · 'grammar'). grp: 탭별 묶음 이름. 열 role: 색(S 파랑·V 빨강·O 초록·M 회색). hide: 표에 안 보이는 고정 낱말(식 에는 보임). fx: 고정 낱말이 문장에서 취하는 모양들
(function () {
  const cS = { k: 'S', label: '주어', from: 'subj' }, cSq = { k: 'S', label: '주어', from: 'subj', noI: true }, cV = { k: 'V', label: '동사', from: 'vt' }, cO = { k: 'O', label: '목적어', from: 'obj' };
  const cVing = { k: 'V', label: '동사', from: 'vt', noStative: true }, cVpp = { k: 'V', label: '동사', from: 'vt', pp: true };
  const nBe = (S, be, past) => `be → <b>${be}</b> (${past ? '과거 · ' : ''}주어 ${esc2(S.w)} = ${P_KO[S.p]})`;
  const nS = (S, V, v) => (v !== V.v ? `${V.v} → <b>${v}</b> (주어가 3인칭 단수)` : `${V.v} 그대로 (주어 ${esc2(S.w)} = ${P_KO[S.p]})`);
  const nBase = (V, pre) => `${pre || '동사는'} 원형 <b>${V.v}</b>`;
  const nIng = (V, ing) => `${V.v} → <b>${ing}</b> (-ing)`;
  const nPP = (V, pp) => `${V.v} → <b>${pp}</b> (과거분사 p.p.${V.pp ? ' · 불규칙' : ''})`;
  const fx = (k, label, w, role) => ({ k, label, fixed: [w], role: role || 'V' });
  const P = [];

  // ── 원하다·필요하다·부탁하다 (K1~K5) ──
  const G1 = '원하다·필요하다·부탁하다';
  P.push(
    { id: 'want-to', sets: ['pattern'], group: G1, title: '주어 + want to + 동사 + 목적어', ex: 'She wants to eat pizza.',
      cols: [cS, { ...fx('WANT', '하고 싶다', 'want to'), fx: ['want to', 'wants to'] }, cV, cO],
      rule: '<p><b>want to + 동사 원형</b> = 「~하고 싶어요」. 하고 싶은 일을 말할 때 가장 많이 써요.</p><p>주어가 <b>3인칭 단수</b>면 <b>wants to</b>. <b>to 뒤 동사는 늘 원형</b>이에요(-s 없음).</p><p>✗ She wants to <s>eats</s> pizza → ✓ She wants to <b>eat</b> pizza</p>',
      make: ({ S, V, O }) => { const w = S.p === 's3' ? 'wants' : 'want'; return { parts: [S.w, w, 'to', V.v, O.w], notes: [`want → <b>${w}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, nBase(V, 'to 뒤 동사는')] }; } },
    { id: 'need-to', sets: ['pattern'], group: G1, title: '주어 + need to + 동사 + 목적어', ex: 'I need to finish my homework.',
      cols: [cS, { ...fx('NEED', '해야 한다', 'need to'), fx: ['need to', 'needs to'] }, cV, cO],
      rule: '<p><b>need to + 동사 원형</b> = 「~해야 해요」(꼭 필요해서). have to 와 거의 같게 써요.</p><p>3인칭 단수 주어면 <b>needs to</b>, to 뒤 동사는 원형.</p>',
      make: ({ S, V, O }) => { const w = S.p === 's3' ? 'needs' : 'need'; return { parts: [S.w, w, 'to', V.v, O.w], notes: [`need → <b>${w}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, nBase(V, 'to 뒤 동사는')] }; } },
    { id: 'want-q', sets: ['pattern'], group: G1, title: 'Do + 주어 + want to + 동사 + 목적어?', ex: 'Does she want to eat pizza?',
      cols: [fx('DO', '질문', 'Do'), cSq, fx('WANT', '하고 싶다', 'want to'), cV, cO],
      rule: '<p><b>Do + 주어 + want to + 동사 원형 …?</b> = 「~하고 싶어요?」. 상대의 마음을 물어요.</p><p>주어가 3인칭 단수면 <b>Does</b>. 질문에서는 want 에 -s 를 안 붙여요(does 가 가져가요).</p><p>✗ Does she <s>wants</s> to … → ✓ Does she <b>want</b> to …</p>',
      make: ({ S, V, O }) => { const d = Inflect.do(S); return { parts: [d, S.w, 'want', 'to', V.v, O.w], q: true, notes: [`Do → <b>${cap(d)}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, nBase(V, 'to 뒤 동사는')] }; } },
    { id: 'wd-like', sets: ['pattern'], group: G1, title: "I'd like + 명사", ex: "I'd like a cup of coffee.",
      cols: [fx('LIKE', '정중하게', "I'd like"), { k: 'O', label: '주문할 것', from: 'obj', cats: ['food', 'drink', 'thing'] }],
      rule: "<p><b>I'd like + 명사</b> = 「~로 주세요 · ~을 원해요」. want 보다 <b>정중해요</b>(식당·가게에서).</p><p>I'd = I would. I want coffee 보다 부드러운 말투예요.</p>",
      make: ({ O }) => ({ parts: ["I'd", 'like', O.w], notes: ["I'd like = I would like (정중한 want)"] }) },
    { id: 'wd-like-to', sets: ['pattern'], group: G1, title: "I'd like to + 동사 + 목적어", ex: "I'd like to order a pizza.",
      cols: [fx('LIKE', '정중하게', "I'd like to"), cV, cO],
      rule: "<p><b>I'd like to + 동사 원형</b> = 「~하고 싶습니다」. want to 의 <b>정중한 말</b>이에요.</p><p>I'd like to 뒤 동사는 늘 원형.</p>",
      make: ({ V, O }) => ({ parts: ["I'd", 'like', 'to', V.v, O.w], notes: [nBase(V, "I'd like to 뒤 동사는")] }) },
    { id: 'can-get', sets: ['pattern'], group: G1, title: 'Can I get + 명사?', ex: 'Can I get a coffee?',
      cols: [fx('CAN', '주세요', 'Can I get'), { k: 'O', label: '받을 것', from: 'obj', cats: ['food', 'drink', 'thing'] }],
      rule: '<p><b>Can I get + 명사?</b> = 「~ 주시겠어요?」. 주문할 때 가장 흔한 말이에요. 끝에 please 를 붙이면 더 부드러워요.</p>',
      make: ({ O }) => ({ parts: ['can', 'I', 'get', O.w], q: true, notes: ['Can I get + 명사 (질문이라 물음표)'] }) },
    { id: 'can-i', sets: ['pattern'], group: G1, title: 'Can I + 동사 + 목적어?', ex: 'Can I try this?',
      cols: [fx('CAN', '해도 돼요?', 'Can I'), cV, cO],
      rule: '<p><b>Can I + 동사 원형 …?</b> = 「~해도 돼요?」(허락을 구해요). 동사는 원형이에요.</p><p>✗ Can I <s>eats</s> … ? → ✓ Can I <b>eat</b> … ?</p>',
      make: ({ V, O }) => ({ parts: ['can', 'I', V.v, O.w], q: true, notes: [nBase(V, 'Can I 뒤 동사는')] }) },
  );

  // ── 계획·예정 (K6~K10) ──
  const G2 = '계획·예정';
  P.push(
    { id: 'planning', sets: ['pattern'], group: G2, title: '주어 + be + planning to + 동사 + 목적어', ex: "I'm planning to visit Grandma.",
      cols: [cS, fx('BE', 'be동사', 'be'), fx('PLAN', '계획이다', 'planning to'), cV, cO],
      rule: '<p><b>be planning to + 동사 원형</b> = 「~할 계획이에요」. be 는 주어에 맞춰요: I <b>am</b> / 3인칭 단수 <b>is</b> / you·복수 <b>are</b>.</p><p>planning to 뒤 동사는 원형.</p>',
      make: ({ S, V, O }) => { const be = Inflect.be(S); return { parts: [S.w, be, 'planning', 'to', V.v, O.w], notes: [nBe(S, be), nBase(V, 'to 뒤 동사는')] }; } },
    { id: 'thinking', sets: ['pattern'], group: G2, title: '주어 + be + thinking about + 동사-ing + 목적어', ex: "I'm thinking about buying a new phone.",
      cols: [cS, fx('BE', 'be동사', 'be'), fx('THINK', '생각 중', 'thinking about'), cVing, cO],
      rule: '<p><b>be thinking about + 동사-ing</b> = 「~할까 생각 중이에요」(아직 정하진 않았어요).</p><p><b>about 은 전치사</b>라서 뒤에 동사원형이 아니라 <b>-ing</b>가 와요: buy → buy<b>ing</b>, make → mak<b>ing</b>, run → run<b>ning</b>.</p>',
      make: ({ S, V, O }) => { const be = Inflect.be(S), ing = Inflect.ing(V); return { parts: [S.w, be, 'thinking', 'about', ing, O.w], notes: [nBe(S, be), nIng(V, ing)] }; } },
    { id: 'about-to', sets: ['pattern'], group: G2, title: '주어 + be + about to + 동사 + 목적어', ex: "I'm about to eat dinner.",
      cols: [cS, fx('BE', 'be동사', 'be'), fx('ABOUT', '막 ~하려는', 'about to'), cV, cO],
      rule: '<p><b>be about to + 동사 원형</b> = 「막 ~하려던 참이에요」(바로 지금 하려는 순간).</p><p>be 는 주어에 맞춰요(I am · he is · they are). about to 뒤 동사는 원형.</p>',
      make: ({ S, V, O }) => { const be = Inflect.be(S); return { parts: [S.w, be, 'about', 'to', V.v, O.w], notes: [nBe(S, be), nBase(V, 'to 뒤 동사는')] }; } },
    { id: 'was-going', sets: ['pattern'], group: G2, title: '주어 + was/were going to + 동사 + 목적어, but …', ex: 'I was going to call Grandma, but I forgot.',
      cols: [cS, { ...fx('GO', '~하려고 했다', 'was/were going to'), fx: ['was going to', 'were going to'] }, cV, cO, { k: 'T', label: '그런데…', from: 'butTail', role: 'M' }],
      rule: '<p><b>was/were going to + 동사 원형, but …</b> = 「~하려고 했는데 …」. 하려고 했지만 <b>못 했다</b>는 뜻이에요.</p><p>be 과거: I · 3인칭 단수 → <b>was</b> / you · 복수 → <b>were</b>. 끝의 but … 칸은 이유를 말해요(표의 칸 그대로).</p>',
      make: ({ S, V, O, T }) => { const be = Inflect.be(S, true); return { parts: [S.w, be, 'going', 'to', V.v, O.w + ',', T.w], notes: [nBe(S, be, true), nBase(V, 'going to 뒤 동사는')] }; } },
  );

  // ── 경험·습관 (K11~K15) ──
  const G3 = '경험·습관';
  const cHave = (label) => ({ k: 'HAVE', label: label || 'have', fixed: ['have'], role: 'V' });
  P.push(
    { id: 'ever-q', sets: ['pattern', 'grammar'], group: G3, grp: { grammar: '현재완료' }, title: 'Have + 주어 + ever + 과거분사 + 목적어?', ex: 'Has she ever eaten kimchi?',
      cols: [fx('HAVE', '질문', 'Have'), cSq, { k: 'EVER', label: '~한 적', fixed: ['ever'], role: 'M' }, cVpp, cO],
      rule: '<p><b>Have/Has + 주어 + ever + 과거분사(p.p.) …?</b> = 「~해 본 적 있어요?」. 경험을 물어요.</p><p>주어가 3인칭 단수면 <b>Has</b>. 과거분사는 규칙 동사는 과거형과 같은 -ed, <b>불규칙은 따로 외워요</b>: eat → <b>eaten</b>, drink → <b>drunk</b>, write → <b>written</b>, take → <b>taken</b>, see → <b>seen</b>, run → run, make → made …</p>',
      make: ({ S, V, O }) => { const h = Inflect.have(S), pp = Inflect.pp(V); return { parts: [h, S.w, 'ever', pp, O.w], q: true, notes: [`Have → <b>${cap(h)}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, nPP(V, pp)] }; } },
    { id: 'never', sets: ['pattern', 'grammar'], group: G3, grp: { grammar: '현재완료' }, title: '주어 + have + never + 과거분사 + 목적어', ex: "I've never eaten kimchi.",
      cols: [cS, cHave(), { k: 'NEVER', label: '한 번도 ~않다', fixed: ['never'], role: 'M' }, cVpp, cO],
      rule: '<p><b>have/has never + 과거분사(p.p.)</b> = 「한 번도 ~해 본 적 없어요」.</p><p>주어가 3인칭 단수면 <b>has never</b>. 줄여 말하기: I\'ve never · she\'s never.</p><p>불규칙 과거분사: eat → eaten, write → written, see → seen, take → taken …</p>',
      make: ({ S, V, O }) => { const h = Inflect.have(S), pp = Inflect.pp(V); return { parts: [S.w, h, 'never', pp, O.w], notes: [`have → <b>${h}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, nPP(V, pp)] }; } },
    { id: 'used-to', sets: ['pattern', 'grammar'], group: G3, grp: { grammar: '예전엔 ~했어요' }, title: '주어 + used to + 동사 + 목적어 + 예전에', ex: 'My dad used to play chess years ago.',
      cols: [cS, fx('USED', '예전엔 ~했다', 'used to'), cV, cO, { k: 'M', label: '예전에', from: 'tUsed' }],
      rule: '<p><b>used to + 동사 원형</b> = 「예전엔 ~했어요」(지금은 안 해요). 과거의 습관·상태예요.</p><p>주어가 누구든 <b>used to</b> 모양이 같고, 뒤 동사는 <b>원형</b>이에요(과거형 아님).</p><p>✗ I used to <s>played</s> … → ✓ I used to <b>play</b> …</p>',
      make: ({ S, V, O, M }) => ({ parts: [S.w, 'used', 'to', V.v, O.w, M.w], notes: [nBase(V, 'used to 뒤 동사는')] }) },
    { id: 'used-ing', sets: ['pattern'], group: G3, title: '주어 + be + used to + 동사-ing + 목적어', ex: "I'm used to waking up early.",
      cols: [cS, fx('BE', 'be동사', 'be'), fx('USED', '~에 익숙하다', 'used to'), cV, cO],
      rule: "<p><b>be used to + 동사-ing</b> = 「~하는 데 익숙해요」. <b>used to + 원형</b>(예전엔 ~했다)과 달라요!</p><p>여기서 <b>to 는 전치사</b>라서 뒤에 -ing 가 와요. be 는 주어에 맞춰요.</p><p>I used to <b>play</b> chess (예전엔 했다) ↔ I'm used to <b>playing</b> chess (하는 게 익숙하다)</p>",
      make: ({ S, V, O }) => { const be = Inflect.be(S), ing = Inflect.ing(V); return { parts: [S.w, be, 'used', 'to', ing, O.w], notes: [nBe(S, be), nIng(V, ing)] }; } },
    { id: 'usually-but', sets: ['pattern'], group: G3, title: '주어 + usually + 동사 + 목적어, but today + 주어 + be + 동사-ing + 목적어', ex: "I usually drink coffee, but today I'm drinking tea.",
      cols: [{ ...cS, only: ['I', 'you', 'he', 'she', 'we', 'they'] }, { k: 'USU', label: 'usually', fixed: ['usually'], hide: true, role: 'M' }, { ...cV, label: '평소 동사' }, { ...cO, label: '평소 목적어' },
        { k: 'BUT', label: 'but today', fixed: ['but today'], hide: true, role: 'M' }, { k: 'V2', label: '오늘 동사', from: 'vt', noStative: true }, { k: 'O2', label: '오늘 목적어', from: 'obj' }],
      rule: '<p><b>평소의 일 + but today + 오늘 하는 일</b>. 한 문장에 두 가지 모양을 써요.</p><ul><li>평소(습관) = <b>현재형</b> + usually: I usually drink coffee (3인칭 단수는 -s)</li><li>오늘 지금 = <b>현재진행형</b>(be + -ing): but today I\'m drinking tea</li></ul><p>두 번째 문장의 주어는 첫 번째와 같아요(표에 따로 없어요). 표의 왼쪽 칸 둘은 「평소」, 오른쪽 칸 둘은 「오늘」이에요.</p>',
      make: ({ S, V, O, V2, O2 }) => { const v1 = Inflect.verb(S, V), be = Inflect.be(S), ing = Inflect.ing(V2); return { parts: [S.w, 'usually', v1, O.w + ',', 'but', 'today', S.w, be, ing, O2.w], notes: [nS(S, V, v1), nBe(S, be), nIng(V2, ing)] }; } },
  );

  // ── 제안·의견 (K16~K20) ──
  const G4 = '제안·의견';
  const cMfut = { k: 'M', label: '언제(미래)', from: 'tFut', only: ['tonight', 'tomorrow', 'this weekend', 'next week'] };
  P.push(
    { id: 'why-dont', sets: ['pattern'], group: G4, title: "Why don't we + 동사 + 목적어 + 언제?", ex: "Why don't we eat pizza tonight?",
      cols: [fx('WHY', '제안', "Why don't we"), cV, cO, cMfut],
      rule: "<p><b>Why don't we + 동사 원형 …?</b> = 「우리 ~하는 게 어때요?」(함께 하자고 제안해요).</p><p>we 와 같이 쓰는 고정 표현이라 동사는 항상 원형이에요.</p>",
      make: ({ V, O, M }) => ({ parts: ["why don't we", V.v, O.w, M.w], q: true, notes: [nBase(V, "Why don't we 뒤 동사는")] }) },
    { id: 'how-about', sets: ['pattern'], group: G4, title: 'How about + 동사-ing + 목적어 + 언제?', ex: 'How about eating pizza tonight?',
      cols: [fx('HOW', '제안', 'How about'), cVing, cO, cMfut],
      rule: '<p><b>How about + 동사-ing …?</b> = 「~하는 건 어때요?」. 부담 없이 제안해요.</p><p>about 은 전치사라서 뒤에 <b>-ing</b>가 와요: eat → eat<b>ing</b>, make → mak<b>ing</b>, run → run<b>ning</b>.</p>',
      make: ({ V, O, M }) => { const ing = Inflect.ing(V); return { parts: ['how', 'about', ing, O.w, M.w], q: true, notes: [nIng(V, ing)] }; } },
    { id: 'mind-if', sets: ['pattern'], group: G4, title: 'Do you mind if I + 동사 + 목적어?', ex: 'Do you mind if I open the window?',
      cols: [fx('MIND', '정중한 허락', 'Do you mind if I'), cV, cO],
      rule: '<p><b>Do you mind if I + 동사 …?</b> = 「~해도 될까요?」. 정중하게 허락을 구해요.</p><p>if 뒤에는 <b>현재형(원형)</b>을 써요. 대답: No, not at all (괜찮아요) / Actually, I do (사실 좀 곤란해요).</p>',
      make: ({ V, O }) => ({ parts: ['do', 'you', 'mind', 'if', 'I', V.v, O.w], q: true, notes: [nBase(V, 'if I 뒤 동사는')] }) },
    { id: 'should-we', sets: ['pattern'], group: G4, title: 'I think we should + 동사 + 목적어', ex: 'I think we should call the teacher.',
      cols: [fx('SHOULD', '의견', 'I think we should'), cV, cO],
      rule: '<p><b>I think we should + 동사 원형</b> = 「우리 ~하는 게 좋겠어요」. 의견을 부드럽게 말해요.</p><p>should 뒤 동사는 항상 원형이에요.</p>',
      make: ({ V, O }) => ({ parts: ['I', 'think', 'we', 'should', V.v, O.w], notes: [nBase(V, 'should 뒤 동사는')] }) },
    { id: 'worth', sets: ['pattern'], group: G4, title: "It's worth + 동사-ing + 목적어", ex: "It's worth reading novels.",
      cols: [fx('WORTH', '~할 만해요', "It's worth"), cVing, cO],
      rule: "<p><b>It's worth + 동사-ing</b> = 「~할 만해요 · ~할 가치가 있어요」.</p><p>worth 뒤에는 동사원형이 아니라 <b>-ing</b>가 와요: read → read<b>ing</b>, make → mak<b>ing</b>.</p>",
      make: ({ V, O }) => { const ing = Inflect.ing(V); return { parts: ["it's", 'worth', ing, O.w], notes: [nIng(V, ing)] }; } },
  );

  COMBO_PATTERNS.push(...P);
  Combo.groupOrder = Combo.groupOrder || {}; Combo.groupOrder.pattern = [G1, G2, G3, G4];
  // 기본 17개 중 겹치는 것은 핵심 패턴 탭에도 보이게
  Combo.pattern('going').sets = ['basic', 'pattern']; Combo.pattern('going').grp = { pattern: G2 };
})();
// ══ 🧩 문법 더 깊게 (G1~G23): 현재완료 · 수동태 · 관계사·명사절 · 가정·조동사 · to부정사·동명사·분사 ══
(function () {
  const cS = { k: 'S', label: '주어', from: 'subj' }, cV = { k: 'V', label: '동사', from: 'vt' }, cO = { k: 'O', label: '목적어', from: 'obj' };
  const cVing = { k: 'V', label: '동사', from: 'vt', noStative: true }, cVpp = { k: 'V', label: '동사', from: 'vt', pp: true };
  const nBe = (S, be, past) => `be → <b>${be}</b> (${past ? '과거 · ' : ''}주어 ${esc2(S.w)} = ${P_KO[S.p]})`;
  const nBeN = (O, be, past) => `be → <b>${be}</b> (${past ? '과거 · ' : ''}${esc2(O.w)} = ${O.n === 'pl' ? '여럿' : '하나·셀 수 없는 것'})`;
  const nS = (S, V, v) => (v !== V.v ? `${V.v} → <b>${v}</b> (주어가 3인칭 단수)` : `${V.v} 그대로 (주어 ${esc2(S.w)} = ${P_KO[S.p]})`);
  const nBase = (V, pre) => `${pre || '동사는'} 원형 <b>${V.v}</b>`;
  const nIng = (V, ing) => `${V.v} → <b>${ing}</b> (-ing)`;
  const nPP = (V, pp) => `${V.v} → <b>${pp}</b> (과거분사 p.p.${V.pp ? ' · 불규칙' : ''})`;
  const nPast = (V, v) => `${V.v} → <b>${v}</b> (과거${V.past ? ' · 불규칙' : ''})`;
  const fx = (k, label, w, role) => ({ k, label, fixed: [w], role: role || 'V' });
  const hid = (k, label, w, role) => ({ k, label, fixed: [w], hide: true, role: role || 'V' });
  const cHave = { k: 'HAVE', label: 'have', fixed: ['have'], role: 'V' };
  const GA = '현재완료', GB = '수동태', GC = '관계사·명사절', GD = '가정·조동사', GE = 'to부정사·동명사·분사';
  const ONLY_AG = ['my brother', 'my sister', 'my parents', 'my dad', 'our teacher', 'the kids', 'Mina', 'my friends'];
  const PPNOTE = '<p>과거분사(p.p.): 규칙 동사는 과거형과 같은 -ed, <b>불규칙은 따로 외워요</b> — eat → <b>eaten</b>, drink → <b>drunk</b>, write → <b>written</b>, take → <b>taken</b>, see → <b>seen</b>, forget → <b>forgotten</b>, run → run, make → made …</p>';
  const P = [];

  // ── 현재완료 (G1~G4) ──
  P.push(
    { id: 'pp-cont', sets: ['grammar'], group: GA, title: '주어 + have been + 동사-ing + 목적어 + for/since …', ex: 'I have been studying English for two years.',
      cols: [cS, cHave, hid('BEEN', 'been', 'been'), cVing, cO, { k: 'M', label: '얼마 동안', from: 'tDur' }],
      rule: '<p><b>have/has been + 동사-ing</b> = 「(쭉) ~해 오고 있어요」. 과거에 시작해서 <b>지금까지 계속</b>되는 일이에요.</p><ul><li><b>for + 기간</b>: for two years (2년 동안)</li><li><b>since + 시작한 때</b>: since Monday (월요일부터)</li></ul><p>주어가 3인칭 단수면 <b>has been</b>. 줄여 말하기: I\'ve been · she\'s been</p>',
      make: ({ S, V, O, M }) => { const h = Inflect.have(S), ing = Inflect.ing(V); return { parts: [S.w, h, 'been', ing, O.w, M.w], notes: [`have → <b>${h}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, nIng(V, ing)] }; } },
    { id: 'just-already', sets: ['grammar'], group: GA, title: '주어 + have + just/already + 과거분사 + 목적어', ex: 'She has just finished her homework.',
      cols: [cS, cHave, { k: 'ADV', label: '방금·벌써', fixed: ['just', 'already'], role: 'M' }, cVpp, cO],
      rule: '<p><b>have/has + just/already + 과거분사(p.p.)</b>: <b>just</b> = 「방금」, <b>already</b> = 「벌써, 이미」. 끝난 일이 지금과 이어져 있을 때 써요.</p><p>just·already 는 have 와 과거분사 <b>사이</b>에 와요. 3인칭 단수 주어는 <b>has</b>.</p>' + PPNOTE,
      make: ({ S, ADV, V, O }) => { const h = Inflect.have(S), pp = Inflect.pp(V); return { parts: [S.w, h, ADV.w, pp, O.w], notes: [`have → <b>${h}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, nPP(V, pp)] }; } },
    { id: 'yet-neg', sets: ['grammar'], group: GA, title: "주어 + haven't + 과거분사 + 목적어 + yet", ex: "He hasn't called his parents yet.",
      cols: [cS, { ...fx('HAVE', 'have not', 'have not'), fx: ['have not', 'has not'] }, cVpp, cO, { k: 'YET', label: '아직', fixed: ['yet'], role: 'M' }],
      rule: '<p><b>have/has not + 과거분사(p.p.) … yet</b> = 「아직 ~하지 않았어요」. <b>yet</b> 은 부정문 <b>맨 끝</b>에 붙여요.</p><p>3인칭 단수 주어는 <b>has not (hasn\'t)</b>. 줄여 말하기: I haven\'t · she hasn\'t</p>' + PPNOTE,
      make: ({ S, V, O }) => { const h = Inflect.have(S), pp = Inflect.pp(V); return { parts: [S.w, h, 'not', pp, O.w, 'yet'], notes: [`have → <b>${h}</b> not (주어 ${esc2(S.w)} = ${P_KO[S.p]})`, nPP(V, pp)] }; } },
    { id: 'pp-vs', sets: ['grammar'], group: GA, title: '주어 + 동사(현재완료 또는 과거) + 목적어 + 때', ex: 'I have eaten kimchi many times.',
      cols: [cS, cVpp, cO, { k: 'M', label: '때', from: 'tMix' }],
      rule: '<p>같은 일도 <b>때를 나타내는 말</b>에 따라 시제가 달라져요.</p><ul><li><b>끝난 때가 정해진 말</b> → 과거형: yesterday · last night · two days ago · last week · in 2019</li><li><b>지금까지·경험을 말하는 말</b> → 현재완료(have/has + p.p.): so far · many times · before</li></ul><p>표의 「때」 칸을 보고, 어느 시제를 쓸지 스스로 정해 문장을 만들어 보세요.</p>' + PPNOTE,
      make: ({ S, V, O, M }) => {
        if (M.t === 'pf') { const h = Inflect.have(S), pp = Inflect.pp(V); return { parts: [S.w, h, pp, O.w, M.w], notes: [`때 말 ${esc2(M.w)} → <b>현재완료</b> (지금까지)`, `${V.v} → <b>${pp}</b>`] }; }
        const v = Inflect.past(V); return { parts: [S.w, v, O.w, M.w], notes: [`때 말 ${esc2(M.w)} → <b>과거형</b> (끝난 때)`, nPast(V, v)] };
      } },
  );

  // ── 수동태 (G5~G8) ──
  const cOsub = { k: 'O', label: '주어(받는 것)', from: 'obj' }, cBE = fx('BE', 'be동사', 'be');
  P.push(
    { id: 'pass', sets: ['grammar'], group: GB, title: '주어(받는 것) + be + 과거분사 + 언제', ex: 'The dishes are washed every day.',
      cols: [cOsub, cBE, cVpp, { k: 'M', label: '언제', from: 'tNow' }],
      rule: '<p><b>수동태 = be + 과거분사(p.p.)</b> =「~돼요, ~되어 있어요」. <b>일을 받는 쪽</b>이 주어가 돼요.</p><p>be 는 <b>주어가 하나면 is, 여럿이면 are</b>: Pizza <b>is</b> eaten · Noodles <b>are</b> eaten.</p>' + PPNOTE,
      make: ({ O, V, M }) => { const be = Inflect.beN(O.n), pp = Inflect.pp(V); return { parts: [O.w, be, pp, M.w], notes: [nBeN(O, be), nPP(V, pp)] }; } },
    { id: 'pass-by', sets: ['grammar'], group: GB, title: '주어(받는 것) + be + 과거분사 + by + 한 사람', ex: 'The car is washed by my dad.',
      cols: [cOsub, cBE, cVpp, hid('BY', 'by', 'by', 'M'), { k: 'AG', label: '누가(한 사람)', from: 'subj', only: ONLY_AG, role: 'S' }],
      rule: '<p><b>by + 한 사람</b>으로 「누가 했는지」를 덧붙일 수 있어요: The car is washed <b>by my dad</b>.</p><p>by 뒤 사람은 <b>보통 말하고 싶을 때만</b> 써요(몰라도 되면 빼요).</p>' + PPNOTE,
      make: ({ O, V, AG }) => { const be = Inflect.beN(O.n), pp = Inflect.pp(V); return { parts: [O.w, be, pp, 'by', AG.w], notes: [nBeN(O, be), nPP(V, pp)] }; } },
    { id: 'pass-past', sets: ['grammar'], group: GB, title: '주어(받는 것) + was/were + 과거분사 + 언제(과거)', ex: 'The room was cleaned yesterday.',
      cols: [cOsub, fx('BE', 'be동사', 'be'), cVpp, { k: 'M', label: '언제(과거)', from: 'tPast' }],
      rule: '<p><b>과거 수동태 = was/were + 과거분사(p.p.)</b> = 「~됐어요」. 주어가 하나면 <b>was</b>, 여럿이면 <b>were</b>.</p>' + PPNOTE,
      make: ({ O, V, M }) => { const be = Inflect.beN(O.n, true), pp = Inflect.pp(V); return { parts: [O.w, be, pp, M.w], notes: [nBeN(O, be, true), nPP(V, pp)] }; } },
    { id: 'pass-fut', sets: ['grammar'], group: GB, title: '주어(받는 것) + will be + 과거분사 + 언제(미래)', ex: 'The report will be finished tomorrow.',
      cols: [cOsub, fx('WB', '될 거예요', 'will be'), cVpp, { k: 'M', label: '언제(미래)', from: 'tFut' }],
      rule: '<p><b>미래 수동태 = will be + 과거분사(p.p.)</b> = 「~될 거예요」. 주어가 하나든 여럿이든 <b>will be</b> 그대로예요.</p>' + PPNOTE,
      make: ({ O, V, M }) => { const pp = Inflect.pp(V); return { parts: [O.w, 'will', 'be', pp, M.w], notes: [nPP(V, pp)] }; } },
    { id: 'have-done', sets: ['grammar'], group: GB, title: '주어 + had/got + 목적어 + 과거분사 + 언제(과거)', ex: 'I had my car washed yesterday.',
      cols: [cS, { k: 'AUX', label: '시켰다', fixed: ['had', 'got'], role: 'V' }, { k: 'O', label: '목적어', from: 'obj', cats: ['house', 'thing', 'message'] }, cVpp, { k: 'M', label: '언제(과거)', from: 'tPast' }],
      rule: '<p><b>have/get + 목적어 + 과거분사(p.p.)</b> = 「(남에게 시켜서) ~을 …되게 했어요」. 내가 직접 하지 않고 <b>맡겼다</b>는 뜻이에요.</p><p>과거 → <b>had</b> / <b>got</b> 중 하나를 고르면 돼요. 목적어는 <b>당하는 쪽</b>이라 뒤 동사는 과거분사: I had my car <b>washed</b>.</p>' + PPNOTE,
      make: ({ S, AUX, O, V, M }) => { const pp = Inflect.pp(V); return { parts: [S.w, AUX.w, O.w, pp, M.w], notes: [`${AUX.w} + 목적어 + 과거분사 (맡겨서 하게 했어요)`, nPP(V, pp)] }; } },
  );

  // ── 관계사·명사절 (G9~G13) ──
  P.push(
    { id: 'rel-who', sets: ['grammar'], group: GC, title: 'I know + 사람 + who + 동사 + 목적어', ex: 'I know a girl who plays the piano.',
      cols: [hid('KNOW', 'I know', 'I know'), { k: 'H', label: '사람', from: 'person', role: 'S' }, fx('WHO', 'who', 'who', 'M'), cV, cO],
      rule: '<p><b>사람 + who + 동사</b> = 「~하는 사람」. who 뒤 동사의 모양은 <b>who 앞 사람</b>에 맞춰요.</p><ul><li>하나(a girl) → 동사 <b>-s</b>: a girl who play<b>s</b></li><li>여럿(two girls) → <b>원형</b>: two girls who play</li></ul><p>who 대신 <b>that</b>도 돼요. 표 맨 앞 「I know」는 고정이에요.</p>',
      make: ({ H, V, O }) => { const v = H.n === 'pl' ? V.v : Inflect.s3(V.v); return { parts: ['I', 'know', H.w, 'who', v, O.w], alts: [['I', 'know', H.w, 'that', v, O.w]], notes: [`사람(${esc2(H.w)}) 뒤 → <b>who</b> (that 도 돼요)`, v !== V.v ? `${V.v} → <b>${v}</b> (앞 ${esc2(H.w)} 가 하나라서)` : `${V.v} 그대로 (앞 ${esc2(H.w)} 가 여럿이라서)`] }; } },
    { id: 'rel-which', sets: ['grammar'], group: GC, title: 'This is + 물건 + which + 주어 + 동사(과거)', ex: 'This is a book which she bought.',
      cols: [hid('THIS', 'This is', 'This is'), { k: 'O', label: '물건', from: 'obj', cats: ['thing', 'book', 'food'], notN: ['pl'] }, fx('WH', 'which', 'which', 'M'), cS, { k: 'V', label: '동사', from: 'vt' }],
      rule: '<p><b>물건 + which + 주어 + 동사</b> = 「(주어가) ~한 물건」. 사람은 who, <b>물건·동물은 which</b>예요(<b>that</b>도 돼요).</p><p>이 표는 「이것은 (내가·그녀가) 산 책이에요」처럼 <b>과거</b>로 말해 봐요. 표 맨 앞 「This is」는 고정이에요.</p>',
      make: ({ O, S, V }) => { const past = Inflect.past(V); return { parts: ['this', 'is', O.w, 'which', S.w, past], alts: [['this', 'is', O.w, 'that', S.w, past]], notes: [`물건(${esc2(O.w)}) 뒤 → <b>which</b> (that 도 돼요)`, nPast(V, past)] }; } },
    { id: 'rel-where', sets: ['grammar'], group: GC, title: 'This is + 장소 + where + 주어 + 동사(과거)', ex: 'This is the park where we ran.',
      cols: [hid('THIS', 'This is', 'This is'), { k: 'N', label: '장소', from: 'placeN', role: 'O' }, fx('WHERE', 'where', 'where', 'M'), cS, { k: 'V', label: '동사', from: 'vi' }],
      rule: '<p><b>장소 + where + 주어 + 동사</b> = 「~한 곳」. <b>장소를 꾸밀 때는 where</b>를 써요.</p><p>이 표는 「여기는 우리가 달린 공원이에요」처럼 <b>과거</b>로 말해 봐요. 표 맨 앞 「This is」는 고정이에요.</p>',
      make: ({ N, S, V }) => { const past = Inflect.past(V); return { parts: ['this', 'is', N.w, 'where', S.w, past], notes: [`장소(${esc2(N.w)}) 뒤 → <b>where</b>`, nPast(V, past)] }; } },
    { id: 'rel-when', sets: ['grammar'], group: GC, title: 'I remember + 때 + when + 주어 + 동사(과거)', ex: 'I remember the day when we danced.',
      cols: [hid('REM', 'I remember', 'I remember'), { k: 'N', label: '때', from: 'dayN', role: 'O' }, fx('WHEN', 'when', 'when', 'M'), cS, { k: 'V', label: '동사', from: 'vi' }],
      rule: '<p><b>때 + when + 주어 + 동사</b> = 「~한 때(날)」. <b>시간을 꾸밀 때는 when</b>을 써요.</p><p>이 표는 「우리가 춤춘 그날이 기억나요」처럼 <b>과거</b>로 말해 봐요. 표 맨 앞 「I remember」는 고정이에요.</p>',
      make: ({ N, S, V }) => { const past = Inflect.past(V); return { parts: ['I', 'remember', N.w, 'when', S.w, past], notes: [`때(${esc2(N.w)}) 뒤 → <b>when</b>`, nPast(V, past)] }; } },
    { id: 'what-is', sets: ['grammar'], group: GC, title: 'What + 주어 + 동사 + is + 목적어', ex: 'What she likes is pizza.',
      cols: [hid('WHAT', 'What', 'What', 'S'), cS, cV, hid('IS', 'is', 'is'), cO],
      rule: '<p><b>What + 주어 + 동사 … is + 명사</b> = 「~하는 것은 …이에요」. <b>what 이 이끄는 말 전체</b>가 「~하는 것」이 돼요.</p><p>what 뒤는 <b>주어 → 동사</b> 순서. 현재형이라 3인칭 단수 주어면 동사에 <b>-s</b>가 붙어요: What she <b>likes</b> is pizza.</p>',
      make: ({ S, V, O }) => { const v = Inflect.verb(S, V); return { parts: ['what', S.w, v, 'is', O.w], notes: [nS(S, V, v)] }; } },
    { id: 'think-that', sets: ['grammar'], group: GC, title: 'I think that + 주어 + 동사 + 목적어', ex: 'I think that she likes pizza.',
      cols: [{ ...fx('THINK', '생각해요', 'I think that'), fx: ['I think that', 'I think'] }, cS, cV, cO],
      rule: '<p><b>I think (that) + 주어 + 동사</b> = 「~라고 생각해요」. that 뒤에는 <b>완전한 문장</b>(주어 + 동사)이 와요.</p><p><b>that 은 생략해도 돼요</b>. 현재형이라 3인칭 단수 주어면 동사에 -s.</p>',
      make: ({ S, V, O }) => { const v = Inflect.verb(S, V); return { parts: ['I', 'think', 'that', S.w, v, O.w], alts: [['I', 'think', S.w, v, O.w]], notes: [nS(S, V, v), 'that 은 생략해도 돼요'] }; } },
    { id: 'know-wh', sets: ['grammar'], group: GC, title: 'Do you know + 의문사 + 주어 + 동사?', ex: 'Do you know where she works?',
      cols: [fx('KNOW', '아세요?', 'Do you know'), { k: 'WH', label: '의문사', fixed: ['where', 'when', 'why', 'how'], role: 'M' }, cS, { k: 'V', label: '동사', from: 'vi' }],
      rule: '<p><b>간접 의문문</b>: 질문이 다른 문장 <b>안에 들어가면</b> 어순이 평서문처럼 <b>의문사 + 주어 + 동사</b>가 돼요.</p><ul><li>✗ Do you know where <s>does she work</s>?</li><li>✓ Do you know where <b>she works</b>?</li></ul><p>그래서 does/did 가 필요 없고, 현재형이라 3인칭 단수 주어면 동사에 <b>-s</b>가 붙어요.</p>',
      make: ({ WH, S, V }) => { const v = Inflect.verb(S, V); return { parts: ['do', 'you', 'know', WH.w, S.w, v], q: true, notes: ['의문사 뒤는 <b>주어 → 동사</b> 순서 (does 없음)', nS(S, V, v)] }; } },
  );

  // ── 가정·조동사 (G14~G18) ──
  const cIf = hid('IF', 'If', 'If', 'M');
  P.push(
    { id: 'if-real', sets: ['grammar'], group: GD, title: 'If + 주어 + 동사(현재), 결과(will …)', ex: 'If she eats pizza, I will be happy.',
      cols: [cIf, cS, cV, cO, { k: 'R', label: '그러면(will)', from: 'resFut', role: 'M' }],
      rule: '<p><b>If + 현재형, will + 동사</b> = 「만약 ~하면, …할 거예요」. 앞으로 <b>일어날 수 있는 일</b>을 말해요.</p><p>if 가 이끄는 부분은 <b>미래라도 현재형</b>을 써요(will 안 씀). 3인칭 단수 주어면 동사에 -s. 표의 마지막 칸은 「결과」 문장 그대로 붙여요.</p>',
      make: ({ S, V, O, R }) => { const v = Inflect.verb(S, V); return { parts: ['if', S.w, v, O.w + ',', R.w], notes: [nS(S, V, v), 'if 절은 미래라도 <b>현재형</b>'] }; } },
    { id: 'if-unreal', sets: ['grammar'], group: GD, title: 'If + 주어 + 동사(과거), 결과(would …)', ex: 'If she ate pizza, I would be happy.',
      cols: [cIf, cS, cV, cO, { k: 'R', label: '그러면(would)', from: 'resWould', role: 'M' }],
      rule: '<p><b>가정법 과거: If + 과거형, would + 동사</b> = 「만약 ~한다면, …할 텐데요」. <b>지금 사실과 다른 상상</b>이에요.</p><p>if 절의 동사는 <b>과거형</b>(주어가 누구든 하나): eat → <b>ate</b>, like → <b>liked</b>. 과거형을 쓰지만 뜻은 「현재의 상상」이에요. 결과 칸은 그대로 붙여요.</p>',
      make: ({ S, V, O, R }) => { const v = Inflect.past(V); return { parts: ['if', S.w, v, O.w + ',', R.w], notes: [nPast(V, v), 'if 절 과거형 = 지금 사실과 다른 상상'] }; } },
    { id: 'wish-past', sets: ['grammar'], group: GD, title: 'I wish + 주어 + 동사(과거) + 목적어', ex: 'I wish my dad cooked pasta.',
      cols: [fx('WISH', '~라면 좋을 텐데', 'I wish'), cS, cV, cO],
      rule: '<p><b>I wish + 주어 + 과거형</b> = 「~라면 좋을 텐데」. <b>지금 사실과 달라서 아쉬운</b> 마음이에요.</p><p>wish 뒤 동사는 <b>과거형</b>: I wish he <b>cooked</b> … (지금은 안 한다는 뜻).</p>',
      make: ({ S, V, O }) => { const v = Inflect.past(V); return { parts: ['I', 'wish', S.w, v, O.w], notes: [nPast(V, v), 'wish 뒤 과거형 = 지금과 다른 바람'] }; } },
    { id: 'wish-could', sets: ['grammar'], group: GD, title: 'I wish + 주어 + could + 동사 + 목적어', ex: 'I wish I could play the guitar.',
      cols: [fx('WISH', '~라면 좋을 텐데', 'I wish'), cS, fx('CAN', 'could', 'could'), cV, cO],
      rule: '<p><b>I wish + 주어 + could + 동사 원형</b> = 「~할 수 있다면 좋을 텐데」. 지금은 못 하는 일이 아쉬울 때 써요.</p><p>could 뒤 동사는 항상 원형이에요.</p>',
      make: ({ S, V, O }) => ({ parts: ['I', 'wish', S.w, 'could', V.v, O.w], notes: [nBase(V, 'could 뒤 동사는')] }) },
    { id: 'should-have', sets: ['grammar'], group: GD, title: "주어 + should have + 과거분사 + 목적어 + 언제(과거)", ex: 'I should have called Grandma yesterday.',
      cols: [cS, { k: 'SH', label: '했어야 / 말았어야', fixed: ['should have', "shouldn't have"], role: 'V' }, cVpp, cO, { k: 'M', label: '언제(과거)', from: 'tPast' }],
      rule: '<p><b>should have + 과거분사(p.p.)</b> = 「~했어야 했는데(안 했어요)」, <b>shouldn\'t have + p.p.</b> = 「~하지 말았어야 했는데(해 버렸어요)」. 지난 일을 <b>후회</b>할 때 써요.</p><p>주어가 누구든 모양이 같아요. 줄여 말하기: should\'ve · shouldn\'t have</p>' + PPNOTE,
      make: ({ S, SH, V, O, M }) => { const pp = Inflect.pp(V); return { parts: [S.w, SH.w, pp, O.w, M.w], notes: [`${SH.w} + 과거분사`, nPP(V, pp)] }; } },
    { id: 'might-must', sets: ['grammar'], group: GD, title: '주어 + might/must + be + 형용사', ex: 'She must be tired.',
      cols: [cS, { k: 'MM', label: '일지도 · 임에 틀림없다', fixed: ['might', 'must'], role: 'V' }, hid('BE', 'be', 'be'), { k: 'C', label: '형용사', from: 'adj' }],
      rule: '<p><b>추측</b>을 말해요.</p><ul><li><b>might be</b> = 「~일지도 몰라요」(반반)</li><li><b>must be</b> = 「~임에 틀림없어요」(거의 확신)</li></ul><p>주어가 누구든 모양이 같아요. 뒤는 <b>be + 형용사</b>(표의 be 는 고정이에요).</p>',
      make: ({ S, MM, C }) => ({ parts: [S.w, MM.w, 'be', C.w], notes: [`${MM.w} + be (주어가 누구든 같아요)`] }) },
  );
  Combo.pattern('used-to').grp = { grammar: GD };

  // ── to부정사·동명사·분사 (G19~G23) ──
  const stFactory = (id, v0, toForm, title, ex, rule) => ({ id, sets: ['grammar'], group: GE, title, ex,
    cols: [cS, { k: 'X', label: v0 + (toForm ? ' to' : ''), fixed: [v0 + (toForm ? ' to' : '')], fx: [v0 + (toForm ? ' to' : ''), Inflect.s3(v0) + (toForm ? ' to' : '')], role: 'V' }, toForm ? cV : cVing, cO],
    rule, make: ({ S, V, O }) => { const w = Inflect.verb(S, { v: v0 }); const nt = `${v0} → <b>${w}</b> (주어 ${esc2(S.w)} = ${P_KO[S.p]})`; if (toForm) return { parts: [S.w, w, 'to', V.v, O.w], notes: [nt, nBase(V, 'to 뒤 동사는')] }; const ing = Inflect.ing(V); return { parts: [S.w, w, ing, O.w], notes: [nt, nIng(V, ing)] }; } });
  P.push(
    { id: 'to-inf', sets: ['grammar'], group: GE, title: '주어 + 동사 + to + 동사원형 + 목적어', ex: 'She decides to cook dinner.',
      cols: [cS, { k: 'V1', label: '앞 동사', from: 'vTo', role: 'V' }, hid('TO', 'to', 'to', 'M'), { ...cV, label: '뒤 동사' }, cO],
      rule: '<p>want · need · decide · plan · hope · learn · try · promise 뒤에는 <b>to + 동사 원형</b>이 와요(= 「~하기를/~하려고」).</p><p>앞 동사는 주어에 맞춰요(3인칭 단수면 -s), <b>to 뒤 동사는 늘 원형</b>이에요. 표의 to 는 고정이에요.</p><p>✗ She decides to <s>cooks</s> … → ✓ She decides to <b>cook</b> …</p>',
      make: ({ S, V1, V, O }) => { const v1 = Inflect.verb(S, V1); return { parts: [S.w, v1, 'to', V.v, O.w], notes: [nS(S, V1, v1), nBase(V, 'to 뒤 동사는')] }; } },
    { id: 'ger', sets: ['grammar'], group: GE, title: '주어 + 동사 + 동사-ing + 목적어', ex: 'He enjoys watching movies.',
      cols: [cS, { k: 'V1', label: '앞 동사', from: 'vIng', role: 'V' }, { ...cVing, label: '뒤 동사' }, cO],
      rule: '<p>enjoy · finish · practice · avoid · keep · suggest 뒤에는 <b>동사-ing</b>(동명사)가 와요. 「~하는 것」이라는 뜻이에요.</p><p>앞 동사는 주어에 맞춰요(3인칭 단수면 -s). <b>뒤 동사는 -ing</b>: watch → watch<b>ing</b>, make → mak<b>ing</b>, run → run<b>ning</b>.</p><p>✗ He enjoys <s>to watch</s> … → ✓ He enjoys <b>watching</b> …</p>',
      make: ({ S, V1, V, O }) => { const v1 = Inflect.verb(S, V1), ing = Inflect.ing(V); return { parts: [S.w, v1, ing, O.w], notes: [nS(S, V1, v1), nIng(V, ing)] }; } },
    stFactory('stop-ing', 'stop', false, '주어 + stop + 동사-ing + 목적어 (~하는 걸 그만두다)', 'She stops eating pizza.', '<p><b>stop + 동사-ing</b> = 「~하는 것을 <b>그만두다</b>」(하던 일을 멈춰요). She stopped eating pizza = 피자 먹는 걸 그만뒀어요.</p><p>주어가 3인칭 단수면 <b>stops</b>. 뒤 동사는 <b>-ing</b>.</p><p>비교: stop <b>to</b> + 원형 = 「~하려고 멈추다」(다른 일을 하려고 멈춤).</p>'),
    stFactory('stop-to', 'stop', true, '주어 + stop to + 동사 + 목적어 (~하려고 멈추다)', 'She stops to eat pizza.', '<p><b>stop to + 동사 원형</b> = 「~하려고 <b>멈추다</b>」(하던 일을 멈추고 다른 일을 해요). She stopped to eat pizza = 피자를 먹으려고 멈췄어요.</p><p>주어가 3인칭 단수면 <b>stops to</b>. to 뒤는 원형.</p><p>비교: stop + <b>-ing</b> = 「~하는 걸 그만두다」.</p>'),
    stFactory('remember-ing', 'remember', false, '주어 + remember + 동사-ing + 목적어 (한 일을 기억하다)', 'He remembers eating pizza.', '<p><b>remember + 동사-ing</b> = 「(이미) ~한 것을 <b>기억하다</b>」. I remember meeting her = 그녀를 만난 일이 기억나요.</p><p>3인칭 단수면 <b>remembers</b>. 뒤 동사는 <b>-ing</b>.</p><p>비교: remember <b>to</b> + 원형 = 「~할 것을 잊지 않고 하다」.</p>'),
    stFactory('remember-to', 'remember', true, '주어 + remember to + 동사 + 목적어 (잊지 않고 하다)', 'He remembers to call Grandma.', '<p><b>remember to + 동사 원형</b> = 「~할 것을 <b>잊지 않고 하다</b>」(앞으로 할 일). Remember to call me = 나한테 전화하는 것 잊지 마요.</p><p>3인칭 단수면 <b>remembers to</b>. to 뒤는 원형.</p><p>비교: remember + <b>-ing</b> = 「(이미) 한 일을 기억하다」.</p>'),
    stFactory('try-ing', 'try', false, '주어 + try + 동사-ing + 목적어 (시험 삼아 해 보다)', 'She tries eating kimchi.', '<p><b>try + 동사-ing</b> = 「(시험 삼아) ~해 <b>보다</b>」. She tried eating kimchi = 김치를 먹어 봤어요(어떤지 보려고).</p><p>3인칭 단수면 <b>tries</b>. 뒤 동사는 <b>-ing</b>.</p><p>비교: try <b>to</b> + 원형 = 「~하려고 <b>노력하다</b>」.</p>'),
    stFactory('try-to', 'try', true, '주어 + try to + 동사 + 목적어 (~하려고 노력하다)', 'She tries to eat kimchi.', '<p><b>try to + 동사 원형</b> = 「~하려고 <b>노력하다</b>」(힘들지만 해 보려고 애써요). She tried to eat kimchi = 김치를 먹으려고 애썼어요.</p><p>3인칭 단수면 <b>tries to</b>. to 뒤는 원형.</p><p>비교: try + <b>-ing</b> = 「시험 삼아 해 보다」.</p>'),
    { id: 'emo-adj', sets: ['grammar'], group: GE, title: '주어 + be + -ed / -ing 형용사', ex: 'The movie is boring. / I am bored.',
      cols: [{ k: 'S', label: '주어', from: 'subjEmo' }, fx('BE', 'be동사', 'be'), { k: 'C', label: '-ed / -ing', from: 'adjEmo', role: 'O' }],
      rule: '<p>감정 동사(bore · excite · tire …)는 <b>형용사로 바꿔</b> 써요. 모양이 둘이에요.</p><ul><li><b>-ed</b>: 그 감정을 <b>느끼는 사람</b> — I am <b>bored</b> (나는 지루해요)</li><li><b>-ing</b>: 그 감정을 <b>일으키는 것</b> — The movie is <b>boring</b> (영화가 지루해요)</li></ul><p>표에는 원형만 있어요. <b>주어가 사람인지 물건인지</b> 보고 골라요. be 는 주어에 맞춰요.</p>',
      make: ({ S, C }) => { const be = Inflect.be(S), adj = S.thing ? C.ing : C.ed; return { parts: [S.w, be, adj], notes: [nBe(S, be), `${C.w} → <b>${adj}</b> (주어 ${esc2(S.w)} = ${S.thing ? '느끼게 만드는 것' : '느끼는 사람'})`] }; } },
    { id: 'see-ing', sets: ['grammar'], group: GE, title: '주어 + see + 사람 + 동사-ing + 목적어', ex: 'I see Grandma cooking dinner.',
      cols: [cS, { ...fx('SEE', '보다', 'see'), fx: ['see', 'sees'] }, { k: 'P', label: '누가', from: 'obj', cats: ['people'], role: 'S' }, cVing, cO],
      rule: '<p><b>see + 사람 + 동사-ing</b> = 「…가 ~하고 있는 것을 보다」. <b>-ing 가 사람을 꾸며서</b> 「~하고 있는 (사람)」이 돼요(현재분사).</p><p>I see Grandma <b>cooking</b> dinner = 할머니가 저녁을 요리하고 계신 게 보여요. 3인칭 단수 주어면 <b>sees</b>.</p>',
      make: ({ S, P, V, O }) => { const see = Inflect.verb(S, { v: 'see' }), ing = Inflect.ing(V); return { parts: [S.w, see, P.w, ing, O.w], notes: [nS(S, { v: 'see' }, see), nIng(V, ing)] }; } },
  );

  COMBO_PATTERNS.push(...P);
  Combo.groupOrder = Combo.groupOrder || {}; Combo.groupOrder.grammar = [GA, GB, GC, GD, GE];
})();

if (typeof module !== 'undefined') module.exports = {};
