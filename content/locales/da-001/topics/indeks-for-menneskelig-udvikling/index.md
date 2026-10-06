# Indeks for menneskelig udvikling (HDI)

HDI er FN's overskrifts-alternativ til at rangordne lande ved indkomst alene: det kombinerer levetidForventning, uddannelse, og indkomst ind i et enkelt tal mellem 0 og 1, på præmissen — argumenteret af økonom Amartya Sen og udviklet for FN af Mahbub ul Haq — at udvikling handler om at udvide, hvad mennesker kan gøre og være, ikke blot hvad de tjener. Det er blevet offentliggjort årligt i UN Development Programmes Human Development Report siden 1990.

## Hvorfor det betyder noget

Før HDI blev "udvikling" målt næsten helt af GNP pr. indbygger, hvilket ikke siger noget om, om vækst når almindelige menneskers sundhed eller uddannelse. Sens kapacitets-tilgang omRammede udvikling som udvidelsen af rigtige friHeder, og ul Haq gjorde det til et offentliggørbart indeks, UNDP kunne rangordne hvert land ved, hvilket tvang regeringer, der blev rige på indkomst alene men forsømte sundhed eller skoleGang, til at konfrontere en værre rangordning, end deres BNP antydede (Golf-olieStaterne og nogle ekstraktive økonomier er standard-eksemplerne). HDIs tre-vejs-struktur er også den direkte metodologiske forfader til [Multidimensional Poverty Index](../multidimensionelt-fattigdomsindeks/): begge afviser at lade en dimension købe tilbage et underSkud i en anden, ved brug af et geometrisk snarere end aritmetisk gennemsnit. UNDP offentliggør fulde tekniske noter og den underliggende data for hver udgave (<https://hdr.undp.org/data-center/human-development-index>), hvilket er den canoniske kilde for enhver, der bygger på indekset snarere end at genUdLede det.

## Beregningen

```
LevetidForventningsIndeks (LEI) = (LE − 20) / (85 − 20)

GennemsnitÅrSkoleGangIndeks      = gennemsnitlige år i
                                   skoleGang / 15
ForventetÅrSkoleGangIndeks       = forventede år i skoleGang
                                   / 18
UddannelsesIndeks (EI)           = (GennemsnitÅrIndeks +
                                   ForventetÅrIndeks) / 2

IndkomstIndeks (II)               = (ln(GNI pr. indbygger) −
                                   ln(100)) / (ln(75000) −
                                   ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometrisk gennemsnit af de
                                  tre delIndekser]
```

Det geometriske gennemsnit er bevidst: fordi det multiplicerer snarere end gennemsnitsBeregner, kan en meget høj score i en dimension ikke fuldt opVeje en meget lav score i en anden — et design UNDP adopterede i 2010 specifikt for at straffe uBalance, erstattende den tidligere aritmetisk-gennemsnit-formel.

## Gennemregnet eksempel

**Mellem-indkomst-land**: levetidForventning 72 år, gennemsnitlige år i skoleGang 8, forventede år i skoleGang 13, GNI pr. indbygger $12.000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

En HDI på 0,713 falder i UNDP's "høj human udvikling"-bånd (0,700-0,799); "meget høj" starter ved 0,800. Bemærk, hvor sensitiv resultatet er mod det svageste delIndeks: hvis gennemsnitlige år i skoleGang var 4 i stedet for 8 (MYSI = 0,267, EI = 0,494), falder HDI til (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — faldende et helt bånd — selv om intet andet ændrede sig.

## Forbindelse til softwareudvikling

- Det geometrisk-gennemsnit-mønster er direkte genBrugbart for enhver komposit-tjeneste- eller produkt-score, du ikke ønsker en stærk dimension dækker over en kritisk svag en — f.eks. at kombinere tilgængeligheds-, præstations-, og pålidelighedsScores for en statslig digital tjeneste multiplikativt snarere end ved vægtet gennemsnit, så en tjeneste, der er hurtig men uTilgængelig, ikke kan score "god".
- HDIs log-transformering af indkomst (faldende marginal værdi af en ekstra krone) er samme logik bag [distributionsVægtning](../distributionsmæssig-vægtning/) i vurdering: en ekstra $1.000 betyder langt mere for en fattig husholdning end en rig en, og at behandle begge lineært misPriser impact.
- Ethvert dashboard, der rapporterer et enkelt blandet "digital inklusion" eller "borgerResultater"-score, bør dokumentere sin aggregerings-formel lige så explicit som UNDPs tekniske noter gør — se [KPI'er i den offentlige sektor](../kpier-i-den-offentlige-sektor/) og [offentlig værdi scorecard](../offentlig-værdi-scorecard/).

## Faldgruber

- **At gennemsnitsBeregne i stedet for at bruge det geometriske gennemsnit.** Et aritmetisk gennemsnit lader høj indkomst maskere dårlig sundhed eller uddannelse helt; hele pointen med 2010-metodologi-ændringen var at stoppe den substitution.
- **At sammenligne HDI år-til-år, som var det inflation-justeret BNP.** UNDP reBaser periodisk indekset (ny minimum/maksimum-grænser, reviderede skoleGangs-lofter), så en rangordnings-ændring kan reflektere en metodologi-opdatering, ikke et rigtigt skift; kontrollér altid, hvilken HDR-udgave en figur kommer fra.
- **At behandle HDI som en fattigdoms-måling.** Det er et nationalt gennemsnit og siger intet om fordeling inden i et land; for det, brug [Multidimensional Poverty Index](../multidimensionelt-fattigdomsindeks/) eller UNDP's separate Inequality-adjusted HDI.

## Kilder

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
