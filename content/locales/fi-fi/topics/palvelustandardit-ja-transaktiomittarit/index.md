# Palvelustandardit ja transaktiomittarit

GOV.UK Service Standard on Ison-Britannian hallituksen 14 kohdan tarkistuslista julkisen digitaalisen palvelun rakentamiseen ja ylläpitoon, ja siihen kuuluu pieni, pakollinen joukko kvantitatiivisia transaktiomittareita — kustannus transaktiota kohti, suoritusaste, digitaalinen käyttöönotto ja käyttäjätyytyväisyys — jotka tiimien on julkaistava jokaisesta keskushallinnon tuotantopalvelusta. Yhdessä standardi ja mittarit ovat tämän tietovaraston laajempien julkisen arvon ja KPI-viitekehysten operatiivinen, päivittäinen erikoistuminen, suunnattuna suoraan ohjelmistotoimitustiimeille.

## Miksi tällä on merkitystä

Service Standard, jota ylläpidetään GOV.UK:n palvelukäsikirjassa, edellyttää, että jokainen valtionhallinnon digitaalisen palvelun ajankohtaisarviointi (alfa, beta, tuotanto) osoittaa — 14 kohdan joukossa — että tiimi ymmärtää käyttäjien tarpeet, työskentelee monialaisessa tiimissä, iteroi ja parantaa usein ja *arvioi työkaluja, järjestelmiä ja työtapoja*. Historiallisesti tämän rinnalla oli julkinen Performance Platform, jossa jokainen tuotantopalvelu julkaisi transaktiodatansa avoimesti; tuo alusta on sittemmin lakkautettu, mutta taustalla oleva velvoite mitata ja julkaista nämä neljä ydinmittaria säilyy palvelukäsikirjan "measuring success" -ohjeistuksen kautta. Syy, miksi tämä eroaa yleisestä ohjelmisto-KPI-kojelaudasta, on se, että nämä mittarit suunniteltiin nimenomaisesti yhdeksi toisiinsa kytkeytyväksi taloudelliseksi malliksi, ei neljäksi riippumattomaksi pistemääräksi: koko digitaalisen hallinnon säästöperustelu — Government Digital Servicen Digital Efficiency Report havaitsi digitaaliset transaktiot noin 20 kertaa halvemmiksi kuin puhelimitse ja noin 50 kertaa halvemmiksi kuin kasvokkain vertailukelpoisissa paikallishallinnon palveluissa — toteutuu vain, jos suoritusaste pysyy korkeana ja digitaalinen käyttöönotto todella nousee, eikä vain lisätä halpaa kanavaa muuttumattoman kalliin rinnalle.

## Matematiikka

```
Kustannus transaktiota kohti = palvelun kokonaiskäyttökustannus / suoritettujen transaktioiden määrä
Suoritusaste                 = suoritetut transaktiot / aloitetut transaktiot × 100
Digitaalinen käyttöönotto    = digitaalikanavan transaktiot / kaikkien kanavien transaktiot × 100
Käyttäjätyytyväisyys         = % tyytyväisiä + erittäin tyytyväisiä, palvelun sisäinen 5-portainen kysely

Kanavasiirtymän säästö = transaktiovolyymi × käyttöönottosiirtymä × (kustannus transaktiota kohti
                         vanhassa kanavassa − kustannus transaktiota kohti digitaalisesti)

Vikakysynnän kustannus = (1 − suoritusaste) × digitaalisesti yritetyt transaktiot ×
                         varakanavan kustannus, jota nämä käyttäjät sitten käyttävät sen sijaan
```

## Työstetty esimerkki

**Havainnollistava keskushallinnon lupien uusimispalvelu**, 2 miljoonaa transaktiota/vuosi, tällä hetkellä 65 % puhelimitse (£3,00/transaktio) ja 35 % digitaalisesti (£0,30/transaktio), suoritusaste 80 %. Uudelleensuunnittelu 14 kohdan Service Standardia vasten nostaa digitaalisen käyttöönoton 60 %:iin ja suoritusasteen 92 %:iin:

