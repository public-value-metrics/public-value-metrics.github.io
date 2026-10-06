# Statsliku sektori küberturvalisuse väärtus

StatslikU sektori küberturvalisuSE väärtus on distsipliin riski-vähenemiSe hinnaStamiSeKs: mis on väärT, muudaMaKs kodaniku-andmete-rikkumise vähem tõenäoliseKs, arvestades, et turvalisuSE-kulutuS ei toodA mingit nähtavAt väljundiT, kui see töötab, ja väga nähtavAt üheT, kui see ebaõnnestub? TeenuSeLe, mis hoiab toetusE-registreid, tervishoiuAndmeid, või maksuRegistreid, on see "nähtamaTu-kui-töötab"-omaDus täpselt, miks see vajab selgeSõnalist väärtuSe-argumenTi, mitte lihtsalt compliance-afKrüüsTust.

## Miks see on oluline

Ühendkuningriigi National Cyber Security Centre Cyber Assessment Framework (CAF) annab statslikuteLe organisatsioonideLe struktureeritud viisi muutmaKs turvalisuSt hinnataVaKs, tulemuS-põhiseKs distsipliiniKs, mitte checkListiKs: see defineerib neli kõrgE-tasemE eesmärkI (turvalisuSE-riski-haldamine, kaitse cyberRünnakuTe vastu, cyberTurvalisuSE-sündmuste detekteerimine, ja incidentiDe mõju minimeerimine), lõiGatuNa panustavaTeKs tulemuSteKs, mille vastu süsteemI-omanikKu saaB hinnata, samaS vaimuS, nagu [digitaalseS teenusestandardis](../digitaalne-teenusestandard/) punkt 9 ("looB turvalinE teenus, mis kaitseb kasutajaTe privaatsust"). Mida CAF-hindamine kaitseb vastu, oMab dokumenteeritud hinnA-etiketti: IBM Cost of a Data Breach Report jälgib keskmiSt rikkumisE-kulu sektori järGi, ja on konsistentSelt leiDnud statslikU sektori madalaMa otsA vahemikuST, võrreldaDes finantsiGa või tervishoiuGa — hiljutiseD väljaandeD panevaD statslikU sektori keskmiSe ligikaudu $2,6-2,9 miljoniLe rikkumise kohta — kuid "madalaM kui finants" ei ole "madal," ja statslikud rikkumised kannaVaD kulusid, mida raporti figuurid ei fikseeri täielikult: kodanikE usalduSe kaotuS digiTaalseteST kanaliteST, mis vähendab [digiTaalsE-kasutuselevõtu](../kanalivahetuse-säästud/), millEST kanalivahetuSE-äriJuhtumid sõltuvaD, ja poliitiline ja juriidiline kulu eksponeeriMiSeST andmeid, mida riik sundiS kodanikke üleAndMa esmalt.

## Arvutus

TurvalisuSE-investeeringut väärtustatakse viisil, kuidas mistahes riski-vähendamiSE-kulutuSt väärtustatakse: eeldataVA-kao-vähenemiSeNa, kasutaDes klassikalist riskiHaldusE-identiteedi.

```
AnnualiseerituD KaO-Ootus (ALE) = ÜksiKU KaO-OotuS (SLE) ×
                                 AnnualiseerituD
                                 ForekoMisE-MäärA (ARO)

TurvalisuSE-kontrolli väärtus =
  ALE_enne_kontrolli − ALE_pärast_kontrolli − kontrolli
  aastane kulu

Kontroll on väärT rahastaDa, kui:
  (ALE_enne − ALE_pärast) > kontrolli aastane kulu

CAF-hindamine ei väljaStA otse tõenäosust, kuid teenuSe CAF-
tulemuSe-profiil (millised panustavaD tulemused on
"saavutatud," "osaLiselt saavutatud," või "ei saavutatuD")
on mõistlik proksi-sisend ARO hinDamiSeKs — süsteem ühEta
haldaTud privilegeeritud ligiPääSuTa või testiTa incidentI-
respons-plaanITa oMab materiaalSelt kõrgeMA realistlikU ARO
kui üks mõlemaGa olemaS.
```

## Läbitöötatud näide

**MaaKonna juhtumiHalDuSE-süsteem, mis hoiab sotsiaalhoolDusE-registreid 40 000 elanikuLe**:

