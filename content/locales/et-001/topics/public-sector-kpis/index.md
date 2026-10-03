# Avaliku sektori KPId

Võtmetulemuslikkuse indikaator (KPI) on valitud, jälgitud mõõdik, mis seisab selle eest, kas avaliku teenus teeb oma tööd hästi. Valitsuses pole KPI valik kunagi neutraalne: sest KPId kinnituvad eelArvedeLe, liiGaTabeliTeLe, ja karjäärideLe, kujundab üheL valimisE akt kõigi nedeStJärgneDeTE käitumist, sageli rohkem kui poliitika, mis teenuse looS.

## Miks see on oluline

Charles Goodharti 1975. aasta vaatluS rahaPoliitikaST — hiljem Marilyn Strathern'i poolt populariseeritud kui "kui mõõdik saab eesmärgiKs, lõpetab see hea mõõdiku olemiSe" — on kõige olulisem hoiatus-etikett avaliku sektori jõuDluSHaldusES. KPI, mis on valitud süsteemi *kirjeldaMaKs*, hakkab seda süsteemi *moonutaMa* hetKel, mil ressursSeerimine, palk, või poliitiline ellujäämine on selleGa seotud. CanoniLine illustratsioon on NHS-i kiirAbi-vastuSajaD: kui kaheksa-minuTiliNe Category-A-vastuSe-eesmärk sai kohustavaKs, näidati, et mõned trustid "stakeerisid" kiirAbisid vahetult väljaspool vastuSajA-kella, või klasseFitseerisid kõnesid ümber, et jõuda numbriLe, patsiendi-tulemusi muutmaTa. Ühendkuningriigi National Audit Office'i juhend jõuDluSIndikaatorite valimiSeKs ja kasutamiSeKs — sätestatud selle value-for-money-raportiteS ja selle "Performance Measurement by Regulators" ja "Choosing the Right FABRIC" raamistikuS (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — eksisteerib täpselt sellepärast, et osakonnad jätkasid lihtSaD raporteerida indikaatoriTE valimist, selle asemel, et valida indikaatoreid, mis on raske manipuleerida. TarkvaraInsener, kes laevaTab dashboardi, mille vastu ministrit või direktorit hinnataKse, disainiB, kavatseGa või mitte, avaliku institutsiooni incentiiVStruktuuri.

## Arvutus

KPI-disain on raamistikuLinE teema, kuid kandidaaT-KPI *hindamine* on korDataV checkList, mitte formula:

```
Igale kandidaaT-KPI-le, skoori vastu:
  Fit for purpose  — mõõdab see tulemuSt, või proksi
                     mitmE astmE kauguSel?
  Appropriate      — kuulub see inimestEle, kes tegelikult
                     saavad seda mõjutada?
  Balanced         — on see paariS vastu-mõõdikuGa, mis
                     püüAb manipulatsiooni?
  Robust           — saab see üle elada auditi, või on see
                     iseRaporteeritud ja veriFitseerimatu?
  Integrated       — sobitub see laiema setTi, või lükkab
                     vastu teiseLe KPI-le?
  Cost-effective   — maksab selle kogumine rohkem kui
                     otsus, mida see informeerib?

Juhtiva-vs-mahaJääva jaotus:
  Juhtiv indikaator  → prognoosib tuleviku tulemust, kuid
                       sageli manipuleeritav (nt kõned
                       vastatuD <60s)
  MahaJääv indikaator → kinnitab, et tulemus juhtuS, kuid
                        jõuab kohale liiga hilja juhtimiSeKs
                        (nt aastane rahulolu-uuring)
  KaitstAv KPI-sett paariStab vähemalt üheD igaStki
  eesmärGi kohta.
```

## Läbitöötatud näide

**Kiirabi-trust**: trust raporteerib Category-A (eluOhtlik) vastuSE-aja-KPI-d "75% kõnedest vastatuD 8 minuti jooksul." ÜheS kvartaliS tuleb 6000 Category-A-kõnet; 4500 täidetakse 8 minuti jooksul, andeS 75,0% — ilmSelt eesmärgiL.

```
PealKirjaKPI = 4500 / 6000 × 100 = 75,0%  (vastab 75%-
tärsklile)
```

Kuid Goodharti-audit lisab vastu-mõõdiku: keskmine vastuSAeg aeglaseiMale 10%-le kõnedeST.

```
AeglaseiMa detsiili keskmine vastuSAeg = 34 minutit (tõuSnud
19 minutiST kaks aastat varem)
```

Trust tabab eesmärgi, samal ajal, kui tail — kõned, mis on kõige tõenäolisemalt genuinely eluOhtlikud, kui triaazh on imperfektne — on läinud palju halvemaKs, sest meeskonnad prioriseeritakse kõnedele, mis on 8-minuTiliseLe klifiServaLe lähedal, selle asemel, et prioriseerida kliinilisT urgentsuSt. Üksik KPI rääkis valeLugu; paariStatuD KPI rääkis tõeLugu.

## Seos tarkvaraarendusega

Insenerid, kes ehitavad jõuDluSDashboarde valitsuSeLe, disainivad, funktsionaalSelt, organisatsiooni incentiiVi-API-t. Praktilised implikatsioonid: instrumenteeri *nimetajat* lika rangeLt kui lugejat (KPI, mis raporteeritaKse pelgaKs protsendiKs, inviteerib nimetaja-manipulatsiooni — vaata [kulu tehingu kohta](../cost-per-transaction/) samaL lõKsuL digiTeenusteS); ehita vastu-mõõdikud samaLe dashboardiLe selle asemel, et panna eraldi raportiSSE, mida keegi ei loe, nii et manipulatsioon on nähtaV otsuSe-punktiS; ja versioneeri KPI-definitsioon, sest vaikne ümberDefineerimine (muutES, mis loeb "kõneKs," "juhtumiKs," või "täitumiSeKs") on funktsionaalSelt ekvivalentne eesmärgi muutmiSeGa selle kuulutamaTa. [AvaLiku väärtuse scorecard](../public-value-scorecard/) on üks struktureeritud viis peatada üksik KPI loetaVaST isoleeritult, ja [tulemus-põhine vastutus](../outcomes-based-accountability/) on distsipliin populatsiooni-tasandi KPI-de valimiSeKs, mida üksik meeskond ei saa üksKülgSelt moonutada.

## Lõksud

- **LihtSaD-koguDA mõõdiku valimine meaningful-E üle.** Kõne-vastamiSe-aeg on triviaalne logida; kas kõne lahendaS kodaniku probleemi, ei ole — kuid ainult teine on tulemus. Vastupane vaikimisi minemiSeLe sellE juurde, mida süsteem juba emiteerib.
- **Puudub vastu-mõõdik.** Iga KPI, mis on seotud rahaGa või reputatSiooniGa, manipuleeritaKse margin'il; laevaTa see paariStatuD mõõdikuGa, mis püüAb tõenäolise manipulatsiooni-vektori enne selle avaldamist.
- **Mõõdiku ümberDefineerimine muudatusteLogita.** "Saadud kõnede" vahetamine "vastatuD kõnedeGa" trendi smigerDamiSeKs hävitab ajaSarjA usutavuSe hetKel, mil see avastataKse — avalda alati definitsiooniDE muudatusteLogi koos numbritEga.
- **TegevuSe segiAjamine tulemuSeGa.** LõpetatuD inspektsioonide loenDamine on väljund; vastavuSSE viidud ruumide loenDamine on tulemuSele lähedaseM (vaata [tulemused versus väljundid](../outcomes-vs-outputs/)).

## Allikad

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
