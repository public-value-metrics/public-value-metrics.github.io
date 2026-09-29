# Indicateurs de capital social

Les indicateurs de capital social quantifient les réseaux, la confiance et la participation civique
qui permettent aux communautés et aux institutions de fonctionner efficacement — ce « tissu
conjonctif » qui n'apparaît sur aucun bilan comptable mais qui, de manière visible, réduit les coûts
et les frictions lorsqu'il est présent, et les accroît lorsqu'il est absent. Le cadre moderne provient
de « Bowling Alone » (2000) de Robert Putnam, qui distinguait le capital de liaison (*bonding*, liens
au sein d'un groupe similaire) du capital de pontage (*bridging*, liens entre groupes différents) ;
l'Office for National Statistics (ONS) du Royaume-Uni a depuis constitué un ensemble d'indicateurs
permanent pour le suivre à l'échelle nationale.

## Pourquoi c'est important

L'affirmation empirique centrale de Putnam — documentée par le déclin de l'adhésion aux associations
civiques, de la fréquentation religieuse et de la participation syndicale aux États-Unis à la fin du
vingtième siècle — était que le capital social permet de prédire des résultats que l'économie
conventionnelle peine à expliquer : moins de criminalité, un meilleur bien-être des enfants, une
administration locale plus efficace, un redressement économique plus rapide après un choc. Le
capital de liaison (liens forts au sein d'un groupe soudé) favorise l'entraide mutuelle mais peut se
scléroser en repli sur soi ; le capital de pontage (liens plus faibles entre groupes différents) est
ce qui corrèle typiquement avec l'accès aux opportunités, à la circulation de l'information et à la
confiance institutionnelle. L'ONS a pris cela suffisamment au sérieux pour construire un cadre
d'indicateurs national — sa série « Social Capital in the UK »
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
suit quatre piliers : les relations personnelles, le soutien du réseau social, l'engagement civique,
et la confiance et les normes de coopération, chacun construit à partir de questions d'enquête
établies (Community Life Survey, Understanding Society). Pour les services numériques du secteur
public, le capital social présente un double intérêt : c'est à la fois un résultat que certains
programmes cherchent à construire (financement de la résilience communautaire, prescription sociale)
et un intrant qui détermine à quel point un service sera réellement adopté — un service déployé dans
une communauté à forte confiance et bien connectée se diffusera par le bouche-à-oreille d'une manière
qu'un service identique dans une zone à faible confiance ne fera pas.

## Le calcul

```
ONS four-pillar framework (indicators, illustrative):

Personal relationships:      % with someone to rely on in a crisis
Social network support:      % who could borrow money from friends/family if needed
Civic engagement:            % who volunteered or took civic action in past 12 months
Trust and cooperative norms: % agreeing "most people can be trusted"

No single ONS composite score is published — the pillars are reported
separately, deliberately, because aggregating them into one index would
hide which specific pillar is weak.

Putnam's bonding/bridging split (framework, not a formula):
  bonding capital ≈ density of ties within a homogeneous group
  bridging capital ≈ frequency/strength of ties across distinct groups
```

## Exemple chiffré

**Instantané de capital social de quartier** : une enquête de type Community Life Survey menée dans
une zone locale révèle que 78 % des personnes ont quelqu'un sur qui compter en cas de crise
(relations personnelles), 61 % pourraient emprunter de l'argent en cas de besoin (soutien du
réseau), 24 % ont fait du bénévolat au cours de l'année écoulée (engagement civique), et 41 %
estiment que « la plupart des gens sont dignes de confiance » (confiance et normes) — contre des
moyennes nationales d'environ 85 %, 70 %, 30 % et 45 % respectivement (à titre indicatif, à calibrer
sur le bulletin ONS en vigueur). La zone est sous-indexée sur chaque pilier, mais le plus nettement
sur la confiance (41 % contre 45 % au niveau national, un écart de 4 points) et l'engagement civique
(24 % contre 30 %, un écart de 6 points) — ce qui signale l'engagement civique, et non la confiance,
comme le déficit relatif le plus important méritant un investissement ciblé (un programme de
subventions communautaires, par exemple) plutôt qu'une initiative générique de « renforcement de la
confiance ».

**Capital de liaison contre capital de pontage, conception de service** : un programme d'emploi dans
une communauté soudée constate que les recommandations circulent rapidement au sein de la communauté
(capital de liaison élevé : l'information se diffuse en quelques jours) mais que le programme peine à
atteindre les résidents en dehors de ce réseau (capital de pontage faible : l'adoption hors du noyau
communautaire est quasi nulle après plusieurs mois). La solution qui s'impose n'est pas « davantage de
communication » mais la construction délibérée de liens de pontage — nouer des partenariats avec des
organisations situées *en dehors* du réseau existant, car le capital de liaison seul ne peut résoudre
un problème de capital de pontage.

## Lien avec l'ingénierie logicielle

- Les plateformes numériques qui organisent l'entraide, le bénévolat ou les subventions
  communautaires (un service de « connecteur local », par exemple) construisent littéralement une
  infrastructure de capital de pontage ; leur indicateur de succès devrait être la diversité des
  connexions établies dans le réseau, et non le seul nombre de transactions — voir
  [le gouvernement en tant que plateforme](../government-as-a-platform/) pour le schéma plus large
  d'infrastructure sur laquelle d'autres construisent de la valeur.
- Lorsque la théorie du changement d'un programme cible explicitement le capital social comme
  résultat (un fonds de résilience communautaire, un service de prescription sociale), sa
  [théorie du changement](../theory-of-change/) et son [modèle logique](../logic-model/) devraient
  nommer le pilier spécifique (confiance, engagement civique, soutien du réseau) qu'il entend faire
  évoluer, plutôt qu'un résultat indifférencié de « renforcement de la communauté » qui ne peut être
  mesuré par rapport à la référence de l'ONS.
- Les indicateurs de capital social constituent un angle d'équité utile aux côtés de l'
  [indice de privation multiple](../index-of-multiple-deprivation/) : une zone peut être pauvre en
  revenus mais riche socialement, ou l'inverse, et les deux situations appellent des interventions
  très différentes.

## Pièges à éviter

- **Réduire les quatre piliers de l'ONS à un score composite unique** — l'ONS s'y refuse
  délibérément ; un chiffre unique masque quel pilier spécifique tire une lecture vers le bas, et le
  moyennage dissimule une communauté à forte confiance mais peu engagée civiquement par rapport à une
  autre qui présente le profil inverse.
- **Supposer que le capital social est toujours bénéfique** — un capital de liaison dense au sein
  d'un groupe fermé peut activement résister aux institutions extérieures (y compris aux services
  publics) ; l'analyse même de Putnam traite le capital de liaison et le capital de pontage comme des
  biens distincts, aux effets différents et parfois contradictoires.
- **Utiliser des mesures de capital social fondées sur des enquêtes comme indicateur opérationnel en
  temps réel** — les enquêtes sous-jacentes (Community Life Survey, Understanding Society) sont
  menées annuellement ou moins souvent ; traiter les données de capital social comme un indicateur
  contextuel à évolution lente, et non comme quelque chose qu'un tableau de bord de service peut
  actualiser chaque semaine.

## Sources

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
