# Retour sur investissement du donateur

Le retour sur investissement du donateur mesure ce que la livre d'un donateur précis achète réellement
en résultats — pas les ratios opérationnels de l'organisation caritative, et pas le retour de
l'organisation sur son budget total. Il recadre le ROI du point de vue de l'organisation (avec quelle
efficience fonctionnons-nous) vers le point de vue du donateur (que change ma contribution marginale),
et ces deux chiffres sont régulièrement, et à tort, traités comme identiques.

## Pourquoi c'est important

Le « ROI » propre d'une organisation caritative, dans la mesure où l'expression est même utilisée,
décrit généralement quelque chose comme le [coût par bénéficiaire](../cost-per-beneficiary/) ou le
[ratio de frais généraux caritatifs](../charity-overhead-ratio/) — des mesures d'efficience
organisationnelle. Le ROI d'un donateur est une question entièrement différente : étant donné que
cette organisation caritative dispose déjà d'autres revenus, qu'ajoute l'argent *de ce* donateur à la
marge ? Si une organisation caritative livrerait le même programme avec ou sans un don particulier de
10 000 £ — parce qu'elle dispose de réserves suffisantes, ou parce qu'un autre financeur aurait comblé
l'écart — le ROI donateur de ce don est proche de zéro, quelle que soit la qualité du ratio de frais
généraux ou du coût par résultat global de l'organisation.

C'est la même question d'additionnalité qui sous-tend l'évaluation du
[rapport qualité-prix](../value-for-money/) dans les dépenses publiques britanniques et
l'[additionnalité et poids mort](../additionality-and-deadweight/) dans l'évaluation de programmes : la
valeur créée n'est imputable à un financeur que dans la mesure où elle ne se serait pas produite de
toute façon. Les grandes plateformes de dons conseillés et les organisations de dons efficaces (Giving
What We Can, GiveWell) construisent explicitement leurs recommandations autour de cette distinction, en
demandant non pas « est-ce une bonne organisation caritative » mais « cette organisation
caritative dispose-t-elle d'une marge de financement inexploitée telle que mon don est additionnel ».

## Le calcul

```
ROI du donateur ≠ Efficience opérationnelle de l'organisation caritative

ROI du donateur ≈ (Résultat obtenu grâce au don) − (Résultat qui se serait produit
                    sans lui, c.-à-d. le contrefactuel)
                  ─────────────────────────────────────────────────
                              Montant du don

Facteurs clés :
  - Marge de financement supplémentaire (l'organisation est-elle contrainte
    financièrement à la marge ?)
  - Substitution de financement (« funging ») (un autre donateur aurait-il
    comblé l'écart ?)
  - Rapport coût-efficacité marginal au niveau de financement spécifique
    (les coûts augmentent souvent à mesure qu'une intervention s'étend
    au-delà de la population la plus facile à atteindre)
```

Voir [rapport coût-efficacité de l'altruisme efficace](../effective-altruism-cost-effectiveness/)
pour la façon dont GiveWell opérationnalise la question de la « marge de financement supplémentaire »,
et [analyse contrefactuelle](../counterfactual-analysis/) pour la méthode générale.

## Exemple chiffré

Un donateur choisit entre deux dons de 5 000 £ :

- **Organisation caritative C** : dispose d'un programme central entièrement financé avec 2 millions £
  de réserves et une liste d'attente de financeurs ; les 5 000 £ marginaux seront probablement ajoutés
  aux réserves ou à une activité de priorité moindre. Résultat additionnel estimé grâce au donateur :
  minime — l'argent ne change manifestement pas ce qui se passe.
- **Organisation caritative D** : un petit programme fondé sur des preuves, qui a publiquement déclaré
  qu'elle devrait refuser 200 personnes le trimestre prochain sans 50 000 £ supplémentaires, et en a
  déjà réuni 42 000 £. Les 5 000 £ marginaux financeront très probablement une prestation réellement
  additionnelle — disons 20 personnes supplémentaires servies, au coût par bénéficiaire propre de
  l'organisation, déclaré à 250 £.

Même montant de don, même donateur, ROI donateur radicalement différent — non pas parce que
l'organisation caritative C est moins performante (elle peut avoir un meilleur coût par résultat
global) mais parce que son écart de financement marginal est déjà comblé.

## Lien avec l'ingénierie logicielle

Les plateformes de dons et les outils de recommandation de dons n'affichent trop souvent que des
indicateurs d'efficience au niveau de l'organisation (ratio de frais généraux, coût par bénéficiaire),
car ce sont ceux que les organisations caritatives publient dans leurs rapports annuels et les plus
faciles à intégrer dans un tableau comparatif. Représenter correctement le ROI du donateur exige un
point de donnée différent, plus difficile à obtenir : l'écart de financement actuel déclaré d'une
organisation, ou sa « marge de financement supplémentaire », qui évolue tout au long de l'année et est
rarement une donnée structurée. Les plateformes qui souhaitent soutenir un raisonnement de ROI donateur
authentique ont besoin soit d'un flux direct issu des déclarations d'écart de financement (comme
GiveWell le tient manuellement à jour pour ses organisations caritatives recommandées), soit d'un
avertissement explicite indiquant qu'un tableau comparatif présente l'efficience organisationnelle, et
non l'additionnalité du donateur. Voir [ratio de frais généraux caritatifs](../charity-overhead-ratio/)
pour l'indicateur avec lequel le ROI du donateur est le plus souvent, et à tort, confondu.

## Pièges à éviter

- **Confondre l'efficience de l'organisation caritative avec l'additionnalité du donateur.** Une
  organisation bien gérée, à faibles frais généraux, peut tout de même avoir un ROI donateur marginal
  proche de zéro si elle n'est pas contrainte financièrement.
- **Ignorer la substitution de financement.** Si un grand financeur institutionnel aurait de toute
  façon couvert l'écart, le don d'un donateur individuel déplace l'argent de ce financeur plutôt que
  d'ajouter une prestation nouvelle.
- **Supposer un rapport coût-efficacité linéaire à grande échelle.** Les bénéficiaires les moins
  coûteux à atteindre sont souvent servis en premier ; le coût marginal par résultat augmente
  fréquemment à mesure qu'un programme se développe, de sorte que le ROI de la prochaine livre n'est
  pas celui de la livre moyenne déjà dépensée.
- **Absence d'écart de financement déclaré.** Une organisation caritative ou une plateforme incapable
  de dire ce que financeraient les X £ suivantes ne peut étayer une véritable revendication de ROI
  donateur, seulement une revendication de coût moyen.

## Sources

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
