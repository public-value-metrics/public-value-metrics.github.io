# Skyggepris

En skyggepris er en estimeret værdi tildelt et gode, en ressource, eller en eksternalitet, der ikke har nogen observerbar markedspris, eller hvis markedspris er fordrejet og ikke afspejler dens sande samfundsmæssige værdi. Statslig vurdering afhænger af et lille sæt officielle skyggepriser — kulstof, ikke-arbejdsTid, arbejdsløs arbejdskraft — offentliggjort centralt, så hvert departement bruger samme tal.

## Hvorfor det betyder noget

Skyggepriser eksisterer, fordi [samfundsøkonomisk cost-benefit-analyse](../social-cost-benefit-analysis/) ikke kan fungere uden en monetær værdi for hver kostpris og fordel, og flere af de mest konsekvensfulde — et ton kulstof udstødt, en times pendlertid, en times ellers arbejdsløs arbejdskraft — har ingen markedspris overhovedet, eller en markedspris, der fejlrepræsenterer deres sande samfundsmæssige kostpris. HM Treasury og Department for Energy Security and Net Zero offentliggør i fællesskab skyggeprisen på kulstof brugt over hele britisk statslig vurdering (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), udledt ikke fra nogen kulstofMarkedspris, men fra en mål-konsistent tilgang: kulstofværdien sættes til den marginale afhjælpningsKostpris, der er nødvendig for at nå Storbritanniens lovfæstede kulstofBudgetter, hvilket er en fundamentalt anderledes logik end at observere, hvad kulstof faktisk handles for på EU eller UK Emissions Trading Scheme.

Skyggelønnen følger en lignende logik på arbejdsKraftSiden. At beskæftige nogen, der ellers ville have været arbejdsløs, koster ikke samfundet deres fulde løn — en del af den løn er en overførsel fra opgivne ydelsesBetalinger og tabt fritids-/søgeTid snarere end et nyt netto-træk på samfundets ressourcer — så Green Book-vejledning sætter en skyggepris under markedslønnen for arbejdskraft trukket fra arbejdsløshed, hvilket afspejler den sande alternativkostning af den arbejdskraft (se [alternativkostning i offentlige udgifter](../opportunity-cost-in-public-spending/)) snarere end dens markedspris.

## Beregningen

```
Skyggepris på kulstof (illustrativ struktur, aktuelle værdier
fra det officielle BEIS/DESNZ-kulstofværdiRedskab — brug ikke
forældede tal):
  Handlet sektor-værdi: informeret af ETS-tilladelsesPrisBaner
  Ikke-handlet sektor (mål-konsistent)-værdi: sat til den
    marginale afhjælpningsKostpris nødvendig for at nå
    lovfæstede kulstofBudgetter, stigende over tid, når
    nemmere afhjælpningsMuligheder udtømmes
  Anvendt som: £/ton CO2e × ton udstødt eller afhjulpet af
    muligheden, diskonteret ved den samfundsmæssige
    diskonteringsrate for fremtidige år

Skyggelønnen (SWR):
  SWR = Markedsløn − (værdi af opgivet fritid/søgeTid sparet
                      + værdi af velfærdsBetalinger ikke
                      længere betalt)
  Typisk udtrykt som en fraktion af markedslønnen (f.eks. SWR
    = 0,6 × markedsløn i et højArbejdsLøshedsOmråde, i henhold
    til Green Book Annex A-vejledning om arbejdsMarkeder med
    reservekapacitet)
```

Begge tal er politiske konventioner sat centralt, ikke empiriske markedsObservationer — hele pointen med en skyggepris er at substituere for et manglende eller fordrejet marked, så en vurdering, der bruger en, skal citere den aktuelle officielle kilde snarere end at udlede sit eget tal, netop så hvert departements vurdering er sammenlignelig.

## Gennemregnet eksempel

**National regering**: en oversvømmelsesforsvarsprojektvurdering estimerer, at det undgår 400 ton CO2e-udstødning pr. år (gennem reduceret brug af nødudstyr og reduceret indlejret kulstof fra undgået genopbygning) over en 30-årig vurderingsLivstid, sammenlignet mod en "gør minimum"-baseline.

