# DORA-mått för offentligt värde

DORA-måtten (DevOps Research and Assessment) — utrullningsfrekvens, ledtid för ändringar, ändringsmisslyckandefrekvens och tid att återställa tjänst, plus tillförlitlighet som ett femte — är mjukvaruindustrins mest validerade prestandabenchmarks för leverans. Översatta till offentlig sektors ansvarsskyldighetstermer är var och en en direkt proxy för hur snabbt, och hur säkert, offentligt värde når en medborgare.

## Varför det spelar roll

DORA:s decennium av forskning, publicerad årligen som *Accelerate State of DevOps Report* (Forsgren, Humble och Kims metodik, nu driven av Google Cloud), klustrar team i elit-, hög-, medel- och lågpresterande. Elitteam utrullar på begäran, tar under en dag från commit till produktion, misslyckas med ungefär 5% av ändringarna, och återhämtar sig på under en timme; lågpresterande utrullar månadsvis eller mindre ofta, tar månader, misslyckas med ungefär 40% av ändringarna, och återhämtar sig på veckor. Inom staten är dessa inte tekniska fåfängsmått: Government Digital Services Service Standard kräver att team "itererar och förbättrar ofta" och kan svara snabbt på användarbehov, och departement som inte kan utrulla säkert och ofta är strukturellt oförmögna att uppfylla den standarden, oavsett vad deras användarforskning säger. Cabinet Offices eget arbete med digital effektivitet fann att att skjuta en medborgare från en misslyckad eller långsam digital transaktion till en telefon- eller pappersbaserad kanal är dyrt — GDS Digital Efficiency Report från 2012 uppskattade att vissa digitala transaktioner kostar så lite som 20 pence mot telefon- eller ansikte-mot-ansikte-kontakter som kostar upp till 8,62 £ — så ett ändringsmisslyckande i en medborgarvänd tjänst kostar inte bara teknisk tid, det skjuter verkliga pund över till kontaktcenterbudgeten (se [kanalskiftesbesparingar](../channel-shift-savings/)).

## Beräkningen

```
Utrullningsfrekvens  = produktionsutrullningar / tid
Ledtid för ändringar = t（utrullning） − t（commit）, median
Ändringsmisslyckandefrekvens = misslyckade ändringar / totala
                              ändringar × 100
Tid att återställa （MTTR） = t（återställd） − t（misslyckande）,
                            median
Tillförlitlighet             = SLO-uppfyllelse （tillgänglighet,
                              latens, korrekthet）
```

Översättningar till offentligt värde:

```
Ledtid          → veckor i pipelinen × CoD, se
                 cost-of-delay-in-public-programmes
Misslyckandefrekvens → medborgarvänd incidentfrekvens: AMF ×
                 kostnad per omdirigerat kontaktcentersamtal
                 （eller per misslyckad lagstadgad transaktion）
Återhämtningstid → tjänsteavbrottsskada: MTTR × （anspråk/
                 ansökningar blockerade per timme） ×
                 nedströmskostnad eller välfärdsförlust per
                 enhet
Tillförlitlighet → nyttorabatt: en tjänst med 99%
                 tillgänglighet levererar ≈ 0,99 av sin
                 modellerade nytta — leveransanalogen till
                 upptag eller efterlevnadsunderskott
```

## Genomräknat exempel

Ett kommunalt teams portal för bidragsanspråk, före och efter en investering i leveransteknik:

```
                    Före        Efter
Utrullningar        månadsvis   veckovis
Ledtid              8 veckor    5 dagar
AMF                 30%        10%
MTTR                3 dagar     4 timmar
```

Teamet levererar runt 25 förbättringar/år, genomsnittligt värde 8 000 £/vecka ([kostnad för fördröjning](../cost-of-delay-in-public-programmes/)). Att skära ledtiden med ungefär 7,3 veckor drar fram varje förbättrings nyttoström: 25 × 7,3 × 8 000 ≈ **1 460 000 £/år** av värde levererat tidigare. Om misslyckandefrekvens: 25 × (0,30 − 0,10) = 5 färre misslyckade ändringar/år; varje misslyckad ändring på en offentlig portal omdirigerar typiskt uppskattningsvis 2 000 medborgare till telefonkanalen till 8,62 £ mot 20 pence, en nettokostnad på ungefär 8,42£ × 2 000 ≈ 16 840 £ per incident, så att undvika 5 incidenter sparar ≈ **84 200 £/år**. Investeringen i leveransteknik värderas i samma valuta som vilket annat offentligt värde-ärende som helst.

## Genomräknat exempel fortsatt: tillförlitlighet

Om portalen körs på 97% tillgänglighet snarare än ett mål på 99,5%, och varje procentenhet av driftstopp modelleras som 2% förlorade anspråk på grund av avhopp, levererar tjänsten ungefär 0,975 av sin modellerade nytta på 2 miljoner £/år — en nyttorabatt på 50 000 £/år som en ren drifttidsinstrumentpanel aldrig ytar.

## Koppling till mjukvaruutveckling

DORA-mått är en offentlig tjänsts driftsmått i andra kläder: ledtid mappar till [servicestandarder och transaktionsmått](../service-standards-and-transaction-metrics/); ändringsmisslyckandefrekvens mappar till omarbetnings- och klagomålsfrekvens; MTTR mappar till hur länge en lagstadgad tjänst är otillgänglig för sökande. Förbättringstekniker överförs i båda riktningarna eftersom båda är köningssystem under ansvarsskyldighetsbegränsningar — se [flödesmått i statlig leverans](../flow-metrics-in-government-delivery/) för den underliggande köningsmatematiken. Notera också DORA:s fynd från 2025 att AI-antagande korrelerar med högre genomströmning men *sämre* stabilitet — en insats med både effektivitet och biverkningar, vilket är precis den nettonyttanalys detta kapitels [AI-produktivitet](../ai-productivity-in-the-public-sector/)-ämne arbetar igenom.

## Fallgropar

- **Måttmanipulation**: att blåsa upp utrullningsantal med no-op-utgåvor, eller exkludera hotfixar från ändringsmisslyckanderäkningen. Definiera händelser lika precist som en lagstadgad servicestandard definierar en "lyckad transaktion".
- **Departementsövergripande rankningslistor**: DORA-kluster jämför leveranspraxis, inte tjänster med olika riskprofiler; ett skattebetalningssystem betygsatt "högt" kan vara rätt hållning där "elit" skulle vara vårdslöst givet säkerhetskrav.
- **Att optimera endast ett mått**: hastighet utan ändringsmisslyckandefrekvens är den klassiska avvägningen mellan genomströmning och instabilitet — rapportera alla fyra tillsammans, inte som en enda poäng.

## Källor

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution
  Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
