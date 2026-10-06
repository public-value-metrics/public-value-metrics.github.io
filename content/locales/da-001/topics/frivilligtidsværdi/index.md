# Frivilligtidsværdi

FrivilligTidsVærdi er den monetære estimering tildelt uBetalt arbejde, oftest brugt til at angive en velgørenhedsOrganisations sande økonomiske fodAftryk — dens regnskaber plus arbejdet, den ikke behøvede at betale for — eller til at gøre casen, at en given intervention er mere kostpris-effektiv end dens kontant-budget alene antyder. To nationale metodologier dominerer: USA's Independent Sector-estimering og Storbritanniens Office for National Statistics/NCVO-tilgang, og de prisSætter samme time arbejde ganske forskelligt.

## Hvorfor det betyder noget

Hvert år offentliggør Independent Sector, i samarbejde med University of Marylands Do Good Institute, en national timeVærdi af frivilligTid, bygget fra Bureau of Labor Statistics løn-data — specifikt gennemsnitlig timeIndtjening for produktion- og ikke-tilsyns-arbejdere på private ikke-landbrugs-lønningsLister, plus en frynse-ydelse-justering — og opdelt efter amerikansk stat. Dens seneste udgivelse satte værdien til **$36,14 pr. time for 2025**, op 3,9% på det foregående år, med stat-niveau-værdier spændende fra over $50 i Washington, DC, til under $20 i Puerto Rico. I Storbritannien har Office for National Statistics separat estimeret genAnskaffelsesKostprisen af formel frivilligHed til **£14,43 pr. time** (2017-estimat), og NCVOs UK Civil Society Almanac 2024 bruger frivilligHed-deltagelsesData — omkring 14,2 millioner mennesker formelt frivilligende i 2021-22 — for at estimere sektorens samlede frivilligHeds-bidrag til groft **£18 milliarder**, omkring 0,8% af britisk BNP.

Grunden til, dette betyder noget ud over regnskabsKosmetik: et program, der stærkt afhænger af frivilligt arbejde, kan se dramatisk billigere ud på en ren kontant-[kostpris-pr.-resultat](../kostpris-pr-resultat/)-basis end en, der afhænger af betalt personale, selv hvor den sande ressourceKostpris — hvad det ville kostpris at genAnskaffe det arbejde — er lignende eller højere. Finansiere og evaluatorer, der ignorerer frivilligTidsVærdi, underTæller systematisk den sande kostpris af frivillig-tunge leveringsModeller, hvilket fordrejer effektivitetsSammenligninger mod betalt-personale-modeller, der leverer samme resultat.

## Beregningen

```
Værdi af frivilligTid = frivilligTimer bidraget × timeRate

Rate-valg betyder noget og ændrer svaret:
  - GenAnskaffelsesKostpris-tilgang: lønnen for en betalt
    arbejder, der ville gøre samme opgave (f.eks. en
    genAnskaffelsesKostprisRate for en kvalificeret ungdoms-
    arbejder, ikke en generisk gennemsnitsLøn) — mest
    forsvarlig for opgave-specifik værdiSætning
  - Alternativ-kostpris-tilgang: frivilligens egen opGivede
    løn — mest forsvarlig for at værdiSætte, hvad frivilligen
    gav op
  - National-gennemsnit-tilgang: Independent Sectors eller
    ONS's enkelte blandede rate — mest forsvarlig for
    overskrift, tvær-sektor-sammenlignelighed
```

De tre tilgange kan differere med en stor multiplikator for samme time (en advokat, der frivilliger som en bestyrelses-tilsynsPerson, har en meget anderledes alternativ-kostpris-rate end en national-gennemsnit-rate), så noget rapporteret tal behøver at angive, hvilken metode producerede det.

## Gennemregnet eksempel

**Britisk velgørenhedsOrganisation, national-gennemsnit-tilgang**: 5.000 frivilligTimer i et år, værdiSat ved £14,43/time (ONS-genAnskaffelsesKostpris-estimat):

```
Værdi = 5.000 × £14,43 = £72.150
```

Hvis velgørenhedsOrganisationens kontant-udgift det år var £300.000, er dens sande ressourceKostpris — kontant plus frivilligt arbejde — £372.150, groft 24% højere end kontant-tallet alene antyder. En kostpris-pr.-resultat-beregning, der kun bruger £300.000-kontant-tallet, underVurderer sand kostpris med samme margin.

**Amerikansk velgørenhedsOrganisation, national-gennemsnit-tilgang**: 2.000 frivilligTimer værdiSat ved $36,14/time (Independent Sector, 2025-udgivelse):

```
Værdi = 2.000 × $36,14 = $72.280
```

**Samme amerikanske velgørenhedsOrganisation, alternativ-kostpris-tilgang**: hvis frivilligeerne er disproportionalt pensionerede professionelle, hvis tidligere indtjening i gennemsnit var $60/time, ville alternativ-kostpris-værdiSætningen være $120.000 — to-tredjeDele højere end national-gennemsnit-tallet, hvilket illustrerer, hvorfor metoden skal angives.

## Forbindelse til softwareudvikling

Systemer, der logger frivilligTimer (skift-planlægnings-redskaber, frivilligStyrings-platforme), bør fange timer på opgave- eller rolle-niveau, ikke blot en total, sådan at en genAnskaffelsesKostprisRate kan anvendes pr. rolle snarere end en enkelt national-gennemsnit-rate over en blandet frivillig-arbejdsStyrke (en tilsynsPersons time og en vagt-time er ikke økonomisk ækvivalente). At lagre raten og metodologien brugt sammen med den beregnede værdi — ikke blot det endelige valuta-tal — lader nedStrøms-rapportering (årsRegnskaber, [socialt afkast på investering](../socialt-afkast-på-investering/)-beregninger, finansier-rapporter) reproducere eller udFordre tallet senere snarere end at behandle det som en opak konstant. Se [kostpris pr. resultat](../kostpris-pr-resultat/) for, hvorfor at udeLade frivilligTidsVærdi systematisk underVurderer sand leveringsKostpris.

## Faldgruber

- **At bruge en enkelt blanket-rate for strukturelt forskellige roller.** En national-gennemsnit-lønRate anvendt på en professionel pro-bono-time (juridisk, finansiel, klinisk) drastisk underVurderer den; match raten til den erstattede rolle, hvorEnd opgaven er faglært.
- **Dobbelttælling mod betalt-personale-kostpris.** Hvis frivillige substituerer for arbejde, der ellers ville være betalt, sikr, værdiSætningen er additiv til kontant-udgift, ikke lagret på toppen af en allerede-inflateret personale-estimering.
- **At citere en forFalden rate uden en dato.** Independent Sectors og ONS's rater ændrer sig årligt (eller er kun periodisk genEstimeret, i ONS's tilfælde); et uDateret frivilligTids-tal i en rapport er tæt på meningsLøst for sammenligning.
- **At behandle frivilligTidsVærdi som et fundraising-aktiv.** Det er en regnskabsJustering for at forstå sand ressourceKostpris, ikke nye penge en velgørenhedsOrganisation kan bruge; at sammenblande de to misLeder en bestyrelse, der læser regnskaberne.

## Kilder

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
