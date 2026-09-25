# Analisis Biaya-Manfaat Sosial (SCBA)

Analisis biaya-manfaat sosial mengonversi setiap biaya dan manfaat sebuah kebijakan atau program —
pasar dan non-pasar — menjadi satu satuan moneter bersama, mendiskontokan aliran masa depan ke nilai
kini, dan menetokannya untuk menghasilkan satu angka tunggal: apakah proposal ini membuat masyarakat
menjadi lebih baik, dan sebesar apa?

## Mengapa Ini Penting

SCBA adalah metode kuantitatif default dalam kasus ekonomi
[penilaian Green Book](../green-book-appraisal/): panduan HM Treasury mensyaratkan proposal untuk
mendemonstrasikan nilai sosial kini bersih (NPSV) yang positif di mana pun manfaat dapat dimonetisasi
secara kredibel, menggunakan kesediaan-membayar sebagai prinsip penilaian dasar untuk barang non-pasar
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Bab 5). Disiplin yang diberlakukannya adalah bahwa analisis biaya-manfaat "sosial" bukanlah latihan
yang sama seperti penilaian investasi sektor swasta: ia harus mencakup biaya dan manfaat yang jatuh
pada pihak ketiga yang tidak menjadi bagian dari transaksi (eksternalitas), ia harus menggunakan
[tingkat diskonto sosial](../social-discount-rate/) alih-alih biaya modal komersial, dan ia
seharusnya menerapkan [pembobotan distribusional](../distributional-weighting/) di mana satu
poundsterling lebih penting bagi rumah tangga miskin daripada yang lebih kaya.

Di mana SCBA runtuh persis di tempat yang diperkirakan para pengkritiknya: barang tanpa analog pasar
— udara bersih, kohesi sosial, nilai satu nyawa yang diselamatkan — harus dimonetisasi menggunakan
metode [preferensi dinyatakan](../stated-preference-valuation/) atau
[preferensi terungkap](../revealed-preference-valuation/), atau sebuah
[harga bayangan](../shadow-pricing/) harus dibangun. Ketika monetisasi diperdebatkan alih-alih
sekadar sulit, Green Book sendiri merekomendasikan mundur ke
[analisis efektivitas biaya](../cost-effectiveness-analysis-in-government/) atau
[analisis keputusan multi-kriteria](../multi-criteria-decision-analysis/) alih-alih memaksakan
sebuah angka yang tidak dipercaya siapa pun.

## Matematika

```
NPSV = Σ [t=0 hingga T] (Manfaat_t − Biaya_t) / (1 + r)^t

di mana:
  Manfaat_t = seluruh manfaat termonetisasi pada tahun t, termasuk
              barang non-pasar yang dihargai melalui preferensi
              dinyatakan/terungkap atau harga bayangan
  Biaya_t   = seluruh biaya termonetisasi pada tahun t, termasuk
              biaya peluang sumber daya (lihat
              ../opportunity-cost-in-public-spending/)
  r         = tingkat diskonto sosial (HM Treasury menetapkan 3,5%
              menurun menjadi tingkat lebih rendah melampaui tahun
              30, sesuai Green Book Annex A)
  T         = periode penilaian

Rasio biaya-manfaat (BCR) = Σ PV(Manfaat) / Σ PV(Biaya)
```

Sebuah BCR di atas 1 (atau NPSV di atas nol) menunjukkan nilai sosial bersih. Kategori nilai-untuk-
uang Green Book (sebagaimana digunakan dalam penilaian transportasi dan infrastruktur) melabeli
rentang BCR: di bawah 1,0 adalah nilai-untuk-uang buruk, 1,0–1,5 adalah rendah, 1,5–2,0 adalah
sedang, 2,0–4,0 adalah tinggi, dan di atas 4,0 adalah sangat tinggi. Analisis sensitivitas —
menjalankan ulang NPSV di bawah asumsi pesimistis dan optimistis — bersifat wajib, bukan opsional,
karena manfaat non-pasar yang termonetisasi membawa pita ketidakpastian yang luas.

## Contoh Perhitungan

**Pemerintah daerah**: sebuah dewan kota menilai investasi £3 juta dalam sebuah jaringan bersepeda
dan berjalan kaki baru selama periode penilaian 20 tahun pada tingkat diskonto 3,5%.

