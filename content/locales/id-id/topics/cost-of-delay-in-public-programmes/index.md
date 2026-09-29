# Biaya Keterlambatan dalam Program Publik (CoD)

Biaya Keterlambatan (Cost of Delay, CoD) adalah nilai publik yang hilang per unit waktu selama
sebuah program, layanan, atau perubahan sistem *belum* disampaikan. Ini adalah metrik jembatan
utama dalam bab ini: ia mengonversi "go-live meleset enam bulan" menjadi poundsterling per minggu,
atau menjadi WELLBY per minggu, sehingga keterlambatan dapat diperdebatkan dalam mata uang yang sama
dengan kasus bisnis itu sendiri.

## Mengapa Ini Penting

Aturan Reinertsen — "jika Anda hanya mengukur satu hal, ukurlah Biaya Keterlambatan" — berpindah ke
pemerintahan hampir tanpa perubahan, karena program publik sangat rentan terhadapnya: kasus bisnis
disetujui berdasarkan ramalan aliran manfaat, tetapi aliran tersebut baru mulai mengalir pada
go-live, dan setiap minggu keterlambatan adalah satu minggu nilai yang hilang yang tidak dihargakan
oleh siapa pun dalam register risiko. Pengawasan berulang National Audit Office terhadap peluncuran
Universal Credit (lihat laporan "Rolling Out Universal Credit", <https://www.nao.org.uk/>)
mengilustrasikan pola ini: keterlambatan jadwal dilacak dan dilaporkan, tetapi biaya poundsterling-
per-minggu dari *belum* disampaikannya sistem yang direformasi kepada gelombang pemohon berikutnya
jarang dinyatakan sebagai angka utama, meskipun itulah angka yang seharusnya mendorong prioritisasi
dan eskalasi. Tanpa angka CoD, sebuah program yang tertunda terlihat seperti masalah jadwal bagi
dewan penyampaian; dengan angka tersebut, ia menjadi masalah erosi nilai bagi pejabat akuntansi
(accounting officer).

## Matematika

```
CoD = manfaat per unit waktu yang hilang selama belum disampaikan
      (£/minggu atau WELLBY/minggu)

Total kerugian keterlambatan = CoD × durasi keterlambatan

Aliran manfaat yang dijumlahkan untuk program publik:
  penghematan pelepasan tunai   (pengurangan penipuan/kesalahan,
                                  biaya sementara yang terhindarkan)
+ kapasitas non-tunai yang terbebaskan (jam petugas kasus/pejabat ×
                                          biaya terbebankan)
+ manfaat kesejahteraan         (WELLBY × £13.000/WELLBY, panduan
                                  tambahan kesejahteraan HMT Green
                                  Book, harga 2019)
```

Untuk layanan yang menghadapi warga, nyatakan juga dalam satuan kesejahteraan selain uang — lihat
[tahun kehidupan yang disesuaikan kesejahteraan](../wellbeing-adjusted-life-years/) untuk satuan
yang mendasarinya, dan [biaya peluang dalam belanja publik](../opportunity-cost-in-public-spending/)
untuk apa yang seharusnya bisa didanai oleh poundsterling yang tertunda tersebut.

## Contoh Perhitungan

**Pemerintah daerah**: sebuah peningkatan sistem tunjangan perumahan memotong kesalahan kelebihan
bayar sebesar £150/klaim/tahun di seluruh 20.000 klaim aktif.

```
Manfaat tahunan = 150 × 20.000 = £3.000.000/tahun
CoD = 3.000.000 / 52 ≈ £57.700/minggu
Keterlambatan implementasi 12 bulan menelan biaya 52 × 57.700 ≈
£3.000.000 dalam kesalahan yang dapat dihindari.
```

**Badan pemerintah pusat**: sebuah layanan asesmen tunjangan disabilitas, disampaikan enam bulan
(26 minggu) lebih lambat dari rencana, berarti 200.000 pemohon/tahun menunggu rata-rata tiga minggu
lebih lama untuk sebuah keputusan. Setiap minggu tambahan ketidakpastian finansial dimodelkan
sebagai efek −0,0018 WELLBY (poin kepuasan hidup):

```
Kerugian WELLBY per pemohon = 3 × 0,0018 = 0,0054
Kerugian WELLBY tahunan = 200.000 × 0,0054 = 1.080 WELLBY/tahun
CoD_kesejahteraan = 1.080 / 52 ≈ 20,8 WELLBY/minggu
CoD_uang = 20,8 × £13.000 ≈ £270.000/minggu nilai kesejahteraan
```

Keterlambatan 26 minggu karena itu "menelan biaya" sekitar 540 WELLBY — bernilai sekitar £7 juta
pada penilaian kesejahteraan Green Book — membingkai ulang tanggal go-live yang terlewat sebagai
sebuah peristiwa kesejahteraan warga, bukan catatan kaki manajemen proyek.

## Kaitan dengan Rekayasa Perangkat Lunak

CoD adalah yang membuat [metrik DORA](../dora-metrics-for-public-value/) dan
[metrik alur](../flow-metrics-in-government-delivery/) dapat dibaca secara finansial: waktu tunggu
dalam pipeline × CoD adalah uang (atau kesejahteraan) yang terbakar dalam antrean sebelum pernah
mencapai seorang warga. Secara konkret:

- **Prioritisasi**: peringkat backlog berdasarkan CoD ÷ durasi alih-alih berdasarkan senioritas
  pemangku kepentingan — analog rekayasa perangkat lunak dari persyaratan Green Book untuk menilai
  opsi berdasarkan nilai, bukan berdasarkan siapa yang meminta.
- **Pengadaan**: siklus pengadaan kerangka kerja 12–18 bulan memiliki CoD; menghargakannya mengubah
  kasus urgensi untuk jalur yang dipercepat, dan mengalir langsung ke keputusan
  [membangun vs membeli](../build-vs-buy-in-government/) di mana waktu-menuju-nilai adalah pendorong
  keputusan.
- **Kasus manfaat**: setiap angka CoD yang dikutip pada persetujuan seharusnya muncul kembali pada
  [realisasi manfaat](../benefits-realization/) — jika biaya keterlambatan itu nyata, manfaat yang
  dipercepat seharusnya dapat diukur setelah go-live.

## Jebakan Umum

- **Mengasumsikan CoD linear**: beberapa layanan publik memiliki nilai berbentuk tenggat waktu
  (tanggal kepatuhan statutori — CoD melonjak ke tingkat risiko penegakan hukum setelah tanggal
  tersebut, mendekati nol sebelumnya) alih-alih tingkat mingguan yang mulus. Klasifikasikan profil
  urgensi sebelum mengalikan.
- **CoD pada keluaran yang tidak dibutuhkan siapa pun**: keterlambatan hanya memiliki biaya jika hal
  yang belum disampaikan itu memiliki nilai; sebuah sistem yang tidak akan digunakan siapa pun
  memiliki CoD nol berapa pun terlambatnya.
- **Menghitung ganda keterlambatan dan diskonto**: [tingkat diskonto sosial](../social-discount-rate/)
  sudah menghargakan waktu pada horizon penilaian multi-tahun; CoD adalah versi operasional dalam
  horizon tersebut untuk minggu dan bulan. Gunakan CoD untuk keterlambatan jadwal, pergeseran NPV
  untuk pemfasean ulang multi-tahun.

## Sumber

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
