# Välfärdsvärdering (WELLBY)

Välfärdsvärdering prissätter en policys effekt direkt i termer av livstillfredsställelse, med WELLBY (välfärdsjusterat levnadsår) som enhet — en WELLBY motsvarar en enpoängsförändring på en livstillfredsställelseskala 0–10, upprätthållen under ett år. Det är HM Treasurys officiellt sanktionerade alternativ till att monetarisera varje nytta genom betalningsvilja.

## Varför det spelar roll

HM Treasurys "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) förde formellt in subjektiv välfärdsdata i den centrala statens bedömning, vilket ger analytiker en väg att värdera utfall — social gemenskap, mental hälsa, säkerhet, medborgardeltagande — som metoder för [betalningsvilja](../stated-preference-valuation/) och [avslöjad preferens](../revealed-preference-valuation/) har svårt att prissätta övertygande, eftersom människor ofta är dåliga på att förutse hur mycket en vara faktiskt kommer att påverka deras livstillfredsställelse. Vägledningen, utvecklad tillsammans med What Works Centre for Wellbeing, fastställer ett rekommenderat monetärt värde per WELLBY — 13 000 £ (2021 års priser, regelbundet reviderade) — härlett från sambandet observerat i stora välfärdsundersökningar (huvudsakligen ONS Annual Population Survey, som har ställt de fyra ONS4-välfärdsfrågorna sedan 2011) mellan inkomst och livstillfredsställelse, vilket ger analytiker en omvandlingskurs tillbaka till pund när en monetariserad jämförelse mot andra Green Book-bedömningar behövs.

Metoden spelar roll eftersom den vänder på den vanliga värderingslogiken: istället för att fråga vad människor skulle betala för ett utfall (betalningsvilja) eller härleda värde från en relaterad marknadstransaktion (avslöjad preferens) mäter den utfallets effekt på rapporterad livstillfredsställelse direkt, och kringgår klyftan mellan vad människor säger att de vill ha och vad som faktiskt gör dem bättre ställda. Detta är också dess centrala begränsning — självrapporterad livstillfredsställelse påverkas av anpassnings- och ramningseffekter som en noggrann praktiker måste kontrollera för.

## Beräkningen

```
WELLBY = 1 livstillfredsställelsepoäng （skala 0-10） upprätthållen
        för 1 person under 1 år

Totala WELLBY från en policy =
  Σ (förändring i livstillfredsställelsepoäng) × (antal
  berörda personer) × (varaktighet i år, diskonterad till
  den samhälleliga diskonteringsräntan)

Monetariserat värde = Totala WELLBY × värde per WELLBY
  （HM Treasurys rekommenderade värde: 13 000 £ per WELLBY,
   2021 års priser, föremål för regelbunden revidering —
   kontrollera aktuell vägledning innan användning）
```

Detta skiljer sig från hälsoekonomins [välfärdsjusterade levnadsår](../wellbeing-adjusted-life-years/), som typiskt är förankrat i hälsorelaterade livskvalitetsskalor (EQ-5D och liknande) snarare än allmän livstillfredsställelse; de två är relaterade men inte utbytbara, och Green Book-bedömningar bör vara tydliga med vilken skala och insamlingsmetod som ligger bakom en rapporterad WELLBY-siffra.

## Genomräknat exempel

**Kommun**: en kommun driver ett kompisprogram för isolerade äldre invånare, som betjänar 400 personer. En före/efter-välfärdsundersökning med ONS4-livstillfredsställelsefrågan visar att deltagarnas genomsnittliga poäng steg från 5,8 till 6,5 — en vinst på 0,7 poäng — upprätthållen under programmets 2-åriga finansieringsperiod.

```
Genererade WELLBY = 400 personer × 0,7 poäng × 2 år = 560 WELLBY
Monetariserat värde = 560 × 13 000 £ = 7,28m £
Programkostnad = 450 000 £ över 2 år

Nytta-kostnadsförhållande ≈ 7,28m £ / 0,45m £ ≈ 16:1
```

Ett så högt förhållande bör föranleda granskning snarare än firande — Green Books välfärdsvägledning varnar explicit för att ta självrapporterade vinster från små urval till nominellt värde utan att kontrollera för selektionseffekter (var det bara de mest sociala, mest sannolikt att förbättras, invånarna som anslöt sig till programmet?) och utan en jämförelsegrupp; en väldesignad utvärdering skulle netta bort en kontrafaktisk förändring observerad hos icke-deltagare, se [kontrafaktisk analys](../counterfactual-analysis/).

**Statlig myndighet**: att jämföra två sysselsättningsprogram med WELLBY istället för enbart inkomst fångar att arbetslöshet bär en välfärdskostnad utöver förlorad inkomst — brittisk välfärdsforskning finner konsekvent att arbetslöshet minskar livstillfredsställelse mer än vad enbart inkomstförlusten skulle förutsäga, på grund av de icke-monetära effekterna av förlorad struktur, syfte och social kontakt. Ett program utvärderat enbart på inkomstökning skulle undervärdera sitt värde jämfört med ett som dessutom utvärderas på WELLBY.

## Koppling till mjukvaruutveckling

Välfärdsvärdering når sällan tekniska team direkt, men den formar vad "framgång" definieras som för sociala och offentliga tjänsters produkter — en digital kompisplattform, ett mentalvårdstriageverktyg eller en samhällsplattform för isolerade invånare bör förvänta sig att dess effekt så småningom mäts på detta sätt, vilket betyder att produktanalys behöver fånga *vem* som nås och *hur länge*, inte bara användningssiffror. Bygg in instrumentering för välfärdsundersökningar (ONS4 eller validerade motsvarigheter) i tjänsteutvärdering från början istället för att bulta på det i efterhand; att i efterhand anpassa en välfärdsbaslinje efter att en tjänst lanserats förlorar helt före/efter-jämförelsen. Se [utfall kontra output](../outcomes-vs-outputs/) och [effektutvärderingsmetoder](../impact-evaluation-methods/).

## Fallgropar

- **Ingen kontrafaktisk situation eller jämförelsegrupp.** En före/efter-välfärdsvinst utan kontroll för vad som skulle ha hänt ändå överdriver programmets effekt; se [kontrafaktisk analys](../counterfactual-analysis/) och [additionalitet och dödviktsförlust](../additionality-and-deadweight/).
- **Små, självselekterade urval.** Välfärdsundersökningar av programdeltagare som valde att delta är benägna för selektionsbias — de som anslöt sig och stannade var troligen redan på en uppåtgående trend.
- **Att behandla £-per-WELLBY-omvandlingen som exakt.** Det monetariserade värdet är en policykonvention härledd från inkomst-välfärdsregressioner, inte ett marknadspris; använd det för jämförbarhet över Green Book-bedömningar, inte som ett påstående om vad välfärd "är värd."
- **Att sammanblanda WELLBY med hälsorelaterade QALY.** De två mäter olika begrepp på olika skalor; se [välfärdsjusterade levnadsår](../wellbeing-adjusted-life-years/) för hälsoekonomivarianten och medelvärdesbilda dem inte tillsammans.

## Källor

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
