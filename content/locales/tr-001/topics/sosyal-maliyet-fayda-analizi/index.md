# Sosyal Maliyet-Fayda Analizi (SMFA)

Sosyal maliyet-fayda analizi, bir politikanın veya programın piyasa ve piyasa dışı tüm maliyetlerini ve faydalarını ortak bir parasal birime dönüştürür, gelecekteki akışları bugünkü değere iskonto eder ve bunları tek bir sayı üretmek üzere netleştirir: bu teklif toplumu daha iyi duruma getiriyor mu ve ne kadar?

## Neden önemli

SMFA, [Green Book değerlendirmesi](../green-book-değerlendirmesi/)nin ekonomik durumundaki varsayılan nicel yöntemdir: HM Treasury'nin rehberliği, faydaların inandırıcı biçimde parasallaştırılabildiği her yerde tekliflerin pozitif bir net bugünkü sosyal değer (NPSV) göstermesini ve piyasa dışı mallar için temel değerleme ilkesi olarak ödeme istekliliğini kullanmasını şart koşar (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 5. Bölüm). Uyguladığı disiplin şudur: "sosyal" maliyet-fayda analizi, özel sektör yatırım değerlendirmesiyle aynı çalışma değildir; işleme taraf olmayan üçüncü taraflara düşen maliyetleri ve faydaları (dışsallıklar) içermelidir, ticari sermaye maliyeti yerine [sosyal iskonto oranı](../sosyal-iskonto-oranı/)nı kullanmalıdır ve bir sterlinin daha yoksul bir hanehalkı için daha zengin birine göre daha fazla önem taşıdığı yerlerde [dağılımsal ağırlıklandırma](../dağılımsal-ağırlıklandırma/) uygulamalıdır.

SMFA'nın çöktüğü yer, eleştirmenlerinin beklediği yerdir: piyasa karşılığı olmayan mallar — temiz hava, toplumsal bağlılık, kurtarılan bir hayatın değeri — [beyan edilen tercih](../beyan-edilen-tercih-değerlemesi/) veya [ortaya çıkan tercih](../ortaya-çıkan-tercih-değerlemesi/) yöntemleriyle parasallaştırılmalı ya da bir [gölge fiyat](../gölge-fiyatlama/) oluşturulmalıdır. Parasallaştırma yalnızca zor değil, tartışmalı olduğunda, Green Book'un kendisi kimsenin inanmadığı bir sayıyı zorlamak yerine [maliyet-etkililik analizi](../hükümette-maliyet-etkililik-analizi/)ne veya [çok kriterli karar analizi](../çok-kriterli-karar-analizi/)ne geri dönülmesini önerir.

## Matematik

```
NPSV = Σ [t=0'dan T'ye] (Fayda_t − Maliyet_t) / (1 + r)^t

burada:
  Fayda_t   = t yılındaki tüm parasallaştırılmış faydalar, beyan edilen/ortaya
              çıkan tercih veya gölge fiyat yoluyla değerlenen piyasa dışı
              mallar dâhil
  Maliyet_t = t yılındaki tüm parasallaştırılmış maliyetler, kaynakların fırsat
              maliyeti dâhil (bkz. ../opportunity-cost-in-public-spending/)
  r         = sosyal iskonto oranı (HM Treasury %3,5 belirler ve 30. yıldan
              sonra daha düşük oranlara iner, Green Book Ek A'ya göre)
  T         = değerlendirme dönemi

Fayda-maliyet oranı (BCR) = Σ BD(Faydalar) / Σ BD(Maliyetler)
```

1'in üzerinde bir BCR (veya sıfırın üzerinde NPSV) net sosyal değeri gösterir. Green Book'un (ulaşım ve altyapı değerlendirmesinde kullanıldığı biçimiyle) paranın karşılığı kategorileri BCR aralıklarını etiketler: 1,0'ın altı zayıf paranın karşılığı, 1,0–1,5 düşük, 1,5–2,0 orta, 2,0–4,0 yüksek ve 4,0'ın üzeri çok yüksektir. Duyarlılık analizi — NPSV'yi kötümser ve iyimser varsayımlar altında yeniden çalıştırmak — isteğe bağlı değil zorunludur; çünkü parasallaştırılmış piyasa dışı faydalar geniş belirsizlik bantları taşır.

## Çalışılmış örnek

**Yerel yönetim**: bir belediye, 20 yıllık değerlendirme dönemi boyunca %3,5 iskonto oranıyla yeni bir bisiklet ve yürüyüş ağına 3 milyon £'luk yatırımı değerlendirir.

