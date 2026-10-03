# Grandi tulemuste raporteerimine (IRIS+)

GrandI tulemuste raporteerimine on praktika, kus grAndi-saajad raporteerivad standardiseeritud, võrreldAvad tulemusMõõdikud tagasi rahastajateLe — vastuPidiselT selleLe, et iga rahastaja leiuTab oma skräddersyd raporteerimis-malli. IRIS+, mida vedaB Global Impact Investing Network (GIIN), on kõige laialDaseMalt vastuVõetud selline standard: katalooG eelUuritud sotsiaalseteST, keskkonnaLikeST, ja finantsiliSteST jõuDluSE-mõõdikuTest, mida impact-investorid ja, üha enam, grAndi-andvaD fondid nõuavaD või soovitavaD grAndi-saajateLt kasutada.

## Miks see on oluline

Enne standardiseeritud raporteerimist küsis igA fond grAndi-saajaTeLt erinevat setTi indikaatoreid erinevaS formaadiS, ja kesksuurUne heategevusorganisatsioon kümneGa rahastajaTeGa saaks jooksutaDa kümme paralleelSEt raporteerimisProtsessi kattuvA töö jaoks — hästi-dokumenteeritud driver raporteerimisKoormaSt, mille vähendamiSeKs grAndi-tulemuste-standardiseerimine eksisteerib. IRIS+ adresseerib sedA, andeS rahastajaTeLe ja grAndi-saajateLe jagatuD vokabulaariGa: TuumAMõõdikuTe-settiD grupeeritud teemA järGi (nt taskukohane eluase, puhas-energia-ligiPääs, finantsiline inklusioon), igA mõõdik defineeritud piisavalt täpselt, et "loodud töökohad" või "teenindatuD leibkonnad" tähendaVad sama asja, ükskõik, kes seda raporteerib, ja joondatuD ÜN-i Sustainable-Development-Goals'iGa, nii et rahastaja saab rulliDA grAndi-saaja-tasandi andmed üles portfelli-tasandi-SDG-narratiiviKs. GIIN raporteerib, et IRIS-mõõdikuid kasutab roughLy pool impact-investoriST ja suuR enamuS fondI-halduriST, pankaDest, ja arenguFinants-institutsioonideST, mis on aktiivsed selles valdkonnaS.

Standardiseerimine on kõige oluliseM, kus see interakteerub [tulemustega versus väljunditeGa](../outcomes-vs-outputs/): IRIS+ lükkab raporteerimist defineeritud tulemuSe- ja impact-mõõdikuTe suunas, selle asemel, mida grAndi-saaja eksisteerivA juhtumiHalDuSe-süsteem juhuslikult logib, mis on täpselt lünk, mida [kulu tulemuse kohta](../cost-per-outcome/) versus [kulu abiSaaja kohta](../cost-per-beneficiary/) kirjelDaVaD.

## Arvutus

GrandI tulemuste raporteerimine on raamistik ja protsess, mitte formula:

```
1. Rahastaja valib TuumAMõõdikuTe-setti, mis on relevantne
   grAndi teemaLe (nt IRIS+ "Financial Inclusion" või
   "Sustainable Agriculture")
2. Igal mõõdikul on fikseeritud definitsioon, ühik, ja
   arvutusMeetod, mida avaldab GIIN — ei leiuTatuD pr.-
   rahastaja
3. GrAndi-saaja raporteerib vastu samaDeLe mõõdiku-
   definitsioonidEle üle kõikidE oma rahastajatE, kasutaDES
   sedA standardIt, lõiGaTes dupliTseeritud raporteerimis-
   vaeva
4. Rahastaja agregeerib grAndi-saaja-tasandi mõõdikuD
   portfelli-tasandi raporteerimiSeKs, võrreldAv aasta-
   aasta ja üle grAndi-saajateST, kasutaDES sama mõõdikuT
```

EfektiivsuSe-kasv on kombinatoriaalne: N rahastaja × M grAndi-saaja standardiseerimine ühEle jagatud vokabulaariLe pöörab N×M skräddersyd raporteerimisSuhted roughLy N+M kaardistusEKs vastu üheLE standardiLe.

## Läbitöötatud näide

