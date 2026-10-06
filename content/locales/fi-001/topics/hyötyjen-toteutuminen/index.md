# Hyötyjen toteutuminen

Hyötyjen toteutumisen hallinta (benefits realization management) on kuri, jolla tunnistetaan, lähtötasoistetaan, seurataan ja *todennetaan*, että liiketoimintaperustelussa luvatut hyödyt todella toteutuivat käyttöönoton jälkeen. Ison-Britannian julkisissa investoinneissa se sijaitsee HM Treasuryn Green Bookin Five Case Modelin ja Infrastructure and Projects Authorityn omistetun hyötyjen hallinnan ohjeistuksen sisällä; ilman sitä "järjestelmä säästi käsittelijöiltä kolmekymmentä minuuttia hakemusta kohti" pysyy ikuisesti tarkastamattomana väitteenä.

## Miksi tällä on merkitystä

Liiketoimintaperustelut ovat lupauksia; hyötyjen toteutuminen on tarkastus. Green Book edellyttää jokaisen menoperustelun läpäisevän viisi testiä — strateginen, taloudellinen, kaupallinen, rahoituksellinen ja johtamis — ja johtamistapauksen on esitettävä, miten hyödyt toteutetaan *ennen hyväksyntää*: omistajat nimetty, lähtötasot kerätty ja mittauspäivät kiinnitetty. Infrastructure and Projects Authorityn opas, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), on olemassa, koska IPA:n oma Government Major Projects Portfolio -raportointi on toistuvasti havainnut toimitusluottamuksen ja hyötyjen toteutumisen mainituiksi toistuviksi heikkouksiksi suurissa ohjelmissa. Hanke voi sulkeutua "ajallaan ja budjetin sisällä" toimitusvaiheitaan vastaan epäonnistuen silti toteuttamaan hyötyjä, jotka oikeuttivat rahan käytön alun perin — erottelu, jota IPA:n ohjeistus käsittelee koko kurin pointtina.

## Matematiikka

```
Toteutumisaste = toteutuneet hyödyt / ennustetut hyödyt   (hyötyä kohti, jaksoa kohti)

Mekanismit, jotka tekevät siitä laskettavan:
  lähtötaso kerätty ENNEN käyttöönottoa (muuten delta on mittaamaton)
  jokaiselle hyödylle: nimetty omistaja, mittari, datalähde, mittausaikataulu
  ennuste korjattu optimismivinoumalle arvioinnissa (Green Bookin edellytys)
  hyödyt luokiteltu käteistä vapauttaviin / kapasiteettia vapauttaviin / kvalitatiivisiin,
  seurattuna ja raportoituna erikseen
```

## Työstetty esimerkki

**Paikallisviranomainen**: digitaalisen kaavoitushakemusportaalin liiketoimintaperustelu lupasi vuodessa £300 000 painatus- ja postituskulujen vähennyksen (käteinen), 4 500 virkailijatuntia vapautettuna (kapasiteetti) ja parantuneen hakijatyytyväisyyden (kvalitatiivinen). Kaksitoista kuukautta käyttöönoton jälkeen:

```
Hyöty             Ennuste    Toteutunut  Aste   Näyttö
Käteissäästöt     £300 000   £210 000    70 %   kirjanpitokirja vs. lähtövuosi
Virkailijatunnit  4 500      3 200       71 %   aika-liikeotanta
Tyytyväisyys      +8 pp      +11 pp      138 %  hakijakyselydata

Katselmoinnin toimenpiteet (hyötyjen toteutumisen tarkoitus):
käteisvaje jäljitetty kahteen palvelualueeseen, jotka yhä käsittelevät paperihakemuksia
poikkeuksena → sulje poikkeusreitti;
seuraavan liiketoimintaperustelun optimismivinouman korjaus nostettu 10 %:sta 25 %:iin
tämän tapauksen ennustevirheen perusteella.
```

70 %:n toteutumisaste ei ole epäonnistuminen — se on tietoa, jonka avulla seuraava ennuste voidaan kalibroida paremmin. Mittaamaton tapaus olisi väittänyt 100 %:a ikuisesti, eikä taloushallinnolla olisi ollut perustetta haastaa sitä.

## Yhteys ohjelmistotekniikkaan

Insinöörijärjestöt hyväksyvät rutiininomaisesti alusta- ja työkaluinvestointeja ennustetun hyödyn perusteella eivätkä melkein koskaan auditoi niitä jälkikäteen — täsmälleen se patologia, jonka korjaamiseksi hyötyjen toteutumisen hallinta on olemassa. Kevyt siirto: jokainen olennaisuuskynnyksen ylittävä ehdotus nimeää hyödyn omistajan, lähtötasomittarin ja kiinteän katselmuspäivän (tyypillisesti kuusi kuukautta käyttöönoton jälkeen), ja aiempien ehdotusten toteutumisasteiden tulisi alentaa sitä, kuinka paljon organisaatio luottaa tiimin tai toimittajan seuraavaan ennusteeseen. Tämä sulkee silmukan takaisin [Green Book -arviointiin](../green-book-arviointi/), joka asettaa ennusteen, jota tämä kuri auditoi, ja se on sama logiikka kuin laajasti raportoidun löydöksen taustalla, jonka mukaan suurella enemmistöllä generatiivisen tekoälyn pilotteja ei ole mitattavaa tuottoa — ks. [tekoälyn tuottavuus julkisella sektorilla](../tekoälyn-tuottavuus-julkisella-sektorilla/) — koska pilotit, jotka *tuottivat* arvoa, olivat lähes poikkeuksetta ne, joilla oli nimetty, seurattava hyötyrivi alusta alkaen. Se riippuu myös sen erottamisesta, mitä todella toimitettiin ja mitä todella toteutui — ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/).

## Sudenkuopat

- **Ei käyttöönottoa edeltävää lähtötasoa**: kohtalokas, korjaamaton laiminlyönti — ilman sitä toteutumisastetta ei voi koskaan laskea, vain väittää.
- **Hyödyn orpous**: hyödyllä, jolla ei ole nimettyä omistajaa, ei ole ketään keräämässä dataa, ja jokainen salkkukatselmus raportoi sen oletuksena "yleisesti aikataulussa".
- **Hyötyjen kaksoislaskenta ohjelmasalkussa**: kaksi hanketta, jotka molemmat väittävät saman vapautuneen käsittelijäkapasiteetin hyödykseen — pidä yksi hyötyrekisteri koko salkun yli tämän havaitsemiseksi.
- **Toteutumisteatteri**: helppojen kvalitatiivisten voittojen mittaaminen ja raportointi näkyvästi, kun käteis- ja kapasiteettirivit jäävät hiljaa tarkastelematta.
- **Toimituksen sekoittaminen toteutumiseen**: hanke, joka sulkee välitavoitteensa "ajallaan ja budjetin sisällä", ei kerro mitään siitä, tapahtuiko ennustettu hyöty koskaan — IPA:n ohjeistus käsittelee näitä kahtena erillisenä kysymyksenä kahdella erillisellä näyttöketjulla.

## Lähteet

- HM Treasury, Green Book ja Five Case Model -ohjeistus. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
