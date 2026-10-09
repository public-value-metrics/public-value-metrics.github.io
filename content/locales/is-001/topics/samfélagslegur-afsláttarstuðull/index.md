# Samfélagslegur afsláttarstuðull

Samfélagslegur afsláttarstuðull umbreytir framtíðarkostnaði og -ávinningi í núvirði svo hægt sé að bera saman áætlanir með ávinning dreifðan yfir áratugi á sameiginlegum grunni. Green Book hjá HM Treasury skyldar lækkandi áætlun fest við 3,5% fyrstu 30 árin, byggða á Ramsey-jöfnunni — sérstök, vitnanleg tala sem hefur orðið að lifandi pólitískri og siðferðilegri deilu hvenær sem henni er beitt á skuldbindingar til langs tíma á borð við loftslagsstefnu eða innviði.

## Hvers vegna það skiptir máli

Pund af ávinningi sem berst eftir 30 ár er ekki jafn mikils virði og pund af ávinningi sem berst í dag, af ástæðum sem eru að hluta um hreina tímaforgangsröðun (fólk og samfélög kjósa góða hluti fyrr) og að hluta um vöxt (framtíðarsamfélag er væntanlega ríkara, svo pund skiptir það minna máli á jaðrinum). Annex 6 í Green Book leiðir út staðlaðan afsláttarstuðul Bretlands úr Ramsey-jöfnunni, sem sameinar hlutfall hreinnar tímaforgangsröðunar við væntan vaxtarhraða neyslu og teygni jaðarnytju neyslu, og skilar birtum stuðli 3,5% á ári fyrir ár 0–30, lækkandi samkvæmt birtri áætlun fyrir ár 31 og áfram (niður í 1% fyrir ár 301+). Þessi áætlun er til einmitt vegna þess að fastur 3,5% stuðull samsettur yfir öld myndi láta nær allan langtímaávinning — flóðavörn sem bjargar mannslífum eftir 80 ár, kolefnislækkun sem afstýrir skaða eftir 100 ár — líta út sem hverfandi á núvirtum mælikvarða, sem Treasury taldi ósennilega siðferðilega niðurstöðu fyrir raunverulega langlífa innviði og umhverfisákvarðanir.

Afsláttarstuðullinn er umdeildur einmitt vegna þess að valið er ekki hlutlaus tæknileg breyta: það felur í sér dóm um hve miklu samfélag ætti að fórna í dag fyrir fólk sem ekki er fætt. Stern Review on the Economics of Climate Change (2006) notaði afsláttarstuðul nærri núlli (hrein tímaforgangsröðun nærri 0,1%), og færði rök fyrir því að afsláttur á velferð komandi kynslóða á nokkru nálægt markaðsstuðlum sé siðferðilega óverjandi þegar skaðinn (hörmuleg loftslagsbreyting) er óafturkræfur. Gagnrýnendur — einkum William Nordhaus — héldu því fram að nærri-núll stuðull Stern ofmæti tilvik fyrir tafarlaus útgjöld til loftslagsmála með því að láta nánast hvaða núverandi kostnað sem er líta réttlætanlegan gegn varla-afsláttuðum framtíðarávinningi. Ágreiningurinn snerist ekki um stærðfræðina; hann snerist um hvers siðferðilegi rammi ætti að ákvarða stuðulinn, og hann er enn staðlað dæmi um hvers vegna afsláttarstuðullinn er stefnuval, ekki bara tryggingafræðilegt inntak.

## Stærðfræðin

Ramsey-jafnan sem liggur að baki stuðli Green Book:

```
r = ρ + η·g

þar sem:
  r = samfélagslegur afsláttarstuðull
  ρ = hlutfall hreinnar tímaforgangsröðunar (óþolinmæði + hamfaraáhætta)
  η = teygni jaðarnytju neyslu
  g = væntur árlegur vaxtarhraði neyslu á mann
```

Lækkandi áætlun Green Book (Annex 6, til skýringar — athugaðu núgildandi útgáfu fyrir nákvæma birta töflu):

```
Ár 0–30:    3,5%
Ár 31–75:   3,0%
Ár 76–125:  2,5%
Ár 126–200: 2,0%
Ár 201–300: 1,5%
Ár 301+:    1,0%
```

Núvirði framtíðarupphæðar:

```
PV = FV / (1 + r)^t
```

## Dæmi útreiknað

**Flóðavarnaframkvæmd**: verkefni skilar 10 milljónum £ af afstýrðu flóðatjóni á ári 40.

Með föstum 3,5% stuðli: PV = 10.000.000 / (1,035)^40 ≈ 2,52 milljónir £ — ávinningurinn lítur lítill út.

