# Total Biaya Kepemilikan (TCO) dalam TI Pemerintah

Total biaya kepemilikan adalah biaya siklus hidup penuh sebuah sistem — akuisisi ditambah setiap
tahun menjalankannya — didiskontokan ke satu tanggal yang sama. Dalam TI pemerintah, kesalahan
peramalan tunggal yang paling sering terjadi adalah membandingkan pemasok atau opsi hanya
berdasarkan harga akuisisi, padahal operasi dan pemeliharaan biasanya menyumbang antara separuh
hingga empat perlima dari total tagihan seumur hidup sistem tersebut.

## Mengapa Ini Penting

Green Book milik HM Treasury mensyaratkan bahwa kasus keuangan dalam setiap Model Lima Kasus
(Five Case Model) mencakup biaya seumur hidup penuh, bukan hanya belanja modal — namun National
Audit Office berulang kali menemukan departemen menyetujui investasi TI berdasarkan perkiraan
biaya operasional yang tidak lengkap atau terlalu optimistis, hingga baru menyadari biaya operasi
yang sebenarnya setelah sistem beroperasi dan baris anggaran modalnya sudah ditutup. Government
Digital Service dan Technology Code of Practice milik Central Digital and Data Office
(<https://www.gov.uk/guidance/the-technology-code-of-practice>) mendorong departemen ke arah
komputasi awan dan hosting komoditas, sebagian karena hal ini membuat biaya berkelanjutan menjadi
terlihat dan dapat dibandingkan, alih-alih terkubur dalam satu angka pengadaan modal yang tampak
menarik rendah saat disetujui namun ternyata sangat salah dan mahal tiga tahun kemudian.

## Matematika

```
TCO = Biaya akuisisi + Σ(t=1..N) Biaya operasional tahunan_t / (1+r)^t
      − nilai residu (didiskontokan)

r = tingkat diskonto sosial standar Green Book HM Treasury, 3,5%/tahun
    (jadwal tingkat menurun untuk horizon lebih dari 30 tahun)

Komponen biaya operasional: hosting/lisensi, dukungan dan pemeliharaan,
penambalan keamanan dan kepatuhan, waktu staf, penyegaran/migrasi terencana
```

Lihat [tingkat diskonto sosial](../social-discount-rate/) untuk alasan mengapa faktor diskonto
menjadi penting selama masa hidup sistem yang khas 5–10 tahun, dan
[bangun vs beli di pemerintahan](../build-vs-buy-in-government/) untuk bagaimana TCO menjadi
masukan keputusan bangun/beli.

## Contoh Perhitungan

Sebuah departemen membandingkan dua sistem manajemen kasus dengan horizon 5 tahun pada tingkat
diskonto 3,5% Green Book.

```
Sistem A: capex £3.500.000, opex £250.000/tahun
Sistem B: capex £1.800.000 (tampak lebih murah), opex £650.000/tahun
          (beban dukungan vendor dan integrasi yang lebih berat)

Perbandingan naif hanya berdasarkan capex: B menang, £1,8 juta < £3,5 juta.

Jumlah faktor diskonto, 5 tahun pada 3,5%: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = £4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = £4.734.750
```

TCO membalikkan keputusan naif tersebut: Sistem B ternyata sedikit lebih mahal selama lima tahun
setelah biaya operasional didiskontokan dan dijumlahkan, karena porsi opex-nya terhadap biaya
seumur hidup mencapai 62% (2.934.750 / 4.734.750) dibandingkan 24% untuk Sistem A — contoh nyata
dari temuan "pemeliharaan adalah bagian terbesar dari tagihan", yang sepenuhnya tersembunyi jika
hanya membandingkan harga label.

## Kaitan dengan Rekayasa Perangkat Lunak

TCO adalah angka yang seharusnya mendisiplinkan setiap keputusan
[bangun vs beli](../build-vs-buy-in-government/) dan setiap kasus pelunasan
[utang teknis](../technical-debt-as-public-value-erosion/), karena bunga utang dan pemeliharaan
yang ditunda sama-sama merupakan baris biaya operasional yang seharusnya masuk dalam total yang
sama-sama didiskontokan, terlepas dari apakah ada yang pernah melacaknya atau tidak. Insinyur yang
mengajukan pilihan platform atau vendor sebaiknya menyajikan tabel TCO penuh, bukan harga
pengadaan, karena harga pengadaan justru merupakan angka yang dirancang oleh kasus keuangan Green
Book untuk dicegah agar tidak menjadi satu-satunya sandaran departemen. TCO juga merupakan
penyebut yang jujur untuk penilaian [nilai untuk uang](../value-for-money/) — VFM membandingkan
manfaat dengan biaya, dan baris biaya yang dihitung terlalu rendah akan menggelembungkan setiap
rasio VFM dalam kasus bisnis tersebut.

## Jebakan Umum

- **Perbandingan hanya capex**: kesalahan pengadaan tunggal yang paling umum — membandingkan
  harga daftar pemasok tanpa perkiraan biaya operasional yang sepadan untuk setiap opsi.
- **Mengecualikan biaya keluar dan migrasi**: ekstraksi data akhir kontrak, penggantian platform,
  dan penalti keterkuncian vendor (vendor lock-in) adalah baris TCO yang nyata namun jarang muncul
  dalam kasus bisnis awal.
- **Mengecualikan biaya keamanan dan kepatuhan**: kadensi penambalan, pembaruan akreditasi, dan
  biaya audit meningkat seiring usia dan kompleksitas sistem — lihat
  [nilai keamanan siber sektor publik](../public-sector-cybersecurity-value/) — dan secara rutin
  terlewatkan dari perkiraan opex.
- **Perbandingan tanpa diskonto antar opsi dengan profil biaya berbeda**: membandingkan opsi yang
  berat di capex dengan yang berat di opex tanpa diskonto secara sistematis akan menguntungkan
  opsi mana pun yang kebetulan menunda lebih banyak biaya ke tahun-tahun berikutnya.

## Sumber

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
