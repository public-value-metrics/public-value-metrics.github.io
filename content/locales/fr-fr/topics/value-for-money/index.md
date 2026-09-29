# Rapport qualité-prix (VFM)

Le rapport qualité-prix (value for money, VFM) est le test formel du secteur public britannique pour
déterminer si une dépense atteint le meilleur équilibre disponible entre coût et bénéfice. Le Green
Book du HM Treasury le structure autour de trois « E » — économie, efficience et efficacité —
l'équité étant de plus en plus défendue comme un quatrième critère, quoique contesté. Tout dossier
d'affaires du secteur public qui résiste à l'examen doit répondre explicitement aux trois, et non se
contenter d'affirmer que la dépense « en vaut la peine ».

## Pourquoi c'est important

Le VFM n'est pas un synonyme de « pas cher ». Le Green Book (HM Treasury, édition 2022) précise
clairement qu'acheter l'option la moins coûteuse (économie) sans vérifier qu'elle produit les
résultats attendus (efficacité) est une erreur courante et coûteuse — un marché public qui économise
10 % sur le coût unitaire mais délivre 40 % d'impact en moins représente une valeur moindre, pas
meilleure. Le cadre des trois E oblige un dossier d'affaires à distinguer trois modes d'échec
réellement différents : payer trop cher pour les intrants, gaspiller des intrants dans leur
conversion en réalisations, et produire des réalisations qui ne se traduisent pas en résultats
souhaités par quiconque. Les mécanismes de contrôle des dépenses publiques au Royaume-Uni — points
d'approbation du Treasury, études de rapport qualité-prix du National Audit Office (NAO), et
évaluations des comptables ministériels — sont construits autour de ce test en trois parties, de
sorte qu'un dossier d'affaires technique qui ne traite que du coût (économie) échouera à l'examen
même si la technologie elle-même est solide.

Le « quatrième E », l'équité, est contesté précisément parce qu'il peut entrer en conflit avec les
trois autres : la façon la plus efficiente de délivrer un service à l'échelle nationale n'est que
rarement la plus équitable, car concentrer la délivrance là où elle coûte le moins cher à atteindre
signifie souvent négliger les publics les plus difficiles à atteindre. La révision de 2020 du Green
Book a répondu aux critiques (notamment celles du Treasury Select Committee et de l'IPPR North en
2020) selon lesquelles les ratios coûts-bénéfices purs favorisaient systématiquement les régions déjà
prospères, en exigeant que les évaluations traitent explicitement de l'impact distributif — voir
[pondération distributive](../distributional-weighting/).

## Le calcul

Le VFM n'est pas un ratio unique mais un diagnostic en trois (ou quatre) parties, appliqué en
séquence :

```
Economy:       Are inputs purchased at the lowest reasonable cost for the
               required quality?  (£ per unit of input)

Efficiency:    How well are inputs converted into outputs?
               (outputs / inputs, e.g. cases processed per caseworker-hour)

Effectiveness: Do the outputs actually produce the intended outcomes?
               (outcomes achieved / outcomes intended)

[Equity]:      Are costs and benefits distributed fairly across the
               population, or concentrated on those least in need?
```

Un échec de VFM peut survenir à n'importe quelle étape, indépendamment des autres : marché public
économique mais délivrance inefficiente ; délivrance efficiente de la mauvaise réalisation ;
résultats effectifs obtenus à un coût excessif. Voir
[indicateurs clés de performance du secteur public](../public-sector-kpis/) pour la façon dont ces
notions se traduisent en indicateurs mesurables, et
[analyse coût-efficacité dans le secteur public](../cost-effectiveness-analysis-in-government/) pour
la méthode de comparaison formelle.

## Exemple chiffré

**Centre d'appels d'une collectivité locale** : un conseil compare deux options pour un nouveau
système de gestion de dossiers.

- *Option A* : licence à 600 000 £ (la moins chère disponible), mais les agents mettent en moyenne
  22 minutes par dossier car le flux de travail exige une ressaisie manuelle entre systèmes —
  l'efficience est mauvaise.
