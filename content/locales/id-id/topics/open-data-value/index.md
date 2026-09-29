# Nilai Data Terbuka

Nilai data terbuka adalah masalah mengestimasi berapa nilai data pemerintah dan publik ketika ia
tidak memiliki harga: ia tidak dijual, sehingga tidak ada baris pendapatan, namun melepaskannya
(catatan cuaca, jadwal transportasi, batas kode pos, register perusahaan) secara nyata menghasilkan
aktivitas ekonomi dan sosial hilir. Menghargainya dengan baik itu penting karena "gratis untuk
dilepaskan" dan "tidak bernilai" keduanya salah, dan seorang insinyur perangkat lunak yang
memutuskan apakah akan membuka sebuah API atau dataset membutuhkan argumen yang lebih baik daripada
keduanya.

## Mengapa Ini Penting

Estimasi top-down yang paling banyak dikutip berasal dari laporan McKinsey Global Institute tahun
2013 "Open data: Unlocking innovation and performance with liquid information", yang menempatkan
nilai potensial tahunan data terbuka di seluruh tujuh domain — pendidikan, transportasi, produk
konsumen, listrik, minyak dan gas, kesehatan, dan keuangan konsumen — pada $3 triliun hingga $5
triliun per tahun secara global, melalui mekanisme termasuk transparansi yang meningkat,
mencocokkan penawaran dengan permintaan secara lebih efisien, dan memungkinkan produk dan layanan
baru yang dibangun di atas data tersebut. Angka itu adalah estimasi skenario, bukan hasil terukur,
dan secara rutin salah dikutip seolah-olah itu adalah pendapatan yang dapat langsung ditangkap
pemerintah, padahal nilainya sebagian besar terakumulasi pada pihak ketiga — bisnis, peneliti, warga
— yang menggunakan data tersebut, yang justru merupakan inti dari membukanya alih-alih menjualnya.
Open Data Institute Inggris, didirikan bersama oleh Sir Tim Berners-Lee dan Sir Nigel Shadbolt pada
2012, sejak itu telah membangun sekumpulan studi kasus yang lebih terperinci dan bottom-up — sektor
demi sektor, dataset demi dataset — yang jauh lebih berguna untuk sebuah kasus bisnis nyata daripada
angka utama McKinsey, karena mereka menunjukkan mekanisme penciptaan nilai, bukan hanya ukuran
agregatnya.

## Matematika

Data terbuka tidak memiliki harga pasar, sehingga metode penilaian menggantikannya; tiga pendekatan
berulang muncul, dan tidak satu pun yang cukup sendirian:

```
1. Metode biaya-terhindarkan / biaya-pengganti:
   nilai ≈ apa yang akan dibayarkan pengguna untuk memproduksi atau
   melisensikan data setara sendiri — sebuah batas bawah, mengabaikan
   nilai yang tercipta dari penggunaan yang tidak pernah diantisipasi
   produsen aslinya

2. Metode analog-pasar / aktivitas-hilir:
   nilai ≈ pendapatan atau penghematan yang dihasilkan oleh bisnis/
   layanan yang dibangun di atas data tersebut (misalnya aplikasi
   satnav yang dibangun di atas data pemetaan dan lalu lintas
   terbuka) — menangkap aktivitas ekonomi nyata tetapi sulit
   diatribusikan secara bersih pada pelepasan data itu sendiri
   (lihat additionality-and-deadweight)

3. Metode preferensi-kontingen/dinyatakan:
   nilai ≈ apa yang dikatakan pengguna akan mereka bayar, atau waktu
   yang mereka katakan dihemat — lihat stated-preference-valuation
   untuk metode umum dan biasnya

Tidak satu pun dari ini menghasilkan angka sebersih harga pasar; kasus
bisnis data terbuka yang kredibel mentriangulasi di dua atau lebih,
dan eksplisit tentang mekanisme mana yang sedang bekerja.
```

## Contoh Perhitungan

**Pelepasan data pemetaan/alamat nasional ilustratif** (metodologi mengikuti studi kasus gaya ODI,
angka ilustratif dari skala yang biasanya ditemukan studi semacam itu):

