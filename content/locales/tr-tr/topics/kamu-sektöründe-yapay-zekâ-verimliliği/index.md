# Kamu Sektöründe Yapay Zekâ Verimliliği

Yapay zekâ kodlama yardımının mühendislik çıktısına gerçekte ne yaptığına dair metrikler — öneri kabul oranları, kontrollü çalışma hızlanmaları, PR iş hacmi ve kod tutma — kamu sektörü kısıtları eklenmeden önce bile gerçekten çelişkili bir kanıt tabanı taşır: veri sınıflandırması, eski bir envanterin hangi bölümlerine bir yapay zekâ aracının hiç dokunabileceğini sınırlar, satın alma döngüleri değerlendirilen aracın çoğu zaman güncel yeteneğin bir model nesli gerisinde olduğu anlamına gelir ve güvenlik izni gereksinimleri kimin neyi neyle kullanabileceğini belirler.

## Neden önemli

En çok alıntılanan iki kontrollü çalışma zıt yönleri işaret eder. Peng ve arkadaşlarının 2023 GitHub Copilot RCT'si, geliştiricilerin sıfırdan bir HTTP sunucusu görevini Copilot ile %55,8 daha hızlı tamamladığını buldu (1s11dk'ya karşı 2s41dk, n=95). METR'in 2025 RCT'si, *kendi olgun depoları* üzerinde çalışan deneyimli açık kaynak geliştiricilerin, kendilerini yaklaşık %20 daha hızlı olduğuna inanırken, 2025 başı yapay zekâ araçlarıyla %19 daha yavaş olduğunu buldu. İki çalışma da sağlamdır; çelişki bulgunun kendisidir — sıfırdan görev etkililiği olgun kod tabanı etkinliğine aktarılmaz ve hükümet mühendisliğinin çoğu, ortalama ticari depodan daha eski ve daha kendine özgü envanterler üzerinde olgun kod tabanı işidir. Merkezî Dijital ve Veri Ofisi'nin HMG için Üretken Yapay Zekâ Çerçevesi (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) tam da bu kanıt tabanı satıcı gösterimlerinden basitçe ithal edilemediği için sorumlu benimseme ilkelerini ortaya koyar; bakanlıkların araçları dağıtımdan önce kendi veri işleme ve güvenlik gereksinimlerine karşı değerlendirmesi beklenir.

## Matematik

```
Kabul oranı       = kabul edilen öneriler / gösterilen öneriler
Tutma oranı       = birleştirmeye ulaşan yapay zekâ kodu / kabul edilen yapay zekâ kodu
Hızlanma          = (t_kontrol − t_YZ) / t_kontrol  (YALNIZCA kontrollü karşılaştırmadan)
İş hacmi farkı    = Δ geliştirici başına haftalık birleştirilmiş PR

Kamu sektörü kapsam faktörü:
  uygun kod tabanı payı = sınıflandırmanın (OFFICIAL, OFFICIAL-SENSITIVE, SECRET)
    aracı hiç izin verdiği sistemlerdeki kod satırı

Değer modeli = geliştiriciler × uygun-kapsam × tasarruf edilen zaman × tam yüklü oran × kullanım
              — her terim yerel ölçüm gerektirir ve kapsam faktörünün özel sektörde
              karşılığı yoktur
```

## Çalışılmış örnek

Bir hükümet bakanlığı 300 geliştiricide bir yapay zekâ kodlama yardımcısı pilotu yapar, ancak araç kullanımı için yalnızca OFFICIAL olarak sınıflandırılan sistemler uygundur — kadro tahsisine göre envanterin %70'i, geri kalan %30'u (daha yüksek sınıflandırmalı sistemler) tamamen hariç tutulmuştur.

