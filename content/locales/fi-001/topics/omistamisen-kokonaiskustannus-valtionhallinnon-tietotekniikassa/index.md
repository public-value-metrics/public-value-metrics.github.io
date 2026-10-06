# Omistamisen kokonaiskustannus valtionhallinnon tietotekniikassa (TCO)

Omistamisen kokonaiskustannus (total cost of ownership) on järjestelmän koko elinkaaren kustannus — hankinta plus jokainen käyttövuosi — diskontattuna yhteiseen päivämäärään. Valtionhallinnon IT:ssä luotettavin yksittäinen ennustevirhe on toimittajien tai vaihtoehtojen vertailu pelkän hankintahinnan perusteella, kun käyttö ja ylläpito muodostavat tyypillisesti jotain puolen ja neljän viidenneksen väliltä elinkaarilaskusta.

## Miksi tällä on merkitystä

HM Treasuryn Green Book edellyttää, että minkä tahansa Five Case Model -liiketoimintaperustelun rahoitustapaus kattaa koko elinkaaren kustannukset, ei vain pääomamenoja — mutta National Audit Office on toistuvasti havainnut ministeriöiden hyväksyvän IT-investointeja vajaata tai optimistista käyttökustannusennustetta vastaan, vain huomatakseen todellisen käyttökustannuksen, kun järjestelmä on tuotannossa ja pääomabudjettirivi on suljettu. Government Digital Servicen ja Central Digital and Data Officen Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) ohjaa ministeriöitä kohti pilveä ja hyödykehostausta osittain siksi, että se tekee jatkuvan kustannuksen näkyväksi ja vertailukelpoiseksi sen sijaan, että se olisi haudattu yhteen pääomahankintalukuun, joka näyttää houkuttelevan matalalta hyväksyntähetkellä ja kalliisti väärältä kolme vuotta myöhemmin.

## Matematiikka

```
TCO = Hankintakustannus + Σ(t=1..N) Vuotuinen käyttökustannus_t / (1+r)^t
      − jäännösarvo (diskontattu)

r = HM Treasuryn Green Bookin sosiaalinen vakiodiskonttokorko, 3,5 %/vuosi
    (laskeva korkoasteikko yli 30 vuoden aikajänteille)

Käyttökustannuskomponentit: hostaus/lisensointi, tuki ja ylläpito,
tietoturvapäivitykset ja vaatimustenmukaisuus, henkilöstöaika, suunniteltu uudistus/migraatio
```

Ks. [sosiaalinen diskonttokorko](../sosiaalinen-diskonttokorko/) siitä, miksi diskonttaustekijällä on merkitystä tyypillisen 5–10 vuoden järjestelmäelinkaaren yli, ja [rakenna vs. osta julkishallinnossa](../rakenna-vs-osta-julkishallinnossa/) siitä, miten TCO syöttää rakenna/osta-päätöstä.

## Työstetty esimerkki

Ministeriö vertailee kahta asianhallintajärjestelmää 5 vuoden aikajänteellä Green Bookin 3,5 %:n diskonttokorolla.

```
Järjestelmä A: pääomamenot £3 500 000, käyttömenot £250 000/vuosi
Järjestelmä B: pääomamenot £1 800 000 (näyttää halvemmalta), käyttömenot £650 000/vuosi
               (raskaampi toimittajatuki ja integraatiotaakka)

Naiivi vertailu pelkillä pääomamenoilla: B voittaa, £1,8 M < £3,5 M.

Diskonttaustekijöiden summa, 5 vuotta 3,5 %:lla: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = £4 628 750
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = £4 734 750
```

TCO kääntää naiivin päätöksen: Järjestelmä B on viiden vuoden aikana hieman kalliimpi, kun käyttökustannus on diskontattu ja summattu, koska sen käyttömenojen osuus elinkaarikustannuksesta on 62 % (2 934 750 / 4 734 750) Järjestelmän A 24 %:a vastaan — konkreettinen esimerkki löydöksestä "ylläpito on suurin osa laskusta", joka kätkeytyy kokonaan listahintoja vertailtaessa.

## Yhteys ohjelmistotekniikkaan

TCO on luku, jonka tulisi kurittaa jokaista [rakenna vs. osta](../rakenna-vs-osta-julkishallinnossa/) -päätöstä ja jokaista [teknisen velan](../tekninen-velka-julkisen-arvon-rapautumisena/) lyhennysperustelua, koska velan korko ja lykätty ylläpito ovat molemmat käyttökustannusrivejä, jotka kuuluvat samaan diskontattuun kokonaissummaan, onko niitä kukaan seurannut vai ei. Alustan tai toimittajan valintaa ehdottavien insinöörien tulisi esittää koko TCO-taulukko, ei hankintahintaa, koska hankintahinta on täsmälleen se luku, jonka varaan Green Bookin rahoitustapaus on suunniteltu estämään ministeriöitä nojaamasta yksin. TCO on myös rehellinen nimittäjä [rahalle vastine](../rahalle-vastine/) -arvioille — VFM vertaa hyötyä kustannukseen, ja aliarvioitu kustannusrivi paisuttaa jokaista liiketoimintaperustelun VFM-suhdetta.

## Sudenkuopat

- **Pelkkä pääomamenovertailu**: yksittäinen yleisin hankintavirhe — toimittajien listahintojen vertailu ilman vastaavaa käyttökustannusennustetta kullekin vaihtoehdolle.
- **Poistumis- ja migraatiokustannusten pois jättäminen**: sopimuksen päättyessä tapahtuva datan poiminta, uudelleenalustointi ja toimittajalukitusseuraamukset ovat todellisia TCO-rivejä, jotka harvoin esiintyvät alkuperäisessä liiketoimintaperustelussa.
- **Tietoturva- ja vaatimustenmukaisuuskustannusten pois jättäminen**: päivitystahti, akkreditoinnin uusiminen ja auditointikustannus kasvavat järjestelmän iän ja monimutkaisuuden mukana — ks. [julkisen sektorin kyberturvallisuuden arvo](../julkisen-sektorin-kyberturvallisuuden-arvo/) — ja ne jätetään rutiininomaisesti pois käyttömenoennusteesta.
- **Diskonttaamaton vertailu vaihtoehtojen välillä, joilla on eri kustannusprofiilit**: pääomavaltaisen vaihtoehdon vertaaminen käyttömenovaltaiseen ilman diskonttausta suosii järjestelmällisesti sitä vaihtoehtoa, joka sattuu lykkäämään enemmän kustannusta myöhempiin vuosiin.

## Lähteet

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
