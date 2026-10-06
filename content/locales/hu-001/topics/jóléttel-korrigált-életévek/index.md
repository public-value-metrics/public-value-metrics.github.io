# Jóléttel korrigált életévek (WELLBY)

A WELLBY az életelégedettség egy további pontja a szokásos 0–10-es jóléti skálán, egy személynél egy éven át. Ez az egészség-gazdaságtanban használt QALY szerkezeti megfelelője — egyetlen egység, amely lehetővé teszi olyan beavatkozások összehasonlítását, amelyek eredményeinek semmi más nincs közös bennük —, de a klinikai egészségi állapotok helyett szubjektív jólétre építve, és a HM Treasury „Wellbeing guidance for appraisal: supplementary Green Book guidance” (2021) című dokumentuma fekteti le.

## Miért fontos

A költség-haszon értékeléshez közös egység kell egy ifjúsági klub támogatás, egy közlekedésbiztonsági program és egy mentális egészségügyi szolgáltatás összehasonlításához, amelyek közül egyiknek sincs közös eredménymutatója. Az egészség-gazdaságtan ezt a klinikai beavatkozásokra a QALY-val oldotta meg: egy minőséggel korrigált életév, 0-tól (halott) 1-ig (teljes egészség) súlyozva. A HM Treasury jóléti útmutatója ugyanezt a logikát kiterjeszti a nem egészségügyi közkiadásokra, az ONS harmonizált életelégedettségi kérdését („Összességében mennyire elégedett manapság az életével?”, 0–10 között válaszolva) használva eredménylétraként egészségi állapot-index helyett. Az 1 WELLBY azt jelenti, hogy egy személy életelégedettsége egy teljes ponttal emelkedik egy éven át (vagy ezzel egyenértékűen, tíz ember elégedettsége fejenként 0,1 ponttal emelkedik egy évre — a WELLBY-k úgy összegződnek egy népességben, ahogy a QALY-k). A HM Treasury útmutatója szemléltető pénzértéket ad WELLBY-nként (nagyjából 13 000 £, 2019/20-as árakon), amelyet a szubjektív jóléti adatok és az életév értékének más megközelítései egyeztetésével vezettek le, lehetővé téve az értékelőknek, hogy pénzre váltsák azokat az eredményeket — magány csökkentése, közösségi kohézió, zöldterület-hozzáférés —, amelyeket a [jóléti értékelés](../jóléti-értékelés/) technikái korábban csak leírni tudtak, de nem összehasonlítani az egészségügyi vagy biztonsági kiadásokkal közös alapon.

## A matematika

```
WELLBY = Δ életelégedettség (0–10-es skála) × a változás fennmaradásának évei
         (az összes érintett személyre összegezve)

Pénzre váltott jóléti haszon = létrehozott WELLBY-k × érték WELLBY-nként (HMT referenciaérték)

vö. QALY = Δ egészségi állapot-hasznosság (0–1-es skála) × az adott állapotban eltöltött évek
```

A 0–10-es elégedettségi skála és a 0–1-es QALY-hasznossági skála átváltási lépés nélkül nem felcserélhető; a HM Treasury útmutatója tárgyalja a kettő egyeztetését, hogy például egy QALY-ban értékelt egészségügyi beavatkozás és egy WELLBY-ben értékelt társadalmi beavatkozás ne számítódjon csendben kétszer, és ne maradjon összehasonlíthatatlan ugyanabban a [Green Book-értékelésben](../green-book-értékelés/).

## Kidolgozott példa

**Helyi önkormányzati magány elleni szolgáltatás**: egy barátkozási program 400 elszigetelt idős lakost szolgál ki. Az utánkövető felmérések az átlagos életelégedettség 5,2-ről 6,0-ra emelkedését mutatják (0,8 pontos nyereség), és a hatás becslések szerint 2 évig tart, mielőtt elhalványul.

```
WELLBY-k = 400 személy × 0,8 pont × 2 év = 640 WELLBY

Pénzre váltott érték = 640 × 13 000 £ = 8 320 000 £
```

Az évi 300 000 £-os (2 év alatt 600 000 £) programköltséggel szemben a haszon-költség arány nagyjából 8 320 000 / 600 000 ≈ **13,9:1** — olyan szám, amely most ugyanabba az értékelési táblázatba kerülhet, mint egy egészségügyi program QALY-nkénti elkerült költsége vagy egy közlekedési program utazásiidő-megtakarítása.

**Jótékonysági szervezet, kisebb léptékben**: egy közösségi művészeti program 50 résztvevőt ér el 0,3 pontos mért elégedettségi nyereséggel, 1 évig tartva.

```
WELLBY-k = 50 × 0,3 × 1 = 15 WELLBY
Pénzre váltott érték = 15 × 13 000 £ = 195 000 £
```

## Kapcsolat a szoftverfejlesztéssel

- Bármely állampolgárokkal szembeni szolgáltatás, amely már gyűjt életelégedettségi vagy jóléti felmérési tételt (sok helyi önkormányzati és egészségügyi-gondozási platform ezt teszi, az ONS négy szabványos jóléti kérdését követve), közvetlenül kiszámíthatja a WELLBY-ket meglévő adatcsővezetékeiből, ahelyett hogy minden szolgáltatásváltozáshoz egyedi gazdasági értékelést rendelnének.
- A WELLBY-k a [Social Value Act](../társadalmi-érték-törvény/) jelentéshez vagy a [társadalmi megtérüléshez](../társadalmi-megtérülés/) építő mérnöki csapatoknak nemzetileg szabványosított, a HM Treasury által támogatott nevezőt adnak, elkerülve az egyedi „hatáspontszámok” elszaporodását, amelyek szerződések vagy szállítók között nem hasonlíthatók össze.
- Mivel a WELLBY-k személyekre és időre additívak, tisztán beépülnek az [eredményalapú elszámoltathatóság](../eredményalapú-elszámoltathatóság/) rendszerekben használt népességi szintű eredménykövetésbe — egy szolgáltatási irányítópult jelentheti a negyedévente létrehozott kumulatív WELLBY-ket úgy, ahogy egy egészségügyi rendszer a nyert QALY-kat jelenti.

## Buktatók

- **Annak feltételezése, hogy az önjelentett elégedettségi nyereségek teljes egészében a beavatkozásnak tulajdoníthatók** — kontrafaktuális nélkül (összehasonlító csoport vagy kontrollokkal rendelkező előtte/utána terv) nem lehet elkülöníteni a WELLBY-nyereséget az általános trendektől; lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/).
- **WELLBY-k és QALY-k egyeztetés nélküli keverése egyetlen összegben** — a HM Treasury útmutatója kifejezetten kimondja, hogy a kettő különböző skálákat és különböző mögöttes értékelméleteket használ; naiv összeadásuk kétszer számolja az átfedő jólétet.
- **A pénzbeli referenciaérték kritikátlan használata** — a font-per-WELLBY szám nemzeti átlagbecslés valódi bizonytalansági sávokkal; a HM Treasury útmutatója érzékenységvizsgálatot javasol, nem azt, hogy rögzített árfolyamként kezeljék.

## Források

- HM Treasury. „Wellbeing guidance for appraisal: supplementary Green Book guidance.” (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. „Personal well-being user guidance” (a négy szabványos jóléti kérdés).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. „The Green Book: Central Government Guidance on Appraisal and Evaluation.”
