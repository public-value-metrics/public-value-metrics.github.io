# Többszempontú döntéselemzés (MCDA)

Az MCDA a változatokat több, külön súlyozott szempont szerint egyszerre pontozza és súlyozza, rangsorolt összehasonlítást adva anélkül, hogy minden szempontot egyetlen pénzbeli vagy természetes egység-skálára kényszerítene. Ez az értékelési módszer olyan döntésekhez, ahol a fontos eredmények valóban nem redukálhatók egyetlen számra.

## Miért fontos

A Green Book kifejezetten helyesli az MCDA-t (a 2. keret esettanulmány-függeléke és az A. melléklet közvetlenül tárgyalja) olyan értékelésekhez, ahol a hasznok „valóban összemérhetetlenek” — ahol mindent pénzre váltani a [társadalmi költség-haszon elemzéssel](../társadalmi-költség-haszon-elemzés/), vagy egyetlen eredményre a [költséghatékonysági elemzéssel](../költséghatékonysági-elemzés-a-kormányzatban/), inkább eltorzítaná a döntést, mint tisztázná (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Egy új börtön helyszínválasztása például a tőkeköltséget a közösségi hatással, a közlekedési kapcsolattal, a környezeti hatással és a személyzet toborozhatóságával mérlegeli — szempontok, amelyeknek nincs közös egységük, és ahol a közös egység (tipikusan a pénz) kikényszerítése értékítéletet csempészne be, mondjuk a környezeti hatás és a költség relatív fontosságáról, objektív aritmetikának álcázva.

Az MCDA őszintesége egyben fő sebezhetősége is: mivel a súlyokat az értékelés lebonyolítója (vagy egy testület) osztja ki, a módszer csak annyira legitim, mint a súlyozási folyamat. A Green Book útmutatója kifejezett, hogy a szempontokat és a súlyokat a változatok pontozása *előtt* kell megállapodni és közzétenni, éppen azért, hogy egy felülvizsgáló ne dolgozhasson visszafelé egy preferált változattól az azt igazoló súlyokig.

## A matematika

```
Minden i változatra és j szempontra:
  Pontszám_ij = a változat teljesítménye az adott szemponton (gyakran 0–100
                vagy 1–10, bizonyítékból, szakértői ítéletből vagy érintetti pontozásból)
  Súly_j      = a j szempont relatív fontossága, a súlyok összege 1 (vagy 100)

Az i változat súlyozott pontszáma = Σ_j (Pontszám_ij × Súly_j)

Eljárás:
1. Állapodjanak meg a szempontkészletben és a súlyokban bármely változat pontozása ELŐTT
   (swing weighting vagy páros összehasonlítás, pl. AHP, gyakori kinyerési módszerek).
2. Pontozzák minden változatot minden szempont szerint közös skálán, ahol lehet
   bizonyítékból.
3. Számítsák ki a súlyozott összegeket; rangsorolják a változatokat.
4. Érzékenységvizsgálat a súlyokra: kibírja-e a rangsor a hihető
   vitát arról, mennyit számítson az egyes szempont?
```

Az MCDA nem ad védhető abszolút értéket, ahogy az SCBA nettó jelenértéke — csak a megállapodott súlyoktól feltételezett rangsort. Ez erény, ha a döntés valóban összemérhetetlen javak közötti kompromisszumról szól, és teher, ha a pénzre váltás nehezebb munkájának kikerülésére használják, ahol az pénzre váltás valójában lehetséges volt.

## Kidolgozott példa

**Helyi önkormányzat**: egy tanács, amely egy új háztartási hulladékgyűjtő telep helyszínét választja, három telephelyet pontoz négy szempont szerint, amelyeket egy tárcaközi testület súlyozott bármely helyszíni látogatás előtt:

```
Szempontok (súly):        Tőkeköltség (30%)  Közlekedési elérhetőség (25%)
                          Közösségi hatás (25%)  Környezeti hatás (20%)

A telephelyek pontszámai (0–100, magasabb = jobb):
A telephely: költség 80, elérhetőség 60, közösség 40, környezet 70
B telephely: költség 60, elérhetőség 90, közösség 70, környezet 50
C telephely: költség 90, elérhetőség 50, közösség 80, környezet 60

Súlyozott összegek:
A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

A C telephely végez az élen. Az az érzékenységi futás, amely a közösségi hatás súlyát 25%-ról 35%-ra emeli (10 pontot elvéve a tőkeköltségtől), C összegét 71,5 − 3 + 8 = 76,5-re, B-ét 68 − 6 + 7 = 69-re változtatja — C továbbra is vezet, így a rangsor ellenáll ennek a hihető súlyozási vitának, éppen azt az ellenőrzést, amelyet a Green Book jelentve látni vár.

**Jótékonysági szervezet**: egy támogatásokat adó alapítvány, amely adósságtanácsadás, élelmiszerbank-hálózat és pénzügyi műveltségi program között választ, MCDA-t használ a SROI helyett (lásd [társadalmi megtérülés](../társadalmi-megtérülés/)), éppen mert a kurátorok jóhiszeműen nem értenek egyet abban, hogy a válságsegély vagy a megelőzés számítson-e többet — az MCDA lehetővé teszi, hogy az egyet nem értés *alakjában* (súlytartományban) megegyezzenek, ahelyett hogy úgy tennének, mintha egyetlen SROI-arány eldöntené.

## Kapcsolat a szoftverfejlesztéssel

Az MCDA a természetes eszköz a szállító- és architektúraválasztáshoz, amikor a szempontok valóban ütköznek — a felhőben üzemeltetett és a helyi telepítésű ügykezelő rendszer közötti választás költséget, adatszuverenitási kockázatot, akadálymentességet és szállítási sebességet mérlegel olyan módokon, amelyek nem redukálhatók egyetlen számra. A mérnöki vezetőknek ragaszkodniuk kell ahhoz, hogy a súlyozás a változatok pontozása előtt történjen, pontosan ahogy a Green Book megköveteli, mert a szűkített lista megtekintése után lefolytatott súlyozási gyakorlat megbízhatóan afelé sodródik, amelyet a terem már eleve kedvelt. Lásd [építeni vagy venni a kormányzatban](../építeni-vagy-venni-a-kormányzatban/) az MCDA gyakori alkalmazásához, és a [közérték-eredménylap](../közérték-eredménylap/) rokon strukturált pontozóeszközhöz, amelyet a döntés után, nem előtte használnak.

## Buktatók

- **Súlyok megállapítása a változatok ismerete után.** Ez a leggyakoribb mód, ahogyan az MCDA-val visszaélnek, szándékosan vagy sem; a súlyokat a pontozás előtt tegyék közzé, és jegyezzék fel, ki állapította meg őket.
- **A súlyozott összeg kemény számként kezelése.** A 71,5 és 68 közötti különbség nem statisztikailag értelmes rés, hacsak az érzékenységi elemzés nem erősíti meg, hogy a rangsor stabil; tartományokat jelentsenek, ne hamis pontosságot.
- **Az MCDA használata egy valójában megvalósítható pénzre váltás elkerülésére.** Ha a legtöbb szempont hitelesen árazható lenne, az [SCBA](../társadalmi-költség-haszon-elemzés/) helyetti MCDA-ra váltás eldobja azt az információt, amelyet az értékelés felhasználhatott volna.
- **Egyetlen domináns érintett engedése, hogy egyedül állapítson meg minden súlyt.** A Green Book bevált gyakorlata szerint a súlyokat reprezentatív testülettől kell kinyerni, nem a szponzor igazgatótól, hogy az értékelés ne pusztán azt vezesse le újra, amit az illető eleve akart.

## Források

- HM Treasury. „The Green Book: appraisal and evaluation in central government.” 2022, A. melléklet (többszempontú döntéselemzés) és a 2. keret esettanulmányai. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. „Multi-criteria analysis: a manual.” 2009. <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. „Multiple Criteria Decision Analysis: An Integrated Approach.” Kluwer, 2002.
