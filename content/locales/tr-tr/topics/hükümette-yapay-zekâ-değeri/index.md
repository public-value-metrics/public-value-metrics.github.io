# Hükümette Yapay Zekâ Değeri

Hükümette yapay zekâ değeri, bir kamu hizmetinde kullanılan bir yapay zekâ sisteminin, diğer herhangi bir harcama kararıyla aynı paranın karşılığı ve kamu değeri çıtasını aşması gerekliliğidir — yeni olduğu için daha düşük değil, korkulduğu için daha yüksek değil. Bir teslimat ekibinin bir yapay zekâ özelliği yayına girmeden önce, sonra değil, yanıtlayabilmesi gereken sorudur: güvence, gözetim ve risk dürüstçe fiyatlandırıldıktan sonra, bu maliyetinden daha fazla değer üretiyor mu?

## Neden önemli

Birleşik Krallık Merkezî Dijital ve Veri Ofisi (CDDO), 2024'te, Haziran 2023'teki önceki geçici rehberliğe dayanarak Hükümet için Üretken Yapay Zekâ Çerçevesi'ni yayımladı ve onu üretken yapay zekânın ne olduğunu, etik çıkarımlarını, araç güvenliğini, kalite güvence kontrollerini, tüm üretken yapay zekâ yaşam döngüsünün yönetimini, gerçek kullanım durumlarının belirlenmesini, hükümetler arası işbirliğini, şeffaflığı, becerileri ve yönetişimi kapsayan on ilke etrafında yapılandırdı. Çerçevenin "anlamlı insan kontrolü" ve tam yaşam döngüsü yönetimi konusundaki ısrarı vardır çünkü yapay zekâ proje iş gerekçelerinin diğer BT harcamalarında olmayan belirli bir başarısızlık biçimi vardır: bir pilotun manşet verimlilik sayısını üretmek kolay ve abartmak kolaydır, çünkü aracın yarattığı doğrulama, düzeltme ve gözetim yükü hesaba katılmadan önce ölçülür. Çerçevenin yanında, Algoritmik Şeffaflık Kayıt Standardı (ATRS), kamu kurumlarının bireyler hakkındaki kararlar üzerinde önemli etkisi olan algoritmik araçlar için standartlaştırılmış bir kayıt — amaç, kullanılan veri, performans, adalet testi, insan gözetimi düzenlemeleri — yayımlamasını şart koşar; bu da bir yapay zekâ sisteminin güvence maliyetini, bir ekibin sessizce atlayabileceği dâhili bir tahmin değil, kamusal kayıt meselesi yapar.

## Matematik

Yapay zekâ benimsemesi, standart [paranın karşılığı](../paranın-karşılığı/) değerlendirmesinin yerine geçmek değil, ona bir ek olarak değerlendirilir; yapay zekâya özgü terimler tek bir "verimlilik kazancı" sayısına katlanmak yerine açıkça belirtilir:

```
Bir yapay zekâ sisteminin net değeri =
    verimlilik kazancı (tasarruf edilen zaman × tam yüklü personel maliyeti)
  − lisans/hesaplama maliyeti
  − insan doğrulama ve gözetim maliyeti (yapay zekâ çıktısını üzerinde
    harekete geçilmeden önce kontrol etmek — olgun araçlar için bile sıfıra düşmez)
  − ATRS dokümantasyonu ve sürekli izleme maliyeti
  − hatalardan, yanlılıktan veya halüsinasyondan kaynaklanan zararın riske göre
    ayarlanmış maliyeti, bu zararı kimin taşıdığına göre ağırlıklandırılmış
    (distributional-weighting)

Gözetim terimini atlayan bir pilot verimlilik rakamı, zaten eşdeğer insan
incelemesini içeren olağan işler maliyet temel çizgisiyle karşılaştırılabilir
değildir — bunun ödünç aldığı daha tam verimlilik ölçüm disiplini için bkz.
ai-productivity-in-the-public-sector.
```

## Çalışılmış örnek

**Rutin belediye vergisi sorularına ilk yanıtları taslaklamak için üretken bir yapay zekâ aracı kullanan yerel yönetim**: yılda 25.000 soru, daha önce tamamen vaka çalışanları tarafından soru başına ortalama 14 dakikada ele alınıyordu, tam yüklü personel maliyeti saatte 34 £.

