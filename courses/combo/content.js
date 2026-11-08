// courses/combo/content.js — 🧩 조합 말하기 낱말 표 (공간 — 레슨·문제 없음). 엔진·문법 패턴 = core/combo.js
/*
원칙(사용자 11/6): 표에는 낱말을 **원형**으로만 보여 주고, 학습자가 칸을 골라 「스스로」 문장을 만들어 말해요.
  정답 문장·한국어 문제는 보여 주지 않아요. 표 아래엔 그 문법 설명만.
목록:
  subj  주어   { w, ko, p: 's1'(I) | 's2'(you) | 's3'(3인칭 단수) | 'pl'(복수) }  — w 는 문장 중간 모양(my brother). 이름·I 는 대문자
  vt    타동사 { v: 원형, ko, obj: [어울리는 목적어 cat], past?(불규칙·자음 겹침), ing?(자음 겹침 등) }
  vi    자동사 { v, ko, past?, ing? }
  obj   목적어 { w, ko, cat }   cat: food drink sport music game media book study house message people thing
  adj   형용사 { w, ko }        — 사람 주어에 어울리는 상태·기분
  place 장소   { w, ko }        — be + 장소, There is … + 장소
  thing There is 명사 { w, ko, n: 'sg' | 'pl' | 'u'(셀 수 없음) }
  tNow 습관 시간 / tPast 과거 시간 / tFut 미래 시간 / tProg 지금   { w, ko }
*/
const COURSE = { id: 'combo', name: '조합 말하기' };
const CHAPTERS = []; const LESSONS = []; const PROBLEMS = [];
const COMBO_LEX = {
  subj: [
    { w: 'I', ko: '나', p: 's1' }, { w: 'you', ko: '너, 당신', p: 's2' }, { w: 'he', ko: '그', p: 's3' }, { w: 'she', ko: '그녀', p: 's3' },
    { w: 'we', ko: '우리', p: 'pl' }, { w: 'they', ko: '그들', p: 'pl' }, { w: 'my brother', ko: '우리 형·오빠·남동생', p: 's3' }, { w: 'my sister', ko: '우리 언니·누나·여동생', p: 's3' },
    { w: 'my parents', ko: '우리 부모님', p: 'pl' }, { w: 'my dad', ko: '우리 아빠', p: 's3' }, { w: 'our teacher', ko: '우리 선생님', p: 's3' }, { w: 'the kids', ko: '아이들', p: 'pl' },
    { w: 'Mina', ko: '미나', p: 's3' }, { w: 'Tom and I', ko: '톰과 나', p: 'pl' }, { w: 'my friends', ko: '내 친구들', p: 'pl' }, { w: 'everyone', ko: '모두', p: 's3' },
  ],
  vt: [
    { v: 'eat', ko: '먹다', obj: ['food'], past: 'ate' }, { v: 'drink', ko: '마시다', obj: ['drink'], past: 'drank' },
    { v: 'cook', ko: '요리하다', obj: ['food'] }, { v: 'make', ko: '만들다', obj: ['food', 'drink'], past: 'made' },
    { v: 'buy', ko: '사다', obj: ['food', 'drink', 'thing', 'book'], past: 'bought' }, { v: 'like', ko: '좋아하다', obj: ['food', 'drink', 'sport', 'media', 'book', 'game'] },
    { v: 'love', ko: '아주 좋아하다', obj: ['food', 'drink', 'sport', 'media', 'game', 'people'] }, { v: 'want', ko: '원하다', obj: ['food', 'drink', 'thing'] },
    { v: 'need', ko: '필요하다', obj: ['thing', 'food', 'drink'] }, { v: 'play', ko: '(운동·게임) 하다, 연주하다', obj: ['sport', 'music', 'game'] },
    { v: 'watch', ko: '보다(영상·경기)', obj: ['media', 'sport'] }, { v: 'read', ko: '읽다', obj: ['book', 'message'], past: 'read' },
    { v: 'write', ko: '쓰다', obj: ['message'], past: 'wrote' }, { v: 'study', ko: '공부하다', obj: ['study'] },
    { v: 'finish', ko: '끝내다', obj: ['study', 'book', 'food'] }, { v: 'clean', ko: '청소하다', obj: ['house'] },
    { v: 'wash', ko: '씻다, 닦다', obj: ['house'] }, { v: 'visit', ko: '방문하다, 찾아뵙다', obj: ['people'] },
    { v: 'call', ko: '전화하다', obj: ['people'] }, { v: 'meet', ko: '만나다', obj: ['people'], past: 'met' },
    { v: 'help', ko: '돕다', obj: ['people'] }, { v: 'send', ko: '보내다', obj: ['message'], past: 'sent' },
    { v: 'find', ko: '찾다, 발견하다', obj: ['thing'], past: 'found' }, { v: 'lose', ko: '잃어버리다', obj: ['thing'], past: 'lost' },
    { v: 'bring', ko: '가져오다', obj: ['thing', 'food'], past: 'brought' }, { v: 'take', ko: '가져가다, 챙기다', obj: ['thing'], past: 'took' },
    { v: 'learn', ko: '배우다', obj: ['study', 'music', 'sport'] }, { v: 'practice', ko: '연습하다', obj: ['music', 'sport'] },
    { v: 'order', ko: '주문하다', obj: ['food', 'drink'] }, { v: 'get', ko: '받다, 사다', obj: ['message', 'thing'], past: 'got', ing: 'getting' },
    { v: 'forget', ko: '잊다, 깜빡하다', obj: ['thing', 'study'], past: 'forgot', ing: 'forgetting' }, { v: 'fix', ko: '고치다', obj: ['thing'] },
    { v: 'check', ko: '확인하다', obj: ['message'] }, { v: 'enjoy', ko: '즐기다', obj: ['food', 'media', 'sport', 'game'] },
    { v: 'see', ko: '보다, 만나다', obj: ['people', 'media'], past: 'saw' }, { v: 'carry', ko: '들고 다니다', obj: ['thing'] },
  ],
  vi: [
    { v: 'run', ko: '달리다', past: 'ran', ing: 'running' }, { v: 'swim', ko: '수영하다', past: 'swam', ing: 'swimming' }, { v: 'sleep', ko: '자다', past: 'slept' },
    { v: 'walk', ko: '걷다' }, { v: 'work', ko: '일하다' }, { v: 'dance', ko: '춤추다' }, { v: 'sing', ko: '노래하다', past: 'sang' }, { v: 'cry', ko: '울다' },
    { v: 'laugh', ko: '웃다' }, { v: 'smile', ko: '미소 짓다' }, { v: 'jump', ko: '뛰어오르다' }, { v: 'wait', ko: '기다리다' }, { v: 'travel', ko: '여행하다' },
    { v: 'shop', ko: '쇼핑하다', past: 'shopped', ing: 'shopping' }, { v: 'rest', ko: '쉬다' }, { v: 'talk', ko: '이야기하다' }, { v: 'study', ko: '공부하다' }, { v: 'cook', ko: '요리하다' },
    { v: 'relax', ko: '느긋하게 쉬다' }, { v: 'exercise', ko: '운동하다' },
  ],
  obj: [
    { w: 'pizza', ko: '피자', cat: 'food' }, { w: 'noodles', ko: '국수', cat: 'food' }, { w: 'breakfast', ko: '아침밥', cat: 'food' }, { w: 'an apple', ko: '사과 하나', cat: 'food' },
    { w: 'fried chicken', ko: '프라이드치킨', cat: 'food' }, { w: 'kimchi', ko: '김치', cat: 'food' }, { w: 'a sandwich', ko: '샌드위치 하나', cat: 'food' }, { w: 'dinner', ko: '저녁밥', cat: 'food' },
    { w: 'coffee', ko: '커피', cat: 'drink' }, { w: 'tea', ko: '차', cat: 'drink' }, { w: 'milk', ko: '우유', cat: 'drink' }, { w: 'orange juice', ko: '오렌지 주스', cat: 'drink' },
    { w: 'soccer', ko: '축구', cat: 'sport' }, { w: 'basketball', ko: '농구', cat: 'sport' }, { w: 'tennis', ko: '테니스', cat: 'sport' }, { w: 'baseball', ko: '야구', cat: 'sport' },
    { w: 'the piano', ko: '피아노', cat: 'music' }, { w: 'the guitar', ko: '기타', cat: 'music' }, { w: 'the violin', ko: '바이올린', cat: 'music' },
    { w: 'video games', ko: '비디오 게임', cat: 'game' }, { w: 'board games', ko: '보드게임', cat: 'game' }, { w: 'chess', ko: '체스', cat: 'game' },
    { w: 'movies', ko: '영화', cat: 'media' }, { w: 'TV', ko: '텔레비전', cat: 'media' }, { w: 'the news', ko: '뉴스', cat: 'media' }, { w: 'cartoons', ko: '만화 영화', cat: 'media' }, { w: 'a movie', ko: '영화 한 편', cat: 'media' },
    { w: 'a book', ko: '책 한 권', cat: 'book' }, { w: 'comic books', ko: '만화책', cat: 'book' }, { w: 'the newspaper', ko: '신문', cat: 'book' }, { w: 'novels', ko: '소설', cat: 'book' },
    { w: 'English', ko: '영어', cat: 'study' }, { w: 'math', ko: '수학', cat: 'study' }, { w: 'my homework', ko: '내 숙제', cat: 'study' }, { w: 'history', ko: '역사', cat: 'study' },
    { w: 'the dishes', ko: '설거지(그릇들)', cat: 'house' }, { w: 'my room', ko: '내 방', cat: 'house' }, { w: 'the car', ko: '차', cat: 'house' }, { w: 'the bathroom', ko: '화장실', cat: 'house' },
    { w: 'an email', ko: '이메일 한 통', cat: 'message' }, { w: 'a letter', ko: '편지 한 통', cat: 'message' }, { w: 'a text message', ko: '문자 한 통', cat: 'message' }, { w: 'my messages', ko: '내 메시지', cat: 'message' },
    { w: 'my classmates', ko: '우리 반 친구들', cat: 'people' }, { w: 'Grandma', ko: '할머니', cat: 'people' }, { w: 'her parents', ko: '그녀의 부모님', cat: 'people' }, { w: 'the teacher', ko: '선생님', cat: 'people' }, { w: 'my cousin', ko: '내 사촌', cat: 'people' },
    { w: 'my phone', ko: '내 휴대폰', cat: 'thing' }, { w: 'an umbrella', ko: '우산 하나', cat: 'thing' }, { w: 'a new bag', ko: '새 가방 하나', cat: 'thing' }, { w: 'my keys', ko: '내 열쇠', cat: 'thing' },
    { w: 'a camera', ko: '카메라 하나', cat: 'thing' }, { w: 'the bike', ko: '자전거', cat: 'thing' },
  ],
  adj: [
    { w: 'happy', ko: '행복한, 기쁜' }, { w: 'tired', ko: '피곤한' }, { w: 'hungry', ko: '배고픈' }, { w: 'busy', ko: '바쁜' }, { w: 'sad', ko: '슬픈' },
    { w: 'angry', ko: '화난' }, { w: 'sleepy', ko: '졸린' }, { w: 'sick', ko: '아픈' }, { w: 'bored', ko: '심심한, 지루한' }, { w: 'excited', ko: '신난' },
    { w: 'nervous', ko: '긴장한' }, { w: 'late', ko: '늦은' }, { w: 'ready', ko: '준비된' }, { w: 'free', ko: '한가한, 시간 있는' }, { w: 'thirsty', ko: '목마른' }, { w: 'cold', ko: '추운' },
  ],
  place: [
    { w: 'at home', ko: '집에' }, { w: 'at school', ko: '학교에' }, { w: 'at work', ko: '직장에' }, { w: 'in the kitchen', ko: '부엌에' }, { w: 'in the park', ko: '공원에' },
    { w: 'at the library', ko: '도서관에' }, { w: 'in the car', ko: '차 안에' }, { w: 'on the bus', ko: '버스에' }, { w: 'in bed', ko: '침대에(누워)' }, { w: 'at the mall', ko: '쇼핑몰에' },
    { w: 'in the living room', ko: '거실에' }, { w: 'near the station', ko: '역 근처에' },
  ],
  thing: [
    { w: 'a cat', ko: '고양이 한 마리', n: 'sg' }, { w: 'two dogs', ko: '개 두 마리', n: 'pl' }, { w: 'some milk', ko: '우유 조금', n: 'u' }, { w: 'a big tree', ko: '큰 나무 한 그루', n: 'sg' },
    { w: 'many people', ko: '많은 사람들', n: 'pl' }, { w: 'a bookstore', ko: '서점 하나', n: 'sg' }, { w: 'some water', ko: '물 조금', n: 'u' }, { w: 'three apples', ko: '사과 세 개', n: 'pl' },
    { w: 'a new cafe', ko: '새 카페 하나', n: 'sg' }, { w: 'a lot of snow', ko: '많은 눈', n: 'u' }, { w: 'lots of books', ko: '많은 책', n: 'pl' }, { w: 'a bus stop', ko: '버스 정류장 하나', n: 'sg' },
  ],
  tNow: [
    { w: 'every day', ko: '매일' }, { w: 'every morning', ko: '매일 아침' }, { w: 'on weekends', ko: '주말마다' }, { w: 'after school', ko: '방과 후에' },
    { w: 'after work', ko: '퇴근 후에' }, { w: 'at night', ko: '밤에' }, { w: 'twice a week', ko: '일주일에 두 번' }, { w: 'on Sundays', ko: '일요일마다' },
  ],
  tPast: [
    { w: 'yesterday', ko: '어제' }, { w: 'last night', ko: '어젯밤' }, { w: 'last week', ko: '지난주' }, { w: 'last Sunday', ko: '지난 일요일' },
    { w: 'two days ago', ko: '이틀 전' }, { w: 'this morning', ko: '오늘 아침' }, { w: 'an hour ago', ko: '한 시간 전' },
  ],
  tFut: [
    { w: 'tomorrow', ko: '내일' }, { w: 'next week', ko: '다음 주' }, { w: 'tonight', ko: '오늘 밤' }, { w: 'this weekend', ko: '이번 주말' },
    { w: 'next month', ko: '다음 달' }, { w: 'later', ko: '나중에' },
  ],
  tProg: [{ w: 'now', ko: '지금' }, { w: 'right now', ko: '지금 당장' }, { w: 'at the moment', ko: '지금 이 순간' }],
};

