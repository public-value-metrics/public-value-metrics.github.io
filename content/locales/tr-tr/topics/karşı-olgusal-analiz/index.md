# Karşı Olgusal Analiz

Karşı olgusal (counterfactual), bir müdahale olmasaydı ne olacağının tahminidir. Karşı olgusal olmadan, bir program başladıktan sonra gözlenen bir değişiklik, zaten gerçekleşecek bir değişiklikten ayırt edilemez — önce-sonra sayıları ne kadar ikna edici görünürse görünsün, karşı olgusal yoksa etkinin kanıtı da yoktur. HM Treasury'nin Magenta Book'u, güvenilir bir karşı olgusal oluşturmayı etki değerlendirmesinin merkezî metodolojik görevi, başka herhangi bir tasarım tercihinden daha önemli bir görev olarak ele alır.

## Neden önemli

"Programı başlattıktan sonraki yıl suç %15 düştü" ifadesi, program olmasaydı suçun ne olacağını bilmediğiniz sürece programın işe yaradığının kanıtı değildir — suç, ilgisiz ekonomik veya demografik eğilimler nedeniyle zaten %20 düşmüş olabilir; bu da ham sayı iyileşmesine rağmen programın karşı olgusala göre durumu aslında kötüleştirdiği anlamına gelir. Bu, kamu sektörü ve sosyal sektör etki iddialarındaki en yaygın analitik hatadır: önce/sonra karşılaştırmasını nedenselliğin kanıtı sanmak. Magenta Book, etki değerlendirmesinin bir karşı olgusal soruyu — "bu müdahale ne fark yarattı?" — yanıtlamak için var olduğunu ve bunu yanıtlamanın, gerçekleşmeyen dünyayı yalnızca tarif etmeyi değil, tahmin etmeyi gerektirdiğini açıkça belirtir.

