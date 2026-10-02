# Rapportering av bidragsutfall (IRIS+)

Rapportering av bidragsutfall är praxisen att bidragsmottagare rapporterar standardiserade, jämförbara utfallsmått tillbaka till finansiärer — i motsats till att varje finansiär uppfinner sin egen skräddarsydda rapporteringsmall. IRIS+, upprätthållen av Global Impact Investing Network (GIIN), är den mest allmänt antagna sådana standarden: en katalog av fördefinierade sociala, miljömässiga och finansiella prestationsmått som effektinvesterare och, alltmer, bidragsgivande stiftelser kräver eller rekommenderar att bidragsmottagare använder.

## Varför det spelar roll

Innan standardiserad rapportering bad varje stiftelse bidragsmottagare om en annan uppsättning indikatorer i ett annat format, och en medelstor ideell organisation med tio finansiärer kunde köra tio parallella rapporteringsprocesser för överlappande arbete — en väldokumenterad drivkraft för den rapporteringsbörda standardisering av bidragsutfall existerar för att minska. IRIS+ adresserar detta genom att ge finansiärer och bidragsmottagare ett delat vokabulär: kärnmättuppsättningar grupperade efter tema (t.ex. prisvärt boende, ren energitillgång, finansiell inkludering), varje mått definierat tillräckligt precist att "skapade jobb" eller "betjänade hushåll" betyder samma sak oavsett vem som rapporterar det, och anpassat till FN:s globala mål för hållbar utveckling så att en finansiär kan rulla upp bidragsmottagarnivådata till en portföljnivå-SDG-berättelse. GIIN rapporterar att IRIS-mått används av ungefär hälften av effektinvesterare och den stora majoriteten av fondförvaltare, banker och utvecklingsfinansinstitut som är aktiva inom fältet.

Standardiseringen spelar mest roll där den samverkar med [utfall kontra output](../outcomes-vs-outputs/): IRIS+ driver rapportering mot definierade utfalls- och effektmått snarare än vad ett bidragsmottagares befintliga ärendehanteringssystem råkar logga, vilket är exakt den lucka [kostnad per utfall](../cost-per-outcome/) kontra [kostnad per förmånstagare](../cost-per-beneficiary/) beskriver.

## Beräkningen

Rapportering av bidragsutfall är ett ramverk och en process, inte en formel:

```
1. Finansiären väljer en kärnmättuppsättning relevant för
   bidragets tema （t.ex. IRIS+ "Financial Inclusion" eller
   "Sustainable Agriculture"）
2. Varje mått har en fast definition, enhet och
   beräkningsmetod publicerad av GIIN — inte uppfunnen per
   finansiär
3. Bidragsmottagaren rapporterar mot samma måttdefinitioner
   över alla sina finansiärer som använder standarden, vilket
   minskar dubblerat rapporteringsarbete
4. Finansiären aggregerar bidragsmottagarnivåns mått till
   portföljnivårapportering, jämförbar år över år och över
   bidragsmottagare med samma mått
```

Effektivitetsvinsten är kombinatorisk: att standardisera N finansiärer × M bidragsmottagare till ett delat vokabulär förvandlar N×M skräddarsydda rapporteringsrelationer till ungefär N+M mappningar mot en standard.

## Genomräknat exempel

**En bidragsmottagare med tre finansiärer, före standardisering**: rapporterar "betjänade personer" till Finansiär 1 med en huvudräkningsdefinition, "nådda förmånstagare" till Finansiär 2 med en hushållsdefinition, och "påverkade individer" till Finansiär 3 med en tjänsteepisoddefinition (så en person som besöker två gånger räknas två gånger). Tre rapporter, tre tal, inga jämförbara, och inga jämförbara med en annan bidragsmottagares tal ens inom samma finansiärs portfölj.

**Samma bidragsmottagare under IRIS+**: rapporterar mot ett definierat IRIS+-mått för nådda individer tillsammans med ett definierat utfallsmått från den relevanta kärnmättuppsättningen, med GIIN:s publicerade beräkningsmetodik för båda. Alla tre finansiärer får nu samma tal, beräknat på samma sätt, och kan jämföra denna bidragsmottagares kostnad per IRIS+-definierad enhet mot andra bidragsmottagare i sin portfölj med det identiska måttet — motsvarigheten, i rapporteringsinfrastrukturskala, till att ha en delad [databas för enhetskostnader](../unit-cost-databases/).

## Koppling till mjukvaruutveckling

Bidragshanteringsplattformar bör behandla IRIS+-måttidentifierare som en främmande nyckel, inte fritext: att lagra den publicerade mättkoden tillsammans med en bidragsmottagares rapporterade värde (snarare än ett lokalt uppfunnet fält kallat "förmånstagare") är det som gör aggregering över finansiärer och portföljer senare möjlig utan ett dataputsningsprojekt. Där en plattform måste stödja finansiärer som inte antagit IRIS+, är den pragmatiska designen att låta ett lokalt mått mappas till den närmaste IRIS+-definitionen istället för att tvinga varje finansiär till standarden omedelbart — jämförbarheten förbättras stegvis när mer av grafen mappas till delade identifierare. Se systeräment [kostnad per utfall](../cost-per-outcome/) för vad de rapporterade talen bör användas för att beräkna när de väl samlats in.

## Fallgropar

- **Att behandla IRIS+-antagande som automatisk jämförbarhet.** Två bidragsmottagare kan båda rapportera mot samma IRIS+-mått och ändå inte vara jämförbara om deras underliggande datakvalitet eller kontrafaktiska antaganden skiljer sig; standarden fastställer definitioner, inte mätstringens.
- **Finansiärsuppfunna "IRIS-anpassade" mått.** Ett mått som bara är inspirerat av IRIS+-språk men inte den faktiska publicerade definitionen återinför den fragmentering standarden existerar för att lösa.
- **Rapporteringströtthet från översel.** Att kräva att en bidragsmottagare rapporterar mot en hel kärnmättuppsättning när bara två eller tre mått är beslutsrelevanta återskapar bördeproblemet i ett standardiserat omslag.
- **Inget utfallsmått alls.** IRIS+ inkluderar många rena resultatmått (t.ex. antal personer betjänade); att bara välja dessa, och inga av utfallsnivåmåtten, producerar rapportering formad som [kostnad per förmånstagare](../cost-per-beneficiary/) under en utfallsrapporteringsetikett.

## Källor

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
