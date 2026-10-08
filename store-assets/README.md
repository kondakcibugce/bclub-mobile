# App Store görselleri

- `output/header-5244x2950.png`, `output/header-3840x1646.png` — App Store Connect "Header" görselleri
- `output/screenshots/1..4-*.png` — 1320x2868 (6.9") ekran görüntüleri. İlk 3'ü arama sonucunda görünür.
- `output/arama-sonucu-onizleme.png` — arama sonucu önizlemesi (yüklenmez, sadece kontrol içindir)
- `brand/` — marka kitinden kırpılıp keskinleştirilen logo/monogram. Orijinal vektör logo gelince değiştirilmeli.
- `src/img/` — `assets/bclub logo/` içindeki ekran görüntülerinden hazırlanan kırpmalar

Yeniden üretmek için: `npm i -D playwright-core` ve `PW_PATH=./node_modules CHROMIUM_PATH=<chrome> node store-assets/build.mjs`
