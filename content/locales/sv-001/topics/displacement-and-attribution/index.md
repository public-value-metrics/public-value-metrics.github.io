# Förskjutning och tillskrivning

Förskjutning uppstår när ett programs skenbara nytta uppnås genom att ta aktivitet eller nytta från någon annanstans, snarare än att skapa något nytt — din vinst är någon annans förlust. Tillskrivning är den relaterade frågan om hur mycket av ett observerat utfall din insats genuint kan ta åt sig äran för, när andra aktörer och faktorer också bidragit. Båda är standardjusteringar i brittisk utvärderingsvägledning för offentlig sektor, tillsammans med dödviktsförlust och läckage, och båda hoppas rutinmässigt över av effektpåståenden som ser mycket starkare ut än de är.

## Varför det spelar roll

Ett kommunalt företagsbidragsprogram som hjälper 50 butiker att flytta till en förnyelsezon kan rapportera "50 företag stöttade, 200 jobb skapade" — men om de företagen helt enkelt flyttade från en angränsande huvudgata istället för att expandera, förskjöts jobben, skapades inte, och nettoeffekten för hela stadsdelen (eller regionen) kan vara nära noll. HM Treasurys Magenta Book och den långvariga Additionality Guide behandlar förskjutning som en obligatorisk avdragspost just eftersom lokala framgångshistorier är vanliga även när de inte producerar någon nationell eller regional nettonytta — värde har helt enkelt flyttats, ofta till nackdel för det område eller de aktörer som förlorade det. Strukturfondernas utvärderingsvägledning (använd för tidigare EU:s regionala utvecklingsfondsprogram och deras inhemska efterföljare, som UK Shared Prosperity Fund) formaliserar detta på tre geografiska skalor: lokal förskjutning (inom en stad), regional förskjutning (inom en region) och nationell förskjutning (över hela Storbritannien), eftersom en insats kan vara tillkommande på en skala samtidigt som den är ren förskjutning på en bredare — ett sysselsättningsprogram som drar arbetstagare från en angränsande stad är nationellt neutralt även om det ser ut som en lokal framgång.

Tillskrivning är syskonproblemet inom partnerskapsintensiv leverans, som nu är normen inom social sektor och myndighetsövergripande offentlig tjänst. När tre organisationer levererar en tjänst för att förebygga hemlöshet gemensamt kan varje organisations årsrapport oberoende ta åt sig äran för samma minskning av gatuhemlöshet — summerat över rapporter kan den påstådda effekten överstiga den observerade verkliga förändringen, ibland med flera gånger. Magenta Books vägledning om bidragsanalys existerar specifikt eftersom slumpmässig tillskrivning till en enskild aktör ofta är omöjlig vid leverans genom flera myndigheter, och det ärliga svaret är ofta "vi bidrog till detta utfall" snarare än "vi orsakade detta utfall."

## Beräkningen

Förskjutning som en del av standardsekvensen för nettoeffekt (se [additionalitet och dödviktsförlust](../additionality-and-deadweight/) för hela kedjan):

```
Nettotillkommande effekt = Bruttoutfall − Dödviktsförlust −
                          Förskjutning − Läckage, × Multiplikator

Förskjutningsnivå = nytta/aktivitet omdirigerad från
                    annat håll / totalt observerad
                    bruttonytta/aktivitet
```

Tillskrivning, där flera aktörer bidrar till ett utfall, uttrycks vanligtvis som en bidragsandel snarare än en exakt procentsats, eftersom den vanligtvis inte kan mätas med samma stringens som förskjutning:

```
Tillskrivningsbar andel ≈ f（styrkan hos kausalt bidrag,
                          andra aktörers bidrag,
                          externa/kontextuella faktorer）

Den påstådda effekten bör aldrig överstiga:
  Σ （varje partners tillskrivningsbara andel） ≤ 100% av
  det totala observerade utfallet
```

## Genomräknat exempel

