# Cynhwysiant Digidol

Cynhwysiant digidol yw'r ddisgyblaeth o sicrhau nad yw "digidol yn ddiofyn" yn troi'n "digidol yn unig" — bod gwasanaethau cyhoeddus a gynlluniwyd o amgylch y sianel rataf yn dal i weithio i'r dinasyddion na allant, neu na fyddant, ei defnyddio heb gymorth. Bathodd GDS y mecanwaith cyflenwi penodol, "digidol â chymorth", fel gofyniad gorfodol ar gyfer pob gwasanaeth digidol gan y llywodraeth, nid fel ychwanegiad dewisol.

## Pam mae hyn yn bwysig

Gosododd Strategaeth Ddigidol y Llywodraeth 2012 yr uchelgais yn glir: dylid adeiladu gwasanaethau digidol yn "ddigidol yn ddiofyn", ond cydnabu'r strategaeth ei hun na fyddai oddeutu 10% o oedolion y DU yn gallu eu defnyddio heb gymorth, ac ymrwymodd adrannau i ddarparu cymorth digidol â chymorth — llwybr a gyfryngir gan berson, dros y ffôn, wyneb yn wyneb, neu drwy gyfryngwr — fel rhan o'r gwasanaeth, nid fel wrth gefn ar wahân wedi'i osod ymlaen yn ddiweddarach. Yr ymrwymiad hwnnw bellach yw pwynt 5 [Safon Gwasanaeth Digidol](../digital-service-standard/), "sicrhau y gall pawb ddefnyddio'r gwasanaeth". Caiff graddfa'r allgáu parhaus ei olrhain gan Fynegai Digidol Defnyddwyr blynyddol y DU, a gynhyrchir gan Lloyds Banking Group: canfu argraffiad 2024 fod oddeutu 1.6 miliwn o bobl yn y DU yn parhau i fod all-lein, a bod y grŵp hwn yn pwyso'n drwm tuag at bobl 70–79 oed, y rhai sy'n ennill llai na £35,000, a'r rhai sy'n ymddeoledig neu'n ddi-waith — union y boblogaeth sydd fwyaf tebygol o ddibynnu ar y gwasanaethau cyhoeddus sy'n cael eu hailgynllunio. Canfu'r un adroddiad mai dim ond 48% o weithlu'r DU a allai gwblhau pob un o'r 20 tasg ar y fframwaith Sgiliau Digidol Hanfodol, sy'n golygu nad cysylltedd deuaidd yn unig yw allgáu, ond sbectrwm o sgil, hyder ac ymddiriedaeth nad yw metrig syml fel "oes ganddo fand eang" yn ei ddal o gwbl.

## Y fathemateg

Mae cynhwysiant digidol yn fframwaith a gwiriad tegwch yn hytrach na fformiwla sengl, ond mae'n cyfuno ag asesu gwerth meintiol drwy [pwysoli dosbarthiadol](../distributional-weighting/):

```
Gwerth sifft sianel naïf:
  gwerth = cyfaint a symudwyd × (cost_hen − cost_digidol)     [gweler arbedion sifft sianel]

Gwerth wedi'i addasu ar gyfer cynhwysiant:
  gwerth = (cyfaint a symudwyd × arbediad heb ei bwysoli)
        − (defnyddwyr wedi'u heithrio × cost darparu digidol â chymorth)
        − (addasiad pwysoliad dosbarthiadol am niwed i grwpiau wedi'u
           heithrio sy'n colli mynediad neu'n wynebu ansawdd
           gwasanaeth is)

Nid gweddill cost methiant yw digidol â chymorth — mae'n sianel wedi'i
dylunio gyda'i [chost fesul trafodiad](../cost-per-transaction/) ei
hun, sydd fel arfer yn llawer uwch fesul trafodiad na hunanwasanaeth
digidol ond sy'n dal i fod yn rhatach fel arfer na'r hen sianel y mae'n
ei rhannol ddisodli.
```

## Enghraifft waith

**Gwasanaeth budd-dal cenedlaethol tebyg i Gredyd Cynhwysol**: 2.5 miliwn o hawliadau/blwyddyn, wedi'u hasesu fel rhai sydd angen cymorth digidol â chymorth ar gyfer amcangyfrif o 10% o hawlwyr yn ôl rhagdybiaeth gynllunio Strategaeth Ddigidol y Llywodraeth.

