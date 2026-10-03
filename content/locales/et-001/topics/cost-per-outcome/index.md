# Kulu tulemuse kohta

Kulu tulemuse kohta on koGu programmi-kulutuS jagatuD inimeste arvuGa, kes saavutavad defineeritud, meaningful muutuSe oma olukorraS — mitte arv, kes lihtsalt saiD teenust. See on teraVam efektiivsuse-mõõdik, mida rahastaja või tarneMeeskond saab kasutada, sest see sunniB eelNeva küsimuSe, mida enamik heategevusorganisatsioone vältiB: mis, täpselt, loeB edukS?

## Miks see on oluline

ToiduPank saab raporteerida kahte väga erinevat numbrit samast aasta-raamatuPidamiSest. Kulu jaGatud toidupaketi kohta võib olla £15. Kulu leibkonna kohta, kes saavutab toiduKindlustatuSe — ei vaja enam erakorralist toidu-abi, verifitseeritud järel-kontrolli-punktiS — võib olla £340. Mõlemad on tõesed. Ainult üks ütleb rahastajaLe, kas raha töötab. Lünk nenDE vahel on lünk väljundi ja tulemuSe vahel: üle-aNtud pakeT on väljund; leibkond, mis ei ole enam kriiSiS, on tulemus. Vaata [tulemused versus väljundid](../outcomes-vs-outputs/).

Ühendkuningriigi kolmas sektor on kulutanud kaks dekaadi infrastruktuuri ehitamiSeKs, et sundiDA sellE distinktSiooni. New Philanthropy Capitali "nelja-pilari-lähenemine" heategevuSe efektiivsuSeLe küsib organisatsioonidELt selgeSõnaliselt oma tulemuste sõnastamist enne väljundeid, ja Inspiring Impact — Ühendkuningriigi rahastaja-tasakaalustatud mõjuMõõtmiSe koostöö — avaldab Outcomes Matrixi, mida mitmed grAndiTaotlused nüüd nõuavaD heategevusorganisatsioonidELt täitma. Trussell Trusti aastaNe "State of Hunger"-uuringuProgramm, mida vedaB koos Heriot-Watt University'GA, eksisteerib täpselt sellepärast, et pakeDiLoenDuD üksi ei ütle midagi selle kohta, kas inimesed põgenevaD toiduEbakindluSeST.

Kulu tulemuse kohta tähendab midagi vaid korD, kui olED fikseerinud kontrafaktuaali: tulemus, mis saavutataKse "niikuinii," ei ole tulemus, mille programm ostiS. Vaata [kontrafaktuaalne analüüs](../counterfactual-analysis/) ja [nihutamine ja omistamine](../displacement-and-attribution/).

## Arvutus

```
Kulu tulemuse kohta = koGu programmi-kulu / nende abiSaajate
                      arv, kes saavutavad defineeritud
                      tulemuse

kus:
  KoGu programmi-kulu = otseNe tarne-kulu + fair osa
                       üldKuluST
  Defineeritud tulemus = eelSpetsifitseeritud, mõõdetAv
                       olekumuutus (nt "toiduKindlustatud
                       6-kuu-järel-kontrollis," mitte "saiS
                       toidupaketi")
```

Võrdle vastu [ühikukulu andmebaaSe](../unit-cost-databases/) (nt sektorI-spetsiifiliseD ühikukulu-benchmarKid) selle hindamiSeKs, kas antud kulu tulemuse kohta on hea, keskmine, või kehv relatiivSelt sarnasteGa interventsioonideGa.

## Läbitöötatud näide

**ToiduPank, üks aasta**:

- KoGu programmi-kulu: £450 000
- Jagatud pakeTid: 30 000
- Kulu pakeTi kohta (väljundi-mõõdik): £450 000 / 30 000 = **£15**

