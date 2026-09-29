# Metrik Modal Sosial

Metrik modal sosial mengkuantifikasi jaringan, kepercayaan, dan partisipasi sipil yang memungkinkan
komunitas dan institusi berfungsi secara efisien — "jaringan konektif" yang tidak memiliki baris
pada neraca mana pun tetapi secara nyata menekan biaya dan friksi ketika hadir, dan secara nyata
menaikkannya ketika absen. Pembingkaian modern berasal dari "Bowling Alone" (2000) karya Robert
Putnam, yang membedakan modal ikatan (bonding, ikatan dalam sebuah kelompok yang serupa) dari modal
jembatan (bridging, ikatan di seluruh kelompok yang berbeda); Office for National Statistics Inggris
sejak itu telah membangun sekumpulan indikator tetap untuk melacaknya secara nasional.

## Mengapa Ini Penting

Klaim empiris inti Putnam — didokumentasikan melalui menurunnya keanggotaan asosiasi sipil AS,
kehadiran gereja, dan partisipasi serikat di sepanjang akhir abad kedua puluh — adalah bahwa modal
sosial meramalkan hasil yang sulit dijelaskan ekonomi konvensional: kejahatan yang lebih rendah,
kesejahteraan anak yang lebih baik, pemerintah daerah yang lebih efektif, pemulihan ekonomi yang
lebih cepat setelah guncangan. Modal ikatan (ikatan kuat dalam sebuah kelompok yang erat) baik untuk
dukungan mutual tetapi dapat mengeras menjadi keterasingan; modal jembatan (ikatan yang lebih lemah
di seluruh kelompok yang berbeda) adalah yang biasanya berkorelasi dengan akses ke peluang, aliran
informasi, dan kepercayaan institusional. ONS menganggap ini cukup serius untuk membangun sebuah
kerangka indikator nasional — seri "Social Capital in the UK"-nya
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
melacak empat pilar: hubungan personal, dukungan jaringan sosial, keterlibatan sipil, serta
kepercayaan dan norma kooperatif, masing-masing dibangun dari pertanyaan survei yang mapan
(Community Life Survey, Understanding Society). Untuk layanan digital sektor publik, modal sosial
relevan ganda: ia adalah baik sebuah hasil yang dicoba dibangun beberapa program (pendanaan
ketahanan komunitas, resep sosial) maupun sebuah input yang menentukan seberapa baik sebuah layanan
benar-benar akan diadopsi — sebuah layanan yang diluncurkan ke sebuah komunitas berkepercayaan
tinggi dan terjaring baik akan menyebar melalui mulut-ke-mulut dengan cara yang tidak dimiliki
layanan identik di sebuah area berkepercayaan rendah.

## Matematika

```
Kerangka empat pilar ONS (indikator, ilustratif):

Hubungan personal:          % dengan seseorang untuk diandalkan
                             saat krisis
Dukungan jaringan sosial:   % yang dapat meminjam uang dari
                             teman/keluarga jika dibutuhkan
Keterlibatan sipil:         % yang menjadi sukarelawan atau
                             mengambil aksi sipil dalam 12 bulan
                             terakhir
Kepercayaan dan norma       % yang setuju "sebagian besar orang
  kooperatif                 dapat dipercaya"

Tidak ada satu skor komposit ONS tunggal yang dipublikasikan —
pilar-pilar tersebut dilaporkan secara terpisah, sengaja, karena
mengagregasinya menjadi satu indeks akan menyembunyikan pilar
spesifik mana yang lemah.

Pembagian ikatan/jembatan Putnam (kerangka kerja, bukan rumus):
  modal ikatan ≈ kepadatan ikatan dalam sebuah kelompok yang homogen
  modal jembatan ≈ frekuensi/kekuatan ikatan di seluruh kelompok
    yang berbeda
```

## Contoh Perhitungan

