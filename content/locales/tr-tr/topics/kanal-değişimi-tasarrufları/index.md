# Kanal Değişimi Tasarrufları

Kanal değişimi tasarrufları, işlem hacmini pahalı kanallardan — telefon, yüz yüze gişeler, kâğıt posta — ucuz dijital self servise taşımaktan öngörülen maliyet azalmasıdır. "Varsayılan olarak dijital"in arkasındaki mali motordur ve aynı zamanda iş gerekçesinde yanlış olma olasılığı en yüksek kalemdir; çünkü dayandığı varsayım — dijital benimseme arttıkça çevrimdışı kanalların küçüldüğü — yalnızca bazen doğrudur.

## Neden önemli

Dijital Verimlilik Raporu'ndaki [işlem başına maliyet](../işlem-başına-maliyet/) rakamları kullanıldığında aritmetik tartışılmaz görünür: bir milyon işlemi 8,62 £'luk yüz yüze bir ziyaretten 0,15 £'luk dijital bir işleme kaydırın ve tasarruf 8 milyon £'nun üzerindedir. Ancak bir tasarruf, yalnızca küçülen kanalın *sabit kapasitesi* — çağrı merkezi koltukları, gişe personeli, telefon sözleşmesi dakikaları — gerçekten kapatıldığında yeniden görevlendirilebilecek serbest nakde dönüşür ve yerel yönetim dijital programları, toplam iletişim hacminin dijital benimsemeyle uyumlu olarak düşmediğini defalarca bulmuştur. Yerel yönetim dijital dönüşüm programlarından ve Socitm ile Local Government Association gibi kurumlardan gelen araştırma, yinelenen bir örüntüyü belgelemiştir: dijital kanallar gerçekten yeni iletişim çeker (aksi hâlde telefon etmeyecek veya ziyaret etmeyecek vatandaşlar, daha kolay olduğu için şimdi eder) ve "dijital" işlemlerin anlamlı bir payı yarıda başarısız olur ve yine de bir telefon araması üretir — dolayısıyla telefon hacmi, dijital benimseme yüzdesinin önerdiğinden çok daha az düşer, bazen toplam iletişim içindeki *payı* azalırken mutlak olarak hiç düşmez.

## Matematik

```
Brüt kanal değişimi tasarrufu = kaydırılan hacim × (eski_kanal_maliyeti − dijital_maliyet)

Net (gerçekleşen) tasarruf = brüt tasarruf
                            − daha kolay kanalın yarattığı yeni/gölge talep
                            − başarısızlık talebi maliyeti (yine de bir telefon
                              araması veya gişe ziyareti üreten dijital başarısızlıklar)
                            − emekli edilmemiş sabit kapasitenin maliyeti (bir çağrı
                              merkezi personeli yalnızca ayrık birimler hâlinde azaltabilir;
                              %15'lik bir hacim düşüşü nadiren personel sayısının %15'ini
                              kesmenize izin verir)

Gerçekleşme eşiği: tasarruflar yalnızca hacim, eski kanalın bir sonraki küçük
ayrık kapasite adımında kadrolayabileceği düzeyin altına düştüğünde (örn. tam bir
vardiyayı, tam bir masayı, sözleşmeli bir personel bandını kaybetmek) bankaya
yatırılabilir
```

## Çalışılmış örnek

**İlçe belediyesi engelli rozeti yenileme hizmeti**: yılda 60.000 yenileme, daha önce işlem başına 6,40 £ ile %100 telefon/kâğıt. Yeni bir dijital hizmet başlar ve bir yıl içinde dijital işlem başına 0,30 £ ile %65 dijital benimsemeye ulaşır.

