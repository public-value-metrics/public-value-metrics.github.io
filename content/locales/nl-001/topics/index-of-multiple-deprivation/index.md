# Index of Multiple Deprivation (IMD)

De IMD is de officiële maatstaf van relatieve deprivatie voor kleine gebieden in Engeland, die elk van de 32.844 Lower-layer Super Output Areas (LSOA's, elk ruwweg 1.500 inwoners) van het land rangschikt van 1 (meest deprivatie) tot 32.844 (minst deprivatie). Het wordt gepubliceerd door wat nu het Ministry of Housing, Communities and Local Government (MHCLG, voorheen MHCLG/DCLG) is, meest recent als de English Indices of Deprivation 2019, en het routeert direct centrale-overheidsfinanciering, publieke-gezondheidsprioritering, en subsidiabiliteit voor tientallen lokale regelingen.

## Waarom het ertoe doet

Deprivatie is niet één ding — een buurt kan inkomensarm zijn maar veilig, of inkomensadequaat maar lijden onder slechte gezondheidsuitkomsten en slechte huisvesting. De voorgangerindices van de IMD (teruggaand tot de deprivatie-indicatoren van het Department of the Environment uit de jaren 1970) evolueerden naar het huidige zeven-domein-model precies omdat enkele-indicator-doelgerichtheid (werkloosheidspercentage alleen, bijvoorbeeld) routinematig gebieden miste die op andere manieren deprivatie ervaarden. De IMD 2019 combineert inkomen, werkgelegenheid, onderwijs, gezondheid, criminaliteit, barrières voor huisvesting en diensten, en leefomgeving tot één samengestelde rangschikking per LSOA, elk domein opgebouwd uit zijn eigen mand van indicatoren en gewogen door de methodologie van MHCLG. Omdat het op kleinschalig (LSOA) niveau opereert in plaats van gemeenteniveau, legt het zakken van deprivatie bloot verscholen binnen anderszins welvarende districten — de reden dat de IMD, niet gemiddeld gemeenteinkomen, is waarop NHS England, de leerlingpremie van het Department for Education, en tientallen gemeentelijke financieringsformules daadwerkelijk aansluiten. Software die subsidiabiliteit bepaalt, outreach prioriteert, of impact per gebied rapporteert in Engeland zou IMD-deciel of -rang moeten behandelen als een eersteklas invoer, geen bijzaak — en waar een programma bewust de meest deprivatie-gebieden richt, zou zijn beoordeling [verdelingsgewicht](../distributieve-weging/) moeten toepassen consistent met die doelgerichtheid, in plaats van een pond voordeel hetzelfde te waarderen ongeacht waar het terechtkomt.

## De berekening

```
7 domeinen, gewogen:
  Inkomen                                22,5%
  Werkgelegenheid                        22,5%
  Onderwijs, Vaardigheden, en Training   13,5%
  Gezondheidsdeprivatie en Beperking     13,5%
  Criminaliteit                           9,3%
  Barrières voor Huisvesting en
  Diensten                                9,3%
  Leefomgeving                            9,3%

Elke domeinscore: indicatoren gestandaardiseerd (gerangschikt,
dan getransformeerd naar een normale verdeling) en
gecombineerd door exponentiële transformatie zodat hoge
deprivatie op één indicator niet volledig kan worden
gecompenseerd door lage deprivatie op andere binnen dat domein.

IMD-samengestelde score (LSOA) = Σ (domeinscore ×
                                  domeingewicht)
Rangschik LSOA's naar samengestelde score → 1 (meest
deprivatie) tot 32.844 (minst deprivatie)
Decielen: rang ÷ 3.284 (ongeveer), deciel 1 = meest
deprivatie 10% van LSOA's
```

## Uitgewerkt voorbeeld

**LSOA-samengestelde score**, met behulp van illustratieve gestandaardiseerde domeinscores (0 = geen deprivatiesignaal, hoger = meer deprivatie):

```
Inkomen                 0,35 × 0,225 = 0,07875
Werkgelegenheid         0,30 × 0,225 = 0,06750
Onderwijs               0,20 × 0,135 = 0,02700
Gezondheid              0,15 × 0,135 = 0,02025
Criminaliteit           0,10 × 0,093 = 0,00930
Barrières Huisvesting   0,05 × 0,093 = 0,00465
Leefomgeving            0,08 × 0,093 = 0,00744

Samengestelde score = 0,07875 + 0,06750 + 0,02700 + 0,02025
                     + 0,00930 + 0,00465 + 0,00744 = 0,21489
```

Die samengestelde score wordt vervolgens gerangschikt tegen alle scores van 32.844 LSOA's. Als het de LSOA plaatst op rang 2.950, valt het in deciel 1 (2.950 ÷ 3.284 ≈ 0,9, d.w.z. binnen de meest deprivatie 10% van buurten in Engeland) — wat voor veel financieringsformules de drempel is die subsidiabiliteit ontgrendelt, ongeacht hoe de omliggende gemeente gemiddeld scoort.

## Verband met softwareontwikkeling

- Elke dienst die gebruikers geocodeert naar postcode of LSOA kan de gepubliceerde IMD-opzoektabel (een gratis, versioneerde CSV van MHCLG) koppelen om deprivatiedeciel toe te voegen als een covariaat — voor het richten van outreach, prioriteren van caseload, of rapporteren van uitkomsten per deprivatieband zonder nieuwe persoonsgegevens te verzamelen.
- IMD-deciel is een standaard gelijkheidscontrole voor publieke digitale diensten: het kruistabelleren van dienstopname, afbraak, of tevredenheid per IMD-deciel legt toegangskloven bloot die een geaggregeerde maatstaf verhult — zie [digitale inclusie](../digitale-inclusie/) en [burgertevredenheidsmaatstaven](../burgertevredenheidsmaatstaven/).
- Omdat IMD-rang relatief is (het sommeert altijd tot een vaste set rangen over Engeland), kan het niet tonen of deprivatie nationaal stijgt of daalt in de tijd — alleen welke gebieden relatief tot elkaar rangschikken in die editie; bouw geen absolute-trenddashboards op ruwe IMD-rang alleen.

## Valkuilen

- **IMD-rangen tussen edities (2015 versus 2019) vergelijken als een tijdtrend** — de onderliggende indicatoren, geografieën, en methodologie veranderen allemaal tussen edities; MHCLG adviseert expliciet tegen het gebruiken van rangveranderingen als bewijs dat een gebied meer of minder deprivatie werd.
- **LSOA-niveau IMD toepassen op individuen** — een LSOA in deciel 1 bevat nog steeds niet-deprivatie-huishoudens, en een deciel-10-LSOA bevat nog steeds deprivatie-huishoudens; IMD beschrijft gebieden, niet mensen, en het gebruiken als een individuele subsidiabiliteitsproxy misclassificeert beide richtingen.
- **Domeinniveaudetail negeren ten gunste van de samengestelde rang** — twee LSOA's met identieke samengestelde scores kunnen volledig verschillende domeinprofielen hebben (één gezondheidsdeprivatie, één criminaliteitsdeprivatie); een doelgerichtheidsregeling gericht op één probleem zou de relevante domeinscore moeten gebruiken, niet de vermengde samengestelde score.

## Bronnen

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
