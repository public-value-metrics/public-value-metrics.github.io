# Kostpris pr. resultat

Kostpris pr. resultat er samlet programUdgift delt med antallet af mennesker, der opnår en defineret, meningsfuld ændring i deres omstændigheder — ikke antallet, der blot modtog en tjeneste. Det er den skarpeste effektivitetsMåling en finansier eller leveringsTeam kan bruge, fordi den tvinger et forudGående spørgsmål, de fleste velgørenhedsOrganisationer undgår: hvad, nøjagtigt, tæller som succes?

## Hvorfor det betyder noget

En fødevareBank kan rapportere to meget forskellige tal fra samme års regnskaber. Kostpris pr. fødevarePakke uddelt kunne være £15. Kostpris pr. husholdning, der går videre til at opnå fødevareSikkerhed — ikke længere behøvende nødHjælp, verificeret ved et opFølgningsPunkt — kunne være £340. Begge er sande. Kun en fortæller en finansier, om pengene virker. Gabet mellem dem er gabet mellem et output og et resultat: en pakke overDraget er et output; en husholdning ikke længere i krise er et resultat. Se [resultater versus output](../resultater-versus-output/).

Den britiske tredje sektor har tilbragt to decennier på at bygge infrastruktur for at tvinge denne distinktion. New Philanthropy Capitals "fire-søjle-tilgang" til velgørenhedsEffektivitet spørger explicit organisationer om at angive deres resultater før deres output, og Inspiring Impact — det britiske finansier-bakkede impact-målingsSamarbejde — offentliggør en Outcomes Matrix, mange finansieringsAnsøgninger nu kræver velgørenhedsOrganisationer udfylder. Trussell Trusts årlige "State of Hunger"-forskningsProgram, kørt med Heriot-Watt University, eksisterer netop, fordi pakkeTællinger alene ikke siger noget om, om mennesker undFlyr fødevareUsikkerhed.

Kostpris pr. resultat betyder kun noget, når du har fastsat kontrafaktualen: et resultat opnået "alligevel" er ikke et resultat, programmet købte. Se [kontrafaktisk analyse](../kontrafaktisk-analyse/) og [forskydning og tilskrivning](../forskydning-og-tilskrivning/).

## Beregningen

```
Kostpris pr. resultat = samlet programKostpris / antal
                        modtagere, der opnår det definerede
                        resultat

hvor:
  SamletProgramKostpris = direkte leveringsKostpris + fair
                          andel af overhead
  Defineret resultat     = en forHåndsSpecificeret, målbar
                          tilstandsÆndring (f.eks.
                          "fødevareSikker ved 6-måneders-
                          opFølgning", ikke "modtog en
                          fødevarePakke")
```

Sammenlign mod [enhedsKostprisdatabaser](../enhedskostprisdatabaser/) (f.eks. sektor-specifikke enhedsKostprisBenchmark) for at bedømme, om en given kostpris pr. resultat er god, gennemsnitlig, eller dårlig relativt til sammenlignelige interventioner.

## Gennemregnet eksempel

**FødevareBank, et år**:

- Samlet programKostpris: £450.000
- Pakker uddelt: 30.000
- Kostpris pr. pakke (en output-måling): £450.000 / 30.000 = **£15**

VelgørenhedsOrganisationen kører også en seks-måneders-opFølgningsUndersøgelse med en sample af husholdninger, og finder, at 35% af husholdninger, der modtog tre eller flere pakker, rapporterer ikke længere at behøve nødHjælp og scorer over fødevareSikkerheds-tærsklen på et standard-fødevareSikkerheds-undersøgelsesModul. Af 1.800 husholdninger, der modtager tre-plus pakker det år, opnår 630 det resultat.

```
Kostpris pr. resultat = £450.000 / 630 = £714 pr. husholdning
der opnår fødevareSikkerhed
```

Det £714-tal er det, en finansier, der sammenligner denne velgørenhedsOrganisation til et kontant-overførsel-pilotProjekt eller en gældsRådgivningsTjeneste, bør bruge — ikke £15. Hvis et sammenligneligt kontant-overførsel-program i samme region opnår fødevareSikkerhed ved £500 pr. husholdning, er fødevareBanken ikke obviously den mere effektive rute til samme resultat, selv om dens pr.-pakke-kostpris ser billig ud.

## Forbindelse til softwareudvikling

De fleste sagsStyringsSystemer er bygget til at logge output, fordi output er, hvad der sker inde i transaktionen (en pakke overDrages, en formular indsendes). Resultater sker normalt senere, ofte uden for systemets normale indFangningsVindue, og kræver en bevidst designBeslutning: byg en opFølgningsMekanisme (en undersøgelsesUdløser, en genKontakt-workflow, en dataSammenkædnings-øvelse) som en førsteKlasse-funktion, ikke en eftertanke boltet på for en årlig rapport. Ingeniører, der bygger tilskudsStyrings- eller sagsStyringsPlatforme for sektoren, bør behandle "hvad er resultatHændelsen, og hvordan observerer vi den" som et krav-spørgsmål spurgt, før dataModellen er fastsat — det er langt sværere at retroFitte et resultatFelt end en output-tæller. Se [resultater versus output](../resultater-versus-output/) og [logikModel](../logikmodel/) for, hvordan man strukturerer den kravSamtale, og [kostpris pr. modtager](../kostpris-pr-modtager/) for den hurtigere, kruderere måling teams griber efter, når resultatSporing ikke er bygget endnu.

## Faldgruber

- **At rapportere output klædt som resultater.** "Mennesker nået" er ikke "mennesker hjulpet." Hvis målingen kan produceres af en systemLog uden opFølgningsKontakt, er det næsten helt sikkert et output.
- **NævnerManipulation.** At snævre resultatBefolkningen til "de, der fuldførte programmet," dropper stille de mennesker, der faldt fra — ofte de hårdeste sager — og inflaterer den tilsyneladende rate. Angiv nævneren som alle, der startede, ikke alle, der fuldførte.
- **Ingen kontrafaktual.** At tælle alle, der opnåede resultatet, inklusive de, der ville have alligevel, overVurderer, hvad programmet købte. Se [kontrafaktisk analyse](../kontrafaktisk-analyse/).
- **At sammenligne over inkompatible resultatDefinitioner.** "FødevareSikker" målt ved et valideret undersøgelsesModul er ikke sammenligneligt med "fødevareSikker" selvRapporteret i en tilfredshedsFormular; en kostpris-pr.-resultat-ligaTabel er kun ærlig, når resultatDefinitionerne matcher.

## Kilder

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
