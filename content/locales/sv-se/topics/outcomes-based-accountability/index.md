# Resultatbaserad ansvarsskyldighet (OBA)

Resultatbaserad ansvarsskyldighet, även kallad Results-Based Accountability (RBA), är Mark Friedmans ramverk för att separera två frågor som offentlig sektors rapportering vanemässigt suddar samman: "mår befolkningen bra?" (befolkningsansvarsskyldighet) och "presterar detta specifika program bra?" (prestationsansvarsskyldighet). Att sammanblanda de två är, i Friedmans skildring, den enskilt vanligaste anledningen till att välskötta program får skulden för befolkningstrender de aldrig hade makten att förändra.

## Varför det spelar roll

Friedman fastställde ramverket i *Trying Hard Is Not Good Enough* (2005), och hävdade att den mesta offentliga rapporteringen antingen dränker beslutsfattare i befolkningsnivåstatistik som ingen enskild myndighet kontrollerar (tonårsgraviditetsgrad, arbetslöshetsgrad, förväntad livslängd) eller dränker dem i programnivåaktivitetsantal (klienter sedda, hänvisningar gjorda) som inte säger något om huruvida någons liv förbättrades. RBA:s bidrag är ett litet, disciplinerat vokabulär som håller de två isär: befolkningsresultat (välbefinnandevillkor för en hel befolkning, som "barn föds friska") tillhör ingen enskild myndighet och kräver att många partners rör sig tillsammans; prestationsmått (hur väl ett specifikt program betjänar sina specifika klienter) tillhör en myndighet och bör bedömas endast mot vad den myndigheten faktiskt kan påverka. Friedmans "tre prestationsfrågor" — hur mycket gjorde vi, hur väl gjorde vi det, och mår någon bättre? — är nu inbäddade i amerikansk delstatlig och kommunal upphandling av humanitära tjänster och, via den RBA-anpassade konsultfirman och verktygslådan Clear Impact, brett använda inom brittisk och Samväldets kommunala upphandling. De praktiska insatserna är kontraktuella: ett bostadsprogram bör inte avfinansieras eftersom stadens hemlöshetsgrad steg av makroekonomiska orsaker utanför dess räckvidd, men det bör absolut avfinansieras om dess egna klienter inte får bostad.

## Beräkningen

```
Befolkningsansvarsskyldighet （den "stora bilden" en gemenskap,
region eller nation delar）:
  Resultat       — ett välbefinnandevillkor （t.ex. "invånare
                   är ekonomiskt trygga"）
  Indikator（er） — ett mått på det villkoret （t.ex.
                   arbetslöshetsgrad, medianhushållsinkomst）
  → inget enskilt program äger indikatorn; rörelse kräver
    många bidragsgivare

Prestationsansvarsskyldighet （vad ett program ansvarar för）:
  Hur mycket gjorde vi?      — aktivitetsvolym （betjänade
                              klienter, levererade enheter）
  Hur väl gjorde vi det?     — kvalitet/effektivitet （%
                              som slutför programmet, kostnad
                              per klient）
  Mår någon bättre?          — det utfall som spelar roll
                              （% i sysselsättning 6 månader
                              efter programmet, före/efter
                              eller mot en jämförelsegrupp）

Ett program bedöms på den tredje prestationsfrågan, aldrig
direkt på befolkningsindikatorn, om inte dess skala och
design trovärdigt skulle kunna flytta den ensam.
```

## Genomräknat exempel

**Stadsfinansierat sysselsättningsstödsprogram**, 500 deltagare/år, upphandlat av en kommun under ett RBA-liknande prestationsramverk:

```
Befolkningsindikator （kontext, inte programmets styrkort）:
  Stadens arbetslöshetsgrad: 6,2% （upp från 5,8% föregående
  år, driven av en fabriksnedläggning utanför programmets
  kontroll）

Prestationsmått （programmets faktiska ansvarsskyldighet）:
  Hur mycket:  500 deltagare anmälda （mål 480） — uppnått
  Hur väl:     78% slutförandegrad; kostnad per slutförare
              = 340 000£ / 390 slutförare ≈ 872£
  Mår bättre:  av 390 slutförare, 260 i varaktig sysselsättning
              vid 6 månader = 66,7% jämfört med en matchad
              jämförelsegrupps 41% （se counterfactual-analysis）
```

Under en befolkningsansvarsskyldighetsläsning ser programmet ut att misslyckas — stadens arbetslöshetsgrad steg under dess vakt. Under RBA:s prestationsansvarsskyldighetsläsning lyckas programmet: det träffade sitt volymmål, höll kvaliteten stabil, och producerade ett sysselsättningsutfall 25,7 procentenheter över en matchad jämförelsegrupp, medan befolkningsindikatorn rörde sig av skäl (en fabriksnedläggning) helt utanför programmets kontroll.

## Koppling till mjukvaruutveckling

RBA mappar direkt till en bekant SRE-distinktion: befolkningsindikatorer liknar affärsnivåns nordstjärnemått som inget enskilt tekniskt team äger från början till slut (företagsintäkt, marknadsandel), medan prestationsmått liknar ett teams egna SLO:er — de saker det teamets designbeslut faktiskt flyttar. En instrumentpanel som rapporterar båda utan att märka vilken som är vilken inbjuder till precis den feltillskrivning RBA byggdes för att förhindra: en jourhavande ingenjör som får skulden för ett mått ett beroende team kontrollerar. Vid upphandling eller byggande av rapporteringsverktyg för resultatkontrakt, bygg triaden "hur mycket / hur väl / mår bättre" som förstklassiga, separat filtrerbara fält istället för en enda sammanslagen KPI — det är samma disciplin som att separera ledande och eftersläpande indikatorer i [nyckeltal för offentlig sektor](../public-sector-kpis/). RBA är också ansvarslogiken bakom [betalning efter resultat och sociala effektobligationer](../payment-by-results-and-social-impact-bonds/): ett PbR-kontrakt kan bara rättvist betala på "mår bättre"-prestationsmåttet, aldrig på befolkningsindikatorn, om inte insatsen genuint är den dominerande drivkraften bakom den.

## Fallgropar

- **Att betala eller straffa ett program mot en befolkningsindikator det inte kan kontrollera**: detta är det enda misstag RBA existerar för att förhindra; spåra alltid huruvida programmet är en stor eller liten bidragsgivare till befolkningsresultatet innan konsekvenser kopplas till det.
- **Att rapportera "hur mycket" som om det vore "mår bättre"**: aktivitetsantal (klienter sedda) är den lättaste datan att samla in och den minst informativa; insistera på att frågan "mår någon bättre" besvaras med verklig utfallsdata, helst mot en kontrafaktisk situation (se [kontrafaktisk analys](../counterfactual-analysis/)).
- **Att behandla RBA-indikatorer som fasta för alltid**: Friedmans metod är explicit iterativ — en cykel av "data, berättelse, vad som fungerar, handlingsplan" — inte en engångsövning i styrkortsdesign.
- **Ingen jämförelsegrupp för "mår bättre"**: en före/efter-förändring utan en kontrafaktisk situation förväxlar programeffekt med den trend befolkningen skulle ha visat ändå.

## Källor

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
