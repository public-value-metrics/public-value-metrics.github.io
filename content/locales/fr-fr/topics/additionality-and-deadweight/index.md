# Additionnalité et effet d'aubaine

L'additionnalité pose la question de savoir si une intervention a causé un résultat qui ne se serait
pas produit autrement. L'effet d'aubaine (deadweight) en est le miroir : la part d'un résultat qui
se serait produite de toute façon, même sans le programme, la subvention ou l'aide. Presque toute
allégation d'impact émanant d'un programme public ou d'une œuvre caritative surestime son effet tant
que l'effet d'aubaine n'en a pas été soustrait, ce qui explique pourquoi les lignes directrices
britanniques en matière d'évaluation en font le premier et le plus important des ajustements à
apporter à tout chiffre phare.

## Pourquoi c'est important

« Nous avons aidé 500 entreprises à se développer » ressemble à une réussite, mais si 300 de ces
entreprises se seraient développées de toute façon — parce que l'économie locale se redressait,
parce qu'elles disposaient d'autres sources de financement, parce qu'elles étaient déjà sur une
trajectoire de croissance avant le début du programme — la contribution additionnelle réelle du
programme est de 200, et non de 500. Le Magenta Book de HM Treasury et le très ancien « Additionality
Guide » de HM Treasury/BIS (développé à l'origine pour les programmes de développement régional et de
régénération, et depuis largement utilisé dans l'ensemble de l'évaluation gouvernementale
britannique) formalisent l'effet d'aubaine comme l'ajustement de départ dans la séquence standard de
calcul de l'impact net : effet brut moins effet d'aubaine, moins déplacement, moins fuite, ajusté des
effets multiplicateurs, égale impact net additionnel. Sauter cette étape est de loin la façon la plus
courante de gonfler les allégations d'impact dans le secteur public et social, délibérément ou non —
un programme de subventions qui ne mesure que les résultats bruts des participants, sans groupe de
comparaison, ne peut pas distinguer son propre effet de ce qui se serait produit de toute façon.

L'effet d'aubaine n'est pas un pourcentage fixe ; il dépend entièrement du scénario contrefactuel
propre à la population et à l'intervention considérées (voir
[analyse contrefactuelle](../counterfactual-analysis/)). Les évaluations de développement régional
en Angleterre menées sous les anciennes Regional Development Agencies ont couramment constaté des
taux d'effet d'aubaine compris entre 20 et 60 %, selon le type de soutien apporté aux entreprises,
ce qui explique pourquoi les évaluations de programmes crédibles rapportent une fourchette ajustée
de l'effet d'aubaine plutôt qu'un chiffre unique présumé, et pourquoi des bailleurs de fonds tels que
le National Lottery Community Fund et Big Society Capital exigent des bénéficiaires qu'ils traitent
explicitement l'effet d'aubaine dans leurs rapports de résultats plutôt que de se contenter de
déclarer le nombre brut de participants.

## Le calcul

La séquence standard d'ajustement de l'impact net, telle qu'énoncée dans les lignes directrices
britanniques en matière d'évaluation (Magenta Book ; Additionality Guide de HM Treasury/BIS ;
lignes directrices d'évaluation ESIF et fonds structurels) :

```
Résultat brut
  − Effet d'aubaine   (ce qui se serait produit de toute façon)
  − Déplacement       (activité/bénéfice déplacé d'ailleurs, non créé — voir
                       displacement-and-attribution)
  − Fuite             (bénéfice profitant en dehors du groupe/de la zone cible)
  × Multiplicateur     (activité économique indirecte/induite additionnelle, si positive)
  = Impact net additionnel
```

Taux d'effet d'aubaine, exprimé en proportion :

```
Taux d'effet d'aubaine = résultats qui se seraient produits sans l'intervention
                          / total des résultats bruts observés

Résultats nets additionnels = Résultats bruts × (1 − Taux d'effet d'aubaine)
```

## Exemple chiffré

**Programme de subventions aux entreprises** : un dispositif régional de subventions rapporte que
500 entreprises soutenues ont augmenté leurs effectifs l'année suivante, à raison de 3 emplois en
moyenne chacune — soit une allégation brute de 1 500 emplois.

