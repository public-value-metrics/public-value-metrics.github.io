# Vipimo vya DORA kwa Thamani ya Umma

Vipimo vya DORA (DevOps Research and Assessment) — mzunguko wa usambazaji, muda wa kuongoza wa mabadiliko, kiwango cha kushindwa kwa mabadiliko, na muda wa kurejesha huduma, pamoja na uaminifu kama cha tano — ni vigezo vya utendaji wa utoaji vilivyothibitishwa zaidi katika tasnia ya programu. Vikitafsiriwa katika masharti ya uwajibikaji wa sekta ya umma, kila kimoja ni kielelezo mbadala cha moja kwa moja cha jinsi thamani ya umma inavyomfikia mwananchi kwa kasi, na kwa usalama gani.

## Kwa nini ni muhimu

Utafiti wa muongo mmoja wa DORA, unaochapishwa kila mwaka kama *Accelerate State of DevOps Report* (mbinu ya Forsgren, Humble na Kim, sasa inaendeshwa na Google Cloud), huweka timu katika makundi ya utendaji wa juu kabisa, wa juu, wa kati na wa chini. Timu za juu kabisa husambaza inapohitajika, huchukua chini ya siku moja kutoka commit hadi uzalishaji, hushindwa kwa takriban 5% ya mabadiliko, na hupona ndani ya saa moja; timu za chini husambaza kila mwezi au mara chache zaidi, huchukua miezi, hushindwa kwa takriban 40% ya mabadiliko, na hupona kwa wiki. Serikalini hivi si vipimo vya majivuno ya uhandisi: Service Standard ya Government Digital Service inazitaka timu "kurudia na kuboresha mara kwa mara" na kuweza kujibu haraka mahitaji ya mtumiaji, na idara zisizoweza kusambaza kwa usalama na mara kwa mara kimuundo haziwezi kutimiza kiwango hicho, bila kujali utafiti wa watumiaji wake unasema nini. Kazi ya ufanisi wa kidijitali ya Cabinet Office yenyewe ilipata kuwa kumsukuma mwananchi kutoka muamala wa kidijitali ulioshindwa au wa polepole hadi njia ya simu au karatasi ni ghali — Digital Efficiency Report ya GDS ya 2012 ilikadiria baadhi ya miamala ya kidijitali kugharimu hadi pensi 20 dhidi ya mawasiliano ya simu au ana kwa ana yanayogharimu hadi £8.62 — kwa hivyo kushindwa kwa mabadiliko katika huduma inayowakabili umma hakugharimu muda wa uhandisi tu, bali husukuma pauni halisi kwenye bajeti ya kituo cha mawasiliano (tazama [akiba ya kuhamisha njia za huduma](../akiba-ya-kuhamisha-njia-za-huduma/)).

## Hisabati

```
Mzunguko wa usambazaji   = usambazaji wa uzalishaji / muda
Muda wa kuongoza wa mabadiliko = t(usambazaji) − t(commit), wastani wa kati
Kiwango cha kushindwa kwa mabadiliko = mabadiliko yaliyoshindwa / jumla ya mabadiliko × 100
Muda wa kurejesha (MTTR) = t(imerejeshwa) − t(kushindwa), wastani wa kati
Uaminifu                 = kufikiwa kwa SLO (upatikanaji, ucheleweshaji, usahihi)
```

Tafsiri za thamani ya umma:

```
Muda wa kuongoza → wiki katika mfereji × CoD, tazama cost-of-delay-in-public-programmes
Kiwango cha kushindwa → kiwango cha matukio yanayomkabili mwananchi: CFR × gharama kwa
                 kila simu ya kituo cha mawasiliano iliyoelekezwa upya
                 (au kwa kila muamala wa kisheria ulioshindwa)
Muda wa kurejesha → madhara ya kukatika kwa huduma: MTTR × (madai/maombi
                 yaliyozuiwa kwa saa) × gharama ya baadaye au hasara ya ustawi kwa kitengo
Uaminifu         → punguzo la manufaa: huduma yenye upatikanaji wa 99% hutoa
                 ≈ 0.99 ya manufaa yake yaliyoigwa — sawa na upungufu wa
                 matumizi au kufuata katika utoaji
```

## Mfano uliokokotolewa

Timu ya lango la madai ya manufaa ya mamlaka ya mtaa, kabla na baada ya uwekezaji katika uhandisi wa utoaji:

```
                    Kabla       Baada
Usambazaji          kila mwezi  kila wiki
Muda wa kuongoza    wiki 8      siku 5
CFR                 30%         10%
MTTR                siku 3      saa 4
```

Timu hutoa takriban maboresho 25 kwa mwaka, thamani ya wastani £8,000/wiki ([gharama ya ucheleweshaji](../gharama-ya-ucheleweshaji-katika-programu-za-umma/)). Kupunguza muda wa kuongoza kwa takriban wiki 7.3 kunavuta mbele mkondo wa manufaa wa kila uboreshaji: 25 × 7.3 × 8,000 ≈ **£1,460,000/mwaka** ya thamani inayotolewa mapema. Kuhusu kiwango cha kushindwa: 25 × (0.30 − 0.10) = mabadiliko 5 pungufu yaliyoshindwa kwa mwaka; kila badiliko lililoshindwa kwenye lango la umma kwa kawaida huelekeza upya wananchi 2,000 waliokadiriwa kwenye njia ya simu kwa £8.62 dhidi ya pensi 20, gharama halisi ya takriban £8.42 × 2,000 ≈ £16,840 kwa kila tukio, kwa hivyo kuepuka matukio 5 kunaokoa ≈ **£84,200/mwaka**. Uwekezaji wa uhandisi wa utoaji unathaminiwa kwa sarafu ileile kama kesi nyingine yoyote ya thamani ya umma.

## Mfano uliokokotolewa unaendelea: uaminifu

Ikiwa lango linaendeshwa kwa upatikanaji wa 97% badala ya lengo la 99.5%, na kila pointi ya asilimia ya kutopatikana ikiigwa kama 2% ya madai yaliyopotea kwa kuachwa, huduma inatoa takriban 0.975 ya manufaa yake yaliyoigwa ya £2M/mwaka — punguzo la manufaa la £50,000/mwaka ambalo dashibodi ya muda wa kufanya kazi pekee haiibui kamwe.

## Uhusiano na uhandisi wa programu

Vipimo vya DORA ni vipimo vya kiutendaji vya huduma ya umma vikiwa vimevaa nguo tofauti: muda wa kuongoza unalingana na [viwango vya huduma na vipimo vya miamala](../viwango-vya-huduma-na-vipimo-vya-miamala/); kiwango cha kushindwa kwa mabadiliko kinalingana na viwango vya kurudia kazi na malalamiko; MTTR inalingana na muda gani huduma ya kisheria haipatikani kwa wadai. Mbinu za uboreshaji huhamia pande zote mbili kwa sababu zote ni mifumo ya foleni chini ya vikwazo vya uwajibikaji — tazama [vipimo vya mtiririko katika utoaji wa huduma za serikali](../vipimo-vya-mtiririko-katika-utoaji-wa-huduma-za-serikali/) kwa hisabati ya msingi ya foleni. Zingatia pia matokeo ya DORA ya 2025 kwamba upitishaji wa AI unahusiana na upitishaji wa juu lakini uthabiti *mbaya zaidi* — uingiliaji wenye ufanisi na madhara ya pembeni, ambao ndio hasa uchambuzi wa manufaa halisi ambao mada ya [tija ya AI katika sekta ya umma](../tija-ya-ai-katika-sekta-ya-umma/) ya kundi hili inaufanyia kazi.

## Mitego

- **Kuchezea vipimo**: kukuza hesabu za usambazaji kwa matoleo yasiyo na kitu, au kutenga marekebisho ya haraka kutoka hesabu ya kushindwa kwa mabadiliko. Bainisha matukio kwa usahihi kama kiwango cha huduma ya kisheria kinavyobainisha "muamala uliofanikiwa".
- **Majedwali ya ligi kati ya idara**: makundi ya DORA hulinganisha mazoea ya utoaji, si huduma zenye wasifu tofauti wa hatari; mfumo wa malipo ya kodi uliokadiriwa "juu" unaweza kuwa msimamo sahihi pale "juu kabisa" ungekuwa si wa busara kwa kuzingatia mahitaji ya uhakikisho.
- **Kuboresha kipimo kimoja peke yake**: kasi bila kiwango cha kushindwa kwa mabadiliko ni biashara ya kawaida ya upitishaji dhidi ya kutokuwa na uthabiti — ripoti vyote vinne pamoja, si kama alama moja.

## Vyanzo

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
