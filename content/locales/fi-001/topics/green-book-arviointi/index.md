# Green Book -arviointi (viiden tapauksen malli)

Green Book on HM Treasuryn pakollinen ohje Ison-Britannian valtionhallinnon menoehdotusten arviointiin. Sen keskeinen työkalu, viiden tapauksen malli, pakottaa liiketoimintaperustelun vastaamaan viiteen erilliseen kysymykseen — onko se hyvä idea, tuottaako se arvoa, voidaanko se hankkia, onko siihen varaa ja voidaanko se toteuttaa — sen sijaan, että kaikki tiivistettäisiin yhdeksi luvuksi, jonka ministeri voi vilkaista ja hyväksyä.

## Miksi tällä on merkitystä

Jokaisen Ison-Britannian keskushallinnon menoehdotuksen, joka ylittää ministeriön delegoidut rajat, on läpäistävä Green Book -arviointi ennen kuin rahoitus vapautetaan, ja HM Treasuryn Green Book Review 2020 (julkaistu kritiikin jälkeen siitä, että prosessi oli puolueellinen köyhempiä alueita kohtaan, ks. <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) tiukensi vaatimusta, että vaihtoehtoja verrataan aitoon "do minimum" -perustasoon ja että strateginen sopivuus osoitetaan ennen kuin rahalle vastinetta edes arvioidaan. Viiden tapauksen malli itsessään edeltää Green Bookia — se sai alkunsa Office of Government Commercessa vakiomuotoisena liiketoimintaperustelun rakenteena — mutta Green Bookin vuoden 2022 painos upottaa sen pakolliseksi muodoksi kaikille Treasuryn hyväksyntää hakeville liiketoimintaperusteluille: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Tapauksen jakamisen viiteen tarkoitus on se, että ehdotus voi epäonnistua missä tahansa yhdessä ulottuvuudessa muista riippumatta. Strategisesti järkevä, kustannustehokas IT-alustan uusiminen voi silti epäonnistua kaupallisessa tapauksessa, jos vain yksi toimittaja pystyy toimittamaan sen (luoden yksittäistarjouksen riskin), tai johtamistapauksessa, jos ministeriöllä ei ole kokemusta tämänkokoisten ohjelmien toimittamisesta. Yksi "rahalle vastine" -pistemäärä kätkee juuri tämänkaltaisen epäonnistumistavan.

## Matematiikka

Viiden tapauksen malli on rakenne, ei kaava, mutta jokaisella tapauksella on oma kvantitatiivinen tai näytöllinen testinsä:

```
1. Strateginen tapaus
   Näyttö organisaation strategiaan sidotusta menotavoitteesta.
   Testi: onko muutokselle perustetta lainkaan? ("do nothing" on aina vaihtoehto.)

2. Taloudellinen tapaus
   Vaihtoehtojen arviointi "do minimum" -perustasoa vastaan,
   käyttäen yhteiskunnallista kustannus-hyötyanalyysia tai kustannusvaikuttavuusanalyysia.
   Testi: mikä vaihtoehto maksimoi julkisen nettoarvon?
   Ks. ../social-cost-benefit-analysis/ ja ../cost-effectiveness-analysis-in-government/

3. Kaupallinen tapaus
   Markkinavuoropuhelu, hankintareitti, riskinjako ostajan ja toimittajan välillä.
   Testi: voidaanko ensisijainen vaihtoehto hankkia hyväksyttävin ehdoin?

4. Rahoitustapaus
   Kohtuuhintaisuus ministeriön budjettirajojen sisällä, rahoituslähde,
   taseen käsittely.
   Testi: onko meillä siihen varaa, tänä vuonna ja jokaisena sitä seuraavana?

5. Johtamistapaus
   Hallinto, projektisuunnitelma, hyötyjen toteutumissuunnitelma, riskirekisteri.
   Testi: pystyykö tämä organisaatio todella toteuttamaan sen?
   Ks. ../benefits-realization/
```

Taloudellinen tapaus on se, missä kvantitatiivinen arviointi elää: vaihtoehtoja verrataan [sosiaalisella diskonttokorolla](../sosiaalinen-diskonttokorko/) korjatun nettonykyarvon perusteella, [yhteiskunnallisen kustannus-hyötyanalyysin](../yhteiskunnallinen-kustannus-hyötyanalyysi/) menetelmällä tai, jos hyötyjä ei voi rehellisesti rahamääräistää, [kustannusvaikuttavuusanalyysin](../kustannusvaikuttavuusanalyysi-julkishallinnossa/) tai [monikriteerisen päätösanalyysin](../monikriteerinen-päätösanalyysi/) kautta.

## Työstetty esimerkki

