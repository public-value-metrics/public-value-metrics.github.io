# Sosyal İskonto Oranı

Sosyal iskonto oranı, getirileri onlarca yıla yayılan programların ortak bir temelde karşılaştırılabilmesi için gelecekteki maliyetleri ve faydaları bugünkü değerlere dönüştürür. HM Treasury'nin Green Book'u, Ramsey formülüne dayanan ve ilk 30 yıl için %3,5'e sabitlenmiş, azalan bir takvim zorunlu kılar; bu, iklim politikası veya altyapı gibi uzun vadeli taahhütlere uygulandığında canlı bir siyasi ve etik tartışmaya dönüşen, belirli ve alıntılanabilir bir sayıdır.

## Neden önemli

30 yıl sonra elde edilen bir sterlinlik fayda, bugün elde edilen bir sterlinlik fayda kadar değerli değildir; bunun nedenleri kısmen saf zaman tercihi (insanlar ve toplumlar iyi şeyleri daha erken ister), kısmen de büyümedir (gelecekteki bir toplumun daha zengin olması beklenir, dolayısıyla bir sterlin onun için marjinalde daha az önem taşır). Green Book'un 6. Eki, Birleşik Krallık'ın standart iskonto oranını Ramsey formülünden türetir; saf zaman tercihi oranını beklenen tüketim büyüme oranı ve tüketimin marjinal fayda esnekliğiyle birleştirerek 0–30. yıllar için yıllık %3,5'lik yayımlanmış oranı, 31. yıl ve sonrası için ise yayımlanmış bir takvimde azalan oranları (301. yıl ve sonrası için %1'e kadar) üretir. Bu takvim tam da şu nedenle vardır: yüzyıl boyunca bileşik hesaplanan sabit bir %3,5, neredeyse her uzun vadeli faydayı — 80 yıl sonra can kurtaran bir sel savunması, 100 yıl sonra zararı önleyen bir karbon azaltımı — bugünkü değer cinsinden önemsiz gösterirdi; Hazine bunu, gerçekten uzun ömürlü altyapı ve çevre kararları için inandırıcı olmayan bir etik sonuç olarak değerlendirmiştir.

İskonto oranı, tercihin tarafsız bir teknik parametre olmaması nedeniyle tartışmalıdır: bir toplumun henüz doğmamış insanlar için bugün ne kadar fedakârlık yapması gerektiğine dair bir yargıyı kodlar. İklim Değişikliğinin Ekonomisi üzerine Stern Raporu (2006), sıfıra yakın bir iskonto oranı kullandı (%0,1 civarında saf zaman tercihi) ve zarar (yıkıcı iklim değişikliği) geri döndürülemez olduğunda gelecek nesillerin refahını piyasa oranlarına benzer bir oranla iskonto etmenin etik olarak savunulamaz olduğunu savundu. Eleştirmenler — özellikle William Nordhaus — Stern'ün sıfıra yakın oranının, neredeyse hiç iskonto edilmemiş bir gelecek faydaya karşı hemen her bugünkü maliyeti haklı gösterdiği için acil iklim harcamasının gerekçesini abarttığını savundu. Anlaşmazlık matematikle ilgili değildi; oranı hangi etik çerçevenin belirlemesi gerektiğiyle ilgiliydi ve iskonto oranının yalnızca aktüeryal bir girdi değil, bir politika tercihi olduğunu gösteren standart örnek olmayı sürdürmektedir.

## Matematik

Green Book'un oranının altında yatan Ramsey formülü:

```
r = ρ + η·g

burada:
  r = sosyal iskonto oranı
  ρ = saf zaman tercihi oranı (sabırsızlık + felaket riski)
  η = tüketimin marjinal fayda esnekliği
  g = kişi başına tüketimin beklenen yıllık büyüme oranı
```

Green Book'un azalan takvimi (6. Ek, açıklayıcı — kesin yayımlanmış tablo için güncel baskıya bakın):

```
0–30. yıllar:     %3,5
31–75. yıllar:    %3,0
76–125. yıllar:   %2,5
126–200. yıllar:  %2,0
201–300. yıllar:  %1,5
301+ yıllar:      %1,0
```

Gelecekteki bir tutarın bugünkü değeri:

```
BD = GD / (1 + r)^t
```

## Çalışılmış örnek

**Sel savunma projesi**: bir proje, 40. yılda 10 milyon £'luk önlenmiş sel hasarı sağlar.

Sabit %3,5 oranıyla: BD = 10.000.000 / (1,035)^40 ≈ 2,52 milyon £ — fayda küçük görünür.

