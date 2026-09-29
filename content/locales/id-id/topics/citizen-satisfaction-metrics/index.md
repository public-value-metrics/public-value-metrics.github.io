# Metrik Kepuasan Warga

Metrik kepuasan warga mengukur bagaimana orang menilai pengalaman langsung mereka terhadap sebuah
layanan publik — berbeda dari kepercayaan terhadap institusi secara umum, dan berbeda dari apakah
layanan tersebut benar-benar mencapai hasil yang baik. Sebuah layanan bisa saja disukai namun tidak
efektif, atau efektif namun tidak disukai; kesenjangan antara keduanya itu sendiri merupakan
informasi diagnostik yang seharusnya diperhatikan oleh tim penyampaian.

## Mengapa Ini Penting

Kepuasan diukur pada dua ketinggian berbeda yang secara rutin dicampuradukkan. Pada tingkat layanan,
Performance Platform Inggris yang kini telah dipensiunkan dan GOV.UK service manual saat ini
mewajibkan survei kepuasan per layanan (biasanya skala lima poin "sangat puas" hingga "sangat tidak
puas", diberikan pada saat transaksi) sebagai salah satu dari empat KPI layanan wajib — lihat
[standar layanan dan metrik transaksi](../service-standards-and-transaction-metrics/). Pada tingkat
institusional, UK Civil Service People Survey mengukur keterlibatan dan pengalaman pegawai di
seluruh departemen pemerintah pusat setiap tahun, dan secara terpisah program "Trust in Government"
milik OECD menyurvei kepercayaan publik terhadap pemerintah nasional di negara-negara anggota,
melacak pola penurunan dan pemulihan jangka panjang yang sangat dibentuk oleh krisis (krisis
finansial 2008 dan pandemi COVID-19 sama-sama menghasilkan pergerakan tajam dan terlihat pada angka
kepercayaan OECD). Alasan mengapa insinyur yang membangun layanan yang menghadapi warga perlu
memisahkan kepuasan dari hasil adalah sebuah mode kegagalan yang telah dikenal dalam desain layanan:
sebuah formulir digital yang dirancang dengan indah dan mudah digunakan untuk klaim tunjangan dapat
memperoleh skor kepuasan yang sangat tinggi sementara kebijakan yang mendasarinya — aturan
kelayakan, tumpukan pemrosesan, jumlah pemberian — tidak membuat pemohon menjadi lebih baik.
Kepuasan mengukur antarmuka; ia tidak mengukur nilai yang disampaikan di baliknya.

## Matematika

```
Kepuasan bersih = % puas (atau sangat puas) − % tidak puas (atau sangat
                    tidak puas)
                    (respons netral/tanpa pendapat dikecualikan dari
                    kedua istilah, tetapi dihitung dalam basis respons
                    untuk menghitung setiap persentase)

Kesenjangan kepuasan-ke-hasil = skor kepuasan − skor pencapaian hasil
                    (keduanya dinormalisasi 0–100; kesenjangan positif
                    yang besar menandakan layanan yang "terasa baik"
                    tetapi kurang menyampaikan substansi)

Indeks kepercayaan (gaya OECD) = % responden survei yang menjawab "ya"
                    terhadap "apakah Anda memiliki kepercayaan pada
                    [pemerintah nasional]?"
                    dilacak sebagai deret waktu, biasanya diuraikan
                    berdasarkan usia, pendapatan, dan pendidikan
```

## Contoh Perhitungan

**Layanan e-billing pajak dewan kota pemerintah daerah**: sebuah survei kepuasan pada saat transaksi
yang berhasil menunjukkan 2.400 responden: 1.650 puas/sangat puas, 250 tidak puas/sangat tidak puas,
500 netral.

```
Kepuasan bersih = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75% − 10,42%
                  = +58,3 kepuasan bersih
```

Ini terlihat kuat secara terisolasi. Namun survei tersebut hanya ditampilkan kepada pengguna yang
*berhasil* menyelesaikan transaksi — sebuah bias pengukuran yang telah dikenal (lihat jebakan umum
di bawah). Memadukannya dengan metrik tingkat penyelesaian dari
[standar layanan dan metrik transaksi](../service-standards-and-transaction-metrics/) menunjukkan
tingkat penyelesaian hanya 71%, yang berarti:

```
Kepuasan populasi sejati tidak terukur untuk 29% yang meninggalkan
perjalanan tersebut — kemungkinan besar merupakan kohort paling tidak
puas, karena peninggalan itu sendiri adalah sinyal negatif kuat yang
tidak pernah ditangkap oleh survei.
```

**Ilustrasi tingkat nasional (struktur deret kepercayaan gaya OECD)**: kepercayaan pemerintah
nasional dilaporkan 42% pada tahun 1, turun menjadi 34% pada tahun 2 (tahun krisis) dan pulih
menjadi 39% pada tahun 3 — lintasan yang khas dari pola guncangan-dan-pemulihan-parsial yang
didokumentasikan OECD di seluruh negara anggota setelah krisis besar.

## Kaitan dengan Rekayasa Perangkat Lunak

Instrumentasikan survei kepuasan pada setiap titik keluar yang bermakna dari sebuah perjalanan
pengguna, bukan hanya pada penyelesaian yang berhasil — kesalahan rekayasa paling umum di ranah
ini, dan yang diam-diam mengubah sebuah metrik kepuasan menjadi metrik kesombongan (vanity metric)
yang bias-survivorship. Bila memungkinkan, padukan skor kepuasan dengan metrik penyelesaian atau
hasil pada dasbor yang sama sehingga sebuah tim tidak dapat merayakan naiknya kepuasan sementara
tingkat penyelesaian diam-diam turun (lihat [biaya per transaksi](../cost-per-transaction/) dan
[inklusi digital](../digital-inclusion/) untuk memahami siapa yang terkecualikan dari pengambilan
sampel kepuasan digital sejak awal — pengguna non-digital dan digital-terbantu secara sistematis
kurang terwakili dalam survei di dalam layanan). Data kepuasan dan kepercayaan juga mengalir
langsung ke kaki legitimasi dari [segitiga strategis Moore](../public-value/), dan menjadi bagian
dari perspektif "pelanggan" dan "legitimasi" pada [kartu skor nilai publik](../public-value-scorecard/)
— lihat [metrik kepercayaan dan legitimasi](../trust-and-legitimacy-metrics/) untuk padanan tingkat
institusional dari metrik tingkat layanan ini.

## Jebakan Umum

- **Bias survivorship dalam survei titik penyelesaian**: pengguna yang meninggalkan sebuah
  perjalanan tidak pernah melihat survei tersebut, sehingga skor kepuasan tinggi di dalam layanan
  dapat berdampingan dengan tingkat penyelesaian yang rendah dan populasi besar yang tidak terlihat
  dari mereka yang tidak selesai dan tidak puas.
- **Memperlakukan kepuasan sebagai proksi untuk hasil**: sebuah antarmuka yang dirancang dengan baik
  untuk kebijakan yang dirancang dengan buruk memperoleh skor bagus pada kepuasan dan buruk pada
  hasil — selalu laporkan keduanya, jangan pernah satu sebagai pengganti yang lain.
- **Sampel kecil dan tidak representatif dilaporkan dengan presisi palsu**: skor kepuasan dari
  beberapa ratus responden yang memilih sendiri dilaporkan hingga satu angka desimal menyiratkan
  keyakinan yang tidak dapat didukung oleh ukuran sampel tersebut.
- **Mengabaikan penguraian demografis**: angka kepercayaan dan kepuasan nasional yang tidak diuraikan
  berdasarkan usia, pendapatan, disabilitas, atau akses digital dapat menyembunyikan pengalaman yang
  sangat berbeda di seluruh kelompok — sebuah pola yang secara eksplisit diuraikan sendiri oleh
  rilis Trust in Government milik OECD.

## Sumber

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
