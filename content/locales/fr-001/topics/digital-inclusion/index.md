# Inclusion numérique

L'inclusion numérique est la discipline consistant à s'assurer que le « numérique par défaut » ne
devienne pas « numérique uniquement » — que les services publics conçus autour du canal le moins cher
continuent de fonctionner pour les citoyens qui ne peuvent pas, ou ne veulent pas, l'utiliser sans
assistance. Le GDS a inventé le mécanisme de délivrance spécifique, l'« assistance numérique »
(assisted digital), comme une exigence obligatoire pour chaque service numérique gouvernemental, et non
un supplément optionnel.

## Pourquoi c'est important

La Government Digital Strategy de 2012 a posé l'ambition clairement : les services numériques devaient
être construits numériques par défaut, mais la stratégie elle-même reconnaissait qu'environ 10 % des
adultes britanniques ne seraient pas capables de les utiliser sans aide, et engageait les ministères à
fournir une assistance numérique — une voie médiée par un humain, par téléphone, en personne ou par un
intermédiaire — en tant que partie du service, et non un simple repli séparé ajouté plus tard. Cet
engagement constitue aujourd'hui le point 5 du
[référentiel de service numérique](../digital-service-standard/), « s'assurer que tout le monde peut
utiliser le service ». L'ampleur de l'exclusion persistante est suivie par le Consumer Digital Index
annuel de Lloyds Banking Group : l'édition 2024 a constaté qu'environ 1,6 million de personnes au
Royaume-Uni restent hors ligne, et que ce groupe est fortement composé de personnes âgées de 70 à
79 ans, de personnes gagnant moins de 35 000 £, et de personnes retraitées ou au chômage — précisément
la population la plus susceptible de dépendre des services publics en cours de refonte. Le même rapport
a constaté que seulement 48 % de la population active britannique pouvait accomplir les 20 tâches du
référentiel Essential Digital Skills, ce qui signifie que l'exclusion n'est pas une simple question de
connectivité binaire, mais un spectre de compétence, de confiance et de confiance envers le système
qu'un simple indicateur « a une connexion haut débit » ne capture pas du tout.

## Le calcul

L'inclusion numérique est un cadre et un contrôle d'équité plutôt qu'une formule unique, mais elle se
compose avec l'évaluation quantitative de la valeur via la
[pondération distributive](../distributional-weighting/) :

```
Naive channel-shift value:
  value = volume shifted × (cost_old − cost_digital)     [see channel-shift-savings]

Inclusion-adjusted value:
  value = (volume shifted × unweighted saving)
        − (excluded users × cost of assisted-digital provision)
        − (distributional weight adjustment for harm to excluded
           groups who lose access or face degraded service quality)

Assisted digital is not the residual cost of failure — it is a
designed channel with its own [cost-per-transaction](../cost-per-transaction/),
typically far higher per-transaction than self-service digital but
still usually cheaper than the legacy channel it partially replaces.
```

## Exemple chiffré

**Service de prestation nationale de type Universal Credit** : 2,5 millions de demandes/an, dont on
estime que 10 % des demandeurs auront besoin d'une assistance numérique, selon l'hypothèse de
planification de la Government Digital Strategy.

```
Excluded/assisted-digital cohort = 2,500,000 × 10% = 250,000 claims/year

Assisted-digital channel cost (phone + face-to-face support,
staffed to handle vulnerability and complexity) ≈ £9.50/claim
  = 250,000 × £9.50 = £2,375,000/year

Self-service digital cost for the other 90% ≈ £0.40/claim
  = 2,250,000 × £0.40 = £900,000/year

Blended cost per transaction = (2,375,000 + 900,000) / 2,500,000
  = £1.31/claim

A design that skips assisted digital to hit a lower headline
cost-per-transaction (e.g. £0.40 blended, ignoring the 250,000
excluded claimants) doesn't eliminate that £2.375m cost — it
converts it into unclaimed entitlements, appeals, and downstream
crisis-service demand that lands on a different budget entirely.
```

## Lien avec l'ingénierie logicielle

L'assistance numérique est un canal conçu, ce qui signifie qu'elle a des interfaces, des accords de
niveau de service et une instrumentation comme n'importe quel autre : un outil d'agent instructeur par
téléphone, un portail intermédiaire pour Citizens Advice ou une collectivité locale, ou un parcours de
borne en personne. La traiter comme une réflexion après coup — un numéro de téléphone en petits
caractères plutôt qu'un canal envisagé dès la phase de découverte — est la façon la plus courante dont
les services échouent au point 5 du
[référentiel de service numérique](../digital-service-standard/) lors d'une évaluation. L'inclusion
numérique est le prisme d'équité qui traverse chaque autre sujet de ce chapitre : elle plafonne
l'agressivité avec laquelle les [économies de report de canal](../channel-shift-savings/) peuvent être
réalisées, c'est une ligne budgétaire qui doit être incluse honnêtement dans le
[coût par transaction](../cost-per-transaction/), et c'est l'application directe de la
[pondération distributive](../distributional-weighting/) à un contexte de services numériques — une
économie qui retombe de manière disproportionnée sur des personnes déjà exclues numériquement et
économiquement devrait être pondérée à la baisse, et non traitée comme équivalente à une économie
répartie uniformément sur la population.

## Pièges à éviter

- **Lire « numérique par défaut » comme « numérique uniquement »** : fermer la ligne téléphonique ou
  le guichet dès que l'adoption numérique franchit un seuil, sans vérifier que la cohorte restante
  dispose d'une alternative véritablement utilisable.
- **Mesurer l'inclusion par la connectivité binaire** : « a une connexion haut débit » ou « possède un
  smartphone » est un mauvais indicateur de la capacité à accomplir une transaction donnée — l'écart
  d'Essential Digital Skills (seulement 48 % de la population active britannique accomplit les 20
  tâches, selon Lloyds 2024) montre que les compétences et la confiance comptent autant que l'accès.
- **Chiffrer l'assistance numérique comme une erreur d'arrondi** : la budgétiser comme une petite ligne
  de contingence plutôt que comme un véritable canal avec son propre
  [coût par transaction](../cost-per-transaction/), puis s'étonner qu'elle soit sous-financée et
  sous-dotée en personnel au lancement.
- **N'enquêter que sur les personnes ayant réussi le parcours numérique** : les recherches sur la
  satisfaction et l'utilisabilité menées entièrement en service manquent les personnes qui ne sont
  jamais allées aussi loin, ce qui est exactement la population que le travail d'inclusion numérique
  est censé protéger.

## Sources

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