// ── v0.7.0 추가 낱말 ──────────────────────────────────────────
(function () {
  const L = COMBO_LEX;
  // 과거분사(p.p.): 불규칙만 pp 를 적음. 없으면 과거형과 같음(규칙 동사 + made·bought·met·sent·found·lost·brought·slept·read). get 은 have gotten/got 이 갈려서 과거분사 표에서 뺌(noPP)
  const PP = { eat: 'eaten', drink: 'drunk', write: 'written', take: 'taken', see: 'seen', forget: 'forgotten', swim: 'swum', sing: 'sung', run: 'run' };
  for (const x of L.vt.concat(L.vi)) if (PP[x.v]) x.pp = PP[x.v];
  L.vt.find(x => x.v === 'get').noPP = true;
  // 목적어의 수: 'pl'(복수) 아니면 'sg'(하나·셀 수 없음) — 수동태 be(is/are)에 씀
  const PL = ['noodles', 'movies', 'cartoons', 'comic books', 'novels', 'video games', 'board games', 'the dishes', 'my messages', 'my classmates', 'her parents', 'my keys'];
  for (const o of L.obj) o.n = PL.includes(o.w) ? 'pl' : 'sg';
  L.tUsed = [{ w: 'a long time ago', ko: '오래전에' }, { w: 'years ago', ko: '몇 년 전에' }, { w: 'back then', ko: '그때는' }, { w: 'in high school', ko: '고등학교 때' }, { w: 'in the past', ko: '예전에' }, { w: 'in those days', ko: '그 시절에' }];
  L.butTail = [{ w: 'but I forgot', ko: '그런데 깜빡했어요' }, { w: 'but I ran out of time', ko: '그런데 시간이 부족했어요' }, { w: 'but it was closed', ko: '그런데 문을 닫았어요' }, { w: 'but it rained', ko: '그런데 비가 왔어요' },
    { w: 'but I changed my mind', ko: '그런데 마음을 바꿨어요' }, { w: 'but I was too tired', ko: '그런데 너무 피곤했어요' }, { w: 'but my phone died', ko: '그런데 폰이 꺼졌어요' }, { w: 'but I got busy', ko: '그런데 바빠졌어요' }];
})();

