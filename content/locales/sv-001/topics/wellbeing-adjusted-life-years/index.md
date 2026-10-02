# Välfärdsjusterade levnadsår (WELLBY)

En WELLBY är en ytterligare poäng av livstillfredsställelse, på den vanliga skalan 0–10 för välbefinnande, för en person under ett år. Det är den strukturella motsvarigheten till QALY:n som används inom hälsoekonomi — en enda enhet som låter dig jämföra insatser vars utfall inte har annat gemensamt — men byggd på subjektivt välbefinnande snarare än kliniska hälsotillstånd, och fastställd i HM Treasurys "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021).

## Varför det spelar roll

Kostnads-nyttobedömning behöver en gemensam enhet för att jämföra ett ungdomsklubbsbidrag mot ett trafiksäkerhetsprogram mot en mentalvårdstjänst, som inte delar något utfallsmått. Hälsoekonomi löste detta för kliniska insatser med QALY:n: ett kvalitetsjusterat levnadsår, viktat från 0 (död) till 1 (full hälsa). HM Treasurys välfärdsvägledning utvidgar samma logik till icke-hälsorelaterade offentliga utgifter, med hjälp av ONS harmoniserade livstillfredsställelsefråga ("Sammantaget, hur nöjd är du med ditt liv nuförtiden?", besvarad 0–10) som utfallsstegen istället för ett hälsotillståndsindex. En WELLBY på 1 betyder att en persons livstillfredsställelse stiger med en hel poäng under ett år (eller, likvärdigt, tio personers tillfredsställelse stiger med 0,1 poäng vardera under ett år — WELLBY:er summeras över en population på samma sätt som QALY:er gör). HM Treasurys vägledning fastställer ett illustrativt monetärt värde per WELLBY (cirka 13 000 £, 2021 års priser) härlett genom att stämma av subjektiv välfärdsdata mot andra ansatser till värdet av ett levnadsår, vilket ger bedömare ett sätt att monetarisera utfall — minskad ensamhet, samhällssammanhållning, tillgång till grönområden — som [välfärdsvärdering](../wellbeing-valuation/)-tekniker tidigare bara kunde beskriva, inte jämföra på en gemensam grund med hälso- eller säkerhetsutgifter.

## Beräkningen

```
WELLBY = 1 poäng livstillfredsställelse （skala 0-10）
        upprätthållen för 1 person under 1 år

Totala WELLBY:er från en policy =
  Σ (förändring i livstillfredsställelsepoäng) × (antal
  berörda personer) × (varaktighet i år, diskonterad till
  den samhälleliga diskonteringsräntan)

Monetariserat värde = Totala WELLBY:er × värde per WELLBY
  （HM Treasurys rekommenderade värde: 13 000£ per WELLBY,
   2021 års priser, föremål för regelbunden revidering —
   kontrollera aktuell vägledning innan användning）

jfr QALY = Δ hälsotillståndsnytta （skala 0-1） × antal år
          levda i det tillståndet
```

Skalan 0–10 för tillfredsställelse och skalan 0–1 för QALY-nytta är inte utbytbara utan ett omvandlingssteg; HM Treasurys vägledning diskuterar att stämma av de två så att, till exempel, en hälsointervention bedömd i QALY:er och en social intervention bedömd i WELLBY:er inte tyst dubbelräknas eller lämnas ojämförbara inom samma [Green Book-bedömning](../green-book-appraisal/).

## Genomräknat exempel

**Kommun**: en kommun driver ett kompisprogram mot ensamhet för isolerade äldre invånare, som betjänar 400 personer. En före/efter-välfärdsundersökning med ONS4-livstillfredsställelsefrågan visar att deltagarnas genomsnittliga poäng steg från 5,2 till 6,0 — en vinst på 0,8 poäng — upprätthållen under programmets 2-åriga finansieringsperiod.

```
Genererade WELLBY:er = 400 personer × 0,8 poäng × 2 år
                      = 640 WELLBY:er

Monetariserat värde = 640 × 13 000£ = 8,32m£
```

Mot en årlig programkostnad på 300 000 £ (600 000 £ över 2 år) är nytta-kostnadsförhållandet ungefär 8 320 000 £ / 600 000 £ ≈ **13,9:1** — en siffra som nu kan sitta i samma bedömningstabell som ett hälsoprograms kostnad per undviken QALY eller ett transportprograms besparingar i restid.

**Ideell organisation, mindre skala**: ett samhällskonstprogram når 50 deltagare med en uppmätt tillfredsställelsevinst på 0,3 poäng, varaktig i 1 år.

```
WELLBY:er = 50 × 0,3 × 1 = 15 WELLBY:er
Monetariserat värde = 15 × 13 000£ = 195 000£
```

## Koppling till mjukvaruutveckling

- Alla medborgarvända tjänster som redan samlar in ett livstillfredsställelse- eller välfärdsundersökningsmoment (många kommunala och vård- och omsorgsplattformar gör det, i linje med ONS fyra standardvälfärdsfrågor) kan beräkna WELLBY:er direkt från befintliga datapipelines istället för att beställa skräddarsydd ekonomisk utvärdering för varje tjänsteförändring.
- WELLBY:er ger tekniska team som bygger för [lagen om socialt värde](../social-value-act/)-rapportering eller [social avkastning på investering](../social-return-on-investment/) en nationellt standardiserad, HM Treasury-godkänd nämnare, som undviker spridningen av skräddarsydda "effektpoäng" som inte kan jämföras mellan kontrakt eller leverantörer.
- Eftersom WELLBY:er är additiva över personer och tid, komponeras de rent in i den typ av befolkningsnivåutfallsspårning som används i [resultatbaserad ansvarsskyldighet](../outcomes-based-accountability/)-system — en tjänsteinstrumentpanel kan rapportera kumulativa genererade WELLBY:er per kvartal på samma sätt ett hälsosystem rapporterar vunna QALY:er.

## Fallgropar

- **Att anta att självrapporterade tillfredsställelsevinster helt kan tillskrivas insatsen** — utan en kontrafaktisk situation (jämförelsegrupp eller före/efter-design med kontroller) kan du inte separera WELLBY-vinsten från allmänna trender; se [kontrafaktisk analys](../counterfactual-analysis/).
- **Att blanda WELLBY:er och QALY:er i en totalsumma utan avstämning** — HM Treasurys vägledning är explicit med att de två använder olika skalor och olika underliggande värdeteorier; att summera dem naivt dubbelräknar överlappande välfärd.
- **Att använda referensmonetärvärdet okritiskt** — £-per-WELLBY-siffran är en nationell genomsnittsuppskattning med verkliga osäkerhetsband; HM Treasurys vägledning rekommenderar känslighetsanalys, inte att behandla den som en fast växelkurs.

## Källor

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
