# Additionalitet och dödviktsförlust

Additionalitet frågar om en insats orsakade ett utfall som annars inte skulle ha inträffat. Dödviktsförlust är dess spegelbild: den andel av ett utfall som skulle ha inträffat ändå, även utan programmet, bidraget eller subventionen. Nästan alla effektpåståenden från ett statligt program eller en ideell organisation överdriver sin effekt tills dödviktsförlusten subtraherats, vilket är varför brittisk utvärderingsvägledning behandlar den som den första och viktigaste justeringen av alla rubriksiffror.

## Varför det spelar roll

"Vi hjälpte 500 företag att växa" låter som en bedrift, men om 300 av de företagen skulle ha vuxit ändå — eftersom lokalekonomin återhämtade sig, eftersom de hade andra finansieringsvägar, eftersom de redan var på en tillväxtbana innan programmet startade — är programmets verkliga tillkommande bidrag 200, inte 500. HM Treasurys Magenta Book och den långvariga "Additionality Guide" från HM Treasury/BIS (ursprungligen utvecklad för regionala utvecklings- och förnyelseprogram, och sedan dess brett använd inom brittisk statlig utvärdering) formaliserar dödviktsförlust som den inledande justeringen i standardsekvensen för nettoeffekt: bruttoeffekt minus dödviktsförlust, minus förskjutning, minus läckage, justerat för multiplikatoreffekter, ger nettotillkommande effekt. Att hoppa över detta steg är det enskilt vanligaste sättet på vilket offentliga och sociala sektorers effektpåståenden blåses upp, avsiktligt eller inte — ett bidragsprogram som endast mäter bruttodeltagarutfall, utan jämförelsegrupp, kan inte skilja sin egen effekt från vad som skulle ha hänt ändå.

Dödviktsförlust är inte en fast procentsats; den beror helt på den kontrafaktiska situationen för den specifika populationen och insatsen (se [kontrafaktisk analys](../kontrafaktisk-analys/)). Engelska regionala utvecklingsutvärderingar under de tidigare regionala utvecklingsmyndigheterna fann vanligen dödviktsförlustnivåer i intervallet 20–60% beroende på typ av företagsstöd, vilket är varför trovärdiga programutvärderingar rapporterar ett dödviktsjusterat intervall snarare än en enda antagen siffra, och varför finansiärer som National Lottery Community Fund och Big Society Capital kräver att bidragsmottagare adresserar dödviktsförlust explicit i utfallsredovisning istället för att rapportera brutto deltagarantal.

## Beräkningen

Standardsekvensen för nettoeffektjustering, enligt brittisk utvärderingsvägledning (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF och strukturfondernas utvärderingsvägledning):

```
Bruttoutfall
  − Dödviktsförlust   （vad som skulle ha hänt ändå）
  − Förskjutning      （aktivitet/nytta flyttad från annat
                       håll, inte skapad — se
                       displacement-and-attribution）
  − Läckage           （nytta som tillfaller utanför
                       målgrupp/område）
  × Multiplikator      （ytterligare indirekt/inducerad
                       ekonomisk aktivitet, om positiv）
  = Nettotillkommande effekt
```

Dödviktsförlustnivå som andel:

```
Dödviktsförlustnivå = utfall som skulle ha inträffat utan
                      insatsen / totalt observerat bruttoutfall

Nettotillkommande utfall = Bruttoutfall × (1 − Dödviktsförlustnivå)
```

## Genomräknat exempel

**Företagsstödsprogram**: ett regionalt bidragsprogram rapporterar att 500 stödda företag ökade sysselsättningen följande år, i genomsnitt 3 jobb vardera — ett bruttopåstående om 1 500 jobb.

En matchad jämförelsegrupp av liknande ostödda företag (se [kontrafaktisk analys](../kontrafaktisk-analys/)) visar att 40% av de stödda företagens sysselsättningstillväxt skulle ha inträffat ändå, baserat på hur den matchade gruppen presterade under samma period.

```
Dödviktsförlustnivå = 40%
Nettotillkommande jobb = 1 500 × (1 − 0,40) = 900 jobb
```

Programmets ärligt rapporterbara bedrift är 900 jobb, inte 1 500 — en minskning på 40% enbart från dödviktsjusteringen, innan förskjutning eller läckage ens beaktas.

**Ideell organisation för sysselsättning**: en ideell organisation placerar 200 långtidsarbetslösa i jobb till en kostnad av 600 000 £ (3 000 £ per placering, brutto). Nationell arbetsmarknadsdata visar att, utan någon insats, hittar ungefär 15% av en jämförbar långtidsarbetslös kohort arbete inom samma period genom naturlig arbetsmarknadsomsättning.

```
Dödviktsförlustnivå = 15%
Nettotillkommande placeringar = 200 × (1 − 0,15) = 170
Verklig kostnad per tillkommande placering = 600 000 £ / 170
                                            ≈ 3 529 £
```

Bruttosiffran för kostnad per placering (3 000 £) underskattar den verkliga kostnaden för organisationens tillkommande bidrag med ungefär 15%.

## Koppling till mjukvaruutveckling

Additionalitet och dödviktsförlust är direkt relevanta för alla som bygger effektmätnings- eller bidragshanteringsmjukvara för den offentliga eller sociala sektorn:

- Utfallsredovisningssystem bör fånga en jämförelse- eller baslinjegrupp genom design, inte bara deltagarutfall — att i efterhand anpassa en kontrafaktisk situation efter att ett system lanserats utan en är mycket svårare än att bygga in fångsten från början (se [kontrafaktisk analys](../kontrafaktisk-analys/)).
- Instrumentpaneler som endast rapporterar brutto deltagarantal kommer systematiskt att överdriva effekt för finansiärer och tillsynsorgan; där dödviktsuppskattningar finns (från utvärderingslitteratur eller en jämförelsegrupp) bör mjukvaran visa nettosiffran tillsammans med bruttosiffran, inte istället för den.
- Detta kopplar direkt till [social avkastning på investering](../social-avkastning-på-investering/), vars SROI-förhållande endast är trovärdigt när dödviktsförlust (och förskjutning) har subtraherats från de påstådda bruttoutfallen — en SROI-kalkylator som utelämnar detta steg kommer att producera uppblåsta förhållanden som inte håller för granskning.

## Fallgropar

- **Att rapportera bruttoutfall som om de vore helt tillkommande.** Detta är det enskilt vanligaste effektmätningsfelet i bidrags- och programredovisning; fråga alltid "skulle detta ha hänt ändå?" innan en rubriksiffra publiceras.
- **Att anta att en enda dödviktsprocentsats gäller överallt.** Dödviktsförlust varierar kraftigt beroende på sektor, population och lokala ekonomiska förhållanden; använd en jämförelsegrupp eller sektorspecifik evidens istället för att återanvända en siffra från en orelaterad utvärdering.
- **Att förväxla dödviktsförlust med förskjutning.** Dödviktsförlust handlar om kontrafaktiska utfall för samma deltagare; förskjutning handlar om effekter på andra människor eller platser — se [förskjutning och tillskrivning](../förskjutning-och-tillskrivning/). Att sammanblanda de två leder till dubbel- eller underräkning av justeringen.
- **Självrapporterad dödviktsförlust från deltagare.** Att fråga förmånstagare "skulle detta ha hänt utan vår hjälp?" ger systematiskt låga dödviktsuppskattningar (deltagare tenderar att tillskriva programmet äran); en oberoende jämförelsegrupp är mycket mer tillförlitlig.

## Källor

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting."
  <https://www.tnlcommunityfund.org.uk/>
