# Technische schuld als public-value-erosie

Technische schuld is de metafoor van Ward Cunningham uit 1992 voor de geïmpliceerde toekomstige kost van opportunistische vroegere codeerbeslissingen: een **hoofdsom** (het verschuldigde herstelwerk) en een **rente** (de doorlopende weerstand die het uitoefent op levering). In een legacy overheids-IT-bestand wordt die rente direct betaald uit public value — trager wettelijke-wijzigingslevering, hogere faalpercentages op burgergerichte diensten, en een krimpende poel van mensen die het systeem überhaupt veilig kunnen aanraken.

## Waarom het ertoe doet

Legacy mainframe- en COBOL-tijdperk-systemen over Britse overheidsdepartementen — HMRC en DWP onder de meest geciteerd — dragen een goed gedocumenteerd en escalerend risico dat het National Audit Office herhaaldelijk heeft gemarkeerd, inclusief in zijn rapport *Digital Transformation in Government* (<https://www.nao.org.uk/>): verouderende platforms die duur zijn om te veranderen, steeds moeilijker te beveiligen, en afhankelijk van een gespecialiseerd personeelsbestand dat sneller met pensioen gaat dan het wordt vervangen. In tegenstelling tot een private-sectorachterstand, zit deze schuld direct tussen burgers en hun wettelijke rechten — een uitkeringsberekeningsmotor die niet veilig kan worden veranderd is een beleidsleveringsbeperking, geen loutere engineeringongemak. De herstart van 2013 van het Universal Credit IT-programma, toen het National Audit Office vond dat de oorspronkelijke bouw geen value for money zou leveren en een substantieel deel van het softwareactivum moest worden afgeschreven, is een canoniek voorbeeld van ongeprijsde technische schuld die een live, ministerieel zichtbaar publiek programma inhaalt.

## De berekening

```
SQALE-hoofdsom = Σ over overtredingen (herstelduur) ×
                ontwikkelaarskosttarief
Technische-schuldratio (TDR) = herstelkosten /
                              herontwikkelingskosten × 100
                    (SonarQube-cijfers: A ≤5%, B ≤10%,
                    C ≤20%, D ≤50%)

Rente (het cijfer dat de afbouw rechtvaardigt):
  rente/jaar = Δ leveringssnelheid × waarde per
              snelheidseenheid
              + Δ burgergericht incidentpercentage × kosten
              per incident
              + specialistenvaardighedenpremie × getroffen
              personeelsaantal
Afbouwzaak = CW(vermeden rente over horizon) − herstelkosten
             (verdisconteerd tegen de Green-Book-maatschappe-
             lijke-discontovoet, zie maatschappelijke-
             discontovoet.md)
```

Hoofdsom stelt de verplichting vast; rente is wat de investeringszaak maakt aan een public accounts committee.

## Uitgewerkt voorbeeld

Een aanvraagverwerkingsmotor van 250.000 regels geschreven in een legacy-4GL. Met gebruik van de CAST Appmarq-benchmark van ruwweg $3,61 technische-schuldhoofdsom per coderegel (≈£2,85 tegen typische omrekening):

```
Hoofdsom ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ 16% (cijfer C)
```

Gemeten rente: het departement houdt drie specialistencontractanten aan tegen een dagtariefpremie van 40% boven standaard senior-ingenieurtarieven omdat interne vaardigheden zijn weggesleten — een extra £180.000/jaar op een team van zes personen. Het systeem veroorzaakt ook vier grote verwerkingsuitvallen/jaar, elk die besluiten opschort voor ongeveer 5.000 aanvragers en hen omleidt naar het contactcentrum tegen ruwweg £25/gesprek:

```
Rente ≈ £180.000 (vaardighedenpremie)
      + 4 × 5.000 × £25 = £500.000 (omgeleide-contactkosten)
      ≈ £680.000/jaar
```

Gerichte herstelling van de slechtst presterende modules kost £1.200.000 en wordt gemodelleerd om rente te snijden met 70%:

```
Rentereductie = 0,70 × 680.000 = £476.000/jaar
Terugverdientijd ≈ 1.200.000 / 476.000 ≈ 2,5 jaar
```

De richting doet ertoe: het herstellen van zelden aangeraakte code koopt niets, omdat rente concentreert waar wijzigingsfrequentie en schuldichtheid beide pieken.

## Verband met softwareontwikkeling

De public-value-kadering die een technische-schuldzaak upgradet voorbij "de code is oud": druk het legacy-bestand uit als een inventaris van waar verloren leveringscapaciteit geconcentreerd is, en verbind het expliciet met [totale-eigendomskosten](../totale-eigendomskosten-in-overheids-it/), omdat rente een operationele kost is die bij de TCO-regel behoort ongeacht of financiën er ooit om heeft gevraagd. Schuld-belaste systemen dragen ook disproportionele [cyberbeveiligings](../cyberbeveiligingswaarde-publieke-sector/)blootstelling, omdat patch-cadans en schuldichtheid gecorreleerd zijn — een niet-patchbaar legacysysteem is technische schuld waarvan de rente wordt betaald in incidentrisico in plaats van ponden. En elke afweging tussen herstel en functie is zelf een [kosten-van-vertraging](../kosten-van-vertraging-in-overheidsprogrammas/)-beslissing: schuld afbetalen vertraagt de volgende wettelijke wijziging, die zijn eigen CoD heeft die moet worden afgewogen tegen de bespaarde rente.

## Valkuilen

- **Alleen-hoofdsom-rapportage**: een grote, schrikwekkende herstelschatting zonder rentecijfer rechtvaardigt niets aan een uitgavengoedkeurder.
- **Door hulpmiddelen gegenereerde schuldcijfers letterlijk genomen**: SQALE-achtige scanners tellen regelovertredingen; ze missen het dure soort schuld — architecturale beslissingen en ongedocumenteerde legacy-bedrijfsregels — terwijl ze trivia markeren.
- **"De herschrijving vermijdt het allemaal"**: vervangingsprogramma's moeten dezelfde discipline halen als elke andere businesscase — contrafeitelijke kosten, slagingskans, en discontering — geen vrijstelling ervan, zoals de herstart van Universal Credit in 2013 aantoonde.
- **Schuld-nul-utopisme**: het optimale schuldniveau is niet nul; schuld is hefboom die eerdere levering kocht. De levende vraag is altijd het rentetarief, niet of schuld überhaupt bestaat.

## Bronnen

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
