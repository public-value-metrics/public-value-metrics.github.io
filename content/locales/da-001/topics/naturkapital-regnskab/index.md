# Naturkapital-regnskab

NaturKapital-regnskab sætter miljøet på samme fodslag som ethvert andet nationalt eller organisatorisk aktiv: det måler lageret af naturRessourcer (skove, jorder, floder, vådOmråder, atmosFæren) og flowet af tjenester, de producerer (kulstofBinding, oversvømmelsesBeskyttelse, rekreation, mad), i både fysiske og monetære termer, sådan at miljømæssig udtømning viser sig i beslutningsTagning på den måde, nedKørsel af finansiel kapital ville. Storbritannien er en af de længst-fremskredne regeringer i at gøre dette systematisk, drevet af 25 Year Environment Plan (2018) og implementeret gennem ONS's UK Natural Capital-regnskaber og HM Treasurys Green Book-supplerende-vejledning.

## Hvorfor det betyder noget

Konventionelt regnskab — selskabsMæssigt og statsligt ligeligt — behandler en skov som værdiLøs, indtil den er fældet og solgt som timber, hvor det bliver BNP. NaturKapital-regnskab eksisterer for at lukke det gab: Storbritanniens 25 Year Environment Plan forpligtede regeringen til at indBygge naturKapital-tænkning over politik, og angav explicit ambitionen at være "den første generation til at efterlade miljøet i en bedre tilstand end vi fandt det." ONS har siden offentliggjort årlige UK Natural Capital-regnskaber (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), der estimerer den monetære værdi af økosystemTjenester — fra skov-rekreation til urban-grøn-areal's sundhedsFordele til tørveMoses kulstofLagring — ved brug af samme National Accounts-ramme brugt for produceret kapital, sådan at naturKapital eventuelt kan sidde i samme balanceRegnskab som veje, bygninger, og udStyr. HM Treasurys Enabling a Natural Capital Approach (ENCA)-vejledning, supplerende til Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), fastsætter, hvordan vurderere bør værdiSætte miljømæssige kostpriser og fordele i business-cases, sådan at et vej-skema, der destruerer ancient skov, eller et oversvømmelses-skema, der genOpretter vådOmråde, kan sammenlignes på konsistente monetære termer snarere end en havende et tal og den anden en paragraf af forbeHold.

## Beregningen

```
ØkosystemTjeneste-aktivVærdi = NPV af flowet af tjenester,
aktivet leverer

AktivVærdi = Σ (t = 1 til T) [årlig tjenesteFlow-værdi_t /
            (1 + r)^t]

hvor:
  tjenesteFlow-værdi_t = kvantitet af tjeneste i år t ×
                        enhedsVærdi (f.eks. rekreative besøg
                        × værdi pr. besøg; tons kulstof
                        bundet × kulstofPris)
  r = diskonteringsRate (Green-Book-social-diskonteringsRate
      — se [social diskonteringsRate](../samfundsmæssig-diskonteringsrate/))
  T = tidsHorisont, over hvilken aktivet forventes at levere
      tjenesten
```

Dette er den identiske nutidsVærdi-struktur brugt til at værdiSætte produceret kapital eller vurdere enhver offentlig investering under [Green Book-vurdering](../green-book-vurdering/) — naturKapital-regnskabs bidrag er at levere troværdige fysiske kvantiteter og enhedsVærdier for tjenester, der tidligere var prisSat til nul.

## Gennemregnet eksempel

**Urban skov, rekreativ værdi**: en 50-hektar-skov modtager et estimeret 80.000 rekreative besøg pr. år, hver værdiSat (via rejse-kostpris- eller stated-preference-metoden — se [afSløret-preference-vurdering](../revealed-preference-vurdering/) og [stated-preference-vurdering](../stated-preference-vurdering/)) til £3 pr. besøg. Skoven forventes at fortsætte med at levere denne tjeneste for 50 år, vurderet ved en 3,5%-diskonteringsRate.

```
Årlig rekreativ værdi = 80.000 × £3 = £240.000/år

NPV over 50 år ved 3,5% ≈ £240.000 × annuitetsFaktor(3,5%,
50 år)
annuitetsFaktor(3,5%, 50) ≈ 21,4

AktivVærdi ≈ £240.000 × 21,4 ≈ £5.136.000
```

**Tilføjelse af kulstofLagring**: samme skov binder et estimeret 400 tons CO2 pr. år, værdiSat til regeringens ikke-handlede kulstofPris på groft £75/ton (illustrativt — brug den aktuelle BEIS/DESNZ-offentliggjorte kulstofVærdi for en live-vurdering).

```
Årlig kulstofVærdi = 400 × £75 = £30.000/år
NPV over 50 år ved 3,5% ≈ £30.000 × 21,4 ≈ £642.000

Samlet skov-aktivVærdi (rekreation + kulstof) ≈ £5.136.000 +
£642.000 ≈ £5.778.000
```

Dette er før tilføjelse af oversvømmelses-dæmpning, bioDiversitet, eller luftKvalitets-tjenester, ENCA-vejledningen også ber vurderere overVeje — totalen er med vilje et gulv, ikke et loft.

## Forbindelse til softwareudvikling

- MiljøOg aktiv-styrings-systemer for lokale myndigheder og organer (parker, hovedVeje, vandLegemer) kan knytte et naturKapital-register sammen med deres fysiske aktiv-register, ved brug af samme tjeneste-flow-gange-enhedsVærdi-mønster som enhver anden [enhedsKostprisdatabase](../enhedskostprisdatabaser/), organisationen vedligeholder.
- Fordi naturKapital-NPV er sensitiv til diskonteringsRaten (se det gennemregnede eksempels annuitetsFaktor), bør noget redskab, der beregner det, eksponere raten og horisonten som synlige input, ikke begrave dem — samme transparens-princip dækket under [intergenerationel lighed og bæreDygtigheds-diskontering](../intergenerationel-lighed-og-bæredygtighedsdiskontering/).
- NaturKapital-regnskaber er i stigende grad et krævet input til miljømæssige-impact-sektioner af en [Green-Book-vurdering](../green-book-vurdering/)-business-case; et leveringsTeam, der bygger business-case-redskaber, bør behandle ONS-regnskaberne og ENCA-enhedsVærdier som referenceData at integrere, ikke noget vurderere genBeregner fra bunden hver gang.

## Faldgruber

- **Dobbelttælling af overlappende økosystemTjenester.** Rekreativ værdi og bioDiversitets-værdi for samme sted kan dele underliggende betalingsVillighed-data; ENCA-vejledning advarer explicit mod at summere værdiSætninger udLedt fra overlappende undersøgelses-instrumenter.
- **At behandle en naturKapital-aktivVærdi som statisk.** TjenesteFlows ændrer sig med klima, styring, og land-brug-pres; en skovs kulstof- og oversvømmelses-dæmpnings-værdi dette decennium er ikke en permanent egenskab af stedet.
- **At bruge national-gennemsnit-enhedsVærdier for en højt lokal beslutning.** Et hektar tilgængelig urban skov og et hektar fjernt højland har meget forskellige rekreative værdier; ENCA-vejledning anbefaler lokale eller sted-specifikke værdier, hvor tilgængeligt, snarere end at standardisere til nationale gennemsnit.

## Kilder

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
