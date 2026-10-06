# Verdringing en toeschrijving

Verdringing treedt op wanneer de schijnbare baat van een programma wordt bereikt door activiteit of baat van elders weg te nemen, in plaats van iets nieuws te creëren — jouw winst is iemand anders verlies. Toeschrijving is de verwante vraag hoeveel van een waargenomen uitkomst jouw interventie werkelijk op zich kan nemen, wanneer andere actoren en factoren ook hebben bijgedragen. Beide zijn standaardcorrecties in Britse evaluatierichtlijnen voor de publieke sector, samen met deadweight en lekkage, en beide worden routinematig overgeslagen door impactbeweringen die veel sterker lijken dan ze zijn.

## Waarom het ertoe doet

Een gemeentelijke bedrijfssubsidieregeling die 50 winkels helpt verhuizen naar een herstructureringszone kan rapporteren "50 bedrijven ondersteund, 200 banen gecreëerd" — maar als die bedrijven simpelweg verhuisden van een naburige hoofdstraat in plaats van te expanderen, werden de banen verdrongen, niet gecreëerd, en kan het nettoeffect voor de hele gemeente (of regio) bijna nul zijn. Het Magenta Book van HM Treasury en de langdurige Additionality Guide behandelen verdringing als een verplichte aftrekpost precies omdat lokale succesverhalen gangbaar zijn, zelfs wanneer ze geen netto nationale of regionale baat opleveren — waarde is simpelweg verplaatst, vaak ten nadele van het gebied of de actoren die het verloren. Richtlijnen voor de evaluatie van structuurfondsen (gebruikt voor voormalige EU-programma's van het Europees Fonds voor Regionale Ontwikkeling en hun binnenlandse opvolgers, zoals het UK Shared Prosperity Fund) formaliseren dit op drie geografische schalen: lokale verdringing (binnen een stad), regionale verdringing (binnen een regio), en nationale verdringing (over heel het VK), omdat een interventie additioneel kan zijn op één schaal terwijl ze op een breder niveau pure verdringing is — een werkgelegenheidsprogramma dat werknemers uit een naburige stad trekt, is nationaal neutraal, ook al lijkt het een lokaal succes.

Toeschrijving is het verwante probleem in partnerschapsintensieve levering, wat nu de norm is in maatschappelijke sector en interbestuurlijke publieke dienstverlening. Wanneer drie organisaties gezamenlijk een dienst voor preventie van dakloosheid leveren, kan het jaarverslag van elke organisatie onafhankelijk de eer opeisen voor dezelfde daling van straatdakloosheid — opgeteld over verslagen kan de beweerde impact de waargenomen werkelijke verandering overtreffen, soms met meerdere factoren. De richtlijn van het Magenta Book over bijdrageanalyse bestaat specifiek omdat willekeurige toeschrijving aan één actor vaak onmogelijk is bij levering door meerdere instanties, en het eerlijke antwoord is vaak "wij hebben bijgedragen aan deze uitkomst" in plaats van "wij hebben deze uitkomst veroorzaakt".

## De berekening

Verdringing als onderdeel van de standaardvolgorde voor netto-effect (zie [additionaliteit en deadweight](../additionaliteit-en-deadweight/) voor de volledige keten):

```
Netto additionele impact = Bruto-uitkomst − Deadweight −
                          Verdringing − Lekkage, × Multiplier

Verdringingsniveau = baat/activiteit afgeleid van elders /
                    totaal waargenomen bruto baat/activiteit
```

Toeschrijving, waarbij meerdere actoren bijdragen aan één uitkomst, wordt doorgaans uitgedrukt als een bijdrage-aandeel in plaats van een exact percentage, omdat het gewoonlijk niet met dezelfde striktheid kan worden gemeten als verdringing:

```
Toeschrijfbaar aandeel ≈ f（sterkte van causale bijdrage,
                         bijdragen van andere actoren,
                         externe/contextuele factoren）

De beweerde impact mag nooit overschrijden:
  Σ （toeschrijfbaar aandeel van elke partner） ≤ 100% van
  de totale waargenomen uitkomst
```

## Uitgewerkt voorbeeld

**Herstructureringssubsidie**: de hoofdstraatsubsidieregeling van een gemeente rapporteert 200 nieuwe winkelbanen gecreëerd in de gefinancierde zone. Vervolgonderzoek via enquête toont dat 60 van die banen kwamen van bedrijven die verhuisden van een naburige, ongefinancierde hoofdstraat binnen dezelfde gemeente, en dat 30 verder kwamen van nationale ketens die filialen openden die anders sowieso in de regio zouden hebben geopend.

```
Beweerde bruto banen = 200
Lokale verdringing = 60 （verhuisd binnen de gemeente）
Regionale verdringing = 30 （zou toch regionaal zijn geopend）

Netto additionele banen （gemeenteniveau） = 200 − 60 = 140
Netto additionele banen （regionaal niveau） = 200 − 60 − 30
                                             = 110
```

De eerlijke koptekst hangt af van de geografische schaal waar de financier zich om bekommert — een business case van de Treasury beoordeeld op nationaal of regionaal niveau moet 110 gebruiken, niet de 140 op gemeenteniveau, en zeker niet de ruwe 200.

**Interbestuurlijke dakloosheidsdienst**: drie partnerorganisaties (een gemeente, een huisvestingsgoed doel, en een zorginstantie) leveren gezamenlijk een dienst voor het verminderen van straatdakloosheid. Straatdakloosheid in het gebied daalde met 30 mensen over het jaar. Het individuele jaarverslag van elke organisatie beweert "wij hebben straatdakloosheid met 30 verminderd" — opgeteld beweren de drie verslagen dat 90 mensen zijn geholpen, drie keer de werkelijke daling. Een bijdrageanalyse die elke partner een aandeel toewijst (zeg, 40% gemeente, 35% goed doel, 25% zorginstantie, gebaseerd op gedocumenteerde rol en onafhankelijke beoordeling) zou respectievelijk 12, 10,5, en 7,5 rapporteren, wat correct optelt tot de waargenomen 30.

## Verband met softwareontwikkeling

Verdringing en toeschrijving bepalen hoe impacttracking- en uitkomstrapportagesystemen moeten worden ontworpen voor levering op meerdere locaties of via meerdere partners:

- Geografische en organisatorische scope moeten expliciete, eersteklas velden zijn in elk impactdashboard — een cijfer gerapporteerd "voor de gemeente" en hetzelfde cijfer gerapporteerd "voor de regio" zijn verschillende getallen, en een systeem dat ze samenvoegt, produceert getallen die op portefeuilleniveau niet kunnen worden afgestemd.
- Waar meerdere partners gezamenlijk leveren, moet een uitkomstsysteem bijdrage-aandelen registreren (of ten minste gezamenlijke toeschrijving markeren) in plaats van elke rapportagemodule van een partner onafhankelijk 100% van een gedeelde uitkomst te laten claimen — anders zullen samenvoegingen op portefeuilleniveau de totale impact overdrijven, soms flink.
- Dit koppelt aan [sociaal rendement op investering](../sociaal-rendement-op-investering/) en [rapportage van subsidie-uitkomsten](../subsidie-uitkomstenrapportage/): een SROI- of IRIS+-berekening die verdringing negeert of gedeelde uitkomsten overtoeschrijft, zal een opgeblazen verhouding produceren die audit of replicatie niet doorstaat.

## Valkuilen

- **Lokaal succes rapporteren zonder bredere verdringing te controleren.** Een programma kan er op de kleinste rapportageschaal zeer succesvol uitzien terwijl het op een breder niveau neutraal of zelfs negatief is; vermeld altijd de geografische schaal waarop het netto-cijfer van toepassing is.
- **Elke partner in gezamenlijke levering volledige eer laten opeisen.** Tenzij bijdrage-aandelen zijn overeengekomen en gedocumenteerd, zal samengevoegde rapportage over partners de totale impact overdrijven — controleer dat partnerclaims niet meer optellen dan het waargenomen totaal.
- **Toeschrijving behandelen als een exact percentage terwijl het eigenlijk een oordeel is.** Bijdrageanalyse, anders dan een gerandomiseerde contrafeitelijke situatie, produceert een verdedigbare schatting, geen gemeten feit; presenteer het met passende onzekerheid in plaats van valse precisie.
- **Verdringing negeren in marktgerichte interventies.** Bedrijfsondersteuning, werkgelegenheidsregelingen, en plaatsgebonden herstructurering zijn de klassieke categorieën met hoge verdringing; behandel verdringingscontroles als verplicht voor deze, niet als optioneel.

## Bronnen

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
