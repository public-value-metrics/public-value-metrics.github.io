# Fayda Gerçekleştirme

Fayda gerçekleştirme yönetimi (benefits realization management), bir iş gerekçesinde vaat edilen faydaların yayına geçişten sonra gerçekten ortaya çıktığını belirleme, temel çizgilendirme, izleme ve *kanıtlama* disiplinidir. Birleşik Krallık kamu yatırımında, HM Treasury'nin Green Book Beş Durumlu Modeli ve Infrastructure and Projects Authority'nin (IPA) özel fayda yönetimi rehberliği içinde yer alır; onsuz, "sistem vaka çalışanlarına başvuru başına otuz dakika kazandırdı" ifadesi sonsuza dek denetlenmemiş bir iddia olarak kalır.

## Neden önemli

İş gerekçeleri vaatlerdir; fayda gerçekleştirme denetimdir. Green Book, her harcama gerekçesinin beş testi geçmesini şart koşar — stratejik, ekonomik, ticari, mali ve yönetim — ve yönetim durumu faydaların nasıl gerçekleştirileceğini *onaydan önce* ortaya koymalıdır: sahipler adlandırılmış, temel çizgiler yakalanmış ve ölçüm tarihleri sabitlenmiş. IPA'nın *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* rehberi (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), IPA'nın Government Major Projects Portfolio üzerindeki kendi portföy raporlamasının, teslimat güveninin ve fayda gerçekleştirmenin büyük programlar genelinde yinelenen zayıflıklar olarak anıldığını defalarca bulması nedeniyle vardır. Bir proje, parayı ilk etapta harcamayı haklı çıkaran faydaları gerçekleştirmekte başarısız olurken teslimat kilometre taşlarına karşı "zamanında ve bütçe dâhilinde" kapanabilir — IPA'nın rehberliğinin disiplinin bütün amacı olarak ele aldığı bir ayrım.

## Matematik

```
Gerçekleşme oranı = gerçekleşen faydalar / öngörülen faydalar   (fayda başına, dönem başına)

Onu hesaplanabilir kılan mekanikler:
  temel çizgi yayına geçişten ÖNCE yakalanır (aksi hâlde fark ölçülemez)
  her fayda: adlandırılmış sahip, metrik, veri kaynağı, ölçüm takvimi
  tahmin değerlendirmede iyimserlik yanlılığı için ayarlanır (Green Book zorunluluğu)
  faydalar nakit serbest bırakan / kapasite serbest bırakan / nitel olarak
  sınıflandırılır, ayrı ayrı izlenir ve raporlanır
```

## Çalışılmış örnek

**Yerel yönetim**: bir dijital planlama başvuru portalı iş gerekçesi, yılda şunları vaat etti: 300.000 £ baskı ve posta genel gider azalması (nakit), 4.500 serbest kalan memur saati (kapasite) ve gelişmiş başvuru sahibi memnuniyeti (nitel). Yayına geçişten on iki ay sonra:

```
Fayda             Öngörülen  Gerçekleşen  Oran   Kanıt
Nakit tasarruf    300.000 £  210.000 £    %70    temel yıla karşı finans defteri
Memur saatleri    4.500      3.200        %71    zaman-hareket örneği
Memnuniyet        +8 puan    +11 puan     %138   başvuru sahibi anket verileri

İncelemeden eylemler (fayda gerçekleştirmenin amacı):
nakit eksikliği, hâlâ kâğıt başvuruları istisna olarak işleyen iki hizmet alanına
kadar izlendi → istisna yolunu kapatın;
sonraki iş gerekçesinin iyimserlik yanlılığı düzeltmesi, bu gerekçenin tahmin
hatasına dayanarak %10'dan %25'e yükseltildi.
```

%70'lik bir gerçekleşme oranı bir başarısızlık değildir — bir sonraki tahminin daha iyi kalibre edilmesini sağlayan bilgidir. Ölçülmemiş bir gerekçe sonsuza dek %100 iddia ederdi ve finans ekibinin buna meydan okumak için hiçbir temeli olmazdı.

## Yazılım mühendisliği bağlantısı

Mühendislik kuruluşları rutin olarak platform ve araç yatırımlarını öngörülen faydaya göre onaylar ve sonradan neredeyse hiç denetlemez — fayda gerçekleştirme yönetiminin düzeltmek için var olduğu tam patoloji. Hafif aktarım: önem eşiğinin üzerindeki her öneri bir fayda sahibini, bir temel çizgi metriğini ve sabit bir gözden geçirme tarihini (tipik olarak yayına geçişten altı ay sonra) adlandırır ve geçmiş önerilerden gerçekleşme oranları, kuruluşun bir ekibin veya satıcının bir sonraki tahminine ne kadar güvendiğini iskonto etmelidir. Bu, bu disiplinin denetlediği tahmini belirleyen [Green Book değerlendirmesi](../green-book-değerlendirmesi/)ne döngüyü kapatır ve üretken yapay zekâ pilotlarının büyük çoğunluğunun ölçülebilir hiçbir getiri göstermediğine dair yaygın bildirilen bulgunun arkasındaki aynı mantıktır — bkz. [kamu sektöründe yapay zekâ verimliliği](../kamu-sektöründe-yapay-zekâ-verimliliği/) — çünkü değer getiren pilotlar, neredeyse istisnasız, baştan adlandırılmış, izlenebilir bir fayda kalemi olanlardı. Aynı zamanda gerçekte neyin teslim edildiğini gerçekte neyin gerçekleştiğinden ayırt etmeye de bağlıdır — bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/).

## Tuzaklar

- **Yayına geçiş öncesi temel çizgi olmaması**: ölümcül, düzeltilemez ihmal — onsuz hiçbir gerçekleşme oranı asla hesaplanamaz, yalnızca iddia edilebilir.
- **Fayda yetimliği**: adlandırılmış sahibi olmayan bir faydanın veriyi toplayan kimsesi yoktur ve her portföy incelemesi onu varsayılan olarak "genel olarak yolunda" olarak raporlar.
- **Bir program portföyü genelinde çift sayılan faydalar**: iki projenin her ikisi de aynı serbest kalan vaka çalışanı kapasitesini kendi faydası olarak iddia eder — bunu yakalamak için portföy genelinde tek bir fayda siciline sahip olun.
- **Gerçekleşme tiyatrosu**: kolay nitel kazanımları öne çıkararak ölçüp raporlarken nakit ve kapasite kalemleri sessizce incelenmeden kalır.
- **Teslimatı gerçekleşmeyle karıştırmak**: kilometre taşlarını "zamanında ve bütçe dâhilinde" kapatan bir proje, öngörülen faydanın gerçekten ortaya çıkıp çıkmadığı hakkında hiçbir şey söylemez — IPA'nın rehberliği bunları iki ayrı kanıt izi olan iki ayrı soru olarak ele alır.

## Kaynaklar

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
