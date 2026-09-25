# Hafta 1 — Metabolizma, Nabız ve Antrenman Temelleri

> **Haftanın hedefi:** Bir danışan karşına oturduğunda; kaç kalori yaktığını hesaplayabilmek,
> yağlanma tipini okuyabilmek, eklemini riske atmadan hangi nabız aralığında ne kadar
> çalıştıracağına karar verebilmek ve bunu NASM OPT modeline oturtmak.

**Süre:** 7 gün · **Modül sayısı:** 11 · **Sınav:** 100 puan, geçme 80

---

## İçindekiler

1. [Bazal Metabolizma Hızı (BMR)](#1-bazal-metabolizma-hızı-bmr)
2. [Merkez (android) ağırlıklı yağlanmada antrenman](#2-merkez-android-ağırlıklı-yağlanmada-antrenman)
3. [Uzuv (gynoid) ağırlıklı yağlanmada antrenman](#3-uzuv-gynoid-ağırlıklı-yağlanmada-antrenman)
4. [Eklem yükü olan kilolu bireyde başlangıç](#4-eklem-yükü-olan-kilolu-bireyde-başlangıç)
5. [Aerobik ve anaerobik nabız aralıkları](#5-aerobik-ve-anaerobik-nabız-aralıkları)
6. [Yağ yakım aralığının önemi (ve yalanı)](#6-yağ-yakım-aralığının-önemi-ve-yalanı)
7. [VO2 max](#7-vo2-max)
8. [Statik ve dinamik esneklik](#8-statik-ve-dinamik-esneklik)
9. [Laktik asit birikimi](#9-laktik-asit-birikimi)
10. [Sedanter birey ve NASM OPT basamakları](#10-sedanter-birey-ve-nasm-opt-basamakları)
11. [Ek modül: Antrenörün ilk 60 dakikası](#11-ek-modül-antrenörün-i̇lk-60-dakikası)

---

## 1. Bazal Metabolizma Hızı (BMR)

### Tanım

**BMR (Basal Metabolic Rate):** Vücudun tam dinlenme, uyanık, aç (12 saat), termonötr ortamda,
sabah yataktan kalkmadan harcadığı minimum enerji. Sadece hayatta kalmak için: kalp atıyor,
akciğer çalışıyor, beyin işliyor, böbrek süzüyor, hücre zarında sodyum-potasyum pompası dönüyor.

**RMR (Resting Metabolic Rate):** Aynı şeyin gevşek koşullardaki hali. Pratikte ölçülen budur ve
BMR'den **%5–10 yüksek** çıkar. Günlük konuşmada ikisi aynı anlamda kullanılır; sen farkı bil.

### Günlük enerji harcamasının kırılımı (TDEE)

| Bileşen | Payı | Ne demek |
|---|---:|---|
| **BMR / RMR** | %60–75 | Yatakta yatsan da harcadığın |
| **TEF** (besinin termik etkisi) | ~%10 | Sindirim maliyeti. Protein %20–30, karbonhidrat %5–10, yağ %0–3 |
| **NEAT** (egzersiz dışı aktivite) | %15–30 | Yürümek, ayakta durmak, bulaşık, tempolu konuşmak, kıpırdanmak |
| **EAT** (egzersiz aktivitesi) | %5 (sedanterde), sporcuda %15–30 | Planlı antrenman |

> **Antrenör notu:** Diyete girenlerde kilo kaybı duraklamasının 1 numaralı sebebi genelde
> "metabolizma çöktü" değil, **NEAT'in düşmesi**. Aç ve yorgun insan gün içinde daha az kıpırdar.
> Bu yüzden adım sayısı takibi, kalori takibi kadar kıymetlidir.

### Formüller

#### A) Mifflin-St Jeor (1990) — **varsayılan seçimin bu olsun**
Genel popülasyonda, hem normal kilolu hem obez bireyde en düşük hata payına sahip denklem.

```
Erkek : BMR = (10 × kg) + (6.25 × boy_cm) − (5 × yaş) + 5
Kadın : BMR = (10 × kg) + (6.25 × boy_cm) − (5 × yaş) − 161
```

#### B) Harris-Benedict (Roza & Shizgal 1984 revizyonu)
Eski klasik. Genelde Mifflin'den ~%5 yüksek tahmin eder.

```
Erkek : BMR = 88.362 + (13.397 × kg) + (4.799 × boy_cm) − (5.677 × yaş)
Kadın : BMR = 447.593 + (9.247 × kg) + (3.098 × boy_cm) − (4.330 × yaş)
```

#### C) Katch-McArdle — **yağsız kütleyi biliyorsan en iyisi**
Cinsiyet değişkeni yok, çünkü asıl belirleyici yağsız kütledir (LBM).

```
LBM (kg) = kg × (1 − yağ_yüzdesi/100)
BMR = 370 + (21.6 × LBM)
```

#### D) Cunningham (1980) — sporcularda tercih edilir
```
BMR = 500 + (22 × LBM)
```

### TDEE'ye geçiş: aktivite çarpanları

```
TDEE = BMR × aktivite katsayısı
```

| Katsayı | Kim |
|---:|---|
| 1.20 | Sedanter — masa başı, planlı egzersiz yok |
| 1.375 | Hafif aktif — haftada 1–3 gün hafif egzersiz |
| 1.55 | Orta aktif — haftada 3–5 gün |
| 1.725 | Çok aktif — haftada 6–7 gün, ağır |
| 1.90 | Ekstra aktif — günde 2 antrenman / ağır fiziksel iş |

> **Uyarı:** Çarpanlar kaba tahmindir, ±%15 sapabilir. Doğru kullanım şudur:
> hesapla → **2 hafta uygula ve tart** → gerçek değişime göre kalibre et.
> Formül başlangıç noktasıdır, hakikat değildir.

### Örnek hesap (bunu ezberle, sınavda çıkacak)

**Danışan:** Kadın, 34 yaş, 78 kg, 165 cm, yağ oranı %34, haftada 3 gün antrenman.

Mifflin-St Jeor:
```
(10 × 78) + (6.25 × 165) − (5 × 34) − 161
= 780 + 1031.25 − 170 − 161
= 1480.25 ≈ 1480 kcal/gün  → BMR
TDEE = 1480 × 1.55 = 2294 kcal/gün
```

Katch-McArdle ile kontrol:
```
LBM = 78 × (1 − 0.34) = 51.5 kg
BMR = 370 + (21.6 × 51.5) = 370 + 1112 = 1482 kcal/gün
```
İki yöntem 2 kcal farkla örtüştü → tahmine güvenebiliriz.

**Kilo verme hedefi:** TDEE − %20 = 2294 × 0.80 ≈ **1835 kcal/gün**
Haftalık beklenen kayıp: 459 kcal/gün × 7 ≈ 3213 kcal ≈ **0.4 kg/hafta**

> **Kırmızı çizgi:** Hiçbir yetişkin kadına BMR'nin altında (bu örnekte 1480 kcal),
> hiçbir yetişkin erkeğe 1500 kcal altında plan yazılmaz. Bu antrenörün işi değil,
> hekim/diyetisyen işidir.

### BMR'yi neler değiştirir

**Yükseltir:** yağsız kas kütlesi (en güçlü belirleyici), genç yaş, erkek cinsiyet, tiroid
hormonları (T3/T4), soğuk ortam, ateş (her 1 °C ≈ %13), gebelik-emzirme, kafein-nikotin (geçici,
küçük), büyüme dönemi.

**Düşürür:** kas kaybı, ileri yaş (dekattaki ~%1–2 düşüş çoğunlukla kas kaybına bağlıdır),
uzun süreli agresif kalori kısıtlaması (adaptif termogenez), hipotiroidi, uyku yoksunluğu.

> **Sık yapılan hata:** "Kas 1 kg = günde 100 kalori." **Yanlış.** 1 kg kas dinlenimde
> yaklaşık **13 kcal/gün** yakar; 1 kg yağ ~4.5 kcal. Kasın asıl faydası dinlenim yakımı değil;
> glikoz deposu, insülin duyarlılığı, fonksiyon, duruş ve yaralanma koruması.

### Altın standart ölçüm
**İndirekt kalorimetre** — tüketilen O₂ ve üretilen CO₂ ölçülür, Weir denklemiyle enerji hesaplanır.
Aynı ölçüm sana **RER (solunum değişim oranı)** verir: 0.70 = saf yağ yakımı, 1.00 = saf karbonhidrat.
Bu kavram 6. modülde tekrar karşına çıkacak.

---

## 2. Merkez (android) ağırlıklı yağlanmada antrenman

### Tanıma

**Android / santral / "elma" tip:** Yağ karın bölgesinde, bel çevresinde, göbek içi (visseral) ve
üst gövdede toplanır. Erkeklerde ve menopoz sonrası kadınlarda baskındır.

**Neden önemli:** Visseral yağ metabolik olarak aktif bir organ gibi davranır. Portal ven yoluyla
doğrudan karaciğere serbest yağ asidi ve inflamatuar sitokin (IL-6, TNF-α) gönderir. Sonuç:
insülin direnci, yüksek trigliserit, düşük HDL, hipertansiyon, kronik düşük dereceli inflamasyon.
Bu bir estetik konusu değil, **metabolik risk konusudur**.

### Ölçüm ve sınırlar (ezberlenecek)

| Ölçü | Erkek | Kadın |
|---|---|---|
| Bel çevresi — risk artışı | > 94 cm | > 80 cm |
| Bel çevresi — yüksek risk | > 102 cm | > 88 cm |
| Bel/kalça oranı (WHR, WHO) | > 0.90 | > 0.85 |
| **Bel/boy oranı (WHtR)** | **> 0.5** | **> 0.5** |

> WHtR en pratik ve en güçlü tarama aracı: *"Bel çevren boyunun yarısından az olsun."*
> Tek cümlede danışana anlatabileceğin, cinsiyet ve etnik köken farkı gözetmeyen kural.

**Bel ölçümü tekniği:** Ayakta, ayaklar kalça genişliğinde, normal nefes verme sonunda,
iliak kanat üst kenarı ile son kaburga arasındaki en dar nokta. Mezura yere paralel, deriyi ezmeden.
Her ölçümde aynı saat, aynı teknik, aynı kişi.

### Antrenman metodu

Merkez yağlanmada oyun planı **enerji açığı + insülin duyarlılığı + kortizol yönetimi** üçgenidir.

#### Haftalık iskelet (orta düzey, 4–5 gün)

| Gün | İçerik |
|---|---|
| 1 | Tam vücut kuvvet A (çok eklemli, 6–8 hareket, 8–12 tekrar, 3 set) |
| 2 | Zon 2 aerobik 40–50 dk (konuşabildiği tempo) |
| 3 | Tam vücut kuvvet B |
| 4 | İnterval: 8 × 1 dk yüksek / 2 dk kolay **veya** 4 × 4 dk (Norveç protokolü) |
| 5 | Tam vücut kuvvet C + 20 dk Zon 2 |
| 6–7 | Aktif toparlanma: 8.000–10.000 adım, mobilite, esneklik |

#### Neden bu sıra

1. **Kuvvet antrenmanı önce gelir.** Kas, kan şekerinin en büyük deposudur. Direnç antrenmanı
   insülinden bağımsız GLUT4 translokasyonu sağlar — yani insülin direnci olan bir bedende bile
   kası kasmak şekeri hücre içine sokar. Ayrıca açıkta kas kaybını engeller.
2. **Zon 2 aerobik hacmi.** Visseral yağ, aerobik egzersize **kilo kaybı olmasa bile** yanıt verir.
   Mitokondri yoğunluğu ve yağ oksidasyon kapasitesi burada gelişir. Haftada **150–300 dk orta şiddet**
   (veya 75–150 dk yüksek şiddet) taban hedeftir.
3. **HIIT haftada 1–2, fazlası değil.** Zaman verimlidir, EPOC yaratır, VO2max'ı hızlı artırır.
   Ama merkez yağlanma zaten sıklıkla yüksek kortizol tablosuyla gelir; haftada 3–4 HIIT bu tabloyu
   kötüleştirir, uykuyu bozar, iştahı artırır. **Dozu ilaç gibi düşün.**
4. **NEAT.** Günde 8.000–10.000 adım ve özellikle **yemek sonrası 10–15 dakikalık yürüyüş**.
   Yemek sonrası yürüyüş, postprandiyal glikoz pikini belirgin şekilde düşürür — danışanına
   verebileceğin en ucuz, en yüksek getirili tek alışkanlık budur.

#### Kortizol ve uyku kolu (atlanırsa plan çalışmaz)
- Uyku 7–9 saat. 5 saat uyuyan birine kalori açığı yazmak, delik kovaya su doldurmaktır.
- Kalori açığı **%15–25** aralığında kalsın. Agresif açık + yüksek hacimli HIIT = kortizol tavan,
  toparlanma dibe.
- Haftada en az 1 tam dinlenme günü, 6–8 haftada bir **deload** (hacmi %40–50 azalt).
- Protein **1.6–2.2 g/kg**. Açıkta kas koruması için pazarlık konusu değildir.

### Sık yapılan hatalar

| Hata | Gerçek |
|---|---|
| Göbek eriteceğim diye günde 300 mekik | **Bölgesel yağ yakımı yoktur.** Karın egzersizi karın yağını eritmez; kası çalıştırır, yağı vücut sistemik olarak seferber eder |
| Sadece koşu bandı | Kas kaybı + metabolizma düşüşü + duraklama |
| Her gün yüksek şiddet | Kortizol, uyku bozukluğu, iştah artışı, sakatlık |
| Tartıya günlük takıntı | Haftalık ortalama + **bel çevresi** + fotoğraf + performans. Merkez yağlanmada bel cm'i tartıdan daha bilgilendiricidir |

---

## 3. Uzuv (gynoid) ağırlıklı yağlanmada antrenman

### Tanıma

**Gynoid / periferik / "armut" tip:** Yağ kalça, basen, uyluk ve üst kolda, deri altında
(subkutan) toplanır. Premenopozal kadınlarda baskındır, östrojen etkisiyle ilişkilidir.

**Fizyolojisi neden inatçı:** Gluteofemoral yağ dokusunda **lipoprotein lipaz (LPL)** aktivitesi
yüksek (yağ depolamaya meyilli), **alfa-2 adrenerjik reseptörler** baskın (lipolizi frenler),
beta-adrenerjik reseptör yoğunluğu düşük. Yani bu bölge biyolojik olarak "son boşalan depo"dur.

> **İyi haber, danışana mutlaka söyle:** Gluteofemoral yağ metabolik olarak **koruyucudur**.
> Aynı vücut yağ oranında armut tip, elma tipe göre daha düşük kardiyometabolik risk taşır.
> Bu bir hastalık değil, bir dağılım biçimidir.

### Ayırıcı tanı — bunu kaçırma

Bacaklarda simetrik, orantısız, **dokunmakla ağrılı**, kolay morarabilen, diyet ve egzersize
neredeyse hiç cevap vermeyen, **ayak bileğinde keskin bir sınırla biten** (ayaklar korunmuş)
yağlanma → **lipödem** olabilir. Lipödem bir yağ dokusu hastalığıdır, antrenörün işi değildir.
Tek taraflı, gode bırakan (parmakla bastırınca çukur kalan) şişlik → **lenfödem/venöz yetmezlik**
şüphesi. Her iki durumda da **hekime yönlendir**, "daha çok çalış" deme.

### Antrenman metodu

Merkez tipten farkı: aciliyet metabolik değil, **kompozisyon ve form** odaklıdır. Süre uzundur,
sabır gerekir, beklenti yönetimi işin yarısıdır.

#### Haftalık iskelet (4–5 gün)

| Gün | İçerik |
|---|---|
| 1 | Alt vücut — kuvvet/dayanıklılık odaklı (12–20 tekrar, kısa dinlenme 30–45 sn) |
| 2 | Zon 2 aerobik 45–60 dk (bisiklet, eliptik, tempolu yürüyüş, yüzme) |
| 3 | Üst vücut + core kuvvet (8–12 tekrar) — omuz genişliği görsel dengeyi kurar |
| 4 | Zon 2 + mobilite/esneklik bloğu |
| 5 | Tam vücut kuvvet + 15–20 dk hafif interval |

#### Metodun gerekçeleri

1. **Toplam enerji açığı yine belirleyicidir.** Bölgesel yağ yakımı burada da yoktur.
   Uzuvdaki yağ ancak toplam yağ oranı düştükçe ve genelde **en son** azalır.
2. **Süre > şiddet.** Periferik yağ mobilizasyonu için uzun, sürekli, orta şiddetli çalışma
   (45–60 dk Zon 2) kan akımını ve yağ asidi taşınmasını destekler. Bu grupta yüksek hacimli
   HIIT gereksiz yorgunluk üretir.
3. **Düşük darbeli seçim.** Bisiklet, eliptik, kürek, yüzme, yokuş yürüyüşü. Yüksek darbeli koşu
   erken dönemde konfor ve bağlılığı düşürür.
4. **Alt vücutta başlangıç stratejisi.** İlk 6–8 hafta **yüksek tekrar / metabolik** çalış
   (12–20 tekrar, süperset, kısa dinlenme). Ağır hipertrofi bloğu erken verilirse kas hacmi
   artar, yağ henüz azalmamıştır ve **uyluk çevresi geçici olarak büyür** → danışan programı bırakır.
   Yağ oranı düştükten sonra kuvvet/hipertrofi bloğuna geç.
5. **Kalça (glute) kuvvetine yatırım yap.** Hip thrust, RDL, kalça abduksiyonu, adımlama.
   Hem form hem de diz/bel sağlığı için en yüksek getirili yatırım.
6. **Dolaşım ve ödem desteği:** uzun süre hareketsiz oturmayı böl (saatte 3–5 dk ayağa kalk),
   gün sonunda 10–15 dk bacak yukarı duruşu, yeterli su, sodyum dengesi, hekimi onay verirse
   kompresyon çorabı. Ayak bileği pompası (ayak bileğini 20–30 kez aşağı-yukarı) ucuz ve etkilidir.

### Sık yapılan hatalar

| Hata | Gerçek |
|---|---|
| "Bacak eritme" hareketleri, makineli iç-dış bacak | Bölgesel yağ yakımı yok. Bu hareketler kası çalıştırır |
| Sadece kardiyo, sıfır ağırlık | Kas kaybı → yağ oranı yüzdesi düşmez, form bozulur |
| İlk haftadan ağır squat/lunge hipertrofi bloğu | Çevre ölçüsü artar, motivasyon çöker |
| Ödem ve yağı karıştırmak | Sabah-akşam çevre farkı belirginse önce ödem yönetimi, gerekirse hekim |

---

## 4. Eklem yükü olan kilolu bireyde başlangıç

### Önce güvenlik: ne zaman başlanır?

#### Adım 1 — Tarama
**PAR-Q+** doldurulur. ACSM ön katılım algoritmasına göre şu durumda **hekim onayı şarttır:**
- Bilinen kardiyovasküler, metabolik (tip 1–2 diyabet) veya böbrek hastalığı **var** ve kişi
  şu anda düzenli egzersiz **yapmıyor**.
- Hastalığın kendisi ne olursa olsun **semptom** varsa: dinlenirken/eforla göğüs ağrısı,
  olağandışı nefes darlığı, baş dönmesi/bayılma, çarpıntı, ayak bileğinde ödem,
  gece nefes darlığıyla uyanma, bilinen üfürüm, açıklanamayan yorgunluk.

#### Adım 2 — Eklemin akut mu kronik mi olduğu
| Durum | Ne yapılır |
|---|---|
| Akut: sıcak, kızarık, şiş, istirahatte ağrı, gece ağrısı | **Antrenman başlamaz.** Hekim. |
| Yeni travma (<6 hafta), kilitlenme, boşalma hissi | Hekim / fizyoterapist. |
| Kronik, stabil ağrı (ör. diz osteoartriti), istirahatte rahat | **Başlanır.** Egzersiz burada tedavinin kendisidir. |

> **Kritik bilgi:** Diz osteoartritinde egzersiz kontrendike değildir; **birinci basamak tedavidir**
> (OARSI, NICE, ACR kılavuzları). Doğru dozda egzersiz ağrıyı azaltır, fonksiyonu artırır.
> Yanlış olan egzersiz yapmak değil, yanlış dozda yapmaktır.

### Yük matematiği — danışanı motive eden rakam

Yürürken dizin üzerinden geçen kompresyon kuvveti vücut ağırlığının **3–4 katıdır**.
Yani **1 kg kilo kaybı ≈ her adımda dizden 3–4 kg daha az yük.**
5 kg verirse → adım başına ~20 kg daha az. Günde 6.000 adım × 20 kg = **120 ton daha az yük/gün**.
Bu cümle, "biraz kilo ver" cümlesinden yüz kat güçlüdür.

Vücut ağırlığının **%5–10'unu** kaybetmek diz ağrısında klinik anlamlı düzelme sağlar.

### Nasıl başlanır — 4 basamaklı giriş

#### Basamak 0 (Hafta 0–2): Yükü azaltarak hareketi öğret
- **Havuz / su içi yürüyüş.** Bel hizasında su vücut ağırlığının ~%50'sini, göğüs hizasında
  ~%25–30'a kadarını taşır. Eklem yükü olan kilolu bireyde **en iyi başlangıç ortamıdır**.
  Su sıcaklığı 28–31 °C ideal.
- Alternatifler: yatar (recumbent) bisiklet, kol ergometresi, eliptik, oturarak yapılan makineler.
- **Doz:** günde 2–3 kez **10 dakika**, RPE 3–4/10 (Borg CR10). Blok blok biriktir; 30 dakikanın
  tek seferde yapılması şart değil — kanıtlar bölünmüş seansların da işe yaradığını gösteriyor.
- Hedef: 3–5 gün/hafta, toplam 60–90 dk/hafta ile başla.

#### Basamak 1 (Hafta 2–6): Eklemi çevreleyen kası güçlendir
Ağrıyan eklemin etrafındaki kas, o eklemin doğal amortisörüdür.
- **İzometrikler:** quad set (uyluk sıkma) 5 sn × 10, gluteal sıkma, duvara karşı kısa açılı
  oturuş. İzometrik kasılma ağrılı eklemde **analjezik etki** yaratır — ağrı eşiğini yükseltir.
- **Kapalı zincir, ağrısız açıklıkta:** sandalyeden kalkıp oturma (sit-to-stand), mini squat
  (0–45°), kalça köprüsü, ayakta kalça abduksiyonu, ayak bileği pompası.
- **Doz:** 2–3 gün/hafta, 1–2 set × 10–15 tekrar, yavaş tempo (4/2/1), ağrısız açıklık içinde.

#### Basamak 2 (Hafta 6–12): Hacmi büyüt, sonra şiddeti
Altın kural sırası: **Sıklık → Süre → Şiddet.** Aynı anda ikisini birden artırma.
- Aerobik: 10 dk bloklar → 20 dk kesintisiz → 30 dk kesintisiz → sonra tempo artışı.
- Kuvvet: tekrar sayısını artır → set ekle → sonra ağırlık ekle.
- Haftalık ilerleme tavanı: toplam hacimde **%10**.

#### Basamak 3 (Hafta 12+): Fonksiyon ve gerekirse darbe
Merdiven, yokuş, yürüyüş temposu, taşıma (farmer carry), tek bacak dengesi.
**Koşu/pliometri kriterleri karşılanmadan verilmez:** ağrısız 30 dk yürüyüş, tek bacak
sit-to-stand yapabilme, denge testi, ve kilo kaybının ilerlemiş olması.

### Ağrı kuralı — danışana ezberletilecek

> **"10 üzerinden 4'ü geçmesin, ertesi güne sarkmasın."**
>
> - Egzersiz sırasında ağrı **≤ 4/10** olabilir, üstüne çıkmaz.
> - Egzersizden **24 saat sonra** ağrı, egzersiz öncesi seviyesine dönmüş olmalı.
> - Dönmediyse → bir sonraki seansta hacmi **%20–30 azalt**, bırakma.
> - Eklem şişti, ısındı, kilitlendi → dur, hekim.

### Malzeme ve ortam detayları (ayrıntı gibi görünür, bağlılığı belirler)
- Destekli, tabanı yumuşak ayakkabı; sert betonda uzun yürüyüş yok.
- Yere inip kalkmayı gerektiren egzersizlerden başlangıçta kaçın; sandalye/sehpa yüksekliğini kullan.
- Sandalye yüksekliğini ayarlayarak sit-to-stand'i kolaylaştır (yastık ekle) — ilerleme yastığı
  çıkarmaktır, ağırlık eklemek değil.
- Derin diz fleksiyonunda yüklenme (derin squat, derin lunge, çömelme) erken dönemde yok.
- Seans 45 dakikayı geçmesin; sıcak, havalandırılmış ortam.

---

## 5. Aerobik ve anaerobik nabız aralıkları

### Temel kavram

Enerji sistemleri bir anahtar gibi açılıp kapanmaz, **birlikte çalışır**; şiddet arttıkça katkı payı değişir.

| Sistem | Süre | Yakıt | Baskın olduğu iş |
|---|---|---|---|
| **ATP-PC (fosfojen)** | 0–10 sn | Kreatin fosfat | 1RM, sprint, sıçrama |
| **Anaerobik glikoliz** | 10 sn – 2 dk | Kas glikojeni | 400 m, ağır set, 60 sn interval |
| **Aerobik (oksidatif)** | 2 dk – saatler | Karbonhidrat + yağ | Zon 2, maraton, günlük hayat |

### Maksimum nabız (HRmax) nasıl bulunur?

```
220 − yaş            → En yaygın, EN HATALI. Standart sapma ±10–12 atım!
208 − (0.7 × yaş)    → Tanaka (2001). Kullan.
207 − (0.7 × yaş)    → Gellish (2007)
211 − (0.64 × yaş)   → Nes (2013)
```

40 yaşında biri için: 220−40 = **180** · Tanaka = 208−28 = **180**.
25 yaşında: 220−25 = **195** · Tanaka = 208−17.5 = **190.5**.
60 yaşında: 220−60 = **160** · Tanaka = 208−42 = **166**.

> Görüldüğü gibi 220−yaş gençte yüksek, yaşlıda düşük tahmin eder. **Tanaka'yı kullan.**
> Gerçek doğruluk için sahada maksimal test (ör. artan yüklü koşu bandı testi) gerekir —
> bu da sağlıklı ve hazır bireylerde, gözetim altında yapılır.

### Dinlenim nabzı (HRrest)
Sabah uyanınca, yataktan kalkmadan, 3 gün üst üste 60 saniye say, ortalamasını al.
Normal yetişkin 60–100; antrenmanlı 40–60; elit dayanıklılık sporcusu 30'lar.
**Dinlenim nabzının zamanla düşmesi, aerobik gelişimin en ucuz kanıtıdır.**

### Karvonen (Nabız Rezervi — HRR) yöntemi — daha doğru olan bu

```
HRR = HRmax − HRrest
Hedef Nabız = (HRR × şiddet%) + HRrest
```

**Örnek:** 34 yaş, HRrest 68.
```
HRmax = 208 − (0.7 × 34) = 208 − 23.8 = 184
HRR   = 184 − 68 = 116

%60 şiddet → (116 × 0.60) + 68 = 69.6 + 68 = 138 atım/dk
%70 şiddet → (116 × 0.70) + 68 = 81.2 + 68 = 149 atım/dk
%80 şiddet → (116 × 0.80) + 68 = 92.8 + 68 = 161 atım/dk
```

Aynı kişinin sadece %HRmax ile hesaplanan %60'ı: 184 × 0.60 = **110** atım.
**Aradaki 28 atımlık fark, yanlış programlanmış bir antrenman demektir.** Karvonen'i kullan.

### Beş bölge (5 zon) sistemi

| Zon | %HRmax | %HRR | Laktat | Konuşma testi | Amaç |
|---|---|---|---|---|---|
| **Z1** Toparlanma | 50–60 | <40 | ~1 mmol/L | Rahat şarkı söyler | Aktif dinlenme, ısınma |
| **Z2** Aerobik taban | 60–70 | 40–59 | 1–2 | Cümle kurar, nefes düzenli | Mitokondri, kapiller, yağ oksidasyonu |
| **Z3** Tempo | 70–80 | 60–74 | 2–4 | Kısa cümleler | Aerobik kapasite, "gri bölge" |
| **Z4** Eşik | 80–90 | 75–89 | 4–6 | 2–3 kelime | Laktat eşiği, yarış temposu |
| **Z5** VO2max | 90–100 | ≥90 | >6 | Konuşamaz | Maksimal aerobik güç, anaerobik |

**Aerobik aralık:** kabaca **Z1–Z3** ve Z4'ün alt kısmı — anaerobik eşiğin altı.
**Anaerobik aralık:** **anaerobik eşiğin üstü**, pratikte ~%85–90 HRmax ve yukarısı (Z4 üst–Z5).
Burada kan laktatı birikmeye başlar, iş süresi dakikalarla sınırlıdır.

> **Anaerobik eşik sabit bir yüzde değildir.** Antrenmansız birinde %60–70 VO2max'ta,
> elit sporcuda %85–90 VO2max'ta gerçekleşir. Yüzdeler harita; hakikat kişinin kendi testidir.

### Kutuplaşmış (polarize) dağılım — 80/20
Dayanıklılık antrenmanında kanıta dayalı dağılım: haftalık hacmin **~%80'i Z1–Z2**,
**~%20'si Z4–Z5**. Z3 ("gri bölge") çok zaman geçirmek, yorgunluğu toplayıp gelişimi durdurur.
Amatörlerin en yaygın hatası: her antrenmanı orta-zor yapmak. **Kolay günü gerçekten kolay yap.**

### Nabzı bozan faktörler (sahada mutlaka sor)
Sıcak/nem (kardiyak drift: aynı hızda nabız zamanla yükselir), dehidrasyon, kafein, uykusuzluk,
hastalık/ateş, stres, yükseklik, **beta blokerler ve bazı kalp ilaçları**.

> **Beta bloker kullanan danışanda nabız hedefi geçersizdir.** Bu kişide şiddeti
> **Borg RPE (6–20 skalasında 11–14)** ve konuşma testiyle yönet. Bu bilgi sınavda çıkar,
> sahada hayat kurtarır.

---

## 6. Yağ yakım aralığının önemi (ve yalanı)

### Fizyoloji

Düşük şiddette enerjinin çoğu **yağdan** gelir. Şiddet arttıkça yakıt tercihi karbonhidrata kayar.
Bu geçişe **crossover kavramı** (Brooks & Mercier) denir. Nedenleri: kas içi glikojenoliz artar,
adrenalin yükselir, tip II lifler devreye girer, laktat artışı yağ asidi mobilizasyonunu baskılar.

**Fatmax:** Dakikada yakılan **mutlak yağ miktarının en yüksek** olduğu şiddet.
- Antrenmansız/sedanter: ~**%45–55 VO2max** (kabaca **%60–70 HRmax**, yani Zon 2)
- Antrenmanlı dayanıklılık sporcusu: **%60–65 VO2max**'a kadar çıkar

Bunu gösteren ölçüt **RER (Respiratory Exchange Ratio)**: 0.70 = %100 yağ, 0.85 = ~%50/50,
1.00 = %100 karbonhidrat.

### "Yağ yakım bölgesi" neden yanıltıcı — rakamla göster

**Danışan: 70 kg, 45 dakika çalışıyor.**

| Senaryo | Toplam kcal | Yağdan % | Yağdan kcal |
|---|---:|---:|---:|
| A) %60 HRmax, 45 dk | 300 | %60 | **180** |
| B) %80 HRmax, 45 dk | 500 | %35 | **175** |

Yağdan yakılan kalori neredeyse aynı — ama B senaryosunda **200 kcal daha fazla toplam enerji**
harcandı. Üstüne B'nin **EPOC**'u (egzersiz sonrası oksijen tüketimi) daha yüksektir ve o fazla
tüketim ağırlıklı olarak yağdan karşılanır.

> **Anlaşılması gereken tek cümle:** Yağ kaybını belirleyen şey antrenman sırasında hangi yakıtı
> kullandığın değil, **24 saatlik enerji dengendir.** Vücut yakıtı gün içinde sürekli takas eder.

### O zaman Zon 2 niye bu kadar değerli?

Bölge yanlış pazarlanıyor ama **kendisi çok değerli.** Gerçek gerekçeler:

1. **Sürdürülebilirlik.** Sedanter/obez danışan Zon 2'de 45 dk yapabilir; Zon 4'te 6 dakika
   sonra bırakır. Yapılabilen antrenman, teorik olarak "daha iyi" olandan üstündür.
2. **Düşük eklem ve sinir sistemi yükü.** Toparlanma maliyeti düşük → haftalık hacim artar.
3. **Metabolik altyapı.** Mitokondri sayısı ve hacmi, kapiller yoğunluk, FAT/CD36 ve CPT-1
   taşıyıcıları, yağ oksidasyon kapasitesi Zon 2'de gelişir. **Metabolik esneklik** burada kurulur.
4. **Taban olmadan tavan olmaz.** Zayıf aerobik tabanla HIIT yapan kişi, toparlanamaz ve sakatlanır.
5. **Bağlılık.** Danışan antrenmandan nefret etmeden çıkar ve ertesi gün yine gelir.

### Antrenör kararı

| Danışan | Reçete |
|---|---|
| Sedanter, obez, eklem yükü var | %70–80 Zon 1–2, HIIT yok ya da çok az |
| Orta seviye, zamanı kısıtlı | %70–80 Zon 2 + haftada 1–2 interval |
| İleri seviye, performans hedefi | Polarize 80/20 |

---

## 7. VO2 max

### Tanım

**VO2max:** Vücudun birim zamanda kullanabileceği **maksimum oksijen miktarı**.
Birim: **ml/kg/dk** (göreli) veya **L/dk** (mutlak). Aerobik kapasitenin tavanıdır.

### Fick denklemi — neden VO2max artar?

```
VO2 = Kalp Debisi × (a-v)O2 farkı
    = (Kalp Atım Hızı × Atım Hacmi) × (arter-ven oksijen farkı)
```

- **Merkezi faktör:** Atım hacmi (sol ventrikül dolumu, kalp kası) → antrenmanla artar,
  VO2max gelişiminin en büyük payı buradan gelir.
- **Periferik faktör:** Kasın oksijeni çekip kullanma kapasitesi — kapiller yoğunluk,
  mitokondri, myoglobin, oksidatif enzimler.

### Ölçüm

**Altın standart:** Laboratuvarda artan yüklü test + metabolik araba (spirometre).
Gerçek maksimum kabul kriterleri:
- VO2'de **plato** (yük artmasına rağmen oksijen tüketimi artmıyor)
- **RER > 1.10**
- Nabız, yaşa göre tahmin edilen HRmax'ın ±10 atımı içinde
- **RPE ≥ 17** (Borg 6–20)
- Kan laktatı **> 8 mmol/L**

**Saha testleri (sen bunları kullanacaksın):**

| Test | Kim için | Formül |
|---|---|---|
| **Cooper 12 dk koşu** | Sağlıklı, koşabilen | `VO2max = (mesafe_m − 504.9) / 44.73` |
| **Rockport 1 mil yürüyüş** | Sedanter, kilolu, yaşlı — **en güvenlisi** | Ağırlık, yaş, cinsiyet, süre ve bitiş nabzı ile |
| **Queens College basamak testi** (3 dk, 41 cm) | Genel popülasyon | E: `111.33 − (0.42 × nabız)` · K: `65.81 − (0.1847 × nabız)` |
| **20 m mekik (beep test)** | Genç, sporcu, takım | Seviye/mekik tablosundan |
| **YMCA bisiklet** | Eklem yükü olan | Submaksimal, kademeli |

**Cooper örneği:** 12 dakikada 2.400 m koşan kişi:
```
(2400 − 504.9) / 44.73 = 1895.1 / 44.73 ≈ 42.4 ml/kg/dk
```

### Normatif değerler (yaklaşık, 30–39 yaş, ml/kg/dk)

| Sınıf | Erkek | Kadın |
|---|---|---|
| Zayıf | < 35 | < 28 |
| Ortalama | 39–44 | 31–36 |
| İyi | 45–52 | 37–44 |
| Çok iyi | 53–60 | 45–52 |
| Elit dayanıklılık | 70–85 | 60–75 |

*(Kayıtlı en yüksek değerler kayaklı koşu ve bisiklette ~90+ ml/kg/dk.)*

### Nasıl geliştirilir?

- **Antrenmanla artış:** %5–25. Genetik payı ~%50 (HERITAGE çalışması); aynı programa
  "yüksek yanıt verenler" ve "düşük yanıt verenler" vardır. Danışanına bunu baştan söyle.
- **En etkili protokol:** yüksek şiddetli aralıklı antrenman.
  **4 × 4 dk @ %90–95 HRmax, aralarda 3 dk aktif toparlanma @ %70** (Norveç protokolü),
  haftada 2–3 gün. Klasik ve en iyi belgelenmiş VO2max protokolüdür.
- Bunun altına **yüksek hacimli Zon 2 tabanı** şarttır; taban olmadan interval sadece yorgunluktur.
- Kas kütlesi ve yağ kaybı da göreli VO2max'ı (ml/kg/dk) artırır — payda küçülür.

### Neden bu kadar önemli?

VO2max (ve kardiyorespiratuvar uygunluk), **tüm nedenlere bağlı ölümün en güçlü tek
yordayıcılarından biridir** — sigara, hipertansiyon, diyabet ve yüksek kolesterolden daha güçlü
bir ilişki gösteren çalışmalar vardır. En büyük risk azalması en alt uygunluk diliminden bir üst
dilime çıkarken görülür. Yani **en kazançlı danışan, hiç hareket etmeyen danışandır.**

**MET ilişkisi:** `1 MET = 3.5 ml/kg/dk`.
42 ml/kg/dk ≈ 12 MET. Merdiven çıkmak ~4–6 MET, tempolu yürüyüş ~3–4 MET.

---

## 8. Statik ve dinamik esneklik

### Tanımlar

| | **Statik esneklik** | **Dinamik esneklik** |
|---|---|---|
| Ne | Bir eklemin pasif olarak ulaşabildiği maksimum açıklık | Hareket halinde, aktif kontrolle kullanılabilen açıklık |
| Nasıl | Pozisyona gir, 15–60 sn bekle | Kontrollü, giderek artan genlikte hareket |
| Ne zaman | Antrenman **sonrası**, ayrı esneklik seansı, akşam | Antrenman **öncesi** ısınmada |
| Örnek | Oturarak hamstring germe, kelebek, kapı pektoral germe | Bacak salınımı, world's greatest stretch, kol daireleri, yürüyerek lunge |

> **Esneklik ≠ Mobilite.** Esneklik dokunun uzayabilmesidir (pasif). **Mobilite**, o açıklığı
> kendi kas kontrolünle **kullanabilmektir** (aktif). Bir insanın pasif 120° kalça fleksiyonu
> olup aktif 80°'si olabilir — aradaki boşluk yaralanmanın adresidir.

### Statik germe — doz

- **Süre:** 10–30 sn (ACSM genel yetişkin), **30–60 sn** (65 yaş üstü — daha uzun gerekir)
- **Tekrar:** 2–4 tekrar, kas başına **toplam ~60 saniye**
- **Sıklık:** Haftada ≥2–3 gün, ideali günlük
- **Şiddet:** Gerginlik hissi, **ağrı değil**. Nefes kesilmiyor olmalı.
- **Etki mekanizması:** Kısa vadede *stress relaxation* ve **germe toleransının artması**
  (sinir sistemi adaptasyonu); uzun vadede sarkomer sayısı ve doku uzunluğu.

### Kritik kanıt — sınavda çıkacak

> **Antrenman öncesi 60 saniyeyi aşan statik germe**, kuvvet ve güç çıktısını geçici olarak
> **%3–5 düşürebilir** ("stretch-induced strength loss"). 
>
> Ancak: **45 saniyenin altındaki statik germeler**, tam bir ısınmanın (genel ısınma + dinamik
> germe + spora özgü hazırlık) içinde yapıldığında bu etki pratikte **kaybolur**.
>
> **Pratik kural: Önce dinamik, sonra statik.** Statik germeyi antrenman sonrasına veya
> ayrı bir seansa al. Kısıtlı bir eklemi ısınmada açman gerekiyorsa, statik germeyi 20–30 sn
> tut ve ardından o bölgeyi **aktive et**.

### Germe türleri

| Tür | Açıklama | Kime |
|---|---|---|
| **Statik (pasif/aktif)** | Pozisyonda bekleme | Herkes, antrenman sonrası; hipomobil bireyler |
| **Dinamik** | Kontrollü hareketle ısınma | **Herkes, her antrenman öncesi** |
| **Balistik** | Zıplayarak, momentumla zorlama | Sadece ileri düzey sporcu, spora özgü. Başlangıç/rehabilitasyonda **yok** |
| **PNF** (hold-relax, contract-relax, CRAC) | Kas kasılıp gevşetilerek açıklık kazanma | En fazla ROM kazancı. Partner gerekir. Başlangıç seviyesi ve kontrolsüz hipertansiyonda dikkat (Valsalva riski) |
| **SMR / foam roller** | Öz miyofasyal gevşetme, 30–90 sn | Isınma öncesi ve toparlanmada |

### Kime ne uygulanır?

**Statik germe önceliklendirilir:**
- Değerlendirmede **kısa/aşırı aktif** bulunan kaslar (overhead squat testinde topuk kalkıyorsa
  baldır; bel çukurlaşıyorsa kalça fleksörleri ve latissimus)
- Sedanter, masa başı çalışan (kalça fleksörü, pektoral, üst trapez, suboksipital)
- 65+ yaş — düşme riskini azaltır, günlük hayat açıklığını korur
- Antrenman sonrası soğuma, uyku öncesi gevşeme
- Rehabilitasyonda (hekim/fizyoterapist gözetiminde)

**Dinamik germe önceliklendirilir:**
- **Her antrenman öncesi, herkeste**
- Spora özgü hazırlık, takım sporları, sprint, sıçrama, kuvvet antrenmanı
- Sabah tutukluğu

**Dikkat / kaçınılacak durumlar:**
- **Hipermobil eklem** (Beighton skoru yüksek) → germe değil, **stabilite ve kuvvet** ver
- Akut yaralanma, kırık şüphesi, yeni ameliyat, akut kas yırtığı
- Eklem instabilitesi, çıkık öyküsü
- İleri osteoporozda agresif gövde fleksiyonu ve rotasyonu
- Gebelikte relaksin hormonu nedeniyle artan laksiteye dikkat — son noktayı zorlama

### NASM Korrektif Egzersiz Zinciri (ezberle — 4 adım)

```
1. INHIBIT   → SMR / foam roller (aşırı aktif kası sustur)      30–90 sn
2. LENGTHEN  → Statik germe (kısa kası uzat)                    30 sn
3. ACTIVATE  → İzole kuvvetlendirme (zayıf kası uyandır)        10–15 tekrar, 4 sn izometrik
4. INTEGRATE → Entegre dinamik hareket (yeni deseni kaydet)     10–15 tekrar, kontrollü
```

Örnek — öne düşük omuz / yuvarlak sırt:
1. Pektoral ve latissimusa foam roller
2. Kapı çerçevesinde pektoral germe, lat germe
3. Yüzüstü Y-T-W kaldırma, alt trapez aktivasyonu
4. Kablo/lastik ile tek kol row + rotasyon

---

## 9. Laktik asit birikimi

### Önce yanlışı sil

> ❌ **"Kaslarım laktik asitten ağrıyor."**
> ❌ **"Ertesi gün ağrıyorsa laktik asit birikmiştir."**
> ❌ **"Laktik asit atık maddedir."**
>
> Üçü de **yanlış**. Bunları söylemeyen antrenör, söyleyenden bir adım öndedir.

### Doğru fizyoloji

Glikoliz sonunda **pirüvat** oluşur. Enerji talebi, mitokondrinin pirüvatı işleme hızını aştığında
**laktat dehidrogenaz (LDH)** enzimi pirüvatı **laktata** çevirir. Bunun amacı NAD⁺'yi geri
kazanmaktır — NAD⁺ olmadan glikoliz durur. Yani **laktat üretimi, yüksek şiddette enerji
üretiminin devam etmesini sağlayan çözümdür, problemin kendisi değil.**

**Asitliği ne yapar?** ATP hidrolizinden açığa çıkan **hidrojen iyonları (H⁺)**, tamponlama
kapasitesini aştığında pH düşer (asidoz) ve kasılma performansı bozulur. Laktat oluşumu aslında
bir H⁺ **tüketir** — yani asidozu geciktirir. Suçlu laktat değil, H⁺ birikimidir.

**Laktat bir yakıttır.** *Lactate shuttle* (Brooks): üretilen laktat kana geçer ve
kalp kası, yavaş kasılan lifler ve beyin tarafından **yakıt olarak oksitlenir**; karaciğerde
**Cori döngüsü** ile glikoza geri çevrilir. Laktat ayrıca bir sinyal molekülüdür
(mitokondri biyogenezini tetikler).

**DOMS (gecikmiş kas ağrısı) laktat değildir.** Laktat egzersizden sonra **30–60 dakikada**
dinlenim seviyesine döner. DOMS ise 24–72 saatte zirve yapar ve nedeni eksantrik kasılmaya bağlı
**mikrotravma + inflamatuar yanıt + doku onarımı**dır.

### Sayılar

| Durum | Kan laktatı |
|---|---|
| Dinlenme | 0.8–1.5 mmol/L |
| Zon 2 (aerobik eşik / **LT1**) | ~2 mmol/L |
| Anaerobik eşik / **LT2 / OBLA** | ~4 mmol/L |
| Maksimal efor sonrası | 8–20+ mmol/L |

**MLSS (Maximal Lactate Steady State):** Laktatın üretim ve temizleme hızının dengede kaldığı en
yüksek şiddet. Pratikte dayanıklılık performansının en iyi göstergelerinden biridir ve yaklaşık
45–60 dakika sürdürülebilir.

### Birikimi nasıl azaltırız? (sahada uygulanacak 6 madde)

1. **Aerobik tabanı büyüt.** En etkili yol budur. Zon 2 hacmi mitokondri sayısını,
   **MCT1 laktat taşıyıcılarını** ve temizleme kapasitesini artırır. Aynı hızda daha az laktat
   üretilir, üretileni daha hızlı temizlenir.
2. **Eşik antrenmanı.** Tempo koşusu, cruise interval (ör. 4 × 8 dk eşik temposunda, 2 dk kolay).
   Eşiği yukarı iter → daha yüksek şiddette aerobik kalırsın.
3. **Aktif soğuma.** Egzersiz sonrası **10–15 dk, %40–60 HRmax** hafif aktivite. Pasif dinlenmeye
   kıyasla laktat temizleme hızını yaklaşık **iki katına** çıkarır (kas pompası + artmış kan akımı).
   Yatmak yerine yürü.
4. **Tempo yönetimi.** Baştan çok hızlı çıkmak erken laktat birikimi demektir. Negatif split öğret.
5. **Tamponlama kapasitesi.** Beta-alanin (kas karnozinini artırır, 4–6 hafta yükleme) ve
   sodyum bikarbonat (akut, 1–2 sa önce, mide yan etkisi sık) kanıtlı ergojeniklerdir.
   Bu bir öneri değil, bilgi — kullanımı sporcu ve hekim kararıdır.
6. **Yeterli karbonhidrat ve hidrasyon.** Glikojeni boş sporcu daha erken yorulur; dehidrasyon
   kan hacmini düşürür, laktat temizlenmesini yavaşlatır.

> **Not:** Masaj, soğuk su banyosu ve kompresyon laktat temizlemede aktif toparlanma kadar
> etkili değildir; algılanan yorgunluk ve rahatlama üzerinde faydası olabilir.

---

## 10. Sedanter birey ve NASM OPT basamakları

### Sedanter birey nedir?

**Tanım 1 — yetersiz aktivite (WHO):** Haftada **150 dakikanın altında** orta şiddetli
(veya 75 dk yüksek şiddetli) fiziksel aktivite yapan kişi.

**Tanım 2 — sedanter davranış:** Uyanıkken oturur/uzanır pozisyonda, enerji harcaması
**≤ 1.5 MET** olan davranışlar (masa başı iş, ekran, araç kullanımı).

> **İkisi aynı şey değildir.** Sabah 1 saat spor yapıp günün 10 saatini oturarak geçiren kişi
> "aktif" ama aynı zamanda "sedanter davranışı yüksek"tir — bu da bağımsız bir risk faktörüdür
> ("active couch potato"). Çözüm: **oturmayı bölmek.** Saatte 3–5 dakika ayağa kalk.

**Neden önemli:** Fiziksel hareketsizlik, küresel ölümlerde önde gelen risk faktörlerinden biridir.
Kas kütlesi ve insülin duyarlılığı kaybı, kemik yoğunluğu düşüşü, kardiyorespiratuvar uygunlukta
gerileme ve postüral bozulma ile gider.

### Sedanter bireyde ilk 4 haftanın kuralları

1. **Önce değerlendir, sonra program yaz.** (Değerlendirme listesi 11. modülde.)
2. **Stabilizasyon önce.** Kuvvet ve güç, sağlam bir stabilite üzerine inşa edilir.
3. **Az ile başla, tamamla, sonra artır.** Yapılabilen program, mükemmel programı yener.
4. **Sıklık → Süre → Şiddet.** Aynı anda ikisini birden artırma.
5. **İlk hedef davranış, ikinci hedef fizyoloji.** İlk 4 hafta "haftada 3 gün geldi mi?"
   sorusunun cevabı, kaç kilo verdiğinden önemlidir.

### NASM OPT Modeli — 3 seviye, 5 faz

```
                    ┌─────────────────────────┐
         GÜÇ        │  Faz 5 — GÜÇ            │
                    ├─────────────────────────┤
                    │  Faz 4 — Maksimal Kuvvet│
        KUVVET      │  Faz 3 — Hipertrofi     │
                    │  Faz 2 — Kuvvet Day.    │
                    ├─────────────────────────┤
     STABİLİZASYON  │  Faz 1 — Stabilizasyon  │  ← SEDANTER BİREY BURADAN BAŞLAR
                    │          Dayanıklılığı  │
                    └─────────────────────────┘
```

| Faz | Amaç | Tekrar | Set | Yoğunluk (%1RM) | Tempo | Dinlenme |
|---|---|---|---|---|---|---|
| **1 — Stabilizasyon Dayanıklılığı** | Kas dayanıklılığı, eklem stabilitesi, hareket kalitesi | 12–20 | 1–3 | 50–70 | **4/2/1** (yavaş) | 0–90 sn |
| **2 — Kuvvet Dayanıklılığı** | Stabilite koruyarak kuvvet (süperset) | 8–12 | 2–4 | 70–80 | 2/0/2 + 4/2/1 | 0–60 sn |
| **3 — Hipertrofi** | Kas kütlesi | 6–12 | 3–5 | 75–85 | 2/0/2 | 0–60 sn |
| **4 — Maksimal Kuvvet** | Maksimum kuvvet üretimi | 1–5 | 4–6 | 85–100 | X/X/X (hızlı) | 3–5 dk |
| **5 — Güç** | Kuvvet × hız (süperset: ağır + patlayıcı) | 1–5 + 8–10 | 3–5 | 85–100 + %10 VA | X/X/X | 3–5 dk |

**Tempo notasyonu (4/2/1):** 4 sn eksantrik (indirme) / 2 sn izometrik (durma) / 1 sn konsantrik (kaldırma).
Yavaş eksantrik, sedanter bireyde hareket kontrolünü ve bağ dokusu adaptasyonunu geliştirir.

### Sedanter için basamak basamak plan

#### Faz 1 — Hafta 1–4 (gerekirse 6–8'e uzat)
**Sıklık:** 2–3 gün/hafta, tam vücut · **Süre:** 30–45 dk

**Seans yapısı (NASM şablonu):**
```
1. SMR / foam roller               5 dk    — 30–90 sn/bölge
2. Statik germe (kısa kaslar)      5 dk    — 30 sn × 2
3. Aktivasyon + Core               5–8 dk  — köprü, dead bug, plank, bird-dog
4. Denge                           5 dk    — tek ayak duruş, tek ayak kalça abd.
5. Direnç (tam vücut)              15–20 dk — 5–7 hareket, 1–3 set × 12–20 tekrar
6. Kardiyo — NASM Stage I          20–30 dk — %65–75 HRmax, kesintisiz
7. Soğuma + statik germe           5 dk
```

**Faz 1 hareket havuzu:** sandalyeye oturup kalkma, destekli squat, kalça köprüsü, lastikli row,
göğüs pres (makine/lastik), tek kol row, yüzüstü Y-T-W, dead bug, bird-dog, yan plank (dizden),
duvar şınavı, tek ayak denge, ayakta kalça abduksiyonu.

**Kardiyo — NASM Kardiyo Basamakları:**
| Basamak | Zon | %HRmax | İçerik |
|---|---|---|---|
| **Stage I** | Zon 1 | 65–75 | Kesintisiz, 30 dk'ya çıkana kadar. Sedanter burada kalır |
| **Stage II** | Zon 1–2 | 76–85 | Zon 1 içinde Zon 2 aralıkları (ör. 1 dk yüksek / 3 dk kolay) |
| **Stage III** | Zon 1–2–3 | 86–95 | Üç zonu da kullanan piramit interval |

**Faz 1'den çıkış kriterleri** (süre değil, yeterlilik):
- 30 dakika kesintisiz Stage I kardiyo yapabiliyor
- 12–20 tekrarı **hareket bozulmadan** tamamlıyor
- Overhead squat testinde belirgin telafi kalmadı ya da azaldı
- 30 sn tek ayak dengesi
- Seans sonrası ağrı yok, 2 gün üst üste antrenmana geliyor

#### Faz 2 — Hafta 5–8: Kuvvet Dayanıklılığı
3–4 gün/hafta. Süperset mantığı: **ağır hareket → hemen ardından aynı kas grubunun stabilizasyon
versiyonu.** Örnek: barbell/makine göğüs pres (8–12, 2/0/2) → hemen ardından denge topunda
şınav/pres (12–20, 4/2/1).

#### Faz 3+ — Hafta 9 ve sonrası
Hedefe göre dallanır: kas kütlesi → Faz 3; kuvvet → Faz 4; sporcu/patlayıcılık → Faz 5.
**Sedanter başlayan bir danışanın Faz 4–5'e gitmesi zorunlu değildir.** Çoğu sağlık ve
kompozisyon hedefi Faz 1–2–3 döngüsüyle karşılanır.

### Kritik antrenör notları
- **Her fazdan sonra geri dön.** OPT döngüseldir: 1→2→3→(1)→2→4... Stabilizasyona periyodik
  dönüş, hareket kalitesini korur.
- **Faz atlanmaz.** "Bu danışan formda görünüyor" diyerek Faz 1'i atlamak, sedanterde en sık
  görülen sakatlık nedenidir.
- **Deload:** her 4–6 haftada bir hacmi %40–50 düşür.

---

## 11. Ek modül: Antrenörün ilk 60 dakikası

Haftanın 10 konusu teoriydi. Bu modül, o teoriyi bir danışanla geçireceğin **ilk seansa** çevirir.

### İlk seans akışı

| Dakika | Ne yapılır |
|---|---|
| 0–10 | Tanışma, hedef, geçmiş, **motivasyonel görüşme** |
| 10–15 | **PAR-Q+** ve kırmızı bayrak taraması |
| 15–25 | Antropometri: boy, kilo, bel, kalça, WHtR, (varsa) yağ oranı |
| 25–35 | **Statik duruş analizi** ve **Overhead Squat Assessment** |
| 35–45 | Nabız: dinlenim, HRmax hesabı, Karvonen zonları, submaksimal kardiyo testi |
| 45–55 | Hareket denemesi: sit-to-stand, push, pull, tek ayak denge |
| 55–60 | Bulguların özeti + **SMART hedef** + ilk hafta planı |

### Kırmızı bayraklar — seansı durdur, hekime yönlendir

- Göğüste baskı/ağrı, çeneye-kola yayılan ağrı
- Olağandışı nefes darlığı, gece nefes darlığıyla uyanma
- Baş dönmesi, bayılma, dengesizlik
- Düzensiz/çok hızlı çarpıntı, dinlenim nabzı >100 veya <40 (antrenmanlı değilse)
- Kontrolsüz hipertansiyon (dinlenim TA ≥ 180/110)
- Ayak bileklerinde iki taraflı ödem
- Eklemde sıcaklık, kızarıklık, şişlik, gece ağrısı, kilitlenme
- Açıklanamayan kilo kaybı, sürekli yorgunluk
- Yeni başlayan veya değişen şiddetli baş ağrısı

### FITT-VP — her programın omurgası

| Harf | Ne | Örnek |
|---|---|---|
| **F** requency | Sıklık | 3 gün/hafta |
| **I** ntensity | Şiddet | %65–75 HRmax / RPE 4–5 |
| **T** ime | Süre | 30 dk |
| **T** ype | Tür | Eliptik |
| **V** olume | Hacim | 90 dk/hafta |
| **P** rogression | İlerleme | Haftada +%10 |

### Borg skalaları

| Borg 6–20 | CR10 | Anlamı |
|---|---|---|
| 6–8 | 0–1 | Dinlenme |
| 9–11 | 2–3 | Çok hafif–hafif (Zon 1) |
| **12–14** | **4–6** | **Orta–biraz zor (Zon 2–3) — sedanterin çalışacağı yer** |
| 15–17 | 7–8 | Zor–çok zor (Zon 4) |
| 18–20 | 9–10 | Maksimal (Zon 5) |

> Borg 6–20 × 10 ≈ yaklaşık kalp atım hızı (genç yetişkinde). Borg 13 ≈ 130 atım.
> Beta bloker kullananlarda ve nabız ölçemediğin her durumda **RPE senin tek pusulandır.**

### SMART hedef örneği

❌ "Kilo vereceğim."
✅ "8 hafta içinde bel çevremi 92 cm'den 87 cm'ye düşürmek; bunun için haftada 3 gün antrenmana
gelmek, günde 8.000 adım atmak ve haftada 5 gün 1800 kcal hedefini tutturmak. Ölçüm her pazartesi sabah."

### Ölçümler — ne, ne sıklıkta

| Ölçüm | Sıklık | Not |
|---|---|---|
| Kilo | Haftalık ortalama (günlük tartıp haftalık ortala) | Tek gün anlamsızdır |
| **Bel çevresi** | 2 haftada 1 | Merkez yağlanmada tartıdan değerli |
| Kalça, uyluk, kol çevresi | 4 haftada 1 | Uzuv yağlanmada takip |
| Fotoğraf | 4 haftada 1 | Aynı ışık, aynı poz, aynı saat |
| Dinlenim nabzı | Haftalık | Aerobik gelişim + aşırı yorgunluk göstergesi |
| Performans (tekrar, süre, mesafe) | Her seans | En motive edici veri |
| Uyku, enerji, ağrı | Günlük 1–10 | Yüklenme kararını bu belirler |

---

## Haftanın 12 altın cümlesi

1. Metabolizmanın motoru yağsız kütledir; formül bir tahmindir, gerçeği tartı ve mezura söyler.
2. Kas 1 kg = günde ~13 kcal, 100 değil. Kasın değeri yakımda değil, fonksiyonda ve glikoz deposunda.
3. Bel çevren boyunun yarısından az olsun.
4. Bölgesel yağ yakımı yoktur. Ne mekik göbeği, ne makineli hareket basenleri eritir.
5. Merkez yağlanma metabolik acildir; uzuv yağlanma sabır işidir.
6. 1 kg kilo = her adımda dizden 3–4 kg yük.
7. Ağrı 4'ü geçmesin, ertesi güne sarkmasın.
8. Sıklık → Süre → Şiddet. Aynı anda ikisini artırma.
9. 220−yaş'ı bırak, 208−(0.7×yaş) kullan; şiddeti Karvonen ile hesapla.
10. Yağ kaybını antrenmandaki yakıt değil, 24 saatlik enerji dengesi belirler.
11. Laktat atık değil yakıttır; DOMS laktat değildir; aktif soğuma temizliği ikiye katlar.
12. Dinamik ısınmada, statik soğumada. Sedanter Faz 1'den başlar, faz atlanmaz.
