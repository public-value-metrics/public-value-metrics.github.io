# Kosten per uitkomst

Kosten per uitkomst zijn totale programma-uitgaven gedeeld door het aantal mensen dat een gedefinieerde, betekenisvolle verandering in hun omstandigheden bereikt — niet het aantal dat slechts een dienst ontving. Het is de scherpste efficiëntiemaatstaf die een financier of leveringsteam kan gebruiken, omdat het een voorafgaande vraag afdwingt die de meeste goede doelen vermijden: wat, precies, telt als succes?

## Waarom het ertoe doet

Een voedselbank kan twee zeer verschillende cijfers rapporteren uit dezelfde jaarrekening. Kosten per uitgedeeld voedselpakket kunnen £15 zijn. Kosten per huishouden dat vervolgens voedselzekerheid bereikt — geen noodvoedselhulp meer nodig, geverifieerd op een follow-uppunt — kunnen £340 zijn. Beide zijn waar. Slechts één vertelt een financier of het geld werkt. De kloof daartussen is de kloof tussen een output en een uitkomst: een overhandigd pakket is een output; een huishouden niet langer in crisis is een uitkomst. Zie [uitkomsten versus output](../uitkomsten-versus-output/).

De Britse vrijwilligerssector heeft twee decennia besteed aan het bouwen van infrastructuur om dit onderscheid af te dwingen. De "vierpijler-aanpak" van New Philanthropy Capital voor goed-doel-effectiviteit vraagt organisaties expliciet hun uitkomsten te vermelden voor hun outputs, en Inspiring Impact — het door financiers gesteunde Britse impactmetingssamenwerkingsverband — publiceert een Outcomes Matrix die veel subsidieaanvragen goede doelen nu moeten invullen. Het jaarlijkse "State of Hunger"-onderzoeksprogramma van de Trussell Trust, uitgevoerd met de Heriot-Watt University, bestaat precies omdat pakkettellingen alleen niets zeggen over of mensen ontsnappen aan voedselonzekerheid.

Kosten per uitkomst betekenen alleen iets zodra je de contrafeitelijke situatie hebt vastgesteld: een "toch" behaalde uitkomst is geen uitkomst die het programma heeft gekocht. Zie [contrafeitelijke analyse](../contrafeitelijke-analyse/) en [verdringing en toeschrijving](../verdringing-en-toeschrijving/).

## De berekening

```
Kosten per uitkomst = Totale programmakosten / Aantal
                      begunstigden dat de gedefinieerde
                      uitkomst bereikt

waarbij:
  Totale programmakosten = directe leveringskosten + billijk
                           aandeel van overhead
  Gedefinieerde uitkomst  = een vooraf gespecificeerde, meetbare
                           toestandsverandering (bijv.
                           "voedselzeker bij follow-up na 6
                           maanden", niet "een voedselpakket
                           ontvangen")
```

Vergelijk met [databanken voor eenheidskosten](../databanken-voor-eenheidskosten/) (bijv. sectorspecifieke eenheidskostenbenchmarks) om te beoordelen of een gegeven kosten-per-uitkomst goed, gemiddeld, of slecht is relatief tot vergelijkbare interventies.

## Uitgewerkt voorbeeld

**Voedselbank, één jaar**:

- Totale programmakosten: £450.000
- Uitgedeelde pakketten: 30.000
- Kosten per pakket (een outputmaatstaf): £450.000 / 30.000 = **£15**

Het goede doel voert ook een follow-upenquête na zes maanden uit met een steekproef van huishoudens, waaruit blijkt dat 35% van de huishoudens die drie of meer pakketten ontvingen, rapporteert geen noodvoedselhulp meer nodig te hebben en boven de voedselzekerheidsdrempel scoort op een standaard voedselzekerheidsenquêtemodule. Van 1.800 huishoudens die dat jaar drie-plus pakketten ontvingen, bereiken 630 die uitkomst.

```
Kosten per uitkomst = £450.000 / 630 = £714 per huishouden dat
voedselzekerheid bereikt
```

Dat cijfer van £714 is het cijfer dat een financier die dit goede doel vergelijkt met een cash-transfer-pilot of een schuldhulpdienst zou moeten gebruiken — niet £15. Als een vergelijkbaar cash-transfer-programma in dezelfde regio voedselzekerheid bereikt tegen £500 per huishouden, is de voedselbank niet duidelijk de efficiëntere route naar dezelfde uitkomst, ondanks dat zijn kosten per pakket goedkoop lijken.

## Verband met softwareontwikkeling

De meeste casemanagementsystemen zijn gebouwd om outputs te loggen, omdat outputs gebeuren binnen de transactie (een pakket wordt overhandigd, een formulier wordt ingediend). Uitkomsten gebeuren meestal later, vaak buiten het normale vastleggingsvenster van het systeem, en vereisen een bewuste ontwerpbeslissing: bouw een follow-upmechanisme (een enquêtetrigger, een herhercontactworkflow, een gegevenskoppelingsoefening) als een eersteklas functie, geen bijzaak vastgeschroefd voor een jaarverslag. Ingenieurs die subsidiebeheer- of casemanagementplatforms bouwen voor de sector zouden "wat is de uitkomstgebeurtenis, en hoe observeren we die" moeten behandelen als een vereistenvraag gesteld voordat het datamodel wordt vastgelegd — het is veel moeilijker om een uitkomstveld achteraf toe te voegen dan een outputteller. Zie [uitkomsten versus output](../uitkomsten-versus-output/) en [logisch model](../logisch-model/) voor hoe dat vereistengesprek te structureren, en [kosten per begunstigde](../kosten-per-begunstigde/) voor de snellere, ruwere maatstaf waar teams naar grijpen wanneer uitkomsttracking nog niet is gebouwd.

## Valkuilen

- **Outputs rapporteren verkleed als uitkomsten.** "Bereikte mensen" is niet "geholpen mensen." Als de maatstaf kan worden geproduceerd door een systeemlogboek zonder follow-upcontact, is het bijna zeker een output.
- **Noemermanipulatie.** Het verkleinen van de uitkomstpopulatie naar "degenen die het programma voltooiden" laat stilzwijgend de mensen vallen die uitvielen — vaak de moeilijkste gevallen — en blaast het schijnbare percentage op. Vermeld de noemer als iedereen die begon, niet iedereen die voltooide.
- **Geen contrafeitelijke situatie.** Iedereen tellen die de uitkomst bereikte, inclusief degenen die het toch zouden hebben bereikt, overdrijft wat het programma heeft gekocht. Zie [contrafeitelijke analyse](../contrafeitelijke-analyse/).
- **Vergelijken tussen incompatibele uitkomstdefinities.** "Voedselzeker" gemeten door een gevalideerde enquêtemodule is niet vergelijkbaar met "voedselzeker" zelfgerapporteerd in een tevredenheidsformulier; een kosten-per-uitkomst-ranglijst is alleen eerlijk wanneer de uitkomstdefinities overeenkomen.

## Bronnen

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
