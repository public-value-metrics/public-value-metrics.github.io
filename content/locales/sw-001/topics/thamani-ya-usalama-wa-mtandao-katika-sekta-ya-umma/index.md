# Thamani ya Usalama wa Mtandao katika Sekta ya Umma

Thamani ya usalama wa mtandao katika sekta ya umma ni nidhamu ya kuweka bei kwa upunguzaji wa hatari: ni kiasi gani kina thamani kufanya uvunjaji wa data za wananchi usiwe na uwezekano mkubwa, kwa kuzingatia kwamba matumizi ya usalama hayazalishi pato linaloonekana yanapofanya kazi na linaloonekana sana yanaposhindwa? Kwa huduma inayoshikilia rekodi za manufaa, data ya afya, au rekodi za kodi, sifa hiyo ya "isiyoonekana inapofanya kazi" ndiyo hasa sababu inahitaji hoja wazi ya thamani, si tiki ya kufuata sheria tu.

## Kwa nini ni muhimu

Cyber Assessment Framework (CAF) ya National Cyber Security Centre ya Uingereza inazipa mashirika ya sekta ya umma njia iliyopangwa ya kufanya usalama kuwa nidhamu inayotathminika, yenye msingi wa matokeo badala ya orodha ya ukaguzi: inabainisha malengo manne ya ngazi ya juu (kusimamia hatari ya usalama, kulinda dhidi ya mashambulizi ya mtandaoni, kugundua matukio ya usalama wa mtandao, na kupunguza athari za matukio) yaliyogawanywa katika matokeo yanayochangia ambayo mmiliki wa mfumo anaweza kutathminiwa dhidi yake, kwa roho ileile ya hoja ya 9 ya [kiwango cha huduma za kidijitali](../kiwango-cha-huduma-za-kidijitali/) ("unda huduma salama inayolinda faragha ya watumiaji"). Kile ambacho tathmini ya CAF inalinda dhidi yake kina lebo ya bei iliyoandikwa: Cost of a Data Breach Report ya IBM hufuatilia gharama ya wastani ya uvunjaji kwa sekta, na imepata kila mara sekta ya umma upande wa chini wa wigo ikilinganishwa na fedha au huduma za afya — matoleo ya hivi karibuni yanaweka wastani wa sekta ya umma karibu na $milioni 2.6–2.9 kwa kila uvunjaji — lakini "chini kuliko fedha" si "chini", na uvunjaji wa serikali hubeba gharama ambazo takwimu za ripoti hazizinasi kikamilifu: kupotea kwa imani ya wananchi kwa njia za kidijitali, ambako hupunguza [upokeaji wa kidijitali](../akiba-ya-kuhamisha-njia-za-huduma/) ambao hoja za biashara za kuhamisha njia hutegemea, na gharama ya kisiasa na kisheria ya kufichua data ambayo serikali iliwalazimisha wananchi kuikabidhi mwanzoni.

## Hisabati

Uwekezaji wa usalama huthaminiwa kama matumizi yoyote ya kupunguza hatari yanavyothaminiwa: kama upunguzaji wa hasara inayotarajiwa, kwa kutumia utambulisho wa kawaida wa usimamizi wa hatari.

```
Hasara Inayotarajiwa ya Mwaka (ALE) = Hasara Moja Inayotarajiwa (SLE)
                                     × Kiwango cha Tukio cha Mwaka (ARO)

Thamani ya udhibiti wa usalama =
  ALE_kabla_ya_udhibiti − ALE_baada_ya_udhibiti − gharama ya mwaka ya udhibiti

Udhibiti unastahili kufadhiliwa pale:
  (ALE_kabla − ALE_baada) > gharama ya mwaka ya udhibiti

Tathmini ya CAF haitoi uwezekano moja kwa moja, lakini wasifu wa matokeo ya CAF wa
huduma (ni matokeo gani yanayochangia "yamefikiwa", "yamefikiwa kwa sehemu", au
"hayajafikiwa") ni pembejeo mbadala inayofaa ya kukadiria ARO — mfumo wenye
ufikiaji wa upendeleo usiosimamiwa au bila mpango wa kukabiliana na matukio
uliojaribiwa una ARO halisi ya juu zaidi kwa kiasi kikubwa kuliko ule wenye yote mawili.
```

## Mfano uliokokotolewa

**Mfumo wa usimamizi wa kesi wa baraza la kaunti unaoshikilia rekodi za huduma za kijamii za wakazi 40,000**:

```
Hasara Moja Inayotarajiwa (gharama ya uvunjaji), kwa kutumia wastani wa sekta ya umma
kutoka Cost of a Data Breach Report ya hivi karibuni ya IBM ≈ £2.1m
(imebadilishwa, kielelezo cha mpangilio wa ukubwa — kokotoa upya kila wakati kutoka
toleo la sasa la ripoti badala ya kutumia tena namba isiyobadilika)

ARO ya sasa (ufikiaji wa upendeleo usiosimamiwa, hakuna kukabiliana na matukio
kulikojaribiwa, kulingana na tathmini binafsi ya ndani ya CAF inayoonyesha matokeo
mengi ya "hayajafikiwa") ≈ 8% kwa mwaka inayokadiriwa
  ALE_kabla = £2.1m × 0.08 = £168,000/mwaka

Udhibiti unaopendekezwa: usimamizi wa ufikiaji wa upendeleo + mpango wa kukabiliana na
matukio uliojaribiwa, ukihamisha matokeo husika ya CAF hadi "yamefikiwa",
unakadiriwa kupunguza ARO hadi 3%/mwaka
  ALE_baada = £2.1m × 0.03 = £63,000/mwaka

Gharama ya mwaka ya udhibiti (zana + mchakato + majaribio) = £45,000

Thamani ya udhibiti = (168,000 − 63,000) − 45,000 = £60,000/mwaka
  chanya halisi — ufadhili. Hesabu pia inaonyesha udhibiti ungeendelea kustahili
  kufadhiliwa kwa karibu mara tatu ya gharama, ambayo ni aina ya ukaguzi wa unyeti
  unaopaswa kuambatana na kielelezo chochote cha ALE kilichojengwa juu ya
  uwezekano uliokadiriwa.
```

## Uhusiano na uhandisi wa programu

Wahandisi humiliki vishikio vingi katika mlinganyo wa ALE: usanifu wa udhibiti wa ufikiaji, usafi wa tegemezi na viraka, ufikiaji wa kumbukumbu na utambuzi, na zana za kukabiliana na matukio vyote husogeza kipengele cha ARO moja kwa moja, ndiyo sababu tathmini ya CAF inasomeka kama ukaguzi wa usanifu wa kiufundi kama ukaguzi wa sera. Hili ni [deni la kiufundi kama mmomonyoko wa thamani ya umma](../deni-la-kiufundi-kama-mmomonyoko-wa-thamani-ya-umma/) katika hali yake kali zaidi — mifumo isiyo na viraka, isiyofuatiliwa, yenye udhibiti duni wa ufikiaji ni deni ambalo malipo ya riba yake ni hatari ya mkia, si mzigo thabiti — na linapaswa kupatanishwa na [gharama kamili ya umiliki (TCO) katika TEHAMA ya serikali](../gharama-kamili-ya-umiliki-katika-tehama-ya-serikali/) ili matumizi ya usalama yasichukuliwe kando na gharama halisi ya uendeshaji wa mfumo. Pia ni pembejeo ya moja kwa moja kwa tathmini za [thamani ya fedha](../thamani-ya-fedha/) chini ya Green Book: gharama iliyorekebishwa kwa hatari ni sehemu ya upande wa "gharama" wa tathmini yoyote ya machaguo, si wazo la baadaye lililobandikwa mwishoni.

## Mitego

- **Kuchukulia tathmini binafsi ya CAF kama usalama wenyewe**: tathmini iliyokamilika inaelezea msimamo wa usalama; haiundi — thamani iko katika matokeo yaliyofikiwa, si waraka.
- **Kutumia gharama za wastani za uvunjaji za kimataifa kama kadirio la ndani bila marekebisho**: takwimu za IBM ni wastani katika sampuli kubwa, mbalimbali; hasara moja inayotarajiwa halisi ya mamlaka ndogo ya mtaa mara chache ni sawa na ya idara ya serikali ya kitaifa.
- **Kupuuza saikolojia ya hatari ya mkia katika maamuzi ya uwekezaji**: uwezekano mdogo wa mwaka hufanya matumizi ya usalama kuwa rahisi kuahirishwa milele, hadi mwaka usipokuwa hivyo — kujaribu unyeti wa hesabu ya ALE dhidi ya wigo wa ARO, kama katika mfano uliokokotolewa, kunapingana na hili.
- **Kuhesabu tu gharama ya uvunjaji ya mtindo wa IBM, si gharama ya imani**: uvunjaji unaopunguza utayari wa wananchi kutumia njia za kidijitali humomonyoa hoja ya [akiba ya kuhamisha njia za huduma](../akiba-ya-kuhamisha-njia-za-huduma/) kwa miaka baadaye, gharama ambayo mara chache hujumuishwa katika makadirio ya gharama za uvunjaji.

## Vyanzo

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
