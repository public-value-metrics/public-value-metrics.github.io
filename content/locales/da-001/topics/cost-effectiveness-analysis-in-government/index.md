# Kosteffektivitetsanalyse i regeringen

Kosteffektivitetsanalyse (CEA) sammenligner kostpriserne ved alternative måder at opnå *samme* resultat, udtrykt i naturlige enheder — kostpris pr. udendørssovende indhuset, kostpris pr. elev bragt op til den forventede standard, kostpris pr. ton CO2 reduceret — uden at konvertere resultatet selv til penge.

## Hvorfor det betyder noget

Green Book behandler CEA som fallback-metoden, når [samfundsøkonomisk cost-benefit-analyse](../social-cost-benefit-analysis/)s krav om at pengegøre hver fordel bliver ikke blot svær men uærlig — hvor at sætte en troværdig pris på resultatet ville kræve antagelser, ingen faktisk holder (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Kapitel 5, om vurdering af muligheder, hvor resultater ikke let kan pengegøres). CEA er metoden mest direkte lånt fra sundhedsøkonomi — den er strukturelt identisk med, hvordan NICE sammenligner behandlinger ved brug af kostpris pr. kvalitetsjusteret leveår — men anvendt på ikke-sundhedsmæssige offentlige programmer: uddannelsesinterventioner pr. elev-resultat-point, boligprogrammer pr. husstand forhindret fra hjemløshed, beskæftigelsesprogrammer pr. varigt jobresultat.

Grunden til, at CEA fortjener sin plads sammen med SCBA snarere end at blive subsumeret af den, er, at at tvinge en monetær værdi på nogle resultater producerer et tal præcist nok til at se autoritativt ud og omstridt nok til at være værdiløst i en offentlig debat — at sætte en pris på "et barn der læser på den forventede standard" inviterer netop den slags udfordring, der afsporer en businesscase i et udvalg. CEA omgår argumentet ved at nægte at have det: den rangerer muligheder efter kostpris pr. enhed af *resultatet selv*, og efterlader det separate politiske skøn om, hvorvidt resultatet overhovedet er værd at forfølge, til den strategiske sag.

## Beregningen

```
Kosteffektivitetsforhold (gennemsnitligt) = Samlet kostpris /
                                            Samlede
                                            resultatenheder
                                            opnået

Incrementelt kosteffektivitetsforhold (ICER), sammenligning
af mulighed A med mulighed B:
ICER = (Kostpris_A − Kostpris_B) / (Resultat_A − Resultat_B)

Procedure:
1. Fastlæg resultatenheden og målemetoden over alle
   muligheder, der sammenlignes.
2. Kostpris-beregn hver mulighed på samme grundlag (se
   ../green-book-appraisal/, finansiel sag) over samme
   tidshorisont.
3. Fjern domineret muligheder: enhver mulighed der koster
   mere pr. enhed end et billigere alternativ, der opnår
   samme eller bedre resultat, droppes.
4. Rangér resterende muligheder efter incrementelt, ikke
   gennemsnitligt, kosteffektivitetsforhold.
```

CEA kan ikke, i sig selv, sige om et program overhovedet er værd at finansiere — kun hvilken af flere tilgange til samme mål, der er billigst pr. enhed. At beslutte, om målet selv er udgiften værd, kræver enten konvertering tilbage til SCBA (hvis en troværdig vurdering eksisterer) eller et politisk/strategisk skøn uden for matematikken. Hvor resultater genuint ikke kan reduceres til en enhed — fordi et program producerer flere resultater, der betyder noget på forskellige måder — brug [multikriterie-beslutningsanalyse](../multi-criteria-decision-analysis/) i stedet.

## Gennemregnet eksempel

**Lokal myndighed**: en kommune sammenligner tre tilgange til reduktion af udendørssøvn, hver kostpris-beregnet over et år mod resultatet "individer flyttet til stabil bolig for 6+ måneder":

