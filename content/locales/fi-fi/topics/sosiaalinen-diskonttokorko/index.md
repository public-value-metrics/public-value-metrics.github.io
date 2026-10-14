# Sosiaalinen diskonttokorko

Sosiaalinen diskonttokorko muuntaa tulevat kustannukset ja hyödyt nykyarvoiksi, jotta ohjelmia, joiden tuotot jakautuvat vuosikymmenille, voidaan verrata yhteisellä pohjalla. HM Treasuryn Green Book edellyttää laskevaa asteikkoa, jonka ankkurina on 3,5 % ensimmäisille 30 vuodelle ja joka perustuu Ramseyn kaavaan — täsmälliseen, siteerattavaan lukuun, josta on tullut elävä poliittinen ja eettinen kiista aina, kun sitä sovelletaan pitkän aikajänteen sitoumuksiin, kuten ilmastopolitiikkaan tai infrastruktuuriin.

## Miksi tällä on merkitystä

30 vuoden päästä saatu punnan hyöty ei ole yhtä arvokas kuin tänään saatu punnan hyöty, syistä, jotka liittyvät osittain puhtaaseen aikapreferenssiin (ihmiset ja yhteiskunnat pitävät hyvistä asioista mieluummin aikaisemmin) ja osittain kasvuun (tulevan yhteiskunnan odotetaan olevan rikkaampi, joten punta merkitsee sille vähemmän marginaalissa). Green Bookin liite 6 johtaa Ison-Britannian vakiodiskonttokoron Ramseyn kaavasta yhdistämällä puhtaan aikapreferenssin asteen kulutuksen odotettuun kasvuun ja kulutuksen rajahyödyn jouston, tuottaen julkaistun koron 3,5 % vuodessa vuosille 0–30, laskevana julkaistun asteikon mukaan vuosille 31 eteenpäin (alas 1 %:iin vuosina 301+). Tämä asteikko on olemassa juuri siksi, että vakio 3,5 % korkoa korolle vuosisadan ajan saisi lähes minkä tahansa pitkän aikavälin hyödyn — tulvasuojan, joka pelastaa henkiä 80 vuoden päästä, hiilidioksidipäästövähennyksen, joka estää vahingon 100 vuoden päästä — näyttämään mitättömältä nykyarvossa, minkä Treasury arvioi epäuskottavaksi eettiseksi johtopäätökseksi aidosti pitkäikäisille infrastruktuuri- ja ympäristöpäätöksille.

Diskonttokorko on kiistanalainen juuri siksi, että valinta ei ole neutraali tekninen parametri: se koodaa arvion siitä, kuinka paljon yhteiskunnan pitäisi uhrata tänään vielä syntymättömien ihmisten vuoksi. Stern Review ilmastonmuutoksen taloustieteestä (2006) käytti lähes nollan diskonttokorkoa (puhdas aikapreferenssi noin 0,1 %), väittäen, että tulevien sukupolvien hyvinvoinnin diskonttaaminen lähellekään markkinakorkoja on eettisesti puolustamatonta, kun vahinko (katastrofaalinen ilmastonmuutos) on peruuttamaton. Kriitikot — erityisesti William Nordhaus — väittivät, että Sternin lähes nollakorko liioitteli välittömän ilmastomenon puolesta puhuvaa perustetta tekemällä lähes minkä tahansa nykykustannuksen näyttämään perustellulta lähes diskonttaamatonta tulevaa hyötyä vastaan. Erimielisyys ei koskenut matematiikkaa; se koski sitä, kenen eettinen viitekehys saa määrittää koron, ja se on edelleen vakioesimerkki siitä, miksi diskonttokorko on politiikkavalinta eikä vain vakuutusmatemaattinen syöte.

## Matematiikka

Green Bookin koron taustalla oleva Ramseyn kaava:

```
r = ρ + η·g

missä:
  r = sosiaalinen diskonttokorko
  ρ = puhtaan aikapreferenssin aste (kärsimättömyys + katastrofiriski)
  η = kulutuksen rajahyödyn jousto
  g = asukasta kohti laskettavan kulutuksen odotettu vuotuinen kasvuvauhti
```

Green Bookin laskeva asteikko (liite 6, havainnollistava — tarkista tarkka julkaistu taulukko nykyisestä painoksesta):

```
Vuodet 0–30:    3,5 %
Vuodet 31–75:   3,0 %
Vuodet 76–125:  2,5 %
Vuodet 126–200: 2,0 %
Vuodet 201–300: 1,5 %
Vuodet 301+:    1,0 %
```

Tulevan summan nykyarvo:

```
PV = FV / (1 + r)^t
```

## Työstetty esimerkki

**Tulvasuojahanke**: hanke tuottaa £10 miljoonaa vältettyjä tulvavahinkoja vuonna 40.

Vakiokorolla 3,5 %: PV = 10 000 000 / (1,035)^40 ≈ £2,52 miljoonaa — hyöty näyttää pieneltä.

