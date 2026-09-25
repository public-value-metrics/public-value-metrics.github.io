# Prix fictif (shadow pricing)

Un prix fictif est une valeur estimée attribuée à un bien, une ressource ou une externalité qui n'a
pas de prix de marché observable, ou dont le prix de marché est faussé et ne reflète pas sa véritable
valeur sociale. L'évaluation gouvernementale s'appuie sur un petit ensemble de prix fictifs
officiels — le carbone, le temps hors travail, le travail non employé — publiés de manière
centralisée afin que chaque ministère utilise le même chiffre.

## Pourquoi c'est important

Les prix fictifs existent parce que l'[analyse coûts-avantages sociale](../social-cost-benefit-analysis/)
ne peut pas fonctionner sans une valeur monétaire pour chaque coût et chaque avantage, et plusieurs
des plus déterminants d'entre eux — une tonne de carbone émise, une heure du temps d'un navetteur,
une heure de travail autrement inemployé — n'ont aucun prix de marché, ou un prix de marché qui ne
représente pas fidèlement leur véritable coût social. HM Treasury et le Department for Energy
Security and Net Zero publient conjointement le prix fictif du carbone utilisé dans l'ensemble des
évaluations du gouvernement britannique
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
dérivé non pas d'un prix de marché du carbone mais d'une approche cohérente avec une cible : la
valeur du carbone est fixée au coût marginal d'atténuation nécessaire pour respecter les budgets
carbone légiférés du Royaume-Uni, ce qui relève d'une logique fondamentalement différente de
l'observation du prix auquel le carbone se négocie réellement sur le marché européen ou britannique
d'échange de quotas d'émission (ETS).

