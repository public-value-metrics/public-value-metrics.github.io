# Kamu Değeri Erozyonu Olarak Teknik Borç

Teknik borç, Ward Cunningham'ın 1992 tarihli, geçmişteki pragmatik kodlama kararlarının örtük gelecek maliyetine dair metaforudur: bir **anapara** (borçlu olunan iyileştirme işi) ve bir **faiz** (teslimat üzerinde uyguladığı sürekli sürükleme). Eski bir hükümet BT envanterinde, bu faiz doğrudan kamu değerinden ödenir — daha yavaş yasal değişiklik teslimatı, vatandaşa yönelik hizmetlerde daha yüksek başarısızlık oranları ve sisteme güvenle dokunabilen insanların küçülen havuzu.

## Neden önemli

Birleşik Krallık hükümet bakanlıkları genelindeki eski mainframe ve COBOL dönemi sistemleri — HMRC ve DWP en çok anılanlar arasında — Ulusal Denetim Ofisi'nin, *Digital Transformation in Government* raporu dâhil (<https://www.nao.org.uk/>), defalarca işaret ettiği, iyi belgelenmiş ve tırmanan bir risk taşır: değiştirilmesi pahalı, güvenceye alınması giderek zorlaşan ve değiştirildiğinden daha hızlı emekliye ayrılan bir uzman iş gücüne bağımlı yaşlanan platformlar. Özel sektör birikiminin aksine, bu borç doğrudan vatandaşlar ile yasal hakları arasında durur — güvenle değiştirilemeyen bir yardım hesaplama motoru, yalnızca bir mühendislik rahatsızlığı değil, bir politika teslimat kısıtıdır. 2013'te Universal Credit BT programının yeniden başlatılması, Ulusal Denetim Ofisi'nin özgün yapımın paranın karşılığını sunmayacağını ve yazılım varlığının önemli bir bölümünün silinmesi gerektiğini bulduğu zaman, fiyatlandırılmamış teknik borcun canlı, bakan düzeyinde görünür bir kamu programına yetiştiğinin kanonik bir örneğidir.

## Matematik

```
SQALE anaparası = ihlaller üzerinden Σ (iyileştirme süresi) × geliştirici maliyet oranı
Teknik borç oranı (TBO) = iyileştirme maliyeti / yeniden geliştirme maliyeti × 100
                    (SonarQube dereceleri: A ≤%5, B ≤%10, C ≤%20, D ≤%50)

Faiz (geri ödemeyi haklı çıkaran sayı):
  yıllık faiz = Δ teslimat hızı × birim hız başına değer
              + Δ vatandaşa yönelik olay oranı × olay başına maliyet
              + uzman beceri primi × etkilenen personel sayısı
Geri ödeme gerekçesi = BD(ufuk boyunca önlenen faiz) − iyileştirme maliyeti
               (Green Book sosyal iskonto oranıyla iskonto edilmiş, bkz.
               social-discount-rate.md)
```

Anapara yükümlülüğü belirtir; faiz bir kamu hesapları komitesine yatırım gerekçesini yaptıran şeydir.

## Çalışılmış örnek

Eski bir 4GL'de yazılmış 250.000 satırlık bir başvuru işleme motoru. Kod satırı başına kabaca 3,61 $'lık teknik borç anaparasının CAST Appmarq kıyaslaması kullanılarak (tipik dönüşümde ≈2,85 £):

```
Anapara ≈ 250.000 × 2,85 £ ≈ 712.500 £
TBO ≈ %16 (derece C)
```

Ölçülen faiz: bakanlık, dâhili beceriler azaldığı için standart kıdemli mühendis ücretlerinin %40 üzerinde bir günlük ücret primiyle üç uzman yüklenici tutar — altı kişilik bir ekipte yılda ek 180.000 £. Sistem ayrıca yılda dört büyük işleme kesintisine neden olur; her biri yaklaşık 5.000 başvuru sahibi için kararları askıya alır ve onları çağrı başına kabaca 25 £'dan iletişim merkezine yönlendirir:

```
Faiz ≈ 180.000 £ (beceri primi)
     + 4 × 5.000 × 25 £ = 500.000 £ (yönlendirilen iletişim maliyeti)
     ≈ yılda 680.000 £
```

En kötü performans gösteren modüllerin hedefli iyileştirilmesi 1.200.000 £'ya mal olur ve faizi %70 azaltması modellenmiştir:

```
Faiz azalması = 0,70 × 680.000 = yılda 476.000 £
Geri ödeme ≈ 1.200.000 / 476.000 ≈ 2,5 yıl
```

Hedefleme önemlidir: nadiren dokunulan kodu iyileştirmek hiçbir şey satın almaz, çünkü faiz değişiklik sıklığı ve borç yoğunluğunun ikisinin de zirve yaptığı yerde yoğunlaşır.

## Yazılım mühendisliği bağlantısı

Bir teknik borç gerekçesini "kod eski"nin ötesine yükselten kamu değeri çerçevelemesi: eski envanteri, kaybedilen teslimat kapasitesinin yoğunlaştığı yerlerin bir envanteri olarak ifade edin ve açıkça [toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/) ile bağlayın; çünkü faiz, finans bunu hiç istemiş olsun olmasın TSM satırına ait bir işletme maliyetidir. Borçla yüklü sistemler ayrıca orantısız [siber güvenlik](../kamu-sektörü-siber-güvenlik-değeri/) maruziyeti taşır, çünkü yama sıklığı ve borç yoğunluğu ilişkilidir — yamalanamayan eski bir sistem, faizi sterlin yerine olay riski cinsinden ödenen teknik borçtur. Ve her iyileştirme-özellik takası kendi başına bir [gecikme maliyeti](../kamu-programlarında-gecikme-maliyeti/) kararıdır: borcu ödemek bir sonraki yasal değişikliği geciktirir; bunun tasarruf edilen faizle tartılması gereken kendi CoD'si vardır.

## Tuzaklar

- **Yalnızca anapara raporlaması**: faiz rakamı olmayan büyük, korkutucu bir iyileştirme tahmini, bir harcama onaylayıcıya hiçbir şeyi haklı çıkarmaz.
- **Araç tarafından üretilen borç rakamlarını kelimesi kelimesine almak**: SQALE tarzı tarayıcılar kural ihlallerini sayar; pahalı borç türünü — mimari kararlar ve belgelenmemiş eski iş kuralları — kaçırırken önemsiz şeyleri işaretler.
- **"Yeniden yazma hepsini önler"**: yedek programlar, 2013 Universal Credit yeniden başlatmasının gösterdiği gibi, ondan bir muafiyet değil, diğer herhangi bir iş gerekçesiyle aynı disiplini geçmelidir — karşı olgusal maliyet, başarı olasılığı ve iskonto.
- **Sıfır borç ütopyacılığı**: en uygun borç düzeyi sıfır değildir; borç, daha erken teslimat satın alan bir kaldıraçtır. Canlı soru her zaman faiz oranıdır, borcun hiç var olup olmadığı değil.

## Kaynaklar

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
