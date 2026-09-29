# Coût du délai dans les programmes publics (CoD)

Le coût du délai (Cost of Delay, CoD) est la valeur publique perdue par unité de temps pendant
laquelle un programme, un service ou un changement de système n'est *pas encore* délivré. C'est
l'indicateur passerelle maître de ce chapitre : il convertit « la mise en service a glissé de six mois »
en livres par semaine, ou en WELLBY par semaine, de sorte que le délai puisse être débattu dans la même
monnaie que le dossier d'affaires lui-même.

## Pourquoi c'est important

La règle de Reinertsen — « si vous ne devez quantifier qu'une seule chose, quantifiez le coût du
délai » — se transpose presque sans changement au secteur public, car les programmes publics y sont
exposés de manière inhabituelle : les dossiers d'affaires sont approuvés sur la base d'un flux de
bénéfices prévisionnel, mais ce flux ne commence à couler qu'à la mise en service, et chaque semaine de
glissement est une semaine de valeur perdue que personne ne chiffre dans le registre des risques.
L'examen répété par le National Audit Office du déploiement d'Universal Credit (voir ses rapports
« Rolling Out Universal Credit », <https://www.nao.org.uk/>) illustre ce schéma : le glissement de
calendrier était suivi et rapporté, mais le coût en livres par semaine du fait de *ne pas encore*
délivrer le système réformé à la prochaine tranche de demandeurs était rarement présenté comme un
chiffre phare, alors même que c'est le chiffre qui aurait dû piloter la priorisation et l'escalade.
Sans un chiffre de CoD, un programme retardé ressemble à un problème de calendrier pour le comité de
délivrance ; avec un tel chiffre, c'est un problème d'érosion de valeur pour le comptable ministériel.

## Le calcul

```
CoD = benefit per unit time forgone while undelivered   (£/week or WELLBYs/week)

Total delay loss = CoD × delay duration

Benefit streams to sum for public programmes:
  cash-releasing savings   (fraud/error reduction, avoided temporary costs)
+ non-cash capacity freed  (caseworker/officer hours × loaded cost)
+ wellbeing benefit        (WELLBYs × £13,000/WELLBY, HMT Green Book
                             wellbeing supplementary guidance, 2019 prices)
```

Pour les services destinés aux citoyens, exprimez le résultat en bien-être autant qu'en argent — voir
[années de vie ajustées sur le bien-être](../wellbeing-adjusted-life-years/) pour l'unité sous-jacente,
et [coût d'opportunité dans les dépenses publiques](../opportunity-cost-in-public-spending/) pour ce
que la livre retardée aurait pu financer par ailleurs.

## Exemple chiffré

**Collectivité locale** : une modernisation du système d'aide au logement réduit les trop-perçus
d'erreur de 150 £/dossier/an sur 20 000 dossiers actifs.

```
Annual benefit = 150 × 20,000 = £3,000,000/year
CoD = 3,000,000 / 52 ≈ £57,700/week
A 12-month implementation delay costs 52 × 57,700 ≈ £3,000,000 in avoidable error.
```

**Agence du gouvernement central** : un service d'évaluation des prestations d'invalidité, délivré
avec six mois (26 semaines) de retard sur le prévu, signifie que 200 000 demandeurs par an attendent
en moyenne trois semaines de plus pour une décision. Chaque semaine supplémentaire d'incertitude
financière est modélisée comme un effet de −0,0018 WELLBY (point de satisfaction de vie) :

```
WELLBY loss per claimant = 3 × 0.0018 = 0.0054
Annual WELLBY loss = 200,000 × 0.0054 = 1,080 WELLBYs/year
CoD_wellbeing = 1,080 / 52 ≈ 20.8 WELLBYs/week
CoD_money = 20.8 × £13,000 ≈ £270,000/week of wellbeing value
```

Un retard de 26 semaines « coûte » donc environ 540 WELLBY — soit environ 7 millions de livres selon la
valorisation du bien-être du Green Book — ce qui reformule une date de mise en service manquée comme un
événement de bien-être citoyen, et non comme une simple note de bas de page de gestion de projet.

## Lien avec l'ingénierie logicielle

Le CoD est ce qui rend les [indicateurs DORA](../dora-metrics-for-public-value/) et les
[indicateurs de flux](../flow-metrics-in-government-delivery/) financièrement lisibles : le délai de
traitement dans le pipeline × le CoD, c'est de l'argent (ou du bien-être) consumé dans des files
d'attente avant même d'atteindre un citoyen. Concrètement :

- **Priorisation** : classez un carnet de tâches par CoD ÷ durée plutôt que par ancienneté des parties
  prenantes — l'analogue en ingénierie logicielle de l'exigence du Green Book d'évaluer les options sur
  la valeur, et non sur qui la demande.
- **Marchés publics** : un cycle de marché-cadre de 12 à 18 mois a un CoD ; le chiffrer change
  l'argumentaire d'urgence en faveur de voies accélérées, et alimente directement les décisions de
  [construction ou achat](../build-vs-buy-in-government/) où le délai de mise en valeur est un facteur
  décisionnel.
- **Dossier de bénéfices** : chaque chiffre de CoD cité lors de l'approbation devrait réapparaître lors
  de la [réalisation des bénéfices](../benefits-realization/) — si le coût du délai était réel, le
  bénéfice accéléré devrait être mesurable après la mise en service.

## Pièges à éviter

- **Supposer un CoD linéaire** : certains services publics ont une valeur en forme d'échéance (une date
  de conformité réglementaire — le CoD bondit à des niveaux de risque d'exécution après la date, proche
  de zéro avant) plutôt qu'un taux hebdomadaire lisse. Classez le profil d'urgence avant de multiplier.
- **Un CoD sur des réalisations dont personne n'a besoin** : le délai n'a un coût que si la chose non
  délivrée a de la valeur ; un système que personne n'utilisera a un CoD nul, quel que soit son retard.
- **Double comptage du délai et de l'actualisation** : le
  [taux d'actualisation social](../social-discount-rate/) valorise déjà le temps sur des horizons
  d'évaluation pluriannuels ; le CoD en est la version opérationnelle intra-horizon, pour les semaines
  et les mois. Utilisez le CoD pour le glissement de calendrier, le décalage de VAN pour le rephasage
  pluriannuel.

## Sources

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
