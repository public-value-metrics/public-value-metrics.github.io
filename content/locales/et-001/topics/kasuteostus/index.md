# Kasuteostus

KasuTeostuSE-haldus on distsipliin identifitseeriMaKs, baasJoonisTaMaKs, jälgiMaKs, ja *tõendaMaKs*, et äriJuhtumis lubatud kasud tegelikult materialiseeruSid pärast go-live'i. Ühendkuningriigi avalikus investeeringus elab see HM Treasury Green Book Five-Case Model ja Infrastructure and Projects Authority (IPA) dedikeeritud kasuHalDuSe-juhendi sees; ühEta sellEta jääb "süsteem säästiS juhtumitöötaJatele kolmkümmend minutit nõuDe kohta" audiTeerimaTa väideKs igavesti.

## Miks see on oluline

ÄriJuhtumid on lubadused; kasuteostus on audiT. Green Book nõuab, et iga kulutuS-juhtum läbib viis testI — strateegilinE, majanDusLik, kommertsLik, finantsiline, ja juhtimislik — ja juhtimis-juhtum peab sätestama, kuidas kasud realiseeritaKse *enne kinnitust*: omanikud nimetatuD, baasJoonEd fikseeritud, ja mõõtmise-kuupäevad kinnitatuD. Infrastructure and Projects Authority juhend, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), eksisteerib, sest IPA oma portfelli-raporteerimine Government Major Projects Portfolio'l on korDuvalt leidnud tarne-usalduSe ja kasuTeostusE tsiteeritud korDuvaD nõrkusEDeNa üle major-programmide. Projekt saaB sulgeDa "õigeAegselt ja eelArve-sisel" vastu selle tarne-miiLikiviDeLe, samal ajal, kui see ikka ebaõnnestub realiseerimaS kasud, mis õigustasiD raha kulutamist esialgu — distinktsioon, millE IPA juhend käsitleb distsipliini kogu pointiNa.

## Arvutus

```
RealiseerimiSe-määr = realiseeritud kasud / prognoositud
                     kasud (kasu kohta, perioodi kohta)

MehhAaniKa, mis muudab selle arVutataVaKs:
  baasJoon fikseeritud ENNE go-live'i (muidu on delta
  mõõDetaMAtu)
  igA kasu: nimetatud omanik, mõõdik, andmeAllikas,
  mõõtmise-skeeM
  prognoos kohandatuD optimismi-biasiLe kinnitusel (Green-
  Book-mandaat)
  kasud klasseFitseeritud kontant-vabastav/kapatsiteet-
  vabastatuD/kvalitatiivne, jälgituD ja raporteeritud eraldi
```

## Läbitöötatud näide

**Kohalik omavalitsus**: digitaalse planeerimiSTaotluSe-portaali äriJuhtum lubaS, aastas: £300 000 printimiSe- ja postituSe-üldKulu-vähenemiST (kontant), 4500 officeri-tunDi vabastatuD (kapatsiteet), ja paranenuD taotleja-rahulolu (kvalitatiivne). Kaksteist kuud post-go-live:

```
Kasu              Prognoos    RealiseeritUD  Määr  Tõend
Kontant-säästud   £300 000    £210 000       70%   finants-
                                                   raamatuPida
                                                   mine vs.
                                                   baasJoone-
                                                   aasta
OfficerI-tunDid   4500        3200           71%   aja-
                                                   liikumise-
                                                   sample
Rahulolu          +8pp        +11pp          138%  taotleja-
                                                   uuringu-
                                                   andmed

Tegevused läbiVaateST (kasuteostuse point):
kontant-puudujääk jälgituD kahe teenuse-alani, mis veel
töötlevaD paberI-taotlusi erandiKorraL → sulge erandi-tee;
järgmise äriJuhtumi optimismi-bias-korrektsioon tõstetuD
10%-St 25%-le, baseeruDes selle juhtumi prognoosi-veaL.
```

70% realiseerimiSe-määr ei ole ebaõnnestumine — see on teadmine, mis laseb järgmist prognoosi kalibreerida paremiNi. MõõtmaTa juhtum oleKs väitnuD 100% igavesti, ja finans-meeskonDal ei oleKs olnuD aluSt selle challengiMiSeKs.

## Seos tarkvaraarendusega

InseneriOrganisatsioonid kinnitavaD rutiinselt platVormi- ja riista-investeeringuid prognoositud kasul ja peaaegu mitte kunagi auditeeriVaD neid pärastpoolE — täpselt see patoloogia, millE paranDamiSeKs kasuteostus-haldus eksisteerib. KergeKaaluliNe port: igA ettepanek üle materiaalsuSE-tärskli nimetab kasu-omaniku, baasJoonE-mõõdiku, ja fikseeritud läbiVaate-kuupäeva (tüüpiliselt kuus kuuD post-go-live), ja realiseerimiSe-määraD varaseMaTeST ettepanekuteST peaksid rabatEerimA, kui palju organisatsioon usaldab meeskonna või tarnija järgmist prognoosi. See sulgeb loopi tagasi [Green-Book-hindamiseSSE](../green-book-hinnang/), mis seaB prognoosi, millE see distsipliin auditeerib, ja see on sama loogika laialDaseLt raporteeritud fundI taga, et suuR majoriteet generatiivSE-AI-piloodideST näitab mitte mingit mõõdetAvat tulu — vaata [AI-produktiivsuS avalikuS sektoriS](../ai-produktiivsus-avalikus-sektoris/) — sest piloodid, mis *tegeliKult* tagastasiD väärtust, oliD peaaegu eranditutA need nimetatuD, jälgitaVaGa kasu-reaGa algusest peale. See sõltub ka eristamiSeST, mis tegelikult tarnituD, sellest, mis tegelikult realiseeritud — vaata [tulemused versus väljundid](../tulemused-versus-väljundid/).

## Lõksud

- **Puudub pre-go-live-baasJoon.** Fataalne, parandamatu väljaJätmine — selleTa ei saaB mitte kunagi arVutada realiseerimiSe-määra, ainult väitA.
- **Kasu-vallaslaPsus.** Kasul ühEta nimetatuD omaniKuTa ei ole keegi, kes koguB andmeid, ja igA portfelli-läbiVaade raporteerib selle vaikimisi "broadly on track'iNa."
- **TopeltLoenDatuD kasud üle programmI-portfelli.** Kaks projekti, mis mõlemad väidaVaD sama vabastatuD juhtumitöötaja-kapatsiteedi kasuKs — hoia üksik kasu-register üle portfelli, et püüDa seda.
- **RealiseerimiSE-teatEr.** LihtsateD kvalitatiivseD võidud mõõdetuD ja raporteeritud väljaPaistvalt, samal ajal, kui kontant- ja kapatsiteedi-ridaD jäävaD vaikselt uUritaMatA.
- **TarnE segiAjamine realiseerimiSeGa.** Projekt, mis sulgeB oma miiLikivid "õigeAegselt ja eelArve-sisel," ütleb mitte midagi selle kohta, kas prognoositud kasu tegelikult kunagi juhtuS — IPA juhend käsitleb need kaks eraldi küsimuseKs kahEGa eraldi tõendi-rajaGa.

## Allikad

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