```
Käyttöönottosiirtymän säästö = 2 000 000 × 0,25 × (3,00 − 0,30) = £1 350 000/vuosi

Vikakysynnän kustannus, ennen:
  2 000 000 × 0,35 × (1 − 0,80) × £3,00 = £420 000/vuosi (keskeyttäneet turvautuvat puhelimeen)

Vikakysynnän kustannus, jälkeen:
  2 000 000 × 0,60 × (1 − 0,92) × £3,00 = £288 000/vuosi

Vikakysynnän nettosäästö = £420 000 − £288 000 = £132 000/vuosi

Kokonaisvuosisäästö ≈ £1 350 000 + £132 000 = £1 482 000/vuosi
```

Laskenta tekee nimenomaiseksi, miksi suoritusaste ei ole toissijainen mittari: ilman parannusta 80 %:sta 92 %:iin käyttöönottosiirtymän säästöstä osa otettaisiin takaisin vikakysynnällä, joka ohjaa turhautuneet digitaalikäyttäjät suoraan takaisin kalliiseen puhelinkanavaan.

## Yhteys ohjelmistotekniikkaan

Nämä neljä mittaria ovat toimiva esimerkki kustannus-seuraus-kojelaudasta: yksi kustannusmittari pidettynä erillään kolmesta tulos-/laatumittarista, tarkoituksella koskaan romahduttamatta yhdeksi pistemääräksi — sama kuri, jota perustellaan aiheessa [julkisen sektorin KPI:t](../julkisen-sektorin-suorituskykymittarit/). Insinööreille tämä jakautuu konkreettiseksi, omistettavaksi työksi: suoritusaste on suppiloinstrumentoinnin ongelma, ja jokainen polun keskeyttämispiste on periaatteessa paikannettavissa ja korjattavissa; kustannus transaktiota kohti vaatii aitoa yksikkökustannuslaskentaa, mukaan lukien henkilöstöavusteiset ja paperikanavan kustannukset, ei vain pilvipalvelun hostausmenoja (ks. [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/) ja [omistamisen kokonaiskustannus julkishallinnon IT:ssä](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/)); ja digitaalinen käyttöönotto on tehokkuusasuun puettu oikeudenmukaisuusmittari — kansalaiset, jotka eivät voi tai halua vaihtaa kanavaa, ovat suhteettoman usein iäkkäitä, vammaisia tai digitaalisesti syrjäytyneitä, joten aggressiivinen kanavien sulkeminen muuttaa "säästön" pääsyhaitaksi (ks. [digitaalinen osallisuus](../digitaalinen-osallisuus/) ja [kanavasiirtymän säästöt](../kanavasiirtymän-säästöt/)). 14 kohdan standardi itse on näiden lukujen taustalla oleva prosessimäärittely — ks. [digitaalisen palvelun standardi](../digitaalisen-palvelun-standardi/) standardista kokonaisuudessaan ja [kansalaistyytyväisyysmittarit](../kansalaistyytyväisyysmittarit/) siitä, miten tässä oleva tyytyväisyysluku liittyy laajempaan luottamuksen mittaamiseen.

## Sudenkuopat

- **Käyttöönotto kasvatettuna sulkemalla vaihtoehtoinen kanava**: puhelinlinjan sulkeminen nostaa digitaalisen käyttöönoton prosenttia aritmeettisesti ja kaataa vikakysynnän kanavalle, joka jää jäljelle (usein kalliimpi avustettu digitaalinen tai kasvokkainen reitti); mittaa aina koko järjestelmän kustannus, ei pelkkää suhdetta.
- **Suoritusasteen mittaaminen suppilon toisesta vaiheesta**: "aloitettu"-määrän aloittaminen ensimmäisen aidon pudotuskohdan jälkeen imartelee suoritusastetta ja kätkee suurimman korjattavissa olevan menetyksen.
- **Kustannus transaktiota kohti ilman avustetun digitaalisen tuen kustannuksia**: pelkkä digitaalinen yksikkökustannus, joka sivuuttaa henkilöstön ajan itsepalveluun kykenemättömien käyttäjien auttamiseen, aliarvioi kanavan todellisen kustannuksen.
- **Mittareiden julkaiseminen ilman palvelujen välistä yhteistä määritelmää**: "transaktio" ja "suoritettu" tarkoittavat eri asioita eri palvelutiimeissä, ellei määritelmiä standardoida ja versioida, mikä tekee palvelujen välisestä vertailusta epäluotettavaa.

## Lähteet

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
