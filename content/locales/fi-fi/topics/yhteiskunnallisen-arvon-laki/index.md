# Yhteiskunnallisen arvon laki (Social Value Act)

Public Services (Social Value) Act 2012 on Ison-Britannian lakisääteinen velvoite, joka edellyttää Englannin ja Walesin viranomaisilta, että ne harkitsevat, miten hankittava palvelu voisi parantaa asianomaisen alueen taloudellista, sosiaalista ja ympäristöllistä hyvinvointia, ja harkitsevat kuulemista tästä ennen julkisten palvelusopimusten hankintamenettelyn aloittamista. Laki tuli voimaan tammikuussa 2013 suhteellisen kevyenä "ottaa huomioon" -velvoitteena, ja sitä vahvistettiin merkittävästi Procurement Policy Note (PPN) 06/20:llä tammikuussa 2021, joka edellyttää keskushallinnon sopimuksissa yhteiskunnallisen arvon nimenomaista arviointia — ei pelkkää harkintaa — vähimmäispainotuksella tarjouskriteereissä.

## Miksi tällä on merkitystä

Ennen PPN 06/20:ta yhteiskunnallisen arvon "harkitseminen" saattoi täyttyä sillä, että tilaaja totesi miettineensä asiaa, ilman vaatimusta siitä, että sillä olisi vaikutusta valintapäätökseen — velvoite, jonka täytti helposti paperilla ja jonka saattoi käytännössä sivuuttaa. PPN 06/20 sulki tämän aukon keskushallinnon hankinnoissa: se edellyttää yhteiskunnallisen arvon pisteyttämistä osana tarjousten arviointia, jäsennettynä viiden kansallisen painopisteteeman ympärille — COVID-19-elpyminen, taloudellisen eriarvoisuuden torjuminen, ilmastonmuutoksen torjuminen, yhdenvertaiset mahdollisuudet ja hyvinvointi — ja yleisesti mitattuna Social Value Portalin ylläpitämällä National TOMs (Themes, Outcomes, Measures) -viitekehyksellä. Ohjelmistoinsinöörille, joka rakentaa hankinta-, sopimuksenhallinta- tai tarjoustukityökaluja julkiselle sektorille, tämä on oikeudellinen perusta, jota vastaan asiakkaan on pakko rakentaa, ei valinnainen lisä.

## Matematiikka

Yhteiskunnallinen arvo on viitekehysluonteinen aihe; sen "matematiikka" on pisteytysrakenne, jota useimmat viranomaiset käyttävät:

```
Tarjouksen kokonaispisteet = Hinta/kustannuspainotus + Laatupainotus + Yhteiskunnallisen arvon painotus

PPN 06/20 (keskushallinto): yhteiskunnallisen arvon painotus ≥ 10 % kokonaispisteistä

Yhteiskunnallisen arvon teemat (PPN 06/20):
 1. COVID-19-elpyminen
 2. Taloudellisen eriarvoisuuden torjuminen
 3. Ilmastonmuutoksen torjuminen
 4. Yhdenvertaiset mahdollisuudet
 5. Hyvinvointi
```

Tarjoajat rahamääräistävät sitoumuksensa näiden teemojen osalta tyypillisesti [yksikkökustannustietokantojen](../yksikkökustannustietokannat/) avulla, ja sama rahamääräistämislogiikka, jota käytetään [yhteiskunnallisessa sijoitetun pääoman tuotossa](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/), pätee: sitoumuksen tulee olla todennettu, kohdistettavissa sopimukseen eikä kaksoislaskettu muuhun rahoitukseen nähden.

## Työstetty esimerkki

