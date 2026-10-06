# Kamu Değeri

Kamu değeri, bir hükümetin veya sosyal sektör kuruluşunun vatandaşlar için toplu olarak yarattığı değerdir. Bu değer yalnızca ürettiği çıktılar ya da harcadığı para değildir; kuruluş var olduğu ve bu şekilde hareket ettiği için toplumun daha iyi durumda olup olmadığıdır. Mark Moore'un 1995 tarihli "stratejik üçgeni" standart ölçüttür: bir kamu girişimi ancak *meşru ve desteklenen*, *özü itibarıyla değerli* ve *operasyonel olarak yürütülebilir* olduğunda, yani bu üçü aynı anda sağlandığında haklı görülebilir.

## Neden önemli

Özel sektörde değer göreli olarak kolay fiyatlanır: gelir eksi maliyet, ve bunu vazgeçip gidebilen müşteriler hakem olarak belirler. Kamu değerinin böyle bir piyasa sinyali yoktur. Bir cezaevi hizmeti, bir vergi idaresi ve bir çocuk koruma ekibi, vatandaşların basitçe satın almaktan vazgeçemeyeceği şeyler üretir; "müşteri" (vergi mükellefi, hükümlü, çocuk) çoğu zaman bütçeyi yetkilendiren siyasi asıl kişiyle aynı kişi değildir. Moore'un *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) adlı eseri eksik disiplini sağlar: bir yönetici (1) girişiminin hangi kamu değerini yarattığını, (2) bunu sürdürmek için meşruiyetinin ve finansmanının nereden geldiğini (bir bakan, bir belediye meclisi, bir yetki, bir hibe) ve (3) kuruluşunun eldeki insanlar, teknoloji ve süreçlerle bunu gerçekten yerine getirip getiremeyeceğini söyleyebilmelidir. Üçgenin yalnızca bir ya da iki ayağında başarılı olan bir program, ne kadar iyi niyetli olursa olsun henüz haklı görülmüş değildir.

Bu, uygulamada önemlidir; çünkü kamu sektöründeki yazılım başarısızlıklarının çoğu teknoloji başarısızlığı değildir. Bir sistem teknik olarak mükemmel ve operasyonel olarak yürütülebilir olsa da, meşrulaştırıcı çevredeki hiç kimse (bakanlar, denetim komiteleri, kamuoyu) onun optimize ettiği şeyi gerçekten istemediği için başarısız olabilir. Universal Credit dijital hizmeti ve NHS Ulusal BT Programı, Birleşik Krallık kamu yönetimi literatüründe, üçgenin operasyonel ve meşruiyet ayaklarının misyon ayağıyla uyumsuz olduğu örnekler olarak gösterilir.

## Matematik

Kamu değeri bir formül değil, bir çerçevedir; ancak başka türlü belirsiz kalacak yatırım gerekçelerini test edilebilir üç soruya dönüştürür:

```
Stratejik üçgen testi — yalnızca üçü de sağlanıyorsa ilerleyin:

1. Meşruiyet ve destek: Bunu kim yetkilendirdi ve yetkilendiren çevre
   (yasama organı, bakan, belediye meclisi, yönetim kurulu, kamuoyu)
   kaynaklar tahsis edilirken hâlâ arkasında mı?

2. Kamu değeri: Bu, vatandaşlar veya toplum için tam olarak hangi somut,
   tarif edilebilir iyiliği üretiyor — güvenlik, sağlık, fırsat, güven,
   adalet — ve kimin için?

3. Operasyonel kapasite: Kuruluş bunu mevcut personel, teknoloji,
   ortaklar ve yasal yetkiyle gerçekten yerine getirebilir mi — yoksa
   bunları edinmek için inandırıcı bir plan var mı?
```

Zayıf bir girişim tipik olarak en az bir ayakta başarısız olur: teknik olarak yürütülebilir ama yetkisiz (kimsenin onaylamadığı bir veri paylaşımı pilotu); popüler ama yürütülemez (mühendislik kapasitesi olmayan, vaat edilmiş bir dijital hizmet); ya da yetkili ve yürütülebilir ama değersiz (kimsenin kullanmadığı bir gösterge paneli).

## Çalışılmış örnek

**Yerel yönetim**: bir belediyenin dijital ekibi, konut yardımı başvuruları için yapay zekâ destekli bir önceliklendirme aracı önerir.

