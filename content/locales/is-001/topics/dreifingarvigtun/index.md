# Dreifingarvigtun

Dreifingarvigtun leiðréttir peningalegt verðmæti kostnaðar eða ávinnings eftir því hver fær hann, út frá þeirri meginreglu að auka pund sé meira virði fyrir fátækt heimili en ríkt. Green Book hjá HM Treasury veitir skýra aðferð til að beita þessari vigtun, byggða á minnkandi jaðarnytju tekna, þannig að mat felli ekki hljóðlega pund sem tíundi hluti hinna ríkustu fær að jöfnu við pund sem hinir fátækustu fá.

## Hvers vegna það skiptir máli

Hefðbundin kostnaðar- og ábatagreining leggur saman pund án þess að spyrja hverra pund þau eru, sem gerir hljóðlega ráð fyrir að pund sé jafn mikils virði fyrir alla — forsenda sem hagfræðingar hafa lengi vitað að er röng. Heimili með 15.000 £ í árstekjur upplifir 1.000 £ ávinning allt öðruvísi en heimili með 150.000 £ í árstekjur, því jaðarnytja tekna fellur eftir því sem tekjur hækka. Óvigtað ívilnar hefðbundið mat kerfisbundið inngripum sem gagnast efnameiri hópum sem þegar standa betur, því meiri kaupmáttur þeirra blæs upp peningalegt verðmat ávinnings sem nær til þeirra (uppfærsla garðs nálægt dýru húsnæði „sýnir“ meiri ávinning í fasteignaverði en sama uppfærsla nálægt ódýru húsnæði, eingöngu vegna þess að verð eru hærri, ekki vegna þess að velferðaraukningin sé meiri).

Viðbótarleiðbeiningar Green Book um dreifingargreiningu, styrktar eftir úttekt Treasury 2020 sem brást við gagnrýni á að matsaðferðafræðin ívilnaði kerfisbundið London og suðausturhorni Englands, setja fram formlega vigtunaraðferð byggða á gefinni teygni jaðarnytju tekna upp á um 1,3 — sem þýðir að tvöföldun tekna helmingar um það bil (nánar tiltekið 2^-1,3 ≈ 0,41 sinnum) jaðarvirði aukapunds. Þetta er ekki námundunarleiðrétting: beiting hennar getur breytt því hvor af tveimur samkeppnisáætlunum sýnir hærra núvirt hreint virði, einkum þegar inngrip einbeitt á vanhaldið svæði er borið saman við eitt sem dreifist yfir almenna þýðið.

## Stærðfræðin

Dreifingarvigt Green Book fyrir pund af ávinningi sem fellur heimili á tekjustigi y, miðað við pund á landsmeðaltali tekna ȳ:

```
Vigt(y) = (ȳ / y)^e

þar sem:
  y  = heimilistekjur (eða tekjur viðkomandi hóps)
  ȳ  = meðaltal (viðmið) heimilistekna
  e  = teygni jaðarnytju tekna (Green Book: um það bil 1,3)
```

Vigtum beitt á nettóávinning:

```
Vigtaður ávinningur = Σ [óvigtaður ávinningur hóps i × Vigt(y_i)]
```

