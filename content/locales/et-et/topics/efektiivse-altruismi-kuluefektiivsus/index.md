# Efektiivse altruismi kuluefektiivsus

Efektiivse altruismi (EA) kuluefektiivsuSe-räsoNeerimine rangjastab heategevuslikke interventsioone heA koGuSe järGi — enamasti väljendatuNa kui päästetud eluSid, või saavutatuD tervist, dollari kulutatuD kohta — ja suunab raha, kuhu interventsioon ostab kõige rohkem head marginaaLiL. GiveWell on feldi kõige mõjuKaM praktikant: see avaldab selgeSõnaliseD, uuendatuD kulu-pr.-eluSt-päästetuD ja kulu-pr.-tulemuS-hinnanguid lühikeseLe nimekirjaLe "top-heategevusorganisatsioonideSt," ja soovitab annetajaTel anda, millELe praegu on ruumi rohkemaKs rahastamiSeKs parimAl määrAl.

## Miks see on oluline

GiveWell nimetab kuluefektiivsuSe juhtivaKs kriteeriumiKs oma avaldatuD metodoloogiaS: see otsiB evidentsiL-põhiseid interventsioone, hindab nende kuluefektiivsuSt ühiseS ühikuS, ja rangjastab üle täiesti seostuSetutE sihtidE — voodiVõrgud malaariA vastu, A-vitamiini-lisandus, kontant-ülekanded, vaktSiini-stimuleerimiSe-makseD — üksikuL telgEl. See on otseNe import QALY/DALY-stiiL-räsoNeerimisest tervishoiuEkonoomikaSt filantroopiaSSE: nagu tervishoiuSüsteem küsib "kui palju QALYd naela kohta marginaaLiL," küsib GiveWell "kui palju eluSid, või eluAastaid, dollari kohta marginaaLiL," ja käsitleb sihTe asendatavaTeNa, kord kui need on konverteeritud sellESSE ühiSeSSE ühikuSSE. Vaata [kuluefektiivsuse analüüs valitsuses](../kuluefektiivsuse-analüüs-valitsuses/) sellE räsoNeerimis-raamistikU avaliku-sektori-nõbU jaoks.

Kõige tsiteerituM GiveWell-figuur puudutab Against Malaria Foundationi (AMF), mis distribUeerib insektitSiidiGa-töödeldud voodiVõrke. GiveWell'i avaldatud läbitöötatud näiteS (tõmmatud 2020-rahastamiSe-andmeTeST) rahastaS ligikaudu $4500 piisavalt võrke, et vältida ühT surmA, pärast arvesse võtmist imperfektseST võrgu-kasutuSest, baasJoonE-mortaliteediST ilma võrkudeTa, ja kohandumiST funginguLe — võimaluSeLe, et AMF oleks saanud osa sellest rahastamiSeST teiStelt annetajaTelt uanset. GiveWell on selgeSõnaline, et see figuur liigub üle aja ja üle geograafiate, kuna malaariA levik, võrgu-kulud, ja rahastuSE-lünGad muutuvaD, ja et eluD päästmiSe kulu üldiselt eeldataKse tõuSvaKs aja jooksul, kuna odavaimad võimalused võetaKse eKs; see on illustratiivne näide meetodiST, mitte fikseeritud hind.

## Arvutus

```
Kuluefektiivsus = interventsiooni kulu / toodetuD heA
                 ühikuD (nt $ eluSt päästetuD, $ DALY
                 vältatuD, $ QALY)

GiveWelli kett voodiVõrgu-programmiLe, illustratiivselt:
  $ ostetud ja tarnitud võrgu kohta
    ÷ tegelikult kasutatuD võrkude osa
    ÷ kaitstud inimest võrgu kohta
    × baasJoonE-aastane-mortaliteet ilma võrkudeTa
    × mortaliteedi-vähenemine, mis on omistatav võrgu-
      kasutamiseLe (RCT-evidentsIst)
    × kaitSe-aastate arv võrgu kohta
    ÷ kohandus funginguLe (raha, mis nihutab teisi
      annetajaid)
  = $ eluSt päästetuD (netoNa kontrafaktuaalseteST
    rahastamiSe-efektiDest)
```

See kett on oluline, sest igA astE on kohT, kus kuluefektiivsuSe-hinnangud tavaliselt läheb valeSti — vaata lõksud allPool — ja sest see teeb selgeSõnaliseKs, et "kulu eluSt päästetuD kohta" ei ole mitte kunagi toores vaadeldAv hind; see on modelleeritud hinnang, ehitatud mitmeteST eraldi ebaKindlAteST sisendiTest.

