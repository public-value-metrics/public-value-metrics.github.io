# Efektivitas Biaya Altruisme Efektif

Penalaran efektivitas biaya altruisme efektif (effective altruism, EA) memeringkat intervensi amal
berdasarkan jumlah kebaikan — paling sering dinyatakan sebagai nyawa yang diselamatkan, atau
kesehatan yang diperoleh, per dolar yang dibelanjakan — dan mengarahkan uang ke intervensi mana pun
yang membeli kebaikan paling banyak pada margin. GiveWell adalah praktisi paling berpengaruh di
bidang ini: ia mempublikasikan estimasi biaya-per-nyawa-diselamatkan dan biaya-per-hasil yang
eksplisit dan diperbarui untuk daftar kecil "lembaga amal teratas," dan merekomendasikan donatur
untuk memberi kepada mana pun yang saat ini memiliki ruang untuk pendanaan lebih lanjut pada tingkat
terbaik.

## Mengapa Ini Penting

GiveWell menyatakan efektivitas biaya sebagai kriteria utama dalam metodologi yang dipublikasikannya:
ia mencari intervensi berbasis bukti, mengestimasi efektivitas biayanya dalam satuan umum, dan
memeringkat di seluruh penyebab yang sama sekali tidak terkait — kelambu terhadap malaria,
suplementasi vitamin A, transfer tunai, pembayaran insentif vaksin — pada satu sumbu tunggal
tersebut. Ini adalah impor langsung dari penalaran gaya QALY/DALY dari ekonomi kesehatan ke dalam
filantropi: sama seperti sistem kesehatan bertanya "berapa banyak QALY per poundsterling pada
margin," GiveWell bertanya "berapa banyak nyawa, atau tahun kehidupan, per dolar pada margin," dan
memperlakukan penyebab sebagai dapat dipertukarkan setelah dikonversi ke dalam satuan umum tersebut.
Lihat [analisis efektivitas biaya dalam pemerintahan](../cost-effectiveness-analysis-in-government/)
untuk sepupu sektor publik dari kerangka penalaran ini.

Angka GiveWell yang paling dikutip menyangkut Against Malaria Foundation (AMF), yang mendistribusikan
kelambu berinsektisida. Dalam contoh perhitungan yang dipublikasikan GiveWell (diambil dari data
pendanaan 2020), sekitar $4.500 mendanai cukup banyak kelambu untuk mencegah satu kematian, setelah
memperhitungkan penggunaan kelambu yang tidak sempurna, mortalitas baseline tanpa kelambu, dan
penyesuaian untuk funging — kemungkinan bahwa AMF akan tetap menerima sebagian dari pendanaan
tersebut dari donatur lain bagaimanapun juga. GiveWell secara eksplisit menyatakan bahwa angka ini
bergerak seiring waktu dan di seluruh geografi seiring prevalensi malaria, biaya kelambu, dan
kesenjangan pendanaan berubah, dan bahwa biaya untuk menyelamatkan satu nyawa umumnya diperkirakan
naik seiring waktu karena peluang termurah diambil terlebih dahulu; ini adalah ilustrasi kerja dari
metode tersebut, bukan harga tetap.

## Matematika

```
Efektivitas biaya = Biaya intervensi / Unit kebaikan yang dihasilkan
                    (misalnya $ per nyawa diselamatkan, $ per DALY
                    dicegah, $ per QALY)

Rantai GiveWell untuk program kelambu, secara ilustratif:
  $ per kelambu yang dibeli dan disampaikan
    ÷ pangsa kelambu yang benar-benar digunakan
    ÷ orang yang terlindungi per kelambu
    × mortalitas tahunan baseline tanpa kelambu
    × pengurangan mortalitas yang dapat diatribusikan pada penggunaan
      kelambu (dari bukti RCT)
    × tahun perlindungan per kelambu
    ÷ penyesuaian untuk funging (uang yang menggantikan pendanaan
      donatur lain)
  = $ per nyawa diselamatkan (bersih dari efek pendanaan kontrafaktual)
```

Rantai ini penting karena setiap langkah adalah tempat estimasi efektivitas biaya umumnya menjadi
salah — lihat jebakan umum di bawah — dan karena ini secara eksplisit menyatakan bahwa "biaya per
nyawa diselamatkan" bukanlah harga mentah yang teramati; ini adalah estimasi yang dimodelkan dari
beberapa input yang masing-masing tidak pasti.

