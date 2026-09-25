# Biaya Peluang dalam Belanja Publik

Biaya peluang adalah nilai dari alternatif terbaik yang dilewatkan ketika sebuah badan publik
mengomitmenkan uang, waktu staf, atau modal politik pada satu opsi alih-alih opsi lain. Dalam sebuah
departemen dengan anggaran tetap, setiap poundsterling yang dibelanjakan pada satu program adalah
satu poundsterling yang tidak dapat dibelanjakan pada program terbaik berikutnya — biaya sejati dari
sebuah keputusan bukanlah apa yang dibelanjakannya, melainkan apa yang digantikannya.

## Mengapa Ini Penting

Anggaran publik dibatasi tunai dalam sebuah periode tinjauan belanja, sehingga — tidak seperti
sebuah perusahaan swasta yang berkembang — sebuah departemen pemerintah tidak dapat begitu saja
"menemukan lebih banyak uang" untuk ide yang bagus; mendanainya berarti membatalkan pendanaan
sesuatu yang lain. Green Book HM Treasury memperlakukan ini sebagai fondasional: setiap penilaian
diwajibkan membandingkan sebuah intervensi terhadap baseline "lakukan minimum" *dan* terhadap
penggunaan alternatif realistis dari sumber daya yang sama, justru karena pertanyaan sesungguhnya
yang ditanyakan tim belanja Treasury tidak pernah "apakah ini baik?" tetapi "apakah ini lebih baik
daripada apa lagi yang bisa dibeli uang ini?" Prinsip penilaian inti Green Book — bahwa sumber daya
publik seharusnya mengalir ke intervensi dengan nilai sosial bersih tertinggi per poundsterling —
adalah biaya peluang yang dinyatakan sebagai kebijakan.

Ini mudah dinyatakan dan sulit diterapkan karena "alternatif terbaik berikutnya" jarang terlihat
dalam satu kasus bisnis tunggal. Sebuah program hibah £2 juta untuk ketenagakerjaan pemuda
dibandingkan, dalam kasus bisnis tersebut, dengan tidak melakukan apa-apa — tetapi pembanding yang
jujur adalah intervensi ketenagakerjaan pemuda terbaik berikutnya, atau bahkan penggunaan terbaik
berikutnya dari £2 juta di mana pun dalam portofolio tersebut, termasuk belanja non-ketenagakerjaan.
Magenta Book (HM Treasury, 2020) secara eksplisit memperingatkan bahwa evaluasi yang membandingkan
"dengan intervensi" terhadap "tanpa intervensi" meremehkan ambang batas yang harus dilewati sebuah
intervensi, karena "tanpa intervensi ini" tidak sama dengan "tanpa apa pun sama sekali" — uang yang
dilepaskan mendanai sesuatu yang lain.

## Matematika

```
Biaya peluang memilih A = nilai dari alternatif B terbaik yang
                            dilewatkan

Nilai publik bersih A = nilai(A) − nilai(B), bukan nilai(A) − 0
```

Tidak ada rumus universal karena alternatif yang dilewatkan bersifat khusus konteks, tetapi
disiplinnya bersifat umum: identifikasi penggunaan terbaik berikutnya yang realistis dari baris
anggaran yang sama (bukan "tidak melakukan apa-apa" yang ideal), hargakan dengan basis yang sama
(dimonetisasi jika memungkinkan, sesuai
[analisis biaya-manfaat sosial](../social-cost-benefit-analysis/)), dan kurangkan.

## Contoh Perhitungan

**Baris anggaran departemen**: sebuah dana transformasi digital £5 juta dapat membiayai tepat satu
dari dua proposal tahun anggaran ini.

- *Opsi A*: sebuah platform manajemen kasus baru, manfaat termonetisasi £7,2 juta selama 5 tahun
  (penghematan efisiensi plus penyelesaian kasus yang lebih cepat).
- *Opsi B*: sebuah layanan verifikasi identitas bersama di tiga departemen, manfaat termonetisasi
  £6,4 juta selama 5 tahun.

