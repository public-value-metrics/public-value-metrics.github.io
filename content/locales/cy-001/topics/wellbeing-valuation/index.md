# Prisio Llesiant (WELLBY)

Mae prisio llesiant yn prisio effaith polisi'n uniongyrchol mewn termau boddhad bywyd, gan ddefnyddio'r
WELLBY (blwyddyn bywyd wedi'i haddasu o ran llesiant) fel ei uned — mae un WELLBY yn hafal i newid un
pwynt ar raddfa boddhad bywyd 0–10, wedi'i gynnal am flwyddyn. Dyma ddewis arall a sancsiynwyd yn
swyddogol gan Drysorlys EM yn lle prisio pob budd drwy barodrwydd i dalu.

## Pam mae hyn yn bwysig

Daeth "Canllawiau llesiant ar gyfer arfarnu: canllawiau atodol y Llyfr Gwyrdd" Trysorlys EM (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) â data
llesiant goddrychol i arfarniad llywodraeth ganolog yn ffurfiol, gan roi i ddadansoddwyr lwybr i
brisio canlyniadau — cysylltiad cymdeithasol, iechyd meddwl, diogelwch, cyfranogiad dinesig — y mae
dulliau [dewisiadau a ddatganwyd](../stated-preference-valuation/) a
[dewisiadau a ddatgelwyd](../revealed-preference-valuation/) yn ei chael hi'n anodd eu prisio'n
argyhoeddiadol, am fod pobl yn aml yn rhagfynegwyr gwael o ba mor fawr fydd effaith nwydd ar eu
boddhad bywyd mewn gwirionedd. Mae'r canllawiau, a ddatblygwyd ar y cyd â'r What Works Centre for
Wellbeing, yn gosod gwerth ariannol argymelledig fesul WELLBY — £13,000 (prisiau 2021, wedi'u
diwygio o bryd i'w gilydd) — wedi'i seilio ar y berthynas a arsylwyd mewn arolygon llesiant mawr
(yn bennaf Arolwg Poblogaeth Blynyddol y Swyddfa Ystadegau Gwladol (ONS), sydd wedi gofyn pedwar
cwestiwn llesiant ONS4 ers 2011) rhwng incwm a boddhad bywyd, gan roi i ddadansoddwyr gyfradd trosi
yn ôl i bunnoedd pan fo angen cymhariaeth wedi'i phrisio yn erbyn arfarniadau eraill y Llyfr Gwyrdd.

Mae'r dull yn bwysig am ei fod yn gwrthdroi'r rhesymeg prisio arferol: yn hytrach na gofyn beth y
byddai pobl yn ei dalu am ganlyniad (dewisiadau a ddatganwyd) neu ddidynnu gwerth o drafodyn marchnad
cysylltiedig (dewisiadau a ddatgelwyd), mae'n mesur effaith y canlyniad ar foddhad bywyd a adroddwyd
yn uniongyrchol, gan osgoi'r bwlch rhwng yr hyn y mae pobl yn dweud y maent ei eisiau a'r hyn sydd
mewn gwirionedd yn eu gwneud yn well eu byd. Dyma hefyd ei brif gyfyngiad — mae boddhad bywyd
hunanadroddedig yn cael ei effeithio gan effeithiau addasu a fframio y mae'n rhaid i ymarferydd
gofalus reoli ar eu cyfer.

## Y fathemateg

```
WELLBY = 1 pwynt boddhad bywyd (graddfa 0-10) wedi'i gynnal ar gyfer 1 person am 1 flwyddyn

Cyfanswm WELLBYs o bolisi =
  Σ (newid yn y sgôr boddhad bywyd) × (nifer y bobl yr effeithir arnynt)
    × (hyd mewn blynyddoedd, wedi'i ddisgowntio ar y gyfradd ddisgowntio gymdeithasol)

Gwerth wedi'i brisio = Cyfanswm WELLBYs × gwerth fesul WELLBY
  (gwerth argymelledig Trysorlys EM: £13,000 fesul WELLBY, prisiau 2021,
   yn ddarostyngedig i ddiwygiad cyfnodol — gwiriwch y canllawiau cyfredol
   cyn eu defnyddio)
```

Mae hyn yn wahanol i'r
[flwyddyn bywyd wedi'i haddasu o ran llesiant](../wellbeing-adjusted-life-years/) ym maes economeg
iechyd, sydd fel arfer wedi'i angori i raddfeydd ansawdd bywyd sy'n gysylltiedig ag iechyd (EQ-5D a
rhai tebyg) yn hytrach na boddhad bywyd cyffredinol; mae'r ddwy'n gysylltiedig ond nid yn
gyfnewidiadwy, a dylai arfarniadau'r Llyfr Gwyrdd fod yn glir pa raddfa a dull didoli sy'n sail i
ffigur WELLBY a adroddwyd.

## Enghraifft waith

**Awdurdod lleol**: mae cyngor yn rhedeg cynllun cyfeillio cymunedol ar gyfer trigolion hŷn ynysig,
gan wasanaethu 400 o bobl. Mae arolwg llesiant cyn/ar ôl gan ddefnyddio cwestiwn boddhad bywyd ONS4 yn
dangos sgôr cyfartalog y cyfranogwyr yn codi o 5.8 i 6.5 — enillion 0.7 pwynt — wedi'i gynnal dros
gyfnod ariannu 2 flynedd y rhaglen.

```
WELLBYs a gynhyrchwyd = 400 o bobl × 0.7 pwynt × 2 flynedd = 560 WELLBY
Gwerth wedi'i brisio = 560 × £13,000 = £7.28m
Cost y rhaglen = £450,000 dros 2 flynedd

Cymhareb budd-cost ≈ £7.28m / £0.45m ≈ 16:1
```

Dylai cymhareb mor uchel â hon ysgogi craffu yn hytrach na dathlu — mae canllawiau llesiant y Llyfr
Gwyrdd yn rhybuddio'n benodol yn erbyn cymryd enillion hunanadroddedig sampl fach ar wyneb pethau heb
wirio am effeithiau dethol (ai dim ond y trigolion mwyaf cymdeithasol, mwyaf tebygol o wella a
ymunodd â'r cynllun?) a heb grŵp cymharu; byddai gwerthusiad wedi'i ddylunio'n dda yn net-io newid
gwrthffeithiol a arsylwyd mewn pobl nad oeddent yn cyfranogi, gweler
[dadansoddiad gwrthffeithiol](../counterfactual-analysis/).

**Llywodraeth genedlaethol**: mae cymharu dwy raglen gyflogaeth gan ddefnyddio WELLBYs yn hytrach nag
enillion yn unig yn dal y ffaith bod diweithdra'n cario cost llesiant y tu hwnt i incwm a gollwyd — mae
ymchwil llesiant y DU yn gyson yn canfod bod diweithdra'n lleihau boddhad bywyd yn fwy nag y byddai
colled incwm yn unig yn ei ragfynegi, oherwydd effeithiau anariannol colli strwythur, pwrpas, a chyswllt
cymdeithasol. Byddai rhaglen a werthuswyd ar enillion yn unig yn tanbrisio ei gwerth o'i chymharu ag un
a werthuswyd hefyd ar WELLBYs.

## Cysylltiad peirianneg feddalwedd

Yn anaml y mae prisio llesiant yn cyrraedd timau peirianneg yn uniongyrchol, ond mae'n llywio'r hyn y
diffinnir "llwyddiant" fel ar gyfer cynnyrch sector cymdeithasol a gwasanaeth cyhoeddus — dylai
platfform cyfeillio digidol, offeryn brysbennu iechyd meddwl, neu blatfform cymunedol ar gyfer
trigolion ynysig ddisgwyl i'w effaith gael ei mesur fel hyn yn y pen draw, sy'n golygu bod angen i
ddadansoddeg cynnyrch ddal *pwy* a gyrhaeddir ac am *ba hyd*, nid dim ond cyfrifon defnydd. Adeiladwch
offerynnau arolwg llesiant (ONS4 neu gyfwerth dilys) i mewn i werthusiad gwasanaeth o'r cychwyn yn
hytrach na'u bolltio ymlaen yn ôl-weithredol; mae ychwanegu llinell sylfaen llesiant ar ôl i wasanaeth
lansio yn colli'r gymhariaeth cyn/ar ôl yn llwyr. Gweler [canlyniadau yn erbyn allbynnau](../outcomes-vs-outputs/)
a [dulliau gwerthuso effaith](../impact-evaluation-methods/).

## Peryglon

- **Dim grŵp gwrthffeithiol na chymharu.** Mae enillion llesiant cyn/ar ôl heb reolaeth ar beth
  fyddai wedi digwydd beth bynnag yn gorbwysleisio effaith y rhaglen; gweler
  [dadansoddiad gwrthffeithiol](../counterfactual-analysis/) a
  [ychwanegoldeb a phwysau marw](../additionality-and-deadweight/).
- **Samplau bach, hunan-ddetholedig.** Mae arolygon llesiant cyfranogwyr rhaglen a ddewisodd ymuno yn
  dueddol o ragfarn ddethol — y bobl a ymunodd ac a arhosodd, mae'n bosibl eu bod eisoes ar dueddiad
  gwella.
- **Trin y trosiad £-fesul-WELLBY fel un manwl gywir.** Confensiwn polisi wedi'i seilio ar
  atchweliadau incwm-llesiant yw'r gwerth wedi'i brisio, nid pris marchnad; defnyddiwch ef ar gyfer
  cymharu ar draws arfarniadau'r Llyfr Gwyrdd, nid fel honiad am beth mae llesiant "yn ei werth".
- **Cymysgu WELLBYs â QALYs sy'n gysylltiedig ag iechyd.** Mae'r ddau'n mesur gwahanol gysyniadau ar
  wahanol raddfeydd; gweler [blynyddoedd bywyd wedi'u haddasu o ran llesiant](../wellbeing-adjusted-life-years/)
  am y fersiwn economeg iechyd, a pheidiwch â chymryd cyfartaledd y ddau gyda'i gilydd.

## Ffynonellau

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
