# Valuasi Kesejahteraan (WELLBY)

Valuasi kesejahteraan menetapkan harga efek sebuah kebijakan secara langsung dalam istilah kepuasan
hidup, menggunakan WELLBY (wellbeing-adjusted life year) sebagai unitnya — satu WELLBY setara
dengan perubahan satu poin pada skala kepuasan hidup 0–10, yang bertahan selama satu tahun. Ini
adalah alternatif yang secara resmi disahkan HM Treasury untuk memonetisasi setiap manfaat melalui
kesediaan membayar.

## Mengapa Ini Penting

"Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) milik HM
Treasury secara formal membawa data kesejahteraan subjektif ke dalam penilaian pemerintah pusat,
memberikan analis sebuah jalur untuk menilai hasil — koneksi sosial, kesehatan mental, keamanan,
partisipasi sipil — yang sulit dinilai secara meyakinkan oleh metode
[preferensi pernyataan](../stated-preference-valuation/) dan
[preferensi terungkap](../revealed-preference-valuation/), karena orang sering kali menjadi
peramal yang buruk tentang seberapa besar sebuah barang akan benar-benar memengaruhi kepuasan
hidup mereka. Panduan ini, yang dikembangkan bersama What Works Centre for Wellbeing, menetapkan
nilai moneter yang direkomendasikan per WELLBY — £13.000 (harga 2021, direvisi secara berkala) —
diturunkan dari hubungan yang diamati dalam survei kesejahteraan berskala besar (terutama Annual
Population Survey milik ONS, yang telah mengajukan empat pertanyaan kesejahteraan ONS4 sejak 2011)
antara pendapatan dan kepuasan hidup, memberikan analis tingkat konversi kembali ke poundsterling
ketika perbandingan termonetisasi terhadap penilaian Green Book lain dibutuhkan.

Metode ini penting karena membalikkan logika valuasi yang biasa: alih-alih menanyakan berapa yang
akan dibayar orang untuk sebuah hasil (preferensi pernyataan) atau menyimpulkan nilai dari transaksi
pasar terkait (preferensi terungkap), metode ini mengukur efek hasil tersebut terhadap kepuasan
hidup yang dilaporkan secara langsung, sehingga menghindari kesenjangan antara apa yang dikatakan
orang mereka inginkan dan apa yang benar-benar membuat mereka lebih sejahtera. Ini juga menjadi
keterbatasan utamanya — kepuasan hidup yang dilaporkan sendiri dipengaruhi oleh efek adaptasi dan
pembingkaian yang harus dikendalikan oleh praktisi yang cermat.

## Matematika

```
WELLBY = 1 poin kepuasan hidup (skala 0–10) yang bertahan untuk 1
         orang selama 1 tahun

Total WELLBY dari sebuah kebijakan =
  Σ (perubahan skor kepuasan hidup) × (jumlah orang yang terdampak)
    × (durasi dalam tahun, didiskontokan pada tingkat diskonto sosial)

Nilai termonetisasi = Total WELLBY × nilai per WELLBY
  (nilai rekomendasi HM Treasury: £13.000 per WELLBY, harga 2021,
   dapat direvisi secara berkala — periksa panduan terkini sebelum
   digunakan)
```

Ini berbeda dengan [tahun hidup terkoreksi kesejahteraan](../wellbeing-adjusted-life-years/) dalam
ekonomi kesehatan, yang biasanya berlabuh pada skala kualitas hidup terkait kesehatan (EQ-5D dan
sejenisnya) alih-alih kepuasan hidup umum; keduanya saling berkaitan tetapi tidak dapat
dipertukarkan begitu saja, dan penilaian Green Book harus eksplisit tentang skala dan metode
penjaringan mana yang mendasari sebuah angka WELLBY yang dilaporkan.

## Contoh Perhitungan

**Pemerintah daerah**: sebuah dewan kota menjalankan skema pendampingan komunitas untuk penduduk
lansia yang terisolasi, melayani 400 orang. Survei kesejahteraan sebelum/sesudah menggunakan
pertanyaan kepuasan hidup ONS4 menunjukkan skor rata-rata peserta naik dari 5,8 menjadi 6,5 —
kenaikan 0,7 poin — bertahan selama durasi pendanaan program 2 tahun.

