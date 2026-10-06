# Julkinen arvo

Julkinen arvo on se arvo, jonka julkishallinnon tai yhteiskunnallisen sektorin organisaatio luo kansalaisille yhteisesti — ei pelkästään sen tuottamat suoritteet tai käyttämät rahat, vaan se, onko yhteiskunta paremmassa asemassa siksi, että organisaatio on olemassa ja toimi niin kuin toimi. Mark Mooren vuoden 1995 "strateginen kolmio" on vakiintunut koetinkivi: julkinen aloite on perusteltu vain, kun se on *legitiimi ja tuettu*, *sisällöllisesti arvokas* ja *toiminnallisesti toteutettavissa*, ja kaikki kolme täyttyvät yhtä aikaa.

## Miksi tällä on merkitystä

Yksityisen sektorin arvo on suhteellisen helppo hinnoitella: tuotot miinus kustannukset, ja tuomarina toimivat asiakkaat, jotka voivat jättää ostamatta. Julkisella arvolla ei ole vastaavaa markkinasignaalia. Vankilalaitos, veroviranomainen ja lastensuojelutiimi tuottavat kaikki asioita, joiden ostamisesta kansalaiset eivät voi yksinkertaisesti kieltäytyä, ja "asiakas" (veronmaksaja, rikoksentekijä, lapsi) ei useinkaan ole sama henkilö kuin poliittinen päämies, joka hyväksyy talousarvion. Mooren teos *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) tarjoaa puuttuvan kurinalaisuuden: johtajan pitäisi pystyä kertomaan (1) mitä julkista arvoa hänen aloitteensa luo, (2) mistä hänen legitimiteettinsä ja rahoituksensa tämän tavoittelemiseen tulevat — ministeri, valtuusto, toimeksianto, avustus — ja (3) pystyykö hänen organisaationsa todella toteuttamaan sen käytettävissä olevilla ihmisillä, teknologialla ja prosesseilla. Ohjelma, joka pärjää hyvin vain kolmion yhdellä tai kahdella kyljellä, ei ole vielä perusteltu, olivatpa aikeet kuinka hyvät tahansa.

Tällä on käytännön merkitystä, koska useimmat julkisen sektorin ohjelmistohankkeiden epäonnistumiset eivät ole teknologisia epäonnistumisia. Järjestelmä voi olla teknisesti erinomainen ja toiminnallisesti toteutettavissa ja silti epäonnistua, koska kukaan legitimoivassa toimintaympäristössä — ministerit, valvontaelimet, suuri yleisö — ei oikeasti halunnut sitä, mitä se optimoi. Universal Credit -digitaalipalvelu ja NHS National Programme for IT mainitaan molemmat brittiläisessä julkishallinnon kirjallisuudessa tapauksina, joissa kolmion toiminnallinen ja legitimiteettikylki olivat epätahdissa tehtäväkyljen kanssa.

## Matematiikka

Julkinen arvo on viitekehys, ei kaava, mutta se jäsentää muuten epämääräiset investointiperustelut kolmeksi testattavaksi kysymykseksi:

```
Strategisen kolmion testi — jatka vain, jos kaikki kolme täyttyvät:

1. Legitimiteetti ja tuki: Kuka on valtuuttanut tämän, ja tukeeko valtuuttava
   ympäristö (lainsäätäjä, ministeri, valtuusto, hallitus, yleinen mielipide)
   sitä edelleen resursseja sidottaessa?

2. Julkinen arvo: Mitä täsmällistä, kuvattavissa olevaa hyvää tämä tuottaa
   kansalaisille tai yhteiskunnalle — turvallisuutta, terveyttä, mahdollisuuksia,
   luottamusta, oikeudenmukaisuutta — ja kenelle?

3. Toiminnallinen kyvykkyys: Pystyykö organisaatio toimittamaan sen nykyisellä
   henkilöstöllä, teknologialla, kumppaneilla ja oikeudellisella toimivallalla
   — tai uskottavalla suunnitelmalla niiden hankkimiseksi?
```

Heikko aloite epäonnistuu tyypillisesti vähintään yhdellä kyljellä: teknisesti toteutettavissa mutta ilman toimeksiantoa (tietojenjakopilotti, jota kukaan ei hyväksynyt); suosittu mutta toimittamaton (luvattu digipalvelu ilman insinöörikapasiteettia); tai valtuutettu ja toteutettavissa mutta arvoton (kojelauta, jota kukaan ei käytä).

## Työstetty esimerkki

**Paikallisviranomainen**: kunnan digitiimi ehdottaa tekoälyyn perustuvaa seulontatyökalua asumistukihakemuksille.

