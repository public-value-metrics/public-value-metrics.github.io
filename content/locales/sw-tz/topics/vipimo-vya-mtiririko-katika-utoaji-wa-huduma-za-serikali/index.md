# Vipimo vya Mtiririko katika Utoaji wa Huduma za Serikali

Vipimo vya mtiririko — Sheria ya Little, vikomo vya kazi inayoendelea (WIP), na ufanisi wa mtiririko — vinaelezea jinsi kazi inavyosogea haraka kupitia mfumo wenye uwezo mdogo. Ubao wa sprint ni mfumo mmoja kama huo; foleni ya madai ya manufaa, rejista ya maombi ya mipango, au mrundikano wa kesi za viza ni hisabati ileile ikiwa imevaa sare tofauti.

## Kwa nini ni muhimu

Mizigo ya kesi za serikali ni mifumo ya foleni, na mifumo ya foleni hufuata sheria za foleni iwe kuna anayeipima au la. Vipindi vya kisheria vya uamuzi hufanya hili kuwa wazi: chini ya mfumo wa Town and Country Planning, maombi mengi madogo ya mipango yana lengo la kisheria la uamuzi la wiki 8 na maombi makubwa wiki 13 — ahadi ya muda wa mzunguko iliyoandikwa moja kwa moja kwenye sheria. Mrundikano wa kesi za hifadhi za Home Office, uliochunguzwa mara kwa mara na National Audit Office na Home Affairs Select Committee, ni kisa kilichoandikwa vizuri cha mfumo wa umma ambapo kazi inayoendelea ilikua haraka kuliko upitishaji kwa kipindi kirefu, ikisukuma muda wa mzunguko mbali zaidi ya matarajio yoyote ya kisheria au ya huduma. Vipimo vya mtiririko huwapa wahandisi na mameneja wa kesi msamiati wa pamoja, wa kiidadi, kwa hasa hali hii ya kushindwa, badala ya kuiacha kama "tatizo la mrundikano" la kimaelezo.

## Hisabati

```
Sheria ya Little:  WIP = Upitishaji × Muda wa Mzunguko
               →   Muda wa Mzunguko = WIP / Upitishaji

Ufanisi wa mtiririko = muda amilifu (wa kugusa) / jumla ya muda wa mzunguko   (Vacanti)

Athari ya kikomo cha WIP: kwa upitishaji usiobadilika, kupunguza WIP nusu hupunguza
muda wa wastani wa mzunguko takriban nusu (Sheria ya Little iliyopangwa upya) —
kidhibiti kinachopatikana bila kuongeza idadi ya wafanyakazi.
```

Tazama [vipimo vya DORA kwa thamani ya umma](../vipimo-vya-dora-kwa-thamani-ya-umma/) kwa hisabati sawa inayotumika kwa mifereji ya usambazaji wa programu badala ya usimamizi wa kesi.

## Mfano uliokokotolewa

**Idara ya mipango ya mamlaka ya mtaa**: maombi 400 yako wazi wakati wowote (WIP), timu humaliza maombi 50/wiki (upitishaji).

```
Muda wa mzunguko = WIP / Upitishaji = 400 / 50 = wiki 8
```

Hilo linatua hasa kwenye lengo la kisheria la wiki 8 kwa maombi madogo — bila nafasi yoyote ya ziada, maana yake mabadiliko yoyote katika mahitaji yanayoingia au muda wa kujibu wa mshauriwa huvusha maamuzi juu ya mwisho wa kisheria.

**Ufanisi wa mtiririko**: kati ya wiki hizo 8 (siku 56 za kalenda), ombi kwa kawaida lina takriban saa 6 za usindikaji halisi wa mfanyakazi wa kesi.

```
Ufanisi wa mtiririko = saa 6 / (siku 56 × saa 8 za kazi/siku)
                     = 6 / 448 ≈ 1.3%
```

Kigezo cha Vacanti kwa timu za programu huweka ufanisi wa kawaida wa mtiririko kwa 15–20%; kazi ya kesi za serikali, ikiwa na makabidhiano mengi ya washauriwa wa kisheria na madirisha ya mashauriano ya umma, mara nyingi hukimbia chini kwa mpangilio wa ukubwa. 98.7% ya muda wa "kusubiri" ndipo wiki nane zinapoenda kweli — si katika uwezo wa mfanyakazi wa kesi.

**Uingiliaji wa kikomo cha WIP**: kuweka kikomo cha maombi wazi kwa kila mfanyakazi wa kesi kwa 15 badala ya 25 isiyo na mpaka (ukishikilia upitishaji sawa) kunahamisha WIP kutoka 400 hadi takriban 240 katika timu ya watu 16:

```
Muda mpya wa mzunguko = 240 / 50 = wiki 4.8
```

Kupungua karibu nusu ya muda wa mzunguko kutokana na badiliko la sera, si ongezeko la wafanyakazi — kidhibiti kilekile ambacho timu za utoaji za mtindo wa DORA huvuta wanapoweka kikomo cha WIP ya sprint.

## Uhusiano na uhandisi wa programu

Vipimo vya mtiririko ni lugha ya pamoja kati ya ubao wa Kanban wa timu ya utoaji na sakafu ya kesi inayojengewa programu: foleni ya mfanyakazi wa kesi na foleni ya pull-request zote zinatawaliwa na Sheria ya Little, na zote hukiuka malengo yao ya muda wa mzunguko kwa njia ileile — WIP nyingi mno kulingana na upitishaji. Hili ni muhimu moja kwa moja kwa [gharama ya ucheleweshaji katika programu za umma](../gharama-ya-ucheleweshaji-katika-programu-za-umma/): muda wa mzunguko × CoD ni pauni zilizokaa kwenye foleni wakati wowote, na kwa [viwango vya huduma na vipimo vya miamala](../viwango-vya-huduma-na-vipimo-vya-miamala/), ambapo lengo la muda wa huduma lililochapishwa ni ahadi ya muda wa mzunguko ambayo vipimo vya mtiririko pekee vinaweza kuchunguza inapokosekana. Programu ya mfumo wa kesi inapaswa kuonyesha WIP na muda wa mzunguko kama vipimo vya kiutendaji vya daraja la kwanza, si kuvizika ndani ya mfumo wa usimamizi wa kesi ambao hakuna anayeuhoji.

## Mitego

- **Kuongeza vikomo vya WIP bila kurekebisha kizuizi halisi**: ikiwa kizuizi ni muda wa kujibu wa mshauriwa wa kisheria wa nje, kuweka kikomo cha WIP ya mfanyakazi wa kesi huhamisha tu foleni juu badala ya kuifupisha.
- **Kuchukulia ufanisi wa mtiririko kama lengo la kuchezewa**: kuharakisha ile 1.3% ya muda amilifu karibu hakusogezi muda wa mzunguko; nguvu karibu daima iko katika hali za kusubiri, ambayo kwa kawaida inamaanisha usanifu upya wa mchakato, si kasi ya mfanyakazi wa kesi.
- **Kupuuza tofauti**: Sheria ya Little inaelezea wastani; mzigo wa kesi wenye utofauti mkubwa wa mahitaji unahitaji uwezo wa akiba, si kikomo kikali zaidi cha WIP tu, vinginevyo mwisho wa kisheria bado utakosekana kwenye mkia usio thabiti hata wastani unapoboreka.
- **Kupima WIP bila uthabiti**: kesi "iliyo wazi" katika mfumo wa kumbukumbu lakini kwa kweli imekwama ikisubiri mtu wa tatu bado ni WIP; kuitenga kunasifia namba bila kubadilisha hali halisi inayomkabili mwananchi.

## Vyanzo

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
