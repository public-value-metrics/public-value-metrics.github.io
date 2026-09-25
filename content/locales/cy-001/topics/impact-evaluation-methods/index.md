# Dulliau Gwerthuso Effaith

Dulliau gwerthuso effaith yw'r dyluniadau ystadegol ac arbrofol a ddefnyddir i amcangyfrif beth
achosodd polisi neu raglen mewn gwirionedd, yn wahanol i'r hyn a fyddai wedi digwydd beth bynnag —
treialon rheoledig ar hap (RCTs), gwahaniaeth-mewn-gwahaniaethau, paru sgôr tueddiad, a dyluniad
datgyswllt atchweliad yw'r pedwar dull a ddefnyddir amlaf ym mholisi cyhoeddus y DU. Maent yn bodoli
am na ellir profi'r rhan fwyaf o ymyriadau'r llywodraeth mewn labordy: ni allwch hapddyrannu pa dref
sy'n cael llwybr bws newydd yn y ffordd y gallwch hapddyrannu pa glaf sy'n cael cyffur, felly mae'r
dulliau hyn yn benthyg yr un rhesymeg achosol heb fynnu dyraniad ar hap bob amser.

## Pam mae hyn yn bwysig

Mae Atodiad A Magenta Book Trysorlys EF, ar ddulliau lled-arbrofol, yn ganllaw canonaidd
llywodraeth y DU ar ddewis rhwng y dyluniadau hyn, ac mae cyrff fel yr Education Endowment Foundation
a'r What Works Centre for Local Economic Growth yn sefydliadu hierarchaeth dystiolaeth wedi'i
hadeiladu o'u hamgylch — RCTs lle mae hapddyrannu'n ymarferol ac yn foesegol, dyluniadau
lled-arbrofol lle nad yw. Nid meddwl ôl-fyfyriol technegol yw dewis y dull: mae'n penderfynu a all
gwerthusiad ateb "a achosodd y rhaglen hyn?" neu ddim ond "a ddigwyddodd hyn ar ôl i'r rhaglen
ddechrau?", sef yr un cwestiwn y mae
[dadansoddiad gwrthffeithiol](../counterfactual-analysis/) wedi'i adeiladu i orfodi ymarferwyr i'w
ofyn cyn i unrhyw werthusiad gael ei gomisiynu.

## Y fathemateg

```
RCT:
  Effaith = cymedr(canlyniad | grŵp triniaeth) − cymedr(canlyniad | grŵp rheoli)
  (yn ddilys am fod dyraniad i'r driniaeth ar hap)

Gwahaniaeth-mewn-gwahaniaethau (DiD):
  Effaith = [canlyniad_ar-ôl(triniaeth) − canlyniad_cyn(triniaeth)]
          − [canlyniad_ar-ôl(rheoli) − canlyniad_cyn(rheoli)]
  (angen tybiaeth "tueddiadau cyfochrog": byddai'r grŵp triniaeth a'r grŵp rheoli wedi symud gyda'i
   gilydd heb yr ymyriad)

Paru sgôr tueddiad (PSM):
  1. Amcangyfrif P(triniaeth = 1 | cyd-newidynnau X) ar gyfer pob uned → sgôr tueddiad
  2. Paru unedau triniaeth ag unedau heb driniaeth sydd â sgorau tueddiad tebyg
  3. Effaith = cymedr(canlyniad | triniaeth) − cymedr(canlyniad | rheoli wedi'i baru)

Dyluniad datgyswllt atchweliad (RDD):
  Effaith = y naid yn y canlyniad a arsylwyd wrth y trothwy cymhwyster,
            gan gymharu unedau ychydig uwchben yn erbyn ychydig islaw'r trothwy
```

## Enghraifft waith

