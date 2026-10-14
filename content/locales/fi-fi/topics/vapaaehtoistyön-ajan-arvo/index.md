# Vapaaehtoistyön ajan arvo

Vapaaehtoistyön ajan arvo on rahamääräinen arvio, joka annetaan palkattomalle työlle, useimmiten kuvaamaan hyväntekeväisyysjärjestön todellista taloudellista jalanjälkeä — sen tilinpäätös plus työ, jota sen ei tarvinnut maksaa — tai perustelemaan, että tietty interventio on kustannusvaikuttavampi kuin sen pelkkä käteisbudjetti antaa ymmärtää. Kaksi kansallista menetelmää hallitsee: Yhdysvaltojen Independent Sector -arvio ja Ison-Britannian Office for National Statistics / NCVO -lähestymistapa, ja ne hinnoittelevat saman työtunnin varsin eri tavoin.

## Miksi tällä on merkitystä

Joka vuosi Independent Sector yhteistyössä University of Marylandin Do Good Instituten kanssa julkaisee vapaaehtoistyön ajan kansallisen tuntiarvon, rakennettuna Bureau of Labor Statisticsin palkkadatasta — tarkemmin yksityisen ei-maatalouspalkkalistan tuotanto- ja ei-valvontatyöntekijöiden keskimääräisistä tuntiansioista plus sivukuluoikaisu — ja eriteltynä Yhdysvaltain osavaltioittain. Sen viimeisin julkaisu asetti arvoksi **$36,14 tunnilta vuodelle 2025**, ylös 3,9 % edellisvuodesta, osavaltiotasoisten arvojen vaihdellessa yli $50:stä Washington D.C.:ssä alle $20:een Puerto Ricossa. Isossa-Britanniassa Office for National Statistics on erikseen arvioinut muodollisen vapaaehtoistyön korvauskustannukseksi **£14,43 tunnilta** (2017 arvio), ja NCVO:n UK Civil Society Almanac 2024 käyttää vapaaehtoistyön osallistumisdataa — noin 14,2 miljoonaa ihmistä tekemässä muodollista vapaaehtoistyötä vuosina 2021–22 — arvioidakseen alan kokonaisvapaaehtoispanoksen noin **£18 miljardiksi**, noin 0,8 % Ison-Britannian BKT:sta.

Syy, miksi tällä on merkitystä kirjanpidon kosmetiikan yli: ohjelma, joka nojaa voimakkaasti vapaaehtoistyöhön, voi näyttää dramaattisesti halvemmalta puhtaalla käteisperusteisella [kustannus tulosta kohti](../kustannus-tulosta-kohti/) -laskennalla kuin palkattuun henkilöstöön nojaava, vaikka todellinen resurssikustannus — mitä tuon työn korvaaminen maksaisi — olisi samanlainen tai korkeampi. Rahoittajat ja arvioijat, jotka sivuuttavat vapaaehtoistyön ajan arvon, aliarvioivat järjestelmällisesti vapaaehtoisvaltaisten toimitusmallien todellisen kustannuksen, mikä vääristää tehokkuusvertailuja palkattuun henkilöstöön perustuviin malleihin, jotka toimittavat saman tuloksen.

## Matematiikka

```
Vapaaehtoistyön ajan arvo = Vapaaehtoistunnit × tuntihinta

Hinnan valinnalla on merkitystä ja se muuttaa vastauksen:
  - Korvauskustannuslähestymistapa: palkatun työntekijän palkka, joka tekisi saman
    tehtävän (esim. pätevän nuorisotyöntekijän korvauskustannushinta, ei yleinen
    keskipalkka) — puolustettavin tehtäväkohtaiseen arvotukseen
  - Vaihtoehtoiskustannuslähestymistapa: vapaaehtoisen oma menetetty palkka — puolustettavin
    sen arvottamiseen, mistä vapaaehtoinen luopui
  - Kansallinen keskiarvolähestymistapa: Independent Sectorin tai ONS:n yksittäinen
    sekoitettu hinta — puolustettavin otsikkotason, alojen väliseen vertailukelpoisuuteen
```

Kolme lähestymistapaa voivat erota suurella kertoimella samalle tunnille (asianajaja, joka toimii vapaaehtoisena hallituksen jäsenenä, on aivan eri vaihtoehtoiskustannushinnalla kuin kansallinen keskiarvohinta), joten jokaisen raportoidun luvun on ilmoitettava, mikä menetelmä sen tuotti.

## Työstetty esimerkki

