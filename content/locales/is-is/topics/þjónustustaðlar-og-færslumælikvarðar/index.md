# Þjónustustaðlar og færslumælikvarðar

GOV.UK Service Standard er 14 liða gátlisti bresku ríkisstjórnarinnar til að smíða og reka opinbera stafræna þjónustu, og honum fylgir lítið, skyldubundið safn megindlegra færslumælikvarða — kostnaður á hverja færslu, lokahlutfall, stafræn notkun og ánægja notenda — sem teymi verða að birta fyrir hverja virka þjónustu miðstjórnarinnar. Saman eru staðallinn og mælikvarðarnir rekstrarleg, dagleg sérhæfing víðari ramma um opinbert verðmæti og KPI í þessari geymslu, beint að hugbúnaðarafhendingarteymum.

## Hvers vegna það skiptir máli

Service Standard, sem haldið er við í þjónustuhandbók GOV.UK, krefst þess að hver úttekt á tilteknum tímapunkti (alfa, beta, rekstur) á stafrænni þjónustu ríkisins sýni — meðal 14 liða sinna — að teymið skilji þarfir notenda, vinni í þverfaglegu teymi, þrói og bæti oft og *meti verkfæri, kerfi og vinnubrögð*. Sögulega sat þetta við hlið opinbers Performance Platform þar sem hver virk þjónusta birti færslugögn sín opinskátt; sá vettvangur hefur síðan verið lagður niður, en undirliggjandi skylda til að mæla og birta þessa fjóra kjarnamælikvarða helst í gegnum leiðsögn þjónustuhandbókarinnar um „mælingu árangurs“. Ástæðan fyrir því að þetta er frábrugðið almennu KPI-mælaborði í hugbúnaði er að þessir mælikvarðar voru sérstaklega hannaðir sem eitt tengt efnahagslíkan, ekki fjórar óháðar einkunnir: allur sparnaðartilgangur stafræns ríkis — Digital Efficiency Report hjá Government Digital Service fann að stafrænar færslur væru um það bil 20 sinnum ódýrari en símleiðis og um 50 sinnum ódýrari en á staðnum fyrir sambærilega þjónustu sveitarfélaga — verður aðeins að veruleika ef lokahlutfall helst hátt og stafræn notkun eykst raunverulega, frekar en að ódýrri leið sé einfaldlega bætt við hlið óbreyttrar dýrrar leiðar.

## Stærðfræðin

```
Kostnaður á hverja færslu = heildarrekstrarkostnaður þjónustu / fjöldi lokinna færslna
Lokahlutfall              = lokið færslur / hafnar færslur × 100
Stafræn notkun            = færslur um stafræna leið / færslur um allar leiðir × 100
Ánægja notenda            = % ánægð + mjög ánægð, í 5 punkta könnun innan þjónustu

Sparnaður af tilfærslu milli leiða = fjöldi færslna × tilfærsla í notkun × (kostnaður á hverja
                        færslu á gömlu leiðinni − kostnaður á hverja færslu stafrænt)

Kostnaður bilunareftirspurnar = (1 − lokahlutfall) × færslur reyndar stafrænt ×
                        kostnaður varaleiðarinnar sem þeir notendur nota þá í staðinn
```

## Dæmi útreiknað

**Skýringardæmi um endurnýjun leyfis hjá miðstjórn**, 2 milljónir færslna á ári, nú 65% símleiðis (3,00 £/færslu) og 35% stafrænt (0,30 £/færslu), lokahlutfall 80%. Endurhönnun gagnvart 14 liða Service Standard hækkar stafræna notkun í 60% og lokahlutfall í 92%:

```
Sparnaður af tilfærslu í notkun = 2.000.000 × 0,25 × (3,00 − 0,30) = 1.350.000 £/ár

Kostnaður bilunareftirspurnar, fyrir:
  2.000.000 × 0,35 × (1 − 0,80) × 3,00 £ = 420.000 £/ár (þeir sem hætta falla aftur á síma)

Kostnaður bilunareftirspurnar, eftir:
  2.000.000 × 0,60 × (1 − 0,92) × 3,00 £ = 288.000 £/ár

Nettósparnaður bilunareftirspurnar = 420.000 £ − 288.000 £ = 132.000 £/ár

Heildarsparnaður á ári ≈ 1.350.000 £ + 132.000 £ = 1.482.000 £/ár
```

