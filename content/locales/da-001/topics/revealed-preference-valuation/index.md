# Revealed preference-vurdering

Revealed preference-metoder udleder værdien af et ikke-marked gode fra observerbar adfærd i et relateret marked, snarere end at spørge mennesker direkte. Hedonisk prissætning og rejsekostpris-metoden er de to arbejdsHest-teknikker: begge starter fra en reel transaktion og udleder en implicit pris for den ting, der aldrig blev direkte solgt.

## Hvorfor det betyder noget

Hvor [stated preference](../stated-preference-valuation/)-metoder stiller et hypotetisk spørgsmål, observerer revealed preference-metoder, hvad mennesker faktisk betalte for, hvilket Green Book behandler som generelt mere troværdig evidens, alt andet lige, fordi det ikke er underlagt hypotetisk bias — respondenter i et hedonisk huspris-studie betalte genuint den præmie eller rabat, der måles (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hedonisk prissætning dekomponerer en markedspris — typisk huspriser — til implicitte priser for hver attribut af godet, hvilket lader analytikere isolere, for eksempel, den prisPræmie husstande faktisk betaler for at bo et sted mere stille eller med bedre luftkvalitet, statistisk kontrollerende for hver anden attribut, der også påvirker huspris (størrelse, placering, skoleOpland). Rejsekostpris-metoden gør det analoge for rekreative steder uden entreGebyr: tiden og pengene mennesker bruger på at rejse til et sted afslører en nedre grænse for, hvad stedet er værd for dem, fordi ingen pådrager sig en kostpris, der overstiger, hvad besøget er værd for dem.

Begge metoder deler en strukturel begrænsning: de kan kun værdisætte, hvad er indlejret i en eksisterende markedstransaktion. Støj nær en landingsbane viser sig i huspriser, fordi mennesker, der bekymrer sig om støj, sorterer sig selv ind i mere stille boliger; eksistensværdien af en art, ingen besøger eller bor nær, viser sig ikke i nogen transaktion overhovedet, hvilket netop er den kløft, [stated preference](../stated-preference-valuation/)-metoder eksisterer for at udfylde.

## Beregningen

```
Hedonisk prissætning:
  Huspris = f(strukturelle attributter, placeringsattributter,
             miljøattribut af interesse, ...)
  Estimér via regression; koefficienten på miljøattributten
  (holdende alt andet konstant) er dens implicitte pris.

  Implicit pris af attribut X = ∂(Huspris) / ∂X

Rejsekostpris-metoden:
  Besøgsrate (besøg pr. indbygger fra zone i) = f(rejseKost
             fra zone i, substitutSteder, socioøkonomiske
             kontroller)
  Estimér en efterspørgselskurve for besøg som en funktion af
  rejseKost.
  Forbrugeroverskud = areal under den estimerede
                      efterspørgselskurve = værdien af stedet
                      for besøgende
```

Begge metoder kræver et statistisk sundt kontrolSæt — at udelade en confounding attribut (hedonisk) eller et nærliggende substitutSted (rejsekostpris) biaser den implicitte pris i en retning, der ikke altid er tydelig på forhånd, hvilket er, hvorfor Green Book Annex 2 kræver, at regressionsSpecifikationen og kontrollerne rapporteres, ikke blot overskriftskoefficienten.

## Gennemregnet eksempel

**National regering**: Green Books egen skyggepris-metodologi for kulstof trækker delvist på hedonisk evidens, men et simplere illustrativt tilfælde er flyStøj. Et hedonisk studie, der regresserer hussalgspriser i et flyveRuteOmråde mod afstandsvægtet støjExponering, kontrollerende for størrelse, alder, og skoleOpland, finder, at hver 1 decibel stigning i gennemsnitlig støjExponering er associeret med en 0,5% reduktion i huspris. For et typisk £280.000 hus i det berørte område:

```
Implicit pris pr. decibel = £280.000 × 0,5% = £1.400 pr.
husstand
Husstande berørt af en 3dB stigning fra en ny landingsbane =
18.000
Samlet implicit kostpris af støjStigningen = £1.400 × 3 ×
18.000 = £75,6m
```

Dette er en engangs-kapitaliseret kostpris (indlejret i huspris), som vurderingen skal være forsigtig med ikke at dobbelttælle mod et separat estimeret årligt støjForstyrrelsesKostprisflow.

**Velgørenhedsorganisation**: en miljøvelgørenhedsorganisation bruger rejsekostpris-metoden til at værdisætte en gratis-at-indgå naturReservat. Undersøgelsesdata om besøgendes postnumre giver en gennemsnitlig tur-retur rejseKost (tid værdisat ved Green Books anbefalede ikke-arbejdsTidsværdi, plus brændstof) på £14 pr. besøg, med 40.000 besøg pr. år. Den estimerede efterspørgselskurve — besøgsrater faldende, når rejseKost fra en zone stiger — antyder et forbrugeroverskud pr. besøg, over de £14 faktisk brugt, på omkring £9.

```
Samlet årlig værdi = 40.000 besøg × (£14 brugt + £9
                     forbrugeroverskud) = 40.000 × £23 ≈
                     £920.000/år
```

Dette overgår langt reservatets nul-entreGebyr-indtægt og giver velgørenhedsorganisationens bestyrelsesmedlemmer et forsvarligt tal for stedets rekreative værdi, når de fremfører sagen til finansierer.

## Forbindelse til softwareudvikling

Revealed preference-tænkning viser sig i offentlig sektors produktanalytik oftere end praktikere realiserer: brugsData fra en gratis statslig digital tjeneste er i sig selv revealed-preference-evidens for værdi (frekvens, sessionslængde, og — mest afslørende — gentagne-versus-engangs-brugsMønstre kan analyseres på samme måde som en rejsekostpris-model behandler besøgsFrekvens mod afstand). Hvor en tjeneste har genuine substitutter (en papirKanal, en telefonlinje), kan "kostprisen" borgere pådrager sig for at bruge den digitale kanal i stedet (tid, data, en enhed) estimeres og sammenlignes med brug, hvilket direkte afspejler rejsekostpris-logikken. Se [digital tjenesteStandard](../digital-service-standard/) og [åbne data-værdi](../open-data-value/), som står over for netop dette vurderingsProblem for et gode uden direkte markedspris.

## Faldgruber

- **Udeladt variabel-bias i hedoniske modeller.** At udelade en korreleret attribut (skoleKvalitet korrelerende med både huspris og miljøvariablen af interesse) biaser det implicitte prisestimat; specifikation behøver at blive rapporteret og granset, ikke blot resultatet.
- **At ignorere substitutSteder i rejsekostpris-studier.** En besøgendes afslørede værdi for et sted underdrives, hvis et nærmere substitut eksisterer og ikke er kontrolleret for — de besøger måske primært, fordi det er gratis, ikke fordi det er unikt værdifuldt.
- **At anvende revealed preference på et gode uden markedsEkko overhovedet.** Eksistensværdi, optionsværdi, og arveværdi viser sig ikke i nogen transaktion og kan ikke genvindes af hedoniske eller rejsekostpris-metoder — den kløft hører til [stated preference-vurdering](../stated-preference-valuation/).
- **At forveksle kapitaliseret (engangs) værdi med et årligt flow.** Hedoniske huspriseffekter er typisk engangs-kapitaliserede værdier; at behandle dem som et årligt fordelsflow opblæser vurderingen.

## Kilder

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
