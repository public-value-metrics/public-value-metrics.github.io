# Uchambuzi wa Gharama na Faida za Kijamii (SCBA)

Uchambuzi wa gharama na faida za kijamii hubadilisha kila gharama na manufaa ya sera au programu — ya soko na yasiyo ya soko — kuwa kitengo cha pamoja cha fedha, hupunguza thamani ya mtiririko wa baadaye hadi thamani ya sasa, na kuzijumlisha kutoa namba moja: je, pendekezo hili linaifanya jamii kuwa bora zaidi, na kwa kiasi gani?

## Kwa nini ni muhimu

SCBA ndiyo mbinu ya kiidadi ya chaguo-msingi katika kesi ya kiuchumi ya [tathmini ya Green Book (Mfano wa Kesi Tano)](../tathmini-ya-green-book/): mwongozo wa HM Treasury unahitaji mapendekezo yaonyeshe thamani chanya halisi ya sasa ya kijamii (NPSV) popote manufaa yanaweza kuwekewa thamani ya fedha kwa kuaminika, ikitumia utayari wa kulipa kama kanuni ya msingi ya kuthamini kwa bidhaa zisizo za soko (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Sura ya 5). Nidhamu inayoitekeleza ni kwamba uchambuzi wa gharama na faida wa "kijamii" si zoezi sawa na tathmini ya uwekezaji wa sekta binafsi: lazima ujumuishe gharama na manufaa yanayoangukia wahusika wa tatu wasio wahusika wa muamala (athari za nje), lazima utumie [kiwango cha punguzo cha kijamii](../kiwango-cha-punguzo-cha-kijamii/) badala ya gharama ya kibiashara ya mtaji, na unapaswa kutumia [uzito wa ugawaji](../uzito-wa-ugawaji/) pale pauni inapojalisha zaidi kwa kaya maskini kuliko tajiri.

SCBA huvunjika hasa pale wakosoaji wake wanapotarajia: bidhaa zisizo na mlinganisho wa soko — hewa safi, mshikamano wa kijamii, thamani ya maisha yaliyookolewa — lazima ziwekewe thamani ya fedha kwa mbinu za [mapendeleo yaliyotamkwa](../kukadiria-thamani-kwa-mapendeleo-yaliyotamkwa/) au [mapendeleo yaliyodhihirishwa](../kukadiria-thamani-kwa-mapendeleo-yaliyodhihirishwa/), au [bei kivuli](../bei-kivuli/) lazima ijengwe. Pale kuweka thamani ya fedha kunapobishaniwa badala ya kuwa gumu tu, Green Book yenyewe inapendekeza kurudi kwenye [uchambuzi wa ufanisi wa gharama](../uchambuzi-wa-ufanisi-wa-gharama-serikalini/) au [uchambuzi wa maamuzi wa vigezo vingi](../uchambuzi-wa-maamuzi-wa-vigezo-vingi/) badala ya kulazimisha namba ambayo hakuna anayeiamini.

## Hisabati

```
NPSV = Σ [t=0 hadi T] (Manufaa_t − Gharama_t) / (1 + r)^t

ambapo:
  Manufaa_t = manufaa yote yaliyowekewa thamani ya fedha katika mwaka t, ikijumuisha
              bidhaa zisizo za soko zilizothaminiwa kwa mapendeleo yaliyotamkwa/yaliyodhihirishwa au bei kivuli
  Gharama_t = gharama zote zilizowekewa thamani ya fedha katika mwaka t, ikijumuisha gharama ya fursa
              ya rasilimali (tazama ../opportunity-cost-in-public-spending/)
  r         = kiwango cha punguzo cha kijamii (HM Treasury huweka 3.5% ikishuka hadi
              viwango vya chini zaidi ya mwaka 30, kulingana na Annex A ya Green Book)
  T         = kipindi cha tathmini

Uwiano wa manufaa kwa gharama (BCR) = Σ PV(Manufaa) / Σ PV(Gharama)
```

BCR juu ya 1 (au NPSV juu ya sifuri) huashiria thamani halisi ya kijamii. Makundi ya thamani ya fedha ya Green Book (kama yanavyotumika katika tathmini ya usafiri na miundombinu) huweka lebo wigo wa BCR: chini ya 1.0 ni thamani duni ya fedha, 1.0–1.5 ni ya chini, 1.5–2.0 ni ya wastani, 2.0–4.0 ni ya juu, na juu ya 4.0 ni ya juu sana. Uchambuzi wa unyeti — kuendesha tena NPSV chini ya dhana za kukata tamaa na za matumaini — ni wa lazima, si wa hiari, kwa sababu manufaa yasiyo ya soko yaliyowekewa thamani ya fedha hubeba bendi pana za kutokuwa na uhakika.

## Mfano uliokokotolewa

**Mamlaka ya mtaa**: baraza linatathmini uwekezaji wa £milioni 3 katika mtandao mpya wa baiskeli na kutembea katika kipindi cha tathmini cha miaka 20 kwa kiwango cha punguzo cha 3.5%.

