# Value for Money (VFM)

Value for money on Ühendkuningriigi avaliku sektori formaalne test selle kohta, kas kulutamine saavutab parima võimaliku kulu ja kasu tasakaalu. HM Treasury Green Book raamistab selle kolme "E"-ga — economy (säästlikkus), efficiency (efektiivsus), ja effectiveness (tulemuslikkus) — kusjuures equity (õiglus) on vaieldav neljas E. Iga avaliku sektori äriJuhtum, mis läbib kontrolli, peab vastama kõigile kolmele selgeSõnaliselt, mitte lihtsalt väitma, et kulutus on "väärt".

## Miks see on oluline

VFM ei ole sünonüüm "odavale". Green Book (HM Treasury, 2022. aasta väljaanne) on selgeSõnaline, et madalaima kuluga variandi ostmine (economy) kontrollimata, et see toodab kavatsetud tulemusi (effectiveness), on tavaline ja kulukas viga — hankimine, mis säästab 10% ühikuKulust, kuid annab 40% vähem mõju, on halvem väärtus, mitte parem. KolmE-raamistik sunnib äriJuhtumit eraldama kolm tegelikult erinevat ebaõnnestumisMustrit: sisendite eest liiga palju maksmine, sisendite raiskamine väljunditeks konverteerimisel, ja väljundite tootmine, mis ei konverteeru tulemusteks, mida keegi tahtis. Ühendkuningriigi valitsuse kulutusKontrollid — Treasury kinnitusPunktid, National Audit Office (NAO) value-for-money-uuringud, ja osakondlikud raamatupidamisAmetnike hinnangud — on ehitatud selle kolmeosalise testi ümber, nii et inseneriÄriJuhtum, mis käsitleb ainult kulu (economy), ebaõnnestub kontrollis, isegi kui tehnoloogia on usaldusväärne.

"Neljas E", equity, on vaieldav täpselt seetõttu, et see võib konfliktida teiste kolmega: kõige efektiivsem viis teenust riiklikult tarnida on harva kõige õiglasem, kuna tarne koondamine seal, kus kodanikke on odavaim jõuda, tähendab sageli raskeminiJõutavate alaTeenindamist. Green Booki 2020. aasta revisjon reageeris kriitikale (sealhulgas 2020. aasta Treasury Select Committee'lt ja IPPR North'ilt), et puhtad kulu-kasu-suhted soosivad süstemaatiliselt juba jõukaid piirkondi, nõudes, et hinnangud käsitleksid jaotuslikku mõju selgeSõnaliselt — vaata [jaotuslik kaalumine](../distributional-weighting/).

## Arvutus

VFM ei ole üks suhtarv, vaid kolmeosaline (või neljaOsaline) diagnostika, mida rakendatakse järjestikku:

```
Economy (säästlikkus): Ostetakse sisendeid madalaima mõistliku
                        kuluga vajalikule kvaliteedile? (£ sisendi
                        ühiku kohta)

Efficiency (efektiivsus): Kui hästi konverteeritakse sisendid
                          väljunditeks? (väljundid / sisendid,
                          nt töödeldud juhtumid juhtumitöötaja-
                          tunni kohta)

Effectiveness (tulemuslikkus): Toodavad väljundid tegelikult
                                kavatsetud tulemusi? (saavutatud
                                tulemused / kavatsetud tulemused)

[Equity (õiglus)]: On kulud ja kasud jaotatud õiglaselt elanik-
                    konna vahel, või koondunud kõige vähem
                    vajavatele?
```

VFM-ebaõnnestumine võib esineda igas etapis sõltumatult: säästlik hankimine ebaefektiivse tarnega; efektiivne vale väljundi tarne; efektiivsed tulemused ostetud liigse kuluga. Vaata [avaliku sektori KPId](../public-sector-kpis/), kuidas need teisenevad mõõdetavateks indikaatoriteks, ja [kuluefektiivsuse analüüs valitsuses](../cost-effectiveness-analysis-in-government/) formaalse võrdlusMeetodi jaoks.

## Läbitöötatud näide

**Kohaliku omavalitsuse kontaktKeskus**: linnavalitsus võrdleb kahte varianti uue juhtumiHaldusSüsteemi jaoks.

