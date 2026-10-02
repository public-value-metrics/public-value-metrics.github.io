# Kostnad för fördröjning i offentliga program (CoD)

Kostnad för fördröjning är det offentliga värde som går förlorat per tidsenhet som ett program, en tjänst eller en systemförändring *ännu inte* levererats. Det är detta kapitels huvudsakliga bryggmått: det omvandlar "lanseringen försenades sex månader" till pund per vecka, eller till WELLBY:er per vecka, så att fördröjning kan diskuteras i samma valuta som affärsärendet självt.

## Varför det spelar roll

Reinertsens regel — "om du bara kvantifierar en sak, kvantifiera kostnaden för fördröjning" — flyttar in i staten nästan oförändrad, eftersom offentliga program är ovanligt exponerade för den: affärsärenden godkänns mot en förutspådd nyttoström, men strömmen börjar bara flöda vid live-gång, och varje vecka av försening är en vecka av förlorat värde som ingen prissätter i riskregistret. National Audit Offices upprepade granskning av utrullningen av Universal Credit (se dess "Rolling Out Universal Credit"-rapporter, <https://www.nao.org.uk/>) illustrerar mönstret: tidsplansförseningar spårades och rapporterades, men pund-per-vecka-kostnaden av att *ännu inte* leverera det reformerade systemet till nästa grupp sökande angavs sällan som en rubriksiffra, även om det är talet som borde ha drivit prioritering och eskalering. Utan en CoD-siffra ser ett försenat program ut som ett tidsplansproblem för leveransstyrelsen; med en blir det ett värdenurholkningsproblem för redovisningstjänstemannen.

## Beräkningen

```
CoD = nytta per tidsenhet förlorad medan oleverad （£/vecka
     eller WELLBY:er/vecka）

Total fördröjningsförlust = CoD × fördröjningens varaktighet

Nyttoströmmar att summera för offentliga program:
  kontantutlösande besparingar   （bedrägeri-/felminskning,
                                 undvikna tillfälliga kostnader）
+ icke-kontant frigjord kapacitet （handläggar-/tjänstemannatimmar
                                 × belastad kostnad）
+ välfärdsnytta                  （WELLBY:er × 13 000£/WELLBY,
                                 HMT Green Books
                                 välfärdskompletterande
                                 vägledning, 2019 års priser）
```

För medborgarvända tjänster, denominera i välfärd såväl som pengar — se [välfärdsjusterade levnadsår](../wellbeing-adjusted-life-years/) för den underliggande enheten, och [alternativkostnad i offentliga utgifter](../opportunity-cost-in-public-spending/) för vad den fördröjda punden annars kunde ha finansierat.

## Genomräknat exempel

**Kommun**: en uppgradering av bostadsbidragssystemet minskar överbetalningsfel med 150 £/anspråk/år över 20 000 aktiva anspråk.

```
Årlig nytta = 150 × 20 000 = 3 000 000£/år
CoD = 3 000 000 / 52 ≈ 57 700£/vecka
En implementeringsfördröjning på 12 månader kostar
52 × 57 700 ≈ 3 000 000£ i undvikbara fel.
```

**Statlig myndighet**: en handikappbidragsbedömningstjänst, levererad sex månader (26 veckor) senare än planerat, betyder att 200 000 sökande/år väntar i genomsnitt tre veckor längre på ett beslut. Varje ytterligare vecka av finansiell osäkerhet modelleras som en −0,0018 WELLBY (livstillfredsställelsepoäng)-effekt:

```
WELLBY-förlust per sökande = 3 × 0,0018 = 0,0054
Årlig WELLBY-förlust = 200 000 × 0,0054 = 1 080 WELLBY:er/år
CoD_välfärd = 1 080 / 52 ≈ 20,8 WELLBY:er/vecka
CoD_pengar = 20,8 × 13 000£ ≈ 270 000£/vecka av välfärdsvärde
```

En fördröjning på 26 veckor "kostar" därför ungefär 540 WELLBY:er — värda ungefär 7 miljoner £ enligt Green Books välfärdsvärdering — vilket omramar ett missat lanseringsdatum som en medborgarvälfärdshändelse, inte en fotnot i projektledning.

## Koppling till mjukvaruutveckling

CoD är det som gör [DORA-mått](../dora-metrics-for-public-value/) och [flödesmått](../flow-metrics-in-government-delivery/) finansiellt läsbara: ledtid i pipelinen × CoD är pengar (eller välfärd) förbränt i köer innan det någonsin når en medborgare. Konkret:

- **Prioritering**: rangordna en backlog efter CoD ÷ varaktighet snarare än efter intressenternas senioritet — mjukvaruteknikens motsvarighet till Green Books krav att bedöma alternativ på värde, inte på vem som frågar.
- **Upphandling**: en upphandlingscykel på 12–18 månader för ramavtal har en CoD; att prissätta den förändrar brådskefallet för accelererade vägar, och matar direkt in i [bygga eller köpa inom staten](../build-vs-buy-in-government/)-beslut där tid till värde är en beslutsdrivare.
- **Nyttoärende**: varje CoD-siffra citerad vid godkännande bör återkomma vid [nyttorealisering](../benefits-realization/) — om fördröjningskostnaden var verklig bör den accelererade nyttan vara mätbar efter live-gång.

## Fallgropar

- **Att anta linjär CoD**: vissa offentliga tjänster har deadline-format värde (ett lagstadgat efterlevnadsdatum — CoD hoppar till nivåer av verkställighetsrisk efter datumet, nära noll innan) snarare än en jämn veckotakt. Klassificera brådskeprofilen innan multiplicering.
- **CoD på resultat ingen behöver**: fördröjning har bara en kostnad om det oleverade har värde; ett system ingen kommer att använda har noll CoD oavsett hur sent det är.
- **Dubbelräkning av fördröjning och diskontering**: [den samhälleliga diskonteringsräntan](../social-discount-rate/) prissätter redan tid över flerårsbedömningshorisonter; CoD är den inom-horisonten, operativa versionen för veckor och månader. Använd CoD för tidsplansförseningar, NNV-skift för flerårsomfasning.

## Källor

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