Le taux de salaire fictif suit une logique similaire du côté du travail. Employer une personne qui
aurait autrement été au chômage ne coûte pas à la société l'intégralité de son salaire — une partie
de ce salaire correspond à un transfert issu de prestations sociales non versées et de temps de
loisir/recherche d'emploi perdu, plutôt qu'à une nouvelle ponction nette sur les ressources de la
société — de sorte que les directives du Green Book fixent un prix fictif inférieur au salaire de
marché pour le travail issu du chômage, reflétant le véritable coût d'opportunité de ce travail (voir
[coût d'opportunité dans la dépense publique](../opportunity-cost-in-public-spending/)) plutôt que
son prix de marché.

## Le calcul

```
Shadow price of carbon (illustrative structure, current values from the
official BEIS/DESNZ carbon values tool — do not use stale figures):
  Traded sector value: informed by ETS allowance price trajectories
  Non-traded sector (target-consistent) value: set to the marginal cost
    of abatement needed to meet legislated carbon budgets, rising over
    time as easier abatement options are exhausted
  Applied as: £/tonne CO2e × tonnes emitted or abated by the option,
    discounted at the social discount rate for future years

Shadow wage rate (SWR):
  SWR = Market wage − (value of foregone leisure/search time saved
                        + value of welfare payments no longer paid)
  Typically expressed as a fraction of the market wage (e.g. SWR = 0.6
    × market wage in a high-unemployment area, per Green Book Annex A
    guidance on labour markets with spare capacity)
```

Les deux chiffres sont des conventions de politique publique fixées de manière centralisée, et non
des observations empiriques de marché — l'objet même d'un prix fictif est de se substituer à un
marché absent ou faussé, si bien qu'une évaluation qui en utilise un doit citer la source officielle
en vigueur plutôt que de dériver son propre chiffre, précisément pour que l'évaluation de chaque
ministère reste comparable.

## Exemple chiffré

**Administration nationale** : l'évaluation d'un projet de protection contre les inondations estime
qu'il évite 400 tonnes d'émissions de CO2e par an (grâce à une utilisation réduite de matériel
d'urgence et à un carbone incorporé réduit issu des reconstructions évitées) sur une durée
d'évaluation de 30 ans, par rapport à un scénario de référence « minimal ».

```
Illustrative shadow price of carbon: £280/tonne CO2e (year 1, rising over
  the appraisal period per the official non-traded carbon values schedule)
Year 1 carbon benefit = 400 × £280 = £112,000
```

Comme le barème officiel prévoit que la valeur du carbone *augmente* sur la durée de l'évaluation
(reflétant le resserrement des budgets carbone), l'analyste doit appliquer la valeur propre à chaque
année sur les 30 années de la série, et non un taux uniforme — utiliser la valeur de l'année 1 tout
au long de la période sous-estimerait les avantages des années ultérieures et fausserait le
classement par rapport à d'autres conceptions de protection contre les inondations ayant des profils
carbone différents.

**Collectivité locale** : le programme d'aide à l'emploi d'un conseil local pour des résidents au
chômage de longue durée place 150 personnes dans des emplois rémunérés 11 £/heure. Valoriser cela en
utilisant le salaire de marché complet créditerait le programme de 11 £ × heures travaillées comme
avantage social, mais l'approche du taux de salaire fictif reconnaît que ces personnes n'ont pas été
tirées d'autres emplois — le véritable coût d'opportunité de leur travail avant le programme était
faible.

```
Market wage: £11.00/hour
Shadow wage rate (illustrative, high local unemployment): 0.6 × market wage = £6.60/hour
Net social benefit attributable per hour worked ≈ £11.00 − £6.60 = £4.40/hour
  (the "extra" value created by moving genuinely idle labour into production,
   as distinct from the wage itself, which is largely a transfer)
```

C'est pourquoi les évaluations de programmes d'emploi dans des zones à fort chômage peuvent afficher
une valeur sociale nette positive, alors que le même programme, mené dans une zone en plein emploi où
le travail déplacé serait simplement tiré d'autres emplois, ne le pourrait pas.

## Lien avec l'ingénierie logicielle

La tarification fictive touche rarement directement la livraison logicielle, mais elle importe dès
qu'un dossier d'affaires revendique un avantage carbone ou social issu d'un changement informatique —
une consolidation de centre de données revendiquant des économies de carbone, ou un service
dématérialisé revendiquant des économies de carbone liées à l'impression et à l'affranchissement
évités, doit utiliser le prix fictif officiel du carbone en vigueur plutôt qu'un chiffre inventé, et
doit appliquer le barème correct année par année plutôt qu'un taux uniforme, exactement comme pour
tout autre intrant d'évaluation du Green Book. Voir
[coût total de possession dans l'informatique publique](../total-cost-of-ownership-in-government-it/)
et [valeur de la cybersécurité dans le secteur public](../public-sector-cybersecurity-value/), qui
nécessitent souvent tous deux un prix fictif pour un intrant difficile à monétiser (risque de brèche,
indisponibilité) aux côtés d'éléments directement chiffrés.

## Pièges à éviter

- **Utiliser un chiffre de carbone ou de salaire obsolète.** Les deux valeurs sont révisées
  périodiquement par les directives centrales ; une évaluation construite sur un chiffre dépassé ne
  résistera pas à l'examen du Treasury.
- **Appliquer un prix fictif du carbone uniforme sur une évaluation pluridécennale.** Le barème
  officiel augmente dans le temps ; utiliser la valeur de l'année 1 tout au long de la période fausse
  le profil des avantages ou des coûts.
- **Confondre le salaire fictif avec une réduction du salaire réel du travailleur.** Le taux de
  salaire fictif ajuste la valorisation de l'intrant de travail *dans l'évaluation*, et non le
  salaire réellement versé au travailleur — confondre les deux invite (à tort) à justifier une
  rémunération inférieure au marché.
- **Dériver un prix fictif ad hoc au lieu d'utiliser le prix officiel.** Les prix fictifs sont des
  conventions de politique publique précisément pour que les évaluations soient comparables entre
  ministères ; un chiffre inventé localement, aussi bien argumenté soit-il, rompt cette
  comparabilité.

## Sources

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
