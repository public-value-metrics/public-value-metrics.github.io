# Pondération distributive

La pondération distributive ajuste la valeur monétaire d'un coût ou d'un bénéfice selon qui le reçoit,
sur le principe qu'une livre supplémentaire vaut davantage pour un ménage pauvre que pour un ménage
riche. Le Green Book de HM Treasury fournit une méthode explicite pour appliquer cette pondération,
fondée sur l'utilité marginale décroissante du revenu, afin que les évaluations ne traitent pas
silencieusement une livre gagnée par le décile le plus riche comme équivalente en valeur à une livre
gagnée par le plus pauvre.

## Pourquoi c'est important

L'analyse coûts-bénéfices standard additionne des livres sans se demander à qui elles appartiennent, ce
qui suppose implicitement qu'une livre vaut la même chose pour tout le monde — une hypothèse que les
économistes savent depuis longtemps fausse. Un ménage gagnant 15 000 £/an vit un gain de 1 000 £ très
différemment d'un ménage gagnant 150 000 £/an, parce que l'utilité marginale du revenu diminue à mesure
que le revenu augmente. Non pondérée, l'évaluation standard favorise systématiquement les interventions
qui bénéficient à des groupes déjà plus aisés, parce que leur pouvoir d'achat plus élevé gonfle la
valorisation monétaire des bénéfices qui les atteignent (la rénovation d'un parc situé près d'un
logement coûteux « montre » un bénéfice de valeur immobilière plus important que la même rénovation
près d'un logement bon marché, uniquement parce que les prix y sont plus élevés, non parce que le gain
de bien-être y serait supérieur).

Les lignes directrices complémentaires du Green Book sur l'analyse distributive, renforcées après la
révision de 2020 du Trésor en réponse aux critiques selon lesquelles la méthodologie d'évaluation
favorisait systématiquement Londres et le Sud-Est, établissent une approche de pondération formelle
fondée sur une élasticité supposée de l'utilité marginale du revenu d'environ 1,3 — ce qui signifie
qu'un doublement du revenu réduit à peu près de moitié (plus précisément, 2^-1,3 ≈ 0,41 fois) la valeur
marginale d'une livre supplémentaire. Ce n'est pas un ajustement d'arrondi : son application peut
changer lequel de deux programmes concurrents affiche la valeur actuelle nette la plus élevée, en
particulier lorsqu'on compare une intervention concentrée dans une zone défavorisée à une intervention
répartie sur l'ensemble de la population.

## Le calcul

Le poids distributif du Green Book pour une livre de bénéfice revenant à un ménage au niveau de revenu
y, par rapport à une livre au niveau de revenu moyen national ȳ :

```
Poids(y) = (ȳ / y)^e

où :
  y  = revenu du ménage (ou revenu du groupe concerné)
  ȳ  = revenu moyen (de référence) des ménages
  e  = élasticité de l'utilité marginale du revenu (Green Book : environ 1,3)
```

Application des poids aux bénéfices nets :

```
Bénéfice pondéré = Σ [bénéfice non pondéré pour le groupe i × Poids(y_i)]
```

Un groupe gagnant la moitié du revenu national moyen (y = 0,5ȳ) obtient un poids de
(1/0,5)^1,3 = 2^1,3 ≈ 2,46 — chaque livre de bénéfice pour ce groupe compte comme valant environ 2,46
fois une livre pour un ménage à revenu moyen.

## Exemple chiffré

**Deux programmes locaux concurrents**, chacun avec un bénéfice net non pondéré de 2 millions £/an,
en concurrence pour le même fonds régional de croissance :

- *Programme A* : un dispositif de soutien aux entreprises dans une ville prospère, revenu moyen des
  ménages de 45 000 £ (soit environ 1,3 fois la moyenne nationale supposée de 35 000 £).
- *Programme B* : un programme de compétences dans un quartier défavorisé, revenu moyen des ménages de
  18 000 £ (soit environ 0,51 fois la moyenne nationale).

```
Poids(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Poids(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Bénéfice pondéré A = 2 000 000 £ × 0,72 = 1,44 million £
Bénéfice pondéré B = 2 000 000 £ × 2,53 = 5,06 millions £
```

Non pondérés, les deux programmes sont à égalité. Pondéré pour l'impact distributif, le bénéfice du
Programme B est plus de trois fois supérieur — un résultat qui inverse la recommandation de
financement et reflète l'objectif explicite du Green Book, qui exige que la pondération soit montrée,
et non seulement le ratio bénéfice-coût non pondéré.

**Attribution de subvention caritative** : un financeur comparant une subvention de 500 000 £
atteignant 1 000 ménages à faible revenu (poids ≈ 2,0, valeur pondérée équivalente à 1 million £) à la
même subvention de 500 000 £ atteignant 1 000 ménages à revenu moyen (poids ≈ 1,0, valeur pondérée
équivalente à 500 000 £) devrait présenter explicitement le cas distributif dans son document destiné
au conseil d'administration, plutôt que de le laisser implicite.

## Lien avec l'ingénierie logicielle

La pondération distributive apparaît rarement directement dans les indicateurs de livraison logicielle,
mais elle devrait orienter la façon dont les équipes d'ingénierie et de données conçoivent la mesure et
le ciblage :

- Lors de la construction d'un tableau de bord d'impact ou d'un calculateur de bénéfices, exposer le
  profil de revenu ou de défavorisation des personnes concernées, pas seulement un total de bénéfice
  agrégé — les chiffres agrégés sans ventilation distributive masquent exactement le renversement
  montré ci-dessus.
- Relier la logique de ciblage dans la conception de service aux mêmes données de défavorisation que
  celles utilisées par le Green Book — voir [Indice de défavorisation multiple](../index-of-multiple-deprivation/)
  — afin que la portée d'un service numérique puisse être évaluée du point de vue de l'équité, pas
  seulement de l'efficience (le quatrième « E » contesté dans le
  [rapport qualité-prix](../value-for-money/)).
- Lorsqu'un algorithme alloue une ressource rare (créneaux de rendez-vous, temps de travailleur social,
  subvention), une fonction objectif non pondérée « maximiser le bénéfice total » reproduira, par
  construction, le même biais que la pondération du Green Book vise à corriger — signaler cela
  explicitement aux responsables politiques avant toute optimisation.

## Pièges à éviter

- **Appliquer les pondérations distributives de façon incohérente au sein d'un portefeuille.**
  Pondérer les bénéfices d'un programme mais pas ceux de son comparateur produit une comparaison
  biaisée, non plus équitable ; le Green Book exige un traitement comparable.
- **Utiliser les valeurs immobilières ou de marché comme substitut du bien-être sans ajustement.** Les
  prix de marché sont eux-mêmes déformés par les inégalités de revenu existantes, ce que la pondération
  distributive vise précisément à corriger — utiliser des valeurs de marché non ajustées peut compter
  le biais deux fois.
- **Ignorer la variation au sein d'un même groupe.** Pondérer par le revenu moyen de la zone (par
  exemple un décile de l'Index of Multiple Deprivation) peut mal représenter les individus qui ne
  correspondent pas à la moyenne de leur zone ; utiliser les données de revenu les plus fines
  raisonnablement disponibles.
- **Traiter l'élasticité de 1,3 comme une constante universelle.** Le Green Book précise lui-même qu'il
  s'agit d'une estimation avec une fourchette plausible ; tester la sensibilité des décisions
  importantes à d'autres élasticités plutôt que de traiter 1,3 comme une valeur exacte.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
