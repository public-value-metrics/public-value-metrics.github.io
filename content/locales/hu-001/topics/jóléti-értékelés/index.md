# Jóléti értékelés (WELLBY)

A jóléti értékelés egy politika hatását közvetlenül az életelégedettség fogalmában árazza, egységként a WELLBY-t (jóléttel korrigált életév) használva — egy WELLBY egy 0–10-es életelégedettségi skálán egy pontnyi változásnak felel meg, egy éven át fenntartva. Ez a HM Treasury hivatalosan jóváhagyott alternatívája annak, hogy minden hasznot fizetési hajlandóságon keresztül váltsanak pénzre.

## Miért fontos

A HM Treasury „Wellbeing guidance for appraisal: supplementary Green Book guidance” (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) dokumentuma formálisan bevezette a szubjektív jóléti adatokat a központi kormányzati értékelésbe, utat adva az elemzőknek olyan eredmények értékeléséhez — társadalmi kapcsolat, mentális egészség, biztonság, állampolgári részvétel —, amelyeket a [kinyilvánított preferenciás](../kinyilvánított-preferenciákon-alapuló-értékelés/) és a [feltárt preferenciás](../feltárt-preferenciákon-alapuló-értékelés/) módszerek nehezen tudnak meggyőzően árazni, mert az emberek gyakran rosszul jósolják meg, mennyire fog egy jószág ténylegesen hatni életelégedettségükre. Az útmutató, amelyet a What Works Centre for Wellbeing-gel közösen dolgoztak ki, WELLBY-nként ajánlott pénzértéket állapít meg — 13 000 £ (2021-es árak, időszakosan felülvizsgálva) —, amelyet a nagy jóléti felmérésekben (elsősorban az ONS Annual Population Survey-ben, amely 2011 óta teszi fel a négy ONS4 jóléti kérdést) megfigyelt jövedelem és életelégedettség közötti összefüggésből vezettek le, átváltási árfolyamot adva az elemzőknek fontra, amikor más Green Book-értékelésekkel való pénzbeli összehasonlításra van szükség.

A módszer azért fontos, mert megfordítja a szokásos értékelési logikát: ahelyett hogy azt kérdezné, mit fizetnének az emberek egy eredményért (kinyilvánított preferencia), vagy hogy egy kapcsolódó piaci tranzakcióból következtetne az értékre (feltárt preferencia), közvetlenül méri az eredmény hatását a jelentett életelégedettségre, megkerülve a szakadékot aközött, amit az emberek mondanak, hogy akarnak, és ami ténylegesen jobbá teszi a helyzetüket. Ez egyben központi korlátja is — a jelentett életelégedettséget az alkalmazkodás és a keretezés hatásai befolyásolják, amelyeket a gondos szakembernek kontrollálnia kell.

## A matematika

```
WELLBY = 1 életelégedettségi pont (0–10-es skála) fenntartva 1 személynél 1 évig

Egy politika összes WELLBY-je =
  Σ (az életelégedettségi pontszám változása) × (az érintett személyek száma)
    × (időtartam években, a társadalmi diszkontrátával diszkontálva)

Pénzre váltott érték = Összes WELLBY × WELLBY-nkénti érték
  (HM Treasury ajánlott érték: 13 000 £ WELLBY-nként, 2021-es árak,
   időszakos felülvizsgálatnak alávetve — használat előtt ellenőrizzék az aktuális útmutatót)
```

Ez különbözik az egészség-gazdaságtani [jóléttel korrigált életévtől](../jóléttel-korrigált-életévek/), amelyet jellemzően az egészséggel kapcsolatos életminőségi skálákhoz (EQ-5D és hasonlók) horgonyoznak, nem az általános életelégedettséghez; a kettő rokon, de nem felcserélhető, és a Green Book-értékeléseknek kifejezettnek kell lenniük arról, melyik skála és kinyerési módszer áll egy jelentett WELLBY-szám mögött.

## Kidolgozott példa

**Helyi önkormányzat**: egy tanács közösségi barátságprogramot működtet elszigetelt idős lakosoknak, 400 embert szolgálva ki. Egy ONS4 életelégedettségi kérdést használó előtte-utána jóléti felmérés a résztvevők átlagpontszámának 5,8-ról 6,5-re emelkedését mutatja — 0,7 pontos nyereség —, amely a program 2 éves finanszírozott időtartama alatt fennmarad.

