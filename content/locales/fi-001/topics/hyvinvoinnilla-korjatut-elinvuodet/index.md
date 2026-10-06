# Hyvinvoinnilla korjatut elinvuodet (WELLBY)

WELLBY on yksi lisäpiste elämäntyytyväisyyttä tavanomaisella 0–10 hyvinvointiasteikolla yhdelle henkilölle yhden vuoden ajan. Se on terveystaloustieteessä käytetyn QALY:n rakenteellinen vastine — yksittäinen yksikkö, jonka avulla voi verrata interventioita, joiden tuloksilla ei ole muuta yhteistä — mutta rakennettu subjektiivisen hyvinvoinnin eikä kliinisten terveystilojen varaan, ja esitetty HM Treasuryn "Wellbeing guidance for appraisal: supplementary Green Book guidance" -ohjeessa (2021).

## Miksi tällä on merkitystä

Kustannus-hyötyarviointi tarvitsee yhteisen yksikön vertaillakseen nuorisokerhoavustusta tieturvallisuushankkeeseen ja mielenterveyspalveluun, joista millään ei ole yhteistä tulosmittaria. Terveystaloustiede ratkaisi tämän kliinisille interventioille QALY:llä: laatukorjattu elinvuosi, painotettuna nollasta (kuollut) yhteen (täysi terveys). HM Treasuryn hyvinvointiohje laajentaa saman logiikan ei-terveysalan julkisiin menoihin, käyttäen ONS:n yhdenmukaistettua elämäntyytyväisyyskysymystä ("Kuinka tyytyväinen olet elämääsi nykyisin?", vastattuna 0–10) tulosasteikkona terveystila-indeksin sijaan. WELLBY 1 tarkoittaa yhden henkilön elämäntyytyväisyyden nousua yhden kokonaisen pisteen verran yhden vuoden ajan (tai vastaavasti kymmenen ihmisen tyytyväisyyden nousua 0,1 pisteellä kukin vuoden ajan — WELLBY:t summautuvat väestön yli samalla tavalla kuin QALY:t). HM Treasuryn ohje asettaa havainnollistavan rahallisen arvon WELLBY:tä kohti (noin £13 000, 2019/20 hinnat), joka on johdettu sovittamalla yhteen subjektiivisen hyvinvoinnin data ja muut lähestymistavat elinvuoden arvoon, antaen arvioijille tavan rahamääräistää tuloksia — yksinäisyyden väheneminen, yhteisön koheesio, viheralueiden saavutettavuus — joita [hyvinvoinnin arvottamisen](../hyvinvoinnin-arvottaminen/) tekniikat pystyivät aiemmin vain kuvaamaan, ei vertaamaan yhteisellä pohjalla terveys- tai turvallisuusmenoihin.

## Matematiikka

```
WELLBY = Δ elämäntyytyväisyys (0–10-asteikko) × vuodet, joiden ajan muutos säilyy
        (summattuna kaikkien vaikutettujen ihmisten yli)

Rahamääräistetty hyvinvointihyöty = tuotetut WELLBY:t × arvo WELLBY:tä kohti (HMT:n viitearvo)

vrt. QALY = Δ terveystilahyöty (0–1-asteikko) × vuodet kyseisessä tilassa
```

0–10-tyytyväisyysasteikko ja 0–1-QALY-hyötyasteikko eivät ole vaihdettavissa ilman muunnosvaihetta; HM Treasuryn ohje käsittelee näiden yhteensovittamista, jotta esimerkiksi QALY:illa arvioitua terveysinterventiota ja WELLBY:illä arvioitua sosiaalista interventiota ei hiljaa kaksoislasketa tai jätetä vertailukelvottomiksi samassa [Green Book -arvioinnissa](../green-book-arviointi/).

## Työstetty esimerkki