```
Mulighed                        Kostpris   Resultater   Gns. CER
                                            opnået
Housing First (intensiv)        £900.000   60           £15.000/
                                                         resultat
Hostel + overgangsstøtte        £600.000   50           £12.000/
                                                         resultat
Opsøgende + privat udlejnings-  £350.000   20           £17.500/
sektor                                                  resultat

ICER, Hostel vs Opsøgende: (600k−350k)/(50−20) = £8.333 pr.
yderligere resultat
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = £30.000
pr. yderligere resultat
```

Opsøgende er domineret på gennemsnitlig kostpris af Hostel, men det *incrementelle* skridt fra Opsøgende til Hostel koster kun £8.333 pr. yderligere person indhuset — billigt relativt til Housing First-skridtet, som koster £30.000 for hver yderligere person ud over, hvad Hostel opnår. En budgetbegrænset myndighed, der skalerer op, bør foretrække at udvide Hostel før Housing First, selv om Housing First ser bedre ud på sit eget gennemsnitlige forhold.

**National regering**: et læsefærdighedskatchup-program sammenlignes over tre leveringsModeller på "kostpris pr. elev der når alders-forventet læsestandard": en-til-en-tutoring (£1.800/elev), lille-gruppe-tutoring (£700/elev), og digital-kun-intervention (£150/elev, men kun 40% af resultatraten for lille-gruppe-tutoring pr. tilmeldt elev, når justeret for engagementsdropfald). Når justeret for faktisk gennemførelse koster digital-kun £375 pr. elev, der når standarden — stadig billigst, men CEA kan ikke sige, om det mindre absolutte antal elever hjulpet af digital-kun, hvis leveret ved samme budget som lille-gruppe, er en acceptabel afvejning mod at nå færre elever med større dybde; det er et distributionsmæssigt skøn, CEA overdrager til beslutningstagere.

## Forbindelse til softwareudvikling

CEA er den rigtige ramme, når tekniske teams evaluerer leveringstilgange til *samme* tjenesteresultat — kostpris pr. succesfuldt verificeret identitet over tre identitetsVerifikationsleverandører, kostpris pr. sag korrekt triageret over to sagsarbejdsautomatiseringsdesign, kostpris pr. tilgængelighedsdefekt løst over internt versus kontraheret afhjælpning. Disciplinen, det importerer direkte: definér resultatenheden før sammenligning af kostpriser (ikke "tickets lukket" — et output — men "brugerbehov faktisk løst"), og beregn altid det incrementelle forhold mellem det levende system og en foreslået erstatning, ikke hvert systems gennemsnitlige kostpris isoleret. Se [resultater versus output](../outcomes-vs-outputs/) og [kostpris pr. resultat](../cost-per-outcome/).

## Faldgruber

- **At sammenligne gennemsnitlige, ikke incrementelle, forhold ved beslutning om en udvidelse.** Som udendørssøvneeksemplet viser, er muligheden med det bedste gennemsnitlige forhold ikke altid den billigste næste enhed af resultat at købe.
- **At vælge en resultatenhed, der virkelig er et output.** "Henvisninger foretaget" eller "sessioner leveret" måler aktivitet, ikke det resultat, programmet eksisterer for at producere; CEA på output producerer et selvsikkert udseende tal, der besvarer det forkerte spørgsmål.
- **At sammenligne over genuint forskellige resultater.** CEA er kun gyldig, når hver mulighed målretter samme resultat målt samme måde; at sammenligne "kostpris pr. udendørssovende indhuset" mod "kostpris pr. plejeudgående i stabil udlejning" behøver et generisk resultatmål eller [multikriterie-beslutningsanalyse](../multi-criteria-decision-analysis/), ikke CEA.
- **At ignorere resultatholdbarhed.** En billigere mulighed, der producerer resultater, der ikke varer (en elev der regredierer efter interventionen slutter), er ikke faktisk mere kosteffektiv, når målt over en sammenlignelig horisont; matchende opfølgningsperioden over muligheder, der sammenlignes.

## Kilder

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
