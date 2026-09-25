# Dangosyddion Perfformiad Allweddol (KPIs) y Sector Cyhoeddus

Mae dangosydd perfformiad allweddol (KPI) yn fesur dethol, sy'n cael ei olrhain, sy'n sefyll yn lle'r
cwestiwn a yw gwasanaeth cyhoeddus yn gwneud ei waith yn dda. Yn y llywodraeth, nid yw dewis KPI byth
yn niwtral: gan fod KPIs yn gysylltiedig â chyllidebau, tablau cynghrair, a gyrfaoedd, mae'r weithred
o ddewis un yn siapio ymddygiad pawb sy'n dilyn ar ei ôl, yn amlach na pheidio yn fwy na'r polisi a
greodd y gwasanaeth yn y lle cyntaf.

## Pam mae hyn yn bwysig

Mae sylw Charles Goodhart ym 1975 ar bolisi ariannol — a boblogeiddiwyd yn ddiweddarach gan Marilyn
Strathern fel "pan fydd mesur yn dod yn darged, mae'n peidio â bod yn fesur da" — yw'r label rhybudd
pwysicaf un ym maes rheoli perfformiad y sector cyhoeddus. Mae KPI a ddewiswyd i *ddisgrifio* system
yn dechrau *ystumio* system o'r eiliad y caiff adnoddau, cyflog, neu oroesiad gwleidyddol eu clymu
wrtho. Yr enghraifft glasurol yw amseroedd ymateb ambiwlansys y GIG: pan ddaeth y targed ymateb
Categori A o wyth munud yn rhwymol, dangoswyd bod rhai ymddiriedolaethau wedi "pentyrru" ambiwlansys
y tu allan i'r cloc amser ymateb, neu wedi ailddosbarthu galwadau, er mwyn cyrraedd y rhif heb newid
canlyniadau cleifion o gwbl. Mae canllawiau'r National Audit Office ar ddewis a defnyddio dangosyddion
perfformiad — a nodir ar draws ei hadroddiadau gwerth am arian a'i fframwaith "Performance Measurement
by Regulators" a "Choosing the Right FABRIC" (Fit for purpose, Appropriate, Balanced, Robust,
Integrated, Cost-effective) — yn bodoli'n union oherwydd bod adrannau'n dal i ddewis dangosyddion oedd
yn hawdd eu hadrodd yn hytrach na dangosyddion oedd yn anodd eu twyllo. Mae peiriannydd meddalwedd sy'n
cyflenwi'r dangosfwrdd y bydd gweinidog neu gyfarwyddwr yn cael ei farnu yn ei erbyn yn, boed hynny'n
fwriadol ai peidio, yn dylunio strwythur cymhelliant sefydliad cyhoeddus.

## Y fathemateg

Mae dylunio KPI yn bwnc siâp-fframwaith, ond mae *gwerthuso* KPI ymgeisiol yn rhestr wirio y gellir ei
hailadrodd, nid yn fformiwla:

```
Ar gyfer pob KPI ymgeisiol, sgoriwch yn erbyn:
  Addas i'r diben  — a yw'n mesur y canlyniad, neu ddirprwy sawl cam i ffwrdd ohono?
  Priodol          — a yw'n perthyn i'r bobl sy'n gallu dylanwadu arno mewn gwirionedd?
  Cytbwys          — a yw wedi'i barau â gwrth-fesur sy'n dal twyll?
  Cadarn           — a all oroesi archwiliad, neu a yw'n hunan-adroddedig ac na ellir ei ddilysu?
  Integredig       — a yw'n ffitio'r set ehangach, neu'n gwrthdaro ag KPI arall?
  Cost-effeithiol  — a yw casglu'r data'n costio mwy na'r penderfyniad y mae'n ei lywio?

Rhaniad arweiniol yn erbyn ôl-arweiniol:
  Dangosydd arweiniol    → yn rhagfynegi canlyniad yn y dyfodol, ond yn aml yn hawdd ei dwyllo
                            (e.e. galwadau a atebwyd mewn <60eiliad)
  Dangosydd ôl-arweiniol → yn cadarnhau bod y canlyniad wedi digwydd, ond yn cyrraedd yn rhy hwyr
                            i lywio (e.e. arolwg boddhad blynyddol)
  Mae set KPI amddiffynadwy'n paru o leiaf un o bob math ar gyfer pob amcan.
```

## Enghraifft waith

