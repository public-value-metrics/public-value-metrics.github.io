# Looduskapitali arvestus

LooDusKapitalI arvestus paneb keskkonna samaLe pinDaLe, kui mistahes muu rahVuslik või organisatSiooniliNe varA: see mõõdab looDusRessursSide varuD (metsad, muldaD, jõeD, maRaLaD, atmosfäär) ja teenustE vooGu, mida need toodaVaD (süsinikuSiDUmine, üleujutusKaitse, rekreatsioon, toit), nii füüsilisTeS kui rahaliSteS termineiS, nii et keskkonnaLinE ammendUmine ilmub otsuSTegeMiseSSE viisil, kuidas finantsKapitali vähendamine teeKs. Ühendkuningriik on üks kõige kauGemale-arenenuD valitsuSteST sedA süstemaatiLiselt teGemaS, veDatuD 25 Year Environment Plan'iGa (2018) ja implementeeritud ONS'i UK Natural Capital-arvestuste ja HM Treasury Green Book'i täiendava-juhendi kaudu.

## Miks see on oluline

KonventSionaalne arvestuS — korporatiivne ja statslik sarnaselT — käsitleb metsa väärtuSetuNa, kuni see on langetatuD ja müüdud timbriNa, millEl punktiL see muutub SKT'KS. LooDusKapitalI arvestus eksisteerib sellE lünga sulgemiSeKs: Ühendkuningriigi 25 Year Environment Plan kohustaS valitsust manustaMa looDusKapitali-mõtlemist üle poliitikA, explicit sedastaDes ambitsiooni olla "esimene generatsioon, mis jätab keskkonna parema oleKuSSE, kui see sedA leiuS." ONS on sellest ajaST avaldanud aastaseD UK Natural Capital-arvestused (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), mis hindavaD ekosüsteemi-teenustE rahaLisT väärtust — metsa-rekreatsiooniST urban-roheala tervise-kasudeNi tooRbA-süsinikuSäilitamiSeNi — kasutaDes sama National-Accounts-raamistikKu, mida kasutatakse toodetuD kapitaliLe, nii et looDusKapital saaB eventuaalSelt istuDa samAs balanSSarVES, kui teed, ehitised, ja seadmed. HM Treasury Enabling a Natural Capital Approach (ENCA)-juhend, täiendav Green Book'iLe (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), sätestab, kuidas hindajad peaksid väärtustaMa keskkonnaLiKKu kulu ja kasu äriJuhtumites, nii et teeSkeem, mis hävitab antiikse metsa, või üleujutuSSkeem, mis taastab maRaLa, saaKs olla võrreldud konsistentseL rahaLiSel aluseL, selle asemel, et üheL olla number ja teiSel lõik hoiatusEST.

## Arvutus

```
EkosüsteemI-teenuse-aktivA-väärtus = NPV teenustE-vooST,
mida aktiVa pakuB

AktivA-väärtus = Σ (t = 1 kuni T) [aastane teenuse-vooGu-
                väärtus_t / (1 + r)^t]

kus:
  teenuse-vooGu-väärtus_t = teenuse koGus aastal t × ühiku-
                           väärtus (nt rekreatiivseD visiidiD
                           × väärtus visiidi kohta; süsiniku-
                           tonniD seoTuD × süsiniku-hind)
  r = diskontomäär (Green-Book-sotsiaalne-diskontomäär —
      vaata [sotsiaalne diskontomäär](../social-discount-rate/))
  T = ajaHorisont, millE jooksul aktiVa eeldatakse teenust
      pakkuMA
```

See on identiline neto-tänapäeva-väärtuse-struktuur, mida kasutatakse toodetuD kapitali väärtuStamiSeKs või mistahes avaliku investeeringu hindamiSeKs [Green-Book-hindamise](../green-book-appraisal/) all — looDusKapitalI-arvestusE panuS on usutavateGa füüsilisteGa koGusteGa ja ühikuväärtusteGa teenusteLe, mis varem oli prisSetud nulliLe.

## Läbitöötatud näide

**UrbAn mets, rekreatiivne väärtus**: 50-hektariLinE mets saab hinnanguliselt 80 000 rekreatiivSet visiiti aastaS, kumbki väärtustatuD (reisi-kulu- või stated-preference-meetodiGa — vaata [revealed preference hindamine](../revealed-preference-valuation/) ja [stated preference hindamine](../stated-preference-valuation/)) £3 visiidi kohta. Metsa eeldatakse jätkaVaKs selle teenuse pakkumist 50 aastaKs, hinnatuD 3,5% diskontomäärAl.

