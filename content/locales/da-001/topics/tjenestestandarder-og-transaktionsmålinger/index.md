# Tjenestestandarder og transaktionsmålinger

GOV.UK Service Standard er den britiske regerings 14-punkts-checkListe for at bygge og køre en offentlig digital tjeneste, og den kommer koblet med et lille, obligatorisk sæt kvantitative transaktionsMålinger — kostpris pr. transaktion, fuldførelsesRate, digital optagelse, og brugerTilfredshed — teams skal offentliggøre for hver liveCentralregeringsTjeneste. Sammen er standarden og målingerne den operationelle, dagTil-dag-specialisering af de bredere offentlig-værdi- og KPI-rammer i dette repositorium, siktet direkte på softwareLeveringsTeams.

## Hvorfor det betyder noget

Service Standard, vedligeholdt i GOV.UK's tjenesteManual, kræver, hver punkt-i-tid-vurdering (alfa, beta, live) af en statslig digital tjeneste demonstrerer — blandt dens 14 punkter — at teamet forstår brugerBehov, arbejder i et multiDisciplinært team, itererer og forbedrer frekvent, og *evaluerer redskaber, systemer, og arbejdsMåder*. Historisk sad dette sammen med en offentlig Performance Platform, hvor hver live-tjeneste offentliggjorde sine transaktionsData åbent; denne platform er siden pensioneret, men den underliggende pligt til at måle og offentliggøre disse fire kerneMålinger fortsætter gennem tjenesteManualens "måling-af-succes"-vejledning. Grunden til, dette differer fra et generisk software-KPI-dashboard, er, at disse målinger explicit blev designet som en koblet økonomisk model, ikke fire uafhængige scores: hele besparelsesCasen for digital regering — Government Digital Services Digital Efficiency Report fandt digitale transaktioner groft 20 gange billigere end via telefon og omkring 50 gange billigere end ansigt-til-ansigt for sammenlignelige lokal-regerings-tjenester — materialiserer sig kun, hvis fuldførelsesRate forbliver høj og digital optagelse genuint stiger, snarere end blot at tilføje en billig kanal sammen med en uændret dyr en.

## Beregningen

```
Kostpris pr. transaktion = samlet tjenesteDriftsKostpris /
                           antal fuldførte transaktioner
FuldførelsesRate          = fuldførte transaktioner / startede
                           transaktioner × 100
Digital optagelse         = digital-kanal-transaktioner / alle-
                           kanal-transaktioner × 100
BrugerTilfredshed          = % tilfreds + meget tilfreds, i-
                           tjeneste 5-punkts-undersøgelse

KanalSkift-besparelse = transaktionsVolumen × optagelsesSkift
                        × (kostpris pr. transaktion på den
                        gamle kanal − kostpris pr. transaktion
                        digitalt)

FejlEfterspørgsel-kostpris = (1 − fuldførelsesRate) ×
                        transaktioner forsøgt digitalt ×
                        kostpris for fallback-kanalen de
                        brugere derefter bruger i stedet
```

## Gennemregnet eksempel

**Illustrativ centralregerings-licensFornyelsesTjeneste**, 2 millioner transaktioner/år, aktuelt 65% telefon (£3,00/transaktion) og 35% digital (£0,30/transaktion), fuldførelsesRate 80%. Et redesign mod den 14-punkts Service Standard hæver digital optagelse til 60% og fuldførelse til 92%:

```
OptagelsesSkift-besparelse = 2.000.000 × 0,25 × (3,00 − 0,30)
                            = £1.350.000/år

FejlEfterspørgsel-kostpris, før:
  2.000.000 × 0,35 × (1 − 0,80) × £3,00 = £420.000/år
  (forladere falder tilbage til telefon)

FejlEfterspørgsel-kostpris, efter:
  2.000.000 × 0,60 × (1 − 0,92) × £3,00 = £288.000/år

Netto fejlEfterspørgsel-besparelse = £420.000 − £288.000
                                    = £132.000/år

Samlet årlig besparelse ≈ £1.350.000 + £132.000 = £1.482.000/år
```

Aritmetikken gør explicit, hvorfor fuldførelsesRate ikke er en sekundær måling: uden forbedringen fra 80% til 92% ville optagelsesSkift-besparelsen delvist blive tilbageTaget af fejlEfterspørgsel, der router frustrerede digitale brugere lige tilbage til den dyre telefonKanal.

## Forbindelse til softwareudvikling

Disse fire målinger er et arbejdsEksempel på et kostpris-konsekvens-dashboard: en kostprisMåling holdt separat fra tre resultat-/kvalitetsMålinger, med vilje aldrig kollapset til et enkelt score — samme disciplin argumenteret for i [KPI'er i den offentlige sektor](../kpier-i-den-offentlige-sektor/). For ingeniører bryder dette ned til konkret, ejbart arbejde: fuldførelsesRate er et tragt-instrumenterings-problem, og hvert forladelsesPunkt i rejsen er, i princippet, lokaliserbart og fikserbart; kostpris pr. transaktion kræver genuin enhedsKostprisRegnskab inklusive personale-assisterede og papirKanal-kostpriser, ikke blot cloud-hosting-udgift (se [kostpris pr. transaktion](../kostpris-pr-transaktion/) og [samlet ejerskabsKostpris i statslig IT](../samlet-ejerskabskostpris-i-statslig-it/)); og digital optagelse er en lighedsMåling i et effektivitets-kostume — borgere, der ikke kan eller vil skifte kanal, er disproportionalt ældre, handicappede, eller digitalt udelukkede, så aggressiv kanalLukning omdanner en "besparelse" til en adgangsSkade (se [digital inklusion](../digital-inklusion/) og [kanalSkift-besparelser](../kanalskift-besparelser/)). Den 14-punkts-standard selv er procesSpecifikationen bag disse tal — se [digital tjenesteStandard](../digital-tjenestestandard/) for standarden i fuld, og [borgerTilfredshedsMålinger](../borgertilfredshedsmålinger/) for, hvordan tilfredshedsTallet her relaterer til bredere tillidsMåling.

## Faldgruber

- **Optagelse opnået ved at lukke den alternative kanal.** At lukke en telefonLinje hæver digital-optagelses-procentdelen aritmetisk, mens den dumper fejlEfterspørgsel på hvilken kanal, der er tilbage (ofte en dyrere assisteret-digital eller ansigt-til-ansigt-rute); mål altid helSystem-kostpris, ikke forholdet alene.
- **At måle fuldførelsesRate fra skridt to af tragten.** At starte "startede"-tællingen efter det første genuine frafaldsPunkt smigrer fuldførelsesRaten og skjuler det største fikserbare tab.
- **Kostpris pr. transaktion udelukkende assisteret-digital-støtte.** En kun-digital enhedsKostpris, der ignorerer personaleTiden brugt på at hjælpe brugere, der ikke kan selvBetjene, underEstimerer den sande kostpris af kanalen.
- **At offentliggøre målinger uden en delt definition over tjenester.** "Transaktion" og "fuldført" betyder forskellige ting over forskellige tjenesteTeams, med undtagelse af hvor definitionerne er standardiserede og versionerede, hvilket gør tvær-tjeneste-sammenligning uPålideligt.

## Kilder

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
