# Kamu Hizmeti Verimliliği

Kamu hizmeti verimliliği (productivity), kamu harcamasının girdileri (personel, sermaye, mal ve hizmetler) kaliteye göre ayarlanmış çıktılara ne kadar verimli dönüştürdüğünü ölçer; sağlık, eğitim, polislik, sosyal bakım gibi piyasa fiyatı olmayan ve dolayısıyla maliyetlerin bölüneceği bir gelir rakamı bulunmayan hizmetler için. Birleşik Krallık Ulusal İstatistik Ofisi (ONS) bu seriyi 2000'li yılların ortalarından beri yayımlamaktadır ve "hükümet parayı kamu hizmetlerine dönüştürmede daha iyi mi yoksa daha kötü mü hâle geliyor?" sorusunu yanıtlamak için yöntemsel olarak en gelişmiş ulusal girişim olmayı sürdürmektedir.

## Neden önemli

Bir piyasada verimlilik (çıktı değeri) / (girdi maliyeti)dir ve çıktı değeri, birisi ona ödeme yaptığı için gözlemlenebilirdir. Bir kalça protezi, bir okul yeri ve bir polis devriyesinin satış fiyatı yoktur; dolayısıyla naif olarak yalnızca *girdileri* (ne harcandığını) ölçebilirsiniz — bu, yorumcuları artan kamu harcamasını otomatik olarak kötü saymaya iter, çünkü sabit manşet faaliyetle daha fazla girdi düşen verimlilik gibi görünür. ONS metodolojisi, kamu hizmeti verimliliği için "Sources and Methods" yayınlarında belirtildiği üzere, faaliyet hacimlerinden (yapılan ameliyatlar, öğretilen öğrenciler, soruşturulan suçlar) bir *çıktı* endeksi oluşturarak ve ardından bu çıktı endeksini *kaliteye göre ayarlayarak* bunu çözer — sağlık için hayatta kalma oranlarını ve bekleme sürelerini; eğitim için akademik başarıyı; polislik için vaka çözümü gibi sonuçları dâhil ederek — böylece aynı sayıda ameliyat yapan ama daha iyi hayatta kalma oranları elde eden bir hizmet yalnızca daha pahalı değil, daha verimli olarak kaydedilir. ONS yayınlarında tekrarlanan manşet bulgu sektör için ciddi bir uyarıdır: Birleşik Krallık kamu hizmeti verimliliği COVID-19 pandemisi sırasında keskin biçimde düştü ve ONS'in kendi 2020'lerin ortası yayınlarına göre harcama artmasına rağmen sağlık hizmeti dâhil birkaç alt sektörde 2019 düzeylerine hâlâ geri dönmemişti — "daha fazla finansman" ile "daha fazla verimlilik"i tamamen ayrı iki soru olarak yeniden çerçeveleyen bir boşluk.

## Matematik

```
Çıktı endeksi (hacim) = Σ (faaliyet_i × göreli birim maliyet ağırlığı_i), tüm hizmet
                         faaliyetleri (örn. kalça ameliyatları, katarakt ameliyatları, GP
                         görüşmeleri) üzerinden baz yıl ağırlıklı, bir Laspeyres/Paasche
                         hacim endeksine benzer

Kalite ayarlaması     = çıktı endeksi × kalite ayarlama faktörü
                         (örn. hayatta kalma oranlarındaki, bekleme sürelerindeki,
                         akademik başarıdaki veya yeniden suç işlemedeki bir değişimi
                         ham hacim üzerinde bir çarpan olarak dâhil etmek)

Girdi endeksi         = Σ (işgücü saatleri × işgücü maliyet ağırlığı) + (mal/hizmet
                         maliyeti, deflatör uygulanmış) + (sermaye tüketimi)

Toplam faktör verimlilik büyümesi = kaliteye göre ayarlanmış çıktı endeksindeki % değişim
                                    − girdi endeksindeki % değişim
```

## Çalışılmış örnek

**Açıklayıcı NHS akut sektör verimliliği hesaplaması** (yapı ONS metodolojisini izler):

