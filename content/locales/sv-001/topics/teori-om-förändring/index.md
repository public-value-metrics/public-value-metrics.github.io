# Teori om förändring

En teori om förändring är en explicit, bakåtkartlagd kausal väg från ett långsiktigt mål till de förutsättningar och aktiviteter som måste existera för att det ska uppnås, tillsammans med de antaganden som kopplar varje länk. Den byggs genom att börja vid det utfall du vill ha och fråga "vad måste vara sant omedelbart innan detta, för att detta ska hända?", upprepade gånger, tills du når aktiviteter du faktiskt kan leverera — vilket är motsatt riktning mot en [logisk modell](../logisk-modell/), och varför de två kompletterar varandra snarare än är utbytbara.

## Varför det spelar roll

Metoden med bakåtkartläggning formaliserades av Center for Theory of Change och ActKnowledge, byggande på utvärderaren Carol Weiss arbete med att göra programantaganden explicita så att de kunde testas snarare än tas på tro. Brittisk bidragsutvärdering har absorberat detta direkt: HM Treasurys Magenta Book behandlar en teori om förändring som utgångspunkten för all utvärderingsdesign, och finansiärer som National Lottery Community Fund kräver att sökande formulerar en innan de finansierar ett förslag. Anledningen till att det spelar roll för en mjukvaruingenjör är att en teori om förändring är dokumentet som bör avgöra vad ditt system behöver mäta — om den kausala kedjan säger "bidragsupptag beror på att sökande får en personlig beräkning" är det ett testbart påstående din produkt kan instrumenteras för att styrka, eller vederlägga.

## Beräkningen

En teori om förändring är strukturell snarare än numerisk. Varje länk bör bära både ett antagande och en indikator som skulle kunna visa att antagandet är falskt:

```
Långsiktigt utfall （målet）
  ↑ förutsättning ＋ antagande ＋ indikator
Mellanliggande utfall N
  ↑ förutsättning ＋ antagande ＋ indikator
  ...
Mellanliggande utfall 1
  ↑ förutsättning ＋ antagande ＋ indikator
Aktiviteter / insatser
  ↑ investerade resurser
Insatser
```

Denna struktur flödar direkt in i [effektutvärderingsmetoder](../effektutvärderingsmetoder/), som existerar för att testa om antagandena vid varje länk faktiskt håller, och till [kontrafaktisk analys](../kontrafaktisk-analys/), som testar om det långsiktiga utfallet skulle ha hänt ändå.

## Genomräknat exempel

**Kommun (förebyggande av hemlöshet)**: det långsiktiga utfallet är varaktiga hyreskontrakt vid 12 månader för hushåll i risk för vräkning.

- Förutsättning: hushåll har en realistisk, överkomlig avbetalningsplan för skulder. Antagande: handläggarförhandlade planer är mer hållbara än domstolsbeordrade. Indikator: % planer fortfarande aktiva vid 6 månader.
- Förutsättning: hushåll ansöker om de bidrag de är berättigade till. Antagande: en digital bidragskalkylator ökar korrekta ansökningar jämfört med pappersblanketter. Indikator: ansökningsnoggrannhet, jämförd före/efter lansering av verktyget.
- Aktiviteter: handläggartriage, digital bidragskalkylator, skuldförhandling.

I en pilotkohort på 120 hushåll höll bidragskalkylatorantagandet för 102 hushåll (85%) som gick vidare till att ansöka korrekt, styrkt av en efterföljande processutvärdering — vilket ger programteamet bevis för just den länken snarare än ett enda genomgående påstående om förebyggd hemlöshet.

**Ideell organisation (ungdomsmentorskap)**: det långsiktiga utfallet är minskad skoluteslutning. Bakåtkartlagda förutsättningar: förbättrad känsloreglering ← förtroendefull en-till-en-relation med en mentor ← konsekvent veckovis kontakt över två terminer. Teorin gör explicit att att missa förutsättningen "konsekvent veckovis kontakt" (säg, på grund av mentoromsättning) förutspår att utfallet inte kommer att följa, vilket är ett testbart, falsifierbart påstående snarare än ett hopp.

## Koppling till mjukvaruutveckling

En teori om förändring bör forma en produkts datamodell innan en enda instrumentpanel byggs: identifiera vilka länkar som behöver en indikator, och instrumentera specifikt för dem, istället för att som standard använda vad som är enklast att logga. Den disciplinerar också färdplanssamtal — en funktion som inte kartläggs till någon länk i kedjan är inte uppenbart värd att bygga. Se [logisk modell](../logisk-modell/) för den framåtriktade ansvarskedjan byggd när teorin är överenskommen, [social avkastning på investering](../social-avkastning-på-investering/) för en metod som beror på en teori om förändring för att avgränsa vilka utfall som ska värderas, och [utfall kontra output](../utfall-kontra-output/) för distinktionen de mellanliggande utfallslänkarna beror på.

## Fallgropar

- **Att förväxla den med en logisk modell.** En teori om förändring är kausal och förklarande (varför vi tror att detta fungerar); en logisk modell är sekventiell och beskrivande (vad som händer i vilken ordning). Att bara producera en lämnar antingen "varför" eller ansvarsspåret saknat.
- **Att lämna antaganden implicita.** Hela värdet av bakåtkartläggning är att synliggöra testbara antaganden; en teori om förändring som bara listar rutor och pilar utan att namnge vad som skulle kunna göra varje länk falsk är dekoration.
- **Att bygga den en gång och lägga den på hyllan.** En teori om förändring skriven för en finansieringsansökan och aldrig omprövad slutar vara användbar i samma stund evidens börjar motsäga en länk.
- **Att hoppa över intressentinmatning.** En teori om förändring byggd helt av uppdragsgivare utan inmatning från frontlinjepersonal eller förmånstagare tenderar att koda antaganden som ingen som levererar tjänsten faktiskt tror på.

## Källor

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
