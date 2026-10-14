# Julkisen sektorin kyberturvallisuuden arvo

Julkisen sektorin kyberturvallisuuden arvo on riskinvähennyksen hinnoittelun kuri: mitä on arvoltaan tehdä kansalaisdatan tietomurrosta epätodennäköisempi, kun otetaan huomioon, että turvallisuusmenot eivät tuota näkyvää tuotosta silloin, kun ne toimivat, ja hyvin näkyvän silloin, kun ne epäonnistuvat? Palvelulle, joka säilyttää etuustietoja, terveystietoja tai verotietoja, tämä "näkymätön toimiessaan" -ominaisuus on täsmälleen syy, miksi se tarvitsee nimenomaisen arvoperustelun, ei vain vaatimustenmukaisuusruksia.

## Miksi tällä on merkitystä

Ison-Britannian National Cyber Security Centren Cyber Assessment Framework (CAF) antaa julkisen sektorin organisaatioille jäsennellyn tavan tehdä turvallisuudesta arvioitava, tulosperusteinen kuri tarkistuslistan sijaan: se määrittelee neljä korkean tason tavoitetta (turvallisuusriskin hallinta, suojautuminen kyberhyökkäyksiltä, kyberturvallisuustapahtumien havaitseminen ja häiriöiden vaikutusten minimointi), jaettuna myötävaikuttaviin tuloksiin, joita vastaan järjestelmän omistajaa voidaan arvioida, samassa hengessä kuin [digitaalisen palvelun standardin](../digitaalisen-palvelun-standardi/) kohta 9 ("luo turvallinen palvelu, joka suojaa käyttäjien yksityisyyttä"). Sillä, mitä CAF-arviointi suojaa vastaan, on dokumentoitu hintalappu: IBM:n Cost of a Data Breach Report seuraa tietomurron keskimääräistä kustannusta sektoreittain ja on johdonmukaisesti havainnut julkisen sektorin olevan vaihteluvälin alapäässä rahoitukseen tai terveydenhuoltoon verrattuna — viimeaikaiset painokset asettavat julkisen sektorin keskiarvon noin $2,6–2,9 miljoonaan murtoa kohti — mutta "alempi kuin rahoitus" ei ole "matala", ja valtionhallinnon tietomurroilla on kustannuksia, joita raportin luvut eivät täysin tavoita: kansalaisten luottamuksen menetys digitaalisia kanavia kohtaan, mikä heikentää [digitaalista käyttöönottoa](../kanavasiirtymän-säästöt/), josta kanavasiirtymän liiketoimintaperustelut ovat riippuvaisia, sekä poliittinen ja oikeudellinen kustannus datan paljastumisesta, jonka valtio ensin pakotti kansalaiset luovuttamaan.

## Matematiikka

Turvallisuusinvestointi arvotetaan kuten mikä tahansa riskinvähennysmeno: odotetun tappion vähennyksenä, käyttäen klassista riskienhallinnan identiteettiä.

```
Vuosittainen odotettu tappio (ALE) = Yksittäisen tapahtuman odotettu tappio (SLE)
                                    × Vuosittainen esiintymistiheys (ARO)

Turvallisuuskontrollin arvo =
  ALE_ennen_kontrollia − ALE_kontrollin_jälkeen − kontrollin vuosikustannus

Kontrolli kannattaa rahoittaa, kun:
  (ALE_ennen − ALE_jälkeen) > kontrollin vuosikustannus

CAF-arviointi ei suoraan tuota todennäköisyyttä, mutta palvelun CAF-tulosprofiili
(mitkä myötävaikuttavat tulokset ovat "saavutettu", "osittain saavutettu" tai
"ei saavutettu") on kohtuullinen korvikesyöte ARO:n arviointiin — järjestelmällä,
jolla on hallitsematon etuoikeutettu pääsy tai ei testattua häiriövastesuunnitelmaa,
on olennaisesti korkeampi realistinen ARO kuin sellaisella, jolla on molemmat.
```

## Työstetty esimerkki

**Kreivikunnan asianhallintajärjestelmä, joka säilyttää sosiaalihuollon tietoja 40 000 asukkaasta**:

```
Yksittäisen tapahtuman odotettu tappio (murron kustannus), käyttäen julkisen sektorin
keskiarvoa viimeaikaisesta IBM Cost of a Data Breach Report -raportista ≈ £2,1 milj.
(muunnettu, suuruusluokkaluku — johda aina uudelleen nykyisestä raporttipainoksesta
sen sijaan, että käyttäisit kiinteää lukua uudelleen)

Nykyinen ARO (hallitsematon etuoikeutettu pääsy, ei testattua häiriövastetta,
sisäisen CAF-itsearvioinnin mukaan, joka osoittaa useita "ei saavutettu" -tuloksia)
≈ arvioitu 8 % vuodessa
  ALE_ennen = £2,1 milj. × 0,08 = £168 000/vuosi

Ehdotettu kontrolli: etuoikeutetun pääsyn hallinta + testattu häiriövastesuunnitelma,
siirtäen asianomaiset CAF-tulokset tilaan "saavutettu", arviolta laskien ARO:n 3 %:iin/vuosi
  ALE_jälkeen = £2,1 milj. × 0,03 = £63 000/vuosi

Kontrollin vuosikustannus (työkalut + prosessi + testaus) = £45 000

Kontrollin arvo = (168 000 − 63 000) − 45 000 = £60 000/vuosi
  nettopositiivinen — rahoita se. Laskelma osoittaa myös, että kontrolli olisi
  yhä rahoittamisen arvoinen lähes kolminkertaisella kustannuksella, mikä on
  sellainen herkkyystarkistus, jonka tulisi seurata mitä tahansa arvioiduille
  todennäköisyyksille rakennettua ALE-lukua.
```

## Yhteys ohjelmistotekniikkaan

Insinöörit omistavat useimmat ALE-yhtälön vivut: pääsynhallinnan suunnittelu, riippuvuus- ja päivityshygienia, lokitus- ja havaitsemiskattavuus sekä häiriövastetyökalut liikuttavat kaikki ARO-termiä suoraan, minkä vuoksi CAF-arviointi lukeutuu teknisen arkkitehtuurikatselmuksen tavoin yhtä paljon kuin politiikka-auditointi. Tämä on [tekninen velka julkisen arvon rapautumisena](../tekninen-velka-julkisen-arvon-rapautumisena/) akuutimmassa muodossaan — päivittämättömät, valvomattomat, huonosti pääsynhallitut järjestelmät ovat velkaa, jonka korko on häntäriski, ei tasainen vetovoima — ja se tulisi täsmäyttää aiheeseen [omistamisen kokonaiskustannus valtionhallinnon IT:ssä](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/), jotta turvallisuusmenoa ei käsitellä erillisenä järjestelmän todellisista käyttökustannuksista. Se on myös suora syöte [rahalle vastine](../rahalle-vastine/) -arvioinneille Green Bookin alla: riskikorjattu kustannus on osa mitä tahansa vaihtoehtoarviointia kustannuspuolella, ei loppuun liimattu jälkiajatus.

## Sudenkuopat

- **CAF-itsearvioinnin käsitteleminen turvallisuutena itsessään**: valmistunut arviointi kuvaa turvallisuusasennetta; se ei luo sellaista — arvo on saavutetuissa tuloksissa, ei dokumentissa.
- **Globaalien keskimääräisten murtokustannusten käyttö paikallisena arviona ilman korjausta**: IBM:n luvut ovat keskiarvoja suurista, vaihtelevista otoksista; pienen paikallisviranomaisen realistinen yksittäisen tapahtuman odotettu tappio on harvoin sama kuin kansallisen valtionhallinnon ministeriön.
- **Häntäriskipsykologian sivuuttaminen investointipäätöksissä**: matala vuosittainen todennäköisyys tekee turvallisuusmenon lykkäämisen helpoksi toistaiseksi, aina siihen vuoteen asti, jona se ei ole mahdollista — ALE-laskelman herkkyystestaus eri ARO-arvoilla, kuten työstetyssä esimerkissä, vastustaa tätä.
- **Vain IBM-tyylisen murtokustannuksen laskeminen, ei luottamuskustannusta**: murto, joka heikentää kansalaisten halukkuutta käyttää digitaalisia kanavia, rapauttaa [kanavasiirtymän säästöjen](../kanavasiirtymän-säästöt/) perustelun vuosiksi eteenpäin, kustannus, jota harvoin sisällytetään murtokustannusarvioihin.

## Lähteet

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, kohta 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
