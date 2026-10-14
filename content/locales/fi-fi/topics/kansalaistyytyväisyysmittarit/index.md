# Kansalaistyytyväisyysmittarit

Kansalaistyytyväisyysmittarit mittaavat, kuinka ihmiset arvioivat suoran kokemuksensa julkisesta palvelusta — erillään luottamuksesta instituutioihin yleisesti ja erillään siitä, saavuttiko palvelu todella hyvän tuloksen. Palvelu voi olla pidetty ja tehoton tai tehokas ja epämiellyttävä; näiden kahden välinen kuilu on itsessään diagnostista tietoa, jota toimitustiimin tulisi seurata.

## Miksi tällä on merkitystä

Tyytyväisyyttä mitataan kahdella eri tasolla, jotka sekoitetaan rutiininomaisesti. Palvelutasolla Ison-Britannian jo lakkautettu Performance Platform ja nykyinen GOV.UK-palvelukäsikirja edellyttävät palvelukohtaista tyytyväisyyskyselyä (tyypillisesti viisiportainen "erittäin tyytyväinen" – "erittäin tyytymätön" -asteikko, toteutettuna transaktiohetkellä) yhtenä neljästä pakollisesta palvelun KPI:stä — ks. [palvelustandardit ja transaktiomittarit](../palvelustandardit-ja-transaktiomittarit/). Instituutiotasolla Ison-Britannian Civil Service People Survey mittaa työntekijöiden sitoutumista ja kokemusta vuosittain jokaisessa keskushallinnon ministeriössä, ja erikseen OECD:n "Trust in Government" -ohjelma kyselee kansalaisten luottamusta kansalliseen hallitukseen jäsenmaissa, seuraten pitkän aikavälin laskun ja elpymisen kaavaa, jota kriisit muokkaavat voimakkaasti (vuoden 2008 finanssikriisi ja COVID-19-pandemia tuottivat molemmat jyrkkiä, näkyviä liikkeitä OECD:n luottamusluvuissa). Syy, miksi kansalaisille suunnattuja palveluja rakentavien insinöörien on pidettävä tyytyväisyys ja tulos erillään, on palvelumuotoilun tunnettu epäonnistumistapa: kauniisti suunniteltu, helppokäyttöinen digitaalinen etuushakemuslomake voi saada erittäin korkean tyytyväisyyden, vaikka taustalla oleva politiikka — kelpoisuussäännöt, käsittelyjonot, myönnetyt määrät — jättää hakijan paremmassa asemassa vain näennäisesti. Tyytyväisyys mittaa käyttöliittymää; se ei mittaa sen takana toimitettua arvoa.

## Matematiikka

```
Nettotyytyväisyys = % tyytyväisiä (tai erittäin tyytyväisiä) − % tyytymättömiä (tai erittäin tyytymättömiä)
                    (neutraalit/ei mielipidettä -vastaukset jätetään pois molemmista termeistä, mutta
                    lasketaan mukaan vastausperustaan kunkin prosentin laskemiseksi)

Tyytyväisyys–tulos-kuilu = tyytyväisyyspisteet − tuloksen saavuttamispisteet
                    (molemmat normalisoitu 0–100; suuri positiivinen kuilu viittaa
                    palveluun, joka "tuntuu hyvältä" mutta alisuoriutuu sisällössä)

Luottamusindeksi (OECD-tyylinen) = % kyselyn vastaajista, jotka vastaavat "kyllä" kysymykseen
                    "luotatko [kansalliseen hallitukseen]?"
                    seurattuna aikasarjana, tyypillisesti eriteltynä
                    iän, tulojen ja koulutuksen mukaan
```

## Työstetty esimerkki

**Paikallisviranomaisen kunnallisveron sähköinen laskutuspalvelu**: onnistuneen transaktion hetkellä toteutettu tyytyväisyyskysely näyttää 2 400 vastaajaa: 1 650 tyytyväistä/erittäin tyytyväistä, 250 tyytymätöntä/erittäin tyytymätöntä, 500 neutraalia.

```
Nettotyytyväisyys = (1 650/2 400 × 100) − (250/2 400 × 100)
                  = 68,75 % − 10,42 %
                  = +58,3 nettotyytyväisyys
```

