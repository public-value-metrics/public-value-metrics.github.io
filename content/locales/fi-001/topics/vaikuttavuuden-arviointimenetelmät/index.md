# Vaikuttavuuden arviointimenetelmät

Vaikuttavuuden arviointimenetelmät ovat tilastollisia ja kokeellisia asetelmia, joilla estimoidaan, mitä politiikka tai ohjelma todella aiheutti, erotuksena siitä, mitä olisi tapahtunut joka tapauksessa — satunnaistetut kontrolloidut kokeet (RCT), differences-in-differences, propensiteettipisteiden vakiointi ja regressiodiskontinuiteettiasetelma ovat neljä yleisimmin käytettyä Ison-Britannian julkisessa politiikassa. Ne ovat olemassa, koska useimpia valtionhallinnon interventioita ei voi testata laboratoriossa: et voi satunnaistaa, mikä kaupunki saa uuden bussireitin, samalla tavalla kuin voit satunnaistaa, mikä potilas saa lääkkeen, joten nämä menetelmät lainaavat saman kausaalilogiikan vaatimatta aina satunnaista jakoa.

## Miksi tällä on merkitystä

HM Treasuryn Magenta Book, liite A kvasikokeellisista menetelmistä, on Ison-Britannian hallituksen kanoninen ohjeistus näiden asetelmien välillä valitsemiseen, ja elimet kuten Education Endowment Foundation ja What Works Centre for Local Economic Growth institutionalisoivat niiden ympärille rakennetun näyttöhierarkian — RCT:t, kun satunnaistaminen on toteutettavissa ja eettistä, kvasikokeelliset asetelmat, kun se ei ole. Menetelmän valinta ei ole tekninen jälkikäteisajatus: se määrää, voiko arviointi vastata kysymykseen "aiheuttiko ohjelma tämän?" vai vain kysymykseen "tapahtuiko tämä sen jälkeen, kun ohjelma alkoi?", mikä on sama kysymys, jonka [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/) on rakennettu pakottamaan ammattilaiset esittämään ennen minkään arvioinnin tilaamista.

## Matematiikka

```
RCT:
  Vaikutus = keskiarvo(tulos | hoitoryhmä) − keskiarvo(tulos | kontrolliryhmä)
  (pätevä, koska hoitoon jako on satunnaista)

Differences-in-differences (DiD):
  Vaikutus = [tulos_jälkeen(hoidettu) − tulos_ennen(hoidettu)]
           − [tulos_jälkeen(kontrolli) − tulos_ennen(kontrolli)]
  (vaatii "parallel trends" -oletuksen: hoidettu ja kontrolli olisivat liikkuneet yhdessä
   ilman interventiota)

Propensiteettipisteiden vakiointi (PSM):
  1. Estimoi P(hoito = 1 | kovariaatit X) jokaiselle yksikölle → propensiteettipiste
  2. Yhdistä hoidetut yksiköt hoitamattomiin, joilla on samankaltaiset propensiteettipisteet
  3. Vaikutus = keskiarvo(tulos | hoidettu) − keskiarvo(tulos | vastaava kontrolli)

Regressiodiskontinuiteettiasetelma (RDD):
  Vaikutus = tuloksessa havaittu hyppäys kelpoisuusrajalla,
             vertaamalla rajan juuri yläpuolella ja juuri alapuolella olevia yksiköitä
```

## Työstetty esimerkki

**Paikallisviranomainen (differences-in-differences ongelmaperheohjelmalle)**: tulos on koulun läsnäolo. Hoidettu alue siirtyy 84 %:sta 89 %:iin läsnäolossa (+5 prosenttiyksikköä) ohjelmajaksolla; vertailukelpoinen mutta hoitamaton alue siirtyy 85 %:sta 87 %:iin (+2 prosenttiyksikköä) samalla jaksolla. DiD-vaikutusestimaatti: 5 − 2 = +3 prosenttiyksikköä ohjelmalle kohdistettavissa. Sovellettuna hoidetun alueen 2 000 oppilaan kohorttiin tämä on yhdenmukainen noin 60 lisäoppilaan (3 % × 2 000) kanssa, jotka saavuttavat korkeamman läsnäololuokan — ekstrapolaatio, joka tulisi raportoida parallel trends -varauksineen, ei tarkkana henkilömääränä.