```
Biaya: modal £3 juta pada tahun 0, £50.000/tahun pemeliharaan (tahun 1-20)
PV(pemeliharaan) ≈ £50.000 × 14,2 (faktor anuitas 20 tahun pada 3,5%)
                  ≈ £710.000
Total PV(biaya) ≈ £3,71 juta

Manfaat (semua termonetisasi melalui alat penilaian DfT/WHO yang
dipublikasikan):
  Manfaat kesehatan dari peningkatan aktivitas fisik: £180.000/tahun
  Pengurangan absensi: £40.000/tahun
  Dekongesti (lebih sedikit perjalanan mobil): £60.000/tahun
  Total aliran manfaat: £280.000/tahun
PV(manfaat) ≈ £280.000 × 14,2 ≈ £3,98 juta

NPSV = £3,98 juta − £3,71 juta = +£0,27 juta
BCR = 3,98 / 3,71 = 1,07 → nilai-untuk-uang "rendah"
```

Skema tersebut melewati ambang batas tetapi hanya tipis; sebuah uji sensitivitas pada estimasi
manfaat-kesehatan 20% lebih rendah (mencerminkan ketidakpastian genuine dalam penilaian aktivitas
fisik) membalikkan BCR di bawah 1,0, yang persis mengapa Green Book mensyaratkan tabel sensitivitas
dipublikasikan berdampingan dengan angka utama, bukan hanya estimasi tengahnya.

**Lembaga amal**: sebuah program pencegahan mortalitas bayi berbiaya £500.000/tahun dievaluasi
menggunakan nilai kehidupan statistik (VSL) — sebuah harga bayangan, bukan harga pasar yang
teramati — sekitar £2,1 juta (angka HM Treasury yang diperbarui 2023, itu sendiri diturunkan dari
studi preferensi-dinyatakan). Menghindarkan satu kematian bayi per tahun terhadap biaya £500.000
memberikan BCR 4,2, dengan nyaman "sangat tinggi" nilai-untuk-uang — tetapi seluruh hasilnya
bertumpu pada angka VSL, itulah mengapa SCBA mana pun yang menggunakan VSL harus mengungkapkannya
sebagai sebuah asumsi, bukan sebuah fakta.

## Kaitan dengan Rekayasa Perangkat Lunak

SCBA adalah kerangka alami untuk keputusan investasi platform dan infrastruktur dalam perangkat
lunak pemerintah — membandingkan sebuah platform identitas bersama dengan solusi titik departemen,
misalnya, membutuhkan monetisasi manfaat seperti berkurangnya biaya onboarding duplikat, berkurangnya
penipuan, dan waktu-ke-layanan yang lebih cepat yang sendirinya tidak memiliki harga pasar. Insinyur
yang membangun layanan yang mendasarinya seharusnya mengharapkan pemimpin program meminta input
untuk analisis ini: biaya satuan transaksi (lihat [biaya per transaksi](../cost-per-transaction/)),
volume yang diharapkan, dan biaya degradasi/downtime. Disiplin yang paling penting untuk diimpor:
diskontokan manfaat masa depan, sebutkan baseline kontrafaktual secara eksplisit (lihat
[analisis kontrafaktual](../counterfactual-analysis/)), dan jangan pernah menyajikan satu estimasi
titik tunggal tanpa rentang sensitivitasnya.

## Jebakan Umum

- **Menghitung ganda manfaat.** Menghitung baik "waktu yang dihemat" maupun "produktivitas yang
  diperoleh dari waktu tersebut" sebagai baris manfaat terpisah melebih-lebihkan kasus tersebut;
  waktu yang dihemat adalah manfaatnya, penggunaan hilirnya bukan manfaat tambahan kecuali
  dibuktikan secara independen.
- **Mengabaikan biaya yang dipindahkan.** Sebuah skema yang memindahkan kemacetan dari satu jalan ke
  jalan lain, atau memindahkan penipuan dari satu kanal ke kanal lain, belum menciptakan manfaat
  bersih yang disiratkan NPSV utamanya — lihat
  [perpindahan dan atribusi](../displacement-and-attribution/).
- **Menggunakan tingkat diskonto swasta.** Menerapkan biaya modal komersial (katakanlah 8–10%)
  alih-alih tingkat diskonto sosial secara sistematis meremehkan manfaat publik horizon-panjang
  seperti keuntungan kesehatan dan lingkungan — lihat [tingkat diskonto sosial](../social-discount-rate/).
- **Memonetisasi yang tidak diperdebatkan dan mengabaikan yang diperdebatkan.** Jika dua pertiga dari
  manfaat sebuah proposal adalah penghematan efisiensi yang termonetisasi dengan percaya diri dan
  sepertiga adalah keuntungan kesejahteraan yang termonetisasi dengan goyah, NPSV utama secara diam-
  diam mencampur angka keras dengan yang lunak; laporkan keduanya secara terpisah.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
