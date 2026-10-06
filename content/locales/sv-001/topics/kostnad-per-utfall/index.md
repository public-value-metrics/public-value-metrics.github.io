# Kostnad per utfall

Kostnad per utfall är total programkostnad dividerad med antalet personer som uppnår en definierad, meningsfull förändring i sina omständigheter — inte antalet som bara mottog en tjänst. Det är det skarpaste effektivitetsmåttet en finansiär eller leveransteam kan använda, eftersom det tvingar fram en föregående fråga som de flesta ideella organisationer undviker: vad, exakt, räknas som framgång?

## Varför det spelar roll

En matbank kan rapportera två mycket olika siffror från samma års räkenskaper. Kostnad per matpaket distribuerat kan vara 15 £. Kostnad per hushåll som går vidare till att uppnå livsmedelstrygghet — inte längre behöver akut matbistånd, verifierat vid en uppföljningspunkt — kan vara 340 £. Båda är sanna. Bara en berättar för en finansiär om pengarna fungerar. Klyftan mellan dem är klyftan mellan ett resultat och ett utfall: ett paket som lämnas över är ett resultat; ett hushåll som inte längre är i kris är ett utfall. Se [utfall kontra output](../utfall-kontra-output/).

Storbritanniens tredje sektor har spenderat två decennier på att bygga infrastruktur för att tvinga fram denna distinktion. New Philanthropy Capitals "fyra-pelar-tillvägagångssätt" för ideell effektivitet ber organisationer explicit att ange sina utfall innan sina resultat, och Inspiring Impact — det brittiska finansiärsstödda samarbetet för effektmätning — publicerar en Outcomes Matrix som många bidragsansökningar nu kräver att ideella organisationer fyller i. Trussell Trusts årliga forskningsprogram "State of Hunger", genomfört med Heriot-Watt University, existerar just eftersom paketantal ensamma inte säger något om huruvida människor slipper undan livsmedelsotrygghet.

Kostnad per utfall betyder bara något när du fastställt den kontrafaktiska situationen: ett utfall uppnått "ändå" är inte ett utfall programmet köpte. Se [kontrafaktisk analys](../kontrafaktisk-analys/) och [displacement-and-attribution](../förskjutning-och-tillskrivning/).

## Beräkningen

```
Kostnad per utfall = Total programkostnad / Antal
                     förmånstagare som uppnår det definierade
                     utfallet

där:
  Total programkostnad   = direkt leveranskostnad + rättvis
                            andel av omkostnader
  Definierat utfall       = en förutbestämd, mätbar
                            tillståndsförändring （t.ex.
                            "livsmedelstrygg vid 6-månaders-
                            uppföljning", inte "mottog ett
                            matpaket"）
```

Jämför mot [databaser för enhetskostnader](../databaser-för-enhetskostnader/) (t.ex. sektorspecifika enhetskostnadsbenchmarks) för att bedöma om en given kostnad per utfall är bra, genomsnittlig eller dålig jämfört med jämförbara insatser.

## Genomräknat exempel

**Matbank, ett år**:

- Total programkostnad: 450 000 £
- Distribuerade paket: 30 000
- Kostnad per paket (ett resultatmått): 450 000 £ / 30 000 = **15 £**

Organisationen driver också en uppföljningsundersökning efter sex månader med ett urval hushåll, och finner att 35% av hushållen som mottagit tre eller fler paket rapporterar att de inte längre behöver akut matbistånd och poängsätter över livsmedelstrygghetströskeln på en standardundersökningsmodul. Av 1 800 hushåll som mottog tre eller fler paket det året uppnår 630 det utfallet.

```
Kostnad per utfall = 450 000£ / 630 = 714£ per hushåll som
                     uppnår livsmedelstrygghet
```

Den siffran på 714 £ är den en finansiär som jämför denna organisation med en kontantöverföringspilot eller en skuldrådgivningstjänst bör använda — inte 15 £. Om ett jämförbart kontantöverföringsprogram i samma region uppnår livsmedelstrygghet till 500 £ per hushåll är matbanken inte uppenbart den mer effektiva vägen till samma utfall, även om dess kostnad per paket ser billig ut.

## Koppling till mjukvaruutveckling

De flesta ärendehanteringssystem är byggda för att logga resultat, eftersom resultat är vad som händer inuti transaktionen (ett paket lämnas över, ett formulär skickas in). Utfall sker vanligtvis senare, ofta utanför systemets normala fångstfönster, och kräver ett medvetet designbeslut: bygg en uppföljningsmekanism (en enkätutlösare, ett återkontaktflöde, en datakopplingsövning) som en förstklassig funktion, inte en efterhandstanke bultad på för en årsrapport. Ingenjörer som bygger bidragshanterings- eller ärendehanteringsplattformar för sektorn bör behandla "vad är utfallshändelsen, och hur observerar vi den" som en kravfråga ställd innan datamodellen fastställs — det är mycket svårare att i efterhand anpassa ett utfallsfält än en resulträknare. Se [utfall kontra output](../utfall-kontra-output/) och [logisk modell](../logisk-modell/) för hur man strukturerar det kravsamtalet, och [kostnad per förmånstagare](../kostnad-per-förmånstagare/) för det snabbare, kraftfullare måttet team använder när utfallsspårning ännu inte är byggd.

## Fallgropar

- **Att rapportera resultat klädda som utfall.** "Nådda personer" är inte "hjälpta personer." Om måttet kan produceras av en systemlogg utan uppföljningskontakt är det nästan säkert ett resultat.
- **Nämnarmanipulation.** Att begränsa utfallspopulationen till "de som slutförde programmet" tysta droppar bort de som hoppade av — ofta de svåraste fallen — och blåser upp den skenbara graden. Ange nämnaren som alla som startade, inte alla som slutförde.
- **Ingen kontrafaktisk situation.** Att räkna alla som uppnådde utfallet, inklusive de som skulle ha gjort det ändå, överdriver vad programmet köpte. Se [kontrafaktisk analys](../kontrafaktisk-analys/).
- **Att jämföra över oförenliga utfallsdefinitioner.** "Livsmedelstrygg" mätt genom en validerad undersökningsmodul är inte jämförbar med "livsmedelstrygg" självrapporterat i ett nöjdhetsformulär; en rankningslista för kostnad per utfall är bara ärlig när utfallsdefinitionerna matchar.

## Källor

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness.
  <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme.
  <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation).
  <https://www.givewell.org/how-we-work/our-criteria>
