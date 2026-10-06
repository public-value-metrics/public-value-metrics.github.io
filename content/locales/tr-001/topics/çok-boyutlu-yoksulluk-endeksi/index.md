# Çok Boyutlu Yoksulluk Endeksi (ÇBYE)

ÇBYE, yoksulluğu yalnızca bir çizginin altına düşen gelir olarak değil, bir kişinin sağlık, eğitim ve yaşam standartlarında aynı anda yaşadığı örtüşen yoksunluklar olarak ölçer. Oxford Poverty and Human Development Initiative (OPHI) tarafından Sabina Alkire ve James Foster ile geliştirilmiştir ve 2010'dan beri her İnsani Gelişme Raporu'nda [İnsani Gelişme Endeksi](../insani-gelişme-endeksi/) ile birlikte UNDP ile ortaklaşa yayımlanmaktadır.

## Neden önemli

Gelir yoksulluk çizgileri, yeterli nakit geliri olan ancak temiz suyu, okullaşması olmayan veya bir çocuğun ölümünden sağ çıkan insanları kaçırır — ve yoksunlukların kümelendiği gerçeğini de kaçırır: elektriği olmayan bir hanehalkının aynı zamanda sanitasyondan yoksun olması ve yetersiz beslenen bir çocuğu olması orantısız biçimde olasıdır. ÇBYE'nin üzerine kurulduğu Alkire-Foster yöntemi, her kişinin yoksunluklarını eşit ağırlıklı üç boyutta — sağlık, eğitim, yaşam standartları — gruplanmış on gösterge boyunca sayar ve yalnızca ağırlıklı yoksunluk puanı sabit bir eşiği aşarsa birini "ÇBYE yoksulu" olarak sınıflandırır; ayrı tek göstergeli istatistikler kümesinin yakalayamadığı örtüşmeyi yakalar. OPHI, tam metodolojiyi ve ülke verilerini <https://ophi.org.uk/multidimensional-poverty-index/> adresinde yayımlar; UNDP ile ortaklaşa sürdürdüğü küresel ÇBYE artık 110'dan fazla ülkeyi kapsamaktadır. Yoksullukla mücadele programları için geliştirilen yazılımda — nakit transferleri, sosyal bakım önceliklendirmesi, yardım hedeflemesi — ÇBYE'nin gösterge kümesi çoğu zaman düzinelerce ulusal istatistik ofisi genelinde zaten doğrulanmış standartlaştırılmış yoksunluk şemasına en yakın şeydir.

## Matematik

```
10 gösterge, 3 boyut, her boyut 1/3 ağırlıklı:

Sağlık (1/3):             beslenme (1/6), çocuk ölümleri (1/6)
Eğitim (1/3):             okullaşma yılları (1/6), okula devam (1/6)
Yaşam standartları (1/3): pişirme yakıtı, sanitasyon, içme suyu,
                           elektrik, konut, varlıklar (her biri 1/18)

yoksunluk puanı (c) = bir kişinin yoksun olduğu göstergelerin ağırlıkları toplamı

kişi "ÇBYE yoksulu"dur eğer c ≥ 1/3 (yoksulluk kesme noktası, k = %33)

H (kişi sayısı oranı) = ÇBYE yoksullarının sayısı / toplam nüfus
A (yoğunluk)          = yalnızca ÇBYE yoksulları arasında ortalama yoksunluk puanı

ÇBYE = H × A
```

ÇBYE, yoksul olanların *payını* *ne kadar* yoksul olduklarıyla çarptığı için, aynı kişi sayısı oranına sahip iki bölge, yoksunluklar birinde daha şiddetliyse çok farklı ÇBYE puanlarına sahip olabilir — İGE'nin geometrik ortalamasının arkasındaki aynı "boyutlar arası ikame yok" mantığı.

## Çalışılmış örnek

**1.000 kişilik ulusal anket**: 350 kişi çok boyutlu yoksul olarak belirlenir (yoksunluk puanı ≥ %33). Yalnızca bu 350 yoksul birey arasında ortalama yoksunluk puanı %45'tir.

```
H = 350 / 1000                = 0,350
A = 0,45
ÇBYE = H × A = 0,350 × 0,45   = 0,1575
```

**Eşit kişi sayısına sahip iki ilçeyi karşılaştırmak**: İlçe A'da H = 0,30 ve A = 0,40 (çok sayıda yoksul, orta düzeyde yoksun); İlçe B'de H = 0,30 ve A = 0,60 (aynı sayıda yoksul, ancak daha şiddetli yoksun — aynı anda elektrik *ve* sanitasyon *ve* okula devamdan yoksun).

```
ÇBYE_A = 0,30 × 0,40 = 0,120
ÇBYE_B = 0,30 × 0,60 = 0,180
```

Aynı kişi sayısı oranı, İlçe B'de %50 daha yüksek ÇBYE — yalnızca kişi sayısı yoksulluğuna dayanan bir hedefleme sistemi iki ilçeyi aynı sıralar ve İlçe B'nin daha derin müdahaleye ihtiyaç duyduğunu kaçırır.

## Yazılım mühendisliği bağlantısı

- Sosyal programlar için vaka yönetimi ve uygunluk sistemleri çoğu zaman on göstergenin birkaçını (konut, okula devam, sağlık işaretleri) ayrı silolarda zaten saklar; Alkire-Foster sayma yöntemi, bunları sıfırdan özel bir puanlama modeli oluşturmak yerine tek bir yoksunluk puanında birleştirmek için hazır bir şemadır.
- Kişi sayısı/yoğunluk ayrımı (H × A), "kaç kişi etkileniyor" ile "ne kadar kötü" birlikte raporlayan herhangi bir gösterge paneli için genel olarak yararlı bir örüntüdür — ham yaygınlık istatistiklerinin yaptığı gibi ikisini tek bir sayıya çökertmek, en fazla kaynağa ihtiyaç duyan vakayı tam olarak gizler.
- ÇBYE tarzı gösterge panelleri, yoksullukla mücadele programları için [yararlanıcı başına maliyet](../yararlanıcı-başına-maliyet/) raporlamasıyla doğal olarak eşleşir: ÇBYE azalması puanı başına maliyet, çok farklı müdahaleleri (nakit transferi ve sanitasyon altyapısı) karşılaştırmak için savunulabilir bir birimdir.

## Tuzaklar

- **On göstergeyi evrensel saymak** — OPHI'nin küresel ÇBYE göstergeleri ülkeler arası karşılaştırılabilirlik için kalibre edilmiştir; ulusal ÇBYE'ler (Güney Asya ve Afrika'daki birkaçı dâhil birçok ülke kendisininkini yayımlar) göstergeleri ve ağırlıkları yerel bağlama uyarlar ve ikisi doğrudan karşılaştırılamaz.
- **Yalnızca H raporlamak** — kişi sayısı oranı yoğunluğu tamamen göz ardı eder; her zaman A'yı veya ÇBYE'nin kendisini yanında raporlayın veya hesaplayın.
- **ÇBYE yoksulları ile gelir yoksullarının aynı nüfus olduğunu varsaymak** — OPHI'nin kendi ülke özetleri tipik olarak ikisi arasında yalnızca kısmi örtüşme gösterir; yalnızca gelir yoksullarını hedefleyen bir program, çok boyutlu yoksulların anlamlı bir payını sistematik olarak kaçırır.

## Kaynaklar

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
