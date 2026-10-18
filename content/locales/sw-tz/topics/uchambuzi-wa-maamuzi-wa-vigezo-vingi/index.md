# Uchambuzi wa Maamuzi wa Vigezo Vingi (MCDA)

MCDA hutoa alama na kupima uzito wa machaguo dhidi ya vigezo kadhaa tofauti vyenye uzito kwa wakati mmoja, ikizalisha ulinganisho ulioorodheshwa bila kulazimisha kila kigezo kuingia kwenye kipimo kimoja cha fedha au cha kitengo asilia. Ni mbinu ya tathmini kwa maamuzi ambapo matokeo yanayojalisha hayawezi kweli kupunguzwa kuwa namba moja.

## Kwa nini ni muhimu

Green Book inaruhusu MCDA waziwazi (kiambatisho chake cha tafiti za kesi cha Box 2 na Annex A zote zinaijadili moja kwa moja) kwa tathmini ambapo manufaa "hayalinganishiki kweli" — ambapo kubadilisha kila kitu kuwa fedha kupitia [uchambuzi wa gharama na faida za kijamii](../uchambuzi-wa-gharama-na-faida-za-kijamii/), au kuwa matokeo moja kupitia [uchambuzi wa ufanisi wa gharama](../uchambuzi-wa-ufanisi-wa-gharama-serikalini/), kungepotosha uamuzi badala ya kuuweka wazi (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Uchaguzi wa eneo la gereza jipya, kwa mfano, hupima gharama ya mtaji dhidi ya athari kwa jamii, muunganisho wa usafiri, athari ya mazingira, na uwezekano wa kuajiri wafanyakazi — vigezo visivyo na kitengo cha pamoja na ambapo kulazimisha kitengo cha pamoja (kwa kawaida fedha) kungeingiza hukumu ya thamani kuhusu umuhimu wa jamaa wa, tuseme, athari ya mazingira dhidi ya gharama, ikiwa imevikwa hesabu ya kiuhalisia.

Uaminifu wa MCDA pia ndio udhaifu wake mkuu: kwa sababu uzito hupewa na yeyote anayeendesha tathmini (au jopo), mbinu ina uhalali tu kama mchakato wa kupima uzito. Mwongozo wa Green Book uko wazi kwamba vigezo na uzito lazima vikubaliwe na kuchapishwa *kabla* machaguo hayajapewa alama, hasa kuzuia mkaguzi kufanya kazi kinyumenyume kutoka chaguo analopendelea hadi uzito unaolihalalisha.

## Hisabati

```
Kwa kila chaguo i na kigezo j:
  Alama_ij  = utendaji wa chaguo dhidi ya kigezo hicho (mara nyingi 0–100
              au 1–10, kutoka ushahidi, hukumu ya mtaalamu, au upimaji wa wadau)
  Uzito_j   = umuhimu wa jamaa wa kigezo j, uzito unajumlika kuwa 1 (au 100)

Alama yenye uzito ya chaguo i = Σ_j (Alama_ij × Uzito_j)

Utaratibu:
1. Kubaliana seti ya vigezo na uzito KABLA ya kutoa alama kwa chaguo lolote (kupima uzito
   kwa mzunguko au ulinganisho wa jozi, mf. AHP, ni mbinu za kawaida za kupata uzito).
2. Toa alama kwa kila chaguo dhidi ya kila kigezo kwa kipimo cha pamoja, kutoka
   ushahidi inapowezekana.
3. Kokotoa jumla zenye uzito; orodhesha machaguo.
4. Jaribu unyeti wa uzito: je, orodha inadumu licha ya kutokubaliana kunakokubalika
   kuhusu kiasi gani kila kigezo kinapaswa kujalisha?
```

MCDA haitoi thamani kamili inayotetewa kama thamani halisi ya sasa ya SCBA — hutoa tu orodha inayotegemea uzito uliokubaliwa. Hii ni sifa pale uamuzi unapohusu kweli kupima kati ya mema yasiyolinganishika, na dosari ikitumika kukwepa kazi ngumu zaidi ya kuweka thamani ya fedha pale kuweka thamani ya fedha kulikuwa kunawezekana kweli.

## Mfano uliokokotolewa

**Mamlaka ya mtaa**: baraza linalochagua eneo la kituo kipya cha kuchakata taka za nyumbani linatoa alama kwa maeneo matatu dhidi ya vigezo vinne, vilivyopimwa uzito na jopo la idara mbalimbali kabla ya ziara yoyote ya eneo:

```
Vigezo (uzito):          Gharama ya mtaji (30%)  Ufikiaji wa usafiri (25%)
                          Athari kwa jamii (25%)  Athari ya mazingira (20%)

Alama za maeneo (0–100, juu = bora):
Eneo A: gharama 80, ufikiaji 60, jamii 40, mazingira 70
Eneo B: gharama 60, ufikiaji 90, jamii 70, mazingira 50
Eneo C: gharama 90, ufikiaji 50, jamii 80, mazingira 60

Jumla zenye uzito:
Eneo A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Eneo B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Eneo C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Eneo C linaongoza. Mbio za unyeti zinazohamisha uzito wa athari kwa jamii kutoka 25% hadi 35% (zikichukua pointi 10 kutoka gharama ya mtaji) hubadilisha jumla ya Eneo C kuwa 71.5 − 3 + 8 = 76.5 na ya Eneo B kuwa 68 − 6 + 7 = 69 — Eneo C bado linaongoza, hivyo orodha ni thabiti dhidi ya kutokubaliana huko kunakokubalika kuhusu uzito, ambalo ndilo hasa ukaguzi ambao Green Book inatarajia kuuona ukiripotiwa.

**Shirika la hisani**: msingi wa kutoa ruzuku unaochagua kati ya kufadhili huduma ya ushauri wa madeni, mtandao wa benki za chakula, na programu ya ujuzi wa kifedha hutumia MCDA badala ya SROI (tazama [faida ya kijamii ya uwekezaji](../faida-ya-kijamii-ya-uwekezaji/)) hasa kwa sababu wadhamini hawakubaliani, kwa nia njema, kama misaada ya dharura au kinga inapaswa kuwa na uzito zaidi — MCDA inawawezesha kukubaliana *umbo* la kutokubaliana (wigo wa uzito) badala ya kujifanya uwiano mmoja wa SROI unaliamua.

## Uhusiano na uhandisi wa programu

MCDA ni zana ya asili ya kuchagua muuzaji na usanifu pale vigezo vinapogongana kweli — kuchagua kati ya mfumo wa usimamizi wa kesi unaohifadhiwa wingu na wa mahali kunapima gharama, hatari ya mamlaka ya data, ufikivu, na kasi ya utoaji kwa njia zisizopunguzika kuwa namba moja. Viongozi wa uhandisi wanapaswa kusisitiza uzito upangwe kabla machaguo hayajapewa alama, kama Green Book inavyohitaji, kwa sababu zoezi la kupanga uzito linalofanywa baada ya kuona orodha fupi huelekea kwa uhakika kwenye chaguo ambalo chumba tayari kilipendelea. Tazama [kujenga au kununua serikalini](../kujenga-au-kununua-serikalini/) kwa matumizi ya kawaida ya MCDA, na [kadi ya alama ya thamani ya umma](../kadi-ya-alama-ya-thamani-ya-umma/) kwa zana inayohusiana ya utoaji alama iliyopangwa inayotumika baada ya uamuzi badala ya kabla.

## Mitego

- **Kuweka uzito baada ya kuona machaguo.** Hii ndiyo njia ya kawaida zaidi ya kuchezea MCDA, kwa makusudi au la; chapisha uzito kabla ya kutoa alama, na rekodi nani aliyeuweka.
- **Kuchukulia jumla yenye uzito kama namba ngumu.** Alama ya 71.5 dhidi ya 68 si pengo lenye maana kitakwimu isipokuwa uchambuzi wa unyeti unathibitisha orodha ni thabiti; ripoti wigo, si usahihi wa uongo.
- **Kutumia MCDA kuepuka kuweka thamani ya fedha ambayo ilikuwa inawezekana kweli.** Ikiwa vigezo vingi vingeweza kuwekewa bei kwa uaminifu, kuchagua MCDA kwa chaguo-msingi badala ya [SCBA](../uchambuzi-wa-gharama-na-faida-za-kijamii/) hutupa taarifa ambazo tathmini ingeweza kutumia.
- **Kumruhusu mdau mmoja mkuu kuweka uzito wote peke yake.** Mazoea mema ya Green Book yanatarajia uzito upatikane kutoka jopo wakilishi, si mkurugenzi mdhamini, ili kuepuka tathmini kutoa tena tu kile ambacho mtu huyo alikitaka tayari.

## Vyanzo

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
