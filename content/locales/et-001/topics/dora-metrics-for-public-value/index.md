# DORA mõõdikud avaliku väärtuse jaoks

DORA (DevOps Research and Assessment) mõõdikud — deployment-frekvents, lead-time muudatusteLe, change-failure-rate, ja aeg teenuse-taastamiSeKs, pluss usaldusVäärsus viiendaKs — on tarkvara-tööStusE kõige rohkem valideeritud tarne-jõuDluSe-benchmarkid. Tõlgituna avaliku-sektori-vastutusE-termineiSSE, on igaüKs otseNe proksi selleLe, kui kiiresti, ja kui ohutult, avalik väärtus jõuaB kodanikuNi.

## Miks see on oluline

DORA dekaadiLinE uuring, avaldatuD aastaselt *Accelerate State of DevOps Report*'iNa (Forsgren'i, Humble'i, ja Kim'i metodoloogia, nüüD veDatuD Google Cloud'i poolt), klastErdab meeskonnaD eliiTiKs, kõrgeKs, keskmiseKs, ja madalaKs tootaJaiKs. EliiT-meeskonnad deployivaD nõudmiSeL, võtavad alla päeva commitist produktsioonini, ebaõnnestuvaD roughLy 5%-l muudatusteST, ja taastuvaD alla tunniGa; madalaD tootaJaD deployivaD kuuSSiniSeLt või harvemiNi, võtavaD kuiD, ebaõnnestuvaD ligikaudu 40%-l muudatusteST, ja taastuvaD nädalaTeGa. Valitsuses ei ole need inseneri-vaniteedi-mõõdikud: Government Digital Service'i Service Standard nõuab, et meeskonnad "itereerivaD ja paranDavaD sagedaSti" ja saaKsiD vastata kiiresti kasutaja-vajaDusELe, ja osakonnad, mis ei saaB deployida ohutult ja sagedaSti, on strukturaalSelt suuteTuD sedA standardIt täitmaKs, ükskõik, mida nende kasutaja-uuring ütleb. Cabinet Office'i oma digitaalse-efektiivsusE-töö leiuS, kodanikU lükkamine ebaõnnestunuD või aeglaseST digiTaalseST transaktsiooniST telefoni- või paberi-kanaliSSE on kuluKAs — GDS'i 2012 Digital Efficiency Report hinnaS mõned digiTaalseD transaktsioonid maksVaD vaid 20p vastu telefoni- või näost-näGu-kontaktiDeLe maksvaTeLe kuni £8,62 — nii et muudatusE-ebaõnnestumine avalikuLe-vendaTuD teenuseS ei maksA ainult inseneri-aega, see lükkab reaalSeid naelu kontaktiKesKusE-eelArveLe (vaata [kanalivahetuSE-säästud](../channel-shift-savings/)).

## Arvutus

```
Deployment-frekvents   = produktsiooni-deploy'd / aeg
Lead-time muudatusteLe = t(deploy) − t(commit), mediaan
Change-failure-rate    = ebaõnnestunuD muudatused / koGu
                        muudatused × 100
Aeg-taastamiSeKs (MTTR) = t(taastatud) − t(ebaõnnestumine),
                        mediaan
UsaldusVäärsus          = SLO-saavutamine (saadaVuS, latentSuS,
                        korrektSuS)
```

AvaLiku-väärtuSe tõlgendused:

```
Lead-time       → nädalad pipeline'is × CoD, vaata viivituse-
                  kulu-avalikes-programmides
EbaõnnestumisE-määr → kodanikuLe-vendaTuD-incidentI-määr: CFR
                  × kulu redirecteeritud kontaktiKesKusE-
                  kõne kohta (või ebaõnnestunuD statutoorsE-
                  transaktsiooni kohta)
TaastuMisE-aeg  → teenuse-katkestuSe-kahju: MTTR ×
                  (nõuDed/taotlused blokeeritud tunni kohta)
                  × allaVoolu-kulu või heaolu-kadu ühiku kohta
UsaldusVäärsus  → kasu-rabat: teenus 99%-liseGa saaDaVuseGa
                  tarnib ≈ 0,99 oma modelleeritud kasuST —
                  tarne-analoog kasutuselevõtu- või
                  compliance-puudujäägiLe
```

## Läbitöötatud näide

