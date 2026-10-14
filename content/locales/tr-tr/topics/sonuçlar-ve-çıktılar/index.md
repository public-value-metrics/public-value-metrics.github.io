# Sonuçlar ve Çıktılar

Çıktı (output), bir faaliyetin doğrudan, sayılabilir ürünüdür — teslimat gerçekleştiği anda, ne etki yarattığından bağımsız olarak var olur. Sonuç (outcome), ilgili insanlar, yer veya sistem için bunu izleyen değişimdir. "500 kişi bir iş arama atölyesine katıldı" bir çıktıdır: hiçbiri iş bulamasa bile doğrudur. "500 kişinin istihdam beklentileri iyileşti" bir sonuç iddiasıdır ve yalnızca katılım kanıtını değil, değişim kanıtını gerektirir — sektördeki neredeyse her ölçüm hatasından daha yanıltıcı hibe raporu üreten karışıklık.

## Neden önemli

HM Treasury'nin Magenta Book'u ve National Lottery Community Fund gibi fon sağlayıcıların ikisi de özellikle sonuç raporlaması ister; çünkü programların varsayılan olarak raporladığı şey çıktılardır: sayması ucuzdur, her zaman mevcuttur ve her zaman olumlu görünür. Bir çıktı sayısı, programın başarısız olması sonucunda kelimenin tam anlamıyla asla düşemez — teslim edilen daha fazla oturum her zaman "daha fazla"dır; oysa bir sonuç, bir programın işe yaramadığını ortaya çıkarabilir. Ulusal Denetim Ofisi, hükümet programlarını faaliyet düzeylerini başarının kanıtı gibi raporladıkları için defalarca eleştirmiştir; yalnızca çıktıları raporlamayı kolaylaştıran bir yazılım sistemi, çıktılar takip veri toplaması gerektirmediği, sonuçlar gerektirdiği için bunu varsayılan olarak pekiştirir.

## Matematik

Formül yoktur, ancak bir metriği sınıflandırmak için güvenilir bir test vardır:

```
Çıktı testi:  teslimat noktasında sayılabilir mi, alıcı etkilenmese de doğru mu?
Sonuç testi:  anlamlı olması için bir önce/sonra veya ile/ olmadan karşılaştırması gerekiyor mu?

Bir sayı kimseye sıfır faydayla da doğru olabiliyorsa, bir çıktıdır.
```

Bu, daha geniş [mantık modeli](../mantık-modeli/) zincirinin içinde yer alır ve bir [değişim kuramı](../değişim-kuramı/)nda tanımlanan sonuç halkalarına bağlıdır; bir sonucu paraya dönüştürmek [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) bölümündeki yöntemleri kullanır.

## Çalışılmış örnek

**Yerel yönetim (istihdam desteği)**: çıktı — 500 kişi iş arama atölyelerine katıldı. Sonuç — 12 aylık takipte, bu 500 kişiden 140'ı (%28) sürdürülebilir istihdamda (6+ ay). Benzer özelliklere sahip ancak programa erişimi olmayan bir karşılaştırma grubunun aynı dönemde %15'lik bir temel istihdam oranı vardır. Net sonuç artışı: %28 − %15 = 13 yüzde puan; dolayısıyla tahmini 500 × 0,13 = 65 ek kişi, aksi hâlde olmayacakken iştedir — ne 500'lük katılım rakamından ne de 140'lık ham istihdam sayısından farklı, atfedilebilir sonuç.

**Hayır kuruluşu (okuryazarlık hayır kuruluşu)**: çıktı — 300 çocuğa verilen 1.200 okuma oturumu. Sonuç — 6 aylık dönemde ortalama okuma yaşı 8 ay iyileşti; beklenen 6 aylık doğal ilerleme temel çizgisi 6 aydır. Net sonuç kazancı: 8 − 6 = çocuk başına programa atfedilebilir 2 aylık ek okuma yaşı iyileşmesi; 8 aylık rakamın tamamı değil.

## Yazılım mühendisliği bağlantısı

Olay günlükleri ve işlemsel sistemler çıktıları neredeyse otomatik olarak araçlandırır — sayfa görüntülemeleri, oturumlar, kapatılan biletler, ayrılan randevular — çünkü sistemin işini yapmasıyla üretilirler. Sonuçlar, aynı bireyi daha sonraki bir zamanda bir temel çizgiye veya karşılaştırmaya karşı yakalayan bir veri modeli gerektirir; bu kasıtlı olarak tasarlanmalıdır: takip anketleri, bağlantılı idari kayıtlar veya bir karşılaştırma kohortu. Yalnızca birincisini destekleyen bir raporlama aracı, fon sağlayıcı ne isterse istesin bir kuruluşu sessizce yalnızca çıktı raporlamasına yönlendirir. Sonuçların hesap verebilirlik zincirinde nerede durduğu için bkz. [mantık modeli](../mantık-modeli/); bu ayrımı bir birim maliyet metriğine dönüştürmek için [sonuç başına maliyet](../sonuç-başına-maliyet/); daha geniş metrik seçimi örüntüsü için ise [kamu sektörü KPI'ları](../kamu-sektörü-kpıları/).

## Tuzaklar

- **Çıktıları sonuçmuş gibi raporlamak.** "500 kişi katıldı" faydayı kanıtlamadan ima eder; katılımı açıkça bir çıktı olarak etiketleyin.
- **Temel çizgi veya karşılaştırma grubu olmaması.** Karşı olgusalı olmayan bir sonuç rakamı — bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/) — program etkisini zaten gerçekleşecek olandan ayıramaz.
- **Finanse edilen metrik için optimize etmek.** Finansman çıktı hacmine bağlandığında, teslimat ekipleri rasyonel olarak kalıcı değişim yerine katılımı maksimize eder; bir Goodhart yasası başarısızlık biçimi.
- **Sonuç yıkama.** Arkasında hiçbir takip ölçümü olmadan bir çıktı metriğini sonuç gibi duyulan bir dille yeniden etiketlemek ("katılım sonuçları: 500 katılımcı").

## Kaynaklar

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
