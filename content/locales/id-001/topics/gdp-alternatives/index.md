# Alternatif PDB

Alternatif PDB adalah metrik yang dibangun untuk menangkap apa yang secara struktural diabaikan
Produk Domestik Bruto: pekerjaan perawatan tak berbayar, penipisan lingkungan, distribusi pendapatan,
dan apakah pertumbuhan benar-benar meningkatkan kehidupan. Yang paling terkenal adalah Genuine
Progress Indicator (GPI) dan Gross National Happiness (GNH) Index milik Bhutan; kasus untuk
menganggapnya serius paling berpengaruh disampaikan oleh Komisi Stiglitz-Sen-Fitoussi tahun 2009.
Bagi insinyur yang membangun dasbor atau sistem KPI pemerintah, "angka mana yang dihitung sebagai
kemajuan" adalah keputusan desain dengan konsekuensi nyata bagi apa yang didanai.

## Mengapa Ini Penting

Simon Kuznets, yang membangun akun nasional AS pada tahun 1930-an, memperingatkan Kongres pada tahun
1934 bahwa "kesejahteraan sebuah bangsa hampir tidak dapat disimpulkan dari sebuah pengukuran
pendapatan nasional" — sebuah peringatan yang hampir seketika dilampaui oleh angka tersebut. PDB
menghitung pembersihan tumpahan minyak sebagai pertumbuhan dan pengasuhan anak tak berbayar seorang
orang tua sebagai nol; ia tidak membedakan belanja yang membangun kesejahteraan yang tahan lama dari
belanja yang sekadar mengimbangi kerugian yang sudah terjadi. Komisi Stiglitz-Sen-Fitoussi, yang
dibentuk oleh Presiden Prancis Nicolas Sarkozy dan diketuai oleh Joseph Stiglitz, Amartya Sen, dan
Jean-Paul Fitoussi, melaporkan pada 2009 bahwa sistem statistik seharusnya menggeser penekanan "dari
mengukur produksi ekonomi menjadi mengukur kesejahteraan orang," dan bahwa keberlanjutan seharusnya
dilacak secara terpisah dari kesejahteraan saat ini alih-alih dilipat menjadi satu angka. Alternatif
PDB mengoperasionalkan rekomendasi tersebut. GPI, dikembangkan oleh thinktank Redefining Progress
pada 1990-an dan dibangun di atas Measure of Economic Welfare tahun 1972 milik William Nordhaus dan
James Tobin, dimulai dari konsumsi pribadi (seperti PDB) lalu menambahkan manfaat non-pasar yang
diabaikan PDB (kerja rumah tangga, kesukarelawanan) sambil mengurangi biaya defensif dan penipisan
(kejahatan, polusi, perjalanan komuter, penyusutan sumber daya) yang secara keliru dihitung PDB
sebagai positif. GNH Index Bhutan, dikelola oleh GNH Centre Bhutan (<https://www.gnhcentre.bt/>),
melangkah lebih jauh lagi, menggantikan pertumbuhan sebagai tujuan konstitusional negara tersebut
yang dinyatakan: ia mengagregasi 33 indikator di 9 domain — kesejahteraan psikologis, kesehatan,
pendidikan, penggunaan waktu, keragaman budaya, tata kelola, vitalitas komunitas, keragaman
ekologis, dan standar hidup — menjadi satu skor berbasis kecukupan yang digunakan langsung untuk
menyaring proposal kebijakan pemerintah.

## Matematika

```
GPI = pengeluaran konsumsi pribadi
      + manfaat non-pasar (kerja rumah tangga, kesukarelawanan, pendidikan
        tinggi)
      − biaya defensif dan sosial (kejahatan, polusi, perjalanan komuter,
        keretakan keluarga)
      − penipisan modal alam dan sosial (penyusutan sumber daya, hilangnya
        lahan pertanian)

Skor kecukupan GNH, per domain:
  seseorang "cukup" dalam sebuah domain begitu mereka melewati ambang
  batasnya pada setiap indikator
  Indeks Kebahagiaan = (% populasi yang cukup dalam ≥ 6 dari 9 domain)
                    + (kekurangan rata-rata terbobot dari minoritas
                       "belum-bahagia")
```

## Contoh Perhitungan

**Wilayah, GPI**: konsumsi pribadi adalah $50 miliar. Tambahkan estimasi nilai kerja rumah tangga
dan sukarelawan $12 miliar (tarif upah biaya-pengganti — lihat
[nilai waktu sukarelawan](../volunteer-time-value/)). Kurangi estimasi biaya tahunan kemacetan
perjalanan komuter ($3 miliar), kejahatan ($4 miliar), dan penipisan sumber daya jangka panjang
($6 miliar):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($miliar)
```

Jika PDB tumbuh dari $50 miliar menjadi $55 miliar pada tahun itu (+10%), tetapi biaya defensif dan
penipisan tumbuh lebih cepat daripada konsumsi, GPI dapat turun bahkan ketika PDB naik — "hipotesis
ambang batas" yang dikutip peneliti GPI untuk ekonomi berpenghasilan tinggi sejak kira-kira tahun
1970-an, ketika pertumbuhan terus mendaki sementara GPI mendatar.

**Warga, GNH**: seorang responden melewati ambang kecukupan dalam 7 dari 9 domain (kesehatan,
pendidikan, standar hidup, vitalitas komunitas, keragaman budaya, keragaman ekologis, penggunaan
waktu) tetapi kurang pada kesejahteraan psikologis dan tata kelola. Karena 7 ≥ 6, mereka dihitung
"bahagia" dalam jumlah kepala; indeks tersebut secara terpisah melacak kedalaman dua kekurangan
mereka sehingga kelulusan tipis tidak tidak dapat dibedakan dari kelulusan yang nyaman.

## Kaitan dengan Rekayasa Perangkat Lunak

- Sebuah dasbor KPI yang dimodelkan hanya pada throughput atau belanja (pola PDB) secara sistematis
  akan melewatkan kerugian yang dilakukan dalam menghasilkan throughput tersebut — volume tiket
  dukungan yang diperlakukan sebagai "keterlibatan" alih-alih "tekanan pengguna" adalah versi
  penyampaian perangkat lunak dari menghitung tumpahan minyak sebagai pertumbuhan.
- Akuntansi gaya GPI adalah pola audit yang berguna untuk suite [KPI sektor publik](../public-sector-kpis/)
  mana pun: untuk setiap metrik keluaran utama, tanyakan biaya defensif apa yang secara diam-diam
  ditimbulkannya (pengerjaan ulang, respons insiden, kelelahan) dan netokan, dengan cara yang sama
  seperti GPI menetokan belanja defensif dari konsumsi.
- Metode kecukupan domain GNH — lulus/gagal per dimensi, lalu diagregasi — secara struktural adalah
  teknik yang sama dengan [analisis keputusan multi-kriteria](../multi-criteria-decision-analysis/)
  dan layak digunakan kembali di mana pun sebuah skor skalar tunggal akan menyembunyikan dimensi
  kegagalan yang kritis.

## Jebakan Umum

- **Memperlakukan GPI sebagai akun nasional yang presisi** — tidak seperti PDB, GPI tidak memiliki
  satu metodologi standar tunggal; studi yang berbeda membobot biaya komuter, waktu sukarelawan,
  atau penipisan sumber daya secara berbeda, sehingga perbandingan GPI lintas studi jauh kurang
  andal daripada perbandingan PDB lintas negara.
- **Mengimpor GNH secara utuh ke dalam budaya kebijakan yang berbeda** — bobot domain dan ambang
  kecukupannya ditetapkan melalui konsultasi Bhutan; menyalin angkanya tanpa proses konsultasi yang
  mendasarinya menghasilkan metrik berongga yang tidak dipercaya siapa pun.
- **Mengasumsikan alternatif PDB menggantikan penilaian biaya-manfaat** — ini adalah indikator
  diagnostik seluruh ekonomi, bukan alat keputusan untuk satu program tunggal; gunakan
  [analisis biaya-manfaat sosial](../social-cost-benefit-analysis/) untuk itu sebagai gantinya.

## Sumber

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
