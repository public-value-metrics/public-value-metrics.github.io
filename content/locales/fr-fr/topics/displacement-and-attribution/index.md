# Déplacement et attribution

Le déplacement se produit lorsque le bénéfice apparent d'un programme est obtenu en retirant de
l'activité ou du bénéfice ailleurs, plutôt qu'en créant quelque chose de nouveau — ce que vous gagnez,
quelqu'un d'autre le perd. L'attribution est la question connexe de savoir quelle part d'un résultat
observé votre intervention peut véritablement s'attribuer, lorsque d'autres acteurs et facteurs y ont
aussi contribué. Les deux sont des ajustements standards dans les lignes directrices britanniques
d'évaluation du secteur public, aux côtés du poids mort (« deadweight ») et de la fuite, et les deux
sont régulièrement omis par des déclarations d'impact qui paraissent bien plus solides qu'elles ne le
sont en réalité.

## Pourquoi c'est important

Un dispositif d'aide aux entreprises d'une collectivité locale qui aide 50 commerces à se relocaliser
dans une zone de régénération urbaine peut déclarer « 50 entreprises soutenues, 200 emplois créés »
— mais si ces entreprises se sont simplement déplacées depuis une rue commerçante voisine plutôt que
de se développer, les emplois ont été déplacés, non créés, et l'effet net à l'échelle de
l'arrondissement (ou de la région) pourrait être proche de zéro. Le Magenta Book de HM Treasury et
l'Additionality Guide, de longue date, traitent le déplacement comme une déduction obligatoire
précisément parce que les réussites locales sont fréquentes même lorsqu'elles ne produisent aucun
bénéfice national ou régional net — la valeur s'est simplement déplacée, souvent au détriment de la
zone ou des acteurs qui l'ont perdue. Les lignes directrices d'évaluation des fonds structurels
(utilisées pour les anciens programmes du Fonds européen de développement régional et leurs
successeurs nationaux, tels que l'UK Shared Prosperity Fund) formalisent cela à trois échelles
spatiales : le déplacement local (au sein d'une ville), le déplacement régional (au sein d'une région),
et le déplacement national (à l'échelle du Royaume-Uni), car une intervention peut être additionnelle à
une échelle tout en constituant un pur déplacement à une échelle plus large — un programme d'emploi qui
attire des travailleurs d'une ville voisine est neutre à l'échelle nationale même s'il ressemble à une
réussite locale.

L'attribution est le problème jumeau dans une prestation fortement dépendante de partenariats, devenue
aujourd'hui la norme dans le secteur social et le travail interinstitutionnel de service public.
Lorsque trois organisations assurent conjointement un service de prévention du sans-abrisme, chaque
organisation peut, dans son rapport annuel, revendiquer indépendamment le mérite de la même baisse du
nombre de personnes dormant à la rue — additionnés entre les rapports, les impacts revendiqués peuvent
dépasser le changement réel observé, parfois de plusieurs multiples. Les lignes directrices du Magenta
Book sur l'analyse de contribution existent précisément parce que l'attribution aléatoire à un seul
acteur est souvent impossible dans une prestation multi-agence, et la réponse honnête est fréquemment
« nous avons contribué à ce résultat » plutôt que « nous avons causé ce résultat ».

## Le calcul

Le déplacement s'inscrit dans la séquence standard de calcul de l'impact net (voir
[additionnalité et poids mort](../additionality-and-deadweight/) pour la chaîne complète) :

```
Impact net additionnel = Résultat brut − Poids mort − Déplacement − Fuite, × Multiplicateur

Taux de déplacement = bénéfice/activité détourné d'ailleurs
                     / bénéfice/activité brut total observé
```

L'attribution, lorsque plusieurs acteurs contribuent à un même résultat, s'exprime généralement comme
une part de contribution plutôt que comme un pourcentage précis, car elle ne peut habituellement pas
être mesurée avec la même rigueur que le déplacement :

```
Part attribuable ≈ f(force de la contribution causale, contributions des autres acteurs,
                      facteurs externes/contextuels)

L'impact revendiqué ne doit jamais dépasser :
  Σ (part attribuable de chaque partenaire) ≤ 100 % du résultat total observé
```

## Exemple chiffré

**Subvention de régénération** : le dispositif de subvention d'une collectivité pour une rue
commerçante déclare 200 nouveaux emplois de commerce créés dans la zone financée. Une enquête de suivi
révèle que 60 de ces emplois proviennent d'entreprises s'étant relocalisées depuis une rue commerçante
voisine non subventionnée, dans le même arrondissement, et que 30 autres proviennent de chaînes
nationales ouvrant des succursales qui se seraient de toute façon implantées quelque part dans la
région, subvention ou non.

```
Emplois bruts revendiqués = 200
Déplacement local = 60 (déplacés au sein de l'arrondissement)
Déplacement régional = 30 (se seraient implantés dans la région de toute façon)

Emplois nets additionnels (échelle de l'arrondissement) = 200 − 60 = 140
Emplois nets additionnels (échelle régionale) = 200 − 60 − 30 = 110
```

Le chiffre honnête à retenir dépend de l'échelle géographique qui importe au financeur — une analyse de
rentabilité du Trésor évaluée à l'échelle nationale ou régionale devrait retenir 110, pas les 140 de
l'échelle de l'arrondissement, et certainement pas les 200 bruts.

**Service multi-agence de lutte contre le sans-abrisme** : trois organisations partenaires (une
collectivité, une association caritative de logement, et un trust de santé) assurent conjointement un
service de réduction du nombre de personnes dormant à la rue. Ce nombre a diminué de 30 personnes sur
l'année dans la zone concernée. Chaque organisation revendique, dans son propre rapport annuel, « nous
avons réduit le nombre de personnes à la rue de 30 » — additionnés, les trois rapports revendiquent 90
personnes aidées, soit trois fois la réduction réelle. Une analyse de contribution attribuant à chaque
partenaire une part (disons 40 % pour la collectivité, 35 % pour l'association, 25 % pour le trust de
santé, sur la base du rôle documenté et d'une évaluation indépendante) rendrait compte de 12, 10,5 et
7,5 respectivement, dont la somme correspond correctement aux 30 observés.

## Lien avec l'ingénierie logicielle

Le déplacement et l'attribution déterminent la façon dont les systèmes de suivi d'impact et de
reporting de résultats devraient être conçus pour une prestation multi-site ou multi-partenaire :

- Le périmètre géographique et organisationnel devrait être un champ explicite et de premier plan dans
  tout tableau de bord d'impact — un chiffre déclaré « pour l'arrondissement » et le même chiffre
  déclaré « pour la région » sont des nombres différents, et un système qui les confond produira des
  chiffres impossibles à réconcilier au niveau du portefeuille.
- Lorsque plusieurs partenaires assurent une prestation conjointe, un système de résultats devrait
  enregistrer des parts de contribution (ou à défaut signaler une attribution conjointe) plutôt que de
  laisser le module de reporting de chaque partenaire revendiquer indépendamment 100 % d'un résultat
  partagé — sinon les agrégations au niveau du portefeuille surestimeront l'impact total, parfois
  fortement.
- Ceci rejoint le [retour social sur investissement](../social-return-on-investment/) et le
  [reporting des résultats de subvention](../grant-outcomes-reporting/) : un calcul de SROI ou d'IRIS+
  qui ignore le déplacement ou sur-attribue des résultats partagés produira un ratio gonflé qui ne
  résistera pas à un audit ou à une reproduction.

## Pièges à éviter

- **Déclarer un succès local sans vérifier le déplacement à plus large échelle.** Un programme peut
  paraître très réussi à la plus petite échelle de reporting tout en étant neutre, voire négatif, à
  une échelle plus large ; toujours préciser l'échelle géographique à laquelle s'applique le chiffre
  net.
- **Laisser chaque partenaire d'une prestation conjointe revendiquer le mérite intégral.** Sauf accord
  et documentation des parts de contribution, le reporting agrégé entre partenaires surestimera
  l'impact total — vérifier que les revendications au niveau des partenaires ne dépassent pas, au
  total, le résultat observé.
- **Traiter l'attribution comme un pourcentage précis alors qu'il s'agit en réalité d'un jugement.**
  L'analyse de contribution, contrairement à un contrefactuel randomisé, produit une estimation
  défendable, pas un fait mesuré ; la présenter avec l'incertitude appropriée plutôt qu'avec une
  fausse précision.
- **Ignorer le déplacement dans les interventions orientées marché.** Le soutien aux entreprises, les
  dispositifs d'emploi, et la régénération territoriale sont les catégories classiques à fort
  déplacement ; traiter les vérifications de déplacement comme obligatoires pour celles-ci, non comme
  facultatives.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
