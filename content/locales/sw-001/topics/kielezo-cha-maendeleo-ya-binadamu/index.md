# Kielezo cha Maendeleo ya Binadamu (HDI)

HDI ni mbadala mkuu wa Umoja wa Mataifa wa kuorodhesha nchi kwa kipato peke yake: huchanganya matarajio ya maisha, elimu, na kipato kuwa namba moja kati ya 0 na 1, kwa msingi wa dhana — iliyojadiliwa na mchumi Amartya Sen na kuendelezwa kwa Umoja wa Mataifa na Mahbub ul Haq — kwamba maendeleo ni kuhusu kupanua kile watu wanachoweza kufanya na kuwa, si tu kile wanachopata. Imekuwa ikichapishwa kila mwaka katika Human Development Report ya Mpango wa Maendeleo wa Umoja wa Mataifa (UNDP) tangu 1990.

## Kwa nini ni muhimu

Kabla ya HDI, "maendeleo" yalipimwa karibu kabisa kwa GNP kwa kila mtu, ambayo haisemi chochote kuhusu kama ukuaji unafikia afya au elimu ya watu wa kawaida. Mtazamo wa uwezo wa Sen ulibadilisha maendeleo kuwa upanuzi wa uhuru halisi, na ul Haq akaugeuza kuwa kielezo kinachoweza kuchapishwa ambacho UNDP ingeweza kuorodhesha kila nchi kwacho, ikizilazimisha serikali zilizotajirika kwa kipato pekee lakini kupuuza afya au masomo kukabiliana na nafasi mbaya zaidi kuliko GDP yao ilivyodokeza (nchi za mafuta za Ghuba na baadhi ya uchumi wa uchimbaji ni mifano ya kawaida). Muundo wa pande tatu wa HDI pia ni babu wa moja kwa moja wa kimbinu wa [Kielezo cha Umaskini wa Vipimo Vingi (MPI)](../kielezo-cha-umaskini-wa-vipimo-vingi/): vyote viwili vinakataa kuruhusu kipimo kimoja kufidia pungufu katika kingine, kwa kutumia wastani wa kijiometri badala ya wa hesabu. UNDP huchapisha maelezo kamili ya kiufundi na data ya msingi kwa kila toleo (<https://hdr.undp.org/data-center/human-development-index>), ambayo ndiyo chanzo rasmi kwa yeyote anayejenga juu ya kielezo badala ya kukitoa upya.

## Hisabati

```
Kielezo cha Matarajio ya Maisha (LEI) = (LE − 20) / (85 − 20)

Kielezo cha Wastani wa Miaka ya Masomo = wastani wa miaka ya masomo / 15
Kielezo cha Miaka Inayotarajiwa ya Masomo = miaka inayotarajiwa ya masomo / 18
Kielezo cha Elimu (EI) = (Kielezo cha Wastani wa Miaka + Kielezo cha Miaka Inayotarajiwa) / 2

Kielezo cha Kipato (II) = (ln(GNI kwa kila mtu) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [wastani wa kijiometri wa vielezo vidogo vitatu]
```

Wastani wa kijiometri ni wa makusudi: kwa sababu unazidisha badala ya kuchukua wastani, alama ya juu sana katika kipimo kimoja haiwezi kufidia kikamilifu alama ya chini sana katika kingine — usanifu ambao UNDP ilipitisha mwaka 2010 hasa kuadhibu kutokuwa na usawa, ikichukua nafasi ya fomula ya awali ya wastani wa hesabu.

## Mfano uliokokotolewa

**Nchi ya kipato cha kati**: matarajio ya maisha miaka 72, wastani wa miaka ya masomo 8, miaka inayotarajiwa ya masomo 13, GNI kwa kila mtu $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

HDI ya 0.713 iko katika kundi la UNDP la "maendeleo ya juu ya binadamu" (0.700–0.799); "juu sana" huanza 0.800. Angalia jinsi matokeo yanavyoathiriwa na kielezo kidogo dhaifu zaidi: ikiwa wastani wa miaka ya masomo ungekuwa 4 badala ya 8 (MYSI = 0.267, EI = 0.494), HDI inashuka hadi (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — ikishuka kundi zima — ingawa hakuna kingine kilichobadilika.

## Uhusiano na uhandisi wa programu

- Mchoro wa wastani wa kijiometri unaweza kutumika tena moja kwa moja kwa alama yoyote ya huduma au bidhaa ya mchanganyiko ambapo hutaki kipimo kimoja chenye nguvu kufunika udhaifu muhimu — mf. kuchanganya alama za ufikivu, utendaji, na uaminifu za huduma ya kidijitali ya umma kwa kuzidisha badala ya wastani wenye uzito, ili huduma ya haraka lakini isiyofikika isiweze kupata alama "nzuri".
- Mabadiliko ya logariti ya HDI kwa kipato (thamani ya pembeni inayopungua ya pauni ya ziada) ni mantiki ileile iliyo nyuma ya [uzito wa ugawaji](../uzito-wa-ugawaji/) katika tathmini: $1,000 za ziada humaanisha zaidi sana kwa kaya maskini kuliko tajiri, na kuchukulia vyote viwili kwa mstari huweka bei vibaya kwa athari.
- Dashibodi yoyote inayoripoti alama moja mchanganyiko ya "ujumuishaji wa kidijitali" au "matokeo ya wananchi" inapaswa kuandika fomula yake ya kujumlisha waziwazi kama maelezo ya kiufundi ya UNDP yanavyofanya — tazama [KPI za sekta ya umma](../viashiria-muhimu-vya-utendaji-vya-sekta-ya-umma/) na [kadi ya alama ya thamani ya umma](../kadi-ya-alama-ya-thamani-ya-umma/).

## Mitego

- **Kutumia wastani wa hesabu badala ya wa kijiometri** — wastani wa hesabu huruhusu kipato cha juu kuficha afya au elimu duni kabisa; lengo zima la mabadiliko ya mbinu ya 2010 lilikuwa kukomesha ubadilishanaji huo.
- **Kulinganisha HDI mwaka hadi mwaka kana kwamba ni GDP iliyorekebishwa kwa mfumuko wa bei** — UNDP mara kwa mara hubadilisha msingi wa kielezo (mipaka mipya ya chini/ya juu, viwango vilivyorekebishwa vya masomo), hivyo mabadiliko ya nafasi yanaweza kuakisi sasisho la mbinu, si mabadiliko halisi; angalia kila wakati kielezo kinatoka toleo gani la HDR.
- **Kuchukulia HDI kama kipimo cha umaskini** — ni wastani wa taifa na haisemi chochote kuhusu ugawaji ndani ya nchi; kwa hilo, tumia [Kielezo cha Umaskini wa Vipimo Vingi (MPI)](../kielezo-cha-umaskini-wa-vipimo-vingi/) au HDI tofauti ya UNDP iliyorekebishwa kwa ukosefu wa usawa.

## Vyanzo

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
