# Biaya per Penerima Manfaat

Biaya per penerima manfaat adalah total biaya program dibagi dengan jumlah orang unik yang menerima
sebuah layanan — siapa pun yang tersentuh, terlepas dari apakah keadaan mereka benar-benar berubah.
Ini adalah angka efisiensi tercepat yang dapat dihasilkan sebuah organisasi, karena "siapa yang kami
layani" hampir selalu sudah ada dalam sistem manajemen kasus, sementara "siapa yang terbantu"
biasanya tidak.

## Mengapa Ini Penting

Pemberi dana terus-menerus meminta biaya per penerima manfaat, dan dengan alasan yang dapat
dipertahankan: angka ini tersedia segera, dapat dibandingkan di seluruh portofolio program yang
sangat berbeda, dan jujur tentang jangkauan dengan cara yang tidak dimiliki oleh klaim hasil — yang
memerlukan waktu lebih lama untuk diverifikasi dan lebih mudah dilebih-lebihkan. UK Charities SORP
(Statement of Recommended Practice), yang mengatur cara lembaga amal melaporkan di bawah FRS 102,
mewajibkan laporan tahunan wali untuk mendeskripsikan pencapaian terhadap tujuan, tetapi laporan
manajemen sebagian besar lembaga amal yang lebih kecil masih secara default menggunakan biaya per
unit berbasis jangkauan karena murah untuk dihasilkan dan ramah audit.

Bahayanya adalah memperlakukan biaya per penerima manfaat seolah-olah menjawab pertanyaan yang tidak
dapat dijawabnya: apakah uang tersebut berhasil. Lihat [biaya per hasil](../cost-per-outcome/) untuk
metrik yang benar-benar menjawab hal itu, dan [luaran vs keluaran](../outcomes-vs-outputs/) untuk
perbedaan yang mendasarinya. Biaya per penerima manfaat adalah metrik triase dan jangkauan yang sah
— ia memberi tahu pemberi dana seberapa jauh uang dapat dijangkau — tetapi biaya per penerima
manfaat yang rendah dapat berarti baik efisiensi sejati atau layanan yang begitu tipis sehingga
tidak mengubah apa pun.

## Matematika

```
Biaya per penerima manfaat = Total biaya program / Jumlah orang unik yang dilayani

Kontras:
Biaya per hasil = Total biaya program / Jumlah orang yang mencapai hasil
                   yang didefinisikan

Biaya per penerima manfaat selalu ≤ biaya per hasil, karena populasi
hasil adalah subset (sering kali kecil) dari populasi penerima manfaat.
```

## Contoh Perhitungan

**Bank pangan, tahun yang sama dengan contoh biaya per hasil**:

- Total biaya program: £450.000
- Rumah tangga unik yang dilayani (tiga atau lebih paket): 1.800

```
Biaya per penerima manfaat = £450.000 / 1.800 = £250 per rumah tangga yang dilayani
```

Bandingkan kedua metrik berdampingan:

| Metrik | Penyebut | Hasil |
|---|---|---|
| Biaya per penerima manfaat | 1.800 rumah tangga dilayani | £250 |
| Biaya per hasil | 630 rumah tangga mencapai ketahanan pangan | £714 |

Seorang pemberi dana yang hanya melihat £250 mungkin menyimpulkan bahwa ini adalah lembaga amal yang
sangat efisien. Seorang pemberi dana yang melihat kedua angka dapat mengajukan pertanyaan yang lebih
berguna: apakah kesenjangan antara jangkauan (1.800) dan hasil (630) adalah kesenjangan pengumpulan
data, kesenjangan desain, atau cerminan jujur dari betapa sulitnya mencapai ketahanan pangan hanya
dengan bantuan pangan saja?

**Lembaga amal pelatihan kerja, ilustratif**: biaya per penerima manfaat (terdaftar) = £2.000;
biaya per hasil (pekerjaan berkelanjutan pada 6 bulan) = £11.000, karena hanya 18% dari yang
terdaftar menyelesaikan program dan menemukan pekerjaan berkelanjutan. Kedua angka yang berbeda
dengan faktor lima ini umum terjadi di mana pun tingkat penyelesaian atau daya tahan rendah — sebuah
lembaga amal pelatihan dan bank pangan secara struktural identik di sini.

## Kaitan dengan Rekayasa Perangkat Lunak

Biaya per penerima manfaat adalah metrik default dalam perangkat lunak nirlaba karena ini adalah
metrik yang muncul dari catatan penerima manfaat tanpa pekerjaan lebih lanjut: buat sebuah kasus,
catat sebuah layanan, hitung baris. Membangun sistem yang juga mendukung biaya per hasil berarti
secara sengaja menambahkan entitas kelas satu kedua — sebuah peristiwa hasil, bertanggal dan
didefinisikan secara independen dari penyampaian layanan — dan menahan godaan untuk membiarkan
"kasus ditutup" menggantikan "hasil tercapai." Saat menentukan cakupan platform manajemen hibah atau
CRM, tanyakan metrik mana dari keduanya yang sebenarnya ditampilkan oleh setiap dasbor, dan beri
label sesuai — mencampuradukkan keduanya dalam satu ubin "dampak" tunggal adalah salah satu penyebab
tingkat perangkat lunak paling umum dari jebakan-jebakan di bawah. Lihat
[basis data biaya satuan](../unit-cost-databases/) untuk membandingkan salah satu metrik setelah
diberi label dengan benar.

## Jebakan Umum

- **Menyajikan biaya per penerima manfaat sebagai dampak.** Ia mengukur jangkauan, bukan perubahan.
  Beri label dasbor dan laporan "biaya per orang yang dilayani," bukan "biaya per orang yang
  terbantu."
- **Penghitungan ganda di seluruh program.** Seseorang yang menerima baik paket pangan maupun
  nasihat utang dari lembaga amal yang sama adalah satu penerima manfaat, bukan dua, jika penyebut
  dimaksudkan untuk mendeskripsikan jangkauan unik; putuskan dan dokumentasikan konvensi mana yang
  digunakan.
- **Memperlakukan angka yang lebih rendah sebagai selalu lebih baik.** Sebuah klub makan siang
  drop-in akan selalu mengungguli layanan manajemen kasus yang intensif pada biaya per penerima
  manfaat, karena lebih murah untuk menyentuh seseorang secara ringan. Itu tidak mengatakan apa-apa
  tentang mana yang menghasilkan perubahan yang lebih tahan lama per poundsterling.
- **Diam-diam menukar penyebut antar laporan.** Angka biaya per penerima manfaat yang dikutip dalam
  satu laporan tahunan terhadap "terdaftar" dan pada laporan berikutnya terhadap "selesai" tidak
  dapat dibandingkan dari tahun ke tahun; nyatakan penyebutnya setiap kali.

## Sumber

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