```
Uygun geliştiriciler = 300 × 0,70 = 210

Pilot sonucu: öz bildirimli tasarruf edilen zaman günde 40 dk;
              ölçülen görev düzeyinde tasarruf günde 12 dk (0,2 sa)
              — METR algı boşluğu, sahada yeniden üretildi

ÖLÇÜLEN sayıyı değerleyin:
  210 × 0,2 sa × 220 gün × saatte 55 £ tam yüklü × 0,6 kullanım
  = 210 × 44 saat × 55 £ × 0,6
  = 9.240 saat × 55 £ × 0,6 ≈ yılda 304.920 £ kapasite

Maliyet: 210 lisanslı koltuk × ayda 22 £ × 12 ≈ yılda 55.440 £

Net kapasite oranı ≈ 304.920 / 55.440 ≈ 5,5:1
```

Öz bildirimli faydanın kabaca üçte birinde finanse edilebilir ve yalnızca sınıflandırma tavanı uygulandıktan sonra — 300 geliştiricinin hepsini öz bildirimli rakamın gücüne dayanarak lisanslamak hem uygun nüfusu hem gerçek tasarrufu olduğundan büyük gösterirdi.

## Yazılım mühendisliği bağlantısı

Doğrudan aktarılan disiplinler: satıcı gösterim görevleri değil, bakanlığın kendi kod tabanında ve gerçek biletlerinde **pragmatik denemeler** yürütün, çünkü METR sonucu özellikle olgun kod tabanı bulgusudur; **kabul oranını bir sonuç değil bir vekil olarak** ele alın — düşük tutmalı yüksek kabul, aşırı teşhisin yazılım eşdeğeridir; her iş hacmi iddiasını bir **kararlılık kontrolüyle** eşleştirin, çünkü DORA'nın 2025 raporu yapay zekâ benimsemesinin iş hacmini yükselttiğini ancak değişiklik kararlılığını bozduğunu buldu; bu, [kamu değeri için DORA metrikleri](../kamu-değeri-için-dora-metrikleri/)nin yürütmek üzere oluşturulduğu tam net fayda analizidir; ve yapay zekâ araçlarının [teknik borç](../kamu-değeri-erozyonu-olarak-teknik-borç/) ağırlıklı eski envanterlerdeki boşluğu daraltmak yerine genişletebileceği konusunda dürüst olun, çünkü eğitim verisi hükümette yaygın COBOL, 4GL ve ısmarlama mainframe kodunu yetersiz temsil eder, dolayısıyla en çok yardıma ihtiyaç duyan sistemlerde öneri kalitesi çoğu zaman en zayıftır. Bu, daha geniş [hükümette yapay zekâ değeri](../hükümette-yapay-zekâ-değeri/) sorusunun yanında yer alır ve herhangi bir üçüncü taraf aracın kodu veya veriyi nerede görebileceğini sınırlayan aynı [kamu sektörü siber güvenlik değeri](../kamu-sektörü-siber-güvenlik-değeri/) kısıtlarıyla yönetilmelidir.

## Tuzaklar

- **Satıcı çalışmasını nakletme**: sıfırdan RCT hızlanmalarını eski entegrasyon işine uygulamak, METR çalışmasının ortaya çıkardığı tam hatadır.
- **Öz bildirimi ölçüm saymak**: 20 yüzde puanlık algı ve ölçülen fark, bu literatürdeki bilinen en büyük yanlılıktır ve yalnızca geliştirici anketlerine dayanan iş gerekçelerini şişirir.
- **Sınıflandırma tavanını göz ardı etmek**: toplam kadro yerine uygun, sınıflandırma onaylı alt kümeye değil toplam kadroya dayanan lisans ve değer modelleri, hem maliyet-etkililiği hem ulaşılabilir kapsamı sistematik olarak abartır.
- **Satın alma döngüsü gecikmesi**: çerçeve tabanlı araç satın alma, bir pilotun tam dağıtım zamanında kamuya açık olandan 12–18 ay geride bir model neslini değerlendirdiği anlamına gelebilir; bu da özgün iş gerekçesinin hızlanma varsayımını yayına geçişten önce eskitir.

## Kaynaklar

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
