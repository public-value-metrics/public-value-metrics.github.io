# Julkisen arvon tuloskortti

Julkisen arvon tuloskortti (public value scorecard) mukauttaa Robert Kaplanin ja David Nortonin vuoden 1992 tasapainotetun tuloskortin — joka on rakennettu yrityksille, jotka optimoivat voittoa talouden, asiakkaiden, sisäisten prosessien sekä oppimisen ja kasvun näkökulmista — organisaatioille, joiden tulos on tehtävä, ei katemarginaali. Se pakottaa julkisen elimen raportoimaan suorituskyvystä useissa palautumattomissa ulottuvuuksissa yhtä aikaa sen sijaan, että kaikki tiivistettäisiin yhteen lukuun, joka kätkee vaihtokaupat.

## Miksi tällä on merkitystä

Kaplanin ja Nortonin alkuperäinen argumentti Harvard Business Reviewssa oli, että yksittäinen taloudellinen mittari on jälkikäteen vahvistava indikaattori, joka ei kerro mitään siitä, *miksi* suorituskyky muuttuu ensi neljänneksellä. Yksityisellä sektorilla korjaus oli neljä toisiinsa kytkeytyvää näkökulmaa. Hallinnossa Mark Mooren "strateginen kolmio" (teoksesta *Creating Public Value*, 1995) tarjoaa vastaavan rakenteen: palvelun on samanaikaisesti tuotettava **julkista arvoa** (tehtävän tulos), ylläpidettävä **legitimiteettiä ja tukea** (poliittinen ja julkinen tuki) ja oltava **toiminnallisesti toteutettavissa** (toimitettavissa resursseilla ja kyvykkyydellä, joita todella on). Paul Nivenin teos *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) on ammattilaisen käsikirja Kaplanin ja Nortonin neljän laatikon kääntämiseen tähän kolmioon — tyypillisesti nimeämällä "talous" uudelleen "resurssien hoidoksi", asettamalla "tehtävä" ylimmäksi "osakkeenomistaja-arvon" sijaan alimmaksi ja käsittelemällä asiakas- ja sidosryhmänäkökulmia tasa-arvoisina eikä voitolle alisteisina. Syy, miksi tällä on merkitystä toimitustiimille, on se, että julkinen digitaalinen palvelu, jota arvioidaan vain taloudellisella tai tehokkuusmittarilla (esimerkiksi kustannus transaktiota kohti), aliinvestoi järjestelmällisesti legitimiteetti- ja tulosulottuvuuksiin, joita talousmittari ei näe.

## Matematiikka

Julkisen arvon tuloskortti on viitekehys, ei kaava, mutta sen rakenne on kiinteä ja kannattaa toistaa täsmälleen:

```
Näkökulma            Julkisen sektorin kysymys                  Esimerkki-indikaattori
--------------------------------------------------------------------------------
Tehtävä / tulokset    Saavutammeko julkisen arvon, jonka        Väestön tulosmitta
                       luomiseksi olemme olemassa?               (ks. outcomes-vs-outputs)
Resurssien hoito      Käytämmekö julkisia varoja tehokkaasti    Kustannus tulosta kohti,
                       ja valtuutettujen rajojen sisällä?        budjettipoikkeama
Asiakas / käyttäjä    Pääsevätkö käyttäjät ja kansalaiset       Suoritusaste, tyytyväisyys
                       palvelun piiriin ja hyötyvätkö siitä?
Legitimiteetti /      Tukevatko poliittiset päämiehet,          Luottamusmittarit,
  tuki                 valvontaelimet ja yleisö yhä meitä?       tarkastushavainnot,
                                                                 hyväksytyt valitukset
Sisäinen prosessi /   Onko meillä kyvykkyys ja prosessi         Henkilöstön vaihtuvuus,
  oppiminen            jatkaa parantamista?                      läpimenoaika, jonon ikä

Puolustettava tuloskortti raportoi 3–5 indikaattoria näkökulmaa kohti, valittuina niin,
ettei yhtäkään näkökulmaa voi manipuloida ilman, että vahinko näkyy toisessa.
```

## Työstetty esimerkki

