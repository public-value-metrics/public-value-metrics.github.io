# Serikali kama Jukwaa (GaaP)

Serikali kama Jukwaa (Government as a Platform) ni mkakati wa kujenga vipengele vya pamoja, vinavyoweza kutumika tena — huduma ya arifa, huduma ya malipo, huduma ya utambulisho — mara moja, kwa kati, ili mamia ya huduma za serikali mmoja mmoja zivitumie badala ya kila moja kujenga yake. Unabadilisha mtazamo wa miundombinu ya kidijitali ya umma kuwa tatizo la uchumi wa majukwaa: thamani haipo katika uunganishaji mmoja wowote, bali katika gharama ya pembeni ya timu *inayofuata* inayoupitisha kukaribia sifuri.

## Kwa nini ni muhimu

GDS iliweka mkakati huo rasmi katika chapisho lake la 2015 "Government as a Platform," ikihoji kwamba serikali ilikuwa ikijenga uwezo uleule — kupokea malipo, kuarifu watumiaji, kuthibitisha utambulisho, kutafuta anwani — kando kando katika huduma baada ya huduma, kila moja ikibeba manunuzi yake, tathmini ya usalama, na mzigo wa msaada unaoendelea. Mbadala ulikuwa idadi ndogo ya majukwaa ya pamoja, yaliyojengwa kwa kiwango cha juu mara moja na kutumika tena kila mahali: GOV.UK Notify kwa kutuma barua pepe, ujumbe wa maandishi na barua, GOV.UK Pay kwa kupokea malipo ya mtandaoni, na GOV.UK One Login (mrithi wa programu ya awali ya utambulisho ya GOV.UK Verify) kwa uthibitishaji wa utambulisho. Kiwango ambacho majukwaa haya yamefikia ndicho ushahidi wazi zaidi kwamba mkakati ulifanya kazi: GOV.UK Pay imesindika zaidi ya pauni bilioni 10 katika miamala katika takriban huduma 1,800 mmoja mmoja — na ambapo ilichukua takriban miaka minne kusindika bilioni yake ya kwanza, sasa inasindika kiasi hicho katika takriban miezi mitano — wakati GOV.UK Notify imetuma zaidi ya ujumbe bilioni 9 kwa niaba ya zaidi ya mashirika ya serikali 1,500. Kila moja ya huduma hizo zilizopitisha ilikwepa kujenga, kulinda na kudumisha lango lake la malipo au mfereji wa ujumbe.

## Hisabati

```
Gharama ya kujenga kwa kila huduma (bila jukwaa) = N huduma × gharama ya kujenga,
  kutathmini usalama, na kuendesha mfumo mmoja wa malipo/arifa/utambulisho

Gharama ya jukwaa = gharama isiyobadilika ya kujenga jukwaa
                  + gharama ya pembeni kwa kila huduma inayopitisha (uunganishaji,
                    usanidi, msaada unaoendelea wa timu ya jukwaa)

Matumizi tena hufikia mizani pale:
  gharama ya kujenga jukwaa < N × (gharama ya kujenga kwa kila huduma − gharama ya
  pembeni ya uunganishaji)

Kwa jukwaa lililokomaa, gharama ya pembeni kwa kila mpitishaji wa ziada hukaribia
ada ya muamala/ujumbe pekee — gharama isiyobadilika hupunguzwa polepole katika mali
yote ya serikali, si bajeti ya idara moja, ndiyo sababu vipengele vya GaaP kwa kawaida
hufadhiliwa kwa kati badala ya kutozwa urejeshaji kamili wa gharama kwa wapitishaji wa awali.
```

## Mfano uliokokotolewa

**Mamlaka ya mtaa inayopitisha GOV.UK Pay badala ya kujenga lango la malipo**:

```
Makadirio ya kujenga yenyewe:
  Kazi ya kufuata PCI-DSS + uunganishaji + matengenezo yanayoendelea
  ≈ £85,000 ujenzi + £22,000/mwaka matengenezo

Upitishaji wa GOV.UK Pay:
  Juhudi za uunganishaji ≈ £12,000 (muda wa msanidi)
  Ada za miamala: malipo ya kadi kutoka serikali hadi kwa wananchi kwa kawaida
  hutozwa asilimia ndogo + ada isiyobadilika kwa kila muamala, bila mzigo
  tofauti wa PCI-DSS unaobebwa na baraza
  ≈ £12,000 mara moja, gharama inayoendelea hubadilika kulingana na kiasi, si isiyobadilika

Akiba ya mwaka wa kwanza ≈ £85,000 − £12,000 = £73,000, kabla ya kuhesabu
matengenezo ya £22,000/mwaka yaliyokwepwa na hatari ya kufuata iliyokwepwa ya
kushikilia data ya kadi katika mfumo unaoendeshwa na baraza kabisa — kundi hili la pili
ni thamani ya usalama iliyoshughulikiwa katika public-sector-cybersecurity-value.
```

Panua £73,000 hizo katika huduma takriban 1,800 zinazotumia sasa GOV.UK Pay na jumla ya gharama ya ujenzi iliyokwepwa katika serikali ni mamia ya mamilioni — uchumi wa jukwaa, si uunganishaji mmoja wowote, ndipo thamani ya mkakati ilipo kweli.

## Uhusiano na uhandisi wa programu

Serikali kama Jukwaa ni hoja ya moja kwa moja kwa [kujenga au kununua serikalini](../kujenga-au-kununua-serikalini/): pale kipengele cha pamoja, kilichotathminiwa, kinachoendeshwa vizuri kipo, kujenga kinacholingana maalum mara chache sana ni chaguo bora zaidi kwa [thamani ya fedha](../thamani-ya-fedha/), na hushindwa hoja ya 13 ya [kiwango cha huduma za kidijitali](../kiwango-cha-huduma-za-kidijitali/) ("tumia na uchangie viwango wazi, vipengele vya pamoja na mifumo") karibu kwa tafsiri. Pia hubadilisha umbo la [gharama kamili ya umiliki (TCO) katika TEHAMA ya serikali](../gharama-kamili-ya-umiliki-katika-tehama-ya-serikali/): upitishaji wa jukwaa hubadilisha mstari mkubwa wa mtaji na matengenezo na gharama ndogo ya uendeshaji inayohusishwa na matumizi, rahisi zaidi kutabiri na rahisi zaidi kuondoa ufadhili ikiwa huduma imefutwa. Matumizi wazi tena ya vipengele yana binamu katika [thamani ya data huria](../thamani-ya-data-huria/) — yote mawili ni mikakati ya kuchukulia kile serikali inazalisha mara moja kama miundombinu ya pamoja badala ya mali ya idara.

## Mitego

- **Kujenga upya kwa kivuli**: timu hujenga kimya kimya uunganishaji wao wa malipo au arifa kwa sababu mchakato wa kujumuisha wa jukwaa ni wa polepole kuliko kujifanyia wenyewe — tatizo la msuguano wa utawala, si la teknolojia, na humomonyoa kimya kimya uchumi wa matumizi tena ambao mkakati mzima unaitegemea.
- **Kuipa timu ya jukwaa ufadhili mdogo kuliko thamani inayoiunda**: thamani hukusanyika kwa idara zinazotumia huku gharama ikikaa kwa timu ya jukwaa, ikiunda hatari ya kudumu ya uwekezaji mdogo isipokuwa ufadhili uwe wa kati na ulindwe — toleo la msiba wa mali ya pamoja.
- **Kupima mafanikio ya jukwaa kwa matumizi pekee**: namba za upitishaji (huduma zilizojumuishwa, ujumbe uliotumwa) ni kiashiria cha mbele, si ushahidi wa thamani; mtihani halisi ni hesabu ya gharama ya ujenzi iliyokwepwa na hatari iliyokwepwa hapo juu.
- **Kuchukulia "jukwaa" kuwa sawa na "monolith"**: vipengele vya GaaP hufanikiwa kwa sababu kila kimoja hufanya jambo moja vizuri kwa kiolesura chembamba, thabiti — kuunganisha uwezo usiohusiana kwenye "jukwaa" moja huunda upya tatizo la ujenzi maalum kwa kiwango tofauti.

## Vyanzo

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
