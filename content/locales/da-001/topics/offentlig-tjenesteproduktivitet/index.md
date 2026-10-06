# Offentlig tjenesteproduktivitet

Offentlig tjenesteProduktivitet måler, hvor effektivt offentlig udgift omdanner input (personale, kapital, varer og tjenester) til kvalitetsJusterede output, for tjenester — sundhed, uddannelse, politi, socialOmsorg — der ikke har nogen markedsPris og derfor intet indtægtsTal at dele kostpriser ind i. UK Office for National Statistics har offentliggjort denne serie siden midten af 2000'erne, og den forbliver det mest metodologisk udviklede nationale forsøg på at besvare "bliver regeringen bedre eller værre til at omdanne penge til offentlige tjenester?"

## Hvorfor det betyder noget

I et marked er produktivitet (outputVærdi) / (inputKostpris), og outputVærdi er observerbar, fordi nogen betaler for det. En hofteOperation, en skolePlads, og en politiPatrulje har ingen salgsPris, så naivt kan du kun måle *input* (hvad blev brugt) — hvilket lokker kommentatorer til at behandle stigende offentlig udgift som automatisk dårligt, da mere input med flad overskriftsAktivitet ser ud som faldende produktivitet. ONS-metodologien, fastsat i dens "Sources and Methods"-publikationer for offentlig tjenesteProduktivitet, løser dette ved at konstruere et *output*-indeks fra aktivitetsVolumener (operationer udført, elever undervist, forbrydelser undersøgt) og derefter *kvalitetsJustere* det outputIndeks — for sundhed, inkorporerende overlevelsesRater og venteTider; for uddannelse, inkorporerende opnåelse; for politi, inkorporerende resultater som sagsLøsning — sådan at en tjeneste, der gør samme antal operationer, men opnår bedre overlevelsesRater, registrerer som mere produktiv, ikke blot som dyrere. Overskrifts-fundet, der gentager sig over ONS-udgivelser, er alvorligt for sektoren: britisk offentlig tjenesteProduktivitet faldt skarpt under COVID-19-pandemien og havde ved ONS's egne midt-2020'er-udgivelser stadig ikke genoprettet sig til 2019-niveauer i flere underSektorer inklusive sundhedsVæsen, selv da udgift steg — et gab, der omRammer "mere finansiering" og "mere produktivitet" som to helt separate spørgsmål.

## Beregningen

```
OutputIndeks (volumen) = Σ (aktivitet_i × relativ
                         enhedsKostprisVægt_i), basisÅr-
                         vægtet over alle tjenesteAktiviteter
                         (f.eks. hofteOperationer, grå-stær-
                         operationer, lægeKonsultationer),
                         analog til et Laspeyres-/Paasche-
                         volumenIndeks

KvalitetsJustering     = outputIndeks × kvalitetsJusterings-
                         faktor (f.eks. inkorporerende en
                         ændring i overlevelsesRater,
                         venteTider, opnåelse, eller recidiv
                         som en multiplikator på rå volumen)

InputIndeks            = Σ (arbejdsTimer × arbejdsKostprisVægt)
                         + (varer/tjenester kostpris,
                         deflateret) + (kapitalForbrug)

Samlet faktorProduktivitetsVækst = % ændring i kvalitets-
                                   justeret outputIndeks −
                                   % ændring i inputIndeks
```

## Gennemregnet eksempel

**Illustrativ NHS-akutSektor-produktivitetsBeregning** (strukturen følger ONS-metodologien):

```
År 1: outputVolumenIndeks = 100,0 (basisÅr), inputIndeks =
      100,0 → produktivitetsIndeks = 100,0

År 2: aktivitetsVolumen stiger 3,0% (flere operationer, flere
      aftaler) men gennemsnitlig venteTid forværres, hvilket
      anvender en kvalitetsJusterings-rabat på −1,0%
      KvalitetsJusteret outputIndeks = 100 × 1,030 × 0,990
      = 101,97

      Input stiger: personaleAntal +4,0%, andre kostpriser
      (deflateret) +1,5%, vægtet inputIndeks = 100 × 1,032
      = 103,2

ProduktivitetsVækst = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                     = 1,97% − 3,2% = −1,23 procentpoint

Tolkning: aktivitet steg, men input steg hurtigere og kvalitet
faldt en smule, så produktivitet — output pr. enhed input —
faldt, selv om "mere omsorg blev leveret."
```

Dette er netop det mønster ONS-udgivelser gentagne gange har rapporteret for dele af NHS post-pandemi: stigende udgift og stigende rå aktivitet eksisterende sammen med faldende målt produktivitet, når kvalitetsJustering og inputVækst begge tages i betragtning.

## Forbindelse til softwareudvikling

Offentlig tjenesteProduktivitet er befolkningsNiveau-analogen til ingeniørProduktivitetsDebatter (storyPoints leveret versus [DORA-målinger](../dora-målinger-for-offentlig-værdi/) versus [flowMålinger](../flowmålinger-i-statslig-levering/)): rå gennemstrømning uden en kvalitetsJustering er netop lige så misVisende på et hospital som "linjer kode leveret" er på et softwareTeam. Teams, der bygger præstationsDataPipelines for departementer, bør behandle kvalitetsJustering som et førsteKlasse, versioneret transformationsStadie, ikke en fodnote — fordi ONS's egen troværdighed afhænger af, den justering er transparent, reproducerbar, og revideret, når bedre kvalitetsData ankommer (ONS reviderer tidligere års produktivitetsEstimater, når underliggende kvalitetsData — f.eks. overlevelsesRater — finaliseres, så et nedStrøms-system, der forbruger disse statistikker, skal håndtere bagDaterede revisioner, ikke blot tilføje nye perioder). Det skærer også direkte med [samlet ejerskabsKostpris](../samlet-ejerskabskostpris-i-statslig-it/) og [AI-produktivitet i den offentlige sektor](../ai-produktivitet-i-den-offentlige-sektor/): et system, der øger rå aktivitetsVolumen uden at forbedre eller vedligeholde kvalitet, er ikke, på ONS's egen definition, en produktivitetsForbedring.

## Faldgruber

- **At behandle inputVækst som produktivitetsVækst.** Mere udgift finansierende mere personale producerer mere *aktivitet*, ikke mere *produktivitet*, med undtagelse af hvor output pr. enhed input også stiger — de to sammenblandes routinemæssigt i politisk kommentar.
- **At ignorere kvalitetsJustering helt.** Et outputIndeks bygget kun fra rå aktivitetsTællinger vil vise "produktivitetsGevinster" fra at gøre mere af noget lavereVærdi eller lavereKvalitet; ONS's kvalitetsJustering eksisterer specifikt for at fange dette.
- **At sammenligne produktivitetsIndekser over underSektorer uden matchende metodologi-vintage.** Sundheds-, uddannelses-, og politi-produktivitet er hver bygget fra forskellige aktivitets- og kvalitetsDataKilder på forskellige revisionsCykler — en naiv tvær-sektor-sammenligning sammenligner inkompatible instrumenter.
- **At læse et enkelt års produktivitetsFald som en permanent tendens.** Pandemi-æra- og post-pandemi-produktivitetsTal har vist signifikant år-til-år-volatilitet, da kvalitetsData (f.eks. venteLister, elektiv genOpretning) selv flyttede sig; ONS advarer konsekvent mod overTolkning af enkelt-år-bevægelser.

## Kilder

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