## Contoh Perhitungan

Dua intervensi hipotetis, keduanya berbasis bukti, bersaing untuk £100.000 marjinal yang sama:

- **Kelambu (gaya AMF)**: sekitar $4.500 per nyawa diselamatkan pada contoh perhitungan yang
  dipublikasikan GiveWell yang diambil dari data 2020, yaitu sangat kasar 20 nyawa diselamatkan per
  £100.000 tergantung nilai tukar dan tahun yang digunakan.
- **Program deworming**: tidak ada manfaat mortalitas yang masuk akal sama sekali, tetapi bukti kuat
  dari keuntungan pendapatan jangka panjang dari deworming masa kanak-kanak; GiveWell menilainya
  dalam istilah keuntungan pendapatan, bukan nyawa diselamatkan, yang membuatnya sulit dibandingkan
  langsung dengan kelambu tanpa satuan bersama. GiveWell menggunakan kerangka "bobot moral" eksplisit
  untuk mengonversi keduanya menjadi satu satuan internal untuk pemeringkatan.

Disiplin metode EA adalah memaksa perbandingan ini ke permukaan alih-alih mendanai keduanya hanya
karena keduanya "terdengar baik." Lihat
[laba atas investasi sosial](../social-return-on-investment/) untuk fungsi pemaksa setara yang
digunakan perusahaan sosial dan komisioner lokal Inggris, yang menanyakan pertanyaan yang sama —
apa pengembalian terbaik per poundsterling — dalam idiom nilai termonetisasi alih-alih idiom
nyawa/DALY.

## Kaitan dengan Rekayasa Perangkat Lunak

Insinyur yang membangun platform donatur, alat pencocokan hibah, atau dasbor dampak untuk pemberi
dana yang selaras dengan EA (Open Philanthropy, GiveWell sendiri, platform pemberian efektif seperti
Giving What We Can) perlu merepresentasikan estimasi efektivitas biaya sebagai rentang dengan asumsi
yang dinyatakan, bukan angka tunggal — model yang mendasarinya memiliki beberapa input tidak pasti
yang bersifat multiplikatif, dan meruntuhkan itu menjadi satu angka pada dasbor salah
merepresentasikan keyakinan yang dinyatakan GiveWell sendiri. Beri versi setiap estimasi berdasarkan
tanggal publikasi; GiveWell merevisi angkanya, kadang secara substansial, seiring bukti RCT baru
atau data kesenjangan pendanaan datang, dan sebuah platform yang menyimpan cache angka lama diam-diam
menjadi salah.

## Jebakan Umum

- **Memperlakukan estimasi efektivitas biaya sebagai harga tetap.** Ini adalah keluaran model dengan
  beberapa input multiplikatif yang tidak pasti (tingkat penggunaan, mortalitas baseline, penyesuaian
  funging); nyatakan tanggal dan versinya.
- **Mengabaikan funging/perpindahan.** Mendanai sebuah organisasi yang akan tetap menerima uang dari
  donatur lain bagaimanapun juga membeli lebih sedikit kebaikan kontrafaktual daripada yang
  disarankan angka utama — lihat [additionalitas dan bobot mati](../additionality-and-deadweight/)
  dan [perpindahan dan atribusi](../displacement-and-attribution/).
- **Membandingkan di seluruh satuan yang tidak kompatibel tanpa konversi.** "Nyawa diselamatkan" dan
  "pendapatan yang diperoleh" tidak dapat dibandingkan secara langsung tanpa kerangka bobot moral
  yang eksplisit; menyajikannya berdampingan seolah-olah keduanya sama adalah kesalahan kategori.
- **Pandangan terowongan area penyebab.** Memeringkat hanya dalam sebuah area penyebab (misalnya
  hanya lembaga amal kesehatan global) dan menyebut pemenangnya "lembaga amal paling efektif biaya"
  melebih-lebihkan klaim tersebut; pemeringkatan lintas-penyebab GiveWell sengaja dipersempit
  (kesehatan dan kesejahteraan global), bukan universal.

## Sumber

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
