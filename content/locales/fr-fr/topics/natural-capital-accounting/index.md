# Comptabilité du capital naturel

La comptabilité du capital naturel place l'environnement sur le même plan que tout autre actif
national ou organisationnel : elle mesure le stock de ressources naturelles (forêts, sols,
rivières, zones humides, atmosphère) et le flux de services qu'elles produisent (séquestration du
carbone, protection contre les inondations, loisirs, alimentation), en termes à la fois physiques
et monétaires, afin que l'épuisement environnemental apparaisse dans la prise de décision comme le
ferait l'épuisement du capital financier. Le Royaume-Uni est l'un des gouvernements les plus
avancés dans cette démarche systématique, portée par le 25 Year Environment Plan (2018) et mise en
œuvre par les comptes du capital naturel du Royaume-Uni de l'ONS et par les orientations
complémentaires du Green Book de HM Treasury.

## Pourquoi c'est important

La comptabilité conventionnelle — aussi bien dans les entreprises que dans les administrations —
traite une forêt comme dépourvue de valeur jusqu'à ce qu'elle soit abattue et vendue comme bois,
moment où elle devient du PIB. La comptabilité du capital naturel existe pour combler cet écart :
le 25 Year Environment Plan du Royaume-Uni a engagé le gouvernement à intégrer la pensée du capital
naturel dans l'ensemble des politiques publiques, énonçant explicitement l'ambition d'être « la
première génération à laisser l'environnement dans un meilleur état que celui dans lequel elle l'a
trouvé ». L'ONS publie depuis lors des comptes annuels du capital naturel du Royaume-Uni
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
qui estiment la valeur monétaire des services écosystémiques — des loisirs en forêt aux bienfaits
des espaces verts urbains pour la santé, en passant par le stockage du carbone des tourbières — en
utilisant le même cadre de comptabilité nationale que celui employé pour le capital produit, de
sorte que le capital naturel puisse à terme figurer sur le même bilan que les routes, les bâtiments
et les équipements. Les orientations Enabling a Natural Capital Approach (ENCA) de HM Treasury,
complémentaires au Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
précisent comment les évaluateurs doivent chiffrer les coûts et bénéfices environnementaux dans les
dossiers d'analyse de rentabilité, de sorte qu'un projet routier qui détruit une forêt ancienne ou
un projet de gestion des inondations qui restaure une zone humide puissent être comparés sur des
bases monétaires cohérentes plutôt que l'un ayant un chiffre et l'autre un paragraphe de réserves.

## Le calcul

```
Valeur d'actif du service écosystémique = VAN du flux de services que
                                            fournit l'actif

Valeur de l'actif = Σ (t = 1 à T) [valeur du flux de service annuel_t / (1 + r)^t]

où :
  valeur du flux de service_t = quantité de service en année t × valeur
                                 unitaire (ex. visites récréatives × valeur
                                 par visite ; tonnes de carbone séquestré ×
                                 prix du carbone)
  r = taux d'actualisation (taux d'actualisation social du Green Book —
      voir [taux d'actualisation social](../social-discount-rate/))
  T = horizon temporel sur lequel l'actif devrait fournir le service
```

Il s'agit exactement de la même structure de valeur actuelle nette que celle utilisée pour évaluer
le capital produit ou pour évaluer tout investissement public dans le cadre de l'
[évaluation du Green Book](../green-book-appraisal/) — la contribution propre de la comptabilité du
capital naturel est de fournir des quantités physiques crédibles et des valeurs unitaires pour des
services auparavant valorisés à zéro.

## Exemple chiffré

**Forêt urbaine, valeur récréative** : une forêt de 50 hectares reçoit environ 80 000 visites
récréatives par an, chacune évaluée (par la méthode du coût de déplacement ou des préférences
déclarées — voir [évaluation par préférences révélées](../revealed-preference-valuation/) et
[évaluation par préférences déclarées](../stated-preference-valuation/)) à 3 £ par visite. La forêt
devrait continuer à fournir ce service pendant 50 ans, évaluée à un taux d'actualisation de 3,5 %.

