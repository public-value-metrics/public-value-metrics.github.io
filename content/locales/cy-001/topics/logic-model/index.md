# Model Rhesymeg

Mae model rhesymeg yn ddiagram llinellol sy'n cysylltu mewnbynnau, gweithgareddau, cynhyrchion,
canlyniadau, ac effaith ar gyfer rhaglen, i'w ddarllen o'r chwith i'r dde fel cadwyn atebolrwydd:
mae adnoddau'n mynd i mewn, gweithgareddau'n digwydd, cynhyrchion yn cael eu cynhyrchu, canlyniadau'n
newid i fuddiolwyr, ac effaith yn cronni dros amserlen ehangach neu hirach. Dyma'r strwythur safonol
y mae ariannwyr ac archwilwyr yn disgwyl y gellir adrodd rhaglen yn ei erbyn, a'r cymar tuag ymlaen
i [theori newid](../theory-of-change/) sydd wedi'i mapio am yn ôl.

## Pam mae hyn yn bwysig

Mae Magenta Book Trysorlys EF yn nodi'r model rhesymeg fel elfen orfodol o ddyluniad gwerthuso
rhaglenni, ac mae ariannwyr fel Cronfa Gymunedol y Loteri Genedlaethol yn adeiladu eu templedi
cais ac adrodd o amgylch yn union y gadwyn bum colofn hon. Ei werth yw ei fod yn gorfodi rhaglen i
nodi, mewn un diagram, beth y bydd yn ei wario, beth y bydd yn ei wneud ag ef, beth y bydd yn ei
gynhyrchu, ac — yn hollbwysig — beth ddylai newid o ganlyniad, ar lefel o fanylder y mae paragraff
o ryddiaith yn tueddu i'w gymylu. Mae modd gweld ar unwaith fod model rhesymeg â cholofn mewnbynnau
a gweithgareddau lawn ond colofn canlyniadau wag neu amwys yn broblem, a dyna'n union pam mae
ariannwyr yn gofyn am un.

## Y fathemateg

Mae'r model rhesymeg yn gadwyn strwythurol yn hytrach na fformiwla:

```
Mewnbynnau       Gweithgareddau    Cynhyrchion         Canlyniadau           Effaith
(adnoddau         (yr hyn a wneir   (cynnyrch          (newid i               (newid hirdymor,
 a ymrwymwyd)      â nhw)            uniongyrchol,       fuddiolwyr)            ar lefel
                                     y gellir eu cyfrif)                       poblogaeth neu
                                                                                systemig)
```

Dylai pob colofn fod yn fwy penodol na'r un flaenorol: mewnbynnau yw'r hyn a wariwch, gweithgareddau
yw'r hyn a wnewch, cynhyrchion yw'r hyn a gyflenwir waeth beth fo'r effaith, canlyniadau yw'r hyn
sy'n newid o ganlyniad — y gwahaniaeth a drafodir yn llawn yn
[canlyniadau yn erbyn cynhyrchion](../outcomes-vs-outputs/) — ac effaith yw'r newid parhaus,
hirdymor, sy'n aml ond yn rhannol briodoladwy.

## Enghraifft waith

**Awdurdod lleol (gwasanaeth cyngor dyled digidol)**:

- Mewnbynnau: cyllideb flynyddol o £180,000, 4.0 CALl o gynghorwyr, system rheoli achosion.
- Gweithgareddau: sesiynau allgymorth, apwyntiadau cyngor dyled un-i-un.
- Cynhyrchion: 900 o apwyntiadau wedi'u cyflenwi; 750 o gynlluniau dyled a budd-daliadau wedi'u
  cyhoeddi.
- Canlyniadau: o'r cleientiaid sy'n cyrraedd dilyniant 6 mis, mae 60% (450 o 750) yn adrodd llai o
  ôl-ddyledion, gyda gostyngiad cyfartalog o £1,200 y cleient — cyfanswm o £540,000 o ostyngiad mewn
  ôl-ddyledion.
