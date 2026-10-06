# Etkili Özgecilik Maliyet-Etkililiği

Etkili özgecilik (effective altruism, EA) maliyet-etkililik akıl yürütmesi, hayırsever müdahaleleri ürettikleri iyilik miktarına göre sıralar — çoğu zaman harcanan dolar başına kurtarılan hayatlar veya kazanılan sağlık olarak ifade edilir — ve parayı marjinde en çok iyiliği satın alan müdahaleye yönlendirir. GiveWell, alanın en etkili uygulayıcısıdır: küçük bir "en iyi hayır kuruluşları" listesi için açık, güncellenmiş kurtarılan hayat başına maliyet ve sonuç başına maliyet tahminleri yayımlar ve bağışçılara şu anda en iyi oranda daha fazla finansmana yer olan kuruluşa bağış yapmalarını önerir.

## Neden önemli

GiveWell, yayımlanmış metodolojisinde maliyet-etkililiği önde gelen kriter olarak belirtir: kanıta dayalı müdahaleler arar, maliyet-etkinliklerini ortak bir birimde tahmin eder ve tamamen ilgisiz nedenler arasında — sıtmaya karşı cibinlikler, A vitamini takviyesi, nakit transferleri, aşı teşvik ödemeleri — bu tek eksen üzerinde sıralama yapar. Bu, sağlık ekonomisinden QALY/DALY tarzı akıl yürütmenin hayırseverliğe doğrudan ithalidir: tıpkı bir sağlık sisteminin "marjinde sterlin başına kaç QALY" diye sorması gibi, GiveWell "marjinde dolar başına kaç hayat veya yaşam yılı" diye sorar ve nedenleri bu ortak birime dönüştürüldüklerinde ikame edilebilir olarak ele alır. Bu akıl yürütme çerçevesinin kamu sektörü kuzeni için bkz. [hükümette maliyet-etkililik analizi](../hükümette-maliyet-etkililik-analizi/).

En çok alıntılanan GiveWell rakamı, böcek ilacıyla işlenmiş cibinlikler dağıtan Against Malaria Foundation (AMF) ile ilgilidir. GiveWell'in yayımlanmış çalışılmış örneğinde (2020 finansman verilerinden alınmış), kusurlu cibinlik kullanımı, cibinliksiz temel ölüm oranı ve funging için düzeltme — AMF'nin bu finansmanın bir kısmını başka bağışçılardan zaten alabilecek olması ihtimali — hesaba katıldıktan sonra, kabaca 4.500 $ bir ölümü önlemeye yetecek kadar cibinliği finanse etti. GiveWell, bu rakamın sıtma yaygınlığı, cibinlik maliyetleri ve finansman boşlukları değiştikçe zaman içinde ve coğrafyalar arasında hareket ettiği ve bir hayatı kurtarmanın maliyetinin, en ucuz fırsatlar önce alındığı için genellikle zamanla artması beklendiği konusunda açıktır; bu, sabit bir fiyat değil, yöntemin çalışılmış bir örneğidir.

## Matematik

```
Maliyet-etkililik = Müdahale maliyeti / Üretilen iyilik birimi
                   (örn. kurtarılan hayat başına $, önlenen DALY başına $, QALY başına $)

GiveWell'in bir cibinlik programı için zinciri, açıklayıcı olarak:
  satın alınan ve teslim edilen cibinlik başına $
    ÷ cibinliklerin gerçekten kullanılan payı
    ÷ cibinlik başına korunan kişi sayısı
    × cibinliksiz temel yıllık ölüm oranı
    × cibinlik kullanımına atfedilebilir ölüm oranı azalması (RCT kanıtından)
    × cibinlik başına koruma yılı
    ÷ funging için düzeltme (başka bağışçıların finansmanının yerini alan para)
  = kurtarılan hayat başına $ (karşı olgusal finansman etkileri düşüldükten sonra)
```

Bu zincir önemlidir çünkü her adım, maliyet-etkililik tahminlerinin sık sık yanlış gittiği bir yerdir — aşağıdaki tuzaklara bakın — ve "kurtarılan hayat başına maliyet"in asla ham gözlemlenmiş bir fiyat olmadığını, birkaç ayrı belirsiz girdiden oluşturulmuş modellenmiş bir tahmin olduğunu açıkça ortaya koyar.