```
Illustrativ skyggepris på kulstof: £280/ton CO2e (år 1,
  stigende over vurderingsPerioden i henhold til den
  officielle ikke-handlede kulstofValuesSkema)
Kulstoffordel år 1 = 400 × £280 = £112.000
```

Fordi det officielle skema har kulstofværdien *stigende* over vurderingsPerioden (afspejlende stramere kulstofBudgetter), skal analytikeren anvende den korrekte årSpecifikke værdi for hvert år af det 30-årige flow, ikke en flad rate — at bruge år 1-værdien hele vejen igennem ville underdrive senere-års-fordele og fordreje rangeringen mod alternative oversvømmelsesforsvars-design med forskellige kulstofProfiler.

**Lokal myndighed**: en kommunes beskæftigelsesStøtteProgram for langtidsArbejdsLøse borgere placerer 150 personer i job, der betaler £11/time. At værdisætte dette ved brug af den fulde markedsløn ville kreditere programmet med £11 × arbejdstimer som en samfundsmæssig fordel, men skyggelønsTilgangen anerkender, at disse ikke var arbejdere trukket fra andre job — den sande alternativkostning af deres arbejdskraft før programmet var lav.

```
Markedsløn: £11,00/time
Skyggeløn (illustrativ, høj lokal arbejdsLøshed): 0,6 ×
markedsløn = £6,60/time
Netto samfundsmæssig fordel tilskrivbar pr. arbejdstime ≈
£11,00 − £6,60 = £4,40/time
  (den "ekstra" værdi skabt ved at flytte genuint ledig
   arbejdskraft ind i produktion, i modsætning til lønnen
   selv, som stort set er en overførsel)
```

Dette er hvorfor vurderinger af beskæftigelsesProgrammer i højArbejdsLøshedsOmråder kan vise en positiv netto samfundsmæssig værdi, selv når samme program, kørt i et fuldbeskæftigelsesOmråde, hvor forskudt arbejdskraft blot ville blive trukket fra andre job, ikke ville.

## Forbindelse til softwareudvikling

Skyggeprissætning rører sjældent softwarelevering direkte, men det betyder noget, hver gang en businesscase påstår en kulstof- eller samfundsmæssig fordel fra en IT-ændring — en dataCenterKonsolidering, der påstår kulstofBesparelser, eller en papirLøs-tjeneste, der påstår undgået udskrivnings- og postkulstof, skal bruge den aktuelle officielle skyggepris på kulstof snarere end et opfundet tal, og skal anvende det korrekte år-for-år-skema snarere end en flad rate, netop som med enhver anden Green Book-vurderingsInput. Se [samlede ejerskabsomkostninger i statslig IT](../total-cost-of-ownership-in-government-it/) og [offentlig sektors cybersikkerhedsVærdi](../public-sector-cybersecurity-value/), som begge ofte behøver en skyggepris for en svær-at-pengegøre input (brudRisiko, nedetid) sammen med direkte kostprisSatte elementer.

## Faldgruber

- **At bruge et forældet kulstof- eller lønTal.** Begge værdier revideres periodisk af central vejledning; en vurdering bygget på et forkastet tal vil ikke overleve Treasury-granskning.
- **At anvende en flad skyggeKulstofPris over en flerDekade-vurdering.** Det officielle skema stiger over tid; at bruge år 1's værdi hele vejen igennem fejlAngiver profilen af fordele eller kostpriser.
- **At forveksle skyggelønnen med en rabat på arbejderens faktiske løn.** Skyggelønnen justerer *vurderingens* værdisætning af arbejdskraftInputtet, ikke lønnen, arbejderen faktisk betales — at sammenblande de to inviterer (fejlagtigt) at retfærdiggøre under-markedsLøn.
- **At udlede en skræddersyet skyggepris i stedet for at bruge den officielle.** Skyggepriser er politiske konventioner netop, så vurderinger er sammenlignelige over departementer; et lokalt opfundet tal, hvor godt argumenteret det end er, bryder den sammenlignelighed.

## Kilder

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
