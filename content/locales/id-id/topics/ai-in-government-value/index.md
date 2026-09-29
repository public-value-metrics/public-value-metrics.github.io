# Nilai AI dalam Pemerintahan

Nilai AI dalam pemerintahan adalah persyaratan bahwa sistem AI yang digunakan dalam layanan publik
harus melewati ambang nilai-untuk-uang dan nilai publik yang sama seperti keputusan belanja lainnya
— bukan ambang yang lebih rendah karena dianggap baru, dan bukan pula ambang yang lebih tinggi
karena ditakuti. Ini adalah pertanyaan yang harus mampu dijawab oleh tim penyampaian sebelum, bukan
sesudah, sebuah fitur AI diluncurkan: apakah ini menghasilkan nilai yang lebih besar daripada
biayanya, setelah asurans, pengawasan, dan risiko dihitung secara jujur?

## Mengapa Ini Penting

Central Digital and Data Office (CDDO) Inggris menerbitkan Generative AI Framework for Government
pada tahun 2024, dibangun di atas panduan sementara sebelumnya dari Juni 2023, dan disusun berdasarkan
sepuluh prinsip yang mencakup apa itu AI generatif, implikasi etisnya, keamanan alat, kontrol jaminan
kualitas, pengelolaan siklus hidup AI generatif secara penuh, identifikasi kasus penggunaan yang
genuine, kolaborasi lintas pemerintahan, transparansi, keterampilan, dan tata kelola. Penekanan
kerangka kerja ini pada "kendali manusia yang bermakna" (meaningful human control) dan pengelolaan
siklus hidup penuh ada karena kasus bisnis proyek AI memiliki mode kegagalan khusus yang tidak
dimiliki belanja TI lainnya: angka produktivitas utama dari sebuah proyek percontohan mudah dihasilkan
dan mudah dilebih-lebihkan, karena diukur sebelum beban verifikasi, koreksi, dan pengawasan yang
diciptakan oleh alat tersebut diperhitungkan. Selain kerangka kerja tersebut, Algorithmic Transparency
Recording Standard (ATRS) mewajibkan badan publik untuk mempublikasikan catatan terstandardisasi —
tujuan, data yang digunakan, kinerja, pengujian keadilan, pengaturan pengawasan manusia — untuk alat
algoritmik yang memiliki pengaruh signifikan terhadap keputusan tentang individu, yang menjadikan
biaya asurans sebuah sistem AI sebagai catatan publik, bukan estimasi internal yang bisa dilewatkan
begitu saja oleh sebuah tim.

## Matematika

Adopsi AI dinilai sebagai tambahan terhadap, bukan pengganti, penilaian
[nilai untuk uang](../value-for-money/) standar, dengan istilah-istilah spesifik AI dijelaskan secara
eksplisit alih-alih dilipat menjadi satu angka "keuntungan produktivitas":

```
Nilai bersih sistem AI =
    keuntungan produktivitas (waktu yang dihemat × biaya staf terbebankan)
  − biaya lisensi/komputasi
  − biaya verifikasi dan pengawasan manusia (memeriksa keluaran AI sebelum
    ditindaklanjuti — ini tidak menyusut menjadi nol bahkan untuk alat yang matang)
  − biaya dokumentasi ATRS dan pemantauan berkelanjutan
  − biaya kerugian yang disesuaikan risiko akibat kesalahan, bias, atau
    halusinasi, dibobot berdasarkan siapa yang menanggung kerugian tersebut
    (distributional-weighting)

Angka produktivitas dari proyek percontohan yang mengabaikan istilah
pengawasan tidak dapat dibandingkan dengan baseline biaya operasional
normal yang sudah mencakup tinjauan manusia yang setara — lihat
ai-productivity-in-the-public-sector untuk pembahasan disiplin
pengukuran produktivitas yang lebih lengkap yang dipinjam oleh topik ini.
```

## Contoh Perhitungan

**Pemerintah daerah yang menggunakan alat AI generatif untuk menyusun draf respons pertama terhadap
pertanyaan rutin pajak dewan kota**: 25.000 pertanyaan/tahun, sebelumnya ditangani sepenuhnya oleh
petugas kasus dengan rata-rata 14 menit/pertanyaan, biaya staf terbebankan £34/jam.

