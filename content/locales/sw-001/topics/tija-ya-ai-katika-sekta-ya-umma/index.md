# Tija ya AI katika Sekta ya Umma

Vipimo vya kile ambacho usaidizi wa AI katika uandishi wa msimbo hufanya kwa pato la uhandisi — viwango vya kukubali mapendekezo, ongezeko la kasi katika tafiti zilizodhibitiwa, upitishaji wa PR, na uhifadhi wa msimbo — vina msingi wa ushahidi unaokinzana kwa kweli hata kabla ya vikwazo vya sekta ya umma kuongezwa: uainishaji wa data hupunguza ni sehemu zipi za mfumo wa zamani zana ya AI inaruhusiwa kuzigusa kabisa, mizunguko ya manunuzi inamaanisha zana inayotathminiwa mara nyingi iko nyuma kwa kizazi kimoja cha modeli kuliko uwezo wa sasa, na mahitaji ya vibali vya usalama hudhibiti nani anaweza kuitumia wapi.

## Kwa nini ni muhimu

Tafiti mbili zilizodhibitiwa zinazotajwa zaidi zinaelekea pande tofauti. RCT ya Peng na wenzake ya 2023 ya GitHub Copilot ilipata kuwa watengenezaji walikamilisha kazi mpya ya seva ya HTTP kwa kasi ya 55.8% zaidi kwa kutumia Copilot (saa 1 dakika 11 dhidi ya saa 2 dakika 41, n=95). RCT ya METR ya 2025 ilipata kuwa watengenezaji wazoefu wa chanzo huria wanaofanya kazi kwenye *hifadhi zao wenyewe zilizokomaa* walikuwa polepole kwa 19% kwa zana za AI za mwanzoni mwa 2025, huku wakiamini kuwa walikuwa wepesi kwa karibu 20%. Tafiti zote mbili ni thabiti; mkinzano ndio matokeo — ufanisi wa kazi mpya hauhamii kwenye ufanisi katika msingi wa msimbo uliokomaa, na sehemu kubwa ya uhandisi wa serikali ni kazi ya msingi wa msimbo uliokomaa kwenye mifumo ya zamani na ya kipekee zaidi kuliko hifadhi ya kati ya kibiashara. Generative AI Framework for HMG ya Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) inaweka kanuni za upitishaji unaowajibika hasa kwa sababu msingi huu wa ushahidi hauwezi kuagizwa tu kutoka maonyesho ya wauzaji; idara zinatarajiwa kutathmini zana dhidi ya mahitaji yao wenyewe ya kushughulikia data na usalama kabla ya kusambaza.

## Hisabati

```
Kiwango cha kukubali  = mapendekezo yaliyokubaliwa / mapendekezo yaliyoonyeshwa
Kiwango cha uhifadhi  = msimbo wa AI unaofika kuunganishwa / msimbo wa AI uliokubaliwa
Ongezeko la kasi      = (t_udhibiti − t_AI) / t_udhibiti  (kutoka ulinganisho uliodhibitiwa PEKEE)
Tofauti ya upitishaji = Δ PR zilizounganishwa/msanidi/wiki

Kigezo cha ufikiaji cha sekta ya umma:
  sehemu ya msingi wa msimbo unaostahili = mistari ya msimbo kwenye mifumo ambapo
    uainishaji (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) unaruhusu zana kabisa

Modeli ya thamani = watengenezaji × ufikiaji unaostahili × muda uliookolewa × kiwango kamili × matumizi
             — kila kipengele kinahitaji kipimo cha ndani, na kigezo cha ufikiaji
             hakina kinacholingana katika sekta binafsi
```

## Mfano uliokokotolewa

Idara ya serikali inajaribu msaidizi wa uandishi wa msimbo wa AI kwa watengenezaji 300, lakini ni mifumo iliyoainishwa kama OFFICIAL pekee inayostahili kutumia zana — 70% ya mfumo kwa mgawanyo wa idadi ya wafanyakazi, huku 30% iliyobaki (mifumo ya uainishaji wa juu) ikitengwa kabisa.

