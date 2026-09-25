# Analyse multicritère (AMC / MCDA)

L'AMC note et pondère des options par rapport à plusieurs critères distincts et pondérés à la fois,
produisant un classement comparatif sans forcer chaque critère dans une échelle monétaire ou
physique unique. C'est la méthode d'évaluation adaptée aux décisions où les résultats en jeu ne
peuvent réellement pas se réduire à un seul chiffre.

## Pourquoi c'est important

Le Green Book sanctionne explicitement l'AMC (son annexe d'étude de cas de l'encadré 2 et son
annexe A en traitent directement) pour les évaluations où les bénéfices sont « véritablement
incommensurables » — où convertir l'ensemble en argent via une
[analyse coûts-bénéfices sociale](../social-cost-benefit-analysis/), ou en un seul résultat via une
[analyse coût-efficacité](../cost-effectiveness-analysis-in-government/), dénaturerait la décision
plutôt que de l'éclairer
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Le choix d'un site pour une nouvelle prison, par exemple, met en balance le coût d'investissement,
l'impact sur la communauté, la connectivité des transports, l'effet environnemental et la capacité
à recruter du personnel — des critères qui ne partagent pas d'unité commune et où imposer une unité
commune (typiquement l'argent) introduirait subrepticement un jugement de valeur sur l'importance
relative, disons, de l'impact environnemental par rapport au coût, déguisé en arithmétique
objective.

L'honnêteté de l'AMC est aussi sa principale vulnérabilité : puisque les pondérations sont fixées
par celui ou celle qui conduit l'évaluation (ou par un panel), la méthode n'est légitime qu'à la
mesure du processus de pondération. Le Green Book précise explicitement que les critères et les
pondérations doivent être convenus et publiés *avant* que les options ne soient notées, précisément
pour empêcher un évaluateur de remonter d'une option préférée vers les pondérations qui la
justifient.

## Le calcul

```
Pour chaque option i et chaque critère j :
  Score_ij   = la performance de l'option sur ce critère (souvent 0-100
               ou 1-10, établie à partir de données probantes, du jugement
               d'experts, ou d'une notation par les parties prenantes)
  Poids_j    = importance relative du critère j, les poids somment à 1 (ou 100)

Score pondéré de l'option i = Σ_j (Score_ij × Poids_j)

Procédure :
1. Convenir de l'ensemble de critères et des poids AVANT de noter une
   quelconque option (la pondération par compensation ou la comparaison
   par paires, par ex. l'AHP, sont des méthodes d'élicitation courantes).
2. Noter chaque option par rapport à chaque critère sur une échelle
   commune, en s'appuyant sur des données probantes autant que possible.
3. Calculer les totaux pondérés ; classer les options.
4. Tester la sensibilité des poids : le classement résiste-t-il à un
   désaccord plausible sur l'importance que devrait avoir chaque critère ?
```

L'AMC ne produit pas de valeur absolue défendable comme le fait la valeur actuelle nette de
l'ACBS — elle ne produit qu'un classement conditionné aux pondérations convenues. C'est un atout
quand la décision porte véritablement sur un arbitrage entre des biens incommensurables, et un
handicap si elle sert à esquiver le travail plus difficile de monétisation là où celle-ci était
réellement possible.

## Exemple chiffré

**Collectivité locale** : un conseil qui choisit l'emplacement d'un nouveau centre de recyclage
des déchets ménagers note trois sites par rapport à quatre critères, pondérés par un panel
interservices avant toute visite de site :

```
Critères (poids) :        Coût d'investissement (30 %)  Accès aux transports (25 %)
                           Impact communautaire (25 %)   Impact environnemental (20 %)

Scores des sites (0-100, plus élevé = meilleur) :
Site A : coût 80, accès 60, communauté 40, environnement 70
Site B : coût 60, accès 90, communauté 70, environnement 50
Site C : coût 90, accès 50, communauté 80, environnement 60

Totaux pondérés :
Site A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Site B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Site C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Le Site C arrive en tête. Un test de sensibilité qui fait passer le poids de l'impact communautaire
de 25 % à 35 % (en prenant 10 points au coût d'investissement) porte le total du Site C à
71,5 − 3 + 8 = 76,5 et celui du Site B à 68 − 6 + 7 = 69 — le Site C reste en tête, donc le
classement résiste à ce désaccord plausible sur la pondération, ce qui est exactement le contrôle
que le Green Book attend de voir rapporté.

**Association caritative** : une fondation de financement qui choisit entre financer un service de
conseil en désendettement, un réseau de banques alimentaires et un programme d'éducation
financière recourt à l'AMC plutôt qu'au RSI (voir
[retour social sur investissement](../social-return-on-investment/)) précisément parce que les
administrateurs sont en désaccord, de bonne foi, sur le poids relatif que devraient avoir l'aide
d'urgence ou la prévention — l'AMC leur permet de convenir de la *forme* de ce désaccord (une
fourchette de pondération) plutôt que de prétendre qu'un ratio RSI unique le tranche.

## Lien avec l'ingénierie logicielle

L'AMC est l'outil naturel pour la sélection de fournisseurs et d'architectures lorsque les critères
entrent véritablement en conflit — choisir entre un système de gestion de dossiers hébergé dans le
cloud et un système sur site met en balance coût, risque de souveraineté des données,
accessibilité et vitesse de livraison, d'une manière qui ne se réduit pas à un seul chiffre. Les
responsables techniques devraient insister pour que la pondération ait lieu avant que les options
ne soient notées, exactement comme l'exige le Green Book, car un exercice de pondération mené après
avoir vu la liste restreinte dérive systématiquement vers l'option déjà favorisée par la salle.
Voir [construire ou acheter dans l'administration publique](../build-vs-buy-in-government/) pour
une application courante de l'AMC, et [tableau de bord de valeur publique](../public-value-scorecard/)
pour un outil de notation structurée apparenté, utilisé après la décision plutôt qu'avant.

## Pièges à éviter

- **Fixer les poids après avoir vu les options.** C'est la façon la plus courante de manipuler
  l'AMC, intentionnellement ou non ; publiez les poids avant la notation, et consignez qui les a
  fixés.
- **Traiter le total pondéré comme un chiffre absolu.** Un score de 71,5 contre 68 n'est pas un
  écart statistiquement significatif à moins que l'analyse de sensibilité ne confirme la stabilité
  du classement ; rapportez des fourchettes, pas une fausse précision.
- **Utiliser l'AMC pour éviter une monétisation pourtant réalisable.** Si la plupart des critères
  pouvaient être chiffrés de façon crédible, se rabattre sur l'AMC plutôt que sur l'
  [ACBS](../social-cost-benefit-analysis/) écarte de l'information que l'évaluation aurait pu
  utiliser.
- **Laisser une seule partie prenante dominante fixer seule tous les poids.** Les bonnes pratiques
  du Green Book attendent que les poids soient élicités auprès d'un panel représentatif, et non du
  directeur commanditaire, pour éviter que l'évaluation ne redérive simplement ce que cette
  personne voulait déjà.

## Sources

- HM Treasury. « The Green Book: appraisal and evaluation in central government. » 2022, Annexe A
  (analyse multicritère) et études de cas de l'encadré 2.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. « Multi-criteria analysis: a manual. » 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. « Multiple Criteria Decision Analysis: An Integrated Approach. » Kluwer,
  2002.
