# Méthodes d'évaluation d'impact

Les méthodes d'évaluation d'impact sont les schémas statistiques et expérimentaux utilisés pour
estimer ce qu'une politique ou un programme a réellement causé, par opposition à ce qui se serait
produit de toute façon — les essais contrôlés randomisés (ECR), la méthode des doubles différences
(difference-in-differences), l'appariement par score de propension (propensity score matching) et le
plan de régression sur discontinuité (regression discontinuity design) sont les quatre méthodes les
plus couramment utilisées dans les politiques publiques britanniques. Elles existent parce que la
plupart des interventions gouvernementales ne peuvent pas être testées en laboratoire : on ne peut
pas randomiser quelle ville reçoit une nouvelle ligne de bus comme on peut randomiser quel patient
reçoit un médicament, si bien que ces méthodes empruntent la même logique causale sans toujours
exiger une affectation aléatoire.

## Pourquoi c'est important

Le Magenta Book d'HM Treasury, annexe A sur les méthodes quasi expérimentales, est le guide canonique
du gouvernement britannique pour choisir entre ces schémas, et des organismes tels que l'Education
Endowment Foundation et le What Works Centre for Local Economic Growth institutionnalisent une
hiérarchie de preuves construite autour d'eux — les ECR lorsque la randomisation est réalisable et
éthique, les plans quasi expérimentaux lorsqu'elle ne l'est pas. Le choix de la méthode n'est pas une
considération technique secondaire : il détermine si une évaluation peut répondre à « le programme
a-t-il causé cela ? » ou seulement à « cela s'est-il produit après le début du programme ? », ce qui
est exactement la question que l'[analyse contrefactuelle](../counterfactual-analysis/) est conçue
pour obliger les praticiens à se poser avant qu'une évaluation ne soit commandée.

## Le calcul

```
ECR :
  Impact = moyenne(résultat | groupe traité) − moyenne(résultat | groupe témoin)
  (valide car l'affectation au traitement est aléatoire)

Doubles différences (DiD) :
  Impact = [résultat_après(traité) − résultat_avant(traité)]
         − [résultat_après(témoin) − résultat_avant(témoin)]
  (nécessite une hypothèse de « tendances parallèles » : le groupe traité et le
   groupe témoin auraient évolué ensemble en l'absence de l'intervention)

Appariement par score de propension (PSM) :
  1. Estimer P(traitement = 1 | covariables X) pour chaque unité → score de propension
  2. Apparier les unités traitées aux unités non traitées ayant des scores de
     propension similaires
  3. Impact = moyenne(résultat | traité) − moyenne(résultat | témoin apparié)

Plan de régression sur discontinuité (RDD) :
  Impact = saut du résultat observé au seuil d'éligibilité,
           en comparant les unités juste au-dessus vs juste en dessous du seuil
```

## Exemple chiffré

**Collectivité locale (doubles différences pour un programme de familles en difficulté)** : le
résultat est le taux de présence scolaire. La zone traitée passe de 84 % à 89 % de présence (+5
points de pourcentage) sur la durée du programme ; une zone comparable mais non traitée passe de 85 %
à 87 % (+2 points de pourcentage) sur la même période. Estimation d'impact DiD : 5 − 2 = +3 points de
pourcentage attribuables au programme. Appliqué à une cohorte de 2 000 élèves dans la zone traitée,
cela équivaut à environ 60 élèves supplémentaires (3 % × 2 000) atteignant la catégorie de présence
supérieure, une extrapolation qui devrait être rapportée avec sa réserve sur les tendances
parallèles, et non comme un décompte précis.

**Association caritative (appariement par score de propension pour une association d'aide à
l'emploi)** : 300 participants au programme sont appariés à 300 individus issus d'un jeu de données
administratif plus large à l'aide de scores de propension construits à partir de l'âge, des
antécédents d'emploi et du niveau de qualification. Taux d'emploi à douze mois : groupe traité
apparié 46 %, groupe témoin apparié 33 %. Estimation d'impact PSM : 46 % − 33 % = +13 points de
pourcentage attribuables au programme, sous réserve qu'aucun facteur de confusion non observé (comme
la motivation) n'influence à la fois la participation et le résultat.

## Lien avec l'ingénierie logicielle

La faisabilité future de chacun de ces schémas dépend fortement de décisions d'ingénierie des données
prises en amont. Le RDD a besoin d'une variable de classement enregistrée avec précision et d'un seuil
d'éligibilité véritablement net ; le DiD a besoin de données de panel comparables dans le temps pour
les zones traitées et témoins, ce qui implique des jointures cohérentes entre systèmes et années ; le
PSM a besoin de riches covariables de référence saisies avant le traitement, et non reconstruites a
posteriori. Un modèle de données conçu dès le départ aux côtés d'une
[théorie du changement](../theory-of-change/) et d'un [modèle logique](../logic-model/) — capturant
les covariables de référence, les dates et les enregistrements éligibles au groupe témoin — est ce qui
rend possible plus tard une évaluation d'impact rigoureuse, au lieu d'une course précipitée et
coûteuse après coup. Voir [évaluation d'impact versus évaluation de processus](../impact-evaluation-vs-process-evaluation/)
pour la question complémentaire à laquelle ces méthodes ne répondent pas à elles seules.

## Pièges à éviter

- **Forcer un ECR alors qu'il est infaisable ou contraire à l'éthique**, ou à l'inverse ne jamais
  envisager un plan quasi expérimental alors qu'une véritable opportunité — un seuil de politique
  publique, un déploiement échelonné — existait et n'a pas été saisie.
- **Ignorer l'hypothèse de tendances parallèles dans le DiD.** Si la zone témoin divergeait déjà de
  la zone traitée avant l'intervention, la comparaison en deux points est contaminée ; vérifiez les
  tendances antérieures, pas seulement l'avant/après.
- **N'apparier que sur les covariables observées dans le PSM.** La sélection non observée, comme la
  motivation des participants, peut biaiser l'estimation même lorsque les covariables observées sont
  bien équilibrées.
- **La manipulation de la variable de classement dans le RDD.** Si les personnes peuvent influencer
  leur score pour tomber juste à l'intérieur d'un seuil d'éligibilité, la discontinuité n'isole plus
  un effet causal.

## Sources

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
