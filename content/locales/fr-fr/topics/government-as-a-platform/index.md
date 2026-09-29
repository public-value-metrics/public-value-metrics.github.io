# Le gouvernement comme plateforme (Government as a Platform, GaaP)

Le gouvernement comme plateforme est la stratégie consistant à construire une fois, de manière centralisée, des composants partagés et réutilisables — un service de notifications, un service de paiement, un service d'identité — afin que des centaines de services publics individuels les consomment plutôt que de construire chacun le sien. Elle reformule l'infrastructure numérique publique comme un problème d'économie de plateforme : la valeur ne réside pas dans une intégration particulière, mais dans le coût marginal de la *prochaine* équipe qui l'adopte, qui tend vers zéro.

## Pourquoi c'est important

Le GDS (Government Digital Service) a formellement énoncé cette stratégie dans sa publication de 2015 « Government as a Platform », soutenant que le gouvernement avait construit séparément, service après service, les mêmes capacités — prise de paiement, notification des usagers, vérification d'identité, recherche d'adresse — chacune portant sa propre charge de passation de marché, d'évaluation de sécurité et de maintenance continue. L'alternative était un petit nombre de plateformes partagées, construites une fois selon un niveau d'exigence élevé et réutilisées partout : GOV.UK Notify pour l'envoi de courriels, de SMS et de lettres, GOV.UK Pay pour la prise de paiements en ligne, et GOV.UK One Login (successeur du précédent programme d'identité GOV.UK Verify) pour la vérification d'identité. L'échelle atteinte par ces plateformes est la preuve la plus claire que la stratégie a fonctionné : GOV.UK Pay a traité plus de 10 milliards de livres sterling de transactions à travers environ 1 800 services distincts — et alors qu'il lui avait fallu environ quatre ans pour traiter son premier milliard de livres, il traite désormais ce même montant en environ cinq mois — tandis que GOV.UK Notify a envoyé plus de 9 milliards de messages pour le compte de plus de 1 500 organismes publics. Chacun de ces services adoptants a évité de construire, sécuriser et maintenir sa propre passerelle de paiement ou son propre système de messagerie.

## Le calcul

```
Coût de construction par service (sans plateforme) = N services × coût de construction,
  d'évaluation de sécurité et d'exploitation d'un système de paiement/notification/identité

Coût de la plateforme = coût fixe de construction de la plateforme
              + coût marginal par service adoptant (intégration,
                configuration, support continu de l'équipe plateforme)

La réutilisation devient rentable dès que :
  coût de construction de la plateforme < N × (coût de construction par service − coût
  marginal d'intégration)

Pour une plateforme mature, le coût marginal par adoptant supplémentaire se rapproche
du seul frais de transaction/message — le coût fixe est amorti sur l'ensemble du
périmètre gouvernemental, et non sur le budget d'un seul département, ce qui explique
pourquoi les composants GaaP sont généralement financés de manière centralisée plutôt
que facturés à coût complet aux premiers adoptants.
```

## Exemple chiffré

**Une collectivité locale adoptant GOV.UK Pay plutôt que de construire une passerelle de paiement** :

```
Estimation « construire soi-même » :
  Travail de conformité PCI-DSS + intégration + maintenance continue
  ≈ 85 000 £ de construction + 22 000 £/an de maintenance

Adoption de GOV.UK Pay :
  Effort d'intégration ≈ 12 000 £ (temps de développement)
  Frais de transaction : les paiements par carte de l'administration vers le
  citoyen sont généralement facturés à un faible pourcentage plus des frais
  fixes par transaction, sans charge de conformité PCI-DSS distincte portée
  par la collectivité
  ≈ 12 000 £ en une fois, coût continu variable selon le volume, non fixe

Économie la première année ≈ 85 000 £ − 12 000 £ = 73 000 £, avant même de
compter les 22 000 £/an de maintenance évités et le risque de conformité
évité lié au fait même de détenir des données de carte dans un système géré
par la collectivité — cette deuxième catégorie relève de la valeur de
sécurité traitée dans public-sector-cybersecurity-value.
```

En extrapolant cette économie de 73 000 £ aux quelque 1 800 services utilisant aujourd'hui GOV.UK Pay, le coût de construction cumulé évité à l'échelle du gouvernement se chiffre en centaines de millions — c'est dans l'économie de plateforme, et non dans une intégration isolée, que la valeur de la stratégie se situe réellement.

## Lien avec l'ingénierie logicielle

Le gouvernement comme plateforme constitue un argument direct en faveur de [build-vs-buy-in-government](../build-vs-buy-in-government/) : lorsqu'un composant partagé, évalué et bien géré existe déjà, construire un équivalent sur mesure est très rarement le meilleur choix en termes de [value-for-money](../value-for-money/), et cela contrevient presque par définition au point 13 du [digital-service-standard](../digital-service-standard/) (« utiliser et contribuer aux normes ouvertes, aux composants et modèles communs »). Cela modifie également la structure du [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it/) : l'adoption d'une plateforme échange une ligne budgétaire d'investissement et de maintenance importante contre un coût d'exploitation plus faible et lié à l'usage, plus facile à prévoir et plus facile à désengager si un service est arrêté. La réutilisation ouverte de composants a un cousin dans [open-data-value](../open-data-value/) — les deux sont des stratégies visant à traiter ce que le gouvernement produit une fois comme une infrastructure partagée plutôt que comme un actif ministériel.

## Pièges à éviter

- **La reconstruction fantôme** : des équipes construisent discrètement leur propre intégration de paiement ou de notification parce que le processus d'intégration à la plateforme est plus lent que de le faire elles-mêmes — un problème de gouvernance, pas de technologie, qui érode silencieusement l'économie de réutilisation dont dépend toute la stratégie.
- **Le sous-financement de l'équipe plateforme par rapport à la valeur qu'elle crée** : la valeur revient aux départements consommateurs tandis que le coût pèse sur l'équipe plateforme, créant un risque chronique de sous-investissement à moins que le financement ne soit centralisé et protégé — une variante de la tragédie des biens communs.
- **Mesurer le succès de la plateforme par le seul usage** : les chiffres d'adoption (services intégrés, messages envoyés) sont un indicateur avancé, pas une preuve de valeur ; le véritable test réside dans le calcul du coût de construction évité et du risque évité décrit ci-dessus.
- **Assimiler « plateforme » à « monolithe »** : les composants GaaP réussissent parce que chacun fait bien une seule chose avec une interface étroite et stable — regrouper des capacités sans rapport dans une seule « plateforme » recrée le problème de la construction sur mesure à une autre échelle.

## Sources

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
