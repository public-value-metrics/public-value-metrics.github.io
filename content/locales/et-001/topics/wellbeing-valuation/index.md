# Heaolu hindamine (WELLBY)

HeaoluHindamine hindab poliitika efekti otse eluRahuloluSE termiNeS, kasutaDES WELLBY (heaolu-kohandatuD eluAastA) ühikuKs — üks WELLBY võrDub ühe-punktiLisE muutuSeGa 0-10 eluRahuloluSkaalal, mis püsib ühe aasta. See on HM Treasury ametlikult sanktsioneeritud alternatiiv iga kasu monetiseerimiSeLe maksmisValmiduse kaudu.

## Miks see on oluline

HM Treasury "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) viis ametlikult subjektiivse heaolu andmed keskvalitsuse hindamiseSSE, andeS analüütikuteLe tee väärtustada tulemusi — sotsiaalne ühendus, mentaalne tervis, ohutus, kodaniku-osaleMine — mida [stated preference](../stated-preference-valuation/) ja [revealed preference](../revealed-preference-valuation/) meetodid vaeVleVad usutavalt hinnastama, sest inimesed on sageli kehvad prognoosijad selle kohta, kui palju kaup tegelikult mõjutab nende eluRahulolu. Juhend, väljaTöötatud koos What Works Centre for Wellbeing'iGa, seab soovitatuD rahaLiSe väärtuse WELLBY kohta — 13 000 £ (2021. aasta hinnad, revideeritud perioDiLiselt) — tuletatud suhteSt, mis vaadeldakse suurteS heaoluUuringuteS (eeskätt ONS Annual Population Survey, mis on küsinud nelja ONS4 heaoluKüsimust alates 2011) sissetuleku ja eluRahulolu vahel, andeS analüütikuteLe konversiooniMäärA tagasi naelaDeKs, kui monetiseeritud võrdlus muude Green Book hindamiste vastu on vajalik.

Meetod on oluline, sest see pöörab tavaLisE väärtustamisLoogika ümber: selle asemel, et küsida, mida inimesed maksaksid tulemuSe eest (stated preference) või tuletada väärtust seotuD turuTehinguSt (revealed preference), mõõdab see tulemuSe efekti raporteeritavaLe eluRahulolule otse, vältiDES lünka selle vahel, mida inimesed ütlevad, et tahavad, ja mis tegelikult teeb neid parema-oleviKs. See on ka selle kesksem limiteerinG — iseRaporteeritud eluRahulolu on mõjutatud adaptatsiooni- ja raamistamisE-efekteSt, mida hoolikas praktikant peab kontrollima.

## Arvutus

```
WELLBY = 1 eluRahulolu punkt (0-10 skaal) püsiv 1 isikuLe 1
        aastaKs

Koguved WELLBYd poliitikaSt =
  Σ (muutus eluRahulolu skoorIs) × (mõjutatud inimeste arv)
    × (kestvus aastateS, diskonteeritud sotsiaalseL
       diskontomäärAl)

MonetiseeritUD väärtus = Koguved WELLBYd × väärtus WELLBY
                         kohta (HM Treasury soovitatuD
                         väärtus: 13 000 £ WELLBY kohta,
                         2021. aasta hinnad, allutatuD
                         perioDiliseLe revisjoniLe —
                         kontrolli praegust juhendit enne
                         kasutamist)
```

See erineb tervishoiuEkonoomikaLisest [heaolu-kohandatuD eluAastaSt](../wellbeing-adjusted-life-years/), mis on tüüpiliselt ankurdatud tervise-seotuD elukvaliteedi-skaaladeLe (EQ-5D ja sarnaseD), mitte üldiseLe eluRahuloluLe; need kaks on seotud, kuid mitte vahetatavaD, ja Green Book hindamised peaksid olema selgeSõnalised, milline skaal ja elitsitatsiooniMeetod on raporteeritud WELLBY-näitaja aluseKs.

## Läbitöötatud näide

**Kohalik omavalitsus**: linnavalitsus käitab kogukonna sõprusSkeemi isoleeritud vanemateLe elanikuTeLe, teenindaDES 400 inimest. Enne/pärast heaoluUuring, mis kasutab ONS4 eluRahulolu-küsimust, näitab osalejate keskmist skoori tõusvaNa 5,8-lt 6,5-le — 0,7-punkti kasv — püsiv programmi 2-aastaSe rahastatuD kestvuSe jooksul.

