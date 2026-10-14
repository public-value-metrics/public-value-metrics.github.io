# Jakaumapainotus

Jakaumapainotus säätää kustannuksen tai hyödyn rahamääräistä arvoa sen mukaan, kuka sen saa, sen periaatteen mukaisesti, että ylimääräinen punta on arvokkaampi köyhälle kotitaloudelle kuin rikkaalle. HM Treasuryn Green Book tarjoaa nimenomaisen menetelmän tämän painotuksen soveltamiseen, joka perustuu tulon laskevaan rajahyötyyn, jotta arvioinnit eivät hiljaa kohtele rikkaimman kymmenyksen saamaa puntaa yhtä arvokkaana kuin köyhimmän saamaa.

## Miksi tällä on merkitystä

Tavallinen kustannus-hyötyanalyysi laskee puntia yhteen kysymättä, kenen puntia ne ovat, mikä olettaa hiljaisesti, että punta on yhtä arvokas kaikille — olettamus, jonka taloustieteilijät ovat jo kauan tienneet vääräksi. Kotitalous, joka ansaitsee £15 000/vuosi, kokee £1 000 hyödyn aivan eri tavalla kuin kotitalous, joka ansaitsee £150 000/vuosi, koska tulon rajahyöty laskee tulon kasvaessa. Painottamattomana tavallinen arviointi suosii järjestelmällisesti interventioita, jotka hyödyttävät varakkaampia, jo paremmassa asemassa olevia ryhmiä, koska niiden suurempi ostovoima paisuttaa niille tulevien hyötyjen rahamääräistä arvostusta (puiston parannus kalliiden asuntojen lähellä "näyttää" suuremman kiinteistöarvohyödyn kuin sama parannus halpojen asuntojen lähellä, puhtaasti siksi, että hinnat ovat korkeammat, ei siksi, että hyvinvointihyöty olisi suurempi).

Green Bookin täydentävä ohjeistus jakaumaanalyysista, vahvistettuna Treasuryn vuoden 2020 katsauksen jälkeen, joka vastasi kritiikkiin siitä, että arviointimetodologia suosi järjestelmällisesti Lontoota ja Kaakkois-Englantia, määrittelee muodollisen painotustavan, joka perustuu oletettuun tulon rajahyödyn joustoon noin 1,3 — mikä tarkoittaa, että tulon kaksinkertaistuminen noin puolittaa (tarkemmin 2^-1,3 ≈ 0,41-kertaiseksi) ylimääräisen punnan rajaarvon. Tämä ei ole pyöristyskorjaus: sen soveltaminen voi muuttaa sitä, kumpi kahdesta kilpailevasta ohjelmasta näyttää korkeamman nettonykyarvon, erityisesti kun verrataan köyhään alueeseen keskittynyttä interventiota yleiseen väestöön levitettyyn.

## Matematiikka

Green Bookin jakaumapaino punnalle hyötyä, joka kertyy tulotasolla y olevalle kotitaloudelle, suhteessa puntaan kansallisella keskitulotasolla ȳ:

```
Paino(y) = (ȳ / y)^e

missä:
  y  = kotitalouden tulo (tai vaikutetun ryhmän tulo)
  ȳ  = keskimääräinen (viite)kotitalouden tulo
  e  = tulon rajahyödyn jousto (Green Book: noin 1,3)
```

Painojen soveltaminen nettohyötyihin:

```
Painotettu hyöty = Σ [painottamaton hyöty ryhmälle i × Paino(y_i)]
```