// ── v0.8.0 낱말 정리 (독립 검수 반영: 어색한 동사-목적어 짝 · 과거형 · 영국식 철자) ──
(function () {
  const L = COMBO_LEX; const V = (v) => L.vt.find(x => x.v === v);
  const cat = (w, c) => { L.obj.find(o => o.w === w).cat = c; };
  cat('my homework', 'homework'); cat('the news', 'news'); cat('my room', 'room'); cat('the bathroom', 'room'); cat('an apple', 'snack'); cat('a sandwich', 'snack');
  V('study').obj = ['study']; V('learn').obj = ['study', 'music', 'sport']; V('finish').obj = ['homework', 'book', 'food', 'snack']; V('check').obj = ['message', 'homework']; V('forget').obj = ['thing', 'homework'];
  V('wash').obj = ['house']; V('clean').obj = ['house', 'room']; V('watch').obj = ['media', 'sport', 'news']; V('read').obj = ['book', 'message', 'news'];
  V('see').obj = ['people', 'media']; V('cook').obj = ['food']; V('order').obj = ['food', 'drink'];
  for (const v of L.vt) if (v.obj.includes('food') && !['cook', 'order'].includes(v.v)) v.obj.push('snack'); // 사과·샌드위치는 먹고 사고 만드는 것(요리·주문은 아님)
  L.vt.find(x => x.v === 'learn').alt = 'learnt'; L.vi.find(x => x.v === 'travel').alt = 'travelled'; // 영국식 철자도 정답
})();

