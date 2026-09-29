# Analyse coût-efficacité dans le secteur public

L'analyse coût-efficacité (ACE) compare les coûts de différentes façons d'atteindre le *même*
résultat, exprimé en unités naturelles — coût par personne sans domicile relogée, coût par élève
amené au niveau attendu, coût par tonne de CO2 évitée — sans convertir le résultat lui-même en valeur
monétaire.

## Pourquoi c'est important

Le Green Book traite l'ACE comme la méthode de repli lorsque l'exigence de
l'[analyse coût-bénéfice sociale](../social-cost-benefit-analysis/) de monétiser chaque bénéfice
devient non seulement difficile mais malhonnête — lorsque fixer un prix crédible sur le résultat
exigerait des hypothèses que personne ne défend réellement
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
chapitre 5, sur l'évaluation des options lorsque les résultats ne sont pas aisément monétisables).
L'ACE est la méthode empruntée le plus directement à l'économie de la santé — elle est structurellement
identique à la façon dont le NICE compare les traitements au moyen du coût par année de vie ajustée sur
la qualité — mais appliquée à des programmes publics non liés à la santé : interventions éducatives par
point de résultat scolaire, programmes de logement par ménage évitant le sans-abrisme, programmes pour
l'emploi par résultat d'emploi durable.

La raison pour laquelle l'ACE mérite sa place aux côtés de l'ACBS plutôt que d'être absorbée par elle
est que forcer une valeur monétaire sur certains résultats produit un chiffre suffisamment précis pour
paraître faire autorité, et suffisamment contesté pour être sans valeur dans un débat public — mettre
un prix sur « un enfant qui lit au niveau attendu » invite exactement le type de contestation qui fait
dérailler un dossier d'affaires devant une commission parlementaire. L'ACE contourne le débat en
refusant de l'avoir : elle classe les options sur le coût par unité du *résultat lui-même*, laissant le
jugement politique distinct de savoir si le résultat mérite d'être poursuivi du tout au dossier
stratégique.

## Le calcul

```
Cost-effectiveness ratio (average) = Total cost / Total outcome units achieved

Incremental cost-effectiveness ratio (ICER), comparing option A to option B:
ICER = (Cost_A − Cost_B) / (Outcome_A − Outcome_B)

Procedure:
1. Fix the outcome unit and measurement method across all options being compared.
2. Cost every option on the same basis (see ../green-book-appraisal/, financial case)
   over the same time horizon.
3. Discard dominated options: any option costing more per unit than a cheaper
   alternative achieving the same or better outcome is dropped.
4. Rank remaining options by incremental, not average, cost-effectiveness ratio.
```

L'ACE ne peut, à elle seule, dire si un programme mérite d'être financé du tout — seulement laquelle,
parmi plusieurs approches d'un même objectif, est la moins chère par unité. Décider si l'objectif
lui-même mérite la dépense exige soit de reconvertir vers l'ACBS (si une valorisation crédible existe),
soit un jugement politique ou stratégique extérieur au calcul. Lorsque les résultats ne peuvent
véritablement pas être réduits à une seule unité — parce qu'un programme produit plusieurs résultats
qui comptent de façons différentes — utilisez plutôt l'
[analyse multicritère](../multi-criteria-decision-analysis/).

## Exemple chiffré

**Collectivité locale** : un conseil compare trois approches pour réduire le sans-abrisme de rue,
chacune chiffrée sur un an par rapport au résultat « personnes relogées durablement pendant 6 mois ou
plus » :

```
Option                          Cost       Outcomes achieved   Avg CER
Housing First (intensive)       £900,000   60                  £15,000/outcome
Hostel + move-on support        £600,000   50                  £12,000/outcome
Outreach + private rented sector £350,000  20                  £17,500/outcome

ICER, Hostel vs Outreach:  (600k−350k)/(50−20) = £8,333 per additional outcome
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = £30,000 per additional outcome
```

L'option Outreach est dominée en coût moyen par l'option Hostel, mais le pas *incrémental* d'Outreach
vers Hostel ne coûte que 8 333 £ par personne relogée supplémentaire — bon marché par rapport au pas
vers Housing First, qui coûte 30 000 £ pour chaque personne supplémentaire au-delà de ce que réalise
Hostel. Une autorité contrainte budgétairement qui cherche à monter en charge devrait privilégier
l'extension de Hostel avant Housing First, même si Housing First paraît meilleur sur son propre ratio
moyen.

**Gouvernement national** : un programme de rattrapage en lecture est comparé selon trois modèles de
délivrance sur le critère « coût par élève atteignant le niveau de lecture attendu pour son âge » :
tutorat individuel (1 800 £/élève), tutorat en petit groupe (700 £/élève), et intervention entièrement
numérique (150 £/élève, mais seulement 40 % du taux de résultat du tutorat en petit groupe par élève
inscrit une fois ajusté de l'abandon d'engagement). Une fois ajusté de l'achèvement réel, le
numérique seul coûte 375 £ par élève atteignant le niveau — toujours le moins cher, mais l'ACE ne peut
dire si le nombre absolu plus faible d'élèves aidés par le numérique seul, à budget égal avec le petit
groupe, constitue un arbitrage acceptable face au fait d'atteindre moins d'élèves avec plus de
profondeur ; c'est un jugement distributif que l'ACE renvoie aux décideurs.

## Lien avec l'ingénierie logicielle

L'ACE est le cadre approprié chaque fois que des équipes d'ingénierie évaluent des approches de
délivrance pour le *même* résultat de service — coût par identité vérifiée avec succès entre trois
fournisseurs de vérification d'identité, coût par dossier correctement trié entre deux conceptions
d'automatisation de traitement de cas, coût par défaut d'accessibilité résolu entre remédiation interne
et sous-traitée. La discipline qu'elle importe directement : définir l'unité de résultat avant de
comparer les coûts (pas « tickets clos » — une réalisation — mais « besoin utilisateur réellement
résolu »), et toujours calculer le ratio incrémental entre le système en production et un remplacement
proposé, et non le coût moyen de chaque système pris isolément. Voir
[résultats et réalisations](../outcomes-vs-outputs/) et [coût par résultat](../cost-per-outcome/).

## Pièges à éviter

- **Comparer des ratios moyens plutôt qu'incrémentaux lors d'une décision d'extension.** Comme le
  montre l'exemple du sans-abrisme, l'option au meilleur ratio moyen n'est pas toujours la prochaine
  unité de résultat la moins chère à acheter.
- **Choisir une unité de résultat qui est en réalité une réalisation.** « Orientations effectuées » ou
  « séances délivrées » mesurent l'activité, pas le résultat que le programme existe pour produire ;
  une ACE sur des réalisations produit un chiffre d'apparence assurée qui répond à la mauvaise
  question.
- **Comparer des résultats véritablement différents.** L'ACE n'est valide que lorsque chaque option
  vise le même résultat mesuré de la même façon ; comparer « coût par sans-abri relogé » à « coût par
  jeune sortant de la protection de l'enfance en logement stable » nécessite une mesure de résultat
  générique ou une [analyse multicritère](../multi-criteria-decision-analysis/), pas une ACE.
- **Ignorer la durabilité du résultat.** Une option moins chère qui produit des résultats qui ne
  persistent pas (un élève qui régresse après la fin de l'intervention) n'est pas réellement plus
  coût-efficace une fois mesurée sur un horizon comparable ; alignez la période de suivi entre les
  options comparées.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
