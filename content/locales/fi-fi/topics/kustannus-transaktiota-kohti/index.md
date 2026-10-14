# Kustannus transaktiota kohti

Kustannus transaktiota kohti on valtionhallinnon digitaalisen palvelun keskeinen yksikkötalousmittari: kanavan toimituksen kokonaiskustannus jaettuna sen kautta suoritettujen transaktioiden määrällä. Se oli vanhan GOV.UK Performance Platformin lippulaivaluku, ja se on luku, joka rahoitti vuosikymmenen "digital by default" -investoinnit — mikä on täsmälleen syy, miksi se on myös mittari, jota manipuloidaan todennäköisimmin.

## Miksi tällä on merkitystä

Cabinet Officen vuoden 2012 Digital Efficiency Report esitti kanavakustannusvertailun muodossa, joka jäi mieleen: digitaaliset transaktiot havaittiin noin 20 kertaa halvemmiksi kuin puhelimitse ja noin 50 kertaa halvemmiksi kuin kasvokkain, havainnollistavin paikallishallinnon luvuin noin £0,15 verkkotransaktiota kohti vs. £2,83 puhelimitse ja £8,62 kasvokkain. Tuo yksittäinen vertailu muodostui perusteluksi Government Digital Strategyssä nimettyjen 25 esimerkkipalvelun uudelleensuunnittelulle ja jokaiselle ministeriön liiketoimintaperustelulle, joka on sittemmin siteerannut kanavasiirtymän säästöjä. Luku on aidosti hyödyllinen suuruusluokkasignaalina, mutta suhde riippuu täysin siitä, mitä kummallakin puolella lasketaan: oikeudenmukainen puhelinkanavan kustannus sisältää puhelinkeskuksen henkilöstön, puhelinsopimuksen, koulutuksen ja tilat; oikeudenmukainen digitaalinen kustannus sisältää hostauksen, jatkuvat tuotetiimin palkat, tukipalvelun ajan epäonnistuneille poluille ja [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) kohdan 5 edellyttämän avustetun digitaalisen kanavan. Poista näistä riittävästi digitaalisen puolen laskelmasta, ja mikä tahansa palvelu näyttää halvalta.

## Matematiikka

```
Kustannus transaktiota kohti = kohdennettu kanavan kokonaiskustannus / suoritetut transaktiot

Kohdennetun kanavan kokonaiskustannuksen tulisi sisältää:
  + hostaus ja infrastruktuuri
  + tuote-/insinööri-/tukitiimin kustannus (poistettuna)
  + sisällön ja palvelumuotoilun kustannus (poistettuna)
  + avustetun digitaalisen / saavutettavuustuen kustannus
  + vikakysynnän kustannus (käyttäjät, jotka epäonnistuvat digitaalisesti ja turvautuvat puhelimeen)
  − kertaluonteinen rakennuskustannus poistetaan palvelun odotetun elinkaaren yli,
    ei kirjata kokonaan ensimmäisen vuoden kuluksi

Yleinen kirjanpitotemppu:
  "Marginaalikustannus transaktiota kohti" (vain hostaus, kun palvelu on rakennettu)
  siteerataan ikään kuin se olisi "keskimääräinen kustannus transaktiota kohti"
  (kokonaiskustannus, mukaan lukien tiimi, joka jatkaa sen rakentamista ja ylläpitoa).
  Nämä kaksi voivat erota 10-kertaisesti tai enemmän palvelulle, jolla on suuri,
  aktiivinen toimitustiimi.
```

## Työstetty esimerkki

**Ajoneuvoveron uusimispalvelu**: 4 miljoonaa transaktiota/vuosi.

```
Pelkkä marginaaliluku (temppu):
  Vain hostaus + maksunkäsittely = £180 000/vuosi
  Kustannus transaktiota kohti = 180 000 / 4 000 000 = £0,045
  → liiketoimintaperustelussa siteerattu otsikkoluku

Täysin kuormitettu luku (rehellinen):
  Hostaus + maksu                      £180 000
  Tuote-/insinööritiimi (8 htv)        £720 000
  Tukipalvelu (epäonnistuneet/kyselyt) £310 000
  Avustettu digitaalinen puhelinlinja  £140 000
  Yhteensä                             £1 350 000
  Kustannus transaktiota kohti = 1 350 000 / 4 000 000 = £0,3375

Täysin kuormitettu luku on yhä noin 8 kertaa halvempi kuin Digital Efficiency Reportin
£2,83 puhelinkanavan vertailukohta — todellinen ja puolustettava säästö — mutta
7,5 kertaa korkeampi kuin oikotiessä siteerattu pelkkä marginaaliluku. Molemmat luvut
ovat "tosia"; vain toinen on vertailukelpoinen puhelinkanavan kustannuksen kanssa,
jota vastaan se asetetaan.
```

## Yhteys ohjelmistotekniikkaan

Kustannus transaktiota kohti on se paikka, jossa arkkitehtuuripäätöksistä tulee talousluku: palvelu, joka skaalautuu siististi ja tarvitsee vähän manuaalista väliintuloa, laskee tätä lukua ajan myötä; sellainen, joka tuottaa suuria tukipyyntömääriä hämmentävistä virhetiloista, nostaa sitä hostaustehokkuudesta riippumatta. Se on luonteva kumppanimittari [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) kohdalle 10 ("määritä, miltä menestys näyttää, ja julkaise suorituskykydata") ja aiheelle [palvelustandardit ja transaktiomittarit](../palvelustandardit-ja-transaktiomittarit/), joka esittää laajemman KPI-joukon, jonka sisällä tämä luku on. Se syöttää myös suoraan [kanavasiirtymän säästöjen](../kanavasiirtymän-säästöt/) laskelmia ja tulisi täsmäyttää [omistamisen kokonaiskustannukseen valtionhallinnon IT:ssä](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/), jotta alusta- ja jaettujen palvelujen yleiskustannuksia ei hiljaa pudoteta.

## Sudenkuopat

- **Marginaalikustannus keskimääräisenä kustannuksena**: pelkän hostauskustannuksen siteeraaminen palvelun valmistuttua, jättäen pois jatkuvan tiimin, joka ylläpitää, iteroi ja tukee sitä — ks. työstetty esimerkki yllä.
- **Avustetun digitaalisen kustannuksen pois jättäminen**: kanava ei ole "digital by default" -vaatimusten mukainen, eikä sen todellista kustannusta ole tavoitettu, jos [digitaalisen osallisuuden](../digitaalinen-osallisuus/) edellyttämä puhelin-/paperivarakanava kustannetaan erikseen tai sivuutetaan.
- **Vikakysynnän sivuuttaminen**: transaktiot, jotka alkavat digitaalisesti ja epäonnistuvat, tuottaen silti puhelun tai paperilomakkeen, ovat digitaalisen kanavan kustannus, eivät sen kanavan, joka ottaa epäonnistumisen kiinni.
- **Eri monimutkaisuuden transaktioiden vertailu kanavien välillä**: puhelut käsittelevät suhteettomasti vaikeita tapauksia (useita huollettavia, virheenkorjaus, haavoittuvat hakijat); keskimääräisen puhelukustannuksen vertaaminen keskimääräiseen digitaaliseen kustannukseen liioittelee suhdetta, ellei transaktiomixiä ole täsmätty.

## Lähteet

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, kohta 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
