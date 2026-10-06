# Koguomandikulu (TCO) statslikus IT-s

KoGuOmandiKulu on süsteemI täiS elutsükli-kulu — anskaFimine pluss igA aasta sellE käitamiSeST — diskonteeritud ühiseLe kuupäevaLe. StatslikuS IT-s on üksiK kõige usaldusVäärseM prognoosimiSE-viga variantiDe või tarnijate võrdlemine ainult anskaFimisE-hinnaL, kui operatSioonid ja hooLdus tüüpiliselt arVestavaD vahemikKu poolest kuni neli-viieNdiKuNi elutsükli-arve koguST.

## Miks see on oluline

HM Treasury Green Book nõuab, et finantsCase mistahes Five-Case-Model-äriJuhtumis katab tervE-elu-kulud, ei ainult kapitaliKulutuSt — alati on National Audit Office korDuvalt leidnud osakondi, kinnitaMaS IT-investeeringuid vastu inkompletSe või optimistliKu tegevuS-kulu-prognoosiLe, ainult avastaMaKs tõeliSt operatiivSt kulu korD, kui süsteem on live ja kapitali-eelArve-reA on suletuD. Government Digital Service'i ja Central Digital and Data Office'i Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) lükkab osakondi cloud- ja kommodity-hostimiSe suunas osaLiselt, sest see muudab jooksvA kulu nähtavaKs ja võrreldAvaKs, selle asemel, et see olEKs maetuD üksikuSSE kapitali-hankimiSe-figuuriSSE, mis näeb atraktiivSelt madal kinnitusel ja kuluKalt vale kolmE aasta pärast.

## Arvutus

```
TCO = AnskaFimisE kulu + Σ(t=1..N) Aastane operatiivNe kulu_t
     / (1+r)^t − jääKväärtus (diskonteeritud)

r = HM Treasury Green Book standardsE sotsiaalse diskonto-
    määrA, 3,5%/aastas (langev määra-skeem horisondiLe üle
    30 aasta)

Operatiivse-kulu-komponendid: hostimine/litsentseerimine,
support ja hooLdus, turvalisuSE-patchimine ja compliance,
personali-aeg, planeeritud refresh/migratsioon
```

Vaata [sotsiaalne diskontomäär](../sotsiaalne-diskontomäär/) sellE jaoks, miks diskontomäärA-faktor on oluline üle tüüpiliSe 5-10-aastaSe süsteemI-eluigA, ja [ehita versus ostA valitsuses](../ehita-versus-osta-valitsuses/) sellE jaoks, kuidas TCO toidab ehitA/ostA-otsust.

## Läbitöötatud näide

Osakond võrdleb kaht juhtumiHalDuSe-süsteemi 5-aastaseL horisondiL Green Booki 3,5%-liseL diskontomäärAl.

```
Süsteem A: capex £3 500 000, opex £250 000/aastas
Süsteem B: capex £1 800 000 (näeb odavaM välja), opex
          £650 000/aastas (raskeM tarnija-toe- ja
          integratSiooni-koormuS)

Naiivne võrdlus ainult capex'il: B võidab, £1,8M < £3,5M.

DiskonteerimiS-faktori-summa, 5 aastat 3,5%-l: 0,966+0,934
+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750
      = £4 628 750
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750
      = £4 734 750
```

TCO pöörab naiivsE otsuSE: Süsteem B on marginaalSelt kuluKaM üle viiE aasta, kord kui operatiivNe kulu on diskonteeritud ja summeeritud, sest selle opex-osaKaal elu-kuluST on 62% (2 934 750 / 4 734 750) vastu Süsteem A'le 24% — konkreeTne näide "hooLdus on majoriteet arvest"-fundiST, täielikult peidetuD piletiHindade võrdlemiSeST.

## Seos tarkvaraarendusega

TCO on numbEr, mis peaKs distsiplineeriMa igA [ehita-versus-ostA](../ehita-versus-osta-valitsuses/)-otsust ja igA [tehniliSE-võla](../tehniline-võlg-kui-avaliku-väärtuse-erosioon/)-tagasimaksE-juhtumit, sest võla-intress ja edasiLükatuD hooLdus on mõlemad operatiivSe-kulu-ridaD, mis kuuluvaD samaSSE diskonteeritud totaaliSSE, ükskõik, kas keegi on neid jälgiNud. Insenerid, mis pakuVaD platVormi- või tarnija-valikut, peaksid esitaMa täieliku TCO-tabeli, ei hankimis-hinda, sest hankimis-hind on täpselt number, millELe Green Booki finantsCase disainiti stopiMaKs osakondi üksi tuGineMaST. TCO on ka aus nimetaja [value-for-money](../value-for-money/)-hinnanguteLe — VFM võrdleb kasu kuluGa, ja alaLoendUD kulu-reA infleerib igA VFM-suhte äriJuhtumis.

## Lõksud

- **Capex-ainult-võrdlus.** Üksik levinuM hankimis-viga — tarnija-nimekirjaHindade võrdlemine ühEta sobitatud operatiivSe-kulu-prognoosiTa igaLe variandile.
- **Exit- ja migratsioonI-kulude väljaJätmine.** Lepingu-lõpu-andme-ekstraktsioon, re-platVormimine, ja tarnija-lock-in-trahvid on reaalseD TCO-ridaD, mis harva ilmuvaD originaalseS äriJuhtumis.
- **TurvalisuSE ja compliance-kulu väljaJätmine.** Patch-kadents, akrediteerimiSE-uuendamine, ja audiTi-kulu skaleeruvaD süsteemI vanuSEGa ja kompleksSuseGa — vaata [statslik küberturvalisuse väärtus](../statsliku-sektori-küberturvalisuse-väärtus/) — ja jäetakse rutiinselt väljA opex-prognoosiST.
- **DiskonteerimaTa võrdlus üle variantiDe erinevateGa kulu-profiiliDeGa.** Capex-raskE variandi võrdlemine opex-raskeGa ühEta diskonteerimiSeTa süstemaatiLiselt favoriseerib variandi, mis juhtuslikult viivitab rohkem kulu hilisemateLe aastateLe.

## Allikad

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
