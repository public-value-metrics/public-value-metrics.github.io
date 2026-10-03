# Betaling-efter-resultater og sociale virkningsobligationer (PbR/SIB'er)

Betaling-efter-resultater (PbR) betaler en udbyder baseret på verificerede opnåede resultater, ikke udførte aktiviteter. En social virkningsObligation (SIB) er en specifik PbR-finansieringsStruktur, hvor private eller filantropiske investorer finansierer tjenesteLevering på forhånd og tilbagebetales — med en afkast — af en statslig ordregiver kun hvis uafhængigt målte resultater når aftalte tærskler, hvilket flytter leveringsRisikoen fra skatteYderen til investoren.

## Hvorfor det betyder noget

Verdens første SIB lancerede ved HMP Peterborough i september 2010: Social Finance rejste £5 millioner fra 17 investorer for at finansiere "One Service," der arbejdede med kortDoms-fanger (under 12 måneder) for at skære ned på recidiv, med Justitsministeriet og Big Lottery Fund, der accepterede at tilbagebetale investorer kun, hvis genDomsHændelser faldt med mindst 7,5% mod en matchet national sammenligningsKohorte. Den endelige kohorte af Peterborough-pilotenregistrerede en 9,7%-reduktion i genDomme, komfortabelt over tærsklen, og investorer blev tilbagebetalt med et afkast. Mekanismen betød noget, fordi den løste et specifikt bestillingsProblem: regeringen ønskede at betale for resultater snarere end input, men kunne ikke absorbere den finansielle risiko ved en intervention, der måske ikke fungerede, så SIB-strukturen flyttede den risiko over på investorer villige til at underskrive den. Government Outcomes Lab (GO Lab) ved Oxfords Blavatnik School of Government vedligeholder nu den mest komplette offentlige evidensBase om PbR- og SIB-præstation verdensOmspændende, der sporer vel over 200 virkningsObligationer globalt og offentliggør forskningen om, hvilke designTræk korrelerer med succes eller fejl. Lektionen, evidensBasen gentagne gange vender tilbage til, er, at den *valgte resultatMåling*, og hvem der bærer risikoen for at misse den, bestemmer næsten alt andet om, hvordan en PbR-kontrakt faktisk opfører sig i praksis.

## Beregningen

```
PbR-betaling = basisBetaling (hvis nogen) + Σ (opnået resultat
              × enhedsPris pr. resultat)

Social virkningsObligation investorAfkast:
  InvestorUdlæg       = forhåndsKapital finansierende
                         tjenesteLevering
  ResultatBetaling     = ordregiver betaler kun hvis resultat
                         ≥ tærskel, skaleret af hvor langt over
                         tærskel præstationen lander
  InvestorAfkast       = modtagne resultatBetalinger −
                         investorUdlæg (en afkastRate, ofte
                         begrænset, der reflekterer risiko
                         taget)

NøgleDesignParametre, der bestemmer hele kontraktens adfærd:
  ResultatMåling              — skal være et resultat, ikke et
                                output (se resultater-versus-
                                output)
  Sammenligning/kontrafaktual  — normalt en matchet kohorte (se
                                kontrafaktisk analyse)
  BetalingsTærskel             — minimumForbedring før nogen
                                betaling udløses
  BetalingsKurve               — lineær, trinvis, eller
                                begrænset over tærsklen
  Tilskrivnings-/dødvægts-     — se tilskrivning-og-dødvægt
    rabat
```

## Gennemregnet eksempel

**Peterborough One Service** (illustrative tal trukket fra offentliggjorte evalueringer):

