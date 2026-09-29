# Bases de données de coûts unitaires

Une base de données de coûts unitaires est une bibliothèque de proxys financiers pré-établis et
fondés sur des données probantes pour des résultats sociaux — la valeur du passage du chômage à
l'emploi, celle de la réduction de l'isolement, celle d'un logement stable — qui permettent à un
praticien de monétiser un résultat sans avoir à commander une étude de valorisation sur mesure à
chaque fois. Elles existent pour qu'une petite association rédigeant une candidature de financement
puisse appliquer la même rigueur qu'un cabinet de conseil bien doté, en réutilisant un proxy déjà
établi et publié par quelqu'un d'autre.

## Pourquoi c'est important

L'UK Social Value Bank de HACT, développée avec l'économiste Daniel Fujiwara en s'appuyant sur les
méthodes de [valorisation par le bien-être](../wellbeing-valuation/), et Global Value Exchange, une
base de données ouverte et collaborative de proxys financiers, sont les deux bases les plus
utilisées dans les secteurs tertiaire et public au Royaume-Uni. Toutes deux existent parce que le
travail de valorisation sous-jacent — la [valorisation par le bien-être](../wellbeing-valuation/) et
la [valorisation par préférences déclarées](../stated-preference-valuation/) — est coûteux,
méthodologiquement exigeant et long à mener de zéro pour chaque projet. Une bibliothèque de proxys
partagée et publiée transforme ce qui serait un exercice de recherche de plusieurs mois en une
simple consultation, ce qui explique précisément pourquoi ces bases comptent à la fois pour les
calculs de [retour social sur investissement](../social-return-on-investment/) et pour les
évaluations de candidatures dans le cadre du [Social Value Act](../social-value-act/) : sans elles,
une monétisation rigoureuse ne serait accessible qu'aux organisations assez grandes pour commander
leurs propres études.

## Le calcul

Une base de données de coûts unitaires ne calcule rien elle-même ; elle fournit une donnée d'entrée
à un calcul effectué ailleurs :

```
Financial proxy value = market price, OR shadow price, OR wellbeing valuation,
                         OR stated-preference value
                         for a defined unit of outcome change
                         (e.g. "per person moving from unemployment to employment, per year")

Applied value = number of outcomes achieved × unit proxy value
```

Voir [tarification fictive](../shadow-pricing/) pour la façon dont un proxy est construit en
l'absence de prix de marché, et [retour social sur investissement](../social-return-on-investment/)
pour la manière dont la valeur appliquée alimente ensuite un ratio après ajustements pour effet
d'aubaine et attribution.

## Exemple chiffré

**Association caritative (SROI d'un service de parrainage amical)** : une entrée de base de données
de coûts unitaires pour « réduction de l'isolement » donne un proxy illustratif de 1 100 £ par
personne et par an. Appliqué à 80 bénéficiaires : 80 × 1 100 £ = 88 000 £ de valeur brute. Si la même
base comporte aussi un proxy pour « amélioration du bien-être mental » qui repose sur un item
d'enquête de bien-être qui se recoupe, empiler les deux proxys pour les mêmes 80 personnes
compterait deux fois une partie du même changement sous-jacent — la base fournit le chiffre, mais
éviter ce chevauchement relève de la responsabilité de l'analyste.

**Collectivité locale (SROI d'un club de l'emploi)** : une entrée de base de données de coûts
unitaires pour « passage du chômage à un emploi durable » est appliquée à 45 participants avec un
proxy illustratif de 8 500 £ par personne et par an : 45 × 8 500 £ = 382 500 £ de valeur brute, avant
les ajustements pour effet d'aubaine et attribution présentés dans
[retour social sur investissement](../social-return-on-investment/).

## Lien avec l'ingénierie logicielle

Les équipes qui construisent des outils de reporting pour des associations ou des commanditaires ont
intérêt à disposer d'un « catalogue de résultats » interne — un tableau associant chaque résultat
qu'un produit ou service peut raisonnablement revendiquer à un proxy nommé, sa base source, sa date
de publication et un identifiant de version — afin que différentes équipes d'une même organisation
ne choisissent pas chacune une valeur légèrement différente pour le même résultat. Encapsuler les
données ouvertes de Global Value Exchange derrière un service de consultation, en affichant toujours
la source et la date à côté du chiffre, garde le proxy auditable plutôt que d'en faire un nombre
magique enfoui dans une feuille de calcul. Voir
[retour social sur investissement](../social-return-on-investment/) et
[Social Value Act](../social-value-act/) pour les deux principaux endroits où ces proxys sont
utilisés.

## Pièges à éviter

- **Traiter les proxys comme précis.** La plupart des proxys publiés sont des moyennes modélisées
  issues d'études de valorisation par le bien-être, assorties d'intervalles de confiance larges ;
  les citer à la livre près surestime la précision que la recherche sous-jacente permet réellement.
- **Compter deux fois des proxys qui se recoupent.** Combiner des proxys (par exemple « réduction de
  l'isolement » et « amélioration du bien-être mental ») dérivés de constructions d'enquête qui se
  chevauchent valorise deux fois le même changement sous-jacent.
- **Utiliser un proxy hors contexte sans l'ajuster.** Un proxy calibré sur une population nationale
  et une année données, appliqué ailleurs sans ajustement d'inflation ou de contexte, fausse
  silencieusement la valeur obtenue.
- **Ne pas vérifier la provenance.** Global Value Exchange est ouverte et alimentée par la
  communauté, si bien que la qualité des entrées varie selon le contributeur ; vérifiez la source
  sous-jacente avant de citer un chiffre dans une candidature de financement ou une soumission de
  marché public.

## Sources

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — méthodologie fondatrice de
  l'UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
