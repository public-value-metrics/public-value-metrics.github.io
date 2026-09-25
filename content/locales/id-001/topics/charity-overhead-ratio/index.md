# Rasio Overhead Lembaga Amal

Rasio overhead lembaga amal adalah pengeluaran administratif dan penggalangan dana yang dinyatakan
sebagai persentase dari total belanja. Ini adalah angka yang paling banyak diminta dalam pemberian
amal — digunakan oleh donatur, pengawas, dan bahkan beberapa pemberi dana sebagai proksi efisiensi —
dan juga merupakan salah satu metrik efisiensi yang paling menyeluruh didiskreditkan di sektor ini,
dengan organisasi-organisasi yang mempopulerkannya secara terbuka menolaknya pada tahun 2013.

## Mengapa Ini Penting

Pada 17 Juni 2013, GuideStar, BBB Wise Giving Alliance, dan Charity Navigator — tiga badan
pemeringkat dan informasi nirlaba terbesar di AS, yang pemeringkatan historisnya sendiri telah
membantu mengukuhkan rasio overhead sebagai singkatan untuk kualitas lembaga amal — menerbitkan
surat terbuka bersama kepada donatur Amerika, "The Overhead Myth," yang menyatakan secara eksplisit
bahwa rasio overhead adalah ukuran yang buruk untuk kinerja sebuah lembaga amal dan mendesak donatur
untuk sebaliknya melihat transparansi, tata kelola, dan hasil. Ini adalah pembalikan langsung oleh
institusi-institusi yang sama yang telah membangun budaya donatur di sekitar rasio tersebut selama
satu dekade.

Masalah yang mendasarinya bersifat struktural, bukan sekadar soal citra: rasio overhead yang rendah
dapat dicapai dengan berinvestasi kurang pada justru hal-hal yang membuat sebuah lembaga amal
efektif — sistem manajemen kasus yang layak, staf terlatih, pemantauan dan evaluasi — karena
hal-hal tersebut sering dibukukan sebagai "admin" alih-alih biaya "program". Sebuah lembaga amal
yang meminimalkan kantor belakangnya untuk melaporkan overhead 5% bisa jadi kurang mampu memberikan
hasil dibandingkan lembaga amal yang membelanjakan 20% pada operasi yang bersumber daya secara
layak. Di Inggris dan Wales, panduan Charity Commission kepada para wali (trustees) menjauh dari
satu persentase overhead tunggal sebagai uji efisiensi, dan sebaliknya meminta para wali untuk
melaporkan apa yang dicapai lembaga amal terhadap tujuannya — lihat persyaratan pelaporan SORP yang
dibahas dalam [biaya per penerima manfaat](../cost-per-beneficiary/).

## Matematika

```
Rasio overhead = (Biaya administratif + Biaya penggalangan dana) / Total pengeluaran

Varian umum:
  Rasio program           = Belanja program (amal langsung) / Total pengeluaran
                           = 1 − rasio overhead
  Efisiensi penggalangan  = Biaya penggalangan dana / Dana yang terkumpul
  dana
```

Tak satu pun dari rumus-rumus ini mengandung informasi tentang hasil yang dicapai. Sebuah lembaga
amal dapat meminimalkan setiap satu dari rumus tersebut dan tetap gagal bagi setiap penerima
manfaat; lihat [biaya per hasil](../cost-per-outcome/) untuk metrik yang benar-benar menyentuh
apakah uang tersebut berhasil.

## Contoh Perhitungan

Dua lembaga amal, dengan total belanja yang sama:

- **Lembaga Amal A**: total belanja £1.000.000, £80.000 admin + penggalangan dana → rasio overhead
  8%. Tidak memiliki fungsi pemantauan dan evaluasi, hanya satu petugas keuangan yang kelebihan
  beban kerja, dan tidak ada sistem manajemen kasus; pergantian staf tinggi dan data hasil tidak
  dikumpulkan.
- **Lembaga Amal B**: total belanja £1.000.000, £220.000 admin + penggalangan dana → rasio overhead
  22%. Mendanai tim evaluasi kecil, sistem manajemen kasus yang menangkap tindak lanjut hasil, dan
  pelatihan safeguarding yang layak.

Seorang donatur yang menyaring murni berdasarkan rasio overhead akan memilih A dan menolak B —
kebalikan dari apa yang kemungkinan besar akan ditunjukkan oleh bukti
[biaya per hasil](../cost-per-outcome/), karena B adalah satu-satunya di antara keduanya yang
diposisikan untuk mendemonstrasikan, atau memperbaiki, hasil sesungguhnya.

## Kaitan dengan Rekayasa Perangkat Lunak

Perangkat lunak keuangan dan pelaporan hibah untuk sektor ini sering kali mengkodekan secara kaku
pembagian overhead/program sebagai bidang kategorikal pada setiap baris biaya, karena itulah yang
masih disyaratkan oleh regulator dan beberapa pemberi dana dalam laporan statutori. Insinyur yang
membangun sistem-sistem ini sebaiknya memperlakukan persyaratan tersebut sebagai kewajiban
kepatuhan, bukan sinyal desain bahwa rasio overhead adalah metrik yang layak ditampilkan secara
menonjol pada sebuah dasbor; padukan, di mana pun ditampilkan, dengan metrik berbasis hasil agar
penampil tidak dapat membaca rasio overhead secara terisolasi. Lihat
[laba atas investasi donatur](../donor-return-on-investment/) untuk metrik yang seharusnya berada
di sebelahnya, dan [nilai untuk uang](../value-for-money/) untuk argumen setara di sektor publik
terhadap proksi efisiensi rasio tunggal.

## Jebakan Umum

- **Menggunakan rasio overhead sebagai ambang penyaringan.** Menolak lembaga amal mana pun di atas
  ambang batas yang sembarangan (misalnya "tidak lebih dari 15% overhead") secara sistematis
  menghukum organisasi yang bersumber daya secara layak dan dievaluasi dengan baik, serta
  menghargai kekurangan investasi.
- **Salah mengategorikan biaya penyampaian langsung sebagai overhead**, atau sebaliknya — konvensi
  akuntansi tentang apa yang dihitung sebagai "program" versus "admin" cukup bervariasi antar
  lembaga amal sehingga rasio sering kali bahkan tidak dapat dibandingkan secara apa adanya.
- **Mengasumsikan overhead rendah menyiratkan dampak tinggi.** Keduanya, paling banter, tidak
  berkorelasi; lihat klaim inti surat Overhead Myth tahun 2013.
- **Mengabaikan bahwa beberapa strategi yang sah memerlukan overhead jangka pendek yang lebih
  tinggi.** Fase pembangunan kapasitas atau pengembangan organisasi secara sengaja menaikkan belanja
  admin untuk memperbaiki penyampaian di kemudian hari.

## Sumber

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
