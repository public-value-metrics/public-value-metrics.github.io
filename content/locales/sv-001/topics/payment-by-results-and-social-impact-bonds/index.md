# Betalning efter resultat och sociala effektobligationer (PbR/SIB)

Betalning efter resultat (PbR) betalar en leverantör baserat på verifierade uppnådda utfall, inte utförda aktiviteter. En social effektobligation (SIB) är en specifik PbR-finansieringsstruktur där privata eller filantropiska investerare finansierar tjänsteleverans i förskott och återbetalas — med en avkastning — av en statlig uppdragsgivare endast om oberoende uppmätta utfall når överenskomna tröskelvärden, vilket flyttar leveransrisken från skattebetalaren till investeraren.

## Varför det spelar roll

Världens första SIB lanserades vid HMP Peterborough i september 2010: Social Finance samlade in 5 miljoner £ från 17 investerare för att finansiera "One Service," som arbetade med kortstraffade fångar (under 12 månader) för att minska återfall, med Ministry of Justice och Big Lottery Fund som enades om att endast betala tillbaka investerare om återfallshändelser föll med minst 7,5% jämfört med en matchad nationell jämförelsekohort. Den slutliga kohorten i Peterborough-piloten registrerade en minskning på 9,7% i återfall, bekvämt över tröskeln, och investerare återbetalades med avkastning. Mekanismen spelade roll eftersom den löste ett specifikt upphandlingsproblem: staten ville betala för utfall snarare än insatser, men kunde inte absorbera den finansiella risken av en insats som kanske inte fungerade, så SIB-strukturen flyttade den risken till investerare villiga att teckna den. Government Outcomes Lab (GO Lab) vid Oxfords Blavatnik School of Government upprätthåller nu den mest kompletta offentliga evidensbasen om PbR- och SIB-prestation världen över, spårar väl över 200 effektobligationer globalt och publicerar forskning om vilka designegenskaper som korrelerar med framgång eller misslyckande. Lärdomen evidensbasen upprepade gånger återkommer till är att den *valda utfallsindikatorn*, och vem som bär risken att missa den, avgör nästan allt annat om hur ett PbR-kontrakt faktiskt beter sig i praktiken.

## Beräkningen

```
PbR-betalning = grundbetalning （om någon） + Σ （uppnått
                utfall × enhetspris per utfall）

Avkastning för investerare i social effektobligation:
  Investerarens utlägg  = förskottskapital som finansierar
                          tjänsteleverans
  Utfallsbetalning      = uppdragsgivaren betalar endast om
                          utfall ≥ tröskel, skalat efter hur
                          långt över tröskeln prestationen
                          hamnar
  Investerarens avkastning = mottagna utfallsbetalningar −
                          investerarens utlägg
                          （en avkastningsgrad, ofta med tak,
                          som speglar den risk som tagits）

Nyckelparametrar för design som avgör hela kontraktets
beteende:
  Utfallsindikator          — måste vara ett utfall, inte
                              ett resultat （se
                              outcomes-vs-outputs）
  Jämförelse/kontrafaktisk situation — vanligtvis en matchad
                              kohort （se
                              counterfactual-analysis）
  Betalningströskel          — minsta förbättring innan
                              någon betalning utlöses
  Betalningskurva            — linjär, stegvis, eller med
                              tak över tröskeln
  Rabatt för tillskrivning/dödviktsförlust — se
                              additionality-and-deadweight
```

## Genomräknat exempel

**Peterborough One Service** (illustrativa siffror hämtade från publicerade utvärderingar):

