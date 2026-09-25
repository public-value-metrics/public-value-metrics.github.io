# Prisio Dewisiadau a Ddatganwyd

Mae dulliau dewisiadau a ddatganwyd yn amcangyfrif gwerth nwydd an-farchnad drwy ofyn yn uniongyrchol
i bobl beth y byddent yn barod i'w dalu amdano, neu'n barod i'w dderbyn fel iawndal am ei roi i fyny,
fel arfer drwy arolwg strwythuredig sy'n disgrifio senario damcaniaethol. Prisio amodol yw'r dechneg
fwyaf adnabyddus yn y teulu hwn.

## Pam mae hyn yn bwysig

Mae Atodiad 2 y Llyfr Gwyrdd (canllawiau atodol ar brisio effeithiau an-farchnad) yn cymeradwyo
dulliau dewisiadau a ddatganwyd ar gyfer nwyddau nad oes ganddynt drafodyn marchnad y gellir didynnu
gwerth ohono o gwbl — ansawdd aer, bioamrywiaeth, amddiffyn rhag llifogydd, gwerth bodolaeth tirlun
na fydd rhywun efallai byth yn ymweld ag ef
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Mae Defra wedi cyhoeddi ei ganllawiau dewisiadau a ddatganwyd ei hun ar gyfer arfarnu amgylcheddol yn
benodol am fod cymaint o werth amgylcheddol (cadwraeth cynefinoedd, ansawdd dŵr) heb unrhyw farchnad
ddirprwyol o gwbl, yn wahanol i, dyweder, sŵn, sydd o leiaf yn cydberthyn â phrisiau tai a arsylwyd
(gweler [prisio dewisiadau a ddatgelwyd](../revealed-preference-valuation/)).

Apêl graidd dewisiadau a ddatganwyd — gall brisio unrhyw beth yn llythrennol, gan gynnwys nwyddau nad
oes neb erioed wedi masnachu ynddynt — yw ffynhonnell ei broblem hygrededd hefyd. Am nad yw
ymatebwyr yn gwario arian mewn gwirionedd, mae arolygon prisio amodol yn agored i dueddiad
damcaniaethol (mae pobl yn gorddweud parodrwydd i dalu pan nad oes cyfyngiad cyllideb gwirioneddol),
effeithiau mewnosod (prisir yr un nwydd yn wahanol yn dibynnu ar beth arall sydd yn yr arolwg), a
thueddiad pwynt cychwyn mewn dyluniadau gêm gynnig. Gosododd panel NOAA 1993 ar brisio amodol, a
gynhaliwyd wedi'r ymgyfreitha am dywalltiad olew Exxon Valdez, safonau dylunio — fformat refferendwm
deuaidd "a fyddech chi'n talu £X, iawn/na" yn hytrach na chynnig penagored, a nodiadau atgoffa gorfodol
o gyfyngiad cyllideb gwirioneddol yr ymatebwr — sy'n aros yn safon gyfeirio ar gyfer arolygon y gellir
eu hamddiffyn.

## Y fathemateg

```
Prisio amodol (fformat refferendwm):
  Cyflwyno dewis deuaidd: "a fyddech chi'n talu £X y flwyddyn am ganlyniad Y? iawn/na"
  Amrywio X ar hap ar draws ymatebwyr.
  Ffitio parodrwydd i dalu fel ffwythiant o'r gyfradd ymateb iawn/na ar bob X.

WTP cymedrig = arwynebedd o dan y gromlin galw a amcangyfrifwyd
Gwerth cyfun = WTP cymedrig × poblogaeth yr effeithir arni

Fersiwn arbrawf dewis (modelu dewis arwahanol):
  Cyflwyno dewisiadau ailadroddus i ymatebwyr rhwng bwndeli o briodoleddau
  (gan gynnwys priodoledd cost), amcangyfrif prisiau ymhlyg ar gyfer pob
  priodoledd nad yw'n gost o'r cyfnewidiadau y mae ymatebwyr yn eu datgelu.
```

Mae'r fersiwn arbrawf dewis yn cael ei ffafrio'n gyffredinol mewn arfer cyfredol yn y DU dros brisio
amodol un-gwestiwn am fod gorfodi ymatebwyr i gyfnewid sawl priodoledd yn erbyn cost yn ailadroddus
yn cynhyrchu amcangyfrifon sy'n fwy cyson yn fewnol ac yn anos eu trin na chwestiwn iawn/na sengl.

## Enghraifft waith

**Llywodraeth genedlaethol**: mae Defra yn comisiynu arolwg prisio amodol i brisio rhaglen gwella
ansawdd dŵr afon. Mae arolwg fformat refferendwm o 2,000 o aelwydydd yn canfod y byddai 62% yn talu
£40/flwyddyn drwy atodiad bil dŵr damcaniaethol, ac mae'r gromlin galw a amcangyfrifwyd yn rhoi
parodrwydd i dalu cymedrig o £28/flwyddyn fesul aelwyd.

