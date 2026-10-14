# Kostnaðarhagkvæmni skilvirkrar velvildar

Röksemdafærsla um kostnaðarhagkvæmni í skilvirkri velvild (effective altruism, EA) raðar góðgerðarinngripum eftir því hve miklu góðu þau skila — oftast gefið upp sem bjargað líf, eða heilsa sem vinnst, á hvern dollara sem varið er — og beinir fé til þess inngrips sem kaupir mest gott á jaðrinum. GiveWell er áhrifamesti iðkandi sviðsins: það birtir skýrt, uppfært mat á kostnaði á hvert bjargað líf og kostnaði á hverja útkomu fyrir stuttan lista „toppgóðgerðarfélaga“ og mælir með því að gefendur gefi því sem hefur á hverjum tíma rými fyrir meira fjármagn á besta hlutfallinu.

## Hvers vegna það skiptir máli

GiveWell tilgreinir kostnaðarhagkvæmni sem helsta viðmiðið í birtri aðferðafræði sinni: það leitar að inngripum studdum sönnunargögnum, metur kostnaðarhagkvæmni þeirra í sameiginlegri einingu og raðar þvert á algerlega óskyld málefni — flugnanet gegn malaríu, A-vítamínviðbót, beinar peningagreiðslur, hvatagreiðslur fyrir bólusetningar — eftir þeim eina ási. Þetta er bein innflutningur á rökfærslu í anda QALY/DALY úr heilsuhagfræði yfir í mannúðarstarf: rétt eins og heilbrigðiskerfi spyr „hve mörg QALY á hvert pund á jaðrinum“ spyr GiveWell „hve mörg líf, eða lífár, á hvern dollara á jaðrinum“ og lítur á málefni sem skiptanleg þegar þau hafa verið umbreytt í þá sameiginlegu einingu. Sjá [kostnaðarhagkvæmnigreining hjá hinu opinbera](../kostnaðarhagkvæmnigreining-hjá-hinu-opinbera/) fyrir frænda þessa rökfræðiramma í opinbera geiranum.

Sú tala GiveWell sem oftast er vitnað í varðar Against Malaria Foundation (AMF), sem dreifir skordýraeitursmeðhöndluðum flugnanetum. Í birtu útreiknuðu dæmi GiveWell (byggðu á fjármögnunargögnum frá 2020) fjármögnuðu um það bil 4.500 $ nógu mörg net til að afstýra einu dauðsfalli, eftir að tekið hafði verið tillit til ófullkominnar notkunar neta, grunndánartíðni án neta og leiðréttingar fyrir fjárskiptum (funging) — möguleikanum á að AMF hefði fengið hluta þess fjár frá öðrum gefendum hvort eð er. GiveWell er skýrt um að þessi tala breytist með tímanum og eftir landsvæðum þegar algengi malaríu, kostnaður neta og fjármögnunarskörð breytast, og að kostnaður við að bjarga lífi sé almennt væntanlegur til að hækka með tímanum þegar ódýrustu tækifærin eru nýtt fyrst; hún er útreiknað dæmi um aðferðina, ekki fast verð.

## Stærðfræðin

```
Kostnaðarhagkvæmni = Kostnaður inngrips / Einingar gæða sem verða til
                    (t.d. $ á hvert bjargað líf, $ á hvert afstýrt DALY, $ á hvert QALY)

Keðja GiveWell fyrir flugnanetaáætlun, til skýringar:
  $ á hvert net sem er keypt og afhent
    ÷ hlutfall neta sem eru í raun notuð
    ÷ fólk sem er varið með hverju neti
    × grunndánartíðni á ári án neta
    × lækkun dánartíðni sem rekja má til notkunar neta (úr slembirannsóknum)
    × ár verndar á hvert net
    ÷ leiðrétting fyrir fjárskiptum (fé sem ryður úr vegi fjármögnun annarra gefenda)
  = $ á hvert bjargað líf (að frádregnum áhrifum mótstaðreyndrar fjármögnunar)
```

Þessi keðja skiptir máli því hvert skref er staður þar sem mat á kostnaðarhagkvæmni fer oft úrskeiðis — sjá gildrur hér að neðan — og vegna þess að hún gerir ljóst að „kostnaður á hvert bjargað líf“ er aldrei hrátt, mælt verð; það er líkanað mat byggt á nokkrum aðskildum og óvissum forsendum.

