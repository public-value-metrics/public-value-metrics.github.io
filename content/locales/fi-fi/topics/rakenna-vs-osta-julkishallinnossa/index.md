# Rakenna vs. osta julkishallinnossa

Rakenna vai osta (build vs buy) on jäsennelty, riskikorjattu vertailu räätälöidyn kehityksen ja kaupallisen tai hyödykehankinnan välillä, vertailtuna diskontatun [omistamisen kokonaiskustannuksen](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/), arvonsaantiajan ja riskin perusteella. Valtionhallinto on rakenteellisesti ostava sektori — Technology Code of Practice asettaa oletuksen hyödyke- ja pilviratkaisujen suuntaan — mutta ministeriöiden sisäiset insinööritiimit oletuksena silti rakentavat, samoista syistä kuin rakentajat kaikkialla.

## Miksi tällä on merkitystä

Government Digital Servicen Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) ja siihen liittyvä Service Manual -ohjeistus rakenna vai osta -päätöksestä ohjaavat ministeriöitä perustelemaan räätälöidyn kehityksen oletusta vastaan, että hyödykekyvykkyys tulisi ostaa, ei rakentaa, ja että vain aidosti uusi, tehtävää erottava kyvykkyys oikeuttaa räätälöidyn koodin. HM Treasuryn optimismivinouman täydentävä ohjeistus Green Bookiin, johdettu vuoden 2002 Mott MacDonald -katsauksesta suurista julkisista hankinnoista, antaa IT-hankkeille laajimman korotushaarukan kaikista arvioiduista kategorioista — pääomakustannusarviot, joille suositellaan korotusta 10 % alapäässä ja jopa 200 % yläpäässä ennen kuin niitä käytetään arvioinnissa, heijastaen sitä, kuinka pahasti ohjelmistorakennuksia on historiallisesti aliarvioitu julkisissa hankinnoissa. Rakenna vs. osta -analyysi on olemassa juuri pakottamaan tuon riskikorjauksen pöydälle ennen hyväksyntää, sen sijaan että se ilmaantuisi kesken vuoden ylitysanomuksena.

## Matematiikka

```
Vertaa samalla 3–5 vuoden aikajänteellä, diskontattuna Green Bookin
sosiaalisella diskonttokorolla (ks. social-discount-rate.md):

NPV_vaihtoehto = PV(hyödyt, siirrettynä arvonsaantiajalla) − PV(TCO)

Riskikorjaukset (Green Bookin optimismivinouman malli):
  rakennuskustannus × 1,1–3,0       (IT-hankkeen korotushaarukka, Mott MacDonald)
  rakennuksen arvonsaantiaika + 40–60 % (käyttöönoton viiveen priori)
  osta: lisää sen sijaan integraation todellisuustarkistus ja sopimuksen poistumiskustannukset

Päätösajurit, siinä järjestyksessä kuin ne yleensä ratkaisevat:
  1. erottautuminen — onko tämä kyvykkyys tehtävä vai putkisto?
  2. arvonsaantiaika × viivästymisen kustannus (ks. cost-of-delay-in-public-programmes.md)
  3. riskikorjattu omistamisen kokonaiskustannus
```

## Työstetty esimerkki

Paikallisviranomainen tarvitsee asianhallintajärjestelmän aikuissosiaalihuoltoon. Osta: SaaS hintaan £180 000/vuosi, käytössä 4 kuukaudessa. Rakenna: arvioitu £900 000 plus £150 000/vuosi ylläpito, käytössä 14 kuukaudessa.

```
Riskikorjattu rakennuskustannus = 900 000 × 1,4 = £1 260 000
5 vuoden TCO:
  osta  = 180 000 × 5 = £900 000
  rakenna = 1 260 000 + 150 000 × 5 = £2 010 000

Viivetermi: järjestelmä välttää £40 000/kk päällekkäisiä arviointeja;
rakennus valmistuu 10 kuukautta myöhemmin kuin osto.
CoD = 10 × 40 000 = £400 000

Tehollinen vertailu: £900 000 (osta) vs. £2 010 000 + £400 000 = £2 410 000 (rakenna)
```

Osto voittaa noin £1,5 miljoonalla viiden vuoden aikana, ja suurin yksittäinen rivi itse rakennusarvion jälkeen on viivekustannus, jota pelkkä pääomamenovertailu ei koskaan olisi nostanut esiin.

## Yhteys ohjelmistotekniikkaan

Kurit, jotka siirtyvät suoraan tästä analyysista toimituskäytäntöön: **priori-pohjainen riskikorjaus** — Mott MacDonald -korotus on ohjelmistojen vastine Green Bookin optimismivinoumalle sovellettuna mekaanisesti, joten tiimien tulisi perustella poikkeuksia siihen sen sijaan, että olettaisivat oman arvionsa olevan poikkeus; **vertailukohdan rehellisyys** — rakentamisen vaihtoehto on paras saatavilla oleva osto-vaihtoehto, ei "ei mitään", mikä kytkeytyy suoraan aiheeseen [vaihtoehtoiskustannus julkisissa menoissa](../vaihtoehtoiskustannus-julkisissa-menoissa/); ja **rehellinen TCO-vertailu** — jokainen rakennusehdotus tulisi verrata osto-vaihtoehdon täyteen [omistamisen kokonaiskustannukseen](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/), ei sen listahintaan. Missä rakennus aidosti voittaa, lisärakennusajan [viivästymisen kustannus](../viivästymisen-kustannus-julkisissa-ohjelmissa/) tulisi hinnoitella nimenomaisesti liiketoimintaperustelussa, ei jättää ilmaisemattomaksi oletukseksi, ettei aika ole merkitystä.

## Sudenkuopat

- **Toimittajan listahinnan vertailu riskikorjaamattomaan rakennusarvioon**: tämä imartelee rakennusta kahdesti, kerran kustannuksessa ja kerran aikataulussa.
- **Nollahintainen sisäinen työ**: virkamiesinsinöörin aika käsitellään "ilmaisena", koska se on jo ministeriön henkilöstöbudjetissa, mikä kätkee sen todellisen vaihtoehtoiskustannuksen suhteessa muuhun työhön, jota tuo tiimi voisi tehdä.
- **Hinnoittelematon lukitus molempiin suuntiin**: toimittajapoistumis- ja datan siirrettävyyskustannukset ovat todellisia, mutta niin on räätälöidyn rakennuksen bussikerroin ja sen riippuvuus pienen, vaikeasti korvattavan sisäisen tiimin säilyttämisestä sen elinkaaren ajan.
- **Tehtävän erottautuminen väitettynä putkistolle**: "tämä on meille ydintä" väitettynä integraatiovälikerroksesta tai dokumenttivarastosta — testaa se sillä, huomaisiko kansalainen tai käsittelijä koskaan, kumpi on alla käytössä.

## Lähteet

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
