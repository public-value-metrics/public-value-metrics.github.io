# Bókhald náttúruauðs

Bókhald náttúruauðs setur umhverfið á sama grunn og hverja aðra þjóðar- eða stofnanaeign: það mælir birgðir náttúruauðlinda (skóga, jarðvegs, áa, votlendis, andrúmslofts) og flæði þeirrar þjónustu sem þær veita (kolefnisbindingu, flóðavarnir, útivist, fæðu), bæði í efnislegum og peningalegum skilningi, svo að rýrnun umhverfis komi fram í ákvarðanatöku eins og niðurdráttur fjármagns myndi gera. Bretland er ein af þeim ríkisstjórnum sem lengst eru komnar í að gera þetta kerfisbundið, knúin áfram af 25 Year Environment Plan (2018) og útfært í gegnum UK Natural Capital accounts hjá ONS og viðbótarleiðbeiningar HM Treasury við Green Book.

## Hvers vegna það skiptir máli

Hefðbundið bókhald — fyrirtækja og ríkis — lítur á skóg sem einskis virði þar til hann er felldur og seldur sem timbur, en þá verður hann hluti af VLF. Bókhald náttúruauðs er til til að brúa þetta bil: 25 Year Environment Plan Bretlands skuldbatt ríkisstjórnina til að flétta hugsun um náttúruauð inn í alla stefnumótun, með skýrum metnaði um að vera „fyrsta kynslóðin til að skilja umhverfið eftir í betra ástandi en við fundum það“. ONS hefur síðan gefið út árleg UK Natural Capital accounts (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) sem meta peningalegt virði vistkerfisþjónustu — frá útivist í skógi til heilsuávinnings af grænum svæðum í þéttbýli til kolefnisgeymslu í mómýrum — með sama þjóðhagsreikningaramma og notaður er fyrir framleitt fjármagn, svo að náttúruauður geti að lokum setið í sama efnahagsreikningi og vegir, byggingar og búnaður. Enabling a Natural Capital Approach (ENCA) leiðsögn HM Treasury, viðbót við Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), setur fram hvernig matsaðilar ættu að verðleggja umhverfiskostnað og -ávinning í viðskiptarökum, svo að vegaframkvæmd sem eyðileggur aldagamlan skóg eða flóðavarnaframkvæmd sem endurheimtir votlendi sé hægt að bera saman á samræmdum peningalegum grunni í stað þess að annað hafi tölu og hitt málsgrein af fyrirvörum.

## Stærðfræðin

```
Eignarvirði vistkerfisþjónustu = NPV af flæði þjónustu sem eignin veitir

Eignarvirði = Σ (t = 1 til T) [virði árlegs þjónustuflæðis_t / (1 + r)^t]

þar sem:
  virði þjónustuflæðis_t = magn þjónustu á ári t × einingarvirði
                           (t.d. heimsóknir til útivistar × virði á heimsókn;
                            tonn af bundnu kolefni × kolefnisverð)
  r = afsláttarstuðull (samfélagslegur afsláttarstuðull Green Book — sjá
      [samfélagslegur afsláttarstuðull](../samfélagslegur-afsláttarstuðull/))
  T = tímaskeið sem eignin er væntanlega að veita þjónustuna
```

Þetta er nákvæmlega sama núvirta hreina virðisbyggingin og notuð er til að verðmeta framleitt fjármagn eða meta hverja opinbera fjárfestingu samkvæmt [mat samkvæmt Green Book (fimm-tilvika líkanið)](../mat-samkvæmt-green-book/) — framlag bókhalds náttúruauðs er að leggja til trúverðugt efnislegt magn og einingarvirði fyrir þjónustu sem áður var verðlögð á núll.

## Dæmi útreiknað

**Skógur í þéttbýli, útivistarvirði**: 50 hektara skógur fær áætlaðar 80.000 heimsóknir til útivistar á ári, hver metin (með ferðakostnaðaraðferð eða aðferð yfirlýstra óska — sjá [verðmat byggt á afhjúpuðum óskum](../verðmat-byggt-á-afhjúpuðum-óskum/) og [verðmat byggt á yfirlýstum óskum](../verðmat-byggt-á-yfirlýstum-óskum/)) á 3 £ á heimsókn. Skógurinn er væntanlega að veita þessa þjónustu í 50 ár, metið á 3,5% afsláttarstuðli.

