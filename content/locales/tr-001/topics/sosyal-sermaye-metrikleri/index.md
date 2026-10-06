# Sosyal Sermaye Metrikleri

Sosyal sermaye metrikleri, toplulukların ve kurumların verimli işlemesini sağlayan ağları, güveni ve sivil katılımı nicelleştirir — hiçbir bilançoda satırı olmayan, ancak var olduğunda maliyeti ve sürtünmeyi görünür biçimde çökerten ve yokken görünür biçimde artıran "bağ dokusu". Modern çerçeve, bağlayıcı sermayeyi (benzer bir grup içindeki bağlar) köprüleyici sermayeden (farklı gruplar arasındaki bağlar) ayıran Robert Putnam'ın "Bowling Alone" (2000) eserinden gelir; Birleşik Krallık Ulusal İstatistik Ofisi bunu ulusal düzeyde izlemek için o tarihten bu yana kalıcı bir gösterge kümesi oluşturmuştur.

## Neden önemli

Putnam'ın merkezî ampirik iddiası — yirminci yüzyılın sonlarında azalan ABD sivil dernek üyeliği, kilise katılımı ve sendika katılımı yoluyla belgelenmiş — sosyal sermayenin geleneksel iktisadın açıklamakta zorlandığı sonuçları öngördüğüydü: daha düşük suç, daha iyi çocuk refahı, daha etkili yerel yönetim, şoklardan sonra daha hızlı ekonomik toparlanma. Bağlayıcı sermaye (sıkı bir grup içindeki güçlü bağlar) karşılıklı destek için iyidir ancak içe kapanıklığa katılaşabilir; köprüleyici sermaye (farklı gruplar arasındaki daha zayıf bağlar) tipik olarak fırsata erişimle, bilgi akışıyla ve kurumsal güvenle ilişkilendirilen şeydir. ONS bunu ulusal bir gösterge çerçevesi oluşturacak kadar ciddiye aldı — "Social Capital in the UK" serisi (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) dört sütunu izler: kişisel ilişkiler, sosyal ağ desteği, sivil katılım ve güven ile işbirlikçi normlar; her biri yerleşik anket sorularından (Community Life Survey, Understanding Society) oluşturulmuştur. Kamu sektörü dijital hizmetleri için sosyal sermaye iki kat ilgilidir: hem bazı programların inşa etmeye çalıştığı bir sonuçtur (toplum dayanıklılığı finansmanı, sosyal reçeteleme) hem de bir hizmetin gerçekte ne kadar benimseneceğini belirleyen bir girdidir — yüksek güvenli, iyi ağlı bir topluluğa sunulan bir hizmet, düşük güvenli bir alandaki özdeş bir hizmetin yapamayacağı şekilde ağızdan ağıza yayılır.

## Matematik

```
ONS dört sütunlu çerçeve (göstergeler, açıklayıcı):

Kişisel ilişkiler:           kriz anında güvenebileceği biri olanların %'si
Sosyal ağ desteği:           gerekirse arkadaşlarından/ailesinden borç alabilecek olanların %'si
Sivil katılım:               son 12 ayda gönüllü olan veya sivil eylemde bulunanların %'si
Güven ve işbirlikçi normlar: "çoğu insana güvenilebilir" ifadesine katılanların %'si

Tek bir ONS bileşik puanı yayımlanmaz — sütunlar bilinçli olarak ayrı raporlanır,
çünkü bunları tek bir endekste toplamak hangi belirli sütunun zayıf olduğunu gizlerdi.

Putnam'ın bağlayıcı/köprüleyici ayrımı (bir formül değil, çerçeve):
  bağlayıcı sermaye ≈ homojen bir grup içindeki bağların yoğunluğu
  köprüleyici sermaye ≈ farklı gruplar arasındaki bağların sıklığı/gücü
```

## Çalışılmış örnek

