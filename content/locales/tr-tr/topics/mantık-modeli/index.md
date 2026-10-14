# Mantık Modeli

Mantık modeli (logic model), bir programın girdilerini, faaliyetlerini, çıktılarını, sonuçlarını ve etkisini birbirine bağlayan, soldan sağa bir hesap verebilirlik zinciri olarak okunan doğrusal bir diyagramdır: kaynaklar girer, faaliyetler gerçekleşir, çıktılar üretilir, yararlanıcılar için sonuçlar değişir ve etki daha geniş veya daha uzun bir zaman ölçeğinde birikir. Fon sağlayıcıların ve denetçilerin bir programın karşısında raporlanabilir olmasını beklediği standart yapıdır ve geriye doğru haritalanmış [değişim kuramı](../değişim-kuramı/)nın ileriye dönük karşılığıdır.

## Neden önemli

HM Treasury'nin Magenta Book'u mantık modelini program değerlendirme tasarımının gerekli bir unsuru olarak belirler ve National Lottery Community Fund gibi fon sağlayıcılar başvuru ve raporlama şablonlarını tam olarak bu beş sütunlu zincir etrafında kurar. Değeri, bir programı tek bir diyagramda neyi harcayacağını, onunla ne yapacağını, ne üreteceğini ve — kritik olarak — sonuç olarak neyin değişmesi gerektiğini, bir paragraf düzyazının gizleme eğiliminde olduğu bir ayrıntı düzeyinde belirtmeye zorlamasıdır. Girdi ve faaliyet sütunları dolu ama sonuç sütunu boş veya belirsiz olan bir mantık modeli bir bakışta teşhis edilebilir; fon sağlayıcıların bir tane istemesinin nedeni tam olarak budur.

## Matematik

Mantık modeli bir formül değil, yapısal bir zincirdir:

```
Girdiler        Faaliyetler       Çıktılar             Sonuçlar              Etki
(taahhüt edilen (bunlarla ne      (doğrudan, sayılabilir (yararlanıcılar        (uzun vadeli,
 kaynaklar)      yapıldığı)        ürünler)              için değişim)          nüfus düzeyinde
                                                                                 veya sistemik
                                                                                 değişim)
```

Her sütun bir öncekinden daha belirli olmalıdır: girdiler harcadığınız şeydir, faaliyetler yaptığınız şeydir, çıktılar etkiden bağımsız olarak teslim edilen şeydir, sonuçlar bunun sonucunda değişen şeydir — [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/) bölümünde tam olarak ele alınan ayrım — ve etki, kalıcı, çoğu zaman yalnızca kısmen atfedilebilir, uzun vadeli değişimdir.

## Çalışılmış örnek

**Yerel yönetim (dijital borç danışmanlık hizmeti)**:

- Girdiler: 180.000 £ yıllık bütçe, 4,0 tam zamanlı eşdeğer danışman, bir vaka yönetim sistemi.
- Faaliyetler: tanıtım oturumları, birebir borç danışmanlığı randevuları.
- Çıktılar: 900 randevu teslim edildi; 750 borç ve yardım planı düzenlendi.
- Sonuçlar: 6 aylık takibe ulaşan müşterilerden %60'ı (750 içinden 450) azalan borçlar bildiriyor, müşteri başına ortalama 1.200 £ azalma — toplamda 540.000 £ borç azalması.
- Etki: hizmetin müşteri tabanından gelen evsizlik başvurularında iki yıl boyunca ölçülebilir bir düşüş; diğer müdahalelerin yanında bu hizmete yalnızca kısmen atfedilebilir (bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/)).

**Hayır kuruluşu (gıda bankası sevk ortaklığı)**:

- Girdiler: 45.000 £, 1,5 tam zamanlı eşdeğer koordinatör, 12 sevk kuruluşuyla ortaklık anlaşmaları.
- Faaliyetler: sevk önceliklendirmesi, koli paketleme ve dağıtım.
- Çıktılar: 1.100 hanehalkına dağıtılan 5.000 gıda kolisi.
- Sonuçlar: ankete katılan hanehalklarının %68'i (1.100 içinden 748) 4 haftalık takip aramasında iyileşen gıda güvenliği bildiriyor.
- Etki: azalan yerel kriz hizmeti talebine katkı; yalnızca toplu alan istatistiklerinde kanıtlanmış, yalnızca bu hayır kuruluşuna atfedilemez.

## Yazılım mühendisliği bağlantısı

Mantık modeli, bir sonuç sistemi için neredeyse kelimenin tam anlamıyla bir veri modelidir: girdiler ve faaliyetler zaten elinizde olan operasyonel verilerdir (harcama, personel, oturum günlükleri); çıktıları araçlandırmak kolaydır çünkü teslimat noktasında sayılırlar; sonuçlar, birisi onu kurmadıkça var olmayacak kasıtlı olarak tasarlanmış takip veri toplamasını (anketler, idari veri bağlantısı) gerektirir; etki ise genellikle herhangi bir programın sistemlerinin ötesinde bağlantılı, boylamsal veya nüfus düzeyinde veri gerektirir. Raporlama araçları geliştiren mühendisler, işlemsel veri zaten bunu desteklediği için yalnızca çıktılardan oluşan bir gösterge paneline varsayılan olarak başvurmak yerine, komisyoncuları tasarım aşamasında sonuç ve etki göstergelerini tanımlamaya yönlendirmelidir. Sonuç ve etki sütunlarını özellikle değerleyen bir yöntem için bkz. [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/); etki sütununun gerçekten teslim edilip edilmediğini izlemek için [fayda gerçekleştirme](../fayda-gerçekleştirme/).

## Tuzaklar

- **Çıktılarda durmak.** Teslim edilen randevuları veya dağıtılan kolileri bildiren ve fayda ima eden bir gösterge paneli, sonuçları değil faaliyeti raporlar — bkz. [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/).
- **Sütunlar arasında belirtilmiş nedensel bağ olmaması.** Bir mantık modeli zinciri belirtir ancak faaliyetlerin neden çıktılar, çıktıların neden sonuçlar üretmesi gerektiğini belirtmez; bu mantık bir [değişim kuramı](../değişim-kuramı/)na aittir ve arkasında bir tane olmayan mantık modeli test edilmemiştir.
- **Onu tek seferlik bir teklif belgesi olarak ele almak.** Yalnızca bir finansman başvurusunu karşılamak için üretilen ve asla güncellenmeyen mantık modelleri, programın gerçekte ne yaptığını yansıtmayı bırakır.
- **Etki sütununda atfetme kayması.** Nüfus düzeyindeki değişimi, karşı olgusal olmadan yalnızca tek bir programın neden olduğu şeklinde iddia etmek, kanıtın desteklediğini olduğundan büyük gösterir.

## Kaynaklar

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
