# Additionalitas dan Bobot Mati

Additionalitas (additionality) mempertanyakan apakah sebuah intervensi benar-benar menyebabkan suatu
hasil yang tidak akan terjadi tanpanya. Bobot mati (deadweight) adalah cerminannya: proporsi hasil
yang akan tetap terjadi meskipun tanpa program, hibah, atau subsidi tersebut. Hampir setiap klaim
dampak dari program pemerintah atau lembaga amal melebih-lebihkan efeknya sampai bobot mati
dikurangkan, itulah sebabnya pedoman evaluasi Inggris memperlakukannya sebagai penyesuaian pertama
dan terpenting terhadap angka utama mana pun.

## Mengapa Ini Penting

"Kami membantu 500 bisnis untuk tumbuh" terdengar seperti sebuah pencapaian, tetapi jika 300 dari
bisnis tersebut akan tetap tumbuh — karena perekonomian lokal sedang pulih, karena mereka memiliki
jalur pendanaan lain, atau karena mereka sudah berada di jalur pertumbuhan sebelum program dimulai —
maka kontribusi tambahan sejati dari program tersebut adalah 200, bukan 500. Magenta Book milik HM
Treasury dan "Additionality Guide" HM Treasury/BIS yang sudah lama digunakan (awalnya dikembangkan
untuk program pembangunan dan regenerasi wilayah, dan sejak itu banyak dipakai di seluruh evaluasi
pemerintah Inggris) meresmikan bobot mati sebagai penyesuaian awal dalam urutan standar dampak
bersih: efek bruto dikurangi bobot mati, dikurangi perpindahan (displacement), dikurangi kebocoran
(leakage), disesuaikan dengan efek pengganda (multiplier), sama dengan dampak tambahan bersih.
Melewatkan langkah ini adalah cara paling umum klaim dampak sektor publik dan sosial digelembungkan,
baik disengaja maupun tidak — sebuah program hibah yang hanya mengukur hasil bruto peserta, tanpa
kelompok pembanding, tidak dapat membedakan efeknya sendiri dari apa yang akan terjadi bagaimanapun
juga.

Bobot mati bukan persentase tetap; besarnya sepenuhnya bergantung pada kontrafaktual untuk populasi
dan intervensi tertentu (lihat [analisis kontrafaktual](../counterfactual-analysis/)). Evaluasi
pembangunan regional Inggris di bawah Regional Development Agencies terdahulu umumnya menemukan
tingkat bobot mati pada kisaran 20–60% tergantung jenis dukungan bisnisnya, itulah sebabnya evaluasi
program yang kredibel melaporkan rentang yang telah disesuaikan dengan bobot mati, bukan satu angka
asumsi tunggal, dan mengapa pemberi dana seperti National Lottery Community Fund dan Big Society
Capital mewajibkan penerima hibah untuk menangani bobot mati secara eksplisit dalam pelaporan hasil,
bukan sekadar melaporkan jumlah peserta bruto.

## Matematika

Urutan penyesuaian dampak bersih standar, sebagaimana ditetapkan dalam pedoman evaluasi Inggris
(Magenta Book; HM Treasury/BIS Additionality Guide; pedoman evaluasi ESIF dan dana struktural):

```
Hasil bruto
  − Bobot mati       (apa yang akan tetap terjadi bagaimanapun juga)
  − Perpindahan      (aktivitas/manfaat yang bergeser dari tempat lain, bukan
                       tercipta baru — lihat displacement-and-attribution)
  − Kebocoran        (manfaat yang jatuh di luar kelompok/wilayah sasaran)
  × Pengganda         (aktivitas ekonomi tidak langsung/terinduksi tambahan, jika positif)
  = Dampak tambahan bersih
```

Tingkat bobot mati sebagai proporsi:

```
Tingkat bobot mati = hasil yang akan tetap terjadi tanpa intervensi
                       / total hasil bruto yang teramati

Hasil tambahan bersih = Hasil bruto × (1 − Tingkat bobot mati)
```

## Contoh Perhitungan

**Program hibah dukungan bisnis**: sebuah skema hibah regional melaporkan 500 bisnis yang didukung
meningkatkan lapangan kerja pada tahun berikutnya, rata-rata 3 pekerjaan masing-masing — klaim bruto
sebesar 1.500 pekerjaan.

