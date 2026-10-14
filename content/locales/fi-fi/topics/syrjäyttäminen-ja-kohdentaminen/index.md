# Syrjäyttäminen ja kohdentaminen

Syrjäyttämistä (displacement) tapahtuu, kun ohjelman näennäinen hyöty saavutetaan viemällä toimintaa tai hyötyä jostain muualta sen sijaan, että luotaisiin jotain uutta — sinun voittosi on jonkun toisen tappio. Kohdentaminen (attribution) on siihen liittyvä kysymys siitä, kuinka suuren osan havaitusta tuloksesta interventiosi voi oikeutetusti ottaa omakseen, kun myös muut toimijat ja tekijät vaikuttivat. Molemmat ovat vakiokorjauksia brittiläisissä julkisen sektorin arviointiohjeissa hukkavaikutuksen ja vuodon rinnalla, ja molemmat jätetään rutiininomaisesti väliin vaikutusväitteistä, jotka näyttävät paljon vahvemmilta kuin ovat.

## Miksi tällä on merkitystä

Paikallisviranomaisen yritystukiohjelma, joka auttaa 50 kauppaa siirtymään uudistamisalueelle, voi raportoida "50 tuettua yritystä, 200 luotua työpaikkaa" — mutta jos nämä yritykset yksinkertaisesti muuttivat viereiseltä pääkadulta laajentumisen sijaan, työpaikat syrjäytettiin, ei luotu, ja kaupunginosan (tai alueen) nettovaikutus voi olla lähellä nollaa. HM Treasuryn Magenta Book ja pitkäaikainen Additionality Guide käsittelevät syrjäyttämistä pakollisena vähennyksenä juuri siksi, että paikalliset menestystarinat ovat yleisiä silloinkin, kun ne eivät tuota nettoa kansallista tai alueellista hyötyä — arvo on yksinkertaisesti siirtynyt, usein sen alueen tai toimijoiden haitaksi, jotka sen menettivät. Rakennerahastojen arviointiohjeet (käytössä entisissä Euroopan aluekehitysrahaston ohjelmissa ja niiden kotimaisissa seuraajissa, kuten UK Shared Prosperity Fundissa) muodollistavat tämän kolmella alueellisella tasolla: paikallinen syrjäytyminen (kaupungin sisällä), alueellinen syrjäytyminen (alueen sisällä) ja kansallinen syrjäytyminen (koko Yhdistyneessä kuningaskunnassa), koska interventio voi olla lisäinen yhdellä tasolla ja puhdasta syrjäyttämistä laajemmalla — työllisyysohjelma, joka vetää työntekijöitä naapurikaupungista, on kansallisesti neutraali, vaikka se näyttäisi paikalliselta menestykseltä.

Kohdentaminen on sisarongelma kumppanuuksiin vahvasti nojaavassa toimituksessa, mikä on nykyään normi yhteiskunnallisella sektorilla ja virastorajat ylittävässä julkisessa palvelutyössä. Kun kolme organisaatiota tarjoaa yhdessä asunnottomuuden ehkäisypalvelua, kunkin organisaation vuosikertomus voi itsenäisesti vaatia kunniaa samasta kadulla nukkuvien vähenemisestä — raporttien yli summattuna väitetty vaikutus voi ylittää havaitun todellisen muutoksen, joskus monikertaisesti. Magenta Bookin ohje osuusanalyysista (contribution analysis) on olemassa nimenomaan siksi, että satunnaistettu kohdentaminen yhdelle toimijalle on usein mahdotonta usean viraston toimituksessa, ja rehellinen vastaus on usein "myötävaikutimme tähän tulokseen" eikä "aiheutimme tämän tuloksen".

## Matematiikka

Syrjäyttäminen osana vakiomuotoista nettovaikutusjärjestystä (ks. [lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/) koko ketjusta):

```
Netto lisävaikutus = Bruttotulos − Hukkavaikutus − Syrjäytyminen − Vuoto, × Kerroin

Syrjäytymisaste = muualta ohjattu hyöty/toiminta
                   / havaittu bruttohyöty/-toiminta yhteensä
```

Kohdentaminen, kun useat toimijat myötävaikuttavat yhteen tulokseen, ilmaistaan tyypillisesti osuutena eikä tarkkana prosenttina, koska sitä ei yleensä voi mitata samalla tarkkuudella kuin syrjäytymistä:

```
Kohdistettava osuus ≈ f(syy-seurausvaikutuksen vahvuus, muiden toimijoiden
                         myötävaikutukset, ulkoiset/kontekstuaaliset tekijät)

Väitetty vaikutus ei saa koskaan ylittää:
  Σ (kunkin kumppanin kohdistettava osuus) ≤ 100 % havaitusta kokonaistuloksesta
```

## Työstetty esimerkki

**Uudistamisavustus**: kunnan pääkatuavustusohjelma raportoi 200 uutta vähittäiskaupan työpaikkaa rahoitetulla alueella. Seurantatutkimus osoittaa, että 60 näistä työpaikoista tuli yrityksiltä, jotka muuttivat viereiseltä, rahoittamattomalta pääkadulta saman kaupunginosan sisällä, ja vielä 30 valtakunnallisilta ketjuilta, jotka avaavat toimipisteitä, jotka olisi avattu jossain alueella avustuksesta riippumatta.

