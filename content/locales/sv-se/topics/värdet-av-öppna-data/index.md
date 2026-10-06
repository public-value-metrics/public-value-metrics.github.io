# Värdet av öppna data

Värdet av öppna data är problemet att uppskatta vad statlig och offentlig data är värd när den inte har något pris: den säljs inte, så det finns ingen intäktsrad, men ändå genererar frisläppandet av den (väderdata, kollektivtrafikstidtabeller, postnummergränser, bolagsregister) märkbart ekonomisk och social aktivitet nedströms. Att värdera den väl spelar roll eftersom "det är gratis att frisläppa" och "det är värdelöst" båda är fel, och en mjukvaruingenjör som beslutar om att öppna ett API eller en datamängd behöver ett bättre argument än endera.

## Varför det spelar roll

Den mest citerade uppifrån-och-ner-uppskattningen kommer från McKinsey Global Institutes rapport från 2013 "Open data: Unlocking innovation and performance with liquid information," som satte det potentiella årliga värdet av öppna data över sju domäner — utbildning, transport, konsumentprodukter, elektricitet, olja och gas, hälso- och sjukvård, och konsumentfinans — till 3 biljoner till 5 biljoner dollar per år globalt, genom mekanismer inklusive ökad transparens, mer effektiv matchning av utbud och efterfrågan, och möjliggörande av nya produkter och tjänster byggda på datan. Den siffran är en scenariouppskattning, inte ett uppmätt utfall, och den citeras rutinmässigt felaktigt som om det vore intäkter staten kunde fånga direkt, när värdet mestadels tillfaller tredje parter — företag, forskare, medborgare — som använder datan, vilket är precis poängen med att öppna den snarare än att sälja den. Storbritanniens Open Data Institute, medgrundat av Sir Tim Berners-Lee och Sir Nigel Shadbolt 2012, har sedan dess byggt upp en mängd mer finkorniga, nedifrån-och-upp-fallstudier — sektor för sektor, datamängd för datamängd — som är mycket mer användbara för ett verkligt affärsärende än McKinsey-rubriksiffran, eftersom de visar mekanismen för värdeskapande, inte bara dess aggregerade storlek.

## Beräkningen

Öppna data har inget marknadspris, så värderingsmetoder ersätter ett sådant; tre tillvägagångssätt återkommer, och inget är tillräckligt ensamt:

```
1. Kostnadsundvikande-/återanskaffningskostnadsmetod:
   värde ≈ vad användare skulle ha betalat för att producera
   eller licensiera motsvarande data själva — en nedre gräns,
   ignorerar värde skapat av användningar den ursprungliga
   producenten aldrig förutsåg

2. Marknadsanalog-/nedströmsaktivitetsmetod:
   värde ≈ intäkter eller besparingar genererade av
   företag/tjänster byggda på datan （t.ex.
   satellitnavigationsappar byggda på öppen kart- och
   trafikdata） — fångar verklig ekonomisk aktivitet men är
   svår att rent tillskriva själva datafrisläppandet （se
   additionality-and-deadweight）

3. Kontingent-/betalningsviljemetod:
   värde ≈ vad användare säger att de skulle betala, eller
   den tid de säger att den sparar dem — se
   stated-preference-valuation för den allmänna metoden och
   dess biaser

Ingen av dessa producerar en lika ren siffra som ett
marknadspris; trovärdiga affärsärenden för öppna data
triangulerar över två eller fler, och är explicita om vilken
mekanism som gör jobbet.
```

## Genomräknat exempel

**Illustrativ nationell karta/adressdatafrisläppning** (metodik efter ODI-liknande fallstudier, siffror illustrativa för den skala sådana studier vanligtvis finner):

```
Kostnadsundvikande-uppskattning:
  Företag som annars skulle licensiera motsvarande
  adressmatchningsdata kommersiellt, till en uppskattad
  genomsnittlig licenskostnad på 4 000£/år, över uppskattade
  15 000 SMF nu som använder den fria öppna datamängden
  = 15 000 × 4 000£ = 60 000 000£/år i undvikna
  licenskostnader enbart

Nedströmsaktivitetsuppskattning （mer spekulativ, behöver en
kontrafaktisk situation）:
  Nya leveransruttnings- och logistikprodukter byggda på de
  öppna data som inte skulle existera, eller skulle vara
  väsentligt sämre, utan den — kräver en jämförelse mot den
  kontrafaktiska situationen att datan förblir stängd eller
  kommersiellt licensierad （counterfactual-analysis）, eftersom
  en del av den aktiviteten skulle ha hänt ändå på betald
  data till ett högre pris, vilket är dödviktsförlust i
  bemärkelsen "värde skapat genom att öppna den"

Ett försvarbart affärsärende rapporterar
kostnadsundvikande-siffran som den solida nedre gränsen, och
behandlar nedströmsaktivitetssiffran som ett övre gräns-
scenario, inte ett faktum.
```

## Koppling till mjukvaruutveckling

För ingenjörer är den praktiska frågan om värdet av öppna data vanligtvis smalare än de nationella rubriksiffrorna: ökar öppnandet av detta specifika API eller denna datamängd (snarare än att hålla den bakom ett partneravtal) återanvändningen tillräckligt för att motivera den löpande kostnaden att dokumentera, versionshantera och stödja den som ett offentligt gränssnitt? Den underhållskostnaden är verklig och är motstycket till bygg-en-gång-återanvänd-ofta-ekonomin hos [Government as a Platform](../government-as-a-platform/) — de två ämnena är nära kusiner, det ena handlar om delad kod och infrastruktur, det andra om delad data. Alla påståenden om värdet av öppna data bör kontrolleras mot [additionalitet och dödviktsförlust](../additionalitet-och-dödviktsförlust/) innan de hamnar i ett affärsärende: aktivitet som skulle ha hänt ändå, på kommersiellt licensierad data, är inte värde *öppnandet* skapade.

## Fallgropar

- **Att citera McKinseys siffra på 3–5 biljoner dollar som Storbritannien-specifik eller som denna datamängds andel**: det är en global, sju-sektor-scenariouppskattning från 2013 — att använda den som en exakt multiplikator för en enskild nationell datamängd felrepresenterar vad siffran är.
- **Ingen kontrafaktisk situation**: att ta åt sig äran för all nedströms ekonomisk aktivitet byggd på öppna data, utan att fråga hur mycket av den som skulle ha hänt ändå på betald eller licensierad data till ett högre pris (se [additionalitet och dödviktsförlust](../additionalitet-och-dödviktsförlust/) och [kontrafaktisk analys](../kontrafaktisk-analys/)).
- **Att förväxla produktionskostnad med skapat värde**: en datamängd som var dyr att samla in blir inte automatiskt värdefull att frisläppa, och en billig blir inte automatiskt lågvärdig — värde följer nedströmsanvändning, inte uppströmskostnad.
- **Att ignorera den löpande underhållskostnaden för "öppen"**: att publicera ett engångs-CSV-utdrag är inte samma åtagande som att driva ett dokumenterat, versionshanterat, stödd öppet API — underfinansiering av det senare efter lanseringsmeddelandet är en vanlig felmod.

## Källor

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid
  information" (2013).
  <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
