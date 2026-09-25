# Social Value Act

Le Public Services (Social Value) Act 2012 est une obligation statutaire britannique exigeant des
autorités publiques d'Angleterre et du Pays de Galles qu'elles examinent comment ce qui est acheté
pourrait améliorer le bien-être économique, social et environnemental de la zone concernée, et
qu'elles envisagent de consulter à ce sujet, avant de lancer une procédure de marché pour des contrats
de services publics. Elle est entrée en vigueur en janvier 2013 comme une obligation relativement
légère de « prise en compte », et a été considérablement renforcée par la Procurement Policy Note (PPN)
06/20 en janvier 2021, qui exige que les contrats du gouvernement central évaluent explicitement — et
non se contentent de considérer — la valeur sociale, avec une pondération minimale dans les critères
d'attribution.

## Pourquoi c'est important

Avant la PPN 06/20, « considérer » la valeur sociale pouvait être satisfait par un commanditaire notant
simplement qu'il y avait pensé, sans exigence que cela affecte la décision d'attribution — une
obligation facile à remplir sur le papier et à ignorer en pratique. La PPN 06/20 a comblé cet écart pour
les marchés du gouvernement central : elle impose que la valeur sociale soit notée dans le cadre de
l'évaluation des offres, organisée autour de cinq thèmes prioritaires nationaux — reprise post-COVID-19,
lutte contre l'inégalité économique, lutte contre le changement climatique, égalité des chances, et
bien-être — et couramment mesurée à l'aide du cadre National TOMs (Themes, Outcomes, Measures) maintenu
par le Social Value Portal. Pour un ingénieur logiciel construisant des outils de marchés publics, de
gestion de contrats ou d'aide à la soumission pour le secteur public, c'est la base juridique que votre
client est tenu de respecter, pas un supplément optionnel.

## Le calcul

La valeur sociale est un sujet façonné par un cadre ; son « calcul » est la structure de notation que la
plupart des autorités utilisent :

```
Total tender score = Price/cost weighting + Quality weighting + Social value weighting

PPN 06/20 (central government): social value weighting ≥ 10% of total score

Social value themes (PPN 06/20):
 1. COVID-19 recovery
 2. Tackling economic inequality
 3. Fighting climate change
 4. Equal opportunity
 5. Wellbeing
```

Les soumissionnaires monétisent typiquement leurs engagements au regard de ces thèmes en utilisant les
[bases de données de coûts unitaires](../unit-cost-databases/), et la même logique de monétisation
utilisée dans le [retour social sur investissement](../social-return-on-investment/) s'applique : un
engagement devrait être étayé par des preuves, attribuable au contrat, et non compté deux fois par
rapport à d'autres financements.

## Exemple chiffré

**Contrat informatique d'une collectivité locale** : un contrat de 2 millions de livres sur 3 ans est
noté 60 % qualité, 30 % prix, 10 % valeur sociale. Le soumissionnaire A s'engage sur 2 apprentissages,
150 000 £ de dépenses de sous-traitance locale, et 200 heures de formation pro bono aux compétences
numériques pour une école locale, monétisés à l'aide de proxys d'une base de données de coûts unitaires
pour une valeur sociale additionnelle combinée de 90 000 £. Le soumissionnaire B s'engage sur un
ensemble plus modeste monétisé à 40 000 £. Si l'autorité note la valeur sociale proportionnellement à
l'offre la plus forte, le soumissionnaire A reçoit les 10 points complets ; le soumissionnaire B reçoit
10 × (40 000 £ ÷ 90 000 £) = 4,4 points — un écart de 5,6 points qui peut décider du contrat même
lorsque la qualité et le prix sont proches.

**Soumissionnaire du secteur bénévole** : une petite structure ESS (économie sociale et solidaire)
soumissionnant pour un contrat d'entretien d'espaces verts face à un concurrent commercial ne peut pas
rivaliser sur le seul prix unitaire, mais utilise les proxys de Global Value Exchange pour monétiser ses
engagements existants d'emploi communautaire et de bénévolat, construisant un argument de valeur sociale
étayé par des preuves méritant d'être noté aux côtés du prix et de la qualité.

## Lien avec l'ingénierie logicielle

Remporter une offre avec des engagements de valeur sociale monétisés crée une obligation d'en démontrer
la délivrance par la gestion de contrat — des outils qui journalisent les débuts d'apprentissage, les
dépenses locales et les heures de formation par rapport aux engagements spécifiques notés à
l'appel d'offres, alimentant les réunions de revue de contrat plutôt que d'être oubliés une fois le
contrat signé. Les listings G-Cloud et Digital Marketplace exigent de plus en plus des déclarations de
valeur sociale au moment du référencement. Voir
[retour social sur investissement](../social-return-on-investment/) pour la méthode de valorisation
derrière les engagements, [bases de données de coûts unitaires](../unit-cost-databases/) pour les
proxys sur lesquels s'appuient les soumissionnaires, et
[résultats et réalisations](../outcomes-vs-outputs/) pour s'assurer que les engagements délivrés sont
des résultats, pas seulement des décomptes d'activité.

## Pièges à éviter

- **Les offres de « social-washing ».** Des engagements vagues (« nous soutenons la communauté
  locale ») qui ne peuvent être mesurés ni tenus durant la gestion du contrat obtiennent un bon score
  mais ne délivrent rien de vérifiable.
- **Traiter la valeur sociale comme un départage.** La PPN 06/20 exige que la valeur sociale soit
  explicitement évaluée dans les critères d'attribution, et non utilisée informellement pour départager
  des offres par ailleurs équivalentes.
- **Absence de suivi en gestion de contrat.** Les engagements notés à l'appel d'offres ne sont
  fréquemment jamais suivis pendant la délivrance — voir
  [réalisation des bénéfices](../benefits-realization/).
- **Cadres de mesure incohérents entre contrats.** Utiliser des sources de proxy différentes pour des
  engagements similaires sur différents contrats rend la comparaison au niveau du portefeuille dénuée
  de sens, ce qui explique l'existence de cadres communs comme National TOMs et de bases de données de
  coûts unitaires partagées.

## Sources

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