Sebuah kasus bisnis naif untuk A membandingkan £7,2 juta manfaat terhadap £5 juta biaya dan
melaporkan rasio biaya-manfaat 1,44:1 — tampak kuat. Tetapi karena A dan B bersaing untuk £5 juta
yang sama, biaya peluang memilih A adalah manfaat £6,4 juta B yang dilewatkan. Kasus *bersih* untuk
A dibandingkan alternatif realistis hanya £7,2 juta − £6,4 juta = £0,8 juta, bukan klaim utama
£7,2 juta penuh. Jika sebuah opsi ketiga, C, menawarkan manfaat £7,5 juta untuk £5 juta yang sama,
mendanai A dibandingkan C akan menghancurkan £0,3 juta nilai publik meskipun kasus bisnis A sendiri
terlihat sepenuhnya dibenarkan secara terisolasi.

**Waktu staf pemerintah daerah**: tim data tiga orang milik sebuah dewan kota dapat membangun baik
sebuah dasbor daftar tunggu perumahan (diestimasi menghemat 400 jam-pejabat/tahun, dihargai £28/jam
= £11.200/tahun) atau sebuah alat triase penipuan tunjangan (diestimasi mencegah £85.000/tahun dalam
pembayaran yang salah). Membangun dasbor tersebut memiliki biaya peluang £85.000/tahun yang
dilewatkan, bukan sekadar biaya gaji tim data tersebut — biaya sejati dari pembangunan internal
"gratis" tersebut adalah manfaat yang jauh lebih besar yang bisa dihasilkan tim tersebut di tempat
lain.

## Kaitan dengan Rekayasa Perangkat Lunak

Kapasitas rekayasa di dalam sebuah badan publik itu sendiri adalah anggaran yang terbatas —
kapasitas sprint, bukan poundsterling — dan disiplin yang sama berlaku secara langsung:

- Selalu sebutkan pembandingnya: kasus bisnis sebuah fitur seharusnya menyatakan apa lagi yang bisa
  disampaikan dengan minggu-tim yang sama, bukan hanya pengembaliannya sendiri.
- Perlakukan "kami memiliki kapasitas rekayasa cadangan" sebagai awal dari sebuah analisis biaya
  peluang, bukan akhirnya — kapasitas cadangan tetap memiliki penggunaan alternatif terbaik,
  bahkan jika penggunaan itu adalah pelunasan utang teknis (lihat
  [utang teknis sebagai erosi nilai publik](../technical-debt-as-public-value-erosion/)).
- Kaitkan ini secara langsung dengan [nilai untuk uang](../value-for-money/): uji "ekonomi" VFM
  tidak bermakna tanpa pembanding biaya peluang yang jujur, dan dengan
  [biaya keterlambatan dalam program publik](../cost-of-delay-in-public-programmes/), yang
  menghargakan dimensi waktu dari logika alternatif-yang-dilewatkan yang sama.

## Jebakan Umum

- **Membandingkan terhadap "tidak melakukan apa-apa" alih-alih alternatif terbaik berikutnya.**
  Green Book mensyaratkan baseline "lakukan minimum" justru karena biaya peluang sejati jarang
  nol; sebuah kasus bisnis yang hanya melewati ambang "tidak melakukan apa-apa" belum menunjukkan
  bahwa itu mengungguli alternatif realistis.
- **Mengabaikan persaingan lintas departemen untuk pot yang sama.** Baris anggaran yang terlihat
  terpagari dalam satu direktorat sering bersaing pada tingkat yang lebih tinggi (sebuah tinjauan
  belanja, sebuah program modal) di mana biaya peluang sejati direalisasikan.
- **Mengasumsikan waktu staf yang dilepaskan tidak memiliki nilai lebih lanjut.** Waktu yang
  "dihemat" hanya menciptakan nilai jika dialihgunakan pada sesuatu yang bernilai; jika penggunaan
  alternatif tersebut tidak ada, penghematan tersebut bersifat nosional.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
