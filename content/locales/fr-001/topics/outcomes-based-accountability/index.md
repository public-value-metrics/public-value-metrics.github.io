# Redevabilité fondée sur les résultats (Outcomes-Based Accountability, OBA)

La redevabilité fondée sur les résultats (Outcomes-Based Accountability, OBA), aussi appelée
redevabilité fondée sur les résultats (Results-Based Accountability, RBA), est le cadre de Mark Friedman
pour séparer deux questions que le reporting du secteur public a l'habitude de confondre : « la
population se porte-t-elle bien ? » (redevabilité de population) et « ce programme spécifique se
porte-t-il bien ? » (redevabilité de performance). Confondre les deux est, selon Friedman, la raison la
plus courante pour laquelle des programmes bien gérés se voient reprocher des tendances de population
qu'ils n'ont jamais eu le pouvoir de faire bouger.

## Pourquoi c'est important

Friedman a exposé ce cadre dans *Trying Hard Is Not Good Enough* (2005), soutenant que la plupart des
rapports publics noient soit les décideurs sous des statistiques de niveau population qu'aucune agence
unique ne contrôle (taux de grossesse chez les adolescentes, taux de chômage, espérance de vie), soit
les noient sous des décomptes d'activité de niveau programme (clients vus, orientations effectuées) qui
ne disent rien sur le fait que la vie de quelqu'un s'est améliorée. La contribution de la RBA est un
vocabulaire restreint et discipliné qui maintient les deux séparés : les résultats de population (les
conditions de bien-être d'une population entière, comme « les enfants naissent en bonne santé »)
n'appartiennent à aucune agence unique et exigent que de nombreux partenaires avancent ensemble ; les
mesures de performance (à quel point un programme spécifique sert ses clients spécifiques)
appartiennent à une seule agence et ne devraient être jugées qu'au regard de ce que cette agence peut
réellement influencer. Les « trois questions de performance » de Friedman — combien avons-nous fait,
à quel point l'avons-nous bien fait, et est-ce que quelqu'un va mieux ? — sont désormais intégrées dans
les contrats de services humains des États et comtés américains et, via le cabinet de conseil et la
boîte à outils alignés sur la RBA, Clear Impact, largement utilisées dans la commande publique locale
britannique et du Commonwealth. Les enjeux pratiques sont contractuels : un programme de logement ne
devrait pas être definancé parce que le taux de sans-abrisme de la ville a augmenté pour des causes
macroéconomiques hors de sa portée, mais il devrait absolument l'être si ses propres clients ne sont
pas logés.

## Le calcul

```
Population accountability (the "big picture" a community, region, or nation shares):
  Result       — a condition of wellbeing (e.g. "residents are economically secure")
  Indicator(s) — a measure of that condition (e.g. unemployment rate, median household income)
  → no single programme owns the indicator; movement requires many contributors

Performance accountability (what one programme is responsible for):
  How much did we do?      — activity volume (clients served, units delivered)
  How well did we do it?   — quality/efficiency (% completing programme, cost per client)
  Is anyone better off?    — the outcome that matters (% in employment 6 months after
                              programme, before/after or against a comparison group)

A programme is judged on the third performance question, never on the population
indicator directly, unless its scale and design could plausibly move it alone.
```

## Exemple chiffré

**Programme de soutien à l'emploi financé par une ville**, 500 participants/an, sous contrat avec une
collectivité locale selon un cadre de performance de type RBA :

```
Population indicator (context, not the programme's scorecard):
  City unemployment rate: 6.2% (up from 5.8% the prior year, driven by a factory closure
  outside the programme's control)

Performance measures (the programme's actual accountability):
  How much:   500 participants enrolled (target 480) — met
  How well:   78% completion rate; cost per completer = £340,000 / 390 completers ≈ £872
  Better off: of 390 completers, 260 in sustained employment at 6 months = 66.7%
              versus a matched comparison group's 41% (see counterfactual-analysis)
```

Selon une lecture de redevabilité de population, le programme semble échouer — le taux de chômage de
la ville a augmenté pendant sa mise en œuvre. Selon la lecture de redevabilité de performance de la
RBA, le programme réussit : il a atteint sa cible de volume, maintenu la qualité stable, et produit un
résultat d'emploi supérieur de 25,7 points de pourcentage à celui d'un groupe de comparaison apparié,
tandis que l'indicateur de population évoluait pour des raisons (une fermeture d'usine) entièrement
hors du contrôle du programme.

## Lien avec l'ingénierie logicielle

La RBA se transpose directement sur une distinction SRE familière : les indicateurs de population sont
comme des indicateurs North Star de niveau entreprise qu'aucune équipe d'ingénierie unique ne possède de
bout en bout (chiffre d'affaires de l'entreprise, part de marché), tandis que les mesures de performance
sont comme les propres objectifs de niveau de service (SLO) d'une équipe — les éléments que les
décisions de conception de cette équipe font réellement bouger. Un tableau de bord qui rapporte les deux
sans étiqueter lequel est lequel invite exactement à la mauvaise attribution que la RBA a été conçue
pour prévenir : un ingénieur d'astreinte se faisant reprocher un indicateur qu'une équipe dépendante
contrôle. Lors de la commande ou de la construction d'outils de reporting pour des contrats de résultats,
construisez la triade « combien / à quel point bien / mieux lotis » comme des champs de premier ordre,
filtrables séparément, plutôt que comme un indicateur clé unique et mélangé — c'est la même discipline
que séparer les indicateurs avancés et retardés dans les
[indicateurs clés du secteur public](../public-sector-kpis/). La RBA est aussi la logique de
redevabilité sous-jacente au
[paiement aux résultats et obligations à impact social](../payment-by-results-and-social-impact-bonds/) :
un contrat PbR ne peut équitablement payer que sur la mesure de performance « mieux lotis », jamais sur
l'indicateur de population, à moins que l'intervention n'en soit véritablement le moteur dominant.

## Pièges à éviter

- **Payer ou pénaliser un programme au regard d'un indicateur de population qu'il ne contrôle pas** :
  c'est précisément l'erreur que la RBA existe pour prévenir ; retracez toujours si le programme est un
  contributeur majeur ou mineur au résultat de population avant d'y attacher des conséquences.
- **Rapporter « combien » comme s'il s'agissait de « mieux lotis »** : les décomptes d'activité (clients
  vus) sont les données les plus faciles à collecter et les moins informatives ; insistez pour que la
  question « est-ce que quelqu'un va mieux » reçoive une réponse fondée sur des données de résultats
  réelles, idéalement au regard d'un contrefactuel (voir
  [analyse contrefactuelle](../counterfactual-analysis/)).
- **Traiter les indicateurs de la RBA comme figés pour toujours** : la méthode de Friedman est
  explicitement itérative — un cycle « données, récit, ce qui fonctionne, plan d'action » — et non un
  exercice de conception de tableau de bord ponctuel.
- **Aucun groupe de comparaison pour « mieux lotis »** : un changement avant/après sans contrefactuel
  confond l'effet du programme avec la tendance que la population aurait de toute façon suivie.

## Sources

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