```
Väitetyt bruttotyöpaikat = 200
Paikallinen syrjäytyminen = 60 (siirtyi kaupunginosan sisällä)
Alueellinen syrjäytyminen = 30 (olisi avattu alueellisesti joka tapauksessa)

Netto lisätyöpaikat (kaupunginosataso) = 200 − 60 = 140
Netto lisätyöpaikat (aluetaso) = 200 − 60 − 30 = 110
```

Rehellinen otsikkoluku riippuu maantieteellisestä mittakaavasta, josta rahoittaja välittää — kansallisella tai alueellisella tasolla arvioidun Treasuryn liiketoimintaperustelun tulisi käyttää lukua 110, ei kaupunginosatason 140:ä, ja varsinkaan raakaa 200:aa.

**Usean viraston asunnottomuuspalvelu**: kolme kumppaniorganisaatiota (kunta, asumisen hyväntekeväisyysjärjestö ja terveystrusti) tarjoavat yhdessä kadulla nukkumisen vähentämispalvelua. Kadulla nukkuvien määrä alueella väheni vuoden aikana 30 hengellä. Kunkin organisaation oma vuosikertomus väittää "vähensimme kadulla nukkumista 30:llä" — summattuna kolme raporttia väittävät 90 autettua, kolminkertaisesti todelliseen vähenemiseen nähden. Osuusanalyysi, joka antaa kullekin kumppanille osuuden (sanokaamme 40 % kunta, 35 % hyväntekeväisyysjärjestö, 25 % terveystrusti, dokumentoidun roolin ja riippumattoman arvioinnin perusteella), raportoisi 12, 10,5 ja 7,5 vastaavasti, summautuen oikein havaittuun 30:een.

## Yhteys ohjelmistotekniikkaan

Syrjäyttäminen ja kohdentaminen muokkaavat sitä, miten vaikuttavuuden seuranta- ja tulosraportointijärjestelmät tulisi suunnitella usean toimipisteen tai usean kumppanin toimitukseen:

- Maantieteellisen ja organisatorisen laajuuden tulisi olla nimenomaisia, ensiluokkaisia kenttiä missä tahansa vaikutuskojelaudassa — "kaupunginosalle" raportoitu luku ja sama luku "alueelle" raportoituna ovat eri lukuja, ja ne sekoittava järjestelmä tuottaa lukuja, joita ei voi täsmäyttää salkkutasolla.
- Kun useat kumppanit toimittavat yhdessä, tulosjärjestelmän tulisi tallentaa osuudet (tai vähintään merkitä yhteinen kohdentaminen) sen sijaan, että annettaisiin kunkin kumppanin raportointimoduulin itsenäisesti väittää 100 % jaetusta tuloksesta — muuten salkkutason yhteenvedot liioittelevat kokonaisvaikutusta, joskus pahasti.
- Tämä liittyy [yhteiskunnalliseen sijoitetun pääoman tuottoon](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) ja [avustustulosten raportointiin](../avustustulosten-raportointi/): SROI- tai IRIS+-laskenta, joka sivuuttaa syrjäytymisen tai yliattribuoi jaettuja tuloksia, tuottaa paisutetun suhdeluvun, joka ei kestä tarkastusta tai toistamista.

## Sudenkuopat

- **Paikallisen menestyksen raportointi tarkistamatta laajempaa syrjäytymistä.** Ohjelma voi näyttää erittäin onnistuneelta pienimmällä raportointitasolla ollessaan neutraali tai jopa negatiivinen laajemmalla; ilmoita aina maantieteellinen mittakaava, johon nettoluku pätee.
- **Jokaisen yhteistoimituksen kumppanin antaminen vaatia täyttä kunniaa.** Ellei osuuksista sovita ja niitä dokumentoida, kumppaneiden välinen yhteenvetoraportointi liioittelee kokonaisvaikutusta — tarkista, että kumppanitason väitteet summautuvat enintään havaittuun kokonaismäärään.
- **Kohdentamisen käsitteleminen tarkkana prosenttina, vaikka se on todellisuudessa arvio.** Osuusanalyysi, toisin kuin satunnaistettu kontrafaktuaali, tuottaa puolustettavan arvion, ei mitattua tosiasiaa; esitä se asianmukaisella epävarmuudella valetarkkuuden sijaan.
- **Syrjäytymisen sivuuttaminen markkinoille suuntautuvissa interventioissa.** Yritystuki, työllisyyssuunnitelmat ja paikkaperustainen uudistaminen ovat klassisia korkean syrjäytymisen luokkia; käsittele syrjäytymistarkistuksia näille pakollisina, ei valinnaisina.

## Lähteet

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), mukaan lukien
  osuusanalyysia koskeva ohjeistus. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3. painos).
- Euroopan komissio, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  ohjeistus paikallisista, alueellisista ja kansallisista syrjäytymisen mittakaavoista.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
