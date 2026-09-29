# Biaya per Transaksi

Biaya per transaksi adalah metrik ekonomi unit utama untuk sebuah layanan digital pemerintah: total
biaya untuk menyampaikan sebuah kanal, dibagi dengan jumlah transaksi yang diselesaikan melaluinya.
Ini adalah angka andalan pada GOV.UK Performance Platform lama, dan merupakan angka yang mendanai
satu dekade investasi "digital secara default" — itulah tepatnya mengapa ini juga metrik yang paling
rentan dimanipulasi.

## Mengapa Ini Penting

Digital Efficiency Report Cabinet Office tahun 2012 menyajikan perbandingan biaya kanal dalam
istilah yang melekat: transaksi digital ditemukan berbiaya sekitar 20 kali lebih murah daripada
melalui telepon dan sekitar 50 kali lebih murah daripada tatap muka, dengan angka pemerintah daerah
ilustratif sekitar £0,15 per transaksi web dibandingkan £2,83 melalui telepon dan £8,62 tatap muka.
Perbandingan tunggal itu menjadi pembenaran untuk merancang ulang 25 layanan contoh yang disebutkan
dalam Government Digital Strategy, dan untuk setiap kasus bisnis departemen yang telah mengutip
penghematan pergeseran kanal sejak saat itu. Angka ini benar-benar berguna sebagai sinyal orde
besaran, tetapi rasionya sepenuhnya bergantung pada apa yang dihitung pada setiap sisi: biaya kanal
telepon yang adil mencakup staf pusat panggilan, kontrak telepon, pelatihan, dan estatnya; biaya
digital yang adil mencakup hosting, gaji tim produk yang berkelanjutan, waktu meja dukungan untuk
perjalanan yang gagal, dan kanal digital-terbantu yang disyaratkan oleh
[standar layanan digital](../digital-service-standard/) poin 5. Buang cukup banyak dari itu dari
sisi digital dan layanan apa pun akan terlihat murah.

## Matematika

```
Biaya per transaksi = total biaya kanal yang dialokasikan / transaksi
                       yang diselesaikan

Total biaya kanal yang dialokasikan seharusnya mencakup:
  + hosting dan infrastruktur
  + biaya tim produk/rekayasa/dukungan (diamortisasi)
  + biaya konten dan desain layanan (diamortisasi)
  + biaya dukungan digital-terbantu / aksesibilitas
  + biaya permintaan kegagalan (pengguna yang gagal secara digital dan
    beralih kembali ke telepon)
  − biaya pembangunan satu kali diamortisasi selama masa layanan yang
    diharapkan, tidak seluruhnya dibebankan pada tahun pertama

Trik akuntansi yang umum:
  "Biaya marjinal per transaksi" (hanya hosting, setelah dibangun)
  dikutip seolah-olah itu adalah "biaya rata-rata per transaksi"
  (total biaya termasuk tim yang terus membangun dan menjalankannya).
  Keduanya dapat berbeda 10x atau lebih untuk sebuah layanan dengan
  tim penyampaian yang besar dan aktif.
```

## Contoh Perhitungan

**Layanan pembaruan pajak kendaraan**: 4 juta transaksi/tahun.

```
Angka hanya-marjinal (triknya):
  Hosting + pemrosesan pembayaran saja = £180.000/tahun
  Biaya per transaksi = 180.000 / 4.000.000 = £0,045
  → angka utama yang dikutip dalam sebuah kasus bisnis

Angka yang sepenuhnya terbebankan (yang jujur):
  Hosting + pembayaran                       £180.000
  Tim produk/rekayasa (8 FTE)                £720.000
  Meja dukungan (transaksi gagal/dipertanyakan) £310.000
  Saluran telepon digital-terbantu           £140.000
  Total                                      £1.350.000
  Biaya per transaksi = 1.350.000 / 4.000.000 = £0,3375

Angka yang sepenuhnya terbebankan masih sekitar 8x lebih murah
daripada pembanding kanal telepon £2,83 dari Digital Efficiency
Report — sebuah penghematan yang nyata dan dapat dipertahankan —
tetapi 7,5x lebih tinggi daripada angka hanya-marjinal yang dikutip
dalam versi pintasan. Kedua angka "benar"; hanya satu yang dapat
dibandingkan dengan biaya kanal telepon yang menjadi pembandingnya.
```

## Kaitan dengan Rekayasa Perangkat Lunak

Biaya per transaksi adalah tempat di mana keputusan arsitektur menjadi angka keuangan: sebuah
layanan yang menskalakan secara otomatis dengan bersih dan hanya membutuhkan sedikit intervensi
manual menurunkan angka ini seiring waktu; sebuah layanan yang menghasilkan volume tiket dukungan
tinggi dari kondisi kesalahan yang membingungkan menaikkannya terlepas dari efisiensi hosting. Ini
adalah metrik pendamping alami untuk [standar layanan digital](../digital-service-standard/) poin
10 ("tentukan seperti apa keberhasilan itu, dan publikasikan data kinerja") dan untuk
[standar layanan dan metrik transaksi](../service-standards-and-transaction-metrics/), yang
menetapkan set KPI lebih lengkap di mana angka ini berada. Ini juga mengalir langsung ke dalam
perhitungan [penghematan pergeseran kanal](../channel-shift-savings/) dan sebaiknya direkonsiliasi
terhadap [total biaya kepemilikan TI pemerintah](../total-cost-of-ownership-in-government-it/)
sehingga overhead platform dan layanan bersama tidak diam-diam terjatuhkan.

## Jebakan Umum

- **Biaya marjinal berdandan sebagai biaya rata-rata**: mengutip biaya hanya-hosting setelah sebuah
  layanan dibangun, mengabaikan tim yang berkelanjutan yang memelihara, mengiterasi, dan
  mendukungnya — lihat contoh perhitungan di atas.
- **Mengecualikan biaya digital-terbantu**: sebuah kanal tidak patuh "digital secara default", dan
  biaya sesungguhnya tidak tertangkap, jika fallback telepon/kertas yang disyaratkan oleh
  [inklusi digital](../digital-inclusion/) dihitung biayanya secara terpisah atau diabaikan.
- **Mengabaikan permintaan kegagalan**: transaksi yang dimulai secara digital dan gagal,
  menghasilkan panggilan telepon atau formulir kertas bagaimanapun juga, adalah biaya dari kanal
  digital, bukan kanal yang menangkap kegagalan tersebut.
- **Membandingkan transaksi dengan kompleksitas berbeda di seluruh kanal**: panggilan telepon secara
  tidak proporsional menangani kasus-kasus sulit (banyak tanggungan, koreksi kesalahan, pemohon
  rentan); membandingkan biaya telepon rata-rata dengan biaya digital rata-rata melebih-lebihkan
  rasio kecuali campuran transaksinya dicocokkan.

## Sumber

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