```
Árlegt útivistarvirði = 80.000 × 3 £ = 240.000 £/ár

NPV yfir 50 ár á 3,5% ≈ 240.000 £ × árgreiðslustuðull(3,5%, 50 ár)
árgreiðslustuðull(3,5%, 50) ≈ 21,4

Eignarvirði ≈ 240.000 £ × 21,4 ≈ 5.136.000 £
```

**Kolefnisgeymslu bætt við**: sami skógur bindur áætlaða 400 tonn af CO2 á ári, metin á kolefnisverð ríkisins utan viðskiptakerfis, um það bil 75 £/tonn (til skýringar — notaðu núgildandi birt kolefnisvirði BEIS/DESNZ fyrir raunverulegt mat).

```
Árlegt kolefnisvirði = 400 × 75 £ = 30.000 £/ár
NPV yfir 50 ár á 3,5% ≈ 30.000 £ × 21,4 ≈ 642.000 £

Heildareignarvirði skógar (útivist + kolefni) ≈ 5.136.000 £ + 642.000 £
                                                ≈ 5.778.000 £
```

Þetta er áður en bætt er við flóðatempran, líffræðilegri fjölbreytni eða loftgæðaþjónustu sem ENCA-leiðsögnin biður matsaðila einnig að taka til greina — heildin er viljandi gólf, ekki þak.

## Tengsl við hugbúnaðarverkfræði

- Umhverfis- og eignastýringarkerfi fyrir sveitarfélög og stofnanir (garða, vegi, vatnasvæði) geta tengt skrá yfir náttúruauð við hlið skrár yfir efnislegar eignir, með sama mynstri þjónustuflæðis margfaldað með einingarvirði og hver annar [einingarkostnaðargrunnur](../einingarkostnaðargrunnar/) sem stofnunin heldur utan um.
- Þar sem NPV náttúruauðs er næm fyrir afsláttarstuðlinum (sjá árgreiðslustuðulinn í dæminu) ætti hvert tól sem reiknar hana að birta stuðulinn og tímaskeiðið sem sýnileg inntök, ekki grafa þau — sama gagnsæisregla og fjallað er um undir [jafnræði milli kynslóða og sjálfbærniafsláttur](../jafnræði-milli-kynslóða-og-sjálfbærniafsláttur/).
- Reikningar náttúruauðs eru í auknum mæli skyldubundið inntak í umhverfishluta viðskiptaraka [mat samkvæmt Green Book (fimm-tilvika líkanið)](../mat-samkvæmt-green-book/); afhendingarteymi sem smíðar tól fyrir viðskiptarök ætti að líta á ONS-reikningana og ENCA-einingarvirði sem viðmiðunargögn til að samþætta, ekki eitthvað sem matsaðilar endurreikna frá grunni í hvert skipti.

## Gildrur

- **Að tvítelja skarast vistkerfisþjónustu** — útivistarvirði og virði líffræðilegrar fjölbreytni fyrir sama stað geta deilt undirliggjandi gögnum um greiðsluvilja; ENCA-leiðsögnin varar sérstaklega við því að leggja saman verðmöt sem leidd eru af skarast könnunartækjum.
- **Að líta á eignarvirði náttúruauðs sem kyrrstætt** — þjónustuflæði breytist með loftslagi, umsjón og landnotkunarþrýstingi; kolefnis- og flóðatemprunarvirði skógar þennan áratug er ekki varanlegur eiginleiki staðarins.
- **Að nota landsmeðaltal einingarvirða fyrir mjög staðbundna ákvörðun** — hektari af aðgengilegum skógi í þéttbýli og hektari af afskekktu hálendi hafa mjög ólíkt útivistarvirði; ENCA-leiðsögnin mælir með staðbundnum eða staðarsértækum virðum þar sem þau eru tiltæk í stað þess að nota landsmeðaltöl sjálfgefið.

## Heimildir

- ONS. „UK natural capital accounts.“
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. „A Green Future: Our 25 Year Plan to Improve the Environment.“ (2018)
- HM Treasury / Defra. „Enabling a Natural Capital Approach (ENCA): guidance.“
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
