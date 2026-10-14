# Green Book Değerlendirmesi (Beş Durumlu Model)

Green Book, Birleşik Krallık hükümet harcama tekliflerini değerlendirmek ve değerlendirmesini yapmak için HM Treasury'nin zorunlu rehberliğidir. Merkezî aracı olan beş durumlu model, bir iş gerekçesini her şeyi bir bakanın geçiştirebileceği tek bir sayıya indirgemek yerine beş ayrı soruyu yanıtlamaya zorlar: iyi bir fikir mi, değer sunuyor mu, satın alınabilir mi, karşılanabilir mi ve teslim edilebilir mi.

## Neden önemli

Bakanlık devredilmiş sınırlarının üzerindeki her Birleşik Krallık merkezî hükümet harcama teklifi, fon serbest bırakılmadan önce Green Book değerlendirmesinden geçmek zorundadır ve HM Treasury'nin Green Book İncelemesi 2020'si (sürecin daha yoksul bölgelere karşı yanlı olduğu eleştirilerinin ardından yayımlandı, bkz. <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) seçeneklerin gerçek bir "asgari düzeyde yap" temel senaryosuyla karşılaştırılması ve paranın karşılığı değerlendirilmeden önce stratejik uyumun gösterilmesi şartını sıkılaştırdı. Beş durumlu modelin kendisi Green Book'tan öncedir — standart iş gerekçesi yapısı olarak Office of Government Commerce'te ortaya çıkmıştır — ancak 2022 Green Book baskısı onu Hazine onayı isteyen herhangi bir iş gerekçesi için zorunlu biçim olarak yerleştirir: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Gerekçeyi beşe bölmenin amacı, bir teklifin diğerlerinden bağımsız olarak herhangi bir boyutta başarısız olabilmesidir. Stratejik olarak sağlam, maliyet-etkin bir BT platform geçişi, onu yalnızca bir tedarikçi teslim edebiliyorsa (tek kaynaklı alım riski yaratarak) ticari durumda başarısız olabilir veya bakanlığın o büyüklükte programları teslim etme geçmişi yoksa yönetim durumunda başarısız olabilir. Tek bir "paranın karşılığı" puanı tam da bu tür başarısızlık biçimini gizler.

## Matematik

Beş durumlu model bir formül değil, bir yapıdır; ancak her durumun kendi nicel veya kanıtsal testi vardır:

```
1. Stratejik durum
   Kurumsal stratejiye bağlı bir harcama hedefinin kanıtı.
   Test: değişim için hiç bir gerekçe var mı? ("hiçbir şey yapma" her zaman
   bir seçenektir.)

2. Ekonomik durum
   Sosyal maliyet-fayda analizi veya maliyet-etkililik analizi kullanarak
   bir "asgari düzeyde yap" temel senaryosuna karşı seçenek değerlendirmesi.
   Test: hangi seçenek net kamu değerini maksimize eder?
   Bkz. ../social-cost-benefit-analysis/ ve ../cost-effectiveness-analysis-in-government/

3. Ticari durum
   Piyasa görüşmesi, satın alma yolu, alıcı ile tedarikçi arasında risk
   dağılımı.
   Test: tercih edilen seçenek kabul edilebilir koşullarda satın alınabilir mi?

4. Mali durum
   Bakanlık bütçe sınırları içinde karşılanabilirlik, finansman kaynağı,
   bilanço işlemi.
   Test: bunu bu yıl ve sonraki her yıl karşılayabilir miyiz?

5. Yönetim durumu
   Yönetişim, proje planı, fayda gerçekleştirme planı, risk kaydı.
   Test: bu kuruluş bunu gerçekten teslim edebilir mi?
   Bkz. ../benefits-realization/
```

Nicel değerlendirme ekonomik durumda yer alır: seçenekler, [sosyal maliyet-fayda analizi](../sosyal-maliyet-fayda-analizi/) yöntemiyle [sosyal iskonto oranı](../sosyal-iskonto-oranı/)na göre düzeltilmiş net bugünkü değer temelinde veya faydalar dürüstçe parasallaştırılamadığında [maliyet-etkililik analizi](../hükümette-maliyet-etkililik-analizi/) ya da [çok kriterli karar analizi](../çok-kriterli-karar-analizi/) yoluyla karşılaştırılır.

## Çalışılmış örnek

