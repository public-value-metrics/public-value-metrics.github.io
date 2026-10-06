# Givarens avkastning på investering

Givarens avkastning på investering är vad en specifik givares pund faktiskt köper i utfall — inte den ideella organisationens driftskvoter, och inte den ideella organisationens egen avkastning på dess totala budget. Det ramar om ROI från organisationens perspektiv (hur effektivt driver vi) till givarens perspektiv (vad förändrar mitt marginella bidrag), och de två talen behandlas rutinmässigt, och felaktigt, som samma sak.

## Varför det spelar roll

En ideell organisations egen "ROI," i den mån frasen alls används, beskriver vanligtvis något som [kostnad per förmånstagare](../kostnad-per-förmånstagare/) eller [ideell organisations omkostnadskvot](../ideell-organisations-omkostnadskvot/) — organisatoriska effektivitetsmått. En givares ROI är en helt annan fråga: givet att denna ideella organisation redan har annan inkomst, vad tillför *denna* givares pengar vid marginalen? Om en ideell organisation skulle leverera samma program med eller utan en särskild gåva på 10 000 £ — eftersom den har gott om reserver, eller eftersom en annan finansiär skulle ha fyllt luckan — är den gåvans givar-ROI nära noll, hur bra den ideella organisationens övergripande omkostnadskvot eller kostnad per utfall än ser ut.

Detta är samma additionalitetsfråga som ligger till grund för bedömning av [valuta för pengarna](../valuta-för-pengarna/) i brittiska offentliga utgifter och [additionalitet och dödviktsförlust](../additionalitet-och-dödviktsförlust/) i programutvärdering: skapat värde kan bara krediteras en finansiär i den mån det inte skulle ha hänt ändå. Stora givarrådgivna plattformar och effektiva givarorganisationer (Giving What We Can, GiveWell) bygger sina rekommendationer explicit kring denna distinktion, och frågar inte "är detta en bra ideell organisation" utan "har denna ideella organisation ofyllt utrymme för mer finansiering så att min gåva är additionell."

## Beräkningen

```
Givar-ROI ≠ Ideell organisations driftseffektivitet

Givar-ROI  ≈  （Utfall uppnått med gåvan） − （Utfall som skulle
             ha inträffat utan den, dvs. den kontrafaktiska
             situationen）
            ─────────────────────────────────────────────
                          Gåvans storlek

Nyckelinmatningar:
  - Utrymme för mer finansiering （är den ideella
    organisationen finansieringsbegränsad vid marginalen?）
  - Fondersättning （skulle en annan givare ha fyllt luckan?）
  - Marginell kostnadseffektivitet vid den specifika
    finansieringsnivån （kostnader stiger ofta när en insats
    skalas förbi sin lättast nådda population）
```

Se [effektiv altruism kostnadseffektivitet](../effektiv-altruism-kostnadseffektivitet/) för hur GiveWell operationaliserar frågan om "utrymme för mer finansiering," och [kontrafaktisk analys](../kontrafaktisk-analys/) för den allmänna metoden.

## Genomräknat exempel

En givare väljer mellan två gåvor på 5 000 £:

- **Organisation C**: har ett fullt finansierat kärnprogram med 2 miljoner £ i reserver och en väntelista av finansiärer; den marginella 5 000 £ läggs troligen till reserverna eller en lägre prioriterad aktivitet. Uppskattat givar-additionellt utfall: minimalt — pengarna ändrar inte uppenbart vad som händer.
- **Organisation D**: ett litet, evidensbaserat program som offentligt angett att det kommer att behöva avvisa 200 personer nästa kvartal utan ytterligare 50 000 £, och har samlat in 42 000 £ av det. Den marginella 5 000 £ finansierar mycket troligt verklig ytterligare leverans — säg, 20 ytterligare personer betjänade, till organisationens egen angivna kostnad per förmånstagare på 250 £.

Samma gåvostorlek, samma givare, radikalt olika givar-ROI — inte för att Organisation C är en sämre organisation (den kan ha en bättre kostnad-per-utfall-siffra totalt sett) utan för att dess marginella finansieringslucka redan är stängd.

## Koppling till mjukvaruutveckling

Givarplattformar och rekommendationsverktyg för givande visar alltför ofta bara organisationsnivåns effektivitetsmått (omkostnadskvot, kostnad per förmånstagare) eftersom det är vad ideella organisationer publicerar i årsrapporter och vad som är lättast att dra in i en jämförelsetabell. Att korrekt representera givar-ROI kräver en annan, svårare att källbelägga, datapunkt: en ideell organisations angivna aktuella finansieringslucka eller "utrymme för mer finansiering," som förändras under året och sällan är strukturerad data. Plattformar som vill stödja genuint givar-ROI-resonemang behöver antingen en direkt matning från redovisningar av finansieringsluckor (som GiveWell upprätthåller manuellt för sina rekommenderade ideella organisationer) eller en explicit friskrivning att en jämförelsetabell visar organisatorisk effektivitet, inte givaradditionalitet. Se [ideell organisations omkostnadskvot](../ideell-organisations-omkostnadskvot/) för måttet givar-ROI oftast, och felaktigt, sammanblandas med.

## Fallgropar

- **Att sammanblanda ideell organisations effektivitet med givaradditionalitet.** En välskött ideell organisation med låga omkostnader kan ändå ha en nära nollmarginell givar-ROI om den inte är finansieringsbegränsad.
- **Att ignorera fondersättning.** Om en stor institutionell finansiär ändå skulle ha täckt luckan förskjuter en enskild givares gåva den finansiärens pengar istället för att lägga till ny leverans.
- **Att anta linjär kostnadseffektivitet vid skala.** De billigaste att nå förmånstagarna betjänas ofta först; marginell kostnad per utfall stiger ofta när ett program expanderar, så ROI på nästa pund är inte densamma som ROI på den redan spenderade genomsnittliga punden.
- **Ingen angiven finansieringslucka.** En ideell organisation eller plattform som inte kan säga vad nästa X £ skulle finansiera kan inte stödja ett genuint givar-ROI-påstående, bara ett genomsnittskostnadspåstående.

## Källor

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions.
  <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion).
  <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
