# Pembobotan Distribusional

Pembobotan distribusional menyesuaikan nilai moneter sebuah biaya atau manfaat berdasarkan siapa
yang menerimanya, dengan prinsip bahwa satu poundsterling tambahan bernilai lebih bagi rumah tangga
miskin daripada rumah tangga kaya. Green Book milik HM Treasury menyediakan metode eksplisit untuk
menerapkan pembobotan ini, dibangun di atas utilitas marjinal pendapatan yang menurun, sehingga
penilaian tidak diam-diam memperlakukan satu poundsterling yang diperoleh oleh desil terkaya setara
nilainya dengan satu poundsterling yang diperoleh oleh yang termiskin.

## Mengapa Ini Penting

Analisis biaya-manfaat standar menjumlahkan poundsterling tanpa bertanya poundsterling siapa itu,
yang secara implisit mengasumsikan bahwa satu poundsterling bernilai sama bagi semua orang — sebuah
asumsi yang telah lama diketahui salah oleh para ekonom. Sebuah rumah tangga berpenghasilan
£15.000/tahun mengalami keuntungan £1.000 dengan cara yang sangat berbeda dari rumah tangga
berpenghasilan £150.000/tahun, karena utilitas marjinal pendapatan menurun seiring naiknya
pendapatan. Jika tidak dibobot, penilaian standar secara sistematis mendukung intervensi yang
menguntungkan kelompok yang lebih kaya dan sudah lebih sejahtera, karena daya beli mereka yang lebih
tinggi menggelembungkan penilaian moneter dari manfaat yang mencapai mereka (peningkatan taman di
dekat perumahan mahal "menunjukkan" manfaat nilai properti yang lebih besar daripada peningkatan
yang sama di dekat perumahan murah, semata-mata karena harga lebih tinggi, bukan karena keuntungan
kesejahteraannya lebih besar).

Panduan tambahan Green Book tentang analisis distribusional, diperkuat setelah tinjauan Treasury
2020 menanggapi kritik bahwa metodologi penilaian secara sistematis mendukung London dan South East,
menetapkan pendekatan pembobotan formal berdasarkan elastisitas asumsi utilitas marjinal pendapatan
sekitar 1,3 — artinya penggandaan pendapatan kira-kira membelah dua (secara spesifik, 2^-1,3 ≈ 0,41
kali) nilai marjinal dari satu poundsterling tambahan. Ini bukan penyesuaian pembulatan: menerapkannya
dapat mengubah mana dari dua program yang bersaing yang menunjukkan nilai kini bersih yang lebih
tinggi, khususnya ketika membandingkan sebuah intervensi yang terkonsentrasi di wilayah tertinggal
dengan yang tersebar di seluruh populasi umum.

## Matematika

Bobot distribusional Green Book untuk satu poundsterling manfaat yang jatuh pada sebuah rumah tangga
di tingkat pendapatan y, relatif terhadap satu poundsterling di tingkat pendapatan rata-rata
nasional ȳ:

```
Bobot(y) = (ȳ / y)^e

di mana:
  y  = pendapatan rumah tangga (atau pendapatan kelompok yang terdampak)
  ȳ  = pendapatan rumah tangga rata-rata (referensi)
  e  = elastisitas utilitas marjinal pendapatan (Green Book: sekitar 1,3)
```

Menerapkan bobot pada manfaat bersih:

```
Manfaat terbobot = Σ [manfaat tak terbobot untuk kelompok i × Bobot(y_i)]
```

Sebuah kelompok berpenghasilan setengah dari rata-rata nasional (y = 0,5ȳ) mendapat bobot
(1/0,5)^1,3 = 2^1,3 ≈ 2,46 — setiap poundsterling manfaat bagi kelompok tersebut dihitung bernilai
kira-kira 2,46 kali satu poundsterling bagi rumah tangga berpenghasilan rata-rata.

## Contoh Perhitungan

**Dua program lokal yang bersaing**, masing-masing dengan manfaat bersih tak terbobot £2 juta/tahun,
bersaing untuk dana pertumbuhan regional yang sama:

- *Program A*: sebuah skema dukungan bisnis di sebuah kota yang makmur, pendapatan rumah tangga
  rata-rata £45.000 (kira-kira 1,3× rata-rata nasional asumsi £35.000).