```
Carfan wedi'i heithrio/digidol â chymorth = 2,500,000 × 10% = 250,000 o hawliadau/blwyddyn

Cost sianel ddigidol â chymorth (cymorth ffôn a wyneb yn wyneb,
wedi'i staffio i ymdrin â bregusrwydd a chymhlethdod) ≈ £9.50/hawliad
  = 250,000 × £9.50 = £2,375,000/blwyddyn

Cost hunanwasanaeth digidol ar gyfer y 90% arall ≈ £0.40/hawliad
  = 2,250,000 × £0.40 = £900,000/blwyddyn

Cost gyfartalog gyfun fesul trafodiad = (2,375,000 + 900,000) / 2,500,000
  = £1.31/hawliad

Nid yw cynllun sy'n hepgor digidol â chymorth er mwyn cyrraedd cost
fesul trafodiad blaenllaw is (e.e. £0.40 cyfun, gan anwybyddu'r
250,000 o hawlwyr wedi'u heithrio) yn dileu'r gost honno o £2.375m —
mae'n ei throsi'n hawliadau na chânt eu hawlio, apeliadau, a galw
gwasanaethau argyfwng pellach sy'n glanio ar gyllideb wahanol yn
gyfan gwbl.
```

## Cysylltiad peirianneg feddalwedd

Mae digidol â chymorth yn sianel wedi'i dylunio, sy'n golygu bod ganddi ryngwynebau, cytundebau lefel gwasanaeth (SLAs) ac offeryniad fel unrhyw un arall: offeryn gweithiwr achos dros y ffôn, porth cyfryngol i Cyngor ar Bopeth neu awdurdod lleol, neu lif ciosg wyneb yn wyneb. Ei thrin fel ôl-ystyriaeth — rhif ffôn mewn print mân yn hytrach na sianel a ystyriwyd o'r cam Discovery — yw'r ffordd fwyaf cyffredin y mae gwasanaethau'n methu pwynt 5 [Safon Gwasanaeth Digidol](../digital-service-standard/) wrth eu hasesu. Cynhwysiant digidol yw'r llen degwch dros bob pwnc arall yn y bennod hon: mae'n cyfyngu ar ba mor gynhwysfawr y gellir gwireddu [arbedion sifft sianel](../channel-shift-savings/), mae'n eitem linell y mae'n rhaid ei chynnwys yn onest yn [cost fesul trafodiad](../cost-per-transaction/), a dyma gymhwysiad uniongyrchol [pwysoli dosbarthiadol](../distributional-weighting/) i gyd-destun gwasanaethau digidol — dylid pwysoli i lawr arbediad sy'n glanio'n anghymesur ar bobl sydd eisoes wedi'u heithrio'n ddigidol ac yn economaidd, nid ei drin fel un cyfwerth ag arbediad sy'n cael ei ledaenu'n gyfartal ar draws y boblogaeth.

## Peryglon

- **Darllen "digidol yn ddiofyn" fel "digidol yn unig"**: cau'r llinell ffôn neu'r cownter unwaith y bydd defnydd digidol yn croesi trothwy, heb wirio bod gan y garfan sy'n weddill ddewis arall sy'n wirioneddol ddefnyddiadwy.
- **Mesur cynhwysiant drwy gysylltedd deuaidd**: mae "ganddo fand eang" neu "berchen ffôn clyfar" yn ddirprwy gwael am allu cwblhau trafodiad penodol — mae'r bwlch Sgiliau Digidol Hanfodol (dim ond 48% o weithlu'r DU sy'n cwblhau pob un o'r 20 tasg, yn ôl Lloyds 2024) yn dangos bod sgiliau a hyder yr un mor bwysig â mynediad.
- **Costio digidol â chymorth fel gwall talgrynnu**: ei gyllidebu fel eitem wrth gefn fach yn hytrach na sianel briodol gyda'i [chost fesul trafodiad](../cost-per-transaction/) ei hun, ac wedyn synnu pan fydd yn cael ei thangyllido a'i thanstaffio wrth lansio.
- **Arolygu dim ond y rhai sy'n cwblhau'n ddigidol yn llwyddiannus**: mae ymchwil boddhad a defnyddioldeb a gynhelir yn gyfan gwbl o fewn y gwasanaeth yn methu â chyrraedd y bobl na ddaeth mor bell â hynny erioed, sef union y boblogaeth y mae gwaith cynhwysiant digidol i fod i'w diogelu.

## Ffynonellau

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
