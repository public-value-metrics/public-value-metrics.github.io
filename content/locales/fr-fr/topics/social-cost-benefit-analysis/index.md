# Analyse coûts-avantages sociale (SCBA)

L'analyse coûts-avantages sociale convertit chaque coût et chaque avantage d'une politique publique
ou d'un programme — marchand et non marchand — en une unité monétaire commune, actualise les flux
futurs à leur valeur présente, et en fait le solde pour produire un chiffre unique : cette
proposition rend-elle la société meilleure, et de combien ?

## Pourquoi c'est important

La SCBA est la méthode quantitative par défaut dans le dossier économique de l'
[évaluation selon le Green Book](../green-book-appraisal/) : les directives de HM Treasury exigent
que les propositions démontrent une valeur sociale actuelle nette (NPSV) positive partout où les
avantages peuvent être monétisés de manière crédible, en utilisant le consentement à payer comme
principe de valorisation de base pour les biens non marchands
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
chapitre 5). La rigueur qu'elle impose tient à ce que l'analyse coûts-avantages « sociale » n'est pas
le même exercice qu'une évaluation d'investissement du secteur privé : elle doit inclure les coûts et
avantages qui retombent sur des tiers non parties à la transaction (externalités), elle doit utiliser
le [taux d'actualisation social](../social-discount-rate/) plutôt qu'un coût du capital commercial,
et elle devrait appliquer une [pondération distributive](../distributional-weighting/) là où une
livre sterling compte davantage pour un ménage pauvre que pour un ménage riche.

Là où la SCBA échoue, c'est exactement là où ses critiques l'attendent : les biens sans équivalent
marchand — la qualité de l'air, la cohésion sociale, la valeur d'une vie sauvée — doivent être
monétisés au moyen de méthodes de [préférence déclarée](../stated-preference-valuation/) ou de
[préférence révélée](../revealed-preference-valuation/), ou un [prix fictif](../shadow-pricing/) doit
être construit. Lorsque la monétisation est contestée plutôt que simplement difficile, le Green Book
lui-même recommande de recourir plutôt à l'
[analyse coût-efficacité](../cost-effectiveness-analysis-in-government/) ou à l'
[analyse multicritère](../multi-criteria-decision-analysis/) plutôt que de forcer un chiffre auquel
personne ne croit.

## Le calcul

```
NPSV = Σ [t=0 to T] (Benefit_t − Cost_t) / (1 + r)^t

where:
  Benefit_t = all monetized benefits in year t, including non-market
              goods valued via stated/revealed preference or shadow price
  Cost_t    = all monetized costs in year t, including opportunity cost
              of resources (see ../opportunity-cost-in-public-spending/)
  r         = social discount rate (HM Treasury sets 3.5% declining to
              lower rates beyond year 30, per Green Book Annex A)
  T         = appraisal period

Benefit-cost ratio (BCR) = Σ PV(Benefits) / Σ PV(Costs)
```

Un BCR supérieur à 1 (ou une NPSV supérieure à zéro) indique une valeur sociale nette. Les catégories
de rapport qualité-prix du Green Book (telles qu'utilisées dans l'évaluation des transports et des
infrastructures) qualifient les plages de BCR : en dessous de 1,0, le rapport qualité-prix est
médiocre ; de 1,0 à 1,5, faible ; de 1,5 à 2,0, moyen ; de 2,0 à 4,0, élevé ; et au-dessus de 4,0, très
élevé. L'analyse de sensibilité — recalculer la NPSV sous des hypothèses pessimistes et optimistes —
est obligatoire, non facultative, car les avantages non marchands monétisés comportent de larges
marges d'incertitude.

## Exemple chiffré

**Collectivité locale** : un conseil local évalue un investissement de 3 millions de £ dans un
nouveau réseau cyclable et piéton sur une période d'évaluation de 20 ans à un taux d'actualisation de
3,5 %.

```
Costs: £3m capital in year 0, £50,000/year maintenance (years 1-20)
PV(maintenance) ≈ £50,000 × 14.2 (20-year annuity factor at 3.5%) ≈ £710,000
Total PV(costs) ≈ £3.71m

Benefits (all monetized via published DfT/WHO valuation tools):
  Health benefit from increased physical activity: £180,000/year
  Absenteeism reduction: £40,000/year
  Decongestion (fewer car trips): £60,000/year
  Total benefit stream: £280,000/year
PV(benefits) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → "low" value for money
```

Le projet franchit le seuil, mais de justesse ; un test de sensibilité avec une estimation de
l'avantage santé inférieure de 20 % (reflétant l'incertitude réelle de la valorisation de l'activité
physique) fait passer le BCR en dessous de 1,0, ce qui explique précisément pourquoi le Green Book
exige que le tableau de sensibilité soit publié aux côtés du chiffre principal, et non uniquement
l'estimation centrale.