**Paikallisviranomaisen yksinäisyyspalvelu**: ystävätoimintasuunnitelma palvelee 400 eristäytynyttä iäkästä asukasta. Seurantakyselyt osoittavat keskimääräisen elämäntyytyväisyyden nousevan 5,2:sta 6,0:aan (0,8 pisteen kasvu), ja vaikutuksen arvioidaan säilyvän 2 vuotta ennen hiipumista.

```
WELLBY:t = 400 henkilöä × 0,8 pistettä × 2 vuotta = 640 WELLBY:tä

Rahamääräistetty arvo = 640 × £13 000 = £8 320 000
```

Vuosittaista ohjelmakustannusta £300 000 vastaan (£600 000 kahdelta vuodelta) hyöty-kustannussuhde on noin 8 320 000 / 600 000 ≈ **13,9:1** — luku, joka voi nyt olla samassa arviointitaulukossa kuin terveyssuunnitelman kustannus vältettyä QALY:ä kohti tai liikennesuunnitelman matka-aikasäästöt.

**Hyväntekeväisyysjärjestö, pienempi mittakaava**: yhteisötaideohjelma tavoittaa 50 osallistujaa mitatulla tyytyväisyyskasvulla 0,3 pistettä, kestäen 1 vuoden.

```
WELLBY:t = 50 × 0,3 × 1 = 15 WELLBY:tä
Rahamääräistetty arvo = 15 × £13 000 = £195 000
```

## Yhteys ohjelmistotekniikkaan

- Mikä tahansa kansalaisille suunnattu palvelu, joka jo kerää elämäntyytyväisyys- tai hyvinvointikyselykohdan (monet paikallisviranomaisten ja terveys- ja hoivaalustat tekevät niin ONS:n neljän vakiohyvinvointikysymyksen mukaisesti), voi laskea WELLBY:t suoraan olemassa olevista dataputkista sen sijaan, että tilattaisiin räätälöity taloudellinen arviointi jokaiselle palvelumuutokselle.
- WELLBY:t antavat [Social Value Act](../yhteiskunnallisen-arvon-laki/) -raportointia tai [yhteiskunnallista sijoitetun pääoman tuottoa](../yhteiskunnallinen-sijoitetun-pääoman-tuotto/) varten rakentaville insinööritiimeille kansallisesti standardoidun, HM Treasuryn hyväksymän nimittäjän, välttäen räätälöityjen "vaikutuspisteiden" lisääntymisen, joita ei voi verrata sopimusten tai toimittajien kesken.
- Koska WELLBY:t ovat additiivisia ihmisten ja ajan yli, ne yhdistyvät siististi väestötason tulosseurantaan, jota käytetään [tuloksiin perustuvan vastuullisuuden](../tuloksiin-perustuva-vastuullisuus/) järjestelmissä — palvelun kojelauta voi raportoida kumulatiiviset tuotetut WELLBY:t neljännesvuodessa samalla tavalla kuin terveysjärjestelmä raportoi saavutetut QALY:t.

## Sudenkuopat

- **Oletus, että itse raportoidut tyytyväisyyshyödyt ovat täysin kohdistettavissa interventiolle** — ilman kontrafaktuaalia (vertailuryhmä tai ennen/jälkeen-asetelma kontrolleineen) et voi erottaa WELLBY-hyötyä yleisistä trendeistä; ks. [kontrafaktuaalianalyysi](../kontrafaktuaalianalyysi/).
- **WELLBY:iden ja QALY:iden sekoittaminen yhteen kokonaissummaan ilman sovittamista** — HM Treasuryn ohje on yksiselitteinen siitä, että nämä kaksi käyttävät eri asteikkoja ja eri taustalla olevia arvoteorioita; niiden naiivi summaaminen kaksoislaskee päällekkäistä hyvinvointia.
- **Rahamääräisen viitearvon käyttö kritiikittä** — £/WELLBY-luku on kansallinen keskiarvoarvio todellisilla epävarmuusvälein; HM Treasuryn ohje suosittelee herkkyysanalyysia, ei sen käsittelemistä kiinteänä vaihtokurssina.

## Lähteet

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (neljä tavanomaista hyvinvointikysymystä).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
