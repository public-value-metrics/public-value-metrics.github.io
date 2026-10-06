# Hükümette Yap veya Satın Al

Yap-veya-satın-al, özel geliştirmenin ticari veya emtia edinimine karşı yapılandırılmış, riske göre ayarlanmış bir karşılaştırmasıdır; iskonto edilmiş [toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/), değere ulaşma süresi ve risk üzerinden karşılaştırılır. Hükümet yapısal olarak bir satın alma sektörüdür — Teknoloji Uygulama Kuralları emtia ve bulut çözümlerine doğru bir karine belirler — ancak bakanlıklar içindeki mühendislik ekipleri, her yerdeki inşa edenlerle aynı nedenlerle hâlâ varsayılan olarak inşa etmeye eğilimlidir.

## Neden önemli

Government Digital Service'in Teknoloji Uygulama Kuralları (<https://www.gov.uk/guidance/the-technology-code-of-practice>) ve yap veya satın al kararı vermeye ilişkin eşlik eden Hizmet Kılavuzu rehberliği, bakanlıkları ısmarlama geliştirmeyi, emtia yeteneğinin inşa edilmek değil satın alınması gerektiği ve yalnızca gerçekten yeni, misyonu farklılaştıran yeteneğin özel kodu haklı çıkardığı karinesine karşı gerekçelendirmeye iter. HM Treasury'nin Green Book'a iyimserlik yanlılığı tamamlayıcı rehberliği, büyük kamu satın almalarının 2002 Mott MacDonald incelemesinden alınan, değerlendirilen herhangi bir kategorinin en geniş artış aralığını BT projelerine verir — sermaye maliyeti tahminleri, değerlendirmede kullanılmadan önce alt uçta %10 ve üst uçta %200'e kadar artırılması önerilir; bu, yazılım yapımlarının kamu satın almaları genelinde tarihsel olarak ne kadar kötü olduğundan düşük tahmin edildiğini yansıtır. Yap-veya-satın-al analizi tam olarak bu risk ayarlamasını onaydan önce masaya koymaya zorlamak için vardır; yıl içi bir aşım talebi olarak ortaya çıkmasına izin vermek yerine.

## Matematik

```
Aynı 3–5 yıllık ufukta karşılaştırın, Green Book sosyal iskonto oranıyla
iskonto edilmiş (bkz. social-discount-rate.md):

NBD_seçenek = BD(faydalar, değere ulaşma süresine göre kaydırılmış) − BD(TSM)

Risk ayarlamaları (Green Book iyimserlik yanlılığı örüntüsü):
  inşa maliyeti × 1,1–3,0        (BT proje artış aralığı, Mott MacDonald)
  inşa değere ulaşma süresi + %40–60 (dağıtım gecikmesi önceliği)
  satın alma: bunun yerine entegrasyon gerçeklik kontrolü ve sözleşme çıkış maliyetleri ekleyin

Genellikle karar veren sırasıyla karar sürücüleri:
  1. farklılaşma — bu yetenek misyon mu yoksa tesisat mı?
  2. değere ulaşma süresi × gecikme maliyeti (bkz. cost-of-delay-in-public-programmes.md)
  3. riske göre ayarlanmış toplam sahip olma maliyeti
```

## Çalışılmış örnek

Bir yerel yönetim yetişkin sosyal bakımı için bir vaka yönetim sistemine ihtiyaç duyar. Satın alma: yılda 180.000 £'luk SaaS, 4 ayda canlı. İnşa: tahmini 900.000 £ artı yılda 150.000 £ bakım, 14 ayda canlı.

```
Riske göre ayarlanmış inşa maliyeti = 900.000 × 1,4 = 1.260.000 £
5 yıllık TSM:
  satın alma = 180.000 × 5 = 900.000 £
  inşa       = 1.260.000 + 150.000 × 5 = 2.010.000 £

Gecikme terimi: sistem ayda 40.000 £'luk mükerrer değerlendirmeyi önler;
inşa, satın almadan 10 ay sonra gelir.
CoD = 10 × 40.000 = 400.000 £

Etkin karşılaştırma: 900.000 £ (satın alma) ve 2.010.000 £ + 400.000 £ = 2.410.000 £ (inşa)
```

Satın alma beş yıl boyunca kabaca 1,5 milyon £ kazanır ve inşa tahmininin kendisinden sonraki en büyük tek kalem, saf bir sermaye harcaması karşılaştırmasının asla ortaya çıkarmayacağı gecikme maliyetidir.

## Yazılım mühendisliği bağlantısı

Bu analizden doğrudan teslimat uygulamasına aktarılan disiplinler: **öncüle dayalı risk ayarlaması** — Mott MacDonald artışı, mekanik olarak uygulanan Green Book iyimserlik yanlılığının yazılım eşdeğeridir, dolayısıyla ekipler kendi tahminlerinin istisna olduğunu varsaymak yerine buna istisnalar için tartışmalıdır; **karşılaştırma dürüstlüğü** — inşa etmenin alternatifi "hiçbir şey" değil, mevcut en iyi satın alma seçeneğidir, bu da doğrudan [kamu harcamasında fırsat maliyeti](../kamu-harcamasında-fırsat-maliyeti/) ile bağlanır; ve **dürüst TSM karşılaştırması** — her inşa önerisi, bir satın alma seçeneğinin liste fiyatına değil tam [toplam sahip olma maliyetine](../hükümet-btsinde-toplam-sahip-olma-maliyeti/) karşı karşılaştırılmalıdır. İnşanın gerçekten kazandığı yerde, ek inşa süresinin [gecikme maliyeti](../kamu-programlarında-gecikme-maliyeti/) iş gerekçesinde açıkça fiyatlandırılmalıdır, zamanın önemli olmadığına dair belirtilmemiş bir varsayım olarak bırakılmamalıdır.

## Tuzaklar

- **Satıcı liste fiyatını riske göre ayarlanmamış bir inşa tahminiyle karşılaştırmak**: bu, inşayı iki kez kayırır; bir kez maliyette ve bir kez takvimde.
- **Sıfır fiyatlı dâhili emek**: devlet memuru mühendislik zamanı, zaten bakanlık kadro bütçesinde olduğu için "bedava" sayılır; bu, o ekibin yapabileceği diğer işlere karşı gerçek fırsat maliyetini gizler.
- **Her iki yönde fiyatlandırılmamış kilitlenme**: satıcıdan çıkış ve veri taşınabilirliği maliyetleri gerçektir, ancak ısmarlama bir yapının otobüs faktörü ve ömrü boyunca küçük, yerine konulması zor bir dâhili ekibi elde tutmaya bağımlılığı da öyledir.
- **Tesisat için iddia edilen misyon farklılaşması**: entegrasyon ara yazılımı veya bir belge deposu hakkında öne sürülen "bu bizim için çekirdek" — altında hangisinin çalıştığını bir vatandaşın veya vaka çalışanının fark edip etmeyeceğine karşı test edin.

## Kaynaklar

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
