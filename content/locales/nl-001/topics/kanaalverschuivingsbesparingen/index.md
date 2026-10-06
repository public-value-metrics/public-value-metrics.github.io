# Kanaalverschuivingsbesparingen

Kanaalverschuivingsbesparingen zijn de geprojecteerde kostenreductie van het verplaatsen van transactievolume weg van dure kanalen — telefoon, persoonlijke balies, papierpost — naar goedkope digitale zelfbediening. Het is de financiële motor achter "digitaal bij standaard", en ook de regelpost in de businesscase die het meest waarschijnlijk verkeerd is, omdat de aanname waarop het rust — dat offline kanalen krimpen naarmate digitale opname stijgt — slechts soms waar is.

## Waarom het ertoe doet

De rekenkunde ziet er onweerlegbaar uit met de [kosten-per-transactie](../kosten-per-transactie/)-cijfers uit het Digital Efficiency Report: verschuif een miljoen transacties van een persoonlijk bezoek van £8,62 naar een digitaal bezoek van £0,15 en de besparing is meer dan £8 miljoen. Maar een besparing wordt alleen vrijgemaakt contant geld voor herinzet als de *vaste capaciteit* van het krimpende kanaal daadwerkelijk wordt ontmanteld — de callcenterstoelen, het baliepersoneel, de telefoniecontractminuten — en digitale-transformatieprogramma's van lokale overheden hebben herhaaldelijk gevonden dat totaal contactvolume niet daalt in lijn met digitale opname. Onderzoek van digitale-transformatieprogramma's van gemeenten en instanties zoals Socitm en de Local Government Association heeft een terugkerend patroon gedocumenteerd: digitale kanalen trekken echt nieuw contact aan (burgers die anders niet zouden hebben gebeld of bezocht, doen dat nu, omdat het gemakkelijker is), en een betekenisvol aandeel van "digitale" transacties faalt halverwege en genereert toch een telefoontje — dus telefoonvolume daalt met veel minder dan het digitale-opnamepercentage zou suggereren, soms helemaal niet dalend in absolute termen zelfs terwijl zijn *aandeel* van totaal contact daalt.

## De berekening

```
Bruto kanaalverschuivingsbesparing = verschoven volume × (kosten
                                     oud kanaal − kosten digitaal)

Netto (gerealiseerde) besparing = brutobesparing
                       − nieuwe/schaduwvraag gecreëerd door het
                         gemakkelijkere kanaal
                       − faalvraagkosten (digitale falen die toch
                         een telefoontje of baliebezoek genereren)
                       − kosten van niet-ontmantelde vaste
                         capaciteit (een callcenter kan alleen
                         personeel afstoten in discrete
                         eenheden; een daling van 15% volume laat
                         je zelden 15% van het personeelsbestand
                         snijden)

Realisatiedrempel: besparingen zijn alleen bankbaar zodra volume
onder het niveau daalt dat het oude kanaal kan bemannen op zijn
volgende-kleinere discrete capaciteitsstap (bijv. het verliezen
van één volledige shift, één volledige balie, één
gecontracteerde personeelsbandbreedte)
```

## Uitgewerkt voorbeeld

**Countyraad verlenging gehandicaptenkaart**: 60.000 verlengingen/jaar, voorheen 100% telefoon/papier tegen £6,40 per transactie. Een nieuwe digitale dienst lanceert en bereikt 65% digitale opname binnen een jaar, tegen £0,30 per digitale transactie.

```
Naïeve (bruto) besparingsberekening:
  39.000 verschoven × (£6,40 − £0,30) = £237.900/jaar

Wat daadwerkelijk gebeurde, volgens de contactcentrumgegevens
van de raad:
  Telefoonvolume daalde van 60.000/jaar naar 46.000/jaar
  (−23%, niet −65%) omdat: 9.000 digitale reizen faalden en
  een vervolgtelefoontje genereerden (faalvraaglekkage), en
  4.000 mensen die voorheen helemaal niet verlengden dat nu
  wel doen, omdat ze het online gemakkelijk vonden
  (schaduwvraag — een echte toegangsverbetering, maar geen
  besparing)

  Telefooncontactcentrum wordt bemand in banden van
  8.000 gesprekken/FTE; een daling van 14.000 gesprekken
  (60.000 → 46.000) maakt 1,75 FTE vrij, in de praktijk
  afgerond naar 1 FTE daadwerkelijk herplaatst = £34.000/jaar

Gerealiseerde besparing = £34.000/jaar plus de vermeden
  digitale-kanaal-bouw-/draaikosten op 39.000 transacties ≈
  £34.000 + (39.000 × £0,30 digitale kosten al meegeteld) —
  een fractie van het koptekstcijfer van £237.900, hoewel de
  dienst nog steeds onmiskenbaar beter is voor gebruikers.
```

## Verband met softwareontwikkeling

De engineeringles is dat kanaalverschuivingsbesparingen worden gerealiseerd door *operationele* beslissingen (roostering, ontmanteling, contractheronderhandeling), niet door de software die wordt geleverd — een team kan elk punt van [digitale-dienstennorm](../digitale-dienstennorm/) behalen en nog steeds nul netto besparing leveren als niemand de vaste capaciteit van het oude kanaal afstoot. Het instrumenteren van faalvraag (waar in de digitale reis gebruikers afbreken en wat ze vervolgens doen) is een oplosbaar funnelanalyseprobleem en het enkele meest hefboomrijke ding dat een engineeringteam kan doen om de besparingszaak te beschermen; het is ook de directe link naar [kosten-per-transactie](../kosten-per-transactie/), die faalvraag stilzwijgend opblaast. Zie [batenrealisatie](../batenrealisatie/) voor de bredere discipline van controleren of de besparingen van een businesscase daadwerkelijk landen, en [digitale-inclusie](../digitale-inclusie/) voor waarom het offline kanaal gewoonlijk niet volledig kan, en niet zou moeten, worden ontmanteld.

## Valkuilen

- **1:1-kanaalsubstitutie aannemen**: digitale opname modelleren als een directe aftrekking van telefoon-/baliegevolume, met negering van schaduwvraag en faalvraaglekkage gedocumenteerd in kanaalverschuivingsonderzoek van lokale overheden.
- **Brutobesparingen boeken voor ontmanteling**: de besparing meetellen in de businesscase het jaar dat opname stijgt, niet het jaar (indien ooit) dat de capaciteit van het oude kanaal daadwerkelijk wordt gesneden.
- **De stapfunctieaard van personeelskosten negeren**: een daling van 20% volume vertaalt zich zelden in een daling van 20% kosten, omdat contactcentra en balies worden bemand in discrete banden, niet continu.
- **Schaduwvraag behandelen als verspilling**: nieuw contact van eerder-uitgesloten of eerder-afgeschrikte gebruikers is een echte toename in [public value](../publieke-waarde/), geen modelleerfout — het zou moeten worden gerapporteerd als een toegangsuitkomst, niet weggesaldeerd als ruis.

## Bronnen

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
