# Açık Veri Değeri

Açık veri değeri, hükümet ve kamu verilerinin fiyatı olmadığında neye değdiğini tahmin etme sorunudur: satılmadığı için bir gelir kalemi yoktur, ancak onu yayımlamak (hava durumu kayıtları, ulaşım tarifeleri, posta kodu sınırları, şirket sicilleri) aşağı akışta ekonomik ve sosyal faaliyet ürettiği tartışmasız biçimde gösterilebilir. İyi değerlemek önemlidir çünkü "yayımlamak ücretsiz" ve "değersiz" ifadelerinin ikisi de yanlıştır ve bir API veya veri kümesi açıp açmamaya karar veren bir yazılım mühendisinin ikisinden daha iyi bir argümana ihtiyacı vardır.

## Neden önemli

En çok alıntılanan yukarıdan aşağıya tahmin, McKinsey Global Institute'un 2013 tarihli "Open data: Unlocking innovation and performance with liquid information" raporundan gelir; bu rapor, açık verinin eğitim, ulaşım, tüketici ürünleri, elektrik, petrol ve gaz, sağlık hizmetleri ve tüketici finansmanı olmak üzere yedi alandaki potansiyel yıllık değerini, artan şeffaflık, arz ile talebin daha verimli eşleştirilmesi ve veri üzerine kurulu yeni ürün ve hizmetlerin mümkün kılınması gibi mekanizmalar aracılığıyla, küresel olarak yılda 3 trilyon $ ile 5 trilyon $ arasında belirledi. Bu rakam ölçülmüş bir sonuç değil, bir senaryo tahminidir ve değer çoğunlukla veriyi kullanan üçüncü taraflara — işletmeler, araştırmacılar, vatandaşlar — birikirken, hükümetin doğrudan yakalayabileceği gelir gibi rutin olarak yanlış alıntılanır; veriyi satmak yerine açmanın amacı tam olarak budur. Sir Tim Berners-Lee ve Sir Nigel Shadbolt tarafından 2012'de birlikte kurulan Birleşik Krallık'ın Open Data Institute'ı, o tarihten bu yana sektör sektör, veri kümesi veri kümesi daha ayrıntılı, aşağıdan yukarıya vaka çalışmaları oluşturmuştur; bunlar gerçek bir iş gerekçesi için McKinsey manşet rakamından çok daha yararlıdır, çünkü yalnızca toplam büyüklüğünü değil, değer yaratma mekanizmasını gösterirler.

## Matematik

Açık verinin piyasa fiyatı yoktur, bu nedenle değerleme yöntemleri onun yerini alır; üç yaklaşım yinelenir ve hiçbiri tek başına yeterli değildir:

```
1. Önlenen maliyet / ikame maliyeti yöntemi:
   değer ≈ kullanıcıların eşdeğer veriyi kendilerinin üretmek veya
   lisanslamak için ödeyecekleri tutar — alt sınır, özgün üreticinin hiç
   öngörmediği kullanımların yarattığı değeri göz ardı eder

2. Piyasa benzeri / aşağı akış faaliyeti yöntemi:
   değer ≈ veri üzerine kurulu işletmelerin/hizmetlerin ürettiği gelir veya
   tasarruflar (örn. açık haritalama ve trafik verileri üzerine kurulu
   navigasyon uygulamaları) — gerçek ekonomik faaliyeti yakalar ancak veri
   yayınına temiz biçimde atfetmek zordur (bkz. additionality-and-deadweight)

3. Koşullu/beyan edilen tercih yöntemi:
   değer ≈ kullanıcıların ödeyeceklerini söyledikleri tutar veya onlara
   tasarruf ettirdiğini söyledikleri zaman — genel yöntem ve yanlılıkları
   için bkz. stated-preference-valuation

Bunların hiçbiri bir piyasa fiyatı kadar temiz bir rakam üretmez; güvenilir
açık veri iş gerekçeleri ikisini veya daha fazlasını üçgenler ve hangi
mekanizmanın işi yaptığı konusunda açıktır.
```

## Çalışılmış örnek

