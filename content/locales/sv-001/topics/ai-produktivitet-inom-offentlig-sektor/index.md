# AI-produktivitet inom offentlig sektor

Mått för vad AI-kodningsassistans faktiskt gör för teknisk output — förslagsacceptansgrader, kontrollerade studiehastighetsökningar, PR-genomströmning och kodbevarande — bär en genuint motsägelsefull evidensbas redan innan begränsningar från offentlig sektor läggs till: dataklassificering begränsar vilka delar av ett äldre bestånd ett AI-verktyg alls får röra, upphandlingscykler betyder att verktyget under utvärdering ofta är en modellgeneration bakom nuvarande förmåga, och säkerhetsklareringskrav styr vem som får använda det på vad.

## Varför det spelar roll

De två mest citerade kontrollerade studierna pekar i motsatta riktningar. Peng et al.:s GitHub Copilot RCT från 2023 fann att utvecklare slutförde en grönfältsuppgift för en HTTP-server 55,8% snabbare med Copilot (1h11m mot 2h41m, n=95). METR:s RCT från 2025 fann att erfarna utvecklare med öppen källkod som arbetade på *sina egna mogna kodbaser* var 19% långsammare med AI-verktyg från tidigt 2025, samtidigt som de trodde att de var ungefär 20% snabbare. Båda studierna är sunda; motsägelsen är fyndet — grönfältsuppgifters effektivitet överförs inte till effektivitet på mogna kodbaser, och mycket av statlig teknik är moget-kodbas-arbete på bestånd som är äldre och mer säregna än det mediana kommersiella förvaret. Central Digital and Data Offices Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) fastställer principer för ansvarsfullt antagande just eftersom denna evidensbas inte helt enkelt kan importeras från leverantörsdemonstrationer; departement förväntas utvärdera verktyg mot sina egna datahanterings- och säkerhetskrav innan utrullning.

## Beräkningen

```
Acceptansgrad    = accepterade förslag / visade förslag
Bevarandegrad    = AI-kod som överlever till sammanslagning /
                  accepterad AI-kod
Hastighetsökning = (t_kontroll − t_AI) / t_kontroll （ENDAST
                  från kontrollerad jämförelse）
Genomströmningsdelta = Δ sammanslagna PR/utvecklare/vecka

Offentlig-sektor-täckningsfaktor:
  behörig kodbasandel = kodrader på system där
    klassificeringen （OFFICIAL, OFFICIAL-SENSITIVE, SECRET）
    alls tillåter verktyget

Värdemodell = utvecklare × behörig-täckning × sparad tid ×
             belastad taxa × utnyttjande
           — varje term behöver lokal mätning, och
           täckningsfaktorn har ingen motsvarighet i privat
           sektor
```

## Genomräknat exempel

Ett statligt departement pilottestar en AI-kodningsassistent över 300 utvecklare, men bara system klassificerade OFFICIAL är behöriga för verktygsanvändning — 70% av beståndet efter personalallokering, med de återstående 30% (system med högre klassificering) helt uteslutna.

```
Behöriga utvecklare = 300 × 0,70 = 210

Pilotresultat: självrapporterad sparad tid 40 min/dag;
              uppmätt uppgiftsnivåbesparing 12 min/dag
              （0,2h） — METR-perceptionsklyftan,
              återskapad i verkligheten

Värdera det UPPMÄTTA talet:
  210 × 0,2h × 220 dagar × 55£/h belastad × 0,6 utnyttjande
  = 210 × 44 timmar × 55£ × 0,6
  = 9 240 timmar × 55£ × 0,6 ≈ 304 920£/år kapacitet

Kostnad: 210 licensierade platser × 22£/månad × 12
         ≈ 55 440£/år

Nettokapacitetsförhållande ≈ 304 920 / 55 440 ≈ 5,5:1
```

Finansierbart till ungefär en tredjedel av den självrapporterade nyttan, och bara efter att klassificeringstaket tillämpats — att licensiera alla 300 utvecklare baserat på styrkan i den självrapporterade siffran skulle ha överdrivit både den behöriga populationen och den sanna besparingen.

## Koppling till mjukvaruutveckling

Disciplinerna som överförs direkt: kör **pragmatiska försök** på departementets egen kodbas och verkliga ärenden, inte leverantörsdemonstrationsuppgifter, eftersom METR-resultatet specifikt är ett moget-kodbas-fynd; behandla **acceptansgrad som en proxy, inte ett utfall** — hög acceptans med lågt bevarande är mjukvarumotsvarigheten till överdiagnostisering; para varje genomströmningspåstående med en **stabilitetskontroll**, eftersom DORA:s rapport från 2025 fann att AI-antagande höjer genomströmning men försämrar ändringsstabilitet, vilket är exakt den nettonyttanalys [DORA-mått för offentligt värde](../dora-mått-för-offentligt-värde/) är byggd för att köra; och var ärlig med att AI-verktyg kan bredda, inte förminska, klyftan i [teknisk skuld](../teknisk-skuld-som-erosion-av-offentligt-värde/)-tunga äldre bestånd, eftersom träningsdata underrepresenterar COBOL, fjärde generationens språk, och skräddarsydd stordatorkod vanlig inom staten, så förslagskvaliteten på just de system som behöver mest hjälp är ofta svagast. Detta sitter tillsammans med den bredare [AI-värde inom staten](../ai-värde-inom-staten/)-frågan och bör styras av samma [offentlig sektors cybersäkerhetsvärde](../offentlig-sektors-cybersäkerhetsvärde/)-begränsningar som begränsar var något tredjepartsverktyg alls får se kod eller data.

## Fallgropar

- **Leverantörsstudietransplantation**: att tillämpa grönfälts-RCT-hastighetsökningar på integrationsarbete med äldre system är precis det fel METR-studien avslöjade.
- **Självrapportering som mätning**: en klyfta på 20 procentenheter mellan uppfattning och mätning är den största kända biasen i denna litteratur, och den blåser upp affärsärenden som enbart förlitar sig på utvecklarundersökningar.
- **Att ignorera klassificeringstaket**: licensierings- och värdemodeller byggda på total personalstyrka snarare än den behöriga, klassificeringsgodkända delmängden överdriver systematiskt både kostnadseffektivitet och uppnåelig täckning.
- **Upphandlingscykelfördröjning**: ramverksbaserad verktygsupphandling kan betyda att en pilot utvärderar en modellgeneration som är 12–18 månader bakom vad som är offentligt tillgängligt vid tidpunkten för full utrullning, vilket gör det ursprungliga affärsärendets hastighetsökningsantagande föråldrat innan lansering.

## Källor

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023.
  <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025.
  <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024.
  <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