**Yerel yönetim**: 12 milyon £'luk bir konut onarım BT sistemini değerlendiren bir belediye, beş durumu şöyle yürütür. Stratejik durum: onarım birikimi, müdahale olmadan 18 ay içinde yasal uygun konut standardını ihlal eder. Ekonomik durum: 10 yıllık değerlendirme dönemi boyunca %3,5 iskonto oranıyla (2022 Green Book'un standart sosyal zaman tercihi oranına göre) maliyetlendirilmiş üç seçenek — "asgari düzeyde yap" (eski sistemi yamala, NPV −4,1 milyon £), "satın al" (hazır ticari yazılım platformu, NPV +2,3 milyon £), "geliştir" (özel platform, yazılım geliştirme için %40 iyimserlik yanlılığı iskontosuz sermaye maliyetine uygulandığında, Green Book Ek A'ya göre NPV +0,6 milyon £). Satın alma, ekonomik durumu kazanır. Ticari durum: iki uygun tedarikçi var, rekabetçi ihale mümkün — geçer. Mali durum: sermaye Public Works Loan Board'dan temin edilebilir, gelir maliyetleri orta vadeli mali plan içine sığar — geçer. Yönetim durumu: belediye son beş yılda iki karşılaştırılabilir sistem teslim etmiştir — geçer. Teklif "satın al" ile ilerler.

**Merkezî hükümet bakanlığı**: güçlü bir ekonomik duruma (NPV +40 milyon £) sahip, ancak ilgili akreditasyona yalnızca bir tedarikçinin sahip olduğu bir teklif, rekabetçi gerilim için ticari durum testinde başarısız olur; bu da ya kendi inceleme yüküyle birlikte bir tek kaynaklı alım muafiyetini ya da pazarı açmak için şartnamenin yeniden tasarlanmasını zorunlu kılar — yalnızca ekonomik durum bunu asla ortaya çıkarmazdı.

## Yazılım mühendisliği bağlantısı

Hükümet veya hibe destekli kuruluşlar içindeki mühendislik ekipleri genellikle yalnızca ekonomik durumu görür; çünkü ürün ve mühendislik liderliğinden gerekçelendirmeleri istenen kısım budur ("bu geçişin yatırım getirisi nedir?"). Ancak Hazine'den veya bir hibe komitesinden geçen bir iş gerekçesinin beşine de ihtiyacı vardır ve mühendisler çoğu zaman ticari durumu (bu gerçekten satın alınabilir mi, yoksa bizi tek bir satıcının tescilli biçimine mi kilitliyor?) ve yönetim durumunu (teslimat yeteneğimiz var mı, yoksa bu, üç belirli kişinin ayrılmamasına mı bağlı?) yanıtlamak için en iyi konumdaki kişilerdir. "Yalnızca iş gerekçesi sayıları" talebini, gerçek kararın beşte biri için bir talep olarak ele alın. Ekonomik durumun çıktısının genellikle nasıl özetlendiği için bkz. [paranın karşılığı](../paranın-karşılığı/); mali durumun olağan nicel çekirdeği için ise [toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/).

## Tuzaklar

- **Önce ekonomik durumu, sonra ona uyacak şekilde stratejik durumu yazmak.** Green Book İncelemesi 2020, değerlendirme yanlılığını zaten iyi belgelenmiş yerlere ve sektörlere doğru iten, bölgesel eşitsizliği pekiştiren tam da bu başarısızlık biçimini buldu; stratejik durum, seçenekler karşılaştırılmadan önce hedefi belirlemelidir.
- **"Asgari düzeyde yap"ı "hiçbir şey yapma" olarak ele almak.** Doğru temel senaryo, hâlâ asgari yasal veya güvenlik yükümlülüklerini karşılayan en düşük maliyetli seçenektir; sıfır harcama fantezisi değil — gerçek sıfırla karşılaştırmak her seçeneğin görünürdeki değerini şişirir.
- **Ekonomik durum güçlü olduğu için ticari ve yönetim durumlarını atlamak.** Rekabetçi biçimde satın alınamayan veya sponsor kuruluş tarafından teslim edilemeyen yüksek NPV'li bir teklif finanse edilebilir bir teklif değildir; Hazine değerlendiricileri ikna edici bir ekonomik durumla bile rutin olarak bu gerekçelerle reddeder.
- **Beş durumlu modeli yalnızca başta, bir kez uygulamak.** Green Book, maliyetler ve kanıtlar netleştikçe durumun sonraki her onay kapısında (stratejik taslak durum, taslak iş gerekçesi, tam iş gerekçesi) yeniden gözden geçirilmesini şart koşar — taslak aşamasında donmuş bir durum, daha sonraki bir kapının yakalayacağı maliyet artışını kaçırır.

## Kaynaklar

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
