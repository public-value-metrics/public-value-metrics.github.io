# Kamu Harcamasında Fırsat Maliyeti

Fırsat maliyeti, bir kamu kurumu parayı, personel zamanını veya siyasi sermayeyi bir seçeneğe ayırıp bir diğerine ayırmadığında vazgeçilen en iyi alternatifin değeridir. Bütçesi sabit olan bir bakanlıkta, bir programa harcanan her sterlin, bir sonraki en iyi programa harcanamayacak bir sterlindir; bir kararın gerçek maliyeti, harcadığı şey değil, yerinden ettiği şeydir.

## Neden önemli

Kamu bütçeleri bir harcama inceleme dönemi içinde nakit sınırlıdır; dolayısıyla büyüyen bir özel şirketin aksine, bir bakanlık iyi bir fikir için basitçe "daha fazla para bulamaz"; onu finanse etmek, başka bir şeyin finansmanını kesmek demektir. HM Treasury'nin Green Book'u bunu temel kabul eder: her değerlendirmenin, bir müdahaleyi bir "asgari düzeyde yap" temel senaryosuyla *ve* aynı kaynağın gerçekçi alternatif kullanımlarıyla karşılaştırması zorunludur; çünkü bir Hazine harcama ekibinin sorduğu gerçek soru asla "bu iyi mi?" değil, "bu para başka neyi satın alabilirdi, bu ondan daha mı iyi?" sorusudur. Green Book'un temel değerlendirme ilkesi — kamu kaynaklarının sterlin başına en yüksek net sosyal değeri sağlayan müdahaleye akması gerektiği — politika olarak ifade edilmiş fırsat maliyetidir.

Bunu söylemek kolay, uygulamak zordur; çünkü "bir sonraki en iyi alternatif" tek bir iş gerekçesinde nadiren görünür. Gençlik istihdamı için 2 milyon £'luk bir hibe programı, iş gerekçesinde hiçbir şey yapmamakla karşılaştırılır; oysa dürüst karşılaştırma ölçütü, bir sonraki en iyi gençlik istihdamı müdahalesi, hatta portföyün herhangi bir yerinde, istihdam dışı harcamalar dâhil, 2 milyon £'nun bir sonraki en iyi kullanımıdır. Magenta Book (HM Treasury, 2020), "müdahaleli" ile "müdahalesiz" karşılaştıran değerlendirmelerin bir müdahalenin aşması gereken çıtayı olduğundan düşük gösterdiği konusunda açıkça uyarır; çünkü "bu müdahale olmadan" ifadesi "hiçbir şey olmadan" ile aynı değildir: serbest kalan para başka bir şeyi finanse eder.

## Matematik

```
A'yı seçmenin fırsat maliyeti = vazgeçilen en iyi alternatif B'nin değeri

A'nın net kamu değeri = değer(A) − değer(B), değer(A) − 0 değil
```

Evrensel bir formül yoktur; çünkü vazgeçilen alternatif bağlama özgüdür, ancak disiplin genelleşir: aynı bütçe kaleminin gerçekçi bir sonraki en iyi kullanımını (idealize edilmiş bir "hiçbir şey yapma" değil) belirleyin, aynı temelde değerleyin (mümkün olduğunda [sosyal maliyet-fayda analizi](../sosyal-maliyet-fayda-analizi/) uyarınca parasallaştırarak) ve çıkarın.

## Çalışılmış örnek

**Bakanlık bütçe kalemi**: 5 milyon £'luk bir dijital dönüşüm fonu, bu mali yıl iki tekliften tam olarak birini finanse edebilir.

- *Seçenek A*: yeni bir vaka yönetim platformu, 5 yıl boyunca parasallaştırılmış fayda 7,2 milyon £ (verimlilik tasarrufları artı daha hızlı vaka çözümü).
- *Seçenek B*: üç bakanlık arasında paylaşılan bir kimlik doğrulama hizmeti, 5 yıl boyunca parasallaştırılmış fayda 6,4 milyon £.

