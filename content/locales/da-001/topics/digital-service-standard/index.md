# Digital tjenestestandard

GOV.UK Service Standard er porten, hver centralregerings-digital-tjeneste skal passere, før den kan gå live: 14 offentliggjorte punkter, vurderet af et uafhængigt panel ved slutningen af hver leveringsFase. Det er mekanismen, der omdanner "byg gode offentlige tjenester" fra et slogan til en bestå/fejl-beslutning med en papirSpor — og den direkte efterkommer af 2012-Government Digital Strategys "digital-som-standard"-mandat.

## Hvorfor det betyder noget

Før Service Standard eksisterede, var statslig IT-fejl sjældent synlig før lancering, og sjældent tilskrivbar til en beslutning, nogen kunne pege på. 2012-Government Digital Strategy forpligtede departementer til at redesigne de 25 højest-volumen offentligVendte transaktionsTjenester som "digital-som-standard," og bakkede forpligtelsen med en compliance-mekanisme: tjenester kunne ikke gå live på GOV.UK uden at klare en tjenesteVurdering mod, hvad dengang var en 26-punkts-standard (konsolideret til 18 i 2019, og nu den 14-punkts-standard i kraft i dag, dækkende tre grupper — forståelse af brugerBehov, levering af en god tjeneste, og brug af den rigtige teknologi). En tjenesteVurdering er en rigtig begivenhed: et panel af GDS- eller departementale vurderere gennemGår evidens, spørger teamet, og udSteder en afGørelse af bestå, fejle, eller "ikke opfyldt" mod hvert punkt, offentliggjort på tjenestens vurderingsSide. At fejle en vurdering blokerer tjenesten fra at flytte fra privat beta til offentlig beta, eller fra beta til live — det er en genuin port, ikke en gennemGang.

## Beregningen

Service Standard er en ramme, ikke en formel, men den fungerer som en stadie-portet beslutningsStruktur:

```
Discovery → Alfa-vurdering → Beta-vurdering → Live-vurdering
            (ikke obligatorisk (obligatorisk    (obligatorisk
             for alle tjenester, før offentlig   før fjernelse
             men anbefalet)     beta-lancering)  af "beta"-
                                                  mærke og
                                                  lukning af
                                                  gammel kanal)

Hver vurdering: evidens + team-interview → panel-afGørelse pr.
punkt
  Opfyldt / delvist opfyldt / ikke opfyldt
Samlet resultat: bestå / bestå med betingelser / fejl
(genVurdering kræves)

Kostpris af en fejl ≈ kostpris af den næste sprint-cyklus til
at afHjælpe + forsinkelse af [kanalSkift-besparelserne](../chan
nel-shift-savings/) tjenesten var finansieret til at levere
```

Punkt 10 ("definer, hvad succes ser ud som, og offentliggør præstationsData") er, hvad fødrer [kostpris-pr.-transaktion](../cost-per-transaction/) og [tjenesteStandarder og transaktionsMålinger](../service-standards-and-transaction-metrics/) — Standarden mandater målingen, ikke blot tjenesten.

## Gennemregnet eksempel

**Lokal myndigheds boligAnsøgningsTjeneste**: et kommuneTeam når sin beta-vurdering med en tjeneste, der opfylder 11 af 14 punkter, men fejler punkt 5 ("sikr, alle kan bruge tjenesten"), fordi ingen assisteret-digital-rute eksisterer for ansøgere uden internetAdgang, og fejler punkt 9, fordi personlige data logges i klarTekst i applikations-fejlSpor.

```
Direkte kostpris af fejlen:
  GenVurderings-slot: 6-8 ugers venteTid til næste tilgæn-
  gelige panel
  AfHjælpnings-sprint: 2 udviklere × 3 uger × £550/dag
  ≈ £34.650
  Assisteret-digital-kanal-design: 1 forsker × 2 uger
  ≈ £5.000

ForsinkelsesKostpris: tjenesten var forecastet til at skifte
40% af 18.000/år boligForespørgsler fra £8,50-telefonOpkald til
£0,20-digitale-transaktioner
  = 7.200 × (£8,50 − £0,20) = £59.760/år tabt, pro-rateret for
    ~2-måneders forsinkelsen ≈ £9.960

Samlet kostpris af den fejlede vurdering ≈ £49.610
```

Pointen med aritmetikken er ikke præcisionen — det er, at en fejlet vurdering har en rigtig, beregnelig pris, hvilket er netop, hvorfor porten har tænder.

## Forbindelse til softwareudvikling

For ingeniører læser Standarden som en arkitektur- og leverings-checkListe lige så meget som et politik-dokument: punkt 11 ("vælg de rigtige redskaber og teknologi") og punkt 12 ("gør ny kildeKode åben") er direkte ingeniørBeslutninger, og punkt 14 ("drif en pålidelig tjeneste") kræver samme SLO'er og incidentProcesser, ethvert produktionsSystem behøver. Det er paraplyRammen for dette kapitel — [kostpris-pr.-transaktion](../cost-per-transaction/) og [kanalSkift-besparelser](../channel-shift-savings/) er, hvad Standarden forsøger at beskytte finansielt, [digital inklusion](../digital-inclusion/) er, hvad punkt 5 eksisterer for at garantere, og [regering-som-en-platform](../government-as-a-platform/)-komponenter (GOV.UK Notify, Pay, One Login) tilfredsStiller punkt 13 ("brug og bidrag til åbne standarder, fælles komponenter og mønstre") largely som standard. Se også [byg-versus-køb i regeringen](../build-vs-buy-in-government/) for, hvordan "de rigtige redskaber"-punktet spiller ud i indkøbsBeslutninger.

## Faldgruber

- **At behandle vurdering som en lancerings-dag-compliance-afKrydsning.** Teams, der først læser de 14 punkter en uge før deres beta-vurdering, fejler forudSigeligt; Standarden er tiltænkt at forme beslutninger fra discovery fremefter, ikke revidere dem retroSpektivt.
- **At vurdere prototypen, ikke tjenesten.** En smart demo kan bestå en gennemGang, den live, assisteret-digital-inklusive, incident-styrede version af tjenesten ville fejle — vurderere er tiltænkt at sonde for dette gab, men selv-certificerede minor-tjenester springer det ofte over.
- **Ingen genVurdering før skalering.** En tjeneste vurderet ved 5%-udRulning forbliver ikke automatisk compliant ved 100% — belastning, fejlEfterspørgsel, og kant-sags-brugere ændrer sig alle.
- **At forveksle Service Standard med et designSystem.** GOV.UK Design System-komponenter tilfredsStiller nogle punkter (konsistens, tilgængelighed), men Standarden dækker også teamStruktur, agil praksis, og dataEtik — en vel-stylet tjeneste kan stadig fejle på punkt 2, 6, eller 9.

## Kilder

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
