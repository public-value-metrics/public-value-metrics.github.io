# Évaluation du Green Book (modèle à cinq cas)

Le Green Book est le guide obligatoire d'HM Treasury pour l'évaluation ex ante et ex post des
propositions de dépenses du gouvernement du Royaume-Uni. Son outil central, le modèle à cinq cas
(five-case model), impose à un dossier d'affaires de répondre à cinq questions distinctes — est-ce
une bonne idée, apporte-t-elle une valeur, peut-elle être acquise, est-elle finançable, et peut-elle
être mise en œuvre — plutôt que de tout condenser en un seul chiffre qu'un ministre pourrait
approuver d'un geste.

## Pourquoi c'est important

Toute proposition de dépense du gouvernement central britannique au-delà des limites déléguées aux
départements doit passer par l'évaluation du Green Book avant que le financement ne soit débloqué,
et la revue du Green Book 2020 d'HM Treasury (publiée après des critiques selon lesquelles le
processus était biaisé au détriment des régions les plus pauvres, voir
<https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) a
renforcé l'exigence que les options soient comparées à une véritable base de référence « faire le
minimum » et que l'adéquation stratégique soit démontrée avant même que la valeur pour l'argent ne
soit évaluée. Le modèle à cinq cas lui-même est antérieur au Green Book — il trouve son origine à
l'Office of Government Commerce comme structure standard de dossier d'affaires — mais l'édition 2022
du Green Book l'intègre comme la forme obligatoire de tout dossier d'affaires cherchant l'approbation
du Trésor :
<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

L'intérêt de scinder le dossier en cinq volets est qu'une proposition peut échouer sur n'importe
laquelle des dimensions, indépendamment des autres. Un remplacement informatique stratégiquement
solide et rentable peut néanmoins échouer sur le cas commercial si un seul fournisseur peut le
livrer (créant un risque d'appel d'offres à fournisseur unique), ou échouer sur le cas de gestion si
le département n'a aucun antécédent de livraison de programmes de cette ampleur. Un seul score
« valeur pour l'argent » masque précisément ce type de défaillance.

## Le calcul

Le modèle à cinq cas est une structure, non une formule, mais chaque cas comporte son propre test
quantitatif ou probant :

```
1. Cas stratégique
   Preuve d'un objectif de dépense lié à la stratégie de l'organisation.
   Test : y a-t-il seulement matière à changement ? (« ne rien faire »
   reste toujours une option.)

2. Cas économique
   Évaluation des options par rapport à une base de référence « faire le
   minimum », en utilisant l'analyse coûts-avantages sociale ou l'analyse
   coût-efficacité.
   Test : quelle option maximise la valeur publique nette ?
   Voir ../social-cost-benefit-analysis/ et ../cost-effectiveness-analysis-in-government/

3. Cas commercial
   Étude de marché, voie de passation de marché, répartition du risque
   entre acheteur et fournisseur.
   Test : l'option retenue est-elle acquérable à des conditions acceptables ?

4. Cas financier
   Soutenabilité budgétaire dans les limites du budget départemental,
   source de financement, traitement bilanciel.
   Test : pouvons-nous nous le permettre, cette année et chaque année
   suivante ?

5. Cas de gestion
   Gouvernance, plan de projet, plan de réalisation des bénéfices,
   registre des risques.
   Test : cette organisation peut-elle réellement le livrer ?
   Voir ../benefits-realization/
```

Le cas économique est là où réside l'évaluation quantitative : les options sont comparées sur la base
d'une valeur actuelle nette ajustée au [taux d'actualisation social](../social-discount-rate/), en
utilisant la méthode d'[analyse coûts-avantages sociale](../social-cost-benefit-analysis/), ou, lorsque
les bénéfices ne peuvent être honnêtement monétisés, via l'[analyse coût-efficacité](../cost-effectiveness-analysis-in-government/)
ou l'[analyse multicritère](../multi-criteria-decision-analysis/).

## Exemple chiffré

