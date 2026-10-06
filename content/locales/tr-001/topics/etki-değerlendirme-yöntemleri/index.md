# Etki Değerlendirme Yöntemleri

Etki değerlendirme yöntemleri, bir politikanın veya programın gerçekte neye neden olduğunu, zaten gerçekleşecek olandan ayırarak tahmin etmek için kullanılan istatistiksel ve deneysel tasarımlardır — rastgele kontrollü denemeler (RCT'ler), farkların farkı, eğilim puanı eşleştirme ve regresyon süreksizliği tasarımı, Birleşik Krallık kamu politikasında en yaygın kullanılan dört yöntemdir. Var olmalarının nedeni, çoğu hükümet müdahalesinin bir laboratuvarda test edilememesidir: hangi hastanın ilaç alacağını rastgele belirleyebildiğiniz gibi hangi kasabanın yeni bir otobüs hattı alacağını rastgele belirleyemezsiniz; bu nedenle bu yöntemler, her zaman rastgele atama gerektirmeden aynı nedensel mantığı ödünç alır.

## Neden önemli

HM Treasury'nin Magenta Book'u, yarı deneysel yöntemler üzerine Ek A, bu tasarımlar arasında seçim yapmak için Birleşik Krallık hükümetinin başvuru rehberliğidir ve Education Endowment Foundation ile What Works Centre for Local Economic Growth gibi kurumlar, bunların etrafında kurulu bir kanıt hiyerarşisini kurumsallaştırır — rastgele atamanın mümkün ve etik olduğu yerde RCT'ler, olmadığı yerde yarı deneysel tasarımlar. Yöntem seçimi teknik bir sonradan düşünce değildir: bir değerlendirmenin "program buna neden oldu mu?" sorusunu mu yoksa yalnızca "bu program başladıktan sonra mı gerçekleşti?" sorusunu mu yanıtlayabileceğini belirler; bu, [karşı olgusal analiz](../karşı-olgusal-analiz/)in herhangi bir değerlendirme görevlendirilmeden önce uygulayıcılara sorduralmak için kurulduğu aynı sorudur.

## Matematik

```
RCT:
  Etki = ortalama(sonuç | tedavi grubu) − ortalama(sonuç | kontrol grubu)
  (tedaviye atama rastgele olduğu için geçerlidir)

Farkların farkı (DiD):
  Etki = [sonuç_sonra(tedavi gören) − sonuç_önce(tedavi gören)]
       − [sonuç_sonra(kontrol) − sonuç_önce(kontrol)]
  ("paralel eğilimler" varsayımı gerektirir: tedavi gören ve kontrol, müdahale
   olmasaydı birlikte hareket ederdi)

Eğilim puanı eşleştirme (PSM):
  1. Her birim için P(tedavi = 1 | eş değişkenler X) tahmin edin → eğilim puanı
  2. Tedavi gören birimleri benzer eğilim puanlarına sahip tedavi görmemiş birimlerle eşleştirin
  3. Etki = ortalama(sonuç | tedavi gören) − ortalama(sonuç | eşleştirilmiş kontrol)

Regresyon süreksizliği tasarımı (RDD):
  Etki = uygunluk eşiğinde gözlenen sonuç sıçraması,
         kesme noktasının hemen üstündeki ve hemen altındaki birimleri karşılaştırarak
```

## Çalışılmış örnek

**Yerel yönetim (sorunlu aileler programı için farkların farkı)**: sonuç, okula devamdır. Tedavi gören bölge, program dönemi boyunca %84'ten %89 devama (+5 yüzde puan) çıkar; karşılaştırılabilir ama tedavi görmemiş bir bölge aynı dönemde %85'ten %87'ye (+2 yüzde puan) çıkar. DiD etki tahmini: 5 − 2 = programa atfedilebilir +3 yüzde puan. Tedavi gören bölgedeki 2.000 öğrencilik bir kohorta uygulandığında, bu, daha yüksek devam kategorisine ulaşan kabaca 60 ek öğrenciyle (%3 × 2.000) tutarlıdır; bu, kesin bir kişi sayısı olarak değil, paralel eğilimler uyarısıyla birlikte raporlanması gereken bir ekstrapolasyondur.

**Hayır kuruluşu (bir istihdam edilebilirlik hayır kuruluşu için eğilim puanı eşleştirme)**: 300 program katılımcısı, yaş, önceki istihdam geçmişi ve nitelik düzeyinden oluşturulan eğilim puanları kullanılarak daha büyük bir idari veri kümesinden 300 bireyle eşleştirilir. On iki aylık istihdam oranı: eşleştirilmiş tedavi gören grup %46, eşleştirilmiş karşılaştırma grubu %33. PSM etki tahmini: %46 − %33 = programa atfedilebilir +13 yüzde puan; hem katılımı hem de sonucu yönlendiren gözlemlenmemiş bir karıştırıcı (motivasyon gibi) olmadığı koşuluyla.

## Yazılım mühendisliği bağlantısı

Bu tasarımlardan herhangi birinin sonradan uygulanabilir olup olmadığı, büyük ölçüde erken alınan veri mühendisliği kararlarına bağlıdır. RDD, doğru kaydedilmiş bir çalışan değişkene ve gerçekten temiz bir uygunluk kesme noktasına ihtiyaç duyar; DiD, hem tedavi gören hem de karşılaştırma alanları için zaman içinde karşılaştırılabilir panel verisine ihtiyaç duyar, bu da sistemler ve yıllar arasında tutarlı birleştirmeler anlamına gelir; PSM, tedaviden önce yakalanan, sonradan yeniden oluşturulmayan zengin temel eş değişken verisine ihtiyaç duyar. Baştan bir [değişim kuramı](../değişim-kuramı/) ve [mantık modeli](../mantık-modeli/) ile birlikte tasarlanan — temel eş değişkenleri, tarihleri ve karşılaştırma grubuna uygun kayıtları yakalayan — bir veri modeli, pahalı bir sonradan koşuşturma yerine daha sonra titiz bir etki değerlendirmesini mümkün kılan şeydir. Bu yöntemlerin tek başına yanıtlamadığı tamamlayıcı soru için bkz. [etki değerlendirmesi ve süreç değerlendirmesi](../etki-değerlendirmesi-ve-süreç-değerlendirmesi/).

## Tuzaklar

- **Uygulanamaz veya etik olmayan bir yerde RCT'yi zorlamak**, ya da tersine, gerçek bir fırsat — bir politika kesme noktası, aşamalı bir yayılım — mevcut ve kullanılmamışken yarı deneysel bir tasarımı hiç düşünmemek.
- **DiD'de paralel eğilimler varsayımını göz ardı etmek.** Karşılaştırma alanı müdahaleden önce zaten tedavi gören alandan ayrışıyorsa, iki noktalı karşılaştırma kirlenmiştir; yalnızca önce/sonrayı değil, ön eğilimleri kontrol edin.
- **PSM'de yalnızca gözlenen eş değişkenler üzerinden eşleştirmek.** Katılımcı motivasyonu gibi gözlemlenmemiş seçim, gözlenen eş değişkenler iyi dengelenmiş olsa bile tahmini yanıltabilir.
- **RDD'de çalışan değişken manipülasyonu.** İnsanlar puanlarını bir uygunluk eşiğinin hemen içine düşecek şekilde etkileyebiliyorsa, süreksizlik artık nedensel bir etkiyi yalıtmaz.

## Kaynaklar

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
