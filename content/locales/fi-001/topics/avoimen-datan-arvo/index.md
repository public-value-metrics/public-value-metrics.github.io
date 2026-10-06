# Avoimen datan arvo

Avoimen datan arvo on ongelma arvioida, mitä valtion ja julkinen data on arvoltaan, kun sillä ei ole hintaa: sitä ei myydä, joten tulorivi puuttuu, mutta sen julkaiseminen (säätiedot, liikenteen aikataulut, postinumeroalueiden rajat, yritysrekisterit) tuottaa osoitettavasti taloudellista ja yhteiskunnallista toimintaa alavirrassa. Sen hyvä arvottaminen on tärkeää, koska sekä "sen julkaiseminen on ilmaista" että "se on arvoton" ovat vääriä, ja ohjelmistoinsinööri, joka päättää, avataanko rajapinta tai aineisto, tarvitsee paremman argumentin kuin kumpikaan.

## Miksi tällä on merkitystä

Eniten siteerattu ylhäältä alas -arvio on McKinsey Global Instituten vuoden 2013 raportti "Open data: Unlocking innovation and performance with liquid information", joka asetti avoimen datan mahdollisen vuotuisen arvon seitsemällä alalla — koulutus, liikenne, kulutustuotteet, sähkö, öljy ja kaasu, terveydenhuolto ja kuluttajarahoitus — $3 biljoonasta $5 biljoonaan vuodessa maailmanlaajuisesti mekanismeilla, joihin kuuluu lisääntynyt läpinäkyvyys, tarjonnan ja kysynnän tehokkaampi kohtaaminen sekä datan päälle rakennettujen uusien tuotteiden ja palvelujen mahdollistaminen. Tuo luku on skenaarioarvio, ei mitattu toteuma, ja sitä siteerataan rutiininomaisesti väärin ikään kuin se olisi liikevaihtoa, jonka valtio voisi kerätä suoraan, vaikka arvo kertyy enimmäkseen kolmansille osapuolille — yrityksille, tutkijoille, kansalaisille — jotka käyttävät dataa, mikä on täsmälleen avaamisen eikä myymisen tarkoitus. Ison-Britannian Open Data Institute, jonka Sir Tim Berners-Lee ja Sir Nigel Shadbolt perustivat yhdessä vuonna 2012, on sittemmin rakentanut joukon hienojakoisempia, alhaalta ylös -tapaustutkimuksia — sektori sektorilta, aineisto aineistolta — jotka ovat paljon hyödyllisempiä todelliselle liiketoimintaperustelulle kuin McKinseyn otsikkoluku, koska ne osoittavat arvonluonnin mekanismin, ei vain sen kokonaiskokoa.

## Matematiikka

Avoimella datalla ei ole markkinahintaa, joten arvotusmenetelmät korvaavat sen; kolme lähestymistapaa toistuu, eikä mikään ole yksin riittävä:

```
1. Vältetty kustannus / korvauskustannusmenetelmä:
   arvo ≈ mitä käyttäjät olisivat maksaneet tuottaakseen tai lisensoidakseen
   vastaavan datan itse — alaraja, sivuuttaa arvon, jonka luovat käytöt,
   joita alkuperäinen tuottaja ei koskaan ennakoinut

2. Markkinavastine / alavirran toiminta -menetelmä:
   arvo ≈ liikevaihto tai säästöt, jotka datan päälle rakennetut yritykset/palvelut
   tuottavat (esim. avoimeen karttadataan ja liikennedataan rakennetut
   navigointisovellukset) — tavoittaa todellisen taloudellisen toiminnan, mutta sitä
   on vaikea kohdistaa siististi datan julkaisulle (ks. additionality-and-deadweight)

3. Ehdollinen/ilmaistujen preferenssien menetelmä:
   arvo ≈ mitä käyttäjät sanovat olevansa valmiita maksamaan, tai aika, jonka he
   sanovat sen säästävän — ks. stated-preference-valuation yleisestä menetelmästä
   ja sen vinoumista

Mikään näistä ei tuota yhtä siistiä lukua kuin markkinahinta; uskottavat
avoimen datan liiketoimintaperustelut triangulaatioivat vähintään kahden yli ja
ovat nimenomaisia siitä, mikä mekanismi tekee työn.
```

## Työstetty esimerkki

