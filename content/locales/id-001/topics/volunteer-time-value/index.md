# Nilai Waktu Relawan (Volunteer Time Value)

Nilai waktu relawan adalah estimasi moneter yang diberikan pada tenaga kerja tanpa upah, paling
sering digunakan untuk menyatakan jejak ekonomi sesungguhnya sebuah organisasi amal — akunnya
ditambah tenaga kerja yang tidak perlu dibayarnya — atau untuk membangun argumen bahwa sebuah
intervensi tertentu lebih efektif biaya dibandingkan yang tersirat dari anggaran tunainya saja. Dua
metodologi nasional mendominasi: estimasi Independent Sector di Amerika Serikat dan pendekatan
Office for National Statistics / NCVO di Inggris, dan keduanya menetapkan harga yang cukup berbeda
untuk jam kerja yang sama.

## Mengapa Ini Penting

Setiap tahun, Independent Sector, bekerja sama dengan Do Good Institute Universitas Maryland,
menerbitkan nilai per jam nasional untuk waktu relawan, dibangun dari data upah Bureau of Labor
Statistics — secara khusus rata-rata penghasilan per jam pekerja produksi dan non-supervisor pada
daftar gaji non-pertanian swasta, ditambah penyesuaian tunjangan tambahan — dan diuraikan menurut
negara bagian AS. Rilis terbarunya menetapkan nilai tersebut sebesar **$36,14 per jam untuk 2025**,
naik 3,9% dari tahun sebelumnya, dengan nilai tingkat negara bagian berkisar dari lebih dari $50 di
Washington, DC hingga di bawah $20 di Puerto Rico. Di Inggris, Office for National Statistics secara
terpisah telah mengestimasi biaya penggantian untuk kerelawanan formal sebesar **£14,43 per jam**
(estimasi 2017), dan UK Civil Society Almanac 2024 milik NCVO menggunakan data partisipasi
kerelawanan — sekitar 14,2 juta orang menjadi relawan formal pada 2021–22 — untuk mengestimasi
total kontribusi kerelawanan sektor tersebut sekitar **£18 miliar**, sekitar 0,8% dari PDB Inggris.

Alasan mengapa ini penting di luar sekadar kosmetik akuntansi: sebuah program yang sangat bergantung
pada tenaga kerja relawan dapat tampak jauh lebih murah berdasarkan
[biaya per hasil](../cost-per-outcome/) tunai murni dibandingkan program yang bergantung pada staf
berbayar, meskipun biaya sumber daya sesungguhnya — berapa biaya untuk menggantikan tenaga kerja
tersebut — sebanding atau bahkan lebih tinggi. Pemberi dana dan evaluator yang mengabaikan nilai
waktu relawan secara sistematis meremehkan biaya sesungguhnya dari model penyampaian yang sarat
relawan, yang mendistorsi perbandingan efisiensi terhadap model staf berbayar yang menyampaikan
hasil yang sama.

## Matematika

```
Nilai waktu relawan = jam relawan yang disumbangkan × tarif per jam

Pilihan tarif itu penting dan mengubah jawabannya:
  - Pendekatan biaya penggantian: upah seorang pekerja berbayar yang akan
    melakukan tugas yang sama (misalnya tarif biaya penggantian untuk
    seorang pekerja pemuda yang berkualifikasi, bukan upah rata-rata
    generik) — paling dapat dipertanggungjawabkan untuk valuasi khusus
    tugas
  - Pendekatan biaya peluang: upah yang dikorbankan sendiri oleh relawan
    tersebut — paling dapat dipertanggungjawabkan untuk menilai apa yang
    dikorbankan oleh relawan
  - Pendekatan rata-rata nasional: tarif tunggal campuran milik
    Independent Sector atau ONS — paling dapat dipertanggungjawabkan
    untuk keterbandingan lintas-sektor headline
```

Ketiga pendekatan tersebut dapat berbeda dengan kelipatan yang besar untuk jam yang sama (seorang
pengacara yang menjadi relawan sebagai wali amanat dewan memiliki tarif biaya peluang yang sangat
berbeda dari tarif rata-rata nasional), sehingga setiap angka yang dilaporkan perlu menyatakan
metode mana yang menghasilkannya.

