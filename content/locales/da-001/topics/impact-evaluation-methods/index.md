# Effektevalueringsmetoder

Effektevalueringsmetoder er de statistiske og eksperimentelle design brugt til at estimere, hvad en politik eller et program faktisk forårsagede, distinkt fra, hvad der ville have sket alligevel — randomiserede kontrollerede forsøg (RCT'er), difference-in-differences, propensity score matching, og regressionsDiskontinuitetsDesign er de fire mest almindeligt brugte i britisk offentlig politik. De eksisterer, fordi de fleste statslige interventioner ikke kan testes i et laboratorium: du kan ikke randomisere, hvilken by der får en ny busRute, på den måde du kan randomisere, hvilken patient der får en medicin, så disse metoder låner samme kausale logik uden altid at kræve tilfældig tildeling.

## Hvorfor det betyder noget

HM Treasurys Magenta Book, Annex A om kvasi-eksperimentelle metoder, er den britiske regerings canoniske vejledning om at vælge mellem disse design, og organer som Education Endowment Foundation og What Works Centre for Local Economic Growth institutionaliserer et evidensHierarki bygget omkring dem — RCT'er, hvor randomisering er mulig og etisk, kvasi-eksperimentelle design, hvor det ikke er. Valget af metode er ikke en teknisk eftertanke: det bestemmer, om en evaluering kan besvare "forårsagede programmet dette?" eller kun "skete dette efter programmet startede?", hvilket er samme spørgsmål [kontrafaktisk analyse](../counterfactual-analysis/) er bygget til at tvinge praktikere til at stille, før nogen evaluering bestilles.

## Beregningen

```
RCT:
  Effekt = gennemsnit(resultat | behandlingsGruppe) −
          gennemsnit(resultat | kontrolGruppe)
  (gyldig fordi tildeling til behandling er tilfældig)

Difference-in-differences (DiD):
  Effekt = [resultat_efter(behandlet) −
          resultat_før(behandlet)] − [resultat_efter(kontrol)
          − resultat_før(kontrol)]
  (kræver en "parallelle tendenser"-antagelse: behandlet og
   kontrol ville have bevæget sig sammen uden interventionen)

Propensity score matching (PSM):
 1. Estimér P(behandling = 1 | kovariater X) for hver enhed
    → propensityScore
 2. Match behandlede enheder med ikke-behandlede enheder med
    lignende propensityScorer
 3. Effekt = gennemsnit(resultat | behandlet) −
    gennemsnit(resultat | matchet kontrol)

RegressionsDiskontinuitetsDesign (RDD):
  Effekt = spring i resultat observeret ved
          berettigelsesTærsklen, sammenligning af enheder
          lige over versus lige under afSkæringen
```

## Gennemregnet eksempel

**Lokal myndighed (difference-in-differences for et program for familier i vanskeligheder)**: resultatet er skoleFremmøde. Det behandlede område bevæger sig fra 84% til 89% fremmøde (+5 procentpoint) over programPerioden; et sammenligneligt men ubehandlet område bevæger sig fra 85% til 87% (+2 procentpoint) over samme periode. DiD-effektEstimat: 5 − 2 = +3 procentpoint tilskrivbart programmet. Anvendt på en kohorte af 2.000 elever i det behandlede område er dette konsistent med omkring 60 yderligere elever (3% × 2.000), der når den højere fremmødeKategori, en ekstrapolering der bør rapporteres med dens parallelle-tendenser-forbehold, ikke som en præcis hovedTælling.

**Velgørenhedsorganisation (propensity score matching for en beskæftigelighedsVelgørenhedsOrganisation)**: 300 programDeltagere matches med 300 individer fra et større administrativt datasæt ved brug af propensityScorer bygget fra alder, tidligere beskæftigelsesHistorie, og kvalifikationsNiveau. Tolv-måneders beskæftigelsesrate: matchet behandlet gruppe 46%, matchet sammenligningsGruppe 33%. PSM-effektEstimat: 46% − 33% = +13 procentpoint tilskrivbart programmet, betinget af ingen uobserveret confounder (som motivation), der driver både deltagelse og resultat.

## Forbindelse til softwareudvikling

Om nogen af disse design er mulige senere afhænger stærkt af dataIngeniørBeslutninger truffet tidligt. RDD behøver en nøjagtigt registreret løbende variabel og en genuint ren berettigelsesAfSkæring; DiD behøver sammenlignelige panelData over tid for både behandlede og sammenligningsOmråder, hvilket betyder konsistente joins over systemer og år; PSM behøver rige baseline-kovariatData fanget før behandling, ikke rekonstrueret efterfølgende. En dataModel designet sammen med en [forandringsTeori](../theory-of-change/) og [logikModel](../logic-model/) fra starten — fangende baseline-kovariater, datoer, og sammenligningsGruppe-berettigede registre — er det, der gør en stringent effektEvaluering mulig senere, i stedet for en dyr efterfølgende hastVærk. Se [effektEvaluering versus procesEvaluering](../impact-evaluation-vs-process-evaluation/) for det komplementære spørgsmål, disse metoder ikke besvarer alene.

## Faldgruber

- **At tvinge en RCT, hvor umuligt eller uetisk**, eller omvendt aldrig overveje et kvasi-eksperimentelt design, når en genuin mulighed for en — en politikAfSkæring, en fasent udrulning — var tilgængelig og ubrugt.
- **At ignorere parallelle-tendenser-antagelsen i DiD.** Hvis sammenligningsOmrådet allerede divergerede fra det behandlede område før interventionen, er to-punkt-sammenligningen kontamineret; kontrollér for-tendenser, ikke blot før/efter.
- **At kun matche på observerede kovariater i PSM.** Uobserveret selektion, som deltagerMotivation, kan biase estimatet, selv når observerede kovariater er godt balancerede.
- **ManipuLering af den løbende variabel i RDD.** Hvis mennesker kan påvirke deres score til at falde lige inden for en berettigelsesTærskel, isolerer diskontinuiteten ikke længere en kausal effekt.

## Kilder

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
