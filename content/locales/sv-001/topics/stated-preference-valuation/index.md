# Betalningsviljevärdering

Metoder för betalningsvilja uppskattar värdet av en icke-marknadsvara genom att direkt fråga människor vad de skulle vara villiga att betala för den, eller villiga att acceptera i kompensation för att avstå den, typiskt genom en strukturerad enkät som beskriver ett hypotetiskt scenario. Kontingentvärdering är den mest kända tekniken i familjen.

## Varför det spelar roll

Green Book Annex 2 (kompletterande vägledning om värdering av icke-marknadseffekter) godkänner metoder för betalningsvilja för varor som helt saknar en observerbar marknadstransaktion att härleda värde från — luftkvalitet, biologisk mångfald, översvämningsskydd, existensvärdet av ett landskap någon kanske aldrig besöker (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra har publicerat sin egen vägledning för betalningsvilja för miljöbedömning specifikt eftersom så mycket av miljövärdet (bevarande av livsmiljöer, vattenkvalitet) inte har någon proxymarknad alls, till skillnad från, säg, buller, som åtminstone korrelerar med observerbara husprispriser (se [avslöjad preferensvärdering](../revealed-preference-valuation/)).

Betalningsviljans centrala fördel — den kan värdera bokstavligen vad som helst, inklusive varor ingen någonsin transagerat i — är också källan till dess trovärdighetsproblem. Eftersom respondenter inte faktiskt spenderar pengar är kontingentvärderingsundersökningar sårbara för hypotetisk bias (människor överdriver betalningsvilja när det inte finns någon verklig budgetbegränsning), inbäddningseffekter (samma vara värderas olika beroende på vad annat som finns i undersökningen), och startpunktsbias i budgivningsdesigner. NOAA:s panel om kontingentvärdering från 1993, sammankallad efter Exxon Valdez-oljeutsläppets rättstvist, fastställde designstandarder — ett binärt "skulle du betala £X, ja/nej"-folkomröstningsformat istället för öppen budgivning, och obligatoriska påminnelser om respondentens faktiska budgetbegränsning — som förblir referensstandarden för försvarbara undersökningar.

## Beräkningen

```
Kontingentvärdering （folkomröstningsformat）:
  Presentera ett binärt val: "skulle du betala £X per år för
  utfall Y? ja/nej"
  Variera X slumpmässigt mellan respondenter.
  Anpassa betalningsvilja som en funktion av ja/nej-svarsfrekvensen
  vid varje X.

Genomsnittlig betalningsvilja = ytan under den uppskattade
                                efterfrågekurvan
Aggregerat värde = Genomsnittlig betalningsvilja × berörd
                   population

Valexperiment （diskret valmodellering） variant:
  Presentera respondenter med upprepade val mellan buntar av
  attribut （inklusive ett kostnadsattribut）, uppskatta
  implicita priser för varje icke-kostnadsattribut från de
  avvägningar respondenter avslöjar.
```

Valexperimentvarianten föredras allmänt inom nuvarande brittisk praxis framför enfrågekontingentvärdering eftersom att tvinga respondenter att upprepade gånger avväga flera attribut mot kostnad producerar mer internt konsistenta, svårare att manipulera uppskattningar än en enda ja/nej-fråga.

## Genomräknat exempel

**Statlig myndighet**: Defra beställer en kontingentvärderingsundersökning för att värdera ett program för förbättrad vattenkvalitet i en flod. En undersökning i folkomröstningsformat av 2 000 hushåll finner att 62% skulle betala 40 £/år via ett hypotetiskt vattenräkningstillägg, och den uppskattade efterfrågekurvan ger en genomsnittlig betalningsvilja på 28 £/år per hushåll.

```
Genomsnittlig betalningsvilja = 28£/hushåll/år
Hushåll i avrinningsområdet = 340 000
Aggregerat årligt värde = 28£ × 340 000 = 9,52m£/år

Över en 20-årig bedömningsperiod vid 3,5% diskonteringsränta
（annuitetsfaktor ≈ 14,2）:
NV（nytta） ≈ 9,52m£ × 14,2 ≈ 135m£
```

Denna aggregerade siffra jämförs sedan mot programmets [samhällsekonomiska kostnads-nyttoanalys](../social-cost-benefit-analysis/)-kostnadssida. Green Book kräver att denna typ av bevis för betalningsvilja rapporteras tillsammans med dess konfidensintervall och undersökningsmetodik, inte som en bar punktuppskattning, just eftersom det underliggande talet är sköraere än ett marknadspris.

**Ideell organisation**: en kulturarvsstiftelse undersöker besökare och icke-besökare om betalningsvilja för att förhindra stängningen av en historisk byggnad som ingen av grupperna nödvändigtvis besöker (dess existensvärde). Eftersom icke-besökare som aldrig kommer att se byggnaden ändå rapporterar positiv betalningsvilja, fångar undersökningen existens- och arvsvärde som en enkel besöksavgiftsintäktsräkning (en avslöjad preferens-proxy) helt skulle missa — vilket visar betalningsviljans genuina fördel där ingen marknadstransaktion av något slag existerar för att avslöja värde.

## Koppling till mjukvaruutveckling

Metoder för betalningsvilja tillämpas sällan direkt på mjukvaruutvecklingsarbete, men ingenjörer som bygger plattformar för medborgarsamråd, verktyg för budgetdeltagande eller infrastruktur för offentliga undersökningar bygger ofta det instrument ekonomin är beroende av. Att få enkätdesignens detaljer rätt — slumpmässiga budbelopp, binär folkomröstningsramning framför öppna frågor, explicita påminnelser om budgetbegränsning — är inte en UX-finess, det är det som gör den resulterande värderingen försvarbar under granskning; en dåligt utformad undersökning i appen kan ogiltigförklara månader av efterföljande ekonomisk analys. Se [medborgarnöjdhetsmått](../citizen-satisfaction-metrics/) för den mer allmänna disciplinen att samla in opinionsdata som kommer att bära analytisk tyngd.

## Fallgropar

- **Öppna "hur mycket skulle du betala?"-frågor.** Dessa är mycket mer benägna för strategisk bias och förankringsbias än binär folkomröstningsramning; NOAA-panelens rekommendation att använda ett folkomröstningsformat existerar just eftersom öppen insamling presterar dåligt.
- **Ingen påminnelse om respondentens faktiska budgetbegränsning.** Utan den överstiger angiven betalningsvilja rutinmässigt vad samma personer skulle betala när en verklig budgetavvägning är i spel — hypotetisk bias.
- **Ignorerade inbäddningseffekter.** Samma vara värderad ensam kontra värderad som en del av en större bunt producerar olika betalningsviljeuppskattningar; rapportera vad annat, om något, som fanns i undersökningsramen.
- **Att behandla en enda undersöknings punktuppskattning som fastslagen.** Green Books praxis förväntar sig ett intervall och en diskussion om kända biaser, inte ett bart tal fört vidare in i kostnads-nyttotabellen som om det vore ett marknadspris.

## Källor

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
