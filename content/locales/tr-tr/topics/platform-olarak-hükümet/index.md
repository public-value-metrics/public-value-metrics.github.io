# Platform Olarak Hükümet (GaaP)

Platform Olarak Hükümet (Government as a Platform), paylaşılan, yeniden kullanılabilir bileşenleri — bir bildirim hizmeti, bir ödeme hizmeti, bir kimlik hizmeti — bir kez, merkezî olarak inşa etme stratejisidir; böylece yüzlerce bireysel hükümet hizmeti her biri kendisininkini inşa etmek yerine onları tüketir. Kamu dijital altyapısını bir platform ekonomisi sorunu olarak yeniden çerçeveler: değer herhangi bir tek entegrasyonda değil, bunu benimseyen *bir sonraki* ekibin marjinal maliyetinin sıfıra yaklaşmasındadır.

## Neden önemli

GDS stratejiyi 2015 tarihli "Government as a Platform" yayınında resmî olarak ortaya koydu ve hükümetin aynı yetenekleri — ödeme alma, kullanıcı bildirimi, kimlik doğrulama, adres arama — hizmet hizmet ayrı ayrı inşa ettiğini, her birinin kendi satın alma, güvenlik değerlendirmesi ve sürekli destek yükünü taşıdığını savundu. Alternatif, bir kez yüksek standartta inşa edilen ve her yerde yeniden kullanılan az sayıda paylaşılan platformdu: e-posta, kısa mesaj ve mektup göndermek için GOV.UK Notify, çevrimiçi ödeme almak için GOV.UK Pay ve kimlik doğrulaması için GOV.UK One Login (önceki GOV.UK Verify kimlik programının halefi). Bu platformların ulaştığı ölçek, stratejinin işe yaradığına dair en açık kanıttır: GOV.UK Pay yaklaşık 1.800 bireysel hizmet genelinde 10 milyar £'un üzerinde işlem gerçekleştirdi — ve ilk 1 milyar £'ını işlemesi kabaca dört yıl sürmüşken, şimdi bu kadarını yaklaşık beş ayda işliyor — GOV.UK Notify ise 1.500'ün üzerinde hükümet kuruluşu adına 9 milyardan fazla mesaj gönderdi. Bu benimseyen hizmetlerin her biri kendi ödeme ağ geçidini veya mesajlaşma boru hattını inşa etmekten, güvenceye almaktan ve sürdürmekten kaçındı.

## Matematik

```
Hizmet başına inşa maliyeti (platform yok) = N hizmet × bir ödeme/bildirim/kimlik
  sistemini inşa etme, güvenlik değerlendirmesi ve işletme maliyeti

Platform maliyeti = sabit platform inşa maliyeti
                  + benimseyen hizmet başına marjinal maliyet (entegrasyon,
                    yapılandırma, sürekli platform ekibi desteği)

Yeniden kullanım şu durumda başabaş noktasına ulaşır:
  platform inşa maliyeti < N × (hizmet başına inşa maliyeti − marjinal
  entegrasyon maliyeti)

Olgun bir platform için, ek benimseyen başına marjinal maliyet yalnızca
işlem/mesaj ücretine yaklaşır — sabit maliyet, bir bakanlığın bütçesine değil,
tüm hükümet envanterine itfa edilir; GaaP bileşenlerinin erken benimseyenlere
tam maliyet geri kazanımıyla ücretlendirilmek yerine genellikle merkezî olarak
finanse edilmesinin nedeni budur.
```

## Çalışılmış örnek

**Bir ödeme ağ geçidi inşa etmek yerine GOV.UK Pay'i benimseyen yerel yönetim**:

```
Kendin-inşa et tahmini:
  PCI-DSS uyum çalışması + entegrasyon + sürekli bakım
  ≈ 85.000 £ inşa + yılda 22.000 £ bakım

GOV.UK Pay benimsemesi:
  Entegrasyon çabası ≈ 12.000 £ (geliştirici zamanı)
  İşlem ücretleri: hükümetten vatandaşa kart ödemeleri tipik olarak küçük bir
  yüzde + işlem başına sabit ücret üzerinden ücretlendirilir, belediyenin
  taşıdığı ayrı bir PCI-DSS yükü yok
  ≈ 12.000 £ tek seferlik, sürekli maliyet sabit değil hacimle değişken

İlk yıl tasarrufu ≈ 85.000 £ − 12.000 £ = 73.000 £, önlenen yılda 22.000 £ bakım
ve kart verilerini bir belediyece işletilen sistemde tutmanın önlenen uyum riski
sayılmadan önce — bu ikinci kategori public-sector-cybersecurity-value'da
ele alınan güvenlik değeridir.
```

Bu 73.000 £'u şu anda GOV.UK Pay kullanan kabaca 1.800 hizmet genelinde ölçeklendirin ve hükümet genelindeki toplam önlenen inşa maliyeti yüzlerce milyon £'dur — stratejinin değerinin gerçekte bulunduğu yer herhangi bir tek entegrasyon değil, platform ekonomisidir.

## Yazılım mühendisliği bağlantısı

Platform Olarak Hükümet, [hükümette yap veya satın al](../hükümette-yap-veya-satın-al/) için doğrudan bir argümandır: paylaşılan, değerlendirilmiş, iyi işletilen bir bileşen mevcut olduğunda, ısmarlama bir eşdeğer inşa etmek çok nadiren daha iyi bir [paranın karşılığı](../paranın-karşılığı/) seçimidir ve neredeyse tanımı gereği [dijital hizmet standardı](../dijital-hizmet-standardı/) madde 13'te ("açık standartları, ortak bileşenleri ve kalıpları kullanın ve katkıda bulunun") başarısız olur. Ayrıca [hükümet BT'sinde toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/)nin şeklini değiştirir: platform benimsemesi büyük bir sermaye ve bakım kalemini, daha küçük, kullanıma bağlı bir işletme maliyetiyle takas eder; bu da tahmin etmesi daha kolaydır ve bir hizmet kapatılırsa finansmanı kesmesi daha kolaydır. Bileşenlerin açık yeniden kullanımının [açık veri değeri](../açık-veri-değeri/)nde bir kuzeni vardır — her ikisi de hükümetin bir kez ürettiği bir şeyi bakanlık varlığı yerine paylaşılan altyapı olarak ele alma stratejileridir.

## Tuzaklar

- **Gölge yeniden inşa**: ekipler, platformun katılım süreci kendi başlarına yapmaktan daha yavaş olduğu için sessizce kendi ödeme veya bildirim entegrasyonlarını inşa eder — bir teknoloji değil, yönetişim sürtünmesi sorunu ve tüm stratejinin dayandığı yeniden kullanım ekonomisini sessizce aşındırır.
- **Platform ekibini yarattığı değere göre yetersiz finanse etmek**: değer tüketen bakanlıklara birikirken maliyet platform ekibinde kalır; finansman merkezîleştirilip korunmadıkça kronik bir yetersiz yatırım riski yaratır — ortak malların trajedisinin bir versiyonu.
- **Platform başarısını yalnızca kullanımla ölçmek**: benimseme sayıları (katılan hizmetler, gönderilen mesajlar) bir öncü göstergedir, değerin kanıtı değil; gerçek test, yukarıdaki önlenen inşa maliyeti ve önlenen risk aritmetiğidir.
- **"Platform"u "monolit" ile eş anlamlı saymak**: GaaP bileşenleri, her biri dar, kararlı bir arayüzle tek bir şeyi iyi yaptığı için başarılı olur — ilgisiz yetenekleri tek bir "platform"da bir araya getirmek, ısmarlama inşa sorununu farklı bir ölçekte yeniden yaratır.

## Kaynaklar

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
