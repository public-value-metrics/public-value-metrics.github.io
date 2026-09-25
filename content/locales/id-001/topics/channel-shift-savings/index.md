# Penghematan Pergeseran Kanal

Penghematan pergeseran kanal (channel shift savings) adalah proyeksi pengurangan biaya dari
memindahkan volume transaksi keluar dari kanal-kanal mahal — telepon, loket tatap muka, pos kertas —
ke layanan mandiri digital yang murah. Ini adalah mesin finansial di balik "digital secara default",
dan juga baris dalam kasus bisnis yang paling mungkin keliru, karena asumsi yang mendasarinya —
bahwa kanal luring menyusut seiring meningkatnya penggunaan digital — hanya kadang-kadang benar.

## Mengapa Ini Penting

Aritmetikanya terlihat tak terbantahkan dengan menggunakan angka
[biaya per transaksi](../cost-per-transaction/) dari Digital Efficiency Report: geser satu juta
transaksi dari kunjungan tatap muka seharga £8,62 ke transaksi digital seharga £0,15, maka
penghematannya lebih dari £8 juta. Namun penghematan hanya menjadi uang tunai yang dilepaskan untuk
dialihgunakan apabila *kapasitas tetap* dari kanal yang menyusut itu benar-benar dinonaktifkan —
kursi pusat panggilan, staf loket, menit kontrak telepon — dan program digital pemerintah daerah
berulang kali menemukan bahwa total volume kontak tidak turun sejalan dengan naiknya penggunaan
digital. Riset dari program transformasi digital pemerintah daerah dan badan-badan seperti Socitm
dan Local Government Association telah mendokumentasikan pola yang berulang: kanal digital menarik
kontak yang benar-benar baru (warga yang sebelumnya tidak akan menelepon atau berkunjung kini
melakukannya, karena lebih mudah), dan sebagian berarti dari transaksi "digital" gagal di
tengah-tengah dan tetap menghasilkan panggilan telepon — sehingga volume telepon turun jauh lebih
sedikit daripada yang disarankan oleh persentase penggunaan digital, kadang tidak turun sama sekali
secara absolut meskipun *pangsanya* dari total kontak menurun.

## Matematika

```
Penghematan pergeseran kanal bruto = volume yang bergeser × (biaya_kanal_lama
                                       − biaya_digital)

Penghematan bersih (terealisasi) = penghematan bruto
                       − permintaan baru/bayangan yang tercipta oleh
                         kanal yang lebih mudah
                       − biaya permintaan kegagalan (kegagalan digital
                         yang tetap menghasilkan panggilan telepon
                         atau kunjungan loket)
                       − biaya kapasitas tetap yang belum dinonaktifkan
                         (sebuah pusat panggilan hanya dapat mengurangi
                         staf dalam satuan diskret; penurunan volume
                         15% jarang memungkinkan pemotongan 15% jumlah
                         staf)

Ambang realisasi: penghematan hanya dapat dicairkan setelah volume
turun di bawah tingkat yang dapat diisi staf oleh kanal lama pada
langkah kapasitas diskret terkecil berikutnya (misalnya kehilangan
satu shift penuh, satu meja penuh, satu pita jumlah staf terkontrak)
```

## Contoh Perhitungan

**Layanan pembaruan blue badge dewan county**: 60.000 pembaruan/tahun, sebelumnya 100% telepon/kertas
seharga £6,40 per transaksi. Sebuah layanan digital baru diluncurkan dan mencapai penggunaan digital
65% dalam satu tahun, dengan biaya £0,30 per transaksi digital.

```
Perhitungan penghematan naif (bruto):
  39.000 yang bergeser × (£6,40 − £0,30) = £237.900/tahun

Apa yang sebenarnya terjadi, menurut data pusat kontak dewan:
  Volume telepon turun dari 60.000/tahun menjadi 46.000/tahun (−23%,
  bukan −65%) karena: 9.000 perjalanan digital gagal dan menghasilkan
  panggilan lanjutan (kebocoran permintaan kegagalan), dan 4.000 orang
  yang sebelumnya sama sekali tidak memperbarui kini melakukannya,
  setelah merasakan kemudahannya secara daring (permintaan bayangan —
  sebuah perbaikan akses yang genuine, tetapi bukan penghematan)

  Pusat kontak telepon diisi staf dalam pita 8.000 panggilan/FTE;
  penurunan 14.000 panggilan (60.000 → 46.000) melepaskan 1,75 FTE,
  dalam praktiknya dibulatkan ke bawah menjadi 1 FTE yang benar-benar
  dialihgunakan = £34.000/tahun

Penghematan terealisasi = £34.000/tahun ditambah biaya pembangunan/
  operasi kanal digital yang terhindarkan pada 39.000 transaksi ≈
  £34.000 + (39.000 × £0,30 biaya digital yang sudah terhitung) —
  sebagian kecil dari klaim utama £237.900, meskipun layanan tersebut
  tetap tanpa keraguan lebih baik bagi pengguna.
```

## Kaitan dengan Rekayasa Perangkat Lunak

Pelajaran rekayasanya adalah bahwa penghematan pergeseran kanal direalisasikan oleh keputusan
*operasional* (penjadwalan, penonaktifan, renegosiasi kontrak), bukan oleh peluncuran perangkat
lunak — sebuah tim dapat memenuhi setiap poin [standar layanan digital](../digital-service-standard/)
dan tetap menghasilkan penghematan bersih nol jika tidak ada yang menonaktifkan kapasitas tetap
kanal lama. Menginstrumentasi permintaan kegagalan (di titik mana dalam perjalanan digital pengguna
meninggalkannya dan apa yang mereka lakukan selanjutnya) adalah masalah analitik funnel yang dapat
dipecahkan dan hal bernilai leverage tertinggi tunggal yang dapat dilakukan tim rekayasa untuk
melindungi kasus penghematan; ini juga terkait langsung dengan
[biaya per transaksi](../cost-per-transaction/), yang diam-diam digelembungkan oleh permintaan
kegagalan. Lihat [realisasi manfaat](../benefits-realization/) untuk disiplin yang lebih luas dalam
memeriksa apakah penghematan kasus bisnis benar-benar terwujud, dan
[inklusi digital](../digital-inclusion/) untuk memahami mengapa kanal luring biasanya tidak dapat,
dan tidak seharusnya, sepenuhnya dinonaktifkan.

## Jebakan Umum

- **Mengasumsikan substitusi kanal 1:1**: memodelkan penggunaan digital sebagai pengurangan langsung
  dari volume telepon/loket, mengabaikan permintaan bayangan dan kebocoran permintaan kegagalan yang
  terdokumentasi dalam riset pergeseran kanal pemerintah daerah.
- **Membukukan penghematan bruto sebelum penonaktifan**: menghitung penghematan dalam kasus bisnis
  pada tahun penggunaan naik, bukan tahun (jika pernah) kapasitas kanal lama benar-benar dipotong.
- **Mengabaikan sifat fungsi tangga dari biaya staf**: penurunan volume 20% jarang berubah menjadi
  penurunan biaya 20%, karena pusat kontak dan loket diisi staf dalam pita diskret, bukan secara
  berkelanjutan.
- **Memperlakukan permintaan bayangan sebagai pemborosan**: kontak baru dari pengguna yang
  sebelumnya terkecualikan atau tercegah adalah peningkatan nyata dalam
  [nilai publik](../public-value/), bukan kesalahan pemodelan — ini seharusnya dilaporkan sebagai
  hasil akses, bukan dinetokan sebagai derau.

## Sumber

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
