# Tingkat Diskonto Sosial

Tingkat diskonto sosial mengonversi biaya dan manfaat masa depan menjadi nilai hari ini sehingga
program dengan pembayaran yang tersebar di sepanjang beberapa dekade dapat dibandingkan pada basis
yang sama. Green Book milik HM Treasury mewajibkan sebuah jadwal menurun yang berlabuh pada 3,5%
untuk 30 tahun pertama, berdasarkan formula Ramsey — sebuah angka spesifik yang dapat dikutip yang
telah menjadi argumen politik dan etis yang hidup kapan pun diterapkan pada komitmen horizon-panjang
seperti kebijakan iklim atau infrastruktur.

## Mengapa Ini Penting

Satu poundsterling manfaat yang diterima dalam 30 tahun tidak bernilai satu poundsterling manfaat
yang diterima hari ini, karena alasan yang sebagian tentang preferensi waktu murni (orang dan
masyarakat lebih menyukai hal baik lebih cepat) dan sebagian tentang pertumbuhan (masyarakat masa
depan diharapkan lebih kaya, sehingga satu poundsterling kurang berarti baginya pada margin). Annex
6 Green Book menurunkan tingkat diskonto standar Inggris dari formula Ramsey, menggabungkan sebuah
tingkat preferensi waktu murni dengan tingkat pertumbuhan konsumsi yang diharapkan dan elastisitas
utilitas marjinal konsumsi, menghasilkan tingkat yang dipublikasikan sebesar 3,5% per tahun untuk
tahun 0–30, menurun dalam sebuah jadwal yang dipublikasikan untuk tahun 31 dan seterusnya (hingga
1% untuk tahun 301+). Jadwal ini ada justru karena sebuah 3,5% konstan yang digabungkan selama satu
abad akan membuat hampir setiap manfaat horizon-panjang — sebuah pertahanan banjir yang menyelamatkan
nyawa dalam 80 tahun, sebuah pengurangan karbon yang menghindarkan kerugian dalam 100 tahun —
terlihat dapat diabaikan dalam istilah nilai kini, yang dinilai Treasury sebagai kesimpulan etis
yang tidak masuk akal untuk keputusan infrastruktur dan lingkungan yang benar-benar berumur panjang.

Tingkat diskonto ini diperdebatkan justru karena pilihannya bukanlah sebuah parameter teknis yang
netral: ia mengodekan sebuah penilaian tentang seberapa banyak sebuah masyarakat seharusnya
berkorban hari ini untuk orang-orang yang belum lahir. Stern Review on the Economics of Climate
Change (2006) menggunakan sebuah tingkat diskonto mendekati nol (sebuah preferensi waktu murni
mendekati 0,1%), berargumen bahwa mendiskontokan kesejahteraan generasi mendatang pada apa pun yang
mendekati tingkat pasar tidak dapat dipertahankan secara etis ketika kerugiannya (perubahan iklim
yang bencana) tidak dapat dibalikkan. Para pengkritik — khususnya William Nordhaus — berargumen
bahwa tingkat mendekati-nol Stern melebih-lebihkan kasus untuk belanja iklim segera dengan membuat
hampir semua biaya masa kini terlihat dibenarkan terhadap sebuah manfaat masa depan yang hampir
tidak didiskontokan. Ketidaksepakatan ini bukan tentang matematikanya; ini tentang kerangka etis
siapa yang seharusnya menetapkan tingkat tersebut, dan itu tetap menjadi ilustrasi standar mengapa
tingkat diskonto adalah pilihan kebijakan, bukan sekadar sebuah input aktuarial.

## Matematika

Formula Ramsey yang mendasari tingkat Green Book:

```
r = ρ + η·g

di mana:
  r = tingkat diskonto sosial
  ρ = tingkat preferensi waktu murni (ketidaksabaran + risiko bencana)
  η = elastisitas utilitas marjinal konsumsi
  g = tingkat pertumbuhan tahunan konsumsi per kapita yang diharapkan
```

Jadwal menurun Green Book (Annex 6, ilustratif — periksa edisi terkini untuk tabel yang
dipublikasikan secara persis):

```
Tahun 0–30:    3,5%
Tahun 31–75:   3,0%
Tahun 76–125:  2,5%
Tahun 126–200: 2,0%
Tahun 201–300: 1,5%
Tahun 301+:    1,0%
```

Nilai kini dari sebuah jumlah masa depan:

```
PV = FV / (1 + r)^t
```

## Contoh Perhitungan

**Skema pertahanan banjir**: sebuah proyek menyampaikan £10 juta kerusakan banjir yang terhindarkan
pada tahun ke-40.

Menggunakan tingkat 3,5% datar: PV = 10.000.000 / (1,035)^40 ≈ £2,52 juta — manfaatnya terlihat
kecil.