Ryhmä, joka ansaitsee puolet kansallisesta keskiarvosta (y = 0,5ȳ), saa painon (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — jokainen tälle ryhmälle tuleva punta hyötyä lasketaan noin 2,46 punnan arvoiseksi keskitulokotitalouden puntaan verrattuna.

## Työstetty esimerkki

**Kaksi kilpailevaa paikallisohjelmaa**, kummankin painottamaton nettohyöty £2 miljoonaa/vuosi, jotka kilpailevat samasta alueellisesta kasvurahastosta:

- *Ohjelma A*: yritystukisuunnitelma vauraassa kaupungissa, kotitalouden keskitulo £45 000 (noin 1,3 × oletettu kansallinen keskiarvo £35 000).
- *Ohjelma B*: osaamisohjelma heikossa asemassa olevalla alueella, kotitalouden keskitulo £18 000 (noin 0,51 × kansallinen keskiarvo).

```
Paino(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Paino(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Painotettu hyöty A = £2 000 000 × 0,72 = £1,44 miljoonaa
Painotettu hyöty B = £2 000 000 × 2,53 = £5,06 miljoonaa
```

Painottamattomina kaksi ohjelmaa ovat tasapeli. Jakaumavaikutuksella painotettuna Ohjelman B hyöty on yli kolme kertaa suurempi — tulos, joka kääntää rahoitussuosituksen ja heijastaa Green Bookin nimenomaista tarkoitusta vaatia painotuksen näyttämistä, ei vain painottamatonta hyöty-kustannussuhdetta.

**Hyväntekeväisyysavustuksen kohdentaminen**: rahoittajan, joka vertaa £500 000 avustusta, joka tavoittaa 1 000 pienituloista kotitaloutta (paino ≈ 2,0, painotettu arvo £1 miljoonan vastaava), samoihin £500 000:een, jotka tavoittavat 1 000 keskituloista kotitaloutta (paino ≈ 1,0, painotettu arvo £500 000:n vastaava), tulisi näyttää jakaumaperustelu nimenomaisesti hallituksen paperissaan eikä jättää sitä pääteltäväksi.

## Yhteys ohjelmistotekniikkaan

Jakaumapainotus esiintyy harvoin suoraan ohjelmistotoimituksen mittareissa, mutta sen tulisi muokata sitä, miten insinööri- ja datajoukkueet suunnittelevat mittausta ja kohdentamista:

- Rakentaessasi vaikutuskojelautaa tai etuuslaskuria, tuo näkyviin vaikutetuiden tulo- tai köyhyysprofiili, ei pelkkä koottu hyötysumma — jakaumaerittelyttömät kokonaisluvut kätkevät juuri yllä näytetyn käänteen.
- Sido palvelumuotoilun kohdentamislogiikka samaan köyhyysdataan, jota Green Book käyttää — ks. [Moniulotteisen köyhyyden indeksi](../moniulotteisen-puutteellisuuden-indeksi/) — jotta digipalvelun tavoittavuutta voidaan arvioida oikeudenmukaisuuden, ei vain tehokkuuden kannalta (kiistanalainen neljäs E [rahalle vastineessa](../rahalle-vastine/)).
- Kun algoritmi jakaa niukkaa resurssia (aikoja, käsittelijän aikaa, tukea), painottamaton "maksimoi kokonaishyöty" -tavoitefunktio toistaa rakenteensa vuoksi saman vinouman, jonka Green Bookin painotus on olemassa korjatakseen — nosta tämä esiin nimenomaisesti politiikan omistajille ennen optimointia.

## Sudenkuopat

- **Jakaumapainojen epäjohdonmukainen soveltaminen salkussa.** Yhden ohjelman hyötyjen painottaminen mutta ei sen vertailukohdan tuottaa vinoutuneen, ei oikeudenmukaisemman vertailun; Green Book vaatii samanlaista kohtelua.
- **Kiinteistö- tai markkina-arvojen käyttö hyvinvoinnin korvikkeena ilman korjausta.** Markkinahinnat ovat itse vääristyneet olemassa olevan tuloeriarvoisuuden vuoksi, mitä jakaumapainotus on tarkoitettu korjaamaan — korjaamattomien markkina-arvojen käyttö voi laskea vinouman kahdesti.
- **Ryhmän sisäisen vaihtelun sivuuttaminen.** Painotus alueen keskitulon mukaan (esim. Moniulotteisen köyhyyden indeksin kymmenys) voi tulkita väärin yksilöitä, jotka eivät vastaa alueensa keskiarvoa; käytä hienojakoisinta kohtuudella saatavilla olevaa tulodataa.
- **Joustoarvon 1,3 käsitteleminen universaalina vakiona.** Green Book itse toteaa, että kyseessä on arvio uskottavalla vaihteluvälillä; herkkyystestaa merkittävät päätökset vaihtoehtoisilla jousto-arvoilla sen sijaan, että pitäisit 1,3:a tarkkana.

## Lähteet

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", ja
  täydentävä ohjeistus jakaumavaikutuksista (2022 painos).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (alueellista vinoumaa koskevaan kritiikkiin).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (taustaa tulon rajahyödyn joustoestimaatteihin).
