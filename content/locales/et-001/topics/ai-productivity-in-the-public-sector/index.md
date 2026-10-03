# AI-produktiivsus avalikus sektoris

MõõdikuD selleLe, mida AI-kodimiSE-assistentS tegelikult teeb inseneri-väljundiLe — soovituSe-vastuvõtu-määraD, kontrollitud-uuringu-kiirenDuSed, PR-throughput, ja koodi-retentsioon — kannaVaD genuinely vastuolulisT evidensiBaasi juba enne avaliku-sektori-piirangute lisamist: andme-klassifikatsioon piirab, millisT osA legacy-ejendiST AI-riist võib üldSe puutuDa, hankimiS-tsüklid tähendavaD, hinnatuD riist on sageli mudeli-generatsiooni vÕrra tagA praegusES kapatsiteediS, ja turvalisuSE-load-nõuDed juhiVaD, kes saaB kasutada sedA millEl.

## Miks see on oluline

Kaks kõige-tsiteeritumAt kontrollitud uuringut osutaVaD vastandLikuTeLe suunDadeLe. Peng et al.'i 2023. aasta GitHub-Copilot-RCT leiuS, arendajad lõpetasiD greenfield-HTTP-serveri-ülesanDe 55,8% kiiremiNi Copilot'iGa (1t11m vs. 2t41m, n=95). METR'i 2025. aasta RCT leiuS, kogeNud open-source-arendajad, mis töötasiD *oma matuursETel repositooriumiTel*, oliD 19% aeglaseMaD varaseGa-2025-AI-riistaGa, samal ajal, kui uskuSid, et oliD ligikaudu 20% kiireMaD. Mõlemad uuringud on sound; vastuolu on fund — greenfield-ülesanDe-efikaasuS ei ülekaNDu matuursE-kodeBaasI-efektiivsuSeLe, ja suuR osA statslikuST inseneriTööST on matuursE-kodeBaasi-töö ejendiTel, mis on vanemaD ja idioSinkraatiliseMad, kui mediaan-kommertSliK repositoorium. Central Digital and Data Office'i Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) sätestab printsiibid vastutustuNdlikuLe adoptsiooniLe täpselt sellepärast, et see evidensiBaas ei saaB olla lihtsalt importeeritud tarnija-demonstratSioonideST; osakondadEst eeldatakse, et hindavaD riistaD vastu oma andme-käsitlemiSE- ja turvalisuSE-nõuDeiD enne käiVitamist.

## Arvutus

```
Vastuvõtu-määr   = vastuvõetuD soovitused / näiDatuD
                   soovitused
Retentsiooni-määr = AI-kood, mis ellujääb mergeNi /
                   vastuvõetud AI-kood
Kiirenduse-määr   = (t_kontroll − t_AI) / t_kontroll (ainult
                   kontrollitud võrdlusEST)
ThroughPuti-delta = Δ mergeTud PR'id/arendaja/nädal

AvaLiku-sektori-kaTvuS-faktor:
  õigustatuD-kodebaasi-osaKaal = LOC süsteemideL, kus
    klassifikatsioon (OFFICIAL, OFFICIAL-SENSITIVE, SECRET)
    lubab riista üldSe

VäärtuSE-mudel = arendajad × õigustatuD-kaTvuS × säästetuD
                aeg × laetuD määr × utiliseerimine
                — igA term vajab lokaalSt mõõtmist, ja
                kaTvuS-faktoril ei ole mingit erasektorI-
                ekvivalenti
```

## Läbitöötatud näide

Statslik osakond piloteerib AI-kodimiSE-assistentI üle 300 arendaja, kuid ainult süsteemid klasseFitseeritud OFFICIAL on õigustatud riista-kasutuSeKs — 70% ejendiST personali-arvu-allokatSiooni järGi, ülejäänuDeGa 30% (kõrgeMa-klassifikatsiooni-süsteemid) väljaJäetuD täielikult.

