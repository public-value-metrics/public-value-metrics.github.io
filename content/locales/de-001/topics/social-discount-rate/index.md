# Sozialer Diskontsatz

Der soziale Diskontsatz rechnet zukünftige Kosten und Nutzen in heutige Werte um, damit Programme
mit über Jahrzehnte verteilten Auszahlungen auf gemeinsamer Grundlage verglichen werden können. HM
Treasurys Green Book schreibt einen fallenden Zeitplan vor, verankert bei 3,5 % für die ersten 30
Jahre, basierend auf der Ramsey-Formel — eine konkrete, zitierfähige Zahl, die zu einem lebendigen
politischen und ethischen Streitpunkt wird, sobald sie auf langfristige Verpflichtungen wie
Klimapolitik oder Infrastruktur angewendet wird.

## Warum das wichtig ist

Ein Pfund Nutzen, das in 30 Jahren anfällt, ist nicht so viel wert wie ein Pfund Nutzen heute, aus
Gründen, die teils reine Zeitpräferenz betreffen (Menschen und Gesellschaften bevorzugen gute Dinge
früher) und teils Wachstum (eine zukünftige Gesellschaft dürfte reicher sein, sodass ihr ein Pfund
am Rand weniger bedeutet). Anhang 6 des Green Book leitet den britischen Standarddiskontsatz aus
der Ramsey-Formel her, indem er eine Rate reiner Zeitpräferenz mit der erwarteten Wachstumsrate des
Konsums und der Elastizität des Grenznutzens des Konsums kombiniert, was den veröffentlichten Satz
von 3,5 % pro Jahr für die Jahre 0–30 ergibt, der in einem veröffentlichten Zeitplan für Jahr 31 und
darüber hinaus abnimmt (bis auf 1 % für die Jahre 301+). Dieser Zeitplan existiert genau deshalb,
weil ein konstanter Satz von 3,5 % über ein Jahrhundert kumuliert praktisch jeden langfristigen
Nutzen — einen Hochwasserschutz, der in 80 Jahren Leben rettet, eine CO2-Reduktion, die in 100
Jahren Schaden vermeidet — im Barwert vernachlässigbar erscheinen ließe, was das Treasury als eine
unplausible ethische Schlussfolgerung für wirklich langlebige Infrastruktur- und
Umweltentscheidungen ansah.

Der Diskontsatz ist umstritten, gerade weil die Wahl kein neutraler technischer Parameter ist: Sie
kodiert ein Urteil darüber, wie viel eine Gesellschaft heute für noch nicht geborene Menschen
opfern sollte. Der Stern-Bericht zur Ökonomie des Klimawandels (2006) verwendete einen Diskontsatz
nahe null (eine reine Zeitpräferenz nahe 0,1 %) und argumentierte, dass die Diskontierung des
Wohlergehens zukünftiger Generationen mit etwas Vergleichbarem wie Marktzinsen ethisch nicht
vertretbar sei, wenn der Schaden (katastrophaler Klimawandel) irreversibel ist. Kritiker — allen
voran William Nordhaus — argumentierten, Sterns nahezu null liegender Satz überzeichne die Dringlichkeit
sofortiger Klimaausgaben, indem er fast jede heutige Ausgabe gegenüber einem kaum diskontierten
zukünftigen Nutzen gerechtfertigt erscheinen lasse. Der Streit betraf nicht die Mathematik, sondern
die Frage, wessen ethisches Rahmenwerk den Satz festlegen sollte, und er bleibt das
Standardbeispiel dafür, warum der Diskontsatz eine politische Entscheidung ist, kein bloß
versicherungsmathematischer Input.

## Die Berechnung

Die dem Green-Book-Satz zugrunde liegende Ramsey-Formel:

```
r = ρ + η·g

wobei:
  r = sozialer Diskontsatz
  ρ = Rate reiner Zeitpräferenz (Ungeduld + Katastrophenrisiko)
  η = Elastizität des Grenznutzens des Konsums
  g = erwartete jährliche Wachstumsrate des Pro-Kopf-Konsums
```

Der fallende Zeitplan des Green Book (Anhang 6, illustrativ — die aktuelle Ausgabe für die genaue
veröffentlichte Tabelle prüfen):

```
Jahre 0–30:    3,5 %
Jahre 31–75:   3,0 %
Jahre 76–125:  2,5 %
Jahre 126–200: 2,0 %
Jahre 201–300: 1,5 %
Jahre 301+:    1,0 %
```

Barwert einer zukünftigen Summe:

```
PV = FV / (1 + r)^t
```

## Beispielrechnung

**Hochwasserschutzprojekt**: Ein Projekt liefert 10 Millionen £ vermiedenen Hochwasserschaden in
Jahr 40.

Mit einem flachen Satz von 3,5 %: PV = 10.000.000 / (1,035)^40 ≈ 2,52 Millionen £ — der Nutzen
erscheint klein.

