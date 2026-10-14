# Green Book hinnang (viie-juhtumi mudel)

Green Book on HM Treasury kohustuslik juhend Ühendkuningriigi valitsuse kulutusEttepanekute hindamiseks ja evalueerimiseks. Selle kesksed riist, viie-juhtumi mudel, sunnib äriJuhtumit vastama viiele eraldi küsimusele — kas see on hea idee, kas see annab väärtuse, kas see saab hankida, kas see on taskukohane, ja kas see saab tarnida — mitte lõpetades kõike ühes numbris, mida minister saab lehvitades läbi lasta.

## Miks see on oluline

Iga Ühendkuningriigi keskvalitsuse kulutusEttepanek üle osakondlike volitatuD piiride peab läbima Green Booki hinnangu enne rahastamise vabastamist, ja HM Treasury Green Book Review 2020 (avaldatud pärast kriitikat, et protsess oli kallutatud vaesemate regioonide vastu, vaata <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) tihendas nõuet, et variante võrreldaks tõelise "do minimum" baasJoonega ja et strateegiline sobivus näidataks enne kui value for money üldse hinnatakse. Viie-juhtumi mudel ise eelneb Green Bookile — see pärineb Office of Government Commerce'ist standardse äriJuhtumi struktuuriNa — kuid 2022. aasta Green Book väljaanne manustab selle kohustuslikuKs vormiKs igale äriJuhtumile, mis taotleb Treasury kinnitust: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Juhtumi viieks jagamise mõte on, et ettepanek võib ebaõnnestuda igal dimensioonil sõltumata teistest. Strateegiliselt mõistlik, kuluefektiivne IT-ümberplatVormimine võib siiski ebaõnnestuda kommertsJuhtumi puhul, kui ainult üks tarnija saab seda tarnida (luues üksik-pakkumise-riski), või ebaõnnestuda juhtimisJuhtumi puhul, kui osakonnal ei ole kogemust sellise suurusega programmide tarnimisel. Üks "value for money" skoor peidab täpselt sellist ebaõnnestumisMustrit.

## Arvutus

Viie-juhtumi mudel on struktuur, mitte formula, kuid igal juhtumil on oma kvantitatiivne või tõenduslik test:

```
1. StrateegiLinE juhtum
   Tõend kulutusEesmärgist, mis on ühendatud organisat-
   siooniLise strateegiaGa.
   Test: on muutuseJuhtum üldse olemas? ("ei tee midagi"
   on alati valik.)

2. MajandusLik juhtum
   VariantideHindamine "do minimum" baasJoone vastu,
   kasutaDES sotsiaalset kulu-kasu-analüüsi või
   kuluefektiivsuse-analüüsi.
   Test: milline variant maksimeerib netoAvalikKu väärtust?
   Vaata ../social-cost-benefit-analysis/ ja
   ../cost-effectiveness-analysis-in-government/

3. KommertsJuhtum
   TuruKaasamine, hankeTee, riskiJaotus ostja ja tarnija
   vahel.
   Test: on eelistatud variant hangitav vastuVõetavaTeL
   tingimusteL?

4. FinantsJuhtum
   Taskukohasus osakondlike eelArvePiiride sees,
   rahastamisAlliKas, bilansi käsitlus.
   Test: saame me seda endale lubada, sel aastal ja igal
   järgneval aastal?

5. JuhtimisJuhtum
   HalDus, projektiPlaan, kasuteostuseKAva, riskiRegister.
   Test: suudab see organisatsioon seda tegelikult tarnida?
   Vaata ../benefits-realization/
```

MajandusLik juhtum on, kus kvantitatiivne hindamine elab: variante võrreldakse [sotsiaalse diskontomäärA](../sotsiaalne-diskontomäär/)-kohandatud neto-tänapäeva-väärtuse alusel, kasutaDES [sotsiaalse kulu-kasu-analüüsi](../sotsiaalse-kulu-kasu-analüüs/) meetodit, või, kus kasusid ei saa ausalt monetiseerida, [kuluefektiivsuse-analüüsi](../kuluefektiivsuse-analüüs-valitsuses/) või [multikriteeriumi-otsuste-analüüsi](../multikriteeriumi-otsuste-analüüs/) kaudu.

## Läbitöötatud näide

