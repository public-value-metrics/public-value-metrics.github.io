# Tulokset vs. suoritteet

Suorite (output) on toiminnon suora, laskettavissa oleva tuote — se on olemassa heti, kun toimitus tapahtuu, riippumatta siitä, mikä vaikutus sillä on. Tulos (outcome) on muutos, joka seuraa ihmisille, paikalle tai järjestelmälle. "500 ihmistä osallistui työnhakutyöpajaan" on suorite: se pitää paikkansa, vaikka kukaan heistä ei löytäisi työtä. "500 ihmisen työllistymisnäkymät paranivat" on tulosväite, ja se vaatii näyttöä muutoksesta, ei vain osallistumisesta — sekaannus, joka tuottaa harhaanjohtavampia avustusraportteja kuin lähes mikään muu mittausvirhe alalla.

## Miksi tällä on merkitystä

HM Treasuryn Magenta Book ja rahoittajat kuten National Lottery Community Fund edellyttävät tulosraportointia nimenomaan siksi, että suoritteet ovat se, mitä ohjelmat raportoivat oletuksena: ne on halpa laskea, ne ovat aina saatavilla ja ne näyttävät aina myönteisiltä. Suoritemäärä ei voi kirjaimellisesti koskaan laskea sen seurauksena, että ohjelma epäonnistuu — toimitettujen istuntojen lisääntyminen on aina "enemmän", kun taas tulos voi paljastaa, ettei ohjelma toimi. National Audit Office on toistuvasti kritisoinut valtionhallinnon ohjelmia toiminnan tason raportoimisesta ikään kuin se olisi näyttöä onnistumisesta; ohjelmistojärjestelmä, joka tekee helpoksi raportoida vain suoritteita, vahvistaa tätä oletuksena, koska suoritteet eivät vaadi seurantadatan keruuta ja tulokset vaativat.

## Matematiikka

Kaavaa ei ole, mutta on luotettava testi mittarin luokitteluun:

```
Suoritetesti: onko se laskettavissa toimituspisteessä, ja pitääkö se paikkansa, vaikka vastaanottajaan ei vaikuteta?
Tulostesti:   vaatiiko se ennen/jälkeen- tai kanssa/ilman-vertailun ollakseen merkityksellinen?

Jos luku voi olla tosi ilman, että kukaan hyötyy, se on suorite.
```

Tämä kuuluu laajempaan [logiikkamallin](../logiikkamalli/) ketjuun ja nojaa [muutosteoriassa](../muutosteoria/) määriteltyihin tuloslenkkeihin; tuloksen muuntaminen rahaksi käyttää aiheen [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) menetelmiä.

## Työstetty esimerkki

**Paikallisviranomainen (työllisyystuki)**: suorite — 500 ihmistä osallistui työnhakutyöpajoihin. Tulos — 12 kuukauden seurannassa 140 näistä 500:sta (28 %) on pysyvässä työssä (6+ kuukautta). Vertailuryhmällä, jolla on samankaltaiset ominaisuudet mutta ei pääsyä ohjelmaan, on 15 %:n lähtötason työllisyysaste samalla ajanjaksolla. Nettotulosparannus: 28 % − 15 % = 13 prosenttiyksikköä, joten arviolta 500 × 0,13 = 65 lisähenkilöä on töissä, jotka eivät muuten olisi — kohdistettava tulos, erillinen sekä 500:n osallistumisluvusta että 140:n raakatyöllisyysluvusta.

**Hyväntekeväisyysjärjestö (lukutaitojärjestö)**: suorite — 1 200 lukuhetkeä toimitettu 300 lapselle. Tulos — keskimääräinen lukuikä parani 8 kuukautta 6 kuukauden jaksolla, kun odotettu luonnollisen kehityksen lähtötaso 6 kuukaudelle on 6 kuukautta. Nettotulosparannus: 8 − 6 = 2 kuukauden lisäparannus lukuiässä lasta kohti, kohdistettavissa ohjelmalle, ei koko 8 kuukauden lukua.

## Yhteys ohjelmistotekniikkaan

Tapahtumalokit ja transaktiojärjestelmät instrumentoivat suoritteet lähes automaattisesti — sivunäytöt, istunnot, suljetut tiketit, varatut vastaanotot — koska ne syntyvät järjestelmän tehdessä työtään. Tulokset vaativat datamallin, joka tallentaa saman yksilön myöhemmässä ajankohdassa suhteessa lähtötasoon tai vertailuun, mikä on suunniteltava sisään tarkoituksella: seurantakyselyt, linkitetyt hallinnolliset rekisterit tai vertailukohortti. Raportointityökalu, joka tukee vain edellistä, ohjaa organisaatiota hiljaa kohti pelkkää suoriteraportointia riippumatta siitä, mitä rahoittaja pyysi. Ks. [logiikkamalli](../logiikkamalli/) siitä, missä tulokset sijaitsevat vastuuketjussa, [kustannus tulosta kohti](../kustannus-tulosta-kohti/) tämän erottelun muuntamisesta yksikkökustannusmittariksi ja [julkisen sektorin KPI:t](../julkisen-sektorin-suorituskykymittarit/) mittarivalinnan laajemmasta kaavasta.

## Sudenkuopat

- **Suoritteiden raportointi ikään kuin ne olisivat tuloksia.** "500 ihmistä osallistui" antaa ymmärtää hyödyn osoittamatta sitä; merkitse osallistuminen nimenomaisesti suoritteeksi.
- **Ei lähtötasoa tai vertailuryhmää.** Tulosluku ilman kontrafaktuaalia — ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/) — ei voi erottaa ohjelman vaikutusta siitä, mitä olisi tapahtunut joka tapauksessa.
- **Rahoitetun mittarin optimointi.** Kun rahoitus sidotaan suoritemäärään, toimitustiimit maksimoivat järkevästi osallistumisen pysyvän muutoksen kustannuksella, Goodhartin lain epäonnistumistapa.
- **Tulospesu.** Suoritemittarin uudelleenleimaaminen tuloksilta kuulostavalla kielellä ("sitoutumistulokset: 500 osallistujaa") ilman minkäänlaista seurantamittausta taustalla.

## Lähteet

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, tulosraportoinnin ohjeistus. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money-raporttien metodologia. <https://www.nao.org.uk/>
