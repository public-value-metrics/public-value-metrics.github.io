# Hibe Sonuç Raporlaması (IRIS+)

Hibe sonuç raporlaması, hibe alanların fon sağlayıcılara standartlaştırılmış, karşılaştırılabilir sonuç metrikleri raporlama uygulamasıdır — her fon sağlayıcının kendi özel raporlama şablonunu icat etmesinin aksine. Global Impact Investing Network (GIIN) tarafından sürdürülen IRIS+, bu tür standartlar arasında en yaygın benimsenenidir: etki yatırımcılarının ve giderek hibe veren vakıfların, hibe alanların kullanmasını şart koştuğu veya önerdiği, önceden tanımlanmış sosyal, çevresel ve finansal performans metriklerinden oluşan bir katalog.

## Neden önemli

Standartlaştırılmış raporlamadan önce, her vakıf hibe alanlardan farklı bir biçimde farklı bir gösterge kümesi isterdi ve on fon sağlayıcısı olan orta ölçekli bir hayır kuruluşu, örtüşen iş için on paralel raporlama süreci yürütüyor olabilirdi — hibe sonuçlarının standartlaştırılmasının azaltmak için var olduğu raporlama yükünün iyi belgelenmiş bir itici gücü. IRIS+ bunu fon sağlayıcılara ve hibe alanlara ortak bir sözlük vererek ele alır: temaya göre gruplanmış Temel Metrik Kümeleri (örn. uygun fiyatlı konut, temiz enerjiye erişim, finansal kapsayıcılık), her metrik "yaratılan işler" veya "hizmet verilen hanehalkı"nın kimin raporladığından bağımsız olarak aynı şeyi ifade edeceği kadar kesin tanımlanmıştır ve BM Sürdürülebilir Kalkınma Hedefleri ile hizalanmıştır, böylece bir fon sağlayıcı hibe alan düzeyindeki verileri portföy düzeyinde bir SKH anlatısına toplayabilir. GIIN, IRIS metriklerinin etki yatırımcılarının kabaca yarısı ve alanda aktif fon yöneticilerinin, bankaların ve kalkınma finans kurumlarının büyük çoğunluğu tarafından kullanıldığını bildirir.

Standartlaştırma, en çok [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/) ile etkileşime girdiği yerde önemlidir: IRIS+, raporlamayı bir hibe alanın mevcut vaka yönetim sisteminin günlüğe kaydettiği her neyse ona değil, tanımlanmış sonuç ve etki metriklerine doğru iter; bu, tam olarak [sonuç başına maliyet](../sonuç-başına-maliyet/) ile [yararlanıcı başına maliyet](../yararlanıcı-başına-maliyet/)in tarif ettiği boşluktur.

## Matematik

Hibe sonuç raporlaması bir formül değil, bir çerçeve ve süreçtir:

```
1. Fon sağlayıcı, hibenin temasıyla ilgili bir Temel Metrik Kümesi seçer
   (örn. IRIS+ "Finansal Kapsayıcılık" veya "Sürdürülebilir Tarım")
2. Her metriğin, GIIN tarafından yayımlanan — fon sağlayıcı başına icat
   edilmeyen — sabit bir tanımı, birimi ve hesaplama yöntemi vardır
3. Hibe alan, bu standardı kullanan tüm fon sağlayıcılarına karşı aynı metrik
   tanımlarına göre raporlar ve tekrarlanan raporlama çabasını azaltır
4. Fon sağlayıcı, hibe alan düzeyindeki metrikleri, aynı metriği kullanan
   hibe alanlar arasında yıldan yıla karşılaştırılabilir portföy düzeyinde
   raporlamaya toplar
```

Verimlilik kazancı kombinatoriktir: N fon sağlayıcı × M hibe alanı tek bir ortak sözlüğe standartlaştırmak, N×M özel raporlama ilişkisini tek bir standarda karşı kabaca N+M eşlemeye dönüştürür.

## Çalışılmış örnek

