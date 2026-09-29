# Nilai untuk Uang (Value for Money, VFM)

Nilai untuk uang adalah uji formal sektor publik Inggris tentang apakah belanja mencapai
keseimbangan terbaik yang tersedia antara biaya dan manfaat. Green Book milik HM Treasury
membingkainya melalui tiga "E" — ekonomi (economy), efisiensi (efficiency), dan efektivitas
(effectiveness) — dengan keadilan (equity) yang semakin diperdebatkan sebagai "E" keempat yang
kontroversial. Setiap kasus bisnis sektor publik yang lolos pengawasan harus menjawab ketiganya
secara eksplisit, bukan sekadar mengklaim bahwa belanja tersebut "sepadan".

## Mengapa Ini Penting

VFM bukanlah sinonim untuk "murah". Green Book (edisi HM Treasury 2022) menyatakan secara eksplisit
bahwa membeli opsi berbiaya terendah (ekonomi) tanpa memeriksa apakah opsi itu menghasilkan hasil
yang diinginkan (efektivitas) adalah kesalahan yang umum dan mahal — pengadaan yang menghemat 10%
biaya satuan tetapi menghasilkan dampak 40% lebih rendah adalah nilai yang lebih buruk, bukan lebih
baik. Kerangka tiga-E memaksa sebuah kasus bisnis untuk memisahkan tiga mode kegagalan yang
benar-benar berbeda: membayar terlalu mahal untuk masukan, memboroskan masukan dalam konversi
menjadi keluaran, dan menghasilkan keluaran yang tidak diterjemahkan menjadi hasil yang diinginkan
siapa pun. Kontrol belanja pemerintah Inggris — titik persetujuan Treasury, studi nilai-untuk-uang
National Audit Office (NAO), dan penilaian pejabat akuntansi departemen — dibangun di sekitar uji
tiga bagian ini, sehingga sebuah kasus bisnis rekayasa yang hanya membahas biaya (ekonomi) akan
gagal dalam pengawasan meskipun teknologinya baik.

"E" keempat, keadilan, kontroversial justru karena bisa bertentangan dengan tiga E lainnya: cara
paling efisien untuk menyampaikan layanan secara nasional jarang menjadi cara yang paling adil,
karena memusatkan penyampaian di tempat yang paling murah untuk menjangkau warga sering kali
berarti kurang melayani kelompok yang paling sulit dijangkau. Revisi Green Book tahun 2020
menanggapi kritik (termasuk dari Treasury Select Committee 2020 dan IPPR North) bahwa rasio
biaya-manfaat murni secara sistematis menguntungkan wilayah yang sudah makmur, dengan mewajibkan
penilaian membahas dampak distribusional secara eksplisit — lihat
[pembobotan distribusional](../distributional-weighting/).

## Matematika

VFM bukanlah satu rasio tunggal melainkan diagnostik tiga bagian (atau empat bagian), diterapkan
secara berurutan:

```
Ekonomi:       Apakah masukan dibeli dengan biaya terendah yang wajar
               untuk kualitas yang dibutuhkan? (£ per unit masukan)

Efisiensi:     Seberapa baik masukan diubah menjadi keluaran?
               (keluaran / masukan, misalnya kasus yang diproses per
               jam-kerja caseworker)

Efektivitas:   Apakah keluaran benar-benar menghasilkan hasil yang
               diinginkan? (hasil tercapai / hasil yang diinginkan)

[Keadilan]:    Apakah biaya dan manfaat didistribusikan secara adil
               di seluruh populasi, atau terkonsentrasi pada mereka
               yang paling sedikit membutuhkannya?
```

Kegagalan VFM dapat terjadi pada tahap mana pun secara independen: pengadaan yang ekonomis dengan
penyampaian yang tidak efisien; penyampaian yang efisien dari keluaran yang salah; hasil yang
efektif namun dibeli dengan biaya berlebihan. Lihat [KPI sektor publik](../public-sector-kpis/)
untuk cara hal ini diterjemahkan menjadi indikator terukur, dan
[analisis efektivitas-biaya dalam pemerintahan](../cost-effectiveness-analysis-in-government/)
untuk metode perbandingan formalnya.

## Contoh Perhitungan

**Pusat kontak pemerintah daerah**: sebuah dewan kota membandingkan dua opsi untuk sistem
manajemen kasus baru.

- *Opsi A*: lisensi £600.000 (yang termurah yang tersedia), tetapi agen rata-rata masih
  membutuhkan 22 menit per kasus karena alur kerja memerlukan pengetikan ulang manual antar sistem
  — efisiensinya buruk.
