# Paiement aux résultats et obligations à impact social (PbR/SIB)

Le paiement aux résultats (Payment by Results, PbR) rémunère un prestataire sur la base de résultats
vérifiés obtenus, et non des activités réalisées. Une obligation à impact social (Social Impact Bond,
SIB) est une structure de financement PbR spécifique dans laquelle des investisseurs privés ou
philanthropiques financent la prestation de services en amont et ne sont remboursés — avec un
rendement — par un commanditaire public que si des résultats mesurés de manière indépendante
atteignent des seuils convenus, ce qui transfère le risque de mise en œuvre du contribuable vers
l'investisseur.

## Pourquoi c'est important

Le premier SIB au monde a été lancé à la prison de HMP Peterborough en septembre 2010 : Social
Finance a levé 5 millions de livres sterling auprès de 17 investisseurs pour financer le « One
Service », qui travaillait avec des détenus purgeant de courtes peines (moins de 12 mois) afin de
réduire la récidive, le ministère de la Justice (Ministry of Justice) et le Big Lottery Fund
s'engageant à rembourser les investisseurs uniquement si les cas de récidive diminuaient d'au moins
7,5 % par rapport à une cohorte de comparaison nationale appariée. La dernière cohorte du projet
pilote de Peterborough a enregistré une réduction de 9,7 % des récidives, largement au-dessus du
seuil, et les investisseurs ont été remboursés avec un rendement. Ce mécanisme a compté parce qu'il
résolvait un problème de commande publique précis : le gouvernement souhaitait payer des résultats
plutôt que des moyens, mais ne pouvait pas absorber le risque financier d'une intervention
susceptible d'échouer ; la structure du SIB a donc déplacé ce risque vers des investisseurs prêts à
le garantir. Le Government Outcomes Lab (GO Lab) de la Blavatnik School of Government d'Oxford tient
aujourd'hui la base de données publiques la plus complète au monde sur la performance des PbR et des
SIB, suivant bien plus de 200 obligations à impact à l'échelle mondiale et publiant des recherches
sur les caractéristiques de conception associées au succès ou à l'échec. La leçon que cette base de
données répète sans cesse est que *l'indicateur de résultat choisi*, et la personne qui supporte le
risque de ne pas l'atteindre, déterminent presque tout le reste du comportement réel d'un contrat
PbR.

## Le calcul

```
Paiement PbR = paiement de base (le cas échéant) + Σ (résultat obtenu × prix unitaire par résultat)

Rendement de l'investisseur dans une obligation à impact social :
  Mise de l'investisseur   = capital initial finançant la prestation du service
  Paiement au résultat     = le commanditaire ne paie que si le résultat ≥ seuil, avec un montant
                              proportionnel à l'ampleur du dépassement du seuil
  Rendement de l'investisseur = paiements au résultat perçus − mise de l'investisseur
                              (un taux de rendement, souvent plafonné, reflétant le risque pris)

Paramètres de conception clés qui déterminent le comportement de l'ensemble du contrat :
  Indicateur de résultat   — doit être un résultat, non un produit (voir outcomes-vs-outputs)
  Comparaison/contrefactuel — généralement une cohorte appariée (voir counterfactual-analysis)
  Seuil de paiement        — amélioration minimale avant tout déclenchement de paiement
  Courbe de paiement       — linéaire, par palier, ou plafonnée au-delà du seuil
  Décote d'attribution/effet d'aubaine — voir additionality-and-deadweight
```

## Exemple chiffré

