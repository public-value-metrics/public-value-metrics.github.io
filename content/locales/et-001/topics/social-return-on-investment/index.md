# Sotsiaalne tulu investeeringult (SROI)

Sotsiaalne tulu investeeringult on raamistik laiA väärtuseKontseptsiooni — sotsiaalne, keskkonnaLinE, ja majanDusLinE — mõõtmiSeKs, monetiseerimiSeKs, ja arvestamiSeKs, ja selle väljendamiSeKs suhteNa investeeritud ressursside vastu, näiteks "1,44 £ sotsiaalset väärtust iga investeeritud 1 £ eest". Seda disainiti laiendaDES finantsArvestuSe loogikat tulemuSteLe, mida turg ei hinnasta, kaotaMaTa arvestuSe distsipliini: iga number SROI-s peab olema jälgitAv sidusgrupi-defineeritud tulemuSeNi, tõenDuSBaasiNi, ja selgeSõnaliseNi kohanduSeNi sellE jaoks, mis oleks juhtunud niikuinii.

## Miks see on oluline

SROI-d vedaB Social Value UK ja Social Value International, SROI-Network'i järeltulija-organid, mille "A Guide to Social Return on Investment" (2012) on veel referentsMetodoloogia. Raamistik toetub seitsmeLe printsiibiLe — kaasA sidusgruPid, mõista, mis muutub, väärtusta asju, mis loevad, inklude ainult sellE, mis on materiaalne, ei üle-väidA, ole transparentne, ja verifitseeri tulemus — ja see on printsiip viis, "ei üle-väidA," mida enamik SROI-raporteid tegelikkuseS rikuB. Suhe, mis on toodetud surnudKaalu- ja omistamisE-kohanduSte vahele jätmiseGa, ei ole SROI; see on marketing-number SROI-riietes. TarkvaraInsenerid, kes ehitavad raporteerimisRiistaD heategevusorganisatsioonideLe, sotsiaalseteLe ettevõtteteLe, või tellijaTeLe, vajavad teadmist erinevuSest, sest riist kas jõustaB distsipliini või teeb selle vahele jätmise lihtsaKs.

## Arvutus

SROI sõltub [muutuseTeooriast](../theory-of-change/), et identifitseerida, millised tulemused on ulatuses, ja väljendab need, kasutaDES sama vastutusAhelat kui [logikMudel](../logic-model/):

```
SROI suhe = Tulemuste tänapäeva väärtus / Sisendite väärtus

Protsess:
 1. Kehtesta ulatus ja identifitseeri sidusgrupid, kelle
    tulemused mõõdetakse
 2. Kaardista tulemused (muutuseTeooria, tõendatuD
    sidusgruppidEga, ei eeldatud)
 3. Tõenda tulemused ja anna neile väärtus finantsPeoxiDE
    kasutaDES
 4. Kehtesta mõju: brutoVäärtus − surnudKaal − omistamine −
    nihutamine, siis rakenda languSprotsent
 5. Arvuta SROI: mõju netoTänapäeva-väärtus ÷ sisendite
    väärtus
 6. RaporTeeri, kasuta, ja manusta — suhe on kommunikatsiooni-
    vahend, mitte lõppPunkt
```

SurnudKaal, omistamine, ja nihutamine on kaetud [täiendavuse ja surnud kaalu](../additionality-and-deadweight/) ja [nihutamise ja omistamise](../displacement-and-attribution/) all; kõik kolm eksisteerivad, et isoleerida tõeline [kontrafaktuaalne](../counterfactual-analysis/) mõju brutoTulemuSeSt.

## Läbitöötatud näide

**Kohaliku omavalitsuse tööHõiveProgramm**: aastane sisendKulu 250 000 £. KuuSKümmend osalejat liiguvad püsivaSSE tööHõiveSSE; finantsProksi tulemuSeLe (heaoluTõuS, vähendatud toetusSõltuvus, ja maksuTulu kombineeritud) on 8500 £ isiku kohta esimeseL aastaL — vaata [ühikukulu andmebaasid](../unit-cost-databases/), kust sellised proksid tulevad.

