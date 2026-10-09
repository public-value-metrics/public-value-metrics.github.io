# Greiðsla eftir árangri og skuldabréf með samfélagsáhrifum (PbR/SIB)

Greiðsla eftir árangri (payment by results, PbR) greiðir veitanda byggt á sannprófuðum útkomum sem nást, ekki athöfnum sem framkvæmdar eru. Skuldabréf með samfélagsáhrifum (social impact bond, SIB) er sérstök PbR-fjármögnunarbygging þar sem einkafjárfestar eða mannúðarsjóðir fjármagna þjónustuafhendingu fyrirfram og fá endurgreitt — með ávöxtun — af opinberum kaupanda aðeins ef óháð mældar útkomur ná umsömdum þröskuldum, sem færir afhendingaráhættuna frá skattgreiðandanum til fjárfestisins.

## Hvers vegna það skiptir máli

Fyrsta SIB í heiminum hófst í HMP Peterborough í september 2010: Social Finance safnaði 5 milljónum £ frá 17 fjárfestum til að fjármagna „One Service“, sem vann með fólki í stuttum fangelsisdómum (undir 12 mánuðum) til að draga úr endurteknum brotum, þar sem Ministry of Justice og Big Lottery Fund samþykktu að endurgreiða fjárfestum aðeins ef endurdómsatburðum fækkaði um að minnsta kosti 7,5% gagnvart pöruðum landsbundnum samanburðarhópi. Lokahópur Peterborough-tilraunarinnar skráði 9,7% fækkun endurdóma, vel yfir þröskuldinum, og fjárfestar fengu endurgreitt með ávöxtun. Aðferðin skipti máli því hún leysti sérstakan vanda í innkaupum: ríkið vildi greiða fyrir útkomur fremur en aðföng, en gat ekki tekið á sig fjárhagsáhættu af inngripi sem gæti mistekist, svo SIB-byggingin færði þá áhættu yfir á fjárfesta sem voru tilbúnir að taka hana á sig. Government Outcomes Lab (GO Lab) við Blavatnik School of Government í Oxford heldur nú úti umfangsmesta opinbera sönnunargagnagrunni um frammistöðu PbR og SIB í heiminum, rekur vel yfir 200 áhrifaskuldabréf á heimsvísu og birtir rannsóknir á því hvaða hönnunareiginleikar fylgja árangri eða mistökum. Lærdómurinn sem sönnunargagnagrunnurinn snýr ítrekað aftur að er að *útkomumælikvarðinn sem valinn er*, og hver ber áhættuna af að ná honum ekki, ræður nær öllu öðru um hvernig PbR-samningur hegðar sér í reynd.

## Stærðfræðin

```
PbR-greiðsla = grunngreiðsla (ef einhver) + Σ (útkoma sem næst × einingarverð á útkomu)

Ávöxtun fjárfestis í skuldabréfi með samfélagsáhrifum:
  Útlagður kostnaður fjárfestis = upphafsfjármagn sem fjármagnar þjónustuafhendingu
  Útkomugreiðsla                = kaupandi greiðir aðeins ef útkoma ≥ þröskuldur, kvarðað eftir
                                   hve langt yfir þröskuldi frammistaðan lendir
  Ávöxtun fjárfestis            = útkomugreiðslur sem berast − útlagður kostnaður fjárfestis
                                   (ávöxtunarhlutfall, oft með þaki, sem endurspeglar áhættu sem tekin er)

Lykilhönnunarbreytur sem ráða hegðun alls samningsins:
  Útkomumælikvarði     — verður að vera útkoma, ekki afurð (sjá outcomes-vs-outputs)
  Samanburður/mótstaðreynd — yfirleitt paraður hópur (sjá counterfactual-analysis)
  Greiðsluþröskuldur   — lágmarksbati áður en nokkur greiðsla ræsist
  Greiðsluferill       — línulegur, þrepaskiptur eða með þaki ofan þröskuldar
  Afsláttur vegna eignunar/dauðaþunga — sjá additionality-and-deadweight
```

## Dæmi útreiknað

**Peterborough One Service** (tölur til skýringar úr birtum matsskýrslum):

```
Fjárfestingarfé safnað:           5.000.000 £
Hópur:                            ~3.000 karlkyns fangar í stuttum dómum í tveimur hópum
Þröskuldur:                       ≥7,5% fækkun endurdómsatburða miðað við paraðan
                                   landsbundinn samanburðarhóp, ella engin greiðsla
Niðurstaða hóps 1:                8,4% fækkun — undir samningsbundna markinu fyrir þann
                                   hóp einan samkvæmt upprunalegu reglunum
Niðurstaða sameinaðs/lokahóps:    9,7% fækkun — yfir þröskuldi
Útkomugreiðsla:                   ríkið (Ministry of Justice / Big Lottery Fund)
                                   greiðir fyrir hvert prósentustig yfir þröskuldi, sem fjármagnar
                                   endurgreiðslu fjárfesta auk ávöxtunar
```