// ── v0.8.0 추가 낱말 (문법 더 깊게: 현재완료·수동태·관계사·가정법·to부정사·동명사·분사) ──
(function () {
  const L = COMBO_LEX;
  L.tDur = [{ w: 'for two years', ko: '2년 동안' }, { w: 'for a long time', ko: '오랫동안' }, { w: 'for three hours', ko: '세 시간 동안' }, { w: 'for a week', ko: '일주일 동안' },
    { w: 'since Monday', ko: '월요일부터' }, { w: 'since 2020', ko: '2020년부터' }, { w: 'since last year', ko: '작년부터' }, { w: 'since this morning', ko: '오늘 아침부터' }];
  // 때를 나타내는 말: t = 'pf'(지금까지 · 현재완료) | 'past'(끝난 때 · 과거)
  L.tMix = [{ w: 'so far', ko: '지금까지', t: 'pf' }, { w: 'up to now', ko: '지금까지', t: 'pf' }, { w: 'since Monday', ko: '월요일부터', t: 'pf' }, { w: 'for two years', ko: '2년 동안', t: 'pf' }, { w: 'yesterday', ko: '어제', t: 'past' }, { w: 'last night', ko: '어젯밤', t: 'past' },
    { w: 'two days ago', ko: '이틀 전', t: 'past' }, { w: 'last week', ko: '지난주', t: 'past' }, { w: 'in 2019', ko: '2019년에', t: 'past' }];
  L.person = [{ w: 'a man', ko: '한 남자', n: 'sg' }, { w: 'a woman', ko: '한 여자', n: 'sg' }, { w: 'a girl', ko: '한 소녀', n: 'sg' }, { w: 'a boy', ko: '한 소년', n: 'sg' }, { w: 'a teacher', ko: '선생님 한 분', n: 'sg' }, { w: 'a neighbor', ko: '이웃 한 명', n: 'sg' },
    { w: 'a doctor', ko: '의사 한 분', n: 'sg' }, { w: 'a student', ko: '학생 한 명', n: 'sg' }, { w: 'some teachers', ko: '몇몇 선생님', n: 'pl' }, { w: 'two girls', ko: '소녀 두 명', n: 'pl' }, { w: 'some students', ko: '몇몇 학생', n: 'pl' }, { w: 'many people', ko: '많은 사람들', n: 'pl' }];
  L.placeN = [{ w: 'the park', ko: '공원' }, { w: 'the cafe', ko: '카페' }, { w: 'the library', ko: '도서관' }, { w: 'the restaurant', ko: '식당' }, { w: 'the beach', ko: '해변' }, { w: 'the school', ko: '학교' }, { w: 'the gym', ko: '체육관' }, { w: 'the house', ko: '그 집' }];
  L.dayN = [{ w: 'the day', ko: '그날' }, { w: 'the night', ko: '그날 밤' }, { w: 'the morning', ko: '그날 아침' }, { w: 'the summer', ko: '그 여름' }, { w: 'the year', ko: '그해' }, { w: 'the weekend', ko: '그 주말' }];
  L.resFut = [{ w: 'I will be happy', ko: '나는 기쁠 거예요' }, { w: 'we will stay home', ko: '우리는 집에 있을 거예요' }, { w: 'I will text you', ko: '내가 문자할게요' }, { w: 'you will feel better', ko: '기분이 나아질 거예요' },
    { w: 'they will be late', ko: '그들은 늦을 거예요' }, { w: 'I will join you', ko: '내가 합류할게요' }, { w: 'she will be surprised', ko: '그녀는 놀랄 거예요' }, { w: 'the teacher will be angry', ko: '선생님이 화낼 거예요' }];
  L.resWould = [{ w: 'I would be happy', ko: '나는 기쁠 텐데요' }, { w: 'I would travel the world', ko: '세계를 여행할 텐데요' }, { w: 'we would go to the beach', ko: '우리는 해변에 갈 텐데요' }, { w: 'I would sleep all day', ko: '하루 종일 잘 텐데요' },
    { w: 'she would be surprised', ko: '그녀는 놀랄 텐데요' }, { w: 'they would join us', ko: '그들이 우리와 함께할 텐데요' }, { w: 'I would text you', ko: '내가 문자할 텐데요' }, { w: 'my mom would be proud', ko: '엄마가 자랑스러워할 텐데요' }];
  // 「to + 동사원형」을 쓰는 동사 / 「동사-ing」를 쓰는 동사
  L.vTo = [{ v: 'want', ko: '원하다' }, { v: 'need', ko: '필요하다' }, { v: 'decide', ko: '결정하다' }, { v: 'plan', ko: '계획하다', past: 'planned', ing: 'planning' }, { v: 'hope', ko: '바라다' }, { v: 'learn', ko: '배우다', alt: 'learnt' }, { v: 'try', ko: '노력하다' }, { v: 'promise', ko: '약속하다' }];
  L.vIng = [{ v: 'enjoy', ko: '즐기다' }, { v: 'finish', ko: '끝내다' }, { v: 'practice', ko: '연습하다' }, { v: 'avoid', ko: '피하다' }, { v: 'keep', ko: '계속하다', past: 'kept' }, { v: 'suggest', ko: '제안하다' }];
  // -ed / -ing 형용사: 원형(w)을 보고 주어에 맞게 고름
  L.adjEmo = [{ w: 'bore', ko: '지루하게 하다', ed: 'bored', ing: 'boring' }, { w: 'excite', ko: '신나게 하다', ed: 'excited', ing: 'exciting' }, { w: 'interest', ko: '흥미를 끌다', ed: 'interested', ing: 'interesting' },
    { w: 'surprise', ko: '놀라게 하다', ed: 'surprised', ing: 'surprising' }, { w: 'confuse', ko: '헷갈리게 하다', ed: 'confused', ing: 'confusing' }, { w: 'tire', ko: '피곤하게 하다', ed: 'tired', ing: 'tiring' },
    { w: 'shock', ko: '충격을 주다', ed: 'shocked', ing: 'shocking' }, { w: 'disappoint', ko: '실망시키다', ed: 'disappointed', ing: 'disappointing' }, { w: 'annoy', ko: '짜증나게 하다', ed: 'annoyed', ing: 'annoying' }];
  L.subjEmo = [{ w: 'I', ko: '나', p: 's1' }, { w: 'you', ko: '너', p: 's2' }, { w: 'he', ko: '그', p: 's3' }, { w: 'she', ko: '그녀', p: 's3' }, { w: 'we', ko: '우리', p: 'pl' }, { w: 'they', ko: '그들', p: 'pl' }, { w: 'my dad', ko: '우리 아빠', p: 's3' }, { w: 'Mina', ko: '미나', p: 's3' },
    { w: 'the movie', ko: '그 영화', p: 's3', thing: true }, { w: 'the story', ko: '그 이야기', p: 's3', thing: true }, { w: 'the game', ko: '그 게임', p: 's3', thing: true }, { w: 'the class', ko: '그 수업', p: 's3', thing: true }, { w: 'the trip', ko: '그 여행', p: 's3', thing: true }, { w: 'the news', ko: '그 소식', p: 's3', thing: true }];
})();
