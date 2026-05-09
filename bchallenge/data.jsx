// Sample data for the Buğçe Challenge prototype

// Photo placeholder generator — striped warm gradients with mono labels
function placeholder(label, palette = 'warm', w = 400, h = 280) {
  const palettes = {
    warm:  ['#f5d8c2', '#e9b5b5', '#d99a9a'],
    sage:  ['#cbd5b8', '#a8b594', '#8a9a7c'],
    cream: ['#f5ede0', '#ece0cc', '#d9c8a9'],
    pink:  ['#f7e1e1', '#f0c8c8', '#e9b5b5'],
    rose:  ['#f3d4d4', '#e9b5b5', '#d99a9a'],
    nutri: ['#e3ebd9', '#cbd5b8', '#a8b594'],
  };
  const [c1, c2, c3] = palettes[palette] || palettes.warm;
  const id = Math.random().toString(36).slice(2,9);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="60%" stop-color="${c2}"/>
        <stop offset="100%" stop-color="${c3}"/>
      </linearGradient>
      <pattern id="p${id}" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
        <rect width="22" height="22" fill="url(#g${id})"/>
        <line x1="0" y1="0" x2="0" y2="22" stroke="rgba(255,255,255,0.18)" stroke-width="3"/>
      </pattern>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#p${id})"/>
    <text x="${w/2}" y="${h/2}" text-anchor="middle" dominant-baseline="middle"
      font-family="ui-monospace, Menlo, monospace" font-size="13" fill="rgba(45,42,38,0.55)" letter-spacing="1">
      ${label}
    </text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// "Photo" of a person — warm circular gradient with initials
function avatar(initials, palette = 'pink') {
  const palettes = {
    pink:  ['#f7e1e1', '#d99a9a'],
    sage:  ['#e3ebd9', '#8a9a7c'],
    cream: ['#f5ede0', '#d9c8a9'],
    rose:  ['#f3d4d4', '#c98080'],
    warm:  ['#f5d8c2', '#c98a6a'],
  };
  const [c1, c2] = palettes[palette] || palettes.pink;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
    <defs><radialGradient id="g" cx="40%" cy="35%" r="70%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </radialGradient></defs>
    <rect width="80" height="80" fill="url(#g)"/>
    <text x="40" y="44" text-anchor="middle" dominant-baseline="middle"
      font-family="DM Serif Display, serif" font-size="28" fill="rgba(255,255,255,0.85)">
      ${initials}
    </text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function bg(src) {
  return `url("${src}") center/cover`;
}

const BUGCE_AVATAR = avatar('B', 'sage');

const RECIPES = [
  { id: 'r1', name: 'Avokadolu Yulaf Kasesi', kcal: 320, time: 10, tags: ['kahvaltı','vegan'],
    ingredients: ['yulaf','avokado','muz','bal','tarçın'], difficulty: 'kolay',
    palette: 'nutri', desc: 'Krema gibi yumuşak, doyurucu ve tertemiz bir başlangıç.' },
  { id: 'r2', name: 'Fırında Sebzeli Tavuk', kcal: 410, time: 35, tags: ['ana yemek','protein'],
    ingredients: ['tavuk','kabak','havuç','soğan','zeytinyağı','kekik'], difficulty: 'kolay',
    palette: 'cream', desc: 'Tek tepside, az bulaşıkla, akşamın kurtarıcısı.' },
  { id: 'r3', name: 'Nohutlu Kinoa Salatası', kcal: 290, time: 15, tags: ['öğle','vegan','protein'],
    ingredients: ['kinoa','nohut','salatalık','domates','limon','maydanoz'], difficulty: 'kolay',
    palette: 'sage', desc: 'Hafif ama tok tutan, Akdeniz esintili bir tabak.' },
  { id: 'r4', name: 'Yer Fıstıklı Muz Smoothie', kcal: 240, time: 5, tags: ['atıştırmalık','enerji'],
    ingredients: ['muz','süt','yer fıstığı','yulaf','tarçın'], difficulty: 'kolay',
    palette: 'warm', desc: 'Antrenman öncesi 5 dakikada hazır enerji bombası.' },
  { id: 'r5', name: 'Kabak Mücveri (Fırın)', kcal: 260, time: 30, tags: ['ara öğün','vejeteryan'],
    ingredients: ['kabak','yumurta','un','peynir','dereotu','soğan'], difficulty: 'orta',
    palette: 'sage', desc: 'Fırında pişen klasik mücverin hafif ve çıtır hâli.' },
  { id: 'r6', name: 'Mercimek Çorbası', kcal: 220, time: 25, tags: ['çorba','vegan','akşam'],
    ingredients: ['kırmızı mercimek','soğan','havuç','zeytinyağı','limon'], difficulty: 'kolay',
    palette: 'cream', desc: 'Annenin elinden çıkmış gibi sıcacık, sade ve şifa.' },
  { id: 'r7', name: 'Çilekli Yoğurt Parfait', kcal: 210, time: 5, tags: ['atıştırmalık','tatlı'],
    ingredients: ['yoğurt','çilek','bal','yulaf','badem'], difficulty: 'kolay',
    palette: 'pink', desc: 'Tatlı krizini bastıran, suçluluksuz keyif.' },
  { id: 'r8', name: 'Ispanaklı Omlet', kcal: 280, time: 10, tags: ['kahvaltı','protein'],
    ingredients: ['yumurta','ıspanak','peynir','soğan','zeytinyağı'], difficulty: 'kolay',
    palette: 'nutri', desc: 'Protein dolu, 10 dakikalık güçlü bir başlangıç.' },
];

const ALL_INGREDIENTS = [...new Set(RECIPES.flatMap(r => r.ingredients))].sort();

const VIDEOS = [
  { id: 'v1', title: 'Sabah Enerjisi 15 Dakika', dur: '15:24', level: 'başlangıç',
    cat: 'tüm vücut', kcal: 120, palette: 'sage',
    desc: 'Güne enerjik başlamak için tüm vücudu çalıştıran dinamik antrenman.' },
  { id: 'v2', title: 'Kalça ve Bacak Sıkılaştırma', dur: '22:10', level: 'orta',
    cat: 'alt vücut', kcal: 210, palette: 'pink',
    desc: 'Ev ortamında ekipmansız, yoğun bir alt vücut çalışması.' },
  { id: 'v3', title: 'Yeni Başlayanlar İçin Tam Vücut', dur: '18:00', level: 'başlangıç',
    cat: 'tüm vücut', kcal: 145, palette: 'cream',
    desc: 'Yumuşak tempo, doğru form. Hiç başlamadıysan buradan başla.' },
  { id: 'v4', title: 'Karın ve Bel İncelten Pilates', dur: '25:30', level: 'orta',
    cat: 'core', kcal: 180, palette: 'sage',
    desc: 'Mat üzerinde nazik ama etkili pilates akışı.' },
  { id: 'v5', title: 'Stres Atan Akşam Esnetmesi', dur: '12:45', level: 'başlangıç',
    cat: 'esneme', kcal: 60, palette: 'pink',
    desc: 'Günün yorgunluğunu üzerinden atan, uykuya hazırlayan akış.' },
  { id: 'v6', title: 'Yağ Yakım Kardiyo Maratonu', dur: '30:00', level: 'ileri',
    cat: 'kardiyo', kcal: 320, palette: 'rose',
    desc: 'Ter atan, kalp atışını yükselten, sonunda kendinle gurur duyduran 30 dk.' },
  { id: 'v7', title: 'Sırt ve Postür Düzeltme', dur: '20:00', level: 'orta',
    cat: 'üst vücut', kcal: 130, palette: 'cream',
    desc: 'Masa başı ağrılarına veda. Açık göğüs, dik duruş.' },
  { id: 'v8', title: 'Kol ve Omuz Şekillendirme', dur: '18:30', level: 'orta',
    cat: 'üst vücut', kcal: 160, palette: 'sage',
    desc: 'Hafif ağırlıklarla veya su şişesiyle yapılabilen güçlü çalışma.' },
];

const POSTS = [
  { id: 'p1', author: 'Ayşe K.', initials: 'AK', when: '2 sa önce', avatar: 'pink',
    type: 'milestone',
    text: '6. haftamı tamamladım canlarım! 🌿 5 kilo verdim ama asıl kazandığım şey her sabah aynanın karşısında gülümseyebilmek. Buğçe ablama ve hepinize sonsuz teşekkürler 💚',
    photo: 'rose', likes: 248, comments: 47, hashtags: ['#6.hafta','#başardım'] },
  { id: 'p2', author: 'Fatma S.', initials: 'FS', when: '4 sa önce', avatar: 'cream',
    type: 'question',
    text: 'Kızlar bir sorum var — akşamları tatlı krizi geliyor, ne yapıyorsunuz? Çilekli parfait denedim ama hâlâ bir şeyler yemek istiyorum 😅',
    likes: 34, comments: 28, hashtags: ['#tatlıkrizi'] },
  { id: 'p3', author: 'Zeynep B.', initials: 'ZB', when: '6 sa önce', avatar: 'sage',
    type: 'recipe',
    text: 'Bugün kabak mücverinizi denedim, harikaydı! Kızım bile yedi 🤍 Üstüne yoğurt da ekledim, müthiş oldu.',
    photo: 'sage', likes: 156, comments: 22, hashtags: ['#tarif','#mücver'] },
  { id: 'p4', author: 'Selma D.', initials: 'SD', when: '12 sa önce', avatar: 'rose',
    type: 'progress',
    text: 'Önce-sonra fotoğrafımı paylaşmaya cesaret edemiyordum ama sizi gördükçe ben de korkmadan paylaşmak istedim. 12 hafta, sabırla 💖',
    photo: 'pink', likes: 412, comments: 89, hashtags: ['#öncesisonrası','#12hafta'] },
];

const LIVE = [
  { id: 'l1', title: 'Sabah Sohbeti: Yeni Hafta Niyetlerimiz', host: 'Buğçe', when: 'Bugün 09:00',
    viewers: 184, palette: 'sage', tag: 'sohbet' },
  { id: 'l2', title: 'Hep Beraber 20 Dakika Yürüyüş', host: 'Buğçe', when: 'Yarın 18:30',
    viewers: 0, palette: 'cream', tag: 'birlik' },
  { id: 'l3', title: 'Tatlı Krizi Atlatma Atölyesi', host: 'Buğçe', when: 'Çarşamba 21:00',
    viewers: 0, palette: 'pink', tag: 'motivasyon' },
];

const BOOKING_SESSIONS = [
  { id: 'b1', title: 'Enerji Veren Sabah Hareketleri', type: 'Canlı Ders', when: 'Bugün', hour: '09:00',
    duration: '25 dk', level: 'başlangıç', seats: 24, booked: 18, price: 'Premium', palette: 'sage',
    note: 'Güne yumuşacık başlayalım. Diz dostu, ekipmansız ve evde yapılabilir.' },
  { id: 'b2', title: '15 Dakikada Kalça Sıkılaştır', type: 'Video + Grup', when: 'Yarın', hour: '18:30',
    duration: '15 dk', level: 'orta', seats: 30, booked: 22, price: 'Ücretsiz deneme', palette: 'pink',
    note: 'Kısa ama etkili. Kendi temponda, kendine kızmadan.' },
  { id: 'b3', title: 'Tatlı Krizi Atlatma Atölyesi', type: 'Koçluk', when: 'Çarşamba', hour: '21:00',
    duration: '35 dk', level: 'her seviye', seats: 40, booked: 31, price: 'Premium', palette: 'cream',
    note: 'Canın tatlı çektiğinde ne yapacağını birlikte netleştirelim.' },
];

const HOST_STATS = [
  { label: 'Aktif üye', value: '12.480', delta: '+428', color: 'sage' },
  { label: 'Bugünkü rezervasyon', value: '326', delta: '+18%', color: 'pink' },
  { label: 'Challenge tamamlama', value: '74%', delta: '+9%', color: 'cream' },
  { label: 'AI koç sohbeti', value: '1.842', delta: '+211', color: 'rose' },
];

const ONBOARDING_STEPS = [
  {
    id: 'goal',
    overline: 'HEDEFİN',
    title: 'Bu yolculukta en çok ne istiyorsun?',
    multi: false,
    options: ['Kilo vermek', 'Sıkılaşmak', 'Enerji kazanmak', 'Daha düzenli beslenmek'],
  },
  {
    id: 'life',
    overline: 'YAŞAM TARZIN',
    title: 'Günlerin genelde nasıl geçiyor?',
    multi: true,
    options: ['Evde yoğun', 'Çocuklarla koşturma', 'Masa başı', 'Menopoz dönemi', 'Yeni başlangıç'],
  },
  {
    id: 'time',
    overline: 'ZAMANIN',
    title: 'Spor için gerçekçi süren ne?',
    multi: false,
    options: ['10 dk', '15 dk', '25 dk', '40 dk'],
  },
  {
    id: 'nutrition',
    overline: 'BESLENME',
    title: 'En çok nerede desteğe ihtiyacın var?',
    multi: true,
    options: ['Tatlı krizi', 'Akşam atıştırması', 'Aile yemeği', 'Su içme', 'Protein artırma'],
  },
];

const PERSONAL_PLAN = {
  goal: 'Hafif kilo verme + enerji',
  duration: '8 haftalık kişisel başlangıç',
  workout: 'Haftada 4 gün, 15-25 dk düşük tempolu ev programı',
  nutrition: 'Türk mutfağına uygun porsiyon ve protein odaklı tarif planı',
  habits: ['2L su hedefi', 'Akşam tatlı krizi planı', 'Haftalık ölçü girişi', '3 günlük esneme rutini'],
};

const PLUS_FEATURES = [
  'Buğçe AI Koç ile kişisel sohbet',
  'Kişiye özel spor ve takip programı',
  'Canlı ders rezervasyonları',
  'İlerleme fotoğrafları ve ölçü takibi',
  'Topluluk challenge ve başarı alanları',
];

const COACH_PLAN = {
  nutrition: {
    target: 'Hafif kilo verme + enerji',
    kcal: 1620,
    macros: { carb: 45, protein: 30, fat: 25 },
    today: [
      { meal: 'Kahvaltı', name: 'Avokadolu Yulaf Kasesi', kcal: 320, done: true },
      { meal: 'Ara Öğün', name: 'Çilekli Yoğurt Parfait', kcal: 210, done: true },
      { meal: 'Öğle', name: 'Nohutlu Kinoa Salatası', kcal: 290, done: false },
      { meal: 'Ara Öğün', name: 'Bir avuç badem + elma', kcal: 180, done: false },
      { meal: 'Akşam', name: 'Fırında Sebzeli Tavuk', kcal: 410, done: false },
    ],
  },
  workout: {
    week: [
      { day: 'Pzt', label: 'Tüm Vücut', dur: 18, done: true },
      { day: 'Sal', label: 'Esneme', dur: 12, done: true },
      { day: 'Çar', label: 'Alt Vücut', dur: 22, done: true },
      { day: 'Per', label: 'Dinlenme', dur: 0, done: true, rest: true },
      { day: 'Cum', label: 'Pilates', dur: 25, done: false, today: true },
      { day: 'Cmt', label: 'Kardiyo', dur: 30, done: false },
      { day: 'Paz', label: 'Yoga', dur: 20, done: false },
    ],
  },
};

const CHAT_HISTORY = [
  { from: 'b', text: 'Günaydın güzelim 🌿 Bugün kendini nasıl hissediyorsun?' },
  { from: 'u', text: 'İyiyim ablacığım ama dün biraz fazla yedim 😔' },
  { from: 'b', text: 'Olur canım, bir öğün her şeyi bozmaz. Önemli olan bugün ne yaptığın. Bugün için planı birlikte gözden geçirelim mi?' },
  { from: 'u', text: 'Evet lütfen' },
  { from: 'b', text: 'Süper! Öğle için **Nohutlu Kinoa Salatası** çıkardım — 290 kcal, hem hafif hem doyurucu. 15 dakikada hazır 💚 Bugün ayrıca **25 dakikalık pilatesin** var, Cuma rutinin. Sen yaparsın!' },
];

const PROFILE = {
  name: 'Elif',
  joined: '12 hafta önce',
  streak: 30,
  weightStart: 72.4,
  weightNow: 67.8,
  weightGoal: 65.0,
  measurements: [
    { label: 'Bel',   start: 86, now: 79, unit: 'cm' },
    { label: 'Kalça', start: 104, now: 98, unit: 'cm' },
    { label: 'Bacak', start: 62,  now: 59, unit: 'cm' },
    { label: 'Kol',   start: 30,  now: 28, unit: 'cm' },
  ],
  badges: [
    { id: 'b1', name: '30 Gün Sabır', icon: '🌱', earned: true },
    { id: 'b2', name: 'İlk 100 Adım', icon: '🚶‍♀️', earned: true },
    { id: 'b3', name: 'Topluluk Kalbi', icon: '💖', earned: true },
    { id: 'b4', name: 'Su Kraliçesi', icon: '💧', earned: true },
    { id: 'b5', name: 'Tarif Ustası', icon: '🌿', earned: false },
    { id: 'b6', name: '60 Gün Klubü', icon: '🌸', earned: false },
  ],
  // weekly weight points (oldest -> newest)
  weightHistory: [72.4, 71.8, 71.0, 70.6, 70.0, 69.4, 69.0, 68.5, 68.2, 68.0, 67.9, 67.8],
};

Object.assign(window, {
  placeholder, avatar, bg, BUGCE_AVATAR,
  RECIPES, ALL_INGREDIENTS, VIDEOS, POSTS, LIVE, BOOKING_SESSIONS, HOST_STATS,
  ONBOARDING_STEPS, PERSONAL_PLAN, PLUS_FEATURES,
  COACH_PLAN, CHAT_HISTORY, PROFILE,
});
