# Verðmæti opinna gagna

Verðmæti opinna gagna er vandinn við að meta hvers virði gögn ríkis og opinberra aðila eru þegar þau hafa ekkert verð: þau eru ekki seld, svo engin tekjulína er til, en birting þeirra (veðurskrár, tímatöflur samgangna, póstnúmeramörk, fyrirtækjaskrár) skapar sannanlega efnahagslega og félagslega starfsemi síðar í keðjunni. Að verðmeta þau vel skiptir máli því bæði „það kostar ekkert að birta“ og „þau eru einskis virði“ eru röng, og hugbúnaðarverkfræðingur sem ákveður hvort opna eigi forritaskil eða gagnasafn þarf betri rök en annað hvort.

## Hvers vegna það skiptir máli

Mest vitnaða mat að ofan og niður kemur úr skýrslu McKinsey Global Institute frá 2013, „Open data: Unlocking innovation and performance with liquid information“, sem mat mögulegt árlegt virði opinna gagna yfir sjö svið — menntun, samgöngur, neytendavörur, rafmagn, olíu og gas, heilbrigðisþjónustu og neytendafjármál — á 3 til 5 billjónir $ á ári á heimsvísu, með aðferðum þar á meðal auknu gagnsæi, skilvirkari pörun framboðs og eftirspurnar og því að gera mögulegar nýjar vörur og þjónustur byggðar á gögnunum. Sú tala er sviðsmyndamat, ekki mæld útkoma, og er reglulega rangtilvitnuð eins og hún væru tekjur sem ríkið gæti fangað beint, þegar verðmætið fellur að mestu til þriðju aðila — fyrirtækja, rannsakenda, borgara — sem nota gögnin, sem er einmitt tilgangurinn með að opna þau fremur en að selja. Open Data Institute í Bretlandi, stofnað af Sir Tim Berners-Lee og Sir Nigel Shadbolt árið 2012, hefur síðan byggt upp safn nákvæmari dæmisagna að neðan og upp — geira fyrir geira, gagnasafn fyrir gagnasafn — sem eru langtum gagnlegri fyrir raunveruleg viðskiptarök en fyrirsagnartala McKinsey, því þær sýna aðferðina við verðmætasköpun, ekki aðeins samanlagða stærð hennar.

## Stærðfræðin

Opin gögn hafa ekkert markaðsverð, svo matsaðferðir koma í staðinn; þrjár nálganir koma ítrekað fyrir, og engin er næg ein og sér:

```
1. Aðferð sparaðs kostnaðar / endurnýjunarkostnaðar:
   virði ≈ það sem notendur hefðu greitt fyrir að framleiða eða fá
   leyfi fyrir jafngildum gögnum sjálfir — neðri mörk, hunsar virði sem
   skapast af notkun sem upprunalegi framleiðandinn sá aldrei fyrir

2. Aðferð markaðshliðstæðu / starfsemi síðar í keðjunni:
   virði ≈ tekjur eða sparnaður sem fyrirtæki/þjónustur byggðar á
   gögnunum skapa (t.d. leiðsöguforrit byggð á opnum kortagögnum og
   umferðargögnum) — fangar raunverulega efnahagsstarfsemi en er erfitt
   að eigna hreint birtingu gagnanna sjálfri (sjá additionality-and-deadweight)

3. Skilyrt aðferð / aðferð yfirlýstra óska:
   virði ≈ það sem notendur segjast myndu greiða, eða tíminn sem þeir
   segja að það sparar þeim — sjá stated-preference-valuation fyrir almennu
   aðferðina og skekkjur hennar

Engin þessara skilar tölu jafn hreinni og markaðsverði; trúverðug
viðskiptarök fyrir opin gögn þríhyrningsmæla milli tveggja eða fleiri, og eru
skýr um hvaða aðferð vinnur verkið.
```

## Dæmi útreiknað

**Skýringardæmi um birtingu landsbundinna korta-/heimilisfangagagna** (aðferðafræði eftir dæmisögum í anda ODI, tölur til skýringar á þeim stærðargráðum sem slíkar rannsóknir finna venjulega):

