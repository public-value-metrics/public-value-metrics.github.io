# Pelaporan Hasil Hibah (IRIS+)

Pelaporan hasil hibah adalah praktik penerima hibah melaporkan metrik hasil yang terstandardisasi
dan dapat dibandingkan kembali kepada pemberi dana — berbeda dengan setiap pemberi dana menciptakan
templat pelaporan khususnya sendiri. IRIS+, dikelola oleh Global Impact Investing Network (GIIN),
adalah standar semacam ini yang paling banyak diadopsi: sebuah katalog metrik kinerja sosial,
lingkungan, dan finansial yang telah didefinisikan sebelumnya yang disyaratkan atau direkomendasikan
digunakan penerima hibah oleh investor berdampak dan, semakin banyak, yayasan pemberi hibah.

## Mengapa Ini Penting

Sebelum pelaporan terstandardisasi, setiap yayasan meminta penerima hibah untuk sekumpulan indikator
yang berbeda dalam format yang berbeda, dan sebuah lembaga amal berukuran menengah dengan sepuluh
pemberi dana bisa menjalankan sepuluh proses pelaporan paralel untuk pekerjaan yang tumpang tindih —
sebuah pendorong yang terdokumentasi dengan baik dari beban pelaporan yang dimaksudkan untuk
dikurangi oleh standardisasi hasil hibah. IRIS+ mengatasi ini dengan memberi pemberi dana dan
penerima hibah kosakata bersama: Core Metrics Sets yang dikelompokkan berdasarkan tema (misalnya
perumahan terjangkau, akses energi bersih, inklusi finansial), setiap metrik didefinisikan cukup
presisi sehingga "pekerjaan tercipta" atau "rumah tangga yang dilayani" berarti hal yang sama
siapa pun yang melaporkannya, dan diselaraskan dengan UN Sustainable Development Goals sehingga
seorang pemberi dana dapat menggulung data tingkat penerima hibah menjadi narasi SDG tingkat
portofolio. GIIN melaporkan bahwa metrik IRIS digunakan oleh sekitar separuh investor berdampak dan
sebagian besar manajer dana, bank, dan institusi keuangan pembangunan yang aktif di bidang ini.

Standardisasi ini paling penting di mana ia berinteraksi dengan
[luaran vs keluaran](../outcomes-vs-outputs/): IRIS+ mendorong pelaporan ke arah metrik hasil dan
dampak yang didefinisikan alih-alih apa pun yang kebetulan dicatat sistem manajemen kasus penerima
hibah yang sudah ada, yang justru merupakan kesenjangan yang dideskripsikan oleh
[biaya per hasil](../cost-per-outcome/) versus [biaya per penerima manfaat](../cost-per-beneficiary/).

## Matematika

Pelaporan hasil hibah adalah sebuah kerangka kerja dan proses, bukan rumus:

```
1. Pemberi dana memilih sebuah Core Metrics Set yang relevan dengan
   tema hibah (misalnya "Financial Inclusion" atau "Sustainable
   Agriculture" IRIS+)
2. Setiap metrik memiliki definisi, satuan, dan metode perhitungan
   tetap yang dipublikasikan GIIN — tidak diciptakan per pemberi dana
3. Penerima hibah melaporkan sesuai definisi metrik yang sama di
   seluruh pemberi dananya menggunakan standar tersebut, memotong
   upaya pelaporan duplikat
4. Pemberi dana mengagregasi metrik tingkat penerima hibah menjadi
   pelaporan tingkat portofolio, dapat dibandingkan dari tahun ke
   tahun dan di seluruh penerima hibah menggunakan metrik yang sama
```

Keuntungan efisiensinya bersifat kombinatorial: menstandardisasi N pemberi dana × M penerima hibah
ke dalam satu kosakata bersama mengubah N×M hubungan pelaporan khusus menjadi kira-kira N+M
pemetaan terhadap satu standar.

## Contoh Perhitungan

