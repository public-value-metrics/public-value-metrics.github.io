# Rahalle vastine (VFM)

Rahalle vastine (value for money) on Ison-Britannian julkisen sektorin muodollinen testi sille, saavuttaako menot parhaan käytettävissä olevan kustannusten ja hyötyjen tasapainon. HM Treasuryn Green Book jäsentää sen kolmen "E:n" kautta — economy (taloudellisuus), efficiency (tehokkuus) ja effectiveness (vaikuttavuus) — ja yhä useammin perustellaan neljättä, kiistanalaista E:tä, oikeudenmukaisuutta (equity). Jokaisen tarkastelun kestävän julkisen sektorin liiketoimintaperustelun on vastattava kaikkiin kolmeen nimenomaisesti, ei vain väitettävä, että meno on "sen arvoinen".

## Miksi tällä on merkitystä

VFM ei ole "halvan" synonyymi. Green Book (HM Treasury, 2022 painos) on yksiselitteinen siitä, että halvimman vaihtoehdon ostaminen (taloudellisuus) tarkistamatta, tuottaako se aiotut tulokset (vaikuttavuus), on yleinen ja kallis virhe — hankinta, joka säästää 10 % yksikkökustannuksissa mutta tuottaa 40 % vähemmän vaikutusta, on huonompaa, ei parempaa arvoa. Kolmen E:n viitekehys pakottaa liiketoimintaperustelun erottamaan kolme aidosti erilaista epäonnistumistapaa: liikaa maksaminen panoksista, panosten haaskaaminen muunnettaessa suoritteiksi ja sellaisten suoritteiden tuottaminen, jotka eivät muutu tuloksiksi, joita kukaan halusi. Ison-Britannian valtionhallinnon menovalvonta — Treasuryn hyväksyntäpisteet, National Audit Officen (NAO) value-for-money-tutkimukset ja ministeriöiden vastuuhenkilöiden arvioinnit — on rakennettu tämän kolmiosaisen testin ympärille, joten insinöörin liiketoimintaperustelu, joka käsittelee vain kustannuksia (taloudellisuutta), kaatuu tarkastelussa, vaikka teknologia olisi moitteeton.

"Neljäs E", oikeudenmukaisuus, on kiistanalainen juuri siksi, että se voi olla ristiriidassa kolmen muun kanssa: tehokkain tapa tuottaa palvelu kansallisesti on harvoin oikeudenmukaisin, koska toimituksen keskittäminen sinne, missä kansalaiset ovat halvimpia tavoittaa, tarkoittaa usein vaikeimmin tavoitettavien alipalvelemista. Green Bookin vuoden 2020 tarkistus vastasi kritiikkiin (muun muassa Treasury Select Committeen ja IPPR Northin vuonna 2020), että pelkät kustannus-hyötysuhteet suosivat järjestelmällisesti jo vauraita alueita, vaatimalla arviointien käsittelevän jakautumisvaikutuksia nimenomaisesti — ks. [jakaumapainotus](../jakaumapainotus/).

## Matematiikka

VFM ei ole yksittäinen suhdeluku vaan kolmiosainen (tai nelisosainen) diagnostiikka, jota sovelletaan järjestyksessä:

```
Taloudellisuus:   Hankitaanko panokset alhaisimmalla kohtuullisella hinnalla
                  vaaditulle laadulle?  (£ panosyksikköä kohti)

Tehokkuus:        Kuinka hyvin panokset muuttuvat suoritteiksi?
                  (suoritteet / panokset, esim. käsitellyt tapaukset
                  käsittelijätuntia kohti)

Vaikuttavuus:     Tuottavatko suoritteet todella aiotut tulokset?
                  (saavutetut tulokset / aiotut tulokset)

[Oikeudenmukaisuus]: Jakautuvatko kustannukset ja hyödyt reilusti väestössä,
                  vai keskittyvätkö ne niihin, jotka tarvitsevat niitä vähiten?
```

VFM-epäonnistuminen voi tapahtua missä tahansa vaiheessa toisistaan riippumatta: taloudellinen hankinta tehottomalla toimituksella; väärän suoritteen tehokas toimitus; vaikuttavat tulokset ostettuna liian korkealla hinnalla. Ks. [julkisen sektorin KPI:t](../julkisen-sektorin-suorituskykymittarit/), miten nämä muuntuvat mitattaviksi indikaattoreiksi, ja [kustannusvaikuttavuusanalyysi julkishallinnossa](../kustannusvaikuttavuusanalyysi-julkishallinnossa/) muodollisesta vertailumenetelmästä.

## Työstetty esimerkki

**Paikallisviranomaisen asiakaspalvelukeskus**: kunta vertailee kahta vaihtoehtoa uudelle asianhallintajärjestelmälle.

