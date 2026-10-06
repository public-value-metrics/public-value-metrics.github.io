# Yer Değiştirme ve Atfetme

Yer değiştirme (displacement), bir programın görünürdeki faydasının yeni bir şey yaratmak yerine başka bir yerden faaliyet veya fayda alınarak elde edilmesi durumunda ortaya çıkar — sizin kazancınız bir başkasının kaybıdır. Atfetme (attribution) ise başka aktörler ve etkenler de katkıda bulunduğunda, gözlenen bir sonucun ne kadarının gerçekten sizin müdahalenize atfedilebileceği sorusudur. Her ikisi de ölü ağırlık ve sızıntıyla birlikte Birleşik Krallık kamu sektörü değerlendirme rehberliğinde standart düzeltmelerdir ve her ikisi de olduğundan çok daha güçlü görünen etki iddialarında rutin olarak atlanır.

## Neden önemli

50 dükkânın bir yenileme bölgesine taşınmasına yardım eden bir yerel yönetim işletme hibe programı "50 işletme desteklendi, 200 iş yaratıldı" diye bildirebilir; ancak bu işletmeler genişlemek yerine komşu bir ana caddeden taşındıysa, işler yaratılmamış, yer değiştirmiştir ve ilçe genelindeki (veya bölge genelindeki) net etki sıfıra yakın olabilir. HM Treasury'nin Magenta Book'u ve uzun süredir var olan Additionality Guide, yer değiştirmeyi gerekli bir kesinti olarak ele alır; çünkü yerel başarı hikâyeleri, hiçbir net ulusal veya bölgesel fayda üretmeseler bile yaygındır — değer yalnızca yer değiştirmiştir ve çoğu zaman onu kaybeden alan veya aktörlerin zararınadır. Yapısal fonlar değerlendirme rehberliği (eski AB Bölgesel Kalkınma Fonu programları ve UK Shared Prosperity Fund gibi yurt içi halefleri için kullanılan) bunu üç mekânsal ölçekte resmîleştirir: yerel yer değiştirme (bir kasaba içinde), bölgesel yer değiştirme (bir bölge içinde) ve ulusal yer değiştirme (Birleşik Krallık genelinde); çünkü bir müdahale bir ölçekte ek katkı sağlarken daha geniş bir ölçekte salt yer değiştirme olabilir — komşu kasabadan işçi çeken bir istihdam programı yerel bir başarı gibi görünse de ulusal olarak nötrdür.

Atfetme, artık sosyal sektör ve kurumlar arası kamu hizmeti çalışmalarında norm olan, ortaklık ağırlıklı teslimatta kardeş sorundur. Üç kuruluş birlikte bir evsizliği önleme hizmeti sunduğunda, her kuruluşun yıllık raporu sokakta uyuyanlardaki aynı azalma için bağımsız olarak pay talep edebilir — raporlar arasında toplandığında, iddia edilen etki gözlenen gerçek dünya değişimini, bazen birkaç kat aşabilir. Magenta Book'un katkı analizi rehberliği tam da bu nedenle vardır: çok kurumlu teslimatta tek bir aktöre rastgele atfetme çoğu zaman imkânsızdır ve dürüst yanıt çoğu zaman "bu sonuca neden olduk" değil, "bu sonuca katkıda bulunduk"tur.

## Matematik

Standart net etki dizisinin bir parçası olarak yer değiştirme (tam zincir için bkz. [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/)):

```
Net ek etki = Brüt sonuç − Ölü ağırlık − Yer değiştirme − Sızıntı, × Çarpan

Yer değiştirme oranı = başka yerden saptırılan fayda/faaliyet
                       / gözlenen toplam brüt fayda/faaliyet
```

Birden fazla aktörün tek bir sonuca katkıda bulunduğu atfetme, genellikle kesin bir yüzde yerine bir katkı payı olarak ifade edilir; çünkü yer değiştirme ile aynı titizlikle ölçülemez:

```
Atfedilebilir pay ≈ f(nedensel katkının gücü, diğer aktörlerin katkıları,
                      dış/bağlamsal etkenler)

İddia edilen etki asla şunu aşmamalıdır:
  Σ (her ortağın atfedilebilir payı) ≤ gözlenen toplam sonucun %100'ü
```

## Çalışılmış örnek

**Yenileme hibesi**: bir belediyenin ana cadde hibe programı, finanse edilen bölgede 200 yeni perakende işi yaratıldığını bildirir. Takip anketi araştırması, bu işlerden 60'ının aynı ilçe içinde komşu, finanse edilmeyen bir ana caddeden taşınan işletmelerden geldiğini ve 30 tanesinin de hibeden bağımsız olarak bölgede bir yerde açılacak olan ulusal zincirlerin şubelerinden geldiğini bulur.

