# Indicateurs de flux dans la délivrance gouvernementale

Les indicateurs de flux — la loi de Little, les limites de travail en cours (WIP) et l'efficience de
flux — décrivent la vitesse à laquelle le travail se déplace dans un système à capacité limitée. Un
tableau de sprint est un tel système ; une file de demandes de prestations, un registre de demandes
d'urbanisme, ou un arriéré de dossiers de visa relève exactement des mêmes mathématiques sous un autre
uniforme.

## Pourquoi c'est important

Les charges de travail gouvernementales sont des systèmes de files d'attente, et les systèmes de files
d'attente obéissent aux lois des files d'attente, que quelqu'un les mesure ou non. Les délais statutaires
de détermination le rendent explicite : sous le régime Town and Country Planning, la plupart des
demandes d'urbanisme mineures portent une cible statutaire de détermination de 8 semaines et les
demandes majeures de 13 semaines — un engagement de temps de cycle inscrit directement dans la loi.
L'arriéré de dossiers d'asile du Home Office, examiné à plusieurs reprises par le National Audit Office
et la Home Affairs Select Committee, est un cas bien documenté d'un système public où le travail en
cours a crû plus vite que le débit pendant une période prolongée, poussant les temps de cycle bien
au-delà de toute attente statutaire ou de service. Les indicateurs de flux donnent aux ingénieurs comme
aux responsables de traitement des dossiers un vocabulaire quantitatif partagé pour exactement ce mode
d'échec, plutôt que de le laisser comme un « problème d'arriéré » qualitatif.

## Le calcul

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, halving WIP roughly halves
average cycle time (Little's Law rearranged) — the lever available
without adding headcount.
```

Voir [indicateurs DORA pour la valeur publique](../dora-metrics-for-public-value/) pour le calcul
équivalent appliqué aux pipelines de déploiement logiciel plutôt qu'au traitement de dossiers.

## Exemple chiffré

**Service d'urbanisme d'une collectivité locale** : 400 demandes ouvertes à tout instant (WIP), l'équipe
résout 50 demandes/semaine (débit).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

Cela tombe exactement sur la cible statutaire de 8 semaines pour les demandes mineures — sans aucune
marge, ce qui signifie que toute variabilité de la demande entrante ou du délai de réponse des
consultés fait dépasser les déterminations au-delà du délai légal.

**Efficience de flux** : sur ces 8 semaines (56 jours calendaires), une demande représente typiquement
environ 6 heures de temps de traitement effectif par un agent instructeur.

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1.3%
```

Le repère de Vacanti pour les équipes logicielles situe l'efficience de flux typique entre 15 et 20 % ;
le traitement de dossiers gouvernementaux, avec de multiples transferts vers des consultés statutaires
et des fenêtres de consultation publique, tourne souvent un ordre de grandeur plus bas. Les 98,7 % de
temps « d'attente » sont l'endroit où les huit semaines passent réellement — pas dans la capacité de
l'agent instructeur.

**Intervention par limite de WIP** : plafonner les demandes ouvertes par agent instructeur à 15 plutôt
qu'à un chiffre non borné de 25 (en maintenant le débit constant) fait passer le WIP de 400 à environ
240 sur une équipe de 16 personnes :

```
New cycle time = 240 / 50 = 4.8 weeks
```

Un quasi-doublement de la vitesse issu d'un changement de politique, et non d'une augmentation
d'effectifs — le même levier que tirent les équipes de délivrance de style DORA lorsqu'elles plafonnent
le WIP d'un sprint.

## Lien avec l'ingénierie logicielle

Les indicateurs de flux sont le langage partagé entre le tableau Kanban d'une équipe de délivrance et le
service de traitement de dossiers pour lequel elle construit un logiciel : la file d'un agent
instructeur et une file de demandes de fusion (pull request) sont toutes deux régies par la loi de
Little, et toutes deux font exploser leurs cibles de temps de cycle de la même façon — trop de WIP par
rapport au débit. Cela importe directement pour le
[coût du délai dans les programmes publics](../cost-of-delay-in-public-programmes/) : temps de cycle ×
CoD, c'est l'argent qui dort dans la file à tout instant, et cela importe pour les
[normes de service et indicateurs de transaction](../service-standards-and-transaction-metrics/), où
une cible de délai publiée est un engagement de temps de cycle que seuls les indicateurs de flux
peuvent diagnostiquer lorsqu'elle est manquée. Le logiciel d'un système de traitement de dossiers
devrait exposer le WIP et le temps de cycle comme des indicateurs opérationnels de premier ordre, et non
les enfouir dans un système de gestion de dossiers que personne n'interroge.

## Pièges à éviter

- **Ajouter des limites de WIP sans résoudre le véritable goulot d'étranglement** : si la contrainte est
  le délai de réponse d'un consulté statutaire externe, plafonner le WIP de l'agent instructeur ne fait
  que déplacer la file en amont plutôt que de la raccourcir.
- **Traiter l'efficience de flux comme une cible à manipuler** : accélérer les 1,3 % de temps actif
  déplace à peine le temps de cycle ; le levier se trouve presque toujours dans les états d'attente, ce
  qui signifie généralement une refonte de processus, pas une vitesse d'agent instructeur.
- **Ignorer la variabilité** : la loi de Little décrit des moyennes ; une charge de travail à forte
  variance de demande a besoin d'une capacité tampon, pas seulement d'une limite de WIP plus stricte,
  sinon les délais statutaires seront quand même manqués sur la queue de distribution volatile, même si
  la moyenne s'améliore.
- **Mesurer le WIP de façon incohérente** : un dossier « ouvert » dans le système d'enregistrement mais
  en réalité bloqué en attente d'un tiers reste du WIP ; l'exclure flatte les chiffres sans changer la
  réalité vécue par le citoyen.

## Sources

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
