# Nyílt adatok értéke

A nyílt adatok értéke az a probléma, hogy megbecsüljük, mennyit ér a kormányzati és közadat, ha nincs ára: nem adják el, így nincs bevételi sora, ám közzétételük (időjárási feljegyzések, közlekedési menetrendek, irányítószám-határok, cégnyilvántartások) kimutathatóan gazdasági és társadalmi tevékenységet generál lefelé. A jó értékelés azért számít, mert mind a „közzétenni ingyen van”, mind az „értéktelen” téves, és egy szoftvermérnöknek, aki azt dönti el, megnyisson-e egy API-t vagy adatkészletet, jobb érvre van szüksége, mint bármelyik.

## Miért fontos

A legtöbbet idézett felülről lefelé építkező becslés a McKinsey Global Institute 2013-as „Open data: Unlocking innovation and performance with liquid information” jelentéséből származik, amely a nyílt adatok éves potenciális értékét hét területen — oktatás, közlekedés, fogyasztási termékek, villamos energia, olaj és gáz, egészségügy és fogyasztói pénzügyek — világszerte évi 3–5 billió dollárra tette, olyan mechanizmusokon keresztül, mint a fokozott átláthatóság, a kínálat és kereslet hatékonyabb összehangolása, és az adatokra épülő új termékek és szolgáltatások lehetővé tétele. Ez a szám forgatókönyv-becslés, nem mért tény, és rutinszerűen félreidézik úgy, mintha olyan bevétel lenne, amelyet a kormányzat közvetlenül megragadhat, holott az érték többnyire harmadik feleknél — vállalkozásoknál, kutatóknál, állampolgároknál — keletkezik, akik az adatokat használják, ami éppen a nyitás, és nem az eladás lényege. Az Egyesült Királyság Open Data Institute-ja, amelyet Sir Tim Berners-Lee és Sir Nigel Shadbolt alapított 2012-ben, azóta részletesebb, alulról építkező esettanulmányok testületét építette fel — ágazatonként, adatkészletenként —, amelyek egy valódi üzleti esethez jóval hasznosabbak, mint a McKinsey főcímszáma, mert az értékteremtés mechanizmusát mutatják, nem csak az összesített méretét.

## A matematika

A nyílt adatoknak nincs piaci áruk, ezért értékelési módszerek helyettesítik; három megközelítés ismétlődik, és egyik sem elégséges önmagában:

```
1. Elkerült költség / pótlási költség módszer:
   érték ≈ amit a felhasználók fizettek volna az egyenértékű adatok előállításáért
   vagy licencelésért — alsó határ, figyelmen kívül hagyja azt az értéket, amelyet az eredeti
   előállító által soha nem várt felhasználások teremtenek

2. Piaci analóg / lefelé irányuló tevékenység módszer:
   érték ≈ az adatokra épült vállalkozások/szolgáltatások által termelt bevétel vagy megtakarítás
   (pl. nyílt térkép- és forgalmi adatokra épült navigációs alkalmazások) — valódi gazdasági
   tevékenységet ragad meg, de nehéz tisztán az adatközzétételnek tulajdonítani
   (lásd additionality-and-deadweight)

3. Feltételes/kinyilvánított preferencia módszer:
   érték ≈ amennyit a felhasználók szerint fizetnének, vagy az idő, amelyet szerintük megtakarít
   — lásd stated-preference-valuation az általános módszerhez és torzításaihoz

Ezek egyike sem ad olyan tiszta számot, mint egy piaci ár; a hiteles nyílt adat üzleti esetek
legalább kettőt háromszögelnek, és kifejezetten megmondják, melyik mechanizmus végzi a munkát.
```

## Kidolgozott példa

**Szemléltető országos térkép-/címadat-közzététel** (az ODI-stílusú esettanulmányok módszertanát követve, a számok az ilyen tanulmányok jellemzően megtalált nagyságrendjét szemléltetik):

```
Elkerült költség becslés:
  Azok a vállalkozások, amelyek egyébként kereskedelmi licenccel szereznének egyenértékű
  címillesztési adatokat, becsült átlagos 4000 £/év licencköltséggel, a most az ingyenes
  nyílt adatkészletet használó becsült 15 000 KKV között
  = 15 000 × 4000 £ = 60 000 000 £/év csak az elkerült licencelési költségben

Lefelé irányuló tevékenység becslés (spekulatívabb, kontrafaktuálist igényel):
  Új szállítási útvonaltervező és logisztikai termékek, amelyek a nyílt adatok nélkül nem
  léteznének vagy lényegesen rosszabbak lennének — összehasonlítást igényel azzal a
  kontrafaktuálissal, hogy az adatok zártak vagy kereskedelmileg licencelve maradnak
  (counterfactual-analysis), mert e tevékenység egy része úgyis megtörténne fizetős adatokon
  magasabb áron, ami holtteher a „megnyitás által létrehozott érték” értelmében

Egy védhető üzleti eset az elkerült költség számot szilárd alsó határként jelenti,
és a lefelé irányuló tevékenység számot felső határ forgatókönyvként kezeli, nem tényként.
```

## Kapcsolat a szoftverfejlesztéssel

A mérnökök számára a gyakorlati nyílt adat-értékkérdés általában szűkebb, mint az országos főcímszámok: a konkrét API vagy adatkészlet megnyitása (ahelyett hogy partnermegállapodás mögött tartanák) elég újrahasznosítást növel-e ahhoz, hogy indokolja a nyilvános felületként való dokumentálás, verziózás és támogatás folyamatos költségét? Ez a karbantartási költség valódi, és a [kormányzat mint platform](../kormányzat-mint-platform/) egyszer-építünk-sokszor-használunk gazdaságtanának párja — a két téma közeli rokon, az egyik megosztott kódról és infrastruktúráról, a másik megosztott adatról szól. Minden nyílt adat-értékállítást ellenőrizzenek a [többlethatás és holtteher](../többlethatás-és-holtteher/) témával szemben, mielőtt üzleti esetbe kerül: az a tevékenység, amely úgyis megtörtént volna kereskedelmileg licencelt adatokon, nem a *megnyitás* által létrehozott érték.

## Buktatók

- **A McKinsey 3–5 billió dolláros számának idézése az Egyesült Királyságra vagy erre az adatkészletre jutó részként**: globális, hétágazatos, 2013-as forgatókönyv-becslés — pontos szorzóként használni egyetlen nemzeti adatkészletre, félreértelmezi, mit jelent a szám.
- **Nincs kontrafaktuális**: a nyílt adatokra épült összes lefelé irányuló gazdasági tevékenység érdemének beszedése anélkül, hogy megkérdeznék, mennyi történt volna úgyis fizetős vagy licencelt adatokon magasabb áron (lásd [többlethatás és holtteher](../többlethatás-és-holtteher/) és [kontrafaktuális elemzés](../kontrafaktuális-elemzés/)).
- **Az előállítási költség összetévesztése a létrehozott értékkel**: egy drágán gyűjtött adatkészlet közzététele nem automatikusan értékes, egy olcsó nem automatikusan alacsony értékű — az érték a lefelé irányuló használatot követi, nem a felfelé irányuló költséget.
- **A „nyitottság” folyamatos karbantartási költségének figyelmen kívül hagyása**: egy egyszeri CSV-kivonat közzététele nem azonos elköteleződés egy dokumentált, verziózott, támogatott nyílt API üzemeltetésével — az utóbbi alulfinanszírozása a bevezetési bejelentés után gyakori hibamód.

## Források

- McKinsey Global Institute, „Open data: Unlocking innovation and performance with liquid information” (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
