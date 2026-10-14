# Kustannus edunsaajaa kohti

Kustannus edunsaajaa kohti on ohjelman kokonaiskustannus jaettuna palvelun saaneiden yksilöllisten ihmisten määrällä — kaikilla, joihin on kosketettu, riippumatta siitä, muuttuivatko heidän olosuhteensa todella. Se on nopein tehokkuusluku, jonka organisaatio voi tuottaa, koska "ketä palvelimme" on lähes aina jo asianhallintajärjestelmässä, kun taas "ketä autettiin" yleensä ei ole.

## Miksi tällä on merkitystä

Rahoittajat kysyvät kustannusta edunsaajaa kohti jatkuvasti, ja perustellusta syystä: se on saatavilla heti, se on vertailukelpoinen hyvin erilaisten ohjelmien salkussa, ja se on rehellinen tavoittavuudesta tavalla, jota tulosväitteet — joiden todentaminen kestää kauemmin ja joita on helpompi liioitella — eivät ole. Ison-Britannian Charities SORP (Statement of Recommended Practice), joka säätelee, miten hyväntekeväisyysjärjestöt raportoivat FRS 102:n mukaan, edellyttää hallituksen vuosikertomusten kuvaavan saavutukset tavoitteisiin nähden, mutta useimpien pienempien hyväntekeväisyysjärjestöjen johdon tilinpäätökset käyttävät yhä oletuksena tavoittavuuteen perustuvia yksikkökustannuksia, koska ne ovat halpoja tuottaa ja tilintarkastusystävällisiä.

Vaarana on käsitellä kustannusta edunsaajaa kohti ikään kuin se vastaisi kysymykseen, johon se ei voi vastata: toimiko raha. Ks. [kustannus tulosta kohti](../kustannus-tulosta-kohti/) mittarista, joka todella vastaa siihen, ja [tulokset vs. suoritteet](../tulokset-vs-suoritteet/) taustalla olevasta erottelusta. Kustannus edunsaajaa kohti on oikeutettu triage- ja tavoittavuusmittari — se kertoo rahoittajalle, kuinka pitkälle raha riittää — mutta matala kustannus edunsaajaa kohti voi tarkoittaa joko aitoa tehokkuutta tai palvelua, joka on niin ohut, ettei se muuta mitään.

## Matematiikka

```
Kustannus edunsaajaa kohti = Ohjelman kokonaiskustannus / Palveltujen yksilöllisten ihmisten määrä

Vertailu:
Kustannus tulosta kohti    = Ohjelman kokonaiskustannus / Määritellyn tuloksen saavuttaneiden määrä

Kustannus edunsaajaa kohti on aina ≤ kustannus tulosta kohti, koska tulosväestö on osajoukko
(usein pieni) edunsaajaväestöstä.
```

## Työstetty esimerkki

**Ruokapankki, sama vuosi kuin kustannus tulosta kohti -esimerkissä**:

- Ohjelman kokonaiskustannus: £450 000
- Palvellut yksilölliset kotitaloudet (kolme tai useampia kasseja): 1 800

```
Kustannus edunsaajaa kohti = £450 000 / 1 800 = £250 palveltua kotitaloutta kohti
```

Vertaa kahta mittaria rinnakkain:

| Mittari | Nimittäjä | Tulos |
|---|---|---|
| Kustannus edunsaajaa kohti | 1 800 palveltua kotitaloutta | £250 |
| Kustannus tulosta kohti | 630 ruokaturvan saavuttanutta kotitaloutta | £714 |

Rahoittaja, joka näkee vain £250, voi päätellä tämän olevan erittäin tehokas hyväntekeväisyysjärjestö. Rahoittaja, joka näkee molemmat luvut, voi esittää hyödyllisemmän kysymyksen: onko tavoittavuuden (1 800) ja tuloksen (630) välinen kuilu datankeruuaukko, suunnitteluaukko vai rehellinen heijastus siitä, kuinka vaikea ruokaturva on saavuttaa pelkällä ruoka-avulla?

**Työllisyyskoulutusjärjestö, havainnollistava**: kustannus edunsaajaa kohti (ilmoittautunut) = £2 000; kustannus tulosta kohti (pysyvä työllisyys 6 kuukauden kohdalla) = £11 000, koska vain 18 % ilmoittautuneista suorittaa ohjelman ja löytää pysyvää työtä. Näiden kahden luvun eriytyminen viisinkertaisesti on yleistä aina, kun suoritus- tai pysyvyysasteet ovat matalia — koulutusjärjestö ja ruokapankki ovat tässä rakenteellisesti identtisiä.

## Yhteys ohjelmistotekniikkaan

Kustannus edunsaajaa kohti on voittoa tavoittelemattomien ohjelmistojen oletusmittari, koska se on mittari, joka putoaa ulos edunsaajatietueesta ilman lisätyötä: luo tapaus, kirjaa palvelu, laske rivit. Järjestelmän rakentaminen siten, että se tukee myös kustannusta tulosta kohti, tarkoittaa toisen ensiluokkaisen entiteetin tietoista lisäämistä — tulostapahtuman, joka on päivätty ja määritelty riippumattomasti palvelun toimituksesta — ja houkutuksen vastustamista antaa "tapaus suljettu" edustaa "tulos saavutettu". Kun rajaat avustusten hallinnan tai CRM-alustan, kysy, kumpaa kahdesta mittarista kukin kojelauta todella näyttää, ja nimeä se sen mukaisesti; niiden sekoittaminen yhdessä "vaikutus"-laatassa on yksi yleisimmistä ohjelmistotason syistä alla oleviin sudenkuoppiin. Ks. [yksikkökustannustietokannat](../yksikkökustannustietokannat/) kummankin mittarin vertailuun, kun se on oikein nimetty.

## Sudenkuopat

- **Kustannuksen edunsaajaa kohti esittäminen vaikutuksena.** Se mittaa tavoittavuutta, ei muutosta. Nimeä kojelaudat ja raportit "kustannus palveltua henkeä kohti", ei "kustannus autettua henkeä kohti".
- **Kaksoislaskenta ohjelmien välillä.** Henkilö, joka saa sekä ruokakasseja että velkaneuvontaa samalta hyväntekeväisyysjärjestöltä, on yksi edunsaaja, ei kaksi, jos nimittäjän on tarkoitus kuvata yksilöllistä tavoittavuutta; päätä ja dokumentoi, mitä käytäntöä käytetään.
- **Alemman luvun käsitteleminen aina parempana.** Avoin lounaskerho voittaa aina intensiivisen asianhallintapalvelun kustannuksessa edunsaajaa kohti, koska on halvempaa koskettaa jotakuta kevyesti. Se ei kerro mitään siitä, kumpi tuottaa kestävämpää muutosta puntaa kohti.
- **Nimittäjien hiljainen vaihtaminen raporttien välillä.** Yhdessä vuosikertomuksessa "ilmoittautuneisiin" ja seuraavassa "suorittaneisiin" nähden siteerattu kustannus edunsaajaa kohti ei ole vertailukelpoinen vuodesta toiseen; ilmoita nimittäjä joka kerta.

## Lähteet

- Charity Commission for England and Wales, hyväntekeväisyysjärjestöjen raportointiohjeet. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
