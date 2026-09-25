# Teori Perubahan (Theory of Change)

Teori perubahan adalah jalur kausal eksplisit yang dipetakan mundur, dari tujuan jangka panjang
menuju prasyarat dan aktivitas yang harus ada agar tujuan tersebut tercapai, beserta asumsi yang
menghubungkan setiap tautannya. Teori ini dibangun dengan memulai dari hasil yang diinginkan lalu
bertanya "apa yang harus benar tepat sebelum ini, agar hal ini bisa terjadi?", berulang kali,
hingga mencapai aktivitas yang benar-benar dapat disampaikan — yang merupakan arah kebalikan dari
[model logika](../logic-model/), dan itulah sebabnya keduanya saling melengkapi, bukan saling
menggantikan.

## Mengapa Ini Penting

Metode pemetaan mundur ini diformalkan oleh Center for Theory of Change dan ActKnowledge,
dibangun di atas karya evaluator Carol Weiss tentang menjadikan asumsi program secara eksplisit
agar dapat diuji, bukan sekadar diterima begitu saja. Evaluasi hibah di Inggris telah menyerap
gagasan ini secara langsung: Magenta Book milik HM Treasury memperlakukan teori perubahan sebagai
titik awal untuk setiap rancangan evaluasi, dan pemberi dana seperti National Lottery Community
Fund mewajibkan pemohon untuk merumuskan satu teori perubahan sebelum proposal mereka didanai.
Alasan mengapa ini penting bagi seorang insinyur perangkat lunak adalah karena teori perubahan
merupakan dokumen yang seharusnya menentukan apa yang perlu diukur oleh sistem — jika rantai kausal
menyatakan "tingkat pengambilan tunjangan bergantung pada penerima klaim yang menerima perhitungan
yang dipersonalisasi", itu adalah klaim yang dapat diuji dan produk Anda dapat diinstrumentasi
untuk membuktikan atau membantahnya.

## Matematika

Teori perubahan bersifat struktural, bukan numerik. Setiap tautan harus membawa baik sebuah asumsi
maupun sebuah indikator yang dapat menunjukkan bahwa asumsi tersebut salah:

```
Hasil jangka panjang (tujuan)
  ↑ prasyarat + asumsi + indikator
Hasil antara N
  ↑ prasyarat + asumsi + indikator
  ...
Hasil antara 1
  ↑ prasyarat + asumsi + indikator
Aktivitas / intervensi
  ↑ sumber daya yang dikomitmenkan
Masukan
```

Struktur ini langsung menjadi masukan bagi
[metode evaluasi dampak](../impact-evaluation-methods/), yang ada untuk menguji apakah asumsi pada
setiap tautan benar-benar berlaku, dan bagi [analisis kontrafaktual](../counterfactual-analysis/),
yang menguji apakah hasil jangka panjang tersebut akan tetap terjadi meskipun tanpa intervensi.

## Contoh Perhitungan

**Pemerintah daerah (pencegahan tunawisma)**: hasil jangka panjangnya adalah kelangsungan sewa
yang bertahan hingga 12 bulan bagi rumah tangga yang berisiko diusir.

- Prasyarat: rumah tangga memiliki rencana pembayaran tunggakan yang realistis dan terjangkau.
  Asumsi: rencana yang dinegosiasikan oleh caseworker lebih berkelanjutan dibandingkan rencana
  yang diperintahkan pengadilan.
  Indikator: % rencana yang masih aktif pada bulan ke-6.
- Prasyarat: rumah tangga mengklaim tunjangan yang menjadi hak mereka.
  Asumsi: kalkulator tunjangan digital meningkatkan klaim yang benar dibandingkan formulir kertas.
  Indikator: tingkat akurasi klaim, dibandingkan sebelum/sesudah peluncuran alat tersebut.
- Aktivitas: triase caseworker, kalkulator tunjangan digital, negosiasi tunggakan.

Dalam kohort percontohan sebanyak 120 rumah tangga, asumsi kalkulator tunjangan terbukti berlaku
untuk 102 rumah tangga (85%) yang kemudian mengajukan klaim dengan benar, dibuktikan oleh evaluasi
proses berikutnya — memberikan tim program bukti untuk tautan spesifik tersebut, bukan sekadar
satu klaim menyeluruh tentang tunawisma yang tercegah.

**Organisasi amal (pendampingan pemuda)**: hasil jangka panjangnya adalah berkurangnya pengeluaran
dari sekolah. Prasyarat yang dipetakan mundur: regulasi emosi yang membaik → hubungan satu-ke-satu
yang dipercaya dengan seorang mentor → kontak mingguan yang konsisten selama dua semester. Teori
ini menjadikan eksplisit bahwa hilangnya prasyarat "kontak mingguan yang konsisten" (misalnya,
akibat pergantian mentor) memprediksi bahwa hasilnya tidak akan tercapai, yang merupakan klaim yang
dapat diuji dan dibantah, bukan sekadar harapan.

## Kaitan dengan Rekayasa Perangkat Lunak

Teori perubahan seharusnya membentuk model data sebuah produk bahkan sebelum satu dasbor pun
dibangun: identifikasi tautan mana yang membutuhkan indikator, dan instrumentasi khusus untuk
tautan tersebut, alih-alih kembali secara default pada apa pun yang paling mudah dicatat. Teori ini
juga mendisiplinkan percakapan peta jalan — fitur yang tidak terpetakan pada tautan mana pun dalam
rantai tersebut tidak jelas layak dibangun atau tidaknya. Lihat [model logika](../logic-model/)
untuk rantai akuntabilitas yang menghadap ke depan yang dibangun setelah teori disepakati,
[laba sosial atas investasi](../social-return-on-investment/) untuk metode yang bergantung pada
teori perubahan untuk menentukan cakupan hasil mana yang akan dinilai, dan
[luaran vs keluaran](../outcomes-vs-outputs/) untuk perbedaan yang menjadi tumpuan tautan hasil
antara tersebut.

## Jebakan Umum

- **Mencampuradukkannya dengan model logika.** Teori perubahan bersifat kausal dan eksplanatif
  (mengapa kita percaya ini berhasil); model logika bersifat sekuensial dan deskriptif (apa yang
  terjadi dalam urutan apa). Menghasilkan hanya salah satunya membuat "mengapa"-nya atau jejak
  akuntabilitasnya hilang.
- **Membiarkan asumsi tetap implisit.** Seluruh nilai dari pemetaan mundur adalah memunculkan
  asumsi yang dapat diuji; teori perubahan yang hanya mendaftar kotak dan panah tanpa menyebutkan
  apa yang bisa membuat setiap tautan salah hanyalah hiasan.
- **Membangunnya sekali lalu menyimpannya begitu saja.** Teori perubahan yang ditulis untuk
  pengajuan pendanaan dan tidak pernah ditinjau ulang berhenti berguna begitu bukti mulai
  bertentangan dengan salah satu tautannya.
- **Melewatkan masukan pemangku kepentingan.** Teori perubahan yang dibangun sepenuhnya oleh
  komisioner tanpa masukan dari staf lini depan atau penerima manfaat cenderung mengodekan asumsi
  yang tidak dipercaya oleh siapa pun yang benar-benar menyampaikan layanan.

## Sumber

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
