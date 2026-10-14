# Mannþróunarvísitala (HDI)

HDI er helsti valkostur Sameinuðu þjóðanna við að raða löndum eingöngu eftir tekjum: hún sameinar lífslíkur, menntun og tekjur í eina tölu á bilinu 0 til 1, út frá þeirri forsendu — sem hagfræðingurinn Amartya Sen færði rök fyrir og Mahbub ul Haq þróaði fyrir Sameinuðu þjóðirnar — að þróun snúist um að auka það sem fólk getur gert og verið, ekki bara það sem það aflar. Hún hefur verið birt árlega í Human Development Report þróunaráætlunar Sameinuðu þjóðanna (UNDP) frá 1990.

## Hvers vegna það skiptir máli

Fyrir daga HDI var „þróun“ mæld nær alfarið með vergri þjóðarframleiðslu á mann, sem segir ekkert um hvort vöxtur nær til heilsu eða menntunar almennings. Hugmyndafræði Sen um getu (capability approach) endurrammaði þróun sem aukningu raunverulegs frelsis, og ul Haq breytti því í birtanlega vísitölu sem UNDP gat raðað hverju landi eftir, sem neyddi ríkisstjórnir sem urðu ríkar af tekjum einum en vanræktu heilsu eða skólagöngu til að horfast í augu við verri sæti en landsframleiðsla þeirra gaf til kynna (olíuríki við Persaflóa og sum hráefnavinnsluhagkerfi eru hefðbundin dæmi). Þriggja þátta bygging HDI er einnig beinn aðferðafræðilegur forfaðir [margþætt fátæktarvísitala (MPI)](../margþætt-fátæktarvísitala/): báðar neita að láta eina vídd bæta upp skort á annarri, með rúmfræðilegu fremur en reiknilegu meðaltali. UNDP birtir fullar tæknilegar athugasemdir og undirliggjandi gögn fyrir hverja útgáfu (<https://hdr.undp.org/data-center/human-development-index>), sem er sú heimild sem gildir fyrir alla sem byggja á vísitölunni frekar en að leiða hana aftur út.

## Stærðfræðin

```
Lífslíkuvísitala (LEI)         = (LE − 20) / (85 − 20)

Vísitala meðalskólagöngu       = meðalár skólagöngu / 15
Vísitala væntrar skólagöngu    = væntanleg ár skólagöngu / 18
Menntunarvísitala (EI)         = (vísitala meðalára + vísitala væntra ára) / 2

Tekjuvísitala (II)             = (ln(VÞT á mann) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [rúmfræðilegt meðaltal undirvísitalnanna þriggja]
```

Rúmfræðilega meðaltalið er viljandi: þar sem það margfaldar frekar en meðaltalar getur mjög há einkunn á einni vídd ekki að fullu vegið upp mjög lága einkunn á annarri — hönnun sem UNDP tók upp 2010 sérstaklega til að refsa ójafnvægi, í stað fyrri formúlu með reiknilegu meðaltali.

## Dæmi útreiknað

**Millitekjuland**: lífslíkur 72 ár, meðalár skólagöngu 8, væntanleg ár skólagöngu 13, VÞT á mann 12.000 $.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI upp á 0,713 fellur í bilið „há mannþróun“ hjá UNDP (0,700–0,799); „mjög há“ byrjar við 0,800. Takið eftir hve næm niðurstaðan er fyrir veikustu undirvísitölunni: ef meðalár skólagöngu væru 4 í stað 8 (MYSI = 0,267, EI = 0,494) fellur HDI í (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — heilt bil niður — þótt ekkert annað hafi breyst.

## Tengsl við hugbúnaðarverkfræði

- Rúmfræðilega meðaltalsmynstrið er beint endurnýtanlegt fyrir hvers kyns samsetta þjónustu- eða vöruskor þar sem þú vilt ekki að ein sterk vídd breiði yfir mikilvægan veikleika — t.d. að sameina aðgengis-, afkasta- og áreiðanleikaeinkunnir fyrir opinbera stafræna þjónustu með margföldun frekar en vegnu meðaltali, svo að þjónusta sem er hröð en óaðgengileg geti ekki fengið „góða“ einkunn.
- Lógaritmaumbreyting HDI á tekjum (minnkandi jaðarvirði aukapunds) er sama rökfræði og liggur að baki [dreifingarvigtun](../dreifingarvigtun/) í mati: aukalega 1.000 $ skipta langtum meira máli fyrir fátækt heimili en ríkt, og að meðhöndla hvort tveggja línulega verðleggur áhrif rangt.
- Hvert mælaborð sem birtir eina samsetta „stafrænnar þátttöku“- eða „útkomu borgara“-einkunn ætti að skjalfesta samantektarformúlu sína jafn skýrt og tæknilegar athugasemdir UNDP gera — sjá [lykilárangursmælikvarðar opinbera geirans](../lykilárangursmælikvarðar-opinbera-geirans/) og [stigakort opinbers verðmætis](../stigakort-opinbers-verðmætis/).

## Gildrur

- **Að nota meðaltal í stað rúmfræðilegs meðaltals** — reiknilegt meðaltal leyfir háum tekjum að hylja lélega heilsu eða menntun algerlega; allur tilgangur aðferðafræðibreytingarinnar 2010 var að stöðva þá skiptingu.
- **Að bera HDI saman ár frá ári eins og hún væri VLF leiðrétt fyrir verðbólgu** — UNDP endurgrunnsetur vísitöluna reglulega (ný lágmarks-/hámarksmörk, endurskoðuð þök á skólagöngu), svo röðunarbreyting getur endurspeglað aðferðafræðiuppfærslu, ekki raunverulega breytingu; athugaðu alltaf úr hvaða útgáfu HDR talan kemur.
- **Að líta á HDI sem fátæktarmælikvarða** — hún er landsmeðaltal og segir ekkert um dreifingu innan lands; fyrir það skaltu nota [margþætt fátæktarvísitala (MPI)](../margþætt-fátæktarvísitala/) eða aðskilda ójafnaðarleiðrétta HDI hjá UNDP.

## Heimildir

- UNDP. „Human Development Index (HDI)“ technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. „Development as Freedom.“ Oxford University Press, 1999.
