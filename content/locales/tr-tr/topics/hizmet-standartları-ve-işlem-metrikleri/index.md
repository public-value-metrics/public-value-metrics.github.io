# Hizmet Standartları ve İşlem Metrikleri

GOV.UK Hizmet Standardı (Service Standard), Birleşik Krallık hükümetinin bir kamu dijital hizmetini oluşturmak ve işletmek için 14 maddelik kontrol listesidir ve yayında olan her merkezî hükümet hizmeti için ekiplerin yayımlaması gereken küçük, zorunlu bir nicel işlem metrikleri kümesi — işlem başına maliyet, tamamlama oranı, dijital benimseme ve kullanıcı memnuniyeti — ile birlikte gelir. Standart ve metrikler birlikte, bu depodaki daha geniş kamu değeri ve KPI çerçevelerinin, doğrudan yazılım teslimat ekiplerine yönelik operasyonel, günlük uzmanlaşmasıdır.

## Neden önemli

GOV.UK'nin hizmet kılavuzunda sürdürülen Hizmet Standardı, bir hükümet dijital hizmetinin her anlık değerlendirmesinin (alfa, beta, canlı) — 14 maddesi arasında — ekibin kullanıcı ihtiyaçlarını anladığını, çok disiplinli bir ekipte çalıştığını, sık sık yinelediğini ve iyileştirdiğini ve *araçları, sistemleri ve çalışma biçimlerini değerlendirdiğini* göstermesini şart koşar. Tarihsel olarak bu, her canlı hizmetin işlem verilerini açıkça yayımladığı kamusal bir Performance Platform ile birlikte duruyordu; bu platform artık kapatılmıştır, ancak bu dört temel metriği ölçme ve yayımlama yükümlülüğü hizmet kılavuzunun "başarıyı ölçme" rehberliği aracılığıyla sürmektedir. Bunun genel bir yazılım KPI gösterge panelinden farklı olmasının nedeni, bu metriklerin dört bağımsız puan olarak değil, bağlantılı tek bir ekonomik model olarak açıkça tasarlanmış olmasıdır: dijital hükümetin tüm tasarruf gerekçesi — Government Digital Service'in Dijital Verimlilik Raporu, dijital işlemlerin karşılaştırılabilir yerel yönetim hizmetleri için telefona göre kabaca 20 kat ve yüz yüze görüşmeye göre yaklaşık 50 kat daha ucuz olduğunu buldu — yalnızca tamamlama oranı yüksek kalırsa ve dijital benimseme gerçekten artarsa, yani değişmemiş pahalı bir kanalın yanına yalnızca ucuz bir kanal eklenmezse gerçekleşir.

## Matematik

```
İşlem başına maliyet = toplam hizmet işletme maliyeti / tamamlanan işlem sayısı
Tamamlama oranı      = tamamlanan işlemler / başlatılan işlemler × 100
Dijital benimseme    = dijital kanal işlemleri / tüm kanal işlemleri × 100
Kullanıcı memnuniyeti = % memnun + çok memnun, hizmet içi 5 puanlık anket

Kanal değişimi tasarrufu = işlem hacmi × benimseme kayması × (eski kanaldaki işlem
                           başına maliyet − dijital işlem başına maliyet)

Başarısızlık talebi maliyeti = (1 − tamamlama oranı) × dijital olarak denenen işlemler ×
                               bu kullanıcıların bunun yerine kullandığı yedek kanalın maliyeti
```

## Çalışılmış örnek

**Açıklayıcı merkezî hükümet ruhsat yenileme hizmeti**, yılda 2 milyon işlem, şu anda %65 telefon (işlem başına 3,00 £) ve %35 dijital (işlem başına 0,30 £), tamamlama oranı %80. 14 maddelik Hizmet Standardına karşı bir yeniden tasarım dijital benimsemeyi %60'a ve tamamlamayı %92'ye çıkarır:

```
Benimseme kayması tasarrufu = 2.000.000 × 0,25 × (3,00 − 0,30) = yılda 1.350.000 £

Başarısızlık talebi maliyeti, önce:
  2.000.000 × 0,35 × (1 − 0,80) × 3,00 £ = yılda 420.000 £ (bırakanlar telefona döner)

Başarısızlık talebi maliyeti, sonra:
  2.000.000 × 0,60 × (1 − 0,92) × 3,00 £ = yılda 288.000 £

Net başarısızlık talebi tasarrufu = 420.000 £ − 288.000 £ = yılda 132.000 £

Toplam yıllık tasarruf ≈ 1.350.000 £ + 132.000 £ = yılda 1.482.000 £
```

Aritmetik, tamamlama oranının neden ikincil bir metrik olmadığını açıkça gösterir: %80'den %92'ye iyileşme olmadan, benimseme kayması tasarrufu kısmen, hayal kırıklığına uğramış dijital kullanıcıları doğrudan pahalı telefon kanalına geri yönlendiren başarısızlık talebi tarafından geri alınırdı.

## Yazılım mühendisliği bağlantısı

Bu dört metrik, maliyet-sonuç gösterge panelinin çalışan bir örneğidir: üç sonuç/kalite metriğinden ayrı tutulan bir maliyet metriği, bilinçli olarak asla tek bir puana indirgenmez — [kamu sektörü KPI'ları](../kamu-sektörü-kpıları/) bölümünde savunulan aynı disiplin. Mühendisler için bu, somut, sahiplenilebilir işe ayrılır: tamamlama oranı bir huni araçlandırma sorunudur ve yolculuktaki her terk noktası, prensipte konumlandırılabilir ve düzeltilebilirdir; işlem başına maliyet, yalnızca bulut barındırma harcaması değil, personel destekli ve kâğıt kanal maliyetlerini de içeren gerçek birim maliyet muhasebesi gerektirir (bkz. [işlem başına maliyet](../işlem-başına-maliyet/) ve [hükümet BT'sinde toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/)); ve dijital benimseme, verimlilik kostümü giymiş bir eşitlik metriğidir — kanal değiştiremeyen veya değiştirmeyen vatandaşlar orantısız biçimde yaşlı, engelli veya dijital olarak dışlanmış kişilerdir, dolayısıyla agresif kanal kapatma bir "tasarrufu" bir erişim zararına dönüştürür (bkz. [dijital kapsayıcılık](../dijital-kapsayıcılık/) ve [kanal değişimi tasarrufları](../kanal-değişimi-tasarrufları/)). 14 maddelik standardın kendisi bu sayıların arkasındaki süreç şartnamesidir — standardın tamamı için bkz. [dijital hizmet standardı](../dijital-hizmet-standardı/); buradaki memnuniyet rakamının daha geniş güven ölçümüyle nasıl ilişkili olduğu için ise [vatandaş memnuniyeti metrikleri](../vatandaş-memnuniyeti-metrikleri/).

## Tuzaklar

- **Alternatif kanalı kapatarak elde edilen benimseme**: bir telefon hattını kapatmak, dijital benimseme yüzdesini aritmetik olarak yükseltirken başarısızlık talebini geri kalan kanala (çoğu zaman daha pahalı bir destekli dijital veya yüz yüze yol) boşaltır; yalnızca oranı değil, her zaman toplam sistem maliyetini ölçün.
- **Tamamlama oranını huninin ikinci adımından ölçmek**: "başlatılan" sayısını ilk gerçek terk noktasından sonra başlatmak, tamamlama oranını olduğundan iyi gösterir ve en büyük düzeltilebilir kaybı gizler.
- **Destekli dijital desteği hariç tutan işlem başına maliyet**: kendi kendine hizmet edemeyen kullanıcılara yardım etmek için harcanan personel zamanını göz ardı eden yalnızca dijital bir birim maliyet, kanalın gerçek maliyetini olduğundan düşük gösterir.
- **Hizmetler arasında paylaşılan bir tanım olmadan metrik yayımlamak**: "işlem" ve "tamamlandı" ifadeleri, tanımlar standartlaştırılıp sürümlenmedikçe farklı hizmet ekiplerinde farklı anlamlara gelir; bu da hizmetler arası karşılaştırmayı güvenilmez kılar.

## Kaynaklar

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
