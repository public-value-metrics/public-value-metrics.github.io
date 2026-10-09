# Gharama Kamili ya Umiliki (TCO) katika TEHAMA ya Serikali

Gharama kamili ya umiliki (total cost of ownership) ni gharama kamili ya mzunguko wa maisha wa mfumo — upatikanaji pamoja na kila mwaka wa kuuendesha — iliyopunguzwa thamani hadi tarehe ya pamoja. Katika TEHAMA ya serikali, kosa la utabiri linaloaminika zaidi ni kulinganisha wauzaji au machaguo kwa bei ya upatikanaji peke yake, wakati uendeshaji na matengenezo kwa kawaida huchukua kati ya nusu na nne-tano za bili ya maisha yote.

## Kwa nini ni muhimu

Green Book ya HM Treasury inahitaji kesi ya kifedha katika hoja yoyote ya biashara ya Mfano wa Kesi Tano kujumuisha gharama za maisha yote, si matumizi ya mtaji tu — hata hivyo National Audit Office imepata mara kwa mara idara zikiidhinisha uwekezaji wa TEHAMA dhidi ya utabiri usio kamili au wa matumaini wa gharama za uendeshaji, na kisha kugundua gharama halisi ya uendeshaji mfumo ukishaanza kutumika na mstari wa bajeti ya mtaji ukishafungwa. Technology Code of Practice ya Government Digital Service na Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) huzisukuma idara kuelekea wingu na upangishaji wa kawaida kwa sehemu kwa sababu inafanya gharama inayoendelea ionekane na ilinganishwe, badala ya kuzikwa ndani ya kielelezo kimoja cha manunuzi ya mtaji kinachoonekana cha chini kwa kuvutia wakati wa idhini na kibaya kwa gharama miaka mitatu baadaye.

## Hisabati

```
TCO = Gharama ya upatikanaji + Σ(t=1..N) Gharama ya uendeshaji ya mwaka_t / (1+r)^t
      − thamani ya mabaki (iliyopunguzwa)

r = kiwango sanifu cha punguzo cha kijamii cha Green Book cha HM Treasury, 3.5%/mwaka
    (ratiba ya kiwango kinachopungua kwa upeo zaidi ya miaka 30)

Vipengele vya gharama ya uendeshaji: upangishaji/leseni, msaada na matengenezo,
viraka vya usalama na kufuata sheria, muda wa wafanyakazi, kusasisha/kuhamisha kulikopangwa
```

Tazama [kiwango cha punguzo cha kijamii](../kiwango-cha-punguzo-cha-kijamii/) kwa kwa nini kigezo cha punguzo ni muhimu katika maisha ya kawaida ya mfumo ya miaka 5–10, na [kujenga au kununua serikalini](../kujenga-au-kununua-serikalini/) kwa jinsi TCO inavyolisha uamuzi wa kujenga/kununua.

## Mfano uliokokotolewa

Idara inalinganisha mifumo miwili ya usimamizi wa kesi katika upeo wa miaka 5 kwa kiwango cha punguzo cha Green Book cha 3.5%.

```
Mfumo A: mtaji £3,500,000, uendeshaji £250,000/mwaka
Mfumo B: mtaji £1,800,000 (unaonekana nafuu), uendeshaji £650,000/mwaka
         (msaada mzito zaidi wa muuzaji na mzigo wa uunganishaji)

Ulinganisho wa kijinga kwa mtaji pekee: B inashinda, £milioni 1.8 < £milioni 3.5.

Jumla ya vigezo vya punguzo, miaka 5 kwa 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

TCO inageuza uamuzi wa kijinga: Mfumo B ni ghali kidogo zaidi katika miaka mitano gharama ya uendeshaji inapopunguzwa thamani na kujumlishwa, kwa sababu sehemu ya uendeshaji wake ya gharama ya maisha ni 62% (2,934,750 / 4,734,750) dhidi ya 24% ya Mfumo A — mfano madhubuti wa matokeo ya "matengenezo ni wingi wa bili", yaliyofichwa kabisa kwa kulinganisha bei za lebo.

## Uhusiano na uhandisi wa programu

TCO ndiyo namba inayopaswa kuipa nidhamu kila uamuzi wa [kujenga au kununua](../kujenga-au-kununua-serikalini/) na kila kesi ya kulipa [deni la kiufundi](../deni-la-kiufundi-kama-mmomonyoko-wa-thamani-ya-umma/), kwa sababu riba ya deni na matengenezo yaliyoahirishwa yote ni mistari ya gharama ya uendeshaji inayostahili jumla ileile iliyopunguzwa thamani, iwe kuna aliyeifuatilia au la. Wahandisi wanaopendekeza uchaguzi wa jukwaa au muuzaji wanapaswa kuwasilisha jedwali kamili la TCO, si bei ya manunuzi, kwa sababu bei ya manunuzi ndiyo namba hasa ambayo kesi ya kifedha ya Green Book ilisanifiwa kuzuia idara kuitegemea peke yake. TCO pia ndiyo kigawanyo cha uaminifu kwa hukumu za [thamani ya fedha (VFM)](../thamani-ya-fedha/) — VFM hulinganisha manufaa na gharama, na mstari wa gharama uliohesabiwa pungufu hukuza kila uwiano wa VFM katika hoja ya biashara.

## Mitego

- **Ulinganisho wa mtaji pekee**: kosa la kawaida zaidi la manunuzi — kulinganisha bei za orodha za wauzaji bila utabiri unaolingana wa gharama ya uendeshaji kwa kila chaguo.
- **Kutenga gharama za kutoka na uhamishaji**: uchimbaji wa data mwishoni mwa mkataba, kuhamisha jukwaa, na adhabu za kufungwa na muuzaji ni mistari halisi ya TCO ambayo mara chache huonekana kwenye hoja ya awali ya biashara.
- **Kutenga gharama za usalama na kufuata sheria**: mzunguko wa viraka, usasishaji wa uidhinishaji, na gharama ya ukaguzi hupanda na umri na ugumu wa mfumo — tazama [thamani ya usalama wa mtandao katika sekta ya umma](../thamani-ya-usalama-wa-mtandao-katika-sekta-ya-umma/) — na mara kwa mara huachwa nje ya utabiri wa uendeshaji.
- **Ulinganisho usiopunguzwa thamani kati ya machaguo yenye wasifu tofauti wa gharama**: kulinganisha chaguo lenye mtaji mwingi na lenye uendeshaji mwingi bila kupunguza thamani hupendelea kwa utaratibu chaguo linalochelewesha gharama zaidi hadi miaka ya baadaye.

## Vyanzo

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
