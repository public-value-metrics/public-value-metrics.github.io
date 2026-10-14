# Yararlanıcı Başına Maliyet

Yararlanıcı başına maliyet, toplam program maliyetinin bir hizmet alan benzersiz kişi sayısına bölünmesidir — koşulları gerçekten değişip değişmediğine bakılmaksızın dokunulan herkes. Bir kuruluşun üretebileceği en hızlı verimlilik sayısıdır; çünkü "kime hizmet verdik" hemen her zaman vaka yönetim sisteminde zaten bulunurken, "kime yardım edildi" genellikle bulunmaz.

## Neden önemli

Fon sağlayıcılar sürekli olarak yararlanıcı başına maliyet ister ve bunun savunulabilir nedenleri vardır: hemen mevcuttur, çok farklı programlardan oluşan bir portföy genelinde karşılaştırılabilirdir ve doğrulanması daha uzun süren ve abartılması daha kolay olan sonuç iddialarının olmadığı biçimde erişim konusunda dürüsttür. Hayır kuruluşlarının FRS 102 kapsamında nasıl raporlama yaptığını düzenleyen Birleşik Krallık Charities SORP (Önerilen Uygulama Beyanı), mütevelli kurullarının yıllık raporlarının hedeflere karşı başarıları açıklamasını şart koşar, ancak çoğu küçük hayır kuruluşunun yönetim hesapları, üretilmesi ucuz ve denetime uygun olduğu için hâlâ varsayılan olarak erişime dayalı birim maliyetlere başvurur.

Tehlike, yararlanıcı başına maliyeti, yanıtlayamayacağı soruyu yanıtlıyormuş gibi ele almaktır: paranın işe yarayıp yaramadığı. Bunu gerçekten yanıtlayan metrik için bkz. [sonuç başına maliyet](../sonuç-başına-maliyet/); altta yatan ayrım için ise [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/). Yararlanıcı başına maliyet meşru bir önceliklendirme ve erişim metriğidir — bir fon sağlayıcıya paranın ne kadar uzağa gittiğini söyler — ancak düşük bir yararlanıcı başına maliyet ya gerçek verimlilik ya da hiçbir şeyi değiştirmeyen o kadar ince bir hizmet anlamına gelebilir.

## Matematik

```
Yararlanıcı başına maliyet = Toplam program maliyeti / Hizmet verilen benzersiz kişi sayısı

Karşıt:
Sonuç başına maliyet      = Toplam program maliyeti / Tanımlanan sonuca ulaşan kişi sayısı

Yararlanıcı başına maliyet her zaman sonuç başına maliyetten ≤'dur, çünkü sonuç nüfusu
yararlanıcı nüfusunun (çoğu zaman küçük) bir alt kümesidir.
```

## Çalışılmış örnek

**Gıda bankası, sonuç başına maliyet örneğiyle aynı yıl**:

- Toplam program maliyeti: 450.000 £
- Hizmet verilen benzersiz hanehalkı (üç veya daha fazla koli): 1.800

```
Yararlanıcı başına maliyet = 450.000 £ / 1.800 = hizmet verilen hanehalkı başına 250 £
```

İki metriği yan yana karşılaştırın:

| Metrik | Payda | Sonuç |
|---|---|---|
| Yararlanıcı başına maliyet | 1.800 hizmet verilen hanehalkı | 250 £ |
| Sonuç başına maliyet | gıda güvenliğine ulaşan 630 hanehalkı | 714 £ |

Yalnızca 250 £'u gören bir fon sağlayıcı, bunun son derece verimli bir hayır kuruluşu olduğu sonucuna varabilir. Her iki sayıyı da gören bir fon sağlayıcı daha yararlı soruyu sorabilir: erişim (1.800) ile sonuç (630) arasındaki boşluk bir veri toplama boşluğu mu, bir tasarım boşluğu mu, yoksa gıda güvenliğine yalnızca gıda yardımıyla ulaşmanın ne kadar zor olduğunun dürüst bir yansıması mı?

**İş eğitimi hayır kuruluşu, açıklayıcı**: yararlanıcı başına maliyet (kayıtlı) = 2.000 £; sonuç başına maliyet (6. ayda sürdürülebilir istihdam) = 11.000 £, çünkü kayıtlıların yalnızca %18'i programı tamamlar ve sürdürülebilir iş bulur. İki sayının beş kat farklılaşması, tamamlama veya kalıcılık oranlarının düşük olduğu her yerde yaygındır — bir eğitim hayır kuruluşu ve bir gıda bankası burada yapısal olarak özdeştir.

## Yazılım mühendisliği bağlantısı

Yararlanıcı başına maliyet, kâr amacı gütmeyen yazılımdaki varsayılan metriktir; çünkü başka bir iş gerektirmeden bir yararlanıcı kaydından çıkan metriktir: bir vaka oluşturun, bir hizmet günlüğe kaydedin, satırları sayın. Aynı zamanda sonuç başına maliyeti de destekleyen bir sistem oluşturmak, kasıtlı olarak ikinci bir birinci sınıf varlık eklemek anlamına gelir — hizmet teslimatından bağımsız olarak tarihlendirilmiş ve tanımlanmış bir sonuç olayı — ve "vaka kapatıldı"nın "sonuç elde edildi"nin yerini tutmasına izin verme dürtüsüne direnmek. Bir hibe yönetimi veya CRM platformunu kapsamlandırırken, her gösterge panelinin gerçekte iki metrikten hangisini gösterdiğini sorun ve buna göre etiketleyin; ikisini tek bir "etki" kutucuğunda karıştırmak, aşağıdaki tuzakların en yaygın yazılım düzeyindeki nedenlerinden biridir. Metrikler doğru etiketlendikten sonra her ikisini de kıyaslamak için bkz. [birim maliyet veri tabanları](../birim-maliyet-veri-tabanları/).

## Tuzaklar

- **Yararlanıcı başına maliyeti etki olarak sunmak.** Değişimi değil, erişimi ölçer. Gösterge panellerini ve raporları "yardım edilen kişi başına maliyet" değil, "hizmet verilen kişi başına maliyet" olarak etiketleyin.
- **Programlar arasında çift sayım.** Aynı hayır kuruluşundan hem gıda kolisi hem de borç danışmanlığı alan bir kişi, payda benzersiz erişimi tanımlamak içinse iki değil bir yararlanıcıdır; hangi kuralın kullanıldığına karar verin ve belgeleyin.
- **Daha düşük bir sayıyı her zaman daha iyi saymak.** Bir uğrak öğle yemeği kulübü, yararlanıcı başına maliyette yoğun bir vaka yönetim hizmetini her zaman yener; çünkü birine hafifçe dokunmak daha az maliyetlidir. Bu, hangisinin sterlin başına daha kalıcı değişim ürettiği hakkında hiçbir şey söylemez.
- **Raporlar arasında paydaları sessizce değiştirmek.** Bir yıllık raporda "kayıtlı" ve bir sonrakinde "tamamlayan"a karşı alıntılanan bir yararlanıcı başına maliyet rakamı yıldan yıla karşılaştırılamaz; paydayı her seferinde belirtin.

## Kaynaklar

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