```
Genereeritud WELLBYd = 400 inimest × 0,7 punkti × 2 aastat
                      = 560 WELLBYd
MonetiseeritUD väärtus = 560 × 13 000 £ = 7,28m£
ProgrAmmi kulu = 450 000 £ üle 2 aasta

Kasu-kulu-suhe ≈ 7,28m£ / 0,45m£ ≈ 16:1
```

See-kõrge suhe peaks kutsuma esile kontrolli, mitte tähisTamist — Green Booki heaoluJuhend selgeSõnaliselt hoiatab väikese-valimi iseRaporteeritud kasuDE vastuVõtmise eest nominaalväärtuSeL kontrollimata valikuEfektideKs (liitusid skeemiGa ainult kõige seltskondlikumaD, kõige-tõenäolisemaD-paranema elanikud?) ja võrdlusGrupita; hästi-disainitud hindamine netTeeriks kontrafaktuaalse muutuse, mis vaadeldakse mitte-osalejateS, vaata [kontrafaktuaalne analüüs](../counterfactual-analysis/).

**Riiklik valitsus**: kahe tööHõiveProgrammi võrdlemine, kasutaDES WELLBYd, mitte sissetulekut üksi, fikseerib, et töötus kannab heaoluKulu üle kaduNud sissetuleku — Ühendkuningriigi heaoluUuringud leiavad konsistentSelt, et töötus vähendab eluRahulolu rohkem, kui sissetuleku-kadu üksi prognoosiks, mitte-rahaListe efektide pärast, mis kaasnevad struktuuri, eesmärgi, ja sotsiaalse kontakti kaduMiSeGa. Programm, hinnatud ainult sissetuleku-kasvul, alaHindaks oma väärtust võrreldes üheGA, mis on hinnatud lisaKs WELLBYdeL.

## Seos tarkvaraarendusega

HeaoluHindamine jõuab harva otse inseneriMeeskondadeNi, kuid see kujundab, mida "edu" defineeritakse sotsiaalsektori ja avaliku teenuse toodeteLe — digitaalne sõprusPlatVorm, mentaalseTervisE triaaziRiist, või kogukonnaPlatVorm isoleeritud elanikuTeLe peaks eeldama, et selle mõju mõõdetakse viimaks sel viisil, mis tähendab, tooteAnalüütika peab fikseerima, *keda* jõutakse ja *kui kauaks*, mitte ainult kasutamisArVe. Ehita heaoluUuringu-instrumenteerimine (ONS4 või valideeritud ekvivalendid) teenuseHindamiseSSE algusest peale, mitte lisaTuNa retroSPektiivselt; heaoluBaasJoone retroFitteerimine pärast teenuse käivitamist kaotab enne/pärast võrdluse täielikult. Vaata [tulemused versus väljundid](../outcomes-vs-outputs/) ja [mõjuHindamisMeetodid](../impact-evaluation-methods/).

## Lõksud

- **Puudub kontrafaktuaal või võrdlusGrupp.** Enne/pärast heaoluKasv kontrollimata selle vastu, mis oleks juhtunud niikuinii, ülehindab programmi efekti; vaata [kontrafaktuaalne analüüs](../counterfactual-analysis/) ja [täiendavus ja surnud kaal](../additionality-and-deadweight/).
- **Väikesed, iseVälJAvalituD valimid.** HeaoluUuringud programmi osalejateSt, kes liitusid vabaTahtlikuLt, on altiD valikuKallutatuSeLe — inimesed, kes liitusid ja jäid, oleksid plausibLiselt juba tõusvaD.
- **£-WELLBY-konversiooni käsitlemine täpseNa.** MonetiseeritUD väärtus on poliitikaKonventsioon, tuletatud sissetuleku-heaolu-regressioonidest, mitte turuHind; kasuta seda võrreldaVuseKs üle Green Book hindamiste, mitte väitEKs selle kohta, "mida heaolu on väärt."
- **WELLBYde segiAjamine tervise-seotuD QALYdeGa.** Need kaks mõõdavad erinevaid konstrukte erineVaTeL skaaladeL; vaata [heaolu-kohandatuD eluAastaD](../wellbeing-adjusted-life-years/) tervishoiuEkonoomikaLisE variandi jaoks ja ei arvuta neid kokku koos.

## Allikad

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
