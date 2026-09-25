# Inklusi Digital

Inklusi digital adalah disiplin untuk memastikan "digital secara default" tidak menjadi "digital
saja" — bahwa layanan publik yang dirancang di sekitar kanal termurah tetap berfungsi bagi warga
yang tidak bisa atau tidak mau menggunakannya tanpa bantuan. GDS mencetuskan mekanisme penyampaian
khusus, "digital-terbantu" (assisted digital), sebagai persyaratan wajib untuk setiap layanan
digital pemerintah, bukan tambahan opsional.

## Mengapa Ini Penting

Government Digital Strategy tahun 2012 menetapkan ambisinya dengan jelas: layanan digital seharusnya
dibangun digital secara default, tetapi strategi itu sendiri mengakui bahwa sekitar 10% orang dewasa
di Inggris tidak akan mampu menggunakannya tanpa bantuan, dan berkomitmen agar departemen menyediakan
dukungan digital-terbantu — jalur yang dimediasi manusia, melalui telepon, secara langsung, atau
melalui perantara — sebagai bagian dari layanan tersebut, bukan fallback terpisah yang ditambahkan
belakangan. Komitmen itu kini menjadi [standar layanan digital](../digital-service-standard/) poin
5, "pastikan semua orang dapat menggunakan layanan tersebut". Skala eksklusi yang berlanjut dilacak
oleh UK Consumer Digital Index tahunan milik Lloyds Banking Group: edisi 2024 menemukan bahwa
sekitar 1,6 juta orang di Inggris tetap offline, dan bahwa kelompok ini sangat condong ke orang-orang
berusia 70–79 tahun, mereka yang berpenghasilan di bawah £35.000, dan mereka yang pensiun atau
menganggur — justru populasi yang paling mungkin bergantung pada layanan publik yang sedang
dirancang ulang. Laporan yang sama menemukan hanya 48% tenaga kerja Inggris dapat menyelesaikan
semua 20 tugas pada kerangka Essential Digital Skills, artinya eksklusi bukanlah konektivitas biner,
melainkan spektrum keterampilan, kepercayaan diri, dan kepercayaan yang sepenuhnya terlewatkan oleh
metrik sederhana seperti "memiliki broadband".

## Matematika

Inklusi digital adalah sebuah kerangka kerja dan pemeriksaan kesetaraan alih-alih rumus tunggal,
tetapi ia tersusun dengan penilaian nilai kuantitatif melalui
[pembobotan distribusional](../distributional-weighting/):

```
Nilai pergeseran kanal naif:
  nilai = volume yang bergeser × (biaya_lama − biaya_digital)
          [lihat channel-shift-savings]

Nilai yang disesuaikan inklusi:
  nilai = (volume yang bergeser × penghematan tak terbobot)
        − (pengguna yang terkecualikan × biaya penyediaan
           digital-terbantu)
        − (penyesuaian bobot distribusional untuk kerugian bagi
           kelompok terkecualikan yang kehilangan akses atau
           menghadapi kualitas layanan yang menurun)

Digital-terbantu bukanlah biaya residual dari kegagalan — ia adalah
kanal yang dirancang dengan [biaya-per-transaksi](../cost-per-transaction/)
sendiri, biasanya jauh lebih tinggi per transaksi daripada layanan
mandiri digital tetapi biasanya masih lebih murah daripada kanal
warisan yang sebagian digantikannya.
```

## Contoh Perhitungan

**Layanan tunjangan nasional bergaya Universal Credit**: 2,5 juta klaim/tahun, dinilai membutuhkan
dukungan digital-terbantu untuk estimasi 10% pemohon sesuai asumsi perencanaan Government Digital
Strategy.

```
Kohort terkecualikan/digital-terbantu = 2.500.000 × 10% = 250.000
klaim/tahun

Biaya kanal digital-terbantu (dukungan telepon + tatap muka,
diisi staf untuk menangani kerentanan dan kompleksitas) ≈
£9,50/klaim
  = 250.000 × £9,50 = £2.375.000/tahun

Biaya layanan mandiri digital untuk 90% lainnya ≈ £0,40/klaim
  = 2.250.000 × £0,40 = £900.000/tahun

Biaya per transaksi terpadu = (2.375.000 + 900.000) / 2.500.000
  = £1,31/klaim

Sebuah desain yang melewatkan digital-terbantu untuk mencapai
biaya-per-transaksi utama yang lebih rendah (misalnya £0,40 terpadu,
mengabaikan 250.000 pemohon yang terkecualikan) tidak menghilangkan
biaya £2,375 juta tersebut — ia mengubahnya menjadi hak yang tidak
diklaim, banding, dan permintaan layanan krisis hilir yang jatuh
pada anggaran yang sama sekali berbeda.
```

## Kaitan dengan Rekayasa Perangkat Lunak

Digital-terbantu adalah kanal yang dirancang, yang berarti ia memiliki antarmuka, SLA, dan
instrumentasi seperti kanal lainnya: sebuah alat petugas kasus berbasis telepon, sebuah portal
perantara untuk Citizens Advice atau pemerintah daerah, atau sebuah alur kios tatap muka.
Memperlakukannya sebagai renungan belakangan — sebuah nomor telepon dalam cetakan kecil alih-alih
kanal yang dipertimbangkan sejak discovery — adalah cara paling umum layanan gagal pada
[standar layanan digital](../digital-service-standard/) poin 5 saat penilaian. Inklusi digital adalah
lensa kesetaraan pada setiap topik lain dalam bab ini: ia membatasi seberapa agresif
[penghematan pergeseran kanal](../channel-shift-savings/) dapat direalisasikan, ia adalah baris yang
harus dimasukkan secara jujur dalam [biaya per transaksi](../cost-per-transaction/), dan ia adalah
penerapan langsung dari [pembobotan distribusional](../distributional-weighting/) pada konteks
layanan digital — sebuah penghematan yang jatuh secara tidak proporsional pada orang-orang yang
sudah terkecualikan secara digital dan ekonomi seharusnya dibobot ke bawah, bukan diperlakukan
setara dengan penghematan yang tersebar merata di seluruh populasi.

## Jebakan Umum

- **"Digital secara default" dibaca sebagai "digital saja"**: menutup saluran telepon atau loket
  begitu penggunaan digital melewati sebuah ambang batas, tanpa memverifikasi bahwa kohort yang
  tersisa memiliki alternatif yang benar-benar dapat digunakan.
- **Mengukur inklusi dengan konektivitas biner**: "memiliki broadband" atau "memiliki smartphone"
  adalah proksi yang buruk untuk kemampuan menyelesaikan transaksi tertentu — kesenjangan Essential
  Digital Skills (hanya 48% tenaga kerja Inggris menyelesaikan semua 20 tugas, menurut Lloyds 2024)
  menunjukkan keterampilan dan kepercayaan diri sama pentingnya dengan akses.
- **Menghitung biaya digital-terbantu sebagai kesalahan pembulatan**: menganggarkannya sebagai baris
  kontinjensi kecil alih-alih kanal yang layak dengan [biaya-per-transaksi](../cost-per-transaction/)
  sendiri, lalu terkejut ketika kurang didanai dan kurang berstaf saat peluncuran.
- **Menyurvei hanya penyelesai digital yang berhasil**: riset kepuasan dan usabilitas yang seluruhnya
  dijalankan di dalam layanan melewatkan orang-orang yang tidak pernah sampai sejauh itu, yang justru
  merupakan populasi yang dimaksudkan untuk dilindungi oleh pekerjaan inklusi digital.

## Sumber

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