```
WELLBY yang dihasilkan = 400 orang × 0,7 poin × 2 tahun = 560 WELLBY
Nilai termonetisasi = 560 × £13.000 = £7,28 juta
Biaya program = £450.000 selama 2 tahun

Rasio manfaat-biaya ≈ £7,28 juta / £0,45 juta ≈ 16:1
```

Rasio setinggi ini seharusnya memicu pengawasan, bukan perayaan — panduan kesejahteraan Green Book
secara eksplisit memperingatkan terhadap menerima begitu saja kenaikan yang dilaporkan sendiri dari
sampel kecil tanpa memeriksa efek seleksi (apakah hanya penduduk yang paling ramah dan paling
mungkin membaik yang bergabung dengan skema tersebut?) dan tanpa kelompok pembanding; evaluasi yang
dirancang dengan baik akan mengurangi perubahan kontrafaktual yang diamati pada bukan-peserta,
lihat [analisis kontrafaktual](../counterfactual-analysis/).

**Pemerintah pusat**: membandingkan dua program ketenagakerjaan menggunakan WELLBY alih-alih hanya
penghasilan menangkap fakta bahwa pengangguran membawa biaya kesejahteraan di luar hilangnya
pendapatan — riset kesejahteraan Inggris secara konsisten menemukan bahwa pengangguran menurunkan
kepuasan hidup lebih besar daripada yang diprediksi oleh hilangnya pendapatan saja, karena efek
non-moneter dari hilangnya struktur, tujuan, dan kontak sosial. Sebuah program yang dievaluasi
hanya berdasarkan kenaikan penghasilan akan meremehkan nilainya dibandingkan program yang juga
dievaluasi dengan WELLBY.

## Kaitan dengan Rekayasa Perangkat Lunak

Valuasi kesejahteraan jarang menjangkau tim rekayasa secara langsung, tetapi ia membentuk apa yang
didefinisikan sebagai "keberhasilan" bagi produk sektor sosial dan layanan publik — sebuah platform
pendampingan digital, alat triase kesehatan mental, atau platform komunitas untuk penduduk yang
terisolasi seharusnya berekspektasi bahwa dampaknya pada akhirnya akan diukur dengan cara ini, yang
berarti analitik produk perlu menangkap *siapa* yang dijangkau dan *berapa lama*, bukan hanya
hitungan penggunaan. Bangun instrumentasi survei kesejahteraan (ONS4 atau yang setara tervalidasi)
ke dalam evaluasi layanan sejak awal, alih-alih menambahkannya secara retrospektif; menambahkan
garis dasar kesejahteraan setelah sebuah layanan diluncurkan sepenuhnya menghilangkan perbandingan
sebelum/sesudah. Lihat [luaran vs keluaran](../outcomes-vs-outputs/) dan
[metode evaluasi dampak](../impact-evaluation-methods/).

## Jebakan Umum

- **Tidak ada kontrafaktual atau kelompok pembanding.** Kenaikan kesejahteraan sebelum/sesudah
  tanpa kontrol terhadap apa yang akan terjadi bagaimanapun juga melebih-lebihkan efek program;
  lihat [analisis kontrafaktual](../counterfactual-analysis/) dan
  [additionalitas dan bobot mati](../additionality-and-deadweight/).
- **Sampel kecil yang menyeleksi diri sendiri.** Survei kesejahteraan terhadap peserta program yang
  mendaftar secara sukarela rentan terhadap bias seleksi — orang yang bergabung dan bertahan
  mungkin sudah menunjukkan tren membaik sejak awal.
- **Memperlakukan konversi £-per-WELLBY seolah-olah presisi.** Nilai termonetisasi ini adalah
  konvensi kebijakan yang diturunkan dari regresi pendapatan-kesejahteraan, bukan harga pasar;
  gunakan untuk keterbandingan lintas penilaian Green Book, bukan sebagai klaim tentang berapa
  "nilai" kesejahteraan sesungguhnya.
- **Mencampuradukkan WELLBY dengan QALY terkait kesehatan.** Keduanya mengukur konstruk yang
  berbeda pada skala yang berbeda; lihat
  [tahun hidup terkoreksi kesejahteraan](../wellbeing-adjusted-life-years/) untuk varian ekonomi
  kesehatannya dan jangan merata-ratakan keduanya bersama-sama.

## Sumber

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
