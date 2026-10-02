# Productiviteit publieke dienstverlening

Productiviteit van publieke dienstverlening meet hoe efficiënt publieke uitgaven inputs (personeel, kapitaal, goederen en diensten) omzetten in kwaliteitsgecorrigeerde outputs, voor diensten — gezondheidszorg, onderwijs, politie, sociale zorg — die geen marktprijs hebben en dus geen omzetcijfer om kosten in te delen. Het Britse Office for National Statistics publiceert deze reeks al sinds het midden van de jaren 2000 en het blijft de methodologisch meest ontwikkelde nationale poging om te antwoorden op "wordt de overheid beter of slechter in het omzetten van geld in publieke diensten?"

## Waarom het ertoe doet

Op een markt is productiviteit (outputwaarde) / (inputkosten), en outputwaarde is observeerbaar omdat iemand ervoor betaalt. Een heupoperatie, een schoolplaats, en een politiepatrouille hebben geen verkoopprijs, dus naïef kun je alleen *inputs* meten (wat werd besteed) — wat commentatoren verleidt tot het behandelen van stijgende publieke uitgaven als automatisch slecht, omdat meer input met vlakke koptekstactiviteit eruitziet als dalende productiviteit. De ONS-methodologie, uiteengezet in zijn "Sources and Methods"-publicaties voor productiviteit van publieke dienstverlening, lost dit op door een *output*-index te construeren uit activiteitsvolumes (uitgevoerde operaties, onderwezen leerlingen, onderzochte misdrijven) en die outputindex vervolgens *kwaliteitscorrigeert* — voor gezondheidszorg, door overlevingspercentages en wachttijden op te nemen; voor onderwijs, door leerresultaten op te nemen; voor politie, door uitkomsten zoals zaakoplossing op te nemen — zodat een dienst die hetzelfde aantal operaties uitvoert maar betere overlevingspercentages behaalt, wordt geregistreerd als productiever, niet slechts als duurder. De koptekstbevinding die terugkeert over ONS-uitgaven is ontnuchterend voor de sector: de productiviteit van de Britse publieke dienstverlening daalde scherp tijdens de COVID-19-pandemie en had volgens de eigen uitgaven van ONS medio 2020 nog steeds niet herstelt tot niveaus van 2019 in verschillende subsectoren waaronder de gezondheidszorg, zelfs terwijl de uitgaven stegen — een kloof die "meer financiering" en "meer productiviteit" herkadert als twee volledig afzonderlijke vragen.

## De berekening

```
Outputindex (volume) = Σ (activiteit_i × relatieve
                       eenheidskostenweging_i), basisjaar-
                       gewogen over alle dienstactiviteiten
                       (bijv. heupoperaties, staaroperaties,
                       huisartsconsulten), analoog aan een
                       Laspeyres/Paasche-volumeindex

Kwaliteitscorrectie   = outputindex × kwaliteitscorrectiefactor
                       (bijv. incorporeert een verandering in
                       overlevingspercentages, wachttijden,
                       leerresultaten, of recidive als een
                       vermenigvuldiger op ruw volume)

Inputindex            = Σ (arbeidsuren × arbeidskostenweging)
                       + (kosten goederen/diensten,
                       gedefleerd) + (kapitaalverbruik)

Groei totale-factorproductiviteit = % verandering in
                                    kwaliteitsgecorrigeerde
                                    outputindex − % verandering
                                    in inputindex
```

## Uitgewerkt voorbeeld

**Illustratieve NHS-acute-sector-productiviteitsberekening** (structuur volgt ONS-methodologie):

