# Realisasi Manfaat

Manajemen realisasi manfaat (benefits realization management) adalah disiplin untuk mengidentifikasi,
menetapkan baseline, melacak, dan *membuktikan* bahwa manfaat yang dijanjikan dalam sebuah kasus
bisnis benar-benar terwujud setelah go-live. Dalam investasi publik Inggris, disiplin ini berada di
dalam Five Case Model Green Book HM Treasury dan panduan manajemen manfaat khusus dari Infrastructure
and Projects Authority; tanpanya, klaim "sistem ini menghemat tiga puluh menit per klaim bagi petugas
kasus" akan tetap menjadi pernyataan yang tidak pernah diaudit selamanya.

## Mengapa Ini Penting

Kasus bisnis adalah janji; realisasi manfaat adalah auditnya. Green Book mensyaratkan setiap kasus
belanja untuk lolos lima uji — strategis, ekonomi, komersial, finansial, dan manajemen — dan kasus
manajemen harus menjelaskan bagaimana manfaat akan direalisasikan *sebelum persetujuan*: pemilik
yang disebutkan namanya, baseline yang tercatat, dan tanggal pengukuran yang ditetapkan. Panduan
Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for
Government Major Projects*
(<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>),
ada karena pelaporan portofolio IPA sendiri pada Government Major Projects Portfolio berulang kali
menemukan keyakinan penyampaian dan realisasi manfaat disebut sebagai kelemahan berulang di seluruh
program besar. Sebuah proyek dapat ditutup "tepat waktu dan sesuai anggaran" terhadap tonggak
penyampaiannya sambil tetap gagal merealisasikan manfaat yang menjadi dasar dibelanjakannya uang
tersebut sejak awal — perbedaan yang diperlakukan oleh panduan IPA sebagai inti dari seluruh disiplin
ini.

## Matematika

```
Tingkat realisasi = manfaat yang terealisasi / manfaat yang diramalkan  (per manfaat, per periode)

Mekanisme yang membuatnya dapat dihitung:
  baseline tercatat SEBELUM go-live (jika tidak, delta tidak dapat diukur)
  setiap manfaat: pemilik bernama, metrik, sumber data, jadwal pengukuran
  ramalan disesuaikan untuk bias optimisme saat penilaian (mandat Green Book)
  manfaat digolongkan cash-releasing / capacity-freed / kualitatif,
  dilacak dan dilaporkan secara terpisah
```

## Contoh Perhitungan

**Pemerintah daerah**: kasus bisnis portal aplikasi perencanaan digital menjanjikan, per tahun:
£300.000 pengurangan biaya overhead pencetakan dan pos (tunai), 4.500 jam petugas yang terbebaskan
(kapasitas), dan peningkatan kepuasan pemohon (kualitatif). Dua belas bulan pasca go-live:

```
Manfaat            Ramalan    Terealisasi  Tingkat  Bukti
Penghematan tunai  £300.000   £210.000     70%      buku besar keuangan vs tahun baseline
Jam petugas        4.500      3.200        71%      sampel time-motion
Kepuasan           +8pp       +11pp        138%     data survei pemohon

Tindakan dari tinjauan ini (inilah inti dari realisasi manfaat):
kekurangan tunai ditelusuri ke dua bidang layanan yang masih memproses
aplikasi kertas sebagai pengecualian → tutup jalur pengecualian tersebut;
koreksi bias optimisme kasus bisnis berikutnya dinaikkan dari 10% menjadi
25% berdasarkan kesalahan peramalan kasus ini.
```

Tingkat realisasi 70% bukanlah sebuah kegagalan — itu adalah pengetahuan yang memungkinkan ramalan
berikutnya dikalibrasi dengan lebih baik. Sebuah kasus yang tidak diukur akan mengklaim 100%
selamanya, dan tim keuangan tidak akan memiliki dasar untuk mempertanyakannya.

## Kaitan dengan Rekayasa Perangkat Lunak

Organisasi rekayasa secara rutin menyetujui investasi platform dan perkakas berdasarkan manfaat yang
diramalkan dan hampir tidak pernah mengauditnya setelahnya — persis patologi yang ingin diperbaiki
oleh manajemen realisasi manfaat. Versi ringannya: setiap proposal di atas ambang materialitas
menyebutkan nama pemilik manfaat, metrik baseline, dan tanggal tinjauan tetap (biasanya enam bulan
pasca go-live), dan tingkat realisasi dari proposal-proposal sebelumnya sebaiknya mendiskon seberapa
besar organisasi mempercayai ramalan berikutnya dari sebuah tim atau vendor. Ini menutup lingkaran
kembali ke [penilaian Green Book](../green-book-appraisal/), yang menetapkan ramalan yang diaudit
oleh disiplin ini, dan ini adalah logika yang sama di balik temuan yang banyak dilaporkan bahwa
sebagian besar proyek percontohan AI generatif tidak menunjukkan pengembalian yang terukur — lihat
[produktivitas AI di sektor publik](../ai-productivity-in-the-public-sector/) — karena proyek
percontohan yang *memang* menghasilkan nilai, hampir tanpa kecuali, adalah yang memiliki lini manfaat
bernama dan dapat dilacak sejak awal. Ini juga bergantung pada membedakan apa yang benar-benar
disampaikan dari apa yang benar-benar direalisasikan — lihat [luaran vs keluaran](../outcomes-vs-outputs/).

## Jebakan Umum

- **Tidak ada baseline pra-go-live**: kelalaian fatal yang tidak dapat diperbaiki — tanpanya, tidak
  ada tingkat realisasi yang bisa pernah dihitung, hanya diklaim.
- **Manfaat yatim**: sebuah manfaat tanpa pemilik bernama tidak memiliki siapa pun yang mengumpulkan
  datanya, dan setiap tinjauan portofolio melaporkannya sebagai "secara umum sesuai rencana" secara
  default.
- **Manfaat yang dihitung ganda di seluruh portofolio program**: dua proyek yang sama-sama mengklaim
  kapasitas petugas kasus yang sama sebagai manfaat mereka — pertahankan satu register manfaat
  tunggal di seluruh portofolio untuk menangkap hal ini.
- **Teater realisasi**: mengukur dan melaporkan kemenangan kualitatif yang mudah secara menonjol
  sementara lini tunai dan kapasitas diam-diam tidak diperiksa.
- **Mencampuradukkan penyampaian dengan realisasi**: sebuah proyek yang menutup tonggaknya "tepat
  waktu dan sesuai anggaran" tidak mengatakan apa-apa tentang apakah manfaat yang diramalkan pernah
  benar-benar terjadi — panduan IPA memperlakukan keduanya sebagai dua pertanyaan terpisah dengan
  dua jejak bukti terpisah.

## Sumber

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
