# Penilaian Green Book (Model Lima Kasus)

Green Book adalah panduan wajib HM Treasury untuk menilai dan mengevaluasi proposal belanja
pemerintah Inggris. Alat intinya, model lima kasus, memaksa sebuah kasus bisnis untuk menjawab lima
pertanyaan terpisah — apakah ini ide yang baik, apakah memberikan nilai, dapatkah diadakan, dapatkah
dibiayai, dan dapatkah disampaikan — alih-alih meruntuhkan segalanya menjadi satu angka tunggal yang
dapat begitu saja disetujui seorang menteri.

## Mengapa Ini Penting

Setiap proposal belanja pemerintah pusat Inggris di atas batas delegasi departemen harus melalui
penilaian Green Book sebelum pendanaan dilepaskan, dan Green Book Review 2020 milik HM Treasury
(dipublikasikan setelah kritik bahwa proses tersebut bias terhadap wilayah yang lebih miskin, lihat
<https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>)
memperketat persyaratan bahwa opsi dibandingkan terhadap baseline "lakukan minimum" yang genuine dan
bahwa kesesuaian strategis didemonstrasikan sebelum nilai untuk uang bahkan dinilai. Model lima kasus
itu sendiri mendahului Green Book — ia berasal dari Office of Government Commerce sebagai struktur
kasus bisnis standar — tetapi edisi Green Book 2022 menanamkannya sebagai bentuk wajib untuk kasus
bisnis mana pun yang mencari persetujuan Treasury:
<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Inti dari membagi kasus tersebut menjadi lima adalah bahwa sebuah proposal dapat gagal pada dimensi
mana pun terlepas dari yang lain. Sebuah replatforming TI yang secara strategis kuat dan efektif
biaya tetap dapat gagal pada kasus komersial jika hanya satu pemasok yang dapat menyampaikannya
(menciptakan risiko tender tunggal), atau gagal pada kasus manajemen jika departemen tidak memiliki
rekam jejak menyampaikan program dengan ukuran tersebut. Satu skor "nilai untuk uang" tunggal
menyembunyikan persis mode kegagalan semacam ini.

## Matematika

Model lima kasus adalah sebuah struktur, bukan rumus, tetapi setiap kasus memiliki uji kuantitatif
atau evidensialnya sendiri:

```
1. Kasus strategis
   Bukti tujuan belanja yang terkait dengan strategi organisasi.
   Uji: apakah ada kasus untuk perubahan sama sekali? ("tidak
   melakukan apa-apa" selalu merupakan sebuah opsi.)

2. Kasus ekonomi
   Penilaian opsi terhadap baseline "lakukan minimum", menggunakan
   analisis biaya-manfaat sosial atau analisis efektivitas biaya.
   Uji: opsi mana yang memaksimalkan nilai publik bersih?
   Lihat ../social-cost-benefit-analysis/ dan
   ../cost-effectiveness-analysis-in-government/

3. Kasus komersial
   Keterlibatan pasar, jalur pengadaan, alokasi risiko antara
   pembeli dan pemasok.
   Uji: apakah opsi yang lebih disukai dapat diadakan dengan syarat
   yang dapat diterima?

4. Kasus finansial
   Keterjangkauan dalam batas anggaran departemen, sumber pendanaan,
   perlakuan neraca.
   Uji: dapatkah kita membiayainya, tahun ini dan setiap tahun setelahnya?

5. Kasus manajemen
   Tata kelola, rencana proyek, rencana realisasi manfaat, register
   risiko.
   Uji: dapatkah organisasi ini benar-benar menyampaikannya?
   Lihat ../benefits-realization/
```

Kasus ekonomi adalah tempat penilaian kuantitatif berada: opsi dibandingkan pada basis nilai kini
bersih yang disesuaikan [tingkat diskonto sosial](../social-discount-rate/), menggunakan metode
[analisis biaya-manfaat sosial](../social-cost-benefit-analysis/), atau, di mana manfaat tidak dapat
dimonetisasi secara jujur, melalui
[analisis efektivitas biaya](../cost-effectiveness-analysis-in-government/) atau
[analisis keputusan multi-kriteria](../multi-criteria-decision-analysis/).

## Contoh Perhitungan

