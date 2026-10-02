# Nyckeltal för offentlig sektor

Ett nyckeltal (KPI) är ett valt, spårat mått som står in för huruvida en offentlig tjänst gör sitt jobb väl. Inom staten är valet av KPI aldrig neutralt: eftersom KPI:er kopplas till budgetar, rankningslistor och karriärer formar akten att välja en beteendet hos alla nedströms om det, ofta mer än den policy som skapade tjänsten.

## Varför det spelar roll

Charles Goodharts observation från 1975 om penningpolitik — senare populariserad av Marilyn Strathern som "när ett mått blir ett mål upphör det att vara ett bra mått" — är den enskilt viktigaste varningsetiketten inom offentlig sektors prestationshantering. En KPI vald för att *beskriva* ett system börjar *snedvrida* det systemet i samma ögonblick resurstilldelning, lön eller politisk överlevnad kopplas till det. Den kanoniska illustrationen är NHS ambulansresponsttider: när Category A-responsmålet på åtta minuter blev bindande visade det sig att vissa vårdgivare "staplat" ambulanser precis utanför responstidens klocka, eller omklassificerat samtal, för att träffa siffran utan att ändra patientutfall. Storbritanniens National Audit Office-vägledning om att välja och använda prestationsindikatorer — fastställd genom dess valuta-för-pengarna-rapporter och dess ramverk "Performance Measurement by Regulators" och "Choosing the Right FABRIC" (ändamålsenlig, lämplig, balanserad, robust, integrerad, kostnadseffektiv) — existerar just eftersom departement fortsatte att välja indikatorer som var lätta att rapportera snarare än indikatorer som var svåra att manipulera. En mjukvaruingenjör som levererar instrumentpanelen en minister eller direktör kommer att bedömas mot håller, oavsett avsikt, på att designa den offentliga institutionens incitamentsstruktur.

## Beräkningen

KPI-design är ett ramverksformat ämne, men *utvärderingen* av en kandidat-KPI är en repeterbar checklista, inte en formel:

```
För varje kandidat-KPI, poängsätt mot:
  Ändamålsenlig   — mäter det utfallet, eller en proxy flera
                    steg bort?
  Lämplig         — tillhör det de som faktiskt kan påverka
                    det?
  Balanserad      — är det parat med ett motmått som fångar
                    manipulation?
  Robust          — kan det överleva granskning, eller är det
                    självrapporterat och overifierbart?
  Integrerad      — passar det in i den bredare uppsättningen,
                    eller motverkar det en annan KPI?
  Kostnadseffektiv — kostar det mer att samla in än det beslut
                    det informerar?

Ledande kontra eftersläpande delning:
  Ledande indikator     → förutspår framtida utfall, men ofta
                          manipulerbar （t.ex. samtal
                          besvarade <60s）
  Eftersläpande indikator → bekräftar att utfallet inträffade,
                          men kommer för sent för att styra
                          （t.ex. årlig nöjdhetsundersökning）
  En försvarbar KPI-uppsättning parar minst en av vardera per
  mål.
```

## Genomräknat exempel

**Ambulansvårdgivare**: en vårdgivare rapporterar en KPI för Category A-responstid (livshotande) på "75% av samtalen besvarade inom 8 minuter." Under ett kvartal kommer 6 000 Category A-samtal in; 4 500 möts inom 8 minuter, vilket ger 75,0% — till synes på mål.

```
Rubrik-KPI = 4 500 / 6 000 × 100 = 75,0%  （uppfyller
            75%-tröskeln）
```

Men en Goodhart-granskning lägger till ett motmått: genomsnittlig responstid för de långsammaste 10% av samtalen.

```
Genomsnitt för långsammaste decilen = 34 minuter （upp från
19 minuter två år tidigare）
```

Vårdgivaren träffar målet medan svansen — de samtal som mest sannolikt är genuint livshotande när triage är ofullkomlig — har blivit mycket värre, eftersom besättningar prioriteras mot samtal nära 8-minutersstupet snarare än mot klinisk brådska. Den enda KPI:n berättade en falsk historia; den parade KPI:n berättade den sanna.

## Koppling till mjukvaruutveckling

Ingenjörer som bygger prestationsinstrumentpaneler för staten designar, funktionellt, organisationens incitaments-API. Praktiska implikationer: instrumentera *nämnaren* lika rigoröst som täljaren (en KPI rapporterad som ett bart procenttal inbjuder till nämnarmanipulation — se [kostnad per transaktion](../cost-per-transaction/) för samma fälla inom digitala tjänster); bygg motmått in i samma instrumentpanel istället för en separat rapport ingen läser, så manipulation blir synlig vid beslutstillfället; och versionshantera KPI-definitionen, eftersom en tyst omdefinition (att ändra vad som räknas som ett "samtal," ett "ärende," eller en "slutförd") funktionellt motsvarar att ändra målet utan att meddela det. En [instrumentpanel för offentligt värde](../public-value-scorecard/) är ett strukturerat sätt att förhindra att en enda KPI läses isolerat, och [resultatbaserad ansvarsskyldighet](../outcomes-based-accountability/) är disciplinen att välja KPI:er på befolkningsnivå som ett enskilt team inte ensidigt kan snedvrida.

## Fallgropar

- **Att välja det lättinsamlade måttet framför det meningsfulla**: samtalssvarstid är trivial att logga; huruvida samtalet löste medborgarens problem är det inte — men bara det andra är utfallet. Motstå att som standard använda vad systemet redan avger.
- **Inget motmått**: alla KPI:er kopplade till pengar eller rykte kommer att manipuleras vid marginalen; leverera det med ett parat mått som fångar den troliga manipulationsvektorn innan publicering.
- **Att omdefiniera måttet utan en ändringslogg**: att byta "mottagna samtal" mot "besvarade samtal" för att försköna en trend förstör tidsseriens trovärdighet i samma stund det upptäcks — publicera alltid en definitionsändringslogg tillsammans med siffrorna.
- **Att förväxla aktivitet med resultat**: att räkna slutförda inspektioner är ett resultat; att räkna lokaler som förts in i regelefterlevnad ligger närmare utfallet (se [utfall kontra output](../outcomes-vs-outputs/)).

## Källor

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