**Hyväntekeväisyysjärjestö (propensiteettipisteiden vakiointi työllistymisjärjestölle)**: 300 ohjelman osallistujaa yhdistetään 300 henkilöön suuremmasta hallinnollisesta aineistosta propensiteettipisteillä, jotka on rakennettu iästä, aiemmasta työhistoriasta ja koulutustasosta. Kahdentoista kuukauden työllisyysaste: vastaava hoidettu ryhmä 46 %, vastaava vertailuryhmä 33 %. PSM-vaikutusestimaatti: 46 % − 33 % = +13 prosenttiyksikköä ohjelmalle kohdistettavissa, ehdolla ettei havaitsematon sekoittava tekijä (kuten motivaatio) ohjaa sekä osallistumista että tulosta.

## Yhteys ohjelmistotekniikkaan

Se, onko mikään näistä asetelmista myöhemmin toteutettavissa, riippuu vahvasti varhain tehdyistä data-insinööripäätöksistä. RDD tarvitsee tarkasti kirjatun juoksevan muuttujan ja aidosti puhtaan kelpoisuusrajan; DiD tarvitsee vertailukelpoista paneelidataa ajan yli sekä hoidetuille että vertailualueille, mikä tarkoittaa johdonmukaisia liitoksia järjestelmien ja vuosien välillä; PSM tarvitsee runsasta lähtötason kovariaattidataa, joka on kerätty ennen hoitoa, ei rekonstruoitu jälkikäteen. Datamalli, joka on suunniteltu [muutosteorian](../muutosteoria/) ja [logiikkamallin](../logiikkamalli/) rinnalla alusta alkaen — tallentaen lähtötason kovariaatit, päivämäärät ja vertailuryhmään kelpaavat tietueet — tekee tiukan vaikuttavuusarvioinnin mahdolliseksi myöhemmin kalliin jälkikäteisen säntäilyn sijaan. Ks. [vaikuttavuusarviointi vs. prosessiarviointi](../vaikuttavuusarviointi-vs-prosessiarviointi/) täydentävästä kysymyksestä, johon nämä menetelmät eivät yksin vastaa.

## Sudenkuopat

- **RCT:n pakottaminen, kun se ei ole toteutettavissa tai on epäeettistä**, tai päinvastoin kvasikokeellisen asetelman harkitsematta jättäminen, kun aito mahdollisuus sellaiseen — politiikkaraja, vaiheittainen käyttöönotto — oli tarjolla ja käyttämättä.
- **Parallel trends -oletuksen sivuuttaminen DiD:ssä.** Jos vertailualue oli jo etääntymässä hoidetusta alueesta ennen interventiota, kahden pisteen vertailu on saastunut; tarkista esitrendit, älä vain ennen/jälkeen.
- **Vakiointi vain havaituilla kovariaateilla PSM:ssä.** Havaitsematon valikoituminen, kuten osallistujien motivaatio, voi vinouttaa estimaattia, vaikka havaitut kovariaatit olisivat hyvin tasapainossa.
- **Juoksevan muuttujan manipulointi RDD:ssä.** Jos ihmiset voivat vaikuttaa pisteisiinsä päästäkseen juuri kelpoisuusrajan sisäpuolelle, diskontinuiteetti ei enää eristä kausaalivaikutusta.

## Lähteet

- HM Treasury, Magenta Book (2020), liite A: Kvasikokeelliset menetelmät. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, näyttökatsausten metodologia. <https://whatworksgrowth.org/>
- Education Endowment Foundation, arviointiohjeistus. <https://educationendowmentfoundation.org.uk/>
