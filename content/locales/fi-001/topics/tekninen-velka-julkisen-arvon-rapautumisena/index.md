# Tekninen velka julkisen arvon rapautumisena

Tekninen velka on Ward Cunninghamin vuoden 1992 metafora aiempien oikopolkuratkaisujen implisiittisestä tulevasta kustannuksesta: **pääoma** (korjaustyö, joka on velkaa) ja **korko** (jatkuva veto, jonka se kohdistaa toimitukseen). Valtionhallinnon perinnejärjestelmäkannassa tuo korko maksetaan suoraan julkisesta arvosta — hitaampi lakisääteisten muutosten toimitus, korkeammat virheasteet kansalaisille suunnatuissa palveluissa ja pienentyvä joukko ihmisiä, jotka voivat turvallisesti koskea järjestelmään lainkaan.

## Miksi tällä on merkitystä

Suurkone- ja COBOL-aikakauden järjestelmät Ison-Britannian valtionhallinnon ministeriöissä — HMRC ja DWP useimmin mainittuina — kantavat hyvin dokumentoitua ja kasvavaa riskiä, jonka National Audit Office on toistuvasti nostanut esiin, mukaan lukien raportissaan *Digital Transformation in Government* (<https://www.nao.org.uk/>): ikääntyviä alustoja, joita on kallista muuttaa, yhä vaikeampi turvata ja jotka riippuvat erikoisosaajista, jotka eläköityvät nopeammin kuin heitä korvataan. Toisin kuin yksityisen sektorin tilausjono, tämä velka istuu suoraan kansalaisten ja heidän lakisääteisten oikeuksiensa välissä — etuuslaskentamoottori, jota ei voi turvallisesti muuttaa, on politiikan toimituksen rajoite, ei vain insinöörien hankaluus. Universal Credit -IT-ohjelman uudelleenkäynnistys vuonna 2013, kun National Audit Office havaitsi, ettei alkuperäinen rakennus tuottaisi rahalle vastinetta ja merkittävä osa ohjelmisto-omaisuudesta oli kirjattava alas, on kanoninen esimerkki hinnoittelemattomasta teknisestä velasta, joka saa kiinni elävän, ministeritasolla näkyvän julkisen ohjelman.

## Matematiikka

```
SQALE-pääoma = Σ rikkomusten yli (korjausaika) × kehittäjän kustannusaste
Teknisen velan suhde (TDR) = korjauskustannus / uudelleenkehityskustannus × 100
                    (SonarQube-arvosanat: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Korko (luku, joka oikeuttaa lyhennyksen):
  korko/vuosi = Δ toimitusnopeus × arvo nopeusyksikköä kohti
              + Δ kansalaisnäkyvä häiriöaste × kustannus häiriötä kohti
              + erikoisosaamisen preemio × vaikutettu henkilöstömäärä
Lyhennysperustelu = PV(vältetty korko aikajänteen yli) − korjauskustannus
               (diskontattuna Green Bookin sosiaalisella diskonttokorolla, ks.
               social-discount-rate.md)
```

Pääoma ilmoittaa velvoitteen; korko on se, mikä tekee investointiperustelun julkisten tilien valiokunnalle.

## Työstetty esimerkki

250 000 koodirivin vaatimuskäsittelymoottori, kirjoitettu vanhalla 4GL-kielellä. CAST Appmarq -vertailuarvoa käyttäen, noin $3,61 teknisen velan pääomaa koodiriviä kohti (≈ £2,85 tyypillisellä muunnoksella):

```
Pääoma ≈ 250 000 × £2,85 ≈ £712 500
TDR ≈ 16 % (arvosana C)
```

Mitattu korko: ministeriö pitää kolmea erikoisurakoitsijaa 40 %:n päivähintapreemiolla tavalliseen vanhempaan insinööriin verrattuna, koska talon sisäinen osaaminen on vähentynyt — ylimääräinen £180 000/vuosi kuuden hengen tiimillä. Järjestelmä aiheuttaa myös neljä suurta käsittelykatkosta vuodessa, kukin keskeyttäen päätökset noin 5 000 hakijalta ja ohjaten heidät yhteydenottokeskukseen hintaan noin £25/puhelu:

```
Korko ≈ £180 000 (osaamispreemio)
      + 4 × 5 000 × £25 = £500 000 (uudelleenohjatun kontaktin kustannus)
      ≈ £680 000/vuosi
```

Huonoimmin suoriutuvien moduulien kohdennettu korjaus maksaa £1 200 000 ja sen mallinnetaan vähentävän korkoa 70 %:lla:

```
Koron väheneminen = 0,70 × 680 000 = £476 000/vuosi
Takaisinmaksuaika ≈ 1 200 000 / 476 000 ≈ 2,5 vuotta
```

Kohdentamisella on väliä: harvoin kosketun koodin korjaaminen ei osta mitään, koska korko keskittyy sinne, missä sekä muutostiheys että velkatiheys huipentuvat.

## Yhteys ohjelmistotekniikkaan

Julkisen arvon kehystys, joka nostaa teknisen velan perustelun tasolta "koodi on vanhaa": ilmaise perinnejärjestelmäkanta varastona siitä, mihin menetetty toimituskapasiteetti on keskittynyt, ja yhdistä se nimenomaisesti [omistamisen kokonaiskustannukseen](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/), koska korko on käyttökustannus, joka kuuluu TCO-riville riippumatta siitä, onko talous koskaan pyytänyt sitä. Velkaantuneilla järjestelmillä on myös suhteettoman suuri [kyberturvallisuus](../julkisen-sektorin-kyberturvallisuuden-arvo/)-altistus, koska päivitystahti ja velkatiheys korreloivat — päivittämätön perinnejärjestelmä on tekninen velka, jonka korko maksetaan häiriöriskinä eikä punnissa. Ja jokainen korjaus-vs.-ominaisuus-vaihtokauppa on itsessään [viivästymisen kustannus](../viivästymisen-kustannus-julkisissa-ohjelmissa/) -päätös: velan lyhentäminen viivästyttää seuraavaa lakisääteistä muutosta, jolla on oma CoD, joka on punnittava säästettyä korkoa vastaan.

## Sudenkuopat

- **Pelkän pääoman raportointi**: suuri, pelottava korjausarvio ilman korkolukua ei oikeuta mitään menojen hyväksyjälle.
- **Työkalujen tuottamien velkalukujen ottaminen kirjaimellisesti**: SQALE-tyyliset skannerit laskevat sääntörikkomuksia; ne jättävät huomaamatta kalliin velan lajin — arkkitehtuuripäätökset ja dokumentoimattomat perinteiset liiketoimintasäännöt — merkiten samalla pikkuasioita.
- **"Uudelleenkirjoitus välttää kaiken tämän"**: korvausohjelmien on läpäistävä sama kuri kuin mikä tahansa muu liiketoimintaperustelu — kontrafaktuaalinen kustannus, onnistumisen todennäköisyys ja diskonttaus — ei vapautus siitä, kuten vuoden 2013 Universal Creditin uudelleenkäynnistys osoitti.
- **Nollavelan utopismi**: optimaalinen velkataso ei ole nolla; velka on vipua, joka osti aikaisemman toimituksen. Elävä kysymys on aina korkoaste, ei se, onko velkaa lainkaan.

## Lähteet

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* ja Universal Creditia koskevat raportit. <https://www.nao.org.uk/>
