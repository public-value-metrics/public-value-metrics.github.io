# Uzito wa Ugawaji

Uzito wa ugawaji hurekebisha thamani ya fedha ya gharama au manufaa kulingana na nani anayeyapokea, kwa kanuni kwamba pauni ya ziada ina thamani kubwa zaidi kwa kaya maskini kuliko kwa tajiri. Green Book ya HM Treasury hutoa mbinu wazi ya kutumia uzito huu, iliyojengwa juu ya utumiaji wa pembeni unaopungua wa kipato, ili tathmini zisichukulie kimya kimya pauni inayopatikana na kundi tajiri zaidi la kumi kuwa sawa kwa thamani na pauni inayopatikana na kundi maskini zaidi.

## Kwa nini ni muhimu

Uchambuzi wa kawaida wa gharama na faida hujumlisha pauni bila kuuliza ni za nani, jambo linalodhania kimya kimya kwamba pauni ina thamani sawa kwa kila mtu — dhana ambayo wachumi wamejua kwa muda mrefu kuwa si kweli. Kaya inayopata £15,000/mwaka hupata faida ya £1,000 tofauti sana na kaya inayopata £150,000/mwaka, kwa sababu utumiaji wa pembeni wa kipato hushuka kipato kinapopanda. Bila uzito, tathmini ya kawaida hupendelea kwa utaratibu afua zinazonufaisha makundi tajiri zaidi, ambayo tayari yana hali nzuri, kwa sababu nguvu yao ya juu ya matumizi hukuza tathmini ya fedha ya manufaa yanayowafikia (uboreshaji wa bustani karibu na nyumba ghali "unaonyesha" manufaa makubwa ya thamani ya mali kuliko uboreshaji uleule karibu na nyumba za bei nafuu, kwa sababu tu bei ni za juu, si kwa sababu ongezeko la ustawi ni kubwa zaidi).

Mwongozo wa nyongeza wa Green Book kuhusu uchambuzi wa ugawaji, ulioimarishwa baada ya mapitio ya Treasury ya 2020 yaliyojibu ukosoaji kwamba mbinu ya tathmini ilipendelea kwa utaratibu London na Kusini Mashariki, huweka mbinu rasmi ya uzito inayotegemea unyumbufu uliodhaniwa wa utumiaji wa pembeni wa kipato wa takriban 1.3 — maana yake kuongezeka mara mbili kwa kipato hupunguza takriban nusu (hasa, 2^-1.3 ≈ mara 0.41) thamani ya pembeni ya pauni ya ziada. Hili si marekebisho ya kuzungusha: kuyatumia kunaweza kubadilisha ni lipi kati ya programu mbili zinazoshindana linaonyesha thamani halisi ya sasa ya juu zaidi, hasa wakati wa kulinganisha uingiliaji uliolenga eneo lenye ukosefu na ule ulioenea katika idadi ya watu kwa ujumla.

## Hisabati

Uzito wa ugawaji wa Green Book kwa pauni ya manufaa inayopatikana na kaya katika kiwango cha kipato y, ukilinganishwa na pauni katika kiwango cha wastani wa kipato cha taifa ȳ:

```
Uzito(y) = (ȳ / y)^e

ambapo:
  y  = kipato cha kaya (au kipato cha kundi lililoathiriwa)
  ȳ  = wastani (rejea) wa kipato cha kaya
  e  = unyumbufu wa utumiaji wa pembeni wa kipato (Green Book: takriban 1.3)
```

Kutumia uzito kwa manufaa halisi:

```
Manufaa yaliyopimwa uzito = Σ [manufaa yasiyopimwa uzito kwa kundi i × Uzito(y_i)]
```

