# Yhteiskunnallinen kustannus-hyötyanalyysi (SCBA)

Yhteiskunnallinen kustannus-hyötyanalyysi muuntaa politiikan tai ohjelman jokaisen kustannuksen ja hyödyn — markkinaperusteisen ja ei-markkinaperusteisen — yhteiseksi rahayksiköksi, diskonttaa tulevat virrat nykyarvoon ja netottaa ne tuottaen yhden luvun: tekeekö tämä ehdotus yhteiskunnan paremmaksi, ja kuinka paljon?

## Miksi tällä on merkitystä

SCBA on oletusarvoinen kvantitatiivinen menetelmä [Green Book -arvioinnin](../green-book-arviointi/) taloudellisessa tapauksessa: HM Treasuryn ohje edellyttää ehdotuksilta positiivisen nettonykyarvon yhteiskunnalle (NPSV) osoittamista aina, kun hyödyt voidaan uskottavasti rahamääräistää, käyttäen maksuhalukkuutta perustavana arvostusperiaatteena ei-markkinahyödykkeille (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, luku 5). Kuri, jonka se pakottaa, on se, että "yhteiskunnallinen" kustannus-hyötyanalyysi ei ole sama harjoitus kuin yksityisen sektorin investointiarviointi: sen on sisällytettävä kustannukset ja hyödyt, jotka kohdistuvat kolmansille osapuolille, jotka eivät ole osapuolina kaupassa (ulkoisvaikutukset), sen on käytettävä [sosiaalista diskonttokorkoa](../sosiaalinen-diskonttokorko/) kaupallisen pääomakustannuksen sijaan, ja sen tulisi soveltaa [jakaumapainotusta](../jakaumapainotus/), jossa punta merkitsee enemmän köyhemmälle kuin rikkaammalle kotitaloudelle.

SCBA pettää juuri siellä, missä sen kriitikot odottavat: hyödykkeet, joilla ei ole markkinavastinetta — puhdas ilma, yhteiskunnallinen yhteenkuuluvuus, pelastetun hengen arvo — on rahamääräistettävä [ilmaistujen preferenssien](../ilmaistujen-preferenssien-arvottaminen/) tai [paljastettujen preferenssien](../paljastettujen-preferenssien-arvottaminen/) menetelmillä, tai on rakennettava [varjohinta](../varjohinnoittelu/). Kun rahamääräistäminen on kiistanalaista eikä vain vaikeaa, Green Book itse suosittelee palaamista [kustannusvaikuttavuusanalyysiin](../kustannusvaikuttavuusanalyysi-julkishallinnossa/) tai [monikriteeriseen päätösanalyysiin](../monikriteerinen-päätösanalyysi/) sen sijaan, että pakotettaisiin luku, johon kukaan ei usko.

## Matematiikka

```
NPSV = Σ [t=0..T] (Hyöty_t − Kustannus_t) / (1 + r)^t

missä:
  Hyöty_t     = kaikki rahamääräistetyt hyödyt vuonna t, mukaan lukien ei-markkinahyödykkeet,
                jotka arvotetaan ilmaistujen/paljastettujen preferenssien tai varjohinnan avulla
  Kustannus_t = kaikki rahamääräistetyt kustannukset vuonna t, mukaan lukien resurssien
                vaihtoehtoiskustannus (ks. ../opportunity-cost-in-public-spending/)
  r           = sosiaalinen diskonttokorko (HM Treasury asettaa 3,5 %, laskien alemmille
                koroille vuoden 30 jälkeen, Green Bookin liitteen A mukaan)
  T           = arviointijakso

Hyöty-kustannussuhde (BCR) = Σ PV(Hyödyt) / Σ PV(Kustannukset)
```

BCR yli 1 (tai NPSV yli nollan) osoittaa nettoyhteiskunnallisen arvon. Green Bookin rahalle vastine -kategoriat (käytössä liikenteen ja infrastruktuurin arvioinnissa) nimeävät BCR-alueet: alle 1,0 on heikko rahalle vastine, 1,0–1,5 matala, 1,5–2,0 kohtalainen, 2,0–4,0 korkea ja yli 4,0 erittäin korkea. Herkkyysanalyysi — NPSV:n uudelleenajo pessimistisillä ja optimistisilla oletuksilla — on pakollinen, ei valinnainen, koska rahamääräistetyillä ei-markkinahyödyillä on laajat epävarmuusvyöhykkeet.

## Työstetty esimerkki

**Paikallisviranomainen**: kunta arvioi £3 miljoonan investointia uuteen pyöräily- ja kävelyverkkoon 20 vuoden arviointijaksolla ja 3,5 %:n diskonttokorolla.

