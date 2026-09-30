# Cyberbeveiligingswaarde publieke sector

Cyberbeveiligingswaarde publieke sector is de discipline van het prijzen van risicoreductie: wat is het waard om een inbreuk op burgergegevens minder waarschijnlijk te maken, gegeven dat beveiligingsuitgaven geen zichtbare output produceren wanneer het werkt en een zeer zichtbare wanneer het faalt? Voor een dienst die uitkeringsrecords, gezondheidsgegevens, of belastingrecords bevat, is die "onzichtbaar wanneer werkend"-eigenschap precies waarom het een expliciet waardeargument nodig heeft, geen loutere compliancevakje.

## Waarom het ertoe doet

Het Cyber Assessment Framework (CAF) van het Britse National Cyber Security Centre geeft publieke-sectororganisaties een gestructureerde manier om beveiliging een beoordeelbare, uitkomstgebaseerde discipline te maken in plaats van een checklist: het definieert vier hoogniveaudoelstellingen (beveiligingsrisico beheren, beschermen tegen cyberaanval, cyberbeveiligingsgebeurtenissen detecteren, en de impact van incidenten minimaliseren) opgedeeld in bijdragende uitkomsten waartegen een systeemeigenaar kan worden beoordeeld, in dezelfde geest als punt 9 van de [digitale-dienstennorm](../digital-service-standard/) ("creëer een veilige dienst die de privacy van gebruikers beschermt"). Waar CAF-beoordeling tegen beschermt, heeft een gedocumenteerd prijskaartje: het Cost of a Data Breach Report van IBM volgt gemiddelde inbreukkosten per sector, en heeft consequent de publieke sector aan de lagere kant van het bereik gevonden vergeleken met financiën of gezondheidszorg — recente edities zetten het publieke-sectorgemiddelde op ongeveer $2,6-2,9 miljoen per inbreuk — maar "lager dan financiën" is niet "laag", en overheidsinbreuken dragen kosten die de cijfers van het rapport niet volledig vastleggen: verlies van burgervertrouwen in digitale kanalen, wat de [digitale opname](../channel-shift-savings/) drukt waarvan kanaalverschuivingsbusinesscases afhangen, en de politieke en juridische kost van het blootstellen van gegevens die de staat burgers überhaupt dwong te overhandigen.

## De berekening

Beveiligingsinvestering wordt gewaardeerd op de manier waarop elke risicoreductie-uitgave wordt gewaardeerd: als een verwachte-verliesreductie, met behulp van de klassieke risicobeheersidentiteit.

```
Geannualiseerde verliesverwachting (ALE) = enkele
                                           verliesverwachting
                                           (SLE) ×
                                           geannualiseerde
                                           voorkomingsratio
                                           (ARO)

Waarde van een beveiligingscontrole =
  ALE_voor_controle − ALE_na_controle − jaarlijkse kosten van
  de controle

Een controle is de financiering waard wanneer:
  (ALE_voor − ALE_na) > jaarlijkse kosten van de controle

CAF-beoordeling levert niet direct een kans op, maar het
CAF-uitkomstprofiel van een dienst (welke bijdragende uitkomsten
"behaald", "deels behaald", of "niet behaald" zijn) is een
redelijke proxy-invoer om ARO te schatten — een systeem met
ongebeheerde geprivilegieerde toegang of geen getest
incidentresponsplan heeft een materieel hogere realistische ARO
dan een dat beide heeft.
```

## Uitgewerkt voorbeeld

**Countyraad-casemanagementsysteem met sociale-zorgrecords voor 40.000 inwoners**:

```
Enkele verliesverwachting (inbreukkosten), met behulp van een
publieke-sector-gemiddelde uit een recent IBM Cost of a Data
Breach Report ≈ £2,1m (omgerekend, ordergrootte-cijfer — altijd
herleiden uit de huidige rapporteditie in plaats van een vast
getal te herbruiken)

Huidige ARO (ongebeheerde geprivilegieerde toegang, geen
geteste incidentrespons, volgens een interne CAF-
zelfbeoordeling die meerdere "niet behaald"-uitkomsten toont)
≈ geschat 8% per jaar
  ALE_voor = £2,1m × 0,08 = £168.000/jaar

Voorgestelde controle: geprivilegieerd-toegangsbeheer + geteste
incidentresponsplan, dat de relevante CAF-uitkomsten naar
"behaald" verplaatst, geschat om ARO te snijden naar 3%/jaar
  ALE_na = £2,1m × 0,03 = £63.000/jaar

Jaarlijkse kosten van de controle (hulpmiddelen + proces +
testen) = £45.000

Waarde van de controle = (168.000 − 63.000) − 45.000 =
£60.000/jaar netto positief — financier het. De rekenkunde
toont ook dat de controle nog steeds de financiering waard zou
zijn bij bijna het drievoud van de kosten, wat het soort
gevoeligheidscontrole is dat elk ALE-cijfer opgebouwd uit
geschatte kansen zou moeten vergezellen.
```

## Verband met softwareontwikkeling

Ingenieurs bezitten de meeste hefbomen in de ALE-vergelijking: toegangscontroleontwerp, afhankelijkheids- en patchhygiëne, logging- en detectiedekking, en incidentresponshulpmiddelen bewegen allemaal de ARO-term direct, wat de reden is dat CAF-beoordeling leest als een technische architectuurbeoordeling net zo goed als een beleidsaudit. Dit is [technische-schuld-als-public-value-erosie](../technical-debt-as-public-value-erosion/) in zijn meest acute vorm — ongepatchte, ongemonitorde, slecht-toegangsgecontroleerde systemen zijn schuld waarvan de rentebetaling staartrisico is, geen stabiele weerstand — en het zou moeten worden verzoend met [totale-eigendomskosten-in-overheids-IT](../total-cost-of-ownership-in-government-it/) zodat beveiligingsuitgave niet wordt behandeld als afgezonderd van de echte draaikosten van het systeem. Het is ook een directe invoer voor [value-for-money](../value-for-money/)-beoordelingen onder het Green Book: risicogecorrigeerde kosten zijn deel van de "kosten"-kant van elke optiebeoordeling, geen bijzaak achteraf vastgeschroefd.

## Valkuilen

- **CAF-zelfbeoordeling behandelen als beveiliging zelf**: een voltooide beoordeling beschrijft een beveiligingspositie; het creëert er geen — de waarde zit in de behaalde uitkomsten, niet het document.
- **Globale gemiddelde inbreukkosten gebruiken als een lokale schatting zonder aanpassing**: de cijfers van IBM zijn gemiddelden over grote, gevarieerde steekproeven; de realistische enkele verliesverwachting van een kleine gemeente is zelden hetzelfde als die van een nationaal overheidsdepartement.
- **Staartrisicopsychologie negeren in investeringsbeslissingen**: een lage jaarlijkse kans maakt beveiligingsuitgave gemakkelijk oneindig uit te stellen, precies tot het jaar dat het niet zo is — de ALE-berekening gevoeligheidstesten tegen een bereik van ARO's, zoals in het uitgewerkte voorbeeld, gaat hier tegen in.
- **Alleen de IBM-achtige inbreukkosten tellen, niet de vertrouwenskost**: een inbreuk die burgerwil om digitale kanalen te gebruiken drukt, erodeert de [kanaalverschuivingsbesparingen](../channel-shift-savings/)-zaak voor jaren erna, een kost zelden meegenomen in inbreukkostenschattingen.

## Bronnen

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
