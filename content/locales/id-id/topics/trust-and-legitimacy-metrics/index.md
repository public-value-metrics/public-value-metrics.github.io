# Metrik Kepercayaan dan Legitimasi

Legitimasi dan dukungan adalah salah satu dari tiga sisi "segitiga strategis" Mark Moore dalam
*Creating Public Value* (1995) — bersama nilai publik itu sendiri dan kapasitas operasional — dan
inilah sisi yang paling sering luput dari pengukuran, karena tidak seperti anggaran atau hitungan
keluaran, legitimasi tidak memiliki satu angka tunggal yang jelas melekat padanya. Metrik
kepercayaan dan legitimasi adalah keluarga ukuran proksi yang digunakan pemerintah untuk mengisi
celah tersebut: survei kepercayaan institusional, peringkat keyakinan badan pengawas, data
pengaduan dan banding, serta indikator dukungan politik/legislatif.

## Mengapa Ini Penting

Argumen Moore adalah bahwa seorang manajer publik yang menghasilkan nilai nyata tetapi kehilangan
legitimasi politik dan publik pada akhirnya akan kehilangan lingkungan pemberi otorisasi yang
dibutuhkan untuk terus menyampaikannya — pendanaan dipangkas, mandat dipersempit, dan layanan
dibiarkan kelaparan terlepas dari seberapa baik hasilnya. Legitimasi karena itu bukanlah renungan
hubungan masyarakat yang ditempelkan pada kartu skor penyampaian; ia adalah masukan penopang
apakah misi tersebut dapat terus berjalan sama sekali, itulah sebabnya ia menempati posisi sebagai
perspektif yang setara dalam [kartu skor nilai publik](../public-value-scorecard/), bukan sekadar
catatan kaki. Program survei "Trust in Government" milik OECD adalah upaya lintas-negara terdepan
untuk mengukur hal ini: program ini melacak proporsi warga di negara-negara anggota OECD yang
menyatakan memiliki keyakinan terhadap pemerintah nasional mereka, dan data jangka panjangnya
menunjukkan bahwa kepercayaan sangat sensitif terhadap guncangan — baik krisis keuangan 2008 maupun
pandemi COVID-19 sama-sama menghasilkan perubahan tajam di tingkat nasional, sering kali diikuti
hanya oleh pemulihan sebagian, dengan analisis OECD secara konsisten menemukan bahwa persepsi
*kompetensi* (apakah pemerintah menyampaikan apa yang dijanjikannya) dan persepsi
*keadilan/integritas* (apakah pemerintah dipandang bertindak tanpa korupsi atau favoritisme) adalah
dua pendorong terkuat angka kepercayaan tersebut, berbeda dari kepuasan terhadap satu transaksi
tertentu. Pemerintah juga semakin berupaya mengoperasionalkan legitimasi pada tingkat yang lebih
terperinci — regulator dan badan inspeksi independen Inggris (National Audit Office, Parliamentary
and Health Service Ombudsman, regulator sektoral seperti Ofsted dan Care Quality Commission)
berfungsi sebagai pemeriksa legitimasi yang terlembagakan, mengubah "apakah publik masih
mempercayai layanan ini" menjadi peringkat yang dapat diaudit.

## Matematika

Kepercayaan dan legitimasi adalah topik berbentuk kerangka kerja yang proksi kuantitatif
praktisnya adalah:

```
Indeks kepercayaan institusional (gaya OECD)
  = % responden survei yang menjawab "ya" pada pertanyaan keyakinan
    terhadap pemerintah, dilacak dari waktu ke waktu, diurai per
    kelompok demografis

Kumpulan proksi legitimasi (tidak ada satu angka pun yang bisa
menggantikan konstruk ini):
  - Pengaduan yang dikabulkan per 1.000 pengguna layanan (data ombudsman
    atau pengaduan internal)
  - Tingkat keberhasilan judicial review / banding terhadap keputusan
    badan tersebut
  - Peringkat regulator/badan inspeksi independen (misalnya kelompok
    peringkat "luar biasa" hingga "tidak memadai")
  - Mosi kepercayaan komite legislatif/pengawas atau frekuensi laporan
    kritis
  - Volume permintaan kebebasan informasi dan tingkat pengungkapan/
    penolakan, sebagai proksi persepsi transparansi

Legitimasi dikuatkan bersama, bukan dihitung: penilaian legitimasi
yang dapat dipertanggungjawabkan mentriangulasi beberapa proksi di
atas, bukan bergantung pada satu proksi tunggal.
```

