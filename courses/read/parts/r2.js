// courses/read/parts/r2.js — 읽기 챕터 2 「짧은 글」 (레슨 R5~R8 + 보스 RB2). 지문은 전부 직접 지은 글. 스키마는 courses/basic/content.js 맨 위 주석
{
const T5 = `<div class="tip">💬 <b>Mina</b>: Hi Tom! Are we still meeting at six tonight?<br>
💬 <b>Tom</b>: Yes! But can we meet at the Italian place instead? The noodle shop is closed today.<br>
💬 <b>Mina</b>: Sure. Where is it again?<br>
💬 <b>Tom</b>: It's next to the flower shop on Main Street.<br>
💬 <b>Mina</b>: Got it. I'm leaving work a little late, so I might be ten minutes late.<br>
💬 <b>Tom</b>: No problem. I'll get a table by the window.<br>
💬 <b>Mina</b>: Thanks! See you soon.</div>`;
const T6 = `<div class="tip">📢 <b>NOTICE TO ALL RESIDENTS</b><br>
The water will be turned off on Thursday, May 14, from 9 a.m. to 3 p.m. Workers need to fix a pipe in the basement. Please fill some bottles with water before 9 a.m. The elevator will also stop for one hour, from 1 to 2 p.m. If you need help carrying anything, please call the front office. We are sorry for the trouble, and thank you for your patience.<br>
<i>— Building Management</i></div>`;
const T7 = `<div class="tip">✉️ <b>Subject:</b> Meeting on Friday<br><br>
Hi Daniel,<br>
I hope you are doing well. I'm writing about our meeting on Friday. I'm sorry, but I have to visit a client that afternoon. Could we move the meeting to Monday morning instead? I'm free from 9 to 11. I will also send you the sales report before then, so you can read it first. Please let me know what time works for you.<br><br>
Best regards,<br>Jisoo</div>`;
const T8 = `<div class="tip">🍲 <b>★★★★☆ Great soup, slow service</b><br>
I visited this small restaurant with my parents last Saturday. The tomato soup was rich and warm, and the bread was fresh from the oven. The prices were fair, too. However, the service was very slow. We waited almost forty minutes for our main dishes. If you are not in a hurry, I recommend this place.<br><br>
🎧 <b>★★☆☆☆ Wireless earbuds</b><br>
The sound is clear, but the battery only lasts about two hours. Also, the left earbud often falls out when I run. I would not buy them again.</div>`;
const TB2 = `<div class="tip">✉️ <b>Subject:</b> Your booking is confirmed<br><br>
Dear Ms. Kim,<br>
Thank you for choosing Harbor View Hotel. Your booking is confirmed.<br>
• Check-in: Friday, October 9 (after 3 p.m.)<br>
• Check-out: Sunday, October 11 (before 11 a.m.)<br>
• Room: Double room with a sea view, 2 nights<br>
• Breakfast: included (7 to 10 a.m., second floor)<br>
Free parking is available for hotel guests. If you will arrive after 10 p.m., please tell us in advance. You can cancel for free until three days before check-in.<br>
We look forward to welcoming you.<br>
<i>Harbor View Hotel</i></div>`;
const R = '글을 읽고 답하세요.';

CHAPTERS.push(
  { n: 2, title: '짧은 글', icon: '📰', desc: '문자·안내문·이메일·리뷰 — 생활 속 짧은 글을 읽어요' },
);
LESSONS.push(
  { id: 'R5', ch: 2, n: 1, title: '문자 메시지', minutes: 6,
    pages: [
      { title: '문자는 짧고, 주어가 자주 빠져요', html: '<p>문자 메시지는 말하듯 짧게 써요. <b>Got it.</b>(알겠어), <b>See you soon.</b>(곧 봐)처럼 주어 I 를 빼는 일이 많아요. 낯선 표현이 나와도 <b>앞뒤 대화</b>로 뜻을 짐작해요.</p>',
        ex: [{ en: 'Are|we|still meeting|at six|tonight?', roles: 'Q S V M M', ko: '우리 오늘 저녁 6시에 아직 만나는 거 맞지?', note: '<b>Are we ... meeting</b> = 정해 둔 약속을 물을 때 써요.' }, { en: "I'm leaving|work|a little late.", ko: '회사에서 좀 늦게 나가.' }, { en: 'No problem.', ko: '괜찮아.' }] },
      { title: '읽어 봐요: 저녁 약속', html: '<p>미나와 톰이 주고받은 문자예요. <b>언제·어디서·누가 무엇을</b> 하기로 했는지 찾으며 읽어 보세요.</p>' + T5,
        ex: [{ en: "It's|next to the flower shop|on Main Street.", ko: '메인 거리에 있는 꽃집 옆이야.', note: "It's = It is. 주어 It 과 동사 is 가 붙었어요." }, { en: "I'll get|a table|by the window.", ko: '창가 자리를 잡아 둘게.' }],
        tip: '「장소가 바뀌었다」, 「늦을지도 모른다」처럼 계획이 바뀌는 문장이 문자에서 제일 중요해요.' },
    ],
    summary: ['문자는 짧고 주어가 자주 빠져요: <b>Got it. See you soon.</b>', '<b>instead</b> = 대신, <b>might</b> = ~할지도 몰라.', '약속 문자에서는 <b>시간·장소·바뀐 점</b>을 먼저 찾아요.'] },
  { id: 'R6', ch: 2, n: 2, title: '공지·안내문', minutes: 6,
    pages: [
      { title: '공지는 「무엇이 · 언제 · 그래서 나는?」', html: '<p>공지문은 <b>무슨 일이</b>(물이 끊긴다), <b>언제</b>(목요일 9시~3시), <b>그래서 내가 할 일</b>(물을 받아 둔다) 순서로 읽으면 빨라요. <b>will be turned off</b>(꺼질 거예요)처럼 「~되다」 모양이 자주 나와요.</p>',
        ex: [{ en: 'The water|will be turned off|on Thursday.', roles: 'S V M', ko: '목요일에 물이 끊길 거예요.' }, { en: 'Workers|need to fix|a pipe|in the basement.', roles: 'S V O M', ko: '작업자들이 지하실 배관을 고쳐야 해요.' }] },
      { title: '읽어 봐요: 아파트 단수 공지', html: '<p>아파트 엘리베이터에 붙은 공지예요. 내가 <b>몇 시 전에 무엇을</b> 해야 하는지 찾아보세요.</p>' + T6,
        ex: [{ en: 'Please fill|some bottles|with water|before 9 a.m.', roles: 'V O M M', ko: '오전 9시 전에 병에 물을 받아 두세요.' }, { en: 'We|are|sorry|for the trouble.', roles: 'S V C M', ko: '불편을 드려 죄송합니다.' }] },
    ],
    summary: ['공지는 <b>무슨 일 → 언제 → 내가 할 일</b> 순서로 읽어요.', '<b>will be turned off</b> = 꺼질 거예요 (「~되다」 모양).', '<b>Please + 동사</b> 문장이 내가 할 일이에요.'] },
  { id: 'R7', ch: 2, n: 3, title: '짧은 이메일', minutes: 7,
    pages: [
      { title: '이메일의 뼈대', html: '<p>짧은 업무 이메일은 거의 같은 뼈대예요.</p><table><tr><td>인사</td><td>Hi Daniel, / I hope you are doing well.</td></tr><tr><td>목적</td><td>I\'m writing about ...</td></tr><tr><td>부탁</td><td>Could we ...? / Could you ...?</td></tr><tr><td>마무리</td><td>Please let me know ... / Best regards,</td></tr></table><p><b>I\'m writing about</b> 바로 뒤가 이메일의 주제예요.</p>',
        ex: [{ en: "I'm writing|about our meeting|on Friday.", ko: '금요일 회의 건으로 연락드려요.' }, { en: 'Could|we|move|the meeting|to Monday morning?', roles: 'Q S V O M', ko: '회의를 월요일 오전으로 옮길 수 있을까요?' }] },
      { title: '읽어 봐요: 회의 날짜 바꾸기', html: '<p>지수가 동료 다니엘에게 보낸 이메일이에요. <b>왜</b> 썼는지, <b>무엇을 부탁</b>하는지 찾아보세요.</p>' + T7,
        ex: [{ en: 'Please let|me|know|what time|works|for you.', roles: 'V O V S V M', ko: '몇 시가 편하신지 알려 주세요.' }],
        tip: '<b>I\'m sorry, but ...</b> 다음에는 거의 항상 「안 되는 이유」가 나와요.' },
    ],
    summary: ['<b>I\'m writing about</b> 뒤 = 이메일의 주제.', '<b>Could we / Could you ...?</b> = 정중한 부탁.', '<b>Please let me know</b> = 답장해 달라는 말.'] },
  { id: 'R8', ch: 2, n: 4, title: '리뷰 (식당·제품)', minutes: 7,
    pages: [
      { title: '좋은 점 → However → 아쉬운 점', html: '<p>리뷰는 보통 <b>좋은 점</b>과 <b>아쉬운 점</b>이 함께 나와요. 둘을 가르는 신호는 <b>but</b>, <b>However</b>(하지만)예요. 마지막 문장에는 <b>추천하는지</b>가 나오는 경우가 많아요.</p>',
        ex: [{ en: 'The soup|was|rich and warm.', roles: 'S V C', ko: '수프는 진하고 따뜻했어요.' }, { en: 'However,|the service|was|very slow.', roles: 'J S V C', ko: '하지만 서비스가 아주 느렸어요.' }, { en: 'I|recommend|this place.', roles: 'S V O', ko: '이곳을 추천해요.' }] },
      { title: '읽어 봐요: 식당 리뷰와 이어폰 리뷰', html: '<p>별점과 제목을 먼저 보고, 본문에서 <b>칭찬</b>과 <b>불만</b>을 나눠 찾아보세요.</p>' + T8,
        ex: [{ en: 'The sound|is|clear,|but|the battery|only lasts|about two hours.', roles: 'S V C J S V M', ko: '소리는 깨끗한데 배터리가 두 시간 정도밖에 안 가요.' }, { en: 'I|would not buy|them|again.', roles: 'S V O M', ko: '다시는 안 살 거예요.' }] },
    ],
    summary: ['리뷰는 <b>좋은 점 + 아쉬운 점</b>.', '<b>but / However</b> 뒤에서 분위기가 바뀌어요.', '마지막 문장에서 <b>추천 여부</b>를 확인해요.'] },
  { id: 'RB2', ch: 2, boss: true, title: '호텔 예약 확인 메일 읽고 답하기', minutes: 8,
    pages: [
      { title: '상황: 여행 전, 호텔에서 온 메일', html: '<p>다음 달 바닷가 여행을 위해 호텔을 예약했어요. 확인 메일이 왔는데, <b>체크인 시간·조식·취소 규칙</b>을 확인하고 호텔에 답장해야 해요.</p>' + TB2 },
      { title: '답장에 쓸 표현', html: '<p>답장은 짧게: <b>감사 → 내 상황 → 질문</b>. 정중한 질문은 <b>Could I ...?</b>, <b>Is ... ?</b> 로 시작해요.</p>',
        ex: [{ en: 'Thank you|for the confirmation.', roles: 'V M', ko: '확인 메일 감사합니다.' }, { en: 'We|will arrive|at around 11 p.m.|on Friday.', roles: 'S V M M', ko: '저희는 금요일 밤 11시쯤 도착할 거예요.' }, { en: 'Could|I|check out|at noon?', roles: 'Q S V M', ko: '정오에 체크아웃해도 될까요?' }] },
    ],
    summary: ['확인 메일은 <b>날짜·시간·포함 사항·규칙</b>을 표처럼 읽어요.', '<b>in advance</b> = 미리, <b>for free</b> = 무료로.', '답장: <b>감사 → 내 상황 → 정중한 질문(Could I ...?)</b>.'] },
);
PROBLEMS.push(
  // R5 문자 메시지
  { id: 'R5P1', lesson: 'R5', type: 'choice', prompt: R + T5, q: '두 사람은 몇 시에 만나기로 했나요?', opts: ['6시', '7시', '10시'], ans: 0, tags: ['문자', '세부 내용'], hints: ['첫 문자를 보세요', 'at six tonight', '6시'], why: 'Are we still meeting at six tonight? — 오늘 저녁 6시예요. ten 은 늦는 시간(10분)이에요.' },
  { id: 'R5P2', lesson: 'R5', type: 'choice', prompt: R + T5, q: '만나는 장소를 왜 바꿨나요?', opts: ['국숫집이 오늘 문을 닫아서', '미나가 국수를 싫어해서', '이탈리아 식당이 더 가까워서'], ans: 0, tags: ['문자', '이유'], hints: ['Tom 의 첫 문자', 'The noodle shop is closed today.', '국숫집이 오늘 문을 닫아서'], why: 'The noodle shop is closed today. — 국숫집이 오늘 쉬어요.' },
  { id: 'R5P3', lesson: 'R5', type: 'choice', prompt: R + T5, q: '톰은 먼저 가서 무엇을 할까요?', opts: ['창가 자리를 잡아요', '꽃을 사요', '미나를 데리러 가요'], ans: 0, tags: ['문자', '세부 내용'], hints: ["Tom 의 마지막 문자", "I'll get a table by the window.", '창가 자리를 잡아요'], why: "I'll get a table by the window. — 창가 자리를 잡아 둘게." },
  { id: 'R5P4', lesson: 'R5', type: 'match', prompt: '문자 속 표현과 뜻을 짝 지으세요.', pairs: [['Got it.', '알겠어.'], ['No problem.', '괜찮아.'], ['See you soon.', '곧 봐.'], ['I might be ten minutes late.', '10분쯤 늦을지도 몰라.']], tags: ['문자 표현'], hints: ['Got = 받았다 → 알아들었다', 'might = ~할지도 몰라', 'See you soon. = 곧 봐.'] },
  { id: 'R5P5', lesson: 'R5', type: 'order', prompt: '톰의 문자를 덩어리 카드로 다시 만드세요. 필요 없는 카드도 있어요.', ko: '메인 거리에 있는 꽃집 옆이야.', answer: ["It's next to the flower shop on Main Street.", 'It is next to the flower shop on Main Street.'], cards: ["It's", 'next to the flower shop', 'on Main Street.'], distractors: ['in front of'], tags: ['문자', '전치사구'], hints: ["It's 로 시작", 'next to = ~ 옆에', "It's next to the flower shop on Main Street."] },
  { id: 'R5P6', lesson: 'R5', type: 'fill', prompt: '미나의 문자를 완성하세요.', text: "I'm leaving work a little late, ___ I might be ten minutes late.", blanks: [{ a: ['so'], opt: ['so', 'but', 'because'] }], tags: ['연결어'], hints: ['늦게 나가요 → (그래서) 늦을지도 몰라요', '결과를 잇는 말', 'so'], why: '앞이 원인, 뒤가 결과라서 so(그래서).' },
  { id: 'R5P7', lesson: 'R5', type: 'type', prompt: '톰처럼 답해 보세요. 영어로 쓰세요.', ko: '창가 자리를 잡아 둘게.', answer: ["I'll get a table by the window.", 'I will get a table by the window.', "I'll get us a table by the window.", "I'll get a table near the window.", "I'll get a window table.", "I'll get a window seat."], tags: ['문자 표현'], hints: ["I'll get ~ = ~를 잡아 둘게", 'a table / by the window', "I'll get a table by the window."] },
  { id: 'R5P8', lesson: 'R5', type: 'dictation', prompt: '🔊 듣고 그대로 쓰세요.', say: 'Are we still meeting at six tonight?', tags: ['받아쓰기'], hints: ['Are we / still meeting', 'at six / tonight', 'Are we still meeting at six tonight?'] },

  // R6 공지·안내문
  { id: 'R6P1', lesson: 'R6', type: 'choice', prompt: R + T6, q: '이 공지는 누구에게 쓴 글인가요?', opts: ['아파트 주민 모두', '배관 작업자', '관리 사무소 직원'], ans: 0, tags: ['공지', '중심 내용'], hints: ['제목을 보세요', 'ALL RESIDENTS = 모든 주민', '아파트 주민 모두'], why: 'NOTICE TO ALL RESIDENTS — 모든 주민에게 알리는 글이에요.' },
  { id: 'R6P2', lesson: 'R6', type: 'choice', prompt: R + T6, q: '물은 언제 안 나오나요?', opts: ['목요일 오전 9시~오후 3시', '목요일 오후 1시~2시', '목요일 하루 종일'], ans: 0, tags: ['공지', '세부 내용'], hints: ['첫 문장', 'from 9 a.m. to 3 p.m.', '목요일 오전 9시~오후 3시'], why: '1시~2시는 엘리베이터가 멈추는 시간이에요. 물은 9시~3시.' },
  { id: 'R6P3', lesson: 'R6', type: 'choice', prompt: R + T6, q: '주민이 오전 9시 전에 해 두면 좋은 일은?', opts: ['병에 물을 받아 두기', '관리 사무소에 전화하기', '지하실 문 열어 두기'], ans: 0, tags: ['공지', '할 일'], hints: ['Please 로 시작하는 문장', 'fill some bottles with water', '병에 물을 받아 두기'], why: 'Please fill some bottles with water before 9 a.m.' },
  { id: 'R6P4', lesson: 'R6', type: 'choice', prompt: R + T6, q: 'Why will the water be turned off?', opts: ['Workers need to fix a pipe.', 'The elevator is broken.', 'The building is closed.'], ans: 0, sayOpts: true, tags: ['공지', '이유'], hints: ['둘째 문장', 'fix a pipe = 배관을 고치다', 'Workers need to fix a pipe.'], why: 'Workers need to fix a pipe in the basement. — 배관 공사 때문이에요.' },
  { id: 'R6P5', lesson: 'R6', type: 'order', prompt: '공지 문장을 덩어리 카드로 다시 만드세요. 필요 없는 카드도 있어요.', ko: '엘리베이터도 한 시간 동안 멈출 거예요.', answer: ['The elevator will also stop for one hour.', 'The elevator will also stop for an hour.'], cards: ['The elevator', 'will also stop', 'for one hour.'], distractors: ['will also stops'], tags: ['공지', '동사 덩어리'], hints: ['주어 = The elevator', 'will 다음엔 동사 원래 모양', 'The elevator will also stop for one hour.'] },
  { id: 'R6P6', lesson: 'R6', type: 'fill', prompt: '공지 문장을 완성하세요.', text: 'Please fill some bottles with water ___ 9 a.m.', blanks: [{ a: ['before'], opt: ['before', 'after', 'until'] }], tags: ['공지'], hints: ['물이 끊기기 「전에」', '~ 전에 = before', 'before'], why: '9시부터 물이 끊기니 그 전에(before) 받아 둬야 해요.' },
  { id: 'R6P7', lesson: 'R6', type: 'type', prompt: '공지의 마지막 인사를 영어로 써 보세요.', ko: '불편을 드려 죄송합니다.', answer: ['We are sorry for the trouble.', "We're sorry for the trouble.", 'We are sorry for the inconvenience.', 'Sorry for the trouble.', 'We apologize for the trouble.', 'We apologize for the inconvenience.'], tags: ['공지 표현'], hints: ['We are sorry ~', 'for the trouble = 불편에 대해', 'We are sorry for the trouble.'] },
  { id: 'R6P8', lesson: 'R6', type: 'dictation', prompt: '🔊 듣고 그대로 쓰세요.', say: 'Workers need to fix a pipe in the basement.', tags: ['받아쓰기'], hints: ['Workers / need to fix', 'a pipe / in the basement', 'Workers need to fix a pipe in the basement.'] },

  // R7 짧은 이메일
  { id: 'R7P1', lesson: 'R7', type: 'choice', prompt: R + T7, q: '지수가 이메일을 쓴 목적은?', opts: ['회의 날짜를 바꾸려고', '보고서를 칭찬하려고', '고객을 소개하려고'], ans: 0, tags: ['이메일', '목적'], hints: ["I'm writing about ~ 과 Could we ~? 를 보세요", 'move the meeting to Monday', '회의 날짜를 바꾸려고'], why: 'Could we move the meeting to Monday morning instead? — 회의를 옮기자는 메일이에요.' },
  { id: 'R7P2', lesson: 'R7', type: 'choice', prompt: R + T7, q: '지수는 금요일 오후에 무엇을 해야 하나요?', opts: ['고객을 방문해요', '보고서를 써요', '휴가를 가요'], ans: 0, tags: ['이메일', '이유'], hints: ["I'm sorry, but ~ 뒤", 'visit a client = 고객을 방문하다', '고객을 방문해요'], why: 'I have to visit a client that afternoon.' },
  { id: 'R7P3', lesson: 'R7', type: 'choice', prompt: R + T7, q: '다니엘이 회의 전에 받게 될 것은?', opts: ['판매 보고서', '회의실 예약표', '고객 연락처'], ans: 0, tags: ['이메일', '세부 내용'], hints: ['I will also send you ~', 'the sales report', '판매 보고서'], why: 'I will also send you the sales report before then.' },
  { id: 'R7P4', lesson: 'R7', type: 'match', prompt: '이메일 표현과 뜻을 짝 지으세요.', pairs: [["I'm writing about our meeting.", '회의 건으로 연락드려요.'], ['Could we move the meeting?', '회의를 옮길 수 있을까요?'], ['Please let me know.', '알려 주세요.'], ['I hope you are doing well.', '잘 지내시죠?']], tags: ['이메일 표현'], hints: ["I'm writing about = ~에 관해 써요", 'Could we ~? = 정중한 부탁', 'Please let me know. = 알려 주세요.'] },
  { id: 'R7P5', lesson: 'R7', type: 'order', prompt: '지수의 부탁을 덩어리 카드로 만드세요. 필요 없는 카드도 있어요.', ko: '회의를 월요일 오전으로 옮길 수 있을까요?', answer: ['Could we move the meeting to Monday morning?'], cards: ['Could we', 'move', 'the meeting', 'to Monday morning?'], distractors: ['moves'], tags: ['이메일', '부탁'], hints: ['Could we 로 시작', 'move the meeting / to ~', 'Could we move the meeting to Monday morning?'] },
  { id: 'R7P6', lesson: 'R7', type: 'fill', prompt: '이메일 문장을 완성하세요.', text: "I'm sorry, ___ I have to visit a client that afternoon.", blanks: [{ a: ['but'], opt: ['but', 'so', 'and'] }], tags: ['연결어'], hints: ["I'm sorry, ___ + 안 되는 이유", '「죄송하지만」', 'but'], why: "I'm sorry, but ... = 죄송하지만 ... (거절·사정 설명)." },
  { id: 'R7P7', lesson: 'R7', type: 'type', prompt: '이메일 마무리 문장을 영어로 써 보세요.', ko: '몇 시가 편하신지 알려 주세요.', answer: ['Please let me know what time works for you.', 'Let me know what time works for you.', 'Please let me know what time is good for you.', 'Please tell me what time works for you.', 'Please let me know when works for you.', 'Please let me know what time is best for you.'], tags: ['이메일 표현'], hints: ['Please let me know ~', 'what time works for you', 'Please let me know what time works for you.'] },
  { id: 'R7P8', lesson: 'R7', type: 'dictation', prompt: '🔊 듣고 그대로 쓰세요.', say: "I'm writing about our meeting on Friday.", tags: ['받아쓰기'], hints: ["I'm writing / about our meeting", 'on Friday', "I'm writing about our meeting on Friday."] },

  // R8 리뷰
  { id: 'R8P1', lesson: 'R8', type: 'choice', prompt: R + T8, q: '식당 리뷰에서 칭찬하지 않은 것은?', opts: ['빠른 서비스', '토마토 수프', '갓 구운 빵'], ans: 0, tags: ['리뷰', '세부 내용'], hints: ['However 뒤를 보세요', 'the service was very slow', '빠른 서비스'], why: '서비스는 아주 느렸다(very slow)고 했어요.' },
  { id: 'R8P2', lesson: 'R8', type: 'choice', prompt: R + T8, q: '메인 요리를 얼마나 기다렸나요?', opts: ['40분 가까이', '14분쯤', '4시간'], ans: 0, tags: ['리뷰', '숫자'], hints: ['We waited ~', 'almost forty minutes', '40분 가까이'], why: 'almost forty minutes = 거의 40분.' },
  { id: 'R8P3', lesson: 'R8', type: 'choice', prompt: R + T8, q: '식당 리뷰를 쓴 사람은 어떤 손님에게 추천하나요?', opts: ['급하지 않은 사람', '빨리 먹고 싶은 사람', '혼자 온 사람'], ans: 0, tags: ['리뷰', '추천'], hints: ['마지막 문장', 'not in a hurry = 서두르지 않는', '급하지 않은 사람'], why: 'If you are not in a hurry, I recommend this place.' },
  { id: 'R8P4', lesson: 'R8', type: 'choice', prompt: R + T8, q: '이어폰 리뷰를 쓴 사람의 생각은?', opts: ['다시는 사지 않겠다', '소리가 나빠서 실망했다', '배터리가 오래가서 만족한다'], ans: 0, tags: ['리뷰', '의견'], hints: ['마지막 문장', 'I would not buy them again.', '다시는 사지 않겠다'], why: '소리는 깨끗하지만 배터리·착용감이 나빠서 다시 안 산대요.' },
  { id: 'R8P5', lesson: 'R8', type: 'order', prompt: '이어폰 리뷰 문장을 덩어리 카드로 만드세요. 필요 없는 카드도 있어요.', ko: '소리는 깨끗한데 배터리가 두 시간 정도밖에 안 가요.', answer: ['The sound is clear, but the battery only lasts about two hours.'], cards: ['The sound is clear,', 'but', 'the battery', 'only lasts', 'about two hours.'], distractors: ['only last'], tags: ['리뷰', '연결어'], hints: ['좋은 점 / but / 아쉬운 점', 'battery 는 하나 → lasts', 'The sound is clear, but the battery only lasts about two hours.'] },
  { id: 'R8P6', lesson: 'R8', type: 'fill', prompt: '리뷰 문장을 완성하세요.', text: 'If you are not in a ___, I recommend this place.', blanks: [{ a: ['hurry'], opt: ['hurry', 'hour', 'hungry'] }], tags: ['리뷰 표현'], hints: ['in a ___ = 서두르는', '느린 서비스와 이어져요', 'hurry'], why: 'in a hurry = 급한, 서두르는. 서비스가 느리니 급하지 않으면 추천한대요.' },
  { id: 'R8P7', lesson: 'R8', type: 'type', prompt: '리뷰 한 줄을 영어로 써 보세요.', ko: '하지만 서비스가 아주 느렸어요.', answer: ['However, the service was very slow.', 'But the service was very slow.', 'However, the service was really slow.', 'But the service was really slow.', 'The service was very slow, though.'], tags: ['리뷰 표현'], hints: ['However, 로 시작해요', 'the service / was / very slow', 'However, the service was very slow.'] },
  { id: 'R8P8', lesson: 'R8', type: 'dictation', prompt: '🔊 듣고 그대로 쓰세요.', say: 'We waited almost forty minutes for our main dishes.', tags: ['받아쓰기'], hints: ['We waited / almost forty minutes', 'for our main dishes', 'We waited almost forty minutes for our main dishes.'] },

  // RB2 보스: 호텔 예약 확인
  { id: 'RB2P1', lesson: 'RB2', type: 'choice', boss: true, prompt: '호텔에서 온 메일을 읽어요.' + TB2, q: '언제부터 체크인할 수 있나요?', opts: ['금요일 오후 3시 이후', '금요일 오전 11시 전', '일요일 오후 3시 이후'], ans: 0, tags: ['이메일', '세부 내용'], hints: ['Check-in 줄', 'Friday, October 9 (after 3 p.m.)', '금요일 오후 3시 이후'], why: 'Check-in: Friday, October 9 (after 3 p.m.)' },
  { id: 'RB2P2', lesson: 'RB2', type: 'choice', boss: true, prompt: '조식을 먹으러 가요.' + TB2, q: '조식은 언제, 어디서 먹나요?', opts: ['7~10시, 2층', '7~10시, 1층', '조식은 따로 돈을 내야 해요'], ans: 0, tags: ['이메일', '세부 내용'], hints: ['Breakfast 줄', 'included / second floor', '7~10시, 2층'], why: 'Breakfast: included (7 to 10 a.m., second floor) — 포함, 2층.' },
  { id: 'RB2P3', lesson: 'RB2', type: 'choice', boss: true, prompt: '비행기가 늦어서 밤 11시에 도착할 것 같아요.' + TB2, q: '어떻게 해야 하나요?', opts: ['호텔에 미리 알려야 해요', '예약이 자동으로 취소돼요', '다음 날 체크인해야 해요'], ans: 0, tags: ['이메일', '규칙'], hints: ['If you will arrive after 10 p.m.', 'in advance = 미리', '호텔에 미리 알려야 해요'], why: 'If you will arrive after 10 p.m., please tell us in advance.' },
  { id: 'RB2P4', lesson: 'RB2', type: 'choice', boss: true, prompt: '혹시 몰라 취소 규칙도 확인해요.' + TB2, q: '무료로 취소할 수 있는 마지막 날은?', opts: ['10월 6일', '10월 8일', '무료 취소는 안 돼요'], ans: 0, tags: ['이메일', '규칙'], hints: ['until three days before check-in', '체크인 10월 9일의 3일 전', '10월 6일'], why: '체크인(10월 9일) 3일 전까지 = 10월 6일.' },
  { id: 'RB2P5', lesson: 'RB2', type: 'order', boss: true, prompt: '답장을 써요. 덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '저희는 금요일 밤 11시쯤 도착할 거예요.', answer: ['We will arrive at around 11 p.m. on Friday.', "We'll arrive at around 11 p.m. on Friday."], cards: ['We', 'will arrive', 'at around 11 p.m.', 'on Friday.'], distractors: ['will arrives'], tags: ['답장', '동사 덩어리'], hints: ['누가 → 한다 → 몇 시 → 무슨 요일', 'will 다음엔 동사 원래 모양', 'We will arrive at around 11 p.m. on Friday.'] },
  { id: 'RB2P6', lesson: 'RB2', type: 'fill', boss: true, prompt: '주차도 확인하려고 답장에 질문을 넣어요. 빈칸을 채우세요.', text: 'Is parking free ___ hotel guests?', blanks: [{ a: ['for'], opt: ['for', 'to', 'at'] }], tags: ['답장', '전치사구'], hints: ['메일의 Free parking 문장을 보세요', '~에게(~을 위해) 무료', 'for'], why: 'Free parking is available for hotel guests. — 투숙객을 위해(for) 무료예요.' },
  { id: 'RB2P7', lesson: 'RB2', type: 'type', boss: true, prompt: '체크아웃을 조금 늦추고 싶어요. 정중하게 영어로 물어보세요.', ko: '정오에 체크아웃해도 될까요?', answer: ['Could I check out at noon?', 'Can I check out at noon?', 'May I check out at noon?', 'Could I check out at 12?', 'Can I check out at 12?', 'Is it possible to check out at noon?'], tags: ['답장', '부탁'], hints: ['Could I ~? = ~해도 될까요?', 'check out / at noon', 'Could I check out at noon?'] },
  { id: 'RB2P8', lesson: 'RB2', type: 'speak', boss: true, prompt: '🔊 답장 마지막 문장을 소리 내어 말해 보세요.', say: 'Thank you for the confirmation.', ko: '확인 메일 감사합니다.', tags: ['말하기'], hints: ['Thank you / for the confirmation', 'confirmation 은 「컨퍼메이션」, 강세는 메이', 'Thank you for the confirmation.'] },
);
}
