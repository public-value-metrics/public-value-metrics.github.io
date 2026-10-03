# Heaolu-kohandatud eluaastad (WELLBY)

WELLBY on üks lisandUv punkt eluRahulolus, standardseL 0-10-heaolu-skaalal, ühELe isikuLe ühEks aastaks. See on struktuuriLinE analoog QALY'le, mida kasutatakse tervishoiuEkonoomikaS — üksik ühik, mis laseb sul võrrelda interventsioone, millE tulemustEl ei ole mitte midagi muuT ühist — kuid ehitatuD subjektiivseLe heaoluLe, ei kliinilistELe tervisE-olekuteLe, ja sätestatuD HM Treasury "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) all.

## Miks see on oluline

Kulu-kasu-hindamine vajab ühist ühikut, võrreldaMaKs noorteKlubi-grAnti teeRemondi-skeemiGa mentaalTervise-teenuseGa, millest mitte ükS jagab tulemuSe-mõõdikut. TervishoiuEkonoomika lahendaS sedA kliinilisTeLe interventsioonidELe QALY'GA: kvaliteedi-kohandatuD eluAasta, kaalutuD 0-St (surnud) 1-ni (täiS tervis). HM Treasury heaolu-juhend laiendab sama loogika mitte-tervise-avalikuLe kulutuSeLe, kasutaDes ONS harmoniseeritud eluRahulolu-küsimust ("Üldiselt, kui rahul olED oma eluGa praegu?", vastatuD 0-10) tulemuSe-redeliKs, selle asemel, et kasutada tervise-oleku-indeksit. WELLBY 1 tähendab ühE isikU eluRahulolu, mis tõuseb ühE täiS punktI võrra ühEks aastaks (või, ekvivalentSelt, kümnE isikU rahulolu, mis tõuseb 0,1 punkti võrra igaüKs ühEks aastaks — WELLBYd summeeruvaD üle populatsiooni samal viisil, kui QALYd teevaD). HM Treasury juhend seaB illustratiivse rahaLise väärtuSe WELLBY kohta (ligikaudu £13 000, 2019/20-hinnad) tuletatuD forEenimiSeST subjektiivsE-heaolu-andmetE teiSteGa lähenemisTeGa eluAasta väärtusELe, andeS hindajaTeLe viisi tulemuste monetiseerimiSeKs — üksindusE-vähenemine, kogukonna-kohesion, roheala-ligiPääs — mida [heaoluHindamise](../wellbeing-valuation/) tehnikaD varem saiD ainult kirjelDaDa, ei võrrelDa ühiseL alusel tervise- või turvalisuSE-kulutuSeGa.

## Arvutus

```
WELLBY = Δ eluRahulolu (0-10-skaal) × aastate arv, mille
        jooksul muutus püsiB (summeeritud üle kõigi
        mõjutatud inimeste)

MonetiseeritUD heaolu-kasu = genereeritud WELLBYd × väärtus
                             WELLBY kohta (HMT referentsVäärtus)

Vrd. QALY = Δ tervisE-oleku-utiliteeT (0-1-skaal) × aastaD
            elatud selles olekus
```

0-10-rahulolu-skaal ja 0-1-QALY-utiliteedi-skaal ei ole vahetatavaD ühEta konversiooniSammuTa; HM Treasury juhend diskuteerib kahE forEenimist, nii et, näiteks, tervishoiuInterventsioon, hinnatuD QALYdeS, ja sotsiaalnE interventsioon, hinnatuD WELLBYdeS, ei oleKs vaikselt topelt-arvestatuD või jäetud võrdlematuKs samaS [Green-Book-hindamiseS](../green-book-appraisal/).

## Läbitöötatud näide

**Kohaliku omavalitsuse üksindusE-teenus**: sõprusSkeem teenindaB 400 isoleeritud vanemAt elanikku. JärelKontrolli-uuringud näitavaD keskmiSe eluRahulolu tõuSvaNa 5,2-St 6,0-le (0,8-punktiLine kasv), ja efekt hinnataKse püsiVaKs 2 aastaks enne vaibumist.

```
GenereeritUD WELLBYd = 400 isikut × 0,8 punkti × 2 aastat
                      = 640 WELLBYd

MonetiseeritUD väärtus = 640 × £13 000 = £8 320 000
```

Vastu 300 000-naela-aastaseLe programmI-kuluLe (£600 000 üle 2 aasta), on kasu-kulu-suhe roughLy 8 320 000 / 600 000 ≈ **13,9:1** — figuUr, mis saaB nüüD istuda samAs hindamiSE-tabeliS, kui tervishoiu-skeemi kulu-pr.-QALY-väldituD või transPordi-skeemi reisiAja-säästud.

**HeategevusOrganisatsioon, väikseM skaal**: kogukonna-kunstI-programm jõuaB 50 osalejaNi mõõdetuD rahulolu-kasvuGa 0,3 punkti, kestVaga 1 aasta.

```
WELLBYd = 50 × 0,3 × 1 = 15 WELLBYd
MonetiseeritUD väärtus = 15 × £13 000 = £195 000
```

## Seos tarkvaraarendusega

- Mistahes kodanikuLe-vendaTuD teenus, mis juba koguB eluRahulolu- või heaolu-uuringu-itemiT (mitmeD kohaliku-omavalitsuse- ja tervise-ja-hoolDuse-platvormid teevaD, järgiDes ONS'i nelja standardsE heaolu-küsimust), saab arvutada WELLBYd otse olemasolevaST andmePipelineST, selle asemel, et telliDA skräddersyd ekonoomiline hindamine igaLe teenuseMuudatuSeLe.
- WELLBYd annaVaD inseneriMeeskonDadeLe, mis ehitavaD [social-value-act](../social-value-act/)-raporteerimiSeKs või [sotsiaalseKs-tuluKs-investeeringult](../social-return-on-investment/), rahVuslikuLt-standardiseeritud, HM-Treasury-kinnitatuD nimetajA, vältiDes skräddersyd "impact-skooriDe" proliferatsiooni, mida ei saaB võrreldA üle lepingute või tarnijaTe.
- Sest WELLBYd on additiivseD üle inimeste ja aja, koMpoNeeruvaD need puhTalt populatsiooni-tasandi tulemuSE-jälgimiSeSSE, mida kasutatakse [tulemus-põhise-vastutusE](../outcomes-based-accountability/)-süsteemides — teenuse-dashboard saaB raporteerida kumulatiivseid WELLBYd genereeritud kvartali kohta samal viisil, kui tervishoiuSüsteem raporteerib saadud QALYd.

## Lõksud

- **IseRaporteeritud rahulolu-kasVude eeldamine täielikult omistataVaKs interventsioonile.** KontrafaktuaaliTa (võrdlusGrupp või enne/pärast-disain kontrolliGa) ei saaKs eraldada WELLBY-kasvu üldisTeST trendiDest; vaata [kontrafaktuaalne analüüs](../counterfactual-analysis/).
- **WELLBYde ja QALYde segamine ühEks totaaliKs forEenimiSeTa.** HM Treasury juhend on selgeSõnaline, et kaks kasutavaD erinevaid skaalu ja erinevaid alusOlevaid väärtuSE-teooriaid; nende naiivne summeerimine topelt-arvestab kattuvat heaolu.
- **ReferentsVäärtuSe kasutamine ukritiLiselt.** £-pr.-WELLBY-figuur on rahVuslik-keskmine-hinnang reaalseteGa ebaKindlusE-vöönDideGa; HM Treasury juhend soovitab tundlikkuSe-analüüsI, ei selle käsitlemist fikseeritud vahetuSKurSiNa.

## Allikad

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
