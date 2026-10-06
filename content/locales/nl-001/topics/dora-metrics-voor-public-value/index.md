# DORA-metrics voor public value

De DORA-metrics (DevOps Research and Assessment) — implementatiefrequentie, doorlooptijd voor wijzigingen, wijzigingsfaalpercentage, en tijd-tot-herstel-dienst, plus betrouwbaarheid als een vijfde — zijn de meest gevalideerde leveringsprestatie-benchmarks van de software-industrie. Vertaald naar publieke-sector-verantwoordingstermen, is elk een directe proxy voor hoe snel, en hoe veilig, public value een burger bereikt.

## Waarom het ertoe doet

Het decennium onderzoek van DORA, jaarlijks gepubliceerd als het *Accelerate State of DevOps Report* (methodologie van Forsgren, Humble, en Kim, nu gedraaid door Google Cloud), clustert teams in elite, hoge, middelgrote, en lage prestaties. Elite teams implementeren op aanvraag, nemen minder dan een dag van commit tot productie, falen ruwweg 5% van wijzigingen, en herstellen in minder dan een uur; lage prestaties implementeren maandelijks of minder, nemen maanden, falen ongeveer 40% van wijzigingen, en herstellen in weken. In de overheid zijn dit geen engineering-vanity-maatstaven: de Service Standard van de Government Digital Service vereist dat teams "frequent itereren en verbeteren" en snel kunnen reageren op gebruikersbehoefte, en departementen die niet veilig en vaak kunnen implementeren zijn structureel onbekwaam om die norm te halen, wat hun gebruikersonderzoek ook zegt. Het eigen digitale-efficiëntiewerk van het Cabinet Office vond dat het duwen van een burger van een mislukte of trage digitale transactie naar een telefoon- of papierenkanaal duur is — het Digital Efficiency Report van 2012 van GDS schatte dat sommige digitale transacties slechts 20p kosten tegen telefoon- of persoonlijke contacten die tot £8,62 kosten — dus een wijzigingsfout in een burgergerichte dienst kost niet alleen engineeringtijd, het duwt echte ponden naar het contactcentrumbudget (zie [kanaalverschuivingsbesparingen](../kanaalverschuivingsbesparingen/)).

## De berekening

```
Implementatiefrequentie = productie-implementaties / tijd
Doorlooptijd voor wijzigingen = t(implementatie) − t(commit),
                               mediaan
Wijzigingsfaalpercentage = mislukte wijzigingen / totale
                          wijzigingen × 100
Tijd-tot-herstel (MTTR) = t(herstelt) − t(falen), mediaan
Betrouwbaarheid = SLO-behaling (beschikbaarheid, latentie,
                 correctheid)
```

Public-value-vertalingen:

```
Doorlooptijd     → weken in de pijplijn × CoD, zie kosten-van-
                   vertraging-in-overheidsprogramma's
Faalpercentage   → burgergericht incidentpercentage: CFR ×
                   kosten per omgeleid contactcentrumgesprek
                   (of per mislukte wettelijke transactie)
Herstelduur      → dienstuitvalschade: MTTR × (geblokkeerde
                   aanvragen/aanvragingen per uur) ×
                   stroomafwaartse kost of welzijnsverlies
                   per eenheid
Betrouwbaarheid  → batenkorting: een dienst op 99% beschik-
                   baarheid levert ≈ 0,99 van zijn gemodel-
                   leerde baat — de leveringsanaloog van
                   opnametekort of compliancetekort
```

## Uitgewerkt voorbeeld

Het team van een gemeentelijk uitkeringsaanvraagportaal, voor en na een leveringsengineeringinvestering:

```
                     Voor        Na
Implementaties       maandelijks  wekelijks
Doorlooptijd          8 weken      5 dagen
CFR                   30%          10%
MTTR                  3 dagen      4 uur
```

Het team levert ongeveer 25 verbeteringen/jaar, gemiddelde waarde £8.000/week ([kosten van vertraging](../kosten-van-vertraging-in-overheidsprogrammas/)). Het snijden van doorlooptijd met ruwweg 7,3 weken trekt de batenstroom van elke verbetering naar voren: 25 × 7,3 × 8.000 ≈ **£1.460.000/jaar** aan eerder geleverde waarde. Over faalpercentage: 25 × (0,30 − 0,10) = 5 minder mislukte wijzigingen/jaar; elke mislukte wijziging op een publiek portaal leidt typisch een geschatte 2.000 burgers om naar het telefoonkanaal tegen £8,62 versus 20p, een netto kost van ruwweg £8,42 × 2.000 ≈ £16.840 per incident, dus het vermijden van 5 incidenten bespaart ≈ **£84.200/jaar**. De leveringsengineeringinvestering wordt gewaardeerd in dezelfde valuta als elke andere public-value-zaak.

## Uitgewerkt voorbeeld vervolg: betrouwbaarheid

Als het portaal draait op 97% beschikbaarheid in plaats van een doel van 99,5%, en elk procentpunt downtime wordt gemodelleerd als 2% aanvragen verloren aan afbreking, levert de dienst ruwweg 0,975 van zijn gemodelleerde baat van £2M/jaar — een batenkorting van £50.000/jaar die een pure uptime-dashboard nooit blootlegt.

## Verband met softwareontwikkeling

DORA-metrics zijn de operationele maatstaven van een publieke dienst in andere kleren: doorlooptijd koppelt met [dienstnormen-en-transactiemaatstaven](../dienstnormen-en-transactiemaatstaven/); wijzigingsfaalpercentage koppelt met herwerk- en klachtenpercentages; MTTR koppelt met hoe lang een wettelijke dienst onbeschikbaar is voor aanvragers. Verbeteringstechnieken gaan in beide richtingen over omdat beide wachtrijsystemen zijn onder verantwoordingsbeperkingen — zie [flowmetrics-in-overheidslevering](../flowmetrics-in-overheidslevering/) voor de onderliggende wachtrijrekenkunde. Merk ook de bevinding van DORA uit 2025 op dat AI-adoptie correleert met hogere doorvoer maar *slechtere* stabiliteit — een interventie met zowel werkzaamheid als bijwerkingen, wat precies de netto-batenanalyse is die het onderwerp [AI-productiviteit](../ai-productiviteit-in-de-publieke-sector/) van dit hoofdstuk doorwerkt.

## Valkuilen

- **Maatstafmanipulatie**: implementatietellingen opblazen met no-op-releases, of hotfixes uitsluiten van de wijzigingsfaaltelling. Definieer gebeurtenissen net zo precies als een wettelijke dienstennorm een "succesvolle transactie" definieert.
- **Cross-departementale ranglijsten**: DORA-clusters vergelijken leveringspraktijken, geen diensten met verschillende risicoprofielen; een belastingbetalingssysteem beoordeeld als "hoog" kan de juiste houding zijn waar "elite" roekeloos zou zijn gegeven assurantievereisten.
- **Slechts één maatstaf optimaliseren**: snelheid zonder wijzigingsfaalpercentage is de klassieke doorvoer-instabiliteit-afweging — rapporteer alle vier samen, niet als een enkele score.

## Bronnen

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