**Ymddiriedolaeth ambiwlans**: mae ymddiriedolaeth yn adrodd KPI amser ymateb Categori A (bygythiad
i fywyd) o "75% o alwadau'n cael ymateb o fewn 8 munud." Mewn un chwarter, daw 6,000 o alwadau
Categori A i mewn; mae 4,500 yn cael eu bodloni o fewn 8 munud, gan roi 75.0% — i'w weld ar y targed.

```
KPI pennawd = 4,500 / 6,000 × 100 = 75.0%  (yn bodloni'r trothwy o 75%)
```

Ond mae archwiliad Goodhart yn ychwanegu gwrth-fesur: cymedr amser ymateb ar gyfer y 10% arafaf o
alwadau.

```
Cymedr ymateb y degradd arafaf = 34 munud (i fyny o 19 munud ddwy flynedd ynghynt)
```

Mae'r ymddiriedolaeth yn cyrraedd y targed tra bo'r gynffon — yr alwadau sydd fwyaf tebygol o fod yn
wirioneddol fygythiol i fywyd unwaith y bo triniaeth flaenoriaethu'n amherffaith — wedi gwaethygu'n
sylweddol, am fod criwiau'n cael eu blaenoriaethu tuag at alwadau sy'n agos at ddibyn yr 8 munud yn
hytrach na thuag at frys clinigol. Roedd y KPI unigol yn adrodd stori ffug; roedd y KPI wedi'i barau'n
adrodd y gwir.

## Cysylltiad peirianneg feddalwedd

Mae peirianwyr sy'n adeiladu dangosfyrddau perfformiad i'r llywodraeth, i bob pwrpas, yn dylunio API
cymhelliant y sefydliad. Goblygiadau ymarferol: offeryna'r *enwadur* mor drwyadl â'r rhifiadur (mae
KPI a adroddir fel canran noeth yn gwahodd twyll enwadur — gweler
[cost fesul trafodiad](../cost-per-transaction/) am yr un fagl mewn gwasanaethau digidol); adeiladu
gwrth-fesurau i mewn i'r un dangosfwrdd yn hytrach nag adroddiad ar wahân nad oes neb yn ei ddarllen,
fel bod twyll yn weladwy adeg y penderfyniad; a fersiynu diffiniad y KPI, oherwydd bod ailddiffinio'n
dawel (newid beth sy'n cyfrif fel "galwad," "achos," neu "gwblhad") yn gyfystyr yn ymarferol â newid
y targed heb gyhoeddi hynny. Mae [cerdyn sgorio gwerth cyhoeddus](../public-value-scorecard/) yn un
ffordd strwythuredig o atal un KPI rhag cael ei ddarllen ar ei ben ei hun, ac mae
[atebolrwydd yn seiliedig ar ganlyniadau](../outcomes-based-accountability/) yn ddisgyblaeth dewis
KPIs ar lefel poblogaeth na all un tîm eu hystumio'n unochrog.

## Peryglon

- **Dewis y mesur hawdd-ei-gasglu dros yr un ystyrlon**: mae amser ateb galwad yn ddibwys i'w gofnodi;
  nid felly a atebodd y galwad broblem y dinesydd — ond dim ond yr ail sy'n ganlyniad. Gwrthsefyll y
  duedd i ddiffygio i'r hyn y mae'r system eisoes yn ei gynhyrchu.
- **Dim gwrth-fesur**: bydd unrhyw KPI sy'n gysylltiedig ag arian neu enw da'n cael ei dwyllo ar y
  cyrion; cyflenwch ef gyda mesur wedi'i barau sy'n dal y llwybr twyllo tebygol cyn ei gyhoeddi.
- **Ailddiffinio'r mesur heb gofnod newid**: mae cyfnewid "galwadau a dderbyniwyd" am "galwadau a
  atebwyd" i wneud i duedd edrych yn well yn dinistrio hygrededd y gyfres amser o'r eiliad y caiff ei
  ddarganfod — cyhoeddwch gofnod newid diffiniadau bob amser ochr yn ochr â'r ffigurau.
- **Cymysgu gweithgaredd â chanlyniad**: mae cyfrif arolygiadau a gwblhawyd yn allbwn; mae cyfrif
  safleoedd a ddaeth yn gydymffurfiol yn nes at y canlyniad (gweler
  [canlyniadau yn erbyn allbynnau](../outcomes-vs-outputs/)).

## Ffynonellau

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (fformwleiddiad Cyfraith Goodhart fel y'i dyfynnir yn gyffredin).
- National Audit Office, ymchwiliadau i adroddiadau perfformiad gwasanaeth ambiwlans y GIG.
  <https://www.nao.org.uk/>
