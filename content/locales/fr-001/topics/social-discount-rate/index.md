# Taux d'actualisation social

Le taux d'actualisation social convertit les coûts et avantages futurs en valeurs actuelles, de sorte
que des programmes dont les retombées s'étalent sur plusieurs décennies puissent être comparés sur
une base commune. Le Green Book de HM Treasury impose un barème dégressif ancré à 3,5 % pour les 30
premières années, fondé sur la formule de Ramsey — un chiffre précis et citable qui devient un enjeu
politique et éthique vivant chaque fois qu'il est appliqué à des engagements à long horizon comme la
politique climatique ou les infrastructures.

## Pourquoi c'est important

Une livre sterling d'avantage reçue dans 30 ans ne vaut pas une livre sterling d'avantage reçue
aujourd'hui, pour des raisons qui relèvent en partie de la pure préférence temporelle (les personnes
et les sociétés préfèrent les bonnes choses plus tôt) et en partie de la croissance (une société
future est censée être plus riche, de sorte qu'une livre compte moins pour elle à la marge). L'annexe
6 du Green Book dérive le taux d'actualisation standard du Royaume-Uni de la formule de Ramsey, en
combinant un taux de pure préférence temporelle avec le taux de croissance attendu de la consommation
et l'élasticité de l'utilité marginale de la consommation, produisant le taux publié de 3,5 % par an
pour les années 0 à 30, dégressif selon un barème publié pour les années 31 et au-delà (jusqu'à 1 %
pour les années 301 et suivantes). Ce barème existe précisément parce qu'un taux constant de 3,5 %
composé sur un siècle rendrait pratiquement tout avantage à long horizon — une protection contre les
inondations sauvant des vies dans 80 ans, une réduction de carbone évitant un dommage dans 100 ans —
négligeable en valeur actuelle, ce que le Treasury a jugé être une conclusion éthique implausible
pour des décisions d'infrastructure et environnementales véritablement de long terme.

Le taux d'actualisation est contesté précisément parce que ce choix n'est pas un paramètre technique
neutre : il encode un jugement sur l'ampleur du sacrifice qu'une société devrait consentir aujourd'hui
pour des personnes qui ne sont pas encore nées. Le Stern Review sur l'économie du changement
climatique (2006) a utilisé un taux d'actualisation proche de zéro (une pure préférence temporelle
proche de 0,1 %), soutenant qu'actualiser le bien-être des générations futures à des taux proches de
ceux du marché est éthiquement indéfendable lorsque le dommage (un changement climatique
catastrophique) est irréversible. Des critiques — notamment William Nordhaus — ont fait valoir que le
taux quasi nul de Stern surestimait les arguments en faveur d'une dépense climatique immédiate en
faisant paraître justifié presque tout coût présent face à un avantage futur à peine actualisé. Le
désaccord ne portait pas sur le calcul ; il portait sur le cadre éthique qui devait fixer le taux, et
il demeure l'illustration classique du fait que le taux d'actualisation est un choix de politique
publique, et non un simple intrant actuariel.

## Le calcul

La formule de Ramsey sous-tendant le taux du Green Book :

```
r = ρ + η·g

where:
  r = social discount rate
  ρ = rate of pure time preference (impatience + catastrophe risk)
  η = elasticity of marginal utility of consumption
  g = expected annual growth rate of per-capita consumption
```

