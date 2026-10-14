# AI valitsuse väärtuses

AI valitsuSE väärtuSES on nõue, et AI-süsteem, mida kasutatakse avalikus teenuSeS, läbib sama value-for-money- ja avaliku-väärtuse-bari, kui iga muu kulutuSE-otsus — ei madalaMat üheT, sest see on uuDne, ja ei kõrgeMat üheT, sest sellE kardetaKse. See on küsimus, millEle tarneMeeskond peab suutma vastaTa enne, ei pärast, AI-funktsiooni lancEerimist: toodab see rohkem väärtust, kui see kulutab, kord kui garantEerimine, järelevalve, ja risk on ausalt hinnastatuD?

## Miks see on oluline

Ühendkuningriigi Central Digital and Data Office (CDDO) avaldaS oma Generative AI Framework for Government 2024, ehitaDes varasemaLe interim-juhendiLe juuniST 2023, ja struktureeriS sellE kümnE printsiibi ümber, mis katavaD, mis on generatiivne AI, selle eetiliseD implikatsioonid, riista-turvalisuS, kvaliteedi-garantii-kontrollid, täielikU generatiivsE-AI-elutsükli haldamine, genuine kasutusjuhtumite identifitseerimine, tvär-statslik koostöö, transparentsuS, oskused, ja juhtimine. RaamistikU insisteerimine "meaningful inimese-kontrolli" ja täieliku-elutsükli-halduSe peal eksisteerib, sest AI-projektI-äriJuhtumiD oMavaD spetsiifilisE ebaõnnestumisMustri, mida muu IT-kulutuS ei oma: pilootI pealKirja-produktiivsuSe-numbEr on lihtne toota ja lihtne üleHinDa, sest see on mõõdetud enne, kui verifikatSiooni-, korrektsiooni-, ja järelevalve-koormuS, millE riist loob, on arvesse võetud. Koos raamistikuGa nõuab Algorithmic Transparency Recording Standard (ATRS), et statslikud organid avaldaksiD standardiseeritud registri — eesmärk, kasutatuD andmed, jõuDluS, õiglusE-testimine, inimese-järelevalvE-korraldused — algoritmilisTeLe riistaDeLe, millel on signifikantNe mõju otsusteLe indiviide kohta, mis muudab AI-süsteemi garantii-kulu avalikuKs registriKs, ei siseMiseKs hinnanguKs, millE meeskond saaB vaikselt vaheLe jätta.

## Arvutus

AI-adoptsioon hinnataKse lisandUseNa standardseLe [value-for-money](../raha-eest-saadav-väärtus/)-hindamiseLe, ei aseNDuseNa sellELe, AI-spetsiifiliseteGa termineiTeGa muudetuD selgeSõnaliseKs, selle asemel, et nad oleksiD foldituD üheKs-ainsaKs "produktiivsuSE-kasvu"-numbriKs:

```
AI-süsteemi netoVäärtus =
    produktiivsuSE-kasv (säästetuD aeg × laetuD personali-
    kulu)
  − litsentsi-/compute-kulu
  − inimese-verifikatSiooni- ja järelevalve-kulu
    (AI-väljundi kontrollimine enne, kui sellE peal
    tegutsetakse — see ei kahane nulliLe isegi matuurseTeLe
    riistaDele)
  − ATRS-dokumentatSiooni- ja jooksvA-monitoorimiSe-kulu
  − riski-kohandatuD kahjuKulu vigadeST, kallutatuSeST, või
    hallutsinatSioonIst, kaalutuD selleGa, kes kannab selle
    kahju (jaotuslik kaalumine)

PilootI produktiivsuSE-figuur, mis väljaJätab järelevalve-
termini, ei ole võrreldAv business-as-usual-kulu-baasJooneGa,
mis juba sisaldab ekvivalentSE inimese-läbiVaate — vaata AI-
produktiivsuS-avalikuS-sektoriS fulleMa produktiivsuSE-
mõõtmise-distsipliini jaoks, millest see laenab.
```

## Läbitöötatud näide

**Kohalik omavalitsus, mis kasutab generatiivSEt AI-riista, kirjutaMaKs esimesi vastuseid routine-kinnisvaraMaksU-küsimuSteLe**: 25 000 küsimust/aastas, varem käsitletuD täielikult juhtumitöötajaTe poolt keskmiselt 14 minutil/küsimus, laetuD personali-kulu £34/tund.