**GrAndi-saaja kolmeGa rahastajaGa, enne standardiseerimist**: raporteerib "inimest teenindatuD" Rahastaja 1-le kasutaDES peaArVU-definitsiooni, "abiSaajaid jõutuD" Rahastaja 2-le kasutaDES leibkonna-definitsiooni, ja "individuaalid mõjutatuD" Rahastaja 3-le kasutaDES teenuSe-episoodi-definitsiooni (nii et üks isik, mis külastab kaks korda, loeB kaks korda). Kolm raportit, kolm numbrit, mitte ükS võrreldAv, ja mitte ükS võrreldAv teiST grAndi-saaja numbriteGa, isegi sama rahastajA portfelli sees.

**Sama grAndi-saaja IRIS+ all**: raporteerib vastu defineeritud IRIS+-individuaalid-jõutuD-mõõdikuLe koos defineeritud tulemusMõõdikuGa relevantsEST TuumAMõõdikuTe-setiST, kasutaDES GIINi avaldatud arvutusMetodoloogiat mõlemaLe. Kõik kolm rahastajat saavaD nüüD samA numbri, arvutatud sama viisil, ja saavaD võrrelDA sellE grAndi-saaja kulu IRIS+-defineeritud ühikuLe vastu teiStE grAndi-saajateGa oma portfellis, kasutaDES identilist mõõdikut — ekvivalent, raporteerimiS-infrastruktuuri-skaalal, jagatud [ühikukulu andmebaaSi](../unit-cost-databases/) omamiseLe.

## Seos tarkvaraarendusega

GrAndi-halDuSe-platvormid peaksid käsitlema IRIS+-mõõdiku-identifikaatoreid võõrVõtmeKs, mitte vabaTekstiKs: avaldatuD mõõdiku-koodi säiLitamine koos grAndi-saaja raporteeritud väärtuSeGa (selle asemel, et lokaalSelt leiuTatud väljA nimeGa "abiSaajaD") on, mis muudab tvär-rahastaja- ja tvär-portfelli-agregatSiooni võimalikuKs hiljem, dataKoristusE-projektiTa. Kus platvorm peab toetama rahastajaid, mis ei ole IRIS+ võtnud kasutuselE, on pragmaatiLine disain lubaDA lokaalSE mõõdikU kaardistuSE lähimaLe IRIS+-definitsioonile, selle asemel, et sundiDA iga rahastajaT standardiLe otsekohE — võrreldAvuS paraneb inkrementAalSelt, kuna rohkem graafiST kaardistub jagatud identifikaatoriteLe. Vaata sõsarTeemat [kulu tulemuse kohta](../cost-per-outcome/) selle kohta, millEKs raporteeritud numbrid peaksid olema kasutatuD arvutamiSeKs, kord kui kogutuD.

## Lõksud

- **IRIS+-vastuVõtu käsitlemine automaatSe võrreldAvuSeNa.** Kaks grAndi-saajat saavaD mõlemad raporteerida vastu samaLe IRIS+-mõõdikuLe ja ikkagi mitte olla võrreldAvad, kui nende alusOlev andmeKvaliteet või kontrafaktuaalseD eeldused erineVaD; standard fikseerib definitsioonid, ei mõõtmiSE-rangust.
- **RahastajaLeiuTatuD "IRIS-tasakaalustatuD" mõõdikud.** MõõdiK, mis on lihtsalt inspireeritud IRIS+-keeleST, kuid mitte tegelik avaldatuD definitsioon, taasToob fragmentatSiooni, millE lahendamiSeKs standard eksisteerib.
- **RaporteerimiSE-väsimus üleSelekteerimiSeST.** GrAndi-saaja nõudmine raporteerida vastu terveLe TuumAMõõdikuTe-setile, kui ainult kaks või kolm mõõdikut on otsuSE-relevantseD, taasLooB koormuSE-probleemi standardiseeritud pakenDiS.
- **Mitte ükS tulemusMõõdik üldSe.** IRIS+ sisaldab mitmeid puhtaST väljundiMõõdikuSt (nt teenindatuD inimeste loenDus); valides ainult neid, ja mitte ükS tulemuSE-tiiri-mõõdikuST, toodab [kulu-abiSaaja-kohta](../cost-per-beneficiary/)-kujuLiSt raporteerimist tulemuste-raporteerimiSe-sildiL.

## Allikad

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
