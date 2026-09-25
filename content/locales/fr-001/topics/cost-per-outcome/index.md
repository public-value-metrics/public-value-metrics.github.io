# Coût par résultat

Le coût par résultat est la dépense totale d'un programme divisée par le nombre de personnes qui
obtiennent un changement défini et significatif dans leur situation — et non le nombre de personnes
qui ont simplement reçu un service. C'est l'indicateur d'efficience le plus tranchant qu'un bailleur ou
une équipe de délivrance puisse utiliser, car il impose une question préalable que la plupart des
associations évitent : qu'est-ce qui, précisément, compte comme un succès ?

## Pourquoi c'est important

Une banque alimentaire peut rapporter deux chiffres très différents à partir des comptes de la même
année. Le coût par colis alimentaire distribué peut être de 15 £. Le coût par foyer qui parvient à la
sécurité alimentaire — n'ayant plus besoin d'aide alimentaire d'urgence, vérifié lors d'un point de
suivi — peut être de 340 £. Les deux sont vrais. Un seul indique à un bailleur si l'argent fonctionne.
L'écart entre les deux est l'écart entre une réalisation et un résultat : un colis remis est une
réalisation ; un foyer qui n'est plus en crise est un résultat. Voir
[résultats et réalisations](../outcomes-vs-outputs/).

Le tiers secteur britannique a passé deux décennies à construire une infrastructure pour imposer cette
distinction. L'approche des « quatre piliers » de New Philanthropy Capital sur l'efficacité caritative
demande explicitement aux organisations d'énoncer leurs résultats avant leurs réalisations, et
Inspiring Impact — le collectif britannique de mesure d'impact soutenu par les bailleurs — publie une
matrice de résultats (Outcomes Matrix) que de nombreuses demandes de subvention exigent désormais des
associations qu'elles remplissent. Le programme de recherche annuel « State of Hunger » du Trussell
Trust, mené avec l'université Heriot-Watt, existe précisément parce que le simple décompte de colis ne
dit rien sur le fait que les personnes échappent ou non à l'insécurité alimentaire.

Le coût par résultat ne signifie quelque chose qu'une fois le contrefactuel fixé : un résultat obtenu
« de toute façon » n'est pas un résultat que le programme a acheté. Voir
[analyse contrefactuelle](../counterfactual-analysis/) et
[déplacement et attribution](../displacement-and-attribution/).

## Le calcul

```
Cost per outcome = Total programme cost / Number of beneficiaries achieving the defined outcome

where:
  Total programme cost   = direct delivery cost + fair share of overhead
  Defined outcome        = a pre-specified, measurable state change
                            (e.g. "food secure at 6-month follow-up",
                            not "received a food parcel")
```

Comparez avec les [bases de données de coûts unitaires](../unit-cost-databases/) (par exemple des
repères de coûts unitaires propres à un secteur) pour juger si un coût par résultat donné est bon,
moyen ou médiocre par rapport à des interventions comparables.

## Exemple chiffré

**Banque alimentaire, une année** :

- Coût total du programme : 450 000 £
- Colis distribués : 30 000
- Coût par colis (un indicateur de réalisation) : 450 000 £ / 30 000 = **15 £**

L'association mène aussi une enquête de suivi à six mois auprès d'un échantillon de foyers, et constate
que 35 % des foyers ayant reçu trois colis ou plus déclarent ne plus avoir besoin d'aide alimentaire
d'urgence et obtiennent un score supérieur au seuil de sécurité alimentaire sur un module d'enquête
standard. Sur les 1 800 foyers ayant reçu trois colis ou plus cette année-là, 630 atteignent ce
résultat.

```
Cost per outcome = £450,000 / 630 = £714 per household achieving food security
```

C'est ce chiffre de 714 £ qu'un bailleur comparant cette association à un projet pilote de transferts
monétaires ou à un service de conseil en endettement devrait utiliser — pas 15 £. Si un programme
comparable de transferts monétaires dans la même région atteint la sécurité alimentaire pour 500 £ par
foyer, la banque alimentaire n'est pas manifestement la voie la plus efficiente vers le même résultat,
même si son coût par colis paraît bon marché.

## Lien avec l'ingénierie logicielle

La plupart des systèmes de gestion de dossiers sont construits pour consigner des réalisations, car ce
sont elles qui se produisent à l'intérieur de la transaction (un colis est remis, un formulaire est
soumis). Les résultats surviennent généralement plus tard, souvent en dehors de la fenêtre de capture
normale du système, et exigent une décision de conception délibérée : construire un mécanisme de suivi
(un déclencheur d'enquête, un flux de reprise de contact, un exercice de liaison de données) comme une
fonctionnalité de premier ordre, et non un ajout de dernière minute pour un rapport annuel. Les
ingénieurs construisant des plateformes de gestion de subventions ou de dossiers pour le secteur
devraient traiter « quel est l'événement de résultat, et comment l'observons-nous » comme une question
d'exigences posée avant que le modèle de données ne soit figé — il est bien plus difficile d'ajouter
après coup un champ de résultat qu'un compteur de réalisations. Voir
[résultats et réalisations](../outcomes-vs-outputs/) et [modèle logique](../logic-model/) pour savoir
comment structurer cette conversation sur les exigences, et
[coût par bénéficiaire](../cost-per-beneficiary/) pour l'indicateur plus rapide et plus grossier
auquel les équipes recourent lorsque le suivi des résultats n'est pas encore construit.

## Pièges à éviter

- **Rapporter des réalisations déguisées en résultats.** « Personnes atteintes » n'est pas « personnes
  aidées ». Si l'indicateur peut être produit par un journal système sans contact de suivi, c'est
  presque certainement une réalisation.
- **Manipulation du dénominateur.** Restreindre la population de résultats à « ceux qui ont terminé le
  programme » élimine discrètement les personnes ayant abandonné — souvent les cas les plus difficiles —
  et gonfle le taux apparent. Indiquez le dénominateur comme étant tous ceux qui ont commencé, pas tous
  ceux qui ont terminé.
- **Absence de contrefactuel.** Compter toute personne ayant atteint le résultat, y compris celles qui
  l'auraient atteint de toute façon, surestime ce que le programme a réellement acheté. Voir
  [analyse contrefactuelle](../counterfactual-analysis/).
- **Comparer des définitions de résultats incompatibles.** « En sécurité alimentaire » mesuré par un
  module d'enquête validé n'est pas comparable à « en sécurité alimentaire » autodéclaré dans un
  formulaire de satisfaction ; un classement de coût par résultat n'est honnête que lorsque les
  définitions de résultats correspondent.

## Sources

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
