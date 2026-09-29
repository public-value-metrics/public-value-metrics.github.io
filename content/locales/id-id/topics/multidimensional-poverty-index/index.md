# Indeks Kemiskinan Multidimensi (MPI)

MPI mengukur kemiskinan sebagai ketertinggalan yang tumpang tindih yang dialami seseorang pada saat
yang sama — dalam kesehatan, pendidikan, dan standar hidup — alih-alih sekadar pendapatan yang jatuh
di bawah sebuah garis. Ia dikembangkan oleh Oxford Poverty and Human Development Initiative (OPHI)
bersama Sabina Alkire dan James Foster, dan telah dipublikasikan bersama UNDP di setiap Human
Development Report sejak 2010, berdampingan dengan
[Indeks Pembangunan Manusia](../human-development-index/).

## Mengapa Ini Penting

Garis kemiskinan pendapatan melewatkan orang-orang yang memiliki pendapatan tunai yang cukup tetapi
kekurangan air bersih, pendidikan, atau selamat dari kematian seorang anak — dan mereka melewatkan
fakta bahwa ketertinggalan berkelompok: sebuah rumah tangga tanpa listrik secara tidak proporsional
kemungkinan juga kekurangan sanitasi dan memiliki anak yang kurang gizi. Metode Alkire-Foster, yang
menjadi dasar dibangunnya MPI, menghitung ketertinggalan setiap orang di seluruh sepuluh indikator
yang dikelompokkan ke dalam tiga dimensi berbobot setara — kesehatan, pendidikan, standar hidup —
dan hanya mengklasifikasikan seseorang sebagai "miskin-MPI" jika skor ketertinggalan terbobot mereka
melewati sebuah ambang batas tetap, menangkap tumpang tindih yang tidak dapat ditangkap oleh
sekumpulan statistik indikator tunggal terpisah. OPHI mempublikasikan metodologi lengkap dan data
negara di <https://ophi.org.uk/multidimensional-poverty-index/>; MPI global yang dikelolanya bersama
UNDP kini mencakup lebih dari 110 negara. Untuk perangkat lunak yang dibangun untuk program
anti-kemiskinan — transfer tunai, triase perawatan sosial, penargetan bantuan — set indikator MPI
sering kali adalah hal terdekat dengan sebuah skema ketertinggalan terstandardisasi yang sudah
divalidasi di puluhan kantor statistik nasional.

## Matematika

```
10 indikator, 3 dimensi, setiap dimensi dibobot 1/3:

Kesehatan (1/3):          nutrisi (1/6), mortalitas anak (1/6)
Pendidikan (1/3):         tahun sekolah (1/6), kehadiran sekolah (1/6)
Standar hidup (1/3):      bahan bakar memasak, sanitasi, air minum,
                           listrik, perumahan, aset (1/18 masing-masing)

skor ketertinggalan (c) = jumlah bobot indikator yang mengalami
                           ketertinggalan seseorang

seseorang "miskin-MPI" jika c ≥ 1/3 (batas kemiskinan, k = 33%)

H (rasio jumlah kepala) = jumlah miskin-MPI / total populasi
A (intensitas)          = skor ketertinggalan rata-rata hanya di
                           antara mereka yang miskin-MPI

MPI = H × A
```

Karena MPI mengalikan *pangsa* yang miskin dengan *seberapa* miskin mereka, dua wilayah dengan rasio
jumlah kepala yang sama dapat memiliki skor MPI yang sangat berbeda jika ketertinggalan lebih parah
di salah satunya — logika "tidak ada substitusi di seluruh dimensi" yang sama di balik rata-rata
geometris HDI.

## Contoh Perhitungan

**Survei nasional 1.000 orang**: 350 diidentifikasi sebagai miskin multidimensi (skor ketertinggalan
≥ 33%). Di antara 350 individu miskin tersebut saja, skor ketertinggalan rata-rata adalah 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Membandingkan dua distrik dengan jumlah kepala yang sama**: Distrik A memiliki H = 0,30 dan
A = 0,40 (banyak yang miskin, ketertinggalan sedang); Distrik B memiliki H = 0,30 dan A = 0,60
(jumlah yang miskin sama, tetapi ketertinggalan lebih parah — kekurangan listrik *dan* sanitasi
*dan* kehadiran sekolah secara bersamaan).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Rasio jumlah kepala sama, MPI 50% lebih tinggi di Distrik B — sebuah sistem penargetan berdasarkan
kemiskinan jumlah kepala saja akan memeringkat kedua distrik secara identik dan melewatkan bahwa
Distrik B membutuhkan intervensi yang lebih dalam.

## Kaitan dengan Rekayasa Perangkat Lunak

- Sistem manajemen kasus dan kelayakan untuk program sosial sering kali sudah menyimpan beberapa
  dari sepuluh indikator tersebut (perumahan, kehadiran sekolah, penanda kesehatan) dalam silo
  terpisah; metode penghitungan Alkire-Foster adalah skema siap pakai untuk menggabungkannya menjadi
  satu skor ketertinggalan alih-alih membangun sebuah model penilaian khusus dari nol.
- Pembagian jumlah kepala/intensitas (H × A) adalah pola yang umumnya berguna untuk dasbor mana pun
  yang melaporkan "berapa banyak yang terdampak" berdampingan dengan "seberapa parah" — meruntuhkan
  keduanya menjadi satu angka, seperti yang dilakukan statistik prevalensi mentah, menyembunyikan
  justru kasus yang paling membutuhkan sumber daya.
- Dasbor indikator gaya MPI berpasangan secara alami dengan pelaporan
  [biaya per penerima manfaat](../cost-per-beneficiary/) untuk program anti-kemiskinan: biaya per
  poin pengurangan MPI adalah satuan yang dapat dipertahankan untuk membandingkan intervensi yang
  sangat berbeda (transfer tunai vs infrastruktur sanitasi).

## Jebakan Umum

- **Memperlakukan sepuluh indikator sebagai universal** — indikator MPI global OPHI dikalibrasi
  untuk komparabilitas lintas negara; MPI nasional (banyak negara, termasuk beberapa di Asia
  Selatan dan Afrika, mempublikasikan MPI mereka sendiri) menyesuaikan indikator dan bobot dengan
  konteks lokal, dan keduanya tidak dapat dibandingkan secara langsung.
- **Melaporkan H saja** — rasio jumlah kepala sepenuhnya mengabaikan intensitas; selalu laporkan
  atau hitung A berdampingan dengannya, atau MPI itu sendiri.
- **Mengasumsikan miskin-MPI dan miskin-pendapatan adalah populasi yang sama** — ringkasan negara
  OPHI sendiri biasanya menunjukkan tumpang tindih parsial saja antara keduanya; sebuah program yang
  hanya menargetkan yang miskin-pendapatan akan secara sistematis melewatkan pangsa yang bermakna
  dari yang miskin multidimensi.

## Sumber

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
