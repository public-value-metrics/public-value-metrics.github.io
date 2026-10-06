# Luonnonpääoman kirjanpito

Luonnonpääoman kirjanpito asettaa ympäristön samalle viivalle kuin minkä tahansa muun kansallisen tai organisaation omaisuuserän: se mittaa luonnonvarojen kannan (metsät, maaperät, joet, kosteikot, ilmakehä) ja niiden tuottamien palvelujen virran (hiilen sidonta, tulvasuoja, virkistys, ruoka) sekä fyysisinä että rahamääräisinä, jotta ympäristön ehtyminen näkyy päätöksenteossa samalla tavalla kuin rahoituspääoman kuluttaminen. Iso-Britannia on yksi pisimmälle edenneistä hallituksista tämän systemaattisessa tekemisessä, sen ajurina 25 Year Environment Plan (2018) ja toteuttajina ONS:n UK Natural Capital -tilit ja HM Treasuryn Green Bookin täydentävä ohjeistus.

## Miksi tällä on merkitystä

Perinteinen kirjanpito — yritysten ja hallitusten — kohtelee metsää arvottomana, kunnes se kaadetaan ja myydään puutavarana, jolloin siitä tulee BKT:tä. Luonnonpääoman kirjanpito on olemassa sulkeakseen tuon aukon: Ison-Britannian 25 Year Environment Plan velvoitti hallituksen upottamaan luonnonpääoma-ajattelun politiikkaan laajasti, ilmoittaen nimenomaisesti tavoitteen olla "ensimmäinen sukupolvi, joka jättää ympäristön paremmassa kunnossa kuin löysimme sen." ONS on sittemmin julkaissut vuosittaiset UK Natural Capital -tilit (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), jotka arvioivat ekosysteemipalvelujen rahamääräisen arvon — metsävirkistyksestä kaupunkien viheralueiden terveyshyötyihin ja turvemaiden hiilivarastointiin — käyttäen samaa kansantalouden tilinpidon viitekehystä kuin tuotetulle pääomalle, jotta luonnonpääoma voi lopulta olla samassa taseessa kuin tiet, rakennukset ja laitteet. HM Treasuryn Enabling a Natural Capital Approach (ENCA) -ohjeistus, Green Bookin täydentävä (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), esittää, miten arvioijien tulisi arvottaa ympäristökustannukset ja -hyödyt liiketoimintaperusteluissa, jotta muinaisen metsän tuhoava tiehanke tai kosteikon ennallistava tulvahanke voidaan vertailla johdonmukaisin rahamääräisin ehdoin sen sijaan, että toisella on luku ja toisella kappale varaumia.

## Matematiikka

```
Ekosysteemipalveluomaisuuden arvo = omaisuuserän tarjoamien palvelujen virran NPV

Omaisuuden arvo = Σ (t = 1…T) [vuotuisen palveluvirran arvo_t / (1 + r)^t]

missä:
  palveluvirran arvo_t = palvelun määrä vuonna t × yksikköarvo
                          (esim. virkistyskäynnit × arvo käyntiä kohti;
                           sidotut hiilidioksiditonnit × hiilen hinta)
  r = diskonttokorko (Green Bookin sosiaalinen diskonttokorko — ks.
      [sosiaalinen diskonttokorko](../sosiaalinen-diskonttokorko/))
  T = aikajänne, jonka yli omaisuuserän odotetaan tarjoavan palvelun
```

Tämä on identtinen nettonykyarvorakenne kuin mitä käytetään tuotetun pääoman arvottamiseen tai minkä tahansa julkisen investoinnin arviointiin [Green Book -arvioinnin](../green-book-arviointi/) alla — luonnonpääoman kirjanpidon panos on uskottavien fyysisten määrien ja yksikköarvojen toimittaminen palveluille, jotka aiemmin hinnoiteltiin nollaan.

## Työstetty esimerkki

**Kaupunkimetsä, virkistysarvo**: 50 hehtaarin metsä saa arviolta 80 000 virkistyskäyntiä vuodessa, kukin arvotettuna (matkakustannus- tai ilmaistujen preferenssien menetelmällä — ks. [paljastettujen preferenssien arvottaminen](../paljastettujen-preferenssien-arvottaminen/) ja [ilmaistujen preferenssien arvottaminen](../ilmaistujen-preferenssien-arvottaminen/)) £3:ksi käyntiä kohti. Metsän odotetaan tarjoavan tätä palvelua 50 vuotta, arvioituna 3,5 %:n diskonttokorolla.

