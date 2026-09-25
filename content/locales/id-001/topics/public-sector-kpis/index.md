# KPI Sektor Publik

Sebuah indikator kinerja utama (key performance indicator, KPI) adalah ukuran terpilih dan terlacak
yang mewakili apakah sebuah layanan publik menjalankan tugasnya dengan baik. Dalam pemerintahan,
pemilihan KPI tidak pernah netral: karena KPI melekat pada anggaran, tabel liga, dan karier, tindakan
memilih satu KPI membentuk perilaku semua orang di hilirnya, sering kali lebih daripada kebijakan
yang menciptakan layanan tersebut.

## Mengapa Ini Penting

Observasi Charles Goodhart tahun 1975 tentang kebijakan moneter — kemudian dipopulerkan Marilyn
Strathern sebagai "ketika sebuah ukuran menjadi target, ia berhenti menjadi ukuran yang baik" —
adalah label peringatan tunggal paling penting dalam manajemen kinerja sektor publik. Sebuah KPI
yang dipilih untuk *mendeskripsikan* sebuah sistem mulai *mendistorsi* sistem tersebut pada saat
pendanaan, gaji, atau kelangsungan politik terikat padanya. Ilustrasi kanonisnya adalah waktu
respons ambulans NHS: ketika target respons delapan menit Kategori A menjadi mengikat, beberapa
trust ditunjukkan telah "menumpuk" ambulans tepat di luar jam waktu-respons, atau mengklasifikasikan
ulang panggilan, untuk mencapai angka tersebut tanpa mengubah hasil pasien. Panduan UK National
Audit Office tentang memilih dan menggunakan indikator kinerja — ditetapkan di seluruh laporan
nilai-untuk-uangnya dan kerangka "Performance Measurement by Regulators" serta "Choosing the Right
FABRIC" (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — ada justru
karena departemen terus memilih indikator yang mudah dilaporkan alih-alih indikator yang sulit
dimanipulasi. Seorang insinyur perangkat lunak yang merilis dasbor yang menjadi dasar penilaian
seorang menteri atau direktur, disengaja atau tidak, sedang merancang struktur insentif sebuah
institusi publik.

## Matematika

Desain KPI adalah topik berbentuk kerangka kerja, tetapi *evaluasi* sebuah KPI kandidat adalah
daftar periksa yang dapat diulang, bukan rumus:

```
Untuk setiap KPI kandidat, nilai terhadap:
  Fit for purpose  — apakah ia mengukur hasil, atau sebuah proksi
                     beberapa langkah terpisah?
  Appropriate      — apakah ia milik orang-orang yang benar-benar
                     dapat memengaruhinya?
  Balanced         — apakah ia dipasangkan dengan sebuah metrik
                     penyeimbang yang menangkap manipulasi?
  Robust           — dapatkah ia bertahan terhadap audit, atau
                     apakah ia dilaporkan sendiri dan tidak dapat
                     diverifikasi?
  Integrated       — apakah ia cocok dengan set yang lebih luas, atau
                     mendorong melawan KPI lain?
  Cost-effective   — apakah mengumpulkannya berbiaya lebih daripada
                     keputusan yang diinformasikannya?

Pembagian terdepan vs tertinggal:
  Indikator terdepan → meramalkan hasil masa depan, tetapi sering
                        dapat dimanipulasi (misalnya panggilan
                        dijawab <60 detik)
  Indikator tertinggal → mengonfirmasi hasil tersebut terjadi, tetapi
                        tiba terlalu terlambat untuk mengarahkan
                        (misalnya survei kepuasan tahunan)
  Sebuah set KPI yang dapat dipertahankan memasangkan setidaknya satu
  dari masing-masing per tujuan.
```

## Contoh Perhitungan

**Trust ambulans**: sebuah trust melaporkan KPI waktu-respons Kategori A (mengancam jiwa) sebesar
"75% panggilan direspons dalam 8 menit." Dalam satu kuartal, 6.000 panggilan Kategori A masuk;
4.500 terpenuhi dalam 8 menit, memberikan 75,0% — tampaknya sesuai target.

```
KPI utama = 4.500 / 6.000 × 100 = 75,0%  (memenuhi ambang batas 75%)
```

Tetapi sebuah audit Goodhart menambahkan sebuah metrik penyeimbang: waktu respons rata-rata untuk
10% panggilan terlambat.

```
Rata-rata respons desil terlambat = 34 menit (naik dari 19 menit dua
                                     tahun sebelumnya)
```

Trust tersebut mencapai targetnya sementara ekornya — panggilan yang paling mungkin benar-benar
mengancam jiwa begitu triase tidak sempurna — menjadi jauh lebih buruk, karena kru diprioritaskan ke
arah panggilan yang mendekati tebing 8 menit alih-alih ke arah urgensi klinis. KPI tunggal
menceritakan kisah yang salah; KPI berpasangan menceritakan yang benar.

## Kaitan dengan Rekayasa Perangkat Lunak

Insinyur yang membangun dasbor kinerja untuk pemerintah, secara fungsional, sedang merancang API
insentif organisasi tersebut. Implikasi praktis: instrumentasikan *penyebut* dengan ketelitian yang
sama seperti pembilang (sebuah KPI yang dilaporkan sebagai persentase telanjang mengundang
manipulasi penyebut — lihat [biaya per transaksi](../cost-per-transaction/) untuk perangkap yang
sama dalam layanan digital); bangun metrik penyeimbang ke dalam dasbor yang sama alih-alih sebuah
laporan terpisah yang tidak dibaca siapa pun, sehingga manipulasi terlihat pada titik keputusan; dan
beri versi definisi KPI, karena sebuah pendefinisian ulang secara diam-diam (mengubah apa yang
dihitung sebagai sebuah "panggilan," sebuah "kasus," atau sebuah "penyelesaian") secara fungsional
setara dengan mengubah target tanpa mengumumkannya. Sebuah
[kartu skor nilai publik](../public-value-scorecard/) adalah satu cara terstruktur untuk menghentikan
sebuah KPI tunggal dari dibaca secara terisolasi, dan
[akuntabilitas berbasis hasil](../outcomes-based-accountability/) adalah disiplin memilih KPI
tingkat populasi yang tidak dapat didistorsi secara sepihak oleh satu tim.

## Jebakan Umum

- **Memilih metrik yang mudah dikumpulkan dibandingkan yang bermakna**: waktu jawab panggilan
  trivial untuk dicatat; apakah panggilan tersebut menyelesaikan masalah warga tidak — tetapi hanya
  yang kedua yang merupakan hasil. Tolaklah secara default ke apa yang sudah dipancarkan sistem.
- **Tidak ada metrik penyeimbang**: KPI apa pun yang terkait dengan uang atau reputasi akan
  dimanipulasi pada marginnya; rilis dengan sebuah metrik berpasangan yang menangkap vektor
  manipulasi yang mungkin sebelum mempublikasikannya.
- **Mendefinisikan ulang metrik tanpa sebuah changelog**: menukar "panggilan diterima" dengan
  "panggilan dijawab" untuk menyanjung sebuah tren menghancurkan kredibilitas deret waktu tersebut
  pada saat itu ditemukan — selalu publikasikan sebuah changelog definisi berdampingan dengan
  angka-angka tersebut.
- **Mencampuradukkan aktivitas dengan hasil**: menghitung inspeksi yang diselesaikan adalah sebuah
  keluaran; menghitung tempat usaha yang dibawa masuk ke kepatuhan lebih mendekati hasil (lihat
  [luaran vs keluaran](../outcomes-vs-outputs/)).

## Sumber

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
