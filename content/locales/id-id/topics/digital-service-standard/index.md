# Standar Layanan Digital

GOV.UK Service Standard adalah gerbang yang harus dilewati setiap layanan digital pemerintah pusat
sebelum dapat go-live: 14 poin yang dipublikasikan, dinilai oleh panel independen pada akhir setiap
fase penyampaian. Ini adalah mekanisme yang mengubah "bangun layanan publik yang baik" dari sebuah
slogan menjadi keputusan lulus/gagal dengan jejak dokumen — dan keturunan langsung dari mandat
"digital secara default" Government Digital Strategy tahun 2012.

## Mengapa Ini Penting

Sebelum Service Standard ada, kegagalan TI pemerintah jarang terlihat sampai peluncuran, dan jarang
dapat diatribusikan pada sebuah keputusan yang dapat ditunjuk siapa pun. Government Digital Strategy
tahun 2012 mengikat departemen untuk merancang ulang 25 layanan transaksional yang menghadapi publik
dengan volume tertinggi sebagai "digital secara default", dan mendukung komitmen tersebut dengan
sebuah mekanisme kepatuhan: layanan tidak dapat go-live di GOV.UK tanpa lolos penilaian layanan
terhadap apa yang saat itu adalah standar 26 poin (dikonsolidasikan menjadi 18 pada 2019, dan kini
standar 14 poin yang berlaku hari ini, mencakup tiga kelompok — memahami kebutuhan pengguna,
menyediakan layanan yang baik, dan menggunakan teknologi yang tepat). Sebuah penilaian layanan adalah
sebuah peristiwa nyata: sebuah panel penilai GDS atau departemen meninjau bukti, mempertanyakan tim,
dan mengeluarkan putusan lulus, gagal, atau "tidak terpenuhi" terhadap setiap poin, dipublikasikan
pada halaman penilaian layanan tersebut. Gagal dalam sebuah penilaian menghalangi layanan berpindah
dari beta privat ke beta publik, atau dari beta ke aktif — ini adalah gerbang sungguhan, bukan
sekadar tinjauan.

## Matematika

Service Standard adalah sebuah kerangka kerja, bukan rumus, tetapi ia berfungsi sebagai struktur
keputusan bertahap-gerbang:

```
Discovery  → Penilaian Alpha  → Penilaian Beta  → Penilaian Aktif
             (tidak wajib      (wajib sebelum      (wajib sebelum
              untuk semua       peluncuran beta      menghapus tag
              layanan, tetapi   publik)              "beta" dan menutup
              direkomendasikan)                      kanal lama)

Setiap penilaian: bukti + wawancara tim → putusan panel per poin
  Terpenuhi / Sebagian terpenuhi / Tidak terpenuhi
Hasil keseluruhan: Lulus / Lulus dengan syarat / Gagal (perlu
  penilaian ulang)

Biaya sebuah kegagalan ≈ biaya siklus sprint berikutnya untuk
              remediasi
              + keterlambatan pada [penghematan pergeseran kanal](../channel-shift-savings/)
                yang menjadi alasan layanan tersebut didanai
```

Poin 10 ("tentukan seperti apa keberhasilan itu, dan publikasikan data kinerja") adalah yang mengalir
ke [biaya per transaksi](../cost-per-transaction/) dan
[standar layanan dan metrik transaksi](../service-standards-and-transaction-metrics/) — Standar ini
mewajibkan pengukuran, bukan hanya layanan itu sendiri.

## Contoh Perhitungan