```
1. Yıl: çıktı hacim endeksi = 100,0 (baz yıl), girdi endeksi = 100,0
        → verimlilik endeksi = 100,0

2. Yıl: faaliyet hacmi %3,0 artar (daha fazla ameliyat, daha fazla randevu)
        ancak ortalama bekleme süresi kötüleşir, −%1,0'lık bir kalite ayarlama
        iskontosu uygulanır
        Kaliteye göre ayarlanmış çıktı endeksi = 100 × 1,030 × 0,990 = 101,97

        Girdiler artar: personel sayısı +%4,0, diğer maliyetler (deflatör uygulanmış) +%1,5,
        ağırlıklı girdi endeksi = 100 × 1,032 = 103,2

Verimlilik büyümesi = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                    = %1,97 − %3,2 = −1,23 yüzde puan

Yorum: faaliyet arttı, ancak girdiler daha hızlı arttı ve kalite biraz düştü;
dolayısıyla "daha fazla bakım sunulmuş" olsa bile verimlilik — girdi birimi
başına çıktı — düştü.
```

Bu, ONS yayınlarının pandemi sonrası NHS'in bazı bölümleri için defalarca bildirdiği tam örüntüdür: kalite ayarlaması ve girdi büyümesi birlikte hesaba katıldığında, artan harcama ve artan ham faaliyetin düşen ölçülmüş verimlilikle bir arada bulunması.

## Yazılım mühendisliği bağlantısı

Kamu hizmeti verimliliği, mühendislik verimliliği tartışmalarının (teslim edilen hikâye puanları ve [DORA metrikleri](../kamu-değeri-için-dora-metrikleri/) ve [akış metrikleri](../hükümet-teslimatında-akış-metrikleri/)) nüfus düzeyindeki karşılığıdır: kalite ayarlaması olmayan ham verimlilik bir hastanede, bir yazılım ekibinde "teslim edilen kod satırları" kadar yanıltıcıdır. Bakanlıklar için performans veri boru hatları geliştiren ekipler, kalite ayarlamasını bir dipnot değil, birinci sınıf, sürümlenmiş bir dönüşüm aşaması olarak ele almalıdır — çünkü ONS'in kendi inandırıcılığı bu ayarlamanın şeffaf, tekrarlanabilir olmasına ve daha iyi kalite verisi geldikçe revize edilmesine dayanır (ONS, altta yatan kalite verisi — örn. hayatta kalma oranları — kesinleştikçe geçmiş yılların verimlilik tahminlerini revize eder, dolayısıyla bu istatistikleri tüketen herhangi bir aşağı akış sistemi, yalnızca yeni dönemleri eklemekle kalmayıp geriye dönük revizyonları da ele almalıdır). Aynı zamanda [toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/) ve [kamu sektöründe yapay zekâ verimliliği](../kamu-sektöründe-yapay-zekâ-verimliliği/) ile doğrudan kesişir: kaliteyi iyileştirmeden veya sürdürmeden ham faaliyet hacmini artıran bir sistem, ONS'in kendi tanımına göre verimlilik iyileşmesi değildir.

## Tuzaklar

- **Girdi büyümesini verimlilik büyümesi saymak**: daha fazla personeli finanse eden daha fazla harcama, girdi birimi başına çıktı da artmadıkça daha fazla *faaliyet* üretir, daha fazla *verimlilik* değil — ikisi siyasi yorumlarda rutin olarak karıştırılır.
- **Kalite ayarlamasını tamamen göz ardı etmek**: yalnızca ham faaliyet sayılarından oluşturulan bir çıktı endeksi, daha düşük değerli veya daha düşük kaliteli bir şeyden daha fazlasını yapmaktan "verimlilik kazançları" gösterir; ONS'in kalite ayarlaması özellikle bunu yakalamak için vardır.
- **Metodoloji sürümünü eşleştirmeden alt sektörler arasında verimlilik endekslerini karşılaştırmak**: sağlık, eğitim ve polislik verimliliğinin her biri, farklı revizyon döngülerinde farklı faaliyet ve kalite veri kaynaklarından oluşturulur — naif bir sektörler arası karşılaştırma uyumsuz araçları karşılaştırır.
- **Tek bir yılın verimlilik düşüşünü kalıcı bir eğilim olarak okumak**: pandemi dönemi ve pandemi sonrası verimlilik rakamları, kalite verilerinin (örn. bekleme listeleri, seçmeli iyileşme) kendisi değiştikçe yıldan yıla önemli oynaklık göstermiştir; ONS tek yıllık hareketlerin fazla yorumlanmasına karşı tutarlı olarak uyarır.

## Kaynaklar

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
