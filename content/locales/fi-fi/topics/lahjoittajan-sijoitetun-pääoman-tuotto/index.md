# Lahjoittajan sijoitetun pääoman tuotto

Lahjoittajan sijoitetun pääoman tuotto (donor return on investment) on se, mitä tietyn lahjoittajan punta todella ostaa tuloksina — ei hyväntekeväisyysjärjestön toimintasuhteet eikä järjestön oma tuotto sen kokonaisbudjetille. Se muotoilee ROI:n uudelleen organisaation näkökulmasta (kuinka tehokkaasti toimimme) lahjoittajan näkökulmaan (mitä minun marginaalinen panokseni muuttaa), ja nämä kaksi lukua käsitellään rutiininomaisesti, ja virheellisesti, samana asiana.

## Miksi tällä on merkitystä

Hyväntekeväisyysjärjestön oma "ROI", siinä määrin kuin ilmausta ylipäätään käytetään, kuvaa yleensä jotain kuten [kustannus edunsaajaa kohti](../kustannus-edunsaajaa-kohti/) tai [hyväntekeväisyysjärjestön yleiskustannussuhde](../hyväntekeväisyysjärjestön-yleiskustannussuhde/) — organisaation tehokkuusmittareita. Lahjoittajan ROI on täysin eri kysymys: koska tällä hyväntekeväisyysjärjestöllä on jo muita tuloja, mitä *tämän* lahjoittajan raha lisää marginaalissa? Jos hyväntekeväisyysjärjestö toimittaisi saman ohjelman tietyn £10 000 lahjoituksen kanssa tai ilman — koska sillä on runsaasti reservejä tai koska toinen rahoittaja täyttäisi aukon — kyseisen lahjoituksen lahjoittajan ROI on lähellä nollaa, kuinka hyvältä järjestön yleinen yleiskustannussuhde tai kustannus tulosta kohti näyttääkin.

Tämä on sama lisäisyyskysymys, joka on Ison-Britannian julkisten menojen [rahalle vastine](../rahalle-vastine/) -arvioinnin ja ohjelma-arvioinnin [lisäisyyden ja hukkavaikutuksen](../lisäisyys-ja-hukkavaikutus/) taustalla: luotu arvo on hyvitettävissä rahoittajalle vain siinä määrin kuin sitä ei olisi tapahtunut joka tapauksessa. Suuret lahjoittajaneuvottelualustat ja tehokkaan lahjoittamisen organisaatiot (Giving What We Can, GiveWell) rakentavat suosituksensa nimenomaisesti tämän erottelun varaan, kysyen ei "onko tämä hyvä hyväntekeväisyysjärjestö" vaan "onko tällä hyväntekeväisyysjärjestöllä täyttämätöntä tilaa lisärahoitukselle siten, että lahjoitukseni on lisäinen."

## Matematiikka

```
Lahjoittajan ROI ≠ Hyväntekeväisyysjärjestön toiminnallinen tehokkuus

Lahjoittajan ROI  ≈  (Lahjoituksella saavutettu tulos) − (Tulos, joka olisi
                      syntynyt ilman sitä, eli kontrafaktuaali)
                    ─────────────────────────────────────────────────
                                    Lahjoituksen koko

Keskeiset syötteet:
  - Tila lisärahoitukselle (onko hyväntekeväisyysjärjestö rahoitusrajoitteinen marginaalissa?)
  - Funging (täyttäisikö toinen lahjoittaja aukon?)
  - Marginaalinen kustannusvaikuttavuus kyseisellä rahoitustasolla (kustannukset usein
    nousevat, kun interventio skaalautuu yli helpoimmin tavoitettavan väestönsä)
```

Ks. [tehokkaan altruismin kustannusvaikuttavuus](../tehokkaan-altruismin-kustannusvaikuttavuus/) siitä, miten GiveWell operationalisoi "tila lisärahoitukselle" -kysymyksen, ja [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/) yleisestä menetelmästä.

## Työstetty esimerkki

Lahjoittaja valitsee kahden £5 000 lahjoituksen välillä:

