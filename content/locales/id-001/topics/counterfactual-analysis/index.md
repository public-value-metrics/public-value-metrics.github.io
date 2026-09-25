# Analisis Kontrafaktual

Sebuah kontrafaktual adalah estimasi tentang apa yang akan terjadi tanpa adanya sebuah intervensi.
Tanpanya, perubahan yang teramati setelah sebuah program diluncurkan tidak dapat dibedakan dari
perubahan yang akan tetap terjadi — tanpa kontrafaktual, tidak ada bukti efek, betapapun meyakinkan
tampilan angka sebelum-dan-sesudahnya. Magenta Book milik HM Treasury memperlakukan penyusunan
kontrafaktual yang kredibel sebagai tugas metodologis inti dari evaluasi dampak, lebih penting
daripada pilihan desain tunggal lainnya.

## Mengapa Ini Penting

"Kejahatan turun 15% pada tahun setelah kami memperkenalkan program tersebut" bukanlah bukti bahwa
program tersebut berhasil kecuali Anda mengetahui apa yang akan terjadi pada kejahatan tanpanya —
kejahatan mungkin akan tetap turun 20% karena tren ekonomi atau demografis yang tidak terkait,
artinya program tersebut sebenarnya membuat keadaan lebih buruk relatif terhadap kontrafaktual,
meskipun angka mentahnya membaik. Ini adalah kesalahan analitis paling umum dalam klaim dampak
sektor publik dan sosial: mengira perbandingan sebelum/sesudah sebagai bukti kausalitas. Magenta
Book secara eksplisit menyatakan bahwa evaluasi dampak ada untuk menjawab sebuah pertanyaan
kontrafaktual — "perbedaan apa yang dibuat oleh intervensi ini?" — dan menjawabnya memerlukan
estimasi, bukan sekadar deskripsi, dari dunia yang tidak terjadi.

Metode yang berbeda menyusun kontrafaktual dengan tingkat keyakinan yang berbeda, dan panduan
evaluasi pemerintah memeringkatnya sesuai. Uji coba terkontrol acak (randomized controlled trials,
RCT), di mana individu atau wilayah secara acak ditugaskan untuk menerima sebuah intervensi atau
tidak, menghasilkan kontrafaktual terkuat karena pengacakan memastikan kelompok perlakuan dan
kontrol berbeda, rata-rata, hanya pada penerimaan intervensi tersebut. Cabinet Office dan What Works
Network telah mempromosikan RCT di seluruh kebijakan publik Inggris sejak laporan "Test, Learn,
Adapt" tahun 2012 oleh Behavioural Insights Team, justru karena desain yang lebih lemah rentan
terhadap perancu (confounding) — perbedaan yang teramati bisa jadi mencerminkan siapa yang memilih
untuk berpartisipasi, bukan efek dari program tersebut. Di mana pengacakan tidak praktis atau tidak
etis (seperti yang sering terjadi pada program dengan hak statutori, atau untuk perubahan kebijakan
seluruh populasi), Magenta Book menetapkan hierarki eksplisit dari alternatif yang lebih lemah namun
tetap berguna: kelompok pembanding yang dicocokkan, desain difference-in-differences, diskontinuitas
regresi di sekitar ambang batas kelayakan, dan, sebagai pilihan terakhir, perbandingan sebelum/
sesudah sederhana — secara jelas ditandai sebagai bentuk bukti terlemah, rentan mencampuradukkan
efek program dengan efek dari segala sesuatu yang lain yang berubah pada waktu yang sama.

## Matematika

Kerangka kontrafaktual, berlaku di seluruh metode:

```
Dampak yang diestimasi = Hasil(dengan intervensi) − Hasil(kontrafaktual:
                          tanpa intervensi)

BUKAN:
Dampak yang diestimasi ≠ Hasil(sesudah) − Hasil(sebelum)   [mencampuradukkan
                                            waktu dengan perlakuan]
```

Difference-in-differences, salah satu desain kuasi-eksperimental paling umum dalam evaluasi
pemerintah, mengisolasi efek perlakuan dengan mengurangkan perubahan sebelum/sesudah kelompok
pembanding sendiri:

```
Estimasi DiD = [Hasil(diperlakukan, sesudah) − Hasil(diperlakukan, sebelum)]
             − [Hasil(pembanding, sesudah) − Hasil(pembanding, sebelum)]
```

Ini menghilangkan tren apa pun yang sama bagi kedua kelompok (misalnya pergeseran ekonomi nasional
yang memengaruhi semua orang), menyisakan hanya perubahan diferensial yang dapat diatribusikan pada
intervensi tersebut.

## Contoh Perhitungan

**Program ketenagakerjaan, sebelum/sesudah (desain lemah)**: sebuah skema dukungan kerja melaporkan
bahwa ketenagakerjaan peserta naik dari 40% menjadi 55% dalam satu tahun — kesimpulan naif "+15 poin
persentase karena program tersebut."

**Program yang sama, difference-in-differences (desain lebih kuat)**: sebuah kelompok pembanding
yang dicocokkan dari bukan-peserta serupa, diambil dari pasar tenaga kerja lokal yang sama,
menunjukkan ketenagakerjaan naik dari 38% menjadi 47% selama tahun yang sama (sebuah pemulihan
ekonomi nasional sedang berlangsung).

