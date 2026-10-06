# Ideell organisations omkostnadskvot

Ideell organisations omkostnadskvot är administrativa kostnader och insamlingskostnader uttryckta som en procentsats av total utgift. Det är det enskilt mest efterfrågade talet inom välgörenhet — använt av givare, granskningsorgan och till och med vissa finansiärer som en proxy för effektivitet — och det är också ett av de mest grundligt misskrediterade effektivitetsmåtten i sektorn, med organisationerna som populariserade det som offentligt tog avstånd från det 2013.

## Varför det spelar roll

Den 17 juni 2013 publicerade GuideStar, BBB Wise Giving Alliance och Charity Navigator — de tre största amerikanska organen för klassificering och information om ideella organisationer, vars egna historiska betyg hade hjälpt till att befästa omkostnadskvoten som en genväg för välgörenhetskvalitet — ett gemensamt öppet brev till amerikanska givare, "The Overhead Myth," som explicit angav att omkostnadskvoten är ett dåligt mått på en ideell organisations prestation och uppmanade givare att istället se på transparens, styrning och resultat. Detta var en direkt vändning av just de institutioner som hade byggt givarkulturen kring kvoten under ett decennium.

Det underliggande problemet är strukturellt, inte bara om utseende: en låg omkostnadskvot kan uppnås genom att underinvestera i precis de saker som gör en ideell organisation effektiv — ett anständigt ärendehanteringssystem, utbildad personal, uppföljning och utvärdering — eftersom de ofta bokförs som "administration" snarare än "program"-kostnad. En ideell organisation som svälter sitt kontor för att rapportera 5% omkostnader kan vara mindre kapabel att leverera utfall än en som spenderar 20% på en ordentligt resurssatt verksamhet. I England och Wales styr Charity Commissions vägledning till förvaltare bort från en enda omkostnadsprocentsats som ett effektivitetstest, och ber istället förvaltare att rapportera om vad organisationen uppnådde mot sina mål — se SORP-rapporteringskraven diskuterade i [kostnad per förmånstagare](../kostnad-per-förmånstagare/).

## Beräkningen

```
Omkostnadskvot = （Administrativ kostnad + Insamlingskostnad）
                / Total utgift

Vanliga varianter:
  Programkvot            = Program （direkt ideell） utgift
                          / Total utgift = 1 − omkostnadskvot
  Insamlingseffektivitet  = Insamlingskostnad / Insamlade medel
```

Ingen av dessa formler innehåller någon information om uppnådda utfall. En ideell organisation kan minimera var och en av dem och ändå svika varje förmånstagare; se [kostnad per utfall](../kostnad-per-utfall/) för måttet som faktiskt engagerar sig i huruvida pengarna fungerade.

## Genomräknat exempel

Två ideella organisationer, samma totala utgift:

- **Organisation A**: 1 000 000 £ total utgift, 80 000 £ administration + insamling → omkostnadskvot 8%. Den har ingen uppföljnings- och utvärderingsfunktion, en överarbetad ekonomiansvarig, och inget ärendehanteringssystem; personalomsättningen är hög och utfallsdata samlas inte in.
- **Organisation B**: 1 000 000 £ total utgift, 220 000 £ administration + insamling → omkostnadskvot 22%. Den finansierar ett litet utvärderingsteam, ett ärendehanteringssystem som fångar utfallsuppföljning, och korrekt skyddsutbildning.

En givare som screenar rent på omkostnadskvot väljer A och avvisar B — motsatsen till vad [kostnad per utfall](../kostnad-per-utfall/)-evidens troligen skulle visa, eftersom B är den enda av de två som är positionerad att visa, eller förbättra, sina faktiska resultat.

## Koppling till mjukvaruutveckling

Finans- och bidragsrapporteringsmjukvara för sektorn hårdkodar ofta omkostnads-/programuppdelningen som ett kategorifält på varje kostnadsrad, eftersom det är vad tillsynsmyndigheter och vissa finansiärer fortfarande kräver i lagstadgade rapporter. Ingenjörer som bygger dessa system bör behandla det kravet som en efterlevnadsskyldighet, inte en designsignal att omkostnadskvoten är måttet värt att framhäva på en instrumentpanel; para den, varhelst den visas, med ett utfallsbaserat mått så att en betraktare inte kan läsa omkostnadskvoten isolerat. Se [givarens avkastning på investering](../givarens-avkastning-på-investering/) för måttet som bör sitta bredvid den, och [valuta för pengarna](../valuta-för-pengarna/) för det offentliga sektorns motsvarande argument mot enskilda kvotproxyer för effektivitet.

## Fallgropar

- **Att använda omkostnadskvot som en screeningsgräns.** Att avvisa varje ideell organisation över en godtycklig tröskel (t.ex. "högst 15% omkostnader") straffar systematiskt ordentligt resurssatta, väl utvärderade organisationer och belönar underinvestering.
- **Att felkategorisera direkta leveranskostnader som omkostnader**, eller vice versa — redovisningskonventioner för vad som räknas som "program" kontra "administration" varierar tillräckligt mellan ideella organisationer att kvoter ofta inte ens är jämförbara vid ansiktsvärde.
- **Att anta att låga omkostnader innebär hög påverkan.** De två är i bästa fall okorrelerade; se kärnpåståendet i 2013 års Overhead Myth-brev.
- **Att ignorera att vissa legitima strategier kräver högre kortsiktiga omkostnader.** En kapacitetsuppbyggnads- eller organisationsutvecklingsfas höjer medvetet administrationsutgifter för att förbättra senare leverans.

## Källor

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter,
  17 June 2013.
  <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP).
  <https://www.gov.uk/government/organizations/charity-commission>
