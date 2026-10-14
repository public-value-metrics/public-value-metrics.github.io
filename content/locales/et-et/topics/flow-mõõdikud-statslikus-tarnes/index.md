# Flow-mõõdikud statslikus tarnes

Flow-mõõdikud — Little'i Seadus, work-in-progress (WIP) piirangud, ja flow-efektiivsuS — kirjelDavaD, kui kiiresti töö liigub süsteemi kaudu piiratuGa kapatsiteediGa. SprintI-board on üks selline süsteem; toetuSE-nõuDeTe-jäRJekord, planeerimiS-taotluSe-register, või viisA-juhtumitöö-backLog on täpselt sama matemaatika erinevaS uniForMiS.

## Miks see on oluline

StatslikuD juhtumiKoormuSed on jäRJekorrA-süsteemid, ja jäRJekorrA-süsteemid järgivaD jäRJekorrA-seadusi, ükskõik, kas keegi mõõdab neid. StatutoorsED määramiSe-perioodid teevaD selle selgeSõnaliseKs: Town-and-Country-Planning-regiiMi all, enamik minor-planeerimiS-taotluSi kannaVad 8-nädaliST statutoorSt määramiSE-eesmärki, ja major-taotlused 13 nädalaT — tsükliAja-kohustus, mis on küpsetatuD otse seaduSeSSE. Home Office'i varjupaiga-juhtumitöö-backLog, mida on korDuvalt granskitud National Audit Office'i ja Home Affairs Select Committee'i poolt, on hästi-dokumenteeritud juhtum avalikuST süsteemiST, kus work-in-progress kasvaS kiireMini, kui throughput, sustained perioodiKs, vedaDes tsükli-aegu kauGele mistahes statutoorseST või teenuse-ooteGa. Flow-mõõdikud annaVaD inseneriDeLe ja juhtumitöö-juhtidELe jagatud, kvantitatiivse vokabulaari täpselt sellELe ebaõnnestumisMustriLe, selle asemel, et jätta sedA kvalitatiivseKs "backLog-probleemiKs."

## Arvutus

```
Little'i Seadus:  WIP = Throughput × TsükliAeg
             →    TsükliAeg = WIP / Throughput

Flow-efektiivsus = aktiivne (puudutuSe-) aeg / koGu tsükliAeg
                  (Vacanti)

WIP-piiri-efekt: fikseeritud throughput'i jaoks, WIP-i
poolitamine roughLy poolitab keskmise tsükliAja (Little'i
Seadus ümberkorraldatuD) — hooB, mis on saadaval, lisamaTa
personali-arvu.
```

Vaata [DORA-mõõdikud avaliku väärtuse jaoks](../dora-mõõdikud-avaliku-väärtuse-jaoks/) ekvivalentsE aritmeetika jaoks, rakendatuD software-deployment-pipelinedELe, ei juhtumitöö-le.

## Läbitöötatud näide

**Kohaliku omavalitsuse planeerimiS-departement**: 400 taotlust avatuD mistahes ajal (WIP), meeskond lahendab 50 taotlust/nädal (throughput).

```
TsükliAeg = WIP / Throughput = 400 / 50 = 8 nädalaT
```

See maanDub täpselt statutoorseLe 8-nädalaseLe eesmärgiLe minor-taotlusteLe — ühEta puhverTa, mis tähendab, mistahes variaablius sissetuleva-nõudluSeS või konsultandi-respons-ajaS lükkab määramised üle juriidiliSe deadline'i.

**Flow-efektiivsus**: nendest 8 nädalaST (56 kalendri-päeva), taotlus oMab tüüpiliselt ligikaudu 6 tundi tegelikku juhtumitöötaja-töötlemiS-aega.

```
Flow-efektiivsus = 6 tundi / (56 päeva × 8 tööTunDi/päev)
                  = 6 / 448 ≈ 1,3%
```

Vacanti benchmark software-meeskondadeLe paneb tüüpiliSe flow-efektiivsuSe 15-20%-le; statslik juhtumitöö, mitmeGa statutoorseGa konsultandi-üleAndmiSeGa ja avaliku konsultatsiooni-aknaGa, jookseb sageli suurusJärgu madalaMalt. 98,7% "ootE"-ajaST on, kuhu kaheksa nädalaT tegelikult läheb — ei juhtumitöötaja-kapatsiteediS.

**WIP-piiri-interventsioon**: avatuD taotluSte limiteerimine juhtumitöötaja kohta 15-le, selle asemel, kui piiramaTa 25-le (hoiDes throughput'i konstantSeNa), nihutab WIP'i 400-St roughLy 240-le üle 16-persoNi-meeskonda:

```
Uus tsükliAeg = 240 / 50 = 4,8 nädalaT
```

Peaaegu-poolitamine tsükliAjas poliitika-muutuseST, ei personali-kasvuST — sama hoob, mida DORA-stiiLiSed tarne-meeskonnad tõmbavaD, kui limiteerivaD sprindi WIP'i.

## Seos tarkvaraarendusega

Flow-mõõdikud on jagatud keel tarneMeeskonna Kanban-boardi ja juhtumitöö-põranDa vahel, millELe see software'i ehitab: juhtumitöötaja jäRJekord ja pull-request-jäRJekord on mõlemad juHiTud Little'i SeadusEGa, ja mõlemad pläRGuvad oma tsükliAja-eesmärki samal viisil — liiga palju WIP'i relatiivSelt throughput'iLe. See on otseSelt oluline [viivituSE kulu avalikes programmides](../viivituse-kulu-avalikes-programmides/) jaoks: tsükliAeg × CoD on naelad, mis istuVaD jäRJekorraS mistahes hetKel, ja see on oluline [teenuseStandardide ja transaktsiooni-mõõdikuTe](../teenusestandardid-ja-transaktsioonimõõdikud/) jaoks, kus avaldatuD läbimisAja-eesmärk on tsükliAja-kohustus, millE saaB diagnoosiDa ainult flow-mõõdikud, kui see on missed. JuhtumitöösüsteemI tarkvara peaks eksponeerima WIP ja tsükliAja esmaKlassi operatiivseteKs mõõdikuteKs, ei maTma neid juhtumiHalDuSe-süsteemi sees, millEst keegi ei küsi.

## Lõksud

- **WIP-piirangute lisamine tõeliseT flaskeKaela parandamaTa.** Kui piirang on väline statutoorNe konsultandi-respons-aeg, piiramine juhtumitöötaja-WIP'i lihtsalt liigutab jäRJekorrA üleSPoolE, ei lühenDa sedA.
- **Flow-efektiivsuSe käsitlemine mängiTavaKs eesmärgiKs.** 1,3% aktiivseST ajaST kiirustamine vaevalt liigutab tsükliAega; leVerage on peaaegu alati ooteOlekuTeS, mis tavaliselt tähendab protsessi-redisaini, ei juhtumitöötaja-kiirust.
- **Variaabliuse ignoreerimine.** Little'i Seadus kirjelDab keskmisi; juhtumiKoormuS kõrgEGa nõudluSe-variantsiGa vajab puhver-kapatsiteeti, ei ainult tiHedaMat WIP-piirangut, või statutoorseD deadline'id libiSevaD ikkagi volatiilseL tailiL, isegi kui keskmine paraneb.
- **WIP'i mõõtmine ebakonsistentselt.** Juhtum, "avatud" süsteemi-rekordiS, kuid tegelikult seisaTuD, ooDataDes kolmandat osapoolT, on ikka WIP; selle väljaJätmine smigerdab numbreid, kodaniku-vendaTuD realiteeti muutmaTa.

## Allikad

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
