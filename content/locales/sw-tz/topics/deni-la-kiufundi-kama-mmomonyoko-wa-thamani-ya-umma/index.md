# Deni la Kiufundi kama Mmomonyoko wa Thamani ya Umma

Deni la kiufundi (technical debt) ni sitiari ya Ward Cunningham ya 1992 kuhusu gharama ya baadaye inayodokezwa ya maamuzi ya haraka ya uandishi wa msimbo ya zamani: **mtaji** (kazi ya urekebishaji inayodaiwa) na **riba** (mzigo unaoendelea unaoubeba kwenye utoaji). Katika mali ya zamani ya TEHAMA ya serikali, riba hiyo hulipwa moja kwa moja kutoka thamani ya umma — utoaji wa polepole wa mabadiliko ya kisheria, viwango vya juu vya kushindwa kwa huduma zinazowakabili wananchi, na kundi linalopungua la watu wanaoweza kugusa mfumo kwa usalama kabisa.

## Kwa nini ni muhimu

Mifumo ya zamani ya mainframe na enzi ya COBOL katika idara za serikali ya Uingereza — HMRC na DWP miongoni mwa zinazotajwa zaidi — hubeba hatari iliyoandikwa vizuri na inayoongezeka ambayo National Audit Office imeonya mara kwa mara, ikijumuisha katika ripoti yake *Digital Transformation in Government* (<https://www.nao.org.uk/>): majukwaa yanayozeeka ambayo ni ghali kubadilisha, yanazidi kuwa magumu kulinda, na yanayotegemea nguvu kazi maalumu inayostaafu kwa kasi kuliko inavyobadilishwa. Tofauti na mrundikano wa sekta binafsi, deni hili liko moja kwa moja kati ya wananchi na stahiki zao za kisheria — injini ya kukokotoa manufaa isiyoweza kubadilishwa kwa usalama ni kikwazo cha utoaji wa sera, si usumbufu wa uhandisi tu. Kuanzishwa upya kwa programu ya TEHAMA ya Universal Credit mwaka 2013, wakati National Audit Office ilipopata ujenzi wa awali usingetoa thamani ya fedha na sehemu kubwa ya mali ya programu ilipaswa kufutwa, ni mfano wa kawaida wa deni la kiufundi lisilowekewa bei likifikia programu ya umma iliyo hai, inayoonekana kwa mawaziri.

## Hisabati

```
Mtaji wa SQALE = Σ juu ya ukiukaji (muda wa urekebishaji) × kiwango cha gharama ya msanidi
Uwiano wa deni la kiufundi (TDR) = gharama ya urekebishaji / gharama ya kuendeleza upya × 100
                    (alama za SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Riba (namba inayohalalisha ulipaji):
  riba/mwaka = Δ kasi ya utoaji × thamani kwa kila kitengo cha kasi
             + Δ kiwango cha matukio yanayomkabili mwananchi × gharama kwa kila tukio
             + malipo ya ziada ya ujuzi maalumu × idadi ya wafanyakazi walioathirika
Kesi ya ulipaji = PV(riba iliyoepukwa katika upeo) − gharama ya urekebishaji
                  (ikipunguzwa thamani kwa kiwango cha punguzo cha kijamii cha Green Book,
                  tazama social-discount-rate.md)
```

Mtaji unataja dhima; riba ndiyo inayounda hoja ya uwekezaji kwa kamati ya hesabu za umma.

## Mfano uliokokotolewa

Injini ya kusindika madai ya mistari 250,000 iliyoandikwa kwa 4GL ya zamani. Ukitumia kigezo cha CAST Appmarq cha takriban $3.61 za mtaji wa deni la kiufundi kwa kila mstari wa msimbo (≈£2.85 kwa ubadilishaji wa kawaida):

```
Mtaji ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (alama C)
```

Riba iliyopimwa: idara inabakiza wakandarasi watatu maalumu kwa malipo ya ziada ya 40% ya kiwango cha siku juu ya viwango vya kawaida vya wahandisi wakuu kwa sababu ujuzi wa ndani umepungua — ziada ya £180,000/mwaka kwa timu ya watu sita. Mfumo pia husababisha kukatika kwa usindikaji mkubwa mara nne kwa mwaka, kila mmoja ukisimamisha maamuzi kwa takriban wadai 5,000 na kuwaelekeza kwenye kituo cha mawasiliano kwa takriban £25/simu:

```
Riba ≈ £180,000 (malipo ya ziada ya ujuzi)
     + 4 × 5,000 × £25 = £500,000 (gharama ya mawasiliano yaliyoelekezwa upya)
     ≈ £680,000/mwaka
```

Urekebishaji uliolengwa wa moduli zinazofanya kazi vibaya zaidi unagharimu £1,200,000 na unaigwa kupunguza riba kwa 70%:

```
Upunguzaji wa riba = 0.70 × 680,000 = £476,000/mwaka
Kurudisha gharama ≈ 1,200,000 / 476,000 ≈ miaka 2.5
```

Ulengaji ni muhimu: kurekebisha msimbo unaoguswa mara chache hakununui chochote, kwa sababu riba hukusanyika pale mzunguko wa mabadiliko na msongamano wa deni vyote vinapofikia kilele.

## Uhusiano na uhandisi wa programu

Mfumo wa thamani ya umma unaoinua kesi ya deni la kiufundi zaidi ya "msimbo ni wa zamani": eleza mali ya zamani kama orodha ya mahali uwezo wa utoaji uliopotea unapokusanyika, na uiunganishe waziwazi na [gharama kamili ya umiliki (TCO) katika TEHAMA ya serikali](../gharama-kamili-ya-umiliki-katika-tehama-ya-serikali/), kwa kuwa riba ni gharama ya uendeshaji inayostahili mstari wa TCO iwe fedha wamewahi kuuliza au la. Mifumo yenye mzigo wa deni pia hubeba mfiduo usiolingana wa [usalama wa mtandao](../thamani-ya-usalama-wa-mtandao-katika-sekta-ya-umma/), kwa sababu mzunguko wa viraka na msongamano wa deni vinahusiana — mfumo wa zamani usioweza kupigwa viraka ni deni la kiufundi ambalo riba yake hulipwa kwa hatari ya matukio badala ya pauni. Na kila ubadilishanaji wa urekebishaji dhidi ya kipengele ni uamuzi wenyewe wa [gharama ya ucheleweshaji katika programu za umma](../gharama-ya-ucheleweshaji-katika-programu-za-umma/): kulipa deni kunachelewesha badiliko la kisheria linalofuata, ambalo lina CoD yake lazima ipimwe dhidi ya riba iliyookolewa.

## Mitego

- **Kuripoti mtaji pekee**: kadirio kubwa, la kutisha la urekebishaji bila kielelezo cha riba halihalalishi chochote kwa mwidhinishaji wa matumizi.
- **Kuchukulia takwimu za deni zinazozalishwa na zana kihalisi**: skana za mtindo wa SQALE huhesabu ukiukaji wa kanuni; hukosa aina ghali ya deni — maamuzi ya usanifu na kanuni za biashara za zamani zisizo na nyaraka — huku zikibainisha mambo madogo.
- **"Kuandika upya kunaepusha yote"**: programu za kubadilisha lazima zivuke nidhamu ileile kama hoja yoyote ya biashara — gharama ya hali mbadala, uwezekano wa mafanikio, na upunguzaji wa thamani — si msamaha kutoka kwake, kama kuanzishwa upya kwa Universal Credit 2013 kulivyoonyesha.
- **Utopia ya deni sifuri**: kiwango bora cha deni si sifuri; deni ni mtaji wa mkopo uliolenga utoaji wa mapema. Swali halisi ni kila wakati kiwango cha riba, si kama deni lipo kabisa.

## Vyanzo

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
