# La productivité de l'IA dans le secteur public

Les indicateurs de ce que l'assistance à la programmation par IA fait réellement à la production
d'ingénierie — taux d'acceptation des suggestions, gains de vitesse issus d'études contrôlées, débit
de pull requests et taux de rétention du code — reposent sur une base de données probantes
authentiquement contradictoire, même avant que ne s'ajoutent les contraintes propres au secteur
public : la classification des données limite les parties du parc applicatif existant qu'un outil
d'IA peut toucher, les cycles d'achat public font que l'outil évalué accuse souvent une génération de
retard par rapport aux capacités actuelles, et les exigences d'habilitation de sécurité déterminent
qui peut l'utiliser et sur quoi.

## Pourquoi c'est important

Les deux études contrôlées les plus citées pointent dans des directions opposées. L'essai contrôlé
randomisé de Peng et al. sur GitHub Copilot (2023) a constaté que les développeurs achevaient une
tâche de serveur HTTP entièrement nouvelle 55,8 % plus vite avec Copilot (1 h 11 contre 2 h 41,
n = 95). L'essai contrôlé randomisé de METR (2025) a constaté que des développeurs open source
expérimentés travaillant sur *leurs propres dépôts matures* étaient 19 % plus lents avec les outils
d'IA du début de 2025, tout en croyant être environ 20 % plus rapides. Les deux études sont solides ;
la contradiction est précisément le résultat — l'efficacité constatée sur une tâche entièrement
nouvelle ne se transpose pas à l'efficacité sur une base de code mature, et une grande partie du
travail d'ingénierie gouvernemental porte justement sur des bases de code matures, souvent plus
anciennes et plus singulières que le dépôt commercial médian. Le Generative AI Framework for HMG
(2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) du Central
Digital and Data Office énonce des principes d'adoption responsable précisément parce que cette base
de données probantes ne peut pas simplement être importée des démonstrations des fournisseurs ; les
ministères sont censés évaluer les outils au regard de leurs propres exigences de traitement des
données et de sécurité avant tout déploiement.

## Le calcul

```
Taux d'acceptation   = suggestions acceptées / suggestions affichées
Taux de rétention    = code IA subsistant jusqu'à la fusion / code IA accepté
Gain de vitesse      = (t_témoin − t_IA) / t_témoin  (issu UNIQUEMENT d'une
                        comparaison contrôlée)
Delta de débit       = Δ pull requests fusionnées/développeur/semaine

Facteur de couverture propre au secteur public :
  part de base de code éligible = lignes de code sur les systèmes
    dont la classification (OFFICIAL, OFFICIAL-SENSITIVE, SECRET)
    autorise l'outil

Modèle de valeur = développeurs × couverture éligible × temps gagné
                  × taux chargé × taux d'utilisation
                  — chaque terme nécessite une mesure locale, et le
                  facteur de couverture n'a pas d'équivalent dans le
                  secteur privé
```

## Exemple chiffré

Un ministère pilote un assistant de programmation par IA auprès de 300 développeurs, mais seuls les
systèmes classifiés OFFICIAL sont éligibles à l'utilisation de l'outil — soit 70 % du parc en
répartition d'effectifs, les 30 % restants (systèmes de classification supérieure) étant totalement
exclus.

```
Développeurs éligibles = 300 × 0,70 = 210

Résultat du pilote : temps gagné autodéclaré 40 min/jour ;
                      gain mesuré au niveau des tâches 12 min/jour
                      (0,2 h) — l'écart de perception de METR,
                      reproduit sur le terrain

Valoriser le chiffre MESURÉ :
  210 × 0,2 h × 220 jours × 55 £/h chargé × 0,6 d'utilisation
  = 210 × 44 heures × 55 £ × 0,6
  = 9 240 heures × 55 £ × 0,6 ≈ 304 920 £/an de capacité

Coût : 210 licences × 22 £/mois × 12 ≈ 55 440 £/an

Ratio de capacité nette ≈ 304 920 / 55 440 ≈ 5,5:1
```

Finançable pour environ un tiers seulement du bénéfice autodéclaré, et seulement après application
du plafond de classification — accorder une licence aux 300 développeurs sur la seule foi du chiffre
autodéclaré aurait surestimé à la fois la population éligible et l'économie réelle.

## Lien avec l'ingénierie logicielle

Les disciplines qui se transposent directement : mener des **essais pragmatiques** sur la base de
code propre du ministère et sur de vrais tickets, et non sur des tâches de démonstration fournisseur,
car le résultat de METR est spécifiquement un constat propre aux bases de code matures ; traiter le
**taux d'acceptation comme un indicateur indirect, non comme un résultat** — un taux d'acceptation
élevé assorti d'une faible rétention est l'équivalent logiciel du surdiagnostic ; associer chaque
allégation de gain de débit à un **contrôle de stabilité**, puisque le rapport 2025 de DORA a constaté
que l'adoption de l'IA augmente le débit mais dégrade la stabilité des changements — exactement
l'analyse coûts-bénéfices nets que les
[indicateurs DORA pour la valeur publique](../dora-metrics-for-public-value/) sont conçus pour mener
; et reconnaître honnêtement que les outils d'IA peuvent creuser, et non combler, l'écart sur les
parcs applicatifs anciens chargés de
[dette technique](../technical-debt-as-public-value-erosion/), car les données d'entraînement
sous-représentent le COBOL, les langages de 4e génération et le code mainframe sur mesure courants
dans l'administration, si bien que la qualité des suggestions est souvent la plus faible précisément
sur les systèmes qui en auraient le plus besoin. Ce sujet s'inscrit dans la question plus large de
[la valeur de l'IA dans l'administration publique](../ai-in-government-value/) et devrait être
encadré par les mêmes contraintes de
[valeur de la cybersécurité dans le secteur public](../public-sector-cybersecurity-value/) qui
limitent les endroits où un outil tiers peut accéder au code ou aux données.

## Pièges à éviter

- **Transposition des études fournisseurs** : appliquer les gains de vitesse d'essais contrôlés sur
  code entièrement nouveau à des travaux d'intégration sur legacy est précisément l'erreur mise au
  jour par l'étude METR.
- **L'autodéclaration comme mesure** : un écart de 20 points de pourcentage entre perception et
  mesure est le biais le plus important connu dans cette littérature, et il gonfle les analyses de
  rentabilité qui reposent uniquement sur des enquêtes auprès des développeurs.
- **Ignorer le plafond de classification** : les modèles de licence et de valeur construits sur
  l'effectif total plutôt que sur le sous-ensemble éligible et habilité selon la classification
  surestiment systématiquement à la fois le rapport coût-efficacité et la couverture atteignable.
- **Le décalage du cycle d'achat public** : l'acquisition d'outils via des accords-cadres peut faire
  qu'un pilote évalue une génération de modèle ayant 12 à 18 mois de retard sur ce qui est
  publiquement disponible au moment du déploiement complet, ce qui rend obsolète l'hypothèse de gain
  de vitesse de l'analyse de rentabilité initiale avant même la mise en service.

## Sources

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
