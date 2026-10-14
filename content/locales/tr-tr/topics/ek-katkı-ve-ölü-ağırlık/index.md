# Ek Katkı ve Ölü Ağırlık

Ek katkı (additionality), bir müdahalenin aksi hâlde gerçekleşmeyecek bir sonuca neden olup olmadığını sorar. Ölü ağırlık (deadweight) onun ayna görüntüsüdür: program, hibe veya sübvansiyon olmasa bile zaten gerçekleşecek olan sonucun payı. Bir hükümet programının veya hayır kuruluşunun hemen her etki iddiası, ölü ağırlık çıkarılana kadar etkisini olduğundan büyük gösterir; Birleşik Krallık değerlendirme rehberliğinin bunu herhangi bir manşet sayıya yapılacak ilk ve en önemli düzeltme olarak ele almasının nedeni budur.

## Neden önemli

"500 işletmenin büyümesini destekledik" bir başarı gibi görünür; ancak bu işletmelerden 300'ü zaten büyüyecekse — yerel ekonomi toparlandığı için, başka finansman yolları olduğu için, program başlamadan önce zaten bir büyüme yörüngesinde oldukları için — programın gerçek ek katkısı 500 değil, 200'dür. HM Treasury'nin Magenta Book'u ve uzun süredir var olan HM Treasury/BIS "Additionality Guide" (aslen bölgesel kalkınma ve yenileme programları için geliştirilmiş ve o tarihten bu yana Birleşik Krallık hükümet değerlendirmelerinde yaygın olarak kullanılan), ölü ağırlığı standart net etki dizisinde başlangıç düzeltmesi olarak resmîleştirir: brüt etki eksi ölü ağırlık, eksi yer değiştirme, eksi sızıntı, çarpan etkileri için düzeltilmiş, net ek etkiye eşittir. Bu adımı atlamak, kamu ve sosyal sektör etki iddialarının kasıtlı ya da kasıtsız olarak şişirilmesinin en yaygın yoludur — yalnızca brüt katılımcı sonuçlarını ölçen, karşılaştırma grubu olmayan bir hibe programı, kendi etkisini ne olursa olsun gerçekleşecek olandan ayıramaz.

Ölü ağırlık sabit bir yüzde değildir; tamamen belirli nüfus ve müdahale için karşı olgusala bağlıdır (bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/)). Önceki Bölgesel Kalkınma Ajansları döneminde İngiliz bölgesel kalkınma değerlendirmeleri, işletme desteğinin türüne bağlı olarak yaygın biçimde %20–60 aralığında ölü ağırlık oranları buldu; bu yüzden güvenilir program değerlendirmeleri tek bir varsayılan rakam yerine ölü ağırlığa göre düzeltilmiş bir aralık bildirir ve National Lottery Community Fund ile Big Society Capital gibi fon sağlayıcılar, hibe alanlardan brüt katılımcı sayılarını bildirmek yerine sonuç raporlamasında ölü ağırlığı açıkça ele almalarını şart koşar.

## Matematik

Birleşik Krallık değerlendirme rehberliğinde (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF ve yapısal fonlar değerlendirme rehberliği) belirtilen standart net etki düzeltme dizisi:

```
Brüt sonuç
  − Ölü ağırlık      (zaten gerçekleşecek olan)
  − Yer değiştirme   (başka yerden kaydırılan, yaratılmayan faaliyet/fayda — bkz.
                       displacement-and-attribution)
  − Sızıntı          (hedef grubun/alanın dışına akan fayda)
  × Çarpan           (olumlu olduğunda ek dolaylı/uyarılmış ekonomik faaliyet)
  = Net ek etki
```

Oran olarak ölü ağırlık:

```
Ölü ağırlık oranı = müdahale olmadan gerçekleşecek sonuçlar
                    / gözlenen toplam brüt sonuçlar

Net ek sonuçlar = Brüt sonuçlar × (1 − Ölü ağırlık oranı)
```

## Çalışılmış örnek

**İşletme destek hibe programı**: bölgesel bir hibe programı, desteklenen 500 işletmenin ertesi yıl istihdamı artırdığını, her birinin ortalama 3 iş eklediğini bildirir — 1.500 işlik brüt iddia.

Desteklenmeyen benzer işletmelerden oluşan eşleştirilmiş bir karşılaştırma grubu (bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/)), aynı dönemde eşleştirilmiş grubun performansına dayanarak, desteklenen işletmelerin istihdam büyümesinin %40'ının zaten gerçekleşeceğini gösterir.

