# Kamu Değeri Puan Kartı

Kamu değeri puan kartı, Robert Kaplan ve David Norton'un 1992 tarihli dengeli puan kartını — finansal, müşteri, iç süreç ve öğrenme-büyüme perspektiflerinde kârı optimize eden şirketler için geliştirilmiş — alt çizgisi bir marj değil bir misyon olan kuruluşlara uyarlar. Bir kamu kurumunu, takasları gizleyen tek bir sayıya her şeyi indirgemek yerine, aynı anda birkaç indirgenemez boyutta performans raporlamaya zorlar.

## Neden önemli

Kaplan ve Norton'un Harvard Business Review'daki özgün argümanı, tek bir finansal metriğin gecikmeli bir gösterge olduğu ve gelecek çeyrekte performansın *neden* değişeceği hakkında hiçbir şey söylemediğiydi. Özel sektörde çözüm dört bağlantılı perspektifti. Hükümette Mark Moore'un "stratejik üçgeni" (*Creating Public Value*, 1995'ten) eşdeğer yapıyı sağlar: bir hizmet aynı anda **kamu değeri** (misyon sonucu) sunmalı, **meşruiyet ve destek** (siyasi ve kamusal destek) sürdürmeli ve **operasyonel olarak uygulanabilir** (gerçekten mevcut kaynak ve yetenekle teslim edilebilir) olmalıdır. Paul Niven'in *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) kitabı, Kaplan ve Norton'un dört kutusunu bu üçgene çevirmek için uygulayıcının el kitabıdır — tipik olarak "finansal"ı "kaynakların yönetimi" olarak yeniden etiketler, "hissedar değeri"ni altta değil "misyon"u en üstte yerleştirir ve müşteri ve paydaş perspektiflerini kâra tabi olmak yerine eş düzeyde ele alır. Bunun bir teslimat ekibi için önemli olmasının nedeni, yalnızca bir finansal veya verimlilik metriğiyle (örneğin işlem başına maliyet) yargılanan bir kamu dijital hizmetinin, finansal metriğin göremediği meşruiyet ve sonuç boyutlarına sistematik olarak yetersiz yatırım yapmasıdır.

## Matematik

Kamu değeri puan kartı bir formül değil bir çerçevedir, ancak yapısı sabittir ve tam olarak yeniden üretilmeye değerdir:

```
Perspektif             Kamu sektörü sorusu                        Örnek gösterge
--------------------------------------------------------------------------------
Misyon / sonuçlar       Var olma amacımız olan kamu değerini       Nüfus sonuç ölçüsü
                        yaratıyor muyuz?                           (bkz. outcomes-vs-outputs)
Kaynakların yönetimi    Kamu parasını verimli ve yetkili           Sonuç başına maliyet,
                        sınırlar içinde mi kullanıyoruz?           bütçe sapması
Müşteri / kullanıcı     Kullanıcılar ve vatandaşlar hizmete        Tamamlama oranı, memnuniyet
                        erişebiliyor ve yararlanabiliyor mu?
Meşruiyet / destek      Siyasi asıllar, denetim kurumları ve       Güven metrikleri, denetim
                        kamuoyu hâlâ arkamızda mı?                 bulguları, kabul edilen şikâyetler
İç süreç / öğrenme      İyileşmeye devam edecek yeteneğe ve        Personel devir hızı, çevrim
                        sürece sahip miyiz?                        süresi, birikmiş iş yaşı

Savunulabilir bir puan kartı, perspektif başına 3–5 gösterge raporlar; öyle seçilmiştir ki
hiçbir perspektif, hasarı başka bir perspektifte görünmeden manipüle edilemesin.
```

## Çalışılmış örnek

**Yerel yönetim yetişkin sosyal bakım dairesi**: bir yeniden güçlendirme hizmeti (bir hastane yatışından sonra insanların bağımsızlıklarını yeniden kazanmalarına yardım eden kısa vadeli destek) için bir puan kartı şunu raporlar:

```
Misyon:        hizmet kullanıcılarının %68'i 6 hafta sonra sürekli bakıma ihtiyaç duymuyor (hedef %65)
Yönetim:       tamamlanan yeniden güçlendirme dönemi başına maliyet = 1.850 £ (bütçe varsayımı 2.000 £)
Müşteri:       kullanıcı memnuniyeti %82, hizmetin başlaması için ortalama bekleme 4,1 gün
Meşruiyet:     1.000 dönem başına 3 kabul edilen şikâyet; yetişkin koruma kurulu hizmeti "iyi"
               olarak değerlendiriyor
Süreç:         personel açık oranı %14, ortalama vaka yükü 23 (güvenli vaka yükü tavanı: 25)
```

Tek başına okunduğunda, misyon ve yönetim sayıları basit bir başarı hikâyesi gibi görünür: bütçenin altında ve sonuç hedefinin üzerinde. Süreç satırıyla birlikte okunduğunda, 25'lik bir vaka yükü tavanına karşı %14'lük açık oranı, iyi sonucun güvensiz personel düzeylerine yakın çalışılarak satın alındığını gösterir — misyon sayısının tek başına asla ortaya çıkarmayacağı bir uyarı ve tek perspektifli bir KPI'nın (bkz. [kamu sektörü KPI'ları](../kamu-sektörü-kpıları/)) davet ettiği tam başarısızlık biçimi.

## Yazılım mühendisliği bağlantısı

İç veya halka yönelik bir gösterge paneli geliştiren bir ekip için puan kartı, tek bir "sağlık puanı" widget'ına karşı doğrudan bir argümandır: perspektif başına bir panel oluşturun ve bunları bir trafik ışığında sentezlemek için ürün baskısına direnin, çünkü sentez adımı tam olarak takas bilgisinin yok edildiği yerdir. Aynı zamanda ürün ekibi OKR yapılarına temiz biçimde eşlenir: eşleştirilmiş bir yönetim veya süreç OKR'ı olmayan bir misyon OKR'ı, Kaplan ve Norton'un 1992'de karşı yazdığı tek metrik başarısızlık biçimini yeniden üretir. "Misyon" kutusunun gerçekte ne içermesi gerektiğine dair Moore'un altta yatan kuramı için bkz. [kamu değeri](../kamu-değeri/); meşruiyet perspektifini kimsenin savunamayacağı bir vekille değil, gerçek, kaynaklı göstergelerle doldurmak için [güven ve meşruiyet metrikleri](../güven-ve-meşruiyet-metrikleri/).

## Tuzaklar

- **Puan kartını tek bir puana indirgemek**: dört perspektifin ortalamasını tek bir sayıya almak, puan kartının önlemek için var olduğu tam sorunu yeniden getirir — iyi bir yönetim puanıyla maskelenen kötü bir meşruiyet puanı.
- **Özel sektör "finansal" perspektifini değiştirmeden kopyalamak**: bir kamu kurumunun yönetim perspektifi, gelir maksimizasyonu değil, yetkili, çoğu zaman ayrılmış bütçeler içinde kalmaktır — Niven'in yeniden etiketlemesi kozmetik değildir.
- **Puan kartına sahip ekibin tek taraflı olarak oynatabileceği göstergeleri seçmek**: yargıladığı ekipten kaynaklanan bir meşruiyet göstergesi (örneğin öz bildirimli şikâyet yönetimi) bağımsız kanıt değildir.
- **Puan kartını bir kez oluşturup ağırlıkları veya göstergeleri bir daha gözden geçirmemek**: Kaplan ve Norton yıllık bir strateji gözden geçirmesi amaçlamıştır; yıllarca donmuş bir puan kartı, izlemek için kurulduğu misyondan sapar.

## Kaynaklar

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
