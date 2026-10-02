# Alternativkostnad i offentliga utgifter

Alternativkostnad är värdet av det bästa alternativ som går förlorat när ett offentligt organ binder pengar, personaltid eller politiskt kapital till ett alternativ istället för ett annat. I ett departement med en fast budget är varje pund som spenderas på ett program en pund som inte kan spenderas på det näst bästa programmet — den verkliga kostnaden för ett beslut är inte vad det kostar, utan vad det tränger undan.

## Varför det spelar roll

Offentliga budgetar är kassabegränsade inom en utgiftsöversiktsperiod, så — till skillnad från ett växande privat företag — kan ett statligt departement inte bara "hitta mer pengar" för en bra idé; att finansiera den innebär att avfinansiera något annat. HM Treasurys Green Book behandlar detta som grundläggande: varje bedömning måste jämföra en insats mot en "gör minimum"-baslinje *och* mot realistiska alternativa användningar av samma resurs, just eftersom den verkliga frågan ett finansdepartementets utgiftsteam ställer aldrig är "är detta bra?" utan "är detta bättre än vad annat dessa pengar kunde köpa?" Green Books centrala bedömningsprincip — att offentliga resurser bör flöda till insatsen med högst nettosocialt värde per pund — är alternativkostnad uttryckt som policy.

Detta är lätt att uttrycka och svårt att tillämpa eftersom "det näst bästa alternativet" sällan är synligt i ett enskilt affärsärende. Ett bidragsprogram på 2 miljoner £ för ungdomssysselsättning jämförs, i affärsärendet, mot att inte göra något — men den ärliga jämförelsepunkten är det näst bästa ungdomssysselsättningsinitiativet, eller till och med den näst bästa användningen av 2 miljoner £ var som helst i portföljen, inklusive utgifter som inte gäller sysselsättning. Magenta Book (HM Treasury, 2020) varnar explicit för att utvärderingar som jämför "med insats" mot "utan insats" underskattar ribban en insats måste klara, eftersom "utan denna insats" inte är detsamma som "med ingenting alls" — frigjorda pengar finansierar något annat.

## Beräkningen

```
Alternativkostnad för att välja A = värdet av det bästa
                                    förlorade alternativet B

Nettoofffentligt värde av A = värde(A) − värde(B), inte
                              värde(A) − 0
```

Det finns ingen universell formel eftersom det förlorade alternativet är kontextspecifikt, men disciplinen generaliseras: identifiera den realistiska näst bästa användningen av samma budgetpost (inte ett idealiserat "gör ingenting"), värdera den på samma grund (monetariserad där möjligt, enligt [samhällsekonomisk kostnads-nyttoanalys](../social-cost-benefit-analysis/)), och subtrahera.

## Genomräknat exempel

**Departementsbudgetpost**: en digital omställningsfond på 5 miljoner £ kan finansiera exakt ett av två förslag detta budgetår.

- *Alternativ A*: en ny ärendehanteringsplattform, monetariserad nytta 7,2 miljoner £ över 5 år (effektivitetsbesparingar plus snabbare ärendelösning).
- *Alternativ B*: en identitetsverifieringstjänst delad mellan tre departement, monetariserad nytta 6,4 miljoner £ över 5 år.

Ett naivt affärsärende för A jämför 7,2 miljoner £ i nytta mot 5 miljoner £ i kostnad och rapporterar ett nytta-kostnadsförhållande på 1,44:1 — till synes starkt. Men eftersom A och B konkurrerar om samma 5 miljoner £ är alternativkostnaden för att välja A B:s förlorade nytta på 6,4 miljoner £. Det *netto*resultatet för A jämfört med det realistiska alternativet är endast 7,2m − 6,4m = 0,8 miljoner £, inte hela 7,2 miljoner £ i rubrik. Om ett tredje alternativ, C, erbjöd 7,5 miljoner £ i nytta för samma 5 miljoner £, skulle finansiering av A över C förstöra 0,3 miljoner £ i offentligt värde även om A:s eget affärsärende ser fullt motiverat ut isolerat.

**Kommunal personaltid**: en kommuns tremannateam för data kan antingen bygga en instrumentpanel för bostadskö (beräknad att spara 400 handläggartimmar/år, värderade till 28 £/timme = 11 200 £/år) eller ett triageverktyg för bidragsbedrägeri (beräknat att förhindra 85 000 £/år i felaktiga utbetalningar). Att bygga instrumentpanelen har en alternativkostnad på 85 000 £/år i förlorad nytta, inte bara löneutgiften för dataenheten — den verkliga kostnaden för den "gratis" interna byggnationen är den mycket större nyttan teamet kunde ha producerat någon annanstans.

## Koppling till mjukvaruutveckling

Teknisk kapacitet inom ett offentligt organ är i sig en begränsad budget — sprintkapacitet, inte pund — och samma disciplin gäller direkt:

- Namnge alltid jämförelsepunkten: en funktions affärsärende bör ange vad annat samma team-veckor kunde leverera, inte bara dess egen avkastning.
- Behandla "vi har ledig teknisk kapacitet" som starten på en alternativkostnadsanalys, inte slutet — ledig kapacitet har fortfarande en bästa alternativ användning, även om den användningen är att betala av teknisk skuld (se [teknisk skuld som erosion av offentligt värde](../technical-debt-as-public-value-erosion/)).
- Koppla detta direkt till [valuta för pengarna](../value-for-money/): VFM:s "ekonomi"-test är meningslöst utan en ärlig alternativkostnadsjämförelse, och till [kostnad för fördröjning i offentliga program](../cost-of-delay-in-public-programmes/), som prissätter tidsdimensionen av samma logik om förlorade alternativ.

## Fallgropar

- **Att jämföra mot "gör ingenting" istället för det näst bästa alternativet.** Green Book kräver en "gör minimum"-baslinje just eftersom den verkliga alternativkostnaden sällan är noll; ett affärsärende som bara klarar "gör ingenting"-ribban har inte visat att det slår det realistiska alternativet.
- **Att ignorera konkurrens mellan departement om samma pott.** Budgetposter som ser öronmärkta ut inom en förvaltning konkurrerar ofta på en högre nivå (en utgiftsöversikt, ett kapitalprogram) där den verkliga alternativkostnaden realiseras.
- **Att anta att frigjord personaltid har noll ytterligare värde.** "Sparad" tid skapar endast värde om den omdisponeras till något värdefullt; om den alternativa användningen inte existerar är besparingen nominell.

## Källor

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
