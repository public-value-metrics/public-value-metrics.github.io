# Sukupolvien välinen oikeudenmukaisuus ja kestävyysdiskonttaus

Tulevien kustannusten ja hyötyjen diskonttaus nykyarvoon on julkisen arvioinnin vakiokäytäntö — ks. [sosiaalinen diskonttokorko](../sosiaalinen-diskonttokorko/) — mutta mikä tahansa positiivinen diskonttokorko, korkoa korolle vuosikymmenten tai vuosisatojen yli, kutistaa kaukaisen tulevaisuuden kohti nollaa tämän päivän termein. Päätöksille, joiden seuraukset ulottuvat vuosisadan tai kauemmas — ilmastonmuutos, ydinjäte, biodiversiteetin menetys, eläkkeiden kestävyys — tuosta matemaattisesta tosiasiasta tulee eettinen: vakiodiskonttaus voi saada katastrofaalisen haitan tuleville sukupolville näyttämään nykyarvotermein tuskin välttämisen arvoiselta.

## Miksi tällä on merkitystä

Ramseyn yhtälö, jonka Frank Ramsey johti vuonna 1928, hajottaa diskonttokoron kahteen osaan: puhdas aikapreferenssi (δ, kuinka paljon yksinkertaisesti suosimme nykyistä myöhemmän sijaan, riippumatta varallisuudesta) ja varallisuuden kasvuvaikutus (η×g, kuinka paljon diskonttaamme, koska tulevien sukupolvien odotetaan olevan rikkaampia, joten ylimääräinen punta merkitsee heille vähemmän). Ison-Britannian Green Bookin vakiomuotoinen pitkän aikavälin diskonttokorko on rakennettu tämän yhtälön varaan ja noudattaa *laskevaa* asteikkoa kiinteän koron sijaan — suunnittelu, jonka juuret ovat Martin Weitzmanin "gamma-diskonttaus" -työssä, joka osoittaa, että kun tuleva diskonttokorko itsessään on epävarma, soveltamasi varmuusekvivalenttikorko laskee matemaattisesti ajan myötä, koska matalan koron skenaariot alkavat hallita sitä pidemmälle katsot. Sir Nicholas Sternin johtama Stern Review ilmastonmuutoksen taloustieteestä (2006) vei eettisen keskustelun pidemmälle: Stern väitti, että puhdas aikapreferenssi tulisi asettaa lähelle nollaa (hän käytti δ ≈ 0,1 %, heijastaen vain pientä todennäköisyyttä sivilisaation päättävästä katastrofista, ei aitoa nykyisyyden suosimista tulevaisuuden sijaan), tuottaen paljon matalamman tehollisen diskonttokoron kuin tavanomainen Green Book -käytäntö ja vastaavasti paljon suuremman nykypäivän perustelun ilmastotoimille. Kriitikot (erityisesti William Nordhaus) väittivät, että Sternin lähes nollakorko oli eettisesti puolustettava mutta ristiriidassa havaitun säästämis- ja investointikäyttäytymisen kanssa. Erimielisyys ei ole tekninen alaviite — se on yksittäinen suurin syy siihen, että kaksi yhtä tiukkaa taloustieteilijää voi päätyä hyvin erilaisiin johtopäätöksiin siitä, kuinka paljon nykysukupolven tulisi uhrata tulevaisuuden vuoksi, ja se on syy siihen, että pitkän aikavälin julkisten investointien arviointia tukevan ohjelmiston on tuotava diskonttausoletuksensa näkyviin sen sijaan, että ne haudataan taulukkolaskennan oletusarvoon.

## Matematiikka

```
Ramseyn yhtälö:   r = δ + η × g

  r = sosiaalinen diskonttokorko
  δ = puhdas aikapreferenssi (kärsimättömyysaste, riippumaton varallisuudesta)
  η = kulutuksen rajahyödyn jousto (lisäkulutuksen laskeva arvo ihmisten rikastuessa)
  g = asukasta kohti laskettavan kulutuksen odotettu kasvuvauhti

Green Bookin laskeva pitkän aikavälin asteikko (likimääräinen, nykyiset julkaistut luokat):
  Vuodet 0–30:    3,5 %
  Vuodet 31–75:   3,0 %
  Vuodet 76–125:  2,5 %
  Vuodet 126–200: 2,0 %
  Vuodet 201–300: 1,5 %
  Vuodet 301+:    1,0 %

Stern Review -parametrit: δ ≈ 0,1 %, η = 1, g ≈ 1,3 %  → r ≈ 1,4 %
```

## Työstetty esimerkki

**£1:n vältetyn haitan nykyarvo 100 vuoden päästä**, kolmen diskonttausjärjestelmän alla:

```
Kiinteä Green Bookin lyhyen aikavälin korko (3,5 %, pidettynä vakiona 100 vuotta):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 penniä)

Green Bookin laskeva asteikko (3,5 % vuosille 1–30, 3,0 % vuosille 31–75,
2,5 % vuosille 76–100):
  tekijä(1–30)   = 1,035^30  ≈ 2,807
  tekijä(31–75)  = 1,03^45   ≈ 3,782
  tekijä(76–100) = 1,025^25  ≈ 1,854
  kokonaistekijä ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 penniä)

Stern-tyylinen lähes nolla puhdas aikapreferenssi (r ≈ 1,4 % kiinteä):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 penniä)
```

Sama £1 vältettyä haittaa vuosisadan päässä on tänään arvoltaan 3,2 p, 5,1 p tai 25 p riippuen puhtaasti siitä, mitä diskonttauskäytäntöä käytetään — lähes kahdeksankertainen vaihteluväli, joka ratkaisee, ylittääkö korkean etukäteiskustannuksen ja vuosisadan päähän ulottuvan hyödyn omaava ilmastonmuutoksen hillintähanke positiivisen NPV:n rajan lainkaan. Tämä on aiheen keskeisen varoituksen mekanismi: millä tahansa merkittävästi positiivisella kiinteällä korolla riittävän kaukainen tuleva haitta pyyhitään aritmeettisesti pois arvioinnista riippumatta sen todellisesta vakavuudesta.

## Yhteys ohjelmistotekniikkaan

- Kaikkien pitkän aikavälin arviointi- tai liiketoimintaperustelutyökalujen (infrastruktuuri, ilmastonmuutokseen sopeutuminen, eläkemallinnus) tulisi toteuttaa Green Bookin *laskeva* asteikko, ei yksittäistä kiinteää korkoa — kiinteän koron oletus upottaa hiljaa paljon vahvemman tulevaisuudenvastaisen vinouman kuin Ison-Britannian hallituksen nykyinen ohjeistus määrittää.
- Diskonttokorko ja aikajänne tulisi aina tuoda näkyviksi, tarkastettaviksi parametreiksi arviointiohjelmistossa, laskelman herkkyys niille nimenomaisesti näytettynä (kuten yllä olevassa työstetyssä esimerkissä) — koron hautaaminen konfiguraatiotiedostoon kutsuu täsmälleen sitä "piilotettua eettistä valintaa", josta Stern–Nordhaus-keskustelu varoittaa; tämä sopii yhteen aiheessa [luonnonpääoman kirjanpito](../luonnonpääoman-kirjanpito/) esitetyn läpinäkyvyyspisteen kanssa ja on [sosiaalinen diskonttokorko](../sosiaalinen-diskonttokorko/) -aiheen yleinen pohja.
- Missä ohjelman hyödyt ovat nimenomaisesti sukupolvien välisiä (tulvasuoja, luonnonpääoman ennallistaminen, pitkän aikavälin digitaalinen infrastruktuuri), [yhteiskunnallisen kustannus-hyötyanalyysin](../yhteiskunnallinen-kustannus-hyötyanalyysi/) tulisi raportoida tulokset vähintään kahdella diskonttausoletuksella (Green Bookin standardi ja matalan koron herkkyystapaus) yhden pistearvion sijaan, jotta päätöksentekijät näkevät, kuinka pelkkä diskonttokoron valinta liikuttaa vastausta.

## Sudenkuopat

- **Yksittäisen diskontatun NPV:n esittäminen ilman herkkyysaluetta** — kun otetaan huomioon, kuinka paljon pelkkä diskonttokorko muuttaa vastausta pitkän aikajänteen hankkeille, yhden koron NPV liioittelee merkittävästi tarkkuutta; raportoi aina vaihteluväli, joka kattaa vähintään Green Bookin standardin ja matalan koron skenaarion.
- **Lyhyen aikavälin kiinteän koron (3,5 %) soveltaminen usean vuosisadan arviointiin** — Green Bookin oma ohjeistus määrittää laskevan asteikon juuri siksi, että kiinteä korko arvioitiin sopimattomaksi yli noin 30 vuoden jälkeen; sen käyttäminen silti aliarvioi pitkän aikavälin kustannukset.
- **δ:n (puhtaan aikapreferenssin) käsitteleminen puhtaasti teknisenä parametrina** — Sternin lähes nolla -arvo ja Green Bookin korkeampi implisiittinen arvo ovat molemmat puolustettavia vain eettisinä kantoina siitä, kuinka paljon painoa nykyisyys on velkaa tulevaisuudelle, eivät empiirisesti "oikeina" tai "vääriä" lukuina; ohjelmiston tulisi tehdä oletus näkyväksi sen sijaan, että yksi luku esitetään objektiivisesti oikeana.

## Lähteet

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (liite 6,
  diskonttokorkoasteikko).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