Tämä näyttää vahvalta erikseen tarkasteltuna. Mutta kysely näytetään vain käyttäjille, jotka *onnistuneesti* suorittavat transaktion — tunnettu mittausharha (ks. sudenkuopat alla). Sen yhdistäminen suoritusasteen mittariin aiheesta [palvelustandardit ja transaktiomittarit](../palvelustandardit-ja-transaktiomittarit/) osoittaa, että suoritusaste on vain 71 %, mikä tarkoittaa:

```
Todellista väestön tyytyväisyyttä ei mitata 29 %:lle, jotka hylkäsivät polun —
uskottavasti tyytymättömin kohortti, koska hylkääminen on itsessään vahva negatiivinen
signaali, jota kysely ei koskaan tavoita.
```

**Kansallisen tason havainnollistus (OECD-tyylisen luottamussarjan rakenne)**: kansallisen hallituksen luottamus raportoitu 42 %:ksi vuonna 1, laskien 34 %:iin vuonna 2 (kriisivuosi) ja elpyen 39 %:iin vuonna 3 — kehitys, joka on tyypillinen sokin ja osittaisen elpymisen kaava, jonka OECD dokumentoi jäsenmaissa suurten kriisien jälkeen.

## Yhteys ohjelmistotekniikkaan

Instrumentoi tyytyväisyyskyselyt jokaiseen merkitykselliseen käyttäjäpolun poistumispisteeseen, ei vain onnistuneeseen suoritukseen — tämän alan yksittäinen yleisin insinöörivirhe, joka muuttaa tyytyväisyysmittarin hiljaa selviytymisharhan vääristämäksi turhamaisuusmittariksi. Mahdollisuuksien mukaan yhdistä tyytyväisyyspisteet suoritus- tai tulosmittariin samalla kojelaudalla, jotta tiimi ei voi juhlia nousevaa tyytyväisyyttä suoritusasteen hiljaa laskiessa (ks. [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/) ja [digitaalinen osallisuus](../digitaalinen-osallisuus/) siitä, ketkä jäävät pois digitaalisesta tyytyväisyysotannasta alun alkaenkin — ei-digitaaliset ja avustetusti digitaaliset käyttäjät ovat järjestelmällisesti aliedustettuina palvelun sisäisissä kyselyissä). Tyytyväisyys- ja luottamusdata syöttää myös suoraan [Mooren strategisen kolmion](../julkinen-arvo/) legitimiteettikylkeä ja kuuluu [julkisen arvon tuloskortin](../julkisen-arvon-tuloskortti/) "asiakas"- ja "legitimiteetti"-näkökulmiin — ks. [luottamus- ja legitimiteettimittarit](../luottamus-ja-legitimiteettimittarit/) tämän palvelutason mittarin instituutiotason vastineesta.

## Sudenkuopat

- **Selviytymisharha suorituspisteen kyselyissä**: käyttäjät, jotka hylkäävät polun, eivät koskaan näe kyselyä, joten korkea palvelun sisäinen tyytyväisyyspistemäärä voi esiintyä rinnakkain matalan suoritusasteen ja suuren näkymättömän tyytymättömien keskeyttäneiden joukon kanssa.
- **Tyytyväisyyden käsitteleminen tuloksen korvikkeena**: hyvin suunniteltu käyttöliittymä huonosti suunnitellulle politiikalle saa hyvät tyytyväisyyspisteet ja huonot tulospisteet — raportoi aina molemmat, älä koskaan toista toisen sijasta.
- **Pienet, edustamattomat otokset raportoituna valetarkkuudella**: muutaman sadan itsevalikoituneen vastaajan tyytyväisyyspistemäärä raportoituna yhden desimaalin tarkkuudella antaa ymmärtää varmuutta, jota otoskoko ei voi tukea.
- **Demografisen erittelyn sivuuttaminen**: kansalliset luottamus- ja tyytyväisyysluvut, joita ei eritellä iän, tulojen, vammaisuuden tai digitaalisen pääsyn mukaan, voivat peittää jyrkästi poikkeavia kokemuksia ryhmien välillä — kaava, jonka OECD:n omat Trust in Government -julkaisut nimenomaisesti erittelevät.

## Lähteet

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" -tulokset.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
