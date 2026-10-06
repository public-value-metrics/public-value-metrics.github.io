# Gönüllü Zaman Değeri

Gönüllü zaman değeri, ücretsiz emeğe atfedilen parasal tahmindir; çoğu zaman bir hayır kuruluşunun gerçek ekonomik ayak izini — hesapları artı ödemek zorunda kalmadığı emek — belirtmek veya belirli bir müdahalenin yalnızca nakit bütçesinin önerdiğinden daha maliyet-etkin olduğunu savunmak için kullanılır. İki ulusal metodoloji hâkimdir: Amerika Birleşik Devletleri'nin Independent Sector tahmini ve Birleşik Krallık'ın Ulusal İstatistik Ofisi / NCVO yaklaşımı; ve aynı emek saatini oldukça farklı fiyatlarlar.

## Neden önemli

Independent Sector, Maryland Üniversitesi Do Good Institute ile çalışarak her yıl ulusal bir saatlik gönüllü zaman değeri yayımlar; bu değer Bureau of Labor Statistics ücret verilerinden — özellikle özel tarım dışı bordrolardaki üretim ve gözetimsel olmayan çalışanların ortalama saatlik kazancı, artı bir yan hak ayarlaması — oluşturulur ve ABD eyaletlerine göre ayrıştırılır. En son yayını, değeri bir önceki yıla göre %3,9 artışla **2025 için saat başına 36,14 $** olarak belirledi; eyalet düzeyindeki değerler Washington, DC'de 50 $'ın üzerinden Porto Riko'da 20 $'ın altına uzanıyor. Birleşik Krallık'ta Ulusal İstatistik Ofisi, resmî gönüllülüğün ikame maliyetini ayrıca **saat başına 14,43 £** (2017 tahmini) olarak tahmin etmiştir ve NCVO'nun UK Civil Society Almanac 2024'ü, gönüllülük katılım verilerini — 2021–22'de resmî olarak gönüllü olan yaklaşık 14,2 milyon kişi — kullanarak sektörün toplam gönüllülük katkısını kabaca **18 milyar £**, yani Birleşik Krallık GSYH'sinin yaklaşık %0,8'i olarak tahmin eder.

Bunun muhasebe kozmetiğinin ötesinde önemli olmasının nedeni: gönüllü emeğe ağır biçimde dayanan bir program, saf nakit [sonuç başına maliyet](../sonuç-başına-maliyet/) temelinde, gerçek kaynak maliyeti — o emeği değiştirmenin maliyeti — benzer veya daha yüksek olsa bile, ücretli personele dayananlardan dramatik biçimde daha ucuz görünebilir. Gönüllü zaman değerini göz ardı eden fon sağlayıcılar ve değerlendiriciler, gönüllü ağırlıklı teslimat modellerinin gerçek maliyetini sistematik olarak olduğundan düşük sayar; bu da aynı sonucu sunan ücretli personel modellerine karşı verimlilik karşılaştırmalarını çarpıtır.

## Matematik

```
Gönüllü zamanın değeri = Katkıda bulunulan gönüllü saatleri × saatlik oran

Oran seçimi önemlidir ve yanıtı değiştirir:
  - İkame maliyeti yaklaşımı: aynı görevi yapacak ücretli bir çalışanın ücreti
    (örn. genel bir ortalama ücret değil, nitelikli bir gençlik çalışanı için
    ikame maliyeti oranı) — göreve özgü değerleme için en savunulabilir
  - Fırsat maliyeti yaklaşımı: gönüllünün kendi vazgeçtiği ücret — gönüllünün
    neden vazgeçtiğini değerlemek için en savunulabilir
  - Ulusal ortalama yaklaşımı: Independent Sector'ün veya ONS'in tek harmanlanmış
    oranı — manşet, sektörler arası karşılaştırılabilirlik için en savunulabilir
```

Üç yaklaşım aynı saat için büyük bir kat kadar farklılaşabilir (mütevelli kurulu üyesi olarak gönüllü olan bir avukatın fırsat maliyeti oranı, ulusal ortalama orandan çok farklıdır), dolayısıyla raporlanan herhangi bir rakam hangi yöntemin onu ürettiğini belirtmelidir.

