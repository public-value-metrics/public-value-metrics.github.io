# Valuasi Preferensi Pernyataan (Stated Preference Valuation)

Metode preferensi pernyataan mengestimasi nilai suatu barang non-pasar dengan langsung menanyakan
kepada masyarakat berapa besar kesediaan mereka membayar untuk barang tersebut, atau kesediaan
menerima kompensasi untuk melepaskannya, biasanya melalui survei terstruktur yang menggambarkan
skenario hipotetis. Valuasi kontingensi (contingent valuation) adalah teknik yang paling dikenal
dalam keluarga metode ini.

## Mengapa Ini Penting

Green Book Annex 2 (panduan tambahan tentang menilai dampak non-pasar) mendukung metode preferensi
pernyataan untuk barang yang sama sekali tidak memiliki transaksi pasar yang dapat diamati untuk
menyimpulkan nilainya — kualitas udara, keanekaragaman hayati, perlindungan banjir, nilai eksistensi
sebuah lanskap yang mungkin tidak akan pernah dikunjungi seseorang
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra telah menerbitkan panduan preferensi pernyataannya sendiri untuk penilaian lingkungan, justru
karena sebagian besar nilai lingkungan (pelestarian habitat, kualitas air) sama sekali tidak
memiliki pasar proksi, berbeda misalnya dengan kebisingan, yang setidaknya berkorelasi dengan harga
rumah yang dapat diamati (lihat [valuasi preferensi terungkap](../revealed-preference-valuation/)).

Daya tarik utama preferensi pernyataan — dapat menilai apa pun secara harfiah, termasuk barang yang
belum pernah ditransaksikan oleh siapa pun — juga menjadi sumber masalah kredibilitasnya. Karena
responden tidak benar-benar mengeluarkan uang, survei valuasi kontingensi rentan terhadap bias
hipotetis (orang melebih-lebihkan kesediaan membayar ketika tidak ada batasan anggaran yang nyata),
efek pembingkaian (embedding effects) (barang yang sama dinilai berbeda tergantung apa lagi yang
ada dalam survei), dan bias titik awal (starting-point bias) dalam desain permainan tawar-menawar.
Panel NOAA tahun 1993 tentang valuasi kontingensi, yang dibentuk setelah litigasi tumpahan minyak
Exxon Valdez, menetapkan standar desain — format referendum biner "apakah Anda mau membayar £X,
ya/tidak" alih-alih tawar-menawar terbuka, serta pengingat wajib tentang batasan anggaran nyata
responden — yang tetap menjadi standar rujukan untuk survei yang dapat dipertanggungjawabkan.

## Matematika

```
Valuasi kontingensi (format referendum):
  Ajukan pilihan biner: "apakah Anda mau membayar £X per tahun untuk hasil Y? ya/tidak"
  Variasikan X secara acak di antara responden.
  Cocokkan kesediaan membayar sebagai fungsi dari tingkat respons ya/tidak pada setiap X.

Rata-rata WTP = luas area di bawah kurva permintaan yang diestimasi
Nilai agregat = Rata-rata WTP × populasi terdampak

Varian eksperimen pilihan (pemodelan pilihan diskrit):
  Berikan responden pilihan berulang antara kombinasi atribut
  (termasuk atribut biaya), estimasikan harga implisit untuk setiap
  atribut non-biaya dari trade-off yang diungkapkan responden.
```

Varian eksperimen pilihan umumnya lebih disukai dalam praktik Inggris saat ini dibandingkan valuasi
kontingensi satu pertanyaan, karena memaksa responden untuk menukar beberapa atribut dengan biaya
secara berulang menghasilkan estimasi yang lebih konsisten secara internal dan lebih sulit
dimanipulasi dibandingkan satu pertanyaan ya/tidak saja.

## Contoh Perhitungan

**Pemerintah pusat**: Defra menugaskan survei valuasi kontingensi untuk menilai program peningkatan
kualitas air sungai. Survei format referendum terhadap 2.000 rumah tangga menemukan 62% bersedia
membayar £40/tahun melalui tambahan tagihan air hipotetis, dan kurva permintaan yang diestimasi
menghasilkan rata-rata kesediaan membayar sebesar £28/tahun per rumah tangga.

