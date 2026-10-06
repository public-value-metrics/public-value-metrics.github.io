# BNP-alternativer

BNP-alternativer er målinger bygget til at fange, hvad BrutoNationalProdukt strukturelt ignorerer: uBetalt omsorgsArbejde, miljømæssig udtømning, indkomstFordeling, og om vækst faktisk forbedrer liv. De mest kendte er Genuine Progress Indicator (GPI) og Bhutans Gross National Happiness (GNH) Index; casen for at tage dem seriøst blev gjort mest indflydelsesRigt af 2009-Stiglitz-Sen-Fitoussi-Kommissionen. For ingeniører, der bygger statslige dashboards eller KPI-systemer, er "hvilket tal tæller som fremskridt" en designBeslutning med rigtige konsekvenser for, hvad finansieres.

## Hvorfor det betyder noget

Simon Kuznets, der byggede de amerikanske national-regnskaber i 1930'erne, advarede Kongressen i 1934, at "en nations velfærd kan sjældent udLedes fra en måling af national indkomst" — en forbeHold figuren voksede ud af næsten øjeblikkeligt. BNP tæller et olieUdslips opRydning som vækst og en forælders uBetalte børnePasning som intet; det skelner ikke udgift, der bygger varig velvære, fra udgift, der blot opVejer skade allerede gjort. Stiglitz-Sen-Fitoussi-Kommissionen, indKaldt af fransk præsident Nicolas Sarkozy og ledet af Joseph Stiglitz, Amartya Sen, og Jean-Paul Fitoussi, rapporterede i 2009, at statistiske systemer bør skifte vægt "fra at måle økonomisk produktion til at måle menneskers velvære," og at bæreDygtighed bør spores separat fra nuværende velvære snarere end foldet ind i et tal. BNP-alternativer operationaliserer den anbefaling. GPI, udviklet af tænkeTanken Redefining Progress i 1990'erne og byggende på William Nordhaus og James Tobins 1972-Measure of Economic Welfare, starter fra personlig forbrug (som BNP gør) og tilføjer derefter ikke-marked-fordele, BNP udeLader (husholdningsArbejde, frivilligHed), mens den subtraherer defensive og udtømnings-kostpriser (kriminalitet, forurening, pendling, ressourceTræk) BNP forkert tæller som positive. Bhutans GNH Index, administreret af GNH Centre Bhutan (<https://www.gnhcentre.bt/>), går videre endnu, og erstatter vækst som landets angivne forfatningsMæssige mål: det aggregerer 33 indikatorer over 9 domæner — psykologisk velvære, sundhed, uddannelse, tidsBrug, kulturel diversitet, styring, fællesskabsVitalitet, økologisk diversitet, og levestandarder — ind i et enkelt tilstrækkeligheds-baseret score brugt direkte til at screene statslige politikForslag.

## Beregningen

```
GPI = personlig forbrugsUdgift
    + ikke-marked-fordele (husholdningsArbejde, frivilligHed,
      videreGående uddannelse)
    − defensive og sociale kostpriser (kriminalitet,
      forurening, pendling, familieNedBrud)
    − udtømning af natur- og social-kapital (ressourceTræk,
      landbrugsJord-tab)

GNH tilstrækkelighedsScore, pr. domæne:
  en person er "tilstrækkelig" i et domæne, når de klarer dets
  tærskel på hver indikator
  LykkeIndeks = (% af befolkning tilstrækkelig i ≥ 6 af 9
                domæner)
              + (vægtet gennemsnitligt underSkud af "ikke-
                endnu-lykkelig"-minoriteten)
```

## Gennemregnet eksempel

**Region, GPI**: personligt forbrug er $50 milliarder. Tilføj estimeret husholdnings- og frivillig-arbejds-værdi af $12 milliarder (genAnskaffelsesKostpris-lønRater — se [frivilligTidsVærdi](../frivilligtidsværdi/)). Subtraher estimerede årlige kostpriser af pendlings-trængsel ($3 milliarder), kriminalitet ($4 milliarder), og langSigtet ressourceUdtømning ($6 milliarder):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($ milliarder)
```

Hvis BNP voksede fra $50 milliarder til $55 milliarder det år (+10%), men defensive og udtømnings-kostpriser voksede hurtigere end forbrug, kan GPI falde, selv da BNP stiger — "tærskel-hypotesen" GPI-forskere citerer for høj-indkomst-økonomier siden groft 1970'erne, da vækst fortsatte med at klatre, mens GPI stagnerede.

**Borger, GNH**: en respondent klarer tilstrækkeligheds-tærsklen i 7 af 9 domæner (sundhed, uddannelse, levestandarder, fællesskabsVitalitet, kulturel diversitet, økologisk diversitet, tidsBrug) men falder kort på psykologisk velvære og styring. Fordi 7 ≥ 6, tælles de "lykkelige" i hovedTællingen; indekset sporer separat dybden af deres to underSkud, så en snæver bestået-tilstand ikke er uSkelneligt fra en komfortabel en.

## Forbindelse til softwareudvikling

- Et KPI-dashboard modelleret kun på gennemStrømning eller udgift (BNP-mønstret) vil systematisk misse skade gjort i at generere den gennemStrømning — support-ticket-volumen behandlet som "engagement" snarere end "bruger-nød" er software-leverings-versionen af at tælle et olieUdslip som vækst.
- GPI-stil-regnskab er et nyttigt revisions-mønster for enhver [offentlig-sektor-KPI](../kpier-i-den-offentlige-sektor/)-suite: for hver overskrifts-output-måling, spørg, hvilken defensiv kostpris den stille påLøber (genArbejde, incident-respons, udBrændthed) og net det ud, på den måde GPI netter defensiv udgift ud af forbrug.
- GNHs domæne-tilstrækkeligheds-metode — bestå/fejl pr. dimension, derefter aggregere — er strukturelt samme teknik som [multiKriterie-beslutnings-analyse](../multikriterie-beslutningsanalyse/) og er værd at genBruge, hvorEnd et enkelt skalar-score ville skjule en kritisk fejlende dimension.

## Faldgruber

- **At behandle GPI som et præcist national-regnskab.** I modsætning til BNP har GPI ingen enkelt standardiseret metodologi; forskellige studier vægter pendlings-kostpriser, frivilligTid, eller ressourceUdtømning forskelligt, så tvær-studie-GPI-sammenligninger er langt mindre pålidelige end tvær-land-BNP-ene.
- **At importere GNH helPuljet ind i en anden politikKultur.** Dens domæne-vægte og tilstrækkeligheds-tærskler blev sat gennem Bhutanesisk konsultation; at kopiere tallet uden den underliggende konsultations-proces producerer en hul måling, ingen stoler på.
- **At antage et BNP-alternativ erstatter kostpris-fordel-vurdering.** Disse er diagnostiske, økonomi-brede indikatorer, ikke beslutnings-redskaber for et enkelt program; brug [social kostpris-fordel-analyse](../samfundsøkonomisk-cost-benefit-analyse/) for det i stedet.

## Kilder

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
