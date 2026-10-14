# Sosyal Yatırım Getirisi (SROI)

Sosyal yatırım getirisi, sosyal, çevresel ve ekonomik geniş bir değer kavramını ölçmek, parasallaştırmak ve hesabını vermek, ve bunu yatırılan kaynaklara karşı bir oran olarak ifade etmek için bir çerçevedir; örneğin "yatırılan her 1 £ için 1,44 £ sosyal değer". Finansal muhasebe mantığını piyasaların fiyatlamadığı sonuçlara, muhasebenin disiplinini kaybetmeden genişletmek için tasarlanmıştır: bir SROI'daki her sayı, paydaşlarca tanımlanmış bir sonuca, bir kanıt temeline ve zaten gerçekleşecek olana dair açık bir düzeltmeye kadar izlenebilir olmalıdır.

## Neden önemli

SROI, SROI Network'ün halefi kuruluşlar olan Social Value UK ve Social Value International tarafından sürdürülür; bunların "A Guide to Social Return on Investment" (2012) belgesi hâlâ referans metodolojidir. Çerçeve yedi ilkeye dayanır — paydaşları dâhil et, neyin değiştiğini anla, önemli olan şeyleri değerle, yalnızca önemli olanı dâhil et, fazla iddia etme, şeffaf ol ve sonucu doğrula — ve sahadaki çoğu SROI raporunun başarısız olduğu ilke beşincisidir, "fazla iddia etme". Ölü ağırlık ve atfetme düzeltmeleri atlanarak üretilen bir oran SROI değil, SROI kılığına girmiş bir pazarlama sayısıdır. Hayır kuruluşları, sosyal girişimler veya komisyoncular için raporlama araçları geliştiren yazılım mühendislerinin farkı bilmesi gerekir; çünkü araç ya disiplini uygulatacak ya da atlamayı kolaylaştıracaktır.

## Matematik

SROI, kapsamda hangi sonuçların olduğunu belirlemek için bir [değişim kuramı](../değişim-kuramı/)na dayanır ve onları bir [mantık modeli](../mantık-modeli/) ile aynı hesap verebilirlik zincirini kullanarak ifade eder:

```
SROI oranı = Sonuçların bugünkü değeri / Girdilerin değeri

Süreç:
 1. Kapsamı belirleyin ve sonuçları ölçülecek paydaşları belirleyin
 2. Sonuçları haritalayın (varsayılmayan, paydaşlarla kanıtlanmış bir değişim kuramı)
 3. Sonuçları kanıtlayın ve finansal vekiller kullanarak değer verin
 4. Etkiyi belirleyin: brüt değer − ölü ağırlık − atfetme − yer değiştirme, ardından azalmayı uygulayın
 5. SROI'yi hesaplayın: etkinin net bugünkü değeri ÷ girdilerin değeri
 6. Raporlayın, kullanın ve yerleştirin — oran bir iletişim aracıdır, varış noktası değil
```

Ölü ağırlık, atfetme ve yer değiştirme [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/) ile [yer değiştirme ve atfetme](../yer-değiştirme-ve-atfetme/) bölümlerinde ele alınır; üçü de gerçek [karşı olgusal](../karşı-olgusal-analiz/) etkiyi brüt sonuçtan yalıtmak için vardır.

## Çalışılmış örnek

**Yerel yönetim istihdam programı**: yıllık girdi maliyeti 250.000 £. Altmış katılımcı sürdürülebilir istihdama geçer; bu sonuç için bir finansal vekil (refah artışı, azalan yardım bağımlılığı ve vergi geliri birlikte), ilk yıl için kişi başına 8.500 £'dur — bu tür vekillerin nereden geldiği için bkz. [birim maliyet veri tabanları](../birim-maliyet-veri-tabanları/).

- Brüt sonuç değeri: 60 × 8.500 £ = 510.000 £
- Eksi ölü ağırlık (%40'ı program olmadan da muhtemelen iş bulurdu): 510.000 £ × 0,60 = 306.000 £
- Eksi atfetme (kalan değişimin %30'u diğer kurumların desteğine bağlıdır): 306.000 £ × 0,70 = 214.200 £
- %30 azalmayla 2. yıl sonucu: 214.200 £ × 0,70 = 149.940 £, yılda %3,5 ile iskonto edilmiş (bkz. [sosyal iskonto oranı](../sosyal-iskonto-oranı/)): 149.940 £ ÷ 1,035 = 144.870 £
- Etkinin toplam bugünkü değeri: 214.200 £ + 144.870 £ = 359.070 £
- **SROI oranı: 359.070 £ ÷ 250.000 £ = 1,44**, "yatırılan her 1 £ için 1,44 £ sosyal değer" olarak raporlanır

**Hayır kuruluşu**: 60.000 £'luk bir dostluk hizmeti, kişi/yıl başına 1.100 £'luk bir vekille değerlenen 80 yaşlı kişi için yalnızlığı azaltır. Brüt değer 88.000 £; %35 ölü ağırlık ve %15 atfetmeden sonra, net etki 88.000 £ × 0,65 × 0,85 = 48.620 £, yani 0,81'lik bir SROI oranı — başabaş noktasının altında; bu meşru ve yararlı bir bulgudur, yazılmayacak bir başarısızlık değil.

## Yazılım mühendisliği bağlantısı

Bir kullanıcının sonuç sayılarını ve vekil değerlerini girmesine izin veren, ancak ölü ağırlık, atfetme veya bağlantılı bir değişim kuramı için zorunlu alanı olmayan bir SROI hesaplayıcısı, varsayılan olarak şişirilmiş oranlar üretir; çünkü düzeltmeleri atlamak en az direnç yoludur. Disiplini şemaya yerleştirin: her sonuç satırı bir paydaş grubuna, kanıtlanmış bir miktara, kaynağıyla birlikte bir finansal vekile ve isteğe bağlı olmayan ölü ağırlık/atfetme alanlarına başvurmalıdır. SROI sonuç haritalamasının bağlı olduğu ayrım için bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/) ve aracın veri modelinde yansıtması gereken zincir için [mantık modeli](../mantık-modeli/).

## Tuzaklar

- **Ölü ağırlık ve atfetmeyi atlamak.** Bu düzeltmeler olmadan manşet oran bir net etki rakamı değil, brüt rakamdır ve Social Value UK'nin ilkeleri ikisini de açıkça şart koşar.
- **Kuruluşlar arasında oranları karşılaştırmak.** Bir SROI oranı, duruma göre yapılan kapsam ve vekil seçimlerine bağlıdır; bir rapordan gelen 4:1'lik bir oranı bir diğerinden gelen 2:1'lik bir orandan "daha iyi" saymak, varsayımların bir finansal muhasebe oranı gibi standartlaştırılmadığını göz ardı eder.
- **Örtüşen vekilleri iki kez saymak.** Aynı yararlanıcılar için bir "azalan yalnızlık" vekilini bir "iyileşen ruhsal refah" vekiliyle üst üste koymak, tek bir altta yatan değişimi iki kez değerleyebilir.
- **Paydaş katılımını atlamak.** İlke bir, sonuçların onları deneyimleyen insanlarla tanımlanmasını, modeli kuran analistin varsaymasını değil, gerektirir.

## Kaynaklar

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
