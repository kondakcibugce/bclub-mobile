/**
 * Terim sözlüğünün tek kaynağı egitim/terimler.json dosyasıdır.
 * Bu betik oradan iki çıktı üretir:
 *   1. egitim/terimler-sozlugu.md          — okunabilir sözlük
 *   2. hafta-01/kitapcik.html içindeki veri — TERMS_START / TERMS_END işaretleri arası
 *
 * Çalıştırma:  node egitim/scripts/terimler-uret.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = JSON.parse(await readFile(path.join(root, 'terimler.json'), 'utf8'));
const { gruplar, terimler } = src;

const sirali = Object.keys(gruplar).map((g) => ({
  g,
  baslik: gruplar[g],
  items: terimler
    .filter((t) => t.g === g)
    .sort((a, b) => a.t.localeCompare(b.t, 'tr')),
}));

/* ---------- 1. Markdown ---------- */
let md = `# Terim Sözlüğü

Müfredatta geçen her teknik terimin günlük dildeki karşılığı.
Bir terimi anlatamıyorsan, o terim henüz senin değildir.

**Kaynak dosya:** \`terimler.json\` · **Terim sayısı:** ${terimler.length}
Sözlük bu dosyadan üretilir: \`node egitim/scripts/terimler-uret.mjs\`

---

## İçindekiler

${sirali.map((s) => `- [${s.baslik}](#${slug(s.baslik)}) — ${s.items.length} terim`).join('\n')}

---
`;

for (const s of sirali) {
  md += `\n## ${s.baslik}\n\n`;
  for (const t of s.items) {
    md += `### ${t.t}\n\n${t.d}\n\n`;
    if (t.x) md += `> **Neden önemli:** ${t.x}\n\n`;
  }
}

md += `\n---\n\n## Hızlı arama tablosu\n\n| Terim | Tek cümlede |\n|---|---|\n`;
for (const t of [...terimler].sort((a, b) => a.t.localeCompare(b.t, 'tr'))) {
  md += `| **${t.t}** | ${t.d.split(/(?<=\.)\s/)[0].replace(/\|/g, '\\|')} |\n`;
}

await writeFile(path.join(root, 'terimler-sozlugu.md'), md, 'utf8');

/* ---------- 2. Kitapçığa enjeksiyon ---------- */
const htmlPath = path.join(root, 'hafta-01', 'kitapcik.html');
let html = await readFile(htmlPath, 'utf8');
const payload = JSON.stringify({ gruplar, terimler }, null, 0);
const block = `/*TERMS_START*/var TERMS=${payload};/*TERMS_END*/`;
const re = /\/\*TERMS_START\*\/[\s\S]*?\/\*TERMS_END\*\//;
if (!re.test(html)) throw new Error('kitapcik.html içinde TERMS_START/TERMS_END işaretleri bulunamadı');
html = html.replace(re, block);
await writeFile(htmlPath, html, 'utf8');

console.log(`✓ terimler-sozlugu.md yazıldı (${terimler.length} terim)`);
console.log(`✓ kitapcik.html güncellendi (${(payload.length / 1024).toFixed(1)} KB veri)`);

function slug(s) {
  return s
    .toLocaleLowerCase('tr')
    .replace(/[ıİ]/g, 'i').replace(/[şŞ]/g, 's').replace(/[ğĞ]/g, 'g')
    .replace(/[üÜ]/g, 'u').replace(/[öÖ]/g, 'o').replace(/[çÇ]/g, 'c')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