## Contoh Perhitungan

**Organisasi amal Inggris, pendekatan rata-rata nasional**: 5.000 jam relawan dalam setahun,
dinilai pada £14,43/jam (estimasi biaya penggantian ONS):

```
Nilai = 5.000 × £14,43 = £72.150
```

Jika pengeluaran tunai organisasi amal tersebut pada tahun itu adalah £300.000, biaya sumber daya
sesungguhnya — tunai ditambah tenaga kerja relawan — adalah £372.150, sekitar 24% lebih tinggi
dari yang tersirat dari angka tunai saja. Perhitungan biaya per hasil yang hanya menggunakan angka
tunai £300.000 meremehkan biaya sesungguhnya dengan margin yang sama.

**Organisasi amal AS, pendekatan rata-rata nasional**: 2.000 jam relawan dinilai pada $36,14/jam
(Independent Sector, rilis 2025):

```
Nilai = 2.000 × $36,14 = $72.280
```

**Organisasi amal AS yang sama, pendekatan biaya peluang**: jika para relawan didominasi oleh
profesional pensiunan yang penghasilan sebelumnya rata-rata $60/jam, valuasi biaya peluangnya akan
menjadi $120.000 — dua pertiga lebih tinggi dari angka rata-rata nasional, yang menggambarkan
mengapa metode tersebut harus dinyatakan.

## Kaitan dengan Rekayasa Perangkat Lunak

Sistem yang mencatat jam relawan (alat penjadwalan sif, platform manajemen relawan) sebaiknya
menangkap jam pada tingkat tugas atau peran, bukan hanya total, sehingga tarif biaya penggantian
dapat diterapkan per peran alih-alih satu tarif rata-rata nasional yang menyeluruh untuk tenaga
kerja relawan yang beragam (satu jam seorang wali amanat dan satu jam bertugas sebagai steward
tidak setara secara ekonomi). Menyimpan tarif dan metodologi yang digunakan bersama nilai yang
dihitung — bukan hanya angka mata uang akhir — memungkinkan pelaporan hilir (akun tahunan,
perhitungan [laba sosial atas investasi](../social-return-on-investment/), laporan pemberi dana)
untuk mereproduksi atau menantang angka tersebut di kemudian hari, alih-alih memperlakukannya
sebagai konstanta yang buram. Lihat [biaya per hasil](../cost-per-outcome/) untuk alasan mengapa
mengabaikan nilai waktu relawan secara sistematis meremehkan biaya penyampaian sesungguhnya.

## Jebakan Umum

- **Menggunakan satu tarif menyeluruh untuk peran yang secara struktural berbeda.** Tarif upah
  rata-rata nasional yang diterapkan pada satu jam pro bono profesional (hukum, keuangan, klinis)
  secara drastis meremehkan nilainya; sesuaikan tarif dengan peran yang digantikan di mana pun
  tugasnya membutuhkan keterampilan.
- **Menghitung ganda terhadap biaya staf berbayar.** Jika relawan menggantikan pekerjaan yang
  seharusnya dibayar, pastikan valuasinya bersifat aditif terhadap pengeluaran tunai, bukan
  ditumpuk di atas estimasi kepegawaian yang sudah digelembungkan.
- **Mengutip tarif yang sudah usang tanpa tanggal.** Tarif Independent Sector dan ONS berubah
  setiap tahun (atau hanya diestimasi ulang secara berkala, dalam kasus ONS); angka waktu relawan
  tanpa tanggal dalam sebuah laporan hampir tidak bermakna untuk perbandingan.
- **Memperlakukan nilai waktu relawan sebagai aset penggalangan dana.** Ini adalah penyesuaian
  akuntansi biaya untuk memahami biaya sumber daya sesungguhnya, bukan uang baru yang dapat
  dibelanjakan oleh organisasi amal; mencampuradukkan keduanya menyesatkan dewan yang membaca
  akunnya.

## Sumber

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
