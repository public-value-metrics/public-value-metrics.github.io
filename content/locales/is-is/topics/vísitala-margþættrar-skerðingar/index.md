# Vísitala margþættrar skerðingar (IMD)

IMD er hinn opinberi mælikvarði á hlutfallslega skerðingu fyrir lítil svæði á Englandi, sem raðar öllum 32.844 Lower-layer Super Output Areas (LSOA, hvert með um það bil 1.500 íbúa) landsins frá 1 (mest skert) til 32.844 (minnst skert). Hún er gefin út af því sem nú er Ministry of Housing, Communities and Local Government (MHCLG, áður MHCLG/DCLG), síðast sem English Indices of Deprivation 2019, og hún stýrir beint fjárveitingum miðstjórnarinnar, forgangsröðun lýðheilsu og réttindum að tugum staðbundinna áætlana.

## Hvers vegna það skiptir máli

Skerðing er ekki eitt fyrirbæri — hverfi getur verið tekjulágt en öruggt, eða með fullnægjandi tekjur en þjást af lélegri heilsu og slæmu húsnæði. Forverar IMD (sem ná aftur til skerðingarvísa Department of the Environment á áttunda áratugnum) þróuðust yfir í sjö sviða líkanið í dag einmitt vegna þess að markhópagreining á einum vísi (til dæmis atvinnuleysi eitt og sér) missti reglulega af svæðum sem voru skert á annan hátt. IMD 2019 sameinar tekjur, atvinnu, menntun, heilsu, glæpi, hindranir að húsnæði og þjónustu og búsetuumhverfi í eina samsetta röðun á hvert LSOA, hvert svið byggt úr eigin safni vísa og vigtað samkvæmt aðferðafræði MHCLG. Þar sem hún starfar á stigi lítilla svæða (LSOA) frekar en sveitarfélaga afhjúpar hún skerðingarvasa falda innan annars velmegandi umdæma — ástæðan fyrir því að IMD, ekki meðaltekjur sveitarfélags, er það sem NHS England, nemendaálag (pupil premium) menntamálaráðuneytisins og tugir fjármögnunarformúla sveitarfélaga miða í raun við. Hugbúnaður sem ákvarðar réttindi, forgangsraðar útbreiðslustarfi eða tilkynnir áhrif eftir svæðum á Englandi ætti að líta á IMD-tíundarhluta eða röðun sem fyrsta flokks inntak, ekki eftiráhugsun — og þar sem áætlun beinist viljandi að mest skertu svæðunum ætti mat hennar að beita [dreifingarvigtun](../dreifingarvigtun/) í samræmi við þá markhópagreiningu, frekar en að verðmeta pund af ávinningi eins óháð því hvar það lendir.

## Stærðfræðin

```
7 svið, vigtuð:
  Tekjur                              22,5%
  Atvinna                             22,5%
  Menntun, færni og þjálfun           13,5%
  Heilsuskerðing og fötlun            13,5%
  Glæpir                               9,3%
  Hindranir að húsnæði og þjónustu     9,3%
  Búsetuumhverfi                       9,3%

Einkunn hvers sviðs: vísar staðlaðir (raðað, síðan umbreytt í átt að
normaldreifingu) og sameinaðir með veldisvísisumbreytingu
þannig að mikil skerðing á einum vísi geti ekki að fullu verið
afnumin af lítilli skerðingu á öðrum innan sviðsins.

IMD samsett einkunn (LSOA) = Σ (einkunn sviðs × vigt sviðs)
Raðaðu LSOA eftir samsettri einkunn → 1 (mest skert) til 32.844 (minnst skert)
Tíundarhlutar: röðun ÷ 3.284 (um það bil), tíundarhluti 1 = mest skertu 10% LSOA
```

## Dæmi útreiknað

**Samsett einkunn LSOA**, með skýringarstöðluðum einkunnum sviða (0 = ekkert skerðingarmerki, hærra = meira skert):

```
Tekjur               0,35 × 0,225 = 0,07875
Atvinna              0,30 × 0,225 = 0,06750
Menntun              0,20 × 0,135 = 0,02700
Heilsa               0,15 × 0,135 = 0,02025
Glæpir               0,10 × 0,093 = 0,00930
Hindranir húsnæðis   0,05 × 0,093 = 0,00465
Búsetuumhverfi       0,08 × 0,093 = 0,00744

Samsett einkunn = 0,07875 + 0,06750 + 0,02700 + 0,02025
                + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Þessi samsetta einkunn er síðan röðuð gegn einkunnum allra 32.844 LSOA. Ef hún setur LSOA í röðun 2.950 fellur það í tíundarhluta 1 (2.950 ÷ 3.284 ≈ 0,9, þ.e. innan mest skertu 10% hverfa á Englandi) — sem fyrir margar fjármögnunarformúlur er þröskuldurinn sem opnar réttindi, óháð því hvernig sveitarfélagið í kring skorar að meðaltali.

## Tengsl við hugbúnaðarverkfræði

- Hver þjónusta sem hnitsetur notendur á póstnúmer eða LSOA getur tengt við birta IMD-uppflettitöflu (ókeypis, útgáfumerkt CSV frá MHCLG) til að bæta skerðingartíundarhluta við sem skýribreytu — til að beina útbreiðslustarfi, forgangsraða málafjölda eða tilkynna útkomur eftir skerðingarbandi án þess að safna nýjum persónuupplýsingum.
- IMD-tíundarhluti er staðlað jafnræðispróf fyrir opinbera stafræna þjónustu: þverflokkun á nýtingu þjónustu, brottfalli eða ánægju eftir IMD-tíundarhluta dregur fram aðgangsbil sem heildarmælikvarði felur — sjá [stafræn þátttaka](../stafræn-þátttaka/) og [mælikvarðar á ánægju borgara](../mælikvarðar-á-ánægju-borgara/).
- Þar sem IMD-röðun er hlutfallsleg (hún leggst alltaf saman í fast safn raðstiga yfir England) getur hún ekki sýnt hvort skerðing á landsvísu eykst eða minnkar með tímanum — aðeins hvaða svæði raðast hvar miðað við hvert annað í þeirri útgáfu; ekki smíða mælaborð um algilda þróun á hrárri IMD-röðun einni saman.

## Gildrur

- **Að bera IMD-raðir saman milli útgáfa (2015 á móti 2019) sem tímaþróun** — undirliggjandi vísar, landsvæði og aðferðafræði breytast öll milli útgáfa; MHCLG ráðleggur sérstaklega gegn því að nota breytingar á röðun sem sönnun þess að svæði hafi orðið meira eða minna skert.
- **Að beita IMD á stigi LSOA á einstaklinga** — LSOA í tíundarhluta 1 inniheldur samt óskert heimili, og LSOA í tíundarhluta 10 inniheldur samt skert; IMD lýsir svæðum, ekki fólki, og að nota hana sem staðgengil einstaklingsréttinda flokkar rangt í báðar áttir.
- **Að hunsa upplýsingar á stigi sviða til hagsbóta fyrir samsetta röðun** — tvö LSOA með eins samsettar einkunnir geta haft gjörólík sviðasnið (annað heilsuskert, hitt glæpaskert); markhópaáætlun sem beinist að einu vandamáli ætti að nota viðkomandi sviðseinkunn, ekki hina blönduðu samsettu.

## Heimildir

- Ministry of Housing, Communities and Local Government. „English Indices of Deprivation 2019.“
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. „The English Indices of Deprivation 2019: Technical Report.“
