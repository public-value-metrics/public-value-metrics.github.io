# Indeks Deprivasi Ganda (IMD)

IMD adalah ukuran resmi ketertinggalan (deprivation) relatif untuk wilayah kecil di Inggris,
memeringkat setiap satu dari 32.844 Lower-layer Super Output Areas (LSOA, masing-masing sekitar
1.500 penduduk) negara tersebut dari 1 (paling tertinggal) hingga 32.844 (paling tidak tertinggal).
Ia dipublikasikan oleh yang kini bernama Ministry of Housing, Communities and Local Government
(MHCLG, sebelumnya MHCLG/DCLG), paling terkini sebagai English Indices of Deprivation 2019, dan
secara langsung mengarahkan pendanaan pemerintah pusat, prioritisasi kesehatan masyarakat, dan
kelayakan untuk puluhan skema lokal.

## Mengapa Ini Penting

Ketertinggalan bukanlah satu hal — sebuah lingkungan dapat miskin secara pendapatan tetapi aman,
atau berpendapatan cukup tetapi menderita hasil kesehatan yang buruk dan perumahan yang buruk.
Indeks pendahulu IMD (berasal dari indikator ketertinggalan Department of the Environment tahun
1970-an) berevolusi menjadi model tujuh domain hari ini justru karena penargetan indikator tunggal
(misalnya tingkat pengangguran saja) secara rutin melewatkan wilayah yang tertinggal dengan cara
lain. IMD 2019 menggabungkan pendapatan, ketenagakerjaan, pendidikan, kesehatan, kejahatan,
hambatan terhadap perumahan dan layanan, serta lingkungan hidup menjadi satu peringkat komposit per
LSOA, setiap domain dibangun dari keranjang indikatornya sendiri dan dibobot oleh metodologi MHCLG.
Karena ia beroperasi pada tingkat wilayah kecil (LSOA) alih-alih tingkat pemerintah daerah, ia
mengungkap kantong-kantong ketertinggalan yang tersembunyi di dalam distrik yang sebaliknya makmur —
alasan mengapa IMD, bukan pendapatan rata-rata pemerintah daerah, yang sebenarnya menjadi acuan NHS
England, pupil premium Department for Education, dan puluhan formula pendanaan pemerintah daerah.
Perangkat lunak yang menentukan kelayakan, memprioritaskan penjangkauan, atau melaporkan dampak
berdasarkan wilayah di Inggris seharusnya memperlakukan desil atau peringkat IMD sebagai input kelas
satu, bukan renungan belakangan — dan di mana sebuah program secara sengaja menargetkan wilayah
paling tertinggal, penilaiannya seharusnya menerapkan
[pembobotan distribusional](../distributional-weighting/) yang konsisten dengan penargetan tersebut,
alih-alih menghargai satu poundsterling manfaat sama saja terlepas dari di mana ia jatuh.

## Matematika

```
7 domain, dibobot:
  Pendapatan                                  22,5%
  Ketenagakerjaan                             22,5%
  Pendidikan, Keterampilan, dan Pelatihan     13,5%
  Ketertinggalan Kesehatan dan Disabilitas    13,5%
  Kejahatan                                    9,3%
  Hambatan terhadap Perumahan dan Layanan      9,3%
  Lingkungan Hidup                             9,3%

Setiap skor domain: indikator distandardisasi (diperingkat, lalu
ditransformasi menuju distribusi normal) dan digabungkan melalui
transformasi eksponensial sehingga ketertinggalan tinggi pada indikator
mana pun tidak dapat sepenuhnya dibatalkan oleh ketertinggalan rendah
pada yang lain dalam domain tersebut.

Skor komposit IMD (LSOA) = Σ (skor domain × bobot domain)
Peringkat LSOA berdasarkan skor komposit → 1 (paling tertinggal) hingga
32.844 (paling tidak tertinggal)
Desil: peringkat ÷ 3.284 (perkiraan), desil 1 = 10% LSOA paling
tertinggal
```

