# Databaser för enhetskostnader

En databas för enhetskostnader är ett bibliotek av förutredda, evidensbaserade finansiella proxyvariabler för sociala utfall — värdet av att gå från arbetslöshet till sysselsättning, av minskad ensamhet, av ett stabilt hyreskontrakt — som låter en praktiker monetarisera ett utfall utan att beställa skräddarsydd värderingsforskning varje gång. De existerar så att en liten ideell organisation som skriver en finansieringsansökan kan tillämpa samma stringens som en välresurserad konsultfirma, genom att återanvända en proxy någon annan redan härlett och publicerat.

## Varför det spelar roll

HACT:s UK Social Value Bank, utvecklad med ekonomen Daniel Fujiwara med hjälp av välfärdsvärderingsmetoder, och Global Value Exchange, en öppen, crowdsourcad databas av finansiella proxyvariabler, är de två mest använda inom brittisk ideell och offentlig sektor. Båda existerar eftersom det underliggande värderingsarbetet — [välfärdsvärdering](../välfärdsvärdering/) och [betalningsviljevärdering](../betalningsviljevärdering/) — är dyrt, metodologiskt krävande och långsamt att köra från grunden för varje projekt. Ett delat, publicerat proxybibliotek förvandlar vad som skulle vara en flera månader lång forskningsövning till en uppslagning, vilket är precis varför de spelar roll för både [social avkastning på investering](../social-avkastning-på-investering/)-beräkningar och utvärderingar av anbud enligt [lagen om socialt värde](../lagen-om-socialt-värde/): utan dem skulle rigorös monetarisering endast vara överkomlig för organisationer stora nog att beställa egna studier.

## Beräkningen

En databas för enhetskostnader beräknar inte något i sig; den tillhandahåller en inmatning till en beräkning som görs någon annanstans:

```
Finansiellt proxyvärde = marknadspris, ELLER skuggpris, ELLER
                         välfärdsvärdering, ELLER
                         betalningsviljevärde för en definierad
                         enhet av utfallsförändring
                         （t.ex. "per person som går från
                         arbetslöshet till sysselsättning,
                         per år"）

Tillämpat värde = antal uppnådda utfall × enhetsproxyvärde
```

Se [skuggprissättning](../skuggprissättning/) för hur en proxy konstrueras när inget marknadspris existerar, och [social avkastning på investering](../social-avkastning-på-investering/) för hur det tillämpade värdet sedan flödar in i ett förhållande efter justeringar för dödviktsförlust och tillskrivning.

## Genomräknat exempel

**Ideell organisation (SROI för kompisservice)**: en post i en databas för enhetskostnader för "minskad ensamhet" ger en illustrativ proxy på 1 100 £ per person och år. Tillämpat på 80 förmånstagare: 80 × 1 100 £ = 88 000 £ bruttovärde. Om samma databas också har en proxy för "förbättrat mentalt välbefinnande" som bygger på ett överlappande välfärdsundersökningsmoment, skulle att stapla båda proxyvariablerna för samma 80 personer dubbelräkna en del av samma underliggande förändring — databasen tillhandahåller talet, men att undvika denna överlappning är analytikerns ansvar.

**Kommun (SROI för jobbklubb)**: en post i en databas för enhetskostnader för "att gå från arbetslöshet till varaktig sysselsättning" tillämpas på 45 deltagare till en illustrativ proxy på 8 500 £ per person och år: 45 × 8 500 £ = 382 500 £ bruttovärde, innan justeringarna för dödviktsförlust och tillskrivning som visas i [social avkastning på investering](../social-avkastning-på-investering/).

## Koppling till mjukvaruutveckling

Team som bygger rapporteringsverktyg för ideella organisationer eller uppdragsgivare drar nytta av en intern "utfallskatalog" — en tabell som mappar varje utfall en produkt eller tjänst trovärdigt kan påstå till en namngiven proxy, dess källdatabas, dess publiceringsdatum och en versionsidentifierare — så att olika team inom en organisation inte var för sig väljer något olika värden för samma utfall. Att kapsla in Global Value Exchanges öppna data bakom en uppslagstjänst, med källan och datumet alltid visade tillsammans med siffran, håller proxyn granskningsbar snarare än ett magiskt tal begravt i ett kalkylblad. Se [social avkastning på investering](../social-avkastning-på-investering/) och [lagen om socialt värde](../lagen-om-socialt-värde/) för de två huvudsakliga platser dessa proxyvariabler konsumeras.

## Fallgropar

- **Att behandla proxyvariabler som exakta.** De flesta publicerade proxyvariabler är modellerade genomsnitt från välfärdsvärderingsstudier med breda konfidensintervall; att citera en till punden överdriver den precision den underliggande forskningen stödjer.
- **Att dubbelräkna överlappande proxyvariabler.** Att kombinera proxyvariabler (t.ex. "minskad ensamhet" och "förbättrat mentalt välbefinnande") som härletts från överlappande undersökningskonstrukt värderar samma underliggande förändring två gånger.
- **Att använda en proxy utanför sitt sammanhang utan justering.** En proxy kalibrerad på en nationell population och ett år, tillämpad någon annanstans utan inflations- eller sammanhangsjustering, felredovisar tyst värdet.
- **Att inte kontrollera ursprung.** Global Value Exchange är öppen och crowdsourcad, så postkvaliteten varierar med bidragsgivare; kontrollera den underliggande källan innan en siffra citeras i en finansieringsansökan eller upphandlingsinlämning.

## Källor

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
