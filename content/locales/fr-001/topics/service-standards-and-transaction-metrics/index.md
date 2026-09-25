# Normes de service et indicateurs de transaction

Le GOV.UK Service Standard est la liste de contrôle en 14 points du gouvernement britannique pour
construire et exploiter un service numérique public, et elle est associée à un petit ensemble
obligatoire d'indicateurs de transaction quantitatifs — coût par transaction, taux d'achèvement,
adoption numérique et satisfaction des usagers — que les équipes doivent publier pour chaque service
gouvernemental central en production. Ensemble, la norme et les indicateurs constituent la spécialisation
opérationnelle et quotidienne des cadres plus larges de valeur publique et de KPI de ce dépôt, visant
directement les équipes de délivrance logicielle.

## Pourquoi c'est important

Le Service Standard, maintenu dans le service manual de GOV.UK, exige que chaque évaluation ponctuelle
(alpha, bêta, production) d'un service numérique gouvernemental démontre — parmi ses 14 points — que
l'équipe comprend les besoins des usagers, travaille en équipe pluridisciplinaire, itère et s'améliore
fréquemment, et *évalue les outils, systèmes et façons de travailler*. Historiquement, cela s'accompagnait
d'une Performance Platform publique où chaque service en production publiait ouvertement ses données de
transaction ; cette plateforme a depuis été retirée, mais l'obligation sous-jacente de mesurer et de
publier ces quatre indicateurs centraux persiste à travers les orientations « mesurer le succès » du
service manual. La raison pour laquelle cela diffère d'un tableau de bord de KPI logiciel générique est
que ces indicateurs ont été explicitement conçus comme un seul modèle économique lié, et non quatre
scores indépendants : l'ensemble de l'argument d'économies pour le gouvernement numérique — le Digital
Efficiency Report du Government Digital Service a constaté que les transactions numériques étaient
environ 20 fois moins chères que par téléphone et environ 50 fois moins chères qu'en face à face pour des
services comparables de collectivités locales — ne se matérialise que si le taux d'achèvement reste
élevé et que l'adoption numérique augmente véritablement, plutôt que de simplement ajouter un canal bon
marché à côté d'un canal coûteux inchangé.

## Le calcul

```
Cost per transaction = total service running cost / number of completed transactions
Completion rate       = transactions completed / transactions started × 100
Digital take-up       = digital-channel transactions / all-channel transactions × 100
User satisfaction     = % satisfied + very satisfied, in-service 5-point survey

Channel-shift saving = transaction volume × take-up shift × (cost per transaction on
                        the old channel − cost per transaction digitally)

Failure-demand cost = (1 − completion rate) × transactions attempted digitally ×
                        cost of the fallback channel those users then use instead
```

## Exemple chiffré

**Service illustratif de renouvellement de licence du gouvernement central**, 2 millions de
transactions/an, actuellement 65 % par téléphone (3,00 £/transaction) et 35 % numérique
(0,30 £/transaction), taux d'achèvement de 80 %. Une refonte selon le référentiel en 14 points fait
grimper l'adoption numérique à 60 % et l'achèvement à 92 % :

```
Take-up shift saving = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/year

Failure-demand cost, before:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/year (abandoners fall back to phone)

Failure-demand cost, after:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/year

Net failure-demand saving = £420,000 − £288,000 = £132,000/year

Total annual saving ≈ £1,350,000 + £132,000 = £1,482,000/year
```

L'arithmétique rend explicite pourquoi le taux d'achèvement n'est pas un indicateur secondaire : sans
l'amélioration de 80 % à 92 %, l'économie de report d'adoption serait en partie reprise par la demande
d'échec renvoyant les usagers numériques frustrés directement vers le canal téléphonique coûteux.

## Lien avec l'ingénierie logicielle

Ces quatre indicateurs sont un exemple concret de tableau de bord coût-conséquence : un indicateur de
coût tenu séparé de trois indicateurs de résultat/qualité, délibérément jamais réduits à un seul score —
la même discipline défendue dans les
[indicateurs clés de performance du secteur public](../public-sector-kpis/). Pour les ingénieurs, cela
se décompose en travail concret et appropriable : le taux d'achèvement est un problème d'instrumentation
d'entonnoir, et chaque point d'abandon dans le parcours est, en principe, localisable et corrigeable ; le
coût par transaction exige une véritable comptabilité de coût unitaire incluant les coûts assistés par
du personnel et les coûts du canal papier, pas seulement la dépense d'hébergement infonuagique (voir
[coût par transaction](../cost-per-transaction/) et
[coût total de possession dans l'informatique publique](../total-cost-of-ownership-in-government-it/)) ;
et l'adoption numérique est un indicateur d'équité déguisé en costume d'efficience — les citoyens qui ne
peuvent pas ou ne veulent pas changer de canal sont de manière disproportionnée plus âgés, handicapés ou
exclus numériquement, de sorte qu'une fermeture agressive de canal convertit une « économie » en dommage
d'accès (voir [inclusion numérique](../digital-inclusion/) et
[économies de report de canal](../channel-shift-savings/)). Le référentiel en 14 points lui-même est la
spécification de processus derrière ces chiffres — voir
[référentiel de service numérique](../digital-service-standard/) pour la norme complète, et
[indicateurs de satisfaction des citoyens](../citizen-satisfaction-metrics/) pour la façon dont le
chiffre de satisfaction ici se rapporte à la mesure de confiance plus large.

## Pièges à éviter

- **Adoption gagnée en fermant le canal alternatif** : fermer une ligne téléphonique fait grimper
  arithmétiquement le pourcentage d'adoption numérique tout en déversant la demande d'échec sur
  quelque canal restant (souvent une voie d'assistance numérique ou de face à face plus coûteuse) ;
  mesurez toujours le coût total du système, pas le seul ratio.
- **Mesurer le taux d'achèvement à partir de la deuxième étape de l'entonnoir** : commencer le
  décompte des « démarrées » après le premier point d'abandon réel flatte le taux d'achèvement et
  cache la plus grande perte corrigeable.
- **Coût par transaction excluant l'assistance numérique** : un coût unitaire purement numérique qui
  ignore le temps de personnel consacré à aider les usagers incapables de s'auto-servir sous-estime le
  coût réel du canal.
- **Publier des indicateurs sans définition partagée entre services** : « transaction » et « achevée »
  signifient des choses différentes selon les équipes de service, à moins que les définitions ne soient
  standardisées et versionnées, rendant la comparaison entre services peu fiable.

## Sources

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