**PbR-samningur sveitarfélags (til skýringar)**: þjónusta við fjölskylduinngrip er pöntuð á 4.000 £ fyrir hverja fjölskyldu sem er vísað til hennar (greiðsla fyrir starfsemi) auk 6.000 £ fyrir hverja fjölskyldu án frekari tilvísunar til barnaverndar 12 mánuðum eftir lok máls (útkomugreiðsla). 200 fjölskyldum vísað, 150 mál lokuð, 96 án tilvísunar eftir 12 mánuði:

```
Greiðsla fyrir starfsemi = 200 × 4.000 £ = 800.000 £
Útkomugreiðsla           = 96 × 6.000 £  = 576.000 £
Heildarkostnaður samnings = 1.376.000 £ fyrir 96 staðfestar varanlegar útkomur
Kostnaður á hverja staðfesta útkomu ≈ 14.333 £ (sjá cost-per-outcome)
```

## Tengsl við hugbúnaðarverkfræði

Greiðsla eftir árangri er hvatasamræmingarvandi áður en hún er gagnavandi, og gagnakerfið er þar sem sú samræming heldur eða brestur. Óháð, innsiglisvarin sannprófun útkoma er allur leikurinn: kaupandi og veitandi hafa andstæða hvata um hvernig tvíræð tilvik eru kóðuð, svo kerfið sem skráir útkomur þarf endurskoðunarslóð, gagnamiðlunarsamning við óháða sannprófandann (oft annan aðila en veitandann, stundum opinbera tölfræðistofnun sem pari við lögreglu- eða bótaskrár) og óbreytanlega útgáfustýringu á útkomuskilgreiningunni — PbR-ígildi gildrunnar „að endurskilgreina mælikvarðann“ í [lykilárangursmælikvarðar opinbera geirans](../lykilárangursmælikvarðar-opinbera-geirans/). Eignunarútreikningar byggja á paraðra hópa aðferðum [mótstaðreyndagreining](../mótstaðreyndagreining/), sem þurfa endurtakanlegan, endurskoðanlegan kóða, ekki einskiptis töflureikni. Og mælikvarðinn sjálfur verður að vera raunveruleg útkoma, ekki staðgengilsstarfsemi — sjá [útkoma og afurðir](../útkoma-og-afurðir/) — því PbR-samningur sem greiðir fyrir afurð endurmerkir aðeins venjulega fjármögnun með auknum færslukostnaði. Þar sem samfélagsleg ávöxtun SIB er líkönuð fyrirfram sækir það mat venjulega beint í aðferðafræði [samfélagsleg arðsemi fjárfestingar](../samfélagsleg-arðsemi-fjárfestingar/).

## Gildrur

- **Að greiða fyrir auðhagrætt staðgengilsútkomu**: „mæting á fundi“ er starfsemi klædd sem útkoma; krefstu mælikvarða sem endurspeglar breytinguna sem sóst er eftir í raun (endurtekin brot, atvinna, stöðugleiki húsnæðis).
- **Engin trúverðug mótstaðreynd**: án pöraðs samanburðarhóps gæti bati verið afturhvarf til meðaltals eða víðari þróun, ekki áhrif áætlunarinnar — sjá [mótstaðreyndagreining](../mótstaðreyndagreining/) og [viðbótaráhrif og dauðaþungi](../viðbótaráhrif-og-dauðaþungi/).
- **Að vanmeta færslu- og matskostnað**: óháð sannprófun, gagnatengingar og samningsumsýsla fyrir PbR/SIB-áætlanir nema reglulega tveggja stafa tölum sem hlutfall af samningsvirði — sönnunargagnagrunnur GO Lab skjalfestir þetta sem endurtekinn drifkraft þess að áætlunum er hætt.
- **Að velja bestu tilvikin eða „leggja til hliðar“**: veitendur sem fá greitt fyrir hverja útkomu hafa beinan hvata til að forgangsraða skjólstæðingum sem eru líklegastir til að ná árangri hvort eð er og draga úr forgangi erfiðustu tilvikanna — hannaðu greiðsluþrep eða leiðréttingu fyrir tilvikasamsetningu til að vinna gegn því.

## Heimildir

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, „Peterborough Social Impact Bond“ evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, „Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond.“