Green Bookin laskevalla asteikolla (3,5 % vuosille 0–30, 3,0 % sen jälkeen) laskenta korkoutuu 3,5 %:lla ensimmäiset 30 vuotta ja 3,0 %:lla vuodet 31–40:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ £2,65 miljoonaa
```

Laskeva asteikko nostaa maltillisesti pitkän aikavälin hyötyjen nykyarvoa verrattuna vakiona korkeaan korkoon — asteikon nimenomainen tarkoitus, koska vakio 3,5 % vuosisadan ajan diskonttaisi £100 miljoonan hyödyn vuonna 100 alle £3,3 miljoonaan.

**Digitaalinen infrastruktuuri**: valtionhallinnon pilvisiirtymän, joka maksaa nyt £4 miljoonaa, odotetaan välttävän £500 000/vuosi vanhojen järjestelmien ylläpitokustannuksia 15 vuoden ajan. Korolla 3,5 % tämän annuiteetin nykyarvo on noin £500 000 × 11,52 (15 vuoden annuiteettitekijä korolla 3,5 %) ≈ £5,76 miljoonaa — ylittää mukavasti £4 miljoonan kustannuksen, positiivinen nettonykyarvotapaus, joka näyttäisi huomattavasti heikommalta naiivisti valitulla korkeammalla korolla (7 %:lla sama annuiteettitekijä putoaa noin 9,11:een, antaen £4,56 miljoonaa, edelleen positiivinen mutta paljon ohuemmalla marginaalilla).

## Yhteys ohjelmistotekniikkaan

Useimmat ohjelmistoliiketoimintaperustelut kattavat 3–5 vuotta, hyvin vakio-3,5 %:n vyöhykkeen sisällä, joten laskeva asteikko tulee harvoin suoraan käyttöön — mutta taustalla oleva kuri on tärkeä kaikissa pitkäikäisissä valtionhallinnon teknologiainvestoinneissa (kansallinen alusta, dataestruktuuriohjelma, usean vuosikymmenen sopimus):

- Käytä Green Bookin julkaistua korkoa äläkä yksityisestä rahoituksesta lainattua sisäistä "hurdle rate" -korkoa; tarkastajat ja Treasuryn arvioijat odottavat vakioasteikkoa.
- Monen vuoden päästä realisoituvien hyötyjen osalta (alustan pitkän aikavälin ylläpitosäästöt, avoimen datan ekosysteemin kumuloituva arvo — ks. [avoimen datan arvo](../avoimen-datan-arvo/)) diskonttausvalinta voi kääntää liiketoimintaperustelun positiivisesta negatiiviseksi; tee korosta ja aikajänteestä nimenomaisia oletuksia, ei haudattuja oletusarvoja.
- Tämä syöttää suoraan [Green Book -arviointiin](../green-book-arviointi/), viiden tapauksen malliin, joka muodollisesti edellyttää diskontattua kassavirtaa, ja [hyvinvoinnin arvottamiseen](../hyvinvoinnin-arvottaminen/), jossa sama diskonttauskysymys nousee esiin ei-rahamääräisille hyvinvointihyödyille.
- Ks. myös [sukupolvien välinen oikeudenmukaisuus ja kestävyysdiskonttaus](../sukupolvien-välinen-oikeudenmukaisuus-ja-kestävyysdiskonttaus/) Stern–Nordhaus-kiistasta sovellettuna erityisesti ympäristö- ja ilmastoteknologiainvestointeihin.

## Sudenkuopat

- **Vakiokoron käyttö hyvin pitkillä aikajänteillä.** Green Bookin laskeva asteikko on olemassa juuri siksi, että vakiokorko aliarvioi aidosti pitkäikäiset hyödyt; tarkista, mikä vyöhyke pätee, sen sijaan että oletuksena käyttäisit 3,5 %:a läpi koko jakson.
- **Diskonttokoron käsitteleminen eettisesti neutraalina.** Stern–Nordhaus-kiista osoittaa, että korko koodaa arvoarvion tuleville sukupolville; sen muuttaminen muuttaa, mitkä ohjelmat näyttävät perustelluilta, joten se tulee ilmoittaa ja puolustaa, ei kätkeä taulukkolaskennan oletusarvoon.
- **Sosiaalisen diskonttokoron sekoittaminen yksityiseen pääomakustannukseen.** Valtion lainanottokustannukset ja yksityisen sektorin hurdle rate -korot ovat eri käsitteitä kuin Ramseysta johdettu sosiaalinen korko, ja toisen korvaaminen toisella julkisessa arvioinnissa vääristää tyypillisesti tulosta lyhyen aikavälin tuottoja suosivaan suuntaan.
- **Reaalisten ja nimellisten kassavirtojen epäjohdonmukainen diskonttaus.** Green Bookin korko on reaalikorko (inflaatiokorjattu); nimellisten kassavirtojen diskonttaus sillä aliarvioi nykyarvot olennaisesti.

## Lähteet

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", liite 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
