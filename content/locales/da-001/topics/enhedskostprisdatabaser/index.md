# Enhedskostprisdatabaser

En enhedsKostprisdatabase er et bibliotek af forhåndsResearchede, evidensbaserede finansielle proxyer for sociale resultater — værdien af at flytte fra arbejdsløshed til beskæftigelse, af reduceret ensomhed, af et stabilt lejemål — der lader en praktiker pengegøre et resultat uden at bestille skræddersyet vurderingsForskning hver gang. De eksisterer, så en lille velgørenhedsOrganisation, der skriver en finansieringsAnsøgning, kan anvende samme stringens som et velressourceret konsulentFirma, ved at genbruge en proxy, nogen andre allerede har udledt og offentliggjort.

## Hvorfor det betyder noget

HACT's UK Social Value Bank, udviklet med økonomen Daniel Fujiwara ved brug af velfærdsVurderingsMetoder, og Global Value Exchange, en åben, crowdsourced database af finansielle proxyer, er de to mest brugte i den britiske tredje sektor og offentlige sektor. Begge eksisterer, fordi det underliggende vurderingsArbejde — [velfærdsVurdering](../velfærdsvurdering/) og [stated-preference-vurdering](../stated-preference-vurdering/) — er dyrt, metodologisk krævende, og langsomt at køre fra bunden for hvert projekt. Et delt, offentliggjort proxyBibliotek omdanner, hvad ville være en flerMåneders forskningsØvelse, til et opslag, hvilket netop er, hvorfor de betyder noget for både [socialt afkast på investering](../socialt-afkast-på-investering/)-beregninger og [Social Value Act](../loven-om-social-værdi/)-udbudsEvalueringer: uden dem ville stringent pengegørelse kun være mulig for organisationer store nok til at bestille deres egne studier.

## Beregningen

En enhedsKostprisdatabase beregner ikke selv noget; den leverer et input til en beregning udført et andet sted:

```
Finansiel proxyVærdi = markedsPris, ELLER skyggePris, ELLER
                       velfærdsVurdering, ELLER stated-
                       preference-værdi for en defineret
                       enhed af resultatÆndring (f.eks.
                       "pr. person der flytter fra
                       arbejdsløshed til beskæftigelse, pr.
                       år")

Anvendt værdi = antal opnåede resultater × enheds-proxy-værdi
```

Se [skyggePrissætning](../skyggepris/) for, hvordan en proxy konstrueres, når ingen markedsPris eksisterer, og [socialt afkast på investering](../socialt-afkast-på-investering/) for, hvordan den anvendte værdi derefter fødrer ind i et forhold efter dødvægts- og tilskrivningsJusteringer.

## Gennemregnet eksempel

**Velgørenhedsorganisation (SROI for venskabsTjeneste)**: en databaseIndgang for "reduktion i ensomhed" giver en illustrativ proxy på £1.100 pr. person pr. år. Anvendt på 80 modtagere: 80 × £1.100 = £88.000 brutto værdi. Hvis samme database også har en proxy for "forbedret mentalt velvære", der trækker på et overlappende velfærdsUndersøgelsesPunkt, ville at stable begge proxyer for samme 80 mennesker dobbelttælle en del af samme underliggende ændring — databasen leverer tallet, men at undgå denne overlap er analytikerens ansvar.

**Lokal myndighed (SROI for jobKlub)**: en databaseIndgang for "flytning fra arbejdsløshed til varig beskæftigelse" anvendes på 45 deltagere ved en illustrativ proxy på £8.500 pr. person pr. år: 45 × £8.500 = £382.500 brutto værdi, før dødvægts- og tilskrivningsJusteringer vist i [socialt afkast på investering](../socialt-afkast-på-investering/).

## Forbindelse til softwareudvikling

Teams, der bygger rapporteringsredskaber for velgørenhedsOrganisationer eller ordregivere, gavner af en intern "resultatKatalog" — en tabel, der kortlægger hvert resultat, et produkt eller en tjeneste plausibelt kan påstå, til en navngivet proxy, dens kildeDatabase, dens udgivelsesDato, og en versionsIdentifikator — så forskellige teams over en organisation ikke hver vælger lidt forskellige værdier for samme resultat. At indkapsle Global Value Exchanges åbne data bag en opslagsTjeneste, med kilden og datoen altid vist sammen med tallet, holder proxyen revisibel snarere end et magisk tal begravet i et regnearkt. Se [socialt afkast på investering](../socialt-afkast-på-investering/) og [Social Value Act](../loven-om-social-værdi/) for de to primære steder, disse proxyer forbruges.

## Faldgruber

- **At behandle proxyer som præcise.** De fleste offentliggjorte proxyer er modellerede gennemsnit fra velfærdsVurderingsStudier med brede konfidensIntervaller; at citere en til kronen overdriver den præcision, det underliggende forskning understøtter.
- **Dobbelttælling af overlappende proxyer.** At kombinere proxyer (f.eks. "reduceret ensomhed" og "forbedret mentalt velvære"), der er udledt fra overlappende undersøgelsesKonstruktioner, værdisætter samme underliggende ændring to gange.
- **At bruge en ude-af-kontekst proxy ujusteret.** En proxy calibreret på en national befolkning og år, anvendt et andet sted uden inflations- eller kontekstJustering, fejlAngiver stiltiende værdi.
- **At ikke kontrollere proveniens.** Global Value Exchange er åben og crowdsourced, så indgangsKvalitet varierer efter bidragyder; kontrollér den underliggende kilde, før du citerer et tal i en finansieringsAnsøgning eller indkøbsIndsendelse.

## Kilder

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
