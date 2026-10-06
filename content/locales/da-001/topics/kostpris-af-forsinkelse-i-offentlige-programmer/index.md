# Kostpris af forsinkelse i offentlige programmer (CoD)

Kostpris af Forsinkelse er den offentlige værdi tabt pr. tidsEnhed, et program, tjeneste, eller systemÆndring *ikke endnu* er leveret. Det er master-bro-målingen i dette kapitel: det omdanner "go-live gled seks måneder" til pund pr. uge, eller til WELLBY'er pr. uge, sådan at forsinkelse kan argumenteres om i samme valuta som business-casen selv.

## Hvorfor det betyder noget

Reinertsens regel — "hvis du kun kvantificerer en ting, kvantificér Kostpris af Forsinkelse" — rejser ind i regeringen næsten uændret, fordi offentlige programmer er usædvanligt eksponerede for det: business-cases godKendes mod en forecastet fordelStrøm, men strømmen starter kun flydende ved go-live, og hver uges glidning er en uges tabt værdi, ingen prisSætter på risikoRegistret. National Audit Offices gentagne granskning af Universal Credits udRulning (se dens "Rolling Out Universal Credit"-rapporter, <https://www.nao.org.uk/>) illustrerer mønstret: tidsPlans-glidning blev sporet og rapporteret, men pund-pr.-uge-kostprisen af *ikke endnu* at levere det reformerede system til næste tranche af krævere blev sjældent angivet som en overskrifts-figur, selv om det er tallet, der skulle have drevet prioritering og eskalering. Uden en CoD-figur ser et forsinket program ud som et tidsPlans-problem for leverings-bestyrelsen; med en, er det et værdi-erosions-problem for regnskabsFøreren.

## Beregningen

```
CoD = fordel pr. tidsEnhed tabt, mens uLeveret   (£/uge eller
     WELLBY'er/uge)

Samlet forsinkelses-tab = CoD × forsinkelses-varighed

FordelStrømme at summere for offentlige programmer:
  kontant-frigørende besparelser   (svindel-/fejl-reduktion,
undgåede temporære kostpriser)
+ ikke-kontant kapacitet frigjort  (sagsBehandler-/officer-
timer × belastet kostpris)
+ velvære-fordel        (WELLBY'er × £13.000/WELLBY, HMT Green
                         Book velvære-supplerende-vejledning,
                         2019-priser)
```

For borgerVendte tjenester, denominér i velvære så vel som penge — se [velvære-justerede-livsår](../velvære-justerede-livsår/) for den underliggende enhed, og [alternativ-kostpris i offentlig udgift](../alternativkostning-i-offentlige-udgifter/) for, hvad det forsinkede pund ellers kunne have finansieret.

## Gennemregnet eksempel

**Lokal myndighed**: en boligYdelse-system-opgradering skærer overBetalings-fejl med £150/krav/år over 20.000 live-krav.

```
Årlig fordel = 150 × 20.000 = £3.000.000/år
CoD = 3.000.000 / 52 ≈ £57.700/uge
En 12-måneders-implementerings-forsinkelse kostpris-sætter
52 × 57.700 ≈ £3.000.000 i undgåelig fejl.
```

**Centralregerings-agentur**: en handicap-ydelse-vurderings-tjeneste, leveret seks måneder (26 uger) senere end planlagt, betyder, 200.000 krævere/år venter et gennemsnit tre uger længere på en beslutning. Hver ekstra uge af finansiel uSikkerhed modelleres som en −0,0018 WELLBY (liv-tilfredshed-point) effekt:

```
WELLBY-tab pr. kræver = 3 × 0,0018 = 0,0054
Årligt WELLBY-tab = 200.000 × 0,0054 = 1.080 WELLBY'er/år
CoD_velvære = 1.080 / 52 ≈ 20,8 WELLBY'er/uge
CoD_penge = 20,8 × £13.000 ≈ £270.000/uge af velvære-værdi
```

En 26-ugers-forsinkelse "kostpris-sætter" derfor groft 540 WELLBY'er — værd omkring £7 millioner ved Green Books velvære-værdiSætning — og omRammer en missed go-live-dato som en borger-velfærd-begivenhed, ikke en projekt-styrings-fodnote.

## Forbindelse til softwareudvikling

CoD er, hvad gør [DORA-målinger](../dora-målinger-for-offentlig-værdi/) og [flowMålinger](../flowmålinger-i-statslig-levering/) finansielt læsbare: ledeTid i pipeline × CoD er penge (eller velvære) brændt i køer, før det overHovedet når en borger. Konkret:

- **Prioritering**: rangordn en backLog efter CoD ÷ varighed snarere end efter interessent-senioritet — software-ingeniør-analogen til Green Books krav om at vurdere muligheder på værdi, ikke på hvem spørger.
- **Indkøb**: en 12-18-måneders framework-indkøbsCyklus har en CoD; at prisSætte den ændrer urgens-casen for accelererede ruter, og fødrer direkte ind i [byg-versus-køb](../byg-versus-køb-i-regeringen/)-beslutninger, hvor tid-til-værdi er en beslutningsDriver.
- **FordelsCase**: hver CoD-figur citeret ved godKendelse bør genOpstå ved [fordelsRealisering](../fordelsrealisering/) — hvis forsinkelses-kostprisen var rigtig, bør den accelererede fordel være målbar efter go-live.

## Faldgruber

- **At antage lineær CoD.** Nogle offentlige tjenester har deadline-formet værdi (en statutorisk compliance-dato — CoD springer til enforcement-risiko-niveauer efter datoen, nær nul før) snarere end en jævn ugentlig rate. KlasseFicér urgens-profilen, før du multiplicerer.
- **CoD på output, ingen behøver.** Forsinkelse har kun en kostpris, hvis den uLeverede ting har værdi; et system, ingen vil bruge, har nul CoD, uanset hvor sent det er.
- **Dobbelttælling af forsinkelse og diskontering.** [Social diskonteringsRate](../samfundsmæssig-diskonteringsrate/) prisSætter allerede tid på multi-års-vurderings-horisonter; CoD er den inden-i-horisont, operationelle version for uger og måneder. Brug CoD for tidsPlans-glidning, NPV-skift for multi-års-ReFasering.

## Kilder

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