```
Temel çizgi (yapay zekâsız) maliyet:
  25.000 × (14/60) × 34 £ = yılda 198.333 £

Pilot manşet iddiası: yapay zekâ 90 saniyede bir yanıt taslaklar,
vaka çalışanı "yalnızca inceler ve gönderir" — iddia edilen yeni süre 3 dakika
  25.000 × (3/60) × 34 £ = yılda 42.500 £
  → iddia edilen tasarruf yılda 155.833 £ (dönüştürücü görünüyor)

Pilotun elle seçilmiş test vakaları yerine 3 ay canlı kaldıktan sonra ölçülen
tam yüklü rakam:
  Yanıt başına gerçek inceleme + düzeltme süresi: 6 dakika (karmaşık veya
  duygusal olarak hassas sorular için taslaklar gerçek düzenleme gerektirir)
  25.000 × (6/60) × 34 £ = yılda 85.000 £
  Lisans/hesaplama maliyeti: yılda 38.000 £
  ATRS dokümantasyonu ve üç aylık yanlılık/kalite izleme: yılda 14.000 £
  Toplam maliyet = 85.000 + 38.000 + 14.000 = yılda 137.000 £

Gerçek tasarruf = 198.333 − 137.000 = yılda 61.333 £ — gerçek ve saklanmaya değer,
ancak pilotun manşet iddiasının yarısından çok daha az ve onu bulmak için pilotun
en iyi durum ölçümü değil, dürüst bir gözetim süresi ölçümü gerekti.
```

## Yazılım mühendisliği bağlantısı

[Kamu sektöründe yapay zekâ verimliliği](../kamu-sektöründe-yapay-zekâ-verimliliği/) ile bu konunun buluştuğu yer burasıdır: kamu hizmetlerine yapay zekâ özellikleri inşa eden mühendislik ekipleri, çalışılmış örnekteki "gerçek" rakamı mümkün kılan araçlandırmaya sahiptir — pilotun demo koşullarına güvenmek yerine gerçek inceleme süresini, taslak ile gönderilen yanıt arasındaki düzenleme mesafesini ve yükseltme oranını günlüğe kaydetmek. Yapay zekâ özellikleri [dijital hizmet standardı](../dijital-hizmet-standardı/) madde 9'a (güvenli hizmet, kullanıcı gizliliği) karşı değerlendirilmeli ve araç vatandaş verilerine dokunduğunda [kamu sektörü siber güvenlik değeri](../kamu-sektörü-siber-güvenlik-değeri/) ile çapraz referanslanmalıdır; bireyler hakkındaki kararlar üzerinde önemli etkisi olan herhangi bir yapay zekâ sistemi, bir hizmetin yayına girmeden önce geçilmiş bir [dijital hizmet standardı](../dijital-hizmet-standardı/) değerlendirmesine ihtiyaç duyması gibi, değerlendirmeye hazır sayılabilmesi için bir ATRS kaydına ihtiyaç duyar.

## Tuzaklar

- **Yapay zekâ yıkama**: mevcut kural tabanlı otomasyonu, çerçevenin ek incelemesini haklı çıkaran doğruluk veya yanlılık riskleri olmadan, yapay zekâ benimsemesi için ayrılmış finansmana veya dikkate erişmek üzere "yapay zekâ" olarak yeniden etiketlemek.
- **Üretim verimliliğini değil pilot verimliliğini ölçmek**: pilotlar, ilgili, dikkatli inceleyicilerle seçilmiş test vakaları üzerinde çalışır; üretim ise zamanla otomasyon yanlılığı geliştiren ve çıktıları yetersiz kontrol eden inceleyicilerle tam karmaşık vaka karışımı üzerinde çalışır — her ikisi de dürüst gözetim maliyeti rakamını çarpıtır.
- **Araç "gerçekten otomatik karar verme değil" diye ATRS kaydını atlamak**: standardın eşiği bir birey hakkındaki bir karar üzerinde önemli etkidir; vatandaşa yönelik yapay zekâ taslaklama veya önceliklendirme araçlarının çoğu, bir insan teknik olarak onaylasa bile bunu karşılar.
- **Hataların dağılımsal etkisini göz ardı etmek**: tüm kullanıcılar genelinde ortalaması alınmış bir yapay zekâ sisteminin hata oranı, belirli gruplar için çok daha yüksek bir hata veya yanlılık oranını gizleyebilir; [dağılımsal ağırlıklandırma](../dağılımsal-ağırlıklandırma/) yalnızca toplam doğruluk rakamına değil, riske göre ayarlanmış zarar terimine de uygulanmalıdır.

## Kaynaklar

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
