# AI-värde inom staten

AI-värde inom staten är kravet att ett AI-system som används i en offentlig tjänst klarar samma valuta-för-pengarna- och offentliga-värde-ribba som vilket annat utgiftsbeslut som helst — inte en lägre för att det är nytt, och inte en högre för att det är fruktat. Det är frågan ett leveransteam måste kunna besvara före, inte efter, att en AI-funktion lanseras: producerar detta mer värde än det kostar, när säkerhet, tillsyn och risk prissatts ärligt?

## Varför det spelar roll

Storbritanniens Central Digital and Data Office (CDDO) publicerade sitt Generative AI Framework for Government 2024, byggande på tidigare interimistisk vägledning från juni 2023, och strukturerade det kring tio principer som täcker vad generativ AI är, dess etiska implikationer, verktygssäkerhet, kvalitetssäkringskontroller, hantering av hela den generativa AI-livscykeln, identifiering av genuina användningsfall, tvärstatligt samarbete, transparens, kompetens och styrning. Ramverkets insisterande på "meningsfull mänsklig kontroll" och full livscykelhantering existerar eftersom AI-projekts affärsärenden har en specifik felmod annan IT-utgift inte har: en pilots rubriksiffra för produktivitet är lätt att producera och lätt att överdriva, eftersom den mäts innan verifierings-, korrigerings- och tillsynsbördan verktyget skapar räknats in. Tillsammans med ramverket kräver Algorithmic Transparency Recording Standard (ATRS) att offentliga organ publicerar ett standardiserat register — syfte, använd data, prestation, rättvisetestning, mänskliga tillsynsarrangemang — för algoritmiska verktyg som har en betydande inverkan på beslut om individer, vilket gör ett AI-systems säkerhetskostnad till en offentlig handling, inte en intern uppskattning ett team tyst kan hoppa över.

## Beräkningen

AI-antagande bedöms som ett tillägg till, inte en ersättning för, standardmässig [valuta för pengarna](../value-for-money/)-bedömning, med AI-specifika termer gjorda explicita snarare än inslagna i en enda "produktivitetsvinst"-siffra:

```
Ett AI-systems nettovärde =
    produktivitetsvinst （sparad tid × belastad personalkostnad）
  − licens-/beräkningskostnad
  − mänsklig verifierings- och tillsynskostnad （att
    kontrollera AI-output innan den agerats på — detta
    krymper inte till noll ens för mogna verktyg）
  − ATRS-dokumentation och löpande övervakningskostnad
  − riskjusterad kostnad för skada från fel, bias eller
    hallucination, viktad efter vem som bär den skadan
    （distributional-weighting）

En pilotproduktivitetssiffra som utelämnar tillsynstermen är
inte jämförbar med en business-as-usual-kostnadsbaslinje som
redan inkluderar motsvarande mänsklig granskning — se
ai-productivity-in-the-public-sector för den fullständigare
produktivitetsmätningsdisciplin detta lånar från.
```

## Genomräknat exempel

**Kommun som använder ett generativt AI-verktyg för att utforma första svar på rutinmässiga kommunalskattefrågor**: 25 000 frågor/år, tidigare hanterade helt av handläggare på i genomsnitt 14 minuter/fråga, belastad personalkostnad 34 £/timme.

```
Baslinjekostnad （ingen AI）:
  25 000 × (14/60) × 34£ = 198 333£/år

Pilotens rubrikpåstående: AI utformar ett svar på 90
sekunder, handläggaren "bara granskar och skickar" —
påstådd ny tid är 3 minuter
  25 000 × (3/60) × 34£ = 42 500£/år
  → påstådd besparing 155 833£/år （ser transformerande ut）

Fullt belastad siffra, uppmätt efter 3 månader live snarare
än i pilotens handplockade testfall:
  Faktisk gransknings- + korrigeringstid per svar: 6 minuter
  （utkast behöver verklig redigering för komplexa eller
  känsliga frågor）
  25 000 × (6/60) × 34£ = 85 000£/år
  Licens-/beräkningskostnad: 38 000£/år
  ATRS-dokumentation och kvartalsvis bias-/
  kvalitetsövervakning: 14 000£/år
  Total kostnad = 85 000 + 38 000 + 14 000 = 137 000£/år

Verklig besparing = 198 333 − 137 000 = 61 333£/år — genuin
och värd att behålla, men gott och väl under hälften av
pilotens rubrikpåstående, och det krävde en ärlig
tillsynstidsmätning, inte pilotens bästa-fall-siffra, för
att hitta.
```

## Koppling till mjukvaruutveckling

Detta är där [AI-produktivitet inom offentlig sektor](../ai-productivity-in-the-public-sector/) och detta ämne möts: tekniska team som bygger AI-funktioner i offentliga tjänster äger instrumenteringen som gör den "verkliga" siffran i det genomräknade exemplet möjlig — att logga faktisk granskningstid, redigeringsavstånd mellan utkast och skickat svar, och eskaleringsgrad, istället för att lita på pilotens demoförhållanden. AI-funktioner bör bedömas mot [digital tjänstestandard](../digital-service-standard/) punkt 9 (säker tjänst, användarintegritet) och korsrefereras mot [offentlig sektors cybersäkerhetsvärde](../public-sector-cybersecurity-value/) där verktyget berör medborgardata, och alla AI-system med en betydande inverkan på beslut om individer behöver ett ATRS-register innan det kan anses bedömningsklart, på samma sätt som en tjänst behöver en godkänd [digital tjänstestandard](../digital-service-standard/)-bedömning innan den går live.

## Fallgropar

- **AI-tvätt**: att omdöpa befintlig regelbaserad automation till "AI" för att komma åt finansiering eller uppmärksamhet öronmärkt för AI-antagande, utan de noggrannhets- eller biasrisker som faktiskt motiverar ramverkets extra granskning.
- **Att mäta pilotproduktivitet, inte produktionsproduktivitet**: pilotprojekt körs på kuraterade testfall med engagerade, uppmärksamma granskare; produktion körs på hela den röriga ärendemixen med granskare som, över tid, utvecklar automationsbias och underkontrollerar output — båda snedvrider den ärliga tillsynskostnadssiffran.
- **Att hoppa över ATRS-registrering eftersom verktyget "egentligen inte är automatiserat beslutsfattande"**: standardens tröskel är betydande inverkan på ett beslut om en individ, vilket de flesta medborgarvända AI-utkasts- eller triageverktyg uppfyller även när en människa tekniskt sett skriver under.
- **Att ignorera fördelningseffekt av fel**: ett AI-systems felfrekvens medelvärdesberäknad över alla användare kan dölja en mycket högre fel- eller biasfrekvens för specifika grupper; [fördelningsviktning](../distributional-weighting/) bör tillämpas på den riskjusterade skadetermen, inte bara den aggregerade noggrannhetssiffran.

## Källor

- Central Digital and Data Office, Generative AI Framework for Government (2024).
  <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard.
  <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
