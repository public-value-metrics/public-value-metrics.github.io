# Dijital Kapsayıcılık

Dijital kapsayıcılık, "varsayılan olarak dijital"in "yalnızca dijital" olmamasını sağlama disiplinidir — en ucuz kanal etrafında tasarlanan kamu hizmetlerinin, onu yardımsız kullanamayan veya kullanmayan vatandaşlar için hâlâ işlediğinden emin olmak. GDS, belirli teslimat mekanizması olan "destekli dijital"i, her hükümet dijital hizmeti için isteğe bağlı bir ek değil, zorunlu bir gereklilik olarak ortaya attı.

## Neden önemli

2012 Hükümet Dijital Stratejisi hedefi açıkça belirledi: dijital hizmetler varsayılan olarak dijital inşa edilmeli, ancak stratejinin kendisi Birleşik Krallık yetişkinlerinin yaklaşık %10'unun yardım olmadan bunları kullanamayacağını kabul etti ve bakanlıkları destekli dijital destek sağlamaya — telefonla, yüz yüze veya bir aracı yoluyla insan aracılığıyla bir yol — sonradan eklenmiş ayrı bir yedek olarak değil, hizmetin bir parçası olarak taahhüt ettirdi. Bu taahhüt artık [dijital hizmet standardı](../dijital-hizmet-standardı/) madde 5'tir, "hizmeti herkesin kullanabildiğinden emin olun". Süregiden dışlanmanın ölçeği, Lloyds Banking Group'un yıllık UK Consumer Digital Index'i tarafından izlenir: 2024 baskısı, Birleşik Krallık'ta yaklaşık 1,6 milyon kişinin çevrimdışı kaldığını ve bu grubun ağırlıklı olarak 70–79 yaş arası kişilere, 35.000 £'un altında kazananlara ve emekli veya işsiz olanlara eğilimli olduğunu buldu — yeniden tasarlanan kamu hizmetlerine bağımlı olma olasılığı en yüksek nüfus tam olarak budur. Aynı rapor, Birleşik Krallık işgücünün yalnızca %48'inin Temel Dijital Beceriler çerçevesindeki 20 görevin hepsini tamamlayabildiğini buldu; bu, dışlanmanın ikili bağlantı olmadığı, basit bir "genişbant var mı" metriğinin tamamen kaçırdığı bir beceri, güven ve itimat yelpazesi olduğu anlamına gelir.

## Matematik

Dijital kapsayıcılık tek bir formül değil, bir çerçeve ve eşitlik kontrolüdür, ancak [dağılımsal ağırlıklandırma](../dağılımsal-ağırlıklandırma/) aracılığıyla nicel değer değerlendirmesiyle birleşir:

```
Naif kanal değişimi değeri:
  değer = kaydırılan hacim × (eski_maliyet − dijital_maliyet)     [bkz. channel-shift-savings]

Kapsayıcılığa göre ayarlanmış değer:
  değer = (kaydırılan hacim × ağırlıksız tasarruf)
        − (dışlanan kullanıcılar × destekli dijital sağlama maliyeti)
        − (erişimi kaybeden veya düşmüş hizmet kalitesiyle karşılaşan dışlanan
           gruplara verilen zarar için dağılımsal ağırlık ayarlaması)

Destekli dijital başarısızlığın artık maliyeti değildir — kendi
[işlem başına maliyeti](../işlem-başına-maliyet/) olan, tasarlanmış bir kanaldır;
tipik olarak self servis dijitalden işlem başına çok daha yüksektir ancak yine de
kısmen yerini aldığı eski kanaldan genellikle daha ucuzdur.
```

## Çalışılmış örnek

**Universal Credit tarzı ulusal yardım hizmeti**: yılda 2,5 milyon başvuru; Hükümet Dijital Stratejisi planlama varsayımına göre başvuru sahiplerinin tahmini %10'u için destekli dijital desteğe ihtiyaç duyduğu değerlendirilmiştir.

