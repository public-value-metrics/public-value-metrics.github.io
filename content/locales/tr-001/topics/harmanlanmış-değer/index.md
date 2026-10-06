# Harmanlanmış Değer

Harmanlanmış değer (blended value), Jed Emerson'un, tüm kurumsal ve yatırım faaliyetlerinin aynı anda üç hat boyunca — ekonomik, sosyal ve çevresel — değer yarattığı ve bunların birbirine karşı takas edilecek üç ayrı getiri değil, tek, ayrılmaz bir değer önermesi olduğu önermesidir. Emerson'un çerçevelemesinde, salt finansal veya salt sosyal bir getiri diye bir şey yoktur; harcanan, yatırılan veya hibe edilen her sterlin, üçünün de bir harmanını üretir.

## Neden önemli

Emerson fikri, "The Blended Value Proposition: Integrating Social and Financial Returns" (California Management Review, 2003) yazısında, sermayeyi iki silosa ayırma yirminci yüzyıl geleneğine doğrudan karşı olarak ortaya koydu — sosyal getiri üretmesi ve finansal getiriyi tamamen bağışlaması beklenen hayırseverlik ve finansal getiri üretmesi ve sosyal veya çevresel etkileri bir dışsallık olarak ele alması beklenen yatırım. Emerson'un argümanı, bu ayrımın her zaman bir kurgu olduğuydu: kötü yönetilen bir kuruluşu finanse eden bir hibe üç hat boyunca da değer yok eder ve bir nehri kirleten kârlı bir işletme, hissedarlarının getirisi kâğıt üzerinde ne kadar görünürse görünsün, üç hat boyunca da değer yok eder.

Fikir, John Elkington'ın 1994'te ortaya attığı ve 1997 tarihli "Cannibals with Forks" kitabında geliştirdiği, şirketleri finansal performansın yanı sıra sosyal ve çevresel performansa karşı raporlamaya iten "üçlü alt çizgi" (insanlar, gezegen, kâr) ile paralel ilerler. Harmanlanmış değer aynı mantığı sermaye tahsisinin kendisine kadar daha da ileri taşıdı ve etki yatırımcılığı alanının entelektüel atasıdır: 2009'da kurulan Global Impact Investing Network (GIIN), bir yatırımcının harmanı iddia etmek yerine gerçekten ölçmesini sağlayan altyapıyı — IRIS+ metrik kataloğu dâhil, bkz. [hibe sonuç raporlaması](../hibe-sonuç-raporlaması/) — kurmak için özellikle vardır.

## Matematik

Harmanlanmış değer bir formül değil bir çerçevedir ve Emerson, üç puanın basit toplama indirgenmesine karşı açıkça uyarmıştır. Önerdiği yapı:

```
Konuşlandırılan her sermaye birimi (hibe, yatırım, sözleşme, satın alma) şunları üretir:
  - ekonomik bir etki      (finansal getiri, tasarruf edilen maliyet, üretilen gelir)
  - sosyal bir etki        (insanlar için refah, yetenek, eşitlik değişimi)
  - çevresel bir etki      (korunan, bozulan veya onarılan doğal sermaye)

Bunlar ayrı ayrı optimize edilip sonra toplanmaz. Sosyal hattı yok ederken ekonomik hattı
maksimize eden bir karar "harmanlanmış değer artı bir maliyet" değildir — net değer yok edici
bir karardır, nokta.
```

Pratikte kuruluşlar harmanı bir puan kartıyla yaklaşık olarak ifade eder: her hatta karşı adlandırılmış göstergeler, birlikte raporlanır, tek bir sayıya netleştirilmez. Bu, (parasallaştırılmış netleştirmeyi deneyen) [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) ve (çevresel hat için aynısını yapan) [doğal sermaye muhasebesi](../doğal-sermaye-muhasebesi/) ardındaki aynı içgüdüdür — ikisi de harmanlanmış değerin bütünüyle ortaya koyduğu soruya kısmi, tek hatlı yanıtlardır.

