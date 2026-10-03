# Samfundsmæssig diskonteringsrate

Den samfundsmæssige diskonteringsrate konverterer fremtidige kostpriser og fordele til nutidsværdier, så programmer med udbetalinger spredt over årtier kan sammenlignes på et fælles grundlag. HM Treasurys Green Book pålægger en faldende skala forankret ved 3,5% for de første 30 år, baseret på Ramsey-formlen — et specifikt, citérbart tal, der er blevet et levende politisk og etisk argument, hver gang det anvendes på langsigtede forpligtelser som klimapolitik eller infrastruktur.

## Hvorfor det betyder noget

En krones fordel modtaget om 30 år er ikke værd en krones fordel modtaget i dag, af grunde, der delvist handler om ren tidspræference (mennesker og samfund foretrækker gode ting før) og delvist om vækst (et fremtidigt samfund forventes at være rigere, så en krone betyder mindre for det marginalt). Green Books Annex 6 udleder Storbritanniens standard diskonteringsrate fra Ramsey-formlen, der kombinerer en ren tidspræferencerate med den forventede vækstrate for forbrug og elasticiteten af marginal nytte af forbrug, hvilket producerer den offentliggjorte rate på 3,5% pr. år for år 0–30, faldende i en offentliggjort skala for år 31 og fremover (ned til 1% for år 301+). Denne skala eksisterer netop, fordi en konstant 3,5% sammensat over et århundrede ville gøre stort set enhver langsigtet fordel — et oversvømmelsesforsvar, der redder liv om 80 år, en kulstofreduktion, der undgår skade om 100 år — forsvindende i nutidsværditermer, hvilket Treasury vurderede som en usandsynlig etisk konklusion for genuint langvarig infrastruktur og miljøbeslutninger.

Diskonteringsraten er omstridt netop fordi valget ikke er en neutral teknisk parameter: det indkoder en vurdering af, hvor meget et samfund bør ofre i dag for mennesker, der endnu ikke er født. Stern Review om klimaøkonomien (2006) brugte en diskonteringsrate tæt på nul (en ren tidspræference nær 0,1%), og argumenterede, at at diskontere fremtidige generationers velfærd til noget som markedsrater er etisk uforsvarligt, når skaden (katastrofal klimaforandring) er irreversibel. Kritikere — bemærkelsesværdigt William Nordhaus — argumenterede, at Sterns næsten-nul-rate overdrev sagen for øjeblikkelige klimaudgifter ved at gøre næsten enhver nuværende kostpris berettiget mod en næsten-udiskonteret fremtidig fordel. Uoverensstemmelsen handlede ikke om matematikken; det handlede om, hvis etiske ramme der skulle sætte raten, og det forbliver den standardillustration af, hvorfor diskonteringsraten er et politisk valg, ikke blot et aktuarmæssigt input.

## Beregningen

Ramsey-formlen, der ligger til grund for Green Books rate:

```
r = ρ + η·g

hvor:
  r = samfundsmæssig diskonteringsrate
  ρ = ren tidspræferencerate (utålmodighed + katastroferisiko)
  η = elasticitet af marginal nytte af forbrug
  g = forventet årlig vækstrate for forbrug pr. indbygger
```

Green Books faldende skala (Annex 6, illustrativ — kontrollér den aktuelle udgave for den eksakte offentliggjorte tabel):

```
År 0–30:    3,5%
År 31–75:   3,0%
År 76–125:  2,5%
År 126–200: 2,0%
År 201–300: 1,5%
År 301+:    1,0%
```

Nutidsværdi af et fremtidigt beløb:

```
NV = FV / (1 + r)^t
```

## Gennemregnet eksempel

**Oversvømmelsesforsvarsprojekt**: et projekt leverer £10 millioner i undgået oversvømmelsesskade i år 40.

