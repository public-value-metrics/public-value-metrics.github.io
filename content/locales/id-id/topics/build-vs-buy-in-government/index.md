# Membangun vs Membeli di Pemerintahan

Membangun-vs-membeli adalah perbandingan terstruktur dan disesuaikan risiko antara pengembangan
khusus (custom) dengan akuisisi komersial atau komoditas, dibandingkan berdasarkan
[total biaya kepemilikan](../total-cost-of-ownership-in-government-it/) yang didiskontokan,
waktu-menuju-nilai, dan risiko. Pemerintahan secara struktural adalah sektor pembeli — Technology
Code of Practice menetapkan praduga ke arah solusi komoditas dan cloud — namun tim rekayasa di dalam
departemen tetap sering kali secara default memilih untuk membangun, dengan alasan yang sama seperti
para pembangun di mana pun.

## Mengapa Ini Penting

Technology Code of Practice milik Government Digital Service
(<https://www.gov.uk/guidance/the-technology-code-of-practice>) dan panduan Service Manual yang
menyertainya tentang memutuskan apakah akan membangun atau membeli mendorong departemen untuk
membenarkan pengembangan khusus terhadap praduga bahwa kapabilitas komoditas seharusnya dibeli, bukan
dibangun, dan bahwa hanya kapabilitas yang benar-benar baru dan membedakan misi yang layak mendapat
kode khusus. Panduan tambahan bias optimisme HM Treasury untuk Green Book, yang diambil dari tinjauan
Mott MacDonald tahun 2002 atas pengadaan publik berskala besar, memberi proyek TI rentang kenaikan
terluas dari semua kategori yang dinilai — estimasi biaya modal direkomendasikan untuk dinaikkan
sebesar 10% di batas bawah dan hingga 200% di batas atas sebelum digunakan dalam penilaian,
mencerminkan betapa buruknya pembangunan perangkat lunak secara historis diremehkan di seluruh
pengadaan publik. Analisis membangun-vs-membeli ada justru untuk memaksa penyesuaian risiko tersebut
ke atas meja sebelum persetujuan, alih-alih membiarkannya muncul sebagai permintaan kelebihan
anggaran dalam tahun berjalan.

## Matematika

```
Bandingkan pada horizon 3–5 tahun yang sama, didiskontokan pada tingkat
diskonto sosial Green Book (lihat social-discount-rate.md):

NPV_opsi = PV(manfaat, digeser oleh waktu-menuju-nilai) − PV(TCO)

Penyesuaian risiko (pola bias optimisme Green Book):
  biaya pembangunan × 1,1–3,0        (rentang kenaikan proyek TI, Mott MacDonald)
  waktu-menuju-nilai pembangunan + 40–60% (prior keterlambatan penerapan)
  membeli: tambahkan pemeriksaan realitas integrasi dan biaya keluar kontrak

Pendorong keputusan, dalam urutan yang biasanya memutuskan:
  1. diferensiasi — apakah kapabilitas ini adalah misi, atau sekadar pipa ledeng?
  2. waktu-menuju-nilai × biaya keterlambatan (lihat cost-of-delay-in-public-programmes.md)
  3. total biaya kepemilikan yang disesuaikan risiko
```

## Contoh Perhitungan

Sebuah pemerintah daerah membutuhkan sistem manajemen kasus untuk perawatan sosial dewasa. Membeli:
SaaS seharga £180.000/tahun, beroperasi dalam 4 bulan. Membangun: estimasi £900.000 ditambah
£150.000/tahun pemeliharaan, beroperasi dalam 14 bulan.

```
Biaya pembangunan yang disesuaikan risiko = 900.000 × 1,4 = £1.260.000
TCO 5 tahun:
  membeli  = 180.000 × 5 = £900.000
  membangun = 1.260.000 + 150.000 × 5 = £2.010.000

Istilah keterlambatan: sistem tersebut menghindarkan £40.000/bulan dalam
asesmen yang berduplikasi; pembangunan tiba 10 bulan lebih lambat
daripada membeli.
CoD = 10 × 40.000 = £400.000

Perbandingan efektif: £900.000 (membeli) vs £2.010.000 + £400.000 =
£2.410.000 (membangun)
```

Membeli menang sekitar £1,5 juta selama lima tahun, dan lini tunggal terbesar setelah estimasi
pembangunan itu sendiri adalah biaya keterlambatan yang tidak akan pernah terungkap oleh perbandingan
belanja modal murni.

## Kaitan dengan Rekayasa Perangkat Lunak

Disiplin-disiplin yang berpindah secara langsung dari analisis ini ke praktik penyampaian:
**penyesuaian risiko berbasis prior** — kenaikan Mott MacDonald adalah padanan perangkat lunak dari
bias optimisme Green Book yang diterapkan secara mekanis, sehingga tim seharusnya berargumen untuk
pengecualian terhadapnya alih-alih mengasumsikan estimasi mereka adalah pengecualian tersebut;
**kejujuran pembanding** — alternatif dari membangun adalah opsi membeli terbaik yang tersedia,
bukan "tidak sama sekali", yang terkait langsung dengan
[biaya peluang dalam belanja publik](../opportunity-cost-in-public-spending/); dan **perbandingan
TCO yang jujur** — setiap proposal pembangunan sebaiknya dibandingkan dengan
[total biaya kepemilikan](../total-cost-of-ownership-in-government-it/) penuh dari opsi membeli,
bukan harga daftarnya. Di mana membangun benar-benar menang, [biaya keterlambatan](../cost-of-delay-in-public-programmes/)
dari waktu pembangunan tambahan sebaiknya dihargakan secara eksplisit dalam kasus bisnis, bukan
dibiarkan sebagai asumsi yang tidak dinyatakan bahwa waktu tidak menjadi soal.

## Jebakan Umum

- **Membandingkan harga daftar vendor dengan estimasi pembangunan yang belum disesuaikan risiko**:
  ini menyanjung pembangunan dua kali lipat, sekali pada biaya dan sekali pada jadwal.
- **Tenaga kerja internal dihargakan nol**: waktu rekayasa pegawai negeri diperlakukan sebagai
  "gratis" karena sudah masuk dalam anggaran jumlah staf departemen, yang menyembunyikan biaya
  peluang sesungguhnya terhadap pekerjaan lain yang bisa dilakukan tim tersebut.
- **Lock-in yang tidak dihargakan pada kedua arah**: biaya keluar dari vendor dan portabilitas data
  itu nyata, tetapi demikian pula faktor bus dari pembangunan khusus dan ketergantungannya pada
  mempertahankan tim internal kecil yang sulit digantikan sepanjang masa pakainya.
- **Diferensiasi misi diklaim untuk pipa ledeng**: "ini adalah inti bagi kami" diklaim tentang
  middleware integrasi atau penyimpanan dokumen — ujilah terhadap apakah seorang warga atau petugas
  kasus akan pernah menyadari mana yang berjalan di baliknya.

## Sumber

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
