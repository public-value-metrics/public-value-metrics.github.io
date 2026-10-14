# Kostnaður við tafir í opinberum áætlunum (CoD)

Kostnaður við tafir (Cost of Delay) er það opinbera verðmæti sem tapast á hverja tímaeiningu sem áætlun, þjónusta eða kerfisbreyting er *ekki* enn afhent. Hann er meginbrúarmælikvarði þessa hóps efna: hann umbreytir „gangsetningin dróst um sex mánuði“ í pund á viku, eða í WELLBY á viku, svo hægt sé að ræða töf í sama gjaldmiðli og viðskiptarökin sjálf.

## Hvers vegna það skiptir máli

Regla Reinertsen — „ef þú mælir aðeins eitt, mældu kostnað við tafir“ — flyst nær óbreytt inn í opinbera geirann, því opinberar áætlanir eru óvenju berskjaldaðar fyrir honum: viðskiptarök eru samþykkt gegn spáðum ávinningsstraumi, en straumurinn byrjar ekki að flæða fyrr en við gangsetningu, og hver vika af seinkun er vika af glötuðu verðmæti sem enginn verðleggur í áhættuskrá. Endurtekin skoðun National Audit Office á útfærslu Universal Credit (sjá skýrslur þess „Rolling Out Universal Credit“, <https://www.nao.org.uk/>) sýnir mynstrið: seinkun á áætlun var rakin og tilkynnt, en kostnaðurinn í pundum á viku við að afhenda *ekki enn* endurbætta kerfið næsta hópi umsækjenda var sjaldan settur fram sem fyrirsagnartala, þótt það sé talan sem hefði átt að stýra forgangsröðun og stigmögnun. Án CoD-tölu lítur seinkuð áætlun út eins og tímaáætlunarvandi fyrir afhendingarstjórnina; með henni er hún verðmætarýrnunarvandi fyrir ábyrgðarmann reikninga.

## Stærðfræðin

```
CoD = ávinningur á tímaeiningu sem glatast meðan óafhent   (£/viku eða WELLBY/viku)

Heildartap vegna tafar = CoD × lengd tafar

Ávinningsstraumar til að leggja saman fyrir opinberar áætlanir:
  sparnaður sem losar reiðufé  (minnkun á svikum/villum, afstýrður tímabundinn kostnaður)
+ afkastageta sem losnar án reiðufjár (tímar málsmeðhöndlara/starfsmanna × fullur kostnaður)
+ velferðarávinningur        (WELLBY × 13.000 £/WELLBY, viðbótarleiðbeiningar
                             HMT Green Book um velferð, verðlag 2019)
```

Fyrir þjónustu sem snýr að borgurum skaltu gefa upp í velferð jafnt sem peningum — sjá [lífsár leiðrétt fyrir velferð](../lífsár-leiðrétt-fyrir-velferð/) fyrir undirliggjandi einingu, og [fórnarkostnaður í opinberum útgjöldum](../fórnarkostnaður-í-opinberum-útgjöldum/) fyrir það sem seinkaða pundið hefði annars getað fjármagnað.

## Dæmi útreiknað

**Sveitarfélag**: uppfærsla á húsnæðisbótakerfi dregur úr ofgreiðsluvillu um 150 £ á umsókn á ári yfir 20.000 virkar umsóknir.

```
Árlegur ávinningur = 150 × 20.000 = 3.000.000 £/ár
CoD = 3.000.000 / 52 ≈ 57.700 £/viku
12 mánaða töf á innleiðingu kostar 52 × 57.700 ≈ 3.000.000 £ í afstýranlegum villum.
```

**Ríkisstofnun**: þjónusta við mat á örorkubótum, afhent sex mánuðum (26 vikum) síðar en áætlað var, þýðir að 200.000 umsækjendur á ári bíða að meðaltali þremur vikum lengur eftir ákvörðun. Hver aukavika fjárhagslegrar óvissu er líkönuð sem −0,0018 WELLBY (lífsánægjustig) áhrif:

```
WELLBY-tap á umsækjanda = 3 × 0,0018 = 0,0054
Árlegt WELLBY-tap = 200.000 × 0,0054 = 1.080 WELLBY/ár
CoD_velferð = 1.080 / 52 ≈ 20,8 WELLBY/viku
CoD_peningar = 20,8 × 13.000 £ ≈ 270.000 £/viku af velferðarverðmæti
```

26 vikna töf „kostar“ því um það bil 540 WELLBY — um 7 milljóna punda virði samkvæmt velferðarmati Green Book — sem endurrammar misst gangsetningardagsetningu sem velferðaratburð borgara, ekki neðanmálsgrein í verkefnastjórnun.

## Tengsl við hugbúnaðarverkfræði

CoD er það sem gerir [DORA-mælikvarða](../dora-mælikvarðar-fyrir-opinbert-verðmæti/) og [flæðismælikvarða](../flæðismælikvarðar-í-afhendingu-hins-opinbera/) fjárhagslega læsilega: leiðtími í ferlinu × CoD eru peningar (eða velferð) brenndir í biðröðum áður en þeir ná nokkurn tíma til borgara. Nánar tiltekið:

- **Forgangsröðun**: raðaðu verkbeiðnasafni eftir CoD ÷ lengd frekar en eftir stöðu hagsmunaaðila — hugbúnaðarígildi kröfu Green Book um að meta valkosti á verðmæti, ekki eftir því hver spyr.
- **Innkaup**: 12–18 mánaða rammasamningsinnkaupaferli hefur CoD; að verðleggja hann breytir brýningunni fyrir hraðari leiðir, og nýtist beint í ákvarðanir um [smíða eða kaupa](../smíða-eða-kaupa-hjá-hinu-opinbera/) þar sem tími til verðmætasköpunar er ákvörðunarþáttur.
- **Ávinningsrök**: hver CoD-tala sem vitnað er í við samþykki ætti að koma aftur fram við [ávinningsheimta](../ávinningsheimta/) — ef kostnaður við töf var raunverulegur ætti hraðari ávinningurinn að vera mælanlegur eftir gangsetningu.

## Gildrur

- **Að gera ráð fyrir línulegum CoD**: sumar opinberar þjónustur hafa verðmæti í formi lokafrests (lögbundin fylgnidagsetning — CoD stekkur upp á stig eftirlitsáhættu eftir dagsetninguna, nálægt núlli fyrir hana) fremur en jafnt vikuhlutfall. Flokkaðu brýnisprófílinn áður en þú margfaldar.
- **CoD á afurðir sem enginn þarf**: töf hefur aðeins kostnað ef hið óafhenta hefur verðmæti; kerfi sem enginn mun nota hefur CoD núll, sama hve seint það er.
- **Tvítalning á töf og núvirðingu**: [samfélagslegur afsláttarstuðull](../samfélagslegur-afsláttarstuðull/) verðleggur nú þegar tíma á fjölára matstímabilum; CoD er innan-tímabils, rekstrarútgáfan fyrir vikur og mánuði. Notaðu CoD fyrir seinkun á áætlun, færslu á NPV fyrir endurtímasetningu yfir mörg ár.

## Heimildir

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
