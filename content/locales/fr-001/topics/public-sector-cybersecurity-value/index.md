# Valeur de la cybersécurité dans le secteur public

La valeur de la cybersécurité dans le secteur public est la discipline consistant à chiffrer la
réduction de risque : quelle est la valeur de rendre une violation de données citoyennes moins probable,
sachant que la dépense de sécurité ne produit aucune réalisation visible quand elle fonctionne et une
réalisation très visible quand elle échoue ? Pour un service détenant des dossiers de prestations, des
données de santé ou des dossiers fiscaux, cette propriété d'« invisibilité quand ça marche » est
précisément la raison pour laquelle il a besoin d'un argument de valeur explicite, pas simplement d'une
case de conformité cochée.

## Pourquoi c'est important

Le Cyber Assessment Framework (CAF) du National Cyber Security Centre britannique donne aux
organisations du secteur public un moyen structuré de faire de la sécurité une discipline évaluable et
fondée sur les résultats plutôt qu'une liste de contrôle : il définit quatre objectifs de haut niveau
(gérer le risque de sécurité, se protéger contre les cyberattaques, détecter les événements de
cybersécurité, et minimiser l'impact des incidents) décomposés en résultats contributifs par rapport
auxquels un propriétaire de système peut être évalué, dans le même esprit que le point 9 du
[référentiel de service numérique](../digital-service-standard/) (« créer un service sécurisé qui
protège la vie privée des usagers »). Ce contre quoi l'évaluation CAF protège a un coût documenté : le
Cost of a Data Breach Report d'IBM suit le coût moyen d'une violation par secteur, et a constamment
constaté que le secteur public se situe vers l'extrémité inférieure de la fourchette par rapport à la
finance ou à la santé — les éditions récentes situent la moyenne du secteur public autour de 2,6 à
2,9 millions de dollars par violation — mais « inférieur à la finance » n'est pas « faible », et les
violations gouvernementales entraînent des coûts que les chiffres du rapport ne capturent pas
pleinement : perte de la confiance des citoyens envers les canaux numériques, ce qui déprime
l'[adoption numérique](../channel-shift-savings/) dont dépendent les dossiers d'affaires de report de
canal, et le coût politique et juridique d'exposer des données que l'État a contraint les citoyens à
fournir en premier lieu.

## Le calcul

L'investissement en sécurité se valorise de la même manière que toute dépense de réduction de risque :
comme une réduction de perte attendue, en utilisant l'identité classique de gestion des risques.

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## Exemple chiffré

**Système de gestion de dossiers d'un conseil de comté détenant des dossiers d'aide sociale pour
40 000 résidents** :

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## Lien avec l'ingénierie logicielle

Les ingénieurs possèdent la plupart des leviers de l'équation ALE : la conception du contrôle d'accès,
l'hygiène des dépendances et des correctifs, la couverture de journalisation et de détection, et
l'outillage de réponse aux incidents font tous bouger directement le terme ARO, ce qui explique pourquoi
une évaluation CAF ressemble autant à un examen d'architecture technique qu'à un audit de politique.
C'est la [dette technique comme érosion de la valeur publique](../technical-debt-as-public-value-erosion/)
sous sa forme la plus aiguë — des systèmes non corrigés, non surveillés, mal contrôlés en accès sont une
dette dont le paiement d'intérêt est un risque de queue, non un frein constant — et cela devrait être
réconcilié avec le
[coût total de possession dans l'informatique publique](../total-cost-of-ownership-in-government-it/)
afin que la dépense de sécurité ne soit pas traitée séparément du coût de fonctionnement réel du
système. C'est aussi un intrant direct des évaluations de
[rapport qualité-prix](../value-for-money/) sous le Green Book : le coût ajusté au risque fait partie du
côté « coût » de toute évaluation d'options, et non un ajout de dernière minute.

## Pièges à éviter

- **Traiter l'auto-évaluation CAF comme la sécurité elle-même** : une évaluation complétée décrit une
  posture de sécurité ; elle n'en crée pas une — la valeur réside dans les résultats atteints, pas dans
  le document.
- **Utiliser des coûts de violation moyens mondiaux comme estimation locale sans ajustement** : les
  chiffres d'IBM sont des moyennes sur des échantillons larges et variés ; la perte unique réaliste
  d'une petite collectivité locale est rarement la même que celle d'un ministère national.
- **Ignorer la psychologie du risque de queue dans les décisions d'investissement** : une faible
  probabilité annuelle rend facile de reporter indéfiniment la dépense de sécurité, jusqu'à l'année où
  ce n'est plus le cas — tester la sensibilité du calcul ALE sur une plage d'ARO, comme dans l'exemple
  chiffré, contrecarre cela.
- **Ne compter que le coût de violation de style IBM, pas le coût de confiance** : une violation qui
  déprime la volonté des citoyens d'utiliser les canaux numériques érode l'argument des
  [économies de report de canal](../channel-shift-savings/) pendant des années après coup, un coût
  rarement inclus dans les estimations de coût de violation.

## Sources

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
