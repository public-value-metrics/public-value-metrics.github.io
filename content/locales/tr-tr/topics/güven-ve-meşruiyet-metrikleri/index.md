# Güven ve Meşruiyet Metrikleri

Meşruiyet ve destek, Mark Moore'un *Creating Public Value* (1995) eserindeki "stratejik üçgen"in üç ayağından biridir — kamu değerinin kendisi ve operasyonel kapasiteyle birlikte — ve en sık ölçülmeden bırakılan ayaktır; çünkü bir bütçe veya çıktı sayısının aksine, meşruiyete bağlı belirgin tek bir sayı yoktur. Güven ve meşruiyet metrikleri, hükümetlerin bu boşluğu doldurmak için kullandığı vekil ölçüler ailesidir: kurumsal güven anketleri, denetim kurumu güven derecelendirmeleri, şikâyet ve itiraz verileri ve siyasi/yasama destek göstergeleri.

## Neden önemli

Moore'un argümanı, gerçek değer sunan ancak siyasi ve kamusal meşruiyeti kaybeden bir kamu yöneticisinin, teslimatı sürdürmek için gereken yetkilendirici çevreyi eninde sonunda kaybedeceğidir — finansman kesilir, yetkiler daraltılır ve sonuçları ne kadar iyi olursa olsun hizmet aç bırakılır. Meşruiyet bu nedenle bir teslimat puan kartına sonradan eklenmiş bir halkla ilişkiler düşüncesi değildir; misyonun hiç devam edip edemeyeceğine dair yük taşıyan bir girdidir; bu yüzden bir [kamu değeri puan kartı](../kamu-değeri-puan-kartı/)nda dipnot olarak değil eş düzeyde bir perspektif olarak yer alır. OECD'nin "Trust in Government" anket programı bunu nicelleştirmenin önde gelen ülkeler arası girişimidir: OECD üye devletlerinde ulusal hükümetlerine güvenlerinin olduğunu söyleyen vatandaşların payını izler ve uzun vadeli verileri güvenin şoklara karşı son derece duyarlı olduğunu gösterir — hem 2008 mali krizi hem de COVID-19 pandemisi keskin ulusal düzeyde dalgalanmalar üretti, çoğu zaman yalnızca kısmi bir toparlanma izledi; OECD'nin analizi tutarlı olarak algılanan *yetkinlik*in (hükümet söylediğini teslim ediyor mu) ve algılanan *adalet/dürüstlük*ün (hükümetin yolsuzluk veya kayırmacılık olmadan hareket ettiği görülüyor mu) güven rakamının, herhangi bir tek işlemden duyulan memnuniyetten farklı olarak, en güçlü iki itici gücü olduğunu bulmaktadır. Hükümetler giderek meşruiyeti daha ayrıntılı bir düzeyde de operasyonelleştirmeye çalışıyor — Birleşik Krallık'ın bağımsız düzenleyicileri ve müfettişlikleri (Ulusal Denetim Ofisi, Parlamento ve Sağlık Hizmeti Ombudsmanı, Ofsted ve Care Quality Commission gibi sektör düzenleyicileri) kurumsallaşmış meşruiyet kontrolleri olarak işlev görür ve "halk hâlâ bu hizmete güveniyor mu" sorusunu denetlenebilir derecelendirmelere dönüştürür.

## Matematik

Güven ve meşruiyet, kullanılabilir nicel vekilleri şunlar olan çerçeve biçiminde bir konudur:

```
Kurumsal güven endeksi (OECD tarzı)
  = bir hükümete güven sorusuna "evet" yanıtı veren anket katılımcılarının %'si,
    zaman içinde izlenir, demografik gruba göre ayrıştırılır

Meşruiyet vekil kümesi (hiçbir tek sayı yapının yerini tutmaz):
  - 1.000 hizmet kullanıcısı başına kabul edilen şikâyetler (ombudsman veya dâhili şikâyet verisi)
  - Kurumun kararlarına karşı yargısal inceleme / itiraz başarı oranı
  - Bağımsız düzenleyici/müfettişlik derecelendirmesi (örn. "olağanüstü"den "yetersiz"e bantlar)
  - Yasama/denetim komitesi güven oylamaları veya eleştirel rapor sıklığı
  - Bilgi edinme hakkı talebi hacmi ve açıklama/ret oranı, algılanan
    şeffaflık için bir vekil olarak

Meşruiyet hesaplanmaz, doğrulanır: savunulabilir bir meşruiyet değerlendirmesi,
herhangi bir tek vekile dayanmak yerine yukarıdakilerin birkaçını üçgenler.
```

