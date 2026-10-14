# Yhdistetty arvo (blended value)

Yhdistetty arvo (blended value) on Jed Emersonin ehdotus, että kaikki organisaatioiden ja sijoitusten toiminta luo samanaikaisesti arvoa kolmella linjalla — taloudellisella, sosiaalisella ja ympäristöllisellä — ja että nämä eivät ole kolme erillistä tuottoa, joiden välillä tehdään vaihtokauppoja, vaan yksi, erottamaton arvolupaus. Emersonin kehyksessä ei ole sellaista asiaa kuin puhtaasti taloudellinen tuotto tai puhtaasti sosiaalinen; jokainen käytetty, sijoitettu tai avustuksena myönnetty punta tuottaa jonkin sekoituksen kaikkia kolmea.

## Miksi tällä on merkitystä

Emerson esitti ajatuksen artikkelissa "The Blended Value Proposition: Integrating Social and Financial Returns" (California Management Review, 2003), joka oli kirjoitettu suoraan 1900-luvun käytäntöä vastaan lajitella pääoma kahteen siiloon — hyväntekeväisyyteen, jonka odotettiin tuottavan sosiaalista tuottoa ja antavan taloudellisen tuoton kokonaan anteeksi, ja sijoitukseen, jonka odotettiin tuottavan taloudellista tuottoa ja kohtelevan sosiaalisia tai ympäristövaikutuksia ulkoisvaikutuksena. Emersonin argumentti oli, että tämä lajittelu oli aina fiktiota: huonosti johdettua organisaatiota rahoittava avustus tuhoaa arvoa kaikilla kolmella linjalla, ja jokea saastuttava kannattava yritys tuhoaa arvoa niin ikään kaikilla kolmella linjalla, miltä sen osakkeenomistajien tuotto paperilla näyttäneekään.

Ajatus kulkee rinnakkain John Elkingtonin "triple bottom line" -käsitteen (ihmiset, planeetta, voitto) kanssa, joka lanseerattiin vuonna 1994 ja kehitettiin hänen vuoden 1997 kirjassaan "Cannibals with Forks" ja joka ajoi yrityksiä raportoimaan sosiaalisesta ja ympäristöllisestä suorituskyvystä taloudellisen rinnalla. Yhdistetty arvo vei saman logiikan pidemmälle itse pääoman allokointiin, ja se on vaikuttavuussijoittamisen alan älyllinen esi-isä: vuonna 2009 perustettu Global Impact Investing Network (GIIN) on olemassa nimenomaan rakentaakseen infrastruktuurin — mukaan lukien IRIS+-mittarikatalogi, ks. [avustustulosten raportointi](../avustustulosten-raportointi/) — jonka avulla sijoittaja voi todella mitata yhdistelmän eikä vain väittää sitä.

## Matematiikka

Yhdistetty arvo on viitekehys, ei kaava, ja Emerson varoitti nimenomaisesti supistamasta sitä kolmen pistemäärän yksinkertaiseksi yhteenlaskuksi. Rakenne, jota se ehdottaa:

```
Jokainen käytetty pääomayksikkö (avustus, sijoitus, sopimus, osto) tuottaa:
  - taloudellisen vaikutuksen   (taloudellinen tuotto, säästetty kustannus, tuotettu liikevaihto)
  - sosiaalisen vaikutuksen     (hyvinvointi, kyvykkyys, tasa-arvon muutos ihmisille)
  - ympäristövaikutuksen        (luonnonpääoma suojeltu, heikennetty tai ennallistettu)

Näitä ei optimoida erikseen ja sitten summata. Päätös, joka maksimoi taloudellisen linjan
tuhoten sosiaalisen linjan, ei ole "yhdistettyä arvoa miinus kustannus" — se on nettoarvoa
tuhoava päätös, piste.
```

Käytännössä organisaatiot approksimoivat yhdistelmää tuloskortilla: nimetyt indikaattorit kullekin linjalle, raportoituna yhdessä, ei netotettuna yhdeksi luvuksi. Tämä on sama vaisto kuin [yhteiskunnallisen sijoitetun pääoman tuoton](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) takana (joka yrittää rahamääräistettyä netotusta) ja [luonnonpääoman kirjanpidon](../luonnonpääoman-kirjanpito/) takana (joka tekee saman ympäristölinjalle) — molemmat ovat osittaisia, yhden linjan vastauksia kysymykseen, jonka yhdistetty arvo esittää kokonaisuudessaan.

