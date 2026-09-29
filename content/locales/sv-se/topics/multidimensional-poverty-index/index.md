# Multidimensional Poverty Index (MPI)

MPI mäter fattigdom som överlappande brister en person upplever samtidigt — inom hälsa, utbildning och levnadsstandard — snarare än som enbart inkomst som faller under en linje. Det utvecklades av Oxford Poverty and Human Development Initiative (OPHI) med Sabina Alkire och James Foster, och har publicerats gemensamt med UNDP i varje Human Development Report sedan 2010, tillsammans med [Human Development Index](../human-development-index/).

## Varför det spelar roll

Inkomstfattigdomslinjer missar människor som har tillräcklig kontantinkomst men saknar rent vatten, skolgång, eller överlever ett barns död — och de missar det faktum att brister klumpar sig: ett hushåll utan elektricitet är oproportionerligt sannolikt att också sakna sanitet och ha ett undernärt barn. Alkire-Foster-metoden, som MPI är byggt på, räknar varje persons brister över tio indikatorer grupperade i tre lika viktade dimensioner — hälsa, utbildning, levnadsstandard — och klassificerar bara någon som "MPI-fattig" om deras viktade bristpoäng överskrider en fast tröskel, vilket fångar överlappning en uppsättning separata enindikatorstatistik inte kan. OPHI publicerar hela metodiken och landdata på <https://ophi.org.uk/multidimensional-poverty-index/>; det globala MPI det upprätthåller tillsammans med UNDP täcker nu över 110 länder. För mjukvara byggd för antifattigdomsprogram — kontantöverföringar, socialvårdstriage, biståndsmålinriktning — är MPI:s indikatoruppsättning ofta det närmaste ett standardiserat bristschema som redan validerats över dussintals nationella statistikbyråer.

## Beräkningen

```
10 indikatorer, 3 dimensioner, varje dimension viktad 1/3:

Hälsa （1/3）:            näring （1/6）, barnadödlighet （1/6）
Utbildning （1/3）:       skolgångsår （1/6）,
                        skolnärvaro （1/6）
Levnadsstandard （1/3）: matlagningsbränsle, sanitet,
                        dricksvatten, elektricitet, boende,
                        tillgångar （1/18 vardera）

bristpoäng （c） = summan av vikter för indikatorer en person
                 är bristfällig i

en person är "MPI-fattig" om c ≥ 1/3 （fattigdomsgränsen,
k = 33%）

H （huvudräkningskvot） = antal MPI-fattiga / total befolkning
A （intensitet）          = genomsnittlig bristpoäng endast
                          bland de MPI-fattiga

MPI = H × A
```

Eftersom MPI multiplicerar *andelen* som är fattiga med *hur* fattiga de är, kan två regioner med samma huvudräkningskvot ha mycket olika MPI-poäng om brister är allvarligare i en av dem — samma "ingen substitution mellan dimensioner"-logik bakom HDI:s geometriska medelvärde.

## Genomräknat exempel

**Nationell undersökning av 1 000 personer**: 350 identifieras som multidimensionellt fattiga (bristpoäng ≥ 33%). Bland just dessa 350 fattiga individer är den genomsnittliga bristpoängen 45%.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Att jämföra två distrikt med lika huvudräkningskvot**: Distrikt A har H = 0,30 och A = 0,40 (många fattiga, måttligt bristfälliga); Distrikt B har H = 0,30 och A = 0,60 (samma antal fattiga, men mer allvarligt bristfälliga — saknar elektricitet *och* sanitet *och* skolnärvaro samtidigt).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Samma huvudräkningskvot, 50% högre MPI i Distrikt B — ett målinriktningssystem baserat enbart på huvudräkningsfattigdom skulle rangordna de två distrikten identiskt och missa att Distrikt B behöver djupare intervention.

## Koppling till mjukvaruutveckling

- Ärendehanterings- och behörighetssystem för sociala program lagrar ofta redan flera av de tio indikatorerna (boende, skolnärvaro, hälsomarkörer) i separata silon; Alkire-Foster-räknemetoden är ett färdigt schema för att kombinera dem till en bristpoäng istället för att bygga en skräddarsydd poängsättningsmodell från grunden.
- Huvudräknings-/intensitetsuppdelningen (H × A) är ett generellt användbart mönster för alla instrumentpaneler som rapporterar "hur många är berörda" tillsammans med "hur illa" — att slå ihop båda till ett tal, som rådataprevalensstatistik gör, döljer precis det fall som behöver mest resurser.
- MPI-liknande indikatorinstrumentpaneler kombineras naturligt med [kostnad per förmånstagare](../cost-per-beneficiary/)-rapportering för antifattigdomsprogram: kostnad per poäng MPI-minskning är en försvarbar enhet för att jämföra mycket olika insatser (kontantöverföring kontra sanitetsinfrastruktur).

## Fallgropar

- **Att behandla de tio indikatorerna som universella** — OPHI:s globala MPI-indikatorer är kalibrerade för jämförbarhet mellan länder; nationella MPI:er (många länder, inklusive flera i Sydasien och Afrika, publicerar sina egna) anpassar indikatorer och vikter till lokal kontext, och de två är inte direkt jämförbara.
- **Att rapportera H ensamt** — huvudräkningskvot ignorerar intensitet helt; rapportera alltid A tillsammans med den, eller MPI själv.
- **Att anta att MPI-fattiga och inkomstfattiga är samma population** — OPHI:s egna landbriefingar visar typiskt bara partiell överlappning mellan de två; ett program som endast riktar sig till inkomstfattiga kommer systematiskt att missa en betydande andel av de multidimensionellt fattiga.

## Källor

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
