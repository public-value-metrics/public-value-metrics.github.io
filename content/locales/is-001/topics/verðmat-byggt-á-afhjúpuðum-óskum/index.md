# Verðmat byggt á afhjúpuðum óskum

Aðferðir afhjúpaðra óska álykta um virði gæða utan markaðar út frá sjáanlegri hegðun á skyldum markaði, í stað þess að spyrja fólk beint. Hedónísk verðlagning og ferðakostnaðaraðferðin eru tvær burðarstoðir aðferðanna: báðar hefjast á raunverulegri færslu og leiða út óbeint verð á því sem aldrei var selt beint.

## Hvers vegna það skiptir máli

Þar sem aðferðir [yfirlýstra óska](../verðmat-byggt-á-yfirlýstum-óskum/) spyrja tilgátulegrar spurningar, fylgjast aðferðir afhjúpaðra óska með því sem fólk greiddi í raun fyrir, sem Green Book lítur á sem almennt trúverðugri sönnunargögn, að öðru jöfnu, því þau eru ekki háð tilgátuskekkju — svarendur í hedónískri rannsókn á húsnæðisverði greiddu í raun álagið eða afsláttinn sem verið er að mæla (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hedónísk verðlagning sundurgreinir markaðsverð — venjulega húsnæðisverð — í óbeint verð fyrir hvern eiginleika gæðanna, sem gerir greinendum kleift að einangra til dæmis það verðálag sem heimili greiða í raun fyrir að búa einhvers staðar rólegra eða með betri loftgæði, með tölfræðilegri stýringu fyrir alla aðra eiginleika sem líka hafa áhrif á húsnæðisverð (stærð, staðsetning, skólahverfi). Ferðakostnaðaraðferðin gerir hliðstæða hluti fyrir útivistarsvæði án aðgangseyris: tíminn og féð sem fólk eyðir í að ferðast á svæði afhjúpar neðri mörk á því hvers virði svæðið er þeim, því enginn leggur út kostnað umfram það sem heimsóknin er honum virði.

Báðar aðferðir deila byggingarlegri takmörkun: þær geta aðeins metið það sem er fellt inn í núverandi markaðsfærslu. Hávaði nálægt flugbraut kemur fram í húsnæðisverði því þeir sem láta sig hávaða varða flokkast í rólegra húsnæði; tilvistarvirði tegundar sem enginn heimsækir eða býr nálægt kemur hvergi fram í neinni færslu, sem er einmitt bilið sem aðferðir [yfirlýstra óska](../verðmat-byggt-á-yfirlýstum-óskum/) eru til að fylla.

## Stærðfræðin

```
Hedónísk verðlagning:
  Húsnæðisverð = f(byggingareiginleikar, staðsetningareiginleikar,
                    umhverfiseiginleiki sem skoðaður er, ...)
  Metið með aðhvarfi; stuðullinn á umhverfiseiginleikanum (með allt annað
  óbreytt) er óbeint verð hans.

  Óbeint verð eiginleika X = ∂(Húsnæðisverð) / ∂X

Ferðakostnaðaraðferð:
  Heimsóknarhlutfall (heimsóknir á mann frá svæði i) = f(ferðakostnaður frá svæði i,
                    staðgöngusvæði, félagshagfræðilegar stýribreytur)
  Metin er eftirspurnarferill fyrir heimsóknir sem fall af ferðakostnaði.
  Neytendaafgangur = flatarmál undir metnum eftirspurnarferli
                    = virði svæðisins fyrir gesti
```

Báðar aðferðir krefjast tölfræðilega traustrar stýrisafns — að sleppa ruglingsþætti (hedónískt) eða nálægu staðgöngusvæði (ferðakostnaður) skekkir óbeina verðið í átt sem er ekki alltaf augljós fyrirfram, sem er ástæðan fyrir því að Annex 2 í Green Book krefst þess að aðhvarfslýsingin og stýribreyturnar séu tilkynntar, ekki aðeins fyrirsagnarstuðullinn.

## Dæmi útreiknað

**Ríkisstjórn**: aðferðafræði Green Book sjálfs um skuggaverð kolefnis sækir að hluta í hedónísk sönnunargögn, en einfaldara skýringardæmi er flugvélahávaði. Hedónísk rannsókn sem lætur söluverð húsnæðis á flugleiðarsvæði ganga aðhvarfi á móti fjarlægðarvigtaðri hávaðaálagningu, með stýringu fyrir stærð, aldur og skólahverfi, finnur að hver 1 desíbela hækkun á meðalhávaða tengist 0,5% lækkun húsnæðisverðs. Fyrir dæmigert 280.000 £ hús á áhrifasvæðinu:

```
Óbeint verð á desíbel = 280.000 £ × 0,5% = 1.400 £ á heimili
Heimili fyrir áhrifum af 3 dB hækkun vegna nýrrar flugbrautar = 18.000
Samanlagður óbeinn kostnaður hávaðaaukningar = 1.400 £ × 3 × 18.000 = 75,6 m£
```

Þetta er einskiptis kostnaður í núvirði (innfelldur í húsnæðisverð), sem matið verður að gæta þess að tvítelja ekki gegn sérstaklega metnum árlegum kostnaðarstraumi vegna hávaðaónæðis.

**Góðgerðarfélag**: umhverfisgóðgerðarfélag notar ferðakostnaðaraðferðina til að verðmeta friðland sem er ókeypis að koma í. Könnunargögn um póstnúmer gesta gefa meðalferðakostnað fram og til baka (tími metinn á því virði fyrir tíma utan vinnu sem Green Book mælir með, auk eldsneytis) upp á 14 £ á heimsókn, með 40.000 heimsóknum á ári. Metni eftirspurnarferillinn — heimsóknarhlutföll sem falla þegar ferðakostnaður frá svæði hækkar — gefur til kynna neytendaafgang á heimsókn, umfram þær 14 £ sem í raun var eytt, upp á um það bil 9 £.

```
Heildarvirði á ári = 40.000 heimsóknir × (14 £ eytt + 9 £ neytendaafgangur)
                   = 40.000 × 23 £ ≈ 920.000 £/ár
```

Þetta ber langt af tekjum friðlandsins með núll aðgangseyri og gefur stjórnarmönnum góðgerðarfélagsins réttlætanlega tölu fyrir útivistarvirði staðarins þegar rök eru færð fyrir fjármögnunaraðilum.

## Tengsl við hugbúnaðarverkfræði

Hugsun afhjúpaðra óska kemur fram í vörugreiningu hins opinbera oftar en iðkendur gera sér grein fyrir: notkunargögn úr ókeypis stafrænni þjónustu ríkisins eru sjálf sönnunargögn um afhjúpaðar óskir um virði (tíðni, lengd lotu og — mest upplýsandi — mynstur endurtekinnar á móti einskiptis notkunar má greina á sama hátt og ferðakostnaðarlíkan meðhöndlar heimsóknartíðni gagnvart fjarlægð). Þar sem þjónusta hefur raunverulega staðgengla (pappírsleið, símalína) má meta „kostnaðinn“ sem borgarar leggja á sig til að nota stafrænu leiðina í staðinn (tíma, gögn, tæki) og bera saman við notkun, sem bergmálar ferðakostnaðarrökfræðina beint. Sjá [staðall um stafræna þjónustu](../staðall-um-stafræna-þjónustu/) og [verðmæti opinna gagna](../verðmæti-opinna-gagna/), sem stendur frammi fyrir nákvæmlega þessum verðmatsvanda fyrir gæði án beins markaðsverðs.

## Gildrur

- **Skekkja vegna ofsleppts breytu í hedónískum líkönum.** Að sleppa tengdum eiginleika (skólagæði sem tengjast bæði húsnæðisverði og umhverfisbreytunni sem skoðuð er) skekkir mat á óbeinu verði; lýsing líkansins þarf að vera tilkynnt og rýnd, ekki aðeins niðurstaðan.
- **Að hunsa staðgöngusvæði í ferðakostnaðarrannsóknum.** Afhjúpað virði gests fyrir svæði er vanmetið ef nær staðgöngusvæði er til og ekki stýrt fyrir — hann getur verið að heimsækja aðallega vegna þess að það er ókeypis, ekki vegna þess að það sé einstaklega verðmætt.
- **Að beita afhjúpuðum óskum á gæði án nokkurs markaðsbergmáls.** Tilvistarvirði, valkostavirði og arfleifðarvirði koma ekki fram í neinni færslu og er ekki hægt að endurheimta með hedónískum eða ferðakostnaðaraðferðum — það bil tilheyrir [verðmat byggt á yfirlýstum óskum](../verðmat-byggt-á-yfirlýstum-óskum/).
- **Að rugla saman núvirtu (einskiptis) virði og árlegu flæði.** Hedónísk áhrif á húsnæðisverð eru yfirleitt einskiptis núvirt virði; að meðhöndla þau sem árlegan ávinningsstraum blæs upp matið.

## Heimildir

- HM Treasury. „The Green Book,“ Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. „Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition.“
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. „Economics of Outdoor Recreation.“ Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
