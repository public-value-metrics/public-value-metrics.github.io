# Construire ou acheter dans le secteur public (Build vs Buy)

Le choix entre construire et acheter (build vs buy) est une comparaison structurée et ajustée au
risque entre le développement sur mesure et l'acquisition commerciale ou standard, évaluée sur le
[coût total de possession](../total-cost-of-ownership-in-government-it/) actualisé, le délai de mise
en valeur et le risque. Le secteur public est structurellement un secteur acheteur — le Technology
Code of Practice établit une présomption en faveur des solutions standard et infonuagiques — et
pourtant les équipes d'ingénierie au sein des ministères continuent souvent, par défaut, à construire,
pour les mêmes raisons que partout ailleurs.

## Pourquoi c'est important

Le Technology Code of Practice du Government Digital Service
(<https://www.gov.uk/guidance/the-technology-code-of-practice>) et les orientations correspondantes du
Service Manual sur la décision de construire ou d'acheter poussent les ministères à justifier tout
développement sur mesure face à une présomption selon laquelle les capacités standard doivent être
achetées, et non construites, et que seule une capacité véritablement nouvelle et différenciante pour
la mission justifie du code sur mesure. Les orientations complémentaires du HM Treasury sur le biais
d'optimisme, annexées au Green Book et tirées de l'examen Mott MacDonald de 2002 sur les grands
marchés publics, attribuent aux projets informatiques la fourchette de majoration la plus large de
toutes les catégories évaluées — les estimations de coût d'investissement doivent être majorées de
10 % au minimum et jusqu'à 200 % au maximum avant d'être utilisées dans l'évaluation, ce qui reflète à
quel point les projets logiciels ont historiquement été sous-estimés dans les marchés publics. L'analyse
build-vs-buy existe précisément pour imposer cet ajustement au risque sur la table avant l'approbation,
plutôt que de le laisser apparaître comme une demande de dépassement budgétaire en cours d'exercice.

## Le calcul

```
Compare over the same 3–5 year horizon, discounted at the Green Book
social discount rate (see social-discount-rate.md):

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book optimism bias pattern):
  build cost × 1.1–3.0        (IT project uplift range, Mott MacDonald)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and contract exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability the mission, or plumbing?
  2. time-to-value × cost of delay (see cost-of-delay-in-public-programmes.md)
  3. risk-adjusted total cost of ownership
```

## Exemple chiffré

Une collectivité locale a besoin d'un système de gestion de dossiers pour l'aide sociale aux adultes.
Achat : SaaS à 180 000 £/an, opérationnel en 4 mois. Construction : estimation de 900 000 £ plus
150 000 £/an de maintenance, opérationnelle en 14 mois.

```
Risk-adjusted build cost = 900,000 × 1.4 = £1,260,000
5-year TCO:
  buy  = 180,000 × 5 = £900,000
  build = 1,260,000 + 150,000 × 5 = £2,010,000

Delay term: the system avoids £40,000/month in duplicated assessments;
build arrives 10 months later than buy.
CoD = 10 × 40,000 = £400,000

Effective comparison: £900,000 (buy) vs £2,010,000 + £400,000 = £2,410,000 (build)
```

L'achat l'emporte d'environ 1,5 million de livres sur cinq ans, et la ligne la plus importante après
l'estimation de construction elle-même est le coût du délai, qu'une simple comparaison de dépenses
d'investissement n'aurait jamais fait apparaître.

## Lien avec l'ingénierie logicielle

Les disciplines qui se transposent directement de cette analyse à la pratique de la délivrance :
**l'ajustement au risque fondé sur des données antérieures** — la majoration Mott MacDonald est
l'équivalent logiciel du biais d'optimisme du Green Book appliqué mécaniquement, de sorte que les
équipes devraient plaider pour des exceptions à cette règle plutôt que de présumer que leur estimation
en est une ; **l'honnêteté du comparateur** — l'alternative à la construction est la meilleure option
d'achat disponible, pas « rien », ce qui rejoint directement le
[coût d'opportunité dans les dépenses publiques](../opportunity-cost-in-public-spending/) ; et
**une comparaison honnête du coût total de possession** — toute proposition de construction devrait
être comparée au [coût total de possession](../total-cost-of-ownership-in-government-it/) complet
d'une option d'achat, et non à son prix catalogue. Lorsque la construction l'emporte réellement, le
[coût du délai](../cost-of-delay-in-public-programmes/) lié au temps de construction supplémentaire
devrait être chiffré explicitement dans le dossier d'affaires, et non laissé comme une hypothèse
implicite selon laquelle le temps n'a pas d'importance.

## Pièges à éviter

- **Comparer le prix catalogue d'un fournisseur à une estimation de construction non ajustée au
  risque** : cela avantage doublement la construction, à la fois sur le coût et sur le calendrier.
- **Valoriser le travail interne à coût nul** : le temps d'ingénierie de la fonction publique est
  traité comme « gratuit » parce qu'il est déjà inscrit au budget d'effectifs du ministère, ce qui
  masque son véritable coût d'opportunité par rapport aux autres tâches que cette équipe pourrait
  accomplir.
- **Verrouillage non chiffré dans les deux sens** : les coûts de sortie et de portabilité des données
  chez un fournisseur sont réels, mais il en va de même du facteur bus d'une construction sur mesure et
  de sa dépendance à la conservation, sur toute sa durée de vie, d'une petite équipe interne difficile
  à remplacer.
- **Différenciation de mission invoquée pour de la plomberie** : affirmer que « c'est essentiel pour
  nous » à propos d'un intergiciel d'intégration ou d'un entrepôt de documents — mettez cette
  affirmation à l'épreuve en vous demandant si un citoyen ou un agent instructeur remarquerait jamais
  lequel des deux fonctionne en arrière-plan.

## Sources

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
