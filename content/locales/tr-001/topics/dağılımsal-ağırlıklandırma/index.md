# Dağılımsal Ağırlıklandırma

Dağılımsal ağırlıklandırma, bir maliyetin veya faydanın parasal değerini, onu kimin aldığına göre ayarlar; ilke şudur: ek bir sterlin, yoksul bir hanehalkı için zengin bir hanehalkından daha değerlidir. HM Treasury'nin Green Book'u, gelirin azalan marjinal faydası üzerine kurulu, bu ağırlıklandırmayı uygulamak için açık bir yöntem sunar; böylece değerlendirmeler, en varlıklı yüzdelik dilimin kazandığı bir sterlini en yoksulun kazandığı bir sterlinle sessizce eşit değerde saymaz.

## Neden önemli

Standart maliyet-fayda analizi, sterlinlerin kimin olduğunu sormadan toplar; bu, örtük olarak bir sterlinin herkes için aynı değerde olduğunu varsayar — iktisatçıların uzun zamandır yanlış olduğunu bildiği bir varsayım. Yılda 15.000 £ kazanan bir hanehalkı, yılda 150.000 £ kazanan bir hanehalkından 1.000 £'luk bir kazancı çok farklı yaşar; çünkü gelir arttıkça gelirin marjinal faydası düşer. Ağırlıklandırılmadığında standart değerlendirme, sistematik olarak daha varlıklı, zaten daha iyi durumdaki gruplara fayda sağlayan müdahaleleri kayırır; çünkü onların daha yüksek satın alma gücü, onlara ulaşan faydaların parasal değerlemesini şişirir (pahalı konutların yakınındaki bir park yenilemesi, ucuz konutların yakınındaki aynı yenilemeden daha büyük bir mülk değeri faydası "gösterir"; bunun nedeni refah kazancının daha büyük olması değil, fiyatların daha yüksek olmasıdır).

Green Book'un dağılımsal analiz üzerine tamamlayıcı rehberliği — Hazine'nin 2020 incelemesinin, değerlendirme metodolojisinin sistematik olarak Londra ve Güneydoğu'yu kayırdığı yönündeki eleştirilere yanıt vermesinin ardından pekiştirilmiştir — gelirin marjinal fayda esnekliğinin yaklaşık 1,3 olduğu varsayımına dayanan resmî bir ağırlıklandırma yaklaşımı ortaya koyar; bu, gelirin ikiye katlanmasının ek bir sterlinin marjinal değerini kabaca yarıya indirdiği (özellikle 2^-1,3 ≈ 0,41 katına) anlamına gelir. Bu bir yuvarlama ayarı değildir: uygulanması, iki rakip programdan hangisinin daha yüksek net bugünkü değer gösterdiğini değiştirebilir; özellikle yoksun bir bölgede yoğunlaşan bir müdahaleyi genel nüfusa yayılan bir müdahaleyle karşılaştırırken.

## Matematik

Y gelir düzeyindeki bir hanehalkına ulaşan bir sterlinlik fayda için, ulusal ortalama gelir düzeyi ȳ'deki bir sterline göre Green Book'un dağılımsal ağırlığı:

```
Ağırlık(y) = (ȳ / y)^e

burada:
  y  = hanehalkı geliri (veya etkilenen grubun geliri)
  ȳ  = ortalama (referans) hanehalkı geliri
  e  = gelirin marjinal fayda esnekliği (Green Book: yaklaşık 1,3)
```

Ağırlıkların net faydalara uygulanması:

```
Ağırlıklı fayda = Σ [i grubuna ağırlıksız fayda × Ağırlık(y_i)]
```

Ulusal ortalamanın yarısını kazanan bir grup (y = 0,5ȳ) (1/0,5)^1,3 = 2^1,3 ≈ 2,46 ağırlık alır — bu gruba giden her sterlinlik fayda, ortalama gelirli bir hanehalkına giden bir sterlinin kabaca 2,46 katı değerinde sayılır.

## Çalışılmış örnek

**İki rakip yerel program**, her biri yılda 2 milyon £'luk ağırlıksız net faydaya sahip, aynı bölgesel büyüme fonu için yarışıyor:

- *Program A*: varlıklı bir kasabada bir iş destek programı, ortalama hanehalkı geliri 45.000 £ (varsayılan 35.000 £'luk ulusal ortalamanın kabaca 1,3 katı).
- *Program B*: yoksun bir mahallede bir beceri programı, ortalama hanehalkı geliri 18.000 £ (ulusal ortalamanın kabaca 0,51 katı).

```
Ağırlık(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Ağırlık(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Ağırlıklı fayda A = 2.000.000 £ × 0,72 = 1,44 milyon £
Ağırlıklı fayda B = 2.000.000 £ × 2,53 = 5,06 milyon £
```

Ağırlıksız olarak iki program berabere. Dağılımsal etki için ağırlıklandırıldığında Program B'nin faydası üç katından fazla büyüktür — finansman tavsiyesini tersine çeviren ve Green Book'un yalnızca ağırlıksız fayda-maliyet oranının değil, ağırlıklandırmanın da gösterilmesini şart koşmaktaki açık amacını yansıtan bir sonuç.

**Hayır kuruluşu hibe tahsisi**: 1.000 düşük gelirli hanehalkına ulaşan 500.000 £'luk bir hibeyi (ağırlık ≈ 2,0, ağırlıklı değer 1 milyon £ eşdeğeri), aynı 500.000 £'nun 1.000 orta gelirli hanehalkına ulaşmasıyla (ağırlık ≈ 1,0, ağırlıklı değer 500.000 £ eşdeğeri) karşılaştıran bir fon sağlayıcı, dağılımsal gerekçeyi çıkarıma bırakmak yerine yönetim kurulu belgesinde açıkça göstermelidir.

## Yazılım mühendisliği bağlantısı

Dağılımsal ağırlıklandırma yazılım teslimat metriklerinde nadiren doğrudan görünür, ancak mühendislik ve veri ekiplerinin ölçüm ve hedeflemeyi nasıl tasarladığını şekillendirmelidir:

- Bir etki gösterge paneli veya yardım hesaplayıcısı geliştirirken, yalnızca toplam fayda değil, etkilenenlerin gelir veya yoksunluk profilini de sunun — dağılımsal döküm olmayan toplam rakamlar, yukarıda gösterilen tersine dönmeyi tam olarak gizler.
- Hizmet tasarımındaki hedefleme mantığını Green Book'un kullandığı aynı yoksunluk verilerine bağlayın — bkz. [Çoklu Yoksunluk Endeksi](../çoklu-yoksunluk-endeksi/) — böylece bir dijital hizmetin erişimi yalnızca verimlilik açısından değil, eşitlik açısından da değerlendirilebilir ([paranın karşılığı](../paranın-karşılığı/) bölümündeki tartışmalı dördüncü E).
- Bir algoritma kıt bir kaynağı (randevu saatleri, vaka çalışanı zamanı, bir sübvansiyon) tahsis ettiğinde, ağırlıksız bir "toplam faydayı maksimize et" amaç fonksiyonu, yapısı gereği Green Book'un ağırlıklandırmasının düzeltmek için var olduğu aynı yanlılığı yeniden üretir — optimize etmeden önce bunu politika sahiplerine açıkça bildirin.

## Tuzaklar

- **Dağılımsal ağırlıkları bir portföy genelinde tutarsız uygulamak.** Bir programın faydalarını ağırlıklandırıp karşılaştırma programınkini ağırlıklandırmamak daha adil değil, yanlı bir karşılaştırma üretir; Green Book eşdeğer işlem gerektirir.
- **Mülk veya piyasa değerlerini düzeltme yapmadan refah vekili olarak kullanmak.** Piyasa fiyatlarının kendisi mevcut gelir eşitsizliğiyle çarpıtılmıştır; dağılımsal ağırlıklandırma tam da bunu düzeltmek içindir — düzeltilmemiş piyasa değerlerini kullanmak yanlılığı iki kez sayabilir.
- **Grup içi değişkenliği göz ardı etmek.** Alan ortalaması gelire göre ağırlıklandırmak (örn. bir Çoklu Yoksunluk Endeksi on'luk dilimi), bölgesinin ortalamasına uymayan bireyleri yanlış temsil edebilir; makul ölçüde erişilebilir en ince taneli gelir verisini kullanın.
- **1,3 esnekliğini evrensel bir sabit saymak.** Green Book'un kendisi bunun makul bir aralığı olan bir tahmin olduğunu belirtir; 1,3'ü kesin kabul etmek yerine önemli kararları alternatif esnekliklere karşı duyarlılık testine tabi tutun.

## Kaynaklar

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
