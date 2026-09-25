# Valorisation par préférences déclarées

Les méthodes de préférences déclarées estiment la valeur d'un bien non marchand en demandant
directement aux personnes ce qu'elles seraient prêtes à payer pour l'obtenir, ou prêtes à accepter en
compensation pour y renoncer, typiquement à travers une enquête structurée décrivant un scénario
hypothétique. L'évaluation contingente est la technique la plus connue de cette famille.

## Pourquoi c'est important

L'annexe 2 du Green Book (orientations complémentaires sur la valorisation des impacts non marchands)
approuve les méthodes de préférences déclarées pour les biens qui n'ont absolument aucune transaction de
marché observable à partir de laquelle en déduire une valeur — qualité de l'air, biodiversité,
protection contre les inondations, valeur d'existence d'un paysage que quelqu'un ne visitera peut-être
jamais
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Le Defra a publié ses propres orientations de préférences déclarées pour l'évaluation environnementale
précisément parce qu'une grande partie de la valeur environnementale (préservation des habitats,
qualité de l'eau) n'a aucun marché de substitution du tout, contrairement, disons, au bruit, qui du
moins corrèle avec des prix immobiliers observables (voir
[valorisation par préférences révélées](../revealed-preference-valuation/)).

L'attrait central des préférences déclarées — elles peuvent valoriser littéralement n'importe quoi, y
compris des biens sur lesquels personne n'a jamais transigé — est aussi la source de leur problème de
crédibilité. Parce que les répondants ne dépensent pas réellement d'argent, les enquêtes d'évaluation
contingente sont vulnérables au biais hypothétique (les gens surestiment leur volonté de payer lorsqu'il
n'y a pas de véritable contrainte budgétaire), aux effets d'inclusion (le même bien est valorisé
différemment selon ce qui figure par ailleurs dans l'enquête), et au biais de point de départ dans les
conceptions de jeu d'enchères. Le panel de la NOAA de 1993 sur l'évaluation contingente, convoqué après
le litige de la marée noire de l'Exxon Valdez, a établi des normes de conception — un format de
référendum binaire « paieriez-vous X £, oui/non » plutôt qu'une enchère ouverte, et des rappels
obligatoires de la contrainte budgétaire réelle du répondant — qui demeurent la norme de référence pour
des enquêtes défendables.

## Le calcul

```
Contingent valuation (referendum format):
  Present a binary choice: "would you pay £X per year for outcome Y? yes/no"
  Vary X randomly across respondents.
  Fit willingness-to-pay as a function of the yes/no response rate at each X.

Mean WTP = area under the estimated demand curve
Aggregate value = Mean WTP × affected population

Choice experiment (discrete choice modelling) variant:
  Present respondents with repeated choices between bundles of attributes
  (including a cost attribute), estimate implicit prices for each
  non-cost attribute from the trade-offs respondents reveal.
```

La variante par expérience de choix est généralement préférée dans la pratique britannique actuelle à
l'évaluation contingente à question unique, car forcer les répondants à arbitrer répétitivement entre
plusieurs attributs et le coût produit des estimations plus cohérentes en interne et plus difficiles à
manipuler qu'une simple question oui/non.

## Exemple chiffré

**Gouvernement national** : le Defra commande une enquête d'évaluation contingente pour valoriser un
programme d'amélioration de la qualité de l'eau d'une rivière. Une enquête en format référendum auprès
de 2 000 foyers trouve que 62 % paieraient 40 £/an via un supplément hypothétique de facture d'eau, et
la courbe de demande estimée donne une volonté de payer moyenne de 28 £/an par foyer.

```
Mean WTP = £28/household/year
Households in catchment = 340,000
Aggregate annual value = £28 × 340,000 = £9.52m/year

Over a 20-year appraisal period at 3.5% discount rate (annuity factor ≈ 14.2):
PV(benefit) ≈ £9.52m × 14.2 ≈ £135m
```

Ce chiffre agrégé est ensuite comparé au côté coût de l'
[analyse coût-bénéfice sociale](../social-cost-benefit-analysis/) du programme. Le Green Book exige que
ce type de preuve de préférences déclarées soit rapporté avec son intervalle de confiance et sa
méthodologie d'enquête, et non comme une simple estimation ponctuelle, précisément parce que le chiffre
sous-jacent est plus fragile qu'un prix de marché.

**Association** : une fondation patrimoniale interroge visiteurs et non-visiteurs sur leur volonté de
payer pour empêcher la fermeture d'un bâtiment historique qu'aucun des deux groupes ne visite
nécessairement (sa valeur d'existence). Parce que les non-visiteurs qui ne verront jamais le bâtiment
rapportent quand même une volonté de payer positive, l'enquête capture une valeur d'existence et de legs
qu'un simple décompte de recette de droit d'entrée (un proxy de préférence révélée) manquerait
complètement — montrant l'avantage véritable des préférences déclarées là où aucune transaction de
marché d'aucune sorte n'existe pour révéler la valeur.

## Lien avec l'ingénierie logicielle

Les méthodes de préférences déclarées s'appliquent rarement directement au travail d'ingénierie
logicielle, mais les ingénieurs qui construisent des plateformes de consultation citoyenne, des outils
de budget participatif, ou une infrastructure d'enquête publique construisent souvent l'instrument dont
dépend l'économie. Bien faire les détails de conception d'enquête — montants d'enchère randomisés,
cadrage en référendum binaire plutôt que questions ouvertes, rappels explicites de la contrainte
budgétaire — n'est pas un raffinement d'UX, c'est ce qui rend la valorisation résultante défendable sous
examen ; une enquête intégrée à une application mal conçue peut invalider des mois d'analyse économique
ultérieure. Voir [indicateurs de satisfaction des citoyens](../citizen-satisfaction-metrics/) pour la
discipline plus générale de recueillir des données d'opinion publique capables de porter un poids
analytique.

## Pièges à éviter

- **Questions ouvertes du type « combien paieriez-vous ? ».** Elles sont bien plus sujettes au biais
  stratégique et d'ancrage que le cadrage en référendum binaire ; la recommandation du panel de la NOAA
  d'utiliser un format de référendum existe précisément parce que l'élicitation ouverte performe mal.
- **Absence de rappel de la contrainte budgétaire réelle du répondant.** Sans lui, la volonté de payer
  déclarée dépasse couramment ce que les mêmes personnes paieraient lorsqu'un véritable arbitrage
  budgétaire est en jeu — le biais hypothétique.
- **Effets d'inclusion ignorés.** Le même bien valorisé seul par rapport à valorisé au sein d'un
  ensemble plus large produit des estimations de volonté de payer différentes ; rapportez ce qui
  figurait par ailleurs, le cas échéant, dans le cadre de l'enquête.
- **Traiter l'estimation ponctuelle d'une seule enquête comme établie.** La pratique du Green Book
  attend une fourchette et une discussion des biais connus, pas un chiffre nu reporté dans le tableau
  coût-bénéfice comme s'il s'agissait d'un prix de marché.

## Sources

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
