# Pembayaran Berdasarkan Hasil dan Obligasi Dampak Sosial (PbR/SIB)

Pembayaran berdasarkan hasil (Payment by Results, PbR) membayar sebuah penyedia berdasarkan hasil
yang terverifikasi dicapai, bukan aktivitas yang dilakukan. Sebuah obligasi dampak sosial (Social
Impact Bond, SIB) adalah struktur pembiayaan PbR spesifik di mana investor swasta atau filantropis
mendanai penyampaian layanan di muka dan dibayar kembali — dengan sebuah pengembalian — oleh
komisioner pemerintah hanya jika hasil yang diukur secara independen mencapai ambang batas yang
disepakati, menggeser risiko penyampaian dari pembayar pajak kepada investor.

## Mengapa Ini Penting

SIB pertama di dunia diluncurkan di HMP Peterborough pada September 2010: Social Finance
mengumpulkan £5 juta dari 17 investor untuk mendanai "One Service," bekerja dengan narapidana masa
tahanan pendek (di bawah 12 bulan) untuk mengurangi residivisme, dengan Ministry of Justice dan Big
Lottery Fund setuju untuk membayar kembali investor hanya jika peristiwa keyakinan ulang
(reconviction) turun setidaknya 7,5% terhadap kohort pembanding nasional yang dicocokkan. Kohort
akhir dari proyek percontohan Peterborough mencatat penurunan keyakinan ulang sebesar 9,7%, nyaman
di atas ambang batas, dan investor dibayar kembali dengan sebuah pengembalian. Mekanisme ini penting
karena memecahkan sebuah masalah komisioning spesifik: pemerintah ingin membayar untuk hasil alih-
alih input, tetapi tidak dapat menyerap risiko finansial dari sebuah intervensi yang mungkin tidak
berhasil, sehingga struktur SIB memindahkan risiko itu kepada investor yang bersedia menanggungnya.
Government Outcomes Lab (GO Lab) di Blavatnik School of Government Oxford kini mengelola basis bukti
publik paling lengkap tentang kinerja PbR dan SIB di seluruh dunia, melacak lebih dari 200 obligasi
dampak secara global dan mempublikasikan riset tentang fitur desain mana yang berkorelasi dengan
keberhasilan atau kegagalan. Pelajaran yang berulang kali kembali diberikan basis bukti tersebut
adalah bahwa *metrik hasil yang dipilih*, dan siapa yang menanggung risiko melewatkannya, menentukan
hampir segala hal lainnya tentang bagaimana sebuah kontrak PbR sebenarnya berperilaku dalam praktik.

## Matematika

```
Pembayaran PbR = pembayaran dasar (jika ada) + Σ (hasil tercapai ×
                  harga satuan per hasil)

Pengembalian investor obligasi dampak sosial:
  Pengeluaran investor = modal di muka yang mendanai penyampaian layanan
  Pembayaran hasil      = komisioner hanya membayar jika hasil ≥
                           ambang batas, diskalakan oleh seberapa jauh
                           kinerja mendarat di atas ambang batas
  Pengembalian investor = pembayaran hasil yang diterima − pengeluaran
                           investor (sebuah tingkat pengembalian,
                           sering dibatasi, mencerminkan risiko yang
                           diambil)

Parameter desain kunci yang menentukan seluruh perilaku kontrak:
  Metrik hasil            — harus sebuah hasil, bukan keluaran
                             (lihat outcomes-vs-outputs)
  Pembanding/kontrafaktual — biasanya sebuah kohort yang dicocokkan
                             (lihat counterfactual-analysis)
  Ambang pembayaran        — perbaikan minimum sebelum pembayaran
                             apa pun terpicu
  Kurva pembayaran         — linear, bertahap, atau dibatasi di atas
                             ambang batas
  Diskon atribusi/bobot mati — lihat additionality-and-deadweight
```

## Contoh Perhitungan

**Peterborough One Service** (angka ilustratif diambil dari evaluasi yang dipublikasikan):

```
Modal investor yang dikumpulkan:  £5.000.000
Kohort:                           ~3.000 narapidana pria masa tahanan
                                   pendek di dua kohort
Ambang batas:                     ≥7,5% penurunan peristiwa keyakinan
                                   ulang vs kelompok pembanding nasional
                                   yang dicocokkan, atau tidak ada
                                   pembayaran
Hasil kohort 1:                   penurunan 8,4% — di bawah ambang
                                   kontraktual untuk kohort itu saja di
                                   bawah aturan asli
Hasil kohort gabungan/akhir:      penurunan 9,7% — di atas ambang batas
Pembayaran hasil:                 pemerintah (Ministry of Justice /
                                   Big Lottery Fund) membayar per poin
                                   persentase di atas ambang batas,
                                   mendanai pembayaran kembali investor
                                   plus sebuah pengembalian
```

