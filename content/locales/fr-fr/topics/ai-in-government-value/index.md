# La valeur de l'IA dans l'administration publique

La valeur de l'IA dans l'administration publique désigne l'exigence qu'un système d'intelligence
artificielle utilisé dans un service public franchisse la même barre de rapport qualité-prix et de
valeur publique que toute autre décision de dépense — ni une barre plus basse parce que c'est
nouveau, ni une barre plus haute parce que cela fait peur. C'est la question à laquelle une équipe
de mise en œuvre doit pouvoir répondre avant, et non après, la mise en service d'une fonctionnalité
d'IA : cela produit-il davantage de valeur que cela ne coûte, une fois l'assurance, la supervision et
le risque honnêtement chiffrés ?

## Pourquoi c'est important

Le Central Digital and Data Office (CDDO) britannique a publié en 2024 son Generative AI Framework
for Government, qui s'appuie sur des orientations provisoires antérieures de juin 2023, et l'a
structuré autour de dix principes portant sur la définition de l'IA générative, ses implications
éthiques, la sécurité des outils, les contrôles d'assurance qualité, la gestion du cycle de vie
complet de l'IA générative, l'identification de cas d'usage véritables, la collaboration
interministérielle, la transparence, les compétences et la gouvernance. L'insistance du cadre sur un
« contrôle humain significatif » et une gestion du cycle de vie complet s'explique par le fait que
les analyses de rentabilité des projets d'IA présentent un mode d'échec spécifique que les autres
dépenses informatiques ne connaissent pas : le chiffre de productivité phare d'un pilote est facile à
produire et facile à surestimer, car il est mesuré avant que ne soit prise en compte la charge de
vérification, de correction et de supervision que l'outil engendre. Parallèlement au cadre, le
Algorithmic Transparency Recording Standard (ATRS) exige des organismes publics qu'ils publient un
registre normalisé — finalité, données utilisées, performance, tests d'équité, dispositifs de
supervision humaine — pour tout outil algorithmique ayant une influence significative sur des
décisions concernant des individus, ce qui fait du coût d'assurance d'un système d'IA une donnée
publique, et non une estimation interne qu'une équipe pourrait discrètement escamoter.

## Le calcul

L'adoption de l'IA s'évalue en complément, et non en remplacement, de l'appréciation standard du
[rapport qualité-prix](../value-for-money/), avec les termes propres à l'IA rendus explicites plutôt
que fondus dans un chiffre unique de « gain de productivité » :

```
Valeur nette d'un système d'IA =
    gain de productivité (temps gagné × coût du personnel chargé)
  − coût de licence/calcul
  − coût de vérification et de supervision humaines (contrôler la
    production de l'IA avant qu'elle ne soit utilisée — ce coût ne
    tend pas vers zéro même pour des outils matures)
  − coût de documentation ATRS et de suivi continu
  − coût ajusté du risque de préjudice lié aux erreurs, aux biais ou
    aux hallucinations, pondéré selon qui subit ce préjudice
    (pondération distributionnelle)

Un chiffre de productivité issu d'un pilote qui omet le terme de
supervision n'est pas comparable à un coût de référence courant
qui intègre déjà un examen humain équivalent — voir
ai-productivity-in-the-public-sector pour la discipline plus
complète de mesure de la productivité dont ce cadre s'inspire.
```

## Exemple chiffré

**Collectivité locale utilisant un outil d'IA générative pour rédiger les premières réponses aux
demandes courantes relatives à la taxe d'habitation locale** : 25 000 demandes/an, auparavant
traitées entièrement par des agents instructeurs à raison de 14 minutes/demande en moyenne, coût du
personnel chargé de 34 £/heure.

