# Standar Layanan dan Metrik Transaksi

GOV.UK Service Standard adalah daftar periksa 14 poin pemerintah Inggris untuk membangun dan
menjalankan sebuah layanan digital publik, dan ia dipasangkan dengan sekumpulan kecil metrik
transaksi kuantitatif yang wajib — biaya per transaksi, tingkat penyelesaian, penggunaan digital,
dan kepuasan pengguna — yang harus dipublikasikan tim untuk setiap layanan pemerintah pusat yang
aktif. Bersama-sama, standar dan metrik tersebut adalah spesialisasi operasional sehari-hari dari
kerangka nilai publik dan KPI yang lebih luas dalam repositori ini, ditujukan langsung pada tim
penyampaian perangkat lunak.

## Mengapa Ini Penting

Service Standard, dikelola dalam service manual GOV.UK, mensyaratkan setiap penilaian titik-waktu
(alpha, beta, aktif) sebuah layanan digital pemerintah untuk mendemonstrasikan — di antara 14
poinnya — bahwa tim tersebut memahami kebutuhan pengguna, bekerja dalam sebuah tim multidisiplin,
beriterasi dan meningkat secara sering, dan *mengevaluasi alat, sistem, dan cara kerja*. Secara
historis ini berdampingan dengan sebuah Performance Platform publik di mana setiap layanan aktif
mempublikasikan data transaksinya secara terbuka; platform tersebut sejak itu telah dipensiunkan,
tetapi kewajiban yang mendasari untuk mengukur dan mempublikasikan empat metrik inti ini bertahan
melalui panduan "measuring success" service manual tersebut. Alasan ini berbeda dari sebuah dasbor
KPI perangkat lunak generik adalah bahwa metrik-metrik ini secara eksplisit dirancang sebagai satu
model ekonomi yang terkait, bukan empat skor independen: seluruh kasus penghematan untuk pemerintah
digital — Digital Efficiency Report milik Government Digital Service menemukan transaksi digital
sekitar 20 kali lebih murah daripada melalui telepon dan sekitar 50 kali lebih murah daripada tatap
muka untuk layanan pemerintah daerah yang sebanding — hanya terwujud jika tingkat penyelesaian tetap
tinggi dan penggunaan digital benar-benar naik, alih-alih sekadar menambahkan sebuah kanal murah
berdampingan dengan yang mahal yang tidak berubah.

## Matematika

```
Biaya per transaksi    = total biaya operasional layanan / jumlah
                          transaksi yang diselesaikan
Tingkat penyelesaian    = transaksi diselesaikan / transaksi dimulai
                          × 100
Penggunaan digital      = transaksi kanal digital / transaksi semua
                          kanal × 100
Kepuasan pengguna       = % puas + sangat puas, survei 5-poin di
                          dalam layanan

Penghematan pergeseran kanal = volume transaksi × pergeseran
                        penggunaan × (biaya per transaksi pada kanal
                        lama − biaya per transaksi digital)

Biaya permintaan kegagalan = (1 − tingkat penyelesaian) × transaksi
                        yang dicoba secara digital × biaya kanal
                        fallback yang kemudian digunakan pengguna
                        tersebut sebagai gantinya
```

## Contoh Perhitungan

**Layanan pembaruan lisensi pemerintah pusat ilustratif**, 2 juta transaksi/tahun, saat ini 65%
telepon (£3,00/transaksi) dan 35% digital (£0,30/transaksi), tingkat penyelesaian 80%. Sebuah
perancangan ulang terhadap Service Standard 14 poin mengangkat penggunaan digital menjadi 60% dan
penyelesaian menjadi 92%:

```
Penghematan pergeseran penggunaan = 2.000.000 × 0,25 × (3,00 − 0,30)
                                   = £1.350.000/tahun

Biaya permintaan kegagalan, sebelum:
  2.000.000 × 0,35 × (1 − 0,80) × £3,00 = £420.000/tahun (yang
  meninggalkan kembali ke telepon)

Biaya permintaan kegagalan, sesudah:
  2.000.000 × 0,60 × (1 − 0,92) × £3,00 = £288.000/tahun

Penghematan permintaan kegagalan bersih = £420.000 − £288.000
                                         = £132.000/tahun

Total penghematan tahunan ≈ £1.350.000 + £132.000 = £1.482.000/tahun
```

