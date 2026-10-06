# Sonuç Başına Maliyet

Sonuç başına maliyet, toplam program harcamasının, yalnızca bir hizmet alanların sayısına değil, koşullarında tanımlanmış, anlamlı bir değişikliğe ulaşan kişilerin sayısına bölünmesidir. Bir fon sağlayıcının veya teslimat ekibinin kullanabileceği en keskin verimlilik metriğidir; çünkü çoğu hayır kuruluşunun kaçındığı bir ön soruyu zorlar: başarı olarak tam olarak ne sayılır?

## Neden önemli

Bir gıda bankası, aynı yılın hesaplarından iki çok farklı sayı raporlayabilir. Dağıtılan gıda kolisi başına maliyet 15 £ olabilir. Gıda güvenliğine ulaşan hanehalkı başına maliyet — artık acil gıda yardımına ihtiyaç duymayan, bir takip noktasında doğrulanmış — 340 £ olabilir. İkisi de doğrudur. Yalnızca biri bir fon sağlayıcıya paranın işe yarayıp yaramadığını söyler. Aralarındaki boşluk, bir çıktı ile bir sonuç arasındaki boşluktur: teslim edilen bir koli bir çıktıdır; artık krizde olmayan bir hanehalkı bir sonuçtur. Bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/).

Birleşik Krallık üçüncü sektörü, bu ayrımı zorlayan altyapıyı oluşturmak için yirmi yıl harcadı. New Philanthropy Capital'in hayır kuruluşu etkililiğine yönelik "dört sütun yaklaşımı", kuruluşlardan çıktılarından önce sonuçlarını belirtmelerini açıkça ister ve Birleşik Krallık'ta fon sağlayıcı destekli etki ölçüm işbirliği olan Inspiring Impact, birçok hibe başvurusunun artık hayır kuruluşlarından doldurmasını istediği bir Sonuç Matrisi yayımlar. Trussell Trust'ın Heriot-Watt University ile yürüttüğü yıllık "State of Hunger" araştırma programı, tam da koli sayılarının tek başına insanların gıda güvensizliğinden kurtulup kurtulmadığı hakkında hiçbir şey söylememesi nedeniyle vardır.

Sonuç başına maliyet, ancak karşı olgusalı sabitledikten sonra bir anlam taşır: "zaten" elde edilen bir sonuç, programın satın aldığı bir sonuç değildir. Bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/) ve [yer değiştirme ve atfetme](../yer-değiştirme-ve-atfetme/).

## Matematik

```
Sonuç başına maliyet = Toplam program maliyeti / Tanımlanan sonuca ulaşan yararlanıcı sayısı

burada:
  Toplam program maliyeti = doğrudan teslimat maliyeti + genel giderden adil pay
  Tanımlanan sonuç        = önceden belirlenmiş, ölçülebilir bir durum değişikliği
                            (örn. "6 aylık takipte gıda güvenliğine sahip",
                            "gıda kolisi aldı" değil)
```

Belirli bir sonuç başına maliyetin karşılaştırılabilir müdahalelere göre iyi, ortalama veya kötü olup olmadığını değerlendirmek için [birim maliyet veri tabanları](../birim-maliyet-veri-tabanları/) (örn. sektöre özgü birim maliyet kıyaslamaları) ile karşılaştırın.

## Çalışılmış örnek

**Gıda bankası, bir yıl**:

- Toplam program maliyeti: 450.000 £
- Dağıtılan koli: 30.000
- Koli başına maliyet (bir çıktı metriği): 450.000 £ / 30.000 = **15 £**

Hayır kuruluşu ayrıca hanehalklarından bir örneklemle altı aylık bir takip anketi yürütür ve üç veya daha fazla koli alan hanehalklarının %35'inin artık acil gıda yardımına ihtiyaç duymadığını ve standart bir gıda güvenliği anketi modülünde gıda güvenliği eşiğinin üzerinde puan aldığını bulur. O yıl üç veya daha fazla koli alan 1.800 hanehalkından 630'u bu sonuca ulaşır.

```
Sonuç başına maliyet = 450.000 £ / 630 = gıda güvenliğine ulaşan hanehalkı başına 714 £
```

Bu hayır kuruluşunu bir nakit transferi pilotu veya borç danışmanlık hizmetiyle karşılaştıran bir fon sağlayıcının kullanması gereken rakam 714 £'dur — 15 £ değil. Aynı bölgedeki karşılaştırılabilir bir nakit transferi programı gıda güvenliğine hanehalkı başına 500 £ ile ulaşıyorsa, koli başına maliyeti ucuz görünse bile gıda bankası, aynı sonuca giden daha verimli yol olarak açıkça görünmez.

## Yazılım mühendisliği bağlantısı

Çoğu vaka yönetim sistemi çıktıları günlüğe kaydetmek üzere oluşturulur; çünkü çıktılar işlemin içinde olan şeylerdir (bir koli teslim edilir, bir form gönderilir). Sonuçlar genellikle daha sonra, çoğu zaman sistemin normal yakalama penceresinin dışında gerçekleşir ve kasıtlı bir tasarım kararı gerektirir: bir takip mekanizmasını (bir anket tetikleyicisi, bir yeniden iletişim iş akışı, bir veri bağlantı çalışması) yıllık bir rapor için sonradan eklenen bir ek düşünce değil, birinci sınıf bir özellik olarak oluşturun. Sektör için hibe yönetimi veya vaka yönetimi platformları geliştiren mühendisler, "sonuç olayı nedir ve onu nasıl gözlemleriz" sorusunu veri modeli sabitlenmeden önce sorulan bir gereksinim sorusu olarak ele almalıdır — bir sonuç alanını sonradan eklemek, bir çıktı sayacını eklemekten çok daha zordur. Bu gereksinim konuşmasının nasıl yapılandırılacağı için bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/) ve [mantık modeli](../mantık-modeli/); sonuç izleme henüz oluşturulmadığında ekiplerin başvurduğu daha hızlı, daha kaba metrik için ise [yararlanıcı başına maliyet](../yararlanıcı-başına-maliyet/).

## Tuzaklar

- **Sonuç kılığına girmiş çıktıları raporlamak.** "Ulaşılan kişiler", "yardım edilen kişiler" değildir. Metrik, takip teması olmadan bir sistem günlüğü tarafından üretilebiliyorsa, neredeyse kesinlikle bir çıktıdır.
- **Payda manipülasyonu.** Sonuç nüfusunu "programı tamamlayanlar" ile daraltmak, bırakanları — çoğu zaman en zor vakaları — sessizce düşürür ve görünür oranı şişirir. Paydayı bitirenler değil, başlayan herkes olarak belirtin.
- **Karşı olgusal olmaması.** Sonuca ulaşan herkesi saymak, zaten ulaşacak olanlar dâhil, programın satın aldığını olduğundan büyük gösterir. Bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/).
- **Uyumsuz sonuç tanımları arasında karşılaştırma yapmak.** Doğrulanmış bir anket modülüyle ölçülen "gıda güvenliğine sahip", bir memnuniyet formunda öz bildirimli "gıda güvenliğine sahip" ile karşılaştırılamaz; bir sonuç başına maliyet sıralama tablosu yalnızca sonuç tanımları eşleştiğinde dürüsttür.

## Kaynaklar

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
