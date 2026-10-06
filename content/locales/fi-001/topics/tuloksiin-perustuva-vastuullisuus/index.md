# Tuloksiin perustuva vastuullisuus (OBA)

Tuloksiin perustuva vastuullisuus (Outcomes-Based Accountability), jota kutsutaan myös tulosvastuullisuudeksi (Results-Based Accountability, RBA), on Mark Friedmanin viitekehys kahden kysymyksen erottamiseksi toisistaan, jotka julkisen sektorin raportointi tapaa sekoittaa: "voiko väestö hyvin?" (väestövastuullisuus) ja "menestyykö tämä tietty ohjelma?" (suorituskykyvastuullisuus). Näiden sekoittaminen on Friedmanin mukaan yksittäinen yleisin syy siihen, että hyvin johdettuja ohjelmia syytetään väestötrendeistä, joita niillä ei ollut valtaa muuttaa.

## Miksi tällä on merkitystä

Friedman esitti viitekehyksen teoksessa *Trying Hard Is Not Good Enough* (2005), väittäen, että useimmat julkiset raportit joko hukuttavat päätöksentekijät väestötason tilastoihin, joita mikään yksittäinen virasto ei hallitse (teiniraskauksien määrä, työttömyysaste, elinajanodote), tai hukuttavat heidät ohjelmatason toimintamääriin (asiakkaita käsitelty, ohjauksia tehty), jotka eivät kerro mitään siitä, parani kenenkään elämä. RBA:n panos on pieni, kurinalainen sanasto, joka pitää nämä kaksi erillään: väestötulokset (koko väestön hyvinvoinnin edellytykset, kuten "lapset syntyvät terveinä") eivät kuulu millekään yksittäiselle virastolle ja vaativat monien kumppaneiden liikkumista yhdessä; suorituskykymittarit (kuinka hyvin tietty ohjelma palvelee tiettyjä asiakkaitaan) kuuluvat yhdelle virastolle, ja niitä tulisi arvioida vain sen mukaan, mihin kyseinen virasto voi todella vaikuttaa. Friedmanin "kolme suorituskykykysymystä" — kuinka paljon teimme, kuinka hyvin sen teimme ja onko kukaan paremmassa asemassa? — on nyt upotettu Yhdysvaltain osavaltioiden ja piirikuntien ihmispalvelusopimuksiin ja, RBA:han sovitetun konsultti- ja työkalupakki Clear Impactin kautta, laajasti käytössä Ison-Britannian ja Kansainyhteisön paikallishallinnon tilaamisessa. Käytännön panokset ovat sopimuksellisia: asuntoohjelmalta ei pitäisi leikata rahoitusta, koska kaupungin asunnottomuusaste nousi makrotaloudellisista syistä sen ulottumattomissa, mutta sen rahoitus tulisi ehdottomasti leikata, jos sen omia asiakkaita ei asuteta.

## Matematiikka

```
Väestövastuullisuus (yhteisön, alueen tai kansakunnan jakama "iso kuva"):
  Tulos        — hyvinvoinnin edellytys (esim. "asukkaat ovat taloudellisesti turvassa")
  Indikaattori — tämän edellytyksen mitta (esim. työttömyysaste, kotitalouksien mediaanitulo)
  → mikään yksittäinen ohjelma ei omista indikaattoria; liike vaatii monia vaikuttajia

Suorituskykyvastuullisuus (mistä yksi ohjelma on vastuussa):
  Kuinka paljon teimme?     — toimintavolyymi (palvellut asiakkaat, toimitetut yksiköt)
  Kuinka hyvin sen teimme?  — laatu/tehokkuus (ohjelman suorittaneiden %, kustannus asiakasta kohti)
  Onko kukaan paremmassa asemassa? — merkitsevä tulos (työssä olevien % 6 kuukautta
                              ohjelman jälkeen, ennen/jälkeen tai vertailuryhmää vastaan)

Ohjelmaa arvioidaan kolmannen suorituskykykysymyksen perusteella, ei koskaan suoraan
väestöindikaattorin perusteella, ellei sen mittakaava ja suunnittelu voisi uskottavasti
liikuttaa sitä yksin.
```

## Työstetty esimerkki

**Kaupungin rahoittama työllisyystukiohjelma**, 500 osallistujaa/vuosi, paikallisviranomaisen tilaama RBA-tyylisellä suorituskykykehyksellä:

```
Väestöindikaattori (konteksti, ei ohjelman tuloskortti):
  Kaupungin työttömyysaste: 6,2 % (ylös 5,8 %:sta edellisenä vuonna, ajurina tehtaan
  sulkeminen ohjelman hallinnan ulkopuolella)

Suorituskykymittarit (ohjelman todellinen vastuu):
  Kuinka paljon:   500 osallistujaa ilmoittautunut (tavoite 480) — saavutettu
  Kuinka hyvin:    78 % suoritusaste; kustannus suorittajaa kohti = £340 000 / 390 suorittajaa ≈ £872
  Paremmassa asemassa: 390 suorittajasta 260 pysyvässä työssä 6 kuukauden kohdalla = 66,7 %
                   verrattuna vastaavan vertailuryhmän 41 %:iin (ks. counterfactual-analysis)
```

Väestövastuullisuuden lukemalla ohjelma näyttää epäonnistuvan — kaupungin työttömyysaste nousi sen vahdin aikana. RBA:n suorituskykyvastuullisuuden lukemalla ohjelma onnistuu: se saavutti volyymitavoitteensa, piti laadun vakaana ja tuotti työllisyystuloksen 25,7 prosenttiyksikköä vastaavan vertailuryhmän yläpuolella, kun väestöindikaattori liikkui syistä (tehtaan sulkeminen), jotka olivat täysin ohjelman hallinnan ulkopuolella.

## Yhteys ohjelmistotekniikkaan

RBA vastaa suoraan tuttua SRE-erottelua: väestöindikaattorit ovat kuin liiketoimintatason pohjantähtimittarit, joita mikään yksittäinen insinööritiimi ei omista päästä päähän (yrityksen liikevaihto, markkinaosuus), kun taas suorituskykymittarit ovat kuin tiimin omat SLO:t — asiat, joita kyseisen tiimin suunnittelupäätökset todella liikuttavat. Kojelauta, joka raportoi molemmat merkitsemättä, kumpi on kumpi, kutsuu täsmälleen sitä väärää kohdentamista, jonka estämiseksi RBA rakennettiin: päivystävä insinööri saa syyt mittarista, jota riippuvuustiimi hallitsee. Tulossopimuksia tilatessa tai raportointityökaluja rakentaessa rakenna "kuinka paljon / kuinka hyvin / paremmassa asemassa" -kolmikko ensiluokkaisina, erikseen suodatettavina kenttinä yhden sekoitetun KPI:n sijaan — se on sama kuri kuin ennakoivien ja jälkikäteen vahvistavien indikaattoreiden erottaminen aiheessa [julkisen sektorin KPI:t](../julkisen-sektorin-suorituskykymittarit/). RBA on myös vastuullisuuslogiikka aiheen [tulosperusteinen maksu ja yhteiskunnalliset vaikuttavuusobligaatiot](../tulosperusteinen-maksu-ja-yhteiskunnalliset-vaikuttavuusobligaatiot/) alla: PbR-sopimus voi oikeudenmukaisesti maksaa vain "paremmassa asemassa" -suorituskykymittarin perusteella, ei koskaan väestöindikaattorin perusteella, ellei interventio ole aidosti sen hallitseva ajuri.

## Sudenkuopat

- **Ohjelman palkitseminen tai rankaiseminen väestöindikaattorin perusteella, jota se ei voi hallita**: tämä on yksittäinen virhe, jonka estämiseksi RBA on olemassa; jäljitä aina, onko ohjelma väestötuloksen merkittävä vai vähäinen vaikuttaja, ennen kuin kytket siihen seurauksia.
- **"Kuinka paljon" -raportointi ikään kuin se olisi "paremmassa asemassa"**: toimintamäärät (asiakkaita käsitelty) ovat helpoimmin kerättävää ja vähiten informatiivista dataa; vaadi, että kysymykseen "onko kukaan paremmassa asemassa" vastataan todellisella tulosdatalla, mieluiten kontrafaktuaalia vastaan (ks.
  [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/)).
- **RBA-indikaattoreiden käsitteleminen ikuisesti kiinteinä**: Friedmanin menetelmä on nimenomaisesti iteratiivinen — "data, tarina, mikä toimii, toimintasuunnitelma" -kierto — ei kertaluonteinen tuloskorttisuunnitteluharjoitus.
- **Ei vertailuryhmää "paremmassa asemassa" -mittarille**: ennen/jälkeen-muutos ilman kontrafaktuaalia sekoittaa ohjelman vaikutuksen trendiin, jonka väestö olisi osoittanut joka tapauksessa.

## Lähteet

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
