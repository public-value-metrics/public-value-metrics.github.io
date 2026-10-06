# Dijital Hizmet Standardı

GOV.UK Hizmet Standardı (Service Standard), her merkezî hükümet dijital hizmetinin yayına girmeden önce geçmesi gereken kapıdır: 14 yayımlanmış madde, her teslimat aşamasının sonunda bağımsız bir panel tarafından değerlendirilir. "İyi kamu hizmetleri inşa edin"i bir sloganın ötesine, bir kâğıt izi olan geçti/kaldı kararına dönüştüren mekanizmadır — ve 2012 Hükümet Dijital Stratejisi'nin "varsayılan olarak dijital" yetkisinin doğrudan torunudur.

## Neden önemli

Hizmet Standardı var olmadan önce, hükümet BT başarısızlığı yayına girene kadar nadiren görünür oluyordu ve nadiren birinin işaret edebileceği bir karara atfedilebiliyordu. 2012 Hükümet Dijital Stratejisi, bakanlıkları en yüksek hacimli 25 kamuya dönük işlemsel hizmeti "varsayılan olarak dijital" olarak yeniden tasarlamaya taahhüt ettirdi ve taahhüdü bir uyum mekanizmasıyla destekledi: hizmetler, o zamanlar 26 maddelik bir standarda (2019'da 18'e birleştirilen ve şimdi yürürlükte olan 14 maddelik standart, üç grubu kapsar — kullanıcı ihtiyaçlarını anlamak, iyi bir hizmet sunmak ve doğru teknolojiyi kullanmak) karşı bir hizmet değerlendirmesini geçmeden GOV.UK'da yayına giremezdi. Bir hizmet değerlendirmesi gerçek bir olaydır: GDS veya bakanlık değerlendiricilerinden oluşan bir panel kanıtı gözden geçirir, ekibi sorgular ve her maddeye karşı geçti, kaldı veya "karşılanmadı" kararı verir; bu karar hizmetin değerlendirme sayfasında yayımlanır. Bir değerlendirmeden kalmak, hizmetin özel betadan kamuya açık betaya veya betadan canlıya geçmesini engeller — bu bir inceleme değil, gerçek bir kapıdır.

## Matematik

Hizmet Standardı bir formül değil bir çerçevedir, ancak aşamalı kapılı bir karar yapısı olarak işler:

```
Keşif  → Alfa değerlendirmesi  → Beta değerlendirmesi  → Canlı değerlendirme
         (tüm hizmetler için    (kamuya açık beta       ("beta" etiketini kaldırmadan
          zorunlu değil, ancak   lansmanından önce        ve eski kanalı kapatmadan
          önerilir)              zorunlu)                 önce zorunlu)

Her değerlendirme: kanıt + ekip görüşmesi → madde başına panel kararı
  Karşılandı / Kısmen karşılandı / Karşılanmadı
Genel sonuç: Geçti / Koşullu geçti / Kaldı (yeniden değerlendirme gerekir)

Kalmanın maliyeti ≈ düzeltmek için bir sonraki sprint döngüsünün maliyeti
                  + hizmetin sağlamak üzere finanse edildiği
                    [kanal değişimi tasarruflarının](../kanal-değişimi-tasarrufları/) gecikmesi
```

10. madde ("başarının neye benzediğini tanımlayın ve performans verilerini yayımlayın"), [işlem başına maliyet](../işlem-başına-maliyet/) ve [hizmet standartları ve işlem metrikleri](../hizmet-standartları-ve-işlem-metrikleri/)ni besleyen maddedir — Standart yalnızca hizmeti değil, ölçümü de zorunlu kılar.

## Çalışılmış örnek

**Yerel yönetim konut başvuru hizmeti**: bir belediye ekibi, 14 maddenin 11'ini karşılayan, ancak internet erişimi olmayan başvuru sahipleri için destekli dijital yol bulunmadığı için 5. maddede ("hizmeti herkesin kullanabildiğinden emin olun") ve kişisel veriler düz metin uygulama hata izlerinde günlüğe kaydedildiği için 9. maddede başarısız olan bir hizmetle beta değerlendirmesine ulaşır.

