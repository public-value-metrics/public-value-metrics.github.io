# Framleiðni opinberrar þjónustu

Framleiðni opinberrar þjónustu mælir hve skilvirkt opinber útgjöld umbreyta aðföngum (starfsfólki, fjármagni, vörum og þjónustu) í gæðaleiðréttar afurðir, fyrir þjónustu — heilbrigðisþjónustu, menntun, löggæslu, félagslega umönnun — sem hefur ekkert markaðsverð og þar með enga tekjutölu til að deila kostnaði í. Hagstofa Bretlands (ONS) hefur birt þessa röð frá miðjum fyrsta áratug aldarinnar og hún er enn aðferðafræðilega þróaðasta tilraun landsins til að svara „er ríkið að verða betra eða verra í að umbreyta fé í opinbera þjónustu?“

## Hvers vegna það skiptir máli

Á markaði er framleiðni (virði afurða) / (kostnaður aðfanga), og virði afurða er sjáanlegt því einhver greiðir fyrir það. Mjaðmaliðsskipti, skólapláss og lögreglueftirlit hafa ekkert söluverð, svo barnalega má aðeins mæla *aðföng* (það sem eytt var) — sem freistar álitsgjafa til að líta á hækkandi opinber útgjöld sem sjálfkrafa slæm, þar sem meiri aðföng með óbreyttri fyrirsagnarstarfsemi líta út eins og lækkandi framleiðni. Aðferðafræði ONS, sett fram í „Sources and Methods“ útgáfum þess um framleiðni opinberrar þjónustu, leysir þetta með því að smíða *afurða*vísitölu úr umfangi starfsemi (framkvæmdar aðgerðir, kenndir nemendur, rannsökuð afbrot) og *gæðaleiðrétta* síðan þá afurðavísitölu — fyrir heilbrigðisþjónustu, með lifunarhlutföllum og biðtíma; fyrir menntun, með námsárangri; fyrir löggæslu, með útkomum á borð við úrlausn mála — svo þjónusta sem framkvæmir jafn margar aðgerðir en nær betri lifun skráist sem framleiðnari, ekki aðeins dýrari. Fyrirsagnarniðurstaðan sem kemur ítrekað fram í útgáfum ONS er áhyggjuefni fyrir geirann: framleiðni opinberrar þjónustu í Bretlandi féll verulega í COVID-19 faraldrinum og hafði samkvæmt útgáfum ONS um miðjan þriðja áratuginn enn ekki náð stigum ársins 2019 í nokkrum undirgeirum, þar á meðal heilbrigðisþjónustu, þrátt fyrir að útgjöld jukust — bil sem endurrammar „meira fjármagn“ og „meiri framleiðni“ sem tvær algerlega aðskildar spurningar.

## Stærðfræðin

```
Afurðavísitala (umfang) = Σ (starfsemi_i × hlutfallsleg einingarkostnaðarvigt_i), vigtað á grunnári
                          yfir alla þjónustustarfsemi (t.d. mjaðmaaðgerðir, augasteinsaðgerðir,
                          læknisheimsóknir), hliðstætt Laspeyres/Paasche umfangsvísitölu

Gæðaleiðrétting         = afurðavísitala × gæðaleiðréttingarstuðull
                          (t.d. með breytingu á lifunarhlutföllum, biðtíma,
                          námsárangri eða endurteknum brotum sem margfaldara á hrátt umfang)

Aðfangavísitala         = Σ (vinnustundir × vigt launakostnaðar) + (kostnaður vöru/þjónustu,
                          verðleiðréttur) + (afskrift fjármagns)

Vöxtur heildarþáttaframleiðni = % breyting gæðaleiðréttrar afurðavísitölu
                                − % breyting aðfangavísitölu
```

## Dæmi útreiknað

**Skýringardæmi um framleiðniútreikning NHS fyrir bráðaþjónustu** (uppbygging fylgir aðferðafræði ONS):

