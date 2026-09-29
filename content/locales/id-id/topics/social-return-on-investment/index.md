# Laba atas Investasi Sosial (SROI)

Laba atas investasi sosial adalah sebuah kerangka kerja untuk mengukur, memonetisasi, dan
memperhitungkan sebuah konsep nilai yang luas — sosial, lingkungan, dan ekonomi — dan
menyatakannya sebagai sebuah rasio terhadap sumber daya yang diinvestasikan, misalnya "£1,44 nilai
sosial untuk setiap £1 yang diinvestasikan". Ia dirancang untuk memperluas logika akuntansi finansial
ke hasil yang tidak dihargakan pasar, tanpa kehilangan disiplin akuntansi: setiap angka dalam sebuah
SROI harus dapat dilacak ke sebuah hasil yang didefinisikan pemangku kepentingan, sebuah basis bukti,
dan sebuah penyesuaian eksplisit untuk apa yang akan terjadi bagaimanapun juga.

## Mengapa Ini Penting

SROI dikelola oleh Social Value UK dan Social Value International, badan penerus SROI Network, yang
"A Guide to Social Return on Investment" (2012) tetap menjadi metodologi rujukan. Kerangka kerja ini
bertumpu pada tujuh prinsip — libatkan pemangku kepentingan, pahami apa yang berubah, hargai hal-hal
yang penting, hanya masukkan yang material, jangan mengklaim berlebihan, bersikaplah transparan, dan
verifikasi hasilnya — dan itu adalah prinsip lima, "jangan mengklaim berlebihan", yang paling sering
gagal dipenuhi laporan SROI di lapangan. Sebuah rasio yang dihasilkan dengan melewatkan penyesuaian
bobot mati dan atribusi bukanlah sebuah SROI; itu adalah sebuah angka pemasaran yang mengenakan
pakaian SROI. Insinyur perangkat lunak yang membangun alat pelaporan untuk lembaga amal, perusahaan
sosial, atau komisioner perlu mengetahui perbedaannya, karena alat tersebut akan baik memberlakukan
disiplin tersebut atau membuatnya mudah dilewatkan.

## Matematika

SROI bergantung pada sebuah [teori perubahan](../theory-of-change/) untuk mengidentifikasi hasil
mana yang berada dalam cakupan, dan menyatakannya menggunakan rantai akuntabilitas yang sama seperti
sebuah [model logika](../logic-model/):

```
Rasio SROI = Nilai kini dari hasil / Nilai input

Proses:
 1. Tetapkan cakupan dan identifikasi pemangku kepentingan yang
    hasilnya akan diukur
 2. Petakan hasil (sebuah teori perubahan, dibuktikan bersama
    pemangku kepentingan, bukan diasumsikan)
 3. Buktikan hasil dan beri mereka sebuah nilai menggunakan proksi
    finansial
 4. Tetapkan dampak: nilai bruto − bobot mati − atribusi −
    perpindahan, lalu terapkan penurunan (drop-off)
 5. Hitung SROI: nilai kini bersih dampak ÷ nilai input
 6. Laporkan, gunakan, dan tanamkan — rasio tersebut adalah alat
    komunikasi, bukan titik akhir
```

Bobot mati, atribusi, dan perpindahan dibahas dalam
[additionalitas dan bobot mati](../additionality-and-deadweight/) dan
[perpindahan dan atribusi](../displacement-and-attribution/); ketiganya ada untuk mengisolasi dampak
[kontrafaktual](../counterfactual-analysis/) genuine dari hasil bruto.

## Contoh Perhitungan

**Program ketenagakerjaan pemerintah daerah**: biaya input tahunan £250.000. Enam puluh peserta
pindah ke ketenagakerjaan berkelanjutan; sebuah proksi finansial untuk hasil tersebut (kenaikan
kesejahteraan, ketergantungan tunjangan yang berkurang, dan pendapatan pajak digabungkan) adalah
£8.500 per orang untuk tahun pertama — lihat [basis data biaya satuan](../unit-cost-databases/)
untuk asal proksi semacam itu.

