# Penilaian Preferensi Terungkap

Metode preferensi terungkap (revealed preference) menyimpulkan nilai sebuah barang non-pasar dari
perilaku yang dapat diamati di sebuah pasar terkait, alih-alih bertanya langsung kepada orang.
Hedonic pricing dan metode biaya-perjalanan (travel-cost) adalah dua teknik andalan: keduanya
dimulai dari sebuah transaksi nyata dan menurunkan sebuah harga implisit untuk sesuatu yang tidak
pernah langsung dijual.

## Mengapa Ini Penting

Di mana metode [preferensi dinyatakan](../stated-preference-valuation/) mengajukan sebuah pertanyaan
hipotetis, metode preferensi terungkap mengamati apa yang benar-benar dibayar orang, yang
diperlakukan Green Book sebagai bukti yang umumnya lebih kredibel, dengan hal lain setara, karena
tidak tunduk pada bias hipotetis — responden dalam sebuah studi harga rumah hedonic benar-benar
membayar premium atau diskon yang diukur
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Hedonic pricing menguraikan sebuah harga pasar — biasanya harga rumah — menjadi harga
implisit untuk setiap atribut barang tersebut, memungkinkan analis mengisolasi, misalnya, premium
harga yang benar-benar dibayar rumah tangga untuk tinggal di tempat yang lebih tenang atau dengan
kualitas udara yang lebih baik, mengendalikan secara statistik setiap atribut lain yang juga
memengaruhi harga rumah (ukuran, lokasi, daerah tangkapan sekolah). Metode biaya-perjalanan
melakukan hal serupa untuk lokasi rekreasi tanpa biaya masuk: waktu dan uang yang dihabiskan orang
untuk bepergian ke sebuah lokasi mengungkap batas bawah dari apa nilai lokasi tersebut bagi mereka,
karena tidak seorang pun menanggung biaya yang melebihi apa nilai kunjungan tersebut bagi mereka.

Kedua metode berbagi sebuah keterbatasan struktural: mereka hanya dapat menghargai apa yang
tertanam dalam sebuah transaksi pasar yang sudah ada. Kebisingan dekat sebuah landasan pacu muncul
dalam harga rumah karena orang-orang yang peduli tentang kebisingan menyortir diri mereka ke dalam
perumahan yang lebih tenang; nilai keberadaan sebuah spesies yang tidak dikunjungi atau ditinggali
siapa pun sama sekali tidak muncul dalam transaksi apa pun, yang justru merupakan kesenjangan yang
dimaksudkan untuk diisi metode [preferensi dinyatakan](../stated-preference-valuation/).

## Matematika

```
Hedonic pricing:
  Harga rumah = f(atribut struktural, atribut lokasi, atribut
                   lingkungan yang menarik, ...)
  Estimasi melalui regresi; koefisien pada atribut lingkungan
  (dengan segala sesuatu yang lain konstan) adalah harga implisitnya.

  Harga implisit atribut X = ∂(Harga rumah) / ∂X

Metode biaya-perjalanan:
  Tingkat kunjungan (kunjungan per kapita dari zona i) = f(biaya
                   perjalanan dari zona i, lokasi substitusi,
                   kontrol sosioekonomi)
  Estimasi sebuah kurva permintaan untuk kunjungan sebagai fungsi
  biaya perjalanan.
  Surplus konsumen = area di bawah kurva permintaan yang diestimasi
                    = nilai lokasi tersebut bagi pengunjung
```

Kedua metode membutuhkan sebuah set kontrol yang secara statistik kuat — mengabaikan sebuah atribut
perancu (hedonic) atau sebuah lokasi substitusi terdekat (biaya-perjalanan) membiaskan harga
implisit ke arah yang tidak selalu jelas sebelumnya, itulah sebabnya Green Book Annex 2 mensyaratkan
spesifikasi dan kontrol regresi dilaporkan, bukan hanya koefisien utamanya.

## Contoh Perhitungan

**Pemerintah pusat**: metodologi harga bayangan karbon Green Book sendiri sebagian menarik dari
bukti hedonic, tetapi sebuah kasus ilustratif yang lebih sederhana adalah kebisingan pesawat. Sebuah
studi hedonic yang meregresikan harga jual rumah di sebuah area jalur penerbangan terhadap paparan
kebisingan berbobot-jarak, mengendalikan ukuran, usia, dan daerah tangkapan sekolah, menemukan
setiap kenaikan 1 desibel paparan kebisingan rata-rata dikaitkan dengan penurunan 0,5% harga rumah.
Untuk sebuah rumah tipikal £280.000 di area terdampak:

```
Harga implisit per desibel = £280.000 × 0,5% = £1.400 per rumah tangga
Rumah tangga terdampak kenaikan 3dB dari sebuah landasan pacu baru
= 18.000
Biaya implisit agregat dari kenaikan kebisingan tersebut
= £1.400 × 3 × 18.000 = £75,6 juta
```

Ini adalah sebuah biaya terkapitalisasi satu kali (tertanam dalam harga rumah), yang penilaiannya
harus berhati-hati untuk tidak menghitung ganda terhadap sebuah aliran biaya gangguan-kebisingan
tahunan yang diestimasi secara terpisah.

**Lembaga amal**: sebuah lembaga amal lingkungan menggunakan metode biaya-perjalanan untuk
menghargai sebuah cagar alam gratis-masuk. Data survei kode pos pengunjung memberikan rata-rata
biaya perjalanan pulang-pergi (waktu dihargai pada nilai waktu non-kerja yang direkomendasikan
Green Book, plus bahan bakar) sebesar £14 per kunjungan, dengan 40.000 kunjungan per tahun. Kurva
permintaan yang diestimasi — tingkat kunjungan menurun seiring biaya perjalanan dari sebuah zona
naik — menyiratkan surplus konsumen per kunjungan, di atas £14 yang benar-benar dibelanjakan,
sekitar £9.

```
Nilai tahunan total = 40.000 kunjungan × (£14 dibelanjakan + £9
                       surplus konsumen)
                     = 40.000 × £23 ≈ £920.000/tahun
```

Ini jauh melebihi pendapatan biaya-masuk nol cagar alam tersebut dan memberi para wali lembaga amal
tersebut sebuah angka yang dapat dipertahankan untuk nilai rekreasi lokasi tersebut ketika mengajukan
kasus kepada pemberi dana.

## Kaitan dengan Rekayasa Perangkat Lunak

Pemikiran preferensi terungkap muncul dalam analitik produk sektor publik lebih sering daripada yang
disadari praktisi: data penggunaan dari sebuah layanan digital pemerintah gratis itu sendiri adalah
bukti preferensi-terungkap dari nilai (frekuensi, panjang sesi, dan — yang paling menunjukkan —
pola penggunaan berulang-versus-satu-kali dapat dianalisis dengan cara yang sama seperti sebuah
model biaya-perjalanan memperlakukan frekuensi kunjungan terhadap jarak). Di mana sebuah layanan
memiliki substitusi genuine (sebuah kanal kertas, sebuah saluran telepon), "biaya" yang ditanggung
warga untuk menggunakan kanal digital sebagai gantinya (waktu, data, sebuah perangkat) dapat
diestimasi dan dibandingkan dengan penggunaan, menggemakan logika biaya-perjalanan secara langsung.
Lihat [standar layanan digital](../digital-service-standard/) dan
[nilai data terbuka](../open-data-value/), yang menghadapi persis masalah penilaian ini untuk
sebuah barang tanpa harga pasar langsung.

## Jebakan Umum

- **Bias variabel yang diabaikan dalam model hedonic.** Meninggalkan sebuah atribut yang berkorelasi
  (kualitas sekolah yang berkorelasi dengan baik harga rumah maupun variabel lingkungan yang
  menarik) membiaskan estimasi harga implisit; spesifikasi perlu dilaporkan dan diteliti, bukan
  hanya hasilnya.
- **Mengabaikan lokasi substitusi dalam studi biaya-perjalanan.** Nilai terungkap seorang pengunjung
  untuk sebuah lokasi diremehkan jika sebuah substitusi yang lebih dekat ada dan tidak dikendalikan
  — mereka mungkin berkunjung terutama karena itu gratis, bukan karena itu bernilai unik.
- **Menerapkan preferensi terungkap pada sebuah barang tanpa gema pasar sama sekali.** Nilai
  keberadaan, nilai opsi, dan nilai warisan tidak muncul dalam transaksi apa pun dan tidak dapat
  dipulihkan oleh metode hedonic atau biaya-perjalanan — kesenjangan itu milik
  [penilaian preferensi dinyatakan](../stated-preference-valuation/).
- **Mencampuradukkan nilai terkapitalisasi (satu kali) dengan sebuah aliran tahunan.** Efek harga
  rumah hedonic biasanya adalah nilai terkapitalisasi satu kali; memperlakukannya sebagai sebuah
  aliran manfaat tahunan menggelembungkan penilaian tersebut.

## Sumber

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