Reikningurinn gerir skýrt hvers vegna lokahlutfall er ekki aukamælikvarði: án úrbótarinnar úr 80% í 92% yrði hluti sparnaðar af tilfærslu í notkun tekinn aftur af bilunareftirspurn sem beinir svekktum stafrænum notendum beint aftur í dýru símaleiðina.

## Tengsl við hugbúnaðarverkfræði

Þessir fjórir mælikvarðar eru virkt dæmi um kostnaðar-afleiðingamælaborð: einn kostnaðarmælikvarði haldið aðskildum frá þremur útkomu-/gæðamælikvörðum, viljandi aldrei þjappað í eina einkunn — sami agi og mælt er fyrir um í [lykilárangursmælikvarðar opinbera geirans](../lykilárangursmælikvarðar-opinbera-geirans/). Fyrir verkfræðinga skiptist þetta í áþreifanlega, eigandi hæfa vinnu: lokahlutfall er vandi um mælingar á trekt, og hver brottfallspunktur í ferðalaginu er í grundvallaratriðum staðsetjanlegur og lagfæranlegur; kostnaður á hverja færslu krefst raunverulegs einingarkostnaðarbókhalds sem nær til kostnaðar við aðstoð starfsfólks og pappírsleiða, ekki aðeins útgjalda til skýhýsingar (sjá [kostnaður á hverja færslu](../kostnaður-á-hverja-færslu/) og [heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/)); og stafræn notkun er jafnræðismælikvarði klæddur í skilvirknibúning — borgararnir sem geta ekki eða vilja ekki skipta um leið eru óhóflega oft eldri, fatlaðir eða stafrænt útilokaðir, svo ágeng lokun leiða breytir „sparnaði“ í aðgangsskaða (sjá [stafræn þátttaka](../stafræn-þátttaka/) og [sparnaður af tilfærslu milli þjónustuleiða](../sparnaður-af-tilfærslu-milli-þjónustuleiða/)). 14 liða staðallinn sjálfur er ferlalýsingin að baki þessum tölum — sjá [staðall um stafræna þjónustu](../staðall-um-stafræna-þjónustu/) fyrir staðalinn í heild, og [mælikvarðar á ánægju borgara](../mælikvarðar-á-ánægju-borgara/) fyrir hvernig ánægjutalan hér tengist víðari traustsmælingum.

## Gildrur

- **Notkun aukin með því að loka valkostaleiðinni**: að loka símalínu hækkar stafrænt notkunarhlutfall reikningslega en varpar bilunareftirspurn á hvaða leið sem eftir er (oft dýrari aðstoðaða stafræna leið eða leið á staðnum); mældu alltaf heildarkostnað kerfisins, ekki hlutfallið eitt og sér.
- **Að mæla lokahlutfall frá skrefi tvö í trektinni**: að hefja „hafið“ talninguna eftir fyrsta raunverulega brottfallspunkt smjaðrar fyrir lokahlutfallinu og felur stærsta lagfæranlega tapið.
- **Kostnaður á hverja færslu án aðstoðaðs stafræns stuðnings**: einingarkostnaður eingöngu stafrænn sem hunsar starfsmannatímann sem fer í að hjálpa notendum sem geta ekki afgreitt sig sjálfir vanmetur raunverulegan kostnað leiðarinnar.
- **Að birta mælikvarða án sameiginlegrar skilgreiningar milli þjónusta**: „færsla“ og „lokið“ þýða ólíkt hjá ólíkum þjónustuteymum nema skilgreiningar séu staðlaðar og útgáfustýrðar, sem gerir samanburð milli þjónusta óáreiðanlegan.

## Heimildir

- GOV.UK Service Manual, „The Service Standard.“ <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, „Measuring Success — Data You Must Publish.“
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, „Digital Efficiency Report.“
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
