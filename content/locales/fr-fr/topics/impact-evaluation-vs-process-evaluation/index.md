# Évaluation d'impact contre évaluation de processus

L'évaluation d'impact demande si un programme a causé les résultats escomptés. L'évaluation de
processus demande si le programme a effectivement été délivré comme conçu — à qui, à quelle dose, et
avec quels obstacles ou facilitateurs en chemin. Ce sont des questions différentes exigeant des méthodes
différentes, et le Magenta Book du HM Treasury traite le fait de les commanditer ensemble comme une
pratique standard, car un résultat d'impact faible ou nul est ininterprétable à lui seul : il ne peut
pas dire si la théorie sous-jacente du programme était erronée, ou si une bonne théorie n'a tout
simplement jamais été correctement mise en œuvre.

## Pourquoi c'est important

Les évaluations gouvernementales ont constaté à plusieurs reprises qu'un programme n'avait aucun effet
mesurable, sans disposer d'évaluation de processus pour expliquer pourquoi — laissant les
commanditaires incapables de distinguer « cette idée ne fonctionne pas » (échec de théorie) de « cette
idée n'a jamais été réellement essayée correctement » (échec de mise en œuvre). Les orientations du
Medical Research Council sur l'évaluation de processus des interventions complexes, publiées dans le
BMJ en 2015 et largement citées aux côtés du Magenta Book, ont formalisé la fidélité, la dose et la
portée comme les éléments centraux qu'une évaluation de processus doit mesurer. Commanditer une
évaluation d'impact sans évaluation de processus risque d'abandonner une conception de programme
réellement solide parce qu'elle a été délivrée à la moitié de la population visée, à une fraction de
l'intensité prévue — une erreur qu'un constructeur de systèmes est bien placé pour prévenir, car la
fidélité de délivrance est exactement ce que les systèmes de données opérationnelles peuvent capturer en
quasi temps réel.

## Le calcul

```
Process evaluation asks:
 - Was it delivered to the target population, at the planned dose/intensity?
 - Did delivery match the logic model / theory of change design?
 - What barriers or facilitators affected delivery?
 Methods: fidelity checks against pre-specified thresholds, case studies, interviews,
          administrative delivery data.

Impact evaluation asks:
 - What changed, and how much of that change is attributable to the programme?
 Methods: RCT, DiD, PSM, RDD — see impact-evaluation-methods — against a counterfactual.

Combined diagnosis:
 No effect  + high fidelity  → theory failure: the model itself did not produce the outcome
 No effect  + low fidelity   → implementation failure: the model was never properly tested
 Effect found + high fidelity → replicate with confidence
 Effect found + low fidelity  → investigate further: the effect may be fragile or site-specific
```

## Exemple chiffré

**Collectivité locale (programme de soutien à la parentalité)** : une évaluation d'impact utilisant la
différence de différences trouve un changement de +2 points de pourcentage sur une mesure de bien-être
de l'enfant — non statistiquement significatif. L'évaluation de processus, menée en parallèle, constate
que le programme n'a atteint que 210 des 500 familles visées (42 % de portée), et parmi elles, seules 95
ont satisfait au seuil de fidélité prédéfini de 75 % de séances assistées ou plus — soit 19 % de la
portée initialement prévue. Conclusion : le résultat d'impact faible est cohérent avec un échec de mise
en œuvre, et non une preuve que le modèle du programme ne fonctionne pas ; la réponse appropriée
consiste à corriger le parcours d'orientation à l'origine de la déperdition de 58 %, et non à abandonner
la conception du programme.

**Association (programme de littératie numérique)** : une évaluation d'impact trouve un effet fort
(+18 points de pourcentage sur un score de confiance numérique), et une évaluation de processus
parallèle confirme une fidélité de 92 % au programme prévu sur les 12 sites de délivrance. Combinés, le
bailleur peut monter le programme en échelle avec confiance, car l'effet se révèle tenir de façon
cohérente plutôt que d'être le produit d'un site exceptionnellement bon.

## Lien avec l'ingénierie logicielle

Les données d'évaluation de processus sont exactement ce que les systèmes de délivrance sont bien placés
pour capturer : présence par rapport au plan, dosage des séances, et déperdition à chaque étape d'un
entonnoir d'orientation ou d'inscription — les mêmes analyses d'entonnoir que les ingénieurs construisent
déjà pour des fonctionnalités de produit, appliquées cette fois au pipeline de délivrance d'un programme
social. Transmettre les indicateurs de fidélité et de portée aux responsables de programme en quasi
temps réel, plutôt que d'attendre une évaluation de fin de subvention, permet de corriger un parcours
d'orientation défaillant en cours de programme plutôt que de le découvrir seulement une fois la période
de financement terminée. Voir [méthodes d'évaluation d'impact](../impact-evaluation-methods/) pour les
conceptions causales avec lesquelles l'évaluation de processus est associée,
[théorie du changement](../theory-of-change/) et [modèle logique](../logic-model/) pour la conception
dont l'évaluation de processus vérifie la fidélité, et
[réalisation des bénéfices](../benefits-realization/) pour le suivi de la délivrance jusqu'aux résultats
promis.

## Pièges à éviter

- **Commanditer uniquement une évaluation d'impact.** Un résultat nul ou faible ne peut alors pas être
  interprété comme un échec de théorie ou un échec de mise en œuvre, ce qui est précisément la
  distinction qui compte pour décider de la suite.
- **Traiter l'évaluation de processus comme un ajout accessoire.** Elle a besoin de la même rigueur et
  de critères de fidélité prédéfinis que la conception d'impact, sinon elle s'effondre en anecdote une
  fois les résultats connus.
- **Confondre « dans les temps et dans le budget » avec « délivré comme conçu ».** L'évaluation de
  processus vérifie la fidélité au modèle — dose, groupe cible, contenu — pas le statut de gestion de
  projet en feux tricolores.
- **Ne pas préenregistrer les seuils de fidélité.** Décider après coup de ce qui compte comme « dose
  suffisante » fait ressembler toute explication d'un résultat d'impact décevant à une justification
  a posteriori.

## Sources

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
