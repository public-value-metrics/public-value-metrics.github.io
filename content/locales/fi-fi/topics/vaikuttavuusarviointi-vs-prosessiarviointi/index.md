# Vaikuttavuusarviointi vs. prosessiarviointi

Vaikuttavuusarviointi kysyy, aiheuttiko ohjelma tavoitellut tulokset. Prosessiarviointi kysyy, toimitettiinko ohjelma todella suunnitellusti — kenelle, millä annoksella ja mitä esteitä tai edistäviä tekijöitä matkalla oli. Nämä ovat eri kysymyksiä, jotka vaativat eri menetelmiä, ja HM Treasuryn Magenta Book pitää molempien tilaamista yhdessä vakiokäytäntönä, koska heikko tai nollatulos vaikuttavuudessa on yksinään tulkitsematon: se ei kerro, oliko ohjelman taustalla oleva teoria väärä vai eikö hyvää teoriaa koskaan toimitettu kunnolla.

## Miksi tällä on merkitystä

Valtionhallinnon arvioinnit ovat toistuvasti havainneet ohjelmalla ei mitattavaa vaikutusta ilman prosessiarviointia selittämään miksi — jättäen tilaajat kykenemättömiksi erottamaan "tämä ajatus ei toimi" (teoriaepäonnistuminen) ja "tätä ajatusta ei koskaan oikeasti kokeiltu kunnolla" (toteutusepäonnistuminen). Medical Research Councilin ohjeistus monimutkaisten interventioiden prosessiarvioinnista, julkaistu BMJ:ssä vuonna 2015 ja laajasti siteerattu Magenta Bookin rinnalla, muodollisti uskollisuuden (fidelity), annoksen (dose) ja tavoittavuuden (reach) ydinasioiksi, jotka prosessiarvioinnin on mitattava. Vaikuttavuusarvioinnin tilaaminen ilman prosessiarviointia vaarantaa aidosti toimivan ohjelmasuunnitelman hylkäämisen, koska se toimitettiin puolelle tavoitellusta väestöstä murto-osalla suunnitellusta intensiteetistä — virhe, jonka järjestelmien rakentaja on hyvässä asemassa estämään, koska toimituksen uskollisuus on juuri sitä, mitä operatiiviset datajärjestelmät voivat tallentaa lähes reaaliajassa.

## Matematiikka

```
Prosessiarviointi kysyy:
 - Toimitettiinko se kohdeväestölle suunnitellulla annoksella/intensiteetillä?
 - Vastasiko toimitus logiikkamallin / muutosteorian suunnitelmaa?
 - Mitkä esteet tai edistävät tekijät vaikuttivat toimitukseen?
 Menetelmät: uskollisuustarkistukset ennalta määriteltyjä kynnysarvoja vastaan, tapaustutkimukset,
             haastattelut, hallinnollinen toimitusdata.

Vaikuttavuusarviointi kysyy:
 - Mikä muuttui, ja kuinka suuri osa muutoksesta on kohdistettavissa ohjelmalle?
 Menetelmät: RCT, DiD, PSM, RDD — ks. impact-evaluation-methods — kontrafaktuaalia vastaan.

Yhdistetty diagnoosi:
 Ei vaikutusta + korkea uskollisuus   → teoriaepäonnistuminen: malli itse ei tuottanut tulosta
 Ei vaikutusta + matala uskollisuus   → toteutusepäonnistuminen: mallia ei koskaan testattu kunnolla
 Vaikutus löytyi + korkea uskollisuus → toista luottavaisesti
 Vaikutus löytyi + matala uskollisuus → tutki lisää: vaikutus voi olla hauras tai paikkakohtainen
```

## Työstetty esimerkki

