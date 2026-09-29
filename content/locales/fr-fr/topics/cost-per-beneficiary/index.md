# Coût par bénéficiaire

Le coût par bénéficiaire est le coût total du programme divisé par le nombre de personnes uniques
ayant reçu un service — toute personne touchée, indépendamment de savoir si sa situation a réellement
changé. C'est le chiffre d'efficience qu'une organisation peut produire le plus rapidement, parce que
« qui avons-nous servi » se trouve presque toujours déjà dans le système de gestion des dossiers, alors
que « qui a été aidé » n'y figure généralement pas.

## Pourquoi c'est important

Les bailleurs demandent constamment le coût par bénéficiaire, et pour des raisons défendables : il est
disponible immédiatement, il est comparable au sein d'un portefeuille de programmes très différents, et
il est honnête sur la portée d'une manière que les affirmations de résultats — qui prennent plus de
temps à vérifier et sont plus faciles à surestimer — ne le sont pas. Le SORP (Statement of Recommended
Practice) des associations caritatives britanniques, qui régit la façon dont les associations
rapportent sous FRS 102, exige que les rapports annuels des administrateurs décrivent les réalisations
au regard des objectifs, mais les comptes de gestion de la plupart des petites associations restent par
défaut fondés sur des coûts unitaires de portée, car ceux-ci sont peu coûteux à produire et faciles à
auditer.

Le danger consiste à traiter le coût par bénéficiaire comme s'il répondait à la question à laquelle il
ne peut pas répondre : est-ce que l'argent a fonctionné. Voir [coût par résultat](../cost-per-outcome/)
pour l'indicateur qui répond réellement à cela, et
[résultats et réalisations](../outcomes-vs-outputs/) pour la distinction sous-jacente. Le coût par
bénéficiaire est un indicateur de tri et de portée légitime — il indique à un bailleur jusqu'où
l'argent s'étire — mais un faible coût par bénéficiaire peut signifier soit une efficience réelle, soit
un service si léger qu'il ne change rien.

## Le calcul

```
Cost per beneficiary = Total programme cost / Number of unique people served

Contrast:
Cost per outcome      = Total programme cost / Number of people achieving the defined outcome

Cost per beneficiary is always ≤ cost per outcome, because the outcome population is a subset
(often a small one) of the beneficiary population.
```

## Exemple chiffré

**Banque alimentaire, même année que l'exemple du coût par résultat** :

- Coût total du programme : 450 000 £
- Foyers uniques servis (trois colis ou plus) : 1 800

```
Cost per beneficiary = £450,000 / 1,800 = £250 per household served
```

Comparez les deux indicateurs côte à côte :

| Indicateur | Dénominateur | Résultat |
|---|---|---|
| Coût par bénéficiaire | 1 800 foyers servis | 250 £ |
| Coût par résultat | 630 foyers atteignant la sécurité alimentaire | 714 £ |

Un bailleur qui ne voit que 250 £ pourrait conclure qu'il s'agit d'une association très efficiente. Un
bailleur qui voit les deux chiffres peut poser la question la plus utile : l'écart entre la portée
(1 800) et le résultat (630) est-il un manque de collecte de données, un défaut de conception, ou un
reflet honnête de la difficulté d'atteindre la sécurité alimentaire par l'aide alimentaire seule ?

**Association de formation à l'emploi, à titre illustratif** : coût par bénéficiaire (inscrit) =
2 000 £ ; coût par résultat (emploi durable à 6 mois) = 11 000 £, car seulement 18 % des inscrits
terminent le programme et trouvent un emploi durable. Cet écart d'un facteur cinq entre les deux
chiffres est courant partout où les taux d'achèvement ou de durabilité sont faibles — une association
de formation et une banque alimentaire sont structurellement identiques sur ce point.

## Lien avec l'ingénierie logicielle

Le coût par bénéficiaire est l'indicateur par défaut dans les logiciels du secteur associatif, car
c'est celui qui découle d'un enregistrement de bénéficiaire sans travail supplémentaire : créer un
dossier, consigner un service, compter les lignes. Construire un système qui prend aussi en charge le
coût par résultat signifie ajouter délibérément une seconde entité de premier ordre — un événement de
résultat, daté et défini indépendamment de la délivrance du service — et résister à la tentation de
laisser « dossier clos » tenir lieu de « résultat atteint ». Lors du cadrage d'une plateforme de gestion
de subventions ou de CRM, demandez lequel des deux indicateurs chaque tableau de bord affiche
réellement, et étiquetez-le en conséquence ; les confondre dans une seule vignette « impact » est l'une
des causes les plus courantes, au niveau logiciel, des pièges ci-dessous. Voir
[bases de données de coûts unitaires](../unit-cost-databases/) pour l'étalonnage de l'un ou l'autre
indicateur une fois correctement étiqueté.

## Pièges à éviter

- **Présenter le coût par bénéficiaire comme de l'impact.** Il mesure la portée, pas le changement.
  Étiquetez les tableaux de bord et rapports « coût par personne servie », pas « coût par personne
  aidée ».
- **Double comptage entre programmes.** Une personne recevant à la fois des colis alimentaires et des
  conseils d'endettement de la même association est un bénéficiaire, pas deux, si le dénominateur est
  censé décrire une portée unique ; décidez et documentez la convention utilisée.
- **Traiter un chiffre plus bas comme toujours meilleur.** Un club-repas en accès libre battra
  toujours un service de gestion de dossiers intensif sur le coût par bénéficiaire, car il coûte moins
  cher de toucher légèrement quelqu'un. Cela ne dit rien sur lequel produit le changement le plus
  durable par livre dépensée.
- **Changer discrètement de dénominateur entre les rapports.** Un chiffre de coût par bénéficiaire cité
  dans un rapport annuel par rapport aux « inscrits » et dans le suivant par rapport aux « ayant
  terminé » n'est pas comparable d'une année sur l'autre ; indiquez le dénominateur à chaque fois.

## Sources

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
