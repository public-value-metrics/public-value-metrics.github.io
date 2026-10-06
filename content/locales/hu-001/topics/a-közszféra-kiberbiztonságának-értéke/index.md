# A közszféra kiberbiztonságának értéke

A közszféra kiberbiztonságának értéke a kockázatcsökkentés árazásának fegyelme: mennyit ér az, hogy kisebb valószínűséggel következik be az állampolgári adatok sérülése, tekintettel arra, hogy a biztonsági kiadás működés közben nem hoz látható kimenetet, és kudarc esetén nagyon is láthatót? Egy olyan szolgáltatásnál, amely ellátási nyilvántartásokat, egészségügyi adatokat vagy adónyilvántartásokat tart, ez a „működés közben láthatatlan” tulajdonság éppen az oka annak, hogy kifejezett értékérvre van szüksége, nem csak megfelelőségi pipára.

## Miért fontos

Az Egyesült Királyság National Cyber Security Centre-jének Cyber Assessment Frameworkje (CAF) strukturált módot ad a közszféra szervezeteinek arra, hogy a biztonságot értékelhető, eredményalapú fegyelemmé tegyék ellenőrzőlista helyett: négy magas szintű célt határoz meg (a biztonsági kockázat kezelése, védelem kibertámadás ellen, a kiberbiztonsági események észlelése és az incidensek hatásának minimalizálása), amelyek hozzájáruló eredményekre bomlanak, és amelyek alapján a rendszer gazdája értékelhető, a [digitális szolgáltatási szabvány](../digitális-szolgáltatási-szabvány/) 9. pontjának („hozzon létre biztonságos szolgáltatást, amely védi a felhasználók magánéletét”) szellemében. Amitől a CAF-értékelés véd, annak dokumentált ára van: az IBM Cost of a Data Breach Reportja ágazatok szerint követi az átlagos adatvédelmi incidens költségét, és következetesen azt találta, hogy a közszféra a tartomány alsó vége felé esik a pénzügyi vagy egészségügyi szektorhoz képest — a legutóbbi kiadások a közszféra átlagát nagyjából 2,6–2,9 millió dollárra teszik incidensenként —, de az „alacsonyabb a pénzügyinél” nem „alacsony”, és a kormányzati incidensek olyan költségeket hordoznak, amelyeket a jelentés számai nem ragadnak meg teljesen: az állampolgári bizalom elvesztése a digitális csatornákban, ami lefelé nyomja a [digitális igénybevételt](../csatornaváltási-megtakarítások/), amelytől a csatornaváltási üzleti esetek függnek, és az olyan adatok kiszivárgásának politikai és jogi költsége, amelyeket az állam eleve az állampolgárokból kényszerített ki.

## A matematika

A biztonsági befektetést úgy értékelik, ahogy bármely kockázatcsökkentő kiadást: várható veszteség csökkenéseként, a klasszikus kockázatkezelési azonosság használatával.

```
Éves várható veszteség (ALE) = Egyszeri várható veszteség (SLE)
                              × Éves előfordulási ráta (ARO)

Egy biztonsági kontroll értéke =
  ALE_kontroll előtt − ALE_kontroll után − a kontroll éves költsége

Egy kontroll akkor éri meg a finanszírozást, ha:
  (ALE_előtte − ALE_utána) > a kontroll éves költsége

A CAF-értékelés nem ad közvetlenül valószínűséget, de egy szolgáltatás CAF-eredményprofilja
(mely hozzájáruló eredmények „elérve”, „részben elérve” vagy „nem elérve”) ésszerű
helyettesítő bemenet az ARO becsléséhez — a nem kezelt kiemelt hozzáférésű vagy nem tesztelt
incidenskezelési tervű rendszernek jelentősen magasabb a reális ARO-ja, mint annak, amelynek
mindkettője megvan.
```

## Kidolgozott példa

**Megyei tanács ügykezelő rendszere, amely 40 000 lakos szociális gondozási nyilvántartását tárolja**:

```
Egyszeri várható veszteség (incidensköltség), egy közelmúltbeli IBM Cost of a Data
Breach Report közszféra-átlagát használva ≈ 2,1 M£
(átszámolt, nagyságrendi szám — mindig az aktuális jelentéskiadásból vezessék le újra,
ne használjanak fix számot)

Jelenlegi ARO (nem kezelt kiemelt hozzáférés, nem tesztelt incidenskezelés,
belső CAF-önértékelés szerint, amely több „nem elért” eredményt mutat) ≈ becsült 8% évente
  ALE_előtte = 2,1 M£ × 0,08 = 168 000 £/év

Javasolt kontroll: kiemelt hozzáférés-kezelés + tesztelt incidenskezelési terv,
a releváns CAF-eredményeket „elértre” mozgatva, becslések szerint az ARO-t 3%/évre csökkentve
  ALE_utána = 2,1 M£ × 0,03 = 63 000 £/év

A kontroll éves költsége (eszközök + folyamat + tesztelés) = 45 000 £

A kontroll értéke = (168 000 − 63 000) − 45 000 = 60 000 £/év
  nettó pozitív — finanszírozzák. A számtan azt is mutatja, hogy a kontroll
  közel háromszoros költségen is megérné a finanszírozást, ami az a fajta
  érzékenységvizsgálat, amelynek minden becsült valószínűségre épülő ALE-számot
  kísérnie kell.
```

## Kapcsolat a szoftverfejlesztéssel

Az ALE-egyenlet legtöbb karját a mérnökök birtokolják: a hozzáférés-vezérlés tervezése, a függőségek és a javítások higiéniája, a naplózás és észlelés lefedettsége, valamint az incidenskezelési eszközök mind közvetlenül mozgatják az ARO tagot, ezért olvasható a CAF-értékelés ugyanannyira műszaki architektúra-felülvizsgálatként, mint szakpolitikai auditként. Ez a [technikai adósság mint közérték-erózió](../technikai-adósság-mint-közérték-erózió/) a legakutabb formájában — a javítatlan, nem monitorozott, rosszul hozzáférés-védett rendszerek olyan adósság, amelynek kamatfizetése a farokkockázat, nem állandó teher —, és egyeztetni kell a [teljes birtoklási költséggel a kormányzati IT-ban](../teljes-birtoklási-költség-a-kormányzati-it-ban/), hogy a biztonsági kiadást ne kezeljék a rendszer valódi üzemeltetési költségétől elkülönítve. Közvetlen bemenete az [érték a pénzért](../érték-a-pénzért/) értékeléseknek is a Green Book alatt: a kockázattal korrigált költség bármely változatértékelés „költség” oldalának része, nem utólag hozzácsavarozott gondolat.

## Buktatók

- **A CAF-önértékelés kezelése magaként a biztonságként**: egy elkészült értékelés biztonsági helyzetet ír le; nem teremt ilyet — az érték az elért eredményekben van, nem a dokumentumban.
- **Globális átlagos incidensköltségek használata helyi becslésként korrekció nélkül**: az IBM számai nagy, változatos mintákon számolt átlagok; egy kis helyi önkormányzat reális egyszeri várható vesztesége ritkán azonos egy nemzeti kormányzati tárcáéval.
- **A farokkockázat-pszichológia figyelmen kívül hagyása a befektetési döntésekben**: az alacsony éves valószínűség könnyűvé teszi a biztonsági kiadás határozatlan elhalasztását, egészen addig az évig, amikor mégis bekövetkezik — az ALE-számítás érzékenységvizsgálata különböző ARO-tartományokkal, mint a kidolgozott példában, ezt ellensúlyozza.
- **Csak az IBM-stílusú incidensköltség számítása, a bizalmi költség nélkül**: az az incidens, amely csökkenti az állampolgárok hajlandóságát digitális csatornák használatára, évekig rombolja a [csatornaváltási megtakarítások](../csatornaváltási-megtakarítások/) esetét, ez a költség ritkán szerepel az incidensköltség-becslésekben.

## Források

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, 9. pont: hozzon létre biztonságos szolgáltatást, amely védi a felhasználók magánéletét. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