- *Vaihtoehto A*: £600 000 lisenssi (halvin saatavilla), mutta käsittelijät käyttävät edelleen keskimäärin 22 minuuttia tapausta kohti, koska työnkulku vaatii manuaalista uudelleensyöttöä järjestelmien välillä — tehokkuus on heikko.
- *Vaihtoehto B*: £900 000 lisenssi, integroitu työnkulku, käsittelijät käyttävät keskimäärin 9 minuuttia tapausta kohti.

Pelkkä taloudellisuus suosii A:ta (£300 000 halvempi). Mutta 40 000 tapauksella vuodessa A maksaa 40 000 × 22/60 = 14 667 henkilötuntia; B maksaa 40 000 × 9/60 = 6 000 henkilötuntia. Täysi henkilöstökustannus £28/tunti, A maksaa £410 667/vuosi henkilöstöaikaa B:n £168 000/vuosi vastaan — £242 667/vuosi tehokkuusero, joka ylittää £300 000 etukäteistaloudellisuuden eron 14 kuukaudessa. VFM suosii B:tä, kun tehokkuus otetaan huomioon, ei A:ta.

**Hyväntekeväisyysjärjestön toimitusavustus**: rahoittaja vertaa £50 000 avustusta, joka sai aikaan 200 onnistunutta työllistymistä (£250/sijoitus — näennäisesti erinomainen taloudellisuus), £120 000 avustukseen, joka sai aikaan 350 sijoitusta, jotka kestävät yli 12 kuukautta, kun taas ensimmäisen avustuksen sijoituksista puolet päättyy 3 kuukauden sisällä. Vaikuttavuus — pysyvät tulokset — kääntää näennäisen VFM-järjestyksen: todellinen kustannus *pysyvää* sijoitusta kohti on £250 ÷ 0,5 = £500 ensimmäiselle avustukselle, £120 000/350 ≈ £343 toiselle.

## Yhteys ohjelmistotekniikkaan

VFM antaa insinöörijoukkueille kurinalaisuuden teknologian liiketoimintaperustelujen jäsentämiseen niin kuin talous- ja tarkastustoiminnot ne todellisuudessa lukevat:

- Esitä taloudellisuus, tehokkuus ja vaikuttavuus erillisinä rivinä liiketoimintaperustelussa, ei yhtenä sekoitettuna "arvo"-lukuna — Green Bookiin koulutettu arvioija pyytää juuri tätä erittelyä.
- Varo optimoimasta hankintakustannusta (taloudellisuutta) integraation ja työnkulun tehokkuuden kustannuksella, mikä on hyvin yleinen valesäästö julkishallinnon IT:ssä (ks. [omistamisen kokonaiskustannus julkishallinnon IT:ssä](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/) ja [rakenna vs. osta julkishallinnossa](../rakenna-vs-osta-julkishallinnossa/)).
- Vaikuttavuus vaatii tulosdataa, ei vain suoritelukuja — yhdistä toimitusmittarit [tuloksiin vs. suoritteisiin](../tulokset-vs-suoritteet/) ja todelliseen arviointiin [kontrafaktuaalianalyysin](../kontrafaktuaalianalyysi/) kautta sen sijaan, että oletetaan suoritteiden tarkoittavan tuloksia.
- Kun järjestelmä palvelee epätasaisesti alueita tai väestöryhmiä, oikeudenmukaisuus on oikeutettu VFM-vastaväite, ei erillinen "kiva olla" — ks. [digitaalinen osallisuus](../digitaalinen-osallisuus/).

## Sudenkuopat

- **VFM:n rinnastaminen alhaisimpaan hintaan.** Taloudellisuus on testin yksi kolmannes (tai neljännes); Green Book varoittaa nimenomaisesti "alhaisimman hinnan" hankintasäännöistä, jotka sivuuttavat tehokkuuden ja vaikuttavuuden.
- **Suoritteiden mittaaminen ja niiden kutsuminen tuloksiksi.** Tapausläpimeno (tehokkuus) ei ole sama asia kuin hyvin ratkaistut tapaukset (vaikuttavuus); ks. [tulokset vs. suoritteet](../tulokset-vs-suoritteet/).
- **Oikeudenmukaisuuden käsitteleminen valinnaisena.** Green Bookin vuoden 2020 päivityksestä lähtien jakautumisvaikutus on tarkoitus arvioida perinteisten kolmen E:n rinnalla, ei lisätä jälkikäteen; sen jälkiasennus liiketoimintaperustelun hyväksymisen jälkeen on paljon vaikeampaa kuin sen sisällyttäminen alusta alkaen.
- **Vaihtoehtojen vertailu eri volyymeilla ilman normalisointia.** Yksikkökohtaisen VFM-vertailun eri väestöjä palvelevien vaihtoehtojen välillä on kontrolloitava mittakaavaa, tai tehokkuusvertailu on merkityksetön.

## Lähteet

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  painos). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" ja VFM-tutkimusten metodologia.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (lausunto
  Treasury Select Committeen vuoden 2020 Green Bookin alueellista vinoumaa koskevaan tarkasteluun).
