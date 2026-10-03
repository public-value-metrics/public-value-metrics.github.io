# Kanalivahetuse säästud

KanaliVahetuSE säästud on prognoositud kulu-vähenemine transaktsiooni-volümeni liigutamiSeST väljaST kuluKaTeST kanaliTeST — telefon, näost-näGu-leTid, paberI-postist — odavaKs digiTaalseKs iseTeeninduseKs. See on finantsiline mootor "digitaalne-vaikimisi" taga, ja ka äriJuhtumi ridaPunkt, mis on kõige tõenäolisemalt vale, sest eeldus, mille peal see puhkab — et offline-kanalid kahanevaD, kuna digiTaalne kasutuselevõtt tõuseb — on ainult mõnikord tõsi.

## Miks see on oluline

AritmeetikA näeb vastuVaidlemata väljA, kasutaDes [kulu-pr.-transaktsiooni](../cost-per-transaction/)-figuure Digital Efficiency Reportist: liigutA miljon transaktsiooni £8,62-näost-näGu-visiidiST £0,15-digitaalseKs üheKs, ja sääst on üle £8 miljoni. Kuid sääst saab ainult vabastatuD rahaKs genDeployamiSeKs, kui kahaneva kanali *fikseeritud kapatsiteet* on tegelikult deKommissioneeritud — callCentri koHad, leti-personal, telefoni-lepingu-minutid — ja kohaliku-valitsuse digiTaalse-transformatsiooni-programmid on korDuvalt leidnud, koGu-kontakti-volümen ei langeb vastavuSeS digiTaalseLe kasutuselevõtuLe. Uuring kohalikU omavalitsuSe digiTaalse-transformatsiooni-programmideST ja organiTeST, nagu Socitm ja Local Government Association, on dokumenteerinud korDuva mustri: digiTaalseD kanalid attraheerivaD genuinely uuT kontakti (kodanikud, kes ei oleKs helistanud või külastanud, nüüD tegeVad, sest see on lihtsaM), ja meaningful osa "digiTaalseST" transaktsioonidest ebaõnnestub poolTeeL ja genereerib telefoniKõne niikuinii — nii et telefoni-volümen langeb palju vähem kui digiTaalne-kasutuselevõtu-protsent soovitaKs, mõnikord mitte langeDes üldSe absoluutsetES termineiS, isegi kui selle *osa* koGu-kontaktiST langeb.

## Arvutus

```
Brutto kanalivahetuSE-sääst = nihutatud volümen ×
                             (kulu_vana_kanal − kulu_digitaal)

NettO (realiseeritud) sääst = brutto sääst
                       − uuS/varjU-nõudluS looduD lihtsaMA
                         kanali poolt
                       − ebaõnnestumisE-nõudluSE-kulu
                         (digiTaalseD ebaõnnestumised, mis
                         ikka genereerivaD telefoniKõne või
                         leti-visiidi)
                       − deKommissioneerimAtA fikseeritud
                         kapatsiteediE kulu (callCenter saab
                         vähendada personali ainult
                         diskreeTseteS ühikuteS; 15%-liNe
                         volümeni-langus laseb harva kärpida
                         15% personali-arvuST)

RealiseeruMiSE-tärskel: säästud on kontantMuudetavaD vaid,
kui volümen langeb allA tasemE, mille vanA kanal saab
personaliga täita oma järgmiSel-väiksemaL diskreetSel kapatsiteedi-
sammuL (nt üheS täisVahetuSe, üheS täisLetiGa, üheS
lepinguLisE-personali-arvu-vöönDi kaotamine)
```

## Läbitöötatud näide

**MaaKonna sinise-märgi-uuendamiSe-teenus**: 60 000 uuendust/aastas, varem 100% telefon/paber £6,40 transaktsiooni kohta. Uus digiTaalne teenus käivitub ja jõuaB 65% digiTaalsE kasutuselevõtuNi üheS aastaS, £0,30 digiTaalsE transaktsiooni kohta.

