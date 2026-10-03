# Flowmålinger i statslig levering

FlowMålinger — Littles Lov, work-in-progress (WIP)-grænser, og flow-effektivitet — beskriver, hvor hurtigt arbejde bevæger sig gennem et system med begrænset kapacitet. En sprint-board er et sådant system; en ydelses-krav-kø, et planlægnings-ansøgnings-register, eller en visa-sagsBehandling-bunke er netop samme matematik i en anden uniform.

## Hvorfor det betyder noget

Statslige sagsBelastninger er kø-systemer, og kø-systemer lyder kø-love, uanset om nogen måler dem. StatutoRiske afGørelses-perioder gør dette explicit: under Town-and-Country-Planning-regimet bærer de fleste minor-planlægnings-ansøgninger et 8-ugers statutorisk afGørelses-mål og major-ansøgninger 13 uger — en cyklus-tid-forpligtelse bagt direkte ind i loven. Home Offices asyl-sagsBehandling-bunke, granskeret gentagne gange af National Audit Office og Home Affairs Select Committee, er en vel-dokumenteret sag af et offentligt system, hvor work-in-progress voksede hurtigere end gennemStrømning for en sustained periode, hvilket drev cyklus-tider langt forbi nogen statutorisk eller tjeneste-forventning. FlowMålinger giver ingeniører og sagsBehandlings-ledere ligeligt et delt, kvantitativt vokabular for netop denne fejlTilstand, snarere end at efterlade det som et kvalitativt "bunke-problem."

## Beregningen

```
Littles Lov:  WIP = GennemStrømning × CyklusTid
          →   CyklusTid = WIP / GennemStrømning

Flow-effektivitet = aktiv (berørings-) tid / samlet cyklusTid
                    (Vacanti)

WIP-grænse-effekt: for fast gennemStrømning, at halvere WIP
halverer groft gennemsnitlig cyklusTid (Littles Lov omArrange-
ret) — grebet tilgængeligt uden at tilføje hovedTælling.
```

Se [DORA-målinger for offentlig værdi](../dora-metrics-for-public-value/) for den ækvivalente aritmetik anvendt på software-deployment-pipelines snarere end sagsBehandling.

## Gennemregnet eksempel

**Lokal myndigheds planlægnings-departement**: 400 ansøgninger åbne på et givet tidspunkt (WIP), teamet løser 50 ansøgninger/uge (gennemStrømning).

```
CyklusTid = WIP / GennemStrømning = 400 / 50 = 8 uger
```

Det lander netop på det statutoriske 8-ugers-mål for minor-ansøgninger — med intet slack, hvilket betyder, enhver variabilitet i indKommende efterspørgsel eller konsultant-respons-tid skubber afGørelser over den juridiske deadLine.

**Flow-effektivitet**: af de 8 uger (56 kalender-dage) har en ansøgning typisk omkring 6 timer af faktisk sagsBehandler-behandlings-tid.

```
Flow-effektivitet = 6 timer / (56 dage × 8 arbejdsTimer/dag)
                   = 6 / 448 ≈ 1,3%
```

Vacantis benchmark for software-teams sætter typisk flow-effektivitet til 15-20%; statslig sagsBehandling, med multiple statutoriske konsultant-overDragelser og offentlig-konsultation-vinduer, kører ofte en størrelsesOrden lavere. De 98,7% af "vente"-tid er, hvor de otte uger faktisk går — ikke i sagsBehandler-kapacitet.

**WIP-grænse-intervention**: at begrænse åbne ansøgninger pr. sagsBehandler til 15 i stedet for en uBegrænset 25 (holdende gennemStrømning konstant) skifter WIP fra 400 til groft 240 over et 16-persons-team:

```
Ny cyklusTid = 240 / 50 = 4,8 uger
```

En næsten-halvering af cyklusTid fra en politik-ændring, ikke en personale-stigning — samme greb DORA-stil-leverings-teams trækker, når de begrænser sprint-WIP.

## Forbindelse til softwareudvikling

FlowMålinger er det delte sprog mellem et leverings-teams Kanban-board og sagsBehandlings-gulvet, det bygger software for: en sagsBehandlers kø og en pull-request-kø styres begge af Littles Lov, og begge sprænger deres cyklus-tid-mål på samme måde — for meget WIP relativt til gennemStrømning. Dette betyder noget direkte for [kostpris af forsinkelse i offentlige programmer](../cost-of-delay-in-public-programmes/): cyklusTid × CoD er pundene, der sidder i køen i et givet moment, og det betyder noget for [tjenesteStandarder og transaktionsMålinger](../service-standards-and-transaction-metrics/), hvor et offentliggjort omløbs-mål er en cyklus-tid-forpligtelse, kun flowMålinger kan diagnosticere, når det misses. Et sagsBehandlings-systems software bør eksponere WIP og cyklusTid som førsteKlasse operationelle målinger, ikke begrave dem inde i et sagsStyringsSystem, ingen forespørger.

## Faldgruber

- **At tilføje WIP-grænser uden at fikse den rigtige flaskeHals.** Hvis begrænsningen er en ekstern statutorisk konsultants respons-tid, flytter at begrænse sagsBehandler-WIP blot køen opStrøms snarere end at forKorte den.
- **At behandle flow-effektivitet som et mål at manipulere.** At skynde de 1,3% af aktiv tid flytter kun marginalt cyklusTid; indflydelsen er næsten altid i vente-tilstandene, hvilket normalt betyder proces-redesign, ikke sagsBehandler-hastighed.
- **At ignorere variabilitet.** Littles Lov beskriver gennemsnit; en sagsBelastning med høj efterspørgsels-varians behøver buffer-kapacitet, ikke blot en strammere WIP-grænse, eller statutoriske deadLines vil stadig blive missede på den volatile tail, selv da gennemsnittet forbedres.
- **At måle WIP inkonsistent.** En sag "åben" i system-of-record men faktisk gået i stå, afVentende en tredjePart, er stadig WIP; at udeLukke den smigrer tallene uden at ændre borgerVendt realitet.

## Kilder

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
