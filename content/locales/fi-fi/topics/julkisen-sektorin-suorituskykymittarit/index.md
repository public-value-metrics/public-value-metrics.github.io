# Julkisen sektorin suorituskykymittarit (KPI)

Keskeinen suorituskykymittari (KPI, key performance indicator) on valittu, seurattu mitta, joka edustaa sitä, hoitaako julkinen palvelu tehtävänsä hyvin. Hallinnossa KPI:n valinta ei koskaan ole neutraali: koska KPI:t kytkeytyvät budjetteihin, vertailulistoihin ja urakehitykseen, yhden valitseminen muokkaa kaikkien sen alavirrassa olevien käyttäytymistä, usein enemmän kuin palvelun luonut politiikka.

## Miksi tällä on merkitystä

Charles Goodhartin vuoden 1975 havainto rahapolitiikasta — jonka Marilyn Strathern myöhemmin popularisoi muodossa "kun mittarista tulee tavoite, se lakkaa olemasta hyvä mittari" — on julkisen sektorin suorituskyvyn johtamisen tärkein yksittäinen varoitusmerkintä. Järjestelmän *kuvaamiseksi* valittu KPI alkaa *vääristää* kyseistä järjestelmää heti, kun resursointi, palkka tai poliittinen selviytyminen sidotaan siihen. Kanoninen havainnollistus on NHS:n ambulanssien vasteajat: kun kahdeksan minuutin Category A -vastetavoitteesta tuli sitova, joidenkin trustien osoitettiin "pinonneen" ambulansseja aivan vasteaikakellon ulkopuolelle tai luokitelleen puheluita uudelleen saavuttaakseen luvun muuttamatta potilastuloksia. Ison-Britannian National Audit Officen ohjeistus suorituskykyindikaattoreiden valinnasta ja käytöstä — esitetty sen value-for-money-raporteissa sekä "Performance Measurement by Regulators" ja "Choosing the Right FABRIC" -viitekehyksissä (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — on olemassa juuri siksi, että ministeriöt valitsivat toistuvasti indikaattoreita, jotka olivat helppoja raportoida eivätkä sellaisia, joita oli vaikea manipuloida. Ohjelmistoinsinööri, joka toimittaa kojelaudan, jota vastaan ministeri tai johtaja arvioidaan, suunnittelee — tarkoittipa hän sitä tai ei — julkisen laitoksen kannustinrakennetta.

## Matematiikka

KPI-suunnittelu on viitekehysluonteinen aihe, mutta ehdokas-KPI:n *arviointi* on toistettava tarkistuslista, ei kaava:

```
Pisteytä jokainen ehdokas-KPI seuraavia vastaan:
  Fit for purpose  — mittaako se tulosta vai useamman askeleen päässä olevaa korviketta?
  Appropriate      — kuuluuko se ihmisille, jotka voivat todella vaikuttaa siihen?
  Balanced         — onko sille pari vastamittari, joka paljastaa manipuloinnin?
  Robust           — kestääkö se tarkastuksen vai onko se itseraportoitu ja todentamaton?
  Integrated       — sopiiko se laajempaan joukkoon vai työntääkö se toista KPI:tä vastaan?
  Cost-effective   — maksaako sen kerääminen enemmän kuin päätös, jota se tukee?

Ennakoivat vs. jälkikäteen vahvistavat:
  Ennakoiva indikaattori      → ennustaa tulevaa tulosta, mutta usein manipuloitavissa
                                 (esim. puhelut vastattu <60 s)
  Jälkikäteen vahvistava ind. → vahvistaa tuloksen tapahtuneen, mutta tulee liian myöhään
                                 ohjaamiseen (esim. vuosittainen tyytyväisyyskysely)
  Puolustettava KPI-joukko yhdistää vähintään yhden kumpaakin tavoitetta kohti.
```

## Työstetty esimerkki

**Ambulanssitrusti**: trusti raportoi Category A (henkeä uhkaava) -vasteaika-KPI:n "75 % puheluista vastattu 8 minuutin sisällä". Yhdellä neljänneksellä Category A -puheluita tulee 6 000; 4 500 täyttää 8 minuutin rajan, mikä antaa 75,0 % — näennäisesti tavoitteessa.

```
Otsikko-KPI = 4 500 / 6 000 × 100 = 75,0 %  (täyttää 75 %:n kynnyksen)
```

Mutta Goodhart-auditointi lisää vastamittarin: hitaimman 10 %:n puheluiden keskimääräinen vasteaika.

```
Hitaimman desiilin keskimääräinen vaste = 34 minuuttia (ylös 19 minuutista kaksi vuotta aiemmin)
```

Trusti saavuttaa tavoitteen, kun häntä — puhelut, jotka ovat todennäköisimmin aidosti henkeä uhkaavia, kun triage on epätäydellinen — on huonontunut paljon, koska miehistöjä priorisoidaan kohti puheluita lähellä 8 minuutin kalliota eikä kliinisen kiireellisyyden mukaan. Yksittäinen KPI kertoi väärän tarinan; paritettu KPI kertoi oikean.

## Yhteys ohjelmistotekniikkaan

Valtionhallinnolle suorituskykykojelautoja rakentavat insinöörit suunnittelevat toiminnallisesti organisaation kannustin-API:a. Käytännön seuraukset: instrumentoi *nimittäjä* yhtä tarkasti kuin osoittaja (paljaana prosenttina raportoitu KPI kutsuu nimittäjän manipulointia — ks. [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/) saman ansan osalta digitaalisissa palveluissa); rakenna vastamittarit samaan kojelautaan eikä erilliseen raporttiin, jota kukaan ei lue, jotta manipulointi näkyy päätöksentekohetkellä; ja versioi KPI-määritelmä, koska hiljainen uudelleenmäärittely (sen muuttaminen, mikä lasketaan "puheluksi", "tapaukseksi" tai "suoritukseksi") vastaa toiminnallisesti tavoitteen muuttamista ilmoittamatta siitä. [Julkisen arvon tuloskortti](../julkisen-arvon-tuloskortti/) on yksi jäsennelty tapa estää yksittäistä KPI:tä lukemasta erillisenä, ja
[tuloksiin perustuva vastuullisuus](../tuloksiin-perustuva-vastuullisuus/) on kurinalaisuutta valita väestötason KPI:t, joita yksi tiimi ei voi yksipuolisesti vääristää.

## Sudenkuopat

- **Helposti kerättävän mittarin valitseminen merkityksellisen sijaan**: puheluun vastaamisen aika on triviaali kirjata; ratkaisiko puhelu kansalaisen ongelman, ei ole — mutta vain jälkimmäinen on tulos. Vastusta oletusta käyttää sitä, mitä järjestelmä jo tuottaa.
- **Ei vastamittaria**: mikä tahansa rahaan tai maineeseen sidottu KPI tulee olemaan manipuloitu marginaalissa; toimita se parillisen mittarin kanssa, joka paljastaa todennäköisen manipulointivektorin, ennen julkaisua.
- **Mittarin uudelleenmäärittely ilman muutoslokia**: "vastaanotettujen puheluiden" vaihtaminen "vastattuihin puheluihin" trendin imartelemiseksi tuhoaa aikasarjan uskottavuuden heti kun se huomataan — julkaise aina määritelmien muutoslogi lukujen rinnalla.
- **Toiminnan sekoittaminen tulokseen**: suoritettujen tarkastusten laskeminen on suorite; vaatimustenmukaisuuteen saatettujen tilojen laskeminen on lähempänä tulosta (ks.
  [tulokset vs. suoritteet](../tulokset-vs-suoritteet/)).

## Lähteet

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (Goodhartin lain yleisesti siteerattu muotoilu).
- National Audit Office, tutkimukset NHS:n ambulanssipalvelun suorituskykyraportoinnista.
  <https://www.nao.org.uk/>
