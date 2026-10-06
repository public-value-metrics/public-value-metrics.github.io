# Effektiv altruisme kostpris-effektivitet

Effektiv altruisme (EA) kostpris-effektivitets-ræsonnement rangordner velgørende interventioner efter mængden af godt — oftest udtrykt som liv reddet, eller sundhed opnået, pr. dollar brugt — og styrer penge mod, hvilken intervention der køber mest godt ved margin. GiveWell er feltets mest indflydelsesRige praktiker: det offentliggør explicit, opdaterede kostpris-pr.-liv-reddet og kostpris-pr.-resultat-estimater for en kort liste af "top-velgørenhedsOrganisationer," og anbefaler giverne at give til, hvilken aktuelt har plads til mere finansiering ved den bedste rate.

## Hvorfor det betyder noget

GiveWell angiver kostpris-effektivitet som det ledende kriterium i sin offentliggjorte metodologi: det kigger efter evidens-bakkede interventioner, estimerer deres kostpris-effektivitet i en fælles enhed, og rangordner over helt uRelaterede sager — mygNet mod malaria, A-vitamin-tilskud, kontant-overførsler, vaccine-incitament-betalinger — på den enkelte akse. Dette er en direkte import af QALY-/DALY-stil-ræsonnement fra sundhedsØkonomi ind i filantropi: ligesom et sundhedsSystem spørger "hvor mange QALY'er pr. pund ved margin," spørger GiveWell "hvor mange liv, eller livÅr, pr. dollar ved margin," og behandler sager som substituerbare, når konverteret til den fælles enhed. Se [kostpris-effektivitetsAnalyse i regeringen](../kosteffektivitetsanalyse-i-regeringen/) for den offentlige-sektor-kusine til denne ræsonnements-ramme.

Den mest citerede GiveWell-figur omhandler Against Malaria Foundation (AMF), som distribuerer insekticid-behandlede mygNet. I GiveWells offentliggjorte gennemregnede eksempel (trukket fra 2020-finansieringsData) finansierede groft $4.500 nok net til at afVærge en død, efter at tage højde for imperfekt net-brug, baseLine-mortalitet uden net, og justering for "funging" — muligheden, at AMF ville have modtaget en del af den finansiering fra andre givere uanset. GiveWell er explicit, at denne figur bevæger sig over tid og over geografier, da malaria-prævalens, net-kostpriser, og finansieringsGab ændrer sig, og at kostprisen for at redde et liv generelt forventes at stige over tid, da de billigste muligheder tages op først; det er en gennemregnet illustration af metoden, ikke en fast pris.

## Beregningen

```
Kostpris-effektivitet = kostpris af intervention / enheder
                        af godt produceret (f.eks. $ pr. liv
                        reddet, $ pr. DALY afVærget, $ pr.
                        QALY)

GiveWells kæde for et mygNet-program, illustrativt:
  $ pr. net købt og leveret
    ÷ andel af net faktisk brugt
    ÷ mennesker beskyttet pr. net
    × baseLine-årlig-mortalitet uden net
    × reduktion i mortalitet tilskrivbar net-brug (fra RCT-
      evidens)
    × år af beskyttelse pr. net
    ÷ justering for funging (penge, der forskyder andre
      giveres finansiering)
  = $ pr. liv reddet (netto af kontrafaktuelle finansierings-
    effekter)
```

Denne kæde betyder noget, fordi hvert skridt er et sted kostpris-effektivitets-estimater almindeligvis går galt — se faldgruberne nedenfor — og fordi den gør explicit, at "kostpris pr. liv reddet" aldrig er en rå observeret pris; det er et modelleret estimat bygget fra flere separat uSikre input.

## Gennemregnet eksempel

To hypotetiske interventioner, begge evidens-bakkede, konkurrerende om samme marginale £100.000:

- **MygNet (AMF-stil)**: groft $4.500 pr. liv reddet på GiveWells offentliggjorte gennemregnede eksempel trukket fra 2020-data, dvs. meget groft 20 liv reddet pr. £100.000, afhængig af vekselKurs og år brugt.
- **AfVirkningsProgram (deworming)**: ingen plausibel mortalitetsFordel overHovedet, men stærk evidens for langSigtede indkomstGevinster fra børne-deworming; GiveWell værdiSætter det i indkomstGevinst-termer, ikke liv reddet, hvilket gør det svært at sammenligne direkte mod mygNet uden en delt enhed. GiveWell bruger en explicit "moralske vægte"-ramme for at konvertere begge til en intern enhed for rangordning.

EA-metodens disciplin er at tvinge denne sammenligning ud i det åbne snarere end at finansiere begge, fordi begge "lyder godt." Se [socialt afkast på investering](../socialt-afkast-på-investering/) for den ækvivalente tvingende funktion brugt af britiske sociale virksomheder og lokale bestillere, der spørger samme spørgsmål — hvad er det bedste afkast pr. pund — i en pengegjort-værdi-idiom snarere end en liv-/DALY-idiom.

## Forbindelse til softwareudvikling

Ingeniører, der bygger giver-platforme, tilskuds-matchnings-redskaber, eller impact-dashboards for EA-tilpassede finansiere (Open Philanthropy, GiveWell selv, effektiv-givning-platforme som Giving What We Can), behøver at repræsentere kostpris-effektivitets-estimater som ranges med angivne antagelser, ikke enkelte tal — den underliggende model har flere multiplikative uSikre input, og at kollapse det til et tal på et dashboard misRepræsenterer den tillid, GiveWell selv angiver. Versionér hvert estimat efter offentliggørelsesDato; GiveWell reviderer sine tal, nogle gange substantielt, da ny RCT-evidens eller finansieringsGabData ankommer, og en platform, der cacher en gammel figur, bliver stille forkert.

## Faldgruber

- **At behandle et kostpris-effektivitets-estimat som en fast pris.** Det er et modelOutput med flere uSikre multiplikative input (brugsRater, baseLine-mortalitet, funging-justering); angiv dato og version.
- **At ignorere funging/forskydning.** At finansiere en organisation, der ville have modtaget pengene fra en anden giver alligevel, køber mindre kontrafaktuelt godt, end overskriften antyder — se [tilskrivning og dødvægt](../additionalitet-og-dødvægt/) og [forskydning og tilskrivning](../forskydning-og-tilskrivning/).
- **At sammenligne over inkompatible enheder uden konvertering.** "Liv reddet" og "indkomst opnået" er ikke direkte sammenlignelige uden en explicit moralske-vægte-ramme; at præsentere dem side om side, som var de det, er en kategoriFejl.
- **SagsOmråde-tunnelSyn.** At rangordne kun inden for et sagsOmråde (f.eks. kun globale sundheds-velgørenhedsOrganisationer) og kalde vinderen "den mest kostpris-effektive velgørenhedsOrganisation," overVurderer påstanden; GiveWells tvær-sags-rangordning er med vilje smal (global sundhed og velvære), ikke universel.

## Kilder

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
