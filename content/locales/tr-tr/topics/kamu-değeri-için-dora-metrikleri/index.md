# Kamu Değeri için DORA Metrikleri

DORA (DevOps Research and Assessment) metrikleri — dağıtım sıklığı, değişiklikler için teslim süresi, değişiklik başarısızlık oranı ve hizmeti geri yükleme süresi, artı beşinci olarak güvenilirlik — yazılım endüstrisinin en çok doğrulanmış teslimat performansı kıyaslamalarıdır. Kamu sektörü hesap verebilirliği terimlerine çevrildiğinde, her biri kamu değerinin bir vatandaşa ne kadar hızlı ve ne kadar güvenli ulaştığının doğrudan bir vekilidir.

## Neden önemli

DORA'nın yıllık olarak *Accelerate State of DevOps Report* olarak yayımlanan (Forsgren, Humble ve Kim metodolojisi, şimdi Google Cloud tarafından yürütülüyor) on yıllık araştırması, ekipleri elit, yüksek, orta ve düşük performans gösterenler olarak kümeler. Elit ekipler talep üzerine dağıtır, commit'ten üretime bir günden kısa sürer, değişikliklerin kabaca %5'inde başarısız olur ve bir saatten kısa sürede toparlanır; düşük performans gösterenler aylık veya daha seyrek dağıtır, aylar sürer, değişikliklerin yaklaşık %40'ında başarısız olur ve haftalar içinde toparlanır. Hükümette bunlar mühendislik gösteriş metrikleri değildir: Government Digital Service'in Hizmet Standardı, ekiplerden "sık sık yinelemelerini ve iyileştirmelerini" ve kullanıcı ihtiyacına hızla yanıt verebilmelerini şart koşar ve güvenli ve sık dağıtamayan bakanlıklar, kullanıcı araştırmaları ne derse desin, bu standardı karşılamaktan yapısal olarak acizdir. Cabinet Office'in kendi dijital verimlilik çalışması, bir vatandaşı başarısız veya yavaş bir dijital işlemden bir telefon veya kâğıt kanalına itmenin pahalı olduğunu buldu — GDS'in 2012 Dijital Verimlilik Raporu, bazı dijital işlemlerin 20 peni gibi düşük bir maliyetle gerçekleşirken telefon veya yüz yüze temasların 8,62 £'a kadar mal olduğunu tahmin etti — dolayısıyla halka yönelik bir hizmetteki bir değişiklik başarısızlığı yalnızca mühendislik zamanına mal olmaz, gerçek sterlinleri iletişim merkezi bütçesine iter (bkz. [kanal değişimi tasarrufları](../kanal-değişimi-tasarrufları/)).

## Matematik

```
Dağıtım sıklığı             = üretim dağıtımları / zaman
Değişiklikler için teslim süresi = t(dağıtım) − t(commit), medyan
Değişiklik başarısızlık oranı = başarısız değişiklikler / toplam değişiklikler × 100
Geri yükleme süresi (MTTR)    = t(geri yüklendi) − t(başarısızlık), medyan
Güvenilirlik                  = SLO başarısı (kullanılabilirlik, gecikme, doğruluk)
```

Kamu değeri çevirileri:

```
Teslim süresi   → boru hattındaki haftalar × CoD, bkz. cost-of-delay-in-public-programmes
Başarısızlık oranı → vatandaşa yönelik olay oranı: CBO × yönlendirilen iletişim merkezi
                   çağrısı (veya başarısız yasal işlem) başına maliyet
Geri yükleme süresi → hizmet kesintisi zararı: MTTR × (saatte engellenen başvurular/
                   talepler) × birim başına aşağı akış maliyeti veya refah kaybı
Güvenilirlik    → fayda iskontosu: %99 kullanılabilirlikte bir hizmet, modellenen
                   faydasının ≈ 0,99'unu sunar — benimseme veya uyum eksikliğinin
                   teslimat analoğu
```

## Çalışılmış örnek

Bir yerel yönetimin yardım başvuruları portalı ekibi, bir teslimat mühendisliği yatırımından önce ve sonra:

```
                    Önce        Sonra
Dağıtımlar          aylık       haftalık
Teslim süresi       8 hafta     5 gün
CBO                 %30         %10
MTTR                3 gün       4 saat
```

Ekip yılda yaklaşık 25 iyileştirme sunar, ortalama değer haftada 8.000 £ ([gecikme maliyeti](../kamu-programlarında-gecikme-maliyeti/)). Teslim süresini kabaca 7,3 hafta kısaltmak, her iyileştirmenin fayda akışını öne çeker: 25 × 7,3 × 8.000 ≈ daha erken sunulan yılda **1.460.000 £** değer. Başarısızlık oranında: 25 × (0,30 − 0,10) = yılda 5 daha az başarısız değişiklik; halka açık bir portaldaki her başarısız değişiklik tipik olarak tahmini 2.000 vatandaşı 20 peni karşısında 8,62 £ olan telefon kanalına yönlendirir, olay başına net maliyet kabaca 8,42 £ × 2.000 ≈ 16.840 £'dur, dolayısıyla 5 olayı önlemek yılda ≈ **84.200 £** tasarruf sağlar. Teslimat mühendisliği yatırımı, diğer herhangi bir kamu değeri gerekçesiyle aynı para biriminde değerlenir.

## Çalışılmış örnek devamı: güvenilirlik

Portal %99,5'lik bir hedef yerine %97 kullanılabilirlikte çalışıyorsa ve kesintinin her yüzde puanı başvuruların %2'sinin terk edilmesiyle kaybedilmesi olarak modelleniyorsa, hizmet modellenen yılda 2 milyon £'luk faydasının kabaca 0,975'ini sunuyor demektir — saf bir çalışma süresi gösterge panelinin asla ortaya çıkarmadığı yılda 50.000 £'luk bir fayda iskontosu.

## Yazılım mühendisliği bağlantısı

DORA metrikleri, farklı kıyafet giymiş bir kamu hizmetinin operasyonel metrikleridir: teslim süresi [hizmet standartları ve işlem metrikleri](../hizmet-standartları-ve-işlem-metrikleri/)ne eşlenir; değişiklik başarısızlık oranı yeniden çalışma ve şikâyet oranlarına eşlenir; MTTR yasal bir hizmetin başvuru sahipleri için ne kadar süre kullanılamaz olduğuna eşlenir. İyileştirme teknikleri iki yönde de aktarılır çünkü her ikisi de hesap verebilirlik kısıtları altında kuyruk sistemleridir — altta yatan kuyruk matematiği için bkz. [hükümet teslimatında akış metrikleri](../hükümet-teslimatında-akış-metrikleri/). Ayrıca DORA'nın 2025 bulgusuna dikkat edin: yapay zekâ benimsemesi daha yüksek iş hacmiyle ilişkilidir ancak *daha kötü* kararlılıkla — hem etkililiği hem yan etkileri olan bir müdahale; bu, bu bölümün [yapay zekâ verimliliği](../kamu-sektöründe-yapay-zekâ-verimliliği/) konusunun üzerinden geçtiği net fayda analizidir.

## Tuzaklar

- **Metrik manipülasyonu**: hiçbir şey yapmayan sürümlerle dağıtım sayılarını şişirmek veya acil düzeltmeleri değişiklik başarısızlığı sayımından hariç tutmak. Olayları, yasal bir hizmet standardının "başarılı bir işlem"i tanımladığı kadar kesin tanımlayın.
- **Bakanlıklar arası sıralama tabloları**: DORA kümeleri teslimat uygulamalarını karşılaştırır, farklı risk profillerine sahip hizmetleri değil; "yüksek" olarak derecelendirilen bir vergi ödeme sistemi, güvence gereksinimleri göz önüne alındığında "elit"in pervasız olacağı yerde doğru duruş olabilir.
- **Yalnızca bir metriği optimize etmek**: değişiklik başarısızlık oranı olmadan hız, klasik iş hacmi-kararsızlık takasıdır — dördünü de tek bir puan olarak değil, birlikte raporlayın.

## Kaynaklar

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