```
Insamlat investerarkapital:      5 000 000£
Kohort:                          ~3 000 kortstraffade manliga
                                  fångar över två kohorter
Tröskel:                         ≥7,5% minskning i
                                  återfallshändelser jämfört
                                  med matchad nationell
                                  jämförelsegrupp, annars
                                  ingen betalning
Kohort 1-resultat:                8,4% minskning — under den
                                  kontraktuella ribban för den
                                  kohorten ensam under de
                                  ursprungliga reglerna
Kombinerat/slutligt kohortresultat: 9,7% minskning — över
                                  tröskeln
Utfallsbetalning:                staten （Ministry of Justice
                                  / Big Lottery Fund） betalar
                                  per procentenhet över
                                  tröskeln, finansierar
                                  återbetalning till
                                  investerare plus en
                                  avkastning
```

**Kommunalt PbR-kontrakt (illustrativt)**: en familjeinterventionstjänst upphandlas för 4 000 £ per hänvisad familj (aktivitetsbetalning) plus 6 000 £ per familj utan ytterligare barnskyddshänvisning 12 månader efter avslut (utfallsbetalning). 200 familjer hänvisade, 150 ärenden avslutade, 96 förblir hänvisningsfria vid 12 månader:

```
Aktivitetsbetalning  = 200 × 4 000£ = 800 000£
Utfallsbetalning     = 96 × 6 000£  = 576 000£
Total kontraktskostnad = 1 376 000£ för 96 bekräftade
                        varaktiga utfall
Kostnad per bekräftat utfall ≈ 14 333£ （se cost-per-outcome）
```

## Koppling till mjukvaruutveckling

Betalning efter resultat är ett incitamentsanpassningsproblem innan det är ett dataproblem, och datasystemet är där den anpassningen antingen håller eller går sönder. Oberoende, manipulationssäker utfallsverifiering är hela grejen: uppdragsgivaren och leverantören har motsatta incitament för hur ett tvetydigt fall kodas, så systemet som registrerar utfall behöver ett granskningsspår, ett dataavtal med den oberoende verifieraren (ofta ett annat organ än leverantören, ibland ett officiellt statistikorgan som matchar mot polis- eller bidragsregister), och oföränderlig versionshantering av utfallsdefinitionen — PbR-motsvarigheten till "att omdefiniera måttet"-fällan i [nyckeltal för offentlig sektor](../public-sector-kpis/). Tillskrivningsberäkningar beror på metoderna för matchad kohort i [kontrafaktisk analys](../counterfactual-analysis/), som behöver reproducerbar, granskningsbar kod, inte ett engångskalkylblad. Och själva måttet måste vara ett genuint utfall, inte en proxyaktivitet — se [utfall kontra output](../outcomes-vs-outputs/) — eftersom ett PbR-kontrakt som betalar för ett resultat bara omdöper business-as-usual-finansiering med extra transaktionskostnad. Där en SIB:s sociala avkastning modelleras prospektivt lånar den bedömningen vanligtvis direkt från [social avkastning på investering](../social-return-on-investment/)-metodiken.

## Fallgropar

- **Att betala för en lätt manipulerad proxyutfall**: "närvaro vid sessioner" är en aktivitet klädd i utfallskläder; insistera på ett mått som speglar den faktiska förändring som eftersträvas (återfall, sysselsättning, boendestabilitet).
- **Ingen trovärdig kontrafaktisk situation**: utan en matchad jämförelsegrupp kan en förbättring vara regression mot medelvärdet eller en bredare trend, inte programmets effekt — se [kontrafaktisk analys](../counterfactual-analysis/) och [additionalitet och dödviktsförlust](../additionality-and-deadweight/).
- **Att underskatta transaktions- och utvärderingskostnader**: oberoende verifiering, datakoppling och kontraktsadministration för PbR/SIB-system uppgår rutinmässigt till tvåsiffriga procenttal av kontraktsvärdet — GO Labs evidensbas dokumenterar detta som en återkommande drivkraft för att program läggs ner.
- **Att plocka russinen ur kakan eller "parkera"**: leverantörer som betalas per utfall har ett direkt incitament att prioritera klienter som ändå mest sannolikt kommer att lyckas och nedprioritera de svåraste fallen — designa betalningsnivåer eller ärendemixjustering för att motverka det.

## Källor

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
