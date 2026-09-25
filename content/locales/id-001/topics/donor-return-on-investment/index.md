# Laba atas Investasi Donatur

Laba atas investasi donatur adalah apa yang sebenarnya dibeli oleh satu poundsterling donatur
tertentu dalam bentuk hasil — bukan rasio operasional lembaga amal, dan bukan pengembalian lembaga
amal itu sendiri atas total anggarannya. Ini membingkai ulang ROI dari perspektif organisasi
(seberapa efisien kami beroperasi) menjadi perspektif donatur (apa yang diubah oleh kontribusi
marjinal saya), dan kedua angka tersebut secara rutin, dan secara keliru, diperlakukan sebagai hal
yang sama.

## Mengapa Ini Penting

"ROI" sebuah lembaga amal sendiri, sejauh istilah tersebut digunakan sama sekali, biasanya
mendeskripsikan sesuatu seperti [biaya per penerima manfaat](../cost-per-beneficiary/) atau
[rasio overhead lembaga amal](../charity-overhead-ratio/) — ukuran efisiensi organisasi. ROI seorang
donatur adalah pertanyaan yang sama sekali berbeda: mengingat lembaga amal ini sudah memiliki
pendapatan lain, apa yang ditambahkan oleh uang *donatur ini* pada marginnya? Jika sebuah lembaga
amal akan menyampaikan program yang sama dengan atau tanpa sebuah hadiah £10.000 tertentu — karena
memiliki cadangan yang cukup, atau karena pemberi dana lain akan mengisi kesenjangan tersebut — maka
ROI donatur dari hadiah itu mendekati nol, betapapun baiknya rasio overhead keseluruhan atau biaya
per hasil lembaga amal tersebut terlihat.

Ini adalah pertanyaan additionalitas yang sama yang mendasari penilaian
[nilai untuk uang](../value-for-money/) dalam belanja publik Inggris dan
[additionalitas dan bobot mati](../additionality-and-deadweight/) dalam evaluasi program: nilai yang
tercipta hanya dapat dikreditkan kepada seorang pemberi dana sejauh nilai itu tidak akan tetap
terjadi bagaimanapun juga. Platform pemberi dana besar dan organisasi pemberian yang efektif (Giving
What We Can, GiveWell) membangun rekomendasi mereka secara eksplisit di sekitar perbedaan ini,
bertanya bukan "apakah ini lembaga amal yang baik" tetapi "apakah lembaga amal ini memiliki ruang
yang belum terisi untuk pendanaan lebih lanjut sehingga hadiah saya bersifat tambahan."

## Matematika

```
ROI donatur ≠ Efisiensi operasional lembaga amal

ROI donatur  ≈  (Hasil yang dicapai dengan hadiah tersebut) − (Hasil yang
                 akan terjadi tanpanya, yaitu kontrafaktual)
              ─────────────────────────────────────────────────
                              Ukuran hadiah

Input kunci:
  - Ruang untuk pendanaan lebih lanjut (apakah lembaga amal tersebut
    dibatasi pendanaan pada marginnya?)
  - Funging (apakah donatur lain akan mengisi kesenjangan tersebut?)
  - Efektivitas biaya marjinal pada tingkat pendanaan tertentu (biaya
    sering naik seiring sebuah intervensi berskala melampaui populasi
    yang paling mudah dijangkau)
```

Lihat [efektivitas biaya altruisme efektif](../effective-altruism-cost-effectiveness/) untuk
bagaimana GiveWell mengoperasionalkan pertanyaan "ruang untuk pendanaan lebih lanjut", dan
[analisis kontrafaktual](../counterfactual-analysis/) untuk metode umumnya.

## Contoh Perhitungan

Seorang donatur sedang memilih antara dua hadiah £5.000:

- **Lembaga Amal C**: memiliki program inti yang terdanai penuh dengan cadangan £2 juta dan daftar
  tunggu pemberi dana; £5.000 marjinal kemungkinan besar akan ditambahkan ke cadangan atau aktivitas
  berprioritas lebih rendah. Estimasi hasil tambahan donatur: minimal — uang tersebut tidak jelas
  mengubah apa yang terjadi.
- **Lembaga Amal D**: sebuah program kecil dan berbasis bukti yang secara publik menyatakan akan
  terpaksa menolak 200 orang pada kuartal berikutnya tanpa tambahan £50.000, dan telah mengumpulkan
  £42.000 dari itu. £5.000 marjinal sangat mungkin mendanai penyampaian tambahan nyata — katakanlah,
  20 orang tambahan yang dilayani, pada biaya per penerima manfaat yang dinyatakan sendiri oleh
  lembaga amal tersebut sebesar £250.

Ukuran hadiah yang sama, donatur yang sama, ROI donatur yang sangat berbeda secara radikal — bukan
karena Lembaga Amal C adalah organisasi yang lebih buruk (mungkin memiliki angka biaya-per-hasil
yang lebih baik secara keseluruhan) tetapi karena kesenjangan pendanaan marjinalnya sudah tertutup.

## Kaitan dengan Rekayasa Perangkat Lunak

Platform donatur dan alat rekomendasi pemberian terlalu sering hanya menampilkan metrik efisiensi
tingkat organisasi (rasio overhead, biaya per penerima manfaat) karena itulah yang dipublikasikan
lembaga amal dalam laporan tahunan dan yang paling mudah ditarik ke dalam tabel perbandingan.
Merepresentasikan ROI donatur dengan benar memerlukan titik data yang berbeda dan lebih sulit
disumberkan: kesenjangan pendanaan terkini yang dinyatakan sebuah lembaga amal atau "ruang untuk
pendanaan lebih lanjut", yang berubah sepanjang tahun dan jarang berupa data terstruktur. Platform
yang ingin mendukung penalaran ROI donatur yang genuine memerlukan baik umpan langsung dari
pengungkapan kesenjangan pendanaan (seperti yang dipelihara GiveWell secara manual untuk lembaga
amal yang direkomendasikannya) atau disclaimer eksplisit bahwa sebuah tabel perbandingan menampilkan
efisiensi organisasi, bukan additionalitas donatur. Lihat
[rasio overhead lembaga amal](../charity-overhead-ratio/) untuk metrik yang paling sering, dan
secara keliru, dicampuradukkan dengan ROI donatur.

## Jebakan Umum

- **Mencampuradukkan efisiensi lembaga amal dengan additionalitas donatur.** Sebuah lembaga amal
  yang dikelola dengan baik dan berbiaya overhead rendah tetap dapat memiliki ROI donatur marjinal
  yang mendekati nol jika tidak dibatasi pendanaan.
- **Mengabaikan funging.** Jika seorang pemberi dana institusional besar akan menutupi kesenjangan
  tersebut bagaimanapun juga, hadiah seorang donatur individu menggantikan uang pemberi dana
  tersebut alih-alih menambah penyampaian baru.
- **Mengasumsikan efektivitas biaya linear pada skala.** Penerima manfaat yang paling murah
  dijangkau sering dilayani terlebih dahulu; biaya marjinal per hasil sering naik seiring sebuah
  program berekspansi, sehingga ROI pada poundsterling berikutnya tidak sama dengan ROI pada
  poundsterling rata-rata yang sudah dibelanjakan.
- **Tidak ada kesenjangan pendanaan yang dinyatakan.** Sebuah lembaga amal atau platform yang tidak
  dapat mengatakan apa yang akan didanai oleh £X berikutnya tidak dapat mendukung klaim ROI donatur
  yang genuine, hanya klaim biaya rata-rata.

## Sumber

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
