# Harga Bayangan

Sebuah harga bayangan (shadow price) adalah nilai yang diestimasi dan ditetapkan pada sebuah barang,
sumber daya, atau eksternalitas yang tidak memiliki harga pasar yang dapat diamati, atau yang harga
pasarnya terdistorsi dan tidak mencerminkan nilai sosial sejatinya. Penilaian pemerintah bergantung
pada sekumpulan kecil harga bayangan resmi — karbon, waktu non-kerja, tenaga kerja yang menganggur —
dipublikasikan secara terpusat sehingga setiap departemen menggunakan angka yang sama.

## Mengapa Ini Penting

Harga bayangan ada karena [analisis biaya-manfaat sosial](../social-cost-benefit-analysis/) tidak
dapat berfungsi tanpa sebuah nilai moneter untuk setiap biaya dan manfaat, dan beberapa yang paling
konsekuensial — satu ton karbon yang diemisikan, satu jam waktu seorang komuter, satu jam tenaga
kerja yang jika tidak akan menganggur — sama sekali tidak memiliki harga pasar, atau memiliki harga
pasar yang salah merepresentasikan biaya sosial sejatinya. HM Treasury dan Department for Energy
Security and Net Zero bersama-sama mempublikasikan harga bayangan karbon yang digunakan di seluruh
penilaian pemerintah Inggris
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
diturunkan bukan dari harga pasar karbon mana pun tetapi dari sebuah pendekatan konsisten-target:
nilai karbon ditetapkan pada biaya mitigasi marjinal yang dibutuhkan untuk mencapai anggaran karbon
yang diundangkan Inggris, yang merupakan logika yang secara fundamental berbeda dari mengamati
berapa harga karbon sebenarnya diperdagangkan di UK atau EU Emissions Trading Scheme.

Tingkat upah bayangan mengikuti logika serupa di sisi tenaga kerja. Mempekerjakan seseorang yang
jika tidak akan menganggur tidak membebani masyarakat sebesar upah penuhnya — sebagian dari upah
tersebut adalah transfer dari pembayaran tunjangan yang dilewatkan dan waktu senggang/pencarian
yang hilang alih-alih tarikan bersih baru pada sumber daya masyarakat — sehingga panduan Green Book
menetapkan sebuah harga bayangan di bawah upah pasar untuk tenaga kerja yang diambil dari
pengangguran, mencerminkan biaya peluang sejati tenaga kerja tersebut (lihat
[biaya peluang dalam belanja publik](../opportunity-cost-in-public-spending/)) alih-alih harga
pasarnya.

## Matematika

```
Harga bayangan karbon (struktur ilustratif, nilai terkini dari alat
nilai karbon resmi BEIS/DESNZ — jangan gunakan angka usang):
  Nilai sektor perdagangan: diinformasikan oleh lintasan harga
    izin ETS
  Nilai sektor non-perdagangan (konsisten-target): ditetapkan pada
    biaya marjinal mitigasi yang dibutuhkan untuk memenuhi anggaran
    karbon yang diundangkan, naik seiring waktu seiring opsi mitigasi
    yang lebih mudah habis
  Diterapkan sebagai: £/ton CO2e × ton yang diemisikan atau
    dimitigasi oleh opsi tersebut, didiskontokan pada tingkat
    diskonto sosial untuk tahun-tahun mendatang

Tingkat upah bayangan (SWR):
  SWR = Upah pasar − (nilai waktu senggang/pencarian yang dilewatkan
                        yang dihemat + nilai pembayaran tunjangan
                        yang tidak lagi dibayarkan)
  Biasanya dinyatakan sebagai sebuah pecahan dari upah pasar
    (misalnya SWR = 0,6 × upah pasar di sebuah area pengangguran
    tinggi, sesuai panduan Green Book Annex A tentang pasar tenaga
    kerja dengan kapasitas cadangan)
```

Kedua angka tersebut adalah konvensi kebijakan yang ditetapkan secara terpusat, bukan observasi
pasar empiris — inti dari sebuah harga bayangan adalah menggantikan sebuah pasar yang hilang atau
terdistorsi, sehingga sebuah penilaian yang menggunakannya harus mengutip sumber resmi terkini
alih-alih menurunkan angkanya sendiri, justru agar penilaian setiap departemen dapat dibandingkan.

## Contoh Perhitungan

**Pemerintah pusat**: sebuah penilaian skema pertahanan banjir mengestimasi ia menghindarkan 400
ton emisi CO2e per tahun (melalui berkurangnya penggunaan alat berat darurat dan berkurangnya karbon
terkandung dari rekonstruksi yang terhindarkan) selama masa penilaian 30 tahun, dibandingkan
terhadap baseline "lakukan minimum".

