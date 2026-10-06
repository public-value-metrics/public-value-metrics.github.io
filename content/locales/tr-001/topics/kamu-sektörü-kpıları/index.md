# Kamu Sektörü KPI'ları

Anahtar performans göstergesi (KPI), bir kamu hizmetinin işini iyi yapıp yapmadığının yerine geçen, seçilmiş ve izlenen bir ölçüdür. Hükümette KPI seçimi asla tarafsız değildir: KPI'lar bütçelere, sıralama tablolarına ve kariyerlere bağlandığı için, birini seçme eylemi, ondan sonra gelen herkesin davranışını, çoğu zaman hizmeti yaratan politikadan daha fazla şekillendirir.

## Neden önemli

Charles Goodhart'ın 1975'te para politikası üzerine yaptığı gözlem — sonradan Marilyn Strathern tarafından "bir ölçü hedef hâline geldiğinde, iyi bir ölçü olmaktan çıkar" olarak popülerleştirilen — kamu sektörü performans yönetimindeki en önemli tek uyarı etiketidir. Bir sistemi *betimlemek* için seçilen bir KPI, kaynak tahsisi, maaş veya siyasi hayatta kalma ona bağlandığı anda o sistemi *çarpıtmaya* başlar. Klasik örnek, NHS ambulans müdahale sürelerinde görülür: sekiz dakikalık Kategori A müdahale hedefi bağlayıcı hâle geldiğinde, bazı vakıfların hasta sonuçlarını değiştirmeden rakamı tutturmak için ambulansları müdahale süresi saatinin hemen dışında "yığdıkları" veya çağrıları yeniden sınıflandırdıkları gösterildi. Birleşik Krallık Ulusal Denetim Ofisi'nin performans göstergelerini seçme ve kullanma rehberliği — paranın karşılığı raporları ve "Performance Measurement by Regulators" ile "Choosing the Right FABRIC" çerçevesi (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) boyunca belirtilmiştir — tam olarak bakanlıkların manipüle edilmesi zor göstergeler yerine raporlaması kolay göstergeler seçmeye devam etmesi nedeniyle vardır. Bir bakanın veya müdürün karşısında yargılanacağı gösterge panelini hayata geçiren bir yazılım mühendisi, ister istemez, bir kamu kurumunun teşvik yapısını tasarlıyordur.

## Matematik

KPI tasarımı çerçeve biçiminde bir konudur, ancak bir aday KPI'nın *değerlendirmesi* bir formül değil, tekrarlanabilir bir kontrol listesidir:

```
Her aday KPI için şunlara karşı puanlayın:
  Amaca uygun   — sonucu mu ölçüyor, yoksa birkaç adım uzaktaki bir vekili mi?
  Uygun         — onu gerçekten etkileyebilen insanlara mı ait?
  Dengeli       — manipülasyonu yakalayan bir karşı metrikle eşleştirilmiş mi?
  Sağlam        — denetimden sağ çıkabilir mi, yoksa öz bildirimli ve doğrulanamaz mı?
  Bütünleşik    — daha geniş kümeye uyuyor mu, yoksa başka bir KPI'ya mı karşı çıkıyor?
  Maliyet-etkin — toplanması, beslediği karardan daha mı pahalıya mal oluyor?

Öncü ve gecikmeli ayrımı:
  Öncü gösterge     → gelecekteki sonucu öngörür, ancak çoğu zaman manipüle edilebilir (örn.
                      60 sn'den kısa sürede yanıtlanan çağrılar)
  Gecikmeli gösterge → sonucun gerçekleştiğini doğrular, ancak yönlendirmek için çok geç gelir
                      (örn. yıllık memnuniyet anketi)
  Savunulabilir bir KPI kümesi, her hedef için her birinden en az birini eşleştirir.
```

## Çalışılmış örnek

**Ambulans vakfı**: bir vakıf, "çağrıların %75'ine 8 dakika içinde yanıt verildi" biçiminde bir Kategori A (hayati tehlike) müdahale süresi KPI'ı bildirir. Bir çeyrekte 6.000 Kategori A çağrısı gelir; 4.500'ü 8 dakika içinde karşılanır, bu da %75,0 verir — görünürde hedefte.

```
Manşet KPI = 4.500 / 6.000 × 100 = %75,0  (%75 eşiğini karşılıyor)
```

Ancak bir Goodhart denetimi bir karşı metrik ekler: en yavaş %10'luk çağrıların ortalama müdahale süresi.

```
En yavaş onda birlik dilimin ortalama müdahalesi = 34 dakika (iki yıl önceki 19 dakikadan yukarıda)
```

Vakıf hedefi tutturuyor, ancak kuyruk — önceliklendirme kusurlu olduğunda gerçekten hayati tehlike taşıma olasılığı en yüksek çağrılar — çok daha kötüleşti; çünkü ekipler klinik aciliyete değil, 8 dakikalık uçurum kenarına yakın çağrılara yönlendiriliyor. Tek KPI yanlış bir hikâye anlattı; eşleştirilmiş KPI gerçeği anlattı.

## Yazılım mühendisliği bağlantısı

Hükümet için performans gösterge panelleri geliştiren mühendisler, işlevsel olarak kuruluşun teşvik API'sini tasarlar. Pratik çıkarımlar: *paydayı* payı kadar titizlikle araçlandırın (çıplak bir yüzde olarak raporlanan bir KPI, payda manipülasyonunu davet eder — dijital hizmetlerde aynı tuzak için bkz. [işlem başına maliyet](../işlem-başına-maliyet/)); karşı metrikleri kimsenin okumadığı ayrı bir rapora değil, aynı gösterge paneline yerleştirin, böylece manipülasyon karar noktasında görünür olur; ve KPI tanımını sürümleyin, çünkü sessiz bir yeniden tanımlama ("çağrı", "vaka" veya "tamamlama" sayılanı değiştirmek) hedefi duyurmadan değiştirmeye işlevsel olarak eşdeğerdir. Bir [kamu değeri puan kartı](../kamu-değeri-puan-kartı/), tek bir KPI'nın tek başına okunmasını durdurmanın yapılandırılmış bir yoludur ve [sonuç temelli hesap verebilirlik](../sonuç-temelli-hesap-verebilirlik/), tek bir ekibin tek taraflı olarak çarpıtamayacağı nüfus düzeyindeki KPI'ları seçme disiplinidir.

## Tuzaklar

- **Anlamlı olan yerine toplanması kolay metriği seçmek**: çağrı yanıt süresini günlüğe kaydetmek önemsizdir; çağrının vatandaşın sorununu çözüp çözmediği ise öyle değil — ancak sonuç yalnızca ikincisidir. Sistemin zaten ürettiği şeye varsayılan olarak başvurmaya direnin.
- **Karşı metrik olmaması**: paraya veya itibara bağlı herhangi bir KPI, marjinde manipüle edilecektir; yayımlamadan önce olası manipülasyon vektörünü yakalayan eşleştirilmiş bir metrikle birlikte teslim edin.
- **Metriği değişiklik günlüğü olmadan yeniden tanımlamak**: bir eğilimi lehte göstermek için "alınan çağrıları" "yanıtlanan çağrılar" ile değiştirmek, keşfedildiği anda zaman serisinin güvenilirliğini yok eder — rakamların yanında her zaman bir tanımlar değişiklik günlüğü yayımlayın.
- **Faaliyeti sonuçla karıştırmak**: tamamlanan denetimleri saymak bir çıktıdır; uyumlu hâle getirilen binaları saymak sonuca daha yakındır (bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/)).

## Kaynaklar

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
