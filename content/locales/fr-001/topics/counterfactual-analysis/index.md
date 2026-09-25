# Analyse contrefactuelle

Un contrefactuel est une estimation de ce qui se serait passé en l'absence d'une intervention. Sans
lui, un changement observé après le lancement d'un programme ne peut pas être distingué d'un changement
qui se serait produit de toute façon — sans contrefactuel, pas de preuve d'effet, aussi convaincants
que paraissent les chiffres avant/après. Le Magenta Book du HM Treasury traite la construction d'un
contrefactuel crédible comme la tâche méthodologique centrale de l'évaluation d'impact, plus importante
que tout autre choix de conception.

## Pourquoi c'est important

« La criminalité a baissé de 15 % l'année suivant l'introduction du programme » n'est pas une preuve
que le programme a fonctionné, à moins de savoir ce qui serait arrivé à la criminalité sans lui — elle
aurait pu baisser de 20 % de toute façon en raison de tendances économiques ou démographiques sans
rapport, ce qui signifierait que le programme a en réalité aggravé la situation par rapport au
contrefactuel, malgré l'amélioration du chiffre brut. C'est l'erreur analytique la plus courante dans
les affirmations d'impact du secteur public et du secteur social : confondre une comparaison avant/après
avec une preuve de causalité. Le Magenta Book est explicite : l'évaluation d'impact existe pour répondre
à une question contrefactuelle — « quelle différence cette intervention a-t-elle faite ? » — et y
répondre exige d'estimer, et non simplement de décrire, le monde qui ne s'est pas produit.

Différentes méthodes construisent le contrefactuel avec des degrés de confiance différents, et les
orientations gouvernementales d'évaluation les classent en conséquence. Les essais contrôlés randomisés
(ECR), où des individus ou des zones sont assignés aléatoirement à recevoir une intervention ou non,
produisent le contrefactuel le plus solide, car la randomisation garantit que les groupes traité et
témoin ne diffèrent, en moyenne, que par la réception de l'intervention. Le Cabinet Office et le What
Works Network promeuvent les ECR dans les politiques publiques britanniques depuis le rapport « Test,
Learn, Adapt » de 2012 de la Behavioural Insights Team, précisément parce que les conceptions plus
faibles sont vulnérables aux facteurs de confusion — la différence observée peut refléter qui a choisi
de participer, et non l'effet du programme. Lorsque la randomisation est impraticable ou contraire à
l'éthique (comme c'est souvent le cas pour les programmes avec un droit statutaire, ou pour des
changements de politique concernant toute une population), le Magenta Book établit une hiérarchie
explicite d'alternatives plus faibles mais tout de même utiles : groupes de comparaison appariés,
conceptions en différence de différences, discontinuité de régression autour de seuils d'éligibilité,
et, en dernier recours, la simple comparaison avant/après — clairement signalée comme la forme de
preuve la plus faible, encline à confondre l'effet du programme avec l'effet de tout ce qui a changé au
même moment.

## Le calcul

Le cadre contrefactuel, applicable à toutes les méthodes :

```
Estimated impact = Outcome(with intervention) − Outcome(counterfactual: without intervention)

NOT:
Estimated impact ≠ Outcome(after) − Outcome(before)   [confounds time with treatment]
```

La différence de différences, l'une des conceptions quasi-expérimentales les plus courantes dans
l'évaluation gouvernementale, isole l'effet du traitement en soustrayant le propre changement
avant/après du groupe de comparaison :

```
DiD estimate = [Outcome(treated, after) − Outcome(treated, before)]
             − [Outcome(comparison, after) − Outcome(comparison, before)]
```

Cela élimine toute tendance commune aux deux groupes (par exemple une évolution économique nationale
affectant tout le monde), ne laissant que le changement différentiel attribuable à l'intervention.

## Exemple chiffré

**Programme d'aide à l'emploi, avant/après (conception faible)** : un dispositif d'aide à l'emploi
rapporte que l'emploi des participants est passé de 40 % à 55 % en un an — une conclusion naïve de
« +15 points de pourcentage grâce au programme ».

**Même programme, différence de différences (conception plus solide)** : un groupe de comparaison
apparié de non-participants similaires, tiré du même marché du travail local, montre que l'emploi est
passé de 38 % à 47 % sur la même année (une reprise économique nationale était en cours).

