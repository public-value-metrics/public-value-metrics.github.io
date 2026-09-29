# Valuta för pengarna (Value for Money, VFM)

Valuta för pengarna är den brittiska offentliga sektorns formella test för huruvida utgifter uppnår bästa möjliga balans mellan kostnad och nytta. HM Treasurys Green Book ramar in det genom tre "E":n — ekonomi (economy), effektivitet (efficiency) och ändamålsenlighet (effectiveness) — med rättvisa (equity) alltmer hävdad som ett omtvistat fjärde. Varje offentligt affärsärende som klarar granskning måste besvara alla tre explicit, inte bara hävda att utgiften "är värd det".

## Varför det spelar roll

VFM är inte synonymt med "billigt". Green Book (HM Treasury, 2022 års upplaga) är tydlig med att köpa det billigaste alternativet (ekonomi) utan att kontrollera att det ger de avsedda resultaten (ändamålsenlighet) är ett vanligt och kostsamt misstag — en upphandling som sparar 10% på enhetskostnad men levererar 40% mindre effekt är sämre valuta, inte bättre. Ramverket med tre E:n tvingar ett affärsärende att särskilja tre genuint olika typer av misslyckanden: att betala för mycket för insatsvaror, att slösa insatsvaror vid omvandling till resultat, och att producera resultat som inte omsätts i utfall som någon önskade. Brittiska statens utgiftskontroller — godkännandepunkter från finansdepartementet, National Audit Offices (NAO) VFM-studier och departementens redovisningsansvarigas bedömningar — är byggda kring detta trestegstest, så ett tekniskt affärsärende som bara adresserar kostnad (ekonomi) kommer att misslyckas i granskningen även om tekniken är sund.

Det "fjärde E:t", rättvisa, är omtvistat just eftersom det kan komma i konflikt med de andra tre: det mest effektiva sättet att leverera en tjänst nationellt är sällan det mest rättvisa, eftersom koncentrering av leverans där det är billigast att nå medborgare ofta innebär underservering av de svåraste att nå. Green Books revidering 2020 svarade på kritik (bland annat från 2020 års Treasury Select Committee och IPPR North) om att rena kostnad-nytta-förhållanden systematiskt gynnade redan välmående regioner, genom att kräva att bedömningar explicit adresserar fördelningseffekter — se [fördelningsviktning](../distributional-weighting/).

## Beräkningen

VFM är inte ett enda förhållande utan en tre- (eller fyr-) delad diagnos, tillämpad i sekvens:

```
Ekonomi:           Köps insatsvaror till lägsta rimliga kostnad
                    för den kvalitet som krävs? （£ per
                    insatsenhet）

Effektivitet:      Hur väl omvandlas insatsvaror till resultat?
                    （resultat / insatsvaror, t.ex. ärenden
                    hanterade per handläggartimme）

Ändamålsenlighet:  Ger resultaten faktiskt de avsedda
                    utfallen? （uppnådda utfall / avsedda
                    utfall）

［Rättvisa］:       Fördelas kostnader och nyttor rättvist
                    över befolkningen, eller koncentreras
                    de till dem som behöver minst?
```

Ett VFM-misslyckande kan uppstå oberoende i vilket skede som helst: ekonomisk upphandling med ineffektiv leverans; effektiv leverans av fel resultat; ändamålsenliga utfall köpta till orimlig kostnad. Se [nyckeltal för offentlig sektor](../public-sector-kpis/) för hur dessa omsätts i mätbara indikatorer, och [kostnadseffektivitetsanalys inom staten](../cost-effectiveness-analysis-in-government/) för den formella jämförelsemetoden.

## Genomräknat exempel

**Kommunalt kontaktcenter**: en kommun jämför två alternativ för ett nytt ärendehanteringssystem.

- *Alternativ A*: 600 000 £ licens (billigast tillgängligt), men handläggare tar fortfarande i genomsnitt 22 minuter per ärende eftersom arbetsflödet kräver manuell återinmatning mellan system — effektiviteten är dålig.
- *Alternativ B*: 900 000 £ licens, integrerat arbetsflöde, handläggare tar i genomsnitt 9 minuter per ärende.

Ekonomi ensamt gynnar A (300 000 £ billigare). Men vid 40 000 ärenden/år kostar A 40 000 × 22/60 = 14 667 personaltimmar; B kostar 40 000 × 9/60 = 6 000 personaltimmar. Med en fullt belastad personalkostnad på 28 £/timme kostar A 410 667 £/år i personaltid jämfört med B:s 168 000 £/år — ett effektivitetsgap på 242 667 £/år som överväger den initiala ekonomiskillnaden på 300 000 £ inom 14 månader. VFM gynnar B när effektivitet räknas in, inte A.

**Bidrag till ideell organisation**: en finansiär jämför ett bidrag på 50 000 £ som uppnår 200 lyckade jobbplaceringar (250 £/placering — till synes utmärkt ekonomi) mot ett bidrag på 120 000 £ som uppnår 350 placeringar som varar i över 12 månader jämfört med det första bidragets placeringar, av vilka hälften upphör inom 3 månader. Ändamålsenlighet — varaktiga utfall — vänder den skenbara VFM-rankningen: den verkliga kostnaden per *varaktig* placering är 250 ÷ 0,5 = 500 £ för det första bidraget, jämfört med 120 000/350 ≈ 343 £ för det andra.

## Koppling till mjukvaruutveckling

VFM ger tekniska team en disciplin för att rama in tekniska affärsärenden på det sätt som finans- och revisionsfunktioner faktiskt kommer att läsa dem:

- Ange ekonomi, effektivitet och ändamålsenlighet som separata poster i ett affärsärende, inte ett enda sammanslaget "värde"-tal — en granskare tränad på Green Book kommer att begära exakt denna uppdelning.
- Se upp för att optimera upphandlingskostnad (ekonomi) på bekostnad av integration och arbetsflödeseffektivitet, en mycket vanlig falsk besparing inom statlig IT (se [total ägandekostnad inom statlig IT](../total-cost-of-ownership-in-government-it/) och [bygga eller köpa inom staten](../build-vs-buy-in-government/)).
- Ändamålsenlighet kräver utfallsdata, inte bara antal resultat — koppla leveransmått till [utfall kontra output](../outcomes-vs-outputs/) och till verklig utvärdering via [kontrafaktisk analys](../counterfactual-analysis/) snarare än att anta att resultat innebär utfall.
- När ett system betjänar ojämnt över regioner eller demografiska grupper är rättvisefrågan en legitim VFM-invändning, inte ett separat "trevligt att ha" — se [digital inkludering](../digital-inclusion/).

## Fallgropar

- **Att likställa VFM med lägsta pris.** Ekonomi är en tredjedel (eller fjärdedel) av testet; Green Book varnar explicit för upphandlingsregler om "lägsta kostnad" som ignorerar effektivitet och ändamålsenlighet.
- **Att mäta resultat och kalla dem utfall.** Ärendegenomströmning (effektivitet) är inte detsamma som ärenden väl lösta (ändamålsenlighet); se [utfall kontra output](../outcomes-vs-outputs/).
- **Att behandla rättvisa som valfritt.** Sedan Green Books uppdatering 2020 ska fördelningseffekter bedömas tillsammans med de traditionella tre E:na, inte bultas på i efterhand; att i efterhand anpassa detta efter att ett affärsärende godkänts är mycket svårare än att inkludera det från början.
- **Att jämföra alternativ med olika volymer utan normalisering.** En jämförelse av VFM per enhet mellan alternativ som betjänar olika befolkningar måste kontrollera för skala, annars är effektivitetsjämförelsen meningslös.

## Källor

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
