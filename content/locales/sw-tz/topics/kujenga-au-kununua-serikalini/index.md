# Kujenga au Kununua Serikalini

Kujenga-au-kununua ni ulinganisho uliopangwa, uliorekebishwa kwa hatari, wa uundaji maalum dhidi ya upatikanaji wa kibiashara au wa kawaida, unaolinganishwa kwa [gharama kamili ya umiliki](../gharama-kamili-ya-umiliki-katika-tehama-ya-serikali/) iliyopunguzwa thamani, muda hadi thamani, na hatari. Serikali kimuundo ni sekta ya ununuzi — Technology Code of Practice inaweka dhana ya kupendelea suluhisho za kawaida na za wingu — hata hivyo timu za uhandisi ndani ya idara bado huchagua kujenga kwa chaguo-msingi, kwa sababu zilezile wajenzi kila mahali huzitumia.

## Kwa nini ni muhimu

Technology Code of Practice ya Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) na mwongozo unaoambatana wa Service Manual kuhusu kuamua kujenga au kununua huzisukuma idara kuhalalisha uundaji maalum dhidi ya dhana kwamba uwezo wa kawaida unapaswa kununuliwa, si kujengwa, na kwamba ni uwezo mpya kweli unaotofautisha dhamira pekee unaostahili msimbo maalum. Mwongozo wa nyongeza wa HM Treasury kwa Green Book kuhusu upendeleo wa matumaini, uliotokana na mapitio ya Mott MacDonald ya mwaka 2002 ya manunuzi makubwa ya umma, unaipa miradi ya TEHAMA wigo mpana zaidi wa nyongeza kuliko kundi lolote lililotathminiwa — makadirio ya gharama za mtaji yanapendekezwa kuongezwa kwa 10% upande wa chini na hadi 200% upande wa juu kabla ya kutumika katika tathmini, ikionyesha jinsi ujenzi wa programu ulivyodharauliwa vibaya kihistoria katika manunuzi ya umma. Uchambuzi wa kujenga-au-kununua upo hasa kulazimisha marekebisho hayo ya hatari mezani kabla ya idhini, badala ya kuyaacha yaibuke kama ombi la matumizi ya ziada katikati ya mwaka.

## Hisabati

```
Linganisha katika upeo ule ule wa miaka 3–5, ukipunguza thamani kwa
kiwango cha punguzo cha kijamii cha Green Book (tazama social-discount-rate.md):

NPV_chaguo = PV(manufaa, yaliyohamishwa kwa muda hadi thamani) − PV(TCO)

Marekebisho ya hatari (mchoro wa upendeleo wa matumaini wa Green Book):
  gharama ya kujenga × 1.1–3.0        (wigo wa nyongeza kwa miradi ya TEHAMA, Mott MacDonald)
  muda hadi thamani wa kujenga + 40–60% (matarajio ya awali ya ucheleweshaji wa usambazaji)
  kununua: ongeza badala yake ukaguzi wa uhalisia wa uunganishaji na gharama za kutoka kwenye mkataba

Vichocheo vya uamuzi, kwa mpangilio ambao kwa kawaida huamua:
  1. utofautishaji — je, uwezo huu ni dhamira yenyewe, au mabomba tu?
  2. muda hadi thamani × gharama ya ucheleweshaji (tazama cost-of-delay-in-public-programmes.md)
  3. gharama kamili ya umiliki iliyorekebishwa kwa hatari
```

## Mfano uliokokotolewa

Mamlaka ya mtaa inahitaji mfumo wa usimamizi wa kesi kwa huduma ya kijamii ya watu wazima. Kununua: SaaS kwa £180,000/mwaka, tayari baada ya miezi 4. Kujenga: makadirio ya £900,000 pamoja na £150,000/mwaka matengenezo, tayari baada ya miezi 14.

```
Gharama ya kujenga iliyorekebishwa kwa hatari = 900,000 × 1.4 = £1,260,000
TCO ya miaka 5:
  kununua = 180,000 × 5 = £900,000
  kujenga = 1,260,000 + 150,000 × 5 = £2,010,000

Kipengele cha ucheleweshaji: mfumo huepusha £40,000/mwezi katika tathmini
zinazorudiwa; kujenga kunafika miezi 10 baadaye kuliko kununua.
CoD = 10 × 40,000 = £400,000

Ulinganisho halisi: £900,000 (kununua) dhidi ya £2,010,000 + £400,000 = £2,410,000 (kujenga)
```

Kununua kunashinda kwa takriban pauni milioni 1.5 katika miaka mitano, na mstari mmoja mkubwa zaidi baada ya makadirio ya kujenga yenyewe ni gharama ya ucheleweshaji ambayo ulinganisho wa mtaji pekee usingeibua kamwe.

## Uhusiano na uhandisi wa programu

Nidhamu zinazohamia moja kwa moja kutoka uchambuzi huu hadi mazoezi ya utoaji: **marekebisho ya hatari yanayotegemea uzoefu wa awali** — nyongeza ya Mott MacDonald ni sawa na upendeleo wa matumaini wa Green Book ukitumiwa kimitambo kwa programu, kwa hivyo timu zinapaswa kubishania vighairi badala ya kudhani makadirio yao ndiyo kighairi; **uaminifu wa kulinganisha** — mbadala wa kujenga ni chaguo bora zaidi la kununua linalopatikana, si "hakuna", jambo linalohusiana moja kwa moja na [gharama ya fursa katika matumizi ya umma](../gharama-ya-fursa-katika-matumizi-ya-umma/); na **ulinganisho mwaminifu wa TCO** — kila pendekezo la kujenga linapaswa kulinganishwa na [gharama kamili ya umiliki](../gharama-kamili-ya-umiliki-katika-tehama-ya-serikali/) ya chaguo la kununua, si bei yake ya orodha. Pale kujenga kunapoishinda kweli, [gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji-katika-programu-za-umma/) wa muda wa ziada wa ujenzi inapaswa kuwekewa bei wazi katika hoja ya biashara, si kuachwa kama dhana isiyotamkwa kwamba muda haujalishi.

## Mitego

- **Kulinganisha bei ya orodha ya muuzaji na makadirio ya kujenga yasiyorekebishwa kwa hatari**: hili hulisifia ujenzi mara mbili, mara moja kwa gharama na mara nyingine kwa ratiba.
- **Kazi ya ndani iliyowekewa bei sifuri**: muda wa wahandisi wa utumishi wa umma huchukuliwa kama "bure" kwa sababu tayari uko kwenye bajeti ya idadi ya wafanyakazi wa idara, jambo linalofichua gharama yake halisi ya fursa dhidi ya kazi nyingine ambazo timu hiyo ingeweza kufanya.
- **Kufungwa kusikowekewa bei pande zote mbili**: gharama za kutoka kwa muuzaji na uhamishaji wa data ni halisi, lakini ndivyo ilivyo hatari ya mtu mmoja kuondoka (bus factor) ya ujenzi maalum na utegemezi wake wa kubakiza timu ndogo ya ndani isiyobadilishika kwa urahisi katika maisha yake yote.
- **Utofautishaji wa dhamira unaodaiwa kwa mabomba**: "hili ni kiini chetu" likidaiwa kuhusu programu ya kati ya uunganishaji au hifadhi ya hati — lijaribu dhidi ya kama mwananchi au mfanyakazi wa kesi angewahi kuona ni ipi inayoendeshwa chini kwa chini.

## Vyanzo

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
