# Produktivitas AI di Sektor Publik

Metrik untuk apa yang sebenarnya dilakukan oleh bantuan pemrograman AI terhadap keluaran rekayasa —
tingkat penerimaan saran, percepatan dari studi terkontrol, throughput PR, dan tingkat retensi kode —
memiliki basis bukti yang sungguh-sungguh kontradiktif bahkan sebelum keterbatasan sektor publik
ditambahkan: klasifikasi data membatasi bagian mana dari estat warisan (legacy) yang boleh disentuh
sama sekali oleh sebuah alat AI, siklus pengadaan berarti alat yang sedang dievaluasi sering kali
tertinggal satu generasi model di belakang kemampuan terkini, dan persyaratan izin keamanan mengatur
siapa yang boleh menggunakannya untuk apa.

## Mengapa Ini Penting

Dua studi terkontrol yang paling banyak dikutip menunjuk ke arah yang berlawanan. RCT GitHub Copilot
tahun 2023 oleh Peng dkk. menemukan bahwa pengembang menyelesaikan tugas server HTTP baru (greenfield)
55,8% lebih cepat dengan Copilot (1j11m vs 2j41m, n=95). RCT METR tahun 2025 menemukan bahwa
pengembang open-source berpengalaman yang bekerja pada *repositori matang milik mereka sendiri* 19%
lebih lambat dengan alat AI awal 2025, sementara mereka meyakini bahwa mereka sekitar 20% lebih
cepat. Kedua studi tersebut valid; kontradiksinya justru itulah temuannya — efikasi pada tugas
greenfield tidak berpindah menjadi efektivitas pada basis kode matang, dan sebagian besar pekerjaan
rekayasa pemerintahan adalah pekerjaan basis kode matang pada estat yang lebih tua dan lebih khas
(idiosyncratic) daripada repositori komersial median. Generative AI Framework for HMG milik Central
Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>)
menetapkan prinsip-prinsip untuk adopsi yang bertanggung jawab justru karena basis bukti ini tidak
dapat begitu saja diimpor dari demonstrasi vendor; departemen diharapkan mengevaluasi alat terhadap
persyaratan penanganan data dan keamanan mereka sendiri sebelum diluncurkan.

## Matematika

```
Tingkat penerimaan  = saran yang diterima / saran yang ditampilkan
Tingkat retensi     = kode AI yang bertahan sampai digabungkan / kode AI yang diterima
Percepatan          = (t_kontrol − t_AI) / t_kontrol  (HANYA dari perbandingan terkontrol)
Delta throughput    = Δ PR yang digabungkan/pengembang/minggu

Faktor cakupan sektor publik:
  pangsa basis kode yang memenuhi syarat = baris kode pada sistem di mana
    klasifikasi (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) mengizinkan
    alat tersebut sama sekali

Model nilai = pengembang × cakupan-yang-memenuhi-syarat × waktu yang
             dihemat × tarif terbebankan × utilisasi
             — setiap istilah memerlukan pengukuran lokal, dan faktor
             cakupan tidak memiliki padanan di sektor swasta
```

## Contoh Perhitungan

Sebuah departemen pemerintah menjalankan proyek percontohan asisten pemrograman AI pada 300
pengembang, tetapi hanya sistem berklasifikasi OFFICIAL yang memenuhi syarat untuk penggunaan alat
tersebut — 70% dari estat berdasarkan alokasi jumlah staf, dengan 30% sisanya (sistem berklasifikasi
lebih tinggi) sepenuhnya dikecualikan.

```
Pengembang yang memenuhi syarat = 300 × 0,70 = 210

Hasil proyek percontohan: waktu yang dihemat menurut laporan sendiri
              40 menit/hari; penghematan tingkat tugas yang terukur
              12 menit/hari (0,2 jam) — kesenjangan persepsi METR,
              tereproduksi di lapangan

Nilai angka yang TERUKUR:
  210 × 0,2 jam × 220 hari × £55/jam terbebankan × 0,6 utilisasi
  = 210 × 44 jam × £55 × 0,6
  = 9.240 jam × £55 × 0,6 ≈ £304.920/tahun kapasitas

Biaya: 210 kursi berlisensi × £22/bulan × 12 ≈ £55.440/tahun

Rasio kapasitas bersih ≈ 304.920 / 55.440 ≈ 5,5:1
```

Layak didanai pada kira-kira sepertiga dari manfaat yang dilaporkan sendiri, dan hanya setelah
batas klasifikasi diterapkan — melisensikan seluruh 300 pengembang berdasarkan kekuatan angka yang
dilaporkan sendiri akan melebih-lebihkan baik populasi yang memenuhi syarat maupun penghematan
sesungguhnya.

## Kaitan dengan Rekayasa Perangkat Lunak

Disiplin-disiplin yang berlaku secara langsung: jalankan **uji coba pragmatis** pada basis kode
departemen sendiri dan tiket nyata, bukan tugas demonstrasi vendor, karena hasil METR secara khusus
adalah temuan basis kode matang; perlakukan **tingkat penerimaan sebagai proksi, bukan hasil** —
penerimaan tinggi dengan retensi rendah adalah padanan perangkat lunak dari overdiagnosis; padukan
setiap klaim throughput dengan **pemeriksaan stabilitas**, karena laporan DORA 2025 menemukan bahwa
adopsi AI meningkatkan throughput tetapi menurunkan stabilitas perubahan, yang persis merupakan
analisis manfaat bersih yang dibangun oleh
[metrik DORA untuk nilai publik](../dora-metrics-for-public-value/); dan bersikaplah jujur bahwa
perkakas AI dapat melebarkan, bukan mempersempit, kesenjangan pada estat warisan yang sarat
[utang teknis](../technical-debt-as-public-value-erosion/), karena data pelatihan kurang
merepresentasikan COBOL, 4GL, dan kode mainframe khusus yang umum di pemerintahan, sehingga kualitas
saran justru paling lemah pada sistem-sistem yang paling membutuhkan bantuan. Hal ini berdampingan
dengan pertanyaan [nilai AI dalam pemerintahan](../ai-in-government-value/) yang lebih luas dan
sebaiknya diatur oleh batasan [nilai keamanan siber sektor publik](../public-sector-cybersecurity-value/)
yang sama, yang membatasi di mana alat pihak ketiga mana pun boleh melihat kode atau data sama sekali.

## Jebakan Umum

- **Transplantasi studi vendor**: menerapkan percepatan RCT greenfield pada pekerjaan integrasi
  warisan justru merupakan kesalahan yang diungkap oleh studi METR.
- **Laporan diri sebagai pengukuran**: kesenjangan persepsi-versus-terukur sebesar 20 poin persentase
  adalah bias terbesar yang diketahui dalam literatur ini, dan menggelembungkan kasus bisnis yang
  hanya mengandalkan survei pengembang.
- **Mengabaikan batas klasifikasi**: model lisensi dan nilai yang dibangun berdasarkan total jumlah
  staf, bukan subset yang memenuhi syarat dan telah lolos klasifikasi keamanan, secara sistematis
  melebih-lebihkan baik efektivitas biaya maupun cakupan yang dapat dicapai.
- **Jeda siklus pengadaan**: pengadaan alat berbasis kerangka kerja dapat berarti sebuah proyek
  percontohan mengevaluasi generasi model yang tertinggal 12–18 bulan di belakang apa yang tersedia
  untuk publik pada saat peluncuran penuh, membuat asumsi percepatan dari kasus bisnis awal menjadi
  usang sebelum go-live.

## Sumber

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
