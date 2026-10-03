# Velfærdsvurdering (WELLBY)

Velfærdsvurdering prissætter en politiks effekt direkte i livstilfredshedsTermer, ved brug af WELLBY (velfærdsjusteret leveår) som sin enhed — en WELLBY er lig med en et-point-ændring på en 0–10 livstilfredshedsskala, vedvarende i et år. Det er HM Treasurys officielt sanktionerede alternativ til at pengegøre hver fordel gennem betalingsvillighed.

## Hvorfor det betyder noget

HM Treasurys "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) bragte formelt subjektiv velfærdsdata ind i centralstatslig vurdering, hvilket giver analytikere en vej til at værdisætte resultater — social forbindelse, mental sundhed, sikkerhed, borgerDeltagelse — som [stated preference](../stated-preference-valuation/) og [revealed preference](../revealed-preference-valuation/)-metoder kæmper med at prissætte overbevisende, fordi mennesker ofte er dårlige forudsigere af, hvor meget et gode faktisk vil påvirke deres tilfredshed med livet. Vejledningen, udviklet i fællesskab med What Works Centre for Wellbeing, sætter en anbefalet monetær værdi pr. WELLBY — £13.000 (2021-priser, revideret periodisk) — udledt fra forholdet observeret i store velfærdsundersøgelser (primært ONS's Annual Population Survey, som har spurgt de fire ONS4-velfærdsspørgsmål siden 2011) mellem indkomst og livstilfredshed, hvilket giver analytikere en omregningskurs tilbage til kroner, når en pengegjort sammenligning mod andre Green Book-vurderinger er nødvendig.

Metoden betyder noget, fordi den inverterer den normale vurderingsLogik: snarere end at spørge, hvad mennesker ville betale for et resultat (stated preference) eller udlede værdi fra en relateret markedstransaktion (revealed preference), måler den resultatets effekt på rapporteret livstilfredshed direkte, og omgår kløften mellem, hvad mennesker siger de ønsker, og hvad der faktisk gør dem bedre stillet. Dette er også dens centrale begrænsning — selvrapporteret livstilfredshed påvirkes af adaptations- og indramningseffekter, en omhyggelig praktiker skal kontrollere for.

## Beregningen

```
WELLBY = 1 livstilfredshedspoint (0-10-skala) vedvarende for
        1 person for 1 år

Samlede WELLBY'er fra en politik =
  Σ (ændring i livstilfredshedsscore) × (antal personer
    påvirket) × (varighed i år, diskonteret ved den
    samfundsmæssige diskonteringsrate)

Pengegjort værdi = Samlede WELLBY'er × værdi pr. WELLBY
  (HM Treasury anbefalet værdi: £13.000 pr. WELLBY,
   2021-priser, underlagt periodisk revision — kontrollér
   aktuel vejledning før brug)
```

Dette adskiller sig fra sundhedsøkonomiens [velfærdsjusterede leveår](../wellbeing-adjusted-life-years/), som typisk er forankret til sundhedsrelaterede livskvalitetsSkalaer (EQ-5D og lignende) snarere end generel livstilfredshed; de to er relaterede men ikke udskiftelige, og Green Book-vurderinger bør være explicitte om, hvilken skala og elicitationsmetode der ligger under et rapporteret WELLBY-tal.

## Gennemregnet eksempel

**Lokal myndighed**: en kommune kører et fællesskabsvenskabsprogram for isolerede ældre borgere, der betjener 400 mennesker. En før/efter-velfærdsundersøgelse ved brug af ONS4-livstilfredshedsspørgsmålet viser deltagernes gennemsnitlige score stige fra 5,8 til 6,5 — en gevinst på 0,7 point — vedvarende for programmets 2-årige finansierede varighed.

```
WELLBY'er genereret = 400 personer × 0,7 point × 2 år = 560
WELLBY'er
Pengegjort værdi = 560 × £13.000 = £7,28m
Programkostpris = £450.000 over 2 år

Fordel-kostforhold ≈ £7,28m / £0,45m ≈ 16:1
```

Et forhold så højt bør foranledige granskning snarere end fejring — Green Books velfærdsvejledning advarer explicit mod at tage selvrapporterede gevinster fra små stikprøver for pålydende uden at kontrollere for selektionseffekter (var det kun de mest sociale, mest-sandsynlige-til-at-forbedre borgere, der tilmeldte sig ordningen?) og uden en sammenligningsgruppe; en veldesignet evaluering ville nettoFøre en kontrafaktisk ændring observeret i ikke-deltagere, se [kontrafaktisk analyse](../counterfactual-analysis/).

**National regering**: at sammenligne to beskæftigelsesprogrammer ved brug af WELLBY'er snarere end indtjening alene fanger, at arbejdsløshed bærer en velfærdskostpris ud over tabt indkomst — britisk velfærdsforskning finder konsekvent, at arbejdsløshed reducerer livstilfredshed med mere end indkomsttabet alene ville forudsige, på grund af de ikke-pengemæssige effekter af at tabe struktur, mening, og social kontakt. Et program evalueret på indtjeningsgevinst alene ville underdrive sin værdi relativt til et evalueret yderligere på WELLBY'er.

## Forbindelse til softwareudvikling

Velfærdsvurdering sjældent når tekniske teams direkte, men det former, hvad "succes" defineres som for social sektors og offentlig tjenestes produkter — en digital venskabsplatform, et triageredskab til mental sundhed, eller en fællesskabsplatform for isolerede borgere bør forvente, at dens effekt til sidst måles på denne måde, hvilket betyder, at produktanalytik behøver at fange *hvem* der nås og for *hvor længe*, ikke blot brugsTællinger. Byg velfærdsundersøgelsesinstrumentering (ONS4 eller valideret ækvivalenter) ind i tjenesteEvaluering fra starten snarere end at bolte den på retrospektivt; at eftermontere en velfærdsBaseline, efter en tjeneste er lanceret, taber før/efter-sammenligningen fuldstændigt. Se [resultater versus output](../outcomes-vs-outputs/) og [effektevalueringsmetoder](../impact-evaluation-methods/).

## Faldgruber

- **Ingen kontrafaktual eller sammenligningsgruppe.** En før/efter-velfærdsgevinst uden kontrol for, hvad der ville have sket alligevel, overdriver programmets effekt; se [kontrafaktisk analyse](../counterfactual-analysis/) og [additionalitet og dødvægt](../additionality-and-deadweight/).
- **Små, selvSelekterede stikprøver.** Velfærdsundersøgelser af programdeltagere, der opted in, er tilbøjelige til selektionsbias — de mennesker, der tilmeldte sig og blev, var plausibelt allerede på en opadgående trend.
- **At behandle £-pr.-WELLBY-omregningen som præcis.** Den pengegjorte værdi er en politisk konvention udledt fra indkomst-velfærds-regressioner, ikke en markedspris; brug den til sammenlignelighed over Green Book-vurderinger, ikke som en påstand om, hvad velfærd "er værd."
- **At sammenblande WELLBY'er med sundhedsrelaterede QALY'er.** De to måler forskellige konstrukter på forskellige skalaer; se [velfærdsjusterede leveår](../wellbeing-adjusted-life-years/) for sundhedsøkonomivarianten og tag ikke et gennemsnit af de to sammen.

## Kilder

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
