# Social kapital-målinger

Social kapital-målinger kvantificerer netVærkene, tilliden, og borgerDeltagelsen, der lader fællesskaber og institutioner fungere effektivt — det "bindeVæv," der ikke har nogen linje på noget balanceRegnskab, men som synligt kollapser kostpris og friktion, når til stede, og synligt hæver den, når absent. Den moderne rammeSætning kommer fra Robert Putnams "Bowling Alone" (2000), som skelnede binde-kapital (bånd inden i en lignende gruppe) fra bro-kapital (bånd over forskellige grupper); Storbritanniens Office for National Statistics har siden bygget et stående indikator-sæt for at spore det nationalt.

## Hvorfor det betyder noget

Putnams centrale empiriske påstand — dokumenteret gennem faldende amerikansk borgerForenings-medlemsSkab, kirkeFremmøde, og unions-deltagelse over det sene tyvende århundrede — var, at social kapital forudSiger resultater, konventionel økonomi kæmper med at forklare: lavere kriminalitet, bedre børneVelfærd, mere effektiv lokal regering, hurtigere økonomisk genOpretning efter chok. Binde-kapital (stærke bånd inden i en tæt-knyttet gruppe) er god for gensidig støtte men kan forstEne til insularitet; bro-kapital (svagere bånd over forskellige grupper) er, hvad typisk korrelerer med adgang til mulighed, informations-flow, og institutionel tillid. ONS tog dette seriøst nok til at bygge en national indikator-ramme — dens "Social Capital in the UK"-serie (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) sporer fire søjler: personlige relationer, social-netVærk-støtte, borgerEngagement, og tillid og kooperative normer, hver bygget fra etablerede undersøgelses-spørgsmål (Community Life Survey, Understanding Society). For statslige digitale tjenester er social kapital dobbelt relevant: det er både et resultat, nogle programmer forsøger at bygge (fællesskabs-resiliens-finansiering, social recept-skrivning), og et input, der bestemmer, hvor godt en tjeneste faktisk vil blive adopteret — en tjeneste rullet ind i et høj-tillid, velNetVærket fællesskab vil sprede sig gennem mund-til-mund på en måde, en identisk tjeneste i et lav-tillid-område ikke vil.

## Beregningen

```
ONS fire-søjle-ramme (indikatorer, illustrative):

Personlige relationer:      % med nogen at lide på i en krise
Social-netVærk-støtte:       % der kunne låne penge fra venner/
                            familie, hvis behøvet
BorgerEngagement:            % der frivilligede eller tog
                            borgerHandling i de seneste 12
                            måneder
Tillid og kooperative normer: % der er enige "de fleste
                            mennesker kan stoles på"

Intet enkelt ONS-komposit-score offentliggøres — søjlerne
rapporteres separat, med vilje, fordi at aggregere dem til et
indeks ville skjule, hvilken specifik søjle er svag.

Putnams binde-/bro-opdeling (ramme, ikke en formel):
  binde-kapital ≈ densitet af bånd inden i en homogen gruppe
  bro-kapital ≈ frekvens/styrke af bånd over distinkte grupper
```

## Gennemregnet eksempel

**Kvarters-social-kapital-snapShot**: en Community-Life-Survey-stil-poll af et lokalt område finder 78% har nogen at lide på i en krise (personlige relationer), 61% kunne låne penge, hvis behøvet (netVærk-støtte), 24% frivilligede i det seneste år (borgerEngagement), og 41% er enige "de fleste mennesker kan stoles på" (tillid og normer) — versus nationale gennemsnit på groft 85%, 70%, 30%, og 45% respektivt (illustrativt, kalibrér mod den aktuelle ONS-bulletin). Området under-indekserer på hver søjle men mest skarpt på tillid (41% vs. 45% nationalt, et 4-point-gab) og borgerEngagement (24% vs. 30%, et 6-point-gab) — flagende borgerEngagement, ikke tillid, som det største relative underSkud værd målrettet investering (et fællesskabs-bevillings-program, for eksempel) snarere end et generisk "byg tillid"-initiativ.

**Binde vs. bro, tjenesteDesign**: et jobProgram i et tæt-knyttet fællesskab finder, henvisninger rejser hurtigt inden i fællesskabet (høj binde-kapital: ord spreder sig inden for dage), men programmet kæmper med at nå indbyggere uden for det netVærk (lav bro-kapital: optagelse uden for kerne-fællesskabet er nær nul efter måneder). Fikset antydet er ikke "mere marketing" men med vilje at bygge bro-bånd — partnerende med organisationer, der sidder *uden for* det eksisterende netVærk, da binde-kapital alene ikke kan løse et bro-kapital-problem.

## Forbindelse til softwareudvikling

- Digitale platforme, der ruter gensidig hjælp, frivilligHed, eller fællesskabs-bevillinger (en "lokal-forbindelse"-tjeneste, for eksempel), bygger litteralt bro-kapital-infrastruktur; deres succesMåling bør være netVærk-diversitet af forbindelser gjort, ikke blot transaktions-tælling — se [regering-som-en-platform](../government-as-a-platform/) for det bredere mønster af infrastruktur, andre bygger værdi på toppen af.
- Hvor et programs forandringsTeori explicit målretter social kapital som et resultat (en fællesskabs-resiliens-fond, en social-recept-skrivnings-tjeneste), bør dets [forandringsTeori](../theory-of-change/) og [logikModel](../logic-model/) navngive den specifikke søjle (tillid, borgerEngagement, netVærk-støtte), det forventer at flytte, snarere end et uDifferentieret "byg fællesskab"-resultat, der ikke kan måles mod ONS-baseLinen.
- Social-kapital-indikatorer er en nyttig lighedsLinse sammen med [Index of Multiple Deprivation](../index-of-multiple-deprivation/): et område kan være indkomst-deprivet men socialt rigt, eller vice versa, og de to peger på meget forskellige interventioner.

## Faldgruber

- **At kollapse de fire ONS-søjler ind i et komposit-score.** ONS gør med vilje ikke dette; et enkelt tal skjuler, hvilken specifik søjle driver en lav aflæsning, og gennemsnitsBeregning maskerer et fællesskab, der er høj-tillid men borgerligt uEngageret, versus en, der er det omvendte.
- **At antage social kapital altid er godt.** Tæt binde-kapital i en insulær gruppe kan aktivt modstå udEnFor-institutioner (inklusive statslige tjenester); Putnams egen analyse behandler binde og bro som forskellige goder med forskellige, nogle gange konflikterende, effekter.
- **At bruge undersøgelses-baserede social-kapital-målinger som en realTid-operationel-måling.** De underliggende undersøgelser (Community Life Survey, Understanding Society) kører årligt eller mindre ofte; behandl social-kapital-data som en langsomt-bevægende kontekstuel indikator, ikke noget et tjenesteDashboard kan opdatere ugentligt.

## Kilder

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
