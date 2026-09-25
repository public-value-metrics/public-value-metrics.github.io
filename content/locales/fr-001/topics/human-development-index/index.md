# Indice de développement humain (IDH, HDI)

L'IDH est l'alternative phare de l'ONU au classement des pays par le seul revenu : il combine
l'espérance de vie, l'éducation et le revenu en un seul chiffre compris entre 0 et 1, sur le
postulat — défendu par l'économiste Amartya Sen et développé pour l'ONU par Mahbub ul Haq — que le
développement consiste à élargir ce que les personnes peuvent faire et être, et non seulement ce
qu'elles gagnent. Il est publié chaque année dans le Rapport sur le développement humain du
Programme des Nations Unies pour le développement (PNUD) depuis 1990.

## Pourquoi c'est important

Avant l'IDH, le « développement » se mesurait presque exclusivement par le PNB par habitant, qui ne
dit rien sur le fait que la croissance profite ou non à la santé ou à l'éducation des gens ordinaires.
L'approche par les capacités de Sen a reformulé le développement comme l'expansion des libertés
réelles, et ul Haq en a fait un indice publiable que le PNUD pouvait utiliser pour classer chaque
pays, obligeant les gouvernements qui s'étaient enrichis par le seul revenu tout en négligeant la
santé ou la scolarisation à affronter un classement moins bon que ce que suggérait leur PIB (les
États pétroliers du Golfe et certaines économies extractives en sont les exemples classiques). La
structure tripartite de l'IDH est également l'ancêtre méthodologique direct de
l'[indice de pauvreté multidimensionnelle](../multidimensional-poverty-index/) : tous deux refusent
qu'une dimension puisse compenser un déficit dans une autre, en utilisant une moyenne géométrique
plutôt qu'arithmétique. Le PNUD publie des notes techniques complètes et les données sous-jacentes
pour chaque édition (<https://hdr.undp.org/data-center/human-development-index>), qui constituent la
source canonique pour quiconque souhaite s'appuyer sur l'indice plutôt que de le redériver.

## Le calcul

```
Indice d'espérance de vie (IEV)  = (EV − 20) / (85 − 20)

Indice de durée moyenne de scolarisation   = durée moyenne de scolarisation / 15
Indice de durée attendue de scolarisation  = durée attendue de scolarisation / 18
Indice d'éducation (IE)          = (Indice durée moyenne + Indice durée attendue) / 2

Indice de revenu (IR)            = (ln(RNB par habitant) − ln(100)) / (ln(75000) − ln(100))

IDH = (IEV × IE × IR) ^ (1/3)     [moyenne géométrique des trois sous-indices]
```

La moyenne géométrique est un choix délibéré : parce qu'elle multiplie plutôt qu'elle ne fait la
moyenne, un score très élevé dans une dimension ne peut compenser entièrement un score très faible
dans une autre — une conception adoptée par le PNUD en 2010 spécifiquement pour pénaliser le
déséquilibre, en remplacement de la précédente formule à moyenne arithmétique.

## Exemple chiffré

**Pays à revenu intermédiaire** : espérance de vie de 72 ans, durée moyenne de scolarisation de 8
ans, durée attendue de scolarisation de 13 ans, RNB par habitant de 12 000 $.

```
IEV = (72 − 20) / (85 − 20)               = 52 / 65   = 0,800
Indice durée moyenne = 8 / 15                         = 0,533
Indice durée attendue = 13 / 18                       = 0,722
IE = (0,533 + 0,722) / 2                              = 0,628
IR = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                    = 0,723

IDH = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                 ≈ 0,713
```

Un IDH de 0,713 se situe dans la tranche « développement humain élevé » du PNUD (0,700–0,799) ;
« très élevé » commence à 0,800. Notez la sensibilité du résultat au sous-indice le plus faible : si
la durée moyenne de scolarisation était de 4 au lieu de 8 (indice = 0,267, IE = 0,494), l'IDH tombe à
(0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — soit une tranche entière de moins — alors que rien d'autre
n'a changé.

## Lien avec l'ingénierie logicielle

- Le motif de moyenne géométrique est directement réutilisable pour tout score composite de service
  ou de produit dont on ne veut pas qu'une dimension forte masque une faiblesse critique — par
  exemple combiner les scores d'accessibilité, de performance et de fiabilité d'un service numérique
  public de manière multiplicative plutôt que par moyenne pondérée, afin qu'un service rapide mais
  inaccessible ne puisse pas obtenir un score « bon ».
- La transformation logarithmique du revenu dans l'IDH (valeur marginale décroissante d'une livre
  supplémentaire) suit la même logique que la [pondération distributionnelle](../distributional-weighting/)
  en évaluation : 1 000 $ supplémentaires comptent bien davantage pour un ménage pauvre que pour un
  ménage riche, et traiter les deux de manière linéaire fausse l'estimation de l'impact.
- Tout tableau de bord rapportant un score combiné unique d'« inclusion numérique » ou de
  « résultats citoyens » devrait documenter sa formule d'agrégation aussi explicitement que les notes
  techniques du PNUD — voir [public sector KPIs](../public-sector-kpis/) et
  [public value scorecard](../public-value-scorecard/).

## Pièges à éviter

- **Utiliser une moyenne arithmétique au lieu de la moyenne géométrique** — une moyenne arithmétique
  permet à un revenu élevé de masquer entièrement une mauvaise santé ou éducation ; tout l'intérêt du
  changement méthodologique de 2010 était d'empêcher cette substitution.
- **Comparer l'IDH d'une année sur l'autre comme s'il s'agissait d'un PIB corrigé de l'inflation** —
  le PNUD rebase périodiquement l'indice (nouvelles bornes minimales/maximales, plafonds de
  scolarisation révisés), de sorte qu'un changement de rang peut refléter une mise à jour
  méthodologique et non un changement réel ; toujours vérifier de quelle édition du RDH un chiffre
  provient.
- **Traiter l'IDH comme une mesure de pauvreté** — c'est une moyenne nationale qui ne dit rien de la
  distribution au sein d'un pays ; pour cela, utiliser l'[indice de pauvreté multidimensionnelle](../multidimensional-poverty-index/)
  ou l'IDH ajusté aux inégalités, publié séparément par le PNUD.

## Sources

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