## Läbitöötatud näide

Kaks hüpoteetiLiSt interventsiooni, mõlemad evidentsiL-põhiseD, konkureerivad samaLe marginaalseLe £100 000:

- **VoodiVõrGud (AMF-stiiL)**: ligikaudu $4500 eluSt päästetuD kohta GiveWell'i avaldatud läbitöötatud näiteS, mis on tõmmatud 2020-andmeteST, mis tähendab ligikaudu 20 eluSid päästetuD £100 000 kohta, sõltuvalt vahetusKurSist ja kasutatuD aasta.
- **UssiVastasE-ravi-programm**: puudub plausiBel mortaliteedi-kasu üldSe, kuid tugeV evidenTS pikaAjalisTeST sissetuleku-kasVudeST lapsPoLvE ussiVastaseST ravist; GiveWell väärtusTab sellE sissetuleku-kasvu-termineis, mitte eluSid-päästetuD, mis muudab selle raskeKs võrreldA otse voodiVõrkudeGa ühiSeTa ühikuTa. GiveWell kasutab selgeSõnalist "moraalseD kaalud"-raamistikKu, konverteeriMaKs mõlemad üheKs siseMiseKs ühikuKs rangjastamiSeKs.

EA-meetodi distsipliin on sundiDA sedA võrdlust avatuSSE, mitte rahastaDa mõlemat, sest mõlemad "kõlavaD hästi." Vaata [sotsiaalne tulu investeeringult](../sotsiaalne-tulu-investeeringult/) ekvivalentSe sundiva funktsiooni jaoks, mida kasutavaD britiD sotsiaalseD ettevõtted ja kohaliKud tellijad, mis küsib sama küsimuSE — mis on parim tulu naela kohta — monetiseeritud-väärtuSe idioomiS, mitte eluD/DALY-idioomiS.

## Seos tarkvaraarendusega

Insenerid, mis ehitavad annetaja-platvorme, grAndi-sobitamiSe-riistaD, või impact-dashboardiD EA-tasakaalustatuD rahastajaTeLe (Open Philanthropy, GiveWell ise, efektiivse-andmise-platvormid nagu Giving What We Can), vajavad kuluefektiivsuSe-hinnanguid esitaDA vahemikKudeNa angeTud eeldusTeGa, ei üksikuTe arVudeNa — alusOlev mudel oMab mitu multiplikatiivsEt ebaKindlAt sisendit, ja selle kollapseerimine üheKs figuuriKs dashboardiL misRepresenteerib usalduSt, mida GiveWell ise väidab. Versioneeri iga hinnang avaldamiSe-kuupäeva järGi; GiveWell revideerib oma numbrid, mõnikord oluliselt, kuna uus RCT-evidentS või rahastamiSe-lünGa-andmed saabub, ja platvorm, mis cacheb vana figuuri, läheb vaikselt valeKs.

## Lõksud

- **KuluefektiivsuSe-hinnangu käsitlemine fikseeritud hinnaNa.** See on mudeli-väljund mitmeteGA ebaKindlAtEGa multiplikatiivseteGa sisendiTeGa (kasutuSE-määrad, baasJoonE-mortaliteet, funginguLe-kohandus); angma kuupäev ja versioon.
- **Fungingu/nihutamise ignoreerimine.** Organisatsiooni rahastamine, mis oleks saanud raha teiST annetajaST niikuinii, ostab vähem kontrafaktuaalSt heaD, kui pealKiri soovitab — vaata [täiendavus ja surnud kaal](../täiendavus-ja-surnud-kaal/) ja [nihutamine ja omistamine](../nihutamine-ja-omistamine/).
- **Võrdlemine üle inkompatiibleD ühikuteST konverteerimaTa.** "Elud päästetuD" ja "sissetulek saaduD" ei ole otse võrreldAvad ühEta selgeSõnaliseta moraalsetE-kaalude-raamistikuTa; nende esitamine kõrvuTi, nagu oleksid need sama, on kategooriA-viga.
- **SihtVaLdkonna-tunneliVaade.** Rangjastamine ainult üheS sihtVaLdkonnaS (nt ainult globaalseD tervise-heategevusorganisatsioonid) ja võitja nimetamine "kõige kuluefektiivsemaKs heategevusorganisatsiooniKs" üleHindab väidet; GiveWell'i tvär-sihT-rangjastus on tahtLikuLt kitsaS (globaalne tervis ja heaolu), mitte universaalne.

## Allikad

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