**Mahalle sosyal sermaye anlık görüntüsü**: yerel bir alanın Community Life Survey tarzı bir anketi, %78'inin kriz anında güvenebileceği biri olduğunu (kişisel ilişkiler), %61'inin gerekirse borç alabileceğini (ağ desteği), %24'ünün son yılda gönüllü olduğunu (sivil katılım) ve %41'inin "çoğu insana güvenilebilir" ifadesine katıldığını (güven ve normlar) bulur — karşılığında ulusal ortalamalar sırasıyla kabaca %85, %70, %30 ve %45'tir (açıklayıcı, güncel ONS bülteniyle kalibre edin). Alan her sütunda ulusal ortalamanın altında kalır, ancak en keskin biçimde güven (%41'e karşı %45 ulusal, 4 puanlık fark) ve sivil katılımda (%24'e karşı %30, 6 puanlık fark) — hedefli yatırıma (örneğin bir topluluk hibe programı) değer en büyük göreli açık olarak güveni değil sivil katılımı işaretler; genel bir "güven inşa et" girişimi yerine.

**Bağlayıcı ve köprüleyici, hizmet tasarımı**: sıkı bir toplulukta bir iş programı, sevklerin topluluk içinde hızlı seyahat ettiğini (yüksek bağlayıcı sermaye: söz günler içinde yayılır) ancak programın o ağın dışındaki sakinlere ulaşmakta zorlandığını (düşük köprüleyici sermaye: çekirdek topluluğun dışındaki benimseme aylar sonra sıfıra yakın) bulur. İma edilen çözüm "daha fazla pazarlama" değil, mevcut ağın *dışında* yer alan kuruluşlarla ortaklık kurarak köprüleyici bağları kasıtlı olarak inşa etmektir; çünkü bağlayıcı sermaye tek başına bir köprüleyici sermaye sorununu çözemez.

## Yazılım mühendisliği bağlantısı

- Karşılıklı yardım, gönüllülük veya topluluk hibelerini yönlendiren dijital platformlar (örneğin bir "yerel bağlayıcı" hizmeti) kelimenin tam anlamıyla köprüleyici sermaye altyapısı inşa ediyor; başarı metrikleri yalnızca işlem sayısı değil, kurulan bağlantıların ağ çeşitliliği olmalıdır — başkalarının üzerine değer inşa ettiği altyapının daha geniş örüntüsü için bkz. [platform olarak hükümet](../platform-olarak-hükümet/).
- Bir programın değişim kuramı sosyal sermayeyi açıkça bir sonuç olarak hedeflediğinde (bir toplum dayanıklılığı fonu, bir sosyal reçeteleme hizmeti), [değişim kuramı](../değişim-kuramı/) ve [mantık modeli](../mantık-modeli/), ONS temel çizgisine karşı ölçülemeyen ayrım yapılmamış bir "toplum inşa et" sonucu yerine, hareket ettirmeyi beklediği belirli sütunu (güven, sivil katılım, ağ desteği) adlandırmalıdır.
- Sosyal sermaye göstergeleri, [Çoklu Yoksunluk Endeksi](../çoklu-yoksunluk-endeksi/) ile birlikte yararlı bir eşitlik merceğidir: bir alan gelir bakımından yoksun ama sosyal olarak zengin olabilir, veya tersi ve ikisi çok farklı müdahalelere işaret eder.

## Tuzaklar

- **Dört ONS sütununu tek bir bileşik puana çökertmek** — ONS bunu bilinçli olarak yapmaz; tek bir sayı hangi belirli sütunun düşük bir okumayı yönlendirdiğini gizler ve ortalama almak, yüksek güvenli ama sivil olarak ilgisiz bir topluluğu, tersi olandan ayırt edilemez kılar.
- **Sosyal sermayenin her zaman iyi olduğunu varsaymak** — içe kapanık bir gruptaki yoğun bağlayıcı sermaye, dış kurumlara (hükümet hizmetleri dâhil) aktif olarak direnebilir; Putnam'ın kendi analizi bağlayıcı ve köprüleyiciyi farklı, bazen çelişen etkileri olan farklı iyilikler olarak ele alır.
- **Anket tabanlı sosyal sermaye ölçülerini gerçek zamanlı operasyonel bir metrik olarak kullanmak** — altta yatan anketler (Community Life Survey, Understanding Society) yıllık veya daha seyrek çalışır; sosyal sermaye verisini, bir hizmet gösterge panelinin haftalık güncelleyebileceği bir şey değil, yavaş hareket eden bağlamsal bir gösterge olarak ele alın.

## Kaynaklar

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
