# Yksikkökustannustietokannat

Yksikkökustannustietokanta on kirjasto valmiiksi tutkittuja, näyttöön perustuvia rahamääräisiä korvikkeita yhteiskunnallisille tuloksille — työttömyydestä työllistymiseen siirtymisen arvo, vähentyneen yksinäisyyden arvo, vakaan vuokrasuhteen arvo — joiden avulla ammattilainen voi rahamääräistää tuloksen tilaamatta räätälöityä arvotustutkimusta joka kerta. Ne ovat olemassa, jotta rahoitushakemusta kirjoittava pieni hyväntekeväisyysjärjestö voi soveltaa samaa tarkkuutta kuin hyvin resursoitu konsulttitoimisto, käyttämällä uudelleen korviketta, jonka joku muu on jo johtanut ja julkaissut.

## Miksi tällä on merkitystä

HACT:n UK Social Value Bank, kehitetty taloustieteilijä Daniel Fujiwaran kanssa hyvinvoinnin arvotusmenetelmillä, ja Global Value Exchange, avoin, joukkoistettu rahamääräisten korvikkeiden tietokanta, ovat kaksi laajimmin käytettyä Ison-Britannian kolmannella ja julkisella sektorilla. Molemmat ovat olemassa, koska taustalla oleva arvotustyö — [hyvinvoinnin arvottaminen](../hyvinvoinnin-arvottaminen/) ja [ilmaistujen preferenssien arvottaminen](../ilmaistujen-preferenssien-arvottaminen/) — on kallista, menetelmällisesti vaativaa ja hidasta suorittaa alusta jokaiselle hankkeelle. Jaettu, julkaistu korvikekirjasto muuttaa usean kuukauden tutkimusharjoituksen hakuoperaatioksi, mikä on juuri se syy, miksi ne ovat tärkeitä sekä [yhteiskunnallisen sijoitetun pääoman tuoton](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) laskelmille että [Social Value Act](../yhteiskunnallisen-arvon-laki/) -tarjousten arvioinneille: ilman niitä tiukka rahamääräistäminen olisi varaa vain organisaatioille, jotka ovat tarpeeksi suuria tilaamaan omat tutkimuksensa.

## Matematiikka

Yksikkökustannustietokanta ei itse laske mitään; se tarjoaa yhden syötteen laskelmaan, joka tehdään muualla:

```
Rahamääräinen korvikearvo = markkinahinta TAI varjohinta TAI hyvinvoinnin arvotus
                             TAI ilmaistujen preferenssien arvo
                             määritellylle tuloksen muutosyksikölle
                             (esim. "henkeä kohti, joka siirtyy työttömyydestä työhön, vuodessa")

Sovellettu arvo = saavutettujen tulosten määrä × korvikkeen yksikköarvo
```

Ks. [varjohinnoittelu](../varjohinnoittelu/) siitä, miten korvike rakennetaan, kun markkinahintaa ei ole, ja [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) siitä, miten sovellettu arvo syötetään sitten suhdeluvuksi hukkavaikutus- ja kohdentamiskorjausten jälkeen.

## Työstetty esimerkki

**Hyväntekeväisyysjärjestö (ystävätoimintapalvelun SROI)**: yksikkökustannustietokannan merkintä "yksinäisyyden väheneminen" antaa havainnollistavan korvikkeen £1 100 henkeä kohti vuodessa. Sovellettuna 80 edunsaajaan: 80 × £1 100 = £88 000 bruttoarvo. Jos samassa tietokannassa on myös korvike "parantunut mielenterveys", joka perustuu osittain päällekkäiseen hyvinvointikyselyn kohtaan, molempien korvikkeiden pinoaminen samoille 80 ihmiselle kaksoislaskisi osan samasta taustalla olevasta muutoksesta — tietokanta tarjoaa luvun, mutta tämän päällekkäisyyden välttäminen on analyytikon vastuulla.

**Paikallisviranomainen (työkerhon SROI)**: yksikkökustannustietokannan merkintää "työttömyydestä pysyvään työhön siirtyminen" sovelletaan 45 osallistujaan havainnollistavalla korvikkeella £8 500 henkeä kohti vuodessa: 45 × £8 500 = £382 500 bruttoarvo, ennen aiheessa [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) esitettyjä hukkavaikutus- ja kohdentamiskorjauksia.

## Yhteys ohjelmistotekniikkaan

Hyväntekeväisyysjärjestöille tai tilaajille raportointityökaluja rakentavat tiimit hyötyvät sisäisestä "tulosluettelosta" — taulukosta, joka yhdistää jokaisen tuloksen, jonka tuote tai palvelu voi uskottavasti väittää, nimettyyn korvikkeeseen, sen lähdetietokantaan, julkaisupäivään ja versiotunnisteeseen — jotta organisaation eri tiimit eivät kukin valitse hieman eri arvoja samalle tulokselle. Global Value Exchangen avoimen datan kietominen hakupalvelun taakse, lähde ja päiväys aina luvun rinnalla näytettynä, pitää korvikkeen tarkastettavana eikä taulukkolaskentaan haudattuna taikalukuna. Ks. [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) ja
[Social Value Act](../yhteiskunnallisen-arvon-laki/) kahdesta pääpaikasta, joissa näitä korvikkeita kulutetaan.

## Sudenkuopat

- **Korvikkeiden käsitteleminen tarkkoina.** Useimmat julkaistut korvikkeet ovat mallinnettuja keskiarvoja hyvinvoinnin arvotustutkimuksista leveillä luottamusväleillä; sellaisen siteeraaminen punnan tarkkuudella liioittelee tarkkuutta, jota taustalla oleva tutkimus tukee.
- **Päällekkäisten korvikkeiden kaksoislaskenta.** Korvikkeiden yhdistäminen (esim. "vähentynyt yksinäisyys" ja "parantunut mielenterveys"), jotka on johdettu päällekkäisistä kyselykonstruktioista, arvottaa saman taustalla olevan muutoksen kahdesti.
- **Asiayhteydestä irrotetun korvikkeen käyttö korjaamatta.** Yhdelle kansalliselle väestölle ja vuodelle kalibroitu korvike, jota sovelletaan muualla ilman inflaatio- tai kontekstikorjausta, esittää arvon hiljaa väärin.
- **Alkuperän tarkistamatta jättäminen.** Global Value Exchange on avoin ja joukkoistettu, joten merkintöjen laatu vaihtelee kirjoittajittain; tarkista taustalla oleva lähde ennen luvun siteeraamista rahoitushakemuksessa tai hankinta-aineistossa.

## Lähteet

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — UK Social Value Bankin
  menetelmällinen perusta.
- Social Value UK, "A Guide to Social Return on Investment," rahamääräisiä korvikkeita käsittelevä osio.
