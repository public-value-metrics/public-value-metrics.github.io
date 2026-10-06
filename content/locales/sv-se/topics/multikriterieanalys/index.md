# Multikriterieanalys (MCDA)

MCDA poängsätter och väger alternativ mot flera distinkta, viktade kriterier samtidigt, vilket producerar en rangordnad jämförelse utan att tvinga varje kriterium till en monetär eller naturenhetlig skala. Det är bedömningsmetoden för beslut där de utfall som spelar roll genuint inte kan reduceras till ett enda tal.

## Varför det spelar roll

Green Book sanktionerar explicit MCDA (dess faktarutebilaga och Annex A diskuterar båda direkt) för bedömningar där nyttor är "genuint ojämförbara" — där att omvandla allt till pengar via [samhällsekonomisk kostnads-nyttoanalys](../samhällsekonomisk-kostnads-nyttoanalys/), eller till ett utfall via [kostnadseffektivitetsanalys](../kostnadseffektivitetsanalys-inom-staten/), skulle förvränga beslutet snarare än att klargöra det (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Ett platsval för ett nytt fängelse, till exempel, avväger kapitalkostnad mot samhällspåverkan, transportanslutning, miljöeffekt och personalrekryteringsbarhet — kriterier som inte delar en gemensam enhet och där att tvinga fram en delad enhet (vanligtvis pengar) skulle smuggla in ett värdeomdöme om den relativa vikten av, säg, miljöpåverkan mot kostnad, förklätt till objektiv aritmetik.

MCDA:s ärlighet är också dess huvudsakliga sårbarhet: eftersom vikter tilldelas av den som utför bedömningen (eller av en panel) är metoden endast så legitim som viktningsprocessen. Green Books vägledning är tydlig med att kriterier och vikter måste överenskommas och publiceras *innan* alternativ poängsätts, just för att förhindra att en granskare arbetar baklänges från ett föredraget alternativ till de vikter som motiverar det.

## Beräkningen

```
För varje alternativ i och kriterium j:
  Poäng_ij   = alternativets prestation mot det kriteriet
              （ofta 0-100 eller 1-10, från bevis, expertomdöme
              eller intressentpoängsättning）
  Vikt_j     = kriterium j:s relativa betydelse, vikter
              summerar till 1 （eller 100）

Alternativ i:s viktade poäng = Σ_j (Poäng_ij × Vikt_j)

Procedur:
1. Enas om kriteriemängden och vikterna INNAN något alternativ
   poängsätts （svängviktning eller parvis jämförelse, t.ex.
   AHP, är vanliga insamlingsmetoder）.
2. Poängsätt varje alternativ mot varje kriterium på en
   gemensam skala, från bevis där möjligt.
3. Beräkna viktade summor; rangordna alternativ.
4. Känslighetstesta vikterna: överlever rangordningen troliga
   meningsskiljaktigheter om hur mycket varje kriterium bör
   spela roll?
```

MCDA producerar inte ett försvarbart absolut värde på det sätt SCBA:s nettonuvärde gör — den producerar endast en rangordning villkorad av de överenskomna vikterna. Detta är en fördel när beslutet genuint handlar om att avväga ojämförbara varor, och en nackdel om det används för att undvika det svårare arbetet med monetarisering där monetarisering faktiskt var möjlig.

## Genomräknat exempel

**Kommun**: en kommun som väljer plats för en ny återvinningscentral för hushållsavfall poängsätter tre platser mot fyra kriterier, viktade av en tvärdepartemental panel innan något platsbesök:

```
Kriterier （vikt）:      Kapitalkostnad （30%） Transporttillgång
                        （25%） Samhällspåverkan （25%）
                        Miljöpåverkan （20%）

Platspoäng （0-100, högre = bättre）:
Plats A: kostnad 80, tillgång 60, samhälle 40, miljö 70
Plats B: kostnad 60, tillgång 90, samhälle 70, miljö 50
Plats C: kostnad 90, tillgång 50, samhälle 80, miljö 60

Viktade summor:
Plats A = 80(.30) + 60(.25) + 40(.25) + 70(.20)
        = 24+15+10+14 = 63
Plats B = 60(.30) + 90(.25) + 70(.25) + 50(.20)
        = 18+22,5+17,5+10 = 68
Plats C = 90(.30) + 50(.25) + 80(.25) + 60(.20)
        = 27+12,5+20+12 = 71,5
```

Plats C rangordnas högst. En känslighetskörning som flyttar vikten för samhällspåverkan från 25% till 35% (och tar 10 poäng från kapitalkostnad) ändrar Plats C:s summa till 71,5 − 3 + 8 = 76,5 och Plats B:s till 68 − 6 + 7 = 69 — Plats C leder fortfarande, så rangordningen är robust mot den troliga meningsskiljaktigheten om viktning, vilket är precis den kontroll Green Book förväntar sig se rapporterad.

**Ideell organisation**: en bidragsgivande stiftelse som väljer mellan att finansiera en skuldrådgivningstjänst, ett matbanksnätverk och ett program för finansiell läskunnighet använder MCDA istället för SROI (se [social avkastning på investering](../social-avkastning-på-investering/)) just eftersom styrelseledamöterna i god tro är oense om huruvida krisstöd eller förebyggande bör väga tyngre — MCDA låter dem enas om meningsskiljaktighetens *form* (ett viktintervall) istället för att låtsas att ett enda SROI-förhållande löser den.

## Koppling till mjukvaruutveckling

MCDA är det naturliga verktyget för leverantörs- och arkitekturval när kriterier genuint står i konflikt — att välja mellan ett molnbaserat och ett lokalt ärendehanteringssystem avväger kostnad, datasuveränitetsrisk, tillgänglighet och leveranshastighet på sätt som inte reduceras till ett tal. Tekniska ledare bör insistera på att viktningen sker innan alternativen poängsätts, precis som Green Book kräver, eftersom en viktningsövning som körs efter att man sett den slutliga listan pålitligt driver mot vilket alternativ rummet redan föredrog. Se [bygga eller köpa inom staten](../bygga-eller-köpa-inom-staten/) för en vanlig MCDA-tillämpning, och [instrumentpanel för offentligt värde](../instrumentpanel-för-offentligt-värde/) för ett relaterat strukturerat poängsättningsverktyg som används efter beslutet snarare än före.

## Fallgropar

- **Att sätta vikter efter att ha sett alternativen.** Detta är det enskilt vanligaste sättet MCDA manipuleras, avsiktligt eller inte; publicera vikter innan poängsättning, och registrera vem som satte dem.
- **Att behandla den viktade summan som ett hårt tal.** En poäng på 71,5 mot 68 är inte ett statistiskt meningsfullt gap om inte känslighetsanalysen bekräftar att rangordningen är stabil; rapportera intervall, inte falsk precision.
- **Att använda MCDA för att undvika monetarisering som faktiskt var genomförbar.** Om de flesta kriterier trovärdigt kunde prissättas, kastar att som standard använda MCDA istället för [SCBA](../samhällsekonomisk-kostnads-nyttoanalys/) bort information bedömningen kunde ha använt.
- **Att låta en dominerande intressent sätta alla vikter ensam.** Green Books god praxis förväntar sig att vikter samlas in från en representativ panel, inte den sponsrande direktören, för att undvika att bedömningen bara återderiverar vad den personen redan ville ha.

## Källor

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
