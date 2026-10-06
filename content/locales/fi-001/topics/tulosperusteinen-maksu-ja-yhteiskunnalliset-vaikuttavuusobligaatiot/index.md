# Tulosperusteinen maksu ja yhteiskunnalliset vaikuttavuusobligaatiot (PbR/SIB)

Tulosperusteinen maksu (payment by results, PbR) maksaa palveluntuottajalle todennettujen saavutettujen tulosten perusteella, ei suoritettujen toimintojen. Yhteiskunnallinen vaikuttavuusobligaatio (social impact bond, SIB) on erityinen PbR-rahoitusrakenne, jossa yksityiset tai hyväntekeväisyyssijoittajat rahoittavat palvelun toimituksen etukäteen ja julkinen tilaaja maksaa heille takaisin — tuoton kanssa — vain, jos riippumattomasti mitatut tulokset saavuttavat sovitut kynnysarvot, siirtäen toimitusriskin veronmaksajalta sijoittajalle.

## Miksi tällä on merkitystä

Maailman ensimmäinen SIB käynnistettiin HMP Peterboroughin vankilassa syyskuussa 2010: Social Finance keräsi £5 miljoonaa 17 sijoittajalta rahoittaakseen "One Service" -palvelun, joka työskenteli lyhyttuomioisten vankien (alle 12 kuukautta) kanssa uusintarikollisuuden vähentämiseksi, ja Ministry of Justice sekä Big Lottery Fund sopivat maksavansa sijoittajille takaisin vain, jos uudelleentuomiot vähenisivät vähintään 7,5 % verrattuna vastaavaan kansalliseen vertailukohorttiin. Peterboroughin pilotin viimeinen kohortti kirjasi 9,7 %:n vähennyksen uudelleentuomioissa, selvästi kynnysarvon yläpuolella, ja sijoittajille maksettiin takaisin tuoton kanssa. Mekanismi oli tärkeä, koska se ratkaisi erityisen tilaamisongelman: hallitus halusi maksaa tuloksista eikä panoksista, mutta ei voinut kantaa sellaisen intervention taloudellista riskiä, joka ei ehkä toimisi, joten SIB-rakenne siirsi tuon riskin sijoittajille, jotka olivat halukkaita merkitsemään sen. Oxfordin Blavatnik School of Governmentin Government Outcomes Lab (GO Lab) ylläpitää nyt kattavinta julkista näyttöpohjaa PbR:n ja SIB:n suorituskyvystä maailmanlaajuisesti, seuraten selvästi yli 200 vaikuttavuusobligaatiota maailmanlaajuisesti ja julkaisten tutkimusta siitä, mitkä suunnitteluominaisuudet korreloivat menestyksen tai epäonnistumisen kanssa. Opetus, johon näyttöpohja toistuvasti palaa, on, että *valittu tulosmittari* ja se, kuka kantaa sen ohittamisen riskin, määrää lähes kaiken muun siitä, miten PbR-sopimus käytännössä käyttäytyy.

## Matematiikka

```
PbR-maksu = peruskorvaus (jos on) + Σ (saavutettu tulos × yksikköhinta tulosta kohti)

Yhteiskunnallisen vaikuttavuusobligaation sijoittajatuotto:
  Sijoittajan panos  = etukäteispääoma, joka rahoittaa palvelun toimituksen
  Tulosmaksu         = tilaaja maksaa vain, jos tulos ≥ kynnysarvo, skaalattuna
                        sen mukaan, kuinka kauas kynnyksen yläpuolelle suorituskyky päätyy
  Sijoittajan tuotto = saadut tulosmaksut − sijoittajan panos
                        (tuottoaste, usein katettu, heijastaa kannettua riskiä)

Keskeiset suunnitteluparametrit, jotka määräävät koko sopimuksen käyttäytymisen:
  Tulosmittari           — on oltava tulos, ei suorite (ks. outcomes-vs-outputs)
  Vertailu/kontrafaktuaali — yleensä vastaava kohortti (ks. counterfactual-analysis)
  Maksukynnys            — vähimmäisparannus ennen kuin mikään maksu laukeaa
  Maksukäyrä             — lineaarinen, porrastettu tai katettu kynnyksen yläpuolella
  Kohdentamis-/hukkavaikutusvähennys — ks. additionality-and-deadweight
```

## Työstetty esimerkki

**Peterborough One Service** (havainnollistavat luvut julkaistuista arvioinneista):

