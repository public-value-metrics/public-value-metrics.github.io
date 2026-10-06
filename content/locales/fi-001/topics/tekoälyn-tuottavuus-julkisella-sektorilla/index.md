# Tekoälyn tuottavuus julkisella sektorilla

Mittarit sille, mitä tekoälyn koodausavustus todella tekee insinöörityön tuotokselle — ehdotusten hyväksymisasteet, kontrolloitujen tutkimusten nopeutukset, PR-läpimeno ja koodin säilyvyys — kantavat aidosti ristiriitaista näyttöpohjaa jo ennen julkisen sektorin rajoitteiden lisäämistä: datan luokittelu rajoittaa, mihin osiin perinnejärjestelmäkantaa tekoälytyökalu saa ylipäätään koskea, hankintasyklit tarkoittavat, että arvioitava työkalu on usein mallisukupolvea nykyistä kyvykkyyttä jäljessä, ja turvallisuusselvitysvaatimukset määräävät, kuka saa käyttää sitä missäkin.

## Miksi tällä on merkitystä

Kaksi eniten siteerattua kontrolloitua tutkimusta osoittavat vastakkaisiin suuntiin. Pengin ym. vuoden 2023 GitHub Copilot RCT havaitsi kehittäjien suorittaneen tyhjästä rakennettavan HTTP-palvelintehtävän 55,8 % nopeammin Copilotin kanssa (1 h 11 min vs. 2 h 41 min, n=95). METR:n vuoden 2025 RCT havaitsi kokeneiden avoimen lähdekoodin kehittäjien, jotka työskentelivät *omissa kypsissä repositorioissaan*, olleen 19 % hitaampia vuoden 2025 alun tekoälytyökaluilla uskoessaan olevansa noin 20 % nopeampia. Molemmat tutkimukset ovat päteviä; ristiriita on havainto — tyhjästä aloitettavan tehtävän tehokkuus ei siirry kypsän koodikannan vaikuttavuuteen, ja suuri osa valtionhallinnon insinöörityöstä on kypsän koodikannan työtä kannoilla, jotka ovat vanhempia ja omalaatuisempia kuin keskimääräinen kaupallinen repositorio. Central Digital and Data Officen Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) esittää periaatteet vastuulliselle käyttöönotolle juuri siksi, ettei tätä näyttöpohjaa voi yksinkertaisesti tuoda toimittajien demonstraatioista; ministeriöiden odotetaan arvioivan työkalut omia datankäsittely- ja turvallisuusvaatimuksiaan vasten ennen käyttöönottoa.

## Matematiikka

```
Hyväksymisaste   = hyväksytyt ehdotukset / näytetyt ehdotukset
Säilyvyysaste    = yhdistämiseen selviävä tekoälykoodi / hyväksytty tekoälykoodi
Nopeutus         = (t_kontrolli − t_AI) / t_kontrolli  (VAIN kontrolloidusta vertailusta)
Läpimenon delta  = Δ yhdistetyt PR:t/kehittäjä/viikko

Julkisen sektorin kattavuuskerroin:
  kelpoinen koodikantaosuus = LOC järjestelmissä, joissa luokittelu
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) sallii työkalun lainkaan

Arvomalli = kehittäjät × kelpoinen kattavuus × säästetty aika × kuormitettu hinta × käyttöaste
           — jokainen termi tarvitsee paikallisen mittauksen, ja kattavuuskertoimella
           ei ole yksityisen sektorin vastinetta
```

## Työstetty esimerkki

Ministeriö pilotoi tekoälykoodausavustinta 300 kehittäjän yli, mutta vain OFFICIAL-luokitellut järjestelmät ovat kelpoisia työkalun käyttöön — 70 % kannasta henkilöstöjaon mukaan, jäljellä olevan 30 %:n (korkeamman luokituksen järjestelmät) jäädessä kokonaan pois.

