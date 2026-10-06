# Digitaalisen palvelun standardi

GOV.UK Service Standard on portti, jonka jokaisen valtionhallinnon digitaalisen palvelun on läpäistävä ennen kuin se voidaan ottaa käyttöön: 14 julkaistua kohtaa, joita riippumaton paneeli arvioi jokaisen toimitusvaiheen lopussa. Se on mekanismi, joka muuttaa "rakenna hyviä julkisia palveluja" iskulauseesta läpäisy/hylkäys-päätökseksi, jolla on paperijälki — ja vuoden 2012 Government Digital Strategyn "digital by default" -mandaatin suora jälkeläinen.

## Miksi tällä on merkitystä

Ennen Service Standardin olemassaoloa valtionhallinnon IT-epäonnistumiset tulivat harvoin näkyviin ennen käyttöönottoa, ja ne olivat harvoin kohdistettavissa päätökseen, johon kukaan olisi voinut osoittaa. Vuoden 2012 Government Digital Strategy velvoitti ministeriöt uudistamaan 25 suurimman volyymin julkisen transaktiopalvelunsa "digital by default" -periaatteella, ja tuki velvoitetta vaatimustenmukaisuusmekanismilla: palveluja ei voinut ottaa käyttöön GOV.UK:ssa läpäisemättä palvelun arviointia silloisia 26 kohdan standardia vastaan (yhdistetty 18:aan vuonna 2019 ja nyt voimassa olevaksi 14 kohdan standardiksi, joka kattaa kolme ryhmää — käyttäjätarpeiden ymmärtäminen, hyvän palvelun tarjoaminen ja oikean teknologian käyttö). Palvelun arviointi on todellinen tapahtuma: GDS:n tai ministeriön arvioijien paneeli tarkastelee näyttöä, kuulustelee tiimiä ja antaa tuomion läpäisystä, hylkäyksestä tai "ei täytetty" kunkin kohdan osalta, julkaistuna palvelun arviointisivulla. Arvioinnin hylkääminen estää palvelua siirtymästä yksityisestä betasta julkiseen betaan tai betasta tuotantoon — se on aito portti, ei katselmointi.

## Matematiikka

Service Standard on viitekehys, ei kaava, mutta se toimii vaiheistettuna päätösrakenteena:

```
Discovery  → Alfa-arviointi    → Beta-arviointi     → Live-arviointi
             (ei pakollinen     (pakollinen ennen    (pakollinen ennen
              kaikille palveluille, julkisen betan      "beta"-tunnisteen poistamista
              mutta suositeltu)  julkaisua)            ja vanhan kanavan sulkemista)

Jokainen arviointi: näyttö + tiimin haastattelu → paneelin tuomio kohtaa kohti
  Täytetty / Osittain täytetty / Ei täytetty
Kokonaistulos: Läpäisty / Läpäisty ehdoin / Hylätty (uusi arviointi vaaditaan)

Hylkäyksen kustannus ≈ seuraavan sprinttisyklin kustannus korjaukseen
                       + viive [kanavasiirtymän säästöissä](../kanavasiirtymän-säästöt/),
                       jotka palvelun oli tarkoitus tuottaa
```

Kohta 10 ("määritä, miltä menestys näyttää, ja julkaise suorituskykydata") syöttää aiheita [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/) ja [palvelustandardit ja transaktiomittarit](../palvelustandardit-ja-transaktiomittarit/) — standardi velvoittaa mittaamisen, ei vain palvelun.

## Työstetty esimerkki

**Paikallisviranomaisen asuntohakupalvelu**: kunnan tiimi saavuttaa beta-arvioinnin palvelulla, joka täyttää 11 kohtaa 14:stä mutta hylkää kohdan 5 ("varmista, että kaikki voivat käyttää palvelua"), koska hakijoille, joilla ei ole internetyhteyttä, ei ole avustettua digitaalista reittiä, ja hylkää kohdan 9, koska henkilötietoja kirjataan selväkielisinä sovellusvirheiden jäljityslokeihin.

