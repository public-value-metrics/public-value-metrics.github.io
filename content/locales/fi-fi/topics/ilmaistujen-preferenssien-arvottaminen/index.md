# Ilmaistujen preferenssien arvottaminen

Ilmaistujen preferenssien menetelmät arvioivat ei-markkinahyödykkeen arvon kysymällä suoraan ihmisiltä, kuinka paljon he olisivat valmiita maksamaan siitä, tai kuinka paljon korvausta he hyväksyisivät luopuakseen siitä, tyypillisesti jäsennellyn kyselyn kautta, joka kuvaa hypoteettisen skenaarion. Ehdollinen arvottaminen (contingent valuation) on perheen tunnetuin tekniikka.

## Miksi tällä on merkitystä

Green Bookin liite 2 (täydentävä ohjeistus ei-markkinavaikutusten arvottamisesta) hyväksyy ilmaistujen preferenssien menetelmät hyödykkeille, joilla ei ole lainkaan havaittavaa markkinatapahtumaa, josta arvo voitaisiin päätellä — ilmanlaatu, biodiversiteetti, tulvasuoja, maiseman olemassaoloarvo, jossa joku ei ehkä koskaan käy (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra on julkaissut oman ilmaistujen preferenssien ohjeensa ympäristöarviointiin juuri siksi, että niin suurella osalla ympäristöarvosta (elinympäristöjen suojelu, vedenlaatu) ei ole lainkaan korvaavaa markkinaa, toisin kuin esimerkiksi melulla, joka ainakin korreloi havaittavien asuntohintojen kanssa (ks. [paljastettujen preferenssien arvottaminen](../paljastettujen-preferenssien-arvottaminen/)).

Ilmaistujen preferenssien keskeinen vetovoima — ne voivat arvottaa kirjaimellisesti mitä tahansa, myös hyödykkeitä, joilla kukaan ei ole koskaan käynyt kauppaa — on myös uskottavuusongelman lähde. Koska vastaajat eivät todellisuudessa käytä rahaa, ehdolliset arvottamiskyselyt ovat alttiita hypoteettiselle vinoumalle (ihmiset yliarvioivat maksuhalukkuutensa, kun todellista budjettirajoitetta ei ole), upottamisvaikutuksille (sama hyödyke arvotetaan eri tavoin sen mukaan, mitä muuta kyselyssä on) ja lähtöpistevinoumalle tarjouspelisuunnitelmissa. NOAA:n paneeli ehdollisesta arvottamisesta vuonna 1993, joka kutsuttiin koolle Exxon Valdezin öljyvuotooikeudenkäyntien jälkeen, asetti suunnittelustandardit — binäärinen "maksaisitko £X, kyllä/ei" -kansanäänestysmuoto avoimen tarjoamisen sijaan ja pakolliset muistutukset vastaajan todellisesta budjettirajoitteesta — jotka pysyvät puolustettavien kyselyjen viitestandardina.

## Matematiikka

```
Ehdollinen arvottaminen (kansanäänestysmuoto):
  Esitä binäärinen valinta: "maksaisitko £X vuodessa tuloksesta Y? kyllä/ei"
  Vaihtele X:ää satunnaisesti vastaajien välillä.
  Sovita maksuhalukkuus kyllä/ei-vastausosuuden funktiona kullakin X:llä.

Keskimääräinen WTP = arvioidun kysyntäkäyrän alle jäävä pinta-ala
Kokonaisarvo = Keskimääräinen WTP × vaikutettu väestö

Valintakoevariantti (diskreetin valinnan mallinnus):
  Esitä vastaajille toistuvia valintoja ominaisuuspakettien välillä
  (mukaan lukien kustannusominaisuus), estimoi implisiittiset hinnat kullekin
  ei-kustannusominaisuudelle vastaajien paljastamista vaihtokaupoista.
```

Valintakoevarianttia suositaan yleensä nykyisessä brittiläisessä käytännössä yhden kysymyksen ehdolliseen arvottamiseen nähden, koska vastaajien pakottaminen toistuvasti punnitsemaan useita ominaisuuksia kustannusta vastaan tuottaa sisäisesti johdonmukaisempia, vaikeammin manipuloitavia estimaatteja kuin yksi kyllä/ei-kysymys.

## Työstetty esimerkki

**Valtionhallinto**: Defra teettää ehdollisen arvottamiskyselyn joen vedenlaadun parannusohjelman arvottamiseksi. 2 000 kotitalouden kansanäänestysmuotoinen kysely havaitsee, että 62 % maksaisi £40/vuosi hypoteettisen vesilaskun lisämaksun kautta, ja arvioitu kysyntäkäyrä antaa keskimääräisen maksuhalukkuuden £28/vuosi kotitaloutta kohti.

```
Keskimääräinen WTP = £28/kotitalous/vuosi
Kotitaloudet valuma-alueella = 340 000
Vuotuinen kokonaisarvo = £28 × 340 000 = £9,52 milj./vuosi

20 vuoden arviointijaksolla 3,5 %:n diskonttokorolla (annuiteettitekijä ≈ 14,2):
PV(hyöty) ≈ £9,52 milj. × 14,2 ≈ £135 milj.
```

Tätä kokonaislukua verrataan sitten ohjelman [yhteiskunnallisen kustannus-hyötyanalyysin](../yhteiskunnallinen-kustannus-hyötyanalyysi/) kustannuspuoleen. Green Book edellyttää tällaisen ilmaistujen preferenssien näytön raportoimista luottamusvälin ja kyselyn metodologian kanssa, ei paljaana pisteestimaattina, juuri koska taustalla oleva luku on hauraampi kuin markkinahinta.

**Hyväntekeväisyysjärjestö**: perintösäätiö kyselee vierailijoilta ja ei-vierailijoilta maksuhalukkuudesta historiallisen rakennuksen sulkemisen estämiseksi, jossa kumpikaan ryhmä ei välttämättä vieraile (sen olemassaoloarvo). Koska ei-vierailijat, jotka eivät koskaan näe rakennusta, raportoivat silti positiivisen WTP:n, kysely tavoittaa olemassaolo- ja perintöarvon, jonka vierailijamaksutulojen yksinkertainen laskenta (paljastetun preferenssin korvike) kokonaan ohittaisi — osoittaen ilmaistujen preferenssien aidon edun siellä, missä ei ole minkäänlaista markkinatapahtumaa, joka paljastaisi arvon.

## Yhteys ohjelmistotekniikkaan

Ilmaistujen preferenssien menetelmät soveltuvat harvoin suoraan ohjelmistotekniikan työhön, mutta kansalaiskuulemisalustoja, osallistavan budjetoinnin työkaluja tai julkista kyselyinfrastruktuuria rakentavat insinöörit rakentavat usein juuri sen instrumentin, jonka varassa taloustiede on. Kyselysuunnittelun yksityiskohtien oikein tekeminen — satunnaistetut tarjoussummat, binäärinen kansanäänestyskehystys avointen kysymysten sijaan, nimenomaiset budjettirajoitemuistutukset — ei ole UX-hienosäätöä, vaan se, mikä tekee tuloksena olevasta arvostuksesta puolustettavan tarkastelussa; huonosti suunniteltu sovelluksen sisäinen kysely voi mitätöidä kuukausien jälkeisen taloudellisen analyysin. Ks. [kansalaistyytyväisyysmittarit](../kansalaistyytyväisyysmittarit/) yleisemmästä kurista kerätä yleisömielipidedataa, joka kestää analyyttisen painon.

## Sudenkuopat

- **Avoimet "kuinka paljon maksaisit?" -kysymykset.** Ne ovat paljon alttiimpia strategiselle ja ankkuroitumisvinoumalle kuin binäärinen kansanäänestyskehystys; NOAA-paneelin suositus kansanäänestysmuodosta on olemassa juuri siksi, että avoin esille saaminen toimii huonosti.
- **Vastaajan todellisen budjettirajoitteen muistutuksen puute.** Ilman sitä ilmaistu WTP ylittää rutiininomaisesti sen, mitä samat ihmiset maksaisivat todellisen budjettivaihtokaupan ollessa pelissä — hypoteettinen vinouma.
- **Upottamisvaikutusten sivuuttaminen.** Sama hyödyke arvotettuna yksin vs. osana suurempaa pakettia tuottaa eri WTP-arvioita; raportoi, mitä muuta, jos mitään, oli kyselykehyksessä.
- **Yhden kyselyn pisteestimaatin käsitteleminen ratkaistuna.** Green Book -käytäntö odottaa vaihteluväliä ja tunnettujen vinoumien käsittelyä, ei paljasta lukua, joka viedään eteenpäin kustannus-hyötytaulukkoon ikään kuin se olisi markkinahinta.

## Lähteet

- HM Treasury. "The Green Book," liite 2: ei-markkinavaikutusten arvottaminen.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (ehdollisen arvottamisen ja
  valintakokeiden ohje). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
