# Pemerintah sebagai Platform (GaaP)

Pemerintah sebagai Platform adalah strategi untuk membangun komponen bersama dan dapat digunakan
kembali — sebuah layanan notifikasi, sebuah layanan pembayaran, sebuah layanan identitas — satu kali,
secara terpusat, sehingga ratusan layanan pemerintah individual mengonsumsinya alih-alih masing-
masing membangun milik mereka sendiri. Ini membingkai ulang infrastruktur digital publik sebagai
sebuah masalah ekonomi platform: nilainya bukan pada satu integrasi tertentu, melainkan pada biaya
marjinal tim *berikutnya* yang mengadopsinya yang mendekati nol.

## Mengapa Ini Penting

GDS memaparkan strategi tersebut secara formal dalam publikasi "Government as a Platform" tahun 2015,
dengan argumen bahwa pemerintah telah membangun kapabilitas yang sama — penerimaan pembayaran,
notifikasi pengguna, verifikasi identitas, pencarian alamat — secara terpisah di layanan demi
layanan, masing-masing membawa beban pengadaan, penilaian keamanan, dan dukungan berkelanjutannya
sendiri. Alternatifnya adalah sejumlah kecil platform bersama, dibangun dengan standar tinggi satu
kali dan digunakan kembali di mana-mana: GOV.UK Notify untuk mengirim email, pesan teks, dan surat,
GOV.UK Pay untuk menerima pembayaran daring, dan GOV.UK One Login (penerus program identitas GOV.UK
Verify sebelumnya) untuk verifikasi identitas. Skala yang dicapai platform-platform ini adalah bukti
paling jelas bahwa strategi tersebut berhasil: GOV.UK Pay telah memproses lebih dari £10 miliar
transaksi di sekitar 1.800 layanan individual — dan di mana dibutuhkan sekitar empat tahun untuk
memproses £1 miliar pertamanya, kini ia memproses jumlah itu dalam sekitar lima bulan — sementara
GOV.UK Notify telah mengirim lebih dari 9 miliar pesan atas nama lebih dari 1.500 organisasi
pemerintah. Setiap satu dari layanan yang mengadopsi tersebut menghindari pembangunan, pengamanan,
dan pemeliharaan gateway pembayaran atau pipeline pesannya sendiri.

## Matematika

```
Biaya pembangunan per layanan (tanpa platform) = N layanan × biaya
  membangun, menilai-keamanan, dan menjalankan satu sistem
  pembayaran/notifikasi/identitas

Biaya platform = biaya pembangunan platform tetap
              + biaya marjinal per layanan yang mengadopsi (integrasi,
                konfigurasi, dukungan tim platform berkelanjutan)

Penggunaan kembali mencapai titik impas setelah:
  biaya pembangunan platform < N × (biaya pembangunan per layanan −
  biaya integrasi marjinal)

Untuk sebuah platform yang matang, biaya marjinal per pengadopsi
tambahan mendekati biaya transaksi/pesan saja — biaya tetapnya
diamortisasi di seluruh estat pemerintah, bukan anggaran satu
departemen, itulah mengapa komponen GaaP biasanya didanai secara
terpusat alih-alih dibebankan pada pemulihan biaya penuh kepada
pengadopsi awal.
```

## Contoh Perhitungan

**Pemerintah daerah mengadopsi GOV.UK Pay alih-alih membangun gateway pembayaran**:

```
Estimasi bangun-sendiri:
  Pekerjaan kepatuhan PCI-DSS + integrasi + pemeliharaan berkelanjutan
  ≈ £85.000 pembangunan + £22.000/tahun pemeliharaan

Adopsi GOV.UK Pay:
  Upaya integrasi ≈ £12.000 (waktu pengembang)
  Biaya transaksi: pembayaran kartu pemerintah-ke-warga biasanya
  dikenakan persentase kecil + biaya tetap per transaksi, tanpa beban
  PCI-DSS terpisah yang ditanggung dewan kota
  ≈ £12.000 sekali bayar, biaya berkelanjutan bervariasi dengan
    volume, bukan tetap

Penghematan tahun pertama ≈ £85.000 − £12.000 = £73.000, sebelum
menghitung pemeliharaan £22.000/tahun yang terhindarkan dan risiko
kepatuhan yang terhindarkan dari menyimpan data kartu dalam sebuah
sistem yang dijalankan dewan kota sama sekali — kategori kedua ini
adalah nilai keamanan yang dibahas dalam
public-sector-cybersecurity-value.
```

Skalakan £73.000 itu di sekitar 1.800 layanan yang kini menggunakan GOV.UK Pay dan biaya pembangunan
terhindarkan agregat di seluruh pemerintahan mencapai ratusan juta — ekonomi platform, bukan
integrasi tunggal mana pun, adalah tempat nilai strategi tersebut sebenarnya berada.

## Kaitan dengan Rekayasa Perangkat Lunak

Pemerintah sebagai Platform adalah argumen langsung untuk
[membangun-vs-membeli di pemerintahan](../build-vs-buy-in-government/): ketika sebuah komponen
bersama, terjamin, dan dikelola dengan baik sudah ada, membangun padanan khusus sangat jarang
merupakan pilihan [nilai-untuk-uang](../value-for-money/) yang lebih baik, dan hampir secara
definisi gagal pada [standar layanan digital](../digital-service-standard/) poin 13 ("gunakan dan
berkontribusi pada standar terbuka, komponen umum, dan pola"). Ini juga mengubah bentuk
[total biaya kepemilikan TI pemerintah](../total-cost-of-ownership-in-government-it/): adopsi
platform menukar baris modal dan pemeliharaan yang besar dengan biaya operasional yang lebih kecil
dan terkait penggunaan, yang lebih mudah diramalkan dan lebih mudah didanai-mundur jika sebuah
layanan dinonaktifkan. Penggunaan kembali komponen secara terbuka memiliki sepupu dalam
[nilai data terbuka](../open-data-value/) — keduanya adalah strategi untuk memperlakukan sesuatu
yang diproduksi pemerintah satu kali sebagai infrastruktur bersama alih-alih aset departemen.

## Jebakan Umum

- **Pembangunan ulang bayangan**: tim diam-diam membangun integrasi pembayaran atau notifikasi
  mereka sendiri karena proses onboarding platform lebih lambat daripada melakukannya sendiri —
  sebuah masalah friksi tata kelola, bukan teknologi, dan ini diam-diam mengikis ekonomi penggunaan
  kembali yang menjadi sandaran seluruh strategi.
- **Kekurangan pendanaan tim platform relatif terhadap nilai yang diciptakannya**: nilai terakumulasi
  pada departemen yang mengonsumsi sementara biaya berada pada tim platform, menciptakan risiko
  kekurangan investasi kronis kecuali pendanaan disentralisasi dan dilindungi — sebuah versi dari
  tragedi milik bersama.
- **Mengukur keberhasilan platform hanya dengan penggunaan**: angka adopsi (layanan yang onboard,
  pesan yang dikirim) adalah indikator terdepan, bukan bukti nilai; uji sesungguhnya adalah
  aritmetika biaya-pembangunan-terhindarkan dan risiko-terhindarkan di atas.
- **Memperlakukan "platform" sebagai sinonim dari "monolit"**: komponen GaaP berhasil karena masing-
  masing melakukan satu hal dengan baik dengan antarmuka yang sempit dan stabil; menggabungkan
  kapabilitas yang tidak terkait ke dalam satu "platform" menciptakan ulang masalah pembangunan
  khusus pada skala yang berbeda.

## Sumber

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
