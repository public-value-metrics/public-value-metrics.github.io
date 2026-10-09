# Verðmæti netöryggis í opinbera geiranum

Verðmæti netöryggis í opinbera geiranum er sá agi að verðleggja áhættulækkun: hvers virði er að gera brot á gögnum borgara ólíklegra, í ljósi þess að öryggisútgjöld skila engri sýnilegri afurð þegar þau virka og mjög sýnilegri þegar þau bregðast? Fyrir þjónustu sem geymir bótaskrár, heilbrigðisgögn eða skattskrár er þessi eiginleiki „ósýnilegt þegar það virkar“ einmitt ástæðan fyrir því að hún þarfnast skýrra verðmætaraka, ekki bara hakað í reit um fylgni.

## Hvers vegna það skiptir máli

Cyber Assessment Framework (CAF) frá National Cyber Security Centre í Bretlandi gefur opinberum stofnunum skipulega leið til að gera öryggi að matshæfum, útkomumiðuðum aga fremur en gátlista: hann skilgreinir fjögur yfirmarkmið (að stýra öryggisáhættu, að verjast netárásum, að greina netöryggisatburði og að lágmarka áhrif atvika) brotin niður í framlagandi útkomur sem kerfiseigandi getur verið metinn gegn, í sama anda og liður 9 í [staðli um stafræna þjónustu](../staðall-um-stafræna-þjónustu/) („búðu til örugga þjónustu sem verndar friðhelgi notenda“). Það sem CAF-mat ver gegn hefur skjalfestan verðmiða: Cost of a Data Breach Report frá IBM rekur meðalkostnað brota eftir geirum og hefur stöðugt leitt í ljós að opinberi geirinn er í lægri enda bilsins miðað við fjármál eða heilbrigðisþjónustu — nýlegar útgáfur setja meðaltal opinbera geirans í kringum 2,6–2,9 milljónir $ á brot — en „lægra en fjármál“ er ekki „lágt“, og brot hjá hinu opinbera bera kostnað sem tölur skýrslunnar fanga ekki til fulls: glatað traust borgara á stafrænum leiðum, sem dregur úr [stafrænni notkun](../sparnaður-af-tilfærslu-milli-þjónustuleiða/) sem viðskiptarök fyrir tilfærslu milli þjónustuleiða byggja á, og pólitískan og lagalegan kostnað við að afhjúpa gögn sem ríkið krafðist þess í upphafi að borgarar afhentu.

## Stærðfræðin

Öryggisfjárfesting er verðmetin eins og hver önnur áhættulækkandi útgjöld: sem lækkun væntanlegs taps, með klassískri áhættustjórnunarjöfnu.

```
Ársbundið væntanlegt tap (ALE) = Stakt væntanlegt tap (SLE)
                                × Ársbundin tíðni atburðar (ARO)

Virði öryggisstýringar =
  ALE_fyrir_stýringu − ALE_eftir_stýringu − árlegur kostnaður stýringarinnar

Stýring er þess virði að fjármagna þegar:
  (ALE_fyrir − ALE_eftir) > árlegur kostnaður stýringarinnar

CAF-mat skilar ekki beint líkindum, en útkomusnið þjónustu í CAF (hvaða
framlagandi útkomur eru „náðar“, „að hluta náðar“ eða „ekki náðar“) er
sanngjarnt staðgengilsinntak til að meta ARO — kerfi með óstýrðan
forréttindaaðgang eða án prófaðrar viðbragðsáætlunar við atvikum hefur
verulega hærra raunhæft ARO en kerfi með hvort tveggja til staðar.
```

## Dæmi útreiknað

**Málastjórnunarkerfi sýslunefndar sem geymir félagsþjónustuskrár 40.000 íbúa**:

```
Stakt væntanlegt tap (kostnaður brots), með meðaltali opinbera geirans úr
nýlegri Cost of a Data Breach Report frá IBM ≈ 2,1 m£
(umreiknað, stærðargráðutala — leiddu alltaf aftur út úr núgildandi
útgáfu skýrslunnar frekar en að endurnýta fasta tölu)

Núverandi ARO (óstýrður forréttindaaðgangur, engin prófuð viðbrögð við
atvikum, samkvæmt innra CAF-sjálfsmati sem sýnir margar „ekki náðar“
útkomur) ≈ áætluð 8% á ári
  ALE_fyrir = 2,1 m£ × 0,08 = 168.000 £/ár

Fyrirhuguð stýring: stjórnun forréttindaaðgangs + prófuð viðbragðsáætlun við
atvikum, sem færir viðeigandi CAF-útkomur í „náðar“, áætlað að lækka ARO í 3%/ár
  ALE_eftir = 2,1 m£ × 0,03 = 63.000 £/ár

Árlegur kostnaður stýringarinnar (verkfæri + ferli + prófanir) = 45.000 £

Virði stýringarinnar = (168.000 − 63.000) − 45.000 = 60.000 £/ár
  nettó jákvætt — fjármagnaðu hana. Reikningurinn sýnir líka að stýringin
  væri enn þess virði að fjármagna við næstum þrefaldan kostnað, sem er
  sú tegund næmisathugunar sem ætti að fylgja hverri ALE-tölu
  byggðri á áætluðum líkindum.
```

## Tengsl við hugbúnaðarverkfræði

Verkfræðingar eiga flest handföngin í ALE-jöfnunni: hönnun aðgangsstýringar, hreinlæti í ávörpum og lagfæringum, skráning og greiningarþekja og viðbragðsverkfæri við atvikum hreyfa allt ARO-liðinn beint, sem er ástæðan fyrir því að CAF-mat les sig eins og tæknileg arkitektúrúttekt jafnt og stefnuúttekt. Þetta er [tæknileg skuld sem rýrnun opinbers verðmætis](../tæknileg-skuld-sem-rýrnun-opinbers-verðmætis/) í sinni bráðustu mynd — ólagfærð, óvöktuð og illa aðgangsstýrð kerfi eru skuld þar sem vaxtagreiðslan er halaáhætta, ekki stöðugur dráttur — og ætti að samræma við [heildareignarkostnaður í upplýsingatækni hins opinbera (TCO)](../heildareignarkostnaður-í-upplýsingatækni-hins-opinbera/) svo öryggisútgjöld séu ekki meðhöndluð aðskilin frá raunverulegum rekstrarkostnaði kerfisins. Þetta er líka beint inntak í mat á [hagkvæmni útgjalda](../hagkvæmni-útgjalda/) samkvæmt Green Book: áhættuleiðréttur kostnaður er hluti kostnaðarhliðar hvers valkostamats, ekki eftiráhugsun bætt við í lokin.

## Gildrur

- **Að líta á CAF-sjálfsmat sem öryggið sjálft**: lokið mat lýsir öryggisstöðu; það býr hana ekki til — verðmætið er í útkomunum sem nást, ekki skjalinu.
- **Að nota hnattræn meðaltöl brotakostnaðar sem staðbundið mat án leiðréttingar**: tölur IBM eru meðaltöl yfir stór og fjölbreytt úrtök; raunhæft stakt væntanlegt tap lítils sveitarfélags er sjaldan það sama og hjá landsbundnu ráðuneyti.
- **Að hunsa sálfræði halaáhættu í fjárfestingarákvörðunum**: lág árleg líkindi gera auðvelt að fresta öryggisútgjöldum endalaust, fram að árinu þegar það á ekki við — að næmisprófa ALE-útreikninginn gagnvart bili af ARO, eins og í dæminu, vinnur gegn því.
- **Að telja aðeins brotakostnað að hætti IBM, ekki traustskostnað**: brot sem dregur úr vilja borgara til að nota stafrænar leiðir rýrir rökin fyrir [sparnaður af tilfærslu milli þjónustuleiða](../sparnaður-af-tilfærslu-milli-þjónustuleiða/) árum saman á eftir, kostnaður sem sjaldan er tekinn með í mat á brotakostnaði.

## Heimildir

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