```
İddia edilen brüt iş = 200
Yerel yer değiştirme = 60 (ilçe içinde taşındı)
Bölgesel yer değiştirme = 30 (bölgede zaten açılacaktı)

Net ek iş (ilçe düzeyi) = 200 − 60 = 140
Net ek iş (bölge düzeyi) = 200 − 60 − 30 = 110
```

Dürüst manşet, fon sağlayıcının önem verdiği coğrafi ölçeğe bağlıdır — ulusal veya bölgesel düzeyde değerlendirilen bir Hazine iş gerekçesi, ilçe düzeyindeki 140'ı değil 110'u, kesinlikle de ham 200'ü kullanmalıdır.

**Çok kurumlu evsizlik hizmeti**: üç ortak kuruluş (bir belediye, bir konut hayır kuruluşu ve bir sağlık vakfı), sokakta uyuyanları azaltma hizmetini birlikte sunar. Bölgede sokakta uyuyanlar yıl içinde 30 kişi azaldı. Her kuruluşun kendi yıllık raporu "sokakta uyuyanları 30 azalttık" diye iddia eder — toplandığında üç rapor 90 kişiye yardım edildiğini, yani gerçek azalmanın üç katını iddia eder. Her ortağa bir pay atayan bir katkı analizi (belgelenmiş rol ve bağımsız değerlendirmeye dayanarak, örneğin %40 belediye, %35 hayır kuruluşu, %25 sağlık vakfı) sırasıyla 12, 10,5 ve 7,5 bildirirdi; bu da gözlenen 30'a doğru biçimde toplanır.

## Yazılım mühendisliği bağlantısı

Yer değiştirme ve atfetme, çok siteli veya çok ortaklı teslimat için etki izleme ve sonuç raporlama sistemlerinin nasıl tasarlanması gerektiğini şekillendirir:

- Coğrafi ve kurumsal kapsam, herhangi bir etki gösterge panelinde açık, birinci sınıf alanlar olmalıdır — "ilçe için" bildirilen bir rakam ile "bölge için" bildirilen aynı rakam farklı sayılardır ve bunları karıştıran bir sistem, portföy düzeyinde uzlaştırılamayan sayılar üretir.
- Birden fazla ortak birlikte teslimat yaptığında, bir sonuç sistemi her ortağın raporlama modülünün paylaşılan bir sonucun %100'ünü bağımsız olarak iddia etmesine izin vermek yerine, katkı paylarını kaydetmeli (veya en azından ortak atfetmeyi işaretlemelidir) — aksi hâlde portföy düzeyindeki toplamlar toplam etkiyi, bazen ciddi ölçüde, olduğundan büyük gösterir.
- Bu, [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) ve [hibe sonuç raporlaması](../hibe-sonuç-raporlaması/) ile bağlantılıdır: yer değiştirmeyi göz ardı eden veya paylaşılan sonuçları fazla atfeden bir SROI veya IRIS+ hesaplaması, denetime veya yinelemeye dayanamayan şişirilmiş bir oran üretir.

## Tuzaklar

- **Daha geniş yer değiştirmeyi kontrol etmeden yerel başarıyı bildirmek.** Bir program en küçük raporlama ölçeğinde son derece başarılı görünürken daha geniş bir ölçekte nötr, hatta olumsuz olabilir; net rakamın hangi coğrafi ölçeğe uygulandığını her zaman belirtin.
- **Ortak teslimattaki her ortağın tam pay talep etmesine izin vermek.** Katkı payları üzerinde anlaşılıp belgelenmedikçe, ortaklar arasındaki toplu raporlama toplam etkiyi olduğundan büyük gösterir; ortak düzeyindeki iddiaların toplamının gözlenen toplamı aşmadığını kontrol edin.
- **Gerçekte bir yargı olan atfetmeyi kesin bir yüzde saymak.** Katkı analizi, rastgele bir karşı olgusalın aksine, ölçülmüş bir gerçek değil, savunulabilir bir tahmin üretir; yanlış kesinlik yerine uygun belirsizlikle sunun.
- **Piyasaya yönelik müdahalelerde yer değiştirmeyi göz ardı etmek.** İşletme desteği, istihdam programları ve yer temelli yenileme klasik yüksek yer değiştirmeli kategorilerdir; bunlar için yer değiştirme kontrollerini isteğe bağlı değil, zorunlu sayın.

## Kaynaklar

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
