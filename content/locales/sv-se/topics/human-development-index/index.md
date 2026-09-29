# Human Development Index (HDI)

HDI är FN:s ledande alternativ till att rangordna länder enbart efter inkomst: det kombinerar förväntad livslängd, utbildning och inkomst till ett enda tal mellan 0 och 1, på premissen — argumenterad av ekonomen Amartya Sen och utvecklad för FN av Mahbub ul Haq — att utveckling handlar om att utvidga vad människor kan göra och vara, inte bara vad de tjänar. Det har publicerats årligen i FN:s utvecklingsprograms Human Development Report sedan 1990.

## Varför det spelar roll

Innan HDI mättes "utveckling" nästan uteslutande genom BNP per capita, vilket inte säger något om huruvida tillväxt når vanliga människors hälsa eller utbildning. Sens förmågeansats ramade om utveckling som utvidgningen av verkliga friheter, och ul Haq omvandlade det till ett publicerbart index UNDP kunde rangordna varje land efter, vilket tvingade regeringar som blev rika enbart på inkomst men försummade hälsa eller skolgång att konfrontera en sämre ranking än vad deras BNP antydde (Gulfstaternas oljestater och vissa utvinningsekonomier är standardexemplen). HDI:s trevägsstruktur är också den direkta metodologiska förfadern till [Multidimensional Poverty Index](../multidimensional-poverty-index/): båda vägrar låta en dimension köpa tillbaka ett underskott i en annan, med ett geometriskt snarare än aritmetiskt medelvärde. UNDP publicerar fullständiga tekniska anmärkningar och den underliggande datan för varje utgåva (<https://hdr.undp.org/data-center/human-development-index>), vilket är den kanoniska källan för alla som bygger vidare på indexet snarare än att härleda det på nytt.

## Beräkningen

```
Förväntad livslängd-index （LEI）  = (FL − 20) / (85 − 20)

Genomsnittligt skolgångsårsindex  = genomsnittliga
                                    skolgångsår / 15
Förväntat skolgångsårsindex       = förväntade skolgångsår / 18
Utbildningsindex （EI）            = (Genomsnittligt årsindex +
                                    Förväntat årsindex) / 2

Inkomstindex （II）                 = (ln(BNI per capita) −
                                    ln(100)) / (ln(75000) −
                                    ln(100))

HDI = (LEI × EI × II) ^ (1/3)     ［geometriskt medelvärde av
                                    de tre delindexen］
```

Det geometriska medelvärdet är medvetet: eftersom det multiplicerar snarare än medelvärdesbildar kan en mycket hög poäng i en dimension inte helt kompensera för en mycket låg poäng i en annan — en design UNDP antog 2010 specifikt för att straffa obalans, och ersatte den tidigare aritmetiska medelvärdesformeln.

## Genomräknat exempel

**Medelinkomstland**: förväntad livslängd 72 år, genomsnittliga skolgångsår 8, förväntade skolgångsår 13, BNI per capita 12 000 dollar.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
GSÅI = 8 / 15                                        = 0,533
FSÅI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

Ett HDI på 0,713 faller inom UNDP:s band "hög mänsklig utveckling" (0,700–0,799); "mycket hög" börjar vid 0,800. Notera hur känsligt resultatet är för det svagaste delindexet: om genomsnittliga skolgångsår vore 4 istället för 8 (GSÅI = 0,267, EI = 0,494), faller HDI till (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — en hel bandnivå ner — även om ingenting annat förändrats.

## Koppling till mjukvaruutveckling

- Det geometriska medelvärdesmönstret är direkt återanvändbart för alla sammansatta tjänste- eller produktpoäng du inte vill ska låta en stark dimension täcka över en kritiskt svag sådan — t.ex. att kombinera tillgänglighets-, prestanda- och tillförlitlighetspoäng för en offentlig digital tjänst multiplikativt snarare än genom ett viktat medelvärde, så att en tjänst som är snabb men otillgänglig inte kan poängsätta "bra".
- HDI:s logaritmiska transformation av inkomst (avtagande marginalvärde av en extra pund) är samma logik bakom [fördelningsviktning](../distributional-weighting/) i bedömning: en extra 1 000 dollar betyder mycket mer för ett fattigt hushåll än ett rikt, och att behandla båda linjärt felprissätter påverkan.
- Alla instrumentpaneler som rapporterar en enda blandad "digital inkludering"- eller "medborgarutfall"-poäng bör dokumentera sin aggregeringsformel lika explicit som UNDP:s tekniska anmärkningar gör — se [nyckeltal för offentlig sektor](../public-sector-kpis/) och [instrumentpanel för offentligt värde](../public-value-scorecard/).

## Fallgropar

- **Att medelvärdesbilda istället för att använda det geometriska medelvärdet** — ett aritmetiskt medelvärde låter hög inkomst helt maskera dålig hälsa eller utbildning; hela poängen med 2010 års metodologiändring var att stoppa den substitutionen.
- **Att jämföra HDI år för år som om det vore inflationsjusterad BNP** — UNDP omjusterar periodiskt indexets basvärde (nya minimi-/maximigränser, reviderade skolgångstak), så en rankningsförändring kan spegla en metodologiuppdatering, inte ett verkligt skifte; kontrollera alltid vilken HDR-utgåva en siffra kommer från.
- **Att behandla HDI som ett fattigdomsmått** — det är ett nationellt genomsnitt och säger inget om fördelning inom ett land; för det, använd [Multidimensional Poverty Index](../multidimensional-poverty-index/) eller UNDP:s separata ojämlikhetsjusterade HDI.

## Källor

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
