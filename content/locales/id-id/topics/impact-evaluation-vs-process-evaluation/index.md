# Evaluasi Dampak vs Evaluasi Proses

Evaluasi dampak menanyakan apakah sebuah program menyebabkan hasil yang dimaksudkannya. Evaluasi
proses menanyakan apakah program tersebut benar-benar disampaikan sebagaimana dirancang — kepada
siapa, pada dosis berapa, dan dengan hambatan atau fasilitator apa di sepanjang jalan. Ini adalah
pertanyaan berbeda yang memerlukan metode berbeda, dan Magenta Book milik HM Treasury memperlakukan
penugasan keduanya bersama sebagai praktik standar, karena sebuah hasil dampak yang lemah atau nol
tidak dapat diinterpretasikan dengan sendirinya: ia tidak dapat memberi tahu Anda apakah teori yang
mendasari program tersebut salah, atau apakah teori yang baik sekadar tidak pernah disampaikan
dengan benar.

## Mengapa Ini Penting

Evaluasi pemerintah berulang kali menemukan tidak ada efek terukur dari sebuah program sambil tidak
memiliki evaluasi proses untuk menjelaskan mengapa — meninggalkan komisioner tidak mampu membedakan
"ide ini tidak berhasil" (kegagalan teori) dari "ide ini tidak pernah benar-benar dicoba dengan
benar" (kegagalan implementasi). Panduan Medical Research Council tentang evaluasi proses intervensi
kompleks, dipublikasikan di BMJ pada 2015 dan banyak dikutip berdampingan dengan Magenta Book,
memformalkan fidelitas, dosis, dan jangkauan sebagai hal-hal inti yang harus diukur sebuah evaluasi
proses. Menugaskan evaluasi dampak tanpa evaluasi proses berisiko meninggalkan sebuah desain program
yang sebenarnya baik karena disampaikan kepada setengah populasi yang dimaksudkan pada sebagian
kecil intensitas yang dimaksudkan — sebuah kesalahan yang berada dalam posisi baik untuk dicegah
oleh seorang pembangun sistem, karena fidelitas penyampaian justru adalah apa yang dapat ditangkap
sistem data operasional hampir secara real-time.

## Matematika

```
Evaluasi proses menanyakan:
 - Apakah itu disampaikan kepada populasi sasaran, pada dosis/intensitas
   yang direncanakan?
 - Apakah penyampaian cocok dengan desain model logika / teori perubahan?
 - Hambatan atau fasilitator apa yang memengaruhi penyampaian?
 Metode: pemeriksaan fidelitas terhadap ambang batas yang telah
         ditentukan sebelumnya, studi kasus, wawancara, data
         penyampaian administratif.

Evaluasi dampak menanyakan:
 - Apa yang berubah, dan berapa banyak dari perubahan itu yang dapat
   diatribusikan pada program tersebut?
 Metode: RCT, DiD, PSM, RDD — lihat impact-evaluation-methods —
         terhadap sebuah kontrafaktual.

Diagnosis gabungan:
 Tidak ada efek  + fidelitas tinggi  → kegagalan teori: model itu
   sendiri tidak menghasilkan hasil tersebut
 Tidak ada efek  + fidelitas rendah  → kegagalan implementasi: model
   tersebut tidak pernah diuji dengan benar
 Efek ditemukan + fidelitas tinggi → replikasi dengan keyakinan
 Efek ditemukan + fidelitas rendah  → selidiki lebih lanjut: efek
   tersebut mungkin rapuh atau khusus lokasi
```

## Contoh Perhitungan

**Pemerintah daerah (program pengasuhan anak)**: sebuah evaluasi dampak menggunakan
difference-in-differences menemukan perubahan +2 poin persentase pada sebuah ukuran kesejahteraan
anak — tidak signifikan secara statistik. Evaluasi proses, dijalankan berdampingan dengannya,
menemukan program tersebut hanya menjangkau 210 dari 500 keluarga sasaran (jangkauan 42%), dan dari
mereka, hanya 95 yang menyelesaikan ambang fidelitas yang telah ditentukan sebelumnya sebesar 75%+
sesi yang dihadiri — 19% dari jangkauan yang direncanakan semula. Kesimpulan: hasil dampak yang lemah
konsisten dengan kegagalan implementasi, bukan bukti bahwa model program tersebut tidak berhasil;
respons yang tepat adalah memperbaiki jalur rujukan yang menyebabkan penurunan 58% tersebut, bukan
meninggalkan desain program tersebut.

**Lembaga amal (program literasi digital)**: sebuah evaluasi dampak menemukan efek yang kuat (+18
poin persentase pada skor kepercayaan diri digital), dan evaluasi proses paralel mengonfirmasi
fidelitas 92% terhadap kurikulum yang direncanakan di seluruh 12 lokasi penyampaian. Digabungkan,
pemberi dana dapat menskalakan program tersebut dengan keyakinan, karena efek tersebut ditunjukkan
bertahan secara konsisten alih-alih menjadi produk dari satu lokasi yang secara tidak biasa baik.

## Kaitan dengan Rekayasa Perangkat Lunak

Data evaluasi proses adalah persis apa yang berada dalam posisi baik untuk ditangkap sistem
penyampaian: kehadiran terhadap rencana, dosis sesi, dan penurunan pada setiap tahap sebuah funnel
rujukan atau pendaftaran — analitik funnel yang sama yang sudah dibangun insinyur untuk fitur
produk, diterapkan pada pipeline penyampaian sebuah program sosial sebagai gantinya. Menyediakan
metrik fidelitas dan jangkauan kepada manajer program hampir secara real-time, alih-alih menunggu
evaluasi akhir hibah, memungkinkan sebuah jalur rujukan yang rusak diperbaiki di tengah program
alih-alih ditemukan hanya setelah periode pendanaan berakhir. Lihat
[metode evaluasi dampak](../impact-evaluation-methods/) untuk desain kausal yang dipasangkan dengan
evaluasi proses, [teori perubahan](../theory-of-change/) dan [model logika](../logic-model/) untuk
desain yang menjadi acuan pemeriksaan fidelitas evaluasi proses, dan
[realisasi manfaat](../benefits-realization/) untuk melacak penyampaian hingga ke hasil yang
dijanjikan.

## Jebakan Umum

- **Menugaskan evaluasi dampak saja.** Sebuah hasil nol atau lemah kemudian tidak dapat
  diinterpretasikan sebagai kegagalan teori atau kegagalan implementasi, yang justru merupakan
  perbedaan yang penting untuk memutuskan apa yang dilakukan selanjutnya.
- **Memperlakukan evaluasi proses sebagai tambahan lunak.** Ia membutuhkan ketelitian dan kriteria
  fidelitas yang telah ditentukan sebelumnya yang sama seperti desain dampak, atau ia runtuh menjadi
  anekdot ketika hasilnya masuk.
- **Mencampuradukkan "tepat waktu dan sesuai anggaran" dengan "disampaikan sebagaimana dirancang".**
  Evaluasi proses memeriksa fidelitas terhadap model — dosis, kelompok sasaran, konten — bukan
  status RAG manajemen proyek.
- **Tidak mendaftarkan ambang fidelitas sebelumnya.** Memutuskan setelah fakta apa yang dihitung
  sebagai "dosis yang cukup" membuat penjelasan apa pun tentang hasil dampak yang mengecewakan
  terlihat seperti alasan post-hoc.

## Sumber

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
