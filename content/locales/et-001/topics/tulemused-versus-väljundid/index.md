# Tulemused versus väljundid

Väljund on tegevuse otseNe, loendatAv toode — see eksisteerib hetKeL, mil tarne toimub, efektist sõltumata, mis seL on. Tulemus on muutus, mis järgneb mõjutatuTeLe inimesTeLe, kohaLe, või süsteemiLe. "500 inimest osales tööOtsinguTöökojaS" on väljund: see on tõsi ka, kui ükski neist ei leia tööd. "500 inimeSe tööHõiveVäljavaated paranesid" on tulemuse-väide, ja see vajab tõendit muutuSeST, mitte ainult tõendit osalemiSeSt — segaDus, mis toodab rohkem misLeADivaid grAndi-raporteid kui peaaegu mistahes muu mõõtmisViga sektoris.

## Miks see on oluline

HM Treasury Magenta Book ja rahastajad nagu National Lottery Community Fund nõuavad mõlemad tulemus-raporteerimist spetsiifiLiselt sellepärast, et väljundid on, mida programmid raporteerivad vaikimisi: need on odavaD loenDaDA, alati saadaolevaD, ja alati näivaD positiivsED. Väljunditulemus ei saa literAalseLt kunagi langeda programmi ebaõnnestumisE tulemuseL — rohkem tarnitud sessiooNE on alati "rohkem," kuSjuures tulemus saab paljastada, et programm ei töötA. National Audit Office on korduvalt kritiseerinud statslikke programme tegevuSe-tasemete raporteerimiSe eest, nagu oleksid need eduTõenD; tarkvaraSüsteem, mis muudab ainult väljundid lihtsaKs raporteeriDA, tugevdab seda vaikimisi, sest väljundid ei vajA mingit jälgimiS-andme-kogumist ja tulemused vaJaVad.

## Arvutus

Formulat ei ole, kuid on usaldusVäärne test mõõdiku klasseFitseerimiSeKs:

```
Väljundi test:  on see loenDatAv tarne-punktiS, tõsi ka, kui
                vastuVõtja ei ole mõjutatud?
Tulemuse test: nõuab see enne/pärast või -GA/-TA võrdlust,
               et olla meaningful?

Kui number saab olla tõsi null-kasuGa kelleleGi, on see
väljund.
```

See istuB laiema [logikMudeli](../logiline-mudel/) ahela sees ja sõltub tulemuse-lülidest, mis on defineeritud [muutuSe teooriaS](../muutuse-teooria/); tulemuse muutmine rahaKs kasutab meetodeid [sotsiaalseS tulus investeeringult](../sotsiaalne-tulu-investeeringult/).

## Läbitöötatud näide

**Kohalik omavalitsus (tööHõiveToetus)**: väljund — 500 inimest osales tööOtsinguTöökojaS. Tulemus — 12-kuulisel jälgimiSel on 140 neist 500-st (28%) püsivaS tööHõiveS (6+ kuud). VõrdlusGrupp sarnasteGa omadusteGa, kuid programmJuurdePääSuTa, omab 15% baasJoone tööHõiveMäärA samal perioodil. NetoTulemuse kasv: 28% − 15% = 13 protsendipunkti, nii et hinnanguliselt 500 × 0,13 = 65 lisaInimest on tööS, kes muidu ei oleks — omistatav tulemus, erinev nii 500-inimese-osaleMisE-näitajast kui 140-rajuST tööHõiveTulemuSeSt.

**Heategevusorganisatsioon (kirjaOskuSe heategevusorganisatsioon)**: väljund — 1200 lugemisSessiooni tarnitud 300 lapseLe. Tulemus — keskmine lugemisVanuS paranes 8 kuu võrra üle 6-kuuLise perioodi, vastu oodatuD 6-kuuliseLe loomuliKuLe progressiooniLe baasJoones 6 kuud. NetoTulemusE kasv: 8 − 6 = 2 kuud lisaLugemisVanuSe paranemiSt lapse kohta, omistatav programmiLe, mitte täiS 8-kuuLinE näitaja.

## Seos tarkvaraarendusega

SündmuSLogid ja transaktSiooniLiseD süsteemid instrumenteerivad väljundeid peaaegu automaatSelt — lehEVaatamiSed, sessioonid, suleTud pileTid, broneeritud kohtumised — sest need genereeritaKse süsteemi poolt, mis teeb oma tööd. Tulemused vajavad andmeMudelit, mis fikseerib samA indiviidI hilisemaL ajaPunktiL vastu baasJooneLe või võrdluSeLe, mis peab olema sihilikult disainitud: jälgimiSUuringud, sidutud administratiivseD registrid, või võrdlusKohort. RaporteerimisRiist, mis toetab ainult esimest, juhiB vaikselt organisatsiooni väljunditeja-ainult-raporteerimiSe suunas, ükskõik mida rahastaja küsis. Vaata [logikMudel](../logiline-mudel/) kohaks, kuS tulemused istuvad vastutusAhelaS, [kulu tulemuse kohta](../kulu-tulemuse-kohta/) sellE distinktSiooni muutmiSeKs ühikuKulu-mõõdikuKs, ja [avaliku sektori KPId](../avaliku-sektori-kpid/) laiemaST mõõdikuValikuST mustriST.

## Lõksud

- **Väljundite raporteerimine, nagu oleksid need tulemused.** "500 inimest osales" implitseerib kasu seda demonstreerimaTa; märgista osaleMine väljundiKs selgeSõnaliselt.
- **Puudub baasJoon või võrdlusGrupp.** TulemuseNäitaja ilma kontrafaktuaaliTa — vaata [kontrafaktuaalne analüüs](../kontrafaktuaalne-analüüs/) — ei saa eraldada programmi efekti sellEst, mis oleks juhtunud niikuinii.
- **Optimeerimine rahastatuD mõõdikuLe.** Kui rahastamine on seotud väljundi-volümiGa, maksimeerivad tarneMeeskonnad rationaalseLt osaleMist vastupidavA muutuSe üle, Goodharti seaduSe ebaõnnestumisMuster.
- **Tulemuse-pesemine.** Väljundi-mõõdiku ümbermärgistamine tulemuse-kõlaVa keeleGa ("engagementi tulemused: 500 osalejat") ilma mistahes jälgimisMõõtmiSeTa selle taga.

## Allikad

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
