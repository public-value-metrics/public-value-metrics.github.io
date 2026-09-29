# Soziale Kosten-Nutzen-Analyse (SCBA)

Die soziale Kosten-Nutzen-Analyse rechnet jeden Kosten- und Nutzenposten einer Politik oder eines
Programms — markt- und nichtmarktbezogen — in eine gemeinsame Geldeinheit um, diskontiert zukünftige
Ströme auf den Barwert und saldiert sie zu einer einzigen Zahl: Stellt dieser Vorschlag die
Gesellschaft besser — und um wie viel?

## Warum das wichtig ist

SCBA ist die Standardmethode im wirtschaftlichen Fall der [Green-Book-Bewertung](../green-book-appraisal/):
HM Treasurys Leitlinie verlangt, dass Vorschläge einen positiven sozialen Kapitalnettowert (NPSV)
nachweisen, wo immer Nutzen glaubwürdig monetarisiert werden können, unter Verwendung der
Zahlungsbereitschaft als Grundprinzip der Bewertung für nichtmarktbezogene Güter
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Kapitel 5). Die dadurch erzwungene Disziplin besteht darin, dass "soziale" Kosten-Nutzen-Analyse
nicht dieselbe Übung ist wie eine privatwirtschaftliche Investitionsbewertung: Sie muss Kosten und
Nutzen einschließen, die Dritte betreffen, die nicht Teil der Transaktion sind (Externalitäten), sie
muss den [sozialen Diskontsatz](../social-discount-rate/) statt kommerzieller Kapitalkosten
verwenden, und sie sollte [Verteilungsgewichtung](../distributional-weighting/) anwenden, wo ein
Pfund für einen ärmeren Haushalt mehr zählt als für einen reicheren.

Wo SCBA an ihre Grenzen stößt, ist genau dort, wo Kritiker es erwarten: Güter ohne Marktanalogon —
saubere Luft, sozialer Zusammenhalt, der Wert eines geretteten Lebens — müssen mittels
[Präferenzangabe](../stated-preference-valuation/) oder [offenbarter Präferenz](../revealed-preference-valuation/)
monetarisiert werden, oder es muss ein [Schattenpreis](../shadow-pricing/) konstruiert werden. Wenn
Monetarisierung umstritten statt nur schwierig ist, empfiehlt das Green Book selbst, auf
[Kosten-Wirksamkeits-Analyse](../cost-effectiveness-analysis-in-government/) oder
[Multikriterielle Entscheidungsanalyse](../multi-criteria-decision-analysis/) zurückzugreifen, statt
eine Zahl zu erzwingen, an die niemand glaubt.

## Die Berechnung

```
NPSV = Σ [t=0 bis T] (Nutzen_t − Kosten_t) / (1 + r)^t

wobei:
  Nutzen_t = alle monetarisierten Nutzen in Jahr t, einschließlich
             nichtmarktbezogener Güter, bewertet über Präferenzangabe,
             offenbarte Präferenz oder Schattenpreis
  Kosten_t = alle monetarisierten Kosten in Jahr t, einschließlich der
             Opportunitätskosten von Ressourcen (siehe
             ../opportunity-cost-in-public-spending/)
  r        = sozialer Diskontsatz (HM Treasury setzt 3,5 %, fallend auf
             niedrigere Sätze jenseits von Jahr 30, gemäß Anhang A des
             Green Book)
  T        = Bewertungszeitraum

Nutzen-Kosten-Verhältnis (BCR) = Σ PV(Nutzen) / Σ PV(Kosten)
```

Ein BCR über 1 (oder NPSV über null) zeigt sozialen Nettowert an. Die
Wirtschaftlichkeitskategorien des Green Book (verwendet in der Verkehrs- und
Infrastrukturbewertung) bezeichnen BCR-Bereiche: unter 1,0 ist schlechte Wirtschaftlichkeit,
1,0–1,5 ist niedrig, 1,5–2,0 ist mittel, 2,0–4,0 ist hoch und über 4,0 ist sehr hoch.
Sensitivitätsanalyse — die erneute Berechnung des NPSV unter pessimistischen und optimistischen
Annahmen — ist verpflichtend, nicht optional, weil monetarisierte nichtmarktbezogene Nutzen breite
Unsicherheitsbänder tragen.

## Beispielrechnung

**Kommunalverwaltung**: Eine Kommune bewertet eine Investition von 3 Mio. £ in ein neues
Rad- und Fußwegenetz über einen Bewertungszeitraum von 20 Jahren bei einem Diskontsatz von 3,5 %.

