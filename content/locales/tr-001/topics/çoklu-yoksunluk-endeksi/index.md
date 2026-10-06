# Çoklu Yoksunluk Endeksi (IMD)

IMD, İngiltere'deki küçük alanlar için göreli yoksunluğun resmî ölçüsüdür; ülkenin 32.844 Alt Katman Süper Çıktı Alanını (LSOA, her biri kabaca 1.500 sakin) 1'den (en yoksun) 32.844'e (en az yoksun) sıralar. Artık Konut, Topluluklar ve Yerel Yönetim Bakanlığı (MHCLG, eski adıyla MHCLG/DCLG) tarafından, en son İngiliz Yoksunluk Endeksleri 2019 olarak yayımlanmaktadır ve merkezî hükümet finansmanını, halk sağlığı önceliklendirmesini ve düzinelerce yerel program için uygunluğu doğrudan yönlendirir.

## Neden önemli

Yoksunluk tek bir şey değildir — bir mahalle gelir bakımından yoksul ama güvenli olabilir veya gelir bakımından yeterli ama kötü sağlık sonuçları ve kötü konuttan muzdarip olabilir. IMD'nin öncül endeksleri (1970'lerin Çevre Bakanlığı yoksunluk göstergelerine kadar uzanır), tek göstergeli hedeflemenin (örneğin yalnızca işsizlik oranı) diğer şekillerde yoksun alanları rutin olarak kaçırması nedeniyle bugünün yedi alanlı modeline evrildi. IMD 2019, geliri, istihdamı, eğitimi, sağlığı, suçu, konut ve hizmetlere erişim engellerini ve yaşam ortamını LSOA başına tek bir bileşik sıralamada birleştirir; her alan kendi gösterge sepetinden oluşturulur ve MHCLG'nin metodolojisiyle ağırlıklandırılır. Yerel yönetim düzeyinde değil küçük alan (LSOA) düzeyinde çalıştığı için, aksi hâlde varlıklı ilçelerin içinde gizlenen yoksunluk ceplerini ortaya çıkarır — NHS England'ın, Eğitim Bakanlığı'nın öğrenci primi ve düzinelerce yerel yönetim finansman formülünün gerçekte ortalama yerel yönetim geliri değil IMD'ye dayanmasının nedeni budur. İngiltere'de uygunluğu belirleyen, erişimi önceliklendiren veya etkiyi alana göre raporlayan yazılım, IMD ondalık dilimini veya sırasını sonradan düşünülmüş bir şey değil birinci sınıf bir girdi olarak ele almalıdır — ve bir program kasıtlı olarak en yoksun alanları hedeflediğinde, değerlendirmesi, bir sterlinlik faydayı nereye düştüğüne bakılmaksızın aynı değerlemek yerine bu hedeflemeyle tutarlı [dağılımsal ağırlıklandırma](../dağılımsal-ağırlıklandırma/) uygulamalıdır.

## Matematik

```
7 alan, ağırlıklı:
  Gelir                                  %22,5
  İstihdam                               %22,5
  Eğitim, Beceriler ve Öğretim           %13,5
  Sağlık Yoksunluğu ve Engellilik        %13,5
  Suç                                     %9,3
  Konut ve Hizmetlere Erişim Engelleri    %9,3
  Yaşam Ortamı                            %9,3

Her alan puanı: göstergeler standartlaştırılır (sıralanır, sonra normal bir dağılıma
doğru dönüştürülür) ve üstel dönüşümle birleştirilir, böylece herhangi bir
göstergedeki yüksek yoksunluk, o alandaki diğerlerindeki düşük yoksunlukla tamamen
iptal edilemez.

IMD bileşik puanı (LSOA) = Σ (alan puanı × alan ağırlığı)
LSOA'ları bileşik puana göre sıralayın → 1 (en yoksun) ile 32.844 (en az yoksun)
Ondalık dilimler: sıra ÷ 3.284 (yaklaşık), ondalık dilim 1 = LSOA'ların en yoksun %10'u
```

