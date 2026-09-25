# Perpindahan dan Atribusi

Perpindahan (displacement) terjadi ketika manfaat nyata sebuah program dicapai dengan mengambil
aktivitas atau manfaat dari tempat lain, alih-alih menciptakan sesuatu yang baru — kemenangan Anda
adalah kerugian orang lain. Atribusi adalah pertanyaan terkait tentang seberapa banyak dari sebuah
hasil yang teramati yang benar-benar dapat diklaim oleh intervensi Anda, ketika aktor dan faktor lain
juga berkontribusi. Keduanya adalah penyesuaian standar dalam panduan evaluasi sektor publik Inggris,
bersama bobot mati dan kebocoran, dan keduanya secara rutin dilewatkan oleh klaim dampak yang
terlihat jauh lebih kuat daripada sebenarnya.

## Mengapa Ini Penting

Skema hibah bisnis sebuah pemerintah daerah yang membantu 50 toko pindah ke zona regenerasi dapat
melaporkan "50 bisnis didukung, 200 pekerjaan tercipta" — tetapi jika bisnis-bisnis tersebut sekadar
pindah dari jalan utama tetangga alih-alih berekspansi, pekerjaan tersebut dipindahkan, bukan
diciptakan, dan efek bersih seluruh borough (atau seluruh wilayah) bisa mendekati nol. Magenta Book
milik HM Treasury dan Additionality Guide yang sudah lama digunakan memperlakukan perpindahan sebagai
pengurangan wajib justru karena kisah sukses lokal umum terjadi bahkan ketika tidak menghasilkan
manfaat bersih nasional atau regional — nilai hanya berpindah, sering kali merugikan wilayah atau
aktor yang kehilangannya. Panduan evaluasi dana struktural (digunakan untuk program EU Regional
Development Fund sebelumnya dan penerus domestiknya, seperti UK Shared Prosperity Fund)
memformalkan hal ini pada tiga skala spasial: perpindahan lokal (dalam sebuah kota), perpindahan
regional (dalam sebuah wilayah), dan perpindahan nasional (di seluruh Inggris), karena sebuah
intervensi dapat bersifat tambahan pada satu skala sambil menjadi perpindahan murni pada skala yang
lebih luas — sebuah program pekerjaan yang menarik pekerja dari kota tetangga bersifat netral secara
nasional meskipun terlihat seperti keberhasilan lokal.

Atribusi adalah masalah saudara dalam penyampaian yang sarat kemitraan, yang kini menjadi norma
dalam pekerjaan sektor sosial dan lintas lembaga. Ketika tiga organisasi bersama-sama menyampaikan
sebuah layanan pencegahan tunawisma, setiap laporan tahunan organisasi mungkin secara independen
mengklaim kredit untuk penurunan tunawisma jalanan yang sama — dijumlahkan di seluruh laporan,
dampak yang diklaim dapat melebihi perubahan nyata yang teramati di dunia, kadang beberapa kali
lipat. Panduan Magenta Book tentang analisis kontribusi ada secara khusus karena atribusi acak
kepada satu aktor tunggal sering kali mustahil dalam penyampaian multi-lembaga, dan jawaban yang
jujur sering kali adalah "kami berkontribusi pada hasil ini" alih-alih "kami menyebabkan hasil ini."

## Matematika

Perpindahan sebagai bagian dari urutan dampak bersih standar (lihat
[additionalitas dan bobot mati](../additionality-and-deadweight/) untuk rantai lengkapnya):

```
Dampak tambahan bersih = Hasil bruto − Bobot mati − Perpindahan − Kebocoran, × Pengganda

Tingkat perpindahan = manfaat/aktivitas yang dialihkan dari tempat lain
                       / total manfaat/aktivitas bruto yang teramati
```

Atribusi, di mana beberapa aktor berkontribusi pada satu hasil, biasanya dinyatakan sebagai pangsa
kontribusi alih-alih persentase yang presisi, karena biasanya tidak dapat diukur dengan ketelitian
yang sama seperti perpindahan:

```
Pangsa yang dapat diatribusikan ≈ f(kekuatan kontribusi kausal,
                        kontribusi aktor lain, faktor eksternal/kontekstual)

Dampak yang diklaim tidak boleh pernah melebihi:
  Σ (pangsa yang dapat diatribusikan setiap mitra) ≤ 100% dari total
  hasil yang teramati
```

## Contoh Perhitungan

**Hibah regenerasi**: skema hibah jalan utama sebuah dewan kota melaporkan 200 pekerjaan ritel baru
tercipta di zona yang didanai. Riset survei tindak lanjut menemukan bahwa 60 dari pekerjaan tersebut
berasal dari bisnis yang pindah dari jalan utama tetangga yang tidak didanai dalam borough yang sama,
dan 30 lagi berasal dari jaringan nasional yang membuka cabang yang bagaimanapun juga akan dibuka di
suatu tempat di wilayah tersebut terlepas dari hibah tersebut.

