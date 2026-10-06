# Inhimillisen kehityksen indeksi (HDI)

HDI on YK:n keskeinen vaihtoehto maiden järjestämiselle pelkän tulon mukaan: se yhdistää elinajanodotteen, koulutuksen ja tulon yhdeksi luvuksi nollan ja yhden välillä, lähtökohdalla — jota taloustieteilijä Amartya Sen perusteli ja Mahbub ul Haq kehitti YK:lle — että kehitys koskee sitä, mitä ihmiset voivat tehdä ja olla, ei vain sitä, mitä he ansaitsevat. Sitä on julkaistu vuosittain YK:n kehitysohjelman UNDP:n Human Development Reportissa vuodesta 1990.

## Miksi tällä on merkitystä

Ennen HDI:tä "kehitystä" mitattiin lähes kokonaan BKTL:lla asukasta kohti, mikä ei kerro mitään siitä, saavuttaako kasvu tavallisten ihmisten terveyden tai koulutuksen. Senin kyvykkyyslähestymistapa muotoili kehityksen uudelleen todellisten vapauksien laajentumisena, ja ul Haq muutti sen julkaistavaksi indeksiksi, jonka mukaan UNDP voi järjestää jokaisen maan, pakottaen hallitukset, jotka rikastuivat pelkällä tulolla mutta laiminlöivät terveyden tai koulunkäynnin, kohtaamaan huonomman sijoituksen kuin niiden BKT antoi ymmärtää (Persianlahden öljyvaltiot ja jotkin raaka-aineisiin perustuvat taloudet ovat vakioesimerkkejä). HDI:n kolmiosainen rakenne on myös suora menetelmällinen esi-isä [moniulotteisen köyhyyden indeksille](../moniulotteisen-köyhyyden-indeksi/): molemmat kieltäytyvät antamasta yhden ulottuvuuden ostaa takaisin toisen vajetta, käyttäen geometrista eikä aritmeettista keskiarvoa. UNDP julkaisee täydelliset tekniset muistiinpanot ja taustalla olevan datan jokaiselle painokselle (<https://hdr.undp.org/data-center/human-development-index>), mikä on kanoninen lähde jokaiselle, joka rakentaa indeksin varaan sen uudelleenjohtamisen sijaan.

## Matematiikka

```
Elinajanodoteindeksi (LEI)         = (LE − 20) / (85 − 20)

Koulunkäyntivuosien keskiarvoindeksi = koulunkäyntivuosien keskiarvo / 15
Odotettujen koulunkäyntivuosien ind. = odotetut koulunkäyntivuodet / 18
Koulutusindeksi (EI)               = (Keskiarvoindeksi + Odotettujen vuosien indeksi) / 2

Tuloindeksi (II)                   = (ln(BKTL asukasta kohti) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [kolmen osaindeksin geometrinen keskiarvo]
```

Geometrinen keskiarvo on tarkoituksellinen: koska se kertoo eikä keskiarvoista, hyvin korkea pistemäärä yhdessä ulottuvuudessa ei voi täysin kompensoida hyvin matalaa toisessa — suunnitelma, jonka UNDP omaksui vuonna 2010 nimenomaan rankaisemaan epätasapainoa, korvaten aiemman aritmeettisen keskiarvon kaavan.

## Työstetty esimerkki

**Keskitulotason maa**: elinajanodote 72 vuotta, koulunkäyntivuosien keskiarvo 8, odotetut koulunkäyntivuodet 13, BKTL asukasta kohti $12 000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI 0,713 kuuluu UNDP:n "korkean inhimillisen kehityksen" luokkaan (0,700–0,799); "erittäin korkea" alkaa 0,800:sta. Huomaa, kuinka herkkä tulos on heikoimmalle osaindeksille: jos koulunkäyntivuosien keskiarvo olisi ollut 4 eikä 8 (MYSI = 0,267, EI = 0,494), HDI putoaa arvoon (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — koko luokan alas — vaikka mikään muu ei muuttunut.

## Yhteys ohjelmistotekniikkaan

- Geometrisen keskiarvon kaava on suoraan uudelleenkäytettävissä mille tahansa yhdistelmäpalvelun tai tuotteen pistemäärälle, jossa et halua yhden vahvan ulottuvuuden peittävän kriittistä heikkoa — esim. julkisen digitaalisen palvelun saavutettavuus-, suorituskyky- ja luotettavuuspisteiden yhdistäminen kertolaskulla painotetun keskiarvon sijaan, jotta nopea mutta saavuttamaton palvelu ei voi saada "hyvää" pistemäärää.
- HDI:n tulon logaritmimuunnos (ylimääräisen punnan laskeva rajahyöty) on sama logiikka kuin arvioinnin [jakaumapainotuksen](../jakaumapainotus/) takana: ylimääräinen $1 000 merkitsee paljon enemmän köyhälle kuin rikkaalle kotitaloudelle, ja molempien käsittely lineaarisesti hinnoittelee vaikutuksen väärin.
- Jokaisen kojelaudan, joka raportoi yksittäisen sekoitetun "digitaalisen osallisuuden" tai "kansalaistulosten" pistemäärän, tulisi dokumentoida aggregointikaavansa yhtä nimenomaisesti kuin UNDP:n tekniset muistiinpanot — ks. [julkisen sektorin KPI:t](../julkisen-sektorin-suorituskykymittarit/) ja [julkisen arvon tuloskortti](../julkisen-arvon-tuloskortti/).

## Sudenkuopat

- **Keskiarvoistaminen geometrisen keskiarvon sijaan** — aritmeettinen keskiarvo antaa korkean tulon peittää heikon terveyden tai koulutuksen kokonaan; vuoden 2010 menetelmämuutoksen koko tarkoitus oli lopettaa tuo korvaaminen.
- **HDI:n vertailu vuodesta toiseen ikään kuin se olisi inflaatiokorjattu BKT** — UNDP perustaa indeksin uudelleen ajoittain (uudet minimi-/maksimirajat, tarkistetut koulunkäyntikatot), joten sijoituksen muutos voi heijastaa menetelmäpäivitystä eikä todellista muutosta; tarkista aina, mistä HDR-painoksesta luku on peräisin.
- **HDI:n käsitteleminen köyhyysmittarina** — se on kansallinen keskiarvo eikä kerro mitään jakaumasta maan sisällä; käytä sitä varten [moniulotteisen köyhyyden indeksiä](../moniulotteisen-köyhyyden-indeksi/) tai UNDP:n erillistä epätasa-arvokorjattua HDI:tä.

## Lähteet

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (indeksin esittely).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