```
ÜksiKU KaO-OotuS (rikkumiSe-kulu), kasutaDes statslikU-
sektori-keskmist viimaSeST IBM Cost of a Data Breach Report'iST
≈ £2,1m (konverteeritud, suurusJärgu-figuur — genereeri
alati uuesti praeguseST raporti-väljaanDest, ei taaskasuta
fikseeritud numbrit)

Praegune ARO (haldamaTa privilegeeritud ligiPääs, testiMaTa
incidentI-respons, siseMiSe CAF-iseHindamiSE järGi, mis näitab
mitut "ei saavutatuD"-tulemust) ≈ hinnanguliselt 8% aastaS
  ALE_enne = £2,1m × 0,08 = £168 000/aastas

PakutuD kontroll: privilegeeritud-ligiPääsu-haldus + testiTud
incidentI-respons-plaan, viiv relevantsEd CAF-tulemused
"saavutatuD"-oleKusSe, hinnanguliselt kärpiDes ARO 3%-le/
aastas
  ALE_pärast = £2,1m × 0,03 = £63 000/aastas

Kontrolli aastane kulu (riistaD + protsess + testimine) =
£45 000

Kontrolli väärtus = (168 000 − 63 000) − 45 000 =
£60 000/aastas netoPositiivne — rahasta sedA. Aritmeetika
näitab ka, kontroll oleKs ikka väärT rahastaDa ligi kolm
korda kõrgeMA kuluGa, mis on sellE tüüpi tundlikKuse-kontroll,
mis peaks kaasnEma mistahes ALE-figuuriGa, mis on ehitatud
hinnatuD tõenäosuste peal.
```

## Seos tarkvaraarendusega

Insenerid oMavaD enamust hooBaDeST ALE-võrdSusEs: ligiPääSu-kontrolli-disain, sõltuvuSte- ja patchi-hüGieen, logimise- ja detektsiooni-kaTvuS, ja incidentI-respons-riistaD liigutaVaD kõik ARO-termini otse, mis on, miks CAF-hindamine loeB tehniliseKs arhitektuuri-läbiVaateKs nii palju, kui poliitiliseKs audiTiKs. See on [tehniline võlg kui avaliku väärtuse erosioon](../tehniline-võlg-kui-avaliku-väärtuse-erosioon/) selle kõige akuuTseMaS vormIs — patchiMaTa, monitooriMaTa, halvasti-ligiPääsu-kontrollitud süsteemid on võlg, millE intressi-makse on tail-risk, ei stabiilsE lohistus — ja see peaks olema forEenitud vastu [koGu-omandiKulu valitsuse IT-s](../koguomandikulu-statslikus-it-s/), nii et turvalisuSE-kulutuS ei ole käsitletud eraldi süsteemi tõeliseST jooksvaST kuluST. See on ka otseNe sisend [value-for-money](../value-for-money/)-hindamisTele Green Book all: riski-kohandatuD kulu on osa mistahes variantideHindamiSE "kulu"-pooleST, ei eelMõtE, mis on boltitud lõppu.

## Lõksud

- **CAF-iseHindamiSE käsitlemine turvalisuSeNa ise.** LõpetatuD hindamine kirjelDab turvalisuSE-positsiooni; see ei looB üht — väärtus on saavutatud tulemustEs, ei dokumendis.
- **GlobAalSe-keskmise-rikkumisE-kulude kasutamine lokaalseKs hinnanguKs kohandamaTa.** IBM figuurid on keskmised üle suurTE, varieeruVate samplite; väikseS kohalikuS omavalitsuSES realistlik üksiK-kao-ootuS on harva sama kui rahVusLikuL valitsuSE-osakonnaL.
- **Tail-risk-psühholoogiA ignoreerimine investeerimis-otsusteS.** Madal aastane tõenäosus muudab turvalisuSE-kulutuSe lihtsaKs lükataDA edasi lõputult, õigE selleni aastaNi, mil see ei ole — ALE-arvutuSe tundlikKuse-testimine vastu AROde vahemikuLe, nagu läbitöötatud näiteS, vastuAstub sellE.
- **Ainult IBM-stiiLi-rikkumiSE-kulu loenDamine, ei usalduSE-kulu.** Rikkumine, mis vähendab kodanikE valmidust kasutada digiTaalsEid kanaleid, eroDeerib [kanalivahetuSE-säästuDe](../kanalivahetuse-säästud/) juhtumit aastateKs edasI, kulu, mis harva on inkludeeritud rikkumise-kulu-hinnanguteS.

## Allikad

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
