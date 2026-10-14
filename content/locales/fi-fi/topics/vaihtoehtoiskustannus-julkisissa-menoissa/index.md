# Vaihtoehtoiskustannus julkisissa menoissa

Vaihtoehtoiskustannus on parhaan sivuuttamatta jääneen vaihtoehdon arvo silloin, kun julkinen toimija sitoo rahaa, henkilöstön työaikaa tai poliittista pääomaa yhteen vaihtoehtoon toisen sijaan. Ministeriössä, jolla on kiinteä talousarvio, jokainen yhteen ohjelmaan käytetty punta on punta, jota ei voi käyttää seuraavaksi parhaaseen ohjelmaan — päätöksen todellinen hinta ei ole se, mitä se kuluttaa, vaan se, minkä se syrjäyttää.

## Miksi tällä on merkitystä

Julkiset talousarviot ovat käteisrajoitettuja menokatsausjakson sisällä, joten — toisin kuin kasvava yksityinen yritys — valtionhallinnon ministeriö ei voi yksinkertaisesti "löytää lisää rahaa" hyvälle idealle; sen rahoittaminen tarkoittaa jonkin muun rahoituksen lopettamista. HM Treasuryn Green Book pitää tätä perustavana: jokaisen arvioinnin on vertailtava interventiota "do minimum" -perustasoon *ja* saman resurssin realistisiin vaihtoehtoisiin käyttötapoihin, juuri koska Treasuryn menotiimin todellinen kysymys ei ole koskaan "onko tämä hyvä?" vaan "onko tämä parempi kuin se, mitä muuta nämä rahat ostaisivat?". Green Bookin keskeinen arviointiperiaate — että julkiset resurssit tulisi ohjata interventiolle, jolla on korkein nettohyöty yhteiskunnalle puntaa kohti — on vaihtoehtoiskustannus muotoiltuna politiikaksi.

Tämä on helppo sanoa ja vaikea soveltaa, koska "seuraavaksi paras vaihtoehto" on harvoin näkyvissä yhdessä liiketoimintaperustelussa. £2 miljoonan nuorisotyöllisyyden avustusohjelmaa verrataan liiketoimintaperustelussa tekemättä jättämiseen — mutta rehellinen vertailukohta on seuraavaksi paras nuorisotyöllisyysinterventio, tai itse asiassa £2 miljoonan seuraavaksi paras käyttö missä tahansa salkussa, työllisyyteen liittymättömät menot mukaan lukien. Magenta Book (HM Treasury, 2020) varoittaa nimenomaisesti, että arvioinnit, jotka vertaavat "intervention kanssa" ja "ilman interventiota", aliarvioivat rimaa, jonka intervention on ylitettävä, koska "ilman tätä interventiota" ei ole sama asia kuin "ilman mitään" — vapautuneet rahat rahoittavat jotain muuta.

## Matematiikka

```
Valinnan A vaihtoehtoiskustannus = parhaan sivuuttamatta jääneen vaihtoehdon B arvo

A:n julkinen nettoarvo = arvo(A) − arvo(B), ei arvo(A) − 0
```

Yleispätevää kaavaa ei ole, koska sivuuttamatta jäävä vaihtoehto on kontekstisidonnainen, mutta kuri yleistyy: tunnista saman talousarviorivin realistinen seuraavaksi paras käyttö (ei idealisoitua "ei tehdä mitään"), arvota se samalla perusteella (rahamääräisesti kun mahdollista, [yhteiskunnallisen kustannus-hyötyanalyysin](../yhteiskunnallinen-kustannus-hyötyanalyysi/) mukaan) ja vähennä.

## Työstetty esimerkki

**Ministeriön talousarviorivi**: £5 miljoonan digitaalisen muutoksen rahasto voi rahoittaa tänä tilikautena täsmälleen toisen kahdesta ehdotuksesta.

- *Vaihtoehto A*: uusi asianhallintajärjestelmä, rahamääräistetty hyöty £7,2 miljoonaa 5 vuodessa (tehokkuussäästöt ja nopeampi tapausten ratkaisu).
- *Vaihtoehto B*: kolmen ministeriön yhteinen tunnistautumispalvelu, rahamääräistetty hyöty £6,4 miljoonaa 5 vuodessa.

