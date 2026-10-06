# Doğal Sermaye Muhasebesi

Doğal sermaye muhasebesi, çevreyi diğer her ulusal veya kurumsal varlıkla aynı zemine yerleştirir: doğal kaynakların stokunu (ormanlar, topraklar, nehirler, sulak alanlar, atmosfer) ve ürettikleri hizmetlerin akışını (karbon tutma, sel koruması, rekreasyon, gıda) hem fiziksel hem de parasal terimlerle ölçer, böylece çevresel tükenme, finansal sermayeyi tüketmenin yapacağı gibi karar vermede görünür olur. Birleşik Krallık bunu sistematik olarak yapmakta en ileri hükümetlerden biridir; 25 Yıllık Çevre Planı (2018) tarafından yönlendirilmiş ve ONS'in UK Natural Capital hesapları ve HM Treasury'nin Green Book tamamlayıcı rehberliği aracılığıyla uygulanmıştır.

## Neden önemli

Geleneksel muhasebe — hem kurumsal hem hükümet — bir ormanı kesilip kereste olarak satılana ve GSYH hâline gelene kadar değersiz sayar. Doğal sermaye muhasebesi bu boşluğu kapatmak için vardır: Birleşik Krallık'ın 25 Yıllık Çevre Planı, hükümeti doğal sermaye düşüncesini politika genelinde yerleştirmeye taahhüt etti ve "çevreyi bulduğumuzdan daha iyi bir durumda bırakan ilk nesil olmak" hedefini açıkça belirtti. ONS o tarihten bu yana yıllık UK Natural Capital hesaplarını (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) yayımlamıştır; bunlar, üretilmiş sermaye için kullanılan aynı Ulusal Hesaplar çerçevesini kullanarak ekosistem hizmetlerinin parasal değerini — ormanlık rekreasyonundan kentsel yeşil alanın sağlık faydalarına ve turbalık karbon depolamasına kadar — tahmin eder, böylece doğal sermaye eninde sonunda yollar, binalar ve ekipmanla aynı bilançoda yer alabilir. HM Treasury'nin Green Book'a tamamlayıcı Enabling a Natural Capital Approach (ENCA) rehberliği (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), değerlendiricilerin iş gerekçelerinde çevresel maliyetleri ve faydaları nasıl değerlemesi gerektiğini ortaya koyar; böylece kadim ormanı yok eden bir yol programı veya sulak alanı restore eden bir sel programı, birinin bir sayısı diğerinin bir paragraf çekincesi olmak yerine tutarlı parasal terimlerle karşılaştırılabilir.

## Matematik

```
Ekosistem hizmeti varlık değeri = varlığın sağladığı hizmet akışının NBD'si

Varlık değeri = Σ (t = 1'den T'ye) [yıllık hizmet akışı değeri_t / (1 + r)^t]

burada:
  hizmet akışı değeri_t = t yılındaki hizmet miktarı × birim değer
                          (örn. rekreasyonel ziyaretler × ziyaret başına değer;
                           tutulan ton karbon × karbon fiyatı)
  r = iskonto oranı (Green Book sosyal iskonto oranı — bkz.
      [sosyal iskonto oranı](../sosyal-iskonto-oranı/))
  T = varlığın hizmeti sağlaması beklenen zaman ufku
```

Bu, üretilmiş sermayeyi değerlemek veya [Green Book değerlendirmesi](../green-book-değerlendirmesi/) altında herhangi bir kamu yatırımını değerlendirmek için kullanılan özdeş net bugünkü değer yapısıdır — doğal sermaye muhasebesinin katkısı, daha önce sıfır fiyatlandırılmış hizmetler için güvenilir fiziksel miktarlar ve birim değerler sağlamaktır.

## Çalışılmış örnek

**Kentsel ormanlık, rekreasyonel değer**: 50 hektarlık bir ormanlık, her biri ziyaret başına 3 £ olarak (seyahat maliyeti veya beyan edilen tercih yöntemiyle değerlenmiş — bkz. [ortaya çıkan tercih değerlemesi](../ortaya-çıkan-tercih-değerlemesi/) ve [beyan edilen tercih değerlemesi](../beyan-edilen-tercih-değerlemesi/)) değerlenen yılda tahmini 80.000 rekreasyonel ziyaret alır. Ormanlığın bu hizmeti 50 yıl boyunca sağlamaya devam etmesi beklenir; %3,5 iskonto oranıyla değerlendirilir.

