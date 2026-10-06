# Digitale dienstennorm

De GOV.UK Service Standard is de poort die elke centrale-overheidsdigitale dienst moet doorgaan voordat hij live kan gaan: 14 gepubliceerde punten, beoordeeld door een onafhankelijk panel aan het einde van elke leveringsfase. Het is het mechanisme dat "bouw goede publieke diensten" verandert van een slogan in een slaag/zak-besluit met een papieren spoor — en de directe afstammeling van het "digitaal bij standaard"-mandaat van de Government Digital Strategy uit 2012.

## Waarom het ertoe doet

Voordat de Service Standard bestond, was overheids-IT-falen zelden zichtbaar tot lancering, en zelden toeschrijfbaar aan een besluit waarnaar iemand kon wijzen. De Government Digital Strategy van 2012 verplichtte departementen tot het herontwerpen van de 25 hoogste-volume publiek-gerichte transactionele diensten als "digitaal bij standaard", en ondersteunde de verplichting met een compliance-mechanisme: diensten konden niet live gaan op GOV.UK zonder een dienstbeoordeling te doorstaan tegen wat toen een norm van 26 punten was (geconsolideerd tot 18 in 2019, en nu de norm van 14 punten die vandaag van kracht is, met drie groepen — gebruikersbehoeften begrijpen, een goede dienst bieden, en de juiste technologie gebruiken). Een dienstbeoordeling is een echte gebeurtenis: een panel van GDS- of departementale beoordelaars beoordeelt bewijs, ondervraagt het team, en geeft een oordeel van geslaagd, gefaald, of "niet behaald" tegen elk punt, gepubliceerd op de beoordelingspagina van de dienst. Een beoordeling niet doorstaan blokkeert de dienst van het verplaatsen van private bèta naar publieke bèta, of van bèta naar live — het is een echte poort, geen recensie.

## De berekening

De Service Standard is een raamwerk, geen formule, maar het functioneert als een gefaseerde besluitstructuur:

```
Discovery → Alpha-beoordeling → Beta-beoordeling → Live-
            (niet verplicht     (verplicht voor     beoordeling
             voor alle           lancering           (verplicht
             diensten, maar      publieke bèta)      voor
             aanbevolen)                              verwijdering
                                                       "bèta"-tag
                                                       en sluiten
                                                       oude kanaal)

Elke beoordeling: bewijs + teaminterview → paneloordeel per punt
  Behaald / Deels behaald / Niet behaald
Algeheel resultaat: Geslaagd / Geslaagd met voorwaarden / Gefaald
(herbeoordeling vereist)

Kosten van falen ≈ kosten van de volgende sprintcyclus om te
                   herstellen + vertraging van de
                   [kanaalverschuivingsbesparingen](../channel-
                   shift-savings/) die de dienst gefinancierd
                   werd om te leveren
```

Punt 10 ("definieer hoe succes eruitziet, en publiceer prestatiegegevens") is wat invoert in [kosten-per-transactie](../kosten-per-transactie/) en [dienstnormen-en-transactiemaatstaven](../dienstnormen-en-transactiemaatstaven/) — de norm verplicht de meting, niet alleen de dienst.

## Uitgewerkt voorbeeld

**Gemeentelijke huisvestingsaanvraagdienst**: een gemeenteteam bereikt zijn beta-beoordeling met een dienst die 11 van 14 punten behaalt maar faalt op punt 5 ("zorg dat iedereen de dienst kan gebruiken") omdat geen geassisteerd-digitale route bestaat voor aanvragers zonder internettoegang, en faalt op punt 9 omdat persoonsgegevens in platte tekst worden gelogd in applicatiefoutsporen.

```
Directe kosten van het falen:
  Herbeoordelingsslot: 6-8 weken wachttijd voor het volgende
  beschikbare panel
  Herstelsprint: 2 ontwikkelaars × 3 weken × £550/dag ≈
  £34.650
  Ontwerp geassisteerd-digitaal kanaal: 1 onderzoeker × 2
  weken ≈ £5.000

Vertragingskosten: dienst was voorspeld 40% van
18.000/jaar huisvestingsverzoeken te verschuiven van
£8,50-telefoongesprekken naar £0,20-digitale transacties
  = 7.200 × (£8,50 − £0,20) = £59.760/jaar misgelopen,
  pro-rata voor de ~2-maanden vertraging ≈ £9.960

Totale kosten van de gefaalde beoordeling ≈ £49.610
```

Het punt van de rekenkunde is niet de precisie — het is dat een gefaalde beoordeling een echte, berekenbare prijs heeft, wat precies is waarom de poort tanden heeft.

## Verband met softwareontwikkeling

Voor ingenieurs leest de norm als een architectuur- en leveringschecklist net zo goed als een beleidsdocument: punt 11 ("kies de juiste hulpmiddelen en technologie") en punt 12 ("maak nieuwe broncode open") zijn directe engineeringbeslissingen, en punt 14 ("draai een betrouwbare dienst") vereist dezelfde SLO's en incidentprocessen die elk productiesysteem nodig heeft. Het is het overkoepelende raamwerk voor dit hoofdstuk — [kosten-per-transactie](../kosten-per-transactie/) en [kanaalverschuivingsbesparingen](../kanaalverschuivingsbesparingen/) zijn wat de norm financieel probeert te beschermen, [digitale-inclusie](../digitale-inclusie/) is wat punt 5 bestaat om te garanderen, en [overheid-als-platform](../overheid-als-platform/)-componenten (GOV.UK Notify, Pay, One Login) voldoen aan punt 13 ("gebruik en draag bij aan open standaarden, gemeenschappelijke componenten, en patronen") grotendeels standaard. Zie ook [build-versus-buy-in-de-overheid](../build-versus-buy-in-de-overheid/) voor hoe het "juiste hulpmiddelen"-punt uitspeelt in aanbestedingsbeslissingen.

## Valkuilen

- **Beoordeling behandelen als een lanceerdag-compliance-vakje**: teams die de 14 punten voor het eerst lezen een week voor hun beta-beoordeling falen voorspelbaar; de norm is bedoeld om beslissingen te vormen vanaf discovery, niet ze achteraf te auditen.
- **Het prototype beoordelen, niet de dienst**: een gladde demo kan een beoordeling doorstaan die de live, geassisteerd-digitaal-inclusieve, incidentbeheerde versie van de dienst zou falen — beoordelaars zijn bedoeld om hierop te sonderen, maar zelf-gecertificeerde kleine diensten slaan dit vaak over.
- **Geen herbeoordeling voor opschaling**: een dienst beoordeeld bij 5% uitrol blijft niet automatisch compliant bij 100% — belasting, faalvraag, en randgeval-gebruikers veranderen allemaal.
- **De Service Standard verwarren met een ontwerpsysteem**: componenten van het GOV.UK Design System voldoen aan sommige punten (consistentie, toegankelijkheid) maar de norm omvat ook teamstructuur, agile praktijk, en gegevensethiek — een goed gestileerde dienst kan nog steeds falen op punten 2, 6, of 9.

## Bronnen

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
