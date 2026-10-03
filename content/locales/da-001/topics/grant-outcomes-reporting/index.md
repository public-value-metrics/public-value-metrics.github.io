# Tilskudsresultatrapportering (IRIS+)

TilskudsResultatRapportering er praksissen for, at tilskudsModtagere rapporterer standardiserede, sammenlignelige resultatMålinger tilbage til finansiere — i modsætning til, at hver finansier opfinder sin egen skræddersyede rapporteringsSkabelon. IRIS+, vedligeholdt af Global Impact Investing Network (GIIN), er den mest bredt adopterede sådan standard: et katalog af forHåndsDefinerede sociale, miljømæssige, og finansielle præstationsMålinger, impact-investorer og, i stigende grad, bevillings-gørende fonde kræver eller anbefaler tilskudsModtagere bruger.

## Hvorfor det betyder noget

Før standardiseret rapportering spurgte hver fond tilskudsModtagere om et forskelligt sæt indikatorer i et forskelligt format, og en mellemStor velgørenhedsOrganisation med ti finansiere kunne køre ti parallelle rapporteringsProcesser for overlappende arbejde — en velDokumenteret driver af rapporteringsByrden, tilskudsResultat-standardisering eksisterer for at reducere. IRIS+ adresserer dette ved at give finansiere og tilskudsModtagere et delt vokabular: kerne-målingsSæt grupperet efter tema (f.eks. prisbilligt boligVæsen, ren energi-adgang, finansiel inklusion), hver måling defineret præcist nok, at "job skabt" eller "husholdninger betjent" betyder samme ting, uanset hvem rapporterer det, og tilpasset til FN's SustainableDevelopmentGoals, så en finansier kan rulle tilskudsModtager-niveau-data op til en portefølje-niveau-SDG-narrativ. GIIN rapporterer, at IRIS-målinger bruges af groft halvdelen af impact-investorer og det store meste af fondsForvaltere, banker, og udviklingsFinans-institutioner aktive i feltet.

Standardiseringen betyder mest noget, hvor den interagerer med [resultater versus output](../outcomes-vs-outputs/): IRIS+ skubber rapportering mod definerede resultat- og impact-målinger snarere end, hvad en tilskudsModtagers eksisterende sagsStyringsSystem tilfældigvis logger, hvilket er netop gabet [kostpris pr. resultat](../cost-per-outcome/) versus [kostpris pr. modtager](../cost-per-beneficiary/) beskriver.

## Beregningen

TilskudsResultatRapportering er en ramme og proces, ikke en formel:

```
1. Finansier vælger et kerne-målingsSæt relevant for tilskud-
   dets tema (f.eks. IRIS+ "Financial Inclusion" eller
   "Sustainable Agriculture")
2. Hver måling har en fast definition, enhed, og beregnings-
   metode offentliggjort af GIIN — ikke opfundet pr. finansier
3. TilskudsModtager rapporterer mod samme målingsDefinitioner
   over alle sine finansiere ved brug af den standard, hvilket
   skærer dupliceret rapporteringsIndsats
4. Finansier aggregerer tilskudsModtager-niveau-målinger til
   portefølje-niveau-rapportering, sammenlignelig år over år og
   over tilskudsModtagere ved brug af samme måling
```

EffektivitetsGevinsten er kombinatorisk: at standardisere N finansiere × M tilskudsModtagere til et delt vokabular omdanner N×M skræddersyede rapporteringsRelationer til groft N+M kortlægninger mod en standard.

## Gennemregnet eksempel

**En tilskudsModtager med tre finansiere, før standardisering**: rapporterer "mennesker betjent" til Finansier 1 ved brug af en hovedTælling-definition, "modtagere nået" til Finansier 2 ved brug af en husholdnings-definition, og "individer påVirket" til Finansier 3 ved brug af en tjeneste-episode-definition (sådan at en person, der besøger to gange, tæller to gange). Tre rapporter, tre tal, ingen sammenlignelige, og ingen sammenlignelige med en anden tilskudsModtagers tal selv inden for samme finansiers portefølje.

**Samme tilskudsModtager under IRIS+**: rapporterer mod en defineret IRIS+-individer-nået-måling sammen med en defineret resultatMåling fra det relevante kerne-målingsSæt, ved brug af GIINs offentliggjorte beregningsMetodologi for begge. Alle tre finansiere modtager nu samme tal, beregnet på samme måde, og kan sammenligne denne tilskudsModtagers kostpris pr. IRIS+-defineret enhed mod andre tilskudsModtagere i deres portefølje ved brug af den identiske måling — ækvivalenten, ved rapporterings-infrastruktur-skala, af at have en delt [enhedsKostprisdatabase](../unit-cost-databases/).

## Forbindelse til softwareudvikling

TilskudsStyringsPlatforme bør behandle IRIS+-målingsIdentifikatorer som en fremmedNøgle, ikke friTekst: at lagre den offentliggjorte målingsKode sammen med en tilskudsModtagers rapporterede værdi (snarere end et lokalt opfundet felt navngivet "modtagere") er, hvad gør tvær-finansier- og tvær-portefølje-aggregering muligt senere uden et dataRensningsProjekt. Hvor en platform skal støtte finansiere, der ikke har adopteret IRIS+, er det pragmatiske design at lade en lokal måling blive kortlagt til den nærmeste IRIS+-definition snarere end at tvinge hver finansier på standarden øjeblikkeligt — sammenlignelighed forbedres inkrementelt, da mere af grafen kortlægges på delte identifikatorer. Se søsterEmnet [kostpris pr. resultat](../cost-per-outcome/) for, hvad de rapporterede tal bør bruges til at beregne, når indsamlet.

## Faldgruber

- **At behandle IRIS+-adoption som automatisk sammenlignelighed.** To tilskudsModtagere kan begge rapportere mod samme IRIS+-måling og stadig ikke være sammenlignelige, hvis deres underliggende dataKvalitet eller kontrafaktuelle antagelser differerer; standarden fikser definitioner, ikke målingsStringens.
- **Finansier-opfundne "IRIS-tilpassede" målinger.** En måling, der blot er inspireret af IRIS+-sprog men ikke den faktiske offentliggjorte definition, genIndfører fragmenteringen, standarden eksisterer for at løse.
- **RapporteringsUdmattelse fra overSelektion.** At kræve, en tilskudsModtager rapporterer mod et helt kerne-målingsSæt, når kun to eller tre målinger er beslutningsRelevante, genSkaber byrdeProblemet i en standardiseret indPakning.
- **Ingen resultatMåling overHovedet.** IRIS+ inkluderer mange rene output-målinger (f.eks. tællinger af mennesker betjent); at vælge kun de, og ingen af resultat-tier-målingerne, producerer [kostpris-pr.-modtager](../cost-per-beneficiary/)-formet rapportering under et resultat-rapporterings-mærke.

## Kilder

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