**Seorang penerima hibah dengan tiga pemberi dana, sebelum standardisasi**: melaporkan "orang yang
dilayani" kepada Pemberi Dana 1 menggunakan definisi jumlah kepala, "penerima manfaat yang
dijangkau" kepada Pemberi Dana 2 menggunakan definisi rumah tangga, dan "individu yang terdampak"
kepada Pemberi Dana 3 menggunakan definisi episode layanan (sehingga satu orang yang berkunjung dua
kali dihitung dua kali). Tiga laporan, tiga angka, tidak ada yang dapat dibandingkan, dan tidak ada
yang dapat dibandingkan dengan angka penerima hibah lain bahkan dalam portofolio pemberi dana yang
sama.

**Penerima hibah yang sama di bawah IRIS+**: melaporkan sesuai metrik individu-yang-dijangkau IRIS+
yang terdefinisi berdampingan dengan metrik hasil terdefinisi dari Core Metrics Set yang relevan,
menggunakan metodologi perhitungan yang dipublikasikan GIIN untuk keduanya. Ketiga pemberi dana kini
menerima angka yang sama, dihitung dengan cara yang sama, dan dapat membandingkan biaya per unit
terdefinisi-IRIS+ penerima hibah ini dengan penerima hibah lain dalam portofolio mereka menggunakan
metrik yang identik — setara, pada skala infrastruktur pelaporan, dengan memiliki
[basis data biaya satuan](../unit-cost-databases/) bersama.

## Kaitan dengan Rekayasa Perangkat Lunak

Platform manajemen hibah seharusnya memperlakukan pengidentifikasi metrik IRIS+ sebagai kunci asing,
bukan teks bebas: menyimpan kode metrik yang dipublikasikan berdampingan dengan nilai yang
dilaporkan penerima hibah (alih-alih bidang yang diciptakan secara lokal bernama "penerima manfaat")
adalah yang membuat agregasi lintas-pemberi-dana dan lintas-portofolio mungkin dilakukan nanti tanpa
sebuah proyek pembersihan data. Di mana sebuah platform harus mendukung pemberi dana yang belum
mengadopsi IRIS+, desain yang pragmatis adalah membiarkan sebuah metrik lokal dipetakan ke definisi
IRIS+ terdekat alih-alih memaksa setiap pemberi dana ke standar tersebut segera — komparabilitas
membaik secara inkremental seiring semakin banyak grafik terpetakan ke pengidentifikasi bersama.
Lihat topik saudara [biaya per hasil](../cost-per-outcome/) untuk apa yang seharusnya digunakan
untuk menghitung angka yang dilaporkan setelah dikumpulkan.

## Jebakan Umum

- **Memperlakukan adopsi IRIS+ sebagai komparabilitas otomatis.** Dua penerima hibah dapat sama-sama
  melaporkan sesuai metrik IRIS+ yang sama dan tetap tidak dapat dibandingkan jika kualitas data
  yang mendasari atau asumsi kontrafaktual mereka berbeda; standar tersebut memperbaiki definisi,
  bukan ketelitian pengukuran.
- **Metrik "selaras-IRIS" ciptaan pemberi dana.** Sebuah metrik yang hanya terinspirasi dari bahasa
  IRIS+ tetapi bukan definisi yang benar-benar dipublikasikan memperkenalkan kembali fragmentasi
  yang dimaksudkan untuk dipecahkan oleh standar tersebut.
- **Kelelahan pelaporan dari pemilihan berlebihan.** Mewajibkan penerima hibah melaporkan terhadap
  seluruh Core Metrics Set ketika hanya dua atau tiga metrik yang relevan untuk keputusan
  menciptakan kembali masalah beban dalam pembungkus terstandardisasi.
- **Tidak ada metrik hasil sama sekali.** IRIS+ mencakup banyak metrik keluaran murni (misalnya
  jumlah orang yang dilayani); hanya memilih itu, dan tidak ada metrik tingkat hasil, menghasilkan
  pelaporan berbentuk [biaya-per-penerima-manfaat](../cost-per-beneficiary/) di bawah label
  pelaporan-hasil.

## Sumber

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