```
Valeur récréative annuelle = 80 000 × 3 £ = 240 000 £/an

VAN sur 50 ans à 3,5 % ≈ 240 000 £ × facteur d'annuité(3,5 %, 50 ans)
facteur d'annuité(3,5 %, 50) ≈ 21,4

Valeur de l'actif ≈ 240 000 £ × 21,4 ≈ 5 136 000 £
```

**Ajout du stockage de carbone** : la même forêt séquestre environ 400 tonnes de CO2 par an,
valorisées au prix du carbone non échangé du gouvernement, d'environ 75 £/tonne (chiffre
illustratif — utiliser les valeurs de carbone actuellement publiées par le BEIS/DESNZ pour une
évaluation réelle).

```
Valeur carbone annuelle = 400 × 75 £ = 30 000 £/an
VAN sur 50 ans à 3,5 % ≈ 30 000 £ × 21,4 ≈ 642 000 £

Valeur totale de l'actif forestier (loisirs + carbone) ≈ 5 136 000 £ + 642 000 £
                                                        ≈ 5 778 000 £
```

Ceci avant même d'ajouter les services de régulation des inondations, de biodiversité ou de qualité
de l'air que les orientations ENCA demandent également aux évaluateurs de prendre en compte — le
total est délibérément un plancher, pas un plafond.

## Lien avec l'ingénierie logicielle

- Les systèmes de gestion environnementale et d'actifs des collectivités locales et des agences
  (parcs, voirie, plans d'eau) peuvent adjoindre un registre du capital naturel à leur registre
  d'actifs physiques, en utilisant le même motif « flux de service multiplié par valeur unitaire »
  que toute autre [base de données de coûts unitaires](../unit-cost-databases/) que l'organisation
  entretient.
- Parce que la VAN du capital naturel est sensible au taux d'actualisation (voir le facteur
  d'annuité de l'exemple chiffré), tout outil qui la calcule devrait exposer le taux et l'horizon
  comme des paramètres visibles, et non les dissimuler — le même principe de transparence que celui
  couvert dans [équité intergénérationnelle et actualisation de la durabilité](../intergenerational-equity-and-sustainability-discounting/).
- Les comptes de capital naturel deviennent de plus en plus une donnée d'entrée obligatoire des
  sections d'impact environnemental d'un dossier d'
  [évaluation du Green Book](../green-book-appraisal/) ; une équipe de livraison qui construit des
  outils de dossiers d'analyse de rentabilité devrait traiter les comptes de l'ONS et les valeurs
  unitaires de l'ENCA comme des données de référence à intégrer, et non comme quelque chose que les
  évaluateurs recalculent à chaque fois depuis zéro.

## Pièges à éviter

- **Double comptage de services écosystémiques qui se chevauchent** — la valeur récréative et la
  valeur de biodiversité d'un même site peuvent reposer sur les mêmes données sous-jacentes de
  consentement à payer ; les orientations ENCA mettent explicitement en garde contre l'addition de
  valorisations issues d'instruments d'enquête qui se recoupent.
- **Traiter la valeur d'un actif de capital naturel comme statique** — les flux de service changent
  avec le climat, la gestion et la pression de l'usage des sols ; la valeur carbone et de régulation
  des inondations d'une forêt cette décennie n'est pas une propriété permanente du site.
- **Utiliser des valeurs unitaires moyennes nationales pour une décision fortement locale** — un
  hectare de forêt urbaine accessible et un hectare de lande reculée ont une valeur récréative très
  différente ; les orientations ENCA recommandent des valeurs locales ou propres au site lorsqu'elles
  sont disponibles, plutôt que de se rabattre par défaut sur des moyennes nationales.

## Sources

- ONS. « UK natural capital accounts. »
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. « A Green Future: Our 25 Year Plan to Improve the Environment. » (2018)
- HM Treasury / Defra. « Enabling a Natural Capital Approach (ENCA): guidance. »
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