Farklı yöntemler karşı olgusalı farklı güven dereceleriyle oluşturur ve hükümet değerlendirme rehberliği bunları buna göre sıralar. Bireylerin veya alanların bir müdahaleyi almak veya almamak üzere rastgele atandığı rastgele kontrollü denemeler (RCT'ler), en güçlü karşı olgusalı üretir; çünkü rastgele atama, tedavi ve kontrol gruplarının ortalamada yalnızca müdahaleyi almaları bakımından farklı olmasını sağlar. Cabinet Office ve What Works Network, Behavioural Insights Team'in 2012 tarihli "Test, Learn, Adapt" raporundan bu yana Birleşik Krallık kamu politikası genelinde RCT'leri teşvik etmiştir; çünkü daha zayıf tasarımlar karıştırıcı etkenlere açıktır — gözlenen fark, programın etkisini değil, kimin katılmayı seçtiğini yansıtıyor olabilir. Rastgele atamanın pratik olmadığı veya etik olmadığı durumlarda (yasal hakkı olan programlarda veya tüm nüfusa yönelik politika değişikliklerinde sıkça olduğu gibi), Magenta Book daha zayıf ama yine de yararlı alternatiflerin açık bir hiyerarşisini ortaya koyar: eşleştirilmiş karşılaştırma grupları, farkların farkı tasarımları, uygunluk eşikleri etrafında regresyon süreksizliği ve son çare olarak, programın etkisini aynı anda değişen her şeyin etkisiyle karıştırmaya yatkın, en zayıf kanıt biçimi olarak açıkça işaretlenmiş basit önce/sonra karşılaştırması.

## Matematik

Tüm yöntemlerde geçerli olan karşı olgusal çerçeve:

```
Tahmini etki = Sonuç(müdahaleyle) − Sonuç(karşı olgusal: müdahalesiz)

DEĞİL:
Tahmini etki ≠ Sonuç(sonra) − Sonuç(önce)   [zamanı tedaviyle karıştırır]
```

Hükümet değerlendirmesinde en yaygın yarı deneysel tasarımlardan biri olan farkların farkı, karşılaştırma grubunun kendi önce/sonra değişimini çıkararak tedavi etkisini yalıtır:

```
DiD tahmini = [Sonuç(tedavi gören, sonra) − Sonuç(tedavi gören, önce)]
            − [Sonuç(karşılaştırma, sonra) − Sonuç(karşılaştırma, önce)]
```

Bu, her iki grupta ortak olan herhangi bir eğilimi (örn. herkesi etkileyen ulusal bir ekonomik kayma) ortadan kaldırır ve yalnızca müdahaleye atfedilebilen farklı değişimi bırakır.

## Çalışılmış örnek

**İstihdam programı, önce/sonra (zayıf tasarım)**: bir iş destek programı, katılımcı istihdamının bir yıl içinde %40'tan %55'e yükseldiğini bildirir — naif sonuç: "programa bağlı olarak +15 yüzde puan."

**Aynı program, farkların farkı (daha güçlü tasarım)**: aynı yerel işgücü piyasasından seçilmiş, benzer katılımcı olmayanlardan oluşan eşleştirilmiş bir karşılaştırma grubu, aynı yıl içinde istihdamın %38'den %47'ye yükseldiğini gösterir (ulusal bir ekonomik toparlanma yaşanıyordu).

```
Tedavi gören grup değişimi:  %55 − %40 = +15 yüzde puan
Karşılaştırma grubu değişimi: %47 − %38 = +9 yüzde puan

DiD tahmini (gerçek program etkisi) = 15 − 9 = +6 yüzde puan
```

Dürüstçe atfedilebilir etki 15 değil, 6 yüzde puandır — görünürdeki önce/sonra iyileşmesinin yarısından fazlası, karşılaştırma grubunu da yukarı çeken aynı ekonomik toparlanmanın etkisiyle, programdan bağımsız olarak zaten gerçekleşecekti.

**Regresyon süreksizliği, uygunluk eşiği**: bir hibe programı yalnızca 50'den az çalışanı olan işletmelere açıktır. Eşiğin hemen altındaki işletmelerin (45–49 çalışan, uygun) sonuçlarını eşiğin hemen üstündeki işletmelerle (50–54 çalışan, uygun değil) karşılaştırmak güvenilir bir karşı olgusal sağlar; çünkü keyfî bir idari kesme noktasının iki yanındaki işletmeler aksi hâlde benzerdir — uygunluğu, altta yatan herhangi bir işletme özelliği değil, eşik belirler. Yalnızca eşikte gözlenen, iki grup arasındaki ortalama 2.000 £'luk sonuç farkı, tüm uygun işletmelerle tüm uygun olmayan işletmelerin (büyüklük bakımından sistematik olarak farklı olanların) basit karşılaştırmasından çok daha yüksek güvenle hibeye atfedilebilir.

## Yazılım mühendisliği bağlantısı

Karşı olgusal düşünme, hükümet ve sosyal sektör yazılımı için etki izleme sistemlerinin ve değerlendirme boru hatlarının nasıl tasarlanması gerektiğini şekillendirmelidir:

- Karşılaştırma grubu yakalamayı sisteme en baştan yerleştirin — uygun olup kaydolmayanları veya eşleştirilmiş bir katılımcı olmayan kohortu kaydedin — bir program zaten çalıştıktan ve yalnızca önce/sonra verisi mevcut olduktan sonra sonradan eklemek yerine.
- Rastgele atamanın mümkün olduğu yerlerde (aşamalı bir yayılım, bazı kullanıcılar için diğerlerinden önce etkinleştirilen bir dijital hizmet), sistemi rastgele atamayı sorgulanabilir bir alan olarak koruyacak şekilde donatın; atama sırası kaydedilmezse aşamalı bir yayılım kendi değerlendirme değerini kazara yok eder.
- Bu, [etki değerlendirme yöntemlerinin](../etki-değerlendirme-yöntemleri/) temel yöntemidir ve onu, bir programın bir etkiye neden olup olmadığını değil, amaçlandığı gibi teslim edilip edilmediğini soran [etki değerlendirmesi ve süreç değerlendirmesi](../etki-değerlendirmesi-ve-süreç-değerlendirmesi/)'nden ayıran şeydir.
- [Ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/) ile [yer değiştirme ve atfetme](../yer-değiştirme-ve-atfetme/) kökünde karşı olgusal sorulardır — ölü ağırlık, "bu belirli sonuç müdahale olmadan ne olurdu" sorusudur ve tam değerlendirme tasarımı düzeyinde değil, düzeltme düzeyinde uygulanır.

## Tuzaklar

- **Önce/sonra karşılaştırmasını nedenselliğin kanıtı saymak.** Bu, kamu ve sosyal sektör etki raporlamasındaki en yaygın ve en sonuç doğurucu hatadır; önce/sonra değişimi, programın etkisini aynı dönemde değişen diğer her şeyle karıştırır.
- **Tedavi gören gruptan sistematik olarak farklı bir karşılaştırma grubu kullanmak.** Eşleştirilmiş bir karşılaştırma grubu ilgili özelliklerde gerçekten benzer olmalıdır (bkz. Magenta Book'taki [karşı olgusal analiz](../karşı-olgusal-analiz/) yöntem hiyerarşisi); programa katılanları (kendi isteğiyle katılan ve çoğu zaman daha motive olanlar) katılmayanlarla karşılaştırmak, program etkisi gibi görünen seçim yanlılığı riskini taşır.
- **Kötü teslimat tasarımıyla rastgele atama fırsatlarını yok etmek.** Aşamalı veya rastgele bir yayılım, değerlendirme değerini ancak atama gerçekten rastgele ve kayıtlıysa korur — yerel yöneticilerin kimin önce gideceğini seçmesine izin vermek amacı boşa çıkarır.
- **Zayıf bir tasarımdan fazla kesinlik iddia etmek.** Bir önce/sonra tahmini, ölçülmüş bir etki büyüklüğü olarak değil, belirtici olarak sunulmalıdır; Magenta Book'un kanıt hiyerarşisi, bir iddianın gücünün onu üreten tasarımın gücüyle örtüşmesi için vardır.

## Kaynaklar

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
