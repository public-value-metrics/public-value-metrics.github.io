# Kosten per transactie

Kosten per transactie zijn de koptekst-eenheidseconomiemaatstaf voor een digitale overheidsdienst: totale kosten om een kanaal te leveren, gedeeld door het aantal voltooide transacties erdoorheen. Het was het vlaggenschipcijfer op het oude GOV.UK Performance Platform, en het is het cijfer dat een decennium aan "digitaal bij standaard"-investering financierde — wat precies is waarom het ook de maatstaf is die het meest vatbaar is voor manipulatie.

## Waarom het ertoe doet

Het Digital Efficiency Report van 2012 van het Cabinet Office zette de kanaalkostenvergelijking in termen die bleven hangen: digitale transacties werden gevonden ongeveer 20 keer goedkoper te zijn dan per telefoon en ongeveer 50 keer goedkoper dan persoonlijk, met illustratieve lokale-overheidscijfers van ruwweg £0,15 per webtransactie tegen £2,83 per telefoon en £8,62 persoonlijk. Die enkele vergelijking werd de rechtvaardiging voor het herontwerpen van de 25 voorbeelddiensten genoemd in de Government Digital Strategy, en voor elke departementale businesscase die sindsdien kanaalverschuivingsbesparingen heeft geciteerd. Het cijfer is echt nuttig als een ordergrootte-signaal, maar de verhouding hangt volledig af van wat wordt meegeteld op elke kant: een eerlijke telefoonkanaalkost omvat het personeel van het callcenter, telefoniecontract, training, en vastgoed; een eerlijke digitale kost omvat hosting, doorlopende productteamsalarissen, supportdesktijd voor mislukte reizen, en het geassisteerd-digitale kanaal vereist door punt 5 van [digitale-dienstennorm](../digitale-dienstennorm/). Strip genoeg daarvan weg van de digitale kant en elke dienst ziet er goedkoop uit.

## De berekening

```
Kosten per transactie = totale toegewezen kanaalkosten /
                        voltooide transacties

Totale toegewezen kanaalkosten zouden moeten omvatten:
  + hosting en infrastructuur
  + product-/engineering-/supportteamkosten (afgeschreven)
  + inhouds- en dienstontwerpkosten (afgeschreven)
  + geassisteerd-digitale/toegankelijkheidsondersteunings-
    kosten
  + faalvraagkosten (gebruikers die falen digitaal en
    terugvallen op telefoon)
  − eenmalige bouwkosten worden afgeschreven over de
    verwachte levensduur van de dienst, niet volledig
    uitgegeven in jaar één

De veelvoorkomende boekhoudkundige truc:
  "Marginale kosten per transactie" (alleen hosting, eenmaal
  gebouwd) worden geciteerd alsof het "gemiddelde kosten per
  transactie" waren (totale kosten inclusief het team dat het
  blijft bouwen en draaien). De twee kunnen 10x of meer
  verschillen voor een dienst met een groot, actief
  leveringsteam.
```

## Uitgewerkt voorbeeld

**Voertuigbelastingverlengingsdienst**: 4 miljoen transacties/jaar.

```
Alleen-marginaal cijfer (de truc):
  Alleen hosting + betalingsverwerking = £180.000/jaar
  Kosten per transactie = 180.000 / 4.000.000 = £0,045
  → koptekstcijfer geciteerd in een businesscase

Volledig-belast cijfer (het eerlijke):
  Hosting + betaling                    £180.000
  Product-/engineeringteam (8 FTE)      £720.000
  Supportdesk (mislukte/betwiste
  transacties)                          £310.000
  Geassisteerd-digitale telefoonlijn     £140.000
  Totaal                               £1.350.000
  Kosten per transactie = 1.350.000 / 4.000.000 = £0,3375

Het volledig-belaste cijfer is nog steeds ruwweg 8x goedkoper
dan het vergelijkingscijfer van £2,83 telefoonkanaal uit het
Digital Efficiency Report — een echte en verdedigbare
besparing — maar 7,5x hoger dan het alleen-marginale cijfer
geciteerd in de verkorte versie. Beide cijfers zijn "waar";
slechts één is vergelijkbaar met de telefoonkanaalkost
waartegen het wordt afgezet.
```

## Verband met softwareontwikkeling

Kosten per transactie is waar architectuurbeslissingen een financiecijfer worden: een dienst die netjes automatisch schaalt en weinig handmatige interventie nodig heeft, stuurt dit cijfer in de tijd naar beneden; een dienst die hoog volume aan supporttickets genereert uit verwarrende foutstaten stuurt het omhoog ongeacht hostingefficiëntie. Het is de natuurlijke begeleidende maatstaf van punt 10 van [digitale-dienstennorm](../digitale-dienstennorm/) ("definieer hoe succes eruitziet, en publiceer prestatiegegevens") en van [dienstnormen-en-transactiemaatstaven](../dienstnormen-en-transactiemaatstaven/), die de volledigere KPI-set uiteenzet waarbinnen dit cijfer past. Het voert ook direct in [kanaalverschuivingsbesparingen](../kanaalverschuivingsbesparingen/)-berekeningen en zou moeten worden verzoend met [totale-eigendomskosten-in-overheids-IT](../totale-eigendomskosten-in-overheids-it/) zodat platform- en gedeelde-diensten-overhead niet stilzwijgend wordt weggelaten.

## Valkuilen

- **Marginale kosten verkleed als gemiddelde kosten**: alleen-hostingkosten citeren zodra een dienst is gebouwd, met weglating van het doorlopende team dat het onderhoudt, itereert, en ondersteunt — zie het uitgewerkte voorbeeld hierboven.
- **Geassisteerd-digitale kosten uitsluiten**: een kanaal is niet "digitaal bij standaard"-compliant, en zijn werkelijke kosten worden niet vastgelegd, als de telefoon-/papieren-terugval vereist door [digitale-inclusie](../digitale-inclusie/) apart wordt gekost of genegeerd.
- **Faalvraag negeren**: transacties die digitaal beginnen en falen, die toch een telefoontje of papieren formulier genereren, zijn een kost van het digitale kanaal, niet het kanaal dat de fout opvangt.
- **Transacties van verschillende complexiteit vergelijken tussen kanalen**: telefoongesprekken behandelen disproportioneel de moeilijke gevallen (meerdere afhankelijken, foutcorrectie, kwetsbare aanvragers); een gemiddelde telefoonkost vergelijken met een gemiddelde digitale kost overdrijft de verhouding tenzij de transactiemix overeenkomt.

## Bronnen

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
