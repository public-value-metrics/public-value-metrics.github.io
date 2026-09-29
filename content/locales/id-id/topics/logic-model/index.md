# Model Logika

Sebuah model logika adalah diagram linear yang menghubungkan input, aktivitas, keluaran, hasil, dan
dampak untuk sebuah program, dibaca dari kiri ke kanan sebagai rantai akuntabilitas: sumber daya
masuk, aktivitas terjadi, keluaran diproduksi, hasil berubah bagi penerima manfaat, dan dampak
terakumulasi pada skala waktu yang lebih luas atau lebih panjang. Ini adalah struktur standar yang
diharapkan pemberi dana dan auditor untuk dapat dilaporkan sebuah program, dan pasangan yang
menghadap ke depan dari sebuah [teori perubahan](../theory-of-change/) yang dipetakan mundur.

## Mengapa Ini Penting

Magenta Book milik HM Treasury menetapkan model logika sebagai elemen wajib dari desain evaluasi
program, dan pemberi dana seperti National Lottery Community Fund membangun templat aplikasi dan
pelaporan mereka di sekitar persis rantai lima kolom ini. Nilainya adalah memaksa sebuah program
untuk menyatakan, dalam satu diagram, apa yang akan dibelanjakannya, apa yang akan dilakukan
dengannya, apa yang akan diproduksinya, dan — secara krusial — apa yang seharusnya berubah sebagai
hasilnya, pada tingkat spesifisitas yang cenderung dikaburkan oleh sebuah paragraf prosa. Sebuah
model logika dengan kolom input dan aktivitas yang terisi tetapi kolom hasil yang kosong atau samar
dapat didiagnosis sekilas, yang justru mengapa pemberi dana memintanya.

## Matematika

Model logika adalah rantai struktural alih-alih rumus:

```
Input           Aktivitas         Keluaran            Hasil                Dampak
(sumber daya    (apa yang        (produk langsung,    (perubahan bagi      (perubahan jangka
 yang            dilakukan        dapat dihitung)      penerima manfaat)    panjang, tingkat
 dikomitmenkan)  dengannya)                                                 populasi, atau
                                                                             sistemik)
```

Setiap kolom seharusnya lebih spesifik daripada sebelumnya: input adalah apa yang Anda belanjakan,
aktivitas adalah apa yang Anda lakukan, keluaran adalah apa yang disampaikan terlepas dari efeknya,
hasil adalah apa yang berubah sebagai hasilnya — perbedaan yang dibahas secara lengkap dalam
[luaran vs keluaran](../outcomes-vs-outputs/) — dan dampak adalah perubahan jangka panjang yang
tahan lama, sering kali hanya dapat diatribusikan sebagian.

## Contoh Perhitungan

**Pemerintah daerah (layanan nasihat utang digital)**:

- Input: anggaran tahunan £180.000, 4,0 FTE penasihat, sebuah sistem manajemen kasus.
- Aktivitas: sesi penjangkauan, janji temu nasihat utang satu-lawan-satu.
- Keluaran: 900 janji temu disampaikan; 750 rencana utang dan tunjangan diterbitkan.
- Hasil: dari klien yang mencapai tindak lanjut 6 bulan, 60% (450 dari 750) melaporkan tunggakan
  yang berkurang, rata-rata pengurangan £1.200 per klien — £540.000 pengurangan tunggakan agregat.
- Dampak: penurunan terukur dalam aplikasi tunawisma dari basis klien layanan tersebut selama dua
  tahun, hanya sebagian dapat diatribusikan pada layanan ini berdampingan dengan intervensi lain
  (lihat [analisis kontrafaktual](../counterfactual-analysis/)).

**Lembaga amal (kemitraan rujukan bank pangan)**:

- Input: £45.000, 1,5 FTE koordinator, perjanjian kemitraan dengan 12 lembaga rujukan.
- Aktivitas: triase rujukan, pengemasan dan distribusi paket.
- Keluaran: 5.000 paket pangan didistribusikan kepada 1.100 rumah tangga.
- Hasil: 68% rumah tangga yang disurvei (748 dari 1.100) melaporkan ketahanan pangan yang membaik
  pada panggilan tindak lanjut 4 minggu.
- Dampak: kontribusi terhadap penurunan permintaan layanan krisis lokal, dibuktikan hanya dalam
  statistik wilayah agregat, tidak dapat diatribusikan pada lembaga amal ini sendiri.

## Kaitan dengan Rekayasa Perangkat Lunak

Model logika mendekati model data literal untuk sebuah sistem hasil: input dan aktivitas adalah
data operasional yang sudah Anda miliki (belanja, staf, log sesi); keluaran mudah diinstrumentasikan
karena dihitung pada titik penyampaian; hasil memerlukan pengumpulan data tindak lanjut yang
dirancang secara sengaja (survei, penautan data administratif) yang tidak akan ada kecuali seseorang
membangunnya; dampak biasanya memerlukan data yang tertaut, longitudinal, atau tingkat populasi di
luar sistem program mana pun. Insinyur yang membangun alat pelaporan seharusnya mendorong komisioner
untuk mendefinisikan indikator hasil dan dampak pada waktu desain, alih-alih secara default ke
dasbor hanya-keluaran karena itulah yang sudah didukung data transaksional. Lihat
[laba atas investasi sosial](../social-return-on-investment/) untuk sebuah metode yang menilai
kolom hasil dan dampak secara khusus, dan [realisasi manfaat](../benefits-realization/) untuk
melacak apakah kolom dampak benar-benar disampaikan.

## Jebakan Umum

- **Berhenti pada keluaran.** Sebuah dasbor yang melaporkan janji temu yang disampaikan atau paket
  yang didistribusikan dan menyiratkan manfaat sedang melaporkan aktivitas, bukan hasil — lihat
  [luaran vs keluaran](../outcomes-vs-outputs/).
- **Tidak ada kaitan kausal yang dinyatakan antar kolom.** Sebuah model logika menyatakan rantainya
  tetapi bukan mengapa aktivitas seharusnya menghasilkan keluaran yang seharusnya menghasilkan
  hasil; penalaran itu berada dalam sebuah [teori perubahan](../theory-of-change/), dan sebuah model
  logika tanpa itu di baliknya belum teruji.
- **Memperlakukannya sebagai dokumen penawaran satu kali.** Model logika yang diproduksi hanya untuk
  memenuhi sebuah aplikasi pendanaan dan tidak pernah diperbarui berhenti mencerminkan apa yang
  sebenarnya dilakukan program tersebut.
- **Merayapnya atribusi pada kolom dampak.** Mengklaim perubahan tingkat populasi sebagai disebabkan
  semata-mata oleh satu program, tanpa kontrafaktual, melebih-lebihkan apa yang didukung bukti.

## Sumber

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
