# Akuntansi Modal Alam

Akuntansi modal alam menempatkan lingkungan pada pijakan yang sama seperti aset nasional atau
organisasi lainnya: ia mengukur stok sumber daya alam (hutan, tanah, sungai, lahan basah, atmosfer)
dan aliran layanan yang dihasilkannya (penyerapan karbon, perlindungan banjir, rekreasi, pangan),
baik dalam istilah fisik maupun moneter, sehingga penipisan lingkungan muncul dalam pengambilan
keputusan dengan cara yang sama seperti menguras modal finansial. Inggris adalah salah satu
pemerintah paling maju dalam melakukan ini secara sistematis, didorong oleh 25 Year Environment Plan
(2018) dan diimplementasikan melalui akun UK Natural Capital milik ONS dan panduan tambahan Green
Book HM Treasury.

## Mengapa Ini Penting

Akuntansi konvensional — korporat dan pemerintahan sama-sama — memperlakukan sebuah hutan sebagai
tidak bernilai sampai ia ditebang dan dijual sebagai kayu, pada titik mana ia menjadi PDB. Akuntansi
modal alam ada untuk menutup kesenjangan itu: 25 Year Environment Plan Inggris mengikat pemerintah
untuk menanamkan pemikiran modal alam di seluruh kebijakan, secara eksplisit menyatakan ambisi untuk
menjadi "generasi pertama yang meninggalkan lingkungan dalam keadaan yang lebih baik daripada yang
kami temukan." ONS sejak itu telah mempublikasikan akun UK Natural Capital tahunan
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
yang mengestimasi nilai moneter layanan ekosistem — dari rekreasi hutan hingga manfaat kesehatan
ruang hijau perkotaan hingga penyimpanan karbon lahan gambut — menggunakan kerangka National
Accounts yang sama yang digunakan untuk modal yang diproduksi, sehingga modal alam pada akhirnya
dapat berada dalam neraca yang sama seperti jalan, bangunan, dan peralatan. Panduan Enabling a
Natural Capital Approach (ENCA) milik HM Treasury, tambahan terhadap Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
menetapkan bagaimana penilai seharusnya menghargakan biaya dan manfaat lingkungan dalam kasus
bisnis, sehingga sebuah skema jalan yang menghancurkan hutan kuno atau sebuah skema banjir yang
memulihkan lahan basah dapat dibandingkan pada istilah moneter yang konsisten alih-alih satu
memiliki angka dan yang lain sebuah paragraf peringatan.

## Matematika

```
Nilai aset layanan ekosistem = NPV dari aliran layanan yang disediakan
                                 aset tersebut

Nilai aset = Σ (t = 1 hingga T) [nilai aliran layanan tahunan_t / (1 + r)^t]

di mana:
  nilai aliran layanan_t = jumlah layanan pada tahun t × nilai satuan
                            (misalnya kunjungan rekreasi × nilai per
                             kunjungan; ton karbon yang diserap × harga
                             karbon)
  r = tingkat diskonto (tingkat diskonto sosial Green Book — lihat
      [tingkat diskonto sosial](../social-discount-rate/))
  T = horizon waktu di mana aset tersebut diharapkan menyediakan
      layanan tersebut
```

Ini adalah struktur nilai-kini-bersih yang identik dengan yang digunakan untuk menghargai modal yang
diproduksi atau menilai investasi publik mana pun di bawah
[penilaian Green Book](../green-book-appraisal/) — kontribusi akuntansi modal alam adalah
menyediakan kuantitas fisik dan nilai satuan yang kredibel untuk layanan yang sebelumnya dihargai
nol.

## Contoh Perhitungan

**Hutan perkotaan, nilai rekreasi**: sebuah hutan seluas 50 hektar menerima estimasi 80.000
kunjungan rekreasi per tahun, masing-masing dihargai (melalui metode biaya-perjalanan atau
preferensi-dinyatakan — lihat [penilaian preferensi terungkap](../revealed-preference-valuation/)
dan [penilaian preferensi dinyatakan](../stated-preference-valuation/)) sebesar £3 per kunjungan.
Hutan tersebut diharapkan terus menyediakan layanan ini selama 50 tahun, dinilai pada tingkat
diskonto 3,5%.

