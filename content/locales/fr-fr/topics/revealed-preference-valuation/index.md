# Valorisation par préférences révélées

Les méthodes de préférences révélées déduisent la valeur d'un bien non marchand à partir d'un
comportement observable sur un marché lié, plutôt qu'en interrogeant directement les personnes. Le prix
hédonique et la méthode du coût de déplacement sont les deux techniques de référence : toutes deux
partent d'une transaction réelle et en extraient un prix implicite pour la chose qui n'a jamais été
directement vendue.

## Pourquoi c'est important

Là où les méthodes de [préférences déclarées](../stated-preference-valuation/) posent une question
hypothétique, les méthodes de préférences révélées observent ce pour quoi les gens ont réellement payé,
ce que le Green Book traite généralement comme une preuve plus crédible, toutes choses égales par
ailleurs, car non sujette au biais hypothétique — les répondants d'une étude hédonique de prix
immobiliers ont réellement payé la prime ou la décote mesurée
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
annexe 2). Le prix hédonique décompose un prix de marché — typiquement les prix immobiliers — en prix
implicites pour chaque attribut du bien, permettant aux analystes d'isoler, par exemple, la prime de
prix que les ménages paient réellement pour vivre dans un endroit plus calme ou avec un air de
meilleure qualité, en contrôlant statistiquement chaque autre attribut affectant aussi le prix
immobilier (taille, emplacement, secteur scolaire). La méthode du coût de déplacement fait l'équivalent
pour les sites récréatifs sans droit d'entrée : le temps et l'argent que les gens dépensent pour se
rendre sur un site révèlent une borne inférieure de ce que le site vaut pour eux, car personne n'engage
un coût supérieur à ce que la visite vaut pour lui.

Les deux méthodes partagent une limite structurelle : elles ne peuvent valoriser que ce qui est intégré
dans une transaction de marché existante. Le bruit près d'une piste d'atterrissage apparaît dans les
prix immobiliers parce que les personnes qui se soucient du bruit se répartissent vers des logements
plus calmes ; la valeur d'existence d'une espèce que personne ne visite ni près de laquelle personne ne
vit n'apparaît dans aucune transaction du tout, ce qui est précisément l'écart que les méthodes de
[préférences déclarées](../stated-preference-valuation/) existent pour combler.

## Le calcul

```
Hedonic pricing:
  House price = f(structural attributes, location attributes,
                   environmental attribute of interest, ...)
  Estimate via regression; the coefficient on the environmental
  attribute (holding all else constant) is its implicit price.

  Implicit price of attribute X = ∂(House price) / ∂X

Travel-cost method:
  Visit rate (visits per capita from zone i) = f(travel cost from zone i,
                   substitute sites, socioeconomic controls)
  Estimate a demand curve for visits as a function of travel cost.
  Consumer surplus = area under the estimated demand curve
                    = value of the site to visitors
```

Les deux méthodes exigent un ensemble de contrôles statistiquement solide — omettre un attribut
confondant (hédonique) ou un site substitut proche (coût de déplacement) biaise le prix implicite dans
une direction qui n'est pas toujours évidente à l'avance, raison pour laquelle l'annexe 2 du Green Book
exige que la spécification de régression et les contrôles soient rapportés, pas seulement le
coefficient phare.

## Exemple chiffré

**Gouvernement national** : la propre méthodologie de prix fictif du carbone du Green Book s'appuie en
partie sur des preuves hédoniques, mais un cas illustratif plus simple est le bruit aérien. Une étude
hédonique régressant les prix de vente immobiliers dans une zone de couloir aérien sur l'exposition au
bruit pondérée par la distance, en contrôlant la taille, l'âge et le secteur scolaire, trouve que chaque
augmentation de 1 décibel de l'exposition moyenne au bruit est associée à une réduction de 0,5 % du prix
immobilier. Pour une maison typique de 280 000 £ dans la zone affectée :

```
Implicit price per decibel = £280,000 × 0.5% = £1,400 per household
Households affected by a 3dB increase from a new runway = 18,000
Aggregate implied cost of the noise increase = £1,400 × 3 × 18,000 = £75.6m
```

C'est un coût capitalisé ponctuel (intégré dans le prix immobilier), que l'évaluation doit prendre soin
de ne pas compter deux fois par rapport à un flux de coût annuel de nuisance sonore estimé séparément.

**Association** : une association environnementale utilise la méthode du coût de déplacement pour
valoriser une réserve naturelle à entrée gratuite. Les données d'enquête sur les codes postaux des
visiteurs donnent un coût de déplacement aller-retour moyen (temps valorisé selon la valeur du temps
hors travail recommandée par le Green Book, plus carburant) de 14 £ par visite, avec 40 000 visites par
an. La courbe de demande estimée — les taux de visite diminuant à mesure que le coût de déplacement
depuis une zone augmente — implique un surplus du consommateur par visite, au-delà des 14 £ réellement
dépensés, d'environ 9 £.

```
Total annual value = 40,000 visits × (£14 spent + £9 consumer surplus)
                    = 40,000 × £23 ≈ £920,000/year
```

Cela éclipse la recette nulle de droit d'entrée de la réserve et donne aux administrateurs de
l'association un chiffre défendable pour la valeur récréative du site lorsqu'ils plaident leur cause
auprès des bailleurs.

## Lien avec l'ingénierie logicielle

La pensée par préférences révélées apparaît dans l'analytique produit du secteur public plus souvent
que les praticiens ne le réalisent : les données d'usage d'un service numérique gouvernemental gratuit
sont elles-mêmes une preuve de préférence révélée de valeur (fréquence, durée de session et — de façon
plus révélatrice — les schémas d'usage répété par rapport à ponctuel peuvent être analysés de la même
façon qu'un modèle de coût de déplacement traite la fréquence de visite par rapport à la distance). Là
où un service a de véritables substituts (un canal papier, une ligne téléphonique), le « coût » que les
citoyens engagent pour utiliser le canal numérique à la place (temps, données, un appareil) peut être
estimé et comparé à l'usage, faisant directement écho à la logique du coût de déplacement. Voir
[référentiel de service numérique](../digital-service-standard/) et
[valeur des données ouvertes](../open-data-value/), qui fait face exactement à ce problème de
valorisation pour un bien sans prix de marché direct.

## Pièges à éviter

- **Biais de variable omise dans les modèles hédoniques.** Omettre un attribut corrélé (la qualité
  scolaire corrélée à la fois au prix immobilier et à la variable environnementale d'intérêt) biaise
  l'estimation du prix implicite ; la spécification doit être rapportée et examinée, pas seulement le
  résultat.
- **Ignorer les sites substituts dans les études de coût de déplacement.** La valeur révélée d'un site
  pour un visiteur est sous-estimée si un substitut plus proche existe et n'est pas contrôlé — il se
  peut qu'il visite principalement parce que c'est gratuit, pas parce que c'est uniquement précieux.
- **Appliquer les préférences révélées à un bien sans aucun écho de marché.** La valeur d'existence, la
  valeur d'option et la valeur de legs n'apparaissent dans aucune transaction et ne peuvent être
  récupérées par les méthodes hédoniques ou de coût de déplacement — cet écart relève de la
  [valorisation par préférences déclarées](../stated-preference-valuation/).
- **Confondre valeur capitalisée (ponctuelle) et flux annuel.** Les effets hédoniques sur le prix
  immobilier sont typiquement des valeurs capitalisées ponctuelles ; les traiter comme un flux de
  bénéfice annuel gonfle l'évaluation.

## Sources

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