- *Variant A*: 600 000 £ litsents (odavaim saadaval), kuid agendid kulutavad siiski keskmiselt 22 minutit juhtumi kohta, sest töövoog nõuab käsitsi uuesti sisestamist süsteemide vahel — efektiivsus on kehv.
- *Variant B*: 900 000 £ litsents, integreeritud töövoog, agendid kulutavad keskmiselt 9 minutit juhtumi kohta.

Economy üksi soosib A-d (300 000 £ odavam). Kuid 40 000 juhtumi/aastas juures maksab A 40 000 × 22/60 = 14 667 personaliTundi; B maksab 40 000 × 9/60 = 6 000 personaliTundi. Täielikult koormatud personaliKulu 28 £/tund juures maksab A 410 667 £/aastas personaliAjas versus B 168 000 £/aastas — 242 667 £/aastane efektiivsusLünk, mis ületab 300 000 £ eelKuluErinevuse 14 kuu jooksul. VFM soosib B-d, kui efektiivsus arvesse võetakse, mitte A-d.

**Heategevuse tarneToetus**: rahastaja võrdleb 50 000 £ toetust, mis saavutab 200 edukat töökohtPlaceerimist (250 £/placeering — ilmselt suurepärane economy), 120 000 £ toetusega, mis saavutab 350 placeeringut, mis püsivad üle 12 kuu, versus esimese toetuse placeeringud, millest pooled lõpevad 3 kuu jooksul. Effectiveness — kestvad tulemused — pöörab ilmse VFM-järjestuse: tegelik kulu *kestva* placeeringu kohta on 250 £ ÷ 0,5 = 500 £ esimese toetuse jaoks, versus 120 000 £/350 ≈ 343 £ teise jaoks.

## Seos tarkvaraarendusega

VFM annab inseneriMeeskondadele distsipliini tehnoloogiaÄriJuhtumite raamistamiseks viisil, kuidas finants- ja audiitorFunktsioonid neid tegelikult loevad:

- Esita economy, efficiency, ja effectiveness eraldi ridaPunktidena äriJuhtumis, mitte üks segatud "väärtuse" number — Green Bookile koolitatud retsensent küsib täpselt sellist lahtiJaotust.
- Hoia kurjast hankimiskulu (economy) optimeerimisest integratsiooni ja töövoo efektiivsuse arvelt, väga tavaline vale sääst valitsuse IT-s (vaata [omandiKulu valitsuse IT-s](../total-cost-of-ownership-in-government-it/) ja [ehita versus ostA valitsuses](../build-vs-buy-in-government/)).
- Effectiveness nõuab tulemusAndmeid, mitte ainult väljundiLoendust — ühenda tarneMõõdikud [tulemustega versus väljunditega](../outcomes-vs-outputs/) ja tegelikule hindamisele [kontrafaktuaalse analüüsi](../counterfactual-analysis/) kaudu, mitte eeldades, et väljundid tähendavad tulemusi.
- Kui süsteem teenindab ebaühtlaselt piirkondade või demograafia lõikes, on õigluseKüsimus legitiimne VFM-vastuväide, mitte eraldi "oleks tore" — vaata [digitaalne kaasatus](../digital-inclusion/).

## Lõksud

- **VFM-i võrdSustamine madalaima hinnaga.** Economy on kolmandik (või veerand) testist; Green Book hoiatab selgeSõnaliselt "madalaima kulu" hankeReeglite eest, mis ignoreerivad efficiency't ja effectiveness't.
- **Väljundite mõõtmine ja nende nimetamine tulemusteks.** JuhtumiteLäbilaskvus (efficiency) ei ole sama kui hästi lahendatud juhtumid (effectiveness); vaata [tulemused versus väljundid](../outcomes-vs-outputs/).
- **Õigluse käsitlemine valikuliseks.** Alates Green Booki 2020. aasta uuendusest peaks jaotuslikku mõju hindama koos traditsiooniliste kolme E-ga, mitte lisatud hiljem; selle lisamine pärast äriJuhtumi kinnitamist on palju raskem kui selle lisamine algusest peale.
- **Variantide võrdlemine erinevates mahtudes normaliseerimata.** ÜhikuKohane VFM-võrdlus erinevaid populatsioone teenindavate variantide vahel peab kontrollima skaalat, muidu on efektiivsusVõrdlus mõttetu.

## Allikad

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
