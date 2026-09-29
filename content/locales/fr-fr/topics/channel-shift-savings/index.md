# Économies de report de canal (Channel Shift)

Les économies de report de canal sont la réduction de coût projetée en déplaçant un volume de
transactions hors des canaux coûteux — téléphone, guichets en face à face, courrier papier — vers un
libre-service numérique bon marché. C'est le moteur financier du « numérique par défaut », et aussi la
ligne budgétaire du dossier d'affaires la plus susceptible d'être erronée, car l'hypothèse sur laquelle
elle repose — que les canaux hors ligne se réduisent à mesure que l'adoption numérique augmente —
n'est vraie que parfois.

## Pourquoi c'est important

L'arithmétique paraît imparable si l'on utilise les chiffres de
[coût par transaction](../cost-per-transaction/) du Digital Efficiency Report : reporter un million de
transactions d'une visite en face à face à 8,62 £ vers une transaction numérique à 0,15 £ représente
une économie de plus de 8 millions de livres. Mais une économie ne devient un montant réellement
libéré pour être redéployé que si la *capacité fixe* du canal en déclin est effectivement démantelée —
les postes du centre d'appels, le personnel de guichet, les minutes du contrat téléphonique — et les
programmes numériques des collectivités locales ont constaté à plusieurs reprises que le volume total
de contacts ne diminue pas au même rythme que l'adoption numérique. Les recherches menées dans le cadre
de programmes de transformation numérique des collectivités locales et par des organismes tels que
Socitm et la Local Government Association ont documenté un schéma récurrent : les canaux numériques
attirent un contact véritablement nouveau (des citoyens qui n'auraient pas téléphoné ou ne se
seraient pas déplacés le font désormais, parce que c'est plus facile), et une part significative des
transactions « numériques » échoue en cours de route et génère quand même un appel téléphonique — de
sorte que le volume d'appels diminue bien moins que ne le laisserait supposer le pourcentage d'adoption
numérique, parfois sans diminuer du tout en valeur absolue, même si sa *part* du contact total décline.

## Le calcul

```
Gross channel-shift saving = shifted volume × (cost_old_channel − cost_digital)

Net (realized) saving = gross saving
                       − new/shadow demand created by the easier channel
                       − failure-demand cost (digital failures that
                         still generate a phone call or counter visit)
                       − cost of unretired fixed capacity (a call
                         centre can only shed staff in discrete units;
                         a 15% volume drop rarely lets you cut 15% of
                         headcount)

Realization threshold: savings are only bankable once volume drops
below the level the old channel can staff at its next-smaller discrete
capacity step (e.g. losing one full shift, one full desk, one
contracted headcount band)
```

## Exemple chiffré

**Service de renouvellement de macaron bleu d'un conseil de comté** : 60 000 renouvellements/an,
auparavant 100 % par téléphone/papier à 6,40 £ par transaction. Un nouveau service numérique est lancé
et atteint 65 % d'adoption numérique en un an, à 0,30 £ par transaction numérique.

```
Naive (gross) saving calculation:
  39,000 shifted × (£6.40 − £0.30) = £237,900/year

What actually happened, per the council's contact-centre data:
  Phone volume fell from 60,000/year to 46,000/year (−23%, not −65%)
  because: 9,000 digital journeys failed and generated a follow-up call
           (failure-demand leakage), and 4,000 people who previously
           didn't renew at all now do, having found it easy online
           (shadow demand — a genuine access improvement, but not a
           saving)

  Phone contact centre is staffed in bands of 8,000 calls/FTE;
  a 14,000-call drop (60,000 → 46,000) releases 1.75 FTE, rounded
  down in practice to 1 FTE actually redeployed = £34,000/year

Realized saving = £34,000/year plus the digital-channel build/run
  cost avoided on 39,000 transactions ≈ £34,000 + (39,000 × £0.30
  digital cost already counted) — a fraction of the £237,900 headline,
  though the service is still unambiguously better for users.
```

## Lien avec l'ingénierie logicielle

La leçon pour l'ingénierie est que les économies de report de canal se réalisent par des décisions
*opérationnelles* (plannings d'équipes, démantèlement, renégociation de contrats), pas par la livraison
logicielle — une équipe peut satisfaire chaque point du
[référentiel de service numérique](../digital-service-standard/) et pourtant produire une économie
nette nulle si personne ne démantèle la capacité fixe de l'ancien canal. Instrumenter la demande
d'échec (à quel endroit du parcours numérique les utilisateurs abandonnent et ce qu'ils font ensuite)
est un problème d'analyse d'entonnoir tout à fait résoluble, et c'est l'action à plus fort effet de
levier qu'une équipe d'ingénierie puisse entreprendre pour protéger le dossier d'économies ; c'est
aussi le lien direct avec le [coût par transaction](../cost-per-transaction/), que la demande d'échec
gonfle discrètement. Voir [réalisation des bénéfices](../benefits-realization/) pour la discipline plus
large consistant à vérifier que les économies d'un dossier d'affaires se concrétisent réellement, et
[inclusion numérique](../digital-inclusion/) pour comprendre pourquoi le canal hors ligne ne peut
généralement pas, et ne devrait pas, être totalement démantelé.

## Pièges à éviter

- **Supposer une substitution de canal à un pour un** : modéliser l'adoption numérique comme une
  soustraction directe du volume téléphone/guichet, en ignorant la demande fantôme et la fuite de
  demande d'échec documentées par la recherche des collectivités locales sur le report de canal.
- **Comptabiliser les économies brutes avant le démantèlement** : inscrire l'économie dans le dossier
  d'affaires l'année où l'adoption augmente, et non l'année (si elle survient) où la capacité de
  l'ancien canal est effectivement réduite.
- **Ignorer la nature en escalier des coûts de personnel** : une baisse de volume de 20 % se traduit
  rarement par une baisse de coût de 20 %, car les centres d'appels et les guichets sont dotés en
  personnel par tranches discrètes, non de façon continue.
- **Traiter la demande fantôme comme du gaspillage** : un nouveau contact provenant d'utilisateurs
  auparavant exclus ou dissuadés constitue une réelle augmentation de la
  [valeur publique](../public-value/), pas une erreur de modélisation — il devrait être rapporté comme
  un résultat d'accès, et non retranché comme du bruit.

## Sources

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
