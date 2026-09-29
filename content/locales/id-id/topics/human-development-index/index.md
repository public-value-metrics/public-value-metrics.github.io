# Indeks Pembangunan Manusia (HDI)

HDI adalah alternatif utama PBB untuk memeringkat negara hanya berdasarkan pendapatan: ia
menggabungkan harapan hidup, pendidikan, dan pendapatan menjadi satu angka tunggal antara 0 dan 1,
dengan premis — yang diargumentasikan oleh ekonom Amartya Sen dan dikembangkan untuk PBB oleh Mahbub
ul Haq — bahwa pembangunan adalah tentang memperluas apa yang dapat dilakukan dan menjadi seseorang,
bukan sekadar apa yang mereka hasilkan. Ia telah dipublikasikan setiap tahun dalam Human Development
Report UN Development Programme sejak 1990.

## Mengapa Ini Penting

Sebelum HDI, "pembangunan" diukur hampir sepenuhnya oleh GNP per kapita, yang tidak mengatakan
apa-apa tentang apakah pertumbuhan mencapai kesehatan atau pendidikan orang biasa. Pendekatan
kapabilitas Sen membingkai ulang pembangunan sebagai perluasan kebebasan nyata, dan ul Haq mengubah
itu menjadi indeks yang dapat dipublikasikan yang dapat digunakan UNDP untuk memeringkat setiap
negara, memaksa pemerintah yang menjadi kaya hanya dari pendapatan tetapi mengabaikan kesehatan atau
pendidikan untuk menghadapi peringkat yang lebih buruk daripada yang disarankan PDB mereka (negara
minyak Teluk dan beberapa ekonomi ekstraktif adalah contoh standarnya). Struktur tiga arah HDI juga
merupakan leluhur metodologis langsung dari [Indeks Kemiskinan Multidimensi](../multidimensional-poverty-index/):
keduanya menolak membiarkan satu dimensi menebus kekurangan pada dimensi lain, menggunakan rata-rata
geometris alih-alih aritmetika. UNDP mempublikasikan catatan teknis lengkap dan data yang mendasari
untuk setiap edisi (<https://hdr.undp.org/data-center/human-development-index>), yang merupakan
sumber kanonis bagi siapa pun yang membangun di atas indeks tersebut alih-alih menurunkannya ulang.

## Matematika

```
Indeks Harapan Hidup (LEI)      = (LE − 20) / (85 − 20)

Indeks Rata-rata Tahun Sekolah  = rata-rata tahun sekolah / 15
Indeks Tahun Sekolah Diharapkan = tahun sekolah diharapkan / 18
Indeks Pendidikan (EI)          = (Indeks Rata-rata Tahun + Indeks
                                    Tahun Diharapkan) / 2

Indeks Pendapatan (II)          = (ln(GNI per kapita) − ln(100)) /
                                    (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [rata-rata geometris dari tiga
                                    sub-indeks]
```

Rata-rata geometris ini disengaja: karena ia mengalikan alih-alih merata-ratakan, skor yang sangat
tinggi pada satu dimensi tidak dapat sepenuhnya mengimbangi skor yang sangat rendah pada dimensi
lain — sebuah desain yang diadopsi UNDP pada 2010 secara khusus untuk menghukum ketidakseimbangan,
menggantikan rumus rata-rata aritmetika sebelumnya.

## Contoh Perhitungan

**Negara berpenghasilan menengah**: harapan hidup 72 tahun, rata-rata tahun sekolah 8, tahun sekolah
diharapkan 13, GNI per kapita $12.000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI sebesar 0,713 jatuh dalam pita "pembangunan manusia tinggi" UNDP (0,700–0,799); "sangat tinggi"
dimulai pada 0,800. Perhatikan betapa sensitifnya hasil ini terhadap sub-indeks terlemah: jika
rata-rata tahun sekolah adalah 4 alih-alih 8 (MYSI = 0,267, EI = 0,494), HDI turun menjadi
(0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — turun satu pita penuh — meskipun tidak ada yang lain
berubah.

## Kaitan dengan Rekayasa Perangkat Lunak

- Pola rata-rata geometris dapat digunakan kembali secara langsung untuk skor produk atau layanan
  komposit apa pun yang tidak ingin Anda biarkan satu dimensi kuat menutupi satu dimensi lemah yang
  kritis — misalnya menggabungkan skor aksesibilitas, kinerja, dan keandalan untuk sebuah layanan
  digital publik secara multiplikatif alih-alih rata-rata terbobot, sehingga sebuah layanan yang
  cepat tetapi tidak dapat diakses tidak dapat mencetak skor "baik".
- Transformasi log HDI dari pendapatan (nilai marjinal yang menurun dari satu poundsterling
  tambahan) adalah logika yang sama di balik [pembobotan distribusional](../distributional-weighting/)
  dalam penilaian: $1.000 tambahan berarti jauh lebih banyak bagi rumah tangga miskin daripada rumah
  tangga kaya, dan memperlakukan keduanya secara linear salah menghargai dampak.
- Dasbor mana pun yang melaporkan satu skor tunggal terpadu "inklusi digital" atau "hasil warga"
  seharusnya mendokumentasikan rumus agregasinya se-eksplisit catatan teknis UNDP — lihat
  [KPI sektor publik](../public-sector-kpis/) dan [kartu skor nilai publik](../public-value-scorecard/).

## Jebakan Umum

- **Merata-ratakan alih-alih menggunakan rata-rata geometris** — sebuah rata-rata aritmetika
  membiarkan pendapatan tinggi menutupi kesehatan atau pendidikan yang buruk sepenuhnya; inti dari
  perubahan metodologi 2010 adalah menghentikan substitusi tersebut.
- **Membandingkan HDI dari tahun ke tahun seolah-olah itu PDB yang disesuaikan inflasi** — UNDP
  secara berkala mengubah dasar indeks tersebut (batas minimum/maksimum baru, batas sekolah yang
  direvisi), sehingga perubahan peringkat dapat mencerminkan pembaruan metodologi, bukan pergeseran
  nyata; selalu periksa edisi HDR mana yang menjadi sumber sebuah angka.
- **Memperlakukan HDI sebagai ukuran kemiskinan** — ia adalah rata-rata nasional dan tidak mengatakan
  apa-apa tentang distribusi dalam sebuah negara; untuk itu, gunakan
  [Indeks Kemiskinan Multidimensi](../multidimensional-poverty-index/) atau HDI yang Disesuaikan
  Ketimpangan terpisah milik UNDP.

## Sumber

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
