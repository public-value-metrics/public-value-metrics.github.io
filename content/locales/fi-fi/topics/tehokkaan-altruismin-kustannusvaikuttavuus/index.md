# Tehokkaan altruismin kustannusvaikuttavuus

Tehokkaan altruismin (effective altruism, EA) kustannusvaikuttavuuspäättely asettaa hyväntekeväisyysinterventiot järjestykseen sen perusteella, kuinka paljon hyvää — useimmiten ilmaistuna pelastettuina henkinä tai saavutettuna terveytenä käytettyä dollaria kohti — ne tuottavat, ja ohjaa rahan sille interventiolle, joka ostaa eniten hyvää marginaalissa. GiveWell on alan vaikutusvaltaisin toimija: se julkaisee nimenomaisia, päivitettyjä arvioita kustannuksesta pelastettua henkeä kohti ja kustannuksesta tulosta kohti pienelle "huippuhyväntekeväisyysjärjestöjen" listalle ja suosittelee lahjoittajia antamaan sille, jolla on tällä hetkellä tilaa lisärahoitukselle parhaalla hinnalla.

## Miksi tällä on merkitystä

GiveWell esittää kustannusvaikuttavuuden julkaistun metodologiansa ensisijaisena kriteerinä: se etsii näyttöön perustuvia interventioita, arvioi niiden kustannusvaikuttavuuden yhteisessä yksikössä ja asettaa järjestykseen täysin toisiinsa liittymättömät syyt — vuodeverkot malariaa vastaan, A-vitamiinilisä, käteissiirrot, rokotuskannustemaksut — tällä yhdellä akselilla. Tämä on suora tuonti QALY/DALY-tyyliseen päättelyyn terveystaloustieteestä filantropiaan: aivan kuten terveydenhuoltojärjestelmä kysyy "kuinka monta QALY:ä puntaa kohti marginaalissa", GiveWell kysyy "kuinka monta henkeä tai elinvuotta dollaria kohti marginaalissa", ja käsittelee syitä toisiaan korvaavina, kun ne on muunnettu tuohon yhteiseen yksikköön. Ks. [kustannusvaikuttavuusanalyysi julkishallinnossa](../kustannusvaikuttavuusanalyysi-julkishallinnossa/) tämän päättelykehyksen julkisen sektorin serkusta.

Eniten siteerattu GiveWellin luku koskee Against Malaria Foundationia (AMF), joka jakaa hyönteismyrkyllä käsiteltyjä vuodeverkkoja. GiveWellin julkaisemassa työstetyssä esimerkissä (johdettu vuoden 2020 rahoitusdatasta) noin $4 500 rahoitti riittävästi verkkoja yhden kuoleman välttämiseksi, kun huomioitiin epätäydellinen verkkojen käyttö, perustason kuolleisuus ilman verkkoja ja korjaus funging-vaikutukselle — mahdollisuudelle, että AMF olisi saanut osan tuosta rahoituksesta muilta lahjoittajilta joka tapauksessa. GiveWell on yksiselitteinen siitä, että tämä luku liikkuu ajan ja maantieteen mukana malarian esiintyvyyden, verkkojen kustannusten ja rahoitusvajeiden muuttuessa, ja että hengen pelastamisen kustannuksen yleisesti odotetaan nousevan ajan myötä, kun halvimmat mahdollisuudet käytetään ensin; se on menetelmän työstetty havainnollistus, ei kiinteä hinta.

## Matematiikka

```
Kustannusvaikuttavuus = Intervention kustannus / Tuotetut hyvän yksiköt
                       (esim. $ pelastettua henkeä kohti, $ vältettyä DALY:ä kohti, $ QALY:ä kohti)

GiveWellin ketju vuodeverkko-ohjelmalle, havainnollistavasti:
  $ ostettua ja toimitettua verkkoa kohti
    ÷ todella käytettyjen verkkojen osuus
    ÷ suojatut ihmiset verkkoa kohti
    × perustason vuosittainen kuolleisuus ilman verkkoja
    × verkon käytölle kohdistettava kuolleisuuden väheneminen (RCT-näytöstä)
    × suojausvuodet verkkoa kohti
    ÷ korjaus funging-vaikutukselle (raha, joka syrjäyttää muiden lahjoittajien rahoituksen)
  = $ pelastettua henkeä kohti (netto kontrafaktuaalisista rahoitusvaikutuksista)
```

Tämä ketju on tärkeä, koska jokainen vaihe on paikka, jossa kustannusvaikuttavuusarviot yleisesti menevät pieleen — ks. sudenkuopat alla — ja koska se tekee nimenomaiseksi, ettei "kustannus pelastettua henkeä kohti" ole koskaan raaka havaittu hinta; se on mallinnettu arvio, joka on rakennettu useista erikseen epävarmoista syötteistä.