## Työstetty esimerkki

Vaikuttavuussijoittaja valitsee kahden £500 000 lainan välillä:

- **Laina A**: yhteiskunnalliselle yritykselle, joka pyörittää työkoulutuskahvilaa entisille rikoksentekijöille, 2 %:n korolla (alle 6 %:n markkinakorkoa vastaavan riskin lainoille), jonka odotetaan sijoittavan 40 ihmistä vuodessa pysyvään työhön.
- **Laina B**: markkinakorkoinen 6 %:n laina perinteiselle vähittäiskauppayritykselle, jolla ei ole ilmoitettua sosiaalista tai ympäristötavoitetta.

Puhtaasti taloudellinen linssi suosii B:tä (6 % > 2 %). Yhdistetyn arvon linssi pyytää sijoittajaa ilmoittamaan kaikki kolme linjaa molemmille:

| | Taloudellinen (vuosittain) | Sosiaalinen (vuosittain) | Ympäristöllinen |
|---|---|---|---|
| Laina A | £10 000 korkoa | 40 ihmistä sijoitettu työhön; jokainen työvuosi kantaa uskottavan vältetyn uusintarikollisuuden säästön valtiolle, johdettuna Ministry of Justicen uusintarikollisuuskustannusanalyyseistä | Neutraali |
| Laina B | £30 000 korkoa | Ei ilmoitettu | Neutraali |

Lainan A yhdistetty tuotto selvästi dominoi, kun sosiaalinen linja on hinnoiteltu, vaikka sen taloudellinen linja yksin häviää lainalle B £20 000 vuodessa. Yhdistetty arvo ei käske sijoittajaa sivuuttamaan £20 000:n eroa — se käskee häntä olemaan teeskentelemättä sen olevan ainoa olemassa oleva luku.

## Yhteys ohjelmistotekniikkaan

Säätiöille, vaikuttavuusrahastoille tai paikallisviranomaisten tilaajatiimeille tarkoitettu raportointi- tai salkunhallintaohjelmisto rakennetaan usein niin, että talouskirjanpito on ensisijainen datamalli ja sosiaaliset tai ympäristökentät on liimattu päälle vapaatekstimuistiinpanoina. Yhdistetty arvo edellyttää päinvastaista suunnittelua: kolme ensiluokkaista, yhtä jäsenneltyä arvovirtaa kiinnitettynä jokaiseen transaktio- tai avustustietueeseen, kullakin oma yksikkönsä, lähteensä ja luottamustasonsa, näytettynä yhdessä sen sijaan, että ne netotettaisiin yhdeksi harhaanjohtavan tarkaksi pistemääräksi. Ks. [yhteiskunnallinen sijoitetun pääoman tuotto](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) ja [julkisen arvon tuloskortti](../julkisen-arvon-tuloskortti/) kahdesta jäsennellystä tavasta rakentaa tuo näkymä romahduttamatta yhdistelmää.

## Sudenkuopat

- **Kolmen linjan summaaminen yhdeksi luvuksi.** Emersonin oma kirjoitus varoittaa tästä; yksittäinen yhdistetty luku kätkee, mikä linja todella tekee työn, ja kutsuu poimimaan rusinoita pullasta.
- **Yhdistelmäpesu.** Vahvan sosiaalisen tai ympäristölinjan väittäminen ilman nimettyä indikaattoria tai mittausmenetelmää, jotta voidaan perustella markkinahintaa alhaisempi taloudellinen tuotto, joka muuten näyttäisi alisuoriutumiselta.
- **Negatiivisten yhdistelmien sivuuttaminen.** Taloudellisesti menestyksekkäällä ohjelmalla voi olla negatiivinen sosiaalinen tai ympäristölinja; yhdistetty arvo edellyttää huonojen uutisten raportointia millä tahansa linjalla, ei vain hyvien yhdellä.

## Lähteet

- Emerson J. "The Blended Value Proposition: Integrating Social and Financial Returns." California Management Review, 2003;45(4). <https://www.blendedvalue.org/>
- Elkington J. "Cannibals with Forks: The Triple Bottom Line of 21st Century Business." Capstone, 1997.
- Global Impact Investing Network (GIIN), About IRIS+. <https://iris.thegiin.org/about/>