- *Opsi B*: lisensi £900.000, alur kerja terintegrasi, agen rata-rata 9 menit per kasus.

Ekonomi saja mendukung A (£300.000 lebih murah). Tetapi pada 40.000 kasus/tahun, A membutuhkan
40.000 × 22/60 = 14.667 jam-staf; B membutuhkan 40.000 × 9/60 = 6.000 jam-staf. Dengan biaya staf
penuh sebesar £28/jam, A menghabiskan £410.667/tahun dalam waktu staf dibandingkan £168.000/tahun
milik B — sebuah kesenjangan efisiensi £242.667/tahun yang melampaui perbedaan ekonomi awal
£300.000 dalam waktu 14 bulan. VFM mendukung B begitu efisiensi diperhitungkan, bukan A.

**Hibah penyampaian organisasi amal**: seorang pemberi dana membandingkan hibah £50.000 yang
mencapai 200 penempatan kerja berhasil (£250/penempatan — tampak sangat ekonomis) dengan hibah
£120.000 yang mencapai 350 penempatan yang bertahan lebih dari 12 bulan, dibandingkan dengan
penempatan hibah pertama, di mana separuhnya berakhir dalam 3 bulan. Efektivitas — hasil yang
bertahan lama — membalikkan peringkat VFM yang tampak: biaya sebenarnya per penempatan yang
*bertahan* adalah £250 ÷ 0,5 = £500 untuk hibah pertama, dibandingkan £120.000/350 ≈ £343 untuk
hibah kedua.

## Kaitan dengan Rekayasa Perangkat Lunak

VFM memberikan tim rekayasa sebuah kedisiplinan untuk membingkai kasus bisnis teknologi dengan cara
yang benar-benar akan dibaca oleh fungsi keuangan dan audit:

- Nyatakan ekonomi, efisiensi, dan efektivitas sebagai baris terpisah dalam sebuah kasus bisnis,
  bukan satu angka "nilai" yang dicampur — seorang peninjau yang terlatih dalam Green Book akan
  meminta persis rincian seperti ini.
- Waspadai mengoptimalkan biaya pengadaan (ekonomi) dengan mengorbankan efisiensi integrasi dan
  alur kerja, sebuah penghematan semu yang sangat umum dalam TI pemerintah (lihat
  [total biaya kepemilikan dalam TI pemerintah](../total-cost-of-ownership-in-government-it/) dan
  [bangun vs beli di pemerintahan](../build-vs-buy-in-government/)).
- Efektivitas membutuhkan data hasil, bukan sekadar hitungan keluaran — kaitkan metrik penyampaian
  dengan [luaran vs keluaran](../outcomes-vs-outputs/) dan dengan evaluasi nyata melalui
  [analisis kontrafaktual](../counterfactual-analysis/), alih-alih mengasumsikan bahwa keluaran
  menyiratkan hasil.
- Ketika sebuah sistem melayani secara tidak merata di berbagai wilayah atau demografi, pertanyaan
  keadilan adalah keberatan VFM yang sah, bukan sekadar "hal baik untuk dimiliki" yang terpisah —
  lihat [inklusi digital](../digital-inclusion/).

## Jebakan Umum

- **Menyamakan VFM dengan harga terendah.** Ekonomi hanyalah sepertiga (atau seperempat) dari uji
  ini; Green Book secara eksplisit memperingatkan terhadap aturan pengadaan "biaya terendah" yang
  mengabaikan efisiensi dan efektivitas.
- **Mengukur keluaran dan menyebutnya hasil.** Volume kasus yang ditangani (efisiensi) tidak sama
  dengan kasus yang diselesaikan dengan baik (efektivitas); lihat [luaran vs keluaran](../outcomes-vs-outputs/).
- **Memperlakukan keadilan sebagai opsional.** Sejak pembaruan Green Book tahun 2020, dampak
  distribusional dimaksudkan untuk dinilai bersamaan dengan tiga E tradisional, bukan ditempelkan
  belakangan; menambahkannya setelah kasus bisnis disetujui jauh lebih sulit dibandingkan
  menyertakannya sejak awal.
- **Membandingkan opsi pada volume berbeda tanpa normalisasi.** Perbandingan VFM per unit di
  antara opsi yang melayani populasi berbeda harus mengendalikan skala, atau perbandingan
  efisiensinya menjadi tidak bermakna.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