**Layanan aplikasi perumahan pemerintah daerah**: sebuah tim dewan kota mencapai penilaian betanya
dengan sebuah layanan yang memenuhi 11 dari 14 poin tetapi gagal pada poin 5 ("pastikan semua orang
dapat menggunakan layanan tersebut") karena tidak ada jalur digital-terbantu bagi pemohon tanpa akses
internet, dan gagal pada poin 9 karena data pribadi dicatat dalam teks polos pada jejak kesalahan
aplikasi.

```
Biaya langsung dari kegagalan:
  Slot penilaian ulang: penantian 6–8 minggu untuk panel berikutnya
    yang tersedia
  Sprint remediasi: 2 pengembang × 3 minggu × £550/hari ≈ £34.650
  Desain kanal digital-terbantu: 1 peneliti × 2 minggu ≈ £5.000

Biaya keterlambatan: layanan diramalkan menggeser 40% dari 18.000/
tahun pertanyaan perumahan dari panggilan telepon £8,50 ke transaksi
digital £0,20
  = 7.200 × (£8,50 − £0,20) = £59.760/tahun yang hilang, dipro-rata
    untuk keterlambatan ~2 bulan ≈ £9.960

Total biaya dari penilaian yang gagal ≈ £49.610
```

Inti dari aritmetika ini bukanlah presisinya — melainkan bahwa sebuah penilaian yang gagal memiliki
harga yang nyata dan dapat dihitung, itulah tepatnya mengapa gerbang tersebut memiliki taring.

## Kaitan dengan Rekayasa Perangkat Lunak

Bagi insinyur, Standar tersebut terbaca sebagai daftar periksa arsitektur dan penyampaian sama
banyaknya seperti dokumen kebijakan: poin 11 ("pilih alat dan teknologi yang tepat") dan poin 12
("buat kode sumber baru bersifat terbuka") adalah keputusan rekayasa langsung, dan poin 14
("operasikan layanan yang andal") mensyaratkan SLO dan proses insiden yang sama seperti yang
dibutuhkan sistem produksi mana pun. Ini adalah kerangka payung untuk bab ini —
[biaya per transaksi](../cost-per-transaction/) dan
[penghematan pergeseran kanal](../channel-shift-savings/) adalah apa yang berusaha dilindungi Standar
tersebut secara finansial, [inklusi digital](../digital-inclusion/) adalah apa yang dijamin oleh
poin 5, dan komponen [pemerintah sebagai platform](../government-as-a-platform/) (GOV.UK Notify,
Pay, One Login) memenuhi poin 13 ("gunakan dan berkontribusi pada standar terbuka, komponen umum,
dan pola") sebagian besar secara default. Lihat juga
[membangun vs membeli di pemerintahan](../build-vs-buy-in-government/) untuk bagaimana poin "alat
yang tepat" berperan dalam keputusan pengadaan.

## Jebakan Umum

- **Memperlakukan penilaian sebagai kotak centang kepatuhan hari peluncuran**: tim yang pertama kali
  membaca 14 poin tersebut seminggu sebelum penilaian betanya gagal secara dapat diprediksi; Standar
  ini dimaksudkan untuk membentuk keputusan sejak discovery ke depan, bukan mengauditnya secara
  retrospektif.
- **Menilai prototipe, bukan layanan**: sebuah demo yang mulus dapat lulus tinjauan yang akan gagal
  dilalui oleh versi layanan yang aktif, inklusif-digital-terbantu, dan terkelola-insiden — penilai
  dimaksudkan untuk menyelidiki kesenjangan ini, tetapi layanan kecil yang disertifikasi sendiri
  sering melewatkannya.
- **Tidak ada penilaian ulang sebelum penskalaan**: sebuah layanan yang dinilai pada peluncuran 5%
  tidak secara otomatis tetap patuh pada 100% — beban, permintaan kegagalan, dan pengguna kasus tepi
  semuanya berubah.
- **Mencampuradukkan Service Standard dengan sistem desain**: komponen GOV.UK Design System memenuhi
  beberapa poin (konsistensi, aksesibilitas) tetapi Standar tersebut juga mencakup struktur tim,
  praktik agile, dan etika data — sebuah layanan yang bergaya bagus tetap dapat gagal pada poin 2, 6,
  atau 9.

## Sumber

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
