# Statslig cybersikkerhedsværdi

Statslig cybersikkerhedsVærdi er disciplinen at prisSætte risikoReduktion: hvad er det værd at gøre et brud på borgerData mindre sandsynligt, givet at sikkerhedsUdgift producerer intet synligt output, når den virker, og en meget synlig en, når den fejler? For en tjeneste, der holder ydelsesRegistre, sundhedsData, eller skatteRegistre, er den "usynlig-når-virkende"-egenskab netop, hvorfor den behøver et explicit værdi-argument, ikke blot en compliance-afKrydsning.

## Hvorfor det betyder noget

UK National Cyber Security Centres Cyber Assessment Framework (CAF) giver statslige organisationer en struktureret måde at gøre sikkerhed til en vurderbar, resultat-baseret disciplin snarere end en checkListe: det definerer fire højt-niveau-mål (styring af sikkerhedsRisiko, beskyttelse mod cyberAngreb, detektion af cyberSikkerhedsHændelser, og minimering af incidenters impact) brudt ind i bidragende resultater, en systemEjer kan vurderes mod, i samme ånd som [digital tjenesteStandard](../digital-service-standard/)s punkt 9 ("skab en sikker tjeneste, der beskytter brugeres privatHed"). Hvad CAF-vurdering beskytter mod har en dokumenteret prisEtiket: IBMs Cost of a Data Breach Report sporer gennemsnitlig brud-kostpris efter sektor, og har konsekvent fundet den offentlige sektor mod den lavere ende af intervallet sammenlignet med finans eller sundhedsVæsen — seneste udgaver sætter den offentlige-sektor-gennemsnit omkring $2,6-2,9 millioner pr. brud — men "lavere end finans" er ikke "lav," og statslige brud bærer kostpriser, rapportens tal ikke fuldt fanger: tab af borgerTillid til digitale kanaler, hvilket undertrykker den [digitale optagelse](../channel-shift-savings/), kanalSkift-business-cases afhænger af, og den politiske og juridiske kostpris af at eksponere data, staten tvang borgere til at overLevere i første omgang.

## Beregningen

SikkerhedsInvestering værdiSættes, som al risikoReduktions-udgift værdiSættes: som en forventet-tab-reduktion, ved brug af den klassiske risiko-styrings-identitet.

```
AnnualiseretTabForventning (ALE) = EnkeltTabForventning (SLE)
                                  × AnnualiseretForekomstRate
                                  (ARO)

Værdi af en sikkerhedsKontrol =
  ALE_før_kontrol − ALE_efter_kontrol − årlig kostpris af
  kontrollen

En kontrol er værd at finansiere, når:
  (ALE_før − ALE_efter) > årlig kostpris af kontrollen

CAF-vurdering udSender ikke direkte en sandsynlighed, men en
tjenestes CAF-resultat-profil (hvilke bidragende resultater er
"opnået," "delvist opnået," eller "ikke opnået") er et
rimeligt proxy-input til at estimere ARO — et system med
uStyret privilegeret adgang eller ingen testet incident-
respons-plan har en materielt højere realistisk ARO end en
med begge på plads.
```

## Gennemregnet eksempel

**AmtsKommunes sagsStyringsSystem, der holder socialOmsorgsRegistre for 40.000 indbyggere**:

```
EnkeltTabForventning (brud-kostpris), ved brug af en offentlig-
sektor-gennemsnit fra en seneste IBM Cost of a Data Breach
Report ≈ £2,1m (konverteret, størrelsesOrden-figur — altid
genUdled fra den aktuelle rapport-udgave snarere end at
genBruge et fast tal)

Aktuel ARO (uStyret privilegeret adgang, ingen testet
incident-respons, per en intern CAF-selvVurdering, der viser
multiple "ikke opnået"-resultater) ≈ estimeret 8% pr. år
  ALE_før = £2,1m × 0,08 = £168.000/år

Foreslået kontrol: privilegeret-adgangs-styring + testet
incident-respons-plan, der flytter de relevante CAF-resultater
til "opnået", estimeret at skære ARO til 3%/år
  ALE_efter = £2,1m × 0,03 = £63.000/år

Årlig kostpris af kontrollen (redskaber + proces + testning)
= £45.000

Værdi af kontrollen = (168.000 − 63.000) − 45.000 = £60.000/år
  netto positiv — finansiér den. Aritmetikken viser også,
  kontrollen stadig ville være værd at finansiere ved næsten
  tre gange kostprisen, hvilket er den type sensitivitets-
  kontrol, der bør følge enhver ALE-figur bygget på
  estimerede sandsynligheder.
```

## Forbindelse til softwareudvikling

Ingeniører ejer de fleste af greHåndtagene i ALE-ligningen: adgangsKontrol-design, afhængighedsOg patch-hygiejne, logning- og detektions-dækning, og incident-respons-redskaber flytter alle ARO-termen direkte, hvilket er hvorfor CAF-vurdering læser som en teknisk arkitektur-gennemGang lige så meget som et politik-revisions. Dette er [teknisk gæld som offentlig-værdi-erosion](../technical-debt-as-public-value-erosion/) i sin mest akutte form — uPatchede, uMonitorerede, dårligt-adgangs-kontrollerede systemer er gæld, hvis renteBetaling er tail-risk, ikke en stabil træk — og det bør forEnes mod [samlet ejerskabsKostpris i statslig IT](../total-cost-of-ownership-in-government-it/), så sikkerhedsUdgift ikke behandles som separat fra systemets rigtige driftsKostpris. Det er også et direkte input til [value-for-money](../value-for-money/)-vurderinger under Green Book: risiko-justeret kostpris er del af "kostpris"-siden af enhver mulighedsVurdering, ikke en eftertanke boltet på til sidst.

## Faldgruber

- **At behandle CAF-selvVurdering som sikkerhed selv.** En fuldført vurdering beskriver en sikkerhedsPosition; den skaber ikke en — værdien er i de opnåede resultater, ikke dokumentet.
- **At bruge globale gennemsnit-brud-kostpriser som et lokalt estimat uden justering.** IBMs figurer er gennemsnit over store, varierede samples; en lille lokal myndigheds realistiske enkeltTabForventning er sjældent samme som et national-regerings-departements.
- **At ignorere tail-risk-psykologi i investerings-beslutninger.** En lav årlig sandsynlighed gør sikkerhedsUdgift let at udSkyde uendeligt, lige op til det år, den ikke er — sensitivitets-testning af ALE-beregningen mod et interval af AROer, som i det gennemregnede eksempel, modvirker dette.
- **Kun at tælle den IBM-stil-brud-kostpris, ikke tillids-kostprisen.** Et brud, der undertrykker borgerVillighed til at bruge digitale kanaler, eroderer [kanalSkift-besparelser](../channel-shift-savings/)-casen for år efterfølgende, en kostpris sjældent inkluderet i brud-kostpris-estimater.

## Kilder

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
