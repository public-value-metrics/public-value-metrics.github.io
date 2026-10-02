# Vertrouwens- en legitimiteitsmaatstaven

Legitimiteit en steun is één van de drie poten van de "strategische driehoek" van Mark Moore in *Creating Public Value* (1995) — naast public value zelf en operationele capaciteit — en het is de poot die het vaakst ongemeten blijft, omdat, in tegenstelling tot een budget of een outputtelling, legitimiteit geen voor de hand liggend enkel getal erbij heeft. Vertrouwens- en legitimiteitsmaatstaven zijn de familie van proxymaatstaven die overheden gebruiken om die kloof te vullen: institutionele vertrouwensenquêtes, vertrouwensbeoordelingen van toezichthoudende instanties, klachten- en beroepsgegevens, en politieke/wetgevende steunindicatoren.

## Waarom het ertoe doet

Het argument van Moore is dat een publieke manager die echte waarde levert maar politieke en publieke legitimiteit verliest, uiteindelijk de machtigingsomgeving zal verliezen die nodig is om deze te blijven leveren — financiering wordt gekort, mandaten worden vernauwd, en de dienst wordt uitgehongerd ongeacht hoe goed zijn uitkomsten zijn. Legitimiteit is daarom geen public-relations-bijzaak vastgeschroefd aan een leveringsscorecard; het is een dragende invoer voor of de missie überhaupt kan doorgaan, wat de reden is dat het als een gelijkwaardig perspectief zit in een [public value scorecard](../public-value-scorecard/) in plaats van een voetnoot. Het "Trust in Government"-enquêteprogramma van de OESO is de leidende cross-nationale poging om dit te kwantificeren: het volgt het aandeel burgers over OESO-lidstaten die zeggen vertrouwen te hebben in hun nationale overheid, en de langetermijngegevens tonen dat vertrouwen sterk gevoelig is voor schokken — zowel de financiële crisis van 2008 als de COVID-19-pandemie produceerden scherpe nationale-niveau-schommelingen, vaak gevolgd door slechts partieel herstel, waarbij de analyse van de OESO consequent vindt dat waargenomen *competentie* (levert de overheid wat het zegt te zullen leveren) en waargenomen *fairness/integriteit* (wordt de overheid gezien als handelend zonder corruptie of favoritisme) de twee sterkste aandrijvers zijn van het vertrouwenscijfer, onderscheiden van tevredenheid met enige enkele transactie. Overheden proberen legitimiteit ook steeds meer te operationaliseren op een meer granulair niveau — de onafhankelijke regelgevers en inspectoraten van het VK (het National Audit Office, de Parliamentary and Health Service Ombudsman, sectorregelgevers zoals Ofsted en de Care Quality Commission) functioneren als geïnstitutionaliseerde legitimiteitscontroles, die "vertrouwt het publiek deze dienst nog" omzetten in controleerbare beoordelingen.

## De berekening

Vertrouwen en legitimiteit is een raamwerkgevormd onderwerp waarvan de bruikbare kwantitatieve proxy's zijn:

```
Institutionele vertrouwensindex (OESO-stijl)
  = % enquêterespondenten die "ja" antwoorden op een
    vertrouwen-in-de-overheid-vraag, bijgehouden in de tijd,
    uitgesplitst naar demografische groep

Legitimiteitsproxyset (geen enkel getal vervangt het construct):
  - Gehonoreerde klachten per 1.000 dienstgebruikers
    (ombudsman- of interne klachtengegevens)
  - Slagingspercentage van rechterlijke toetsing/beroep tegen
    de besluiten van het lichaam
  - Onafhankelijke regelgever-/inspectoraatbeoordeling (bijv.
    "uitstekend" tot "onvoldoende" banden)
  - Vertrouwensstemmingen van wetgevende/toezichtscommissie of
    frequentie van kritische rapporten
  - Volume van verzoeken om informatievrijheid en
    openbaarmakings-/weigeringspercentage, als een proxy voor
    waargenomen transparantie

Legitimiteit wordt bevestigd, niet berekend: een verdedigbare
legitimiteitsbeoordeling triangule ert verschillende van het
bovenstaande in plaats van te vertrouwen op één enkele proxy.
```

## Uitgewerkt voorbeeld

**Nationale belastingdienst**: legitimiteitstriangulatie voor een jaarlijks public-value-rapport.