- *Option B* : licence à 900 000 £, flux de travail intégré, les agents mettent en moyenne 9 minutes
  par dossier.

L'économie seule favorise A (300 000 £ moins cher). Mais pour 40 000 dossiers par an, A coûte
40 000 × 22/60 = 14 667 heures de personnel ; B coûte 40 000 × 9/60 = 6 000 heures de personnel. À un
coût de personnel chargé de 28 £/heure, A coûte 410 667 £/an en temps de personnel contre 168 000 £/an
pour B — un écart d'efficience de 242 667 £/an qui absorbe l'écart d'économie initial de 300 000 £ en
14 mois. Le VFM favorise B une fois l'efficience prise en compte, pas A.

**Subvention à une association caritative** : un bailleur compare une subvention de 50 000 £
aboutissant à 200 placements en emploi réussis (250 £/placement — une économie apparemment
excellente) à une subvention de 120 000 £ aboutissant à 350 placements qui se maintiennent plus de
12 mois, contre les placements de la première subvention, dont la moitié cessent dans les 3 mois.
L'efficacité — la durabilité des résultats — inverse le classement apparent du VFM : le coût réel par
placement *durable* est de 250 £ ÷ 0,5 = 500 £ pour la première subvention, contre 120 000 £/350 ≈
343 £ pour la seconde.

## Lien avec l'ingénierie logicielle

Le VFM offre aux équipes d'ingénierie une discipline pour formuler les dossiers d'affaires
technologiques de la façon dont les fonctions finances et audit les liront réellement :

- Présenter l'économie, l'efficience et l'efficacité comme des lignes distinctes dans un dossier
  d'affaires, et non comme un seul chiffre de « valeur » agrégé — un examinateur formé au Green Book
  demandera précisément cette décomposition.
- Se méfier de l'optimisation du coût d'acquisition (économie) au détriment de l'intégration et de
  l'efficience du flux de travail, une fausse économie très courante dans l'informatique publique
  (voir [coût total de possession dans l'informatique publique](../total-cost-of-ownership-in-government-it/)
  et [construire ou acheter dans le secteur public](../build-vs-buy-in-government/)).
- L'efficacité nécessite des données de résultats, pas seulement des décomptes de réalisations —
  relier les indicateurs de délivrance à [résultats et réalisations](../outcomes-vs-outputs/) et à une
  véritable évaluation via l'[analyse contrefactuelle](../counterfactual-analysis/), plutôt que de
  supposer que les réalisations impliquent des résultats.
- Lorsqu'un système dessert inégalement des régions ou des groupes démographiques, la question de
  l'équité est une objection légitime au regard du VFM, et non un simple « plus » facultatif — voir
  [inclusion numérique](../digital-inclusion/).

## Pièges à éviter

- **Assimiler le VFM au prix le plus bas.** L'économie ne représente qu'un tiers (ou un quart) du
  test ; le Green Book met explicitement en garde contre les règles de marché public « au moins
  cher » qui ignorent l'efficience et l'efficacité.
- **Mesurer des réalisations et les appeler des résultats.** Le volume de dossiers traités
  (efficience) n'est pas la même chose que des dossiers bien résolus (efficacité) ; voir
  [résultats et réalisations](../outcomes-vs-outputs/).
- **Traiter l'équité comme optionnelle.** Depuis la mise à jour de 2020 du Green Book, l'impact
  distributif est censé être évalué en même temps que les trois E traditionnels, et non ajouté après
  coup ; l'intégrer rétroactivement après l'approbation d'un dossier d'affaires est bien plus
  difficile que de l'inclure dès le départ.
- **Comparer des options à des volumes différents sans normalisation.** Une comparaison de VFM par
  unité entre des options desservant des populations différentes doit contrôler l'échelle, sans quoi
  la comparaison d'efficience est dénuée de sens.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
