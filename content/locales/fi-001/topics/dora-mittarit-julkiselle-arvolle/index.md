# DORA-mittarit julkiselle arvolle

DORA-mittarit (DevOps Research and Assessment) — käyttöönottotiheys, muutosten läpimenoaika, muutosvirheaste ja palvelun palautusaika, sekä viidentenä luotettavuus — ovat ohjelmistoalan laajimmin validoidut toimituskyvyn vertailuarvot. Käännettynä julkisen sektorin vastuullisuuden kielelle jokainen on suora korvike sille, kuinka nopeasti ja turvallisesti julkinen arvo tavoittaa kansalaisen.

## Miksi tällä on merkitystä

DORA:n vuosikymmenen tutkimus, joka julkaistaan vuosittain *Accelerate State of DevOps Report* -raporttina (Forsgrenin, Humblen ja Kimin menetelmä, jota nykyään ajaa Google Cloud), ryhmittelee tiimit eliitti-, korkea-, keski- ja matalatasoisiin suorittajiin. Eliittitiimit ottavat käyttöön tarvittaessa, kuluttavat alle vuorokauden commitista tuotantoon, epäonnistuvat noin 5 %:ssa muutoksista ja palautuvat alle tunnissa; matalatasoiset suorittajat ottavat käyttöön kuukausittain tai harvemmin, kuluttavat kuukausia, epäonnistuvat noin 40 %:ssa muutoksista ja palautuvat viikoissa. Valtionhallinnossa nämä eivät ole insinöörien turhamaisuusmittareita: Government Digital Servicen Service Standard edellyttää tiimien "iteroivan ja parantavan usein" ja kykenevän reagoimaan nopeasti käyttäjätarpeeseen, ja ministeriöt, jotka eivät voi ottaa käyttöön turvallisesti ja usein, ovat rakenteellisesti kykenemättömiä täyttämään tuota standardia, mitä niiden käyttäjätutkimus sanookaan. Cabinet Officen oma digitaalisen tehokkuuden työ havaitsi, että kansalaisen siirtäminen epäonnistuneesta tai hitaasta digitaalisesta transaktiosta puhelin- tai paperikanavaan on kallista — GDS:n vuoden 2012 Digital Efficiency Report arvioi joidenkin digitaalisten transaktioiden maksavan vain 20 penniä verrattuna puhelin- tai kasvokkaiskontakteihin, jotka maksavat jopa £8,62 — joten muutosvirhe kansalaisille suunnatussa palvelussa ei maksa vain insinöörityöaikaa, vaan se työntää todellisia puntia yhteydenottokeskuksen budjettiin (ks. [kanavasiirtymän säästöt](../kanavasiirtymän-säästöt/)).

## Matematiikka

```
Käyttöönottotiheys       = tuotantokäyttöönotot / aika
Muutosten läpimenoaika   = t(käyttöönotto) − t(commit), mediaani
Muutosvirheaste          = epäonnistuneet muutokset / kaikki muutokset × 100
Palautusaika (MTTR)      = t(palautettu) − t(vika), mediaani
Luotettavuus             = SLO:n saavuttaminen (saatavuus, vasteaika, oikeellisuus)
```

Julkisen arvon käännökset:

```
Läpimenoaika   → viikkoja ketjussa × CoD, ks. cost-of-delay-in-public-programmes
Virheaste      → kansalaisnäkyvä häiriöaste: CFR × kustannus uudelleenohjattua
                 yhteydenottokeskuksen puhelua (tai epäonnistunutta lakisääteistä
                 transaktiota) kohti
Palautusaika   → palvelukatkon haitta: MTTR × (estetyt hakemukset/tunti) ×
                 myöhempi kustannus tai hyvinvointimenetys yksikköä kohti
Luotettavuus   → hyötyalennus: 99 %:n saatavuudella toimiva palvelu toimittaa
                 ≈ 0,99 mallinnetusta hyödystään — toimituksen vastine
                 käyttöönotto- tai vaatimustenmukaisuusvajeelle
```

## Työstetty esimerkki

Paikallisviranomaisen etuushakemusportaalin tiimi, ennen ja jälkeen toimitusinsinöörityön investoinnin:

