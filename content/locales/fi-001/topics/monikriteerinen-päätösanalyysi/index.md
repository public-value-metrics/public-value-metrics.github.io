# Monikriteerinen päätösanalyysi (MCDA)

MCDA pisteyttää ja painottaa vaihtoehtoja useita erillisiä, painotettuja kriteereitä vastaan samanaikaisesti, tuottaen järjestetyn vertailun pakottamatta jokaista kriteeriä yhteen rahalliseen tai luonnolliseen yksikköasteikkoon. Se on arviointimenetelmä päätöksille, joissa merkitykselliset tulokset eivät aidosti ole supistettavissa yhteen lukuun.

## Miksi tällä on merkitystä

Green Book hyväksyy MCDA:n nimenomaisesti (sen Box 2 -tapaustutkimusliite ja liite A käsittelevät sitä suoraan) arvioinneissa, joissa hyödyt ovat "aidosti vertailukelvottomia" — missä kaiken muuntaminen rahaksi [yhteiskunnallisen kustannus-hyötyanalyysin](../yhteiskunnallinen-kustannus-hyötyanalyysi/) kautta tai yhdeksi tulokseksi [kustannusvaikuttavuusanalyysin](../kustannusvaikuttavuusanalyysi-julkishallinnossa/) kautta vääristäisi päätöstä sen selkeyttämisen sijaan (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Esimerkiksi uuden vankilan sijaintivalinta punnitsee pääomakustannusta yhteisövaikutusta, liikenneyhteyksiä, ympäristövaikutusta ja henkilöstön rekrytoitavuutta vastaan — kriteerit, joilla ei ole yhteistä yksikköä ja joissa yhteisen yksikön (tyypillisesti rahan) pakottaminen salakuljettaisi sisään arvoarvion esimerkiksi ympäristövaikutuksen ja kustannuksen suhteellisesta tärkeydestä, objektiiviseksi aritmetiikaksi puettuna.

MCDA:n rehellisyys on myös sen suurin haavoittuvuus: koska painot määrittää arvioinnin suorittaja (tai paneeli), menetelmä on vain yhtä legitiimi kuin painotusprosessi. Green Bookin ohje on yksiselitteinen siitä, että kriteerit ja painot on sovittava ja julkaistava *ennen* kuin vaihtoehdot pisteytetään, juuri estämään arvioijaa työskentelemästä taaksepäin ensisijaisesta vaihtoehdosta sitä oikeuttaviin painoihin.

## Matematiikka

```
Jokaiselle vaihtoehdolle i ja kriteerille j:
  Pisteet_ij = vaihtoehdon suoriutuminen kyseisessä kriteerissä (usein 0-100
               tai 1-10, näytöstä, asiantuntija-arviosta tai sidosryhmien pisteytyksestä)
  Paino_j    = kriteerin j suhteellinen tärkeys, painot summautuvat 1:een (tai 100:aan)

Vaihtoehdon i painotetut pisteet = Σ_j (Pisteet_ij × Paino_j)

Menettely:
1. Sovi kriteerijoukko ja painot ENNEN minkään vaihtoehdon pisteyttämistä (swing-painotus
   tai parivertailu, esim. AHP, ovat yleisiä esille saamisen menetelmiä).
2. Pisteytä jokainen vaihtoehto jokaisen kriteerin mukaan yhteisellä asteikolla,
   näytöstä kun mahdollista.
3. Laske painotetut summat; järjestä vaihtoehdot.
4. Herkkyystestaa painot: kestääkö järjestys uskottavan erimielisyyden siitä,
   kuinka paljon kunkin kriteerin pitäisi merkitä?
```

MCDA ei tuota puolustettavaa absoluuttista arvoa kuten SCBA:n nettonykyarvo — se tuottaa vain sovittuihin painoihin ehdollisen järjestyksen. Tämä on ominaisuus, kun päätös koskee aidosti vertailukelvottomien hyödykkeiden vaihtokauppaa, ja velka, jos sitä käytetään väistämään vaikeampaa rahamääräistämistyötä, kun rahamääräistäminen olisi todella ollut mahdollista.

## Työstetty esimerkki

**Paikallisviranomainen**: kunta, joka valitsee sijaintia uudelle kotitalousjätteen kierrätyskeskukselle, pisteyttää kolme sijaintia neljää kriteeriä vastaan, jotka osastojen välinen paneeli painotti ennen mitään sijaintikäyntiä:

```
Kriteerit (paino):         Pääomakustannus (30 %)  Liikenneyhteys (25 %)
                            Yhteisövaikutus (25 %)  Ympäristövaikutus (20 %)

Sijaintien pisteet (0-100, korkeampi = parempi):
Sijainti A: kustannus 80, yhteys 60, yhteisö 40, ympäristö 70
Sijainti B: kustannus 60, yhteys 90, yhteisö 70, ympäristö 50
Sijainti C: kustannus 90, yhteys 50, yhteisö 80, ympäristö 60

Painotetut summat:
A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

Sijainti C sijoittuu korkeimmalle. Herkkyysajo, joka siirtää yhteisövaikutuksen painon 25 %:sta 35 %:iin (ottaen 10 pistettä pääomakustannukselta), muuttaa C:n summan 71,5 − 3 + 8 = 76,5:ksi ja B:n 68 − 6 + 7 = 69:ksi — C johtaa yhä, joten järjestys kestää tämän uskottavan erimielisyyden painotuksesta, mikä on juuri se tarkistus, jonka Green Book odottaa nähdä raportoituna.

**Hyväntekeväisyysjärjestö**: apurahoja myöntävä säätiö, joka valitsee velkaneuvontapalvelun, ruokapankkiverkoston ja talouslukutaito-ohjelman välillä, käyttää MCDA:ta SROI:n sijaan (ks. [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/)) juuri siksi, että luottamushenkilöt ovat vilpittömästi eri mieltä siitä, pitäisikö kriisiavun vai ehkäisyn painaa enemmän — MCDA antaa heidän sopia erimielisyyden *muodosta* (painoalue) sen sijaan, että teeskenneltäisiin yhden SROI-suhteen ratkaisevan sen.

## Yhteys ohjelmistotekniikkaan

MCDA on luonnollinen työkalu toimittaja- ja arkkitehtuurivalintaan, kun kriteerit aidosti ovat ristiriidassa — valinta pilvessä isännöidyn ja paikallisesti asennetun asianhallintajärjestelmän välillä punnitsee kustannuksia, datasuvereniteettiriskiä, saavutettavuutta ja toimitusnopeutta tavoilla, jotka eivät supistu yhteen lukuun. Insinöörijohtajien tulisi vaatia painotuksen tapahtuvan ennen vaihtoehtojen pisteyttämistä, täsmälleen niin kuin Green Book edellyttää, koska painotusharjoitus, joka tehdään lyhyen listan nähtyään, ajautuu luotettavasti kohti sitä vaihtoehtoa, jota huone jo suosi. Ks. [rakenna vs. osta julkishallinnossa](../rakenna-vs-osta-julkishallinnossa/) MCDA:n yleisestä sovelluksesta ja [julkisen arvon tuloskortti](../julkisen-arvon-tuloskortti/) läheisestä jäsennellystä pisteytystyökalusta, jota käytetään päätöksen jälkeen eikä ennen sitä.

## Sudenkuopat

- **Painojen asettaminen vaihtoehtojen näkemisen jälkeen.** Tämä on yleisin tapa, jolla MCDA:ta manipuloidaan, tahallaan tai ei; julkaise painot ennen pisteytystä ja kirjaa, kuka ne asetti.
- **Painotetun summan käsitteleminen kovana lukuna.** Pistemäärä 71,5 vastaan 68 ei ole tilastollisesti merkityksellinen ero, ellei herkkyysanalyysi vahvista järjestyksen vakautta; raportoi vaihteluvälejä, ei valetarkkuutta.
- **MCDA:n käyttö välttämään rahamääräistämistä, joka oli todella toteutettavissa.** Jos useimmat kriteerit voitaisiin uskottavasti hinnoitella, oletuksena MCDA:n käyttö [SCBA:n](../yhteiskunnallinen-kustannus-hyötyanalyysi/) sijaan hylkää tietoa, jota arviointi olisi voinut käyttää.
- **Yhden hallitsevan sidosryhmän antaminen asettaa kaikki painot yksin.** Green Bookin hyvä käytäntö odottaa painojen kerättävän edustavalta paneelilta, ei sponsorijohtajalta, jotta arviointi ei yksinkertaisesti johda uudelleen sitä, mitä kyseinen henkilö jo halusi.

## Lähteet

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, liite A
  (monikriteerinen päätösanalyysi) ja Box 2 -tapaustutkimukset.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
