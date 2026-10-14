# Paljastettujen preferenssien arvottaminen

Paljastettujen preferenssien menetelmät päättelevät ei-markkinahyödykkeen arvon havaittavasta käyttäytymisestä liittyvillä markkinoilla sen sijaan, että kysyisivät ihmisiltä suoraan. Hedoninen hinnoittelu ja matkakustannusmenetelmä ovat kaksi perustekniikkaa: molemmat lähtevät todellisesta transaktiosta ja johtavat implisiittisen hinnan sille, mitä ei koskaan myyty suoraan.

## Miksi tällä on merkitystä

Siinä missä [ilmaistujen preferenssien](../ilmaistujen-preferenssien-arvottaminen/) menetelmät esittävät hypoteettisen kysymyksen, paljastettujen preferenssien menetelmät havainnoivat, mistä ihmiset todella maksoivat, mitä Green Book pitää yleensä uskottavampana näyttönä, muiden tekijöiden pysyessä samoina, koska se ei ole alttiina hypoteettiselle vinoumalle — hedonisen asuntohintatutkimuksen vastaajat todella maksoivat mitatun lisähinnan tai alennuksen (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, liite 2). Hedoninen hinnoittelu purkaa markkinahinnan — tyypillisesti asuntohinnan — hyödykkeen kunkin ominaisuuden implisiittisiin hintoihin, mahdollistaen analyytikoille esimerkiksi sen lisähinnan eristämisen, jonka kotitaloudet todella maksavat asuakseen jossain hiljaisemmassa tai paremmalla ilmanlaadulla, kontrolloiden tilastollisesti jokaista muuta ominaisuutta, joka myös vaikuttaa asuntohintaan (koko, sijainti, koulupiiri). Matkakustannusmenetelmä tekee analogisesti saman virkistyspaikoille, joihin ei ole sisäänpääsymaksua: aika ja raha, jotka ihmiset käyttävät paikkaan matkustamiseen, paljastavat alarajan sille, kuinka paljon paikka on heille arvoinen, koska kukaan ei kanna kustannusta, joka ylittää vierailun arvon hänelle.

Molemmilla menetelmillä on sama rakenteellinen rajoitus: ne voivat arvottaa vain sen, mikä on upotettu olemassa olevaan markkinatapahtumaan. Lentokentän kiitotien lähellä oleva melu näkyy asuntohinnoissa, koska melusta välittävät ihmiset asettuvat hiljaisempiin asuntoihin; lajin, jota kukaan ei vieraile tai jonka lähellä kukaan ei asu, olemassaoloarvo ei näy missään transaktiossa, mikä on juuri se aukko, jonka [ilmaistujen preferenssien](../ilmaistujen-preferenssien-arvottaminen/) menetelmät on tarkoitettu täyttämään.

## Matematiikka

```
Hedoninen hinnoittelu:
  Asuntohinta = f(rakenteelliset ominaisuudet, sijaintiominaisuudet,
                   kiinnostava ympäristöominaisuus, ...)
  Estimoi regressiolla; ympäristöominaisuuden kerroin
  (kaikki muu vakiona) on sen implisiittinen hinta.

  Ominaisuuden X implisiittinen hinta = ∂(Asuntohinta) / ∂X

Matkakustannusmenetelmä:
  Käyntiaste (käyntiä asukasta kohti vyöhykkeeltä i) = f(matkakustannus vyöhykkeeltä i,
                   korvaavat paikat, sosioekonomiset kontrollit)
  Estimoi kysyntäkäyrä käynneille matkakustannuksen funktiona.
  Kuluttajan ylijäämä = arvioidun kysyntäkäyrän alle jäävä pinta-ala
                      = paikan arvo vierailijoille
```

Molemmat menetelmät vaativat tilastollisesti järkevän kontrollijoukon — sekoittavan ominaisuuden (hedoninen) tai lähellä olevan korvaavan paikan (matkakustannus) poisjättäminen vääristää implisiittistä hintaa suuntaan, joka ei ole aina etukäteen ilmeinen, minkä vuoksi Green Bookin liite 2 vaatii regressiospesifikaation ja kontrollien raportoimista, ei vain otsikkokerrointa.

## Työstetty esimerkki

**Valtionhallinto**: Green Bookin oma hiilen varjohinnan metodologia nojaa osittain hedonisiin todisteisiin, mutta yksinkertaisempi havainnollistava tapaus on lentokonemelu. Hedoninen tutkimus, joka regressoi asuntojen myyntihintoja lentoreitin alueella etäisyydellä painotettua melualtistusta vastaan, kontrolloiden kokoa, ikää ja koulupiiriä, havaitsee, että jokainen 1 desibelin nousu keskimääräisessä melualtistuksessa liittyy 0,5 %:n laskuun asunnon hinnassa. Tyypilliselle £280 000 asunnolle vaikutusalueella:

```
Implisiittinen hinta desibeliä kohti = £280 000 × 0,5 % = £1 400 kotitaloutta kohti
Kotitaloudet, joihin uusi kiitotie vaikuttaa 3 dB:n nousulla = 18 000
Melun lisääntymisen implisiittinen kokonaiskustannus = £1 400 × 3 × 18 000 = £75,6 milj.
```

Tämä on kertaluonteinen pääomitettu kustannus (upotettu asunnon hintaan), jota arvioinnin on varottava laskemasta kahdesti erikseen arvioitua vuotuista melun häiriökustannusvirtaa vastaan.

**Hyväntekeväisyysjärjestö**: ympäristöhyväntekeväisyysjärjestö käyttää matkakustannusmenetelmää arvottaakseen ilmaiseksi sisään pääsevän luonnonsuojelualueen. Vierailijoiden postinumeroista kerätty kyselydata antaa keskimääräiseksi edestakaisen matkan kustannukseksi (aika arvotettuna Green Bookin suosittelemalla ei-työajan arvolla, plus polttoaine) £14 vierailua kohti, 40 000 vierailulla vuodessa. Arvioitu kysyntäkäyrä — käyntiasteet laskevat, kun matkakustannus vyöhykkeeltä nousee — implikoi kuluttajan ylijäämän vierailua kohti, yli todella käytettyjen £14:n, noin £9.

```
Vuotuinen kokonaisarvo = 40 000 vierailua × (£14 käytetty + £9 kuluttajan ylijäämä)
                        = 40 000 × £23 ≈ £920 000/vuosi
```

Tämä ylittää reilusti alueen nollan sisäänpääsymaksutulot ja antaa hyväntekeväisyysjärjestön luottamushenkilöille puolustettavan luvun paikan virkistysarvolle, kun he perustelevat asiaa rahoittajille.

## Yhteys ohjelmistotekniikkaan

Paljastettujen preferenssien ajattelu ilmenee julkisen sektorin tuoteanalytiikassa useammin kuin ammattilaiset tajuavat: ilmaisen valtionhallinnon digipalvelun käyttödata on itsessään paljastetun preferenssin näyttöä arvosta (taajuus, istunnon pituus ja — kaikkein paljastavimmin — toistuvan vs. kertaluonteisen käytön mallit voidaan analysoida samalla tavalla kuin matkakustannusmalli käsittelee käyntitaajuutta etäisyyttä vastaan). Missä palvelulla on aitoja korvaajia (paperikanava, puhelinlinja), "kustannus", jonka kansalaiset kantavat käyttääkseen digitaalista kanavaa sen sijaan (aika, data, laite), voidaan estimoida ja verrata käyttöön, kaikuen suoraan matkakustannuslogiikkaa. Ks. [digitaalisen palvelun standardi](../digitaalisen-palvelun-standardi/) ja [avoimen datan arvo](../avoimen-datan-arvo/), joka kohtaa täsmälleen tämän arvottamisongelman hyödykkeelle, jolla ei ole suoraa markkinahintaa.

## Sudenkuopat

- **Pois jätetyn muuttujan vinouma hedonisissa malleissa.** Korreloivan ominaisuuden poisjättäminen (koulun laatu, joka korreloi sekä asuntohinnan että kiinnostavan ympäristömuuttujan kanssa) vääristää implisiittisen hinnan estimaattia; spesifikaatio on raportoitava ja tarkasteltava, ei vain tulosta.
- **Korvaavien paikkojen sivuuttaminen matkakustannustutkimuksissa.** Vierailijan paljastettu arvo paikalle aliarvioidaan, jos lähempi korvaava paikka on olemassa eikä sitä kontrolloida — hän saattaa vierailla pääasiassa siksi, että se on ilmainen, ei siksi, että se on ainutlaatuisen arvokas.
- **Paljastettujen preferenssien soveltaminen hyödykkeeseen, jolla ei ole markkinakaikua lainkaan.** Olemassaoloarvo, valinta-arvo ja perintöarvo eivät näy missään transaktiossa eikä niitä voi palauttaa hedonisilla tai matkakustannusmenetelmillä — tämä aukko kuuluu [ilmaistujen preferenssien arvottamiselle](../ilmaistujen-preferenssien-arvottaminen/).
- **Pääomitetun (kertaluonteisen) arvon sekoittaminen vuotuiseen virtaan.** Hedoniset asuntohintavaikutukset ovat tyypillisesti kertaluonteisia pääomitettuja arvoja; niiden käsitteleminen vuotuisena hyötyvirtana paisuttaa arviointia.

## Lähteet

- HM Treasury. "The Green Book," liite 2: ei-markkinavaikutusten arvottaminen.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Lentokonemelun arvottamistutkimukset,
  joita käytetään lentoasema-arvioinnissa. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (matkakustannusmenetelmän alkuperä).
