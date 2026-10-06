# Vatandaş Memnuniyeti Metrikleri

Vatandaş memnuniyeti metrikleri, insanların bir kamu hizmetini doğrudan deneyimlerini nasıl değerlendirdiğini ölçer — genel olarak kurumlara duyulan güvenden farklıdır ve hizmetin gerçekten iyi bir sonuç elde edip etmediğinden de farklıdır. Bir hizmet sevilen ama etkisiz, ya da etkili ama sevilmeyen olabilir; ikisi arasındaki boşluk, bir teslimat ekibinin izlemesi gereken tanısal bir bilgidir.

## Neden önemli

Memnuniyet, rutin olarak karıştırılan iki farklı yükseklikte ölçülür. Hizmet düzeyinde, Birleşik Krallık'ın artık kapatılmış Performance Platform'u ve bugünkü GOV.UK servis kılavuzu, dört zorunlu hizmet KPI'ından biri olarak hizmet başına bir memnuniyet anketi (tipik olarak "çok memnun"dan "çok memnun değil"e beş puanlık bir ölçek, işlem noktasında uygulanır) şart koşar — bkz. [hizmet standartları ve işlem metrikleri](../hizmet-standartları-ve-işlem-metrikleri/). Kurumsal düzeyde, Birleşik Krallık Sivil Hizmet İnsan Anketi her merkezî hükümet bakanlığında çalışan bağlılığını ve deneyimini yıllık olarak ölçer ve ayrıca OECD'nin "Trust in Government" programı üye devletlerde ulusal hükümete duyulan kamusal güveni ölçer, krizler tarafından ağır biçimde şekillenen uzun vadeli bir düşüş ve toparlanma örüntüsünü izler (2008 mali krizi ve COVID-19 pandemisi OECD güven rakamlarında keskin, görünür hareketler üretti). Vatandaşa yönelik hizmetler geliştiren mühendislerin memnuniyet ve sonucu ayrı tutması gerekmesinin nedeni, hizmet tasarımında bilinen bir başarısızlık biçimidir: bir yardım başvurusu için güzel tasarlanmış, kullanımı kolay bir dijital form, altta yatan politika — uygunluk kuralları, işlem birikmeleri, ödül miktarları — başvurana daha iyi bir durum sağlamazken çok yüksek memnuniyet puanı alabilir. Memnuniyet arayüzü ölçer; arkasında teslim edilen değeri ölçmez.

## Matematik

```
Net memnuniyet = % memnun (veya çok memnun) − % memnun değil (veya hiç memnun değil)
                  (nötr/fikri yok yanıtları her iki terimden hariç tutulur, ancak her bir
                  yüzdeyi hesaplamak için yanıt tabanında sayılır)

Memnuniyet-sonuç boşluğu = memnuniyet puanı − sonuç başarı puanı
                  (ikisi de 0–100 normalize edilmiş; büyük bir pozitif boşluk,
                  "iyi hissettiren" ama özde yetersiz teslim eden bir hizmeti gösterir)

Güven endeksi (OECD tarzı) = "[ulusal hükümete] güveniniz var mı?" sorusuna
                  "evet" yanıtı veren anket katılımcılarının %'si
                  bir zaman serisi olarak izlenir, tipik olarak yaş, gelir ve
                  eğitime göre ayrıştırılır
```

## Çalışılmış örnek

**Yerel yönetim belediye vergisi e-fatura hizmeti**: başarılı işlem noktasında yapılan bir memnuniyet anketi, 2.400 katılımcı gösterir: 1.650 memnun/çok memnun, 250 memnun değil/hiç memnun değil, 500 nötr.

```
Net memnuniyet = (1.650/2.400 × 100) − (250/2.400 × 100)
               = %68,75 − %10,42
               = +58,3 net memnuniyet
```

