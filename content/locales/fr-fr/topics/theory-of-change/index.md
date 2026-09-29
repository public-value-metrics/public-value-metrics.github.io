# Théorie du changement

Une théorie du changement est un cheminement causal explicite, construit à rebours, qui relie un
objectif à long terme aux conditions préalables et aux activités qui doivent exister pour
l'atteindre, ainsi qu'aux hypothèses reliant chaque maillon. Elle se construit en partant du
résultat visé et en se demandant, de façon répétée, « qu'est-ce qui doit être vrai juste avant
cela, pour que cela se produise ? », jusqu'à atteindre des activités réellement réalisables — ce qui
est l'inverse d'un [modèle logique](../logic-model/), et explique pourquoi les deux sont
complémentaires plutôt qu'interchangeables.

## Pourquoi c'est important

La méthode de cartographie à rebours a été formalisée par le Center for Theory of Change et
ActKnowledge, en s'appuyant sur les travaux de l'évaluatrice Carol Weiss visant à rendre explicites
les hypothèses des programmes afin qu'elles puissent être testées plutôt que prises pour acquises.
L'évaluation des subventions au Royaume-Uni a pleinement intégré cette approche : le Magenta Book
du HM Treasury considère une théorie du changement comme le point de départ de toute conception
d'évaluation, et des bailleurs comme le National Lottery Community Fund exigent des candidats
qu'ils en formulent une avant tout financement. La raison pour laquelle cela importe à un ingénieur
logiciel est qu'une théorie du changement est le document qui devrait déterminer ce que votre
système doit mesurer — si la chaîne causale indique que « le recours aux prestations dépend du fait
que les demandeurs reçoivent un calcul personnalisé », c'est une affirmation testable que votre
produit peut être instrumenté pour démontrer, ou réfuter.

## Le calcul

Une théorie du changement est structurelle plutôt que numérique. Chaque maillon devrait porter à la
fois une hypothèse et un indicateur susceptible de montrer que l'hypothèse est fausse :

```
Long-term outcome (the goal)
  ↑ precondition + assumption + indicator
Intermediate outcome N
  ↑ precondition + assumption + indicator
  ...
Intermediate outcome 1
  ↑ precondition + assumption + indicator
Activities / interventions
  ↑ resources committed
Inputs
```

Cette structure alimente directement les [méthodes d'évaluation d'impact](../impact-evaluation-methods/),
qui existent pour tester si les hypothèses de chaque maillon se vérifient réellement, ainsi que
l'[analyse contrefactuelle](../counterfactual-analysis/), qui teste si le résultat à long terme se
serait produit de toute façon.

## Exemple chiffré

**Collectivité locale (prévention du sans-abrisme)** : le résultat à long terme est le maintien des
baux à 12 mois pour les ménages menacés d'expulsion.

- Condition préalable : les ménages disposent d'un plan de remboursement des arriérés réaliste et
  abordable. Hypothèse : les plans négociés par un travailleur social sont plus durables que les
  plans imposés par un tribunal. Indicateur : % de plans encore actifs à 6 mois.
- Condition préalable : les ménages demandent les prestations auxquelles ils ont droit. Hypothèse :
  un simulateur numérique de prestations augmente le taux de demandes correctes par rapport aux
  formulaires papier. Indicateur : taux d'exactitude des demandes, comparé avant/après le
  déploiement de l'outil.
- Activités : tri par un travailleur social, simulateur numérique de prestations, négociation des
  arriérés.

Dans une cohorte pilote de 120 ménages, l'hypothèse relative au simulateur de prestations s'est
vérifiée pour 102 ménages (85 %) qui ont ensuite fait une demande correcte, comme l'a montré une
évaluation de processus ultérieure — donnant à l'équipe du programme des preuves pour ce maillon
précis, plutôt qu'une seule affirmation globale sur la prévention du sans-abrisme.

**Association caritative (mentorat des jeunes)** : le résultat à long terme est la réduction des
exclusions scolaires. Conditions préalables cartographiées à rebours : amélioration de la régulation
émotionnelle → relation de confiance individuelle avec un mentor → contact hebdomadaire constant sur
deux trimestres. La théorie rend explicite le fait que l'absence de la condition préalable « contact
hebdomadaire constant » (par exemple en raison du roulement des mentors) prédit que le résultat ne
suivra pas, ce qui constitue une affirmation testable et réfutable plutôt qu'un simple espoir.

## Lien avec l'ingénierie logicielle

Une théorie du changement devrait façonner le modèle de données d'un produit avant même la
construction du premier tableau de bord : identifier les maillons qui nécessitent un indicateur, et
instrumenter spécifiquement pour ceux-ci, plutôt que de se contenter de ce qui est le plus facile à
journaliser. Elle discipline également les discussions de feuille de route — une fonctionnalité qui
ne correspond à aucun maillon de la chaîne n'a pas de justification évidente à être construite. Voir
[modèle logique](../logic-model/) pour la chaîne de redevabilité orientée vers l'avant, construite
une fois la théorie établie, [retour social sur investissement](../social-return-on-investment/)
pour une méthode qui dépend d'une théorie du changement pour délimiter les résultats à valoriser, et
[résultats et réalisations](../outcomes-vs-outputs/) pour la distinction dont dépendent les maillons
de résultats intermédiaires.

## Pièges à éviter

- **La confondre avec un modèle logique.** Une théorie du changement est causale et explicative
  (pourquoi nous pensons que cela fonctionne) ; un modèle logique est séquentiel et descriptif (ce
  qui se produit, et dans quel ordre). N'en produire qu'un seul laisse manquant soit le « pourquoi »,
  soit la chaîne de redevabilité.
- **Laisser les hypothèses implicites.** Toute la valeur de la cartographie à rebours consiste à
  faire apparaître des hypothèses testables ; une théorie du changement qui se contente de lister des
  cases et des flèches sans préciser ce qui pourrait rendre chaque maillon faux n'est que de la
  décoration.
- **La construire une fois et la laisser de côté.** Une théorie du changement rédigée pour une
  candidature de financement et jamais revisitée cesse d'être utile dès que des données commencent à
  contredire un maillon.
- **Omettre la consultation des parties prenantes.** Une théorie du changement construite entièrement
  par des commanditaires, sans apport du personnel de terrain ni des bénéficiaires, tend à encoder
  des hypothèses auxquelles personne, parmi ceux qui délivrent réellement le service, ne croit.

## Sources

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
