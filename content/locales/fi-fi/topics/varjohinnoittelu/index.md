# Varjohinnoittelu

Varjohinta (shadow price) on arvioitu arvo, joka annetaan hyödykkeelle, resurssille tai ulkoisvaikutukselle, jolla ei ole havaittavaa markkinahintaa tai jonka markkinahinta on vääristynyt eikä heijasta sen todellista yhteiskunnallista arvoa. Valtionhallinnon arviointi nojaa pieneen joukkoon virallisia varjohintoja — hiili, ei-työaika, työtön työvoima — jotka julkaistaan keskitetysti, jotta jokainen ministeriö käyttää samaa lukua.

## Miksi tällä on merkitystä

Varjohinnat ovat olemassa, koska [yhteiskunnallinen kustannus-hyötyanalyysi](../yhteiskunnallinen-kustannus-hyötyanalyysi/) ei voi toimia ilman rahallista arvoa jokaiselle kustannukselle ja hyödylle, ja useilla merkittävimmistä — päästetyllä hiilitonnilla, työmatkalaisen tunnilla, muuten työttömän työvoiman tunnilla — ei ole lainkaan markkinahintaa tai on markkinahinta, joka vääristää niiden todellista yhteiskunnallista kustannusta. HM Treasury ja Department for Energy Security and Net Zero julkaisevat yhdessä kaikessa brittiläisessä valtionhallinnon arvioinnissa käytettävän hiilen varjohinnan (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), joka on johdettu ei miltään hiilimarkkinahinnalta vaan tavoitteisiin sopivasta lähestymistavasta: hiilen arvo on asetettu rajavähennyskustannukseen, joka tarvitaan Ison-Britannian lakisääteisten hiilibudjettien saavuttamiseksi, mikä on perustavanlaatuisesti eri logiikka kuin sen tarkkailu, millä hiili todella käy kauppaa EU:n tai UK:n päästökauppajärjestelmässä.

Varjopalkka noudattaa samanlaista logiikkaa työvoiman puolella. Sellaisen henkilön työllistäminen, joka olisi muuten ollut työtön, ei maksa yhteiskunnalle hänen koko palkkaansa — osa tuosta palkasta on siirtoa menetetyistä etuusmaksuista ja menetetystä vapaa-ajasta/hakuajasta eikä nettomääräistä uutta nostoa yhteiskunnan resursseista — joten Green Book -ohje asettaa varjohinnan alle markkinapalkan työttömyydestä siirtyvälle työvoimalle, heijastaen kyseisen työvoiman todellista vaihtoehtoiskustannusta (ks. [vaihtoehtoiskustannus julkisissa menoissa](../vaihtoehtoiskustannus-julkisissa-menoissa/)) eikä sen markkinahintaa.

## Matematiikka

```
Hiilen varjohinta (havainnollistava rakenne, nykyiset arvot virallisesta
BEIS/DESNZ:n hiiliarvotyökalusta — älä käytä vanhentuneita lukuja):
  Kaupattavan sektorin arvo: ETS-päästöoikeuksien hintakehitysten mukaan
  Ei-kaupattavan sektorin (tavoitteisiin sopiva) arvo: asetettu rajavähennys-
    kustannukseen, joka tarvitaan lakisääteisten hiilibudjettien saavuttamiseksi,
    nousten ajan myötä, kun helpommat vähennysvaihtoehdot ehtyvät
  Sovellettuna: £/tonni CO2e × vaihtoehdon päästämät tai vähentämät tonnit,
    diskontattuna sosiaalisella diskonttokorolla tuleville vuosille

Varjopalkka (SWR):
  SWR = Markkinapalkka − (säästetyn vapaa-ajan/hakuajan arvo
                           + enää maksamattomien sosiaalietuuksien arvo)
  Tyypillisesti ilmaistuna markkinapalkan murto-osana (esim. SWR = 0,6
    × markkinapalkka korkean työttömyyden alueella, Green Bookin liitteen A
    ohjeen mukaan työmarkkinoille, joilla on vapaata kapasiteettia)
```

Molemmat luvut ovat keskitetysti asetettuja politiikkakonventioita, eivät empiirisiä markkinahavaintoja — varjohinnan koko tarkoitus on korvata puuttuva tai vääristynyt markkina, joten sitä käyttävän arvioinnin on viitattava nykyiseen viralliseen lähteeseen eikä johdettava omaa lukuaan, juuri jotta jokaisen ministeriön arviointi on vertailukelpoinen.

## Työstetty esimerkki

**Valtionhallinto**: tulvasuojahankkeen arviointi arvioi sen välttävän 400 tonnia CO2e-päästöjä vuodessa (hätälaitteiden vähentyneen käytön ja vältetyn jälleenrakennuksen vähentyneen sisältämän hiilen kautta) 30 vuoden arviointiaikana, "do minimum" -perustasoon verrattuna.

