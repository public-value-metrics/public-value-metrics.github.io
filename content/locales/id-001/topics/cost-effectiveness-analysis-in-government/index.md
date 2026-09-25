# Analisis Efektivitas Biaya dalam Pemerintahan

Analisis efektivitas biaya (cost-effectiveness analysis, CEA) membandingkan biaya dari berbagai cara
alternatif untuk mencapai hasil yang *sama*, dinyatakan dalam satuan alami — biaya per tunawisma
yang dirumahkan, biaya per murid yang mencapai standar yang diharapkan, biaya per ton CO2 yang
dikurangi — tanpa mengonversi hasil itu sendiri menjadi uang.

## Mengapa Ini Penting

Green Book memperlakukan CEA sebagai metode cadangan ketika persyaratan
[analisis biaya-manfaat sosial](../social-cost-benefit-analysis/) untuk memonetisasi setiap manfaat
menjadi bukan sekadar sulit tetapi tidak jujur — di mana menetapkan harga yang kredibel pada hasil
tersebut akan membutuhkan asumsi yang sebenarnya tidak dipegang siapa pun
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Bab 5, tentang penilaian opsi di mana hasil tidak mudah dimonetisasi). CEA adalah metode yang paling
langsung dipinjam dari ekonomi kesehatan — secara struktural identik dengan cara NICE membandingkan
perawatan menggunakan biaya per Quality-Adjusted Life Year — tetapi diterapkan pada program publik
non-kesehatan: intervensi pendidikan per poin hasil murid, program perumahan per rumah tangga yang
terhindar dari tunawisma, program ketenagakerjaan per hasil pekerjaan yang berkelanjutan.

Alasan mengapa CEA mendapatkan tempatnya berdampingan dengan SCBA alih-alih ditelan olehnya adalah
karena memaksakan nilai moneter pada beberapa hasil menghasilkan angka yang cukup presisi untuk
terlihat otoritatif dan cukup diperdebatkan untuk menjadi tidak berharga dalam debat publik —
menetapkan harga pada "seorang anak membaca pada standar yang diharapkan" mengundang persis jenis
tantangan yang menggagalkan sebuah kasus bisnis di komite pemilihan. CEA menghindari perdebatan
tersebut dengan menolak untuk mengadakannya: ia memeringkat opsi berdasarkan biaya per unit dari
*hasil itu sendiri*, menyerahkan penilaian politik terpisah tentang apakah hasil tersebut layak
dikejar sama sekali kepada kasus strategis.

## Matematika

```
Rasio efektivitas biaya (rata-rata) = Total biaya / Total unit hasil yang dicapai

Rasio efektivitas biaya inkremental (ICER), membandingkan opsi A dengan opsi B:
ICER = (Biaya_A − Biaya_B) / (Hasil_A − Hasil_B)

Prosedur:
1. Tetapkan satuan hasil dan metode pengukuran yang sama di seluruh
   opsi yang dibandingkan.
2. Hitung biaya setiap opsi dengan basis yang sama (lihat
   ../green-book-appraisal/, kasus finansial) selama horizon waktu
   yang sama.
3. Buang opsi yang terdominasi: opsi mana pun yang biayanya lebih
   tinggi per unit daripada alternatif yang lebih murah yang mencapai
   hasil yang sama atau lebih baik dihapus.
4. Peringkat opsi yang tersisa berdasarkan rasio efektivitas biaya
   inkremental, bukan rata-rata.
```

CEA sendiri tidak dapat mengatakan apakah sebuah program layak didanai sama sekali — hanya
pendekatan mana di antara beberapa pendekatan terhadap tujuan yang sama yang paling murah per unit.
Memutuskan apakah tujuan itu sendiri layak dengan belanja tersebut memerlukan baik konversi kembali
ke SCBA (jika ada penilaian kredibel) atau penilaian politik/strategis di luar matematika. Di mana
hasil benar-benar tidak dapat direduksi menjadi satu unit — karena sebuah program menghasilkan
beberapa hasil yang penting dengan cara berbeda — gunakan
[analisis keputusan multi-kriteria](../multi-criteria-decision-analysis/) sebagai gantinya.

## Contoh Perhitungan

**Pemerintah daerah**: sebuah dewan kota membandingkan tiga pendekatan untuk mengurangi tunawisma
jalanan, masing-masing dihitung biayanya selama satu tahun terhadap hasil "individu yang pindah ke
akomodasi menetap selama 6+ bulan":