**Pemerintah daerah**: sebuah dewan kota yang menilai sistem TI perbaikan perumahan senilai £12 juta
menjalankan lima kasus sebagai berikut. Kasus strategis: tunggakan perbaikan melanggar standar
decent-homes statutori dalam 18 bulan tanpa intervensi. Kasus ekonomi: tiga opsi dihitung biayanya
selama periode penilaian 10 tahun pada tingkat diskonto 3,5% (sesuai tingkat preferensi waktu sosial
standar Green Book 2022) — "lakukan minimum" (tambal sistem warisan, NPV −£4,1 juta), "beli"
(platform COTS, NPV +£2,3 juta), "bangun" (platform khusus, NPV +£0,6 juta setelah bias optimisme
40% untuk pengembangan perangkat lunak diterapkan terhadap biaya modal yang tidak didiskontokan,
sesuai Green Book Annex A). Beli memenangkan kasus ekonomi. Kasus komersial: ada dua pemasok yang
layak, tender kompetitif layak dilakukan — lolos. Kasus finansial: modal tersedia dari Public Works
Loan Board, biaya pendapatan sesuai dengan rencana finansial jangka menengah — lolos. Kasus
manajemen: dewan kota telah menyampaikan dua sistem yang sebanding dalam lima tahun terakhir —
lolos. Proposal ini berlanjut dengan "beli."

**Departemen pemerintah pusat**: sebuah proposal dengan kasus ekonomi yang kuat (NPV +£40 juta)
tetapi di mana hanya satu pemasok yang memegang akreditasi yang relevan gagal pada uji kasus
komersial untuk ketegangan kompetitif, memaksa baik sebuah pengabaian tender tunggal (dengan beban
pengawasannya sendiri) atau perancangan ulang spesifikasi untuk membuka pasar — kasus ekonomi saja
tidak akan pernah mengungkap ini.

## Kaitan dengan Rekayasa Perangkat Lunak

Tim rekayasa di dalam pemerintahan atau organisasi yang didanai hibah biasanya hanya pernah melihat
kasus ekonomi, karena itulah bagian yang diminta untuk dibenarkan oleh kepemimpinan produk dan
rekayasa ("berapa ROI migrasi ini?"). Tetapi sebuah kasus bisnis yang lolos Treasury atau komite
hibah membutuhkan kelima-limanya, dan insinyur sering kali adalah orang yang paling tepat untuk
menjawab kasus komersial (dapatkah ini benar-benar diadakan, atau apakah ini mengunci kita ke dalam
format proprietary satu vendor?) dan kasus manajemen (apakah kita memiliki kapabilitas penyampaian,
atau apakah ini bergantung pada tiga orang tertentu yang tidak berhenti?). Perlakukan permintaan
untuk "hanya angka kasus bisnis" sebagai permintaan untuk satu perlima dari keputusan sesungguhnya.
Lihat [nilai untuk uang](../value-for-money/) untuk bagaimana keluaran kasus ekonomi biasanya
diringkas, dan [total biaya kepemilikan](../total-cost-of-ownership-in-government-it/) untuk inti
kuantitatif biasa dari kasus finansial.

## Jebakan Umum

- **Menulis kasus ekonomi terlebih dahulu dan kasus strategis untuk menyesuaikannya.** Green Book
  Review 2020 menemukan persis mode kegagalan ini mendorong bias penilaian terhadap tempat dan
  sektor yang sudah memiliki bukti kuat, mengukuhkan ketimpangan regional; kasus strategis
  seharusnya menetapkan tujuan sebelum opsi dibandingkan.
- **Memperlakukan "lakukan minimum" sebagai "tidak melakukan apa-apa".** Baseline yang benar adalah
  opsi berbiaya terendah yang tetap memenuhi kewajiban hukum atau keselamatan minimum, bukan fantasi
  belanja nol — membandingkan terhadap nol literal menggelembungkan nilai nyata setiap opsi.
- **Melewatkan kasus komersial dan manajemen karena kasus ekonomi kuat.** Sebuah proposal NPV tinggi
  yang tidak dapat diadakan secara kompetitif atau disampaikan oleh organisasi pensponsor bukanlah
  proposal yang layak didanai; peninjau Treasury secara rutin menolak dengan alasan ini bahkan
  dengan kasus ekonomi yang meyakinkan.
- **Menerapkan model lima kasus sekali saja, di awal.** Green Book mensyaratkan kasus tersebut
  ditinjau ulang di setiap gerbang persetujuan berikutnya (kasus garis besar strategis, kasus
  bisnis garis besar, kasus bisnis penuh) seiring biaya dan bukti mengeras — sebuah kasus yang
  dibekukan pada tahap garis besar melewatkan eskalasi biaya yang akan ditangkap oleh gerbang
  berikutnya.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
