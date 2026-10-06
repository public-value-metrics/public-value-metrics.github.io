# Green Book-bedömning (femfallsmodellen)

Green Book är HM Treasurys obligatoriska vägledning för att bedöma och utvärdera brittiska statliga utgiftsförslag. Dess centrala verktyg, femfallsmodellen, tvingar ett affärsärende att besvara fem separata frågor — är det en bra idé, ger det valuta, kan det upphandlas, har vi råd med det, och kan det levereras — istället för att slå ihop allt till ett enda tal en minister kan vinka igenom.

## Varför det spelar roll

Varje brittiskt centralstatligt utgiftsförslag över departementens delegerade gränser måste genomgå Green Book-bedömning innan finansiering frigörs, och HM Treasurys Green Book Review 2020 (publicerad efter kritik om att processen var snedvriden mot fattigare regioner, se <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) skärpte kravet att alternativ jämförs mot en genuin "gör minimum"-baslinje och att strategisk lämplighet visas innan valuta för pengarna ens bedöms. Femfallsmodellen själv föregår Green Book — den härstammar från Office of Government Commerce som standardstrukturen för affärsärenden — men 2022 års upplaga av Green Book inbäddar den som den obligatoriska formen för alla affärsärenden som söker finansdepartementets godkännande: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Poängen med att dela upp ärendet fem vägar är att ett förslag kan misslyckas på vilken dimension som helst oberoende av de andra. En strategiskt sund, kostnadseffektiv IT-ombyggnad kan ändå misslyckas i det kommersiella fallet om endast en leverantör kan leverera den (vilket skapar risk för enda anbud), eller misslyckas i förvaltningsfallet om departementet inte har någon erfarenhet av att leverera program av den storleken. Ett enda "valuta för pengarna"-betyg döljer just denna typ av misslyckande.

## Beräkningen

Femfallsmodellen är en struktur, inte en formel, men varje fall har sitt eget kvantitativa eller evidensbaserade test:

```
1. Det strategiska fallet
   Bevis på ett utgiftsmål kopplat till organisationsstrategi.
   Test: finns det ett förändringsärende alls? （"gör ingenting"
   är alltid ett alternativ.）

2. Det ekonomiska fallet
   Alternativbedömning mot en "gör minimum"-baslinje, med
   samhällsekonomisk kostnads-nyttoanalys eller
   kostnadseffektivitetsanalys.
   Test: vilket alternativ maximerar nettoofffentligt värde?
   Se ../social-cost-benefit-analysis/ och
   ../cost-effectiveness-analysis-in-government/

3. Det kommersiella fallet
   Marknadsengagemang, upphandlingsväg, riskfördelning mellan
   köpare och leverantör.
   Test: kan det föredragna alternativet upphandlas på
   acceptabla villkor?

4. Det finansiella fallet
   Överkomlighet inom departementets budgetgränser,
   finansieringskälla, balansräkningsbehandling.
   Test: har vi råd med det, i år och varje år därefter?

5. Förvaltningsfallet
   Styrning, projektplan, plan för nyttorealisering,
   riskregister.
   Test: kan denna organisation faktiskt leverera det?
   Se ../benefits-realization/
```

Det ekonomiska fallet är där den kvantitativa bedömningen finns: alternativ jämförs på en [samhällelig diskonteringsränta](../samhällelig-diskonteringsränta/)-justerad nettonuvärdesgrund, med metoden [samhällsekonomisk kostnads-nyttoanalys](../samhällsekonomisk-kostnads-nyttoanalys/), eller, där nyttor inte ärligt kan monetariseras, via [kostnadseffektivitetsanalys](../kostnadseffektivitetsanalys-inom-staten/) eller [multikriterieanalys](../multikriterieanalys/).

## Genomräknat exempel