**Peterborough One Service** (chiffres illustratifs tirés d'évaluations publiées) :

```
Capital levé par les investisseurs :   5 000 000 £
Cohorte :                              ~3 000 détenus hommes purgeant de courtes peines,
                                        répartis en deux cohortes
Seuil :                                ≥7,5 % de réduction des cas de récidive par rapport
                                        à un groupe de comparaison national apparié, sinon
                                        aucun paiement
Résultat cohorte 1 :                   8,4 % de réduction — en dessous du seuil contractuel
                                        pour cette cohorte seule selon les règles d'origine
Résultat cohorte combinée/finale :     9,7 % de réduction — au-dessus du seuil
Paiement au résultat :                 le gouvernement (ministère de la Justice /
                                        Big Lottery Fund) paie par point de pourcentage
                                        au-dessus du seuil, finançant le remboursement des
                                        investisseurs plus un rendement
```

**Contrat PbR d'une collectivité locale (illustratif)** : un service d'intervention familiale est
commandé pour 4 000 £ par famille orientée (paiement d'activité) plus 6 000 £ par famille sans
nouvelle orientation vers la protection de l'enfance 12 mois après la clôture (paiement au résultat).
200 familles orientées, 150 dossiers clôturés, 96 restent sans nouvelle orientation à 12 mois :

```
Paiement d'activité   = 200 × 4 000 £ = 800 000 £
Paiement au résultat  = 96 × 6 000 £  = 576 000 £
Coût total du contrat = 1 376 000 £ pour 96 résultats durables confirmés
Coût par résultat confirmé ≈ 14 333 £ (voir cost-per-outcome)
```

## Lien avec l'ingénierie logicielle

Le paiement aux résultats est un problème d'alignement des incitations avant d'être un problème de
données, et c'est le système de données qui détermine si cet alignement tient ou se rompt. La
vérification indépendante et inviolable des résultats est l'enjeu central : le commanditaire et le
prestataire ont des incitations opposées quant à la manière dont un cas ambigu est codé, si bien que
le système qui enregistre les résultats a besoin d'une piste d'audit, d'un accord de partage de
données avec le vérificateur indépendant (souvent un organisme distinct du prestataire, parfois un
organisme de statistiques officielles effectuant des rapprochements avec les fichiers de la police ou
des prestations sociales), et d'un versionnage immuable de la définition du résultat — l'équivalent,
côté PbR, du piège de la « redéfinition de l'indicateur » évoqué dans
[les indicateurs de performance du secteur public](../public-sector-kpis/). Les calculs d'attribution
reposent sur les méthodes de cohortes appariées de l'[analyse contrefactuelle](../counterfactual-analysis/),
qui exigent un code reproductible et auditable, et non une feuille de calcul ponctuelle. Et
l'indicateur lui-même doit être un véritable résultat, et non une activité de substitution — voir
[résultats et produits](../outcomes-vs-outputs/) — car un contrat PbR qui rémunère un produit ne fait
que réétiqueter un financement habituel en y ajoutant des coûts de transaction. Lorsque le rendement
social d'un SIB est modélisé de manière prospective, cette évaluation s'appuie généralement
directement sur la méthodologie du [retour social sur investissement](../social-return-on-investment/).

## Pièges à éviter

- **Payer pour un résultat de substitution facilement manipulable** : « la présence aux séances » est
  une activité déguisée en résultat ; exigez une mesure qui reflète le changement réellement
  recherché (récidive, emploi, stabilité du logement).
- **Absence de contrefactuel crédible** : sans groupe de comparaison apparié, une amélioration peut
  relever d'un retour à la moyenne ou d'une tendance plus large, et non de l'effet du programme —
  voir [analyse contrefactuelle](../counterfactual-analysis/) et
  [additionnalité et effet d'aubaine](../additionality-and-deadweight/).
- **Sous-estimer les coûts de transaction et d'évaluation** : la vérification indépendante, le
  rapprochement des données et l'administration contractuelle des dispositifs PbR/SIB représentent
  régulièrement un pourcentage à deux chiffres de la valeur du contrat — la base de données du GO
  Lab documente ce phénomène comme une cause récurrente d'abandon des dispositifs.
- **Écrémage ou « mise à l'écart »** : les prestataires payés au résultat ont une incitation directe
  à privilégier les usagers les plus susceptibles de réussir de toute façon et à délaisser les cas
  les plus difficiles — concevez des paliers de paiement ou un ajustement au mix de cas pour contrer
  cet effet.

## Sources

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
