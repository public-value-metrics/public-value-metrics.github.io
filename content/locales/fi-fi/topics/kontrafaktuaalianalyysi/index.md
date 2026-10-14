# Kontrafaktuaalianalyysi

Kontrafaktuaali (counterfactual) on arvio siitä, mitä olisi tapahtunut intervention puuttuessa. Ilman sitä ohjelman käynnistymisen jälkeen havaittua muutosta ei voi erottaa muutoksesta, joka olisi tapahtunut joka tapauksessa — ei kontrafaktuaalia, ei näyttöä vaikutuksesta, olivatpa ennen–jälkeen-luvut kuinka vakuuttavia tahansa. HM Treasuryn Magenta Book pitää uskottavan kontrafaktuaalin rakentamista vaikuttavuusarvioinnin keskeisenä menetelmällisenä tehtävänä, tärkeämpänä kuin mikään muu yksittäinen suunnitteluvalinta.

## Miksi tällä on merkitystä

"Rikollisuus väheni 15 % ohjelman käyttöönoton jälkeisenä vuonna" ei ole näyttöä siitä, että ohjelma toimi, ellei tiedetä, mitä rikollisuudelle olisi tapahtunut ilman sitä — rikollisuus olisi voinut laskea 20 % joka tapauksessa toisiinsa liittymättömien taloudellisten tai väestötrendien vuoksi, mikä tarkoittaisi, että ohjelma itse asiassa huononsi asioita kontrafaktuaaliin nähden, vaikka raaka luku parani. Tämä on yleisin analyyttinen virhe julkisen ja yhteiskunnallisen sektorin vaikutusväitteissä: ennen–jälkeen-vertailun sekoittaminen syy-seuraussuhteen näyttöön. Magenta Book on yksiselitteinen siitä, että vaikuttavuusarviointi on olemassa vastatakseen kontrafaktuaaliseen kysymykseen — "mitä eroa tällä interventiolla oli?" — ja että vastaaminen edellyttää tapahtumatta jääneen maailman estimointia, ei pelkkää kuvaamista.

Eri menetelmät rakentavat kontrafaktuaalin eri varmuusasteilla, ja valtionhallinnon arviointiohjeet järjestävät ne sen mukaan. Satunnaistetut kontrolloidut kokeet (RCT), joissa yksilöt tai alueet jaetaan satunnaisesti saamaan tai olemaan saamatta interventiota, tuottavat vahvimman kontrafaktuaalin, koska satunnaistaminen varmistaa, että hoito- ja kontrolliryhmä eroavat keskimäärin vain intervention saamisessa. Cabinet Office ja What Works Network ovat edistäneet RCT-kokeita brittiläisessä julkisessa politiikassa Behavioural Insights Teamin vuoden 2012 "Test, Learn, Adapt" -raportista lähtien, juuri koska heikommat asetelmat ovat alttiita sekoittaville tekijöille — havaittu ero voi heijastaa sitä, kuka valitsi osallistua, ei ohjelman vaikutusta. Kun satunnaistaminen on epäkäytännöllistä tai epäeettistä (kuten se usein on lakisääteisille oikeuksille perustuvissa ohjelmissa tai koko väestöä koskevissa politiikkamuutoksissa), Magenta Book esittää nimenomaisen hierarkian heikommista mutta yhä hyödyllisistä vaihtoehdoista: sovitetut vertailuryhmät, differences-in-differences-asetelmat, regressiodiskontinuiteetti kelpoisuusrajojen ympärillä ja viimeisenä keinona yksinkertainen ennen–jälkeen-vertailu — selkeästi merkittynä heikoimmaksi näytön muodoksi, joka sekoittaa helposti ohjelman vaikutuksen kaikkien muiden samanaikaisesti muuttuneiden asioiden vaikutukseen.

## Matematiikka

Kontrafaktuaalinen kehys, sovellettavissa kaikkiin menetelmiin:

```
Arvioitu vaikutus = Tulos(intervention kanssa) − Tulos(kontrafaktuaali: ilman interventiota)

EI:
Arvioitu vaikutus ≠ Tulos(jälkeen) − Tulos(ennen)   [sekoittaa ajan ja hoidon]
```

Differences-in-differences, yksi yleisimmistä kvasikokeellisista asetelmista valtionhallinnon arvioinnissa, eristää hoitovaikutuksen vähentämällä vertailuryhmän oman ennen–jälkeen-muutoksen:

```
DiD-estimaatti = [Tulos(hoidettu, jälkeen) − Tulos(hoidettu, ennen)]
               − [Tulos(vertailu, jälkeen) − Tulos(vertailu, ennen)]
```

Tämä poistaa molemmille ryhmille yhteisen trendin (esim. kaikkiin vaikuttava kansallinen taloudellinen muutos), jättäen vain interventiolle kohdistettavan erotuksellisen muutoksen.

## Työstetty esimerkki

**Työllisyysohjelma, ennen–jälkeen (heikko asetelma)**: työnhakutukiohjelma raportoi, että osallistujien työllisyys nousi 40 %:sta 55 %:iin vuodessa — naiivi johtopäätös "+15 prosenttiyksikköä ohjelman ansiosta".

**Sama ohjelma, differences-in-differences (vahvempi asetelma)**: sovitettu vertailuryhmä vastaavista ei-osallistujista samalta paikalliselta työmarkkinalta osoittaa työllisyyden nousevan 38 %:sta 47 %:iin samana vuonna (kansallinen taloudellinen elpyminen oli käynnissä).

