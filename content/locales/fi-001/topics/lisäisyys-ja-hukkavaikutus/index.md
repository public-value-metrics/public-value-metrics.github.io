# Lisäisyys ja hukkavaikutus

Lisäisyys (additionality) kysyy, aiheuttiko interventio tuloksen, jota ei olisi muuten syntynyt. Hukkavaikutus (deadweight) on sen peilikuva: se osuus tuloksesta, joka olisi syntynyt joka tapauksessa, ilman ohjelmaa, avustusta tai tukea. Lähes jokainen julkisen ohjelman tai hyväntekeväisyysjärjestön vaikutusväite liioittelee vaikutustaan, kunnes hukkavaikutus vähennetään, minkä vuoksi brittiläiset arviointiohjeet pitävät sitä ensimmäisenä ja tärkeimpänä korjauksena mihin tahansa otsikkolukuun.

## Miksi tällä on merkitystä

"Tuimme 500 yritystä kasvamaan" kuulostaa saavutukselta, mutta jos 300 näistä yrityksistä olisi kasvanut joka tapauksessa — koska paikallistalous toipui, koska niillä oli muita rahoituskanavia, koska ne olivat jo kasvu-uralla ennen ohjelman alkua — ohjelman todellinen lisäyspanos on 200, ei 500. HM Treasuryn Magenta Book ja pitkäaikainen HM Treasury/BIS "Additionality Guide" (kehitetty alun perin alueellisen kehityksen ja uudistamisen ohjelmille ja laajasti käytetty sittemmin brittiläisessä valtionhallinnon arvioinnissa) vakiinnuttavat hukkavaikutuksen vakiomuotoisen nettovaikutusjärjestyksen lähtökorjaukseksi: bruttovaikutus miinus hukkavaikutus, miinus syrjäytyminen, miinus vuoto, korjattuna kerroinvaikutuksilla, on netto lisävaikutus. Tämän vaiheen ohittaminen on yleisin tapa, jolla julkisen ja yhteiskunnallisen sektorin vaikutusväitteitä paisutetaan, tahallaan tai ei — avustusohjelma, joka mittaa vain osallistujien bruttotuloksia ilman vertailuryhmää, ei voi erottaa omaa vaikutustaan siitä, mitä olisi tapahtunut joka tapauksessa.

Hukkavaikutus ei ole kiinteä prosenttiosuus; se riippuu täysin kyseisen väestön ja intervention kontrafaktuaalista (ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/)). Englannin alueellisen kehityksen arvioinneissa aiempien Regional Development Agencies -virastojen aikana hukkavaikutusasteet olivat tyypillisesti 20–60 % yritystuen tyypistä riippuen, minkä vuoksi uskottavat ohjelma-arvioinnit raportoivat hukkavaikutuksella korjatun vaihteluvälin yhden oletetun luvun sijaan, ja minkä vuoksi rahoittajat kuten National Lottery Community Fund ja Big Society Capital vaativat avustuksensaajia käsittelemään hukkavaikutusta nimenomaisesti tulosraportoinnissa osallistujien bruttomäärien ilmoittamisen sijaan.

## Matematiikka

Vakiomuotoinen nettovaikutuskorjausjärjestys, sellaisena kuin se esitetään brittiläisissä arviointiohjeissa (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF- ja rakennerahastojen arviointiohjeet):

```
Bruttotulos
  − Hukkavaikutus  (se, mikä olisi tapahtunut joka tapauksessa)
  − Syrjäytyminen  (muualta siirtynyt toiminta/hyöty, ei luotu — ks.
                     displacement-and-attribution)
  − Vuoto          (kohderyhmän/-alueen ulkopuolelle valuva hyöty)
  × Kerroin        (lisäepäsuora/indusoitu taloudellinen toiminta, jos positiivinen)
  = Netto lisävaikutus
```

Hukkavaikutusaste suhteena:

```
Hukkavaikutusaste = tulokset, jotka olisivat syntyneet ilman interventiota
                     / havaitut bruttotulokset yhteensä

Netto lisätulokset = Bruttotulokset × (1 − Hukkavaikutusaste)
```

## Työstetty esimerkki

**Yritystukiavustusohjelma**: alueellinen avustusohjelma raportoi, että 500 tuettua yritystä lisäsi työllisyyttä seuraavana vuonna keskimäärin 3 työpaikalla kukin — bruttoväite 1 500 työpaikkaa.

Vastaavien tukemattomien yritysten sovitettu vertailuryhmä (ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/)) osoittaa, että 40 % tuettujen yritysten työllisyyskasvusta olisi tapahtunut joka tapauksessa, perustuen siihen, miten sovitettu ryhmä suoriutui samalla ajanjaksolla.

