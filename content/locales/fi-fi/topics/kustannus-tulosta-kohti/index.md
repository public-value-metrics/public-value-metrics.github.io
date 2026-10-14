# Kustannus tulosta kohti

Kustannus tulosta kohti on ohjelman kokonaismenot jaettuna niiden ihmisten määrällä, jotka saavuttavat määritellyn, merkityksellisen muutoksen olosuhteissaan — ei niiden määrällä, jotka pelkästään saivat palvelun. Se on terävin tehokkuusmittari, jota rahoittaja tai toimitustiimi voi käyttää, koska se pakottaa esittämään ennakkokysymyksen, jota useimmat hyväntekeväisyysjärjestöt välttelevät: mikä täsmälleen lasketaan onnistumiseksi?

## Miksi tällä on merkitystä

Ruokapankki voi raportoida samasta vuoden tilinpäätöksestä kaksi hyvin erilaista lukua. Kustannus jaettua ruokakassia kohti saattaa olla £15. Kustannus kotitaloutta kohti, joka saavuttaa ruokaturvan — ei enää tarvitse hätäruoka-apua, todennettuna seurantapisteessä — saattaa olla £340. Molemmat ovat tosia. Vain toinen kertoo rahoittajalle, toimiiko raha. Niiden välinen kuilu on suoritteen ja tuloksen välinen kuilu: luovutettu kassi on suorite; kotitalous, joka ei enää ole kriisissä, on tulos. Ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/).

Ison-Britannian kolmas sektori on kaksikymmentä vuotta rakentanut infrastruktuuria tämän erottelun pakottamiseksi. New Philanthropy Capitalin "four pillar approach" hyväntekeväisyyden vaikuttavuuteen pyytää nimenomaisesti organisaatioita ilmoittamaan tuloksensa ennen suoritteitaan, ja Inspiring Impact — Ison-Britannian rahoittajien tukema vaikutusten mittaamisen yhteistyöverkosto — julkaisee Outcomes Matrixin, jonka täyttämistä monet avustushakemukset nykyään edellyttävät hyväntekeväisyysjärjestöiltä. Trussell Trustin vuosittainen "State of Hunger" -tutkimusohjelma, jota toteutetaan Heriot-Watt Universityn kanssa, on olemassa juuri siksi, etteivät pelkät kassimäärät kerro mitään siitä, pakenevatko ihmiset ruokaepävarmuudesta.

Kustannus tulosta kohti tarkoittaa jotain vasta, kun kontrafaktuaali on kiinnitetty: tulos, joka saavutettiin "joka tapauksessa", ei ole tulos, jonka ohjelma osti. Ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/) ja [syrjäyttäminen ja kohdentaminen](../syrjäyttäminen-ja-kohdentaminen/).

## Matematiikka

```
Kustannus tulosta kohti = Ohjelman kokonaiskustannus / Määritellyn tuloksen saavuttaneiden edunsaajien määrä

missä:
  Ohjelman kokonaiskustannus = suorat toimituskustannukset + kohtuullinen osuus yleiskustannuksista
  Määritelty tulos           = ennalta määritelty, mitattavissa oleva tilan muutos
                               (esim. "ruokaturvassa 6 kuukauden seurannassa",
                               ei "sai ruokakassin")
```

Vertaa [yksikkökustannustietokantoihin](../yksikkökustannustietokannat/) (esim. sektorikohtaisiin yksikkökustannusten vertailuarvoihin) arvioidaksesi, onko annettu kustannus tulosta kohti hyvä, keskimääräinen vai huono verrattuna vastaaviin interventioihin.

## Työstetty esimerkki

**Ruokapankki, yksi vuosi**:

- Ohjelman kokonaiskustannus: £450 000
- Jaetut kassit: 30 000
- Kustannus kassia kohti (suoritemittari): £450 000 / 30 000 = **£15**

