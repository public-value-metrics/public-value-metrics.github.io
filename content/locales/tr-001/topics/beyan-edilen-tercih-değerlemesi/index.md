# Beyan Edilen Tercih Değerlemesi

Beyan edilen tercih yöntemleri, piyasa dışı bir malın değerini, insanlara ona ne kadar ödemeye istekli olduklarını veya ondan vazgeçmek için tazminat olarak ne kabul edeceklerini doğrudan sorarak, tipik olarak varsayımsal bir senaryoyu tanımlayan yapılandırılmış bir anketle tahmin eder. Koşullu değerleme, bu ailenin en bilinen tekniğidir.

## Neden önemli

Green Book Ek 2 (piyasa dışı etkilerin değerlenmesi üzerine tamamlayıcı rehberlik), değer çıkarılabilecek hiçbir gözlemlenebilir piyasa işlemi bulunmayan mallar için beyan edilen tercih yöntemlerini onaylar — hava kalitesi, biyoçeşitlilik, sel koruması, birinin hiç ziyaret etmeyebileceği bir manzaranın var oluş değeri (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra, çevresel değerlendirme için kendi beyan edilen tercih rehberliğini, çevresel değerin (habitat korunması, su kalitesi) çok büyük bir kısmının, örneğin gözlemlenebilir konut fiyatlarıyla en azından ilişkili olan gürültünün aksine, hiçbir vekil piyasasının olmaması nedeniyle yayımlamıştır (bkz. [ortaya çıkan tercih değerlemesi](../ortaya-çıkan-tercih-değerlemesi/)).

Beyan edilen tercihin temel cazibesi — kelimenin tam anlamıyla her şeyi, hiç kimsenin işlem yapmadığı mallar dâhil, değerleyebilmesi — aynı zamanda inandırıcılık sorununun kaynağıdır. Katılımcılar gerçekte para harcamadığı için, koşullu değerleme anketleri varsayımsal yanlılığa (gerçek bir bütçe kısıtı olmadığında insanlar ödeme istekliliğini olduğundan yüksek bildirir), gömme etkilerine (aynı mal, ankette başka neler olduğuna bağlı olarak farklı değerlenir) ve teklif oyunu tasarımlarında başlangıç noktası yanlılığına açıktır. Exxon Valdez petrol sızıntısı davasının ardından toplanan, koşullu değerleme üzerine 1993 NOAA paneli, tasarım standartları belirledi — açık uçlu teklif yerine ikili "X £ öder miydiniz, evet/hayır" referandum biçimi ve katılımcının gerçek bütçe kısıtına dair zorunlu hatırlatmalar — ve bunlar savunulabilir anketler için referans standart olmayı sürdürmektedir.

## Matematik

```
Koşullu değerleme (referandum biçimi):
  İkili bir seçim sunun: "Y sonucu için yılda X £ öder miydiniz? evet/hayır"
  X'i katılımcılar arasında rastgele değiştirin.
  Ödeme istekliliğini, her X'teki evet/hayır yanıt oranının bir fonksiyonu olarak uydurun.

Ortalama ÖİH = tahmin edilen talep eğrisinin altındaki alan
Toplam değer = Ortalama ÖİH × etkilenen nüfus

Seçim deneyi (ayrık seçim modelleme) varyantı:
  Katılımcılara nitelik paketleri arasında (bir maliyet niteliği dâhil)
  tekrarlanan seçimler sunun, katılımcıların ortaya koyduğu takaslardan
  maliyet dışı her niteliğin örtük fiyatlarını tahmin edin.
```

Seçim deneyi varyantı, mevcut Birleşik Krallık uygulamasında genellikle tek soruluk koşullu değerlemeye tercih edilir; çünkü katılımcıları birkaç niteliği maliyete karşı defalarca takas etmeye zorlamak, tek bir evet/hayır sorusundan daha tutarlı, manipüle edilmesi daha zor tahminler üretir.

## Çalışılmış örnek

**Ulusal hükümet**: Defra, bir nehir su kalitesi iyileştirme programını değerlemek için bir koşullu değerleme anketi görevlendirir. 2.000 hanehalkıyla yapılan referandum biçimli bir anket, %62'sinin varsayımsal bir su faturası ek ücreti yoluyla yılda 40 £ ödeyeceğini bulur ve tahmin edilen talep eğrisi, hanehalkı başına yılda 28 £'luk bir ortalama ödeme istekliliği verir.

```
Ortalama ÖİH = hanehalkı başına yılda 28 £
Havzadaki hanehalkı sayısı = 340.000
Toplam yıllık değer = 28 £ × 340.000 = yılda 9,52 milyon £

%3,5 iskonto oranıyla 20 yıllık değerlendirme döneminde (anüite faktörü ≈ 14,2):
BD(fayda) ≈ 9,52 milyon £ × 14,2 ≈ 135 milyon £
```

Bu toplam rakam daha sonra programın [sosyal maliyet-fayda analizi](../sosyal-maliyet-fayda-analizi/) maliyet tarafıyla karşılaştırılır. Green Book, bu tür beyan edilen tercih kanıtının, çıplak bir nokta tahmini olarak değil, güven aralığı ve anket metodolojisiyle birlikte bildirilmesini şart koşar; çünkü altta yatan sayı bir piyasa fiyatından daha kırılgandır.

**Hayır kuruluşu**: bir miras vakfı, ziyaretçilere ve ziyaretçi olmayanlara, ikisinin de mutlaka ziyaret etmediği tarihî bir binanın kapanmasını önlemek için ödeme istekliliğini sorar (var oluş değeri). Binayı hiç görmeyecek ziyaretçi olmayanlar da olumlu ÖİH bildirdiği için, anket basit bir ziyaretçi ücreti geliri sayımının (bir ortaya çıkan tercih vekili) tamamen kaçıracağı var oluş ve miras değerini yakalar — değeri ortaya çıkaracak hiçbir türde piyasa işleminin bulunmadığı yerde beyan edilen tercihin gerçek avantajını gösterir.

## Yazılım mühendisliği bağlantısı

Beyan edilen tercih yöntemleri yazılım mühendisliği işine nadiren doğrudan uygulanır, ancak vatandaş istişare platformları, bütçe katılım araçları veya kamu anketi altyapısı geliştiren mühendisler çoğu zaman ekonominin bağlı olduğu aracı inşa etmektedir. Anket tasarım ayrıntılarını doğru yapmak — rastgele teklif tutarları, açık uçlu sorular yerine ikili referandum çerçeveleme, açık bütçe kısıtı hatırlatmaları — bir UX inceliği değil, ortaya çıkan değerlemeyi incelemeye karşı savunulabilir kılan şeydir; kötü tasarlanmış bir uygulama içi anket, sonraki aylarca süren ekonomik analizi geçersiz kılabilir. Analitik ağırlık taşıyacak kamuoyu verilerini elde etmenin daha genel disiplini için bkz. [vatandaş memnuniyeti metrikleri](../vatandaş-memnuniyeti-metrikleri/).

## Tuzaklar

- **Açık uçlu "ne kadar ödersiniz?" soruları.** Bunlar ikili referandum çerçevelemeden çok daha fazla stratejik ve çapalama yanlılığına yatkındır; NOAA panelinin referandum biçimi kullanma önerisi tam da açık uçlu çıkarımın kötü performans göstermesi nedeniyle vardır.
- **Katılımcının gerçek bütçe kısıtının hatırlatılmaması.** Bu olmadan, beyan edilen ÖİH, aynı insanların gerçek bir bütçe takası söz konusu olduğunda ödeyeceğinin rutin olarak üzerine çıkar — varsayımsal yanlılık.
- **Gömme etkilerinin göz ardı edilmesi.** Aynı malın tek başına değerlenmesi ile daha büyük bir paketin parçası olarak değerlenmesi farklı ÖİH tahminleri üretir; varsa, anket çerçevesinde başka neyin olduğunu bildirin.
- **Tek bir anketin nokta tahminini kesinleşmiş saymak.** Green Book uygulaması, bir piyasa fiyatıymış gibi maliyet-fayda tablosuna taşınan çıplak bir sayı değil, bir aralık ve bilinen yanlılıkların tartışılmasını bekler.

## Kaynaklar

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
