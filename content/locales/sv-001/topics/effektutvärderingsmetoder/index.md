# Effektutvärderingsmetoder

Effektutvärderingsmetoder är de statistiska och experimentella designer som används för att uppskatta vad en policy eller ett program faktiskt orsakade, till skillnad från vad som skulle ha hänt ändå — randomiserade kontrollerade studier (RCT), differens-i-differenser, propensity score-matchning och regressionsdiskontinuitetsdesign är de fyra vanligast använda inom brittisk offentlig politik. De existerar eftersom de flesta statliga insatser inte kan testas i ett laboratorium: du kan inte randomisera vilken stad som får en ny busslinje på samma sätt du kan randomisera vilken patient som får ett läkemedel, så dessa metoder lånar samma kausala logik utan att alltid kräva slumpmässig tilldelning.

## Varför det spelar roll

HM Treasurys Magenta Book, Annex A om kvasi-experimentella metoder, är den brittiska statens kanoniska vägledning för att välja mellan dessa designer, och organ som Education Endowment Foundation och What Works Centre for Local Economic Growth institutionaliserar en evidenshierarki byggd kring dem — RCT:er där randomisering är genomförbar och etisk, kvasi-experimentella designer där den inte är det. Metodvalet är ingen teknisk efterhandstanke: det avgör om en utvärdering kan besvara "orsakade programmet detta?" eller bara "hände detta efter att programmet startade?", vilket är samma fråga [kontrafaktisk analys](../kontrafaktisk-analys/) är byggd för att tvinga praktiker att ställa innan någon utvärdering beställs.

## Beräkningen

```
RCT:
  Effekt = medel（utfall | behandlingsgrupp） − medel（utfall
          | kontrollgrupp）
  （giltigt eftersom tilldelning till behandling är
   slumpmässig）

Differens-i-differenser （DiD）:
  Effekt = ［utfall_efter（behandlad） − utfall_före（behandlad）］
         − ［utfall_efter（kontroll） − utfall_före（kontroll）］
  （kräver ett antagande om "parallella trender": behandlad
   och kontroll skulle ha rört sig tillsammans utan insatsen）

Propensity score-matchning （PSM）:
  1. Uppskatta P（behandling = 1 | kovariater X） för varje
     enhet → propensity score
  2. Matcha behandlade enheter med obehandlade enheter med
     liknande propensity scores
  3. Effekt = medel（utfall | behandlad） − medel（utfall
             | matchad kontroll）

Regressionsdiskontinuitetsdesign （RDD）:
  Effekt = hopp i utfall observerat vid behörighetströskeln,
          jämför enheter strax över kontra strax under
          brytpunkten
```

## Genomräknat exempel

**Kommun (differens-i-differenser för ett program för problemfamiljer)**: utfallet är skolnärvaro. Det behandlade området går från 84% till 89% närvaro (+5 procentenheter) under programperioden; ett jämförbart men obehandlat område går från 85% till 87% (+2 procentenheter) under samma period. DiD-effektuppskattning: 5 − 2 = +3 procentenheter tillskrivningsbara programmet. Tillämpat på en kohort på 2 000 elever i det behandlade området är detta förenligt med ungefär 60 ytterligare elever (3% × 2 000) som når den högre närvarokategorin, en extrapolering som bör rapporteras med sitt förbehåll om parallella trender, inte som ett exakt huvudantal.

**Ideell organisation (propensity score-matchning för en organisation för anställningsbarhet)**: 300 programdeltagare matchas med 300 individer från en större administrativ datamängd med hjälp av propensity scores byggda på ålder, tidigare anställningshistorik och kvalifikationsnivå. Sysselsättningsgrad vid tolv månader: matchad behandlad grupp 46%, matchad jämförelsegrupp 33%. PSM-effektuppskattning: 46% − 33% = +13 procentenheter tillskrivningsbara programmet, villkorat av att ingen oobserverad störfaktor (som motivation) driver både deltagande och utfall.

## Koppling till mjukvaruutveckling

Huruvida någon av dessa designer är genomförbar senare beror i hög grad på dataarkitekturbeslut fattade tidigt. RDD behöver en korrekt registrerad löpande variabel och en genuint ren behörighetsbrytpunkt; DiD behöver jämförbar paneldata över tid för både behandlade och jämförelseområden, vilket innebär konsekventa kopplingar över system och år; PSM behöver rik baslinjekovariatdata fångad före behandling, inte rekonstruerad i efterhand. En datamodell designad tillsammans med en [teori om förändring](../teori-om-förändring/) och [logisk modell](../logisk-modell/) från början — som fångar baslinjekovariater, datum och jämförelsegrupps-berättigade register — är det som gör en rigorös effektutvärdering möjlig senare, istället för en dyr efterhandsjakt. Se [effektutvärdering kontra processutvärdering](../effektutvärdering-kontra-processutvärdering/) för den kompletterande frågan dessa metoder inte besvarar på egen hand.

## Fallgropar

- **Att tvinga fram en RCT där den är ogenomförbar eller oetisk**, eller omvänt att aldrig överväga en kvasi-experimentell design när en genuin möjlighet för en — en policybrytpunkt, en stegvis lansering — fanns tillgänglig och oanvänd.
- **Att ignorera antagandet om parallella trender i DiD.** Om jämförelseområdet redan divergerade från det behandlade området innan insatsen är tvåpunktsjämförelsen kontaminerad; kontrollera trender före, inte bara före/efter.
- **Att endast matcha på observerade kovariater i PSM.** Oobserverad selektion, som deltagarmotivation, kan snedvrida uppskattningen även när observerade kovariater är väl balanserade.
- **Manipulation av den löpande variabeln i RDD.** Om människor kan påverka sin poäng att hamna precis innanför en behörighetströskel isolerar diskontinuiteten inte längre en kausal effekt.

## Källor

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology.
  <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
