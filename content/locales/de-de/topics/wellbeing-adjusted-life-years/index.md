# Wohlfahrtsbereinigte Lebensjahre (Wellbeing-adjusted Life Years, WELLBY)

Ein WELLBY ist ein zusätzlicher Punkt Lebenszufriedenheit, auf der Standard-0–10-Wohlfahrtsskala,
für eine Person für ein Jahr. Es ist das strukturelle Gegenstück zum QALY, das in der
Gesundheitsökonomie verwendet wird — eine einzelne Einheit, die es erlaubt, Interventionen zu
vergleichen, deren Ergebnisse sonst nichts gemeinsam haben —, aber aufgebaut auf subjektivem
Wohlbefinden statt klinischen Gesundheitszuständen, festgelegt in HM Treasurys "Wellbeing guidance
for appraisal: supplementary Green Book guidance" (2021).

## Warum das wichtig ist

Kosten-Nutzen-Bewertung braucht eine gemeinsame Einheit, um einen Zuschuss für einen Jugendclub
gegen ein Verkehrssicherheitsprogramm gegen einen psychischen Gesundheitsdienst zu vergleichen,
von denen keiner ein gemeinsames Ergebnismaß teilt. Die Gesundheitsökonomie löste dies für klinische
Interventionen mit dem QALY: ein qualitätsbereinigtes Lebensjahr, gewichtet von 0 (tot) bis 1 (volle
Gesundheit). HM Treasurys Wellbeing-Leitlinie erweitert dieselbe Logik auf nicht-gesundheitliche
öffentliche Ausgaben, unter Verwendung der harmonisierten Lebenszufriedenheitsfrage des ONS
("Insgesamt, wie zufrieden sind Sie heutzutage mit Ihrem Leben?", beantwortet 0–10) als
Ergebnisleiter statt eines Gesundheitszustandsindex. Ein WELLBY von 1 bedeutet, dass die
Lebenszufriedenheit einer Person für ein Jahr um einen vollen Punkt steigt (oder gleichwertig, dass
die Zufriedenheit von zehn Menschen für ein Jahr um je 0,1 Punkt steigt — WELLBYs summieren sich
über eine Population, wie QALYs es tun). HM Treasurys Leitlinie legt einen illustrativen Geldwert
pro WELLBY fest (etwa 13.000 £, Preise 2019/20), abgeleitet durch Abgleich subjektiver
Wohlfahrtsdaten mit anderen Ansätzen zum Wert eines Lebensjahres, was Bewertenden einen Weg gibt,
Ergebnisse zu monetarisieren — Reduktion von Einsamkeit, Gemeinschaftszusammenhalt, Zugang zu
Grünflächen —, die Techniken der [Wohlfahrtsbewertung](../wellbeing-valuation/) zuvor nur
beschreiben, nicht auf gemeinsamer Grundlage mit Gesundheits- oder Sicherheitsausgaben vergleichen
konnten.

## Die Berechnung

```
WELLBY = Δ Lebenszufriedenheit (Skala 0–10) × Anzahl der Jahre, die
         die Veränderung anhält (summiert über alle betroffenen
         Menschen)

Monetarisierter Wohlfahrtsnutzen = erzeugte WELLBYs × Wert pro WELLBY
         (HMT-Referenzwert)

vgl. QALY = Δ Gesundheitszustands-Nutzen (Skala 0–1) × in diesem
            Zustand gelebte Jahre
```

Die Zufriedenheitsskala 0–10 und die QALY-Nutzenskala 0–1 sind ohne einen Umrechnungsschritt nicht
austauschbar; HM Treasurys Leitlinie diskutiert den Abgleich beider, sodass etwa eine in QALYs
bewertete Gesundheitsintervention und eine in WELLBYs bewertete soziale Intervention innerhalb
derselben [Green-Book-Bewertung](../green-book-appraisal/) nicht stillschweigend doppelt gezählt
oder unvergleichbar gelassen werden.

## Beispielrechnung

