# Basis Data Biaya Satuan (Unit Cost Databases)

Basis data biaya satuan adalah pustaka proksi finansial berbasis bukti yang telah diteliti
sebelumnya untuk berbagai hasil sosial — nilai dari berpindah dari pengangguran menjadi bekerja,
dari berkurangnya kesepian, dari kelangsungan sewa yang stabil — yang memungkinkan seorang
praktisi memonetisasi sebuah hasil tanpa harus menugaskan riset valuasi khusus setiap kali. Basis
data ini ada agar sebuah organisasi amal kecil yang menulis pengajuan pendanaan dapat menerapkan
kedisiplinan yang sama seperti konsultan bersumber daya besar, dengan menggunakan kembali proksi
yang sudah diturunkan dan dipublikasikan oleh pihak lain.

## Mengapa Ini Penting

UK Social Value Bank milik HACT, yang dikembangkan bersama ekonom Daniel Fujiwara menggunakan
metode valuasi kesejahteraan, dan Global Value Exchange, sebuah basis data proksi finansial yang
terbuka dan bersumber banyak orang (crowdsourced), adalah dua basis data yang paling banyak
digunakan di sektor ketiga dan sektor publik Inggris. Keduanya ada karena pekerjaan valuasi yang
mendasarinya — [valuasi kesejahteraan](../wellbeing-valuation/) dan
[valuasi preferensi pernyataan](../stated-preference-valuation/) — mahal, menuntut secara
metodologis, dan lambat jika dijalankan dari nol untuk setiap proyek. Pustaka proksi bersama yang
dipublikasikan mengubah apa yang tadinya merupakan pekerjaan riset berbulan-bulan menjadi sekadar
pencarian, dan itulah tepatnya mengapa basis data ini penting baik untuk perhitungan
[laba sosial atas investasi](../social-return-on-investment/) maupun untuk evaluasi pengajuan
[Social Value Act](../social-value-act/): tanpa basis data ini, monetisasi yang ketat hanya akan
terjangkau bagi organisasi yang cukup besar untuk menugaskan studinya sendiri.

## Matematika

Basis data biaya satuan tidak menghitung apa pun sendiri; ia hanya menyediakan satu masukan bagi
perhitungan yang dilakukan di tempat lain:

```
Nilai proksi finansial = harga pasar, ATAU harga bayangan, ATAU valuasi
                         kesejahteraan, ATAU nilai preferensi pernyataan
                         untuk satu unit perubahan hasil yang ditetapkan
                         (misalnya, "per orang yang berpindah dari
                         pengangguran menjadi bekerja, per tahun")

Nilai yang diterapkan = jumlah hasil yang tercapai × nilai proksi satuan
```

Lihat [penetapan harga bayangan](../shadow-pricing/) untuk cara sebuah proksi dibangun ketika
tidak ada harga pasar, dan [laba sosial atas investasi](../social-return-on-investment/) untuk
bagaimana nilai yang diterapkan kemudian menjadi masukan bagi sebuah rasio setelah penyesuaian
bobot mati dan atribusi.

## Contoh Perhitungan

**Organisasi amal (SROI layanan pendampingan/befriending)**: sebuah entri basis data biaya satuan
untuk "pengurangan kesepian" memberikan proksi ilustratif sebesar £1.100 per orang per tahun.
Diterapkan pada 80 penerima manfaat: 80 × £1.100 = £88.000 nilai kotor. Jika basis data yang sama
juga memiliki proksi untuk "peningkatan kesejahteraan mental" yang menggunakan item survei
kesejahteraan yang tumpang tindih, menumpuk kedua proksi tersebut untuk 80 orang yang sama akan
menghitung ganda sebagian dari perubahan yang mendasarinya — basis data menyediakan angkanya, tetapi
menghindari tumpang tindih ini adalah tanggung jawab analis.

**Pemerintah daerah (SROI klub kerja)**: sebuah entri basis data biaya satuan untuk "berpindah dari
pengangguran menjadi bekerja secara berkelanjutan" diterapkan pada 45 peserta dengan proksi
ilustratif sebesar £8.500 per orang per tahun: 45 × £8.500 = £382.500 nilai kotor, sebelum
penyesuaian bobot mati dan atribusi yang ditunjukkan dalam
[laba sosial atas investasi](../social-return-on-investment/).

## Kaitan dengan Rekayasa Perangkat Lunak

Tim yang membangun alat pelaporan untuk organisasi amal atau komisioner diuntungkan oleh adanya
"katalog hasil" internal — sebuah tabel yang memetakan setiap hasil yang secara masuk akal dapat
diklaim oleh sebuah produk atau layanan ke proksi bernama, basis data sumbernya, tanggal
publikasinya, dan pengenal versinya — agar tim-tim berbeda dalam sebuah organisasi tidak
masing-masing memilih nilai yang sedikit berbeda untuk hasil yang sama. Membungkus data terbuka
Global Value Exchange di balik layanan pencarian, dengan sumber dan tanggal selalu ditampilkan
bersama angkanya, menjaga proksi tersebut tetap dapat diaudit, bukan sekadar angka ajaib yang
terkubur dalam sebuah spreadsheet. Lihat [laba sosial atas investasi](../social-return-on-investment/)
dan [social value act](../social-value-act/) untuk dua tempat utama proksi ini digunakan.

## Jebakan Umum

- **Memperlakukan proksi seolah-olah presisi.** Sebagian besar proksi yang dipublikasikan adalah
  rata-rata hasil pemodelan dari studi valuasi kesejahteraan dengan interval kepercayaan yang
  lebar; mengutip satu angka hingga ke satuan poundsterling melebih-lebihkan presisi yang
  sebenarnya didukung oleh riset yang mendasarinya.
- **Menghitung ganda proksi yang tumpang tindih.** Menggabungkan proksi (misalnya "berkurangnya
  kesepian" dan "peningkatan kesejahteraan mental") yang diturunkan dari konstruk survei yang
  tumpang tindih menilai perubahan yang sama dua kali.
- **Menggunakan proksi di luar konteks tanpa penyesuaian.** Proksi yang dikalibrasi pada populasi
  dan tahun nasional tertentu, diterapkan di tempat lain tanpa penyesuaian inflasi atau konteks,
  diam-diam salah menyatakan nilainya.
- **Tidak memeriksa provenansi.** Global Value Exchange bersifat terbuka dan bersumber banyak
  orang, sehingga kualitas entrinya bervariasi menurut kontributor; periksa sumber yang
  mendasarinya sebelum mengutip sebuah angka dalam pengajuan pendanaan atau pengadaan.

## Sumber

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