```
Létrehozott WELLBY = 400 személy × 0,7 pont × 2 év = 560 WELLBY
Pénzre váltott érték = 560 × 13 000 £ = 7,28 M£
A program költsége = 450 000 £ 2 évre

Haszon-költség arány ≈ 7,28 M£ / 0,45 M£ ≈ 16:1
```

Egy ilyen magas arány vizsgálatot kell kiváltson, nem ünneplést — a Green Book jóléti útmutatója kifejezetten óv attól, hogy kis mintás, önjelentett nyereségeket névértéken vegyenek, a szelekciós hatások ellenőrzése (csak a legtársaságkedvelőbb, leginkább javulásra hajlamos lakosok csatlakoztak a programhoz?) és összehasonlító csoport nélkül; egy jól megtervezett értékelés kivonná a nem résztvevőknél megfigyelt kontrafaktuális változást, lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/).

**Nemzeti kormányzat**: két foglalkoztatási program összehasonlítása WELLBY-vel a puszta kereset helyett azt ragadja meg, hogy a munkanélküliség a kieső jövedelmen túl is jóléti költséget hordoz — a brit jóléti kutatás következetesen azt találja, hogy a munkanélküliség jobban csökkenti az életelégedettséget, mint amit a jövedelemveszteség önmagában jósolna, a struktúra, a cél és a társas kapcsolat elvesztésének nem pénzbeli hatásai miatt. A csak keresetnyereségen értékelt program alulértékelné értékét ahhoz képest, amelyet kiegészítésként WELLBY-n is értékelnek.

## Kapcsolat a szoftverfejlesztéssel

A jóléti értékelés ritkán ér el közvetlenül mérnöki csapatokhoz, de alakítja, mit definiálnak „sikerként” a társadalmi szektor és a közszolgáltatások termékeinél — egy digitális barátságplatformnak, mentálhigiénés szűrőeszköznek vagy elszigetelt lakosoknak szóló közösségi platformnak számítania kell arra, hogy hatását végül így mérik, ami azt jelenti, hogy a termékanalitikának rögzítenie kell, *kit* érnek el és *mennyi ideig*, nem csak a használati számokat. A jóléti felmérés-műszerezést (ONS4 vagy validált megfelelői) építsék be a szolgáltatás értékelésébe az elejétől, ne utólag kapcsolják hozzá; a jóléti alapszint utólagos pótlása egy szolgáltatás indulása után teljesen elveszti az előtte-utána összehasonlítást. Lásd [eredmények és kibocsátások](../eredmények-és-kibocsátások/) és [hatásértékelési módszerek](../hatásértékelési-módszerek/).

## Buktatók

- **Nincs kontrafaktuális vagy összehasonlító csoport.** Az előtte-utána jóléti nyereség annak kontrollja nélkül, hogy mi történt volna úgyis, túlbecsüli a program hatását; lásd [kontrafaktuális elemzés](../kontrafaktuális-elemzés/) és [többlethatás és holtteher](../többlethatás-és-holtteher/).
- **Kis, önkiválasztott minták.** A programrésztvevők jóléti felmérései, akik önként jelentkeztek, szelekciós torzításra hajlamosak — akik csatlakoztak és maradtak, valószínűleg már eleve felfelé ívelő pályán voltak.
- **A £-per-WELLBY átváltás pontosnak tekintése.** A pénzre váltott érték szakpolitikai konvenció, amelyet jövedelem–jólét regressziókból vezettek le, nem piaci ár; a Green Book-értékelések közötti összehasonlíthatóságra használják, ne állításként arról, hogy a jólét „mennyit ér”.
- **A WELLBY összetévesztése az egészséggel kapcsolatos QALY-val.** A kettő különböző konstruktumokat mér különböző skálákon; lásd [jóléttel korrigált életévek](../jóléttel-korrigált-életévek/) az egészség-gazdaságtani változatért, és ne átlagolják őket egybe.

## Források

- HM Treasury. „Wellbeing guidance for appraisal: supplementary Green Book guidance.” 2021. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. „Personal well-being in the UK” (ONS4-mérések). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. „Wellbeing Valuation: A Nascent Field?” LSE / Simetrica kutatási összefoglalók.