## Työstetty esimerkki

Kaksi hypoteettista interventiota, molemmat näyttöön perustuvia, kilpailevat samoista marginaalisista £100 000:sta:

- **Vuodeverkot (AMF-tyyliset)**: noin $4 500 pelastettua henkeä kohti GiveWellin julkaisemassa, vuoden 2020 datasta johdetussa työstetyssä esimerkissä, eli hyvin karkeasti 20 pelastettua henkeä £100 000:ta kohti riippuen käytetystä valuuttakurssista ja vuodesta.
- **Madonhävitysohjelma**: ei uskottavaa kuolleisuushyötyä lainkaan, mutta vahvaa näyttöä lapsuuden madonhävityksen pitkän aikavälin tulonkasvusta; GiveWell arvottaa sen tulonkasvun termein, ei pelastettuina henkinä, mikä tekee suoran vertailun vuodeverkkoihin vaikeaksi ilman yhteistä yksikköä. GiveWell käyttää nimenomaista "moral weights" -viitekehystä muuntaakseen molemmat yhdeksi sisäiseksi yksiköksi järjestykseen asettamista varten.

EA-menetelmän kuri on pakottaa tämä vertailu julkiseksi sen sijaan, että molempia rahoitettaisiin, koska molemmat "kuulostavat hyviltä". Ks. [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) vastaavasta pakottavasta funktiosta, jota Ison-Britannian yhteiskunnalliset yritykset ja paikalliset tilaajat käyttävät ja joka esittää saman kysymyksen — mikä on paras tuotto puntaa kohti — rahamääräistetyn arvon idiomissa henki/DALY-idiomin sijaan.

## Yhteys ohjelmistotekniikkaan

Lahjoittaja-alustoja, avustusten kohdennustyökaluja tai vaikuttavuuskojelautoja EA-linjaisille rahoittajille (Open Philanthropy, GiveWell itse, tehokkaan lahjoittamisen alustat kuten Giving What We Can) rakentavien insinöörien on esitettävä kustannusvaikuttavuusarviot vaihteluväleinä ilmoitetuin oletuksin, ei yksittäisinä lukuina — taustalla olevassa mallissa on useita kertovia epävarmoja syötteitä, ja sen romahduttaminen yhdeksi luvuksi kojelaudalla vääristää luottamusta, jonka GiveWell itse ilmoittaa. Versioi jokainen arvio julkaisupäivän mukaan; GiveWell tarkistaa lukujaan, joskus merkittävästi, uuden RCT-näytön tai rahoitusvajedatan saapuessa, ja alusta, joka välimuistittaa vanhan luvun, muuttuu hiljaa vääräksi.

## Sudenkuopat

- **Kustannusvaikuttavuusarvion käsitteleminen kiinteänä hintana.** Se on mallin tuotos, jossa on useita epävarmoja kertovia syötteitä (käyttöasteet, perustason kuolleisuus, funging-korjaus); ilmoita päiväys ja versio.
- **Funging-/syrjäyttämisvaikutuksen sivuuttaminen.** Sellaisen organisaation rahoittaminen, joka olisi saanut rahat joka tapauksessa toiselta lahjoittajalta, ostaa vähemmän kontrafaktuaalista hyvää kuin otsikko antaa ymmärtää — ks. [lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/) ja [syrjäyttäminen ja kohdentaminen](../syrjäyttäminen-ja-kohdentaminen/).
- **Yhteensopimattomien yksiköiden vertailu ilman muunnosta.** "Pelastetut hengen" ja "saavutettu tulo" eivät ole suoraan vertailukelpoisia ilman nimenomaista moral weights -viitekehystä; niiden esittäminen rinnakkain ikään kuin ne olisivat, on kategoriavirhe.
- **Syyalueen tunnelinäkö.** Pelkästään syyalueen sisällä järjestykseen asettaminen (esim. vain globaalin terveyden hyväntekeväisyysjärjestöt) ja voittajan kutsuminen "kustannusvaikuttavimmaksi hyväntekeväisyysjärjestöksi" liioittelee väitettä; GiveWellin syiden välinen järjestys on tarkoituksella kapea (globaali terveys ja hyvinvointi), ei universaali.

## Lähteet

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (helmikuun 2024 versio). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation -arvio. <https://www.givewell.org/charities/amf>
- Giving What We Can, kustannusvaikuttavuudesta syiden yli. <https://www.givingwhatwecan.org/>
