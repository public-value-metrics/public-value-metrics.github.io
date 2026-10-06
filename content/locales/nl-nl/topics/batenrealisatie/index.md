# Batenrealisatie

Batenrealisatiebeheer is de discipline van het identificeren, basislijnen, volgen, en *bewijzen* dat de baten beloofd in een businesscase daadwerkelijk materialiseerden na lancering. In Britse publieke investering leeft het binnen het Five-Case-Model van het Green Book van HM Treasury en de toegewijde batenbeheerrichtlijn van de Infrastructure and Projects Authority; zonder het blijft "het systeem bespaarde casebehandelaars dertig minuten per aanvraag" voor altijd een ongeauditeerde bewering.

## Waarom het ertoe doet

Businesscases zijn beloften; batenrealisatie is de audit. Het Green Book vereist dat elke uitgavenzaak vijf toetsen doorstaat — strategisch, economisch, commercieel, financieel, en beheer — en de beheerzaak moet uiteenzetten hoe baten zullen worden gerealiseerd *voor goedkeuring*: eigenaren genoemd, basislijnen vastgelegd, en meetdata vastgezet. De gids van de Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), bestaat omdat de eigen portfoliorapportage van de IPA over het Government Major Projects Portfolio herhaaldelijk leveringsvertrouwen en batenrealisatie geciteerd heeft gevonden als terugkerende zwaktes over grote programma's. Een project kan afsluiten "op tijd en binnen budget" tegen zijn leveringsmijlpalen terwijl het toch faalt de baten te realiseren die het uitgeven van het geld überhaupt rechtvaardigden — een onderscheid dat de richtlijn van de IPA behandelt als het hele punt van de discipline.

## De berekening

```
Realisatiepercentage = gerealiseerde baten / voorspelde baten
                      (per baat, per periode)

Mechanica die het berekenbaar maakt:
  basislijn vastgelegd VOOR lancering (anders is de delta
  onmeetbaar)
  elke baat: genoemde eigenaar, maatstaf, gegevensbron,
  meetschema
  voorspelling aangepast voor optimismebias bij beoordeling
  (Green-Book-mandaat)
  baten geklasseerd contant-vrijmakend / capaciteit-vrijgemaakt
  / kwalitatief, afzonderlijk bijgehouden en gerapporteerd
```

## Uitgewerkt voorbeeld

**Gemeente**: een businesscase voor een digitaal planningsaanvraagportaal beloofde, per jaar: £300.000 aan reductie van print- en postoverhead (contant), 4.500 vrijgemaakte ambtenaarsuren (capaciteit), en verbeterde aanvragerstevredenheid (kwalitatief). Twaalf maanden na lancering:

```
Baat              Voorspeld  Gerealiseerd  Percentage  Bewijs
Contante           £300.000   £210.000      70%        financieel
besparingen                                             grootboek vs
                                                        basisjaar
Ambtenaarsuren     4.500      3.200         71%        tijd-beweging-
                                                        steekproef
Tevredenheid       +8pp       +11pp         138%       aanvrager-
                                                        enquêtegegevens

Acties uit de herziening (het punt van batenrealisatie):
contant tekort getraceerd naar twee dienstgebieden die nog
steeds papieren aanvragen verwerken bij uitzondering → sluit
de uitzonderingsroute; de optimismebias-correctie van de
volgende businesscase verhoogd van 10% naar 25% gebaseerd op
de voorspellingsfout van deze zaak.
```

Een realisatiepercentage van 70% is geen mislukking — het is kennis die de volgende voorspelling beter gecalibreerd laat zijn. Een ongemeten zaak zou voor altijd 100% hebben beweerd, en het financiële team zou geen basis hebben gehad om het te betwisten.

## Verband met softwareontwikkeling

Engineeringorganisaties keuren routinematig platform- en toolinginvesteringen goed op voorspelde baat en auditen ze bijna nooit achteraf — precies de pathologie die batenrealisatiebeheer bestaat om te repareren. De lichtgewicht overdracht: elk voorstel boven een materialiteitsdrempel noemt een bateeigenaar, een basislijnmaatstaf, en een vaste herzieningsdatum (typisch zes maanden na lancering), en realisatiepercentages van vroegere voorstellen zouden moeten disconteren hoeveel de organisatie de volgende voorspelling van een team of leverancier vertrouwt. Dit sluit de kring terug naar [Green-Book-beoordeling](../green-book-beoordeling/), die de voorspelling zet die deze discipline auditeert, en het is dezelfde logica achter de breed gerapporteerde bevinding dat een grote meerderheid van generatieve-AI-pilots geen meetbaar rendement toont — zie [AI-productiviteit-in-de-publieke-sector](../ai-productiviteit-in-de-publieke-sector/) — omdat de pilots die *wel* waarde teruggaven, bijna zonder uitzondering, degene waren met een genoemde, traceerbare batenregel vanaf het begin. Het hangt ook af van het onderscheiden van wat daadwerkelijk werd geleverd van wat daadwerkelijk werd gerealiseerd — zie [uitkomsten versus output](../uitkomsten-versus-output/).

## Valkuilen

- **Geen basislijn voor lancering**: de fatale, niet-herstelbare weglating — zonder het kan nooit een realisatiepercentage worden berekend, alleen beweerd.
- **Baat-weesschap**: een baat zonder genoemde eigenaar heeft niemand die de gegevens verzamelt, en elke portfolioherziening rapporteert het standaard als "grotendeels op koers".
- **Dubbel getelde baten over een programmaportfolio**: twee projecten die beide dezelfde vrijgemaakte casebehandelaarscapaciteit claimen als hun baat — houd een enkel batenregister bij over het portfolio om dit op te vangen.
- **Realisatietheater**: het meten en prominent rapporteren van de gemakkelijke kwalitatieve winsten terwijl de contante en capaciteitsregels stilzwijgend ongeonderzocht blijven.
- **Levering verwarren met realisatie**: een project dat zijn mijlpalen sluit "op tijd en binnen budget" zegt niets over of de voorspelde baat ooit daadwerkelijk optrad — de richtlijn van de IPA behandelt dit als twee afzonderlijke vragen met twee afzonderlijke bewijssporen.

## Bronnen

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