**Einsamkeitsdienst einer Kommunalverwaltung**: Ein Freundschaftsvermittlungsprogramm bedient 400
isolierte ältere Anwohnende. Nachverfolgungserhebungen zeigen, dass die durchschnittliche
Lebenszufriedenheit von 5,2 auf 6,0 steigt (ein Gewinn von 0,8 Punkten), und die Wirkung wird
geschätzt, 2 Jahre anzuhalten, bevor sie verblasst.

```
WELLBYs = 400 Menschen × 0,8 Punkte × 2 Jahre = 640 WELLBYs

Monetarisierter Wert = 640 × 13.000 £ = 8.320.000 £
```

Gegenüber jährlichen Programmkosten von 300.000 £ (600.000 £ über 2 Jahre) beträgt das
Nutzen-Kosten-Verhältnis etwa 8.320.000 / 600.000 ≈ **13,9:1** — eine Zahl, die nun in derselben
Bewertungstabelle stehen kann wie die Kosten pro abgewendetem QALY eines Gesundheitsprogramms oder
die Fahrtzeiteinsparungen eines Verkehrsprogramms.

**Wohltätigkeitsorganisation, kleinerer Maßstab**: Ein Gemeinschaftskunstprogramm erreicht 50
Teilnehmende mit einem gemessenen Zufriedenheitsgewinn von 0,3 Punkten, der 1 Jahr anhält.

```
WELLBYs = 50 × 0,3 × 1 = 15 WELLBYs
Monetarisierter Wert = 15 × 13.000 £ = 195.000 £
```

## Bezug zur Softwareentwicklung

- Jeder bürgerorientierte Dienst, der bereits ein Lebenszufriedenheits- oder
  Wohlfahrtserhebungselement erfasst (viele Plattformen von Kommunalverwaltungen und im
  Gesundheits- und Pflegewesen tun dies, den vier ONS-Standardwohlfahrtsfragen folgend), kann
  WELLBYs direkt aus bestehenden Datenpipelines berechnen, statt für jede Diensteänderung eine
  maßgeschneiderte ökonomische Evaluation in Auftrag zu geben.
- WELLBYs geben technischen Teams, die für [Gesetz-über-sozialen-Wert](../social-value-act/)-Berichterstattung
  oder [soziale Kapitalrendite](../social-return-on-investment/) bauen, einen national
  standardisierten, von HM Treasury gebilligten Nenner, was die Verbreitung
  maßgeschneiderter "Wirkungswerte" vermeidet, die über Verträge oder Anbieter hinweg nicht
  vergleichbar sind.
- Weil WELLBYs über Menschen und Zeit hinweg additiv sind, fügen sie sich sauber in die Art
  bevölkerungsweiter Ergebnisverfolgung ein, die in Systemen der [ergebnisorientierten
  Rechenschaftspflicht](../outcomes-based-accountability/) verwendet wird — ein Dienst-Dashboard
  kann kumulative WELLBYs pro Quartal berichten, wie ein Gesundheitssystem gewonnene QALYs
  berichtet.

## Fallstricke

- **Annehmen, selbstberichtete Zufriedenheitsgewinne seien vollständig der Intervention
  zurechenbar** — ohne ein Kontrafaktum (Vergleichsgruppe oder Vorher-Nachher-Design mit
  Kontrollen) können Sie den WELLBY-Gewinn nicht von allgemeinen Trends trennen; siehe
  [kontrafaktische Analyse](../counterfactual-analysis/).
- **WELLBYs und QALYs ohne Abgleich in einer Summe mischen** — HM Treasurys Leitlinie stellt
  ausdrücklich klar, dass beide unterschiedliche Skalen und unterschiedliche zugrunde liegende
  Werttheorien verwenden; sie naiv zu summieren, zählt überlappende Wohlfahrt doppelt.
- **Den Referenzgeldwert unkritisch verwenden** — die £-pro-WELLBY-Zahl ist eine nationale
  Durchschnittsschätzung mit echten Unsicherheitsbändern; HM Treasurys Leitlinie empfiehlt
  Sensitivitätsanalyse, nicht die Behandlung als festen Wechselkurs.

## Quellen

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
