# La dette technique comme érosion de la valeur publique

La dette technique est la métaphore de Ward Cunningham datant de 1992 pour le coût futur implicite des
décisions de codage expédientes du passé : un **principal** (le travail de remédiation dû) et un
**intérêt** (le frein continu qu'il exerce sur la délivrance). Dans un parc informatique gouvernemental
hérité, cet intérêt est payé directement en valeur publique — une délivrance plus lente des changements
statutaires, des taux d'échec plus élevés sur les services destinés aux citoyens, et un bassin
décroissant de personnes capables de toucher le système en toute sécurité.

## Pourquoi c'est important

Les systèmes hérités de type mainframe et de l'ère COBOL à travers les ministères britanniques — HMRC
et DWP parmi les plus cités — portent un risque bien documenté et croissant que le National Audit
Office a signalé à plusieurs reprises, y compris dans son rapport *Digital Transformation in
Government* (<https://www.nao.org.uk/>) : des plateformes vieillissantes coûteuses à modifier, de plus
en plus difficiles à sécuriser, et dépendantes d'une main-d'œuvre spécialisée qui part à la retraite
plus vite qu'elle n'est remplacée. Contrairement à un arriéré du secteur privé, cette dette se trouve
directement entre les citoyens et leurs droits statutaires — un moteur de calcul de prestations qui ne
peut pas être modifié en toute sécurité est une contrainte de délivrance de politique publique, pas
seulement une gêne d'ingénierie. Le redémarrage en 2013 du programme informatique Universal Credit,
lorsque le National Audit Office a constaté que la construction originale ne délivrerait pas de rapport
qualité-prix et qu'une part substantielle de l'actif logiciel a dû être passée en perte, est un exemple
canonique de dette technique non chiffrée rattrapant un programme public en production, visible
ministériellement.

## Le calcul

```
SQALE principal = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ citizen-facing incident rate × cost per incident
                + specialist-skills premium × affected headcount
Paydown case = PV(interest avoided over horizon) − remediation cost
               (discounted at the Green Book social discount rate, see
               social-discount-rate.md)
```

Le principal énonce le passif ; l'intérêt est ce qui construit le dossier d'investissement auprès d'une
commission des comptes publics.

## Exemple chiffré

Un moteur de traitement de demandes de 250 000 lignes écrit dans un 4GL hérité. En utilisant le repère
CAST Appmarq d'environ 3,61 $ de principal de dette technique par ligne de code (≈ 2,85 £ à un taux de
conversion typique) :

```
Principal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (grade C)
```

Intérêt mesuré : le ministère retient trois contractants spécialisés à une prime de taux journalier de
40 % au-dessus des taux d'ingénieur senior standard, car les compétences internes se sont érodées — un
surcoût de 180 000 £/an sur une équipe de six personnes. Le système cause aussi quatre pannes de
traitement majeures par an, chacune suspendant des décisions pour environ 5 000 demandeurs et les
redirigeant vers le centre de contact à environ 25 £/appel :

```
Interest ≈ £180,000 (skills premium)
         + 4 × 5,000 × £25 = £500,000 (redirected-contact cost)
         ≈ £680,000/year
```

Une remédiation ciblée des modules les moins performants coûte 1 200 000 £ et est modélisée pour
réduire l'intérêt de 70 % :

```
Interest reduction = 0.70 × 680,000 = £476,000/year
Payback ≈ 1,200,000 / 476,000 ≈ 2.5 years
```

Le ciblage compte : remédier du code rarement touché n'achète rien, car l'intérêt se concentre là où la
fréquence de changement et la densité de dette culminent toutes deux.

## Lien avec l'ingénierie logicielle

Le cadrage en valeur publique qui élève un dossier de dette technique au-delà de « le code est vieux » :
exprimez le parc hérité comme un inventaire des endroits où la capacité de délivrance perdue se
concentre, et reliez-le explicitement au
[coût total de possession](../total-cost-of-ownership-in-government-it/), car l'intérêt est un coût
opérationnel qui appartient à la ligne de coût total de possession, que les finances l'aient demandé ou
non. Les systèmes chargés de dette portent aussi une exposition disproportionnée en
[cybersécurité](../public-sector-cybersecurity-value/), car la cadence de correctifs et la densité de
dette sont corrélées — un système hérité impossible à corriger est une dette technique dont l'intérêt
est payé en risque d'incident plutôt qu'en livres. Et chaque arbitrage remédiation-contre-fonctionnalité
est lui-même une décision de [coût du délai](../cost-of-delay-in-public-programmes/) : rembourser la
dette retarde le prochain changement statutaire, qui a son propre CoD devant être pesé contre l'intérêt
économisé.

## Pièges à éviter

- **Reporting du seul principal** : une estimation de remédiation large et effrayante sans chiffre
  d'intérêt ne justifie rien auprès d'un approbateur de dépenses.
- **Prendre les chiffres de dette générés par outil au pied de la lettre** : les scanners de type
  SQALE comptent les violations de règles ; ils manquent le type de dette coûteux — décisions
  architecturales et règles métier héritées non documentées — tout en signalant des broutilles.
- **« La réécriture évite tout ça »** : les programmes de remplacement doivent satisfaire la même
  discipline que tout autre dossier d'affaires — coût contrefactuel, probabilité de succès et
  actualisation — pas une exemption de celle-ci, comme l'a démontré le redémarrage d'Universal Credit
  en 2013.
- **L'utopisme de la dette zéro** : le niveau de dette optimal n'est pas zéro ; la dette est un levier
  qui a acheté une délivrance plus précoce. La vraie question est toujours le taux d'intérêt, pas
  l'existence même de la dette.

## Sources

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
