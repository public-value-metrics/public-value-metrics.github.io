# Kamu Programlarında Gecikme Maliyeti (CoD)

Gecikme Maliyeti (Cost of Delay), bir program, hizmet veya sistem değişikliği henüz teslim *edilmediği* her birim zamanda kaybedilen kamu değeridir. Bu bölümün ana köprü metriğidir: "yayına geçiş altı ay kaydı" ifadesini haftalık sterline veya haftalık WELLBY'ye dönüştürür, böylece gecikme iş gerekçesinin kendisiyle aynı para biriminde tartışılabilir.

## Neden önemli

Reinertsen'in kuralı — "yalnızca bir şeyi nicelleştirecekseniz, Gecikme Maliyetini nicelleştirin" — neredeyse değişmeden hükümete taşınır, çünkü kamu programları buna alışılmadık biçimde maruzdur: iş gerekçeleri öngörülen bir fayda akışına karşı onaylanır, ancak akış yalnızca yayına geçişte başlar ve her kayma haftası, risk kaydında kimsenin fiyatlandırmadığı bir vazgeçilmiş değer haftasıdır. Ulusal Denetim Ofisi'nin Universal Credit'in yaygınlaştırılmasına yönelik tekrarlanan incelemesi ("Rolling Out Universal Credit" raporlarına bakın, <https://www.nao.org.uk/>) örüntüyü örnekler: takvim kayması izlendi ve raporlandı, ancak reform edilmiş sistemi bir sonraki başvuru sahibi dilimine *henüz* teslim etmemenin haftalık sterlin maliyeti nadiren bir manşet rakam olarak belirtildi; oysa önceliklendirmeyi ve yükseltmeyi yönlendirmesi gereken sayı budur. CoD rakamı olmadan gecikmiş bir program teslimat kurulu için bir takvim sorunu gibi görünür; bir rakamla, hesap yetkilisi için bir değer erozyonu sorunudur.

## Matematik

```
CoD = teslim edilmedikçe vazgeçilen birim zaman başına fayda   (£/hafta veya WELLBY/hafta)

Toplam gecikme kaybı = CoD × gecikme süresi

Kamu programları için toplanacak fayda akışları:
  nakit serbest bırakan tasarruflar (sahtekârlık/hata azalması, önlenen geçici maliyetler)
+ serbest kalan nakit olmayan kapasite (vaka çalışanı/memur saatleri × tam yüklü maliyet)
+ refah faydası (WELLBY × 13.000 £/WELLBY, HMT Green Book
                  refah tamamlayıcı rehberliği, 2019 fiyatlarıyla)
```

Vatandaşa yönelik hizmetler için hem parayla hem de refahla ifade edin — altta yatan birim için bkz. [refah ayarlı yaşam yılları](../refah-ayarlı-yaşam-yılları/) ve geciken sterlinin başka neyi finanse edebileceği için [kamu harcamasında fırsat maliyeti](../kamu-harcamasında-fırsat-maliyeti/).

## Çalışılmış örnek

**Yerel yönetim**: bir konut yardımı sistemi yükseltmesi, 20.000 canlı başvuruda yıllık başvuru başına 150 £ fazla ödeme hatasını keser.

```
Yıllık fayda = 150 × 20.000 = yılda 3.000.000 £
CoD = 3.000.000 / 52 ≈ haftada 57.700 £
12 aylık bir uygulama gecikmesi, önlenebilir hatada 52 × 57.700 ≈ 3.000.000 £'ya mal olur.
```

**Merkezî hükümet kurumu**: bir engellilik yardımı değerlendirme hizmeti, planlanandan altı ay (26 hafta) sonra teslim edilirse, yılda 200.000 başvuru sahibi bir karar için ortalama üç hafta daha uzun bekler. Her ek finansal belirsizlik haftası −0,0018 WELLBY (yaşam memnuniyeti puanı) etkisi olarak modellenir:

```
Başvuru sahibi başına WELLBY kaybı = 3 × 0,0018 = 0,0054
Yıllık WELLBY kaybı = 200.000 × 0,0054 = yılda 1.080 WELLBY
CoD_refah = 1.080 / 52 ≈ haftada 20,8 WELLBY
CoD_para = 20,8 × 13.000 £ ≈ haftada 270.000 £ refah değeri
```

Bu nedenle 26 haftalık bir gecikme kabaca 540 WELLBY'ye "mal olur" — Green Book'un refah değerlemesinde yaklaşık 7 milyon £ değerinde — kaçırılan bir yayına geçiş tarihini bir proje yönetimi dipnotu değil, bir vatandaş refahı olayı olarak yeniden çerçeveler.

## Yazılım mühendisliği bağlantısı

CoD, [DORA metrikleri](../kamu-değeri-için-dora-metrikleri/)ni ve [akış metrikleri](../hükümet-teslimatında-akış-metrikleri/)ni finansal olarak okunabilir kılan şeydir: boru hattındaki teslim süresi × CoD, bir vatandaşa ulaşmadan önce kuyruklarda yakılan paradır (veya refahtır). Somut olarak:

- **Önceliklendirme**: bir birikimi paydaş kıdemine göre değil CoD ÷ süreye göre sıralayın — Green Book'un seçenekleri kimin istediğine değil değerine göre değerlendirme şartının yazılım mühendisliği analoğu.
- **Satın alma**: 12–18 aylık bir çerçeve satın alma döngüsünün bir CoD'si vardır; onu fiyatlandırmak hızlandırılmış yollar için aciliyet gerekçesini değiştirir ve değere ulaşma süresinin karar itici gücü olduğu [hükümette yap veya satın al](../hükümette-yap-veya-satın-al/) kararlarını doğrudan besler.
- **Fayda gerekçesi**: onay sırasında alıntılanan her CoD rakamı [fayda gerçekleştirme](../fayda-gerçekleştirme/)de yeniden ortaya çıkmalıdır — gecikme maliyeti gerçekse, hızlandırılmış fayda yayına geçişten sonra ölçülebilir olmalıdır.

## Tuzaklar

- **Doğrusal CoD varsaymak**: bazı kamu hizmetlerinin düzgün bir haftalık oran yerine son tarih şeklinde değeri vardır (yasal bir uyum tarihi — CoD tarihten sonra uygulama riski düzeylerine sıçrar, öncesinde sıfıra yakındır). Çarpmadan önce aciliyet profilini sınıflandırın.
- **Kimsenin ihtiyaç duymadığı çıktılarda CoD**: gecikmenin maliyeti yalnızca teslim edilmeyen şeyin değeri varsa vardır; kimsenin kullanmayacağı bir sistemin ne kadar geç olursa olsun sıfır CoD'si vardır.
- **Gecikmeyi ve iskontoyu çift saymak**: [sosyal iskonto oranı](../sosyal-iskonto-oranı/) çok yıllı değerlendirme ufuklarında zamanı zaten fiyatlar; CoD, haftalar ve aylar için ufuk içi, operasyonel versiyondur. Takvim kayması için CoD'yi, çok yıllı yeniden aşamalandırma için NBD kaymasını kullanın.

## Kaynaklar

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
