# Fjölviðmiðagreining ákvarðana (MCDA)

MCDA gefur valkostum einkunn og vigtar þá gagnvart nokkrum aðskildum, vigtuðum viðmiðum samtímis, og skilar raðaðum samanburði án þess að þvinga hvert viðmið inn á einn peningalegan eða náttúrulegan einingakvarða. Hún er matsaðferðin fyrir ákvarðanir þar sem útkomurnar sem skipta máli verða raunverulega ekki þjappaðar í eina tölu.

## Hvers vegna það skiptir máli

Green Book heimilar MCDA sérstaklega (viðauki með dæmisögum í Box 2 og Annex A fjalla báðir beint um hana) fyrir mat þar sem ávinningur er „raunverulega ósamanburðarhæfur“ — þar sem umbreyting alls í peninga með [samfélagslegri kostnaðar- og ábatagreiningu](../samfélagsleg-kostnaðar-og-ábatagreining/), eða í eina útkomu með [kostnaðarhagkvæmnigreiningu](../kostnaðarhagkvæmnigreining-hjá-hinu-opinbera/), myndi afbaka ákvörðunina fremur en skýra hana (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Staðarval fyrir nýtt fangelsi, til dæmis, vegur fjárfestingarkostnað á móti áhrifum á samfélag, samgöngutengingum, umhverfisáhrifum og því hversu auðvelt er að ráða starfsfólk — viðmið sem deila ekki sameiginlegri einingu og þar sem þvingun sameiginlegrar einingar (venjulega peninga) myndi smygla inn verðmætamati um hlutfallslegt mikilvægi, segjum, umhverfisáhrifa á móti kostnaði, klæddu sem hlutlægum reikningi.

Heiðarleiki MCDA er jafnframt helsti veikleiki hennar: þar sem vigtir eru ákveðnar af þeim sem framkvæmir matið (eða nefnd) er aðferðin aðeins jafn lögmæt og vigtunarferlið. Leiðsögn Green Book er skýr um að viðmið og vigtir verði að vera samþykkt og birt *áður* en valkostum er gefin einkunn, einmitt til að koma í veg fyrir að yfirferðaraðili vinni afturábak frá æskilegum valkosti að vigtunum sem réttlæta hann.

## Stærðfræðin

```
Fyrir hvern valkost i og viðmið j:
  Einkunn_ij = frammistaða valkostsins gagnvart því viðmiði (oft 0–100
               eða 1–10, úr sönnunargögnum, sérfræðimati eða einkunnagjöf hagsmunaaðila)
  Vigt_j     = hlutfallslegt mikilvægi viðmiðs j, vigtir leggjast saman í 1 (eða 100)

Vigtuð einkunn valkosts i = Σ_j (Einkunn_ij × Vigt_j)

Aðferð:
1. Samþykktu viðmiðasafn og vigtir ÁÐUR en nokkur valkostur fær einkunn (sveifluvigtun
   eða paraður samanburður, t.d. AHP, eru algengar aðferðir til að afla vigta).
2. Gefðu hverjum valkosti einkunn gagnvart hverju viðmiði á sameiginlegum kvarða,
   úr sönnunargögnum þar sem unnt er.
3. Reiknaðu vigtaðar heildartölur; raðaðu valkostum.
4. Næmisprófaðu vigtirnar: lifir röðunin af sennilegan ágreining um hve miklu
   hvert viðmið ætti að skipta?
```

MCDA skilar ekki réttlætanlegu algildu virði eins og núvirt hreint virði SCBA — hún skilar aðeins röðun háðri samþykktum vigtum. Þetta er kostur þegar ákvörðunin snýst í raun um að vega ósamanburðarhæf gæði, og galli ef hún er notuð til að komast hjá erfiðari vinnu við peningalegt mat þar sem peningalegt mat var í raun mögulegt.

## Dæmi útreiknað

**Sveitarfélag**: sveitarfélag sem velur staðsetningu fyrir nýja endurvinnslustöð fyrir heimilisúrgang gefur þremur stöðum einkunn gagnvart fjórum viðmiðum, vigtuðum af þverdeildanefnd áður en nokkur staður var skoðaður:

```
Viðmið (vigt):          Fjárfestingarkostnaður (30%)  Aðgengi samgangna (25%)
                         Áhrif á samfélag (25%)  Umhverfisáhrif (20%)

Einkunnir staða (0–100, hærra = betra):
Staður A: kostnaður 80, aðgengi 60, samfélag 40, umhverfi 70
Staður B: kostnaður 60, aðgengi 90, samfélag 70, umhverfi 50
Staður C: kostnaður 90, aðgengi 50, samfélag 80, umhverfi 60

Vigtaðar heildartölur:
Staður A = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
Staður B = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
Staður C = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

Staður C er efstur. Næmiskeyrsla sem færir vigt áhrifa á samfélag úr 25% í 35% (tekur 10 stig af fjárfestingarkostnaði) breytir heildartölu staðar C í 71,5 − 3 + 8 = 76,5 og staðar B í 68 − 6 + 7 = 69 — staður C er enn efstur, svo röðunin er stöðug gagnvart þessum sennilega ágreiningi um vigtun, sem er nákvæmlega athugunin sem Green Book væntir að sjá tilkynnta.

**Góðgerðarfélag**: styrkveitingarsjóður sem velur á milli þess að fjármagna skuldaráðgjafarþjónustu, net matarbanka og fjármálalæsisáætlun notar MCDA frekar en SROI (sjá [samfélagsleg arðsemi fjárfestingar](../samfélagsleg-arðsemi-fjárfestingar/)) einmitt vegna þess að stjórnarmenn eru, í góðri trú, ósammála um hvort neyðaraðstoð eða forvarnir ættu að vega þyngra — MCDA gerir þeim kleift að semja um *lögun* ágreiningsins (vigtunarbil) fremur en að þykjast að eitt SROI-hlutfall leysi hann.

## Tengsl við hugbúnaðarverkfræði

MCDA er eðlilegt tól fyrir val á seljanda og arkitektúr þegar viðmið stangast raunverulega á — val á milli skýhýsts og staðbundins málastjórnunarkerfis vegur kostnað, hættu á gagnafullveldi, aðgengi og afhendingarhraða á þann hátt að ekki verður þjappað í eina tölu. Verkfræðistjórar ættu að krefjast þess að vigtun fari fram áður en valkostum er gefin einkunn, nákvæmlega eins og Green Book krefst, því vigtunaræfing sem framkvæmd er eftir að stuttlisti hefur sést rekur áreiðanlega í átt að þeim valkosti sem salurinn hafði þegar kosið. Sjá [smíða eða kaupa hjá hinu opinbera](../smíða-eða-kaupa-hjá-hinu-opinbera/) fyrir algenga beitingu MCDA, og [stigakort opinbers verðmætis](../stigakort-opinbers-verðmætis/) fyrir skylt skipulagt einkunnagjafartól sem notað er eftir ákvörðun frekar en fyrir hana.

## Gildrur

- **Að ákveða vigtir eftir að hafa séð valkostina.** Þetta er algengasta einstaka leiðin til að hagræða MCDA, viljandi eða ekki; birtu vigtir fyrir einkunnagjöf og skráðu hver ákvað þær.
- **Að líta á vigtuðu heildartöluna sem harða tölu.** Einkunn 71,5 á móti 68 er ekki tölfræðilega marktækt bil nema næmisgreining staðfesti að röðunin sé stöðug; tilkynntu bil, ekki falska nákvæmni.
- **Að nota MCDA til að komast hjá peningalegu mati sem var í raun framkvæmanlegt.** Ef hægt væri að verðleggja flest viðmið á trúverðugan hátt, hendir sjálfgefið val á MCDA í stað [SCBA](../samfélagsleg-kostnaðar-og-ábatagreining/) upplýsingum sem matið hefði getað notað.
- **Að leyfa einum ráðandi hagsmunaaðila að ákveða allar vigtirnar einn.** Góð venja Green Book væntir þess að vigtir séu fengnar frá fulltrúanefnd, ekki styrktarstjóranum, til að koma í veg fyrir að matið endurleiði einfaldlega það sem sá einstaklingur vildi þegar.

## Heimildir

- HM Treasury. „The Green Book: appraisal and evaluation in central government.“ 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. „Multi-criteria analysis: a manual.“ 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. „Multiple Criteria Decision Analysis: An Integrated Approach.“ Kluwer,
  2002.