## Çalışılmış örnek

**Ulusal vergi idaresi**: yıllık bir kamu değeri raporu için meşruiyet üçgenlemesi.

```
OECD tarzı güven vekili (bakanlığa özgü güven anketi):
  Katılımcıların %58'i idareye "bana adil davranma" konusunda güvendiğini söylüyor
  (iki yıl önceki %64'ten düşüş)

Şikâyet verisi:
  Kabul edilen şikâyetler: 1.000 vergi mükellefi etkileşimi başına 4,2
  (1.000 başına 3,1'den yukarıda)

Ombudsman sevkleri:
  Bağımsız Adjudicator's Office'e sevkler: yıl içinde 1.850, bunların
  %61'i idare aleyhine tamamen veya kısmen kabul edildi (önceki yılın %48'inden yukarıda)

Üçünü birlikte okumak: güven düşüyor, kabul edilen şikâyetler artıyor ve bağımsız
ombudsman bulguları giderek idare aleyhine taraf tutuyor — aynı yöne yakınsayan
üç bağımsız sinyal; bu, bunu herhangi bir serideki gürültü değil, güvenilir bir
meşruiyet bulgusu yapan şeydir.
```

Bu rakamlardan yalnızca birinin hareket etmesi zayıf kanıt olurdu; aynı dönemde birlikte hareket eden üç bağımsız ölçü, bir meşruiyet iddiasını savunulabilir kılan örüntüdür.

## Yazılım mühendisliği bağlantısı

Meşruiyet metrikleri nadiren tek bir ekibin gösterge panelinde üretilir; bu kendi başına tasarım dersidir: meşruiyet raporlamasını yalnızca dâhili bir metrik olarak tasarlamak yerine bağımsız dış kaynaklardan (ombudsman vaka sistemleri, düzenleyici derecelendirme beslemeleri, anket satıcıları) veri alıp uzlaştırabilen raporlama boru hatları oluşturun; çünkü dâhili kaynaklı meşruiyet iddiaları ("kendimizi güvenilir olarak derecelendiriyoruz") çok az kanıt ağırlığı taşır — bir [kamu değeri puan kartı](../kamu-değeri-puan-kartı/)nda meşruiyet perspektifi için not edilen aynı bağımsızlık sorunu. Şikâyet ve itiraz veri boru hatları, [sonuca göre ödeme](../sonuca-göre-ödeme-ve-sosyal-etki-tahvilleri/) sözleşmelerini besleyen herhangi bir sonuç boru hattıyla aynı veri kalitesi titizliğini hak eder; çünkü eksik raporlanmış veya kötü kategorize edilmiş bir şikâyet veri kümesi, bir yıl sonra bir güven anketinde görünür hâle gelmeden önce bir meşruiyet sorununu sessizce olduğundan düşük gösterir. Bu kurum düzeyindeki ölçünün işlem düzeyindeki karşılığı için bkz. [vatandaş memnuniyeti metrikleri](../vatandaş-memnuniyeti-metrikleri/); bu ayağın ait olduğu Moore'un stratejik üçgen çerçevesinin tamamı için ise [kamu değeri](../kamu-değeri/).

## Tuzaklar

- **Memnuniyeti meşruiyetin vekili saymak**: bir vatandaş, genel olarak kuruma güvenmezken tek bir işlemin arayüzünden memnun olabilir (veya tersi) — ikisinin neden ayrı raporlanması gerektiği için bkz. [vatandaş memnuniyeti metrikleri](../vatandaş-memnuniyeti-metrikleri/).
- **Tek bir öz bildirimli metriğe güvenmek**: bağımsız bir doğrulaması (ombudsman verisi, düzenleyici derecelendirmeler) olmayan, dâhili olarak yürütülen bir güven anketi, kendi kendine not verme olarak kolayca reddedilir; üçgenleyin.
- **Demografik ayrıştırmayı göz ardı etmek**: toplam ulusal güven rakamları, belirli gruplar arasında (yaş, etnik köken, gelir veya bölgeye göre) keskin biçimde ayrışan meşruiyeti maskeleyebilir — OECD'nin kendi Trust in Government yayınları tam da bu nedenle ayrıştırır.
- **Tek bir şok kaynaklı düşüşü kalıcı bir eğilim olarak okumak**: güven rakamları krizler (mali çöküşler, pandemiler, yüksek profilli skandallar) etrafında keskin biçimde hareket eder ve kısmen toparlanır; şok sonrası tek bir veri noktası, daha fazla veri olmadan uzun vadeli bir düşüşe ekstrapole edilmemelidir.

## Kaynaklar

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
