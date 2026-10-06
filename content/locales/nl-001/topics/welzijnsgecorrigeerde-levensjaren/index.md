# Welzijnsgecorrigeerde levensjaren (WELLBY)

Een WELLBY is één extra punt levenstevredenheid, op de standaard 0-10-welzijnsschaal, voor één persoon voor één jaar. Het is de structurele analoog van de QALY gebruikt in gezondheidseconomie — een enkele eenheid die je toelaat interventies te vergelijken waarvan de uitkomsten niets anders gemeen hebben — maar gebouwd op subjectief welzijn in plaats van klinische gezondheidstoestanden, en uiteengezet in de "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) van HM Treasury.

## Waarom het ertoe doet

Kosten-batenbeoordeling heeft een gemeenschappelijke eenheid nodig om een jeugdclubsubsidie te vergelijken tegen een verkeersveiligheidsregeling tegen een geestelijke-gezondheidsdienst, waarvan geen enige een uitkomstmaatstaf deelt. Gezondheidseconomie loste dit op voor klinische interventies met de QALY: een kwaliteitsgecorrigeerd levensjaar, gewogen van 0 (dood) tot 1 (volledige gezondheid). De welzijnsrichtlijn van HM Treasury breidt dezelfde logica uit naar niet-gezondheids-publieke-uitgaven, met gebruik van de geharmoniseerde levenstevredenheidsvraag van ONS ("Overall, how satisfied are you with your life nowadays?", beantwoord 0-10) als de uitkomstladder in plaats van een gezondheidstoestandindex. Een WELLBY van 1 betekent dat de levenstevredenheid van één persoon stijgt met één volledig punt voor één jaar (of, equivalent, dat de tevredenheid van tien mensen elk met 0,1 punt stijgt voor een jaar — WELLBY's sommeren over een populatie zoals QALY's doen). De richtlijn van HM Treasury zet een illustratieve monetaire waarde per WELLBY (ongeveer £13.000, prijzen 2019/20) afgeleid door subjectieve-welzijnsgegevens te verzoenen met andere benaderingen van de waarde van een levensjaar, wat beoordelaars een manier geeft om uitkomsten te monetariseren — eenzaamheidsvermindering, gemeenschapscohesie, toegang tot groene ruimte — die [welzijnswaardering](../welzijnswaardering/)-technieken voorheen alleen konden beschrijven, niet vergelijken op een gemeenschappelijke voet met gezondheids- of veiligheidsuitgaven.

## De berekening

```
WELLBY = Δ levenstevredenheid (0-10-schaal) × aantal jaren dat
        de verandering aanhoudt (opgeteld over alle getroffen
        mensen)

Gemonetariseerd welzijnsvoordeel = gegenereerde WELLBY's ×
                                   waarde per WELLBY
                                   (HMT-referentiewaarde)

vgl. QALY = Δ gezondheidstoestandnut (0-1-schaal) × jaren
           geleefd in die toestand
```

De 0-10-tevredenheidsschaal en de 0-1-QALY-nutschaal zijn niet uitwisselbaar zonder een omrekeningsstap; de richtlijn van HM Treasury besproekt het verzoenen van de twee zodat, bijvoorbeeld, een gezondheidsinterventie beoordeeld in QALY's en een sociale interventie beoordeeld in WELLBY's niet stilzwijgend dubbel geteld of onvergelijkbaar gelaten worden binnen dezelfde [Green Book-beoordeling](../green-book-beoordeling/).

## Uitgewerkt voorbeeld

**Gemeentelijke eenzaamheidsdienst**: een maatjesregeling bedient 400 geïsoleerde oudere inwoners. Follow-upenquêtes tonen dat gemiddelde levenstevredenheid stijgt van 5,2 naar 6,0 (een winst van 0,8 punten), en het effect wordt geschat 2 jaar aan te houden voordat het vervaagt.

```
WELLBY's = 400 mensen × 0,8 punten × 2 jaar = 640 WELLBY's

Gemonetariseerde waarde = 640 × £13.000 = £8.320.000
```

Tegen een jaarlijkse programmakost van £300.000 (£600.000 over 2 jaar), is de baten-kostenverhouding ruwweg 8.320.000 / 600.000 ≈ **13,9:1** — een cijfer dat nu in dezelfde beoordelingstabel kan staan als de kosten-per-vermeden-QALY van een gezondheidsregeling of de reistijdbesparingen van een vervoersregeling.

**Goed doel, kleinere schaal**: een gemeenschapskunstprogramma bereikt 50 deelnemers met een gemeten tevredenheidswinst van 0,3 punten, durend 1 jaar.

```
WELLBY's = 50 × 0,3 × 1 = 15 WELLBY's
Gemonetariseerde waarde = 15 × £13.000 = £195.000
```

## Verband met softwareontwikkeling

- Elke burgergerichte dienst die al een levenstevredenheids- of welzijnsenquête-item verzamelt (veel gemeentelijke en gezondheids-en-zorgplatforms doen dit, volgend de vier standaard welzijnsvragen van ONS) kan WELLBY's direct berekenen uit bestaande gegevenspijplijnen in plaats van op-maat-gemaakte economische evaluatie aan te vragen voor elke dienstverandering.
- WELLBY's geven engineeringteams die bouwen voor [social value act](../wet-sociale-waarde/)-rapportage of [sociaal rendement op investering](../sociaal-rendement-op-investering/) een nationaal gestandaardiseerde, door HM Treasury goedgekeurde noemer, wat de proliferatie van op-maat-gemaakte "impactscores" vermijdt die niet vergelijkbaar zijn over contracten of leveranciers.
- Omdat WELLBY's additief zijn over mensen en tijd, componeren ze netjes in het soort populatieniveau-uitkomsttracking gebruikt in [uitkomstgebaseerde-verantwoording](../uitkomstgebaseerde-verantwoording/)-systemen — een dienstdashboard kan cumulatieve WELLBY's gegenereerd per kwartaal rapporteren zoals een gezondheidssysteem gewonnen QALY's rapporteert.

## Valkuilen

- **Aannemen dat zelfgerapporteerde tevredenheidswinsten volledig toeschrijfbaar zijn aan de interventie** — zonder een contrafeitelijke situatie (vergelijkingsgroep of voor/na-ontwerp met controles) kun je de WELLBY-winst niet scheiden van algemene trends; zie [contrafeitelijke analyse](../contrafeitelijke-analyse/).
- **WELLBY's en QALY's mengen in één totaal zonder verzoening** — de richtlijn van HM Treasury is expliciet dat de twee verschillende schalen en verschillende onderliggende theorieën van waarde gebruiken; ze naïef optellen telt overlappend welzijn dubbel.
- **De referentiemonetaire waarde onkritisch gebruiken** — het £-per-WELLBY-cijfer is een nationale gemiddelde schatting met echte onzekerheidsbanden; de richtlijn van HM Treasury beveelt gevoeligheidsanalyse aan, niet het als een vaste wisselkoers behandelen.

## Bronnen

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
