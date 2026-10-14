# Gölge Fiyatlama

Gölge fiyat, gözlemlenebilir bir piyasa fiyatı olmayan veya piyasa fiyatı çarpıtılmış olup gerçek sosyal değerini yansıtmayan bir mala, kaynağa veya dışsallığa atanan tahmini bir değerdir. Hükümet değerlendirmesi, küçük bir resmî gölge fiyatlar kümesine dayanır — karbon, iş dışı zaman, işsiz emek — merkezî olarak yayımlanır, böylece her bakanlık aynı sayıyı kullanır.

## Neden önemli

Gölge fiyatlar vardır; çünkü [sosyal maliyet-fayda analizi](../sosyal-maliyet-fayda-analizi/) her maliyet ve fayda için parasal bir değer olmadan işleyemez ve en sonuç doğurucu olanlardan birkaçının — salınan bir ton karbon, bir yolcunun bir saati, aksi hâlde işsiz olacak emeğin bir saati — hiç piyasa fiyatı yoktur veya gerçek sosyal maliyetlerini yanlış temsil eden bir piyasa fiyatı vardır. HM Treasury ve Enerji Güvenliği ve Net Sıfır Bakanlığı, tüm Birleşik Krallık hükümet değerlendirmesinde kullanılan karbon gölge fiyatını ortaklaşa yayımlar (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>); bu fiyat herhangi bir karbon piyasası fiyatından değil, hedefle uyumlu bir yaklaşımdan türetilir: karbon değeri, Birleşik Krallık'ın yasalaştırılmış karbon bütçelerine ulaşmak için gereken marjinal azaltım maliyetinde belirlenir; bu, karbonun AB veya Birleşik Krallık Emisyon Ticaret Sistemi'nde gerçekte neyle işlem gördüğünü gözlemlemekten temelde farklı bir mantıktır.

Gölge ücret oranı emek tarafında benzer bir mantık izler. Aksi hâlde işsiz olacak birini istihdam etmek, toplama tam ücretine mal olmaz — o ücretin bir kısmı, toplumun kaynaklarından net yeni bir çekiş değil, vazgeçilen yardım ödemelerinden ve kaybedilen boş zaman/arama zamanından bir transferdir — bu nedenle Green Book rehberliği, işsizlikten gelen emek için piyasa ücretinin altında bir gölge fiyat belirler; bu, o emeğin piyasa fiyatını değil, gerçek fırsat maliyetini yansıtır (bkz. [kamu harcamasında fırsat maliyeti](../kamu-harcamasında-fırsat-maliyeti/)).

## Matematik

```
Karbon gölge fiyatı (açıklayıcı yapı, güncel değerler resmî BEIS/DESNZ
karbon değerleri aracından alınır — eski rakamları kullanmayın):
  Ticareti yapılan sektör değeri: ETS tahsis fiyat yörüngelerinden bilgilendirilir
  Ticareti yapılmayan sektör (hedefle uyumlu) değeri: yasalaştırılmış karbon
    bütçelerini karşılamak için gereken marjinal azaltım maliyetine ayarlanır,
    daha kolay azaltım seçenekleri tükendikçe zamanla artar
  Uygulama: £/ton CO2e × seçenekle salınan veya azaltılan ton,
    gelecek yıllar için sosyal iskonto oranıyla iskonto edilir

Gölge ücret oranı (GÜO):
  GÜO = Piyasa ücreti − (tasarruf edilen vazgeçilmiş boş zaman/arama zamanının değeri
                         + artık ödenmeyen sosyal yardım ödemelerinin değeri)
  Tipik olarak piyasa ücretinin bir kesri olarak ifade edilir (örn. yüksek işsizlik
    olan bir alanda GÜO = 0,6 × piyasa ücreti, Green Book Ek A'nın atıl kapasiteli
    işgücü piyasaları rehberliğine göre)
```

Her iki rakam da merkezî olarak belirlenen politika kurallarıdır, ampirik piyasa gözlemleri değil — gölge fiyatın bütün amacı eksik veya çarpıtılmış bir piyasanın yerini almaktır; bu nedenle birini kullanan bir değerlendirme, kendi rakamını türetmek yerine güncel resmî kaynağı anmalıdır; her bakanlığın değerlendirmesinin karşılaştırılabilir olması tam da bunun içindir.

## Çalışılmış örnek

**Ulusal hükümet**: bir sel savunma programının değerlendirmesi, bir "asgari düzeyde yap" temel senaryosuna karşı 30 yıllık değerlendirme ömrü boyunca yılda 400 ton CO2e emisyonunun (acil durum ekipmanının daha az kullanımı ve önlenen yeniden inşadan kaynaklanan daha düşük gömülü karbon sayesinde) önlendiğini tahmin eder.

