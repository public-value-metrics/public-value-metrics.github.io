# Kesetaraan Antargenerasi dan Diskonto Keberlanjutan

Mendiskontokan biaya dan manfaat masa depan kembali ke nilai kini adalah praktik standar dalam
penilaian publik — lihat [tingkat diskonto sosial](../social-discount-rate/) — tetapi tingkat
diskonto positif mana pun, jika digabungkan selama beberapa dekade atau abad, menyusutkan masa depan
jauh menuju nol dalam istilah hari ini. Untuk keputusan dengan konsekuensi satu abad atau lebih ke
depan — perubahan iklim, limbah nuklir, hilangnya keanekaragaman hayati, keberlanjutan pensiun —
fakta matematis itu menjadi fakta etis: diskonto standar dapat membuat kerugian bencana terhadap
generasi mendatang terlihat, dalam istilah nilai kini, hampir tidak layak untuk dihindari.

## Mengapa Ini Penting

Persamaan Ramsey, diturunkan oleh Frank Ramsey pada 1928, menguraikan tingkat diskonto menjadi dua
komponen: preferensi waktu murni (δ, seberapa besar kita sekadar lebih menyukai sekarang daripada
nanti, terlepas dari kekayaan) dan efek pertumbuhan kekayaan (η×g, seberapa besar kita mendiskontokan
karena generasi mendatang diperkirakan lebih kaya, sehingga satu poundsterling tambahan kurang
berarti bagi mereka). Tingkat diskonto jangka panjang standar Green Book Inggris dibangun di atas
persamaan ini dan mengikuti jadwal yang *menurun* alih-alih tingkat datar — sebuah desain yang
berakar pada karya Martin Weitzman tentang "diskonto gamma," yang menunjukkan bahwa ketika tingkat
diskonto masa depan itu sendiri tidak pasti, tingkat setara-kepastian yang seharusnya Anda terapkan
secara matematis menurun seiring waktu, karena skenario tingkat rendah mendominasi semakin jauh Anda
memandang ke depan. Stern Review on the Economics of Climate Change (2006), dipimpin oleh Sir
Nicholas Stern, membawa debat etis lebih jauh: Stern berargumen bahwa preferensi waktu murni
seharusnya ditetapkan mendekati nol (ia menggunakan δ ≈ 0,1%, mencerminkan hanya probabilitas kecil
dari bencana yang mengakhiri peradaban, bukan preferensi genuine terhadap masa kini dibandingkan
masa depan), menghasilkan tingkat diskonto efektif yang jauh lebih rendah daripada praktik Green
Book konvensional dan, sesuai, kasus masa kini yang jauh lebih besar untuk aksi iklim. Para pengkritik
(khususnya William Nordhaus) berargumen bahwa tingkat mendekati-nol Stern dapat dipertahankan secara
etis tetapi tidak konsisten dengan perilaku tabungan dan investasi yang benar-benar teramati.
Ketidaksepakatan ini bukan catatan kaki teknis — ini adalah alasan tunggal terbesar mengapa dua
ekonom yang sama-sama ketat dapat mencapai kesimpulan yang sangat berbeda tentang seberapa banyak
generasi saat ini seharusnya berkorban untuk masa depan, dan ini adalah alasan mengapa perangkat
lunak yang mendukung penilaian investasi publik horizon-panjang harus mengungkap asumsi diskontonya
alih-alih menguburnya di dalam default spreadsheet.

## Matematika

```
Persamaan Ramsey:   r = δ + η × g

  r = tingkat diskonto sosial
  δ = preferensi waktu murni (tingkat ketidaksabaran, terlepas dari
      kekayaan)
  η = elastisitas utilitas marjinal konsumsi (nilai yang menurun dari
      konsumsi tambahan seiring orang menjadi lebih kaya)
  g = tingkat pertumbuhan konsumsi per kapita yang diharapkan

Jadwal jangka panjang menurun Green Book (perkiraan, pita yang
dipublikasikan saat ini):
  Tahun 0–30:    3,5%
  Tahun 31–75:   3,0%
  Tahun 76–125:  2,5%
  Tahun 126–200: 2,0%
  Tahun 201–300: 1,5%
  Tahun 301+:    1,0%

Parameter Stern Review: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Contoh Perhitungan

**Nilai hari ini dari £1 kerugian yang dihindari dalam 100 tahun**, di bawah tiga rezim diskonto:

```
Tingkat jangka pendek Green Book datar (3,5%, ditahan konstan
selama 100 tahun):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Jadwal menurun Green Book (3,5% untuk tahun 1–30, 3,0% untuk tahun
31–75, 2,5% untuk tahun 76–100):
  faktor(1–30)  = 1,035^30  ≈ 2,807
  faktor(31–75) = 1,03^45   ≈ 3,782
  faktor(76–100)= 1,025^25  ≈ 1,854
  faktor total ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 pence)