```
Kalmanın doğrudan maliyeti:
  Yeniden değerlendirme yuvası: bir sonraki uygun panel için 6–8 haftalık bekleme
  Düzeltme sprinti: 2 geliştirici × 3 hafta × günde 550 £ ≈ 34.650 £
  Destekli dijital kanal tasarımı: 1 araştırmacı × 2 hafta ≈ 5.000 £

Gecikme maliyeti: hizmetin yılda 18.000 konut sorgusunun %40'ını 8,50 £'luk telefon
aramalarından 0,20 £'luk dijital işlemlere kaydırması öngörülüyordu
  = 7.200 × (8,50 £ − 0,20 £) = yılda 59.760 £ vazgeçilen, ~2 aylık gecikme için
    orantılı olarak ≈ 9.960 £

Başarısız değerlendirmenin toplam maliyeti ≈ 49.610 £
```

Aritmetiğin amacı kesinlik değildir — başarısız bir değerlendirmenin gerçek, hesaplanabilir bir fiyatı olduğudur; kapının dişleri olmasının nedeni tam olarak budur.

## Yazılım mühendisliği bağlantısı

Mühendisler için Standart, bir politika belgesi kadar bir mimari ve teslimat kontrol listesi olarak okunur: 11. madde ("doğru araçları ve teknolojiyi seçin") ve 12. madde ("yeni kaynak kodunu açık yapın") doğrudan mühendislik kararlarıdır ve 14. madde ("güvenilir bir hizmet işletin") herhangi bir üretim sisteminin ihtiyaç duyduğu aynı SLO'ları ve olay süreçlerini gerektirir. Bu bölümün şemsiye çerçevesidir — [işlem başına maliyet](../işlem-başına-maliyet/) ve [kanal değişimi tasarrufları](../kanal-değişimi-tasarrufları/), Standardın mali olarak korumaya çalıştığı şeylerdir, [dijital kapsayıcılık](../dijital-kapsayıcılık/), 5. maddenin garanti etmek için var olduğu şeydir ve [platform olarak hükümet](../platform-olarak-hükümet/) bileşenleri (GOV.UK Notify, Pay, One Login) 13. maddeyi ("açık standartları, ortak bileşenleri ve kalıpları kullanın ve katkıda bulunun") büyük ölçüde varsayılan olarak karşılar. "Doğru araçlar" maddesinin satın alma kararlarında nasıl işlediği için ayrıca bkz. [hükümette yap veya satın al](../hükümette-yap-veya-satın-al/).

## Tuzaklar

- **Değerlendirmeyi yayın günü uyum onay kutusu olarak ele almak**: 14 maddeyi beta değerlendirmelerinden bir hafta önce ilk kez okuyan ekipler öngörülebilir biçimde kalır; Standart, kararları keşiften itibaren şekillendirmek içindir, geriye dönük denetlemek için değil.
- **Hizmeti değil prototipi değerlendirmek**: şık bir demo, hizmetin canlı, destekli dijital kapsayıcı, olay yönetimli sürümünün kalacağı bir incelemeyi geçebilir — değerlendiricilerin bu boşluğu araştırması beklenir, ancak kendi kendini onaylayan küçük hizmetler genellikle bunu atlar.
- **Ölçeklemeden önce yeniden değerlendirme olmaması**: %5 yayılımda değerlendirilen bir hizmet %100'de otomatik olarak uyumlu kalmaz — yük, başarısızlık talebi ve uç durum kullanıcıların hepsi değişir.
- **Hizmet Standardını bir tasarım sistemiyle karıştırmak**: GOV.UK Tasarım Sistemi bileşenleri bazı maddeleri (tutarlılık, erişilebilirlik) karşılar, ancak Standart ekip yapısını, çevik uygulamayı ve veri etiğini de kapsar — iyi biçimlendirilmiş bir hizmet yine de 2., 6. veya 9. maddelerde başarısız olabilir.

## Kaynaklar

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
