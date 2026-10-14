# Refah Ayarlı Yaşam Yılları (WELLBY)

Bir WELLBY, standart 0–10 refah ölçeğinde, bir kişi için bir yıl boyunca bir ek yaşam memnuniyeti puanıdır. Sağlık ekonomisinde kullanılan QALY'nin yapısal analoğudur — sonuçlarının başka hiçbir ortak noktası olmayan müdahaleleri karşılaştırmanıza olanak tanıyan tek bir birim — ancak klinik sağlık durumları yerine öznel refaha dayanır ve HM Treasury'nin "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) belgesinde ortaya konmuştur.

## Neden önemli

Maliyet-fayda değerlendirmesi, bir gençlik kulübü hibesini bir yol güvenliği programına ve bir ruh sağlığı hizmetine karşı karşılaştırmak için ortak bir birime ihtiyaç duyar; bunların hiçbiri bir sonuç ölçüsünü paylaşmaz. Sağlık ekonomisi bunu klinik müdahaleler için QALY ile çözdü: 0 (ölü) ile 1 (tam sağlık) arasında ağırlıklandırılmış, kaliteye göre ayarlanmış bir yaşam yılı. HM Treasury'nin refah rehberliği aynı mantığı sağlık dışı kamu harcamasına genişletir; sonuç merdiveni olarak bir sağlık durumu endeksi yerine ONS'in uyumlaştırılmış yaşam memnuniyeti sorusunu ("Genel olarak bugünlerde hayatınızdan ne kadar memnunsunuz?", 0–10 yanıtlanır) kullanır. 1 WELLBY, bir kişinin yaşam memnuniyetinin bir yıl boyunca tam bir puan artması anlamına gelir (veya eşdeğer olarak, on kişinin memnuniyetinin bir yıl boyunca her birinde 0,1 puan artması — WELLBY'ler bir nüfus genelinde QALY'lerin yaptığı gibi toplanır). HM Treasury'nin rehberliği, öznel refah verilerini bir yaşam yılının değerine yönelik diğer yaklaşımlarla uzlaştırarak türetilen WELLBY başına açıklayıcı bir parasal değer (yaklaşık 13.000 £, 2019/20 fiyatlarıyla) belirler; bu da değerlendiricilere — yalnızlığın azaltılması, topluluk uyumu, yeşil alana erişim gibi — [refah değerlemesi](../refah-değerlemesi/) tekniklerinin daha önce yalnızca tarif edebildiği, sağlık veya güvenlik harcamasıyla ortak bir zeminde karşılaştıramadığı sonuçları parasallaştırmanın bir yolunu verir.

## Matematik

```
WELLBY = Δ yaşam memnuniyeti (0–10 ölçeği) × değişimin sürdüğü yıl sayısı
        (etkilenen tüm insanlar üzerinden toplanır)

Parasallaştırılmış refah faydası = üretilen WELLBY × WELLBY başına değer (HMT referans değeri)

krş. QALY = Δ sağlık durumu faydası (0–1 ölçeği) × o durumda yaşanan yıllar
```

0–10 memnuniyet ölçeği ile 0–1 QALY fayda ölçeği, bir dönüşüm adımı olmadan birbirinin yerine kullanılamaz; HM Treasury'nin rehberliği, örneğin QALY'lerle değerlendirilen bir sağlık müdahalesinin ve WELLBY'lerle değerlendirilen bir sosyal müdahalenin aynı [Green Book değerlendirmesi](../green-book-değerlendirmesi/) içinde sessizce çift sayılmaması veya karşılaştırılamaz bırakılmaması için ikisini uzlaştırmayı tartışır.

## Çalışılmış örnek

**Yerel yönetim yalnızlık hizmeti**: bir dostluk programı 400 yalnız yaşlı sakine hizmet verir. Takip anketleri ortalama yaşam memnuniyetinin 5,2'den 6,0'a (0,8 puanlık bir kazanç) yükseldiğini gösterir ve etkinin solmadan önce 2 yıl boyunca sürdüğü tahmin edilir.

```
WELLBY = 400 kişi × 0,8 puan × 2 yıl = 640 WELLBY

Parasallaştırılmış değer = 640 × 13.000 £ = 8.320.000 £
```

Yıllık 300.000 £ (2 yıl boyunca 600.000 £) program maliyetine karşı, fayda-maliyet oranı kabaca 8.320.000 / 600.000 ≈ **13,9:1**'dir — artık bir sağlık programının önlenen QALY başına maliyeti veya bir ulaşım programının yolculuk süresi tasarruflarıyla aynı değerlendirme tablosunda yer alabilen bir rakam.

**Hayır kuruluşu, daha küçük ölçek**: bir topluluk sanat programı, 1 yıl süren, ölçülmüş 0,3 puanlık bir memnuniyet kazancıyla 50 katılımcıya ulaşır.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Parasallaştırılmış değer = 15 × 13.000 £ = 195.000 £
```

## Yazılım mühendisliği bağlantısı

- Zaten bir yaşam memnuniyeti veya refah anketi öğesi toplayan herhangi bir vatandaşa yönelik hizmet (çoğu yerel yönetim ve sağlık-bakım platformu, ONS'in dört standart refah sorusunu izleyerek yapar), her hizmet değişikliği için özel ekonomik değerlendirme görevlendirmek yerine WELLBY'leri doğrudan mevcut veri boru hatlarından hesaplayabilir.
- WELLBY'ler, [sosyal değer yasası](../sosyal-değer-yasası/) raporlaması veya [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) için geliştirme yapan mühendislik ekiplerine, sözleşmeler veya tedarikçiler arasında karşılaştırılamayan özel "etki puanları"nın çoğalmasını önleyen, ulusal olarak standartlaştırılmış, HM Treasury onaylı bir payda sağlar.
- WELLBY'ler insanlar ve zaman boyunca toplanabilir olduğundan, [sonuç temelli hesap verebilirlik](../sonuç-temelli-hesap-verebilirlik/) sistemlerinde kullanılan türden nüfus düzeyindeki sonuç izlemesine temiz biçimde birleşir — bir hizmet gösterge paneli, bir sağlık sisteminin kazanılan QALY'leri raporlaması gibi, üç ayda bir üretilen kümülatif WELLBY'leri raporlayabilir.

## Tuzaklar

- **Öz bildirimli memnuniyet kazançlarının tamamen müdahaleye atfedilebilir olduğunu varsaymak** — bir karşı olgusal olmadan (karşılaştırma grubu veya kontrollü önce/sonra tasarımı), WELLBY kazancını genel eğilimlerden ayıramazsınız; bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/).
- **WELLBY'leri ve QALY'leri uzlaştırma olmadan tek bir toplamda karıştırmak** — HM Treasury'nin rehberliği ikisinin farklı ölçekler ve farklı altta yatan değer kuramları kullandığı konusunda açıktır; bunları naif biçimde toplamak örtüşen refahı çift sayar.
- **Referans parasal değeri eleştirisiz kullanmak** — WELLBY başına £ rakamı gerçek belirsizlik bantları olan bir ulusal ortalama tahminidir; HM Treasury rehberliği onu sabit bir döviz kuru gibi ele almak yerine duyarlılık analizi önerir.

## Kaynaklar

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