Menggunakan jadwal menurun Green Book (3,5% untuk tahun 0–30, 3,0% setelahnya), perhitungan tersebut
digabungkan pada 3,5% untuk 30 tahun pertama dan 3,0% untuk tahun 31–40:

```
PV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ £2,65 juta
```

Jadwal menurun ini secara sederhana menaikkan nilai kini dari manfaat horizon-panjang relatif
terhadap sebuah tingkat tinggi datar — tujuan eksplisit dari jadwal tersebut, karena sebuah 3,5%
datar selama satu abad akan mendiskontokan sebuah manfaat £100 juta pada tahun ke-100 menjadi di
bawah £3,3 juta.

**Infrastruktur digital**: sebuah migrasi cloud pemerintah berbiaya £4 juta sekarang diharapkan
menghindarkan £500.000/tahun dalam biaya pemeliharaan warisan selama 15 tahun. Pada 3,5%, nilai kini
dari anuitas tersebut sekitar £500.000 × 11,52 (faktor anuitas 15 tahun pada 3,5%) ≈ £5,76 juta —
dengan nyaman melebihi biaya £4 juta, sebuah kasus nilai kini bersih positif yang akan terlihat
jauh lebih lemah pada sebuah tingkat lebih tinggi yang dipilih secara naif (pada 7%, faktor anuitas
yang sama turun menjadi sekitar 9,11, memberikan £4,56 juta, tetap positif tetapi dengan margin
yang jauh lebih tipis).

## Kaitan dengan Rekayasa Perangkat Lunak

Sebagian besar kasus bisnis perangkat lunak berjalan selama 3–5 tahun, dengan nyaman di dalam pita
3,5% datar, sehingga jadwal menurun jarang berlaku secara langsung — tetapi disiplin yang
mendasarinya penting untuk investasi teknologi pemerintah mana pun dengan umur aset yang panjang
(sebuah platform nasional, sebuah program infrastruktur data, sebuah kontrak multi-dekade):

- Gunakan tingkat yang dipublikasikan Green Book alih-alih sebuah "tingkat rintangan" internal yang
  dipinjam dari keuangan swasta; auditor dan peninjau Treasury akan mengharapkan jadwal standar
  tersebut.
- Untuk manfaat yang direalisasikan bertahun-tahun ke depan (penghematan pemeliharaan jangka
  panjang sebuah platform, nilai yang menggabung sebuah ekosistem data terbuka — lihat
  [nilai data terbuka](../open-data-value/)), pilihan diskonto dapat membalikkan sebuah kasus bisnis
  dari positif menjadi negatif; jadikan tingkat dan horizon sebagai asumsi eksplisit, bukan default
  yang terkubur.
- Ini mengalir langsung ke [penilaian Green Book](../green-book-appraisal/), model lima kasus yang
  secara formal mensyaratkan sebuah arus kas terdiskonto, dan ke
  [penilaian kesejahteraan](../wellbeing-valuation/), di mana pertanyaan diskonto yang sama muncul
  untuk manfaat kesejahteraan non-moneter.
- Lihat juga [kesetaraan antargenerasi dan diskonto keberlanjutan](../intergenerational-equity-and-sustainability-discounting/)
  untuk debat Stern-versus-Nordhaus yang diterapkan secara khusus pada investasi teknologi
  lingkungan dan iklim.

## Jebakan Umum

- **Menggunakan tingkat datar untuk horizon yang sangat panjang.** Jadwal menurun Green Book ada
  secara khusus karena tingkat konstan meremehkan manfaat yang benar-benar berumur panjang; periksa
  pita mana yang berlaku alih-alih secara default ke 3,5% sepanjang waktu.
- **Memperlakukan tingkat diskonto sebagai netral secara etis.** Perselisihan Stern-Nordhaus
  menunjukkan tingkat tersebut mengodekan sebuah penilaian nilai tentang generasi mendatang;
  mengubahnya mengubah program mana yang terlihat dibenarkan, sehingga seharusnya dinyatakan dan
  dipertahankan, bukan disembunyikan dalam default spreadsheet.
- **Mencampuradukkan tingkat diskonto sosial dengan sebuah biaya modal swasta.** Biaya pinjaman
  pemerintah dan tingkat rintangan sektor swasta adalah konsep yang berbeda dari tingkat sosial
  yang diturunkan Ramsey, dan mengganti satu dengan yang lain dalam sebuah penilaian publik biasanya
  akan mendistorsi hasilnya ke arah menguntungkan pengembalian jangka pendek.
- **Mendiskontokan arus kas riil dan nominal secara tidak konsisten.** Tingkat Green Book adalah
  tingkat riil (disesuaikan inflasi); mendiskontokan arus kas nominal dengannya secara material
  meremehkan nilai kini.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
