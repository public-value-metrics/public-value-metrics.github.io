# Velgørenhedsorganisations overheadrate

VelgørenhedsOrganisations overheadRate er administrativ og fundraising-udgift udtrykt som en procentdel af samlet udgift. Det er det enkelte mest efterspurgte tal i velgørende givning — brugt af givere, vagtHunde, og endda nogle finansiere som en proxy for effektivitet — og det er også en af de mest grundigt afKrediterede effektivitetsMålinger i sektoren, med organisationerne, der populariserede den, offentligt afvisende den i 2013.

## Hvorfor det betyder noget

Den 17. juni 2013 offentliggjorde GuideStar, BBB Wise Giving Alliance, og Charity Navigator — de tre største amerikanske nonprofit-vurderings- og informationsOrganer, hvis egne historiske vurderinger havde hjulpet med at befæste overheadRate som en genvej for velgørenhedsKvalitet — et fælles åbent brev til amerikanske givere, "The Overhead Myth," der explicit angav, overheadRate er en dårlig måling for en velgørenhedsOrganisations præstation, og opfordrede givere til i stedet at kigge på transparens, styring, og resultater. Dette var en direkte vending af netop de institutioner, der havde bygget giverKultur omkring raten for et decennium.

Det underliggende problem er strukturelt, ikke kun om optik: en lav overheadRate kan opnås ved at underInvestere i netop de ting, der gør en velgørenhedsOrganisation effektiv — et dekamt sagsStyringsSystem, trænet personale, overvågning og evaluering — fordi disse ofte bogføres som "admin" snarere end "program"-kostpris. En velgørenhedsOrganisation, der sulter sin backOffice for at rapportere 5% overhead, kan være mindre i stand til at levere resultater end en, der bruger 20% på en ordentligt ressourceret operation. I England og Wales styrer Charity Commissions vejledning til bestyrelsesMedlemmer væk fra en enkelt overheadProcentdel som en effektivitetsTest, og spørger i stedet bestyrelsesMedlemmer om at rapportere, hvad velgørenhedsOrganisationen opnåede mod sine mål — se SORP-rapporteringsKravene diskuteret i [kostpris pr. modtager](../cost-per-beneficiary/).

## Beregningen

```
OverheadRate = (administrativ kostpris + fundraising-kostpris)
              / samlet udgift

Almindelige varianter:
  ProgramRate               = program (direkte velgørende)
                             udgift / samlet udgift
                             = 1 − overheadRate
  Fundraising-effektivitet   = fundraising-kostpris / rejste
                             midler
```

Ingen af disse formler indeholder nogen information om opnåede resultater. En velgørenhedsOrganisation kan minimere hver af dem og stadig svigte hver modtager; se [kostpris pr. resultat](../cost-per-outcome/) for målingen, der faktisk engagerer sig med, om pengene virkede.

## Gennemregnet eksempel

To velgørenhedsOrganisationer, samme samlet udgift:

- **VelgørenhedsOrganisation A**: £1.000.000 samlet udgift, £80.000 admin + fundraising → overheadRate 8%. Den har ingen overvågnings- og evaluerings-funktion, en overArbejdet finansMedarbejder, og intet sagsStyringsSystem; personaleOmsætning er høj og resultatData indsamles ikke.
- **VelgørenhedsOrganisation B**: £1.000.000 samlet udgift, £220.000 admin + fundraising → overheadRate 22%. Den finansierer et lille evalueringsTeam, et sagsStyringsSystem, der fanger resultatOpFølgning, og ordentlig beskyttelsesTræning.

En giver, der screenerer rent på overheadRate, vælger A og afviser B — det modsatte af, hvad [kostpris pr. resultat](../cost-per-outcome/)-evidens sandsynligvis ville vise, fordi B er den enkelte af de to, positioneret til at demonstrere, eller forbedre, sine faktiske resultater.

## Forbindelse til softwareudvikling

FinansOg tilskuds-rapporterings-software for sektoren hardKoder ofte overhead-/program-opdelingen som et kategorisk felt på hver kostprisLinje, fordi det er, hvad regulatorer og nogle finansiere stadig kræver i statutoriske indberetninger. Ingeniører, der bygger disse systemer, bør behandle det krav som en compliance-forpligtelse, ikke et designSignal om, at overheadRate er målingen, værd at fremhæve prominently på et dashboard; kobl den, hvorEnd den vises, med en resultat-baseret måling, så en seer ikke kan læse overheadRate isoleret. Se [giver-afkast-på-investering](../donor-return-on-investment/) for målingen, der bør sidde næste til den, og [value for money](../value-for-money/) for det offentlige-sektor-ækvivalente argument mod enkelt-rate-effektivitets-proxyer.

## Faldgruber

- **At bruge overheadRate som en screenings-afSkæring.** At afvise enhver velgørenhedsOrganisation over en arbitrær tærskel (f.eks. "ikke mere end 15% overhead") straffer systematisk ordentligt ressourcerede, velEvaluerede organisationer og belønner underInvestering.
- **FejlKategorisering af direkte-leverings-kostpris som overhead**, eller omvendt — regnskabsKonventioner for, hvad tæller som "program" versus "admin," varierer nok mellem velgørenhedsOrganisationer, at rater ofte ikke engang er sammenlignelige ved overFladisk betragtning.
- **At antage lav overhead antyder høj impact.** De to er, i bedste fald, uKorrelerede; se kernePåstanden i 2013-Overhead-Myth-brevet.
- **At ignorere, at nogle legitime strategier kræver højere kortSigtet overhead.** En kapacitetsOpbygnings- eller organisatorisk-udviklings-fase hæver med vilje adminUdgift for at forbedre senere levering.

## Kilder

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
