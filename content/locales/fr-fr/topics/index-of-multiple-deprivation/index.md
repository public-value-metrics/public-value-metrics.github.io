# Indice de privation multiple (Index of Multiple Deprivation, IMD)

L'IMD est la mesure officielle de la privation relative pour les petites zones en Angleterre, classant
chacune des 32 844 zones LSOA (Lower-layer Super Output Areas, chacune comptant environ 1 500
habitants) du pays de 1 (la plus défavorisée) à 32 844 (la moins défavorisée). Il est publié par ce qui
est aujourd'hui le Ministry of Housing, Communities and Local Government (MHCLG, anciennement
MHCLG/DCLG), le plus récemment sous le nom d'English Indices of Deprivation 2019, et il oriente
directement le financement du gouvernement central, la priorisation en santé publique et l'éligibilité
à des dizaines de dispositifs locaux.

## Pourquoi c'est important

La privation n'est pas une chose unique — un quartier peut être pauvre en revenu mais sûr, ou
avoir un revenu adéquat tout en souffrant de mauvais résultats de santé et d'un mauvais logement. Les
indices prédécesseurs de l'IMD (remontant aux indicateurs de privation du Department of the Environment
des années 1970) ont évolué vers le modèle actuel à sept domaines précisément parce que le ciblage sur
un indicateur unique (le seul taux de chômage, par exemple) manquait régulièrement des zones défavorisées
d'autres manières. L'IMD 2019 combine revenu, emploi, éducation, santé, criminalité, obstacles au
logement et aux services, et environnement de vie en un seul classement composite par LSOA, chaque
domaine étant construit à partir de son propre panier d'indicateurs et pondéré selon la méthodologie du
MHCLG. Parce qu'il opère au niveau de la petite zone (LSOA) plutôt qu'au niveau de la collectivité
locale, il révèle des poches de privation cachées à l'intérieur de districts par ailleurs aisés — c'est
la raison pour laquelle c'est l'IMD, et non le revenu moyen de la collectivité locale, sur lequel se
calent réellement le NHS England, la prime pour élèves défavorisés (pupil premium) du Department for
Education, et des dizaines de formules de financement des collectivités locales. Les logiciels qui
déterminent l'éligibilité, priorisent les actions de proximité, ou rapportent l'impact par zone en
Angleterre devraient traiter le décile ou le rang IMD comme une entrée de premier ordre, et non comme
une réflexion après coup — et lorsqu'un programme cible délibérément les zones les plus défavorisées,
son évaluation devrait appliquer une [pondération distributive](../distributional-weighting/) cohérente
avec ce ciblage, plutôt que de valoriser une livre de bénéfice de la même façon quel que soit l'endroit
où elle atterrit.

## Le calcul

```
7 domains, weighted:
  Income                              22.5%
  Employment                          22.5%
  Education, Skills and Training      13.5%
  Health Deprivation and Disability   13.5%
  Crime                                9.3%
  Barriers to Housing and Services     9.3%
  Living Environment                   9.3%

Each domain score: indicators standardized (ranked, then transformed
towards a normal distribution) and combined by exponential transformation
so that high deprivation on any one indicator cannot be fully cancelled
out by low deprivation on others within that domain.

IMD composite score (LSOA) = Σ (domain score × domain weight)
Rank LSOAs by composite score → 1 (most deprived) to 32,844 (least deprived)
Deciles: rank ÷ 3,284 (approx.), decile 1 = most deprived 10% of LSOAs
```

## Exemple chiffré

**Score composite d'une LSOA**, utilisant des scores de domaine standardisés illustratifs (0 = aucun
signal de privation, plus élevé = plus défavorisé) :

```
Income               0.35 × 0.225 = 0.07875
Employment           0.30 × 0.225 = 0.06750
Education            0.20 × 0.135 = 0.02700
Health               0.15 × 0.135 = 0.02025
Crime                0.10 × 0.093 = 0.00930
Barriers to Housing  0.05 × 0.093 = 0.00465
Living Environment   0.08 × 0.093 = 0.00744

Composite score = 0.07875 + 0.06750 + 0.02700 + 0.02025
                + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

Ce score composite est ensuite classé par rapport aux scores de toutes les 32 844 LSOA. S'il place la
LSOA au rang 2 950, elle tombe dans le décile 1 (2 950 ÷ 3 284 ≈ 0,9, c'est-à-dire parmi les 10 % de
quartiers les plus défavorisés d'Angleterre) — ce qui, pour de nombreuses formules de financement, est
le seuil qui déclenche l'éligibilité, quel que soit le score moyen de la collectivité locale environnante.

## Lien avec l'ingénierie logicielle

- Tout service qui géocode les usagers vers un code postal ou une LSOA peut joindre la table de
  correspondance IMD publiée (un CSV gratuit et versionné du MHCLG) pour ajouter le décile de privation
  comme covariable — pour cibler des actions de proximité, prioriser une charge de dossiers, ou
  rapporter des résultats par tranche de privation sans collecter de nouvelles données personnelles.
- Le décile IMD est un contrôle d'équité standard pour les services numériques publics : croiser
  l'adoption, l'abandon ou la satisfaction d'un service par décile IMD révèle des écarts d'accès qu'un
  indicateur agrégé masque — voir [inclusion numérique](../digital-inclusion/) et
  [indicateurs de satisfaction des citoyens](../citizen-satisfaction-metrics/).
- Parce que le rang IMD est relatif (il totalise toujours un ensemble fixe de rangs à travers
  l'Angleterre), il ne peut pas montrer si la privation nationale augmente ou diminue dans le temps —
  seulement quelles zones se classent où les unes par rapport aux autres dans cette édition ; ne
  construisez pas de tableaux de bord de tendance absolue sur le seul rang IMD brut.

## Pièges à éviter

- **Comparer les rangs IMD entre éditions (2015 contre 2019) comme une tendance temporelle** — les
  indicateurs sous-jacents, les géographies et la méthodologie changent tous entre éditions ; le MHCLG
  déconseille explicitement d'utiliser les changements de rang comme preuve qu'une zone est devenue plus
  ou moins défavorisée.
- **Appliquer l'IMD au niveau LSOA à des individus** — une LSOA en décile 1 contient encore des foyers
  non défavorisés, et une LSOA en décile 10 contient encore des foyers défavorisés ; l'IMD décrit des
  zones, pas des personnes, et l'utiliser comme indicateur d'éligibilité individuelle produit des
  erreurs de classification dans les deux sens.
- **Ignorer le détail au niveau du domaine au profit du rang composite** — deux LSOA avec des scores
  composites identiques peuvent avoir des profils de domaine complètement différents (l'une défavorisée
  en santé, l'autre en criminalité) ; un dispositif de ciblage visant un problème donné devrait utiliser
  le score de domaine pertinent, pas le composite mélangé.

## Sources

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