HeategevusOrganisatsioon käitab ka kuue-kuu-järel-kontrolli-uuringut leibkonDade sampliGa, leideS, et 35% leibkonDadest, mis saiD kolm või rohkem pakeTit, raporteerivad, et ei vaja enam erakorralist toidu-abi, ja skoorivad üle toiduKindlustatuSe-tärskli standardsel toiduKindlustatuSe-uuringu-modulil. 1800 leibkonnast, kes saavad kolm-pluss pakeTi selle aasta, saavutab 630 selle tulemuSe.

```
Kulu tulemuse kohta = £450 000 / 630 = £714 leibkonna kohta,
mis saavutab toiduKindlustatuSe
```

See £714-figuur on, mida rahastaja, kes võrdleb sedA heategevusorganisatsiooni kontant-ülekanDe-pilootprojektiGa või võlaNõustamiSe-teenuseGa, peaks kasutama — mitte £15. Kui sarnane kontant-ülekanDe-programm samaS regioonis saavutab toiduKindlustatuSe £500 leibkonna kohta, ei ole toiduPank obviously efektiivseM tee samaLe tulemuSele, isegi kui selle pr.-paketi-kulu näeb odav välja.

## Seos tarkvaraarendusega

Enamik juhtumiHalDuSe süsteeme on ehitatud väljundeid logima, sest väljundid on, mis juhtub transaktsiooni sees (pakeT üle-aNtuD, vorM esitatud). Tulemused juhtuvaD tavaliselt hiljem, sageli väljaspool süsteemi normaalSet jäädvustamiSe-aknaT, ja nõuavaD tahtLikKu disaini-otsust: ehita järel-kontrolli-mehhanism (uuringu-trigger, taasKontakti-töövoog, andme-sidumise-harjutuS) esmaKlassi-funktsiooniNa, mitte eelTulemuseNa, mis on boltitud aastaraporti jaoks. Insenerid, kes ehitavad grAndiHalDuSe- või juhtumiHaldusE-platvorme sektoriLe, peaksid käsitlema "mis on tulemuSe-sündmus, ja kuidas me selle vaatleme" nõuDe-küsimuSeNa, mis küsitakse enne andmeMudeli fikseerimist — palju raskem on retroFitteerida tulemuSe-väli kui väljundi-loenDur. Vaata [tulemused versus väljundid](../outcomes-vs-outputs/) ja [logikMudel](../logic-model/) selle nõuDe-vestluse struktureerimiSeKs, ja [kulu abiSaaja kohta](../cost-per-beneficiary/) kiireMa, kruDeMa mõõdiku jaoks, mille järGi meeskonnad haaraVad, kui tulemuSe-jälgimine ei ole veel ehitatud.

## Lõksud

- **VäljundiTe raporteerimine tulemuSteKs riietatuNa.** "Nähtud inimesed" ei ole "aidatud inimesed." Kui mõõdik saab olla toodetuD süsteemiLogiST ilma järel-kontakTita, on see peaaegu kindlasti väljund.
- **NimetajaManipulatsioon.** Tulemuse-populatsiooni kitsEndamine "neiLe, kes lõpetasid programmi," vaikselt kukutab inimesed, kes langesid välJA — sageli raskeimAD juhtumid — ja infleerib ilmSe määra. Angma nimetaja kui kõik, kes alustasid, ei kõik, kes lõpetasid.
- **Puudub kontrafaktuaal.** Kõigi, kes saavutasid tulemuSe, loeNdamine, sealhulgas need, kes oleKsid niikuinii, ülehindab, mida programm ostiS. Vaata [kontrafaktuaalne analüüs](../counterfactual-analysis/).
- **Võrdlemine üle inkompatiibleD tulemuSe-definitsioonide.** "ToiduKindlustatud," mõõdetud valideeritud uuringu-moduliGa, ei ole võrreldAv "toiduKindlustatuGA," iseRaporteeritud rahulolu-vormiS; kulu-tulemuse-kohta-liiGaTabel on aus vaid, kui tulemuSe-definitsioonid sobivaD.

## Allikad

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