Green Book'un azalan takvimiyle (0–30. yıllar için %3,5, sonrasında %3,0) hesaplama ilk 30 yıl için %3,5, 31–40. yıllar için %3,0 ile bileşik hesaplanır:

```
BD = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ 2,65 milyon £
```

Azalan takvim, uzun vadeli faydaların bugünkü değerini sabit yüksek orana göre ılımlı biçimde yükseltir — takvimin açık amacı budur; çünkü bir yüzyıl boyunca sabit %3,5, 100. yıldaki 100 milyon £'luk bir faydayı 3,3 milyon £'nun altına iskonto ederdi.

**Dijital altyapı**: şu anda 4 milyon £'ya mal olan bir hükümet bulut geçişinin, 15 yıl boyunca yılda 500.000 £'luk eski sistem bakım maliyetini önlemesi beklenmektedir. %3,5'te bu anüitenin bugünkü değeri yaklaşık 500.000 £ × 11,52 (%3,5'te 15 yıllık anüite faktörü) ≈ 5,76 milyon £'dur — 4 milyon £'luk maliyeti rahatça aşan, olumlu net bugünkü değerli bir durum; naif biçimde seçilmiş daha yüksek bir oranda belirgin biçimde daha zayıf görünürdü (%7'de aynı anüite faktörü yaklaşık 9,11'e düşer ve 4,56 milyon £ verir; hâlâ olumlu ama çok daha ince bir marjla).

## Yazılım mühendisliği bağlantısı

Çoğu yazılım iş gerekçesi 3–5 yıl üzerinden işler; bu da sabit %3,5 bandının içindedir, dolayısıyla azalan takvim nadiren doğrudan etkili olur. Ancak altta yatan disiplin, uzun varlık ömrüne sahip her hükümet teknoloji yatırımı için (ulusal bir platform, bir veri altyapısı programı, onlarca yıllık bir sözleşme) önemlidir:

- Özel finanstan ödünç alınmış dahili bir "eşik oranı" yerine Green Book'un yayımlanmış oranını kullanın; denetçiler ve Hazine değerlendiricileri standart takvimi bekleyecektir.
- Yıllar sonra gerçekleşen faydalar için (bir platformun uzun vadeli bakım tasarrufları, bir açık veri ekosisteminin birikimli değeri — bkz. [açık veri değeri](../açık-veri-değeri/)), iskonto tercihi bir iş gerekçesini olumludan olumsuza çevirebilir; oranı ve ufku gömülü varsayılanlar değil, açık varsayımlar olarak belirtin.
- Bu, iskonto edilmiş nakit akışını resmî olarak zorunlu kılan beş durumlu model olan [green-book-appraisal](../green-book-değerlendirmesi/)'a ve parasal olmayan refah faydaları için aynı iskonto sorusunun ortaya çıktığı [wellbeing-valuation](../refah-değerlemesi/)'a doğrudan bağlanır.
- Stern–Nordhaus tartışmasının özellikle çevre ve iklim teknolojisi yatırımına uygulanması için ayrıca bkz. [nesiller arası eşitlik ve sürdürülebilirlik iskontosu](../nesiller-arası-eşitlik-ve-sürdürülebilirlik-iskontosu/).

## Tuzaklar

- **Çok uzun ufuklar için sabit bir oran kullanmak.** Green Book'un azalan takvimi tam da sabit bir oranın gerçekten uzun ömürlü faydaları olduğundan düşük gösterdiği için vardır; baştan sona %3,5'e varsayılan olarak başvurmak yerine hangi bandın geçerli olduğunu kontrol edin.
- **İskonto oranını etik olarak tarafsız saymak.** Stern–Nordhaus anlaşmazlığı, oranın gelecek nesillere dair bir değer yargısını kodladığını gösterir; onu değiştirmek hangi programların haklı göründüğünü değiştirir, bu nedenle bir elektronik tablo varsayılanında gizlenmek yerine belirtilmeli ve savunulmalıdır.
- **Sosyal iskonto oranını özel sermaye maliyetiyle karıştırmak.** Hükümetin borçlanma maliyetleri ve özel sektör eşik oranları, Ramsey'den türetilen sosyal orandan farklı kavramlardır; bir kamu değerlendirmesinde birini diğerinin yerine koymak sonucu tipik olarak kısa vadeli getirileri kayıran yönde bozar.
- **Reel ve nominal nakit akışlarını tutarsız biçimde iskonto etmek.** Green Book oranı reel (enflasyondan arındırılmış) bir orandır; nominal nakit akışlarını onunla iskonto etmek bugünkü değerleri önemli ölçüde olduğundan düşük gösterir.

## Kaynaklar

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