## Contoh Perhitungan

**Skor komposit LSOA**, menggunakan skor domain terstandardisasi ilustratif (0 = tidak ada sinyal
ketertinggalan, lebih tinggi = lebih tertinggal):

```
Pendapatan               0,35 × 0,225 = 0,07875
Ketenagakerjaan          0,30 × 0,225 = 0,06750
Pendidikan               0,20 × 0,135 = 0,02700
Kesehatan                0,15 × 0,135 = 0,02025
Kejahatan                0,10 × 0,093 = 0,00930
Hambatan Perumahan       0,05 × 0,093 = 0,00465
Lingkungan Hidup         0,08 × 0,093 = 0,00744

Skor komposit = 0,07875 + 0,06750 + 0,02700 + 0,02025
                + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Skor komposit itu kemudian diperingkat terhadap skor seluruh 32.844 LSOA. Jika itu menempatkan LSOA
pada peringkat 2.950, ia jatuh pada desil 1 (2.950 ÷ 3.284 ≈ 0,9, yaitu dalam 10% lingkungan paling
tertinggal di Inggris) — yang untuk banyak formula pendanaan merupakan ambang batas yang membuka
kelayakan, terlepas dari bagaimana pemerintah daerah sekitarnya mencetak skor rata-rata.

## Kaitan dengan Rekayasa Perangkat Lunak

- Layanan mana pun yang melakukan geocode pengguna ke kode pos atau LSOA dapat bergabung dengan
  tabel lookup IMD yang dipublikasikan (sebuah CSV gratis dan berversi dari MHCLG) untuk menambahkan
  desil ketertinggalan sebagai kovariat — untuk menargetkan penjangkauan, memprioritaskan beban
  kasus, atau melaporkan hasil berdasarkan pita ketertinggalan tanpa mengumpulkan data pribadi baru.
- Desil IMD adalah pemeriksaan kesetaraan standar untuk layanan digital publik: menabulasi silang
  penggunaan layanan, penurunan, atau kepuasan berdasarkan desil IMD mengungkap kesenjangan akses
  yang disembunyikan oleh metrik agregat — lihat [inklusi digital](../digital-inclusion/) dan
  [metrik kepuasan warga](../citizen-satisfaction-metrics/).
- Karena peringkat IMD bersifat relatif (selalu berjumlah ke sebuah set peringkat tetap di seluruh
  Inggris), ia tidak dapat menunjukkan apakah ketertinggalan secara nasional naik atau turun seiring
  waktu — hanya wilayah mana yang berperingkat di mana relatif satu sama lain dalam edisi tersebut;
  jangan membangun dasbor tren absolut hanya berdasarkan peringkat IMD mentah.

## Jebakan Umum

- **Membandingkan peringkat IMD di seluruh edisi (2015 vs 2019) sebagai sebuah tren waktu** —
  indikator, geografi, dan metodologi yang mendasari semuanya berubah antar edisi; MHCLG secara
  eksplisit menyarankan untuk tidak menggunakan perubahan peringkat sebagai bukti bahwa sebuah
  wilayah menjadi lebih atau kurang tertinggal.
- **Menerapkan IMD tingkat LSOA pada individu** — sebuah LSOA pada desil 1 tetap mengandung rumah
  tangga yang tidak tertinggal, dan sebuah LSOA desil-10 tetap mengandung yang tertinggal; IMD
  mendeskripsikan wilayah, bukan orang, dan menggunakannya sebagai proksi kelayakan individual
  salah mengklasifikasikan kedua arah.
- **Mengabaikan detail tingkat domain demi peringkat komposit** — dua LSOA dengan skor komposit
  identik dapat memiliki profil domain yang sama sekali berbeda (satu tertinggal kesehatan, satu
  tertinggal kejahatan); sebuah skema penargetan yang ditujukan untuk satu masalah seharusnya
  menggunakan skor domain yang relevan, bukan komposit yang terpadu.

## Sumber

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
