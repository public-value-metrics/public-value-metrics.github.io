# Virtausmittarit valtionhallinnon toimituksessa

Virtausmittarit — Littlen laki, keskeneräisen työn (WIP) rajat ja virtaustehokkuus — kuvaavat, kuinka nopeasti työ liikkuu rajallisen kapasiteetin järjestelmässä. Sprinttitaulu on yksi tällainen järjestelmä; etuushakemusjono, kaavoitushakemusrekisteri tai viisumikäsittelyn tapausjäämä on täsmälleen sama matematiikka eri univormussa.

## Miksi tällä on merkitystä

Valtionhallinnon tapauskuormat ovat jonoutumisjärjestelmiä, ja jonoutumisjärjestelmät noudattavat jonoutumislakeja riippumatta siitä, mittaako kukaan niitä. Lakisääteiset ratkaisuajat tekevät tämän nimenomaiseksi: Town and Country Planning -järjestelmän alla useimmilla vähäisillä kaavoitushakemuksilla on 8 viikon lakisääteinen ratkaisutavoite ja suurilla hakemuksilla 13 viikkoa — läpimenoaikasitoumus, joka on kirjattu suoraan lakiin. Home Officen turvapaikkakäsittelyn jäämä, jota National Audit Office ja Home Affairs Select Committee ovat tarkastelleet toistuvasti, on hyvin dokumentoitu tapaus julkisesta järjestelmästä, jossa keskeneräinen työ kasvoi nopeammin kuin läpimeno pitkään, ajaen läpimenoajat kauas minkä tahansa lakisääteisen tai palveluodotuksen yli. Virtausmittarit antavat insinööreille ja tapauskäsittelyn johtajille yhteisen, kvantitatiivisen sanaston täsmälleen tälle epäonnistumistavalle, sen sijaan että se jätettäisiin kvalitatiiviseksi "jäämäongelmaksi".

## Matematiikka

```
Littlen laki:  WIP = Läpimeno × Läpimenoaika
           →   Läpimenoaika = WIP / Läpimeno

Virtaustehokkuus = aktiivinen (kosketus-) aika / kokonaisläpimenoaika   (Vacanti)

WIP-rajan vaikutus: kiinteällä läpimenolla WIP:n puolittaminen puolittaa
likimain keskimääräisen läpimenoajan (Littlen laki uudelleenjärjestettynä) —
vipu, joka on käytettävissä ilman henkilöstön lisäämistä.
```

Ks. [DORA-mittarit julkiselle arvolle](../dora-mittarit-julkiselle-arvolle/) vastaavasta matematiikasta sovellettuna ohjelmiston käyttöönottoketjuihin tapauskäsittelyn sijaan.

## Työstetty esimerkki

**Paikallisviranomaisen kaavoitusosasto**: 400 hakemusta auki kerrallaan (WIP), tiimi ratkaisee 50 hakemusta/viikko (läpimeno).

```
Läpimenoaika = WIP / Läpimeno = 400 / 50 = 8 viikkoa
```

Tämä osuu täsmälleen vähäisten hakemusten lakisääteiseen 8 viikon tavoitteeseen — ilman väljyyttä, mikä tarkoittaa, että mikä tahansa saapuvan kysynnän tai lausunnonantajan vastausajan vaihtelu työntää ratkaisut lakisääteisen määräajan yli.

**Virtaustehokkuus**: noin 8 viikon (56 kalenteripäivän) aikana hakemuksella on tyypillisesti noin 6 tuntia todellista käsittelijän käsittelyaikaa.

```
Virtaustehokkuus = 6 tuntia / (56 päivää × 8 työtuntia/päivä)
                 = 6 / 448 ≈ 1,3 %
```

Vacantin vertailuarvo ohjelmistotiimeille asettaa tyypillisen virtaustehokkuuden 15–20 %:iin; valtionhallinnon tapauskäsittely, jossa on useita lakisääteisiä lausunnonantajasiirtoja ja julkisia kuulemisikkunoita, toimii usein suuruusluokkaa matalammalla. 98,7 % "odotusajasta" on se, minne kahdeksan viikkoa todella menee — ei käsittelijöiden kapasiteettiin.

**WIP-rajainterventio**: avointen hakemusten rajaaminen 15:een käsittelijää kohti rajoittamattoman 25:n sijaan (pitäen läpimenon vakiona) siirtää WIP:n 400:sta noin 240:ään 16 hengen tiimissä:

```
Uusi läpimenoaika = 240 / 50 = 4,8 viikkoa
```

Läpimenoajan lähes puolittuminen politiikkamuutoksella, ei henkilöstölisäyksellä — sama vipu, jota DORA-tyyliset toimitustiimit vetävät rajatessaan sprintin WIP:ia.

## Yhteys ohjelmistotekniikkaan

Virtausmittarit ovat yhteinen kieli toimitustiimin Kanban-taulun ja tapauskäsittelylattian välillä, jolle se rakentaa ohjelmistoa: käsittelijän jono ja pull request -jono kumpikin noudattavat Littlen lakia, ja kumpikin ylittää läpimenoaikatavoitteensa samalla tavalla — liikaa WIP:ia suhteessa läpimenoon. Tällä on suora merkitys aiheelle [viivästymisen kustannus julkisissa ohjelmissa](../viivästymisen-kustannus-julkisissa-ohjelmissa/): läpimenoaika × CoD on jonossa kulloinkin istuvat punnat, ja aiheelle [palvelustandardit ja transaktiomittarit](../palvelustandardit-ja-transaktiomittarit/), jossa julkaistu käsittelyaikatavoite on läpimenoaikasitoumus, jonka vain virtausmittarit voivat diagnosoida, kun se ohitetaan. Tapauskäsittelyjärjestelmän ohjelmiston tulisi tuoda WIP ja läpimenoaika näkyviin ensiluokkaisina operatiivisina mittareina, ei haudata niitä asianhallintajärjestelmään, jota kukaan ei kysele.

## Sudenkuopat

- **WIP-rajojen lisääminen korjaamatta todellista pullonkaulaa**: jos rajoite on ulkoisen lakisääteisen lausunnonantajan vastausaika, käsittelijän WIP:n rajaaminen vain siirtää jonon ylävirtaan sen lyhentämisen sijaan.
- **Virtaustehokkuuden käsitteleminen manipuloitavana tavoitteena**: aktiivisen ajan 1,3 %:n kiirehtiminen tuskin liikuttaa läpimenoaikaa; vipu on lähes aina odotustiloissa, mikä tarkoittaa yleensä prosessin uudelleensuunnittelua, ei käsittelijän nopeutta.
- **Vaihtelun sivuuttaminen**: Littlen laki kuvaa keskiarvoja; tapauskuorma, jolla on suuri kysynnän vaihtelu, tarvitsee puskurikapasiteettia, ei vain tiukempaa WIP-rajaa, tai lakisääteiset määräajat ylittyvät silti volatiililla hännällä keskiarvon parantuessa.
- **WIP:n epäjohdonmukainen mittaaminen**: tapaus, joka on "auki" rekisterijärjestelmässä mutta todellisuudessa pysähtynyt odottamaan kolmatta osapuolta, on yhä WIP; sen pois jättäminen imartelee lukuja muuttamatta kansalaisnäkyvää todellisuutta.

## Lähteet

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, kaavoitushakemusten lakisääteiset määräajat. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, Home Officen turvapaikkakäsittelyä ja majoitusta koskevat raportit. <https://www.nao.org.uk/>
