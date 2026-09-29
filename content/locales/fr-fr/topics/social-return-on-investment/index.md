# Retour social sur investissement (SROI)

Le retour social sur investissement est un cadre pour mesurer, monétiser et rendre compte d'un concept
large de valeur — sociale, environnementale et économique — et l'exprimer sous forme de ratio par
rapport aux ressources investies, par exemple « 1,44 £ de valeur sociale pour chaque livre investie ».
Il a été conçu pour étendre la logique de la comptabilité financière à des résultats que les marchés ne
tarifient pas, sans perdre la discipline de la comptabilité : chaque chiffre d'un SROI doit être
traçable jusqu'à un résultat défini par les parties prenantes, une base de preuves, et un ajustement
explicite pour ce qui se serait produit de toute façon.

## Pourquoi c'est important

Le SROI est maintenu par Social Value UK et Social Value International, organismes successeurs du SROI
Network, dont le « A Guide to Social Return on Investment » (2012) demeure la méthodologie de référence.
Le cadre repose sur sept principes — impliquer les parties prenantes, comprendre ce qui change, valoriser
ce qui compte, n'inclure que ce qui est matériel, ne pas surestimer, être transparent, et vérifier le
résultat — et c'est le principe cinq, « ne pas surestimer », que la plupart des rapports SROI observés
sur le terrain ne respectent pas. Un ratio produit en sautant les ajustements de poids mort et
d'attribution n'est pas un SROI ; c'est un chiffre marketing déguisé en SROI. Les ingénieurs logiciels
qui construisent des outils de reporting pour des associations, entreprises sociales ou commanditaires
doivent connaître la différence, car l'outil imposera soit cette discipline, soit facilitera de la
contourner.

## Le calcul

Le SROI dépend d'une [théorie du changement](../theory-of-change/) pour identifier quels résultats sont
dans le périmètre, et les exprime en utilisant la même chaîne de redevabilité qu'un
[modèle logique](../logic-model/) :

```
SROI ratio = Present value of outcomes / Value of inputs

Process:
 1. Establish scope and identify stakeholders whose outcomes will be measured
 2. Map outcomes (a theory of change, evidenced with stakeholders, not assumed)
 3. Evidence outcomes and give them a value using financial proxies
 4. Establish impact: gross value − deadweight − attribution − displacement, then apply drop-off
 5. Calculate the SROI: net present value of impact ÷ value of inputs
 6. Report, use, and embed — the ratio is a communication device, not the endpoint
```

Le poids mort, l'attribution et le déplacement sont traités dans
[additionnalité et poids mort](../additionality-and-deadweight/) et
[déplacement et attribution](../displacement-and-attribution/) ; les trois existent pour isoler
l'impact [contrefactuel](../counterfactual-analysis/) véritable du résultat brut.

## Exemple chiffré

**Programme d'emploi d'une collectivité locale** : coût d'intrant annuel de 250 000 £. Soixante
participants accèdent à un emploi durable ; un proxy financier pour ce résultat (gain de bien-être,
réduction de la dépendance aux prestations, et recette fiscale combinés) est de 8 500 £ par personne
pour la première année — voir [bases de données de coûts unitaires](../unit-cost-databases/) pour
l'origine de tels proxys.

- Valeur brute du résultat : 60 × 8 500 £ = 510 000 £
- Moins le poids mort (40 % auraient probablement trouvé un emploi sans le programme) : 510 000 £ ×
  0,60 = 306 000 £
- Moins l'attribution (30 % du changement restant est dû au soutien d'autres agences) : 306 000 £ ×
  0,70 = 214 200 £
- Résultat de l'année 2 avec une déperdition de 30 % : 214 200 £ × 0,70 = 149 940 £, actualisé à
  3,5 %/an (voir [taux d'actualisation social](../social-discount-rate/)) : 149 940 £ ÷ 1,035 =
  144 870 £
- Valeur actuelle totale de l'impact : 214 200 £ + 144 870 £ = 359 070 £
- **Ratio SROI : 359 070 £ ÷ 250 000 £ = 1,44**, rapporté comme « 1,44 £ de valeur sociale pour chaque
  livre investie »

**Association** : un service d'accompagnement amical de 60 000 £ réduit l'isolement de 80 personnes
âgées, valorisé à un proxy de 1 100 £/personne/an. Valeur brute de 88 000 £ ; après 35 % de poids mort
et 15 % d'attribution, l'impact net est de 88 000 £ × 0,65 × 0,85 = 48 620 £, un ratio SROI de 0,81 —
en dessous du seuil de rentabilité, un constat légitime et utile, et non un échec à consigner.

## Lien avec l'ingénierie logicielle

Un calculateur SROI qui laisse un utilisateur saisir des décomptes de résultats et des valeurs de proxy
sans champ obligatoire pour le poids mort, l'attribution, ou une théorie du changement liée produira des
ratios gonflés par défaut, car omettre les ajustements est le chemin de moindre résistance. Intégrez la
discipline dans le schéma : chaque ligne de résultat devrait référencer un groupe de parties prenantes,
une quantité étayée par des preuves, un proxy financier avec sa source, et des champs non optionnels de
poids mort/attribution. Voir [résultats et réalisations](../outcomes-vs-outputs/) pour la distinction
dont dépend la cartographie de résultats du SROI, et [modèle logique](../logic-model/) pour la chaîne
que l'outil devrait refléter dans son modèle de données.

## Pièges à éviter

- **Sauter le poids mort et l'attribution.** Le ratio phare sans ces ajustements est un chiffre brut,
  pas un chiffre d'impact net, et les principes de Social Value UK exigent explicitement les deux.
- **Comparer des ratios entre organisations.** Un ratio SROI dépend de choix de périmètre et de proxy
  faits au cas par cas ; traiter un ratio de 4:1 d'un rapport comme « meilleur » qu'un ratio de 2:1
  d'un autre ignore que les hypothèses ne sont pas standardisées comme un ratio de comptabilité
  financière.
- **Double comptage de proxys se chevauchant.** Empiler un proxy de « réduction de l'isolement » avec
  un proxy d'« amélioration du bien-être mental » pour les mêmes bénéficiaires peut valoriser deux fois
  un même changement sous-jacent.
- **Sauter l'engagement des parties prenantes.** Le principe un exige que les résultats soient définis
  avec les personnes qui les vivent, et non supposés par l'analyste construisant le modèle.

## Sources

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
