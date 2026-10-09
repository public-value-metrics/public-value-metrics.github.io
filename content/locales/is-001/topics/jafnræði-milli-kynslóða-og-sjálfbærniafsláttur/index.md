# Jafnræði milli kynslóða og sjálfbærniafsláttur

Að núvirða framtíðarkostnað og -ávinning er staðlað í opinberu mati — sjá [samfélagslegur afsláttarstuðull](../samfélagslegur-afsláttarstuðull/) — en hver jákvæður afsláttarstuðull, samsettur yfir áratugi eða aldir, rýrir fjarlæga framtíð í átt að núlli á mælikvarða dagsins í dag. Fyrir ákvarðanir með afleiðingar öld eða lengur fram í tímann — loftslagsbreytingar, kjarnorkuúrgang, tap líffræðilegrar fjölbreytni, sjálfbærni lífeyriskerfa — verður þessi stærðfræðilega staðreynd siðferðileg: hefðbundin núvirðing getur látið hörmulegan skaða á komandi kynslóðir líta út, á núvirtum mælikvarða, sem varla þess virði að afstýra.

## Hvers vegna það skiptir máli

Ramsey-jafnan, leidd út af Frank Ramsey 1928, sundurgreinir afsláttarstuðulinn í tvo þætti: hreina tímaforgangsröðun (δ, hve mikið við einfaldlega kjósum nú frekar en síðar, óháð auði) og vaxtaráhrif auðs (η×g, hve mikið við gefum afslátt því komandi kynslóðir eru væntanlega ríkari, svo aukapund skiptir þær minna máli). Hinn staðlaði langtímaafsláttarstuðull í UK Green Book er byggður á þessari jöfnu og fylgir *lækkandi* tímaáætlun fremur en föstum stuðli — hönnun sem á rætur í verkum Martin Weitzman um „gamma-núvirðingu“, sem sýnir að þegar sjálfur framtíðarafsláttarstuðullinn er óviss lækkar sá vissujafngildisstuðull sem þú ættir að beita stærðfræðilega með tímanum, því lágstuðulssviðsmyndir fara að ráða því lengra sem litið er fram. Stern Review on the Economics of Climate Change (2006), undir stjórn Sir Nicholas Stern, tók siðferðilegu umræðuna lengra: Stern færði rök fyrir því að hrein tímaforgangsröðun ætti að vera nærri núlli (hann notaði δ ≈ 0,1%, sem endurspeglar aðeins litlar líkur á hörmungum sem ljúka siðmenningu, ekki raunverulega kjörfestu nútíðar fram yfir framtíð), sem skilaði langtum lægri virkum afsláttarstuðli en hefðbundin framkvæmd Green Book og, í samræmi við það, langtum stærra tilvik fyrir aðgerðir í loftslagsmálum nú. Gagnrýnendur (einkum William Nordhaus) héldu því fram að nærri-núll stuðull Stern væri siðferðilega réttlætanlegur en ósamrýmanlegur raunverulega mældri sparnaðar- og fjárfestingarhegðun. Ágreiningurinn er ekki tæknileg neðanmálsgrein — hann er stærsta einstaka ástæða þess að tveir jafn strangir hagfræðingar geta komist að gjörólíkum niðurstöðum um hve miklu núverandi kynslóð ætti að fórna fyrir framtíðina, og hann er ástæðan fyrir því að hugbúnaður sem styður mat á langtímafjárfestingum hins opinbera verður að birta forsendur sínar um núvirðingu í stað þess að grafa þær í sjálfgefnu gildi í töflureikni.

## Stærðfræðin

```
Ramsey-jafna:   r = δ + η × g

  r = samfélagslegur afsláttarstuðull
  δ = hrein tímaforgangsröðun (óþolinmæði, óháð auði)
  η = teygni jaðarnytju neyslu (minnkandi virði aukaneyslu eftir því sem
      fólk verður ríkara)
  g = væntur vaxtarhraði neyslu á mann

Lækkandi langtímaáætlun Green Book (um það bil, núgildandi birt bil):
  Ár 0–30:    3,5%
  Ár 31–75:   3,0%
  Ár 76–125:  2,5%
  Ár 126–200: 2,0%
  Ár 201–300: 1,5%
  Ár 301+:    1,0%

Stern Review forsendur: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Dæmi útreiknað

**Núvirði 1 £ af afstýrðum skaða eftir 100 ár**, undir þremur núvirðingarkerfum:

```
Fastur skammtímastuðull Green Book (3,5%, óbreyttur í 100 ár):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ 0,032 £   (3,2 pens)