- *Legitimiteetti*: kunnanhallitus on hyväksynyt digitaalisen ensisijaisuuden strategian, mutta sosiaaliturvasta vastaavat luottamushenkilöt eivät ole erikseen hyväksyneet automatisoitua päätöksentekoa — aukko, ei vihreää valoa.
- *Julkinen arvo*: nopeampi käsittely (väitetty hyöty: 10 päivästä 2 päivään) on todellista arvoa vain, jos hakijoita ei evätä virheellisesti; arvoväitteen on sisällettävä tarkkuus, ei pelkkää nopeutta.
- *Toiminnallinen kyvykkyys*: kunnalla on yksi datatieteilijä eikä mallin seurantaprosessia, joten väitettyä 2 päivän läpimenoaikaa ei voida tällä hetkellä toimittaa ilmoitetulla virhetasolla.

Kaksi kolmesta kyljestä pettää. Mooren viitekehys sanoo: älä jatka sellaisenaan — hanki ensin nimenomainen valtuutus automatisoiduille päätöksille ja rakenna seurantakapasiteettia, tai liiketoimintaperustelussa väitetty "julkinen arvo" on fiktiota.

**Valtionhallinto**: veroviranomaisen verkkoilmoituspalvelulla on vahva legitimiteetti (lakisääteinen toimeksianto) ja vahva toiminnallinen kyvykkyys (olemassa oleva tiimi toimittaa luotettavasti), mutta heikko julkinen arvo, jos käyttö jää vähäiseksi, koska digitaalisesti syrjäytyneet — ks. [digitaalinen osallisuus](../digitaalinen-osallisuus/) — ohjataan kanavaan, jota he eivät voi käyttää. Kolmio paljastaa sen, minkä pelkästään toimitusta mittaava kojelauta kätkisi.

## Yhteys ohjelmistotekniikkaan

Julkinen arvo on sateenvarjokäsite, jonka alle koko tämä tietovarasto asettuu: [rahalle vastine](../rahalle-vastine/) antaa taloudellisuuden/tehokkuuden/vaikuttavuuden testin sille, käytettiinkö resursseja hyvin; [vaihtoehtoiskustannus julkisissa menoissa](../vaihtoehtoiskustannus-julkisissa-menoissa/) hinnoittelee, mitä muuta rahalla olisi voinut tehdä; ja [lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/), [syrjäyttäminen ja kohdentaminen](../syrjäyttäminen-ja-kohdentaminen/) ja [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/) yhdessä testaavat, onko väitetty arvo todellista eikä pelkästään oletettua. Insinööreille strateginen kolmio on hyödyllinen ennakkoanalyysi (pre-mortem) mihin tahansa julkisen sektorin tuotepäätökseen:

- Ennen ominaisuuden rajaamista kysy, kuka sen valtuutti ja onko valtuutus yhä voimassa — ministerille rakennettu ominaisuus, joka on sittemmin vaihtanut tehtävää, on voinut menettää legitimiteettikylkensä hiljaa.
- Käsittele "voimmeko rakentaa sen" ja "pitäisikö meidän rakentaa se" aidosti erillisinä kysymyksinä; insinöörikapasiteetti vastaa vain kolmion kolmanteen kylkeen.
- Julkisten palvelujen tuotevaatimusdokumenttien tulisi esittää julkisen arvon väite nimenomaisesti, ei pelkkää käyttäjätarinaa, koska käyttäjäarvo ja julkinen arvo eivät aina ole sama asia (ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/)).

## Sudenkuopat

- **Toiminnallisen kyvykkyyden pitäminen riittävänä perusteluna.** "Voimme rakentaa sen" vastaa vain yhteen kolmion kylkeen; vahvan toimituskyvyn tiimit toimittavat rutiininomaisesti asioita, joita kukaan ei valtuuttanut ja jotka eivät luo mitään kuvattavissa olevaa yhteistä hyvää.
- **Legitimiteetin sekoittaminen laillisuuteen.** Ohjelma voi olla laillinen ja silti vailla poliittista ja julkista tukea, jota tarvitaan vaikean toteutusvaiheen yli; oikeudellinen kate ei ole toimeksianto.
- **Oletus, että julkinen arvo on se, mitä tilaava ministeriö sanoo sen olevan.** Mooren malli edellyttää, että arvoväite on testattavissa suhteessa kansalaisten todellisiin etuihin, ei pelkästään rahoittajan väittämä — muuten viitekehys rapautuu itsetodistukseksi.

## Lähteet

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (toim.). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
