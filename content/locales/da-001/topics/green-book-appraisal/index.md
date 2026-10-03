# Green Book-vurdering (femtrins-model)

Green Book er HM Treasurys obligatoriske vejledning til vurdering og evaluering af britiske statslige udgiftsforslag. Dets centrale redskab, femtrins-modellen, tvinger en businesscase til at besvare fem separate spørgsmål — er det en god idé, leverer det værdi, kan det indkøbes, kan det betales, og kan det leveres — snarere end at kollapse alt til et enkelt tal, en minister kan vinke igennem.

## Hvorfor det betyder noget

Hvert britisk centralstatsligt udgiftsforslag over departementale delegerede grænser skal gennemgå Green Book-vurdering, før finansiering frigives, og HM Treasurys Green Book Review 2020 (udgivet efter kritik om, at processen var biased mod fattigere regioner, se <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) strammede kravet om, at muligheder sammenlignes mod en genuin "gør minimum"-baseline, og at strategisk fit demonstreres, før value for money overhovedet vurderes. Femtrins-modellen selv går forud for Green Book — den stammer fra Office of Government Commerce som standard businesscase-struktur — men 2022-udgaven af Green Book indlejrer den som den obligatoriske form for enhver businesscase, der søger Treasury-godkendelse: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Pointen med at splitte sagen fem veje er, at et forslag kan fejle på enhver dimension uanset de andre. En strategisk sund, kosteffektiv IT-replatform kan stadig fejle den kommercielle sag, hvis kun en leverandør kan levere den (hvilket skaber enkelt-udbuds-risiko), eller fejle forvaltningssagen, hvis departementet ikke har en track record for at levere programmer af den størrelse. En enkelt "value for money"-score skjuler netop denne type fejltilstand.

## Beregningen

Femtrins-modellen er en struktur, ikke en formel, men hver sag har sin egen kvantitative eller evidensmæssige test:

```
1. Strategisk sag
   Evidens for et udgiftsmål knyttet til organisatorisk
   strategi.
   Test: er der en sag for forandring overhovedet? ("gør
   ingenting" er altid en mulighed.)

2. Økonomisk sag
   Vurdering af muligheder mod en "gør minimum"-baseline,
   ved brug af samfundsøkonomisk cost-benefit-analyse eller
   kosteffektivitetsanalyse.
   Test: hvilken mulighed maksimerer nettooffentlig værdi?
   Se ../social-cost-benefit-analysis/ og
   ../cost-effectiveness-analysis-in-government/

3. Kommerciel sag
   Markedsengagement, indkøbsvej, risikofordeling mellem
   køber og leverandør.
   Test: er den foretrukne mulighed indkøbelig på
   acceptable betingelser?

4. Finansiel sag
   Betalbarhed inden for departementale budgetgrænser,
   finansieringskilde, balanceregnskabsbehandling.
   Test: kan vi betale for det, dette år og hvert år
   derefter?

5. Forvaltningssag
   Governance, projektplan, fordelsrealiseringsplan,
   risikoregister.
   Test: kan denne organisation faktisk levere det?
   Se ../benefits-realization/
```

Den økonomiske sag er hvor den kvantitative vurdering bor: muligheder sammenlignes på et grundlag justeret af [samfundsmæssig diskonteringsrate](../social-discount-rate/) nettonutidsværdi, ved brug af [samfundsøkonomisk cost-benefit-analyse](../social-cost-benefit-analysis/)-metoden, eller, hvor fordele ikke ærligt kan pengegøres, via [kosteffektivitetsanalyse](../cost-effectiveness-analysis-in-government/) eller [multikriterie-beslutningsanalyse](../multi-criteria-decision-analysis/).

## Gennemregnet eksempel

