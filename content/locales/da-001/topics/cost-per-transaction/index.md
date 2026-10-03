# Kostpris pr. transaktion

Kostpris pr. transaktion er overskrifts-enhedsØkonomi-målingen for en statslig digital tjeneste: samlet kostpris for at levere en kanal, delt med antallet af transaktioner fuldført gennem den. Det var flagskibsFiguren på den gamle GOV.UK Performance Platform, og det er tallet, der finansierede et decennium af "digital-som-standard"-investering — hvilket er netop, hvorfor det også er målingen mest udSat for manipulation.

## Hvorfor det betyder noget

Cabinet Offices 2012 Digital Efficiency Report satte kanal-kostpris-sammenligningen i termer, der sad fast: digitale transaktioner blev fundet at kostpris omkring 20 gange mindre end via telefon og omkring 50 gange mindre end ansigt-til-ansigt, med illustrative lokal-regerings-tal på groft £0,15 pr. web-transaktion mod £2,83 via telefon og £8,62 ansigt-til-ansigt. Den enkelte sammenligning blev retfærdiggørelsen for at redesigne de 25 eksemplariske tjenester navngivet i Government Digital Strategy, og for hver departemental business-case, der har citeret kanalSkift-besparelser siden. Figuren er genuint nyttig som et størrelsesOrden-signal, men forholdet afhænger helt af, hvad tælles på hver side: en fair telefon-kanal-kostpris inkluderer callCentrets personale, telefoni-kontrakt, træning og ejendom; en fair digital kostpris inkluderer hosting, løbende produktTeam-lønninger, supportDesk-tid for fejlede rejser, og assisteret-digital-kanalen krævet af [digital tjenesteStandard](../digital-service-standard/) punkt 5. Strip nok af disse ud af den digitale side, og enhver tjeneste ser billig ud.

## Beregningen

```
Kostpris pr. transaktion = samlet allokeret kanal-kostpris /
                          fuldførte transaktioner

Samlet allokeret kanal-kostpris bør inkludere:
  + hosting og infrastruktur
  + produkt-/ingeniør-/support-team-kostpris (amortiseret)
  + indhold- og tjenesteDesign-kostpris (amortiseret)
  + assisteret-digital-/tilgængeligheds-support-kostpris
  + fejlEfterspørgsel-kostpris (brugere, der fejler digital og
    falder tilbage til telefon)
  − enkeltstående byggekostpris amortiseres over forventet
    tjenesteLiv, ikke udgiftsFørt helt i år et

Det almindelige regnskabsTrick:
  "Marginal kostpris pr. transaktion" (kun hosting, når
  bygget) citeres, som var det "gennemsnitlig kostpris pr.
  transaktion" (samlet kostpris inklusive teamet, der
  fortsætter at bygge og køre den). De to kan differere med
  10x eller mere for en tjeneste med et stort, aktivt
  leveringsTeam.
```

## Gennemregnet eksempel

**KøretøjsSkat-fornyelsesTjeneste**: 4 millioner transaktioner/år.

```
Kun-marginal-figur (trikket):
  Kun hosting + betalingsBehandling = £180.000/år
  Kostpris pr. transaktion = 180.000 / 4.000.000 = £0,045
  → overskriftsFigur citeret i en business-case

Fuldt-belastet figur (den ærlige en):
  Hosting + betaling                    £180.000
  Produkt-/ingeniør-team (8 FTE)        £720.000
  SupportDesk (fejlede/forespurgte
  transaktioner)                        £310.000
  Assisteret-digital-telefonLinje        £140.000
  Total                                 £1.350.000
  Kostpris pr. transaktion = 1.350.000 / 4.000.000 = £0,3375

Den fuldt-belastede figur er stadig groft 8x billigere end
£2,83-telefon-kanal-sammenligneren fra Digital Efficiency
Report — en rigtig og forsvarlig besparelse — men 7,5x højere
end kun-marginal-figuren citeret i genvejsVersionen. Begge tal
er "sande"; kun en er sammenlignelig med telefon-kanal-
kostprisen, den sættes op mod.
```

## Forbindelse til softwareudvikling

Kostpris pr. transaktion er, hvor arkitekturBeslutninger bliver et finans-tal: en tjeneste, der auto-skalerer rent og behøver lidt manuel intervention, driver denne figur ned over tid; en, der genererer høj support-ticket-volumen fra forvirrende fejlTilstande, driver den op uanset hosting-effektivitet. Det er den naturlige ledsagerMåling til [digital tjenesteStandard](../digital-service-standard/) punkt 10 ("definer, hvad succes ser ud som, og offentliggør præstationsData") og til [tjenesteStandarder og transaktionsMålinger](../service-standards-and-transaction-metrics/), som fastsætter det fuldere KPI-sæt, denne figur sidder inde i. Det fødrer også direkte ind i [kanalSkift-besparelser](../channel-shift-savings/)-beregninger og bør forEnes mod [samlet ejerskabsKostpris i statslig IT](../total-cost-of-ownership-in-government-it/), så platform- og delt-tjeneste-overhead ikke stille droppes.

## Faldgruber

- **Marginal kostpris klædt som gennemsnitlig kostpris.** At citere kun-hosting-kostpris, når en tjeneste er bygget, udeLadende det løbende team, der vedligeholder, itererer, og supporterer den — se det gennemregnede eksempel ovenfor.
- **At udeLukke assisteret-digital-kostpris.** En kanal er ikke "digital-som-standard"-compliant, og dens sande kostpris fanges ikke, hvis telefon-/papir-fallback krævet af [digital inklusion](../digital-inclusion/) er kostpris-sat separat eller ignoreret.
- **At ignorere fejlEfterspørgsel.** Transaktioner, der starter digitalt og fejler, genererende et telefonOpkald eller en papirFormular alligevel, er en kostpris af den digitale kanal, ikke kanalen, der fanger fejlen.
- **At sammenligne transaktioner af forskellig kompleksitet over kanaler.** TelefonOpkald håndterer disproportionalt de hårde sager (multiple forsørgede, fejlKorrektion, sårbare ansøgere); at sammenligne en gennemsnitlig telefon-kostpris til en gennemsnitlig digital kostpris overVurderer forholdet, med undtagelse af hvor transaktions-mixet er matchet.

## Kilder

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
