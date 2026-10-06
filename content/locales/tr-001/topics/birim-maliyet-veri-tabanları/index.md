# Birim Maliyet Veri Tabanları

Birim maliyet veri tabanı, sosyal sonuçlar için önceden araştırılmış, kanıta dayalı finansal vekillerden oluşan bir kütüphanedir — işsizlikten istihdama geçmenin, azalan yalnızlığın, istikrarlı bir kiracılığın değeri — ve bir uygulayıcının her seferinde özel değerleme araştırması görevlendirmeden bir sonucu parasallaştırmasına olanak tanır. Küçük bir hayır kuruluşunun bir finansman teklifi yazarken, bir başkasının zaten türetip yayımladığı bir vekili yeniden kullanarak iyi kaynaklara sahip bir danışmanlık şirketiyle aynı titizliği uygulayabilmesi için vardırlar.

## Neden önemli

Ekonomist Daniel Fujiwara ile refah değerleme yöntemleri kullanılarak geliştirilen HACT'in Birleşik Krallık Sosyal Değer Bankası ve açık, kitle kaynaklı bir finansal vekil veri tabanı olan Global Value Exchange, Birleşik Krallık üçüncü ve kamu sektörlerinde en yaygın kullanılan ikisidir. İkisi de vardır çünkü altta yatan değerleme çalışması — [refah değerlemesi](../refah-değerlemesi/) ve [beyan edilen tercih değerlemesi](../beyan-edilen-tercih-değerlemesi/) — her proje için sıfırdan yürütülmesi pahalı, metodolojik olarak talepkâr ve yavaştır. Paylaşılan, yayımlanmış bir vekil kütüphanesi, aylar sürecek bir araştırma çalışmasını bir aramaya dönüştürür; bu, hem [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) hesaplamaları hem de [Sosyal Değer Yasası](../sosyal-değer-yasası/) teklif değerlendirmeleri için önemli olmalarının tam nedenidir: onlar olmadan titiz parasallaştırma yalnızca kendi çalışmalarını görevlendirecek kadar büyük kuruluşlar için karşılanabilir olurdu.

## Matematik

Bir birim maliyet veri tabanı kendi başına hiçbir şey hesaplamaz; başka bir yerde yapılan bir hesaplamaya bir girdi sağlar:

```
Finansal vekil değeri = piyasa fiyatı, VEYA gölge fiyat, VEYA refah değerlemesi,
                        VEYA beyan edilen tercih değeri
                        tanımlanmış bir sonuç değişim birimi için
                        (örn. "işsizlikten istihdama geçen kişi başına, yıllık")

Uygulanan değer = elde edilen sonuç sayısı × birim vekil değeri
```

Hiçbir piyasa fiyatı olmadığında bir vekilin nasıl oluşturulduğu için bkz. [gölge fiyatlama](../gölge-fiyatlama/); uygulanan değerin ölü ağırlık ve atfetme düzeltmelerinden sonra bir orana nasıl beslendiği için ise [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/).

## Çalışılmış örnek

**Hayır kuruluşu (dostluk hizmeti SROI'si)**: "yalnızlıkta azalma" için bir birim maliyet veri tabanı girdisi, kişi başına yılda 1.100 £'luk açıklayıcı bir vekil verir. 80 yararlanıcıya uygulandığında: 80 × 1.100 £ = 88.000 £ brüt değer. Aynı veri tabanında örtüşen bir refah anketi öğesinden yararlanan "geliştirilmiş ruhsal refah" için de bir vekil varsa, her iki vekili aynı 80 kişi için üst üste koymak, aynı altta yatan değişimin bir kısmını iki kez sayardı — veri tabanı sayıyı sağlar, ancak bu örtüşmeden kaçınmak analistin sorumluluğudur.

**Yerel yönetim (iş kulübü SROI'si)**: "işsizlikten sürdürülebilir istihdama geçiş" için bir birim maliyet veri tabanı girdisi, kişi başına yılda 8.500 £'luk açıklayıcı bir vekille 45 katılımcıya uygulanır: 45 × 8.500 £ = 382.500 £ brüt değer; [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) bölümünde gösterilen ölü ağırlık ve atfetme düzeltmelerinden önce.

## Yazılım mühendisliği bağlantısı

Hayır kuruluşları veya komisyoncular için raporlama araçları geliştiren ekipler, dâhili bir "sonuç kataloğundan" yararlanır — bir ürün veya hizmetin makul biçimde iddia edebileceği her sonucu adlandırılmış bir vekile, kaynak veri tabanına, yayın tarihine ve bir sürüm tanımlayıcısına eşleyen bir tablo — böylece bir kuruluşun farklı ekipleri aynı sonuç için biraz farklı değerler seçmez. Global Value Exchange'in açık verilerini, kaynağı ve tarihi her zaman rakamın yanında gösterilen bir arama hizmetinin arkasına sarmak, vekili bir elektronik tabloya gömülü sihirli bir sayı yerine denetlenebilir tutar. Bu vekillerin tüketildiği iki ana yer için bkz. [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) ve [sosyal değer yasası](../sosyal-değer-yasası/).

## Tuzaklar

- **Vekilleri kesin saymak.** Yayımlanmış vekillerin çoğu, geniş güven aralıklarına sahip refah değerleme çalışmalarından modellenmiş ortalamalardır; birini sterline kadar alıntılamak, altta yatan araştırmanın desteklediği kesinliği olduğundan yüksek gösterir.
- **Örtüşen vekilleri iki kez saymak.** Örtüşen anket yapılarından türetilmiş vekilleri (örn. "azalan yalnızlık" ve "geliştirilmiş ruhsal refah") birleştirmek, aynı altta yatan değişimi iki kez değerler.
- **Bağlam dışı bir vekili düzeltme yapmadan kullanmak.** Bir ulusal nüfus ve yılda kalibre edilmiş bir vekili, enflasyon veya bağlam düzeltmesi olmadan başka bir yerde uygulamak, değeri sessizce yanlış gösterir.
- **Kökeni kontrol etmemek.** Global Value Exchange açık ve kitle kaynaklıdır, dolayısıyla girdi kalitesi katkıda bulunana göre değişir; bir finansman teklifinde veya satın alma sunumunda bir rakam alıntılamadan önce altta yatan kaynağı kontrol edin.

## Kaynaklar

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