Kundi linalopata nusu ya wastani wa taifa (y = 0.5ȳ) hupata uzito wa (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — kila pauni ya manufaa kwa kundi hilo huhesabiwa kuwa na thamani ya takriban mara 2.46 ya pauni kwa kaya ya kipato cha wastani.

## Mfano uliokokotolewa

**Programu mbili za mtaa zinazoshindana**, kila moja ikiwa na manufaa halisi yasiyopimwa uzito ya pauni milioni 2/mwaka, zikishindania mfuko mmoja wa ukuaji wa kikanda:

- *Programu A*: mpango wa msaada wa biashara katika mji wenye ustawi, wastani wa kipato cha kaya £45,000 (takriban mara 1.3 ya wastani wa taifa uliodhaniwa wa £35,000).
- *Programu B*: programu ya ujuzi katika kata yenye ukosefu, wastani wa kipato cha kaya £18,000 (takriban mara 0.51 ya wastani wa taifa).

```
Uzito(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Uzito(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Manufaa yaliyopimwa uzito A = £2,000,000 × 0.72 = pauni milioni 1.44
Manufaa yaliyopimwa uzito B = £2,000,000 × 2.53 = pauni milioni 5.06
```

Bila uzito, programu hizo mbili zinalingana. Zikipimwa uzito kwa athari za ugawaji, manufaa ya Programu B ni zaidi ya mara tatu kubwa zaidi — matokeo yanayogeuza pendekezo la ufadhili na yanayoakisi madhumuni ya wazi ya Green Book katika kuhitaji uzito uonyeshwe, si uwiano wa manufaa-kwa-gharama usiopimwa uzito pekee.

**Ugawaji wa ruzuku ya shirika la hisani**: mfadhili anayelinganisha ruzuku ya £500,000 inayofikia kaya 1,000 za kipato cha chini (uzito ≈ 2.0, thamani iliyopimwa uzito sawa na £milioni 1) dhidi ya £500,000 hizohizo zinazofikia kaya 1,000 za kipato cha kati (uzito ≈ 1.0, thamani iliyopimwa uzito sawa na £500,000) anapaswa kuonyesha hoja ya ugawaji waziwazi katika waraka wake wa bodi, si kuiacha ikisiwe.

## Uhusiano na uhandisi wa programu

Uzito wa ugawaji mara chache huonekana moja kwa moja katika vipimo vya utoaji wa programu, lakini unapaswa kuunda jinsi timu za uhandisi na data zinavyosanifu kipimo na ulengaji:

- Unapojenga dashibodi ya athari au kikokotoo cha manufaa, onyesha wasifu wa kipato au ukosefu wa walioathiriwa, si jumla ya manufaa tu — takwimu za jumla bila mgawanyo wa ugawaji huficha hasa mgeuko ulioonyeshwa hapo juu.
- Unganisha mantiki ya ulengaji katika usanifu wa huduma na data ileile ya ukosefu ambayo Green Book hutumia — tazama [kielezo cha ukosefu wa vipengele vingi (IMD)](../kielezo-cha-ukosefu-wa-vipengele-vingi/) — ili ufikiaji wa huduma ya kidijitali utathminiwe kwa usawa, si ufanisi tu (E ya nne yenye utata katika [thamani ya fedha (VFM)](../thamani-ya-fedha/)).
- Algoriti inapogawa rasilimali adimu (nafasi za miadi, muda wa mfanyakazi wa kesi, ruzuku ya bei), kazi ya lengo isiyopimwa uzito ya "ongeza manufaa ya jumla" itaiga, kwa ujenzi, upendeleo uleule ambao uzito wa Green Book upo kuurekebisha — wajulishe wamiliki wa sera hili waziwazi kabla ya kuboresha.

## Mitego

- **Kutumia uzito wa ugawaji bila uthabiti katika jalada.** Kupima uzito manufaa ya programu moja lakini si ya mlinganishwa wake hutoa ulinganisho wenye upendeleo, si wa haki zaidi; Green Book inahitaji kutendewa sawa sawa.
- **Kutumia thamani za mali au soko kama kielelezo mbadala cha ustawi bila marekebisho.** Bei za soko zenyewe zimepotoshwa na ukosefu wa usawa wa kipato uliopo, ambao ndio uzito wa ugawaji unakusudiwa kurekebisha — kutumia thamani za soko zisizorekebishwa kunaweza kuhesabu upendeleo mara mbili.
- **Kupuuza tofauti ndani ya kundi.** Kupima uzito kwa wastani wa kipato cha eneo (mf. desili ya Index of Multiple Deprivation) kunaweza kuwakilisha vibaya watu binafsi wasiolingana na wastani wa eneo lao; tumia data ya kipato ya kina zaidi inayopatikana kwa kuridhisha.
- **Kuchukulia unyumbufu wa 1.3 kama kigeugeu cha ulimwengu mzima.** Green Book yenyewe inabainisha kuwa huu ni kadirio lenye wigo unaokubalika; jaribu unyeti wa maamuzi makubwa dhidi ya unyumbufu mbadala badala ya kuchukulia 1.3 kuwa sahihi.

## Vyanzo

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
