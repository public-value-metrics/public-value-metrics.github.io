# Analisis Keputusan Multi-Kriteria (MCDA)

MCDA menilai dan membobot opsi terhadap beberapa kriteria terbobot yang berbeda sekaligus,
menghasilkan sebuah perbandingan berperingkat tanpa memaksa setiap kriteria ke dalam satu skala
moneter atau satuan alami. Ini adalah metode penilaian untuk keputusan di mana hasil yang penting
benar-benar tidak dapat direduksi menjadi satu angka tunggal.

## Mengapa Ini Penting

Green Book secara eksplisit mengesahkan MCDA (lampiran studi kasus Box 2 dan Annex A-nya
membahasnya secara langsung) untuk penilaian di mana manfaat "benar-benar tidak sepadan" — di mana
mengonversi segalanya menjadi uang melalui
[analisis biaya-manfaat sosial](../social-cost-benefit-analysis/), atau menjadi satu hasil melalui
[analisis efektivitas biaya](../cost-effectiveness-analysis-in-government/), akan salah
merepresentasikan keputusan tersebut alih-alih memperjelasnya
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Pemilihan lokasi untuk sebuah penjara baru, misalnya, menukarkan biaya modal dengan dampak komunitas,
konektivitas transportasi, efek lingkungan, dan kemampuan rekrutmen staf — kriteria yang tidak
berbagi satuan umum dan di mana memaksakan satuan bersama (biasanya uang) akan menyelundupkan
sebuah penilaian nilai tentang kepentingan relatif dari, katakanlah, dampak lingkungan versus biaya,
yang berdandan sebagai aritmetika objektif.

Kejujuran MCDA juga merupakan kerentanan utamanya: karena bobot ditetapkan oleh siapa pun yang
menjalankan penilaian tersebut (atau oleh sebuah panel), metode ini hanya selegitim proses
pembobotannya. Panduan Green Book secara eksplisit menyatakan bahwa kriteria dan bobot harus
disepakati dan dipublikasikan *sebelum* opsi dinilai, justru untuk mencegah seorang peninjau bekerja
mundur dari sebuah opsi yang disukai menuju bobot yang membenarkannya.

## Matematika

```
Untuk setiap opsi i dan kriteria j:
  Skor_ij    = kinerja opsi tersebut terhadap kriteria itu (sering
               0-100 atau 1-10, dari bukti, penilaian ahli, atau
               penilaian pemangku kepentingan)
  Bobot_j    = kepentingan relatif kriteria j, bobot berjumlah 1
               (atau 100)

Skor terbobot opsi i = Σ_j (Skor_ij × Bobot_j)

Prosedur:
1. Sepakati set kriteria dan bobot SEBELUM menilai opsi mana pun
   (swing weighting atau perbandingan berpasangan, misalnya AHP,
   adalah metode elisitasi umum).
2. Nilai setiap opsi terhadap setiap kriteria pada skala umum, dari
   bukti jika memungkinkan.
3. Hitung total terbobot; peringkat opsi.
4. Uji sensitivitas bobot: apakah peringkat bertahan terhadap
   ketidaksepakatan yang masuk akal tentang seberapa penting
   seharusnya setiap kriteria?
```

MCDA tidak menghasilkan sebuah nilai absolut yang dapat dipertahankan seperti nilai kini bersih SCBA
— ia hanya menghasilkan sebuah peringkat yang bersyarat pada bobot yang disepakati. Ini adalah
sebuah fitur ketika keputusan tersebut benar-benar tentang menukarkan kebaikan yang tidak sepadan,
dan sebuah liabilitas jika digunakan untuk menghindari pekerjaan yang lebih sulit dari monetisasi
di mana monetisasi sebenarnya memungkinkan.

## Contoh Perhitungan

**Pemerintah daerah**: sebuah dewan kota yang memilih lokasi untuk sebuah pusat daur ulang limbah
rumah tangga baru menilai tiga lokasi terhadap empat kriteria, dibobot oleh sebuah panel lintas
departemen sebelum kunjungan lokasi mana pun:

```
Kriteria (bobot):        Biaya modal (30%)  Akses transportasi (25%)
                          Dampak komunitas (25%)  Dampak lingkungan (20%)

Skor lokasi (0-100, lebih tinggi = lebih baik):
Lokasi A: biaya 80, akses 60, komunitas 40, lingkungan 70
Lokasi B: biaya 60, akses 90, komunitas 70, lingkungan 50
Lokasi C: biaya 90, akses 50, komunitas 80, lingkungan 60

Total terbobot:
Lokasi A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
Lokasi B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
Lokasi C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

Lokasi C berperingkat tertinggi. Sebuah uji sensitivitas yang menggeser bobot dampak-komunitas dari
25% menjadi 35% (mengambil 10 poin dari biaya modal) mengubah total Lokasi C menjadi
71,5 − 3 + 8 = 76,5 dan Lokasi B menjadi 68 − 6 + 7 = 69 — Lokasi C tetap memimpin, sehingga
peringkat tersebut kuat terhadap ketidaksepakatan pembobotan yang masuk akal itu, yang persis
merupakan pemeriksaan yang diharapkan Green Book untuk dilaporkan.

**Lembaga amal**: sebuah yayasan pemberi hibah yang memilih antara mendanai sebuah layanan nasihat
utang, sebuah jaringan bank pangan, dan sebuah program literasi finansial menggunakan MCDA alih-alih
SROI (lihat [laba atas investasi sosial](../social-return-on-investment/)) justru karena para wali
tidak sepakat, dengan itikad baik, tentang apakah bantuan krisis atau pencegahan seharusnya lebih
berbobot — MCDA memungkinkan mereka menyepakati *bentuk* ketidaksepakatan tersebut (sebuah rentang
bobot) alih-alih berpura-pura satu rasio SROI tunggal menyelesaikannya.

## Kaitan dengan Rekayasa Perangkat Lunak

MCDA adalah alat alami untuk pemilihan vendor dan arsitektur ketika kriteria benar-benar berkonflik
— memilih antara sebuah sistem manajemen kasus berbasis cloud dan di lokal (on-premises) menukarkan
biaya, risiko kedaulatan data, aksesibilitas, dan kecepatan penyampaian dengan cara yang tidak
tereduksi menjadi satu angka. Pemimpin rekayasa seharusnya bersikeras agar pembobotan terjadi
sebelum opsi dinilai, persis seperti yang disyaratkan Green Book, karena sebuah latihan pembobotan
yang dijalankan setelah melihat daftar pendek secara andal bergeser ke arah opsi mana pun yang
sudah disukai ruangan tersebut. Lihat [membangun vs membeli di pemerintahan](../build-vs-buy-in-government/)
untuk sebuah aplikasi MCDA yang umum, dan [kartu skor nilai publik](../public-value-scorecard/)
untuk sebuah alat penilaian terstruktur terkait yang digunakan pasca-keputusan alih-alih
pra-keputusan.

## Jebakan Umum

- **Menetapkan bobot setelah melihat opsi.** Ini adalah cara paling umum MCDA dimanipulasi, sengaja
  atau tidak; publikasikan bobot sebelum penilaian, dan catat siapa yang menetapkannya.
- **Memperlakukan total terbobot sebagai angka pasti.** Sebuah skor 71,5 berbanding 68 bukanlah
  kesenjangan yang bermakna secara statistik kecuali analisis sensitivitas mengonfirmasi peringkat
  tersebut stabil; laporkan rentang, bukan presisi palsu.
- **Menggunakan MCDA untuk menghindari monetisasi yang sebenarnya layak dilakukan.** Jika sebagian
  besar kriteria dapat dihargakan secara kredibel, secara default ke MCDA alih-alih
  [SCBA](../social-cost-benefit-analysis/) membuang informasi yang sebenarnya dapat digunakan
  penilaian tersebut.
- **Membiarkan satu pemangku kepentingan dominan menetapkan semua bobot sendirian.** Praktik baik
  Green Book mengharapkan bobot dielisitasi dari sebuah panel yang representatif, bukan direktur
  pensponsor, untuk menghindari penilaian tersebut sekadar menurunkan ulang apa yang sudah
  diinginkan orang tersebut.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
