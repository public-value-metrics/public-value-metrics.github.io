# Standard digitální služby

GOV.UK Service Standard je brána, kterou musí projít každá digitální služba centrální vlády, než může být spuštěna: 14 zveřejněných bodů, posuzovaných nezávislým panelem na konci každé fáze dodání. Je to mechanismus, který mění „budujte dobré veřejné služby“ ze sloganu na rozhodnutí prošel/neprošel se stopou na papíře — a přímý potomek mandátu „digitální ve výchozím stavu“ z Government Digital Strategy 2012.

## Proč na tom záleží

Před existencí Service Standard bylo selhání vládního IT zřídka viditelné až do spuštění a zřídka přisouditelné rozhodnutí, na které by kdokoli mohl ukázat. Government Digital Strategy 2012 zavázala resorty k přepracování 25 nejobjemnějších transakčních služeb zaměřených na veřejnost jako „digitálních ve výchozím stavu“ a podepřela závazek mechanismem souladu: služby nemohly být spuštěny na GOV.UK bez absolvování hodnocení služby vůči tehdejšímu 26bodovému standardu (konsolidovanému na 18 v roce 2019 a dnes platnému 14bodovému standardu, pokrývajícímu tři skupiny — porozumění potřebám uživatelů, poskytování dobré služby a používání správné technologie). Hodnocení služby je skutečná událost: panel hodnotitelů GDS nebo resortu přezkoumá důkazy, vyslechne tým a vydá verdikt prošel, neprošel nebo „nesplněno“ u každého bodu, zveřejněný na stránce hodnocení služby. Neúspěšné hodnocení blokuje přesun služby ze soukromé bety do veřejné bety, nebo z bety do ostrého provozu — je to skutečná brána, nikoli přezkum.

## Matematika

Service Standard je rámec, nikoli vzorec, ale funguje jako stupňovitá rozhodovací struktura s branami:

```
Discovery  → Hodnocení alfa    → Hodnocení beta      → Hodnocení live
             (není povinné      (povinné před          (povinné před odstraněním
              pro všechny        spuštěním veřejné      štítku „beta“ a uzavřením
              služby, ale        bety)                  starého kanálu)
              doporučené)

Každé hodnocení: důkazy + rozhovor s týmem → verdikt panelu za bod
  Splněno / Částečně splněno / Nesplněno
Celkový výsledek: Prošel / Prošel s podmínkami / Neprošel (nutné opakované hodnocení)

Náklady neúspěchu ≈ náklady dalšího sprintu na nápravu
                   + zpoždění [úspor z přesunu kanálů](../úspory-z-přesunu-kanálů/),
                     které měla služba dodat
```

Bod 10 („definujte, jak vypadá úspěch, a zveřejňujte údaje o výkonnosti“) je to, co napájí [náklady na transakci](../náklady-na-transakci/) a [standardy služeb a metriky transakcí](../standardy-služeb-a-metriky-transakcí/) — Standard nařizuje měření, nejen službu.

## Praktický příklad

**Služba žádostí o bydlení místního úřadu**: tým města dosáhne hodnocení beta se službou, která splňuje 11 ze 14 bodů, ale neuspěje u bodu 5 („zajistěte, aby službu mohl používat každý“), protože neexistuje cesta s digitální asistencí pro žadatele bez přístupu k internetu, a u bodu 9, protože osobní údaje jsou zaznamenávány v prostém textu ve stopách chyb aplikace.

```
Přímé náklady neúspěchu:
  Termín opakovaného hodnocení: čekání 6–8 týdnů na další dostupný panel
  Sprint nápravy: 2 vývojáři × 3 týdny × 550 £/den ≈ 34 650 £
  Návrh kanálu s digitální asistencí: 1 výzkumník × 2 týdny ≈ 5 000 £

Náklady zpoždění: služba měla přesunout 40 % z 18 000 ročních dotazů na bydlení
z telefonních hovorů za 8,50 £ na digitální transakce za 0,20 £
  = 7 200 × (8,50 £ − 0,20 £) = 59 760 £/rok ušlo, poměrně za
    ~2měsíční zpoždění ≈ 9 960 £

Celkové náklady neúspěšného hodnocení ≈ 49 610 £
```

Smysl aritmetiky není v přesnosti — je v tom, že neúspěšné hodnocení má skutečnou, vypočitatelnou cenu, což je přesně důvod, proč má brána zuby.

## Souvislost s softwarovým inženýrstvím

Pro inženýry se Standard čte jako kontrolní seznam architektury a dodání stejně jako dokument politiky: bod 11 („vyberte správné nástroje a technologie“) a bod 12 („zveřejněte nový zdrojový kód“) jsou přímá inženýrská rozhodnutí a bod 14 („provozujte spolehlivou službu“) vyžaduje tytéž SLO a procesy řízení incidentů, jaké potřebuje každý produkční systém. Je to zastřešující rámec této kapitoly — [náklady na transakci](../náklady-na-transakci/) a [úspory z přesunu kanálů](../úspory-z-přesunu-kanálů/) jsou to, co se Standard snaží finančně chránit, [digitální inkluze](../digitální-inkluze/) je to, co má bod 5 zaručit, a komponenty [vlády jako platformy](../vláda-jako-platforma/) (GOV.UK Notify, Pay, One Login) splňují bod 13 („používejte a přispívejte k otevřeným standardům, společným komponentám a vzorům“) z velké části ve výchozím stavu. Viz také [stavět, nebo koupit ve vládě](../stavět-nebo-koupit-ve-vládě/), jak se bod „správných nástrojů“ projevuje v rozhodnutích o zadávání.

## Úskalí

- **Zacházení s hodnocením jako s kontrolním políčkem souladu v den spuštění**: týmy, které čtou 14 bodů poprvé týden před hodnocením beta, předvídatelně neuspějí; Standard má formovat rozhodnutí od discovery výše, nikoli je zpětně auditovat.
- **Hodnocení prototypu, nikoli služby**: efektní demo může projít přezkumem, který by ostrá, digitálně-asistenčně inkluzivní, incidenty řízená verze služby neprošla — hodnotitelé mají tuto mezeru zkoumat, ale samocertifikované drobnější služby ji často přeskočí.
- **Žádné opakované hodnocení před škálováním**: služba hodnocená při 5% rozjezdu nezůstává automaticky v souladu při 100 % — mění se zátěž, poptávka ze selhání a uživatelé okrajových případů.
- **Záměna Service Standard se systémem designu**: komponenty GOV.UK Design System splňují některé body (konzistence, přístupnost), ale Standard pokrývá také strukturu týmu, agilní praxi a etiku dat — dobře stylovaná služba může stále neuspět u bodů 2, 6 nebo 9.

## Zdroje

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, bod 14: provozujte spolehlivou službu. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, hodnocení služeb. <https://www.gov.uk/service-manual/service-assessments>
