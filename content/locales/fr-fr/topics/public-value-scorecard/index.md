# Tableau de bord de la valeur publique

Le tableau de bord de la valeur publique adapte le tableau de bord équilibré (balanced scorecard) de
Robert Kaplan et David Norton de 1992 — conçu pour des entreprises optimisant le profit à travers des
perspectives financière, client, processus interne et apprentissage-croissance — aux organisations dont
le résultat net est une mission, non une marge. Il oblige un organisme public à rapporter sa performance
à travers plusieurs dimensions irréductibles à la fois, plutôt que de tout réduire à un seul chiffre qui
masque les arbitrages.

## Pourquoi c'est important

L'argument original de Kaplan et Norton, dans la Harvard Business Review, était qu'un indicateur
financier unique est un indicateur retardé qui ne dit rien sur *pourquoi* la performance changera le
trimestre prochain. Dans le secteur privé, la solution était quatre perspectives liées. Dans le secteur
public, le « triangle stratégique » de Mark Moore (tiré de *Creating Public Value*, 1995) fournit la
structure équivalente : un service doit simultanément délivrer une **valeur publique** (le résultat de
mission), maintenir une **légitimité et un soutien** (appui politique et public), et être
**opérationnellement faisable** (livrable avec les ressources et capacités réellement disponibles). Le
*Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) de Paul Niven est le
manuel du praticien pour traduire les quatre cases de Kaplan et Norton dans ce triangle — réétiquetant
typiquement le « financier » en « gérance des ressources », plaçant la « mission » en haut plutôt que la
« valeur actionnariale » en bas, et traitant les perspectives client et parties prenantes comme
co-égales plutôt que subordonnées au profit. La raison pour laquelle cela importe pour une équipe de
délivrance est qu'un service numérique public jugé uniquement sur un indicateur financier ou
d'efficience (le coût par transaction, disons) sous-investira systématiquement dans les dimensions de
légitimité et de résultat que cet indicateur financier ne peut pas voir.

## Le calcul

Le tableau de bord de la valeur publique est un cadre, pas une formule, mais sa structure est fixe et
mérite d'être reproduite exactement :

```
Perspective          Public-sector question                    Example indicator
--------------------------------------------------------------------------------
Mission / outcomes    Are we achieving the public value we      Population outcome measure
                       exist to create?                         (see outcomes-vs-outputs)
Stewardship of        Are we using public money efficiently     Cost per outcome, budget
  resources            and within authorized limits?             variance
Customer / user        Are users and citizens able to access    Completion rate, satisfaction
                        and benefit from the service?
Legitimacy / support    Do political principals, oversight       Trust metrics, audit findings,
                        bodies, and the public still back us?    complaints upheld
Internal process /      Do we have the capability and process   Staff turnover, cycle time,
  learning              to keep improving?                       backlog age

A defensible scorecard reports 3–5 indicators per perspective, chosen so that
no single perspective can be gamed without the damage showing up in another.
```

## Exemple chiffré

**Service d'aide sociale aux adultes d'une collectivité locale** : un tableau de bord pour un service
de réhabilitation (soutien à court terme pour aider les personnes à retrouver leur autonomie après un
séjour hospitalier) rapporte :

```
Mission:       68% of service users no longer need ongoing care after 6 weeks (target 65%)
Stewardship:   cost per completed reablement episode = £1,850 (budget assumption £2,000)
Customer:      user satisfaction 82%, average wait for service start 4.1 days
Legitimacy:    3 upheld complaints per 1,000 episodes; adult safeguarding board rates
               service "good"
Process:       staff vacancy rate 14%, average caseload 23 (safe caseload ceiling: 25)
```

Lus isolément, les chiffres de mission et de gérance ressemblent à une histoire de succès simple : sous
le budget et au-dessus de la cible de résultat. Lus avec la ligne de processus, le taux de vacance de
14 % par rapport à un plafond de charge de dossiers de 25 montre que le bon résultat est acheté en
fonctionnant près de niveaux de personnel dangereux — un avertissement que le chiffre de mission seul ne
ferait jamais apparaître, et exactement le mode d'échec qu'invite un KPI à perspective unique (voir
[indicateurs clés de performance du secteur public](../public-sector-kpis/)).

## Lien avec l'ingénierie logicielle

Pour une équipe construisant un tableau de bord interne ou public, le tableau de bord équilibré est un
argument direct contre un widget de « score de santé » unique : construisez un panneau par perspective,
et résistez à la pression produit de les synthétiser en un feu tricolore, car c'est précisément à
l'étape de synthèse que l'information d'arbitrage est détruite. Cela se cale aussi proprement sur les
structures d'OKR des équipes produit : un OKR de mission sans OKR de gérance ou de processus apparié
reproduit le mode d'échec à indicateur unique contre lequel Kaplan et Norton écrivaient en 1992. Voir
[valeur publique](../public-value/) pour la théorie sous-jacente de Moore sur ce que la case « mission »
devrait réellement contenir, et
[indicateurs de confiance et de légitimité](../trust-and-legitimacy-metrics/) pour la façon de peupler
la perspective de légitimité avec des indicateurs réels et sourcés plutôt qu'un indicateur de
substitution que personne ne peut défendre.

## Pièges à éviter

- **Réduire le tableau de bord à un seul score** : faire la moyenne de quatre perspectives en un seul
  chiffre réintroduit exactement le problème — un mauvais score de légitimité masqué par un bon score
  de gérance — que le tableau de bord existe pour prévenir.
- **Copier la perspective « financière » du secteur privé sans la modifier** : la perspective de
  gérance d'un organisme public porte sur le respect de budgets autorisés, souvent sanctuarisés, pas sur
  la maximisation des recettes — le réétiquetage de Niven n'est pas cosmétique.
- **Choisir des indicateurs que l'équipe propriétaire du tableau de bord peut faire bouger
  unilatéralement** : un indicateur de légitimité issu de la même équipe qu'il juge (le traitement
  auto-déclaré des réclamations, par exemple) n'est pas une preuve indépendante.
- **Construire le tableau de bord une seule fois et ne jamais revoir les pondérations ou indicateurs** :
  Kaplan et Norton envisageaient une revue de stratégie annuelle ; un tableau de bord figé pendant des
  années dérive de la mission qu'il était censé suivre.

## Sources

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