## Çalışılmış örnek

**Birleşik Krallık hayır kuruluşu, ulusal ortalama yaklaşımı**: bir yılda 5.000 gönüllü saati, saat başına 14,43 £ ile değerlenmiş (ONS ikame maliyeti tahmini):

```
Değer = 5.000 × 14,43 £ = 72.150 £
```

Hayır kuruluşunun o yılki nakit harcaması 300.000 £ ise, gerçek kaynak maliyeti — nakit artı gönüllü emek — 372.150 £'dur; yalnızca nakit rakamının önerdiğinden kabaca %24 daha yüksek. Yalnızca 300.000 £'luk nakit rakamını kullanan bir sonuç başına maliyet hesaplaması, gerçek maliyeti aynı marjla olduğundan düşük gösterir.

**ABD hayır kuruluşu, ulusal ortalama yaklaşımı**: saat başına 36,14 $ ile değerlenmiş 2.000 gönüllü saati (Independent Sector, 2025 yayını):

```
Değer = 2.000 × 36,14 $ = 72.280 $
```

**Aynı ABD hayır kuruluşu, fırsat maliyeti yaklaşımı**: gönüllüler orantısız biçimde önceki kazançları ortalama saatte 60 $ olan emekli profesyonellerse, fırsat maliyeti değerlemesi 120.000 $ olurdu — ulusal ortalama rakamdan üçte iki daha yüksek; yöntemin neden belirtilmesi gerektiğini gösterir.

## Yazılım mühendisliği bağlantısı

Gönüllü saatlerini günlüğe kaydeden sistemler (vardiya planlama araçları, gönüllü yönetim platformları) saatleri yalnızca bir toplam olarak değil görev veya rol düzeyinde yakalamalıdır; böylece karma bir gönüllü iş gücü genelinde tek bir genel ulusal ortalama oran yerine, rol başına bir ikame maliyeti oranı uygulanabilir (bir mütevellinin saati ile bir görevlendirme saati ekonomik olarak eşdeğer değildir). Kullanılan oranı ve metodolojiyi, yalnızca nihai para birimi rakamını değil, hesaplanan değerin yanında saklamak, aşağı akış raporlamasının (yıllık hesaplar, [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) hesaplamaları, fon sağlayıcı raporları) sayıyı opak bir sabit olarak ele almak yerine daha sonra yeniden üretmesine veya sorgulamasına olanak tanır. Gönüllü zaman değerini atlamanın gerçek teslimat maliyetini neden sistematik olarak olduğundan düşük gösterdiği için bkz. [sonuç başına maliyet](../sonuç-başına-maliyet/).

## Tuzaklar

- **Yapısal olarak farklı roller için tek bir genel oran kullanmak.** Profesyonel bir pro bono saatine (hukuki, finansal, klinik) uygulanan ulusal ortalama bir ücret oranı onu kökten olduğundan düşük değerler; görev nitelikliyse oranı değiştirilen role eşleyin.
- **Ücretli personel maliyetine karşı çift sayım.** Gönüllüler aksi hâlde ücretli olacak işin yerini tutuyorsa, değerlemenin zaten şişirilmiş bir personel tahmininin üzerine bindirilmek yerine nakit harcamaya eklemeli olduğundan emin olun.
- **Tarihsiz eski bir oranı alıntılamak.** Independent Sector ve ONS oranları yıllık olarak değişir (veya ONS örneğinde yalnızca periyodik olarak yeniden tahmin edilir); bir raporda tarihsiz bir gönüllü zaman rakamı karşılaştırma için neredeyse anlamsızdır.
- **Gönüllü zaman değerini bir bağış toplama varlığı olarak ele almak.** Bu, gerçek kaynak maliyetini anlamak için bir maliyet muhasebesi ayarlamasıdır, bir hayır kuruluşunun harcayabileceği yeni para değil; ikisini karıştırmak hesapları okuyan bir kurulu yanıltır.

## Kaynaklar

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
