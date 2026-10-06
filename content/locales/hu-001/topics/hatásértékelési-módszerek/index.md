# Hatásértékelési módszerek

A hatásértékelési módszerek azok a statisztikai és kísérleti tervek, amelyekkel megbecsülik, mit okozott ténylegesen egy szakpolitika vagy program, megkülönböztetve attól, ami úgyis megtörtént volna — a randomizált kontrollált vizsgálatok (RCT), a különbségek különbsége, a hajlamossági pontszám szerinti párosítás és a regressziós diszkontinuitás a négy leggyakrabban használt módszer a brit közpolitikában. Azért léteznek, mert a legtöbb kormányzati beavatkozást nem lehet laboratóriumban tesztelni: nem lehet úgy randomizálni, melyik város kap új buszjáratot, ahogy azt, melyik beteg kap gyógyszert, ezért ezek a módszerek ugyanazt az ok-okozati logikát kölcsönzik, véletlen beosztás nélkül is.

## Miért fontos

A HM Treasury Magenta Bookjának A. melléklete a kvázikísérleti módszerekről a brit kormányzat kanonikus útmutatója e tervek közötti választáshoz, és az olyan szervek, mint az Education Endowment Foundation és a What Works Centre for Local Economic Growth, ezek köré építenek bizonyítékhierarchiát — RCT-k, ahol a randomizálás megvalósítható és etikus, kvázikísérleti tervek, ahol nem. A módszerválasztás nem technikai utógondolat: ez dönti el, hogy egy értékelés megválaszolhatja-e a „okozta-e ezt a program?” kérdést, vagy csak azt, hogy „megtörtént-e ez a program indulása után?”, ami ugyanaz a kérdés, amelyet a [kontrafaktuális elemzés](../kontrafaktuális-elemzés/) arra szolgál, hogy a szakemberek feltegyék bármilyen értékelés megrendelése előtt.

## A matematika

```
RCT:
  Hatás = átlag(eredmény | kezelt csoport) − átlag(eredmény | kontrollcsoport)
  (érvényes, mert a kezelésre való beosztás véletlenszerű)

Különbségek különbsége (DiD):
  Hatás = [eredmény_utána(kezelt) − eredmény_előtte(kezelt)]
        − [eredmény_utána(kontroll) − eredmény_előtte(kontroll)]
  („párhuzamos trendek” feltevést igényel: a kezelt és a kontroll a beavatkozás hiányában
   együtt mozdult volna)

Hajlamossági pontszám szerinti párosítás (PSM):
  1. Becsüljék a P(kezelés = 1 | X kovariánsok) értéket minden egységre → hajlamossági pontszám
  2. Párosítsák a kezelt egységeket hasonló hajlamossági pontszámú kezeletlen egységekkel
  3. Hatás = átlag(eredmény | kezelt) − átlag(eredmény | párosított kontroll)

Regressziós diszkontinuitás (RDD):
  Hatás = az eredményben a jogosultsági küszöbnél megfigyelt ugrás,
          a határ közvetlenül fölötti és alatti egységeket összehasonlítva
```

## Kidolgozott példa

**Helyi önkormányzat (különbségek különbsége egy „bajba jutott családok” programra)**: az eredmény az iskolai részvétel. A kezelt terület a program időszaka alatt 84%-ról 89%-ra (+5 százalékpont) javul; egy összehasonlítható, de kezeletlen terület ugyanebben az időszakban 85%-ról 87%-ra (+2 százalékpont). DiD hatásbecslés: 5 − 2 = +3 százalékpont, a programnak tulajdonítható. A kezelt terület 2000 tanulójából álló kohorszra alkalmazva ez nagyjából 60 további tanulónak (3% × 2000) felel meg, akik a magasabb részvételi kategóriába kerülnek — ezt az extrapolációt a párhuzamos trendek fenntartásával együtt kell jelenteni, nem pontos létszámként.

**Jótékonysági szervezet (hajlamossági pontszám szerinti párosítás egy foglalkoztathatósági szervezetnél)**: 300 programrésztvevőt párosítanak 300 személlyel egy nagyobb adminisztratív adatkészletből, életkorból, korábbi foglalkoztatási előzményekből és képzettségi szintből épített hajlamossági pontszámokkal. Tizenkét hónapos foglalkoztatási arány: a párosított kezelt csoport 46%, a párosított összehasonlító csoport 33%. PSM hatásbecslés: 46% − 33% = +13 százalékpont, a programnak tulajdonítható, feltéve, hogy nincs olyan meg nem figyelt zavaró tényező (például motiváció), amely mind a részvételt, mind az eredményt mozgatja.

## Kapcsolat a szoftverfejlesztéssel

Hogy e tervek bármelyike később kivitelezhető-e, nagyban függ a korán hozott adatmérnöki döntésektől. Az RDD-hez pontosan rögzített futóváltozó és valóban tiszta jogosultsági küszöb kell; a DiD-hez összehasonlítható panel-adatok időben mind a kezelt, mind az összehasonlító területekre, ami következetes összekapcsolásokat jelent rendszerek és évek között; a PSM-hez gazdag, a kezelés előtt rögzített alap-kovariáns adatok kellenek, nem utólag rekonstruáltak. A [változáselmélettel](../változáselmélet/) és a [logikai modellel](../logikai-modell/) kezdettől együtt tervezett adatmodell — amely rögzíti az alap-kovariánsokat, a dátumokat és az összehasonlító csoportba kerülhető rekordokat — teszi lehetővé a szigorú hatásértékelést később, a drága utólagos kapkodás helyett. Az a kiegészítő kérdés, amelyre ezek a módszerek önmagukban nem válaszolnak: lásd [hatásértékelés és folyamatértékelés](../hatásértékelés-és-folyamatértékelés/).

## Buktatók

- **RCT erőltetése, ahol megvalósíthatatlan vagy etikátlan**, vagy fordítva, a kvázikísérleti terv meg sem fontolása, amikor erre valódi lehetőség — egy szakpolitikai küszöb, fokozatos bevezetés — adódott és kihasználatlan maradt.
- **A párhuzamos trendek feltevésének figyelmen kívül hagyása a DiD-nél.** Ha az összehasonlító terület már a beavatkozás előtt távolodott a kezelttől, a kétpontos összehasonlítás szennyezett; ellenőrizzék az előzetes trendeket, ne csak az előtte/utána értékeket.
- **Csak megfigyelt kovariánsokra párosítás a PSM-nél.** A meg nem figyelt szelekció, például a résztvevők motivációja, akkor is torzíthatja a becslést, ha a megfigyelt kovariánsok jól kiegyensúlyozottak.
- **A futóváltozó manipulálása az RDD-nél.** Ha az emberek befolyásolhatják pontszámukat, hogy éppen a jogosultsági küszöbön belülre essenek, a diszkontinuitás már nem különít el ok-okozati hatást.

## Források

- HM Treasury, Magenta Book (2020), A. melléklet: Kvázikísérleti módszerek. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, a bizonyítékáttekintések módszertana. <https://whatworksgrowth.org/>
- Education Endowment Foundation, értékelési útmutató. <https://educationendowmentfoundation.org.uk/>
