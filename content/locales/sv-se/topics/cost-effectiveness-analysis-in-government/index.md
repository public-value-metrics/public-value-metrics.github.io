# Kostnadseffektivitetsanalys inom staten

Kostnadseffektivitetsanalys (CEA) jämför kostnaderna för alternativa sätt att uppnå *samma* utfall, uttryckt i naturliga enheter — kostnad per hemlös person i boende, kostnad per elev som når förväntad nivå, kostnad per ton CO2 minskat — utan att omvandla själva utfallet till pengar.

## Varför det spelar roll

Green Book behandlar CEA som reservmetoden när [samhällsekonomisk kostnads-nyttoanalys](../social-cost-benefit-analysis/)krav att monetarisera varje nytta blir inte bara svårt utan oärligt — där ett trovärdigt pris på utfallet skulle kräva antaganden ingen faktiskt håller (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kapitel 5, om alternativbedömning där utfall inte lätt kan monetariseras). CEA är metoden mest direkt lånad från hälsoekonomi — den är strukturellt identisk med hur NICE jämför behandlingar med hjälp av kostnad per kvalitetsjusterat levnadsår — men tillämpad på icke-hälsorelaterade statliga program: utbildningsinsatser per elevutfallspoäng, bostadsprogram per hushåll som förhindrats från hemlöshet, sysselsättningsprogram per varaktigt jobbutfall.

Anledningen till att CEA förtjänar sin plats vid sidan av SCBA snarare än att subsumeras av den är att det att tvinga fram ett monetärt värde på vissa utfall producerar ett tal precist nog att se auktoritativt ut och omtvistat nog att vara värdelöst i en offentlig debatt — att sätta ett pris på "ett barn som läser på förväntad nivå" inbjuder till precis den sortens utmaning som spårar ur ett affärsärende i en utskottsanhörning. CEA kringgår argumentet genom att vägra ha det: den rangordnar alternativ på kostnad per enhet av *själva utfallet*, och lämnar det separata politiska omdömet om huruvida utfallet är värt att eftersträva alls till det strategiska fallet.

## Beräkningen

```
Kostnadseffektivitetsförhållande （genomsnitt） = Total kostnad
                                                / Totalt antal
                                                uppnådda
                                                utfallsenheter

Inkrementellt kostnadseffektivitetsförhållande （ICER）, jämför
alternativ A med alternativ B:
ICER = (Kostnad_A − Kostnad_B) / (Utfall_A − Utfall_B)

Procedur:
1. Fastställ utfallsenheten och mätmetoden över alla
   alternativ som jämförs.
2. Kostnadsberäkna varje alternativ på samma grund
   （se ../green-book-appraisal/, det finansiella fallet）
   över samma tidshorisont.
3. Kassera dominerade alternativ: alla alternativ som kostar
   mer per enhet än ett billigare alternativ som uppnår
   samma eller bättre utfall slopas.
4. Rangordna kvarvarande alternativ efter inkrementellt,
   inte genomsnittligt, kostnadseffektivitetsförhållande.
```

CEA kan inte i sig avgöra om ett program är värt att finansiera alls — endast vilken av flera metoder mot samma mål som är billigast per enhet. Att avgöra om målet i sig är värt utgiften kräver antingen att konvertera tillbaka till SCBA (om en trovärdig värdering finns) eller ett politiskt/strategiskt omdöme utanför beräkningen. Där utfall genuint inte kan reduceras till en enhet — eftersom ett program producerar flera utfall som spelar roll på olika sätt — använd istället [multikriterieanalys](../multi-criteria-decision-analysis/).

## Genomräknat exempel

**Kommun**: en kommun jämför tre metoder för att minska gatuhemlöshet, vardera kostnadsberäknad över ett år mot utfallet "individer flyttade till stadigvarande boende i 6+ månader":