```
Opsi                             Biaya      Hasil tercapai   CER rata-rata
Housing First (intensif)         £900.000   60               £15.000/hasil
Hostel + dukungan transisi       £600.000   50               £12.000/hasil
Penjangkauan + sektor sewa       £350.000   20               £17.500/hasil
swasta

ICER, Hostel vs Penjangkauan: (600rb−350rb)/(50−20) = £8.333 per hasil tambahan
ICER, Housing First vs Hostel: (900rb−600rb)/(60−50) = £30.000 per hasil tambahan
```

Penjangkauan terdominasi pada biaya rata-rata oleh Hostel, tetapi langkah *inkremental* dari
Penjangkauan ke Hostel hanya berbiaya £8.333 per orang tambahan yang dirumahkan — murah relatif
terhadap langkah Housing First, yang berbiaya £30.000 untuk setiap orang tambahan di luar apa yang
dicapai Hostel. Sebuah otoritas yang dibatasi anggaran yang ingin memperluas cakupannya seharusnya
lebih memilih memperluas Hostel sebelum Housing First, meskipun Housing First terlihat lebih baik
pada rasio rata-ratanya sendiri.

**Pemerintah pusat**: sebuah program peningkatan literasi dibandingkan di tiga model penyampaian
berdasarkan "biaya per murid yang mencapai standar membaca sesuai usia": bimbingan satu-lawan-satu
(£1.800/murid), bimbingan kelompok kecil (£700/murid), dan intervensi digital saja (£150/murid,
tetapi hanya 40% dari tingkat hasil bimbingan kelompok kecil per murid yang terdaftar setelah
disesuaikan dengan penurunan keterlibatan). Setelah disesuaikan dengan penyelesaian aktual, digital
saja berbiaya £375 per murid yang mencapai standar — tetap yang paling murah, tetapi CEA tidak dapat
mengatakan apakah jumlah absolut murid yang lebih kecil yang terbantu oleh digital saja, jika
disampaikan dengan anggaran yang sama seperti kelompok kecil, adalah trade-off yang dapat diterima
dibandingkan menjangkau lebih sedikit murid dengan kedalaman yang lebih besar; itu adalah penilaian
distribusional yang dikembalikan oleh CEA kepada para pengambil keputusan.

## Kaitan dengan Rekayasa Perangkat Lunak

CEA adalah kerangka yang tepat setiap kali tim rekayasa mengevaluasi pendekatan penyampaian untuk
hasil layanan yang *sama* — biaya per identitas yang berhasil diverifikasi di tiga vendor verifikasi
identitas, biaya per kasus yang ditriase dengan benar di dua desain otomasi penanganan kasus, biaya
per defek aksesibilitas yang diselesaikan di remediasi internal versus terkontrak. Disiplin yang
diimpor langsung dari sini: tentukan satuan hasil sebelum membandingkan biaya (bukan "tiket
ditutup" — sebuah keluaran — tetapi "kebutuhan pengguna yang benar-benar terselesaikan"), dan selalu
hitung rasio inkremental antara sistem yang aktif dan pengganti yang diusulkan, bukan biaya
rata-rata setiap sistem secara terisolasi. Lihat [luaran vs keluaran](../outcomes-vs-outputs/) dan
[biaya per hasil](../cost-per-outcome/).

## Jebakan Umum

- **Membandingkan rasio rata-rata, bukan inkremental, saat memutuskan perluasan.** Seperti yang
  ditunjukkan contoh tunawisma jalanan, opsi dengan rasio rata-rata terbaik tidak selalu merupakan
  unit hasil berikutnya yang paling murah untuk dibeli.
- **Memilih satuan hasil yang sebenarnya adalah keluaran.** "Rujukan yang dibuat" atau "sesi yang
  disampaikan" mengukur aktivitas, bukan hasil yang menjadi alasan keberadaan program tersebut; CEA
  pada keluaran menghasilkan angka yang terlihat meyakinkan tetapi menjawab pertanyaan yang salah.
- **Membandingkan di seluruh hasil yang benar-benar berbeda.** CEA hanya valid ketika setiap opsi
  menargetkan hasil yang sama yang diukur dengan cara yang sama; membandingkan "biaya per tunawisma
  jalanan yang dirumahkan" dengan "biaya per anak yang meninggalkan perawatan dengan tempat tinggal
  yang stabil" memerlukan ukuran hasil generik atau
  [analisis keputusan multi-kriteria](../multi-criteria-decision-analysis/), bukan CEA.
- **Mengabaikan daya tahan hasil.** Opsi yang lebih murah yang menghasilkan hasil yang tidak
  bertahan (seorang murid yang kembali mundur setelah intervensi berakhir) sebenarnya tidak lebih
  efektif biaya setelah diukur selama horizon yang sebanding; samakan periode tindak lanjut di
  seluruh opsi yang dibandingkan.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