**Açıklayıcı ulusal haritalama/adres veri yayını** (ODI tarzı vaka çalışmalarından sonra metodoloji, rakamlar bu tür çalışmaların tipik olarak bulduğu ölçeği örnekler):

```
Önlenen maliyet tahmini:
  Aksi hâlde eşdeğer adres eşleştirme verisini ticari olarak lisanslayacak
  işletmeler, yılda ortalama 4.000 £ tahmini lisans maliyetiyle, şimdi
  ücretsiz açık veri kümesini kullanan tahmini 15.000 KOBİ genelinde
  = 15.000 × 4.000 £ = yalnızca önlenen lisanslamada yılda 60.000.000 £

Aşağı akış faaliyeti tahmini (daha spekülatif, bir karşı olgusal gerektirir):
  Açık veri üzerine kurulu, onsuz var olmayacak veya önemli ölçüde daha kötü
  olacak yeni teslimat rotalama ve lojistik ürünleri — verinin kapalı kalması
  veya ticari olarak lisanslanması karşı olgusalına karşı bir karşılaştırma
  gerektirir (counterfactual-analysis), çünkü bu faaliyetin bir kısmı zaten
  ücretli veride daha yüksek bir fiyata gerçekleşirdi; bu, "açarak yaratılan
  değer" anlamında ölü ağırlıktır

Savunulabilir bir iş gerekçesi, önlenen maliyet rakamını sağlam bir alt sınır
olarak raporlar ve aşağı akış faaliyeti rakamını bir gerçek değil, bir üst sınır
senaryosu olarak ele alır.
```

## Yazılım mühendisliği bağlantısı

Mühendisler için pratik açık-veri-değeri sorusu genellikle ulusal manşet rakamlardan daha dardır: bu belirli API'yi veya veri kümesini açmak (bir ortak anlaşmasının arkasında tutmak yerine), onu halka açık bir arayüz olarak belgelemenin, sürümlemenin ve desteklemenin sürekli maliyetini haklı çıkaracak kadar yeniden kullanımı artırır mı? Bu bakım maliyeti gerçektir ve [platform olarak hükümet](../platform-olarak-hükümet/)in bir kez-inşa-et-sık-yeniden-kullan ekonomisinin karşılığıdır — iki konu yakın kuzenlerdir, biri paylaşılan kod ve altyapı, diğeri paylaşılan veri hakkındadır. Herhangi bir açık veri değeri iddiası, bir iş gerekçesine girmeden önce [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/)a karşı kontrol edilmelidir: ticari olarak lisanslı veride zaten gerçekleşecek olan faaliyet, *açmanın* yarattığı değer değildir.

## Tuzaklar

- **McKinsey'in 3–5 trilyon $ rakamını Birleşik Krallık'a özgü veya bu veri kümesinin payı olarak alıntılamak**: 2013'ten küresel, yedi sektörlü bir senaryo tahminidir — onu tek bir ulusal veri kümesi için kesin bir çarpan olarak kullanmak, sayının ne olduğunu yanlış temsil eder.
- **Karşı olgusal olmaması**: açık veri üzerine kurulu tüm aşağı akış ekonomik faaliyetin ne kadarının zaten ücretli veya lisanslı veride daha yüksek bir fiyata gerçekleşeceğini sormadan hepsi için pay talep etmek (bkz. [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/) ve [karşı olgusal analiz](../karşı-olgusal-analiz/)).
- **Üretim maliyetini yaratılan değerle karıştırmak**: toplaması pahalı olan bir veri kümesi yayımlamak için otomatik olarak değerli değildir ve ucuz olan otomatik olarak düşük değerli değildir — değer, yukarı akış maliyetini değil, aşağı akış kullanımını izler.
- **"Açık"ın sürekli bakım maliyetini göz ardı etmek**: tek seferlik bir CSV çıktısı yayımlamak, belgelenmiş, sürümlenmiş, desteklenen bir açık API işletmekle aynı taahhüt değildir — lansman duyurusundan sonra ikincisini yetersiz finanse etmek yaygın bir başarısızlık biçimidir.

## Kaynaklar

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