## Çalışılmış örnek

İkisi de kanıta dayalı, aynı marjinal 100.000 £ için yarışan iki varsayımsal müdahale:

- **Cibinlikler (AMF tarzı)**: GiveWell'in 2020 verilerinden alınan yayımlanmış çalışılmış örneğinde kurtarılan hayat başına kabaca 4.500 $, yani kullanılan döviz kuruna ve yıla bağlı olarak 100.000 £ başına çok kabaca 20 kurtarılan hayat.
- **Solucan tedavisi programı**: hiçbir makul ölüm oranı faydası yok, ancak çocukluk çağı solucan tedavisinden uzun vadeli gelir kazançlarına dair güçlü kanıt; GiveWell onu kurtarılan hayat değil gelir kazancı cinsinden değerler, bu da ortak bir birim olmadan cibinliklerle doğrudan karşılaştırmayı zorlaştırır. GiveWell, sıralama için ikisini tek bir dâhili birime dönüştürmek üzere açık bir "ahlaki ağırlıklar" çerçevesi kullanır.

EA yönteminin disiplini, bu karşılaştırmayı her ikisi de "iyi göründüğü" için ikisini de finanse etmek yerine açığa çıkarmaya zorlamaktır. Aynı soruyu — sterlin başına en iyi getiri nedir — hayat/DALY dili yerine parasallaştırılmış değer dilinde soran, Birleşik Krallık sosyal girişimleri ve yerel komisyoncuları tarafından kullanılan eşdeğer zorlayıcı işlev için bkz. [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/).

## Yazılım mühendisliği bağlantısı

EA ile uyumlu fon sağlayıcılar (Open Philanthropy, GiveWell'in kendisi, Giving What We Can gibi etkili bağış platformları) için bağışçı platformları, hibe eşleştirme araçları veya etki gösterge panelleri geliştiren mühendisler, maliyet-etkililik tahminlerini tek sayılar değil, belirtilmiş varsayımlarla aralıklar olarak temsil etmelidir — altta yatan model birkaç çarpımsal belirsiz girdiye sahiptir ve bunu bir gösterge panelinde tek bir rakama çökertmek, GiveWell'in kendisinin belirttiği güveni yanlış temsil eder. Her tahmini yayın tarihine göre sürümleyin; GiveWell yeni RCT kanıtı veya finansman boşluğu verisi geldikçe rakamlarını, bazen önemli ölçüde revize eder ve eski bir rakamı önbelleğe alan bir platform sessizce yanlış hâle gelir.

## Tuzaklar

- **Bir maliyet-etkililik tahminini sabit bir fiyat saymak.** Birkaç belirsiz çarpımsal girdisi olan (kullanım oranları, temel ölüm oranı, funging düzeltmesi) bir model çıktısıdır; tarihi ve sürümü belirtin.
- **Funging/yer değiştirmeyi göz ardı etmek.** Parayı başka bir bağışçıdan zaten alacak olan bir kuruluşu finanse etmek, manşetin önerdiğinden daha az karşı olgusal iyilik satın alır — bkz. [ek katkı ve ölü ağırlık](../ek-katkı-ve-ölü-ağırlık/) ve [yer değiştirme ve atfetme](../yer-değiştirme-ve-atfetme/).
- **Uyumsuz birimleri dönüştürmeden karşılaştırmak.** "Kurtarılan hayatlar" ve "kazanılan gelir", açık bir ahlaki ağırlıklar çerçevesi olmadan doğrudan karşılaştırılamaz; onları karşılaştırılabilirmiş gibi yan yana sunmak bir kategori hatasıdır.
- **Neden alanı tünel görüşü.** Yalnızca bir neden alanı içinde (örn. yalnızca küresel sağlık hayır kuruluşları) sıralama yapıp kazananı "en maliyet-etkin hayır kuruluşu" olarak adlandırmak iddiayı olduğundan büyük gösterir; GiveWell'in nedenler arası sıralaması bilinçli olarak dardır (küresel sağlık ve refah), evrensel değil.

## Kaynaklar

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
