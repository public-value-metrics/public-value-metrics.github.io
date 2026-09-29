# Valeur du temps bénévole

La valeur du temps bénévole est l'estimation monétaire attribuée au travail non rémunéré, le plus
souvent utilisée pour énoncer l'empreinte économique réelle d'une association — ses comptes plus le
travail qu'elle n'a pas eu à payer — ou pour démontrer qu'une intervention donnée est plus coût-efficace
que son seul budget de trésorerie ne le suggère. Deux méthodologies nationales dominent : l'estimation
de l'Independent Sector aux États-Unis et l'approche de l'Office for National Statistics / NCVO au
Royaume-Uni, et elles tarifient la même heure de travail de façon assez différente.

## Pourquoi c'est important

Chaque année, l'Independent Sector, en collaboration avec le Do Good Institute de l'Université du
Maryland, publie une valeur horaire nationale du temps bénévole, construite à partir des données
salariales du Bureau of Labor Statistics — spécifiquement le salaire horaire moyen des travailleurs de
production et non-superviseurs sur les listes de paie privées non agricoles, plus un ajustement pour
avantages sociaux — et décomposée par État américain. Sa publication la plus récente a fixé la valeur à
**36,14 $ de l'heure pour 2025**, en hausse de 3,9 % par rapport à l'année précédente, avec des valeurs
par État allant de plus de 50 $ à Washington, DC à moins de 20 $ à Porto Rico. Au Royaume-Uni, l'Office
for National Statistics a séparément estimé le coût de remplacement du bénévolat formel à
**14,43 £ de l'heure** (estimation de 2017), et le UK Civil Society Almanac 2024 du NCVO utilise des
données de participation au bénévolat — environ 14,2 millions de personnes faisant du bénévolat formel
en 2021-2022 — pour estimer la contribution totale du bénévolat du secteur à environ **18 milliards de
livres**, soit environ 0,8 % du PIB britannique.

La raison pour laquelle cela importe au-delà de la cosmétique comptable : un programme qui repose
fortement sur le travail bénévole peut paraître spectaculairement moins cher sur la seule base du
[coût par résultat](../cost-per-outcome/) en trésorerie qu'un programme reposant sur du personnel
rémunéré, même lorsque le véritable coût de ressource — ce qu'il en coûterait de remplacer ce travail —
est similaire ou supérieur. Les bailleurs et évaluateurs qui ignorent la valeur du temps bénévole
sous-comptent systématiquement le coût réel des modèles de délivrance à forte intensité bénévole, ce qui
fausse les comparaisons d'efficience avec des modèles à personnel rémunéré délivrant le même résultat.

## Le calcul

```
Value of volunteer time = Volunteer hours contributed × hourly rate

Rate choice matters and changes the answer:
  - Replacement cost approach: the wage of a paid worker who would do the
    same task (e.g. a replacement-cost rate for a qualified youth worker,
    not a generic average wage) — most defensible for task-specific valuation
  - Opportunity cost approach: the volunteer's own forgone wage — most
    defensible for valuing what the volunteer gave up
  - National average approach: Independent Sector's or ONS's single
    blended rate — most defensible for headline, cross-sector comparability
```

Les trois approches peuvent différer d'un multiple important pour la même heure (un avocat faisant du
bénévolat comme administrateur d'un conseil a un taux de coût d'opportunité très différent d'un taux
moyen national), de sorte que tout chiffre rapporté doit indiquer quelle méthode l'a produit.

## Exemple chiffré

**Association britannique, approche par moyenne nationale** : 5 000 heures de bénévolat sur une année,
valorisées à 14,43 £/heure (estimation de coût de remplacement de l'ONS) :

```
Value = 5,000 × £14.43 = £72,150
```

Si la dépense de trésorerie de l'association cette année-là était de 300 000 £, son véritable coût de
ressource — trésorerie plus travail bénévole — est de 372 150 £, environ 24 % plus élevé que ce que le
seul chiffre de trésorerie suggère. Un calcul de coût par résultat n'utilisant que le chiffre de
trésorerie de 300 000 £ sous-estime le coût réel de la même marge.

**Association américaine, approche par moyenne nationale** : 2 000 heures de bénévolat valorisées à
36,14 $/heure (Independent Sector, publication 2025) :

```
Value = 2,000 × $36.14 = $72,280
```

**Même association américaine, approche par coût d'opportunité** : si les bénévoles sont de manière
disproportionnée des professionnels retraités dont les revenus antérieurs s'élevaient en moyenne à
60 $/heure, la valorisation au coût d'opportunité serait de 120 000 $ — les deux tiers plus élevée que
le chiffre de moyenne nationale, illustrant pourquoi la méthode doit être indiquée.

## Lien avec l'ingénierie logicielle

Les systèmes qui journalisent les heures bénévoles (outils de planification de créneaux, plateformes de
gestion des bénévoles) devraient capturer les heures au niveau de la tâche ou du rôle, pas seulement un
total, de sorte qu'un taux de coût de remplacement puisse être appliqué par rôle plutôt qu'un taux moyen
national unique sur une main-d'œuvre bénévole mixte (une heure d'administrateur et une heure
d'encadrement ne sont pas économiquement équivalentes). Stocker le taux et la méthodologie utilisés aux
côtés de la valeur calculée — pas seulement le chiffre monétaire final — permet au reporting en aval
(comptes annuels, calculs de [retour social sur investissement](../social-return-on-investment/),
rapports aux bailleurs) de reproduire ou de contester le chiffre plus tard plutôt que de le traiter comme
une constante opaque. Voir [coût par résultat](../cost-per-outcome/) pour comprendre pourquoi omettre la
valeur du temps bénévole sous-estime systématiquement le coût réel de délivrance.

## Pièges à éviter

- **Utiliser un taux unique et uniforme pour des rôles structurellement différents.** Un taux de salaire
  moyen national appliqué à une heure pro bono professionnelle (juridique, financière, clinique) la
  sous-évalue drastiquement ; alignez le taux sur le rôle remplacé partout où la tâche est qualifiée.
- **Double comptage par rapport au coût du personnel rémunéré.** Si les bénévoles se substituent à un
  travail qui serait autrement rémunéré, assurez-vous que la valorisation s'ajoute à la dépense de
  trésorerie, et n'est pas superposée à une estimation de personnel déjà gonflée.
- **Citer un taux obsolète sans date.** Les taux de l'Independent Sector et de l'ONS changent
  annuellement (ou ne sont réestimés que périodiquement, dans le cas de l'ONS) ; un chiffre de temps
  bénévole non daté dans un rapport est proche de dénué de sens pour une comparaison.
- **Traiter la valeur du temps bénévole comme un actif de collecte de fonds.** C'est un ajustement de
  comptabilité de coût pour comprendre le véritable coût de ressource, pas de l'argent nouveau qu'une
  association peut dépenser ; confondre les deux induit en erreur un conseil d'administration lisant
  les comptes.

## Sources

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
