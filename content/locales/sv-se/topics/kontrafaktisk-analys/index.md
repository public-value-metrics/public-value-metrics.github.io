# Kontrafaktisk analys

En kontrafaktisk situation är en uppskattning av vad som skulle ha hänt i frånvaro av en insats. Utan en sådan kan en observerad förändring efter att ett program lanseras inte skiljas från en förändring som skulle ha hänt ändå — ingen kontrafaktisk situation, inget bevis på effekt, hur övertygande före-och-efter-siffrorna än ser ut. HM Treasurys Magenta Book behandlar konstruktionen av en trovärdig kontrafaktisk situation som den centrala metodologiska uppgiften i effektutvärdering, viktigare än något annat enskilt designval.

## Varför det spelar roll

"Brottsligheten sjönk med 15% året efter att vi införde programmet" är inte bevis på att programmet fungerade om du inte vet vad som skulle ha hänt med brottsligheten utan det — brottsligheten kunde ha sjunkit med 20% ändå på grund av orelaterade ekonomiska eller demografiska trender, vilket betyder att programmet faktiskt förvärrade läget relativt den kontrafaktiska situationen, trots att rådata förbättrades. Detta är det enskilt vanligaste analytiska felet i effektpåståenden från offentlig och social sektor: att missta en före/efter-jämförelse för bevis på orsakssamband. Magenta Book är tydlig med att effektutvärdering existerar för att besvara en kontrafaktisk fråga — "vilken skillnad gjorde denna insats?" — och att besvara den kräver att uppskatta, inte bara beskriva, den värld som inte inträffade.

Olika metoder konstruerar den kontrafaktiska situationen med olika grader av tillförlitlighet, och statlig utvärderingsvägledning rangordnar dem därefter. Randomiserade kontrollerade studier (RCT), där individer eller områden slumpmässigt tilldelas att få en insats eller inte, producerar den starkaste kontrafaktiska situationen eftersom randomiseringen säkerställer att behandlings- och kontrollgrupperna i genomsnitt endast skiljer sig åt genom att ha mottagit insatsen. Cabinet Office och What Works Network har främjat RCT:er inom brittisk offentlig politik sedan 2012 års rapport "Test, Learn, Adapt" från Behavioural Insights Team, just eftersom svagare design är sårbar för störfaktorer — den observerade skillnaden kan spegla vem som valde att delta, inte programmets effekt. Där randomisering är opraktisk eller oetisk (som ofta är fallet för program med en lagstadgad rättighet, eller för hela befolkningens policyändringar), fastställer Magenta Book en explicit hierarki av svagare men fortfarande användbara alternativ: matchade jämförelsegrupper, differens-i-differenser-design, regressionsdiskontinuitet kring behörighetströsklar, och som en sista utväg, enkel före/efter-jämförelse — tydligt markerad som den svagaste formen av bevis, benägen att förväxla programmets effekt med effekten av allt annat som förändrades samtidigt.

## Beräkningen

Den kontrafaktiska inramningen, tillämplig över alla metoder:

```
Uppskattad effekt = Utfall（med insats） − Utfall（kontrafaktisk
                    situation: utan insats）

INTE:
Uppskattad effekt ≠ Utfall（efter） − Utfall（före）
                    ［förväxlar tid med behandling］
```

Differens-i-differenser, en av de vanligaste kvasi-experimentella designerna i statlig utvärdering, isolerar behandlingseffekten genom att subtrahera jämförelsegruppens egen före/efter-förändring:

```
DiD-uppskattning = ［Utfall（behandlad, efter） − Utfall
                    （behandlad, före）］
                  − ［Utfall（jämförelse, efter） − Utfall
                    （jämförelse, före）］
```

Detta tar bort varje trend som är gemensam för båda grupperna (t.ex. en nationell ekonomisk förändring som påverkar alla), och lämnar endast den differentiella förändring som kan tillskrivas insatsen.

## Genomräknat exempel

**Sysselsättningsprogram, före/efter (svag design)**: ett jobbstödsprogram rapporterar att deltagarnas sysselsättning steg från 40% till 55% under ett år — en naiv slutsats om "+15 procentenheter tack vare programmet."

