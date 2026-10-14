# Etki Değerlendirmesi ve Süreç Değerlendirmesi

Etki değerlendirmesi, bir programın amaçlanan sonuçlara neden olup olmadığını sorar. Süreç değerlendirmesi, programın gerçekten tasarlandığı gibi teslim edilip edilmediğini sorar — kime, hangi dozda ve yol boyunca hangi engeller veya kolaylaştırıcılarla. Bunlar, farklı yöntemler gerektiren farklı sorulardır ve HM Treasury'nin Magenta Book'u ikisini birlikte görevlendirmeyi standart uygulama olarak ele alır; çünkü zayıf veya boş bir etki sonucu tek başına yorumlanamaz: programın altında yatan kuramın yanlış mı olduğunu, yoksa iyi bir kuramın hiç gerektiği gibi teslim edilmediğini söyleyemez.

## Neden önemli

Hükümet değerlendirmeleri, bir programdan ölçülebilir bir etki bulamamış ve nedenini açıklayacak bir süreç değerlendirmesi olmamıştır — bu da komisyoncuları "bu fikir işe yaramıyor" (kuram başarısızlığı) ile "bu fikir hiç gerektiği gibi denenmedi" (uygulama başarısızlığı) arasında ayrım yapamaz bırakır. Tıbbi Araştırma Konseyi'nin 2015'te BMJ'de yayımlanan ve Magenta Book ile birlikte yaygın olarak anılan karmaşık müdahalelerin süreç değerlendirmesi rehberliği, bir süreç değerlendirmesinin ölçmesi gereken temel şeyler olarak bağlılığı (fidelity), dozu ve erişimi resmîleştirdi. Süreç değerlendirmesi olmadan bir etki değerlendirmesi görevlendirmek, gerçekten sağlam bir program tasarımını, hedeflenen nüfusun yarısına, amaçlanan yoğunluğun bir kısmıyla teslim edildiği için terk etme riski taşır — bir sistem geliştiricisinin önleyebileceği bir hata, çünkü teslimat bağlılığı tam olarak operasyonel veri sistemlerinin neredeyse gerçek zamanlı olarak yakalayabileceği şeydir.

## Matematik

```
Süreç değerlendirmesi sorar:
 - Hedef nüfusa, planlanan doz/yoğunlukta mı teslim edildi?
 - Teslimat mantık modeli / değişim kuramı tasarımıyla örtüştü mü?
 - Teslimatı hangi engeller veya kolaylaştırıcılar etkiledi?
 Yöntemler: önceden belirlenmiş eşiklere karşı bağlılık kontrolleri, vaka çalışmaları,
            görüşmeler, idari teslimat verileri.

Etki değerlendirmesi sorar:
 - Ne değişti ve bu değişimin ne kadarı programa atfedilebilir?
 Yöntemler: RCT, DiD, PSM, RDD — bkz. impact-evaluation-methods — bir karşı olgusala karşı.

Birleşik tanı:
 Etki yok    + yüksek bağlılık  → kuram başarısızlığı: modelin kendisi sonucu üretmedi
 Etki yok    + düşük bağlılık   → uygulama başarısızlığı: model hiç düzgün test edilmedi
 Etki bulundu + yüksek bağlılık → güvenle çoğaltın
 Etki bulundu + düşük bağlılık  → daha fazla araştırın: etki kırılgan veya sahaya özgü olabilir
```

## Çalışılmış örnek

**Yerel yönetim (ebeveynlik programı)**: farkların farkı kullanan bir etki değerlendirmesi, bir çocuk refahı ölçüsünde +2 yüzde puanlık bir değişim bulur — istatistiksel olarak anlamlı değil. Yanında yürütülen süreç değerlendirmesi, programın hedeflenen 500 aileden yalnızca 210'una ulaştığını (%42 erişim) ve bunlardan yalnızca 95'inin önceden belirlenmiş %75+ oturum katılımı bağlılık eşiğini tamamladığını — orijinal planlanan erişimin %19'u — bulur. Sonuç: zayıf etki sonucu bir uygulama başarısızlığıyla tutarlıdır, program modelinin işe yaramadığının kanıtı değildir; uygun yanıt, program tasarımını terk etmek değil, %58'lik düşüşe neden olan sevk yolunu düzeltmektir.

**Hayır kuruluşu (dijital okuryazarlık programı)**: bir etki değerlendirmesi güçlü bir etki bulur (dijital güven puanında +18 yüzde puan) ve paralel bir süreç değerlendirmesi, 12 teslimat sahasının tamamında planlanan müfredata %92 bağlılığı doğrular. Birleşik olarak, fon sağlayıcı programı güvenle ölçekleyebilir; çünkü etkinin tek bir olağanüstü iyi sahanın ürünü olmak yerine tutarlı biçimde geçerli olduğu gösterilmiştir.

## Yazılım mühendisliği bağlantısı

Süreç değerlendirme verileri, teslimat sistemlerinin yakalamak için iyi konumlandığı şeydir tam olarak: plana karşı katılım, oturum dozajı ve bir sevk veya kayıt hunisinin her aşamasındaki düşüş — mühendislerin ürün özellikleri için zaten oluşturduğu aynı huni analitiği, bunun yerine bir sosyal programın teslimat boru hattına uygulanır. Bağlılık ve erişim metriklerini program yöneticilerine bir hibe sonu değerlendirmesini beklemek yerine neredeyse gerçek zamanlı olarak beslemek, kırık bir sevk yolunun finansman dönemi sona erdikten sonra keşfedilmek yerine program ortasında düzeltilmesini sağlar. Süreç değerlendirmesinin eşleştirildiği nedensel tasarımlar için bkz. [etki değerlendirme yöntemleri](../etki-değerlendirme-yöntemleri/); süreç değerlendirmesinin bağlılığı karşı kontrol ettiği tasarım için [değişim kuramı](../değişim-kuramı/) ve [mantık modeli](../mantık-modeli/); teslimatı vaat edilen sonuçlara kadar izlemek için ise [fayda gerçekleştirme](../fayda-gerçekleştirme/).

## Tuzaklar

- **Yalnızca etki değerlendirmesi görevlendirmek.** O zaman boş veya zayıf bir sonuç kuram başarısızlığı veya uygulama başarısızlığı olarak yorumlanamaz; bu, bundan sonra ne yapılacağına karar vermek için önemli olan ayrımdır.
- **Süreç değerlendirmesini yumuşak bir ek olarak ele almak.** Etki tasarımıyla aynı titizliğe ve önceden belirlenmiş bağlılık kriterlerine ihtiyaç duyar, yoksa sonuçlar geldiğinde anekdota çöker.
- **"Zamanında ve bütçe dâhilinde"yi "tasarlandığı gibi teslim edildi" ile karıştırmak.** Süreç değerlendirmesi, proje yönetimi RAG durumunu değil, modele bağlılığı — doz, hedef grup, içerik — kontrol eder.
- **Bağlılık eşiklerini önceden kaydetmemek.** Neyin "yeterli doz" sayılacağına sonradan karar vermek, hayal kırıklığı yaratan bir etki sonucunun herhangi bir açıklamasını sonradan bahane üretme gibi gösterir.

## Kaynaklar

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
