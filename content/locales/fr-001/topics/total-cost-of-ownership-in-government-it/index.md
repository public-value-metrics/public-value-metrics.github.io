# Coût total de possession (TCO) dans l'informatique publique

Le coût total de possession est le coût complet d'un système sur l'ensemble de son cycle de vie —
acquisition plus chaque année d'exploitation — actualisé à une date commune. Dans l'informatique
publique, l'erreur de prévision la plus courante et la plus fiable consiste à comparer des
fournisseurs ou des options sur le seul prix d'acquisition, alors que l'exploitation et la
maintenance représentent généralement entre la moitié et les quatre cinquièmes de la facture totale
sur la durée de vie.

## Pourquoi c'est important

Le Green Book du HM Treasury exige que le volet financier de tout dossier d'affaires selon le
« Five Case Model » couvre les coûts sur l'ensemble du cycle de vie, et non les seules dépenses
d'investissement — pourtant, le National Audit Office a constaté à plusieurs reprises que des
ministères approuvaient des investissements informatiques sur la base de prévisions de coûts
d'exploitation incomplètes ou optimistes, pour ne découvrir le coût réel d'exploitation qu'une fois
le système en production, la ligne budgétaire d'investissement déjà refermée. Le Government Digital
Service et le Central Digital and Data Office, à travers leur Technology Code of Practice
(<https://www.gov.uk/guidance/the-technology-code-of-practice>), poussent les ministères vers
l'informatique en nuage et l'hébergement standardisé, en partie parce que cela rend le coût continu
visible et comparable, plutôt que dissimulé dans un chiffre unique d'investissement qui paraît
séduisant lors de l'approbation et se révèle coûteux et erroné trois ans plus tard.

## Le calcul

```
TCO = Acquisition cost + Σ(t=1..N) Annual operating cost_t / (1+r)^t
      − residual value (discounted)

r = HM Treasury Green Book standard social discount rate, 3.5%/year
    (declining rate schedule for horizons beyond 30 years)

Operating cost components: hosting/licensing, support and maintenance,
security patching and compliance, staff time, planned refresh/migration
```

Voir [taux d'actualisation social](../social-discount-rate/) pour comprendre pourquoi le facteur
d'actualisation compte sur la durée de vie typique de 5 à 10 ans d'un système, et
[construire ou acheter dans le secteur public](../build-vs-buy-in-government/) pour la façon dont le
TCO alimente une décision de construction ou d'achat.

## Exemple chiffré

Un ministère compare deux systèmes de gestion de dossiers sur un horizon de 5 ans, au taux
d'actualisation de 3,5 % du Green Book.

```
System A: capex £3,500,000, opex £250,000/year
System B: capex £1,800,000 (looks cheaper), opex £650,000/year
          (heavier vendor support and integration burden)

Naive comparison on capex alone: B wins, £1.8M < £3.5M.

Discount factor sum, 5 years at 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

Le TCO inverse la décision naïve : le système B est légèrement plus coûteux sur cinq ans une fois
le coût d'exploitation actualisé et cumulé, car sa part d'opex dans le coût total est de 62 %
(2 934 750 / 4 734 750) contre 24 % pour le système A — une illustration concrète du constat selon
lequel « la maintenance constitue la majorité de la facture », entièrement masquée par la comparaison
des prix affichés.

## Lien avec l'ingénierie logicielle

Le TCO est le chiffre qui devrait discipliner chaque décision de
[construction ou d'achat](../build-vs-buy-in-government/) et chaque dossier de remboursement de
[dette technique](../technical-debt-as-public-value-erosion/), car les intérêts de la dette et la
maintenance différée sont tous deux des lignes de coût d'exploitation qui appartiennent au même total
actualisé, que quelqu'un les ait suivies ou non. Les ingénieurs qui proposent une plateforme ou le
choix d'un fournisseur devraient présenter le tableau complet du TCO, et non le prix d'acquisition,
car c'est précisément ce prix que le volet financier du Green Book a été conçu pour empêcher les
ministères de retenir isolément. Le TCO est également le dénominateur honnête des jugements de
[rapport qualité-prix](../value-for-money/) — le VFM compare bénéfice et coût, et une ligne de coût
sous-évaluée gonfle tous les ratios de VFM d'un dossier d'affaires.

## Pièges à éviter

- **Comparaison limitée au capex** : l'erreur de marché public la plus fréquente — comparer les prix
  catalogue des fournisseurs sans prévision de coût d'exploitation correspondante pour chaque option.
- **Exclusion des coûts de sortie et de migration** : l'extraction des données en fin de contrat, la
  migration vers une nouvelle plateforme, et les pénalités de dépendance envers un fournisseur sont
  des lignes de TCO réelles qui apparaissent rarement dans le dossier d'affaires initial.
- **Exclusion du coût de sécurité et de conformité** : le rythme des correctifs, le renouvellement des
  accréditations et le coût des audits augmentent avec l'âge et la complexité du système — voir
  [valeur de la cybersécurité dans le secteur public](../public-sector-cybersecurity-value/) — et sont
  systématiquement omis de la prévision d'opex.
- **Comparaison non actualisée entre options aux profils de coût différents** : comparer une option à
  forte composante capex à une option à forte composante opex sans actualisation favorise
  systématiquement l'option qui reporte le plus de coûts vers les années ultérieures.

## Sources

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