```
Perubahan kelompok diperlakukan:  55% − 40% = +15 poin persentase
Perubahan kelompok pembanding:    47% − 38% = +9 poin persentase

Estimasi DiD (efek program sejati) = 15 − 9 = +6 poin persentase
```

Efek yang dapat diatribusikan secara jujur adalah 6 poin persentase, bukan 15 — lebih dari separuh
perbaikan sebelum/sesudah yang tampak akan tetap terjadi terlepas dari program tersebut, didorong
oleh pemulihan ekonomi yang sama yang mengangkat kelompok pembanding.

**Diskontinuitas regresi, ambang kelayakan**: sebuah skema hibah hanya tersedia bagi bisnis dengan
kurang dari 50 karyawan. Membandingkan hasil untuk bisnis tepat di bawah ambang batas (45–49
karyawan, memenuhi syarat) dengan bisnis tepat di atasnya (50–54 karyawan, tidak memenuhi syarat)
memberikan kontrafaktual yang kredibel karena bisnis di kedua sisi batas administratif yang
sembarangan pada dasarnya serupa — ambang batas tersebut, bukan karakteristik bisnis yang mendasari,
yang menentukan kelayakan. Perbedaan hasil rata-rata £2.000 antara kedua kelompok, teramati hanya
pada ambang batas tersebut, dapat diatribusikan pada hibah dengan keyakinan yang jauh lebih besar
daripada perbandingan sederhana dari semua bisnis yang memenuhi syarat versus semua yang tidak
memenuhi syarat (yang berbeda secara sistematis dalam ukuran).

## Kaitan dengan Rekayasa Perangkat Lunak

Pemikiran kontrafaktual seharusnya membentuk cara sistem pelacakan dampak dan pipeline evaluasi
untuk perangkat lunak pemerintah dan sektor sosial dirancang:

- Bangun penangkapan kelompok pembanding ke dalam sebuah sistem sejak awal — mencatat siapa yang
  memenuhi syarat tetapi tidak terdaftar, atau sebuah kohort bukan-peserta yang dicocokkan — alih-
  alih menambahkannya belakangan setelah sebuah program sudah berjalan dan hanya data sebelum/
  sesudah yang ada.
- Di mana pengacakan memungkinkan (sebuah peluncuran bertahap, sebuah layanan digital yang
  diaktifkan bagi sebagian pengguna sebelum yang lain), instrumentasikan sistem untuk memelihara
  penugasan acak sebagai bidang yang dapat diquery; sebuah peluncuran bertahap secara tidak sengaja
  menghancurkan nilai evaluasinya sendiri jika urutan penugasan tidak dicatat.
- Ini adalah metode fondasional di balik [metode evaluasi dampak](../impact-evaluation-methods/) dan
  yang membedakannya dari [evaluasi dampak vs evaluasi proses](../impact-evaluation-vs-process-evaluation/),
  yang terakhir menanyakan apakah sebuah program disampaikan sebagaimana dimaksudkan alih-alih
  apakah program tersebut menyebabkan sebuah efek.
- [Additionalitas dan bobot mati](../additionality-and-deadweight/) dan
  [perpindahan dan atribusi](../displacement-and-attribution/) keduanya, pada akarnya, merupakan
  pertanyaan kontrafaktual — bobot mati adalah "apa yang akan terjadi pada hasil spesifik ini tanpa
  intervensi", diterapkan pada tingkat penyesuaian alih-alih desain evaluasi penuh.

## Jebakan Umum

- **Memperlakukan sebelum/sesudah sebagai bukti kausalitas.** Ini adalah kesalahan paling umum dan
  paling konsekuensial dalam pelaporan dampak sektor publik dan sosial; sebuah perubahan
  sebelum/sesudah mencampuradukkan efek program dengan segala sesuatu yang lain yang berubah selama
  periode yang sama.
- **Menggunakan kelompok pembanding yang berbeda secara sistematis dari kelompok yang diperlakukan.**
  Sebuah kelompok pembanding yang dicocokkan harus benar-benar serupa pada karakteristik yang
  relevan (lihat hierarki metode analisis kontrafaktual dalam Magenta Book); membandingkan peserta
  program (yang memilih untuk bergabung, dan sering lebih termotivasi) dengan bukan-peserta (yang
  tidak) berisiko bias seleksi yang menyamar sebagai efek program.
- **Menghancurkan peluang pengacakan melalui desain penyampaian yang buruk.** Sebuah peluncuran
  bertahap atau acak hanya mempertahankan nilai evaluasinya jika penugasan benar-benar acak dan
  tercatat — membiarkan manajer lokal memilih siapa yang duluan mengalahkan tujuannya.
- **Mengklaim presisi berlebihan dari desain yang lemah.** Sebuah estimasi sebelum/sesudah
  seharusnya disajikan sebagai indikatif, bukan sebagai ukuran efek yang terukur; hierarki bukti
  Magenta Book ada agar kekuatan sebuah klaim sesuai dengan kekuatan desain yang menghasilkannya.

## Sumber

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
