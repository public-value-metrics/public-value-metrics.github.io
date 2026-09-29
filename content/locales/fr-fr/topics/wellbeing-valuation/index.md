# Valorisation du bien-être (WELLBY)

La valorisation du bien-être chiffre l'effet d'une politique directement en termes de satisfaction de
vie, en utilisant le WELLBY (wellbeing-adjusted life year) comme unité — un WELLBY équivaut à un
changement d'un point sur une échelle de satisfaction de vie de 0 à 10, soutenu pendant un an. C'est
l'alternative officiellement sanctionnée par le HM Treasury à la monétisation de chaque bénéfice par la
volonté de payer.

## Pourquoi c'est important

Le « Wellbeing guidance for appraisal: supplementary Green Book guidance » du HM Treasury (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) a
formellement introduit les données de bien-être subjectif dans l'évaluation du gouvernement central,
donnant aux analystes une voie pour valoriser des résultats — lien social, santé mentale, sécurité,
participation civique — que les méthodes de [préférences déclarées](../stated-preference-valuation/) et
de [préférences révélées](../revealed-preference-valuation/) peinent à chiffrer de façon convaincante,
car les gens sont souvent de mauvais prévisionnistes de l'ampleur avec laquelle un bien affectera
réellement leur satisfaction de vie. Les orientations, développées conjointement avec le What Works
Centre for Wellbeing, fixent une valeur monétaire recommandée par WELLBY — 13 000 £ (prix 2021, révisés
périodiquement) — dérivée de la relation observée dans de grandes enquêtes de bien-être (principalement
l'Annual Population Survey de l'ONS, qui pose les quatre questions de bien-être ONS4 depuis 2011) entre
le revenu et la satisfaction de vie, donnant aux analystes un taux de conversion vers les livres lorsque
une comparaison monétisée avec d'autres évaluations Green Book est nécessaire.

La méthode compte parce qu'elle inverse la logique de valorisation habituelle : plutôt que de demander
ce que les gens paieraient pour un résultat (préférences déclarées) ou de déduire la valeur d'une
transaction de marché liée (préférences révélées), elle mesure directement l'effet du résultat sur la
satisfaction de vie déclarée, contournant l'écart entre ce que les gens disent vouloir et ce qui les rend
réellement mieux lotis. C'est aussi sa limite centrale — la satisfaction de vie autodéclarée est affectée
par des effets d'adaptation et de cadrage qu'un praticien attentif doit contrôler.

## Le calcul

```
WELLBY = 1 life-satisfaction point (0-10 scale) sustained for 1 person for 1 year

Total WELLBYs from a policy =
  Σ (change in life satisfaction score) × (number of people affected)
    × (duration in years, discounted at the social discount rate)

Monetized value = Total WELLBYs × value per WELLBY
  (HM Treasury recommended value: £13,000 per WELLBY, 2021 prices,
   subject to periodic revision — check current guidance before use)
```

Cela diffère de l'[année de vie ajustée sur le bien-être](../wellbeing-adjusted-life-years/) de
l'économie de la santé, qui est typiquement ancrée à des échelles de qualité de vie liée à la santé
(EQ-5D et similaires) plutôt qu'à la satisfaction de vie générale ; les deux sont liées mais non
interchangeables, et les évaluations Green Book devraient être explicites sur l'échelle et la méthode
d'élicitation sous-jacentes à un chiffre de WELLBY rapporté.

## Exemple chiffré

**Collectivité locale** : un conseil gère un dispositif communautaire d'accompagnement amical pour des
résidents âgés isolés, servant 400 personnes. Une enquête de bien-être avant/après utilisant la
question de satisfaction de vie ONS4 montre le score moyen des participants passer de 5,8 à 6,5 — un
gain de 0,7 point — soutenu pendant la durée de financement de 2 ans du programme.

```
WELLBYs generated = 400 people × 0.7 points × 2 years = 560 WELLBYs
Monetized value = 560 × £13,000 = £7.28m
Programme cost = £450,000 over 2 years

Benefit-cost ratio ≈ £7.28m / £0.45m ≈ 16:1
```

Un ratio aussi élevé devrait susciter l'examen plutôt que la célébration — les orientations sur le
bien-être du Green Book mettent explicitement en garde contre le fait de prendre pour argent comptant
des gains autodéclarés à petit échantillon sans vérifier les effets de sélection (seuls les résidents
les plus sociables, les plus susceptibles de s'améliorer, ont-ils rejoint le dispositif ?) et sans
groupe de comparaison ; une évaluation bien conçue retrancherait un changement contrefactuel observé chez
les non-participants, voir [analyse contrefactuelle](../counterfactual-analysis/).

**Gouvernement national** : comparer deux programmes d'emploi en utilisant les WELLBY plutôt que les
seuls revenus capture le fait que le chômage porte un coût de bien-être au-delà de la perte de revenu —
la recherche britannique sur le bien-être constate systématiquement que le chômage réduit la
satisfaction de vie plus que ne le prédirait la seule perte de revenu, en raison des effets non
pécuniaires de la perte de structure, de but et de contact social. Un programme évalué sur le seul gain
de revenu sous-estimerait sa valeur par rapport à un programme évalué aussi sur les WELLBY.

## Lien avec l'ingénierie logicielle

La valorisation du bien-être atteint rarement directement les équipes d'ingénierie, mais elle façonne ce
qui est défini comme un « succès » pour les produits du secteur social et des services publics — une
plateforme numérique d'accompagnement amical, un outil de tri en santé mentale, ou une plateforme
communautaire pour résidents isolés devrait s'attendre à ce que son impact soit finalement mesuré de
cette façon, ce qui signifie que l'analytique produit doit capturer *qui* est atteint et *pendant
combien de temps*, pas seulement des décomptes d'usage. Intégrez l'instrumentation d'enquête de
bien-être (ONS4 ou équivalents validés) dans l'évaluation de service dès le départ plutôt que de
l'ajouter rétrospectivement ; ajouter après coup une référence de bien-être une fois le service lancé
fait perdre entièrement la comparaison avant/après. Voir
[résultats et réalisations](../outcomes-vs-outputs/) et
[méthodes d'évaluation d'impact](../impact-evaluation-methods/).

## Pièges à éviter

- **Aucun contrefactuel ou groupe de comparaison.** Un gain de bien-être avant/après sans contrôle de
  ce qui se serait passé de toute façon surestime l'effet du programme ; voir
  [analyse contrefactuelle](../counterfactual-analysis/) et
  [additionnalité et poids mort](../additionality-and-deadweight/).
- **Échantillons petits et auto-sélectionnés.** Les enquêtes de bien-être auprès de participants au
  programme ayant choisi d'y adhérer sont sujettes à un biais de sélection — les personnes ayant
  rejoint et étant restées étaient plausiblement déjà sur une tendance ascendante.
- **Traiter la conversion £-par-WELLBY comme précise.** La valeur monétisée est une convention
  politique dérivée de régressions revenu-bien-être, pas un prix de marché ; utilisez-la pour la
  comparabilité entre évaluations Green Book, pas comme une affirmation sur ce que le bien-être
  « vaut ».
- **Confondre les WELLBY avec les QALY liés à la santé.** Les deux mesurent des construits différents
  sur des échelles différentes ; voir
  [années de vie ajustées sur le bien-être](../wellbeing-adjusted-life-years/) pour la variante
  d'économie de la santé, et ne les moyennez pas ensemble.

## Sources

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