**Cuplikan modal sosial lingkungan**: sebuah jajak pendapat gaya Community Life Survey pada sebuah
area lokal menemukan 78% memiliki seseorang untuk diandalkan saat krisis (hubungan personal), 61%
dapat meminjam uang jika dibutuhkan (dukungan jaringan), 24% menjadi sukarelawan dalam tahun
terakhir (keterlibatan sipil), dan 41% setuju "sebagian besar orang dapat dipercaya" (kepercayaan
dan norma) — dibandingkan rata-rata nasional masing-masing sekitar 85%, 70%, 30%, dan 45%
(ilustratif, kalibrasikan terhadap buletin ONS saat ini). Area tersebut kurang terindeks pada setiap
pilar tetapi paling tajam pada kepercayaan (41% vs 45% nasional, kesenjangan 4 poin) dan
keterlibatan sipil (24% vs 30%, kesenjangan 6 poin) — menandai keterlibatan sipil, bukan
kepercayaan, sebagai defisit relatif terbesar yang layak mendapat investasi bertarget (sebuah
program hibah komunitas, katakanlah) alih-alih sebuah inisiatif generik "bangun kepercayaan".

**Ikatan vs jembatan, desain layanan**: sebuah program pekerjaan di sebuah komunitas yang erat
menemukan rujukan menyebar cepat dalam komunitas tersebut (modal ikatan tinggi: kabar menyebar
dalam hitungan hari) tetapi program tersebut berjuang menjangkau penduduk di luar jaringan tersebut
(modal jembatan rendah: penggunaan di luar komunitas inti mendekati nol setelah berbulan-bulan).
Perbaikan yang tersirat bukanlah "lebih banyak pemasaran" tetapi secara sengaja membangun ikatan
jembatan — bermitra dengan organisasi yang berada *di luar* jaringan yang sudah ada, karena modal
ikatan saja tidak dapat memecahkan sebuah masalah modal-jembatan.

## Kaitan dengan Rekayasa Perangkat Lunak

- Platform digital yang merutekan bantuan mutual, kesukarelawanan, atau hibah komunitas (sebuah
  layanan "konektor lokal", misalnya) secara harfiah sedang membangun infrastruktur modal-jembatan;
  metrik keberhasilannya seharusnya adalah keragaman jaringan koneksi yang dibuat, bukan sekadar
  jumlah transaksi — lihat [pemerintah sebagai platform](../government-as-a-platform/) untuk pola
  infrastruktur yang lebih luas di mana pihak lain membangun nilai di atasnya.
- Di mana teori perubahan sebuah program secara eksplisit menargetkan modal sosial sebagai sebuah
  hasil (sebuah dana ketahanan komunitas, sebuah layanan resep sosial),
  [teori perubahan](../theory-of-change/) dan [model logika](../logic-model/) programnya seharusnya
  menyebutkan pilar spesifik (kepercayaan, keterlibatan sipil, dukungan jaringan) yang
  diharapkannya digerakkan, alih-alih sebuah hasil "membangun komunitas" yang tidak terdiferensiasi
  yang tidak dapat diukur terhadap baseline ONS.
- Indikator modal sosial adalah lensa kesetaraan yang berguna berdampingan dengan
  [Indeks Deprivasi Ganda](../index-of-multiple-deprivation/): sebuah area dapat tertinggal
  pendapatan tetapi kaya secara sosial, atau sebaliknya, dan keduanya menunjuk pada intervensi yang
  sangat berbeda.

## Jebakan Umum

- **Meruntuhkan empat pilar ONS menjadi satu skor komposit** — ONS sengaja tidak melakukan ini;
  satu angka tunggal menyembunyikan pilar spesifik mana yang mendorong pembacaan rendah, dan
  merata-ratakan menutupi sebuah komunitas yang berkepercayaan tinggi tetapi tidak terlibat secara
  sipil dibandingkan yang sebaliknya.
- **Mengasumsikan modal sosial selalu baik** — modal ikatan yang padat dalam sebuah kelompok yang
  terasing dapat secara aktif menolak institusi luar (termasuk layanan pemerintah); analisis
  Putnam sendiri memperlakukan ikatan dan jembatan sebagai kebaikan yang berbeda dengan efek yang
  berbeda, kadang berkonflik.
- **Menggunakan ukuran modal sosial berbasis survei sebagai metrik operasional real-time** — survei
  yang mendasarinya (Community Life Survey, Understanding Society) berjalan tahunan atau lebih
  jarang; perlakukan data modal sosial sebagai indikator kontekstual yang bergerak lambat, bukan
  sesuatu yang dapat diperbarui sebuah dasbor layanan setiap minggu.

## Sumber

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
