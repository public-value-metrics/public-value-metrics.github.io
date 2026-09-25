# Luaran vs Keluaran

Sebuah keluaran (output) adalah produk langsung dan terhitung dari sebuah aktivitas — ia ada pada
saat penyampaian terjadi, terlepas dari efek apa yang dimilikinya. Sebuah luaran (outcome) adalah
perubahan yang mengikuti bagi orang, tempat, atau sistem yang terlibat. "500 orang menghadiri
lokakarya pencarian kerja" adalah sebuah keluaran: itu benar bahkan jika tidak satu pun dari mereka
menemukan pekerjaan. "Prospek pekerjaan 500 orang membaik" adalah sebuah klaim luaran, dan itu
membutuhkan bukti perubahan, bukan sekadar bukti kehadiran — kebingungan yang menghasilkan laporan
hibah yang lebih menyesatkan daripada hampir kesalahan pengukuran lain mana pun di sektor ini.

## Mengapa Ini Penting

Magenta Book milik HM Treasury dan pemberi dana seperti National Lottery Community Fund keduanya
mewajibkan pelaporan luaran secara khusus karena keluaran adalah apa yang dilaporkan program secara
default: mereka murah untuk dihitung, selalu tersedia, dan selalu terlihat positif. Sebuah jumlah
keluaran secara harfiah tidak pernah dapat turun sebagai hasil dari kegagalan program tersebut —
lebih banyak sesi disampaikan selalu "lebih banyak", sementara sebuah luaran dapat mengungkap bahwa
sebuah program tidak berhasil. National Audit Office berulang kali mengkritik program pemerintah
karena melaporkan tingkat aktivitas seolah-olah itu adalah bukti keberhasilan; sebuah sistem
perangkat lunak yang hanya membuat keluaran mudah dilaporkan memperkuat ini secara default, karena
keluaran tidak membutuhkan pengumpulan data tindak lanjut dan luaran membutuhkannya.

## Matematika

Tidak ada rumus, tetapi ada uji yang andal untuk mengklasifikasikan sebuah metrik:

```
Uji keluaran: apakah dapat dihitung pada titik penyampaian, benar
              bahkan jika penerima tidak terdampak?
Uji luaran:   apakah membutuhkan perbandingan sebelum/sesudah atau
              dengan/tanpa untuk bermakna?

Jika sebuah angka dapat benar dengan manfaat nol bagi siapa pun, itu
adalah sebuah keluaran.
```

Ini berada di dalam rantai [model logika](../logic-model/) yang lebih luas dan bergantung pada
kaitan luaran yang didefinisikan dalam sebuah [teori perubahan](../theory-of-change/); mengubah
sebuah luaran menjadi uang menggunakan metode dalam
[laba atas investasi sosial](../social-return-on-investment/).

## Contoh Perhitungan

**Pemerintah daerah (dukungan ketenagakerjaan)**: keluaran — 500 orang menghadiri lokakarya
pencarian kerja. Luaran — pada tindak lanjut 12 bulan, 140 dari 500 orang tersebut (28%) berada
dalam ketenagakerjaan berkelanjutan (6+ bulan). Sebuah kelompok pembanding dengan karakteristik
serupa tetapi tanpa akses program memiliki tingkat ketenagakerjaan baseline 15% selama periode yang
sama. Kenaikan luaran bersih: 28% − 15% = 13 poin persentase, sehingga estimasi 500 × 0,13 = 65
orang tambahan bekerja yang jika tidak tidak akan bekerja — luaran yang dapat diatribusikan, berbeda
dari baik angka kehadiran 500 maupun jumlah ketenagakerjaan mentah 140.

**Lembaga amal (lembaga amal literasi)**: keluaran — 1.200 sesi membaca disampaikan kepada 300 anak.
Luaran — usia membaca rata-rata membaik 8 bulan selama periode 6 bulan, terhadap baseline progresi
alami yang diharapkan 6 bulan sebesar 6 bulan. Keuntungan luaran bersih: 8 − 6 = 2 bulan peningkatan
usia membaca tambahan per anak yang dapat diatribusikan pada program tersebut, bukan angka 8 bulan
penuh.

## Kaitan dengan Rekayasa Perangkat Lunak

Log peristiwa dan sistem transaksional menginstrumentasi keluaran hampir secara otomatis —
tampilan halaman, sesi, tiket yang ditutup, janji temu yang dipesan — karena mereka dihasilkan oleh
sistem yang melakukan tugasnya. Luaran membutuhkan model data yang menangkap individu yang sama
pada titik waktu berikutnya terhadap sebuah baseline atau pembanding, yang harus dirancang secara
sengaja: survei tindak lanjut, catatan administratif yang tertaut, atau kohort pembanding. Sebuah
alat pelaporan yang hanya mendukung yang pertama akan diam-diam mengarahkan sebuah organisasi ke
pelaporan hanya-keluaran terlepas dari apa yang diminta pemberi dana. Lihat [model logika](../logic-model/)
untuk di mana luaran berada dalam rantai akuntabilitas, [biaya-per-hasil](../cost-per-outcome/)
untuk mengubah perbedaan ini menjadi metrik biaya satuan, dan
[KPI sektor publik](../public-sector-kpis/) untuk pola pemilihan metrik yang lebih luas.

## Jebakan Umum

- **Melaporkan keluaran seolah-olah itu luaran.** "500 orang menghadiri" menyiratkan manfaat tanpa
  mendemonstrasikannya; beri label kehadiran sebagai sebuah keluaran secara eksplisit.
- **Tidak ada baseline atau kelompok pembanding.** Sebuah angka luaran tanpa kontrafaktual — lihat
  [analisis kontrafaktual](../counterfactual-analysis/) — tidak dapat memisahkan efek program dari
  apa yang akan terjadi bagaimanapun juga.
- **Mengoptimalkan untuk metrik yang didanai.** Ketika pendanaan terikat pada volume keluaran, tim
  penyampaian secara rasional memaksimalkan kehadiran dibandingkan perubahan yang tahan lama,
  sebuah mode kegagalan hukum Goodhart.
- **Outcome washing.** Melabeli ulang sebuah metrik keluaran dengan bahasa yang terdengar seperti
  luaran ("hasil keterlibatan: 500 hadirin") tanpa pengukuran tindak lanjut apa pun di baliknya.

## Sumber

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