```
Havainnollistava hiilen varjohinta: £280/tonni CO2e (vuosi 1, nousten arviointijakson
  aikana virallisen ei-kaupattavan hiiliarvon aikataulun mukaan)
Vuoden 1 hiilihyöty = 400 × £280 = £112 000
```

Koska virallinen aikataulu antaa hiilen arvon *nousevan* arviointijakson aikana (heijastaen tiukkenevia hiilibudjetteja), analyytikon on sovellettava oikeaa vuosikohtaista arvoa jokaiselle 30 vuoden virran vuodelle, ei kiinteää arvoa — vuoden 1 arvon käyttö koko jaksolla aliarvioisi myöhempien vuosien hyötyjä ja vääristäisi järjestystä vaihtoehtoisiin tulvasuojasuunnitelmiin nähden, joilla on erilaiset hiiliprofiilit.

**Paikallisviranomainen**: kunnan työllisyystukiohjelma pitkäaikaistyöttömille asukkaille sijoittaa 150 ihmistä työhön £11/tunti palkalla. Arvottaminen koko markkinapalkalla hyvittäisi ohjelmalle £11 × tehdyt tunnit yhteiskunnallisena hyötynä, mutta varjopalkkalähestymistapa tunnustaa, että nämä eivät olleet työntekijöitä, jotka vedettiin muista töistä — heidän työnsä todellinen vaihtoehtoiskustannus ennen ohjelmaa oli matala.

```
Markkinapalkka: £11,00/tunti
Varjopalkka (havainnollistava, korkea paikallinen työttömyys): 0,6 × markkinapalkka = £6,60/tunti
Tehtyä tuntia kohti kohdistettava yhteiskunnallinen nettohyöty ≈ £11,00 − £6,60 = £4,40/tunti
  (se "ylimääräinen" arvo, joka syntyy siirtämällä aidosti joutilasta työvoimaa tuotantoon,
   erillinen itse palkasta, joka on pääosin siirto)
```

Siksi työllisyysohjelmien arvioinnit korkean työttömyyden alueilla voivat osoittaa positiivisen nettoyhteiskunta-arvon, vaikka sama ohjelma, jota ajettaisiin täystyöllisyysalueella, jossa syrjäytetty työvoima vedettäisiin yksinkertaisesti muista töistä, ei osoittaisi.

## Yhteys ohjelmistotekniikkaan

Varjohinnoittelu koskettaa harvoin ohjelmistotoimitusta suoraan, mutta sillä on merkitystä aina, kun liiketoimintaperustelu väittää hiili- tai yhteiskunnallista hyötyä IT-muutoksesta — datakeskusten yhdistäminen, joka väittää hiilisäästöjä, tai paperiton palvelu, joka väittää vältettyä painatuksen ja postin hiiltä, on käytettävä nykyistä virallista hiilen varjohintaa eikä keksittyä lukua, ja sen on sovellettava oikeaa vuosi vuodelta -aikataulua kiinteän arvon sijaan, täsmälleen kuten mitä tahansa muuta Green Book -arvioinnin syötettä. Ks. [omistamisen kokonaiskustannus julkishallinnon IT:ssä](../omistamisen-kokonaiskustannus-valtionhallinnon-tietotekniikassa/) ja [julkisen sektorin kyberturvallisuuden arvo](../julkisen-sektorin-kyberturvallisuuden-arvo/), jotka molemmat tarvitsevat usein varjohinnan vaikeasti rahamääräistettävälle syötteelle (tietomurtoriski, käyttökatko) suoraan hinnoiteltujen erien rinnalla.

## Sudenkuopat

- **Vanhentuneen hiili- tai palkkaluvun käyttö.** Molempia arvoja tarkistetaan määräajoin keskitetyissä ohjeissa; korvatun luvun varaan rakennettu arviointi ei kestä Treasuryn tarkastelua.
- **Kiinteän hiilen varjohinnan soveltaminen monivuosikymmenen arvioinnissa.** Virallinen aikataulu nousee ajan myötä; vuoden 1 arvon käyttö koko jaksolla vääristää hyötyjen tai kustannusten profiilia.
- **Varjopalkan sekoittaminen työntekijän todellisen palkan alennukseen.** Varjopalkka säätää *arvioinnin* työpanoksen arvostusta, ei palkkaa, jonka työntekijä todella saa — kahden sekoittaminen kutsuu (virheellisesti) perustelemaan markkinapalkkaa alhaisempaa palkkaa.
- **Räätälöidyn varjohinnan johtaminen virallisen käyttämisen sijaan.** Varjohinnat ovat politiikkakonventioita juuri siksi, että arvioinnit ovat vertailukelpoisia ministeriöiden välillä; paikallisesti keksitty luku, kuinka hyvin perusteltu tahansa, rikkoo tuon vertailukelpoisuuden.

## Lähteet

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," liite A (työn
  varjohinta, ei-työajan arvot).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (varjohinnoittelun perustavanlaatuinen metodologia).
