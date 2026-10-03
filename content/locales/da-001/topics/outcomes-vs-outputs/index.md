# Resultater versus output

Et output er det direkte, optællelige produkt af en aktivitet — det eksisterer i det øjeblik levering sker, uanset hvilken effekt det har. Et resultat er ændringen, der følger for de mennesker, det sted, eller det system, der er involveret. "500 mennesker deltog i en jobSøgningsWorkshop" er et output: det er sandt, selv om ingen af dem finder arbejde. "500 menneskers beskæftigelsesUdsigter forbedredes" er en resultatPåstand, og det kræver evidens for ændring, ikke blot evidens for deltagelse — forvirringen der producerer flere misvisende bevillingsrapporter end næsten noget andet målingsFejl i sektoren.

## Hvorfor det betyder noget

HM Treasurys Magenta Book og finansierer som National Lottery Community Fund kræver begge resultatRapportering specifikt fordi output er, hvad programmer rapporterer som standard: de er billige at tælle, altid tilgængelige, og ser altid positive ud. En outputTælling kan litterært aldrig gå ned som et resultat af, at programmet mislykkes — flere sessioner leveret er altid "mere", mens et resultat kan afsløre, at et program ikke fungerer. National Audit Office har gentagne gange kritiseret statslige programmer for at rapportere aktivitetsNiveauer, som om de var evidens for succes; et softwareSystem, der kun gør output lette at rapportere, forstærker dette som standard, fordi output ikke kræver nogen opfølgningsDataSamling, og resultater gør.

## Beregningen

Der er ingen formel, men der er en pålidelig test til at klassificere en måling:

```
OutputTest:  er det optælleligt ved leveringsPunktet, sandt
            selv om modtageren er upåvirket?
ResultatTest: kræver det en før/efter- eller med/uden-
            sammenligning for at være meningsfuldt?

Hvis et tal kan være sandt med nul fordel for nogen, er det
et output.
```

Dette sidder inden i den bredere [logikModel](../logic-model/)-kæde og afhænger af resultatLedene defineret i en [forandringsTeori](../theory-of-change/); at omdanne et resultat til penge bruger metoderne i [socialt afkast på investering](../social-return-on-investment/).

## Gennemregnet eksempel

**Lokal myndighed (beskæftigelsesStøtte)**: output — 500 mennesker deltog i jobSøgningsWorkshops. Resultat — ved 12-måneders opfølgning er 140 af disse 500 (28%) i varig beskæftigelse (6+ måneder). En sammenligningsGruppe med lignende karakteristika, men ingen programAdgang, har en 15% baselineBeskæftigelsesrate over samme periode. Netto resultatForhøjelse: 28% − 15% = 13 procentpoint, så en estimeret 500 × 0,13 = 65 yderligere mennesker er i arbejde, der ellers ikke ville have været — det tilskrivbare resultat, distinkt fra enten de 500-deltagelsesTal eller det rå 140-beskæftigelsesTal.

**Velgørenhedsorganisation (læsefærdighedsVelgørenhedsOrganisation)**: output — 1.200 læseSessioner leveret til 300 børn. Resultat — gennemsnitlig læseAlder forbedredes med 8 måneder over en 6-måneders periode, mod en forventet 6-måneders naturlig progression-baseline. Netto resultatGevinst: 8 − 6 = 2 måneders yderligere læseAlderforbedring pr. barn tilskrivbar programmet, ikke det fulde 8-måneders-tal.

## Forbindelse til softwareudvikling

HændelsesLogge og transaktionsSystemer instrumenterer output næsten automatisk — sideVisninger, sessioner, tickets lukket, aftaler booket — fordi de genereres af systemet, der gør sit job. Resultater kræver en dataModel, der fanger samme individ på et senere tidsPunkt mod en baseline eller sammenligning, hvilket skal designes bevidst: opfølgningsUndersøgelser, linkede administrative registre, eller en sammenligningsKohorte. Et rapporteringsRedskab, der kun understøtter det førnævnte, vil stilfærdigt styre en organisation mod kun-output-rapportering, uanset hvad finansieren bad om. Se [logikModel](../logic-model/) for, hvor resultater sidder i ansvarlighedsKæden, [kostpris-pr.-resultat](../cost-per-outcome/) for at omdanne denne distinktion til en enhedsKostprisMåling, og [KPI'er i den offentlige sektor](../public-sector-kpis/) for det bredere mønster af målingsValg.

## Faldgruber

- **At rapportere output, som om de var resultater.** "500 mennesker deltog" antyder fordel uden at demonstrere den; mærk deltagelse explicit som et output.
- **Ingen baseline eller sammenligningsGruppe.** Et resultatTal uden en kontrafaktual — se [kontrafaktisk analyse](../counterfactual-analysis/) — kan ikke skille programEffekt fra, hvad der ville have sket alligevel.
- **At optimere for den finansierede måling.** Når finansiering er knyttet til outputVolumen, maksimerer leveringsTeams rationelt deltagelse over varig ændring, en Goodharts-lov-fejlTilstand.
- **ResultatHvidvask.** At omMærke en outputMåling med resultat-lydende sprog ("engagementsResultater: 500 deltagere") uden nogen opfølgningsMåling bag den.

## Kilder

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
