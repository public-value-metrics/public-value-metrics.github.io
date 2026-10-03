# Forskydning og tilskrivning

Forskydning forekommer, når et programs tilsyneladende fordel opnås ved at tage aktivitet eller fordel fra et andet sted, snarere end at skabe noget nyt — din sejr er en anden persons tab. Tilskrivning er det relaterede spørgsmål om, hvor meget af et observeret resultat din intervention genuint kan tage æren for, når andre aktører og faktorer også bidrog. Begge er standardjusteringer i britisk offentlig sektorevalueringsvejledning, sammen med dødvægt og lækage, og begge springes rutinemæssigt over af effektpåstande, der ser langt stærkere ud end de er.

## Hvorfor det betyder noget

En lokal myndigheds erhvervsbevillingsordning, der hjælper 50 butikker med at flytte ind i en regenereringszone, kan rapportere "50 virksomheder støttet, 200 job skabt" — men hvis disse virksomheder blot flyttede fra en nabogade snarere end at udvide, blev jobbene forskudt, ikke skabt, og den kommunevide (eller regionsvide) nettoeffekt kunne være tæt på nul. HM Treasurys Magenta Book og den mangeårige Additionality Guide behandler forskydning som et krævet fradrag netop fordi lokale succeshistorier er almindelige selv når de ikke producerer nogen netto national eller regional fordel — værdi har blot flyttet sig, ofte til skade for det område eller de aktører, der mistede den. Strukturfondsevalueringsvejledning (brugt til tidligere EU Regional Development Fund-programmer og deres indenlandske efterfølgere, såsom UK Shared Prosperity Fund) formaliserer dette ved tre rumlige skalaer: lokal forskydning (inden i en by), regional forskydning (inden i en region), og national forskydning (over hele Storbritannien), fordi en intervention kan være additionel ved en skala, mens den er ren forskydning ved en bredere en — et jobprogram, der trækker arbejdere fra en nabobys, er nationalt neutralt, selv om det ser ud som en lokal succes.

Tilskrivning er søsterproblemet i partnerskabstung levering, som nu er normen i social sektor og tværagentur offentligt tjenestearbejde. Når tre organisationer leverer en hjemløshedsforebyggelsestjeneste sammen, kan hver organisations årlige rapport uafhængigt påstå æren for samme reduktion i uderenovering — summeret over rapporter kan den påståede effekt overstige den observerede virkelige verden-ændring, nogle gange med flere multipla. Magenta Books vejledning om bidragsanalyse eksisterer specifikt fordi randomiseret tilskrivning til en enkelt aktør ofte er umulig i multi-agentur-levering, og det ærlige svar er ofte "vi bidrog til dette resultat" snarere end "vi forårsagede dette resultat."

## Beregningen

Forskydning som en del af den standard nettoeffektsekvens (se [additionalitet og dødvægt](../additionality-and-deadweight/) for den fulde kæde):

```
Nettoadditionel effekt = Brutto resultat − Dødvægt −
                        Forskydning − Lækage, × Multiplikator

Forskydningsrate = fordel/aktivitet omdirigeret fra et andet
                   sted / samlede brutto fordel/aktivitet
                   observeret
```

Tilskrivning, hvor flere aktører bidrager til et resultat, udtrykkes typisk som en bidragsandel snarere end en præcis procentdel, fordi den normalt ikke kan måles med samme nøjagtighed som forskydning:

```
Tilskrivbar andel ≈ f(styrken af kausalt bidrag, andre
                    aktørers bidrag, eksterne/kontekstuelle
                    faktorer)

Påstået effekt bør aldrig overstige:
  Σ (hver partners tilskrivbare andel) ≤ 100% af det samlede
  observerede resultat
```

## Gennemregnet eksempel