```
Vuotuinen virkistysarvo = 80 000 × £3 = £240 000/vuosi

NPV 50 vuoden yli 3,5 %:lla ≈ £240 000 × annuiteettitekijä(3,5 %, 50 vuotta)
annuiteettitekijä(3,5 %, 50) ≈ 21,4

Omaisuuden arvo ≈ £240 000 × 21,4 ≈ £5 136 000
```

**Hiilen varastoinnin lisääminen**: sama metsä sitoo arviolta 400 tonnia CO2:ta vuodessa, arvotettuna hallituksen ei-kaupattavan sektorin hiilen hinnalla, joka on noin £75/tonni (havainnollistava — käytä nykyisiä BEIS/DESNZ:n julkaisemia hiiliarvoja todellisessa arvioinnissa).

```
Vuotuinen hiilen arvo = 400 × £75 = £30 000/vuosi
NPV 50 vuoden yli 3,5 %:lla ≈ £30 000 × 21,4 ≈ £642 000

Metsän kokonaisomaisuusarvo (virkistys + hiili) ≈ £5 136 000 + £642 000
                                                 ≈ £5 778 000
```

Tämä on ennen tulvanvaimennuksen, biodiversiteetin tai ilmanlaatupalvelujen lisäämistä, joita ENCA-ohjeistus myös pyytää arvioijia harkitsemaan — kokonaissumma on tarkoituksella lattia, ei katto.

## Yhteys ohjelmistotekniikkaan

- Paikallisviranomaisten ja virastojen ympäristö- ja omaisuudenhallintajärjestelmät (puistot, valtatiet, vesistöt) voivat liittää luonnonpääomarekisterin fyysisen omaisuusrekisterinsä rinnalle, käyttäen samaa palveluvirta-kertaa-yksikköarvo-mallia kuin mikä tahansa muu [yksikkökustannustietokanta](../yksikkökustannustietokannat/), jota organisaatio ylläpitää.
- Koska luonnonpääoman NPV on herkkä diskonttokorolle (ks. työstetyn esimerkin annuiteettitekijä), minkä tahansa sitä laskevan työkalun tulisi tuoda korko ja aikajänne näkyviksi syötteiksi, ei haudata niitä — sama läpinäkyvyysperiaate, joka on käsitelty aiheessa [sukupolvien välinen oikeudenmukaisuus ja kestävyysdiskonttaus](../sukupolvien-välinen-oikeudenmukaisuus-ja-kestävyysdiskonttaus/).
- Luonnonpääomatilit ovat yhä useammin vaadittu syöte [Green Book -arvioinnin](../green-book-arviointi/) liiketoimintaperustelun ympäristövaikutusosioihin; liiketoimintaperustelutyökaluja rakentavan toimitustiimin tulisi käsitellä ONS:n tilejä ja ENCA:n yksikköarvoja integroitavana viitedatana, ei jonakin, mitä arvioijat laskevat uudelleen tyhjästä joka kerta.

## Sudenkuopat

- **Päällekkäisten ekosysteemipalvelujen kaksoislaskenta** — saman kohteen virkistysarvo ja biodiversiteettiarvo voivat jakaa taustalla olevan maksuhalukkuusdatan; ENCA-ohjeistus varoittaa nimenomaisesti summaamasta päällekkäisistä kyselyvälineistä johdettuja arvotuksia.
- **Luonnonpääoman omaisuusarvon käsitteleminen staattisena** — palveluvirrat muuttuvat ilmaston, hoidon ja maankäyttöpaineen mukana; metsän hiili- ja tulvanvaimennusarvo tällä vuosikymmenellä ei ole kohteen pysyvä ominaisuus.
- **Kansallisten keskimääräisten yksikköarvojen käyttö hyvin paikalliseen päätökseen** — hehtaari saavutettavaa kaupunkimetsää ja hehtaari syrjäistä ylänköä ovat virkistysarvoltaan hyvin erilaisia; ENCA-ohjeistus suosittelee paikallisia tai kohdekohtaisia arvoja, kun niitä on saatavilla, sen sijaan että oletettaisiin kansalliset keskiarvot.

## Lähteet

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
