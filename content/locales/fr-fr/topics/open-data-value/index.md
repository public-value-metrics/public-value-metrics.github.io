# Valeur des données ouvertes

La valeur des données ouvertes est le problème consistant à estimer ce que valent les données
publiques et gouvernementales lorsqu'elles n'ont pas de prix : elles ne sont pas vendues, il n'y a
donc pas de ligne de recette, et pourtant leur diffusion (relevés météorologiques, horaires de
transport, limites de codes postaux, registres d'entreprises) génère manifestement une activité
économique et sociale en aval. Bien la valoriser est important car « c'est gratuit à diffuser » et
« ça ne vaut rien » sont deux affirmations fausses, et un ingénieur logiciel qui décide d'ouvrir ou
non une API ou un jeu de données a besoin d'un meilleur argument que l'un ou l'autre.

## Pourquoi c'est important

L'estimation descendante la plus citée provient du rapport de 2013 du McKinsey Global Institute,
« Open data: Unlocking innovation and performance with liquid information », qui chiffrait la
valeur annuelle potentielle des données ouvertes dans sept domaines — éducation, transport, biens
de consommation, électricité, pétrole et gaz, santé et finance des particuliers — entre 3 000 et
5 000 milliards de dollars par an à l'échelle mondiale, via des mécanismes incluant une
transparence accrue, une mise en adéquation plus efficace de l'offre et de la demande, et
l'activation de nouveaux produits et services construits sur ces données. Ce chiffre est une
estimation de scénario, pas un résultat mesuré, et il est régulièrement mal cité comme s'il
s'agissait d'une recette que le gouvernement pourrait capter directement, alors que la valeur
revient pour l'essentiel à des tiers — entreprises, chercheurs, citoyens — qui utilisent les
données, ce qui est précisément l'intérêt de les ouvrir plutôt que de les vendre. L'Open Data
Institute du Royaume-Uni, cofondé par Sir Tim Berners-Lee et Sir Nigel Shadbolt en 2012, a depuis
constitué un corpus d'études de cas plus fines et ascendantes — secteur par secteur, jeu de données
par jeu de données — bien plus utiles pour un véritable dossier d'analyse de rentabilité que le
chiffre phare de McKinsey, car elles montrent le mécanisme de création de valeur, pas seulement son
ampleur agrégée.

## Le calcul

Les données ouvertes n'ont pas de prix de marché, donc des méthodes de valorisation s'y substituent ;
trois approches reviennent, et aucune n'est suffisante à elle seule :

```
1. Méthode du coût évité / coût de remplacement :
   valeur ≈ ce que les utilisateurs auraient payé pour produire ou
   acquérir sous licence des données équivalentes eux-mêmes — une
   borne inférieure, qui ignore la valeur créée par des usages que le
   producteur d'origine n'avait jamais anticipés

2. Méthode de l'analogue de marché / de l'activité en aval :
   valeur ≈ recettes ou économies générées par les entreprises/services
   construits sur les données (ex. applications de navigation GPS
   construites sur des données cartographiques et de trafic ouvertes)
   — saisit une activité économique réelle mais difficile à attribuer
   proprement à la seule diffusion des données (voir
   additionality-and-deadweight)

3. Méthode des préférences déclarées / contingentes :
   valeur ≈ ce que les utilisateurs déclarent être prêts à payer, ou
   le temps qu'ils déclarent gagner grâce aux données — voir
   stated-preference-valuation pour la méthode générale et ses biais

Aucune de ces méthodes ne produit un chiffre aussi net qu'un prix de
marché ; les dossiers d'analyse de rentabilité crédibles pour les
données ouvertes triangulent entre deux méthodes ou plus, et sont
explicites sur le mécanisme qui fait le travail.
```

## Exemple chiffré

**Diffusion illustrative de données cartographiques/d'adressage nationales** (méthodologie
inspirée d'études de cas de type ODI, chiffres illustratifs de l'ordre de grandeur que ces études
trouvent habituellement) :

```
Estimation du coût évité :
  Entreprises qui, sinon, acquerraient sous licence commerciale des
  données équivalentes d'appariement d'adresses, à un coût de licence
  moyen estimé à 4 000 £/an, pour environ 15 000 PME utilisant
  désormais le jeu de données ouvert gratuit
  = 15 000 × 4 000 £ = 60 000 000 £/an de coût de licence évité, à lui
  seul

Estimation de l'activité en aval (plus spéculative, nécessite un
contrefactuel) :
  Nouveaux produits de livraison et de logistique construits sur les
  données ouvertes, qui n'existeraient pas, ou seraient nettement moins
  bons, sans elles — nécessite une comparaison au scénario contrefactuel
  où les données restent fermées ou sous licence commerciale
  (counterfactual-analysis), car une partie de cette activité se
  produirait de toute façon sur des données payantes à un prix plus
  élevé, ce qui constitue un poids mort au sens de « la valeur créée
  par l'ouverture »

Un dossier d'analyse de rentabilité défendable rapporte le chiffre du
coût évité comme une borne inférieure solide, et traite le chiffre de
l'activité en aval comme un scénario haut, pas comme un fait.
```

## Lien avec l'ingénierie logicielle

Pour les ingénieurs, la question de la valeur des données ouvertes qui se pose en pratique est
généralement plus étroite que les chiffres phares nationaux : ouvrir cette API ou ce jeu de données
spécifique (plutôt que de le garder derrière un accord partenaire) augmente-t-il la réutilisation
suffisamment pour justifier le coût continu de sa documentation, de son versionnage et de son
support en tant qu'interface publique ? Ce coût de maintenance est réel, et il est le pendant de
l'économie « construire une fois, réutiliser souvent » du
[gouvernement en tant que plateforme](../government-as-a-platform/) — les deux sujets sont des
cousins proches, l'un portant sur le code et l'infrastructure partagés, l'autre sur les données
partagées. Toute affirmation de valeur des données ouvertes devrait être confrontée à l'
[additionnalité et au poids mort](../additionality-and-deadweight/) avant de figurer dans un
dossier d'analyse de rentabilité : une activité qui se serait produite de toute façon, sur des
données sous licence commerciale, n'est pas une valeur créée par *l'ouverture*.

## Pièges à éviter

- **Citer le chiffre de 3 000 à 5 000 milliards de dollars de McKinsey comme spécifique au
  Royaume-Uni ou comme la part de ce jeu de données précis** : il s'agit d'une estimation de
  scénario mondiale, portant sur sept secteurs, datant de 2013 — l'utiliser comme un multiplicateur
  précis pour un seul jeu de données national dénature ce que représente ce chiffre.
- **Absence de contrefactuel** : s'attribuer le mérite de toute l'activité économique en aval
  construite sur des données ouvertes, sans se demander quelle part se serait produite de toute
  façon sur des données payantes ou sous licence à un prix plus élevé (voir
  [additionnalité et poids mort](../additionality-and-deadweight/) et
  [analyse contrefactuelle](../counterfactual-analysis/)).
- **Confondre coût de production et valeur créée** : un jeu de données coûteux à constituer n'est
  pas automatiquement précieux à diffuser, et un jeu de données bon marché n'est pas automatiquement
  de faible valeur — la valeur suit l'usage en aval, pas le coût en amont.
- **Ignorer le coût de maintenance continu de « l'ouverture »** : publier un extrait CSV ponctuel
  n'est pas le même engagement que faire fonctionner une API ouverte documentée, versionnée et
  soutenue — sous-financer cette dernière après l'annonce de lancement est un mode d'échec courant.

## Sources

- McKinsey Global Institute, « Open data: Unlocking innovation and performance with liquid
  information » (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
