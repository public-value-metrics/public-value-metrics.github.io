# Hükümette Maliyet-Etkililik Analizi

Maliyet-etkililik analizi (MEA), *aynı* sonuca ulaşmanın alternatif yollarının maliyetlerini doğal birimlerle karşılaştırır — barındırılan sokakta uyuyan kişi başına maliyet, beklenen standarda getirilen öğrenci başına maliyet, azaltılan ton CO2 başına maliyet — sonucun kendisini paraya dönüştürmeden.

## Neden önemli

Green Book, [sosyal maliyet-fayda analizi](../sosyal-maliyet-fayda-analizi/)nin her faydayı parasallaştırma şartı yalnızca zor değil, dürüst olmayan hâle geldiğinde — sonuca inandırıcı bir fiyat koymanın kimsenin gerçekten benimsemediği varsayımları gerektireceği durumlarda — MEA'yı yedek yöntem olarak ele alır (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 5. Bölüm, sonuçların kolayca parasallaştırılamadığı seçenek değerlendirmesi üzerine). MEA, en doğrudan sağlık ekonomisinden ödünç alınan yöntemdir — NICE'ın tedavileri Kaliteye Göre Ayarlanmış Yaşam Yılı başına maliyetle karşılaştırma biçimiyle yapısal olarak özdeştir — ancak sağlık dışı kamu programlarına uygulanır: öğrenci-sonuç-puanı başına eğitim müdahaleleri, evsizlikten korunan hanehalkı başına konut programları, sürdürülebilir iş sonucu başına istihdam programları.

MEA'nın SMFA tarafından kapsanmak yerine onun yanında yer almasının nedeni, bazı sonuçlara parasal bir değer zorlamanın, yetkili görünecek kadar kesin ve bir kamu tartışmasında işe yaramayacak kadar tartışmalı bir sayı üretmesidir — "beklenen standartta okuyan bir çocuğa" fiyat koymak, bir iş gerekçesini komite önünde raydan çıkaran türden itirazı tam olarak davet eder. MEA, tartışmayı yapmayı reddederek bu sorunu bertaraf eder: seçenekleri *sonucun kendisi*nin birimi başına maliyete göre sıralar ve sonucun peşinden gitmeye değip değmediğine dair ayrı siyasi yargıyı stratejik duruma bırakır.

## Matematik

```
Maliyet-etkililik oranı (ortalama) = Toplam maliyet / Elde edilen toplam sonuç birimi

Artımlı maliyet-etkililik oranı (ICER), A seçeneğini B seçeneğiyle karşılaştırırken:
ICER = (Maliyet_A − Maliyet_B) / (Sonuç_A − Sonuç_B)

Prosedür:
1. Karşılaştırılan tüm seçenekler arasında sonuç birimini ve ölçüm yöntemini sabitleyin.
2. Her seçeneği aynı temelde maliyetlendirin (bkz. ../green-book-appraisal/, mali durum)
   aynı zaman ufku üzerinde.
3. Baskın olunan seçenekleri eleyin: aynı veya daha iyi sonuca ulaşan daha ucuz bir
   alternatiften birim başına daha pahalıya mal olan her seçenek çıkarılır.
4. Kalan seçenekleri ortalama değil, artımlı maliyet-etkililik oranına göre sıralayın.
```

MEA tek başına bir programın hiç finanse edilmeye değer olup olmadığını söyleyemez — yalnızca aynı hedefe yönelik birkaç yaklaşımdan hangisinin birim başına en ucuz olduğunu söyler. Hedefin kendisinin harcamaya değip değmediğine karar vermek, ya SMFA'ya geri dönmeyi (inandırıcı bir değerleme varsa) ya da matematiğin dışında bir siyasi/stratejik yargıyı gerektirir. Sonuçlar gerçekten tek bir birime indirgenemediğinde — çünkü bir program farklı şekillerde önem taşıyan birkaç sonuç ürettiğinde — bunun yerine [çok kriterli karar analizi](../çok-kriterli-karar-analizi/) kullanın.

## Çalışılmış örnek

**Yerel yönetim**: bir belediye, sokakta uyumayı azaltmaya yönelik üç yaklaşımı karşılaştırır; her biri bir yıl boyunca "6+ ay boyunca yerleşik konuta taşınan bireyler" sonucuna karşı maliyetlendirilmiştir:

```
Seçenek                          Maliyet    Elde edilen sonuç   Ort. MEO
Önce Konut (yoğun)               900.000 £  60                  15.000 £/sonuç
Pansiyon + geçiş desteği         600.000 £  50                  12.000 £/sonuç
Saha çalışması + özel kiralık    350.000 £  20                  17.500 £/sonuç

ICER, Pansiyon ve Saha çalışması: (600k−350k)/(50−20) = ek sonuç başına 8.333 £
ICER, Önce Konut ve Pansiyon: (900k−600k)/(60−50) = ek sonuç başına 30.000 £
```

Saha çalışması, ortalama maliyette Pansiyon tarafından baskındır, ancak Saha çalışmasından Pansiyon'a *artımlı* adım, barındırılan her ek kişi için yalnızca 8.333 £'ya mal olur — Pansiyon'un ötesinde elde edilen her ek kişi için 30.000 £'ya mal olan Önce Konut adımına göre ucuz. Ölçek büyüten, bütçe kısıtlı bir belediye, Önce Konut kendi ortalama oranında daha iyi görünse bile, Önce Konut'tan önce Pansiyon'u genişletmeyi tercih etmelidir.

**Ulusal hükümet**: bir okuma telafi programı, "yaşa uygun okuma standardına ulaşan öğrenci başına maliyet" üzerinden üç teslimat modelinde karşılaştırılır: birebir özel ders (öğrenci başına 1.800 £), küçük grup özel dersi (öğrenci başına 700 £) ve yalnızca dijital müdahale (öğrenci başına 150 £, ancak katılım düşüşü için düzeltildiğinde kayıtlı öğrenci başına küçük grup özel dersinin sonuç oranının yalnızca %40'ı). Gerçek tamamlama için düzeltildiğinde, yalnızca dijital standarda ulaşan öğrenci başına 375 £'ya mal olur — hâlâ en ucuz, ancak MEA, küçük grupla aynı bütçeyle sunulduğunda yalnızca dijital ile yardım edilen mutlak olarak daha az sayıdaki öğrencinin, daha az öğrenciye daha derinlemesine ulaşmaya karşı kabul edilebilir bir takas olup olmadığını söyleyemez; bu, MEA'nın karar vericilere geri verdiği dağılımsal bir yargıdır.

## Yazılım mühendisliği bağlantısı

MEA, mühendislik ekipleri *aynı* hizmet sonucu için teslimat yaklaşımlarını değerlendirdiğinde doğru çerçevedir — üç kimlik doğrulama satıcısı arasında başarıyla doğrulanan kimlik başına maliyet, iki vaka otomasyonu tasarımı arasında doğru önceliklendirilen vaka başına maliyet, kurum içi ile dışarıdan sağlanan iyileştirme arasında çözülen erişilebilirlik kusuru başına maliyet. Doğrudan içe aktardığı disiplin: maliyetleri karşılaştırmadan önce sonuç birimini tanımlayın ("kapatılan biletler" değil — bu bir çıktıdır — "gerçekten karşılanan kullanıcı ihtiyacı") ve her sistemin ortalama maliyetini tek başına değil, canlı sistem ile önerilen bir yedeği arasındaki artımlı oranı her zaman hesaplayın. Bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/) ve [sonuç başına maliyet](../sonuç-başına-maliyet/).

## Tuzaklar

- **Bir genişleme kararı verirken artımlı değil ortalama oranları karşılaştırmak.** Sokakta uyuma örneğinin gösterdiği gibi, en iyi ortalama orana sahip seçenek her zaman satın alınacak bir sonraki en ucuz sonuç birimi değildir.
- **Gerçekte bir çıktı olan bir sonuç birimi seçmek.** "Yapılan sevkler" veya "verilen oturumlar" faaliyeti ölçer, programın üretmek için var olduğu sonucu değil; çıktılar üzerinde MEA, yanlış soruyu yanıtlayan, güvenilir görünen bir sayı üretir.
- **Gerçekten farklı sonuçlar arasında karşılaştırma yapmak.** MEA yalnızca her seçenek aynı şekilde ölçülen aynı sonucu hedeflediğinde geçerlidir; "barındırılan sokakta uyuyan kişi başına maliyet" ile "istikrarlı kiracılıktaki bakımdan çıkan genç başına maliyeti" karşılaştırmak, MEA değil, genel bir sonuç ölçüsü ya da [çok kriterli karar analizi](../çok-kriterli-karar-analizi/) gerektirir.
- **Sonuç kalıcılığını göz ardı etmek.** Kalıcı olmayan sonuçlar üreten daha ucuz bir seçenek (müdahale bittikten sonra gerileyen bir öğrenci), karşılaştırılabilir bir ufuk üzerinde ölçüldüğünde gerçekte daha maliyet-etkili değildir; karşılaştırılan seçenekler arasında takip süresini eşleştirin.

## Kaynaklar

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