Aritmetika ini secara eksplisit menunjukkan mengapa tingkat penyelesaian bukan metrik sekunder:
tanpa perbaikan dari 80% menjadi 92%, penghematan pergeseran penggunaan akan sebagian tertarik
kembali oleh permintaan kegagalan yang mengarahkan pengguna digital yang frustrasi langsung kembali
ke kanal telepon yang mahal.

## Kaitan dengan Rekayasa Perangkat Lunak

Keempat metrik ini adalah contoh kerja dari sebuah dasbor konsekuensi-biaya: satu metrik biaya
dipisahkan dari tiga metrik hasil/kualitas, sengaja tidak pernah diruntuhkan menjadi satu skor
tunggal — disiplin yang sama yang diargumentasikan dalam [KPI sektor publik](../public-sector-kpis/).
Bagi insinyur, ini terurai menjadi pekerjaan konkret dan dapat dimiliki: tingkat penyelesaian adalah
sebuah masalah instrumentasi funnel, dan setiap titik peninggalan dalam perjalanan tersebut, pada
prinsipnya, dapat ditemukan lokasinya dan diperbaiki; biaya per transaksi membutuhkan akuntansi
biaya satuan yang genuine termasuk biaya kanal berbantuan-staf dan kertas, bukan hanya belanja
hosting cloud (lihat [biaya per transaksi](../cost-per-transaction/) dan
[total biaya kepemilikan TI pemerintah](../total-cost-of-ownership-in-government-it/)); dan
penggunaan digital adalah metrik kesetaraan yang mengenakan kostum efisiensi — warga yang tidak
dapat atau tidak mau berpindah kanal secara tidak proporsional lebih tua, disabilitas, atau
terkecualikan secara digital, sehingga penutupan kanal yang agresif mengubah sebuah "penghematan"
menjadi kerugian akses (lihat [inklusi digital](../digital-inclusion/) dan
[penghematan pergeseran kanal](../channel-shift-savings/)). Standar 14 poin itu sendiri adalah
spesifikasi proses di balik angka-angka ini — lihat [standar layanan digital](../digital-service-standard/)
untuk standar secara lengkap, dan [metrik kepuasan warga](../citizen-satisfaction-metrics/) untuk
bagaimana angka kepuasan di sini berkaitan dengan pengukuran kepercayaan yang lebih luas.

## Jebakan Umum

- **Penggunaan yang diperoleh dengan menutup kanal alternatif**: menutup sebuah saluran telepon
  mengangkat persentase penggunaan digital secara aritmetis sambil membuang permintaan kegagalan ke
  kanal apa pun yang tersisa (sering sebuah rute digital-terbantu atau tatap muka yang lebih mahal);
  selalu ukur biaya total-sistem, bukan rasionya saja.
- **Mengukur tingkat penyelesaian dari langkah kedua funnel**: memulai jumlah "dimulai" setelah
  titik peninggalan genuine pertama menyanjung tingkat penyelesaian dan menyembunyikan kehilangan
  yang dapat diperbaiki terbesar.
- **Biaya per transaksi mengecualikan dukungan digital-terbantu**: sebuah biaya satuan hanya-digital
  yang mengabaikan waktu staf yang dihabiskan membantu pengguna yang tidak dapat melayani diri
  sendiri meremehkan biaya sesungguhnya kanal tersebut.
- **Mempublikasikan metrik tanpa definisi bersama di seluruh layanan**: "transaksi" dan "diselesaikan"
  berarti hal yang berbeda di seluruh tim layanan yang berbeda kecuali definisinya distandardisasi
  dan diberi versi, membuat perbandingan lintas layanan tidak dapat diandalkan.

## Sumber

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