**Havainnollistava kansallinen kartta-/osoitedatan julkaisu** (menetelmä ODI-tyylisten tapaustutkimusten mukaan, luvut havainnollistavat mittakaavaa, jonka tällaiset tutkimukset tyypillisesti löytävät):

```
Vältetyn kustannuksen arvio:
  Yritykset, jotka muuten lisensoisivat vastaavan osoitteenvastaavuusdatan
  kaupallisesti, arvioidulla keskimääräisellä lisenssikustannuksella £4 000/
  vuosi, arviolta 15 000 pk-yrityksen yli, jotka nyt käyttävät ilmaista avointa aineistoa
  = 15 000 × £4 000 = £60 000 000/vuosi pelkkänä vältettynä lisensointikustannuksena

Alavirran toiminnan arvio (spekulatiivisempi, tarvitsee kontrafaktuaalin):
  Avoimen datan päälle rakennetut uudet toimitusreititys- ja logistiikkatuotteet,
  joita ei olisi olemassa tai jotka olisivat olennaisesti huonompia ilman sitä —
  vaatii vertailun kontrafaktuaaliin, jossa data pysyisi suljettuna tai
  kaupallisesti lisensoituna (counterfactual-analysis), koska osa tuosta toiminnasta
  tapahtuisi joka tapauksessa maksullisella datalla korkeammalla hinnalla, mikä on
  hukkavaikutusta "avaamisen luomana arvona" -mielessä

Puolustettava liiketoimintaperustelu raportoi vältetyn kustannuksen luvun kiinteänä
alarajana ja käsittelee alavirran toiminnan lukua ylärajaskenaariona, ei tosiasiana.
```

## Yhteys ohjelmistotekniikkaan

Insinööreille käytännön avoimen datan arvokysymys on yleensä kapeampi kuin kansalliset otsikkoluvut: lisääkö tämän tietyn rajapinnan tai aineiston avaaminen (sen sijaan, että se pidettäisiin kumppanisopimuksen takana) uudelleenkäyttöä riittävästi oikeuttamaan sen dokumentoinnin, versioinnin ja tuen jatkuvan kustannuksen julkisena rajapintana? Tuo ylläpitokustannus on todellinen ja on [valtio alustana](../valtio-alustana/) -ajattelun rakenna kerran, käytä usein -talouden vastine — nämä kaksi aihetta ovat läheisiä serkuksia, toinen jaetusta koodista ja infrastruktuurista, toinen jaetusta datasta. Mikä tahansa avoimen datan arvoväite tulisi tarkistaa aihetta [lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/) vastaan ennen kuin se menee liiketoimintaperusteluun: toiminta, joka olisi tapahtunut joka tapauksessa kaupallisesti lisensoidulla datalla, ei ole arvoa, jonka *avaaminen* loi.

## Sudenkuopat

- **McKinseyn $3–5 biljoonan luvun siteeraaminen Ison-Britannian-kohtaisena tai tämän aineiston osuutena**: se on maailmanlaajuinen, seitsemän sektorin skenaarioarvio vuodelta 2013 — sen käyttäminen tarkkana kertoimena yksittäiselle kansalliselle aineistolle vääristää sitä, mitä luku on.
- **Ei kontrafaktuaalia**: kaiken avoimen datan päälle rakennetun alavirran taloudellisen toiminnan hyvittäminen kysymättä, kuinka suuri osa siitä olisi tapahtunut joka tapauksessa maksullisella tai lisensoidulla datalla korkeammalla hinnalla (ks. [lisäisyys ja hukkavaikutus](../lisäisyys-ja-hukkavaikutus/) ja [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/)).
- **Tuotantokustannuksen sekoittaminen luotuun arvoon**: aineisto, jonka kerääminen oli kallista, ei ole automaattisesti arvokas julkaistavaksi, eikä halpa ole automaattisesti vähäarvoinen — arvo seuraa alavirran käyttöä, ei ylävirran kustannusta.
- **"Avoimuuden" jatkuvan ylläpitokustannuksen sivuuttaminen**: kertaluonteisen CSV-otteen julkaiseminen ei ole sama sitoumus kuin dokumentoidun, versioidun, tuetun avoimen rajapinnan ylläpito — jälkimmäisen aliresursointi lanseerausilmoituksen jälkeen on yleinen epäonnistumistapa.

## Lähteet

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