```
Watengenezaji wanaostahili = 300 × 0.70 = 210

Matokeo ya jaribio: muda uliookolewa unaoripotiwa na wenyewe dakika 40/siku;
                    akiba iliyopimwa ngazi ya kazi dakika 12/siku (saa 0.2)
                    — pengo la mtazamo la METR, likijirudia kwa vitendo

Thamini namba ILIYOPIMWA:
  210 × saa 0.2 × siku 220 × £55/saa kiwango kamili × 0.6 matumizi
  = 210 × saa 44 × £55 × 0.6
  = saa 9,240 × £55 × 0.6 ≈ uwezo wa £304,920/mwaka

Gharama: viti 210 vyenye leseni × £22/mwezi × 12 ≈ £55,440/mwaka

Uwiano halisi wa uwezo ≈ 304,920 / 55,440 ≈ 5.5:1
```

Linaweza kufadhiliwa kwa takriban theluthi moja ya manufaa yanayoripotiwa na wenyewe, na baada tu ya kikomo cha uainishaji kutumika — kutoa leseni kwa watengenezaji wote 300 kwa kutegemea kielelezo kinachoripotiwa na wenyewe kungekuza idadi inayostahili na akiba halisi.

## Uhusiano na uhandisi wa programu

Nidhamu zinazohamia moja kwa moja: fanya **majaribio ya kivitendo** kwenye msingi wa msimbo wa idara yenyewe na tiketi halisi, si kazi za maonyesho za wauzaji, kwa sababu matokeo ya METR ni mahususi ya msingi wa msimbo uliokomaa; chukulia **kiwango cha kukubali kama kielelezo mbadala, si matokeo** — kukubali kwingi na uhifadhi mdogo ni sawa na utambuzi wa kupita kiasi katika programu; oanisha kila dai la upitishaji na **ukaguzi wa uthabiti**, kwa sababu ripoti ya DORA ya 2025 ilipata kuwa upitishaji wa AI huongeza upitishaji lakini hudhoofisha uthabiti wa mabadiliko, ambayo ndiyo uchambuzi wa manufaa halisi ambao [vipimo vya DORA kwa thamani ya umma](../vipimo-vya-dora-kwa-thamani-ya-umma/) vimejengwa kuuendesha; na kuwa mwaminifu kwamba zana za AI zinaweza kupanua, si kupunguza, pengo kwenye mifumo ya zamani yenye [deni la kiufundi](../deni-la-kiufundi-kama-mmomonyoko-wa-thamani-ya-umma/) kubwa, kwa sababu data ya mafunzo haiwakilishi vya kutosha COBOL, 4GL, na msimbo maalum wa mainframe unaopatikana sana serikalini, kwa hivyo ubora wa mapendekezo kwenye mifumo inayohitaji msaada zaidi mara nyingi ndio dhaifu zaidi. Hili linakaa pamoja na swali pana la [thamani ya AI serikalini](../thamani-ya-ai-serikalini/) na linapaswa kusimamiwa na vikwazo vilevile vya [thamani ya usalama wa mtandao katika sekta ya umma](../thamani-ya-usalama-wa-mtandao-katika-sekta-ya-umma/) vinavyopunguza ni wapi zana yoyote ya mtu wa tatu inaweza kuona msimbo au data kabisa.

## Mitego

- **Kuhamisha tafiti za wauzaji**: kutumia ongezeko la kasi la RCT za kazi mpya kwenye kazi ya kuunganisha mifumo ya zamani ndilo kosa hasa ambalo utafiti wa METR ulifichua.
- **Kujiripoti kama kipimo**: pengo la pointi 20 za asilimia kati ya mtazamo na kipimo ndilo upendeleo mkubwa unaojulikana katika maandiko haya, na hukuza hoja za biashara zinazotegemea tafiti za watengenezaji pekee.
- **Kupuuza kikomo cha uainishaji**: modeli za leseni na thamani zilizojengwa juu ya jumla ya wafanyakazi badala ya sehemu ndogo inayostahili iliyoidhinishwa kwa uainishaji hukuza kwa utaratibu ufanisi wa gharama na ufikiaji unaowezekana.
- **Kuchelewa kwa mzunguko wa manunuzi**: manunuzi ya zana yanayotegemea mfumo wa mikataba yanaweza kumaanisha jaribio linatathmini kizazi cha modeli kilicho nyuma kwa miezi 12–18 ikilinganishwa na kinachopatikana hadharani wakati wa usambazaji kamili, na kufanya dhana ya ongezeko la kasi ya hoja ya awali ya biashara kuwa ya zamani kabla ya kuzinduliwa.

## Vyanzo

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
