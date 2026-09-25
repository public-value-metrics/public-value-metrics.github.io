# Produktivitas Layanan Publik

Produktivitas layanan publik mengukur seberapa efisien belanja publik mengonversi input (staf,
modal, barang dan jasa) menjadi keluaran yang disesuaikan kualitas, untuk layanan — kesehatan,
pendidikan, kepolisian, perawatan sosial — yang tidak memiliki harga pasar dan karenanya tidak
memiliki angka pendapatan untuk membagi biaya. UK Office for National Statistics telah
mempublikasikan seri ini sejak pertengahan 2000-an dan itu tetap merupakan upaya nasional paling
maju secara metodologis untuk menjawab "apakah pemerintah menjadi lebih baik atau lebih buruk dalam
mengonversi uang menjadi layanan publik?"

## Mengapa Ini Penting

Dalam sebuah pasar, produktivitas adalah (nilai keluaran) / (biaya input), dan nilai keluaran dapat
diamati karena seseorang membayarnya. Sebuah penggantian pinggul, sebuah tempat sekolah, dan sebuah
patroli polisi tidak memiliki harga jual, sehingga secara naif Anda hanya dapat mengukur *input*
(apa yang dibelanjakan) — yang menggoda komentator untuk memperlakukan naiknya belanja publik
sebagai otomatis buruk, karena lebih banyak input dengan aktivitas utama yang datar terlihat seperti
produktivitas yang menurun. Metodologi ONS, ditetapkan dalam publikasi "Sources and Methods"-nya
untuk produktivitas layanan publik, memecahkan ini dengan membangun sebuah indeks *keluaran* dari
volume aktivitas (operasi yang dilakukan, murid yang diajar, kejahatan yang diselidiki) dan
kemudian *menyesuaikan kualitas* indeks keluaran tersebut — untuk kesehatan, memasukkan tingkat
kelangsungan hidup dan waktu tunggu; untuk pendidikan, memasukkan pencapaian; untuk kepolisian,
memasukkan hasil seperti penyelesaian kasus — sehingga sebuah layanan yang melakukan jumlah operasi
yang sama tetapi mencapai tingkat kelangsungan hidup yang lebih baik tercatat sebagai lebih
produktif, bukan sekadar lebih mahal. Temuan utama yang berulang di seluruh rilis ONS
mengkhawatirkan bagi sektor ini: produktivitas layanan publik Inggris turun tajam selama pandemi
COVID-19 dan menurut rilis pertengahan 2020-an ONS sendiri masih belum pulih ke tingkat 2019 di
beberapa sub-sektor termasuk layanan kesehatan, bahkan ketika belanja naik — sebuah kesenjangan
yang membingkai ulang "lebih banyak pendanaan" dan "lebih banyak produktivitas" sebagai dua
pertanyaan yang sama sekali terpisah.

## Matematika

```
Indeks keluaran (volume) = Σ (aktivitas_i × bobot biaya satuan
                            relatif_i), berbobot tahun-dasar di seluruh
                            aktivitas layanan (misalnya operasi pinggul,
                            operasi katarak, konsultasi dokter umum),
                            analog dengan indeks volume Laspeyres/Paasche

Penyesuaian kualitas   = indeks keluaran × faktor penyesuaian kualitas
                          (misalnya memasukkan perubahan tingkat
                          kelangsungan hidup, waktu tunggu, pencapaian,
                          atau residivisme sebagai pengganda pada
                          volume mentah)

Indeks input           = Σ (jam kerja × bobot biaya kerja) + (biaya
                          barang/jasa, terdeflasi) + (konsumsi modal)

Pertumbuhan produktivitas faktor total = % perubahan indeks keluaran
                                          yang disesuaikan kualitas
                                          − % perubahan indeks input
```

## Contoh Perhitungan

**Perhitungan produktivitas sektor akut NHS ilustratif** (struktur mengikuti metodologi ONS):