```
Ölü ağırlık oranı = %40
Net ek iş sayısı = 1.500 × (1 − 0,40) = 900 iş
```

Programın dürüstçe bildirilebilir başarısı 1.500 değil, 900 iştir — yer değiştirme veya sızıntı henüz hesaba katılmadan, yalnızca ölü ağırlık düzeltmesinden kaynaklanan %40'lık bir düşüş.

**Hayır kuruluşu istihdam programı**: bir hayır kuruluşu, 200 uzun süreli işsizi 600.000 £ maliyetle (brüt yerleştirme başına 3.000 £) işe yerleştirir. Ulusal işgücü piyasası verileri, hiçbir müdahale olmasa da karşılaştırılabilir bir uzun süreli işsiz kohortunun kabaca %15'inin aynı dönemde doğal iş piyasası hareketliliği yoluyla iş bulduğunu gösterir.

```
Ölü ağırlık oranı = %15
Net ek yerleştirme = 200 × (1 − 0,15) = 170
Ek yerleştirme başına gerçek maliyet = 600.000 £ / 170 ≈ 3.529 £
```

Brüt yerleştirme başına maliyet rakamı (3.000 £), hayır kuruluşunun ek katkısının gerçek maliyetini kabaca %15 oranında olduğundan düşük gösterir.

## Yazılım mühendisliği bağlantısı

Ek katkı ve ölü ağırlık, kamu veya sosyal sektör için etki ölçüm ya da hibe yönetim yazılımı geliştiren herkes için doğrudan önemlidir:

- Sonuç raporlama sistemleri, yalnızca katılımcı sonuçlarını değil, tasarım gereği bir karşılaştırma veya temel grubunu da yakalamalıdır — karşı olgusalı olmayan bir sistem yayına girdikten sonra sonradan eklemek, yakalamayı baştan kurmaktan çok daha zordur (bkz. [karşı olgusal analiz](../karşı-olgusal-analiz/)).
- Yalnızca brüt katılımcı sayılarını bildiren gösterge panelleri, fon sağlayıcılara ve denetim kurumlarına etkiyi sistematik olarak olduğundan büyük gösterecektir; ölü ağırlık tahminleri mevcut olduğunda (değerlendirme literatüründen veya bir karşılaştırma grubundan), yazılım ölü ağırlıktan arındırılmış rakamı brüt rakamın yerine değil, yanında göstermelidir.
- Bu, SROI oranı ancak brüt iddia edilen sonuçlardan ölü ağırlık (ve yer değiştirme) çıkarıldıktan sonra güvenilir olan [sosyal yatırım getirisi](../sosyal-yatırım-getirisi/) ile doğrudan bağlantılıdır — bu adımı atlayan bir SROI hesaplayıcısı, incelemeden sağ çıkamayacak şişirilmiş oranlar üretir.

## Tuzaklar

- **Brüt sonuçları tamamı ek katkıymış gibi bildirmek.** Bu, hibe ve program raporlamasındaki en yaygın etki ölçüm hatasıdır; manşet bir sayı yayımlamadan önce her zaman "bu zaten gerçekleşir miydi?" diye sorun.
- **Tek bir ölü ağırlık yüzdesinin her yerde geçerli olduğunu varsaymak.** Ölü ağırlık sektöre, nüfusa ve yerel ekonomik koşullara göre büyük ölçüde değişir; ilgisiz bir değerlendirmeden bir rakamı yeniden kullanmak yerine bir karşılaştırma grubu veya sektöre özgü kanıt kullanın.
- **Ölü ağırlığı yer değiştirmeyle karıştırmak.** Ölü ağırlık aynı katılımcılar için karşı olgusal sonuçlarla ilgilidir; yer değiştirme diğer insanlar veya yerler üzerindeki etkilerle ilgilidir — bkz. [yer değiştirme ve atfetme](../yer-değiştirme-ve-atfetme/). İkisini karıştırmak, düzeltmenin iki kez sayılmasına veya eksik sayılmasına yol açar.
- **Katılımcılardan öz bildirimli ölü ağırlık.** Yararlanıcılara "yardımımız olmasaydı bu gerçekleşir miydi?" diye sormak sistematik olarak düşük ölü ağırlık tahminleri üretir (katılımcılar programa pay çıkarma eğilimindedir); bağımsız bir karşılaştırma grubu çok daha güvenilirdir.

## Kaynaklar

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
