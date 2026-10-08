// B Club App Store görsellerini üretir: node build.mjs
// Gereksinim: playwright-core + Chromium (PLAYWRIGHT_BROWSERS_PATH veya CHROMIUM_PATH)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(process.env.PW_PATH ? process.env.PW_PATH + '/' : import.meta.url);
const { chromium } = require('playwright-core');

const fontCss = fs.readFileSync(path.join(here, 'fonts/local.css'), 'utf8').replace(/url\((f\d+\.woff2)\)/g, 'url(file://' + here + '/fonts/$1)');
const img = (n) => 'file://' + path.join(here, 'src/img', n);
const brand = (n) => 'file://' + path.join(here, 'brand', n);

const base = `
${fontCss}
:root{--ivory:#FDF9F1;--cream:#F4EBDC;--white:#FFFFF8;--sage:#8A9A7C;--olive:#56624B;--blush:#E7B6B1;--rose:#C9827D;--ink:#28251F;--taupe:#70685D;--sand:#E9DDCB}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--ivory);font-family:'Nunito',sans-serif;color:var(--ink);overflow:hidden;-webkit-font-smoothing:antialiased}
.serif{font-family:'DM Serif Display',serif;font-weight:400}
.bg{position:absolute;inset:0;background:
 radial-gradient(60% 80% at 8% 0%,#F6E9DA 0%,transparent 60%),
 radial-gradient(55% 75% at 100% 100%,rgba(231,182,177,.45) 0%,transparent 62%),
 radial-gradient(40% 50% at 70% 10%,rgba(138,154,124,.16) 0%,transparent 70%),var(--ivory)}
.phone{position:absolute;background:#1d1b17;border-radius:calc(var(--w)*.15);padding:calc(var(--w)*.022);width:var(--w);height:calc(var(--w)*2.07);
 box-shadow:0 calc(var(--w)*.06) calc(var(--w)*.14) rgba(40,37,31,.28),0 0 0 calc(var(--w)*.004) #4a463e inset}
.scr{position:relative;width:100%;height:100%;border-radius:calc(var(--w)*.128);overflow:hidden;background:var(--ivory)}
.scr img{position:absolute;left:0;top:calc(var(--w)*.15);width:100%}
.scr .isl{position:absolute;left:50%;top:calc(var(--w)*.03);width:calc(var(--w)*.27);height:calc(var(--w)*.08);background:#000;border-radius:99px;transform:translateX(-50%)}
.scr .sb{position:absolute;left:calc(var(--w)*.09);top:calc(var(--w)*.045);font:800 calc(var(--w)*.05)/1 'Nunito';color:var(--ink)}
.card{position:absolute;border-radius:calc(var(--w)*.05);overflow:hidden;box-shadow:0 calc(var(--w)*.05) calc(var(--w)*.12) rgba(40,37,31,.25),0 0 0 calc(var(--w)*.006) rgba(255,255,248,.9)}
.card img{width:100%;display:block}
.logo{position:absolute}
`;

const phone = (src, w, x, y, rot = 0, extra = '') =>
  `<div class="phone" style="--w:${w}px;left:${x}px;top:${y}px;transform:rotate(${rot}deg);${extra}"><div class="scr"><img src="${img(src)}"><div class="sb">9:41</div><div class="isl"></div></div></div>`;
const card = (src, w, x, y, rot = 0) =>
  `<div class="card" style="--w:${w}px;width:${w}px;left:${x}px;top:${y}px;transform:rotate(${rot}deg)"><img src="${img(src)}"></div>`;

// ---------- HEADER ----------
function header(W, H) {
  const u = H / 100; // yükseklik birimi
  const wide = W / H > 2;
  const phoneW = u * (wide ? 36 : 30);
  const textX = W * (wide ? 0.07 : 0.07);
  const rx = W * (wide ? 0.50 : 0.455); // telefonların başlangıcı
  const gap = phoneW * 1.12;
  const py = (k) => u * k;
  return `<style>${base}
.t{position:absolute;left:${textX}px;top:${u * (wide ? 15 : 17)}px;width:${W * (wide ? .40 : .43)}px}
.eyebrow{font:800 ${u * 2.5}px 'Nunito';letter-spacing:${u * .75}px;color:var(--sage);margin-top:${u * 6}px}
h1{font:400 ${u * (wide ? 11.5 : 8.3)}px/1.05 'DM Serif Display';color:var(--olive);margin-top:${u * 2.2}px;letter-spacing:-${u * .1}px}
h1 em{font-style:italic;color:var(--rose)}
p{font:600 ${u * 3.1}px/1.4 'Nunito';color:var(--taupe);margin-top:${u * 3.4}px;max-width:${W * (wide ? .33 : .36)}px}
.chips{display:flex;gap:${u * 1.4}px;margin-top:${u * 4}px}
.chip{background:var(--white);border:${u * .25}px solid var(--sand);color:var(--olive);font:800 ${u * 2.2}px 'Nunito';padding:${u * 1.3}px ${u * 2.6}px;border-radius:99px}
</style><div class="bg"></div>
<img class="logo" src="${brand('logo-horizontal.png')}" style="left:${textX}px;top:${u * 7}px;width:${u * (wide ? 30 : 27)}px">
<div class="t"><div style="height:${u * 14}px"></div>
<h1>Sağlıklı yaşam,<br><em>birlikte</em> daha kolay.</h1>
<p>Antrenman videoları, protein tarifleri ve fotoğrafla makro takibi tek uygulamada.</p>
<div class="chips"><span class="chip">Videolar</span><span class="chip">Tarifler</span><span class="chip">Makro Takibi</span></div></div>
${card('analysis.png', phoneW * 1.02, rx - phoneW * .05, py(wide ? 14 : 12), -3)}
${phone('home.png', phoneW, rx + gap * .95, py(wide ? 30 : 24), 0)}
${phone('recipes.png', phoneW, rx + gap * 1.95, py(wide ? 10 : 6), 3)}
`;
}