```
Jaar 1: outputvolume-index = 100,0 (basisjaar), inputindex =
        100,0 → productiviteitsindex = 100,0

Jaar 2: activiteitsvolume stijgt 3,0% (meer operaties, meer
        afspraken) maar gemiddelde wachttijd verslechtert, met
        toepassing van een kwaliteitscorrectiekorting van −1,0%
        Kwaliteitsgecorrigeerde outputindex = 100 × 1,030 ×
        0,990 = 101,97

        Inputs stijgen: personeelsaantallen +4,0%, andere
        kosten (gedefleerd) +1,5%, gewogen inputindex = 100 ×
        1,032 = 103,2

Productiviteitsgroei = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                      = 1,97% − 3,2% = −1,23 procentpunten

Interpretatie: activiteit steeg, maar inputs stegen sneller en
kwaliteit daalde licht, dus productiviteit — output per
eenheid input — daalde ondanks dat "meer zorg werd geleverd."
```

Dit is precies het patroon dat ONS-uitgaven herhaaldelijk hebben gerapporteerd voor delen van de NHS na de pandemie: stijgende uitgaven en stijgende ruwe activiteit die samen bestaan met dalende gemeten productiviteit zodra zowel kwaliteitscorrectie als inputgroei worden meegenomen.

## Verband met softwareontwikkeling

Productiviteit van publieke dienstverlening is de populatieniveau-analoog van engineeringproductiviteitsdebatten (geleverde storypoints versus [DORA-metrics](../dora-metrics-for-public-value/) versus [flowmetrics](../flow-metrics-in-government-delivery/)): ruwe doorvoer zonder kwaliteitscorrectie is precies zo misleidend in een ziekenhuis als "geleverde regels code" is bij een softwareteam. Teams die prestatiegegevenspijplijnen bouwen voor departementen zouden kwaliteitscorrectie moeten behandelen als een eersteklas, versioneerde transformatiestap, geen voetnoot — omdat de eigen geloofwaardigheid van ONS rust op die correctie transparant, reproduceerbaar, en herzien zijn zodra betere kwaliteitsgegevens binnenkomen (ONS herziet productiviteitsschattingen van voorgaande jaren zodra onderliggende kwaliteitsgegevens — bijv. overlevingspercentages — worden afgerond, dus elk stroomafwaarts systeem dat deze statistieken consumeert, moet met achteraf-herzieningen omgaan, niet alleen nieuwe periodes toevoegen). Het kruist ook direct met [totale eigendomskosten](../total-cost-of-ownership-in-government-it/) en [AI-productiviteit in de publieke sector](../ai-productivity-in-the-public-sector/): een systeem dat ruw activiteitsvolume verhoogt zonder kwaliteit te verbeteren of te handhaven, is, volgens de eigen definitie van ONS, geen productiviteitsverbetering.

## Valkuilen

- **Inputgroei behandelen als productiviteitsgroei**: meer uitgaven die meer personeel financieren, produceert meer *activiteit*, niet meer *productiviteit*, tenzij output per eenheid input ook stijgt — de twee worden routinematig samengevoegd in politiek commentaar.
- **Kwaliteitscorrectie volledig negeren**: een outputindex gebouwd alleen uit ruwe activiteitentellingen zal "productiviteitswinsten" tonen door meer te doen van iets van lagere waarde of kwaliteit; de kwaliteitscorrectie van ONS bestaat specifiek om dit op te vangen.
- **Productiviteitsindices tussen subsectoren vergelijken zonder overeenkomstige methodologie-versie**: productiviteit van gezondheidszorg, onderwijs, en politie zijn elk opgebouwd uit verschillende activiteits- en kwaliteitsgegevensbronnen op verschillende herzieningscycli — een naïeve sectoroverschrijdende vergelijking vergelijkt incompatibele instrumenten.
- **De productiviteitsdaling van één jaar lezen als een permanente trend**: pandemie- en post-pandemiecijfers over productiviteit hebben significante jaar-op-jaar-volatiliteit getoond doordat kwaliteitsgegevens zelf (bijv. wachtlijsten, elektief herstel) verschoven; ONS waarschuwt consequent tegen het overinterpreteren van bewegingen in één jaar.

## Bronnen

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