**Kommun**: en kommun som bedömer ett IT-system för bostadsreparationer på 12 miljoner £ kör de fem fallen enligt följande. Strategiskt fall: reparationseftersläpningen bryter mot det lagstadgade standard för anständiga bostäder inom 18 månader utan insats. Ekonomiskt fall: tre alternativ kostnadsberäknade över en 10-årig bedömningsperiod till en diskonteringsränta på 3,5% (enligt 2022 års Green Books standardsamhälleliga tidspreferensränta) — "gör minimum" (lappa det äldre systemet, NNV −4,1m £), "köp" (kommersiell hyllfärdig plattform, NNV +2,3m £), "bygg" (skräddarsydd plattform, NNV +0,6m £ när optimismbias på 40% för mjukvaruutveckling tillämpas mot den odiskonterade kapitalkostnaden, enligt Green Book Annex A). Köp vinner det ekonomiska fallet. Kommersiellt fall: två genomförbara leverantörer finns, konkurrensupphandling är möjlig — godkänt. Finansiellt fall: kapital tillgängligt från Public Works Loan Board, driftkostnader ryms inom den medelfristiga finansiella planen — godkänt. Förvaltningsfall: kommunen har levererat två jämförbara system under de senaste fem åren — godkänt. Förslaget går vidare med "köp."

**Statligt departement**: ett förslag med ett starkt ekonomiskt fall (NNV +40m £) men där endast en leverantör har relevant ackreditering misslyckas med det kommersiella fallets test för konkurrens, vilket tvingar antingen ett undantag för enda anbud (med sin egen granskningsbörda) eller en omarbetning av specifikationen för att öppna marknaden — det ekonomiska fallet ensamt hade aldrig avslöjat detta.

## Koppling till mjukvaruutveckling

Tekniska team inom staten eller bidragsfinansierade organisationer ser vanligtvis bara det ekonomiska fallet, eftersom det är den del produkt- och teknikledning ombeds motivera ("vad är avkastningen på denna migrering?"). Men ett affärsärende som klarar finansdepartementet eller en bidragskommitté behöver alla fem, och ingenjörer är ofta bäst positionerade att svara på det kommersiella fallet (kan detta faktiskt upphandlas, eller låser det oss in i en leverantörs proprietära format?) och förvaltningsfallet (har vi leveransförmågan, eller beror detta på att tre specifika personer inte slutar?). Behandla en begäran om "bara affärsärendets siffror" som en begäran om en femtedel av det faktiska beslutet. Se [valuta för pengarna](../valuta-för-pengarna/) för hur det ekonomiska fallets resultat vanligtvis sammanfattas, och [total ägandekostnad](../total-ägandekostnad-inom-statlig-it/) för det finansiella fallets vanliga kvantitativa kärna.

## Fallgropar

- **Att skriva det ekonomiska fallet först och det strategiska fallet för att matcha det.** Green Book Review 2020 fann att just detta misslyckandemönster drev bedömningsbias mot platser och sektorer som redan var väl underbyggda, vilket befäste regional ojämlikhet; det strategiska fallet bör fastställa målet innan alternativ jämförs.
- **Att behandla "gör minimum" som "gör ingenting".** Den korrekta baslinjen är det lägst kostande alternativet som fortfarande uppfyller minimala juridiska eller säkerhetsskyldigheter, inte en fantasi om nollutgift — att jämföra mot bokstavligen noll blåser upp varje alternativs skenbara värde.
- **Att hoppa över det kommersiella och förvaltningsfallet eftersom det ekonomiska fallet är starkt.** Ett förslag med hög NNV som inte kan upphandlas konkurrensmässigt eller levereras av den ansvariga organisationen är inte ett finansierbart förslag; finansdepartementets granskare avvisar rutinmässigt på dessa grunder även med ett övertygande ekonomiskt fall.
- **Att tillämpa femfallsmodellen endast en gång, i början.** Green Book kräver att fallet omprövas vid varje efterföljande godkännandeport (strategiskt principskiss, principiellt affärsärende, fullständigt affärsärende) allteftersom kostnader och bevis fastställs — ett fall fruset i skissstadiet missar kostnadsökningar som en senare port skulle ha fångat.

## Källor

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
