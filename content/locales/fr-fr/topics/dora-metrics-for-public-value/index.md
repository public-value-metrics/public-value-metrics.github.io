# Indicateurs DORA pour la valeur publique

Les indicateurs DORA (DevOps Research and Assessment) — fréquence de déploiement, délai de mise en
œuvre des changements, taux d'échec des changements et temps de restauration du service, plus la
fiabilité comme cinquième indicateur — sont les repères de performance de délivrance les plus validés
de l'industrie logicielle. Traduits en termes de redevabilité du secteur public, chacun est un
indicateur direct de la vitesse et de la sécurité avec lesquelles la valeur publique atteint un
citoyen.

## Pourquoi c'est important

La décennie de recherche de DORA, publiée annuellement sous le nom d'*Accelerate State of DevOps
Report* (méthodologie de Forsgren, Humble et Kim, désormais gérée par Google Cloud), classe les équipes
en performeurs d'élite, élevés, moyens et faibles. Les équipes d'élite déploient à la demande, mettent
moins d'un jour entre le commit et la production, échouent sur environ 5 % des changements, et se
rétablissent en moins d'une heure ; les performeurs faibles déploient mensuellement ou moins souvent,
mettent des mois, échouent sur environ 40 % des changements, et se rétablissent en semaines. Dans le
secteur public, ce ne sont pas des indicateurs de vanité d'ingénierie : le Service Standard du
Government Digital Service exige des équipes qu'elles « itèrent et s'améliorent fréquemment » et
qu'elles soient capables de répondre rapidement aux besoins des usagers, et les ministères incapables
de déployer en sécurité et souvent sont structurellement incapables de satisfaire cette norme, quoi que
disent leurs recherches utilisateurs. Les propres travaux d'efficience numérique du Cabinet Office ont
constaté que rediriger un citoyen d'une transaction numérique échouée ou lente vers un canal
téléphonique ou papier est coûteux — le Digital Efficiency Report 2012 du GDS a estimé que certaines
transactions numériques coûtent aussi peu que 20 pence contre des contacts téléphoniques ou en face à
face coûtant jusqu'à 8,62 £ — de sorte qu'un échec de changement sur un service destiné aux citoyens ne
coûte pas seulement du temps d'ingénierie, il fait peser de vraies livres sur le budget du centre de
contact (voir [économies de report de canal](../channel-shift-savings/)).

## Le calcul

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

Traductions en valeur publique :

```
Lead time      → weeks in the pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications blocked
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: a service at 99% availability delivers
                 ≈ 0.99 of its modelled benefit — the delivery analogue
                 of take-up or compliance shortfall
```

## Exemple chiffré

L'équipe du portail de demandes de prestations d'une collectivité locale, avant et après un
investissement en ingénierie de délivrance :

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

L'équipe livre environ 25 améliorations/an, d'une valeur moyenne de 8 000 £/semaine
([coût du délai](../cost-of-delay-in-public-programmes/)). Réduire le délai de mise en œuvre d'environ
7,3 semaines avance le flux de bénéfices de chaque amélioration : 25 × 7,3 × 8 000 ≈
**1 460 000 £/an** de valeur délivrée plus tôt. Sur le taux d'échec : 25 × (0,30 − 0,10) = 5 changements
échoués en moins par an ; chaque changement échoué sur un portail public redirige typiquement environ
2 000 citoyens vers le canal téléphonique à 8,62 £ contre 20 pence, soit un coût net d'environ
8,42 £ × 2 000 ≈ 16 840 £ par incident, de sorte qu'éviter 5 incidents économise environ
**84 200 £/an**. L'investissement en ingénierie de délivrance est valorisé dans la même monnaie que
n'importe quel autre dossier de valeur publique.

## Exemple chiffré (suite) : la fiabilité

Si le portail fonctionne à 97 % de disponibilité plutôt qu'à une cible de 99,5 %, et que chaque point
de pourcentage d'indisponibilité est modélisé comme 2 % de demandes perdues par abandon, le service ne
délivre qu'environ 0,975 de son bénéfice modélisé de 2 millions de livres par an — une décote de
bénéfice de 50 000 £/an qu'un tableau de bord de disponibilité pur ne fait jamais apparaître.

## Lien avec l'ingénierie logicielle

Les indicateurs DORA sont les indicateurs opérationnels d'un service public habillés différemment : le
délai de mise en œuvre correspond aux
[normes de service et indicateurs de transaction](../service-standards-and-transaction-metrics/) ; le
taux d'échec des changements correspond aux taux de reprise et de réclamation ; le MTTR correspond à la
durée pendant laquelle un service statutaire est indisponible pour les demandeurs. Les techniques
d'amélioration se transposent dans les deux sens, car les deux sont des systèmes de files d'attente
sous contraintes de redevabilité — voir
[indicateurs de flux dans la délivrance gouvernementale](../flow-metrics-in-government-delivery/) pour
le calcul de file d'attente sous-jacent. Notez aussi la constatation de DORA en 2025 selon laquelle
l'adoption de l'IA est corrélée à un débit plus élevé mais à une stabilité *pire* — une intervention à
la fois efficace et porteuse d'effets secondaires, ce qui correspond exactement à l'analyse de bénéfice
net que traite le sujet
[productivité de l'IA dans le secteur public](../ai-productivity-in-the-public-sector/) de ce chapitre.

## Pièges à éviter

- **Manipulation des indicateurs** : gonfler le nombre de déploiements avec des versions sans effet, ou
  exclure les correctifs urgents du décompte des échecs de changement. Définissez les événements aussi
  précisément qu'une norme de service statutaire définit une « transaction réussie ».
- **Classements comparatifs entre ministères** : les regroupements DORA comparent des pratiques de
  délivrance, pas des services à profils de risque différents ; un système de paiement fiscal noté
  « élevé » peut être la bonne posture là où « élite » serait imprudent compte tenu des exigences
  d'assurance.
- **Optimiser un seul indicateur isolément** : la vitesse sans le taux d'échec des changements est
  l'arbitrage classique débit-instabilité — rapportez les quatre ensemble, pas comme un score unique.

## Sources

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