```
Kerätty sijoittajapääoma:          £5 000 000
Kohortti:                          ~3 000 lyhyttuomioista miesvankia kahdessa kohortissa
Kynnysarvo:                        ≥7,5 % vähennys uudelleentuomiotapahtumissa vs. vastaava
                                    kansallinen vertailuryhmä, tai ei maksua
Kohortin 1 tulos:                  8,4 % vähennys — alle sopimuksellisen rajan kyseiselle
                                    kohortille yksin alkuperäisten sääntöjen mukaan
Yhdistetyn/lopullisen kohortin tulos: 9,7 % vähennys — kynnyksen yläpuolella
Tulosmaksu:                        hallitus (Ministry of Justice / Big Lottery Fund)
                                    maksaa prosenttiyksikköä kohti kynnyksen yläpuolella,
                                    rahoittaen sijoittajien takaisinmaksun ja tuoton
```

**Paikallisviranomaisen PbR-sopimus (havainnollistava)**: perheintervention palvelu tilataan hintaan £4 000 ohjattua perhettä kohti (toimintamaksu) plus £6 000 perhettä kohti, jolla ei ole uutta lastensuojeluilmoitusta 12 kuukautta sulkemisen jälkeen (tulosmaksu). 200 perhettä ohjattu, 150 tapausta suljettu, 96 pysyy ilmoituksettomana 12 kuukauden kohdalla:

```
Toimintamaksu     = 200 × £4 000 = £800 000
Tulosmaksu        = 96 × £6 000  = £576 000
Sopimuksen kokonaiskustannus = £1 376 000 96 vahvistetusta pysyvästä tuloksesta
Kustannus vahvistettua tulosta kohti ≈ £14 333 (ks. cost-per-outcome)
```

## Yhteys ohjelmistotekniikkaan

Tulosperusteinen maksu on kannustimien kohdentamisongelma ennen kuin se on dataongelma, ja datajärjestelmä on se paikka, jossa kohdentaminen joko pitää tai pettää. Riippumaton, väärentämistä paljastava tulosten todentaminen on koko peli: tilaajalla ja tuottajalla on vastakkaiset kannustimet siihen, miten monitulkintainen tapaus koodataan, joten tulokset tallentavan järjestelmän tarvitsee auditointijäljen, tiedonjakosopimuksen riippumattoman todentajan kanssa (usein eri taho kuin tuottaja, joskus virallisen tilaston elin, joka täsmää poliisin tai etuuksien rekistereitä vastaan) ja tulosmääritelmän muuttumattoman versioinnin — PbR:n vastine aiheen [julkisen sektorin KPI:t](../julkisen-sektorin-suorituskykymittarit/) "mittarin uudelleenmäärittely" -sudenkuopalle. Kohdentamislaskelmat riippuvat [kontrafaktuaalianalyysin](../kontrafaktuaalianalyysi/) vastaavan kohortin menetelmistä, jotka tarvitsevat toistettavaa, tarkastettavaa koodia, eivät kertaluonteista taulukkolaskentaa. Ja itse mittarin on oltava aito tulos, ei korvaava toiminta — ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/) — koska suoritteesta maksava PbR-sopimus vain nimeää uudelleen tavanomaisen rahoituksen lisätransaktiokustannuksella. Kun SIB:n yhteiskunnallista tuottoa mallinnetaan ennakoivasti, kyseinen arviointi lainaa tyypillisesti suoraan [yhteiskunnallisen sijoitetun pääoman tuoton](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) menetelmää.

## Sudenkuopat

- **Helposti manipuloitavasta korviketuloksesta maksaminen**: "istuntoihin osallistuminen" on tulokseksi pukeutunut toiminta; vaadi mittari, joka heijastaa todellista tavoiteltua muutosta (uusintarikollisuus, työllisyys, asumisen vakaus).
- **Ei uskottavaa kontrafaktuaalia**: ilman vastaavaa vertailuryhmää parannus voi olla regressiota keskiarvoon tai laajempi trendi, ei ohjelman vaikutus — ks.
  [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/) ja
  [lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/).
- **Transaktio- ja arviointikustannusten aliarviointi**: PbR/SIB-järjestelyjen riippumaton todentaminen, datan linkitys ja sopimushallinto nousevat rutiininomaisesti kaksinumeroisiin prosentteihin sopimusarvosta — GO Labin näyttöpohja dokumentoi tämän toistuvaksi järjestelyjen lopettamisen ajuriksi.
- **Poimiminen tai "parkkeeraus"**: tulosta kohti maksetuilla tuottajilla on suora kannustin priorisoida asiakkaita, jotka todennäköisimmin onnistuvat joka tapauksessa, ja jättää vaikeimmat tapaukset vähemmälle — suunnittele maksuportaat tai tapausmixin korjaus sen torjumiseksi.

## Lähteet

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" -arviointiyhteenvedot.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
