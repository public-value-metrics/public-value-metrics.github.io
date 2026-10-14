# Viivituse kulu avalikes programmides (CoD)

ViivituSE kulu on avalik väärtus, mis on kadunuD ühikuLe aja kohta, mille vältel programm, teenus, või süsteemI-muudatus *ei ole veel* tarnitud. See on peakoNtroller-mõõdik sellE peatükiS: see konverteerib "go-live liBiseS kuuT kuuT" naelaKs nädalaS, või WELLBYdeKs nädalaS, nii et viivitust saaB arutada samAs valuutaS, kui äriJuhtum ise.

## Miks see on oluline

Reinertsen'i reegel — "kui mõõdad ainult üht asja, mõõda Viivituse Kulu" — reisib valitsuSeSSE peaaegu muutumaTa, sest avalikud programmid on ebatavaliSelt eksponeeritud selleLe: äriJuhtumid kinnitataKse prognoositud kasu-vooGu vastu, kuid vooG hakkab voolaMA ainult go-live'il, ja igA nädal libisemiST on nädal kadunuD väärtuST, mida keegi riski-registriS ei prisSetA. National Audit Office'i korDuva granskuMisE Universal Credit'i käiVitamiSeSt (vaata selle "Rolling Out Universal Credit"-raporteid, <https://www.nao.org.uk/>) illustreerib mustrit: ajaKava-libisemine oli jälgituD ja raporteeritud, kuid £-nädalas-kulu sellest, et *ei veel tarnida reformeeritud süsteemi järgmiseLe kohorDiLe taotlejateST, oli harva angtuD pealKirja-figuuriNa, kuigi see on numbEr, mis peaKs olnuD vedaMas prioriteedi ja eskalatSiooni. ÜheTa CoD-figuuriTa näeb viivitatud programm välja, kui ajaKava-probleem tarne-haldUsEle; üheGa näeb see välja, kui väärtuST-erosiooni-probleem raamatuPidamisE-ametnikuLe.

## Arvutus

```
CoD = kasu ühikuLe aja kohta, mis on kadunuD, kuni
     tarnimaTa (£/nädal või WELLBYd/nädal)

KoGu viivitusE-kahju = CoD × viivitusE-kestvus

KasuVooD, mida summeerida avalikuTeLe programmidELe:
  kontant-vabastavaD säästud   (pettuse/vea vähendamine,
                                väldituD ajutiseD kulud)
+ mitte-kontant-kapatsiteet vabastatuD  (juhtumitöötaja-/
                                officeri-tunDiD × laetuD
                                kulu)
+ heaolu-kasu                 (WELLBYd × £13 000/WELLBY, HMT
                                Green-Book-heaolu-täiendav-
                                juhend, 2019-hinnad)
```

KodanikuLe-vendaTuTeLe teenustELe, denominEeri heaoluS nagu ka raHaS — vaata [heaolu-kohandatuD eluaastaD](../heaolu-kohandatud-eluaastad/) alusOleva ühikU jaoks, ja [alternatiivkulu avalikes kulutustes](../alternatiivkulu-avalikes-kulutustes/) selle jaoks, mida viivitatud nael oleKs muidu saaNud rahastaDa.

## Läbitöötatud näide

**Kohalik omavalitsus**: eluasemeToetusE-süsteemI uuendus kärbib üleMaksu-vigA £150/nõuDe/aastas üle 20 000 live-nõuDe.

```
Aastane kasu = 150 × 20 000 = £3 000 000/aastas
CoD = 3 000 000 / 52 ≈ £57 700/nädal
12-kuuLinE implementeerimiSE-viivitus maksab 52 ×
57 700 ≈ £3 000 000 väldiTavaS vigAS.
```

**Keskvalitsuse agentuur**: puudE-toetuSE-hindamiSE-teenus, tarnituD kuus kuuD (26 nädalaT) hiljem, kui planeeritud, tähendab, 200 000 taotlejaT/aastas ootaVaD keskmiselt kolm nädalaT kauemiNi otsuSeLe. IgA ekstrA-nädal finantsiliSeST ebaKindluSeST modelleeritaKse −0,0018-WELLBY (eluRahulolu-punkt) efektiKs:

```
WELLBY-kadu taotleja kohta = 3 × 0,0018 = 0,0054
Aastane WELLBY-kadu = 200 000 × 0,0054 = 1080 WELLBYd/aastas
CoD_heaolu = 1080 / 52 ≈ 20,8 WELLBYd/nädal
CoD_raha = 20,8 × £13 000 ≈ £270 000/nädal heaolu-väärtust
```

26-nädaliNe viivitus "maksab" seetõttu roughLy 540 WELLBYd — väärT ligikaudu £7 miljonit Green Booki heaolu-väärtuStamiseS — omaRAamiDes missed go-live-dato kodaniku-heaolu-sündmuseNa, ei projektiHalduse-märkuSeNa.

## Seos tarkvaraarendusega

CoD on, mis muudab [DORA-mõõdikud](../dora-mõõdikud-avaliku-väärtuse-jaoks/) ja [flow-mõõdikud](../flow-mõõdikud-statslikus-tarnes/) finantsiliSelt loetavaKs: lead-time pipeline'is × CoD on raha (või heaolu) põlenuD jäRJekorraDes, enne kui see jõuab kodanikuNi üldSe. Konkreetselt:

- **PrioriseerimiNe**: rangjasta backLog CoD ÷ kestvuSe järGi, ei sidusgruPi-seniORsuse järGi — tarkvaraInseneri-analoog Green Booki nõudeLe hinnata variante väärtuSeL, ei selleL, kes küsib.
- **Hankimine**: 12-18-kuuLinE raamistikU-hankimiS-tsükkel oMab CoD; selle prisSetamine muudab urgentsus-casei kiirendaTuDeLe teeDeLe, ja annab sisendi otse [ehita-versus-ostA](../ehita-versus-osta-valitsuses/)-otsusteSSE, kus aeg-väärtuseNi on otsuSE-driver.
- **KasuCase**: igA CoD-figuur tsiteeritud kinnitusel peaks ilmuMa uuesti [kasuteostuSeS](../kasuteostus/) — kui viivitusE-kulu oli reaalne, peaks kiirendatuD kasu olema mõõdetav pärast go-live'i.

## Lõksud

- **Lineaarse CoD eeldamine.** Mõned avalikud teenused oMavaD deadline-kujuLiSt väärtust (statutoorNe compliance-kuupäev — CoD hüppab enforcement-risk-tasemeTeLe pärast kuupäeva, ligi nulliLe enne) selle asemel, kui sujuva nädalaSe määra; klasseFitseeri urgentsus-profiil, enne kui multiplitseeriD.
- **CoD väljundiTel, mida keegi ei vaja.** Viivitusel on kulu vaid, kui tarnimaTa asi oMab väärtust; süsteem, mida keegi ei kasuta, oMab nulli CoD, ükskõik, kui hiline see on.
- **Viivituse ja diskonteerimise topelt-arvestamine.** [SotsiaalnE diskontomäär](../sotsiaalne-diskontomäär/) juba prisSetab aega multi-aastaseL hindamise-horisondil; CoD on sisE-horisondi, operatiivne versioon nädalateKs ja kuuDeKs. Kasuta CoD'd ajaKava-libisemiseKs, NPV-nihet multi-aastaseKs reFaseerimiSeKs.

## Allikad

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