```
                    Ennen       Jälkeen
Käyttöönotot        kuukausittain viikoittain
Läpimenoaika        8 viikkoa   5 päivää
CFR                 30 %        10 %
MTTR                3 päivää    4 tuntia
```

Tiimi toimittaa noin 25 parannusta/vuosi, keskimääräinen arvo £8 000/viikko ([viivästymisen kustannus](../viivästymisen-kustannus-julkisissa-ohjelmissa/)). Läpimenoajan lyhentäminen noin 7,3 viikolla tuo kunkin parannuksen hyötyvirran aikaisemmaksi: 25 × 7,3 × 8 000 ≈ **£1 460 000/vuosi** aikaisemmin toimitettua arvoa. Virheasteen osalta: 25 × (0,30 − 0,10) = 5 epäonnistunutta muutosta vähemmän vuodessa; jokainen epäonnistunut muutos julkisella portaalilla ohjaa tyypillisesti arviolta 2 000 kansalaista puhelinkanavalle hintaan £8,62 vs. 20 p, nettokustannus noin £8,42 × 2 000 ≈ £16 840 häiriötä kohti, joten 5 häiriön välttäminen säästää ≈ **£84 200/vuosi**. Toimitusinsinöörityön investointi arvotetaan samassa valuutassa kuin mikä tahansa muu julkisen arvon perustelu.

## Työstetty esimerkki jatkuu: luotettavuus

Jos portaali toimii 97 %:n saatavuudella tavoitellun 99,5 %:n sijaan ja jokainen käyttökatkon prosenttiyksikkö mallinnetaan 2 %:n hakemusten menetyksenä hylkäämisen vuoksi, palvelu toimittaa noin 0,975 mallinnetusta £2 milj./vuosi -hyödystään — £50 000/vuosi hyötyalennus, jota pelkkä käyttöaikakojelauta ei koskaan nosta esiin.

## Yhteys ohjelmistotekniikkaan

DORA-mittarit ovat julkisen palvelun operatiivisia mittareita eri vaatteissa: läpimenoaika vastaa aihetta [palvelustandardit ja transaktiomittarit](../palvelustandardit-ja-transaktiomittarit/); muutosvirheaste vastaa uudelleentyö- ja valitusasteita; MTTR vastaa sitä, kuinka kauan lakisääteinen palvelu on hakijoiden ulottumattomissa. Parannustekniikat siirtyvät molempiin suuntiin, koska molemmat ovat jonoutumisjärjestelmiä vastuuvelvollisuusrajoitteiden alla — ks. [virtausmittarit valtionhallinnon toimituksessa](../virtausmittarit-valtionhallinnon-toimituksessa/) taustalla olevasta jonoutumismatematiikasta. Huomaa myös DORA:n vuoden 2025 havainto, että tekoälyn käyttöönotto korreloi korkeamman läpimenon mutta *huonomman* vakauden kanssa — interventio, jolla on sekä teho että sivuvaikutuksia, mikä on täsmälleen se nettohyötyanalyysi, jonka tämän ryhmän [tekoälyn tuottavuus](../tekoälyn-tuottavuus-julkisella-sektorilla/) -aihe käy läpi.

## Sudenkuopat

- **Mittarin manipulointi**: käyttöönottomäärien paisuttaminen tyhjillä julkaisuilla tai kiireellisten korjausten jättäminen pois muutosvirheiden laskennasta. Määrittele tapahtumat yhtä tarkasti kuin lakisääteinen palvelustandardi määrittelee "onnistuneen transaktion".
- **Ministeriöiden väliset vertailulistat**: DORA-klusterit vertaavat toimituskäytäntöjä, eivät palveluja, joilla on erilaiset riskiprofiilit; "korkea" arvioitu veronmaksujärjestelmä voi olla oikea asenne, kun "eliitti" olisi varmennusvaatimusten huomioon ottaen holtitonta.
- **Yhden mittarin optimointi yksin**: nopeus ilman muutosvirheastetta on klassinen läpimeno–epävakaus-vaihtokauppa — raportoi kaikki neljä yhdessä, ei yhtenä pistemääränä.

## Lähteet

- DORA-tutkimus ja vuosittainen *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development -raportti. <https://dora.dev/dora-report-2025/>
