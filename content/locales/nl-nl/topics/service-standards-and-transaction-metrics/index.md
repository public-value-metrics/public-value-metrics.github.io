# Dienstnormen en transactiemaatstaven

De GOV.UK Service Standard is de checklist van 14 punten van de Britse overheid voor het bouwen en draaien van een publieke digitale dienst, en het komt gekoppeld met een kleine, verplichte set kwantitatieve transactiemaatstaven — kosten per transactie, voltooiingspercentage, digitale opname, en gebruikerstevredenheid — die teams moeten publiceren voor elke live centrale-overheidsdienst. Samen zijn de norm en de maatstaven de operationele, dagelijkse specialisatie van de breder public value- en KPI-raamwerken in deze repository, direct gericht op softwareleveringsteams.

## Waarom het ertoe doet

De Service Standard, onderhouden in de GOV.UK-dienstenhandleiding, vereist dat elke momentopname-beoordeling (alpha, beta, live) van een digitale overheidsdienst aantoont — onder zijn 14 punten — dat het team gebruikersbehoeften begrijpt, werkt in een multidisciplinair team, frequent itereert en verbetert, en *hulpmiddelen, systemen, en werkwijzen evalueert*. Historisch stond dit naast een publiek Performance Platform waar elke live dienst zijn transactiegegevens openlijk publiceerde; dat platform is inmiddels met pensioen gegaan, maar de onderliggende verplichting om deze vier kernmaatstaven te meten en te publiceren blijft bestaan via de "measuring success"-richtlijn van de dienstenhandleiding. De reden dat dit verschilt van een generiek software-KPI-dashboard, is dat deze maatstaven expliciet werden ontworpen als één gekoppeld economisch model, geen vier onafhankelijke scores: de hele besparingszaak voor digitale overheid — het Digital Efficiency Report van de Government Digital Service vond digitale transacties ruwweg 20 keer goedkoper dan per telefoon en ongeveer 50 keer goedkoper dan persoonlijk voor vergelijkbare lokale-overheidsdiensten — materialiseert zich alleen als voltooiingspercentage hoog blijft en digitale opname werkelijk stijgt, in plaats van slechts een goedkoop kanaal toe te voegen naast een ongewijzigd duur kanaal.

## De berekening

```
Kosten per transactie = totale bedrijfskosten dienst / aantal
                        voltooide transacties
Voltooiingspercentage  = voltooide transacties / gestarte
                        transacties × 100
Digitale opname         = digitale-kanaal-transacties /
                        alle-kanalen-transacties × 100
Gebruikerstevredenheid  = % tevreden + heel tevreden,
                        diensteninterne 5-puntsenquête

Kanaalverschuivingsbesparing = transactievolume ×
                        opnameverschuiving × (kosten per
                        transactie op het oude kanaal − kosten
                        per transactie digitaal)

Kosten van faalvraag = (1 − voltooiingspercentage) × digitaal
                        geprobeerde transacties × kosten van
                        het terugvalkanaal dat die gebruikers
                        vervolgens in plaats daarvan gebruiken
```

## Uitgewerkt voorbeeld

**Illustratieve centrale-overheidslicentieverlengingsdienst**, 2 miljoen transacties/jaar, momenteel 65% telefoon (£3,00/transactie) en 35% digitaal (£0,30/transactie), voltooiingspercentage 80%. Een herontwerp tegen de 14-puntsservicenorm tilt digitale opname naar 60% en voltooiing naar 92%:

```
Opnameverschuivingsbesparing = 2.000.000 × 0,25 × (3,00 −
                              0,30) = £1.350.000/jaar

Kosten faalvraag, voor:
  2.000.000 × 0,35 × (1 − 0,80) × £3,00 = £420.000/jaar
  (afbrekers vallen terug op telefoon)

Kosten faalvraag, na:
  2.000.000 × 0,60 × (1 − 0,92) × £3,00 = £288.000/jaar

Netto besparing faalvraag = £420.000 − £288.000 = £132.000/jaar

Totale jaarlijkse besparing ≈ £1.350.000 + £132.000 =
£1.482.000/jaar
```

De rekenkunde maakt expliciet waarom voltooiingspercentage geen secundaire maatstaf is: zonder de verbetering van 80% naar 92% zou de opnameverschuivingsbesparing deels worden teruggenomen doordat faalvraag gefrustreerde digitale gebruikers rechtstreeks teruggidst naar het dure telefoonkanaal.

## Verband met softwareontwikkeling

Deze vier maatstaven zijn een werkend voorbeeld van een kosten-consequentie-dashboard: één kostenmaatstaf gescheiden gehouden van drie uitkomst-/kwaliteitsmaatstaven, bewust nooit samengepers tot een enkele score — dezelfde discipline bepleit in [kerncijfers publieke sector](../public-sector-kpis/). Voor ingenieurs valt dit uiteen in concreet, eigenbaar werk: voltooiingspercentage is een funnel-instrumentatieprobleem, en elk afbreekpunt in de reis is, in principe, te lokaliseren en te repareren; kosten per transactie vereist echte eenheidskostenboekhouding inclusief personeelsgeassisteerde en papieren-kanaalkosten, niet alleen cloud-hostingsuitgaven (zie [kosten per transactie](../cost-per-transaction/) en [totale eigendomskosten in overheids-IT](../total-cost-of-ownership-in-government-it/)); en digitale opname is een gelijkheidsmaatstaf verkleed als efficiëntie — de burgers die niet kunnen of willen wisselen van kanaal zijn disproportioneel ouder, gehandicapt, of digitaal uitgesloten, dus agressieve kanaalsluiting zet een "besparing" om in een toegangsschade (zie [digitale inclusie](../digital-inclusion/) en [kanaalverschuivingsbesparingen](../channel-shift-savings/)). De 14-puntsnorm zelf is de processpecificatie achter deze cijfers — zie [digitale dienstennorm](../digital-service-standard/) voor de norm in volledigheid, en [burgertevredenheidsmaatstaven](../citizen-satisfaction-metrics/) voor hoe de tevredenheidsfiguur hier zich verhoudt tot breder vertrouwensmeting.

## Valkuilen

- **Opname behaald door het alternatieve kanaal te sluiten**: het sluiten van een telefoonlijn tilt het digitale-opnamepercentage rekenkundig op terwijl faalvraag wordt gedumpt op welk kanaal ook overblijft (vaak een duurdere geassisteerd-digitale of persoonlijke route); meet altijd totale-systeemkosten, niet alleen de verhouding.
- **Voltooiingspercentage meten vanaf stap twee van de funnel**: het starten van de "gestarte"-telling na het eerste echte afbreekpunt vleit het voltooiingspercentage en verhult het grootste repareerbare verlies.
- **Kosten per transactie die geassisteerd-digitale ondersteuning uitsluiten**: een alleen-digitale eenheidskost die de personeelstijd besteed aan het helpen van gebruikers die niet zelf kunnen bedienen negeert, onderschat de werkelijke kosten van het kanaal.
- **Maatstaven publiceren zonder gedeelde definitie tussen diensten**: "transactie" en "voltooid" betekenen verschillende dingen tussen verschillende dienstteams, tenzij de definities worden gestandaardiseerd en versioneerd, waardoor diensten-overschrijdende vergelijking onbetrouwbaar wordt.

## Bronnen

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
