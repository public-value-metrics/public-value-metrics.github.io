# Social Value Act

Public Services (Social Value) Act 2012 adalah sebuah kewajiban statutori Inggris yang mewajibkan
otoritas publik di Inggris dan Wales untuk mempertimbangkan bagaimana apa yang diadakan dapat
meningkatkan kesejahteraan ekonomi, sosial, dan lingkungan wilayah yang relevan, dan untuk
mempertimbangkan berkonsultasi tentang hal ini, sebelum memulai sebuah proses pengadaan untuk
kontrak layanan publik. Ini mulai berlaku pada Januari 2013 sebagai sebuah kewajiban "memperhatikan"
yang relatif ringan, dan diperkuat secara substansial oleh Procurement Policy Note (PPN) 06/20 pada
Januari 2021, yang mewajibkan kontrak pemerintah pusat untuk secara eksplisit mengevaluasi — bukan
sekadar mempertimbangkan — nilai sosial, dengan sebuah pembobotan minimum dalam kriteria pemberian
kontrak.

## Mengapa Ini Penting

Sebelum PPN 06/20, "mempertimbangkan" nilai sosial dapat dipenuhi oleh seorang komisioner yang
mencatat mereka telah memikirkannya, tanpa persyaratan bahwa itu memengaruhi keputusan pemberian
kontrak — sebuah kewajiban yang mudah dipenuhi di atas kertas dan diabaikan dalam praktik. PPN
06/20 menutup kesenjangan itu untuk pengadaan pemerintah pusat: ia mewajibkan nilai sosial dinilai
sebagai bagian dari evaluasi tender, disusun di sekitar lima tema prioritas nasional — pemulihan
COVID-19, menangani ketimpangan ekonomi, memerangi perubahan iklim, kesempatan yang setara, dan
kesejahteraan — dan umumnya diukur menggunakan kerangka National TOMs (Themes, Outcomes, Measures)
yang dikelola oleh Social Value Portal. Bagi seorang insinyur perangkat lunak yang membangun alat
pengadaan, manajemen kontrak, atau dukungan penawaran untuk sektor publik, ini adalah dasar hukum
yang diwajibkan klien Anda untuk dibangun di atasnya, bukan sebuah nice-to-have opsional.

## Matematika

Nilai sosial adalah topik berbentuk kerangka kerja; "matematikanya" adalah struktur penilaian yang
digunakan sebagian besar otoritas:

```
Skor tender total = Pembobotan harga/biaya + Pembobotan kualitas +
                     Pembobotan nilai sosial

PPN 06/20 (pemerintah pusat): pembobotan nilai sosial ≥ 10% dari
skor total

Tema nilai sosial (PPN 06/20):
 1. Pemulihan COVID-19
 2. Menangani ketimpangan ekonomi
 3. Memerangi perubahan iklim
 4. Kesempatan yang setara
 5. Kesejahteraan
```

Penawar biasanya memonetisasi komitmen mereka terhadap tema-tema ini menggunakan
[basis data biaya satuan](../unit-cost-databases/), dan logika monetisasi yang sama yang digunakan
dalam [laba atas investasi sosial](../social-return-on-investment/) berlaku: sebuah komitmen
seharusnya dibuktikan, dapat diatribusikan pada kontrak, dan tidak dihitung ganda terhadap pendanaan
lain.

## Contoh Perhitungan

**Kontrak TI pemerintah daerah**: sebuah kontrak £2 juta, 3 tahun dinilai 60% kualitas, 30% harga,
10% nilai sosial. Penawar A berkomitmen pada 2 magang, £150.000 belanja subkontrak lokal, dan 200
jam pelatihan keterampilan digital pro bono untuk sebuah sekolah lokal, dimonetisasi menggunakan
proksi dari sebuah basis data biaya satuan pada gabungan £90.000 nilai sosial tambahan. Penawar B
berkomitmen pada sebuah paket yang lebih kecil dimonetisasi pada £40.000. Jika otoritas tersebut
menilai nilai sosial secara proporsional terhadap penawaran terkuat, Penawar A menerima 10 poin
penuh; Penawar B menerima 10 × (£40.000 ÷ £90.000) = 4,4 poin — sebuah kesenjangan 5,6 poin yang
dapat memutuskan kontrak tersebut bahkan ketika kualitas dan harga dekat.

**Penawar sektor sukarela**: sebuah VCSE (voluntary, community and social enterprise) kecil yang
menawar untuk sebuah kontrak pemeliharaan lahan terhadap sebuah pesaing komersial tidak dapat
bersaing hanya pada harga satuan, tetapi menggunakan proksi Global Value Exchange untuk memonetisasi
komitmen ketenagakerjaan komunitas dan kesukarelawanan yang sudah ada, membuat sebuah kasus nilai
sosial yang dibuktikan layak dinilai berdampingan dengan harga dan kualitas.

## Kaitan dengan Rekayasa Perangkat Lunak

Memenangkan sebuah penawaran dengan komitmen nilai sosial yang termonetisasi menciptakan sebuah
kewajiban untuk membuktikan penyampaian terhadapnya melalui manajemen kontrak — alat yang mencatat
mulainya magang, belanja lokal, dan jam pelatihan terhadap komitmen spesifik yang dinilai pada
tender, mengalir ke dalam pertemuan tinjauan kontrak alih-alih dilupakan setelah kontrak
ditandatangani. Daftar G-Cloud dan Digital Marketplace semakin membutuhkan pernyataan nilai sosial
pada titik pendaftaran. Lihat [laba atas investasi sosial](../social-return-on-investment/) untuk
metode penilaian di balik komitmen tersebut, [basis data biaya satuan](../unit-cost-databases/)
untuk proksi yang digunakan penawar, dan [luaran vs keluaran](../outcomes-vs-outputs/) untuk
memastikan komitmen yang disampaikan adalah hasil, bukan sekadar jumlah aktivitas.

## Jebakan Umum

- **Penawaran social-washing.** Komitmen samar ("kami mendukung komunitas lokal") yang tidak dapat
  diukur atau dipertanggungjawabkan selama manajemen kontrak mencetak skor bagus tetapi tidak
  menyampaikan apa pun yang dapat diverifikasi.
- **Memperlakukan nilai sosial sebagai pemecah seri.** PPN 06/20 mensyaratkan nilai sosial dievaluasi
  secara eksplisit dalam kriteria pemberian kontrak, bukan digunakan secara informal untuk memecah
  seri antara penawaran yang jika tidak setara.
- **Tidak ada tindak lanjut manajemen kontrak.** Komitmen yang dinilai pada tender sering tidak
  pernah dilacak selama penyampaian — lihat [realisasi manfaat](../benefits-realization/).
- **Kerangka pengukuran yang tidak konsisten di seluruh kontrak.** Menggunakan sumber proksi yang
  berbeda untuk komitmen serupa pada kontrak yang berbeda membuat perbandingan tingkat portofolio
  tidak bermakna, itulah mengapa kerangka umum seperti National TOMs dan basis data biaya satuan
  bersama ada.

## Sumber

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