**Paikallisviranomainen (vanhemmuusohjelma)**: differences-in-differences-menetelmällä tehty vaikuttavuusarviointi havaitsee +2 prosenttiyksikön muutoksen lapsen hyvinvointimittarissa — ei tilastollisesti merkitsevä. Sen rinnalla toteutettu prosessiarviointi havaitsee, että ohjelma tavoitti vain 210 kohdennetusta 500 perheestä (42 % tavoittavuus), ja heistä vain 95 täytti ennalta määritellyn uskollisuuskynnyksen 75 %+ istunnoista osallistuttu — 19 % alkuperäisestä suunnitellusta tavoittavuudesta. Johtopäätös: heikko vaikuttavuustulos on yhdenmukainen toteutusepäonnistumisen kanssa, ei näyttö siitä, ettei ohjelmamalli toimi; asianmukainen vastaus on korjata ohjauspolku, joka aiheutti 58 %:n pudotuksen, ei hylätä ohjelmasuunnitelmaa.

**Hyväntekeväisyysjärjestö (digitaalisen lukutaidon ohjelma)**: vaikuttavuusarviointi havaitsee vahvan vaikutuksen (+18 prosenttiyksikköä digitaalisen luottamuksen pisteissä), ja rinnakkainen prosessiarviointi vahvistaa 92 %:n uskollisuuden suunnitellulle opetussuunnitelmalle kaikissa 12 toimituspaikassa. Yhdessä rahoittaja voi skaalata ohjelmaa luottavaisesti, koska vaikutuksen on osoitettu pysyvän johdonmukaisena eikä olevan yhden poikkeuksellisen hyvän paikan tulosta.

## Yhteys ohjelmistotekniikkaan

Prosessiarvioinnin data on täsmälleen sitä, minkä tallentamiseen toimitusjärjestelmät ovat hyvässä asemassa: läsnäolo suunnitelmaa vastaan, istuntoannos ja pudotus ohjaus- tai ilmoittautumissuppilon jokaisessa vaiheessa — sama suppiloanalytiikka, jonka insinöörit jo rakentavat tuoteominaisuuksille, sovellettuna sosiaalisen ohjelman toimitusputkeen. Uskollisuus- ja tavoittavuusmittareiden syöttäminen ohjelmapäälliköille lähes reaaliajassa sen sijaan, että odotettaisiin avustusjakson lopun arviointia, antaa rikkinäisen ohjauspolun korjata kesken ohjelman sen sijaan, että se huomataan vasta rahoituskauden päätyttyä. Ks. [vaikuttavuuden arviointimenetelmät](../vaikuttavuuden-arviointimenetelmät/) kausaalisista asetelmista, joiden pariksi prosessiarviointi asetetaan, [muutosteoria](../muutosteoria/) ja
[logiikkamalli](../logiikkamalli/) suunnitelmasta, jota vasten prosessiarviointi tarkistaa uskollisuuden, ja
[hyötyjen toteutuminen](../hyötyjen-toteutuminen/) toimituksen seuraamiseen luvattuihin tuloksiin saakka.

## Sudenkuopat

- **Pelkän vaikuttavuusarvioinnin tilaaminen.** Nolla- tai heikkoa tulosta ei silloin voi tulkita teoriaepäonnistumiseksi tai toteutusepäonnistumiseksi, mikä on juuri se erottelu, jolla on merkitystä päätettäessä, mitä seuraavaksi tehdään.
- **Prosessiarvioinnin käsitteleminen pehmeänä lisänä.** Se tarvitsee saman tarkkuuden ja ennalta määritellyt uskollisuuskriteerit kuin vaikuttavuusasetelma, tai se romahtaa anekdooteiksi, kun tulokset tulevat.
- **"Ajallaan ja budjetin sisällä" -tilan sekoittaminen "toimitettu suunnitellusti" -tilaan.** Prosessiarviointi tarkistaa uskollisuuden mallille — annoksen, kohderyhmän, sisällön — ei projektinhallinnan RAG-tilaa.
- **Uskollisuuskynnysten ennakkorekisteröinnin laiminlyönti.** Sen päättäminen jälkikäteen, mikä lasketaan "riittäväksi annokseksi", saa minkä tahansa selityksen pettymystä tuottaneelle vaikuttavuustulokselle näyttämään jälkikäteiseltä tekosyyltä.

## Lähteet

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, ohjelma-arviointiraportit. <https://www.nao.org.uk/>