- BrutoTulemusE väärtus: 60 × 8500 £ = 510 000 £
- Miinus surnudKaal (40% oleks tõenäoliselt leidnud tööd ilma programmita): 510 000 £ × 0,60 = 306 000 £
- Miinus omistamine (30% allesJäänud muutuSeSt on muude asutuSte toetuSe tõttu): 306 000 £ × 0,70 = 214 200 £
- Aasta 2 tulemus 30% languSeGa: 214 200 £ × 0,70 = 149 940 £, diskonteeritud 3,5%/aastaS (vaata [sotsiaalne diskontomäär](../social-discount-rate/)): 149 940 £ ÷ 1,035 = 144 870 £
- Mõju koguTänapäeva-väärtus: 214 200 £ + 144 870 £ = 359 070 £
- **SROI suhe: 359 070 £ ÷ 250 000 £ = 1,44**, raporteeritud kui "1,44 £ sotsiaalset väärtust iga investeeritud 1 £ eest"

**Heategevusorganisatsioon**: 60 000 £ sõprusTeenus vähendab üksindust 80 vanemaLe inimeseLe, väärtustatud proksiGa 1100 £/isik/aastas. BrutoVäärtus 88 000 £; pärast 35% surnudKaalu ja 15% omistamist, netoMõju on 88 000 £ × 0,65 × 0,85 = 48 620 £, SROI suhe 0,81 — alla breakeven, mis on seaduspärane ja kasulik tulemus, mitte ebaõnnestumine kirja panna.

## Seos tarkvaraarendusega

SROI-kalkulaator, mis lubab kasutajal sisestada tulemuste arve ja proksi-väärtusi, kuid millel pole kohustuslikKu väljA surnudKaalu, omistamise, või ühendatuD muutuseTeooria jaoks, toodab vaikimisi inflatsioonitud suhtarve, sest kohandusTE vahele jätmine on väikseiMa taKistuse tee. Ehita distsipliin skeemiSSE: iga tulemuse-rida peaks viitama sidusgruPiLe, tõendatuD koguSeLe, finantsProksiLe selle allikaGa, ja ei-valikuliseteLe surnudKaalu-/omistamise-väljadeLe. Vaata [tulemused versus väljundid](../outcomes-vs-outputs/) distinktSiooni jaoks, millest SROI tulemuse-kaardistamine sõltub, ja [logikMudel](../logic-model/) ahela jaoks, mida riist peaks peegeldama oma andmeMudeliS.

## Lõksud

- **SurnudKaalu ja omistamise vahele jätmine.** PealKirjaSuhe nende kohandusTeta on brutoNäitaja, mitte netoMõju-näitaja, ja Social Value UK printsiibid nõuavad selgeSõnaliselt mõlemat.
- **Suhtarve võrdlemine üle organisatsioonide.** SROI suhe sõltub ulatuSeSt ja proksi-valikuteSt, mis on tehtud juhtumi-kaupa; 4:1 suhte käsitlemine ühest raportist "parema" kui 2:1 suhte teiSeSt ignoreerib, et eeldused ei ole standardiseeritud nagu finantsArvestuSe suhtarv.
- **Topelt-arvestamine kattuvateSt proksideST.** "Vähendatud üksindus"-proksi lao-tamine "parandatud mentaalne heaolu"-proksiGa sama kasusaajaDe jaoks võib topelt-väärtustada ühe alusOleva muutuse.
- **SidusgruPide-kaasamise vahele jätmine.** Printsiip üks nõuab, et tulemused defineeritaKse koos nendeGa, kes neid kogevad, mitte eeldatuNa analüütiku poolt, kes mudelit ehitab.

## Allikad

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