```
Gharama: £milioni 3 mtaji mwaka 0, £50,000/mwaka matengenezo (miaka 1-20)
PV(matengenezo) ≈ £50,000 × 14.2 (kigezo cha annuiti cha miaka 20 kwa 3.5%) ≈ £710,000
Jumla PV(gharama) ≈ £milioni 3.71

Manufaa (yote yamewekewa thamani ya fedha kwa zana zilizochapishwa za DfT/WHO):
  Manufaa ya afya kutokana na shughuli za kimwili zilizoongezeka: £180,000/mwaka
  Kupungua kwa utoro: £40,000/mwaka
  Kupunguza msongamano (safari chache za gari): £60,000/mwaka
  Jumla ya mkondo wa manufaa: £280,000/mwaka
PV(manufaa) ≈ £280,000 × 14.2 ≈ £milioni 3.98

NPSV = £milioni 3.98 − £milioni 3.71 = +£milioni 0.27
BCR = 3.98 / 3.71 = 1.07 → thamani ya fedha "ya chini"
```

Mpango unavuka kizingiti lakini kwa kidogo tu; mbio za unyeti kwa kadirio la manufaa ya afya la chini kwa 20% (zikiakisi kutokuwa na uhakika halisi katika kuthamini shughuli za kimwili) hugeuza BCR kuwa chini ya 1.0, ndiyo sababu hasa Green Book inahitaji jedwali la unyeti lichapishwe pamoja na namba ya kichwa cha habari, si kadirio la kati tu.

**Shirika la hisani**: programu ya kuzuia vifo vya watoto wachanga inayogharimu £500,000/mwaka inatathminiwa kwa kutumia thamani ya maisha ya kitakwimu (VSL) — bei kivuli, si bei ya soko iliyoonekana — ya takriban £milioni 2.1 (kielelezo cha 2023 kilichosasishwa cha HM Treasury, chenyewe kimetokana na tafiti za mapendeleo yaliyotamkwa). Kuzuia kifo kimoja cha mtoto mchanga kwa mwaka dhidi ya gharama ya £500,000 kunatoa BCR ya 4.2, thamani ya fedha "ya juu sana" kwa raha — lakini matokeo yote yanategemea kielelezo cha VSL, ndiyo sababu SCBA yoyote inayotumia VSL lazima iifichue kama dhana, si ukweli.

## Uhusiano na uhandisi wa programu

SCBA ni mfumo wa asili wa maamuzi ya uwekezaji wa jukwaa na miundombinu katika programu za serikali — kulinganisha jukwaa la pamoja la utambulisho dhidi ya suluhisho za pointi za idara, kwa mfano, kunahitaji kuweka thamani ya fedha manufaa kama kupungua kwa gharama ya kujiunga mara mbili, kupungua kwa ulaghai, na muda wa haraka zaidi hadi huduma ambayo hayana bei ya soko yenyewe. Wahandisi wanaojenga huduma ya msingi wanapaswa kutarajia viongozi wa programu kuomba pembejeo kwa uchambuzi huu: gharama za kitengo za miamala (tazama [gharama kwa kila muamala](../gharama-kwa-kila-muamala/)), viwango vinavyotarajiwa, na gharama za kuzorota/kutopatikana. Nidhamu muhimu zaidi ya kuagiza: punguza thamani ya manufaa ya baadaye, taja msingi wa hali mbadala waziwazi (tazama [uchambuzi wa hali mbadala](../uchambuzi-wa-hali-mbadala/)), na kamwe usiwasilishe kadirio la nukta moja bila wigo wake wa unyeti.

## Mitego

- **Kuhesabu manufaa mara mbili.** Kuhesabu "muda uliookolewa" na "tija iliyopatikana kutokana na muda huo" kama mistari tofauti ya manufaa hukuza kesi; muda uliookolewa ndio manufaa, matumizi yake ya baadaye si manufaa ya ziada isipokuwa yamethibitishwa kwa kujitegemea.
- **Kuacha gharama zilizohamishwa.** Mpango unaohamisha msongamano kutoka barabara moja hadi nyingine, au unaohamisha ulaghai kutoka njia moja hadi nyingine, haujaunda manufaa halisi ambayo NPSV ya kichwa cha habari inadokeza — tazama [uhamishaji na uhusishaji](../uhamishaji-na-uhusishaji/).
- **Kutumia kiwango cha punguzo cha binafsi.** Kutumia gharama ya kibiashara ya mtaji (tuseme 8–10%) badala ya kiwango cha punguzo cha kijamii hudharau kwa utaratibu manufaa ya umma ya upeo mrefu kama faida za afya na mazingira — tazama [kiwango cha punguzo cha kijamii](../kiwango-cha-punguzo-cha-kijamii/).
- **Kuweka thamani ya fedha isiyobishaniwa na kupuuza inayobishaniwa.** Ikiwa theluthi mbili ya manufaa ya pendekezo ni akiba ya ufanisi iliyowekewa thamani kwa uhakika na theluthi moja ni ongezeko la ustawi lililowekewa thamani kwa kutetereka, NPSV ya kichwa cha habari huchanganya kimya kimya namba ngumu na laini; ziripoti kando.

## Vyanzo

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
