# Résultats et réalisations (Outcomes vs Outputs)

Une réalisation (output) est le produit direct et dénombrable d'une activité — elle existe dès l'instant
où la délivrance a lieu, indépendamment de son effet. Un résultat (outcome) est le changement qui s'ensuit
pour les personnes, le lieu ou le système concernés. « 500 personnes ont assisté à un atelier de
recherche d'emploi » est une réalisation : c'est vrai même si aucune d'entre elles ne trouve d'emploi.
« Les perspectives d'emploi de 500 personnes se sont améliorées » est une affirmation de résultat, et
elle exige une preuve de changement, pas seulement une preuve de présence — la confusion qui produit
plus de rapports de subvention trompeurs que presque toute autre erreur de mesure dans le secteur.

## Pourquoi c'est important

Le Magenta Book du HM Treasury et des bailleurs tels que le National Lottery Community Fund exigent tous
deux un reporting des résultats précisément parce que les réalisations sont ce que les programmes
rapportent par défaut : elles sont peu coûteuses à compter, toujours disponibles, et toujours d'apparence
positive. Un décompte de réalisations ne peut littéralement jamais baisser en conséquence d'un échec du
programme — davantage de séances délivrées, c'est toujours « davantage », alors qu'un résultat peut
révéler qu'un programme ne fonctionne pas. Le National Audit Office a critiqué à plusieurs reprises des
programmes gouvernementaux pour avoir rapporté des niveaux d'activité comme s'ils constituaient une
preuve de succès ; un système logiciel qui ne facilite que le reporting des réalisations renforce cela
par défaut, car les réalisations ne nécessitent aucune collecte de données de suivi, contrairement aux
résultats.

## Le calcul

Il n'existe pas de formule, mais il existe un test fiable pour classer un indicateur :

```
Output test:  is it countable at the point of delivery, true even if the recipient is unaffected?
Outcome test: does it require a before/after or with/without comparison to be meaningful?

If a number can be true with zero benefit to anyone, it is an output.
```

Cela s'inscrit dans la chaîne plus large du [modèle logique](../logic-model/) et dépend des liens de
résultat définis dans une [théorie du changement](../theory-of-change/) ; convertir un résultat en
argent utilise les méthodes du [retour social sur investissement](../social-return-on-investment/).

## Exemple chiffré

**Collectivité locale (soutien à l'emploi)** : réalisation — 500 personnes ont assisté à des ateliers de
recherche d'emploi. Résultat — au suivi à 12 mois, 140 de ces 500 personnes (28 %) occupent un emploi
durable (6 mois ou plus). Un groupe de comparaison aux caractéristiques similaires mais sans accès au
programme affiche un taux d'emploi de référence de 15 % sur la même période. Gain net de résultat :
28 % − 15 % = 13 points de pourcentage, soit environ 500 × 0,13 = 65 personnes supplémentaires en
emploi qui ne le seraient pas autrement — le résultat attribuable, distinct à la fois du chiffre de
présence de 500 et du décompte brut d'emploi de 140.

**Association (association de littératie)** : réalisation — 1 200 séances de lecture délivrées à 300
enfants. Résultat — l'âge de lecture moyen s'est amélioré de 8 mois sur une période de 6 mois, contre
une progression naturelle attendue de 6 mois sur la même période. Gain net de résultat : 8 − 6 = 2 mois
d'amélioration supplémentaire de l'âge de lecture par enfant attribuables au programme, et non le
chiffre complet de 8 mois.

## Lien avec l'ingénierie logicielle

Les journaux d'événements et les systèmes transactionnels instrumentent les réalisations presque
automatiquement — pages vues, sessions, tickets clos, rendez-vous pris — car elles sont générées par le
système accomplissant sa tâche. Les résultats exigent un modèle de données qui capture le même individu
à un point ultérieur dans le temps par rapport à une référence ou une comparaison, ce qui doit être
délibérément conçu : enquêtes de suivi, dossiers administratifs liés, ou cohorte de comparaison. Un
outil de reporting qui ne prend en charge que les premières orientera discrètement une organisation vers
un reporting axé uniquement sur les réalisations, quelle que soit la demande du bailleur. Voir
[modèle logique](../logic-model/) pour la place des résultats dans la chaîne de redevabilité,
[coût par résultat](../cost-per-outcome/) pour transformer cette distinction en un indicateur de coût
unitaire, et [indicateurs clés du secteur public](../public-sector-kpis/) pour le schéma plus large de
sélection des indicateurs.

## Pièges à éviter

- **Rapporter des réalisations comme s'il s'agissait de résultats.** « 500 personnes ont assisté »
  implique un bénéfice sans le démontrer ; étiquetez explicitement la présence comme une réalisation.
- **Absence de référence ou de groupe de comparaison.** Un chiffre de résultat sans contrefactuel — voir
  [analyse contrefactuelle](../counterfactual-analysis/) — ne peut pas séparer l'effet du programme de
  ce qui se serait produit de toute façon.
- **Optimiser pour l'indicateur financé.** Lorsque le financement est lié au volume de réalisations, les
  équipes de délivrance maximisent rationnellement la présence plutôt que le changement durable, un mode
  d'échec de la loi de Goodhart.
- **Le « lavage » de résultats (outcome washing).** Réétiqueter un indicateur de réalisation avec un
  langage qui sonne comme un résultat (« résultats d'engagement : 500 participants ») sans aucune
  mesure de suivi derrière.

## Sources

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
