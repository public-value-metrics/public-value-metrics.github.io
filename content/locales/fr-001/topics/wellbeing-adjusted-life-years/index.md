# Années de vie ajustées sur le bien-être (WELLBY)

Un WELLBY est un point supplémentaire de satisfaction de vie, sur l'échelle standard de bien-être de 0 à
10, pour une personne pendant un an. C'est l'analogue structurel du QALY utilisé en économie de la
santé — une unité unique qui permet de comparer des interventions dont les résultats n'ont rien d'autre
en commun — mais construit sur le bien-être subjectif plutôt que sur des états de santé cliniques, et
exposé dans le « Wellbeing guidance for appraisal: supplementary Green Book guidance » (2021) du HM
Treasury.

## Pourquoi c'est important

L'évaluation coût-bénéfice a besoin d'une unité commune pour comparer une subvention de club de jeunes à
un dispositif de sécurité routière à un service de santé mentale, dont aucun ne partage une mesure de
résultat. L'économie de la santé a résolu cela pour les interventions cliniques avec le QALY : une
année de vie ajustée sur la qualité, pondérée de 0 (mort) à 1 (pleine santé). Les orientations sur le
bien-être du HM Treasury étendent la même logique aux dépenses publiques non liées à la santé, en
utilisant la question harmonisée de satisfaction de vie de l'ONS (« Dans l'ensemble, à quel point êtes-
vous satisfait de votre vie actuellement ? », répondue de 0 à 10) comme échelle de résultat plutôt qu'un
indice d'état de santé. Un WELLBY de 1 signifie la satisfaction de vie d'une personne augmentant d'un
point entier pendant un an (ou, de manière équivalente, la satisfaction de dix personnes augmentant de
0,1 point chacune pendant un an — les WELLBY s'additionnent sur une population de la même façon que les
QALY). Les orientations du HM Treasury fixent une valeur monétaire illustrative par WELLBY (environ
13 000 £, prix 2019/20) dérivée en réconciliant les données de bien-être subjectif avec d'autres
approches de la valeur d'une année de vie, donnant aux évaluateurs un moyen de monétiser des résultats —
réduction de l'isolement, cohésion communautaire, accès aux espaces verts — que les techniques de
[valorisation du bien-être](../wellbeing-valuation/) ne pouvaient auparavant que décrire, sans les
comparer sur un pied d'égalité avec les dépenses de santé ou de sécurité.

## Le calcul

```
WELLBY = Δ life satisfaction (0–10 scale) × number of years the change persists
        (summed across all people affected)

Monetized wellbeing benefit = WELLBYs generated × value per WELLBY (HMT reference value)

cf. QALY = Δ health-state utility (0–1 scale) × years lived in that state
```

L'échelle de satisfaction de 0 à 10 et l'échelle d'utilité QALY de 0 à 1 ne sont pas interchangeables
sans une étape de conversion ; les orientations du HM Treasury traitent de la réconciliation des deux
afin que, par exemple, une intervention de santé évaluée en QALY et une intervention sociale évaluée en
WELLBY ne soient ni silencieusement doublement comptées ni laissées incomparables au sein de la même
[évaluation Green Book](../green-book-appraisal/).

## Exemple chiffré

**Service de lutte contre l'isolement d'une collectivité locale** : un dispositif d'accompagnement
amical sert 400 résidents âgés isolés. Les enquêtes de suivi montrent que la satisfaction de vie moyenne
passe de 5,2 à 6,0 (un gain de 0,8 point), et l'effet est estimé persister 2 ans avant de s'estomper.

```
WELLBYs = 400 people × 0.8 points × 2 years = 640 WELLBYs

Monetized value = 640 × £13,000 = £8,320,000
```

Face à un coût de programme annuel de 300 000 £ (600 000 £ sur 2 ans), le ratio bénéfice-coût est
d'environ 8 320 000 / 600 000 ≈ **13,9:1** — un chiffre qui peut désormais figurer dans le même tableau
d'évaluation qu'un coût par QALY évité d'un dispositif de santé ou des économies de temps de trajet d'un
dispositif de transport.

**Association, plus petite échelle** : un programme d'arts communautaires touche 50 participants avec un
gain de satisfaction mesuré de 0,3 point, d'une durée de 1 an.

```
WELLBYs = 50 × 0.3 × 1 = 15 WELLBYs
Monetized value = 15 × £13,000 = £195,000
```

## Lien avec l'ingénierie logicielle

- Tout service destiné aux citoyens qui recueille déjà un élément d'enquête de satisfaction de vie ou de
  bien-être (de nombreuses plateformes de collectivités locales et de santé et aide sociale le font, en
  suivant les quatre questions standard de bien-être de l'ONS) peut calculer les WELLBY directement à
  partir des chaînes de données existantes plutôt que de commander une évaluation économique sur mesure
  pour chaque changement de service.
- Les WELLBY donnent aux équipes d'ingénierie construisant pour le reporting du
  [Social Value Act](../social-value-act/) ou le [retour social sur investissement](../social-return-on-investment/)
  un dénominateur standardisé nationalement et approuvé par le HM Treasury, évitant la prolifération de
  « scores d'impact » sur mesure incomparables entre contrats ou fournisseurs.
- Parce que les WELLBY sont additifs sur les personnes et le temps, ils se composent proprement avec le
  type de suivi de résultats de niveau population utilisé dans les systèmes de
  [redevabilité fondée sur les résultats](../outcomes-based-accountability/) — un tableau de bord de
  service peut rapporter les WELLBY cumulés générés par trimestre de la même façon qu'un système de santé
  rapporte les QALY gagnés.

## Pièges à éviter

- **Supposer que les gains de satisfaction autodéclarés sont entièrement attribuables à
  l'intervention** — sans contrefactuel (groupe de comparaison ou conception avant/après avec
  contrôles), vous ne pouvez pas séparer le gain de WELLBY des tendances générales ; voir
  [analyse contrefactuelle](../counterfactual-analysis/).
- **Mélanger WELLBY et QALY dans un seul total sans réconciliation** — les orientations du HM Treasury
  sont explicites : les deux utilisent des échelles différentes et des théories de valeur sous-jacentes
  différentes ; les additionner naïvement compte deux fois un bien-être qui se chevauche.
- **Utiliser la valeur monétaire de référence sans esprit critique** — le chiffre en £ par WELLBY est
  une estimation moyenne nationale avec de réelles bandes d'incertitude ; les orientations du HM
  Treasury recommandent une analyse de sensibilité, pas de le traiter comme un taux de change fixe.

## Sources

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
