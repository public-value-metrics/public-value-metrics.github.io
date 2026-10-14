# Çok Kriterli Karar Analizi (ÇKKA)

ÇKKA, seçenekleri aynı anda birden fazla ayrı, ağırlıklı kritere göre puanlar ve tartar; her kriteri tek bir parasal veya doğal birim ölçeğine zorlamadan sıralı bir karşılaştırma üretir. Önem taşıyan sonuçların gerçekten tek bir sayıya indirgenemediği kararlar için değerlendirme yöntemidir.

## Neden önemli

Green Book, ÇKKA'yı (Kutu 2 vaka çalışması eki ve Ek A bunu doğrudan tartışır) faydaların "gerçekten ölçülemez" olduğu değerlendirmeler için açıkça onaylar — her şeyi [sosyal maliyet-fayda analizi](../sosyal-maliyet-fayda-analizi/) yoluyla paraya veya [maliyet-etkililik analizi](../hükümette-maliyet-etkililik-analizi/) yoluyla tek bir sonuca dönüştürmenin kararı netleştirmek yerine yanlış temsil edeceği durumlarda (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Örneğin yeni bir cezaevi için yer seçimi, sermaye maliyetini toplumsal etki, ulaşım bağlantısı, çevresel etki ve personel istihdam edilebilirliğiyle takas eder — ortak bir birimi paylaşmayan ve ortak bir birimi (tipik olarak parayı) zorlamanın, örneğin çevresel etkinin maliyete göre göreli önemi hakkında nesnel aritmetik kılığına girmiş bir değer yargısını kaçırmak olacağı kriterler.

ÇKKA'nın dürüstlüğü aynı zamanda ana kırılganlığıdır: ağırlıklar değerlendirmeyi yürüten kişi (veya bir panel) tarafından atandığı için yöntem yalnızca ağırlıklandırma süreci kadar meşrudur. Green Book rehberliği, kriterlerin ve ağırlıkların seçenekler puanlanmadan *önce* kararlaştırılması ve yayımlanması gerektiği konusunda açıktır; bunun amacı tam olarak, bir değerlendiricinin tercih edilen bir seçenekten onu haklı çıkaran ağırlıklara geriye doğru çalışmasını önlemektir.

## Matematik

```
Her i seçeneği ve j kriteri için:
  Puan_ij   = seçeneğin o kritere karşı performansı (genellikle 0-100 veya
              1-10, kanıttan, uzman yargısından veya paydaş puanlamasından)
  Ağırlık_j = j kriterinin göreli önemi, ağırlıklar toplamı 1 (veya 100)

i seçeneğinin ağırlıklı puanı = Σ_j (Puan_ij × Ağırlık_j)

Prosedür:
1. Herhangi bir seçeneği puanlamadan ÖNCE kriter kümesi ve ağırlıklar üzerinde
   anlaşın (swing ağırlıklandırma veya ikili karşılaştırma, örn. AHP, yaygın
   çıkarım yöntemleridir).
2. Her seçeneği her kritere karşı ortak bir ölçekte, mümkün olduğunda
   kanıttan yola çıkarak puanlayın.
3. Ağırlıklı toplamları hesaplayın; seçenekleri sıralayın.
4. Ağırlıkları duyarlılık testine tabi tutun: sıralama, her kriterin ne kadar
   önemli olması gerektiğine dair makul anlaşmazlıktan sağ çıkıyor mu?
```

ÇKKA, SMFA'nın net bugünkü değerinin yaptığı gibi savunulabilir mutlak bir değer üretmez — yalnızca kararlaştırılan ağırlıklara bağlı bir sıralama üretir. Bu, karar gerçekten ölçülemez malların takasıyla ilgili olduğunda bir özelliktir ve parasallaştırmanın aslında mümkün olduğu yerde daha zor parasallaştırma işinden kaçmak için kullanılırsa bir yüktür.

## Çalışılmış örnek

**Yerel yönetim**: yeni bir ev atığı geri dönüşüm merkezi için bir konum seçen bir belediye, üç sahayı dört kritere göre puanlar; ağırlıklar herhangi bir saha ziyaretinden önce bir bakanlıklar arası panel tarafından belirlenmiştir:

```
Kriterler (ağırlık):      Sermaye maliyeti (%30)  Ulaşım erişimi (%25)
                           Toplumsal etki (%25)    Çevresel etki (%20)

Saha puanları (0-100, yüksek = daha iyi):
Saha A: maliyet 80, erişim 60, toplum 40, çevre 70
Saha B: maliyet 60, erişim 90, toplum 70, çevre 50
Saha C: maliyet 90, erişim 50, toplum 80, çevre 60

Ağırlıklı toplamlar:
Saha A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
Saha B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
Saha C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

Saha C en üst sırada. Toplumsal etki ağırlığını %25'ten %35'e kaydıran (sermaye maliyetinden 10 puan alarak) bir duyarlılık çalışması, Saha C'nin toplamını 71,5 − 3 + 8 = 76,5'e ve Saha B'nin toplamını 68 − 6 + 7 = 69'a değiştirir — Saha C hâlâ öndedir, yani sıralama ağırlıklandırma hakkındaki bu makul anlaşmazlığa karşı dayanıklıdır; Green Book'un bildirilmesini beklediği kontrol tam olarak budur.

**Hayır kuruluşu**: bir borç danışmanlığı hizmeti, bir gıda bankası ağı ve bir finansal okuryazarlık programını finanse etme arasında seçim yapan bir hibe veren vakıf, SROI yerine (bkz. [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/)) ÇKKA kullanır; çünkü mütevelliler, kriz yardımının mı yoksa önlemenin mi daha ağır basması gerektiği konusunda iyi niyetle anlaşamaz — ÇKKA onların, tek bir SROI oranının bunu çözdüğünü varsaymak yerine, anlaşmazlığın *biçimi*ni (bir ağırlık aralığı) kararlaştırmalarına olanak tanır.

## Yazılım mühendisliği bağlantısı

ÇKKA, kriterler gerçekten çatıştığında satıcı ve mimari seçimi için doğal araçtır — bulut barındırmalı ile yerinde bir vaka yönetim sistemi arasında seçim yapmak, maliyeti, veri egemenliği riskini, erişilebilirliği ve teslimat hızını tek bir sayıya indirgenmeyen biçimlerde takas eder. Mühendislik liderleri, tam olarak Green Book'un şart koştuğu gibi, ağırlıklandırmanın seçenekler puanlanmadan önce yapılmasında ısrar etmelidir; çünkü kısa liste görüldükten sonra yürütülen bir ağırlıklandırma çalışması, odadakilerin zaten tercih ettiği seçeneğe doğru güvenilir biçimde kayar. Yaygın bir ÇKKA uygulaması için bkz. [hükümette yap veya satın al](../hükümette-yap-veya-satın-al/); karar öncesi değil karar sonrası kullanılan ilgili bir yapılandırılmış puanlama aracı için ise [kamu değeri puan kartı](../kamu-değeri-puan-kartı/).

## Tuzaklar

- **Ağırlıkları seçenekleri gördükten sonra belirlemek.** Bu, ÇKKA'nın kasıtlı ya da kasıtsız olarak manipüle edilmesinin en yaygın yoludur; ağırlıkları puanlamadan önce yayımlayın ve onları kimin belirlediğini kaydedin.
- **Ağırlıklı toplamı kesin bir sayı saymak.** 71,5'e karşı 68 puan, duyarlılık analizi sıralamanın kararlı olduğunu doğrulamadıkça istatistiksel olarak anlamlı bir fark değildir; yanlış kesinlik değil, aralıklar bildirin.
- **ÇKKA'yı aslında mümkün olan parasallaştırmadan kaçınmak için kullanmak.** Kriterlerin çoğu inandırıcı biçimde fiyatlandırılabiliyorsa, [SMFA](../sosyal-maliyet-fayda-analizi/) yerine varsayılan olarak ÇKKA'ya başvurmak, değerlendirmenin kullanabileceği bilgiyi çöpe atar.
- **Tüm ağırlıkları tek bir baskın paydaşın tek başına belirlemesine izin vermek.** Green Book iyi uygulaması, ağırlıkların sponsor müdürden değil, temsili bir panelden çıkarılmasını bekler; aksi hâlde değerlendirme yalnızca o kişinin zaten istediğini yeniden türetir.

## Kaynaklar

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
