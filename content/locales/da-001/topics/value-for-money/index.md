# Value for money (VFM)

Value for money er den britiske offentlige sektors formelle test af, om udgifter opnår den bedste tilgængelige balance mellem kostpris og nytte. HM Treasurys Green Book rammer det ind gennem tre "E'er" — økonomi, effektivitet, og virkning — med lighed i stigende grad argumenteret som en omstridt fjerde. Enhver businesscase i den offentlige sektor, der overlever granskning, skal besvare alle tre explicit, ikke blot hævde, at udgiften er "værd det".

## Hvorfor det betyder noget

VFM er ikke et synonym for "billigt". Green Book (HM Treasury, 2022-udgaven) er explicit om, at at købe den billigste mulighed (økonomi) uden at kontrollere, om den producerer de tilsigtede resultater (virkning), er en almindelig og dyr fejl — et indkøb, der sparer 10% på enhedsomkostning, men leverer 40% mindre effekt, er dårligere værdi, ikke bedre. Tre-E-rammen tvinger en businesscase til at skelne mellem tre genuint forskellige fejltilstande: at betale for meget for input, at spilde input i konvertering til output, og at producere output, der ikke omsættes til resultater, nogen ønskede. Britiske statslige udgiftskontroller — Treasury-godkendelsespunkter, National Audit Office (NAO) value-for-money-undersøgelser, og departementale regnskabschefvurderinger — er bygget omkring denne tredelte test, så en teknisk businesscase, der kun adresserer kostpris (økonomi), vil mislykkes under granskning, selv om teknologien er sund.

Den "fjerde E", lighed, er omstridt netop fordi den kan konflikte med de andre tre: den mest effektive måde at levere en tjeneste nationalt er sjældent den mest lige, da at koncentrere levering, hvor det er billigst at nå borgere, ofte betyder underbetjening af de sværest tilgængelige. Green Books 2020-revision reagerede på kritik (herunder fra Treasury Select Committee 2020 og IPPR North) om, at rene kost-nytte-forhold systematisk favoriserede allerede velstående regioner, ved at kræve, at vurderinger adresserer distributionsmæssig effekt explicit — se [distributionsmæssig vægtning](../distributionsmæssig-vægtning/).

## Beregningen

VFM er ikke et enkelt forhold, men en tredelt (eller firedelt) diagnostik, anvendt i sekvens:

```
Økonomi:        Er input købt til den lavest rimelige
                kostpris for den krævede kvalitet? (£ pr.
                enhed input)

Effektivitet:   Hvor godt konverteres input til output?
                (output / input, f.eks. sager behandlet pr.
                sagsbehandlertime)

Virkning:       Producerer outputtene faktisk de tilsigtede
                resultater? (resultater opnået / resultater
                tilsigtet)

[Lighed]:       Er kostpriser og fordele fordelt retfærdigt
                på tværs af befolkningen, eller koncentreret
                på dem med mindst behov?
```

Et VFM-svigt kan forekomme på hvert trin uafhængigt: økonomisk indkøb med ineffektiv levering; effektiv levering af det forkerte output; virkningsfulde resultater købt til en overdreven kostpris. Se [KPI'er i den offentlige sektor](../kpier-i-den-offentlige-sektor/) for, hvordan disse omsættes til målbare indikatorer, og [kosteffektivitetsanalyse i regeringen](../kosteffektivitetsanalyse-i-regeringen/) for den formelle sammenligningsmetode.

## Gennemregnet eksempel

**Lokal myndigheds kontaktcenter**: en kommune sammenligner to muligheder for et nyt sagsstyringssystem.

- *Mulighed A*: £600.000 licens (billigst tilgængelig), men agenter bruger stadig i gennemsnit 22 minutter pr. sag, fordi arbejdsgangen kræver manuel genindtastning mellem systemer — effektiviteten er dårlig.
- *Mulighed B*: £900.000 licens, integreret arbejdsgang, agenter bruger i gennemsnit 9 minutter pr. sag.

Økonomi alene favoriserer A (£300.000 billigere). Men ved 40.000 sager/år koster A 40.000 × 22/60 = 14.667 personaletimer; B koster 40.000 × 9/60 = 6.000 personaletimer. Ved en fuldt belastet personaleomkostning på £28/time koster A £410.667/år i personaletid versus Bs £168.000/år — et effektivitetsgab på £242.667/år, der opsluger den £300.000 forudgående økonomiforskel inden for 14 måneder. VFM favoriserer B, når effektivitet medregnes, ikke A.

**Velgørenhedsleveringsbevilling**: en finansierer sammenligner en bevilling på £50.000, der opnår 200 succesfulde jobplaceringer (£250/placering — tilsyneladende fremragende økonomi) mod en bevilling på £120.000, der opnår 350 placeringer, der varer over 12 måneder versus den første bevillings placeringer, hvoraf halvdelen bortfalder inden for 3 måneder. Virkning — holdbare resultater — vender den tilsyneladende VFM-rangering: den sande kostpris pr. *holdbar* placering er £250 ÷ 0,5 = £500 for den første bevilling, versus £120.000/350 ≈ £343 for den anden.

## Forbindelse til softwareudvikling

VFM giver tekniske teams en disciplin for at indramme teknologiske businesscases på den måde, finans- og revisionsfunktioner faktisk vil læse dem:

- Angiv økonomi, effektivitet, og virkning som separate linjeposter i en businesscase, ikke et enkelt blandet "værdi"-tal — en revisor trænet på Green Book vil bede om netop denne opdeling.
- Vær forsigtig med at optimere indkøbsomkostning (økonomi) på bekostning af integration og arbejdsgangseffektivitet, en meget almindelig falsk besparelse i statslig IT (se [samlede ejerskabsomkostninger i statslig IT](../samlet-ejerskabskostpris-i-statslig-it/) og [byg versus køb i regeringen](../byg-versus-køb-i-regeringen/)).
- Virkning kræver resultatdata, ikke blot outputtællinger — forbind leveringsmålinger til [resultater versus output](../resultater-versus-output/) og til reel evaluering via [kontrafaktisk analyse](../kontrafaktisk-analyse/) snarere end at antage, at output indebærer resultater.
- Når et system betjener ujævnt på tværs af regioner eller demografi, er lighedsspørgsmålet en legitim VFM-indsigelse, ikke en separat "pænt at have" — se [digital inklusion](../digital-inklusion/).

## Faldgruber

- **At ligestille VFM med lavest pris.** Økonomi er en tredjedel (eller en fjerdedel) af testen; Green Book advarer explicit mod "lavest kostpris"-indkøbsregler, der ignorerer effektivitet og virkning.
- **At måle output og kalde dem resultater.** Sagsgennemløb (effektivitet) er ikke det samme som sager løst godt (virkning); se [resultater versus output](../resultater-versus-output/).
- **At behandle lighed som valgfri.** Siden Green Books 2020-opdatering er distributionsmæssig effekt meningen at blive vurderet sammen med de traditionelle tre E'er, ikke sat på efterfølgende; at eftermontere det efter en businesscase er godkendt, er langt sværere end at inkludere det fra starten.
- **At sammenligne muligheder ved forskellige volumener uden normalisering.** En VFM-sammenligning pr. enhed på tværs af muligheder, der betjener forskellige befolkninger, skal kontrollere for skala, ellers er effektivitetssammenligningen meningsløs.

## Kilder

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