**Paikallisviranomainen**: kunta, joka arvioi £12 miljoonan asuntokorjausten IT-järjestelmää, ajaa viisi tapausta seuraavasti. Strateginen tapaus: korjausvelka rikkoo lakisääteisen kunnollisten asuntojen standardin 18 kuukauden sisällä ilman interventiota. Taloudellinen tapaus: kolme vaihtoehtoa hinnoiteltuna 10 vuoden arviointijaksolle 3,5 %:n diskonttokorolla (vuoden 2022 Green Bookin standardin sosiaalisen aikapreferenssin koron mukaan) — "do minimum" (vanhan järjestelmän paikkaaminen, NPV −£4,1 milj.), "osta" (COTS-alusta, NPV +£2,3 milj.), "rakenna" (räätälöity alusta, NPV +£0,6 milj. sen jälkeen, kun ohjelmistokehityksen 40 %:n optimismivinouma on sovellettu diskonttaamattomiin pääomakustannuksiin, Green Bookin liitteen A mukaan). Osta voittaa taloudellisen tapauksen. Kaupallinen tapaus: on kaksi elinkelpoista toimittajaa, kilpailutus on mahdollinen — läpäisee. Rahoitustapaus: pääomaa saatavilla Public Works Loan Boardilta, tuottokustannukset mahtuvat keskipitkän aikavälin talous-suunnitelmaan — läpäisee. Johtamistapaus: kunta on toimittanut kaksi vastaavaa järjestelmää viimeisten viiden vuoden aikana — läpäisee. Ehdotus etenee vaihtoehdolla "osta".

**Valtionhallinnon ministeriö**: ehdotus, jolla on vahva taloudellinen tapaus (NPV +£40 milj.) mutta jossa vain yhdellä toimittajalla on asiaankuuluva akkreditointi, epäonnistuu kaupallisen tapauksen kilpailujännitetestissä, pakottaen joko yksittäishankinta-poikkeuksen (omine tarkastelutaakkoineen) tai eritelmän uudelleensuunnittelun markkinan avaamiseksi — taloudellinen tapaus yksin ei olisi koskaan nostanut tätä esiin.

## Yhteys ohjelmistotekniikkaan

Valtionhallinnon tai avustusrahoitteisten organisaatioiden sisäiset insinöörijoukkueet näkevät yleensä vain taloudellisen tapauksen, koska se on osa, jota tuote- ja insinöörijohdolta pyydetään perustelemaan ("mikä on tämän migraation ROI?"). Mutta Treasuryn tai avustuslautakunnan läpäisevä liiketoimintaperustelu tarvitsee kaikki viisi, ja insinöörit ovat usein parhaiten asemoituneita vastaamaan kaupalliseen tapaukseen (voidaanko tämä todella hankkia, vai sitooko se meidät yhden toimittajan omaan muotoon?) ja johtamistapaukseen (onko meillä toimituskyky, vai riippuuko tämä siitä, etteivät kolme tiettyä ihmistä lähde?). Käsittele pyyntöä "vain liiketoimintaperustelun lukuja" pyyntönä yhdestä viidenneksestä todellisesta päätöksestä. Ks. [rahalle vastine](../rahalle-vastine/) siitä, miten taloudellisen tapauksen tulos yleensä tiivistetään, ja [omistamisen kokonaiskustannus](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/) rahoitustapauksen tavanomaisesta kvantitatiivisesta ytimestä.

## Sudenkuopat

- **Taloudellisen tapauksen kirjoittaminen ensin ja strategisen tapauksen sovittaminen siihen.** Green Book Review 2020 totesi, että juuri tämä epäonnistumistapa ohjasi arviointivinouman kohti paikkoja ja sektoreita, jotka olivat jo hyvin dokumentoituja, vakiinnuttaen alueellista eriarvoisuutta; strategisen tapauksen tulisi asettaa tavoite ennen kuin vaihtoehtoja verrataan.
- **"Do minimum" -perustason käsitteleminen "ei tehdä mitään" -vaihtoehtona.** Oikea perustaso on halvin vaihtoehto, joka vielä täyttää vähimmäisoikeudelliset tai turvallisuusvelvoitteet, ei nollamenojen fantasia — vertailu kirjaimelliseen nollaan paisuttaa jokaisen vaihtoehdon näennäistä arvoa.
- **Kaupallisen ja johtamistapauksen ohittaminen, koska taloudellinen tapaus on vahva.** Korkean NPV:n ehdotus, jota ei voi hankkia kilpailutetusti tai jota rahoittava organisaatio ei voi toimittaa, ei ole rahoitettavissa oleva ehdotus; Treasuryn arvioijat hylkäävät rutiininomaisesti näillä perusteilla vakuuttavasta taloudellisesta tapauksesta huolimatta.
- **Viiden tapauksen mallin soveltaminen vain kerran, alussa.** Green Book edellyttää tapauksen uudelleentarkastelua jokaisessa myöhemmässä hyväksyntäportissa (strateginen hahmotelma, alustava liiketoimintaperustelu, täysi liiketoimintaperustelu) kustannusten ja näytön vakiintuessa — hahmotelmavaiheessa jäädytetty tapaus ohittaa kustannusten nousun, jonka myöhempi portti olisi havainnut.

## Lähteet

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