Le barème dégressif du Green Book (annexe 6, à titre indicatif — vérifier le tableau officiel publié
dans l'édition en vigueur) :

```
Years 0–30:    3.5%
Years 31–75:   3.0%
Years 76–125:  2.5%
Years 126–200: 2.0%
Years 201–300: 1.5%
Years 301+:    1.0%
```

Valeur actuelle d'une somme future :

```
PV = FV / (1 + r)^t
```

## Exemple chiffré

**Projet de protection contre les inondations** : un projet évite 10 millions de £ de dommages
d'inondation à l'année 40.

En utilisant un taux uniforme de 3,5 % : PV = 10 000 000 / (1,035)^40 ≈ 2,52 millions de £ — l'avantage
paraît faible.

En utilisant le barème dégressif du Green Book (3,5 % pour les années 0 à 30, 3,0 % ensuite), le
calcul compose à 3,5 % pour les 30 premières années et à 3,0 % pour les années 31 à 40 :

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 million
```

Le barème dégressif relève modestement la valeur actuelle des avantages à long horizon par rapport à
un taux uniforme élevé — c'est l'objectif explicite du barème, puisqu'un taux uniforme de 3,5 % sur
un siècle actualiserait un avantage de 100 millions de £ à l'année 100 à moins de 3,3 millions de £.

**Infrastructure numérique** : une migration vers l'informatique en nuage gouvernementale coûtant
4 millions de £ aujourd'hui devrait éviter 500 000 £/an de coûts de maintenance de systèmes hérités
pendant 15 ans. À 3,5 %, la valeur actuelle de cette annuité est d'environ 500 000 £ × 11,52 (le
facteur d'annuité à 15 ans à 3,5 %) ≈ 5,76 millions de £ — dépassant confortablement le coût de
4 millions de £, un cas de valeur actuelle nette positive qui paraîtrait nettement plus fragile avec
un taux plus élevé choisi naïvement (à 7 %, le même facteur d'annuité tombe à environ 9,11, donnant
4,56 millions de £, toujours positif mais avec une marge bien plus mince).

## Lien avec l'ingénierie logicielle

La plupart des dossiers d'affaires logiciels s'étalent sur 3 à 5 ans, bien à l'intérieur de la bande
uniforme de 3,5 %, de sorte que le barème dégressif intervient rarement directement — mais la
discipline sous-jacente importe pour tout investissement technologique gouvernemental ayant une
durée de vie d'actif longue (une plateforme nationale, un programme d'infrastructure de données, un
contrat pluridécennal) :

- Utiliser le taux publié du Green Book plutôt qu'un « taux plancher » interne emprunté à la finance
  privée ; les auditeurs et les examinateurs du Treasury attendront le barème standard.
- Pour des avantages réalisés de nombreuses années plus tard (les économies de maintenance à long
  terme d'une plateforme, la valeur cumulative d'un écosystème de données ouvertes — voir
  [valeur des données ouvertes](../open-data-value/)), le choix d'actualisation peut faire basculer
  un dossier d'affaires du positif au négatif ; il faut expliciter le taux et l'horizon comme des
  hypothèses assumées, et non des valeurs par défaut enfouies.
- Ceci s'intègre directement dans l'[évaluation selon le Green Book](../green-book-appraisal/), le
  modèle à cinq volets qui exige formellement un flux de trésorerie actualisé, et dans la
  [valorisation du bien-être](../wellbeing-valuation/), où la même question d'actualisation se pose
  pour les avantages de bien-être non monétaires.
- Voir aussi
  [équité intergénérationnelle et actualisation de la durabilité](../intergenerational-equity-and-sustainability-discounting/)
  pour le débat Stern-Nordhaus appliqué spécifiquement à l'investissement environnemental et
  climatique en technologie.

## Pièges à éviter

- **Utiliser un taux uniforme pour des horizons très longs.** Le barème dégressif du Green Book
  existe précisément parce qu'un taux constant sous-estime des avantages véritablement de long
  terme ; il faut vérifier quelle bande s'applique plutôt que de recourir par défaut à 3,5 % tout au
  long de la période.
- **Traiter le taux d'actualisation comme éthiquement neutre.** Le différend Stern-Nordhaus montre
  que le taux encode un jugement de valeur sur les générations futures ; le modifier change quels
  programmes paraissent justifiés, il doit donc être énoncé et défendu, et non caché dans une valeur
  par défaut de tableur.
- **Confondre le taux d'actualisation social avec un coût du capital privé.** Les coûts d'emprunt de
  l'État et les taux plancher du secteur privé sont des notions différentes du taux social dérivé de
  Ramsey, et substituer l'un à l'autre dans une évaluation publique déformera typiquement le résultat
  en faveur des retours à court terme.
- **Actualiser des flux de trésorerie réels et nominaux de manière incohérente.** Le taux du Green
  Book est un taux réel (corrigé de l'inflation) ; l'utiliser pour actualiser des flux nominaux
  sous-estime sensiblement les valeurs actuelles.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
