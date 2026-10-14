# İşlem Başına Maliyet

İşlem başına maliyet, bir hükümet dijital hizmeti için manşet birim ekonomisi metriğidir: bir kanalı teslim etmenin toplam maliyeti, o kanaldan tamamlanan işlem sayısına bölünür. Eski GOV.UK Performance Platform'unun amiral rakamıydı ve on yıllık "varsayılan olarak dijital" yatırımını finanse eden sayıdır — tam da bu yüzden manipüle edilmeye en yatkın metrik de odur.

## Neden önemli

Cabinet Office'in 2012 tarihli Dijital Verimlilik Raporu, kanal maliyeti karşılaştırmasını akılda kalan terimlerle ortaya koydu: dijital işlemlerin telefona göre yaklaşık 20 kat ve yüz yüze görüşmeye göre yaklaşık 50 kat daha ucuz olduğu bulundu; açıklayıcı yerel yönetim rakamları web işlemi başına kabaca 0,15 £, telefonla 2,83 £ ve yüz yüze 8,62 £ idi. Bu tek karşılaştırma, Hükümet Dijital Stratejisi'nde adı geçen 25 örnek hizmeti yeniden tasarlamanın ve o tarihten bu yana kanal değişimi tasarruflarını anan her bakanlık iş gerekçesinin gerekçesi oldu. Rakam, büyüklük sırası sinyali olarak gerçekten yararlıdır, ancak oran tamamen her tarafta neyin sayıldığına bağlıdır: adil bir telefon kanalı maliyeti çağrı merkezinin personelini, telefon sözleşmesini, eğitimi ve emlak maliyetini içerir; adil bir dijital maliyet barındırmayı, sürmekte olan ürün ekibi maaşlarını, başarısız yolculuklar için destek masası zamanını ve [dijital hizmet standardı](../dijital-hizmet-standardı/) madde 5'in gerektirdiği destekli dijital kanalı içerir. Dijital taraftan bunların yeterince fazlasını çıkarırsanız, her hizmet ucuz görünür.

## Matematik

```
İşlem başına maliyet = toplam tahsis edilen kanal maliyeti / tamamlanan işlemler

Toplam tahsis edilen kanal maliyeti şunları içermelidir:
  + barındırma ve altyapı
  + ürün/mühendislik/destek ekibi maliyeti (itfa edilmiş)
  + içerik ve hizmet tasarımı maliyeti (itfa edilmiş)
  + destekli dijital / erişilebilirlik destek maliyeti
  + başarısızlık talebi maliyeti (dijitalde başarısız olup telefona dönen kullanıcılar)
  − tek seferlik geliştirme maliyeti, tamamen ilk yıla gider yazılmak yerine
    beklenen hizmet ömrü boyunca itfa edilir

Yaygın muhasebe hilesi:
  "İşlem başına marjinal maliyet" (hizmet kurulduktan sonra yalnızca barındırma)
  "işlem başına ortalama maliyet" (onu geliştirmeye ve işletmeye devam eden ekip
  dâhil toplam maliyet) imiş gibi alıntılanır. İkisi, büyük, aktif bir teslimat
  ekibi olan bir hizmet için 10 kat veya daha fazla farklılaşabilir.
```

## Çalışılmış örnek

**Taşıt vergisi yenileme hizmeti**: yılda 4 milyon işlem.

```
Yalnızca marjinal rakam (hile):
  Yalnızca barındırma + ödeme işleme = yılda 180.000 £
  İşlem başına maliyet = 180.000 / 4.000.000 = 0,045 £
  → bir iş gerekçesinde alıntılanan manşet rakam

Tamamen yüklü rakam (dürüst olan):
  Barındırma + ödeme                       180.000 £
  Ürün/mühendislik ekibi (8 TZE)           720.000 £
  Destek masası (başarısız/sorgulanan işl.) 310.000 £
  Destekli dijital telefon hattı           140.000 £
  Toplam                                 1.350.000 £
  İşlem başına maliyet = 1.350.000 / 4.000.000 = 0,3375 £

Tamamen yüklü rakam, Dijital Verimlilik Raporu'ndaki 2,83 £'luk telefon kanalı
karşılaştırma ölçütünden hâlâ kabaca 8 kat daha ucuzdur — gerçek ve savunulabilir
bir tasarruf — ancak kestirme sürümde alıntılanan yalnızca marjinal rakamdan 7,5
kat daha yüksektir. İki sayı da "doğrudur"; yalnızca biri, karşısına konulduğu
telefon kanalı maliyetiyle karşılaştırılabilirdir.
```

## Yazılım mühendisliği bağlantısı

İşlem başına maliyet, mimari kararların bir finans sayısına dönüştüğü yerdir: temiz ölçeklenen ve az manuel müdahale gerektiren bir hizmet bu rakamı zamanla düşürür; karışık hata durumlarından yüksek destek bileti hacmi üreten bir hizmet, barındırma verimliliğinden bağımsız olarak onu yükseltir. [Dijital hizmet standardı](../dijital-hizmet-standardı/) madde 10'un ("başarının neye benzediğini tanımlayın ve performans verilerini yayımlayın") ve bu rakamın içinde yer aldığı daha tam KPI kümesini ortaya koyan [hizmet standartları ve işlem metrikleri](../hizmet-standartları-ve-işlem-metrikleri/)nin doğal eşlikçi metriğidir. Ayrıca doğrudan [kanal değişimi tasarrufları](../kanal-değişimi-tasarrufları/) hesaplamalarını besler ve platform ile paylaşılan hizmet genel giderlerinin sessizce düşmemesi için [hükümet BT'sinde toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/) ile uzlaştırılmalıdır.

## Tuzaklar

- **Ortalama maliyet kılığına girmiş marjinal maliyet**: bir hizmet kurulduktan sonra yalnızca barındırma maliyetini alıntılamak, onu sürdüren, yineleyen ve destekleyen sürmekte olan ekibi dışarıda bırakmak — yukarıdaki çalışılmış örneğe bakın.
- **Destekli dijital maliyeti hariç tutmak**: [dijital kapsayıcılık](../dijital-kapsayıcılık/)ın gerektirdiği telefon/kâğıt yedeği ayrı maliyetlendirilirse veya göz ardı edilirse, bir kanal "varsayılan olarak dijital" uyumlu değildir ve gerçek maliyeti yakalanmaz.
- **Başarısızlık talebini göz ardı etmek**: dijital olarak başlayıp başarısız olan ve yine de bir telefon araması veya kâğıt form üreten işlemler, başarısızlığı yakalayan kanalın değil, dijital kanalın bir maliyetidir.
- **Kanallar arasında farklı karmaşıklıktaki işlemleri karşılaştırmak**: telefon aramaları orantısız biçimde zor vakaları ele alır (birden fazla bağımlı, hata düzeltme, savunmasız başvuru sahipleri); işlem karışımı eşleştirilmedikçe ortalama bir telefon maliyetini ortalama bir dijital maliyetle karşılaştırmak oranı olduğundan büyük gösterir.

## Kaynaklar

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
