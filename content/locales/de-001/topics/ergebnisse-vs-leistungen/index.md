# Ergebnisse vs. Leistungen

Eine Leistung (Output) ist das direkte, zählbare Produkt einer Aktivität — sie existiert in dem
Moment, in dem die Lieferung geschieht, unabhängig davon, welche Wirkung sie hat. Ein Ergebnis
(Outcome) ist die Veränderung, die für die beteiligten Menschen, den Ort oder das System folgt.
"500 Menschen nahmen an einem Bewerbungsworkshop teil" ist eine Leistung: Das stimmt selbst dann,
wenn keiner von ihnen Arbeit findet. "Die Beschäftigungsaussichten von 500 Menschen verbesserten
sich" ist eine Ergebnisbehauptung, und sie erfordert Evidenz der Veränderung, nicht nur Evidenz der
Teilnahme — die Verwechslung, die mehr irreführende Zuschussberichte erzeugt als fast jeder andere
Messfehler im Sektor.

## Warum das wichtig ist

HM Treasurys Magenta Book und Geldgeber wie der National Lottery Community Fund verlangen beide
ausdrücklich Ergebnisberichterstattung, weil Leistungen das sind, was Programme standardmäßig
berichten: Sie sind billig zu zählen, immer verfügbar und sehen immer positiv aus. Eine
Leistungszahl kann buchstäblich niemals sinken, weil das Programm scheitert — mehr durchgeführte
Sitzungen sind immer "mehr", während ein Ergebnis offenbaren kann, dass ein Programm nicht wirkt.
Das National Audit Office hat Regierungsprogramme wiederholt dafür kritisiert, Aktivitätsniveaus zu
berichten, als wären sie Erfolgsnachweise; ein Softwaresystem, das nur Leistungen leicht
berichtbar macht, verstärkt dies standardmäßig, weil Leistungen keine
Nachverfolgungsdatenerhebung erfordern und Ergebnisse schon.

## Die Berechnung

Es gibt keine Formel, aber es gibt einen verlässlichen Test zur Klassifizierung einer Kennzahl:

```
Leistungstest:  ist sie am Lieferpunkt zählbar, wahr selbst wenn die
                empfangende Person nicht betroffen ist?
Ergebnistest:   erfordert sie einen Vorher/Nachher- oder
                Mit/Ohne-Vergleich, um bedeutsam zu sein?

Wenn eine Zahl bei null Nutzen für irgendjemanden wahr sein kann, ist
sie eine Leistung.
```

Dies fügt sich in die weitere Kette des [Wirkungsmodells](../wirkungsmodell/) ein und hängt von den
Ergebnisgliedern ab, die in einer [Theorie des Wandels](../theorie-des-wandels/) definiert werden; ein
Ergebnis in Geld umzurechnen, nutzt die Methoden in [sozialer Kapitalrendite](../soziale-kapitalrendite/).

## Beispielrechnung

**Kommunalverwaltung (Beschäftigungsförderung)**: Leistung — 500 Menschen nahmen an
Bewerbungsworkshops teil. Ergebnis — bei der 12-Monats-Nachverfolgung sind 140 dieser 500 (28 %) in
dauerhafter Beschäftigung (6+ Monate). Eine Vergleichsgruppe mit ähnlichen Merkmalen, aber ohne
Programmzugang, hat im selben Zeitraum eine Basisbeschäftigungsrate von 15 %. Netto-Ergebnisgewinn:
28 % − 15 % = 13 Prozentpunkte, sodass schätzungsweise 500 × 0,13 = 65 zusätzliche Menschen in Arbeit
sind, die es sonst nicht wären — das zurechenbare Ergebnis, verschieden sowohl von der
Teilnahmezahl 500 als auch von der rohen Beschäftigungszahl 140.

**Wohltätigkeitsorganisation (Leseförderungsorganisation)**: Leistung — 1.200 Lesesitzungen für 300
Kinder durchgeführt. Ergebnis — das durchschnittliche Lesealter verbesserte sich über 6 Monate um 8
Monate, gegenüber einer erwarteten natürlichen 6-Monats-Fortschrittsbasislinie von 6 Monaten.
Netto-Ergebnisgewinn: 8 − 6 = 2 Monate zusätzliche Verbesserung des Lesealters pro Kind, dem
Programm zurechenbar, nicht die vollen 8 Monate.

## Bezug zur Softwareentwicklung

Ereignisprotokolle und Transaktionssysteme instrumentieren Leistungen fast automatisch —
Seitenaufrufe, Sitzungen, geschlossene Tickets, gebuchte Termine —, weil sie erzeugt werden, indem
das System seine Aufgabe erfüllt. Ergebnisse erfordern ein Datenmodell, das dieselbe Person zu
einem späteren Zeitpunkt gegen eine Basislinie oder Vergleichsgruppe erfasst, was bewusst gestaltet
werden muss: Nachverfolgungserhebungen, verknüpfte Verwaltungsdaten oder eine Vergleichskohorte.
Ein Berichtswerkzeug, das nur Ersteres unterstützt, wird eine Organisation stillschweigend in
Richtung reiner Leistungsberichterstattung lenken, egal was der Geldgeber verlangt hat. Siehe
[Wirkungsmodell](../wirkungsmodell/) dazu, wo Ergebnisse in der Rechenschaftskette stehen,
[Kosten pro Ergebnis](../kosten-pro-ergebnis/) dazu, diese Unterscheidung in eine
Stückkosten-Kennzahl zu übersetzen, und [KPIs im öffentlichen Sektor](../kpis-im-öffentlichen-sektor/) für
das breitere Muster der Kennzahlenauswahl.

## Fallstricke

- **Leistungen berichten, als wären sie Ergebnisse.** "500 Menschen nahmen teil" suggeriert Nutzen,
  ohne ihn nachzuweisen; kennzeichnen Sie Teilnahme ausdrücklich als Leistung.
- **Keine Basislinie oder Vergleichsgruppe.** Eine Ergebniszahl ohne Kontrafaktum — siehe
  [kontrafaktische Analyse](../kontrafaktische-analyse/) — kann die Programmwirkung nicht von dem
  trennen, was ohnehin passiert wäre.
- **Auf die geförderte Kennzahl optimieren.** Wenn Förderung an das Leistungsvolumen gekoppelt ist,
  maximieren Umsetzungsteams rational die Teilnahme statt dauerhafter Veränderung — ein
  Fehlermuster des Goodhart'schen Gesetzes.
- **Ergebnis-Weißwäscherei.** Eine Leistungskennzahl mit nach Ergebnis klingender Sprache umbenennen
  ("Engagement-Ergebnisse: 500 Teilnehmende"), ohne dahinter eine Nachverfolgungsmessung zu haben.

## Quellen

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
