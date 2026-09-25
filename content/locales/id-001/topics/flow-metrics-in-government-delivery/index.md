# Metrik Alur dalam Penyampaian Pemerintahan

Metrik alur — Hukum Little, batas pekerjaan-dalam-proses (work-in-progress, WIP), dan efisiensi alur
— mendeskripsikan seberapa cepat pekerjaan bergerak melalui sebuah sistem dengan kapasitas terbatas.
Sebuah papan sprint adalah salah satu sistem semacam itu; sebuah antrean klaim tunjangan, register
aplikasi perencanaan, atau tunggakan penanganan kasus visa adalah persis matematika yang sama yang
mengenakan seragam berbeda.

## Mengapa Ini Penting

Beban kasus pemerintah adalah sistem antrean, dan sistem antrean mematuhi hukum antrean terlepas
apakah ada yang mengukurnya atau tidak. Periode penentuan statutori membuat ini eksplisit: di bawah
rezim Town and Country Planning, sebagian besar aplikasi perencanaan minor membawa target penentuan
statutori 8 minggu dan aplikasi besar 13 minggu — sebuah komitmen waktu siklus yang dipanggang
langsung ke dalam undang-undang. Tunggakan penanganan kasus suaka Home Office, yang diteliti
berulang kali oleh National Audit Office dan Home Affairs Select Committee, adalah kasus yang
terdokumentasi dengan baik dari sebuah sistem publik di mana pekerjaan-dalam-proses tumbuh lebih
cepat daripada throughput untuk periode yang berkelanjutan, mendorong waktu siklus jauh melampaui
ekspektasi statutori atau layanan mana pun. Metrik alur memberi insinyur dan manajer penanganan
kasus kosakata kuantitatif bersama untuk persis mode kegagalan ini, alih-alih membiarkannya sebagai
"masalah tunggakan" yang kualitatif.

## Matematika

```
Hukum Little:  WIP = Throughput × Waktu Siklus
           →   Waktu Siklus = WIP / Throughput

Efisiensi alur = waktu aktif (tersentuh) / total waktu siklus   (Vacanti)

Efek batas WIP: untuk throughput tetap, membelah dua WIP kira-kira
membelah dua waktu siklus rata-rata (Hukum Little disusun ulang) —
tuas yang tersedia tanpa menambah jumlah staf.
```

Lihat [metrik DORA untuk nilai publik](../dora-metrics-for-public-value/) untuk matematika setara
yang diterapkan pada pipeline deployment perangkat lunak alih-alih penanganan kasus.

## Contoh Perhitungan

**Departemen perencanaan pemerintah daerah**: 400 aplikasi terbuka setiap saat (WIP), tim tersebut
menyelesaikan 50 aplikasi/minggu (throughput).

```
Waktu siklus = WIP / Throughput = 400 / 50 = 8 minggu
```

Itu tepat mendarat pada target statutori 8 minggu untuk aplikasi minor — tanpa ruang gerak, artinya
variabilitas apa pun dalam permintaan yang masuk atau waktu respons konsultan mendorong penentuan
melampaui tenggat hukum.

**Efisiensi alur**: dari 8 minggu tersebut (56 hari kalender), sebuah aplikasi biasanya memiliki
sekitar 6 jam waktu pemrosesan petugas kasus aktual.

```
Efisiensi alur = 6 jam / (56 hari × 8 jam kerja/hari)
                = 6 / 448 ≈ 1,3%
```

Tolok ukur Vacanti untuk tim perangkat lunak menempatkan efisiensi alur tipikal pada 15–20%;
penanganan kasus pemerintah, dengan banyak serah terima konsultan statutori dan jendela konsultasi
publik, sering berjalan satu orde besaran lebih rendah. 98,7% waktu "tunggu" itulah tempat delapan
minggu tersebut sebenarnya pergi — bukan pada kapasitas petugas kasus.

**Intervensi batas WIP**: membatasi aplikasi terbuka per petugas kasus pada 15 alih-alih 25 yang
tidak terbatas (mempertahankan throughput konstan) menggeser WIP dari 400 menjadi sekitar 240 di
seluruh tim 16 orang:

```
Waktu siklus baru = 240 / 50 = 4,8 minggu
```

Hampir separuh pengurangan waktu siklus dari sebuah perubahan kebijakan, bukan peningkatan staf —
tuas yang sama yang ditarik tim penyampaian gaya DORA ketika mereka membatasi WIP sprint.

## Kaitan dengan Rekayasa Perangkat Lunak

Metrik alur adalah bahasa bersama antara papan Kanban sebuah tim penyampaian dan lantai penanganan
kasus yang sedang dibangunkan perangkat lunak untuknya: antrean seorang petugas kasus dan antrean
pull-request sama-sama diatur oleh Hukum Little, dan keduanya meledakkan target waktu siklus mereka
dengan cara yang sama — WIP terlalu banyak relatif terhadap throughput. Ini penting secara langsung
untuk [biaya keterlambatan dalam program publik](../cost-of-delay-in-public-programmes/): waktu
siklus × CoD adalah poundsterling yang duduk dalam antrean pada saat mana pun, dan ini penting untuk
[standar layanan dan metrik transaksi](../service-standards-and-transaction-metrics/), di mana
sebuah target waktu penyelesaian yang dipublikasikan adalah komitmen waktu siklus yang hanya dapat
didiagnosis oleh metrik alur ketika terlewatkan. Perangkat lunak sebuah sistem penanganan kasus
seharusnya menampilkan WIP dan waktu siklus sebagai metrik operasional kelas satu, bukan
menguburnya di dalam sebuah sistem manajemen kasus yang tidak pernah diquery siapa pun.

## Jebakan Umum

- **Menambahkan batas WIP tanpa memperbaiki bottleneck sesungguhnya**: jika batasannya adalah waktu
  respons konsultan statutori eksternal, membatasi WIP petugas kasus hanya memindahkan antrean ke
  hulu alih-alih memperpendeknya.
- **Memperlakukan efisiensi alur sebagai target untuk dimanipulasi**: terburu-buru pada 1,3% waktu
  aktif hampir tidak menggerakkan waktu siklus; leverage-nya hampir selalu ada pada keadaan tunggu,
  yang biasanya berarti perancangan ulang proses, bukan kecepatan petugas kasus.
- **Mengabaikan variabilitas**: Hukum Little mendeskripsikan rata-rata; sebuah beban kasus dengan
  varians permintaan tinggi membutuhkan kapasitas buffer, bukan hanya batas WIP yang lebih ketat,
  atau tenggat statutori akan tetap terlewatkan pada ekor yang volatil bahkan ketika rata-ratanya
  membaik.
- **Mengukur WIP secara tidak konsisten**: sebuah kasus "terbuka" dalam sistem catatan tetapi
  sebenarnya terhenti menunggu pihak ketiga tetap merupakan WIP; mengecualikannya menyanjung angka
  tanpa mengubah realitas yang dihadapi warga.

## Sumber

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
