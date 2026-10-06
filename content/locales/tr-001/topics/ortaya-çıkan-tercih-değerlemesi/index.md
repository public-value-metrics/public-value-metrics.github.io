# Ortaya Çıkan Tercih Değerlemesi

Ortaya çıkan tercih yöntemleri, piyasa dışı bir malın değerini insanlara doğrudan sormak yerine, ilgili bir piyasadaki gözlemlenebilir davranıştan çıkarır. Hedonik fiyatlama ve seyahat maliyeti yöntemi iki temel tekniktir: her ikisi de gerçek bir işlemden başlar ve hiç doğrudan satılmamış şey için örtük bir fiyat çıkarır.

## Neden önemli

[Beyan edilen tercih](../beyan-edilen-tercih-değerlemesi/) yöntemleri varsayımsal bir soru sorarken, ortaya çıkan tercih yöntemleri insanların gerçekte neye ödediğini gözlemler; Green Book bunu, diğer her şey eşitken, varsayımsal yanlılığa tabi olmadığı için genellikle daha inandırıcı kanıt olarak ele alır — hedonik bir konut fiyatı çalışmasındaki katılımcılar, ölçülen primi veya indirimi gerçekten ödemiştir (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Ek 2). Hedonik fiyatlama, bir piyasa fiyatını — tipik olarak konut fiyatlarını — malın her niteliği için örtük fiyatlara ayrıştırır; böylece analistler, örneğin hanehalklarının daha sessiz bir yerde veya daha iyi hava kalitesiyle yaşamak için gerçekte ödedikleri fiyat primini, konut fiyatını etkileyen diğer her niteliği (büyüklük, konum, okul kayıt bölgesi) istatistiksel olarak kontrol ederek yalıtabilir. Seyahat maliyeti yöntemi, giriş ücreti olmayan rekreasyon alanları için benzer şeyi yapar: insanların bir alana seyahat etmek için harcadığı zaman ve para, o alanın onlar için neye değdiğinin alt sınırını ortaya çıkarır; çünkü hiç kimse ziyaretin kendisi için değerinin üzerinde bir maliyete katlanmaz.

Her iki yöntem de yapısal bir sınırlamayı paylaşır: yalnızca mevcut bir piyasa işlemine gömülü olanı değerleyebilirler. Bir pist yakınındaki gürültü konut fiyatlarına yansır; çünkü gürültüyü önemseyen insanlar daha sessiz konutlara yönelir; kimsenin ziyaret etmediği veya yakınında yaşamadığı bir türün var oluş değeri ise hiçbir işlemde görünmez; [beyan edilen tercih](../beyan-edilen-tercih-değerlemesi/) yöntemlerinin doldurmak için var olduğu boşluk tam olarak budur.

## Matematik

```
Hedonik fiyatlama:
  Konut fiyatı = f(yapısal nitelikler, konum nitelikleri,
                   ilgilenilen çevresel nitelik, ...)
  Regresyonla tahmin edin; çevresel niteliğin katsayısı (diğer her şey sabit
  tutulduğunda) onun örtük fiyatıdır.

  X niteliğinin örtük fiyatı = ∂(Konut fiyatı) / ∂X

Seyahat maliyeti yöntemi:
  Ziyaret oranı (i bölgesinden kişi başına ziyaret) = f(i bölgesinden seyahat
                   maliyeti, ikame alanlar, sosyoekonomik kontroller)
  Ziyaretler için seyahat maliyetinin bir fonksiyonu olarak bir talep eğrisi
  tahmin edin.
  Tüketici artığı = tahmin edilen talep eğrisinin altındaki alan
                  = alanın ziyaretçiler için değeri
```

Her iki yöntem de istatistiksel olarak sağlam bir kontrol kümesi gerektirir — karıştırıcı bir niteliği (hedonik) veya yakındaki bir ikame alanı (seyahat maliyeti) atlamak, örtük fiyatı önceden her zaman açık olmayan bir yönde yanıltır; Green Book Ek 2'nin yalnızca manşet katsayıyı değil, regresyon spesifikasyonunun ve kontrollerin de bildirilmesini şart koşmasının nedeni budur.

## Çalışılmış örnek

**Ulusal hükümet**: Green Book'un kendi karbon gölge fiyatı metodolojisi kısmen hedonik kanıta dayanır, ancak daha basit bir açıklayıcı örnek uçak gürültüsüdür. Bir uçuş yolu bölgesindeki konut satış fiyatlarını mesafe ağırlıklı gürültü maruziyetine karşı, büyüklük, yaş ve okul kayıt bölgesini kontrol ederek regresyona sokan hedonik bir çalışma, ortalama gürültü maruziyetindeki her 1 desibel artışın konut fiyatında %0,5 azalmayla ilişkili olduğunu bulur. Etkilenen bölgedeki tipik 280.000 £'luk bir ev için:

```
Desibel başına örtük fiyat = 280.000 £ × %0,5 = hanehalkı başına 1.400 £
Yeni bir pistten kaynaklanan 3dB artıştan etkilenen hanehalkı sayısı = 18.000
Gürültü artışının ima edilen toplam maliyeti = 1.400 £ × 3 × 18.000 = 75,6 milyon £
```

Bu, tek seferlik sermayeleştirilmiş bir maliyettir (konut fiyatına gömülü); değerlendirme, ayrıca tahmin edilen yıllık gürültü rahatsızlığı maliyet akışına karşı iki kez sayılmaması için dikkatli olmalıdır.

**Hayır kuruluşu**: bir çevre hayır kuruluşu, giriş ücreti olmayan bir doğa rezervini değerlemek için seyahat maliyeti yöntemini kullanır. Ziyaretçi posta kodlarına dair anket verileri (Green Book'un önerdiği iş dışı zaman değeriyle değerlenen zaman artı yakıt) ziyaret başına ortalama 14 £'luk gidiş-dönüş seyahat maliyeti verir ve yılda 40.000 ziyaret vardır. Tahmin edilen talep eğrisi — bir bölgeden seyahat maliyeti arttıkça düşen ziyaret oranları — gerçekte harcanan 14 £'nun üzerinde, ziyaret başına kabaca 9 £'luk bir tüketici artığı ima eder.

```
Toplam yıllık değer = 40.000 ziyaret × (14 £ harcanan + 9 £ tüketici artığı)
                    = 40.000 × 23 £ ≈ yılda 920.000 £
```

Bu, rezervin sıfır giriş ücreti gelirini gölgede bırakır ve hayır kuruluşunun mütevellilerine, fon sağlayıcılara başvururken alanın rekreasyonel değeri için savunulabilir bir rakam verir.

## Yazılım mühendisliği bağlantısı

Ortaya çıkan tercih düşüncesi, kamu sektörü ürün analitiğinde uygulayıcıların fark ettiğinden daha sık görünür: ücretsiz bir hükümet dijital hizmetinden gelen kullanım verisi, kendi başına bir değerin ortaya çıkan tercih kanıtıdır (sıklık, oturum uzunluğu ve — en açıklayıcı olanı — tekrarlı ve tek seferlik kullanım örüntüleri, bir seyahat maliyeti modelinin ziyaret sıklığını mesafeye karşı ele aldığı biçimde analiz edilebilir). Bir hizmetin gerçek ikameleri olduğunda (bir kâğıt kanalı, bir telefon hattı), vatandaşların bunun yerine dijital kanalı kullanmak için katlandığı "maliyet" (zaman, veri, bir cihaz) tahmin edilebilir ve kullanımla karşılaştırılabilir; bu, seyahat maliyeti mantığını doğrudan yansıtır. Bkz. [dijital hizmet standardı](../dijital-hizmet-standardı/) ve doğrudan piyasa fiyatı olmayan bir mal için tam olarak bu değerleme sorunuyla karşılaşan [açık veri değeri](../açık-veri-değeri/).

## Tuzaklar

- **Hedonik modellerde ihmal edilmiş değişken yanlılığı.** İlişkili bir niteliği dışarıda bırakmak (hem konut fiyatıyla hem de ilgilenilen çevresel değişkenle ilişkili okul kalitesi) örtük fiyat tahminini yanıltır; yalnızca sonuç değil, spesifikasyon da bildirilmeli ve incelenmelidir.
- **Seyahat maliyeti çalışmalarında ikame alanları göz ardı etmek.** Daha yakın bir ikame varsa ve kontrol edilmemişse, bir ziyaretçinin bir alana ilişkin ortaya çıkan değeri olduğundan düşük gösterilir — alanı esas olarak ücretsiz olduğu için, benzersiz derecede değerli olduğu için değil, ziyaret ediyor olabilirler.
- **Ortaya çıkan tercihi hiçbir piyasa yankısı olmayan bir mala uygulamak.** Var oluş değeri, seçenek değeri ve miras değeri hiçbir işlemde görünmez ve hedonik veya seyahat maliyeti yöntemleriyle kurtarılamaz — bu boşluk [beyan edilen tercih değerlemesi](../beyan-edilen-tercih-değerlemesi/)ne aittir.
- **Sermayeleştirilmiş (tek seferlik) değeri yıllık bir akışla karıştırmak.** Hedonik konut fiyatı etkileri tipik olarak tek seferlik sermayeleştirilmiş değerlerdir; bunları yıllık bir fayda akışı olarak ele almak değerlendirmeyi şişirir.

## Kaynaklar

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