- Effaith: gostyngiad mesuradwy mewn ceisiadau am ddigartrefedd o blith sylfaen cleientiaid y
  gwasanaeth dros ddwy flynedd, ond dim ond yn rhannol briodoladwy i'r gwasanaeth hwn ochr yn ochr ag
  ymyriadau eraill (gweler [dadansoddiad gwrthffeithiol](../counterfactual-analysis/)).

**Elusen (partneriaeth atgyfeirio banc bwyd)**:

- Mewnbynnau: £45,000, 1.5 CALl o gydgysylltydd, cytundebau partneriaeth gyda 12 o asiantaethau
  atgyfeirio.
- Gweithgareddau: didoli atgyfeiriadau, pacio a dosbarthu parseli.
- Cynhyrchion: 5,000 o barseli bwyd wedi'u dosbarthu i 1,100 o aelwydydd.
- Canlyniadau: mae 68% o'r aelwydydd a arolygwyd (748 o 1,100) yn adrodd gwell diogeledd bwyd mewn
  galwad dilyniant 4 wythnos.
- Effaith: cyfraniad at lai o alw ar wasanaethau argyfwng lleol, wedi'i dystiolaethu mewn
  ystadegau ardal grynswth yn unig, ac nid yn briodoladwy i'r elusen hon ar ei phen ei hun.

## Cysylltiad peirianneg feddalwedd

Mae'r model rhesymeg yn agos at fod yn fodel data llythrennol ar gyfer system canlyniadau: mae
mewnbynnau a gweithgareddau'n ddata gweithredol sydd gennych eisoes (gwariant, staffio, cofnodion
sesiynau); mae cynhyrchion yn hawdd i'w hofferu gan eu bod yn cael eu cyfrif ar bwynt y cyflenwi;
mae canlyniadau angen casglu data dilyniant a ddyluniwyd yn fwriadol (arolygon, cysylltu data
gweinyddol) na fydd yn bodoli oni bai fod rhywun yn ei adeiladu; mae effaith fel arfer angen data
cysylltiedig, hydredol, neu ar lefel poblogaeth sy'n mynd y tu hwnt i systemau unrhyw un rhaglen.
Dylai peirianwyr sy'n adeiladu offer adrodd bwyso ar gomisiynwyr i ddiffinio dangosyddion canlyniad
ac effaith adeg dylunio, yn hytrach na dibynnu'n ddiofyn ar ddangosfwrdd cynhyrchion yn unig am mai
dyna beth mae'r data trafodol eisoes yn ei gefnogi. Gweler
[enillion cymdeithasol ar fuddsoddiad](../social-return-on-investment/) am ddull sy'n rhoi gwerth ar
golofnau canlyniadau ac effaith yn benodol, a
[gwireddu buddion](../benefits-realization/) am olrhain a gyflenwyd colofn yr effaith mewn
gwirionedd.

## Peryglon

- **Stopio wrth gynhyrchion.** Mae dangosfwrdd sy'n adrodd apwyntiadau a gyflenwyd neu barseli a
  ddosbarthwyd, gan awgrymu budd, yn adrodd gweithgarwch, nid canlyniadau — gweler
  [canlyniadau yn erbyn cynhyrchion](../outcomes-vs-outputs/).
- **Dim cyswllt achosol wedi'i nodi rhwng y colofnau.** Mae model rhesymeg yn nodi'r gadwyn ond nid
  pam y dylai gweithgareddau gynhyrchu cynhyrchion a ddylai gynhyrchu canlyniadau; mae'r rhesymeg
  honno'n perthyn i [theori newid](../theory-of-change/), ac mae model rhesymeg heb un y tu ôl iddo
  heb ei brofi.
- **Ei drin fel dogfen gais untro.** Mae modelau rhesymeg a gynhyrchwyd dim ond i fodloni cais am
  arian, ac na chânt eu diweddaru byth wedyn, yn peidio ag adlewyrchu'r hyn y mae'r rhaglen yn ei
  wneud mewn gwirionedd.
- **Ymgripiad priodoli yng ngholofn yr effaith.** Mae honni newid ar lefel poblogaeth fel pe bai wedi
  ei achosi'n unig gan un rhaglen, heb ffactor gwrthffeithiol, yn gor-honni'r hyn y mae'r dystiolaeth
  yn ei gefnogi.

## Ffynonellau

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
