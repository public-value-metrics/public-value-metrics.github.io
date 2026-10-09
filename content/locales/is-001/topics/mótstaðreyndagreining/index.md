# Mótstaðreyndagreining

Mótstaðreynd er mat á því hvað hefði gerst án inngrips. Án hennar er ekki hægt að greina breytingu sem sést eftir að áætlun hefst frá breytingu sem hefði orðið hvort eð er — engin mótstaðreynd, engin sönnun fyrir áhrifum, hversu sannfærandi sem tölurnar fyrir og eftir líta út. Magenta Book hjá HM Treasury lítur á gerð trúverðugrar mótstaðreyndar sem meginaðferðafræðilegt verkefni áhrifamats, mikilvægara en nokkurt annað einstakt hönnunaratriði.

## Hvers vegna það skiptir máli

„Glæpum fækkaði um 15% árið eftir að við innleiddum áætlunina“ er ekki sönnun þess að áætlunin hafi virkað nema þú vitir hvað hefði orðið um glæpi án hennar — glæpum gæti hafa fækkað um 20% hvort eð er vegna óskyldrar efnahags- eða lýðfræðiþróunar, sem þýðir að áætlunin gerði í raun illt verra miðað við mótstaðreyndina, þrátt fyrir að hrátalan batni. Þetta er algengasta einstaka greiningarvillan í fullyrðingum um áhrif í opinbera geiranum og félagsgeiranum: að taka samanburð fyrir og eftir fyrir sönnun á orsakasambandi. Magenta Book er skýr um að áhrifamat sé til til að svara mótstaðreyndaspurningu — „hvaða mun gerði þetta inngrip?“ — og að til að svara henni þurfi að meta, ekki aðeins lýsa, heiminum sem varð ekki.

Ólíkar aðferðir byggja mótstaðreyndina með mismiklu öryggi, og leiðsögn um mat ríkisins raðar þeim í samræmi við það. Slembiraðaðar samanburðarrannsóknir (RCT), þar sem einstaklingum eða svæðum er slembiraðað til að fá inngrip eða ekki, skila sterkustu mótstaðreyndinni því slembiröðun tryggir að meðferðar- og samanburðarhópar séu, að meðaltali, aðeins ólíkir í því að fá inngripið. Cabinet Office og What Works Network hafa kynnt RCT í opinberri stefnumótun Bretlands síðan skýrsla Behavioural Insights Team „Test, Learn, Adapt“ kom út 2012, einmitt vegna þess að veikari hönnun er berskjölduð fyrir ruglingsáhrifum — munurinn sem sést getur endurspeglað hverjir völdu að taka þátt, ekki áhrif áætlunarinnar. Þar sem slembiröðun er óraunhæf eða siðferðilega óásættanleg (eins og oft á við um áætlanir með lögbundnum rétti, eða stefnubreytingar fyrir allt þýðið) setur Magenta Book fram skýran stigveldi veikari en samt gagnlegra valkosta: pöruð samanburðarhóp, mismunur-í-mismun hönnun, samfelluskil í aðhvarfi (regression discontinuity) við réttindamörk, og sem síðasta úrræði einfaldur samanburður fyrir og eftir — skýrt merktur sem veikasta form sönnunargagna, hætt við að rugla saman áhrifum áætlunarinnar og áhrifum alls annars sem breyttist á sama tíma.

## Stærðfræðin

Mótstaðreyndarrammann, sem á við um allar aðferðir:

```
Metin áhrif = Útkoma(með inngripi) − Útkoma(mótstaðreynd: án inngrips)

EKKI:
Metin áhrif ≠ Útkoma(eftir) − Útkoma(fyrir)   [rugla tíma saman við meðferð]
```

Mismunur-í-mismun, ein algengasta hálftilraunahönnunin í mati ríkisins, einangrar meðferðaráhrifin með því að draga frá eigin breytingu samanburðarhópsins fyrir og eftir:

```
DiD-mat = [Útkoma(meðhöndlaðir, eftir) − Útkoma(meðhöndlaðir, fyrir)]
        − [Útkoma(samanburður, eftir) − Útkoma(samanburður, fyrir)]
```

Þetta fjarlægir hvers kyns þróun sem er sameiginleg báðum hópum (t.d. þjóðhagsleg breyting sem hefur áhrif á alla) og skilur aðeins eftir mismunandi breytinguna sem rekja má til inngripsins.

## Dæmi útreiknað

**Atvinnuáætlun, fyrir/eftir (veik hönnun)**: starfsstuðningsáætlun tilkynnir að atvinnuþátttaka þátttakenda hafi hækkað úr 40% í 55% á einu ári — barnaleg ályktun „+15 prósentustig vegna áætlunarinnar“.

**Sama áætlun, mismunur-í-mismun (sterkari hönnun)**: pöruð samanburðarhópur sambærilegra þeirra sem tóku ekki þátt, dreginn úr sama staðbundna vinnumarkaði, sýnir atvinnuþátttöku hækka úr 38% í 47% á sama ári (landsbundin efnahagsendurheimt var í gangi).

