# Nilai Keamanan Siber Sektor Publik

Nilai keamanan siber sektor publik adalah disiplin menghargakan pengurangan risiko: berapa nilainya
untuk membuat sebuah pelanggaran data warga menjadi kurang mungkin, mengingat belanja keamanan tidak
menghasilkan keluaran yang terlihat ketika berhasil dan keluaran yang sangat terlihat ketika gagal?
Untuk sebuah layanan yang menyimpan catatan tunjangan, data kesehatan, atau catatan pajak, properti
"tidak terlihat ketika berhasil" itu justru mengapa ia membutuhkan argumen nilai yang eksplisit,
bukan sekadar sebuah centang kepatuhan.

## Mengapa Ini Penting

Cyber Assessment Framework (CAF) milik National Cyber Security Centre Inggris memberi organisasi
sektor publik sebuah cara terstruktur untuk membuat keamanan menjadi disiplin yang dapat dinilai dan
berbasis hasil alih-alih sebuah daftar periksa: ia mendefinisikan empat tujuan tingkat tinggi
(mengelola risiko keamanan, melindungi terhadap serangan siber, mendeteksi peristiwa keamanan siber,
dan meminimalkan dampak insiden) yang dipecah menjadi hasil kontribusi yang dapat dinilai bagi
seorang pemilik sistem, dalam semangat yang sama seperti poin 9
[standar layanan digital](../digital-service-standard/) ("ciptakan layanan yang aman yang
melindungi privasi pengguna"). Apa yang dilindungi penilaian CAF memiliki label harga
terdokumentasi: Cost of a Data Breach Report milik IBM melacak biaya pelanggaran rata-rata per
sektor, dan secara konsisten menemukan sektor publik cenderung ke ujung bawah rentang dibandingkan
keuangan atau kesehatan — edisi terkini menempatkan rata-rata sektor publik sekitar $2,6–2,9 juta
per pelanggaran — tetapi "lebih rendah daripada keuangan" bukan berarti "rendah", dan pelanggaran
pemerintah membawa biaya yang tidak sepenuhnya ditangkap angka laporan tersebut: hilangnya
kepercayaan warga terhadap kanal digital, yang menekan
[penggunaan digital](../channel-shift-savings/) yang menjadi sandaran kasus bisnis pergeseran kanal,
dan biaya politik serta hukum dari mengekspos data yang sejak awal dipaksa negara untuk diserahkan
warga.

## Matematika

Investasi keamanan dihargai dengan cara yang sama seperti belanja pengurangan risiko mana pun
dihargai: sebagai pengurangan kerugian yang diharapkan, menggunakan identitas manajemen risiko
klasik.

```
Ekspektasi Kerugian Tahunan (ALE) = Ekspektasi Kerugian Tunggal (SLE)
                                   × Tingkat Kejadian Tahunan (ARO)

Nilai sebuah kontrol keamanan =
  ALE_sebelum_kontrol − ALE_sesudah_kontrol − biaya tahunan kontrol tersebut

Sebuah kontrol layak didanai ketika:
  (ALE_sebelum − ALE_sesudah) > biaya tahunan kontrol tersebut

Penilaian CAF tidak secara langsung menghasilkan sebuah probabilitas,
tetapi profil hasil CAF sebuah layanan (hasil kontribusi mana yang
"tercapai", "sebagian tercapai", atau "tidak tercapai") adalah input
proksi yang masuk akal untuk mengestimasi ARO — sebuah sistem dengan
akses istimewa yang tidak terkelola atau tanpa rencana respons
insiden yang teruji memiliki ARO realistis yang secara material lebih
tinggi daripada yang memiliki keduanya.
```

## Contoh Perhitungan

**Sistem manajemen kasus dewan county yang menyimpan catatan perawatan sosial untuk 40.000
penduduk**:

```
Ekspektasi Kerugian Tunggal (biaya pelanggaran), menggunakan rata-rata
sektor publik dari IBM Cost of a Data Breach Report terkini ≈ £2,1 juta
(angka orde-besaran yang dikonversi — selalu turunkan ulang dari edisi
laporan saat ini alih-alih menggunakan kembali angka tetap)

ARO saat ini (akses istimewa tidak terkelola, tanpa respons insiden
yang teruji, sesuai penilaian mandiri CAF internal yang menunjukkan
beberapa hasil "tidak tercapai") ≈ estimasi 8% per tahun
  ALE_sebelum = £2,1 juta × 0,08 = £168.000/tahun

Kontrol yang diusulkan: manajemen akses istimewa + rencana respons
insiden yang teruji, memindahkan hasil CAF yang relevan menjadi
"tercapai", diestimasi memotong ARO menjadi 3%/tahun
  ALE_sesudah = £2,1 juta × 0,03 = £63.000/tahun

Biaya tahunan kontrol tersebut (perkakas + proses + pengujian) = £45.000

Nilai kontrol tersebut = (168.000 − 63.000) − 45.000 = £60.000/tahun
  bersih positif — danai. Aritmetika ini juga menunjukkan bahwa
  kontrol tersebut akan tetap layak didanai pada hampir tiga kali
  lipat biayanya, yang merupakan jenis pemeriksaan sensitivitas yang
  seharusnya menyertai angka ALE mana pun yang dibangun berdasarkan
  probabilitas yang diestimasi.
```

## Kaitan dengan Rekayasa Perangkat Lunak

Insinyur memiliki sebagian besar tuas dalam persamaan ALE: desain kontrol akses, kebersihan
dependensi dan patch, cakupan logging dan deteksi, serta perkakas respons insiden semuanya
menggerakkan istilah ARO secara langsung, yang mengapa penilaian CAF terbaca seperti tinjauan
arsitektur teknis sama banyaknya seperti audit kebijakan. Ini adalah
[utang teknis sebagai erosi nilai publik](../technical-debt-as-public-value-erosion/) dalam bentuk
paling akutnya — sistem yang tidak dipatch, tidak dipantau, dan kontrol aksesnya buruk adalah utang
yang pembayaran bunganya adalah risiko ekor, bukan seretan yang stabil — dan ini seharusnya
direkonsiliasi terhadap [total biaya kepemilikan TI pemerintah](../total-cost-of-ownership-in-government-it/)
sehingga belanja keamanan tidak diperlakukan terpisah dari biaya operasional nyata sistem tersebut.
Ini juga merupakan input langsung ke penilaian [nilai untuk uang](../value-for-money/) di bawah
Green Book: biaya yang disesuaikan risiko adalah bagian dari sisi "biaya" dari penilaian opsi mana
pun, bukan renungan belakangan yang ditambahkan di akhir.

## Jebakan Umum

- **Memperlakukan penilaian mandiri CAF sebagai keamanan itu sendiri**: sebuah penilaian yang
  lengkap mendeskripsikan sebuah postur keamanan; ia tidak menciptakannya — nilainya ada pada hasil
  yang tercapai, bukan dokumennya.
- **Menggunakan biaya pelanggaran rata-rata global sebagai estimasi lokal tanpa penyesuaian**: angka
  IBM adalah rata-rata di seluruh sampel besar dan beragam; ekspektasi kerugian tunggal realistis
  sebuah pemerintah daerah kecil jarang sama dengan sebuah departemen pemerintah pusat nasional.
- **Mengabaikan psikologi risiko-ekor dalam keputusan investasi**: probabilitas tahunan yang rendah
  membuat belanja keamanan mudah ditunda tanpa batas, tepat hingga tahun ketika itu tidak lagi —
  menguji sensitivitas perhitungan ALE terhadap rentang ARO, seperti pada contoh perhitungan,
  melawan ini.
- **Hanya menghitung biaya pelanggaran gaya IBM, bukan biaya kepercayaan**: sebuah pelanggaran yang
  menekan kesediaan warga untuk menggunakan kanal digital mengikis kasus
  [penghematan pergeseran kanal](../channel-shift-savings/) selama bertahun-tahun setelahnya,
  sebuah biaya yang jarang dimasukkan dalam estimasi biaya pelanggaran.

## Sumber

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