```
Õigustatud arendajad = 300 × 0,70 = 210

Piloodi tulemus: iseRaporteeritud säästetuD aeg 40 min/päev;
               mõõdetuD ülesanDe-tasandi-sääst 12 min/päev
               (0,2t) — METR-tajuMise-lünk, reprodutseeritud
               reaalseS maailmaS

Väärtus-sätA MÕÕDETUD numbEr:
  210 × 0,2t × 220 päeva × £55/t laetuD × 0,6 utiliseerimine
  = 210 × 44 tundi × £55 × 0,6
  = 9240 tundi × £55 × 0,6 ≈ £304 920/aastas kapatsiteet

Kulu: 210 litsentseeritud kohT × £22/kuu × 12 ≈ £55 440/aastas

Netto kapatsiteedi-suhe ≈ 304 920 / 55 440 ≈ 5,5:1
```

RahastataV roughLy üheL-kolmandikul iseRaporteeritud kasuST, ja ainult pärast, kui klassifikatsiooni-lagi on rakendatuD — kõigi 300 arendaja litsentseerimine iseRaporteeritud figuuri tugevuseL oleKs üleHinnanuD nii õigustatuD populatsiooni, kui tõelist sääsTu.

## Seos tarkvaraarendusega

DistsipliiNid, mis kannavaD otse üle: käivita **pragmaatiliseD katseD** osakonna oma kodebaasil ja reaalseL tickeTidel, ei tarnija-demonstratSiooni-ülesanDeiL, sest METR-tulemus on spetsiifiLiselt matuursE-kodebaasi-fund; käsitle **vastuvõtu-määra proksiNa, ei tulemuseNa** — kõrgE vastuvõtu-määr madalaGa retentsiooniGa on software-ekvivalent üleDiagnosEErimiseLe; paarIsta igA throughput-väide **stabiilsuSE-kontrolliGa**, sest DORA 2025. aasta raport leiuS, AI-adoptsioon tõstab throughput'i, kuid degradeerib muudatuSe-stabiilsust, mis on täpselt netokasu-analüüs, millEKs [DORA-mõõdikud avaliku väärtuse jaoks](../dora-metrics-for-public-value/) on ehitatud; ja ole aus, et AI-riistaD saaVaD laiendaDa, ei kitsenDaDa, lünka [tehniliSe-võla](../technical-debt-as-public-value-erosion/)-rasKeTel legacy-ejenDitel, sest treeninGuAndmed alaEsindavaD COBOL, 4GL, ja skräddersyd mainframe-koodi levinuD valitsuses, nii et soovituSe-kvaliteet täpselt neiL süsteemidel, mis kõige rohkem vajavaD abi, on sageli nõrgim. See istuB koos laieMa [AI valitsuSe väärtuseS](../ai-in-government-value/)-küsimuseGa ja peaks olema juHiTud samADeST [statslikU-sektori-küberturvalisuse-väärtuSe](../public-sector-cybersecurity-value/)-piirangutest, mis piiraVad, kus mistahes kolmandA-osapoole-riist üldSe saaB näha koodi või andmeid.

## Lõksud

- **TarnijA-uuringu-transplantatSioon.** Greenfield-RCT-kiirenduSTe rakendamine legacy-integratsiooni-tööLe on täpselt viga, millE METR-uuring eksponeeriS.
- **IseRaport mõõtmiseNa.** 20-protsendipunkti-tajuMise-versus-mõõDetuD-lünk on suurim teaDaolev bias sellES kirjanduseS, ja see infleerib äriJuhtumeid, mis tuGineVad ainult arendaja-uuringuteLe.
- **Klassifikatsiooni-lagE ignoreerimine.** LitsentseerimiSE- ja väärtuSE-mudelid, ehitatuD koGu-personali-arvu peal, ei õigustatuD, klassifikatsiooni-kinnitatuD alamhulGa peal, üleHindaVaD süstemaatiLiselt nii kuluefektiivsuSt kui saavutataVat kaTvuSt.
- **HankimiS-tsükli-lag.** FramewoRk-põhine riista-hankimine saaB tähendaDa, et pilot hindab mudeli-generatsiooni, mis on 12-18 kuuD maHA sellest, mis on avalikult saadaval ajaKs, mil fulleM käiVitamine toimub, muutES originaalse äriJuhtumi kiirenDuSE-eeldusE vananeNuKs enne go-live'i.

## Allikad

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
