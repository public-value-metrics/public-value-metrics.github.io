# Değişim Kuramı

Değişim kuramı (theory of change), uzun vadeli bir hedeften, o hedefe ulaşılması için var olması gereken ön koşullara ve faaliyetlere uzanan, her halkayı birbirine bağlayan varsayımlarla birlikte açık, geriye doğru haritalanmış bir nedensel yoldur. İstediğiniz sonuçtan başlayarak ve "bunun gerçekleşmesi için hemen öncesinde ne doğru olmalı?" diye tekrar tekrar sorarak, gerçekten teslim edebileceğiniz faaliyetlere ulaşana dek oluşturulur — bu, bir [mantık modeli](../mantık-modeli/)nin tersi yöndür ve ikisinin birbirinin yerine geçmek yerine tamamlayıcı olmasının nedeni budur.

## Neden önemli

Geriye doğru haritalama yöntemi, değerlendirici Carol Weiss'in program varsayımlarını inançla kabul edilmek yerine test edilebilecek şekilde açık hâle getirme çalışmasına dayanarak Center for Theory of Change ve ActKnowledge tarafından resmîleştirilmiştir. Birleşik Krallık hibe değerlendirmesi bunu doğrudan özümsemiştir: HM Treasury'nin Magenta Book'u, değişim kuramını herhangi bir değerlendirme tasarımının başlangıç noktası olarak ele alır ve National Lottery Community Fund gibi fon sağlayıcılar, bir teklifi finanse etmeden önce başvuru sahiplerinden bir tane ifade etmelerini ister. Bir yazılım mühendisi için önemli olmasının nedeni, değişim kuramının sisteminizin neyi ölçmesi gerektiğini belirlemesi gereken belge olmasıdır — nedensel zincir "yardım başvurusunun artması, hak sahiplerinin kişiselleştirilmiş bir hesaplama almasına bağlıdır" diyorsa, bu ürününüzün kanıtlamak veya çürütmek için donatılabileceği test edilebilir bir iddiadır.

## Matematik

Bir değişim kuramı sayısal değil, yapısaldır. Her halka hem bir varsayımı hem de varsayımın yanlış olduğunu gösterebilecek bir göstergeyi taşımalıdır:

```
Uzun vadeli sonuç (hedef)
  ↑ ön koşul + varsayım + gösterge
Ara sonuç N
  ↑ ön koşul + varsayım + gösterge
  ...
Ara sonuç 1
  ↑ ön koşul + varsayım + gösterge
Faaliyetler / müdahaleler
  ↑ taahhüt edilen kaynaklar
Girdiler
```

Bu yapı, her halkadaki varsayımların gerçekten geçerli olup olmadığını test etmek için var olan [etki değerlendirme yöntemleri](../etki-değerlendirme-yöntemleri/)ne ve uzun vadeli sonucun zaten gerçekleşip gerçekleşmeyeceğini test eden [karşı olgusal analiz](../karşı-olgusal-analiz/)e doğrudan beslenir.

## Çalışılmış örnek

**Yerel yönetim (evsizliği önleme)**: uzun vadeli sonuç, tahliye riski altındaki hanehalkları için 12. ayda sürdürülen kiracılıklardır.

- Ön koşul: hanehalklarının borçlar için gerçekçi, karşılanabilir bir ödeme planı vardır. Varsayım: vaka çalışanı tarafından müzakere edilen planlar, mahkeme kararıyla belirlenenlerden daha sürdürülebilirdir. Gösterge: 6. ayda hâlâ aktif olan planların %'si.
- Ön koşul: hanehalkları hak ettikleri yardımları talep eder. Varsayım: dijital bir yardım hesaplayıcısı, kâğıt formlara göre doğru başvuruları artırır. Gösterge: araç devreye alınmadan önce/sonra karşılaştırılan başvuru doğruluk oranı.
- Faaliyetler: vaka çalışanı önceliklendirmesi, dijital yardım hesaplayıcısı, borç müzakeresi.

120 hanehalkından oluşan bir pilot kohortta, yardım hesaplayıcısı varsayımı, doğru başvuruda bulunan 102 hanehalkı (%85) için geçerli oldu ve bu, sonraki bir süreç değerlendirmesiyle kanıtlandı — program ekibine, önlenen evsizlik hakkında tek bir uçtan uca iddia yerine, o belirli halka için kanıt sağladı.

**Hayır kuruluşu (gençlik mentorluğu)**: uzun vadeli sonuç, azalan okuldan uzaklaştırmadır. Geriye doğru haritalanmış ön koşullar: geliştirilmiş duygusal düzenleme → bir mentorla güvenilir birebir ilişki → iki dönem boyunca tutarlı haftalık temas. Kuram, "tutarlı haftalık temas" ön koşulunun eksikliğinin (örneğin mentör devri nedeniyle) sonucun gerçekleşmeyeceğini öngördüğünü açıkça ortaya koyar; bu bir umut değil, test edilebilir, çürütülebilir bir iddiadır.

## Yazılım mühendisliği bağlantısı

Bir değişim kuramı, tek bir gösterge paneli bile oluşturulmadan önce bir ürünün veri modelini şekillendirmelidir: hangi halkaların bir göstergeye ihtiyaç duyduğunu belirleyin ve günlüğe kaydedilmesi en kolay olan şeye varsayılan olarak başvurmak yerine özellikle onlar için araçlandırma yapın. Aynı zamanda yol haritası konuşmalarını disipline eder — zincirdeki hiçbir halkaya karşılık gelmeyen bir özellik, geliştirilmeye değer olduğu belli olmayan bir özelliktir. Kuram üzerinde anlaşıldıktan sonra oluşturulan ileriye dönük hesap verebilirlik zinciri için bkz. [mantık modeli](../mantık-modeli/); hangi sonuçların değerleneceğini kapsamlandırmak için bir değişim kuramına bağlı olan bir yöntem için [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/); ara sonuç halkalarının bağlı olduğu ayrım için ise [sonuçlar ve çıktılar](../sonuçlar-ve-çıktılar/).

## Tuzaklar

- **Onu bir mantık modeliyle karıştırmak.** Değişim kuramı nedensel ve açıklayıcıdır (bunun neden işe yaradığına inanıyoruz); mantık modeli ardışık ve betimleyicidir (ne, hangi sırayla gerçekleşiyor). Yalnızca birini üretmek ya "neden"i ya da hesap verebilirlik izini eksik bırakır.
- **Varsayımları örtük bırakmak.** Geriye doğru haritalamanın tüm değeri, test edilebilir varsayımları ortaya çıkarmaktır; kutuları ve okları listeleyen ama her halkayı neyin yanlış kılabileceğini adlandırmayan bir değişim kuramı süstür.
- **Bir kez oluşturup rafa kaldırmak.** Bir fon teklifi için yazılan ve bir daha gözden geçirilmeyen bir değişim kuramı, kanıt bir halkayla çelişmeye başladığı anda yararlı olmaktan çıkar.
- **Paydaş girdisini atlamak.** Tamamen komisyoncular tarafından, ön saflardaki personel veya yararlanıcılardan girdi alınmadan oluşturulan bir değişim kuramı, hizmeti sunan hiç kimsenin gerçekten inanmadığı varsayımları kodlama eğilimindedir.

## Kaynaklar

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
