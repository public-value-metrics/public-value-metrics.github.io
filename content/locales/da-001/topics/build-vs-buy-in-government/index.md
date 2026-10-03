# Byg versus køb i regeringen

Byg-versus-køb er en struktureret, risiko-justeret sammenligning af skræddersyet udvikling mod kommerciel eller kommodity-anskaffelse, sammenlignet på diskonteret [samlet ejerskabsKostpris](../total-cost-of-ownership-in-government-it/), tid-til-værdi, og risiko. Regeringen er strukturelt en købe-sektor — Technology Code of Practice sætter en formodning mod kommodity- og cloud-løsninger — alligevel standardiserer ingeniørTeams inden i departementer stadig til at bygge, af samme grunde, byggere alle vegne gør.

## Hvorfor det betyder noget

Government Digital Services Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) og den ledsagende Service-Manual-vejledning om at beslutte, hvorvidt at bygge eller købe, skubber departementer til at retfærdiggøre skræddersyet udvikling mod en formodning, at kommodity-kapacitet bør købes, ikke bygges, og at kun genuint nye, mission-differentierende kapacitet retfærdiggør skræddersyet kode. HM Treasurys optimisme-bias-supplerende-vejledning til Green Book, trukket fra 2002-Mott-MacDonald-gennemGangen af store offentlige indkøb, giver IT-projekter det bredeste opJusterings-interval af nogen kategori vurderet — kapitalKostpris-estimater anbefalet for opJustering med 10% ved den lave ende og op til 200% ved den høje ende, før de bruges i vurdering, reflekterende hvor dårligt software-byg historisk er underEstimeret over offentligt indkøb. Byg-versus-køb-analyse eksisterer netop for at tvinge den risiko-justering ind på bordet før godKendelse, snarere end at lade den eksponere sig som en inden-i-år-overUdgifts-anmodning.

## Beregningen

```
Sammenlign over samme 3-5-års-horisont, diskonteret ved
Green-Book-social-diskonteringsRate (se social-discount-
rate.md):

NPV_mulighed = PV(fordele, skiftet af tid-til-værdi) −
               PV(TCO)

Risiko-justeringer (Green-Book-optimisme-bias-mønster):
  byg-kostpris × 1,1-3,0        (IT-projekt-opJusterings-
                                 interval, Mott MacDonald)
  byg-tid-til-værdi + 40-60%    (deployment-forsinkelse-prior)
  køb: tilføj integrations-realitets-kontrol og kontrakt-
       exit-kostpriser i stedet

Beslutnings-drivere, i den orden de normalt beslutter:
  1. differentiering — er denne kapacitet missionen, eller
     rørFøring?
  2. tid-til-værdi × kostpris af forsinkelse (se cost-of-
     delay-in-public-programmes.md)
  3. risiko-justeret samlet ejerskabsKostpris
```

## Gennemregnet eksempel

En lokal myndighed behøver et sagsStyringsSystem for voksen socialOmsorg. Køb: SaaS ved £180.000/år, live på 4 måneder. Byg: estimeret £900.000 plus £150.000/år vedligeholdelse, live på 14 måneder.

```
Risiko-justeret byg-kostpris = 900.000 × 1,4 = £1.260.000
5-års-TCO:
  køb  = 180.000 × 5 = £900.000
  byg  = 1.260.000 + 150.000 × 5 = £2.010.000

ForsinkelsesTerm: systemet undgår £40.000/måned i duplikerede
vurderinger; byg ankommer 10 måneder senere end køb.
CoD = 10 × 40.000 = £400.000

Effektiv sammenligning: £900.000 (køb) vs. £2.010.000 +
£400.000 = £2.410.000 (byg)
```

Køb vinder med groft £1,5 millioner over fem år, og den største enkelte linje efter byg-estimatet selv er forsinkelses-kostprisen, en ren capex-sammenligning aldrig ville have eksponeret.

## Forbindelse til softwareudvikling

Disciplinerne, der overFøres direkte fra denne analyse til leverings-praksis: **prior-baseret risiko-justering** — Mott-MacDonald-opJusteringen er software-ækvivalenten til Green-Book-optimisme-bias anvendt mekanisk, så teams bør argumentere for undtagelser til den snarere end at antage deres estimat er undtagelsen; **komparator-ærlighed** — alternativet til at bygge er den bedste tilgængelige køb-mulighed, ikke "intet," hvilket kobler direkte til [alternativ-kostpris i offentlig udgift](../opportunity-cost-in-public-spending/); og **ærlig TCO-sammenligning** — hvert byg-forslag bør sammenlignes mod en køb-mulighed's fulde [samlet ejerskabsKostpris](../total-cost-of-ownership-in-government-it/), ikke dens listePris. Hvor byg genuint vinder, bør [kostpris af forsinkelse](../cost-of-delay-in-public-programmes/) af den yderligere byg-tid prisSættes explicit i business-casen, ikke efterlades som en uAngivet antagelse, at tid ikke betyder noget.

## Faldgruber

- **At sammenligne leverandør-listePris til et u-risiko-justeret byg-estimat.** Dette dobbelt-smigrer byg to gange, en gang på kostpris og en gang på tidsPlan.
- **Nul-prisSat internt arbejde.** StatsAnsat-ingeniør-tid behandles som "fri," fordi den allerede er på det departementale hovedTællings-budget, hvilket skjuler dens sande alternativ-kostpris mod andet arbejde, det team kunne gøre.
- **UPrisSat lock-in i begge retninger.** Leverandør-exit- og data-portabilitets-kostpriser er rigtige, men det er også et skræddersyet bygs bus-faktor og dets afhængighed af at beholde et lille, svært-at-erstatte inHouse-team over dets liv.
- **Mission-differentiering hævdet for rørFøring.** "Dette er kerne til os" hævdet om integrations-middleWare eller en dokument-store — test det mod, om en borger eller sagsBehandler nogensinde ville bemærke, hvilken en kører under.

## Kilder

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
