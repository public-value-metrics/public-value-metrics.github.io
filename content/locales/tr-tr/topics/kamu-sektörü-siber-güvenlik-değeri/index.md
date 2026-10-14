# Kamu Sektörü Siber Güvenlik Değeri

Kamu sektörü siber güvenlik değeri, risk azaltımını fiyatlama disiplinidir: güvenlik harcaması işe yaradığında görünür bir çıktı üretmiyor ve başarısız olduğunda çok görünür bir çıktı üretiyorsa, vatandaş verilerinin ihlalini daha az olası kılmak neye değer? Yardım kayıtlarını, sağlık verilerini veya vergi kayıtlarını tutan bir hizmet için, bu "çalışırken görünmezlik" özelliği tam olarak onun yalnızca bir uyum onay işareti değil, açık bir değer argümanına ihtiyaç duymasının nedenidir.

## Neden önemli

Birleşik Krallık Ulusal Siber Güvenlik Merkezi'nin Siber Değerlendirme Çerçevesi (CAF), kamu sektörü kuruluşlarına güvenliği bir kontrol listesi yerine değerlendirilebilir, sonuç temelli bir disiplin yapmak için yapılandırılmış bir yol sunar: dört üst düzey hedef (güvenlik riskini yönetmek, siber saldırıya karşı korumak, siber güvenlik olaylarını tespit etmek ve olayların etkisini en aza indirmek) tanımlar, bunlar bir sistem sahibinin karşısında değerlendirilebileceği katkıda bulunan sonuçlara bölünmüştür; [dijital hizmet standardı](../dijital-hizmet-standardı/)nın 9. maddesi ("kullanıcıların gizliliğini koruyan güvenli bir hizmet oluşturun") ile aynı ruhta. CAF değerlendirmesinin karşı koruduğu şeyin belgelenmiş bir fiyat etiketi vardır: IBM'in Cost of a Data Breach Report'u sektöre göre ortalama ihlal maliyetini izler ve kamu sektörünü finans veya sağlık hizmetlerine kıyasla tutarlı biçimde aralığın alt ucuna doğru bulmuştur — son baskılar kamu sektörü ortalamasını ihlal başına yaklaşık 2,6–2,9 milyon $ olarak belirler — ancak "finanstan düşük" "düşük" değildir ve hükümet ihlalleri raporun rakamlarının tam olarak yakalamadığı maliyetler taşır: vatandaşların dijital kanallara duyduğu güvenin kaybı, kanal değişimi iş gerekçelerinin bağlı olduğu [dijital benimsemeyi](../kanal-değişimi-tasarrufları/) düşürür ve devletin vatandaşları ilk etapta teslim etmeye zorladığı verilerin ifşasının siyasi ve yasal maliyeti.

## Matematik

Güvenlik yatırımı, herhangi bir risk azaltma harcamasının değerlendiği gibi değerlenir: klasik risk yönetimi özdeşliği kullanılarak beklenen kayıp azalması olarak.

```
Yıllıklandırılmış Kayıp Beklentisi (ALE) = Tek Kayıp Beklentisi (SLE)
                                          × Yıllıklandırılmış Gerçekleşme Oranı (ARO)

Bir güvenlik kontrolünün değeri =
  ALE_kontrol_öncesi − ALE_kontrol_sonrası − kontrolün yıllık maliyeti

Bir kontrol şu durumda finanse etmeye değerdir:
  (ALE_önce − ALE_sonra) > kontrolün yıllık maliyeti

CAF değerlendirmesi doğrudan bir olasılık çıktısı vermez, ancak bir hizmetin
CAF sonuç profili (hangi katkıda bulunan sonuçların "başarıldı", "kısmen
başarıldı" veya "başarılmadı" olduğu) ARO'yu tahmin etmek için makul bir vekil
girdidir — yönetilmeyen ayrıcalıklı erişimi veya test edilmiş olay müdahale planı
olmayan bir sistem, her ikisi de yerinde olandan maddi olarak daha yüksek bir
gerçekçi ARO'ya sahiptir.
```

## Çalışılmış örnek

**40.000 sakinin sosyal bakım kayıtlarını tutan ilçe belediyesi vaka yönetim sistemi**:

```
Tek Kayıp Beklentisi (ihlal maliyeti), yakın tarihli bir IBM Cost of a Data
Breach Report'tan bir kamu sektörü ortalaması kullanılarak ≈ 2,1 milyon £
(dönüştürülmüş, büyüklük sırası rakamı — sabit bir sayıyı yeniden kullanmak
yerine her zaman güncel rapor baskısından yeniden türetin)

Güncel ARO (yönetilmeyen ayrıcalıklı erişim, test edilmiş olay müdahalesi yok,
birden fazla "başarılmadı" sonucu gösteren dâhili bir CAF öz değerlendirmesine
göre) ≈ yılda tahmini %8
  ALE_önce = 2,1 milyon £ × 0,08 = yılda 168.000 £

Önerilen kontrol: ayrıcalıklı erişim yönetimi + test edilmiş olay müdahale planı,
ilgili CAF sonuçlarını "başarıldı"ya taşıyarak ARO'yu yılda %3'e düşürmesi tahmin
ediliyor
  ALE_sonra = 2,1 milyon £ × 0,03 = yılda 63.000 £

Kontrolün yıllık maliyeti (araçlar + süreç + test) = 45.000 £

Kontrolün değeri = (168.000 − 63.000) − 45.000 = yılda 60.000 £
  net olumlu — finanse edin. Aritmetik ayrıca kontrolün neredeyse üç katı
  maliyette bile finanse edilmeye değer olacağını gösterir; bu, tahmini
  olasılıklar üzerine kurulu herhangi bir ALE rakamına eşlik etmesi gereken
  türden bir duyarlılık kontrolüdür.
```

## Yazılım mühendisliği bağlantısı

Mühendisler ALE denklemindeki kaldıraçların çoğuna sahiptir: erişim kontrolü tasarımı, bağımlılık ve yama hijyeni, günlükleme ve tespit kapsamı ve olay müdahale araçlarının hepsi ARO terimini doğrudan hareket ettirir; CAF değerlendirmesinin bir politika denetimi kadar bir teknik mimari incelemesi gibi okunmasının nedeni budur. Bu, en akut biçimiyle [kamu değeri erozyonu olarak teknik borç](../kamu-değeri-erozyonu-olarak-teknik-borç/)dur — yamalanmamış, izlenmemiş, kötü erişim kontrollü sistemler, faiz ödemesi sabit bir sürükleme değil kuyruk riski olan borçtur — ve güvenlik harcaması sistemin gerçek işletme maliyetinden ayrıymış gibi ele alınmasın diye [hükümet BT'sinde toplam sahip olma maliyeti](../hükümet-btsinde-toplam-sahip-olma-maliyeti/) ile uzlaştırılmalıdır. Ayrıca Green Book kapsamındaki [paranın karşılığı](../paranın-karşılığı/) değerlendirmelerine doğrudan bir girdidir: riske göre ayarlanmış maliyet, herhangi bir seçenek değerlendirmesinin "maliyet" tarafının bir parçasıdır, sonuna sonradan eklenmiş bir ek düşünce değil.

## Tuzaklar

- **CAF öz değerlendirmesini güvenliğin kendisi saymak**: tamamlanmış bir değerlendirme bir güvenlik duruşunu tarif eder; yaratmaz — değer belgede değil, elde edilen sonuçlardadır.
- **Küresel ortalama ihlal maliyetlerini ayarlama yapmadan yerel bir tahmin olarak kullanmak**: IBM'in rakamları büyük, çeşitli örneklemler genelindeki ortalamalardır; küçük bir yerel yönetimin gerçekçi tek kayıp beklentisi nadiren ulusal bir hükümet bakanlığınınkiyle aynıdır.
- **Yatırım kararlarında kuyruk riski psikolojisini göz ardı etmek**: düşük bir yıllık olasılık, güvenlik harcamasını sonsuza dek ertelemeyi kolaylaştırır, tam da olmadığı yıla kadar — çalışılmış örnekteki gibi ALE hesaplamasını bir dizi ARO'ya karşı duyarlılık testine tabi tutmak buna karşı koyar.
- **Yalnızca IBM tarzı ihlal maliyetini saymak, güven maliyetini saymamak**: vatandaşların dijital kanalları kullanma istekliliğini düşüren bir ihlal, ihlal maliyeti tahminlerinde nadiren yer alan bir maliyet olarak [kanal değişimi tasarrufları](../kanal-değişimi-tasarrufları/) gerekçesini yıllarca aşındırır.

## Kaynaklar

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