```
Aastane rekreatiivne väärtus = 80 000 × £3 = £240 000/aastas

NPV üle 50 aasta 3,5% juures ≈ £240 000 × annuiteediFaktor
(3,5%, 50 aastat)
annuiteediFaktor(3,5%, 50) ≈ 21,4

AktivA väärtus ≈ £240 000 × 21,4 ≈ £5 136 000
```

**SüsinikuSäilitamiSe lisamine**: sama mets seoB hinnanguliselt 400 tonni CO2 aastaS, väärtustatuD valitsuse mitte-kaubeldud-süsiniku-hinnaGa roughLy £75/tonn (illustratiivne — kasuta praegust BEIS/DESNZ-avaldatuD süsinikuVäärtust live-hindamiSeKs).

```
Aastane süsiniku-väärtus = 400 × £75 = £30 000/aastas
NPV üle 50 aasta 3,5% juures ≈ £30 000 × 21,4 ≈ £642 000

KoGu mets-aktivA-väärtus (rekreatsioon + süsinik) ≈
£5 136 000 + £642 000 ≈ £5 778 000
```

See on enne, kui lisataKse üleujutuSE-dämpamine, bioDiversiteet, või õhuKvaliteedi-teenused, mida ENCA-juhend ka küsib hindajatELt kaaluDA — totaal on tahtLikuLt põranD, ei lagi.

## Seos tarkvaraarendusega

- KeskkonnaLiseD ja aktiva-halduSe-süsteemid kohalikuTeLe omavalitsusTeLe ja agentuuriDeLe (pargid, maanteeD, veekoGud) saaVaD lisada looDusKapitali-registri koos oma füüsiliSe aktiva-registriGa, kasutaDes sama teenuse-vooGu-korda-ühikuväärtuse-mustrit, kui mistahes muuL [ühikukulu andmebaaSil](../unit-cost-databases/), millE organisatsioon vedaB.
- Sest looDusKapitali-NPV on tundliK diskontomäärALe (vaata läbitöötatud näite annuiteediFaktorit), peaks mistahes riist, mis arvutab sedA, eksponeerima määra ja horisonti näHtavaTeKs sisendiTeKs, ei maetuD vaikeVäärtusteKs — sama transparentsuSE-printsiip, mis on kaetud [intergeneratSiooniliSeS õigluseS ja jätkusuutlikuSe diskonteerimiseS](../intergenerational-equity-and-sustainability-discounting/).
- LooDusKapitali-arvestused on üha enam vajalik sisend keskkonnaLikULe-mõjU-sektsioonidELe [Green-Book-hindamiSe](../green-book-appraisal/) äriJuhtumites; tarneMeeskond, mis ehitab äriJuhtumi-riistaD, peaks käsitlema ONS-arvestusi ja ENCA-ühikuväärtusi referentsAndmeteNa, mida integreerida, ei midagi, mida hindajaD genereeriVaD uuesti algusest igA korD.

## Lõksud

- **KattuVate ekosüsteemI-teenustE topelt-arvestamine.** RekreatiivNe väärtus ja bioDiversiteedi-väärtus samaLe alaLe saaVaD jagaDa alusOlevat maksMisvalmiduse-andmet; ENCA-juhend hoiatab selgeSõnaliselt vastu väärtuStuste summeerimiSeLe, mis on tuletatud kattuvateST uuringu-instrumenDiteST.
- **LooDusKapitali-aktiva-väärtuSE käsitlemine staatiliSeNa.** TeenuseVooD muutuvaD kliimaGa, haldamiSeGa, ja maaKasutuSE-survEGa; metsa süsiniku- ja üleujutuSE-dämpamise-väärtus seL dekaadil ei ole alA permanentne omaDuS.
- **RahVusLiku-keskmise-ühikuväärtusE kasutamine highLy-lokaalseLe otsuSeLe.** Hektar ligiPääsetAvat urbAnset metsA ja hektar kauGeT mäeStikAla oMavaD väga erinevaid rekreatiivseid väärtuSi; ENCA-juhend soovitab lokaalseid või sIte-spetsiifiliseD väärtuSi, kus saadaval, selle asemel, et vaikimisi minna rahVuslike keskmisteLe.

## Allikad

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
