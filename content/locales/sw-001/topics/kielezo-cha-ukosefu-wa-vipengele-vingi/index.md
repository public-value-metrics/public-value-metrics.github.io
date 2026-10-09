# Kielezo cha Ukosefu wa Vipengele Vingi (IMD)

IMD ni kipimo rasmi cha ukosefu wa jamaa kwa maeneo madogo ya Uingereza (England), kikiorodhesha kila moja ya Lower-layer Super Output Areas (LSOA) 32,844 za nchi hiyo (kila moja ikiwa na wakazi takriban 1,500) kutoka 1 (lenye ukosefu zaidi) hadi 32,844 (lenye ukosefu kidogo zaidi). Huchapishwa na kile kinachojulikana sasa kama Ministry of Housing, Communities and Local Government (MHCLG, awali MHCLG/DCLG), hivi karibuni kama English Indices of Deprivation 2019, na huelekeza moja kwa moja ufadhili wa serikali kuu, upangaji wa vipaumbele vya afya ya umma, na kustahili kwa mipango ya mtaa kadhaa.

## Kwa nini ni muhimu

Ukosefu si kitu kimoja — mtaa unaweza kuwa na kipato duni lakini salama, au kipato cha kutosha lakini ukateseka kwa matokeo mabaya ya afya na makazi mabaya. Vielezo vya awali vya IMD (vilivyoanzia viashiria vya ukosefu vya Department of the Environment vya miaka ya 1970) vilibadilika kuwa modeli ya nyanja saba ya leo hasa kwa sababu ulengaji wa kiashiria kimoja (kiwango cha ukosefu wa ajira pekee, kwa mfano) mara kwa mara ulikosa maeneo yenye ukosefu kwa njia nyingine. IMD 2019 inachanganya kipato, ajira, elimu, afya, uhalifu, vikwazo vya makazi na huduma, na mazingira ya kuishi kuwa cheo kimoja cha mchanganyiko kwa kila LSOA, kila nyanja ikijengwa kutoka kapu lake la viashiria na kupimwa uzito kwa mbinu ya MHCLG. Kwa kuwa inafanya kazi katika kiwango cha eneo dogo (LSOA) badala ya ngazi ya mamlaka ya mtaa, inafichua mifuko ya ukosefu iliyofichwa ndani ya wilaya zenye utajiri vinginevyo — sababu IMD, si wastani wa kipato cha mamlaka ya mtaa, ndiyo ambayo NHS England, ruzuku ya wanafunzi (pupil premium) ya Idara ya Elimu, na fomula nyingi za ufadhili za mamlaka za mitaa hutegemea kweli. Programu inayoamua kustahili, kupanga vipaumbele vya mawasiliano, au kuripoti athari kwa eneo nchini Uingereza inapaswa kuchukulia desili au cheo cha IMD kama pembejeo ya daraja la kwanza, si wazo la baadaye — na pale programu inapolenga kimakusudi maeneo yenye ukosefu zaidi, tathmini yake inapaswa kutumia [uzito wa ugawaji](../uzito-wa-ugawaji/) kulingana na ulengaji huo, badala ya kuthamini pauni ya manufaa sawa bila kujali inapotua.

## Hisabati

```
Nyanja 7, zenye uzito:
  Kipato                              22.5%
  Ajira                               22.5%
  Elimu, Ujuzi na Mafunzo             13.5%
  Ukosefu wa Afya na Ulemavu          13.5%
  Uhalifu                              9.3%
  Vikwazo vya Makazi na Huduma         9.3%
  Mazingira ya Kuishi                  9.3%

Alama ya kila nyanja: viashiria vimesanifishwa (vimeorodheshwa, kisha kubadilishwa
kuelekea mgawanyo wa kawaida) na kuunganishwa kwa mabadiliko ya kielelezo
ili ukosefu wa juu kwenye kiashiria kimoja usiweze kufutwa kabisa
na ukosefu wa chini kwenye vingine ndani ya nyanja hiyo.

Alama mchanganyiko ya IMD (LSOA) = Σ (alama ya nyanja × uzito wa nyanja)
Orodhesha LSOA kwa alama mchanganyiko → 1 (lenye ukosefu zaidi) hadi 32,844 (lenye ukosefu kidogo zaidi)
Desili: cheo ÷ 3,284 (takriban), desili 1 = 10% yenye ukosefu zaidi ya LSOA
```

