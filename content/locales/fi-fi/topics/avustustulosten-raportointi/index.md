# Avustustulosten raportointi (IRIS+)

Avustustulosten raportointi on käytäntö, jossa avustuksensaajat raportoivat rahoittajille standardoituja, vertailukelpoisia tulosmittareita — vastakohtana sille, että kukin rahoittaja keksii oman räätälöidyn raportointipohjansa. IRIS+, jota ylläpitää Global Impact Investing Network (GIIN), on laajimmin omaksuttu tällainen standardi: ennalta määriteltyjen sosiaalisten, ympäristöllisten ja taloudellisten suorituskykymittareiden katalogi, jota vaikuttavuussijoittajat ja yhä useammin avustuksia myöntävät säätiöt edellyttävät tai suosittelevat avustuksensaajien käyttävän.

## Miksi tällä on merkitystä

Ennen standardoitua raportointia jokainen säätiö pyysi avustuksensaajilta eri indikaattorijoukkoa eri muodossa, ja keskikokoinen hyväntekeväisyysjärjestö, jolla oli kymmenen rahoittajaa, saattoi ajaa kymmentä rinnakkaista raportointiprosessia päällekkäiselle työlle — hyvin dokumentoitu raportointitaakan ajuri, jota avustustulosten standardointi on olemassa vähentämään. IRIS+ vastaa tähän antamalla rahoittajille ja avustuksensaajille yhteisen sanaston: teemoittain ryhmitellyt Core Metrics Sets -mittarijoukot (esim. kohtuuhintainen asuminen, puhtaan energian saatavuus, rahoituksellinen osallisuus), kukin mittari määritelty niin täsmällisesti, että "luodut työpaikat" tai "palvellut kotitaloudet" tarkoittaa samaa riippumatta siitä, kuka raportoi, ja kohdistettu YK:n kestävän kehityksen tavoitteisiin, jotta rahoittaja voi koostaa avustuksensaajatasoisen datan salkkutason SDG-narratiiviksi. GIIN raportoi, että IRIS-mittareita käyttää noin puolet vaikuttavuussijoittajista ja valtaosa alalla toimivista rahastonhoitajista, pankeista ja kehitysrahoituslaitoksista.

Standardointi on tärkeintä siellä, missä se leikkaa aihetta [tulokset vs. suoritteet](../tulokset-vs-suoritteet/): IRIS+ ohjaa raportointia kohti määriteltyjä tulos- ja vaikutusmittareita sen sijaan, mitä avustuksensaajan nykyinen asianhallintajärjestelmä sattuu kirjaamaan, mikä on täsmälleen se aukko, jonka [kustannus tulosta kohti](../kustannus-tulosta-kohti/) vs. [kustannus edunsaajaa kohti](../kustannus-edunsaajaa-kohti/) kuvaa.

## Matematiikka

Avustustulosten raportointi on viitekehys ja prosessi, ei kaava:

```
1. Rahoittaja valitsee avustuksen teemaan sopivan Core Metrics Set -mittarijoukon
   (esim. IRIS+ "Financial Inclusion" tai "Sustainable Agriculture")
2. Jokaisella mittarilla on kiinteä määritelmä, yksikkö ja laskentamenetelmä,
   jonka GIIN on julkaissut — ei keksitty rahoittajakohtaisesti
3. Avustuksensaaja raportoi samoja mittarimääritelmiä vastaan kaikille
   rahoittajilleen, jotka käyttävät kyseistä standardia, vähentäen päällekkäistä raportointityötä
4. Rahoittaja koostaa avustuksensaajatason mittarit salkkutason raportoinniksi,
   vertailukelpoisena vuodesta toiseen ja avustuksensaajien välillä samalla mittarilla
```

Tehokkuushyöty on kombinatorinen: N rahoittajan × M avustuksensaajan standardointi yhteen jaettuun sanastoon muuttaa N×M räätälöityä raportointisuhdetta noin N+M kuvaukseksi yhtä standardia vastaan.

## Työstetty esimerkki

