# Refah Değerlemesi (WELLBY)

Refah değerlemesi, bir politikanın etkisini doğrudan yaşam memnuniyeti cinsinden fiyatlar ve birim olarak WELLBY'yi (refah ayarlı yaşam yılı) kullanır — bir WELLBY, 0–10 yaşam memnuniyeti ölçeğinde bir yıl boyunca sürdürülen bir puanlık değişime eşittir. Bu, HM Treasury'nin her faydayı ödeme istekliliği yoluyla parasallaştırmaya resmî olarak onaylanmış alternatifidir.

## Neden önemli

HM Treasury'nin "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) belgesi, öznel refah verilerini merkezî hükümet değerlendirmesine resmen dâhil etti; böylece analistlere — toplumsal bağlantı, ruh sağlığı, güvenlik, sivil katılım gibi — [beyan edilen tercih](../beyan-edilen-tercih-değerlemesi/) ve [ortaya çıkan tercih](../ortaya-çıkan-tercih-değerlemesi/) yöntemlerinin inandırıcı biçimde fiyatlamakta zorlandığı sonuçları değerleme yolu sağlandı; çünkü insanlar bir malın yaşamdan duydukları memnuniyeti gerçekte ne kadar etkileyeceğini çoğu zaman kötü tahmin eder. What Works Centre for Wellbeing ile ortaklaşa geliştirilen rehberlik, WELLBY başına önerilen bir parasal değer belirler — 13.000 £ (2021 fiyatlarıyla, periyodik olarak revize edilir); bu değer, büyük refah anketlerinde (başta ONS'in 2011'den beri dört ONS4 refah sorusunu soran Yıllık Nüfus Anketi) gözlenen gelir ile yaşam memnuniyeti arasındaki ilişkiden türetilmiştir ve diğer Green Book değerlendirmelerine karşı parasallaştırılmış bir karşılaştırma gerektiğinde analistlere sterline geri dönüşüm oranı sunar.

Yöntem önemlidir çünkü olağan değerleme mantığını tersine çevirir: insanların bir sonuç için ne ödeyeceğini sormak (beyan edilen tercih) veya ilgili bir piyasa işleminden değer çıkarmak (ortaya çıkan tercih) yerine, sonucun bildirilen yaşam memnuniyeti üzerindeki etkisini doğrudan ölçer; böylece insanların istediklerini söyledikleri şey ile onları gerçekte daha iyi duruma getiren şey arasındaki boşluğu aşar. Bu aynı zamanda temel sınırlamasıdır — öz bildirimli yaşam memnuniyeti, dikkatli bir uygulayıcının kontrol etmesi gereken uyum ve çerçeveleme etkilerinden etkilenir.

## Matematik

```
WELLBY = 1 kişi için 1 yıl boyunca sürdürülen 1 yaşam memnuniyeti puanı (0-10 ölçeği)

Bir politikadan elde edilen toplam WELLBY =
  Σ (yaşam memnuniyeti puanındaki değişim) × (etkilenen kişi sayısı)
    × (yıl cinsinden süre, sosyal iskonto oranıyla iskonto edilmiş)

Parasallaştırılmış değer = Toplam WELLBY × WELLBY başına değer
  (HM Treasury önerilen değer: WELLBY başına 13.000 £, 2021 fiyatlarıyla,
   periyodik revizyona tabidir — kullanmadan önce güncel rehberliği kontrol edin)
```

Bu, genel yaşam memnuniyetinden ziyade sağlıkla ilgili yaşam kalitesi ölçeklerine (EQ-5D ve benzerleri) tipik olarak çapalanmış sağlık ekonomisi [refah ayarlı yaşam yılı](../refah-ayarlı-yaşam-yılları/)ndan farklıdır; ikisi ilişkilidir ancak birbirinin yerine kullanılamaz ve Green Book değerlendirmeleri, bildirilen bir WELLBY rakamının altında yatan ölçeği ve çıkarım yöntemini açık olmalıdır.

## Çalışılmış örnek

