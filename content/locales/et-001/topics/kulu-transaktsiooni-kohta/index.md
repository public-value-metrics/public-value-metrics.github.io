# Kulu transaktsiooni kohta

Kulu transaktsiooni kohta on pealKirjaLinE ühikuEkonoomikA-mõõdik statslikuLe digiTeenuseLe: koGu kulu kanali tarnimiSeKs, jagatuD lõpetatud transaktsioonide arvuGa. See oli flagship-figuur vanAl GOV.UK Performance Platform'il, ja see on numbEr, mis rahastaS dekaadi "digitaalne-vaikimisi"-investeeringut — mis on täpselt, miks see on ka mõõdik, mida kõige sagedamini manipuleeritaKse.

## Miks see on oluline

Cabinet Office'i 2012. aasta Digital Efficiency Report pani kanali-kulu-võrdluSe termineiS, mis jäivaD kleePuma: digiTaalseD transaktsioonid leiti maksvaD ligikaudu 20 korda vähem kui telefoni teel ja ligikaudu 50 korda vähem kui näost-näGu sarnasteLe kohalikuLe-valitsuSe-teenustEle, illustratiivseteGa numbriteGa ligikaudu £0,15 web-transaktsiooni kohta vastu £2,83 telefoni teel ja £8,62 näost-näGu. See üksik võrdlus saiS õigustamiSeKs 25 näidisteenusELe nimetatuD Government Digital Strategy's ümber-disainimiSeKs, ja igALe osakondliKuLe äriJuhtumiLe, mis on tsiteerinud kanalivahetuSE-säästEt sellest ajaST. FiguUr on genuinely kasulik suurusJärgu-signaaliKs, kuid suhe sõltub täielikult sellEst, mis loetakse kummalgi poolel: aus telefoni-kanali-kulu sisaldab callCentri personaLi, telefoni-lepingut, treeningut ja pindA; aus digiTaalne kulu sisaldab hostimiSt, jooksvaid toote-meeskonna-palki, support-desk-aega ebaõnnestunud teekondadeLe, ja assisteeritud-digiTaalsE kanali, mida nõuab [digitaalne teenusestandard](../digitaalne-teenusestandard/) punkt 5. EemaLDa piisavalt neist digiTaalseLt poolelt ja mistahes teenus näeb odav välja.

## Arvutus

```
Kulu transaktsiooni kohta = koGu allokeeritud kanali-kulu /
                            lõpetatud transaktsioonid

KoGu allokeeritud kanali-kulu peaks sisaldaMa:
  + hostimine ja infrastruktuur
  + produkti-/inseneri-/support-meeskonna-kulu (amortiseeritud)
  + sisu- ja teenuse-disaini-kulu (amortiseeritud)
  + assisteeritud-digiTaalsE/ligiPääsetAvuSE-toe-kulu
  + ebaõnnestumisE-nõudlusE-kulu (kasutajad, mis ebaõnnestuvaD
    digitaalselt ja langevaD tagasi telefoniLe)
  − ühekordne ehitusKulu amortiseeritaKse eeldatud teenuse-
    elueA üle, ei kuluTataKse täielikult esimesEl aastal

Levinud raamatuPidamiSE-trikK:
  "Marginaalne kulu transaktsiooni kohta" (ainult hostimine,
  kord ehitatud) tsiteeritaKse, kui oleKs see "keskmine kulu
  transaktsiooni kohta" (koGu kulu sealhulgas meeskond, mis
  jätkab sellE ehitamist ja käitamist). Need kaks saaVaD
  erineda 10x või rohkem teenuSeLe suurE, aktiivse tarne-
  meeskonnaGa.
```

## Läbitöötatud näide

**Sõiduki-maksu-uuendamiSe-teenus**: 4 miljonit transaktsiooni/aastas.

