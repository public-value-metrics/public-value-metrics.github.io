# Förtroende- och legitimitetsmått

Legitimitet och stöd är ett av de tre benen i Mark Moores "strategiska triangel" i *Creating Public Value* (1995) — tillsammans med själva offentligt värde och operativ kapacitet — och det är benet som oftast lämnas omätt, eftersom legitimitet, till skillnad från en budget eller ett resultatantal, inte har något uppenbart enskilt tal knutet till sig. Förtroende- och legitimitetsmått är familjen av proxymått statliga organ använder för att fylla den luckan: institutionella förtroendeundersökningar, tillsynsorgans förtroendebetyg, klagomåls- och överklagandedata, och politiska/lagstiftande stödindikatorer.

## Varför det spelar roll

Moores argument är att en offentlig chef som levererar verkligt värde men förlorar politisk och allmän legitimitet så småningom kommer att förlora den auktoriserande miljö som behövs för att fortsätta leverera det — finansiering skärs ner, mandat begränsas, och tjänsten svälts oavsett hur bra dess utfall är. Legitimitet är därför inte en PR-efterhandstanke bultad på ett leveransstyrkort; det är en bärande inmatning till huruvida uppdraget kan fortsätta alls, vilket är varför det sitter som ett jämbördigt perspektiv i en [instrumentpanel för offentligt värde](../public-value-scorecard/) snarare än en fotnot. OECD:s undersökningsprogram "Trust in Government" är det ledande gränsöverskridande försöket att kvantifiera detta: det spårar andelen medborgare över OECD:s medlemsstater som säger att de har förtroende för sin nationella regering, och dess långsiktiga data visar att förtroende är mycket känsligt för chocker — både finanskrisen 2008 och covid-19-pandemin producerade skarpa nationella svängningar, ofta följda av endast partiell återhämtning, med OECD:s analys som konsekvent finner att upplevd *kompetens* (levererar staten det den säger den kommer att göra) och upplevd *rättvisa/integritet* (uppfattas staten agera utan korruption eller favorisering) är de två starkaste drivkrafterna bakom förtroendesiffran, distinkt från nöjdhet med någon enskild transaktion. Regeringar försöker också alltmer operationalisera legitimitet på en mer finkornig nivå — Storbritanniens oberoende regulatorer och inspektorat (National Audit Office, Parliamentary and Health Service Ombudsman, sektorregulatorer som Ofsted och Care Quality Commission) fungerar som institutionaliserade legitimitetskontroller, och omvandlar "litar allmänheten fortfarande på denna tjänst" till granskningsbara betyg.

## Beräkningen

Förtroende och legitimitet är ett ramverksformat ämne vars användbara kvantitativa proxyvariabler är:

```
Institutionellt förtroendeindex （OECD-stil）
  = % undersökningsrespondenter som svarar "ja" på en fråga
    om förtroende för regeringen, spårat över tid, uppdelat
    efter demografisk grupp

Legitimitetsproxyuppsättning （inget enskilt tal ersätter
begreppet）:
  - Bifallna klagomål per 1 000 tjänsteanvändare （ombudsman-
    eller intern klagomålsdata）
  - Framgångsgrad för rättslig prövning/överklaganden mot
    organets beslut
  - Betyg från oberoende regulator/inspektorat （t.ex.
    "utmärkt" till "otillräcklig"-nivåer）
  - Förtroendeomröstningar eller frekvens av kritiska
    rapporter från lagstiftande/tillsynskommittéer
  - Volym av begäranden om allmän handling och andel
    utlämnande/avslag, som en proxy för upplevd
    transparens

Legitimitet styrks, beräknas inte: en försvarbar
legitimitetsbedömning triangulerar flera av ovanstående
snarare än att förlita sig på en enda proxy.
```

## Genomräknat exempel

**Nationell skattemyndighet**: legitimitetstriangulering för en årlig rapport om offentligt värde.

```
OECD-liknande förtroendeproxy （departementsspecifik
förtroendeundersökning）:
  58% av respondenterna säger att de litar på att myndigheten
  "behandlar mig rättvist" （ner från 64% två år tidigare）

Klagomålsdata:
  Bifallna klagomål: 4,2 per 1 000 skattebetalarinteraktioner
  （upp från 3,1 per 1 000）

Ombudsmanhänvisningar:
  Hänvisningar till den oberoende Adjudicator's Office:
  1 850 under året, varav 61% bifallna helt eller delvis
  mot myndigheten （upp från 48% föregående år）

Läsning över alla tre: förtroendet sjunker, bifallna klagomål
stiger, och oberoende ombudsmannafynd faller alltmer mot
myndigheten — tre oberoende signaler som konvergerar i samma
riktning, vilket är vad som gör detta till ett trovärdigt
legitimitetsfynd snarare än brus i en enskild serie.
```

En enskild siffra som rör sig skulle vara svag evidens; tre oberoende mått som rör sig tillsammans över samma period är mönstret som gör ett legitimitetspåstående försvarbart.

## Koppling till mjukvaruutveckling

Legitimitetsmått produceras sällan av ett enda teams instrumentpanel, vilket i sig är designlärdomen: bygg rapporteringspipeliner som kan ta in och stämma av data från oberoende externa källor (ombudsmannens ärendehanteringssystem, regulatorers betygsflöden, undersökningsleverantörer) istället för att arkitektera legitimitetsrapportering som ett internt mått, eftersom internt källade legitimitetspåståenden ("vi betygsätter oss själva som trovärdiga") bär lite bevisvärde — samma oberoendeproblem noterat för legitimitetsperspektivet i en [instrumentpanel för offentligt värde](../public-value-scorecard/). Data-pipelines för klagomål och överklaganden förtjänar samma datakvalitetsstringens som vilken utfallspipeline som helst som matar [betalning efter resultat](../payment-by-results-and-social-impact-bonds/)-kontrakt, eftersom en underrapporterad eller dåligt kategoriserad klagomålsdatamängd tyst underskattar ett legitimitetsproblem innan det blir synligt i en förtroendeundersökning ett år senare. Se [medborgarnöjdhetsmått](../citizen-satisfaction-metrics/) för transaktionsnivåns motsvarighet till detta institutionsnivåmått, och [offentligt värde](../public-value/) för Moores fullständiga strategiska triangel-ramverk detta ben tillhör.

## Fallgropar

- **Att behandla nöjdhet som en proxy för legitimitet**: en medborgare kan vara nöjd med en enskild transaktions gränssnitt samtidigt som de misstror institutionen överlag (eller tvärtom) — se [medborgarnöjdhetsmått](../citizen-satisfaction-metrics/) för varför de två måste rapporteras separat.
- **Att förlita sig på ett enda självrapporterat mått**: en internt genomförd förtroendeundersökning utan oberoende styrkning (ombudsmandata, regulatorbetyg) är lätt att avfärda som självbedömning; triangulera.
- **Att ignorera demografisk uppdelning**: aggregerade nationella förtroendesiffror kan dölja skarpt avvikande legitimitet bland specifika grupper (efter ålder, etnicitet, inkomst eller region) — OECD:s egna Trust in Government-utgåvor delar upp av just denna anledning.
- **Att läsa en enda chockdriven nedgång som en permanent trend**: förtroendesiffror rör sig kraftigt kring kriser (finanskrascher, pandemier, uppmärksammade skandaler) och återhämtar sig delvis; en enda datapunkt efter en chock bör inte extrapoleras till en långsiktig nedgång utan mer data.

## Källor

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
