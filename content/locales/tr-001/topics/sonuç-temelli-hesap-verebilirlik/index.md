# Sonuç Temelli Hesap Verebilirlik (OBA)

Sonuç Temelli Hesap Verebilirlik (Outcomes-Based Accountability), diğer adıyla Sonuç Odaklı Hesap Verebilirlik (RBA), Mark Friedman'ın kamu sektörü raporlamasının alışkanlıkla birbirine karıştırdığı iki soruyu ayırma çerçevesidir: "nüfus iyi durumda mı?" (nüfus hesap verebilirliği) ve "bu belirli program iyi gidiyor mu?" (performans hesap verebilirliği). Friedman'ın anlatımıyla, ikisini karıştırmak, iyi yönetilen programların hareket ettirme gücüne hiç sahip olmadıkları nüfus eğilimleri için suçlanmasının en yaygın tek nedenidir.

## Neden önemli

Friedman çerçeveyi *Trying Hard Is Not Good Enough* (2005) kitabında ortaya koyarak, çoğu kamu raporlamasının karar vericileri ya hiçbir tek kurumun kontrol etmediği nüfus düzeyindeki istatistiklerde (genç gebelik oranı, işsizlik oranı, yaşam beklentisi) ya da kimsenin hayatının düzelip düzelmediği hakkında hiçbir şey söylemeyen program düzeyindeki faaliyet sayılarında (görülen müşteriler, yapılan sevkler) boğduğunu savunur. RBA'nın katkısı, ikisini ayrı tutan küçük, disiplinli bir sözlüktür: nüfus sonuçları (bütün bir nüfus için refah koşulları, örneğin "çocuklar sağlıklı doğar") tek bir kuruma ait değildir ve birlikte hareket eden birçok ortak gerektirir; performans ölçüleri (belirli bir programın belirli müşterilerine ne kadar iyi hizmet verdiği) tek bir kuruma aittir ve yalnızca o kurumun gerçekten etkileyebileceği şeye göre yargılanmalıdır. Friedman'ın "üç performans sorusu" — ne kadar yaptık, ne kadar iyi yaptık ve herhangi biri daha iyi durumda mı? — artık ABD eyalet ve ilçe insan hizmetleri sözleşmeciliğinde yerleşiktir ve RBA ile uyumlu danışmanlık ve araç seti Clear Impact aracılığıyla Birleşik Krallık ve Commonwealth yerel yönetim komisyonculuğunda yaygın olarak kullanılır. Pratik riskler sözleşmeseldir: bir konut programı, şehrin evsizlik oranı erişiminin dışındaki makroekonomik nedenlerle arttığı için fonu kesilmemelidir, ancak kendi müşterileri barındırılmıyorsa kesinlikle fonu kesilmelidir.

## Matematik

```
Nüfus hesap verebilirliği (bir topluluğun, bölgenin veya ulusun paylaştığı "büyük resim"):
  Sonuç        — bir refah koşulu (örn. "sakinler ekonomik olarak güvende")
  Gösterge(ler) — o koşulun bir ölçüsü (örn. işsizlik oranı, medyan hanehalkı geliri)
  → hiçbir tek program göstergeye sahip değildir; hareket birçok katkıda bulunan gerektirir

Performans hesap verebilirliği (bir programın sorumlu olduğu şey):
  Ne kadar yaptık?        — faaliyet hacmi (hizmet verilen müşteriler, teslim edilen birimler)
  Ne kadar iyi yaptık?    — kalite/verimlilik (programı tamamlayanların %'si, müşteri başına maliyet)
  Biri daha iyi durumda mı? — önemli olan sonuç (programdan 6 ay sonra istihdamdakilerin %'si,
                              önce/sonra veya bir karşılaştırma grubuna karşı)

Bir program üçüncü performans sorusuna göre yargılanır; ölçeği ve tasarımı onu tek başına
hareket ettirebilecek kadar makul olmadıkça, nüfus göstergesine doğrudan göre asla yargılanmaz.
```

## Çalışılmış örnek

**Şehir tarafından finanse edilen istihdam destek programı**, yılda 500 katılımcı, bir yerel yönetim tarafından RBA tarzı bir performans çerçevesi altında sözleşmeye bağlanmış:

```
Nüfus göstergesi (bağlam, programın puan kartı değil):
  Şehir işsizlik oranı: %6,2 (önceki yıl %5,8, programın kontrolü dışındaki bir
  fabrika kapanışıyla yönlendirilmiş)

Performans ölçüleri (programın gerçek hesap verebilirliği):
  Ne kadar:    500 katılımcı kayıt oldu (hedef 480) — karşılandı
  Ne kadar iyi: %78 tamamlama oranı; tamamlayan başına maliyet = 340.000 £ / 390 tamamlayan ≈ 872 £
  Daha iyi durumda: 390 tamamlayandan 260'ı 6. ayda sürdürülebilir istihdamda = %66,7
              eşleştirilmiş bir karşılaştırma grubunun %41'ine karşı (bkz. counterfactual-analysis)
```

Bir nüfus hesap verebilirliği okumasına göre program başarısız görünüyor — şehrin işsizlik oranı onun gözetiminde yükseldi. RBA'nın performans hesap verebilirliği okumasına göre ise program başarılı: hacim hedefini tuttu, kaliteyi sabit tuttu ve eşleştirilmiş bir karşılaştırma grubunun 25,7 yüzde puan üzerinde bir istihdam sonucu üretti; nüfus göstergesi ise programın kontrolünün tamamen dışındaki nedenlerle (bir fabrika kapanışı) hareket etti.

## Yazılım mühendisliği bağlantısı

RBA, tanıdık bir SRE ayrımına doğrudan eşlenir: nüfus göstergeleri hiçbir tek mühendislik ekibinin baştan sona sahip olmadığı iş düzeyindeki Kuzey Yıldızı metriklerine (şirket geliri, pazar payı) benzer; performans ölçüleri ise bir ekibin kendi SLO'ları gibidir — o ekibin tasarım kararlarının gerçekten hareket ettirdiği şeyler. İkisini hangisinin hangisi olduğunu etiketlemeden raporlayan bir gösterge paneli, RBA'nın önlemek için kurulduğu yanlış atfı tam olarak davet eder: bir bağımlı ekibin kontrol ettiği bir metrik için suçlanan nöbetçi bir mühendis. Sonuç sözleşmeleri için raporlama araçlarını görevlendirirken veya geliştirirken, "ne kadar / ne kadar iyi / daha iyi durumda" üçlüsünü tek bir harmanlanmış KPI yerine birinci sınıf, ayrı süzülebilir alanlar olarak oluşturun — bu, [kamu sektörü KPI'ları](../kamu-sektörü-kpıları/)nda öncü ve gecikmeli göstergeleri ayırmakla aynı disiplindir. RBA aynı zamanda [sonuca göre ödeme ve sosyal etki tahvilleri](../sonuca-göre-ödeme-ve-sosyal-etki-tahvilleri/)nin altındaki hesap verebilirlik mantığıdır: bir PbR sözleşmesi, müdahale gerçekten onun baskın itici gücü olmadıkça, yalnızca "daha iyi durumda" performans ölçüsüne göre adil biçimde ödeme yapabilir, nüfus göstergesine göre asla.

## Tuzaklar

- **Bir programı kontrol edemediği bir nüfus göstergesine karşı ödüllendirmek veya cezalandırmak**: RBA'nın önlemek için var olduğu tek hata budur; sonuç bağlamadan önce programın nüfus sonucuna büyük mü yoksa küçük bir katkıda bulunan mı olduğunu her zaman izleyin.
- **"Ne kadar"ı "daha iyi durumda" gibi raporlamak**: faaliyet sayıları (görülen müşteriler) toplanması en kolay ve en az bilgilendirici veridir; "biri daha iyi durumda mı" sorusunun gerçek sonuç verisiyle, ideal olarak bir karşı olgusala karşı yanıtlanmasında ısrar edin (bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/)).
- **RBA göstergelerini sonsuza dek sabit saymak**: Friedman'ın yöntemi açıkça yinelemelidir — bir "veri, hikâye, ne işe yarar, eylem planı" döngüsü — tek seferlik bir puan kartı tasarım egzersizi değil.
- **"Daha iyi durumda" için karşılaştırma grubu olmaması**: bir karşı olgusalı olmayan önce/sonra değişimi, program etkisini nüfusun zaten göstereceği eğilimle karıştırır.

## Kaynaklar

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
