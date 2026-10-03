# Samlet ejerskabskostpris (TCO) i statslig IT

Samlet ejerskabsKostpris er den fulde livscyklus-kostpris af et system — anskaffelse plus hvert år af at køre det — diskonteret til en fælles dato. I statslig IT er den enkelte mest pålidelige forecast-fejl at sammenligne leverandører eller muligheder på anskaffelsesPris alene, når drift og vedligeholdelse typisk udgør et sted mellem halvdelen og fire-femteDele af livstids-regningen.

## Hvorfor det betyder noget

HM Treasurys Green Book kræver, den finansielle case i enhver Five-Case-Model-business-case dækker helLivs-kostpriser, ikke blot kapitalUdgift — alligevel har National Audit Office gentagne gange fundet departementer, der godKender IT-investeringer mod en inkomplet eller optimistisk drifts-kostpris-forecast, kun for at opDage den sande drifts-kostpris, når systemet er live og kapital-budget-linjen er lukket. Government Digital Service og Central Digital and Data Offices Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) skubber departementer mod cloud- og kommodity-hosting delvist, fordi det gør den løbende kostpris synlig og sammenlignelig, snarere end begravet inde i en enkelt kapital-indkøbs-figur, der ser attraktivt lav ud ved godKendelse og dyrt forkert ud tre år senere.

## Beregningen

```
TCO = AnskaffelsesKostpris + Σ(t=1..N) Årlig drifts-kostpris_t
      / (1+r)^t − restVærdi (diskonteret)

r = HM-Treasury-Green-Book-standard-social-diskonteringsRate,
    3,5%/år (faldende rate-skema for horisonter forbi 30 år)

Drifts-kostpris-komponenter: hosting/licensering, support og
vedligeholdelse, sikkerheds-patching og compliance,
personaleTid, planlagt refresh/migration
```

Se [social diskonteringsRate](../social-discount-rate/) for, hvorfor diskonterings-faktoren betyder noget over en typisk 5-10-års-system-livstid, og [byg-versus-køb i regeringen](../build-vs-buy-in-government/) for, hvordan TCO fødrer en byg-/køb-beslutning.

## Gennemregnet eksempel

Et departement sammenligner to sagsStyringsSystemer over en 5-års-horisont ved Green Books 3,5%-diskonteringsRate.

```
System A: capex £3.500.000, opex £250.000/år
System B: capex £1.800.000 (ser billigere ud), opex
          £650.000/år (tungere leverandør-support og
          integrations-byrde)

Naiv sammenligning på capex alene: B vinder, £1,8M < £3,5M.

Diskonterings-faktor-sum, 5 år ved 3,5%: 0,966+0,934+0,902
+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750
     = £4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750
     = £4.734.750
```

TCO vender den naive beslutning: System B er marginalt dyrere over fem år, når drifts-kostpris er diskonteret og summeret, fordi dets opex-andel af livstids-kostpris er 62% (2.934.750 / 4.734.750) mod System A's 24% — en konkret instans af "vedligeholdelse er majoriteten af regningen"-fundet, helt skjult ved at sammenligne pris-skilte.

## Forbindelse til softwareudvikling

TCO er tallet, der bør disciplinere hver [byg-versus-køb](../build-vs-buy-in-government/)-beslutning og hver [teknisk-gæld](../technical-debt-as-public-value-erosion/)-afBetalings-sag, fordi gæld-rente og udSkudt vedligeholdelse begge er drifts-kostpris-linjer, der tilhører samme diskonterede total, uanset om nogen har sporet dem. Ingeniører, der foreslår et platform- eller leverandør-valg, bør præsentere den fulde TCO-tabel, ikke indkøbs-prisen, fordi indkøbs-prisen er netop tallet, Green Books finansielle case var designet til at stoppe departementer fra at stole på alene. TCO er også den ærlige nævner for [value-for-money](../value-for-money/)-bedømmelser — VFM sammenligner fordel med kostpris, og en underTalt kostpris-linje inflaterer hver VFM-ratio i business-casen.

## Faldgruber

- **Capex-kun-sammenligning.** Den enkelte mest almindelige indkøbs-fejl — at sammenligne leverandør-listePriser uden en matchet drifts-kostpris-forecast for hver mulighed.
- **At udeLukke exit- og migrations-kostpriser.** Kontrakt-slut-dataUdtrækning, re-platformering, og leverandør-lock-in-straffe er rigtige TCO-linjer, der sjældent viser sig i den oprindelige business-case.
- **At udeLukke sikkerheds- og compliance-kostpris.** Patch-kadence, akkrediterings-fornyelse, og revisions-kostpris skalerer med system-alder og -kompleksitet — se [statslig cybersikkerhedsVærdi](../public-sector-cybersecurity-value/) — og udeLades routinemæssigt fra opex-forecasten.
- **UDiskonteret sammenligning over muligheder med forskellige kostpris-profiler.** At sammenligne en capex-tung mulighed til en opex-tung en uden diskontering favoriserer systematisk hvilken mulighed, der tilfældigvis udSkyder mere kostpris til senere år.

## Kilder

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
