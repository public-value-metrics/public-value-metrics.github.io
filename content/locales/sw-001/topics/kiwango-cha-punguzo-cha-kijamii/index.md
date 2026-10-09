# Kiwango cha Punguzo cha Kijamii

Kiwango cha punguzo cha kijamii hubadilisha gharama na manufaa ya baadaye kuwa thamani za leo ili programu zenye faida zilizoenea katika miongo ziweze kulinganishwa kwa msingi wa pamoja. Green Book ya HM Treasury inaagiza ratiba inayopungua iliyotia nanga kwa 3.5% kwa miaka 30 ya kwanza, kulingana na fomula ya Ramsey — namba mahususi, inayoweza kutajwa ambayo imekuwa hoja hai ya kisiasa na kimaadili kila wakati inapotumika kwa ahadi za upeo mrefu kama sera ya tabianchi au miundombinu.

## Kwa nini ni muhimu

Pauni ya manufaa inayopokelewa baada ya miaka 30 haina thamani ya pauni ya manufaa inayopokelewa leo, kwa sababu zinazohusu kwa sehemu upendeleo safi wa wakati (watu na jamii hupendelea mema mapema) na kwa sehemu ukuaji (jamii ya baadaye inatarajiwa kuwa tajiri zaidi, hivyo pauni inajalisha kidogo kwake kwenye pembeni). Annex 6 ya Green Book hutoa kiwango sanifu cha punguzo cha Uingereza kutoka fomula ya Ramsey, ikichanganya kiwango cha upendeleo safi wa wakati na kiwango kinachotarajiwa cha ukuaji wa matumizi na unyumbufu wa utumiaji wa pembeni wa matumizi, ikizalisha kiwango kilichochapishwa cha 3.5% kwa mwaka kwa miaka 0–30, kikipungua katika ratiba iliyochapishwa kwa mwaka wa 31 na kuendelea (hadi 1% kwa miaka 301+). Ratiba hii ipo hasa kwa sababu 3.5% thabiti iliyojumlishwa katika karne ingefanya karibu kila manufaa ya upeo mrefu — ulinzi wa mafuriko unaookoa maisha baada ya miaka 80, upunguzaji wa kaboni unaoepusha madhara baada ya miaka 100 — uonekane duni kwa masharti ya thamani ya sasa, jambo ambalo Treasury ilihukumu kuwa hitimisho lisilokubalika kimaadili kwa miundombinu na maamuzi ya mazingira yenye maisha marefu kweli.

Kiwango cha punguzo kina utata hasa kwa sababu uchaguzi si kigezo cha kiufundi kisichoegemea upande wowote: kinaweka hukumu kuhusu kiasi gani jamii inapaswa kujitolea leo kwa watu ambao hawajazaliwa. Stern Review on the Economics of Climate Change (2006) ilitumia kiwango cha punguzo karibu na sifuri (upendeleo safi wa wakati karibu 0.1%), ikihoji kwamba kupunguza thamani ya ustawi wa vizazi vijavyo kwa chochote karibu na viwango vya soko hakutetewi kimaadili pale madhara (mabadiliko makubwa ya tabianchi) yasiporejeshwa. Wakosoaji — hasa William Nordhaus — walihoji kwamba kiwango cha karibu na sifuri cha Stern kilikuza hoja ya matumizi ya haraka ya tabianchi kwa kufanya karibu gharama yoyote ya sasa ionekane inahalalishwa dhidi ya manufaa ya baadaye yaliyopunguzwa thamani kidogo sana. Mgogoro haukuwa kuhusu hisabati; ulikuwa kuhusu mfumo wa kimaadili wa nani unapaswa kuweka kiwango, na unabaki kuwa mfano sanifu wa kwa nini kiwango cha punguzo ni chaguo la sera, si pembejeo ya kitakwimu tu.

## Hisabati

Fomula ya Ramsey inayotegemeza kiwango cha Green Book:

```
r = ρ + η·g

ambapo:
  r = kiwango cha punguzo cha kijamii
  ρ = kiwango cha upendeleo safi wa wakati (kukosa subira + hatari ya maafa)
  η = unyumbufu wa utumiaji wa pembeni wa matumizi
  g = kiwango kinachotarajiwa cha ukuaji wa kila mwaka wa matumizi kwa kila mtu
```

Ratiba inayopungua ya Green Book (Annex 6, ya mfano — angalia toleo la sasa kwa jedwali kamili lililochapishwa):

```
Miaka 0–30:    3.5%
Miaka 31–75:   3.0%
Miaka 76–125:  2.5%
Miaka 126–200: 2.0%
Miaka 201–300: 1.5%
Miaka 301+:    1.0%
```

Thamani ya sasa ya jumla ya baadaye:

```
PV = FV / (1 + r)^t
```

## Mfano uliokokotolewa

**Mradi wa ulinzi wa mafuriko**: mradi unatoa £milioni 10 za uharibifu wa mafuriko uliozuiwa katika mwaka wa 40.

Kwa kutumia kiwango thabiti cha 3.5%: PV = 10,000,000 / (1.035)^40 ≈ £milioni 2.52 — manufaa yanaonekana madogo.