Mit dem fallenden Zeitplan des Green Book (3,5 % für die Jahre 0–30, danach 3,0 %) kumuliert die
Berechnung mit 3,5 % für die ersten 30 Jahre und 3,0 % für die Jahre 31–40:

```
PV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ 2,65 Millionen £
```

Der fallende Zeitplan hebt den Barwert langfristiger Nutzen im Vergleich zu einem flachen hohen
Satz moderat an — der ausdrückliche Zweck des Zeitplans, denn ein flacher Satz von 3,5 % über ein
Jahrhundert würde einen Nutzen von 100 Millionen £ in Jahr 100 auf unter 3,3 Millionen £
diskontieren.

**Digitale Infrastruktur**: Eine staatliche Cloud-Migration mit heutigen Kosten von 4 Millionen £
soll voraussichtlich 500.000 £/Jahr an Altsystem-Wartungskosten über 15 Jahre vermeiden. Bei 3,5 %
beträgt der Barwert dieser Annuität etwa 500.000 £ × 11,52 (der 15-Jahres-Annuitätsfaktor bei
3,5 %) ≈ 5,76 Millionen £ — deutlich über den Kosten von 4 Millionen £, ein positiver
Kapitalwert-Fall, der bei einem naiv gewählten höheren Satz deutlich schwächer aussähe (bei 7 %
fällt derselbe Annuitätsfaktor auf etwa 9,11, was 4,56 Millionen £ ergibt — noch positiv, aber mit
weit geringerer Marge).

## Bezug zur Softwareentwicklung

Die meisten Software-Business-Cases laufen über 3–5 Jahre, bequem innerhalb des flachen
3,5-%-Bandes, sodass der fallende Zeitplan selten direkt greift — aber die zugrunde liegende
Disziplin ist wichtig für jede staatliche Technologieinvestition mit langer Nutzungsdauer (eine
landesweite Plattform, ein Datenprogramm, ein mehrere Jahrzehnte laufender Vertrag):

- Verwenden Sie den veröffentlichten Satz des Green Book statt eines internen "Hurdle Rate" aus der
  Privatwirtschaft; Prüfer und Treasury-Gutachter erwarten den Standardzeitplan.
- Bei Nutzen, der erst viele Jahre später anfällt (langfristige Wartungseinsparungen einer
  Plattform, der sich verstärkende Wert eines Open-Data-Ökosystems — siehe [Wert offener
  Daten](../open-data-value/)), kann die Diskontierungswahl einen Business Case von positiv auf
  negativ kippen; machen Sie Satz und Zeithorizont zu expliziten Annahmen, nicht zu vergrabenen
  Standardwerten.
- Dies fließt unmittelbar in [Green-Book-Bewertung](../green-book-appraisal/) ein, das
  Fünf-Fälle-Modell, das formal einen diskontierten Cashflow verlangt, sowie in
  [Wohlfahrtsbewertung](../wellbeing-valuation/), wo dieselbe Diskontierungsfrage für nicht
  monetäre Wohlfahrtsnutzen auftritt.
- Siehe auch [Generationengerechtigkeit und Nachhaltigkeitsdiskontierung](../intergenerational-equity-and-sustainability-discounting/)
  für die Debatte Stern gegen Nordhaus, speziell angewandt auf Umwelt- und
  Klimatechnologieinvestitionen.

## Fallstricke

- **Einen flachen Satz für sehr lange Zeithorizonte verwenden.** Der fallende Zeitplan des Green
  Book existiert genau deshalb, weil ein konstanter Satz wirklich langfristige Nutzen unterschätzt;
  prüfen Sie, welches Band gilt, statt durchgängig auf 3,5 % zurückzugreifen.
- **Den Diskontsatz als ethisch neutral behandeln.** Der Streit zwischen Stern und Nordhaus zeigt,
  dass der Satz ein Werturteil über zukünftige Generationen kodiert; ihn zu ändern, ändert, welche
  Programme gerechtfertigt erscheinen, sodass er ausdrücklich genannt und verteidigt werden sollte,
  nicht in einem Tabellen-Standardwert verborgen.
- **Den sozialen Diskontsatz mit privaten Kapitalkosten verwechseln.** Staatliche
  Kreditkosten und private Hurdle Rates sind andere Konzepte als der aus der Ramsey-Formel
  abgeleitete soziale Satz, und das eine für das andere in einer öffentlichen Bewertung
  einzusetzen, verzerrt das Ergebnis typischerweise zugunsten kurzfristiger Renditen.
- **Reale und nominale Zahlungsströme inkonsistent diskontieren.** Der Green-Book-Satz ist ein
  realer (inflationsbereinigter) Satz; nominale Zahlungsströme damit zu diskontieren, unterschätzt
  Barwerte wesentlich.

## Quellen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
