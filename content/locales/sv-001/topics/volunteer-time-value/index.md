# Värdet av volontärtid

Värdet av volontärtid är den monetära uppskattning som tilldelas obetalt arbete, oftast använd för att ange en ideell organisations sanna ekonomiska fotavtryck — dess räkenskaper plus det arbete den inte behövde betala för — eller för att argumentera att en given insats är mer kostnadseffektiv än dess kontantbudget ensam antyder. Två nationella metodiker dominerar: USA:s Independent Sector-uppskattning och Storbritanniens Office for National Statistics/NCVO-tillvägagångssätt, och de prissätter samma timme arbete ganska olika.

## Varför det spelar roll

Varje år publicerar Independent Sector, i samarbete med University of Marylands Do Good Institute, ett nationellt timvärde för volontärtid, byggt från Bureau of Labor Statistics löndata — specifikt den genomsnittliga timlönen för produktions- och icke-arbetsledande arbetare på privata icke-jordbrukslöneutbetalningar, plus en förmånsjustering — och uppdelat efter amerikansk delstat. Den senaste utgåvan satte värdet till **36,14 dollar per timme för 2025**, upp 3,9% från föregående år, med delstatsnivåvärden som sträcker sig från över 50 dollar i Washington, DC till under 20 dollar i Puerto Rico. I Storbritannien har Office for National Statistics separat uppskattat återanskaffningskostnaden för formellt volontärarbete till **14,43 £ per timme** (2017 års uppskattning), och NCVO:s UK Civil Society Almanac 2024 använder deltagandedata för volontärarbete — ungefär 14,2 miljoner personer som formellt volontärarbetade 2021–22 — för att uppskatta sektorns totala volontärbidrag till ungefär **18 miljarder £**, cirka 0,8% av Storbritanniens BNP.

Anledningen till att detta spelar roll bortom redovisningskosmetika: ett program som förlitar sig starkt på volontärarbete kan se dramatiskt billigare ut på en ren kontant [kostnad per utfall](../cost-per-outcome/)-grund än ett som förlitar sig på avlönad personal, även där den sanna resurskostnaden — vad det skulle kosta att ersätta det arbetet — är liknande eller högre. Finansiärer och utvärderare som ignorerar värdet av volontärtid underskattar systematiskt den sanna kostnaden för volontärtunga leveransmodeller, vilket snedvrider effektivitetsjämförelser mot avlönad-personal-modeller som levererar samma utfall.

## Beräkningen

```
Värde av volontärtid = Bidragna volontärtimmar × timkurs

Kursvalet spelar roll och ändrar svaret:
  - Återanskaffningskostnadsansats: lönen för en avlönad
    arbetare som skulle utföra samma uppgift （t.ex. en
    återanskaffningskostnadskurs för en kvalificerad
    ungdomsarbetare, inte en generisk genomsnittslön） — mest
    försvarbar för uppgiftsspecifik värdering
  - Alternativkostnadsansats: volontärens egen förlorade lön —
    mest försvarbar för att värdera vad volontären avstod
  - Nationell genomsnittsansats: Independent Sectors eller
    ONS enda blandade kurs — mest försvarbar för rubrik,
    sektorsövergripande jämförbarhet
```

De tre ansatserna kan skilja sig med en stor faktor för samma timme (en advokat som volontärarbetar som styrelseledamot har en mycket annorlunda alternativkostnadskurs än en nationell genomsnittskurs), så alla rapporterade siffror behöver ange vilken metod som producerade dem.

## Genomräknat exempel

**Brittisk ideell organisation, nationell genomsnittsansats**: 5 000 volontärtimmar under ett år, värderade till 14,43 £/timme (ONS återanskaffningskostnadsuppskattning):

```
Värde = 5 000 × 14,43£ = 72 150£
```

Om den ideella organisationens kontantutgift det året var 300 000 £, är dess sanna resurskostnad — kontanter plus volontärarbete — 372 150 £, ungefär 24% högre än vad kontantsiffran ensam antyder. En kostnad-per-utfall-beräkning som endast använder siffran 300 000 £ i kontanter underskattar den sanna kostnaden med samma marginal.

**Amerikansk ideell organisation, nationell genomsnittsansats**: 2 000 volontärtimmar värderade till 36,14 dollar/timme (Independent Sector, 2025 års utgåva):

```
Värde = 2 000 × 36,14$ = 72 280$
```

**Samma amerikanska ideella organisation, alternativkostnadsansats**: om volontärerna är oproportionerligt pensionerade yrkespersoner vars tidigare inkomst i genomsnitt var 60 dollar/timme, skulle alternativkostnadsvärderingen vara 120 000 dollar — två tredjedelar högre än den nationella genomsnittssiffran, vilket illustrerar varför metoden måste anges.

## Koppling till mjukvaruutveckling

System som loggar volontärtimmar (skiftschemaläggningsverktyg, volontärhanteringsplattformar) bör fånga timmar på uppgifts- eller rollnivå, inte bara en totalsumma, så att en återanskaffningskostnadskurs kan tillämpas per roll snarare än en enda övergripande nationell genomsnittskurs över en blandad volontärarbetskraft (en styrelseledamots timme och en ordningsvakts timme är inte ekonomiskt likvärdiga). Att lagra kursen och metodiken som används tillsammans med det beräknade värdet — inte bara den slutliga valutasiffran — låter nedströmsrapportering (årsredovisning, [social avkastning på investering](../social-return-on-investment/)-beräkningar, finansiärsrapporter) reproducera eller ifrågasätta talet senare istället för att behandla det som en ogenomskinlig konstant. Se [kostnad per utfall](../cost-per-outcome/) för varför utelämnande av värdet av volontärtid systematiskt underskattar den sanna leveranskostnaden.

## Fallgropar

- **Att använda en enda övergripande kurs för strukturellt olika roller.** En nationell genomsnittslönekurs tillämpad på en professionell pro bono-timme (juridisk, finansiell, klinisk) undervärderar den drastiskt; matcha kursen till den ersatta rollen varhelst uppgiften är kvalificerad.
- **Dubbelräkning mot avlönad personalkostnad.** Om volontärer ersätter arbete som annars skulle vara avlönat, säkerställ att värderingen är additiv till kontantutgift, inte lagd ovanpå en redan uppblåst bemanningsuppskattning.
- **Att citera en föråldrad kurs utan datum.** Independent Sectors och ONS kurser förändras årligen (eller uppskattas bara periodiskt om, i ONS fall); en odaterad volontärtidssiffra i en rapport är nära meningslös för jämförelse.
- **Att behandla värdet av volontärtid som en insamlingstillgång.** Det är en kostnadsredovisningsjustering för att förstå sann resurskostnad, inte nya pengar en ideell organisation kan spendera; att sammanblanda de två vilseleder en styrelse som läser räkenskaperna.

## Källor

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time."
  <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology.
  <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024.
  <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis.
  <https://www.ncvo.org.uk/>
