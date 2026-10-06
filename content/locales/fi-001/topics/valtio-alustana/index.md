# Valtio alustana (GaaP)

Valtio alustana (Government as a Platform) on strategia, jossa jaetut, uudelleenkäytettävät komponentit — ilmoituspalvelu, maksupalvelu, tunnistautumispalvelu — rakennetaan kerran, keskitetysti, jotta satoja yksittäisiä valtionhallinnon palveluja kuluttaa niitä sen sijaan, että kukin rakentaisi omansa. Se muotoilee julkisen digitaalisen infrastruktuurin uudelleen alustatalouden ongelmaksi: arvo ei ole missään yksittäisessä integraatiossa, vaan siinä, että *seuraavan* sen omaksuvan tiimin rajakustannus lähestyy nollaa.

## Miksi tällä on merkitystä

GDS esitti strategian muodollisesti vuoden 2015 julkaisussaan "Government as a Platform", väittäen, että valtio oli rakentanut samoja kyvykkyyksiä — maksujen vastaanotto, käyttäjäilmoitukset, henkilöllisyyden todentaminen, osoitehaku — erikseen palvelu toisensa jälkeen, kukin kantaen oman hankintansa, turvallisuusarvionsa ja jatkuvan tukitaakkansa. Vaihtoehto oli pieni määrä jaettuja alustoja, rakennettu korkeaan standardiin kerran ja käytetty uudelleen kaikkialla: GOV.UK Notify sähköpostien, tekstiviestien ja kirjeiden lähettämiseen, GOV.UK Pay verkkomaksujen vastaanottoon ja GOV.UK One Login (aiemman GOV.UK Verify -tunnistautumisohjelman seuraaja) henkilöllisyyden todentamiseen. Mittakaava, jonka nämä alustat ovat saavuttaneet, on selvin näyttö siitä, että strategia toimi: GOV.UK Pay on käsitellyt yli £10 miljardia transaktioita noin 1 800 yksittäisessä palvelussa — ja missä ensimmäisen £1 miljardin käsittelyyn kului noin neljä vuotta, se käsittelee nyt saman verran noin viidessä kuukaudessa — kun taas GOV.UK Notify on lähettänyt yli 9 miljardia viestiä yli 1 500 valtionhallinnon organisaation puolesta. Jokainen näistä omaksuneista palveluista vältti oman maksuyhdyskäytävänsä tai viestiputkensa rakentamisen, turvaamisen ja ylläpidon.

## Matematiikka

```
Rakennuskustannus palvelua kohti (ei alustaa) = N palvelua × yhden maksu-/ilmoitus-/
  tunnistautumisjärjestelmän rakentamisen, turva-arvioinnin ja ylläpidon kustannus

Alustan kustannus = kiinteä alustan rakennuskustannus
                  + rajakustannus omaksuvaa palvelua kohti (integraatio,
                    konfigurointi, jatkuva alustatiimin tuki)

Uudelleenkäyttö tasapainottuu, kun:
  alustan rakennuskustannus < N × (palvelukohtainen rakennuskustannus − marginaalinen
  integraatiokustannus)

Kypsällä alustalla rajakustannus lisäomaksujaa kohti lähestyy pelkkää
transaktio-/viestimaksua — kiinteä kustannus poistetaan koko valtionhallinnon
kentän yli, ei yhden ministeriön budjetista, minkä vuoksi GaaP-komponentit
rahoitetaan yleensä keskitetysti eikä veloiteta täydellä kustannusvastaavuudella
varhaisilta omaksujilta.
```

## Työstetty esimerkki

**Paikallisviranomainen ottaa käyttöön GOV.UK Payn oman maksuyhdyskäytävän rakentamisen sijaan**:

