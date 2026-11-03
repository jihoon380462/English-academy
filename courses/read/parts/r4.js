// courses/read/parts/r4.js — 읽기 챕터 4 「생활 속 영어 문서」 (레슨 R13~R16 + 보스 RB4). 메뉴판·표지판·영수증·앱 알림 — 지문은 전부 직접 지은 글(가게·앱 이름도 가상). 스키마는 courses/basic/content.js 맨 위 주석
{
const T13 = `<div class="tip">☕ <b>SUNNY CORNER CAFE — MENU</b><br>
<b>DRINKS</b> (Small / Large)<br>
Americano ........ $3.00 / $3.50<br>
Cafe latte ........ $3.50 / $4.00<br>
Hot chocolate ........ $3.50 / $4.00<br>
Fresh orange juice ........ $4.50 (one size only)<br>
<b>FOOD</b><br>
Egg and cheese sandwich ........ $6.00<br>
Chicken salad ........ $8.50<br>
Tomato soup 🌱 ........ $5.00 (served with bread)<br>
Blueberry muffin 🌱 ........ $2.50<br>
🌱 = vegetarian<br>
* Oat milk or soy milk: +$0.50<br>
* Lunch set (11 a.m.–2 p.m.): any sandwich or soup + a small drink = $8.00<br>
* Free refills on Americano for dine-in guests</div>`;
const T14 = `<div class="tip">🚧 <b>Signs around town</b><br>
① <b>WET FLOOR</b> — Please walk carefully.<br>
② <b>STAFF ONLY</b> — No entry for visitors.<br>
③ <b>KEEP OUT</b> — Construction area. Hard hats required.<br>
④ <b>PLEASE DO NOT FEED THE BIRDS.</b><br>
⑤ <b>CAUTION: HOT SURFACE</b> — Do not touch.<br>
⑥ <b>NO PARKING</b> 8 a.m.–6 p.m., Mon–Fri. Cars will be towed.<br>
⑦ <b>STAND ON THE RIGHT.</b> Walk on the left.<br>
⑧ <b>IN CASE OF FIRE</b>, use the stairs. Do not use the elevator.</div>`;
const T15A = `<div class="tip">🧾 <b>GREEN MART</b> — 06/12 18:42<br>
Milk 1L ........ 2.40<br>
Bread ........ 3.10<br>
Apples (x4) ........ 4.00<br>
Dish soap ........ 5.50<br>
&nbsp;&nbsp;Discount (dish soap) ........ -1.50<br>
<b>TOTAL ........ 13.50</b><br>
Paid by CARD ........ 13.50<br>
Items: 7 · You saved $1.50 today!<br>
Returns accepted within 14 days with this receipt.</div>`;
const T15B = `<div class="tip">📅 <b>Booking Confirmed — Maple Yoga Studio</b><br>
Hi Jisoo, you're booked!<br>
• Class: Beginner Yoga<br>
• Dates: every Tuesday and Thursday, June 3 – June 26<br>
• Time: 7:00 – 8:00 p.m.<br>
• Room: Studio B (3rd floor)<br>
Please arrive ten minutes early. Bring your own mat and a water bottle. Towels are provided.<br>
Need to cancel a class? Please cancel at least 24 hours before it starts, or it will count as attended.</div>`;
const T16 = `<div class="tip">📱 <b>Notifications</b><br>
🔔 <b>[BikeGo]</b> Your ride has ended. Time: 23 min. Cost: $1.30. Next time, please park in a bike zone to avoid a $5 fee.<br>
🔔 <b>[CloudBox]</b> Your storage is 90% full. Delete old files or upgrade to get more space.<br>
🔔 <b>[FitStep]</b> Great job! You walked 8,000 steps today. Only 2,000 more to reach your goal.<br>
🔔 <b>[My Bank]</b> A new device logged in to your account. Was this you? If not, change your password now.<br><br>
📄 <b>BikeGo Terms of Use — Summary</b><br>
• You must be 18 or older to use this service.<br>
• The first 10 minutes are free. After that, it costs $0.10 per minute.<br>
• You are responsible for the bike until you end the ride in the app.<br>
• If you leave the bike outside a bike zone, a $5 fee will be charged.<br>
• We may change these terms. We will tell you by email 7 days before any change.</div>`;
const TB4 = `<div class="tip">🏛️ <b>CITY HISTORY MUSEUM — Visitor Guide</b><br>
<b>Opening hours:</b> Tuesday–Sunday, 9:30 a.m. – 5:30 p.m. (last entry 4:45 p.m.). Closed on Mondays.<br>
<b>Tickets:</b> Adults $12 · Students (with ID) $8 · Children under 7 free<br>
Free entry for everyone on the first Sunday of every month.<br>
<b>Floor guide</b><br>
1F: Ticket desk, gift shop, cafe, lockers<br>
2F: The Old City (pottery, tools, old maps)<br>
3F: The Modern City (photos, old trams, a street from the 1950s)<br>
Rooftop: Garden with a view of the river (closes at 5 p.m.)<br>
<b>Free guided tours in English:</b> 11 a.m. and 2 p.m. (about 50 minutes). Meet at the ticket desk.<br>
<b>Please note:</b> Large bags must go in the lockers ($1 coin, returned). Photos are allowed, but no flash. No food or drinks in the galleries.</div>`;
const R = '글을 읽고 답하세요.';

CHAPTERS.push(
  { n: 4, title: '생활 속 영어 문서', icon: '🧾', desc: '메뉴판·표지판·영수증·예약 확인·앱 알림 — 필요한 정보만 빠르게 찾아 읽어요' },
);
LESSONS.push(
  { id: 'R13', ch: 4, n: 1, title: '메뉴판·가격표', minutes: 6,
    pages: [
      { title: '메뉴판은 「이름 …… 가격」 표예요', html: '<p>메뉴판은 문장이 거의 없고 <b>이름과 가격</b>만 줄지어 있어요. Small / Large 처럼 <b>빗금(/)</b>은 크기별 가격이에요. 진짜 중요한 정보는 맨 아래 <b>별표(*) 줄</b>에 숨어 있는 경우가 많아요 — 추가 요금, 세트, 무료 리필 같은 것들이요.</p>',
        ex: [{ en: 'Can|I|get|a large latte|with oat milk?', roles: 'Q S V O M', ko: '큰 사이즈 라테를 귀리 우유로 주실 수 있어요?' }, { en: 'Does|the soup|come|with bread?', roles: 'Q S V M', ko: '수프에 빵이 같이 나오나요?', note: '<b>come with</b> = (음식에) ~이 같이 나오다. 메뉴판의 <b>served with</b> 와 같은 뜻이에요.' }] },
      { title: '읽어 봐요: 카페 메뉴판', html: '<p>동네 카페 메뉴판이에요. 가격을 찾을 때는 <b>크기</b>를, 세트를 고를 때는 <b>시간</b>을 꼭 확인하세요.</p>' + T13,
        ex: [{ en: 'The lunch set|comes with|a small drink.', roles: 'S V O', ko: '점심 세트에는 작은 음료가 같이 나와요.' }, { en: 'Refills|are|free|for dine-in guests.', roles: 'S V C M', ko: '매장에서 드시는 손님은 리필이 무료예요.' }],
        tip: '🌱 같은 그림 기호는 맨 아래에 뜻이 적혀 있어요. 기호를 보면 먼저 「설명 줄」을 찾으세요.' },
    ],
    summary: ['메뉴판은 <b>이름 …… 가격</b>, 빗금(/)은 크기별 가격.', '<b>별표(*) 줄</b>에 추가 요금·세트·리필 정보가 있어요.', '<b>served with / comes with</b> = ~이 같이 나와요.'] },
  { id: 'R14', ch: 4, n: 2, title: '표지판·경고문·주의 문구', minutes: 6,
    pages: [
      { title: '표지판은 문장을 줄여 써요', html: '<p>표지판은 짧게 쓰려고 낱말을 많이 빼요.</p><table><tr><td><b>NO PARKING</b></td><td>= Parking is not allowed. (주차 금지)</td></tr><tr><td><b>STAFF ONLY</b></td><td>= Only staff can go in. (직원 전용)</td></tr><tr><td><b>Do not + 동사</b></td><td>~하지 마세요</td></tr><tr><td><b>CAUTION / WARNING</b></td><td>주의 / 경고</td></tr></table><p>시간·요일이 붙은 표지판은 <b>언제만</b> 금지인지 꼭 확인해요.</p>',
        ex: [{ en: 'Please walk|carefully.', roles: 'V M', ko: '조심해서 걸으세요.' }, { en: 'Do not touch|the hot surface.', roles: 'V O', ko: '뜨거운 표면을 만지지 마세요.' }, { en: 'Parking|is not allowed|here.', roles: 'S V M', ko: '여기는 주차가 안 돼요.' }] },
      { title: '읽어 봐요: 동네에서 본 표지판 8개', html: '<p>길·건물·역에서 볼 수 있는 표지판이에요. 각 표지판이 <b>무엇을 하지 말라는지 / 하라는지</b> 찾아보세요.</p>' + T14,
        ex: [{ en: 'In case of fire,|use|the stairs.', roles: 'M V O', ko: '불이 나면 계단을 이용하세요.' }, { en: 'Cars|will be towed.', roles: 'S V', ko: '차량은 견인됩니다.' }],
        tip: '<b>Mon–Fri</b> = 월~금. 토·일에는 그 규칙이 없다는 뜻이에요.' },
    ],
    summary: ['표지판은 낱말을 빼고 줄여 써요: <b>NO PARKING, STAFF ONLY</b>.', '<b>Do not + 동사</b> = ~하지 마세요, <b>CAUTION</b> = 주의.', '시간·요일이 붙으면 <b>그때만</b> 적용돼요.'] },
  { id: 'R15', ch: 4, n: 3, title: '영수증·예약 확인·일정표', minutes: 7,
    pages: [
      { title: '영수증은 숫자를 「맞춰 보며」 읽어요', html: '<p>영수증에서는 <b>TOTAL</b>(합계), <b>Discount</b>(할인), <b>Paid by</b>(결제 수단)을 먼저 봐요. 맨 아래 작은 글씨에는 <b>환불 규칙</b>이 자주 있어요. <b>within 14 days</b> = 14일 안에.</p>' + T15A,
        ex: [{ en: 'Returns|are accepted|within 14 days.', roles: 'S V M', ko: '14일 안에는 환불(반품)이 돼요.' }, { en: 'Can|I|get|a receipt,|please?', roles: 'Q S V O M', ko: '영수증 좀 주시겠어요?' }] },
      { title: '읽어 봐요: 요가 수업 예약 확인', html: '<p>예약 확인 메시지는 <b>무엇을 · 언제 · 어디서</b>가 목록(•)으로 나오고, 그 아래에 <b>준비물과 규칙</b>이 와요. 일정표의 <b>every Tuesday and Thursday</b> 는 「매주 화·목」이에요.</p>' + T15B,
        ex: [{ en: 'Please arrive|ten minutes|early.', roles: 'V M M', ko: '10분 일찍 와 주세요.' }, { en: 'Towels|are provided.', roles: 'S V', ko: '수건은 제공돼요.' }],
        tip: '<b>or it will count as ...</b> = 안 그러면 ~로 처리돼요. 규칙을 어겼을 때의 결과예요.' },
    ],
    summary: ['영수증: <b>TOTAL · Discount · Paid by</b> → 맨 아래 환불 규칙.', '예약 확인: <b>무엇·언제·어디서</b> 목록 → 준비물·규칙.', '<b>at least 24 hours before</b> = 적어도 24시간 전에.'] },
  { id: 'R16', ch: 4, n: 4, title: '앱 알림·이용 약관 요약', minutes: 7,
    pages: [
      { title: '알림은 「무슨 일 → 내가 할 일」', html: '<p>앱 알림은 한두 줄이에요. 앞부분은 <b>무슨 일이 생겼는지</b>, 뒷부분은 <b>내가 할 일</b>(명령문)이에요. <b>Was this you?</b>(본인이 맞나요?)가 보이면 보안 알림이니 꼭 확인해요.</p>',
        ex: [{ en: 'Your storage|is|90% full.', roles: 'S V C', ko: '저장 공간이 90% 찼어요.' }, { en: 'Change|your password|now.', roles: 'V O M', ko: '지금 비밀번호를 바꾸세요.' }] },
      { title: '읽어 봐요: 알림 4개와 약관 요약', html: '<p>약관 요약에서는 <b>must</b>(꼭 ~해야 해요), <b>will be charged</b>(요금이 붙어요), <b>may</b>(~할 수도 있어요)가 핵심 낱말이에요. 알림과 약관을 <b>서로 맞춰 보며</b> 읽어 보세요.</p>' + T16,
        ex: [{ en: 'You|must be|18 or older.', roles: 'S V C', ko: '18세 이상이어야 해요.' }, { en: 'The first 10 minutes|are|free.', roles: 'S V C', ko: '처음 10분은 무료예요.' }],
        tip: '약관의 <b>You are responsible for ...</b> = ~는 당신 책임이에요. 문제가 생기면 누가 책임지는지 알려 주는 문장이에요.' },
    ],
    summary: ['알림: <b>무슨 일</b> → <b>내가 할 일(명령문)</b>.', '약관 핵심 낱말: <b>must · will be charged · may</b>.', '<b>until</b> = ~할 때까지 (그때까지 계속).'] },
  { id: 'RB4', ch: 4, boss: true, title: '여행지 박물관 안내 리플릿 읽고 계획 짜기', minutes: 9,
    pages: [
      { title: '상황: 친구와 여행 중, 박물관에 가 볼까?', html: '<p>친구 수진과 6월 8일(월)부터 10일(수)까지 여행 중이에요. 나는 대학생(학생증 있음), 수진은 직장인이에요. 숙소에서 받은 박물관 리플릿을 읽고 <b>언제 가서, 얼마를 내고, 무엇을 볼지</b> 계획을 짜 봐요.</p>' + TB4 },
      { title: '계획 짤 때 쓸 표현', html: '<p>리플릿에서 찾은 정보를 친구에게 말하고, 매표소에서 쓸 문장이에요.</p>',
        ex: [{ en: 'Is|the museum|open|on Mondays?', roles: 'Q S C M', ko: '박물관이 월요일에 열어요?' }, { en: "Let's meet|at the ticket desk|at eleven.", ko: '11시에 매표소에서 만나자.' }, { en: 'Two tickets, please.', ko: '표 두 장 주세요.' }] },
    ],
    summary: ['리플릿은 <b>운영 시간 → 요금 → 층별 안내 → 주의 사항</b> 순서로 훑어요.', '<b>last entry</b> = 마지막 입장, <b>Closed on Mondays</b> = 월요일 휴관.', '계획 말하기: <b>Let\'s + 동사</b>, 묻기: <b>Is ... open ...?</b>'] },
);
PROBLEMS.push(
  // R13 메뉴판·가격표
  { id: 'R13P1', lesson: 'R13', type: 'choice', prompt: R + T13, q: '큰 사이즈 라테(Cafe latte, Large)는 얼마인가요?', opts: ['$4.00', '$3.50', '$4.50'], ans: 0, tags: ['메뉴판', '가격'], hints: ['Cafe latte 줄을 찾으세요', 'Small / Large 순서예요', '$4.00'], why: '$3.50 / $4.00 — 빗금 앞이 Small, 뒤가 Large 예요.' },
  { id: 'R13P2', lesson: 'R13', type: 'choice', prompt: R + T13, q: '작은 라테를 귀리 우유(oat milk)로 바꾸면 얼마를 내야 하나요?', opts: ['$4.00', '$3.50', '$4.50'], ans: 0, tags: ['메뉴판', '추가 요금'], hints: ['별표(*) 줄을 보세요', 'Oat milk: +$0.50', '$3.50 + $0.50 = $4.00'], why: '작은 라테 $3.50 에 귀리 우유 +$0.50 이 붙어서 $4.00 이에요.' },
  { id: 'R13P3', lesson: 'R13', type: 'choice', prompt: R + T13, q: '오후 3시에 수프와 작은 음료를 시키면 점심 세트 가격($8.00)으로 살 수 있나요?', opts: ['아니요, 세트는 오후 2시까지예요', '네, 하루 종일 돼요', '아니요, 세트에는 샌드위치만 돼요'], ans: 0, tags: ['메뉴판', '조건'], hints: ['Lunch set 줄의 괄호', '11 a.m.–2 p.m.', '아니요, 세트는 오후 2시까지예요'], why: 'Lunch set (11 a.m.–2 p.m.) — 오후 2시가 지나면 세트가 안 돼요. 수프도 세트에 넣을 수는 있어요(any sandwich or soup).' },
  { id: 'R13P4', lesson: 'R13', type: 'match', prompt: '메뉴판 표현과 뜻을 짝 지으세요.', pairs: [['Served with bread.', '빵과 같이 나와요.'], ['One size only.', '한 가지 크기만 있어요.'], ['Free refills for dine-in guests.', '매장 손님은 리필 무료.'], ['Is this vegetarian?', '이거 채식 메뉴예요?']], tags: ['메뉴판 표현'], hints: ['served with = ~과 같이 나오는', 'dine-in = 매장에서 먹는', 'vegetarian = 채식(고기 없는)'] },
  { id: 'R13P5', lesson: 'R13', type: 'order', prompt: '카운터에서 주문해요. 덩어리 카드를 순서대로 놓으세요. 필요 없는 카드도 있어요.', ko: '큰 사이즈 라테를 귀리 우유로 주실 수 있어요?', answer: ['Can I get a large latte with oat milk?', 'Could I get a large latte with oat milk?', 'Can I have a large latte with oat milk?'], cards: ['Can I get', 'a large latte', 'with oat milk?'], distractors: ['an large latte'], tags: ['주문', '관사'], hints: ['Can I get ~? = ~ 주실래요?', 'large 는 자음 소리 → a large', 'Can I get a large latte with oat milk?'] },
  { id: 'R13P6', lesson: 'R13', type: 'fill', prompt: '메뉴판 내용을 문장으로 바꿨어요. 빈칸을 채우세요.', text: 'The lunch set comes ___ a small drink.', blanks: [{ a: ['with'], opt: ['with', 'for', 'by'] }], tags: ['메뉴판 표현'], hints: ['세트에 음료가 「같이」 나와요', 'come ___ = ~이 같이 나오다', 'with'], why: 'come with = ~이 함께 나오다. 세트에 작은 음료가 포함돼요.' },
  { id: 'R13P7', lesson: 'R13', type: 'type', prompt: '직원에게 물어보세요. 영어로 쓰세요.', ko: '수프에 빵이 같이 나오나요?', answer: ['Does the soup come with bread?', 'Is the soup served with bread?', 'Does the soup come with some bread?', 'Does bread come with the soup?', 'Is bread served with the soup?', 'Is the soup served with some bread?', 'Does the soup include bread?', 'Is bread included with the soup?'], tags: ['주문', '질문'], hints: ['Does the soup ~?', 'come with bread', 'Does the soup come with bread?'] },
  { id: 'R13P8', lesson: 'R13', type: 'speak', prompt: '🔊 카운터에서 주문하듯 소리 내어 말해 보세요.', say: 'Can I get a small Americano, please?', ko: '작은 아메리카노 하나 주시겠어요?', tags: ['말하기', '주문'], hints: ['Can I get / a small Americano', 'please 는 끝을 살짝 올려요', 'Can I get a small Americano, please?'] },

  // R14 표지판·경고문
  { id: 'R14P1', lesson: 'R14', type: 'choice', prompt: R + T14, q: '② STAFF ONLY 표지판이 붙은 문은?', opts: ['직원만 들어갈 수 있어요', '직원을 부르는 곳이에요', '직원이 없는 곳이에요'], ans: 0, tags: ['표지판', '뜻'], hints: ['only = ~만', 'No entry for visitors.', '직원만 들어갈 수 있어요'], why: 'STAFF ONLY = 직원 전용. 방문객은 못 들어가요(No entry for visitors).' },
  { id: 'R14P2', lesson: 'R14', type: 'choice', prompt: R + T14, q: '⑥ 표지판 앞에 토요일 오전 10시에 차를 세워도 되나요?', opts: ['네, 주차 금지는 평일에만이에요', '아니요, 차가 견인돼요', '아니요, 오후 6시 이후에만 돼요'], ans: 0, tags: ['표지판', '조건'], hints: ['요일을 확인하세요', 'Mon–Fri = 월요일~금요일', '네, 주차 금지는 평일에만이에요'], why: 'NO PARKING 8 a.m.–6 p.m., Mon–Fri — 월~금에만 금지라서 토요일에는 괜찮아요.' },
  { id: 'R14P3', lesson: 'R14', type: 'choice', prompt: R + T14, q: '건물에 불이 나면 어떻게 하라고 하나요?', opts: ['계단으로 내려가요', '엘리베이터를 타요', '오른쪽에 서서 기다려요'], ans: 0, tags: ['표지판', '안전'], hints: ['⑧번 표지판', 'use the stairs', '계단으로 내려가요'], why: 'In case of fire, use the stairs. Do not use the elevator.' },
  { id: 'R14P4', lesson: 'R14', type: 'match', prompt: '표지판 문구와 뜻을 짝 지으세요.', pairs: [['Please walk carefully.', '조심해서 걸으세요.'], ['Hard hats required.', '안전모 필수.'], ['Cars will be towed.', '차량은 견인됩니다.'], ['Do not touch.', '만지지 마세요.']], tags: ['표지판 표현'], hints: ['required = 꼭 필요한', 'be towed = 견인되다', 'Do not + 동사 = ~하지 마세요'] },
  { id: 'R14P5', lesson: 'R14', type: 'order', prompt: '공원 표지판을 덩어리 카드로 만드세요. 필요 없는 카드도 있어요.', ko: '새에게 먹이를 주지 마세요.', answer: ['Please do not feed the birds.', "Please don't feed the birds.", 'Do not feed the birds.'], cards: ['Please', 'do not feed', 'the birds.'], distractors: ['does not feed'], tags: ['표지판', '금지'], hints: ['Please 로 시작', '하지 마세요 = do not + 동사', 'Please do not feed the birds.'] },
  { id: 'R14P6', lesson: 'R14', type: 'fix', prompt: '표지판을 만들다 실수했어요. 바르게 고치세요.', wrong: 'Please not touch the hot surface.', ko: '뜨거운 표면을 만지지 마세요.', answer: ['Please do not touch the hot surface.', "Please don't touch the hot surface.", 'Do not touch the hot surface.', "Don't touch the hot surface."], tags: ['표지판', '금지'], hints: ['「~하지 마세요」에는 do 가 필요해요', 'Please do not + 동사', 'Please do not touch the hot surface.'], why: '금지는 not 만 쓰지 않고 do not(don\'t) + 동사로 써요.' },
  { id: 'R14P7', lesson: 'R14', type: 'type', prompt: '표지판을 못 본 사람에게 알려 주세요. 영어로 쓰세요.', ko: '여기에 주차하면 안 돼요.', answer: ["You can't park here.", 'You cannot park here.', "Don't park here.", 'You must not park here.', 'Parking is not allowed here.', "You're not allowed to park here.", 'You should not park here.', 'No parking here.'], tags: ['금지', '말하기'], hints: ["You can't ~ = ~하면 안 돼요", 'park here', "You can't park here."] },
  { id: 'R14P8', lesson: 'R14', type: 'speak', prompt: '🔊 건물 안에서 직원에게 물어보듯 말해 보세요.', say: 'Excuse me, is this area for staff only?', ko: '실례지만, 여기는 직원 전용인가요?', tags: ['말하기', '질문'], hints: ['Excuse me, / is this area', 'for staff only?', 'Excuse me, is this area for staff only?'] },

  // R15 영수증·예약 확인·일정표
  { id: 'R15P1', lesson: 'R15', type: 'choice', prompt: R + T15A, q: '할인을 받은 물건은?', opts: ['주방 세제', '우유', '사과'], ans: 0, tags: ['영수증', '세부 내용'], hints: ['Discount 줄의 괄호', 'Discount (dish soap)', '주방 세제'], why: 'Discount (dish soap) -1.50 — 주방 세제가 1.50달러 할인됐어요.' },
  { id: 'R15P2', lesson: 'R15', type: 'choice', prompt: R + T15A, q: '산 사과가 상했어요. 어떻게 하면 환불받을 수 있나요?', opts: ['14일 안에 영수증을 가지고 가요', '영수증 없이 언제든 가요', '7일 안에 카드만 가지고 가요'], ans: 0, tags: ['영수증', '규칙'], hints: ['맨 아래 줄', 'within 14 days with this receipt', '14일 안에 영수증을 가지고 가요'], why: 'Returns accepted within 14 days with this receipt. 7은 물건 개수(Items: 7)예요.' },
  { id: 'R15P3', lesson: 'R15', type: 'choice', prompt: R + T15B, q: '요가 수업은 언제 있나요?', opts: ['6월 동안 매주 화·목 저녁 7시', '6월 3일 하루, 저녁 7시', '매일 저녁 8시'], ans: 0, tags: ['예약 확인', '일정'], hints: ['Dates 줄과 Time 줄', 'every Tuesday and Thursday, June 3 – June 26', '6월 동안 매주 화·목 저녁 7시'], why: '6월 3일~26일, 매주 화요일과 목요일, 저녁 7~8시예요.' },
  { id: 'R15P4', lesson: 'R15', type: 'choice', prompt: R + T15B, q: '수업 시작 10시간 전에 취소하면 어떻게 되나요?', opts: ['출석한 것으로 처리돼요', '무료로 취소돼요', '다음 주로 옮겨져요'], ans: 0, tags: ['예약 확인', '규칙'], hints: ['마지막 문장', 'at least 24 hours before ..., or it will count as attended', '출석한 것으로 처리돼요'], why: '적어도 24시간 전에 취소해야 해요. 안 그러면(or) 출석으로 쳐요.' },
  { id: 'R15P5', lesson: 'R15', type: 'order', prompt: '예약 안내 문장을 덩어리 카드로 만드세요. 필요 없는 카드도 있어요.', ko: '10분 일찍 와 주세요.', answer: ['Please arrive ten minutes early.', 'Please arrive 10 minutes early.', 'Please come ten minutes early.'], cards: ['Please', 'arrive', 'ten minutes', 'early.'], distractors: ['arrives'], tags: ['예약 확인', '부탁'], hints: ['Please + 동사 원래 모양', '얼마나 → ten minutes, 언제 → early', 'Please arrive ten minutes early.'] },
  { id: 'R15P6', lesson: 'R15', type: 'fill', prompt: '영수증 맨 아래 문장을 완성하세요.', text: 'Returns are accepted ___ 14 days.', blanks: [{ a: ['within'], opt: ['within', 'since', 'during'] }], tags: ['영수증', '기간'], hints: ['14일 「안에」', '기한 안 = within', 'within'], why: 'within 14 days = 14일 이내에.' },
  { id: 'R15P7', lesson: 'R15', type: 'type', prompt: '계산대에서 말해 보세요. 영어로 쓰세요.', ko: '카드로 계산할게요.', answer: ["I'll pay by card.", 'I will pay by card.', "I'll pay with a card.", "I'll pay with my card.", "I'd like to pay by card.", 'I will pay with my card.', 'I will pay by credit card.', "I'd like to pay with a card.", 'By card, please.', 'Card, please.'], tags: ['계산', '말하기'], hints: ["I'll pay ~ = ~로 낼게요", 'by card = 카드로', "I'll pay by card."] },
  { id: 'R15P8', lesson: 'R15', type: 'dictation', prompt: '🔊 듣고 그대로 쓰세요.', say: 'Bring your own mat and a water bottle.', tags: ['받아쓰기'], hints: ['Bring / your own mat', 'and a water bottle', 'Bring your own mat and a water bottle.'] },

  // R16 앱 알림·이용 약관
  { id: 'R16P1', lesson: 'R16', type: 'choice', prompt: R + T16, q: 'CloudBox 알림은 무엇을 하라고 하나요?', opts: ['오래된 파일을 지우거나 업그레이드하기', '비밀번호를 바꾸기', '자전거를 반납하기'], ans: 0, tags: ['앱 알림', '할 일'], hints: ['CloudBox 줄의 둘째 문장', 'Delete old files or upgrade', '오래된 파일을 지우거나 업그레이드하기'], why: 'Your storage is 90% full. Delete old files or upgrade to get more space.' },
  { id: 'R16P2', lesson: 'R16', type: 'choice', prompt: R + T16, q: '은행 알림을 받았는데, 내가 로그인한 게 아니에요. 어떻게 해야 하나요?', opts: ['지금 비밀번호를 바꿔요', '새 기기를 사요', '아무것도 안 해도 돼요'], ans: 0, tags: ['앱 알림', '보안'], hints: ['Was this you? If not, ~', 'change your password now', '지금 비밀번호를 바꿔요'], why: 'If not(본인이 아니면), change your password now.' },
  { id: 'R16P3', lesson: 'R16', type: 'choice', prompt: R + T16, q: '자전거를 23분 탔는데 요금이 $1.30 인 이유는?', opts: ['처음 10분은 무료라서', '1분에 $0.10 이라서 23분 전체 요금이에요', '주차 요금이 빠져서'], ans: 0, tags: ['약관', '숫자'], hints: ['약관 둘째 줄', 'The first 10 minutes are free.', '23분 − 10분 = 13분 × $0.10 = $1.30'], why: '처음 10분은 무료, 나머지 13분 × $0.10 = $1.30 이에요.' },
  { id: 'R16P4', lesson: 'R16', type: 'choice', prompt: R + T16, q: 'BikeGo 가 약관을 바꾸면 어떻게 알려 주나요?', opts: ['7일 전에 이메일로', '바꾼 날 앱 알림으로', '알려 주지 않아요'], ans: 0, tags: ['약관', '세부 내용'], hints: ['약관 마지막 줄', 'by email 7 days before any change', '7일 전에 이메일로'], why: 'We will tell you by email 7 days before any change.' },
  { id: 'R16P5', lesson: 'R16', type: 'match', prompt: '알림·약관 문장과 뜻을 짝 지으세요.', pairs: [['Was this you?', '본인이 맞나요?'], ['Your storage is almost full.', '저장 공간이 거의 찼어요.'], ['You must be 18 or older.', '18세 이상이어야 해요.'], ['A fee will be charged.', '요금이 부과돼요.']], tags: ['알림 표현'], hints: ['storage = 저장 공간', 'must = 꼭 ~해야 해요', 'fee = 요금, charge = 청구하다'] },
  { id: 'R16P6', lesson: 'R16', type: 'fill', prompt: '약관 문장을 완성하세요.', text: 'You are responsible for the bike ___ you end the ride in the app.', blanks: [{ a: ['until'], opt: ['until', 'since', 'during'] }], tags: ['약관', '연결어'], hints: ['앱에서 끝낼 「때까지」', '그때까지 계속 = until', 'until'], why: 'until = ~할 때까지. 앱에서 이용을 끝낼 때까지 자전거는 내 책임이에요.' },
  { id: 'R16P7', lesson: 'R16', type: 'type', prompt: '보안 알림의 마지막 문장을 영어로 써 보세요.', ko: '지금 비밀번호를 바꾸세요.', answer: ['Change your password now.', 'Please change your password now.', 'Change your password right now.', 'Change your password immediately.', 'Change your password right away.', 'Please change your password right away.', 'Please change your password right now.', 'Change the password now.'], tags: ['명령문', '앱 알림'], hints: ['동사로 시작: Change', 'your password / now', 'Change your password now.'] },
  { id: 'R16P8', lesson: 'R16', type: 'dictation', prompt: '🔊 듣고 그대로 쓰세요.', say: 'Delete old files or upgrade to get more space.', tags: ['받아쓰기'], hints: ['Delete old files / or upgrade', 'to get more space', 'Delete old files or upgrade to get more space.'] },

  // RB4 보스: 박물관 리플릿으로 계획 짜기
  { id: 'RB4P1', lesson: 'RB4', type: 'choice', boss: true, prompt: '여행 첫날(6월 8일 월요일) 아침, 리플릿을 펼쳐요.' + TB4, q: '박물관은 언제 가는 게 좋을까요?', opts: ['화요일이나 수요일 (월요일은 휴관)', '월요일 오후', '월요일 아침 9시 30분'], ans: 0, tags: ['리플릿', '계획'], hints: ['Opening hours 줄', 'Closed on Mondays.', '화요일이나 수요일 (월요일은 휴관)'], why: 'Tuesday–Sunday 에 열고, Closed on Mondays — 월요일은 쉬어요.' },
  { id: 'RB4P2', lesson: 'RB4', type: 'choice', boss: true, prompt: '화요일에 가기로 했어요. 입장료를 계산해요. (나: 학생증 있는 대학생, 수진: 직장인)' + TB4, q: '두 사람 입장료는 모두 얼마인가요?', opts: ['$20', '$24', '$16'], ans: 0, tags: ['리플릿', '가격'], hints: ['Tickets 줄', 'Students (with ID) $8 · Adults $12', '$8 + $12 = $20'], why: '학생(학생증 있음) $8 + 성인 $12 = $20. 무료 입장은 매달 첫째 일요일만이에요.' },
  { id: 'RB4P3', lesson: 'RB4', type: 'choice', boss: true, prompt: '수진이 영어로 물어봐요. "I want to see the old trams!"' + TB4, q: 'Which floor should they visit?', opts: ['The third floor.', 'The second floor.', 'The rooftop.'], ans: 0, sayOpts: true, tags: ['리플릿', '층별 안내'], hints: ['Floor guide 에서 trams 를 찾으세요', '3F: The Modern City (photos, old trams ...)', 'The third floor.'], why: '3F(3층) The Modern City 에 old trams(옛 전차)가 있어요.' },
  { id: 'RB4P4', lesson: 'RB4', type: 'choice', boss: true, prompt: '수진은 큰 배낭을 메고 왔어요.' + TB4, q: '배낭은 어떻게 해야 하나요?', opts: ['1층 사물함에 넣어요 (1달러 동전, 돌려받아요)', '들고 들어가도 돼요', '매표소에 맡기고 1달러를 내요'], ans: 0, tags: ['리플릿', '규칙'], hints: ['Please note 줄', 'Large bags must go in the lockers ($1 coin, returned).', '1층 사물함에 넣어요'], why: '큰 가방은 꼭(must) 사물함에. 1달러 동전은 돌려받아요(returned). 사물함은 1F 에 있어요.' },
  { id: 'RB4P5', lesson: 'RB4', type: 'order', boss: true, prompt: '무료 영어 가이드 투어에 가기로 했어요. 수진에게 보낼 문자를 만드세요. 필요 없는 카드도 있어요.', ko: '11시에 매표소에서 만나자.', answer: ["Let's meet at the ticket desk at eleven.", "Let's meet at the ticket desk at 11.", 'Let us meet at the ticket desk at eleven.', "Let's meet at eleven at the ticket desk."], cards: ["Let's meet", 'at the ticket desk', 'at eleven.'], distractors: ['in the ticket desk'], tags: ['계획', '전치사구'], hints: ['투어는 매표소에서 모여요(Meet at the ticket desk)', "Let's meet / at 장소 / at 시각", "Let's meet at the ticket desk at eleven."] },
  { id: 'RB4P6', lesson: 'RB4', type: 'fix', boss: true, prompt: '수진에게 월요일엔 못 간다고 문자를 보냈는데 실수가 있어요. 바르게 고치세요.', wrong: 'The museum is close on Mondays.', ko: '박물관은 월요일에 문을 닫아요.', answer: ['The museum is closed on Mondays.', 'The museum is closed on Monday.', 'The museum closes on Mondays.', 'The museum is closed every Monday.'], tags: ['계획', '상태'], hints: ['리플릿 표현을 다시 보세요', '「닫혀 있는」 상태 = closed', 'The museum is closed on Mondays.'], why: '문이 닫힌 상태는 closed. is close 는 「가깝다」라는 뜻이 돼요.' },
  { id: 'RB4P7', lesson: 'RB4', type: 'type', boss: true, prompt: '전시실에서 사진을 찍고 싶어요. 직원에게 영어로 물어보세요.', ko: '사진 찍어도 되나요?', answer: ['Can I take photos?', 'Can I take pictures?', 'Can I take a photo?', 'Can I take a picture?', 'May I take photos?', 'May I take pictures?', 'Can I take photos here?', 'Can I take pictures here?', 'Are photos allowed?', 'Is it okay to take photos?', 'Is it OK to take photos?', 'Can we take photos?'], tags: ['질문', '허락'], hints: ['Can I ~? = ~해도 돼요?', 'take photos = 사진을 찍다', 'Can I take photos?'] },
  { id: 'RB4P8', lesson: 'RB4', type: 'speak', boss: true, prompt: '🔊 매표소에서 표를 사요. 소리 내어 말해 보세요.', say: 'Two tickets, please. One adult and one student.', ko: '표 두 장 주세요. 성인 한 장, 학생 한 장이요.', tags: ['말하기', '매표소'], hints: ['Two tickets, please.', 'One adult / and one student.', 'Two tickets, please. One adult and one student.'] },
);
}