```
Nilai rekreasi tahunan = 80.000 × £3 = £240.000/tahun

NPV selama 50 tahun pada 3,5% ≈ £240.000 × faktor anuitas(3,5%, 50 tahun)
faktor anuitas(3,5%, 50) ≈ 21,4

Nilai aset ≈ £240.000 × 21,4 ≈ £5.136.000
```

**Menambahkan penyimpanan karbon**: hutan yang sama menyerap estimasi 400 ton CO2 per tahun,
dihargai pada harga karbon non-perdagangan pemerintah sekitar £75/ton (ilustratif — gunakan nilai
karbon BEIS/DESNZ yang dipublikasikan saat ini untuk sebuah penilaian aktif).

```
Nilai karbon tahunan = 400 × £75 = £30.000/tahun
NPV selama 50 tahun pada 3,5% ≈ £30.000 × 21,4 ≈ £642.000

Total nilai aset hutan (rekreasi + karbon) ≈ £5.136.000 + £642.000
                                            ≈ £5.778.000
```

Ini belum termasuk penambahan atenuasi banjir, keanekaragaman hayati, atau layanan kualitas udara
yang juga diminta panduan ENCA untuk dipertimbangkan penilai — totalnya sengaja merupakan sebuah
lantai, bukan langit-langit.

## Kaitan dengan Rekayasa Perangkat Lunak

- Sistem manajemen lingkungan dan aset untuk pemerintah daerah dan lembaga (taman, jalan raya, badan
  air) dapat melampirkan sebuah register modal alam berdampingan dengan register aset fisik mereka,
  menggunakan pola aliran-layanan-kali-nilai-satuan yang sama seperti
  [basis data biaya satuan](../unit-cost-databases/) lain mana pun yang dikelola organisasi tersebut.
- Karena NPV modal alam sensitif terhadap tingkat diskonto (lihat faktor anuitas contoh perhitungan),
  alat mana pun yang menghitungnya seharusnya mengungkap tingkat dan horizonnya sebagai input yang
  terlihat, bukan menguburnya — prinsip transparansi yang sama yang dibahas dalam
  [kesetaraan antargenerasi dan diskonto keberlanjutan](../intergenerational-equity-and-sustainability-discounting/).
- Akun modal alam semakin menjadi input wajib untuk bagian dampak lingkungan dari sebuah kasus
  bisnis [penilaian Green Book](../green-book-appraisal/); sebuah tim penyampaian yang membangun
  perkakas kasus bisnis seharusnya memperlakukan akun ONS dan nilai satuan ENCA sebagai data
  referensi untuk diintegrasikan, bukan sesuatu yang dihitung ulang penilai dari nol setiap kali.

## Jebakan Umum

- **Penghitungan ganda layanan ekosistem yang tumpang tindih** — nilai rekreasi dan nilai
  keanekaragaman hayati untuk lokasi yang sama dapat berbagi data kesediaan-membayar yang mendasari;
  panduan ENCA secara eksplisit memperingatkan terhadap menjumlahkan penilaian yang diturunkan dari
  instrumen survei yang tumpang tindih.
- **Memperlakukan nilai aset modal alam sebagai statis** — aliran layanan berubah dengan iklim,
  pengelolaan, dan tekanan penggunaan lahan; nilai karbon dan atenuasi banjir sebuah hutan dekade
  ini bukanlah properti permanen dari lokasi tersebut.
- **Menggunakan nilai satuan rata-rata nasional untuk sebuah keputusan yang sangat lokal** — satu
  hektar hutan perkotaan yang mudah diakses dan satu hektar dataran tinggi terpencil memiliki nilai
  rekreasi yang sangat berbeda; panduan ENCA merekomendasikan nilai lokal atau khusus lokasi jika
  tersedia alih-alih secara default ke rata-rata nasional.

## Sumber

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
