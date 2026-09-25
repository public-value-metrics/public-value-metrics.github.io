# Indicateurs de satisfaction des citoyens

Les indicateurs de satisfaction des citoyens mesurent la façon dont les personnes évaluent leur
expérience directe d'un service public — à distinguer de la confiance envers les institutions en
général, et à distinguer de la question de savoir si le service a effectivement produit un bon
résultat. Un service peut être apprécié et inefficace, ou efficace et impopulaire ; l'écart entre les
deux constitue en soi une information diagnostique qu'une équipe de délivrance devrait surveiller.

## Pourquoi c'est important

La satisfaction se mesure à deux niveaux différents que l'on confond régulièrement. Au niveau du
service, la Performance Platform désormais retirée du Royaume-Uni et l'actuel GOV.UK Service Manual
exigent une enquête de satisfaction par service (typiquement une échelle en cinq points allant de « très
satisfait » à « très insatisfait », administrée au moment de la transaction) comme l'un des quatre
indicateurs de service obligatoires — voir
[normes de service et indicateurs de transaction](../service-standards-and-transaction-metrics/). Au
niveau institutionnel, le People Survey de la fonction publique britannique mesure chaque année
l'engagement et l'expérience des employés dans tous les ministères centraux, et séparément, le
programme « Trust in Government » de l'OCDE sonde la confiance du public envers le gouvernement
national dans les États membres, suivant une tendance de long terme faite de déclin et de reprise
fortement façonnée par les crises (la crise financière de 2008 et la pandémie de COVID-19 ont toutes
deux produit des mouvements nets et visibles dans les chiffres de confiance de l'OCDE). La raison pour
laquelle les ingénieurs qui construisent des services destinés aux citoyens doivent distinguer
satisfaction et résultat est un mode d'échec connu en conception de services : un formulaire numérique
magnifiquement conçu et facile à utiliser pour une demande de prestation peut obtenir une très haute
satisfaction alors que la politique sous-jacente — règles d'éligibilité, arriérés de traitement,
montants attribués — ne laisse le demandeur pas mieux loti. La satisfaction mesure l'interface ; elle
ne mesure pas la valeur produite derrière elle.

## Le calcul

```
Net satisfaction = % satisfied (or very satisfied) − % dissatisfied (or very dissatisfied)
                    (neutral/no-opinion responses excluded from both terms, but counted
                    in the response base for calculating each percentage)

Satisfaction-to-outcome gap = satisfaction score − outcome achievement score
                    (both normalized 0–100; a large positive gap signals a service
                    that "feels good" but under-delivers on substance)

Trust index (OECD-style) = % of survey respondents answering "yes" to
                    "do you have confidence in [national government]?"
                    tracked as a time series, typically disaggregated by
                    age, income, and education
```

## Exemple chiffré

**Service de facturation électronique de la taxe d'habitation d'une collectivité locale** : une
enquête de satisfaction au moment d'une transaction réussie recueille 2 400 réponses : 1 650
satisfaits/très satisfaits, 250 insatisfaits/très insatisfaits, 500 neutres.

```
Net satisfaction = (1,650/2,400 × 100) − (250/2,400 × 100)
                  = 68.75% − 10.42%
                  = +58.3 net satisfaction
```

Ce résultat paraît solide isolément. Mais l'enquête n'est montrée qu'aux usagers qui *réussissent* la
transaction — un biais de mesure connu (voir les pièges ci-dessous). En le combinant avec l'indicateur
de taux d'achèvement issu de
[normes de service et indicateurs de transaction](../service-standards-and-transaction-metrics/), on
constate que le taux d'achèvement n'est que de 71 %, ce qui signifie :

```
True population satisfaction is unmeasured for the 29% who abandoned the journey —
plausibly the most dissatisfied cohort, since abandonment is itself a strong negative
signal the survey never captures.
```

**Illustration au niveau national (structure d'une série de confiance de type OCDE)** : la confiance
envers le gouvernement national est rapportée à 42 % l'année 1, chutant à 34 % l'année 2 (une année de
crise) et remontant à 39 % l'année 3 — une trajectoire typique du schéma de choc puis de reprise
partielle que l'OCDE documente dans les États membres à la suite de crises majeures.

## Lien avec l'ingénierie logicielle

Instrumentez les enquêtes de satisfaction à chaque point de sortie significatif d'un parcours
utilisateur, pas seulement lors d'une réussite complète — c'est l'erreur d'ingénierie la plus courante
dans ce domaine, et celle qui transforme silencieusement un indicateur de satisfaction en indicateur de
vanité biaisé par le survivant. Dans la mesure du possible, associez le score de satisfaction à un
indicateur de taux d'achèvement ou de résultat sur le même tableau de bord, afin qu'une équipe ne
puisse pas célébrer une satisfaction en hausse pendant que le taux d'achèvement baisse discrètement
(voir [coût par transaction](../cost-per-transaction/) et [inclusion numérique](../digital-inclusion/)
pour savoir qui est exclu d'emblée de l'échantillonnage de satisfaction numérique — les usagers non
numériques et ceux nécessitant une assistance numérique sont systématiquement sous-représentés dans les
enquêtes en service). Les données de satisfaction et de confiance alimentent aussi directement le
volet légitimité du
[triangle stratégique de Moore](../public-value/), et ont leur place dans les perspectives « usager »
et « légitimité » d'un [tableau de bord de la valeur publique](../public-value-scorecard/) — voir
[indicateurs de confiance et de légitimité](../trust-and-legitimacy-metrics/) pour l'équivalent au
niveau institutionnel de cet indicateur de niveau service.

## Pièges à éviter

- **Biais de survivant dans les enquêtes au point d'achèvement** : les usagers qui abandonnent un
  parcours ne voient jamais l'enquête, de sorte qu'un score de satisfaction élevé en service peut
  coexister avec un faible taux d'achèvement et une large population invisible d'usagers insatisfaits
  n'ayant pas terminé leur démarche.
- **Traiter la satisfaction comme un indicateur de substitution du résultat** : une interface bien
  conçue pour une politique mal conçue obtient un bon score de satisfaction et un mauvais score de
  résultat — rapportez toujours les deux, jamais l'un à la place de l'autre.
- **Des échantillons petits et non représentatifs rapportés avec une fausse précision** : un score de
  satisfaction obtenu auprès de quelques centaines de répondants auto-sélectionnés, rapporté à une
  décimale près, laisse entendre une confiance que la taille de l'échantillon ne peut soutenir.
- **Ignorer la désagrégation démographique** : les chiffres nationaux de confiance et de satisfaction
  non ventilés par âge, revenu, handicap ou accès numérique peuvent masquer des expériences fortement
  divergentes entre groupes — un schéma que les propres publications Trust in Government de l'OCDE
  désagrègent explicitement.

## Sources

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