Bu, tek başına güçlü görünür. Ancak anket yalnızca işlemi *başarıyla* tamamlayan kullanıcılara gösterilir — bilinen bir ölçüm yanlılığı (aşağıdaki tuzaklara bakın). Bunu [hizmet standartları ve işlem metrikleri](../hizmet-standartları-ve-işlem-metrikleri/)ndeki tamamlama oranı metriğiyle eşleştirmek, tamamlamanın yalnızca %71 olduğunu gösterir; bu şu anlama gelir:

```
Yolculuğu bırakan %29 için gerçek nüfus memnuniyeti ölçülmemiştir —
muhtemelen en memnun olmayan kohort, çünkü terk etmenin kendisi
anketin hiç yakalamadığı güçlü bir olumsuz sinyaldir.
```

**Ulusal düzey örneği (OECD tarzı bir güven serisinin yapısı)**: ulusal hükümet güveni 1. yılda %42 olarak bildirilir, 2. yılda (bir kriz yılı) %34'e düşer ve 3. yılda %39'a toparlanır — OECD'nin büyük krizlerin ardından üye devletler genelinde belgelediği şok ve kısmi toparlanma örüntüsünün tipik bir yörüngesi.

## Yazılım mühendisliği bağlantısı

Memnuniyet anketlerini yalnızca başarılı tamamlamada değil, bir kullanıcı yolculuğunun her anlamlı çıkış noktasında araçlandırın — bu alandaki en yaygın mühendislik hatası ve bir memnuniyet metriğini sessizce hayatta kalma yanlılığına sahip bir gösteriş metriğine dönüştüren hata. Mümkün olduğunda, memnuniyet puanını aynı gösterge panelinde bir tamamlama veya sonuç metriğiyle eşleştirin, böylece bir ekip tamamlama sessizce düşerken artan memnuniyeti kutlayamaz (dijital memnuniyet örneklemesinden ilk etapta kimlerin dışlandığı için bkz. [işlem başına maliyet](../işlem-başına-maliyet/) ve [dijital kapsayıcılık](../dijital-kapsayıcılık/) — dijital olmayan ve destekli dijital kullanıcılar hizmet içi anketlerde sistematik olarak yetersiz temsil edilir). Memnuniyet ve güven verileri ayrıca [Moore'un stratejik üçgeni](../kamu-değeri/)nin meşruiyet ayağını doğrudan besler ve bir [kamu değeri puan kartı](../kamu-değeri-puan-kartı/)nın "müşteri" ve "meşruiyet" perspektiflerine aittir — bu hizmet düzeyindeki metriğin kurumsal düzeydeki karşılığı için bkz. [güven ve meşruiyet metrikleri](../güven-ve-meşruiyet-metrikleri/).

## Tuzaklar

- **Tamamlama noktası anketlerinde hayatta kalma yanlılığı**: bir yolculuğu terk eden kullanıcılar anketi hiç görmez, dolayısıyla yüksek bir hizmet içi memnuniyet puanı düşük bir tamamlama oranıyla ve memnun olmayan, tamamlamayanlardan oluşan büyük bir görünmez nüfusla bir arada bulunabilir.
- **Memnuniyeti sonucun vekili saymak**: kötü tasarlanmış bir politika için iyi tasarlanmış bir arayüz, memnuniyette iyi ve sonuçta kötü puan alır — her zaman ikisini de raporlayın, birini diğerinin yerine koymayın.
- **Yanlış kesinlikle raporlanan küçük, temsili olmayan örneklemler**: birkaç yüz kendi kendini seçen katılımcıdan gelen ve ondalık basamağa kadar raporlanan bir memnuniyet puanı, örneklem büyüklüğünün destekleyemeyeceği bir güveni ima eder.
- **Demografik ayrıştırmayı göz ardı etmek**: yaş, gelir, engellilik veya dijital erişime göre ayrıştırılmamış ulusal güven ve memnuniyet rakamları, gruplar arasında keskin biçimde ayrışan deneyimleri maskeleyebilir — OECD'nin kendi Trust in Government yayınlarının açıkça ayrıştırdığı bir örüntü.

## Kaynaklar

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