## Çalışılmış örnek

Bir etki yatırımcısı iki 500.000 £'luk kredi arasında seçim yapıyor:

- **Kredi A**: eski hükümlüler için bir iş eğitimi kafesi işleten bir sosyal girişime, %2 faizle (eşdeğer riskli borç verme için %6'lık piyasa oranının altında), yılda 40 kişiyi sürdürülebilir işe yerleştirmesi bekleniyor.
- **Kredi B**: belirtilmiş bir sosyal veya çevresel amacı olmayan geleneksel bir perakende işletmesine %6 piyasa oranlı bir kredi.

Salt finansal bir mercek B'yi tercih eder (%6 > %2). Harmanlanmış değer merceği, yatırımcıdan her ikisi için de üç hattın hepsini belirtmesini ister:

| | Ekonomik (yıllık) | Sosyal (yıllık) | Çevresel |
|---|---|---|---|
| Kredi A | 10.000 £ faiz | 40 kişi işe yerleştirildi; her yerleştirme-yılı devlete, Adalet Bakanlığı yeniden suç işleme maliyet analizlerinden alınan makul bir önlenen yeniden suç işleme tasarrufu taşır | Nötr |
| Kredi B | 30.000 £ faiz | Belirtilmedi | Nötr |

Kredi A'nın harmanlanmış getirisi, sosyal hat fiyatlandırıldığında, finansal hattı tek başına yılda 20.000 £ farkla Kredi B'ye kaybetse bile açıkça üstün gelir. Harmanlanmış değer yatırımcıya 20.000 £'luk boşluğu göz ardı etmesini söylemez — onun var olan tek sayı olduğunu varsaymamasını söyler.

## Yazılım mühendisliği bağlantısı

Vakıflar, etki fonları veya yerel yönetim komisyonculuk ekipleri için raporlama veya portföy yönetimi yazılımı sıklıkla birincil veri modeli olarak bir finansal defterle ve sosyal veya çevresel alanların serbest metin notları olarak sonradan eklenmesiyle oluşturulur. Harmanlanmış değer tersini ima eder: her işlem veya hibe kaydına eklenmiş, her biri kendi birimi, kaynağı ve güven düzeyiyle birlikte, tek bir yanıltıcı derecede kesin puana netleştirilmek yerine birlikte gösterilen üç birinci sınıf, eşit yapılandırılmış değer akışı. Harmanı çökertmeden bu görüntüyü oluşturmanın iki yapılandırılmış yolu için bkz. [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) ve [kamu değeri puan kartı](../kamu-değeri-puan-kartı/).

## Tuzaklar

- **Üç hattı tek bir sayıda toplamak.** Emerson'un kendi yazıları buna karşı uyarır; tek bir harmanlanmış rakam, hangi hattın gerçekte işi yaptığını gizler ve seçip ayıklamayı davet eder.
- **Harman yıkama.** Aksi hâlde düşük performans gibi görünecek piyasa altı bir finansal getiriyi haklı çıkarmak için, adlandırılmış bir gösterge veya ölçüm yöntemi olmadan güçlü bir sosyal veya çevresel hat iddia etmek.
- **Negatif harmanları göz ardı etmek.** Finansal olarak başarılı bir programın negatif bir sosyal veya çevresel hattı olabilir; harmanlanmış değer, yalnızca bir hattaki iyi haberi değil, herhangi bir hattaki kötü haberi de raporlamayı gerektirir.

## Kaynaklar

- Emerson J. "The Blended Value Proposition: Integrating Social and Financial Returns." California Management Review, 2003;45(4). <https://www.blendedvalue.org/>
- Elkington J. "Cannibals with Forks: The Triple Bottom Line of 21st Century Business." Capstone, 1997.
- Global Impact Investing Network (GIIN), About IRIS+. <https://iris.thegiin.org/about/>