```
Kustannukset: £3 milj. pääomaa vuonna 0, £50 000/vuosi ylläpitoa (vuodet 1–20)
PV(ylläpito) ≈ £50 000 × 14,2 (20 vuoden annuiteettitekijä korolla 3,5 %) ≈ £710 000
PV(kustannukset) yhteensä ≈ £3,71 milj.

Hyödyt (kaikki rahamääräistetty julkaistuilla DfT/WHO-arvostustyökaluilla):
  Terveyshyöty lisääntyneestä fyysisestä aktiivisuudesta: £180 000/vuosi
  Poissaolojen väheneminen: £40 000/vuosi
  Ruuhkien väheneminen (vähemmän autoliikennettä): £60 000/vuosi
  Hyötyvirta yhteensä: £280 000/vuosi
PV(hyödyt) ≈ £280 000 × 14,2 ≈ £3,98 milj.

NPSV = £3,98 milj. − £3,71 milj. = +£0,27 milj.
BCR = 3,98 / 3,71 = 1,07 → "matala" rahalle vastine
```

Hanke ylittää rajan, mutta vain niukasti; herkkyysajo 20 % alemmalla terveyshyötyarviolla (heijastaen aitoa epävarmuutta fyysisen aktiivisuuden arvottamisessa) kääntää BCR:n alle 1,0:n, minkä vuoksi Green Book vaatii herkkyystaulukon julkaisemista otsikkoluvun rinnalla, ei vain keskeistä estimaattia.

**Hyväntekeväisyysjärjestö**: vauvakuolleisuuden ehkäisyohjelma, jonka kustannus on £500 000/vuosi, arvioidaan tilastollisen hengen arvolla (VSL) — varjohinnalla, ei havaitulla markkinahinnalla — noin £2,1 milj. (HM Treasuryn vuonna 2023 päivitetty luku, joka sekin on johdettu ilmaistujen preferenssien tutkimuksista). Yhden vauvan kuoleman välttäminen vuodessa £500 000 kustannusta vastaan antaa BCR:n 4,2, mukavasti "erittäin korkea" rahalle vastine — mutta koko tulos nojaa VSL-lukuun, minkä vuoksi jokaisen VSL:ää käyttävän SCBA:n on ilmoitettava se oletuksena, ei tosiasiana.

## Yhteys ohjelmistotekniikkaan

SCBA on luonnollinen kehys alusta- ja infrastruktuuri-investointipäätöksille valtionhallinnon ohjelmistoissa — jaetun tunnistautumisalustan vertaaminen ministeriökohtaisiin pistemäisiin ratkaisuihin vaatii esimerkiksi sellaisten hyötyjen rahamääräistämistä kuin vähentynyt päällekkäinen käyttöönotto, vähentynyt petos ja nopeampi aika palveluun, joilla ei ole itsessään markkinahintaa. Taustalla olevaa palvelua rakentavien insinöörien tulisi odottaa ohjelmapäälliköiden pyytävän syötteitä tähän analyysiin: transaktioiden yksikkökustannukset (ks. [kustannus transaktiota kohti](../kustannus-transaktiota-kohti/)), odotetut volyymit ja heikkenemis-/käyttökatkokustannukset. Tärkein tuotava kuri: diskonttaa tulevat hyödyt, nimeä kontrafaktuaalinen perustaso nimenomaisesti (ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/)) äläkä koskaan esitä yhtä pisteestimaattia ilman sen herkkyysaluetta.

## Sudenkuopat

- **Hyötyjen kaksoislaskenta.** Sekä "säästetyn ajan" että "tuottavuuden, joka on saatu tästä ajasta" laskeminen erillisinä hyötyriveinä liioittelee tapausta; säästetty aika on hyöty, sen myöhempi käyttö ei ole lisähyöty, ellei sitä osoiteta erikseen.
- **Syrjäytettyjen kustannusten jättäminen pois.** Hanke, joka siirtää ruuhkat tieltä toiselle tai petoksen yhdeltä kanavalta toiselle, ei ole luonut nettohyötyä, jota sen otsikko-NPSV antaa ymmärtää — ks. [syrjäyttäminen ja kohdentaminen](../syrjäyttäminen-ja-kohdentaminen/).
- **Yksityisen diskonttokoron käyttö.** Kaupallisen pääomakustannuksen (sanokaamme 8–10 %) soveltaminen sosiaalisen diskonttokoron sijaan aliarvioi järjestelmällisesti pitkän aikajänteen julkiset hyödyt, kuten terveys- ja ympäristöhyödyt — ks. [sosiaalinen diskonttokorko](../sosiaalinen-diskonttokorko/).
- **Kiistattoman rahamääräistäminen ja kiistanalaisen ohittaminen kädenheilautuksella.** Jos kaksi kolmasosaa ehdotuksen hyödystä on varmasti rahamääräistetty tehokkuussäästö ja yksi kolmasosa epävarmasti rahamääräistetty hyvinvointihyöty, otsikko-NPSV sekoittaa hiljaa kovan luvun pehmeään; raportoi ne erikseen.

## Lähteet

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, luku 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
