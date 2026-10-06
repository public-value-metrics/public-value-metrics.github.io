# Logiline mudel

LogiLine mudel on lineaarne diagramm, mis ühendab sisendid, tegevused, väljundid, tulemused, ja mõju programmiLe, loetuD vasakuLt paremaLe vastutusAhelaNa: ressursid lähevad sisse, tegevused toimuvad, väljundid toodetakse, tulemused muutuvad kasusaajateLe, ja mõju päLöub laiemaL või pikeMal ajaSkaalal. See on standardStruktuur, mida rahastajad ja audiitorid eeldavad, et programm oleks selle vastu raporteeritaV, ja edasi-suunatuD vastE tagasi-kaardistatuD [muutuSe teooriaLe](../muutuse-teooria/).

## Miks see on oluline

HM Treasury Magenta Book spetsifitseerib logiLisE mudeli kui nõutuD elemendi programmHindamisE disainiL, ja rahastajad nagu National Lottery Community Fund ehitavad oma taotluS- ja raporteerimis-mallid täpselt sellE viie-veergu ahela ümber. Selle väärtus on, et see sunnib programmi angma, ühes diagrammiS, mida see kulutab, mida see selleGa teeb, mida see toodab, ja — kriitiLiselt — mis peaks selle tulemuseL muutuma, spetsiifilisuseAstmeL, mida proosaLõik kipuB varjama. LogiLine mudel, millel on täiDetud sisendite ja tegevuste veerg, kuid tühi või hägus tulemuste veerg, on diagnoositav pilguGa, mis on täpselt, miks rahastajad küsivad seda.

## Arvutus

LogiLine mudel on struktuuriLinE ahel, mitte formula:

```
Sisendid       Tegevused       Väljundid         Tulemused            Mõju
(kohustatuD    (mis neiga      (otseseD,         (muutus              (pikaAjalinE,
 ressursid)     tehakse)        loendatavaD       kasusaajaDeLe)        populatsiooni-
                                 toodetE)                                tasandi või
                                                                         süsteemne
                                                                         muutus)
```

Igal veerul peaks olema spetsiifilisEM kui eelmiseL: sisendid on see, mida kulutad, tegevused on see, mida teed, väljundid on see, mis tarnitakse efektist sõltumata, tulemused on see, mis muutub selle tulemuseL — distinktsioon kaetud täielikult [tulemustes versus väljundites](../tulemused-versus-väljundid/) — ja mõju on vastupidav, sageli vaid-osaLiselt-omistaTaV, pikaAjalinE muutus.

## Läbitöötatud näide

**Kohalik omavalitsus (digitaalne võlaNõustamisE teenus)**:

- Sisendid: 180 000 £ aastane eelArve, 4,0 FTE nõustajat, juhtumiHaldusSüsteem.
- Tegevused: outreach-sessioonid, üks-ühele-võlaNõustamisE kohtumised.
- Väljundid: 900 kohtumist tarnitud; 750 võla- ja toetusPlaani väljaStatuD.
- Tulemused: klientidest, kes jõuavad 6-kuuLiSeNi jälgimiSeNi, 60% (450 750-st) raporteerivad vähendatud võlgA, keskmiselt 1200 £ vähenemine kliendi kohta — 540 000 £ agregeeritud võla-vähenemiNe.
- Mõju: mõõdetav langus kodutuSe-taotlusteS teenuse klienDiBaasiSt üle kahE aasta, vaid osaLiselt omistataV sellele teenuSeLe koos muudeGa interventsioonideGa (vaata [kontrafaktuaalne analüüs](../kontrafaktuaalne-analüüs/)).

**Heategevusorganisatsioon (toidupanga-suunamise-partnerlus)**:

- Sisendid: 45 000 £, 1,5 FTE koordinaatorit, partnerluSLepingud 12 suunamisAmetiGa.
- Tegevused: suunamise-triaazh, pakeTIde pakkimine ja levitAmine.
- Väljundid: 5000 toiduPaketi levitatuD 1100 leibkonnaLe.
- Tulemused: 68% uuritud leibkonDADeSt (748 1100-st) raporteerivad parandatuD toiduKindlustatuSe 4-nädalaseL jälgimisKõneL.
- Mõju: panus vähendatuD kohaliku-kriisiteenuse-nõudluSeSSE, tõendatuD ainult agregeeritud ala-statistikaS, mitte omistataV ainult sellele heategevusorganisatsioonile.

## Seos tarkvaraarendusega

LogiLine mudel on lähedal literAalseLe andmeMudeliLe tulemusteSüsteemiLe: sisendid ja tegevused on operatiivsed andmed, mida juba omad (kulutus, personal, sessiooniLogid); väljundid on lihtsad instrumenteeriDA, sest need loendatakse tarne-punktiS; tulemused vajavad sihilikult disainitud jälgimiS-andmete-kogumist (uuringud, administratiivsE-andme-sidumine), mida ei eksisteeri, kui keegi ei ehita seda; mõju vajab tavaliselt sidutud, longitudinaalseid, või populatsiooni-tasandi andmeid väljaspool mistahes ühE programmi süsteeme. Insenerid, kes ehitavad raporteerimisRiistaD, peaksid lükkama tellijaid defineerima tulemuse- ja mõju-indikaatoreid disaini-ajaL, selle asemel, et vaikimisi minna väljundeiD-ainult-dashboardi suunas, sest see on, mida transaktSiooniline andmestik juba toetab. Vaata [sotsiaalne tulu investeeringult](../sotsiaalne-tulu-investeeringult/) meetodiKs, mis väärtustab tulemus- ja mõju-veerge spetsiifiliSelt, ja [kasuteostuS](../kasuteostus/) jälgimiSeKs, kas mõju-veerg tegelikult tarnitud.

## Lõksud

- **Väljunditeja peatumine.** Dashboard, mis raporteerib tarnitud kohtumiSi või levitatud pakeTE, ja implitseerib kasu, raporteerib tegevuSt, mitte tulemusi — vaata [tulemused versus väljundid](../tulemused-versus-väljundid/).
- **Puudub väidetud põhjusLik seos veergude vahel.** LogiLine mudel sätestab ahela, kuid mitte, miks tegevused peaksid tootma väljundeid, mis peaksid tootma tulemusi; see ratsionaal kuulub [muutuSe teooriaLe](../muutuse-teooria/), ja logiLine mudel selleTa taga on testimata.
- **Selle käsitlemine ühekordse taotluS-dokumendiNa.** LogiLised mudelid, mis on toodetud ainult rahastuS-taotluSe rahuLdamiSeKs ja mitte kunagi uuendatud, lõpetavad peegeldamisE sellE, mida programm tegelikult teeb.
- **Omistamise-kreep mõju-veeruS.** Populatsiooni-tasandi muutuSe väitmine, mis on põhjustatud ainult üheST programmiST, kontrafaktuaaliTa, ülehindab, mida tõendid toetavad.

## Allikad

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