## Dæmi útreiknað

Tvö ímynduð inngrip, bæði studd sönnunargögnum, keppa um sömu jaðar 100.000 £:

- **Flugnanet (í anda AMF)**: um það bil 4.500 $ á hvert bjargað líf samkvæmt birtu útreiknuðu dæmi GiveWell byggðu á gögnum frá 2020, þ.e. mjög grófleg 20 líf bjargað á hver 100.000 £ eftir gengi og því ári sem notað er.
- **Ormahreinsunaráætlun**: engin trúverðug ávinningur af dánartíðni, en sterk sönnunargögn um langtíma tekjuaukningu af ormahreinsun í æsku; GiveWell metur hana í tekjuaukningu, ekki björguðum lífum, sem gerir erfitt að bera hana beint saman við flugnanet án sameiginlegrar einingar. GiveWell notar skýran ramma „siðferðilegra vigta“ til að umbreyta hvoru tveggja í eina innri einingu til röðunar.

Agi EA-aðferðarinnar er að þvinga þennan samanburð fram í dagsljósið frekar en að fjármagna hvort tveggja því bæði „hljóma vel“. Sjá [samfélagsleg arðsemi fjárfestingar](../samfélagsleg-arðsemi-fjárfestingar/) fyrir samsvarandi þvingunartæki sem breskir félagslegir frumkvöðlar og staðbundnir kaupendur þjónustu nota, sem spyr sömu spurningar — hver er besta ávöxtun á hvert pund — í tungu peningalegs verðmætis frekar en tungu lífa/DALY.

## Tengsl við hugbúnaðarverkfræði

Verkfræðingar sem smíða vettvanga fyrir gefendur, tól til að para styrki eða áhrifamælaborð fyrir fjármögnunaraðila í anda EA (Open Philanthropy, GiveWell sjálft, vettvangar fyrir skilvirkar gjafir á borð við Giving What We Can) þurfa að birta mat á kostnaðarhagkvæmni sem bil með tilgreindum forsendum, ekki staka tölu — undirliggjandi líkan hefur nokkrar margfaldandi, óvissar forsendur, og að þjappa því í eina tölu á mælaborði afbakar það öryggi sem GiveWell sjálft lýsir. Útgáfumerktu hvert mat eftir birtingardegi; GiveWell endurskoðar tölur sínar, stundum verulega, þegar ný gögn úr slembirannsóknum eða um fjármögnunarskörð berast, og vettvangur sem geymir gamla tölu í skyndiminni verður hljóðlega rangur.

## Gildrur

- **Að líta á mat á kostnaðarhagkvæmni sem fast verð.** Það er úttak líkans með nokkrum óvissum, margfaldandi forsendum (notkunarhlutföll, grunndánartíðni, leiðrétting fyrir fjárskiptum); tilgreindu dagsetningu og útgáfu.
- **Að hunsa fjárskipti/tilfærslu.** Að fjármagna stofnun sem hefði fengið féð frá öðrum gefanda hvort eð er kaupir minna mótstaðreynt gott en fyrirsögnin gefur til kynna — sjá [viðbótaráhrif og dauðaþungi](../viðbótaráhrif-og-dauðaþungi/) og [tilfærsla og eignun](../tilfærsla-og-eignun/).
- **Að bera saman milli ósamrýmanlegra eininga án umbreytingar.** „Björguð líf“ og „tekjur sem vinnast“ eru ekki beint sambærileg án skýrs ramma siðferðilegra vigta; að setja þau hlið við hlið eins og þau væru það er flokkavilla.
- **Göngusjón innan eins málefnasviðs.** Að raða aðeins innan eins málefnasviðs (t.d. aðeins alþjóðleg heilbrigðisgóðgerðarfélög) og kalla sigurvegarann „kostnaðarhagkvæmasta góðgerðarfélagið“ ofmetur fullyrðinguna; þverröðun GiveWell milli málefna er viljandi þröng (alþjóðleg heilsa og velferð), ekki algild.

## Heimildir

- GiveWell, „Our criteria.“ <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, „How Much Does It Cost to Save a Life?“ (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