```
BaasJoonE (ei AI) kulu:
  25 000 × (14/60) × £34 = £198 333/aastas

PilootI pealKirjaVäide: AI koostab vastuse 90 sekundiS,
juhtumitöötaja "lihtsalt läbiVaataB ja saadaB" — väidetuD
uus aeg on 3 minutit
  25 000 × (3/60) × £34 = £42 500/aastas
  → väidetuD sääst £155 833/aastas (näeb transformatiivNe
    välja)

TäielikuLt-laetud figuUr, mõõdetuD pärast 3 kuuD live'is,
ei piloodi käsitSi-valitud test-juhtumites:
  Tegelik läbiVaate + korrektSiooni-aeg vastuse kohta: 6
  minutit (koostatuD vastused vajavaD reaalSt toimetamist
  kompleksSeteLe või emotSionaalselT-sensitiivseteLe
  küsimusteLe)
  25 000 × (6/60) × £34 = £85 000/aastas
  Litsentsi-/compute-kulu: £38 000/aastas
  ATRS-dokumentatsioon ja kvartaalne bias-/kvaliteedi-
  monitooring: £14 000/aastas
  KoGukulu = 85 000 + 38 000 + 14 000 = £137 000/aastas

Reaalne sääst = 198 333 − 137 000 = £61 333/aastas —
genuine ja väärT säiLitaDa, kuid hästi allA pooleST
piloodi pealKirjaVäiteST, ja see nõuDiS ausat järelevalve-
aja-mõõtmist, ei piloodi parimA-juhtumi-üht, selle
leiDmiSeKs.
```

## Seos tarkvaraarendusega

Siin kohtuvaD [AI-produktiivsuS-avalikuS-sektoriS](../ai-produktiivsus-avalikus-sektoris/) ja see teema: inseneriMeeskonnad, mis ehitavaD AI-funktsiooniD avalikuTeSSE teenusteSSE, oMavaD instrumenteerimiSe, mis muudab "reaalSe" figuuri läbitöötatud näiteS võimalikuKs — logiDes tegelikku läbiVaate-aega, editeerimis-distantsi vaStuSE-mustandi ja saadetud vastuse vahel, ja eskalatSiooni-määrA, selle asemel, et usaldaDA piloodi demo-tingimusi. AI-funktsioonid peaksid olema hinnatud vastu [digitaalseS teenusestandardis](../digitaalne-teenusestandard/) punkt 9 (turvaline teenus, kasutaja-privaatsus) ja tvär-refereeritud [statslikU-sektori-küberturvalisuse-väärtuSeGa](../statsliku-sektori-küberturvalisuse-väärtus/), kus riist puutub kokku kodaniku-andmeteGa, ja mistahes AI-süsteem signifikantSe mõjuGa otsusteLe indiviidiDe kohta vajab ATRS-registrit, enne kui sedA saaB käsitleda hindamiSeKs-valmiS, samal viisil, kui teenus vajab läbitUd [digitaalseS teenusestandardis](../digitaalne-teenusestandard/)-hindamist enne live'i minemist.

## Lõksud

- **AI-pesemine.** OlemasolevA reeglI-põhiSE automatSiooni ümbermärgistamine "AI'Ks," tagaMaKs rahastuST või tähelepanuT, mis on märgitud AI-adoptsioonile, ühEta täpsuse- või kallutatuSe-riskidETa, mis tegelikult õigustaVad raamistikU lisaGranskumist.
- **PilootI produktiivsuse, ei produktsiooni-produktiivsuse mõõtmine.** Piloodid jooksevaD kuraTeeritud test-juhtumitEl engaGEeritud, tähelepanelikuTeGa läbiVaataJateGa; produktsioon jookseb täieliKuL segaseL juhtumiMiksil läbiVaataJateGa, mis aja jooksul arendavaD automatSiooni-kallutatuSe ja alaKontrolliVaD väljundeid — mõlemad moonutavaD ausat järelevalve-kulu-figuuri.
- **ATRS-registratSiooni vahele jätmine, sest riist "ei ole tõepoolest automatiseeritud otsuseTegeMine".** StandardI tärskel on signifikantNe mõju otsuSeLe indiviidi kohta, millE kõige kodanikuLe-vendaTuD AI-koostamiSe- või triaazh-riistaD täidavaD, isegi kui inimene tehniliselT kinnitab.
- **Vigade distributsiooniLisE mõjU ignoreerimine.** AI-süsteemi vea-määr, keskmistatuD üle kõigi kasutajaTe, saaB peitA palju kõrgeMA vea- või kallutatuSe-määra spetsiifiliseTeLe grupiDeLe; [jaotusliK kaalumine](../jaotuslik-kaalumine/) peaks olema rakendatud riski-kohandatuD kahju-terminiLe, ei lihtsalt aggregeeritud täpsusE-figuuriLe.

## Allikad

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
