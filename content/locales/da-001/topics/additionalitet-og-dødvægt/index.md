# Additionalitet og dødvægt

Additionalitet spørger, om en intervention forårsagede et resultat, der ellers ikke ville have fundet sted. Dødvægt er dens spejl: den del af et resultat, der ville have forekommet alligevel, selv uden programmet, bevillingen, eller subsidiet. Næsten enhver effektpåstand fra et statsligt program eller en velgørenhedsorganisation overdriver sin effekt, før dødvægt trækkes fra, hvilket er, hvorfor britisk evalueringsvejledning behandler det som den første og vigtigste justering af ethvert overskriftstal.

## Hvorfor det betyder noget

"Vi støttede 500 virksomheder i at vokse" lyder som en bedrift, men hvis 300 af disse virksomheder ville have vokset alligevel — fordi den lokale økonomi var i opsving, fordi de havde andre finansieringskanaler, fordi de allerede var på en vækstbane, før programmet startede — er programmets sande additionelle bidrag 200, ikke 500. HM Treasurys Magenta Book og den mangeårige HM Treasury/BIS "Additionality Guide" (udviklet oprindeligt til regionale udviklings- og regenereringsprogrammer og bredt anvendt i britisk statsevaluering siden) formaliserer dødvægt som den indledende justering i den standard nettoeffektsekvens: brutto effekt minus dødvægt, minus forskydning, minus lækage, justeret for multiplikatoreffekter, er lig nettoadditionel effekt. At springe dette trin over er den enkelte mest almindelige måde, offentlige og sociale sektorers effektpåstande opblæses, forsætligt eller ikke — et bevillingsprogram, der kun måler brutto deltagerresultater, uden en sammenligningsgruppe, kan ikke skelne sin egen effekt fra, hvad der ville have sket alligevel.

Dødvægt er ikke en fast procentdel; den afhænger helt af kontrafaktualen for den specifikke befolkning og intervention (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)). Engelske regionaludviklingsevalueringer under de tidligere Regional Development Agencies fandt almindeligvis dødvægtsrater i intervallet 20–60% afhængigt af typen af erhvervsstøtte, hvilket er hvorfor troværdige programevalueringer rapporterer et dødvægt-justeret interval snarere end et enkelt antaget tal, og hvorfor finansierer som National Lottery Community Fund og Big Society Capital kræver, at bevillingsmodtagere explicit adresserer dødvægt i resultatrapportering snarere end at rapportere brutto deltagerantal.

## Beregningen

Den standard nettoeffektjusteringssekvens, som fastsat i britisk evalueringsvejledning (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF og strukturfondsevalueringsvejledning):

```
Brutto resultat
  − Dødvægt       (hvad der ville have sket alligevel)
  − Forskydning   (aktivitet/fordel flyttet fra et andet
                   sted, ikke skabt — se forskydning-og-
                   tilskrivning)
  − Lækage        (fordel, der tilfalder uden for
                   målgruppen/-området)
  × Multiplikator  (yderligere indirekte/induceret
                    økonomisk aktivitet, hvor positiv)
  = Nettoadditionel effekt
```

Dødvægtsrate som en andel:

```
Dødvægtsrate = resultater, der ville have forekommet uden
               interventionen / samlede brutto resultater
               observeret

Nettoadditionelle resultater = Brutto resultater × (1 −
                               Dødvægtsrate)
```

## Gennemregnet eksempel

**Erhvervsstøttebevillingsprogram**: en regional bevillingsordning rapporterer 500 støttede virksomheder, der øgede beskæftigelsen det følgende år, et gennemsnit på 3 job hver — en brutto påstand på 1.500 job.

En matchet sammenligningsgruppe af lignende ikke-støttede virksomheder (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)) viser, at 40% af de støttede virksomheders beskæftigelsesvækst ville have sket alligevel, baseret på hvordan den matchede gruppe klarede sig over samme periode.

```
Dødvægtsrate = 40%
Nettoadditionelle job = 1.500 × (1 − 0,40) = 900 job
```

Programmets ærligt rapporterbare bedrift er 900 job, ikke 1.500 — en 40% reduktion rent fra dødvægtsjusteringen, før forskydning eller lækage overhovedet overvejes.

**Velgørenhedsbeskæftigelsesprogram**: en velgørenhedsorganisation placerer 200 langtidsarbejdsløse i job til en kostpris på £600.000 (£3.000 pr. placering, brutto). Nationale arbejdsmarkedsdata viser, at uden nogen intervention finder omkring 15% af en sammenlignelig langtidsarbejdsløs kohorte arbejde inden samme periode gennem naturlig jobmarkedsomsætning.

```
Dødvægtsrate = 15%
Nettoadditionelle placeringer = 200 × (1 − 0,15) = 170
Sand kostpris pr. additionel placering = £600.000 / 170 ≈
£3.529
```

Bruttotallet for kostpris pr. placering (£3.000) underdriver den reelle kostpris for velgørenhedsorganisationens additionelle bidrag med omkring 15%.

## Forbindelse til softwareudvikling

Additionalitet og dødvægt betyder direkte noget for alle, der bygger effektmålings- eller bevillingsstyringssoftware til den offentlige eller sociale sektor:

- Resultatrapporteringssystemer bør fange en sammenligningsgruppe eller baseline ved design, ikke blot deltagerresultater — at eftermontere en kontrafaktual efter et system er lanceret uden en er langt sværere end at bygge fangsten ind fra starten (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)).
- Dashboards, der kun rapporterer brutto deltagerantal, vil systematisk overdrive effekt til finansierer og tilsynsorganer; hvor dødvægtsestimater eksisterer (fra evalueringslitteratur eller en sammenligningsgruppe), bør softwaren eksponere nettoaf-dødvægt-tallet sammen med bruttoen, ikke i stedet for den.
- Dette forbinder direkte til [social afkast på investering](../socialt-afkast-på-investering/), hvis SROI-forhold kun er troværdigt, når dødvægt (og forskydning) er trukket fra de påståede brutto resultater — en SROI-beregner, der udelader dette trin, vil producere opblæste forhold, der ikke overlever granskning.

## Faldgruber

- **At rapportere brutto resultater som om de alle var additionelle.** Dette er den enkelte mest almindelige effektmålingsfejl i bevillings- og programrapportering; spørg altid "ville dette være sket alligevel?" før offentliggørelse af et overskriftstal.
- **At antage, at en enkelt dødvægtsprocent gælder alle steder.** Dødvægt varierer enormt efter sektor, befolkning, og lokale økonomiske forhold; brug en sammenligningsgruppe eller sektorspecifik evidens snarere end at genbruge et tal fra en urelateret evaluering.
- **At forveksle dødvægt med forskydning.** Dødvægt handler om kontrafaktiske resultater for samme deltagere; forskydning handler om effekter på andre mennesker eller steder — se [forskydning og tilskrivning](../forskydning-og-tilskrivning/). At sammenblande de to fører til dobbelttælling eller underregistrering af justeringen.
- **Selvrapporteret dødvægt fra deltagere.** At spørge modtagere "ville dette være sket uden vores hjælp?" producerer systematisk lave dødvægtsestimater (deltagere har tendens til at kreditere programmet); en uafhængig sammenligningsgruppe er langt mere pålidelig.

## Kilder

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