```
Hylkäyksen suora kustannus:
  Uusinta-arviointipaikka: 6–8 viikon odotus seuraavaa vapaata paneelia
  Korjaussprintti: 2 kehittäjää × 3 viikkoa × £550/päivä ≈ £34 650
  Avustetun digitaalisen kanavan suunnittelu: 1 tutkija × 2 viikkoa ≈ £5 000

Viivekustannus: palvelun ennustettiin siirtävän 40 % 18 000 vuosittaisesta asuntokyselystä
£8,50 puheluista £0,20 digitaalisiin transaktioihin
  = 7 200 × (£8,50 − £0,20) = £59 760/vuosi menetetty, suhteutettuna
    noin 2 kuukauden viiveeseen ≈ £9 960

Epäonnistuneen arvioinnin kokonaiskustannus ≈ £49 610
```

Laskelman pointti ei ole tarkkuus — vaan se, että hylätyllä arvioinnilla on todellinen, laskettavissa oleva hinta, mikä on täsmälleen se, miksi portilla on hampaat.

## Yhteys ohjelmistotekniikkaan

Insinööreille standardi on luettavissa yhtä paljon arkkitehtuuri- ja toimitustarkistuslistana kuin politiikkadokumenttina: kohta 11 ("valitse oikeat työkalut ja teknologia") ja kohta 12 ("tee uusi lähdekoodi avoimeksi") ovat suoria insinööripäätöksiä, ja kohta 14 ("operoi luotettavaa palvelua") vaatii samat SLO:t ja häiriöprosessit kuin mikä tahansa tuotantojärjestelmä. Se on tämän ryhmän aiheiden kattoviitekehys — [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/) ja [kanavasiirtymän säästöt](../kanavasiirtymän-säästöt/) ovat se, mitä standardi yrittää suojata taloudellisesti, [digitaalinen osallisuus](../digitaalinen-osallisuus/) on se, mitä kohta 5 on olemassa takaamaan, ja [valtio alustana](../valtio-alustana/) -komponentit (GOV.UK Notify, Pay, One Login) täyttävät kohdan 13 ("käytä avoimia standardeja, yhteisiä komponentteja ja malleja ja osallistu niihin") suurelta osin oletuksena. Ks. myös [rakenna vs. osta julkishallinnossa](../rakenna-vs-osta-julkishallinnossa/) siitä, miten "oikeat työkalut" -kohta toteutuu hankintapäätöksissä.

## Sudenkuopat

- **Arvioinnin käsitteleminen julkaisupäivän vaatimustenmukaisuusruksina**: tiimit, jotka lukevat 14 kohtaa ensimmäisen kerran viikkoa ennen beta-arviointiaan, epäonnistuvat ennustettavasti; standardin on tarkoitus muokata päätöksiä discoverystä lähtien, ei auditoida niitä jälkikäteen.
- **Prototyypin arvioiminen palvelun sijaan**: näyttävä demo voi läpäistä katselmoinnin, jonka palvelun live-, avustettua digitaalista osallisuutta tukeva, häiriöhallittu versio hylkäisi — arvioijien on tarkoitus kuulustella tätä aukkoa, mutta itse sertifioidut pienet palvelut ohittavat sen usein.
- **Ei uudelleenarviointia ennen skaalausta**: 5 %:n käyttöönotolla arvioitu palvelu ei automaattisesti pysy vaatimustenmukaisena 100 %:ssa — kuorma, vikakysyntä ja reunatapauskäyttäjät kaikki muuttuvat.
- **Service Standardin sekoittaminen design systemiin**: GOV.UK Design System -komponentit täyttävät joitakin kohtia (johdonmukaisuus, saavutettavuus), mutta standardi kattaa myös tiimirakenteen, ketterät käytännöt ja dataeettisyyden — hyvin tyylitelty palvelu voi silti epäonnistua kohdissa 2, 6 tai 9.

## Lähteet

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, kohta 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