```
Açıklayıcı karbon gölge fiyatı: 280 £/ton CO2e (1. yıl, değerlendirme dönemi boyunca
  resmî ticareti yapılmayan karbon değerleri takvimine göre artar)
1. yıl karbon faydası = 400 × 280 £ = 112.000 £
```

Resmî takvim karbon değerini değerlendirme dönemi boyunca *yükselttiği* için (sıkılaşan karbon bütçelerini yansıtır), analist 30 yıllık akışın her yılı için sabit bir oran değil, yıla özgü doğru değeri uygulamalıdır — 1. yılın değerini baştan sona kullanmak, sonraki yılların faydalarını olduğundan düşük gösterir ve farklı karbon profillerine sahip alternatif sel savunma tasarımlarına karşı sıralamayı bozar.

**Yerel yönetim**: bir belediyenin uzun süreli işsiz sakinlere yönelik istihdam destek programı, saatte 11 £ ödeyen işlere 150 kişiyi yerleştirir. Bunu tam piyasa ücretini kullanarak değerlemek, programa çalışılan saat × 11 £'u sosyal fayda olarak atfeder; ancak gölge ücret oranı yaklaşımı, bunların başka işlerden çekilmiş işçiler olmadığını kabul eder — programdan önce emeklerinin gerçek fırsat maliyeti düşüktü.

```
Piyasa ücreti: saatte 11,00 £
Gölge ücret oranı (açıklayıcı, yüksek yerel işsizlik): 0,6 × piyasa ücreti = saatte 6,60 £
Çalışılan saat başına atfedilebilir net sosyal fayda ≈ 11,00 £ − 6,60 £ = saatte 4,40 £
  (gerçekten atıl emeği üretime taşımakla yaratılan "ekstra" değer, büyük ölçüde
   bir transfer olan ücretin kendisinden ayrı olarak)
```

İşsizliğin yüksek olduğu bölgelerdeki istihdam programlarının değerlendirmelerinin, aynı programın, yer değiştiren emeğin yalnızca başka işlerden çekileceği tam istihdam alanında yürütüldüğünde göstermeyeceği hâlde, olumlu net sosyal değer gösterebilmesinin nedeni budur.

## Yazılım mühendisliği bağlantısı

Gölge fiyatlama yazılım teslimatına nadiren doğrudan dokunur, ancak bir iş gerekçesi bir BT değişikliğinden karbon veya sosyal fayda iddia ettiğinde önemlidir — karbon tasarrufu iddia eden bir veri merkezi birleştirmesi ya da önlenen baskı ve posta karbonunu iddia eden bir kâğıtsız hizmet, uydurma bir rakam yerine güncel resmî karbon gölge fiyatını kullanmalı ve herhangi bir Green Book değerlendirme girdisinde olduğu gibi sabit bir oran yerine doğru yıl-yıl takvimi uygulamalıdır. Bkz. [hükümet BT'sinde toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/) ve [kamu sektörü siber güvenlik değeri](../kamu-sektörü-siber-güvenlik-değeri/); ikisi de doğrudan maliyetlendirilmiş kalemlerin yanında, parasallaştırılması zor bir girdi (ihlal riski, kesinti) için çoğu zaman bir gölge fiyata ihtiyaç duyar.

## Tuzaklar

- **Eski bir karbon veya ücret rakamını kullanmak.** Her iki değer de merkezî rehberlik tarafından periyodik olarak revize edilir; geçersiz kılınmış bir rakama dayanan bir değerlendirme Hazine incelemesinden sağ çıkamaz.
- **Onlarca yıllık bir değerlendirme boyunca sabit bir gölge karbon fiyatı uygulamak.** Resmî takvim zamanla yükselir; 1. yılın değerini baştan sona kullanmak fayda veya maliyet profilini yanlış gösterir.
- **Gölge ücreti işçinin gerçek ücretinde bir indirimle karıştırmak.** Gölge ücret oranı, işçiye gerçekte ödenen ücreti değil, *değerlendirmenin* emek girdisi değerlemesini ayarlar — ikisini karıştırmak (yanlış biçimde) piyasa altı ücreti haklı çıkarmayı davet eder.
- **Resmî olanı kullanmak yerine özel bir gölge fiyat türetmek.** Gölge fiyatlar, değerlendirmelerin bakanlıklar arasında karşılaştırılabilir olması için tam da politika kurallarıdır; ne kadar iyi gerekçelendirilmiş olursa olsun, yerel olarak uydurulmuş bir rakam bu karşılaştırılabilirliği bozar.

## Kaynaklar

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