**Förnyelsebidrag**: en kommuns huvudgatsbidragsprogram rapporterar 200 nya butiksjobb skapade i den finansierade zonen. Uppföljande enkätforskning finner att 60 av de jobben kom från företag som flyttade från en angränsande, ofinansierad huvudgata inom samma stadsdel, och ytterligare 30 kom från nationella kedjor som öppnade filialer som skulle ha öppnat någonstans i regionen ändå.

```
Påstådda bruttojobb = 200
Lokal förskjutning = 60 （flyttade inom stadsdelen）
Regional förskjutning = 30 （skulle ha öppnat regionalt ändå）

Nettotillkommande jobb （stadsdelsnivå） = 200 − 60 = 140
Nettotillkommande jobb （regional nivå） = 200 − 60 − 30 = 110
```

Den ärliga rubriken beror på den geografiska skala finansiären bryr sig om — ett finansdepartementets affärsärende bedömt på nationell eller regional nivå bör använda 110, inte de 140 på stadsdelsnivå, och absolut inte de råa 200.

**Myndighetsövergripande hemlöshetstjänst**: tre partnerorganisationer (en kommun, en bostadsorganisation och en vårdinstans) levererar gemensamt en tjänst för att minska gatuhemlöshet. Gatuhemlöshet i området minskade med 30 personer under året. Varje organisations enskilda årsrapport påstår "vi minskade gatuhemlöshet med 30" — summerat påstår de tre rapporterna att 90 personer hjälptes, tre gånger den faktiska minskningen. En bidragsanalys som tilldelar varje partner en andel (säg, 40% kommun, 35% organisation, 25% vårdinstans, baserat på dokumenterad roll och oberoende bedömning) skulle rapportera 12, 10,5 respektive 7,5, vilket korrekt summerar till de observerade 30.

## Koppling till mjukvaruutveckling

Förskjutning och tillskrivning formar hur effektspårnings- och utfallsredovisningssystem bör utformas för leverans på flera platser eller genom flera partners:

- Geografisk och organisatorisk omfattning bör vara explicita, förstklassiga fält i alla effektinstrumentpaneler — en siffra rapporterad "för stadsdelen" och samma siffra rapporterad "för regionen" är olika tal, och ett system som sammanblandar dem kommer att producera tal som inte kan avstämmas på portföljnivå.
- Där flera partners levererar gemensamt bör ett utfallssystem registrera bidragsandelar (eller åtminstone flagga gemensam tillskrivning) istället för att låta varje partners rapporteringsmodul oberoende påstå 100% av ett delat utfall — annars kommer sammanställningar på portföljnivå att överdriva total effekt, ibland kraftigt.
- Detta kopplar till [social avkastning på investering](../social-return-on-investment/) och [rapportering av bidragsutfall](../grant-outcomes-reporting/): en SROI- eller IRIS+-beräkning som ignorerar förskjutning eller övertillskriver delade utfall kommer att producera ett uppblåst förhållande som inte håller för revision eller replikering.

## Fallgropar

- **Att rapportera lokal framgång utan att kontrollera bredare förskjutning.** Ett program kan se mycket framgångsrikt ut på den minsta rapporteringsskalan samtidigt som det är neutralt eller till och med negativt på en bredare; ange alltid den geografiska skala nettosiffran gäller för.
- **Att låta varje partner i gemensam leverans ta full äran.** Om inte bidragsandelar är överenskomna och dokumenterade kommer sammanställd rapportering över partners att överdriva total effekt — kontrollera att partnernivåpåståenden inte summerar till mer än det observerade totalet.
- **Att behandla tillskrivning som en exakt procentsats när det egentligen är ett omdöme.** Bidragsanalys, till skillnad från en slumpmässig kontrafaktisk situation, producerar en försvarbar uppskattning, inte ett uppmätt faktum; presentera den med lämplig osäkerhet snarare än falsk precision.
- **Att ignorera förskjutning i marknadsvända insatser.** Företagsstöd, sysselsättningsprogram och platsbaserad förnyelse är de klassiska kategorierna med hög förskjutning; behandla förskjutningskontroller som obligatoriska för dessa, inte valfria.

## Källor

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