Ved brug af en flad 3,5% rate: NV = 10.000.000 / (1,035)^40 ≈ £2,52 millioner — fordelen ser lille ud.

Ved brug af Green Books faldende skala (3,5% for år 0–30, 3,0% derefter), sammensætter beregningen ved 3,5% for de første 30 år og 3,0% for år 31–40:

```
NV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ £2,65 millioner
```

Den faldende skala hæver moderat nutidsværdien af langsigtede fordele i forhold til en flad høj rate — skalaens explicitte formål, da en flad 3,5% i et århundrede ville diskontere en £100 millioner fordel i år 100 til under £3,3 millioner.

**Digital infrastruktur**: en statslig cloudmigrering, der koster £4 millioner nu, forventes at undgå £500.000/år i vedligeholdelsesomkostninger til legacy i 15 år. Ved 3,5% er nutidsværdien af den annuitet cirka £500.000 × 11,52 (den 15-årige annuitetsfaktor ved 3,5%) ≈ £5,76 millioner — komfortabelt overstigende de £4 millioner i kostpris, en positiv nettonutidsværdisag, der ville se markant svagere ud ved en naivt valgt højere rate (ved 7% falder samme annuitetsfaktor til cirka 9,11, hvilket giver £4,56 millioner, stadig positiv men med en meget tyndere margin).

## Forbindelse til softwareudvikling

De fleste softwarebusinesscases kører over 3–5 år, godt inden for den flade 3,5%-bånd, så den faldende skala bider sjældent direkte — men den underliggende disciplin betyder noget for enhver statslig teknologisk investering med en lang aktivlivstid (en national platform, et dataInfrastrukturprogram, en flerdekade-kontrakt):

- Brug Green Books offentliggjorte rate snarere end en intern "hurdle rate" lånt fra privat finans; revisorer og Treasury-anmeldere vil forvente standardskalaen.
- For fordele realiseret mange år ude (en platforms langsigtede vedligeholdelsesbesparelser, en open-data-økosystems sammensatte værdi — se [åbne data-værdi](../open-data-value/)), kan diskonteringsvalget vende en businesscase fra positiv til negativ; gør raten og horisonten explicitte antagelser, ikke begravede standarder.
- Dette strømmer direkte ind i [green-book-vurdering](../green-book-appraisal/), den femtrins-model, der formelt kræver en diskonteret cashflow, og ind i [velfærdsvurdering](../wellbeing-valuation/), hvor samme diskonteringsspørgsmål opstår for ikke-monetære velfærdsfordele.
- Se også [intergenerationel retfærdighed og bæredygtighedsdiskontering](../intergenerational-equity-and-sustainability-discounting/) for Stern-versus-Nordhaus-debatten anvendt specifikt på miljø- og klimateknologisk investering.

## Faldgruber

- **At bruge en flad rate for meget lange horisonter.** Green Books faldende skala eksisterer specifikt, fordi en konstant rate underdriver genuint langvarige fordele; kontrollér hvilket bånd der gælder i stedet for at falde tilbage på 3,5% hele vejen igennem.
- **At behandle diskonteringsraten som etisk neutral.** Stern-Nordhaus-striden viser, at raten indkoder en værdivurdering om fremtidige generationer; at ændre den ændrer, hvilke programmer der ser berettigede ud, så den bør angives og forsvares, ikke gemmes i en regnearkstandard.
- **At forveksle den samfundsmæssige diskonteringsrate med en privat kapitalkostpris.** Statslige lånekostpriser og private hurdle-rater er forskellige koncepter fra den Ramsey-udledte samfundsrate, og at substituere den ene for den anden i en offentlig vurdering vil typisk fordreje resultatet i retning af at favorisere kortsigtede afkast.
- **At diskontere reelle og nominelle cashflows inkonsekvent.** Green Book-raten er en reel (inflationsjusteret) rate; at diskontere nominelle cashflows med den underdriver materielt nutidsværdier.

## Kilder

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
