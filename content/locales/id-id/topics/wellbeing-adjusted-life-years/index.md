# Tahun Hidup Terkoreksi Kesejahteraan (WELLBY)

Satu WELLBY adalah satu poin tambahan kepuasan hidup, pada skala kesejahteraan standar 0–10, untuk
satu orang selama satu tahun. Ini adalah analog struktural dari QALY yang digunakan dalam ekonomi
kesehatan — satu unit tunggal yang memungkinkan Anda membandingkan intervensi yang hasilnya sama
sekali tidak memiliki kesamaan lain — tetapi dibangun di atas kesejahteraan subjektif, bukan
keadaan kesehatan klinis, dan ditetapkan dalam "Wellbeing guidance for appraisal: supplementary
Green Book guidance" (2021) milik HM Treasury.

## Mengapa Ini Penting

Penilaian biaya-manfaat membutuhkan satu unit yang sama untuk membandingkan hibah klub pemuda
dengan skema keselamatan jalan dengan layanan kesehatan mental, yang semuanya tidak memiliki ukuran
hasil yang sama. Ekonomi kesehatan telah memecahkan masalah ini untuk intervensi klinis dengan
QALY: satu tahun hidup terkoreksi kualitas, dibobotkan dari 0 (meninggal) hingga 1 (kesehatan
penuh). Panduan kesejahteraan HM Treasury memperluas logika yang sama ke belanja publik non-
kesehatan, menggunakan pertanyaan kepuasan hidup yang diharmonisasi milik ONS ("Secara keseluruhan,
seberapa puaskah Anda dengan hidup Anda saat ini?", dijawab 0–10) sebagai tangga hasil, alih-alih
indeks keadaan kesehatan. Satu WELLBY berarti kepuasan hidup satu orang meningkat satu poin penuh
selama satu tahun (atau, secara setara, kepuasan sepuluh orang meningkat 0,1 poin masing-masing
selama satu tahun — WELLBY dijumlahkan lintas populasi sebagaimana QALY). Panduan HM Treasury
menetapkan nilai moneter ilustratif per WELLBY (sekitar £13.000, harga 2019/20) yang diturunkan
dengan merekonsiliasi data kesejahteraan subjektif dengan pendekatan lain terhadap nilai satu
tahun hidup, memberikan penilai cara untuk memonetisasi hasil — pengurangan kesepian, kohesi
komunitas, akses ruang hijau — yang sebelumnya hanya dapat dideskripsikan, bukan dibandingkan atas
dasar yang sama dengan belanja kesehatan atau keselamatan, oleh teknik
[valuasi kesejahteraan](../wellbeing-valuation/).

## Matematika

```
WELLBY = Δ kepuasan hidup (skala 0–10) × jumlah tahun perubahan
        tersebut bertahan (dijumlahkan di seluruh orang yang terdampak)

Manfaat kesejahteraan termonetisasi = WELLBY yang dihasilkan × nilai
                                       per WELLBY (nilai rujukan HMT)

bandingkan: QALY = Δ utilitas keadaan kesehatan (skala 0–1) × tahun
                    yang dijalani dalam keadaan tersebut
```

Skala kepuasan 0–10 dan skala utilitas QALY 0–1 tidak dapat dipertukarkan begitu saja tanpa langkah
konversi; panduan HM Treasury membahas cara merekonsiliasi keduanya agar, misalnya, sebuah
intervensi kesehatan yang dinilai dalam QALY dan sebuah intervensi sosial yang dinilai dalam WELLBY
tidak diam-diam dihitung ganda atau dibiarkan tidak dapat dibandingkan dalam satu
[penilaian Green Book](../green-book-appraisal/) yang sama.

## Contoh Perhitungan

**Layanan kesepian pemerintah daerah**: sebuah skema pendampingan (befriending) melayani 400
penduduk lansia yang terisolasi. Survei lanjutan menunjukkan rata-rata kepuasan hidup naik dari
5,2 menjadi 6,0 (kenaikan 0,8 poin), dan efek tersebut diperkirakan bertahan selama 2 tahun sebelum
memudar.

```
WELLBY = 400 orang × 0,8 poin × 2 tahun = 640 WELLBY

Nilai termonetisasi = 640 × £13.000 = £8.320.000
```

Terhadap biaya program tahunan £300.000 (£600.000 selama 2 tahun), rasio manfaat-biaya kira-kira
8.320.000 / 600.000 ≈ **13,9:1** — sebuah angka yang kini dapat duduk di tabel penilaian yang sama
dengan biaya-per-QALY-yang-dicegah milik sebuah skema kesehatan atau penghematan waktu perjalanan
milik sebuah skema transportasi.

**Organisasi amal, skala lebih kecil**: sebuah program seni komunitas menjangkau 50 peserta dengan
kenaikan kepuasan terukur sebesar 0,3 poin, bertahan selama 1 tahun.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Nilai termonetisasi = 15 × £13.000 = £195.000
```

## Kaitan dengan Rekayasa Perangkat Lunak

- Layanan apa pun yang berhadapan dengan warga yang sudah mengumpulkan item survei kepuasan hidup
  atau kesejahteraan (banyak platform pemerintah daerah dan kesehatan-perawatan melakukannya,
  mengikuti empat pertanyaan kesejahteraan standar ONS) dapat menghitung WELLBY langsung dari
  pipeline data yang sudah ada, alih-alih menugaskan evaluasi ekonomi khusus untuk setiap perubahan
  layanan.
- WELLBY memberikan tim rekayasa yang membangun untuk pelaporan [social value act](../social-value-act/)
  atau [laba sosial atas investasi](../social-return-on-investment/) sebuah penyebut yang
  distandarkan secara nasional dan didukung HM Treasury, menghindari perkembangbiakan "skor dampak"
  khusus yang tidak dapat dibandingkan lintas kontrak atau pemasok.
- Karena WELLBY bersifat aditif lintas orang dan waktu, WELLBY dapat disusun dengan rapi menjadi jenis
  pelacakan hasil tingkat populasi yang digunakan dalam sistem
  [akuntabilitas berbasis hasil](../outcomes-based-accountability/) — sebuah dasbor layanan dapat
  melaporkan WELLBY kumulatif yang dihasilkan per kuartal sebagaimana sebuah sistem kesehatan
  melaporkan QALY yang diperoleh.

## Jebakan Umum

- **Mengasumsikan kenaikan kepuasan yang dilaporkan sendiri sepenuhnya diatribusikan pada
  intervensi** — tanpa kontrafaktual (kelompok pembanding atau desain sebelum/sesudah dengan
  kontrol), Anda tidak dapat memisahkan kenaikan WELLBY dari tren umum; lihat
  [analisis kontrafaktual](../counterfactual-analysis/).
- **Mencampur WELLBY dan QALY dalam satu total tanpa rekonsiliasi** — panduan HM Treasury secara
  eksplisit menyatakan bahwa keduanya menggunakan skala berbeda dan teori nilai yang mendasarinya
  berbeda; menjumlahkannya secara naif menghitung ganda kesejahteraan yang tumpang tindih.
- **Menggunakan nilai moneter rujukan tanpa kritik** — angka £-per-WELLBY adalah estimasi rata-rata
  nasional dengan rentang ketidakpastian yang nyata; panduan HM Treasury merekomendasikan analisis
  sensitivitas, bukan memperlakukannya sebagai nilai tukar tetap.

## Sumber

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
