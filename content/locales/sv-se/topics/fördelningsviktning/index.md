# Fördelningsviktning

Fördelningsviktning justerar det monetära värdet av en kostnad eller nytta beroende på vem som tar emot den, enligt principen att en extra pund är värd mer för ett fattigt hushåll än för ett rikt. HM Treasurys Green Book tillhandahåller en explicit metod för att tillämpa denna viktning, byggd på den avtagande marginalnyttan av inkomst, så att bedömningar inte tyst behandlar en pund tjänad av den rikaste decilen som lika i värde som en pund tjänad av den fattigaste.

## Varför det spelar roll

Standardmässig kostnads-nyttoanalys summerar pund utan att fråga vems pund de är, vilket implicit antar att en pund är värd detsamma för alla — ett antagande ekonomer länge har vetat är falskt. Ett hushåll som tjänar 15 000 £/år upplever en vinst på 1 000 £ mycket annorlunda än ett hushåll som tjänar 150 000 £/år, eftersom marginalnyttan av inkomst faller när inkomsten stiger. Lämnad oviktad gynnar standardbedömning systematiskt insatser som gynnar rikare, redan bättre bemedlade grupper, eftersom deras högre köpkraft blåser upp den monetära värderingen av nyttor som når dem (en parkuppgradering nära dyra bostäder "visar" en större fastighetsvärdenytta än samma uppgradering nära billiga bostäder, rent på grund av att priserna är högre, inte för att välfärdsvinsten är större).

Green Books kompletterande vägledning om fördelningsanalys, förstärkt efter finansdepartementets översyn 2020 som svarade på kritik om att bedömningsmetodiken systematiskt gynnade London och sydöstra England, fastställer en formell viktningsmetod baserad på en antagen elasticitet för marginalnyttan av inkomst på cirka 1,3 — vilket betyder att en fördubbling av inkomsten ungefär halverar (specifikt, 2^-1,3 ≈ 0,41 gånger) marginalvärdet av en ytterligare pund. Detta är inte en avrundningsjustering: att tillämpa den kan ändra vilket av två konkurrerande program som visar högre nettonuvärde, särskilt vid jämförelse av en insats koncentrerad till ett utsatt område mot en spridd över befolkningen i allmänhet.

## Beräkningen

Green Books fördelningsvikt för en pund nytta som tillfaller ett hushåll på inkomstnivå y, relativt en pund vid den nationella genomsnittsinkomstnivån ȳ:

```
Vikt(y) = (ȳ / y)^e

där:
  y  = hushållsinkomst （eller inkomst för den berörda gruppen）
  ȳ  = genomsnittlig （referens） hushållsinkomst
  e  = elasticitet för marginalnyttan av inkomst
       （Green Book: ungefär 1,3）
```

Att tillämpa vikter på nettonyttor:

```
Viktad nytta = Σ ［oviktad nytta för grupp i × Vikt(y_i)］
```

En grupp som tjänar hälften av det nationella genomsnittet (y = 0,5ȳ) får en vikt på (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — varje pund nytta för den gruppen räknas som värd ungefär 2,46 gånger en pund till ett hushåll med genomsnittsinkomst.

## Genomräknat exempel

**Två konkurrerande lokala program**, vardera med en oviktad nettonytta på 2 miljoner £/år, som konkurrerar om samma regionala tillväxtfond:

- *Program A*: ett företagsstödsprogram i en välmående stad, genomsnittlig hushållsinkomst 45 000 £ (ungefär 1,3× det antagna nationella genomsnittet på 35 000 £).
- *Program B*: ett kompetensprogram i ett utsatt distrikt, genomsnittlig hushållsinkomst 18 000 £ (ungefär 0,51× det nationella genomsnittet).

```
Vikt(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Vikt(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Viktad nytta A = 2 000 000 £ × 0,72 = 1,44 miljoner £
Viktad nytta B = 2 000 000 £ × 2,53 = 5,06 miljoner £
```

Oviktat är de två programmen jämnstarka. Viktat för fördelningseffekt är Program B:s nytta mer än tre gånger så stor — ett resultat som vänder finansieringsrekommendationen och speglar Green Books explicita syfte att kräva att viktningen visas, inte bara det oviktade nytta-kostnadsförhållandet.

**Bidragsfördelning för ideell organisation**: en finansiär som jämför ett bidrag på 500 000 £ som når 1 000 låginkomsthushåll (vikt ≈ 2,0, viktat värde motsvarande 1 miljon £) mot samma 500 000 £ som når 1 000 medelinkomsthushåll (vikt ≈ 1,0, viktat värde motsvarande 500 000 £) bör visa fördelningsärendet explicit i sitt styrelsepapper, inte lämna det att härledas.

## Koppling till mjukvaruutveckling

Fördelningsviktning förekommer sällan direkt i mjukvaruleveransmått, men den bör forma hur teknik- och dataenheter utformar mätning och målinriktning:

- Vid uppbyggnad av en effektinstrumentpanel eller nyttokalkylator, exponera inkomst- eller utsatthetsprofilen för vilka som berörs, inte bara en aggregerad nyttosumma — aggregerade siffror utan fördelningsuppdelning döljer just den omkastning som visas ovan.
- Koppla målinriktningslogik i tjänstedesign till samma utsatthetsdata som Green Book använder — se [index för multipel utsatthet](../index-för-flerfaldig-utsatthet/) — så att en digital tjänsts räckvidd kan bedömas för rättvisa, inte bara effektivitet (det omtvistade fjärde E:t i [valuta för pengarna](../valuta-för-pengarna/)).
- När en algoritm fördelar en knapp resurs (mottagningstider, handläggartid, ett bidrag), kommer en oviktad "maximera total nytta"-målfunktion, per konstruktion, att återskapa samma snedvridning som Green Books viktning existerar för att korrigera — flagga detta explicit för policyägare innan optimering.

## Fallgropar

- **Att tillämpa fördelningsvikter inkonsekvent över en portfölj.** Att vikta ett programs nyttor men inte dess jämförelseobjekts producerar en snedvriden, inte en rättvisare, jämförelse; Green Book kräver likvärdig behandling.
- **Att använda fastighets- eller marknadsvärden som proxy för välfärd utan justering.** Marknadspriser är själva snedvridna av befintlig inkomstojämlikhet, vilket är precis vad fördelningsviktning är avsedd att korrigera för — att använda ojusterade marknadsvärden kan dubbelräkna snedvridningen.
- **Att ignorera variation inom grupper.** Viktning efter områdesgenomsnittlig inkomst (t.ex. en decil från index för multipel utsatthet) kan felrepresentera individer som inte matchar sitt områdes genomsnitt; använd den mest finkorniga inkomstdata som rimligen finns tillgänglig.
- **Att behandla 1,3-elasticiteten som en universell konstant.** Green Book noterar själv att detta är en uppskattning med ett troligt intervall; känslighetstesta stora beslut mot alternativa elasticiteter istället för att behandla 1,3 som exakt.

## Källor

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
