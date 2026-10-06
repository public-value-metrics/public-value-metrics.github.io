# Burgertevredenheidsmaatstaven

Burgertevredenheidsmaatstaven meten hoe mensen hun directe ervaring van een publieke dienst beoordelen — onderscheiden van vertrouwen in instellingen in het algemeen, en onderscheiden van of de dienst daadwerkelijk een goede uitkomst bereikte. Een dienst kan geliefd en ineffectief zijn, of effectief en ongeliefd; de kloof tussen de twee is zelf diagnostische informatie die een leveringsteam zou moeten volgen.

## Waarom het ertoe doet

Tevredenheid wordt gemeten op twee verschillende hoogten die routinematig worden samengevoegd. Op dienstniveau vereisen het nu met pensioen gegane Performance Platform van het VK en de huidige GOV.UK-dienstenhandleiding een tevredenheidsenquête per dienst (typisch een vijfpuntsschaal "heel tevreden" tot "heel ontevreden", afgenomen op het moment van transactie) als een van vier verplichte dienst-KPI's — zie [dienstnormen en transactiemaatstaven](../dienstnormen-en-transactiemaatstaven/). Op institutioneel niveau meet de UK Civil Service People Survey werknemersbetrokkenheid en -ervaring over elk centraal overheidsdepartement jaarlijks, en afzonderlijk enquêteert het "Trust in Government"-programma van de OESO publiek vertrouwen in de nationale overheid over lidstaten, en volgt een langetermijndaling- en herstelpatroon zwaar gevormd door crises (zowel de financiële crisis van 2008 als de COVID-19-pandemie produceerden scherpe, zichtbare bewegingen in OESO-vertrouwenscijfers). De reden dat ingenieurs die burgergerichte diensten bouwen tevredenheid en uitkomst gescheiden moeten houden, is een bekend faalpatroon in dienstontwerp: een prachtig ontworpen, gemakkelijk te gebruiken digitaal formulier voor een uitkeringsaanvraag kan zeer hoge tevredenheid scoren terwijl het onderliggende beleid — subsidiabiliteitsregels, verwerkingsachterstanden, toekenningsbedragen — de aanvrager er niet beter van laat worden. Tevredenheid meet de interface; het meet niet de waarde die erachter wordt geleverd.

## De berekening

```
Netto tevredenheid = % tevreden (of zeer tevreden) − %
                     ontevreden (of zeer ontevreden)
                     (neutraal/geen-mening-reacties uitgesloten
                     van beide termen, maar geteld in de
                     responsbasis voor het berekenen van elk
                     percentage)

Tevredenheid-tot-uitkomst-kloof = tevredenheidsscore −
                     uitkomstbehaalscore (beide
                     genormaliseerd 0-100; een grote positieve
                     kloof signaleert een dienst die "goed
                     voelt" maar onderpresteert op inhoud)

Vertrouwensindex (OESO-stijl) = % enquêterespondenten die "ja"
                     antwoorden op "heb je vertrouwen in
                     [nationale overheid]?" bijgehouden als een
                     tijdreeks, typisch uitgesplitst naar
                     leeftijd, inkomen, en opleiding
```

## Uitgewerkt voorbeeld

**Gemeentelijke gemeentebelasting-e-facturatiedienst**: een tevredenheidsenquête op het moment van succesvolle transactie toont 2.400 respondenten: 1.650 tevreden/heel tevreden, 250 ontevreden/heel ontevreden, 500 neutraal.

```
Netto tevredenheid = (1.650/2.400 × 100) − (250/2.400 × 100)
                    = 68,75% − 10,42%
                    = +58,3 netto tevredenheid
```

Dit ziet er geïsoleerd sterk uit. Maar de enquête wordt alleen getoond aan gebruikers die de transactie *succesvol* voltooien — een bekende meetbias (zie valkuilen hieronder). Het koppelen ervan aan de voltooiingspercentagemaatstaf uit [dienstnormen en transactiemaatstaven](../dienstnormen-en-transactiemaatstaven/) toont dat voltooiing slechts 71% is, wat betekent:

```
Ware populatietevredenheid is ongemeten voor de 29% die de
reis afbrak — plausibel het meest ontevreden cohort, omdat
afbreken zelf een sterk negatief signaal is dat de enquête
nooit vastlegt.
```

**Illustratie op nationaal niveau (structuur van een OESO-achtige vertrouwensreeks)**: nationaal overheidsvertrouwen gerapporteerd op 42% in jaar 1, dalend naar 34% in jaar 2 (een crisisjaar) en herstellend naar 39% in jaar 3 — een trajectorie typisch voor het schok-en-deelherstel-patroon dat de OESO documenteert over lidstaten na grote crises.

## Verband met softwareontwikkeling

Instrumenteer tevredenheidsenquêtes op elk betekenisvol uitstappunt van een gebruikersreis, niet alleen bij succesvolle voltooiing — de enkele meest voorkomende engineeringfout op dit gebied, en een die stilzwijgend een tevredenheidsmaatstaf omzet in een survivorship-bias vanity-maatstaf. Waar mogelijk, koppel de tevredenheidsscore aan een voltooiings- of uitkomstmaatstaf op hetzelfde dashboard zodat een team niet stijgende tevredenheid kan vieren terwijl voltooiing stilzwijgend daalt (zie [kosten per transactie](../kosten-per-transactie/) en [digitale inclusie](../digitale-inclusie/) voor wie überhaupt wordt uitgesloten van digitale tevredenheidssteekproeven — niet-digitale en geassisteerd-digitale gebruikers zijn systematisch ondervertegenwoordigd in dienstinterne enquêtes). Tevredenheids- en vertrouwensgegevens voeren ook direct in het legitimiteitspoot van [de strategische driehoek van Moore](../publieke-waarde/), en behoren tot de "klant"- en "legitimiteits"-perspectieven van een [public value scorecard](../scorekaart-publieke-waarde/) — zie [vertrouwens- en legitimiteitsmaatstaven](../vertrouwens-en-legitimiteitsmaatstaven/) voor de institutionele-niveau-tegenhanger van deze dienstniveau-maatstaf.

## Valkuilen

- **Survivorship bias in enquêtes op moment van voltooiing**: gebruikers die een reis afbreken zien de enquête nooit, dus kan een hoge diensteninterne tevredenheidsscore samengaan met een laag voltooiingspercentage en een grote onzichtbare populatie ontevreden niet-voltooiers.
- **Tevredenheid behandelen als een proxy voor uitkomst**: een goed ontworpen interface voor een slecht ontworpen beleid scoort goed op tevredenheid en slecht op uitkomst — rapporteer altijd beide, nooit één als vervanging voor de andere.
- **Kleine, niet-representatieve steekproeven gerapporteerd met valse precisie**: een tevredenheidsscore van een paar honderd zelfgeselecteerde respondenten gerapporteerd tot op één decimaal impliceert een vertrouwen dat de steekproefgrootte niet kan ondersteunen.
- **Demografische uitsplitsing negeren**: nationale vertrouwens- en tevredenheidscijfers die niet worden uitgesplitst naar leeftijd, inkomen, beperking, of digitale toegang kunnen scherp uiteenlopende ervaringen tussen groepen verhullen — een patroon waarvoor de eigen Trust in Government-uitgaven van de OESO expliciet uitsplitsen.

## Bronnen

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" resultaten.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
