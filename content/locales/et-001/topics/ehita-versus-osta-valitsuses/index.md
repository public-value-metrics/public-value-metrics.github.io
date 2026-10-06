# Ehita versus osta valitsuses

EhitA-versus-ostA on struktureeritud, riski-kohandatuD võrdlus skräddersyd arenduSe vastu kommertSliKuLe või kommodity-anskaFimiseLe, võrreldud diskonteeritud [koGuOmandiKuluL](../koguomandikulu-statslikus-it-s/), ajaNi-väärtuseNi, ja riskiL. Valitsus on strukturaalSelt ostev sektor — Technology Code of Practice seaB eelDusE kommodity- ja cloud-lahendusTe suunas — kuid inseneriMeeskonnad osakondade sees vaikivaD ikkagi ehitusE suunas, samaDeST põhjusTeST, millEst ehitajaD kõikjal teevaD.

## Miks see on oluline

Government Digital Service'i Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) ja kaasnEv Service-Manual-juhend otsustamiSeKs, kas ehitada või ostA, lükkaVad osakondi õigustaMa skräddersyd arendust vastu eelDusELe, et kommodity-kapatsiteet peaKs olema ostetuD, ei ehitatuD, ja et ainult genuinely uuDne, missiooni-eristaV kapatsiteet õigustab skräddersyd koodi. HM Treasury optimismi-bias-täiendav-juhend Green Book'ile, tõmmatuD 2002. aasta Mott-MacDonald-läbivaatuSeST suurteST avaLikeST hangeTeST, annab IT-projektideLe laieMa opJustEerimiSe-vahemikU, kui mistahes muu hinnatuD kategooria — kapitaliKulu-hinnangud soovitatuD opJustEeriMiSeKs 10%-GA madalaL otsaL ja kuni 200%-GA kõrgeL otsaL, enne kui neid kasutatakse hindamiseS, peegeldaDes, kui halvasti software-ehitused on ajalooLiselt alaHinnatuD üle avaliku hankimiSe. EhitA-versus-ostA-analüüS eksisteerib täpselt sellE riski-kohanduSe sundimiSeKs lauaLe enne kinnitust, selle asemel, et laSta sellE eksponeeruDA aastaSeSe üleKulutuSE-taotluSeNa.

## Arvutus

```
Võrdle üle sama 3-5-aastaSe horisondi, diskonteeritud
Green-Book-sotsiaalseL diskontomäärAl (vaata social-
discount-rate.md):

NPV_variant = PV(kasud, nihutatuD ajaNi-väärtuseNi) −
             PV(TCO)

Riski-kohandused (Green-Book-optimismi-bias-mustEr):
  ehitusKulu × 1,1-3,0        (IT-projekti-opJustEerimiSe-
                              vahemik, Mott MacDonald)
  ehitusE-ajaNi-väärtuseNi + 40-60% (deployment-viivituSe-prior)
  ostA: lisA integratSiooni-realiteedi-kontroll ja lepingu-
       exit-kulud selle asemel

OtsuSE-driverid, järGus, milles need tavaliselt otsustaVaD:
  1. diferentseerimine — on see kapatsiteet missioon, või
     torustik?
  2. ajaNi-väärtuseNi × viivituSE kulu (vaata cost-of-delay-
     in-public-programmes.md)
  3. riski-kohandatuD koGuOmandiKulu
```

## Läbitöötatud näide

KohaliK omavalitsus vajab juhtumiHalDuSe-süsteemi täiskasvanute-sotsiaalhoolDuSeLe. OstA: SaaS £180 000/aastas, live 4 kuuGa. EhitA: hinnanguliselt £900 000 pluss £150 000/aastas hooLdus, live 14 kuuGa.

```
Riski-kohandatuD ehitusKulu = 900 000 × 1,4 = £1 260 000
5-aastaNe TCO:
  ostA  = 180 000 × 5 = £900 000
  ehitA = 1 260 000 + 150 000 × 5 = £2 010 000

ViivituSE-term: süsteem väldiB £40 000/kuu duplikeeritud
hindamisTeS; ehitA saabub 10 kuuD hiljem, kui ostA.
CoD = 10 × 40 000 = £400 000

Efektiivne võrdlus: £900 000 (ostA) vs. £2 010 000 +
£400 000 = £2 410 000 (ehitA)
```

OstA võidab roughLy £1,5 miljoniGa üle viiE aasta, ja suurim üksik rida pärast ehitusE-hinnangut ise on viivitusE-kulu, mida puhas capex-võrdlus mitte kunagi ei oleKs eksponeerinud.

## Seos tarkvaraarendusega

DistsipliiNid, mis liiguvaD otse seST analüüsiST tarnePraktikaSSE: **prior-põhine riski-kohandus** — Mott-MacDonald-opJustEerimine on software-ekvivalent Green-Book-optimismi-biasiLe, rakendatuD mehhaaniLiselt, nii et meeskonnad peaksid argumenteeriMa erandi eest selleLe, ei eeldaMa, et nende hinnang on erand; **komparatori-ausuS** — alternatiiV ehitamiSeLe on parim saadaval olEv ostA-variant, ei "mitte midagi," mis seob otse [alternatiivkuluGa avalikes kulutustes](../alternatiivkulu-avalikes-kulutustes/); ja **aus TCO-võrdlus** — igA ehitA-ettepanek peaks olema võrreldud vastu ostA-variandi täieliku [koGuOmandiKuluGa](../koguomandikulu-statslikus-it-s/), ei selle nimekirjaHinnaGa. Kus ehitA genuinely võidab, peaks lisandUva ehitusE-aja [viivituSE kulu](../viivituse-kulu-avalikes-programmides/) olema prisSetud explicit äriJuhtumis, ei jäetuD väljaütlemaTa eeldusEKs, et aeg ei loeB.

## Lõksud

- **Tarnija-nimekirjaHinna võrdlemine mitte-riski-kohandatuD ehitusE-hinnanguGa.** See topelt-smigerdab ehitusT kahekorDA, korD kuluL ja korD ajaKaval.
- **NulL-prisSetud siseMine tööJõud.** AmetniKu inseneri-aeg käsitletakse "tasuTA," sest see on juba osakondlikuL personali-arvu-eelArveL, mis peiDaB selle tõelist alternatiivKulu vastu muuLe tööLe, millE see meeskond saaKs teha.
- **UPrisSetud lock-in mõlemaS suunaS.** TarNiJa-exit- ja andme-portatiivsuSe-kulud on reaalseD, kuid sama on skräddersyd ehitusE bus-faktor ja selle sõltuvus säiLitaDa väikseT, raskeSti-asendataVat majaSisest meeskonda üle selle elu.
- **Missiooni-diferentseerimine väidetuD torustikuLe.** "See on tuumA meiLe" väidetuD integratSiooni-middleware'i või dokumendi-storE kohta — testi sedA vastu selleLe, kas kodanik või juhtumitöötaja mitte kunagi märkaKs, kumb neST jookseb allPool.

## Allikad

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