**Regenereringsbevilling**: en kommunes hovedgadebevillingsordning rapporterer 200 nye detailjob skabt i den finansierede zone. Opfølgningsundersøgelse finder, at 60 af disse job kom fra virksomheder, der flyttede fra en nabogade, ufinansieret, inden samme kommune, og yderligere 30 kom fra nationale kæder, der åbnede filialer, der ville have åbnet et sted i regionen uanset bevillingen.

```
Brutto job påstået = 200
Lokal forskydning = 60 (flyttet inden i kommunen)
Regional forskydning = 30 (ville have åbnet regionalt
alligevel)

Nettoadditionelle job (kommuneniveau) = 200 − 60 = 140
Nettoadditionelle job (regionalt niveau) = 200 − 60 − 30 =
110
```

Den ærlige overskrift afhænger af den geografiske skala, finansieren bekymrer sig om — en Treasury-businesscase vurderet ved national eller regionalt niveau bør bruge 110, ikke kommuneniveauets 140, og bestemt ikke det rå 200.

**Multi-agentur hjemløshedstjeneste**: tre partnerorganisationer (en kommune, en bolig-velgørenhedsorganisation, og en sundhedstrust) leverer sammen en tjeneste til reduktion af uderenovering. Uderenovering i området faldt med 30 personer over året. Hver organisations individuelle årlige rapport påstår "vi reducerede uderenovering med 30" — summeret påstår de tre rapporter 90 hjulpne personer, tre gange den faktiske reduktion. En bidragsanalyse, der tildeler hver partner en andel (sig, 40% kommune, 35% velgørenhedsorganisation, 25% sundhedstrust, baseret på dokumenteret rolle og uafhængig vurdering), ville rapportere respektive 12, 10,5, og 7,5, summerende korrekt til de observerede 30.

## Forbindelse til softwareudvikling

Forskydning og tilskrivning former, hvordan effektsporing- og resultatrapporteringssystemer bør designes til multi-lokation- eller multi-partner-levering:

- Geografisk og organisatorisk omfang bør være explicitte, førsteklasses felter i ethvert effektdashboard — et tal rapporteret "for kommunen" og samme tal rapporteret "for regionen" er forskellige tal, og et system, der sammenblander dem, vil producere tal, der ikke kan afstemmes på porteføljeniveau.
- Hvor flere partnere leverer sammen, bør et resultatsystem registrere bidragsandele (eller som minimum flagge fælles tilskrivning) snarere end at lade hver partners rapporteringsmodul uafhængigt påstå 100% af et delt resultat — ellers vil porteføljeniveau-sammenlægninger overdrive total effekt, nogle gange slemt.
- Dette forbinder til [social afkast på investering](../social-return-on-investment/) og [bevillingsresultatrapportering](../grant-outcomes-reporting/): en SROI- eller IRIS+-beregning, der ignorerer forskydning eller over-tilskriver delte resultater, vil producere et opblæst forhold, der ikke overlever revision eller gentagelse.

## Faldgruber

- **At rapportere lokal succes uden at kontrollere bredere forskydning.** Et program kan se meget succesfuldt ud ved den mindste rapporteringsskala, mens det er neutralt eller endda negativt ved en bredere en; angiv altid den geografiske skala, nettotallet gælder for.
- **At lade hver partner i en fælles levering påstå fuld ære.** Uden bidragsandele aftalt og dokumenteret vil sammenlagt rapportering på tværs af partnere overdrive total effekt — kontrollér, at partnerniveaupåstande summerer til ikke mere end det observerede total.
- **At behandle tilskrivning som en præcis procentdel, når det virkelig er en vurdering.** Bidragsanalyse, i modsætning til en randomiseret kontrafaktual, producerer et forsvarligt estimat, ikke en målt faktum; præsentér det med passende usikkerhed snarere end falsk præcision.
- **At ignorere forskydning i markedsvendte interventioner.** Erhvervsstøtte, beskæftigelsesordninger, og stedbaseret regenerering er de klassiske høj-forskydnings-kategorier; behandl forskydningskontroller som obligatoriske for disse, ikke valgfri.

## Kilder

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
