# Tillids- og legitimitetsmålinger

Legitimitet og støtte er et af de tre ben i Mark Moores "strategiske trekant" i *Creating Public Value* (1995) — sammen med offentlig værdi selv og operationel kapacitet — og det er benet, oftest tilbage uMålt, fordi i modsætning til et budget eller en outputTælling, legitimitet har intet obvious enkelt tal knyttet til det. Tillids- og legitimitetsMålinger er familien af proxy-målinger regeringer bruger til at udFylde det gab: institutionelle tillidsUndersøgelser, tilsynsOrgan-tillidsVurderinger, klage- og appel-data, og politiske/lovgivnings-støtte-indikatorer.

## Hvorfor det betyder noget

Moores argument er, at en offentlig leder, der leverer rigtig værdi, men mister politisk og offentlig legitimitet, i sidste ende vil miste det autoriserende miljø nødvendigt for at fortsætte med at levere den — finansiering bliver skåret, mandater bliver smallere, og tjenesten sulter uanset, hvor gode dens resultater er. Legitimitet er derfor ikke en PR-eftertanke boltet på en leveringsScorecard; det er et bærende input til, om missionen kan fortsætte overHovedet, hvilket er hvorfor det sidder som et ligeStillet perspektiv i en [offentlig værdi scorecard](../public-value-scorecard/) snarere end en fodnote. OECD's "Trust in Government"-undersøgelsesProgram er det ledende tværNationale forsøg på at kvantificere dette: det sporer andelen af borgere over OECD-medlemsStater, der siger de har tillid til deres nationale regering, og dets langSigtede data viser, tillid er højt sensitiv til chok — både 2008-finansKrisen og COVID-19-pandemien producerede skarpe national-niveau-svingninger, ofte fulgt af kun partiel genOprettelse, med OECD's analyse konsekvent findende, at opfattet *kompetence* (leverer regering, hvad den siger, den vil) og opfattet *fairness/integritet* (ses regering handle uden korruption eller favorisering) er de to stærkeste drivere af tillidsTallet, distinkt fra tilfredshed med nogen enkelt transaktion. Regeringer forsøger i stigende grad også at operationalisere legitimitet på et mere granulært niveau — Storbritanniens uafhængige regulatorer og inspektorater (National Audit Office, Parliamentary and Health Service Ombudsman, sektorRegulatorer som Ofsted og Care Quality Commission) fungerer som institutionaliserede legitimitetsKontroller, der omdanner "stoler offentligheden stadig på denne tjeneste" til revisible vurderinger.

## Beregningen

Tillid og legitimitet er et rammeFormet emne, hvis brugbare kvantitative proxyer er:

```
InstitutionelTillidsIndeks (OECD-stil)
  = % af undersøgelsesRespondenter, der svarer "ja" på et
    tillid-til-regering-spørgsmål, sporet over tid, opdelt
    efter demografisk gruppe

LegitimitetsProxy-sæt (intet enkelt tal substituerer for
konstruktet):
  - Oprettholdte klager pr. 1.000 tjenesteBrugere
    (ombudsmand eller intern klageData)
  - Juridisk revision/appel-succesRate mod organets
    beslutninger
  - Uafhængig regulator-/inspektorat-vurdering (f.eks.
    "fremragende" til "utilstrækkelig"-bånd)
  - Lovgivnings-/tilsynsUdvalgs-tillidsAfstemninger eller
    kritiskRapport-frekvens
  - Informationsfrihed-anmodningsVolumen og offentliggørelses-
    /afvisningsRate, som en proxy for opfattet transparens

Legitimitet bekræftes, beregnes ikke: en forsvarlig
legitimitetsVurdering trianguler flere af ovenstående snarere
end at stole på nogen enkelt proxy.
```

## Gennemregnet eksempel

**National skatteMyndighed**: legitimitetsTriangulering for en årlig offentlig værdi-rapport.

```
OECD-stil tillidsProxy (departement-specifik tillidsUnder-
søgelse):
  58% af respondenter siger, de har tillid til myndigheden
  til at "behandle mig fair" (ned fra 64% to år forinden)

KlageData:
  Oprettholdte klager: 4,2 pr. 1.000 skatteYder-interaktioner
  (op fra 3,1 pr. 1.000)

Ombudsmand-henvisninger:
  Henvisninger til den uafhængige Adjudicator's Office: 1.850
  i året, hvoraf 61% oprettholdt fuldt eller delvist mod
  myndigheden (op fra 48% det foregående år)

Læst over alle tre: tillid falder, oprettholdte klager
stiger, og uafhængige ombudsmand-fund sider i stigende grad
mod myndigheden — tre uafhængige signaler konvergerende på
samme retning, hvilket er, hvad der gør dette til et
troværdigt legitimitetsFund snarere end noise i en enkelt
serie.
```

Et enkelt af disse tal, der bevæger sig, ville være svag evidens; tre uafhængige målinger, der bevæger sig sammen over samme periode, er mønstret, der gør en legitimitetsPåstand forsvarlig.

## Forbindelse til softwareudvikling

LegitimitetsMålinger produceres sjældent af et enkelt teams dashboard, hvilket selv er designLektionen: byg rapporteringsPipelines, der kan indtage og forene data fra uafhængige eksterne kilder (ombudsmand-sagsBehandlingsSystemer, regulator-vurderingsFeeds, undersøgelsesLeverandører) snarere end at arkitekte legitimitetsRapportering som en intern-kun-måling, fordi internt-sourcede legitimitetsPåstande ("vi vurderer os selv som troværdige") bærer lille evidensMæssig vægt — samme uafhængighedsProblem bemærket for legitimitetsPerspektivet i en [offentlig værdi scorecard](../public-value-scorecard/). Klage- og appel-dataPipelines fortjener samme dataKvalitetsStringens som enhver resultatPipeline, der fødrer [betaling-efter-resultater](../payment-by-results-and-social-impact-bonds/)-kontrakter, da et underRapporteret eller dårligt kategoriseret klageDatasæt stille underEstimerer et legitimitetsProblem, før det bliver synligt i en tillidsUndersøgelse et år senere. Se [borgerTilfredshedsMålinger](../citizen-satisfaction-metrics/) for transaktion-niveau-modparten til denne institution-niveau-måling, og [offentlig værdi](../public-value/) for Moores fulde strategiske-trekant-ramme, dette ben tilhører.

## Faldgruber

- **At behandle tilfredshed som en proxy for legitimitet.** En borger kan være tilfreds med en enkelt transaktions interface, mens han mistror institutionen samlet (eller vice versa) — se [borgerTilfredshedsMålinger](../citizen-satisfaction-metrics/) for, hvorfor de to skal rapporteres separat.
- **At stole på en enkelt selvRapporteret måling.** En internt-kørt tillidsUndersøgelse uden uafhængig bekræftelse (ombudsmand-data, regulator-vurderinger) er let at afvise som selv-bedømmelse; triangulér.
- **At ignorere demografisk opdeling.** Samlede nationale tillidsTal kan maskere skarpt divergerende legitimitet blandt specifikke grupper (efter alder, etnicitet, indkomst, eller region) — OECD's egne Trust in Government-udgivelser opdeler netop af denne grund.
- **At læse en enkelt chok-drevet dukkert som en permanent tendens.** TillidsTal bevæger sig skarpt omkring kriser (finansKrak, pandemier, højProfil-skandaler) og genOpretter delvist; et enkelt post-chok-dataPunkt bør ikke ekstrapoleres til et langSigtet fald uden mere data.

## Kilder

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