## Mfano uliokokotolewa

**Alama mchanganyiko ya LSOA**, kwa kutumia alama sanifu za nyanja za mfano (0 = hakuna ishara ya ukosefu, juu zaidi = ukosefu zaidi):

```
Kipato               0.35 × 0.225 = 0.07875
Ajira                0.30 × 0.225 = 0.06750
Elimu                0.20 × 0.135 = 0.02700
Afya                 0.15 × 0.135 = 0.02025
Uhalifu              0.10 × 0.093 = 0.00930
Vikwazo vya Makazi   0.05 × 0.093 = 0.00465
Mazingira ya Kuishi  0.08 × 0.093 = 0.00744

Alama mchanganyiko = 0.07875 + 0.06750 + 0.02700 + 0.02025
                   + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

Alama hiyo mchanganyiko kisha inaorodheshwa dhidi ya alama za LSOA zote 32,844. Ikiweka LSOA kwenye cheo 2,950, inaangukia desili 1 (2,950 ÷ 3,284 ≈ 0.9, yaani ndani ya 10% yenye ukosefu zaidi ya mitaa nchini Uingereza) — ambayo kwa fomula nyingi za ufadhili ndicho kizingiti kinachofungua kustahili, bila kujali jinsi mamlaka ya mtaa inayozunguka inavyopata alama kwa wastani.

## Uhusiano na uhandisi wa programu

- Huduma yoyote inayopata eneo la watumiaji kwa msimbo wa posta au LSOA inaweza kuunganisha jedwali la utafutaji la IMD lililochapishwa (CSV huru, yenye matoleo kutoka MHCLG) kuongeza desili ya ukosefu kama kigezo shirikishi — kwa kulenga mawasiliano, kupanga vipaumbele vya mzigo wa kesi, au kuripoti matokeo kwa kundi la ukosefu bila kukusanya data mpya ya kibinafsi.
- Desili ya IMD ni ukaguzi sanifu wa usawa kwa huduma za kidijitali za umma: kuvuka jedwali la upokeaji wa huduma, kuacha, au kuridhika kwa desili ya IMD kunaibua mapengo ya ufikiaji ambayo kipimo cha jumla huficha — tazama [ujumuishaji wa kidijitali](../ujumuishaji-wa-kidijitali/) na [vipimo vya kuridhika kwa wananchi](../vipimo-vya-kuridhika-kwa-wananchi/).
- Kwa kuwa cheo cha IMD ni cha jamaa (daima hujumlika kuwa seti isiyobadilika ya vyeo katika Uingereza), hakiwezi kuonyesha kama ukosefu kitaifa unaongezeka au kupungua kadiri muda unavyopita — ni maeneo yapi yanaorodheshwa wapi kulingana na mengine katika toleo hilo tu; usijenge dashibodi za mwelekeo kamili kwa cheo ghafi cha IMD pekee.

## Mitego

- **Kulinganisha vyeo vya IMD kati ya matoleo (2015 dhidi ya 2019) kama mwelekeo wa muda** — viashiria vya msingi, jiografia, na mbinu zote hubadilika kati ya matoleo; MHCLG inashauri waziwazi dhidi ya kutumia mabadiliko ya cheo kama ushahidi kwamba eneo likawa na ukosefu zaidi au kidogo.
- **Kutumia IMD ya kiwango cha LSOA kwa watu binafsi** — LSOA katika desili 1 bado ina kaya zisizo na ukosefu, na LSOA ya desili 10 bado ina zenye ukosefu; IMD inaelezea maeneo, si watu, na kuitumia kama kielelezo mbadala cha kustahili kwa mtu binafsi huainisha vibaya pande zote mbili.
- **Kupuuza maelezo ya ngazi ya nyanja kwa faida ya cheo mchanganyiko** — LSOA mbili zenye alama mchanganyiko zinazofanana zinaweza kuwa na wasifu tofauti kabisa wa nyanja (moja ya ukosefu wa afya, nyingine ya ukosefu kutokana na uhalifu); mpango wa ulengaji unaolenga tatizo moja unapaswa kutumia alama ya nyanja husika, si mchanganyiko uliochanganywa.

## Vyanzo

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