Lækkandi áætlun Green Book (3,5% fyrir ár 1–30, 3,0% fyrir ár 31–75,
2,5% fyrir ár 76–100):
  stuðull(1–30)   = 1,035^30  ≈ 2,807
  stuðull(31–75)  = 1,03^45   ≈ 3,782
  stuðull(76–100) = 1,025^25  ≈ 1,854
  heildarstuðull ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ 0,051 £   (5,1 pens)

Hrein tímaforgangsröðun nærri núlli að hætti Stern (r ≈ 1,4% fastur):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ 0,250 £   (25,0 pens)
```

Sama 1 £ af skaða sem afstýrt er eftir öld er virði 3,2 pens, 5,1 pens eða 25 pens í dag eftir því einu hvaða núvirðingarvenja er notuð — nærri áttfalt bil sem ræður því hvort loftslagsmildunarverkefni með háan upphafskostnað og ávinning eftir öld stenst jákvæðan NPV-þröskuld yfirhöfuð. Þetta er undirliggjandi aðferð að baki meginviðvörun efnisins: við hvaða marktækt jákvæðan fastan stuðul sem er er nægilega fjarlægur framtíðarskaði reikningslega þurrkaður út úr matinu, óháð raunverulegri alvarleika hans.

## Tengsl við hugbúnaðarverkfræði

- Hvert tól fyrir mat til langs tíma eða viðskiptarök (innviði, aðlögun að loftslagsbreytingum, lífeyrislíkön) ætti að útfæra *lækkandi* áætlun Green Book, ekki einn fastan stuðul — fast sjálfgefið gildi felur hljóðlega inn mun sterkari andstöðu við framtíðina en núgildandi leiðsögn bresku ríkisstjórnarinnar tilgreinir.
- Afsláttarstuðull og tímaskeið ættu alltaf að vera sýnilegar, endurskoðanlegar breytur í matshugbúnaði, með næmi útreikningsins fyrir þeim sýnt skýrt (eins og í dæminu hér að ofan) — að grafa stuðulinn í stillingarskrá býður upp á einmitt „falda siðferðilega ákvörðun“ sem Stern–Nordhaus-umræðan varar við; þetta parast við gagnsæispunktinn í [bókhald náttúruauðs](../bókhald-náttúruauðs/) og liggur að baki efninu [samfélagslegur afsláttarstuðull](../samfélagslegur-afsláttarstuðull/) almennt.
- Þar sem ávinningur áætlunar er skýrt milli kynslóða (flóðavarnir, endurheimt náttúruauðs, langtíma stafrænir innviðir) ætti [samfélagsleg kostnaðar- og ábatagreining](../samfélagsleg-kostnaðar-og-ábatagreining/) að tilkynna niðurstöður undir að minnsta kosti tveimur núvirðingarforsendum (staðli Green Book og lágstuðulsnæmistilviki) fremur en einu punktmati, svo ákvörðunaraðilar sjái hvernig val á afsláttarstuðli eitt og sér hreyfir svarið.

## Gildrur

- **Að setja fram stakt núvirt NPV án næmisbils** — í ljósi þess hve mikið afsláttarstuðullinn einn breytir svarinu fyrir langtímaverkefni ofmetur eins stuðuls NPV nákvæmni verulega; tilkynntu alltaf bil sem spannar að minnsta kosti staðal Green Book og lágstuðulssviðsmynd.
- **Að beita fasta skammtímastuðlinum (3,5%) á mat til margra alda** — leiðsögn Green Book sjálfs tilgreinir lækkandi áætlunina einmitt vegna þess að fasti stuðullinn var talinn óviðeigandi umfram um það bil 30 ár; að nota hann samt vanmetur langtímakostnað.
- **Að líta á δ (hreina tímaforgangsröðun) sem hreina tæknilega breytu** — nærri-núll gildi Stern og hærra óbeint gildi Green Book eru hvort tveggja réttlætanleg aðeins sem siðferðileg afstaða til þess hve mikið vægi nútíðin skuldar framtíðinni, ekki reynslulega „rétt“ eða „röng“ gildi; hugbúnaður ætti að gera forsenduna sýnilega fremur en að setja fram eina tölu sem hlutlægt rétta.

## Heimildir

- Stern N. „The Economics of Climate Change: The Stern Review.“ Cambridge University Press, 2006.
- Ramsey FP. „A Mathematical Theory of Saving.“ The Economic Journal, 1928.
- Weitzman ML. „Gamma Discounting.“ American Economic Review, 2001.
- HM Treasury. „The Green Book: Central Government Guidance on Appraisal and Evaluation“ (Annex 6,
  discount rate schedule).
- Nordhaus WD. „A Review of the Stern Review on the Economics of Climate Change.“ Journal of
  Economic Literature, 2007.
