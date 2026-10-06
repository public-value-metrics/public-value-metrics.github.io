# Moniulotteisen köyhyyden indeksi (MPI)

MPI mittaa köyhyyttä päällekkäisinä puutteina, joita henkilö kokee samanaikaisesti — terveydessä, koulutuksessa ja elintasossa — sen sijaan, että köyhyys olisi pelkästään tulo, joka jää rajan alle. Sen kehitti Oxford Poverty and Human Development Initiative (OPHI) yhdessä Sabina Alkiren ja James Fosterin kanssa, ja sitä on julkaistu yhdessä UNDP:n kanssa jokaisessa Human Development Reportissa vuodesta 2010, [inhimillisen kehityksen indeksin](../inhimillisen-kehityksen-indeksi/) rinnalla.

## Miksi tällä on merkitystä

Tuloköyhyysrajat ohittavat ihmiset, joilla on riittävästi käteistuloa mutta joilta puuttuu puhdas vesi, koulunkäynti tai jotka ovat kokeneet lapsen kuoleman — ja ne ohittavat sen tosiasian, että puutteet kasautuvat: kotitalous, jolla ei ole sähköä, on suhteettoman todennäköisesti myös vailla sanitaatiota ja sillä on aliravittu lapsi. Alkire–Foster-menetelmä, jonka varaan MPI on rakennettu, laskee jokaisen henkilön puutteet kymmenen indikaattorin yli, jotka on ryhmitelty kolmeen yhtä painotettuun ulottuvuuteen — terveys, koulutus, elintaso — ja luokittelee jonkun "MPI-köyhäksi" vain, jos hänen painotettu puutepistemääränsä ylittää kiinteän kynnyksen, tavoittaen päällekkäisyyden, jota joukko erillisiä yhden indikaattorin tilastoja ei voi. OPHI julkaisee täydellisen menetelmän ja maakohtaisen datan osoitteessa <https://ophi.org.uk/multidimensional-poverty-index/>; globaali MPI, jota se ylläpitää yhdessä UNDP:n kanssa, kattaa nyt yli 110 maata. Köyhyydenvastaisille ohjelmille — käteissiirrot, sosiaalihuollon triage, avun kohdentaminen — rakennetulle ohjelmistolle MPI:n indikaattorijoukko on usein lähin asia standardoituun puutekaavioon, joka on jo validoitu kymmenien kansallisten tilastotoimistojen yli.

## Matematiikka

```
10 indikaattoria, 3 ulottuvuutta, kukin ulottuvuus painotettu 1/3:

Terveys (1/3):            ravitsemus (1/6), lapsikuolleisuus (1/6)
Koulutus (1/3):           koulunkäyntivuodet (1/6), koulunkäynti (1/6)
Elintaso (1/3):           ruoanlaittopolttoaine, sanitaatio, juomavesi,
                          sähkö, asuminen, omaisuus (1/18 kukin)

puutepistemäärä (c) = niiden indikaattorien painojen summa, joissa henkilöllä on puute

henkilö on "MPI-köyhä", jos c ≥ 1/3 (köyhyyden rajaarvo, k = 33 %)

H (köyhien osuus)     = MPI-köyhien määrä / koko väestö
A (intensiteetti)     = keskimääräinen puutepistemäärä vain MPI-köyhien joukossa

MPI = H × A
```

Koska MPI kertoo köyhien *osuuden* sillä, *kuinka* köyhiä he ovat, kahdella alueella, joilla on sama köyhien osuus, voi olla hyvin erilaiset MPI-pistemäärät, jos puutteet ovat vakavampia toisella — sama "ei korvaavuutta ulottuvuuksien välillä" -logiikka kuin HDI:n geometrisen keskiarvon takana.

## Työstetty esimerkki

**Kansallinen 1 000 henkilön kysely**: 350 tunnistetaan moniulotteisesti köyhiksi (puutepistemäärä ≥ 33 %). Pelkästään näiden 350 köyhän joukossa keskimääräinen puutepistemäärä on 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Kahden samanlaisen köyhien osuuden alueen vertailu**: Alueella A H = 0,30 ja A = 0,40 (paljon köyhiä, kohtalaisen vajavaisia); Alueella B H = 0,30 ja A = 0,60 (sama määrä köyhiä, mutta vakavammin vajavaisia — heiltä puuttuu sähkö *ja* sanitaatio *ja* koulunkäynti samanaikaisesti).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Sama köyhien osuus, 50 % korkeampi MPI alueella B — pelkkään köyhien osuuteen perustuva kohdentamisjärjestelmä järjestäisi kaksi aluetta identtisesti ja jättäisi huomaamatta, että alue B tarvitsee syvempää interventiota.

## Yhteys ohjelmistotekniikkaan

- Sosiaaliohjelmien asianhallinta- ja kelpoisuusjärjestelmät tallentavat usein jo useita kymmenestä indikaattorista (asuminen, koulunkäynti, terveysmerkit) erillisissä siiloissa; Alkire–Foster-laskentamenetelmä on valmis skeema niiden yhdistämiseksi yhdeksi puutepistemääräksi sen sijaan, että rakennettaisiin räätälöity pisteytysmalli tyhjästä.
- Köyhien osuuden/intensiteetin jako (H × A) on yleisesti hyödyllinen malli mille tahansa kojelaudalle, joka raportoi "kuinka moneen vaikutetaan" yhdessä "kuinka pahasti" kanssa — molempien romahduttaminen yhdeksi luvuksi, kuten raa'at esiintyvyystilastot tekevät, kätkee juuri sen tapauksen, joka tarvitsee eniten resursseja.
- MPI-tyyliset indikaattorikojelaudat sopivat luontevasti yhteen [kustannus edunsaajaa kohti](../kustannus-edunsaajaa-kohti/) -raportoinnin kanssa köyhyydenvastaisille ohjelmille: kustannus MPI-pistettä kohti on puolustettava yksikkö hyvin erilaisten interventioiden (käteissiirto vs. sanitaatioinfrastruktuuri) vertailuun.

## Sudenkuopat

- **Kymmenen indikaattorin käsitteleminen universaaleina** — OPHI:n globaalit MPI-indikaattorit on kalibroitu maiden väliseen vertailukelpoisuuteen; kansalliset MPI:t (monet maat, mukaan lukien useat Etelä-Aasiassa ja Afrikassa, julkaisevat omansa) mukauttavat indikaattoreita ja painoja paikalliseen kontekstiin, eikä näitä kahta voi suoraan verrata.
- **Pelkän H:n raportointi** — köyhien osuus sivuuttaa intensiteetin kokonaan; raportoi tai laske aina A sen rinnalla tai itse MPI.
- **Oletus, että MPI-köyhät ja tuloköyhät ovat sama väestö** — OPHI:n omat maaraportit osoittavat tyypillisesti vain osittaisen päällekkäisyyden näiden kahden välillä; ohjelma, joka kohdistuu vain tuloköyhiin, jättää järjestelmällisesti huomaamatta merkittävän osan moniulotteisesti köyhistä.

## Lähteet

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (vuosiraportti).