```
Estimasi biaya-terhindarkan:
  Bisnis yang jika tidak akan melisensikan data pencocokan alamat
  setara secara komersial, pada estimasi biaya lisensi rata-rata
  £4.000/tahun, di seluruh estimasi 15.000 UKM yang kini menggunakan
  dataset terbuka gratis tersebut
  = 15.000 × £4.000 = £60.000.000/tahun hanya dari biaya lisensi
  yang terhindarkan

Estimasi aktivitas-hilir (lebih spekulatif, membutuhkan sebuah
kontrafaktual):
  Produk perutean pengiriman dan logistik baru yang dibangun di atas
  data terbuka tersebut yang tidak akan ada, atau akan secara
  material lebih buruk, tanpanya — membutuhkan perbandingan terhadap
  kontrafaktual data tersebut tetap tertutup atau dilisensikan
  secara komersial (counterfactual-analysis), karena sebagian
  aktivitas tersebut akan tetap terjadi bagaimanapun juga pada data
  berbayar dengan harga lebih tinggi, yang merupakan bobot mati dalam
  pengertian "nilai yang tercipta dari membukanya"

Sebuah kasus bisnis yang dapat dipertahankan melaporkan angka biaya-
terhindarkan sebagai batas bawah yang solid, dan memperlakukan angka
aktivitas-hilir sebagai skenario batas atas, bukan fakta.
```

## Kaitan dengan Rekayasa Perangkat Lunak

Bagi insinyur, pertanyaan nilai-data-terbuka praktis biasanya lebih sempit daripada angka utama
nasional: apakah membuka API atau dataset tertentu ini (alih-alih menyimpannya di balik perjanjian
mitra) meningkatkan penggunaan kembali cukup untuk membenarkan biaya berkelanjutan dari
mendokumentasikan, memberi versi, dan mendukungnya sebagai antarmuka publik? Biaya pemeliharaan itu
nyata dan merupakan pasangan dari ekonomi bangun-sekali-gunakan-berkali-kali dari
[pemerintah sebagai platform](../government-as-a-platform/) — kedua topik ini adalah sepupu dekat,
satu tentang kode dan infrastruktur bersama, yang lain tentang data bersama. Klaim nilai data
terbuka mana pun seharusnya diperiksa terhadap
[additionalitas dan bobot mati](../additionality-and-deadweight/) sebelum masuk ke dalam sebuah
kasus bisnis: aktivitas yang akan tetap terjadi bagaimanapun juga, pada data berlisensi komersial,
bukanlah nilai yang diciptakan oleh *pembukaannya*.

## Jebakan Umum

- **Mengutip angka McKinsey $3–5 triliun sebagai spesifik-Inggris atau sebagai pangsa dataset ini**:
  itu adalah estimasi skenario global tujuh sektor dari 2013 — menggunakannya sebagai pengganda
  presisi untuk satu dataset nasional salah merepresentasikan apa angka tersebut sebenarnya.
- **Tidak ada kontrafaktual**: mengklaim kredit untuk seluruh aktivitas ekonomi hilir yang dibangun
  di atas data terbuka, tanpa bertanya seberapa banyak yang akan tetap terjadi bagaimanapun juga
  pada data berbayar atau berlisensi dengan harga lebih tinggi (lihat
  [additionalitas dan bobot mati](../additionality-and-deadweight/) dan
  [analisis kontrafaktual](../counterfactual-analysis/)).
- **Mencampuradukkan biaya produksi dengan nilai yang tercipta**: sebuah dataset yang mahal untuk
  dikumpulkan tidak secara otomatis bernilai untuk dilepaskan, dan yang murah tidak secara otomatis
  bernilai rendah — nilai mengikuti penggunaan hilir, bukan biaya hulu.
- **Mengabaikan biaya pemeliharaan berkelanjutan dari "terbuka"**: mempublikasikan sebuah ekstrak
  CSV satu kali bukanlah komitmen yang sama dengan menjalankan sebuah API terbuka yang
  terdokumentasi, terversi, dan didukung — kekurangan pendanaan yang terakhir setelah pengumuman
  peluncuran adalah mode kegagalan yang umum.

## Sumber

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
