# Modèle logique

Un modèle logique est un diagramme linéaire reliant les ressources, les activités, les réalisations,
les résultats et l'impact d'un programme, à lire de gauche à droite comme une chaîne de
redevabilité : des ressources sont engagées, des activités sont menées, des réalisations sont
produites, des résultats changent pour les bénéficiaires, et un impact se manifeste à une échelle
plus large ou sur un horizon plus long. C'est la structure standard qu'attendent bailleurs de fonds
et auditeurs pour qu'un programme soit rapportable, et le pendant tourné vers l'avenir d'une
[théorie du changement](../theory-of-change/) construite en partant de l'arrière.

## Pourquoi c'est important

Le Magenta Book de HM Treasury fait du modèle logique un élément obligatoire de la conception de
l'évaluation des programmes, et des bailleurs comme le National Lottery Community Fund construisent
leurs modèles de candidature et de rapport exactement autour de cette chaîne à cinq colonnes. Sa
valeur tient à ce qu'il oblige un programme à énoncer, dans un seul diagramme, ce qu'il va dépenser,
ce qu'il va en faire, ce qu'il va produire et — c'est le point critique — ce qui devrait changer en
conséquence, à un niveau de précision qu'un paragraphe de prose tend à masquer. Un modèle logique
dont les colonnes ressources et activités sont renseignées mais dont la colonne résultats est vide
ou vague se diagnostique d'un coup d'œil, ce qui explique précisément pourquoi les bailleurs en
exigent un.

## Le calcul

Le modèle logique est une chaîne structurelle plutôt qu'une formule :

```
Ressources      Activités         Réalisations        Résultats             Impact
(ressources     (ce qui est fait  (produits directs,   (changement pour      (changement
 engagées)       avec elles)       comptables)          les bénéficiaires)    durable, à
                                                                               l'échelle de la
                                                                               population ou
                                                                               systémique)
```

Chaque colonne doit être plus spécifique que la précédente : les ressources sont ce que vous
dépensez, les activités sont ce que vous faites, les réalisations sont ce qui est livré
indépendamment de l'effet produit, les résultats sont ce qui change en conséquence — distinction
traitée en détail dans [résultats vs réalisations](../outcomes-vs-outputs/) — et l'impact est le
changement durable, à long terme, souvent seulement partiellement attribuable.

## Exemple chiffré

**Collectivité locale (service numérique de conseil en désendettement)** :

- Ressources : budget annuel de 180 000 £, 4,0 ETP de conseillers, un système de gestion des
  dossiers.
- Activités : séances d'information, rendez-vous individuels de conseil en désendettement.
- Réalisations : 900 rendez-vous assurés ; 750 plans de dette et de prestations émis.
- Résultats : parmi les clients ayant atteint un suivi à 6 mois, 60 % (450 sur 750) déclarent une
  réduction de leurs arriérés, avec une baisse moyenne de 1 200 £ par client — soit 540 000 £ de
  réduction agrégée des arriérés.
- Impact : une baisse mesurable des demandes de logement d'urgence liées au sans-abrisme parmi les
  clients du service sur deux ans, seulement partiellement attribuable à ce service aux côtés
  d'autres interventions (voir [analyse contrefactuelle](../counterfactual-analysis/)).

**Association caritative (partenariat de réorientation vers une banque alimentaire)** :

- Ressources : 45 000 £, 1,5 ETP de coordinateur, accords de partenariat avec 12 organismes
  orienteurs.
- Activités : tri des demandes de réorientation, préparation et distribution de colis.
- Réalisations : 5 000 colis alimentaires distribués à 1 100 foyers.
- Résultats : 68 % des foyers interrogés (748 sur 1 100) déclarent une amélioration de leur
  sécurité alimentaire lors d'un appel de suivi à 4 semaines.
- Impact : contribution à une baisse de la demande locale de services de crise, mise en évidence
  uniquement par des statistiques régionales agrégées, non attribuable à cette seule association.

## Lien avec l'ingénierie logicielle

Le modèle logique est proche d'un modèle de données littéral pour un système de suivi des
résultats : les ressources et les activités sont des données opérationnelles déjà détenues
(dépenses, effectifs, journaux de séances) ; les réalisations sont faciles à instrumenter car
comptées au moment de la livraison ; les résultats exigent une collecte de données de suivi conçue
délibérément (enquêtes, appariement de données administratives) qui n'existera pas à moins que
quelqu'un ne la construise ; l'impact requiert en général des données longitudinales, appariées ou
à l'échelle de la population, au-delà des systèmes d'un seul programme. Les ingénieurs qui
construisent des outils de reporting devraient inciter les commanditaires à définir les indicateurs
de résultats et d'impact dès la conception, plutôt que de se rabattre par défaut sur un tableau de
bord axé uniquement sur les réalisations parce que c'est ce que les données transactionnelles
permettent déjà. Voir [retour social sur investissement](../social-return-on-investment/) pour une
méthode qui valorise spécifiquement les colonnes résultats et impact, et
[réalisation des bénéfices](../benefits-realization/) pour le suivi de la question de savoir si la
colonne impact a réellement été livrée.

## Pièges à éviter

- **S'arrêter aux réalisations.** Un tableau de bord qui rapporte des rendez-vous assurés ou des
  colis distribués et laisse entendre un bénéfice rapporte de l'activité, pas des résultats — voir
  [résultats vs réalisations](../outcomes-vs-outputs/).
- **Absence de lien causal énoncé entre les colonnes.** Un modèle logique énonce la chaîne mais pas
  pourquoi les activités devraient produire des réalisations qui devraient produire des résultats ;
  ce raisonnement relève d'une [théorie du changement](../theory-of-change/), et un modèle logique
  qui n'en est pas étayé reste non éprouvé.
- **Le traiter comme un document de candidature ponctuel.** Les modèles logiques produits
  uniquement pour satisfaire une demande de financement et jamais mis à jour cessent de refléter ce
  que le programme fait réellement.
- **Dérive d'attribution au niveau de la colonne impact.** Revendiquer un changement à l'échelle de
  la population comme causé uniquement par un seul programme, sans contrefactuel, surestime ce que
  les données probantes permettent d'affirmer.

## Sources

- HM Treasury, Magenta Book (2020), Chapitre 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, guidance sur le modèle logique. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, « Logic Model Development Guide » (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
