# Effektutvärdering kontra processutvärdering

Effektutvärdering frågar om ett program orsakade sina avsedda utfall. Processutvärdering frågar om programmet faktiskt levererades som designat — till vem, i vilken dos, och med vilka hinder eller underlättare längs vägen. Detta är olika frågor som kräver olika metoder, och HM Treasurys Magenta Book behandlar det som standardpraxis att beställa båda tillsammans, eftersom ett svagt eller obefintligt effektresultat är otolkbart på egen hand: det kan inte tala om för dig om programmets underliggande teori var fel, eller om en bra teori helt enkelt aldrig levererades ordentligt.

## Varför det spelar roll

Statliga utvärderingar har upprepade gånger funnit ingen mätbar effekt från ett program utan att ha någon processutvärdering för att förklara varför — vilket lämnar uppdragsgivare oförmögna att skilja "den här idén fungerar inte" (teorimisslyckande) från "den här idén provades faktiskt aldrig ordentligt" (implementeringsmisslyckande). Medical Research Councils vägledning om processutvärdering av komplexa insatser, publicerad i BMJ 2015 och brett citerad tillsammans med Magenta Book, formaliserade trohet, dos och räckvidd som de kärnsaker en processutvärdering måste mäta. Att beställa en effektutvärdering utan en processutvärdering riskerar att överge en genuint sund programdesign eftersom den levererades till hälften av den avsedda befolkningen med en bråkdel av den avsedda intensiteten — ett misstag en systembyggare är väl positionerad att förhindra, eftersom leveranstrohet är precis vad operativa datasystem kan fånga i nära realtid.

## Beräkningen

```
Processutvärdering frågar:
 - Levererades det till målpopulationen, i den planerade
   dosen/intensiteten?
 - Matchade leveransen designen i den logiska modellen/teorin
   om förändring?
 - Vilka hinder eller underlättare påverkade leveransen?
 Metoder: trohetskontroller mot förbestämda tröskelvärden,
          fallstudier, intervjuer, administrativ leveransdata.

Effektutvärdering frågar:
 - Vad förändrades, och hur mycket av den förändringen kan
   tillskrivas programmet?
 Metoder: RCT, DiD, PSM, RDD — se impact-evaluation-methods —
          mot en kontrafaktisk situation.

Kombinerad diagnos:
 Ingen effekt  ＋ hög trohet  → teorimisslyckande: modellen
                                själv producerade inte
                                utfallet
 Ingen effekt  ＋ låg trohet  → implementeringsmisslyckande:
                                modellen testades aldrig
                                ordentligt
 Effekt funnen ＋ hög trohet  → replikera med förtroende
 Effekt funnen ＋ låg trohet  → undersök vidare: effekten kan
                                vara skör eller platsspecifik
```

## Genomräknat exempel

**Kommun (föräldraskapsprogram)**: en effektutvärdering med differens-i-differenser finner en förändring på +2 procentenheter i ett mått på barns välbefinnande — inte statistiskt signifikant. Processutvärderingen, körd parallellt, finner att programmet endast nådde 210 av de 500 målfamiljerna (42% räckvidd), och av dem slutförde endast 95 det förbestämda trohetströskelvärdet på 75%+ deltagande i sessioner — 19% av den ursprungligt planerade räckvidden. Slutsats: det svaga effektresultatet är förenligt med ett implementeringsmisslyckande, inte bevis på att programmodellen inte fungerar; det lämpliga svaret är att åtgärda hänvisningsvägen som orsakade avhoppet på 58%, inte att överge programdesignen.

**Ideell organisation (digitalt läskunnighetsprogram)**: en effektutvärdering finner en stark effekt (+18 procentenheter på ett mått på digitalt självförtroende), och en parallell processutvärdering bekräftar 92% trohet mot den planerade läroplanen över alla 12 leveransplatser. Kombinerat kan finansiären skala upp programmet med förtroende, eftersom effekten visats hålla konsekvent snarare än att vara resultatet av en ovanligt bra plats.

## Koppling till mjukvaruutveckling

Processutvärderingsdata är precis vad leveranssystem är väl positionerade att fånga: närvaro mot plan, sessionsdos, och avhopp vid varje steg i en hänvisnings- eller registreringstratt — samma trattanalys ingenjörer redan bygger för produktfunktioner, tillämpad på ett socialt programs leveranspipeline istället. Att mata trohets- och räckviddsmått till programansvariga i nära realtid, istället för att vänta på en avslutande bidragsutvärdering, låter en trasig hänvisningsväg åtgärdas mitt i programmet istället för att upptäckas först när finansieringsperioden har tagit slut. Se [effektutvärderingsmetoder](../effektutvärderingsmetoder/) för de kausala designer processutvärdering paras med, [teori om förändring](../teori-om-förändring/) och [logisk modell](../logisk-modell/) för designen processutvärderingen kontrollerar trohet mot, och [nyttorealisering](../nyttorealisering/) för att spåra leverans hela vägen till de utfall som utlovades.

## Fallgropar

- **Att endast beställa effektutvärdering.** Ett obefintligt eller svagt resultat kan då inte tolkas som teorimisslyckande eller implementeringsmisslyckande, vilket är precis den distinktion som spelar roll för att avgöra vad som ska göras härnäst.
- **Att behandla processutvärdering som ett mjukt tillägg.** Den behöver samma stringens och förbestämda trohetskriterier som effektdesignen, annars kollapsar den till anekdot när resultaten kommer in.
- **Att förväxla "i tid och inom budget" med "levererat som designat".** Processutvärdering kontrollerar trohet mot modellen — dos, målgrupp, innehåll — inte projektledningens statuslampa.
- **Att inte förregistrera trohetströskelvärden.** Att i efterhand besluta vad som räknas som "tillräcklig dos" gör alla förklaringar till ett besvikande effektresultat till efterhandskonstruerade ursäkter.

## Källor

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
