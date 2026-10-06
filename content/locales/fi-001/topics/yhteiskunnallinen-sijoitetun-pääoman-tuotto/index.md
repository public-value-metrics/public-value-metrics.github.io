# Yhteiskunnallinen sijoitetun pääoman tuotto (SROI)

Yhteiskunnallinen sijoitetun pääoman tuotto (social return on investment) on viitekehys, jolla mitataan, rahamääräistetään ja kirjataan laaja arvokäsite — sosiaalinen, ympäristöllinen ja taloudellinen — ja ilmaistaan se suhdelukuna sijoitettuihin resursseihin nähden, esimerkiksi "£1,44 yhteiskunnallista arvoa jokaista sijoitettua £1:aa kohti". Se on suunniteltu laajentamaan kirjanpidon logiikkaa tuloksiin, joita markkinat eivät hinnoittele, menettämättä kirjanpidon kuria: jokaisen SROI:n luvun on oltava jäljitettävissä sidosryhmien määrittelemään tulokseen, näyttöpohjaan ja nimenomaiseen korjaukseen sen suhteen, mitä olisi tapahtunut joka tapauksessa.

## Miksi tällä on merkitystä

SROI:ta ylläpitävät Social Value UK ja Social Value International, SROI Networkin seuraajaorganisaatiot, joiden "A Guide to Social Return on Investment" (2012) on yhä viitemenetelmä. Viitekehys perustuu seitsemään periaatteeseen — osallista sidosryhmät, ymmärrä, mikä muuttuu, arvota tärkeät asiat, sisällytä vain olennainen, älä liioittele, ole läpinäkyvä ja varmenna tulos — ja juuri viides periaate, "älä liioittele", on se, jonka useimmat todellisuudessa julkaistut SROI-raportit rikkovat. Suhdeluku, joka on tuotettu ohittamalla hukkavaikutus- ja kohdentamiskorjaukset, ei ole SROI; se on markkinointiluku SROI:n vaatteissa. Ohjelmistoinsinöörien, jotka rakentavat raportointityökaluja hyväntekeväisyysjärjestöille, yhteiskunnallisille yrityksille tai tilaajille, on tunnettava ero, koska työkalu joko pakottaa kurin noudattamiseen tai tekee sen ohittamisesta helppoa.

## Matematiikka

SROI nojaa [muutosteoriaan](../muutosteoria/), jotta voidaan tunnistaa, mitkä tulokset kuuluvat laajuuteen, ja ilmaisee ne samalla vastuuketjulla kuin [logiikkamalli](../logiikkamalli/):

```
SROI-suhde = Tulosten nykyarvo / Panosten arvo

Prosessi:
 1. Määritä laajuus ja tunnista sidosryhmät, joiden tuloksia mitataan
 2. Kartoita tulokset (muutosteoria, todennettu sidosryhmien kanssa, ei oletettu)
 3. Todenna tulokset ja anna niille arvo rahamääräisten korvikkeiden avulla
 4. Määritä vaikutus: bruttoarvo − hukkavaikutus − kohdentaminen − syrjäyttäminen,
    ja sovella sitten arvon hiipumista
 5. Laske SROI: vaikutuksen nettonykyarvo ÷ panosten arvo
 6. Raportoi, hyödynnä ja juurruta — suhdeluku on viestintäväline, ei päämäärä
```

Hukkavaikutus, kohdentaminen ja syrjäyttäminen on käsitelty aiheissa
[lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/) sekä
[syrjäyttäminen ja kohdentaminen](../syrjäyttäminen-ja-kohdentaminen/); kaikki kolme ovat olemassa eristääkseen todellisen [kontrafaktuaalisen](../kontrafaktuaalianalyysi/) vaikutuksen bruttotuloksesta.

## Työstetty esimerkki

