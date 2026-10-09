# Samfélagsleg kostnaðar- og ábatagreining (SCBA)

Samfélagsleg kostnaðar- og ábatagreining umbreytir hverjum kostnaði og ábata stefnu eða áætlunar — á markaði og utan hans — í sameiginlega peningaeiningu, núvirðir framtíðarflæði og jafnar þau saman til að skila einni tölu: gerir þessi tillaga samfélagið betur sett, og um hve mikið?

## Hvers vegna það skiptir máli

SCBA er sjálfgefna megindlega aðferðin í hagræna tilviki [mat samkvæmt Green Book (fimm-tilvika líkanið)](../mat-samkvæmt-green-book/): leiðsögn HM Treasury krefst þess að tillögur sýni jákvætt núvirt hreint samfélagslegt virði (NPSV) hvar sem unnt er að meta ávinning til fjár á trúverðugan hátt, með greiðsluvilja sem grundvallarverðmatsreglu fyrir gæði utan markaðar (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kafli 5). Aginn sem hún framfylgir er að „samfélagsleg“ kostnaðar- og ábatagreining er ekki sama æfing og fjárfestingarmat í einkageiranum: hún verður að taka með kostnað og ávinning sem fellur á þriðju aðila sem eru ekki aðilar að viðskiptunum (ytri áhrif), hún verður að nota [samfélagslegur afsláttarstuðull](../samfélagslegur-afsláttarstuðull/) fremur en viðskiptalegan fjármagnskostnað, og hún ætti að beita [dreifingarvigtun](../dreifingarvigtun/) þar sem pund skiptir meira máli fyrir fátækara heimili en ríkara.

Þar sem SCBA bregst er einmitt þar sem gagnrýnendur hennar búast við: gæði án markaðshliðstæðu — hreint loft, félagsleg samheldni, virði bjargaðs lífs — verður að meta til fjár með aðferðum [yfirlýstra óska](../verðmat-byggt-á-yfirlýstum-óskum/) eða [afhjúpaðra óska](../verðmat-byggt-á-afhjúpuðum-óskum/), eða smíða [skuggaverð](../skuggaverðlagning/). Þegar peningalegt mat er umdeilt frekar en aðeins erfitt mælir Green Book sjálf með því að falla aftur á [kostnaðarhagkvæmnigreiningu](../kostnaðarhagkvæmnigreining-hjá-hinu-opinbera/) eða [fjölviðmiðagreiningu ákvarðana](../fjölviðmiðagreining-ákvarðana/) fremur en að þvinga fram tölu sem enginn trúir.

## Stærðfræðin

```
NPSV = Σ [t=0 til T] (Ávinningur_t − Kostnaður_t) / (1 + r)^t

þar sem:
  Ávinningur_t = allur peningametinn ávinningur á ári t, þar á meðal gæði
                 utan markaðar metin með yfirlýstum/afhjúpuðum óskum eða skuggaverði
  Kostnaður_t  = allur peningametinn kostnaður á ári t, þar á meðal fórnarkostnaður
                 auðlinda (sjá ../opportunity-cost-in-public-spending/)
  r            = samfélagslegur afsláttarstuðull (HM Treasury setur 3,5% lækkandi
                 í lægri stuðla umfram ár 30, samkvæmt Annex A í Green Book)
  T            = matstímabil

Hlutfall ávinnings og kostnaðar (BCR) = Σ PV(Ávinningur) / Σ PV(Kostnaður)
```

BCR yfir 1 (eða NPSV yfir núll) gefur til kynna hreint samfélagslegt virði. Flokkar Green Book um hagkvæmni útgjalda (eins og þeir eru notaðir í mati á samgöngum og innviðum) merkja BCR-bil: undir 1,0 er lélegt virði fyrir fé, 1,0–1,5 er lágt, 1,5–2,0 er miðlungs, 2,0–4,0 er hátt og yfir 4,0 er mjög hátt. Næmisgreining — að keyra NPSV aftur undir svartsýnum og bjartsýnum forsendum — er skylda, ekki valkvæð, því peningametinn ávinningur utan markaðar ber breiða óvissubanda.

## Dæmi útreiknað

**Sveitarfélag**: sveitarfélag metur 3 m£ fjárfestingu í nýju hjóla- og göngukerfi yfir 20 ára matstímabil á 3,5% afsláttarstuðli.