**Awdurdod lleol (gwahaniaeth-mewn-gwahaniaethau ar gyfer rhaglen teuluoedd trafferthus)**: y
canlyniad yw presenoldeb ysgol. Mae'r ardal driniaeth yn symud o 84% i 89% presenoldeb (+5 pwynt
canran) dros gyfnod y rhaglen; mae ardal debyg heb driniaeth yn symud o 85% i 87% (+2 bwynt canran)
dros yr un cyfnod. Amcangyfrif effaith DiD: 5 − 2 = +3 pwynt canran yn briodoladwy i'r rhaglen. Wedi'i
gymhwyso i garfan o 2,000 o ddisgyblion yn yr ardal driniaeth, mae hyn yn gyson â thua 60 o
ddisgyblion ychwanegol (3% × 2,000) yn cyrraedd y categori presenoldeb uwch, echdyniad y dylid ei
adrodd gyda'i rybudd tueddiadau cyfochrog, nid fel cyfrif pen manwl gywir.

**Elusen (paru sgôr tueddiad ar gyfer elusen cyflogadwyedd)**: mae 300 o gyfranogwyr rhaglen wedi'u
paru â 300 o unigolion o set ddata weinyddol fwy, gan ddefnyddio sgorau tueddiad wedi'u llunio o oedran,
hanes cyflogaeth blaenorol, a lefel cymhwyster. Cyfradd gyflogaeth 12 mis: 46% ar gyfer y grŵp
triniaeth wedi'i baru, 33% ar gyfer y grŵp cymharu wedi'i baru. Amcangyfrif effaith PSM: 46% − 33% =
+13 pwynt canran yn briodoladwy i'r rhaglen, ar yr amod nad oes cymysgydd anarsylwedig (fel
cymhelliant) yn gyrru cyfranogiad a chanlyniad fel ei gilydd.

## Cysylltiad peirianneg feddalwedd

Mae'r cwestiwn a fydd unrhyw un o'r dyluniadau hyn yn ymarferol yn nes ymlaen yn dibynnu'n drwm ar
benderfyniadau peirianneg data a wneir yn gynnar. Mae RDD angen newidyn rhedeg wedi'i gofnodi'n
gywir a throthwy cymhwyster glân go iawn; mae DiD angen data panel cymharadwy dros amser ar gyfer y
grŵp triniaeth a'r grŵp cymharu fel ei gilydd, sy'n golygu cydgysylltiadau cyson ar draws systemau a
blynyddoedd; mae PSM angen data cyd-newidyn llinell sylfaen cyfoethog wedi'i gasglu cyn y driniaeth,
nid wedi'i ail-lunio wedyn. Mae model data wedi'i ddylunio ochr yn ochr â
[theori newid](../theory-of-change/) a [model rhesymeg](../logic-model/) o'r dechrau — gan gasglu
cyd-newidynnau llinell sylfaen, dyddiadau, a chofnodion cymwys ar gyfer grŵp cymharu — yn beth sy'n
gwneud gwerthusiad effaith trylwyr yn bosibl yn nes ymlaen, yn hytrach na sgrialu ôl-hoc drud. Gweler
[gwerthuso effaith yn erbyn gwerthuso proses](../impact-evaluation-vs-process-evaluation/) am y
cwestiwn cyflenwol nad yw'r dulliau hyn yn ei ateb ar eu pen eu hunain.

## Peryglon

- **Gorfodi RCT lle nad yw'n ymarferol nac yn foesegol**, neu, i'r gwrthwyneb, byth yn ystyried
  dyluniad lled-arbrofol pan oedd cyfle go iawn ar gael ac heb ei ddefnyddio — trothwy polisi,
  cyflwyniad graddol.
- **Anwybyddu'r dybiaeth tueddiadau cyfochrog mewn DiD.** Os oedd yr ardal gymharu eisoes yn dargyfeirio
  oddi wrth yr ardal driniaeth cyn yr ymyriad, mae'r gymhariaeth ddau bwynt wedi'i llygru; gwiriwch
  duedd-cyn, nid dim ond cyn/ar-ôl.
- **Paru dim ond ar gyd-newidynnau a arsylwyd mewn PSM.** Gall dethol anarsylwedig, fel cymhelliant
  cyfranogwyr, ogwyddo'r amcangyfrif hyd yn oed pan fo'r cyd-newidynnau a arsylwyd yn gytbwys.
- **Trin y newidyn rhedeg mewn RDD.** Os gall pobl ddylanwadu ar eu sgôr i ddisgyn yn union o fewn
  trothwy cymhwyster, nid yw'r datgyswllt bellach yn ynysu effaith achosol.

## Ffynonellau

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