Hyväntekeväisyysjärjestö toteuttaa myös kuuden kuukauden seurantakyselyn kotitalouksien otokselle ja havaitsee, että 35 % kotitalouksista, jotka saivat kolme tai useampia kasseja, raportoi, etteivät enää tarvitse hätäruoka-apua ja ylittävät ruokaturvan kynnyksen tavanomaisella ruokaturvakyselymoduulilla. Kolmesta tai useammasta kassista saaneesta 1 800 kotitaloudesta kyseisenä vuonna 630 saavuttaa tuon tuloksen.

```
Kustannus tulosta kohti = £450 000 / 630 = £714 ruokaturvan saavuttanutta kotitaloutta kohti
```

Tuo £714 on luku, jota tämän hyväntekeväisyysjärjestön ja käteissiirtopilotin tai velkaneuvontapalvelun välillä vertailevan rahoittajan tulisi käyttää — ei £15. Jos vastaava käteissiirto-ohjelma samalla alueella saavuttaa ruokaturvan hintaan £500 kotitaloutta kohti, ruokapankki ei ole ilmeisesti tehokkaampi tie samaan tulokseen, vaikka sen kassikohtainen kustannus näyttää halvalta.

## Yhteys ohjelmistotekniikkaan

Useimmat asianhallintajärjestelmät on rakennettu kirjaamaan suoritteita, koska suoritteet ovat sitä, mikä tapahtuu transaktion sisällä (kassi luovutetaan, lomake lähetetään). Tulokset tapahtuvat yleensä myöhemmin, usein järjestelmän tavanomaisen keräysikkunan ulkopuolella, ja vaativat tietoisen suunnittelupäätöksen: rakenna seurantamekanismi (kyselylaukaisin, uudelleenkontaktin työnkulku, datan linkitysharjoitus) ensiluokkaisena ominaisuutena, ei vuosiraporttia varten jälkikäteen liimattuna. Alan avustus- tai asianhallintaalustoja rakentavien insinöörien tulisi käsitellä kysymystä "mikä on tulostapahtuma ja miten sen havaitsemme" vaatimuskysymyksenä, joka esitetään ennen kuin datamalli lukitaan — tulosskentän jälkiasennus on paljon vaikeampaa kuin suoritelaskurin. Ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/) ja [logiikkamalli](../logiikkamalli/) siitä, miten tuo vaatimuskeskustelu jäsennetään, ja [kustannus edunsaajaa kohti](../kustannus-edunsaajaa-kohti/) nopeammasta, karkeammasta mittarista, johon tiimit tarttuvat, kun tulosseurantaa ei ole vielä rakennettu.

## Sudenkuopat

- **Tuloksiksi puettujen suoritteiden raportointi.** "Tavoitetut ihmiset" ei ole "autetut ihmiset." Jos mittarin voi tuottaa järjestelmälokista ilman seurantakontaktia, se on lähes varmasti suorite.
- **Nimittäjän manipulointi.** Tulosväestön kaventaminen "ohjelman suorittaneisiin" pudottaa hiljaa pois keskeyttäneet — usein vaikeimmat tapaukset — ja paisuttaa näennäistä astetta. Ilmoita nimittäjäksi kaikki, jotka aloittivat, ei kaikki, jotka lopettivat.
- **Ei kontrafaktuaalia.** Kaikkien laskeminen, jotka saavuttivat tuloksen, mukaan lukien ne, jotka olisivat saavuttaneet sen joka tapauksessa, liioittelee sitä, mitä ohjelma osti. Ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/).
- **Yhteensopimattomien tulosmääritelmien vertailu.** Validoidulla kyselymoduulilla mitattu "ruokaturva" ei ole vertailukelpoinen tyytyväisyyslomakkeella itse raportoidun "ruokaturvan" kanssa; kustannus tulosta kohti -vertailulista on rehellinen vain, kun tulosmääritelmät täsmäävät.

## Lähteet

- New Philanthropy Capital (NPC), "Four Pillar Approach" hyväntekeväisyyden vaikuttavuuteen. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix ja vaikutusten mittaamisen resurssit. <https://inspiringimpact.org/>
- Trussell Trust ja Heriot-Watt University, "State of Hunger" -tutkimusohjelma. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (kustannusvaikuttavuus ensisijaisena kriteerinä hyväntekeväisyyssuosituksille). <https://www.givewell.org/how-we-work/our-criteria>