```
Yıllık rekreasyonel değer = 80.000 × 3 £ = yılda 240.000 £

%3,5'te 50 yıl boyunca NBD ≈ 240.000 £ × anüite faktörü(%3,5, 50 yıl)
anüite faktörü(%3,5, 50) ≈ 21,4

Varlık değeri ≈ 240.000 £ × 21,4 ≈ 5.136.000 £
```

**Karbon depolama eklemek**: aynı ormanlık yılda tahmini 400 ton CO2 tutar ve hükümetin ticareti yapılmayan karbon fiyatı olan kabaca 75 £/ton ile değerlenir (açıklayıcı — canlı bir değerlendirme için güncel BEIS/DESNZ yayımlanmış karbon değerlerini kullanın).

```
Yıllık karbon değeri = 400 × 75 £ = yılda 30.000 £
%3,5'te 50 yıl boyunca NBD ≈ 30.000 £ × 21,4 ≈ 642.000 £

Toplam ormanlık varlık değeri (rekreasyon + karbon) ≈ 5.136.000 £ + 642.000 £
                                                    ≈ 5.778.000 £
```

Bu, ENCA rehberliğinin değerlendiricilerden ayrıca değerlendirmesini istediği sel azaltımı, biyoçeşitlilik veya hava kalitesi hizmetleri eklenmeden öncedir — toplam kasıtlı olarak bir tavan değil, bir tabandır.

## Yazılım mühendisliği bağlantısı

- Yerel yönetimler ve kurumlar için çevre ve varlık yönetim sistemleri (parklar, otoyollar, su kütleleri), kuruluşun sürdürdüğü herhangi bir diğer [birim maliyet veri tabanı](../birim-maliyet-veri-tabanları/) ile aynı hizmet akışı çarpı birim değer örüntüsünü kullanarak, fiziksel varlık sicilinin yanına bir doğal sermaye sicili ekleyebilir.
- Doğal sermaye NBD'si iskonto oranına duyarlı olduğundan (çalışılmış örnekteki anüite faktörüne bakın), onu hesaplayan herhangi bir araç oranı ve ufku gömmek yerine görünür girdiler olarak sunmalıdır — [nesiller arası eşitlik ve sürdürülebilirlik iskontosu](../nesiller-arası-eşitlik-ve-sürdürülebilirlik-iskontosu/) altında ele alınan aynı şeffaflık ilkesi.
- Doğal sermaye hesapları giderek bir [green-book-appraisal](../green-book-değerlendirmesi/) iş gerekçesinin çevresel etki bölümlerine zorunlu bir girdi hâline geliyor; iş gerekçesi araçları geliştiren bir teslimat ekibi, ONS hesaplarını ve ENCA birim değerlerini değerlendiricilerin her seferinde sıfırdan yeniden hesapladığı bir şey değil, entegre edilecek referans veri olarak ele almalıdır.

## Tuzaklar

- **Örtüşen ekosistem hizmetlerini çift saymak** — aynı alan için rekreasyonel değer ve biyoçeşitlilik değeri altta yatan ödeme istekliliği verisini paylaşabilir; ENCA rehberliği, örtüşen anket araçlarından türetilen değerlemeleri toplamaya karşı açıkça uyarır.
- **Bir doğal sermaye varlık değerini statik saymak** — hizmet akışları iklim, yönetim ve arazi kullanım baskısıyla değişir; bir ormanlığın bu on yıldaki karbon ve sel azaltımı değeri alanın kalıcı bir özelliği değildir.
- **Çok yerel bir karar için ulusal ortalama birim değerleri kullanmak** — bir hektar erişilebilir kentsel ormanlık ile bir hektar uzak yayla çok farklı rekreasyonel değere sahiptir; ENCA rehberliği, ulusal ortalamalara varsayılan olarak başvurmak yerine mümkün olduğunda yerel veya alana özgü değerleri önerir.

## Kaynaklar

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