```
Maliyetler: 0. yılda 3 milyon £ sermaye, yılda 50.000 £ bakım (1-20. yıllar)
BD(bakım) ≈ 50.000 £ × 14,2 (%3,5'te 20 yıllık anüite faktörü) ≈ 710.000 £
Toplam BD(maliyetler) ≈ 3,71 milyon £

Faydalar (hepsi yayımlanmış DfT/WHO değerleme araçlarıyla parasallaştırılmış):
  Artan fiziksel aktiviteden sağlık faydası: yılda 180.000 £
  Devamsızlık azalması: yılda 40.000 £
  Trafik sıkışıklığının azalması (daha az araç yolculuğu): yılda 60.000 £
  Toplam fayda akışı: yılda 280.000 £
BD(faydalar) ≈ 280.000 £ × 14,2 ≈ 3,98 milyon £

NPSV = 3,98 milyon £ − 3,71 milyon £ = +0,27 milyon £
BCR = 3,98 / 3,71 = 1,07 → "düşük" paranın karşılığı
```

Program çıtayı aşıyor ancak ucu ucuna; sağlık faydası tahmininin %20 daha düşük olduğu bir duyarlılık çalışması (fiziksel aktivite değerlemesindeki gerçek belirsizliği yansıtan) BCR'yi 1,0'ın altına çevirir; Green Book'un duyarlılık tablosunun yalnızca merkezî tahminle değil, manşet sayıyla birlikte yayımlanmasını şart koşmasının nedeni tam olarak budur.

**Hayır kuruluşu**: yılda 500.000 £'ya mal olan bir bebek ölümlerini önleme programı, gözlenen bir piyasa fiyatı değil, bir gölge fiyat olan, kabaca 2,1 milyon £'luk istatistiksel bir hayatın değeri (VSL) kullanılarak değerlendirilir (HM Treasury'nin 2023'te güncellenen, kendisi de beyan edilen tercih çalışmalarından türetilmiş rakamı). 500.000 £ maliyetle yılda bir bebek ölümünü önlemek, 4,2'lik bir BCR verir; rahatlıkla "çok yüksek" paranın karşılığı — ancak sonucun tamamı VSL rakamına dayanır; bu nedenle VSL kullanan herhangi bir SMFA bunu bir gerçek değil, bir varsayım olarak açıklamalıdır.

## Yazılım mühendisliği bağlantısı

SMFA, hükümet yazılımındaki platform ve altyapı yatırım kararları için doğal çerçevedir — örneğin paylaşılan bir kimlik platformunu bakanlık düzeyindeki nokta çözümleriyle karşılaştırmak, kendi başlarına piyasa fiyatı olmayan, azalan mükerrer işe alım maliyeti, azalan sahtecilik ve daha hızlı hizmete ulaşma süresi gibi faydaların parasallaştırılmasını gerektirir. Altta yatan hizmeti geliştiren mühendisler, program liderlerinin bu analiz için girdiler istemesini beklemelidir: işlemlerin birim maliyetleri (bkz. [işlem başına maliyet](../işlem-başına-maliyet/)), beklenen hacimler ve bozulma/kesinti maliyetleri. İçe aktarılması en önemli disiplin: gelecekteki faydaları iskonto edin, karşı olgusal temel senaryoyu açıkça adlandırın (bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/)) ve duyarlılık aralığı olmadan asla tek bir nokta tahmini sunmayın.

## Tuzaklar

- **Faydaları iki kez saymak.** Hem "tasarruf edilen zamanı" hem de "o zamandan elde edilen verimliliği" ayrı fayda kalemleri olarak saymak gerekçeyi olduğundan büyük gösterir; fayda tasarruf edilen zamandır, bağımsız olarak kanıtlanmadıkça sonraki kullanımı ek bir fayda değildir.
- **Yer değiştiren maliyetleri atlamak.** Sıkışıklığı bir yoldan diğerine veya sahteciliği bir kanaldan diğerine taşıyan bir program, manşet NPSV'sinin ima ettiği net faydayı yaratmamıştır — bkz. [yer değiştirme ve atfetme](../yer-değiştirme-ve-atfetme/).
- **Özel bir iskonto oranı kullanmak.** Sosyal iskonto oranı yerine ticari bir sermaye maliyeti (örneğin %8–10) uygulamak, sağlık ve çevre kazanımları gibi uzun vadeli kamu faydalarını sistematik olarak olduğundan düşük değerler — bkz. [sosyal iskonto oranı](../sosyal-iskonto-oranı/).
- **Tartışmasız olanı parasallaştırıp tartışmalı olanı geçiştirmek.** Bir teklifin faydasının üçte ikisi güvenle parasallaştırılmış bir verimlilik tasarrufu, üçte biri ise zayıf parasallaştırılmış bir refah kazancı ise, manşet NPSV sessizce sert bir sayıyı yumuşak bir sayıyla harmanlar; bunları ayrı raporlayın.

## Kaynaklar

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