A için naif bir iş gerekçesi, 7,2 milyon £ faydayı 5 milyon £ maliyetle karşılaştırır ve 1,44:1'lik bir fayda-maliyet oranı bildirir — görünürde güçlü. Ancak A ve B aynı 5 milyon £ için yarıştığından, A'yı seçmenin fırsat maliyeti B'nin vazgeçilen 6,4 milyon £'luk faydasıdır. A'nın gerçekçi alternatife göre *net* gerekçesi yalnızca 7,2 milyon £ − 6,4 milyon £ = 0,8 milyon £'dur; manşetteki 7,2 milyon £'nun tamamı değil. Üçüncü bir seçenek C, aynı 5 milyon £ için 7,5 milyon £ fayda sunsaydı, A'yı C'ye tercih ederek finanse etmek, A'nın kendi iş gerekçesi tek başına tamamen haklı görünse bile 0,3 milyon £'luk kamu değerini yok ederdi.

**Yerel yönetim personel zamanı**: bir belediyenin üç kişilik veri ekibi ya bir konut bekleme listesi gösterge paneli (yılda 400 memur-saati tasarruf sağlayacağı tahmin ediliyor, saat başına 28 £ ile yılda 11.200 £ değerinde) ya da bir yardım dolandırıcılığı önceliklendirme aracı (yılda 85.000 £'lik hatalı ödemeyi önleyeceği tahmin ediliyor) geliştirebilir. Gösterge panelini geliştirmenin fırsat maliyeti yalnızca veri ekibinin maaş maliyeti değil, yılda vazgeçilen 85.000 £'dir; "bedava" dahili geliştirmenin gerçek maliyeti, ekibin başka yerde üretebileceği çok daha büyük faydadır.

## Yazılım mühendisliği bağlantısı

Bir kamu kurumu içindeki mühendislik kapasitesi de kendi başına kısıtlı bir bütçedir — sterlin değil, sprint kapasitesi — ve aynı disiplin doğrudan uygulanır:

- Karşılaştırma ölçütünü her zaman adlandırın: bir özelliğin iş gerekçesi yalnızca kendi getirisini değil, aynı ekip-haftalarının başka neyi teslim edebileceğini de belirtmelidir.
- "Boş mühendislik kapasitemiz var" ifadesini fırsat maliyeti analizinin sonu değil, başlangıcı olarak ele alın — boş kapasitenin bile en iyi bir alternatif kullanımı vardır; bu kullanım teknik borç ödemesi olsa bile (bkz. [kamu değeri erozyonu olarak teknik borç](../kamu-değeri-erozyonu-olarak-teknik-borç/)).
- Bunu doğrudan [paranın karşılığı](../paranın-karşılığı/) ile bağlayın: VFM'nin "ekonomi" testi, dürüst bir fırsat maliyeti karşılaştırma ölçütü olmadan anlamsızdır; ve aynı vazgeçilen alternatif mantığının zaman boyutunu fiyatlayan [kamu programlarında gecikme maliyeti](../kamu-programlarında-gecikme-maliyeti/) ile de bağlayın.

## Tuzaklar

- **Bir sonraki en iyi alternatif yerine "hiçbir şey yapmama" ile karşılaştırmak.** Green Book bir "asgari düzeyde yap" temel senaryosunu tam da gerçek fırsat maliyeti nadiren sıfır olduğu için zorunlu kılar; yalnızca "hiçbir şey yapmama" çıtasını aşan bir iş gerekçesi, gerçekçi alternatifi geçtiğini göstermemiştir.
- **Aynı havuz için bakanlıklar arası rekabeti göz ardı etmek.** Bir müdürlük içinde ayrılmış görünen bütçe kalemleri, genellikle gerçek fırsat maliyetinin ortaya çıktığı daha üst düzeyde (bir harcama incelemesi, bir sermaye programı) rekabet eder.
- **Serbest kalan personel zamanının başka bir değeri olmadığını varsaymak.** "Tasarruf edilen" zaman ancak değerli bir işe yeniden yönlendirilirse değer yaratır; alternatif bir kullanım yoksa tasarruf kâğıt üzerindedir.

## Kaynaklar

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
