# Kartu Skor Nilai Publik

Kartu skor nilai publik mengadaptasi balanced scorecard tahun 1992 milik Robert Kaplan dan David
Norton — dibangun untuk perusahaan yang mengoptimalkan laba di seluruh perspektif finansial,
pelanggan, proses internal, dan pembelajaran-serta-pertumbuhan — kepada organisasi yang garis
dasarnya adalah misi, bukan margin. Ia memaksa sebuah badan publik untuk melaporkan kinerja di
seluruh beberapa dimensi yang tidak dapat direduksi sekaligus, alih-alih meruntuhkan segalanya
menjadi satu angka yang menyembunyikan trade-off.

## Mengapa Ini Penting

Argumen asli Kaplan dan Norton, dalam Harvard Business Review, adalah bahwa satu metrik finansial
tunggal adalah indikator tertinggal yang tidak memberi tahu Anda apa-apa tentang *mengapa* kinerja
akan berubah pada kuartal berikutnya. Di sektor swasta, perbaikannya adalah empat perspektif yang
saling terkait. Dalam pemerintahan, "segitiga strategis" Mark Moore (dari *Creating Public Value*,
1995) menyediakan struktur setara: sebuah layanan harus secara simultan menyampaikan **nilai
publik** (hasil misi), mempertahankan **legitimasi dan dukungan** (dukungan politik dan publik), dan
**layak dilaksanakan secara operasional** (dapat disampaikan dengan sumber daya dan kapabilitas
yang benar-benar tersedia). *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*
(2003) karya Paul Niven adalah manual praktisi untuk menerjemahkan empat kotak Kaplan dan Norton ke
dalam segitiga ini — biasanya melabeli ulang "finansial" menjadi "pengelolaan sumber daya",
menempatkan "misi" di atas alih-alih "nilai pemegang saham" di bawah, dan memperlakukan perspektif
pelanggan dan pemangku kepentingan sebagai setara alih-alih subordinat terhadap laba. Alasan ini
penting bagi sebuah tim penyampaian adalah bahwa sebuah layanan digital publik yang dinilai hanya
pada metrik finansial atau efisiensi (biaya per transaksi, katakanlah) akan secara sistematis
kurang berinvestasi pada dimensi legitimasi dan hasil yang tidak dapat dilihat metrik finansial
tersebut.

## Matematika

Kartu skor nilai publik adalah sebuah kerangka kerja, bukan rumus, tetapi strukturnya tetap dan
layak direproduksi secara persis:

```
Perspektif            Pertanyaan sektor publik                  Indikator contoh
--------------------------------------------------------------------------------
Misi / hasil          Apakah kita mencapai nilai publik yang    Ukuran hasil populasi
                       menjadi alasan keberadaan kita?          (lihat outcomes-vs-outputs)
Pengelolaan            Apakah kita menggunakan uang publik      Biaya per hasil, varians
  sumber daya           secara efisien dan dalam batas yang     anggaran
                        diotorisasi?
Pelanggan / pengguna   Apakah pengguna dan warga dapat          Tingkat penyelesaian, kepuasan
                        mengakses dan mendapat manfaat dari
                        layanan tersebut?
Legitimasi / dukungan  Apakah prinsipal politik, badan          Metrik kepercayaan, temuan
                        pengawas, dan publik masih mendukung    audit, keluhan yang dikabulkan
                        kita?
Proses internal /      Apakah kita memiliki kapabilitas dan     Pergantian staf, waktu siklus,
  pembelajaran          proses untuk terus meningkat?           usia tunggakan

Sebuah kartu skor yang dapat dipertahankan melaporkan 3–5 indikator
per perspektif, dipilih sehingga tidak ada satu perspektif pun yang
dapat dimanipulasi tanpa kerusakannya muncul pada yang lain.
```

## Contoh Perhitungan

