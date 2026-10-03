# Socialt afkast på investering (SROI)

Socialt afkast på investering er en ramme for at måle, pengegøre, og regnskabsføre et bredt værdikoncept — socialt, miljømæssigt, og økonomisk — og udtrykke det som et forhold mod de investerede ressourcer, for eksempel "£1,44 i social værdi for hver £1 investeret". Den var designet til at udvide finansiel regnskabsLogik til resultater, markeder ikke prissætter, uden at tabe regnskabets disciplin: hvert tal i en SROI skal kunne spores til et interessent-defineret resultat, en evidensBase, og en explicit justering for, hvad der ville være sket alligevel.

## Hvorfor det betyder noget

SROI vedligeholdes af Social Value UK og Social Value International, efterfølgerOrganer til SROI Network, hvis "A Guide to Social Return on Investment" (2012) stadig er referenceMetodologien. Rammen hviler på syv principper — involvér interessenter, forstå hvad ændrer sig, værdisæt tingene der betyder noget, inkludér kun hvad er materielt, overdriv ikke, vær transparent, og verificér resultatet — og det er princip fem, "overdriv ikke", de fleste SROI-rapporter i naturen fejler. Et forhold produceret ved at springe dødvægts- og tilskrivningsJusteringer over er ikke en SROI; det er et markedsføringsTal klædt i en SROI's klæder. Softwareingeniører, der bygger rapporteringsredskaber for velgørenhedsOrganisationer, sociale virksomheder, eller ordregivere, behøver at vide forskellen, fordi redskabet enten vil tvinge disciplinen eller gøre det let at springe over.

## Beregningen

SROI afhænger af en [forandringsTeori](../theory-of-change/) for at identificere, hvilke resultater er inden for omfang, og udtrykker dem ved brug af samme ansvarlighedsKæde som en [logikModel](../logic-model/):

```
SROI-forhold = Nutidsværdi af resultater / Værdi af input

Proces:
 1. Etablér omfang og identificér interessenter, hvis
    resultater vil blive målt
 2. Kortlæg resultater (en forandringsTeori, dokumenteret
    med interessenter, ikke antaget)
 3. Dokumentér resultater og giv dem en værdi ved brug af
    finansielle proxyer
 4. Etablér effekt: brutto værdi − dødvægt − tilskrivning −
    forskydning, anvend derefter dropfald
 5. Beregn SROI'en: nettonutidsværdi af effekt ÷ værdi af
    input
 6. Rapportér, brug, og indlejr — forholdet er et
    kommunikationsRedskab, ikke slutpunktet
```

Dødvægt, tilskrivning, og forskydning er dækket i [additionalitet og dødvægt](../additionality-and-deadweight/) og [forskydning og tilskrivning](../displacement-and-attribution/); alle tre eksisterer for at isolere den genuine [kontrafaktiske](../counterfactual-analysis/) effekt fra bruttoResultatet.

## Gennemregnet eksempel

**Lokal myndigheds beskæftigelsesProgram**: årlig inputKostpris £250.000. Tres deltagere flytter ind i varig beskæftigelse; en finansiel proxy for det resultat (velfærdsforhøjelse, reduceret ydelsesAfhængighed, og skatteIndtægt kombineret) er £8.500 pr. person for det første år — se [enhedsKostprisdatabaser](../unit-cost-databases/) for, hvor sådanne proxyer kommer fra.

- Brutto resultatværdi: 60 × £8.500 = £510.000
- Minus dødvægt (40% ville sandsynligvis have fundet arbejde uden programmet): £510.000 × 0,60 = £306.000
- Minus tilskrivning (30% af den resterende ændring skyldes andre agenturers støtte): £306.000 × 0,70 = £214.200
- År 2-resultat ved 30% dropfald: £214.200 × 0,70 = £149.940, diskonteret ved 3,5%/år (se [samfundsmæssig diskonteringsrate](../social-discount-rate/)): £149.940 ÷ 1,035 = £144.870
- Samlet nutidsværdi af effekt: £214.200 + £144.870 = £359.070
- **SROI-forhold: £359.070 ÷ £250.000 = 1,44**, rapporteret som "£1,44 i social værdi for hver £1 investeret"

**Velgørenhedsorganisation**: en £60.000 venskabsTjeneste reducerer ensomhed for 80 ældre mennesker, værdisat ved en proxy på £1.100/person/år. Brutto værdi £88.000; efter 35% dødvægt og 15% tilskrivning er nettoEffekten £88.000 × 0,65 × 0,85 = £48.620, et SROI-forhold på 0,81 — under hvile-punktet, hvilket er en legitim og nyttig konklusion, ikke et mislykkedes-at-skrive-op.

## Forbindelse til softwareudvikling

En SROI-beregner, der lader en bruger indtaste resultatAntal og proxyVærdier, men ikke har noget krævet felt for dødvægt, tilskrivning, eller en linket forandringsTeori, vil producere opblæste forhold som standard, fordi det at udelade justeringer er vejen med mindst modstand. Byg disciplinen ind i skemaet: hver resultatRække bør referere en interessentGruppe, en dokumenteret mængde, en finansiel proxy med dens kilde, og ikke-valgfri dødvægts-/tilskrivningsFelter. Se [resultater versus output](../outcomes-vs-outputs/) for distinktionen, SROI-resultatKortlægning afhænger af, og [logikModel](../logic-model/) for kæden, redskabet bør afspejle i dens dataModel.

## Faldgruber

- **At springe dødvægt og tilskrivning over.** Overskriftsforholdet uden disse justeringer er et bruttoTal, ikke et nettoEffektTal, og Social Value UK's principper kræver explicit begge.
- **At sammenligne forhold over organisationer.** Et SROI-forhold afhænger af omfangs- og proxyValg truffet sag for sag; at behandle et 4:1-forhold fra en rapport som "bedre" end et 2:1-forhold fra en anden ignorerer, at antagelserne ikke er standardiserede som et finansielt regnskabsForhold.
- **Dobbelttælling af overlappende proxyer.** At stable en "reduceret ensomhed"-proxy med en "forbedret mentalt velvære"-proxy for samme modtagere kan dobbeltværdisætte en underliggende ændring.
- **At springe interessentEngagement over.** Princip et kræver, at resultater defineres med de mennesker, der oplever dem, ikke antaget af analytikeren, der bygger modellen.

## Kilder

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
