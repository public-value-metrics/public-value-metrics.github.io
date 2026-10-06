# Társadalmi megtérülés (SROI)

A társadalmi megtérülés (social return on investment) olyan keretrendszer, amely az érték tág fogalmát — társadalmit, környezetit és gazdaságit — méri, pénzre váltja és számba veszi, majd a befektetett erőforrásokhoz viszonyított arányként fejezi ki, például így: „1,44 £ társadalmi érték minden befektetett 1 £-ra”. Azért alkották meg, hogy a pénzügyi számvitel logikáját kiterjessze azokra az eredményekre, amelyeket a piacok nem árazanak, a számvitel fegyelmének feladása nélkül: az SROI minden számának visszavezethetőnek kell lennie egy érintettek által meghatározott eredményre, egy bizonyítékbázisra és arra a kifejezett korrekcióra, hogy mi történt volna úgyis.

## Miért fontos

Az SROI-t a Social Value UK és a Social Value International gondozza, az SROI Network utódszervezetei, amelynek „A Guide to Social Return on Investment” (2012) című kiadványa ma is a hivatkozási módszertan. A keretrendszer hét alapelven nyugszik — vonják be az érintetteket, értsék meg, mi változik, értékeljék azt, ami számít, csak a lényegeset vegyék fel, ne állítsanak túl sokat, legyenek átláthatók, és ellenőriztessék az eredményt —, és a gyakorlatban a legtöbb SROI-jelentés éppen az ötödik alapelven, a „ne állítsanak túl sokat” elven bukik meg. A holtteher- és tulajdonítási korrekciók kihagyásával előállított arány nem SROI; egy SROI ruháját viselő marketingszám. A jótékonysági szervezeteknek, szociális vállalkozásoknak vagy megrendelőknek jelentéskészítő eszközt építő szoftvermérnököknek tudniuk kell a különbséget, mert az eszköz vagy érvényesíti a fegyelmet, vagy megkönnyíti a kihagyását.

## A matematika

Az SROI a [változáselméletre](../változáselmélet/) támaszkodik annak azonosításához, mely eredmények tartoznak a hatókörbe, és ugyanazt az elszámoltathatósági láncot használja, mint a [logikai modell](../logikai-modell/):

```
SROI-arány = Az eredmények jelenértéke / A ráfordítások értéke

Folyamat:
 1. Állapítsák meg a hatókört és azonosítsák azokat az érintetteket, akiknek az eredményeit mérik
 2. Térképezzék fel az eredményeket (változáselmélet, érintettekkel igazolva, nem feltételezve)
 3. Támasszák alá bizonyítékkal az eredményeket, és adjanak nekik értéket pénzügyi helyettesítőkkel
 4. Állapítsák meg a hatást: bruttó érték − holtteher − tulajdonítás − kiszorítás, majd alkalmazzák a lecsengést
 5. Számítsák ki az SROI-t: a hatás nettó jelenértéke ÷ a ráfordítások értéke
 6. Jelentsék, használják és ágyazzák be — az arány kommunikációs eszköz, nem végpont
```

A holtterhet, a tulajdonítást és a kiszorítást a [többlethatás és holtteher](../többlethatás-és-holtteher/), illetve a [kiszorítás és tulajdonítás](../kiszorítás-és-tulajdonítás/) témák tárgyalják; mindhárom azt szolgálja, hogy a bruttó eredményből elkülönítsék a valódi [kontrafaktuális](../kontrafaktuális-elemzés/) hatást.

## Kidolgozott példa

**Helyi önkormányzati foglalkoztatási program**: éves ráfordítás 250 000 £. Hatvan résztvevő kerül tartós munkába; az eredmény pénzügyi helyettesítője (a jóléti javulás, a csökkent juttatásfüggőség és az adóbevétel együtt) az első évben 8500 £ fejenként — ilyen helyettesítők forrásáról lásd az [egységköltség-adatbázisokat](../egységköltség-adatbázisok/).

- Bruttó eredményérték: 60 × 8500 £ = 510 000 £
- Levonva a holtteher (40% valószínűleg a program nélkül is talált volna munkát): 510 000 £ × 0,60 = 306 000 £
- Levonva a tulajdonítás (a megmaradó változás 30%-a más szervezetek támogatásának köszönhető): 306 000 £ × 0,70 = 214 200 £
- A 2. évi eredmény 30%-os lecsengéssel: 214 200 £ × 0,70 = 149 940 £, évi 3,5%-kal diszkontálva (lásd [társadalmi diszkontráta](../társadalmi-diszkontráta/)): 149 940 £ ÷ 1,035 = 144 870 £
- A hatás összes jelenértéke: 214 200 £ + 144 870 £ = 359 070 £
- **SROI-arány: 359 070 £ ÷ 250 000 £ = 1,44**, így jelentik: „1,44 £ társadalmi érték minden befektetett 1 £-ra”

**Jótékonysági szervezet**: egy 60 000 £-os barátkozási szolgáltatás 80 idős ember magányosságát csökkenti, amelyet fejenként évi 1100 £-os helyettesítővel értékelnek. A bruttó érték 88 000 £; 35% holtteher és 15% tulajdonítás után a nettó hatás 88 000 £ × 0,65 × 0,85 = 48 620 £, az SROI-arány 0,81 — a nullszaldó alatt, ami jogos és hasznos megállapítás, nem a jelentés kudarca.

## Kapcsolat a szoftverfejlesztéssel

Az az SROI-kalkulátor, amely lehetővé teszi az eredményszámok és a helyettesítő értékek megadását, de nincs kötelező mezője a holtteherre, a tulajdonításra vagy egy kapcsolódó változáselméletre, alapértelmezetten felfújt arányokat állít elő, mert a korrekciók kihagyása a legkisebb ellenállás útja. A fegyelmet építsék be a sémába: minden eredménysor hivatkozzon egy érintetti csoportra, egy igazolt mennyiségre, egy forrással ellátott pénzügyi helyettesítőre, és a holtteher-/tulajdonítási mezők ne legyenek opcionálisak. Az SROI eredménytérképezése által feltételezett megkülönböztetésről lásd az [eredmények és kibocsátások](../eredmények-és-kibocsátások/) témát, az eszköz adatmodelljének tükrözendő láncáról pedig a [logikai modellt](../logikai-modell/).

## Buktatók

- **A holtteher és a tulajdonítás kihagyása.** A korrekciók nélküli főszám bruttó, nem nettó hatásadat, és a Social Value UK alapelvei mindkettőt kifejezetten megkövetelik.
- **Arányok összehasonlítása szervezetek között.** Az SROI-arány az esetenként hozott hatókör- és helyettesítő-választásoktól függ; ha az egyik jelentés 4:1-es arányát jobbnak tekintjük egy másik 2:1-es arányánál, azzal figyelmen kívül hagyjuk, hogy a feltevések nem szabványosítottak úgy, mint a pénzügyi számviteli mutatók.
- **Átfedő helyettesítők kétszeres számítása.** A „csökkent magányosság” és a „javult mentális jólét” helyettesítőinek ugyanarra a kedvezményezettekre való halmozása egyetlen mögöttes változást kétszer értékelhet.
- **Az érintettek bevonásának kihagyása.** Az első alapelv szerint az eredményeket az azokat megélő emberekkel együtt kell meghatározni, nem a modellt építő elemző feltételezése alapján.

## Források

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, „A Guide to Social Return on Investment” (2012).
- Social Value International, „The Principles of Social Value.” <https://www.socialvalueint.org/principles>
