# Metode Evaluasi Dampak

Metode evaluasi dampak adalah desain statistik dan eksperimental yang digunakan untuk mengestimasi
apa yang sebenarnya disebabkan oleh sebuah kebijakan atau program, berbeda dari apa yang akan tetap
terjadi bagaimanapun juga — uji coba terkontrol acak (RCT), difference-in-differences, propensity
score matching, dan desain diskontinuitas regresi adalah empat yang paling umum digunakan dalam
kebijakan publik Inggris. Metode-metode ini ada karena sebagian besar intervensi pemerintah tidak
dapat diuji di dalam laboratorium: Anda tidak dapat mengacak kota mana yang mendapat rute bus baru
dengan cara yang sama Anda dapat mengacak pasien mana yang mendapat sebuah obat, sehingga
metode-metode ini meminjam logika kausal yang sama tanpa selalu memerlukan penugasan acak.

## Mengapa Ini Penting

Magenta Book milik HM Treasury, Annex A tentang metode kuasi-eksperimental, adalah panduan kanonis
pemerintah Inggris untuk memilih di antara desain-desain ini, dan badan-badan seperti Education
Endowment Foundation dan What Works Centre for Local Economic Growth melembagakan hierarki bukti
yang dibangun di sekitarnya — RCT di mana pengacakan layak dilakukan dan etis, desain
kuasi-eksperimental di mana tidak. Pilihan metode bukanlah renungan teknis belakangan: ini
menentukan apakah sebuah evaluasi dapat menjawab "apakah program ini menyebabkan ini?" atau hanya
"apakah ini terjadi setelah program dimulai?", yang merupakan pertanyaan yang sama yang dibangun
untuk dipaksakan oleh [analisis kontrafaktual](../counterfactual-analysis/) kepada praktisi untuk
ditanyakan sebelum evaluasi apa pun ditugaskan.

## Matematika

```
RCT:
  Dampak = rata-rata(hasil | kelompok perlakuan) − rata-rata(hasil |
           kelompok kontrol)
  (valid karena penugasan pada perlakuan bersifat acak)

Difference-in-differences (DiD):
  Dampak = [hasil_sesudah(diperlakukan) − hasil_sebelum(diperlakukan)]
         − [hasil_sesudah(kontrol) − hasil_sebelum(kontrol)]
  (memerlukan asumsi "tren paralel": kelompok diperlakukan dan
   kontrol akan bergerak bersama tanpa intervensi tersebut)

Propensity score matching (PSM):
  1. Estimasi P(perlakuan = 1 | kovariat X) untuk setiap unit → skor
     propensitas
  2. Cocokkan unit yang diperlakukan dengan unit yang tidak diperlakukan
     dengan skor propensitas serupa
  3. Dampak = rata-rata(hasil | diperlakukan) − rata-rata(hasil |
     kontrol yang dicocokkan)

Desain diskontinuitas regresi (RDD):
  Dampak = lonjakan pada hasil yang teramati pada ambang kelayakan,
           membandingkan unit tepat di atas vs tepat di bawah batas
```

## Contoh Perhitungan

**Pemerintah daerah (difference-in-differences untuk sebuah program keluarga bermasalah)**: hasilnya
adalah kehadiran sekolah. Wilayah yang diperlakukan bergerak dari 84% menjadi 89% kehadiran (+5 poin
persentase) selama periode program; wilayah yang sebanding tetapi tidak diperlakukan bergerak dari
85% menjadi 87% (+2 poin persentase) selama periode yang sama. Estimasi dampak DiD: 5 − 2 = +3 poin
persentase yang dapat diatribusikan pada program tersebut. Diterapkan pada kohort 2.000 murid di
wilayah yang diperlakukan, ini konsisten dengan sekitar 60 murid tambahan (3% × 2.000) yang mencapai
kategori kehadiran yang lebih tinggi, sebuah ekstrapolasi yang seharusnya dilaporkan dengan
peringatan tren-paralelnya, bukan sebagai jumlah kepala yang presisi.

**Lembaga amal (propensity score matching untuk sebuah lembaga amal kesiapan kerja)**: 300 peserta
program dicocokkan dengan 300 individu dari dataset administratif yang lebih besar menggunakan skor
propensitas yang dibangun dari usia, riwayat pekerjaan sebelumnya, dan tingkat kualifikasi. Tingkat
ketenagakerjaan dua belas bulan: kelompok diperlakukan yang dicocokkan 46%, kelompok pembanding yang
dicocokkan 33%. Estimasi dampak PSM: 46% − 33% = +13 poin persentase yang dapat diatribusikan pada
program tersebut, bersyarat tidak ada perancu yang tak teramati (seperti motivasi) yang mendorong
baik partisipasi maupun hasil.

## Kaitan dengan Rekayasa Perangkat Lunak

Apakah desain-desain ini layak dilakukan nanti sangat bergantung pada keputusan rekayasa data yang
dibuat sejak awal. RDD membutuhkan variabel berjalan yang tercatat secara akurat dan batas kelayakan
yang benar-benar bersih; DiD membutuhkan data panel yang sebanding seiring waktu untuk baik wilayah
yang diperlakukan maupun pembanding, yang berarti join yang konsisten di seluruh sistem dan tahun;
PSM membutuhkan data kovariat baseline yang kaya yang ditangkap sebelum perlakuan, bukan
direkonstruksi belakangan. Sebuah model data yang dirancang berdampingan dengan
[teori perubahan](../theory-of-change/) dan [model logika](../logic-model/) sejak awal — menangkap
kovariat baseline, tanggal, dan catatan yang memenuhi syarat sebagai pembanding — adalah yang
membuat evaluasi dampak yang ketat mungkin dilakukan nanti, alih-alih perjuangan post-hoc yang
mahal. Lihat [evaluasi dampak vs evaluasi proses](../impact-evaluation-vs-process-evaluation/)
untuk pertanyaan pelengkap yang tidak dijawab metode-metode ini dengan sendirinya.

## Jebakan Umum

- **Memaksakan sebuah RCT di mana tidak layak atau tidak etis**, atau sebaliknya tidak pernah
  mempertimbangkan sebuah desain kuasi-eksperimental ketika peluang genuine untuknya — sebuah batas
  kebijakan, sebuah peluncuran bertahap — tersedia dan tidak digunakan.
- **Mengabaikan asumsi tren paralel dalam DiD.** Jika wilayah pembanding sudah menyimpang dari
  wilayah yang diperlakukan sebelum intervensi, perbandingan dua titik tersebut terkontaminasi;
  periksa tren-sebelum, bukan hanya sebelum/sesudah.
- **Mencocokkan hanya pada kovariat teramati dalam PSM.** Seleksi yang tak teramati, seperti
  motivasi peserta, dapat membiaskan estimasi bahkan ketika kovariat teramati seimbang dengan baik.
- **Manipulasi variabel berjalan dalam RDD.** Jika orang dapat memengaruhi skor mereka agar jatuh
  tepat di dalam sebuah ambang kelayakan, diskontinuitas tersebut tidak lagi mengisolasi sebuah
  efek kausal.

## Sumber

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