```
Coût de référence (sans IA) :
  25 000 × (14/60) × 34 £ = 198 333 £/an

Allégation phare du pilote : l'IA rédige une réponse en 90 secondes,
l'agent « se contente de relire et d'envoyer » — nouveau temps
revendiqué de 3 minutes
  25 000 × (3/60) × 34 £ = 42 500 £/an
  → économie revendiquée de 155 833 £/an (l'air transformationnel)

Chiffre pleinement chargé, mesuré après 3 mois en production plutôt
que sur les cas de test triés sur le volet du pilote :
  Temps réel de relecture et de correction par réponse : 6 minutes
  (les brouillons nécessitent une véritable édition pour les
  demandes complexes ou sensibles sur le plan émotionnel)
  25 000 × (6/60) × 34 £ = 85 000 £/an
  Coût de licence/calcul : 38 000 £/an
  Documentation ATRS et suivi trimestriel des biais/de la qualité :
  14 000 £/an
  Coût total = 85 000 + 38 000 + 14 000 = 137 000 £/an

Économie réelle = 198 333 − 137 000 = 61 333 £/an — authentique et
qui mérite d'être conservée, mais très inférieure à la moitié de
l'allégation phare du pilote, et il a fallu une mesure honnête du
temps de supervision, et non celle, la plus favorable, du pilote,
pour l'établir.
```

## Lien avec l'ingénierie logicielle

C'est ici que se rejoignent
[la productivité de l'IA dans le secteur public](../ai-productivity-in-the-public-sector/) et ce
sujet : les équipes d'ingénierie qui intègrent des fonctionnalités d'IA aux services publics
détiennent l'instrumentation qui rend possible le chiffre « réel » de l'exemple chiffré ci-dessus —
journaliser le temps réel de relecture, la distance d'édition entre le brouillon et la réponse
envoyée, et le taux d'escalade, plutôt que de se fier aux conditions de démonstration du pilote. Les
fonctionnalités d'IA devraient être évaluées au regard du point 9 du
[standard de service numérique](../digital-service-standard/) (service sécurisé, respect de la vie
privée des usagers) et recoupées avec
[la valeur de la cybersécurité dans le secteur public](../public-sector-cybersecurity-value/) lorsque
l'outil touche à des données des citoyens ; tout système d'IA ayant une influence significative sur
des décisions concernant des individus a besoin d'un enregistrement ATRS avant de pouvoir être
considéré comme prêt à l'évaluation, de la même manière qu'un service a besoin d'avoir réussi une
évaluation [standard de service numérique](../digital-service-standard/) avant sa mise en production.

## Pièges à éviter

- **L'IA-washing** : requalifier une automatisation existante fondée sur des règles en « IA » pour
  accéder à des financements ou à une attention réservés à l'adoption de l'IA, sans présenter les
  risques d'exactitude ou de biais qui justifient réellement le contrôle renforcé du cadre.
- **Mesurer la productivité du pilote, et non celle de la production** : les pilotes s'exécutent sur
  des cas de test sélectionnés avec des relecteurs engagés et attentifs ; la production s'exécute
  sur l'ensemble hétéroclite des cas réels, avec des relecteurs qui, avec le temps, développent un
  biais d'automatisation et sous-contrôlent les résultats — les deux faussent le chiffre honnête du
  coût de supervision.
- **Omettre l'enregistrement ATRS au motif que l'outil « ne relève pas vraiment de la prise de
  décision automatisée »** : le seuil fixé par le standard est l'influence significative sur une
  décision concernant un individu, seuil que la plupart des outils d'IA de rédaction ou de tri
  destinés aux citoyens atteignent, même lorsqu'un humain valide techniquement la décision.
- **Ignorer l'impact distributionnel des erreurs** : le taux d'erreur d'un système d'IA, moyenné sur
  l'ensemble des usagers, peut masquer un taux d'erreur ou de biais bien plus élevé pour certains
  groupes spécifiques ; la
  [pondération distributionnelle](../distributional-weighting/) devrait s'appliquer au terme de
  préjudice ajusté du risque, et pas seulement au chiffre d'exactitude agrégé.

## Sources

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
