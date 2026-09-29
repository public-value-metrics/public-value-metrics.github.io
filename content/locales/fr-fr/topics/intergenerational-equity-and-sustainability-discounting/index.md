# Équité intergénérationnelle et actualisation de la soutenabilité

Actualiser les coûts et bénéfices futurs pour les ramener à leur valeur actuelle est une pratique
standard de l'évaluation publique — voir le [taux d'actualisation social](../social-discount-rate/) —
mais tout taux d'actualisation positif, composé sur des décennies ou des siècles, réduit l'avenir
lointain vers zéro en termes actuels. Pour les décisions aux conséquences s'étendant sur un siècle ou
plus — changement climatique, déchets nucléaires, perte de biodiversité, soutenabilité des retraites —
ce fait mathématique devient un fait éthique : une actualisation standard peut faire apparaître un
préjudice catastrophique pour les générations futures comme, en valeur actuelle, à peine digne d'être
évité.

## Pourquoi c'est important

L'équation de Ramsey, établie par Frank Ramsey en 1928, décompose le taux d'actualisation en deux
composantes : la préférence temporelle pure (δ, à quel point nous préférons simplement le présent au
futur, indépendamment de la richesse) et l'effet de croissance de la richesse (η×g, à quel point nous
actualisons parce que les générations futures devraient être plus riches, de sorte qu'une livre
supplémentaire compte moins pour elles). Le taux d'actualisation à long terme standard du Green Book
britannique est construit sur cette équation et suit un barème *décroissant* plutôt qu'un taux fixe — une
conception enracinée dans les travaux de Martin Weitzman sur l'« actualisation gamma », qui montrent que
lorsque le taux d'actualisation futur est lui-même incertain, le taux équivalent-certain à appliquer
décroît mathématiquement dans le temps, car les scénarios à faible taux finissent par dominer à mesure
que l'on regarde plus loin. La Stern Review sur l'économie du changement climatique (2006), dirigée par
Sir Nicholas Stern, a poussé le débat éthique plus loin : Stern a soutenu que la préférence temporelle
pure devrait être fixée près de zéro (il a utilisé δ ≈ 0,1 %, reflétant seulement la faible probabilité
d'une catastrophe mettant fin à la civilisation, et non une véritable préférence pour le présent sur
l'avenir), produisant un taux d'actualisation effectif bien plus faible que la pratique conventionnelle
du Green Book et, en conséquence, un argument bien plus fort en faveur de l'action climatique
aujourd'hui. Des critiques (notamment William Nordhaus) ont fait valoir que le taux quasi nul de Stern
était défendable éthiquement mais incohérent avec le comportement d'épargne et d'investissement
réellement observé. Ce désaccord n'est pas une note technique de bas de page — c'est la raison la plus
importante pour laquelle deux économistes tout aussi rigoureux peuvent parvenir à des conclusions
radicalement différentes sur le sacrifice que la génération présente devrait consentir pour l'avenir, et
c'est la raison pour laquelle les logiciels soutenant l'évaluation d'investissements publics à long
horizon doivent exposer leurs hypothèses d'actualisation plutôt que de les enfouir dans une valeur par
défaut de tableur.

## Le calcul

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as people get richer)
  g = expected growth rate of per-capita consumption

Green Book declining long-term schedule (approximate, current published bands):
  Years 0–30:    3.5%
  Years 31–75:   3.0%
  Years 76–125:  2.5%
  Years 126–200: 2.0%
  Years 201–300: 1.5%
  Years 301+:    1.0%

Stern Review parameters: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Exemple chiffré

**Valeur aujourd'hui de 1 £ de préjudice évité dans 100 ans**, sous trois régimes d'actualisation :

```
Flat Green Book short-term rate (3.5%, held constant for 100 years):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pence)

Green Book declining schedule (3.5% for yrs 1–30, 3.0% for yrs 31–75,
2.5% for yrs 76–100):
  factor(1–30)  = 1.035^30  ≈ 2.807
  factor(31–75) = 1.03^45   ≈ 3.782
  factor(76–100)= 1.025^25  ≈ 1.854
  total factor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pence)

Stern-style near-zero pure time preference (r ≈ 1.4% flat):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pence)
```

Le même 1 £ de préjudice évité dans un siècle vaut 3,2 pence, 5,1 pence ou 25 pence aujourd'hui, selon
purement la convention d'actualisation utilisée — un écart de près de huit fois qui détermine si un
projet d'atténuation climatique à coût initial élevé et bénéfice à un siècle franchit ou non le seuil de
VAN positive. C'est le mécanisme derrière l'avertissement central de ce chapitre : à tout taux fixe
significativement positif, un préjudice futur suffisamment lointain est arithmétiquement effacé de
l'évaluation, quelle que soit sa gravité réelle.

## Lien avec l'ingénierie logicielle

- Tout outil d'évaluation ou de dossier d'affaires à long horizon (infrastructure, adaptation
  climatique, modélisation des retraites) devrait implémenter le barème *décroissant* du Green Book, et
  non un taux fixe unique — une valeur par défaut à taux fixe intègre discrètement un biais anti-futur
  bien plus fort que ce que spécifient les orientations actuelles du gouvernement britannique.
- Le taux d'actualisation et l'horizon devraient toujours être exposés comme des paramètres visibles et
  auditables dans les logiciels d'évaluation, avec la sensibilité du calcul à ces paramètres montrée
  explicitement (comme dans l'exemple chiffré ci-dessus) — enfouir le taux dans un fichier de
  configuration invite exactement le « choix éthique caché » que met en garde le débat Stern-Nordhaus ;
  cela rejoint le point de transparence soulevé dans la
  [comptabilité du capital naturel](../natural-capital-accounting/) et sous-tend le sujet du
  [taux d'actualisation social](../social-discount-rate/) en général.
- Lorsque les bénéfices d'un programme sont explicitement intergénérationnels (protection contre les
  inondations, restauration du capital naturel, infrastructure numérique à long terme), une
  [analyse coût-bénéfice sociale](../social-cost-benefit-analysis/) devrait rapporter des résultats
  sous au moins deux hypothèses d'actualisation (le standard du Green Book et un cas de sensibilité à
  taux faible), plutôt qu'une estimation ponctuelle unique, afin que les décideurs voient à quel point
  le seul choix du taux d'actualisation fait bouger la réponse.

## Pièges à éviter

- **Présenter une VAN actualisée unique sans fourchette de sensibilité** — étant donné l'ampleur avec
  laquelle le seul taux d'actualisation change la réponse pour les projets à long horizon, une VAN à
  taux unique surestime matériellement la précision ; rapportez toujours une fourchette couvrant au
  moins le standard du Green Book et un scénario à taux faible.
- **Appliquer le taux fixe à court terme (3,5 %) à une évaluation pluriséculaire** — les orientations
  propres du Green Book spécifient le barème décroissant précisément parce que le taux fixe a été jugé
  inapproprié au-delà d'environ 30 ans ; l'utiliser quand même sous-estime les coûts à long terme.
- **Traiter δ (la préférence temporelle pure) comme un paramètre purement technique** — la valeur quasi
  nulle de Stern et la valeur implicite plus élevée du Green Book ne sont défendables toutes deux que
  comme des positions éthiques sur le poids que le présent doit à l'avenir, et non comme des chiffres
  empiriquement « corrects » ou « incorrects » ; les logiciels devraient rendre l'hypothèse visible
  plutôt que de présenter un chiffre comme objectivement juste.

## Sources

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