Un groupe de comparaison apparié d'entreprises similaires non soutenues (voir
[analyse contrefactuelle](../counterfactual-analysis/)) montre que 40 % de la croissance de l'emploi
des entreprises soutenues se serait produite de toute façon, d'après les performances du groupe
apparié sur la même période.

```
Taux d'effet d'aubaine = 40 %
Emplois nets additionnels = 1 500 × (1 − 0,40) = 900 emplois
```

Le résultat que le programme peut honnêtement revendiquer est de 900 emplois, et non 1 500 — une
réduction de 40 % due au seul ajustement de l'effet d'aubaine, avant même de considérer le
déplacement ou la fuite.

**Programme d'insertion professionnelle d'une œuvre caritative** : une œuvre caritative place 200
chômeurs de longue durée dans l'emploi pour un coût de 600 000 £ (3 000 £ par placement, en brut).
Les données nationales du marché du travail montrent qu'en l'absence de toute intervention, environ
15 % d'une cohorte comparable de chômeurs de longue durée retrouve un emploi sur la même période, par
le simple jeu naturel du marché de l'emploi.

```
Taux d'effet d'aubaine = 15 %
Placements nets additionnels = 200 × (1 − 0,15) = 170
Coût réel par placement additionnel = 600 000 £ / 170 ≈ 3 529 £
```

Le coût brut par placement (3 000 £) sous-estime d'environ 15 % le coût réel de la contribution
additionnelle de l'œuvre caritative.

## Lien avec l'ingénierie logicielle

L'additionnalité et l'effet d'aubaine concernent directement quiconque conçoit des logiciels de
mesure d'impact ou de gestion de subventions pour le secteur public ou social :

- Les systèmes de reporting des résultats devraient intégrer, dès leur conception, un groupe de
  comparaison ou de référence, et pas seulement les résultats des participants — ajouter après coup
  un contrefactuel à un système déjà lancé sans en avoir prévu est bien plus difficile que de
  construire cette capture dès le départ (voir
  [analyse contrefactuelle](../counterfactual-analysis/)).
- Les tableaux de bord qui ne rapportent que les effectifs bruts de participants surestiment
  systématiquement l'impact auprès des bailleurs de fonds et des organes de contrôle ; lorsque des
  estimations d'effet d'aubaine existent (issues de la littérature d'évaluation ou d'un groupe de
  comparaison), le logiciel devrait faire apparaître le chiffre net d'effet d'aubaine à côté du
  chiffre brut, et non à sa place.
- Ce point rejoint directement le
  [retour social sur investissement](../social-return-on-investment/), dont le ratio SROI n'est
  crédible qu'une fois l'effet d'aubaine (et le déplacement) soustraits des résultats bruts
  revendiqués — un calculateur de SROI qui omet cette étape produira des ratios gonflés qui ne
  résistent pas à l'examen.

## Pièges à éviter

- **Déclarer les résultats bruts comme s'ils étaient tous additionnels.** C'est l'erreur de mesure
  d'impact la plus courante dans les rapports de subventions et de programmes ; demandez toujours
  « cela se serait-il produit de toute façon ? » avant de publier un chiffre phare.
- **Supposer qu'un pourcentage unique d'effet d'aubaine s'applique partout.** L'effet d'aubaine
  varie considérablement selon le secteur, la population et la conjoncture économique locale ;
  utilisez un groupe de comparaison ou des données propres au secteur plutôt que de réutiliser un
  chiffre issu d'une évaluation sans rapport.
- **Confondre effet d'aubaine et déplacement.** L'effet d'aubaine porte sur les résultats
  contrefactuels pour les mêmes participants ; le déplacement porte sur les effets sur d'autres
  personnes ou d'autres lieux — voir
  [déplacement et attribution](../displacement-and-attribution/). Confondre les deux conduit à
  compter l'ajustement deux fois ou à le sous-compter.
- **L'effet d'aubaine autodéclaré par les participants.** Demander aux bénéficiaires « cela se
  serait-il produit sans notre aide ? » produit systématiquement des estimations d'effet d'aubaine
  trop basses (les participants ont tendance à créditer le programme) ; un groupe de comparaison
  indépendant est bien plus fiable.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