## Contoh Perhitungan

**Otoritas pajak nasional**: triangulasi legitimasi untuk laporan nilai publik tahunan.

```
Proksi kepercayaan gaya OECD (survei keyakinan khusus departemen):
  58% responden menyatakan percaya bahwa otoritas tersebut akan
  "memperlakukan saya secara adil" (turun dari 64% dua tahun sebelumnya)

Data pengaduan:
  Pengaduan yang dikabulkan: 4,2 per 1.000 interaksi wajib pajak
  (naik dari 3,1 per 1.000)

Rujukan ombudsman:
  Rujukan ke Adjudicator's Office independen: 1.850 dalam setahun,
  di mana 61% dikabulkan sebagian atau seluruhnya melawan otoritas
  tersebut (naik dari 48% tahun sebelumnya)

Membaca ketiganya bersama-sama: kepercayaan menurun, pengaduan yang
dikabulkan meningkat, dan temuan ombudsman independen semakin
berpihak melawan otoritas tersebut — tiga sinyal independen yang
menyatu ke arah yang sama, yang menjadikan ini temuan legitimasi
yang kredibel, bukan sekadar derau pada satu rangkaian data saja.
```

Satu angka saja yang bergerak akan menjadi bukti yang lemah; tiga ukuran independen yang bergerak
bersama pada periode yang sama adalah pola yang menjadikan klaim legitimasi dapat
dipertanggungjawabkan.

## Kaitan dengan Rekayasa Perangkat Lunak

Metrik legitimasi jarang dihasilkan oleh dasbor satu tim saja, dan ini sendiri adalah pelajaran
desainnya: bangun pipeline pelaporan yang dapat menyerap dan merekonsiliasi data dari sumber
eksternal independen (sistem penanganan kasus ombudsman, umpan peringkat regulator, vendor survei)
alih-alih merancang pelaporan legitimasi sebagai metrik internal semata, karena klaim legitimasi
yang bersumber secara internal ("kami menilai diri kami sendiri dapat dipercaya") memiliki bobot
pembuktian yang kecil — masalah independensi yang sama yang dicatat untuk perspektif legitimasi
dalam [kartu skor nilai publik](../public-value-scorecard/). Pipeline data pengaduan dan banding
layak mendapatkan kedisiplinan kualitas data yang sama seperti pipeline hasil apa pun yang menjadi
masukan kontrak [pembayaran berdasarkan hasil](../payment-by-results-and-social-impact-bonds/),
karena dataset pengaduan yang kurang dilaporkan atau salah dikategorikan diam-diam meremehkan
masalah legitimasi sebelum masalah itu terlihat dalam survei kepercayaan setahun kemudian. Lihat
[metrik kepuasan warga](../citizen-satisfaction-metrics/) untuk padanan tingkat transaksi dari
ukuran tingkat institusi ini, dan [nilai publik](../public-value/) untuk kerangka segitiga
strategis lengkap Moore yang menjadi tempat sisi ini berada.

## Jebakan Umum

- **Memperlakukan kepuasan sebagai proksi legitimasi**: seorang warga bisa saja puas dengan
  antarmuka satu transaksi sambil tetap tidak mempercayai institusinya secara keseluruhan
  (atau sebaliknya) — lihat [metrik kepuasan warga](../citizen-satisfaction-metrics/) untuk alasan
  mengapa keduanya harus dilaporkan secara terpisah.
- **Bergantung pada satu metrik yang dilaporkan sendiri**: survei kepercayaan yang dijalankan
  secara internal tanpa konfirmasi independen (data ombudsman, peringkat regulator) mudah
  diabaikan sebagai penilaian diri sendiri; lakukan triangulasi.
- **Mengabaikan penguraian demografis**: angka kepercayaan nasional agregat dapat menutupi
  perbedaan legitimasi yang tajam pada kelompok tertentu (menurut usia, etnis, pendapatan, atau
  wilayah) — rilis Trust in Government milik OECD sendiri menguraikan data justru karena alasan
  ini.
- **Membaca satu penurunan akibat guncangan sebagai tren permanen**: angka kepercayaan bergerak
  tajam di sekitar krisis (kejatuhan keuangan, pandemi, skandal yang mencuat) dan pulih sebagian;
  satu titik data pascaguncangan tidak boleh diekstrapolasikan menjadi penurunan jangka panjang
  tanpa data lebih lanjut.

## Sumber

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
