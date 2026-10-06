# Kanalskift-besparelser

KanalSkift-besparelser er den projekterede kostprisReduktion fra at flytte transaktionsVolumen ud af dyre kanaler — telefon, ansigt-til-ansigt-skranker, papirPost — ind i billig digital selvBetjening. Det er den finansielle motor bag "digital-som-standard," og også linjePosten i business-casen mest sandsynligt at være forkert, fordi antagelsen, den hviler på — at offline-kanaler skrumper, mens digital optagelse stiger — kun nogle gange er sand.

## Hvorfor det betyder noget

Aritmetikken ser uModsigelig ud ved brug af [kostpris-pr.-transaktion](../kostpris-pr-transaktion/)-figurerne fra Digital Efficiency Report: skift en million transaktioner fra et £8,62-ansigt-til-ansigt-besøg til en £0,15-digital-en, og besparelsen er over £8 millioner. Men en besparelse bliver kun kontant frigjort til genDeployering, hvis den skrumpende kanals *faste kapacitet* faktisk afVikles — callCentrets sæder, skranke-personalet, telefon-kontrakten-minutter — og lokal-regerings-digitale-transformations-programmer har gentagne gange fundet, total kontakt-volumen falder ikke i takt med digital optagelse. Forskning fra lokal-myndigheds-digitale-transformations-programmer og organer som Socitm og Local Government Association har dokumenteret et tilbageVendende mønster: digitale kanaler attraherer genuint ny kontakt (borgere, der ikke ville have ringet eller besøgt, gør det nu, fordi det er lettere), og en meningsfuld andel af "digitale" transaktioner fejler midtVejs og genererer et telefonOpkald alligevel — så telefonVolumen falder med langt mindre end digital-optagelses-procentdelen ville antyde, nogle gange ikke faldende overHovedet i absolutte termer, selv da dens *andel* af samlet kontakt falder.

## Beregningen

```
Brutto kanalSkift-besparelse = flyttet volumen × (kostpris_gam
                              mel_kanal − kostpris_digital)

Netto (realiseret) besparelse = brutto besparelse
                       − ny/skygge-efterspørgsel skabt af den
                         lettere kanal
                       − fejlEfterspørgsel-kostpris (digitale
                         fejl, der stadig genererer et
                         telefonOpkald eller skranke-besøg)
                       − kostpris af uAfviklet fast kapacitet
                         (et callCenter kan kun afSkedige
                         personale i diskrete enheder; et 15%-
                         volumen-fald lader dig sjældent skære
                         15% af hovedTælling)

RealiseringsTærskel: besparelser er kun bankable, når volumen
falder under niveauet, den gamle kanal kan bemande ved sit
næst-mindre diskrete kapacitets-skridt (f.eks. at tabe et helt
skift, et helt skrivebord, en kontraheret hovedTællings-bånd)
```

## Gennemregnet eksempel

**AmtsKommunes blå-mærke-fornyelsesTjeneste**: 60.000 fornyelser/år, tidligere 100% telefon/papir ved £6,40 pr. transaktion. En ny digital tjeneste lancerer og når 65% digital optagelse inden for et år, ved £0,30 pr. digital transaktion.

```
Naiv (brutto) besparelses-beregning:
  39.000 flyttet × (£6,40 − £0,30) = £237.900/år

Hvad faktisk skete, per kommunens kontaktCenter-data:
  TelefonVolumen faldt fra 60.000/år til 46.000/år (−23%, ikke
  −65%) fordi: 9.000 digitale rejser fejlede og genererede en
  opFølgnings-opkald (fejlEfterspørgsel-lækage), og 4.000
  mennesker, der tidligere ikke fornyede overHovedet, gør det
  nu, da de fandt det nemt online (skygge-efterspørgsel — en
  genuin adgangsForbedring, men ikke en besparelse)

  Telefon-kontaktCenter er bemandet i bånd af 8.000 opkald/FTE;
  et 14.000-opkald-fald (60.000 → 46.000) frigiver 1,75 FTE,
  rundet ned i praksis til 1 FTE faktisk genDeployeret
  = £34.000/år

Realiseret besparelse = £34.000/år plus den digital-kanal-
  bygge-/drifts-kostpris undgået på 39.000 transaktioner
  ≈ £34.000 + (39.000 × £0,30 digital kostpris allerede talt)
  — en fraktion af £237.900-overskriften, selv om tjenesten
  stadig uTvetydigt er bedre for brugere.
```

## Forbindelse til softwareudvikling

IngeniørLektionen er, at kanalSkift-besparelser realiseres af *operationelle* beslutninger (vagtPlanlægning, afVikling, kontrakt-genForhandling), ikke af softwaren, der leveres — et team kan ramme hvert [digital tjenesteStandard](../digital-tjenestestandard/)-punkt og stadig levere nul netto besparelse, hvis ingen afVikler den gamle kanals faste kapacitet. At instrumentere fejlEfterspørgsel (hvor i den digitale rejse brugere forlader, og hvad de gør derefter) er et løsbart tragt-analytik-problem og den enkelte højeste-indflydelse-ting et ingeniørTeam kan gøre for at beskytte besparelses-casen; det er også det direkte link til [kostpris-pr.-transaktion](../kostpris-pr-transaktion/), som fejlEfterspørgsel stille inflaterer. Se [fordelsRealisering](../fordelsrealisering/) for den bredere disciplin at kontrollere, en business-cases besparelser faktisk lander, og [digital inklusion](../digital-inklusion/) for, hvorfor den offline-kanal normalt ikke kan, og ikke bør, blive fuldt afViklet.

## Faldgruber

- **At antage 1:1-kanal-substitution.** At modellere digital optagelse som en direkte subtraktion fra telefon-/skranke-volumen, ignorerende skygge-efterspørgsel og fejlEfterspørgsel-lækage dokumenteret i lokal-regerings-kanalSkift-forskning.
- **At bogføre brutto besparelser før afVikling.** At tælle besparelsen i business-casen det år, optagelse stiger, ikke det år (om noget), den gamle kanals kapacitet faktisk skæres.
- **At ignorere trin-funktions-naturen af bemandings-kostpriser.** Et 20%-volumen-fald konverterer sjældent til et 20%-kostpris-fald, fordi kontaktCentre og skranker er bemandet i diskrete bånd, ikke kontinuerligt.
- **At behandle skygge-efterspørgsel som spild.** Ny kontakt fra tidligere-udelukkede eller tidligere-afSkrækkede brugere er en rigtig stigning i [offentlig værdi](../offentlig-værdi/), ikke en modelleringsFejl — det bør rapporteres som et adgangsResultat, ikke nettet ned som noise.

## Kilder

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
