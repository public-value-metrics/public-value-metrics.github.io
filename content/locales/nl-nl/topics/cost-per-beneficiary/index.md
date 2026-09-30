# Kosten per begunstigde

Kosten per begunstigde zijn totale programmakosten gedeeld door het aantal unieke mensen dat een dienst ontving — iedereen die werd aangeraakt, ongeacht of hun omstandigheden daadwerkelijk veranderden. Het is het snelste efficiëntiecijfer dat een organisatie kan produceren, omdat "wie hebben we bediend" bijna altijd al in het casemanagementsysteem staat, terwijl "wie werd geholpen" meestal niet.

## Waarom het ertoe doet

Financiers vragen constant om kosten per begunstigde, en om verdedigbare redenen: het is onmiddellijk beschikbaar, het is vergelijkbaar over een portfolio van zeer verschillende programma's, en het is eerlijk over bereik op een manier die uitkomstbeweringen — die langer duren om te verifiëren en gemakkelijker te overdrijven zijn — niet zijn. De Britse Charities SORP (Statement of Recommended Practice), die bepaalt hoe goede doelen rapporteren onder FRS 102, vereist dat jaarverslagen van bestuurders prestaties tegen doelstellingen beschrijven, maar de beheerrekeningen van de meeste kleinere goede doelen gaan nog steeds standaard naar bereikgebaseerde eenheidskosten omdat ze goedkoop zijn om te produceren en auditvriendelijk.

Het gevaar is kosten per begunstigde behandelen alsof het de vraag beantwoordt die het niet kan beantwoorden: of het geld werkte. Zie [kosten per uitkomst](../cost-per-outcome/) voor de maatstaf die dat daadwerkelijk beantwoordt, en [uitkomsten versus output](../outcomes-vs-outputs/) voor het onderliggende onderscheid. Kosten per begunstigde is een legitieme triage- en bereikmaatstaf — het vertelt een financier hoe ver geld reikt — maar lage kosten per begunstigde kunnen zowel echte efficiëntie betekenen als een dienst zo dun dat hij niets verandert.

## De berekening

```
Kosten per begunstigde = Totale programmakosten / Aantal unieke
                         bediende mensen

Contrast:
Kosten per uitkomst    = Totale programmakosten / Aantal mensen
                         dat de gedefinieerde uitkomst bereikt

Kosten per begunstigde zijn altijd ≤ kosten per uitkomst, omdat
de uitkomstpopulatie een deelverzameling is (vaak een kleine)
van de begunstigdepopulatie.
```

## Uitgewerkt voorbeeld

**Voedselbank, hetzelfde jaar als het kosten-per-uitkomst-voorbeeld**:

- Totale programmakosten: £450.000
- Unieke bediende huishoudens (drie-plus pakketten): 1.800

```
Kosten per begunstigde = £450.000 / 1.800 = £250 per bediend
huishouden
```

Vergelijk de twee maatstaven naast elkaar:

| Maatstaf | Noemer | Resultaat |
|---|---|---|
| Kosten per begunstigde | 1.800 bediende huishoudens | £250 |
| Kosten per uitkomst | 630 huishoudens die voedselzekerheid bereiken | £714 |

Een financier die alleen £250 ziet, zou kunnen concluderen dat dit een zeer efficiënt goed doel is. Een financier die beide cijfers ziet, kan de nuttigere vraag stellen: is de kloof tussen bereik (1.800) en uitkomst (630) een gegevensverzamelingskloof, een ontwerpkloof, of een eerlijke weergave van hoe moeilijk voedselzekerheid is te bereiken met alleen voedselhulp?

**Baantrainingsgoed doel, illustratief**: kosten per begunstigde (ingeschreven) = £2.000; kosten per uitkomst (duurzame werkgelegenheid na 6 maanden) = £11.000, omdat slechts 18% van de ingeschrevenen het programma voltooit en duurzaam werk vindt. De twee cijfers die met een factor vijf uiteenlopen, is gebruikelijk waar dan ook voltooiings- of duurzaamheidspercentages laag zijn — een trainingsgoed doel en een voedselbank zijn structureel identiek hier.

## Verband met softwareontwikkeling

Kosten per begunstigde is de standaardmaatstaf in non-profitsoftware omdat het de maatstaf is die uit een begunstigderecord valt zonder verder werk: maak een zaak aan, log een dienst, tel rijen. Het bouwen van een systeem dat ook kosten per uitkomst ondersteunt, betekent bewust een tweede eersteklas entiteit toevoegen — een uitkomstgebeurtenis, gedateerd en onafhankelijk van dienstlevering gedefinieerd — en de verleiding weerstaan om "zaak gesloten" te laten staan voor "uitkomst bereikt." Bij het bepalen van de scope van een subsidiebeheer- of CRM-platform, vraag welke van de twee maatstaven elk dashboard daadwerkelijk toont, en label het dienovereenkomstig; ze samenvoegen in een enkele "impact"-tegel is een van de meest voorkomende softwareniveau-oorzaken van de valkuilen hieronder. Zie [databanken voor eenheidskosten](../unit-cost-databases/) voor het benchmarken van beide maatstaven zodra ze correct zijn gelabeld.

## Valkuilen

- **Kosten per begunstigde presenteren als impact.** Het meet bereik, geen verandering. Label dashboards en rapporten "kosten per bediende persoon," niet "kosten per geholpen persoon."
- **Dubbel tellen over programma's.** Een persoon die zowel voedselpakketten als schuldadvies ontvangt van hetzelfde goede doel is één begunstigde, niet twee, als de noemer bedoeld is om unieke bereik te beschrijven; beslis en documenteer welke conventie wordt gebruikt.
- **Een lager cijfer behandelen als altijd beter.** Een inloop-lunchclub zal altijd een intensieve casemanagementdienst verslaan op kosten per begunstigde, omdat het minder kost om iemand licht aan te raken. Dat zegt niets over welke meer duurzame verandering per pond produceert.
- **Stilzwijgend noemers verwisselen tussen rapporten.** Een kosten-per-begunstigde-cijfer geciteerd in één jaarverslag tegen "ingeschreven" en in het volgende tegen "voltooid" is niet vergelijkbaar jaar op jaar; vermeld de noemer elke keer.

## Bronnen

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
