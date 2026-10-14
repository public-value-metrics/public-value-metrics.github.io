# GSYH Alternatifleri

GSYH alternatifleri, Gayri Safi Yurt İçi Hasıla'nın (GSYH) yapısal olarak göz ardı ettiği şeyi yakalamak üzere geliştirilmiş metriklerdir: ücretsiz bakım emeği, çevresel tükenme, gelir dağılımı ve büyümenin yaşamları gerçekten iyileştirip iyileştirmediği. En bilinenleri Gerçek İlerleme Göstergesi (GPI) ve Bhutan'ın Gayri Safi Ulusal Mutluluk (GNH) Endeksi'dir; bunları ciddiye almanın gerekçesi en etkili biçimde 2009 Stiglitz-Sen-Fitoussi Komisyonu tarafından ortaya konmuştur. Hükümet gösterge panelleri veya KPI sistemleri geliştiren mühendisler için "hangi sayı ilerleme olarak sayılır" sorusu, neyin finanse edileceği üzerinde gerçek sonuçları olan bir tasarım kararıdır.

## Neden önemli

1930'larda ABD ulusal hesaplarını inşa eden Simon Kuznets, 1934'te Kongre'yi "bir ulusun refahı, ulusal gelir ölçümünden güçlükle çıkarsanabilir" diye uyardı — rakamın neredeyse hemen aştığı bir uyarı. GSYH, bir petrol sızıntısının temizlenmesini büyüme olarak sayar ve bir ebeveynin ücretsiz çocuk bakımını hiçbir şey olarak sayar; kalıcı refah inşa eden harcamayı, yalnızca zaten verilmiş zararı dengeleyen harcamadan ayırmaz. Fransa Cumhurbaşkanı Nicolas Sarkozy tarafından toplanan ve Joseph Stiglitz, Amartya Sen ve Jean-Paul Fitoussi'nin başkanlık ettiği Stiglitz-Sen-Fitoussi Komisyonu, 2009'da istatistik sistemlerinin vurguyu "ekonomik üretimi ölçmekten insanların refahını ölçmeye" kaydırması gerektiğini ve sürdürülebilirliğin tek bir sayıya katlanmak yerine mevcut refahtan ayrı izlenmesi gerektiğini bildirdi. GSYH alternatifleri bu öneriyi operasyonelleştirir. 1990'larda Redefining Progress düşünce kuruluşu tarafından geliştirilen ve William Nordhaus ve James Tobin'in 1972 Ekonomik Refah Ölçüsü üzerine kurulu GPI, kişisel tüketimden (GSYH'nin yaptığı gibi) başlar ve ardından GSYH'nin atladığı piyasa dışı faydaları (hane emeği, gönüllülük) ekler, GSYH'nin yanlış biçimde olumlu saydığı savunmacı ve tükenme maliyetlerini (suç, kirlilik, işe gidip gelme, kaynak çekimi) çıkarır. GNH Centre Bhutan (<https://www.gnhcentre.bt/>) tarafından yönetilen Bhutan'ın GNH Endeksi daha da ileri gider ve büyümenin yerini ülkenin belirtilmiş anayasal hedefi olarak alır: 9 alan boyunca 33 göstergeyi — psikolojik refah, sağlık, eğitim, zaman kullanımı, kültürel çeşitlilik, yönetişim, topluluk canlılığı, ekolojik çeşitlilik ve yaşam standartları — hükümet politika tekliflerini taramak için doğrudan kullanılan tek bir yeterlilik temelli puana toplar.

## Matematik

```
GPI = kişisel tüketim harcaması
      + piyasa dışı faydalar (hane emeği, gönüllülük, yükseköğretim)
      − savunmacı ve sosyal maliyetler (suç, kirlilik, işe gidip gelme, aile çözülmesi)
      − doğal ve sosyal sermayenin tükenmesi (kaynak çekimi, tarım arazisi kaybı)

GNH yeterlilik puanı, alan başına:
  bir kişi, her gösterge için eşiğini aştığında bir alanda "yeterlidir"
  Mutluluk Endeksi = (9 alanın ≥ 6'sında yeterli nüfusun %'si)
                    + ("henüz mutlu olmayan" azınlığın ağırlıklı ortalama açığı)
```

## Çalışılmış örnek

**Bölge, GPI**: kişisel tüketim 50 milyar $. Tahmini hane ve gönüllü emek değeri 12 milyar $ ekleyin (ikame maliyeti ücret oranları — bkz. [gönüllü zaman değeri](../gönüllü-zaman-değeri/)). İşe gidip gelme sıkışıklığının (3 milyar $), suçun (4 milyar $) ve uzun vadeli kaynak tükenmesinin (6 milyar $) tahmini yıllık maliyetlerini çıkarın:

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 (milyar $)
```

GSYH o yıl 50 milyar $'dan 55 milyar $'a (+%10) büyüdüyse, ancak savunmacı ve tükenme maliyetleri tüketimden daha hızlı büyüdüyse, GSYH yükselirken GPI düşebilir — GPI araştırmacılarının kabaca 1970'lerden bu yana yüksek gelirli ekonomiler için andığı "eşik hipotezi"; büyüme tırmanmaya devam ederken GPI plato yapmıştır.

**Vatandaş, GNH**: bir katılımcı 9 alanın 7'sinde yeterlilik eşiğini aşar (sağlık, eğitim, yaşam standartları, topluluk canlılığı, kültürel çeşitlilik, ekolojik çeşitlilik, zaman kullanımı) ancak psikolojik refah ve yönetişimde yetersiz kalır. 7 ≥ 6 olduğundan, kişi sayımında "mutlu" sayılır; endeks ayrıca iki açığın derinliğini izler, böylece dar bir geçiş rahat bir geçişten ayırt edilemez olmaz.

## Yazılım mühendisliği bağlantısı

- Yalnızca iş hacmi veya harcama üzerine modellenmiş bir KPI gösterge paneli (GSYH örüntüsü), o iş hacmini üretirken verilen zararı sistematik olarak kaçırır — "kullanıcı sıkıntısı" yerine "etkileşim" olarak ele alınan destek bileti hacmi, bir petrol sızıntısını büyüme olarak saymanın yazılım teslimatı versiyonudur.
- GPI tarzı muhasebe, herhangi bir [kamu sektörü KPI](../kamu-sektörü-kpıları/) kümesi için yararlı bir denetim örüntüsüdür: her manşet çıktı metriği için, sessizce hangi savunmacı maliyete (yeniden çalışma, olay müdahalesi, tükenmişlik) yol açtığını sorun ve GPI'nin savunmacı harcamayı tüketimden netleştirmesi gibi onu netleştirin.
- GNH'nin alan yeterliliği yöntemi — boyut başına geçti/kaldı, sonra topla — yapısal olarak [çok kriterli karar analizi](../çok-kriterli-karar-analizi/) ile aynı tekniktir ve tek bir skaler puanın kritik bir başarısız boyutu gizleyeceği her yerde yeniden kullanılmaya değerdir.

## Tuzaklar

- **GPI'yi kesin bir ulusal hesap saymak** — GSYH'nin aksine GPI'nin tek bir standartlaştırılmış metodolojisi yoktur; farklı çalışmalar işe gidip gelme maliyetlerini, gönüllü zamanı veya kaynak tükenmesini farklı ağırlıklandırır, dolayısıyla çalışmalar arası GPI karşılaştırmaları, ülkeler arası GSYH karşılaştırmalarından çok daha az güvenilirdir.
- **GNH'yi farklı bir politika kültürüne olduğu gibi aktarmak** — alan ağırlıkları ve yeterlilik eşikleri Bhutan istişaresi yoluyla belirlendi; altta yatan istişare süreci olmadan sayıyı kopyalamak, kimsenin güvenmediği boş bir metrik üretir.
- **Bir GSYH alternatifinin maliyet-fayda değerlendirmesinin yerini aldığını varsaymak** — bunlar tek bir program için karar araçları değil, tanısal, ekonomi genelinde göstergelerdir; bunun için bunun yerine [sosyal maliyet-fayda analizi](../sosyal-maliyet-fayda-analizi/) kullanın.

## Kaynaklar

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