**Collectivité locale** : un conseil évaluant un système informatique de réparations de logements de
12 millions de livres applique les cinq cas comme suit. Cas stratégique : le retard de réparations
dépassera la norme statutaire de logement décent dans les 18 mois sans intervention. Cas économique :
trois options chiffrées sur une période d'évaluation de 10 ans à un taux d'actualisation de 3,5 %
(selon le taux standard de préférence sociale pour le temps du Green Book 2022) — « faire le minimum »
(rapiécer le système existant, VAN −4,1 M£), « acheter » (plateforme sur étagère, VAN +2,3 M£),
« construire » (plateforme sur mesure, VAN +0,6 M£ une fois appliqué un biais d'optimisme de 40 %
pour le développement logiciel sur le coût d'investissement non actualisé, selon l'annexe A du Green
Book). L'option « acheter » l'emporte sur le cas économique. Cas commercial : deux fournisseurs
viables existent, un appel d'offres concurrentiel est possible — validé. Cas financier : capital
disponible auprès du Public Works Loan Board, coûts de fonctionnement compatibles avec le plan
financier à moyen terme — validé. Cas de gestion : le conseil a livré deux systèmes comparables au
cours des cinq dernières années — validé. La proposition se poursuit avec l'option « acheter ».

**Ministère central** : une proposition avec un cas économique solide (VAN +40 M£) mais où un seul
fournisseur détient l'accréditation pertinente échoue au test du cas commercial pour manque de
concurrence, forçant soit une dérogation d'appel d'offres à fournisseur unique (avec sa propre charge
de contrôle), soit une refonte du cahier des charges pour ouvrir le marché — le cas économique seul
n'aurait jamais révélé ce problème.

## Lien avec l'ingénierie logicielle

Les équipes d'ingénierie au sein du gouvernement ou des organisations financées par subventions ne
voient généralement que le cas économique, car c'est la partie que la direction produit et
ingénierie est invitée à justifier (« quel est le ROI de cette migration ? »). Mais un dossier
d'affaires qui obtient l'aval du Trésor ou d'un comité de subventions a besoin des cinq cas, et les
ingénieurs sont souvent les mieux placés pour répondre au cas commercial (peut-on réellement
l'acquérir, ou cela nous enferme-t-il dans le format propriétaire d'un seul fournisseur ?) et au cas
de gestion (avons-nous la capacité de livraison, ou cela dépend-il du fait que trois personnes
précises ne partent pas ?). Traitez une demande de « juste les chiffres du dossier d'affaires » comme
une demande portant sur un cinquième seulement de la décision réelle. Voir
[value for money](../value-for-money/) pour la façon dont le résultat du cas économique est
généralement résumé, et [total cost of ownership](../total-cost-of-ownership-in-government-it/) pour
le cœur quantitatif habituel du cas financier.

## Pièges à éviter

- **Rédiger le cas économique en premier et faire correspondre le cas stratégique.** La revue du
  Green Book 2020 a constaté que ce mécanisme précis orientait le biais d'évaluation vers les lieux
  et secteurs déjà bien documentés, enracinant l'inégalité régionale ; le cas stratégique doit
  établir l'objectif avant que les options ne soient comparées.
- **Assimiler « faire le minimum » à « ne rien faire ».** La bonne base de référence est l'option la
  moins coûteuse qui respecte encore les obligations légales ou de sécurité minimales, non un fantasme
  de dépense nulle — comparer à un zéro littéral gonfle la valeur apparente de chaque option.
- **Sauter les cas commercial et de gestion parce que le cas économique est solide.** Une proposition
  à forte VAN qui ne peut pas être acquise de façon concurrentielle ou livrée par l'organisation
  porteuse n'est pas une proposition finançable ; les évaluateurs du Trésor la rejettent
  systématiquement pour ces motifs, même avec un cas économique convaincant.
- **Appliquer le modèle à cinq cas une seule fois, au départ.** Le Green Book exige que le dossier
  soit réexaminé à chaque étape d'approbation ultérieure (dossier stratégique préliminaire, dossier
  d'affaires préliminaire, dossier d'affaires complet) à mesure que les coûts et les preuves se
  précisent — un dossier figé au stade préliminaire manque une dérive des coûts qu'une étape
  ultérieure aurait détectée.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
