# Ratio de frais généraux caritatifs (Charity Overhead Ratio)

Le ratio de frais généraux caritatifs est la dépense administrative et de collecte de fonds exprimée
en pourcentage de la dépense totale. C'est le chiffre le plus demandé en matière de dons caritatifs —
utilisé par les donateurs, les organismes de surveillance et même certains bailleurs comme indicateur
d'efficience — et c'est aussi l'un des indicateurs d'efficience les plus profondément discrédités du
secteur, les organisations mêmes qui l'ont popularisé l'ayant publiquement renié en 2013.

## Pourquoi c'est important

Le 17 juin 2013, GuideStar, la BBB Wise Giving Alliance et Charity Navigator — les trois plus grands
organismes américains de notation et d'information sur le secteur associatif, dont les propres
notations historiques avaient contribué à ancrer le ratio de frais généraux comme raccourci pour
qualifier la qualité d'une association — ont publié une lettre ouverte conjointe aux donateurs
américains, intitulée « The Overhead Myth », déclarant explicitement que le ratio de frais généraux
est un mauvais indicateur de la performance d'une association et exhortant les donateurs à regarder
plutôt la transparence, la gouvernance et les résultats. C'était un renversement direct de la part des
institutions mêmes qui avaient bâti la culture des donateurs autour de ce ratio pendant une décennie.

Le problème sous-jacent est structurel, pas seulement une question d'image : un faible ratio de frais
généraux peut être obtenu en sous-investissant précisément dans ce qui rend une association efficace —
un système correct de gestion des dossiers, du personnel formé, un suivi et une évaluation — car ces
postes sont souvent comptabilisés en « administration » plutôt qu'en « programme ». Une association qui
prive son back-office de moyens pour afficher 5 % de frais généraux peut être moins capable de produire
des résultats qu'une autre qui consacre 20 % à une organisation correctement dotée. En Angleterre et au
Pays de Galles, les orientations de la Charity Commission à l'intention des administrateurs
déconseillent d'utiliser un pourcentage unique de frais généraux comme test d'efficience, demandant
plutôt aux administrateurs de rendre compte de ce que l'association a accompli au regard de ses
objectifs — voir les exigences de reporting SORP évoquées dans
[coût par bénéficiaire](../cost-per-beneficiary/).

## Le calcul

```
Overhead ratio = (Administrative cost + Fundraising cost) / Total expenditure

Common variants:
  Programme ratio        = Programme (direct charitable) spend / Total expenditure
                          = 1 − overhead ratio
  Fundraising efficiency  = Fundraising cost / Funds raised
```

Aucune de ces formules ne contient la moindre information sur les résultats obtenus. Une association
peut minimiser chacune d'elles tout en échouant auprès de chaque bénéficiaire ; voir
[coût par résultat](../cost-per-outcome/) pour l'indicateur qui s'intéresse réellement à l'efficacité
de l'argent dépensé.

## Exemple chiffré

Deux associations, même dépense totale :

- **Association A** : 1 000 000 £ de dépense totale, 80 000 £ d'administration et de collecte de
  fonds → ratio de frais généraux de 8 %. Elle n'a aucune fonction de suivi-évaluation, un seul agent
  financier surchargé et aucun système de gestion des dossiers ; le turnover du personnel est élevé et
  les données de résultats ne sont pas collectées.
- **Association B** : 1 000 000 £ de dépense totale, 220 000 £ d'administration et de collecte de
  fonds → ratio de frais généraux de 22 %. Elle finance une petite équipe d'évaluation, un système de
  gestion des dossiers qui capture le suivi des résultats, et une formation adéquate à la sauvegarde
  des personnes vulnérables.

Un donateur qui sélectionne uniquement sur le ratio de frais généraux choisit A et rejette B — le
contraire de ce que montrerait probablement l'évidence du [coût par résultat](../cost-per-outcome/),
car B est la seule des deux à être en mesure de démontrer, ou d'améliorer, ses résultats réels.

## Lien avec l'ingénierie logicielle

Les logiciels de finance et de reporting de subventions du secteur codent souvent en dur la répartition
frais généraux/programme comme un champ catégoriel sur chaque ligne de coût, car c'est ce qu'exigent
encore les régulateurs et certains bailleurs dans les déclarations statutaires. Les ingénieurs qui
construisent ces systèmes devraient traiter cette exigence comme une obligation de conformité, et non
comme un signal de conception indiquant que le ratio de frais généraux est l'indicateur à mettre en
avant sur un tableau de bord ; il faut l'associer, partout où il est affiché, à un indicateur fondé sur
les résultats afin qu'un lecteur ne puisse pas interpréter le ratio de frais généraux isolément. Voir
[retour sur investissement du donateur](../donor-return-on-investment/) pour l'indicateur qui devrait
figurer à ses côtés, et [rapport qualité-prix](../value-for-money/) pour l'argument équivalent, côté
secteur public, contre les indicateurs d'efficience à ratio unique.

## Pièges à éviter

- **Utiliser le ratio de frais généraux comme seuil d'exclusion.** Rejeter toute association
  au-dessus d'un seuil arbitraire (par exemple « pas plus de 15 % de frais généraux ») pénalise
  systématiquement les organisations correctement dotées et bien évaluées, et récompense le
  sous-investissement.
- **Classer à tort un coût de délivrance directe en frais généraux, ou l'inverse** — les conventions
  comptables sur ce qui relève du « programme » par opposition à l'« administration » varient
  suffisamment d'une association à l'autre pour que les ratios ne soient souvent même pas comparables
  à première vue.
- **Supposer qu'un faible taux de frais généraux implique un fort impact.** Les deux sont, au mieux,
  non corrélés ; voir l'argument central de la lettre « Overhead Myth » de 2013.
- **Ignorer que certaines stratégies légitimes exigent des frais généraux plus élevés à court terme.**
  Une phase de renforcement des capacités ou de développement organisationnel augmente
  intentionnellement la dépense administrative pour améliorer la délivrance ultérieure.

## Sources

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
