# Revealed preference hindamine

Revealed preference meetodid tuletavad mitte-turu kauba väärtuse vaadeldAvast käitumisest seotuD turul, selle asemel, et küsida inimesteLt otse. Hedoonikaline hinnastamine ja reisiKulu-meetod on kaks töökobe-tehnikat: mõlemad algavad reaalSeSt tehingust ja tuletavad implitsiitse hinna asjaLe, mida mitte kunagi otse ei müüdud.

## Miks see on oluline

Kus [stated preference](../stated-preference-valuation/) meetodid küsivad hüpoteetiLiSt küsimust, jälgivad revealed preference meetodid, mille eest inimesed tegelikult maksid, mida Green Book käsitleb üldiselt usutavaMA tõendiNa, kõik muu olles võrdne, sest see ei ole hüpoteetilisE kallutatuSeLe allutatud — respondendid hedoonikaLiseS majaHinna-uuringuS maksid tõepoolest preemiumi või allahindluse, mida mõõdetakse (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Lisa 2). Hedoonikaline hinnastamine dekomponeerib turuHinda — tüüpiliselt majaHinnad — implitsiitseKs hinDaKs iga kauba atribuuDi jaoks, laskeS analüütikuteL isoleerida, näiteks, hinnaPreemiumi, mida leibkonnad tegelikult maksavad, et elada kuSkil vaiksEMas kohas või paremA õhuKvaliteediGa, kontrolliDES statistiLiselt kõigE muu atribuuDi jaoks, mis ka mõjutab majaHinda (suurus, asukoht, kooliRajoon). ReisiKulu-meetod teeb analoogse asja rekreatSiooniLe alaDeLe sissePääsu-tasuta: aeg ja raha, mida inimesed kulutavad reisimiSeKs alale, paljastab alumisE piiri sellE kohta, mida ala on neile väärt, sest keegi ei kanna kulu, mis ületaks, mida visiit on neile väärt.

Mõlemad meetodid jagavad struktuuriLisE limiteerinGu: need saavad hinnastada ainult sellE, mis on manustatud olemasolevaSSE turuTehinguSSE. Müra lennuRaja lähedal ilmub majaHindaDeS, sest inimesed, kes hoolivad mürAst, sorteeruvad vaiksEMaSSE elamispinnaSSE; liigi, mida keegi ei külasta või ei ela lähedal, olemasolu-väärtus ei ilmu üldse mitte mingis tehinguS, mis on täpselt lünk, mille täitmiseKs [stated preference](../stated-preference-valuation/) meetodid eksisteerivad.

## Arvutus

```
Hedoonikaline hinnastamine:
  MajaHind = f(strukturaalsed atribuudid, asukohaAtribuudid,
              huviPakkuv keskkonnaAtribuut, ...)
  Hinda regressiooniGa; koefitsient keskkonnaAtribuuDiL
  (hoideS kõike muud konstantSeNA) on selle implitsiitne
  hind.

  AtribuuDi X implitsiitne hind = ∂(MajaHind) / ∂X

ReisiKulu-meetod:
  Visiidi-määr (visiidid elanikuKohaselt tsooniSt i) =
  f(reisiKulu tsooniSt i, asendusAlad, sotsiaalekonoomiliseD
  kontrollid)
  Hinda nõudluSKõver visiitideLe reisiKulu funktsiooniNa.
  TarbijaÜleJääk = hinnatud nõudluSKõvera alla jääv ala
                  = ala väärtus külastajateLe
```

Mõlemad meetodid vajavad statistiLiselt usaldusVäärset kontrolli-setti — segavA atribuuDi vahele jätmine (hedoonikaline) või lähedale asendusAla (reisiKulu) kallutab implitsiitse-hinna hinnangu suunaS, mis ei ole alati ettenähtAV, mis on, miks Green Book Lisa 2 nõuab, et regressiooniSpetsifikatsioon ja kontrollid raporteeritaKse, mitte ainult pealKirjaKoefitsient.

## Läbitöötatud näide

**Riiklik valitsus**: Green Booki oma varjuHinD süsinikuLe metodoloogia tugineb osaLiselt hedoonikaLiseLe tõendiLe, kuid lihtSam illustratiivne juhtum on lennukiMürA. Hedoonikaline uuring, mis regresseerib majaMüügiHindu lennuRaja-piirkonnaS vastu distantsi-kaalutuD mürA-eksponeeringuLe, kontrolliDES suuruSe, vanuSe, ja kooliRajoonI eest, leiab, et igA 1 detsibelLiNe tõus keskmiSes mürA-eksponeeringuS on seotud 0,5%-liSe vähenemiSeGa majaHinnas. Tüüpilise 280 000 £ maja puhul mõjutatuD alal:

```
Implitsiitne hind detsibeli kohta = 280 000 £ × 0,5% =
                                    1400 £ leibkonna kohta
Mõjutatud leibkonnad 3dB tõuSuSt uuDest lennuRajaSt = 18 000
Agregeeritud implitsiitne kulu mürA-tõusuSt = 1400 £ × 3 ×
                                             18 000 = 75,6m£
```

See on ühekordne kapitaliseeritud kulu (manustatud majaHinda), mida hindamine peab olema ettevaatlik, et mitte topelt-arvestada eraldi hinnatuD aastaSe mürA-häirimiSe-kulu-vooGA vastu.

**Heategevusorganisatsioon**: keskkonnaheategevusorganisatsioon kasutab reisiKulu-meetodit, et hinnastada tasuta-sisseePääsuga loodusReservaaDi. Uuringuandmed külastaja-postNumbriteSt annab keskmise edasi-tagasi-reisiKulu (aeg väärtustatud Green Booki soovitatuD mitte-töö-aja-väärtuSeGa, pluss kütus) 14 £ visiidi kohta, 40 000 visiidiGA aastaS. Hinnatud nõudluSKõver — visiidiMäärade langeMinE, kui reisiKulu tsooniSt tõuseb — implitseerib tarbijaÜleJäägi visiidi kohta, üle 14 £ tegelikult kulutatuD, ligikaudu 9 £.

```
KoguAastane väärtus = 40 000 visiiti × (14 £ kulutatuD +
                      9 £ tarbijaÜleJääk)
                    = 40 000 × 23 £ ≈ 920 000 £/aastas
```

See varjutab reservaaDi nulli-sissePääsu-tasu-tulu ja annab heategevusorganisatsiooni usaldusMeesteLe kaitstavA näitaja ala rekreatSiooniliSest väärtuSeSt, kui rahastajaTeLe juhtumit esitatakse.

## Seos tarkvaraarendusega

Revealed preference-mõtlemine ilmub avaliku sektori tooteAnalüütikas sagedamini, kui praktikuD taipavad: kasutamisAndmed tasuta statslikuSt digiTeenuSeSt on ise revealed-preference-tõend väärtuSeSt (frekvents, sessiooniKestvus, ja — kõige rääkivaMAlt — korduv-versus-ühekordne kasutamisMuster saab analüüsida samal viisil, kui reisiKulu-mudel käsitleb visiidi-frekventsi distantsi vastu). Kus teenusel on genuine asendajad (paberKanal, telefoniLiiN), saab kodanikuDe kantuD "kulu" digiKanali kasutamiseKs selle asemel (aeg, andmed, seade) hinnata ja võrrelda kasutamiseGa, kajastaDES reisiKulu-loogikat otse. Vaata [digitaalne teenuseStandard](../digital-service-standard/) ja [avatuD andmete väärtus](../open-data-value/), mis seisab täpselt sellES väärtustamisProbleemiS kauba jaoks ilma otseSe turuHinnaTa.

## Lõksud

- **VahelejäetuD muutuja kallutatuS hedoonilisteS mudeliteS.** KorreleerituD atribuuDi (kooliKvaliteet, mis korreleerub nii majaHinna kui huviPakkuvA keskkonna-muutujaGa) vahele jätmine kallutab implitsiitse-hinna hinnangut; spetsifikatsioon vajab raporteerimist ja granskumist, mitte ainult tulemust.
- **AsendusAlade ignoreerimine reisiKulu-uuringuteS.** Külastaja paljastatuD väärtus alaLe on alaHindatud, kui lähedasem asendaja eksisteerib ja ei ole kontrollitud — nad võivad külastada peamiselt, sest see on tasuta, mitte sellepärast, et see on uniikselt väärtuslik.
- **Revealed preference'i rakendamine kaubaLe ilma mingita turu-kajaTa.** Olemasolu-väärtus, optsiooni-väärtus, ja pärandus-väärtus ei ilmu üldse mitte mingis tehinguS ja ei saa taaskonstrueerida hedoonikaliste või reisiKulu-meetoditeGa — see lünk kuulub [stated preference hindamiseLe](../stated-preference-valuation/).
- **Kapitaliseeritud (ühekordse) väärtuSe segiAjamine aastaSe vooGA.** HedoonikaListeD majaHinna-efektid on tüüpiliselt ühekordseD kapitaliseeritud väärtused; nende käsitlemine aastaSe kasu-vooGA inflatsioonib hindamist.

## Allikad

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