```
Hukkavaikutusaste = 40 %
Netto lisätyöpaikat = 1 500 × (1 − 0,40) = 900 työpaikkaa
```

Ohjelman rehellisesti raportoitava saavutus on 900 työpaikkaa, ei 1 500 — 40 %:n vähennys pelkästään hukkavaikutuskorjauksesta, ennen kuin syrjäytymistä tai vuotoa edes huomioidaan.

**Hyväntekeväisyysjärjestön työllisyysohjelma**: hyväntekeväisyysjärjestö sijoittaa 200 pitkäaikaistyötöntä työhön kustannuksella £600 000 (£3 000 sijoitusta kohti, brutto). Kansalliset työmarkkinatiedot osoittavat, että ilman mitään interventiota noin 15 % vastaavasta pitkäaikaistyöttömien joukosta löytää työtä samana ajanjaksona luonnollisen työmarkkinaliikkeen kautta.

```
Hukkavaikutusaste = 15 %
Netto lisäsijoitukset = 200 × (1 − 0,15) = 170
Todellinen kustannus lisäsijoitusta kohti = £600 000 / 170 ≈ £3 529
```

Bruttokustannus sijoitusta kohti (£3 000) aliarvioi hyväntekeväisyysjärjestön lisäpanoksen todellisen kustannuksen noin 15 %:lla.

## Yhteys ohjelmistotekniikkaan

Lisäisyys ja hukkavaikutus ovat suoraan merkityksellisiä kaikille, jotka rakentavat vaikutusten mittaus- tai avustustenhallintaohjelmistoa julkiselle tai yhteiskunnalliselle sektorille:

- Tulosraportointijärjestelmien tulisi kerätä vertailu- tai lähtötasoryhmä suunnittelun mukaisesti, ei vain osallistujien tuloksia — kontrafaktuaalin jälkiasentaminen järjestelmän käynnistymisen jälkeen ilman sitä on paljon vaikeampaa kuin keräämisen rakentaminen sisään alusta alkaen (ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/)).
- Kojelaudat, jotka raportoivat vain osallistujien bruttomääriä, liioittelevat järjestelmällisesti vaikutusta rahoittajille ja valvontaelimille; missä hukkavaikutusarvioita on saatavilla (arviointikirjallisuudesta tai vertailuryhmästä), ohjelmiston tulisi näyttää hukkavaikutuksella vähennetty luku bruttoluvun rinnalla, ei sen sijaan.
- Tämä liittyy suoraan [yhteiskunnalliseen sijoitetun pääoman tuottoon](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/), jonka SROI-suhde on uskottava vasta, kun hukkavaikutus (ja syrjäytyminen) on vähennetty väitetyistä bruttotuloksista — SROI-laskuri, joka ohittaa tämän vaiheen, tuottaa paisuneita suhteita, jotka eivät kestä tarkastelua.

## Sudenkuopat

- **Bruttotulosten raportointi kaikkina lisäisinä.** Tämä on yleisin vaikutusmittausvirhe avustus- ja ohjelmaraportoinnissa; kysy aina "olisiko tämä tapahtunut joka tapauksessa?" ennen otsikkoluvun julkaisemista.
- **Oletus, että yksi hukkavaikutusprosentti pätee kaikkialla.** Hukkavaikutus vaihtelee valtavasti sektorin, väestön ja paikallisten talousolojen mukaan; käytä vertailuryhmää tai sektorikohtaista näyttöä sen sijaan, että käyttäisit uudelleen toisen arvioinnin lukua.
- **Hukkavaikutuksen sekoittaminen syrjäytymiseen.** Hukkavaikutus koskee samojen osallistujien kontrafaktuaalisia tuloksia; syrjäytyminen koskee vaikutuksia muihin ihmisiin tai paikkoihin — ks. [syrjäyttäminen ja kohdentaminen](../syrjäyttäminen-ja-kohdentaminen/). Kahden sekoittaminen johtaa korjauksen kaksoislaskentaan tai alilaskentaan.
- **Osallistujien itse raportoima hukkavaikutus.** Edunsaajilta kysyminen "olisiko tämä tapahtunut ilman apuamme?" tuottaa järjestelmällisesti matalia hukkavaikutusarvioita (osallistujat yleensä kreditoivat ohjelman); riippumaton vertailuryhmä on paljon luotettavampi.

## Lähteet

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3. painos), kehitetty alun perin
  English Partnershipsin ja Housing Corporationin kanssa.
- Euroopan komissio, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  ohjeistus hukkavaikutuksesta, syrjäytymisestä ja vuodosta rakennerahastojen arvioinnissa.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