```
WTP cymedrig = £28/aelwyd/flwyddyn
Aelwydydd yn y ddalgylch = 340,000
Gwerth blynyddol cyfun = £28 × 340,000 = £9.52m/flwyddyn

Dros gyfnod arfarnu 20 mlynedd ar gyfradd ddisgownt 3.5% (ffactor blwydd-daliad ≈ 14.2):
GP(budd) ≈ £9.52m × 14.2 ≈ £135m
```

Cymherir y ffigur cyfun hwn wedyn yn erbyn ochr gost
[dadansoddiad cost-budd cymdeithasol](../social-cost-benefit-analysis/) y rhaglen. Mae'r Llyfr Gwyrdd
yn ei gwneud yn ofynnol i'r math hwn o dystiolaeth dewisiadau a ddatganwyd gael ei hadrodd ochr yn
ochr â'i chyfwng hyder a methodoleg yr arolwg, nid fel amcangyfrif pwynt noeth, yn union am fod y rhif
sylfaenol yn fwy bregus na phris marchnad.

**Elusen**: mae ymddiriedolaeth dreftadaeth yn arolygu ymwelwyr ac an-ymwelwyr ynghylch parodrwydd i
dalu i atal cau adeilad hanesyddol nad yw'r naill grŵp na'r llall o reidrwydd yn ymweld ag ef (ei
werth bodolaeth). Am fod an-ymwelwyr na fyddant byth yn gweld yr adeilad yn dal i adrodd WTP
cadarnhaol, mae'r arolwg yn dal gwerth bodolaeth a gwerth etifeddiaeth y byddai cyfrif refeniw ffi
ymwelwyr syml (dirprwy dewisiadau a ddatgelwyd) yn eu colli'n llwyr — gan ddangos mantais wirioneddol
dewisiadau a ddatganwyd lle nad oes unrhyw fath o drafodyn marchnad yn bodoli i ddatgelu gwerth.

## Cysylltiad peirianneg feddalwedd

Yn anaml y mae dulliau dewisiadau a ddatganwyd yn berthnasol yn uniongyrchol i waith peirianneg
meddalwedd, ond mae peirianwyr sy'n adeiladu platfformau ymgynghori dinasyddion, offer cyllideb
gyfranogol, neu seilwaith arolwg cyhoeddus yn aml yn adeiladu'r offeryn y mae'r economeg yn dibynnu
arno. Mae cael manylion dylunio'r arolwg yn iawn — symiau cynnig ar hap, fframio refferendwm deuaidd
dros gwestiynau penagored, nodiadau atgoffa cyfyngiad cyllideb penodol — nid yn fân-fater UX, ond yn
rhywbeth sy'n gwneud y prisiad canlyniadol yn amddiffynadwy dan graffu; gall arolwg mewn-ap wedi'i
ddylunio'n wael ddirymu misoedd o ddadansoddiad economaidd dilynol. Gweler
[mesuriadau boddhad dinasyddion](../citizen-satisfaction-metrics/) am y ddisgyblaeth fwy cyffredinol o
ddidoli data barn gyhoeddus a fydd yn dwyn pwysau dadansoddol.

## Peryglon

- **Cwestiynau penagored "faint fyddech chi'n ei dalu?".** Mae'r rhain yn llawer mwy agored i dueddiad
  strategol ac angorol na fframio refferendwm deuaidd; mae argymhelliad panel NOAA i ddefnyddio
  fformat refferendwm yn bodoli'n union am fod didoli penagored yn perfformio'n wael.
- **Dim nodyn atgoffa o gyfyngiad cyllideb gwirioneddol yr ymatebwr.** Hebddo, mae WTP a ddatganwyd yn
  rheolaidd yn fwy na'r hyn y byddai'r un bobl yn ei dalu pan fo cyfnewid cyllideb gwirioneddol ar
  waith — tueddiad damcaniaethol.
- **Anwybyddu effeithiau mewnosod.** Mae'r un nwydd wedi'i brisio ar ei ben ei hun yn erbyn ei brisio
  fel rhan o fwndel mwy yn cynhyrchu amcangyfrifon WTP gwahanol; adroddwch beth arall, os o gwbl, oedd
  yn ffrâm yr arolwg.
- **Trin amcangyfrif pwynt un arolwg fel un sefydlog.** Mae arfer y Llyfr Gwyrdd yn disgwyl amrediad a
  thrafodaeth o dueddiadau hysbys, nid rhif noeth wedi'i gario ymlaen i'r tabl cost-budd fel pe bai'n
  bris marchnad.

## Ffynonellau

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