```
Tahun 1: indeks volume keluaran = 100,0 (tahun dasar), indeks input
         = 100,0
         → indeks produktivitas = 100,0

Tahun 2: volume aktivitas naik 3,0% (lebih banyak operasi, lebih
         banyak janji temu) tetapi waktu tunggu rata-rata memburuk,
         menerapkan diskon penyesuaian kualitas −1,0%
         Indeks keluaran disesuaikan kualitas = 100 × 1,030 × 0,990
                                                = 101,97

         Input naik: jumlah staf +4,0%, biaya lain (terdeflasi) +1,5%,
         indeks input terbobot = 100 × 1,032 = 103,2

Pertumbuhan produktivitas = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                           = 1,97% − 3,2% = −1,23 poin persentase

Interpretasi: aktivitas naik, tetapi input naik lebih cepat dan
kualitas turun sedikit, sehingga produktivitas — keluaran per unit
input — menurun meskipun "lebih banyak perawatan disampaikan."
```

Ini adalah persis pola yang berulang kali dilaporkan rilis ONS untuk bagian-bagian NHS pasca-pandemi:
naiknya belanja dan naiknya aktivitas mentah berdampingan dengan turunnya produktivitas terukur
begitu penyesuaian kualitas dan pertumbuhan input keduanya diperhitungkan.

## Kaitan dengan Rekayasa Perangkat Lunak

Produktivitas layanan publik adalah analog tingkat populasi dari debat produktivitas rekayasa (story
point yang dirilis dibandingkan [metrik DORA](../dora-metrics-for-public-value/) dibandingkan
[metrik alur](../flow-metrics-in-government-delivery/)): throughput mentah tanpa penyesuaian
kualitas persis sama menyesatkannya di sebuah rumah sakit seperti "baris kode yang dirilis" di
sebuah tim perangkat lunak. Tim yang membangun pipeline data kinerja untuk departemen seharusnya
memperlakukan penyesuaian kualitas sebagai tahap transformasi kelas satu dan berversi, bukan catatan
kaki — karena kredibilitas ONS sendiri bergantung pada penyesuaian tersebut yang transparan, dapat
direproduksi, dan direvisi seiring data kualitas yang lebih baik datang (ONS merevisi estimasi
produktivitas tahun-tahun lalu seiring data kualitas yang mendasari — misalnya tingkat kelangsungan
hidup — difinalisasi, sehingga sistem hilir mana pun yang mengonsumsi statistik ini harus menangani
revisi retroaktif, bukan hanya menambahkan periode baru). Ini juga berpotongan langsung dengan
[total biaya kepemilikan](../total-cost-of-ownership-in-government-it/) dan
[produktivitas AI di sektor publik](../ai-productivity-in-the-public-sector/): sebuah sistem yang
meningkatkan volume aktivitas mentah tanpa meningkatkan atau mempertahankan kualitas bukanlah,
menurut definisi ONS sendiri, sebuah peningkatan produktivitas.

## Jebakan Umum

- **Memperlakukan pertumbuhan input sebagai pertumbuhan produktivitas**: lebih banyak belanja yang
  mendanai lebih banyak staf menghasilkan lebih banyak *aktivitas*, bukan lebih banyak
  *produktivitas*, kecuali keluaran per unit input juga naik — keduanya secara rutin
  dicampuradukkan dalam komentar politik.
- **Sepenuhnya mengabaikan penyesuaian kualitas**: sebuah indeks keluaran yang dibangun hanya dari
  jumlah aktivitas mentah akan menunjukkan "keuntungan produktivitas" dari melakukan lebih banyak
  sesuatu yang bernilai lebih rendah atau kualitas lebih rendah; penyesuaian kualitas ONS ada
  secara khusus untuk menangkap ini.
- **Membandingkan indeks produktivitas di seluruh sub-sektor tanpa mencocokkan angkatan metodologi**:
  produktivitas kesehatan, pendidikan, dan kepolisian masing-masing dibangun dari sumber data
  aktivitas dan kualitas yang berbeda pada siklus revisi yang berbeda — sebuah perbandingan lintas
  sektor yang naif membandingkan instrumen yang tidak kompatibel.
- **Membaca penurunan produktivitas satu tahun sebagai tren permanen**: angka produktivitas era
  pandemi dan pasca-pandemi telah menunjukkan volatilitas tahun-ke-tahun yang signifikan seiring
  data kualitas itu sendiri (misalnya daftar tunggu, pemulihan elektif) bergeser; ONS secara
  konsisten memperingatkan terhadap menafsirkan berlebihan pergerakan satu tahun.

## Sumber

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