Preferensi waktu murni gaya Stern mendekati-nol (r ≈ 1,4% datar):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

Kerugian £1 yang sama yang dihindari satu abad dari sekarang bernilai 3,2p, 5,1p, atau 25p hari ini
tergantung murni pada konvensi diskonto mana yang digunakan — rentang hampir delapan kali lipat yang
menentukan apakah sebuah proyek mitigasi iklim dengan biaya di muka yang tinggi dan pembayaran satu
abad ke depan melewati ambang NPV positif sama sekali. Ini adalah mekanisme di balik peringatan
utama bab ini: pada tingkat datar positif yang bermakna mana pun, kerugian masa depan yang cukup
jauh secara aritmetis dihapus dari penilaian tersebut, terlepas dari keparahan nyatanya.

## Kaitan dengan Rekayasa Perangkat Lunak

- Alat penilaian atau kasus bisnis horizon-panjang mana pun (infrastruktur, adaptasi iklim,
  pemodelan pensiun) seharusnya mengimplementasikan jadwal *menurun* Green Book, bukan tingkat
  datar tunggal — sebuah default tingkat datar diam-diam menanamkan bias anti-masa-depan yang jauh
  lebih kuat daripada yang ditetapkan panduan pemerintah Inggris saat ini.
- Tingkat diskonto dan horizon seharusnya selalu diungkap sebagai parameter yang terlihat dan dapat
  diaudit dalam perangkat lunak penilaian, dengan sensitivitas perhitungan terhadapnya ditunjukkan
  secara eksplisit (seperti pada contoh perhitungan di atas) — mengubur tingkat tersebut dalam
  sebuah berkas konfigurasi mengundang justru "pilihan etis tersembunyi" yang diperingatkan debat
  Stern-Nordhaus; ini berpasangan dengan poin transparansi yang dibuat dalam
  [akuntansi modal alam](../natural-capital-accounting/) dan mendasari topik
  [tingkat diskonto sosial](../social-discount-rate/) secara umum.
- Di mana manfaat sebuah program secara eksplisit bersifat antargenerasi (pertahanan banjir,
  pemulihan modal alam, infrastruktur digital jangka panjang), sebuah
  [analisis biaya-manfaat sosial](../social-cost-benefit-analysis/) seharusnya melaporkan hasil di
  bawah setidaknya dua asumsi diskonto (standar Green Book dan sebuah kasus sensitivitas tingkat
  rendah) alih-alih satu estimasi titik tunggal, sehingga pengambil keputusan melihat bagaimana
  pilihan tingkat diskonto saja menggerakkan jawabannya.

## Jebakan Umum

- **Menyajikan satu NPV terdiskonto tunggal tanpa rentang sensitivitas** — mengingat betapa besar
  tingkat diskonto saja mengubah jawaban untuk proyek horizon-panjang, sebuah NPV tingkat tunggal
  secara material melebih-lebihkan presisi; selalu laporkan rentang yang mencakup setidaknya
  standar Green Book dan sebuah skenario tingkat rendah.
- **Menerapkan tingkat datar jangka pendek (3,5%) pada penilaian multi-abad** — panduan Green Book
  sendiri menetapkan jadwal menurun justru karena tingkat datar dinilai tidak tepat di luar sekitar
  30 tahun; tetap menggunakannya meremehkan biaya jangka panjang.
- **Memperlakukan δ (preferensi waktu murni) sebagai parameter yang murni teknis** — nilai
  mendekati-nol Stern dan nilai implisit yang lebih tinggi Green Book keduanya hanya dapat
  dipertahankan sebagai posisi etis tentang berapa banyak bobot yang harus diberikan masa kini
  kepada masa depan, bukan angka yang "benar" atau "salah" secara empiris; perangkat lunak
  seharusnya membuat asumsi tersebut terlihat alih-alih menyajikan satu angka sebagai benar secara
  objektif.

## Sumber

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
