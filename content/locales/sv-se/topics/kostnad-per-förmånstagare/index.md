# Kostnad per förmånstagare

Kostnad per förmånstagare är total programkostnad dividerad med antalet unika personer som mottog en tjänst — vem som helst som berörts, oavsett om deras omständigheter faktiskt förändrades. Det är den snabbaste effektivitetssiffran en organisation kan producera, eftersom "vem betjänade vi" nästan alltid redan finns i ärendehanteringssystemet, medan "vem hjälptes" vanligtvis inte gör det.

## Varför det spelar roll

Finansiärer efterfrågar ständigt kostnad per förmånstagare, och av försvarbara skäl: den är omedelbart tillgänglig, den är jämförbar över en portfölj av mycket olika program, och den är ärlig om räckvidd på ett sätt utfallspåståenden — som tar längre tid att verifiera och är lättare att överdriva — inte är. Storbritanniens Charities SORP (Statement of Recommended Practice), som styr hur ideella organisationer rapporterar enligt FRS 102, kräver att förvaltares årsrapporter beskriver prestationer mot mål, men de flesta mindre ideella organisationers förvaltningskonton faller fortfarande som standard tillbaka på räckviddsbaserade enhetskostnader eftersom de är billiga att producera och revisionsvänliga.

Faran är att behandla kostnad per förmånstagare som om den besvarade frågan den inte kan besvara: huruvida pengarna fungerade. Se [kostnad per utfall](../kostnad-per-utfall/) för måttet som faktiskt besvarar det, och [utfall kontra output](../utfall-kontra-output/) för den underliggande distinktionen. Kostnad per förmånstagare är ett legitimt triage- och räckviddsmått — det berättar för en finansiär hur långt pengarna räcker — men en låg kostnad per förmånstagare kan betyda antingen genuin effektivitet eller en tjänst så tunn att den inte förändrar något.

## Beräkningen

```
Kostnad per förmånstagare = Total programkostnad / Antal
                            unika personer betjänade

Kontrast:
Kostnad per utfall         = Total programkostnad / Antal
                            personer som uppnår det
                            definierade utfallet

Kostnad per förmånstagare är alltid ≤ kostnad per utfall,
eftersom utfallspopulationen är en delmängd （ofta en liten
sådan） av förmånstagarpopulationen.
```

## Genomräknat exempel

**Matbank, samma år som exemplet för kostnad per utfall**:

- Total programkostnad: 450 000 £
- Unika hushåll betjänade (tre eller fler paket): 1 800

```
Kostnad per förmånstagare = 450 000£ / 1 800 = 250£ per
                            betjänat hushåll
```

Jämför de två måtten sida vid sida:

| Mått | Nämnare | Resultat |
|---|---|---|
| Kostnad per förmånstagare | 1 800 betjänade hushåll | 250 £ |
| Kostnad per utfall | 630 hushåll som uppnår livsmedelstrygghet | 714 £ |

En finansiär som bara ser 250 £ kan dra slutsatsen att detta är en mycket effektiv organisation. En finansiär som ser båda siffrorna kan ställa den mer användbara frågan: är klyftan mellan räckvidd (1 800) och utfall (630) en datainsamlingslucka, en designlucka, eller en ärlig återspegling av hur svårt livsmedelstrygghet är att uppnå med enbart matbistånd?

**Yrkesutbildningsorganisation, illustrativt**: kostnad per förmånstagare (inskriven) = 2 000 £; kostnad per utfall (varaktig sysselsättning vid 6 månader) = 11 000 £, eftersom endast 18% av de inskrivna slutför programmet och hittar varaktigt arbete. De två siffrorna som divergerar med en faktor på fem är vanligt varhelst slutförande- eller varaktighetsgrader är låga — en yrkesutbildningsorganisation och en matbank är strukturellt identiska här.

## Koppling till mjukvaruutveckling

Kostnad per förmånstagare är standardmåttet inom ideell mjukvara eftersom det är måttet som faller ut ur en förmånstagarpost utan ytterligare arbete: skapa ett ärende, logga en tjänst, räkna rader. Att bygga ett system som också stödjer kostnad per utfall innebär att medvetet lägga till en andra förstklassig enhet — en utfallshändelse, daterad och definierad oberoende av tjänsteleverans — och motstå frestelsen att låta "ärende avslutat" stå in för "utfall uppnått". Vid avgränsning av en bidragshanterings- eller CRM-plattform, fråga vilket av de två måtten varje instrumentpanel faktiskt visar, och märk det därefter; att sammanblanda dem i en enda "påverkan"-ruta är en av de vanligaste mjukvarunivåorsakerna till fallgroparna nedan. Se [databaser för enhetskostnader](../databaser-för-enhetskostnader/) för att jämföra endera måttet när det väl är korrekt märkt.

## Fallgropar

- **Att presentera kostnad per förmånstagare som påverkan.** Det mäter räckvidd, inte förändring. Märk instrumentpaneler och rapporter "kostnad per betjänad person," inte "kostnad per hjälpt person."
- **Dubbelräkning över program.** En person som mottar både matpaket och skuldrådgivning från samma organisation är en förmånstagare, inte två, om nämnaren är avsedd att beskriva unik räckvidd; besluta och dokumentera vilken konvention som används.
- **Att behandla en lägre siffra som alltid bättre.** En stödjande lunchklubb kommer alltid att slå en intensiv ärendehanteringstjänst på kostnad per förmånstagare, eftersom det kostar mindre att beröra någon lätt. Det säger ingenting om vilken som producerar mer varaktig förändring per pund.
- **Att tyst byta nämnare mellan rapporter.** En kostnad-per-förmånstagare-siffra citerad i en årsrapport mot "inskrivna" och i nästa mot "slutförda" är inte jämförbar år över år; ange nämnaren varje gång.

## Källor

- Charity Commission for England and Wales, guidance on charity reporting.
  <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach."
  <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
