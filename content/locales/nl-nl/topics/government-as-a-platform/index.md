# Overheid als platform (GaaP)

Overheid als platform is de strategie van het bouwen van gedeelde, herbruikbare componenten — een notificatiedienst, een betalingsdienst, een identiteitsdienst — eenmaal, centraal, zodat honderden individuele overheidsdiensten ze consumeren in plaats van elk hun eigen te bouwen. Het herkadert publieke digitale infrastructuur als een platformeconomieprobleem: de waarde zit niet in enige enkele integratie, het zit in de marginale kosten van het *volgende* team dat het adopteert die naar nul naderen.

## Waarom het ertoe doet

GDS zette de strategie formeel uiteen in zijn publicatie "Government as a Platform" van 2015, met het argument dat de overheid dezelfde capaciteiten — betalingen nemen, gebruikersnotificatie, identiteitsverificatie, adresopzoeking — apart bleef bouwen in dienst na dienst, elk met zijn eigen aanbesteding, beveiligingsbeoordeling, en doorlopende ondersteuningslast. Het alternatief was een klein aantal gedeelde platforms, eenmaal gebouwd tot een hoge standaard en overal herbruikt: GOV.UK Notify voor het versturen van e-mails, sms-berichten, en brieven, GOV.UK Pay voor het nemen van online betalingen, en GOV.UK One Login (opvolger van het eerdere GOV.UK Verify-identiteitsprogramma) voor identiteitsverificatie. De schaal die deze platforms hebben bereikt, is het duidelijkste bewijs dat de strategie werkte: GOV.UK Pay heeft meer dan £10 miljard aan transacties verwerkt over ruwweg 1.800 individuele diensten — en waar het ruwweg vier jaar duurde om zijn eerste £1 miljard te verwerken, verwerkt het nu dat bedrag in ongeveer vijf maanden — terwijl GOV.UK Notify meer dan 9 miljard berichten heeft verstuurd namens meer dan 1.500 overheidsorganisaties. Elke van die adopterende diensten vermeed het bouwen, beveiligen, en onderhouden van zijn eigen betalingsgateway of berichtenpijplijn.

## De berekening

```
Bouwkosten per dienst (geen platform) = N diensten × kosten om
  één betalings-/notificatie-/identiteitssysteem te bouwen,
  beveiligingsbeoordeling te doen, en te draaien

Platformkosten = vaste platformbouwkosten
                + marginale kosten per adopterende dienst
                  (integratie, configuratie, doorlopende
                  platformteamondersteuning)

Herbruik breekt even zodra:
  platformbouwkosten < N × (kosten per-diensbouw −
  marginale integratiekosten)

Voor een volwassen platform benaderen marginale kosten per
extra adopteerder alleen de transactie-/berichtvergoeding — de
vaste kosten worden afgeschreven over het hele overheidsgebied,
niet het budget van één departement, wat de reden is dat
GaaP-componenten meestal centraal worden gefinancierd in plaats
van tegen volledige kostenherstel aan vroege adopteerders
gerekend te worden.
```

## Uitgewerkt voorbeeld

**Gemeente die GOV.UK Pay adopteert in plaats van een betalingsgateway te bouwen**:

```
Bouw-je-eigen-schatting:
  PCI-DSS-complianceswerk + integratie + doorlopend onderhoud
  ≈ £85.000 bouw + £22.000/jaar onderhoud

GOV.UK Pay-adoptie:
  Integratie-inspanning ≈ £12.000 (ontwikkelaarstijd)
  Transactievergoedingen: overheid-naar-burger-kaartbetalingen
  typisch gerekend tegen een klein percentage + vaste
  vergoeding per transactie, geen afzonderlijke PCI-DSS-last
  gedragen door de gemeente ≈ £12.000 eenmalig, doorlopende
  kosten variabel met volume, niet vast

Besparing eerste jaar ≈ £85.000 − £12.000 = £73.000, voor
het meetellen van het vermeden onderhoud van £22.000/jaar
en het vermeden compliancerisico van het überhaupt houden
van kaartgegevens in een door de gemeente gedraaid systeem —
deze tweede categorie is de beveiligingswaarde behandeld in
publieke-sector-cyberbeveiligingswaarde.
```

Schaal die £73.000 over de ruwweg 1.800 diensten die nu GOV.UK Pay gebruiken en de geaggregeerde vermeden-bouwkosten over de overheid heen ligt in de honderden miljoenen — de platformeconomie, niet enige enkele integratie, is waar de waarde van de strategie daadwerkelijk zit.

## Verband met softwareontwikkeling

Overheid als platform is een direct argument voor [build-versus-buy-in-de-overheid](../build-vs-buy-in-government/): wanneer een gedeeld, beoordeeld, goed gedraaid component bestaat, is het bouwen van een op-maat-gemaakt equivalent zeer zelden de betere [value-for-money](../value-for-money/)-keuze, en het faalt punt 13 van [digitale-dienstennorm](../digital-service-standard/) ("gebruik en draag bij aan open standaarden, gemeenschappelijke componenten, en patronen") bijna per definitie. Het verandert ook de vorm van [totale-eigendomskosten-in-overheids-IT](../total-cost-of-ownership-in-government-it/): platformadoptie ruilt een grote kapitaal- en onderhoudsregel voor een kleinere, gebruiksgekoppelde operationele kost, die gemakkelijker te voorspellen en gemakkelijker te definancieren is als een dienst wordt ontmanteld. Open herbruik van componenten heeft een neef in [open-data-waarde](../open-data-value/) — beide zijn strategieën voor het behandelen van iets dat de overheid eenmaal produceert als gedeelde infrastructuur in plaats van een departementaal activum.

## Valkuilen

- **Schaduwherbouw**: teams die stilzwijgend hun eigen betalings- of notificatie-integratie bouwen omdat het onboardingproces van het platform langzamer is dan het zelf doen — een governancewrijvingsprobleem, geen technologieprobleem, en het erodeert stilzwijgend de herbruikeconomie waarvan de hele strategie afhangt.
- **Onderfinancieren van het platformteam relatief tot de waarde die het creëert**: waarde komt toe aan consumerende departementen terwijl kosten bij het platformteam liggen, wat een chronisch onderinvesteringsrisico creëert tenzij financiering wordt gecentraliseerd en beschermd — een versie van de tragedie van de meent.
- **Platformsucces meten door alleen gebruik**: adoptiecijfers (onboardede diensten, verstuurde berichten) zijn een leidende indicator, geen bewijs van waarde; de echte toets is de vermeden-bouwkosten-en-vermeden-risico-rekenkunde hierboven.
- **"Platform" behandelen als synoniem met "monoliet"**: GaaP-componenten slagen omdat elk één ding goed doet met een nauwe, stabiele interface — het samenbundelen van ongerelateerde capaciteiten in één "platform" herschept het op-maat-gemaakte-bouwprobleem op een andere schaal.

## Bronnen

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
