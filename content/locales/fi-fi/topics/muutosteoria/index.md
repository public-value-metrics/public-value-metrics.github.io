# Muutosteoria

Muutosteoria (theory of change) on nimenomainen, taaksepäin kartoitettu syy-seuraus-polku pitkän aikavälin tavoitteesta niihin edellytyksiin ja toimintoihin, joiden on oltava olemassa tavoitteen saavuttamiseksi, sekä oletuksiin, jotka yhdistävät kunkin lenkin. Se rakennetaan aloittamalla halutusta tuloksesta ja kysymällä toistuvasti "minkä on oltava totta välittömästi ennen tätä, jotta tämä tapahtuisi?", kunnes päästään toimintoihin, jotka voi todella toteuttaa — mikä on [logiikkamallin](../logiikkamalli/) vastakkainen suunta, ja siksi nämä kaksi täydentävät toisiaan eivätkä ole vaihdettavissa.

## Miksi tällä on merkitystä

Taaksepäin kartoittamisen menetelmän muodollistivat Center for Theory of Change ja ActKnowledge, rakentaen arvioija Carol Weissin työlle ohjelmaoletusten tekemisestä näkyviksi, jotta niitä voitaisiin testata eikä niihin tarvitsisi uskoa sokeasti. Brittiläinen avustusten arviointi on omaksunut tämän suoraan: HM Treasuryn Magenta Book pitää muutosteoriaa kaiken arviointisuunnittelun lähtökohtana, ja rahoittajat kuten National Lottery Community Fund edellyttävät hakijoilta sen esittämistä ennen kuin rahoittavat ehdotuksen. Ohjelmistoinsinöörille se on tärkeä, koska muutosteoria on dokumentti, jonka tulisi määrätä, mitä järjestelmän on mitattava — jos syy-seuraus-ketju sanoo "etuuksien hakeminen riippuu siitä, että hakijat saavat henkilökohtaisen laskelman", se on testattavissa oleva väite, jonka tueksi tai kumoamiseksi tuote voidaan instrumentoida.

## Matematiikka

Muutosteoria on rakenteellinen, ei numeerinen. Jokaisella lenkillä tulisi olla sekä oletus että indikaattori, joka voisi osoittaa oletuksen vääräksi:

```
Pitkän aikavälin tulos (tavoite)
  ↑ edellytys + oletus + indikaattori
Välitulos N
  ↑ edellytys + oletus + indikaattori
  ...
Välitulos 1
  ↑ edellytys + oletus + indikaattori
Toiminnot / interventiot
  ↑ sidotut resurssit
Panokset
```

Tämä rakenne syöttää suoraan [vaikuttavuuden arviointimenetelmiä](../vaikuttavuuden-arviointimenetelmät/), jotka on olemassa testaamaan, pitävätkö kunkin lenkin oletukset todella paikkansa, ja [kontrafaktuaalianalyysiä](../kontrafaktuaalianalyysi/), joka testaa, olisiko pitkän aikavälin tulos tapahtunut joka tapauksessa.

## Työstetty esimerkki

**Paikallisviranomainen (asunnottomuuden ehkäisy)**: pitkän aikavälin tulos on pysyvät vuokrasuhteet 12 kuukauden kohdalla häätöuhan alla oleville kotitalouksille.

- Edellytys: kotitalouksilla on realistinen, kohtuuhintainen maksusuunnitelma vuokrarästeille.
  Oletus: sosiaalityöntekijän neuvottelemat suunnitelmat ovat kestävämpiä kuin tuomioistuimen määräämät.
  Indikaattori: kuinka monta prosenttia suunnitelmista on yhä voimassa 6 kuukauden kohdalla.
- Edellytys: kotitaloudet hakevat etuudet, joihin heillä on oikeus.
  Oletus: digitaalinen etuuslaskuri lisää oikeita hakemuksia paperilomakkeisiin verrattuna.
  Indikaattori: hakemusten oikeellisuusaste, verrattuna ennen/jälkeen työkalun käyttöönoton.
- Toiminnot: sosiaalityöntekijän triage, digitaalinen etuuslaskuri, rästien neuvottelu.

120 kotitalouden pilottikohortissa etuuslaskurioletus piti 102 kotitaloudella (85 %), jotka hakivat sen jälkeen oikein, mistä saatiin näyttöä jälkikäteisessä prosessiarvioinnissa — antaen ohjelmatiimille näyttöä juuri tästä lenkistä yksittäisen, päästä päähän ulottuvan väitteen sijaan ehkäistystä asunnottomuudesta.

**Hyväntekeväisyysjärjestö (nuorten mentorointi)**: pitkän aikavälin tulos on vähentyneet koulusta erottamiset. Taaksepäin kartoitetut edellytykset: parantunut tunteidensäätely → luotettu henkilökohtainen suhde mentoriin → johdonmukainen viikoittainen kontakti kahden lukukauden ajan. Teoria tekee nimenomaiseksi, että "johdonmukaisen viikoittaisen kontaktin" edellytyksen puuttuminen (esimerkiksi mentorien vaihtuvuuden vuoksi) ennustaa, ettei tulos seuraa, mikä on testattava, kumottavissa oleva väite eikä toive.

## Yhteys ohjelmistotekniikkaan

Muutosteorian tulisi muokata tuotteen datamallia ennen kuin yhtäkään kojelautaa on rakennettu: tunnista, mille lenkeille tarvitaan indikaattori, ja instrumentoi nimenomaan niitä sen sijaan, että kirjaisit sen, mikä on helpointa. Se myös kurittaa tiekarttakeskusteluja — ominaisuus, joka ei vastaa mitään ketjun lenkkiä, ei ole ilmeisesti rakentamisen arvoinen. Ks. [logiikkamalli](../logiikkamalli/) eteenpäin suuntautuvasta vastuuketjusta, joka rakennetaan, kun teoriasta on sovittu, [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) menetelmästä, joka tarvitsee muutosteorian rajatakseen, mitkä tulokset arvotetaan, ja [tulokset vs. suoritteet](../tulokset-vs-suoritteet/) erottelusta, jonka varassa välitulosten lenkit ovat.

## Sudenkuopat

- **Sekoittaminen logiikkamalliin.** Muutosteoria on kausaalinen ja selittävä (miksi uskomme tämän toimivan); logiikkamalli on peräkkäinen ja kuvaileva (mitä tapahtuu missä järjestyksessä). Vain toisen tuottaminen jättää puuttumaan joko "miksi":n tai vastuujäljen.
- **Oletusten jättäminen implisiittisiksi.** Taaksepäin kartoittamisen koko arvo on testattavien oletusten esiin tuominen; muutosteoria, joka vain luettelee laatikoita ja nuolia nimeämättä, mikä voisi tehdä kunkin lenkin vääräksi, on koristetta.
- **Sen rakentaminen kerran ja hyllyttäminen.** Rahoitushakemusta varten kirjoitettu muutosteoria, jota ei koskaan käydä uudelleen läpi, lakkaa olemasta hyödyllinen heti kun näyttö alkaa ristiriidassa jonkin lenkin kanssa.
- **Sidosryhmien panoksen ohittaminen.** Muutosteoria, jonka tilaajat rakentavat kokonaan ilman etulinjan henkilöstön tai edunsaajien panosta, koodaa yleensä oletuksia, joihin kukaan palvelua toimittava ei oikeasti usko.

## Lähteet

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), luku 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, muutosteoriaa koskeva ohjeistus. <https://www.tnlcommunityfund.org.uk/>