```
Harga bayangan karbon ilustratif: £280/ton CO2e (tahun 1, naik
  selama periode penilaian sesuai jadwal nilai karbon non-perdagangan
  resmi)
Manfaat karbon tahun 1 = 400 × £280 = £112.000
```

Karena jadwal resmi memiliki nilai karbon *naik* selama periode penilaian (mencerminkan
mengetatnya anggaran karbon), analis harus menerapkan nilai spesifik-tahun yang benar untuk setiap
tahun dari aliran 30 tahun tersebut, bukan tingkat datar — menggunakan nilai tahun 1 sepanjang waktu
akan meremehkan manfaat tahun-tahun kemudian dan mendistorsi peringkat terhadap desain pertahanan
banjir alternatif dengan profil karbon yang berbeda.

**Pemerintah daerah**: program dukungan ketenagakerjaan sebuah dewan kota untuk penduduk pengangguran
jangka panjang menempatkan 150 orang ke dalam pekerjaan berupah £11/jam. Menghargai ini menggunakan
upah pasar penuh akan mengkreditkan program tersebut dengan £11 × jam kerja sebagai sebuah manfaat
sosial, tetapi pendekatan tingkat upah bayangan mengakui bahwa mereka bukanlah pekerja yang diambil
dari pekerjaan lain — biaya peluang sejati tenaga kerja mereka sebelum program tersebut rendah.

```
Upah pasar: £11,00/jam
Tingkat upah bayangan (ilustratif, pengangguran lokal tinggi):
  0,6 × upah pasar = £6,60/jam
Manfaat sosial bersih yang dapat diatribusikan per jam kerja
  ≈ £11,00 − £6,60 = £4,40/jam
  (nilai "ekstra" yang tercipta dari memindahkan tenaga kerja yang
   benar-benar menganggur ke dalam produksi, berbeda dari upahnya
   sendiri, yang sebagian besar adalah sebuah transfer)
```

Inilah mengapa penilaian program ketenagakerjaan di area pengangguran tinggi dapat menunjukkan nilai
sosial bersih positif bahkan ketika program yang sama, dijalankan di sebuah area ketenagakerjaan
penuh di mana tenaga kerja yang tergantikan sekadar akan diambil dari pekerjaan lain, tidak akan
menunjukkan hal tersebut.

## Kaitan dengan Rekayasa Perangkat Lunak

Harga bayangan jarang menyentuh penyampaian perangkat lunak secara langsung, tetapi ini penting
kapan pun sebuah kasus bisnis mengklaim sebuah manfaat karbon atau sosial dari sebuah perubahan TI —
sebuah konsolidasi pusat data yang mengklaim penghematan karbon, atau sebuah layanan tanpa-kertas
yang mengklaim karbon pencetakan dan pos yang terhindarkan, harus menggunakan harga bayangan karbon
resmi terkini alih-alih angka ciptaan, dan harus menerapkan jadwal tahun-per-tahun yang benar
alih-alih tingkat datar, persis seperti input penilaian Green Book lainnya. Lihat
[total biaya kepemilikan TI pemerintah](../total-cost-of-ownership-in-government-it/) dan
[nilai keamanan siber sektor publik](../public-sector-cybersecurity-value/), yang keduanya sering
membutuhkan sebuah harga bayangan untuk sebuah input yang sulit dimonetisasi (risiko pelanggaran,
downtime) berdampingan dengan item yang dihitung biayanya secara langsung.

## Jebakan Umum

- **Menggunakan angka karbon atau upah yang usang.** Kedua nilai direvisi secara berkala oleh
  panduan terpusat; sebuah penilaian yang dibangun berdasarkan angka yang telah digantikan tidak
  akan bertahan terhadap pemeriksaan Treasury.
- **Menerapkan harga karbon bayangan datar di seluruh penilaian multi-dekade.** Jadwal resmi naik
  seiring waktu; menggunakan nilai tahun 1 sepanjang waktu salah menyatakan profil manfaat atau
  biaya.
- **Mencampuradukkan upah bayangan dengan sebuah diskon pada gaji sesungguhnya pekerja.** Tingkat
  upah bayangan menyesuaikan penilaian *penilaian tersebut* atas input tenaga kerja, bukan upah
  yang sebenarnya dibayarkan pekerja tersebut — mencampuradukkan keduanya mengundang (secara
  keliru) pembenaran pembayaran di bawah pasar.
- **Menurunkan sebuah harga bayangan khusus alih-alih menggunakan yang resmi.** Harga bayangan
  adalah konvensi kebijakan justru agar penilaian dapat dibandingkan di seluruh departemen; sebuah
  angka ciptaan lokal, betapapun beralasan baiknya, merusak komparabilitas tersebut.

## Sumber

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
