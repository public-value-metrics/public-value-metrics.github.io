# Human Development Index (HDI)

HDI on ÜN pealKirja-alternatiiv riikide rangjastamiSeKs sissetuleku pealT üksi: see kombineerib elueA-oOtust, haridust, ja sissetulekut üheKs numbriKs 0 ja 1 vahel, premissiL — argumenteeritud ekonomist Amartya Sen'i poolt ja väljaTöötatud ÜN-ile Mahbub ul Haq'i poolt — et areng puudutab laiendamiSt, mida inimesed saaVad teha ja olla, ei lihtsalt, mida nad teenivaD. Seda on avaldatuD aastaselt UN Development Programme'i Human Development Report'is alates 1990.

## Miks see on oluline

Enne HDI'd mõõdetuD "areng" peaaegu täielikult GNP-GA elanikU kohta, mis ei ütle midagi selle kohta, kas kasv jõuab tavaliste inimeste tervisENi või hariduSeNi. Sen'i kapatsiteedI-lähenemine omaRAamiS arengu reaalseTE vabaDuSte laiendamiSeNa, ja ul Haq muutiS selle avaldatavaKs indeksiKs, millEGa UNDP saiS rangjastada igA riiki, sundiDes valitsusi, mis saiD rikKaKs sissetuleku pealT üksi, kuid ignoreerisiD tervist või haridust, konfronteeriMa halvemA rangi, kui nendE SKT soovitaB (persiA-lahe-naftariigid ja mõned ekstraktiivseD majandused on standard-näited). HDI kolme-suunaliNe struktuur on ka otseNe metodoloogiline eelKäiJa [MultidimensiOnal Poverty Index'ile](../multidimensional-poverty-index/): mõlemad keelDuvad lubaMa üheL dimensiooniL tagasi-ostA puudujääki teiSeS, kasutaDes geomeetrilisT, ei aritmeetilisT, keskmist. UNDP avaldab täieliKud tehniliseD noteD ja alusOleva andmestiku igAle väljaanDele (<https://hdr.undp.org/data-center/human-development-index>), mis on canoniline allikas igAüheLe, mis ehitab indeksI peal, ei genereeri sedA uuesti.

## Arvutus

```
EluEA-OotusE Indeks (LEI)      = (LE − 20) / (85 − 20)

KeskmisE-AastatE-KoolihariduSe Indeks = keskmine aastaTE
                                       arv koolihariduSeS /
                                       15
OodatuD-AastatE-KoolihariduSe Indeks  = oodatud aastatE arv
                                       koolihariduSeS / 18
HariduSE Indeks (EI)           = (KeskmiseAastateIndeks +
                                  OodatudAastateIndeks) / 2

SissetulekU Indeks (II)         = (ln(GNI elanikU kohta) −
                                  ln(100)) / (ln(75000) −
                                  ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geomeetriline keskmine
                                   kolmest alaIndeksist]
```

GeomeetriLine keskmine on tahtLik: sest see multipliTseerib, ei keskmistA, ei saaB väga kõrgE skoor ühEl dimensiooniL täielikult kompenseerida väga madalaT skoori teiSel — disain, mille UNDP adopteeriS 2010, spetsiifiLiselt karistaMaKs ebabalanssi, asendaDes eelmisE aritmeetilisE-keskmise-formula.

## Läbitöötatud näide

**KesksissetulekuGa riik**: elueA-ootuS 72 aastat, keskmine aastaTE arv koolihariduSeS 8, oodatud aastatE arv koolihariduSeS 13, GNI elanikU kohta $12 000.

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

HDI 0,713 langeb UNDP "kõrgE human-arengu" bänDiL (0,700-0,799); "väga kõrgE" algab 0,800. Märka, kui tundliK tulemus on nõrgimA alaIndeksi vastu: kui keskmine aastaTE arv koolihariduSeS oli 4, selle asemel, et olla 8 (MYSI = 0,267, EI = 0,494), langeb HDI (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639-le — kukutaDes täieliku bänDi — isegi kui mitte ükS muu asi ei muutuS.

## Seos tarkvaraarendusega

- GeomeetrilinE-keskmise-mustEr on otse taaskasutataV mistahes komposiiTseLe teenuse- või toote-skoorile, mida ei taHA, et üks tugeV dimensioon kataks kriitiliSe nõrgA üheT — nt kombineeriDes ligiPääsetAvuSe-, jõuDluSe-, ja usaldusVäärsuSe-skoorid statslikuLe digiTeenuSeLe multiplikatiivSelt, ei kaalutud-keskmiSeGa, nii et kiiRe, kuid ligipääsemaTu, teenus ei saa skoorida "head."
- HDI sissetuleku-log-transformatSioon (kahanev marginaalnE väärtus ekstrA naelaLe) on sama loogika, mis on [jaotuslikU-kaalumise](../jaotuslik-kaalumine/) taga hindamiSeS: ekstrA $1000 tähendab palju rohkem vaeSeLe leibkonnale, kui rikKaLe, ja mõlema käsitlemine lineaarSelt valePrisSeB mõju.
- MistahesDashboard, mis raporteerib üksikuT segatuD "digitaalne-kaasatuS" või "kodaniku-tulemuste" skoori, peaks dokumenteerima oma agregatSiooni-formula nii selgeSõnaliselt, kui UNDP tehniliseD noteD teevaD — vaata [avaliku sektori KPId](../avaliku-sektori-kpid/) ja [avaliku väärtuse scorecard](../avaliku-väärtuse-scorecard/).

## Lõksud

- **KeskmistAmine geomeetrilisE-keskmise asemel.** Aritmeetiline keskmine lasEb kõrgEl sissetulekul täielikult maskeeriDA halbA tervise või haridusE; 2010. aasta metodoloogia-muutuSe kogu point oli peatada see substitUtsioon.
- **HDI võrdlemine aasta-aastalT, nagu oleKs see inflatsiooni-kohandatuD SKT.** UNDP perioDiLiselt reBaseeRib indeksit (uusEd miinimum-/maksimum-piirid, revideeritud koolihariduSe-lagEd), nii et rangi-muutuS saaB peegeldaDA metodoloogia-uuendust, ei reaalSEt nihkET; kontrolli alati, millEst HDR-väljaanDest figuUr tuleb.
- **HDI käsitlemine vaesuSE-mõõdikuNa.** See on rahVuslik keskmine ja ütleb mitte midagi jaotuSeST riigi sees; selle jaoks, kasuta [MultidimensiOnal Poverty Index'it](../multidimensional-poverty-index/) või UNDP eraldi Inequality-adjusted HDI.

## Allikad

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