```
Ainult-marginaalne figuUr (trikK):
  Ainult hostimine + makse-töötlemine = £180 000/aastas
  Kulu transaktsiooni kohta = 180 000 / 4 000 000 = £0,045
  → pealKirjaFiguUr tsiteeritud äriJuhtumis

TäielikuLt-laetud figuUr (aus üks):
  Hostimine + maksed                     £180 000
  Produkti-/inseneri-meeskond (8 FTE)     £720 000
  Support-desk (ebaõnnestunud/küsituD
  transaktsioonid)                        £310 000
  AssisteeritUD-digiTaalnE telefoniLiiN    £140 000
  Total                                   £1 350 000
  Kulu transaktsiooni kohta = 1 350 000 / 4 000 000 = £0,3375

TäielikuLt-laetud figuUr on ikka ligikaudu 8x odavaM, kui
£2,83-telefoni-kanali-võrdlusObjekt Digital Efficiency
Reportist — reaalne ja kaitstAv sääst — kuid 7,5x kõrgeM, kui
ainult-marginaalne figuUr tsiteeritud lühenDatud versioonis.
Mõlemad numbrid on "tõesed"; ainult üks on võrreldAv telefoni-
kanali-kuluGa, mille vastu see on sEaDuD.
```

## Seos tarkvaraarendusega

Kulu transaktsiooni kohta on, kus arhitektuuri-otsused saavaD finants-numbriKs: teenus, mis skaleerub puhTalt automaatSelt ja vajab vähe manuaalSet interventsiooni, viib sellE figuuri allA aja jooksul; üks, mis genereerib kõrgE support-ticket-volümeni segadusTekitaVaTeST vea-olekuTeST, viib selle ülES, hoolimata hostimisE-efektiivsuSeST. See on loomulik kaasnev mõõdik [digitaalseLe teenusestandardile](../digitaalne-teenusestandard/) punkt 10 ("defineeri, mis edu näeb välja nagu, ja avalda jõuDluSe-andmed"), ja [teenuseStandardideLe ja transaktsiooni-mõõdikuteLe](../teenusestandardid-ja-transaktsioonimõõdikud/), mis sätestab fulleMa KPI-setti, mille sees see figuur istuB. See toidab ka otse [kanalivahetuSE-säästuDe](../kanalivahetuse-säästud/)-arvutuSSE ja peaks olema forEenitud vastu [koGu-omandiKulu valitsuse IT-s](../koguomandikulu-statslikus-it-s/), nii et platVormi- ja jagatuD-teenuse-üldKulud mitte vaikselt kaotataKs.

## Lõksud

- **Marginaalne kulu riietatuD keskmiseKs kuluKs.** AinultHostimiSe-kulu tsiteerimine, kord kui teenus on ehitatud, väljaJättes jooksvA meeskonna, mis hooLDab, itereerib ja suPordib sedA — vaata läbitöötatud näide üleval.
- **Assisteeritud-digiTaalsE kulu väljaJätmine.** Kanal ei ole "digitaalne-vaikimisi"-compliant, ja selle tõeline kulu ei ole jäädvustatud, kui telefoni-/paberi-fallback, mida nõuab [digitaalne kaasatuS](../digitaalne-kaasatus/), on kulu-arVestatuD eraldi või ignoreeritud.
- **EbaõnnestumisE-nõudluSe ignoreerimine.** Transaktsioonid, mis alustaVad digitaalselt ja ebaõnnestuvaD, genereeriDes telefoniKõne või paberIVormi uanset, on digiTaalsE kanali kulu, ei kanali, mis püüAb ebaõnnestumise.
- **Erineva kompleksSuSeGa transaktsioonide võrdlemine üle kanaliTe.** TelefoniKõned käsitlevaD disproportsionaalSelt raskeId juhtumeid (mitmeD ülalPeetavaD, veaKorrektsioon, vulnerabEl taotlejaD); keskmiSE telefoni-kulu võrdlemine keskmiSE digiTaalsE kuluGa üleHindab suhet, vÄlja arvaTud juhul, kui transaktsioonI-miks on sobitatud.

## Allikad

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
