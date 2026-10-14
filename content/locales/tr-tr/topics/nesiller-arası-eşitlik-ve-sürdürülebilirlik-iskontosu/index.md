# Nesiller Arası Eşitlik ve Sürdürülebilirlik İskontosu

Gelecekteki maliyetleri ve faydaları bugünkü değere iskonto etmek kamu değerlendirmesinde standart uygulamadır — bkz. [sosyal iskonto oranı](../sosyal-iskonto-oranı/) — ancak onlarca veya yüzlerce yıl boyunca bileşik hesaplanan herhangi bir pozitif iskonto oranı, uzak geleceği bugünün terimleriyle sıfıra doğru küçültür. Sonuçları bir yüzyıl veya daha ileride olan kararlar için — iklim değişikliği, nükleer atık, biyoçeşitlilik kaybı, emeklilik sürdürülebilirliği — bu matematiksel gerçek etik bir gerçeğe dönüşür: standart iskonto, gelecek nesillere yönelik yıkıcı zararı, bugünkü değer terimleriyle, önlemeye zar zor değer gibi gösterebilir.

## Neden önemli

Frank Ramsey'in 1928'de türettiği Ramsey denklemi, iskonto oranını iki bileşene ayırır: saf zaman tercihi (δ, servetten bağımsız olarak şimdiyi sonraya basitçe ne kadar tercih ettiğimiz) ve servet büyümesi etkisi (η×g, gelecek nesillerin daha zengin olması beklendiği için, ek bir sterlin onlar için daha az önem taşıdığından ne kadar iskonto ettiğimiz). Birleşik Krallık Green Book'un standart uzun vadeli iskonto oranı bu denkleme dayanır ve sabit bir oran yerine *azalan* bir takvimi izler — Martin Weitzman'ın "gama iskontosu" üzerine çalışmasına dayanan bir tasarım; bu çalışma, gelecekteki iskonto oranının kendisi belirsiz olduğunda, uygulamanız gereken kesinlik eşdeğeri oranın zamanla matematiksel olarak azaldığını gösterir, çünkü ne kadar ileriye bakarsanız düşük oranlı senaryolar o kadar baskın hâle gelir. Sir Nicholas Stern liderliğindeki İklim Değişikliğinin Ekonomisi üzerine Stern Raporu (2006), etik tartışmayı daha da ileri taşıdı: Stern, saf zaman tercihinin sıfıra yakın belirlenmesi gerektiğini savundu (δ ≈ %0,1 kullandı; bu, bugünü gelecekten gerçek bir tercih değil, yalnızca medeniyeti sona erdiren felaketin küçük olasılığını yansıtır), bu da geleneksel Green Book uygulamasından çok daha düşük bir etkin iskonto oranı ve buna karşılık gelen çok daha büyük bir bugünkü iklim eylemi gerekçesi üretti. Eleştirmenler (özellikle William Nordhaus), Stern'ün sıfıra yakın oranının etik olarak savunulabilir ancak gerçekte gözlenen tasarruf ve yatırım davranışıyla tutarsız olduğunu savundu. Anlaşmazlık teknik bir dipnot değil — eşit derecede titiz iki ekonomistin bugünkü neslin gelecek için ne kadar fedakârlık yapması gerektiği konusunda çok farklı sonuçlara varmasının tek en büyük nedenidir ve uzun ufuklu kamu yatırım değerlendirmesini destekleyen yazılımın, iskonto varsayımlarını bir elektronik tablo varsayılanında gömmek yerine açığa çıkarması gerekmesinin nedenidir.

## Matematik

```
Ramsey denklemi:   r = δ + η × g

  r = sosyal iskonto oranı
  δ = saf zaman tercihi (servetten bağımsız sabırsızlık oranı)
  η = tüketimin marjinal fayda esnekliği (insanlar zenginleştikçe ek
      tüketimin azalan değeri)
  g = kişi başına tüketimin beklenen büyüme oranı

Green Book azalan uzun vadeli takvim (yaklaşık, güncel yayımlanmış bantlar):
  0–30. yıllar:     %3,5
  31–75. yıllar:    %3,0
  76–125. yıllar:   %2,5
  126–200. yıllar:  %2,0
  201–300. yıllar:  %1,5
  301+ yıllar:      %1,0

Stern Raporu parametreleri: δ ≈ %0,1, η = 1, g ≈ %1,3  → r ≈ %1,4
```

## Çalışılmış örnek

**100 yıl sonra önlenen 1 £'luk zararın bugünkü değeri**, üç iskonto rejimi altında:

```
Sabit Green Book kısa vadeli oran (%3,5, 100 yıl boyunca sabit):
  BD = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ 0,032 £   (3,2 peni)

Green Book azalan takvim (1–30. yıllar için %3,5, 31–75. yıllar için %3,0,
76–100. yıllar için %2,5):
  faktör(1–30)   = 1,035^30  ≈ 2,807
  faktör(31–75)  = 1,03^45   ≈ 3,782
  faktör(76–100) = 1,025^25  ≈ 1,854
  toplam faktör ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  BD = 1 / 19,68 ≈ 0,051 £   (5,1 peni)

Stern tarzı sıfıra yakın saf zaman tercihi (r ≈ %1,4 sabit):
  BD = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ 0,250 £   (25,0 peni)
```

Bir yüzyıl sonra önlenen aynı 1 £'luk zarar, tamamen hangi iskonto geleneğinin kullanıldığına bağlı olarak bugün 3,2 peni, 5,1 peni veya 25 peni değerindedir — yüksek peşin maliyetli ve bir yüzyıl sonra getirisi olan bir iklim azaltma projesinin hiç pozitif NBD çıtasını aşıp aşmadığını yönlendiren neredeyse sekiz katlık bir aralık. Bu, bölümün merkezî uyarısının arkasındaki mekanizmadır: anlamlı biçimde pozitif herhangi bir sabit oranda, yeterince uzak gelecekteki zarar, gerçek şiddetinden bağımsız olarak değerlendirmeden aritmetik olarak silinir.

## Yazılım mühendisliği bağlantısı

- Herhangi bir uzun ufuklu değerlendirme veya iş gerekçesi aracı (altyapı, iklim uyumu, emeklilik modellemesi) tek bir sabit oran değil, Green Book'un *azalan* takvimini uygulamalıdır — varsayılan olarak sabit bir oran, mevcut Birleşik Krallık hükümet rehberliğinin belirttiğinden çok daha güçlü bir gelecek karşıtı yanlılığı sessizce gömer.
- İskonto oranı ve ufuk, değerlendirme yazılımında her zaman görünür, denetlenebilir parametreler olarak sunulmalı ve hesaplamanın bunlara duyarlılığı açıkça gösterilmelidir (yukarıdaki çalışılmış örnekte olduğu gibi) — oranı bir yapılandırma dosyasına gömmek, Stern-Nordhaus tartışmasının uyardığı "gizli etik seçimi" tam olarak davet eder; bu, [doğal sermaye muhasebesi](../doğal-sermaye-muhasebesi/)nde yapılan şeffaflık noktasıyla eşleşir ve genel olarak [sosyal iskonto oranı](../sosyal-iskonto-oranı/) konusunun altında yatar.
- Bir programın faydaları açıkça nesiller arası olduğunda (sel savunması, doğal sermaye restorasyonu, uzun vadeli dijital altyapı), bir [sosyal maliyet-fayda analizi](../sosyal-maliyet-fayda-analizi/) sonuçları tek bir nokta tahmini yerine en az iki iskonto varsayımı altında (Green Book standardı ve düşük oranlı bir duyarlılık senaryosu) raporlamalıdır, böylece karar vericiler iskonto oranı seçiminin tek başına cevabı nasıl hareket ettirdiğini görür.

## Tuzaklar

- **Duyarlılık aralığı olmadan tek bir iskonto edilmiş NBD sunmak** — iskonto oranının uzun ufuklu projeler için cevabı ne kadar değiştirdiği göz önüne alındığında, tek oranlı bir NBD kesinliği maddi olarak abartır; her zaman en az Green Book standardını ve düşük oranlı bir senaryoyu kapsayan bir aralık raporlayın.
- **Kısa vadeli sabit oranı (%3,5) çok yüzyıllık bir değerlendirmeye uygulamak** — Green Book'un kendi rehberliği, sabit oranın yaklaşık 30 yılın ötesinde uygunsuz olduğu değerlendirildiği için tam da azalan takvimi belirtir; yine de kullanmak uzun vadeli maliyetleri olduğundan düşük gösterir.
- **δ'yı (saf zaman tercihi) tamamen teknik bir parametre saymak** — Stern'ün sıfıra yakın değeri ve Green Book'un daha yüksek örtük değeri, ampirik olarak "doğru" veya "yanlış" sayılar değil, bugünün geleceğe ne kadar ağırlık borçlu olduğuna dair etik pozisyonlar olarak savunulabilirdir; yazılım bir rakamı nesnel olarak doğruymuş gibi sunmak yerine varsayımı görünür kılmalıdır.

## Kaynaklar

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
