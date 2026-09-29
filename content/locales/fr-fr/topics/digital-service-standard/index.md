# Norme de service numérique

Le GOV.UK Service Standard est le portail que tout service numérique de l'administration centrale britannique doit franchir avant sa mise en ligne : 14 points publiés, évalués par un panel indépendant à la fin de chaque phase de développement. C'est le mécanisme qui transforme « construire de bons services publics » d'un slogan en une décision de type réussite/échec assortie d'une trace écrite — et le descendant direct du mandat « numérique par défaut » de la Government Digital Strategy de 2012.

## Pourquoi c'est important

Avant l'existence du Service Standard, un échec informatique gouvernemental n'était généralement visible qu'au lancement, et rarement imputable à une décision précise. La Government Digital Strategy de 2012 a engagé les ministères à repenser les 25 services transactionnels grand public les plus utilisés selon le principe « numérique par défaut », et a appuyé cet engagement par un mécanisme de conformité : les services ne pouvaient pas être mis en ligne sur GOV.UK sans franchir une évaluation de service par rapport à ce qui était alors une norme en 26 points (ramenée à 18 en 2019, et aujourd'hui la norme en 14 points en vigueur, couvrant trois groupes — comprendre les besoins des usagers, fournir un bon service, et utiliser la bonne technologie). Une évaluation de service est un événement bien réel : un panel d'évaluateurs du GDS ou du ministère examine les éléments de preuve, interroge l'équipe, et rend un verdict de réussite, d'échec ou de « non atteint » pour chaque point, publié sur la page d'évaluation du service. Échouer à une évaluation bloque le passage du service de la bêta privée à la bêta publique, ou de la bêta au statut « en service » — c'est un véritable portail, pas une simple revue.

## Le calcul

Le Service Standard est un cadre, pas une formule, mais il fonctionne comme une structure de décision jalonnée par étapes :

```
Découverte → Évaluation Alpha → Évaluation Bêta → Évaluation « en service »
             (pas obligatoire   (obligatoire avant  (obligatoire avant
              pour tous les      le lancement en      de retirer la mention
              services, mais     bêta publique)        « bêta » et de fermer
              recommandée)                              l'ancien canal)

Chaque évaluation : preuves + entretien d'équipe → verdict du panel par point
  Atteint / Partiellement atteint / Non atteint
Résultat global : Réussite / Réussite sous conditions / Échec (réévaluation requise)

Coût d'un échec ≈ coût du cycle de sprint suivant pour remédier au problème
              + retard sur les [économies de report de canal](../channel-shift-savings/)
                que le service était financé pour produire
```

Le point 10 (« définir à quoi ressemble la réussite, et publier les données de performance ») alimente le [coût par transaction](../cost-per-transaction/) et les [normes de service et indicateurs de transaction](../service-standards-and-transaction-metrics/) — le Standard impose la mesure, pas seulement le service.

## Exemple chiffré

**Service de demande de logement d'une collectivité locale** : une équipe municipale arrive à son évaluation bêta avec un service qui satisfait 11 des 14 points mais échoue au point 5 (« s'assurer que tout le monde peut utiliser le service ») car il n'existe aucune filière d'assistance numérique pour les demandeurs sans accès à Internet, et échoue au point 9 car des données personnelles sont enregistrées en clair dans les traces d'erreur de l'application.

```
Coût direct de l'échec :
  Créneau de réévaluation : 6 à 8 semaines d'attente pour le prochain panel disponible
  Sprint de remédiation : 2 développeurs × 3 semaines × 550 £/jour ≈ 34 650 £
  Conception de la filière d'assistance numérique : 1 chercheur × 2 semaines ≈ 5 000 £

Coût du retard : le service devait faire basculer 40 % des 18 000 demandes
de logement annuelles d'appels téléphoniques à 8,50 £ vers des transactions
numériques à 0,20 £
  = 7 200 × (8,50 £ − 0,20 £) = 59 760 £/an de manque à gagner, calculé
    au prorata du retard d'environ 2 mois ≈ 9 960 £

Coût total de l'évaluation échouée ≈ 49 610 £
```

L'important dans ce calcul n'est pas sa précision — c'est qu'une évaluation échouée a un coût réel et calculable, et c'est précisément pourquoi ce portail a des dents.

## Lien avec l'ingénierie logicielle

Pour les ingénieurs, le Standard se lit autant comme une liste de contrôle d'architecture et de livraison que comme un document de politique publique : le point 11 (« choisir les bons outils et la bonne technologie ») et le point 12 (« rendre le nouveau code source ouvert ») sont des décisions d'ingénierie directes, et le point 14 (« exploiter un service fiable ») exige les mêmes SLO et processus d'incident que n'importe quel système de production. C'est le cadre englobant de ce chapitre — le [coût par transaction](../cost-per-transaction/) et les [économies de report de canal](../channel-shift-savings/) sont ce que le Standard cherche à protéger financièrement, l'[inclusion numérique](../digital-inclusion/) est ce que le point 5 existe pour garantir, et les composants du [gouvernement en tant que plateforme](../government-as-a-platform/) (GOV.UK Notify, Pay, One Login) satisfont largement par défaut au point 13 (« utiliser et contribuer à des standards ouverts, des composants communs et des modèles »). Voir aussi [construire ou acheter dans l'administration](../build-vs-buy-in-government/) pour la façon dont le point sur les « bons outils » se traduit dans les décisions d'achat public.

## Pièges à éviter

- **Traiter l'évaluation comme une case de conformité à cocher le jour du lancement** : les équipes qui découvrent les 14 points une semaine avant leur évaluation bêta échouent de façon prévisible ; le Standard est censé orienter les décisions dès la découverte, pas les auditer a posteriori.
- **Évaluer le prototype, pas le service** : une démonstration soignée peut réussir une revue que la version réelle du service, incluant l'assistance numérique et la gestion des incidents, échouerait — les évaluateurs sont censés sonder cet écart, mais les petits services auto-certifiés y échappent souvent.
- **Absence de réévaluation avant la montée en charge** : un service évalué à 5 % de déploiement ne reste pas automatiquement conforme à 100 % — la charge, la demande liée aux défaillances, et les usagers en cas limite changent tous.
- **Confondre le Service Standard avec un système de conception** : les composants du GOV.UK Design System satisfont certains points (cohérence, accessibilité), mais le Standard couvre aussi la structure d'équipe, les pratiques agiles, et l'éthique des données — un service à l'apparence soignée peut tout de même échouer aux points 2, 6 ou 9.

## Sources

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