```
InvestorKapital rejst:             £5.000.000
Kohorte:                            ~3.000 kortDoms-mandlige
                                    fanger over to kohorter
Tærskel:                            ≥7,5% reduktion i genDoms-
                                    Hændelser vs. matchet
                                    national sammenligningsGrup
                                    pe, eller ingen betaling
Kohorte-1-resultat:                 8,4% reduktion — under den
                                    kontraktlige bar for den
                                    kohorte alene under de
                                    oprindelige regler
Kombineret/endeligt kohorte-resultat: 9,7% reduktion — over
                                    tærskel
Resultatbetaling:                   regering (Justitsministeri
                                    et/Big Lottery Fund)
                                    betaler pr. procentpoint
                                    over tærskel, finansierende
                                    investorTilbagebetaling
                                    plus et afkast
```

**Lokal myndigheds PbR-kontrakt (illustrativ)**: en familieInterventionsTjeneste bestilles ved £4.000 pr. familie henvist (aktivitetsBetaling) plus £6.000 pr. familie uden yderligere børneBeskyttelsesHenvisning 12 måneder efter afslutning (resultatBetaling). 200 familier henvist, 150 sager afsluttet, 96 forbliver henvisnings-fri ved 12 måneder:

```
AktivitetsBetaling    = 200 × £4.000 = £800.000
ResultatBetaling       = 96 × £6.000  = £576.000
SamletKontraktKostpris = £1.376.000 for 96 bekræftede varige
                        resultater
Kostpris pr. bekræftet resultat ≈ £14.333 (se kostpris-pr.-
resultat)
```

## Forbindelse til softwareudvikling

Betaling-efter-resultater er et incitamentsJusterings-problem, før det er et dataProblem, og dataSystemet er, hvor den justering enten holder eller brydes. Uafhængig, manipulations-synlig resultatVerifikation er hele spillet: ordregiveren og udbyderen har modsatte incitamenter om, hvordan en ambivalent sag kodes, så systemet, der registrerer resultater, behøver en revisionsSpor, en dataDelingsAftale med den uafhængige verifikator (ofte et andet organ end udbyderen, nogle gange et officielt statistikOrgan, der matcher mod politi- eller ydelsesRegistre), og uforanderlig versionering af resultatDefinitionen — PbR-ækvivalenten af "omDefinering af målingen"-fælden i [KPI'er i den offentlige sektor](../public-sector-kpis/). TilskrivningsBeregninger afhænger af [kontrafaktisk analyse](../counterfactual-analysis/)-matchet-kohorte-metoder, der behøver reproducerbar, revisibel kode, ikke et enkeltstående regneark. Og målingen selv skal være et genuint resultat, ikke en proxy-aktivitet — se [resultater versus output](../outcomes-vs-outputs/) — fordi en PbR-kontrakt, der betaler for et output, blot omMærker business-as-usual-finansiering med ekstra transaktionsKostpris. Hvor en SIBs sociale afkast modelleres prospektivt, låner den vurdering typisk direkte fra [socialt afkast på investering](../social-return-on-investment/)-metodologi.

## Faldgruber

- **At betale for en let-manipuleret proxy-resultat.** "Fremmøde ved sessioner" er en aktivitet klædt som et resultat; insister på en måling, der reflekterer den faktiske ændring søgt (recidiv, beskæftigelse, boligStabilitet).
- **Ingen troværdig kontrafaktual.** Uden en matchet sammenligningsGruppe kunne en forbedring være regression mod middelværdien eller en bredere tendens, ikke programmets effekt — se [kontrafaktisk analyse](../counterfactual-analysis/) og [tilskrivning og dødvægt](../additionality-and-deadweight/).
- **At underestimere transaktions- og evalueringsKostpriser.** Uafhængig verifikation, dataSammenkædning, og kontraktAdministration for PbR/SIB-skemaer løber routinemæssigt ind i dobbeltCifrede procentdele af kontraktVærdi — GO Labs evidensBase dokumenterer dette som en tilbageVendende driver af skemaAfbrydelse.
- **"Cherry-picking" eller "parkering".** Udbydere betalt pr. resultat har et direkte incitament til at prioritere klienter mest sandsynligt at lykkes alligevel og deprioritere de hårdeste sager — design betalingsLag eller sagsBlanding-justering for at modvirke det.

## Kilder

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