```
Pekerjaan bruto yang diklaim = 200
Perpindahan lokal = 60 (pindah dalam borough)
Perpindahan regional = 30 (akan tetap dibuka secara regional)

Pekerjaan tambahan bersih (tingkat borough) = 200 − 60 = 140
Pekerjaan tambahan bersih (tingkat regional) = 200 − 60 − 30 = 110
```

Angka utama yang jujur bergantung pada skala geografis yang menjadi perhatian pemberi dana — sebuah
kasus bisnis Treasury yang dinilai pada tingkat nasional atau regional seharusnya menggunakan 110,
bukan 140 tingkat borough, dan tentunya bukan 200 mentah.

**Layanan tunawisma multi-lembaga**: tiga organisasi mitra (sebuah dewan kota, sebuah lembaga amal
perumahan, dan sebuah trust kesehatan) bersama-sama menyampaikan sebuah layanan pengurangan
tunawisma jalanan. Tunawisma jalanan di wilayah tersebut turun 30 orang selama tahun tersebut.
Setiap laporan tahunan organisasi individu mengklaim "kami mengurangi tunawisma jalanan sebesar 30"
— dijumlahkan, ketiga laporan mengklaim 90 orang terbantu, tiga kali lipat pengurangan sesungguhnya.
Sebuah analisis kontribusi yang memberikan setiap mitra sebuah pangsa (katakanlah, 40% dewan kota,
35% lembaga amal, 25% trust kesehatan, berdasarkan peran terdokumentasi dan penilaian independen)
akan melaporkan masing-masing 12, 10,5, dan 7,5, yang berjumlah dengan benar menjadi 30 yang
teramati.

## Kaitan dengan Rekayasa Perangkat Lunak

Perpindahan dan atribusi membentuk bagaimana sistem pelacakan dampak dan pelaporan hasil seharusnya
dirancang untuk penyampaian multi-lokasi atau multi-mitra:

- Cakupan geografis dan organisasi seharusnya menjadi bidang eksplisit dan kelas satu pada dasbor
  dampak mana pun — sebuah angka yang dilaporkan "untuk borough" dan angka yang sama dilaporkan
  "untuk wilayah" adalah angka yang berbeda, dan sebuah sistem yang mencampuradukkan keduanya akan
  menghasilkan angka yang tidak dapat direkonsiliasi pada tingkat portofolio.
- Di mana beberapa mitra menyampaikan bersama, sebuah sistem hasil seharusnya mencatat pangsa
  kontribusi (atau setidaknya menandai atribusi bersama) alih-alih membiarkan setiap modul pelaporan
  mitra secara independen mengklaim 100% dari sebuah hasil bersama — jika tidak, rollup tingkat
  portofolio akan melebih-lebihkan total dampak, kadang secara parah.
- Ini terkait dengan [laba atas investasi sosial](../social-return-on-investment/) dan
  [pelaporan hasil hibah](../grant-outcomes-reporting/): sebuah perhitungan SROI atau IRIS+ yang
  mengabaikan perpindahan atau mengatribusikan berlebihan hasil bersama akan menghasilkan rasio yang
  digelembungkan yang tidak akan bertahan terhadap audit atau replikasi.

## Jebakan Umum

- **Melaporkan keberhasilan lokal tanpa memeriksa perpindahan yang lebih luas.** Sebuah program dapat
  terlihat sangat berhasil pada skala pelaporan terkecil sambil bersifat netral atau bahkan negatif
  pada skala yang lebih luas; selalu nyatakan skala geografis yang berlaku bagi angka bersih tersebut.
- **Membiarkan setiap mitra dalam penyampaian bersama mengklaim kredit penuh.** Kecuali pangsa
  kontribusi disepakati dan didokumentasikan, pelaporan rollup di seluruh mitra akan melebih-
  lebihkan total dampak — periksa bahwa klaim tingkat mitra berjumlah tidak lebih dari total yang
  teramati.
- **Memperlakukan atribusi sebagai persentase presisi padahal sebenarnya adalah penilaian.** Analisis
  kontribusi, tidak seperti kontrafaktual acak, menghasilkan estimasi yang dapat dipertahankan,
  bukan fakta yang terukur; sajikan dengan ketidakpastian yang sesuai alih-alih presisi palsu.
- **Mengabaikan perpindahan dalam intervensi yang menghadapi pasar.** Dukungan bisnis, skema
  ketenagakerjaan, dan regenerasi berbasis tempat adalah kategori perpindahan tinggi yang klasik;
  perlakukan pemeriksaan perpindahan sebagai wajib untuk ini, bukan opsional.

## Sumber

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
