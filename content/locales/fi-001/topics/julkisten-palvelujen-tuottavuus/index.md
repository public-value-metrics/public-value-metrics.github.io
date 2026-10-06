# Julkisten palvelujen tuottavuus

Julkisten palvelujen tuottavuus mittaa, kuinka tehokkaasti julkiset menot muuntavat panokset (henkilöstö, pääoma, tavarat ja palvelut) laatukorjatuiksi suoritteiksi palveluissa — terveydenhuolto, koulutus, poliisitoimi, sosiaalihuolto — joilla ei ole markkinahintaa eikä siksi tulolukua, johon kustannukset voisi jakaa. Ison-Britannian Office for National Statistics on julkaissut tätä sarjaa 2000-luvun puolivälistä lähtien, ja se on yhä menetelmällisesti kehittynein kansallinen yritys vastata kysymykseen "paraneeko vai huononeeko valtio rahan muuntamisessa julkisiksi palveluiksi?"

## Miksi tällä on merkitystä

Markkinoilla tuottavuus on (tuotoksen arvo) / (panoskustannus), ja tuotoksen arvo on havaittavissa, koska joku maksaa siitä. Lonkkaproteesileikkauksella, koulupaikalla ja poliisipartiolla ei ole myyntihintaa, joten naiivisti voi mitata vain *panoksia* (mitä käytettiin) — mikä houkuttelee kommentaattoreita pitämään kasvavia julkisia menoja automaattisesti huonoina, koska enemmän panosta ja muuttumaton otsikkotoiminta näyttävät laskevalta tuottavuudelta. ONS:n menetelmä, joka on esitetty sen julkisten palvelujen tuottavuuden "Sources and Methods" -julkaisuissa, ratkaisee tämän rakentamalla *suoriteindeksin* toimintavolyymeistä (tehdyt leikkaukset, opetetut oppilaat, tutkitut rikokset) ja sitten *laatukorjaamalla* sen — terveydenhuollossa sisällyttämällä eloonjäämisluvut ja odotusajat; koulutuksessa sisällyttämällä oppimistulokset; poliisitoimessa sisällyttämällä tuloksia kuten tapausten ratkaisu — jotta palvelu, joka tekee saman määrän leikkauksia mutta saavuttaa paremmat eloonjäämisluvut, rekisteröityy tuottavampana, ei vain kalliimpana. ONS:n julkaisuissa toistuva otsikkohavainto on alalle karu: Ison-Britannian julkisten palvelujen tuottavuus laski jyrkästi COVID-19-pandemian aikana, eikä se ONS:n omien 2020-luvun puolivälin julkaisujen mukaan ollut vielä palautunut vuoden 2019 tasolle useilla osa-aloilla, terveydenhuolto mukaan lukien, vaikka menot nousivat — kuilu, joka tekee "enemmän rahoitusta" ja "enemmän tuottavuutta" kahdeksi täysin erilliseksi kysymykseksi.

## Matematiikka

```
Suoriteindeksi (volyymi) = Σ (toiminta_i × suhteellinen yksikkökustannuspaino_i), perusvuosipainotettu
                          kaikkien palvelutoimintojen yli (esim. lonkkaleikkaukset, kaihileikkaukset,
                          yleislääkärin vastaanotot), analoginen Laspeyres/Paasche-volyymi-indeksille

Laatukorjaus            = suoriteindeksi × laatukorjauskerroin
                          (esim. eloonjäämislukujen, odotusaikojen, oppimistulosten tai uusintarikollisuuden
                          muutoksen sisällyttäminen kertoimena raakavolyymiin)

Panosindeksi            = Σ (työtunnit × työkustannuspaino) + (tavarat/palvelut, deflatoitu)
                          + (pääoman kuluminen)

Kokonaistuottavuuden kasvu = laatukorjatun suoriteindeksin %-muutos
                             − panosindeksin %-muutos
```

## Työstetty esimerkki

**Havainnollistava NHS:n akuuttisektorin tuottavuuslaskelma** (rakenne noudattaa ONS:n menetelmää):

