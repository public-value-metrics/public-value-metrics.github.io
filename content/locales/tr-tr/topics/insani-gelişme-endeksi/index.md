# İnsani Gelişme Endeksi (İGE)

İGE, BM'nin ülkeleri yalnızca gelire göre sıralamanın manşet alternatifidir: yaşam beklentisini, eğitimi ve geliri 0 ile 1 arasında tek bir sayıda birleştirir; ekonomist Amartya Sen'in savunduğu ve BM için Mahbub ul Haq'ın geliştirdiği önerme şudur: kalkınma yalnızca insanların ne kazandığıyla değil, ne yapabildikleri ve ne olabildikleriyle ilgilidir. 1990'dan beri BM Kalkınma Programı'nın İnsani Gelişme Raporu'nda yıllık olarak yayımlanmaktadır.

## Neden önemli

İGE'den önce "kalkınma" neredeyse tamamen kişi başına GSMH ile ölçülüyordu; bu, büyümenin sıradan insanların sağlığına veya eğitimine ulaşıp ulaşmadığı hakkında hiçbir şey söylemez. Sen'in yetenek yaklaşımı kalkınmayı gerçek özgürlüklerin genişlemesi olarak yeniden çerçeveledi ve ul Haq bunu UNDP'nin her ülkeyi sıralayabileceği yayımlanabilir bir endekse dönüştürdü; yalnızca gelirle zenginleşip sağlığı veya okullaşmayı ihmal eden hükümetleri, GSYH'lerinin önerdiğinden daha kötü bir sıralamayla yüzleşmeye zorladı (Körfez petrol devletleri ve bazı çıkarmacı ekonomiler standart örneklerdir). İGE'nin üç yönlü yapısı aynı zamanda [Çok Boyutlu Yoksulluk Endeksi](../çok-boyutlu-yoksulluk-endeksi/)nin doğrudan metodolojik atasıdır: her ikisi de aritmetik yerine geometrik bir ortalama kullanarak bir boyutun diğerindeki bir eksikliği geri satın almasına izin vermeyi reddeder. UNDP, her baskı için tam teknik notları ve altta yatan veriyi yayımlar (<https://hdr.undp.org/data-center/human-development-index>); bu, endeksi yeniden türetmek yerine onun üzerine inşa eden herkes için kanonik kaynaktır.

## Matematik

```
Yaşam Beklentisi Endeksi (YBE)     = (YB − 20) / (85 − 20)

Ortalama Okullaşma Yılı Endeksi    = ortalama okullaşma yılı / 15
Beklenen Okullaşma Yılı Endeksi    = beklenen okullaşma yılı / 18
Eğitim Endeksi (EE)                = (Ortalama Yıl Endeksi + Beklenen Yıl Endeksi) / 2

Gelir Endeksi (GE)                 = (ln(kişi başına GSMH) − ln(100)) / (ln(75000) − ln(100))

İGE = (YBE × EE × GE) ^ (1/3)     [üç alt endeksin geometrik ortalaması]
```

Geometrik ortalama bilinçlidir: ortalama almak yerine çarptığı için, bir boyuttaki çok yüksek puan diğer boyuttaki çok düşük puanı tamamen dengeleyemez — UNDP'nin 2010'da dengesizliği cezalandırmak için özellikle benimsediği ve önceki aritmetik ortalama formülünün yerini alan bir tasarım.

## Çalışılmış örnek

**Orta gelirli ülke**: yaşam beklentisi 72 yıl, ortalama okullaşma yılı 8, beklenen okullaşma yılı 13, kişi başına GSMH 12.000 $.

```
YBE = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
OOYE = 8 / 15                                        = 0,533
BOYE = 13 / 18                                       = 0,722
EE = (0,533 + 0,722) / 2                             = 0,628
GE = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

İGE = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

0,713'lük bir İGE, UNDP'nin "yüksek insani gelişme" bandına (0,700–0,799) düşer; "çok yüksek" 0,800'de başlar. Sonucun en zayıf alt endekse ne kadar duyarlı olduğuna dikkat edin: ortalama okullaşma yılı 8 yerine 4 olsaydı (OOYE = 0,267, EE = 0,494), İGE (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639'a düşerdi — başka hiçbir şey değişmemişken tam bir bant düşüş.

## Yazılım mühendisliği bağlantısı

- Geometrik ortalama örüntüsü, tek bir güçlü boyutun kritik bir zayıf boyutu örtmesini istemediğiniz herhangi bir bileşik hizmet veya ürün puanı için doğrudan yeniden kullanılabilir — örneğin bir kamu dijital hizmeti için erişilebilirlik, performans ve güvenilirlik puanlarını ağırlıklı ortalama yerine çarpımsal olarak birleştirmek, böylece hızlı ama erişilemez bir hizmet "iyi" puan alamaz.
- İGE'nin gelirin log dönüşümü (ek bir sterlinin azalan marjinal değeri), değerlendirmede [dağılımsal ağırlıklandırma](../dağılımsal-ağırlıklandırma/)nın arkasındaki aynı mantıktır: ek 1.000 $ yoksul bir hanehalkı için zengin birinden çok daha fazla anlam taşır ve ikisini doğrusal ele almak etkiyi yanlış fiyatlar.
- Tek bir harmanlanmış "dijital kapsayıcılık" veya "vatandaş sonuçları" puanı raporlayan herhangi bir gösterge paneli, toplama formülünü UNDP'nin teknik notları kadar açıkça belgelemelidir — bkz. [kamu sektörü KPI'ları](../kamu-sektörü-kpıları/) ve [kamu değeri puan kartı](../kamu-değeri-puan-kartı/).

## Tuzaklar

- **Geometrik ortalama yerine ortalama almak** — aritmetik bir ortalama yüksek gelirin kötü sağlığı veya eğitimi tamamen maskelemesine izin verir; 2010 metodoloji değişikliğinin tüm amacı bu ikameyi durdurmaktı.
- **İGE'yi yıldan yıla enflasyona göre ayarlanmış GSYH gibi karşılaştırmak** — UNDP periyodik olarak endeksi yeniden temellendirir (yeni asgari/azami sınırlar, revize edilmiş okullaşma tavanları), dolayısıyla bir sıra değişimi gerçek bir kaymayı değil, bir metodoloji güncellemesini yansıtabilir; bir rakamın hangi HDR baskısından geldiğini her zaman kontrol edin.
- **İGE'yi bir yoksulluk ölçüsü saymak** — bir ulusal ortalamadır ve bir ülke içindeki dağılım hakkında hiçbir şey söylemez; bunun için [Çok Boyutlu Yoksulluk Endeksi](../çok-boyutlu-yoksulluk-endeksi/)ni veya UNDP'nin ayrı Eşitsizliğe göre ayarlanmış İGE'sini kullanın.

## Kaynaklar

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