- *Meşruiyet*: belediye kabinesi dijital öncelikli bir stratejiyi onaylamıştır, ancak sosyal güvenlikten sorumlu seçilmiş üyeler otomatik karar vermeyi özel olarak onaylamamıştır; bu bir eksikliktir, yeşil ışık değildir.
- *Kamu değeri*: daha hızlı işlem (iddia edilen fayda: 10 günden 2 güne) ancak hak sahipleri haksız yere reddedilmiyorsa gerçek bir değerdir; değer iddiası yalnızca hızı değil, doğruluğu da içermelidir.
- *Operasyonel kapasite*: belediyenin bir veri bilimcisi var ve model izleme süreci yok; dolayısıyla iddia edilen 2 günlük süre, belirtilen hata oranında şu anda yerine getirilemez.

Üç ayaktan ikisi başarısız. Moore'un çerçevesi şunu söyler: kapsam tanımlandığı gibi ilerlemeyin; önce otomatik kararlar için açık yetki alın ve izleme kapasitesi kurun, yoksa iş gerekçesinde iddia edilen "kamu değeri" kurgusaldır.

**Merkezi hükümet**: bir vergi idaresinin çevrimiçi beyan hizmeti güçlü meşruiyete (yasal yetki) ve güçlü operasyonel kapasiteye (mevcut bir ekip güvenilir biçimde teslim eder) sahiptir; ancak dijital olarak dışlananlar, kullanamayacakları bir kanala itildiği için benimsenme düşükse kamu değeri zayıftır; bkz. [dijital kapsayıcılık](../dijital-kapsayıcılık/). Üçgen, yalnızca teslimata bakan bir gösterge panelinin gizleyeceği şeyi ortaya çıkarır.

## Yazılım mühendisliği bağlantısı

Kamu değeri, bu deponun tamamının altında yer aldığı şemsiye kavramdır: [paranın karşılığı](../paranın-karşılığı/), kaynakların iyi kullanılıp kullanılmadığı için ekonomi/verimlilik/etkililik testini sunar; [kamu harcamasında fırsat maliyeti](../kamu-harcamasında-fırsat-maliyeti/) paranın başka neler yapabileceğini fiyatlar; [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/), [yer değiştirme ve atfetme](../yer-değiştirme-ve-atfetme/) ve [karşı olgusal analiz](../karşı-olgusal-analiz/) birlikte, iddia edilen değerin varsayılmak yerine gerçek olup olmadığını sınar. Mühendisler için stratejik üçgen, her kamu sektörü ürün kararı için yararlı bir ön ölüm incelemesidir:

- Bir özelliği kapsamlandırmadan önce, onu kimin yetkilendirdiğini ve bu yetkinin hâlâ geçerli olup olmadığını sorun; sonradan görevden ayrılmış bir bakan için geliştirilen bir özellik, meşruiyet ayağını sessizce kaybetmiş olabilir.
- "Yapabilir miyiz" ile "yapmalı mıyız" sorularını gerçekten ayrı sorular olarak ele alın; mühendislik kapasitesi yalnızca üçgenin üçüncü ayağını yanıtlar.
- Kamu hizmetleri için ürün gereksinim belgeleri yalnızca kullanıcı hikâyesini değil, kamu değeri iddiasını da açıkça belirtmelidir; çünkü kullanıcı değeri ile kamu değeri her zaman aynı şey değildir (bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/)).

## Tuzaklar

- **Operasyonel kapasiteyi yeterli gerekçe saymak.** "Bunu yapabiliriz" üçgenin yalnızca bir ayağını yanıtlar; güçlü teslimat yeteneğine sahip ekipler, kimsenin istemediği ve tarif edilebilir hiçbir kamu yararı yaratmayan şeyleri rutin olarak teslim eder.
- **Meşruiyeti yasallıkla karıştırmak.** Bir program yasal olabilir ve yine de zorlu bir teslimat aşamasında ayakta kalması için gereken siyasi ve toplumsal desteğe sahip olmayabilir; yasal koruma bir yetki ile aynı şey değildir.
- **Kamu değerinin, görevlendiren bakanlığın söylediği şey olduğunu varsaymak.** Moore'un modeli, değer iddiasının yalnızca finansör tarafından öne sürülmesini değil, vatandaşların gerçek çıkarlarına karşı test edilebilir olmasını gerektirir; aksi hâlde çerçeve kendi kendini onaylamaya dönüşür.

## Kaynaklar

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