```
Kostnaður: 3 m£ fjárfesting á ári 0, 50.000 £/ár viðhald (ár 1–20)
PV(viðhald) ≈ 50.000 £ × 14,2 (20 ára árgreiðslustuðull á 3,5%) ≈ 710.000 £
Heildar PV(kostnaður) ≈ 3,71 m£

Ávinningur (allur peningametinn með birtum verðmatstólum DfT/WHO):
  Heilsuávinningur af aukinni hreyfingu: 180.000 £/ár
  Minnkun fjarvista: 40.000 £/ár
  Minni umferðarþrengsli (færri bílferðir): 60.000 £/ár
  Heildarávinningsstraumur: 280.000 £/ár
PV(ávinningur) ≈ 280.000 £ × 14,2 ≈ 3,98 m£

NPSV = 3,98 m£ − 3,71 m£ = +0,27 m£
BCR = 3,98 / 3,71 = 1,07 → „lágt“ virði fyrir fé
```

Framkvæmdin stenst þröskuldinn en naumlega; næmiskeyrsla með 20% lægra mati á heilsuávinningi (sem endurspeglar raunverulega óvissu í verðmati á líkamlegri hreyfingu) snýr BCR niður fyrir 1,0, sem er einmitt ástæðan fyrir því að Green Book krefst þess að næmistaflan sé birt við hlið fyrirsagnartölunnar, ekki aðeins miðmatið.

**Góðgerðarfélag**: áætlun til að koma í veg fyrir ungbarnadauða sem kostar 500.000 £/ár er metin með virði tölfræðilegs lífs (VSL) — skuggaverð, ekki mælt markaðsverð — upp á um það bil 2,1 m£ (uppfærð tala HM Treasury 2023, sjálf leidd úr rannsóknum á yfirlýstum óskum). Að afstýra einu ungbarnadauðsfalli á ári á móti 500.000 £ kostnaði gefur BCR upp á 4,2, vel „mjög hátt“ virði fyrir fé — en öll niðurstaðan hvílir á VSL-tölunni, sem er ástæðan fyrir því að hver SCBA sem notar VSL verður að greina frá henni sem forsendu, ekki staðreynd.

## Tengsl við hugbúnaðarverkfræði

SCBA er eðlilegi ramminn fyrir fjárfestingarákvarðanir í vettvangi og innviðum í hugbúnaði ríkisins — að bera saman sameiginlegan auðkennisvettvang og stakar lausnir ráðuneyta, til dæmis, krefst þess að meta til fjár ávinning á borð við minni tvítekinn kostnað við skráningu, minni svik og hraðari tíma til þjónustu sem hafa ekkert markaðsverð af sjálfum sér. Verkfræðingar sem smíða undirliggjandi þjónustu ættu að búast við að verkefnastjórar biðji um inntak í þessa greiningu: einingarkostnað færslna (sjá [kostnaður á hverja færslu](../kostnaður-á-hverja-færslu/)), væntan umfang og kostnað vegna hnignunar/niðritíma. Aginn sem mestu skiptir að flytja inn: núvirða framtíðarávinning, nefna mótstaðreyndargrunnlínuna skýrt (sjá [mótstaðreyndagreining](../mótstaðreyndagreining/)), og aldrei setja fram stakt punktmat án næmisbils þess.

## Gildrur

- **Að tvítelja ávinning.** Að telja bæði „tíma sem sparast“ og „framleiðni sem fæst af þeim tíma“ sem aðskilda ávinningsliði ofmetur tilvikið; tíminn sem sparast er ávinningurinn, síðari notkun hans er ekki viðbótarávinningur nema studd óháðum sönnunargögnum.
- **Að sleppa fluttum kostnaði.** Framkvæmd sem flytur þrengsli af einni götu á aðra, eða flytur svik úr einni leið í aðra, hefur ekki skapað hreina ávinninginn sem fyrirsagnar-NPSV gefur til kynna — sjá [tilfærsla og eignun](../tilfærsla-og-eignun/).
- **Að nota einkafyrirtækja afsláttarstuðul.** Að beita viðskiptalegum fjármagnskostnaði (segjum 8–10%) í stað samfélagslegs afsláttarstuðuls vanmetur kerfisbundið langtíma opinberan ávinning á borð við heilsu- og umhverfisávinning — sjá [samfélagslegur afsláttarstuðull](../samfélagslegur-afsláttarstuðull/).
- **Að meta til fjár það sem óumdeilt er og veifa hendi að því umdeilda.** Ef tveir þriðju af ávinningi tillögu eru örugglega peningametinn skilvirknisparnaður og einn þriðji skjálfandi metin velferðaraukning, blandar fyrirsagnar-NPSV hljóðlega saman harðri tölu og mjúkri; tilkynntu þær sérstaklega.

## Heimildir

- HM Treasury. „The Green Book: appraisal and evaluation in central government.“ 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. „Green Book supplementary guidance: value of a statistical life.“ 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. „TAG unit A1.1: cost-benefit analysis.“ Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