**Paikallisviranomaisen työllisyysohjelma**: vuotuinen panoskustannus £250 000. Kuusikymmentä osallistujaa siirtyy pysyvään työhön; tämän tuloksen rahamääräinen korvike (hyvinvoinnin paraneminen, vähentynyt etuuksista riippuvuus ja verotulot yhdessä) on £8 500 henkeä kohti ensimmäiseltä vuodelta — ks. [yksikkökustannustietokannat](../yksikkökustannustietokannat/), mistä tällaiset korvikkeet tulevat.

- Tulosten bruttoarvo: 60 × £8 500 = £510 000
- Vähennetään hukkavaikutus (40 % olisi todennäköisesti löytänyt työtä ilman ohjelmaa): £510 000 × 0,60 = £306 000
- Vähennetään kohdentaminen (30 % jäljelle jäävästä muutoksesta johtuu muiden virastojen tuesta): £306 000 × 0,70 = £214 200
- Toisen vuoden tulos 30 %:n hiipumisella: £214 200 × 0,70 = £149 940, diskontattuna 3,5 %:lla vuodessa (ks.
  [sosiaalinen diskonttokorko](../sosiaalinen-diskonttokorko/)): £149 940 ÷ 1,035 = £144 870
- Vaikutuksen nykyarvo yhteensä: £214 200 + £144 870 = £359 070
- **SROI-suhde: £359 070 ÷ £250 000 = 1,44**, raportoituna "£1,44 yhteiskunnallista arvoa jokaista sijoitettua £1:aa kohti"

**Hyväntekeväisyysjärjestö**: £60 000 maksava ystävätoimintapalvelu vähentää 80 iäkkään ihmisen yksinäisyyttä, arvotettuna korvikkeella £1 100/henkilö/vuosi. Bruttoarvo £88 000; 35 %:n hukkavaikutuksen ja 15 %:n kohdentamisen jälkeen nettovaikutus on £88 000 × 0,65 × 0,85 = £48 620, SROI-suhde 0,81 — alle kannattavuusrajan, mikä on oikeutettu ja hyödyllinen löydös, ei kirjaamatta jätettävä epäonnistuminen.

## Yhteys ohjelmistotekniikkaan

SROI-laskuri, jossa käyttäjä voi syöttää tulosmääriä ja korvikearvoja mutta jossa ei ole pakollista kenttää hukkavaikutukselle, kohdentamiselle tai linkitetylle muutosteorialle, tuottaa oletuksena paisuneita suhdelukuja, koska korjausten ohittaminen on pienimmän vastuksen tie. Rakenna kuri skeemaan: jokaisen tulosrivin tulisi viitata sidosryhmään, todennettuun määrään, rahamääräiseen korvikkeeseen lähteineen sekä pakollisiin hukkavaikutus- ja kohdentamiskenttiin. Ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/) erottelusta, jonka varassa SROI:n tuloskartoitus on, ja [logiikkamalli](../logiikkamalli/) ketjusta, jota työkalun tulisi peilata datamallissaan.

## Sudenkuopat

- **Hukkavaikutuksen ja kohdentamisen ohittaminen.** Otsikkosuhde ilman näitä korjauksia on bruttoluku, ei nettovaikutusluku, ja Social Value UK:n periaatteet vaativat nimenomaisesti molempia.
- **Suhdelukujen vertailu organisaatioiden välillä.** SROI-suhde riippuu tapauskohtaisesti tehdyistä laajuus- ja korvikevalinnoista; 4:1-suhteen pitäminen yhdessä raportissa "parempana" kuin 2:1-suhde toisessa sivuuttaa sen, että oletuksia ei ole standardoitu kuten rahoituskirjanpidon tunnuslukuja.
- **Päällekkäisten korvikkeiden kaksoislaskenta.** "Vähentyneen yksinäisyyden" korvikkeen pinoaminen "parantuneen mielenterveyden" korvikkeen kanssa samoille edunsaajille voi arvottaa yhden taustalla olevan muutoksen kahdesti.
- **Sidosryhmävuoropuhelun ohittaminen.** Ensimmäinen periaate edellyttää, että tulokset määritellään niitä kokevien ihmisten kanssa, ei mallia rakentavan analyytikon oletuksina.

## Lähteet

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