```
Hoidetun ryhmän muutos:   55 % − 40 % = +15 prosenttiyksikköä
Vertailuryhmän muutos:    47 % − 38 % = +9 prosenttiyksikköä

DiD-estimaatti (todellinen ohjelmavaikutus) = 15 − 9 = +6 prosenttiyksikköä
```

Rehellisesti kohdistettava vaikutus on 6 prosenttiyksikköä, ei 15 — yli puolet näennäisestä ennen–jälkeen-parannuksesta olisi tapahtunut ohjelmasta riippumatta, saman talouden elpymisen nostaessa myös vertailuryhmää.

**Regressiodiskontinuiteetti, kelpoisuusraja**: avustusohjelma on saatavilla vain yrityksille, joilla on alle 50 työntekijää. Rajan juuri alapuolella olevien (45–49 työntekijää, kelpoisia) ja juuri yläpuolella olevien (50–54 työntekijää, ei-kelpoisia) yritysten tulosten vertailu tarjoaa uskottavan kontrafaktuaalin, koska mielivaltaisen hallinnollisen rajan molemmin puolin olevat yritykset ovat muuten samankaltaisia — raja, ei mikään yrityksen taustalla oleva ominaisuus, määrää kelpoisuuden. £2 000 keskimääräinen tulosero kahden ryhmän välillä, havaittuna vain rajalla, voidaan kohdistaa avustukselle paljon suuremmalla varmuudella kuin kaikkien kelpoisten ja kaikkien ei-kelpoisten yritysten (jotka eroavat järjestelmällisesti koossa) yksinkertainen vertailu.

## Yhteys ohjelmistotekniikkaan

Kontrafaktuaalisen ajattelun tulisi muokata sitä, miten vaikuttavuuden seuranta- ja arviointiketjut suunnitellaan valtionhallinnon ja yhteiskunnallisen sektorin ohjelmistoille:

- Rakenna vertailuryhmän tallennus järjestelmään alusta alkaen — tallenna, kuka oli kelpoinen mutta ei ilmoittautunut, tai sovitettu ei-osallistujien kohortti — sen sijaan, että lisäät sen jälkikäteen, kun ohjelma on jo ajettu ja olemassa on vain ennen–jälkeen-dataa.
- Missä satunnaistaminen on mahdollista (vaiheittainen käyttöönotto, digipalvelu, joka otetaan käyttöön joillekin käyttäjille ennen toisia), instrumentoi järjestelmä säilyttämään satunnainen jako kyseltävänä kenttänä; vaiheittainen käyttöönotto tuhoaa vahingossa oman arviointiarvonsa, jos jakojärjestystä ei kirjata.
- Tämä on perustavanlaatuinen menetelmä [vaikuttavuuden arviointimenetelmien](../vaikuttavuuden-arviointimenetelmät/) takana ja se erottaa ne [vaikuttavuusarvioinnista vs. prosessiarvioinnista](../vaikuttavuusarviointi-vs-prosessiarviointi/), joista jälkimmäinen kysyy, toimitettiinko ohjelma aiotulla tavalla eikä sitä, aiheuttiko se vaikutuksen.
- [Lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/) sekä [syrjäyttäminen ja kohdentaminen](../syrjäyttäminen-ja-kohdentaminen/) ovat molemmat perimmiltään kontrafaktuaalisia kysymyksiä — hukkavaikutus on "mikä tämä tietty tulos olisi ollut ilman interventiota", sovellettuna korjaustasolla eikä täyden arviointisuunnittelun tasolla.

## Sudenkuopat

- **Ennen–jälkeen-vertailun käsitteleminen syy-seuraussuhteen näyttönä.** Tämä on yleisin ja seurauksiltaan merkittävin virhe julkisen ja yhteiskunnallisen sektorin vaikutusraportoinnissa; ennen–jälkeen-muutos sekoittaa ohjelman vaikutuksen kaikkeen muuhun, mikä muuttui samana ajanjaksona.
- **Hoidetusta ryhmästä järjestelmällisesti eroavan vertailuryhmän käyttö.** Sovitetun vertailuryhmän on oltava aidosti samankaltainen olennaisilta ominaisuuksiltaan (ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/) -menetelmähierarkia Magenta Bookissa); ohjelman osallistujien (jotka ilmoittautuivat ja ovat usein motivoituneempia) vertaaminen ei-osallistujiin (jotka eivät) kantaa valintaharhan riskiä, joka naamioituu ohjelmavaikutukseksi.
- **Satunnaistamismahdollisuuksien tuhoaminen huonolla toimitussuunnittelulla.** Vaiheittainen tai satunnaistettu käyttöönotto säilyttää arviointiarvonsa vain, jos jako on aidosti satunnainen ja kirjattu — paikallisten johtajien antaminen valita, kuka menee ensin, kumoaa tarkoituksen.
- **Valetarkkuuden väittäminen heikosta asetelmasta.** Ennen–jälkeen-estimaatti tulisi esittää suuntaa-antavana, ei mitattuna vaikutuskokona; Magenta Bookin näyttöhierarkia on olemassa, jotta väitteen vahvuus vastaa sen tuottaneen asetelman vahvuutta.

## Lähteet

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), ja sen
  täydentävä opas kvasikokeellisista menetelmistä.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, näyttöstandardien ohje. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (vakioviite differences-in-differences- ja regressiodiskontinuiteettimenetelmille).
