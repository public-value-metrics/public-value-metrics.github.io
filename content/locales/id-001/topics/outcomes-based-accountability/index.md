# Akuntabilitas Berbasis Hasil (OBA)

Akuntabilitas Berbasis Hasil (Outcomes-Based Accountability, OBA), juga disebut Akuntabilitas
Berbasis Hasil (Results-Based Accountability, RBA), adalah kerangka kerja Mark Friedman untuk
memisahkan dua pertanyaan yang biasa dikaburkan bersama oleh pelaporan sektor publik: "apakah
populasi tersebut sejahtera?" (akuntabilitas populasi) dan "apakah program spesifik ini bekerja
dengan baik?" (akuntabilitas kinerja). Mencampuradukkan keduanya adalah, menurut penuturan Friedman,
alasan tunggal paling umum mengapa program yang dikelola dengan baik disalahkan atas tren populasi
yang tidak pernah memiliki kekuatan untuk digerakkan.

## Mengapa Ini Penting

Friedman memaparkan kerangka kerja ini dalam *Trying Hard Is Not Good Enough* (2005), berargumen
bahwa sebagian besar pelaporan publik baik menenggelamkan pengambil keputusan dalam statistik
tingkat populasi yang tidak dikendalikan satu lembaga pun (tingkat kehamilan remaja, tingkat
pengangguran, harapan hidup), atau menenggelamkan mereka dalam jumlah aktivitas tingkat program
(klien yang dilihat, rujukan yang dibuat) yang tidak mengatakan apa-apa tentang apakah hidup siapa
pun membaik. Kontribusi RBA adalah kosakata yang kecil dan disiplin yang menjaga keduanya tetap
terpisah: hasil populasi (kondisi kesejahteraan bagi seluruh populasi, seperti "anak-anak lahir
sehat") tidak dimiliki satu lembaga pun dan membutuhkan banyak mitra bergerak bersama; ukuran
kinerja (seberapa baik sebuah program spesifik melayani klien spesifiknya) dimiliki satu lembaga dan
seharusnya dinilai hanya terhadap apa yang benar-benar dapat dipengaruhi lembaga tersebut. "Tiga
pertanyaan kinerja" Friedman — berapa banyak yang kami lakukan, seberapa baik kami melakukannya, dan
apakah ada yang menjadi lebih baik? — kini tertanam di seluruh kontrak layanan manusia negara bagian
dan county AS dan, melalui konsultan dan perangkat yang selaras dengan RBA, Clear Impact, banyak
digunakan dalam komisioning pemerintah daerah Inggris dan Persemakmuran. Taruhannya bersifat
praktis: sebuah program perumahan seharusnya tidak didefunding karena tingkat tunawisma kota naik
dari sebab makroekonomi di luar jangkauannya, tetapi sepenuhnya seharusnya didefunding jika
klien-kliennya sendiri tidak dirumahkan.

## Matematika

```
Akuntabilitas populasi (gambaran besar yang dibagikan sebuah
komunitas, wilayah, atau bangsa):
  Hasil        — sebuah kondisi kesejahteraan (misalnya "warga
                 aman secara ekonomi")
  Indikator    — sebuah ukuran kondisi tersebut (misalnya tingkat
                 pengangguran, pendapatan rumah tangga median)
  → tidak ada satu program yang memiliki indikator tersebut;
    pergerakan membutuhkan banyak kontributor

Akuntabilitas kinerja (apa yang menjadi tanggung jawab satu program):
  Berapa banyak yang kami lakukan?  — volume aktivitas (klien
                                       dilayani, unit disampaikan)
  Seberapa baik kami melakukannya?  — kualitas/efisiensi (% yang
                                       menyelesaikan program, biaya
                                       per klien)
  Apakah ada yang menjadi lebih baik? — hasil yang penting (% dalam
                                       ketenagakerjaan 6 bulan setelah
                                       program, sebelum/sesudah atau
                                       terhadap kelompok pembanding)

Sebuah program dinilai pada pertanyaan kinerja ketiga, tidak pernah
pada indikator populasi secara langsung, kecuali skala dan
desainnya dapat secara masuk akal menggerakkannya sendirian.
```

## Contoh Perhitungan

**Program dukungan ketenagakerjaan yang didanai kota**, 500 peserta/tahun, dikontrak oleh sebuah
pemerintah daerah di bawah kerangka kinerja gaya RBA:

```
Indikator populasi (konteks, bukan kartu skor program):
  Tingkat pengangguran kota: 6,2% (naik dari 5,8% tahun sebelumnya,
  didorong oleh penutupan pabrik di luar kendali program)

Ukuran kinerja (akuntabilitas sesungguhnya program tersebut):
  Berapa banyak: 500 peserta terdaftar (target 480) — terpenuhi
  Seberapa baik: tingkat penyelesaian 78%; biaya per penyelesai =
                 £340.000 / 390 penyelesai ≈ £872
  Lebih baik:    dari 390 penyelesai, 260 dalam ketenagakerjaan
                 berkelanjutan pada 6 bulan = 66,7% dibandingkan
                 41% kelompok pembanding yang dicocokkan (lihat
                 counterfactual-analysis)
```

Di bawah pembacaan akuntabilitas-populasi, program tersebut terlihat gagal — tingkat pengangguran
kota naik di bawah pengawasannya. Di bawah pembacaan akuntabilitas-kinerja RBA, program tersebut
berhasil: ia mencapai target volumenya, menjaga kualitas tetap stabil, dan menghasilkan hasil
ketenagakerjaan 25,7 poin persentase di atas kelompok pembanding yang dicocokkan, sementara indikator
populasi bergerak karena alasan (penutupan pabrik) yang sepenuhnya di luar kendali program tersebut.

## Kaitan dengan Rekayasa Perangkat Lunak

RBA memetakan langsung ke sebuah perbedaan SRE yang familiar: indikator populasi seperti metrik
North Star tingkat bisnis yang tidak dimiliki satu tim rekayasa pun secara ujung-ke-ujung (pendapatan
perusahaan, pangsa pasar), sementara ukuran kinerja seperti SLO tim sendiri — hal-hal yang benar-benar
digerakkan keputusan desain tim tersebut. Sebuah dasbor yang melaporkan keduanya tanpa memberi label
mana yang mana mengundang justru salah atribusi yang dibangun RBA untuk dicegah: seorang insinyur
on-call disalahkan atas sebuah metrik yang dikendalikan tim dependensi. Saat menugaskan atau
membangun alat pelaporan untuk kontrak hasil, bangun triad "berapa banyak / seberapa baik / lebih
baik" sebagai bidang kelas satu yang dapat difilter secara terpisah alih-alih satu KPI terpadu
tunggal — ini adalah disiplin yang sama seperti memisahkan indikator terdepan dan tertinggal dalam
[KPI sektor publik](../public-sector-kpis/). RBA juga merupakan logika akuntabilitas yang mendasari
[pembayaran berdasarkan hasil dan obligasi dampak sosial](../payment-by-results-and-social-impact-bonds/):
sebuah kontrak PbR hanya dapat secara adil membayar pada ukuran kinerja "lebih baik", tidak pernah
pada indikator populasi, kecuali intervensi tersebut benar-benar merupakan pendorong dominannya.

## Jebakan Umum

- **Membayar atau menghukum sebuah program terhadap indikator populasi yang tidak dapat
  dikendalikannya**: ini adalah kesalahan tunggal yang dimaksudkan untuk dicegah RBA; selalu
  lacak apakah program tersebut adalah kontributor utama atau minor terhadap hasil populasi
  sebelum melekatkan konsekuensi padanya.
- **Melaporkan "berapa banyak" seolah-olah itu "lebih baik"**: jumlah aktivitas (klien yang dilihat)
  adalah data paling mudah dikumpulkan dan paling tidak informatif; bersikeraslah agar pertanyaan
  "apakah ada yang menjadi lebih baik" dijawab dengan data hasil nyata, idealnya terhadap sebuah
  kontrafaktual (lihat [analisis kontrafaktual](../counterfactual-analysis/)).
- **Memperlakukan indikator RBA sebagai tetap selamanya**: metode Friedman secara eksplisit
  bersifat iteratif — sebuah siklus "data, cerita, apa yang berhasil, rencana aksi" — bukan
  latihan desain kartu skor satu kali.
- **Tidak ada kelompok pembanding untuk "lebih baik"**: sebuah perubahan sebelum/sesudah tanpa
  kontrafaktual mencampuradukkan efek program dengan tren yang akan tetap ditunjukkan populasi
  tersebut bagaimanapun juga.

## Sumber

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
