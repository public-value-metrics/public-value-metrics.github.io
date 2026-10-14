# Verðmæti sjálfboðaliðatíma

Verðmæti sjálfboðaliðatíma er peningalegt mat sem lagt er á ólaunað vinnuframlag, oftast notað til að sýna raunverulegt efnahagslegt fótspor góðgerðarfélags — reikninga þess auk vinnunnar sem það þurfti ekki að greiða fyrir — eða til að færa rök fyrir því að tiltekið inngrip sé hagkvæmara en reiðufjárhagsáætlun þess ein og sér gefur til kynna. Tvær landsaðferðir ráða ríkjum: mat Independent Sector í Bandaríkjunum og nálgun Office for National Statistics / NCVO í Bretlandi, og þær verðleggja sömu vinnustundina mjög ólíkt.

## Hvers vegna það skiptir máli

Á hverju ári birtir Independent Sector, í samstarfi við Do Good Institute við University of Maryland, landsbundið tímaverðmæti sjálfboðaliðatíma, byggt á launagögnum Bureau of Labor Statistics — nánar tiltekið meðaltímakaupi framleiðslustarfsmanna og starfsmanna án yfirmannsábyrgðar á launaskrá einkageirans utan landbúnaðar, auk leiðréttingar vegna hlunninda — og sundurliðað eftir ríkjum Bandaríkjanna. Nýjasta útgáfa þess setti verðmætið á **36,14 $ á klukkustund fyrir 2025**, upp um 3,9% frá fyrra ári, þar sem gildi einstakra ríkja voru á bilinu yfir 50 $ í Washington, DC til undir 20 $ á Púertó Ríkó. Í Bretlandi hefur Office for National Statistics sérstaklega áætlað endurnýjunarkostnað formlegs sjálfboðastarfs á **14,43 £ á klukkustund** (mat frá 2017), og UK Civil Society Almanac 2024 hjá NCVO notar gögn um þátttöku í sjálfboðastarfi — um 14,2 milljónir manna sem sinntu formlegu sjálfboðastarfi 2021–22 — til að áætla heildarframlag geirans í sjálfboðastarfi á um það bil **18 milljarða £**, um 0,8% af landsframleiðslu Bretlands.

Ástæðan fyrir því að þetta skiptir máli umfram bókhaldssnyrtingu: áætlun sem reiðir sig mjög á vinnu sjálfboðaliða getur litið stórkostlega ódýrari út á hreinum reiðufjárgrunni [kostnaðar á útkomu](../kostnaður-á-hverja-útkomu/) en sú sem reiðir sig á launað starfsfólk, jafnvel þar sem raunverulegur auðlindakostnaður — hvað það myndi kosta að skipta út þeirri vinnu — er svipaður eða hærri. Fjármögnunaraðilar og matsaðilar sem hunsa verðmæti sjálfboðaliðatíma vantelja kerfisbundið raunverulegan kostnað afhendingarlíkana sem reiða sig mjög á sjálfboðaliða, sem brenglar skilvirknisamanburð við líkön með launuðu starfsfólki sem skila sömu útkomu.

## Stærðfræðin

```
Verðmæti sjálfboðaliðatíma = Sjálfboðaliðastundir lagðar fram × tímagjald

Val á gjaldi skiptir máli og breytir niðurstöðunni:
  - Endurnýjunarkostnaðaraðferð: laun launaðs starfsmanns sem myndi sinna
    sama verki (t.d. endurnýjunarkostnaðargjald fyrir menntaðan
    æskulýðsfulltrúa, ekki almennt meðallaun) — réttlætanlegust fyrir verkbundið mat
  - Fórnarkostnaðaraðferð: töpuð laun sjálfboðaliðans sjálfs — réttlætanlegust
    til að meta hverju sjálfboðaliðinn fórnaði
  - Landsmeðaltalsaðferð: eitt blandað gjald Independent Sector eða ONS —
    réttlætanlegust fyrir yfirlitstölur og samanburð milli geira
```

Aðferðirnar þrjár geta munað margfalt fyrir sömu stundina (lögmaður sem sinnir stjórnarsetu sem sjálfboðaliði hefur mjög ólíkt fórnarkostnaðargjald miðað við landsmeðaltalsgjald), svo sérhver tilkynnt tala þarf að tilgreina hvaða aðferð skilaði henni.

