# Kanavasiirtymän säästöt

Kanavasiirtymän säästöt ovat ennustettu kustannusvähennys, joka syntyy siirtämällä transaktiovolyymiä kalliista kanavista — puhelin, kasvokkaiset palvelupisteet, paperipostitus — halpaan digitaaliseen itsepalveluun. Se on "digital by default" -ajattelun taloudellinen moottori, ja myös liiketoimintaperustelun rivi, joka on todennäköisimmin väärin, koska oletus, jonka varassa se on — että offline-kanavat kutistuvat digitaalisen käyttöönoton noustessa — pitää paikkansa vain joskus.

## Miksi tällä on merkitystä

Laskutoimitus näyttää kiistattomalta käyttäen Digital Efficiency Reportin [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/) -lukuja: siirrä miljoona transaktiota £8,62 kasvokkaisesta käynnistä £0,15 digitaaliseen, ja säästö on yli £8 miljoonaa. Mutta säästö muuttuu uudelleenkohdennettavaksi käteiseksi vain, jos kutistuvan kanavan *kiinteä kapasiteetti* todella puretaan — puhelinkeskuksen paikat, palvelupisteen henkilöstö, puhelinsopimuksen minuutit — ja paikallishallinnon digitaaliset ohjelmat ovat toistuvasti havainneet, ettei kokonaiskontaktivolyymi laske digitaalisen käyttöönoton mukana. Paikallisviranomaisten digitaalisen muutoksen ohjelmien ja elinten kuten Socitm ja Local Government Association tutkimus on dokumentoinut toistuvan kaavan: digitaaliset kanavat houkuttelevat aidosti uutta kontaktia (kansalaiset, jotka eivät olisi soittaneet tai käyneet, tekevät niin nyt, koska se on helpompaa), ja merkittävä osa "digitaalisista" transaktioista epäonnistuu kesken ja tuottaa silti puhelun — joten puhelinvolyymi laskee paljon vähemmän kuin digitaalisen käyttöönoton prosentti antaisi ymmärtää, joskus ei lainkaan absoluuttisesti, vaikka sen *osuus* kokonaiskontaktista laskee.

## Matematiikka

```
Bruttokanavasiirtymän säästö = siirretty volyymi × (kustannus_vanha_kanava − kustannus_digitaalinen)

Netto (toteutunut) säästö = bruttosäästö
                           − helpomman kanavan luoma uusi/varjokysyntä
                           − vikakysynnän kustannus (digitaaliset epäonnistumiset,
                             jotka tuottavat silti puhelun tai palvelupistekäynnin)
                           − purkamattoman kiinteän kapasiteetin kustannus (puhelinkeskus
                             voi karsia henkilöstöä vain diskreetein yksiköin;
                             15 %:n volyymilasku harvoin sallii 15 %:n henkilöstöleikkauksen)

Toteutumiskynnys: säästöt ovat pankkikelpoisia vasta, kun volyymi laskee
vanhan kanavan seuraavan pienemmän diskreetin kapasiteettiportaan alle,
jolla se voidaan miehittää (esim. yhden täyden vuoron, yhden täyden pöydän,
yhden sopimuspohjaisen henkilöstöluokan menettäminen)
```

## Työstetty esimerkki

**Kreivikunnan sinisen kortin (blue badge) uusimispalvelu**: 60 000 uusimista/vuosi, aiemmin 100 % puhelin/paperi hintaan £6,40 transaktiota kohti. Uusi digitaalinen palvelu käynnistyy ja saavuttaa 65 %:n digitaalisen käyttöönoton vuoden kuluessa hintaan £0,30 digitaalista transaktiota kohti.