**Departemen perawatan sosial dewasa pemerintah daerah**: sebuah kartu skor untuk layanan
reablement (dukungan jangka pendek untuk membantu orang mendapatkan kembali kemandirian setelah
rawat inap rumah sakit) melaporkan:

```
Misi:           68% pengguna layanan tidak lagi membutuhkan
                perawatan berkelanjutan setelah 6 minggu (target 65%)
Pengelolaan:    biaya per episode reablement yang diselesaikan =
                £1.850 (asumsi anggaran £2.000)
Pelanggan:      kepuasan pengguna 82%, rata-rata tunggu mulai
                layanan 4,1 hari
Legitimasi:     3 keluhan yang dikabulkan per 1.000 episode; dewan
                safeguarding dewasa menilai layanan "baik"
Proses:         tingkat kekosongan staf 14%, beban kasus rata-rata
                23 (batas beban kasus aman: 25)
```

Dibaca secara terisolasi, angka misi dan pengelolaan terlihat seperti kisah keberhasilan yang
lugas: di bawah anggaran dan di atas target hasil. Dibaca bersama baris proses, tingkat kekosongan
14% terhadap batas beban kasus 25 menunjukkan hasil yang baik itu dibeli dengan berjalan mendekati
tingkat staf yang tidak aman — sebuah peringatan yang tidak akan pernah terungkap oleh angka misi
saja, dan persis merupakan mode kegagalan yang diundang oleh sebuah KPI perspektif-tunggal (lihat
[KPI sektor publik](../public-sector-kpis/)).

## Kaitan dengan Rekayasa Perangkat Lunak

Bagi sebuah tim yang membangun dasbor internal atau menghadap publik, kartu skor tersebut adalah
argumen langsung menentang sebuah widget "skor kesehatan" tunggal: bangun satu panel per
perspektif, dan tolak tekanan produk untuk mensintesisnya menjadi sebuah lampu lalu lintas, karena
langkah sintesis itu justru tempat di mana informasi trade-off dihancurkan. Ini juga memetakan
dengan bersih ke struktur OKR tim produk: sebuah OKR misi tanpa OKR pengelolaan atau proses yang
dipasangkan mereproduksi mode kegagalan metrik-tunggal yang ditentang Kaplan dan Norton pada 1992.
Lihat [nilai publik](../public-value/) untuk teori dasar Moore tentang apa yang seharusnya
sebenarnya diisi kotak "misi", dan [metrik kepercayaan dan legitimasi](../trust-and-legitimacy-metrics/)
untuk cara mengisi perspektif legitimasi dengan indikator nyata dan bersumber alih-alih sebuah
proksi yang tidak dapat dipertahankan siapa pun.

## Jebakan Umum

- **Meruntuhkan kartu skor menjadi satu skor**: merata-ratakan empat perspektif menjadi satu angka
  tunggal memperkenalkan kembali persis masalah — sebuah skor legitimasi yang buruk disamarkan
  oleh sebuah skor pengelolaan yang baik — yang dimaksudkan untuk dicegah kartu skor tersebut.
- **Menyalin perspektif "finansial" sektor swasta tanpa perubahan**: perspektif pengelolaan sebuah
  badan publik adalah tentang tetap berada dalam batas anggaran yang diotorisasi, sering
  terpagari, bukan tentang memaksimalkan pendapatan — pelabelan ulang Niven bukan kosmetik.
- **Memilih indikator yang dapat digerakkan secara sepihak oleh tim yang memiliki kartu skor
  tersebut**: sebuah indikator legitimasi yang bersumber dari tim yang sama yang dinilainya
  (penanganan keluhan yang dilaporkan sendiri, misalnya) bukanlah bukti independen.
- **Membangun kartu skor sekali dan tidak pernah meninjau ulang bobot atau indikator**: Kaplan dan
  Norton bermaksudkan sebuah tinjauan strategi tahunan; sebuah kartu skor yang dibekukan selama
  bertahun-tahun menyimpang dari misi yang dimaksudkan untuk dilacaknya.

## Sumber

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
