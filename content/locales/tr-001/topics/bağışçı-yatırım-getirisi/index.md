# Bağışçı Yatırım Getirisi

Bağışçı yatırım getirisi, belirli bir bağışçının sterlininin sonuçlar cinsinden gerçekte neyi satın aldığıdır — hayır kuruluşunun operasyonel oranları değil ve hayır kuruluşunun toplam bütçesi üzerindeki kendi getirisi değil. YG'yi kuruluşun perspektifinden (ne kadar verimli çalışıyoruz) bağışçının perspektifine (marjinal katkım neyi değiştiriyor) yeniden çerçeveler ve bu iki sayı rutin olarak ve yanlış biçimde aynı şeymiş gibi ele alınır.

## Neden önemli

Bir hayır kuruluşunun kendi "YG"si, ifade hiç kullanılıyorsa, genellikle [yararlanıcı başına maliyet](../yararlanıcı-başına-maliyet/) veya [hayır kuruluşu genel gider oranı](../hayır-kuruluşu-genel-gider-oranı/) gibi bir şeyi — kurumsal verimlilik ölçülerini — tarif eder. Bağışçının YG'si tamamen farklı bir sorudur: bu hayır kuruluşunun zaten başka gelirleri olduğu göz önüne alındığında, *bu* bağışçının parası marjinde neyi ekler? Bir hayır kuruluşu belirli bir 10.000 £'luk bağış olsa da olmasa da aynı programı sunacaksa — bol yedek akçesi olduğu için veya başka bir fon sağlayıcı boşluğu dolduracağı için — o bağışın bağışçı YG'si, hayır kuruluşunun genel genel gider oranı veya sonuç başına maliyeti ne kadar iyi görünürse görünsün, sıfıra yakındır.

Bu, Birleşik Krallık kamu harcamasındaki [paranın karşılığı](../paranın-karşılığı/) değerlendirmesinin ve program değerlendirmesindeki [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/)ın altında yatan aynı ek katkı sorusudur: yaratılan değer, bir fon sağlayıcıya ancak zaten gerçekleşmeyecek olduğu ölçüde atfedilebilir. Büyük bağışçı tavsiyeli platformlar ve etkili bağış kuruluşları (Giving What We Can, GiveWell) önerilerini açıkça bu ayrım etrafında oluşturur ve "bu iyi bir hayır kuruluşu mu" değil, "bu hayır kuruluşunun, benim bağışımın ek olacağı şekilde daha fazla finansman için doldurulmamış yeri var mı" diye sorar.

## Matematik

```
Bağışçı YG'si ≠ Hayır kuruluşunun operasyonel verimliliği

Bağışçı YG'si  ≈  (Bağışla elde edilen sonuç) − (Bağış olmadan gerçekleşecek
                   sonuç, yani karşı olgusal)
                 ─────────────────────────────────────────────────
                                   Bağışın büyüklüğü

Temel girdiler:
  - Daha fazla finansman için yer (hayır kuruluşu marjinde finansman kısıtlı mı?)
  - Funging (başka bir bağışçı boşluğu doldurur muydu?)
  - Belirli finansman düzeyindeki marjinal maliyet-etkililik (maliyetler,
    bir müdahale ulaşılması en kolay nüfusunu aştıkça genellikle artar)
```

GiveWell'in "daha fazla finansman için yer" sorusunu nasıl operasyonelleştirdiği için bkz. [etkili özgecilik maliyet-etkililiği](../etkili-özgecilik-maliyet-etkililiği/); genel yöntem için ise [karşı olgusal analiz](../karşı-olgusal-analiz/).

## Çalışılmış örnek

Bir bağışçı iki 5.000 £'luk bağış arasında seçim yapıyor:

- **Hayır kuruluşu C**: 2 milyon £ yedek akçeli ve bir fon sağlayıcı bekleme listeli, tam finanse edilmiş bir çekirdek programa sahip; marjinal 5.000 £ büyük olasılıkla yedek akçelere veya daha düşük öncelikli bir faaliyete eklenir. Tahmini bağışçı-ek sonuç: asgari — para, olanları açıkça değiştirmiyor.
- **Hayır kuruluşu D**: ek 50.000 £ olmadan gelecek çeyrekte 200 kişiyi geri çevirmek zorunda kalacağını kamuoyuna açıklamış ve bunun 42.000 £'sını toplamış, küçük, kanıta dayalı bir program. Marjinal 5.000 £ çok büyük olasılıkla gerçek ek teslimatı finanse eder — diyelim ki hayır kuruluşunun kendi belirttiği yararlanıcı başına 250 £ maliyetle hizmet verilen 20 ek kişi.

Aynı bağış büyüklüğü, aynı bağışçı, kökten farklı bağışçı YG'si — Hayır kuruluşu C daha kötü bir kuruluş olduğu için değil (genel olarak daha iyi bir sonuç başına maliyet rakamına sahip olabilir), marjinal finansman boşluğu zaten kapandığı için.

## Yazılım mühendisliği bağlantısı

Bağışçı platformları ve bağış öneri araçları, çoğu zaman yalnızca kuruluş düzeyindeki verimlilik metriklerini (genel gider oranı, yararlanıcı başına maliyet) ortaya çıkarır; çünkü bunlar hayır kuruluşlarının yıllık raporlarında yayımladığı ve bir karşılaştırma tablosuna çekilmesi en kolay olan şeylerdir. Bağışçı YG'sini düzgün temsil etmek, farklı, kaynağı daha zor bir veri noktası gerektirir: hayır kuruluşunun belirtilen güncel finansman boşluğu veya "daha fazla finansman için yer", yıl boyunca değişen ve nadiren yapılandırılmış veri olan bir şey. Gerçek bağışçı-YG akıl yürütmesini desteklemek isteyen platformlar ya finansman boşluğu açıklamalarından doğrudan bir besleme (GiveWell'in önerilen hayır kuruluşları için elle sürdürdüğü gibi) ya da bir karşılaştırma tablosunun bağışçı ek katkısını değil kurumsal verimliliği gösterdiğine dair açık bir sorumluluk reddi gerektirir. Bağışçı YG'sinin en sık ve yanlış biçimde karıştırıldığı metrik için bkz. [hayır kuruluşu genel gider oranı](../hayır-kuruluşu-genel-gider-oranı/).

## Tuzaklar

- **Hayır kuruluşu verimliliğini bağışçı ek katkısıyla karıştırmak.** İyi yönetilen, düşük genel giderli bir hayır kuruluşu, finansman kısıtlı değilse hâlâ sıfıra yakın bir marjinal bağışçı YG'sine sahip olabilir.
- **Funging'i göz ardı etmek.** Büyük bir kurumsal fon sağlayıcı boşluğu zaten kapatacaksa, bireysel bir bağışçının bağışı yeni teslimatı eklemek yerine o fon sağlayıcının parasının yerini alır.
- **Ölçekte doğrusal maliyet-etkililik varsaymak.** Ulaşılması en ucuz yararlanıcılara genellikle önce hizmet verilir; bir program genişledikçe sonuç başına marjinal maliyet sıklıkla artar, dolayısıyla bir sonraki sterlinin YG'si zaten harcanmış ortalama sterlinin YG'si ile aynı değildir.
- **Belirtilmiş finansman boşluğu olmaması.** Bir sonraki X £'nun neyi finanse edeceğini söyleyemeyen bir hayır kuruluşu veya platform, gerçek bir bağışçı-YG iddiasını değil, yalnızca bir ortalama maliyet iddiasını destekleyebilir.

## Kaynaklar

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