Kohaliku omavalitsuse toetuSe-nõuDeTe-portaali-meeskond, enne ja pärast tarne-inseneri-investeeringut:

```
                    Enne        Pärast
Deploys             kuuSiniseLt nädalaselT
Lead-time           8 nädalaT   5 päeVa
CFR                 30%         10%
MTTR                3 päeVa     4 tunDi
```

Meeskond tarnib ligikaudu 25 paranDuST/aastas, keskmine väärtus £8000/nädal ([viivituSE kulu](../cost-of-delay-in-public-programmes/)). Lead-time'i lühenDamine roughLy 7,3 nädalA võrra tõmbab igA paranDusE kasu-vooGu edasI: 25 × 7,3 × 8000 ≈ **£1 460 000/aastas** väärtust tarnitud varaseMalt. EbaõnnestumisE-määraL: 25 × (0,30 − 0,10) = 5 vähem ebaõnnestunuD muudatust/aastas; igA ebaõnnestunuD muudatus avalikul portaalil redirecteerib tüüpiliselt hinnanguliselt 2000 kodanikku telefoni-kanaliSSE £8,62 vastu 20p-le, netoKulu roughLy £8,42 × 2000 ≈ £16 840 incidentI kohta, nii et 5 incidentI väldimine säästab ≈ **£84 200/aastas**. Tarne-inseneri-investeering on väärtustatuD samAs valuutaS, kui mistahes muu avaliku-väärtuse-juhtum.

## Läbitöötatud näide jätkub: usaldusVäärsus

Kui portaal jookseb 97%-liSeGa saaDaVuseGa, selle asemel, et saavutada eesmärgiKs seatud 99,5%, ja igA protsendipunkt seisakU-aega modelleeritaKse 2%-liseKs kaotatuD nõudeTeST hüljaMisE tõttu, tarnib teenus roughLy 0,975 oma modelleeritud £2M/aasta-kasuST — £50 000/aasta-kasu-rabat, mida puhas-uptime-dashboard mitte kunagi ei eksponeeri.

## Seos tarkvaraarendusega

DORA-mõõdikud on avaliku teenuse operatiivseD mõõdikud erineVateS rõivasteS: lead-time kaardistub [teenuseStandardideLe ja transaktsiooni-mõõdikuteLe](../service-standards-and-transaction-metrics/); change-failure-rate kaardistub uuestiTöö- ja kaebuSe-määrAdeLe; MTTR kaardistub, kui kauaks statutoorNe teenus on taotlejaTeLe kättesaamatu. ParanDuS-tehnikaD liiguvaD mõlemaS suunaS, sest mõlemad on jäRJekorrA-süsteemid vastutuSE-piirangute all — vaata [flow-mõõdikud statslikus tarnes](../flow-metrics-in-government-delivery/) alusOleva jäRJekorrA-aritmeetika jaoks. Märka ka DORA 2025. aasta fundIt, et AI-adoptsioon korreleerub kõrgeMaGa throughput'iGa, kuid *halvemaGa* stabiilsuSeGa — interventsioon nii efikaasiGa, kui kõrvalEfektiDeGa, mis on täpselt netokasu-analüüs, millE läbiB sellE peatükI [AI-produktiivsuS](../ai-productivity-in-the-public-sector/)-teema.

## Lõksud

- **Mõõdiku-manipulatsioon.** Deploy-loenDuste inflatSioon no-op-väljaanDeTeGa, või hotFixide väljaJätmine muudatuSe-ebaõnnestumise-loenDust. Defineeri sündmused nii täpselt, kui statutoorNe teenuseStandard defineerib "edukA transaktsiooni."
- **Tvär-osakondliKud liiGaTabelid.** DORA-klastrid võrdlevaD tarne-praktikaid, ei teenuseid erinevateGa riski-profiiliDeGa; maksu-maksE-süsteem, hinnatuD "kõrgeKs," võib olla õige positsioon, kus "eliiT" oleKs vastutusEtu assuranc-nõuDeiD arvestades.
- **Üksiku mõõdiku optimeerimine üksi.** Kiirus ühEta change-failure-rate'iTa on klassikaline throughput-stabiilsuse-trade-off — raporteeri kõik neli koos, ei üksiku skooriNa.

## Allikad

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
