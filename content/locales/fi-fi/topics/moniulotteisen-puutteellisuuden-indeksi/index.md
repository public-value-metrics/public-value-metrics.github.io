# Moniulotteisen puutteellisuuden indeksi (IMD)

IMD on Englannin pienalueiden suhteellisen puutteellisuuden virallinen mittari, joka järjestää kaikki maan 32 844 Lower-layer Super Output Area -aluetta (LSOA, kukin noin 1 500 asukasta) luvusta 1 (puutteellisin) lukuun 32 844 (vähiten puutteellinen). Sitä julkaisee nykyinen Ministry of Housing, Communities and Local Government (MHCLG, aiemmin MHCLG/DCLG), viimeksi English Indices of Deprivation 2019 -julkaisuna, ja se ohjaa suoraan keskushallinnon rahoitusta, kansanterveyden priorisointia ja kymmenien paikallisten ohjelmien kelpoisuutta.

## Miksi tällä on merkitystä

Puutteellisuus ei ole yksi asia — naapurusto voi olla tuloköyhä mutta turvallinen tai tuloiltaan riittävä mutta kärsiä huonoista terveystuloksista ja huonosta asumisesta. IMD:n edeltäjäindeksit (peräisin 1970-luvun Department of the Environmentin puutteellisuusindikaattoreista) kehittyivät nykypäivän seitsemän alueen malliksi juuri siksi, että yhden indikaattorin kohdentaminen (esimerkiksi pelkkä työttömyysaste) ohitti rutiininomaisesti alueita, jotka olivat puutteellisia muilla tavoin. IMD 2019 yhdistää tulot, työllisyyden, koulutuksen, terveyden, rikollisuuden, asumisen ja palvelujen esteet sekä elinympäristön yhdeksi yhdistelmäsijoitukseksi LSOA:ta kohti, kukin alue rakennettuna omasta indikaattorikorista ja painotettuna MHCLG:n menetelmällä. Koska se toimii pienalueen (LSOA) eikä paikallisviranomaisen tasolla, se paljastaa muuten vauraiden piirien sisään kätkeytyvät puutteellisuuskeskittymät — syy, miksi IMD, ei paikallisviranomaisen keskitulo, on se, mihin NHS England, Department for Educationin oppilaspreemio ja kymmenet paikallisviranomaisten rahoituskaavat todella nojaavat. Ohjelmiston, joka määrittää kelpoisuuden, priorisoi tavoittamistyötä tai raportoi vaikutuksen alueittain Englannissa, tulisi käsitellä IMD-desiiliä tai -sijoitusta ensiluokkaisena syötteenä, ei jälkiajatuksena — ja missä ohjelma kohdistuu tarkoituksella puutteellisimpiin alueisiin, sen arvioinnin tulisi soveltaa [jakaumapainotusta](../jakaumapainotus/) kohdentamisen mukaisesti sen sijaan, että hyödyn puntaa arvotettaisiin samoin riippumatta siitä, mihin se päätyy.

## Matematiikka

```
7 aluetta, painotettuina:
  Tulot                                   22,5 %
  Työllisyys                              22,5 %
  Koulutus, taidot ja harjoittelu         13,5 %
  Terveyspuutteellisuus ja vammaisuus     13,5 %
  Rikollisuus                              9,3 %
  Asumisen ja palvelujen esteet            9,3 %
  Elinympäristö                            9,3 %

Jokainen aluepistemäärä: indikaattorit standardoidaan (järjestetään, sitten muunnetaan
kohti normaalijakaumaa) ja yhdistetään eksponentiaalisella muunnoksella niin, ettei korkea
puutteellisuus yhdellä indikaattorilla voi tulla täysin kumotuksi matalalla puutteellisuudella
muilla saman alueen sisällä.

IMD-yhdistelmäpistemäärä (LSOA) = Σ (aluepistemäärä × aluepaino)
Järjestä LSOA:t yhdistelmäpistemäärän mukaan → 1 (puutteellisin) – 32 844 (vähiten puutteellinen)
Desiilit: sijoitus ÷ 3 284 (suunnilleen), desiili 1 = puutteellisimmat 10 % LSOA:sta
```

