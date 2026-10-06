# Borgertilfredshedsmålinger

BorgerTilfredshedsMålinger måler, hvordan mennesker vurderer deres direkte oplevelse af en offentlig tjeneste — distinkt fra tillid til institutioner generelt, og distinkt fra, om tjenesten faktisk opnåede et godt resultat. En tjeneste kan være velLidt og ineffektiv, eller effektiv og uLidt; gabet mellem de to er selv diagnostisk information, et leveringsTeam bør holde øje med.

## Hvorfor det betyder noget

Tilfredshed måles ved to forskellige højder, der routinemæssigt sammenblandes. Ved tjenesteNiveau kræver Storbritanniens nu-pensionerede Performance Platform og nutidens GOV.UK-tjenesteManual en pr.-tjeneste-tilfredshedsUndersøgelse (typisk en fem-punkts "meget tilfreds" til "meget utilfreds"-skala, administreret ved transaktionsPunktet) som en af fire obligatoriske tjeneste-KPI'er — se [tjenesteStandarder og transaktionsMålinger](../tjenestestandarder-og-transaktionsmålinger/). Ved institutionelt niveau måler UK Civil Service People Survey medarbejderEngagement og -oplevelse over hvert centralregeringsDepartement årligt, og separat undersøger OECD's "Trust in Government"-program offentlig tillid til national regering over medlemsStater, og sporer et langSigtet fald- og genOprettelsesMønster stærkt formet af kriser (2008-finansKrisen og COVID-19-pandemien producerede begge skarpe, synlige bevægelser i OECD-tillidsTal). Grunden til, ingeniører, der bygger borgerVendte tjenester, behøver at holde tilfredshed og resultat separate, er en kendt fejlTilstand i tjenesteDesign: en smukt designet, nem-at-bruge digital formular for en ydelsesKrav kan score meget høj tilfredshed, mens den underliggende politik — berettigelsesRegler, behandlingsBunker, tildelingsBeløb — efterlader krævereden ikke bedre stillet. Tilfredshed måler interfacet; den måler ikke værdien leveret bag det.

## Beregningen

```
NettoTilfredshed = % tilfreds (eller meget tilfreds) − %
                   utilfreds (eller meget utilfreds) (neutral-
                   /ingen-mening-svar udelukket fra begge
                   termer, men talt i svarBasen for at
                   beregne hver procentdel)

Tilfredshed-til-resultat-gab = tilfredshedsScore − resultat-
                   opnåelsesScore (begge normaliseret 0-100;
                   et stort positivt gab signalerer en
                   tjeneste, der "føles godt" men under-
                   leverer på substans)

TillidsIndeks (OECD-stil) = % af undersøgelsesResponder-
                   enterne, der svarer "ja" på "har du
                   tillid til [national regering]?" sporet
                   som en tidsSerie, typisk opdelt efter
                   alder, indkomst, og uddannelse
```

## Gennemregnet eksempel

**Lokal myndigheds ejendomsSkat-e-faktureringsTjeneste**: en tilfredshedsUndersøgelse ved punktet for succesfuld transaktion viser 2.400 respondenter: 1.650 tilfredse/meget tilfredse, 250 utilfredse/meget utilfredse, 500 neutrale.

```
NettoTilfredshed = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75% − 10,42%
                  = +58,3 nettoTilfredshed
```

Dette ser stærkt ud isoleret. Men undersøgelsen vises kun til brugere, der *succesfuldt* fuldfører transaktionen — en kendt målingsBias (se faldgruber nedenfor). At koble den med fuldførelsesRate-målingen fra [tjenesteStandarder og transaktionsMålinger](../tjenestestandarder-og-transaktionsmålinger/) viser, fuldførelse er kun 71%, hvilket betyder:

```
Sand befolkningsTilfredshed er umålt for de 29%, der
forlod rejsen — plausibelt den mest utilfredse kohorte,
da forladelse selv er et stærkt negativt signal,
undersøgelsen aldrig fanger.
```

**National-niveau-illustration (struktur af en OECD-stil-tillidsSerie)**: national regeringsTillid rapporteret til 42% i år 1, faldende til 34% i år 2 (et kriseÅr) og genOprettende til 39% i år 3 — en trajektorie typisk for chok-og-partiel-genOprettelse-mønstret OECD dokumenterer over medlemsStater efter store kriser.

## Forbindelse til softwareudvikling

Instrumentér tilfredshedsUndersøgelser ved hvert meningsfuldt udgangsPunkt af en brugerRejse, ikke kun ved succesfuld fuldførelse — den enkelte mest almindelige ingeniørFejl i dette rum, og en, der stille omdanner en tilfredshedsMåling til en overleveren-bias-vanitetsMåling. Hvor muligt, kobl tilfredshedsScoren med en fuldførelses- eller resultatMåling på samme dashboard, så et team ikke kan fejre stigende tilfredshed, mens fuldførelse stille falder (se [kostpris pr. transaktion](../kostpris-pr-transaktion/) og [digital inklusion](../digital-inklusion/) for, hvem der udelukkes fra digital tilfredshedsSampling i første omgang — ikke-digitale og assisteret-digitale brugere er systematisk underRepræsenterede i i-tjeneste-undersøgelser). Tilfredsheds- og tillidsData fødrer også direkte ind i legitimitets-benet af [Moores strategiske trekant](../offentlig-værdi/), og tilhører "kunde"- og "legitimitets"-perspektiverne af en [offentlig værdi scorecard](../offentlig-værdi-scorecard/) — se [tillids-og-legitimitets-målinger](../tillids-og-legitimitetsmålinger/) for den institutionelle-niveau-modpart til denne tjeneste-niveau-måling.

## Faldgruber

- **Overleveren-bias i punkt-for-fuldførelse-undersøgelser.** Brugere, der forlader en rejse, ser aldrig undersøgelsen, så en høj i-tjeneste-tilfredshedsScore kan eksistere sammen med en lav fuldførelsesRate og en stor usynlig befolkning af utilfredse ikke-fuldførere.
- **At behandle tilfredshed som en proxy for resultat.** Et velDesignet interface for en dårligt designet politik scorer godt på tilfredshed og dårligt på resultat — rapporter altid begge, aldrig en som en stedFortræder for den anden.
- **Små, uRepræsentative samples rapporteret med falsk præcision.** En tilfredshedsScore fra et par hundrede selvValgte respondenter rapporteret til en decimal antyder en tillid, sample-størrelsen ikke kan understøtte.
- **At ignorere demografisk opdeling.** Nationale tillids- og tilfredshedsTal, der ikke er opdelt efter alder, indkomst, handicap, eller digital adgang, kan maskere skarpt divergerende oplevelser over grupper — et mønster OECD's egne Trust in Government-udgivelser explicit opdeler for.

## Kilder

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
