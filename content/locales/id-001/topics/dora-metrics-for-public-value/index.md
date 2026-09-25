# Metrik DORA untuk Nilai Publik

Metrik DORA (DevOps Research and Assessment) — frekuensi deployment, waktu tunggu perubahan, tingkat
kegagalan perubahan, dan waktu pemulihan layanan, ditambah keandalan sebagai yang kelima — adalah
tolok ukur kinerja penyampaian yang paling tervalidasi di industri perangkat lunak. Diterjemahkan ke
dalam istilah akuntabilitas sektor publik, masing-masing merupakan proksi langsung untuk seberapa
cepat, dan seberapa aman, nilai publik mencapai seorang warga.

## Mengapa Ini Penting

Riset DORA selama satu dekade, dipublikasikan setiap tahun sebagai *Accelerate State of DevOps
Report* (metodologi Forsgren, Humble, dan Kim, kini dijalankan oleh Google Cloud), mengelompokkan
tim ke dalam performa elite, tinggi, menengah, dan rendah. Tim elite melakukan deployment sesuai
permintaan, membutuhkan kurang dari sehari dari commit hingga produksi, gagal pada sekitar 5%
perubahan, dan pulih dalam kurang dari satu jam; performa rendah melakukan deployment bulanan atau
lebih jarang, membutuhkan berbulan-bulan, gagal pada sekitar 40% perubahan, dan pulih dalam hitungan
minggu. Di pemerintahan, ini bukan metrik kesombongan rekayasa: Service Standard milik Government
Digital Service mewajibkan tim untuk "beriterasi dan meningkatkan secara sering" dan mampu merespons
kebutuhan pengguna dengan cepat, dan departemen yang tidak dapat melakukan deployment secara aman
dan sering secara struktural tidak mampu memenuhi standar tersebut, apa pun kata riset penggunanya.
Pekerjaan efisiensi digital Cabinet Office sendiri menemukan bahwa mendorong seorang warga dari
transaksi digital yang gagal atau lambat ke kanal telepon atau kertas itu mahal — Digital Efficiency
Report GDS tahun 2012 mengestimasi beberapa transaksi digital berbiaya serendah 20p dibandingkan
kontak telepon atau tatap muka yang berbiaya hingga £8,62 — sehingga sebuah kegagalan perubahan
dalam layanan yang menghadapi publik tidak hanya menelan biaya waktu rekayasa, tetapi mendorong
poundsterling nyata ke anggaran pusat kontak (lihat
[penghematan pergeseran kanal](../channel-shift-savings/)).

## Matematika

```
Frekuensi deployment   = deployment produksi / waktu
Waktu tunggu perubahan = t(deploy) − t(commit), median
Tingkat kegagalan perubahan = perubahan gagal / total perubahan × 100
Waktu pemulihan (MTTR) = t(dipulihkan) − t(kegagalan), median
Keandalan               = pencapaian SLO (ketersediaan, latensi, ketepatan)
```

Terjemahan nilai publik:

```
Waktu tunggu    → minggu dalam pipeline × CoD, lihat
                   cost-of-delay-in-public-programmes
Tingkat kegagalan → tingkat insiden yang menghadapi warga: CFR × biaya
                   per panggilan pusat kontak yang dialihkan (atau per
                   transaksi statutori yang gagal)
Waktu pemulihan  → kerugian gangguan layanan: MTTR × (klaim/aplikasi
                   yang terblokir per jam) × biaya hilir atau kerugian
                   kesejahteraan per unit
Keandalan        → diskon manfaat: sebuah layanan pada ketersediaan 99%
                   menyampaikan ≈ 0,99 dari manfaat yang dimodelkan —
                   analog penyampaian dari kekurangan penggunaan atau
                   kepatuhan
```

## Contoh Perhitungan

Tim portal klaim tunjangan sebuah pemerintah daerah, sebelum dan sesudah investasi rekayasa
penyampaian:

```
                    Sebelum     Sesudah
Deploy              bulanan     mingguan
Waktu tunggu        8 minggu    5 hari
CFR                 30%         10%
MTTR                3 hari      4 jam
```

Tim tersebut merilis sekitar 25 peningkatan/tahun, nilai rata-rata £8.000/minggu
([biaya keterlambatan](../cost-of-delay-in-public-programmes/)). Memotong waktu tunggu sekitar 7,3
minggu memajukan aliran manfaat setiap peningkatan: 25 × 7,3 × 8.000 ≈ **£1.460.000/tahun** nilai
yang disampaikan lebih awal. Pada tingkat kegagalan: 25 × (0,30 − 0,10) = 5 lebih sedikit perubahan
gagal/tahun; setiap perubahan gagal pada portal publik biasanya mengalihkan estimasi 2.000 warga ke
kanal telepon dengan £8,62 versus 20p, biaya bersih sekitar £8,42 × 2.000 ≈ £16.840 per insiden,
sehingga menghindari 5 insiden menghemat ≈ **£84.200/tahun**. Investasi rekayasa penyampaian dinilai
dalam mata uang yang sama seperti kasus nilai publik lainnya.

## Contoh Perhitungan Lanjutan: Keandalan

Jika portal tersebut berjalan pada ketersediaan 97% alih-alih target 99,5%, dan setiap poin
persentase downtime dimodelkan sebagai 2% klaim hilang akibat peninggalan, layanan tersebut
menyampaikan sekitar 0,975 dari manfaat yang dimodelkan £2 juta/tahun — sebuah diskon manfaat
£50.000/tahun yang tidak pernah terungkap oleh dasbor uptime murni.

## Kaitan dengan Rekayasa Perangkat Lunak

Metrik DORA adalah metrik operasional sebuah layanan publik yang mengenakan pakaian berbeda: waktu
tunggu memetakan ke [standar layanan dan metrik transaksi](../service-standards-and-transaction-metrics/);
tingkat kegagalan perubahan memetakan ke tingkat pengerjaan ulang dan keluhan; MTTR memetakan ke
berapa lama sebuah layanan statutori tidak tersedia bagi pemohon. Teknik peningkatan berpindah ke
kedua arah karena keduanya adalah sistem antrean di bawah batasan akuntabilitas — lihat
[metrik alur dalam penyampaian pemerintahan](../flow-metrics-in-government-delivery/) untuk
matematika antrean yang mendasarinya. Perhatikan juga temuan DORA 2025 bahwa adopsi AI berkorelasi
dengan throughput yang lebih tinggi tetapi stabilitas yang *lebih buruk* — sebuah intervensi dengan
baik efikasi maupun efek samping, yang persis merupakan analisis manfaat bersih yang dijelaskan
topik [produktivitas AI](../ai-productivity-in-the-public-sector/) dalam bab ini.

## Jebakan Umum

- **Manipulasi metrik**: menggelembungkan jumlah deployment dengan rilis no-op, atau mengecualikan
  hotfix dari jumlah kegagalan perubahan. Definisikan peristiwa sepresisi standar layanan statutori
  mendefinisikan sebuah "transaksi berhasil".
- **Tabel liga lintas departemen**: klaster DORA membandingkan praktik penyampaian, bukan layanan
  dengan profil risiko berbeda; sebuah sistem pembayaran pajak yang dinilai "tinggi" mungkin
  merupakan sikap yang tepat di mana "elite" akan sembrono mengingat persyaratan asurans.
- **Mengoptimalkan satu metrik saja**: kecepatan tanpa tingkat kegagalan perubahan adalah trade-off
  klasik throughput-instabilitas — laporkan keempatnya bersama, bukan sebagai satu skor tunggal.

## Sumber

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
