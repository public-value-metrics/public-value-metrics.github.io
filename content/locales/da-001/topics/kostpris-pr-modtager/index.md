# Kostpris pr. modtager

Kostpris pr. modtager er samlet programKostpris delt med antallet af unikke mennesker, der modtog en tjeneste — alle rørt, uanset om deres omstændigheder faktisk ændrede sig. Det er det hurtigste effektivitetsTal en organisation kan producere, fordi "hvem betjente vi" næsten altid allerede er i sagsStyringsSystemet, mens "hvem blev hjulpet" normalt ikke er.

## Hvorfor det betyder noget

Finansierer spørger konstant om kostpris pr. modtager, og af forsvarlige grunde: det er tilgængeligt øjeblikkeligt, det er sammenligneligt over en portefølje af meget forskellige programmer, og det er ærligt om rækkevidde på en måde, resultatPåstande — der tager længere tid at verificere og er lettere at overDrive — ikke er. UK Charities SORP (Statement of Recommended Practice), som styrer, hvordan velgørenhedsOrganisationer rapporterer under FRS 102, kræver, bestyrelsesMedlemmers årlige rapporter beskriver opnåelser mod mål, men de fleste mindre velgørenhedsOrganisationers ledelsesRegnskaber standardiserer stadig til rækkevidde-baserede enhedsKostpriser, fordi de er billige at producere og revisions-venlige.

Faren er at behandle kostpris pr. modtager, som besvarede den spørgsmålet, den ikke kan besvare: om pengene virkede. Se [kostpris pr. resultat](../kostpris-pr-resultat/) for målingen, der faktisk besvarer det, og [resultater versus output](../resultater-versus-output/) for den underliggende distinktion. Kostpris pr. modtager er en legitim triage- og rækkevidde-måling — den fortæller en finansier, hvor langt pengene strækker — men en lav kostpris pr. modtager kan betyde enten genuin effektivitet eller en tjeneste så tynd, den ændrer intet.

## Beregningen

```
Kostpris pr. modtager = samlet programKostpris / antal unikke
                        mennesker betjent

Kontrast:
Kostpris pr. resultat  = samlet programKostpris / antal
                        mennesker, der opnår det definerede
                        resultat

Kostpris pr. modtager er altid ≤ kostpris pr. resultat, fordi
resultatBefolkningen er en delMængde (ofte en lille en) af
modtagerBefolkningen.
```

## Gennemregnet eksempel

**FødevareBank, samme år som kostpris-pr.-resultat-eksemplet**:

- Samlet programKostpris: £450.000
- Unikke husholdninger betjent (tre-plus pakker): 1.800

```
Kostpris pr. modtager = £450.000 / 1.800 = £250 pr.
husholdning betjent
```

Sammenlign de to målinger side om side:

| Måling | Nævner | Resultat |
|---|---|---|
| Kostpris pr. modtager | 1.800 husholdninger betjent | £250 |
| Kostpris pr. resultat | 630 husholdninger, der opnår fødevareSikkerhed | £714 |

En finansier, der kun ser £250, kunne konkludere, dette er en højt effektiv velgørenhedsOrganisation. En finansier, der ser begge tal, kan spørge det mere nyttige spørgsmål: er gabet mellem rækkevidde (1.800) og resultat (630) et dataIndsamlings-gab, et design-gab, eller en ærlig reflektion af, hvor svært fødevareSikkerhed er at opnå med fødevareHjælp alene?

**JobTrænings-velgørenhedsOrganisation, illustrativ**: kostpris pr. modtager (tilmeldt) = £2.000; kostpris pr. resultat (varig beskæftigelse ved 6 måneder) = £11.000, fordi kun 18% af tilmeldte fuldfører programmet og finder varigt arbejde. De to tal, der divergerer med en faktor på fem, er almindeligt, hvorEnd fuldførelses- eller varighedsRater er lave — en TrænForsVelgørenhedsOrganisation og en fødevareBank er strukturelt identiske her.

## Forbindelse til softwareudvikling

Kostpris pr. modtager er standardMålingen i nonprofit-software, fordi det er målingen, der falder ud af en modtager-post uden yderligere arbejde: skab en sag, log en tjeneste, tæl rækker. At bygge et system, der også understøtter kostpris pr. resultat, betyder bevidst at tilføje en anden førsteKlasse-entitet — en resultatHændelse, dateret og defineret uafhængigt af tjenesteLevering — og modstå fristelsen til at lade "sag afsluttet" stå i for "resultat opnået." Når man scoper en tilskudsStyrings- eller CRM-platform, spørg, hvilken af de to målinger hvert dashboard faktisk viser, og mærk det tilsvarende; at sammenblande dem i en enkelt "impact"-fliseModul er en af de mest almindelige software-niveau-årsager til faldgruberne nedenfor. Se [enhedsKostprisdatabaser](../enhedskostprisdatabaser/) for benchmarking af enten måling, når den er korrekt mærket.

## Faldgruber

- **At præsentere kostpris pr. modtager som impact.** Den måler rækkevidde, ikke ændring. Mærk dashboards og rapporter "kostpris pr. person betjent," ikke "kostpris pr. person hjulpet."
- **Dobbelttælling over programmer.** En person, der modtager både fødevarePakker og gældsRådgivning fra samme velgørenhedsOrganisation, er en modtager, ikke to, hvis nævneren er tiltænkt at beskrive unik rækkevidde; beslut og dokumentér, hvilken konvention bruges.
- **At behandle et lavere tal som altid bedre.** En drop-in-lunchKlub vil altid slå en intensiv sagsStyrings-tjeneste på kostpris pr. modtager, fordi det kostpris mindre at røre nogen let. Det siger intet om, hvilken producerer mere varig ændring pr. pund.
- **Stiltiende at bytte nævnere mellem rapporter.** Et kostpris-pr.-modtager-tal citeret i en årsRapport mod "tilmeldt" og i den næste mod "fuldført" er ikke sammenligneligt år til år; angiv nævneren hver gang.

## Kilder

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
