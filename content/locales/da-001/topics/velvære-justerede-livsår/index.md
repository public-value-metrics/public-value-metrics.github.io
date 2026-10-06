# Velvære-justerede-livsår (WELLBY)

En WELLBY er et yderligere point af livsTilfredshed, på den standard 0-10-velvære-skala, for en person for et år. Det er den strukturelle analog til QALY brugt i sundhedsØkonomi — en enkelt enhed, der lader dig sammenligne interventioner, hvis resultater ikke har andet i fælles — men bygget på subjektivt velvære snarere end kliniske sundhedsTilstande, og fastsat i HM Treasurys "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021).

## Hvorfor det betyder noget

Kostpris-fordel-vurdering behøver en fælles enhed for at sammenligne en ungdomsKlub-bevilling mod et vejSikkerheds-skema mod en mentalSundheds-tjeneste, ingen af hvilke deler en resultatMåling. SundhedsØkonomi løste dette for kliniske interventioner med QALY: et kvalitetsJusteret leveÅr, vægtet fra 0 (død) til 1 (fuld sundhed). HM Treasurys velvære-vejledning udvider samme logik til ikke-sundheds-offentlig-udgift, ved brug af ONS's harmoniserede liv-tilfredshed-spørgsmål ("Generelt, hvor tilfreds er du med dit liv i disse dage?", besvaret 0-10) som resultatStigen i stedet for en sundhedsTilstand-indeks. En WELLBY på 1 betyder en persons livsTilfredshed, der stiger med et helt point for et år (eller, ækvivalent, ti menneskers tilfredshed, der stiger med 0,1 point hver for et år — WELLBY'er summer over en befolkning på den måde, QALY'er gør). HM Treasurys vejledning sætter en illustrativ monetær værdi pr. WELLBY (omkring £13.000, 2019/20-priser) udLedt ved at forEne subjektivt-velvære-data med andre tilgange til værdien af et leveÅr, og giver vurderere en måde at pengegøre resultater — ensomhedsReduktion, fællesskabsKohæsion, grøn-areal-adgang — [velfærdsVurderings](../velfærdsvurdering/)-teknikker tidligere kun kunne beskrive, ikke sammenligne på fælles fodslag med sundheds- eller sikkerheds-udgift.

## Beregningen

```
WELLBY = Δ livsTilfredshed (0-10-skala) × antal år, ændringen
        persisterer (summeret over alle påVirkede mennesker)

PengegjortVelværeFordel = WELLBY'er genereret × værdi pr.
                          WELLBY (HMT-referenceVærdi)

cf. QALY = Δ sundhedsTilstand-nytte (0-1-skala) × år levet i
          den tilstand
```

0-10-tilfredsheds-skalaen og 0-1-QALY-nytte-skalaen er ikke udSkifteliege uden et konverteringsSkridt; HM Treasurys vejledning diskuterer forEning af de to, sådan at, for eksempel, en sundhedsIntervention vurderet i QALY'er og en social intervention vurderet i WELLBY'er ikke stille dobbelttælles eller forbliver uSammenlignelige inden for samme [Green Book-vurdering](../green-book-vurdering/).

## Gennemregnet eksempel

**Lokal myndigheds ensomhedsTjeneste**: et venskabs-skema betjener 400 isolerede ældre indbyggere. OpFølgnings-undersøgelser viser gennemsnitlig livsTilfredshed stiger fra 5,2 til 6,0 (en gevinst af 0,8 point), og effekten estimeres at persistere for 2 år, før den fader.

```
WELLBY'er = 400 mennesker × 0,8 point × 2 år = 640 WELLBY'er

PengegjortVærdi = 640 × £13.000 = £8.320.000
```

Mod en årlig program-kostpris på £300.000 (£600.000 over 2 år) er fordel-kostpris-forholdet groft 8.320.000 / 600.000 ≈ **13,9:1** — en figur, der nu kan sidde i samme vurderingsTabel som et sundheds-skemas kostpris-pr.-QALY-afVærget eller et transport-skemas rejseTid-besparelser.

**VelgørenhedsOrganisation, mindre skala**: et fællesskabs-kunst-program når 50 deltagere med en målt tilfredsheds-gevinst af 0,3 point, varende 1 år.

```
WELLBY'er = 50 × 0,3 × 1 = 15 WELLBY'er
PengegjortVærdi = 15 × £13.000 = £195.000
```

## Forbindelse til softwareudvikling

- Enhver borgerVendt tjeneste, der allerede indsamler et liv-tilfredshed- eller velvære-undersøgelses-item (mange lokal-myndighed- og sundheds-og-omsorgs-platforme gør, følgende ONS's fire standard-velvære-spørgsmål), kan beregne WELLBY'er direkte fra eksisterende dataPipelines snarere end at bestille skræddersyet økonomisk evaluering for hver tjenesteÆndring.
- WELLBY'er giver ingeniørTeams, der bygger for [Social Value Act](../loven-om-social-værdi/)-rapportering eller [socialt afkast på investering](../socialt-afkast-på-investering/), en nationalt standardiseret, HM-Treasury-godkendt nævner, der undgår proliferationen af skræddersyede "impact-scores," der ikke kan sammenlignes over kontrakter eller leverandører.
- Fordi WELLBY'er er additive over mennesker og tid, komponerer de rent ind i den type befolkningsNiveau-resultat-sporing brugt i [resultat-baseret-ansvarlighed](../resultat-baseret-ansvarlighed/)-systemer — et tjenesteDashboard kan rapportere kumulative WELLBY'er genereret pr. kvartal på den måde, et sundhedsSystem rapporterer QALY'er opnået.

## Faldgruber

- **At antage selvRapporterede tilfredsheds-gevinster er helt tilskrivbare interventionen.** Uden en kontrafaktual (sammenligningsGruppe eller før-/efter-design med kontroller) kan du ikke skille WELLBY-gevinsten fra generelle tendenser; se [kontrafaktisk analyse](../kontrafaktisk-analyse/).
- **At blande WELLBY'er og QALY'er i en total uden forEning.** HM Treasurys vejledning er explicit, at de to bruger forskellige skalaer og forskellige underliggende teorier om værdi; at summere dem naivt dobbelttæller overlappende velfærd.
- **At bruge referenceVærdien ukritisk.** £-pr.-WELLBY-figuren er et nationalt gennemsnits-estimat med rigtige uSikkerheds-bånd; HM Treasury-vejledning anbefaler sensitivitets-analyse, ikke at behandle den som en fast vekselKurs.

## Kilder

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
