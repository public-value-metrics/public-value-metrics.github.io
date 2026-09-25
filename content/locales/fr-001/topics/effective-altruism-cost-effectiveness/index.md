# Coût-efficacité de l'altruisme efficace (Effective Altruism)

Le raisonnement de coût-efficacité de l'altruisme efficace (effective altruism, EA) classe les
interventions caritatives selon la quantité de bien produite — le plus souvent exprimée en vies sauvées,
ou en santé gagnée, par dollar dépensé — et oriente l'argent vers l'intervention qui achète le plus de
bien à la marge. GiveWell est le praticien le plus influent de ce domaine : il publie des estimations
explicites et régulièrement mises à jour du coût par vie sauvée et du coût par résultat pour une courte
liste d'« associations les mieux notées », et recommande aux donateurs de donner à celle qui dispose
actuellement d'une capacité d'absorption de financement supplémentaire au meilleur taux.

## Pourquoi c'est important

GiveWell énonce le coût-efficacité comme le critère principal de sa méthodologie publiée : il recherche
des interventions étayées par des preuves, estime leur coût-efficacité dans une unité commune, et les
classe à travers des causes totalement sans rapport entre elles — moustiquaires contre le paludisme,
supplémentation en vitamine A, transferts monétaires, incitations financières à la vaccination — sur cet
axe unique. C'est un transfert direct du raisonnement de type QALY/DALY de l'économie de la santé vers
la philanthropie : tout comme un système de santé se demande « combien de QALY par livre à la marge »,
GiveWell se demande « combien de vies, ou d'années de vie, par dollar à la marge », et traite les causes
comme substituables une fois converties dans cette unité commune. Voir
[analyse coût-efficacité dans le secteur public](../cost-effectiveness-analysis-in-government/) pour le
cousin côté secteur public de ce cadre de raisonnement.

Le chiffre GiveWell le plus cité concerne l'Against Malaria Foundation (AMF), qui distribue des
moustiquaires imprégnées d'insecticide. Dans l'exemple chiffré publié par GiveWell (tiré de données de
financement de 2020), environ 4 500 $ ont financé suffisamment de moustiquaires pour éviter un décès,
après prise en compte d'une utilisation imparfaite des moustiquaires, de la mortalité de référence sans
moustiquaires, et d'un ajustement pour le « funging » — la possibilité que l'AMF aurait de toute façon
reçu une partie de ce financement d'autres donateurs. GiveWell précise explicitement que ce chiffre
évolue dans le temps et selon les régions à mesure que la prévalence du paludisme, le coût des
moustiquaires et les besoins de financement changent, et que le coût pour sauver une vie devrait
généralement augmenter avec le temps à mesure que les opportunités les moins chères sont saisies en
premier ; c'est une illustration chiffrée de la méthode, pas un prix fixe.

## Le calcul

```
Cost-effectiveness = Cost of intervention / Units of good produced
                    (e.g. $ per life saved, $ per DALY averted, $ per QALY)

GiveWell's chain for a bednet programme, illustratively:
  $ per net purchased and delivered
    ÷ share of nets actually used
    ÷ people protected per net
    × baseline annual mortality without nets
    × reduction in mortality attributable to net use (from RCT evidence)
    × years of protection per net
    ÷ adjustment for funging (money displacing other donors' funding)
  = $ per life saved (net of counterfactual funding effects)
```

Cette chaîne compte parce que chaque étape est un endroit où les estimations de coût-efficacité se
trompent couramment — voir les pièges ci-dessous — et parce qu'elle rend explicite que le « coût par
vie sauvée » n'est jamais un prix brut observé ; c'est une estimation modélisée construite à partir de
plusieurs intrants séparément incertains.

## Exemple chiffré

Deux interventions hypothétiques, toutes deux étayées par des preuves, en concurrence pour les mêmes
100 000 £ marginales :

- **Moustiquaires (type AMF)** : environ 4 500 $ par vie sauvée selon l'exemple chiffré publié par
  GiveWell tiré de données de 2020, soit très approximativement 20 vies sauvées pour 100 000 £ selon le
  taux de change et l'année utilisés.
- **Programme de déparasitage** : aucun bénéfice de mortalité plausible, mais de solides preuves de
  gains de revenu à long terme issus du déparasitage infantile ; GiveWell le valorise en termes de gain
  de revenu, pas de vies sauvées, ce qui rend difficile une comparaison directe avec les moustiquaires
  sans une unité partagée. GiveWell utilise un cadre explicite de « pondérations morales » pour
  convertir les deux dans une unité interne unique aux fins de classement.

La discipline de la méthode EA consiste à forcer cette comparaison au grand jour plutôt qu'à financer
les deux simplement parce qu'elles « semblent bonnes ». Voir
[retour social sur investissement](../social-return-on-investment/) pour la fonction de contrainte
équivalente utilisée par les entreprises sociales britanniques et les commanditaires locaux, qui pose la
même question — quel est le meilleur retour par livre — dans un idiome de valeur monétisée plutôt que
dans un idiome de vies/DALY.

## Lien avec l'ingénierie logicielle

Les ingénieurs qui construisent des plateformes de donateurs, des outils d'appariement de subventions
ou des tableaux de bord d'impact pour des bailleurs alignés sur l'EA (Open Philanthropy, GiveWell
lui-même, des plateformes de don efficace comme Giving What We Can) doivent représenter les estimations
de coût-efficacité comme des fourchettes assorties d'hypothèses énoncées, et non comme des chiffres
uniques — le modèle sous-jacent comporte plusieurs intrants incertains multiplicatifs, et réduire cela
à un seul chiffre sur un tableau de bord déforme la confiance que GiveWell lui-même énonce. Versionnez
chaque estimation par date de publication ; GiveWell révise ses chiffres, parfois substantiellement, à
mesure que de nouvelles preuves d'ECR ou de données de besoin de financement arrivent, et une
plateforme qui met en cache un ancien chiffre devient discrètement erronée.

## Pièges à éviter

- **Traiter une estimation de coût-efficacité comme un prix fixe.** C'est le résultat d'un modèle
  comportant plusieurs intrants incertains multiplicatifs (taux d'utilisation, mortalité de référence,
  ajustement de funging) ; indiquez la date et la version.
- **Ignorer le funging/déplacement.** Financer une organisation qui aurait de toute façon reçu l'argent
  d'un autre donateur achète moins de bien contrefactuel que ne le suggère le chiffre affiché — voir
  [additionnalité et poids mort](../additionality-and-deadweight/) et
  [déplacement et attribution](../displacement-and-attribution/).
- **Comparer des unités incompatibles sans conversion.** « Vies sauvées » et « revenu gagné » ne sont
  pas directement comparables sans un cadre explicite de pondérations morales ; les présenter côte à
  côte comme s'ils l'étaient est une erreur de catégorie.
- **Vision en tunnel d'un domaine de cause.** Classer uniquement au sein d'un domaine de cause (par
  exemple uniquement les associations de santé mondiale) et appeler le vainqueur « l'association la
  plus coût-efficace » exagère la portée de l'affirmation ; le classement inter-causes de GiveWell est
  délibérément restreint (santé et bien-être mondiaux), pas universel.

## Sources

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