Kelompok pembanding yang dicocokkan (matched comparison group) dari bisnis serupa yang tidak
didukung (lihat [analisis kontrafaktual](../counterfactual-analysis/)) menunjukkan bahwa 40% dari
pertumbuhan lapangan kerja bisnis yang didukung akan tetap terjadi, berdasarkan kinerja kelompok
pembanding pada periode yang sama.

```
Tingkat bobot mati = 40%
Pekerjaan tambahan bersih = 1.500 × (1 − 0,40) = 900 pekerjaan
```

Pencapaian yang dapat dilaporkan secara jujur oleh program ini adalah 900 pekerjaan, bukan 1.500 —
penurunan 40% semata-mata dari penyesuaian bobot mati, bahkan sebelum perpindahan atau kebocoran
dipertimbangkan.

**Program pekerjaan lembaga amal**: sebuah lembaga amal menempatkan 200 orang penganggur jangka
panjang ke dalam pekerjaan dengan biaya £600.000 (£3.000 per penempatan, bruto). Data pasar tenaga
kerja nasional menunjukkan bahwa, tanpa intervensi apa pun, sekitar 15% dari kohort penganggur
jangka panjang yang sebanding menemukan pekerjaan dalam periode yang sama melalui pergantian alami
pasar kerja.

```
Tingkat bobot mati = 15%
Penempatan tambahan bersih = 200 × (1 − 0,15) = 170
Biaya sejati per penempatan tambahan = £600.000 / 170 ≈ £3.529
```

Angka biaya per penempatan bruto (£3.000) meremehkan biaya sesungguhnya dari kontribusi tambahan
lembaga amal tersebut sekitar 15%.

## Kaitan dengan Rekayasa Perangkat Lunak

Additionalitas dan bobot mati sangat relevan bagi siapa pun yang membangun perangkat lunak
pengukuran dampak atau manajemen hibah untuk sektor publik atau sosial:

- Sistem pelaporan hasil sebaiknya menangkap kelompok pembanding atau baseline sejak awal desain,
  bukan hanya hasil peserta — menambahkan kontrafaktual setelah sebuah sistem diluncurkan tanpa itu
  jauh lebih sulit daripada membangun penangkapannya sejak awal (lihat
  [analisis kontrafaktual](../counterfactual-analysis/)).
- Dasbor yang hanya melaporkan jumlah peserta bruto akan secara sistematis melebih-lebihkan dampak
  kepada pemberi dana dan badan pengawas; di mana estimasi bobot mati tersedia (dari literatur
  evaluasi atau kelompok pembanding), perangkat lunak sebaiknya menampilkan angka bersih-dari-bobot-
  mati berdampingan dengan angka bruto, bukan menggantikannya.
- Hal ini terkait langsung dengan [laba atas investasi sosial](../social-return-on-investment/), yang
  rasio SROI-nya hanya kredibel setelah bobot mati (dan perpindahan) dikurangkan dari hasil bruto
  yang diklaim — kalkulator SROI yang melewatkan langkah ini akan menghasilkan rasio yang digelembungkan
  dan tidak akan bertahan terhadap pemeriksaan.

## Jebakan Umum

- **Melaporkan hasil bruto seolah-olah semuanya tambahan.** Ini adalah kesalahan pengukuran dampak
  paling umum dalam pelaporan hibah dan program; selalu tanyakan "apakah ini akan tetap terjadi
  bagaimanapun juga?" sebelum mempublikasikan angka utama.
- **Mengasumsikan satu persentase bobot mati berlaku di mana-mana.** Bobot mati sangat bervariasi
  menurut sektor, populasi, dan kondisi ekonomi lokal; gunakan kelompok pembanding atau bukti
  spesifik sektor, bukan menggunakan kembali angka dari evaluasi yang tidak terkait.
- **Mencampuradukkan bobot mati dengan perpindahan.** Bobot mati berkaitan dengan hasil kontrafaktual
  bagi peserta yang sama; perpindahan berkaitan dengan efek pada orang atau tempat lain — lihat
  [perpindahan dan atribusi](../displacement-and-attribution/). Mencampuradukkan keduanya menyebabkan
  penghitungan ganda atau kurang hitung pada penyesuaian.
- **Bobot mati yang dilaporkan sendiri oleh peserta.** Menanyakan penerima manfaat "apakah ini akan
  terjadi tanpa bantuan kami?" menghasilkan estimasi bobot mati yang secara sistematis rendah
  (peserta cenderung memberi kredit pada program); kelompok pembanding independen jauh lebih dapat
  diandalkan.

## Sumber

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