```
Naiivne (brutto) sääsTU-arvutus:
  39 000 nihutatud × (£6,40 − £0,30) = £237 900/aastas

Mis tegelikult juhtuS, omavalitsuse kontaktiKesKusE-andmeTE
järGi:
  Telefoni-volümen langeS 60 000/aastaST 46 000/aastaLe
  (−23%, ei −65%) sellepärast: 9000 digiTaalsEt teekonDa
  ebaõnnestuSid ja genereeriSid järel-kõne (ebaõnnestumisE-
  nõudluSE-leke), ja 4000 inimest, mis varem ei uuendanud
  üldSe, nüüD teevaD, leideS seda lihtsaKs online (varjU-
  nõudluS — genuine ligiPääsu-paranemine, kuid ei sääst)

  Telefoni-kontaktiKesKus on personaliga täidetuD 8000-kõne/FTE-
  vöönDides;
  14 000-kõne-langus (60 000 → 46 000) vabastab 1,75 FTE,
  praktikas ümardatuD allA 1 FTE-ni tegelikult uuDelTi
  deployeeritud = £34 000/aastas

RealiseeriTuD sääst = £34 000/aastas pluss digiTaalsE-kanali-
  ehituSe-/jooksutamiSe-kulu, mis on välditud 39 000
  transaktsiooniL ≈ £34 000 + (39 000 × £0,30 digiTaalne
  kulu juba loeNduD) — fraktsioon £237 900-pealKirjaST,
  kuigi teenus on ikka ühemõtteLiselt parem kasutajaTeLe.
```

## Seos tarkvaraarendusega

InseneriLektsioon on, et kanalivahetuSE säästud realiseeritaKse *operatiivseteST* otsusteST (vahetuSte-planeerimine, deKommissioneerimine, lepingu-uuesti-läbiRääkimine), ei tarnitud softwareST — meeskond saab tabada igA [digitaalseLe teenusestandardile](../digital-service-standard/) punkti ja ikka tarnida nulli-netoSäästu, kui keegi ei deKommissioneeri vana kanali fikseeritud kapatsiteeti. EbaõnnestumisE-nõudluSe instrumenteerimine (kus digiTaalseS teekonnaS kasutajad hüljavaD ja mida nad teevaD seejärel) on lahendataV trAgi-analüütikA-probleem ja üksik kõrgEima-mõjuGa asi, mida inseneriMeeskond saab teha sääsTu-juhtumi kaitsmiSeKs; see on ka otseNe link [kulu-pr.-transaktsiooniLe](../cost-per-transaction/), mida ebaõnnestumisE-nõudluS vaikselt infleerib. Vaata [kasuteostuS](../benefits-realization/) laiema distsipliini jaoks, mis kontrollib, kas äriJuhtumi säästud tegelikult maanDuvaD, ja [digitaalne kaasatuS](../digital-inclusion/) selle kohta, miks offline-kanal ei saa tavaliselt, ja ei peaks, olema täielikult deKommissioneeritud.

## Lõksud

- **1:1-kanali-substitutSiooni eeldamine.** DigiTaalsE kasutuselevõtu modelleerimine otseSe lahutuSeNa telefoni-/leti-volümeniST, ignoreeriDes varjU-nõudlust ja ebaõnnestumisE-nõudluSe-lekke, mida kohaliKu-valitsuSE-kanalivahetuSE-uuring dokumenteerib.
- **BruttoSäästuDe bookimine enne deKommissioneerimist.** SäästU loenDamine äriJuhtumis aastaL, millal kasutuselevõtt tõuseb, ei aastaL (kui üldSe), millal vana kanali kapatsiteet tegelikult kärbitaKse.
- **Personali-kulude astme-funktsiooni-loomuSE ignoreerimine.** 20%-liNe volümeni-langus konverteerub harva 20%-liSeKs kulu-languSeKs, sest kontaktiKesKused ja letid on personaliga täidetuD diskreeTseS vöönDiS, ei kontinuaalSelt.
- **VarjU-nõudluSe käsitlemine raiskamiSeNa.** Uus kontakt varem-väljaJäetuD või varem-heiDutatuD kasutajaTeST on reaalne kasv [avalikuS väärtuSeS](../public-value/), ei modelleerimise-viga — see peaks olema raporteeritud ligiPääsu-tulemuSeNa, ei netteeritud noise'iKs.

## Allikad

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
