# Lífsár leiðrétt fyrir velferð (WELLBY)

WELLBY er eitt viðbótarstig lífsánægju, á hefðbundnum 0–10 velferðarkvarða, fyrir einn einstakling í eitt ár. Það er byggingarleg hliðstæða QALY sem notað er í heilsuhagfræði — ein eining sem gerir þér kleift að bera saman inngrip þar sem útkomur eiga ekkert annað sameiginlegt — en byggð á huglægri velferð frekar en klínískum heilsuástandi, og sett fram í „Wellbeing guidance for appraisal: supplementary Green Book guidance“ (2021) hjá HM Treasury.

## Hvers vegna það skiptir máli

Kostnaðar-ábatamat þarf sameiginlega einingu til að bera saman styrk til ungmennaklúbbs, umferðaröryggisáætlun og geðheilbrigðisþjónustu, sem deila engum útkomumælikvarða. Heilsuhagfræði leysti þetta fyrir klínísk inngrip með QALY: gæðaleiðréttu lífsári, vigtuðu frá 0 (látinn) til 1 (full heilsa). Velferðarleiðbeiningar HM Treasury víkka sömu rökfræði til útgjalda hins opinbera utan heilbrigðismála, með samræmdu lífsánægjuspurningu ONS („Overall, how satisfied are you with your life nowadays?“, svarað 0–10) sem útkomustiga í stað heilsuástandsvísitölu. WELLBY upp á 1 þýðir að lífsánægja eins einstaklings hækkar um eitt heilt stig í eitt ár (eða, sem er jafngilt, ánægja tíu manna hækkar um 0,1 stig hver í eitt ár — WELLBY leggjast saman yfir þýði eins og QALY gera). Leiðbeiningar HM Treasury setja dæmigert peningalegt verðmæti á hvert WELLBY (um 13.000 £, verðlag 2019/20) sem leitt er út með því að samræma gögn um huglæga velferð við aðrar aðferðir við mat á verðmæti lífsárs, sem gefur matsaðilum leið til að verðleggja útkomur — minni einmanaleika, samheldni samfélags, aðgang að grænum svæðum — sem tækni [velferðarverðmats](../verðmat-á-velferð/) gat áður aðeins lýst, ekki borið saman á sameiginlegum grunni við útgjöld til heilbrigðis- eða öryggismála.

## Stærðfræðin

```
WELLBY = Δ lífsánægja (0–10 kvarði) × fjöldi ára sem breytingin varir
        (summað yfir alla sem verða fyrir áhrifum)

Verðlagður velferðarábati = WELLBY sem myndast × verðmæti á WELLBY (viðmiðunargildi HMT)

sbr. QALY = Δ nytjar heilsuástands (0–1 kvarði) × ár lifuð í því ástandi
```

0–10 ánægjukvarðinn og 0–1 nytjakvarði QALY eru ekki skiptanlegir án umbreytingarskrefs; leiðbeiningar HM Treasury fjalla um að samræma þetta tvennt svo að til dæmis heilbrigðisinngrip metið í QALY og félagslegt inngrip metið í WELLBY séu hvorki hljóðlega tvítalin né ósambærileg innan sama [Green Book mats](../mat-samkvæmt-green-book/).

## Dæmi útreiknað

**Einmanaleikaþjónusta sveitarfélags**: vinaþjónusta þjónar 400 einangruðum eldri íbúum. Eftirfylgnikannanir sýna að meðallífsánægja hækkar úr 5,2 í 6,0 (aukning um 0,8 stig), og áhrifin eru áætluð vara í 2 ár áður en þau fjara út.

```
WELLBY = 400 manns × 0,8 stig × 2 ár = 640 WELLBY

Verðlagt verðmæti = 640 × 13.000 £ = 8.320.000 £
```

Gegn árlegum áætlunarkostnaði upp á 300.000 £ (600.000 £ yfir 2 ár) er ábata-kostnaðarhlutfallið um það bil 8.320.000 / 600.000 ≈ **13,9:1** — tala sem getur nú setið í sömu matstöflu og kostnaður á afstýrt QALY hjá heilbrigðisáætlun eða ferðatímasparnaður í samgönguáætlun.

**Góðgerðarfélag, minni umfang**: samfélagslistaáætlun nær til 50 þátttakenda með mældri ánægjuaukningu upp á 0,3 stig, sem varir í 1 ár.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Verðlagt verðmæti = 15 × 13.000 £ = 195.000 £
```

## Tengsl við hugbúnaðarverkfræði

- Sérhver þjónusta sem snýr að borgurum og safnar nú þegar lífsánægju- eða velferðarkönnunarlið (margir vettvangar sveitarfélaga og heilbrigðis- og umönnunargeirans gera það, í kjölfar fjögurra staðlaðra velferðarspurninga ONS) getur reiknað WELLBY beint úr núverandi gagnaleiðslum í stað þess að panta sérsniðið hagfræðimat fyrir hverja þjónustubreytingu.
- WELLBY gefa verkfræðiteymum sem smíða fyrir skýrslugjöf samkvæmt [lögum um samfélagslegt verðmæti](../lög-um-samfélagslegt-verðmæti/) eða [samfélagslega arðsemi fjárfestingar](../samfélagsleg-arðsemi-fjárfestingar/) landsstaðlaðan nefnara studdan af HM Treasury, sem forðast fjölgun sérsniðinna „áhrifastiga“ sem ekki er hægt að bera saman milli samninga eða birgja.
- Þar sem WELLBY leggjast saman yfir fólk og tíma, falla þau vel að þeirri tegund útkomurakningar á þýðisstigi sem notuð er í kerfum [ábyrgðar byggðrar á útkomum](../ábyrgð-byggð-á-útkomu/) — þjónustumælaborð getur skýrt frá uppsöfnuðum WELLBY sem myndast á ársfjórðungi eins og heilbrigðiskerfi skýrir frá unnum QALY.

## Gildrur

- **Að gera ráð fyrir að sjálftilkynntar ánægjuaukningar megi að öllu leyti rekja til inngripsins** — án mótstaðreyndar (samanburðarhóps eða fyrir/eftir hönnunar með viðmiðum) er ekki hægt að aðgreina WELLBY-aukninguna frá almennri þróun; sjá [mótstaðreyndagreining](../mótstaðreyndagreining/).
- **Að blanda WELLBY og QALY í eina heildartölu án samræmingar** — leiðbeiningar HM Treasury eru skýrar um að þau noti ólíka kvarða og ólíkar undirliggjandi kenningar um verðmæti; að leggja þau saman barnalega tvítelur skarast velferð.
- **Að nota peningalega viðmiðunargildið gagnrýnislaust** — talan í £ á WELLBY er landsmeðaltalsmat með raunverulegum óvissubilum; leiðbeiningar HM Treasury mæla með næmnigreiningu, ekki að líta á hana sem fast gengi.

## Heimildir

- HM Treasury. „Wellbeing guidance for appraisal: supplementary Green Book guidance.“ (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. „Personal well-being user guidance“ (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. „The Green Book: Central Government Guidance on Appraisal and Evaluation.“
