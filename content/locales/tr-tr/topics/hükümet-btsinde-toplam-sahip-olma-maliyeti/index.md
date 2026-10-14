# Hükümet BT'sinde Toplam Sahip Olma Maliyeti (TSM)

Toplam sahip olma maliyeti, bir sistemin tam yaşam döngüsü maliyetidir — edinme artı onu çalıştırmanın her yılı — ortak bir tarihe iskonto edilmiş. Hükümet BT'sinde, en güvenilir tek tahmin hatası, tedarikçileri veya seçenekleri yalnızca edinme fiyatına göre karşılaştırmaktır; oysa işletme ve bakım tipik olarak yaşam boyu faturanın yarısı ile beşte dördü arasında bir yer tutar.

## Neden önemli

HM Treasury'nin Green Book'u, herhangi bir Beş Durumlu Model iş gerekçesindeki mali durumun yalnızca sermaye harcamasını değil, tüm yaşam maliyetlerini kapsamasını şart koşar — ancak Ulusal Denetim Ofisi, bakanlıkların BT yatırımlarını eksik veya iyimser bir işletme maliyeti tahminine karşı onayladığını, ancak sistem canlıya girdiğinde ve sermaye bütçe kalemi kapandığında gerçek işletme maliyetini keşfettiğini defalarca bulmuştur. Government Digital Service ve Merkezî Dijital ve Veri Ofisi'nin Teknoloji Uygulama Kuralları (<https://www.gov.uk/guidance/the-technology-code-of-practice>) bakanlıkları kısmen sürekli maliyeti görünür ve karşılaştırılabilir kıldığı için bulut ve emtia barındırmaya iter; bu, onay sırasında çekici biçimde düşük görünen ve üç yıl sonra pahalı bir şekilde yanlış olan tek bir sermaye satın alma rakamının içine gömülü olmaktan kurtarır.

## Matematik

```
TSM = Edinme maliyeti + Σ(t=1..N) Yıllık işletme maliyeti_t / (1+r)^t
      − kalıntı değer (iskonto edilmiş)

r = HM Treasury Green Book standart sosyal iskonto oranı, yılda %3,5
    (30 yılın ötesindeki ufuklar için azalan oran takvimi)

İşletme maliyeti bileşenleri: barındırma/lisanslama, destek ve bakım,
güvenlik yamalama ve uyum, personel zamanı, planlanan yenileme/geçiş
```

Tipik 5–10 yıllık bir sistem ömrü boyunca iskonto faktörünün neden önemli olduğu için bkz. [sosyal iskonto oranı](../sosyal-iskonto-oranı/); TSM'nin bir yap/satın al kararını nasıl beslediği için ise [hükümette yap veya satın al](../hükümette-yap-veya-satın-al/).

## Çalışılmış örnek

Bir bakanlık, Green Book'un %3,5 iskonto oranıyla 5 yıllık bir ufukta iki vaka yönetim sistemini karşılaştırır.

```
Sistem A: sermaye harcaması 3.500.000 £, işletme yılda 250.000 £
Sistem B: sermaye harcaması 1.800.000 £ (daha ucuz görünüyor), işletme yılda 650.000 £
          (daha ağır satıcı desteği ve entegrasyon yükü)

Yalnızca sermaye harcamasına dayalı naif karşılaştırma: B kazanır, 1,8 milyon £ < 3,5 milyon £.

İskonto faktörü toplamı, %3,5'te 5 yıl: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TSM_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = 4.628.750 £
TSM_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = 4.734.750 £
```

TSM naif kararı tersine çevirir: Sistem B, işletme maliyeti iskonto edilip toplandığında beş yıl boyunca marjinal olarak daha pahalıdır; çünkü yaşam boyu maliyetteki işletme payı Sistem A'nın %24'üne karşı %62'dir (2.934.750 / 4.734.750) — etiket fiyatlarını karşılaştırarak tamamen gizlenen "bakım faturanın çoğunluğudur" bulgusunun somut bir örneği.

## Yazılım mühendisliği bağlantısı

TSM, her [yap veya satın al](../hükümette-yap-veya-satın-al/) kararını ve her [teknik borç](../kamu-değeri-erozyonu-olarak-teknik-borç/) geri ödeme gerekçesini disipline etmesi gereken sayıdır; çünkü borç faizi ve ertelenmiş bakım ikisi de, kimse onları izlemiş olsun olmasın, aynı iskonto edilmiş toplama ait işletme maliyeti kalemleridir. Bir platform veya satıcı seçimi öneren mühendisler satın alma fiyatını değil tam TSM tablosunu sunmalıdır; çünkü satın alma fiyatı, Green Book mali durumunun bakanlıkların tek başına güvenmesini durdurmak için tasarlandığı sayıdır. TSM aynı zamanda [paranın karşılığı](../paranın-karşılığı/) yargıları için dürüst paydadır — VFM faydayı maliyetle karşılaştırır ve eksik sayılmış bir maliyet kalemi iş gerekçesindeki her VFM oranını şişirir.

## Tuzaklar

- **Yalnızca sermaye harcaması karşılaştırması**: en yaygın tek satın alma hatası — her seçenek için eşleşen bir işletme maliyeti tahmini olmadan tedarikçi liste fiyatlarını karşılaştırmak.
- **Çıkış ve geçiş maliyetlerini hariç tutmak**: sözleşme sonu veri çıkarma, yeniden platformlama ve satıcıya kilitlenme cezaları, özgün iş gerekçesinde nadiren görünen gerçek TSM kalemleridir.
- **Güvenlik ve uyum maliyetini hariç tutmak**: yama sıklığı, akreditasyon yenilemesi ve denetim maliyeti sistem yaşı ve karmaşıklığıyla ölçeklenir — bkz. [kamu sektörü siber güvenlik değeri](../kamu-sektörü-siber-güvenlik-değeri/) — ve işletme tahmininden rutin olarak dışarıda bırakılır.
- **Farklı maliyet profillerine sahip seçenekler arasında iskonto edilmemiş karşılaştırma**: sermaye ağırlıklı bir seçeneği işletme ağırlıklı bir seçenekle iskonto etmeden karşılaştırmak, maliyetin daha fazlasını sonraki yıllara erteleyen seçeneği sistematik olarak kayırır.

## Kaynaklar

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
