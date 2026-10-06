# Digitaalinen osallisuus

Digitaalinen osallisuus on kuria, jolla varmistetaan, ettei "digital by default" muutu "vain digitaaliseksi" — että halvimman kanavan ympärille suunnitellut julkiset palvelut toimivat yhä kansalaisille, jotka eivät voi tai halua käyttää sitä ilman apua. GDS loi erityisen toimitusmekanismin, "avustettu digitaalinen" (assisted digital), pakolliseksi vaatimukseksi jokaiselle valtionhallinnon digitaaliselle palvelulle, ei valinnaiseksi lisäksi.

## Miksi tällä on merkitystä

Vuoden 2012 Government Digital Strategy asetti kunnianhimon selvästi: digitaaliset palvelut tulisi rakentaa digital by default -periaatteella, mutta strategia itse tunnusti, että noin 10 % Ison-Britannian aikuisista ei pystyisi käyttämään niitä ilman apua, ja velvoitti ministeriöt tarjoamaan avustetun digitaalisen tuen — ihmisvälitteisen reitin, puhelimitse, henkilökohtaisesti tai välittäjän kautta — osana palvelua, ei myöhemmin liimattuna erillisenä varajärjestelynä. Tuo velvoite on nyt [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) kohta 5, "varmista, että kaikki voivat käyttää palvelua". Jatkuvan syrjäytymisen laajuutta seuraa Lloyds Banking Groupin vuosittainen UK Consumer Digital Index: vuoden 2024 painos havaitsi, että noin 1,6 miljoonaa ihmistä Isossa-Britanniassa on yhä offline-tilassa ja että tämä ryhmä painottuu voimakkaasti 70–79-vuotiaisiin, alle £35 000 ansaitseviin sekä eläkkeellä tai työttömänä oleviin — täsmälleen väestöön, joka todennäköisimmin on riippuvainen uudelleensuunniteltavista julkisista palveluista. Sama raportti havaitsi, että vain 48 % Ison-Britannian työvoimasta pystyi suorittamaan kaikki 20 tehtävää Essential Digital Skills -viitekehyksestä, mikä tarkoittaa, ettei syrjäytyminen ole binääristä yhteydettömyyttä vaan taitojen, itseluottamuksen ja luottamuksen jatkumo, jonka yksinkertainen "onko laajakaista" -mittari ohittaa kokonaan.

## Matematiikka

Digitaalinen osallisuus on viitekehys ja oikeudenmukaisuustarkistus yksittäisen kaavan sijaan, mutta se yhdistyy kvantitatiiviseen arvonarviointiin [jakaumapainotuksen](../jakaumapainotus/) kautta:

```
Naiivi kanavasiirtymän arvo:
  arvo = siirretty volyymi × (kustannus_vanha − kustannus_digitaalinen)     [ks. channel-shift-savings]

Osallisuudella korjattu arvo:
  arvo = (siirretty volyymi × painottamaton säästö)
       − (syrjäytyneet käyttäjät × avustetun digitaalisen tarjonnan kustannus)
       − (jakaumapainokorjaus haitasta syrjäytyneille ryhmille, jotka menettävät
          pääsyn tai kohtaavat heikentyneen palvelun laadun)

Avustettu digitaalinen ei ole epäonnistumisen jäännöskustannus — se on suunniteltu
kanava, jolla on oma [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/),
tyypillisesti paljon korkeampi transaktiota kohti kuin digitaalinen itsepalvelu,
mutta yleensä silti halvempi kuin vanha kanava, jonka se osittain korvaa.
```

## Työstetty esimerkki

**Universal Credit -tyylinen kansallinen etuuspalvelu**: 2,5 miljoonaa hakemusta/vuosi, arvioitu tarvitsevan avustettua digitaalista tukea arviolta 10 %:lle hakijoista Government Digital Strategyn suunnitteluolettamuksen mukaan.