```
Biaya baseline (tanpa AI):
  25.000 × (14/60) × £34 = £198.333/tahun

Klaim utama proyek percontohan: AI menyusun draf respons dalam 90 detik,
petugas kasus "hanya meninjau dan mengirim" — waktu baru yang diklaim
adalah 3 menit
  25.000 × (3/60) × £34 = £42.500/tahun
  → klaim penghematan £155.833/tahun (terlihat transformasional)

Angka yang sepenuhnya terbebankan, diukur setelah 3 bulan beroperasi
alih-alih dalam kasus uji pilihan proyek percontohan:
  Waktu tinjauan + koreksi aktual per respons: 6 menit (draf memerlukan
  penyuntingan nyata untuk pertanyaan yang kompleks atau sensitif
  secara emosional)
  25.000 × (6/60) × £34 = £85.000/tahun
  Biaya lisensi/komputasi: £38.000/tahun
  Dokumentasi ATRS dan pemantauan kualitas/bias triwulanan: £14.000/tahun
  Total biaya = 85.000 + 38.000 + 14.000 = £137.000/tahun

Penghematan nyata = 198.333 − 137.000 = £61.333/tahun — genuine dan
layak dipertahankan, tetapi jauh di bawah setengah dari klaim utama
proyek percontohan, dan untuk menemukannya diperlukan pengukuran
waktu pengawasan yang jujur, bukan skenario terbaik proyek percontohan.
```

## Kaitan dengan Rekayasa Perangkat Lunak

Di sinilah [produktivitas AI di sektor publik](../ai-productivity-in-the-public-sector/) dan topik
ini bertemu: tim rekayasa yang membangun fitur AI ke dalam layanan publik memiliki instrumentasi
yang memungkinkan angka "nyata" dalam contoh perhitungan di atas — mencatat waktu tinjauan aktual,
jarak edit antara draf dan respons yang dikirim, serta tingkat eskalasi, alih-alih mempercayai
kondisi demo proyek percontohan. Fitur AI sebaiknya dinilai berdasarkan
[standar layanan digital](../digital-service-standard/) poin 9 (layanan yang aman, privasi pengguna)
dan dirujuk silang dengan [nilai keamanan siber sektor publik](../public-sector-cybersecurity-value/)
di mana alat tersebut menyentuh data warga, dan sistem AI mana pun yang memiliki pengaruh signifikan
terhadap keputusan tentang individu memerlukan catatan ATRS sebelum dapat dianggap siap dinilai,
dengan cara yang sama seperti sebuah layanan memerlukan penilaian
[standar layanan digital](../digital-service-standard/) yang lolos sebelum diluncurkan.

## Jebakan Umum

- **AI-washing**: melabeli ulang otomasi berbasis aturan yang sudah ada sebagai "AI" untuk mengakses
  pendanaan atau perhatian yang dialokasikan untuk adopsi AI, tanpa risiko akurasi atau bias yang
  sebenarnya membenarkan pengawasan ekstra dari kerangka kerja tersebut.
- **Mengukur produktivitas proyek percontohan, bukan produktivitas produksi**: proyek percontohan
  dijalankan pada kasus uji yang telah dikurasi dengan peninjau yang terlibat dan penuh perhatian;
  operasi produksi berjalan pada campuran kasus yang penuh kerumitan dengan peninjau yang, seiring
  waktu, mengembangkan bias otomasi dan kurang memeriksa keluaran — keduanya mendistorsi angka biaya
  pengawasan yang jujur.
- **Melewatkan pendaftaran ATRS karena alat tersebut "sebenarnya bukan pengambilan keputusan
  otomatis"**: ambang batas standar tersebut adalah pengaruh signifikan terhadap keputusan tentang
  seorang individu, yang dipenuhi oleh sebagian besar alat penyusunan draf atau triase AI yang
  menghadapi warga bahkan ketika seorang manusia secara teknis menandatangani persetujuan.
- **Mengabaikan dampak distribusional dari kesalahan**: tingkat kesalahan sistem AI yang dirata-rata
  di seluruh pengguna dapat menyembunyikan tingkat kesalahan atau bias yang jauh lebih tinggi untuk
  kelompok tertentu; [pembobotan distribusional](../distributional-weighting/) sebaiknya diterapkan
  pada istilah kerugian yang disesuaikan risiko, bukan hanya pada angka akurasi agregat.

## Sumber

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
