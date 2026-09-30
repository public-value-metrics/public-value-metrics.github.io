# Maatschappelijke discontovoet

De maatschappelijke discontovoet zet toekomstige kosten en baten om in huidige waarden, zodat programma's met opbrengsten verspreid over decennia op een gemeenschappelijke basis kunnen worden vergeleken. Het Green Book van HM Treasury schrijft een dalend schema voor, verankerd op 3,5% voor de eerste 30 jaar, gebaseerd op de Ramsey-formule — een specifiek, citeerbaar getal dat een levend politiek en ethisch discussiepunt is geworden telkens wanneer het wordt toegepast op langetermijnverplichtingen zoals klimaatbeleid of infrastructuur.

## Waarom het ertoe doet

Een pond aan voordeel ontvangen over 30 jaar is niet dezelfde waarde als een pond aan voordeel vandaag ontvangen, om redenen die deels draaien om pure tijdspreferentie (mensen en samenlevingen verkiezen goede zaken eerder) en deels om groei (een toekomstige samenleving wordt verwacht rijker te zijn, zodat een pond er marginaal minder toe doet). Bijlage 6 van het Green Book leidt de Britse standaarddiscontovoet af uit de Ramsey-formule, door een pure tijdspreferentievoet te combineren met de verwachte groeivoet van consumptie en de elasticiteit van het marginale nut van consumptie, wat resulteert in de gepubliceerde voet van 3,5% per jaar voor jaar 0–30, dalend volgens een gepubliceerd schema voor jaar 31 en verder (tot 1% voor jaar 301+). Dit schema bestaat precies omdat een constante 3,5% samengesteld over een eeuw praktisch elk langetermijnvoordeel — een overstromingsverdediging die over 80 jaar levens redt, een koolstofreductie die over 100 jaar schade voorkomt — te verwaarlozen zou maken in termen van huidige waarde, wat de Treasury als een onaannemelijke ethische conclusie beoordeelde voor werkelijk langlevende infrastructuur- en milieubeslissingen.

De discontovoet is omstreden precies omdat de keuze geen neutrale technische parameter is: hij codeert een oordeel over hoeveel een samenleving vandaag zou moeten opofferen voor mensen die nog niet geboren zijn. De Stern Review over de economie van klimaatverandering (2006) gebruikte een discontovoet nabij nul (een pure tijdspreferentie nabij 0,1%), en stelde dat het verdisconteren van het welzijn van toekomstige generaties tegen iets in de buurt van marktvoeten ethisch onverdedigbaar is wanneer de schade (catastrofale klimaatverandering) irreversibel is. Critici — met name William Nordhaus — voerden aan dat Sterns nabij-nul-voet de zaak voor onmiddellijke klimaatuitgaven overschatte door bijna elke huidige kost gerechtvaardigd te laten lijken tegenover een nauwelijks verdisconteerd toekomstig voordeel. Het meningsverschil ging niet over de wiskunde; het ging over wiens ethisch raamwerk de voet zou bepalen, en het blijft de standaardillustratie van waarom de discontovoet een beleidskeuze is, geen louter actuariële input.

## De berekening

De Ramsey-formule die aan de basis van de Green Book-voet ligt:

```
r = ρ + η·g

waarbij:
  r = maatschappelijke discontovoet
  ρ = pure tijdspreferentievoet （ongeduld ＋ catastroferisico）
  η = elasticiteit van het marginale nut van consumptie
  g = verwachte jaarlijkse groeivoet van consumptie per
      hoofd
```

Het dalende schema van het Green Book (bijlage 6, illustratief — controleer de huidige editie voor de exacte gepubliceerde tabel):

```
Jaar 0–30:    3,5%
Jaar 31–75:   3,0%
Jaar 76–125:  2,5%
Jaar 126–200: 2,0%
Jaar 201–300: 1,5%
Jaar 301+:    1,0%
```

Huidige waarde van een toekomstig bedrag:

```
HW = TW / (1 + r)^t
```