```
Ár 1: afurðaumfangsvísitala = 100,0 (grunnár), aðfangavísitala = 100,0
      → framleiðnivísitala = 100,0

Ár 2: umfang starfsemi eykst um 3,0% (fleiri aðgerðir, fleiri tímar)
      en meðalbiðtími versnar, sem beitir gæðaleiðréttingarafslætti upp á −1,0%
      Gæðaleiðrétt afurðavísitala = 100 × 1,030 × 0,990 = 101,97

      Aðföng aukast: starfsmannafjöldi +4,0%, annar kostnaður (verðleiðréttur) +1,5%,
      vigtuð aðfangavísitala = 100 × 1,032 = 103,2

Framleiðnivöxtur = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                 = 1,97% − 3,2% = −1,23 prósentustig

Túlkun: starfsemi jókst, en aðföng jukust hraðar og gæði féllu lítillega,
svo framleiðni — afurðir á hverja aðfangaeiningu — minnkaði þótt „meiri
umönnun væri afhent“.
```

Þetta er nákvæmlega mynstrið sem útgáfur ONS hafa ítrekað tilkynnt fyrir hluta NHS eftir faraldurinn: hækkandi útgjöld og hækkandi hrá starfsemi samhliða fallandi mældri framleiðni þegar bæði gæðaleiðrétting og vöxtur aðfanga eru tekin með.

## Tengsl við hugbúnaðarverkfræði

Framleiðni opinberrar þjónustu er hliðstæðan á þýðisstigi við umræðu um framleiðni í verkfræði (sögustig afhent á móti [DORA-mælikvarðar fyrir opinbert verðmæti](../dora-mælikvarðar-fyrir-opinbert-verðmæti/) á móti [flæðismælikvarðar í afhendingu hins opinbera](../flæðismælikvarðar-í-afhendingu-hins-opinbera/)): hrátt afkastamagn án gæðaleiðréttingar er jafn villandi á sjúkrahúsi og „kóðalínur afhentar“ er í hugbúnaðarteymi. Teymi sem smíða árangursgagnaleiðslur fyrir ráðuneyti ættu að líta á gæðaleiðréttingu sem fyrsta flokks, útgáfustýrt umbreytingarstig, ekki neðanmálsgrein — því trúverðugleiki ONS hvílir á því að sú leiðrétting sé gagnsæ, endurtakanleg og endurskoðuð þegar betri gæðagögn berast (ONS endurskoðar framleiðnimat fyrri ára þegar undirliggjandi gæðagögn — t.d. lifunarhlutföll — eru endanleg, svo hvert niðurstreymiskerfi sem notar þessa tölfræði verður að ráða við afturvirkar endurskoðanir, ekki aðeins bæta við nýjum tímabilum). Þetta skarast einnig beint við [heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/) og [framleiðni gervigreindar í opinbera geiranum](../framleiðni-gervigreindar-í-opinbera-geiranum/): kerfi sem eykur hrátt starfsemisumfang án þess að bæta eða viðhalda gæðum er ekki, samkvæmt skilgreiningu ONS sjálfs, framleiðnibót.

## Gildrur

- **Að líta á vöxt aðfanga sem framleiðnivöxt**: meiri útgjöld sem fjármagna meira starfsfólk skila meiri *starfsemi*, ekki meiri *framleiðni*, nema afurðir á hverja aðfangaeiningu aukist líka — þessu tvennu er reglulega ruglað saman í pólitískri umræðu.
- **Að hunsa gæðaleiðréttingu alfarið**: afurðavísitala byggð eingöngu á hráum starfsemitölum mun sýna „framleiðniaukningu“ af því að gera meira af einhverju með lægra virði eða lægri gæði; gæðaleiðrétting ONS er til sérstaklega til að grípa þetta.
- **Að bera saman framleiðnivísitölur milli undirgeira án þess að samræma aldur aðferðafræði**: framleiðni heilbrigðisþjónustu, menntunar og löggæslu er hver byggð úr ólíkum starfsemi- og gæðagagnalindum á ólíkum endurskoðunarlotum — barnalegur samanburður milli geira ber saman ósamrýmanleg mælitæki.
- **Að lesa eins árs fall í framleiðni sem varanlega þróun**: framleiðnitölur frá faraldrinum og eftir hann hafa sýnt verulegan sveiflukennda breytileika milli ára þar sem gæðagögn (t.d. biðlistar, endurheimt valaðgerða) hafa sjálf breyst; ONS varar stöðugt við því að oftúlka hreyfingar á einu ári.

## Heimildir

- Office for National Statistics, „Public Service Productivity“ series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, „Public Service Productivity: Total, UK — Sources and Methods.“
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
