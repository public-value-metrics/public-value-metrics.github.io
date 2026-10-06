# KPI'er i den offentlige sektor

En nøgleResultatIndikator (KPI) er en valgt, sporet måling, der stilles ind for, om en offentlig tjeneste gør sit job godt. I regeringen er valget af KPI aldrig neutralt: fordi KPI'er knyttes til budgetter, ranglister, og karrierer, former akten af at vælge en alle nedstrøms-adfærd, ofte mere end den politik, der skabte tjenesten.

## Hvorfor det betyder noget

Charles Goodharts 1975-observation om pengePolitik — senere populariseret af Marilyn Strathern som "når en måling bliver et mål, ophører den med at være en god måling" — er den enkelte vigtigste advarselsEtiket i offentlig sektors præstationsStyring. En KPI valgt til at *beskrive* et system begynder at *fordreje* det system i det moment, ressourcer, løn, eller politisk overlevelse er knyttet til det. Den canoniske illustration er NHS-ambulanceResponsTider: når det otte-minutters Category A-responsMål blev bindende, blev nogle trusts vist at have "stablet" ambulancer lige uden for responsTidsUret, eller omklassificeret opkald, for at nå tallet uden at ændre patientResultater. UK National Audit Offices vejledning om at vælge og bruge præstationsIndikatorer — fastsat over dens value-for-money-rapporter og dens "Performance Measurement by Regulators" og "Choosing the Right FABRIC"-ramme (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — eksisterer netop fordi departementer blev ved med at vælge indikatorer, der var lette at rapportere, snarere end indikatorer, der var svære at manipulere. En softwareIngeniør, der leverer dashboardet, en minister eller direktør vil blive bedømt mod, er, hvad de end har til hensigt eller ikke, med at designe incitamentsStrukturen af en offentlig institution.

## Beregningen

KPI-design er et rammeFormet emne, men *evalueringen* af en kandidat-KPI er en gentagelig checkliste, ikke en formel:

```
For hver kandidat-KPI, scor mod:
  Fit for purpose  — måler den resultatet, eller en proxy
                     flere skridt fjernet?
  Appropriate      — tilhører den de mennesker, der faktisk
                     kan påvirke den?
  Balanced         — er den koblet med en modMåling, der
                     fanger manipulation?
  Robust           — kan den overleve revision, eller er den
                     selvRapporteret og uverificerbar?
  Integrated       — passer den med det bredere sæt, eller
                     skubber den mod en anden KPI?
  Cost-effective   — koster indsamlingen mere end den
                     beslutning, den informerer?

Ledende versus laggende opdeling:
  Ledende indikator → forudsiger fremtidigt resultat, men
                      ofte manipulérbar (f.eks. opkald
                      besvaret <60s)
  Laggende indikator → bekræfter resultatet skete, men
                       ankommer for sent til at styre (f.eks.
                       årlig tilfredshedsUndersøgelse)
  Et forsvarligt KPI-sæt kobler mindst en af hver pr.
  målSætning.
```

## Gennemregnet eksempel

**AmbulanceTrust**: en trust rapporterer en Category A (livsTruende) responsTids-KPI på "75% af opkald besvaret inden for 8 minutter." I et kvartal kommer 6.000 Category A-opkald ind; 4.500 mødes inden for 8 minutter, hvilket giver 75,0% — tilsyneladende i mål.

```
OverskriftsKPI = 4.500 / 6.000 × 100 = 75,0%  (opfylder 75%-
tærsklen)
```

Men en Goodhart-revision tilføjer en modMåling: gennemsnitlig responsTid for de langsomste 10% af opkald.

```
Gennemsnitlig responsTid langsomste decil = 34 minutter (op
fra 19 minutter to år tidligere)
```

Trusten rammer målet, mens staleHalen — de opkald, der mest sandsynligt er genuint livsTruende, når triage er imperfekt — er blevet meget værre, fordi hold prioriteres mod opkald tæt på den 8-minutters-klippekant snarere end mod klinisk urgens. Den enkelte KPI fortalte en falsk historie; den koblede KPI fortalte den sande.

## Forbindelse til softwareudvikling

Ingeniører, der bygger præstationsDashboards for regeringen, designer, funktionelt, organisationens incitamentsAPI. Praktiske implikationer: instrumentér *nævneren* lige så stringent som *tælleren* (en KPI rapporteret som en bar procentdel inviterer nævnerManipulation — se [kostpris pr. transaktion](../kostpris-pr-transaktion/) for samme fælde i digitale tjenester); byg modMålinger ind i samme dashboard snarere end en separat rapport, ingen læser, så manipulation er synlig ved beslutningsPunktet; og versionér KPI-definitionen, fordi en stille omDefinition (ændring af, hvad tæller som et "opkald", en "sag", eller en "fuldførelse") er funktionelt ækvivalent med at ændre målet uden at annoncere det. En [offentlig værdi scorecard](../offentlig-værdi-scorecard/) er en struktureret måde at stoppe en enkelt KPI fra at blive læst isoleret, og [resultat-baseret ansvarlighed](../resultat-baseret-ansvarlighed/) er disciplinen ved at vælge befolkningsNiveau-KPI'er, et enkelt team ikke kan unilateralt fordreje.

## Faldgruber

- **At vælge den let-indsamlede måling over den meningsfulde**: opkaldsBesvarelsesTid er trivielt at logge; om opkaldet løste borgerens problem, er det ikke — men kun den anden er resultatet. Modstå standard til, hvad systemet allerede udsender.
- **Ingen modMåling**: enhver KPI knyttet til penge eller rygte vil blive manipuleret ved margin; lever den med en koblet måling, der fanger den sandsynlige manipulationsVektor, før den offentliggøres.
- **At omDefinere målingen uden en ændringslog**: at bytte "opkald modtaget" for "opkald besvaret" for at smigre en tendens destruerer tidsSeriens troværdighed i det moment, det opdages — offentliggør altid en definitionsÆndringslog sammen med tallene.
- **At forveksle aktivitet med resultat**: at tælle gennemførte inspektioner er et output; at tælle lokaler bragt i overensstemmelse, er tættere på resultatet (se [resultater versus output](../resultater-versus-output/)).

## Kilder

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
