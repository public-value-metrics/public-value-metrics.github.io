# Viivästymisen kustannus julkisissa ohjelmissa (CoD)

Viivästymisen kustannus (Cost of Delay) on julkinen arvo, joka menetetään aikayksikköä kohti, kun ohjelmaa, palvelua tai järjestelmämuutosta *ei vielä* ole toimitettu. Se on tämän aiheryhmän keskeinen siltamittari: se muuntaa "käyttöönotto viivästyi kuusi kuukautta" punniksi viikossa tai WELLBY:iksi viikossa, jotta viivästyksestä voidaan kiistellä samassa valuutassa kuin itse liiketoimintaperustelusta.

## Miksi tällä on merkitystä

Reinertsenin sääntö — "jos kvantifioit vain yhden asian, kvantifioi viivästymisen kustannus" — siirtyy valtionhallintoon lähes muuttumattomana, koska julkiset ohjelmat ovat epätavallisen alttiita sille: liiketoimintaperustelut hyväksytään ennustettua hyötyvirtaa vastaan, mutta virta alkaa virrata vasta käyttöönotossa, ja jokainen viivästysviikko on viikko menetettyä arvoa, jota kukaan ei hinnoittele riskirekisteriin. National Audit Officen toistuva Universal Creditin käyttöönoton tarkastelu (ks. sen "Rolling Out Universal Credit" -raportit, <https://www.nao.org.uk/>) havainnollistaa kaavan: aikataulun lipsuminen seurattiin ja raportoitiin, mutta punnat viikossa -kustannus siitä, että uudistettua järjestelmää *ei vielä* toimitettu seuraavalle hakijaerälle, ilmoitettiin harvoin otsikkolukuna, vaikka se on luku, jonka olisi pitänyt ohjata priorisointia ja eskalointia. Ilman CoD-lukua viivästynyt ohjelma näyttää toimitushallituksen aikatauluongelmalta; sen kanssa se on arvon rapautumisongelma tilivelvolliselle virkamiehelle.

## Matematiikka

```
CoD = menetetty hyöty aikayksikköä kohti, kun ei toimitettu   (£/viikko tai WELLBY:tä/viikko)

Viivästyksen kokonaistappio = CoD × viivästyksen kesto

Julkisissa ohjelmissa summattavat hyötyvirrat:
  käteistä vapauttavat säästöt   (petoksen/virheen väheneminen, vältetyt tilapäiskustannukset)
+ vapautunut ei-käteinen kapasiteetti (sosiaalityöntekijä-/virkailijatunnit × kuormitettu kustannus)
+ hyvinvointihyöty              (WELLBY:t × £13 000/WELLBY, HMT Green Bookin
                                  hyvinvoinnin täydentävä ohjeistus, 2019 hinnat)
```

Kansalaisille suunnatuissa palveluissa denominoi hyvinvoinnissa rahan lisäksi — ks. [hyvinvoinnilla korjatut elinvuodet](../hyvinvoinnilla-korjatut-elinvuodet/) taustalla olevasta yksiköstä ja [vaihtoehtoiskustannus julkisissa menoissa](../vaihtoehtoiskustannus-julkisissa-menoissa/) siitä, mitä viivästetyllä punnalla olisi muuten voitu rahoittaa.

## Työstetty esimerkki

**Paikallisviranomainen**: asumistukijärjestelmän päivitys vähentää ylimaksuvirhettä £150/hakemus/vuosi 20 000 voimassa olevan hakemuksen yli.

```
Vuosihyöty = 150 × 20 000 = £3 000 000/vuosi
CoD = 3 000 000 / 52 ≈ £57 700/viikko
12 kuukauden toteutusviive maksaa 52 × 57 700 ≈ £3 000 000 vältettävissä olevina virheinä.
```

**Keskushallinnon virasto**: vammaisetuuden arviointipalvelu, joka toimitetaan kuusi kuukautta (26 viikkoa) suunniteltua myöhemmin, tarkoittaa, että 200 000 hakijaa/vuosi odottaa keskimäärin kolme viikkoa pidempään päätöstä. Jokainen ylimääräinen taloudellisen epävarmuuden viikko mallinnetaan −0,0018 WELLBY:n (elämäntyytyväisyyspisteen) vaikutuksena:

```
WELLBY-menetys hakijaa kohti = 3 × 0,0018 = 0,0054
Vuosittainen WELLBY-menetys = 200 000 × 0,0054 = 1 080 WELLBY:tä/vuosi
CoD_hyvinvointi = 1 080 / 52 ≈ 20,8 WELLBY:tä/viikko
CoD_raha = 20,8 × £13 000 ≈ £270 000/viikko hyvinvointiarvoa
```

26 viikon viive "maksaa" siten noin 540 WELLBY:tä — noin £7 miljoonan arvoisena Green Bookin hyvinvoinnin arvotuksella — muotoillen ohitetun käyttöönottopäivän kansalaisten hyvinvointitapahtumaksi, ei projektinhallinnan alaviitteeksi.

## Yhteys ohjelmistotekniikkaan

CoD tekee [DORA-mittareista](../dora-mittarit-julkiselle-arvolle/) ja [virtausmittareista](../virtausmittarit-valtionhallinnon-toimituksessa/) taloudellisesti luettavia: ketjun läpimenoaika × CoD on raha (tai hyvinvointi), joka palaa jonoissa ennen kuin se koskaan tavoittaa kansalaisen. Konkreettisesti:

- **Priorisointi**: järjestä tilausjono CoD ÷ kesto -suhteen eikä sidosryhmän ylemmyyden mukaan — ohjelmistotekniikan vastine Green Bookin vaatimukselle arvioida vaihtoehdot arvon, ei sen perusteella, kuka pyytää.
- **Hankinta**: 12–18 kuukauden puitejärjestelyhankintasyklillä on CoD; sen hinnoittelu muuttaa kiirehdittyjen reittien kiireellisyysperustelua ja syöttää suoraan [rakenna vs. osta](../rakenna-vs-osta-julkishallinnossa/) -päätöksiä, joissa arvonsaantiaika on päätöksen ajuri.
- **Hyötyperustelu**: jokaisen hyväksyntähetkellä siteeratun CoD-luvun tulisi ilmestyä uudelleen [hyötyjen toteutumisessa](../hyötyjen-toteutuminen/) — jos viivekustannus oli todellinen, nopeutuneen hyödyn pitäisi olla mitattavissa käyttöönoton jälkeen.

## Sudenkuopat

- **Lineaarisen CoD:n olettaminen**: joillakin julkisilla palveluilla on määräaikamuotoinen arvo (lakisääteinen vaatimustenmukaisuuspäivä — CoD hyppää täytäntöönpanoriskin tasolle päivän jälkeen, lähes nollaan ennen sitä) tasaisen viikkotahdin sijaan. Luokittele kiireellisyysprofiili ennen kertomista.
- **CoD tuotoksille, joita kukaan ei tarvitse**: viiveellä on kustannus vain, jos toimittamattomalla asialla on arvoa; järjestelmällä, jota kukaan ei käytä, on nolla CoD riippumatta siitä, kuinka myöhässä se on.
- **Viivästyksen ja diskonttauksen kaksoislaskenta**: [sosiaalinen diskonttokorko](../sosiaalinen-diskonttokorko/) hinnoittelee jo ajan monivuotisilla arviointijänteillä; CoD on jänteen sisäinen, operatiivinen versio viikoille ja kuukausille. Käytä CoD:ia aikataulun lipsumiseen, NPV-siirtymää monivuotiseen uudelleenvaiheistukseen.

## Lähteet

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, Universal Creditin käyttöönottoa koskevat raportit. <https://www.nao.org.uk/>
