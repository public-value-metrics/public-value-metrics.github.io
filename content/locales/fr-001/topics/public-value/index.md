# Valeur publique

La valeur publique est la richesse qu'un gouvernement ou une organisation du secteur social crée pour
les citoyens collectivement — pas seulement les réalisations qu'il produit ou l'argent qu'il dépense,
mais le fait que la société soit mieux lotie parce que l'organisation existe et a agi comme elle l'a
fait. Le « triangle stratégique » de Mark Moore de 1995 est le test standard : une initiative publique
n'est justifiée que lorsqu'elle est à la fois *légitime et soutenue*, *substantiellement précieuse*, et
*opérationnellement livrable*, les trois à la fois.

## Pourquoi c'est important

La valeur du secteur privé est relativement facile à chiffrer : recette moins coût, jugée par des
clients qui peuvent s'en aller. La valeur publique n'a pas d'équivalent signal de marché. Un service
pénitentiaire, une administration fiscale et une équipe de protection de l'enfance produisent tous des
choses que les citoyens ne peuvent tout simplement pas refuser d'acheter, et le « client » (le
contribuable, le délinquant, l'enfant) n'est souvent pas la même personne que le principal politique qui
autorise le budget. *Creating Public Value: Strategic Management in Government* de Moore (Harvard
University Press, 1995) fournit la discipline manquante : un gestionnaire devrait être capable
d'énoncer (1) quelle valeur publique son initiative crée, (2) d'où viennent sa légitimité et son
financement pour la poursuivre — un ministre, un conseil, un mandat, une subvention — et (3) si son
organisation peut effectivement la délivrer avec les personnes, la technologie et les processus dont
elle dispose. Un programme qui obtient un bon score sur seulement un ou deux des trois volets du
triangle n'est pas encore justifié, aussi bien intentionné soit-il.

Cela importe concrètement car la plupart des échecs logiciels du secteur public ne sont pas des échecs
technologiques. Un système peut être techniquement excellent et opérationnellement livrable et pourtant
échouer parce que personne dans l'environnement légitimant — ministres, comités de surveillance, public
— ne voulait réellement la chose qu'il optimise. Le service numérique Universal Credit et le NHS
National Programme for IT sont tous deux cités dans la littérature britannique d'administration
publique comme des cas où les volets opérationnel et de légitimité du triangle étaient en décalage avec
le volet mission.

## Le calcul

La valeur publique est un cadre, pas une formule, mais elle structure des dossiers d'investissement
autrement vagues en trois questions testables :

```
Strategic triangle test — proceed only if all three hold:

1. Legitimacy and support: Who has authorized this, and does the authorizing
   environment (legislature, minister, council, board, public opinion) still
   back it as resources are committed?

2. Public value: What specific, describable good does this produce for
   citizens or society — safety, health, opportunity, trust, fairness —
   and for whom?

3. Operational capacity: Can the organization actually deliver it with
   current staff, technology, partners, and legal authority — or a
   credible plan to acquire them?
```

Une initiative faible échoue typiquement sur au moins un volet : techniquement livrable mais sans
mandat (un projet pilote de partage de données que personne n'a approuvé) ; populaire mais non livrable
(un service numérique promis sans capacité d'ingénierie) ; ou autorisée et livrable mais vide de valeur
(un tableau de bord que personne n'utilise).

## Exemple chiffré

**Collectivité locale** : une équipe numérique de conseil propose un outil de tri par IA pour les
demandes d'aide au logement.

- *Légitimité* : le cabinet du conseil a approuvé une stratégie numérique en priorité, mais les élus
  responsables de la sécurité sociale n'ont pas spécifiquement approuvé la prise de décision automatisée
  — un vide, pas un feu vert.
- *Valeur publique* : un traitement plus rapide (bénéfice affirmé : de 10 jours à 2 jours) n'est une
  valeur réelle que si les demandeurs ne sont pas refusés à tort ; l'affirmation de valeur doit inclure
  l'exactitude, pas seulement la vitesse.
- *Capacité opérationnelle* : le conseil dispose d'un seul data scientist et d'aucun processus de
  surveillance de modèle, de sorte que le délai de 2 jours annoncé n'est actuellement pas livrable au
  taux d'erreur affiché.

Deux volets sur trois échouent. Le cadre de Moore dit : ne pas procéder tel que cadré — d'abord obtenir
une autorisation explicite pour les décisions automatisées et construire une capacité de surveillance,
sinon la « valeur publique » affirmée dans le dossier d'affaires est fictive.

**Gouvernement central** : le service de déclaration en ligne d'une administration fiscale a une forte
légitimité (mandat statutaire) et une forte capacité opérationnelle (une équipe existante livre de façon
fiable) mais une faible valeur publique si l'adoption est faible parce que les personnes exclues
numériquement — voir [inclusion numérique](../digital-inclusion/) — sont poussées vers un canal
qu'elles ne peuvent pas utiliser. Le triangle expose ce qu'un tableau de bord axé uniquement sur la
délivrance cacherait.

## Lien avec l'ingénierie logicielle

La valeur publique est le concept parapluie sous lequel se place tout ce dépôt : le
[rapport qualité-prix](../value-for-money/) fournit le test économie/efficience/efficacité pour savoir
si les ressources ont été bien utilisées ; le
[coût d'opportunité dans les dépenses publiques](../opportunity-cost-in-public-spending/) chiffre ce
que l'argent aurait pu faire d'autre ; et l'
[additionnalité et le poids mort](../additionality-and-deadweight/), le
[déplacement et l'attribution](../displacement-and-attribution/), et l'
[analyse contrefactuelle](../counterfactual-analysis/) testent ensemble si la valeur affirmée est
réelle plutôt que supposée. Pour les ingénieurs, le triangle stratégique est un pré-mortem utile pour
toute décision de produit du secteur public :

- Avant de cadrer une fonctionnalité, demandez qui l'a autorisée et si cette autorisation tient
  toujours — une fonctionnalité construite pour un ministre qui est depuis parti peut avoir
  silencieusement perdu son volet de légitimité.
- Traitez « pouvons-nous le construire » et « devrions-nous le construire » comme des questions
  véritablement distinctes ; la capacité d'ingénierie ne répond qu'au troisième volet du triangle.
- Les documents d'exigences de produit pour les services publics devraient énoncer explicitement
  l'affirmation de valeur publique, pas seulement l'histoire utilisateur, car la valeur utilisateur et
  la valeur publique ne sont pas toujours la même chose (voir
  [résultats et réalisations](../outcomes-vs-outputs/)).

## Pièges à éviter

- **Traiter la capacité opérationnelle comme une justification suffisante.** « Nous pouvons le
  construire » ne répond qu'à un seul volet du triangle ; les équipes à forte capacité de délivrance
  livrent couramment des choses que personne n'a autorisé vouloir et qui ne créent aucun bien public
  descriptible.
- **Confondre légitimité et légalité.** Un programme peut être légal et pourtant manquer du soutien
  politique et public nécessaire pour le maintenir durant une phase de délivrance difficile ; une
  couverture juridique n'est pas la même chose qu'un mandat.
- **Supposer que la valeur publique est ce que le ministère commanditaire affirme qu'elle est.** Le
  modèle de Moore exige que l'affirmation de valeur soit testable au regard des intérêts réels des
  citoyens, et non simplement affirmée par le bailleur — sinon le cadre s'effondre en
  auto-certification.

## Sources

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