```
Dışlanan/destekli dijital kohortu = 2.500.000 × %10 = yılda 250.000 başvuru

Destekli dijital kanal maliyeti (savunmasızlık ve karmaşıklığı ele almak için
kadrolanmış telefon + yüz yüze destek) ≈ başvuru başına 9,50 £
  = 250.000 × 9,50 £ = yılda 2.375.000 £

Diğer %90 için self servis dijital maliyet ≈ başvuru başına 0,40 £
  = 2.250.000 × 0,40 £ = yılda 900.000 £

Harmanlanmış işlem başına maliyet = (2.375.000 + 900.000) / 2.500.000
  = başvuru başına 1,31 £

Daha düşük bir manşet işlem başına maliyete ulaşmak için destekli dijitali atlayan
bir tasarım (örn. 250.000 dışlanan başvuru sahibini göz ardı eden harmanlanmış
0,40 £), bu 2,375 milyon £'luk maliyeti ortadan kaldırmaz — onu tamamen farklı bir
bütçeye düşen talep edilmeyen haklara, itirazlara ve aşağı akış kriz hizmeti
talebine dönüştürür.
```

## Yazılım mühendisliği bağlantısı

Destekli dijital tasarlanmış bir kanaldır, yani herhangi bir diğeri gibi arayüzleri, SLA'ları ve araçlandırması vardır: telefon tabanlı bir vaka çalışanı aracı, Citizens Advice veya bir yerel yönetim için bir aracı portalı ya da yüz yüze bir kiosk akışı. Onu sonradan düşünülmüş bir şey olarak ele almak — keşiften itibaren değerlendirilen bir kanal yerine küçük yazıyla bir telefon numarası — hizmetlerin değerlendirmede [dijital hizmet standardı](../dijital-hizmet-standardı/) madde 5'te başarısız olmasının en yaygın tek yoludur. Dijital kapsayıcılık, bu bölümdeki her diğer konu üzerinde eşitlik merceğidir: [kanal değişimi tasarruflarının](../kanal-değişimi-tasarrufları/) ne kadar agresif gerçekleştirilebileceğini sınırlar, [işlem başına maliyet](../işlem-başına-maliyet/)e dürüstçe dâhil edilmesi gereken bir kalemdir ve [dağılımsal ağırlıklandırma](../dağılımsal-ağırlıklandırma/)nın bir dijital hizmetler bağlamına doğrudan uygulamasıdır — zaten dijital ve ekonomik olarak dışlanmış insanlara orantısız biçimde düşen bir tasarruf, nüfus genelinde eşit yayılmış bir tasarrufa eşdeğer sayılmak yerine aşağı doğru ağırlıklandırılmalıdır.

## Tuzaklar

- **"Varsayılan olarak dijital"i "yalnızca dijital" olarak okumak**: dijital benimseme bir eşiği aştığında, kalan kohortun gerçekten kullanılabilir bir alternatifi olduğunu doğrulamadan telefon hattını veya gişeyi kapatmak.
- **Kapsayıcılığı ikili bağlantıyla ölçmek**: "genişbandı var" veya "bir akıllı telefona sahip" belirli bir işlemi tamamlama yeteneği için zayıf bir vekildir — Temel Dijital Beceriler boşluğu (Lloyds 2024'e göre Birleşik Krallık işgücünün yalnızca %48'i 20 görevin hepsini tamamlıyor) becerilerin ve güvenin erişim kadar önemli olduğunu gösterir.
- **Destekli dijitali yuvarlama hatası olarak maliyetlendirmek**: onu kendi [işlem başına maliyeti](../işlem-başına-maliyet/) olan uygun bir kanal yerine küçük bir olasılık kalemi olarak bütçelemek, sonra yayında yetersiz finanse edilmiş ve yetersiz kadrolanmış olmasına şaşırmak.
- **Yalnızca başarılı dijital tamamlayanlara anket yapmak**: tamamen hizmet içinde yürütülen memnuniyet ve kullanılabilirlik araştırması, o noktaya hiç ulaşmayan insanları kaçırır; dijital kapsayıcılık çalışmasının korumayı amaçladığı nüfus tam olarak budur.

## Kaynaklar

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
