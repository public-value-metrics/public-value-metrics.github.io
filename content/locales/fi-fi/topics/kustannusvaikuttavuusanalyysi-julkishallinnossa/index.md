# Kustannusvaikuttavuusanalyysi julkishallinnossa

Kustannusvaikuttavuusanalyysi (CEA) vertaa vaihtoehtoisten tapojen kustannuksia saavuttaa *sama* tulos, ilmaistuna luonnollisina yksikköinä — kustannus asunnon saanutta kadulla nukkujaa kohti, kustannus odotetulle tasolle nostettua oppilasta kohti, kustannus vältettyä hiilidioksiditonnia kohti — muuntamatta itse tulosta rahaksi.

## Miksi tällä on merkitystä

Green Book käsittelee CEA:ta varamenetelmänä silloin, kun [yhteiskunnallisen kustannus-hyötyanalyysin](../yhteiskunnallinen-kustannus-hyötyanalyysi/) vaatimus rahamääräistää jokainen hyöty muuttuu paitsi vaikeaksi myös epärehelliseksi — missä uskottavan hinnan antaminen tulokselle edellyttäisi oletuksia, joihin kukaan ei oikeasti usko (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, luku 5, vaihtoehtojen arvioinnista, kun tuloksia ei ole helppo rahamääräistää). CEA on terveystaloustieteestä läheisimmin lainattu menetelmä — se on rakenteellisesti identtinen sen kanssa, miten NICE vertaa hoitoja laatupainotettua elinvuotta (QALY) kohti laskettujen kustannusten avulla — mutta sovellettuna ei-terveydenhuollon julkisiin ohjelmiin: koulutusinterventiot oppilaan tulospistettä kohti, asumisohjelmat asunnottomuudelta suojeltua kotitaloutta kohti, työllisyysohjelmat pysyvää työllistymistä kohti.

Syy, miksi CEA ansaitsee paikkansa SCBA:n rinnalla sen sijaan, että se sulautuisi siihen, on se, että tiettyjen tulosten rahamääräistämisen pakottaminen tuottaa luvun, joka on tarpeeksi tarkka näyttääkseen arvovaltaiselta ja tarpeeksi kiistanalainen ollakseen arvoton julkisessa keskustelussa — "odotetulla tasolla lukevan lapsen" hinnoittelu kutsuu juuri sellaista haastetta, joka suistaa liiketoimintaperustelun raiteiltaan valiokunnassa. CEA kiertää kiistan kieltäytymällä käymästä sitä: se asettaa vaihtoehdot järjestykseen *itse tuloksen* yksikköä kohti lasketun kustannuksen mukaan, jättäen erillisen poliittisen arvion siitä, kannattaako tulosta tavoitella lainkaan, strategiselle tapaukselle.

## Matematiikka

```
Kustannusvaikuttavuussuhde (keskiarvo) = Kokonaiskustannus / Saavutetut tulosyksiköt yhteensä

Inkrementaalinen kustannusvaikuttavuussuhde (ICER), vaihtoehdon A vertailu vaihtoehtoon B:
ICER = (Kustannus_A − Kustannus_B) / (Tulos_A − Tulos_B)

Menettely:
1. Kiinnitä tulosyksikkö ja mittausmenetelmä kaikille vertailtaville vaihtoehdoille.
2. Hinnoittele jokainen vaihtoehto samalla perusteella (ks. ../green-book-appraisal/,
   rahoitustapaus) samalla aikajänteellä.
3. Hylkää dominoidut vaihtoehdot: mikä tahansa vaihtoehto, joka maksaa enemmän yksikköä
   kohti kuin halvempi vaihtoehto, joka saavuttaa saman tai paremman tuloksen, pudotetaan.
4. Järjestä jäljelle jääneet vaihtoehdot inkrementaalisen, ei keskimääräisen,
   kustannusvaikuttavuussuhteen mukaan.
```

CEA ei voi yksin sanoa, kannattaako ohjelma rahoittaa lainkaan — vain mikä useista saman tavoitteen lähestymistavoista on halvin yksikköä kohti. Päätös siitä, kannattaako itse tavoite kuluttaa, edellyttää joko paluuta SCBA:han (jos uskottava arvostus on olemassa) tai matematiikan ulkopuolista poliittista/strategista arviota. Missä tuloksia ei aidosti voi supistaa yhdeksi yksiköksi — koska ohjelma tuottaa useita eri tavoin tärkeitä tuloksia — käytä sen sijaan [monikriteeristä päätösanalyysia](../monikriteerinen-päätösanalyysi/).

## Työstetty esimerkki

**Paikallisviranomainen**: kunta vertailee kolmea lähestymistapaa kadulla nukkumisen vähentämiseksi, kukin hinnoiteltuna yhdelle vuodelle tulosta "yksilöt, jotka siirtyivät vakaaseen asuntoon 6+ kuukaudeksi" vastaan:

```
Vaihtoehto                           Kustannus  Saavutetut     Keskimääräinen CER
                                                tulokset
Housing First (intensiivinen)        £900 000   60             £15 000/tulos
Hostelli + jatkotuki                 £600 000   50             £12 000/tulos
Katutyö + yksityinen vuokrasektori   £350 000   20             £17 500/tulos

ICER, Hostelli vs. Katutyö:     (600k−350k)/(50−20) = £8 333 lisätulosta kohti
ICER, Housing First vs. Hostelli: (900k−600k)/(60−50) = £30 000 lisätulosta kohti
```

Katutyö on dominoitu keskimääräisessä kustannuksessa Hostellin toimesta, mutta *inkrementaalinen* askel Katutyöstä Hostelliin maksaa vain £8 333 lisäasutettua henkilöä kohti — halpaa verrattuna Housing First -askeleeseen, joka maksaa £30 000 jokaista Hostellin saavuttamaa ylittävää henkilöä kohti. Budjettirajoitteisen viranomaisen, joka skaalaa ylös, tulisi suosia Hostellin laajentamista ennen Housing Firstiä, vaikka Housing First näyttäisi paremmalta omalla keskimääräisellä suhteellaan.

**Valtionhallinto**: lukutaidon korjausohjelmaa verrataan kolmessa toimitusmallissa "kustannus ikätasoisen lukutason saavuttanutta oppilasta kohti": yksilöopetus (£1 800/oppilas), pienryhmäopetus (£700/oppilas) ja pelkkä digitaalinen interventio (£150/oppilas, mutta vain 40 % pienryhmäopetuksen tulosasteesta ilmoittautunutta oppilasta kohti sitoutumisen pudotuksen korjaamisen jälkeen). Todelliseen suorittamiseen korjattuna pelkkä digitaalinen maksaa £375 tason saavuttanutta oppilasta kohti — yhä halvin, mutta CEA ei voi sanoa, onko pelkällä digitaalisella autettujen oppilaiden pienempi absoluuttinen määrä, jos se toimitetaan samalla budjetilla kuin pienryhmä, hyväksyttävä vaihtokauppa vähemmän oppilaiden syvemmälle tavoittamiseen nähden; se on jakaumapäätös, jonka CEA antaa takaisin päätöksentekijöille.

## Yhteys ohjelmistotekniikkaan

CEA on oikea kehys aina, kun insinöörijoukkueet arvioivat toimitustapoja *samalle* palvelutulokselle — kustannus onnistuneesti varmennettua henkilöllisyyttä kohti kolmella tunnistautumistoimittajalla, kustannus oikein triagoitua tapausta kohti kahdella tapaustyön automaatiosuunnitelmalla, kustannus ratkaistua saavutettavuusvikaa kohti sisäisessä vs. ostetussa korjauksessa. Kuri, jonka se tuo suoraan: määritä tulosyksikkö ennen kustannusten vertailua (ei "suljetut tiketit" — suorite — vaan "käyttäjän tarve todella ratkaistu"), ja laske aina inkrementaalinen suhde olemassa olevan järjestelmän ja ehdotetun korvaajan välillä, ei kunkin järjestelmän keskimääräistä kustannusta erikseen. Ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/) ja [kustannus tulosta kohti](../kustannus-tulosta-kohti/).

## Sudenkuopat

- **Keskimääräisten, ei inkrementaalisten, suhteiden vertailu laajennuspäätöksessä.** Kuten kadulla nukkumisen esimerkki osoittaa, paras keskimääräinen suhde ei aina ole halvin seuraava ostettava tulosyksikkö.
- **Tulosyksikön valinta, joka on todellisuudessa suorite.** "Tehdyt ohjaukset" tai "toimitetut istunnot" mittaavat toimintaa, ei tulosta, jonka vuoksi ohjelma on olemassa; CEA suoritteilla tuottaa varman näköisen luvun, joka vastaa väärään kysymykseen.
- **Aidosti erilaisten tulosten vertailu.** CEA on pätevä vain, kun jokainen vaihtoehto kohdistuu samaan tulokseen mitattuna samalla tavalla; "kustannus asutettua kadulla nukkujaa kohti" vertailu "kustannukseen vakaassa vuokrasuhteessa olevaa huostaanotosta lähtenyttä nuorta kohti" vaatii yleisen tulosmitan tai [monikriteeristä päätösanalyysia](../monikriteerinen-päätösanalyysi/), ei CEA:ta.
- **Tuloksen pysyvyyden sivuuttaminen.** Halvempi vaihtoehto, joka tuottaa tuloksia, jotka eivät säily (oppilas, joka taantuu intervention päätyttyä), ei ole todellisuudessa kustannusvaikuttavampi, kun mitataan vertailukelpoisella aikajänteellä; sovita seuranta-aika vertailtavien vaihtoehtojen kesken.

## Lähteet

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, luku 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  kustannusvaikuttavuusmenetelmä, jota tämä valtionhallinnon sovellus lainaa.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Kustannusvaikuttavuusnäyttö asunnottomuusinterventioista.
  <https://whatworks-homelessness.org.uk/>