```
Kosten: 3 Mio. £ Investition in Jahr 0, 50.000 £/Jahr Instandhaltung
(Jahre 1–20)
PV(Instandhaltung) ≈ 50.000 £ × 14,2 (20-Jahres-Annuitätsfaktor bei
3,5 %) ≈ 710.000 £
Gesamt-PV(Kosten) ≈ 3,71 Mio. £

Nutzen (alle monetarisiert über veröffentlichte DfT/WHO-Bewertungswerkzeuge):
  Gesundheitsnutzen durch erhöhte körperliche Aktivität: 180.000 £/Jahr
  Reduzierte Fehlzeiten: 40.000 £/Jahr
  Verkehrsentlastung (weniger Autofahrten): 60.000 £/Jahr
  Gesamtnutzenstrom: 280.000 £/Jahr
PV(Nutzen) ≈ 280.000 £ × 14,2 ≈ 3,98 Mio. £

NPSV = 3,98 Mio. £ − 3,71 Mio. £ = +0,27 Mio. £
BCR = 3,98 / 3,71 = 1,07 → "niedrige" Wirtschaftlichkeit
```

Das Programm überspringt die Messlatte, aber nur knapp; eine Sensitivitätsrechnung mit einer um 20 %
niedrigeren Gesundheitsnutzen-Schätzung (die echte Unsicherheit bei der Bewertung körperlicher
Aktivität widerspiegelt) kippt den BCR unter 1,0 — genau deshalb verlangt das Green Book, die
Sensitivitätstabelle neben der Schlagzeilenzahl zu veröffentlichen, nicht nur die zentrale
Schätzung.

**Wohltätigkeitsorganisation**: Ein Programm zur Verhütung von Säuglingssterblichkeit mit Kosten
von 500.000 £/Jahr wird anhand des Werts eines statistischen Lebens (VSL) bewertet — ein
Schattenpreis, kein beobachteter Marktpreis — von etwa 2,1 Mio. £ (HM Treasurys 2023 aktualisierte
Zahl, selbst abgeleitet aus Präferenzangabe-Studien). Die Verhinderung eines Säuglingstods pro Jahr
gegen Kosten von 500.000 £ ergibt einen BCR von 4,2, komfortabel "sehr hohe" Wirtschaftlichkeit —
aber das gesamte Ergebnis beruht auf der VSL-Zahl, weshalb jede SCBA, die VSL verwendet, dies als
Annahme offenlegen muss, nicht als Tatsache.

## Bezug zur Softwareentwicklung

SCBA ist der natürliche Rahmen für Plattform- und Infrastrukturinvestitionsentscheidungen bei
staatlicher Software — der Vergleich einer gemeinsam genutzten Identitätsplattform mit
behördenspezifischen Einzellösungen etwa erfordert die Monetarisierung von Nutzen wie reduzierten
doppelten Onboarding-Kosten, reduziertem Betrug und schnellerer Time-to-Service, die für sich
genommen keinen Marktpreis haben. Ingenieurinnen und Ingenieure, die den zugrunde liegenden Dienst
bauen, sollten erwarten, dass Programmverantwortliche nach Eingabewerten für diese Analyse fragen:
Stückkosten von Transaktionen (siehe [Kosten pro Transaktion](../cost-per-transaction/)), erwartete
Mengen und Kosten für Verschlechterung/Ausfallzeit. Die wichtigste zu übernehmende Disziplin:
zukünftigen Nutzen diskontieren, die kontrafaktische Basislinie ausdrücklich benennen (siehe
[kontrafaktische Analyse](../counterfactual-analysis/)) und niemals eine einzelne Punktschätzung
ohne ihre Sensitivitätsspanne präsentieren.

## Fallstricke

- **Nutzen doppelt zählen.** Sowohl "eingesparte Zeit" als auch "aus dieser Zeit gewonnene
  Produktivität" als getrennte Nutzenposten zu zählen, überzeichnet den Fall; eingesparte Zeit ist
  der Nutzen, ihre nachgelagerte Verwendung ist kein zusätzlicher Nutzen, sofern nicht unabhängig
  belegt.
- **Verdrängte Kosten auslassen.** Ein Programm, das Stau von einer Straße auf eine andere verlagert
  oder Betrug von einem Kanal auf einen anderen verschiebt, hat nicht den Nettonutzen geschaffen,
  den sein NPSV in der Schlagzeile nahelegt — siehe [Verdrängung und Zurechnung](../displacement-and-attribution/).
- **Einen privaten Diskontsatz verwenden.** Kommerzielle Kapitalkosten (etwa 8–10 %) statt des
  sozialen Diskontsatzes anzuwenden, unterschätzt systematisch langfristige öffentliche Nutzen wie
  Gesundheits- und Umweltgewinne — siehe [sozialer Diskontsatz](../social-discount-rate/).
- **Das Unumstrittene monetarisieren und das Umstrittene wegwischen.** Wenn zwei Drittel des Nutzens
  eines Vorschlags eine zuverlässig monetarisierte Effizienzeinsparung sind und ein Drittel ein
  unsicher monetarisierter Wohlfahrtsgewinn, vermischt die NPSV-Schlagzeile stillschweigend eine
  harte Zahl mit einer weichen; berichten Sie sie getrennt.

## Quellen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
