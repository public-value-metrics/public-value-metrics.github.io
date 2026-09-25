# Dadansoddiad Penderfynu Amlfeini (MCDA)

Mae MCDA yn sgorio ac yn pwysoli opsiynau yn erbyn sawl maen prawf gwahanol, wedi'u pwysoli, ar yr un
pryd, gan gynhyrchu cymhariaeth wedi'i graddio heb orfodi pob maen prawf i un raddfa ariannol nac
uned naturiol. Dyma'r dull arfarnu ar gyfer penderfyniadau lle na ellir yn wirioneddol grynhoi'r
canlyniadau sy'n bwysig i un rhif.

## Pam mae hyn yn bwysig

Mae'r Llyfr Gwyrdd yn sancsiynu MCDA yn benodol (mae ei atodiad astudiaeth achos Bocs 2 ac Atodiad A
ill dau yn ei drafod yn uniongyrchol) ar gyfer arfarniadau lle mae buddion yn "wirioneddol
anghymharadwy" — lle byddai trosi popeth yn arian drwy
[ddadansoddiad cost-budd cymdeithasol](../social-cost-benefit-analysis/), neu i un canlyniad drwy
[ddadansoddiad cost-effeithiolrwydd](../cost-effectiveness-analysis-in-government/), yn camgynrychioli'r
penderfyniad yn hytrach na'i egluro
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Mae dewis safle ar gyfer carchar newydd, er enghraifft, yn cyfnewid cost gyfalaf yn erbyn effaith ar
y gymuned, cysylltedd trafnidiaeth, effaith amgylcheddol, a gallu i recriwtio staff — meini prawf nad
ydynt yn rhannu uned gyffredin, a lle byddai gorfodi uned gyffredin (arian fel arfer) yn smyglo i
mewn farn werth am bwysigrwydd cymharol, dyweder, effaith amgylcheddol yn erbyn cost, wedi'i gwisgo
fel rhifyddeg wrthrychol.

Gonestrwydd MCDA yw ei brif fregusrwydd hefyd: gan mai pwy bynnag sy'n rhedeg yr arfarniad (neu banel)
sy'n neilltuo'r pwysau, dim ond mor gyfreithlon â'r broses bwysoli y mae'r dull. Mae canllawiau'r
Llyfr Gwyrdd yn glir bod yn rhaid cytuno a chyhoeddi'r meini prawf a'r pwysau *cyn* sgorio unrhyw
opsiwn, yn union i atal adolygydd rhag gweithio'n ôl o opsiwn a ffefrir at y pwysau sy'n ei
gyfiawnhau.

## Y fathemateg

```
Ar gyfer pob opsiwn i a maen prawf j:
  Sgôr_ij   = perfformiad yr opsiwn yn erbyn y maen prawf hwnnw (yn aml 0-100
              neu 1-10, o dystiolaeth, barn arbenigol, neu sgorio rhanddeiliaid)
  Pwysau_j  = pwysigrwydd cymharol maen prawf j, y pwysau'n adio i 1 (neu 100)

Sgôr wedi'i phwysoli opsiwn i = Σ_j (Sgôr_ij × Pwysau_j)

Gweithdrefn:
1. Cytuno ar y set feini prawf a'r pwysau CYN sgorio unrhyw opsiwn (mae pwysoli
   siglo neu gymhariaeth barau, e.e. AHP, yn ddulliau didoli cyffredin).
2. Sgorio pob opsiwn yn erbyn pob maen prawf ar raddfa gyffredin, o dystiolaeth
   lle bo modd.
3. Cyfrifo'r cyfansymiau pwysoledig; graddio'r opsiynau.
4. Prawf sensitifrwydd ar y pwysau: a yw'r graddio'n goroesi anghytundeb
   credadwy ynghylch pa mor bwysig y dylai pob maen prawf fod?
```

Nid yw MCDA yn cynhyrchu gwerth absoliwt y gellir ei amddiffyn yn y ffordd y mae gwerth presennol net
DCBC yn ei wneud — dim ond graddio yn amodol ar y pwysau y cytunwyd arnynt y mae'n ei gynhyrchu. Mae
hyn yn nodwedd pan fo'r penderfyniad yn wirioneddol ynghylch cyfnewid nwyddau anghymharadwy, ac yn
atebolrwydd os fe'i defnyddir i osgoi gwaith caletach prisio lle roedd prisio mewn gwirionedd yn
bosibl.

## Enghraifft waith

**Awdurdod lleol**: mae cyngor sy'n dewis lleoliad ar gyfer canolfan ailgylchu gwastraff cartref
newydd yn sgorio tri safle yn erbyn pedwar maen prawf, wedi'u pwysoli gan banel traws-adrannol cyn
unrhyw ymweliad safle:

```
Meini prawf (pwysau):     Cost gyfalaf (30%)  Mynediad trafnidiaeth (25%)
                           Effaith gymunedol (25%)  Effaith amgylcheddol (20%)

Sgoriau safle (0-100, uwch = gwell):
Safle A: cost 80, mynediad 60, cymuned 40, amgylchedd 70
Safle B: cost 60, mynediad 90, cymuned 70, amgylchedd 50
Safle C: cost 90, mynediad 50, cymuned 80, amgylchedd 60

Cyfansymiau pwysoledig:
Safle A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Safle B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Safle C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Safle C sy'n graddio uchaf. Mae rhediad sensitifrwydd sy'n newid pwysau'r effaith gymunedol o 25% i
35% (gan gymryd 10 pwynt o'r gost gyfalaf) yn newid cyfanswm Safle C i 71.5 − 3 + 8 = 76.5 a chyfanswm
Safle B i 68 − 6 + 7 = 69 — mae Safle C yn dal ar y blaen, felly mae'r graddio'n gadarn yn wyneb yr
anghytundeb credadwy hwnnw am bwysoli, a dyna'n union y gwiriad y mae'r Llyfr Gwyrdd yn disgwyl ei
weld wedi'i adrodd.

**Elusen**: mae sefydliad sy'n rhoi grantiau, wrth ddewis rhwng ariannu gwasanaeth cynghori ar ddyled,
rhwydwaith banciau bwyd, a rhaglen llythrennedd ariannol, yn defnyddio MCDA yn hytrach na SROI
(gweler [enillion cymdeithasol ar fuddsoddiad](../social-return-on-investment/)) yn union am fod yr
ymddiriedolwyr yn anghytuno, mewn ffydd dda, ynghylch a ddylai ryddhad argyfwng neu atal bwyso'n
drymach — mae MCDA yn eu galluogi i gytuno ar *siâp* yr anghytundeb (amrediad pwysau) yn hytrach na
esgus bod un gymhareb SROI yn ei ddatrys.

## Cysylltiad peirianneg feddalwedd

MCDA yw'r offeryn naturiol ar gyfer dewis gwerthwyr a phensaernïaeth pan fo meini prawf yn gwrthdaro'n
wirioneddol — mae dewis rhwng system rheoli achosion sy'n cael ei chynnal ar y cwmwl ac un ar y safle
yn cyfnewid cost, risg sofraniaeth data, hygyrchedd, a chyflymder cyflenwi mewn ffyrdd na ellir eu
crynhoi i un rhif. Dylai arweinwyr peirianneg fynnu bod y pwysoli'n digwydd cyn i'r opsiynau gael eu
sgorio, yn union fel y mae'r Llyfr Gwyrdd yn ei ofyn, gan fod ymarferiad pwysoli a redir ar ôl gweld y
rhestr fer yn drifftio'n ddibynadwy tuag at ba opsiwn bynnag oedd yr ystafell eisoes yn ei ffafrio.
Gweler [adeiladu yn erbyn prynu yn y llywodraeth](../build-vs-buy-in-government/) am gymhwysiad MCDA
cyffredin, a [cerdyn sgorio gwerth cyhoeddus](../public-value-scorecard/) am offeryn sgorio strwythuredig
cysylltiedig a ddefnyddir ar ôl penderfynu yn hytrach na chynt.

## Peryglon

- **Gosod pwysau ar ôl gweld yr opsiynau.** Dyma'r ffordd fwyaf cyffredin y mae MCDA yn cael ei
  gamddefnyddio, boed yn fwriadol ai peidio; cyhoeddwch bwysau cyn sgorio, a chofnodwch pwy a'u
  gosododd.
- **Trin y cyfanswm pwysoledig fel rhif caled.** Nid yw sgôr o 71.5 yn erbyn 68 yn fwlch ystadegol
  ystyrlon oni bai bod y dadansoddiad sensitifrwydd yn cadarnhau bod y graddio'n sefydlog; adroddwch
  amrediadau, nid manwl-gywirdeb ffug.
- **Defnyddio MCDA i osgoi prisio a oedd mewn gwirionedd yn bosibl.** Os gellid prisio'r rhan fwyaf o'r
  meini prawf yn gredadwy, mae troi'n rhagosodedig at MCDA yn lle
  [DCBC](../social-cost-benefit-analysis/) yn taflu i ffwrdd wybodaeth y gallai'r arfarniad fod wedi'i
  defnyddio.
- **Gadael i un rhanddeiliad amlwg osod yr holl bwysau ar ei ben ei hun.** Mae arfer da'r Llyfr Gwyrdd
  yn disgwyl bod pwysau'n cael eu didoli o banel cynrychioliadol, nid y cyfarwyddwr noddi, er mwyn
  osgoi'r arfarniad rhag ail-ddeillio'r hyn yr oedd y person hwnnw eisoes yn ei ddymuno.

## Ffynonellau

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