```
Kelpoiset kehittäjät = 300 × 0,70 = 210

Pilotin tulos: itse raportoitu säästetty aika 40 min/päivä;
               mitattu tehtävätason säästö 12 min/päivä (0,2 h)
               — METR:n käsitys-mittaus-kuilu, toistettuna luonnossa

Arvota MITATTU luku:
  210 × 0,2 h × 220 päivää × £55/h kuormitettu × 0,6 käyttöaste
  = 210 × 44 tuntia × £55 × 0,6
  = 9 240 tuntia × £55 × 0,6 ≈ £304 920/vuosi kapasiteettia

Kustannus: 210 lisensoitua paikkaa × £22/kk × 12 ≈ £55 440/vuosi

Nettokapasiteettisuhde ≈ 304 920 / 55 440 ≈ 5,5:1
```

Rahoitettavissa noin kolmasosalla itse raportoidusta hyödystä, ja vasta luokitusrajan soveltamisen jälkeen — kaikkien 300 kehittäjän lisensointi itse raportoidun luvun perusteella olisi ylikuvannut sekä kelpoisen väestön että todellisen säästön.

## Yhteys ohjelmistotekniikkaan

Kurit, jotka siirtyvät suoraan: aja **pragmaattisia kokeita** ministeriön omalla koodikannalla ja oikeilla tiketeillä, ei toimittajan demonstraatiotehtävillä, koska METR-tulos on nimenomaan kypsän koodikannan havainto; käsittele **hyväksymisastetta korvikkeena, ei tuloksena** — korkea hyväksyminen matalalla säilyvyydellä on ohjelmistojen vastine ylidiagnostiikalle; yhdistä jokainen läpimenoväite **vakaustarkistukseen**, koska DORA:n vuoden 2025 raportti havaitsi tekoälyn käyttöönoton nostavan läpimenoa mutta heikentävän muutosvakautta, mikä on täsmälleen se nettohyötyanalyysi, jonka ajamiseksi [DORA-mittarit julkiselle arvolle](../dora-mittarit-julkiselle-arvolle/) on rakennettu; ja ole rehellinen siitä, että tekoälytyökalut voivat levittää, ei kaventaa, kuilua [tekniseltä velalta](../tekninen-velka-julkisen-arvon-rapautumisena/) raskailla perinnejärjestelmäkannoilla, koska harjoitusdata aliedustaa valtionhallinnossa yleistä COBOL-, 4GL- ja räätälöityä suurkonekoodia, joten ehdotusten laatu juuri niissä järjestelmissä, jotka tarvitsevat apua eniten, on usein heikoin. Tämä asettuu laajemman [tekoälyn arvo valtionhallinnossa](../tekoälyn-arvo-valtionhallinnossa/) -kysymyksen rinnalle ja sitä tulisi hallita samoilla [julkisen sektorin kyberturvallisuuden arvo](../julkisen-sektorin-kyberturvallisuuden-arvo/) -rajoitteilla, jotka rajoittavat, missä mikä tahansa kolmannen osapuolen työkalu saa nähdä koodia tai dataa lainkaan.

## Sudenkuopat

- **Toimittajatutkimusten siirtäminen sellaisenaan**: tyhjästä aloitettavien RCT-nopeutusten soveltaminen perinneintegraatiotyöhön on täsmälleen se virhe, jonka METR-tutkimus paljasti.
- **Itseraportointi mittauksena**: 20 prosenttiyksikön käsitys-mitattu-kuilu on tämän kirjallisuuden suurin tunnettu vinouma, ja se paisuttaa liiketoimintaperusteluja, jotka nojaavat pelkästään kehittäjäkyselyihin.
- **Luokitusrajan sivuuttaminen**: lisensointi- ja arvomallit, jotka on rakennettu kokonaishenkilömäärän eikä kelpoisen, luokitusselvitetyn osajoukon varaan, ylikuvaavat järjestelmällisesti sekä kustannusvaikuttavuutta että saavutettavissa olevaa kattavuutta.
- **Hankintasyklin viive**: puitejärjestelypohjainen työkalujen hankinta voi tarkoittaa, että pilotti arvioi mallisukupolvea, joka on 12–18 kuukautta jäljessä siitä, mikä on julkisesti saatavilla täyden käyttöönoton hetkellä, tehden alkuperäisen liiketoimintaperustelun nopeutusoletuksesta vanhentuneen ennen käyttöönottoa.

## Lähteet

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development -raportti. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