**Samma program, differens-i-differenser (starkare design)**: en matchad jämförelsegrupp av liknande icke-deltagare, hämtad från samma lokala arbetsmarknad, visar att sysselsättningen steg från 38% till 47% under samma år (en nationell ekonomisk återhämtning pågick).

```
Behandlad grupps förändring:   55% − 40% = +15 procentenheter
Jämförelsegruppens förändring: 47% − 38% = +9 procentenheter

DiD-uppskattning （sann programeffekt） = 15 − 9
                                        = +6 procentenheter
```

Den ärliga tillskrivningsbara effekten är 6 procentenheter, inte 15 — mer än hälften av den skenbara före/efter-förbättringen skulle ha hänt oavsett programmet, driven av samma ekonomiska återhämtning som lyfte jämförelsegruppen.

**Regressionsdiskontinuitet, behörighetströskel**: ett bidragsprogram är endast tillgängligt för företag med färre än 50 anställda. Att jämföra utfall för företag strax under tröskeln (45–49 anställda, berättigade) mot företag strax över den (50–54 anställda, ej berättigade) ger en trovärdig kontrafaktisk situation eftersom företag på ömse sidor om en godtycklig administrativ gräns annars är lika — tröskeln, inte någon underliggande företagskaraktäristik, avgör behörighet. En genomsnittlig utfallsskillnad på 2 000 £ mellan de två grupperna, observerad endast vid tröskeln, kan tillskrivas bidraget med mycket större tillförsikt än en enkel jämförelse av alla berättigade mot alla icke-berättigade företag (som skiljer sig systematiskt i storlek).

## Koppling till mjukvaruutveckling

Kontrafaktiskt tänkande bör forma hur effektspårningssystem och utvärderingspipeliner för statlig och social sektors mjukvara utformas:

- Bygg in fångst av jämförelsegrupp i ett system från början — genom att registrera vilka som var berättigade men inte anmälda, eller en matchad icke-deltagande kohort — istället för att i efterhand anpassa det efter att ett program redan körts och endast före/efter-data finns.
- Där randomisering är genomförbar (en stegvis lansering, en digital tjänst aktiverad för vissa användare innan andra), instrumentera systemet för att bevara den slumpmässiga tilldelningen som ett sökbart fält; en stegvis lansering förstör oavsiktligt sitt eget utvärderingsvärde om tilldelningsordningen inte loggas.
- Detta är den grundläggande metoden bakom [effektutvärderingsmetoder](../effektutvärderingsmetoder/) och är det som skiljer den från [effektutvärdering kontra processutvärdering](../effektutvärdering-kontra-processutvärdering/), där den senare frågar om ett program levererades som avsett snarare än om det orsakade en effekt.
- [Additionalitet och dödviktsförlust](../additionalitet-och-dödviktsförlust/) och [förskjutning och tillskrivning](../förskjutning-och-tillskrivning/) är båda, i grunden, kontrafaktiska frågor — dödviktsförlust är "vad skulle detta specifika utfall ha varit utan insatsen", tillämpat på justeringsnivå snarare än fullständig utvärderingsdesign.

## Fallgropar

- **Att behandla före/efter som bevis på orsakssamband.** Detta är det vanligaste och mest konsekvensrika felet i offentlig och social sektors effektrapportering; en före/efter-förändring förväxlar programmets effekt med allt annat som förändrades under samma period.
- **Att använda en jämförelsegrupp som systematiskt skiljer sig från den behandlade gruppen.** En matchad jämförelsegrupp måste vara genuint lik på relevanta karaktäristika (se Magenta Books metodhierarki för kontrafaktisk analys); att jämföra programdeltagare (som valde att delta, och ofta är mer motiverade) mot icke-deltagare (som inte gjorde det) riskerar selektionsbias förklädd till programeffekt.
- **Att förstöra randomiseringsmöjligheter genom dålig leveransdesign.** En stegvis eller randomiserad lansering bevarar endast sitt utvärderingsvärde om tilldelningen är genuint slumpmässig och registrerad — att låta lokala chefer välja vem som går först motverkar syftet.
- **Att överdriva precision från en svag design.** En före/efter-uppskattning bör presenteras som indikativ, inte som en uppmätt effektstorlek; Magenta Books evidenshierarki existerar så att ett påståendes styrka matchar styrkan hos den design som producerade det.

## Källor

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
