# Stated preference hindamine

Stated preference meetodid hindavad mitte-turu kauba väärtust, küsiDES inimesteLt otse, mida nad oleksid valmiS selle eest maksma, või valmiS vastuVõtma kompensatsiooniNa selle loobumiSeKs, tüüpiliselt struktureeritud uuringu kaudu, mis kirjeldab hüpoteetiLiSt stsenaariumi. Kontingentne hindamine on tuntuimA tehnika peres.

## Miks see on oluline

Green Book Lisa 2 (täiendav juhend mitte-turu mõjude hindamiseKs) toetab stated preference meetodeid kaupadeLe, millel pole vaadeldAvat turuTehingut üldse, millest väärtust tuletada — õhuKvaliteet, bioLoogiLinE mitmekesisus, üleujutuSKaitse, maastiku olemasolu-väärtus, mida keegi võib mitte kunagi külastada (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra on avaldanud oma stated-preference-juhendi keskkonnaHindamiseKs täpselt sellepärast, et nii palju keskkonnaVäärtuSt (eluPaigA kaitse, veeKvaliteet) ei oma mingit proxy-turgu, erinevalt, ütleme, mürAst, mis vähemalt korreleerub vaadeldAvateGa majaHindadeGa (vaata [revealed preference hindamine](../revealed-preference-valuation/)).

Stated preference'i tuumKeeldevus — see saab hinnastada liteRaalseLt kõike, sealhulgas kaupu, milleGa keegi ei ole kunagi tehingut teinud — on ka selle usutavuseProbleemi allikas. Sest respondenDid ei kulutada tegelikult raha, on kontingentse-hindamise uuringud vulnerabled hüpoteetilisE kallutatuSeLe (inimesed ülehindavad maksmisValmidust, kui mingit reaalSEt eelArvePiirangut ei ole), manustamise-efektideLe (sama kaup väärtustatakse erinevalt, sõltuvalt, mis muu on uuringus), ja algusPunktiLisE kallutatuSeLe pakkuMisMängU disainides. 1993. aasta NOAA-paneel kontingentsE hindamisE kohta, kokKuKutsutud pärast Exxon Valdez naftaReostuSe kohtuVaidlust, sätestas disainiStandardid — binaarne "kas maksaksid £X, jah/ei" referendum-formaat avatud-otsaLise pakkuMisE asemel, ja kohustuslikud meeldeTuletused respondendi tegelikuSt eelArvePiirangust — mis jäävad referentsStandardIKs kaitstavateLe uuringuteLe.

## Arvutus

```
Kontingentne hindamine (referendum-formaat):
  Esita binaarne valik: "kas maksaksid £X aastas tulemuse Y
  eest? jah/ei"
  Varieeri X juhuslikult üle respondentide.
  Sobita maksmisValmidus jah/ei vastuseMäärA funktsiooniNa
  igal X-l.

Keskmine WTP = hinnatud nõudluSKõvera alla jääv ala
Agregeeritud väärtus = Keskmine WTP × mõjutatud populatsioon

Valiku-eksperiment (diskreetne-valiku-modelleerimine)
variant:
  Esita respondentidele korduvaD valikuD atribuuTideBundlite
  vahel (sealhulgas kuluAtribuut), hinda implitsiitse hinna
  igaLe mitte-kulu-atribuuTiLe trade-off'idest, mida
  respondendid paljastaVad.
```

Valiku-eksperimendi variant on üldiselt eelistatud praeguses Ühendkuningriigi praktikas üle ühe-küsimuse kontingentse hindamiSe, sest respondentide sundimine vahetama mitut atribuuti korduvalt kulu vastu toodab sisemiselt konsistentseMaId, raskeMini-manipuleeritavaId hinnanguid kui üks jah/ei küsimus.

## Läbitöötatud näide

**Riiklik valitsus**: Defra tellib kontingentse-hindamise uuringu, et hinnastada jõe veeKvaliteedi-parandamisE programmi. Referendum-formaadi uuring 2000 leibkonnaST leiab, 62% maksaksid 40 £/aastas hüpoteetilisE veeArve-lisandi kaudu, ja hinnatud nõudluSKõver annab keskmise maksmisValmiduSe 28 £/aastas leibkonna kohta.

```
Keskmine WTP = 28 £/leibkond/aastas
Leibkonnad valgalaS = 340 000
Agregeeritud aastane väärtus = 28 £ × 340 000 = 9,52m£/aastas

Üle 20-aastaSe hindamisPerIoodi 3,5% diskontomäärAGA
(annuiteediFaktor ≈ 14,2):
PV(kasu) ≈ 9,52m£ × 14,2 ≈ 135m£
```

See agregeeritud näitaja võrreldakse siis programmi [sotsiaalse kulu-kasu-analüüsi](../social-cost-benefit-analysis/) kulu-poole vastu. Green Book nõuab, et selline stated-preference-tõend raporteeritaks koos selle usalduseIntervalliga ja uuringuMetodoloogiaga, mitte paljaS punktHinnanguNa, täpselt sellepärast, et alusOlev number on habraSem kui turuHind.

**Heategevusorganisatsioon**: pärandUsE-fond uurib külastajaid ja mitte-külastajaid maksmisValmiduse kohta ennetaDES ajalooliSe ehitiSe sulgemist, mida mõLemaD grupid ei pea tingimata külastama (selle olemasolu-väärtus). Sest mitte-külastajad, kes ei näe kunagi ehitist, raporteerivad siiski positiivse WTP, fikseerib uuring olemasolu- ja pärandus-väärtust, mida lihtne külastaja-tasu-tulu-arVesTus (revealed-preference-proxy) täielikult missaKs — näidaDES stated preference'i tõelist eelist, kus ei eksisteeri mingit turuTehingut väärtuse paljastamiSeKs.

## Seos tarkvaraarendusega

Stated preference meetodid kohalDuvad harva otse tarkvaraArenduse-tööLe, kuid insenerid, kes ehitavad kodaniku-konsultatsioonI-platVorme, eelArve-osaleMise-riistaD, või avaliku uuringu-infrastruktuuri, ehitavad sageli instrumenti, millest ekonoomika sõltub. UuringuDisaini detailide õigeKs saamine — juhuslikustatud pakkuMisE-summAd, binaarne-referendum-raamistamine avatud-otsaliste küsimuste üle, selgeSõnalised eelArve-piirangu meeldeTuletused — ei ole UX-nicety, see on, mis muudab tulemuse väärtustamiSe kaitstavaKs kontrolli all; halvasti disainitud rakenduSiseNe uuring saab invalideerida kuid järgNevat ekonoomilist analüüsi. Vaata [kodanikuRahulolu mõõdikuD](../citizen-satisfaction-metrics/) üldisemA distsipliiNi jaoks avaliku arvamuSe andmete elitsitatsiooniKs, mis kannab analüütiLiSt kaalu.

## Lõksud

- **Avatud-otsaLiseD "kui palju maksaksid?" küsimused.** Need on palju altiMad strateegiliSeLe ja ankurdamisE-kallutatuSeLe kui binaarne referendum-raamistamine; NOAA-paneeli soovitus kasutada referendum-formaati eksisteerib täpselt sellepärast, et avatud-otsaline elitsitatsioon toimib halvasti.
- **Puudub meeldeTuletuS respondendi tegelikuSt eelArvePiirangust.** Selle puudumiSel ületab stated WTP korrapäraselt sellE, mida samad inimesed maksaksid, kui reaalne eelArve-trade-off on mängus — hüpoteetiline kallutatuS.
- **ManustamiSE-efektide ignoreerimine.** Sama kaup, väärtustatud üksi versus osaleT suuremaSt bundliSt, toodab erinevaid WTP hinnanguid; raporteeri, mis muu, kui üldse, oli uuringu raami sees.
- **Üheainsa uuringu punktHinnangu käsitlemine lahendatuNa.** Green Booki praktika eeldab vahemikku ja diskussiooni teadaolevateSt kallutatuSteSt, mitte paljaSt numbriSt, mis kantaKse edasi kulu-kasu-tabeliSSE, kui oleks see turuHind.

## Allikad

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