```
Breyting meðhöndlaðs hóps:      55% − 40% = +15 prósentustig
Breyting samanburðarhóps:       47% − 38% = +9 prósentustig

DiD-mat (raunveruleg áhrif áætlunar) = 15 − 9 = +6 prósentustig
```

Heiðarlegu áhrifin sem rekja má til áætlunarinnar eru 6 prósentustig, ekki 15 — meira en helmingur sýnilegrar bætingar fyrir/eftir hefði orðið óháð áætluninni, knúinn af sömu efnahagsendurheimt og lyfti samanburðarhópnum.

**Samfelluskil í aðhvarfi, réttindamörk**: styrkjaáætlun er aðeins í boði fyrir fyrirtæki með færri en 50 starfsmenn. Samanburður á útkomu fyrirtækja rétt undir mörkunum (45–49 starfsmenn, gjaldgeng) og fyrirtækja rétt yfir þeim (50–54 starfsmenn, ekki gjaldgeng) gefur trúverðuga mótstaðreynd því fyrirtæki hvorum megin við handahófskennd stjórnsýslumörk eru að öðru leyti lík — mörkin, ekki nokkur undirliggjandi eiginleiki fyrirtækisins, ráða gjaldgengi. Munur upp á 2.000 £ að meðaltali í útkomu milli hópanna tveggja, sem sést aðeins við mörkin, má rekja til styrksins með langtum meira öryggi en einfaldan samanburð allra gjaldgengra á móti öllum ógjaldgengum fyrirtækjum (sem eru kerfisbundið ólík að stærð).

## Tengsl við hugbúnaðarverkfræði

Mótstaðreyndarhugsun ætti að móta hvernig kerfi til rakningar áhrifa og matsferli fyrir hugbúnað í opinbera geiranum og félagsgeiranum eru hönnuð:

- Byggðu söfnun samanburðarhóps inn í kerfið frá upphafi — skráðu hverjir voru gjaldgengir en skráðust ekki, eða pöraðan hóp þeirra sem tóku ekki þátt — í stað þess að bæta henni við eftir að áætlun hefur þegar runnið og aðeins gögn fyrir/eftir eru til.
- Þar sem slembiröðun er framkvæmanleg (áfangaskipt útbreiðsla, stafræn þjónusta virkjuð fyrir suma notendur á undan öðrum), búðu kerfið mælitækjum til að varðveita slembiröðun sem leitanlegan reit; áfangaskipt útbreiðsla eyðileggur óvart eigið matsgildi ef röð úthlutunar er ekki skráð.
- Þetta er grunnaðferðin að baki [aðferðir við áhrifamat](../aðferðir-við-áhrifamat/) og er það sem aðgreinir hana frá [áhrifamat og ferlamat](../áhrifamat-og-ferlamat/), þar sem hið síðarnefnda spyr hvort áætlun var afhent eins og ætlað var frekar en hvort hún olli áhrifum.
- [Viðbótaráhrif og dauðaþungi](../viðbótaráhrif-og-dauðaþungi/) og [tilfærsla og eignun](../tilfærsla-og-eignun/) eru báðar, í grunninn, mótstaðreyndarspurningar — dauðaþungi er „hver hefði þessi tiltekna útkoma orðið án inngripsins“, beitt á stigi leiðréttingar frekar en fullrar matshönnunar.

## Gildrur

- **Að líta á fyrir/eftir sem sönnun orsakasambands.** Þetta er algengasta og afdrifaríkasta villan í skýrslugjöf um áhrif í opinbera geiranum og félagsgeiranum; breyting fyrir/eftir rugla saman áhrifum áætlunarinnar og öllu öðru sem breyttist á sama tímabili.
- **Að nota samanburðarhóp sem er kerfisbundið ólíkur meðhöndlaða hópnum.** Paraður samanburðarhópur verður að vera raunverulega líkur á viðeigandi eiginleikum (sjá stigveldi aðferða í [mótstaðreyndagreining](../mótstaðreyndagreining/) í Magenta Book); að bera saman þátttakendur áætlunar (sem völdu að taka þátt og eru oft áhugasamari) við þá sem tóku ekki þátt (sem gerðu það ekki) hættir á valskekkju sem villir á sér heimildir sem áhrif áætlunar.
- **Að eyðileggja tækifæri til slembiröðunar með lélegri afhendingarhönnun.** Áfangaskipt eða slembiröðuð útbreiðsla varðveitir aðeins matsgildi sitt ef úthlutun er raunverulega tilviljanakennd og skráð — að leyfa staðbundnum stjórnendum að velja hverjir fara fyrst grefur undan tilganginum.
- **Að ofmeta nákvæmni úr veikri hönnun.** Mat fyrir/eftir ætti að setja fram sem vísbendingu, ekki sem mælda áhrifastærð; sönnunargagnastigveldi Magenta Book er til svo styrkur fullyrðingar svari til styrks hönnunarinnar sem framleiddi hana.

## Heimildir

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation“ (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, „Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials“ (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