```
Rata-rata WTP = £28/rumah tangga/tahun
Rumah tangga di daerah tangkapan air = 340.000
Nilai agregat tahunan = £28 × 340.000 = £9,52 juta/tahun

Selama periode penilaian 20 tahun dengan tingkat diskonto 3,5% (faktor anuitas ≈ 14,2):
PV(manfaat) ≈ £9,52 juta × 14,2 ≈ £135 juta
```

Angka agregat ini kemudian dibandingkan dengan sisi biaya dari
[analisis biaya-manfaat sosial](../social-cost-benefit-analysis/) program tersebut. Green Book
mensyaratkan bahwa bukti preferensi pernyataan semacam ini dilaporkan bersama interval
kepercayaannya dan metodologi surveinya, bukan sebagai estimasi titik yang berdiri sendiri, justru
karena angka yang mendasarinya lebih rapuh dibandingkan harga pasar.

**Organisasi amal**: sebuah yayasan warisan budaya mensurvei pengunjung dan bukan-pengunjung
mengenai kesediaan membayar untuk mencegah penutupan sebuah bangunan bersejarah yang tidak selalu
dikunjungi oleh kedua kelompok tersebut (nilai eksistensinya). Karena bukan-pengunjung yang tidak
akan pernah melihat bangunan tersebut tetap melaporkan WTP positif, survei ini menangkap nilai
eksistensi dan nilai warisan (bequest value) yang sepenuhnya akan terlewatkan oleh penghitungan
pendapatan biaya masuk sederhana (proksi preferensi terungkap) — menunjukkan keunggulan sejati
preferensi pernyataan di tempat yang sama sekali tidak ada transaksi pasar untuk mengungkap nilai.

## Kaitan dengan Rekayasa Perangkat Lunak

Metode preferensi pernyataan jarang berlaku langsung pada pekerjaan rekayasa perangkat lunak, tetapi
insinyur yang membangun platform konsultasi warga, alat partisipasi anggaran, atau infrastruktur
survei publik sering kali sedang membangun instrumen yang menjadi tumpuan analisis ekonomi tersebut.
Menata detail desain survei dengan benar — jumlah tawaran yang diacak, pembingkaian referendum
biner alih-alih pertanyaan terbuka, pengingat eksplisit batasan anggaran — bukan sekadar kenyamanan
UX, melainkan hal yang membuat valuasi yang dihasilkan dapat dipertahankan di bawah pengawasan;
survei dalam aplikasi yang dirancang buruk dapat membatalkan hasil analisis ekonomi berbulan-bulan
setelahnya. Lihat [metrik kepuasan warga](../citizen-satisfaction-metrics/) untuk disiplin yang
lebih umum dalam menjaring data opini publik yang mampu menopang bobot analitis.

## Jebakan Umum

- **Pertanyaan terbuka "berapa yang bersedia Anda bayar?".** Pertanyaan ini jauh lebih rentan
  terhadap bias strategis dan bias jangkar dibandingkan pembingkaian referendum biner; rekomendasi
  panel NOAA untuk menggunakan format referendum ada justru karena penjaringan data terbuka
  berkinerja buruk.
- **Tidak ada pengingat tentang batasan anggaran nyata responden.** Tanpa itu, WTP yang dinyatakan
  secara rutin melampaui apa yang benar-benar akan dibayar orang yang sama ketika trade-off anggaran
  nyata sedang berlaku — bias hipotetis.
- **Efek pembingkaian yang diabaikan.** Barang yang sama, dinilai sendirian versus dinilai sebagai
  bagian dari kombinasi yang lebih besar, menghasilkan estimasi WTP yang berbeda; laporkan apa lagi,
  jika ada, yang termasuk dalam kerangka survei.
- **Memperlakukan estimasi titik dari satu survei sebagai kepastian.** Praktik Green Book
  mengharapkan sebuah rentang dan pembahasan bias yang diketahui, bukan angka tunggal yang dibawa
  begitu saja ke dalam tabel biaya-manfaat seolah-olah itu adalah harga pasar.

## Sumber

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