**Kohalik omavalitsus**: linnavalitsus, mis hindab 12 miljoni naela eluasemeRemontide IT-süsteemi, käitab viis juhtumit järgnevalt. StrateegiLinE juhtum: remontideJärjekord rikub statutoorse korrAlikE-koduDE standardi 18 kuu jooksul ilma interventsioonita. MajandusLik juhtum: kolm varianti kuluArVutatuD üle 10-aastase hindamisPerioodi 3,5% diskontomäärAGa (2022. aasta Green Booki standardse sotsiaalse-aja-preferentsi-määrA kohaselt) — "do minimum" (paika legacy-süsteem, NPV −4,1m£), "ostA" (COTS-platVorm, NPV +2,3m£), "ehitA" (skräddersyd platVorm, NPV +0,6m£, kui 40% optimismiKallutatuSt tarkvaraArenduse jaoks rakendatakse diskonteerimataSE kapitaliKuluSE vastu, Green Book Lisa A kohaselt). "ostA" võidab majanduslikE juhtumi. KommertsJuhtum: kaks elujõulist tarnijat eksisteerib, konkurentSiHanked on teostatavad — läbib. FinantsJuhtum: kapital saadaval Public Works Loan Board'ist, tuluKulud mahuvad keskPika-tähtajaLiSE finantsPlaani sisse — läbib. JuhtimisJuhtum: linnavalitsus on tarninud kaks võrreldAvat süsteemi viimase viie aasta jooksul — läbib. Ettepanek jätkub "ostA"-ga.

**Keskvalitsuse osakond**: ettepanek tugeva majandusliKu juhtumiGa (NPV +40m£), kuid kus ainult üks tarnija omab asjakohast akrediteeringut, ebaõnnestub kommertsJuhtumi testiS konkurentsi-pinge jaoks, sundiDES kas üksik-pakkumise-vabastuse (oma kontrolliKoormaGa) või spetsifikatsiooni ümber-disainimise turu avamiseks — majanduslik juhtum üksi ei oleks seda kunagi paljastanud.

## Seos tarkvaraarendusega

InseneriMeeskonnad valitsuse või toetuseRahastatud organisatsioonide sees näevad tavaliselt ainult majandusLikKu juhtumit, sest see on osa, mida toote- ja inseneriJuhtkonnalt palutakse õigustada ("mis on selle migratsiooni ROI?"). Kuid äriJuhtum, mis läbib Treasury või toetusKomitee, vajab kõiki viit, ja insenerid on sageli paremini-positsioneeritud inimesed vastama kommertsJuhtumiLe (saab seda tegelikult hankida, või see lukustab meid ühe tarnija proprietaarse formaadi sisse?) ja juhtimisJuhtumiLe (on meil tarneVõimekus, või sõltub see kolmest konkreetsest inimesest, kes ei lahku?). Käsitle taotlust "ainult äriJuhtumi numbrite" kohta taotluSe üheS viiendikuS tegelikust otsusest. Vaata [value for money](../raha-eest-saadav-väärtus/), kuidas majandusliKu juhtumi väljund tavaliselt kokkuVõetakse, ja [omandiKulu valitsuse IT-s](../koguomandikulu-statslikus-it-s/) finantsJuhtumi tavalise kvantitatiivse tuuma jaoks.

## Lõksud

- **MajandusliKu juhtumi kirjutamine esimesena ja strateegiliSe juhtumi kohandamine selleGa sobivaKs.** Green Book Review 2020 leidis täpselt selle ebaõnnestumisMustri, mis vedas hindamisKallutatuSt kohtade ja sektorite suunas, mis olid juba hästi-tõendatud, kinnistaDES regionaalset ebavõrdsust; strateegiline juhtum peaks kehtestama eesmärgi enne variantide võrdlemist.
- **"Do minimum" käsitlemine "ei tee midagi"-na.** Korrektne baasJoon on madalaimA-kuluGa variant, mis endiselt vastab minimaalsEteLe juriidilisteLe või turvalisuseKohustusteLe, mitte fantaasia null-kulutuSeSt — võrdlemine liteRaalse nulliGa inflatsioonib iga variandi ilmset väärtust.
- **KommertsLiku ja juhtimisliKu juhtumi vahele jätmine, sest majanduslik juhtum on tugev.** Kõrge NPV-GA ettepanek, mida ei saa hankida konkurentSi-korraS või tarnida sponsoriva organisatsiooni poolt, ei ole rahastaTAv ettepanek; Treasury retsensendid lükkavad korrapäraselt tagasi sellistel põhjustel, isegi veenva majandusliKu juhtumiGA.
- **Viie-juhtumi mudeli rakendamine üks korD, alguSeS.** Green Book nõuab juhtumi taasKülastamist igal järgneval kinnitusVäravaL (strateegiLinE visandJuhtum, visandÄriJuhtum, täisÄriJuhtum), kui kulud ja tõendid kindlustuvad — juhtum, mis on külmutatud visandi etapis, jätab vahele kuluEskalatsiooni, mille hilisem värav oleks tabanud.

## Allikad

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