**Organisme caritatif** : un programme de prévention de la mortalité infantile coûtant 500 000 £/an
est évalué à l'aide de la valeur d'une vie statistique (VSL) — un prix fictif, et non un prix de
marché observé — d'environ 2,1 millions de £ (chiffre actualisé en 2023 par HM Treasury, lui-même
dérivé d'études de préférence déclarée). Éviter un décès infantile par an pour un coût de 500 000 £
donne un BCR de 4,2, un rapport qualité-prix confortablement « très élevé » — mais l'ensemble du
résultat repose sur le chiffre de la VSL, ce qui explique pourquoi toute SCBA utilisant la VSL doit la
présenter comme une hypothèse, et non comme un fait.

## Lien avec l'ingénierie logicielle

La SCBA est le cadre naturel pour les décisions d'investissement en plateformes et en infrastructures
dans les logiciels gouvernementaux — comparer une plateforme d'identité partagée à des solutions
ministérielles ponctuelles, par exemple, exige de monétiser des avantages comme la réduction du coût
d'intégration en double, la réduction de la fraude et l'accélération du délai de mise à disposition
du service, qui n'ont eux-mêmes aucun prix de marché. Les ingénieurs qui construisent le service
sous-jacent doivent s'attendre à ce que les responsables de programme leur demandent des intrants
pour cette analyse : coûts unitaires des transactions (voir
[coût par transaction](../cost-per-transaction/)), volumes attendus, et coûts de dégradation ou
d'indisponibilité. La discipline la plus importante à intégrer : actualiser les avantages futurs,
nommer explicitement le scénario contrefactuel de référence (voir
[analyse contrefactuelle](../counterfactual-analysis/)), et ne jamais présenter une estimation
ponctuelle unique sans sa plage de sensibilité.

## Pièges à éviter

- **Double comptage des avantages.** Compter à la fois le « temps gagné » et le « gain de
  productivité issu de ce temps » comme des lignes d'avantages distinctes surestime le dossier ; le
  temps gagné est l'avantage, son usage ultérieur n'en est pas un supplémentaire sauf preuve
  indépendante.
- **Omettre les coûts déplacés.** Un dispositif qui déplace la congestion d'une route vers une autre,
  ou déplace la fraude d'un canal vers un autre, n'a pas créé l'avantage net que sa NPSV principale
  laisse entendre — voir [déplacement et attribution](../displacement-and-attribution/).
- **Utiliser un taux d'actualisation privé.** Appliquer un coût du capital commercial (disons 8 à
  10 %) au lieu du taux d'actualisation social sous-évalue systématiquement les avantages publics à
  long horizon comme les gains de santé et environnementaux — voir
  [taux d'actualisation social](../social-discount-rate/).
- **Monétiser ce qui n'est pas contesté et esquiver ce qui l'est.** Si les deux tiers de l'avantage
  d'une proposition constituent une économie d'efficacité monétisée avec assurance et un tiers un
  gain de bien-être monétisé avec fragilité, la NPSV principale mélange silencieusement un chiffre
  solide et un chiffre fragile ; il faut les présenter séparément.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