**Ison-Britannian hyväntekeväisyysjärjestö, kansallinen keskiarvolähestymistapa**: 5 000 vapaaehtoistuntia vuodessa, arvotettuna £14,43/tunti (ONS:n korvauskustannusarvio):

```
Arvo = 5 000 × £14,43 = £72 150
```

Jos hyväntekeväisyysjärjestön käteismeno kyseisenä vuonna oli £300 000, sen todellinen resurssikustannus — käteinen plus vapaaehtoistyö — on £372 150, noin 24 % korkeampi kuin pelkkä käteisluku antaa ymmärtää. Pelkkää £300 000 käteislukua käyttävä kustannus tulosta kohti -laskelma aliarvioi todellisen kustannuksen saman marginaalin verran.

**Yhdysvaltalainen hyväntekeväisyysjärjestö, kansallinen keskiarvolähestymistapa**: 2 000 vapaaehtoistuntia arvotettuna $36,14/tunti (Independent Sectorin 2025 julkaisu):

```
Arvo = 2 000 × $36,14 = $72 280
```

**Sama yhdysvaltalainen hyväntekeväisyysjärjestö, vaihtoehtoiskustannuslähestymistapa**: jos vapaaehtoiset ovat suhteettomasti eläkkeellä olevia ammattilaisia, joiden aiemmat ansiot olivat keskimäärin $60/tunti, vaihtoehtoiskustannusarvotus olisi $120 000 — kaksi kolmasosaa korkeampi kuin kansallinen keskiarvoluku, havainnollistaen, miksi menetelmä on ilmoitettava.

## Yhteys ohjelmistotekniikkaan

Vapaaehtoistunteja kirjaavien järjestelmien (vuorosuunnittelutyökalut, vapaaehtoistenhallinta-alustat) tulisi tallentaa tunnit tehtävä- tai roolitasolla, ei vain kokonaissummana, jotta korvauskustannushinta voidaan soveltaa rooli kerrallaan yhden kattavan kansallisen keskiarvohinnan sijaan sekalaisen vapaaehtoistyövoiman yli (hallituksen jäsenen tunti ja järjestyksenvalvojan tunti eivät ole taloudellisesti ekvivalentteja). Käytetyn hinnan ja menetelmän tallentaminen lasketun arvon rinnalle — ei vain lopullisen valuuttaluvun — antaa jatkoraportoinnin (tilinpäätökset, [yhteiskunnallisen sijoitetun pääoman tuoton](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) laskelmat, rahoittajaraportit) toistaa tai haastaa luvun myöhemmin sen sijaan, että sitä käsiteltäisiin läpinäkymättömänä vakiona. Ks. [kustannus tulosta kohti](../kustannus-tulosta-kohti/) siitä, miksi vapaaehtoistyön ajan arvon pois jättäminen aliarvioi järjestelmällisesti todellisen toimituskustannuksen.

## Sudenkuopat

- **Yhden kattavan hinnan käyttö rakenteellisesti erilaisille rooleille.** Kansallinen keskipalkkahinta, jota sovelletaan ammattilaisen pro bono -tuntiin (oikeudellinen, taloudellinen, kliininen), aliarvioi sen rajusti; sovita hinta korvattuun rooliin aina, kun tehtävä on ammattitaitoinen.
- **Kaksoislaskenta palkatun henkilöstön kustannusta vastaan.** Jos vapaaehtoiset korvaavat työtä, joka muuten maksettaisiin, varmista, että arvotus on lisäävä käteismenoon eikä kerrostettu jo paisutetun henkilöstöarvion päälle.
- **Vanhentuneen hinnan siteeraaminen ilman päivämäärää.** Independent Sectorin ja ONS:n hinnat muuttuvat vuosittain (tai arvioidaan uudelleen vain ajoittain, ONS:n tapauksessa); päiväämätön vapaaehtoisajan luku raportissa on lähes merkityksetön vertailulle.
- **Vapaaehtoistyön ajan arvon käsitteleminen varainhankinnan omaisuutena.** Se on kustannuskirjanpidon korjaus todellisen resurssikustannuksen ymmärtämiseksi, ei uutta rahaa, jonka hyväntekeväisyysjärjestö voi käyttää; näiden sekoittaminen johtaa harhaan tilinpäätöstä lukevaa hallitusta.

## Lähteet

- Independent Sector ja Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time -menetelmä. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, vapaaehtoistyön arvotusarvio, sellaisena kuin NCVO:n analyysi sen siteeraa. <https://www.ncvo.org.uk/>