```
Mat á sparnaði kostnaðar:
  Fyrirtæki sem annars myndu fá leyfi fyrir jafngildum heimilisfangaparunargögnum
  á viðskiptagrundvelli, á áætluðum meðalleyfiskostnaði 4.000 £/ár, yfir áætluð
  15.000 lítil og meðalstór fyrirtæki sem nota nú ókeypis opna gagnasafnið
  = 15.000 × 4.000 £ = 60.000.000 £/ár í sparnaði leyfiskostnaðar einum saman

Mat á starfsemi síðar í keðjunni (meira ágiskun, þarfnast mótstaðreyndar):
  Nýjar leiðarvals- og flutningavörur byggðar á opnu gögnunum sem myndu
  ekki vera til, eða yrðu verulega verri, án þeirra — krefst samanburðar
  við mótstaðreynd þess að gögnin héldust lokuð eða leyfisbundin á viðskiptagrundvelli
  (counterfactual-analysis), því hluti þeirrar starfsemi myndi verða hvort eð er á
  greiddum gögnum á hærra verði, sem er dauðaþungi í merkingunni „virði sem
  skapast af því að opna þau“

Réttlætanleg viðskiptarök tilkynna tölu sparaðs kostnaðar sem traust
neðri mörk, og meðhöndla tölu starfsemi síðar í keðjunni sem sviðsmynd
efri marka, ekki staðreynd.
```

## Tengsl við hugbúnaðarverkfræði

Fyrir verkfræðinga er hagnýta spurningin um verðmæti opinna gagna yfirleitt þrengri en fyrirsagnartölur á landsvísu: eykur það að opna þessi tilteknu forritaskil eða gagnasafn (frekar en að halda þeim á bak við samstarfssamning) endurnotkun nóg til að réttlæta áframhaldandi kostnað við að skjalfesta, útgáfustýra og styðja það sem opinbert viðmót? Sá viðhaldskostnaður er raunverulegur og er andstæðan við hagfræði þess að smíða einu sinni og endurnýta oft í [ríkið sem vettvangur](../ríkið-sem-vettvangur/) — efnin tvö eru nánir frændur, annað um sameiginlegan kóða og innviði, hitt um sameiginleg gögn. Sérhverja fullyrðingu um verðmæti opinna gagna ætti að athuga gagnvart [viðbótaráhrif og dauðaþungi](../viðbótaráhrif-og-dauðaþungi/) áður en hún fer í viðskiptarök: starfsemi sem hefði gerst hvort eð er, á gögnum með viðskiptaleyfi, er ekki verðmæti sem *opnunin* skapaði.

## Gildrur

- **Að vitna í 3–5 billjóna $ tölu McKinsey sem sértæka fyrir Bretland eða sem hlut þessa gagnasafns**: hún er hnattrænt sviðsmyndamat fyrir sjö geira frá 2013 — að nota hana sem nákvæman margfaldara fyrir stakt landsbundið gagnasafn afbakar hvað talan er.
- **Engin mótstaðreynd**: að eigna sér heiðurinn af allri efnahagsstarfsemi síðar í keðjunni sem byggð er á opnum gögnum, án þess að spyrja hve mikið af henni hefði gerst hvort eð er á greiddum eða leyfisbundnum gögnum á hærra verði (sjá [viðbótaráhrif og dauðaþungi](../viðbótaráhrif-og-dauðaþungi/) og [mótstaðreyndagreining](../mótstaðreyndagreining/)).
- **Að rugla framleiðslukostnaði saman við skapað virði**: gagnasafn sem var dýrt í söfnun er ekki sjálfkrafa verðmætt að birta, og ódýrt er ekki sjálfkrafa lítils virði — virði fylgir notkun síðar í keðjunni, ekki kostnaði fyrr í henni.
- **Að hunsa áframhaldandi viðhaldskostnað „opins“**: að birta einskiptis CSV-útdrátt er ekki sama skuldbinding og að reka skjalfest, útgáfustýrt og stutt opið forritaskil — að vanfjármagna hið síðarnefnda eftir opnunartilkynninguna er algengur bilunarháttur.

## Heimildir

- McKinsey Global Institute, „Open data: Unlocking innovation and performance with liquid information“ (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