**Paikallisviranomaisen aikuissosiaalihuollon osasto**: kuntoutuspalvelun (lyhytaikainen tuki, joka auttaa ihmisiä saamaan itsenäisyyttään takaisin sairaalajakson jälkeen) tuloskortti raportoi:

```
Tehtävä:        68 % palvelun käyttäjistä ei tarvitse jatkuvaa hoitoa 6 viikon jälkeen (tavoite 65 %)
Resurssien hoito: kustannus suoritettua kuntoutusjaksoa kohti = £1 850 (budjettioletus £2 000)
Asiakas:        käyttäjätyytyväisyys 82 %, keskimääräinen odotus palvelun alkuun 4,1 päivää
Legitimiteetti: 3 hyväksyttyä valitusta 1 000 jaksoa kohti; aikuisten suojelulautakunta arvioi
                palvelun "hyväksi"
Prosessi:       henkilöstön avoimien paikkojen osuus 14 %, keskimääräinen asiakasmäärä 23
                (turvallinen asiakasmäärän katto: 25)
```

Erillisinä luettuna tehtävä- ja resurssilukemat näyttävät suoraviivaiselta menestystarinalta: budjetin alapuolella ja tulostavoitteen yläpuolella. Prosessirivin kanssa yhdessä luettuna 14 %:n avoimien paikkojen osuus 25:n asiakasmääräkattoa vasten osoittaa, että hyvää tulosta ostetaan toimimalla lähellä turvatonta henkilöstömitoitusta — varoitus, jota pelkkä tehtäväluku ei koskaan nostaisi esiin, ja täsmälleen se epäonnistumistapa, jota yhden näkökulman KPI (ks. [julkisen sektorin KPI:t](../julkisen-sektorin-suorituskykymittarit/)) kutsuu.

## Yhteys ohjelmistotekniikkaan

Sisäistä tai yleisölle suunnattua kojelautaa rakentavalle tiimille tuloskortti on suora argumentti yhtä "terveyspisteitä" -widgetiä vastaan: rakenna yksi paneeli näkökulmaa kohti ja vastusta tuotepainetta yhdistää ne liikennevaloksi, koska yhdistämisvaihe on täsmälleen se kohta, jossa vaihtokauppatieto tuhoutuu. Se vastaa myös siististi tuotetiimien OKR-rakenteita: tehtävä-OKR ilman paritettua resurssien hoito- tai prosessi-OKR:ää toistaa yhden mittarin epäonnistumistavan, jota vastaan Kaplan ja Norton kirjoittivat vuonna 1992. Ks. [julkinen arvo](../julkinen-arvo/) Mooren taustalla olevasta teoriasta siitä, mitä "tehtävä"-laatikon tulisi todella sisältää, ja
[luottamus- ja legitimiteettimittarit](../luottamus-ja-legitimiteettimittarit/) siitä, miten legitimiteettinäkökulma täytetään todellisilla, lähteistetyillä indikaattoreilla sellaisen korvikkeen sijaan, jota kukaan ei voi puolustaa.

## Sudenkuopat

- **Tuloskortin romahduttaminen yhdeksi pisteeksi**: neljän näkökulman keskiarvoistaminen yhdeksi luvuksi tuo takaisin juuri sen ongelman — huonon legitimiteettipisteen peittäminen hyvällä resurssien hoidon pisteellä — jonka estämiseksi tuloskortti on olemassa.
- **Yksityisen sektorin "talous"-näkökulman kopiointi muuttumattomana**: julkisen elimen resurssien hoidon näkökulma koskee pysymistä valtuutettujen, usein varattujen budjettien sisällä, ei tulojen maksimointia — Nivenin uudelleennimeäminen ei ole kosmeettista.
- **Indikaattoreiden valinta, joita tuloskortin omistava tiimi voi yksipuolisesti siirtää**: legitimiteettiindikaattori, joka on peräisin samasta tiimistä, jota se arvioi (esimerkiksi itseraportoitu valitusten käsittely), ei ole riippumatonta näyttöä.
- **Tuloskortin rakentaminen kerran ja painojen tai indikaattoreiden uudelleentarkastelun laiminlyönti**: Kaplan ja Norton tarkoittivat vuosittaista strategiakatselmusta; vuosia jäädytetty tuloskortti ajautuu pois tehtävästä, jota sen oli tarkoitus seurata.

## Lähteet

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
