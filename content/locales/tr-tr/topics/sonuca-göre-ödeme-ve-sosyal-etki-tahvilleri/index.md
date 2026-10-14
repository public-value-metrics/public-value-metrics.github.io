# Sonuca Göre Ödeme ve Sosyal Etki Tahvilleri (PbR/SIB)

Sonuca göre ödeme (PbR), bir sağlayıcıya yapılan faaliyetlere değil, doğrulanmış elde edilen sonuçlara göre ödeme yapar. Sosyal etki tahvili (SIB), özel veya hayırsever yatırımcıların hizmet teslimatını peşin olarak finanse ettiği ve bağımsız olarak ölçülen sonuçlar kararlaştırılan eşikleri yalnızca tuttuğunda bir hükümet komisyoncusu tarafından — bir getiriyle birlikte — geri ödendiği belirli bir PbR finansman yapısıdır; teslimat riskini vergi mükellefinden yatırımcıya kaydırır.

## Neden önemli

Dünyanın ilk SIB'i Eylül 2010'da HMP Peterborough'da başlatıldı: Social Finance, kısa süreli hükümlülerle (12 aydan az) çalışarak yeniden suç işlemeyi azaltan "One Service"i finanse etmek için 17 yatırımcıdan 5 milyon £ topladı; Adalet Bakanlığı ve Big Lottery Fund, yeniden mahkûmiyet olaylarının eşleştirilmiş bir ulusal karşılaştırma kohortuna karşı en az %7,5 düşmesi koşuluyla yatırımcılara geri ödeme yapmayı kabul etti. Peterborough pilotunun son kohortu, eşiğin rahatça üzerinde, yeniden mahkûmiyetlerde %9,7'lik bir düşüş kaydetti ve yatırımcılara bir getiriyle geri ödeme yapıldı. Mekanizma, belirli bir komisyonculuk sorununu çözdüğü için önemliydi: hükümet girdiler yerine sonuçlar için ödeme yapmak istiyordu, ancak işe yaramayabilecek bir müdahalenin mali riskini üstlenemiyordu; SIB yapısı bu riski, onu üstlenmeye istekli yatırımcılara kaydırdı. Oxford'daki Blavatnik Hükümet Okulu'nda Government Outcomes Lab (GO Lab), dünya çapında PbR ve SIB performansına dair en eksiksiz kamusal kanıt tabanını sürdürür, küresel olarak 200'ün çok üzerinde etki tahvilini izler ve hangi tasarım özelliklerinin başarı veya başarısızlıkla ilişkili olduğuna dair araştırmayı yayımlar. Kanıt tabanının defalarca döndüğü ders, *seçilen sonuç metriği*nin ve onu kaçırma riskini kimin taşıdığının, bir PbR sözleşmesinin pratikte nasıl davrandığı hakkında hemen her şeyi belirlediğidir.

## Matematik

```
PbR ödemesi = temel ödeme (varsa) + Σ (elde edilen sonuç × sonuç başına birim fiyat)

Sosyal etki tahvili yatırımcı getirisi:
  Yatırımcı harcaması = hizmet teslimatını finanse eden peşin sermaye
  Sonuç ödemesi       = komisyoncu yalnızca sonuç ≥ eşik olduğunda öder, performansın
                         eşiğin ne kadar üzerinde olduğuna göre ölçeklenir
  Yatırımcı getirisi  = alınan sonuç ödemeleri − yatırımcı harcaması
                         (üstlenilen riski yansıtan, çoğu zaman sınırlandırılmış bir getiri oranı)

Tüm sözleşmenin davranışını belirleyen temel tasarım parametreleri:
  Sonuç metriği         — bir çıktı değil, bir sonuç olmalıdır (bkz. outcomes-vs-outputs)
  Karşılaştırma/karşı olgusal — genellikle eşleştirilmiş bir kohort (bkz. counterfactual-analysis)
  Ödeme eşiği           — herhangi bir ödemeyi tetiklemeden önceki asgari iyileşme
  Ödeme eğrisi          — eşiğin üzerinde doğrusal, kademeli veya sınırlandırılmış
  Atfetme/ölü ağırlık iskontosu — bkz. additionality-and-deadweight
```

## Çalışılmış örnek

**Peterborough One Service** (yayımlanmış değerlendirmelerden alınan açıklayıcı rakamlar):