## Työstetty esimerkki

**LSOA:n yhdistelmäpistemäärä**, käyttäen havainnollistavia standardoituja aluepistemääriä (0 = ei puutteellisuussignaalia, korkeampi = puutteellisempi):

```
Tulot                0,35 × 0,225 = 0,07875
Työllisyys           0,30 × 0,225 = 0,06750
Koulutus             0,20 × 0,135 = 0,02700
Terveys              0,15 × 0,135 = 0,02025
Rikollisuus          0,10 × 0,093 = 0,00930
Asumisen esteet      0,05 × 0,093 = 0,00465
Elinympäristö        0,08 × 0,093 = 0,00744

Yhdistelmäpistemäärä = 0,07875 + 0,06750 + 0,02700 + 0,02025
                     + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Tämä yhdistelmäpistemäärä järjestetään sitten kaikkien 32 844 LSOA:n pistemääriä vastaan. Jos se sijoittaa LSOA:n sijalle 2 950, se kuuluu desiiliin 1 (2 950 ÷ 3 284 ≈ 0,9, eli Englannin puutteellisimpiin 10 %:iin naapurustoista) — mikä monissa rahoituskaavoissa on kynnys, joka avaa kelpoisuuden riippumatta siitä, kuinka ympäröivä paikallisviranomainen pisteytyy keskimäärin.

## Yhteys ohjelmistotekniikkaan

- Mikä tahansa palvelu, joka geokoodaa käyttäjät postinumeroon tai LSOA:han, voi liittää julkaistun IMD-hakutaulukon (ilmainen, versioitu CSV MHCLG:ltä) lisätäkseen puutteellisuusdesiilin kovariaattina — tavoittamistyön kohdentamiseen, asiakasmäärän priorisointiin tai tulosten raportointiin puutteellisuusluokittain ilman uuden henkilötiedon keräämistä.
- IMD-desiili on standardi oikeudenmukaisuustarkistus julkisille digitaalisille palveluille: palvelun käytön, keskeyttämisen tai tyytyväisyyden ristiintaulukointi IMD-desiilin mukaan paljastaa pääsyaukkoja, jotka koostettu mittari kätkee — ks. [digitaalinen osallisuus](../digitaalinen-osallisuus/) ja [kansalaistyytyväisyysmittarit](../kansalaistyytyväisyysmittarit/).
- Koska IMD-sijoitus on suhteellinen (se summautuu aina kiinteään sijoitusjoukkoon Englannin yli), se ei voi osoittaa, nouseeko vai laskeeko puutteellisuus kansallisesti ajan myötä — vain mitkä alueet sijoittuvat mihinkin suhteessa toisiinsa kyseisessä painoksessa; älä rakenna absoluuttisia trendikojelautoja pelkän raa'an IMD-sijoituksen varaan.

## Sudenkuopat

- **IMD-sijoitusten vertailu painosten (2015 vs. 2019) välillä aikatrendinä** — taustalla olevat indikaattorit, maantieteet ja menetelmä muuttuvat painosten välillä; MHCLG neuvoo nimenomaisesti olemaan käyttämättä sijoitusmuutoksia näyttönä siitä, että alue on tullut enemmän tai vähemmän puutteelliseksi.
- **LSOA-tason IMD:n soveltaminen yksilöihin** — desiilin 1 LSOA sisältää yhä ei-puutteellisia kotitalouksia, ja desiilin 10 LSOA sisältää yhä puutteellisia; IMD kuvaa alueita, ei ihmisiä, ja sen käyttö yksilön kelpoisuuden korvikkeena luokittelee väärin molempiin suuntiin.
- **Aluetason yksityiskohtien sivuuttaminen yhdistelmäsijoituksen hyväksi** — kahdella LSOA:lla, joilla on identtiset yhdistelmäpistemäärät, voi olla täysin erilaiset alueprofiilit (toinen terveyspuutteellinen, toinen rikollisuuspuutteellinen); yhteen ongelmaan tähtäävän kohdentamisjärjestelmän tulisi käyttää asianomaista aluepistemäärää, ei sekoitettua yhdistelmää.

## Lähteet

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
