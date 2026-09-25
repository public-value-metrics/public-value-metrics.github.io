# Productivité des services publics

La productivité des services publics mesure l'efficience avec laquelle la dépense publique convertit
des intrants (personnel, capital, biens et services) en réalisations ajustées à la qualité, pour des
services — santé, éducation, police, aide sociale — qui n'ont pas de prix de marché et donc aucun
chiffre de recette dans lequel diviser les coûts. L'Office for National Statistics britannique publie
cette série depuis le milieu des années 2000, et elle demeure la tentative nationale la plus développée
méthodologiquement pour répondre à la question : « le gouvernement devient-il meilleur ou pire pour
convertir de l'argent en services publics ? »

## Pourquoi c'est important

Sur un marché, la productivité est (valeur de la réalisation) / (coût de l'intrant), et la valeur de la
réalisation est observable parce que quelqu'un la paie. Une prothèse de hanche, une place à l'école et
une patrouille de police n'ont pas de prix de vente, de sorte que naïvement on ne peut mesurer que les
*intrants* (ce qui a été dépensé) — ce qui tente les commentateurs à traiter la hausse des dépenses
publiques comme automatiquement mauvaise, puisqu'un intrant plus élevé avec une activité affichée stable
ressemble à une baisse de productivité. La méthodologie de l'ONS, exposée dans ses publications « Sources
and Methods » pour la productivité des services publics, résout cela en construisant un indice de
*réalisation* à partir de volumes d'activité (opérations effectuées, élèves enseignés, crimes enquêtés)
puis en *ajustant à la qualité* cet indice de réalisation — pour la santé, en intégrant les taux de
survie et les délais d'attente ; pour l'éducation, en intégrant les résultats scolaires ; pour la police,
en intégrant des résultats comme la résolution des dossiers — de sorte qu'un service qui effectue le même
nombre d'opérations mais obtient de meilleurs taux de survie s'enregistre comme plus productif, et non
simplement comme plus coûteux. Le constat phare qui revient dans les publications de l'ONS est
préoccupant pour le secteur : la productivité des services publics britanniques a fortement chuté
pendant la pandémie de COVID-19 et, dans les publications de l'ONS du milieu des années 2020, n'avait
toujours pas retrouvé les niveaux de 2019 dans plusieurs sous-secteurs, notamment la santé, même si les
dépenses ont augmenté — un écart qui reformule « plus de financement » et « plus de productivité » comme
deux questions entièrement distinctes.

## Le calcul

```
Output index (volume) = Σ (activity_i × relative unit cost weight_i), base-year weighted
                          across all service activities (e.g. hip ops, cataract ops,
                          GP consultations), analogous to a Laspeyres/Paasche volume index

Quality adjustment    = output index × quality adjustment factor
                          (e.g. incorporating a change in survival rates, waiting times,
                          attainment, or reoffending as a multiplier on raw volume)

Input index           = Σ (labour hours × labour cost weight) + (goods/services cost,
                          deflated) + (capital consumption)

Total factor productivity growth = % change in quality-adjusted output index
                                    − % change in input index
```

## Exemple chiffré

**Calcul illustratif de productivité du secteur des soins aigus du NHS** (la structure suit la
méthodologie de l'ONS) :

```
Year 1: output volume index = 100.0 (base year), input index = 100.0
        → productivity index = 100.0

Year 2: activity volume rises 3.0% (more operations, more appointments)
        but average waiting time worsens, applying a quality-adjustment
        discount of −1.0%
        Quality-adjusted output index = 100 × 1.030 × 0.990 = 101.97

        Inputs rise: staff numbers +4.0%, other costs (deflated) +1.5%,
        weighted input index = 100 × 1.032 = 103.2

Productivity growth = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                     = 1.97% − 3.2% = −1.23 percentage points

Interpretation: activity rose, but inputs rose faster and quality fell
slightly, so productivity — output per unit of input — declined even
though "more care was delivered."
```

C'est exactement le schéma que les publications de l'ONS ont rapporté à plusieurs reprises pour des
parties du NHS après la pandémie : dépenses en hausse et activité brute en hausse coexistant avec une
productivité mesurée en baisse une fois que l'ajustement de qualité et la croissance des intrants sont
tous deux pris en compte.

## Lien avec l'ingénierie logicielle

La productivité des services publics est l'analogue au niveau population des débats de productivité en
ingénierie (points d'histoire livrés contre [indicateurs DORA](../dora-metrics-for-public-value/) contre
[indicateurs de flux](../flow-metrics-in-government-delivery/)) : un débit brut sans ajustement de
qualité est exactement aussi trompeur dans un hôpital que « lignes de code livrées » sur une équipe
logicielle. Les équipes qui construisent des chaînes de données de performance pour des ministères
devraient traiter l'ajustement de qualité comme une étape de transformation de premier ordre et
versionnée, pas comme une note de bas de page — car la propre crédibilité de l'ONS repose sur le fait
que cet ajustement soit transparent, reproductible et révisé à mesure que de meilleures données de
qualité arrivent (l'ONS révise les estimations de productivité des années passées à mesure que les
données de qualité sous-jacentes — par exemple les taux de survie — sont finalisées, de sorte que tout
système en aval consommant ces statistiques doit gérer des révisions rétroactives, pas seulement ajouter
de nouvelles périodes). Cela recoupe aussi directement le
[coût total de possession](../total-cost-of-ownership-in-government-it/) et la
[productivité de l'IA dans le secteur public](../ai-productivity-in-the-public-sector/) : un système qui
augmente le volume d'activité brut sans améliorer ni maintenir la qualité n'est pas, selon la propre
définition de l'ONS, une amélioration de productivité.

## Pièges à éviter

- **Traiter la croissance des intrants comme une croissance de productivité** : plus de dépenses
  finançant plus de personnel produit plus d'*activité*, pas plus de *productivité*, à moins que la
  réalisation par unité d'intrant n'augmente aussi — les deux sont couramment confondues dans le
  commentaire politique.
- **Ignorer entièrement l'ajustement de qualité** : un indice de réalisation construit uniquement à
  partir de décomptes d'activité bruts affichera des « gains de productivité » issus du fait de faire
  davantage de quelque chose de moindre valeur ou de moindre qualité ; l'ajustement de qualité de l'ONS
  existe spécifiquement pour capturer cela.
- **Comparer des indices de productivité entre sous-secteurs sans faire correspondre le millésime
  méthodologique** : la productivité de la santé, de l'éducation et de la police est chacune construite
  à partir de sources de données d'activité et de qualité différentes sur des cycles de révision
  différents — une comparaison naïve entre secteurs compare des instruments incompatibles.
- **Lire une baisse de productivité d'une seule année comme une tendance permanente** : les chiffres de
  productivité de l'ère pandémique et post-pandémique ont montré une volatilité significative d'une
  année sur l'autre à mesure que les données de qualité elles-mêmes (par exemple les listes d'attente,
  la reprise du programme électif) évoluaient ; l'ONS met constamment en garde contre la
  sur-interprétation des mouvements d'une seule année.

## Sources

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