**Avustuksensaaja, jolla on kolme rahoittajaa, ennen standardointia**: raportoi "palvellut ihmiset" Rahoittajalle 1 päälukumääräisellä määritelmällä, "tavoitetut edunsaajat" Rahoittajalle 2 kotitaloutta koskevalla määritelmällä ja "vaikutetut yksilöt" Rahoittajalle 3 palvelujakson määritelmällä (joten kahdesti käyvä henkilö lasketaan kahdesti). Kolme raporttia, kolme lukua, mikään ei ole vertailukelpoinen, eikä mikään ole vertailukelpoinen toisen avustuksensaajan lukujen kanssa edes saman rahoittajan salkun sisällä.

**Sama avustuksensaaja IRIS+:n alla**: raportoi määriteltyä IRIS+-mittaria tavoitetuista yksilöistä sekä määriteltyä tulosmittaria asianmukaisesta Core Metrics Set -joukosta, käyttäen GIIN:n julkaisemaa laskentamenetelmää molemmille. Kaikki kolme rahoittajaa saavat nyt saman luvun, laskettuna samalla tavalla, ja voivat verrata tämän avustuksensaajan kustannusta IRIS+-määriteltyä yksikköä kohti muihin salkkunsa avustuksensaajiin samalla mittarilla — vastaava raportointi-infrastruktuurin mittakaavassa kuin jaettu [yksikkökustannustietokanta](../yksikkökustannustietokannat/).

## Yhteys ohjelmistotekniikkaan

Avustustenhallinta-alustojen tulisi käsitellä IRIS+-mittaritunnisteita vierasavaimena, ei vapaana tekstinä: julkaistun mittarikoodin tallentaminen avustuksensaajan raportoiman arvon rinnalle (paikallisesti keksityn "edunsaajat"-nimisen kentän sijaan) mahdollistaa myöhemmin rahoittajien ja salkkujen välisen koosteen ilman datanpuhdistusprojektia. Kun alustan täytyy tukea rahoittajia, jotka eivät ole omaksuneet IRIS+:aa, pragmaattinen suunnittelu on antaa paikallisen mittarin kuvautua lähimpään IRIS+-määritelmään sen sijaan, että pakotettaisiin jokainen rahoittaja välittömästi standardiin — vertailukelpoisuus paranee asteittain, kun yhä suurempi osa graafista kuvautuu jaettuihin tunnisteisiin. Ks. sisarteema [kustannus tulosta kohti](../kustannus-tulosta-kohti/) siitä, mihin raportoituja lukuja tulisi käyttää kerättyään.

## Sudenkuopat

- **IRIS+:n käyttöönoton käsitteleminen automaattisena vertailukelpoisuutena.** Kaksi avustuksensaajaa voi molemmat raportoida samaa IRIS+-mittaria eivätkä silti olla vertailukelpoisia, jos niiden taustalla oleva datan laatu tai kontrafaktuaalioletukset eroavat; standardi kiinnittää määritelmät, ei mittaustarkkuutta.
- **Rahoittajan keksimät "IRIS-linjaiset" mittarit.** Mittari, joka on vain IRIS+-kielen inspiroima mutta ei varsinainen julkaistu määritelmä, tuo takaisin hajanaisuuden, jonka ratkaisemiseksi standardi on olemassa.
- **Raportointiväsymys liiallisesta valinnasta.** Avustuksensaajan vaatiminen raportoimaan kokonaista Core Metrics Set -joukkoa vastaan, kun vain kaksi tai kolme mittaria on päätöksen kannalta olennaisia, luo taakkaongelman uudelleen standardoidussa kääreessä.
- **Ei lainkaan tulosmittaria.** IRIS+ sisältää monia puhtaita suoritemittareita (esim. palveltujen ihmisten määrät); vain niiden valitseminen ja yhdenkään tulostason mittarin jättäminen tuottaa [kustannus edunsaajaa kohti](../kustannus-edunsaajaa-kohti/) -muotoista raportointia tulosraportoinnin nimellä.

## Lähteet

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