**Lokal myndighed**: en kommune, der vurderer et £12 millioner boligreparations-IT-system, kører de fem sager som følger. Strategisk sag: reparationseftersonet overskrider den lovfæstede anstændig-hjem-standard inden 18 måneder uden intervention. Økonomisk sag: tre muligheder kostpris-beregnet over en 10-års vurderingsperiode ved en 3,5% diskonteringsrate (i henhold til 2022-udgavens standard samfundsmæssig tidspræferencerate) — "gør minimum" (lap legacy-systemet, NPV −£4,1m), "køb" (COTS-platform, NPV +£2,3m), "byg" (skræddersyet platform, NPV +£0,6m når 40% optimismebias for softwareudvikling anvendes mod den udiskonterede kapitalkostpris, i henhold til Green Book Annex A). Køb vinder den økonomiske sag. Kommerciel sag: to brugbare leverandører eksisterer, konkurrencedygtigt udbud er muligt — bestås. Finansiel sag: kapital tilgængelig fra Public Works Loan Board, driftsomkostninger passer inden for den mellemsigtede finansielle plan — bestås. Forvaltningssag: kommunen har leveret to sammenlignelige systemer inden for de sidste fem år — bestås. Forslaget fortsætter med "køb."

**Centralt statsligt departement**: et forslag med en stærk økonomisk sag (NPV +£40m), men hvor kun en leverandør har den relevante akkreditering, fejler den kommercielle sagstest for konkurrencemæssig spænding, hvilket tvinger enten en enkelt-udbuds-dispensation (med sin egen granskningsbelastning) eller en redesign af specifikationen til at åbne markedet — den økonomiske sag alene ville aldrig have afsløret dette.

## Forbindelse til softwareudvikling

Tekniske teams inden i regeringen eller bevillingsFinansierede organisationer ser normalt kun den økonomiske sag, fordi det er den del, produkt- og teknisk ledelse bliver bedt om at retfærdiggøre ("hvad er ROI'en for denne migrering?"). Men en businesscase, der overlever Treasury eller et bevillingsudvalg, behøver alle fem, og ingeniører er ofte de bedst placerede personer til at besvare den kommercielle sag (kan dette faktisk indkøbes, eller låser det os ind i en leverandørs proprietære format?) og forvaltningssagen (har vi leveringsEvnen, eller afhænger dette af tre specifikke personer, der ikke forlader?). Behandl en anmodning om "blot businesscase-tallene" som en anmodning om en femtedel af den faktiske beslutning. Se [value for money](../value-for-money/) for hvordan den økonomiske sags output normalt opsummeres, og [samlede ejerskabsomkostninger](../total-cost-of-ownership-in-government-it/) for den finansielle sags normale kvantitative kerne.

## Faldgruber

- **At skrive den økonomiske sag først og den strategiske sag for at matche den.** Green Book Review 2020 fandt netop denne fejltilstand drivende vurderingsbias mod steder og sektorer, der allerede var veldokumenterede, cementerende regional ulighed; den strategiske sag bør etablere målet, før muligheder sammenlignes.
- **At behandle "gør minimum" som "gør ingenting".** Den korrekte baseline er den billigste mulighed, der stadig opfylder minimale juridiske eller sikkerhedsforpligtelser, ikke et fantasi om nul udgift — at sammenligne mod litterært nul opblæser enhver mulighedens tilsyneladende værdi.
- **At springe de kommercielle og forvaltningsmæssige sager over, fordi den økonomiske sag er stærk.** Et forslag med høj NPV, der ikke kan indkøbes konkurrencedygtigt eller leveres af den sponsorerende organisation, er ikke et finansierbart forslag; Treasury-anmeldere afviser rutinemæssigt på disse grunde selv med en overbevisende økonomisk sag.
- **At anvende femtrins-modellen en gang, i starten.** Green Book kræver, at sagen genbesøges ved hver efterfølgende godkendelsesport (strategisk skitsesag, skitseret businesscase, fuld businesscase), mens kostpriser og evidens fasttøres — en sag frosset ved skitsestadiet går glip af kostpriseskalation, som en senere port ville have fanget.

## Kilder

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