## Dæmi útreiknað

**Breskt góðgerðarfélag, landsmeðaltalsaðferð**: 5.000 sjálfboðaliðastundir á ári, metnar á 14,43 £/klst. (endurnýjunarkostnaðarmat ONS):

```
Verðmæti = 5.000 × 14,43 £ = 72.150 £
```

Ef reiðufjárútgjöld félagsins það ár voru 300.000 £ er raunverulegur auðlindakostnaður þess — reiðufé auk vinnu sjálfboðaliða — 372.150 £, um það bil 24% hærri en reiðufjártalan ein gefur til kynna. Útreikningur á kostnaði á útkomu sem notar aðeins 300.000 £ reiðufjártöluna vanmetur raunkostnað um sama hlutfall.

**Bandarískt góðgerðarfélag, landsmeðaltalsaðferð**: 2.000 sjálfboðaliðastundir metnar á 36,14 $/klst. (Independent Sector, útgáfa 2025):

```
Verðmæti = 2.000 × 36,14 $ = 72.280 $
```

**Sama bandaríska félagið, fórnarkostnaðaraðferð**: ef sjálfboðaliðarnir eru hlutfallslega margir eftirlaunaþegar úr sérfræðistörfum þar sem fyrri tekjur voru að meðaltali 60 $/klst., yrði fórnarkostnaðarmatið 120.000 $ — tveimur þriðju hærra en landsmeðaltalstalan, sem sýnir hvers vegna aðferðina verður að tilgreina.

## Tengsl við hugbúnaðarverkfræði

Kerfi sem skrá sjálfboðaliðastundir (vaktaáætlunartól, umsjónarkerfi sjálfboðaliða) ættu að skrá stundir á verk- eða hlutverkastigi, ekki bara heildartölu, svo hægt sé að beita endurnýjunarkostnaðargjaldi fyrir hvert hlutverk frekar en einu almennu landsmeðaltalsgjaldi yfir blandaðan hóp sjálfboðaliða (stund stjórnarmanns og stund gæslumanns eru ekki efnahagslega jafngildar). Að geyma gjaldið og aðferðina sem notuð var ásamt reiknaða verðmætinu — ekki bara lokatöluna í gjaldmiðli — gerir síðari skýrslugjöf (ársreikningum, útreikningum á [samfélagslegri arðsemi fjárfestingar](../samfélagsleg-arðsemi-fjárfestingar/), skýrslum til fjármögnunaraðila) kleift að endurskapa eða véfengja töluna síðar frekar en að meðhöndla hana sem ógagnsæjan fasta. Sjá [kostnaður á útkomu](../kostnaður-á-hverja-útkomu/) fyrir hvers vegna að sleppa verðmæti sjálfboðaliðatíma vanmetur kerfisbundið raunverulegan afhendingarkostnað.

## Gildrur

- **Að nota eitt almennt gjald fyrir byggingarlega ólík hlutverk.** Landsmeðaltal launa beitt á sérfræðivinnu án endurgjalds (lögfræði, fjármál, klínísk) vanmetur hana stórlega; paraðu gjaldið við hlutverkið sem er leyst af hólmi hvar sem verkið krefst kunnáttu.
- **Tvítalning gagnvart launakostnaði.** Ef sjálfboðaliðar koma í stað vinnu sem annars væri launuð, tryggðu að matið bætist við reiðufjárútgjöld, ekki lagt ofan á þegar uppblásið starfsmannamat.
- **Að vitna í úrelt gjald án dagsetningar.** Gjöld Independent Sector og ONS breytast árlega (eða eru aðeins endurmetin af og til, í tilviki ONS); ódagsett tala um sjálfboðaliðatíma í skýrslu er nær merkingarlaus til samanburðar.
- **Að líta á verðmæti sjálfboðaliðatíma sem fjáröflunareign.** Það er kostnaðarbókhaldsleiðrétting til að skilja raunverulegan auðlindakostnað, ekki nýtt fé sem góðgerðarfélag getur eytt; að rugla þessu tvennu saman afvegaleiðir stjórn sem les reikningana.

## Heimildir

- Independent Sector and the Do Good Institute (University of Maryland), „Value of Volunteer Time.“ <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
