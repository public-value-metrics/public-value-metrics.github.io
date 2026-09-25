# Indicateurs de confiance et de légitimité

La légitimité et le soutien constituent l'un des trois piliers du « triangle stratégique » de Mark
Moore dans *Creating Public Value* (1995) — aux côtés de la valeur publique elle-même et de la
capacité opérationnelle — et c'est le pilier le plus souvent laissé sans mesure, car, contrairement
à un budget ou à un décompte de réalisations, la légitimité n'a pas de chiffre unique évident qui lui
soit associé. Les indicateurs de confiance et de légitimité forment la famille de mesures proxy que
les gouvernements utilisent pour combler cette lacune : enquêtes de confiance institutionnelle,
notes de confiance des organes de contrôle, données de plaintes et de recours, et indicateurs de
soutien politique/législatif.

## Pourquoi c'est important

L'argument de Moore est qu'un gestionnaire public qui délivre une réelle valeur mais perd sa
légitimité politique et publique finira par perdre l'environnement d'autorisation nécessaire pour
continuer à la délivrer — les financements sont réduits, les mandats sont restreints, et le service
est asphyxié quels que soient ses résultats. La légitimité n'est donc pas une réflexion après coup
en matière de relations publiques, greffée sur un tableau de bord de mise en œuvre ; c'est une
donnée d'entrée structurante pour la question de savoir si la mission peut se poursuivre, ce qui
explique pourquoi elle figure comme une perspective à part entière dans un
[tableau de bord de la valeur publique](../public-value-scorecard/), plutôt qu'en note de bas de
page. Le programme d'enquêtes « Trust in Government » de l'OCDE est la tentative transnationale la
plus aboutie pour quantifier cela : il suit la part des citoyens, à travers les pays membres de
l'OCDE, qui déclarent avoir confiance en leur gouvernement national, et ses données de long terme
montrent que la confiance est très sensible aux chocs — la crise financière de 2008 comme la
pandémie de COVID-19 ont produit des variations nationales marquées, souvent suivies d'un
rétablissement seulement partiel, l'analyse de l'OCDE constatant systématiquement que la
*compétence* perçue (le gouvernement délivre-t-il ce qu'il annonce) et l'*équité/l'intégrité*
perçues (le gouvernement est-il perçu comme agissant sans corruption ni favoritisme) sont les deux
principaux moteurs du chiffre de confiance, distincts de la satisfaction à l'égard d'une transaction
donnée. Les gouvernements cherchent de plus en plus à opérationnaliser la légitimité à un niveau plus
fin également — au Royaume-Uni, les régulateurs et inspections indépendants (le National Audit
Office, le Parliamentary and Health Service Ombudsman, des régulateurs sectoriels comme Ofsted et la
Care Quality Commission) fonctionnent comme des vérifications institutionnalisées de la légitimité,
convertissant la question « le public fait-il encore confiance à ce service » en notes auditables.

## Le calcul

La confiance et la légitimité sont un sujet structuré par un cadre conceptuel, dont les proxys
quantitatifs exploitables sont les suivants :

```
Institutional trust index (OECD-style)
  = % of survey respondents answering "yes" to a confidence-in-government question,
    tracked over time, disaggregated by demographic group

Legitimacy proxy set (no single number substitutes for the construct):
  - Upheld complaints per 1,000 service users (ombudsman or internal complaints data)
  - Judicial review / appeals success rate against the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstanding" to "inadequate" bands)
  - Legislative/oversight committee confidence votes or critical report frequency
  - Freedom of information request volume and disclosure/refusal rate, as a proxy
    for perceived transparency

Legitimacy is corroborated, not calculated: a defensible legitimacy assessment
triangulates several of the above rather than relying on any single proxy.
```

## Exemple chiffré

**Administration fiscale nationale** : triangulation de la légitimité pour un rapport annuel de
valeur publique.

```
OECD-style trust proxy (department-specific confidence survey):
  58% of respondents say they trust the authority to "treat me fairly" (down from
  64% two years prior)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up from 3.1 per 1,000)

Ombudsman referrals:
  Referrals to the independent Adjudicator's Office: 1,850 in the year, of which
  61% upheld in full or part against the authority (up from 48% the prior year)

Reading across all three: trust is falling, upheld complaints are rising, and
independent ombudsman findings are increasingly siding against the authority —
three independent signals converging on the same direction, which is what makes
this a credible legitimacy finding rather than noise in any one series.
```

Un seul de ces chiffres évoluant constituerait une preuve faible ; trois mesures indépendantes
évoluant de concert sur la même période est le schéma qui rend une affirmation sur la légitimité
défendable.

## Lien avec l'ingénierie logicielle

Les indicateurs de légitimité sont rarement produits par le tableau de bord d'une seule équipe, ce
qui constitue en soi la leçon de conception : construire des pipelines de reporting capables
d'ingérer et de rapprocher des données provenant de sources externes indépendantes (systèmes de
gestion des dossiers du médiateur, flux de notation des régulateurs, prestataires d'enquêtes)
plutôt que de concevoir le reporting de légitimité comme une mesure purement interne, car les
affirmations de légitimité d'origine interne (« nous nous évaluons nous-mêmes comme dignes de
confiance ») n'ont guère de poids probant — le même problème d'indépendance que celui relevé pour la
perspective de légitimité dans un
[tableau de bord de la valeur publique](../public-value-scorecard/). Les pipelines de données de
plaintes et de recours méritent la même rigueur en matière de qualité des données que tout pipeline
de résultats alimentant des contrats de
[paiement au résultat](../payment-by-results-and-social-impact-bonds/), car un jeu de données de
plaintes sous-déclaré ou mal catégorisé sous-estime silencieusement un problème de légitimité avant
qu'il ne devienne visible dans une enquête de confiance un an plus tard. Voir
[indicateurs de satisfaction des citoyens](../citizen-satisfaction-metrics/) pour le pendant, au
niveau de la transaction, de cette mesure au niveau institutionnel, et
[valeur publique](../public-value/) pour le cadre complet du triangle stratégique de Moore auquel ce
pilier appartient.

## Pièges à éviter

- **Traiter la satisfaction comme un proxy de la légitimité** : un citoyen peut être satisfait de
  l'interface d'une transaction donnée tout en se méfiant de l'institution dans son ensemble (ou
  inversement) — voir [indicateurs de satisfaction des citoyens](../citizen-satisfaction-metrics/)
  pour comprendre pourquoi les deux doivent être rapportés séparément.
- **S'appuyer sur un seul indicateur autodéclaré** : une enquête de confiance menée en interne, sans
  corroboration indépendante (données du médiateur, notations d'un régulateur), est facile à écarter
  comme une auto-évaluation ; il faut trianguler.
- **Ignorer la désagrégation démographique** : les chiffres nationaux agrégés de confiance peuvent
  masquer des divergences marquées de légitimité entre groupes spécifiques (âge, origine ethnique,
  revenu ou région) — les publications de l'OCDE elles-mêmes sur Trust in Government sont
  désagrégées précisément pour cette raison.
- **Lire une baisse ponctuelle liée à un choc comme une tendance permanente** : les chiffres de
  confiance évoluent fortement autour des crises (krachs financiers, pandémies, scandales très
  médiatisés) et se redressent partiellement ; un seul point de données post-choc ne devrait pas être
  extrapolé en un déclin de long terme sans données supplémentaires.

## Sources

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
