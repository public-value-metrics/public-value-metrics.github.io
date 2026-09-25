# Coût par transaction

Le coût par transaction est l'indicateur phare d'économie unitaire d'un service numérique public :
coût total pour délivrer un canal, divisé par le nombre de transactions effectuées à travers lui.
C'était le chiffre emblématique de l'ancienne Performance Platform de GOV.UK, et c'est le chiffre qui a
financé une décennie d'investissement dans le « numérique par défaut » — ce qui est précisément la
raison pour laquelle c'est aussi l'indicateur le plus sujet à manipulation.

## Pourquoi c'est important

Le Digital Efficiency Report de 2012 du Cabinet Office a formulé la comparaison des coûts par canal en
des termes qui ont marqué les esprits : les transactions numériques se sont révélées coûter environ 20
fois moins cher que par téléphone et environ 50 fois moins cher qu'en face à face, avec des chiffres
illustratifs de collectivités locales d'environ 0,15 £ par transaction web contre 2,83 £ par téléphone
et 8,62 £ en face à face. Cette seule comparaison est devenue la justification de la refonte des 25
services exemplaires nommés dans la Government Digital Strategy, et de chaque dossier d'affaires
ministériel citant depuis des économies de report de canal. Le chiffre est réellement utile comme
signal d'ordre de grandeur, mais le ratio dépend entièrement de ce qui est compté de chaque côté : un
coût de canal téléphonique honnête inclut le personnel du centre d'appels, le contrat de téléphonie, la
formation et les locaux ; un coût numérique honnête inclut l'hébergement, les salaires continus de
l'équipe produit, le temps du service d'assistance pour les parcours échoués, et le canal d'assistance
numérique exigé par le point 5 du [référentiel de service numérique](../digital-service-standard/).
Retirez suffisamment de ces éléments du côté numérique et n'importe quel service paraît bon marché.

## Le calcul

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost should include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users who fail digital and fall back to phone)
  − one-off build cost is amortized over expected service life, not
    expensed entirely into year one

The common accounting trick:
  "Marginal cost per transaction" (hosting only, once built) is quoted
  as if it were "average cost per transaction" (total cost including
  the team that keeps building and running it). The two can differ by
  10x or more for a service with a large, active delivery team.
```

## Exemple chiffré

**Service de renouvellement de la taxe sur les véhicules** : 4 millions de transactions/an.

```
Marginal-only figure (the trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quoted in a business case

Fully-loaded figure (the honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loaded figure is still roughly 8x cheaper than the £2.83
phone-channel comparator from the Digital Efficiency Report — a real
and defensible saving — but 7.5x higher than the marginal-only figure
quoted in the shortcut version. Both numbers are "true"; only one is
comparable to the phone-channel cost it's being set against.
```

## Lien avec l'ingénierie logicielle

Le coût par transaction est l'endroit où les décisions d'architecture deviennent un chiffre financier :
un service qui monte en charge proprement et nécessite peu d'intervention manuelle fait baisser ce
chiffre au fil du temps ; un service qui génère un volume élevé de tickets d'assistance à cause d'états
d'erreur confus le fait grimper, indépendamment de l'efficience de l'hébergement. C'est l'indicateur
compagnon naturel du point 10 du
[référentiel de service numérique](../digital-service-standard/) (« définir ce à quoi ressemble le
succès, et publier les données de performance ») et des
[normes de service et indicateurs de transaction](../service-standards-and-transaction-metrics/), qui
définissent l'ensemble plus large d'indicateurs clés dans lequel ce chiffre s'inscrit. Il alimente
aussi directement les calculs d'[économies de report de canal](../channel-shift-savings/) et devrait
être réconcilié avec le
[coût total de possession dans l'informatique publique](../total-cost-of-ownership-in-government-it/)
afin que les frais généraux de plateforme et de services partagés ne soient pas discrètement omis.

## Pièges à éviter

- **Coût marginal déguisé en coût moyen** : citer le coût d'hébergement seul une fois le service
  construit, en omettant l'équipe continue qui le maintient, le fait évoluer et le soutient — voir
  l'exemple chiffré ci-dessus.
- **Exclure le coût de l'assistance numérique** : un canal n'est pas conforme au « numérique par
  défaut », et son coût réel n'est pas saisi, si le repli téléphone/papier exigé par l'
  [inclusion numérique](../digital-inclusion/) est chiffré séparément ou ignoré.
- **Ignorer la demande d'échec** : les transactions qui commencent en numérique et échouent, générant
  quand même un appel téléphonique ou un formulaire papier, sont un coût du canal numérique, pas du
  canal qui rattrape l'échec.
- **Comparer des transactions de complexité différente entre canaux** : les appels téléphoniques
  traitent de manière disproportionnée les cas difficiles (personnes à charge multiples, correction
  d'erreurs, demandeurs vulnérables) ; comparer un coût téléphonique moyen à un coût numérique moyen
  surestime le ratio à moins que la composition des transactions ne soit alignée.

## Sources

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
