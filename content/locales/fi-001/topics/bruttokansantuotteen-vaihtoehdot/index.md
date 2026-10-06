# Bruttokansantuotteen (BKT) vaihtoehdot

BKT:n vaihtoehdot ovat mittareita, jotka on rakennettu tavoittamaan se, minkä bruttokansantuote rakenteellisesti sivuuttaa: palkaton hoivatyö, ympäristön ehtyminen, tulonjako ja se, parantaako kasvu todella elämiä. Tunnetuimmat ovat Genuine Progress Indicator (GPI) ja Bhutanin Gross National Happiness (GNH) -indeksi; perustelun niiden vakavasti ottamiselle esitti vaikutusvaltaisimmin vuoden 2009 Stiglitz–Sen–Fitoussi-komissio. Valtionhallinnon kojelautoja tai KPI-järjestelmiä rakentaville insinööreille "mikä luku lasketaan edistykseksi" on suunnittelupäätös, jolla on todellisia seurauksia sille, mitä rahoitetaan.

## Miksi tällä on merkitystä

Simon Kuznets, joka rakensi Yhdysvaltain kansantalouden tilinpidon 1930-luvulla, varoitti kongressia vuonna 1934, että "kansakunnan hyvinvointia voi tuskin päätellä kansantulon mittauksesta" — varoitus, jonka luku ohitti lähes välittömästi. BKT laskee öljyvuodon siivouksen kasvuksi ja vanhemman palkattoman lastenhoidon nollaksi; se ei erota kestävää hyvinvointia rakentavaa menoa menosta, joka vain korvaa jo tapahtuneen haitan. Stiglitz–Sen–Fitoussi-komissio, jonka Ranskan presidentti Nicolas Sarkozy kutsui koolle ja jota johtivat Joseph Stiglitz, Amartya Sen ja Jean-Paul Fitoussi, raportoi vuonna 2009, että tilastojärjestelmien tulisi siirtää painopistettä "taloudellisen tuotannon mittaamisesta ihmisten hyvinvoinnin mittaamiseen" ja että kestävyyttä tulisi seurata erikseen nykyisestä hyvinvoinnista sen sijaan, että se sulautettaisiin yhteen lukuun. BKT:n vaihtoehdot operationalisoivat tuon suosituksen. GPI, jonka ajatushautomo Redefining Progress kehitti 1990-luvulla William Nordhausin ja James Tobinin vuoden 1972 Measure of Economic Welfare -mittarin pohjalta, lähtee yksityisestä kulutuksesta (kuten BKT) ja lisää sitten ei-markkinaperusteiset hyödyt, jotka BKT jättää pois (kotityö, vapaaehtoistyö), vähentäen samalla puolustus- ja ehtymiskustannukset (rikollisuus, saaste, työmatkaliikenne, luonnonvarojen kulutus), jotka BKT laskee virheellisesti positiivisiksi. Bhutanin GNH-indeksi, jota hallinnoi GNH Centre Bhutan (<https://www.gnhcentre.bt/>), menee vielä pidemmälle, korvaten kasvun maan ilmoitettuna perustuslaillisena tavoitteena: se kokoaa 33 indikaattoria yhdeksän alueen yli — psykologinen hyvinvointi, terveys, koulutus, ajankäyttö, kulttuurinen monimuotoisuus, hallinto, yhteisön elinvoima, ekologinen monimuotoisuus ja elintaso — yhdeksi riittävyyteen perustuvaksi pistemääräksi, jota käytetään suoraan hallituksen politiikkaehdotusten seulontaan.

## Matematiikka

```
GPI = yksityinen kulutusmeno
      + ei-markkinaperusteiset hyödyt (kotityö, vapaaehtoistyö, korkeakoulutus)
      − puolustus- ja sosiaaliset kustannukset (rikollisuus, saaste, työmatkaliikenne, perheen hajoaminen)
      − luonnon- ja sosiaalisen pääoman ehtyminen (luonnonvarojen kulutus, viljelysmaan menetys)

GNH-riittävyyspistemäärä alueittain:
  henkilö on "riittävällä tasolla" alueella, kun hän ylittää sen kynnyksen jokaisen indikaattorin osalta
  Onnellisuusindeksi = (% väestöstä, joka on riittävällä tasolla ≥ 6 alueella yhdeksästä)
                       + ("ei-vielä-onnellisen" vähemmistön painotettu keskimääräinen vaje)
```

## Työstetty esimerkki

**Alue, GPI**: yksityinen kulutus on $50 mrd. Lisätään arvioitu kotitalous- ja vapaaehtoistyön arvo $12 mrd (korvauskustannuspalkkatasoilla — ks. [vapaaehtoistyön ajan arvo](../vapaaehtoistyön-ajan-arvo/)). Vähennetään arvioidut vuosittaiset työmatkaruuhkien ($3 mrd), rikollisuuden ($4 mrd) ja pitkän aikavälin luonnonvarojen ehtymisen ($6 mrd) kustannukset:

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($ mrd)
```

Jos BKT kasvoi $50 mrd:sta $55 mrd:iin kyseisenä vuonna (+10 %), mutta puolustus- ja ehtymiskustannukset kasvoivat nopeammin kuin kulutus, GPI voi laskea BKT:n noustessa — "kynnyshypoteesi", johon GPI-tutkijat viittaavat korkean tulotason talouksien osalta suunnilleen 1970-luvulta lähtien, jolloin kasvu jatkoi nousuaan GPI:n tasaantuessa.

**Kansalainen, GNH**: vastaaja ylittää riittävyyskynnyksen 7 alueella 9:stä (terveys, koulutus, elintaso, yhteisön elinvoima, kulttuurinen monimuotoisuus, ekologinen monimuotoisuus, ajankäyttö), mutta jää vajaaksi psykologisessa hyvinvoinnissa ja hallinnossa. Koska 7 ≥ 6, hänet lasketaan "onnelliseksi" päälukumäärässä; indeksi seuraa erikseen hänen kahden vajeensa syvyyttä, jotta niukka läpäisy ei ole erotettavissa mukavasta.

## Yhteys ohjelmistotekniikkaan

- KPI-kojelauta, joka on mallinnettu vain läpimenon tai menon varaan (BKT-kaava), jättää järjestelmällisesti huomiotta läpimenon tuottamisessa aiheutetun haitan — tukipyyntömäärä, joka käsitellään "sitoutumisena" eikä "käyttäjän ahdistuksena", on ohjelmistotoimituksen versio öljyvuodon laskemisesta kasvuksi.
- GPI-tyylinen kirjanpito on hyödyllinen auditointimalli mille tahansa [julkisen sektorin KPI](../julkisen-sektorin-suorituskykymittarit/) -joukolle: kysy jokaisen otsikkosuoritemittarin kohdalla, mitä puolustuskustannusta se hiljaa aiheuttaa (uudelleentyö, häiriövaste, uupumus) ja netota se pois, samalla tavalla kuin GPI netottaa puolustusmenot pois kulutuksesta.
- GNH:n aluekohtainen riittävyysmenetelmä — läpäisy/hylkäys ulottuvuutta kohti, sitten aggregointi — on rakenteellisesti sama tekniikka kuin [monikriteerinen päätösanalyysi](../monikriteerinen-päätösanalyysi/) ja kannattaa käyttää uudelleen aina, kun yksittäinen skalaaripistemäärä kätkisi kriittisesti epäonnistuvan ulottuvuuden.

## Sudenkuopat

- **GPI:n käsitteleminen tarkkana kansantalouden tilinpitona** — toisin kuin BKT:llä, GPI:llä ei ole yhtä standardoitua menetelmää; eri tutkimukset painottavat työmatkakustannuksia, vapaaehtoistyön aikaa tai luonnonvarojen ehtymistä eri tavoin, joten tutkimusten väliset GPI-vertailut ovat paljon epäluotettavampia kuin maiden väliset BKT-vertailut.
- **GNH:n tuominen sellaisenaan toiseen politiikkakulttuuriin** — sen aluepainot ja riittävyyskynnykset asetettiin bhutanilaisessa kuulemisessa; luvun kopioiminen ilman taustalla olevaa kuulemisprosessia tuottaa ontelon mittarin, johon kukaan ei luota.
- **Oletus, että BKT:n vaihtoehto korvaa kustannus-hyötyarvioinnin** — nämä ovat diagnostisia, koko talouden indikaattoreita, eivät päätöstyökaluja yksittäiselle ohjelmalle; käytä sitä varten [yhteiskunnallista kustannus-hyötyanalyysiä](../yhteiskunnallinen-kustannus-hyötyanalyysi/).

## Lähteet

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