**Standartlaştırma öncesi üç fon sağlayıcısı olan bir hibe alan**: Fon Sağlayıcı 1'e bir kişi sayısı tanımıyla "hizmet verilen kişiler", Fon Sağlayıcı 2'ye bir hanehalkı tanımıyla "ulaşılan yararlanıcılar" ve Fon Sağlayıcı 3'e bir hizmet dönemi tanımıyla "etkilenen bireyler" raporlar (dolayısıyla iki kez ziyaret eden bir kişi iki kez sayılır). Üç rapor, üç sayı, hiçbiri karşılaştırılabilir değil ve hiçbiri aynı fon sağlayıcının portföyü içinde bile başka bir hibe alanın sayılarıyla karşılaştırılabilir değil.

**IRIS+ altında aynı hibe alan**: her ikisi için de GIIN'in yayımlanmış hesaplama metodolojisini kullanarak, ilgili Temel Metrik Kümesinden tanımlanmış bir sonuç metriğiyle birlikte tanımlanmış bir IRIS+ ulaşılan bireyler metriğine karşı raporlar. Üç fon sağlayıcı da artık aynı şekilde hesaplanmış aynı sayıyı alır ve bu hibe alanın IRIS+ tanımlı birim başına maliyetini, aynı metriği kullanarak portföylerindeki diğer hibe alanlarla karşılaştırabilir — raporlama altyapısı ölçeğinde, paylaşılan bir [birim maliyet veri tabanı](../birim-maliyet-veri-tabanları/)na sahip olmanın eşdeğeri.

## Yazılım mühendisliği bağlantısı

Hibe yönetim platformları IRIS+ metrik tanımlayıcılarını serbest metin değil, bir yabancı anahtar olarak ele almalıdır: yayımlanmış metrik kodunu, hibe alanın raporladığı değerin yanında saklamak (yerel olarak icat edilmiş "yararlanıcılar" adlı bir alan yerine), daha sonra bir veri temizleme projesi olmadan fon sağlayıcılar arası ve portföyler arası toplamayı mümkün kılan şeydir. Bir platformun IRIS+'ı benimsememiş fon sağlayıcıları desteklemesi gerektiğinde, pragmatik tasarım her fon sağlayıcıyı hemen standarda zorlamak yerine yerel bir metriğin en yakın IRIS+ tanımına eşlenmesine izin vermektir — grafiğin daha fazlası paylaşılan tanımlayıcılara eşlendikçe karşılaştırılabilirlik kademeli olarak iyileşir. Toplandıktan sonra raporlanan sayıların neyi hesaplamak için kullanılması gerektiği için kardeş konu [sonuç başına maliyet](../sonuç-başına-maliyet/)e bakın.

## Tuzaklar

- **IRIS+ benimsemesini otomatik karşılaştırılabilirlik saymak.** İki hibe alan da aynı IRIS+ metriğine karşı raporlayabilir ve altta yatan veri kaliteleri veya karşı olgusal varsayımları farklıysa yine de karşılaştırılabilir olmayabilir; standart tanımları sabitler, ölçüm titizliğini değil.
- **Fon sağlayıcı tarafından icat edilmiş "IRIS ile hizalı" metrikler.** Yalnızca IRIS+ dilinden esinlenmiş ancak gerçek yayımlanmış tanım olmayan bir metrik, standardın çözmek için var olduğu parçalanmayı yeniden getirir.
- **Aşırı seçimden kaynaklanan raporlama yorgunluğu.** Yalnızca iki veya üç metrik karar için ilgiliyken bir hibe alandan bir Temel Metrik Kümesinin tamamına karşı raporlama yapmasını istemek, yük sorununu standartlaştırılmış bir sarmalayıcıda yeniden yaratır.
- **Hiç sonuç metriği olmaması.** IRIS+ birçok saf çıktı metriği içerir (örn. hizmet verilen kişi sayıları); yalnızca bunları ve sonuç düzeyindeki metriklerden hiçbirini seçmek, bir sonuç raporlaması etiketi altında [yararlanıcı başına maliyet](../yararlanıcı-başına-maliyet/) biçiminde bir raporlama üretir.

## Kaynaklar

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
