# Biaya per Hasil

Biaya per hasil adalah total belanja program dibagi dengan jumlah orang yang mencapai perubahan yang
terdefinisi dan bermakna dalam keadaan mereka — bukan jumlah orang yang sekadar menerima sebuah
layanan. Ini adalah metrik efisiensi paling tajam yang dapat digunakan seorang pemberi dana atau tim
penyampaian, karena metrik ini memaksa sebuah pertanyaan pendahuluan yang dihindari kebanyakan
lembaga amal: apa, secara tepat, yang dihitung sebagai keberhasilan?

## Mengapa Ini Penting

Sebuah bank pangan dapat melaporkan dua angka yang sangat berbeda dari pembukuan tahun yang sama.
Biaya per paket pangan yang didistribusikan mungkin £15. Biaya per rumah tangga yang kemudian
mencapai ketahanan pangan — tidak lagi membutuhkan bantuan pangan darurat, diverifikasi pada titik
tindak lanjut — mungkin £340. Keduanya benar. Hanya satu yang memberi tahu pemberi dana apakah
uangnya berhasil. Kesenjangan antara keduanya adalah kesenjangan antara sebuah keluaran dan sebuah
hasil: sebuah paket yang diserahkan adalah sebuah keluaran; sebuah rumah tangga yang tidak lagi
berada dalam krisis adalah sebuah hasil. Lihat [luaran vs keluaran](../outcomes-vs-outputs/).

Sektor ketiga Inggris telah menghabiskan dua dekade membangun infrastruktur untuk memaksakan
perbedaan ini. "Pendekatan empat pilar" dari New Philanthropy Capital untuk efektivitas lembaga amal
secara eksplisit meminta organisasi untuk menyatakan hasil mereka sebelum keluaran mereka, dan
Inspiring Impact — kolaboratif pengukuran dampak yang didukung pemberi dana di Inggris —
mempublikasikan Outcomes Matrix yang kini disyaratkan oleh banyak aplikasi hibah untuk dilengkapi
oleh lembaga amal. Program riset tahunan "State of Hunger" milik Trussell Trust, dijalankan bersama
Heriot-Watt University, ada justru karena jumlah paket saja tidak mengatakan apa-apa tentang apakah
orang-orang lepas dari kerawanan pangan.

Biaya per hasil hanya bermakna setelah Anda menetapkan kontrafaktual: sebuah hasil yang tercapai
"bagaimanapun juga" bukanlah hasil yang dibeli oleh program tersebut. Lihat
[analisis kontrafaktual](../counterfactual-analysis/) dan
[perpindahan dan atribusi](../displacement-and-attribution/).

## Matematika

```
Biaya per hasil = Total biaya program / Jumlah penerima manfaat yang
                   mencapai hasil yang didefinisikan

di mana:
  Total biaya program   = biaya penyampaian langsung + bagian wajar
                           overhead
  Hasil yang didefinisikan = perubahan keadaan yang telah ditentukan
                              sebelumnya dan dapat diukur (misalnya
                              "aman pangan pada tindak lanjut 6 bulan",
                              bukan "menerima paket pangan")
```

Bandingkan dengan [basis data biaya satuan](../unit-cost-databases/) (misalnya tolok ukur biaya
satuan khusus sektor) untuk menilai apakah suatu biaya per hasil tertentu baik, rata-rata, atau
buruk relatif terhadap intervensi yang sebanding.

## Contoh Perhitungan

**Bank pangan, satu tahun**:

- Total biaya program: £450.000
- Paket yang didistribusikan: 30.000
- Biaya per paket (sebuah metrik keluaran): £450.000 / 30.000 = **£15**

Lembaga amal tersebut juga menjalankan survei tindak lanjut enam bulan dengan sampel rumah tangga,
menemukan bahwa 35% rumah tangga yang menerima tiga paket atau lebih melaporkan tidak lagi
membutuhkan bantuan pangan darurat dan mencetak skor di atas ambang batas ketahanan pangan pada modul
survei ketahanan pangan standar. Dari 1.800 rumah tangga yang menerima tiga paket atau lebih pada
tahun tersebut, 630 mencapai hasil itu.

```
Biaya per hasil = £450.000 / 630 = £714 per rumah tangga yang mencapai
                   ketahanan pangan
```

Angka £714 itulah yang seharusnya digunakan oleh seorang pemberi dana yang membandingkan lembaga
amal ini dengan sebuah proyek percontohan transfer tunai atau layanan nasihat utang — bukan £15.
Jika sebuah program transfer tunai yang sebanding di wilayah yang sama mencapai ketahanan pangan
seharga £500 per rumah tangga, bank pangan tersebut belum tentu merupakan jalur yang lebih efisien
menuju hasil yang sama, meskipun biaya per paketnya terlihat murah.

## Kaitan dengan Rekayasa Perangkat Lunak

Sebagian besar sistem manajemen kasus dibangun untuk mencatat keluaran, karena keluaran adalah apa
yang terjadi di dalam transaksi (sebuah paket diserahkan, sebuah formulir diajukan). Hasil biasanya
terjadi kemudian, sering di luar jendela penangkapan normal sistem, dan memerlukan keputusan desain
yang disengaja: membangun mekanisme tindak lanjut (pemicu survei, alur kerja kontak ulang, latihan
penautan data) sebagai fitur kelas satu, bukan tambahan belakangan untuk laporan tahunan. Insinyur
yang membangun platform manajemen hibah atau manajemen kasus untuk sektor ini sebaiknya
memperlakukan "apa peristiwa hasilnya, dan bagaimana kita mengamatinya" sebagai pertanyaan
persyaratan yang diajukan sebelum model data ditetapkan — jauh lebih sulit untuk menambahkan bidang
hasil belakangan daripada penghitung keluaran. Lihat [luaran vs keluaran](../outcomes-vs-outputs/)
dan [model logika](../logic-model/) untuk cara menyusun percakapan persyaratan tersebut, dan
[biaya per penerima manfaat](../cost-per-beneficiary/) untuk metrik yang lebih cepat dan lebih kasar
yang dijangkau tim ketika pelacakan hasil belum dibangun.

## Jebakan Umum

- **Melaporkan keluaran yang berdandan sebagai hasil.** "Orang yang dijangkau" bukanlah "orang yang
  terbantu." Jika sebuah metrik dapat dihasilkan oleh log sistem tanpa kontak tindak lanjut, itu
  hampir pasti merupakan sebuah keluaran.
- **Manipulasi penyebut.** Mempersempit populasi hasil menjadi "mereka yang menyelesaikan program"
  secara diam-diam menjatuhkan orang-orang yang keluar — sering kali kasus tersulit — dan
  menggelembungkan tingkat yang tampak. Nyatakan penyebut sebagai semua orang yang memulai, bukan
  semua orang yang menyelesaikan.
- **Tidak ada kontrafaktual.** Menghitung siapa pun yang mencapai hasil tersebut, termasuk mereka
  yang akan tetap mencapainya bagaimanapun juga, melebih-lebihkan apa yang dibeli oleh program
  tersebut. Lihat [analisis kontrafaktual](../counterfactual-analysis/).
- **Membandingkan di seluruh definisi hasil yang tidak kompatibel.** "Aman pangan" yang diukur oleh
  modul survei yang tervalidasi tidak dapat dibandingkan dengan "aman pangan" yang dilaporkan
  sendiri dalam formulir kepuasan; sebuah tabel liga biaya-per-hasil hanya jujur ketika definisi
  hasilnya cocok.

## Sumber

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