```
Naiivi (brutto) säästölaskelma:
  39 000 siirretty × (£6,40 − £0,30) = £237 900/vuosi

Mitä todella tapahtui, kunnan yhteydenottokeskuksen datan mukaan:
  Puhelinvolyymi laski 60 000/vuosi → 46 000/vuosi (−23 %, ei −65 %)
  koska: 9 000 digitaalista polkua epäonnistui ja tuotti seurantapuhelun
         (vikakysynnän vuoto), ja 4 000 ihmistä, jotka eivät aiemmin
         uusineet lainkaan, uusivat nyt löydettyään sen helpoksi verkossa
         (varjokysyntä — aito pääsyn parannus, mutta ei säästö)

  Puhelinkeskus on miehitetty 8 000 puhelun/htv -porrastuksella;
  14 000 puhelun lasku (60 000 → 46 000) vapauttaa 1,75 htv,
  käytännössä pyöristettynä alaspäin 1 htv:hen, joka todella siirretään
  muualle = £34 000/vuosi

Toteutunut säästö = £34 000/vuosi plus vältetty digitaalisen kanavan rakennus-/
  ylläpitokustannus 39 000 transaktiolla ≈ £34 000 + (39 000 × £0,30
  digitaalinen kustannus jo laskettu) — murto-osa £237 900 otsikkoluvusta,
  vaikka palvelu on yhä yksiselitteisesti parempi käyttäjille.
```

## Yhteys ohjelmistotekniikkaan

Insinööriopetus on, että kanavasiirtymän säästöt toteutuvat *operatiivisilla* päätöksillä (vuorosuunnittelu, purkaminen, sopimusten uudelleenneuvottelu), ei sillä, että ohjelmisto julkaistaan — tiimi voi täyttää jokaisen [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) kohdan ja silti tuottaa nolla nettosäästöä, jos kukaan ei poista vanhan kanavan kiinteää kapasiteettia. Vikakysynnän instrumentointi (missä digitaalisella polulla käyttäjät keskeyttävät ja mitä he tekevät seuraavaksi) on ratkaistavissa oleva suppiloanalytiikan ongelma ja yksittäinen vipuvaikutukseltaan suurin asia, jonka insinööritiimi voi tehdä säästöperustelun suojaamiseksi; se on myös suora yhteys aiheeseen [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/), jota vikakysyntä hiljaa paisuttaa. Ks. [hyötyjen toteutuminen](../hyötyjen-toteutuminen/) laajemmasta kurista tarkistaa, että liiketoimintaperustelun säästöt todella toteutuvat, ja [digitaalinen osallisuus](../digitaalinen-osallisuus/) siitä, miksi offline-kanavaa ei yleensä voi, eikä pidä, täysin lakkauttaa.

## Sudenkuopat

- **1:1-kanavakorvaavuuden olettaminen**: digitaalisen käyttöönoton mallintaminen suorana vähennyksenä puhelin-/palvelupistevolyymistä, jättäen huomiotta varjokysynnän ja vikakysynnän vuodon, jotka on dokumentoitu paikallishallinnon kanavasiirtymätutkimuksessa.
- **Bruttosäästöjen kirjaaminen ennen purkamista**: säästön laskeminen liiketoimintaperustelussa vuonna, jona käyttöönotto nousee, ei vuonna (jos koskaan), jona vanhan kanavan kapasiteetti todella leikataan.
- **Henkilöstökustannusten porrasfunktioluonteen sivuuttaminen**: 20 %:n volyymilasku harvoin muuttuu 20 %:n kustannuslaskuksi, koska puhelinkeskukset ja palvelupisteet miehitetään diskreeteissä portaissa, ei jatkuvasti.
- **Varjokysynnän käsitteleminen hukkana**: uusi kontakti aiemmin syrjäytetyiltä tai aiemmin pelästyneiltä käyttäjiltä on todellinen [julkisen arvon](../julkinen-arvo/) lisäys, ei mallinnusvirhe — se tulisi raportoida pääsytuloksena, ei vähentää kohinana.

## Lähteet

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digitaalisen muutoksen ja kanavasiirtymän resurssit. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, paikallisten julkisten palvelujen digitaalinen näkemystutkimus. <https://www.socitm.net/>
