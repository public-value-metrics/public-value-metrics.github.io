# Mesurau Boddhad Dinasyddion

Mae mesurau boddhad dinasyddion yn mesur sut mae pobl yn graddio eu profiad uniongyrchol o wasanaeth
cyhoeddus — sy'n wahanol i ymddiriedaeth mewn sefydliadau'n gyffredinol, ac yn wahanol i a gyflawnodd y
gwasanaeth ganlyniad da mewn gwirionedd. Gall gwasanaeth fod yn boblogaidd ac yn aneffeithiol, neu'n
effeithiol ac yn amhoblogaidd; mae'r bwlch rhwng y ddau'n wybodaeth ddiagnostig y dylai tîm cyflenwi ei
gwylio ei hun.

## Pam mae hyn yn bwysig

Caiff boddhad ei fesur ar ddwy uchder gwahanol sy'n cael eu cymysgu'n rheolaidd. Ar lefel gwasanaeth,
mae'r Performance Platform sydd bellach wedi ymddeol yn y DU a llawlyfr gwasanaeth GOV.UK heddiw'n
mynnu arolwg boddhad fesul gwasanaeth (graddfa bum pwynt "boddhaus iawn" i "anfoddhaus iawn" fel arfer,
wedi'i weinyddu adeg y trafodiad) fel un o bedwar KPI gwasanaeth gorfodol — gweler
[safonau gwasanaeth a mesurau trafodion](../service-standards-and-transaction-metrics/). Ar lefel
sefydliadol, mae Arolwg Pobl y Gwasanaeth Sifil yn y DU yn mesur ymgysylltiad a phrofiad gweithwyr ar
draws pob adran llywodraeth ganolog yn flynyddol, ac ar wahân, mae rhaglen "Trust in Government" yr OECD
yn arolygu ymddiriedaeth gyhoeddus mewn llywodraeth genedlaethol ar draws gwladwriaethau aelod, gan
olrhain patrwm dirywiad ac adferiad hirdymor sydd wedi'i siapio'n drwm gan argyfyngau (cynhyrchodd
argyfwng ariannol 2008 a phandemig COVID-19 fel ei gilydd symudiadau sydyn, gweladwy yn ffigurau
ymddiriedaeth yr OECD). Y rheswm bod angen i beirianwyr sy'n adeiladu gwasanaethau sy'n wynebu
dinasyddion gadw boddhad a chanlyniad ar wahân yw modd methu adnabyddus mewn dylunio gwasanaeth: gall
ffurflen ddigidol wedi'i dylunio'n hardd, hawdd ei defnyddio, ar gyfer hawlio budd-dal sgorio boddhad
uchel iawn tra bo'r polisi sylfaenol — rheolau cymhwysedd, ôl-groniadau prosesu, symiau dyfarnu — yn
gadael yr hawliwr ddim gwell ei fyd. Mae boddhad yn mesur y rhyngwyneb; nid yw'n mesur y gwerth a
gyflenwir y tu ôl iddo.

## Y fathemateg

```
Boddhad net = % boddhaus (neu foddhaus iawn) − % anfoddhaus (neu anfoddhaus iawn)
              (ymatebion niwtral/dim barn wedi'u hepgor o'r ddau derm, ond wedi'u cyfrif yn
              y sail ymateb ar gyfer cyfrifo pob canran)

Bwlch boddhad-i-ganlyniad = sgôr boddhad − sgôr cyflawni canlyniad
              (y ddau wedi'u normaleiddio 0–100; mae bwlch positif mawr yn arwydd o wasanaeth
              sy'n "teimlo'n dda" ond yn tan-gyflenwi ar sylwedd)

Mynegai ymddiriedaeth (arddull OECD) = % o ymatebwyr arolwg sy'n ateb "ie" i
              "a oes gennych hyder yn [y llywodraeth genedlaethol]?"
              wedi'i olrhain fel cyfres amser, fel arfer wedi'i ddadgyfuno yn ôl
              oedran, incwm, ac addysg
```

## Enghraifft waith

**Gwasanaeth e-filio treth gyngor awdurdod lleol**: mae arolwg boddhad adeg trafodiad llwyddiannus yn
dangos 2,400 o ymatebwyr: 1,650 yn foddhaus/foddhaus iawn, 250 yn anfoddhaus/anfoddhaus iawn, 500 yn
niwtral.

```
Boddhad net = (1,650/2,400 × 100) − (250/2,400 × 100)
            = 68.75% − 10.42%
            = +58.3 boddhad net
```

Mae hyn yn edrych yn gryf ar ei ben ei hun. Ond dim ond i ddefnyddwyr sy'n cwblhau'r trafodiad yn
*llwyddiannus* y dangosir yr arolwg — tuedd fesur adnabyddus (gweler peryglon isod). Wrth ei baru â'r
mesur cyfradd gwblhau o
[safonau gwasanaeth a mesurau trafodion](../service-standards-and-transaction-metrics/), dim ond 71%
yw'r gyfradd gwblhau, sy'n golygu:

```
Nid yw boddhad gwirioneddol y boblogaeth yn cael ei fesur ar gyfer y 29% a adawodd y daith —
yn debygol mai dyma'r garfan fwyaf anfoddhaus, gan fod gadael ei hun yn arwydd negyddol cryf
nad yw'r arolwg byth yn ei ddal.
```

**Enghraifft lefel genedlaethol (strwythur cyfres ymddiriedaeth arddull OECD)**: adroddwyd ymddiriedaeth
llywodraeth genedlaethol ar 42% ym mlwyddyn 1, gan ostwng i 34% ym mlwyddyn 2 (blwyddyn argyfwng) a
adfer i 39% ym mlwyddyn 3 — llwybr sy'n nodweddiadol o'r patrwm sioc-ac-adferiad-rhannol y mae'r OECD'n
ei ddogfennu ar draws gwladwriaethau aelod yn dilyn argyfyngau mawr.

## Cysylltiad peirianneg feddalwedd

Offerynwch arolygon boddhad ym mhob pwynt ymadael ystyrlon o daith defnyddiwr, nid dim ond ar gwblhad
llwyddiannus — y camgymeriad peirianneg mwyaf cyffredin yn y maes hwn, ac un sy'n troi mesur boddhad yn
dawel yn fesur gwag â thuedd goroesiad. Lle bo modd, parwch y sgôr boddhad â mesur cwblhau neu ganlyniad
ar yr un dangosfwrdd fel na all tîm ddathlu boddhad cynyddol tra bod cwblhad yn gostwng yn dawel (gweler
[cost fesul trafodiad](../cost-per-transaction/) a
[cynhwysiant digidol](../digital-inclusion/) am bwy sy'n cael ei eithrio o samplu boddhad digidol yn y
lle cyntaf — mae defnyddwyr an-ddigidol a digidol-gynorthwyedig wedi'u tangynrychioli'n systemataidd
mewn arolygon o fewn gwasanaeth). Mae data boddhad ac ymddiriedaeth hefyd yn bwydo'n uniongyrchol i goes
dilysrwydd
[triongl strategol Moore](../public-value/), ac yn perthyn i safbwyntiau "cwsmer" a "dilysrwydd" o
[gerdyn sgorio gwerth cyhoeddus](../public-value-scorecard/) — gweler
[mesurau ymddiriedaeth a dilysrwydd](../trust-and-legitimacy-metrics/) am gymar lefel-sefydliadol y
mesur lefel-gwasanaeth hwn.

## Peryglon

- **Tuedd goroesiad mewn arolygon adeg cwblhad**: nid yw defnyddwyr sy'n gadael taith byth yn gweld yr
  arolwg, felly gall sgôr boddhad uchel o fewn gwasanaeth gyd-fodoli â chyfradd gwblhau isel a
  phoblogaeth anweledig fawr o rai anfoddhaus na wnaeth gwblhau.
- **Trin boddhad fel dirprwy ar gyfer canlyniad**: mae rhyngwyneb wedi'i ddylunio'n dda ar gyfer polisi
  wedi'i ddylunio'n wael yn sgorio'n dda ar foddhad ac yn wael ar ganlyniad — adroddwch y ddau bob amser,
  byth un fel dirprwy ar gyfer y llall.
- **Samplau bach, anghynrychioliadol wedi'u hadrodd gyda manwl gywirdeb ffug**: mae sgôr boddhad o
  ychydig gannoedd o ymatebwyr hunan-ddewisiedig wedi'i adrodd i un lle degol yn awgrymu hyder na all
  maint y sampl ei gynnal.
- **Anwybyddu dadgyfuniad demograffig**: gall ffigurau ymddiriedaeth a boddhad cenedlaethol nad ydynt
  wedi'u dadansoddi yn ôl oedran, incwm, anabledd, neu fynediad digidol guddio profiadau sy'n
  gwahaniaethu'n sylweddol ar draws grwpiau — patrwm y mae cyhoeddiadau "Trust in Government" yr OECD
  ei hun yn ei ddadgyfuno'n benodol.

## Ffynonellau

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, canlyniadau "Civil Service People Survey."
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