Með lækkandi áætlun Green Book (3,5% fyrir ár 0–30, 3,0% þar á eftir) samsetst útreikningurinn á 3,5% fyrstu 30 árin og 3,0% fyrir ár 31–40:

```
PV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ 2,65 milljónir £
```

Lækkandi áætlunin hækkar lítillega núvirði langtímaávinnings miðað við fastan háan stuðul — yfirlýstur tilgangur áætlunarinnar, því fastur 3,5% yfir öld myndi núvirða 100 milljóna £ ávinning á ári 100 niður í undir 3,3 milljónir £.

**Stafrænir innviðir**: skýjaflutningur hjá ríkinu sem kostar 4 milljónir £ núna er væntur að afstýra 500.000 £/ár í viðhaldskostnaði gamals kerfis í 15 ár. Á 3,5% er núvirði þeirrar árgreiðslu um það bil 500.000 £ × 11,52 (15 ára árgreiðslustuðull á 3,5%) ≈ 5,76 milljónir £ — vel umfram 4 milljóna £ kostnaðinn, jákvætt núvirt hreint virði sem myndi líta merkjanlega veikara út á barnalega völdum hærri stuðli (á 7% fellur sami árgreiðslustuðull í um 9,11, sem gefur 4,56 milljónir £, enn jákvætt en með mun þynnri jaðri).

## Tengsl við hugbúnaðarverkfræði

Flest hugbúnaðarviðskiptarök ná yfir 3–5 ár, vel innan fasta 3,5% bandsins, svo lækkandi áætlunin bítur sjaldan beint — en undirliggjandi agi skiptir máli fyrir hverja fjárfestingu hins opinbera í tækni með langan eignatíma (landsbundinn vettvang, gagnainnviðaáætlun, margra áratuga samning):

- Notaðu birtan stuðul Green Book frekar en innra „lágmarksávöxtunarviðmið“ fengið að láni úr einkafjármálum; endurskoðendur og yfirferðaraðilar Treasury munu búast við staðlaðri áætlun.
- Fyrir ávinning sem fellur til mörgum árum síðar (langtíma viðhaldssparnað vettvangs, samsett virði vistkerfis opinna gagna — sjá [verðmæti opinna gagna](../verðmæti-opinna-gagna/)) getur val á núvirðingu snúið viðskiptarökum úr jákvæðum í neikvæð; gerðu stuðulinn og tímaskeiðið að skýrum forsendum, ekki földum sjálfgefnum gildum.
- Þetta nærir beint [mat samkvæmt Green Book (fimm-tilvika líkanið)](../mat-samkvæmt-green-book/), fimm-tilvika líkanið sem formlega krefst núvirts sjóðstreymis, og [verðmat á velferð (WELLBY)](../verðmat-á-velferð/), þar sem sama núvirðingarspurningin vaknar fyrir ópeningalegan velferðarávinning.
- Sjá einnig [jafnræði milli kynslóða og sjálfbærniafsláttur](../jafnræði-milli-kynslóða-og-sjálfbærniafsláttur/) fyrir deilu Stern og Nordhaus beitt sérstaklega á fjárfestingar í umhverfis- og loftslagstækni.

## Gildrur

- **Að nota fastan stuðul fyrir mjög löng tímaskeið.** Lækkandi áætlun Green Book er til sérstaklega vegna þess að fastur stuðull vanmetur raunverulega langlífan ávinning; athugaðu hvaða band á við í stað þess að nota 3,5% sjálfgefið allan tímann.
- **Að líta á afsláttarstuðulinn sem siðferðilega hlutlausan.** Deila Stern og Nordhaus sýnir að stuðullinn felur í sér verðmætadóm um komandi kynslóðir; að breyta honum breytir því hvaða áætlanir líta réttlætanlegar út, svo hann ætti að vera tilgreindur og varinn, ekki falinn í sjálfgefnu gildi töflureiknis.
- **Að rugla samfélagslegum afsláttarstuðli saman við fjármagnskostnað einkaaðila.** Lántökukostnaður ríkisins og lágmarksávöxtunarviðmið einkageirans eru önnur hugtök en Ramsey-leiddur samfélagslegur stuðull, og að skipta öðru út fyrir hitt í opinberu mati skekkir yfirleitt niðurstöðuna í átt að því að ívilna skammtímaávöxtun.
- **Að núvirða raunstærðir og nafnstærðir ósamræmt.** Stuðull Green Book er raunstuðull (leiðréttur fyrir verðbólgu); að núvirða nafnsjóðstreymi með honum vanmetur núvirði verulega.

## Heimildir

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation“, Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. „The Economics of Climate Change: The Stern Review.“ HM Treasury, 2006.
- Nordhaus WD. „A Review of the Stern Review on the Economics of Climate Change.“ Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. „A Mathematical Theory of Saving.“ Economic Journal, 1928;38(152):543–559.
