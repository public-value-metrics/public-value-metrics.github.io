# Alternatives au PIB

Les alternatives au PIB sont des indicateurs construits pour capturer ce que le produit intérieur brut
ignore structurellement : le travail de soin non rémunéré, l'épuisement environnemental, la répartition
des revenus, et la question de savoir si la croissance améliore réellement les vies. Les plus connus
sont l'Indicateur de progrès véritable (Genuine Progress Indicator, GPI) et l'indice de Bonheur national
brut (Gross National Happiness, GNH) du Bhoutan ; l'argument en faveur de les prendre au sérieux a été
formulé de la manière la plus influente par la Commission Stiglitz-Sen-Fitoussi de 2009. Pour les
ingénieurs qui construisent des tableaux de bord ou des systèmes d'indicateurs gouvernementaux, « quel
chiffre compte comme progrès » est une décision de conception aux conséquences réelles sur ce qui est
financé.

## Pourquoi c'est important

Simon Kuznets, qui a construit les comptes nationaux américains dans les années 1930, a averti le
Congrès en 1934 que « le bien-être d'une nation ne peut guère être déduit d'une mesure du revenu
national » — une mise en garde que le chiffre a presque immédiatement dépassée. Le PIB compte le
nettoyage d'une marée noire comme de la croissance et la garde d'enfants non rémunérée d'un parent comme
rien ; il ne distingue pas les dépenses qui construisent un bien-être durable des dépenses qui ne font
que compenser un dommage déjà causé. La Commission Stiglitz-Sen-Fitoussi, convoquée par le président
français Nicolas Sarkozy et présidée par Joseph Stiglitz, Amartya Sen et Jean-Paul Fitoussi, a rapporté
en 2009 que les systèmes statistiques devraient déplacer l'accent « de la mesure de la production
économique vers la mesure du bien-être des personnes », et que la soutenabilité devrait être suivie
séparément du bien-être actuel plutôt que fondue dans un seul chiffre. Les alternatives au PIB mettent
cette recommandation en pratique. Le GPI, développé par le groupe de réflexion Redefining Progress dans
les années 1990 et s'appuyant sur la Measure of Economic Welfare de William Nordhaus et James Tobin de
1972, part de la consommation personnelle (comme le PIB) puis ajoute les bénéfices non marchands que le
PIB omet (travail domestique, bénévolat) tout en soustrayant les coûts défensifs et d'épuisement
(criminalité, pollution, trajets domicile-travail, prélèvement de ressources) que le PIB compte à tort
comme positifs. L'indice GNH du Bhoutan, administré par le GNH Centre Bhutan
(<https://www.gnhcentre.bt/>), va plus loin encore, remplaçant la croissance comme objectif
constitutionnel déclaré du pays : il agrège 33 indicateurs répartis sur 9 domaines — bien-être
psychologique, santé, éducation, usage du temps, diversité culturelle, gouvernance, vitalité
communautaire, diversité écologique et niveau de vie — en un score unique fondé sur la suffisance,
utilisé directement pour filtrer les propositions de politique gouvernementale.

## Le calcul

```
GPI = personal consumption expenditure
      + non-market benefits (household labour, volunteering, higher education)
      − defensive and social costs (crime, pollution, commuting, family breakdown)
      − depletion of natural and social capital (resource drawdown, farmland loss)

GNH sufficiency score, per domain:
  a person is "sufficient" in a domain once they clear its threshold on each indicator
  Happiness Index = (% of population sufficient in ≥ 6 of 9 domains)
                    + (weighted average shortfall of the "not-yet-happy" minority)
```

## Exemple chiffré

**Région, GPI** : la consommation personnelle est de 50 milliards de dollars. Ajoutez une valeur
estimée du travail domestique et bénévole de 12 milliards de dollars (taux de salaire au coût de
remplacement — voir [valeur du temps bénévole](../volunteer-time-value/)). Soustrayez les coûts annuels
estimés de la congestion des trajets domicile-travail (3 milliards $), de la criminalité (4 milliards $)
et de l'épuisement des ressources à long terme (6 milliards $) :

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

Si le PIB est passé de 50 à 55 milliards de dollars cette année-là (+10 %), mais que les coûts
défensifs et d'épuisement ont crû plus vite que la consommation, le GPI peut baisser même quand le PIB
augmente — c'est l'« hypothèse du seuil » que citent les chercheurs du GPI pour les économies à haut
revenu depuis environ les années 1970, période où la croissance a continué de grimper alors que le GPI
plafonnait.

**Citoyen, GNH** : un répondant franchit le seuil de suffisance dans 7 des 9 domaines (santé,
éducation, niveau de vie, vitalité communautaire, diversité culturelle, diversité écologique, usage du
temps) mais n'atteint pas le seuil en bien-être psychologique et en gouvernance. Comme 7 ≥ 6, il est
compté comme « heureux » dans le décompte global ; l'indice suit séparément la profondeur de ses deux
insuffisances afin qu'une réussite de justesse ne soit pas indiscernable d'une réussite confortable.

## Lien avec l'ingénierie logicielle

- Un tableau de bord d'indicateurs modélisé uniquement sur le débit ou la dépense (le schéma du PIB)
  manquera systématiquement le dommage causé en générant ce débit — un volume de tickets d'assistance
  traité comme de l'« engagement » plutôt que comme de la « détresse utilisateur » est la version
  livraison-logicielle de compter une marée noire comme de la croissance.
- La comptabilité de type GPI est un schéma d'audit utile pour toute suite d'
  [indicateurs clés du secteur public](../public-sector-kpis/) : pour chaque indicateur de réalisation
  phare, demandez quel coût défensif il occasionne discrètement (reprise, réponse aux incidents,
  épuisement professionnel) et retranchez-le, de la même façon que le GPI retranche les dépenses
  défensives de la consommation.
- La méthode de suffisance par domaine du GNH — réussite/échec par dimension, puis agrégation — est
  structurellement la même technique que l'
  [analyse multicritère](../multi-criteria-decision-analysis/) et mérite d'être réutilisée partout où
  un score scalaire unique masquerait une dimension d'échec critique.

## Pièges à éviter

- **Traiter le GPI comme un compte national précis** — contrairement au PIB, le GPI n'a pas de
  méthodologie standardisée unique ; différentes études pondèrent différemment les coûts de trajets, le
  temps bénévole ou l'épuisement des ressources, de sorte que les comparaisons de GPI entre études sont
  bien moins fiables que les comparaisons de PIB entre pays.
- **Importer le GNH tel quel dans une culture politique différente** — ses pondérations de domaines et
  ses seuils de suffisance ont été fixés par une consultation bhoutanaise ; copier le chiffre sans le
  processus de consultation sous-jacent produit un indicateur creux en qui personne n'a confiance.
- **Supposer qu'une alternative au PIB remplace l'évaluation coût-bénéfice** — ce sont des indicateurs
  diagnostiques à l'échelle de l'économie, pas des outils de décision pour un programme unique ; utilisez
  plutôt l'[analyse coût-bénéfice sociale](../social-cost-benefit-analysis/) pour cela.

## Sources

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