A:n naiivi liiketoimintaperustelu vertaa £7,2 miljoonan hyötyä £5 miljoonan kustannukseen ja ilmoittaa hyöty-kustannussuhteen 1,44:1 — näennäisen vahva. Mutta koska A ja B kilpailevat samoista £5 miljoonasta, A:n valinnan vaihtoehtoiskustannus on B:n sivuuttamatta jäävä £6,4 miljoonan hyöty. A:n *netto*peruste realistiseen vaihtoehtoon nähden on vain £7,2 milj. − £6,4 milj. = £0,8 miljoonaa, ei koko £7,2 miljoonan otsikkoluku. Jos kolmas vaihtoehto C tarjoaisi £7,5 miljoonan hyödyn samoilla £5 miljoonalla, A:n rahoittaminen C:n sijaan tuhoaisi £0,3 miljoonaa julkista arvoa, vaikka A:n oma liiketoimintaperustelu näyttää täysin perustellulta erikseen tarkasteltuna.

**Paikallisviranomaisen henkilöstön aika**: kunnan kolmen hengen dataryhmä voi rakentaa joko asuntojonon kojelaudan (arvioitu säästö 400 virkailijatuntia/vuosi, arvotettuna £28/tunti = £11 200/vuosi) tai etuuspetosten triage-työkalun (arvioitu estävän £85 000/vuosi virheellisiä maksuja). Kojelaudan rakentamisen vaihtoehtoiskustannus on £85 000/vuosi sivuuttamatta jäävää, ei pelkästään dataryhmän palkkakustannus — "ilmaisen" sisäisen rakennuksen todellinen kustannus on se paljon suurempi hyöty, jonka ryhmä olisi voinut tuottaa muualla.

## Yhteys ohjelmistotekniikkaan

Insinöörikapasiteetti julkisessa organisaatiossa on itsessään rajoitettu budjetti — sprinttikapasiteettia, ei puntia — ja sama kuri pätee suoraan:

- Nimeä aina vertailukohta: ominaisuuden liiketoimintaperustelun tulisi ilmoittaa, mitä muuta samat tiimiviikot voisivat toimittaa, ei vain sen omaa tuottoa.
- Käsittele "meillä on vapaata insinöörikapasiteettia" vaihtoehtoiskustannusanalyysin alkuna, ei loppuna — vapaallakin kapasiteetilla on paras vaihtoehtoinen käyttö, vaikka se olisi tekninen velan lyhentäminen (ks. [tekninen velka julkisen arvon rapautumisena](../tekninen-velka-julkisen-arvon-rapautumisena/)).
- Yhdistä tämä suoraan [rahalle vastineeseen](../rahalle-vastine/): VFM:n "taloudellisuus"-testi on merkityksetön ilman rehellistä vaihtoehtoiskustannusvertailua, ja [viivästymisen kustannukseen julkisissa ohjelmissa](../viivästymisen-kustannus-julkisissa-ohjelmissa/), joka hinnoittelee saman sivuuttamatta jääneen vaihtoehdon logiikan aikaulottuvuuden.

## Sudenkuopat

- **Vertailu "ei tehdä mitään" -vaihtoehtoon seuraavaksi parhaan sijaan.** Green Book vaatii "do minimum" -perustason juuri siksi, että todellinen vaihtoehtoiskustannus on harvoin nolla; liiketoimintaperustelu, joka ylittää vain "ei tehdä mitään" -rajan, ei ole osoittanut voittavansa realistista vaihtoehtoa.
- **Ministeriöiden välisen kilpailun sivuuttaminen samasta potista.** Budjettirivit, jotka vaikuttavat varatuilta yhden osaston sisällä, kilpailevat usein korkeammalla tasolla (menokatsaus, pääomaohjelma), jossa todellinen vaihtoehtoiskustannus realisoituu.
- **Oletus, että vapautuneella henkilöstön ajalla ei ole lisäarvoa.** "Säästetty" aika luo arvoa vain, jos se uudelleenkohdennetaan johonkin arvokkaaseen; jos vaihtoehtoista käyttöä ei ole, säästö on pelkästään nimellinen.

## Lähteet

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — vaihtoehtoiskustannuksen kanoninen empiirinen osoitus
  sitovana rajoitteena kiinteässä julkisessa budjetissa. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