Kwa kutumia ratiba inayopungua ya Green Book (3.5% kwa miaka 0–30, 3.0% baada ya hapo), hesabu inajumlika kwa 3.5% kwa miaka 30 ya kwanza na 3.0% kwa miaka 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £milioni 2.65
```

Ratiba inayopungua huongeza kidogo thamani ya sasa ya manufaa ya upeo mrefu ikilinganishwa na kiwango thabiti cha juu — kusudi lililotajwa wazi la ratiba, kwa kuwa 3.5% thabiti kwa karne ingepunguza manufaa ya £milioni 100 katika mwaka wa 100 hadi chini ya £milioni 3.3.

**Miundombinu ya kidijitali**: uhamishaji wa wingu wa serikali unaogharimu £milioni 4 sasa unatarajiwa kuepusha £500,000/mwaka katika gharama za matengenezo ya mfumo wa zamani kwa miaka 15. Kwa 3.5%, thamani ya sasa ya annuiti hiyo ni takriban £500,000 × 11.52 (kigezo cha annuiti cha miaka 15 kwa 3.5%) ≈ £milioni 5.76 — ikizidi kwa uhakika gharama ya £milioni 4, kesi chanya ya thamani halisi ya sasa ambayo ingeonekana dhaifu zaidi kwa kiwango cha juu kilichochaguliwa kijinga (kwa 7%, kigezo kilekile cha annuiti kinashuka hadi karibu 9.11, kikitoa £milioni 4.56, bado chanya lakini kwa pembezoni nyembamba zaidi).

## Uhusiano na uhandisi wa programu

Hoja nyingi za biashara za programu huendeshwa kwa miaka 3–5, ndani kabisa ya bendi thabiti ya 3.5%, kwa hivyo ratiba inayopungua mara chache huuma moja kwa moja — lakini nidhamu ya msingi ni muhimu kwa uwekezaji wowote wa teknolojia ya serikali wenye maisha marefu ya mali (jukwaa la kitaifa, programu ya miundombinu ya data, mkataba wa miongo mingi):

- Tumia kiwango kilichochapishwa cha Green Book badala ya "kiwango cha kizingiti" cha ndani kilichokopwa kutoka fedha binafsi; wakaguzi na watathmini wa Treasury watatarajia ratiba sanifu.
- Kwa manufaa yanayopatikana miaka mingi mbele (akiba ya matengenezo ya muda mrefu ya jukwaa, thamani inayokua ya mfumo ikolojia wa data huria — tazama [thamani ya data huria](../thamani-ya-data-huria/)), uchaguzi wa upunguzaji wa thamani unaweza kugeuza hoja ya biashara kutoka chanya hadi hasi; fanya kiwango na upeo kuwa dhana wazi, si chaguo-msingi zilizozikwa.
- Hili linalisha moja kwa moja [tathmini ya Green Book (Mfano wa Kesi Tano)](../tathmini-ya-green-book/), mfano wa kesi tano unaohitaji rasmi mtiririko wa fedha uliopunguzwa thamani, na [kukadiria thamani ya ustawi (WELLBY)](../kukadiria-thamani-ya-ustawi/), ambapo swali lilelile la upunguzaji wa thamani linaibuka kwa manufaa ya ustawi yasiyo ya kifedha.
- Tazama pia [usawa wa vizazi na upunguzaji wa thamani kwa uendelevu](../usawa-wa-vizazi-na-upunguzaji-wa-thamani-kwa-uendelevu/) kwa mjadala wa Stern dhidi ya Nordhaus ukitumika mahususi kwa uwekezaji wa teknolojia ya mazingira na tabianchi.

## Mitego

- **Kutumia kiwango thabiti kwa upeo mrefu sana.** Ratiba inayopungua ya Green Book ipo hasa kwa sababu kiwango thabiti hudharau manufaa yenye maisha marefu kweli; angalia bendi ipi inatumika badala ya kuchagua 3.5% kwa chaguo-msingi kwa muda wote.
- **Kuchukulia kiwango cha punguzo kama kisicho na upande wowote kimaadili.** Mgogoro wa Stern-Nordhaus unaonyesha kiwango kinaweka hukumu ya thamani kuhusu vizazi vijavyo; kukibadilisha hubadilisha programu zipi zinaonekana zimehalalishwa, hivyo kinapaswa kutajwa na kutetewa, si kufichwa kwenye chaguo-msingi la lahajedwali.
- **Kuchanganya kiwango cha punguzo cha kijamii na gharama ya mtaji ya binafsi.** Gharama za kukopa za serikali na viwango vya kizingiti vya sekta binafsi ni dhana tofauti na kiwango cha kijamii kilichotokana na Ramsey, na kubadilisha kimoja kwa kingine katika tathmini ya umma kwa kawaida kutapotosha matokeo kuelekea kupendelea faida za muda mfupi.
- **Kupunguza thamani ya mtiririko halisi na wa kinominali bila uthabiti.** Kiwango cha Green Book ni kiwango halisi (kilichorekebishwa kwa mfumuko wa bei); kupunguza thamani ya mtiririko wa fedha wa kinominali kwa hicho hudharau kwa kiasi kikubwa thamani za sasa.

## Vyanzo

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