// ---------- MAĞAZA EKRAN GÖRÜNTÜSÜ (1320x2868) ----------
const shots = [
  { id: '1-makro', h: 'Fotoğrafla<br><em>makro takibi</em>', s: 'Öğününü çek, kalori ve makrolarını anında gör.', body: (W) => card('analysis.png', 1160, 80, 960, -2) },
  { id: '2-gunluk', h: 'Günün planı<br><em>tek ekranda</em>', s: 'Adım, su, enerji ve haftalık ritmini takip et.', body: () => phone('home.png', 940, 190, 800) },
  { id: '3-tarifler', h: 'Sağlıklı tarifler,<br><em>dakikalar içinde</em>', s: 'Yüksek proteinli ve düşük kalorili tarifler.', body: () => phone('recipes.png', 940, 190, 800) },
  { id: '4-videolar', h: 'Ekipmansız<br><em>antrenman videoları</em>', s: '10 ve 30 dakikalık seanslar, her seviyeye uygun.', body: () => phone('videos.png', 940, 190, 800) },
];
function shot(x) {
  const W = 1320;
  return `<style>${base}
.logo{left:${W / 2 - 150}px;top:90px;width:300px}
h1{position:absolute;left:0;right:0;top:250px;text-align:center;font:400 128px/1.04 'DM Serif Display';color:var(--olive)}
h1 em{font-style:italic;color:var(--rose)}
p{position:absolute;left:150px;right:150px;top:${x.h.includes('<br>') ? 560 : 520}px;text-align:center;font:600 46px/1.35 'Nunito';color:var(--taupe)}
</style><div class="bg"></div><img class="logo" src="${brand('logo-horizontal.png')}">
<h1>${x.h}</h1><p>${x.s}</p>${x.body(W)}`;
}

// ---------- ARAMA SONUCU ÖNİZLEME ----------
function search() {
  const W = 2000, H = 1750;
  const th = (id, k) => `<div style="width:300px;height:650px;border-radius:34px;overflow:hidden;position:relative;flex:none;border:2px solid #e6e1d8">${id}</div>`;
  return `<style>${base}
body{background:#f2f2f7}
.row{position:absolute;left:100px;top:100px;width:1800px;background:#fff;border-radius:40px;padding:50px;box-shadow:0 10px 40px rgba(0,0,0,.08)}
.top{display:flex;align-items:center;gap:36px}
.ic{width:170px;height:170px;border-radius:40px;background:var(--ivory);border:2px solid var(--sand);display:flex;align-items:center;justify-content:center}
.ic img{width:100px}
.nm{font:700 52px 'Nunito';color:#111}.sub{font:500 38px 'Nunito';color:#6d6d72;margin-top:6px}
.get{margin-left:auto;background:#eef0f6;color:#0a6cff;font:800 40px 'Nunito';padding:20px 56px;border-radius:99px}
.th{display:flex;gap:24px;margin-top:44px}
.th div img{width:100%;display:block}
.note{position:absolute;left:100px;top:1690px;font:600 28px 'Nunito';color:#8a8a8f}
</style><div class="row"><div class="top"><div class="ic"><img src="${brand('monogram.png')}"></div>
<div><div class="nm">B Club Wellness</div><div class="sub">Antrenman, tarif ve makro takibi</div></div><div class="get">AL</div></div>
<div class="th">${[1, 2, 3].map(i => `<img src="file://${here}/output/screenshots/${shots[i - 1].id}.png" style="width:548px;border-radius:36px;border:2px solid #e6e1d8">`).join('')}</div></div>
<div class="note">Önizleme — App Store arama sonucunda ilk 3 ekran görüntüsü böyle görünür (yükleme dosyası değildir).</div>`;
}

const ex = process.env.CHROMIUM_PATH || undefined;
const b = await chromium.launch({ executablePath: ex });
async function render(html, W, H, out) {
  const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const f = path.join(here, 'src', '_tmp.html'); fs.writeFileSync(f, `<!doctype html><meta charset="utf-8"><body style="width:${W}px;height:${H}px;position:relative">${html}`);
  await p.goto('file://' + f); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  await p.screenshot({ path: out }); await p.close(); console.log(out);
}
const o = path.join(here, 'output');
await render(header(5244, 2950), 5244, 2950, `${o}/header-5244x2950.png`);
await render(header(3840, 1646), 3840, 1646, `${o}/header-3840x1646.png`);
for (const s of shots) await render(shot(s), 1320, 2868, `${o}/screenshots/${s.id}.png`);
await render(search(), 2000, 1750, `${o}/arama-sonucu-onizleme.png`);
await b.close(); fs.rmSync(path.join(here, 'src/_tmp.html'));
