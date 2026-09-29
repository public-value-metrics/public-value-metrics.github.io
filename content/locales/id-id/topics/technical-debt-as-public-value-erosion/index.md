# Utang Teknis sebagai Erosi Nilai Publik

Utang teknis adalah metafora Ward Cunningham tahun 1992 untuk biaya masa depan tersirat dari
keputusan pengodean masa lalu yang serba praktis: sebuah **pokok** (principal, pekerjaan remediasi
yang harus dibayar) dan sebuah **bunga** (interest, hambatan berkelanjutan yang ditimbulkannya
terhadap penyampaian layanan). Pada estat TI pemerintah yang sudah usang (legacy), bunga tersebut
dibayar langsung dari nilai publik — penyampaian perubahan statutori yang lebih lambat, tingkat
kegagalan yang lebih tinggi pada layanan yang berhadapan dengan warga, dan semakin menyusutnya
jumlah orang yang bisa dengan aman menyentuh sistem tersebut sama sekali.

## Mengapa Ini Penting

Sistem mainframe warisan dan era COBOL di berbagai departemen pemerintah Inggris — HMRC dan DWP
menjadi yang paling sering disebut — membawa risiko yang terdokumentasi dengan baik dan terus
meningkat, yang berulang kali disoroti oleh National Audit Office, termasuk dalam laporannya
*Digital Transformation in Government* (<https://www.nao.org.uk/>): platform yang menua, mahal
untuk diubah, semakin sulit diamankan, dan bergantung pada tenaga kerja spesialis yang pensiun
lebih cepat daripada penggantiannya. Berbeda dengan backlog di sektor swasta, utang ini berada
langsung di antara warga dan hak statutori mereka — mesin perhitungan tunjangan yang tidak dapat
diubah dengan aman adalah kendala penyampaian kebijakan, bukan sekadar ketidaknyamanan rekayasa.
Restart tahun 2013 pada program TI Universal Credit, ketika National Audit Office menemukan bahwa
pembangunan awalnya tidak akan memberikan nilai untuk uang dan sebagian besar aset perangkat
lunaknya harus dihapusbukukan, adalah contoh kanonis dari utang teknis yang tak dihargai akhirnya
menyusul sebuah program publik yang hidup dan tampak jelas di mata para menteri.

## Matematika

```
Pokok SQALE = Σ atas seluruh pelanggaran (waktu remediasi) × tarif biaya pengembang
Rasio utang teknis (TDR) = biaya remediasi / biaya pembangunan ulang × 100
                    (peringkat SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Bunga (angka yang membenarkan pelunasan):
  bunga/tahun = Δ kecepatan penyampaian × nilai per unit kecepatan
                + Δ tingkat insiden yang berhadapan dengan warga × biaya per insiden
                + premi keterampilan spesialis × jumlah staf terdampak
Kasus pelunasan = PV(bunga yang dihindari selama horizon) − biaya remediasi
               (didiskontokan pada tingkat diskonto sosial Green Book, lihat
               social-discount-rate.md)
```

Pokok menyatakan liabilitasnya; bunga adalah angka yang membangun kasus investasi di hadapan komite
akun publik.

## Contoh Perhitungan

Sebuah mesin pemrosesan klaim sepanjang 250.000 baris kode yang ditulis dalam bahasa generasi
keempat (4GL) warisan. Menggunakan tolok ukur CAST Appmarq sekitar $3,61 pokok utang teknis per
baris kode (≈£2,85 pada nilai tukar umum):

```
Pokok ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ 16% (peringkat C)
```

Bunga terukur: departemen tersebut mempertahankan tiga kontraktor spesialis dengan premi tarif
harian 40% di atas tarif insinyur senior standar karena keterampilan internal telah tergerus —
tambahan £180.000/tahun untuk tim beranggotakan enam orang. Sistem tersebut juga menyebabkan empat
gangguan pemrosesan besar per tahun, masing-masing menunda keputusan bagi sekitar 5.000 pengklaim
dan mengalihkan mereka ke pusat kontak dengan biaya sekitar £25/panggilan:

```
Bunga ≈ £180.000 (premi keterampilan)
         + 4 × 5.000 × £25 = £500.000 (biaya pengalihan kontak)
         ≈ £680.000/tahun
```

Remediasi bersasaran pada modul-modul dengan kinerja terburuk berbiaya £1.200.000 dan dimodelkan
akan memangkas bunga sebesar 70%:

```
Pengurangan bunga = 0,70 × 680.000 = £476.000/tahun
Payback ≈ 1.200.000 / 476.000 ≈ 2,5 tahun
```

Penyasaran ini penting: meremediasi kode yang jarang disentuh tidak membeli apa-apa, karena bunga
terkonsentrasi di tempat frekuensi perubahan dan kepadatan utang sama-sama memuncak.

## Kaitan dengan Rekayasa Perangkat Lunak

Pembingkaian nilai publik yang meningkatkan kasus utang teknis melampaui sekadar "kodenya sudah
tua": nyatakan estat warisan sebagai inventaris tempat kapasitas penyampaian yang hilang
terkonsentrasi, dan kaitkan secara eksplisit dengan
[total biaya kepemilikan](../total-cost-of-ownership-in-government-it/), karena bunga adalah biaya
operasional yang seharusnya masuk ke dalam baris TCO terlepas dari apakah bagian keuangan pernah
memintanya atau tidak. Sistem yang sarat utang juga membawa eksposur
[keamanan siber](../public-sector-cybersecurity-value/) yang tidak proporsional, karena kadensi
penambalan (patching) dan kepadatan utang saling berkorelasi — sistem warisan yang tidak dapat
ditambal adalah utang teknis yang bunganya dibayar dalam bentuk risiko insiden, bukan dalam uang.
Dan setiap trade-off antara remediasi versus fitur baru itu sendiri merupakan keputusan
[biaya penundaan](../cost-of-delay-in-public-programmes/): melunasi utang menunda perubahan
statutori berikutnya, yang memiliki CoD-nya sendiri yang harus ditimbang terhadap bunga yang
dihemat.

## Jebakan Umum

- **Pelaporan hanya pokok**: estimasi remediasi yang besar dan menakutkan tanpa angka bunga tidak
  membenarkan apa pun kepada penyetuju anggaran.
- **Angka utang hasil alat yang ditelan mentah-mentah**: pemindai bergaya SQALE menghitung
  pelanggaran aturan; mereka melewatkan jenis utang yang mahal — keputusan arsitektural dan aturan
  bisnis warisan yang tidak terdokumentasi — sambil menandai hal-hal remeh.
- **"Penulisan ulang menghapus semuanya"**: program penggantian harus melewati disiplin yang sama
  seperti kasus bisnis lainnya — biaya kontrafaktual, probabilitas keberhasilan, dan pendiskontoan —
  bukan pengecualian darinya, sebagaimana ditunjukkan oleh restart Universal Credit tahun 2013.
- **Utopianisme utang nol**: tingkat utang optimal bukanlah nol; utang adalah pengungkit (leverage)
  yang membeli penyampaian yang lebih awal. Pertanyaan yang hidup selalu tentang tingkat bunganya,
  bukan apakah utang itu ada sama sekali.

## Sumber

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
