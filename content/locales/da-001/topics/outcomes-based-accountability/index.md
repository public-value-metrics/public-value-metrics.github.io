# Resultat-baseret ansvarlighed (OBA)

Resultat-baseret ansvarlighed, også kaldet Results-Based Accountability (RBA), er Mark Friedmans ramme for at skille to spørgsmål, offentlig sektors rapportering vanemæssigt blander sammen: "gør befolkningen det godt?" (befolkningsAnsvarlighed) og "gør dette specifikke program det godt?" (præstationsAnsvarlighed). At sammenblande de to er, i Friedmans fortælling, den enkelte mest almindelige grund til, at velDrevne programmer bliver beskyldt for befolkningsTendenser, de aldrig havde magten til at flytte.

## Hvorfor det betyder noget

Friedman satte rammen op i *Trying Hard Is Not Good Enough* (2005), og argumenterede for, at det meste offentlige rapportering enten drukner beslutningsTagere i befolkningsNiveau-statistikker, intet enkelt organ kontrollerer (teenageGraviditetsRate, arbejdsløshedsRate, levetidForventning), eller drukner dem i programNiveau-aktivitetsTællinger (klienter set, henvisninger lavet), der ikke siger noget om, om nogens liv forbedredes. RBAs bidrag er et lille, disciplineret vokabular, der holder de to adskilte: befolkningsResultater (velvære-betingelser for en hel befolkning, som "børn fødes sunde") tilhører intet enkelt organ og kræver mange partnere, der bevæger sig sammen; præstationsMålinger (hvor godt et specifikt program betjener sine specifikke klienter) tilhører et organ og bør kun bedømmes mod, hvad det organ faktisk kan påvirke. Friedmans "tre præstationsSpørgsmål" — hvor meget gjorde vi, hvor godt gjorde vi det, og er nogen bedre stillet? — er nu indbygget over amerikansk stat- og amtshumanServiceKontrahering og, via den RBA-tilpassede konsulentFirma og værktøjskasse Clear Impact, bredt brugt i britisk og Commonwealth-lokal-regerings-bestilling. De praktiske indsatser er kontraktlige: et boligProgram bør ikke affundes, fordi byens hjemløshedsRate steg fra makroøkonomiske årsager uden for dens rækkevidde, men det bør absolut affundes, hvis dets egne klienter ikke huses.

## Beregningen

```
BefolkningsAnsvarlighed (det "store billede" et fællesskab,
en region, eller en nation deler):
  Resultat     — en velvære-betingelse (f.eks. "indbyggere er
                økonomisk sikre")
  Indikator(er) — en måling af den betingelse (f.eks. arbejds-
                løshedsRate, median-husholdningsIndkomst)
  → intet enkelt program ejer indikatoren; bevægelse kræver
    mange bidragydere

PræstationsAnsvarlighed (hvad et program er ansvarligt for):
  Hvor meget gjorde vi?    — aktivitetsVolumen (klienter
                             betjent, enheder leveret)
  Hvor godt gjorde vi det? — kvalitet/effektivitet (% der
                             fuldfører program, kostpris pr.
                             klient)
  Er nogen bedre stillet?  — resultatet, der betyder noget
                             (% i beskæftigelse 6 måneder
                             efter program, før/efter eller
                             mod en sammenligningsGruppe)

Et program bedømmes på det tredje præstationsSpørgsmål, aldrig
direkte på befolkningsIndikatoren, med undtagelse af hvor dets
skala og design plausibelt kunne flytte den alene.
```

## Gennemregnet eksempel

**Bykommuneret beskæftigelsesStøtteProgram**, 500 deltagere/år, kontraheret af en lokal myndighed under en RBA-stil-præstationsRamme:

```
BefolkningsIndikator (kontekst, ikke programmets scorecard):
  Byens arbejdsløshedsRate: 6,2% (op fra 5,8% det foregående
  år, drevet af en fabriksLukning uden for programmets
  kontrol)

PræstationsMålinger (programmets faktiske ansvarlighed):
  Hvor meget:    500 deltagere tilmeldt (mål 480) — opfyldt
  Hvor godt:     78% fuldførelsesRate; kostpris pr. fuldfører =
                £340.000 / 390 fuldførere ≈ £872
  Bedre stillet: af 390 fuldførere, 260 i varig beskæftigelse
                ved 6 måneder = 66,7% versus en matchet
                sammenligningsGruppes 41% (se kontrafaktisk
                analyse)
```

Under en befolkningsAnsvarlighed-læsning ser programmet ud til at fejle — byens arbejdsløshedsRate steg under dets vagt. Under RBAs præstationsAnsvarlighed-læsning lykkes programmet: det nåede sit volumenMål, holdt kvalitet stabil, og producerede et beskæftigelsesResultat 25,7 procentpoint over en matchet sammenligningsGruppe, mens befolkningsIndikatoren bevægede sig af grunde (en fabriksLukning) helt uden for programmets kontrol.

## Forbindelse til softwareudvikling

RBA kortlægger direkte på en velKendt SRE-distinktion: befolkningsIndikatorer er som forretningsNiveau-nordStjerneMålinger, intet enkelt ingeniørTeam ejer ende-til-ende (firmaIndtægt, markedsAndel), mens præstationsMålinger er som et teams egne SLO'er — de ting, det teams designBeslutninger faktisk flytter. Et dashboard, der rapporterer begge uden at mærke, hvilken er hvilken, inviterer netop den fejlTilskrivning RBA blev bygget til at forhindre: en vagtIngeniør, der bliver beskyldt for en måling, et afhængighedsTeam kontrollerer. Når man bestiller eller bygger rapporteringsRedskaber for resultatKontrakter, byg "hvor meget/hvor godt/bedre stillet"-triaden som førsteKlasse, separat-filtrerbare felter snarere end en enkelt blandet KPI — det er samme disciplin som at skille ledende og laggende indikatorer i [KPI'er i den offentlige sektor](../public-sector-kpis/). RBA er også ansvarlighedsLogikken under [betaling-efter-resultater og sociale virkningsObligationer](../payment-by-results-and-social-impact-bonds/): en PbR-kontrakt kan kun fair betale på "bedre stillet"-præstationsMålingen, aldrig på befolkningsIndikatoren, med undtagelse af hvor interventionen genuint er den dominerende driver af den.

## Faldgruber

- **At betale eller straffe et program mod en befolkningsIndikator, det ikke kan kontrollere.** Dette er den enkelte fejl RBA eksisterer for at forhindre; spor altid, om programmet er en stor eller lille bidragyder til befolkningsResultatet, før konsekvenser knyttes til det.
- **At rapportere "hvor meget" som var det "bedre stillet".** AktivitetsTællinger (klienter set) er de letteste data at indsamle og de mindst informative; insister på, "er nogen bedre stillet"-spørgsmålet besvares med rigtige resultatData, ideelt mod en kontrafaktual (se [kontrafaktisk analyse](../counterfactual-analysis/)).
- **At behandle RBA-indikatorer som faste for altid.** Friedmans metode er explicit iterativ — en "data, historie, hvad fungerer, handlingsPlan"-cyklus — ikke en enkeltstående scorecard-designØvelse.
- **Ingen sammenligningsGruppe for "bedre stillet".** En før/efter-ændring uden en kontrafaktual sammenblander programEffekt med den tendens, befolkningen ville have vist alligevel.

## Kilder

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
