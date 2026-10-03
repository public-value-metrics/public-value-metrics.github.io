# Multidimensional Poverty Index (MPI)

MPI måler fattigdom som overlappende deprivationer, en person oplever samtidigt — i sundhed, uddannelse, og levestandarder — snarere end som indkomst alene faldende under en linje. Det blev udviklet af Oxford Poverty and Human Development Initiative (OPHI) med Sabina Alkire og James Foster, og er blevet offentliggjort sammen med UNDP i hver Human Development Report siden 2010, sammen med [Human Development Index](../human-development-index/).

## Hvorfor det betyder noget

IndkomstFattigdoms-linjer misser mennesker, der har nok kontant-indkomst men mangler rent vand, skoleGang, eller overLever et barns død — og de misser faktaen, at deprivationer klyngeSamler: en husholdning uden elektricitet er disproportionalt sandsynlig også at mangle sanitation og have et underErnæret barn. Alkire-Foster-metoden, som MPI er bygget på, tæller hver persons deprivationer over ti indikatorer grupperet ind i tre lige-vægtede dimensioner — sundhed, uddannelse, levestandarder — og klasseFicerer kun nogen som "MPI-fattig," hvis deres vægtede deprivations-score krydser en fast tærskel, og fanger overlap, et sæt separate enkelt-indikator-statistikker ikke kan. OPHI offentliggør den fulde metodologi og lande-data på <https://ophi.org.uk/multidimensional-poverty-index/>; den globale MPI, den vedligeholder sammen med UNDP, dækker nu over 110 lande. For software bygget for anti-fattigdom-programmer — kontant-overførsler, socialOmsorgs-triage, hjælp-målretning — er MPIs indikator-sæt ofte det nærmeste til en standardiseret deprivations-skema allerede valideret over dusinVis af nationale statistikKontorer.

## Beregningen

```
10 indikatorer, 3 dimensioner, hver dimension vægtet 1/3:

Sundhed (1/3):            ernæring (1/6), børneDødelighed (1/6)
Uddannelse (1/3):          år i skoleGang (1/6), skoleFremmøde
                          (1/6)
Levestandarder (1/3):      madlavnings-brændstof, sanitation,
                          drikkeVand, elektricitet, bolig,
                          aktiver (1/18 hver)

DeprivationsScore (c) = sum af vægte af indikatorer, en person
                        er deprivet i

person er "MPI-fattig", hvis c ≥ 1/3 (fattigdoms-afSkæringen,
k = 33%)

H (hovedTælling-rate)  = antal MPI-fattige / samlet befolkning
A (intensitet)          = gennemsnitlig deprivations-score
                         blandt de MPI-fattige alene

MPI = H × A
```

Fordi MPI multiplicerer *andelen*, der er fattige, med *hvor* fattige de er, kan to regioner med samme hovedTælling-rate have meget forskellige MPI-scores, hvis deprivationer er mere alvorlige i en — samme "ingen substitution over dimensioner"-logik bag HDIs geometriske gennemsnit.

## Gennemregnet eksempel

**National undersøgelse af 1.000 mennesker**: 350 identificeres som multiDimensionalt fattige (deprivations-score ≥ 33%). Blandt netop de 350 fattige individer er den gennemsnitlige deprivations-score 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**At sammenligne to distrikter med lige hovedTælling**: Distrikt A har H = 0,30 og A = 0,40 (mange fattige, moderat deprivede); Distrikt B har H = 0,30 og A = 0,60 (samme antal fattige, men mere alvorligt deprivede — manglende elektricitet *og* sanitation *og* skoleFremmøde samtidigt).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Samme hovedTælling-rate, 50% højere MPI i Distrikt B — et målrettesSystem baseret på hovedTælling-fattigdom alene ville rangordne de to distrikter identisk og misse, at Distrikt B behøver dybere intervention.

## Forbindelse til softwareudvikling

- SagsStyrings- og berettigelsesSystemer for sociale programmer lagrer ofte allerede flere af de ti indikatorer (bolig, skoleFremmøde, sundhedsMarkører) i separate siloer; Alkire-Foster-tællingsMetoden er et klarGjort skema for at kombinere dem til en deprivations-score i stedet for at bygge en skræddersyet scoringsModel fra bunden.
- HovedTælling-/intensitets-opdelingen (H × A) er et generelt nyttigt mønster for ethvert dashboard, der rapporterer "hvor mange er påVirket" sammen med "hvor dårligt" — at kollapse begge til et tal, som rå prævalens-statistikker gør, skjuler netop den sag, der behøver mest ressource.
- MPI-stil-indikator-dashboards kobles naturligt med [kostpris pr. modtager](../cost-per-beneficiary/)-rapportering for anti-fattigdom-programmer: kostpris pr. point af MPI-reduktion er en forsvarlig enhed for at sammenligne meget forskellige interventioner (kontant-overførsel vs. sanitations-infrastruktur).

## Faldgruber

- **At behandle de ti indikatorer som universelle.** OPHIs globale MPI-indikatorer er kalibreret for tvær-land-sammenlignelighed; nationale MPI'er (mange lande, inklusive flere i Sydasien og Afrika, offentliggør deres egne) tilpasser indikatorer og vægte til lokal kontekst, og de to er ikke direkte sammenlignelige.
- **At rapportere H alene.** HovedTælling-rate ignorerer intensitet helt; rapporter eller beregn altid A sammen med det, eller MPI selv.
- **At antage MPI-fattig og indkomst-fattig er samme befolkning.** OPHIs egne lande-briefer viser typisk kun partiel overlap mellem de to; et program, der kun målretter indkomst-fattige, vil systematisk misse en meningsfuld andel af de multiDimensionalt fattige.

## Kilder

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