- *Program B*: sebuah program keterampilan di sebuah lingkungan tertinggal, pendapatan rumah tangga
  rata-rata £18.000 (kira-kira 0,51× rata-rata nasional).

```
Bobot(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Bobot(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Manfaat terbobot A = £2.000.000 × 0,72 = £1,44 juta
Manfaat terbobot B = £2.000.000 × 2,53 = £5,06 juta
```

Tak terbobot, kedua program tersebut seri. Terbobot untuk dampak distribusional, manfaat Program B
lebih dari tiga kali lebih besar — sebuah hasil yang membalikkan rekomendasi pendanaan dan
mencerminkan tujuan eksplisit Green Book dalam mensyaratkan pembobotan tersebut ditampilkan, bukan
hanya rasio biaya-manfaat tak terbobot.

**Alokasi hibah lembaga amal**: seorang pemberi dana yang membandingkan hibah £500.000 yang mencapai
1.000 rumah tangga berpenghasilan rendah (bobot ≈ 2,0, nilai terbobot setara £1 juta) dengan £500.000
yang sama yang mencapai 1.000 rumah tangga berpenghasilan menengah (bobot ≈ 1,0, nilai terbobot
setara £500.000) seharusnya menunjukkan kasus distribusional tersebut secara eksplisit dalam
kertas dewannya, bukan dibiarkan untuk disimpulkan.

## Kaitan dengan Rekayasa Perangkat Lunak

Pembobotan distribusional jarang muncul secara langsung dalam metrik penyampaian perangkat lunak,
tetapi ia seharusnya membentuk cara tim rekayasa dan data merancang pengukuran dan penargetan:

- Saat membangun sebuah dasbor dampak atau kalkulator manfaat, tampilkan profil pendapatan atau
  ketertinggalan dari siapa yang terdampak, bukan hanya total manfaat agregat — angka agregat tanpa
  rincian distribusional menyembunyikan justru pembalikan yang ditunjukkan di atas.
- Kaitkan logika penargetan dalam desain layanan dengan data ketertinggalan yang sama yang digunakan
  Green Book — lihat [Indeks Deprivasi Ganda](../index-of-multiple-deprivation/) — sehingga
  jangkauan sebuah layanan digital dapat dinilai untuk kesetaraan, bukan hanya efisiensi (E keempat
  yang diperdebatkan dalam [nilai untuk uang](../value-for-money/)).
- Ketika sebuah algoritma mengalokasikan sumber daya yang langka (slot janji temu, waktu petugas
  kasus, sebuah subsidi), sebuah fungsi objektif "maksimalkan total manfaat" yang tak terbobot akan,
  secara konstruksi, mereproduksi bias yang sama yang dimaksudkan untuk dikoreksi oleh pembobotan
  Green Book — tandai ini secara eksplisit kepada pemilik kebijakan sebelum mengoptimalkan.

## Jebakan Umum

- **Menerapkan bobot distribusional secara tidak konsisten di seluruh portofolio.** Membobot manfaat
  satu program tetapi tidak pembandingnya menghasilkan perbandingan yang bias, bukan yang lebih adil;
  Green Book mensyaratkan perlakuan yang setara.
- **Menggunakan nilai properti atau pasar sebagai proksi kesejahteraan tanpa penyesuaian.** Harga
  pasar itu sendiri terdistorsi oleh ketimpangan pendapatan yang sudah ada, yang justru adalah apa
  yang dimaksudkan untuk dikoreksi oleh pembobotan distribusional — menggunakan nilai pasar yang
  tidak disesuaikan dapat menghitung ganda bias tersebut.
- **Mengabaikan variasi dalam kelompok.** Membobot berdasarkan pendapatan rata-rata wilayah
  (misalnya sebuah desil Indeks Deprivasi Ganda) dapat salah merepresentasikan individu yang tidak
  cocok dengan rata-rata wilayahnya; gunakan data pendapatan paling terperinci yang tersedia secara
  wajar.
- **Memperlakukan elastisitas 1,3 sebagai konstanta universal.** Green Book sendiri mencatat ini
  adalah sebuah estimasi dengan rentang yang masuk akal; lakukan uji sensitivitas untuk keputusan
  besar terhadap elastisitas alternatif alih-alih memperlakukan 1,3 sebagai eksak.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