```
Toplanan yatırımcı sermayesi:    5.000.000 £
Kohort:                          iki kohort boyunca ~3.000 kısa süreli erkek hükümlü
Eşik:                            eşleştirilmiş ulusal karşılaştırma grubuna karşı yeniden
                                  mahkûmiyet olaylarında ≥%7,5 azalma, yoksa ödeme yok
Kohort 1 sonucu:                 %8,4 azalma — özgün kurallara göre yalnızca o kohort için
                                  sözleşmeye bağlı çıtanın altında
Birleşik/son kohort sonucu:      %9,7 azalma — eşiğin üzerinde
Sonuç ödemesi:                   hükümet (Adalet Bakanlığı / Big Lottery Fund) eşiğin
                                  üzerindeki yüzde puan başına öder, yatırımcı geri ödemesini
                                  artı bir getiriyi finanse eder
```

**Yerel yönetim PbR sözleşmesi (açıklayıcı)**: bir aile müdahale hizmeti, sevk edilen aile başına 4.000 £ (faaliyet ödemesi) artı kapanıştan 12 ay sonra başka çocuk koruma sevki olmayan aile başına 6.000 £ (sonuç ödemesi) ile görevlendirilir. 200 aile sevk edildi, 150 vaka kapandı, 96'sı 12. ayda sevksiz kalıyor:

```
Faaliyet ödemesi = 200 × 4.000 £ = 800.000 £
Sonuç ödemesi    = 96 × 6.000 £  = 576.000 £
Toplam sözleşme maliyeti = 96 doğrulanmış sürdürülebilir sonuç için 1.376.000 £
Doğrulanmış sonuç başına maliyet ≈ 14.333 £ (bkz. cost-per-outcome)
```

## Yazılım mühendisliği bağlantısı

Sonuca göre ödeme, bir veri sorunu olmadan önce bir teşvik uyumlaştırma sorunudur ve veri sistemi bu uyumun ya tuttuğu ya da bozulduğu yerdir. Bağımsız, kurcalamaya karşı belirgin sonuç doğrulaması her şeydir: komisyoncu ve sağlayıcının belirsiz bir vakanın nasıl kodlanacağı konusunda karşıt teşvikleri vardır, bu nedenle sonuçları kaydeden sistemin bir denetim izine, bağımsız doğrulayıcıyla (çoğu zaman sağlayıcıdan farklı bir kurum, bazen polis veya yardım kayıtlarına karşı eşleştiren resmî bir istatistik kurumu) bir veri paylaşım anlaşmasına ve sonuç tanımının değiştirilemez sürümlenmesine ihtiyacı vardır — [kamu sektörü KPI'ları](../kamu-sektörü-kpıları/)ndaki "metriği yeniden tanımlama" tuzağının PbR eşdeğeri. Atfetme hesaplamaları, tek seferlik bir elektronik tablo değil, tekrarlanabilir, denetlenebilir kod gerektiren [karşı olgusal analiz](../karşı-olgusal-analiz/) eşleştirilmiş kohort yöntemlerine bağlıdır. Ve metriğin kendisi bir vekil faaliyet değil, gerçek bir sonuç olmalıdır — bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/) — çünkü bir çıktı için ödeme yapan bir PbR sözleşmesi, olağan işlerin finansmanını ek işlem maliyetiyle yeniden etiketler. Bir SIB'in sosyal getirisi ileriye dönük modellendiğinde, bu değerlendirme tipik olarak doğrudan [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) metodolojisinden ödünç alır.

## Tuzaklar

- **Kolayca manipüle edilebilen vekil bir sonuç için ödeme yapmak**: "oturumlara katılım", sonuç kılığına girmiş bir faaliyettir; aranan gerçek değişimi (yeniden suç işleme, istihdam, konut istikrarı) yansıtan bir ölçüde ısrar edin.
- **Güvenilir bir karşı olgusal olmaması**: eşleştirilmiş bir karşılaştırma grubu olmadan, bir iyileşme ortalamaya dönüş veya daha geniş bir eğilim olabilir, programın etkisi değil — bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/) ve [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/).
- **İşlem ve değerlendirme maliyetlerini olduğundan düşük tahmin etmek**: PbR/SIB programları için bağımsız doğrulama, veri bağlantısı ve sözleşme yönetimi, sözleşme değerinin yüzdesi olarak rutin biçimde çift haneli rakamlara ulaşır — GO Lab'ın kanıt tabanı bunu programların sonlandırılmasının yinelenen bir itici gücü olarak belgeler.
- **Seçip ayıklamak veya "park etmek"**: sonuç başına ödenen sağlayıcıların, zaten başarılı olma olasılığı en yüksek müşterilere öncelik verip en zor vakaları geri plana atmak için doğrudan bir teşviki vardır — buna karşı koymak için ödeme kademeleri veya vaka karışımı düzeltmesi tasarlayın.

## Kaynaklar

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
