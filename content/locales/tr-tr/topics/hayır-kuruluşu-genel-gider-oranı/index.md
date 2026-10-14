# Hayır Kuruluşu Genel Gider Oranı

Hayır kuruluşu genel gider oranı (overhead ratio), idari ve bağış toplama harcamasının toplam harcamanın yüzdesi olarak ifade edilmesidir. Hayırsever bağışlardaki en çok talep edilen tek sayıdır — bağışçılar, gözlemciler ve hatta bazı fon sağlayıcılar tarafından verimlilik için bir vekil olarak kullanılır — ve aynı zamanda sektördeki en kapsamlı biçimde itibarsızlaştırılmış verimlilik metriklerinden biridir; onu popülerleştiren kuruluşlar 2013'te kamuoyu önünde onu reddetmiştir.

## Neden önemli

17 Haziran 2013'te, tarihsel derecelendirmeleri genel gider oranını hayır kuruluşu kalitesi için bir kısaltma olarak yerleştirmeye yardım etmiş olan üç büyük ABD kâr amacı gütmeyen derecelendirme ve bilgi kuruluşu GuideStar, BBB Wise Giving Alliance ve Charity Navigator, Amerikalı bağışçılara "The Overhead Myth" başlıklı ortak bir açık mektup yayımladı; mektup, genel gider oranının bir hayır kuruluşunun performansının zayıf bir ölçüsü olduğunu açıkça belirtiyor ve bağışçıları bunun yerine şeffaflığa, yönetişime ve sonuçlara bakmaya çağırıyordu. Bu, bağışçı kültürünü on yıl boyunca orana göre kurmuş olan kuruluşların doğrudan bir tersine dönüşüydü.

Altta yatan sorun yalnızca görüntüyle ilgili değil, yapısaldır: düşük bir genel gider oranı, bir hayır kuruluşunu etkili kılan şeylere — düzgün bir vaka yönetim sistemi, eğitimli personel, izleme ve değerlendirme — yetersiz yatırım yaparak elde edilebilir; çünkü bunlar çoğu zaman "program" değil "idari" maliyet olarak kaydedilir. %5 genel gider raporlamak için arka ofisini aç bırakan bir hayır kuruluşu, düzgün kaynaklandırılmış bir operasyona %20 harcayandan daha az sonuç teslim etme kapasitesine sahip olabilir. İngiltere ve Galler'de Charity Commission'ın mütevellilere yönelik rehberliği, bir verimlilik testi olarak tek bir genel gider yüzdesinden uzak durur, bunun yerine mütevellilerden hayır kuruluşunun hedeflere karşı neyi başardığını raporlamalarını ister — [yararlanıcı başına maliyet](../yararlanıcı-başına-maliyet/) bölümünde tartışılan SORP raporlama şartlarına bakın.

## Matematik

```
Genel gider oranı = (İdari maliyet + Bağış toplama maliyeti) / Toplam harcama

Yaygın varyantlar:
  Program oranı           = Program (doğrudan hayırsever) harcaması / Toplam harcama
                          = 1 − genel gider oranı
  Bağış toplama verimliliği = Bağış toplama maliyeti / Toplanan fonlar
```

Bu formüllerin hiçbiri elde edilen sonuçlar hakkında bilgi içermez. Bir hayır kuruluşu bunların her birini en aza indirebilir ve yine de her yararlanıcıyı başarısızlığa uğratabilir; paranın işe yarayıp yaramadığıyla gerçekten ilgilenen metrik için bkz. [sonuç başına maliyet](../sonuç-başına-maliyet/).

## Çalışılmış örnek

Aynı toplam harcamaya sahip iki hayır kuruluşu:

- **Hayır kuruluşu A**: 1.000.000 £ toplam harcama, 80.000 £ idari + bağış toplama → %8 genel gider oranı. İzleme ve değerlendirme işlevi yok, fazla yüklenmiş bir mali memur var ve vaka yönetim sistemi yok; personel devri yüksek ve sonuç verisi toplanmıyor.
- **Hayır kuruluşu B**: 1.000.000 £ toplam harcama, 220.000 £ idari + bağış toplama → %22 genel gider oranı. Küçük bir değerlendirme ekibini, sonuç takibini yakalayan bir vaka yönetim sistemini ve düzgün koruma eğitimini finanse eder.

Yalnızca genel gider oranına göre eleme yapan bir bağışçı A'yı seçer ve B'yi reddeder — [sonuç başına maliyet](../sonuç-başına-maliyet/) kanıtının muhtemelen göstereceğinin tersi; çünkü B, ikisinden gerçek sonuçlarını gösterebilecek veya iyileştirebilecek konumda olan tek kuruluştur.

## Yazılım mühendisliği bağlantısı

Sektör için finans ve hibe raporlama yazılımı, düzenleyiciler ve bazı fon sağlayıcılar yasal beyannamelerde bunu hâlâ gerektirdiği için, çoğu zaman genel gider/program ayrımını her maliyet satırında kategorik bir alan olarak sabit kodlar. Bu sistemleri geliştiren mühendisler, bu şartı bir uyum yükümlülüğü olarak ele almalı, genel gider oranının bir gösterge panelinde öne çıkarılmaya değer metrik olduğunu gösteren bir tasarım sinyali olarak değil; gösterildiği her yerde onu sonuç temelli bir metrikle eşleştirin, böylece bir izleyici genel gider oranını tek başına okuyamaz. Yanında yer alması gereken metrik için bkz. [bağışçı yatırım getirisi](../bağışçı-yatırım-getirisi/); tek oranlı verimlilik vekillerine karşı kamu sektörü eşdeğer argümanı için ise [paranın karşılığı](../paranın-karşılığı/).

## Tuzaklar

- **Genel gider oranını bir eleme eşiği olarak kullanmak.** Keyfî bir eşiğin üzerindeki herhangi bir hayır kuruluşunu (örn. "en fazla %15 genel gider") reddetmek, düzgün kaynaklandırılmış, iyi değerlendirilmiş kuruluşları sistematik olarak cezalandırır ve yetersiz yatırımı ödüllendirir.
- **Doğrudan teslimat maliyetini genel gider olarak yanlış kategorize etmek**, ya da tersi — neyin "program" ve neyin "idari" sayıldığına dair muhasebe kuralları hayır kuruluşları arasında oranların nominal değerde karşılaştırılamayacağı kadar değişir.
- **Düşük genel giderin yüksek etki anlamına geldiğini varsaymak.** İkisi en iyi ihtimalle ilişkisizdir; 2013 Overhead Myth mektubunun temel iddiasına bakın.
- **Bazı meşru stratejilerin daha yüksek kısa vadeli genel gider gerektirdiğini göz ardı etmek.** Bir kapasite geliştirme veya kurumsal gelişim aşaması, sonraki teslimatı iyileştirmek için idari harcamayı kasıtlı olarak artırır.

## Kaynaklar

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