```
Rakenna itse -arvio:
  PCI-DSS-vaatimustenmukaisuustyö + integraatio + jatkuva ylläpito
  ≈ £85 000 rakennus + £22 000/vuosi ylläpito

GOV.UK Pay -käyttöönotto:
  Integraatiotyö ≈ £12 000 (kehittäjäaika)
  Transaktiomaksut: valtion ja kansalaisen väliset korttimaksut veloitetaan
  tyypillisesti pienellä prosenttiosuudella + kiinteällä maksulla transaktiota kohti,
  eikä kunta kanna erillistä PCI-DSS-taakkaa
  ≈ £12 000 kertaluonteisesti, jatkuva kustannus vaihtelee volyymin mukaan, ei ole kiinteä

Ensimmäisen vuoden säästö ≈ £85 000 − £12 000 = £73 000, ennen kuin lasketaan
vältetty £22 000/vuosi ylläpito ja vältetty vaatimustenmukaisuusriski siitä,
että korttidataa ylipäätään säilytettäisiin kunnan ylläpitämässä järjestelmässä —
tämä jälkimmäinen kategoria on tietoturva-arvo, jota käsitellään aiheessa
public-sector-cybersecurity-value.
```

Skaalaa tuo £73 000 noin 1 800 palvelulle, jotka nyt käyttävät GOV.UK Payta, ja koko valtionhallinnon yli vältetyt rakennuskustannukset ovat satoja miljoonia — alustatalous, ei mikään yksittäinen integraatio, on se kohta, jossa strategian arvo todella sijaitsee.

## Yhteys ohjelmistotekniikkaan

Valtio alustana on suora argumentti aiheen [rakenna vs. osta julkishallinnossa](../rakenna-vs-osta-julkishallinnossa/) puolesta: kun jaettu, arvioitu, hyvin johdettu komponentti on olemassa, räätälöidyn vastineen rakentaminen on hyvin harvoin parempi [rahalle vastine](../rahalle-vastine/) -valinta, ja se epäonnistuu [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) kohdassa 13 ("käytä avoimia standardeja, yhteisiä komponentteja ja malleja ja osallistu niihin") lähes määritelmällisesti. Se muuttaa myös aiheen [omistamisen kokonaiskustannus valtionhallinnon IT:ssä](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/) muotoa: alustan käyttöönotto vaihtaa suuren pääoma- ja ylläpitorivin pienempään, käyttöön sidottuun käyttökustannukseen, jota on helpompi ennustaa ja helpompi lopettaa, jos palvelu poistetaan käytöstä. Komponenttien avoimella uudelleenkäytöllä on serkku aiheessa [avoimen datan arvo](../avoimen-datan-arvo/) — molemmat ovat strategioita sellaisen kohtelemiseksi, mitä valtio tuottaa kerran, jaettuna infrastruktuurina eikä ministeriön omaisuutena.

## Sudenkuopat

- **Varjorakentaminen**: tiimit rakentavat hiljaa oman maksu- tai ilmoitusintegraationsa, koska alustan käyttöönottoprosessi on hitaampi kuin sen tekeminen itse — hallinnollisen kitkan ongelma, ei teknologiaongelma, ja se heikentää hiljaa uudelleenkäytön taloutta, jonka varassa koko strategia on.
- **Alustatiimin aliresursointi suhteessa sen luomaan arvoon**: arvo kertyy kuluttaville ministeriöille, kun kustannus on alustatiimillä, mikä luo kroonisen aliinvestoinnin riskin, ellei rahoitusta keskitetä ja suojata — yhteismaan tragedian versio.
- **Alustan menestyksen mittaaminen pelkällä käytöllä**: käyttöönottoluvut (käyttöönotetut palvelut, lähetetyt viestit) ovat ennakoiva indikaattori, eivät näyttö arvosta; todellinen testi on yllä oleva vältetyn rakennuskustannuksen ja vältetyn riskin laskelma.
- **"Alustan" käsitteleminen "monoliitin" synonyyminä**: GaaP-komponentit onnistuvat, koska jokainen tekee yhden asian hyvin kapealla, vakaalla rajapinnalla — toisiinsa liittymättömien kyvykkyyksien niputtaminen yhdeksi "alustaksi" luo räätälöidyn rakentamisen ongelman uudelleen eri mittakaavassa.

## Lähteet

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