- Nilai hasil bruto: 60 × £8.500 = £510.000
- Dikurangi bobot mati (40% kemungkinan besar akan tetap menemukan pekerjaan tanpa program tersebut):
  £510.000 × 0,60 = £306.000
- Dikurangi atribusi (30% dari perubahan yang tersisa karena dukungan lembaga lain):
  £306.000 × 0,70 = £214.200
- Hasil tahun 2 pada penurunan 30%: £214.200 × 0,70 = £149.940, didiskontokan pada 3,5%/tahun
  (lihat [tingkat diskonto sosial](../social-discount-rate/)): £149.940 ÷ 1,035 = £144.870
- Total nilai kini dampak: £214.200 + £144.870 = £359.070
- **Rasio SROI: £359.070 ÷ £250.000 = 1,44**, dilaporkan sebagai "£1,44 nilai sosial untuk setiap
  £1 yang diinvestasikan"

**Lembaga amal**: sebuah layanan befriending £60.000 mengurangi kesepian bagi 80 orang lanjut usia,
dihargai pada sebuah proksi £1.100/orang/tahun. Nilai bruto £88.000; setelah bobot mati 35% dan
atribusi 15%, dampak bersih adalah £88.000 × 0,65 × 0,85 = £48.620, sebuah rasio SROI 0,81 — di
bawah titik impas, yang merupakan sebuah temuan yang sah dan berguna, bukan sebuah kegagalan untuk
ditulis.

## Kaitan dengan Rekayasa Perangkat Lunak

Sebuah kalkulator SROI yang memungkinkan pengguna memasukkan jumlah hasil dan nilai proksi tetapi
tidak memiliki bidang wajib untuk bobot mati, atribusi, atau sebuah teori perubahan yang tertaut
akan menghasilkan rasio yang digelembungkan secara default, karena mengabaikan penyesuaian adalah
jalan dengan resistensi paling rendah. Bangun disiplin tersebut ke dalam skema: setiap baris hasil
seharusnya merujuk pada sebuah kelompok pemangku kepentingan, sebuah kuantitas yang dibuktikan,
sebuah proksi finansial dengan sumbernya, dan bidang bobot mati/atribusi yang tidak opsional. Lihat
[luaran vs keluaran](../outcomes-vs-outputs/) untuk perbedaan yang menjadi sandaran pemetaan hasil
SROI, dan [model logika](../logic-model/) untuk rantai yang seharusnya dicerminkan alat tersebut
dalam model datanya.

## Jebakan Umum

- **Melewatkan bobot mati dan atribusi.** Rasio utama tanpa penyesuaian ini adalah angka bruto,
  bukan angka dampak bersih, dan prinsip Social Value UK secara eksplisit mensyaratkan keduanya.
- **Membandingkan rasio di seluruh organisasi.** Sebuah rasio SROI bergantung pada pilihan cakupan
  dan proksi yang dibuat kasus per kasus; memperlakukan sebuah rasio 4:1 dari satu laporan sebagai
  "lebih baik" daripada rasio 2:1 dari yang lain mengabaikan bahwa asumsinya tidak terstandardisasi
  seperti sebuah rasio akuntansi finansial.
- **Menghitung ganda proksi yang tumpang tindih.** Menumpuk sebuah proksi "kesepian berkurang"
  dengan sebuah proksi "kesejahteraan mental membaik" untuk penerima manfaat yang sama dapat
  menilai ganda satu perubahan yang mendasari.
- **Melewatkan keterlibatan pemangku kepentingan.** Prinsip satu mensyaratkan hasil didefinisikan
  bersama orang-orang yang mengalaminya, bukan diasumsikan oleh analis yang membangun model tersebut.

## Sumber

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
