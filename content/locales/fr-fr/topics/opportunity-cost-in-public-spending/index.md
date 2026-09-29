# Coût d'opportunité dans les dépenses publiques

Le coût d'opportunité est la valeur de la meilleure alternative sacrifiée lorsqu'un organisme public
engage de l'argent, du temps de personnel ou du capital politique dans une option plutôt qu'une autre.
Dans un ministère à budget fixe, chaque livre dépensée pour un programme est une livre qui ne peut pas
être dépensée pour le prochain meilleur programme — le véritable coût d'une décision n'est pas ce
qu'elle dépense, mais ce qu'elle évince.

## Pourquoi c'est important

Les budgets publics sont plafonnés en espèces sur une période de revue des dépenses, de sorte que —
contrairement à une entreprise privée en croissance — un ministère ne peut pas simplement « trouver plus
d'argent » pour une bonne idée ; la financer signifie definancer autre chose. Le Green Book du HM
Treasury traite cela comme fondamental : chaque évaluation est tenue de comparer une intervention à une
référence « faire le minimum » *et* à des usages alternatifs réalistes de la même ressource,
précisément parce que la véritable question que se pose une équipe de dépenses du Trésor n'est jamais
« est-ce bon ? » mais « est-ce meilleur que ce que cet argent pourrait acheter d'autre ? ». Le principe
d'évaluation central du Green Book — que les ressources publiques devraient aller à l'intervention
offrant la valeur sociale nette la plus élevée par livre — est le coût d'opportunité énoncé comme une
politique.

C'est facile à énoncer et difficile à appliquer, car la « meilleure alternative suivante » est rarement
visible dans un seul dossier d'affaires. Un programme de subventions de 2 millions de livres pour
l'emploi des jeunes est comparé, dans le dossier d'affaires, à ne rien faire — mais le comparateur
honnête est la prochaine meilleure intervention pour l'emploi des jeunes, ou même le meilleur usage
suivant de 2 millions de livres n'importe où dans le portefeuille, y compris des dépenses sans rapport
avec l'emploi. Le Magenta Book (HM Treasury, 2020) avertit explicitement que les évaluations comparant
« avec intervention » à « sans intervention » sous-estiment la barre qu'une intervention doit franchir,
car « sans cette intervention » n'est pas la même chose que « sans rien du tout » — l'argent libéré
finance autre chose.

## Le calcul

```
Opportunity cost of choosing A = value of the best forgone alternative B

Net public value of A = value(A) − value(B), not value(A) − 0
```

Il n'existe pas de formule universelle car l'alternative sacrifiée est spécifique au contexte, mais la
discipline se généralise : identifiez le meilleur usage suivant réaliste de la même ligne budgétaire
(et non un « ne rien faire » idéalisé), valorisez-le sur la même base (monétisée si possible, selon l'
[analyse coût-bénéfice sociale](../social-cost-benefit-analysis/)), et soustrayez.

## Exemple chiffré

**Ligne budgétaire d'un ministère** : un fonds de transformation numérique de 5 millions de livres peut
financer exactement une des deux propositions cette année budgétaire.

- *Option A* : une nouvelle plateforme de gestion de dossiers, bénéfice monétisé de 7,2 millions de
  livres sur 5 ans (économies d'efficience plus résolution plus rapide des dossiers).
- *Option B* : un service de vérification d'identité partagé entre trois ministères, bénéfice monétisé
  de 6,4 millions de livres sur 5 ans.

Un dossier d'affaires naïf pour A compare 7,2 millions de livres de bénéfice à 5 millions de livres de
coût et rapporte un ratio bénéfice-coût de 1,44:1 — apparemment solide. Mais parce que A et B sont en
concurrence pour les mêmes 5 millions de livres, le coût d'opportunité de choisir A est le bénéfice de
6,4 millions de livres de B sacrifié. L'argument *net* en faveur de A par rapport à l'alternative
réaliste n'est que de 7,2 M£ − 6,4 M£ = 0,8 million de livres, et non le chiffre affiché complet de
7,2 millions. Si une troisième option, C, offrait 7,5 millions de livres de bénéfice pour les mêmes
5 millions de livres, financer A plutôt que C détruirait 0,3 million de livres de valeur publique, même
si le dossier d'affaires propre de A paraît pleinement justifié isolément.

**Temps de personnel d'une collectivité locale** : l'équipe de données de trois personnes d'un conseil
peut soit construire un tableau de bord de liste d'attente pour le logement (estimé à économiser
400 heures d'agent/an, valorisées à 28 £/heure = 11 200 £/an), soit un outil de tri de la fraude aux
prestations (estimé à prévenir 85 000 £/an de paiements incorrects). Construire le tableau de bord a un
coût d'opportunité de 85 000 £/an sacrifiés, et non simplement le coût salarial de l'équipe de données —
le véritable coût de la construction interne « gratuite » est le bénéfice bien plus important que
l'équipe aurait pu produire ailleurs.

## Lien avec l'ingénierie logicielle

La capacité d'ingénierie au sein d'un organisme public est elle-même un budget contraint — de la
capacité de sprint, pas des livres — et la même discipline s'applique directement :

- Nommez toujours le comparateur : le dossier d'affaires d'une fonctionnalité devrait indiquer ce que
  les mêmes semaines-équipe pourraient délivrer d'autre, pas seulement son propre retour.
- Traitez « nous avons de la capacité d'ingénierie disponible » comme le début d'une analyse de coût
  d'opportunité, pas sa fin — la capacité disponible a toujours un meilleur usage alternatif, même si
  cet usage est le remboursement de dette technique (voir
  [dette technique comme érosion de la valeur publique](../technical-debt-as-public-value-erosion/)).
- Reliez cela directement au [rapport qualité-prix](../value-for-money/) : le test « économie » du VFM
  est dénué de sens sans un comparateur de coût d'opportunité honnête, et au
  [coût du délai dans les programmes publics](../cost-of-delay-in-public-programmes/), qui chiffre la
  dimension temporelle de cette même logique d'alternative sacrifiée.

## Pièges à éviter

- **Comparer à « ne rien faire » plutôt qu'à la meilleure alternative suivante.** Le Green Book exige
  une référence « faire le minimum » précisément parce que le véritable coût d'opportunité est rarement
  nul ; un dossier d'affaires qui ne franchit que la barre du « ne rien faire » n'a pas montré qu'il
  bat l'alternative réaliste.
- **Ignorer la concurrence interministérielle pour la même enveloppe.** Des lignes budgétaires qui
  paraissent sanctuarisées au sein d'une direction sont souvent en concurrence à un niveau supérieur
  (une revue des dépenses, un programme d'investissement) où le véritable coût d'opportunité se
  réalise.
- **Supposer que le temps de personnel libéré n'a aucune valeur supplémentaire.** Le temps « économisé »
  ne crée de la valeur que s'il est redéployé vers quelque chose d'utile ; si l'usage alternatif
  n'existe pas, l'économie est théorique.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
