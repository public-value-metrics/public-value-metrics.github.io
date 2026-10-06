# Welzijnswaardering (WELLBY)

Welzijnswaardering prijst het effect van een beleid direct in termen van levenstevredenheid, met gebruik van de WELLBY (welzijnsgecorrigeerd levensjaar) als eenheid — één WELLBY is gelijk aan een verandering van één punt op een levenstevredenheidsschaal van 0–10, aangehouden voor één jaar. Het is het officieel gesanctioneerde alternatief van HM Treasury voor het monetariseren van elke baat via betalingsbereidheid.

## Waarom het ertoe doet

De "Wellbeing guidance for appraisal: supplementary Green Book guidance" van HM Treasury (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) bracht subjectieve welzijnsgegevens formeel in de beoordeling van de centrale overheid, wat analisten een weg geeft om uitkomsten te waarderen — sociale verbondenheid, mentale gezondheid, veiligheid, burgerparticipatie — die methoden van [betalingsbereidheid](../betalingsbereidheidswaardering/) en [afgeleide voorkeur](../afgeleide-voorkeurwaardering/) moeite hebben overtuigend te prijzen, omdat mensen vaak slechte voorspellers zijn van hoeveel een goed daadwerkelijk hun levenstevredenheid zal beïnvloeden. De richtlijn, ontwikkeld samen met het What Works Centre for Wellbeing, stelt een aanbevolen monetaire waarde per WELLBY vast — ongeveer £13.000 (prijzen 2021, periodiek herzien) — afgeleid door subjectieve welzijnsgegevens af te stemmen op andere benaderingen van de waarde van een levensjaar, wat beoordelaars een manier geeft om uitkomsten te monetariseren — vermindering van eenzaamheid, gemeenschapscohesie, toegang tot groene ruimte — die technieken van [welzijnswaardering](../welzijnswaardering/) voorheen alleen konden beschrijven, niet vergelijken op een gemeenschappelijke basis met gezondheids- of veiligheidsuitgaven.

## De berekening

```
WELLBY = 1 punt levenstevredenheid （schaal 0-10） aangehouden
        voor 1 persoon voor 1 jaar

Totale WELLBY's van een beleid =
  Σ (verandering in levenstevredenheidsscore) × (aantal
  betrokken personen) × (duur in jaren, verdisconteerd tegen
  de maatschappelijke discontovoet)

Gemonetariseerde waarde = Totale WELLBY's × waarde per WELLBY
  （aanbevolen waarde HM Treasury: £13.000 per WELLBY,
   prijzen 2021, onderwerp van periodieke herziening —
   controleer huidige richtlijn voor gebruik）

vgl. QALY = Δ nut gezondheidstoestand （schaal 0-1） × jaren
           geleefd in die toestand
```

De schaal van 0–10 voor tevredenheid en de schaal van 0–1 voor QALY-nut zijn niet uitwisselbaar zonder een omrekenstap; de richtlijn van HM Treasury bespreekt het afstemmen van de twee zodat, bijvoorbeeld, een gezondheidsinterventie beoordeeld in QALY's en een sociale interventie beoordeeld in WELLBY's niet stilzwijgend dubbel worden geteld of onvergelijkbaar blijven binnen dezelfde [Green Book-beoordeling](../green-book-beoordeling/).

## Uitgewerkt voorbeeld

**Gemeente**: een gemeente voert een maatjesprogramma tegen eenzaamheid uit voor geïsoleerde oudere inwoners, dat 400 mensen bedient. Een voor/na-welzijnsenquête met de ONS4-levenstevredenheidsvraag toont dat de gemiddelde score van deelnemers steeg van 5,2 naar 6,0 — een winst van 0,8 punt — aangehouden voor de 2-jarige gefinancierde duur van het programma.

```
Gegenereerde WELLBY's = 400 mensen × 0,8 punt × 2 jaar
                       = 640 WELLBY's

Gemonetariseerde waarde = 640 × £13.000 = £8,32m
```

Tegen een jaarlijkse programmakost van £300.000 (£600.000 over 2 jaar) is de baten-kostenverhouding ongeveer £8.320.000 / £600.000 ≈ **13,9:1** — een cijfer dat nu naast de kosten per voorkomen QALY van een gezondheidsprogramma of de reistijdbesparingen van een transportprogramma kan staan in een beoordelingstabel.

**Goed doel, kleinere schaal**: een gemeenschapskunstprogramma bereikt 50 deelnemers met een gemeten tevredenheidswinst van 0,3 punt, die 1 jaar aanhoudt.

```
WELLBY's = 50 × 0,3 × 1 = 15 WELLBY's
Gemonetariseerde waarde = 15 × £13.000 = £195.000
```

## Verband met softwareontwikkeling

- Elke burgergerichte dienst die al een onderdeel van levenstevredenheid of welzijn in een enquête verzamelt (veel gemeentelijke en zorgplatforms doen dit, in lijn met de vier standaard welzijnsvragen van ONS) kan WELLBY's direct berekenen uit bestaande datapijplijnen in plaats van op maat gemaakte economische evaluatie te bestellen voor elke dienstwijziging.
- WELLBY's geven technische teams die bouwen voor rapportage volgens de [Social Value Act](../social-value-act/) of [sociaal rendement op investering](../sociaal-rendement-op-investering/) een landelijk gestandaardiseerde, door HM Treasury goedgekeurde noemer, wat de wildgroei van op maat gemaakte "impactscores" die niet tussen contracten of leveranciers kunnen worden vergeleken, vermijdt.
- Omdat WELLBY's additief zijn over personen en tijd, componeren zij netjes in het type populatie-niveau-uitkomsttracking gebruikt in [resultaatgerichte verantwoording](../uitkomstgebaseerde-verantwoording/)-systemen — een dienstendashboard kan cumulatieve gegenereerde WELLBY's per kwartaal rapporteren op de manier waarop een gezondheidssysteem gewonnen QALY's rapporteert.

## Valkuilen

- **Aannemen dat zelfgerapporteerde tevredenheidswinsten volledig toeschrijfbaar zijn aan de interventie** — zonder een contrafeitelijke situatie (vergelijkingsgroep of voor/na-ontwerp met controles) kun je de WELLBY-winst niet scheiden van algemene trends; zie [contrafeitelijke analyse](../contrafeitelijke-analyse/).
- **WELLBY's en QALY's mengen in één totaal zonder afstemming** — de richtlijn van HM Treasury is expliciet dat de twee verschillende schalen en verschillende onderliggende waardetheorieën gebruiken; ze naïef optellen telt overlappend welzijn dubbel.
- **De referentiemonetaire waarde ongekritiseerd gebruiken** — het £-per-WELLBY-cijfer is een landelijke gemiddelde schatting met werkelijke onzekerheidsmarges; de richtlijn van HM Treasury raadt gevoeligheidsanalyse aan, geen behandeling als een vaste wisselkoers.

## Bronnen

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