```
Syrjäytynyt/avustetun digitaalisen kohortti = 2 500 000 × 10 % = 250 000 hakemusta/vuosi

Avustetun digitaalisen kanavan kustannus (puhelin + kasvokkainen tuki,
miehitetty käsittelemään haavoittuvuutta ja monimutkaisuutta) ≈ £9,50/hakemus
  = 250 000 × £9,50 = £2 375 000/vuosi

Digitaalinen itsepalvelu muille 90 %:lle ≈ £0,40/hakemus
  = 2 250 000 × £0,40 = £900 000/vuosi

Sekoitettu kustannus transaktiota kohti = (2 375 000 + 900 000) / 2 500 000
  = £1,31/hakemus

Suunnitelma, joka ohittaa avustetun digitaalisen saavuttaakseen matalamman otsikkokustannuksen
transaktiota kohti (esim. £0,40 sekoitettuna, sivuuttaen 250 000 syrjäytynyttä hakijaa)
ei poista tuota £2,375 miljoonan kustannusta — se muuntaa sen hakemattomiksi oikeuksiksi,
valituksiksi ja jatkossa kriisipalvelujen kysynnäksi, joka laskeutuu aivan toiselle budjetille.
```

## Yhteys ohjelmistotekniikkaan

Avustettu digitaalinen on suunniteltu kanava, mikä tarkoittaa, että sillä on rajapinnat, SLA:t ja instrumentointi kuten millä tahansa muulla: puhelinpohjainen sosiaalityöntekijän työkalu, välittäjäportaali Citizens Advicelle tai paikallisviranomaiselle tai henkilökohtainen kioski-työnkulku. Sen käsitteleminen jälkiajatuksena — puhelinnumerona pienellä präntillä sen sijaan, että kanava olisi huomioitu discoverystä lähtien — on yksittäinen yleisin tapa, jolla palvelut epäonnistuvat [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) kohdassa 5 arvioinnissa. Digitaalinen osallisuus on oikeudenmukaisuuslinssi jokaiseen muuhun tämän ryhmän aiheeseen: se rajoittaa, kuinka aggressiivisesti [kanavasiirtymän säästöt](../kanavasiirtymän-säästöt/) voidaan toteuttaa, se on rivi, joka on rehellisesti sisällytettävä aiheeseen [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/), ja se on [jakaumapainotuksen](../jakaumapainotus/) suora soveltaminen digitaalisten palvelujen kontekstiin — säästö, joka kohdistuu suhteettomasti ihmisiin, jotka ovat jo digitaalisesti ja taloudellisesti syrjäytyneitä, tulisi painottaa alaspäin, ei käsitellä yhtä arvokkaana kuin tasaisesti väestöön jakautuva säästö.

## Sudenkuopat

- **"Digital by default" luettuna "vain digitaalisena"**: puhelinlinjan tai palvelupisteen sulkeminen, kun digitaalinen käyttöönotto ylittää kynnyksen, varmistamatta, että jäljelle jäävällä kohortilla on aidosti käyttökelpoinen vaihtoehto.
- **Osallisuuden mittaaminen binäärisellä yhteydellä**: "on laajakaista" tai "omistaa älypuhelimen" on huono korvike kyvylle suorittaa tietty transaktio — Essential Digital Skills -kuilu (vain 48 % Ison-Britannian työvoimasta suorittaa kaikki 20 tehtävää, Lloyds 2024) osoittaa, että taidoilla ja itseluottamuksella on yhtä suuri merkitys kuin pääsyllä.
- **Avustetun digitaalisen kustannusten käsitteleminen pyöristysvirheenä**: sen budjetointi pienenä varautumisrivinä sen sijaan, että se olisi kunnollinen kanava omalla [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/) -luvullaan, ja sitten yllättyminen, kun se on aliresursoitu ja alimiehitetty käynnistyksessä.
- **Vain onnistuneiden digitaalisten suorittajien kyselytutkimus**: palvelun sisällä toteutettu tyytyväisyys- ja käytettävyystutkimus ohittaa ihmiset, jotka eivät koskaan päässeet niin pitkälle, mikä on täsmälleen se väestö, jonka suojelemiseksi digitaalinen osallisuustyö on olemassa.

## Lähteet

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, kohta 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