**Yerel yönetim**: bir belediye, 400 kişiye hizmet veren, yalnız yaşlı sakinler için bir dostluk programı yürütür. ONS4 yaşam memnuniyeti sorusunu kullanan bir önce/sonra refah anketi, katılımcıların ortalama puanının 5,8'den 6,5'e yükseldiğini gösterir — programın finanse edilen 2 yıllık süresi boyunca sürdürülen 0,7 puanlık bir kazanç.

```
Üretilen WELLBY = 400 kişi × 0,7 puan × 2 yıl = 560 WELLBY
Parasallaştırılmış değer = 560 × 13.000 £ = 7,28 milyon £
Program maliyeti = 2 yıl boyunca 450.000 £

Fayda-maliyet oranı ≈ 7,28 milyon £ / 0,45 milyon £ ≈ 16:1
```

Bu kadar yüksek bir oran kutlamadan çok inceleme gerektirmelidir — Green Book refah rehberliği, küçük örneklemli öz bildirimli kazançların seçim etkileri kontrol edilmeden (programa yalnızca en sosyal, iyileşme olasılığı en yüksek sakinler mi katıldı?) ve karşılaştırma grubu olmadan olduğu gibi kabul edilmesine karşı açıkça uyarır; iyi tasarlanmış bir değerlendirme, katılımcı olmayanlarda gözlenen karşı olgusal değişimi düşerdi, bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/).

**Ulusal hükümet**: iki istihdam programını yalnızca kazançlar yerine WELLBY'lerle karşılaştırmak, işsizliğin kaybedilen gelirin ötesinde bir refah maliyeti taşıdığını yakalar — Birleşik Krallık refah araştırmaları, yapıyı, amacı ve toplumsal teması kaybetmenin parasal olmayan etkileri nedeniyle işsizliğin yaşam memnuniyetini yalnızca gelir kaybının öngördüğünden daha fazla düşürdüğünü tutarlı biçimde bulur. Yalnızca kazanç artışı üzerinden değerlendirilen bir program, ek olarak WELLBY'ler üzerinden de değerlendirilen bir programa göre değerini olduğundan düşük gösterir.

## Yazılım mühendisliği bağlantısı

Refah değerlemesi mühendislik ekiplerine nadiren doğrudan ulaşır, ancak sosyal sektör ve kamu hizmeti ürünleri için "başarının" nasıl tanımlandığını şekillendirir — dijital bir dostluk platformu, bir ruh sağlığı önceliklendirme aracı veya yalnız sakinler için bir topluluk platformu, etkisinin sonunda bu şekilde ölçüleceğini beklemelidir; bu da ürün analitiğinin yalnızca kullanım sayılarını değil, *kime* ve *ne kadar süreyle* ulaşıldığını da yakalaması gerektiği anlamına gelir. Hizmet değerlendirmesine başından itibaren refah anketi araçlarını (ONS4 veya doğrulanmış eşdeğerleri) yerleştirin; hizmet başladıktan sonra bir refah temel çizgisini sonradan eklemek, önce/sonra karşılaştırmasını tamamen kaybettirir. Bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/) ve [etki değerlendirme yöntemleri](../etki-değerlendirme-yöntemleri/).

## Tuzaklar

- **Karşı olgusal veya karşılaştırma grubu olmaması.** Zaten gerçekleşecek olanı kontrol etmeyen bir önce/sonra refah kazancı programın etkisini olduğundan büyük gösterir; bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/) ve [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/).
- **Küçük, kendi kendini seçen örneklemler.** Katılmayı seçen program katılımcılarının refah anketleri seçim yanlılığına yatkındır — katılan ve kalan kişiler muhtemelen zaten yükseliş eğilimindeydi.
- **WELLBY başına £ dönüşümünü kesin saymak.** Parasallaştırılmış değer, gelir-refah regresyonlarından türetilmiş bir politika kuralıdır, bir piyasa fiyatı değil; Green Book değerlendirmeleri arasında karşılaştırılabilirlik için kullanın, refahın "neye değdiğine" dair bir iddia olarak değil.
- **WELLBY'leri sağlıkla ilgili QALY'lerle karıştırmak.** İkisi farklı ölçeklerde farklı yapıları ölçer; sağlık ekonomisi varyantı için bkz. [refah ayarlı yaşam yılları](../refah-ayarlı-yaşam-yılları/) ve ikisinin ortalamasını almayın.

## Kaynaklar

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
