# Rapport de résultats des subventions (IRIS+)

Le rapport de résultats des subventions est la pratique consistant, pour les bénéficiaires, à rendre
compte de mesures de résultats standardisées et comparables auprès des bailleurs de fonds — plutôt
que chaque bailleur invente son propre modèle de rapport sur mesure. IRIS+, maintenu par le Global
Impact Investing Network (GIIN), est la norme la plus largement adoptée en la matière : un catalogue
de mesures de performance sociale, environnementale et financière prédéfinies que les investisseurs
à impact et, de plus en plus, les fondations de financement de subventions exigent ou recommandent
à leurs bénéficiaires d'utiliser.

## Pourquoi c'est important

Avant la standardisation des rapports, chaque fondation demandait aux bénéficiaires un ensemble
différent d'indicateurs dans un format différent, et une association de taille moyenne comptant dix
bailleurs pouvait se retrouver à mener dix processus de rapport parallèles pour un travail se
recoupant largement — un facteur bien documenté de la charge de reporting que la standardisation des
résultats de subventions vise à réduire. IRIS+ répond à ce problème en donnant aux bailleurs et aux
bénéficiaires un vocabulaire commun : des ensembles de mesures fondamentales (Core Metrics Sets)
regroupées par thème (par exemple le logement abordable, l'accès à l'énergie propre, l'inclusion
financière), chaque mesure étant définie avec assez de précision pour que « emplois créés » ou
« ménages desservis » signifie la même chose quel que soit celui qui la rapporte, et alignée sur les
Objectifs de développement durable des Nations Unies afin qu'un bailleur puisse agréger les données
de niveau bénéficiaire en un récit de portefeuille au niveau des ODD. Le GIIN indique que les
mesures IRIS sont utilisées par environ la moitié des investisseurs à impact et par la grande
majorité des gestionnaires de fonds, des banques et des institutions de financement du développement
actives dans ce domaine.

La standardisation compte le plus lorsqu'elle interagit avec [résultats versus réalisations](../outcomes-vs-outputs/) :
IRIS+ pousse le reporting vers des mesures de résultats et d'impact définies plutôt que vers ce que
le système de gestion de dossiers existant d'un bénéficiaire consigne par hasard, ce qui est
exactement l'écart que décrivent [coût par résultat](../cost-per-outcome/) par rapport à
[coût par bénéficiaire](../cost-per-beneficiary/).

## Le calcul

Le rapport de résultats des subventions est un cadre et un processus, pas une formule :

```
1. Le bailleur choisit un ensemble de mesures fondamentales pertinent pour
   le thème de la subvention (par ex. IRIS+ « Inclusion financière » ou
   « Agriculture durable »)
2. Chaque mesure a une définition, une unité et une méthode de calcul fixes
   publiées par le GIIN — non inventées par chaque bailleur
3. Le bénéficiaire rapporte selon les mêmes définitions de mesures auprès
   de tous ses bailleurs utilisant cette norme, réduisant l'effort de
   reporting en double
4. Le bailleur agrège les mesures de niveau bénéficiaire en un reporting de
   niveau portefeuille, comparable d'une année sur l'autre et entre
   bénéficiaires utilisant la même mesure
```

Le gain d'efficacité est combinatoire : standardiser N bailleurs × M bénéficiaires sur un vocabulaire
commun transforme N×M relations de reporting sur mesure en environ N+M correspondances vers une
seule norme.

## Exemple chiffré

**Un bénéficiaire avec trois bailleurs, avant standardisation** : il rapporte « personnes
desservies » au bailleur 1 selon une définition par tête, « bénéficiaires atteints » au bailleur 2
selon une définition par ménage, et « individus touchés » au bailleur 3 selon une définition par
épisode de service (de sorte qu'une personne venant deux fois compte deux fois). Trois rapports,
trois chiffres, aucun comparable entre eux, et aucun comparable aux chiffres d'un autre bénéficiaire
même au sein du portefeuille d'un même bailleur.

**Le même bénéficiaire sous IRIS+** : il rapporte selon une mesure définie d'individus atteints
IRIS+, accompagnée d'une mesure de résultat définie tirée de l'ensemble de mesures fondamentales
pertinent, en utilisant la méthodologie de calcul publiée par le GIIN pour les deux. Les trois
bailleurs reçoivent désormais le même chiffre, calculé de la même manière, et peuvent comparer le
coût par unité définie IRIS+ de ce bénéficiaire à celui d'autres bénéficiaires de leur portefeuille
en utilisant la mesure identique — l'équivalent, à l'échelle de l'infrastructure de reporting, de
disposer d'une [base de données de coûts unitaires](../unit-cost-databases/) partagée.

## Lien avec l'ingénierie logicielle

Les plateformes de gestion de subventions devraient traiter les identifiants de mesures IRIS+ comme
une clé étrangère, et non comme du texte libre : stocker le code de mesure publié aux côtés de la
valeur rapportée par un bénéficiaire (plutôt qu'un champ inventé localement nommé « bénéficiaires »)
est ce qui rend possible plus tard l'agrégation entre bailleurs et entre portefeuilles sans projet de
nettoyage de données. Lorsqu'une plateforme doit prendre en charge des bailleurs n'ayant pas adopté
IRIS+, la conception pragmatique consiste à permettre de faire correspondre une mesure locale à la
définition IRIS+ la plus proche plutôt que de forcer immédiatement chaque bailleur vers la norme — la
comparabilité s'améliore progressivement à mesure qu'une plus grande part du graphe se rattache à des
identifiants partagés. Voir le sujet connexe [coût par résultat](../cost-per-outcome/) pour ce à quoi
les chiffres rapportés doivent servir à calculer une fois collectés.

## Pièges à éviter

- **Traiter l'adoption d'IRIS+ comme une comparabilité automatique.** Deux bénéficiaires peuvent
  tous deux rapporter selon la même mesure IRIS+ et pourtant ne pas être comparables si la qualité
  de leurs données sous-jacentes ou leurs hypothèses contrefactuelles diffèrent ; la norme fixe les
  définitions, pas la rigueur de la mesure.
- **Des mesures « alignées sur IRIS » inventées par le bailleur.** Une mesure simplement inspirée du
  langage IRIS+ mais qui n'en est pas la définition réellement publiée réintroduit la fragmentation
  que la norme est censée résoudre.
- **La lassitude du reporting due à une sur-sélection.** Exiger d'un bénéficiaire qu'il rapporte sur
  un ensemble de mesures fondamentales complet alors que seules deux ou trois mesures sont
  pertinentes pour la décision recrée le problème de charge dans un emballage standardisé.
- **L'absence totale de mesure de résultat.** IRIS+ comprend de nombreuses mesures de pure
  réalisation (par ex. le nombre de personnes desservies) ; ne sélectionner que celles-ci, sans
  aucune des mesures de niveau résultat, produit un reporting de type
  [coût-par-bénéficiaire](../cost-per-beneficiary/) sous une étiquette de reporting de résultats.

## Sources

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
