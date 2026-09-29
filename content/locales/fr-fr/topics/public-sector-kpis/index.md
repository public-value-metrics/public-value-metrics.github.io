# Indicateurs clés de performance du secteur public (KPI)

Un indicateur clé de performance (KPI) est une mesure choisie et suivie qui tient lieu de baromètre
pour savoir si un service public accomplit bien sa mission. Dans le secteur public, le choix d'un KPI
n'est jamais neutre : parce que les KPI se rattachent à des budgets, des classements comparatifs et des
carrières, l'acte d'en sélectionner un façonne le comportement de tous ceux qui en dépendent en aval,
souvent plus que la politique qui a créé le service.

## Pourquoi c'est important

L'observation de Charles Goodhart sur la politique monétaire en 1975 — plus tard popularisée par
Marilyn Strathern sous la forme « quand une mesure devient une cible, elle cesse d'être une bonne
mesure » — est l'avertissement le plus important en gestion de la performance du secteur public. Un KPI
choisi pour *décrire* un système commence à *déformer* ce système dès l'instant où les moyens, la
rémunération ou la survie politique lui sont liés. L'illustration canonique est le temps de réponse des
ambulances du NHS : quand la cible de réponse de huit minutes pour les appels de catégorie A est
devenue contraignante, certains trusts se sont révélés « empiler » les ambulances juste hors du chrono
de réponse, ou reclasser les appels, pour atteindre le chiffre sans changer les résultats pour les
patients. Les orientations du National Audit Office britannique sur le choix et l'usage des indicateurs
de performance — exposées dans ses rapports de rapport qualité-prix et dans son cadre « Performance
Measurement by Regulators » et « Choosing the Right FABRIC » (Fit for purpose, Appropriate, Balanced,
Robust, Integrated, Cost-effective) — existent précisément parce que les ministères continuaient de
choisir des indicateurs faciles à rapporter plutôt que des indicateurs difficiles à manipuler. Un
ingénieur logiciel qui livre le tableau de bord sur lequel un ministre ou un directeur sera jugé conçoit,
qu'il le veuille ou non, la structure d'incitation d'une institution publique.

## Le calcul

La conception des KPI est un sujet façonné par un cadre, mais l'*évaluation* d'un KPI candidat est une
liste de contrôle reproductible, pas une formule :

```
For each candidate KPI, score against:
  Fit for purpose  — does it measure the outcome, or a proxy several steps removed?
  Appropriate      — does it belong to the people who can actually influence it?
  Balanced         — is it paired with a counter-metric that catches gaming?
  Robust           — can it survive audit, or is it self-reported and unverifiable?
  Integrated       — does it fit the wider set, or push against another KPI?
  Cost-effective   — does collecting it cost more than the decision it informs?

Leading vs lagging split:
  Leading indicator  → predicts future outcome, but often gameable (e.g. calls answered <60s)
  Lagging indicator  → confirms the outcome happened, but arrives too late to steer (e.g. annual
                        satisfaction survey)
  A defensible KPI set pairs at least one of each per objective.
```

## Exemple chiffré

**Trust d'ambulances** : un trust rapporte un KPI de temps de réponse de catégorie A (mise en jeu du
pronostic vital) de « 75 % des appels traités en moins de 8 minutes ». Sur un trimestre, 6 000 appels
de catégorie A arrivent ; 4 500 sont traités en moins de 8 minutes, soit 75,0 % — apparemment dans les
clous.

```
Headline KPI = 4,500 / 6,000 × 100 = 75.0%  (meets the 75% threshold)
```

Mais un audit à la Goodhart ajoute un indicateur contre-mesure : le temps de réponse moyen pour les
10 % d'appels les plus lents.

```
Slowest decile mean response = 34 minutes (up from 19 minutes two years earlier)
```

Le trust atteint la cible tandis que la queue de distribution — les appels les plus susceptibles
d'engager véritablement le pronostic vital une fois le triage imparfait — s'est fortement dégradée, car
les équipages sont priorisés vers les appels proches de la falaise des 8 minutes plutôt que vers
l'urgence clinique. Le KPI unique racontait une histoire fausse ; le KPI apparié racontait la vraie.

## Lien avec l'ingénierie logicielle

Les ingénieurs qui construisent des tableaux de bord de performance pour le secteur public conçoivent,
fonctionnellement, l'API d'incitation de l'organisation. Implications pratiques : instrumentez le
*dénominateur* avec autant de rigueur que le numérateur (un KPI rapporté comme un simple pourcentage
invite à la manipulation du dénominateur — voir [coût par transaction](../cost-per-transaction/) pour
le même piège dans les services numériques) ; intégrez des contre-mesures dans le même tableau de bord
plutôt que dans un rapport séparé que personne ne lit, afin que la manipulation soit visible au moment
de la décision ; et versionnez la définition du KPI, car une redéfinition silencieuse (changer ce qui
compte comme un « appel », un « dossier » ou un « achèvement ») équivaut fonctionnellement à changer la
cible sans l'annoncer. Un [tableau de bord de la valeur publique](../public-value-scorecard/) est une
façon structurée d'empêcher qu'un KPI unique soit lu isolément, et la
[redevabilité fondée sur les résultats](../outcomes-based-accountability/) est la discipline consistant
à choisir des KPI de niveau population qu'une seule équipe ne peut pas déformer unilatéralement.

## Pièges à éviter

- **Choisir l'indicateur facile à collecter plutôt que le significatif** : le temps de réponse à un
  appel est trivial à journaliser ; le fait que l'appel ait résolu le problème du citoyen ne l'est pas —
  mais seul le second est le résultat. Résistez au réflexe de vous rabattre sur ce que le système émet
  déjà.
- **Aucune contre-mesure** : tout KPI rattaché à de l'argent ou à de la réputation sera manipulé à la
  marge ; livrez-le avec un indicateur apparié qui capture le vecteur de manipulation probable avant de
  le publier.
- **Redéfinir l'indicateur sans journal des modifications** : substituer « appels reçus » par « appels
  répondus » pour flatter une tendance détruit la crédibilité de la série temporelle dès que c'est
  découvert — publiez toujours un journal des définitions aux côtés des chiffres.
- **Confondre activité et résultat** : compter les inspections effectuées est une réalisation ; compter
  les locaux mis en conformité se rapproche du résultat (voir
  [résultats et réalisations](../outcomes-vs-outputs/)).

## Sources

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