Hópur með helming landsmeðaltalsins (y = 0,5ȳ) fær vigtina (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — hvert pund ávinnings fyrir þann hóp telst um það bil 2,46 sinnum meira virði en pund fyrir heimili með meðaltekjur.

## Dæmi útreiknað

**Tvær samkeppnisáætlanir á staðnum**, hvor með óvigtaðan nettóávinning upp á 2 milljónir punda á ári, sem keppa um sama svæðisbundna vaxtarsjóð:

- *Áætlun A*: fyrirtækjastuðningur í velmegandi bæ, meðalheimilistekjur 45.000 £ (um það bil 1,3 sinnum gefið landsmeðaltal 35.000 £).
- *Áætlun B*: hæfniáætlun í vanhöldnu hverfi, meðalheimilistekjur 18.000 £ (um það bil 0,51 sinnum landsmeðaltalið).

```
Vigt(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Vigt(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Vigtaður ávinningur A = 2.000.000 £ × 0,72 = 1,44 milljónir £
Vigtaður ávinningur B = 2.000.000 £ × 2,53 = 5,06 milljónir £
```

Óvigtaðar eru áætlanirnar tvær jafnar. Vigtaður fyrir dreifingaráhrif er ávinningur áætlunar B meira en þrefalt stærri — niðurstaða sem snýr við fjármögnunartillögunni og endurspeglar skýran tilgang Green Book með því að krefjast þess að vigtunin sé sýnd, ekki aðeins óvigtað hlutfall ávinnings og kostnaðar.

**Úthlutun styrkja góðgerðarfélags**: fjármögnunaraðili sem ber saman 500.000 £ styrk sem nær til 1.000 lágtekjuheimila (vigt ≈ 2,0, vigtað verðmæti jafngildi 1 milljónar £) og sömu 500.000 £ sem ná til 1.000 millitekjuheimila (vigt ≈ 1,0, vigtað verðmæti jafngildi 500.000 £) ætti að sýna dreifingarrökin skýrt í stjórnarskjali sínu, ekki skilja það eftir til ályktunar.

## Tengsl við hugbúnaðarverkfræði

Dreifingarvigtun birtist sjaldan beint í mælikvörðum hugbúnaðarafhendingar, en hún ætti að móta hvernig verkfræði- og gagnateymi hanna mælingar og markhópagreiningu:

- Þegar áhrifamælaborð eða ávinningsreiknivél er smíðuð skal sýna tekju- eða skerðingarsnið þeirra sem verða fyrir áhrifum, ekki aðeins heildarsamtölu ávinnings — samanlagðar tölur án dreifingarsundurliðunar fela einmitt viðsnúninginn sem sýndur er hér að ofan.
- Tengdu markhópsrökfræði í þjónustuhönnun við sömu skerðingargögn og Green Book notar — sjá [vísitala margþættrar skerðingar (IMD)](../vísitala-margþættrar-skerðingar/) — svo hægt sé að meta umfang stafrænnar þjónustu fyrir jafnræði, ekki aðeins skilvirkni (hið umdeilda fjórða E í [hagkvæmni útgjalda (VFM)](../hagkvæmni-útgjalda/)).
- Þegar reiknirit úthlutar af skornum skammti (tímabókunum, tíma málsmeðhöndlara, niðurgreiðslu) mun óvigtað markfall um „hámarka heildarávinning“ endurskapa, samkvæmt hönnun, sömu skekkju og vigtun Green Book er til að leiðrétta — bentu stefnueigendum skýrt á þetta áður en bestað er.

## Gildrur

- **Að beita dreifingarvigtum ósamræmt yfir eignasafn.** Að vigta ávinning einnar áætlunar en ekki samanburðaráætlunarinnar skilar skekktum, ekki sanngjarnari, samanburði; Green Book krefst sambærilegrar meðferðar.
- **Að nota fasteigna- eða markaðsverð sem staðgengil velferðar án leiðréttingar.** Markaðsverð eru sjálf skekkt af núverandi tekjuójöfnuði, sem er einmitt það sem dreifingarvigtun á að leiðrétta — að nota óleiðrétt markaðsverð getur tvítalið skekkjuna.
- **Að hunsa breytileika innan hópa.** Vigtun eftir meðaltekjum svæðis (t.d. tíundarhluta Index of Multiple Deprivation) getur afbakað einstaklinga sem passa ekki við meðaltal síns svæðis; notaðu fínkornóttustu tekjugögn sem eru sanngjarnlega tiltæk.
- **Að líta á teygnina 1,3 sem algildan fasta.** Green Book bendir sjálft á að þetta sé mat með sennilegu bili; prófaðu næmi stórra ákvarðana gagnvart öðrum teygnigildum í stað þess að líta á 1,3 sem nákvæma.

## Heimildir

- HM Treasury, „The Green Book: Central Government Guidance on Appraisal and Evaluation“, and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, „Green Book Review 2020: Findings and Response“ (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. „Valuation Techniques for Social Cost-Benefit Analysis.“ HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
