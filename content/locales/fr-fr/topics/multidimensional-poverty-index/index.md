# Indice de pauvreté multidimensionnelle (IPM / MPI)

L'IPM mesure la pauvreté comme des privations qui se superposent et qu'une personne subit
simultanément — en santé, en éducation et en niveau de vie — plutôt que comme un simple revenu
tombant sous un seuil. Il a été développé par l'Oxford Poverty and Human Development Initiative
(OPHI) avec Sabina Alkire et James Foster, et est publié conjointement avec le PNUD dans chaque
Rapport sur le développement humain depuis 2010, aux côtés de l'
[indice de développement humain](../human-development-index/).

## Pourquoi c'est important

Les seuils de pauvreté monétaire laissent de côté des personnes qui disposent de revenus en
espèces suffisants mais qui n'ont pas accès à l'eau potable, à la scolarisation, ou qui survivent
au décès d'un enfant — et ils passent à côté du fait que les privations se regroupent : un foyer
sans électricité a une probabilité disproportionnée de manquer aussi d'assainissement et de
compter un enfant souffrant de malnutrition. La méthode Alkire-Foster, sur laquelle repose l'IPM,
compte les privations de chaque personne à travers dix indicateurs regroupés en trois dimensions à
pondération égale — santé, éducation, niveau de vie — et ne classe une personne comme « pauvre au
sens de l'IPM » que si son score de privation pondéré franchit un seuil fixe, saisissant ainsi un
chevauchement qu'un ensemble de statistiques à indicateur unique séparées ne peut pas capter.
L'OPHI publie la méthodologie complète et les données par pays sur
<https://ophi.org.uk/multidimensional-poverty-index/> ; l'IPM mondial qu'elle maintient
conjointement avec le PNUD couvre désormais plus de 110 pays. Pour les logiciels conçus pour des
programmes de lutte contre la pauvreté — transferts monétaires, orientation de l'aide sociale,
ciblage de l'aide — l'ensemble d'indicateurs de l'IPM est souvent ce qui se rapproche le plus d'un
schéma de privation standardisé déjà validé par des dizaines d'offices statistiques nationaux.

## Le calcul

```
10 indicateurs, 3 dimensions, chacune pondérée à 1/3 :

Santé (1/3) :                nutrition (1/6), mortalité infantile (1/6)
Éducation (1/3) :             années de scolarisation (1/6), fréquentation
                               scolaire (1/6)
Niveau de vie (1/3) :         combustible de cuisson, assainissement, eau
                               potable, électricité, logement, actifs
                               (1/18 chacun)

score de privation (c) = somme des poids des indicateurs pour lesquels
                          une personne est en situation de privation

une personne est « pauvre au sens de l'IPM » si c ≥ 1/3 (le seuil de
pauvreté, k = 33 %)

H (taux d'incidence)   = nombre de personnes pauvres au sens de l'IPM /
                          population totale
A (intensité)          = score de privation moyen parmi les seules
                          personnes pauvres au sens de l'IPM

IPM = H × A
```

Parce que l'IPM multiplie la *part* de la population pauvre par le degré de pauvreté (*combien*),
deux régions ayant le même taux d'incidence peuvent avoir des scores IPM très différents si les
privations sont plus sévères dans l'une d'elles — la même logique de « non-substitution entre
dimensions » que celle qui sous-tend la moyenne géométrique de l'IDH.

## Exemple chiffré

**Enquête nationale auprès de 1 000 personnes** : 350 sont identifiées comme pauvres au sens
multidimensionnel (score de privation ≥ 33 %). Parmi ces 350 seules personnes pauvres, le score de
privation moyen est de 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
IPM = H × A = 0,350 × 0,45    = 0,1575
```

**Comparaison de deux districts à incidence égale** : le district A a H = 0,30 et A = 0,40 (beaucoup
de personnes pauvres, modérément privées) ; le district B a H = 0,30 et A = 0,60 (même nombre de
personnes pauvres, mais privations plus sévères — sans électricité *et* sans assainissement *et*
sans fréquentation scolaire simultanément).

```
IPM_A = 0,30 × 0,40 = 0,120
IPM_B = 0,30 × 0,60 = 0,180
```

Même taux d'incidence, IPM supérieur de 50 % dans le district B — un système de ciblage fondé sur
la seule incidence de pauvreté classerait les deux districts de façon identique et manquerait le
fait que le district B a besoin d'une intervention plus profonde.

## Lien avec l'ingénierie logicielle

- Les systèmes de gestion des dossiers et d'éligibilité pour les programmes sociaux stockent
  souvent déjà plusieurs des dix indicateurs (logement, fréquentation scolaire, marqueurs de
  santé) dans des silos séparés ; la méthode de comptage Alkire-Foster offre un schéma tout prêt
  pour les combiner en un seul score de privation plutôt que de construire un modèle de notation
  sur mesure à partir de zéro.
- La décomposition incidence/intensité (H × A) est un motif généralement utile pour tout tableau
  de bord qui rapporte « combien de personnes sont touchées » aux côtés de « à quel point » —
  fusionner les deux en un seul chiffre, comme le font les statistiques brutes de prévalence,
  masque exactement le cas qui a le plus besoin de ressources.
- Les tableaux de bord d'indicateurs de type IPM s'associent naturellement au reporting de
  [coût par bénéficiaire](../cost-per-beneficiary/) pour les programmes de lutte contre la
  pauvreté : le coût par point de réduction de l'IPM est une unité défendable pour comparer des
  interventions très différentes (transfert monétaire contre infrastructure d'assainissement).

## Pièges à éviter

- **Traiter les dix indicateurs comme universels** — les indicateurs de l'IPM mondial de l'OPHI
  sont calibrés pour la comparabilité entre pays ; les IPM nationaux (de nombreux pays, dont
  plusieurs en Asie du Sud et en Afrique, publient les leurs) adaptent indicateurs et pondérations
  au contexte local, et les deux ne sont pas directement comparables.
- **Rapporter H seul** — le taux d'incidence ignore entièrement l'intensité ; toujours rapporter ou
  calculer A en complément, ou l'IPM lui-même.
- **Supposer que les populations pauvres au sens de l'IPM et pauvres en revenu sont identiques** —
  les notes de pays de l'OPHI montrent généralement un chevauchement seulement partiel entre les
  deux ; un programme ciblant uniquement les personnes pauvres en revenu manquera
  systématiquement une part significative des personnes pauvres au sens multidimensionnel.

## Sources

- Oxford Poverty and Human Development Initiative. « Multidimensional Poverty Index. »
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. « Counting and Multidimensional Poverty Measurement. » Journal of Public
  Economics, 2011.
- UNDP & OPHI. « Global Multidimensional Poverty Index » (rapport annuel).
