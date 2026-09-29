# BNP-alternativ

BNP-alternativ är mått byggda för att fånga vad bruttonationalprodukten strukturellt ignorerar: obetalt vårdarbete, miljöuttömning, inkomstfördelning, och huruvida tillväxt faktiskt förbättrar liv. De mest kända är Genuine Progress Indicator (GPI) och Bhutans Gross National Happiness (GNH) Index; argumentet för att ta dem på allvar framfördes mest inflytelserikt av Stiglitz-Sen-Fitoussi-kommissionen 2009. För ingenjörer som bygger statliga instrumentpaneler eller KPI-system är "vilket tal räknas som framsteg" ett designbeslut med verkliga konsekvenser för vad som finansieras.

## Varför det spelar roll

Simon Kuznets, som byggde de amerikanska nationalräkenskaperna på 1930-talet, varnade kongressen 1934 att "en nations välfärd knappast kan härledas från en mätning av nationalinkomsten" — ett förbehåll siffran nästan omedelbart växte ur. BNP räknar sanering av ett oljeutsläpp som tillväxt och en förälders obetalda barnomsorg som ingenting; den skiljer inte mellan utgifter som bygger varaktigt välbefinnande och utgifter som bara kompenserar redan skedd skada. Stiglitz-Sen-Fitoussi-kommissionen, sammankallad av Frankrikes president Nicolas Sarkozy och ledd av Joseph Stiglitz, Amartya Sen och Jean-Paul Fitoussi, rapporterade 2009 att statistiksystem borde skifta tonvikt "från att mäta ekonomisk produktion till att mäta människors välbefinnande," och att hållbarhet bör spåras separat från nuvarande välbefinnande snarare än vikas in i ett tal. BNP-alternativ operationaliserar den rekommendationen. GPI, utvecklat av tankesmedjan Redefining Progress på 1990-talet och byggande på William Nordhaus och James Tobins Measure of Economic Welfare från 1972, utgår från personlig konsumtion (som BNP gör) och lägger sedan till icke-marknadsförmåner BNP utelämnar (hushållsarbete, volontärarbete) samtidigt som den subtraherar defensiva och uttömningskostnader (brottslighet, förorening, pendling, resursuttag) BNP felaktigt räknar som positiva. Bhutans GNH Index, administrerat av GNH Centre Bhutan (<https://www.gnhcentre.bt/>), går ännu längre och ersätter tillväxt som landets angivna konstitutionella mål: det aggregerar 33 indikatorer över 9 domäner — psykologiskt välbefinnande, hälsa, utbildning, tidsanvändning, kulturell mångfald, styrning, samhällsvitalitet, ekologisk mångfald och levnadsstandard — till en enda tillräcklighetsbaserad poäng som används direkt för att granska statliga policyförslag.

## Beräkningen

```
GPI = personlig konsumtionsutgift
      + icke-marknadsförmåner （hushållsarbete, volontärarbete,
        högre utbildning）
      − defensiva och sociala kostnader （brottslighet,
        förorening, pendling, familjesönderfall）
      − uttömning av natur- och socialt kapital （resursuttag,
        förlust av jordbruksmark）

GNH-tillräcklighetspoäng, per domän:
  en person är "tillräcklig" i en domän när de klarar dess
  tröskel på varje indikator
  Lyckoindex = （% av befolkningen tillräcklig i ≥ 6 av 9
             domäner） + （viktat genomsnittligt underskott
             för minoriteten som "ännu inte är lycklig"）
```

## Genomräknat exempel

**Region, GPI**: personlig konsumtion är 50 miljarder dollar. Lägg till uppskattat hushålls- och volontärarbetsvärde på 12 miljarder dollar (återanskaffningskostnadslöner — se [värdet av volontärtid](../volunteer-time-value/)). Subtrahera uppskattade årliga kostnader för pendlingsträngsel (3 miljarder dollar), brottslighet (4 miljarder dollar) och långsiktig resursuttömning (6 miljarder dollar):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 （md dollar）
```

Om BNP växte från 50 till 55 miljarder dollar det året (+10%), men defensiva och uttömningskostnader växte snabbare än konsumtion, kan GPI falla även när BNP stiger — den "tröskelhypotes" GPI-forskare citerar för höginkomstekonomier sedan ungefär 1970-talet, när tillväxten fortsatte klättra medan GPI planade ut.

**Medborgare, GNH**: en respondent klarar tillräcklighetströskeln i 7 av 9 domäner (hälsa, utbildning, levnadsstandard, samhällsvitalitet, kulturell mångfald, ekologisk mångfald, tidsanvändning) men når inte upp på psykologiskt välbefinnande och styrning. Eftersom 7 ≥ 6 räknas de som "lyckliga" i huvudräkningen; indexet spårar separat djupet av deras två underskott så att ett smalt godkännande inte blir omöjligt att skilja från ett bekvämt.

## Koppling till mjukvaruutveckling

- En KPI-instrumentpanel modellerad enbart på genomströmning eller utgift (BNP-mönstret) kommer systematiskt att missa skada som orsakas i att generera den genomströmningen — supportärendevolym behandlad som "engagemang" snarare än "användarnöd" är mjukvaruleveransversionen av att räkna ett oljeutsläpp som tillväxt.
- GPI-liknande redovisning är ett användbart granskningsmönster för alla [nyckeltal för offentlig sektor](../public-sector-kpis/)-uppsättningar: för varje rubrikresultatmått, fråga vilken defensiv kostnad det tyst ådrar sig (omarbete, incidentrespons, utbrändhet) och netta bort den, på samma sätt som GPI nettar defensiva utgifter från konsumtion.
- GNH:s domäntillräcklighetsmetod — godkänn/underkänn per dimension, sedan aggregera — är strukturellt samma teknik som [multikriterieanalys](../multi-criteria-decision-analysis/) och värd att återanvända varhelst en enda skalär poäng skulle dölja en kritiskt brister dimension.

## Fallgropar

- **Att behandla GPI som ett exakt nationalräkenskap** — till skillnad från BNP har GPI ingen enda standardiserad metodik; olika studier viktar pendlingskostnader, volontärtid eller resursuttömning olika, så jämförelser av GPI mellan studier är mycket mindre tillförlitliga än jämförelser av BNP mellan länder.
- **Att importera GNH rakt av till en annan policykultur** — dess domänvikter och tillräcklighetströsklar sattes genom bhutansk konsultation; att kopiera siffran utan den underliggande konsultationsprocessen producerar ett tomt mått ingen litar på.
- **Att anta att ett BNP-alternativ ersätter kostnads-nyttoanalys** — dessa är diagnostiska, ekonomiövergripande indikatorer, inte beslutsverktyg för ett enskilt program; använd istället [samhällsekonomisk kostnads-nyttoanalys](../social-cost-benefit-analysis/) för det.

## Källor

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009)
  <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