```
Vuosi 1: suoritevolyymi-indeksi = 100,0 (perusvuosi), panosindeksi = 100,0
         → tuottavuusindeksi = 100,0

Vuosi 2: toimintavolyymi kasvaa 3,0 % (enemmän leikkauksia, enemmän vastaanottoja)
         mutta keskimääräinen odotusaika huononee, soveltaen laatukorjausalennusta −1,0 %
         Laatukorjattu suoriteindeksi = 100 × 1,030 × 0,990 = 101,97

         Panokset kasvavat: henkilöstömäärät +4,0 %, muut kustannukset (deflatoitu) +1,5 %,
         painotettu panosindeksi = 100 × 1,032 = 103,2

Tuottavuuden kasvu = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                   = 1,97 % − 3,2 % = −1,23 prosenttiyksikköä

Tulkinta: toiminta kasvoi, mutta panokset kasvoivat nopeammin ja laatu heikkeni
hieman, joten tuottavuus — suorite panosyksikköä kohti — laski vaikka
"enemmän hoitoa toimitettiin."
```

Tämä on täsmälleen se kaava, jonka ONS:n julkaisut ovat toistuvasti raportoineet NHS:n osista pandemian jälkeen: nouseva meno ja nouseva raakatoiminta rinnakkain laskevan mitatun tuottavuuden kanssa, kun sekä laatukorjaus että panosten kasvu on otettu huomioon.

## Yhteys ohjelmistotekniikkaan

Julkisten palvelujen tuottavuus on insinöörituottavuuskeskustelujen väestötason vastine (toimitetut tarinapisteet vs. [DORA-mittarit](../dora-mittarit-julkiselle-arvolle/) vs. [virtausmittarit](../virtausmittarit-valtionhallinnon-toimituksessa/)): raakaläpimeno ilman laatukorjausta on sairaalassa täsmälleen yhtä harhaanjohtavaa kuin "toimitetut koodirivit" ohjelmistotiimissä. Ministeriöille suorituskykydataputkia rakentavien tiimien tulisi käsitellä laatukorjausta ensiluokkaisena, versioituna muunnosvaiheena, ei alaviitteenä — koska ONS:n oma uskottavuus nojaa siihen, että korjaus on läpinäkyvä, toistettava ja tarkistettu paremman laatudatan saapuessa (ONS tarkistaa aiempien vuosien tuottavuusarvioita, kun taustalla oleva laatudata — esim. eloonjäämisluvut — viimeistellään, joten mikä tahansa näitä tilastoja kuluttava alavirran järjestelmä on osattava käsitellä takautuvat tarkistukset, ei vain lisätä uusia jaksoja). Se leikkaa myös suoraan aiheita [omistamisen kokonaiskustannus](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/) ja [tekoälyn tuottavuus julkisella sektorilla](../tekoälyn-tuottavuus-julkisella-sektorilla/): järjestelmä, joka lisää raakatoiminnan volyymiä parantamatta tai ylläpitämättä laatua, ei ONS:n oman määritelmän mukaan ole tuottavuusparannus.

## Sudenkuopat

- **Panosten kasvun käsitteleminen tuottavuuden kasvuna**: enemmän henkilöstöä rahoittava suurempi meno tuottaa enemmän *toimintaa*, ei enemmän *tuottavuutta*, ellei suorite panosyksikköä kohti myös nouse — nämä sekoitetaan rutiininomaisesti poliittisessa kommentoinnissa.
- **Laatukorjauksen täysi sivuuttaminen**: pelkästä raakatoimintamäärästä rakennettu suoriteindeksi näyttää "tuottavuushyötyjä" siitä, että tehdään enemmän jotain arvoltaan tai laadultaan alhaisempaa; ONS:n laatukorjaus on olemassa nimenomaan tämän havaitsemiseksi.
- **Tuottavuusindeksien vertailu osa-alojen välillä ilman menetelmäversioiden täsmäämistä**: terveydenhuollon, koulutuksen ja poliisitoimen tuottavuus on rakennettu eri toiminta- ja laatudatalähteistä eri tarkistussykleillä — naiivi sektorien välinen vertailu vertaa yhteensopimattomia instrumentteja.
- **Yhden vuoden tuottavuuslaskun lukeminen pysyvänä trendinä**: pandemia-ajan ja sen jälkeiset tuottavuusluvut ovat osoittaneet merkittävää vuosivaihtelua, kun laatudata (esim. jonotuslistat, elektiivisen hoidon elpyminen) itsessään on muuttunut; ONS varoittaa johdonmukaisesti yksittäisten vuosien liikkeiden yliampuvasta tulkinnasta.

## Lähteet

- Office for National Statistics, "Public Service Productivity" -sarja.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
