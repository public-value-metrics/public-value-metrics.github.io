# Teenusestandardid ja transaktsioonimõõdikud

GOV.UK Service Standard on Ühendkuningriigi valitsuse 14-punktiLinE checkList avaliku digiTeenuse ehitamiSeKs ja käitamiSeKs, ja see tuleb paariS väikseGa, kohustuslikuGa settiGa kvantitatiivseD transaktsiooni-mõõdikuST — kulu transaktsiooni kohta, lõpetamiSe-määr, digiTaalne kasutuselevõtt, ja kasutajA-rahulolu — mida meeskonnad peavad avaldama igaLe live-keskvalitsuse-teenuseLe. Koos on standard ja mõõdikud operatiivne, igapäeVane spetsialiseerimine laieMaTeST avaliku-väärtuse- ja KPI-raamistikuST sellES repositooriumiS, suunatuD otse tarkvaraTarne-meeskondadeLe.

## Miks see on oluline

Service Standard, mida vedaB GOV.UK-i teenuseManuaal, nõuab, et iga punkt-ajaS-hindamine (alfA, betA, live) valitsuse digiTeenusEst demonstreeriKs — selle 14 punktI seas — et meeskond mõistab kasutajaTe vajadusi, töötab multiDistsiplinaarsES meeskonnaS, itereerib ja paraneb sagedaSti, ja *hindab tööriistu, süsteeme, ja töötamise-viise*. Ajalooliselt istuS see koos avalikKu Performance Platform'iGa, kus iga live-teenus avaldas oma transaktsiooni-andmeid avatuLt; see platvorm on sellest ajaST pensioneeritud, kuid alusOlev kohustuS mõõta ja avaldada need neli tuumA-mõõdikut jätkub läbi teenuseManuaali "edu-mõõtmiSe"-juhendi. Põhjus, miks see erineb geneeriliseST tarkvara-KPI-dashboardist, on, et need mõõdikud olid selgeSõnaliselt disainitud üheKs seotud majanDusLikuKs mudeliKs, mitte neljaKs sõltumatuKs skooriKs: terve säästu-juhtum digiTaalseLe valitsuSeLe — Government Digital Service'i Digital Efficiency Report leidiS digiTaalseD transaktsioonid groslT 20 korda odavaMad kui telefoni teel ja ligikaudu 50 korda odavaMad kui näost-näGu sarnaSteLe kohaliku-valitsuse-teenusteLe — materialiseerub ainult, kui lõpetamiSe-määr jääb kõrgeKs ja digiTaalne kasutuselevõtt genuinely tõuseb, selle asemel, et lihtsalt lisada odav kanal kõrvuTi muutumatu kuluKAga.

## Arvutus

```
Kulu transaktsiooni kohta = koGu teenuse-tööShoiDmiSe-kulu /
                            lõpetatud transaktsioonide arv
LõpetamiSe-määr             = lõpetatud transaktsioonid /
                            alustatud transaktsioonid × 100
DigiTaalne kasutuselevõtt    = digiTaalne-kanal-transaktsioonid
                            / kõigi-kanalite-transaktsioonid
                            × 100
KasutajA-rahulolu            = % rahul + väga rahul, teenuse-
                            siseNe 5-punkti-uuring

KanaliVahetuse-sääst = transaktsiooniVolümen × kasutuseleVõtu-
                      nihe × (kulu transaktsiooni kohta vanal
                      kanaliL − kulu transaktsiooni kohta
                      digiTaalselt)

Ebaõnnestumise-nõudlusE-kulu = (1 − lõpetamiSe-määr) ×
                      digiTaalselt proOvitud transaktsioonid
                      × fallback-kanali kulu, mida need
                      kasutajad seejärel kasutavad

```

## Läbitöötatud näide

**Illustratiivne keskvalitsuse litsenSi-uuendamiSe-teenus**, 2 miljonit transaktsiooni/aastas, praegu 65% telefon (£3,00/transaktsioon) ja 35% digiTaalne (£0,30/transaktsioon), lõpetamiSe-määr 80%. RedisainimiNe vastu 14-punktI Service Standard tõstab digiTaalse kasutuselevõtu 60%-le ja lõpetamiSE 92%-le:

```
KasutuseleVõtu-nihke sääst = 2 000 000 × 0,25 × (3,00 − 0,30)
                            = £1 350 000/aastas

Ebaõnnestumise-nõudluse-kulu, enne:
  2 000 000 × 0,35 × (1 − 0,80) × £3,00 = £420 000/aastas
  (hüljajad langevad tagasi telefoniLe)

Ebaõnnestumise-nõudluse-kulu, pärast:
  2 000 000 × 0,60 × (1 − 0,92) × £3,00 = £288 000/aastas

Netto ebaõnnestumise-nõudluse-sääst = £420 000 − £288 000
                                     = £132 000/aastas

KoGu aastane sääst ≈ £1 350 000 + £132 000 = £1 482 000/aastas
```

AritmeetikA teeb selgeSõnaliseKs, miks lõpetamiSe-määr ei ole sekundaarne mõõdik: ilma paranemiSeTa 80%-ST 92%-le, kasutuselevõtu-nihke sääst osaLiselt tagasi-saaKs ebaõnnestumise-nõudluSeST, mis rutib frustreeritud digiTaalseD kasutajad otse tagasi kuluKaLe telefoniKanaliLe.

## Seos tarkvaraarendusega

Need neli mõõdikut on töötav näide kulu-tagajärje-dashboardiST: üks kulu-mõõdik, hoitud eraldi kolmeST tulemuse-/kvaliteedi-mõõdikuST, tahtLikuLt mitte kunagi kollapseerituD üheKs skooriKs — sama distsipliin, millE eest argumenteeritaKse [avaliku sektori KPId'eS](../public-sector-kpis/). InseneriDeLe jaguneb see konkreetSeKs, oMANDAtAvaKs tööKs: lõpetamiSe-määr on trAgi-instrumenteerimise probleem, ja iga hüljAmiSE-punkt teekonnaS on, printsiibiL, lokaliseeritaV ja parandataV; kulu transaktsiooni kohta vajab rigi ühiku-kulu-arVestuSt, sealhulgas personali-assisteeritud ja paberi-kanali-kulud, mitte ainult cloud-hostimise-kulutuSt (vaata [kulu transaktsiooni kohta](../cost-per-transaction/) ja [koGu-omandiKulu valitsuse IT-s](../total-cost-of-ownership-in-government-it/)); ja digiTaalne kasutuselevõtt on õigluse-mõõdik efektiivsuSe-kostüümiS — kodanikud, kes ei saa või ei taHA vahetada kanalit, on disproportsionaalSelt vanemAD, puudEGa, või digiTaalselt eksklUderitud, nii et agressiiVne kanali-sulgemine konverteerib "sääsT" ligiPääsuKahjuKs (vaata [digitaalne kaasatuS](../digital-inclusion/) ja [kanalivahetuSe-säästud](../channel-shift-savings/)). 14-punktI standard ise on protsessI-spetsifikatsioon nende numbrite taga — vaata [digitaalne teenusestandard](../digital-service-standard/) standarD täielikuLt, ja [kodaniku rahulolu mõõdikud](../citizen-satisfaction-metrics/) selle kohta, kuidas rahulolu-figuur siin suhestub laiEmaGa usaldus-mõõtmiSeGa.

## Lõksud

- **Kasutuselevõtt saavutatuD alternatiivsE kanali sulgemiSeGa.** TelefoniLiini sulgemine tõstab digiTaalsE-kasutuselevõtu-protsendi aritmeetiLiselt, samal ajal dumpiDeS ebaõnnestumisE-nõudluSe sellELe kanaliLe, mis jääb (sageli kuluKaM assisteeritud-digiTaalne või näost-näGu rute); mõõda alati tervE-süsteemi-kulu, mitte suhet üksi.
- **LõpetamiSe-määra mõõtmine tragi teisest etapist.** "Alustatud"-loenduSe alustamine pärast esimest genuine hüljAmiSE-punkti smigerdab lõpetamiSe-määra ja peidaB suurimA parandataVa kadu.
- **Kulu transaktsiooni kohta, mis väljaJätab assisteeritud-digiTaalsE kulu.** Ainult-digiTaalne ühiku-kulu, mis ignoreerib personali-aega, mis kulub kasutajaTe aitamiseKs, kes ei saa iseTeenindada, alaHindab kanali tõelist kulu.
- **AvalDamine mõõdikuid ühiseTa definitsioonITa üle teenuSte.** "TransaktsiooN" ja "lõpetatud" tähendaVad erinevaid asju üle erinevaTe teenuSe-meeskonDade, vÄlja arvaTud juhul, kui definitsioonid on standardiseeritud ja versioneeritud, muutES tvär-teenuse-võrdlus ebaUsaldusVäärseKs.

## Allikad

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