```
OESO-achtige vertrouwensproxy (departement-specifieke
vertrouwensenquête):
  58% van de respondenten zegt de dienst te vertrouwen om
  "mij eerlijk te behandelen" (omlaag van 64% twee jaar
  eerder)

Klachtengegevens:
  Gehonoreerde klachten: 4,2 per 1.000 belastingplichtige-
  interacties (omhoog van 3,1 per 1.000)

Ombudsmanverwijzingen:
  Verwijzingen naar het onafhankelijke Adjudicator's Office:
  1.850 in het jaar, waarvan 61% volledig of gedeeltelijk
  gehonoreerd tegen de dienst (omhoog van 48% het voorgaande
  jaar)

Alle drie samen gelezen: vertrouwen daalt, gehonoreerde
klachten stijgen, en onafhankelijke ombudsmanbevindingen
kiezen steeds meer tegen de dienst — drie onafhankelijke
signalen die convergeren op dezelfde richting, wat dit een
geloofwaardige legitimiteitsbevinding maakt in plaats van
ruis in één enkele reeks.
```

Eén enkel van deze cijfers dat beweegt, zou zwak bewijs zijn; drie onafhankelijke maatstaven die samen bewegen over dezelfde periode is het patroon dat een legitimiteitsbewering verdedigbaar maakt.

## Verband met softwareontwikkeling

Legitimiteitsmaatstaven worden zelden geproduceerd door het dashboard van een enkel team, wat zelf de ontwerples is: bouw rapportagepijplijnen die gegevens kunnen opnemen en verzoenen uit onafhankelijke externe bronnen (ombudsman-zaaksystemen, regelgever-beoordelingsfeeds, enquêteleveranciers) in plaats van legitimiteitsrapportage te architecturen als een alleen-interne maatstaf, omdat intern afkomstige legitimiteitsbeweringen ("we beoordelen onszelf als betrouwbaar") weinig bewijskracht hebben — hetzelfde onafhankelijkheidsprobleem opgemerkt voor het legitimiteitsperspectief in een [public value scorecard](../public-value-scorecard/). Klachten- en beroepsgegevenspijplijnen verdienen dezelfde gegevenskwaliteitsrigueur als elke uitkomstpijplijn die [betaling naar resultaat](../payment-by-results-and-social-impact-bonds/)-contracten voedt, omdat een ondergerapporteerde of slecht gecategoriseerde klachtendataset stilzwijgend een legitimiteitsprobleem onderschat voordat het een jaar later zichtbaar wordt in een vertrouwensenquête. Zie [burgertevredenheidsmaatstaven](../citizen-satisfaction-metrics/) voor de transactieniveau-tegenhanger van deze institutie-niveau-maatstaf, en [public value](../public-value/) voor het volledige strategische-driehoekraamwerk van Moore waartoe deze poot behoort.

## Valkuilen

- **Tevredenheid behandelen als een proxy voor legitimiteit**: een burger kan tevreden zijn met de interface van een enkele transactie terwijl hij de instelling in het algemeen wantrouwt (of vice versa) — zie [burgertevredenheidsmaatstaven](../citizen-satisfaction-metrics/) voor waarom de twee afzonderlijk moeten worden gerapporteerd.
- **Vertrouwen op een enkele zelfgerapporteerde maatstaf**: een intern uitgevoerde vertrouwensenquête zonder onafhankelijke bevestiging (ombudsmangegevens, regelgeverbeoordelingen) is gemakkelijk af te wijzen als zelfbeoordeling; trianguleer.
- **Demografische uitsplitsing negeren**: geaggregeerde nationale vertrouwenscijfers kunnen scherp uiteenlopende legitimiteit tussen specifieke groepen (naar leeftijd, etniciteit, inkomen, of regio) verhullen — de eigen Trust in Government-uitgaven van de OESO splitsen precies hierom uit.
- **Een enkele schok-gedreven dip lezen als een permanente trend**: vertrouwenscijfers bewegen scherp rond crises (financiële crashes, pandemieën, high-profile schandalen) en herstellen deels; een enkel post-schok-gegevenspunt zou niet moeten worden geëxtrapoleerd naar een langetermijndaling zonder meer gegevens.

## Bronnen

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, jaarlijkse zaaksstatistieken.
  <https://www.ombudsman.org.uk/>