**Paikallisviranomaisen IT-sopimus**: £2 miljoonan, 3 vuoden sopimus pisteytetään 60 % laatu, 30 % hinta, 10 % yhteiskunnallinen arvo. Tarjoaja A sitoutuu 2 oppisopimukseen, £150 000 paikallisiin alihankintamenoihin ja 200 tuntiin pro bono -digitaitokoulutusta paikalliselle koululle, rahamääräistettynä yksikkökustannustietokannan korvikkeilla yhteensä £90 000 lisäyhteiskunta-arvoksi. Tarjoaja B sitoutuu pienempään pakettiin, rahamääräistettynä £40 000:ksi. Jos viranomainen pisteyttää yhteiskunnallisen arvon suhteessa vahvimpaan tarjoukseen, Tarjoaja A saa täydet 10 pistettä; Tarjoaja B saa 10 × (£40 000 ÷ £90 000) = 4,4 pistettä — 5,6 pisteen ero, joka voi ratkaista sopimuksen silloinkin, kun laatu ja hinta ovat lähellä toisiaan.

**Kolmannen sektorin tarjoaja**: pieni VCSE-toimija (voluntary, community and social enterprise), joka tarjoutuu hoitamaan viheralueiden kunnossapitosopimusta kaupallista kilpailijaa vastaan, ei voi kilpailla pelkällä yksikköhinnalla, mutta käyttää Global Value Exchangen korvikkeita rahamääräistääkseen olemassa olevat yhteisötyöllisyys- ja vapaaehtoistyösitoumuksensa, tehden todennetun yhteiskunnallisen arvon perustelun, jonka arvoinen on pisteyttää hinnan ja laadun rinnalla.

## Yhteys ohjelmistotekniikkaan

Tarjouskilpailun voittaminen rahamääräistetyillä yhteiskunnallisen arvon sitoumuksilla luo velvoitteen todentaa toimitus niitä vastaan sopimuksenhallinnan kautta — työkalut, jotka kirjaavat oppisopimusten alkamiset, paikalliset menot ja koulutustunnit nimenomaan tarjouksessa pisteytettyjä sitoumuksia vastaan, syöttäen sopimuskatselmuksia sen sijaan, että ne unohdetaan sopimuksen allekirjoittamisen jälkeen. G-Cloud- ja Digital Marketplace -listaukset edellyttävät yhä useammin yhteiskunnallisen arvon lausuntoja listaushetkellä. Ks. [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) sitoumusten taustalla olevasta arvotusmenetelmästä, [yksikkökustannustietokannat](../yksikkökustannustietokannat/) korvikkeista, joita tarjoajat käyttävät, ja [tulokset vs. suoritteet](../tulokset-vs-suoritteet/) sen varmistamiseksi, että toimitetut sitoumukset ovat tuloksia eivätkä pelkkiä toimintamääriä.

## Sudenkuopat

- **Yhteiskunnallisen arvon pesu tarjouksissa.** Epämääräiset sitoumukset ("tuemme paikallista yhteisöä"), joita ei voi mitata tai joihin ei voi sitoa sopimuksenhallinnassa, saavat hyvät pisteet mutta eivät tuota mitään todennettavaa.
- **Yhteiskunnallisen arvon käsitteleminen tasapelin ratkaisijana.** PPN 06/20 edellyttää yhteiskunnallisen arvon nimenomaista arviointia osana tarjouskriteereitä, ei epävirallista käyttöä muuten tasaväkisten tarjousten tasapelin ratkaisemiseen.
- **Sopimuksenhallinnan jatkotoimien puute.** Tarjouksessa pisteytettyjä sitoumuksia ei usein koskaan seurata toimituksen aikana — ks. [hyötyjen toteutuminen](../hyötyjen-toteutuminen/).
- **Epäjohdonmukaiset mittausviitekehykset sopimusten välillä.** Eri korvikelähteiden käyttö samankaltaisille sitoumuksille eri sopimuksissa tekee salkkutason vertailusta merkityksettömän, minkä vuoksi yhteiset viitekehykset kuten National TOMs ja jaetut yksikkökustannustietokannat ovat olemassa.

## Lähteet

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