```
Naif (brüt) tasarruf hesaplaması:
  39.000 kaydırılan × (6,40 £ − 0,30 £) = yılda 237.900 £

Belediyenin iletişim merkezi verilerine göre gerçekte olan:
  Telefon hacmi yılda 60.000'den 46.000'e düştü (−%65 değil, −%23)
  çünkü: 9.000 dijital yolculuk başarısız oldu ve bir takip araması üretti
         (başarısızlık talebi sızıntısı) ve daha önce hiç yenilemeyen
         4.000 kişi, çevrimiçi kolay bulduğu için artık yeniliyor
         (gölge talep — gerçek bir erişim iyileşmesi, ancak tasarruf değil)

  Telefon iletişim merkezi TZE başına 8.000 çağrı bantlarında kadrolanmıştır;
  14.000 çağrılık bir düşüş (60.000 → 46.000) 1,75 TZE serbest bırakır,
  pratikte aşağı yuvarlanarak gerçekten yeniden görevlendirilen 1 TZE =
  yılda 34.000 £

Gerçekleşen tasarruf = yılda 34.000 £ artı 39.000 işlemde önlenen dijital kanal
  geliştirme/işletme maliyeti ≈ 34.000 £ + (39.000 × zaten sayılmış 0,30 £
  dijital maliyet) — 237.900 £'luk manşetin bir kısmı, her ne kadar hizmet
  kullanıcılar için hâlâ tartışmasız daha iyi olsa da.
```

## Yazılım mühendisliği bağlantısı

Mühendislik dersi, kanal değişimi tasarruflarının yazılımın yayına girmesiyle değil, *operasyonel* kararlarla (vardiya planlaması, kapatma, sözleşme yeniden müzakeresi) gerçekleştiğidir — bir ekip her [dijital hizmet standardı](../dijital-hizmet-standardı/) maddesini karşılayıp, eski kanalın sabit kapasitesini kimse emekli etmezse yine de sıfır net tasarruf sunabilir. Başarısızlık talebini araçlandırmak (dijital yolculukta kullanıcıların nerede terk ettiği ve sonra ne yaptığı) çözülebilir bir huni analitiği sorunudur ve bir mühendislik ekibinin tasarruf gerekçesini korumak için yapabileceği en yüksek kaldıraçlı tek şeydir; aynı zamanda başarısızlık talebinin sessizce şişirdiği [işlem başına maliyet](../işlem-başına-maliyet/)e doğrudan bağlantıdır. Bir iş gerekçesinin tasarruflarının gerçekten gerçekleşip gerçekleşmediğini kontrol etmenin daha geniş disiplini için bkz. [fayda gerçekleştirme](../fayda-gerçekleştirme/); çevrimdışı kanalın neden genellikle tamamen emekli edilemediği ve edilmemesi gerektiği için ise [dijital kapsayıcılık](../dijital-kapsayıcılık/).

## Tuzaklar

- **1:1 kanal ikamesi varsaymak**: dijital benimsemeyi, yerel yönetim kanal değişimi araştırmasında belgelenen gölge talebi ve başarısızlık talebi sızıntısını göz ardı ederek, telefon/gişe hacminden doğrudan bir çıkarma olarak modellemek.
- **Kapatmadan önce brüt tasarrufları kaydetmek**: tasarrufu, eski kanalın kapasitesinin gerçekten kesildiği yıl (eğer kesilirse) değil, benimsemenin arttığı yıl iş gerekçesinde saymak.
- **Personel maliyetlerinin basamak fonksiyonu doğasını göz ardı etmek**: %20'lik bir hacim düşüşü nadiren %20'lik bir maliyet düşüşüne dönüşür; çünkü iletişim merkezleri ve gişeler sürekli değil, ayrık bantlarda kadrolanır.
- **Gölge talebi israf saymak**: daha önce dışlanmış veya caydırılmış kullanıcılardan gelen yeni iletişim, bir modelleme hatası değil, [kamu değeri](../kamu-değeri/)nde gerçek bir artıştır — gürültü olarak netleştirilmek yerine bir erişim sonucu olarak raporlanmalıdır.

## Kaynaklar

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