- **Hyväntekeväisyysjärjestö C**: täysin rahoitettu ydinohjelma, £2 miljoonaa reservejä ja rahoittajien odotuslista; marginaalinen £5 000 lisätään todennäköisesti reserveihin tai matalamman prioriteetin toimintaan. Arvioitu lahjoittajalisäinen tulos: minimaalinen — raha ei ilmeisesti muuta sitä, mitä tapahtuu.
- **Hyväntekeväisyysjärjestö D**: pieni, näyttöön perustuva ohjelma, joka on julkisesti ilmoittanut joutuvansa käännyttämään 200 ihmistä ensi neljänneksellä ilman £50 000 lisärahoitusta, ja on kerännyt siitä £42 000. Marginaalinen £5 000 rahoittaa erittäin todennäköisesti todellista lisätoimitusta — sanokaamme 20 lisähenkilöä palveltuna, hyväntekeväisyysjärjestön oman ilmoittaman kustannuksen edunsaajaa kohti £250 mukaan.

Sama lahjoituksen koko, sama lahjoittaja, radikaalisti erilainen lahjoittajan ROI — ei siksi, että Hyväntekeväisyysjärjestö C olisi huonompi organisaatio (sillä voi olla parempi kustannus tulosta kohti kokonaisuutena), vaan koska sen marginaalinen rahoitusvaje on jo suljettu.

## Yhteys ohjelmistotekniikkaan

Lahjoittaja-alustat ja lahjoitussuositustyökalut nostavat liian usein esiin vain organisaatiotason tehokkuusmittareita (yleiskustannussuhde, kustannus edunsaajaa kohti), koska ne ovat sitä, mitä hyväntekeväisyysjärjestöt julkaisevat vuosikertomuksissa ja mikä on helpointa vetää vertailutaulukkoon. Lahjoittajan ROI:n asianmukainen esittäminen vaatii erilaisen, vaikeammin hankittavan datapisteen: hyväntekeväisyysjärjestön ilmoittaman nykyisen rahoitusvajeen eli "tilan lisärahoitukselle", joka muuttuu vuoden mittaan ja on harvoin jäsenneltyä dataa. Alustat, jotka haluavat tukea aitoa lahjoittajan ROI -päättelyä, tarvitsevat joko suoran syötteen rahoitusvajeilmoituksista (kuten GiveWell ylläpitää manuaalisesti suosittelemilleen hyväntekeväisyysjärjestöille) tai nimenomaisen vastuuvapauslausekkeen siitä, että vertailutaulukko näyttää organisaation tehokkuutta, ei lahjoittajan lisäisyyttä. Ks. [hyväntekeväisyysjärjestön yleiskustannussuhde](../hyväntekeväisyysjärjestön-yleiskustannussuhde/) mittarista, johon lahjoittajan ROI useimmin ja virheellisesti sekoitetaan.

## Sudenkuopat

- **Hyväntekeväisyysjärjestön tehokkuuden sekoittaminen lahjoittajan lisäisyyteen.** Hyvin johdetulla, matalan yleiskustannuksen hyväntekeväisyysjärjestöllä voi silti olla lähellä nollaa oleva marginaalinen lahjoittajan ROI, jos se ei ole rahoitusrajoitteinen.
- **Funging-vaikutuksen sivuuttaminen.** Jos suuri institutionaalinen rahoittaja olisi kattanut aukon joka tapauksessa, yksittäisen lahjoittajan lahjoitus syrjäyttää kyseisen rahoittajan rahan sen sijaan, että lisäisi uutta toimitusta.
- **Lineaarisen kustannusvaikuttavuuden olettaminen mittakaavassa.** Halvimmin tavoitettavat edunsaajat palvellaan usein ensin; marginaalinen kustannus tulosta kohti nousee usein ohjelman laajentuessa, joten seuraavan punnan ROI ei ole sama kuin jo käytetyn keskimääräisen punnan ROI.
- **Ei ilmoitettua rahoitusvajetta.** Hyväntekeväisyysjärjestö tai alusta, joka ei voi sanoa, mitä seuraava £X rahoittaisi, ei voi tukea aitoa lahjoittajan ROI -väitettä, vain keskikustannusväitettä.

## Lähteet

- Giving What We Can, rahoitusvajeista ja kustannusvaikuttavuudesta lahjoituspäätöksissä. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (tila lisärahoitukselle nimenomaisena kriteerinä). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