```
Alternativ                    Kostnad    Uppnådda utfall  Genomsn.
                                                          KEF
Housing First （intensiv）    900 000£   60               15 000£/
                                                          utfall
Härbärge ＋ stöd vid utflytt  600 000£   50               12 000£/
                                                          utfall
Uppsökande ＋ privat hyres-   350 000£   20               17 500£/
marknad                                                  utfall

ICER, härbärge vs uppsökande: (600k−350k)/(50−20)
                             = 8 333£ per ytterligare utfall
ICER, Housing First vs härbärge: (900k−600k)/(60−50)
                                = 30 000£ per ytterligare utfall
```

Uppsökande domineras i genomsnittskostnad av härbärge, men det *inkrementella* steget från uppsökande till härbärge kostar endast 8 333 £ per ytterligare person i boende — billigt jämfört med Housing First-steget, som kostar 30 000 £ för varje ytterligare person utöver vad härbärge uppnår. En budgetbegränsad myndighet som skalar upp bör föredra att expandera härbärge före Housing First, även om Housing First ser bättre ut på sitt eget genomsnittliga förhållande.

**Statlig myndighet**: ett program för läskunnighetsinhämtning jämförs över tre leveransmodeller på "kostnad per elev som når åldersrelevant läsnivå": individuell handledning (1 800 £/elev), gruppundervisning i mindre grupp (700 £/elev) och enbart digital insats (150 £/elev, men endast 40% av utfallsnivån för gruppundervisning per inskriven elev efter justering för avhopp). Efter justering för faktisk genomförandegrad kostar enbart digital insats 375 £ per elev som når nivån — fortfarande billigast, men CEA kan inte avgöra om det mindre absoluta antalet elever som hjälps av enbart digital insats, om levererat med samma budget som gruppundervisning, är en acceptabel avvägning mot att nå färre elever på ett djupare sätt; det är ett fördelningsomdöme CEA lämnar tillbaka till beslutsfattare.

## Koppling till mjukvaruutveckling

CEA är den rätta ramen när tekniska team utvärderar leveransmetoder för *samma* tjänsteutfall — kostnad per framgångsrikt verifierad identitet över tre identitetsverifieringsleverantörer, kostnad per korrekt triagerat ärende över två designer för ärendehanteringsautomation, kostnad per åtgärdad tillgänglighetsdefekt över egen personal jämfört med kontrakterad åtgärd. Disciplinen den direkt importerar: definiera utfallsenheten innan kostnader jämförs (inte "stängda ärenden" — ett resultat — utan "faktiskt löst användarbehov"), och beräkna alltid det inkrementella förhållandet mellan det befintliga systemet och ett föreslaget ersättningssystem, inte varje systems genomsnittskostnad isolerat. Se [utfall kontra output](../outcomes-vs-outputs/) och [kostnad per utfall](../cost-per-outcome/).

## Fallgropar

- **Att jämföra genomsnittliga, inte inkrementella, förhållanden vid beslut om expansion.** Som exemplet med gatuhemlöshet visar är alternativet med bästa genomsnittsförhållande inte alltid den billigaste nästa utfallsenheten att köpa.
- **Att välja en utfallsenhet som egentligen är ett resultat.** "Gjorda hänvisningar" eller "genomförda sessioner" mäter aktivitet, inte utfallet programmet existerar för att producera; CEA på resultat producerar ett självsäkert utseende tal som svarar på fel fråga.
- **Att jämföra över genuint olika utfall.** CEA är endast giltigt när alla alternativ riktar sig mot samma utfall mätt på samma sätt; att jämföra "kostnad per hemlös person i boende" mot "kostnad per ungdom som lämnar samhällsvård i stabilt boende" behöver ett generiskt utfallsmått eller [multikriterieanalys](../multi-criteria-decision-analysis/), inte CEA.
- **Att ignorera utfallets varaktighet.** Ett billigare alternativ som producerar utfall som inte består (en elev som backar efter att insatsen upphör) är inte faktiskt mer kostnadseffektivt när det mäts över en jämförbar tidshorisont; matcha uppföljningsperioden över alternativ som jämförs.

## Källor

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
