# Tæknileg skuld sem rýrnun opinbers verðmætis

Tæknileg skuld (technical debt) er líking Ward Cunningham frá 1992 um væntanlegan framtíðarkostnað af skyndilausnum í fyrri forritunarákvörðunum: **höfuðstóll** (úrbótavinnan sem skuldað er) og **vextir** (stöðugi dráttarkrafturinn sem hún beitir á afhendingu). Í gömlu upplýsingatæknisafni hins opinbera eru þeir vextir greiddir beint úr opinberu verðmæti — hægari afhending lögbundinna breytinga, hærri bilanatíðni í þjónustu sem snýr að borgurum og minnkandi hópur fólks sem getur yfirhöfuð snert kerfið á öruggan hátt.

## Hvers vegna það skiptir máli

Gömul stórtölvukerfi og kerfi frá COBOL-tímanum hjá breskum ráðuneytum — HMRC og DWP einna oftast nefnd — bera vel skjalfesta og vaxandi áhættu sem National Audit Office hefur ítrekað bent á, þar á meðal í skýrslu sinni *Digital Transformation in Government* (<https://www.nao.org.uk/>): gamlir vettvangar sem eru dýrir í breytingum, sífellt erfiðari að tryggja og háðir sérfræðingahópi sem hættir störfum hraðar en honum er skipt út. Ólíkt uppsöfnuðum verkum í einkageiranum situr þessi skuld beint milli borgara og lögbundinna réttinda þeirra — útreikningsvél bóta sem ekki er hægt að breyta á öruggan hátt er hindrun fyrir framkvæmd stefnu, ekki bara óþægindi fyrir verkfræðinga. Endurræsing Universal Credit upplýsingatækniáætlunarinnar 2013, þegar National Audit Office komst að því að upprunalega smíðin myndi ekki skila hagkvæmni útgjalda og verulegur hluti hugbúnaðareignarinnar þurfti að afskrifa, er klassískt dæmi um óverðlagða tæknilega skuld sem nær í skottið á virkri, ráðherrasýnilegri opinberri áætlun.

## Stærðfræðin

```
SQALE-höfuðstóll = Σ yfir brot (úrbótatími) × launakostnaður forritara á klst.
Hlutfall tæknilegrar skuldar (TDR) = úrbótakostnaður / endurþróunarkostnaður × 100
                    (SonarQube einkunnir: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Vextir (talan sem réttlætir niðurgreiðslu):
  vextir/ár = Δ afhendingarhraði × virði á einingu hraða
            + Δ atvikatíðni sem snýr að borgurum × kostnaður á atvik
            + álag fyrir sérfræðikunnáttu × fjöldi starfsfólks sem hún nær til
Niðurgreiðslurök = PV(vextir sem afstýrist yfir tímaskeiðið) − úrbótakostnaður
                   (núvirt á samfélagslegum afsláttarstuðli Green Book, sjá
                   social-discount-rate.md)
```

Höfuðstóll segir til um skuldbindinguna; vextir eru það sem færir fjárfestingarrökin fyrir ríkisreikningsnefnd.

## Dæmi útreiknað

250.000 línu vél til afgreiðslu krafna skrifuð í gömlu 4GL. Með viðmiðinu úr CAST Appmarq upp á um það bil 3,61 $ af höfuðstól tæknilegrar skuldar á hverja kóðalínu (≈2,85 £ við dæmigerða umreikninga):

```
Höfuðstóll ≈ 250.000 × 2,85 £ ≈ 712.500 £
TDR ≈ 16% (einkunn C)
```

Mældir vextir: ráðuneytið heldur þremur sérfræðiverktökum á 40% dagtaxtaálagi yfir venjulegum töxtum eldri verkfræðinga því innanhússkunnátta hefur rýrnað — aukalega 180.000 £/ár á sex manna teymi. Kerfið veldur einnig fjórum stórum afgreiðslurofum á ári, hver stöðvar ákvarðanir fyrir um 5.000 umsækjendur og beinir þeim í samskiptaver á um það bil 25 £ á símtal:

```
Vextir ≈ 180.000 £ (álag fyrir sérfræðikunnáttu)
       + 4 × 5.000 × 25 £ = 500.000 £ (kostnaður vegna endurbeindra samskipta)
       ≈ 680.000 £/ár
```

Markviss úrbót á verst stæðu einingunum kostar 1.200.000 £ og er líkönuð til að lækka vexti um 70%:

```
Lækkun vaxta = 0,70 × 680.000 = 476.000 £/ár
Endurgreiðslutími ≈ 1.200.000 / 476.000 ≈ 2,5 ár
```

Markvissun skiptir máli: úrbót á sjaldan snertum kóða kaupir ekkert, því vextir safnast þar sem bæði breytingatíðni og skuldaþéttleiki ná hámarki.

## Tengsl við hugbúnaðarverkfræði

Rammi opinbers verðmætis sem færir rök um tæknilega skuld lengra en „kóðinn er gamall“: settu gamla kerfissafnið fram sem skrá yfir hvar glötuð afhendingargeta safnast saman, og tengdu það skýrt við [heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/), því vextir eru rekstrarkostnaður sem á heima í TCO-línunni hvort sem fjármáladeild hefur nokkru sinni spurt um hann. Kerfi með mikla skuld bera einnig óhóflega [netöryggisáhættu](../verðmæti-netöryggis-í-opinbera-geiranum/), því lagfæringatíðni og skuldaþéttleiki fylgjast að — ólagfæranlegt gamalt kerfi er tæknileg skuld þar sem vextirnir eru greiddir í atvikaáhættu fremur en pundum. Og hver málamiðlun milli úrbóta og eiginleika er sjálf ákvörðun um [kostnaður við tafir í opinberum áætlunum](../kostnaður-við-tafir-í-opinberum-áætlunum/): að greiða niður skuld seinkar næstu lögbundnu breytingu, sem hefur eigin CoD sem verður að vega gegn vöxtunum sem sparast.

## Gildrur

- **Skýrslugjöf um höfuðstól eingöngu**: stórt, ógnvekjandi mat á úrbótum án vaxtatölu réttlætir ekkert fyrir útgjaldasamþykkjara.
- **Að taka skuldatölur frá verkfærum bókstaflega**: SQALE-líkir skannar telja reglubrot; þeir missa af dýrasta tagi skuldar — arkitektúrákvörðunum og óskjalfestum gömlum viðskiptareglum — á meðan þeir flagga smáatriðum.
- **„Endurritunin afstýrir öllu því“**: skiptiáætlanir verða að standast sama aga og hver önnur viðskiptarök — mótstaðreyndarkostnað, líkur á árangri og núvirðingu — ekki undanþágu frá honum, eins og endurræsing Universal Credit 2013 sýndi.
- **Útópía núllskuldar**: ákjósanlegt skuldastig er ekki núll; skuld er skuldsetning sem keypti fyrri afhendingu. Spurningin sem skiptir máli er alltaf vaxtahlutfallið, ekki hvort skuld sé til yfirhöfuð.

## Heimildir

- Cunningham W, „The WyCash Portfolio Management System“, OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