```
Treated group change:    55% − 40% = +15 percentage points
Comparison group change: 47% − 38% = +9 percentage points

DiD estimate (true programme effect) = 15 − 9 = +6 percentage points
```

L'effet attribuable honnête est de 6 points de pourcentage, pas 15 — plus de la moitié de
l'amélioration apparente avant/après se serait produite indépendamment du programme, portée par la
même reprise économique qui a également soulevé le groupe de comparaison.

**Discontinuité de régression, seuil d'éligibilité** : un dispositif de subvention n'est disponible que
pour les entreprises de moins de 50 employés. Comparer les résultats des entreprises juste en dessous
du seuil (45 à 49 employés, éligibles) à ceux des entreprises juste au-dessus (50 à 54 employés,
inéligibles) fournit un contrefactuel crédible, car les entreprises de part et d'autre d'un seuil
administratif arbitraire sont par ailleurs similaires — c'est le seuil, et non une caractéristique
sous-jacente de l'entreprise, qui détermine l'éligibilité. Une différence de résultat moyenne de
2 000 £ entre les deux groupes, observée uniquement au niveau du seuil, est attribuable à la subvention
avec bien plus de confiance qu'une simple comparaison entre toutes les entreprises éligibles et toutes
les entreprises inéligibles (qui diffèrent systématiquement par leur taille).

## Lien avec l'ingénierie logicielle

La pensée contrefactuelle devrait façonner la conception des systèmes de suivi d'impact et des chaînes
d'évaluation pour les logiciels du secteur public et du secteur social :

- Intégrez la capture de groupes de comparaison dans un système dès le départ — en enregistrant qui
  était éligible mais non inscrit, ou une cohorte de non-participants appariée — plutôt que de l'ajouter
  après coup, une fois qu'un programme a déjà tourné et que seules des données avant/après existent.
- Là où la randomisation est réalisable (un déploiement par phases, un service numérique activé pour
  certains utilisateurs avant d'autres), instrumentez le système pour conserver l'assignation aléatoire
  comme un champ interrogeable ; un déploiement par phases détruit accidentellement sa propre valeur
  d'évaluation si l'ordre d'assignation n'est pas consigné.
- C'est la méthode fondatrice derrière les
  [méthodes d'évaluation d'impact](../impact-evaluation-methods/) et c'est ce qui la distingue de l'
  [évaluation d'impact par rapport à l'évaluation de processus](../impact-evaluation-vs-process-evaluation/),
  cette dernière se demandant si un programme a été délivré comme prévu plutôt que s'il a causé un
  effet.
- L'[additionnalité et le poids mort](../additionality-and-deadweight/) et le
  [déplacement et l'attribution](../displacement-and-attribution/) sont tous deux, au fond, des
  questions contrefactuelles — le poids mort est « quel aurait été ce résultat spécifique sans
  l'intervention », appliqué au niveau de l'ajustement plutôt qu'à celui d'une conception d'évaluation
  complète.

## Pièges à éviter

- **Traiter l'avant/après comme une preuve de causalité.** C'est l'erreur la plus courante et la plus
  lourde de conséquences dans le reporting d'impact du secteur public et du secteur social ; un
  changement avant/après confond l'effet du programme avec tout ce qui a changé d'autre pendant la
  même période.
- **Utiliser un groupe de comparaison qui diffère systématiquement du groupe traité.** Un groupe de
  comparaison apparié doit être véritablement similaire sur les caractéristiques pertinentes (voir la
  hiérarchie des méthodes d'[analyse contrefactuelle](../counterfactual-analysis/) du Magenta Book) ;
  comparer des participants au programme (qui ont choisi d'y adhérer, et sont souvent plus motivés) à
  des non-participants (qui ne l'ont pas fait) risque de confondre un biais de sélection avec un effet
  du programme.
- **Détruire des opportunités de randomisation par une mauvaise conception de la délivrance.** Un
  déploiement par phases ou randomisé ne conserve sa valeur d'évaluation que si l'assignation est
  véritablement aléatoire et enregistrée — laisser les responsables locaux choisir qui passe en premier
  va à l'encontre de cet objectif.
- **Surestimer la précision d'une conception faible.** Une estimation avant/après devrait être
  présentée comme indicative, et non comme une taille d'effet mesurée ; la hiérarchie de preuves du
  Magenta Book existe pour que la force d'une affirmation corresponde à la force de la conception qui
  l'a produite.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