**Kontrak PbR pemerintah daerah (ilustratif)**: sebuah layanan intervensi keluarga ditugaskan pada
£4.000 per keluarga yang dirujuk (pembayaran aktivitas) plus £6.000 per keluarga tanpa rujukan
perlindungan anak lebih lanjut 12 bulan setelah ditutup (pembayaran hasil). 200 keluarga dirujuk,
150 kasus ditutup, 96 tetap bebas-rujukan pada 12 bulan:

```
Pembayaran aktivitas  = 200 × £4.000 = £800.000
Pembayaran hasil      = 96 × £6.000  = £576.000
Total biaya kontrak = £1.376.000 untuk 96 hasil berkelanjutan yang
                       terkonfirmasi
Biaya per hasil yang terkonfirmasi ≈ £14.333 (lihat cost-per-outcome)
```

## Kaitan dengan Rekayasa Perangkat Lunak

Pembayaran berdasarkan hasil adalah masalah penyelarasan insentif sebelum menjadi masalah data, dan
sistem data adalah tempat penyelarasan itu bertahan atau pecah. Verifikasi hasil independen dan
tahan-manipulasi adalah keseluruhan permainannya: komisioner dan penyedia memiliki insentif yang
berlawanan tentang bagaimana sebuah kasus yang ambigu dikodekan, sehingga sistem yang mencatat hasil
membutuhkan jejak audit, perjanjian berbagi data dengan verifikator independen (sering sebuah badan
yang berbeda dari penyedia, kadang sebuah badan statistik resmi yang mencocokkan terhadap catatan
polisi atau tunjangan), dan versi definisi hasil yang tidak dapat diubah — padanan PbR dari jebakan
"mendefinisikan ulang metrik" dalam [KPI sektor publik](../public-sector-kpis/). Perhitungan atribusi
bergantung pada metode kohort-yang-dicocokkan
[analisis-kontrafaktual](../counterfactual-analysis/), yang membutuhkan kode yang dapat direproduksi
dan diaudit, bukan sebuah spreadsheet satu kali. Dan metrik itu sendiri harus sebuah hasil genuine,
bukan aktivitas proksi — lihat [luaran vs keluaran](../outcomes-vs-outputs/) — karena sebuah kontrak
PbR yang membayar untuk sebuah keluaran sekadar melabeli ulang pendanaan operasional normal dengan
biaya transaksi tambahan. Di mana laba sosial sebuah SIB sedang dimodelkan secara prospektif,
penilaian tersebut biasanya meminjam langsung dari metodologi
[laba atas investasi sosial](../social-return-on-investment/).

## Jebakan Umum

- **Membayar untuk sebuah hasil proksi yang mudah dimanipulasi**: "kehadiran di sesi" adalah sebuah
  aktivitas yang berdandan sebagai sebuah hasil; bersikeraslah pada ukuran yang mencerminkan
  perubahan nyata yang dicari (residivisme, ketenagakerjaan, stabilitas perumahan).
- **Tidak ada kontrafaktual yang kredibel**: tanpa kelompok pembanding yang dicocokkan, sebuah
  perbaikan bisa jadi regresi ke rata-rata atau tren yang lebih luas, bukan efek program tersebut —
  lihat [analisis-kontrafaktual](../counterfactual-analysis/) dan
  [additionalitas-dan-bobot-mati](../additionality-and-deadweight/).
- **Meremehkan biaya transaksi dan evaluasi**: verifikasi independen, penautan data, dan administrasi
  kontrak untuk skema PbR/SIB secara rutin mencapai puluhan persen dari nilai kontrak — basis bukti
  GO Lab mendokumentasikan ini sebagai pendorong berulang penghentian skema.
- **Cherry-picking atau "parking"**: penyedia yang dibayar per hasil memiliki insentif langsung untuk
  memprioritaskan klien yang paling mungkin berhasil bagaimanapun juga dan mendeprioritaskan
  kasus-kasus tersulit — rancang tingkatan pembayaran atau penyesuaian campuran-kasus untuk
  melawannya.

## Sumber

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