## Uitgewerkt voorbeeld

**Overstromingsverdedigingsproject**: een project levert £10 miljoen aan voorkomen overstromingsschade in jaar 40.

Met een vaste voet van 3,5%: HW = 10.000.000 / (1,035)^40 ≈ £2,52 miljoen — het voordeel ziet klein uit.

Met het dalende schema van het Green Book (3,5% voor jaar 0–30, 3,0% daarna), wordt de berekening samengesteld met 3,5% voor de eerste 30 jaar en 3,0% voor jaar 31–40:

```
HW = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ £2,65 miljoen
```

Het dalende schema verhoogt de huidige waarde van langetermijnvoordelen matig ten opzichte van een vaste hoge voet — het expliciete doel van het schema, omdat een vaste 3,5% over een eeuw een voordeel van £100 miljoen in jaar 100 zou verdisconteren tot onder £3,3 miljoen.

**Digitale infrastructuur**: een overheidsmigratie naar de cloud die nu £4 miljoen kost, zal naar verwachting £500.000/jaar aan oude onderhoudskosten voorkomen over 15 jaar. Bij 3,5% is de huidige waarde van die annuïteit ongeveer £500.000 × 11,52 (de 15-jarige annuïteitsfactor bij 3,5%) ≈ £5,76 miljoen — comfortabel boven de kosten van £4 miljoen, een positieve netto-contantewaardezaak die er aanzienlijk zwakker zou uitzien bij een naïef gekozen hogere voet (bij 7% daalt dezelfde annuïteitsfactor tot ongeveer 9,11, wat £4,56 miljoen oplevert, nog steeds positief maar met een veel dunnere marge).

## Verband met softwareontwikkeling

De meeste business cases voor software lopen over 3–5 jaar, ruim binnen de vaste 3,5%-band, dus het dalende schema speelt zelden direct een rol — maar de onderliggende discipline doet er toe voor elke overheidstechnologie-investering met een lange levensduur (een nationaal platform, een dataInfrastructuurprogramma, een meerdecennia-contract):

- Gebruik de gepubliceerde voet van het Green Book in plaats van een interne "hurdle rate" geleend uit private financiering; auditors en beoordelaars van de Treasury zullen het standaardschema verwachten.
- Voor voordelen die vele jaren verder worden gerealiseerd (de langetermijnonderhoudsbesparingen van een platform, de samengestelde waarde van een ecosysteem van open data — zie [waarde van open data](../open-data-value/)), kan de disconteringskeuze een business case van positief naar negatief doen omslaan; maak de voet en de horizon expliciete aannames, geen verborgen standaardwaarden.
- Dit sluit rechtstreeks aan op [Green Book-beoordeling](../green-book-appraisal/), het vijfzaakmodel dat formeel een verdisconteerde kasstroom vereist, en op [welzijnswaardering](../wellbeing-valuation/), waar dezelfde disconteringsvraag ontstaat voor niet-monetaire welzijnsvoordelen.

## Valkuilen

- **Een vaste voet gebruiken voor zeer lange horizonten.** Het dalende schema van het Green Book bestaat specifiek omdat een constante voet werkelijk langlevende voordelen onderschat; controleer welke band van toepassing is in plaats van standaard 3,5% overal te gebruiken.
- **De discontovoet als ethisch neutraal behandelen.** Het Stern-Nordhaus-geschil toont dat de voet een waardeoordeel codeert over toekomstige generaties; het veranderen ervan verandert welke programma's gerechtvaardigd lijken, dus het moet worden vermeld en verdedigd, niet verborgen in een standaardwaarde van een rekenblad.
- **De maatschappelijke discontovoet verwarren met een private kapitaalkost.** Overheidsleenkosten en hurdle rates uit de private sector zijn andere begrippen dan de uit Ramsey afgeleide maatschappelijke voet, en het vervangen van de één door de ander in een publieke beoordeling zal het resultaat doorgaans vertekenen in de richting van het bevoordelen van kortetermijnrendement.

## Bronnen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
