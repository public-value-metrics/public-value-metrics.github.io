# Giver-afkast på investering

Giver-afkast på investering er, hvad en specifik givers pund faktisk køber i resultater — ikke velgørenhedsOrganisationens driftsRater, og ikke velgørenhedsOrganisationens eget afkast på sit samlede budget. Det omRammer ROI fra organisationens perspektiv (hvor effektivt kører vi) til giverens perspektiv (hvad ændrer mit marginale bidrag), og de to tal behandles routinemæssigt, og forkert, som samme ting.

## Hvorfor det betyder noget

En velgørenhedsOrganisations egen "ROI," i det omfang frasen bruges overHovedet, beskriver normalt noget som [kostpris pr. modtager](../kostpris-pr-modtager/) eller [velgørenhedsOrganisations overheadRate](../velgørenhedsorganisations-overheadrate/) — organisatoriske effektivitetsMålinger. En givers ROI er et helt andet spørgsmål: givet, at denne velgørenhedsOrganisation allerede har anden indkomst, hvad tilføjer *denne* givers penge ved margin? Hvis en velgørenhedsOrganisation ville levere samme program med eller uden en specifik £10.000-gave — fordi den har ample reserver, eller fordi en anden finansier ville have udFyldt gabet — er den gaves giver-ROI tæt på nul, uanset hvor god velgørenhedsOrganisationens samlede overheadRate eller kostpris pr. resultat ser ud.

Dette er samme tilskrivnings-spørgsmål, der underbygger [value for money](../value-for-money/)-vurdering i britisk offentlig udgift og [tilskrivning og dødvægt](../additionalitet-og-dødvægt/) i programEvaluering: skabt værdi er kun krediterbar til en finansier i det omfang, det ikke ville have sket alligevel. Store giver-rådgivede platforme og effektiv-givning-organisationer (Giving What We Can, GiveWell) bygger deres anbefalinger explicit omkring denne distinktion, og spørger ikke "er dette en god velgørenhedsOrganisation," men "har denne velgørenhedsOrganisation uUdfyldt plads til mere finansiering, sådan at min gave er tilskrivbar."

## Beregningen

```
Giver-ROI ≠ velgørenhedsOrganisationens driftsEffektivitet

Giver-ROI  ≈  (resultat opnået med gaven) − (resultat, der
              ville have fundet sted uden den, dvs.
              kontrafaktualen)
            ─────────────────────────────────────────────
                         gavens størrelse

NøgleInput:
  - Plads til mere finansiering (er velgørenhedsOrganisationen
    finansieringsBegrænset ved margin?)
  - Funging (ville en anden giver have udFyldt gabet?)
  - Marginal kostpris-effektivitet ved det specifikke
    finansieringsNiveau (kostpriser stiger ofte, da en
    intervention skalerer forbi sin letteste-at-nå-befolkning)
```

Se [effektiv altruisme kostpris-effektivitet](../effektiv-altruisme-kostpris-effektivitet/) for, hvordan GiveWell operationaliserer "plads til mere finansiering"-spørgsmålet, og [kontrafaktisk analyse](../kontrafaktisk-analyse/) for den generelle metode.

## Gennemregnet eksempel

En giver vælger mellem to £5.000-gaver:

- **VelgørenhedsOrganisation C**: har et fuldt finansieret kerneProgram med £2 millioner i reserver og en venteListe af finansiere; den marginale £5.000 bliver sandsynligvis tilføjet til reserver eller en lavere-prioritet-aktivitet. Estimeret giver-tilskrivbart resultat: minimalt — pengene ændrer ikke obviously, hvad der sker.
- **VelgørenhedsOrganisation D**: et lille, evidens-bakket program, der offentligt har angivet, det vil skulle afvise 200 mennesker næste kvartal uden en yderligere £50.000, og har rejst £42.000 af det. Den marginale £5.000 vil meget sandsynligt finansiere rigtig yderligere levering — lad os sige, 20 yderligere mennesker betjent, ved velgørenhedsOrganisationens egen angivne kostpris pr. modtager på £250.

Samme gave-størrelse, samme giver, radikalt forskellig giver-ROI — ikke fordi VelgørenhedsOrganisation C er en værre organisation (den kan have en bedre kostpris-pr.-resultat-figur samlet), men fordi dens marginale finansieringsGab allerede er lukket.

## Forbindelse til softwareudvikling

Giver-platforme og givning-anbefalings-redskaber viser alt for ofte kun organisation-niveau-effektivitetsMålinger (overheadRate, kostpris pr. modtager), fordi det er, hvad velgørenhedsOrganisationer offentliggør i årsRapporter, og hvad er lettest at trække ind i en sammenligningsTabel. At repræsentere giver-ROI ordentligt kræver et andet, sværere-at-source dataPunkt: en velgørenhedsOrganisations angivne aktuelle finansieringsGab eller "plads til mere finansiering," hvilket ændrer sig gennem året og er sjældent struktureret data. Platforme, der ønsker at støtte genuint giver-ROI-ræsonnement, behøver enten en direkte feed fra finansieringsGab-offentliggørelser (som GiveWell vedligeholder manuelt for sine anbefalede velgørenhedsOrganisationer) eller en explicit disclaimer, at en sammenligningsTabel viser organisatorisk effektivitet, ikke giver-tilskrivbarhed. Se [velgørenhedsOrganisations overheadRate](../velgørenhedsorganisations-overheadrate/) for målingen, giver-ROI oftest, og forkert, sammenblandes med.

## Faldgruber

- **At sammenblande velgørenhedsOrganisations-effektivitet med giver-tilskrivbarhed.** En velDrevet, lav-overhead velgørenhedsOrganisation kan stadig have en næsten-nul marginal giver-ROI, hvis den ikke er finansieringsBegrænset.
- **At ignorere funging.** Hvis en stor institutionel finansier ville have dækket gabet uanset, forskyder en individuel givers gave den finansiers penge snarere end at tilføje ny levering.
- **At antage lineær kostpris-effektivitet ved skala.** De letteste-at-nå modtagere betjenes ofte først; marginal kostpris pr. resultat stiger frekvent, da et program udvides, så ROI'en på det næste pund er ikke samme som ROI'en på det gennemsnitlige pund allerede brugt.
- **Intet angivet finansieringsGab.** En velgørenhedsOrganisation eller platform, der ikke kan sige, hvad de næste £X ville finansiere, kan ikke støtte en genuin giver-ROI-påstand, kun en gennemsnit-kostpris-en.

## Kilder

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
