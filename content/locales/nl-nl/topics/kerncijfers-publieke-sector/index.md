# Kerncijfers publieke sector

Een kernprestatie-indicator (KPI) is een gekozen, bijgehouden maatstaf die staat voor of een publieke dienst zijn werk goed doet. In de overheid is de keuze van KPI nooit neutraal: omdat KPI's zijn gekoppeld aan budgetten, ranglijsten, en carrières, vormt de daad van het selecteren ervan het gedrag van iedereen stroomafwaarts ervan, vaak meer dan het beleid dat de dienst heeft gecreëerd.

## Waarom het ertoe doet

De observatie van Charles Goodhart uit 1975 over monetair beleid — later gepopulariseerd door Marilyn Strathern als "wanneer een maatstaf een doel wordt, stopt het een goede maatstaf te zijn" — is het enkele belangrijkste waarschuwingslabel in prestatiebeheer van de publieke sector. Een KPI gekozen om een systeem te *beschrijven* begint dat systeem te *vervormen* op het moment dat middelen, salaris, of politiek overleven ermee verbonden zijn. De canonieke illustratie zijn de responstijden van de NHS-ambulancediensten: toen de doelstelling van acht minuten responstijd voor Categorie A bindend werd, werd aangetoond dat sommige trusts ambulances "stapelden" net buiten de responstijdklok, of oproepen herclassificeerden, om het getal te halen zonder patiëntuitkomsten te veranderen. De richtlijn van het Britse National Audit Office over het kiezen en gebruiken van prestatie-indicatoren — uiteengezet in zijn value-for-money-rapporten en zijn "Performance Measurement by Regulators" en "Choosing the Right FABRIC"-raamwerk (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — bestaat precies omdat departementen bleven kiezen voor indicatoren die gemakkelijk te rapporteren waren in plaats van indicatoren die moeilijk te manipuleren waren. Een softwareingenieur die het dashboard oplevert waarop een minister of directeur zal worden beoordeeld, ontwerpt, of hij het bedoelt of niet, de prikkelstructuur van een publieke instelling.

## De berekening

KPI-ontwerp is een raamwerkgevormd onderwerp, maar de *evaluatie* van een kandidaat-KPI is een herhaalbare checklist, geen formule:

```
Voor elke kandidaat-KPI, scoor tegen:
  Fit for purpose  — meet het de uitkomst, of een proxy
                     meerdere stappen verwijderd?
  Appropriate      — behoort het tot de mensen die het
                     daadwerkelijk kunnen beïnvloeden?
  Balanced         — is het gekoppeld aan een tegenmaatstaf
                     die manipulatie opvangt?
  Robust           — kan het een audit overleven, of is het
                     zelfgerapporteerd en onverifieerbaar?
  Integrated       — past het bij de bredere set, of duwt
                     het tegen een andere KPI aan?
  Cost-effective   — kost het verzamelen meer dan de
                     beslissing die het informeert?

Leidende versus achterblijvende splitsing:
  Leidende indicator      → voorspelt toekomstige uitkomst, maar
                            vaak manipuleerbaar (bijv. oproepen
                            beantwoord <60s)
  Achterblijvende indicator → bevestigt dat de uitkomst plaatsvond,
                              maar komt te laat om te sturen (bijv.
                              jaarlijkse tevredenheidsenquête)
  Een verdedigbare KPI-set koppelt ten minste één van elk per
  doelstelling.
```

## Uitgewerkt voorbeeld

**Ambulancetrust**: een trust rapporteert een Categorie A (levensbedreigend) responstijd-KPI van "75% van de oproepen beantwoord binnen 8 minuten." In één kwartaal komen 6.000 Categorie A-oproepen binnen; 4.500 worden binnen 8 minuten beantwoord, wat 75,0% geeft — kennelijk op doel.

```
Kop-KPI = 4.500 / 6.000 × 100 = 75,0%  (voldoet aan de drempel van 75%)
```

Maar een Goodhart-audit voegt een tegenmaatstaf toe: gemiddelde responstijd voor de traagste 10% van de oproepen.

```
Gemiddelde responstijd traagste deciel = 34 minuten (omhoog van 19
minuten twee jaar eerder)
```

De trust haalt het doel terwijl de staart — de oproepen die het meest waarschijnlijk werkelijk levensbedreigend zijn zodra triage imperfect is — veel erger is geworden, omdat teams worden geprioriteerd naar oproepen dicht bij de klif van 8 minuten in plaats van naar klinische urgentie. De enkele KPI vertelde een vals verhaal; de gekoppelde KPI vertelde het ware verhaal.

## Verband met softwareontwikkeling

Ingenieurs die prestatiedashboards bouwen voor de overheid ontwerpen, functioneel, de prikkel-API van de organisatie. Praktische implicaties: instrumenteer de *noemer* net zo rigoureus als de teller (een KPI gerapporteerd als een kaal percentage nodigt uit tot noemermanipulatie — zie [kosten per transactie](../kosten-per-transactie/) voor dezelfde valkuil in digitale diensten); bouw tegenmaatstaven in hetzelfde dashboard in plaats van een apart rapport dat niemand leest, zodat manipulatie zichtbaar is op het moment van beslissing; en versioneer de KPI-definitie, omdat een stille herdefinitie (veranderen wat telt als een "oproep," een "zaak," of een "voltooiing") functioneel gelijk staat aan het veranderen van het doel zonder het aan te kondigen. Een [public value scorecard](../public-value-scorecard/) is één gestructureerde manier om te voorkomen dat een enkele KPI geïsoleerd wordt gelezen, en [uitkomstgebaseerde verantwoording](../uitkomstgebaseerde-verantwoording/) is de discipline van het kiezen van KPI's op populatieniveau die een enkel team niet eenzijdig kan vervormen.

## Valkuilen

- **De gemakkelijk te verzamelen maatstaf kiezen boven de betekenisvolle**: oproepbeantwoordingstijd is trivial om te loggen; of de oproep het probleem van de burger oploste is dat niet — maar alleen de tweede is de uitkomst. Weersta de standaardkeuze voor wat het systeem al uitzendt.
- **Geen tegenmaatstaf**: elke KPI verbonden aan geld of reputatie zal aan de marge worden gemanipuleerd; lever het met een gekoppelde maatstaf die de waarschijnlijke manipulatievector opvangt voordat het wordt gepubliceerd.
- **De maatstaf herdefiniëren zonder wijzigingslogboek**: "ontvangen oproepen" verwisselen voor "beantwoorde oproepen" om een trend te vleien, vernietigt de geloofwaardigheid van de tijdreeks op het moment dat het wordt ontdekt — publiceer altijd een definitiewijzigingslogboek naast de cijfers.
- **Activiteit verwarren met resultaat**: het tellen van voltooide inspecties is een output; het tellen van panden die in overeenstemming zijn gebracht, ligt dichter bij de uitkomst (zie [uitkomsten versus output](../uitkomsten-versus-output/)).

## Bronnen

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulering van de wet van Goodhart zoals algemeen geciteerd).
- National Audit Office, onderzoeken naar prestatierapportage van NHS-ambulancediensten.
  <https://www.nao.org.uk/>