## Çalışılmış örnek

**LSOA bileşik puanı**, açıklayıcı standartlaştırılmış alan puanları kullanılarak (0 = yoksunluk sinyali yok, yüksek = daha yoksun):

```
Gelir                  0,35 × 0,225 = 0,07875
İstihdam               0,30 × 0,225 = 0,06750
Eğitim                 0,20 × 0,135 = 0,02700
Sağlık                 0,15 × 0,135 = 0,02025
Suç                    0,10 × 0,093 = 0,00930
Konut Erişim Engelleri 0,05 × 0,093 = 0,00465
Yaşam Ortamı           0,08 × 0,093 = 0,00744

Bileşik puan = 0,07875 + 0,06750 + 0,02700 + 0,02025
             + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Bu bileşik puan daha sonra 32.844 LSOA'nın tüm puanlarına karşı sıralanır. LSOA'yı 2.950. sıraya yerleştirirse, ondalık dilim 1'e düşer (2.950 ÷ 3.284 ≈ 0,9, yani İngiltere'deki mahallelerin en yoksun %10'u içinde) — bu, birçok finansman formülü için çevredeki yerel yönetimin ortalama olarak nasıl puan aldığından bağımsız olarak uygunluğu açan eşiktir.

## Yazılım mühendisliği bağlantısı

- Kullanıcıları posta koduna veya LSOA'ya coğrafi kodlayan herhangi bir hizmet, yayımlanmış IMD arama tablosuna (MHCLG'den ücretsiz, sürümlenmiş bir CSV) katılarak, yeni kişisel veri toplamadan erişimi hedeflemek, vaka yükünü önceliklendirmek veya sonuçları yoksunluk bandına göre raporlamak için bir ortak değişken olarak yoksunluk ondalık dilimini ekleyebilir.
- IMD ondalık dilimi, kamu dijital hizmetleri için standart bir eşitlik kontrolüdür: hizmet benimsemesini, terk etmeyi veya memnuniyeti IMD ondalık dilimine göre çapraz tablolamak, toplam bir metriğin gizlediği erişim boşluklarını ortaya çıkarır — bkz. [dijital kapsayıcılık](../dijital-kapsayıcılık/) ve [vatandaş memnuniyeti metrikleri](../vatandaş-memnuniyeti-metrikleri/).
- IMD sırası göreli olduğu için (İngiltere genelinde her zaman sabit bir sıralar kümesine toplanır), ulusal olarak yoksunluğun zaman içinde artıp artmadığını gösteremez — yalnızca o baskıda alanların birbirine göre nerede sıralandığını gösterir; yalnızca ham IMD sırasına dayanan mutlak eğilim gösterge panelleri oluşturmayın.

## Tuzaklar

- **IMD sıralarını baskılar arasında (2015'e karşı 2019) bir zaman eğilimi olarak karşılaştırmak** — altta yatan göstergeler, coğrafyalar ve metodoloji baskılar arasında değişir; MHCLG, sıra değişimlerini bir alanın daha fazla veya daha az yoksun hâle geldiğinin kanıtı olarak kullanmaya karşı açıkça uyarır.
- **LSOA düzeyindeki IMD'yi bireylere uygulamak** — ondalık dilim 1'deki bir LSOA hâlâ yoksun olmayan hanehalkları içerir ve ondalık dilim 10'daki bir LSOA hâlâ yoksun olanları içerir; IMD insanları değil alanları tarif eder ve onu bireysel bir uygunluk vekili olarak kullanmak her iki yönde de yanlış sınıflandırır.
- **Alan düzeyindeki ayrıntıyı bileşik sıra lehine göz ardı etmek** — özdeş bileşik puanlara sahip iki LSOA tamamen farklı alan profillerine sahip olabilir (biri sağlık yoksunu, biri suç yoksunu); tek bir soruna yönelik bir hedefleme planı, harmanlanmış bileşiği değil, ilgili alan puanını kullanmalıdır.

## Kaynaklar

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
